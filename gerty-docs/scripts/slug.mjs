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
const ABOUT = { "About-GERTY": "what-is-gerty", ComponentOverview: "component-overview", installation: "installation", Tutorial: "tutorial" };

/** "2026-07-11-Instruction-Move.md" -> "instruction/move" */
export function slugFromFile(file) {
  const base = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  if (ABOUT[base]) return `about/${ABOUT[base]}`;
  const m = base.match(/^([A-Za-z]+)-(.+)$/);
  const section = m && SECTION[m[1]];
  if (!section) throw new Error(`Cannot place ${file} in a section`);
  return `${section}/${m[2].replace(/[()]/g, "").replace(/[_\s]+/g, "-").toLowerCase()}`;
}
