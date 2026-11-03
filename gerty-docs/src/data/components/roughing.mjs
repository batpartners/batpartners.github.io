// Data for the Roughing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "7_Roughing_10.png",
      "rows": [
        {
          "name": "Cutting Direction",
          "type": "Toggle",
          "ko": "레이어 내 절삭 경로의 진행 방향 (시계/반시계) 전환. 엔드밀 회전과의 관계로 Climb / Conventional 절삭 결정.",
          "en": "Toggles the progression direction of the cutting path within the layer (Clockwise/Counter-clockwise). Determines Climb or Conventional cutting in relation to endmill rotation.",
          "y": [
            16.7,
            10.4
          ]
        },
        {
          "name": "Setback(mm)",
          "type": "Number",
          "ko": "입력 볼륨의 경계 기준, 외곽 경로의 이격(오프셋) 거리 (mm).",
          "en": "Offset distance from the boundary of the input volume for the outer path (mm).",
          "y": [
            29.9,
            11.1
          ]
        },
        {
          "name": "Stepover(mm)",
          "type": "Number",
          "ko": "인접 절삭 경로 간 간격 (mm).",
          "en": "Distance between adjacent cutting paths (mm).",
          "y": [
            43.1,
            11.5
          ]
        },
        {
          "name": "Stepdown(mm)",
          "type": "Number",
          "ko": "레이어당 하강 절삭 깊이 (mm).",
          "en": "Downward cutting depth per layer (mm).",
          "y": [
            56.3,
            10.4
          ]
        },
        {
          "name": "Vertical Shift(mm)",
          "type": "Number",
          "ko": "수직 이동 거리 (mm).",
          "en": "Vertical shift distance.",
          "y": [
            69.1,
            11.8
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로의 근사 허용 오차.",
          "en": "Approximation tolerance for the path.",
          "y": [
            84,
            9
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
    "name": "Geometry",
    "type": "Geometry",
    "ko": "황삭으로 거칠게 깎아낼 참조 볼륨 (Brep 또는 Mesh).",
    "en": "Reference volume (Brep or Mesh) to be roughly machined away."
  },
  {
    "name": "Reference Planes",
    "type": "Plane",
    "ko": "황삭 경로의 기준 평면. Z축 방향으로 계단식 레이어 생성. 기본값: WorldXY.",
    "en": "Reference plane for the roughing toolpath. Generates tiered layers along the Z-axis. Default: WorldXY.",
    "optional": true
  }
];

export const main = "7_Roughing.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 황삭 경로의 타겟 평면.",
    "en": "Target planes of the generated roughing toolpath."
  },
  {
    "name": "Tool Path",
    "type": "Curve",
    "ko": "생성된 황삭 경로를 연결하는 폴리라인 패턴.",
    "en": "Polyline pattern connecting the generated roughing toolpaths."
  }
];
