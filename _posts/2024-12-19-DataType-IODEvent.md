---
title: "IOEvent"

layout: single
header:
  teaser: "/assets/images/IOData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-IODEvent/

translation_link: /en/datatype/DataType-IODEvent/
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

triggios 배열의 단일 I/O 트리거 이벤트 정의. 대상 출력 신호, 경로상 트리거 위치, 설정 값 지정. 여러 IOEvent를 TriggIOs 컴포넌트에 묶어 triggios 데이터 구성.

<p align="center">  <img src="/assets/images/4_IOEvent.png" align="center" width="32%"></p>

# | 입력(Inputs)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Signal | String | 신호데이터 입력 |
| Signal Type | String | 신호데이터의 변수명을 입력 |
| DO Value | Double | 신호데이터의 데이터 값을 지정 |

## | 필수 파라미터 (Required Parameter)

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px; /* 불필요한 하단 공백 최소화 */
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

  /* 테이블 너비를 컨테이너에 맞춰 100%로 고정 */
  .spec-table {
    width: 100%;
    table-layout: fixed; /* 테이블 내 셀 너비 비율을 일정하게 유지 */
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

  /* 💡 2번 탭 그룹 스타일 및 노출 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-1" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">IO Event</label></li>
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
          <td><strong>Signal Type</strong></td>
          <td>Dropdown</td>
          <td>출력 신호 유형 (디지털 / 그룹 / 아날로그)</td>
        </tr>
        <tr>
          <td><strong>Value</strong></td>
          <td>Boolean</td>
          <td>이벤트 활성화 여부.(True : 활성화/ False : 비활성화)</td>
        </tr>        
      </tbody>
    </table>
  </div>
</div>
<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Settings</label></li>
  </ul>
  <div class="tab-content" id="content2">
    <table class="spec-table" style="margin: 0 0 20px 0;">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Used</strong></td>
          <td>Boolean</td>
          <td>True/False 설정.(True : 활성화/ False : 비활성화)</td>
        </tr>
        <tr>
          <td><strong>Start</strong></td>
          <td>Boolean</td>
          <td>거리 기준점 설정.<br>• TRUE: (TriggLIOs에 의한) 이동 시작점 기준.<br>• FALSE: (TriggLIOs에 의한) 이동 종료점 기준.</td>
        </tr>
        <tr>
          <td><strong>Distance</strong></td>
          <td>Double</td>
          <td>TriggLIOs 이동 경로상에서 I/O 트리거가 발생할 위치 (mm). Start 파라미터에서 설정한 기준점으로부터의 거리.</td>
        </tr>
        <tr>
          <td><strong>EquipLag(s)</strong></td>
          <td>Double</td>
          <td>외부 장비 응답 지연 보상값 (s).<br>• 양수(+): 지정 위치 도달 전에 미리 신호 발생.<br>• 음수(-): 지정 위치 통과 후 신호 발생.</td>
        </tr>          
      </tbody>
    </table>
  </div>
</div>

<br>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **IOEvent** | IOEvent | ABB TriggIOs용 IO 이벤트 |
| **code** | code | code |
