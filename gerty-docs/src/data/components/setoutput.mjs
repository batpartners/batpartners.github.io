// Data for the SetOutput page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SetXO",
      "img": "7_SetOutput_1.png",
      "rows": [
        {
          "name": "Signal Type",
          "type": "Dropdown",
          "ko": "출력 신호 유형(Digital / Group / Analog Output)을 고른다. 각각 <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code> 로 쓰인다.",
          "en": "Output signal type (Digital / Group / Analog Output), written as <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code>.",
          "y": [
            35,
            26.3
          ]
        },
        {
          "name": "DO Value",
          "type": "Toggle",
          "ko": "디지털 출력 값.",
          "en": "Digital output value.",
          "y": [
            62.8,
            23.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Signal",
    "type": "String",
    "ko": "값을 바꿀 출력 신호의 이름.",
    "en": "Name of the output signal to set."
  }
];

export const main = "7_SetOutput.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
