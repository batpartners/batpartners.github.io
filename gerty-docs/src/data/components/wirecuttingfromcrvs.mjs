// Data for the Wire Cutting from Curves page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Cutting",
      "img": "wirecuttingfromcrvs_tab1.png",
      "rows": [
        {
          "name": "Spacing",
          "type": "Number",
          "ko": "타겟 사이의 간격 (mm). 두 레일 중 더 많이 움직이는 쪽을 기준으로 고르게 등분하므로, 어느 레일에서 재도 간격이 이 값을 넘지 않는다. 레일이 꺾이는 점(kink) 사이 구간마다 따로 등분한다. 기본값은 10, 범위는 5–200.",
          "en": "Spacing between targets (mm). The path is divided evenly along whichever rail moves more, so the spacing on either rail does not exceed this value. Each section between kinks in the rails is divided separately. Default: 10, range 5–200.",
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
      "img": "wirecuttingfromcrvs_tab2.png",
      "rows": [
        {
          "name": "Dir Flip",
          "type": "Toggle",
          "ko": "절단 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the cutting direction. Default: FALSE.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Tool Flip",
          "type": "Toggle",
          "ko": "툴 방향을 반전한다. 기본값은 FALSE.",
          "en": "Reverses the tool orientation. Default: FALSE.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Extension",
          "type": "Number",
          "ko": "경로의 시작과 끝을 진행 방향으로 연장하는 거리 (mm). 기본값은 0, 범위는 0–100.",
          "en": "Distance to extend the start and end of the toolpath along the travel direction (mm). Default: 0, range 0–100.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Wrist",
      "img": "wirecuttingfromcrvs_tab3.png",
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
      "img": "wirecuttingfromcrvs_tab4.png",
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
    "name": "Rail A",
    "type": "Curve",
    "ko": "룰드 서피스를 정의하는 첫 번째 레일 커브. 리스트를 연결하면 Rail B 와 인덱스 순서로 쌍을 이루며, 개수가 적은 쪽은 마지막 항목을 반복한다.",
    "en": "First rail curve that defines the ruled surface. Lists are paired with Rail B by index, and the shorter list repeats its last item."
  },
  {
    "name": "Rail B",
    "type": "Curve",
    "ko": "룰드 서피스를 정의하는 두 번째 레일 커브. Rail A 와 인덱스 순서로 쌍을 이룬다.",
    "en": "Second rail curve that defines the ruled surface. Paired with Rail A by index."
  },
  {
    "name": "Wrist",
    "type": "Geometry",
    "optional": true,
    "ko": "각 타겟 평면의 Z(법선)가 향하도록 지향시키는 Wrist 객체 (Point 또는 Curve, 리스트 가능). 여러 객체를 쌍에 배분하는 방식은 Wrist 탭의 Wrist Mode 로 정한다. 연결하지 않으면 Wrist 지향 없이 경로를 만든다.",
    "en": "Wrist objects (Point or Curve, list allowed) that each target's Z (normal) is steered toward. How they are assigned to the pairs is set by Wrist Mode in the Wrist tab. When not connected, no Wrist steering is applied."
  }
];

export const main = "wirecuttingfromcrvs_main.png";

export const outputs = [
  {
    "name": "Target Planes",
    "type": "Plane",
    "ko": "생성된 열선 절단 경로의 타겟 평면. 레일 쌍마다 하나의 가지(branch)로 출력한다.",
    "en": "Target planes of the generated hot-wire cutting toolpath. Each rail pair is output as one branch."
  },
  {
    "name": "Spans",
    "type": "Curve",
    "ko": "두 레일 커브를 이어 룰드 서피스를 이루는 직선 세그먼트(Span). 레일 쌍마다 하나의 가지로 출력한다.",
    "en": "Ruling lines (spans) that connect the two rail curves to form the ruled surface. Each rail pair is output as one branch."
  }
];
