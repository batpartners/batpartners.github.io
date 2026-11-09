// Data for the Block Supply page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Spacing",
      "img": "block-supply_tab1.png",
      "rows": [
        {
          "name": "X Spacing",
          "type": "Number",
          "ko": "공급부 X축 방향의 블록 간격 (mm). 기본값은 25, 범위는 0–50.",
          "en": "Block spacing along the X axis of the supply station (mm). Default: 25, range 0–50.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Y Spacing",
          "type": "Number",
          "ko": "공급부 Y축 방향의 블록 간격 (mm). 기본값은 25, 범위는 0–50.",
          "en": "Block spacing along the Y axis of the supply station (mm). Default: 25, range 0–50.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Z Spacing",
          "type": "Number",
          "ko": "공급부 Z축 방향의 블록 간격 (mm). 기본값은 25, 범위는 0–50.",
          "en": "Block spacing along the Z axis of the supply station (mm). Default: 25, range 0–50.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    },
    {
      "label": "Count",
      "img": "block-supply_tab2.png",
      "rows": [
        {
          "name": "X Count",
          "type": "Integer",
          "ko": "공급부 X축 방향의 블록 개수. 기본값은 1, 범위는 1–20.",
          "en": "Number of blocks along the X axis of the supply station. Default: 1, range 1–20.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Y Count",
          "type": "Integer",
          "ko": "공급부 Y축 방향의 블록 개수. 기본값은 1, 범위는 1–20.",
          "en": "Number of blocks along the Y axis of the supply station. Default: 1, range 1–20.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Z Count",
          "type": "Integer",
          "ko": "공급부 Z축 방향의 블록 개수. 기본값은 1, 범위는 1–20.",
          "en": "Number of blocks along the Z axis of the supply station. Default: 1, range 1–20.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "block-supply_tab3.png",
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
    "ko": "공급할 단위 블록 형상.",
    "en": "Unit block geometry to supply."
  },
  {
    "name": "Block Count",
    "type": "Integer",
    "ko": "공급할 블록의 총 개수. 배치 가능 개수(X×Y×Z)를 넘으면 같은 배열 위치에 겹쳐 반복 배치한다.",
    "en": "Total number of blocks to supply. When it exceeds the layout capacity (X × Y × Z), the blocks repeat on the same layout positions."
  },
  {
    "name": "Supply Base",
    "type": "Plane",
    "ko": "블록 공급부의 기준 평면. 블록 배열은 이 평면의 X·Y·Z 방향으로 놓인다.",
    "en": "Reference plane of the block supply station. The block array is laid out along its X, Y and Z axes."
  }
];

export const main = "block-supply_main.png";

export const outputs = [
  {
    "name": "Pick Targets",
    "type": "Plane",
    "ko": "공급된 각 블록의 Pick 타겟 평면.",
    "en": "Pick target plane for each supplied block."
  },
  {
    "name": "Supply Blocks",
    "type": "Mesh",
    "ko": "공급부에 배치된 블록 메시.",
    "en": "Block meshes placed at the supply station."
  }
];
