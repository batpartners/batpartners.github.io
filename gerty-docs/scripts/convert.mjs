// Converts the Jekyll GERTY docs (batpartners.github.io) into Starlight MDX.
//
//   npm run convert            (source: the repo this project sits in, or D:/batpartners.github.io, or DOCS_SRC)
//
// Re-runnable: it rewrites src/content/docs (except files listed in KEEP), src/sidebar.generated.json,
// src/styles/media-widths.css, public/assets and the legacy redirect pages, from the current working tree of the
// source repo (uncommitted edits included). The posts are only read, never written. public/assets and
// assets-manifest.json are committed, so a build on GitHub reuses them instead of converting every video again.
//
// A few known problems in the source posts are fixed while reading them (scripts/posts.mjs).
//
// What it does per page:
// - front matter -> { title, description }; Korean pages at the root, English under /en/ (same file name).
// - drops the inline <style> blocks, the Liquid language-switch line and kramdown {: ...} attributes.
// - radio-button "tabs-container" HTML -> <Tabs><TabItem label="..."> (Starlight).
// - centred <p>/<figure>/<video> media -> <div class="doc-media"> with width classes (src/styles/media-widths.css).
// - heavy GIFs -> looping MP4, heavy MP4s re-encoded (ffmpeg); external images (postimg, WordPress) downloaded.
// - links to old doc URLs -> new URLs in the page's language; headings shifted one level down (the title is the h1).
// - every old URL (both languages, plus the %20 "about gerty" paths) gets a small redirect page in public/.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import ffmpegStatic from "ffmpeg-static";
import sharp from "sharp";
import yaml from "js-yaml";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import { toMdast } from "hast-util-to-mdast";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";
import { docsSource, loadPosts, parseOld } from "./posts.mjs";
import { HOMEPAGE } from "../src/homepage.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = docsSource(ROOT);
const DOCS = path.join(ROOT, "src/content/docs");
const PUBLIC = path.join(ROOT, "public");
const FFMPEG = process.env.FFMPEG_PATH || ffmpegStatic || "ffmpeg";
/** Generated asset (path under public/) -> SHA-1 of the source it was made from. */
const MANIFEST = path.join(ROOT, "assets-manifest.json");
const SITE_OLD = "https://batpartners.github.io";
/** Hand-written pages the converter must not overwrite (paths relative to src/content/docs), e.g. "en/foo.mdx". */
const KEEP = new Set([]);
const GIF_TO_VIDEO_BYTES = 3 * 1024 * 1024;
const REENCODE_VIDEO_BYTES = 2 * 1024 * 1024;

const warnings = [];
const warn = (msg) => warnings.push(msg);

// ---------------------------------------------------------------------------------------------------------------
// 1. Read posts and build the old -> new URL map
// ---------------------------------------------------------------------------------------------------------------
const posts = loadPosts(SRC);
// Old path (without /en) -> new slug. Korean permalinks first; English ones only add keys Korean does not have.
const slugByKey = new Map();
for (const p of [...posts.filter((x) => x.locale === "ko"), ...posts.filter((x) => x.locale === "en")]) {
  if (!slugByKey.has(p.key)) slugByKey.set(p.key, p.slug);
}
const findSlug = (key) => slugByKey.get(key) ?? slugByKey.get([...slugByKey.keys()].find((k) => k.toLowerCase() === key.toLowerCase()));
// Guards: one page per slug and language; both languages present; no new path equal to an old one ignoring case
// (Windows file systems would merge a redirect page with the real page).
{
  for (const locale of ["ko", "en"]) {
    const seen = new Map();
    for (const p of posts.filter((x) => x.locale === locale)) {
      if (seen.has(p.slug)) throw new Error(`Slug clash (${locale}): ${p.slug} <- ${seen.get(p.slug)} and ${p.file}`);
      seen.set(p.slug, p.file);
    }
  }
  const oldPaths = new Set(posts.map((p) => p.key.toLowerCase()));
  for (const p of posts) if (oldPaths.has(`/${p.slug}/`)) throw new Error(`New path equals an old path ignoring case: ${p.slug}`);
  const ko = new Set(posts.filter((p) => p.locale === "ko").map((p) => p.slug));
  const en = new Set(posts.filter((p) => p.locale === "en").map((p) => p.slug));
  for (const s of ko) if (!en.has(s)) warn(`No English page for ${s}`);
  for (const s of en) if (!ko.has(s)) warn(`No Korean page for ${s}`);
  for (const p of posts.filter((x) => x.locale === "en")) {
    const ko = posts.find((x) => x.locale === "ko" && x.file === p.file);
    if (ko && (p.keyLocale !== "en" || p.key !== ko.key)) warn(`Old English URL differs from the Korean one: ${p.file} (${p.keyLocale === "en" ? "/en" : ""}${p.key})`);
  }
}

/** New URL for an old doc link, in the given language (null when it is not a doc page). */
function mapDocUrl(href, locale) {
  if (href.startsWith("#") || /^(mailto|tel):/i.test(href)) return null;
  const m = href.match(/^(?:https?:\/\/batpartners\.github\.io)?(\/[^#?]*)?(#.*)?$/i);
  if (!m) return null;
  const { key } = parseOld(m[1] || "/");
  if (key === "/") return locale === "en" ? "/en/" : "/";
  const slug = findSlug(key);
  if (!slug) return null;
  return `${locale === "en" ? "/en" : ""}/${slug}/${m[2] ?? ""}`;
}

// ---------------------------------------------------------------------------------------------------------------
// 2. Media: copy what pages use, convert heavy GIF/MP4, download external images
// ---------------------------------------------------------------------------------------------------------------
const mediaCache = new Map(); // source src -> { kind: "img"|"video", src }
const keptAssets = new Set(); // absolute paths under public/assets that pages use (everything else is pruned)
const widthCss = new Map(); // class -> css rule (src/styles/media-widths.css)

function ffmpeg(args) {
  execFileSync(FFMPEG, ["-y", "-loglevel", "error", ...args], { stdio: ["ignore", "ignore", "pipe"] });
}

// "Already converted?" is decided by the source's content (assets-manifest.json), not file times: a git checkout gives
// every file a new time. Outputs made before the manifest existed fall back to comparing times once.
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};
const sha1Cache = new Map();
const sha1 = (file) => {
  if (!sha1Cache.has(file)) sha1Cache.set(file, crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex"));
  return sha1Cache.get(file);
};
const assetKey = (out) => path.relative(PUBLIC, out).split(path.sep).join("/");

/** True when `out` exists and was made from this version of `src`; records it either way once it is up to date. */
function fresh(out, src) {
  if (!fs.existsSync(out)) return false;
  const known = manifest[assetKey(out)];
  const ok = known ? known === sha1(src) : fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;
  if (ok) manifest[assetKey(out)] = sha1(src);
  return ok;
}

/** Records that `out` was just made from `src`. */
function made(out, src) {
  manifest[assetKey(out)] = sha1(src);
}

async function download(url, out) {
  if (fs.existsSync(out)) return true;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(String(res.status));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    return true;
  } catch (e) {
    warn(`Download failed ${url}: ${e.message}`);
    return false;
  }
}

/** Resolves an image/video src from the old site to what the new site serves. */
async function media(src) {
  if (mediaCache.has(src)) return mediaCache.get(src);
  let result = null;
  let rel = null; // path under the old repo
  if (/^https?:\/\//i.test(src) && !/^https?:\/\/batpartners\.github\.io/i.test(src)) {
    // External (postimg, old WordPress uploads): bring it into the repo.
    const name = decodeURIComponent(new URL(src).pathname.split("/").pop());
    const out = path.join(PUBLIC, "assets/images/external", name);
    if (await download(src, out)) result = { kind: "img", src: `/assets/images/external/${name}` };
  } else {
    rel = decodeURIComponent(src.replace(/^https?:\/\/batpartners\.github\.io/i, "").split(/[?#]/)[0]).replace(/^\//, "");
    const from = path.join(SRC, rel);
    if (!fs.existsSync(from)) {
      warn(`Missing media ${src}`);
    } else {
      const size = fs.statSync(from).size;
      const ext = path.extname(rel).toLowerCase();
      const base = path.basename(rel, ext);
      if ((ext === ".gif" && size > GIF_TO_VIDEO_BYTES) || (ext === ".mp4" && size > REENCODE_VIDEO_BYTES)) {
        const outRel = `assets/media/${base.replace(/[^\w.-]+/g, "_")}.mp4`;
        const out = path.join(PUBLIC, outRel);
        if (!fresh(out, from)) {
          fs.mkdirSync(path.dirname(out), { recursive: true });
          // Looping silent clip, max 1280 px wide, even dimensions for H.264.
          ffmpeg([
            "-i", from, "-an", "-movflags", "+faststart", "-pix_fmt", "yuv420p",
            "-vf", "scale='min(1280,iw)':-2:flags=lanczos,scale=trunc(iw/2)*2:trunc(ih/2)*2",
            "-c:v", "libx264", "-preset", "slow", "-crf", ext === ".gif" ? "25" : "27", out,
          ]);
          made(out, from);
        }
        result = { kind: "video", src: `/${outRel}` };
      } else {
        const out = path.join(PUBLIC, rel);
        if (!fresh(out, from)) {
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.copyFileSync(from, out);
          made(out, from);
        }
        result = { kind: ext === ".mp4" || ext === ".webm" ? "video" : "img", src: "/" + rel.split("/").map(encodeURIComponent).join("/") };
      }
    }
  }
  if (result) keptAssets.add(path.join(PUBLIC, decodeURIComponent(result.src)));
  mediaCache.set(src, result);
  return result;
}

/** width="32%" / "576px" -> a class from the generated stylesheet. */
const naturalCache = new Map();
/** Pixel width of a raster image under public/ (null for SVG or when unreadable). */
async function naturalWidth(src) {
  if (!naturalCache.has(src)) {
    const file = path.join(PUBLIC, decodeURIComponent(src));
    let w = null;
    if (!/\.svg$/i.test(file)) {
      try {
        w = (await sharp(file).metadata()).width ?? null;
      } catch {
        warn(`Cannot read the size of ${src}`);
      }
    }
    naturalCache.set(src, w);
  }
  return naturalCache.get(src);
}

/**
 * Classes from the generated stylesheet for width="32%" / "576px", capped at the image's own pixel width
 * (`natural`) so a small screenshot is never stretched blurry. Selectors must outrank the max-width: 100% of
 * `.sl-markdown-content .doc-media :is(img, video)` in theme.css.
 */
function widthClasses(width, natural) {
  const add = (cls, css) => {
    widthCss.set(cls, `.sl-markdown-content .doc-media .${cls} { ${css} }`);
    return cls;
  };
  const cap = (px) => add(`wpx-${px}`, `width: 100%; max-width: min(100%, ${px}px);`);
  const w = String(width ?? "").trim();
  let m = w.match(/^(\d+(?:\.\d+)?)%$/);
  if (m) {
    const n = Math.round(parseFloat(m[1]));
    return [add(`w-${n}`, `width: ${n}%;`), natural ? add(`nw-${natural}`, `max-width: min(100%, ${natural}px);`) : null].filter(Boolean);
  }
  m = w.match(/^(\d+)(?:px)?$/);
  if (m) return [cap(natural ? Math.min(Number(m[1]), natural) : Number(m[1]))];
  return natural ? [add(`nw-${natural}`, `max-width: min(100%, ${natural}px);`)] : [];
}

// ---------------------------------------------------------------------------------------------------------------
// 3. HTML-level transforms (hast)
// ---------------------------------------------------------------------------------------------------------------
const isEl = (n, tag) => n?.type === "element" && (!tag || n.tagName === tag);
const classes = (n) => (n.properties?.className ?? []).map(String);
const hasClass = (n, c) => classes(n).includes(c);
const textOf = (n) => (n.type === "text" ? n.value : (n.children ?? []).map(textOf).join(""));
const blank = (n) => (n.type === "text" && !n.value.trim()) || n.type === "comment" || isEl(n, "br");
const el = (tagName, properties = {}, children = []) => ({ type: "element", tagName, properties, children });

function findAll(node, pred, out = []) {
  for (const c of node.children ?? []) {
    if (pred(c)) out.push(c);
    findAll(c, pred, out);
  }
  return out;
}

/** Media items in a node that holds only media (img, a>img, video, figcaption) and whitespace; null otherwise. */
/** Display width of an image/video: its width attribute, or a width set in its inline style (a few pages do that). */
const widthOf = (n) => n.properties.width ?? String(n.properties.style ?? "").match(/(?:^|;)\s*width:\s*([\d.]+%|\d+px)/)?.[1];

function mediaItems(node) {
  const items = [];
  let caption = null;
  const walk = (n) => {
    for (const c of n.children ?? []) {
      if (blank(c)) continue;
      if (isEl(c, "img")) items.push({ kind: "img", src: c.properties.src, alt: c.properties.alt ?? "", width: widthOf(c) });
      else if (isEl(c, "a") && c.children.filter((x) => !blank(x)).every((x) => isEl(x, "img"))) walk(c);
      else if (isEl(c, "video")) {
        const cap = c.children.find((x) => isEl(x, "figcaption"));
        if (cap) caption = textOf(cap).trim();
        items.push({ kind: "video", src: c.properties.src, width: widthOf(c) });
      } else if (isEl(c, "figcaption")) caption = textOf(c).trim();
      else if (isEl(c, "p") || isEl(c, "div")) {
        const inner = mediaItems(c);
        if (!inner) throw new Error("mixed");
        items.push(...inner.items);
        caption ??= inner.caption;
      } else throw new Error("mixed");
    }
  };
  try {
    walk(node);
  } catch {
    return null;
  }
  return items.length ? { items, caption } : null;
}

/**
 * A Markdown table row must stay on one line, so a cell's lists become "• item" lines and code with line breaks
 * becomes one code span per line, all joined by <br>.
 */
function flattenCell(cell) {
  // Markdown `code` written inside a raw HTML table cell is not parsed by the old site or here: make it code.
  const codeSpans = (node) => {
    if (isEl(node, "code") || isEl(node, "pre")) return;
    node.children = (node.children ?? []).flatMap((c) => {
      if (c.type !== "text" || !/`[^`]+`/.test(c.value)) {
        codeSpans(c);
        return [c];
      }
      return c.value.split(/(`[^`]+`)/).filter(Boolean).map((part) =>
        /^`[^`]+`$/.test(part) ? el("code", {}, [{ type: "text", value: part.slice(1, -1) }]) : { type: "text", value: part },
      );
    });
  };
  codeSpans(cell);
  const out = [];
  const endsWithBreak = () => isEl([...out].reverse().find((x) => !(x.type === "text" && !x.value.trim())), "br");
  for (const c of cell.children ?? []) {
    if (isEl(c, "ul") || isEl(c, "ol")) {
      (c.children ?? [])
        .filter((x) => isEl(x, "li"))
        .forEach((li, i) => {
          if (out.length && !endsWithBreak()) out.push(el("br"));
          out.push({ type: "text", value: isEl(c, "ol") ? `${i + 1}. ` : "• " }, ...li.children);
        });
    } else if (isEl(c, "code") && c.children?.some((x) => isEl(x, "br"))) {
      const lines = [[]];
      for (const x of c.children) {
        if (isEl(x, "br")) lines.push([]);
        else lines.at(-1).push(x);
      }
      lines
        .filter((l) => l.length)
        .forEach((l, i) => out.push(...(i ? [el("br")] : []), el("code", {}, l)));
    } else out.push(c);
  }
  cell.children = out;
}

/**
 * Links to the homepage or its license form go straight to the homepage's address (HOMEPAGE, not the forwarded bare
 * domain), and on English pages to the English version.
 */
const localizeHomepage = (href, locale) =>
  href.replace(/^https?:\/\/(?:www\.)?b-at\.kr\/(gerty-license-form\/?)?$/i, (_, p) => `${HOMEPAGE}/${locale === "en" ? "en/" : ""}${p ?? ""}`);

/** Rewrites one page's hast in place (async because media may be converted or downloaded). */
async function transform(tree, ctx) {
  async function visit(parent) {
    const out = [];
    for (const node of parent.children ?? []) {
      if (node.type === "comment") continue;
      if (node.type !== "element") {
        out.push(node);
        continue;
      }
      // Leftovers of the CSS-only tabs (inputs/labels), handled inside tabs-container below.
      if (isEl(node, "input") || (isEl(node, "ul") && hasClass(node, "tab-buttons"))) continue;

      if (hasClass(node, "tabs-container")) {
        const labels = findAll(node, (n) => isEl(n, "label")).map((l) => textOf(l).trim());
        const panels = (node.children ?? []).filter((c) => hasClass(c, "tab-content"));
        if (labels.length !== panels.length) warn(`${ctx.id}: tabs with ${labels.length} labels and ${panels.length} panels`);
        const tabs = [];
        for (let i = 0; i < Math.min(labels.length, panels.length); i++) {
          const panel = el("div", {}, panels[i].children);
          await visit(panel);
          tabs.push(el("x-tab", { label: labels[i] || `Tab ${i + 1}` }, panel.children));
        }
        out.push(el("x-tabs", {}, tabs));
        ctx.usesTabs = true;
        // Content that is inside the container but not in a panel: a few pages never close the container, so the
        // rest of the page ends up in it. Keep it, after the tabs.
        const rest = (node.children ?? []).filter(
          (c) => !hasClass(c, "tab-content") && !isEl(c, "input") && !(isEl(c, "ul") && hasClass(c, "tab-buttons")) && !blank(c),
        );
        if (rest.length) {
          const holder = el("div", {}, rest);
          await visit(holder);
          out.push(...holder.children);
        }
        continue;
      }

      if (isEl(node, "p") && node.properties?.dataYoutube) {
        out.push(el("x-youtube", { id: String(node.properties.dataYoutube) }));
        ctx.usesYouTube = true;
        continue;
      }

      // Media-only blocks: centred paragraphs, figures, bare images/videos, stray tab panels.
      const inPhrasing = ["p", "a", "td", "th", "li", "span", "strong", "em", "label"].includes(parent.tagName);
      if (!inPhrasing && ["p", "div", "figure", "video", "img"].includes(node.tagName)) {
        const found = isEl(node, "img") || isEl(node, "video") ? mediaItems(el("div", {}, [node])) : mediaItems(node);
        if (found) {
          const items = [];
          for (const it of found.items) {
            const m = await media(it.src);
            if (!m) continue;
            const kind = m.kind === "video" ? "video" : it.kind;
            items.push({ ...it, kind, src: m.src, natural: kind === "img" ? await naturalWidth(m.src) : null });
          }
          if (items.length) out.push(el("x-media", { items: JSON.stringify(items), caption: found.caption ?? "" }));
          continue;
        }
      }

      if (/^h[1-6]$/.test(node.tagName)) {
        const level = Math.min(6, Number(node.tagName[1]) + 1);
        node.tagName = `h${level}`;
        node.children = node.children.filter((c) => !isEl(c, "br"));
        // "| 입력(Input)" -> "입력 (Input)"
        const fix = (n) => {
          if (n.type === "text") n.value = n.value.replace(/^\s*\|\s*/, "").replace(/([가-힣])\(/g, "$1 (");
          n.children?.forEach(fix);
        };
        fix(node);
      }

      if (isEl(node, "a") && node.properties?.href) {
        const href = String(node.properties.href);
        const mapped = mapDocUrl(href, ctx.locale);
        if (mapped) {
          node.properties = { href: mapped };
        } else {
          if (href.startsWith("/") || /batpartners\.github\.io/i.test(href)) warn(`${ctx.id}: unmapped internal link ${href}`);
          if (/^https?:\/\//i.test(href)) node.properties = { href: localizeHomepage(href, ctx.locale), target: "_blank", rel: ["noopener", "noreferrer"] };
        }
      }

      if (isEl(node, "td") || isEl(node, "th")) flattenCell(node);

      if (isEl(node, "img")) {
        const m = await media(node.properties.src);
        if (m) node.properties = { src: m.src, alt: node.properties.alt ?? "" };
      }

      // p align / table width/style attributes: drop presentational attributes
      if (node.properties) {
        delete node.properties.align;
        delete node.properties.style;
        delete node.properties.width;
        delete node.properties.height;
      }
      await visit(node);
      // Tables go in a scroll box, so one too wide for a small phone scrolls on its own instead of the whole page.
      out.push(isEl(node, "table") ? el("x-table-scroll", {}, [node]) : node);
    }
    parent.children = out;
  }
  await visit(tree);
}

// ---------------------------------------------------------------------------------------------------------------
// 4. hast -> mdast (MDX JSX for tabs, media, <br>), then MDX text
// ---------------------------------------------------------------------------------------------------------------
const attr = (name, value = null) => ({ type: "mdxJsxAttribute", name, value });
const jsxFlow = (name, attributes = [], children = []) => ({ type: "mdxJsxFlowElement", name, attributes, children });

const handlers = {
  "x-tabs": (state, node) =>
    jsxFlow(
      "Tabs",
      [],
      node.children.map((tab) => jsxFlow("TabItem", [attr("label", tab.properties.label)], state.toFlow(state.all(tab)))),
    ),
  "x-media": (_state, node) => {
    const items = JSON.parse(node.properties.items);
    const kids = items.map((it) => {
      const cls = widthClasses(it.width, it.natural).join(" ");
      if (it.kind === "video") {
        return jsxFlow("video", [
          attr("src", it.src),
          attr("autoplay"),
          attr("muted"),
          attr("loop"),
          attr("playsinline"),
          attr("preload", "metadata"),
          ...(cls ? [attr("class", cls)] : []),
        ]);
      }
      return jsxFlow("img", [attr("src", it.src), attr("alt", it.alt || ""), attr("loading", "lazy"), ...(cls ? [attr("class", cls)] : [])]);
    });
    if (node.properties.caption) kids.push(jsxFlow("figcaption", [], [{ type: "paragraph", children: [{ type: "text", value: node.properties.caption }] }]));
    return jsxFlow(node.properties.caption ? "figure" : "div", [attr("class", "doc-media")], kids);
  },
  "x-youtube": (_state, node) => jsxFlow("YouTube", [attr("id", node.properties.id)]),
  "x-table-scroll": (state, node) => jsxFlow("div", [attr("class", "table-scroll")], state.toFlow(state.all(node))),
  br: () => ({ type: "mdxJsxTextElement", name: "br", attributes: [], children: [] }),
};

const toMdx = unified().use(remarkGfm).use(remarkMdx).use(remarkStringify, {
  bullet: "-",
  emphasis: "*",
  strong: "*",
  fences: true,
  rule: "-",
  listItemIndent: "one",
});

function cleanSource(body, id) {
  let md = body
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/^.*\{\{\s*page\.translation_link[^}]*\}\}.*$/gm, "")
    .replace(/\{%\s*include\s+video\s+id="([^"]+)"\s+provider="youtube"\s*%\}/g, '\n\n<p data-youtube="$1"></p>\n\n')
    .replace(/\{:\s*[^}]*\}/g, "")
    // **bold** that runs straight into a letter (e.g. "**[Show joint Jog Params]**를") is bold on the old site (kramdown)
    // but not in CommonMark, which would print the asterisks: write it as HTML.
    .replace(/\*\*(?=\S)([^*\n]+?)(?<=\S)\*\*(?=[가-힣A-Za-z0-9])/g, "<strong>$1</strong>");
  const liquid = md.match(/\{[{%][\s\S]*?[}%]\}/g);
  if (liquid) {
    warn(`${id}: removed Liquid ${liquid.join(" ")}`);
    md = md.replace(/\{[{%][\s\S]*?[}%]\}/g, "");
  }
  return md;
}

function firstSentence(mdast) {
  let text = "";
  const walk = (n) => {
    if (text) return;
    if (n.type === "paragraph") {
      const t = n.children
        .map((c) => (c.type === "text" ? c.value : c.type === "inlineCode" ? c.value : c.children ? c.children.map((x) => x.value ?? "").join("") : ""))
        .join("")
        .replace(/\s+/g, " ")
        .trim();
      if (t.length > 15) text = t;
      return;
    }
    if (n.type === "heading" || n.type === "mdxJsxFlowElement") return;
    n.children?.forEach(walk);
  };
  walk(mdast);
  return text.length > 160 ? text.slice(0, 157).replace(/\s+\S*$/, "") + "…" : text;
}

async function convertPost(post) {
  const ctx = { id: `${post.locale}/${post.slug}`, locale: post.locale, usesTabs: false, usesYouTube: false };
  const md = cleanSource(post.body, ctx.id);
  const toHast = unified().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw);
  const hast = await toHast.run(toHast.parse(md));
  await transform(hast, ctx);
  const mdast = toMdast(hast, { handlers });
  const body = toMdx.stringify(mdast).trim();

  const relFile = `${post.locale === "en" ? "en/" : ""}${post.slug}.mdx`;
  const depth = relFile.split("/").length - 1; // from src/content/docs/<...>/file.mdx to src/
  const up = "../".repeat(depth + 2);
  const imports = [
    ctx.usesTabs ? `import { Tabs, TabItem } from "@astrojs/starlight/components";` : null,
    ctx.usesYouTube ? `import YouTube from "${up}components/YouTube.astro";` : null,
  ].filter(Boolean);
  const description = firstSentence(mdast);
  const front = {
    title: String(post.fm.title ?? post.slug).trim(),
    ...(description ? { description } : {}),
  };
  const fm = yaml.dump(front, { lineWidth: 1000, quotingType: '"' }).trim();
  return { relFile, text: `---\n${fm}\n---\n${imports.length ? "\n" + imports.join("\n") + "\n" : ""}\n${body}\n` };
}

// ---------------------------------------------------------------------------------------------------------------
// 5. Sidebar from _data/navigation.yml
// ---------------------------------------------------------------------------------------------------------------
const GROUP_LABELS = {
  "0. About GERTY": { label: "GERTY 소개", translations: { en: "About GERTY" } },
  "7. Constroller Utils": { label: "Controller Utils" },
};

const deadNavKeys = new Map(); // dead old sidebar URL -> slug (filled by buildSidebar)

function buildSidebar() {
  const nav = yaml.load(fs.readFileSync(path.join(SRC, "_data/navigation.yml"), "utf8"));
  const used = new Set();
  const toItem = (n) => {
    const { key } = parseOld(n.url);
    let slug = findSlug(key);
    if (!slug) {
      // The old sidebar has a few dead URLs; match the page by its title instead and keep a redirect for the dead URL.
      const byTitle = posts.find((p) => p.locale === "ko" && String(p.fm.title).trim().toLowerCase() === String(n.title).trim().toLowerCase());
      if (!byTitle) {
        warn(`Sidebar: no page for "${n.title}" (${n.url}) — left out`);
        return null;
      }
      slug = byTitle.slug;
      deadNavKeys.set(key, slug);
      warn(`Sidebar: dead old link ${n.url} for "${n.title}" — matched by title to ${slug} (redirect added)`);
    }
    used.add(slug);
    if (n.children?.length) {
      // The group's own page comes first, unless a child already links it (e.g. IndReset → "Numeric Reference");
      // listing it twice would make the "next page" link point back to the same page.
      // The own page is marked data-group-page: src/components/SidebarSublist.astro makes the group's title link to
      // it instead of repeating the same title as the first child. (It stays in the list for prev/next and "open".)
      const kids = n.children.map(toItem).filter(Boolean);
      const own = { slug, label: n.title, attrs: { "data-group-page": "" } };
      return {
        label: n.title,
        collapsed: true,
        items: kids.some((k) => k.slug === slug) ? kids : [own, ...kids],
      };
    }
    return { slug, label: n.title };
  };
  const groups = nav.sidebar.map((g) => {
    const named = GROUP_LABELS[g.title] ?? { label: g.title.replace(/^\d+\.\s*/, "") };
    return { ...named, items: (g.children ?? []).map(toItem).filter(Boolean) };
  });
  // Pages that exist but are not in the old sidebar go to the end of their section.
  const sectionGroup = new Map(groups.map((g) => [g.items.find((i) => i.slug)?.slug?.split("/")[0], g]));
  for (const p of posts.filter((x) => x.locale === "ko")) {
    if (used.has(p.slug)) continue;
    const g = sectionGroup.get(p.slug.split("/")[0]);
    warn(`Sidebar: "${p.fm.title}" (${p.slug}) was not in the old sidebar — added to ${g ? g.label : "a new group"}`);
    if (g) g.items.push({ slug: p.slug, label: String(p.fm.title) });
  }
  return groups;
}

// ---------------------------------------------------------------------------------------------------------------
// 5b. Home page (one per language), built from the sidebar so its cards always match the sections
// ---------------------------------------------------------------------------------------------------------------
const SECTION_TEXT = {
  datatype: ["로봇 타겟, 작업 좌표계, 툴, 용접 데이터 등 ABB 데이터 타입", "ABB data types: robot targets, work objects, tools, welding data and more"],
  "robot-tool": ["ABB 로봇, 포지셔너, 작업대 구성", "ABB robots, positioners and workbench setup"],
  instruction: ["Move, ArcMove, SetOutput 등 로봇 인스트럭션", "Robot instructions such as Move, ArcMove and SetOutput"],
  core: ["GERTY Core, 코드 생성과 시뮬레이션 표시", "GERTY Core, code generation and simulation display"],
  toolpath: ["적층(WAAM·3D 프린팅), 밀링, 열선 컷팅 가공 경로", "Toolpaths for deposition (WAAM, 3D printing), milling and hotwire cutting"],
  utils: ["데이터 트리 정리, 슬라이더 등 보조 컴포넌트", "Helpers for data trees, sliders and more"],
  "controller-utils": ["ABB 컨트롤러 연결, 툴·작업 좌표계 가져오기, 실시간 표시", "Connect to ABB controllers, read tool and work object data, real-time display"],
  setup: ["라이선스 발급용 하드웨어 정보 확인", "Hardware information for licensing"],
};
const ABOUT_TEXT = {
  "about/what-is-gerty": ["GERTY란?", "What is GERTY?", "Rhino–Grasshopper 기반 로봇 가공 CAM 소프트웨어 GERTY 소개", "An introduction to GERTY, CAM software for robotic fabrication in Rhino–Grasshopper"],
  "about/component-overview": ["컴포넌트 사용법", "Using components", "입력, 모드 전환, GERTY UI 등 컴포넌트 공통 사용법", "Inputs, mode options and the GERTY UI shared by all components"],
  "about/installation": ["설치 및 라이선스", "Installation & license", "패키지 설치, 체험판, 하드웨어 ID 확인과 라이선스 등록", "Package install, trial, hardware IDs and license activation"],
  "about/tutorial": ["튜토리얼", "Tutorial", "GERTY 템플릿과 영상으로 시작하기", "Get started with the GERTY templates and video"],
};

function writeHome(sidebar) {
  const flat = (items) => items.flatMap((i) => (i.slug ? [i.slug] : flat(i.items ?? [])));
  const firstSlug = (g) => flat(g.items)[0];
  const esc = (s) => s.replace(/"/g, "&quot;");
  for (const [locale, i] of [["ko", 0], ["en", 1]]) {
    const pre = locale === "en" ? "/en" : "";
    const about = sidebar[0];
    const groups = sidebar.slice(1);
    const card = (title, href, description) => `  <LinkCard title="${esc(title)}" href="${pre}${href}" description="${esc(description)}" />`;
    const t = locale === "ko"
      ? { title: "GERTY 도큐먼트", desc: "GERTY 설치 방법, 사용법과 컴포넌트 레퍼런스", tagline: "Rhino–Grasshopper 기반 로봇 OLP 소프트웨어 GERTY의 설치 방법, 사용법, 컴포넌트 레퍼런스를 제공합니다.", start: "시작하기", ref: "컴포넌트 레퍼런스", more: "더 알아보기", a1: "GERTY 소개", a2: "설치 및 라이선스", n: (k) => `문서 ${k}개`, home: "BAT Partners 홈페이지", homeD: "산업용 로봇 기반 복합 가공 솔루션과 프로젝트", contact: "기술 지원 문의", contactD: "contact@b-at.kr" }
      : { title: "GERTY Documentation", desc: "Installation, usage and component reference for GERTY", tagline: "Installation, usage and the component reference for GERTY, robotic OLP software for Rhino–Grasshopper.", start: "Get started", ref: "Component reference", more: "More", a1: "About GERTY", a2: "Installation & license", n: (k) => `${k} page${k === 1 ? "" : "s"}`, home: "BAT Partners website", homeD: "Robotic hybrid manufacturing solutions and projects", contact: "Technical support", contactD: "contact@b-at.kr" };
    const depth = locale === "en" ? "../../../" : "../../";
    const text = `---
title: ${JSON.stringify(t.title)}
description: ${JSON.stringify(t.desc)}
template: splash
hero:
  tagline: ${JSON.stringify(t.tagline)}
  image:
    light: ${depth}assets/gerty-hero-dark.png
    dark: ${depth}assets/gerty-hero-light.png
    alt: GERTY
  actions:
    - text: ${JSON.stringify(t.a1)}
      link: ${pre}/about/what-is-gerty/
      icon: right-arrow
    - text: ${JSON.stringify(t.a2)}
      link: ${pre}/about/installation/
      variant: minimal
    # The home has no sidebar, so on phones there is no menu with the language switch: link the other language here.
    - text: ${JSON.stringify(locale === "en" ? "한국어" : "English")}
      link: ${locale === "en" ? "/" : "/en/"}
      variant: minimal
---

import { CardGrid, LinkCard } from "@astrojs/starlight/components";

## ${t.start}

<CardGrid>
${flat(about.items).filter((s) => ABOUT_TEXT[s]).map((s) => card(ABOUT_TEXT[s][i], `/${s}/`, ABOUT_TEXT[s][i + 2])).join("\n")}
</CardGrid>

## ${t.ref}

<CardGrid>
${groups.map((g) => { const s = firstSlug(g); const sec = s.split("/")[0]; return card(g.label, `/${s}/`, `${SECTION_TEXT[sec]?.[i] ?? ""} · ${t.n(flat(g.items).length)}`); }).join("\n")}
</CardGrid>

## ${t.more}

<CardGrid>
  <LinkCard title="${esc(t.home)}" href="${HOMEPAGE}${locale === "en" ? "/en/" : "/"}" description="${esc(t.homeD)}" />
  <LinkCard title="${esc(t.contact)}" href="mailto:contact@b-at.kr" description="${esc(t.contactD)}" />
</CardGrid>
`;
    const out = path.join(DOCS, locale === "en" ? "en/index.mdx" : "index.mdx");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, text);
  }
  // One 404 page for every missing address (GitHub Pages serves /404.html), in both languages and with links out,
  // since it has no sidebar menu on phones.
  fs.writeFileSync(
    path.join(DOCS, "404.mdx"),
    `---
title: 페이지를 찾을 수 없습니다 · Page not found
template: splash
editUrl: false
pagefind: false
hero:
  tagline: "주소가 바뀌었거나 없는 페이지입니다. 검색하거나 아래에서 이동해 주세요. — This page does not exist or has moved. Search, or go to:"
  actions:
    - text: 도큐먼트 홈
      link: /
      icon: right-arrow
    - text: English docs
      link: /en/
      variant: minimal
    - text: BAT.Partners
      link: ${HOMEPAGE}/
      variant: minimal
---
`,
  );
}

// ---------------------------------------------------------------------------------------------------------------
// 6. Legacy redirect pages
// ---------------------------------------------------------------------------------------------------------------
function redirectHtml(to) {
  const safe = to.replace(/"/g, "&quot;");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Redirecting…</title><meta name="robots" content="noindex"><link rel="canonical" href="${safe}"><meta http-equiv="refresh" content="0; url=${safe}"><script>location.replace(${JSON.stringify(to)} + location.hash)</script></head><body><a href="${safe}">${safe}</a></body></html>\n`;
}

/**
 * One redirect page per old URL. Korean: each page's permalink. English: "/en" + the Korean permalink of the same
 * file (what the language switch linked to) and the English page's own permalink when it is under /en/ (some
 * differ, e.g. a typo). Plus the dead URLs from the old sidebar. Korean wins any clash.
 */
function writeRedirects() {
  const targets = new Map(); // old decoded path -> new path
  const add = (oldPath, to) => {
    if (!targets.has(oldPath)) targets.set(oldPath, to);
  };
  for (const p of posts.filter((x) => x.locale === "ko")) add(p.key, `/${p.slug}/`);
  for (const p of posts.filter((x) => x.locale === "en")) {
    const ko = posts.find((x) => x.locale === "ko" && x.file === p.file);
    if (ko) add("/en" + ko.key, `/en/${p.slug}/`);
    if (p.keyLocale === "en") add("/en" + p.key, `/en/${p.slug}/`);
  }
  for (const [key, slug] of deadNavKeys) {
    add(key, `/${slug}/`);
    add("/en" + key, `/en/${slug}/`);
  }
  for (const [oldPath, to] of targets) {
    const file = path.join(PUBLIC, ...oldPath.split("/").filter(Boolean), "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, redirectHtml(to));
  }
  return targets;
}

// ---------------------------------------------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------------------------------------------
// Clean generated output (keep hand-written pages).
for (const sub of ["", "en"]) {
  const base = path.join(DOCS, sub);
  if (!fs.existsSync(base)) continue;
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    const rel = path.posix.join(sub, entry.name);
    if (entry.isDirectory() && entry.name !== "en") fs.rmSync(path.join(base, entry.name), { recursive: true, force: true });
    else if (entry.isFile() && !KEEP.has(rel)) fs.rmSync(path.join(base, entry.name));
  }
}
for (const legacy of ["about gerty", "datatype", "robottool", "instruction", "core", "toolpath", "utils", "controllerutils", "setup", "en"]) {
  fs.rmSync(path.join(PUBLIC, legacy), { recursive: true, force: true });
}

let count = 0;
for (const post of posts) {
  const { relFile, text } = await convertPost(post);
  const out = path.join(DOCS, relFile);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text);
  count++;
}

// Remove assets no page uses any more (e.g. the raw copy of a video that is now re-encoded).
let pruned = 0;
const prune = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      prune(p);
      if (!fs.readdirSync(p).length) fs.rmdirSync(p);
    } else if (!keptAssets.has(p)) {
      fs.rmSync(p);
      pruned++;
    }
  }
};
if (fs.existsSync(path.join(PUBLIC, "assets"))) prune(path.join(PUBLIC, "assets"));
// Keep the manifest to what is still there, sorted, so its diff stays small.
fs.writeFileSync(
  MANIFEST,
  JSON.stringify(Object.fromEntries(Object.entries(manifest).filter(([k]) => keptAssets.has(path.join(PUBLIC, k))).sort(([a], [b]) => a.localeCompare(b))), null, 2) + "\n",
);

const sidebar = buildSidebar();
fs.writeFileSync(path.join(ROOT, "src/sidebar.generated.json"), JSON.stringify(sidebar, null, 2) + "\n");
writeHome(sidebar);
fs.mkdirSync(path.join(ROOT, "src/styles"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "src/styles/media-widths.css"),
  "/* Generated by scripts/convert.mjs: the old pages' widths, capped at each image's own pixel width. */\n" +
    [...widthCss.entries()].sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true })).map(([, css]) => css).join("\n") +
    "\n",
);
const redirects = writeRedirects();
fs.writeFileSync(path.join(ROOT, "redirects.generated.json"), JSON.stringify(Object.fromEntries(redirects), null, 2) + "\n");

console.log(`Converted ${count} pages (${posts.filter((p) => p.locale === "ko").length} KO + ${posts.filter((p) => p.locale === "en").length} EN), ${redirects.size} redirect pages, ${mediaCache.size} media references, ${pruned} unused asset(s) removed.`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n- ` + [...new Set(warnings)].join("\n- "));
