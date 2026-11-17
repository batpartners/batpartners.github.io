// Data for the WeldData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WeldData",
      "img": "welddata_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>WeldData</code> 의 변수명을 정의한다. 특수문자로 시작하거나 한글을 쓸 수 없다. 기본값은 weld1.",
          "en": "Defines the variable name of the <code>WeldData</code> to create. It cannot start with a special character or contain Korean. Default: weld1.",
          "y": [
            52.7,
            32.3
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Weld ArcData",
      "img": "welddata_tab2.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "용접 전압을 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 아크 길이 보정값으로 동작한다. 기본값은 0 (범위 -20 ~ 20).",
          "en": "Welding voltage (ABB convention). With Fronius TPS/TPS-i it acts as the arc-length correction. Default: 0 (range -20 to 20).",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "와이어 송급 속도 (m/min) 를 설정한다. ABB / Fronius 공통이다. 기본값은 3 (범위 0 ~ 15).",
          "en": "Wire feed speed (m/min). Same on ABB and Fronius. Default: 3 (range 0 to 15).",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "컨트롤 파라미터를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 다이내믹(Dynamic) 보정값으로 동작한다. 기본값은 0 (범위 -10 ~ 10).",
          "en": "Control parameter (ABB convention). With Fronius TPS/TPS-i it acts as the dynamic correction. Default: 0 (range -10 to 10).",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "용접 전류를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 에서는 사용되지 않는다. 기본값은 0.",
          "en": "Welding current (ABB convention). Not used with Fronius TPS/TPS-i. Default: 0.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Weld Param",
      "img": "welddata_tab3.png",
      "rows": [
        {
          "name": "Weld Speed(mm/s)",
          "type": "Number",
          "ko": "용접 중 TCP 선속도 (mm/s) 를 설정한다. 실제 비드 형상과 적층 높이를 결정하는 핵심 요소이다. 기본값은 8 (범위 1 ~ 15).",
          "en": "TCP linear speed (mm/s) during welding. A key factor in the actual bead shape and layer height. Default: 8 (range 1 to 15).",
          "y": [
            54.6,
            30.9
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
    "ko": "사용할 용접 프로그램 번호(스케줄)와 용접 모드를 입력한다.",
    "en": "Weld program number (schedule) and weld mode to use."
  },
  {
    "name": "Weight",
    "type": "Number",
    "optional": true,
    "ko": "<code>wirefeed1</code> 에 대한 가중치를 설정한다.",
    "en": "Weighting factor for <code>wirefeed1</code>."
  },
  {
    "name": "WeaveData",
    "type": "WeaveData",
    "optional": true,
    "ko": "<a href=\"/datatype/weavedata/\">WeaveData</a> 를 연결한다. 위빙이 필요할 때 연결한다.",
    "en": "<a href=\"/en/datatype/weavedata/\">WeaveData</a> to apply. Connect it when weaving is needed."
  }
];

export const main = "welddata_main.png";

export const outputs = [
  {
    "name": "WeldData",
    "type": "WeldData",
    "ko": "정의된 ABB WeldData 를 출력한다.",
    "en": "Outputs the defined ABB WeldData."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 RAPID 코드를 출력한다.",
    "en": "Outputs the generated RAPID code."
  }
];
