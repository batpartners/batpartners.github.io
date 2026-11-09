// Data for the IOEvent page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IO Event",
      "img": "iodevent_tab1.png",
      "rows": [
        {
          "name": "Signal Type",
          "type": "Dropdown",
          "ko": "출력 신호 유형을 선택한다 (Digital Output / Group Output / Analog Output). 선택한 유형에 따라 아래 값 입력 칸이 DO Value / GO Value / AO Value 로 바뀐다. 기본값은 Digital Output.",
          "en": "Selects the output signal type (Digital Output / Group Output / Analog Output). The value control below switches to DO Value / GO Value / AO Value to match. Default: Digital Output.",
          "y": [
            37.6,
            22.6
          ]
        },
        {
          "name": "Value",
          "type": "Toggle",
          "ko": "트리거 위치에서 출력 신호에 쓸 값을 설정한다. Digital Output 일 때는 DO Value 토글(TRUE / FALSE)이며, 기본값은 FALSE. <strong>Signal Type</strong> 이 Group Output 이면 GO Value, Analog Output 이면 AO Value 입력으로 바뀐다.",
          "en": "Sets the value written to the output signal at the trigger position. For Digital Output it is the DO Value toggle (TRUE / FALSE); default: FALSE. When <strong>Signal Type</strong> is Group Output it becomes GO Value, and for Analog Output it becomes AO Value.",
          "y": [
            66.2,
            22.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Settings",
      "img": "iodevent_tab2.png",
      "rows": [
        {
          "name": "Used",
          "type": "Toggle",
          "ko": "이 이벤트의 사용 여부를 설정한다 (TRUE: 활성화 / FALSE: 비활성화). 기본값은 TRUE.",
          "en": "Sets whether this event is used (TRUE: enabled / FALSE: disabled). Default: TRUE.",
          "y": [
            25,
            14.2
          ]
        },
        {
          "name": "Start",
          "type": "Toggle",
          "ko": "거리의 기준점을 설정한다.<br>• TRUE: (TriggLIOs에 의한) 이동 시작점을 기준으로 한다.<br>• FALSE: (TriggLIOs에 의한) 이동 종료점을 기준으로 한다.<br>기본값은 FALSE.",
          "en": "Sets the reference point for the distance.<br>• TRUE: measured from the start point of the movement (by TriggLIOs).<br>• FALSE: measured from the end point of the movement (by TriggLIOs).<br>Default: FALSE.",
          "y": [
            42.9,
            14.2
          ]
        },
        {
          "name": "Distance",
          "type": "Number",
          "ko": "TriggLIOs 이동 경로상에서 I/O 트리거가 발생할 위치 (mm). <strong>Start</strong> 에서 정한 기준점으로부터의 거리이다. 기본값은 0.",
          "en": "Position (mm) along the TriggLIOs movement path at which the I/O trigger fires, measured from the reference point set by <strong>Start</strong>. Default: 0.",
          "y": [
            60.8,
            14.2
          ]
        },
        {
          "name": "EquipLag(s)",
          "type": "Number",
          "ko": "외부 장비의 응답 지연 보상값 (s) 을 설정한다.<br>• 양수(+): 지정 위치에 도달하기 전에 신호를 미리 발생시킨다.<br>• 음수(-): 지정 위치를 지난 뒤에 신호를 발생시킨다.<br>기본값은 0 (범위 -5 ~ 5).",
          "en": "Sets the response-delay compensation (s) of the external equipment.<br>• Positive (+): fires the signal before the TCP reaches the trigger position.<br>• Negative (-): fires the signal after the trigger position is passed.<br>Default: 0 (range -5 to 5).",
          "y": [
            78.8,
            14.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Signal",
    "type": "String",
    "ko": "값을 바꿀 출력 신호의 이름을 입력한다. 신호 유형은 <strong>Signal Type</strong> 설정과 맞아야 한다.",
    "en": "Name of the output signal to change. Its type must match the <strong>Signal Type</strong> setting."
  }
];

export const main = "iodevent_main.png";

export const outputs = [
  {
    "name": "IOEvent",
    "type": "IOEvent",
    "ko": "정의된 ABB TriggIOs용 IO 이벤트를 출력한다. <a href=\"/datatype/triggios/\">TriggIOs</a> 의 <strong>IOEvent</strong> 입력에 연결한다.",
    "en": "Outputs the defined IO event for ABB TriggIOs. Connect it to the <strong>IOEvent</strong> input of <a href=\"/en/datatype/triggios/\">TriggIOs</a>."
  },
  {
    "name": "code",
    "type": "code",
    "ko": "생성된 코드를 출력한다.",
    "en": "Outputs the generated code."
  }
];
