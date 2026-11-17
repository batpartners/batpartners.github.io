// Data for the Split Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "나눌 DataTree 이다.",
    "en": "The DataTree to split."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "나누는 기준 Branch 순번이다. Path 값이 아닌 Branch 순서를 기준으로 하며, 이 순번 앞의 Branch 는 <strong>Tree A</strong> 로, 이 순번부터의 Branch 는 <strong>Tree B</strong> 로 간다.",
    "en": "Branch sequence index to split at, based on branch order rather than path value. Branches before it go to <strong>Tree A</strong>; branches from it onward go to <strong>Tree B</strong>."
  }
];

export const main = "splitbranch_main.png";

export const outputs = [
  {
    "name": "Tree A",
    "type": "Tree",
    "ko": "<strong>Index</strong> 앞의 Branch 들로 된 DataTree 이다.",
    "en": "DataTree of the branches before <strong>Index</strong>."
  },
  {
    "name": "Tree B",
    "type": "Tree",
    "ko": "<strong>Index</strong> 부터(포함) 뒤의 Branch 들로 된 DataTree 이다.",
    "en": "DataTree of the branches from <strong>Index</strong> onward (inclusive)."
  }
];
