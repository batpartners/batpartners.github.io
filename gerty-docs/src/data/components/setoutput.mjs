// Data for the SetOutput page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SetOutput",
      "img": "setoutput_tab1.png",
      "rows": [
        {
          "name": "Signal Type",
          "type": "Dropdown",
          "ko": "출력 신호 유형을 고른다. <code>Digital Output</code> / <code>Group Output</code> / <code>Analog Output</code> 은 각각 <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code> 인스트럭션으로 쓰이며, 고른 유형에 맞는 값 입력이 아래에 나타난다. 기본값은 <code>Digital Output</code>.",
          "en": "Selects the output signal type. <code>Digital Output</code> / <code>Group Output</code> / <code>Analog Output</code> are written as <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code>, and the value control for the chosen type appears below. Default: <code>Digital Output</code>.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Value",
          "type": "Toggle",
          "ko": "신호에 쓸 값. <strong>Signal Type</strong> 에 따라 표시되는 칸이 바뀐다. <code>Digital Output</code> 이면 <strong>DO Value</strong> 토글(기본값 <code>FALSE</code>), <code>Group Output</code> 이면 <strong>GO Value</strong>, <code>Analog Output</code> 이면 <strong>AO Value</strong> 가 나타난다.",
          "en": "Value written to the signal. The control shown depends on <strong>Signal Type</strong>: the <strong>DO Value</strong> toggle for <code>Digital Output</code> (default <code>FALSE</code>), <strong>GO Value</strong> for <code>Group Output</code>, and <strong>AO Value</strong> for <code>Analog Output</code>.",
          "y": [
            66.2,
            22.6
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
    "ko": "값을 바꿀 출력 신호의 이름. 로봇 컨트롤러에 정의된 신호 이름과 같아야 한다.",
    "en": "Name of the output signal to set. It must match a signal name defined in the robot controller."
  }
];

export const main = "setoutput_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>SetDO</code> / <code>SetGO</code> / <code>SetAO</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
