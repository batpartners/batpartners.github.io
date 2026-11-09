// Data for the UV Finishing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Settings",
      "img": "8_UVFinishing_10.png",
      "rows": [
        {
          "name": "UV Direction",
          "type": "Toggle",
          "ko": "정삭 경로의 UV 진행 방향 전환.",
          "en": "Reverses the UV progression direction of the finishing path.",
          "y": [
            22.6,
            14.2
          ]
        },
        {
          "name": "Stepover(mm)",
          "type": "Number",
          "ko": "인접 절삭 경로 간 간격 (mm).",
          "en": "Distance between adjacent cutting paths (mm).",
          "y": [
            40.6,
            15.6
          ]
        },
        {
          "name": "Tilting Weight",
          "type": "Number",
          "ko": "Brep 표면 법선 방향으로 TCP를 기울여, 엔드밀이 표면과 직각을 이루는 정도 조절 (0.0 = Reference Plane Z, 1.0 = 표면 법선).",
          "en": "Adjusts the degree to which the endmill is perpendicular to the surface by tilting the TCP along the Brep surface normal direction (0.0 = Reference Plane Z, 1.0 = Surface Normal).",
          "y": [
            58.5,
            16
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로의 근사 허용 오차.",
          "en": "Approximation tolerance for the path.",
          "y": [
            78.3,
            12.3
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
    "name": "Brep",
    "type": "Geometry",
    "ko": "정삭 가공할 Brep 또는 Surface 형상.",
    "en": "Brep or Surface geometry to be finish machined."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "정삭 경로 생성의 기준 평면.",
    "en": "Reference plane for finishing path generation."
  }
];

export const main = "8_UVFinishing.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 정삭 경로의 타겟 평면.",
    "en": "Target planes of the generated finishing path."
  },
  {
    "name": "Curve",
    "type": "Curve",
    "ko": "생성된 정삭 경로를 연결하는 폴리라인 패턴.",
    "en": "Polyline pattern connecting the generated finishing paths."
  }
];
