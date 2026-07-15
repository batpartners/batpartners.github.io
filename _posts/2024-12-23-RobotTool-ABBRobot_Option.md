---
title: "ABBRobot"
layout: single
header:
  teaser: "/assets/images/ABBRobot.png"
collection: RobotTool
entries_layout: grid
author_profile: true
categories:
  - RobotTool
translated: true
lang: ko
permalink: /robottool/RobotTool-ABBRobot/RobotTool-ABBRobot_Option
translation_link: /en/robottool/RobotTool-ABBRobot/RobotTool-ABBRobot_Option
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

사용할 ABB 로봇 정의. 컴포넌트 아이콘 우클릭, [Show joint Jog Params]을 선택하여 선택한 로봇의 각 축을 설정할 수 있음. ABB IRB 시리즈 카탈로그의 사전 정의된 제원에서 선택.

<p align="center">  <img src="/assets/images/0_ABBRobot_2.png" align="center" width="32%"></p>

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
    box-sizing: border-box !important;
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

  /* 정확히 일치하는 라디오 버튼이 체크되었을 때, 대응하는 라벨만 활성화(붉은색) */
  #tab1:checked ~ .tab-buttons label[for="tab1"],
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"],
  #tab5:checked ~ .tab-buttons label[for="tab5"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }

  /* 라디오 버튼 체크 상태에 따른 콘텐츠 표시 제어 */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5 { 
    display: block; 
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Base Plane** | Plane | 로봇 베이스 좌표계 평면. 기본값: WorldXY. |
| **ToolData** | ToolData | 로봇에 적용할 ABB 툴 데이터(ToolData) |
| **Positioner** | Positioner | 로봇과 연동할 외부축 포지셔너 (Positioner). |
| **Pedestal** | Mesh | 로봇 받침대·작업대 등 주변 환경 메시 (선택). |


## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-robot" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ABB Robots</label></li>
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
          <td><strong>Robot Model</strong></td>
          <td>String</td>
          <td>ABB 로봇 모델</td>
        </tr>
        <tr>
          <td><strong>Spec</strong></td>
          <td>String</td>
          <td>선택한 ABB 로봇 모델 스펙 — 가반하중 (kg) 및 작업 반경 (mm)</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-linear" checked>
  <input type="radio" id="tab3" name="gh-tabs-linear">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Robot Linear Jog</label></li>
    <li><label for="tab3">Preview</label></li>
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
          <td><strong>Reset Pose</strong></td>
          <td>Button</td>
          <td>로봇 자세 초기화</td>
        </tr>
        <tr>
          <td><strong>Align Gumball</strong></td>
          <td>Button</td>
          <td>현재 TCP 방향에 가장 가까운 World 좌표축(±X, ±Y, ±Z)과 평행하게 TCP를 정렬. ABB FlexPendant Jogging의 Align 기능과 동일.</td>
        </tr>
        <tr>
          <td><strong>Config Option</strong></td>
          <td>Toggle</td>
          <td>• TRUE: cfx = 1. 로봇 축 4, 6의 구성(Configuration) 반전<br>• FALSE: cfx = 0 기본값</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="content3">
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
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>시각화 색상</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_12.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab4" name="gh-tabs-joint" checked>
  <input type="radio" id="tab5" name="gh-tabs-joint">
  
  <ul class="tab-buttons">
    <li><label for="tab4">Robot Joint Jog</label></li>
    <li><label for="tab5">External Joint Jog</label></li>
  </ul>
  <div class="tab-content" id="content4">
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
          <td><strong>RobAx 1</strong></td>
          <td>Number</td>
          <td>로봇 1번 축</td>
        </tr>
        <tr>
          <td><strong>RobAx 2</strong></td>
          <td>Number</td>
          <td>로봇 2번 축</td>
        </tr>
        <tr>
          <td><strong>RobAx 3</strong></td>
          <td>Number</td>
          <td>로봇 3번 축</td>
        </tr>
        <tr>
          <td><strong>RobAx 4</strong></td>
          <td>Number</td>
          <td>로봇 4번 축</td>
        </tr>
        <tr>
          <td><strong>RobAx 5</strong></td>
          <td>Number</td>
          <td>로봇 5번 축</td>
        </tr>
        <tr>
          <td><strong>RobAx 6</strong></td>
          <td>Number</td>
          <td>로봇 6번 축</td>
        </tr>                                      
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_20.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="content5">
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
          <td><strong>ExtAx 1</strong></td>
          <td>Number</td>
          <td>부가축 1번</td>
        </tr>
        <tr>
          <td><strong>ExtAx 2</strong></td>
          <td>Number</td>
          <td>부가축 2번 축</td>
        </tr>
        <tr>
          <td><strong>ExtAx 3</strong></td>
          <td>Number</td>
          <td>부가축 3번 축</td>
        </tr>
        <tr>
          <td><strong>ExtAx 4</strong></td>
          <td>Number</td>
          <td>부가축 4번 축</td>
        </tr>
        <tr>
          <td><strong>ExtAx 5</strong></td>
          <td>Number</td>
          <td>부가축 5번 축</td>
        </tr>
        <tr>
          <td><strong>ExtAx 6</strong></td>
          <td>Number</td>
          <td>부가축 6번 축</td>
        </tr> 
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_21.png" align="center" width="45%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Robot Setup** | Robot Setup | 구성된 로봇 셋업. 베이스·툴·포지셔너·주변 모델이 묶인 로봇 정의. |
| **Current TCP** | Plane | 로봇 셋업의 현재 TCP 평면. |