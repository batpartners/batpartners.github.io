---
title: "Code Solver"

layout: single
header:
  teaser: "/assets/images/0_CodeSolver_1.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: en
permalink: /en/core/Core-Code-Solver/Core-Code-Solver_Option/

translation_link: /core/Core-Code-Solver/Core-Code-Solver_Option/
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

Generates RAPID programs from defined robot motions, and transmits and uploads them to a network-connected ABB controller.

<p align="center"><img src="/assets/images/0_CodeSolver_1.png" align="center" width="32%"></p>

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
    table-layout: fixed !important;      /* 테이블 내 셀 너비 비율을 강제로 고정 */
    word-break: break-all !important;    /* 긴 텍스트 입력 시 셀 수축 방지 및 줄바꿈 */
    margin: 20px 0 !important;
    box-sizing: border-box !important;   /* 패딩으로 인한 가로 폭 삐져나옴 절대 방지 */
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

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **GERTY Code** | GERTY Code | GERTY Code |
| **ABB Controller** | ABB Controller | ABB controller connected to this PC (Optional) |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-codesolver" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">Program Settings</label></li>
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
          <td><strong>Program Folder</strong></td>
          <td>String</td>
          <td>Directory path where the robot program will be saved</td>
        </tr>
        <tr>
          <td><strong>Program Name</strong></td>
          <td>String</td>
          <td>Name of the robot program to be generated</td>
        </tr>
        <tr>
          <td><strong>Enable Socket</strong></td>
          <td>Toggle</td>
          <td>Exports the program with a socket communication module within the RAPID code</td>
        </tr>     
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_20.png" align="center" width="45%"></p>
  </div>
</div>


<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-codesolver2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Export</label></li>
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
          <td><strong>Auto Load</strong></td>
          <td>Toggle</td>
          <td>Automatically loads the program onto the connected robot controller after code generation</td>
        </tr>
        <tr>
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>Generates RAPID code based on configured options and saves it to the designated directory</td>
        </tr>
        <tr>
          <td><strong>Cancel</strong></td>
          <td>Button</td>
          <td>Cancels the ongoing code generation and export process</td>
        </tr>
        <tr>
          <td><strong>Export Log</strong></td>
          <td>Panel</td>
          <td>Information on the most recently saved RAPID program file. Displays file path, export result, etc.<br>
              Local path / Controller path / Contents</td>
        </tr>        
        <tr>
          <td><strong>Open in Editor</strong></td>
          <td>Button</td>
          <td>Opens the generated RAPID code in VSCode for editing. Automatically falls back to Notepad if VSCode is not installed.</td>
        </tr>                      
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_21.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **SocketBundle** | SocketBundle | Data bundle containing the socket client and instruction packet list |