// Data for the Parallel Finishing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Cutting",
      "img": "parallelfinishing_tab1.png",
      "rows": [
        {
          "name": "Pattern",
          "type": "Dropdown",
          "ko": "정삭 패턴을 고른다.<br> • Parallel: 일정 간격의 평행한 절단 평면으로 자른 형상의 단면을 따라 경로를 만든다 (Brep · Mesh). 이전 ParallelFinishing 컴포넌트의 방식이다.<br> • UV: 면마다 UV 아이소커브를 따라 경로를 만든다 (Brep · Surface). 이전 UVFinishing 컴포넌트의 방식이다.<br>기본값은 Parallel.",
          "en": "Selects the finishing pattern.<br> • Parallel: Builds the passes along sections of the geometry cut by evenly spaced parallel planes (Brep · Mesh). This is the former ParallelFinishing component.<br> • UV: Builds the passes along the UV isocurves of each face (Brep · Surface). This is the former UVFinishing component.<br>Default: Parallel.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Stepover",
          "type": "Number",
          "ko": "인접한 절삭 경로 사이의 간격 (mm). 기본값은 10, 범위는 1–10.",
          "en": "Distance between adjacent cutting passes (mm). Default: 10, range 1–10.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로를 근사할 때의 허용 오차. 기본값은 0.3, 범위는 0.1–0.5.",
          "en": "Tolerance for approximating the toolpath. Default: 0.3, range 0.1–0.5.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Path",
      "img": "parallelfinishing_tab2.png",
      "rows": [
        {
          "name": "Dir Flip",
          "type": "Toggle",
          "ko": "경로의 기본 진행 방향을 바꾼다.<br> • Parallel 패턴 — TRUE: X 방향 (90° 회전). FALSE: <strong>Reference Plane</strong> 의 +Y 방향.<br> • UV 패턴 — TRUE: V 방향. FALSE: U 방향.<br>기본값은 FALSE.",
          "en": "Switches the primary direction of the passes.<br> • Parallel pattern — TRUE: X direction (rotated 90°). FALSE: +Y direction of <strong>Reference Plane</strong>.<br> • UV pattern — TRUE: V direction. FALSE: U direction.<br>Default: FALSE.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Link",
          "type": "Dropdown",
          "ko": "인접한 경로 사이를 잇는 방식.<br> • Straight: 직전 경로의 끝점에서 다음 경로의 시작점까지 직선으로 잇는다.<br> • Follow Boundary: 형상의 가장자리를 따라 잇는다. 이어지지 않는 경로는 별도의 Branch 로 나뉜다.<br>기본값은 Follow Boundary.",
          "en": "How adjacent passes are linked.<br> • Straight: A straight segment from the end of the previous pass to the start of the next.<br> • Follow Boundary: Links along the edge of the geometry. Passes that cannot be linked go to separate branches.<br>Default: Follow Boundary.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Tilt Weight",
          "type": "Number",
          "ko": "<strong>Model</strong> 표면 법선 방향으로 TCP 를 기울여, 엔드밀이 표면과 직각을 이루는 정도를 조절한다. 0.0 은 <strong>Reference Plane</strong> 의 Z 방향, 1.0 은 표면 법선 방향이다. 기본값은 0, 범위는 0–1.",
          "en": "Tilts the TCP toward the <strong>Model</strong> surface normal, controlling how perpendicular the endmill is to the surface. 0.0 = Z direction of <strong>Reference Plane</strong>, 1.0 = surface normal. Default: 0, range 0–1.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "parallelfinishing_tab3.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기. 기본값은 1.5, 범위는 1.5–5.",
          "en": "Size of the target plane frames shown in the preview. Default: 1.5, range 1.5–5.",
          "y": [
            54.6,
            30.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Model",
    "type": "Geometry",
    "ko": "정삭 가공할 형상 (Brep 또는 Mesh). <strong>Pattern</strong> 이 UV 이면 Brep(Surface)만 쓰고 Mesh 는 건너뛴다.",
    "en": "Brep or Mesh geometry to finish. With the UV <strong>Pattern</strong>, only Breps (surfaces) are used and Meshes are skipped."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "정삭 경로 생성의 기준 평면. Parallel 패턴의 경로 방향(<strong>Dir Flip</strong>)과 <strong>Tilt Weight</strong> 0.0 일 때의 TCP 방향(Z)을 정한다.",
    "en": "Reference plane for generating the finishing toolpath. It sets the pass direction of the Parallel pattern (<strong>Dir Flip</strong>) and the TCP direction (Z) at <strong>Tilt Weight</strong> 0.0."
  }
];

export const main = "parallelfinishing_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 정삭 경로의 타겟 평면. Branch 는 Parallel 패턴에서 {객체; 그룹; 경로}, UV 패턴에서 {객체; 면; 그룹; 경로} 로 나뉜다. <strong>Link</strong> 가 Follow Boundary 이면 Parallel 은 {객체; 체인}, UV 는 {객체; 면; 체인} 으로 나뉜다.",
    "en": "Target planes of the generated finishing toolpath. Branches are {object; group; path} for the Parallel pattern and {object; face; group; path} for the UV pattern. With <strong>Link</strong> set to Follow Boundary, they are {object; chain} (Parallel) and {object; face; chain} (UV)."
  },
  {
    "name": "Contour",
    "type": "Curve",
    "ko": "생성된 정삭 경로를 잇는 폴리라인 패턴. Branch 구조는 <strong>Target Planes</strong> 와 같으며, Branch 마다 경로 사이 연결을 포함한 폴리라인 하나가 출력된다.",
    "en": "Polyline pattern that connects the generated finishing passes. Branches match <strong>Target Planes</strong>, with one polyline per branch that includes the links between passes."
  }
];
