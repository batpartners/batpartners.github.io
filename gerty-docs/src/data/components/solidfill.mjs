// Data for the Solid Fill page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Pattern",
      "img": "solidfill_tab1.png",
      "rows": [
        {
          "name": "Pattern",
          "type": "Dropdown",
          "ko": "채움 경로의 생성 방식을 고른다.<br> • Linear: 평행선 패턴. Type 의 각도 집합을 레이어마다 순환하며 Rotation, Phase Shift, Alt Connect, Raster 가 적용된다.<br> • Concentric: 외곽 안쪽 경계를 선 간격(스킨 = Layer Width, 스파스 = Layer Width ÷ Infill Density)으로 반복 오프셋한 동심 링. 각도와 무관하며 Path Order 가 적용된다. Path Order 와 Seam 탭의 Seam 관련 설정이 나타나고 Linear 전용 설정은 숨겨진다.<br>스킨/스파스 구분, Fill Gap, Wipe Dist, 틸팅은 두 방식에 공통이다. 기본값은 Linear.",
          "en": "How infill paths are generated. Linear: parallel lines — cycles the Type angle set per layer; Rotation, Phase Shift, Alt Connect and Raster apply. Concentric: rings offset inward from the inner shell boundary at the line spacing (skin = Layer Width, sparse = Layer Width ÷ Density) — angle-free; Path Order applies. Skin/sparse split, Fill Gap, Wipe Dist and tilting are shared.",
          "y": [
            17.3,
            10.6
          ]
        },
        {
          "name": "Type",
          "type": "Dropdown",
          "ko": "Linear 패턴의 각도 집합(스킨·스파스 공통)이다. 레이어마다 순서대로 순환하며 Rotation 이 더해진다.<br> • Lines: 0°<br> • Grid: −45° / +45°<br> • Triangles: −60° / 0° / +60°<br> • Custom: Pattern Angles 입력의 목록<br>기본값은 Grid. <strong>Pattern</strong> 이 Concentric 이면 숨겨진다.",
          "en": "Angle set of the Linear pattern (shared by skin and sparse). Cycled per layer in order, with Rotation added. Lines: 0°. Grid: −45°/+45°. Triangles: −60°/0°/+60°. Custom: the Pattern Angles input list.",
          "y": [
            30.7,
            10.6
          ]
        },
        {
          "name": "Rotation(°)",
          "type": "Number",
          "ko": "채움 패턴에 적용할 회전 각도 (°)이며, Type 의 각도에 더해진다. 기본값은 0 (범위 −90~90). <strong>Pattern</strong> 이 Concentric 이면 숨겨진다.",
          "en": "Rotation angle applied to the fill pattern.",
          "y": [
            44.2,
            10.6
          ]
        },
        {
          "name": "Phase Shift",
          "type": "Number",
          "ko": "같은 각도가 다시 오는 레이어마다 채움 선을 선 간격의 이 비율만큼 옆으로 민다 (0~1). 0.5 는 아래 레이어 선 사이의 한가운데, 0 은 이동 없음이다. Phase Pattern 입력을 연결하면 무시된다. 기본값은 0. <strong>Pattern</strong> 이 Concentric 이면 숨겨진다.",
          "en": "Shifts the fill lines sideways by this fraction of the line spacing each time the same angle recurs (0–1). 0.5 = midway between the lines below. 0 = no shift.",
          "y": [
            57.6,
            10.6
          ]
        },
        {
          "name": "Alt Connect",
          "type": "Toggle",
          "ko": "켜면 같은 각도가 다시 오는 레이어마다 지그재그 연결 호가 반대쪽 경계로 번갈아 옮겨 간다. 끄면 항상 같은 쪽에서 연결한다. 기본값은 OFF. <strong>Pattern</strong> 이 Concentric 이면 숨겨진다.",
          "en": "When on, the zigzag connection arcs alternate to the opposite boundary side each time the same angle recurs. Off = always the same side.",
          "y": [
            71,
            10.6
          ]
        },
        {
          "name": "Raster",
          "type": "Toggle",
          "ko": "켜면 지그재그에서 외곽을 따라가는 연결 구간을 빼고 각 사선을 독립된 경로로 만든다. 사선의 위치·방향·순서는 지그재그와 같다(인접 사선은 반대 방향). 기본값은 OFF. <strong>Pattern</strong> 이 Concentric 이면 숨겨진다.",
          "en": "When on, drops the boundary-following connectors of the zigzag so each diagonal line becomes a separate path. Line positions, directions and order match the zigzag (adjacent lines run opposite).",
          "y": [
            84.5,
            10.6
          ]
        }
      ]
    },
    {
      "label": "Infill",
      "img": "solidfill_tab2.png",
      "rows": [
        {
          "name": "Top Layers",
          "type": "Integer",
          "ko": "파트 상단에 생성할 솔리드(스킨) 레이어 수이다. 기본값은 0 (범위 0~5).",
          "en": "Number of solid layers to generate at the top of the part.",
          "y": [
            23.7,
            14.5
          ]
        },
        {
          "name": "Bottom Layers",
          "type": "Integer",
          "ko": "파트 하단에 생성할 솔리드(스킨) 레이어 수이다. 기본값은 0 (범위 0~5).",
          "en": "Number of solid layers to generate at the bottom of the part.",
          "y": [
            42,
            14.5
          ]
        },
        {
          "name": "Fill Gap",
          "type": "Number",
          "ko": "외곽과 채움 사이, 그리고 스킨(위·아래 노출면)과 스파스(내부) 채움 사이의 간격 (mm)이다. 기본값은 2.5.",
          "en": "Spacing (mm) between the shell and the infill, and between the skin (exposed top/bottom) and sparse (interior) fill.",
          "y": [
            60.4,
            14.5
          ]
        },
        {
          "name": "Infill Density",
          "type": "Number",
          "ko": "스파스(내부) 채움 밀도 (0~1, 0%~100%)이다. 선/링 간격은 Layer Width ÷ Infill Density 이며, 스킨은 항상 Layer Width 간격이다. 기본값은 0.5.",
          "en": "Sparse (interior) infill density (0–1, 0%–100%). Line/ring spacing = Layer Width ÷ Density. Skin is always at Layer Width spacing.",
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
      "label": "Tilt",
      "img": "solidfill_tab3.png",
      "rows": [
        {
          "name": "Wall Tilt Weight",
          "type": "Number",
          "ko": "모델 벽의 기울기(오버행)를 따라 벽 근처 채움 타겟을 기울이는 비율 (0~1)이며, 셸 틸팅과 같은 기준이다. 수직 벽에서는 기울지 않으며, 0 이면 끈다. Model 입력이 필요하고, Tilt Ramp 거리에서 0 까지 선형으로 줄어든다. Use Exclusion 의 Subtract 모드에서는 제외체의 옆면도 벽으로 본다. 기본값은 0.",
          "en": "Fraction (0–1) to tilt infill targets near the model wall along its slope (same basis as shell tilting); vertical walls give 0, 0 = off. Needs the Model input. With Exclusion in Subtract mode the exclusion side faces count as walls too (Clip faces are handled by Excl Tilt). Fades to 0 at the Tilt Ramp distance.",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Tilt Ramp",
          "type": "Number",
          "ko": "틸팅이 미치는 거리 (mm)이며, 셸의 Edge Tilt Ramp 와 같은 뜻이다. 벽(또는 제외면)에서 이 거리까지 기울기가 0 으로 줄고, 그 경계에 타겟이 추가된다. 0 이면 타겟을 추가하지 않고 벽에 붙은 기존 타겟만 전량 기울인다. 기본값은 10.",
          "en": "Reach (mm) of tilting, same meaning as the shell Edge Tilt Ramp — the tilt fades to 0 at this distance from the exclusion face / wall, with a target added at that boundary. 0 = no ramp: no targets added, only existing targets touching the face / wall get the full tilt.",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    },
    {
      "label": "Seam",
      "img": "solidfill_tab4.png",
      "rows": [
        {
          "name": "Wipe Dist",
          "type": "Number",
          "ko": "각 채움 경로의 압출이 끝난 뒤 압출 없이 이동하는 와이핑 거리 (mm)이다. Linear 는 외곽 안쪽 경계를 따라, Concentric 은 자기 링을 따라 계속 이동한다. 0 이면 와이핑하지 않는다. 음수는 Concentric(닫힌 링)에서만 끝에서 그 길이만큼 못 미치게 끝내며(셸과 같은 규칙), Linear 에는 영향이 없다. 기본값은 0.",
          "en": "Non-extruding wipe distance (mm) after each infill path ends — Linear follows the inner shell boundary, Concentric keeps following its own ring. 0 = no wipe. Negative = Concentric (closed rings) only: stops that much short of closing, as in the shell; no effect on Linear.",
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
    "name": "Shell Profile",
    "type": "Shell Profile",
    "ko": "외곽 적층 경로의 기준 프로파일 정보이다. Solid Shell 의 Shell Profile 출력을 연결한다.",
    "en": "Reference profile information of the shell deposition toolpaths."
  },
  {
    "name": "Pattern Angles",
    "type": "Number",
    "optional": true,
    "ko": "Pattern 이 Linear 이고 Type 이 Custom 일 때 레이어마다 순환 적용할 각도 목록 (°)이다. Rotation 값이 더해진다. 연결하지 않으면 0° 를 사용한다.",
    "en": "Angle list (°) cycled per layer when Pattern is Linear and Type is Custom. Rotation is added. Empty = 0°."
  },
  {
    "name": "Phase Pattern",
    "type": "Number",
    "optional": true,
    "ko": "레이어별 채움 패턴 위상 리스트 (0~1)이다. 항목 하나가 레이어 하나에 대응하며, 리스트가 끝나면 처음부터 순환한다. 0.5 는 선 간격의 반 칸 이동, 1 은 연결 쪽 반전이다. 연결하면 Phase Shift 설정은 무시된다.",
    "en": "Per-layer phase list (0–1, one item per layer, cycled). 0.5 = half-spacing shift, 1 = connection side flipped. When connected, the Phase Shift slider is ignored."
  },
  {
    "name": "Model",
    "type": "Geometry",
    "optional": true,
    "ko": "Wall Tilt Weight 가 벽 기울기를 읽을 슬라이싱 대상 형상(Brep 또는 Mesh)이다. 연결하지 않으면 Wall Tilt Weight 가 무시된다.",
    "en": "Sliced model (Brep/Mesh) whose wall slope drives Wall Tilt Weight. Empty = Wall Tilt Weight ignored."
  }
];

export const main = "solidfill_main.png";

export const outputs = [
  {
    "name": "Infill ToolPaths",
    "type": "Deposition ToolPaths",
    "ko": "생성된 채움 적층 경로 데이터이다. Deposition Builder 또는 WAAM Builder 에 연결한다.",
    "en": "Generated Deposition toolpath data"
  },
  {
    "name": "Infill Pattern",
    "type": "Curve",
    "ko": "생성된 채움 적층 경로를 잇는 폴리라인 패턴이다.",
    "en": "Polylines representing the deposition toolpaths generated"
  }
];
