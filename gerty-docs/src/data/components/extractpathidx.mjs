// Data for the ExtractPathIdx page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "인덱스를 꺼낼 DataTree.",
    "en": "The DataTree to read the index from."
  },
  {
    "name": "Position",
    "type": "Integer",
    "ko": "Branch Path 에서 꺼낼 인덱스의 위치.",
    "en": "Position of the index to read in the branch path."
  }
];

export const main = "1_ExtractPathIdx.png";

export const outputs = [
  {
    "name": "Index",
    "type": "Integer",
    "ko": "각 Branch Path 에서 꺼낸 인덱스.",
    "en": "The index read from each branch path."
  }
];
