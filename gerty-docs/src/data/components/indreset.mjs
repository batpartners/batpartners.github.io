// Data for the IndReset page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IndReset",
      "img": "12_IndReset_10.png",
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
      "img": "12_IndReset_11.png",
      "rows": [
        {
          "name": "RefNum(°)",
          "type": "Number",
          "ko": "계측 기준 위치(°). <code>Direction Policy</code> 가 <code>Short</code> / <code>Fwd</code> / <code>Bwd</code> 일 때만 쓰인다.",
          "en": "Measurement reference position (°). Used only when <code>Direction Policy</code> is <code>Short</code>, <code>Fwd</code> or <code>Bwd</code>.",
          "y": [
            36.4,
            24.3
          ]
        },
        {
          "name": "Direction Policy",
          "type": "Dropdown",
          "ko": "계측 시스템을 맞추는 방식.<br> • <code>Short</code>: 기준 위치까지 최단 경로 (±180° 이내)<br> • <code>Fwd</code>: 기준 위치의 양의 방향으로 조정<br> • <code>Bwd</code>: 기준 위치의 음의 방향으로 조정<br> • <code>Old</code>: 현재 논리 위치 유지 (기본값)",
          "en": "How the measurement system is adjusted.<br> • <code>Short</code>: shortest path to the reference position (within ±180°)<br> • <code>Fwd</code>: towards the reference position in the positive direction<br> • <code>Bwd</code>: towards the reference position in the negative direction<br> • <code>Old</code>: keep the current logical position (default)",
          "y": [
            63.6,
            25.7
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "12_IndReset.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
