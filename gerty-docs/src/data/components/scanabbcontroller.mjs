// Data for the Scan ABB Controller page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Controller",
      "img": "1_ScanController_10.png",
      "rows": [
        {
          "name": "Controller Type",
          "type": "Dropdown",
          "ko": "검색할 ABB 컨트롤러 유형을 고른다.",
          "en": "The type of ABB controller to search for.",
          "y": [
            36.1,
            27.1
          ]
        },
        {
          "name": "Scan",
          "type": "Button",
          "ko": "네트워크에서 ABB 컨트롤러를 다시 검색한다.",
          "en": "Searches the network for ABB controllers again.",
          "y": [
            67.7,
            21.1
          ]
        }
      ]
    },
    {
      "label": "Connect",
      "img": "1_ScanController_20.png",
      "rows": [
        {
          "name": "Controller",
          "type": "Dropdown",
          "ko": "검색된 컨트롤러 중 연결할 컨트롤러를 고른다.",
          "en": "Pick the controller to connect to from the ones found.",
          "y": [
            36.1,
            24.1
          ]
        },
        {
          "name": "Connect",
          "type": "Toggle",
          "ko": "선택한 컨트롤러에 연결하거나 연결을 끊는다.",
          "en": "Connects to or disconnects from the selected controller.",
          "y": [
            65.4,
            23.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Info",
      "img": "1_ScanController_11.png",
      "rows": [
        {
          "name": "Controller Info",
          "type": "Panel",
          "ko": "연결된 컨트롤러의 정보.",
          "en": "Information about the connected controller.",
          "y": [
            40.2,
            24.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "1_ScanController.png";

export const outputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러. Controller 컴포넌트와 <a href=\"/core/code-solver/\">Code Solver</a> 의 <strong>ABB Controller</strong> 입력에 연결한다.",
    "en": "The ABB controller connected to this PC. Connect it to the <strong>ABB Controller</strong> input of the Controller components and <a href=\"/en/core/code-solver/\">Code Solver</a>."
  }
];
