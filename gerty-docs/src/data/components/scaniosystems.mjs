// Data for the Scan IO Systems page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Gate IO Systems",
      "img": "scaniosystems_tab1.png",
      "rows": [
        {
          "name": "Gate",
          "type": "Toggle",
          "ko": "I/O 시스템 스캔 게이트를 열거나 닫는다. 기본값은 꺼짐(False).",
          "en": "Opens or closes the gate for scanning the I/O system. Default: off (False).",
          "y": [
            29.2,
            17.5
          ]
        },
        {
          "name": "IO Units",
          "type": "Dropdown",
          "ko": "신호를 스캔할 I/O 유닛을 고른다. 목록은 연결된 컨트롤러에서 읽어 온다.",
          "en": "Selects the I/O unit to scan. The list is read from the connected controller.",
          "y": [
            51.5,
            17.5
          ]
        },
        {
          "name": "Signal Types",
          "type": "Dropdown",
          "ko": "스캔할 신호 유형을 고른다: AnalogInput, AnalogOutput, DigitalInput, DigitalOutput, GroupInput, GroupOutput, Unknown.",
          "en": "Selects the signal type to scan: AnalogInput, AnalogOutput, DigitalInput, DigitalOutput, GroupInput, GroupOutput, Unknown.",
          "y": [
            73.7,
            17.5
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
    "ko": "PC 에 연결된 ABB 컨트롤러이다. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 <strong>ABB Controller</strong> 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the <strong>ABB Controller</strong> output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  }
];

export const main = "scaniosystems_main.png";

export const outputs = [
  {
    "name": "Signals",
    "type": "String",
    "ko": "선택한 <strong>IO Units</strong> 와 <strong>Signal Types</strong> 로 걸러 낸 신호 이름이다.",
    "en": "Signal names filtered by the selected <strong>IO Units</strong> and <strong>Signal Types</strong>."
  }
];
