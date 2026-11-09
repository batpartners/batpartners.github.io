// Data for the (De)ActUnit page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "(De)ActUnit",
      "img": "4_DeActUnit_1.png",
      "rows": [
        {
          "name": "MechUnit",
          "type": "String",
          "ko": "제어할 메카니컬 유닛(Mechanical Unit)의 이름. 예: STN1",
          "en": "Name of the mechanical unit to control, e.g. STN1.",
          "y": [
            35,
            23.4
          ]
        },
        {
          "name": "Activate",
          "type": "Toggle",
          "ko": "메카니컬 유닛을 켜거나 끈다.<br> • <code>TRUE</code>: 활성화 (<code>ActUnit</code>)<br> • <code>FALSE</code>: 비활성화 (<code>DeactUnit</code>)",
          "en": "Activates or deactivates the mechanical unit.<br> • <code>TRUE</code>: activate (<code>ActUnit</code>)<br> • <code>FALSE</code>: deactivate (<code>DeactUnit</code>)",
          "y": [
            63.5,
            22.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "4_DeActUnit.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
