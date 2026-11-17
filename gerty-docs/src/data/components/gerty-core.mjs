// Data for the GERTY Core page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "GERTY Core",
      "img": "gerty-core_tab1.png",
      "rows": [
        {
          "name": "Config Option (Cfx = 1)",
          "type": "Toggle",
          "ko": "로봇 구성 데이터(ConfData)의 cfx 값을 정한다.<br>• <strong>TRUE:</strong> cfx = 1. 로봇 축 4, 6 의 구성(Configuration)을 반전한다.<br>• <strong>FALSE:</strong> cfx = 0. 기본 구성을 적용한다 (기본값).",
          "en": "Sets the cfx value of the robot configuration data (ConfData).<br>• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6.<br>• FALSE: cfx = 0. Uses the default configuration (default).",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Ignore Errors",
          "type": "Toggle",
          "ko": "Core 연산 중 동작 오류가 검출되었을 때의 처리 방식을 정한다.<br>• <strong>TRUE:</strong> 오류를 무시하고 코드를 출력한다. 실행 전에 RAPID 코드와 운용 절차를 반드시 확인해야 한다.<br>• <strong>FALSE:</strong> 오류가 검출되면 코드 생성을 중단한다 (기본값).",
          "en": "Sets how motion errors detected during the Core computation are handled.<br>• TRUE: ignores the errors and forces code output. Review the RAPID code and operating procedure before running it.<br>• FALSE: stops code generation when errors are detected (default).",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Robot Setup",
    "type": "Robot Setup",
    "ko": "베이스, 툴, 포지셔너, 주변 메시를 묶은 로봇 셋업. <a href=\"/robot-tool/abbrobot/\">ABB Robots</a> 의 Robot Setup 출력을 연결한다.",
    "en": "Robot setup bundling the base, tool, positioner, and surrounding meshes. Connect the Robot Setup output of <a href=\"/en/robot-tool/abbrobot/\">ABB Robots</a>."
  },
  {
    "name": "Instructions",
    "type": "Instructions",
    "ko": "실행할 ABB 인스트럭션 리스트. 리스트 순서가 로봇 실행 순서와 직접 대응하므로, 의도한 모션 순서대로 정렬해야 한다.",
    "en": "List of ABB instructions to execute. The list order maps directly to the robot's execution order, so sort it in the intended motion sequence."
  },
  {
    "name": "SubProc",
    "type": "SubProc",
    "optional": true,
    "ko": "메인 프로그램에서 호출할 ABB 서브 프로시저. <a href=\"/instruction/subproc-composition/\">ABB Procedure</a> 의 출력을 연결한다.",
    "en": "ABB sub-procedures called from the main program. Connect the output of <a href=\"/en/instruction/subproc-composition/\">ABB Procedure</a>."
  }
];

export const main = "gerty-core_main.png";

export const outputs = [
  {
    "name": "GERTY Solver",
    "type": "GERTY Solver",
    "ko": "연산된 로봇 동작 데이터. <a href=\"/core/display-solver/\">Display Solver</a> 와 <a href=\"/core/analysis/\">Analysis Deconstructor</a> 의 GERTY Solver 입력에 연결한다.",
    "en": "Computed robot motion data. Connect it to the GERTY Solver input of <a href=\"/en/core/display-solver/\">Display Solver</a> and <a href=\"/en/core/analysis/\">Analysis Deconstructor</a>."
  },
  {
    "name": "GERTY Code",
    "type": "GERTY Code",
    "ko": "RAPID 코드 생성용 데이터. <a href=\"/core/code-solver/\">Code Solver</a> 의 GERTY Code 입력에 연결한다.",
    "en": "Data for RAPID code generation. Connect it to the GERTY Code input of <a href=\"/en/core/code-solver/\">Code Solver</a>."
  }
];
