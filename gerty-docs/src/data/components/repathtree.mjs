// Data for the Repath Tree page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch Path 를 다시 할당할 DataTree 이다. Branch 안의 데이터는 바뀌지 않는다.",
    "en": "The DataTree whose branch paths are reassigned. The data inside the branches does not change."
  }
];

export const main = "repathtree_main.png";

export const outputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "우클릭 메뉴에서 고른 패턴(Sequential / Odd Numbered / Even Numbered Path)에 따라 Branch Path 를 다시 할당한 DataTree 이다.",
    "en": "The DataTree with branch paths reassigned by the pattern picked in the right-click menu (Sequential / Odd Numbered / Even Numbered Path)."
  }
];
