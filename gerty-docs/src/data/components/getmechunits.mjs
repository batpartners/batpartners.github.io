// Data for the GetMechUnits page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Mechanical Unit",
      "img": "getmechunits_tab1.png",
      "rows": [
        {
          "name": "Update",
          "type": "Button",
          "ko": "연결된 컨트롤러를 스캔해 메커니컬 유닛 목록을 갱신한다.",
          "en": "Scans the connected controller and refreshes the list of mechanical units.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "MechUnit",
          "type": "Dropdown",
          "ko": "축 평면을 가져올 외부 메커니컬 유닛을 고른다. 목록은 <strong>Update</strong> 로 갱신한다.",
          "en": "Selects the external mechanical unit whose axis planes are imported. The list is refreshed with <strong>Update</strong>.",
          "y": [
            66.4,
            22.9
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

export const main = "getmechunits_main.png";

export const outputs = [
  {
    "name": "Joint Planes",
    "type": "Plane",
    "ko": "선택한 유닛의 캘리브레이션된 축 좌표계를 평면으로 내보낸다.",
    "en": "Calibrated axis frames of the selected unit, as planes."
  },
  {
    "name": "Axis Names",
    "type": "String",
    "ko": "<strong>Joint Planes</strong> 와 같은 트리 구조로 된 축 이름이다.",
    "en": "Axis names in the same tree structure as <strong>Joint Planes</strong>."
  },
  {
    "name": "Info",
    "type": "String",
    "ko": "선택한 유닛의 축 구성과 유효성 요약이다.",
    "en": "Summary of the selected unit's axis composition and validity."
  },
  {
    "name": "Warnings",
    "type": "String",
    "ko": "미캘리브레이션·잠금 축, 스캔 실패 등의 경고 메시지이다.",
    "en": "Warning messages such as uncalibrated or locked axes and scan failures."
  }
];
