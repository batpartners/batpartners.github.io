// Data for the Fly-by Tree page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Flyby Targets",
      "img": "flybytree_tab1.png",
      "rows": [
        {
          "name": "Target Count",
          "type": "Integer",
          "ko": "전이 경로 하나를 구성하는 타겟 평면의 개수. 기본값은 10, 범위는 2–100.",
          "en": "Number of target planes that make up each transition path. Default: 10, range 2–100.",
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
      "label": "Offset",
      "img": "flybytree_tab2.png",
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
          "ko": "전이 경로의 진입(Approach) 방향을 일괄 지정한다.<br> • Motion Dir: 각 Branch 시작부 모션 벡터의 역방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 시작 타겟 평면의 해당 축 방향.<br>기본값은 Z Axis.",
          "en": "Sets one approach direction for all transition paths.<br> • Motion Dir: Reverse of the motion vector at the start of each branch.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: The corresponding axis of the start target plane.<br>Default: Z Axis.",
          "y": [
            36.5,
            12
          ]
        },
        {
          "name": "Departure Dir",
          "type": "Dropdown",
          "ko": "전이 경로의 진출(Departure) 방향을 일괄 지정한다.<br> • Motion Dir: 각 Branch 끝부 모션 벡터 방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 마지막 타겟 평면의 해당 축 방향.<br>기본값은 Z Axis.",
          "en": "Sets one departure direction for all transition paths.<br> • Motion Dir: The motion vector at the end of each branch.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: The corresponding axis of the last target plane.<br>Default: Z Axis.",
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
      "img": "flybytree_tab3.png",
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
      "label": "Preview",
      "img": "flybytree_tab4.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기. 기본값은 1.5.",
          "en": "Size of the target plane frames shown in the preview. Default: 1.5.",
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
    "name": "Target Planes0",
    "type": "Plane",
    "ko": "전이 경로 생성의 기준이 되는 타겟 평면 DataTree (첫 번째 경로 묶음).",
    "en": "Target plane DataTree used as the basis for flyby path generation (first path tree).",
    "optional": true
  },
  {
    "name": "Target Planes1",
    "type": "Plane",
    "ko": "전이 경로 생성의 기준이 되는 타겟 평면 DataTree (두 번째 경로 묶음).",
    "en": "Target plane DataTree used as the basis for flyby path generation (second path tree).",
    "optional": true
  }
];

export const main = "flybytree_main.png";

export const outputs = [
  {
    "name": "Flyby Targets",
    "type": "Plane",
    "ko": "생성된 전이 경로(Flyby) 타겟 평면 DataTree.",
    "en": "DataTree of the generated flyby transition target planes."
  }
];
