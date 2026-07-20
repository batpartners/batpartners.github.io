---
title: "IndRMove"

layout: single
header:
  teaser: "/assets/images/11_IndRMove_1.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-IndRMove/Instruction-IndRMove_Option/
translation_link: /instruction/Instruction-IndRMove/Instruction-IndRMove_Option/

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

Generates an IndRMove instruction that changes a normal mode axis to independent mode and moves it to a specified position within one revolution. Program execution continues during the movement. An IndReset instruction is required to return to normal mode after completion.

<p align="center">  <img src="/assets/images/11_IndRMove_1.png" align="center" width="32%"></p>

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

  /* 💡 최대 6개까지 대응 가능한 라벨 활성화 스타일 */
  #tab1:checked ~ .tab-buttons label[for="tab1"],
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"],
  #tab5:checked ~ .tab-buttons label[for="tab5"],
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }

  /* 💡 최대 6개까지 대응 가능한 콘텐츠 표시 제어 */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **RobTarget** | RobTarget | Target position (To Relative Position). Only the corresponding axis component is used. If it is a robot axis, use Target Value (ToRelNum) instead of this parameter. |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-model" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">IndMove</label></li>
  </ul>
  <div class="tab-content" id="content1">
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
          <td><strong>MechUnit</strong></td>
          <td>String</td>
          <td>Mechanical unit name.</td>
        </tr>
        <tr>
          <td><strong>Target Axis</strong></td>
          <td>String</td>
          <td>Target axis number (1–6). The target axis for returning from independent mode or redefining the logical position.</td>
        </tr>        
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/11_IndRMove_20.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Settings</label></li>
  </ul>
  <div class="tab-content" id="content2">
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
          <td><strong>RefNum(°)</strong></td>
          <td>Number</td>
          <td>Directly specifies the target position (angle) as a number (°).</td>
        </tr>
        <tr>
          <td><strong>Direction</strong></td>
          <td>String</td>
          <td>Movement direction.<br>
              • Short: Shortest path (within ±180°)<br>
              • Fwd: Moves in the positive direction (max 360°)<br>
              • Bwd: Moves in the negative direction (max 360°)</td>
        </tr>
        <tr>
          <td><strong>Speed</strong></td>
          <td>Number</td>
          <td>Axis movement speed (°/s).</td>
        </tr>
        <tr>
          <td><strong>Ramp(%)</strong></td>
          <td>Number</td>
          <td>Acceleration/deceleration performance reduction ratio (%). 100% = maximum performance. Lower values result in smoother acceleration/deceleration.</td>
        </tr>      
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/11_IndRMove_21.png" align="center" width="45%"></p>
  </div>
</div>

# | Output
<div style="margin-top: 30px;">
  <div class="page__content">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Instruction</strong></td>
          <td>Instruction</td>
          <td>Generated ABB instruction. Passed to the Instructions input of the Core component.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>