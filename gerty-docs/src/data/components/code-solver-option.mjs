// Data for the Code Solver (Option) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Program Settings",
      "img": "0_CodeSolver_20.png",
      "rows": [
        {
          "name": "Program Folder",
          "type": "String",
          "ko": "로봇 프로그램이 저장될 디렉토리 경로",
          "en": "Directory path where the robot program will be saved",
          "y": [
            27.8,
            18.9
          ]
        },
        {
          "name": "Program Name",
          "type": "String",
          "ko": "생성될 로봇 프로그램의 이름",
          "en": "Name of the robot program to be generated",
          "y": [
            50.3,
            18.9
          ]
        },
        {
          "name": "Enable Socket",
          "type": "Toggle",
          "ko": "RAPID 코드 내에 소켓 통신용 모듈로 프로그램 내보내기",
          "en": "Exports the program into the RAPID code as a socket communication module",
          "y": [
            72.8,
            18.9
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Export",
      "img": "0_CodeSolver_21.png",
      "rows": [
        {
          "name": "Auto Load",
          "type": "Toggle",
          "ko": "코드 생성 후 자동으로 연결된 로봇 컨트롤러에 프로그램 로드",
          "en": "Automatically loads the program to the connected robot controller after code generation",
          "y": [
            15.4,
            9.2
          ]
        },
        {
          "name": "Export",
          "type": "Button",
          "ko": "설정된 옵션에 따라 Rapid 코드를 생성 및 지정된 디렉토리에 저장",
          "en": "Generates RAPID code according to the configured options and saves it to the specified directory",
          "y": [
            26.3,
            9.5
          ]
        },
        {
          "name": "Cancel",
          "type": "Button",
          "ko": "현재 진행 중인 코드 생성 및 내보내기 작업 취소",
          "en": "Cancels the ongoing code generation and export process",
          "y": [
            38.8,
            8.3
          ]
        },
        {
          "name": "Export Log",
          "type": "Panel",
          "ko": "직전에 저장된 RAPID 프로그램 파일 정보. 파일 경로 및 내보내기 결과 표시.<br> Local path / Controller path / Contents",
          "en": "Information on the most recently saved RAPID program file. Displays file path and export results.<br> Local path / Controller path / Contents",
          "y": [
            49.1,
            26.6
          ]
        },
        {
          "name": "Open in Editor",
          "type": "Button",
          "ko": "생성된 RAPID 코드를 VSCode로 열어 편집. VSCode 미설치 시 메모장으로 자동 실행.",
          "en": "Opens the generated RAPID code in VSCode for editing. Automatically launches Notepad if VSCode is not installed.",
          "y": [
            77.8,
            9.5
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
    "ko": "GERTY Code",
    "en": "GERTY Code"
  },
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "이 PC에 연결된  <a href=\"/controller-utils/scanabbcontroller/\">ABB Controller</a>",
    "en": "<a href=\"/en/controller-utils/scanabbcontroller/\">ABB Controller</a> connected to this PC",
    "optional": true
  }
];

export const main = "0_CodeSolver_1.png";

export const outputs = [
  {
    "name": "SocketBundle",
    "type": "SocketBundle",
    "ko": "소켓 클라이언트와 인스트럭션 패킷 리스트 데이터 번들",
    "en": "Data bundle of socket client and instruction packet list"
  }
];
