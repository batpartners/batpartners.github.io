// Data for the Surface Frame page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "UV Param",
      "img": "surface-frame_tab1.png",
      "rows": [
        {
          "name": "U Param",
          "type": "Number",
          "ko": "평면 원점의 U 파라미터이다 (0 ~ 1). 기본값은 0.5.",
          "en": "U parameter of the plane origin (0–1). Default: 0.5.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "V Param",
          "type": "Number",
          "ko": "평면 원점의 V 파라미터이다 (0 ~ 1). 기본값은 0.5.",
          "en": "V parameter of the plane origin (0–1). Default: 0.5.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "surface-frame_tab2.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "프리뷰에 표시할 평면 프레임의 크기이다. 출력 평면에는 영향을 주지 않는다. 기본값은 3 (범위 3 ~ 10).",
          "en": "Size of the plane frame shown in the preview. It does not affect the output plane. Default: 3 (range 3–10).",
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
    "name": "Surface",
    "type": "Surface",
    "ko": "기준 평면을 만들 평면 서피스이다.",
    "en": "The flat surface to create the reference plane from."
  }
];

export const main = "surface-frame_main.png";

export const outputs = [
  {
    "name": "Base Plane",
    "type": "Plane",
    "ko": "서피스의 (U, V) 위치에 놓인 기준 평면이다.",
    "en": "The reference plane at (U, V) on the surface."
  }
];
