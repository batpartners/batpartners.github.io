// Data for the Analysis Deconstructor page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "GERTY Solver",
    "type": "GERTY Solver",
    "ko": "<a href=\"/core/display-solver/\">GERTY Solver</a> 연결",
    "en": "Connect to <a href=\"/en/core/display-solver/\">GERTY Solver</a>"
  }
];

export const main = "3_AnalysisDeconstructor.png";

export const outputs = [
  {
    "name": "RobAx Angles",
    "type": "String",
    "ko": "로봇 축 각도",
    "en": "Robot axis angles"
  },
  {
    "name": "Error Idx",
    "type": "String",
    "ko": "오류 인덱스",
    "en": "Error index"
  },
  {
    "name": "Error Report",
    "type": "String",
    "ko": "행별 오류 유형 분석",
    "en": "Error type analysis by row"
  }
];
