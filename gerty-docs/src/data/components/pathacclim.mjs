// Data for the PathAccLim page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Acceleration Params",
      "img": "pathacclim_tab1.png",
      "rows": [
        {
          "name": "AccLim",
          "type": "Toggle",
          "ko": "이동 경로상의 TCP 가속도를 제한할지 정한다. (<code>TRUE</code>: 제한, <code>FALSE</code>: 제한 안 함) 기본값은 <code>FALSE</code>.",
          "en": "Whether to limit the TCP acceleration along the path (<code>TRUE</code>: limit, <code>FALSE</code>: no limit). Default: <code>FALSE</code>.",
          "y": [
            23.9,
            14.4
          ]
        },
        {
          "name": "DecelLim",
          "type": "Toggle",
          "ko": "이동 경로상의 TCP 감속도를 제한할지 정한다. (<code>TRUE</code>: 제한, <code>FALSE</code>: 제한 안 함) 기본값은 <code>FALSE</code>.",
          "en": "Whether to limit the TCP deceleration along the path (<code>TRUE</code>: limit, <code>FALSE</code>: no limit). Default: <code>FALSE</code>.",
          "y": [
            42.1,
            14.4
          ]
        },
        {
          "name": "AccMax(m/s²)",
          "type": "Number",
          "ko": "최대 TCP 가속도(m/s²). <strong>AccLim</strong> 이 <code>TRUE</code> 일 때만 쓰인다. 범위는 0 ~ 1. 기본값은 0.5.",
          "en": "Maximum TCP acceleration (m/s²). Used only when <strong>AccLim</strong> is <code>TRUE</code>. Range: 0 to 1. Default: 0.5.",
          "y": [
            60.3,
            14.4
          ]
        },
        {
          "name": "DecelMax(m/s²)",
          "type": "Number",
          "ko": "최대 TCP 감속도(m/s²). <strong>DecelLim</strong> 이 <code>TRUE</code> 일 때만 쓰인다. 범위는 0 ~ 1. 기본값은 0.5.",
          "en": "Maximum TCP deceleration (m/s²). Used only when <strong>DecelLim</strong> is <code>TRUE</code>. Range: 0 to 1. Default: 0.5.",
          "y": [
            78.5,
            14.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "pathacclim_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>PathAccLim</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>PathAccLim</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
