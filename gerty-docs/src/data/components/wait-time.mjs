// Data for the Wait Time page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "In Position",
      "img": "wait-time_tab1.png",
      "rows": [
        {
          "name": "In Position",
          "type": "Toggle",
          "ko": "<code>InPos</code> 옵션. 대기 시간을 세기 시작하는 시점을 정한다.<br> • <code>TRUE</code>: 로봇이 완전히 정지(Standstill)한 뒤 대기 시간을 센다.<br> • <code>FALSE</code>: 프로그램 포인터(PP)가 인스트럭션에 닿는 즉시 센다.<br>기본값은 <code>TRUE</code>.",
          "en": "The <code>InPos</code> option; sets when the wait starts counting.<br> • <code>TRUE</code>: the wait starts after the robot comes to a complete standstill.<br> • <code>FALSE</code>: the wait starts as soon as the program pointer (PP) reaches the instruction.<br>Default: <code>TRUE</code>.",
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
    "name": "Time(s)",
    "type": "Number",
    "ko": "프로그램 실행이 대기할 시간(초).",
    "en": "How long program execution waits (s)."
  }
];

export const main = "wait-time_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>WaitTime</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>WaitTime</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
