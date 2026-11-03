// Data for the WeaveData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WeaveData",
      "img": "9_WeaveData_10.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WeaveData</code>의 변수명을 정의한다.",
          "en": "Variable name.",
          "y": [
            17,
            10.7
          ]
        },
        {
          "name": "Weaving Shape",
          "type": "Dropdown",
          "ko": "위빙 패턴 모양을 지정한다.<br>[0]: 없음, [1]: 지그재그(수평), [2]: V형(수직), [3]: 삼각형(수직), [4]: 원형(수직)",
          "en": "Weaving pattern geometry shape. [0]: None, [1]: Zigzag (horizontal), [2]: V-shape (vertical), [3]: Triangular (vertical), [4]: Circular (vertical).",
          "y": [
            29.8,
            12.5
          ]
        },
        {
          "name": "Weaving Type",
          "type": "Dropdown",
          "ko": "위빙 모션에 사용되는 로봇 축 제어 방식을 선택한다.<br> [0]: Geometric - 전체 축(1-6) 활용 (주파수↓ / 정확도↑)<br> [1]: Wrist - 손목축(4-6) 위주 + 메인축(1-3) 미세보정 (주파수↑ / 정확도↓)<br> [2]: Rapid1 - 메인축(1-3) 활용 (Legacy)<br> [3]: Rapid2 - 손목축(4-6) 활용 (Legacy)",
          "en": "Axis configuration used for the weaving motion.<br> [0]: Geometric. Utilizes all axes (1-6) (Lower frequency / Higher accuracy)<br> [1]: Wrist. Primarily utilizes wrist axes (4-6) with minor main axis (1-3) compensation (Higher frequency / Lower accuracy)<br> [2]: Rapid1. Main axes (1-3) utilization (Legacy)<br> [3]: Rapid2. Wrist axes (4-6) utilization (Legacy)",
          "y": [
            42.9,
            12.5
          ]
        },
        {
          "name": "Length(mm)",
          "type": "Number",
          "ko": "• Type이 Geometric/Wrist인 경우: 위빙 사이클 길이 (mm)<br> • Type이 Rapid1/Rapid2인 경우: 위빙 사이클 주파수 (Hz)<br> • Shape이 Circular인 경우: 원형 패턴 간격",
          "en": "When Type is Geometric/Wrist: Weaving cycle length (mm).<br> • When Type is Rapid1/Rapid2: Weaving cycle frequency (Hz).<br> • When Shape is Circular: Pitch distance for the circular pattern.",
          "y": [
            56.1,
            12.1
          ]
        },
        {
          "name": "Width(mm)",
          "type": "Number",
          "ko": "위빙 패턴의 전체 진폭 (mm)을 설정한다. (원형 위빙의 경우 반지름)",
          "en": "Total width amplitude of the weaving pattern (mm). (Represents radius for circular weaving).",
          "y": [
            69.2,
            11.8
          ]
        },
        {
          "name": "Height(mm)",
          "type": "Number",
          "ko": "패턴의 수직 높이 (mm)를 설정한다. V형 및 삼각형 패턴에서만 사용되며, 지그재그 및 원형 패턴에서는 무시된다.",
          "en": "Vertical height of the pattern (mm). Only utilized for V-shape and Triangular patterns; ignored for Zigzag and Circular setups.",
          "y": [
            82.4,
            12.1
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "9_WeaveData.png";

export const outputs = [
  {
    "name": "WeaveData",
    "type": "WeaveData",
    "ko": "정의된 ABB WeaveData를 출력한다.",
    "en": "Outputs the configured ABB WeaveData configuration stream."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 RAPID 코드 구문을 출력한다.",
    "en": "Outputs the compiled RAPID instruction code."
  }
];
