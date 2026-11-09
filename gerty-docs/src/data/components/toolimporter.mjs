// Data for the Tool Importer (Import) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Tool Data",
      "img": "toolimporter_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 ToolData 의 RAPID 변수명을 정의한다. 기본값은 myTool0.",
          "en": "Defines the RAPID variable name of the ToolData. Default: myTool0.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Presets",
          "type": "Dropdown",
          "ko": "이전에 저장한 <code>ToolData</code> 프리셋 목록에서 불러올 툴을 선택한다. 목록은 Define ToolData 모드의 <strong>Export</strong> 로 저장한 파일로 채워진다.",
          "en": "Selects the tool to load from the list of previously saved <code>ToolData</code> presets. The list is filled with files saved by <strong>Export</strong> in Define ToolData mode.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "LoadData",
      "img": "toolimporter_tab2.png",
      "rows": [
        {
          "name": "Mass(kg)",
          "type": "String",
          "ko": "툴의 무게 (kg) 를 입력한다.",
          "en": "Mass of the tool (kg).",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Centroid",
          "type": "String",
          "ko": "툴의 무게 중심 좌표를 \"x,y,z\" 형식으로 입력한다.",
          "en": "Centre of gravity of the tool, entered as \"x,y,z\".",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Inertia",
          "type": "String",
          "ko": "툴의 관성 모멘트를 \"Ix,Iy,Iz\" 형식으로 입력한다.",
          "en": "Moments of inertia of the tool, entered as \"Ix,Iy,Iz\".",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "toolimporter_tab3.png",
      "rows": [
        {
          "name": "Color",
          "type": "Color",
          "ko": "뷰포트에 표시되는 툴의 미리보기 색상을 설정한다.",
          "en": "Sets the preview colour of the tool in the viewport.",
          "y": [
            54.6,
            30.9
          ]
        }
      ]
    },
    {
      "label": "Export",
      "img": "toolimporter_tab4.png",
      "rows": [
        {
          "name": "Export",
          "type": "Button",
          "ko": "툴 데이터를 사용자 로컬의 지정된 경로에 파일로 저장한다. 저장한 파일은 <strong>Presets</strong> 목록에 나타난다.",
          "en": "Saves the tool data as a file to the user-specified local path. Saved files appear in the <strong>Presets</strong> list.",
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
    "name": "Base Plane",
    "type": "Plane",
    "optional": true,
    "ko": "로봇 플랜지에 대한 툴 장착 기준면을 입력한다. TCP 와 형상의 기준이 된다. 기본값은 WorldXY.",
    "en": "Tool mounting reference plane relative to the robot flange. The TCP and geometry are defined from it. Default: WorldXY."
  },
  {
    "name": "TCP",
    "type": "Plane",
    "optional": true,
    "ko": "툴 끝단의 TCP(Tool Center Point) 평면을 입력한다. <strong>Base Plane</strong> 을 기준으로 한 위치와 방향을 정의한다. 연결하지 않으면 불러온 ToolData 의 TCP 를 사용한다.",
    "en": "Plane of the TCP (Tool Center Point) at the end of the tool, defined relative to the <strong>Base Plane</strong>. If not connected, the TCP of the imported ToolData is used."
  },
  {
    "name": "Tool Load",
    "type": "LoadData",
    "optional": true,
    "ko": "툴의 부하 데이터(LoadData: 질량, 무게 중심, 관성 모멘트)를 입력한다. 연결하지 않으면 툴 형상의 경계 상자(Bounding box)로 부하 데이터를 추정해 적용한다.",
    "en": "Tool load data (LoadData: mass, centre of gravity and moments of inertia). If not connected, the load data is estimated from the bounding box of the tool geometry."
  }
];

export const main = "toolimporter_main.png";

export const outputs = [
  {
    "name": "ToolData",
    "type": "ToolData",
    "ko": "불러온 ABB ToolData 를 출력한다.",
    "en": "Outputs the imported ABB ToolData."
  }
];
