// Data for the Wait Time page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "In Position",
      "img": "10_WaitTIme_1.png",
      "rows": [
        {
          "name": "In Position",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 로봇이 완전히 정지(Standstill)한 뒤 대기 시간을 센다.<br> • <code>FALSE</code>: 프로그램 포인터(PP)가 인스트럭션에 닿는 즉시 센다.",
          "en": "• <code>TRUE</code>: the wait starts after the robot comes to a standstill.<br> • <code>FALSE</code>: the wait starts as soon as the program pointer (PP) reaches the instruction.",
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
    "name": "Time(sec.)",
    "type": "Number",
    "ko": "프로그램 실행을 멈출 시간(초).",
    "en": "How long program execution waits (seconds)."
  }
];

export const main = "10_WaitTIme.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
