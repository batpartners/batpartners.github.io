// Data for the Multi Slider page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Multi Sliders",
      "img": "multislider_tab1.png",
      "rows": [
        {
          "name": "Value01",
          "type": "Number",
          "ko": "첫 번째 슬라이더 값이다. 기본값은 50 (범위 0 ~ 100).",
          "en": "Value of the first slider. Default: 50 (range 0–100).",
          "y": [
            52.6,
            31.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "multislider_main.png";

export const outputs = [
  {
    "name": "Values",
    "type": "Number",
    "ko": "모든 슬라이더 값을 순서대로(Value01, Value02 …) 담은 리스트이다.",
    "en": "List of all slider values in order (Value01, Value02, …)."
  }
];
