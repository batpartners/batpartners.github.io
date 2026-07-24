---
title: "GERTY Core"

layout: single
header:
  teaser: "/assets/images/GERTYCore.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: ko
permalink: /core/Core-GERTY-Core/

translation_link: /en/core/Core-GERTY-Core/
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

정의된 로봇 셋업과 인스트럭션으로부터 로봇 동작 연산. Display Solver 및 CodeSolver 실행에 필요한 기초 데이터 생성.

<p align="center">  <img src="/assets/images/2_GERTYCore.png" align="center" width="32%"></p>

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
| Robot Setup | Robot Setup | 구성된 로봇 셋업. 베이스·툴·포지셔너·주변 모델이 묶인 로봇 정의. |
| Instructions | Instructions | 실행할 ABB 인스트럭션 콜렉션. 리스트 순서가 로봇 실행 순서와 직접 대응되므로, 의도한 모션 시퀀스에 맞게 순서 정렬 필요. |
| SubProc | SubProc | 호출되는 <a href="https://batpartners.github.io/instruction/Instruction-SubProc_Composition/" target="_blank">ABB Procedure</a> (선택) |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-model" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">Simulation</label></li>
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
          <td><strong>Simulation Window</strong></td>
          <td>Toggle</td>
          <td>시뮬레이션 컨트롤 창 열기/닫기</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/2_GERTYCore_10.png" align="center" width="45%"></p>
  </div>
</div>

# | 출력(Outputs)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| GERTY Solver | GERTY Solver | <a href="https://batpartners.github.io/core/Core-Display-Solver/" target="_blank">GERTY Solver</a> 연결 |
| GERTY Code | GERTY Code | <a href="https://batpartners.github.io/core/Core-Code-Solver/" target="_blank">GERTY Code</a> 연결 |