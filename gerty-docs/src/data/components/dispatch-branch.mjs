// Data for the Dispatch Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "Branch 를 분배할 DataTree 이다.",
    "en": "The DataTree whose branches are dispatched."
  },
  {
    "name": "Pattern",
    "type": "Boolean",
    "ko": "Branch 순서대로 적용할 True / False 분배 패턴이다. True 인 Branch 는 <strong>Tree A</strong> 로, False 인 Branch 는 <strong>Tree B</strong> 로 보낸다.",
    "en": "True / False dispatch pattern applied to the branches in order. Branches with True go to <strong>Tree A</strong>, branches with False to <strong>Tree B</strong>."
  }
];

export const main = "dispatch-branch_main.png";

export const outputs = [
  {
    "name": "Tree A",
    "type": "Tree",
    "ko": "패턴 값이 True 인 Branch 들로 된 DataTree 이다.",
    "en": "DataTree of the branches whose pattern value is True."
  },
  {
    "name": "Tree B",
    "type": "Tree",
    "ko": "패턴 값이 False 인 Branch 들로 된 DataTree 이다.",
    "en": "DataTree of the branches whose pattern value is False."
  }
];
