// Data for the Tree Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch 를 꺼낼 DataTree.",
    "en": "The DataTree to take the branch from."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "꺼낼 Branch 의 순번.",
    "en": "Number of the branch to extract."
  }
];

export const main = "5_TreeBranch.png";

export const outputs = [
  {
    "name": "Branch",
    "type": "Tree",
    "ko": "꺼낸 Branch 의 데이터.",
    "en": "The data of the extracted branch."
  }
];
