// Data for the SeamData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SeamData",
      "img": "seamdata_tab1.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "생성할 <code>SeamData</code> 의 변수명을 정의한다. 기본값은 seam1.",
          "en": "Defines the variable name of the <code>SeamData</code> to create. Default: seam1.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Link ArcData",
          "type": "Toggle",
          "ko": "점화(Ignition)·가열(Heat)·종료(End) 모든 단계의 ArcData 값을 연동한다.<br>• TRUE: 한 단계의 값을 바꾸면 나머지 단계도 같은 값으로 맞춰진다.<br>• FALSE: 단계별로 따로 조절한다.<br>기본값은 TRUE.",
          "en": "Links the ArcData values of all phases (Ignition, Heat, End).<br>• TRUE: changing one phase sets the others to the same value.<br>• FALSE: each phase is adjusted independently.<br>Default: TRUE.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    }
  ],
  [
    {
      "label": "Ignition ArcData",
      "img": "seamdata_tab2.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "점화(Ignition) 단계의 용접 전압을 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 아크 길이 보정값으로 동작한다. 기본값은 0 (범위 -20 ~ 20).",
          "en": "Welding voltage in the ignition phase (ABB convention). With Fronius TPS/TPS-i it acts as the arc-length correction. Default: 0 (range -20 to 20).",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "점화(Ignition) 단계의 와이어 송급 속도 (m/min) 를 설정한다. ABB / Fronius 공통이다. 기본값은 3 (범위 0 ~ 15).",
          "en": "Wire feed speed in the ignition phase (m/min). Same on ABB and Fronius. Default: 3 (range 0 to 15).",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "점화(Ignition) 단계의 컨트롤 파라미터를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 다이내믹(Dynamic) 보정값으로 동작한다. 기본값은 0 (범위 -10 ~ 10).",
          "en": "Control parameter in the ignition phase (ABB convention). With Fronius TPS/TPS-i it acts as the dynamic correction. Default: 0 (range -10 to 10).",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "점화(Ignition) 단계의 용접 전류를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 에서는 사용되지 않는다. 기본값은 0.",
          "en": "Welding current in the ignition phase (ABB convention). Not used with Fronius TPS/TPS-i. Default: 0.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    },
    {
      "label": "Heat ArcData",
      "img": "seamdata_tab3.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "가열(Heat) 단계의 용접 전압을 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 아크 길이 보정값으로 동작한다. 기본값은 0 (범위 -20 ~ 20).",
          "en": "Welding voltage in the heat phase (ABB convention). With Fronius TPS/TPS-i it acts as the arc-length correction. Default: 0 (range -20 to 20).",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "가열(Heat) 단계의 와이어 송급 속도 (m/min) 를 설정한다. ABB / Fronius 공통이다. 기본값은 3 (범위 0 ~ 15).",
          "en": "Wire feed speed in the heat phase (m/min). Same on ABB and Fronius. Default: 3 (range 0 to 15).",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "가열(Heat) 단계의 컨트롤 파라미터를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 다이내믹(Dynamic) 보정값으로 동작한다. 기본값은 0 (범위 -10 ~ 10).",
          "en": "Control parameter in the heat phase (ABB convention). With Fronius TPS/TPS-i it acts as the dynamic correction. Default: 0 (range -10 to 10).",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "가열(Heat) 단계의 용접 전류를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 에서는 사용되지 않는다. 기본값은 0.",
          "en": "Welding current in the heat phase (ABB convention). Not used with Fronius TPS/TPS-i. Default: 0.",
          "y": [
            79.1,
            14.2
          ]
        }
      ]
    },
    {
      "label": "End ArcData",
      "img": "seamdata_tab4.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "종료(End) 단계의 용접 전압을 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 아크 길이 보정값으로 동작한다. 기본값은 0 (범위 -20 ~ 20).",
          "en": "Welding voltage in the end phase (ABB convention). With Fronius TPS/TPS-i it acts as the arc-length correction. Default: 0 (range -20 to 20).",
          "y": [
            25.1,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "종료(End) 단계의 와이어 송급 속도 (m/min) 를 설정한다. ABB / Fronius 공통이다. 기본값은 3 (범위 0 ~ 15).",
          "en": "Wire feed speed in the end phase (m/min). Same on ABB and Fronius. Default: 3 (range 0 to 15).",
          "y": [
            43.1,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "종료(End) 단계의 컨트롤 파라미터를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 사용 시 다이내믹(Dynamic) 보정값으로 동작한다. 기본값은 0 (범위 -10 ~ 10).",
          "en": "Control parameter in the end phase (ABB convention). With Fronius TPS/TPS-i it acts as the dynamic correction. Default: 0 (range -10 to 10).",
          "y": [
            61.1,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "종료(End) 단계의 용접 전류를 설정한다 (ABB 컨벤션). Fronius TPS/TPS-i 에서는 사용되지 않는다. 기본값은 0.",
          "en": "Welding current in the end phase (ABB convention). Not used with Fronius TPS/TPS-i. Default: 0.",
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
      "label": "Ignition Params",
      "img": "seamdata_tab5.png",
      "rows": [
        {
          "name": "Purge Time(s)",
          "type": "Number",
          "ko": "보호 가스가 가스 라인과 용접 토치를 채우는 데 필요한 시간 (s) 을 설정한다. 로봇이 용접 시작 위치로 이동하는 시간이 퍼지 시간보다 짧으면, 시작 위치에서 퍼지 시간이 끝날 때까지 대기한다. 기본값은 0.",
          "en": "Shielding-gas purge time (s) needed to fill the gas line and welding torch. If the travel time to the weld start position is shorter than the purge time, the robot waits at the start position until the purge time has elapsed. Default: 0.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Preflow Time(s)",
          "type": "Number",
          "ko": "용접 전에 작업물에 보호 가스를 미리 공급하는 시간 (s) 을 설정한다. 이 시간 동안 로봇은 아크가 점화되기 전까지 해당 위치에서 정지한다. 기본값은 0.",
          "en": "Pre-flow time (s) during which shielding gas flows over the workpiece before welding. The robot stays at the position during this time, until the arc is ignited. Default: 0.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Move Delay(s)",
          "type": "Number",
          "ko": "아크가 점화되어 안정된 시점부터 가열(Heat) 단계가 시작될 때까지의 지연 시간 (s) 을 설정한다. 기본값은 0.",
          "en": "Delay time (s) from the moment the ignited arc becomes stable until the heat phase starts. Default: 0.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "Heat Params",
      "img": "seamdata_tab6.png",
      "rows": [
        {
          "name": "Heat Speed",
          "type": "Number",
          "ko": "용접 시작부의 가열(Heat) 단계 동안 적용되는 용접 속도를 설정한다. 기본값은 0.",
          "en": "Welding speed during the heat phase at the start of the weld. Default: 0.",
          "y": [
            30.6,
            17.3
          ]
        },
        {
          "name": "Heat Time(s)",
          "type": "Number",
          "ko": "용접 시작부의 가열(Heat) 시간 (s) 을 설정한다. <strong>Heat Distance</strong> 또는 <strong>Heat Speed</strong> 가 0 일 때만 적용된다. 기본값은 0.",
          "en": "Heating time (s) at the start of the weld. Applies only when <strong>Heat Distance</strong> or <strong>Heat Speed</strong> is 0. Default: 0.",
          "y": [
            52.6,
            17.3
          ]
        },
        {
          "name": "Heat Distance",
          "type": "Number",
          "ko": "용접 시작부에서 가열(Heat) 데이터가 적용된 상태로 이동하는 거리를 설정한다. 기본값은 0.",
          "en": "Distance over which the heat data is applied at the start of the weld. Default: 0.",
          "y": [
            74.6,
            17.3
          ]
        }
      ]
    },
    {
      "label": "End Params",
      "img": "seamdata_tab7.png",
      "rows": [
        {
          "name": "Cool Time(s)",
          "type": "Number",
          "ko": "크레이터 채움(Filling)이 수행되기 전에 공정을 유지하며 대기(냉각)하는 시간 (s) 을 설정한다. 기본값은 0.",
          "en": "Hold (cooling) time (s) before crater filling is performed. Default: 0.",
          "y": [
            21.3,
            12
          ]
        },
        {
          "name": "Fill Time(s)",
          "type": "Number",
          "ko": "용접 종료(End) 단계에서 크레이터(Crater)를 채우는 시간 (s) 을 설정한다. 기본값은 0.",
          "en": "Crater fill time (s) during the weld end phase. Default: 0.",
          "y": [
            36.5,
            12
          ]
        },
        {
          "name": "Burn-back Time(s)",
          "type": "Number",
          "ko": "와이어 송급이 정지된 뒤 용접 와이어를 태워 되돌리는(Burn-back) 시간 (s) 을 설정한다. MIG/MAG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 막는다. 용접 단계가 끝날 때와 크레이터 채움이 끝난 뒤, 두 번 적용된다. 기본값은 0.",
          "en": "Burn-back time (s) after the wire feed stops. Prevents the wire from sticking to the solidifying weld pool at the end of a MIG/MAG process. Applied twice: when the welding phase ends and after crater filling is completed. Default: 0.",
          "y": [
            51.8,
            12
          ]
        },
        {
          "name": "Roll-back Time(s)",
          "type": "Number",
          "ko": "용접 전원이 차단된 뒤 콜드 와이어(Cold Wire)를 되감는 시간 (s) 을 설정한다. TIG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 막는다. 기본값은 0.",
          "en": "Cold-wire retract time (s) after the welding power is turned off. Prevents the wire from sticking to the solidifying weld pool at the end of a TIG process. Default: 0.",
          "y": [
            67.1,
            12
          ]
        },
        {
          "name": "Postflow Time(s)",
          "type": "Number",
          "ko": "공정이 끝난 뒤 보호 가스를 계속 공급(Purge)하는 시간 (s) 을 설정한다. 냉각 중 용접 전극과 용접부가 산화되는 것을 막는다. 기본값은 0.",
          "en": "Post-flow time (s) of shielding gas after the process ends. Prevents oxidation of the electrode and weld during cooling. Default: 0.",
          "y": [
            82.3,
            12
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
  }
];

export const main = "seamdata_main.png";

export const outputs = [
  {
    "name": "SeamData",
    "type": "SeamData",
    "ko": "정의된 ABB SeamData 를 출력한다.",
    "en": "Outputs the defined ABB SeamData."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 RAPID 코드를 출력한다.",
    "en": "Outputs the generated RAPID code."
  }
];
