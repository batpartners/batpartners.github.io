// Data for the MoveOutput page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "ABB MoveOutput",
      "img": "moveoutput_tab1.png",
      "rows": [
        {
          "name": "MoveOutput",
          "type": "Dropdown",
          "ko": "모션 유형, 이동 속도(SpeedData), 경유 반경(ZoneData)을 차례로 고른다. 모션 유형은 <code>MoveJDO</code> / <code>MoveLDO</code>(디지털 출력), <code>MoveJGO</code> / <code>MoveLGO</code>(그룹 출력), <code>MoveJAO</code> / <code>MoveLAO</code>(아날로그 출력) 중에서 고르고, 속도와 Zone 은 사전 정의 값(<code>v5</code> ~ <code>v7000</code>, <code>fine</code> / <code>z0</code> ~ <code>z200</code>) 중에서 고른다.",
          "en": "Selects the motion type, speed (SpeedData) and zone (ZoneData) in turn. The motion type is one of <code>MoveJDO</code> / <code>MoveLDO</code> (digital output), <code>MoveJGO</code> / <code>MoveLGO</code> (group output) and <code>MoveJAO</code> / <code>MoveLAO</code> (analog output); speed and zone are chosen from the predefined values (<code>v5</code>–<code>v7000</code>, <code>fine</code> / <code>z0</code>–<code>z200</code>).",
          "y": [
            29.2,
            17.5
          ]
        },
        {
          "name": "MoveJ Start End",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째와 마지막 타겟에 <code>MoveJ</code> 를 적용한다.<br> • <code>FALSE</code>: 모든 타겟에 설정한 모션 유형을 적용한다.<br>기본값은 <code>FALSE</code>.",
          "en": "• <code>TRUE</code>: applies <code>MoveJ</code> to the first and last targets.<br> • <code>FALSE</code>: applies the selected motion type to every target.<br>Default: <code>FALSE</code>.",
          "y": [
            51.5,
            17.5
          ]
        },
        {
          "name": "Fine Start End",
          "type": "Toggle",
          "ko": "• <code>TRUE</code>: 첫 번째와 마지막 타겟의 Zone 을 <code>fine</code>(정밀 정지)으로 적용한다.<br> • <code>FALSE</code>: 모든 타겟에 설정한 Zone 을 적용한다.<br>기본값은 <code>FALSE</code>.",
          "en": "• <code>TRUE</code>: applies zone <code>fine</code> (exact stop) to the first and last targets.<br> • <code>FALSE</code>: applies the selected zone to every target.<br>Default: <code>FALSE</code>.",
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
    "name": "Signal",
    "type": "String",
    "ko": "이동하면서 값을 바꿀 출력 신호의 이름. 로봇 컨트롤러에 정의된 신호 이름과 같아야 한다.",
    "en": "Name of the output signal set during the move. It must match a signal name defined in the robot controller."
  },
  {
    "name": "DO Value",
    "type": "Boolean",
    "ko": "출력 신호에 쓸 디지털 출력 값.",
    "en": "Digital output value written to the signal."
  }
];

export const main = "moveoutput_main.png";

export const outputs = [
  {
    "name": "Instruction",
    "type": "Instruction",
    "ko": "생성된 이동·출력 인스트럭션을 출력한다. <a href=\"/core/gerty-core/\">GERTY Core</a> 의 <strong>Instructions</strong> 입력에 연결한다.",
    "en": "The generated move-and-output instructions. Connect it to the <strong>Instructions</strong> input of <a href=\"/en/core/gerty-core/\">GERTY Core</a>."
  }
];
