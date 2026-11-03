// Data for the GetMechUnits page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Mechanical Unit",
      "img": "0_GetMechUnits_10.png",
      "rows": [
        {
          "name": "Update",
          "type": "Button",
          "ko": "연결된 컨트롤러를 스캔하여 메커니컬 유닛 목록을 갱신.",
          "en": "Scans the connected controller to update the list of mechanical units.",
          "y": [
            35.8,
            21.6
          ]
        },
        {
          "name": "Mechanical Unit",
          "type": "Dropdown",
          "ko": "축 평면을 가져올 외부 메커니컬 유닛을 선택.",
          "en": "Selects the external mechanical unit to retrieve axis planes from.",
          "y": [
            63.4,
            22.4
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

export const main = "0_GetMechUnits.png";

export const outputs = [
  {
    "name": "Joint Planes",
    "type": "Plane",
    "ko": "선택한 유닛의 캘리브레이션된 축 좌표계(평면).",
    "en": "Calibrated axis coordinate system (planes) of the selected unit."
  },
  {
    "name": "Axis Name",
    "type": "String",
    "ko": "Joint Planes와 동일한 트리 구조의 축 이름.",
    "en": "Axis names matching the same tree structure as Joint Planes."
  },
  {
    "name": "Info",
    "type": "String",
    "ko": "선택한 유닛의 축 구성 및 유효성 요약.",
    "en": "Summary of the axis configuration and validity of the selected unit."
  },
  {
    "name": "Warnings",
    "type": "String",
    "ko": "미캘리브·잠금 축, 스캔 실패 등 경고 메시지.",
    "en": "Warning messages such as uncalibrated/locked axes or scan failures."
  }
];
