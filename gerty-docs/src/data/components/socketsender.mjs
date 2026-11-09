// Data for the Socket Sender page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Connect",
      "img": "2_SocketSender_10.png",
      "rows": [
        {
          "name": "Connect",
          "type": "Toggle",
          "ko": "소켓으로 ABB 컨트롤러에 연결하거나 연결을 끊는다.",
          "en": "Connects to or disconnects from the ABB controller over the socket.",
          "y": [
            51.6,
            32.6
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Queue/Timing",
      "img": "2_SocketSender_11.png",
      "rows": [
        {
          "name": "Max Queue",
          "type": "Number",
          "ko": "로봇 큐 목표 상한. (기본: 350)",
          "en": "Target upper limit for the robot queue. (Default: 350)",
          "y": [
            24.1,
            15.1
          ]
        },
        {
          "name": "Max Tick",
          "type": "Number",
          "ko": "타이머 1회 콜백당 최대 전송 패킷 수 (기본: 35)",
          "en": "Maximum packets sent per timer callback. (Default: 35)",
          "y": [
            42,
            15.1
          ]
        },
        {
          "name": "Bundle Size",
          "type": "Number",
          "ko": "번들 크기: 1회 전송당 묶어 보낼 인스트럭션 수 (기본: 5, 최대 권장: 8)",
          "en": "Bundle size: Number of instructions grouped per transmission. (Default: 5, Max recommended: 8)",
          "y": [
            59.9,
            15.1
          ]
        },
        {
          "name": "Interval(ms)",
          "type": "Number",
          "ko": "타이머 주기 (ms). 기본 100ms = 10Hz. 줄이면 반응성 향상, 늘리면 부하 감소.",
          "en": "Timer interval (ms). Default 100ms = 10Hz. Decreasing improves responsiveness, increasing reduces load.",
          "y": [
            78.3,
            14.6
          ]
        }
      ]
    },
    {
      "label": "Contorol",
      "img": "2_SocketSender_13.png",
      "rows": [
        {
          "name": "Send",
          "type": "Toggle",
          "ko": "연결된 상태에서 패킷 전송을 인가하는 토글.<br> • TRUE: 패킷 스트리밍 시작.<br> • FALSE: 전송 중지 및 로봇 일시 정지 (기본값).",
          "en": "Toggle to authorize packet transmission while connected.<br> • TRUE: Start packet streaming.<br> • FALSE: Stop transmission and pause the robot (Default).",
          "y": [
            40.4,
            20.6
          ]
        },
        {
          "name": "Reset",
          "type": "Button",
          "ko": "전송 상태 초기화. 전송을 잠시 멈추고 인덱스를 처음으로 되돌려 첫 패킷부터 재전송.<br> 로봇은 정지 후 첫 패킷 수신 시 시작 위치부터 다시 동작.",
          "en": "Reset transmission state. Temporarily pauses transmission, resets index to the beginning, and retransmits from the first packet.<br> The robot stops and resumes operation from the initial position upon receiving the first packet.",
          "y": [
            65.4,
            23.5
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Log/Status",
      "img": "2_SocketSender_12.png",
      "rows": [
        {
          "name": "Panel",
          "type": "Panel",
          "ko": "소켓 통신 상태와 로그.",
          "en": "Socket communication status and log.",
          "y": [
            33.1,
            42.7
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
    "ko": "<a href=\"/core/code-solver-option/\">Code Solver (Option)</a> 의 SocketBundle 출력(소켓 클라이언트와 인스트럭션 패킷 리스트).",
    "en": "The SocketBundle output of <a href=\"/en/core/code-solver-option/\">Code Solver (Option)</a> (socket client and instruction packet list)."
  }
];

export const main = "2_SocketSender.png";

export const outputs = [];
