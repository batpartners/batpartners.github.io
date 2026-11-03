// Data for the Positioner RobTarget (Static) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RobTarget",
      "img": "1_Positioner_Robtarget_10.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>RobTarget</code>의 변수명을 정의한다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용된다.",
          "en": "Defines the name of the <code>RobTarget</code> variable to be created. This variable is used as a unique identifier to store the target position and orientation of the robot.",
          "y": [
            51.6,
            32.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Output",
      "img": "1_Positioner_Robtarget_11.png",
      "rows": [
        {
          "name": "Split Start",
          "type": "Toggle",
          "ko": "입력 데이터 <code>TargetPlane</code>의 각 브랜치(Branch) 내에서 첫 번째 인덱스(First Index)에 해당하는 데이터를 분리하여 출력하도록 설정한다.",
          "en": "Extracts and outputs data corresponding to the first index within each branch of the input data <code>TargetPlane</code>.",
          "y": [
            37.1,
            21.4
          ]
        },
        {
          "name": "Split End",
          "type": "Toggle",
          "ko": "입력 데이터 <code>TargetPlane</code>의 각 브랜치(Branch) 내에서 마지막 인덱스(Last Index)에 해당하는 데이터를 분리하여 출력하도록 설정한다.",
          "en": "Extracts and outputs data corresponding to the last index within each branch of the input data <code>TargetPlane</code>.",
          "y": [
            64.3,
            21.4
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
    "en": "<a href=\"/en/robot-tool/positioner/\">ABB Positioner</a>"
  },
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "RobTarget으로 변환할 대상 평면(Plane)을 입력한다.",
    "en": "Planes to be converted into RobTargets"
  },
  {
    "name": "Z Rotation",
    "type": "Angle",
    "ko": "RobTarget을 자체 Z축을 기준으로 회전시킨다(단위: 도).",
    "en": "Rotates the RobTarget based on its own Z-axis (Unit: degrees)"
  },
  {
    "name": "Target Base",
    "type": "Plane",
    "ko": "입력된 Target Plane이 정의된 기준 평면(Plane)을 설정한다. 입력된 Target Plane은 이 평면을 기준으로 Positioner의 장착 평면(Mounting Plane)에 정렬된 RobTarget을 정의한다.",
    "en": "Reference plane where the input Target Plane is defined. The input Target Plane defines a RobTarget oriented to the Positioner's Mounting Plane based on this plane"
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "Static 모드에서 포지셔너 정위(Orientation)를 위한 기준 평면(Plane)을 설정한다.",
    "en": "Reference plane for positioner orientation in Static mode"
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "<a href=\"/datatype/wobjdata/\">ABB 작업 평면 좌표계</a>를 기준으로 Target Plane을 재정의할 때 입력한다.",
    "en": "Redefines the Target Plane based on the <a href=\"/en/datatype/wobjdata/\">ABB work object coordinate system</a>.",
    "optional": true
  }
];

export const main = "1_Positioner Robtarget_1.png";

export const outputs = [
  {
    "name": "Start Targets",
    "type": "RobTarget",
    "ko": "Output 탭의 Split Start 를 켜면 나타난다. 분리된 ABB Rapid RobTargets의 첫 번째 인덱스 데이터를 출력한다.",
    "en": "Appears when Split Start (Output tab) is on. Outputs the first branch code of ABB RAPID RobTargets"
  },
  {
    "name": "RobTargets",
    "type": "RobTarget",
    "ko": "변환된 전체 ABB Rapid RobTargets 데이터를 출력한다.",
    "en": "Outputs ABB RAPID RobTargets code"
  },
  {
    "name": "End Targets",
    "type": "RobTarget",
    "ko": "Output 탭의 Split End 를 켜면 나타난다. 분리된 ABB Rapid RobTargets의 마지막 인덱스 데이터를 출력한다.",
    "en": "Appears when Split End (Output tab) is on. Outputs the last branch code of ABB RAPID RobTargets"
  }
];
