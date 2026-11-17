// Data for the Code Solver page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Program Settings",
      "img": "code-solver_tab1.png",
      "rows": [
        {
          "name": "Program Folder",
          "type": "String",
          "ko": "로봇 프로그램을 저장할 디렉토리 경로. 기본값은 Project.",
          "en": "Directory path where the robot program is saved. Default: Project.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Program Name",
          "type": "String",
          "ko": "생성할 로봇 프로그램의 이름. 기본값은 MyProgram.",
          "en": "Name of the robot program to generate. Default: MyProgram.",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Export",
      "img": "code-solver_tab2.png",
      "rows": [
        {
          "name": "Auto Load",
          "type": "Toggle",
          "ko": "코드 생성 후 연결된 로봇 컨트롤러에 프로그램을 자동으로 로드한다. 기본값은 FALSE.",
          "en": "Automatically loads the program to the connected robot controller after code generation. Default: FALSE.",
          "y": [
            17.1,
            9.7
          ]
        },
        {
          "name": "Export",
          "type": "Button",
          "ko": "설정한 옵션에 따라 RAPID 코드를 생성하여 지정한 폴더에 저장한다.",
          "en": "Generates RAPID code with the configured options and saves it to the specified folder.",
          "y": [
            29.4,
            9.7
          ]
        },
        {
          "name": "Cancel",
          "type": "Button",
          "ko": "진행 중인 코드 생성 및 내보내기 작업을 취소한다.",
          "en": "Cancels the code generation and export in progress.",
          "y": [
            41.6,
            9.7
          ]
        },
        {
          "name": "Export Log",
          "type": "Panel",
          "ko": "직전에 내보낸 RAPID 프로그램 파일의 정보와 내보내기 결과를 표시한다.<br>Local path / Controller path / Contents",
          "en": "Shows the file information and result of the last RAPID program export.<br>Local path / Controller path / Contents",
          "y": [
            53.9,
            29
          ]
        },
        {
          "name": "Open in Editor",
          "type": "Button",
          "ko": "생성된 RAPID 코드를 VSCode 로 열어 편집한다. VSCode 가 설치되어 있지 않으면 메모장으로 연다.",
          "en": "Opens the generated RAPID code in VSCode for editing. Falls back to Notepad if VSCode is not installed.",
          "y": [
            85.5,
            9.7
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTY Code",
    "type": "GERTY Code",
    "ko": "<a href=\"/core/gerty-core/\">GERTY Core</a> 의 GERTY Code 출력을 연결한다. RAPID 프로그램 생성에 쓰이는 코드 데이터이다.",
    "en": "Connect the GERTY Code output of <a href=\"/en/core/gerty-core/\">GERTY Core</a>. Code data used to generate the RAPID program."
  },
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "optional": true,
    "ko": "이 PC 에 연결된 ABB 컨트롤러. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 출력을 연결한다. Auto Load 로 프로그램을 컨트롤러에 올릴 때 필요하다.",
    "en": "ABB controller connected to this PC. Connect the output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>. Required to load the program to the controller with Auto Load."
  }
];

export const main = "code-solver_main.png";

export const outputs = [];
