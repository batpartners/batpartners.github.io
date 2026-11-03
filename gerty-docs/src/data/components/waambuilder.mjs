// Data for the WAAM Builder page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "9_DepositionBuilder_10.png",
      "rows": [
        {
          "name": "Infill first",
          "type": "Toggle",
          "ko": "• TRUE: 적층 순서를 채움(Infill) → 외곽(Shell) 순으로 적용<br> • FALSE: 적층 순서를 외곽(Shell) → 채움(Infill) 순으로 적용.",
          "en": "• TRUE: Applies deposition sequence from Infill → Shell<br> • FALSE: Applies deposition sequence from Shell → Infill.",
          "y": [
            34.6,
            22.8
          ]
        },
        {
          "name": "Layer by Layer",
          "type": "Toggle",
          "ko": "여러 오브젝트의 Deposition ToolPaths 처리 순서 설정.<br> • TRUE: 레이어 단위 적층 (모든 오브젝트의 동일 레이어를 순차 처리).<br> • FALSE: 오브젝트 단위 적층 (오브젝트별 전체 레이어 순차 처리).",
          "en": "Sets the processing sequence for Deposition ToolPaths of multiple objects.<br> • TRUE: Layer-by-layer deposition (sequentially processes the same layer across all objects).<br> • FALSE: Object-by-object deposition (sequentially processes all layers per object).",
          "y": [
            66.2,
            19.1
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "9_DepositionBuilder_11.png",
      "rows": [
        {
          "name": "Preview Colour",
          "type": "Color",
          "ko": "시각화 색상.",
          "en": "Visualization color.",
          "y": [
            27.6,
            17.2
          ]
        },
        {
          "name": "Layer Preview",
          "type": "Number",
          "ko": "프리뷰할 레이어.",
          "en": "Layer to preview.",
          "y": [
            49.4,
            19
          ]
        },
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기.",
          "en": "Size of the target plane frames shown in the preview.",
          "y": [
            71.3,
            18.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Deposition ToolPaths",
    "type": "Data",
    "ko": "슬라이서 컴포넌트에서 생성된 적층 툴패스 데이터.",
    "en": "Deposition toolpath data generated from the slicer component."
  },
  {
    "name": "Is Bottommost",
    "type": "Boolean",
    "ko": "현재 Deposition ToolPath가 최하단(첫 번째) 파트인지 여부를 나타내는 플래그.",
    "en": "Flag indicating whether the current Deposition ToolPath is the lowest (first) part."
  }
];

export const main = "14_WAAMBuilder.png";

export const outputs = [
  {
    "name": "1st Shell Layers",
    "type": "Plane",
    "ko": "첫 번째 레이어의 외곽(Shell) 타겟 평면. Is Bottommost = FALSE 시 출력 없음.",
    "en": "Target planes for the shell of the first layer. No output when Is Bottommost = FALSE."
  },
  {
    "name": "1st Infill Layers",
    "type": "Plane",
    "ko": "첫 번째 레이어의 채움(Infill) 타겟 평면. Is Bottommost = FALSE 시 출력 없음.",
    "en": "Target planes for the infill of the first layer. No output when Is Bottommost = FALSE."
  },
  {
    "name": "Other Shell Layers",
    "type": "Plane",
    "ko": "첫 번째 레이어 이후의 외곽(Shell) 타겟 평면.",
    "en": "Target planes for the shells of layers subsequent to the first layer."
  },
  {
    "name": "Other Infill Layers",
    "type": "Plane",
    "ko": "첫 번째 레이어 이후의 채움(Infill) 타겟 평면.",
    "en": "Target planes for the infills of layers subsequent to the first layer."
  },
  {
    "name": "Tween Shell Layers",
    "type": "Plane",
    "ko": "오버행(Overhang) 구간에서 기본 외곽(Shell) 레이어 사이에 부분적으로 삽입되는 외곽 경로 타겟 평면.",
    "en": "Target planes for partial shell paths inserted between base shell layers in overhang sections."
  }
];
