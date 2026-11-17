// Data for the Wire Cutting from Surface page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Cutting",
      "img": "wirecuttingfromsrf_tab1.png",
      "rows": [
        {
          "name": "Spacing",
          "type": "Number",
          "ko": "타겟 사이의 간격 (mm). Span 양 끝의 두 레일 중 더 많이 움직이는 쪽을 기준으로 고르게 등분하므로, 어느 레일에서 재도 간격이 이 값을 넘지 않는다. 기본값은 10, 범위는 5–200.",
          "en": "Spacing between targets (mm). The path is divided evenly along whichever of the two rails at the span ends moves more, so the spacing on either rail does not exceed this value. Default: 10, range 5–200.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Parameter",
          "type": "Number",
          "ko": "타겟 평면의 원점으로 쓰는 Span 위의 파라미터 (0.0–1.0). 모든 타겟에 같은 값을 적용한다. 타겟마다 다른 값을 주려면 우클릭 메뉴의 Use Variable Parameters 를 켠다 (이때 이 슬라이더는 숨겨진다). 기본값은 0.5.",
          "en": "Parameter on each span used as the target plane origin (0.0–1.0). The same value applies to all targets. For per-target values, turn on Use Variable Parameters in the right-click menu (this slider is then hidden). Default: 0.5.",
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
      "label": "Path",
      "img": "wirecuttingfromsrf_tab2.png",
      "rows": [
        {
          "name": "Dir Flip",
          "type": "Toggle",
          "ko": "절단 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the cutting direction. Default: FALSE.",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "Tool Flip",
          "type": "Toggle",
          "ko": "툴 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the tool orientation. Default: FALSE.",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "UV Flip",
          "type": "Toggle",
          "ko": "열선 경로의 UV 방향을 바꾼다. U·V 양방향이 모두 1차(degree 1)인 룰드 서피스에서만 작동한다.<br> • TRUE: V 방향.<br> • FALSE: U 방향.<br>기본값은 FALSE.",
          "en": "Switches the UV direction of the hot-wire path. Works only when the ruled surface is degree 1 in both U and V.<br> • TRUE: V direction.<br> • FALSE: U direction.<br>Default: FALSE.",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Extension",
          "type": "Number",
          "ko": "경로의 시작과 끝을 진행 방향으로 연장하는 거리 (mm). 기본값은 0, 범위는 0–100.",
          "en": "Distance to extend the start and end of the toolpath along the travel direction (mm). Default: 0, range 0–100.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    },
    {
      "label": "Wrist",
      "img": "wirecuttingfromsrf_tab3.png",
      "rows": [
        {
          "name": "Wrist Mode",
          "type": "Dropdown",
          "ko": "Wrist 입력의 객체를 쌍에 배분하는 방식을 고른다.<br> • Match: 쌍 i 에 Wrist 항목 i 를 대응한다 (이전 버전과 같은 동작).<br> • Sweep: 모든 쌍에 걸쳐 Wrist 를 한 번 훑으며 배분한다. Point 는 1개면 고정점, 쌍 개수(N)만큼이면 쌍별 기준점, N+1개면 쌍 사이의 분절점으로 쓴다. Curve 는 1개면 길이로 N등분하고, N개면 쌍마다 하나씩 쓴다. 개수가 이와 다르면 앞에서부터 맞는 개수만 사용한다.<br>기본값은 Match.",
          "en": "Selects how the Wrist objects are assigned to the pairs.<br> • Match: pair i uses Wrist item i (the earlier behavior).<br> • Sweep: the Wrist objects are swept once across all pairs. One point is used as a fixed point, N points (one per pair) as per-pair anchors, and N+1 points as breakpoints between pairs. One curve is split into N parts by length, and N curves are used one per pair. With any other count, only the leading items that fit are used.<br>Default: Match.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Wrist Blend",
          "type": "Toggle",
          "ko": "Sweep 모드에서 Wrist 점으로 만드는 가이드의 형태를 정한다.<br> • TRUE: 점을 지나는 3차 보간 커브.<br> • FALSE: 점을 잇는 폴리라인.<br>기본값은 FALSE.",
          "en": "Sets the shape of the guide built from the Wrist points in Sweep mode.<br> • TRUE: a degree-3 interpolated curve through the points.<br> • FALSE: a polyline through the points.<br>Default: FALSE.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "wirecuttingfromsrf_tab4.png",
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
    "name": "Surface",
    "type": "Surface",
    "ko": "열선 절단 경로를 만들 룰드 서피스. 여러 개를 연결하면 서피스마다 하나의 쌍으로 처리한다.",
    "en": "Ruled surface to generate the hot-wire cutting toolpath from. When several are connected, each surface is handled as one pair."
  },
  {
    "name": "Wrist",
    "type": "Geometry",
    "optional": true,
    "ko": "각 타겟 평면의 Z(법선)가 향하도록 지향시키는 Wrist 객체 (Point 또는 Curve, 리스트 가능). 여러 객체를 쌍에 배분하는 방식은 Wrist 탭의 Wrist Mode 로 정한다. 연결하지 않으면 Wrist 지향 없이 경로를 만든다.",
    "en": "Wrist objects (Point or Curve, list allowed) that each target's Z (normal) is steered toward. How they are assigned to the pairs is set by Wrist Mode in the Wrist tab. When not connected, no Wrist steering is applied."
  }
];

export const main = "wirecuttingfromsrf_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 열선 절단 경로의 타겟 평면. 서피스마다 하나의 가지(branch)로 출력한다.",
    "en": "Target planes of the generated hot-wire cutting toolpath. Each surface is output as one branch."
  },
  {
    "name": "Spans",
    "type": "Curve",
    "ko": "룰드 서피스를 이루는 직선 세그먼트(Span). 서피스마다 하나의 가지로 출력한다.",
    "en": "Ruling lines (spans) that make up the ruled surface. Each surface is output as one branch."
  }
];
