// Data for the Overhang Mapper page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Mesh",
    "type": "Mesh",
    "ko": "오버행을 확인할 Mesh 형상이다.",
    "en": "The mesh geometry to check for overhangs."
  },
  {
    "name": "BasePlane",
    "type": "Plane",
    "optional": true,
    "ko": "오버행 각도를 재는 기준 평면(빌드 플레이트 방향)이다. 기울어진 판이면 <a href=\"/utils/surface-frame/\">Surface Frame</a> 으로 만든 평면을 연결한다.",
    "en": "Reference plane the overhang angle is measured from (build plate direction). For a tilted plate, connect a plane made with <a href=\"/en/utils/surface-frame/\">Surface Frame</a>."
  }
];

export const main = "overhangmapper_main.png";

export const outputs = [
  {
    "name": "Mesh",
    "type": "Mesh",
    "ko": "오버행 각도에 따라 색상을 매핑한 Mesh 이다.",
    "en": "The mesh colour-mapped by overhang angle."
  },
  {
    "name": "AngleData",
    "type": "String",
    "ko": "오버행 각도(°) 데이터이다.",
    "en": "Overhang angle data (°)."
  }
];
