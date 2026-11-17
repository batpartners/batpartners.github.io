// Data for the Fly-by Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Flyby Targets",
      "img": "flybybranch_tab1.png",
      "rows": [
        {
          "name": "Target Count",
          "type": "Integer",
          "ko": "전이 경로 하나를 구성하는 타겟 평면의 개수. 기본값은 10, 범위는 2–100.",
          "en": "Number of target planes that make up each transition path. Default: 10, range 2–100.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Lead In/Out",
          "type": "Toggle",
          "ko": "첫 세그먼트 앞의 진입 타겟(경로 <code>{0}</code>)과 마지막 세그먼트 뒤의 진출 타겟(경로 <code>{2N}</code>, N 은 세그먼트 수)을 만든다. 이 둘은 전이 경로가 아닌 단독 타겟으로 출력된다.<br> • TRUE: 진입·진출 타겟을 만든다.<br> • FALSE: 세그먼트 사이의 전이 경로만 만든다.<br>기본값은 TRUE.",
          "en": "Creates the lead-in target (path <code>{0}</code>) before the first segment and the lead-out target (path <code>{2N}</code>, where N is the number of segments) after the last segment. Both are output as stand-alone targets, not as transition paths.<br> • TRUE: Creates the lead-in and lead-out targets.<br> • FALSE: Creates only the transition paths between segments.<br>Default: TRUE.",
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
      "label": "Offset",
      "img": "flybybranch_tab2.png",
      "rows": [
        {
          "name": "Link",
          "type": "Toggle",
          "ko": "<strong>Approach (mm)</strong> 와 <strong>Departure (mm)</strong> 값을 연동한다.<br> • TRUE: 한쪽을 조절하면 다른 쪽도 같은 값이 된다.<br> • FALSE: 각각 따로 조절한다.<br>기본값은 TRUE.",
          "en": "Links the <strong>Approach (mm)</strong> and <strong>Departure (mm)</strong> values.<br> • TRUE: Adjusting one sets the other to the same value.<br> • FALSE: Each is adjusted independently.<br>Default: TRUE.",
          "y": [
            21.3,
            12
          ]
        },
        {
          "name": "Approach Dir",
          "type": "Dropdown",
          "ko": "전이 경로의 진입(Approach) 방향을 정한다.<br> • Motion Dir: 각 세그먼트 시작부 모션 벡터의 역방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 시작 타겟 평면의 해당 축 방향.<br> • Custom: 컴포넌트에 <strong>Approach Dir</strong> 벡터 입력이 추가되며, 이 벡터로 세그먼트별 진입 방향을 지정한다.<br>기본값은 Z Axis.",
          "en": "Sets the approach direction of the transition paths.<br> • Motion Dir: Reverse of the motion vector at the start of each segment.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: The corresponding axis of the start target plane.<br> • Custom: Adds an <strong>Approach Dir</strong> vector input to the component; its vectors set the approach direction per segment.<br>Default: Z Axis.",
          "y": [
            36.5,
            12
          ]
        },
        {
          "name": "Departure Dir",
          "type": "Dropdown",
          "ko": "전이 경로의 진출(Departure) 방향을 정한다.<br> • Motion Dir: 각 세그먼트 끝부 모션 벡터 방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 마지막 타겟 평면의 해당 축 방향.<br> • Custom: 컴포넌트에 <strong>Departure Dir</strong> 벡터 입력이 추가되며, 이 벡터로 세그먼트별 진출 방향을 지정한다.<br>기본값은 Z Axis.",
          "en": "Sets the departure direction of the transition paths.<br> • Motion Dir: The motion vector at the end of each segment.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: The corresponding axis of the last target plane.<br> • Custom: Adds a <strong>Departure Dir</strong> vector input to the component; its vectors set the departure direction per segment.<br>Default: Z Axis.",
          "y": [
            51.8,
            12
          ]
        },
        {
          "name": "Approach (mm)",
          "type": "Number",
          "ko": "전이 경로의 진입 지점을 첫 타겟 평면에서 띄우는 거리 (mm). 기본값은 50, 범위는 0–100.",
          "en": "Distance from the first target plane to the approach point of the transition path (mm). Default: 50, range 0–100.",
          "y": [
            67.1,
            12
          ]
        },
        {
          "name": "Departure (mm)",
          "type": "Number",
          "ko": "전이 경로의 진출 지점을 마지막 타겟 평면에서 띄우는 거리 (mm). 기본값은 50, 범위는 0–100.",
          "en": "Distance from the last target plane to the departure point of the transition path (mm). Default: 50, range 0–100.",
          "y": [
            82.3,
            12
          ]
        }
      ]
    },
    {
      "label": "Blend",
      "img": "flybybranch_tab3.png",
      "rows": [
        {
          "name": "Continuity Type",
          "type": "Dropdown",
          "ko": "전이 경로 블렌드의 연속성 유형.<br> • Position: 위치 연속 (G0).<br> • Tangency: 접선 연속 (G1).<br> • Curvature: 곡률 연속 (G2).<br>기본값은 Position.",
          "en": "Continuity type of the transition path blend.<br> • Position: Positional continuity (G0).<br> • Tangency: Tangent continuity (G1).<br> • Curvature: Curvature continuity (G2).<br>Default: Position.",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "Link",
          "type": "Toggle",
          "ko": "<strong>Bulge Start</strong> 와 <strong>Bulge End</strong> 값을 연동한다.<br> • TRUE: 한쪽을 조절하면 다른 쪽도 같은 값이 된다.<br> • FALSE: 각각 따로 조절한다.<br>기본값은 TRUE.",
          "en": "Links the <strong>Bulge Start</strong> and <strong>Bulge End</strong> values.<br> • TRUE: Adjusting one sets the other to the same value.<br> • FALSE: Each is adjusted independently.<br>Default: TRUE.",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Bulge Start",
          "type": "Number",
          "ko": "블렌드 시작점의 불룩함(Bulge) 정도. 기본값은 1, 범위는 0–1.",
          "en": "Bulge amount at the start point of the blend. Default: 1, range 0–1.",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Bulge End",
          "type": "Number",
          "ko": "블렌드 끝점의 불룩함(Bulge) 정도. 기본값은 1, 범위는 0–1.",
          "en": "Bulge amount at the end point of the blend. Default: 1, range 0–1.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    },
    {
      "label": "Rotation",
      "img": "flybybranch_tab4.png",
      "rows": [
        {
          "name": "Interpolation",
          "type": "Dropdown",
          "ko": "전이 경로 타겟의 자세(Orientation) 보간 방식.<br> • Legacy: 이전 버전의 방식. 시작·끝 자세 차이가 클수록 양 끝에서는 회전이 느리고 가운데에서는 빠르다.<br> • SLERP: 타겟 사이의 회전각이 균일하다. 시작·끝 자세가 180° 차이 나도 끝 자세가 일치한다.<br>기본값은 SLERP.",
          "en": "Orientation interpolation method of the transition targets.<br> • Legacy: The previous method. The larger the difference between the start and end poses, the slower the rotation near both ends and the faster in the middle.<br> • SLERP: Uniform rotation angle between targets. The end pose matches even when the start and end poses are 180° apart.<br>Default: SLERP.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Flip Rotation",
          "type": "Toggle",
          "ko": "시작·끝 자세 사이 회전각이 <strong>Flip Over (°)</strong> 이상인 전이 경로의 회전 방향을 반대로 바꾼다. 이때 회전각은 360° − 회전각이 된다. <strong>Interpolation</strong> 이 SLERP 일 때만 적용된다.<br> • TRUE: 반대 방향으로 회전한다.<br> • FALSE: 짧은 쪽으로 회전한다.<br>기본값은 FALSE.",
          "en": "Reverses the rotation direction of transitions whose start-to-end rotation is <strong>Flip Over (°)</strong> or more, so they rotate 360° minus that angle. Applies only when <strong>Interpolation</strong> is SLERP.<br> • TRUE: Rotates the opposite way.<br> • FALSE: Rotates the shorter way.<br>Default: FALSE.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Flip Over (°)",
          "type": "Integer",
          "ko": "<strong>Flip Rotation</strong> 을 적용하는 기준 회전각 (°). 시작·끝 자세 사이 회전각이 이 값 이상인 전이 경로만 반전한다. 기본값은 120, 범위는 0–180.",
          "en": "Rotation angle threshold (°) for <strong>Flip Rotation</strong>. Only transitions whose start-to-end rotation is at least this value are reversed. Default: 120, range 0–180.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "flybybranch_tab5.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기. 기본값은 1.5, 범위는 1.5–5.",
          "en": "Size of the target plane frames shown in the preview. Default: 1.5, range 1.5–5.",
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
    "name": "Target Planes",
    "type": "Plane",
    "ko": "전이 경로 생성의 기준이 되는 타겟 평면 DataTree. 이 모드에서는 Branch 하나가 경로 세그먼트 하나이므로, 세그먼트마다 Branch 를 나눠 구성한다.",
    "en": "DataTree of target planes used as the basis for flyby path generation. In this mode each branch is one toolpath segment, so organize it as one branch per segment."
  }
];

export const main = "flybybranch_main.png";

export const outputs = [
  {
    "name": "Flyby Targets",
    "type": "Plane",
    "ko": "생성된 전이 경로(Flyby) 타겟 평면 DataTree. 짝수 경로 <code>{0}</code>, <code>{2}</code>, … 에 출력되며, <code>{0}</code> 과 <code>{2N}</code> 사이의 경로에는 세그먼트 사이의 전이 경로가 들어간다. <strong>Lead In/Out</strong> 이 TRUE 이면 <code>{0}</code> 에 진입 타겟, <code>{2N}</code> 에 진출 타겟이 단독 타겟으로 들어간다. 메인 경로를 홀수 경로 <code>{1}</code>, <code>{3}</code>, … 에 두고 합쳐서 쓴다.",
    "en": "DataTree of the generated flyby transition target planes. It is output on even paths (<code>{0}</code>, <code>{2}</code>, …): the paths between <code>{0}</code> and <code>{2N}</code> hold the transitions between segments, and when <strong>Lead In/Out</strong> is TRUE, <code>{0}</code> holds the lead-in target and <code>{2N}</code> the lead-out target as stand-alone targets. Place the main toolpath on odd paths <code>{1}</code>, <code>{3}</code>, … and merge the two."
  },
  {
    "name": "Flyby Curves",
    "type": "Curve",
    "ko": "전이 경로의 블렌드 커브 DataTree. <strong>Flyby Targets</strong> 와 같은 경로 번호를 쓰며, 단독 타겟 경로(<code>{0}</code>, <code>{2N}</code>)는 포함하지 않는다.",
    "en": "DataTree of the transition blend curves. It uses the same path numbers as <strong>Flyby Targets</strong>, without the stand-alone target paths (<code>{0}</code>, <code>{2N}</code>)."
  }
];
