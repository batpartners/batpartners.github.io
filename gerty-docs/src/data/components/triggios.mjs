// Data for the TriggIOs page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "TriggIOs",
      "img": "5_TriggIOs_1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>TriggIOs</code>의 변수명을 정의한다.",
          "en": "Variable name",
          "y": [
            49.5,
            31.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "IOs",
    "type": "IOEvent",
    "ko": "ABB TriggIOs를 위한 <a href=\"/datatype/iodevent/\">IOEvents</a> 콜렉션",
    "en": "IOEvents collection for ABB TriggIOs"
  }
];

export const main = "5_TriggIOs.png";

export const outputs = [
  {
    "name": "TriggIOs",
    "type": "TriggIOs",
    "ko": "정의된 ABB TriggIOs를 출력한다.",
    "en": "ABB TriggIOs"
  }
];
