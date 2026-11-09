// Data for the Wire Cutting from Surface page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "wirecuttingfromsrf_tab1.png",
      "rows": [
        {
          "name": "Dir Flip",
          "type": "Toggle",
          "ko": "절단 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the cutting direction. Default: FALSE.",
          "y": [
            23.7,
            14.5
          ]
        },
        {
          "name": "Tool Flip",
          "type": "Toggle",
          "ko": "툴 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the tool orientation. Default: FALSE.",
          "y": [
            42,
            14.5
          ]
        },
        {
          "name": "UV Flip",
          "type": "Toggle",
          "ko": "열선 경로의 UV 방향을 바꾼다. U·V 양방향이 모두 1차(degree 1)인 룰드 서피스에서만 작동한다.<br> • TRUE: V 방향.<br> • FALSE: U 방향.<br>기본값은 FALSE.",
          "en": "Switches the UV direction of the hot-wire path. Works only when the ruled surface is degree 1 in both U and V.<br> • TRUE: V direction.<br> • FALSE: U direction.<br>Default: FALSE.",
          "y": [
            60.4,
            14.5
          ]
        },
        {
          "name": "Extension",
          "type": "Number",
          "ko": "경로의 시작과 끝을 진행 방향으로 연장하는 거리 (mm). 기본값은 0, 범위는 0–100.",
          "en": "Distance to extend the start and end of the toolpath along the travel direction (mm). Default: 0, range 0–100.",
          "y": [
            78.7,
            14.5
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "wirecuttingfromsrf_tab2.png",
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
    "name": "Surface",
    "type": "Surface",
    "ko": "열선 절단 경로를 만들 룰드 서피스.",
    "en": "Ruled surface to generate the hot-wire cutting toolpath from."
  },
  {
    "name": "Target Count",
    "type": "Integer",
    "ko": "절단 경로를 구성할 타겟 평면의 개수.",
    "en": "Number of target planes that make up the cutting toolpath."
  },
  {
    "name": "Parameter",
    "type": "Number",
    "optional": true,
    "ko": "타겟 평면의 원점으로 쓰는 Span 위의 파라미터 (0.0–1.0). 연결하지 않으면 0.5 를 사용한다.",
    "en": "Parameter on each span used as the target plane origin (0.0–1.0). Uses 0.5 when not connected."
  },
  {
    "name": "Attractor",
    "type": "Geometry",
    "optional": true,
    "ko": "각 타겟 평면의 Z(법선)가 향하도록 끌어 주는 어트랙터 객체 (Point 또는 Curve). 연결하지 않으면 어트랙터 없이 경로를 만든다.",
    "en": "Attractor object (Point or Curve) that each target's Z (normal) is steered toward. When not connected, no attractor is applied."
  }
];

export const main = "wirecuttingfromsrf_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 열선 절단 경로의 타겟 평면.",
    "en": "Target planes of the generated hot-wire cutting toolpath."
  },
  {
    "name": "Spans",
    "type": "Curve",
    "ko": "룰드 서피스를 이루는 직선 세그먼트(Span).",
    "en": "Ruling lines (spans) that make up the ruled surface."
  }
];
