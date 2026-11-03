// Data for the Wire Cutting from Curves page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "4_WireCuttingFromCurvs_10.png",
      "rows": [
        {
          "name": "Cutting Dir. Flip",
          "type": "Toggle",
          "ko": "절단 방향 반전.",
          "en": "Reverses the cutting direction.",
          "y": [
            22.6,
            14.2
          ]
        },
        {
          "name": "Tool Flip",
          "type": "Toggle",
          "ko": "툴 방향 반전.",
          "en": "Reverses the tool direction.",
          "y": [
            40.1,
            14.6
          ]
        },
        {
          "name": "Extension(mm)",
          "type": "Number",
          "ko": "경로의 시작과 끝을 진행 방향으로 연장하는 거리 (mm).",
          "en": "Distance (mm) to extend the start and end of the path along the moving direction.",
          "y": [
            58.5,
            15.6
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "4_WireCuttingFromCurvs_11.png",
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
    "name": "Curve A",
    "type": "Curve",
    "ko": "룰드 서피스를 정의하기 위한 첫 번째 레일 커브.",
    "en": "First rail curve to define the ruled surface."
  },
  {
    "name": "Curve B",
    "type": "Curve",
    "ko": "룰드 서피스를 정의하기 위한 두 번째 레일 커브.",
    "en": "Second rail curve to define the ruled surface."
  },
  {
    "name": "Target Count",
    "type": "Number",
    "ko": "절단 경로를 구성할 타겟 평면의 개수.",
    "en": "Number of target planes comprising the cutting path."
  },
  {
    "name": "Parameter",
    "type": "Number",
    "ko": "타겟 평면의 원점으로 사용되는 Span상의 파라미터 (0.0 ~ 1.0). 기본값은 0.5.",
    "en": "Parameter on the span used as the origin of the target plane (0.0 ~ 1.0). Default 0.5.",
    "optional": true
  },
  {
    "name": "Wrist Object",
    "type": "Geometry",
    "ko": "각 타겟 평면의 Z를 지향시킬 어트랙터 객체 (Point 또는 Curve).",
    "en": "Attractor object (Point or Curve) to direct the Z-axis of each target plane.",
    "optional": true
  }
];

export const main = "4_WireCuttingFromCurvs.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 열선 절단 경로의 타겟 평면.",
    "en": "Target planes of the generated hot-wire cutting path."
  },
  {
    "name": "RibCurves",
    "type": "Curve",
    "ko": "두 레일 커브를 연결하여 ruled surface를 구성하는 직선 세그먼트.",
    "en": "Straight line segments connecting the two rail curves to form a ruled surface."
  }
];
