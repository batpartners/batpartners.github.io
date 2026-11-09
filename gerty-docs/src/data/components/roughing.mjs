// Data for the Roughing page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Tool",
      "img": "roughing_tab1.png",
      "rows": [
        {
          "name": "Tool Diameter",
          "type": "Number",
          "ko": "엔드밀 지름 (mm). 공구 중심은 Part 에서 반경 + <strong>Stock to Leave</strong> 만큼 떨어지고, 소재 가장자리에서는 반경만큼 바깥에서 시작한다. 기본값은 20, 범위는 1–50.",
          "en": "Endmill diameter (mm). The tool center stays radius + <strong>Stock to Leave</strong> away from the Part and starts one radius outside the stock edge. Default: 20, range 1–50.",
          "y": [
            17.3,
            10.6
          ]
        },
        {
          "name": "Stepover",
          "type": "Number",
          "ko": "인접한 링(절삭 경로) 사이의 간격 (mm). 공구 지름보다 크면 링 사이에 재료가 남는다. 기본값은 10, 범위는 1–10.",
          "en": "Distance between adjacent rings (cutting passes) (mm). A value larger than the tool diameter leaves material between the rings. Default: 10, range 1–10.",
          "y": [
            30.7,
            10.6
          ]
        },
        {
          "name": "Stepdown",
          "type": "Number",
          "ko": "레이어 간격, 즉 한 레이어에서 내려가는 절삭 깊이 (mm). Stock 꼭대기에서 이 간격으로 내려가며, 맨 아래 레이어는 Part 바닥 + <strong>Floor Stock</strong> 에 정확히 맞춘다. 따라서 마지막 간격만 더 얕을 수 있다. 기본값은 50, 범위는 1–50.",
          "en": "Layer spacing, i.e. the depth of cut per layer (mm). Layers step down from the Stock top by this amount, and the bottom layer sits exactly at the Part floor + <strong>Floor Stock</strong>, so only the last step may be shallower. Default: 50, range 1–50.",
          "y": [
            44.2,
            10.6
          ]
        },
        {
          "name": "Stock to Leave",
          "type": "Number",
          "ko": "Part 옆면에 남길 정삭 여유 (mm). 기본값은 0, 범위는 0–5.",
          "en": "Radial allowance left on the Part walls for finishing (mm). Default: 0, range 0–5.",
          "y": [
            57.6,
            10.6
          ]
        },
        {
          "name": "Floor Stock",
          "type": "Number",
          "ko": "Part 바닥과 윗면 위에 남길 여유 (mm). 맨 아래 레이어를 Part 바닥 + 이 값에 두고, 공구 끝 아래 이 높이 안에 있는 Part 윗면도 피한다. 다른 레이어의 높이는 바뀌지 않는다. 기본값은 0, 범위는 0–5.",
          "en": "Axial allowance left above the Part floor and top faces (mm). The bottom layer sits at the Part floor + this value, and Part top faces within this height below the tool tip are avoided. Other layer heights do not change. Default: 0, range 0–5.",
          "y": [
            71,
            10.6
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "단면 커브를 폴리라인으로 근사할 때의 허용 오차 (mm). 기본값은 0.3, 범위는 0.1–0.5.",
          "en": "Tolerance for approximating the section curves as polylines (mm). Default: 0.3, range 0.1–0.5.",
          "y": [
            84.5,
            10.6
          ]
        }
      ]
    },
    {
      "label": "Path",
      "img": "roughing_tab2.png",
      "rows": [
        {
          "name": "Climb",
          "type": "Toggle",
          "ko": "절삭 방식을 정한다. 스핀들 시계 방향(CW · M3) 회전 기준이다.<br> • TRUE: 하향 절삭(Climb).<br> • FALSE: 상향 절삭(Conventional).<br>각 링의 진행 방향은 깎지 않은 재료가 어느 쪽에 있는지(<strong>Path Order</strong> 에 따라 다름)를 보고 링마다 정한다. 기본값은 FALSE.",
          "en": "Sets the milling mode, for a clockwise (CW · M3) spindle.<br> • TRUE: Climb milling.<br> • FALSE: Conventional milling.<br>The direction of each ring is chosen from the side the uncut material is on, which depends on <strong>Path Order</strong>. Default: FALSE.",
          "y": [
            23.7,
            14.5
          ]
        },
        {
          "name": "Path Order",
          "type": "Dropdown",
          "ko": "한 레이어 안에서 링을 깎는 순서.<br> • Outer-Inner: 영역 경계(소재 바깥 · Part 둘레)에서 안쪽으로. 소재 쪽 첫 링은 공중에서 시작한다.<br> • Inner-Outer: 영역 가운데에서 바깥으로.<br> • Alternating: 레이어마다 두 순서를 번갈아 쓴다.<br>기본값은 Outer-Inner.",
          "en": "Order of the rings within a layer.<br> • Outer-Inner: From the region boundary (outside the stock, around the Part) inward. The first stock-side ring starts in the air.<br> • Inner-Outer: From the middle of the region outward.<br> • Alternating: Swaps between the two every layer.<br>Default: Outer-Inner.",
          "y": [
            42,
            14.5
          ]
        },
        {
          "name": "Seam",
          "type": "Dropdown",
          "ko": "각 링의 시작점.<br> • Nearest: 직전 링이 끝난 점에서 가장 가까운 점에서 시작해 링 사이 이동을 최소로 한다.<br> • Aligned: 링 시작점을 한 줄로 정렬한다. 가장 바깥 링은 <strong>Reference Plane</strong> 원점에 가장 가까운 꼭짓점에서 시작한다.<br>기본값은 Nearest.",
          "en": "Start point of each ring.<br> • Nearest: Starts at the point nearest to where the previous ring ended, which minimizes travel between rings.<br> • Aligned: Lines up the ring start points. The outermost ring starts at the vertex nearest the <strong>Reference Plane</strong> origin.<br>Default: Nearest.",
          "y": [
            60.4,
            14.5
          ]
        },
        {
          "name": "Clearance",
          "type": "Number",
          "ko": "리트랙트 높이를 정한다. 리트랙트 높이 = Stock 꼭대기 + 이 값 (mm). 링 사이 직선 이동이 이미 깎은 영역을 벗어나거나 공구 지름보다 길면 이 높이로 올라갔다가 내려온다. 기본값은 10, 범위는 0–50.",
          "en": "Sets the retract height: Stock top + this value (mm). When a straight move between rings would leave the cleared region or is longer than the tool diameter, the tool lifts to this height and comes back down. Default: 10, range 0–50.",
          "y": [
            78.7,
            14.5
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "roughing_tab3.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 타겟 평면 프레임의 크기. 기본값은 1.5.",
          "en": "Size of the target plane frames shown in the preview. Default: 1.5.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Part",
    "type": "Geometry",
    "ko": "남길 최종 형상 (닫힌 Brep 또는 Mesh). 여러 개를 연결하면 하나로 합쳐서 본다.",
    "en": "Final shape to keep (closed Brep or Mesh). Multiple objects are treated as one."
  },
  {
    "name": "Stock",
    "type": "Geometry",
    "optional": true,
    "ko": "깎기 전의 소재 덩어리 (닫힌 Brep 또는 Mesh). 연결하지 않으면 <strong>Reference Plane</strong> 에 정렬한 Part 의 바운딩 박스를 소재로 쓴다.",
    "en": "Raw stock before machining (closed Brep or Mesh). When not connected, the bounding box of the Part aligned to <strong>Reference Plane</strong> is used."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "기준 평면. Z축이 공구 축이며 공구는 +Z 쪽에서 내려온다. 레이어는 이 Z축을 따라 쌓이고, 원점은 <strong>Seam</strong> 이 Aligned 일 때의 기준이 된다. 연결하지 않으면 WorldXY 를 사용한다.",
    "en": "Reference plane. Its Z axis is the tool axis, and the tool comes down from +Z. Layers stack along this axis, and the origin is the reference for the Aligned <strong>Seam</strong>. Uses WorldXY when not connected.",
    "optional": true
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
