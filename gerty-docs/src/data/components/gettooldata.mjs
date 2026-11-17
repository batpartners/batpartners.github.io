// Data for the GetToolData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러이다. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 <strong>ABB Controller</strong> 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the <strong>ABB Controller</strong> output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  },
  {
    "name": "Base Plane",
    "type": "Plane",
    "ko": "툴의 장착 기준 평면이다. TCP 와 툴 지오메트리의 기준을 정한다.",
    "en": "Mounting base plane of the tool. Defines the reference for the TCP and the tool geometry."
  }
];

export const main = "gettooldata_main.png";

export const outputs = [
  {
    "name": "Name",
    "type": "String",
    "ko": "스캔한 <a href=\"/datatype/tooldata/\">ToolData</a> 의 이름이다.",
    "en": "Name of the scanned <a href=\"/en/datatype/tooldata/\">ToolData</a>."
  },
  {
    "name": "TCP",
    "type": "Plane",
    "ko": "스캔한 ToolData 의 TCP(Tool Center Point) 평면이다. <strong>Base Plane</strong> 을 기준으로 위치와 방향을 정한다.",
    "en": "TCP (Tool Center Point) plane of the scanned ToolData, defining position and orientation relative to <strong>Base Plane</strong>."
  },
  {
    "name": "Tool Load",
    "type": "Tool Load",
    "ko": "스캔한 ToolData 의 LoadData 이다.",
    "en": "LoadData of the scanned ToolData."
  }
];
