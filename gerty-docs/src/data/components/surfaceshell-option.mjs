// Data for the Surface Shell (Extra Option) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Slicing",
      "img": "surfaceshell-option_tab1.png",
      "rows": [
        {
          "name": "Layer Height",
          "type": "Number",
          "ko": "단일 적층 레이어의 높이(층 두께, mm)이다. 기본값은 10.",
          "en": "Height (layer thickness, mm) of a single deposition layer.",
          "y": [
            17.3,
            10.6
          ]
        },
        {
          "name": "First Layer Height",
          "type": "Number",
          "ko": "빌드 플레이트에 접하는 첫 번째 적층 레이어의 높이 (mm)이다. 기본값은 0.5.",
          "en": "Height (mm) of the first deposition layer on the build plate.",
          "y": [
            30.7,
            10.6
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로를 근사할 때의 허용 오차이다. Section Proxy 메시도 이 값을 기준으로 만든다. 기본값은 0.3.",
          "en": "Approximation tolerance for the path.",
          "y": [
            44.2,
            10.6
          ]
        },
        {
          "name": "Max Edge",
          "type": "Number",
          "ko": "경로 세그먼트의 최대 길이 (mm)이다. 기본값은 150 (범위 50~150).",
          "en": "Maximum allowed segment length (mm)",
          "y": [
            57.6,
            10.6
          ]
        },
        {
          "name": "Section Proxy",
          "type": "Toggle",
          "ko": "Brep 입력의 레이어 단면을 Tolerance 로 만든 프록시 메시에서 구한다(편차 ≤ Tolerance × 0.5).<br> • ON: 평면 슬라이싱이 10배 이상 빠르다. 틸팅과 AntiOverhang 계산에는 원본 Brep 을 사용한다.<br> • OFF: Brep 과 평면을 직접 교차한다(정확하지만 느림). 결과가 의심되면 OFF 로 바꿔 비교한다.<br>Mesh 입력에는 영향이 없다. 기본값은 ON.",
          "en": "Sections a Brep input with a proxy mesh built from Tolerance (deviation ≤ Tolerance×0.5). ON (default) is 10x+ faster for planar slicing; tilting and anti-overhang still use the original Brep. OFF = exact Brep-plane intersection (slow). No effect on Mesh input.",
          "y": [
            71,
            10.6
          ]
        },
        {
          "name": "Proxy Mesh Edge",
          "type": "Integer",
          "ko": "Section Proxy 메시의 최대 삼각형 변 길이를 Layer Height × 이 값으로 정한다. 1 이 가장 안전한 값이며, 모델의 가장 좁은 피처가 Layer Height × 이 값보다 넓을 때만 올린다. 너무 크면 단면에 섬(독립 루프)이 생긴다. Brep 입력에서 Section Proxy 가 ON 일 때만 적용된다. 기본값은 5.",
          "en": "Max triangle edge of the Section Proxy mesh = Layer Height × this value; 1 (default) is the safe line. Raise it only when the model's narrowest feature is wider than Layer Height × value — too large and islands appear in sections. Brep input with Section Proxy ON only.",
          "y": [
            84.5,
            10.6
          ]
        }
      ]
    },
    {
      "label": "Shell",
      "img": "surfaceshell-option_tab2.png",
      "rows": [
        {
          "name": "Shell Type",
          "type": "Dropdown",
          "ko": "외곽 경로(Shell)의 생성 방식을 고른다.<br> • Contour: 외곽선을 따라 링 형태의 외곽 경로를 만든다.<br> • Zigzag: Shell Thickness 폭의 밴드 안에서 두 레일 사이를 스트럿으로 오가는 위빙 경로를 만든다. Zigzag · Relief 탭과 관련 설정, 컴포넌트의 Phase Pattern 입력이 나타나고 End Fillet Type 과 Outline Shells 는 숨겨진다.<br>기본값은 Contour.",
          "en": "Select the method for generating shell paths.",
          "y": [
            20,
            12.2
          ]
        },
        {
          "name": "Layer Width",
          "type": "Number",
          "ko": "단일 적층 경로의 폭(비드 폭, mm)이다. 기본값은 5.",
          "en": "Width (bead width, mm) of a single deposition toolpath.",
          "y": [
            35.5,
            12.2
          ]
        },
        {
          "name": "End Fillet Type",
          "type": "Dropdown",
          "ko": "Outline Shells 가 2 이상일 때, 이격된 외곽 경로 끝단의 마감 유형을 고른다.<br> • Flat<br> • Round<br>기본값은 Flat. <strong>Shell Type</strong> 이 Zigzag 이면 숨겨진다.",
          "en": "Finishing type for the ends of offset outline deposition paths. (Valid when 'Outline Shells' is 2 or greater)",
          "y": [
            51,
            12.2
          ]
        },
        {
          "name": "Outline Shells",
          "type": "Integer",
          "ko": "입력 형상의 외곽선을 따라 생성할 외곽 경로(Shell)의 개수이다. 기본값은 1 (범위 1~5). <strong>Shell Type</strong> 이 Zigzag 이면 숨겨진다.",
          "en": "Number of outline paths (shells) to generate along the outer boundary of the input geometry.",
          "y": [
            66.5,
            12.2
          ]
        },
        {
          "name": "Path Order",
          "type": "Dropdown",
          "ko": "Outline Shells 가 2 이상일 때 한 레이어 안에서 외곽 링을 적층하는 순서이다.<br> • Outer-Inner: 바깥 링부터 안쪽으로.<br> • Inner-Outer: 안쪽 링부터 바깥으로.<br> • Alternating: 레이어마다 두 순서를 번갈아 적용한다(짝수 층 Outer-Inner, 홀수 층 Inner-Outer). 열 집중을 분산할 때 쓴다.<br>기본값은 Outer-Inner. Outline Shells 가 1 이면 영향이 없다. Zigzag 에서는 위빙 밴드(Mid)와 경계 패스(Inner/Outer)의 구성을 정한다(예: Mid Weaving Only).",
          "en": "Deposition order of the shell rings within a layer when Shell Count ≥ 2. Outer-Inner starts at the outermost ring, Inner-Outer at the innermost, and Alternating swaps the order every layer (even layers Outer-Inner, odd layers Inner-Outer) to spread heat. No effect with Shell Count 1.",
          "y": [
            82,
            12.2
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Zigzag",
      "img": "surfaceshell-option_tab3.png",
      "rows": [
        {
          "name": "Pattern",
          "type": "Dropdown",
          "ko": "위빙 밴드(Mid)의 파형이다.<br> • Square: 레일을 따라가다 스테이션마다 스트럿으로 건너는 사각파.<br> • Sine: 같은 스테이션·위상·릴리프를 유지한 채 두 레일 사이를 사인 곡선으로 오간다. Close Ends 는 적용되지 않는다.<br>기본값은 Square.",
          "en": "Waveform of the mid band. Square (default) follows the rails and crosses on struts at each station; Sine keeps the same stations, phase and relief but sweeps smoothly between the rails. Close Ends boxes do not apply to Sine.",
          "y": [
            14.6,
            8.3
          ]
        },
        {
          "name": "Equalize Spacing",
          "type": "Toggle",
          "ko": "레이어 안의 경로 간격을 균등하게 맞출지 정한다. 켜면 경로 배치를 조정해 레이어 패턴과 적층 품질을 일정하게 유지한다. Use Relief 는 이 옵션이 OFF 일 때만 동작한다. 기본값은 OFF.",
          "en": "Whether to equalize spacing between paths. When enabled, adjusts path placement to create more uniform spacing within layers, promoting consistent layer patterns and print quality.",
          "y": [
            25.1,
            8.3
          ]
        },
        {
          "name": "Layer Phase",
          "type": "Number",
          "ko": "레이어마다 지그재그 격자를 스트럿 간격의 몇 배만큼 이동할지 정한다 (0~1).<br> • 1: 한 스테이션 이동해 아래 레이어와 반 주기 엇갈려 맞물린다.<br> • 0: 모든 레이어가 같은 위상이라 스트럿이 수직으로 쌓인다.<br>기본값은 1.",
          "en": "How far the zig-zag lattice shifts per layer, as a fraction of the strut spacing (0-1). 1 shifts by one station, interlocking each layer a half-cycle against the one below; 0 keeps every layer in phase so struts stack vertically.",
          "y": [
            35.5,
            8.3
          ]
        },
        {
          "name": "Cross Shift",
          "type": "Integer",
          "ko": "스트럿의 바깥쪽 끝과 안쪽 끝을 몇 스테이션 어긋나게 할지 정한다(정수).<br> • 0: 스트럿이 한 스테이션 안에서 곧게 왕복한다.<br> • 1 이상: 스트럿이 기울어 사선 격자가 된다. Parallel 이 OFF 면 레이어마다 기울기 방향이 반전되어 교차 패턴이 된다.<br>기본값은 0.",
          "en": "How many **stations** the outer and inner ends of a strut are offset (integer). 0 keeps struts straight within one station; higher values slant them into a diagonal lattice. With Parallel off the sign alternates per layer, producing a crossing pattern.",
          "y": [
            46,
            8.3
          ]
        },
        {
          "name": "Parallel",
          "type": "Toggle",
          "ko": "모든 레이어의 경로를 같은 방향으로 생성할지 정한다. 켜면 모든 레이어가 같은 방향으로 생성되고, 끄면 Cross Shift 의 기울기 방향이 레이어마다 반전된다. 기본값은 OFF.",
          "en": "Whether to generate paths parallel across layers. When enabled, all layers' paths are generated in the same direction, which can be useful for achieving specific printing effects or patterns.",
          "y": [
            56.5,
            8.3
          ]
        },
        {
          "name": "Close Ends",
          "type": "Toggle",
          "ko": "열린 지그재그 경로의 양 끝 셀을 닫힌 사각형으로 마감한다(Mid 밴드 전용).<br> • OFF: 끝이 스트럿 하나로 열린 채 끝난다.<br> • ON: 시작점·끝점을 레일을 따라 이웃 스트럿까지 연장해 첫 셀과 마지막 셀을 닫는다.<br>릴리프로 접힌 끝은 Snap Threshold 폭으로 벌려 닫으며, Snap Threshold 가 0 이면 열어 두고 경고를 낸다. 닫힌 경로에는 영향이 없다. 기본값은 OFF.",
          "en": "Closes both end cells of an open zig-zag path into boxes (Mid band only). Off (default) ends on a lone strut; on extends the start/end point along the rail to the neighbouring strut so the first and last cells close. Ends folded by relief are opened to the Snap Threshold width first (Snap 0 leaves that end open, with a warning). Closed paths are unaffected.",
          "y": [
            66.9,
            8.3
          ]
        },
        {
          "name": "Tilt Patterns",
          "type": "Number",
          "ko": "위빙 밴드가 퍼지는 방향을 표면 오버행 쪽으로 기울이는 정도 (0~1)이다.<br> • 0: Reference Plane 법선 기준으로 평평하게 퍼진다.<br> • 1: 표면 오버행 방향을 따라 기울어 비평면 패턴이 된다.<br>오버행 방향의 계산법은 Normal Method 로 정한다. 타겟 자세를 정하는 Tilt Weight 와는 별개이다. 기본값은 0.",
          "en": "How far the direction in which the weaving band **spreads** tilts toward the surface overhang (0-1). 0 spreads flat from the reference-plane normal; 1 follows the surface overhang for a non-planar pattern. Normal Method picks how that direction is computed. Independent of target attitude (Tilt Weight).",
          "y": [
            77.4,
            8.3
          ]
        },
        {
          "name": "Normal Method",
          "type": "Toggle",
          "ko": "Tilt Patterns 가 쓰는 오버행 방향의 계산법이다.<br> • OFF: 기준 Z축을 표면 접평면에 투영한다. 완만한 곡면에서 안정적이다.<br> • ON: 경로 접선 × 표면 법선을 쓴다. 급경사나 주름진 부분에서 방향이 뚜렷하다.<br>Tilt Patterns 가 0 이면 결과가 같다. 기본값은 OFF.",
          "en": "How the **overhang direction** used by Tilt Pattern is computed. OFF projects the base Z axis onto the surface tangent plane (stable on gentle surfaces); ON takes path tangent × surface normal (crisper on steep or creased areas). Identical results with Tilt Pattern 0.",
          "y": [
            87.9,
            8.3
          ]
        }
      ]
    },
    {
      "label": "Relief",
      "img": "surfaceshell-option_tab4.png",
      "rows": [
        {
          "name": "Auto Subdivide",
          "type": "Toggle",
          "ko": "Phase Pattern 입력으로 스테이션 수를 고정한 뒤, 실제 간격이 Layer Width 의 0.5~2배를 벗어나면 스테이션 수를 자동으로 두 배로 늘리거나 절반으로 줄여 간격을 되돌린다. 한 레이어에 둘레가 다른 컨투어가 여럿(외곽 + 홀) 있으면 사실상 필수이다. Phase Pattern 입력이 없으면 동작하지 않는다. 기본값은 OFF.",
          "en": "After Phase Pattern locks the station count, doubles or halves it when the actual spacing leaves 0.5-2x the Layer Width. Effectively required when a layer has several contours of differing perimeter. No effect without a Phase Pattern input.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Use Relief",
          "type": "Toggle",
          "ko": "위치에 따라 밴드 폭을 변조해 외피에 요철을 만든다. 켜면 Field Points / Field Values 입력(Attractor Field 출력을 연결)과 아래 설정이 나타나며, 필드의 u 값에 따라 밴드 폭이 Depth Min Scale ~ Depth Max Scale 배율 사이에서 바뀐다. Path Order 가 Mid Weaving Only 이고 Equalize Spacing 이 OFF 일 때만 동작한다. 기본값은 OFF.",
          "en": "Modulates the **band width** by position to emboss a relief on the skin. Enabling it exposes the Field Points / Field Values inputs (Attractor Field output) and the knobs below; the width then sweeps between the Min and Max scales as driven by the field. Only active with Path Order = Mid Weaving Only and Equalize Spacing off.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Partition",
      "img": "surfaceshell-option_tab5.png",
      "rows": [
        {
          "name": "Part Count",
          "type": "Integer",
          "ko": "모델을 높이 방향으로 N등분해 부분 슬라이싱할 때의 파트 수이다.<br> • 1: 모델 전체를 슬라이싱한다.<br> • N: 모델을 N등분하고 Part Number 로 고른 파트만 슬라이싱한다.<br>기본값은 5 (범위 1~10).",
          "en": "Number of equal parts the model is divided into for segmented slicing; 1 slices the whole model.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Part Number",
          "type": "Integer",
          "ko": "N등분된 파트 중 이번에 슬라이싱할 파트 번호 (1~N)이다. 기본값은 1.",
          "en": "Which of the N parts to slice this time (1 to N).",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Tilt",
      "img": "surfaceshell-option_tab6.png",
      "rows": [
        {
          "name": "Tilt Weight",
          "type": "Number",
          "ko": "오버행 형상에서 타겟 Z축을 표면 기울기(오버행) 방향으로 기울이는 가중치이다. 토치·익스트루더를 형상 기울기에 맞춰 정렬할 때 쓴다.<br> • 0.0: Reference Plane Z축과 일치한다.<br> • 1.0: 표면 접선 방향으로 최대로 기울인다.<br>기본값은 0.",
          "en": "Weight for tilting the target Z axis toward the surface slope (overhang) direction. Used to align the torch or extruder with the geometry's slope.\n• 0.0:  aligned with the Reference Plane Z axis\n• 1.0: fully tilted along the surface tangent.",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "Edge Tilt Weight",
          "type": "Number",
          "ko": "엣지가 있는 형상에서 타겟을 엣지의 접선(Tangent) 방향으로 기울이는 가중치이다. 엣지 커브는 Edges 입력으로 지정한다.<br> • 0.0: Reference Plane Z축과 일치한다.<br> • 1.0: 엣지 접선 방향으로 최대로 기울인다.<br>기본값은 0.",
          "en": "Weight for tilting targets along the edge tangent on geometries with sharp edges. Edge curves come from the component's Edges input. 0.0 = aligned with the Reference Plane Z axis; 1.0 = fully tilted along the edge tangent.",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Edge Tilt Ramp",
          "type": "Number",
          "ko": "엣지에서 Edge Tilt 를 적용하는 램프 거리 (mm)이다. 엣지 전후 이 거리 안에서 기울임을 점진적으로 적용·해제해, 엣지 접선 방향이 급하게 바뀔 때의 경로 움직임을 완화한다. 기본값은 50.",
          "en": "Distance (mm) over which the edge tilt blends with the normal tilt — applied and released gradually within this distance from the edge, smoothing motion where the edge tangent changes abruptly.",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Incremental Steps",
          "type": "Integer",
          "ko": "설정한 Tilt Weight 까지 점진적으로 도달하는 레이어 수(N)이다. 빌드 플레이트 근처 초기 레이어부터 단계적으로 기울여, 급격한 기울임으로 인한 충돌과 과도한 로봇 움직임을 막는다.<br> • 예: Tilt Weight 1, Steps 10 → 레이어1 = 0, 레이어2 = 0.1, …, 레이어11 = 1.0<br>기본값은 1.",
          "en": "Number of layers (N) to gradually reach the configured Tilting Weight. Stepwise tilting applied from initial layers near the build plate to prevent collisions and excessive robot motion caused by abrupt tilting in initial layers.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    },
    {
      "label": "Seam",
      "img": "surfaceshell-option_tab7.png",
      "rows": [
        {
          "name": "Wipe Distance",
          "type": "Number",
          "ko": "노즐 와이핑 거리 (mm)이다.<br> • 양수(+): 닫힌 경로는 한 바퀴를 완주한 뒤 시작점부터 이 거리만큼 겹쳐 진행하고, 열린 경로는 끝에서 이 거리만큼 되짚는다.<br> • 음수(−): 닫힌 경로는 종점 이 거리 앞에서 일찍 끝내고, 열린 경로에서는 무시된다.<br>경로 길이를 넘는 값은 경로 길이로 제한된다. Full Lap Wipe 가 ON 이면 무시된다. Zigzag 에서는 위빙 밴드(Mid)에만 적용되고, 경계 패스는 Boundary Wipe Dist 를 쓴다. 기본값은 0.",
          "en": "Nozzle wipe distance (mm). Positive: closed = overlap past the start after a full loop, open = retrace back from the end; negative: closed = end early, open = ignored. Values beyond the path length are clamped. Ignored while Full Lap Wipe is on. In Zigzag mode it affects only the weaving band (Mid) — boundary passes use Boundary Wipe Dist.",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "Full Lap Wipe",
          "type": "Toggle",
          "ko": "켜면 Wipe Distance(와 Boundary Wipe Dist) 값을 무시하고 현재 경로를 한 번 더 그린다. 닫힌 경로는 정확히 한 바퀴 더, 열린 경로는 끝에서 시작점 직전까지 전체를 되짚는다. 되짚는 구간은 압출하지 않는다(E-Wipe). 레이어마다 경로 길이가 달라 거리 값으로 맞출 수 없을 때 쓴다. 기본값은 OFF.",
          "en": "ON ignores Wipe Distance (and Boundary Wipe Dist) and **redraws the current path once more**: closed = exactly one more lap, open = retrace from the end back to just before the start. The wipe stretch deposits nothing (E-Wipe). For whole-path overdraw that a distance value cannot match layer to layer.",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Seam Spread",
          "type": "Integer",
          "ko": "Seam 이 한 위치에 몰리지 않도록 레이어별 시작점을 N 주기로 분산한다. 레이어마다 경로의 1/N 씩 이동하고 N 레이어마다 원래 위치로 돌아온다.<br> • 예: N = 4 → 0.0, 0.25, 0.5, 0.75, 0.0 … 반복<br>기본값은 1 (분산 없음).",
          "en": "Distributes the seam start points across N cycles to prevent seams from concentrating at a single location. Shifts path parameters by 1/N per layer and returns to the original position every N layers.<br> • Example: N = 4 → Layer 1 = 0.0, Layer 2 = 0.25, Layer 3 = 0.5, Layer 4 = 0.75, Layer 5 = 0.0 (repeating).",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Seam Offset",
          "type": "Number",
          "ko": "모든 레이어의 Seam 위치를 일괄 이동하는 오프셋 (0~1)이다. Seam Spread 로 정한 레이어 간 위치 관계를 유지한 채 전체를 균일하게 옮긴다. 기본값은 0.",
          "en": "Global offset that shifts all layers' seam positions uniformly. Maintains the relative seam positions established by Seam Spread while shifting all layers together. (Applicable when 'Outline Shells' is 2 or higher)",
          "y": [
            79.1,
            14.2
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
    "ko": "슬라이싱할 서피스 형상이다. Brep 또는 Mesh 를 연결한다.",
    "en": "Target geometry to slice. Accepts Brep or Mesh."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "optional": true,
    "ko": "슬라이싱 기준 평면으로, 빌드 플레이트 방향과 같게 맞춘다. 평면의 Z축 방향으로 레이어가 쌓인다. 평면 1개를 연결하면 모든 형상이 공유해 합산 높이 기준으로 함께 적층하고, 형상 수만큼 연결하면 형상별로 1:1 대응해 각자 독립적으로 적층한다. 평면이 형상 수보다 적으면 마지막 평면을 반복한다. 연결하지 않으면 WorldXY 를 사용한다.",
    "en": "Reference plane for slicing. Set identical to the build plate orientation. Layers are generated along the Z-axis direction of the plane. Default: WorldXY."
  },
  {
    "name": "Seams",
    "type": "Curve",
    "optional": true,
    "ko": "레이어 Seam(경로 시작점)을 정렬하는 가이드 커브이다. 형상 하단에서 상단까지 이어지게 그리면 각 레이어의 Seam 이 커브를 따라 정렬된다. 닫힌 레이어에만 적용되며, 외곽 경로가 여러 겹이면 모든 겹이 같은 가이드에 정렬된다. 가이드가 지나지 않는 레이어는 Seam Offset 만으로 시작점을 정한다.",
    "en": "Optional guide curve(s) to align each layer's seam (path start point). Applied to closed layers only; with multiple shells every shell is aligned to the same guide. Layers not crossed by any guide fall back to Seam Offset alone."
  },
  {
    "name": "Edges",
    "type": "Curve",
    "optional": true,
    "ko": "형상 엣지 주변의 타겟 평면을 엣지 접선(Tangent) 방향으로 기울이는 데 쓰는 가이드 커브이다. 기울기 정도는 Tilt 탭의 Edge Tilt Weight 와 Edge Tilt Ramp 로 정한다.",
    "en": "Guide curves used to tilt the target plane at edges along the edge tangent direction."
  },
  {
    "name": "Dir Pattern",
    "type": "Boolean",
    "optional": true,
    "ko": "레이어별 적층 경로 진행 방향의 반전 여부를 정하는 불리언 패턴이다. 입력한 패턴은 레이어 순서에 따라 순환 반복된다.",
    "en": "Boolean pattern defining whether to reverse the toolpath direction per layer. The pattern repeats sequentially across layers."
  },
  {
    "name": "Overhang Density",
    "type": "Number",
    "optional": true,
    "ko": "오버행 심각도(0 ~ Max Overhang Angle)에 따른 보강 밀도(0~1) 곡선이다. Range(0, 1, N) 을 Graph Mapper 에 통과시킨 출력 리스트를 연결한다. 밀도 1 은 모든 평면에서 보강, 0 은 보강하지 않음이다.",
    "en": "Reinforcement density curve (0–1) over overhang severity (0 to Max Overhang Angle). Connect the output list of Range(0, 1, N) passed through a Graph Mapper. A density of 1 reinforces every plane; 0 adds no reinforcement."
  },
  {
    "name": "Max Overhang Angle",
    "type": "Number",
    "optional": true,
    "ko": "Overhang Density 곡선의 정의역 상한이 되는 오버행 각도 (°)이다. 연결하지 않으면 90 을 사용한다.",
    "en": "Overhang angle (°) used as the upper bound of the Overhang Density curve domain. Uses 90 when not connected."
  }
];

export const main = "surfaceshell-option_main.png";

export const outputs = [
  {
    "name": "Shell ToolPaths",
    "type": "Deposition ToolPaths",
    "ko": "생성된 외곽 적층 경로 데이터이다. Deposition Builder 또는 WAAM Builder 에 연결한다.",
    "en": "Generated Deposition toolpath data"
  },
  {
    "name": "Shell Contours",
    "type": "Curve",
    "ko": "생성된 외곽 적층 경로를 잇는 폴리라인이다.",
    "en": "Polylines representing the deposition toolpaths generated"
  }
];
