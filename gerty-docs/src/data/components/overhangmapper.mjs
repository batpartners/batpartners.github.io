// Data for the Overhang Mapper page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Mesh",
    "type": "Mesh",
    "ko": "오버행을 확인할 메시 형상.",
    "en": "The mesh to check for overhangs."
  },
  {
    "name": "BasePlane",
    "type": "Plane",
    "ko": "오버행 각도를 잴 기준 평면(빌드 플레이트 방향).",
    "en": "Reference plane the overhang angle is measured from (build plate direction)."
  }
];

export const main = "7_OverhangMapper.png";

export const outputs = [
  {
    "name": "Mesh",
    "type": "Mesh",
    "ko": "오버행 각도에 따라 색을 입힌 메시.",
    "en": "The mesh coloured by overhang angle."
  },
  {
    "name": "AngleData",
    "type": "String",
    "ko": "오버행 각도(°) 값 리스트.",
    "en": "List of overhang angles (°)."
  }
];
