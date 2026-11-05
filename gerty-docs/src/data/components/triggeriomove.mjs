// Data for the TriggerIOMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "TriggIOs Move",
      "img": "2_TriggerMove_1.png",
      "rows": [
        {
          "name": "Type/Speed/Zone",
          "type": "Dropdown",
          "ko": "모션 유형(MoveJ / MoveL), 이동 속도(SpeedData), 경유 반경(ZoneData)을 고른다.",
          "en": "Motion type (MoveJ / MoveL), speed (SpeedData) and zone (ZoneData).",
          "y": [
            46.5,
            44.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "RobTarget",
    "type": "RobTarget",
    "ko": "모션 목표 위치. <a href=\"/datatype/robtarget/\">RobTarget</a> 또는 <a href=\"/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a> 의 출력을 연결한다.",
    "en": "Motion targets. Connect the output of <a href=\"/en/datatype/robtarget/\">RobTarget</a> or <a href=\"/en/datatype/positioner-robtarget-dynamic/\">Positioner RobTarget</a>."
  },
  {
    "name": "TriggIOs",
    "type": "TriggIOs",
    "ko": "경로 위에서 발생시킬 I/O 신호 묶음. <a href=\"/datatype/triggios/\">TriggIOs</a> 출력을 연결한다.",
    "en": "The I/O signals fired along the path. Connect the <a href=\"/en/datatype/triggios/\">TriggIOs</a> output."
  }
];

export const main = "2_TriggerMove.png";

export const outputs = [
  {
    "name": "Instructions",
    "type": "Instruction",
    "ko": "생성된 ABB 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a>의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated ABB instruction. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
