// Data for the GetWobjData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  }
];

export const main = "4_GetWobjData.png";

export const outputs = [
  {
    "name": "UserFrame",
    "type": "Plane",
    "ko": "스캔된 워크오브젝트의 유저 프레임(uFrame) 평면.",
    "en": "User frame (uFrame) plane of the scanned work object."
  },
  {
    "name": "ObjFrame",
    "type": "Plane",
    "ko": "<a href=\"/datatype/wobjdata/\">Wobjdata</a>의 오브젝트 프레임(oFrame)으로 정의된 평면.",
    "en": "Plane defined as the object frame (oFrame) of <a href=\"/en/datatype/wobjdata/\">Wobjdata</a>"
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "스캔된 <a href=\"/datatype/wobjdata/\">Wobjdata</a>",
    "en": "Scanned <a href=\"/en/datatype/wobjdata/\">Wobjdata</a>"
  }
];
