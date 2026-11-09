// Data for the Deposition Builder page. Source of the page's tables (both languages); edit here, not in the page.
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
          "en": "• TRUE: Applies deposition order in Infill → Shell sequence<br> • FALSE: Applies deposition order in Shell → Infill sequence.",
          "y": [
            34.6,
            22.8
          ]
        },
        {
          "name": "Layer by Layer",
          "type": "Toggle",
          "ko": "여러 오브젝트의 Deposition ToolPaths 처리 순서 설정.<br> • TRUE: 레이어 단위 적층 (모든 오브젝트의 동일 레이어를 순차 처리).<br> • FALSE: 오브젝트 단위 적층 (오브젝트별 전체 레이어 순차 처리).",
          "en": "Sets the processing order of Deposition ToolPaths for multiple objects.<br> • TRUE: Layer-by-layer deposition (sequentially processes the same layer across all objects).<br> • FALSE: Object-by-object deposition (sequentially processes all layers for each object).",
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
    "name": "Pre-Extrusion Curve",
    "type": "Curve",
    "ko": "압출 시작 전 노즐을 준비하는 사전 압출(Pre-extrusion) 경로 커브.",
    "en": "Pre-extrusion path curve to prepare the nozzle prior to extrusion start."
  },
  {
    "name": "Is Bottommost",
    "type": "Boolean",
    "ko": "현재 Deposition ToolPath가 최하단(첫 번째) 파트인지 여부를 나타내는 플래그. FALSE: PreExtrusion 무시.",
    "en": "Flag indicating whether the current Deposition ToolPath is the lowest (first) part. FALSE: Ignores PreExtrusion."
  }
];

export const main = "9_DepositionBuilder.png";

export const outputs = [
  {
    "name": "E-Start Planes",
    "type": "Plane",
    "ko": "압출 신호가 켜지는(ON) 위치의 타겟 평면.",
    "en": "Target planes at positions where the extrusion signal turns ON."
  },
  {
    "name": "Movement Planes",
    "type": "Plane",
    "ko": "적층 경로의 모션 타겟 평면.",
    "en": "Motion target planes of the deposition path."
  },
  {
    "name": "E-Stop Planes",
    "type": "Plane",
    "ko": "압출 신호가 꺼지는(OFF) 위치의 타겟 평면.",
    "en": "Target planes at positions where the extrusion signal turns OFF."
  },
  {
    "name": "E-Stop idx",
    "type": "Integer",
    "ko": "Deposition ToolPaths 전체 콜렉션에서 압출 종료 (E-Stop) 타겟의 위치 인덱스. 각 타겟별 인스트럭션 할당 전후 데이터 병합(Merge)에 활용.",
    "en": "Position index of the extrusion end (E-Stop) targets within the entire Deposition ToolPaths collection. Used for data merging before and after assigning instructions to each target."
  }
];
