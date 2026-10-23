// Reads the Jekyll posts (Korean _posts + English en/_posts) with the known source problems fixed. Shared by
// convert.mjs and check.mjs, so the parity check compares each new page with what it was converted from.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { slugFromFile } from "./slug.mjs";

/**
 * The Jekyll repo to read: DOCS_SRC if set; else the folder above this project when it lives inside the repo
 * (batpartners.github.io/gerty-docs, as on GitHub); else the local clone at D:/batpartners.github.io.
 */
export function docsSource(root) {
  if (process.env.DOCS_SRC) return path.resolve(process.env.DOCS_SRC);
  const parent = path.resolve(root, "..");
  return fs.existsSync(path.join(parent, "_posts")) ? parent : path.resolve("D:/batpartners.github.io");
}

/** "/en/about%20gerty/Tutorial/" -> { locale: "en", key: "/about gerty/Tutorial/" } */
export function parseOld(url) {
  let p = String(url).replace(/^https?:\/\/batpartners\.github\.io/i, "").split(/[?#]/)[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    /* keep as is */
  }
  if (!p.startsWith("/")) p = "/" + p;
  if (!p.endsWith("/")) p += "/";
  const en = p.startsWith("/en/");
  return { locale: en ? "en" : "ko", key: en ? p.slice(3) : p };
}

function readPosts(dir, locale) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8").replace(/^﻿/, "");
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
      if (!m) throw new Error(`No front matter in ${f}`);
      const fm = yaml.load(m[1], { json: true }) ?? {}; // json: duplicate keys (as Jekyll allows) keep the last value
      const own = parseOld(fm.permalink); // the URL the old site actually served this file at
      return { file: f, locale, fm, key: own.key, keyLocale: own.locale, slug: slugFromFile(f), body: raw.slice(m[0].length) };
    });
}

/**
 * Known problems in the source posts, fixed here (the source repo stays as it is). Each fix checks the problem is
 * still there, so once the source is corrected it simply stops applying. Still open in the source (needs real
 * English text): en/...DataType-IODEvent.md shows the SeamData reference below its first paragraph.
 */
function applySourceFixes(posts) {
  const post = (locale, file) => {
    const p = posts.find((x) => x.locale === locale && x.file === file);
    if (!p) throw new Error(`Source fix: ${locale}/${file} not found`);
    return p;
  };
  // SurfaceShell (English): en/...SurfaceShell_Option.md is a Korean page (lang: ko, Korean permalink, Korean body),
  // and en/...SurfaceShell.md is the English *Option* page (its permalink and content). There is no English base page,
  // so derive it from the Option page the way the Korean pair differs: base icon, no Angle Ranges / Multiple rows.
  const enBase = post("en", "2026-07-15-ToolPath-SurfaceShell.md");
  const enOption = post("en", "2026-07-15-ToolPath-SurfaceShell_Option.md");
  const koBase = post("ko", "2026-07-15-ToolPath-SurfaceShell.md");
  if (enOption.fm.lang === "ko" && enBase.key === post("ko", enOption.file).key) {
    Object.assign(enOption, { fm: { ...enBase.fm, title: "Surface Shell" }, key: enBase.key, keyLocale: "en", body: enBase.body });
    const body = enBase.body
      .replace("13_SurfaceShell_3.png", "13_SurfaceShell.png")
      .replace(/^\| \*\*(?:Angle Ranges|Multiple)\*\* \|.*\r?\n/gm, "");
    Object.assign(enBase, { fm: { ...enBase.fm, title: "Surface Shell" }, key: koBase.key, keyLocale: "en", body });
  }
  // Tree Branch (Korean): a line break inside the Index row put its "• 예: …" example in a broken row of its own.
  const treeBranch = post("ko", "2026-07-16-Utils-TreeBranch.md");
  treeBranch.body = treeBranch.body.replace(/^(\| \*\*Index\*\* \|[^\n]*[^|\s])[ \t]*\r?\n(• 예:[^\n]*\|)[ \t]*$/m, "$1<br>$2");
  // TriggIOs (Korean): the IOEvent link has a typo (/DataType-IOEvents/ never existed; the page is /DataType-IODEvent/).
  const triggIOs = post("ko", "2026-07-10-DataType-TriggIOs.md");
  triggIOs.body = triggIOs.body.replace("/datatype/DataType-IOEvents/", "/datatype/DataType-IODEvent/");
  // Small mechanical fixes, each a [locale, file, find, replace] (a string replaces every occurrence):
  // - Wait Time (EN): a stray "dd" after <tr>, and the Input row copied from WaitDI instead of the Time(s) row.
  // - IndRMove (KO, EN) / TriggerIOMove (EN): tab labels copied from other components.
  // - CreateWorkbench (EN): the Export tab's table has its data row in <thead> (it rendered as a header) and the
  //   video carries ToolData's "Tool Export" caption.
  const tabTheadRow = /<thead>(\s*<tr>\s*<td><strong>WorkPiece Color<\/strong><\/td>)/;
  const headerRow = "<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>$1";
  for (const [locale, file, find, replace] of [
    ["en", "2026-07-12-Instruction-Wait-Time.md", "<tr>dd", "<tr>"],
    [
      "en",
      "2026-07-12-Instruction-Wait-Time.md",
      "| **Signal** | String | Creates a WaitDI instruction to pause robot motion until the specified digital input (DI) signal reaches the target value. |",
      "| **Time(s)** | Number | Time (in seconds) the program waits. |",
    ],
    ["ko", "2026-07-11-Instruction-IndRMove.md", ">IndMove</label>", ">IndRMove</label>"],
    ["en", "2026-07-11-Instruction-IndRMove.md", ">IndMove</label>", ">IndRMove</label>"],
    ["en", "2026-07-11-Instruction-IndRMove_Option.md", ">IndMove</label>", ">IndRMove</label>"],
    ["en", "2026-07-11-Instruction-TriggerIOMove.md", ">ABB MoveOutput</label>", ">ABB TriggerIOMove</label>"],
    ["en", "2026-07-11-RobotTool-CreateWorkbench.md", tabTheadRow, headerRow],
    ["en", "2026-07-11-RobotTool-CreateWorkbench_Option.md", tabTheadRow, headerRow],
    ["en", "2026-07-11-RobotTool-CreateWorkbench.md", "<figcaption>Tool Export</figcaption>", ""],
  ]) {
    const p = post(locale, file);
    p.body = typeof find === "string" ? p.body.split(find).join(replace) : p.body.replace(find, replace);
  }
  // WaitDI (English): titled "Wait Time", the title of the page before it.
  const waitDI = post("en", "2026-07-12-Instruction-WaitDI.md");
  if (waitDI.fm.title === "Wait Time") waitDI.fm = { ...waitDI.fm, title: "WaitDI" };
  // WobjData Fixed / Movable (English): both are copies of the base page. Derive them the way the Korean pages differ
  // from their base: own title and a screenshot under each tab's table; Movable also has its own icon and no Object
  // Frame input.
  const enWobj = post("en", "2026-07-08-DataType-WobjData.md");
  const shot = (file, br) => `${br ? "    <br>\n" : ""}  <p align="center">  <img src="/assets/images/${file}" align="center" width="45%"></p>\n`;
  const addShots = (body, shots) => {
    const ends = body.match(/<\/table>\r?\n {2}<\/div>/g) ?? [];
    if (ends.length !== shots.length) throw new Error(`Source fix: WobjData has ${ends.length} tab tables, expected ${shots.length}`);
    let i = 0;
    return body.replace(/(<\/table>\r?\n)( {2}<\/div>)/g, (_, table, div) => table + shots[i++] + div);
  };
  for (const [file, title, edit] of [
    ["2026-07-08-DataType-WobjData_Fixed.md", "WobjData(Fixed)", (b) => addShots(b, [shot("2_WobjData_4.png", true), shot("2_WobjData_5.png", true)])],
    [
      "2026-07-08-DataType-WobjData_Movable.md",
      "WobjData(Movable)",
      (b) =>
        addShots(b.replace("/assets/images/2_WobjData.png", "/assets/images/2_WobjData_2.png").replace(/^\| \*{1,2}Object Frame\*{1,2} \|.*\r?\n/m, ""), [
          shot("2_WobjData_6.png", true),
          shot("2_WobjData_7.png", false),
        ]),
    ],
  ]) {
    const p = post("en", file);
    if (p.body === enWobj.body) Object.assign(p, { fm: { ...p.fm, title }, body: edit(p.body) });
  }
  return posts;
}

/** All posts, Korean first: { file, locale, fm, key, keyLocale, slug, body }. */
export function loadPosts(src) {
  return applySourceFixes([...readPosts(path.join(src, "_posts"), "ko"), ...readPosts(path.join(src, "en/_posts"), "en")]);
}
