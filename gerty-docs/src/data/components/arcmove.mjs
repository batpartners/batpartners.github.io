// Data for the ArcMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Arc Move",
      "img": "arcmove_tab1.png",
      "rows": [
        {
          "name": "Arc",
          "type": "Dropdown",
          "ko": "모션 유형, 이동 속도(SpeedData), 경유 반경(ZoneData)을 차례로 고른다. 모션 유형은 <code>ArcL</code>(직선) 또는 <code>ArcC</code>(원호)이고, 속도는 <code>v5</code> ~ <code>v7000</code>, Zone 은 <code>fine</code>, <code>z0</code> ~ <code>z200</code> 의 사전 정의 값 중에서 고른다.",
          "en": "Selects the motion type, speed (SpeedData) and zone (ZoneData) in turn. The motion type is <code>ArcL</code> (linear) or <code>ArcC</code> (circular); speed and zone are chosen from the predefined values <code>v5</code>–<code>v7000</code> and <code>fine</code>, <code>z0</code>–<code>z200</code>.",
          "y": [
            29.2,
            17.5
          ]
        },
        {
          "name": "Arc Start",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째 타겟에 <code>ArcLStart</code> 를 적용한다.<br> • <code>FALSE</code>: 첫 번째 타겟에 <code>ArcL</code> 을 적용한다.<br>기본값은 <code>TRUE</code>.",
          "en": "• <code>TRUE</code>: applies <code>ArcLStart</code> to the first target.<br> • <code>FALSE</code>: applies <code>ArcL</code> to the first target.<br>Default: <code>TRUE</code>.",
          "y": [
            51.5,
            17.5
          ]
        },
        {
          "name": "Arc End",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 마지막 타겟에 <code>ArcLEnd</code> 를 적용한다.<br> • <code>FALSE</code>: 마지막 타겟에 <code>ArcL</code> 을 적용한다.<br>기본값은 <code>TRUE</code>.",
          "en": "• <code>TRUE</code>: applies <code>ArcLEnd</code> to the last target.<br> • <code>FALSE</code>: applies <code>ArcL</code> to the last target.<br>Default: <code>TRUE</code>.",
          "y": [
            73.7,
            17.5
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "RobTargets",
    "type": "RobTarget",
    "ko": "모션 목표 위치. <a href=\"/datatype/robtarget/\">RobTarget</a> 또는 <a href=\"/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a> 의 출력을 연결한다.",
    "en": "Motion targets. Connect the output of <a href=\"/en/datatype/robtarget/\">RobTarget</a> or <a href=\"/en/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a>."
  },
  {
    "name": "SeamData",
    "type": "SeamData",
    "ko": "용접 시작·종료 조건. <a href=\"/datatype/seamdata/\">SeamData</a> 출력을 연결한다.",
    "en": "Weld start and end conditions. Connect the <a href=\"/en/datatype/seamdata/\">SeamData</a> output."
  },
  {
    "name": "WeldData",
    "type": "WeldData",
    "ko": "용접 조건. <a href=\"/datatype/welddata/\">WeldData</a> 출력을 연결한다.",
    "en": "Weld conditions. Connect the <a href=\"/en/datatype/welddata/\">WeldData</a> output."
  }
];

export const main = "arcmove_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 아크 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated arc instructions. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
