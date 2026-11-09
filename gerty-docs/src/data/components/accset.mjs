// Data for the AccSet page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Acceleration Params",
      "img": "5_AccSet_1.png",
      "rows": [
        {
          "name": "Acceleration(%)",
          "type": "Number",
          "ko": "최대 가감속 대비 비율(%). 100% 가 최대이며, 20% 미만은 20% 로 고정된다.",
          "en": "Share of the maximum acceleration / deceleration (%). 100% is the maximum; values under 20% are set to 20%.",
          "y": [
            28,
            17.7
          ]
        },
        {
          "name": "Ramp(%)",
          "type": "Number",
          "ko": "가감속이 커지는 비율(%). 낮출수록 저킹(Jerking)이 줄어든다. 100% 가 최대이며, 10% 미만은 10% 로 고정된다.",
          "en": "Rate at which acceleration / deceleration builds up (%); lower values reduce jerking. 100% is the maximum; values under 10% are set to 10%.",
          "y": [
            49.1,
            18.3
          ]
        },
        {
          "name": "FinePointRamp(%)",
          "type": "Number",
          "ko": "Fine Point(Zone 이 fine 인 타겟)로 들어갈 때의 감속 램프 비율(%). 최종 감속 램프 = Ramp × FinePointRamp. 범위는 0 초과 ~ 100%, 기본값은 100%.",
          "en": "Deceleration ramp when entering a fine point (target with zone fine) (%). Final deceleration ramp = Ramp × FinePointRamp. Range: above 0 to 100%; default 100%.",
          "y": [
            70.9,
            19.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "5_AccSet.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
