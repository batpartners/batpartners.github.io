// Data for the IndReset page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IndRset",
      "img": "indreset_tab1.png",
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
          "ko": "논리 위치를 초기화할 대상 축(Axis 1–6)을 고른다. 독립 모드에 있는 축이면 일반 모드로도 되돌린다. 기본값은 <code>Axis 2</code>.",
          "en": "Selects the axis (Axis 1–6) whose logical position is reset. If the axis is in independent mode, it is also returned to normal mode. Default: <code>Axis 2</code>.",
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
      "img": "indreset_tab2.png",
      "rows": [
        {
          "name": "RefNum(°)",
          "type": "Number",
          "ko": "계측 기준 위치를 숫자(°)로 지정한다. 범위는 0 ~ 360°. 기본값은 0.",
          "en": "Reference position of the measurement system as a number (°). Range: 0 to 360°. Default: 0.",
          "y": [
            39,
            22.1
          ]
        },
        {
          "name": "Direction",
          "type": "Dropdown",
          "ko": "계측 시스템을 기준 위치에 맞추는 방식.<br> • <code>Short (±180°)</code>: 기준 위치까지 최단 경로(±180° 이내)로 맞춘다.<br> • <code>Forward (+direction)</code>: 기준 위치를 양의 방향 쪽에 둔다.<br> • <code>Backward (-direction)</code>: 기준 위치를 음의 방향 쪽에 둔다.<br>기본값은 <code>Short (±180°)</code>.",
          "en": "How the measurement system is aligned to the reference position.<br> • <code>Short (±180°)</code>: the fewest revolutions to the reference position (within ±180°).<br> • <code>Forward (+direction)</code>: the reference position on the positive side.<br> • <code>Backward (-direction)</code>: the reference position on the negative side.<br>Default: <code>Short (±180°)</code>.",
          "y": [
            66.9,
            22.1
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "indreset_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>IndReset</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>IndReset</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
