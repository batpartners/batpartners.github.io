// Data for the Dispatch Branch page. Source of the page's tables (both languages); edit here, not in the page.
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
    "name": "Pattern",
    "type": "Boolean",
    "ko": "Branch 순서대로 적용할 True / False 패턴. True 인 Branch 는 Tree A 로, False 인 Branch 는 Tree B 로 간다.",
    "en": "True / False pattern applied to the branches in order. Branches with True go to Tree A, branches with False to Tree B."
  }
];

export const main = "0_DispatchBranch.png";

export const outputs = [
  {
    "name": "Tree A",
    "type": "Tree",
    "ko": "패턴이 True 인 Branch 들.",
    "en": "The branches where the pattern is True."
  },
  {
    "name": "Tree B",
    "type": "Tree",
    "ko": "패턴이 False 인 Branch 들.",
    "en": "The branches where the pattern is False."
  }
];
