// Data for the Curve Tracing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Resolution",
      "img": "curvetracing_tab1.png",
      "rows": [
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "커브를 경로로 근사할 때의 허용 오차. 기본값은 0.2, 범위는 0.1–0.5.",
          "en": "Tolerance for approximating the curves as a toolpath. Default: 0.2, range 0.1–0.5.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Min Edge",
          "type": "Number",
          "ko": "경로 세그먼트의 최소 길이 (mm). 기본값은 0.",
          "en": "Minimum length of a toolpath segment (mm). Default: 0.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Max Edge",
          "type": "Number",
          "ko": "경로 세그먼트의 최대 길이 (mm). 기본값은 100.",
          "en": "Maximum length of a toolpath segment (mm). Default: 100.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    },
    {
      "label": "Tilting",
      "img": "curvetracing_tab2.png",
      "rows": [
        {
          "name": "Tilt Target",
          "type": "Toggle",
          "ko": "<strong>Tilt Weight</strong> 가 TCP 를 기울이는 방향을 정한다.<br> • TRUE: 형상 표면 법선 방향.<br> • FALSE: 커브 접선 방향.<br>기본값은 FALSE.",
          "en": "Sets the direction <strong>Tilt Weight</strong> tilts the TCP toward.<br> • TRUE: The geometry surface normal.<br> • FALSE: The curve tangent.<br>Default: FALSE.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Tilt Weight",
          "type": "Number",
          "ko": "TCP 를 <strong>Tilt Target</strong> 이 정한 방향으로 기울이는 정도. 0.0 은 <strong>Reference Plane</strong> 의 Z 방향, 1.0 은 <strong>Tilt Target</strong> 이 정한 방향이다. 기본값은 0.",
          "en": "How far the TCP tilts toward the direction set by <strong>Tilt Target</strong>. 0.0 = Z direction of <strong>Reference Plane</strong>, 1.0 = the direction set by <strong>Tilt Target</strong>. Default: 0.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "curvetracing_tab3.png",
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
    "name": "Curves",
    "type": "Curve",
    "ko": "따라갈(트레이싱할) 커브.",
    "en": "Curves to trace."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "툴패스 타겟 평면의 방향을 정하는 기준 평면. <strong>Tilt Weight</strong> 가 0.0 이면 TCP 는 이 평면의 Z 방향을 따른다. 기본값은 WorldXY.",
    "en": "Reference plane that orients the toolpath target planes. With <strong>Tilt Weight</strong> 0.0 the TCP follows its Z direction. Default: WorldXY."
  }
];

export const main = "curvetracing_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 트레이싱 경로의 타겟 평면.",
    "en": "Target planes of the generated tracing toolpath."
  }
];
