// Data for the CreateWorkBench (Extra Option) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WorkBench",
      "img": "createworkbench-option_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "워크벤치의 식별 이름을 입력한다. 특수문자로 시작하거나 한글로 입력할 수 없다. 기본값은 myWorkbench0.",
          "en": "Sets the workbench name. It cannot start with a special character or contain Korean. Default: myWorkbench0.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Presets",
          "type": "Dropdown",
          "ko": "Export 로 저장해 둔 워크벤치 프리셋 목록에서 불러올 워크벤치를 고른다.",
          "en": "Selects the workbench to load from the list of presets saved with Export.",
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
      "label": "Preview",
      "img": "createworkbench-option_tab2.png",
      "rows": [
        {
          "name": "Workbench Color",
          "type": "Color",
          "ko": "뷰포트에서 워크벤치 메시의 시각화 색상을 지정한다.",
          "en": "Sets the display color of the workbench mesh in the viewport.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Workpiece Color",
          "type": "Color",
          "ko": "뷰포트에서 작업물(Workpiece) 메시의 시각화 색상을 지정한다.",
          "en": "Sets the display color of the workpiece mesh in the viewport.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Export",
      "img": "createworkbench-option_tab3.png",
      "rows": [
        {
          "name": "Export",
          "type": "Button",
          "ko": "현재 워크벤치 설정을 파일로 내보낸다. 저장한 워크벤치는 Import Workbench 모드의 Presets 목록에서 불러올 수 있다.",
          "en": "Exports the current workbench configuration to a file. Saved workbenches can be loaded from the Presets list in Import Workbench mode.",
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
    "ko": "포지셔너 플랜지 면에 장착되는 워크벤치의 하단 기준 평면.",
    "en": "Bottom reference plane of the workbench, mounted on the positioner flange."
  },
  {
    "name": "Top Plane",
    "type": "Plane",
    "optional": true,
    "ko": "워크벤치 상단의 작업물 부착 기준 평면. 연결하지 않으면 불러온 워크벤치에 저장된 Top Plane 을 사용한다.",
    "en": "Top plane of the workbench, where the workpieces are attached. When not connected, the Top Plane stored in the imported workbench is used."
  },
  {
    "name": "Workpieces",
    "type": "Mesh",
    "optional": true,
    "ko": "워크벤치 위에 고정할 작업물(Workpiece)의 형상 메시. 연결하지 않으면 작업물 없이 워크벤치만 정의한다.",
    "en": "Mesh geometry of the workpieces fixed on the workbench. When not connected, only the workbench is defined."
  }
];

export const main = "createworkbench-option_main.png";

export const outputs = [
  {
    "name": "Workbench",
    "type": "Workbench",
    "ko": "워크벤치와 작업물을 묶은 워크벤치 정의. <a href=\"/robot-tool/positioner/\">ABB Positioner</a> 의 Workbench 입력에 연결한다.",
    "en": "Workbench definition that bundles the workbench and its workpieces. Connect it to the Workbench input of <a href=\"/en/robot-tool/positioner/\">ABB Positioner</a>."
  }
];
