// Data for the Socket Sender page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Connect",
      "img": "socketsender_tab1.png",
      "rows": [
        {
          "name": "Connect",
          "type": "Toggle",
          "ko": "TCP 소켓으로 ABB 컨트롤러에 연결하거나 연결을 끊는다. 기본값은 꺼짐(False).",
          "en": "Connects to or disconnects from the ABB controller over the TCP socket. Default: off (False).",
          "y": [
            52.6,
            31.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Queue/Timing",
      "img": "socketsender_tab2.png",
      "rows": [
        {
          "name": "Max Queue",
          "type": "Integer",
          "ko": "로봇 큐의 목표 상한이다. 기본값은 350 (범위 100 ~ 499).",
          "en": "Target upper limit of the robot queue. Default: 350 (range 100–499).",
          "y": [
            25,
            14.2
          ]
        },
        {
          "name": "Max Tick",
          "type": "Integer",
          "ko": "타이머 콜백 1회당 보내는 최대 패킷 수이다. 기본값은 35 (범위 10 ~ 100).",
          "en": "Maximum number of packets sent per timer callback. Default: 35 (range 10–100).",
          "y": [
            42.9,
            14.2
          ]
        },
        {
          "name": "Bundle Size",
          "type": "Integer",
          "ko": "1회 전송에 묶어 보내는 인스트럭션 수이다. 기본값은 5 (범위 1 ~ 8, 최대 권장값 8).",
          "en": "Number of instructions bundled into one transmission. Default: 5 (range 1–8; 8 is the recommended maximum).",
          "y": [
            60.8,
            14.2
          ]
        },
        {
          "name": "Interval(ms)",
          "type": "Integer",
          "ko": "전송 타이머 주기 (ms)이다. 줄이면 반응성이 좋아지고, 늘리면 부하가 줄어든다. 기본값은 100 (10 Hz, 범위 20 ~ 150).",
          "en": "Transmission timer interval (ms). A shorter interval improves responsiveness; a longer one reduces the load. Default: 100 (10 Hz, range 20–150).",
          "y": [
            78.8,
            14.2
          ]
        }
      ]
    },
    {
      "label": "Contorol",
      "img": "socketsender_tab3.png",
      "rows": [
        {
          "name": "Send",
          "type": "Toggle",
          "ko": "연결된 상태에서 패킷 전송을 허용하는 토글이다.<br> • TRUE: 패킷 스트리밍을 시작한다.<br> • FALSE: 전송을 멈추고 로봇을 일시 정지한다. 기본값이다.",
          "en": "Toggle that allows packet streaming while connected.<br> • TRUE: starts packet streaming.<br> • FALSE: stops transmission and pauses the robot (default).",
          "y": [
            39,
            22.1
          ]
        },
        {
          "name": "Reset",
          "type": "Button",
          "ko": "전송 상태를 초기화한다. 전송을 잠시 멈추고 인덱스를 처음으로 되돌려 첫 패킷부터 다시 보낸다.<br> 로봇은 정지한 뒤 첫 패킷을 받으면 시작 위치부터 다시 움직인다.",
          "en": "Resets the transmission state. Briefly pauses streaming, returns the index to the start and resends from the first packet.<br> The robot stops, then moves again from the start position when it receives the first packet.",
          "y": [
            66.9,
            22.1
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Log/Status",
      "img": "socketsender_tab4.png",
      "rows": [
        {
          "name": "Log & Status",
          "type": "Panel",
          "ko": "소켓 통신 상태와 로그를 보여 준다.",
          "en": "Shows the socket communication status and log.",
          "y": [
            41.9,
            46.5
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "SocketBundle",
    "type": "SocketBundle",
    "ko": "소켓 클라이언트와 인스트럭션 패킷 리스트를 묶은 데이터 번들이다. <a href=\"/core/code-solver-option/\">Code Solver (Option)</a> 의 <strong>SocketBundle</strong> 출력을 연결한다.",
    "en": "Data bundle of a socket client and an instruction packet list. Connect the <strong>SocketBundle</strong> output of <a href=\"/en/core/code-solver-option/\">Code Solver (Option)</a>."
  }
];

export const main = "socketsender_main.png";

export const outputs = [];
