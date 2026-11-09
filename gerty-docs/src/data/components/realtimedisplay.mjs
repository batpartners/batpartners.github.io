// Data for the RealTimeDisplay page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "RealTime Stream",
      "img": "5_RealTimeDisplay_10.png",
      "rows": [
        {
          "name": "Interval(ms)",
          "type": "Number",
          "ko": "실시간 스트림 갱신 간격 (ms).",
          "en": "Real-time stream update interval (ms).",
          "y": [
            35.3,
            22.1
          ]
        },
        {
          "name": "Realtime Stream",
          "type": "Toggle",
          "ko": "실시간 스트림을 시작하거나 멈춘다.",
          "en": "Starts or stops the real-time stream.",
          "y": [
            63.2,
            22.1
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "GERTY Robot",
    "type": "GERTY Robot",
    "ko": "<a href=\"/robot-tool/abbrobot/\">ABB Robots</a> 의 GERTY Robot 출력.",
    "en": "The GERTY Robot output of <a href=\"/en/robot-tool/abbrobot/\">ABB Robots</a>."
  },
  {
    "name": "ABB Controller",
    "type": "ABB Controller",
    "ko": "PC 에 연결된 ABB 컨트롤러. <a href=\"/controller-utils/scanabbcontroller/\">Scan ABB Controller</a> 의 출력을 연결한다.",
    "en": "The ABB controller connected to this PC. Connect the output of <a href=\"/en/controller-utils/scanabbcontroller/\">Scan ABB Controller</a>."
  },
  {
    "name": "Signal",
    "type": "String",
    "ko": "실시간으로 값을 읽을 I/O 신호 이름.",
    "en": "Name of the I/O signal to read in real time."
  }
];

export const main = "5_RealTimeDisplay.png";

export const outputs = [
  {
    "name": "Robot Angle",
    "type": "String",
    "ko": "로봇 축 각도.",
    "en": "Robot axis angles."
  },
  {
    "name": "External Angle",
    "type": "String",
    "ko": "외부축 각도.",
    "en": "External axis angles."
  },
  {
    "name": "CurrentPos",
    "type": "Plane",
    "ko": "현재 TCP 평면.",
    "en": "The current TCP plane."
  },
  {
    "name": "Signal Values",
    "type": "Number",
    "ko": "읽어 온 신호 값.",
    "en": "The signal values read."
  }
];
