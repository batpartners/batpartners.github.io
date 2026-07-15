---
title: "WeldData"

layout: single
header:
  teaser: "/assets/images/WeldData.PNG"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WeldData/

translation_link: /en/datatype/DataType-WeldData/
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

아크가 안정적으로 유지되는 실제 용접 구간의 파라미터 정의. 심을 따라 적용되는 용접 속도, 전압, 와이어 송급 조건 등 지정.

<p align="center"><img src="/assets/images/8_WeldData.png" align="center" width="32%"></p>

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

  /* 💡 1번째 탭 그룹 제어 (WeldData 변수명 개요) */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2번째 탭 그룹 제어 (Weld ArcData 세트) */
  #tab2:checked ~ .tab-buttons label[for="tab2"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab2:checked ~ #content2 { display: block; }

  /* 💡 3번째 탭 그룹 제어 (Weld Param 세트) */
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab6:checked ~ #content6 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Weld Sched** | Weld Sched | 사용할 용접 프로그램 번호(스케줄) 및 용접 모드 |
| **Weight** | Number| wirefeed1에 대한 가중치 |
| **WeaveData** | WeaveData | ABB WeaveData 구성 데이터 |


## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-welddata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">WeldData</label></li>
  </ul>
  <div class="tab-content" id="content1">
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
      </tbody>
    </table>
<p align="center"><img src="/assets/images/8_WeldData_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-arcdata" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Weld ArcData</label></li>
  </ul>

  <div class="tab-content" id="content2">
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
          <td><strong>WireFeed(m/min)</strong></td>
          <td>Number</td>
          <td>와이어 송급 속도(m/min). ABB / Fronius 공통.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>컨트롤 파라미터 (ABB 컨벤션). Fronius TPS/TPS-i: 다이내믹 (Dynamic) 조정.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>용접 전류 (ABB 컨벤션). Fronius TPS/TPS-i에서는 사용되지 않음.</td>
        </tr>        
      </tbody>
    </table>
    <br>
    <p align="center"><img src="/assets/images/8_WeldData_11.png" align="center" width="45%"></p>
  </div>
</div> <div class="tabs-container">
  <input type="radio" id="tab6" name="gh-tabs-preview" checked>
  <ul class="tab-buttons">
    <li><label for="tab6">Weld Param</label></li>
  </ul>

  <div class="tab-content" id="content6">
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
          <td><strong>Weld Speed(mm/s)</strong></td>
          <td>Number</td>
          <td>용접 중 TCP 선속도 (mm/s). 실제 비드 형상 및 적층 높이를 결정하는 핵심 요소.</td>
        </tr>
        <tr>
          <td><strong>Preview Cycles</strong></td>
          <td>Number</td>
          <td>컴포넌트 뷰포트 내 용접 궤적 시각화의 반복 사이클 수.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center"><img src="/assets/images/8_WeldData_12.png" align="center" width="45%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WeldData** | WeldData | 설정된 ABB WeldData 구성 스트림을 출력합니다. |
| **Code** | String | 컴파일된 RAPID 명령 코드를 출력합니다. |