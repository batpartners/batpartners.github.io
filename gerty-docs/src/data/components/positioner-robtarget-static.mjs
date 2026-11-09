// Data for the Positioner RobTarget (Static) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RobTarget",
      "img": "positioner-robtarget-static_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>RobTarget</code> 의 변수명을 정의한다. 이 변수는 로봇의 목표 위치와 자세를 저장하는 고유 식별자로 쓰인다. 기본값은 EP.",
          "en": "Defines the variable name of the <code>RobTarget</code> to create. The variable is the unique identifier that stores the robot's target position and orientation. Default: EP.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Output",
      "img": "positioner-robtarget-static_tab2.png",
      "rows": [
        {
          "name": "Split Start",
          "type": "Toggle",
          "ko": "<code>Target Planes</code> 의 각 브랜치(콜렉션)에서 첫 번째 RobTarget 을 분리해 별도의 <strong>Start Target</strong> 출력으로 내보낸다. 기본값은 FALSE.",
          "en": "Separates the first RobTarget of each <code>Target Planes</code> branch (collection) into a dedicated <strong>Start Target</strong> output. Default: FALSE.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Split End",
          "type": "Toggle",
          "ko": "<code>Target Planes</code> 의 각 브랜치(콜렉션)에서 마지막 RobTarget 을 분리해 별도의 <strong>End Target</strong> 출력으로 내보낸다. 기본값은 FALSE.",
          "en": "Separates the last RobTarget of each <code>Target Planes</code> branch (collection) into a dedicated <strong>End Target</strong> output. Default: FALSE.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "<a href=\"/robot-tool/positioner/\">ABB Positioner</a> 컴포넌트 데이터를 입력한다.",
    "en": "<a href=\"/en/robot-tool/positioner/\">ABB Positioner</a> component data."
  },
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "RobTarget 으로 변환할 대상 평면(Plane)을 입력한다.",
    "en": "Planes to convert into <code>RobTarget</code>s."
  },
  {
    "name": "Z Rotation",
    "type": "Angle",
    "ko": "각 RobTarget 을 자체 Z축을 기준으로 회전시킨다 (°).",
    "en": "Rotates each <code>RobTarget</code> around its own Z axis (°)."
  },
  {
    "name": "Target Base",
    "type": "Plane",
    "ko": "입력된 Target Planes 가 정의된 기준 평면(Plane)을 설정한다. Target Planes 는 이 평면의 좌표계를 기준으로 해석되어, 포지셔너의 장착 평면(Mounting Plane)에 맞춘 RobTarget 으로 변환된다.",
    "en": "Reference plane in which the input Target Planes are defined. The Target Planes are interpreted in this plane's coordinate system and converted into RobTargets oriented to the positioner's Mounting Plane."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "Static 모드에서 포지셔너의 고정 자세(Orientation)를 정하는 기준 평면(Plane)을 설정한다. 포지셔너는 모든 타겟에서 이 자세를 유지한다.",
    "en": "Reference plane that defines the fixed positioner orientation in Static mode. The positioner keeps this orientation for all targets."
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "optional": true,
    "ko": "<a href=\"/datatype/wobjdata-fixed/\">ABB 작업 평면 좌표계</a>를 기준으로 Target Planes 를 재정의할 때 연결한다.",
    "en": "Connect to redefine the Target Planes relative to the <a href=\"/en/datatype/wobjdata-fixed/\">ABB work object coordinate system</a>."
  }
];

export const main = "positioner-robtarget-static_main.png";

export const outputs = [
  {
    "name": "RobTargets",
    "type": "RobTarget",
    "ko": "포지셔너 회전각을 포함해 변환된 전체 ABB RAPID RobTarget 데이터를 출력한다.",
    "en": "Outputs the converted ABB RAPID <code>RobTarget</code> data, including the positioner joint angles."
  }
];
