// Data for the ToolData (Define) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Tool Data",
      "img": "3_ToolData_10.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 ToolData 의 RAPID 변수명. 기본값은 myTool0.",
          "en": "RAPID variable name of the ToolData. Default: myTool0.",
          "y": [
            36.6,
            22.9
          ]
        },
        {
          "name": "Colour",
          "type": "Color",
          "ko": "툴의 시각화 색상을 설정한다.",
          "en": "Visualization color.",
          "y": [
            68.7,
            19.8
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "LoadData",
      "img": "3_ToolData_11.png",
      "rows": [
        {
          "name": "Reset",
          "type": "Button",
          "ko": "입력된 부하 데이터를 초기화한다.",
          "en": "Resets values.",
          "y": [
            24.1,
            13.9
          ]
        },
        {
          "name": "Mass(kg)",
          "type": "String",
          "ko": "툴의 무게(kg)를 입력한다.",
          "en": "Weight (kg).",
          "y": [
            41.7,
            15.7
          ]
        },
        {
          "name": "Centroid",
          "type": "String",
          "ko": "툴의 무게 중심 좌표(x, y, z)를 입력한다.",
          "en": "Coordinates of the center of gravity (x, y, z).",
          "y": [
            59.3,
            13.9
          ]
        },
        {
          "name": "Inertia",
          "type": "String",
          "ko": "툴의 관성 모멘트(Ix, Iy, Iz)를 입력한다.",
          "en": "Moments of inertia (Ix, Iy, Iz).",
          "y": [
            78.2,
            12.5
          ]
        }
      ]
    },
    {
      "label": "Export",
      "img": "3_ToolData_13.png",
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
    "name": "ToolGeo",
    "type": "Mesh",
    "ko": "툴(엔드 이펙터)의 형상 메시(Mesh)를 입력한다.",
    "en": "Shape geometry mesh of the tool (end-effector)."
  },
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
    "en": "Position and orientation of the TCP (Tool Center Point) at the end of the tool, defined relative to the tool base (ToolBase)."
  },
  {
    "name": "ToolLoad",
    "type": "ToolLoad",
    "ko": "툴의 부하 데이터(LoadData: 질량, 무게 중심, 관성 모멘트)를 입력한다. 입력하지 않으면 툴 형상(ToolGeo)의 경계 상자(Bounding box)를 기준으로 부하 데이터를 추정하여 적용한다.",
    "en": "Tool load data (LoadData: mass, centre of gravity and moments of inertia). If omitted, the load data is estimated from the bounding box of the tool geometry (ToolGeo) and applied.",
    "optional": true
  }
];

export const main = "3_ToolData.png";

export const outputs = [
  {
    "name": "Tool Data",
    "type": "ToolData",
    "ko": "정의된 ABB ToolData를 출력한다.",
    "en": "Outputs the configured ABB ToolData stream."
  }
];
