// Data for the Split Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "나눌 DataTree.",
    "en": "The DataTree to split."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "나누는 기준 Branch 순번. 이 순번 앞의 Branch 는 Tree A, 이 순번부터는 Tree B 로 간다.",
    "en": "Branch number to split at. Branches before it go to Tree A, branches from it on go to Tree B."
  }
];

export const main = "4_SplitBranch.png";

export const outputs = [
  {
    "name": "Tree A",
    "type": "Tree",
    "ko": "Index 앞의 Branch 들로 된 DataTree.",
    "en": "DataTree of the branches before Index."
  },
  {
    "name": "Tree B",
    "type": "Tree",
    "ko": "Index 부터(포함) 뒤의 Branch 들로 된 DataTree.",
    "en": "DataTree of the branches from Index on (inclusive)."
  }
];
