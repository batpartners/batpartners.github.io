// Data for the Scan ABB Controller page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Controller",
      "img": "scanabbcontroller_tab1.png",
      "rows": [
        {
          "name": "Contorller Type",
          "type": "Dropdown",
          "ko": "검색할 ABB 컨트롤러 유형을 고른다. <strong>Real</strong> 은 실제 컨트롤러, <strong>Virtual</strong> 은 가상 컨트롤러(RobotStudio)를 검색한다.",
          "en": "Selects the type of ABB controller to search for: <strong>Real</strong> for physical controllers, <strong>Virtual</strong> for virtual controllers (RobotStudio).",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Scan",
          "type": "Button",
          "ko": "네트워크에서 ABB 컨트롤러를 다시 검색한다.",
          "en": "Searches the network for ABB controllers again.",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    },
    {
      "label": "Connect",
      "img": "scanabbcontroller_tab2.png",
      "rows": [
        {
          "name": "Controller",
          "type": "Dropdown",
          "ko": "검색된 컨트롤러 목록에서 연결할 컨트롤러를 고른다.",
          "en": "Selects the controller to connect to from the list of controllers found.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Connect",
          "type": "Toggle",
          "ko": "선택한 컨트롤러에 연결하거나 연결을 끊는다. 기본값은 꺼짐(False).",
          "en": "Connects to or disconnects from the selected controller. Default: off (False).",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Info",
      "img": "scanabbcontroller_tab3.png",
      "rows": [
        {
          "name": "Controller Info",
          "type": "Panel",
          "ko": "연결된 컨트롤러의 정보를 보여 준다.",
          "en": "Shows information about the connected controller.",
          "y": [
            41.4,
            46.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "scanabbcontroller_main.png";

export const outputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러이다. Controller Utils 컴포넌트와 <a href=\"/core/code-solver/\">Code Solver</a> 의 <strong>ABB Controller</strong> 입력에 연결한다.",
    "en": "The ABB controller connected to this PC. Connect it to the <strong>ABB Controller</strong> input of the Controller Utils components and <a href=\"/en/core/code-solver/\">Code Solver</a>."
  }
];
