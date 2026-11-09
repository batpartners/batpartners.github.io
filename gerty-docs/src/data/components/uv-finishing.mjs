// Data for the UV Finishing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "uv-finishing_tab1.png",
      "rows": [
        {
          "name": "UV Flip",
          "type": "Toggle",
          "ko": "정삭 경로가 진행하는 UV 방향을 바꾼다.<br> • TRUE: V 방향.<br> • FALSE: U 방향.<br>기본값은 FALSE.",
          "en": "Switches the UV direction the finishing path runs along.<br> • TRUE: V direction.<br> • FALSE: U direction.<br>Default: FALSE.",
          "y": [
            23.7,
            14.5
          ]
        },
        {
          "name": "Stepover",
          "type": "Number",
          "ko": "인접한 절삭 경로 사이의 간격 (mm). 기본값은 10, 범위는 1–10.",
          "en": "Distance between adjacent cutting passes (mm). Default: 10, range 1–10.",
          "y": [
            42,
            14.5
          ]
        },
        {
          "name": "Tilt Weight",
          "type": "Number",
          "ko": "Geometry 표면 법선 방향으로 TCP 를 기울여, 엔드밀이 표면과 직각을 이루는 정도를 조절한다. 0.0 은 <strong>Reference Plane</strong> 의 Z 방향, 1.0 은 표면 법선 방향이다. 기본값은 0.",
          "en": "Tilts the TCP toward the geometry surface normal, controlling how perpendicular the endmill is to the surface. 0.0 = Z direction of <strong>Reference Plane</strong>, 1.0 = surface normal. Default: 0.",
          "y": [
            60.4,
            14.5
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로를 근사할 때의 허용 오차. 기본값은 0.3, 범위는 0.1–0.5.",
          "en": "Tolerance for approximating the toolpath. Default: 0.3, range 0.1–0.5.",
          "y": [
            78.7,
            14.5
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "uv-finishing_tab2.png",
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
    "name": "Geometry",
    "type": "Brep",
    "ko": "정삭 가공할 Brep 또는 Surface 형상. 이 서피스의 UV 아이소파라메트릭 커브를 따라 경로를 만든다.",
    "en": "Brep or Surface geometry to finish. The toolpath follows its UV isoparametric curves."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "정삭 경로 생성의 기준 평면. <strong>Tilt Weight</strong> 가 0.0 이면 TCP 는 이 평면의 Z 방향을 따른다.",
    "en": "Reference plane for generating the finishing toolpath. With <strong>Tilt Weight</strong> 0.0 the TCP follows its Z direction."
  }
];

export const main = "uv-finishing_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 정삭 경로의 타겟 평면.",
    "en": "Target planes of the generated finishing toolpath."
  },
  {
    "name": "Contour",
    "type": "Curve",
    "ko": "생성된 정삭 경로를 잇는 폴리라인 패턴.",
    "en": "Polyline pattern that connects the generated finishing passes."
  }
];
