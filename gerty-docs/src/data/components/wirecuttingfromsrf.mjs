// Data for the Wire Cutting from Surface page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "5_WireCuttingFromSrf_10.png",
      "rows": [
        {
          "name": "Cutting Dir. Flip",
          "type": "Toggle",
          "ko": "절단 방향 반전.",
          "en": "Reverses the cutting direction.",
          "y": [
            19.2,
            12
          ]
        },
        {
          "name": "Tool Flip",
          "type": "Toggle",
          "ko": "툴 방향 반전.",
          "en": "Reverses the tool direction.",
          "y": [
            34,
            12.4
          ]
        },
        {
          "name": "UV Flip",
          "type": "Toggle",
          "ko": "열선 경로의 UV 방향 전환. U·V 양방향이 모두 1차 (degree 1)인 룰드 서피스인 경우에만 작동.<br> • TRUE: V 방향. / • FALSE: U 방향 (기본값).",
          "en": "Switches the UV direction of the hot-wire path. Works only when the ruled surface has degree 1 in both U and V directions.<br> • TRUE: V direction. / • FALSE: U direction (Default).",
          "y": [
            49.6,
            12
          ]
        },
        {
          "name": "Extension(mm)",
          "type": "Number",
          "ko": "경로의 시작과 끝을 진행 방향으로 연장하는 거리 (mm).",
          "en": "Distance (mm) to extend the start and end of the path along the moving direction.",
          "y": [
            64.8,
            13.2
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
    "name": "Surface",
    "type": "Surface",
    "ko": "룰드 서피스.",
    "en": "Ruled surface."
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

export const main = "5_WireCuttingFromSrf.png";

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
    "ko": "룰드 서피스를 구성하는 직선 세그먼트.",
    "en": "Straight segments that make up the ruled surface."
  }
];
