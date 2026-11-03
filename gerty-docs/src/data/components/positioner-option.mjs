// Data for the ABB Positioner (Extra Option) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Positioner",
      "img": "1_ABBPositioner_30.png",
      "rows": [
        {
          "name": "Axis Type",
          "type": "Dropdown",
          "ko": "포지셔너의 축 구성을 고른다(예: Multi-Axis (Plate + Arm)).",
          "en": "Axis configuration of the positioner (e.g. Multi-Axis (Plate + Arm)).",
          "y": [
            28.4,
            17.8
          ]
        },
        {
          "name": "Name",
          "type": "String",
          "ko": "포지셔너(MechUnit) 변수명",
          "en": "Positioner (MechUnit) variable name",
          "y": [
            50.9,
            17.8
          ]
        },
        {
          "name": "Colour",
          "type": "Color",
          "ko": "시각화 색상",
          "en": "Visualization color",
          "y": [
            75.7,
            15.4
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Motion Settings",
      "img": "1_ABBPositioner_31.png",
      "rows": [
        {
          "name": "Enable Arm",
          "type": "Toggle",
          "ko": "포지셔너의 암 동작 활성화",
          "en": "Enable positioner arm motion",
          "y": [
            29.2,
            16.9
          ]
        },
        {
          "name": "Approaching Dir.",
          "type": "Number",
          "ko": "포지셔너 기준 TCP의 접근 방향. 포지셔너가 이 방향으로의 접근을 기준으로 회전 자세 결정.",
          "en": "TCP approach direction relative to the positioner. The positioner determines the rotational posture based on the approach in this direction.",
          "y": [
            50.6,
            16.9
          ]
        },
        {
          "name": "TCP Dir.",
          "type": "Number",
          "ko": "포지셔너가 최종적으로 정렬시킬 TCP의 방향",
          "en": "Direction of the TCP that the positioner will ultimately align",
          "y": [
            71.9,
            16.9
          ]
        }
      ]
    },
    {
      "label": "RAPID Setting",
      "img": "1_ABBPositioner_32.png",
      "rows": [
        {
          "name": "Arm Joint Index",
          "type": "String",
          "ko": "포지셔너 암(Arm) 축 각도를 할당할, RobTarget 내부 ExtJoint 배열의 인덱스 (1~6). 다른 외부축 인덱스와 중복 불가.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "en": "Index (1~6) of the ExtJoint array inside RobTarget to assign the positioner arm joint angle. Cannot overlap with other external axis indices.<br>- Example: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "y": [
            37.1,
            21.4
          ]
        },
        {
          "name": "Plate Joint Index",
          "type": "String",
          "ko": "포지셔너 플레이트(Plate) 축 각도를 할당할 RobTarget ExtJoint 배열의 인덱스 (1~6). 다른 외부축 인덱스와 중복 불가.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "en": "Index (1~6) of the ExtJoint array inside RobTarget to assign the positioner plate joint angle. Cannot overlap with other external axis indices.<br>- Example: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "y": [
            63.6,
            22.1
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "PositionerGeo",
    "type": "Mesh",
    "ko": "포지셔너 각 링크의 형상 메시.",
    "en": "Geometry mesh for each link of the positioner."
  },
  {
    "name": "Joints",
    "type": "Plane",
    "ko": "고정 베이스부터 플랜지까지 포지셔너의 기구학 체인을 순서대로 정의하는 평면 리스트.<br>고정 기준 좌표계(Base) - 각 회전축 좌표계(J1, J2, ...) - 워크밴치/워크피스 부착면(Flange)에 순서대로 설정.(즉, N축 포지셔너의 경우 총 N+2개 평면 입력 필요.)",
    "en": "A list of planes sequentially defining the kinematic chain of the positioner from the fixed base to the flange.<br>Set in order: Fixed reference coordinate system (Base) - Each rotation axis coordinate system (J1, J2, ...) - Workbench/Workpiece attachment surface (Flange). (That is, for an N-axis positioner, a total of N+2 planes must be input.)"
  },
  {
    "name": "MountingPl",
    "type": "Plane",
    "ko": "포지셔너의 플랜지 평면. <a href=\"/robot-tool/createworkbench/\">WorkBench</a>가 장착되는 상단 기준면. 기본값: WorldXY.",
    "en": "The flange plane of the positioner. The top reference surface where the <a href=\"/en/robot-tool/createworkbench/\">WorkBench</a> is mounted. Default value: WorldXY.",
    "optional": true
  },
  {
    "name": "WorkBench",
    "type": "Workbench",
    "ko": "포지셔너 플랜지에 장착되는 <a href=\"/robot-tool/createworkbench/\">WorkBench</a> 정의.",
    "en": "Defines the <a href=\"/en/robot-tool/createworkbench/\">WorkBench</a> mounted on the positioner flange.",
    "optional": true
  }
];

export const main = "1_ABBPositioner_3_1.png";

export const outputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "로봇과 연동할 외부축 포지셔너 (Positioner).",
    "en": "External axis positioner to interface with the robot."
  }
];
