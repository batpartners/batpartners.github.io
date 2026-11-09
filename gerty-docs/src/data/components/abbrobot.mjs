// Data for the ABB Robots page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Robots",
      "img": "abbrobot_tab1.png",
      "rows": [
        {
          "name": "Robot Model",
          "type": "Dropdown",
          "ko": "사용할 ABB IRB 로봇 모델을 고른다. 목록: IRB1200, IRB1300, IRB1600, IRB1660ID, IRB2600, IRB2600ID, IRB4600, IRB6700. 기본값은 IRB4600.",
          "en": "Selects the ABB IRB robot model to use. Options: IRB1200, IRB1300, IRB1600, IRB1660ID, IRB2600, IRB2600ID, IRB4600, IRB6700. Default: IRB4600.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Spec",
          "type": "Dropdown",
          "ko": "선택한 로봇 모델의 사양을 가반하중(kg) - 작업 반경(mm) 형식으로 고른다. IRB4600 의 기본값은 40kg - 2550mm.",
          "en": "Selects the variant of the chosen robot model, listed as payload (kg) - reach (mm). Default for IRB4600: 40kg - 2550mm.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Robot Linear Jog",
      "img": "abbrobot_tab2.png",
      "rows": [
        {
          "name": "Reset Pose",
          "type": "Button",
          "ko": "로봇의 모든 관절 각도를 초기 자세(Home Pose)로 되돌린다.",
          "en": "Resets all robot joint angles to the initial pose (Home Pose).",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Align Gumball",
          "type": "Button",
          "ko": "현재 TCP 방향에 가장 가까운 World 좌표축(±X, ±Y, ±Z)과 평행하게 TCP 를 정렬한다. ABB FlexPendant Jogging 의 Align 기능과 같다.",
          "en": "Aligns the TCP parallel to the World axis (±X, ±Y, ±Z) closest to the current TCP orientation. Equivalent to the Align function in ABB FlexPendant jogging.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Config Option",
          "type": "Toggle",
          "ko": "로봇 구성 데이터(ConfData)의 cfx 값을 정한다.<br>• <strong>TRUE:</strong> cfx = 1. 로봇 축 4, 6 의 구성(Configuration)을 반전한다.<br>• <strong>FALSE:</strong> cfx = 0. 기본 구성을 적용한다 (기본값).",
          "en": "Sets the cfx value of the robot configuration data (ConfData).<br>• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6.<br>• FALSE: cfx = 0. Uses the default configuration (default).",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "abbrobot_tab3.png",
      "rows": [
        {
          "name": "Color",
          "type": "Color",
          "ko": "뷰포트와 시뮬레이션에서 로봇 메시의 시각화 색상을 지정한다.",
          "en": "Sets the display color of the robot mesh in the viewport and simulation.",
          "y": [
            54.6,
            30.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Base Plane",
    "type": "Plane",
    "optional": true,
    "ko": "로봇 베이스 좌표계 평면. 연결하지 않으면 WorldXY 를 사용한다.",
    "en": "Robot base coordinate plane. Uses WorldXY when not connected."
  },
  {
    "name": "ToolData",
    "type": "ToolData",
    "optional": true,
    "ko": "로봇에 장착할 ABB <a href=\"/datatype/tooldata/\">ToolData</a>. ToolData 컴포넌트의 출력을 연결한다.",
    "en": "ABB <a href=\"/en/datatype/tooldata/\">ToolData</a> mounted on the robot. Connect the output of a ToolData component."
  },
  {
    "name": "Positioner",
    "type": "Positioner",
    "optional": true,
    "ko": "로봇과 연동할 외부축 포지셔너. <a href=\"/robot-tool/positioner/\">ABB Positioner</a> 컴포넌트의 출력을 연결한다.",
    "en": "External-axis positioner used with the robot. Connect the output of the <a href=\"/en/robot-tool/positioner/\">ABB Positioner</a> component."
  },
  {
    "name": "Pedestal",
    "type": "Mesh",
    "optional": true,
    "ko": "로봇 받침대(Pedestal)·작업대 등 주변 환경 메시. WorldXY 기준으로 모델링하며, Base Plane 에 맞춰 자동으로 정렬된다.",
    "en": "Surrounding environment meshes such as the robot pedestal or a workbench. Model them at WorldXY; they are aligned to the Base Plane automatically."
  }
];

export const main = "abbrobot_main.png";

export const outputs = [
  {
    "name": "Robot Setup",
    "type": "Robot Setup",
    "ko": "베이스, 툴, 포지셔너, 주변 메시를 하나로 묶은 로봇 셋업. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 Robot Setup 입력에 연결한다.",
    "en": "Robot setup that bundles the base, tool, positioner, and surrounding meshes. Connect it to the Robot Setup input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  },
  {
    "name": "Current TCP",
    "type": "Plane",
    "ko": "현재 로봇 자세에서의 TCP(Tool Center Point) 평면.",
    "en": "TCP (Tool Center Point) plane at the current robot pose."
  }
];
