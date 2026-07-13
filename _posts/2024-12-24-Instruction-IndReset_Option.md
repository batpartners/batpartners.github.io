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
permalink: /instruction/Instruction-IndReset/Instruction-IndReset_Option/
translation_link: /en/instruction/Instruction-IndReset/Instruction-IndReset_Option/

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

독립/일반 모드 축의 논리 위치 초기화 인스트럭션(IndReset) 생성. 독립 모드 축의 경우 일반 모드 복귀까지 동시 수행. 실행 전 모든 축 정지 필요. 누적된 외부축 각도값 초기화에 주로 사용.

<p align="center">  <img src="/assets/images/12_IndReset_1.png" align="center" width="32%"></p>

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
| **RobTarget** | RobTarget | 논리 축 각도를 재정렬하기 위해 사용되는 참조 자세(Reference Position). Direction이 Short / Fwd / Bwd일 때만 유효. RefNum와 병용 불가. |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>
  <ul class="tab-buttons">
    <li><label for="sm-tab1">IndReset</label></li>
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
<p align="center">  <img src="/assets/images/12_IndReset_20.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  
  <ul class="tab-buttons">
    <li><label for="arc-tab2">Settings</label></li>
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
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/12_IndReset_21.png" align="center" width="32%"></p>

  </div>
</div>


# | 출력(Output)

<div class="page__content">
  <table>
    <thead>
      <tr>
        <th>이름</th>
        <th>타입</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Instruction</strong></td>
        <td>Instruction</td>
        <td>생성된 ABB 인스트럭션. Core 컴포넌트의 Instructions 입력으로 전달.</td>
      </tr>
    </tbody>
  </table>
</div>