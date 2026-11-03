// Drafts a component data file (src/data/components/<name>.mjs) from a component's Korean and English posts:
// inputs, settings tabs (grouped as on the page) and outputs, with each control's position on its tab screenshot.
// The draft is a starting point for the hand-written page in pages/; review it before use.
//
//   node scripts/extract-component.mjs <post file name> [<out.mjs>]      e.g. 2026-07-10-DataType-WeldData.md
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { docsSource } from "./posts.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = docsSource(ROOT);
const [, , FILE, OUT] = process.argv;

// old doc links -> current URLs (the converter's redirect map), in the page's own language
const REDIRECTS = JSON.parse(fs.readFileSync(path.join(ROOT, "redirects.generated.json"), "utf8"));
let LANG = "ko";
const relink = (s) => s.replace(/href="https?:\/\/batpartners\.github\.io(\/[^"#]*)(#[^"]*)?"(\s+target="_blank")?/g, (m, p, hash = "") => {
  const key = decodeURIComponent(p.endsWith("/") ? p : p + "/");
  const to = REDIRECTS[LANG === "en" && !key.startsWith("/en/") ? "/en" + key : key] ?? REDIRECTS[key];
  return to ? `href="${to}${hash}"` : m;
});
const md2html = (s) => relink(s.trim().replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"));
const clean = (s) => s.replace(/\s*\r?\n\s*/g, " ").replace(/<p[^>]*>|<\/p>/g, "").trim();
const OPTIONAL = /기본값|연결(?:되)?지 않|연결하지 않|비워|선택\s*사항|\(선택\)|\(Optional\)|optional|default|if not connected|if disconnected|if omitted|if left empty/i;

function sections(text) {
  // body split by top-level "# " headings (the posts' sections)
  const body = text.replace(/^---[\s\S]*?\n---/, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const parts = [];
  for (const m of body.split(/^(?=#{1,2} )/m)) parts.push({ head: (m.match(/^#{1,2} (.*)/) || [, ""])[1].trim(), body: m });
  return parts;
}
const mdRows = (s) => [...s.matchAll(/^\|\s*\*{0,2}([^*|]+?)\*{0,2}\s*\|\s*([^|]*?)\s*\|\s*(.*?)\s*\|\s*$/gm)]
  .filter((m) => !/^(이름|name|:?-+)$/i.test(m[1].trim()))
  .map((m) => ({ name: m[1].trim(), type: m[2].trim(), desc: md2html(m[3]) }));
const htmlRows = (s) => [...s.matchAll(/<td>\s*<strong>([\s\S]*?)<\/strong>\s*<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>/g)].map((m) => ({ name: clean(m[1]), type: clean(m[2]), desc: md2html(clean(m[3])) }));

function parse(text) {
  const out = { inputs: [], groups: [], outputs: [], main: null };
  out.main = (text.match(/<img src="\/assets\/images\/([^"]+)"[^>]*width="3\d%"/) || [])[1] ?? null;
  for (const { head, body } of sections(text)) {
    if (/입력|input/i.test(head) && !/파라미터|parameter/i.test(head)) out.inputs.push(...mdRows(body), ...htmlRows(body));
    else if (/출력|output/i.test(head)) out.outputs.push(...mdRows(body), ...htmlRows(body));
  }
  for (const c of text.split(/<div class="tabs-container">/).slice(1)) {
    const labels = {};
    for (const m of c.matchAll(/<label for="([^"]+)">([^<]*)<\/label>/g)) labels[m[1]] = m[2].trim();
    const tabs = [];
    for (const m of c.matchAll(/<div class="tab-content" id="([^"]+)"[^>]*>([\s\S]*?)<\/div>/g)) {
      tabs.push({ label: labels[m[1].replace("content", "tab")] ?? m[1], img: (m[2].match(/<img src="\/assets\/images\/([^"]+)"/) || [])[1] ?? null, rows: htmlRows(m[2]) });
    }
    if (tabs.length) out.groups.push(tabs);
  }
  return out;
}

// control rows on a tab screenshot: text bands in the left half below the tab/title bar
async function bands(img) {
  const file = path.join(SRC, "assets/images", img);
  if (!fs.existsSync(file)) return null;
  const { data, info } = await sharp(file).flatten({ background: "#fff" }).grayscale().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const dark = (y, x0, x1, thr) => { let n = 0; for (let x = x0; x < x1; x++) if (data[y * W + x] < thr) n++; return n / (x1 - x0); };
  // skip the title bar / tab row at the top: its last dark row, allowing light highlight lines (gaps ≤ 4 rows)
  let y = 0, last = -1;
  for (let i = 0; i < H * 0.45; i++) {
    const b = dark(i, W * 0.2 | 0, W * 0.8 | 0, 90) >= 0.6;
    if (b && (last < 0 || i - last <= 5)) last = i;
    else if (!b && last >= 0 && i - last > 5) break;
  }
  y = last + 3;
  const out = []; let s = -1;
  for (; y < H - 3; y++) {
    const d = dark(y, W * 0.04 | 0, W * 0.5 | 0, 110) > 0.02;
    if (d && s < 0) s = y;
    if (!d && s >= 0) { if (y - s >= 6) out.push([s, y - 1]); s = -1; }
  }
  return out.map(([a, b]) => { const t = Math.max(0, a - 9), h = Math.min(H, b + 9) - t; return [+(t / H * 100).toFixed(1), +(h / H * 100).toFixed(1)]; });
}

const ko = parse(fs.readFileSync(path.join(SRC, "_posts", FILE), "utf8"));
LANG = "en";
const en = parse(fs.readFileSync(path.join(SRC, "en/_posts", FILE), "utf8"));
const notes = [];
const merge = (k, e, where) => k.map((r, i) => {
  const m = e.find((x) => x.name === r.name) ?? e[i];
  if (!m || m.name !== r.name) notes.push(`${where}: "${r.name}" has no English row with the same name${m ? ` (by position: "${m.name}")` : ""}`);
  const row = { name: r.name, type: r.type, ko: r.desc, en: m?.desc ?? "" };
  if (where === "inputs" && (OPTIONAL.test(r.desc) || OPTIONAL.test(m?.desc ?? ""))) row.optional = true;
  return row;
});
const data = { main: ko.main, inputs: merge(ko.inputs, en.inputs, "inputs"), groups: [], outputs: merge(ko.outputs, en.outputs, "outputs") };
for (const [gi, g] of ko.groups.entries()) {
  const tabs = [];
  for (const [ti, t] of g.entries()) {
    const et = en.groups[gi]?.[ti];
    const rows = merge(t.rows, et?.rows ?? [], `tab "${t.label}"`);
    let b = t.img ? await bands(t.img) : null;
    // a screenshot that starts with a tab strip (not a full title bar) shows the strip as one extra band at the top
    if (b && b.length === rows.length + 1 && b[0][0] < 25) b = b.slice(1);
    if (b && b.length === rows.length) rows.forEach((r, i) => (r.y = b[i]));
    else notes.push(`tab "${t.label}": ${b ? b.length : "no"} control row(s) found on ${t.img} for ${rows.length} table row(s) — no markers`);
    tabs.push({ label: t.label, img: t.img, rows });
  }
  data.groups.push(tabs);
}
const text = `// Data for the ${FILE.replace(/^\d{4}-\d\d-\d\d-|\.md$/g, "")} page (drafted by scripts/extract-component.mjs from the posts; edited by hand).\n` +
  `// Rows are required unless \`optional: true\`; \`y\` = [top%, height%] of the control on its tab screenshot.\n` +
  Object.entries(data).map(([k, v]) => `export const ${k} = ${JSON.stringify(v, null, 2)};\n`).join("\n");
if (OUT) fs.writeFileSync(OUT, text);
console.log(OUT ? `wrote ${OUT}` : text);
if (notes.length) console.log("NOTES:\n- " + notes.join("\n- "));
