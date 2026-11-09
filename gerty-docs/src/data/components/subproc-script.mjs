// Data for the Sub Procedure (Script) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [];

export const inputs = [
  {
    "name": "Proc Code",
    "type": "String",
    "ko": "PROC 머리줄부터 ENDPROC 까지 포함한 RAPID 프로시저 전체 코드.<br>예:<br><code>PROC CustomProc(num n, robtarget t)<br>&nbsp;&nbsp;MoveJ t, v100, fine, tool0;<br>ENDPROC</code>",
    "en": "The full RAPID procedure code, from the PROC header to ENDPROC.<br>Example:<br><code>PROC CustomProc(num n, robtarget t)<br>&nbsp;&nbsp;MoveJ t, v100, fine, tool0;<br>ENDPROC</code>"
  },
  {
    "name": "Call",
    "type": "String",
    "ko": "호출 인스트럭션 문자열. 호출하는 곳마다 하나씩 넣는다.<br>예:<br><code>CustomProc 5, target1;</code><br>여러 개를 넣으면 같은 프로시저 선언을 공유하는 호출 인스트럭션이 여러 개 만들어진다.",
    "en": "Call instruction string, one per call site.<br>Example:<br><code>CustomProc 5, target1;</code><br>Several strings make several call instructions that share the same procedure declaration."
  }
];

export const main = "8_SubProcedure_1.png";

export const outputs = [
  {
    "name": "Sub Proc.",
    "type": "SubProc",
    "ko": "생성된 서브 프로시저를 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated sub-procedure. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
