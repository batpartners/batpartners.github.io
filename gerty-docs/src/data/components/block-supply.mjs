// Data for the Block Supply page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Spacing",
      "img": "16_BlockSupply_10.png",
      "rows": [
        {
          "name": "X Spacing",
          "type": "Number",
          "ko": "공급부 X축 방향 블록 간격 (mm)",
          "en": "Block spacing along the X-axis in the supply section (mm).",
          "y": [
            29.3,
            15.5
          ]
        },
        {
          "name": "Y Spacing",
          "type": "Number",
          "ko": "공급부 Y축 방향 블록 간격 (mm)",
          "en": "Block spacing along the Y-axis in the supply section (mm).",
          "y": [
            49.4,
            17.2
          ]
        },
        {
          "name": "Z Spacing",
          "type": "Number",
          "ko": "공급부 Z축 방향 블록 간격 (mm)",
          "en": "Block spacing along the Z-axis in the supply section (mm).",
          "y": [
            73.6,
            17.2
          ]
        }
      ]
    },
    {
      "label": "Count",
      "img": "16_BlockSupply_11.png",
      "rows": [
        {
          "name": "X Count",
          "type": "Integer",
          "ko": "공급부 X축 방향 블록 개수.",
          "en": "Number of blocks along the X-axis in the supply section.",
          "y": [
            27.6,
            18.4
          ]
        },
        {
          "name": "Y Count",
          "type": "Integer",
          "ko": "공급부 Y축 방향 블록 개수.",
          "en": "Number of blocks along the Y-axis in the supply section.",
          "y": [
            49.4,
            18.4
          ]
        },
        {
          "name": "Z Count",
          "type": "Integer",
          "ko": "공급부 Z축 방향 블록 개수.",
          "en": "Number of blocks along the Z-axis in the supply section.",
          "y": [
            71.3,
            18.4
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "16_BlockSupply_12.png",
      "rows": [
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기.",
          "en": "Size of the target plane frames shown in the preview.",
          "y": [
            49,
            32.7
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
    "ko": "블록 공급부의 기준 평면.",
    "en": "Reference plane for the block supply section."
  },
  {
    "name": "Unit Block",
    "type": "Box",
    "ko": "적층할 단위 블록 형상.",
    "en": "Unit block geometry to be stacked."
  },
  {
    "name": "Block Count",
    "type": "Integer",
    "ko": "공급할 블록의 총 개수. 배치 가능 개수(X×Y×Z) 초과 시 동일 배열로 겹쳐 반복 배치.",
    "en": "Total number of blocks to supply. If it exceeds the available layout capacity (X × Y × Z), blocks are repeatedly placed overlapping in the same arrangement."
  }
];

export const main = "16_BlockSupply.png";

export const outputs = [
  {
    "name": "Blocks",
    "type": "Mesh",
    "ko": "공급부에 배치된 블록 메시.",
    "en": "Block meshes placed in the supply section."
  },
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "각 공급 블록의 Pick 타겟 평면.",
    "en": "Pick target plane for each supplied block."
  }
];
