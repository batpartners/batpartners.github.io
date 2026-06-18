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

<br>

<p align="center">  <img src="/assets/images/3_ToolData.png" align="center" width="32%"></p>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Weld Sched** | Weld Sched | 사용할 용접 프로그램 번호(스케줄) 및 용접 모드. |
| **Weight** | Number | wirefeed1에 대한 가중치 |


## | 필수 파라미터 (Required Parameter)

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
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
    animation: fadeIn 0.3s ease;
  }

  /* 💡 1번 탭 그룹 스타일 및 노출 제어 */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2, 3, 4번 탭 그룹 스타일 및 노출 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-tooldata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">SeamData</label></li>
  </ul>
  <div class="tab-content" id="content1">
    <table class="spec-table" style="margin: 0;">
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
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <input type="radio" id="tab3" name="gh-tabs-options">
  <input type="radio" id="tab4" name="gh-tabs-options">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Ignition ArcData</label></li>
    <li><label for="tab3">Heat ArcData</label></li>
    <li><label for="tab4">End ArcData</label></li>
  </ul>

  <div class="tab-content" id="content2">
    <table class="spec-table" style="margin: 0;">
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
          <td><strong>Wirefeed</strong></td>
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
<p align="center">  <img src="/assets/images/3_ToolData.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content3">
    <table class="spec-table" style="margin: 0;">
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
          <td><strong>Wirefeed</strong></td>
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
<p align="center">  <img src="/assets/images/3_ToolData_1.png" align="center" width="32%"></p>
  </div>
  <div class="tab-content" id="content4">
    <table class="spec-table" style="margin: 0;">
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
          <td><strong>Wirefeed</strong></td>
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
<p align="center">  <img src="/assets/images/3_ToolData_2.png" align="center" width="32%"></p>
  </div>  
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **SeamData** | SeamData | 입력한 ABB SeamData를 출력 |
| **Code** | String | Codea를 출력 |