// Data for the GetWobjData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러이다. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 <strong>ABB Controller</strong> 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the <strong>ABB Controller</strong> output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  }
];

export const main = "getwobjdata_main.png";

export const outputs = [
  {
    "name": "Name",
    "type": "String",
    "ko": "스캔한 워크오브젝트(WobjData)의 이름이다.",
    "en": "Name of the scanned work object (WobjData)."
  },
  {
    "name": "UserFrame",
    "type": "Plane",
    "ko": "스캔한 워크오브젝트의 유저 프레임(uFrame) 평면이다.",
    "en": "User frame (uFrame) plane of the scanned work object."
  },
  {
    "name": "ObjFrame",
    "type": "Plane",
    "ko": "스캔한 워크오브젝트의 오브젝트 프레임(oFrame) 평면이다.",
    "en": "Object frame (oFrame) plane of the scanned work object."
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "스캔한 <a href=\"/datatype/wobjdata-fixed/\">WobjData</a> 이다.",
    "en": "The scanned <a href=\"/en/datatype/wobjdata-fixed/\">WobjData</a>."
  }
];
