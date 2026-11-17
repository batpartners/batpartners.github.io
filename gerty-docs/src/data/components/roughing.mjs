// Data for the Roughing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Cutting",
      "img": "roughing_tab1.png",
      "rows": [
        {
          "name": "Tool Diameter",
          "type": "Number",
          "ko": "엔드밀 지름 (mm). 공구 중심은 Model 에서 반경 + <strong>Radial</strong> 만큼 떨어지고, 소재 가장자리에서는 반경만큼 바깥에서 시작한다. 기본값은 20, 범위는 1–50.",
          "en": "Endmill diameter (mm). The tool center stays radius + <strong>Radial</strong> away from the Model and starts one radius outside the stock edge. Default: 20, range 1–50.",
          "y": [
            23.7,
            14.5
          ]
        },
        {
          "name": "Stepover",
          "type": "Number",
          "ko": "인접한 링(절삭 경로) 사이의 간격 (mm). 공구 지름보다 크면 링 사이에 재료가 남는다. 기본값은 10, 범위는 1–10.",
          "en": "Distance between adjacent rings (cutting passes) (mm). A value larger than the tool diameter leaves material between the rings. Default: 10, range 1–10.",
          "y": [
            42,
            14.5
          ]
        },
        {
          "name": "Stepdown",
          "type": "Number",
          "ko": "레이어 간격, 즉 한 레이어에서 내려가는 절삭 깊이 (mm). Stock 꼭대기에서 이 간격으로 내려가며, 맨 아래 레이어는 Model 바닥 + <strong>Axial</strong> 에 정확히 맞춘다(Stock 바닥이 더 높으면 Stock 바닥). 따라서 마지막 간격만 더 얕을 수 있다. 기본값은 50, 범위는 1–50.",
          "en": "Layer spacing, i.e. the depth of cut per layer (mm). Layers step down from the Stock top by this amount, and the bottom layer sits exactly at the Model floor + <strong>Axial</strong> (or at the Stock bottom if that is higher), so only the last step may be shallower. Default: 50, range 1–50.",
          "y": [
            60.4,
            14.5
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "단면 커브를 폴리라인으로 근사할 때의 허용 오차 (mm). 기본값은 0.3, 범위는 0.1–0.5.",
          "en": "Tolerance for approximating the section curves as polylines (mm). Default: 0.3, range 0.1–0.5.",
          "y": [
            78.7,
            14.5
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Allowance",
      "img": "roughing_tab2.png",
      "rows": [
        {
          "name": "Radial",
          "type": "Number",
          "ko": "공구 축에 수직인 방향(옆면)으로 남길 정삭 여유 (mm). 소재가 Model 보다 이 값 이하로만 큰 곳은 깎지 않는다. 기본값은 5, 범위는 1–20.",
          "en": "Allowance left perpendicular to the tool axis (sideways) for finishing (mm). Where the stock exceeds the Model by no more than this value, nothing is cut. Default: 5, range 1–20.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Axial",
          "type": "Number",
          "ko": "공구 축 방향(위쪽)으로 남길 여유 (mm). 평평한 바닥에서는 바닥 위에 남는 두께가 되고, 경사면·곡면에서는 Model 면을 이 값만큼 위로 올린 것처럼 피한다. 맨 아래 레이어는 Model 바닥 + 이 값에 두며, 다른 레이어의 높이는 바뀌지 않는다. 기본값은 0, 범위는 0–5.",
          "en": "Allowance left along the tool axis (upward) (mm). On a flat floor it is the thickness left above the floor; on sloped or curved faces the Model is avoided as if lifted by this value. The bottom layer sits at the Model floor + this value, and other layer heights do not change. Default: 0, range 0–5.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Path",
      "img": "roughing_tab3.png",
      "rows": [
        {
          "name": "Climb",
          "type": "Toggle",
          "ko": "절삭 방식을 정한다. 스핀들 시계 방향(CW · M3) 회전 기준이다.<br> • TRUE: 하향 절삭(Climb).<br> • FALSE: 상향 절삭(Conventional).<br>각 링의 진행 방향은 깎지 않은 재료가 어느 쪽에 있는지(<strong>Path Order</strong> 에 따라 다름)를 보고 링마다 정한다. 기본값은 FALSE.",
          "en": "Sets the milling mode, for a clockwise (CW · M3) spindle.<br> • TRUE: Climb milling.<br> • FALSE: Conventional milling.<br>The direction of each ring is chosen from the side the uncut material is on, which depends on <strong>Path Order</strong>. Default: FALSE.",
          "y": [
            21.3,
            12
          ]
        },
        {
          "name": "Path Order",
          "type": "Dropdown",
          "ko": "한 레이어 안에서 링을 깎는 순서. 이미 깎은 링에 붙은 링으로 이어 가며, 영역이 갈라지면 한쪽을 끝낸 뒤 다음 영역으로 넘어간다.<br> • Outer-Inner: 영역 경계(소재 바깥)에서 안쪽으로. 첫 링은 소재 밖(공중) 구간이 있으면 그곳에서 시작한다. 영역 안에 섬처럼 선 Model 의 둘레는 안쪽에서 되짚어 나오며 깎아, Model 에 붙은 링을 마지막에 깎는다.<br> • Inner-Outer: 영역 가운데에서 바깥으로.<br> • Alternating: 레이어마다 두 순서를 번갈아 쓴다.<br>기본값은 Outer-Inner.",
          "en": "Order of the rings within a layer. Each ring follows on from an adjacent ring already cut; where the region splits, one side is finished before moving on to the next.<br> • Outer-Inner: From the region boundary (outside the stock) inward. The first ring starts on a stretch outside the stock (in the air) when there is one. Around a Model standing as an island, the rings are cut on the way back out, with the ring next to the Model last.<br> • Inner-Outer: From the middle of the region outward.<br> • Alternating: Swaps between the two every layer.<br>Default: Outer-Inner.",
          "y": [
            36.5,
            12
          ]
        },
        {
          "name": "Seam",
          "type": "Dropdown",
          "ko": "각 링의 시작점.<br> • Nearest: 직전 링이 끝난 점에서 가장 가까운 점에서 시작해 링 사이 이동을 최소로 한다.<br> • Aligned: 링 시작점을 한 줄로 정렬한다. 가장 바깥 링은 <strong>Reference Plane</strong> 원점에 가장 가까운 꼭짓점에서 시작한다.<br>기본값은 Nearest.",
          "en": "Start point of each ring.<br> • Nearest: Starts at the point nearest to where the previous ring ended, which minimizes travel between rings.<br> • Aligned: Lines up the ring start points. The outermost ring starts at the vertex nearest the <strong>Reference Plane</strong> origin.<br>Default: Nearest.",
          "y": [
            51.8,
            12
          ]
        },
        {
          "name": "Clearance",
          "type": "Number",
          "ko": "리트랙트 여유 (mm). 링 사이 직선 이동이 이미 깎은 영역을 벗어나거나 공구 지름보다 길면 공구가 올라갔다가 내려온다. 이동 직선이 이미 다 깎은 레이어의 영역 안에 있으면 그 레이어 높이 + 이 값까지만, 아니면 Safe Z(Stock 꼭대기와 Model 꼭대기 중 높은 쪽 + 이 값)까지 올라간다. <strong>Stepover</strong> 가 공구 반지름보다 크면 항상 Safe Z 까지 올라간다. 기본값은 10, 범위는 0–50.",
          "en": "Retract clearance (mm). When a straight move between rings would leave the cleared region or is longer than the tool diameter, the tool lifts and comes back down. If the move stays inside the region of an already finished layer, it lifts only to that layer's height + this value; otherwise it lifts to Safe Z (the higher of the Stock top and the Model top, + this value). When <strong>Stepover</strong> exceeds the tool radius, it always lifts to Safe Z. Default: 10, range 0–50.",
          "y": [
            67.1,
            12
          ]
        },
        {
          "name": "Stay Down",
          "type": "Integer",
          "ko": "절삭 깊이를 유지한 채 붙어 있는 다음 링으로 넘어가는 이동의 최대 길이 (mm). 이동 직선이 방금 깎은 링에서 <strong>Stepover</strong> 이내에 머물면(뾰족한 모서리, 링을 따라 옮겨 가는 경우 등) 이 길이까지는 리트랙트 없이 넘어간다. 공구 지름 이하의 이동은 이 값과 관계없이 깊이를 유지하며, 0 이면 공구 지름 이하의 이동만 깊이를 유지한다. 기본값은 100, 범위는 0–500.",
          "en": "Maximum length (mm) of a move to the adjacent next ring made at cutting depth. While the straight move stays within one <strong>Stepover</strong> of the ring just cut (for example at sharp corners or when moving along a ring), moves up to this length are made without retracting. Moves no longer than the tool diameter stay at depth regardless of this value; at 0, only those moves stay at depth. Default: 100, range 0–500.",
          "y": [
            82.3,
            12
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "roughing_tab4.png",
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
    "name": "Model",
    "type": "Geometry",
    "ko": "남길 최종 형상 (닫힌 Brep 또는 Mesh). 여러 개를 연결하면 하나로 합쳐서 본다.",
    "en": "Final shape to keep (closed Brep or Mesh). Multiple objects are treated as one."
  },
  {
    "name": "Stock",
    "type": "Geometry",
    "optional": true,
    "ko": "깎기 전의 소재 덩어리 (닫힌 Brep 또는 Mesh). 옵션 입력으로 표시되지만 실제로는 필요하며, 연결하지 않으면 경로를 만들지 않는다.",
    "en": "Raw stock before machining (closed Brep or Mesh). Although marked optional, it is required: no toolpath is generated without it."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "기준 평면. Z축이 공구 축이며 공구는 +Z 쪽에서 내려온다. 레이어는 이 Z축을 따라 쌓이고, 원점은 <strong>Seam</strong> 이 Aligned 일 때의 기준이 된다. 기본값은 WorldXY.",
    "en": "Reference plane. Its Z axis is the tool axis, and the tool comes down from +Z. Layers stack along this axis, and the origin is the reference for the Aligned <strong>Seam</strong>. Default: WorldXY."
  }
];

export const main = "roughing_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "황삭 경로의 타겟 평면. Branch 는 {레이어, 경로} 로 나뉘며 가공 순서(위 레이어부터)로 정렬된다.",
    "en": "Target planes of the roughing toolpath. Branches are {layer, path}, sorted in machining order (top layer first)."
  },
  {
    "name": "Pattern",
    "type": "Curve",
    "ko": "황삭 경로 폴리라인 (링 사이 연결과 리트랙트 점 포함). Branch 는 {레이어} 로 나뉜다.",
    "en": "Roughing toolpath polylines, including the links between rings and the retract points. Branches are {layer}."
  }
];
