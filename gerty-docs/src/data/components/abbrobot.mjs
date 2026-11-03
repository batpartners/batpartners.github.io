// Data for the ABB Robots page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Robots",
      "img": "0_ABBRobot_10.png",
      "rows": [
        {
          "name": "Models",
          "type": "Dropdown",
          "ko": "사용할 ABB 로봇 모델을 선택한다.",
          "en": "ABB robot model",
          "y": [
            35.9,
            23.7
          ]
        },
        {
          "name": "Colour",
          "type": "Color",
          "ko": "시뮬레이션 및 뷰포트에서 로봇 메시의 시각화 색상을 지정한다.",
          "en": "Visualization color",
          "y": [
            68.7,
            19.8
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Motion Settings",
      "img": "0_ABBRobot_11.png",
      "rows": [
        {
          "name": "Reset Pose",
          "type": "Button",
          "ko": "로봇의 관절 자세를 초기 상태(Home Pose)로 리셋한다.",
          "en": "Reset robot pose",
          "y": [
            29.2,
            16.9
          ]
        },
        {
          "name": "Align Gumball",
          "type": "Button",
          "ko": "현재 TCP 방향에 가장 가까운 World 좌표축(±X, ±Y, ±Z)과 평행하게 TCP를 정렬한다. (ABB FlexPendant Jogging의 Align 기능과 동일)",
          "en": "Aligns the TCP parallel to the World coordinate axis (±X, ±Y, ±Z) closest to the current TCP orientation. Identical to the Align function in ABB FlexPendant Jogging.",
          "y": [
            50,
            17.4
          ]
        },
        {
          "name": "Config Option",
          "type": "Toggle",
          "ko": "• <strong>TRUE:</strong> cfx = 1. 로봇 축 4, 6의 구성(Configuration) 반전 모드를 적용한다.<br>• <strong>FALSE:</strong> cfx = 0. 기본 구성을 적용한다.",
          "en": "• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6<br> • FALSE: cfx = 0 Default value",
          "y": [
            71.9,
            16.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Robot Base",
    "type": "Plane",
    "ko": "로봇의 베이스 좌표계 평면을 지정한다. (기본값: WorldXY)",
    "en": "Robot base coordinate system plane. Default: WorldXY.",
    "optional": true
  },
  {
    "name": "Tool Data",
    "type": "ToolData",
    "ko": "로봇에 적용할 ABB <a href=\"/datatype/tooldata/\">ToolData</a>를 연결한다.",
    "en": "ABB <a href=\"/en/datatype/tooldata/\">ToolData</a> to apply to the robot."
  },
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "로봇과 연동할 외부축 <a href=\"/robot-tool/positioner/\">Positioner</a> 컴포넌트의 출력을 연결한다.",
    "en": "External axis <a href=\"/en/robot-tool/positioner/\">Positioner</a> to link with the robot."
  },
  {
    "name": "Pedestal",
    "type": "Mesh",
    "ko": "로봇 받침대, 작업대 등 주변 환경 메시(Mesh) 데이터를 연결한다.",
    "en": "Surrounding environment mesh such as robot pedestal and workbench.",
    "optional": true
  }
];

export const main = "0_ABBRobot.png";

export const outputs = [
  {
    "name": "GERTY Robot",
    "type": "Robot Setup",
    "ko": "베이스, 툴, 포지셔너, 주변 메시가 통합 구성된 로봇 셋업 데이터를 출력한다. Core 컴포넌트의 GERTY Robot 입력으로 연결한다.",
    "en": "Configured robot setup. Robot definition bundled with base, tool, positioner, and environment models."
  },
  {
    "name": "TCP",
    "type": "Plane",
    "ko": "현재 로봇 셋업의 TCP(Tool Center Point) 평면 데이터를 출력한다.",
    "en": "Current TCP plane of the robot setup."
  }
];
