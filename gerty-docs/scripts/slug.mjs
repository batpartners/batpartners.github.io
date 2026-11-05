// New URL of a page, from its post FILE NAME (identical in _posts and en/_posts). The old permalinks are not reliable
// for this: a few English pages carry typos or another page's permalink (e.g. TriggIOs, SurfaceShell).
const SECTION = {
  DataType: "datatype",
  RobotTool: "robot-tool",
  Instruction: "instruction",
  Core: "core",
  ToolPath: "toolpath",
  Utils: "utils",
  ControllerUtils: "controller-utils",
  Setup: "setup",
};
// "What is GERTY?" and "Component Overview" are one page now (GERTY Overview, hand-written in pages/about/overview.mdx):
// both posts map to it, so their old URLs and links to them lead there.
const ABOUT = { "About-GERTY": "overview", ComponentOverview: "overview", installation: "installation", Tutorial: "tutorial" };
// The WobjData and Positioner RobTarget group pages were copies of their first mode page (Fixed / Dynamic): those
// posts map to the mode page, and the sidebar group title opens it.
const INTO = { "DataType-WobjData": "datatype/wobjdata-fixed", "DataType-Positioner_RobTarget": "datatype/positioner-robtarget-dynamic" };
/** Pages that several posts were merged into (a hand-written page in pages/ must exist for each). */
export const MERGED = new Set(["about/overview", ...Object.values(INTO)]);
/** Addresses these docs used before the merge -> the page that holds them now. */
export const MOVED = {
  "about/what-is-gerty": "about/overview",
  "about/component-overview": "about/overview",
  "datatype/wobjdata": "datatype/wobjdata-fixed",
  "datatype/positioner-robtarget": "datatype/positioner-robtarget-dynamic",
};

/** "2026-07-11-Instruction-Move.md" -> "instruction/move" */
export function slugFromFile(file) {
  const base = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  if (ABOUT[base]) return `about/${ABOUT[base]}`;
  if (INTO[base]) return INTO[base];
  const m = base.match(/^([A-Za-z]+)-(.+)$/);
  const section = m && SECTION[m[1]];
  if (!section) throw new Error(`Cannot place ${file} in a section`);
  return `${section}/${m[2].replace(/[()]/g, "").replace(/[_\s]+/g, "-").toLowerCase()}`;
}
