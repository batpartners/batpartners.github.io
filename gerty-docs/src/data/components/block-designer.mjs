// Data for the Block Designer page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "15_BlockDesign_10.png",
      "rows": [
        {
          "name": "Divide by Distance",
          "type": "Toggle",
          "ko": "블록 간격 산정 방식.<br> • TRUE: 고정 간격 분할 (유닛 너비 + 수평 간격).<br> • FALSE: 균등 개수 분할 (레이어 길이 ÷ (유닛 너비 + 간격)을 정수화) (기본값).",
          "en": "Method for calculating block spacing.<br> • TRUE: Fixed interval division (Unit width + Horizontal spacing).<br> • FALSE: Uniform count division (Layer length ÷ (Unit width + Spacing) rounded to integer) (Default).",
          "y": [
            27.6,
            17.2
          ]
        },
        {
          "name": "Horizontal Spacing(mm)",
          "type": "Number",
          "ko": "블록 간의 수평 간격 (mm)",
          "en": "Horizontal spacing between blocks (mm)",
          "y": [
            49.4,
            17.2
          ]
        },
        {
          "name": "Vertical Spacing(mm)",
          "type": "Number",
          "ko": "블록 간의 수직 간격 (mm)",
          "en": "Vertical spacing between blocks (mm)",
          "y": [
            71.3,
            17.2
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "15_BlockDesign_11.png",
      "rows": [
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기.",
          "en": "Size of the target plane frames shown in the preview.",
          "y": [
            53.1,
            26.5
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Base Plane",
    "type": "Plane",
    "ko": "벽체를 레이어로 슬라이싱하는 기준 평면. Z축 방향으로 레이어 생성. 기본값: WorldXY.",
    "en": "Base plane for slicing the wall into layers. Generates layers along the Z-axis direction. Default: WorldXY.",
    "optional": true
  },
  {
    "name": "Unit Block",
    "type": "Box",
    "ko": "적층할 단위 블록 형상.",
    "en": "Unit block geometry to be stacked."
  },
  {
    "name": "Wall",
    "type": "Brep",
    "ko": "블록을 배치할 대상 벽체 형상.",
    "en": "Target wall geometry where blocks will be placed."
  }
];

export const main = "15_BlockDesign.png";

export const outputs = [
  {
    "name": "Block Count",
    "type": "Integer",
    "ko": "전체 블록 개수.",
    "en": "Total number of blocks."
  },
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "배치할 각 블록의 타겟 평면.",
    "en": "Target plane of each block to place."
  },
  {
    "name": "Block Wall",
    "type": "Plane",
    "ko": "배치된 블록들로 구성된 결과 벽체 메시.",
    "en": "Resulting wall mesh composed of placed blocks."
  },
  {
    "name": "Layers",
    "type": "Curve",
    "ko": "각 레이어의 적층 외곽 커브.",
    "en": "Stacking outline curves for each layer."
  }
];
