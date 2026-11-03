// Data for the Move page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Move",
      "img": "0_Move_1.png",
      "rows": [
        {
          "name": "Type/Speed/Zone",
          "type": "Dropdown",
          "ko": "모션 유형(MoveJ / MoveL), 이동 속도(SpeedData), 경유 반경(ZoneData)을 고른다.",
          "en": "Motion type (MoveJ / MoveL), speed (SpeedData) and zone (ZoneData).",
          "y": [
            28,
            18.9
          ]
        },
        {
          "name": "MoveJ Start &amp; End",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째와 마지막 타겟에 MoveJ 를 적용한다.<br> • <code>FALSE</code>: 모든 타겟에 설정한 모션 유형을 적용한다.",
          "en": "• <code>TRUE</code>: MoveJ for the first and last targets.<br> • <code>FALSE</code>: the selected motion type for every target.",
          "y": [
            49.1,
            18.3
          ]
        },
        {
          "name": "Fine Start &amp; End",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째와 마지막 타겟의 Zone 을 fine(정밀 정지)으로 적용한다.<br> • <code>FALSE</code>: 모든 타겟에 설정한 Zone 을 적용한다.",
          "en": "• <code>TRUE</code>: zone fine (exact stop) for the first and last targets.<br> • <code>FALSE</code>: the selected zone for every target.",
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
    "ko": "모션 목표 위치. <a href=\"/datatype/robtarget/\">RobTarget</a> 또는 <a href=\"/datatype/positioner-robtarget/\">Positioner RobTarget</a> 의 출력을 연결한다.",
    "en": "Motion targets. Connect the output of <a href=\"/en/datatype/robtarget/\">RobTarget</a> or <a href=\"/en/datatype/positioner-robtarget/\">Positioner RobTarget</a>."
  }
];

export const main = "0_Move.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
