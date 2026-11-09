// Data for the WobjData (Fixed) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WobjData",
      "img": "wobjdata-fixed_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WobjData</code> 의 변수명을 정의한다. 이 변수는 워크오브젝트의 고유 식별자로 쓰인다. 기본값은 myWobj0.",
          "en": "Defines the variable name of the <code>WobjData</code> to create. The variable is the unique identifier of the work object. Default: myWobj0.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "wobjdata-fixed_tab2.png",
      "rows": [
        {
          "name": "Frame Size",
          "type": "Number",
          "ko": "뷰포트에 표시되는 워크오브젝트 프레임 좌표축의 크기를 조절한다. 미리보기 전용이며 출력 데이터에는 영향을 주지 않는다. 기본값은 3 (범위 3 ~ 10).",
          "en": "Adjusts the display size of the work-object frame axes in the viewport. Preview only; it does not affect the output data. Default: 3 (range 3 to 10).",
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
    "name": "User Frame",
    "type": "Plane",
    "ko": "WobjData 의 사용자 프레임(uframe)으로 사용할 평면(Plane)을 입력한다. 월드 좌표계에서 작업대의 로컬 좌표계를 정의한다.",
    "en": "Plane used as the user frame (<code>uframe</code>) of the <code>WobjData</code>. It defines the local coordinate system of the work surface within the world frame."
  },
  {
    "name": "Object Frame",
    "type": "Plane",
    "optional": true,
    "ko": "WobjData 의 객체 프레임(oframe)으로 사용할 평면(Plane)을 입력한다. 객체 프레임은 사용자 프레임을 기준으로 작업물의 좌표계를 정의한다.",
    "en": "Plane used as the object frame (<code>oframe</code>) of the <code>WobjData</code>. The object frame defines the workpiece coordinate system relative to the user frame."
  },
  {
    "name": "Override Wobj",
    "type": "WobjData",
    "optional": true,
    "ko": "입력된 워크오브젝트 데이터로 컴포넌트 출력을 덮어쓴다. 연결하면 다른 입력값과 관계없이 이 데이터가 우선 적용된다.",
    "en": "Overrides the component output with the provided work-object data. When connected, it takes precedence over all other inputs."
  }
];

export const main = "wobjdata-fixed_main.png";

export const outputs = [
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "정의된 ABB WobjData 를 출력한다.",
    "en": "Outputs the defined ABB <code>WobjData</code>."
  }
];
