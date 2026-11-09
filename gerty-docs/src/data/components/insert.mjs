// Data for the Insert page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "항목을 삽입할 DataTree 이다.",
    "en": "The DataTree to insert the items into."
  },
  {
    "name": "Items",
    "type": "Tree",
    "ko": "삽입할 데이터 항목이다.",
    "en": "The data items to insert."
  },
  {
    "name": "indices",
    "type": "Integer",
    "ko": "항목을 삽입할 인덱스이다. <strong>Items</strong> 는 각 Branch 의 이 위치에 들어간다.",
    "en": "Index at which the items are inserted. <strong>Items</strong> are placed at this position in each branch."
  }
];

export const main = "insert_main.png";

export const outputs = [
  {
    "name": "Tree",
    "type": "Tree",
    "ko": "항목이 삽입된 DataTree 이다.",
    "en": "The DataTree with the items inserted."
  }
];
