// Data for the Solid Offset Fill page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "GShell",
    "type": "Shell Profile",
    "ko": "외곽 적층 경로의 기준 프로파일 정보.",
    "en": "Reference profile information for the outer deposition path."
  },
  {
    "name": "Direction",
    "type": "Boolean",
    "ko": "채움 패턴의 진행 방향 반전. (TRUE: 진행 방향 반전. / FALSE: 기본 방향 유지 (기본값))",
    "en": "Inverts the fill pattern direction. (TRUE: Inverts the direction. / FALSE: Maintains default direction (Default))",
    "optional": true
  }
];

export const main = "11_SolidOffsetFill.png";

export const outputs = [
  {
    "name": "Infill ToolPaths",
    "type": "Infill ToolPaths",
    "ko": "생성된 적층 경로 데이터.",
    "en": "Generated deposition path data."
  },
  {
    "name": "Infill Polylines",
    "type": "Curve",
    "ko": "생성된 채움 적층 경로를 연결하는 폴리라인 패턴.",
    "en": "Polyline pattern connecting the generated fill deposition paths."
  }
];
