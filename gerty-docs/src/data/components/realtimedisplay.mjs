// Data for the RealTimeDisplay page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RealTime Stream",
      "img": "realtimedisplay_tab1.png",
      "rows": [
        {
          "name": "Interval(ms)",
          "type": "Integer",
          "ko": "실시간 스트림 갱신 간격 (ms)이다. 기본값은 50 (범위 10 ~ 100).",
          "en": "Real-time stream update interval (ms). Default: 50 (range 10–100).",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Realtime Stream",
          "type": "Toggle",
          "ko": "실시간 스트림을 시작하거나 멈춘다. 기본값은 꺼짐(False).",
          "en": "Starts or stops the real-time stream. Default: off (False).",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTY Robot",
    "type": "Robot Setup",
    "ko": "실시간 자세를 표시할 로봇이다. <a href=\"/robot-tool/abbrobot/\">ABB Robots</a> 의 <strong>Robot Setup</strong> 출력을 연결한다.",
    "en": "The robot whose live pose is displayed. Connect the <strong>Robot Setup</strong> output of <a href=\"/en/robot-tool/abbrobot/\">ABB Robots</a>."
  },
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러이다. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 <strong>ABB Controller</strong> 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the <strong>ABB Controller</strong> output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  },
  {
    "name": "Signal",
    "type": "String",
    "optional": true,
    "ko": "실시간으로 값을 읽을 I/O 신호 이름이다. <a href=\"/controller-utils/scaniosystems/\">Scan IOSystems</a> 의 <strong>Signals</strong> 출력을 쓸 수 있다. 신호를 볼 필요가 없으면 연결하지 않아도 된다.",
    "en": "Names of the I/O signals to read in real time. The <strong>Signals</strong> output of <a href=\"/en/controller-utils/scaniosystems/\">Scan IOSystems</a> can be used. Leave it unconnected if no signals are needed."
  }
];

export const main = "realtimedisplay_main.png";

export const outputs = [
  {
    "name": "RobAx Angle",
    "type": "String",
    "ko": "현재 로봇 축(관절) 각도이다.",
    "en": "Current robot axis (joint) angles."
  },
  {
    "name": "ExtAx Angle",
    "type": "String",
    "ko": "현재 외부축 각도이다.",
    "en": "Current external axis angles."
  },
  {
    "name": "TCP",
    "type": "Plane",
    "ko": "현재 TCP 평면이다.",
    "en": "Current TCP plane."
  },
  {
    "name": "Signal Values",
    "type": "Number",
    "ko": "<strong>Signal</strong> 로 지정한 신호의 현재 값이다.",
    "en": "Current values of the signals given in <strong>Signal</strong>."
  }
];
