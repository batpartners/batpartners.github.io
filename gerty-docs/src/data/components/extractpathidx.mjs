// Data for the ExtractPathIdx page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch Path(GH_Path)에서 인덱스를 추출할 DataTree 이다.",
    "en": "The DataTree whose branch paths (GH_Path) the indices are extracted from."
  },
  {
    "name": "Position",
    "type": "Integer",
    "ko": "각 Branch Path 에서 추출할 인덱스의 위치이다.",
    "en": "Position of the index to extract within each branch path."
  }
];

export const main = "extractpathidx_main.png";

export const outputs = [
  {
    "name": "Index",
    "type": "Integer",
    "ko": "각 Branch Path 에서 추출한 인덱스이다.",
    "en": "The index extracted from each branch path."
  }
];
