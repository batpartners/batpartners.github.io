// Data for the Display Solver page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Simulation",
      "img": "display-solver_tab1.png",
      "rows": [
        {
          "name": "Simulation Window",
          "type": "Toggle",
          "ko": "시뮬레이션 컨트롤 창을 열거나 닫는다. 이 창에서 Rhino 뷰포트의 로봇 동작을 재생한다. 기본값은 FALSE.",
          "en": "Opens or closes the simulation control window, from which the robot motion is played in the Rhino viewport. Default: FALSE.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTY Solver",
    "type": "GERTY Solver",
    "ko": "<a href=\"/core/gerty-core/\">GERTY Core</a> 의 GERTY Solver 출력을 연결한다.",
    "en": "Connect the GERTY Solver output of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];

export const main = "display-solver_main.png";

export const outputs = [
  {
    "name": "Current TCP",
    "type": "Plane",
    "ko": "시뮬레이션의 현재 위치에서의 TCP 평면.",
    "en": "TCP plane at the current position of the simulation."
  }
];
