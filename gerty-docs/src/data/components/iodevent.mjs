// Data for the IOEvent page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "IOData Signal",
      "img": "4_IOEvent_1.png",
      "rows": [
        {
          "name": "Signal Type",
          "type": "Dropdown",
          "ko": "출력 신호 유형을 지정한다 (디지털 / 그룹 / 아날로그).",
          "en": "Specifies the output signal type (Digital / Group / Analog).",
          "y": [
            36.1,
            27.1
          ]
        },
        {
          "name": "DO Value",
          "type": "Toggle",
          "ko": "이벤트 활성화 여부를 설정한다 (True: 활성화 / False: 비활성화).",
          "en": "Sets whether the event is enabled (True: enabled / False: disabled).",
          "y": [
            64.7,
            24.1
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Settings",
      "img": "4_IOEvent_2.png",
      "rows": [
        {
          "name": "Used",
          "type": "Toggle",
          "ko": "해당 이벤트의 사용 여부를 설정한다 (True: 활성화 / False: 비활성화).",
          "en": "Sets whether this event is used (True: enabled / False: disabled).",
          "y": [
            23.6,
            14.8
          ]
        },
        {
          "name": "Start",
          "type": "Toggle",
          "ko": "거리 기준점을 설정한다.<br>• TRUE: (TriggLIOs에 의한) 이동 시작점을 기준으로 한다.<br>• FALSE: (TriggLIOs에 의한) 이동 종료점을 기준으로 한다.",
          "en": "Sets the distance reference point.<br>• TRUE: Measured from the start point of the movement (by TriggLIOs).<br>• FALSE: Measured from the end point of the movement (by TriggLIOs).",
          "y": [
            41.7,
            14.4
          ]
        },
        {
          "name": "Distance(mm)",
          "type": "Double",
          "ko": "TriggLIOs 이동 경로상에서 I/O 트리거가 발생할 위치(mm)를 입력한다. Start 파라미터에서 설정한 기준점으로부터의 거리이다.",
          "en": "Inputs the position (mm) on the TriggLIOs movement path where the I/O trigger occurs. It is the distance from the reference point set by the Start parameter.",
          "y": [
            58.8,
            15.7
          ]
        },
        {
          "name": "EquipLag(sec.)",
          "type": "Double",
          "ko": "외부 장비의 응답 지연 보상값(s)을 설정한다.<br>• 양수(+): 지정 위치 도달 전에 미리 신호를 발생시킨다.<br>• 음수(-): 지정 위치 통과 후 신호를 발생시킨다.",
          "en": "Sets the response delay compensation (s) of the external equipment.<br>• Positive (+): Triggers the signal before reaching the specified position.<br>• Negative (-): Triggers the signal after passing the specified position.",
          "y": [
            76.4,
            16.7
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
    "ko": "신호 데이터를 입력한다.",
    "en": "Inputs the signal data."
  }
];

export const main = "4_IOEvent.png";

export const outputs = [
  {
    "name": "IO Data",
    "type": "IOEvent",
    "ko": "정의된 ABB TriggIOs용 IO 이벤트를 출력한다.",
    "en": "Outputs the defined IO event for ABB TriggIOs."
  },
  {
    "name": "code",
    "type": "code",
    "ko": "생성된 코드를 출력한다.",
    "en": "Outputs the generated code."
  }
];
