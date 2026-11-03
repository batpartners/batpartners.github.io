// Data for the Tool Importer (Import) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Tool Data",
      "img": "3_ToolData_20.png",
      "rows": [
        {
          "name": "Tool Presets",
          "type": "Dropdown",
          "ko": "이전에 저장한 <code>ToolData</code> 프리셋 목록을 선택한다.",
          "en": "List of previously saved ToolData presets.",
          "y": [
            28.4,
            17.8
          ]
        },
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 ToolData 의 RAPID 변수명. 기본값은 myTool0.",
          "en": "RAPID variable name of the ToolData. Default: myTool0.",
          "y": [
            50.9,
            17.8
          ]
        },
        {
          "name": "Colour",
          "type": "Color",
          "ko": "툴의 시각화 색상을 설정한다.",
          "en": "Visualization color",
          "y": [
            75.7,
            15.4
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "LoadData",
      "img": "3_ToolData_21.png",
      "rows": [
        {
          "name": "Mass(kg)",
          "type": "String",
          "ko": "툴의 무게(kg)를 입력한다.",
          "en": "Weight (kg)",
          "y": [
            29.2,
            19.1
          ]
        },
        {
          "name": "Centroid",
          "type": "String",
          "ko": "툴의 무게 중심 좌표(x, y, z)를 입력한다.",
          "en": "Center of gravity coordinates (x, y, z)",
          "y": [
            50.6,
            16.9
          ]
        },
        {
          "name": "Inertia",
          "type": "String",
          "ko": "툴의 관성 모멘트(Ix, Iy, Iz)를 입력한다.",
          "en": "Moment of inertia (Ix, Iy, Iz)",
          "y": [
            73.6,
            15.2
          ]
        }
      ]
    },
    {
      "label": "Export",
      "img": "3_ToolData_23.png",
      "rows": [
        {
          "name": "Export",
          "type": "Button",
          "ko": "툴 데이터를 사용자 로컬의 지정된 경로에 파일로 저장한다. 저장한 파일은 Tool Importer 의 Tool Presets 에 나타난다.",
          "en": "Saves the tool data as a file in a local folder. Saved files appear under Tool Presets in Tool Importer.",
          "y": [
            51,
            29.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "ToolBase",
    "type": "Plane",
    "ko": "ABB 로봇 플랜지에 대한 툴 장착 기준면을 입력한다. TCP 및 형상의 기준이 된다. 기본값은 WorldXY.",
    "en": "Tool mounting plane relative to the ABB robot flange. TCP and geometry are defined from it. Default: WorldXY.",
    "optional": true
  },
  {
    "name": "TCP",
    "type": "Plane",
    "ko": "툴 끝단의 TCP(Tool Center Point) 평면을 입력한다. 툴 베이스(ToolBase)를 기준으로 한 위치와 방향을 정의한다.",
    "en": "The position of the TCP (Tool Center Point) at the end of the tool. Defines its position and orientation relative to the tool base (ToolBase)."
  },
  {
    "name": "ToolLoad",
    "type": "ToolLoad",
    "ko": "툴의 부하 데이터(LoadData: 질량, 무게 중심, 관성 모멘트)를 입력한다.",
    "en": "Tool load data (LoadData: mass, centre of gravity and moments of inertia).",
    "optional": true
  }
];

export const main = "3_ToolData_3.png";

export const outputs = [
  {
    "name": "Tool Data",
    "type": "ToolData",
    "ko": "정의된 ABB ToolData를 출력한다.",
    "en": "Outputs the configured ABB ToolData."
  }
];
