// Data for the Scan IO Systems page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Gate IO Systems",
      "img": "6_ScanIOSystems_10.png",
      "rows": [
        {
          "name": "Gate",
          "type": "Toggle",
          "ko": "I/O 시스템 검색 게이트를 열거나 닫는다.",
          "en": "Opens or closes the gate for scanning the I/O systems.",
          "y": [
            24.6,
            15.6
          ]
        },
        {
          "name": "IO Units",
          "type": "Dropdown",
          "ko": "검색할 I/O 유닛을 고른다.",
          "en": "The I/O unit to scan.",
          "y": [
            43.2,
            16.1
          ]
        },
        {
          "name": "Signal Types",
          "type": "Dropdown",
          "ko": "검색할 신호 유형을 고른다.",
          "en": "The signal type to scan.",
          "y": [
            62.3,
            18.1
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  }
];

export const main = "6_ScanIOSystems.png";

export const outputs = [
  {
    "name": "SignalsInUnit",
    "type": "String",
    "ko": "선택한 유닛과 신호 유형으로 걸러낸 신호 이름.",
    "en": "Signal names filtered by the selected unit and signal type."
  }
];
