// Data for the TriggerIOMove page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Trigger Move",
      "img": "triggeriomove_tab1.png",
      "rows": [
        {
          "name": "Trigger Move",
          "type": "Dropdown",
          "ko": "모션 유형, 이동 속도(SpeedData), 경유 반경(ZoneData)을 차례로 고른다. 모션 유형은 <code>TriggJIOs</code>(관절 보간) / <code>TriggLIOs</code>(직선 보간) 중에서 고르고, 속도와 Zone 은 사전 정의 값(<code>v5</code> ~ <code>v7000</code>, <code>fine</code> / <code>z0</code> ~ <code>z200</code>) 중에서 고른다.",
          "en": "Selects the motion type, speed (SpeedData) and zone (ZoneData) in turn. The motion type is one of <code>TriggJIOs</code> (joint interpolation) / <code>TriggLIOs</code> (linear); speed and zone are chosen from the predefined values (<code>v5</code>–<code>v7000</code>, <code>fine</code> / <code>z0</code>–<code>z200</code>).",
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
    "name": "RobTargets",
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

export const main = "triggeriomove_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 트리거 이동 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated trigger move instructions. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
