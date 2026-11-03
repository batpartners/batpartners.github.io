// Data for the RAPID Deconstructor page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "ProgramData",
    "type": "Data",
    "ko": "풀어 볼 ABB 데이터 타입 객체(RobTarget, ToolData 등).",
    "en": "The ABB data type object to break down (RobTarget, ToolData, …)."
  },
  {
    "name": "Instructions",
    "type": "Instructions",
    "ko": "풀어 볼 ABB 인스트럭션 객체.",
    "en": "The ABB instruction object to break down."
  }
];

export const main = "10_RapidDecontructor.png";

export const outputs = [
  {
    "name": "ProgramData",
    "type": "String",
    "ko": "데이터 객체의 RAPID 코드(문자열).",
    "en": "RAPID code of the data object (string)."
  },
  {
    "name": "Instructions",
    "type": "String",
    "ko": "인스트럭션의 RAPID 코드(문자열).",
    "en": "RAPID code of the instruction (string)."
  }
];
