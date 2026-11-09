// Data for the SeamData page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "SeamData",
      "img": "7_SeamData_10.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "컴포넌트의 변수명을 지정한다.",
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
      "label": "Ignition ArcData",
      "img": "7_SeamData_11.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.",
          "en": "Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.",
          "y": [
            24.6,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).",
          "en": "Wire feed speed (m/min). Common to both ABB and Fronius systems.",
          "y": [
            42.7,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.",
          "en": "Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.",
          "y": [
            60.7,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.",
          "en": "Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.",
          "y": [
            78.7,
            15.2
          ]
        }
      ]
    },
    {
      "label": "Heat ArcData",
      "img": "7_SeamData_12.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.",
          "en": "Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.",
          "y": [
            24.6,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).",
          "en": "Wire feed speed (m/min). Common to both ABB and Fronius systems.",
          "y": [
            42.7,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.",
          "en": "Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.",
          "y": [
            60.7,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.",
          "en": "Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.",
          "y": [
            78.7,
            15.2
          ]
        }
      ]
    },
    {
      "label": "End ArcData",
      "img": "7_SeamData_13.png",
      "rows": [
        {
          "name": "Voltage",
          "type": "Number",
          "ko": "용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.",
          "en": "Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.",
          "y": [
            24.6,
            14.2
          ]
        },
        {
          "name": "WireFeed(m/min)",
          "type": "Number",
          "ko": "와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).",
          "en": "Wire feed speed (m/min). Common to both ABB and Fronius systems.",
          "y": [
            42.7,
            14.2
          ]
        },
        {
          "name": "Control",
          "type": "Number",
          "ko": "제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.",
          "en": "Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.",
          "y": [
            60.7,
            14.2
          ]
        },
        {
          "name": "Current",
          "type": "Number",
          "ko": "용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.",
          "en": "Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.",
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
      "label": "Ignition Params",
      "img": "7_SeamData_13_1.png",
      "rows": [
        {
          "name": "Purge Time(s)",
          "type": "Number",
          "ko": "보호 가스가 가스 라인과 용접 토치를 완전히 채우는 데 필요한 시간(초)을 설정한다.<br>※ 로봇이 용접 시작 위치로 이동하는 시간이 설정된 퍼지 시간보다 짧을 경우, 도착 후 남은 퍼지 시간이 만료될 때까지 대기한다.",
          "en": "Gas pre-purge duration (s) required to fill the gas line and weld torch. If travel time to the start position is shorter than the purge time, the robot dwells at the start position until the timer expires.",
          "y": [
            29.2,
            19.1
          ]
        },
        {
          "name": "Preflow Time(s)",
          "type": "Number",
          "ko": "용접 대상물에 보호 가스를 사전에 공급하는 시간(초)을 설정한다.<br>※ 이 시간 동안 로봇은 아크가 점화되기 전까지 해당 위치에서 정지 상태를 유지한다.",
          "en": "Shielding gas pre-flow duration (s) over the weldment. The robot remains stationary at the ignition location during this window before the arc is initiated.",
          "y": [
            50.6,
            18.5
          ]
        },
        {
          "name": "Move Delay(s)",
          "type": "Number",
          "ko": "아크가 점화되어 안정화된 시점부터 가열(Heat) 단계가 시작될 때까지의 대기 시간(초)을 설정한다.",
          "en": "Dwell time delay (s) from the point of arc stabilization at ignition until the primary heating phase begins.",
          "y": [
            71.9,
            18.5
          ]
        }
      ]
    },
    {
      "label": "Heat Params",
      "img": "7_SeamData_14.png",
      "rows": [
        {
          "name": "Heat Speed",
          "type": "Number",
          "ko": "용접 단계 시작 후, 가열(Heat) 단계가 진행되는 동안의 용접 이동 속도를 설정한다.",
          "en": "Travel speed maintained during the initial heating sequence at the start of welding.",
          "y": [
            29.2,
            18
          ]
        },
        {
          "name": "Heat Time(s)",
          "type": "Number",
          "ko": "가열(Heat) 단계를 유지하는 시간(초)을 설정한다.<br>※ 이 값은 <code>Heat Distance</code> 또는 <code>Heat Speed</code> 값이 0으로 설정된 경우에만 유효하게 적용된다.",
          "en": "Duration (s) for the initial heating sequence. Active only when Heat Distance or Heat Speed is set to 0.",
          "y": [
            50.6,
            18.5
          ]
        },
        {
          "name": "Heat Distance",
          "type": "Number",
          "ko": "가열(Heat) 단계의 데이터가 적용된 상태로 이동할 거리를 설정한다.",
          "en": "Linear distance over which the specified heating configuration is applied at the beginning of the weld segment.",
          "y": [
            71.9,
            18
          ]
        }
      ]
    },
    {
      "label": "End Params",
      "img": "7_SeamData_15.png",
      "rows": [
        {
          "name": "Cool Time(s)",
          "type": "Number",
          "ko": "크레이터 채움(Filling) 작업이 수행되기 전, 현재 상태를 유지하며 대기(냉각)하는 시간(초)을 설정한다.",
          "en": "Waiting (cooling) time (s) during which the current state is held before crater filling is performed.",
          "y": [
            20.5,
            12.6
          ]
        },
        {
          "name": "Fill Time(s)",
          "type": "Number",
          "ko": "용접 종료 단계(End Phase)에서 크레이터(Crater)를 채우는 데 소요되는 시간(초)을 설정한다.",
          "en": "Duration (s) allocated for crater filling during the termination phase of the weld.",
          "y": [
            35.4,
            13
          ]
        },
        {
          "name": "Burn-back Time(s)",
          "type": "Number",
          "ko": "와이어 송급이 정지된 후, 남은 용접 와이어를 태워 없애는(Burn-back) 시간(초)을 설정한다.<br>※ MIG/MAG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 방지한다. 일반적으로 용접 단계 종료 시점과 크레이터 충전 종료 시점에 각각 적용된다.",
          "en": "Additional arc burn time (s) sustained after wire feed termination to prevent the electrode wire from sticking in the solidification matrix of the weld pool.",
          "y": [
            50.4,
            13
          ]
        },
        {
          "name": "Roll-back Time(s)",
          "type": "Number",
          "ko": "용접 전원이 차단된 후, 콜드 와이어(Cold Wire)를 되감는 시간(초)을 설정한다.<br>※ TIG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 방지한다.",
          "en": "Time (s) for retracting the cold wire after the welding power is cut off. Prevents the wire from sticking to the solidifying weld at the end of the TIG process.",
          "y": [
            65.4,
            13
          ]
        },
        {
          "name": "Postflow Time(s)",
          "type": "Number",
          "ko": "용접 공정이 종료된 후 보호 가스를 지속적으로 공급(Purge)하는 시간(초)을 설정한다.<br>※ 냉각 과정에서 용접 전극과 용접부가 산화되는 것을 방지하는 역할을 한다.",
          "en": "Gas post-flow duration (s) supplied after arc termination to protect the cooling crater weldment from atmospheric oxidation.",
          "y": [
            80.3,
            13
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
    "ko": "사용할 용접 프로그램 번호(스케줄) 및 용접 모드를 설정한다.",
    "en": "The welding program number (schedule) and welding mode to be utilized."
  },
  {
    "name": "Weighting",
    "type": "Number",
    "ko": "Wirefeed1에 적용할 가중치 값을 지정한다.",
    "en": "Weight factor applied to wirefeed1."
  }
];

export const main = "7_SeamData.png";

export const outputs = [
  {
    "name": "SeamData",
    "type": "SeamData",
    "ko": "설정된 ABB SeamData 값을 출력한다.",
    "en": "Outputs the configured ABB SeamData configuration stream."
  },
  {
    "name": "Code",
    "type": "String",
    "ko": "생성된 코드(Code) 데이터를 출력한다.",
    "en": "Outputs the compiled RAPID instruction code."
  }
];
