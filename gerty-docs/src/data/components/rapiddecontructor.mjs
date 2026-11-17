// Data for the RAPID Deconstructor page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ProgramData",
    "type": "Data",
    "optional": true,
    "ko": "RAPID 코드로 풀어 볼 ABB 프로그램 데이터(RobTarget, ToolData 등 ABB 데이터 타입 객체)이다. <strong>Instructions</strong> 만 풀어 볼 때는 연결하지 않아도 된다.",
    "en": "ABB program data to break down into RAPID code (ABB data type objects such as RobTarget or ToolData). Leave it unconnected when only <strong>Instructions</strong> are deconstructed."
  },
  {
    "name": "Instructions",
    "type": "Instructions",
    "optional": true,
    "ko": "RAPID 코드로 풀어 볼 ABB 인스트럭션 객체이다. <strong>ProgramData</strong> 만 풀어 볼 때는 연결하지 않아도 된다.",
    "en": "ABB instruction objects to break down into RAPID code. Leave it unconnected when only <strong>ProgramData</strong> is deconstructed."
  }
];

export const main = "rapiddecontructor_main.png";

export const outputs = [
  {
    "name": "Data Str.",
    "type": "String",
    "ko": "<strong>ProgramData</strong> 의 RAPID 코드 문자열(프로그램 데이터 소스)이다.",
    "en": "RAPID code string of the <strong>ProgramData</strong> (program data source)."
  },
  {
    "name": "Instruction Str.",
    "type": "String",
    "ko": "<strong>Instructions</strong> 의 RAPID 코드 문자열(인스트럭션 소스)이다.",
    "en": "RAPID code string of the <strong>Instructions</strong> (instruction source)."
  }
];
