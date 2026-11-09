// Data for the ABB Positioner (Extra Option) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Positioner",
      "img": "positioner-option_tab1.png",
      "rows": [
        {
          "name": "MechUnit Name",
          "type": "String",
          "ko": "포지셔너의 Mechanical Unit(MechUnit) 변수명. 기본값은 STN1.",
          "en": "Variable name of the positioner's mechanical unit (MechUnit). Default: STN1.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Axis Type",
          "type": "Dropdown",
          "ko": "커스텀 포지셔너의 축 구성을 고른다. 모든 축은 회전(Rotational) 축이어야 하며, 선형(Linear) 축은 지원하지 않는다.<br>• <strong>Multi-Axis (Plate + Arm):</strong> Arm 과 Plate 두 축을 사용한다 (기본값).<br>• <strong>Single Axis (Plate):</strong> Plate 축만 사용한다.",
          "en": "Selects the axis configuration of the custom positioner. All axes must be rotational; linear axes are not supported.<br>• Multi-Axis (Plate + Arm): uses both the Arm and Plate axes (default).<br>• Single Axis (Plate): uses the Plate axis only.",
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
      "label": "Motion",
      "img": "positioner-option_tab2.png",
      "rows": [
        {
          "name": "Enable Arm",
          "type": "Toggle",
          "ko": "포지셔너 암(Arm) 축의 동작을 활성화한다. 기본값은 TRUE. <strong>Axis Type</strong> 이 Single Axis (Plate) 이면 숨겨진다.",
          "en": "Enables motion of the positioner arm axis. Default: TRUE. Hidden when <strong>Axis Type</strong> is Single Axis (Plate).",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Approach Dir",
          "type": "Number",
          "ko": "포지셔너 기준 TCP 의 접근 방향. 포지셔너는 이 방향으로의 접근을 기준으로 회전 자세를 결정한다. 범위는 -180 ~ 180, 기본값은 0.",
          "en": "Approach direction of the TCP relative to the positioner. The positioner determines its rotational posture based on an approach from this direction. Range: -180 to 180. Default: 0.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "TCP Dir",
          "type": "Number",
          "ko": "포지셔너가 최종적으로 정렬시킬 TCP 의 방향. TCP 법선이 이 방향과 평행하도록 정렬한다. 범위는 -90 ~ 90, 기본값은 0.",
          "en": "Direction to which the positioner finally aligns the TCP; the TCP normal is aligned parallel to it. Range: -90 to 90. Default: 0.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "RAPID",
      "img": "positioner-option_tab3.png",
      "rows": [
        {
          "name": "Arm Joint Index",
          "type": "Dropdown",
          "ko": "RobTarget 의 ExtJoint 배열에서 포지셔너 암(Arm) 축 각도를 넣을 인덱스(1~6)를 고른다. 다른 외부축 인덱스와 겹치면 안 된다. 기본값은 2. <strong>Axis Type</strong> 이 Single Axis (Plate) 이면 숨겨진다.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "en": "Selects the index (1–6) in the RobTarget ExtJoint array that receives the positioner arm joint angle. It must not overlap with other external-axis indices. Default: 2. Hidden when <strong>Axis Type</strong> is Single Axis (Plate).<br>- Example: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Plate Joint Index",
          "type": "Dropdown",
          "ko": "RobTarget 의 ExtJoint 배열에서 포지셔너 플레이트(Plate) 축 각도를 넣을 인덱스(1~6)를 고른다. 다른 외부축 인덱스와 겹치면 안 된다. 기본값은 3.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "en": "Selects the index (1–6) in the RobTarget ExtJoint array that receives the positioner plate joint angle. It must not overlap with other external-axis indices. Default: 3.<br>- Example: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "positioner-option_tab4.png",
      "rows": [
        {
          "name": "Color",
          "type": "Color",
          "ko": "뷰포트와 시뮬레이션에서 포지셔너 메시의 시각화 색상을 지정한다.",
          "en": "Sets the display color of the positioner mesh in the viewport and simulation.",
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
    "name": "Positioner Geo",
    "type": "Mesh",
    "ko": "포지셔너 각 링크의 형상 메시.",
    "en": "Mesh geometry of each link of the positioner."
  },
  {
    "name": "Joint Planes",
    "type": "Plane",
    "ko": "고정 베이스부터 플랜지까지 포지셔너의 기구학 체인을 순서대로 정의하는 평면 리스트.<br>고정 기준 좌표계(Base) - 각 회전축 좌표계(J1, J2, …) - 워크벤치/작업물 부착면(Flange) 순서로 넣는다. N축 포지셔너는 평면 N+2 개가 필요하다.",
    "en": "Ordered list of planes defining the positioner's kinematic chain from the fixed base to the flange.<br>Order: fixed reference frame (Base), each revolute axis frame (J1, J2, …), then the workbench / workpiece mounting surface (Flange). An N-axis positioner needs N+2 planes."
  },
  {
    "name": "Mounting Plane",
    "type": "Plane",
    "optional": true,
    "ko": "포지셔너의 플랜지 평면. <a href=\"/robot-tool/createworkbench/\">WorkBench</a> 가 장착되는 상단 기준면이다. 연결하지 않으면 WorldXY 를 사용한다.",
    "en": "Flange plane of the positioner: the top reference plane where the <a href=\"/en/robot-tool/createworkbench/\">WorkBench</a> is mounted. Uses WorldXY when not connected."
  },
  {
    "name": "Workbench",
    "type": "Workbench",
    "optional": true,
    "ko": "포지셔너 플랜지에 장착할 워크벤치 정의. <a href=\"/robot-tool/createworkbench/\">WorkBench</a> 컴포넌트의 출력을 연결한다. 연결하지 않으면 워크벤치 없이 포지셔너만 정의한다.",
    "en": "Workbench definition mounted on the positioner flange. Connect the output of the <a href=\"/en/robot-tool/createworkbench/\">WorkBench</a> component. When not connected, the positioner is defined without a workbench."
  }
];

export const main = "positioner-option_main.png";

export const outputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "로봇과 연동할 외부축 포지셔너. <a href=\"/robot-tool/abbrobot/\">ABB Robots</a> 와 <a href=\"/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a> 의 Positioner 입력에 연결한다.",
    "en": "External-axis positioner used with the robot. Connect it to the Positioner input of <a href=\"/en/robot-tool/abbrobot/\">ABB Robots</a> and <a href=\"/en/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a>."
  }
];
