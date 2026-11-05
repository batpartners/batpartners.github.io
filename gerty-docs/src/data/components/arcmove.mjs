// Data for the ArcMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Arc Move",
      "img": "3_ArcMove_1.png",
      "rows": [
        {
          "name": "Type/Speed/Zone",
          "type": "Dropdown",
          "ko": "모션 유형, 이동 속도(SpeedData), 경유 반경(ZoneData)을 고른다.",
          "en": "Motion type, speed (SpeedData) and zone (ZoneData).",
          "y": [
            28,
            18.9
          ]
        },
        {
          "name": "ArcLStart",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째 타겟에 <code>ArcLStart</code> 를 적용한다.<br> • <code>FALSE</code>: 첫 번째 타겟에 <code>ArcL</code> 을 적용한다.",
          "en": "• <code>TRUE</code>: <code>ArcLStart</code> for the first target.<br> • <code>FALSE</code>: <code>ArcL</code> for the first target.",
          "y": [
            49.1,
            18.3
          ]
        },
        {
          "name": "ArcLEnd",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 마지막 타겟에 <code>ArcLEnd</code> 를 적용한다.<br> • <code>FALSE</code>: 마지막 타겟에 <code>ArcL</code> 을 적용한다.",
          "en": "• <code>TRUE</code>: <code>ArcLEnd</code> for the last target.<br> • <code>FALSE</code>: <code>ArcL</code> for the last target.",
          "y": [
            70.9,
            18.3
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

export const main = "3_ArcMove.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
