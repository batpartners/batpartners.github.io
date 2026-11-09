// Data for the Sub Procedure page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SubProcedure",
      "img": "subproc-composition_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 프로시저(PROC)의 이름. 메인 루틴에서 이 이름으로 프로시저를 호출한다.",
          "en": "Name of the procedure (PROC) to create. The main routine calls the procedure by this name.",
          "y": [
            52.6,
            31.6
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
    "ko": "프로시저에 담을 ABB 인스트럭션 리스트를 입력한다. 액션(Action) 또는 조인트 이동(Joint Move) 인스트럭션만 사용할 수 있으며, 리스트 순서대로 실행된다.",
    "en": "The ABB instruction list the procedure contains, run in list order. Only Action or Joint Move instructions can be used."
  }
];

export const main = "subproc-composition_main.png";

export const outputs = [
  {
    "name": "SubProc",
    "type": "SubProc",
    "ko": "생성된 서브 프로시저를 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated sub-procedure. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
