---
title: "SeamData"

layout: single
header:
  teaser: "/assets/images/SeamData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-SeamData/

translation_link: /en/datatype/DataType-SeamData/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

용접 심(Seam)의 시작 및 종료 단계 데이터를 정의하는 컴포넌트이다. 점화(Ignition), 가열(Heat), 종료(End) 세 구간의 타이밍과 아크 조건을 세부적으로 지정할 수 있으며, 일반적으로 하나의 심(Seam) 전체 또는 여러 심에 걸쳐 동일한 설정값을 유지할 때 사용한다.

<p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>

<style>
  /* 💡 [표 너비 통일] 본문 내 모든 마크다운 표와 탭 내부 표를 화면폭에 100% 꽉 채움 */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* 테이블 내 셀 너비 비율을 강제로 고정 */
    word-break: break-all !important;     /* 긴 텍스트 입력 시 셀 수축 방지 및 줄바꿈 */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* 패딩으로 인한 가로 폭 삐져나옴 절대 방지 */
  }
  
  /* 💡 [열 비율 통일] 모든 표의 1열(20%), 2열(15%), 3열(65%) 구조를 동일하게 매칭 */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
    width: 100% !important;
    clear: both;
  }

  /* 라디오 버튼 숨기기 */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* 탭 버튼 스타일 (상단 바 정렬) */
  .tab-buttons {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
  .tab-buttons li {
    margin: 0;
    padding: 0;
  }

  .tab-buttons label {
    display: block;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    background: #f5f5f5;
    color: #777;
    border: 1px solid #ddd;
    border-bottom: none;
    margin-right: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: all 0.2s ease;
  }

  .tab-buttons label:hover {
    background: #e9e9e9;
    color: #333;
  }

  /* 콘텐츠 박스 기본 설정 (기본적으로 숨김) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* 💡 1번째 탭 그룹 제어 (SeamData 필수 파라미터) */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 2번째 탭 그룹 제어 (ArcData 시리즈) */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4 { display: block; }

  /* 💡 3번째 탭 그룹 제어 (Params 시리즈) */
  #prm-tab5:checked ~ .tab-buttons label[for="prm-tab5"],
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"],
  #prm-tab7:checked ~ .tab-buttons label[for="prm-tab7"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab5:checked ~ #prm-content5,
  #prm-tab6:checked ~ #prm-content6,
  #prm-tab7:checked ~ #prm-content7 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Weld Sched** | Weld Sched | 사용할 용접 프로그램 번호(스케줄) 및 용접 모드를 설정한다. |
| **Weight** | Number | Wirefeed1에 적용할 가중치 값을 지정한다. |


## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>
  <ul class="tab-buttons">
    <li><label for="sm-tab1">SeamData</label></li>
  </ul>
  <div class="tab-content" id="sm-content1">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>컴포넌트의 변수명을 지정한다.</td>
        </tr>
        <tr>
          <td><strong>Link ArcData</strong></td>
          <td>Boolean</td>
          <td>모든 단계(Ignition, Heat, End)의 ArcData 값을 연동할지 여부를 설정한다.<br><ul><li><strong>TRUE:</strong> 한 단계의 값을 조절하면 나머지 단계도 동일한 값으로 동기화된다.(기본값)</li><li><strong>FALSE:</strong> 각 단계를 독립적으로 조절할 수 있다.</li></ul></td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/7_SeamData_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab4" name="gh-tabs-arcdata">
  
  <ul class="tab-buttons">
    <li><label for="arc-tab2">Ignition ArcData</label></li>
    <li><label for="arc-tab3">Heat ArcData</label></li>
    <li><label for="arc-tab4">End ArcData</label></li>
  </ul>

  <div class="tab-content" id="arc-content2">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.</td>
        </tr>        
      </tbody>
    </table>
    <br>
<p align="center">
  <img src="/assets/images/7_SeamData_11.png" style="display: inline-block; width: 45%; margin-right: 5px;">
</p>
  </div>

  <div class="tab-content" id="arc-content3">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.</td>
        </tr> 
      </tbody>
    </table>
    <br>
<p align="center">
  <img src="/assets/images/7_SeamData_12.png" style="display: inline-block; width: 45%; margin-right: 5px;">
</p>
  </div>

  <div class="tab-content" id="arc-content4">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>용접 전압을 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 아크 길이를 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도를 설정한다(기본 단위: m/min).<br>※ 컴포넌트 아이콘을 우클릭하여 단위를 mm/s로 변경할 수 있다(ABB 및 Fronius 공통).</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>제어 파라미터를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 다이내믹(Dynamic) 특성을 조정하는 데 사용된다.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류를 설정한다(ABB 로봇 기준).<br>※ Fronius TPS/TPS-i 시스템에서는 사용되지 않는다.</td>
        </tr> 
      </tbody>
    </table>
    <br>
    <p align="center">
  <img src="/assets/images/7_SeamData_13.png" style="display: inline-block; width: 45%; margin-right: 5px;">
</p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="prm-tab5" name="gh-tabs-params" checked>
  <input type="radio" id="prm-tab6" name="gh-tabs-params">
  <input type="radio" id="prm-tab7" name="gh-tabs-params">
  
  <ul class="tab-buttons">
    <li><label for="prm-tab5">Ignition Params</label></li>
    <li><label for="prm-tab6">Heat Params</label></li>
    <li><label for="prm-tab7">End Params</label></li>
  </ul>

  <div class="tab-content" id="prm-content5">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Purge Time(s)</strong></td>
          <td>Number</td>
          <td>보호 가스가 가스 라인과 용접 토치를 완전히 채우는 데 필요한 시간(초)을 설정한다.<br>※ 로봇이 용접 시작 위치로 이동하는 시간이 설정된 퍼지 시간보다 짧을 경우, 도착 후 남은 퍼지 시간이 만료될 때까지 대기한다.</td>
        </tr>
        <tr>
          <td><strong>Purgeflow Time(s)</strong></td>
          <td>Number</td>
          <td>용접 대상물에 보호 가스를 사전에 공급하는 시간(초)을 설정한다.<br>※ 이 시간 동안 로봇은 아크가 점화되기 전까지 해당 위치에서 정지 상태를 유지한다.</td>
        </tr>
        <tr>
          <td><strong>Move Delay(s)</strong></td>
          <td>Number</td>
          <td>아크가 점화되어 안정화된 시점부터 가열(Heat) 단계가 시작될 때까지의 대기 시간(초)을 설정한다.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_13_1.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="prm-content6">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Heat Speed</strong></td>
          <td>Number</td>
          <td>용접 단계 시작 후, 가열(Heat) 단계가 진행되는 동안의 용접 이동 속도를 설정한다.</td>
        </tr>
        <tr>
          <td><strong>Heat Time(s)</strong></td>
          <td>Number</td>
          <td>가열(Heat) 단계를 유지하는 시간(초)을 설정한다.<br>※ 이 값은 <code>Heat Distance</code> 또는 <code>Heat Speed</code> 값이 0으로 설정된 경우에만 유효하게 적용된다.</td>
        </tr>
        <tr>
          <td><strong>Heat Distance</strong></td>
          <td>Number</td>
          <td>가열(Heat) 단계의 데이터가 적용된 상태로 이동할 거리를 설정한다.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_14.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="prm-content7">
    <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Cool Time(s)</strong></td>
          <td>Number</td>
          <td>크레이터 채움(Filling) 작업이 수행되기 전, 현재 상태를 유지하며 대기(냉각)하는 시간(초)을 설정한다.</td>
        </tr>
        <tr>
          <td><strong>Fill Time(s)</strong></td>
          <td>Number</td>
          <td>용접 종료 단계(End Phase)에서 크레이터(Crater)를 채우는 데 소요되는 시간(초)을 설정한다.</td>
        </tr>
        <tr>
          <td><strong>Burn-Back Time(s)</strong></td>
          <td>Number</td>
          <td>와이어 송급이 정지된 후, 남은 용접 와이어를 태워 없애는(Burn-back) 시간(초)을 설정한다.<br>※ MIG/MAG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 방지한다. 일반적으로 용접 단계 종료 시점과 크레이터 충전 종료 시점에 각각 적용된다.</td>
        </tr>
        <tr>
          <td><strong>Rollback Time(s)</strong></td>
          <td>Number</td>
          <td>용접 전원이 차단된 후, 콜드 와이어(Cold Wire)를 되감는 시간(초)을 설정한다.<br>※ TIG 공정 종료 시 와이어가 응고 중인 용접부에 달라붙는 것을 방지한다.</td>
        </tr>
        <tr>
          <td><strong>Postflow Time(s)</strong></td>
          <td>Number</td>
          <td>용접 공정이 종료된 후 보호 가스를 지속적으로 공급(Purge)하는 시간(초)을 설정한다.<br>※ 냉각 과정에서 용접 전극과 용접부가 산화되는 것을 방지하는 역할을 한다.</td>
        </tr>               
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_15.png" align="center" width="45%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **SeamData** | SeamData | 설정된 ABB SeamData 값을 출력한다. |
| **Code** | String | 생성된 코드(Code) 데이터를 출력한다. |