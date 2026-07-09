---
title: "IndReset"

layout: single
header:
  teaser: "/assets/images/IndReset_00.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /instruction/Instruction-IndRMove/Instruction-IndRMove_Option/
translation_link: /en/instruction/Instruction-IndRMove/Instruction-IndRMove_Option/

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

일반 모드 축을 독립 모드로 전환하며 1회전 이내의 지정 위치로 이동시키는 IndRMove 인스트럭션 생성. 이동 중 프로그램 실행 계속. 완료 후 IndReset으로 일반 모드 복귀 필요.

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

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **RobTarget** | RobTarget | 목표 위치 (To Relative Position). 해당 축 성분만 사용. 로봇 축인 경우 이 파라미터 대신 Target Value(ToRelNum) 사용. |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-model" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ABB Positioner</label></li>
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
          <td><strong>MechUnit</strong></td>
          <td>String</td>
          <td>메카니컬 유닛 이름</td>
        </tr>
        <tr>
          <td><strong>Target Axis</strong></td>
          <td>String</td>
          <td>대상 축 번호 (1–6). 독립 모드 복귀 또는 논리 위치 재정의 대상.</td>
        </tr>        
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/11_IndRMove_20.png" align="center" width="32%"></p>
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
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>RefNum(°)</strong></td>
          <td>Number</td>
          <td>목표 위치 (각도)를 숫자 (°)로 직접 지정.</td>
        </tr>
        <tr>
          <td><strong>Direction</strong></td>
          <td>String</td>
          <td>이동 방향.\n" +
              • Short: 최단 경로 (±180° 이내)<br>
              • Fwd: 양의 방향으로 이동 (최대 360°)<br>
              • Bwd: 음의 방향으로 이동 (최대 360°)</td>
        </tr>
        <tr>
          <td><strong>Speed</strong></td>
          <td>Number</td>
          <td>축 이동 속도 (°/s)</td>
        </tr>
        <tr>
          <td><strong>Ramp(%)</strong></td>
          <td>Number</td>
          <td>가속/감속 성능 감소 비율 (%). 100% = 최대 성능. 낮출수록 가속/감속 완화.</td>
        </tr>      
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/11_IndRMove_21.png" align="center" width="32%"></p>
  </div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Instruction** | Instruction | 생성된 ABB 인스트럭션. Core 컴포넌트의 Instructions 입력으로 전달. |