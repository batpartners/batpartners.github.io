// Post-build checks for the converted docs:  npm run build && node scripts/check.mjs
// 1. Text parity: every sentence-like chunk of each old page (source Markdown) appears on the new page.
// 2. Every internal link, image and video in dist/ points to a file that exists.
// 3. Every legacy redirect page points to a page that exists, and no page still links to the old host.
// 4. Every Markdown table row in the generated MDX stays on one line.
import fs from "node:fs";
import path from "node:path";
import { docsSource, loadPosts } from "./posts.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = docsSource(ROOT);
const DIST = path.join(ROOT, "dist");
const problems = [];

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&");
const norm = (s) => decode(s).replace(/[\s\u00a0\u2060]+/g, "").replace(/[•·*_`|#>\\[\]()!:：,.。…"'“”‘’-]/g, "") /* … too: the build turns "..." into an ellipsis */.toLowerCase();

/** Visible text of the page body (no scripts, styles or code). */
function mainText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html;
  return decode(main.replace(/<(script|style|pre|code)[\s\S]*?<\/\1>/g, " ").replace(/<[^>]+>/g, " "));
}

function pageText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html;
  return norm(main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));
}

// ---- 1. text parity ----
// Against the posts as the converter reads them (with the known source fixes applied).
let chunks = 0;
for (const { file: f, locale, slug, body: source } of loadPosts(SRC)) {
  const dir = locale === "en" ? "en/_posts" : "_posts";
  const body = source
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^.*\{\{\s*page\.translation_link.*$/gm, "")
    .replace(/\{[%{][\s\S]*?[%}]\}/g, "")
    .replace(/<(label|li)[^>]*>[\s\S]*?<\/\1>/gi, (m) => m) // tab labels stay (they become tab names)
    .replace(/<[^>]+>/g, "\n")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  const pieces = body
    .split(/\n|(?<=[.!?。다])\s+/)
    .map((s) => s.replace(/^\s*(#+|\d+\)|[-*]|\|)\s*/, "").trim())
    .filter((s) => norm(s).length >= 6 && !/^:?-{3,}/.test(s) && !/^\|?\s*:?-+/.test(s));
  const file = path.join(DIST, locale === "en" ? "en" : "", slug, "index.html");
  if (!fs.existsSync(file)) {
    problems.push(`[page] missing ${path.relative(DIST, file)} for ${dir}/${f}`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const text = pageText(html);
  // Markdown that did not render shows as literal asterisks (norm() hides them from the parity check below).
  if (mainText(html).includes("**")) problems.push(`[markdown] ${locale}/${slug}: literal "**" on the page`);
  for (const p of pieces) {
    chunks++;
    // table rows: check each cell separately
    const parts = p.includes("|") ? p.split("|").map((x) => x.trim()).filter((x) => norm(x).length >= 4) : [p];
    for (const part of parts) if (!text.includes(norm(part))) problems.push(`[text] ${locale}/${slug}: "${part.slice(0, 90)}"`);
  }
}

// ---- 2. links and media in dist ----
const exists = (urlPath) => {
  const p = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const f = path.join(DIST, p);
  return fs.existsSync(f) && (fs.statSync(f).isFile() || fs.existsSync(path.join(f, "index.html")));
};
let refs = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) {
      const html = fs.readFileSync(p, "utf8");
      if (/http-equiv="refresh"/.test(html)) {
        const to = html.match(/url=([^"]+)"/)?.[1];
        refs++;
        if (!to || !exists(decode(to))) problems.push(`[redirect] ${path.relative(DIST, p)} -> ${to} (missing)`);
        continue;
      }
      // The old host only forwards to this site, so a link that still points there is a link the converter missed.
      for (const m of html.matchAll(/\shref="(https?:\/\/batpartners\.github\.io[^"]*)"/gi)) problems.push(`[old-host link] ${path.relative(DIST, p)} -> ${decode(m[1])}`);
      for (const m of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
        const u = decode(m[1]);
        if (u.startsWith("//") || u.startsWith("/_astro/") || u.startsWith("/pagefind/")) continue;
        refs++;
        if (!exists(u)) problems.push(`[link] ${path.relative(DIST, p)} -> ${u}`);
      }
    }
  }
};
walk(DIST);

// ---- 4. table rows in the generated MDX stay on one line ----
// A row that does not end with "|" was split by a line break inside a cell; the rest of the cell falls out of the table.
const walkMdx = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkMdx(p);
    else if (e.name.endsWith(".mdx"))
      fs.readFileSync(p, "utf8")
        .split(/\r?\n/)
        .forEach((line, i) => {
          if (/^\s*\|/.test(line) && !/\|\s*$/.test(line)) problems.push(`[table row] ${path.relative(ROOT, p)}:${i + 1}: "${line.trim().slice(0, 70)}"`);
        });
  }
};
walkMdx(path.join(ROOT, "src/content/docs"));

console.log(`Checked ${chunks} text chunks and ${refs} internal references.`);
const unique = [...new Set(problems)];
if (unique.length) {
  console.log(`\n${unique.length} problem(s):`);
  console.log(unique.slice(0, 200).join("\n"));
  process.exitCode = 1;
} else console.log("No problems found.");
