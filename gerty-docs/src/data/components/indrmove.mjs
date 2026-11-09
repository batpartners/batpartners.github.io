// Data for the IndRMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IndRMove",
      "img": "11_IndRMove_10.png",
      "rows": [
        {
          "name": "MechUnit",
          "type": "String",
          "ko": "제어할 메카니컬 유닛(Mechanical Unit)의 이름. 예: STN1",
          "en": "Name of the mechanical unit to control, e.g. STN1.",
          "y": [
            36.1,
            24.1
          ]
        },
        {
          "name": "Target Axis",
          "type": "Dropdown",
          "ko": "대상 축(Axis 1–6)을 고른다. 독립 모드로 움직이거나 논리 위치를 다시 정할 축이다.",
          "en": "The target axis (Axis 1–6): the axis moved in independent mode or whose logical position is redefined.",
          "y": [
            64.7,
            27.1
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Settings",
      "img": "11_IndRMove_11.png",
      "rows": [
        {
          "name": "ToRelNum(°)",
          "type": "Number",
          "ko": "목표 위치(°)를 숫자로 직접 지정한다.",
          "en": "Target position (°) as a number.",
          "y": [
            23.6,
            15.7
          ]
        },
        {
          "name": "Direction Policy",
          "type": "Dropdown",
          "ko": "이동 방향.<br> • <code>Short</code>: 최단 경로 (±180° 이내)<br> • <code>Fwd</code>: 양의 방향 (최대 360°)<br> • <code>Bwd</code>: 음의 방향 (최대 360°)",
          "en": "Direction of movement.<br> • <code>Short</code>: shortest path (within ±180°)<br> • <code>Fwd</code>: positive direction (up to 360°)<br> • <code>Bwd</code>: negative direction (up to 360°)",
          "y": [
            41.2,
            16.2
          ]
        },
        {
          "name": "Speed(°/s)",
          "type": "Number",
          "ko": "축 이동 속도(°/s).",
          "en": "Axis speed (°/s).",
          "y": [
            58.8,
            16.2
          ]
        },
        {
          "name": "Ramp(%)",
          "type": "Number",
          "ko": "가감속 성능 비율(%). 100% 가 최대 성능이고, 낮출수록 가감속이 부드러워진다.",
          "en": "Acceleration / deceleration performance (%). 100% is full performance; lower values make acceleration and deceleration smoother.",
          "y": [
            76.4,
            16.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "11_IndRMove.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
