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

용접 심(Seam)의 시작 및 종료 단계 데이터 정의. 점화(Ignition), 가열(Heat), 종료(End) 세 구간의 타이밍 및 아크 조건 지정. 일반적으로 한 심 전체 또는 여러 심에 걸쳐 동일 값 유지.

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
| **Weld Sched** | Weld Sched | 사용할 용접 프로그램 번호(스케줄) 및 용접 모드. |
| **Weight** | Number | wirefeed1에 대한 가중치 |


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
          <td>변수명</td>
        </tr>
        <tr>
          <td><strong>Link ArcData</strong></td>
          <td>Boolean</td>
          <td>모든 단계(Ignition, Heat, End)의 ArcData 값을 연동. TRUE: 한쪽을 조절하면 나머지도 같은 값으로 맞춰짐. FALSE: 단계별 독립 조절 (기본값).</td>
        </tr>
      </tbody>
    </table>
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
          <td>용접 전압 (ABB 컨벤션). Fronius TPS/TPS-i: 아크 길이 조정.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도(m/min). ABB / Fronius 공통.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>컨트롤 파라미터 (ABB 컨벤션). Fronius TPS/TPS-i: 다이내믹(Dynamic) 조정.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류 (ABB 컨벤션). Fronius TPS/TPS-i에서는 사용되지 않음.</td>
        </tr>        
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>
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
          <td>용접 전압 (ABB 컨벤션). Fronius TPS/TPS-i: 아크 길이 조정.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도(m/min). ABB / Fronius 공통.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>컨트롤 파라미터 (ABB 컨벤션). Fronius TPS/TPS-i: 다이내믹(Dynamic) 조정.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류 (ABB 컨벤션). Fronius TPS/TPS-i에서는 사용되지 않음.</td>
        </tr> 
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_1.png" align="center" width="32%"></p>
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
          <td>용접 전압 (ABB 컨벤션). Fronius TPS/TPS-i: 아크 길이 조정.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도(m/min). ABB / Fronius 공통.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>컨트롤 파라미터 (ABB 컨벤션). Fronius TPS/TPS-i: 다이내믹(Dynamic) 조정.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류 (ABB 컨벤션). Fronius TPS/TPS-i에서는 사용되지 않음.</td>
        </tr> 
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_2.png" align="center" width="32%"></p>
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
          <td><strong>Purge Time</strong></td>
          <td>Number</td>
          <td>보호 가스로, 가스 라인과 용접 토치를 채우는 데 걸리는 시간 (초). 만약 용접 시작 위치로 이동하는 시간이 퍼지 시간보다 짧은 경우, 용접 시작 위치에서 퍼지 시간이 만료될 때까지 대기.</td>
        </tr>
        <tr>
          <td><strong>Purgeflow Time</strong></td>
          <td>Number</td>
          <td>보호 가스로, 용접 대상물에 가스를 미리 흘려주는 데 걸리는 시간 (초). 이 시간 동안 로봇은 아크가 점화되기 전까지 해당 위치에서 정지</td>
        </tr>
        <tr>
          <td><strong>Move Delay</strong></td>
          <td>Number</td>
          <td>아크 점화 시점에서 아크가 안정순간부터 가열 단계가 시작될 때가지의 지연 시간 (초)</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>
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
          <td>용접 단계 시작 시, 가열 중의 용접 속도</td>
        </tr>
        <tr>
          <td><strong>Heat Time</strong></td>
          <td>Number</td>
          <td>용접 단계 시작 시, 가열 시간 (초). Heat Time은 Heat Distance 또는 Heat Speed 값이 0인 경우 유효</td>
        </tr>
        <tr>
          <td><strong>Heat Distance</strong></td>
          <td>Number</td>
          <td>용접 시작 시, 가열 데이터가 적용되어야 하는 이동 거리</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_1.png" align="center" width="32%"></p>
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
          <td><strong>Crater Time</strong></td>
          <td>Number</td>
          <td>용접 종료 단계 시, 크레이터 충전 시간 (초)</td>
        </tr>
        <tr>
          <td><strong>Burnback Time</strong></td>
          <td>Number</td>
          <td>용접 종료 시 와이어가 용융 풀에 들러붙는 것을 방지하기 위해, 와이어 송급 정지 후 아크를 유지하는 추가 연소 시간 (초)</td>
        </tr>
        <tr>
          <td><strong>Postflow Time</strong></td>
          <td>Number</td>
          <td>용접이 완전히 끝난 후, 냉각 및 산화 방지를 위해 보호 가스를 추가로 흘려주는 시간 (초)</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_2.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **SeamData** | SeamData | 입력한 ABB SeamData를 출력 |
| **Code** | String | Code를 출력 |