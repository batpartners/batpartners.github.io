// Data for the RobTarget page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RobTarget",
      "img": "0_RobTarget_4.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>RobTarget</code>의 변수명을 정의한다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용된다.",
          "en": "Defines the name of the <code>RobTarget</code> variable to be created. This variable is used as a unique identifier storing the target position and orientation of the robot.",
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
      "label": "Orientation",
      "img": "0_RobTarget_5.png",
      "rows": [
        {
          "name": "Align X",
          "type": "Toggle",
          "ko": "RobTarget의 +X축이 Robot Base 원점을 향하도록 자세를 보간 및 보정하는 옵션을 설정한다.<br>기본값은 비활성화(False)이며, 활성화 시 'Robot Base' (Plane)와 'Align Weight' (0 = 원본, 1 = 완전 정렬) 입력 단자가 추가된다.",
          "en": "An option to interpolate and correct the orientation so that the +X axis of the <code>RobTarget</code> points toward the <code>Robot Base</code> origin. Disabled by default (<code>False</code>). Adds inputs for 'Robot Base' (Plane) and 'Align Weight' (<code>0</code> = original, <code>1</code> = fully aligned).",
          "y": [
            51,
            29.4
          ]
        }
      ]
    },
    {
      "label": "Output",
      "img": "0_RobTarget_6.png",
      "rows": [
        {
          "name": "Split Start",
          "type": "Toggle",
          "ko": "입력 데이터 <code>TargetPlane</code>의 각 브랜치(Branch) 내에서 첫 번째 인덱스(First Index)에 해당하는 데이터를 분리하여 출력하도록 설정한다.",
          "en": "Enables separating and outputting data corresponding to the first index within each branch of the input data <code>TargetPlane</code>.",
          "y": [
            37.1,
            21.4
          ]
        },
        {
          "name": "Split End",
          "type": "Toggle",
          "ko": "입력 데이터 <code>TargetPlane</code>의 각 브랜치(Branch) 내에서 마지막 인덱스(Last Index)에 해당하는 데이터를 분리하여 출력하도록 설정한다.",
          "en": "Enables separating and outputting data corresponding to the last index within each branch of the input data <code>TargetPlane</code>.",
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
    "name": "Target Plane",
    "type": "Plane",
    "ko": "RobTarget으로 변환할 대상 평면(Plane)을 입력한다.",
    "en": "Input planes to be converted into <code>RobTarget</code>."
  },
  {
    "name": "Z Rotation",
    "type": "Number",
    "ko": "RobTarget을 자체 Z축을 기준으로 회전시킨다(단위: 도).",
    "en": "Rotates the <code>RobTarget</code> around its own Z-axis (Unit: degrees)."
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "<a href=\"/datatype/wobjdata-fixed/\">ABB 작업 평면 좌표계</a>를 기준으로 Target Plane을 재정의할 때 입력한다.",
    "en": "Redefines the Target Plane based on the <a href=\"/en/datatype/wobjdata-fixed/\">ABB Work Coordinate System</a>.",
    "optional": true
  },
  {
    "name": "Chaining",
    "type": "Boolean",
    "ko": "<a href=\"/datatype/wobjdata-fixed/\">작업평면(WorkObj)</a>과 타겟(RobTarget)의 관계를 고정한다. 뷰포트 상에서 작업평면을 변경할 때 타겟의 위치와 방향도 함께 변경할 수 있다.",
    "en": "Locks the relationship between the <a href=\"/en/datatype/wobjdata-fixed/\">Work Object (WorkObj)</a> and the target (<code>RobTarget</code>). Allows target position and orientation to change when the work object is modified in the viewport.",
    "optional": true
  },
  {
    "name": "Robot Base",
    "type": "Plane",
    "ko": "Orientation 탭의 Align X 를 켜면 나타난다. RobTarget의 +X축이 향할 기준 좌표계를 설정한다. 이 평면(Plane)의 원점이 정렬 타겟점이 되며, 일반적으로 로봇의 베이스 좌표계를 입력한다.",
    "en": "Appears when Align X (Orientation tab) is on. Sets the reference coordinate system that the +X axis of the <code>RobTarget</code> will point toward. The origin of this plane serves as the alignment target point, typically inputting the robot's base coordinate system.",
    "optional": true
  },
  {
    "name": "Align Weight",
    "type": "Number",
    "ko": "Orientation 탭의 Align X 를 켜면 나타난다. 원본 자세와 완전 정렬 자세 사이의 보간 비율을 설정한다. 0이면 원본 RobTarget 자세를 유지하고, 1이면 +X축이 Robot Base 원점을 완전히 향하도록 정렬한다.",
    "en": "Appears when Align X (Orientation tab) is on. Interpolation ratio between the original orientation and the fully aligned orientation. <code>0</code> = retains original <code>RobTarget</code> orientation, <code>1</code> = fully aligns the +X axis toward the <code>Robot Base</code> origin."
  }
];

export const main = "0_RobTarget.png";

export const outputs = [
  {
    "name": "Start Targets",
    "type": "RobTarget",
    "ko": "Output 탭의 Split Start 를 켜면 나타난다. 분리된 ABB Rapid RobTargets의 첫 번째 인덱스 데이터를 출력한다.",
    "en": "Appears when Split Start (Output tab) is on. Outputs the first branch data of ABB RAPID <code>RobTargets</code>."
  },
  {
    "name": "RobTargets",
    "type": "RobTarget",
    "ko": "변환된 전체 ABB Rapid RobTargets 데이터를 출력한다.",
    "en": "Outputs ABB RAPID <code>RobTargets</code> data."
  },
  {
    "name": "End Targets",
    "type": "RobTarget",
    "ko": "Output 탭의 Split End 를 켜면 나타난다. 분리된 ABB Rapid RobTargets의 마지막 인덱스 데이터를 출력한다.",
    "en": "Appears when Split End (Output tab) is on. Outputs the last branch data of ABB RAPID <code>RobTargets</code>."
  }
];
