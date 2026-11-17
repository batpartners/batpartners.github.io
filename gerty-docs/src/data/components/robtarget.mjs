// Data for the RobTarget page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RobTarget",
      "img": "robtarget_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>RobTarget</code> 의 변수명을 정의한다. 이 변수는 로봇의 목표 위치와 자세를 저장하는 고유 식별자로 쓰인다. 기본값은 P.",
          "en": "Defines the variable name of the <code>RobTarget</code> to create. The variable is the unique identifier that stores the robot's target position and orientation. Default: P.",
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
      "label": "Orientation",
      "img": "robtarget_tab2.png",
      "rows": [
        {
          "name": "Align X",
          "type": "Toggle",
          "ko": "RobTarget 의 +X축이 Robot Base 원점을 향하도록 자세를 보간·보정한다. 켜면 <strong>Robot Base</strong> (Plane) 와 <strong>Align Weight</strong> (0 = 원본, 1 = 완전 정렬) 입력이 추가된다. 기본값은 FALSE.",
          "en": "Blends the orientation of each RobTarget so that its +X axis points toward the Robot Base origin. When on, adds the <strong>Robot Base</strong> (Plane) and <strong>Align Weight</strong> (0 = original, 1 = fully aligned) inputs. Default: FALSE.",
          "y": [
            54.6,
            30.9
          ]
        }
      ]
    },
    {
      "label": "Output",
      "img": "robtarget_tab3.png",
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
    "name": "Target Planes",
    "type": "Plane",
    "ko": "RobTarget 으로 변환할 대상 평면(Plane)을 입력한다.",
    "en": "Planes to convert into <code>RobTarget</code>s."
  },
  {
    "name": "Z Rotation",
    "type": "Number",
    "ko": "각 RobTarget 을 자체 Z축을 기준으로 회전시킨다 (°).",
    "en": "Rotates each <code>RobTarget</code> around its own Z axis (°)."
  },
  {
    "name": "WobjData",
    "type": "WobjData",
    "optional": true,
    "ko": "<a href=\"/datatype/wobjdata-fixed/\">ABB 작업 평면 좌표계</a>를 기준으로 Target Planes 를 재정의할 때 연결한다.",
    "en": "Connect to redefine the Target Planes relative to the <a href=\"/en/datatype/wobjdata-fixed/\">ABB work object coordinate system</a>."
  },
  {
    "name": "Chaining",
    "type": "Boolean",
    "optional": true,
    "ko": "<a href=\"/datatype/wobjdata-fixed/\">작업평면(WorkObj)</a>과 타겟(RobTarget)의 공간 관계를 고정한다. 뷰포트에서 작업평면을 변환하면 출력 RobTarget 의 위치와 방향도 함께 바뀐다.",
    "en": "Locks the spatial relationship between the <a href=\"/en/datatype/wobjdata-fixed/\">work object (WorkObj)</a> and the target (<code>RobTarget</code>). When the work-object plane is transformed in the viewport, the output RobTarget position and orientation update to match."
  }
];

export const main = "robtarget_main.png";

export const outputs = [
  {
    "name": "RobTargets",
    "type": "RobTarget",
    "ko": "변환된 전체 ABB RAPID RobTarget 데이터를 출력한다. 외부축 값은 9E9(미사용)로 설정된다.",
    "en": "Outputs the converted ABB RAPID <code>RobTarget</code> data. External axis values are set to 9E9 (unused)."
  }
];
