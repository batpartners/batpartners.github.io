// Data for the Surface Shell page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Slicing",
      "img": "13_SurfaceShell_10.png",
      "rows": [
        {
          "name": "End Fillet Type",
          "type": "Dropdown",
          "ko": "이격된 외곽 적층 경로 끝단의 마감 유형. ('Outline Shells'가 2 이상일 때 유효)",
          "en": "Finishing type for the ends of offset outline deposition paths. (Valid when 'Outline Shells' is 2 or greater)",
          "y": [
            16.6,
            11
          ]
        },
        {
          "name": "Outline Shells",
          "type": "Integer",
          "ko": "입력 형상의 외곽선을 따라 생성할 외곽 경로(Shell)의 개수.",
          "en": "Number of outline paths (shells) to generate along the outer boundary of the input geometry.",
          "y": [
            30,
            11.7
          ]
        },
        {
          "name": "Layer Width(mm)",
          "type": "Number",
          "ko": "단일 적층 경로의 폭(비드 폭, mm).",
          "en": "Width of a single deposition path (bead width, mm).",
          "y": [
            43.8,
            10.6
          ]
        },
        {
          "name": "Layer Height(mm)",
          "type": "Number",
          "ko": "단일 적층 레이어의 높이(층 두께, mm).",
          "en": "Height of a single deposition layer (layer thickness, mm).",
          "y": [
            57.2,
            11
          ]
        },
        {
          "name": "First Layer Height(mm)",
          "type": "Number",
          "ko": "빌드 플레이트에 접하는 첫 번째 적층 레이어의 높이 (mm).",
          "en": "Height of the first deposition layer contacting the build plate (mm).",
          "y": [
            70.7,
            12
          ]
        },
        {
          "name": "Tolerance",
          "type": "Number",
          "ko": "경로의 근사 허용 오차.",
          "en": "Approximation tolerance for the path.",
          "y": [
            85.5,
            9.2
          ]
        }
      ]
    },
    {
      "label": "Tilting",
      "img": "12_SolidShell_11.png",
      "rows": [
        {
          "name": "Tilting Weight",
          "type": "Number",
          "ko": "오버행 형상에서 타겟 Z축을 표면 기울기(오버행) 방향으로 기울이는 가중치. 토치·익스트루더를 형상 기울기에 맞춰 정렬할 때 사용.",
          "en": "Weight to tilt the target Z-axis toward the surface slope (overhang) direction in overhang geometries. Used to align the torch or extruder with the surface inclination.",
          "y": [
            23.2,
            14.5
          ]
        },
        {
          "name": "Edge Tilting Weight",
          "type": "Number",
          "ko": "Edge가 있는 형상에서, 타겟을 Edge의 접선(Tangent) 방향으로 기울이는 가중치. 엣지 참조 커브는 컴포넌트의 Edge Crvs 인풋을 이용.",
          "en": "Weight to tilt the target toward the tangent direction of the edge in geometries with edges. The edge reference curve uses the Edge Crvs input of the component.",
          "y": [
            41.5,
            16.4
          ]
        },
        {
          "name": "Edge Tilt Ramp(mm)",
          "type": "Number",
          "ko": "Edge Tilt 효과를 블렌딩하는 거리 (mm). 엣지로부터 이 거리만큼 전후로 Edge Tilt를 점진적으로 적용·해제. 급격한 엣지 접선 방향 전환으로 인한 경로 움직임 완화.",
          "en": "Distance (mm) to blend the Edge Tilt effect. Gradually applies and releases Edge Tilt before and after the edge by this distance to mitigate path motion caused by abrupt edge tangent direction changes.",
          "y": [
            59.9,
            16.4
          ]
        },
        {
          "name": "Incremental Steps",
          "type": "Number",
          "ko": "설정된 Tilting Weight까지 점진적으로 도달하는 레이어 수(N). 빌드 플레이트 인근 초기 레이어부터 단계적으로 기울임 적용. 초기 레이어의 급격한 기울임으로 인한 충돌·과도한 로봇 움직임 방지.",
          "en": "Number of layers (N) to gradually reach the configured Tilting Weight. Stepwise tilting applied from initial layers near the build plate to prevent collisions and excessive robot motion caused by abrupt tilting in initial layers.",
          "y": [
            78.3,
            14.5
          ]
        }
      ]
    },
    {
      "label": "Seam",
      "img": "12_SolidShell_12.png",
      "rows": [
        {
          "name": "Wipe Distance(mm)",
          "type": "Number",
          "ko": "노즐 와이핑 거리.<br> • 양수(+): 외곽 경로 완주 후 시작점부터 추가로 해당 거리만큼 중첩된 경로를 진행.<br> • 음수(-): 외곽 경로 종점 전 해당 거리에서 조기 종료.",
          "en": "Nozzle wiping distance.<br> • Positive (+): Continues an overlapping path by the specified distance from the start point after completing the outline path.<br> • Negative (-): Ends prematurely at the specified distance before the end point of the outline path.",
          "y": [
            28.4,
            17.8
          ]
        },
        {
          "name": "Seam Spread",
          "type": "Number",
          "ko": "Seam이 한 위치에 집중되지 않도록, 전체 레이어의 Seam 시작점을 N 주기로 분산. 레이어마다 경로 파라미터를 1/N씩 이동하며 N 레이어마다 원래 위치로 복귀.<br> • 예: N = 4 → 레이어1 = 0.0, 레이어2 = 0.25, 레이어3 = 0.75, 레이어4 = 0.0 반복.",
          "en": "Distributes the seam start points across N cycles to prevent seams from concentrating at a single location. Shifts path parameters by 1/N per layer and returns to the original position every N layers.<br> • Example: N = 4 → Layer 1 = 0.0, Layer 2 = 0.25, Layer 3 = 0.75, Layer 4 = 0.0 (repeating).",
          "y": [
            50.9,
            17.8
          ]
        },
        {
          "name": "Seam Shifting",
          "type": "Integer",
          "ko": "모든 레이어의 Seam 위치를 일괄 조정하는 오프셋. Seam Spread로 설정된 레이어 간 위치 관계는 유지한 채 전체를 균일하게 시프팅.",
          "en": "Offset to collectively adjust the seam positions of all layers. Uniformly shifts the entire structure while maintaining the positional relationships between layers set by Seam Spread.",
          "y": [
            72.8,
            18.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Partition",
      "img": "12_SolidShell_20.png",
      "rows": [
        {
          "name": "Partition",
          "type": "Integer",
          "ko": "모델을 등분하여 분할 슬라이싱하는 파트 수.<br> • 1: 모델 전체 슬라이싱. / • N: 모델을 N등분하여 부분 슬라이싱.",
          "en": "Number of parts to divide and slice the model equally.<br> • 1: Slices the entire model. / • N: Divides the model into N equal parts for partial slicing.",
          "y": [
            39.3,
            19.3
          ]
        },
        {
          "name": "Order",
          "type": "Number",
          "ko": "N등분된 파트 중 슬라이싱할 파트 번호(1~N).",
          "en": "Part number (1 to N) to slice among the N divided parts.",
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
    "name": "Geometry",
    "type": "Geometry",
    "ko": "슬라이싱 대상 형상. Brep 또는 Mesh 입력.",
    "en": "Target geometry to slice. Input a Brep or Mesh."
  },
  {
    "name": "Reference Plane",
    "type": "Plane",
    "ko": "슬라이싱 기준 평면. 빌드 플레이트 방향과 동일하게 설정. 평면의 Z축 방향으로 레이어가 생성됨. 기본값: WorldXY.",
    "en": "Reference plane for slicing. Set identical to the build plate orientation. Layers are generated along the Z-axis direction of the plane. Default: WorldXY.",
    "optional": true
  },
  {
    "name": "Edge Crvs",
    "type": "Curve",
    "ko": "형상의 Edge 주변에 형성된 타겟 평면을 Edge의 접선(Tangent) 방향으로 기울이는 데 사용되는 가이드 커브.",
    "en": "Guide curves used to tilt the target planes formed around the geometry edges along the tangent direction of the edges."
  },
  {
    "name": "Direction Change",
    "type": "Boolean",
    "ko": "레이어별 적층경로 진행 방향의 반전 여부를 정의하는 불리언 패턴. 입력된 패턴은 레이어 순서에 따라 순환 반복됨.",
    "en": "Boolean pattern defining whether to reverse the deposition path progression direction per layer. The input pattern is cyclically repeated according to the layer sequence."
  }
];

export const main = "13_SurfaceShell.png";

export const outputs = [
  {
    "name": "Deposition ToolPaths",
    "type": "Shell ToolPaths",
    "ko": "생성된 적층 경로 데이터.",
    "en": "Generated deposition path data."
  },
  {
    "name": "Is Bottommost",
    "type": "Boolean",
    "ko": "현재 Deposition ToolPath가 최하단(첫 번째) 파트인지 여부를 나타내는 플래그.",
    "en": "Flag indicating whether the current deposition toolpath is the lowest (first) part."
  },
  {
    "name": "Shell polylines",
    "type": "Curve",
    "ko": "생성된 외곽 적층 경로를 연결하는 폴리라인.",
    "en": "Polylines connecting the generated outline deposition paths."
  }
];
