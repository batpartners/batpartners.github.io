// Data for the GetToolData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  },
  {
    "name": "Tool Base",
    "type": "Plane",
    "ko": "툴의 장착 기준 평면. TCP와 지오메트리에 대한 기준을 정의.",
    "en": "Mounting base plane of the tool. Defines the criteria for TCP and geometry."
  }
];

export const main = "3_GetToolData.png";

export const outputs = [
  {
    "name": "TCP",
    "type": "Plane",
    "ko": "스캔된 <a href=\"/datatype/tooldata/\">ToolData</a>를 위한 TCP 평면으로, 툴 베이스를 기준으로 위치와 방향을 정의.",
    "en": "TCP plane for the scanned <a href=\"/en/datatype/tooldata/\">ToolData</a>, defining position and orientation relative to the tool base."
  },
  {
    "name": "Tool Load",
    "type": "Tool Load",
    "ko": "스캔된 <a href=\"/datatype/tooldata/\">ToolData</a>의 LoadData.",
    "en": "LoadData of the scanned <a href=\"/en/datatype/tooldata/\">ToolData</a>"
  }
];
