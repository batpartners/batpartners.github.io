// Data for the Block Designer page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "block-designer_tab1.png",
      "rows": [
        {
          "name": "Divide by Distance",
          "type": "Toggle",
          "ko": "블록 간격을 정하는 방식.<br> • TRUE: 고정 간격 분할 (유닛 너비 + 수평 간격).<br> • FALSE: 균등 개수 분할. 레이어 길이 ÷ (유닛 너비 + 간격)을 정수로 만든 개수로 나눈다.<br>기본값은 FALSE.",
          "en": "Method for spacing the blocks.<br> • TRUE: Divides by distance (unit width + horizontal spacing).<br> • FALSE: Divides by count. The count is layer length ÷ (unit width + spacing), rounded to an integer.<br>Default: FALSE.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Horizontal Spacing",
          "type": "Number",
          "ko": "같은 레이어 안에서 이웃한 블록 사이의 수평 간격 (mm). 기본값은 10, 범위는 0–20.",
          "en": "Horizontal spacing between neighbouring blocks in a layer (mm). Default: 10, range 0–20.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Vertical Spacing",
          "type": "Number",
          "ko": "레이어 사이의 수직 간격 (mm). 기본값은 10, 범위는 0–20.",
          "en": "Vertical spacing between layers of blocks (mm). Default: 10, range 0–20.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "block-designer_tab2.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기. 기본값은 1.5.",
          "en": "Size of the target plane frames shown in the preview. Default: 1.5.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Unit Block",
    "type": "Box",
    "ko": "적층할 단위 블록 형상. 박스의 크기가 블록 한 개의 크기가 된다.",
    "en": "Unit block geometry to stack. The size of the box is the size of one block."
  },
  {
    "name": "Wall",
    "type": "Brep",
    "ko": "블록을 채워 쌓을 대상 벽체 형상.",
    "en": "Target wall geometry to fill with blocks."
  },
  {
    "name": "Wall Base",
    "type": "Plane",
    "ko": "벽체를 레이어로 슬라이싱하는 기준 평면. 이 평면의 Z축 방향으로 레이어를 만든다. 연결하지 않으면 WorldXY 를 사용한다.",
    "en": "Reference plane for slicing the wall into layers. Layers are generated along its Z axis. Uses WorldXY when not connected.",
    "optional": true
  }
];

export const main = "block-designer_main.png";

export const outputs = [
  {
    "name": "Place Targets",
    "type": "Plane",
    "ko": "배치된 각 블록의 Place 타겟 평면.",
    "en": "Place target plane for each placed block."
  },
  {
    "name": "Block Count",
    "type": "Integer",
    "ko": "배치된 전체 블록 개수.",
    "en": "Total number of placed blocks."
  },
  {
    "name": "Layer Curves",
    "type": "Curve",
    "ko": "각 레이어의 적층 외곽 커브.",
    "en": "Stacking outline curve of each layer."
  },
  {
    "name": "Block Wall",
    "type": "Mesh",
    "ko": "배치된 블록들로 구성된 결과 벽체 메시.",
    "en": "Resulting wall meshes made of the placed blocks."
  }
];
