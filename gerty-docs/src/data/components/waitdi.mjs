// Data for the WaitDI page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WaitDI",
      "img": "9_WaitDI_1.png",
      "rows": [
        {
          "name": "Value",
          "type": "Toggle",
          "ko": "기다릴 신호 값. 신호가 이 값이 될 때까지 로봇이 대기한다.",
          "en": "The signal value to wait for; the robot waits until the signal has this value.",
          "y": [
            48.5,
            32.3
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
    "ko": "기다릴 디지털 입력(DI) 신호의 이름.",
    "en": "Name of the digital input (DI) signal to wait for."
  }
];

export const main = "9_WaitDI.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
