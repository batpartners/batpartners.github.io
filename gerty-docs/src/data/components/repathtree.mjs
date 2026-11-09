// Data for the Repath Tree page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch Path 를 다시 매길 DataTree. Branch 안의 데이터는 바뀌지 않는다.",
    "en": "The DataTree whose branch paths are renumbered. The data inside the branches does not change."
  }
];

export const main = "3_RepathTree.png";

export const outputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "선택한 패턴으로 Branch Path 를 다시 매긴 DataTree.",
    "en": "The DataTree with branch paths renumbered by the selected pattern."
  }
];
