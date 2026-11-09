// Data for the Parallel Finishing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "parallelfinishing_tab1.png",
      "rows": [
        {
          "name": "Contour Dir",
          "type": "Toggle",
          "ko": "평행 Contour 의 방향을 바꾼다.<br> • TRUE: X 방향 (90° 회전).<br> • FALSE: <strong>Reference Plane</strong> 의 +Y 방향.<br>기본값은 FALSE.",
          "en": "Switches the direction of the parallel contours.<br> • TRUE: X direction (rotated 90°).<br> • FALSE: +Y direction of <strong>Reference Plane</strong>.<br>Default: FALSE.",
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
      "img": "parallelfinishing_tab2.png",
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
    "type": "Geometry",
    "ko": "정삭 가공할 Brep 또는 Mesh 형상.",
    "en": "Brep or Mesh geometry to finish."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "정삭 경로 생성의 기준 평면. Contour 방향과 <strong>Tilt Weight</strong> 0.0 일 때의 TCP 방향(Z)을 정한다.",
    "en": "Reference plane for generating the finishing toolpath. It sets the contour direction and the TCP direction (Z) at <strong>Tilt Weight</strong> 0.0."
  }
];

export const main = "parallelfinishing_main.png";

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
