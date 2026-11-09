// Data for the Fly-by Branch page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Basic",
      "img": "1_FlybyPlane_11.png",
      "rows": [
        {
          "name": "Approaching Dir.",
          "type": "Dropdown",
          "ko": "전이 경로의 진입 (Approach) 방향을 일괄 지정.<br> • Motion Dir: 각 브랜치 시작부 모션 벡터의 역방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 시작 타겟 평면의 해당 축 방향.",
          "en": "Batch specifies the approach direction of the transition path.<br> • Motion Dir: Reverse direction of the motion vector at the start of each branch.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: Corresponding axis direction of the starting target plane.",
          "y": [
            19.2,
            12.4
          ]
        },
        {
          "name": "Leaving Dir.",
          "type": "Dropdown",
          "ko": "전이 경로의 진출 (Departure) 방향을 일괄 지정.<br> • Motion Dir: 각 브랜치 끝부 모션 벡터 방향.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: 마지막 타겟 평면의 해당 축 방향.",
          "en": "Batch specifies the departure direction of the transition path.<br> • Motion Dir: Direction of the motion vector at the end of each branch.<br> • Z/Y/X Axis · Negative Z/Y/X Axis: Corresponding axis direction of the final target plane.",
          "y": [
            36,
            10.4
          ]
        },
        {
          "name": "Approaching Dist.(mm)",
          "type": "Number",
          "ko": "전이 경로의 진입 지점을 첫 타겟 평면에서 이격할 거리 (mm).",
          "en": "Distance (mm) to offset the approach point of the transition path from the first target plane.",
          "y": [
            49.6,
            13.6
          ]
        },
        {
          "name": "Leaving Dist.(mm)",
          "type": "Number",
          "ko": "전이 경로의 진출 지점을 마지막 타겟 평면에서 이격할 거리 (mm).",
          "en": "Distance (mm) to offset the departure point of the transition path from the last target plane.",
          "y": [
            64.8,
            12
          ]
        },
        {
          "name": "Target Count",
          "type": "Number",
          "ko": "전이 경로를 구성하는 타겟 평면의 개수.",
          "en": "Number of target planes constituting the transition path.",
          "y": [
            80,
            12
          ]
        }
      ]
    },
    {
      "label": "Advanced",
      "img": "1_FlybyPlane_20.png",
      "rows": [
        {
          "name": "Continuity Type",
          "type": "Dropdown",
          "ko": "전이 경로 블렌드의 연속성 유형.<br> [Position]: 위치 연속 (G0).<br> [Tangency]: 접선 연속 (G1).<br> [Curvature]: 곡률 연속 (G2).",
          "en": "Continuity type of the transition path blend.<br> [Position]: Position continuity (G0).<br> [Tangency]: Tangent continuity (G1).<br> [Curvature]: Curvature continuity (G2).",
          "y": [
            27.6,
            19.5
          ]
        },
        {
          "name": "Bulge Start",
          "type": "Number",
          "ko": "블렌드 시작점의 불룩함 (Bulge) 정도.",
          "en": "Bulge degree at the blend start point.",
          "y": [
            49.4,
            17.2
          ]
        },
        {
          "name": "Bulge End",
          "type": "Number",
          "ko": "블렌드 끝점의 불룩함 (Bulge) 정도.",
          "en": "Bulge degree at the blend end point.",
          "y": [
            71.3,
            17.2
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "1_FlybyPlane_21.png",
      "rows": [
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기.",
          "en": "Size of the target plane frames shown in the preview.",
          "y": [
            53.1,
            26.5
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
    "ko": "전이경로 생성 기준이 될 타겟 평면 DataTree. 경로 Segment 단위로 Branch 구성.",
    "en": "Target plane DataTree used as the basis for transition path generation. Branches are organized by path segment units."
  }
];

export const main = "1_FlybyPlane.png";

export const outputs = [
  {
    "name": "Fly-by Targets",
    "type": "Plane",
    "ko": "생성된 전이 경로(Fly-by) 타겟 평면.",
    "en": "Target planes of the generated fly-by paths."
  }
];
