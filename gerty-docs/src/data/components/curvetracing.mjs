// Data for the Curve Tracing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "0_Drawing_10.png",
      "rows": [
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로의 근사 허용 오차.",
          "en": "Approximation tolerance for the path.",
          "y": [
            24.5,
            12.3
          ]
        },
        {
          "name": "MinEdge(mm)",
          "type": "Number",
          "ko": "경로 세그먼트의 최소 길이 (mm)",
          "en": "Minimum length of path segments (mm).",
          "y": [
            40.6,
            16
          ]
        },
        {
          "name": "MaxEdge(mm)",
          "type": "Number",
          "ko": "경로 세그먼트의 최대 길이 (mm)",
          "en": "Maximum length of path segments (mm).",
          "y": [
            58.5,
            14.2
          ]
        },
        {
          "name": "Tilting Weight",
          "type": "Number",
          "ko": "Geometry 표면 법선 또는 Curve 접선 방향으로 TCP를 기울이는 정도 (0.0 = Reference Plane Z, 1.0 = Geometry 표면 법선 또는 Curve 접선 방향).",
          "en": "Degree of tilting the TCP toward the geometry surface normal or curve tangent direction (0.0 = Reference Plane Z, 1.0 = Geometry surface normal or curve tangent direction).",
          "y": [
            76.4,
            16
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "0_Drawing_12.png",
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
    "name": "Curves",
    "type": "Curve",
    "ko": "트레이싱할 커브를 입력한다.",
    "en": "The curves to trace."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "툴패스의 기준 평면을 입력한다. Tilting Weight가 0.0일 때 TCP는 이 평면의 Z 방향을 따른다.",
    "en": "The reference plane of the toolpath. With Tilting Weight 0.0 the TCP follows this plane's Z direction."
  },
  {
    "name": "Geometry",
    "type": "Geometry",
    "ko": "TCP를 표면 법선 방향으로 기울일 때 기준이 되는 형상을 입력한다.",
    "en": "The geometry whose surface normal the TCP tilts toward."
  }
];

export const main = "0_Drawing.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 트레이싱 경로 타겟 평면.",
    "en": "Generated tracing path target planes."
  }
];
