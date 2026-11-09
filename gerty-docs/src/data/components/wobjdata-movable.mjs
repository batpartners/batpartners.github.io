// Data for the WobjData (Movable) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WobjData",
      "img": "wobjdata-movable_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WobjData</code> 의 변수명을 정의한다. 이 변수는 워크오브젝트의 고유 식별자로 쓰인다. 기본값은 myWobj0.",
          "en": "Defines the variable name of the <code>WobjData</code> to create. The variable is the unique identifier of the work object. Default: myWobj0.",
          "y": [
            52.6,
            31.6
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "wobjdata-movable_tab2.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "뷰포트에 표시되는 워크오브젝트 프레임 좌표축의 크기를 조절한다. 미리보기 전용이며 출력 데이터에는 영향을 주지 않는다. 기본값은 3 (범위 3 ~ 10).",
          "en": "Adjusts the display size of the work-object frame axes in the viewport. Preview only; it does not affect the output data. Default: 3 (range 3 to 10).",
          "y": [
            52.6,
            31.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Positioner",
    "type": "Positioner",
    "ko": "<a href=\"/robot-tool/positioner/\">ABB Positioner</a> 컴포넌트 데이터를 입력한다. 이 포지셔너(외부축)가 움직이는 워크오브젝트를 정의한다.",
    "en": "<a href=\"/en/robot-tool/positioner/\">ABB Positioner</a> component data. Defines the work object moved by this positioner (external axis)."
  },
  {
    "name": "Override Wobj",
    "type": "WobjData",
    "optional": true,
    "ko": "입력된 워크오브젝트 데이터로 컴포넌트 출력을 덮어쓴다. 연결하면 다른 입력값과 관계없이 이 데이터가 우선 적용된다.",
    "en": "Overrides the component output with the provided work-object data. When connected, it takes precedence over all other inputs."
  }
];

export const main = "wobjdata-movable_main.png";

export const outputs = [
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "정의된 ABB WobjData 를 출력한다.",
    "en": "Outputs the defined ABB <code>WobjData</code>."
  }
];
