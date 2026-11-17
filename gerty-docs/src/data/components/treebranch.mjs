// Data for the Tree Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch 를 추출할 DataTree 이다.",
    "en": "The DataTree to extract a branch from."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "추출할 Branch 의 순번이다. Path 값이 아닌 Branch 순서를 기준으로 한다. 예: Branch {0}, {2}, {4} 가 있는 DataTree 에서 Index 1 은 {2} Branch 를 추출한다.",
    "en": "Sequential index of the branch to extract, based on branch order rather than path value. Example: in a DataTree with branches {0}, {2}, {4}, Index 1 extracts branch {2}."
  }
];

export const main = "treebranch_main.png";

export const outputs = [
  {
    "name": "Branch",
    "type": "Tree",
    "ko": "추출한 Branch 의 데이터이다.",
    "en": "The data of the extracted branch."
  }
];
