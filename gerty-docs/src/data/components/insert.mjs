// Data for the Insert page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "데이터를 넣을 DataTree.",
    "en": "The DataTree to insert into."
  },
  {
    "name": "Items",
    "type": "Tree",
    "ko": "넣을 항목.",
    "en": "The items to insert."
  },
  {
    "name": "indices",
    "type": "Integer",
    "ko": "항목을 넣을 인덱스.",
    "en": "The index at which the items are inserted."
  }
];

export const main = "2_Insert.png";

export const outputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "항목이 들어간 DataTree.",
    "en": "The DataTree with the items inserted."
  }
];
