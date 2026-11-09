// Data for the Solid Fill page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Pattern",
      "img": "10_SolidFill_10.png",
      "rows": [
        {
          "name": "Int-Infill Type",
          "type": "Dropdown",
          "ko": "내부 채움 영역에 적용할 패턴.",
          "en": "Pattern applied to the internal fill area.",
          "y": [
            27,
            17.8
          ]
        },
        {
          "name": "Ext-Infill Type",
          "type": "Dropdown",
          "ko": "외부 채움 영역에 적용할 패턴.",
          "en": "Pattern applied to the external fill area.",
          "y": [
            48.9,
            17.8
          ]
        },
        {
          "name": "Rotation(°)",
          "type": "Number",
          "ko": "채움 패턴에 적용할 회전 각도.",
          "en": "Rotation angle applied to the fill pattern.",
          "y": [
            71.3,
            17.2
          ]
        }
      ]
    },
    {
      "label": "Infill",
      "img": "10_SolidFill_11.png",
      "rows": [
        {
          "name": "Top Layers",
          "type": "Integer",
          "ko": "파트 상단에 생성할 솔리드 레이어 수.",
          "en": "Number of solid layers to generate at the top of the part.",
          "y": [
            22.6,
            15.1
          ]
        },
        {
          "name": "Bottom Layers",
          "type": "Integer",
          "ko": "파트 하단에 생성할 솔리드 레이어 수.",
          "en": "Number of solid layers to generate at the bottom of the part.",
          "y": [
            40.6,
            15.6
          ]
        },
        {
          "name": "Layer Gap(mm)",
          "type": "Number",
          "ko": "외곽과 채움, 내부 채움과 외부 채움 패턴 사이의 간격 (mm).",
          "en": "Gap between the shell and fill, and between internal and external fill patterns (mm).",
          "y": [
            58.5,
            16
          ]
        },
        {
          "name": "Int-Infill Amount",
          "type": "Number",
          "ko": "내부 채움 밀도 (0~1, 0%~100%).",
          "en": "Internal fill density (0 to 1, 0% to 100%).",
          "y": [
            75.9,
            15.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTYShellData",
    "type": "Shell Profile",
    "ko": "외곽 적층 경로의 기준 프로파일 정보.",
    "en": "Reference profile data for outer deposition paths."
  }
];

export const main = "10_SolidFill.png";

export const outputs = [
  {
    "name": "Deposition ToolPaths",
    "type": "Infill ToolPaths Tree",
    "ko": "생성된 적층 경로 데이터.",
    "en": "Generated deposition path data."
  },
  {
    "name": "Infill Polylines",
    "type": "Curve",
    "ko": "생성된 채움 적층 경로를 연결하는 폴리라인 패턴.",
    "en": "Polyline pattern connecting the generated fill deposition paths."
  }
];
