// Data for the GERTY Core page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "GERTY Core",
      "img": "2_GERTYCore_10.png",
      "rows": [
        {
          "name": "Config Option (Cfx = 1)",
          "type": "Toggle",
          "ko": "• <strong>TRUE:</strong> cfx = 1. 로봇 축 4, 6의 구성(Configuration) 반전 모드를 적용한다.<br>• <strong>FALSE:</strong> cfx = 0. 기본 구성을 적용한다.",
          "en": "• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6<br> • FALSE: cfx = 0 Default value",
          "y": [
            35,
            26.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTY Robot",
    "type": "Robot Setup",
    "ko": "구성된 로봇 셋업. 베이스·툴·포지셔너·주변 모델이 묶인 로봇 정의.",
    "en": "Configured robot setup. Robot definition bundling base, tool, positioner, and surrounding models."
  },
  {
    "name": "Instructions",
    "type": "Instructions",
    "ko": "실행할 ABB 인스트럭션 콜렉션. 리스트 순서가 로봇 실행 순서와 직접 대응되므로, 의도한 모션 시퀀스에 맞게 순서 정렬 필요.",
    "en": "Collection of ABB instructions to execute. Since the list order directly corresponds to the robot execution sequence, ordering them to match the intended motion sequence is required."
  },
  {
    "name": "SubProc.",
    "type": "SubProc",
    "ko": "호출되는 <a href=\"/instruction/subproc-composition/\">ABB Procedure</a>",
    "en": "Called <a href=\"/en/instruction/subproc-composition/\">ABB Procedure</a>",
    "optional": true
  }
];

export const main = "2_GERTYCore.png";

export const outputs = [
  {
    "name": "GERTY Solver",
    "type": "GERTY Solver",
    "ko": "<a href=\"/core/display-solver/\">GERTY Solver</a> 연결",
    "en": "Connect to <a href=\"/en/core/display-solver/\">GERTY Solver</a>"
  },
  {
    "name": "GERTY Code",
    "type": "GERTY Code",
    "ko": "<a href=\"/core/code-solver/\">GERTY Code</a> 연결",
    "en": "Connect to <a href=\"/en/core/code-solver/\">GERTY Code</a>"
  }
];
