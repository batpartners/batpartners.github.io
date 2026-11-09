// Data for the ABB Positioner page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB Positioner",
      "img": "positioner_tab1.png",
      "rows": [
        {
          "name": "MechUnit Name",
          "type": "String",
          "ko": "포지셔너의 Mechanical Unit(MechUnit) 변수명. 기본값은 STN1.",
          "en": "Variable name of the positioner's mechanical unit (MechUnit). Default: STN1.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Positioner Model",
          "type": "Dropdown",
          "ko": "사용할 ABB IRBP 포지셔너 모델을 고른다. 목록: IRBPA250, IRBPA500, IRBPA750. 기본값은 IRBPA500.",
          "en": "Selects the ABB IRBP positioner model to use. Options: IRBPA250, IRBPA500, IRBPA750. Default: IRBPA500.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Spec",
          "type": "Dropdown",
          "ko": "선택한 포지셔너 모델의 사양을 작업 직경(D) - 플레이트 높이(H) 형식으로 고른다. 기본값은 D1450 - H900.",
          "en": "Selects the variant of the chosen positioner model, listed as working diameter (D) - plate height (H). Default: D1450 - H900.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Motion",
      "img": "positioner_tab2.png",
      "rows": [
        {
          "name": "Enable Arm",
          "type": "Toggle",
          "ko": "포지셔너 암(Arm) 축의 동작을 활성화한다. 기본값은 TRUE.",
          "en": "Enables motion of the positioner arm axis. Default: TRUE.",
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
      "img": "positioner_tab3.png",
      "rows": [
        {
          "name": "Arm Joint Index",
          "type": "Dropdown",
          "ko": "RobTarget 의 ExtJoint 배열에서 포지셔너 암(Arm) 축 각도를 넣을 인덱스(1~6)를 고른다. 다른 외부축 인덱스와 겹치면 안 된다. 기본값은 2.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
          "en": "Selects the index (1–6) in the RobTarget ExtJoint array that receives the positioner arm joint angle. It must not overlap with other external-axis indices. Default: 2.<br>- Example: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]",
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
      "img": "positioner_tab4.png",
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

export const main = "positioner_main.png";

export const outputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "로봇과 연동할 외부축 포지셔너. <a href=\"/robot-tool/abbrobot/\">ABB Robots</a> 와 <a href=\"/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a> 의 Positioner 입력에 연결한다.",
    "en": "External-axis positioner used with the robot. Connect it to the Positioner input of <a href=\"/en/robot-tool/abbrobot/\">ABB Robots</a> and <a href=\"/en/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a>."
  }
];
