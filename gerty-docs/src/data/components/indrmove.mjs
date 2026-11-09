// Data for the IndRMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IndRMove",
      "img": "indrmove_tab1.png",
      "rows": [
        {
          "name": "MechUnit",
          "type": "String",
          "ko": "대상 축이 속한 메카니컬 유닛(Mechanical Unit)의 이름. 로봇 컨트롤러에 정의된 이름과 같아야 한다. 기본값은 <code>STN1</code>.",
          "en": "Name of the mechanical unit that owns the target axis. It must match the name defined in the robot controller. Default: <code>STN1</code>.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Target Axis",
          "type": "Dropdown",
          "ko": "독립 모드로 전환해 움직일 대상 축(Axis 1–6)을 고른다. 기본값은 <code>Axis 2</code>.",
          "en": "Selects the axis (Axis 1–6) that is switched to independent mode and moved. Default: <code>Axis 2</code>.",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Settings",
      "img": "indrmove_tab2.png",
      "rows": [
        {
          "name": "ToRelNum(°)",
          "type": "Number",
          "ko": "목표 위치를 숫자(°)로 직접 지정한다. 범위는 0 ~ 360°. 기본값은 0.",
          "en": "Target position given directly as a number (°). Range: 0 to 360°. Default: 0.",
          "y": [
            25,
            14.2
          ]
        },
        {
          "name": "Direction",
          "type": "Dropdown",
          "ko": "축의 이동 방향.<br> • <code>Short (±180°)</code>: 최단 경로 (±180° 이내)<br> • <code>Forward (+direction)</code>: 양의 방향 (최대 360°)<br> • <code>Backward (-direction)</code>: 음의 방향 (최대 360°)<br>기본값은 <code>Short (±180°)</code>.",
          "en": "Direction in which the axis moves.<br> • <code>Short (±180°)</code>: shortest path (within ±180°)<br> • <code>Forward (+direction)</code>: positive direction (up to 360°)<br> • <code>Backward (-direction)</code>: negative direction (up to 360°)<br>Default: <code>Short (±180°)</code>.",
          "y": [
            42.9,
            14.2
          ]
        },
        {
          "name": "Speed(°/s)",
          "type": "Integer",
          "ko": "축 이동 속도(°/s). 범위는 0 ~ 50°/s. 기본값은 10.",
          "en": "Axis speed (°/s). Range: 0 to 50°/s. Default: 10.",
          "y": [
            60.8,
            14.2
          ]
        },
        {
          "name": "Ramp(%)",
          "type": "Integer",
          "ko": "최대 성능 대비 가감속 비율(%). 100% 가 최대 성능이고, 낮출수록 가감속이 부드러워진다. 기본값은 50.",
          "en": "Acceleration and deceleration as a share of maximum performance (%). 100% is full performance; lower values make acceleration and deceleration smoother. Default: 50.",
          "y": [
            78.8,
            14.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "indrmove_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>IndRMove</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>IndRMove</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
