// Data for the PathAccLim page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Acceleration Params",
      "img": "6_PathAccLim_1.png",
      "rows": [
        {
          "name": "AccLim",
          "type": "Toggle",
          "ko": "TCP 가속도를 제한할지 정한다. (<code>TRUE</code>: 제한, <code>FALSE</code>: 제한 안 함)",
          "en": "Whether to limit the TCP acceleration (<code>TRUE</code>: limit, <code>FALSE</code>: no limit).",
          "y": [
            23,
            14.6
          ]
        },
        {
          "name": "DecelLim",
          "type": "Toggle",
          "ko": "TCP 감속도를 제한할지 정한다. (<code>TRUE</code>: 제한, <code>FALSE</code>: 제한 안 함)",
          "en": "Whether to limit the TCP deceleration (<code>TRUE</code>: limit, <code>FALSE</code>: no limit).",
          "y": [
            40.4,
            15
          ]
        },
        {
          "name": "AccMax(m/s²)",
          "type": "Number",
          "ko": "최대 가속도(m/s²). <strong>AccLim</strong> 이 <code>TRUE</code> 일 때만 쓰인다.",
          "en": "Maximum acceleration (m/s²). Used only when <strong>AccLim</strong> is <code>TRUE</code>.",
          "y": [
            58.2,
            15
          ]
        },
        {
          "name": "DecelMax(m/s²)",
          "type": "Number",
          "ko": "최대 감속도(m/s²). <strong>DecelLim</strong> 이 <code>TRUE</code> 일 때만 쓰인다.",
          "en": "Maximum deceleration (m/s²). Used only when <strong>DecelLim</strong> is <code>TRUE</code>.",
          "y": [
            76.1,
            16
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "6_PathAccLim.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
