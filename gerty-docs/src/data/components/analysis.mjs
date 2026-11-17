// Data for the Analysis Deconstructor page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "GERTY Solver",
    "type": "GERTY Solver",
    "ko": "<a href=\"/core/gerty-core/\">GERTY Core</a> 의 GERTY Solver 출력을 연결한다.",
    "en": "Connect the GERTY Solver output of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];

export const main = "analysis_main.png";

export const outputs = [
  {
    "name": "RobAx Angles",
    "type": "String",
    "ko": "타겟별 로봇 축 각도.",
    "en": "Robot axis angles per target."
  },
  {
    "name": "Error Idx",
    "type": "String",
    "ko": "오류가 검출된 타겟의 인덱스.",
    "en": "Indices of the targets where errors were detected."
  },
  {
    "name": "Error Report",
    "type": "String",
    "ko": "행별 오류 유형. 타겟별 로봇 자세 오류와 도달 가능성 문제를 보고한다.",
    "en": "Error type per row. Reports robot-pose errors and reach issues per target."
  }
];
