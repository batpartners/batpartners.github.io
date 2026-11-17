// Data for the (De)ActUnit page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "(De)ActUnit",
      "img": "deactunit_tab1.png",
      "rows": [
        {
          "name": "MechUnit",
          "type": "String",
          "ko": "활성화 또는 비활성화할 메카니컬 유닛(Mechanical Unit)의 이름. 로봇 컨트롤러에 정의된 이름과 같아야 한다. 기본값은 <code>STN1</code>.",
          "en": "Name of the mechanical unit to activate or deactivate. It must match the name defined in the robot controller. Default: <code>STN1</code>.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Activate",
          "type": "Toggle",
          "ko": "메카니컬 유닛을 활성화할지 비활성화할지 고른다.<br> • <code>TRUE</code>: 활성화 (<code>ActUnit</code>)<br> • <code>FALSE</code>: 비활성화 (<code>DeactUnit</code>)<br>기본값은 <code>TRUE</code>.",
          "en": "Chooses whether to activate or deactivate the mechanical unit.<br> • <code>TRUE</code>: activate (<code>ActUnit</code>)<br> • <code>FALSE</code>: deactivate (<code>DeactUnit</code>)<br>Default: <code>TRUE</code>.",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "deactunit_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 <code>ActUnit</code> 또는 <code>DeactUnit</code> 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated <code>ActUnit</code> or <code>DeactUnit</code> instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
