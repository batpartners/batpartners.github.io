// Data for the Sub Procedure page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SubProcedure",
      "img": "8_SubProcedure_10.png",
      "rows": [
        {
          "name": "Procdure Name",
          "type": "String",
          "ko": "프로시저(PROC) 이름.",
          "en": "Name of the procedure (PROC).",
          "y": [
            48.5,
            32.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "프로시저에 담을 ABB 인스트럭션 리스트. 리스트 순서대로 실행된다.",
    "en": "The ABB instruction list the procedure contains, run in list order."
  }
];

export const main = "8_SubProcedure.png";

export const outputs = [
  {
    "name": "Sub Proc.",
    "type": "SubProc",
    "ko": "생성된 서브 프로시저를 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated sub-procedure. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
