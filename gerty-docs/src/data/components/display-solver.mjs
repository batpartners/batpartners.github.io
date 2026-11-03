// Data for the Display Solver page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Simulation",
      "img": "1_DisplaySolver_1.png",
      "rows": [
        {
          "name": "Simulation Pop-up",
          "type": "Toggle",
          "ko": "시뮬레이션 컨트롤 창 열기/닫기",
          "en": "Opens/closes the simulation control window.",
          "y": [
            49,
            30.6
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
    "ko": "GERTY Solver",
    "en": "GERTY Solver"
  }
];

export const main = "1_DisplaySolver.png";

export const outputs = [
  {
    "name": "Tool Center Plane",
    "type": "Plane",
    "ko": "현재 TCP 평면",
    "en": "Current TCP plane."
  }
];
