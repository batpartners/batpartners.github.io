// Data for the TriggIOs page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "TriggIOs",
      "img": "triggios_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>TriggIOs</code> 의 변수명을 정의한다. 기본값은 trigg0.",
          "en": "Defines the variable name of the <code>TriggIOs</code> to create. Default: trigg0.",
          "y": [
            52.6,
            31.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "IOEvent",
    "type": "IOEvent",
    "ko": "ABB TriggIOs 에 담을 <a href=\"/datatype/iodevent/\">IOEvent</a> 콜렉션. 여러 IOEvent 를 묶어 연결한다.",
    "en": "Collection of <a href=\"/en/datatype/iodevent/\">IOEvents</a> for the ABB TriggIOs. Connect several IOEvents together."
  }
];

export const main = "triggios_main.png";

export const outputs = [
  {
    "name": "TriggIOs",
    "type": "TriggIOs",
    "ko": "정의된 ABB TriggIOs 를 출력한다.",
    "en": "Outputs the defined ABB TriggIOs."
  }
];
