// Data for the WeaveData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WaeveData",
      "img": "weavedata_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WeaveData</code> 의 변수명을 정의한다. 특수문자로 시작하거나 한글을 쓸 수 없다. 기본값은 weave1.",
          "en": "Defines the variable name of the <code>WeaveData</code> to create. It cannot start with a special character or contain Korean. Default: weave1.",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "Weave Shape",
          "type": "Dropdown",
          "ko": "위빙 패턴 모양을 선택한다.<br>• None: 위빙 없음<br>• Zigzag: 지그재그(수평)<br>• V_Shaped: V형(수직)<br>• Triangular: 삼각형(수직)<br>• Circular: 원형(수직)<br>기본값은 Zigzag.",
          "en": "Selects the weaving pattern shape.<br>• None: no weaving<br>• Zigzag: zigzag (horizontal)<br>• V_Shaped: V-shape (vertical)<br>• Triangular: triangular (vertical)<br>• Circular: circular (vertical)<br>Default: Zigzag.",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Weave Type",
          "type": "Dropdown",
          "ko": "위빙 모션에 사용할 로봇 축 제어 방식을 선택한다.<br>• Geometric: 전체 축(1-6) 활용 (주파수↓ / 정확도↑)<br>• Wrist: 손목축(4-6) 위주 + 메인축(1-3) 미세보정 (주파수↑ / 정확도↓)<br>• Rapid_1: 메인축(1-3) 활용 (레거시)<br>• Rapid_2: 손목축(4-6) 활용 (레거시)<br>기본값은 Geometric.",
          "en": "Selects the robot axes used for the weaving motion.<br>• Geometric: all axes (1-6) (lower frequency / higher accuracy)<br>• Wrist: mainly wrist axes (4-6), with main axes (1-3) for fine correction (higher frequency / lower accuracy)<br>• Rapid_1: main axes (1-3) (legacy)<br>• Rapid_2: wrist axes (4-6) (legacy)<br>Default: Geometric.",
          "y": [
            74,
            17.8
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Dimension",
      "img": "weavedata_tab2.png",
      "rows": [
        {
          "name": "Length",
          "type": "Number",
          "ko": "위빙 한 사이클의 길이를 설정한다. 의미는 설정에 따라 다르다.<br>• Weave Type 이 Geometric / Wrist: 위빙 사이클 길이 (mm)<br>• Weave Type 이 Rapid_1 / Rapid_2: 위빙 사이클 주파수 (Hz)<br>• Weave Shape 이 Circular: 원형 패턴 사이 간격<br>기본값은 2.",
          "en": "Sets the length of one weaving cycle. Its meaning depends on the settings.<br>• Weave Type Geometric / Wrist: weaving cycle length (mm)<br>• Weave Type Rapid_1 / Rapid_2: weaving cycle frequency (Hz)<br>• Weave Shape Circular: distance between circles<br>Default: 2.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Width",
          "type": "Number",
          "ko": "위빙 패턴의 전체 진폭 (mm) 을 설정한다. 원형 위빙에서는 반지름이다. 기본값은 3.",
          "en": "Total amplitude (mm) of the weaving pattern. For circular weaving it is the radius. Default: 3.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Height",
          "type": "Number",
          "ko": "패턴의 수직 높이 (mm) 를 설정한다. V형과 삼각형 패턴에서만 쓰이며, 지그재그와 원형 패턴에서는 무시된다. 기본값은 0.",
          "en": "Vertical height (mm) of the pattern. Used only by the V-shape and triangular patterns; ignored for zigzag and circular. Default: 0.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Dwell",
      "img": "weavedata_tab3.png",
      "rows": [
        {
          "name": "Dwell Left",
          "type": "Number",
          "ko": "위빙 패턴의 좌측 반환점에서 TCP 가 심(Seam) 방향으로만 이동하는 길이 (mm). 한쪽 비드량을 늘릴 때 쓴다. 기본값은 0.",
          "en": "Length (mm) the TCP moves only along the seam at the left turning point of the weave. Used to add more bead on one side. Default: 0.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Dwell Center",
          "type": "Number",
          "ko": "TCP 가 위빙 패턴의 중앙(영점)을 지날 때 심(Seam) 방향으로만 이동하는 길이 (mm). 기본값은 0.",
          "en": "Length (mm) the TCP moves only along the seam when it crosses the centre (zero point) of the weave. Default: 0.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Dwell Right",
          "type": "Number",
          "ko": "위빙 패턴의 우측 반환점에서 TCP 가 심(Seam) 방향으로만 이동하는 길이 (mm). <strong>Dwell Left</strong> 와 대칭이다. 기본값은 0.",
          "en": "Length (mm) the TCP moves only along the seam at the right turning point of the weave. Symmetric counterpart to <strong>Dwell Left</strong>. Default: 0.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Orient",
      "img": "weavedata_tab4.png",
      "rows": [
        {
          "name": "Dir Angle(°)",
          "type": "Number",
          "ko": "심(Seam) 에 수평인 평면에서 위빙 패턴을 회전시키는 각도 (°). 위에서 본 회전이며, 0° 이면 패턴이 심에 수직이다. 기본값은 0 (범위 -45 ~ 45).",
          "en": "Rotation angle (°) of the weave pattern in the plane horizontal to the seam, viewed from above. At 0° the pattern is perpendicular to the seam. Default: 0 (range -45 to 45).",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Tilt Angle(°)",
          "type": "Number",
          "ko": "심(Seam) 에 수직인 평면에서 위빙 패턴의 기울기 각도 (°). 옆에서 본 기울기이며, 0° 이면 완전 수직이다. 기본값은 0 (범위 -30 ~ 30).",
          "en": "Tilt angle (°) of the weave pattern in the plane perpendicular to the seam, viewed from the side. 0° is fully vertical. Default: 0 (range -30 to 30).",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Orient Angle(°)",
          "type": "Number",
          "ko": "정면에서 본 위빙의 수평-수직 방향성 각도 (°). 0° 이면 좌우 대칭이며, 비대칭 V형 / 삼각형 패턴에 유용하다. 기본값은 0 (범위 -45 ~ 45).",
          "en": "Horizontal-vertical orientation angle (°) of the weave, viewed from the front. 0° gives a symmetric weave; useful for asymmetric V-shape or triangular patterns. Default: 0 (range -45 to 45).",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Bias",
      "img": "weavedata_tab5.png",
      "rows": [
        {
          "name": "Weave Bias",
          "type": "Number",
          "ko": "위빙 패턴의 중심선을 진행 방향 기준 좌/우 (+/-) 로 편향시키는 거리 (mm). Zigzag 위빙에서만 쓰인다. 기본값은 0 (범위 -5 ~ 5).",
          "en": "Lateral offset (mm) of the weave centreline to the left/right (+/-) of the travel direction. Zigzag weave only. Default: 0 (range -5 to 5).",
          "y": [
            54.6,
            30.9
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Preview",
      "img": "weavedata_tab6.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "뷰포트에 표시되는 기준 프레임 좌표축의 크기를 조절한다. 미리보기 전용이다. 기본값은 3 (범위 3 ~ 10).",
          "en": "Adjusts the display size of the reference frame axes in the viewport. Preview only. Default: 3 (range 3 to 10).",
          "y": [
            39.3,
            22.2
          ]
        },
        {
          "name": "Preview Cycles",
          "type": "Integer",
          "ko": "<strong>Pattern</strong> 출력과 뷰포트에 그릴 위빙 패턴의 반복 사이클 수를 설정한다. 기본값은 5 (범위 1 ~ 5).",
          "en": "Number of weave cycles drawn for the <strong>Pattern</strong> output and the viewport preview. Default: 5 (range 1 to 5).",
          "y": [
            67.4,
            22.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Base Plane",
    "type": "Plane",
    "optional": true,
    "ko": "위빙 패턴 시각화의 기준 평면(Plane)을 입력한다. X 축 = 진행 방향, Y 축 = 수평, Z 축 = 수직이다. 미리보기와 <strong>Pattern</strong> 출력에만 쓰인다.",
    "en": "Base plane for the weave pattern visualization (X = travel direction, Y = horizontal, Z = vertical). Used only for the preview and the <strong>Pattern</strong> output."
  }
];

export const main = "weavedata_main.png";

export const outputs = [
  {
    "name": "WeaveData",
    "type": "WeaveData",
    "ko": "정의된 ABB WeaveData 를 출력한다.",
    "en": "Outputs the defined ABB WeaveData."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 RAPID 코드를 출력한다.",
    "en": "Outputs the generated RAPID code."
  },
  {
    "name": "Pattern",
    "type": "Curve",
    "ko": "위빙 패턴을 시각화한 폴리라인을 출력한다. <strong>Preview Cycles</strong> 에서 정한 사이클 수만큼 연속 패턴을 그린다.",
    "en": "Outputs a polyline that visualizes the weave pattern, drawn as a continuous pattern over the number of cycles set in <strong>Preview Cycles</strong>."
  }
];
