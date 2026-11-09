// Data for the Multi Slider page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Multi Sliders",
      "img": "6_MultiSlider_10.png",
      "rows": [
        {
          "name": "Value01",
          "type": "Number",
          "ko": "첫 번째 슬라이더 값.",
          "en": "Value of the first slider.",
          "y": [
            48.5,
            32.3
          ]
        },
        {
          "name": "ADD",
          "type": "Number",
          "ko": "슬라이더를 추가한다. 추가한 슬라이더 값은 Value02, Value03 … 순서로 이어진다.",
          "en": "Adds a slider; the added values follow as Value02, Value03, …."
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "6_MultiSlider.png";

export const outputs = [
  {
    "name": "Values",
    "type": "Number",
    "ko": "모든 슬라이더 값을 순서대로 담은 리스트.",
    "en": "List of all slider values, in order."
  }
];
