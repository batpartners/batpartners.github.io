// Data for the WeldData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WeldData",
      "img": "8_WeldData_10.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WeldData</code>의 변수명을 정의한다.",
          "en": "Variable name.",
          "y": [
            51.6,
            32.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Weld ArcData",
      "img": "8_WeldData_11.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "용접 전압을 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 아크 길이 보정값으로 동작한다.",
          "en": "Welding voltage (ABB convention). Fronius TPS/TPS-i: Arc length correction.",
          "y": [
            24.6,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "와이어 송급 속도(m/min)를 설정한다. (ABB / Fronius 공통)",
          "en": "Wire feed speed (m/min). Common to both ABB / Fronius.",
          "y": [
            42.7,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "컨트롤 파라미터를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 다이내믹(Dynamic) 보정값으로 동작한다.",
          "en": "Control parameter (ABB convention). Fronius TPS/TPS-i: Dynamic correction.",
          "y": [
            60.7,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "용접 전류를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 모드에서는 사용되지 않는다.",
          "en": "Welding current (ABB convention). Not used in Fronius TPS/TPS-i.",
          "y": [
            78.7,
            15.2
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Weld Param",
      "img": "8_WeldData_12.png",
      "rows": [
        {
          "name": "Weld Speed(mm/s)",
          "type": "Number",
          "ko": "용접 중 TCP 선속도(mm/s)를 설정한다. 실제 비드 형상 및 적층 높이를 결정하는 핵심 요소이다.",
          "en": "TCP linear speed during welding (mm/s). A key factor determining the actual bead shape and layer height.",
          "y": [
            51,
            31.4
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Weld Sched",
    "type": "Weld Sched",
    "ko": "사용할 용접 프로그램 번호(스케줄) 및 용접 모드를 입력한다.",
    "en": "The welding program number (schedule) and welding mode to be used."
  },
  {
    "name": "Weighting",
    "type": "Number",
    "ko": "<code>wirefeed1</code>에 대한 가중치를 설정한다.",
    "en": "Weight factor for wirefeed1."
  },
  {
    "name": "WeaveData",
    "type": "WeaveData",
    "ko": "<a href=\"/datatype/weavedata/\">ABB WeaveData</a> 구성 데이터를 연결한다.",
    "en": "ABB WeaveData configuration data."
  }
];

export const main = "8_WeldData.png";

export const outputs = [
  {
    "name": "WeldData",
    "type": "WeldData",
    "ko": "정의된 ABB WeldData를 출력한다.",
    "en": "Outputs the configured ABB WeldData stream."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 RAPID 코드 구문을 출력한다.",
    "en": "Outputs the compiled RAPID command code."
  }
];
