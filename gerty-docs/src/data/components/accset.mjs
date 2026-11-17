// Data for the AccSet page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Acceleration Params",
      "img": "accset_tab1.png",
      "rows": [
        {
          "name": "Acceleration(%)",
          "type": "Integer",
          "ko": "최대 가감속 대비 가감속 비율(%). 100% 가 최대이며, 20% 미만은 20% 로 고정된다. 기본값은 50.",
          "en": "Acceleration and deceleration as a share of the maximum (%). 100% is the maximum; values below 20% are clamped to 20%. Default: 50.",
          "y": [
            29.2,
            17.5
          ]
        },
        {
          "name": "Ramp(%)",
          "type": "Integer",
          "ko": "가감속이 커지는 비율(%). 낮출수록 저킹(Jerking)이 줄어든다. 100% 가 최대이며, 10% 미만은 10% 로 고정된다. 기본값은 50.",
          "en": "Rate at which acceleration / deceleration builds up, as a share of the maximum (%). Lower values reduce jerking. 100% is the maximum; values below 10% are clamped to 10%. Default: 50.",
          "y": [
            51.5,
            17.5
          ]
        },
        {
          "name": "FinePointRamp(%)",
          "type": "Integer",
          "ko": "Fine Point(Zone 이 <code>fine</code> 인 타겟)로 들어갈 때의 감속 램프 비율(%). 최종 감속 램프 = Ramp × FinePointRamp 이다. 범위는 0 초과 ~ 100%. 기본값은 100.",
          "en": "Deceleration ramp when approaching a fine point (a target whose zone is <code>fine</code>) (%). Final deceleration ramp = Ramp × FinePointRamp. Range: above 0 to 100%. Default: 100.",
          "y": [
            73.7,
            17.5
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "accset_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>AccSet</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>AccSet</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
