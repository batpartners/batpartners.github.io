// Data for the Surface Frame page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "UV Param",
      "img": "8_SurfaceFrame_10.png",
      "rows": [
        {
          "name": "U Param",
          "type": "Number",
          "ko": "평면 원점의 U 파라미터 (0.0 ~ 1.0).",
          "en": "U parameter of the plane origin (0.0 ~ 1.0).",
          "y": [
            35.3,
            22.1
          ]
        },
        {
          "name": "V Param",
          "type": "Number",
          "ko": "평면 원점의 V 파라미터 (0.0 ~ 1.0).",
          "en": "V parameter of the plane origin (0.0 ~ 1.0).",
          "y": [
            63.2,
            22.1
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "8_SurfaceFrame_11.png",
      "rows": [
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "프리뷰에 표시할 평면 프레임의 크기.",
          "en": "Size of the plane frame shown in the preview.",
          "y": [
            49,
            32.7
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
    "ko": "기준 평면을 만들 평면 서피스.",
    "en": "The planar surface to take the reference plane from."
  }
];

export const main = "8_SurfaceFrame.png";

export const outputs = [
  {
    "name": "Base Plane",
    "type": "Plane",
    "ko": "서피스의 (U, V) 위치에 놓인 기준 평면.",
    "en": "The reference plane at (U, V) on the surface."
  }
];
