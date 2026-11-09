// Data for the WobjData (Fixed) page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WobjData",
      "img": "2_WobjData_4.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WobjData</code>의 변수명을 정의한다. 해당 변수는 WobjData 위치의 고유 식별자로 사용된다.",
          "en": "Defines the variable name for the generated <code>WobjData</code>. This variable serves as a unique identifier for the specific Work Object location.",
          "y": [
            49,
            30.6
          ]
        }
      ]
    },
    {
      "label": "Preview",
      "img": "2_WobjData_5.png",
      "rows": [
        {
          "name": "FrameSize",
          "type": "Number",
          "ko": "WobjFrame 평면 좌표계 축의 디스플레이 크기를 조절한다.",
          "en": "Adjusts the display size of the local coordinate system axes for the <code>WobjFrame</code>.",
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
    "name": "User Frame",
    "type": "Plane",
    "ko": "WobjData의 사용자 프레임(uframe)으로 사용할 평면(Plane)을 입력한다.",
    "en": "The plane used as the User Frame (<code>uframe</code>) for the <code>WobjData</code>."
  },
  {
    "name": "Object Frame",
    "type": "Plane",
    "ko": "WobjData의 객체 프레임(oframe)으로 사용할 평면(Plane)을 입력한다.",
    "en": "The plane used as the Object Frame (<code>oframe</code>) for the <code>WobjData</code>."
  },
  {
    "name": "Override Wobj",
    "type": "Plane",
    "ko": "입력된 워크오브젝트 데이터로 컴포넌트 출력을 덮어쓴다. 데이터 연결 시 다른 입력값과 무관하게 해당 데이터가 우선적으로 적용된다.",
    "en": "Overrides the component's output with the provided Work Object data. When connected, this data takes priority regardless of other inputs.",
    "optional": true
  }
];

export const main = "2_WobjData.png";

export const outputs = [
  {
    "name": "WobjData",
    "type": "WobjData",
    "ko": "정의된 ABB WobjData를 출력한다.",
    "en": "Outputs the defined ABB <code>WobjData</code> structure."
  }
];
