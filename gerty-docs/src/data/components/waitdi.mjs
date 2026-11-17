// Data for the WaitDI page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WaitDI",
      "img": "waitdi_tab1.png",
      "rows": [
        {
          "name": "Value",
          "type": "Toggle",
          "ko": "기다릴 디지털 입력 값. 신호가 이 값(<code>TRUE</code> = 1, <code>FALSE</code> = 0)이 될 때까지 프로그램이 대기한다. 기본값은 <code>TRUE</code>.",
          "en": "Digital input value to wait for; the program waits until the signal has this value (<code>TRUE</code> = 1, <code>FALSE</code> = 0). Default: <code>TRUE</code>.",
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
    "name": "Signal",
    "type": "String",
    "ko": "기다릴 디지털 입력(DI) 신호의 이름. 로봇 컨트롤러에 정의된 신호 이름과 같아야 한다.",
    "en": "Name of the digital input (DI) signal to wait for. It must match a signal name defined in the robot controller."
  }
];

export const main = "waitdi_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>WaitDI</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>WaitDI</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
