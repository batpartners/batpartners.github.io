---
title: "Socket Sender"
layout: single
header:
  teaser: "/assets/images/2_SocketSender.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: en
permalink: /en/controllerutils/ControllerUtils-SocketSender/

translation_link: /controllerutils/ControllerUtils-SocketSender/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

Streams motion instruction packets to the ABB IRC5 controller via a TCP socket.

<p align="center">  <img src="/assets/images/2_SocketSender.png" align="center" width="32%"></p>

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

# Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **SocketBundle** | SocketBundle | Data bundle containing the socket client and the instruction packet list. |

## Required Parameter

<div class="tabs-container">
  <input type="radio" id="prm-tab5" name="gh-tabs-params" checked>
  
  <ul class="tab-buttons">
    <li><label for="prm-tab5">Connect</label></li>
  </ul>

  <div class="tab-content" id="prm-content5">
    <table class="spec-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Connect</strong></td>
          <td>Toggle</td>
          <td>Toggle connection to the <a href="https://batpartners.github.io/en/controllerutils/ControllerUtils-ScanABBController" target="_blank">ABB Controller</a>.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/2_SocketSender_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <ul class="tab-buttons">
    <li><label for="arc-tab2">Queue/Timing</label></li>
    <li><label for="arc-tab3">Control</label></li>
  </ul>
  <div class="tab-content" id="arc-content2">
    <table class="spec-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Max Queue</strong></td>
          <td>Number</td>
          <td>Target upper limit for the robot queue. (Default: 350)</td>
        </tr>
        <tr>
          <td><strong>MaxTick</strong></td>
          <td>Number</td>
          <td>Maximum packets sent per timer callback. (Default: 35)</td>
        </tr>
        <tr>
          <td><strong>Bundle Size</strong></td>
          <td>Number</td>
          <td>Bundle size: Number of instructions grouped per transmission. (Default: 5, Max recommended: 8)</td>
        </tr>
        <tr>
          <td><strong>Interval(ms)</strong></td>
          <td>Number</td>
          <td>Timer interval (ms). Default 100ms = 10Hz. Decreasing improves responsiveness, increasing reduces load.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/2_SocketSender_11.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="arc-content3">
    <table class="spec-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Send</strong></td>
          <td>Toggle</td>
          <td>Toggle to authorize packet transmission while connected.<br>
              • TRUE: Start packet streaming.<br>
              • FALSE: Stop transmission and pause the robot (Default).</td>
        </tr>
        <tr>
          <td><strong>Reset</strong></td>
          <td>Button</td>
          <td>Reset transmission state. Temporarily pauses transmission, resets index to the beginning, and retransmits from the first packet.<br>
              The robot stops and resumes operation from the initial position upon receiving the first packet.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/2_SocketSender_13.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>
  
  <ul class="tab-buttons">
    <li><label for="sm-tab1">Log & Status</label></li>
  </ul>

  <div class="tab-content" id="sm-content1">
    <table class="spec-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Panel</strong></td>
          <td>Panel</td>
          <td>Socket communication status and log information.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="45%"></p>
  </div>
</div>