// Data for the ABB Positioner page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Positioner",
      "img": "1_ABBPositioner_10.png",
      "rows": [
        {
          "name": "Models",
          "type": "Dropdown",
          "ko": "ABB 포지셔너 모델",
          "en": "ABB positioner model",
          "y": [
            27.8,
            18.3
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
      "img": "1_ABBPositioner_11.png",
      "rows": [
        {
          "name": "Enable Arm",
          "type": "Toggle",
          "ko": "포지셔너의 암 동작 활성화",
          "en": "Enables the arm motion of the positioner",
          "y": [
            29.2,
            16.9
          ]
        },
        {
          "name": "Approaching Dir.",
          "type": "Number",
          "ko": "포지셔너 기준 TCP의 접근 방향. 포지셔너가 이 방향으로의 접근을 기준으로 회전 자세 결정.",
          "en": "Approach direction of the TCP relative to the positioner. Determines the rotation posture based on approach in this direction.",
          "y": [
            50.6,
            16.9
          ]
        },
        {
          "name": "TCP Dir.",
          "type": "Number",
          "ko": "포지셔너가 최종적으로 정렬시킬 TCP의 방향",
          "en": "Direction of the TCP that the positioner ultimately aligns with",
          "y": [
            71.9,
            16.9
          ]
        }
      ]
    },
    {
      "label": "RAPID Setting",
      "img": "1_ABBPositioner_12.png",
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
    "name": "MountingPl",
    "type": "Plane",
    "ko": "포지셔너의 플랜지 평면. <a href=\"/robot-tool/createworkbench/\">WorkBench</a>가 장착되는 상단 기준면. 기본값: WorldXY.",
    "en": "Flange plane of the positioner. The upper reference plane where the <a href=\"/en/robot-tool/createworkbench/\">WorkBench</a> is mounted. Default: WorldXY.",
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

export const main = "1_ABBPositioner.png";

export const outputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "로봇과 연동할 외부축 포지셔너 (Positioner).",
    "en": "External axis positioner to be linked with the robot."
  }
];
