---
title: "Positioner"
layout: single
header:
  teaser: "/assets/images/1_ABBPositioner.png"
collection: RobotTool
entries_layout: grid
author_profile: true
categories:
  - RobotTool
translated: true
lang: ko
permalink: /robottool/RobotTool-Positioner/RobotTool-Positioner_Option
translation_link: /en/robottool/RobotTool-Positioner/RobotTool-Positioner_Option
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

컴포넌트 아이콘 우클릭 후, [Define Positioner] 선택시 노출. 포지셔너 장치의 기구학 구성 정의.

<p align="center">  <img src="/assets/images/1_ABBPositioner_3.png" align="center" width="32%"></p>

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
| **Positioner Geo** | Mesh | 포지셔너 각 링크의 형상 메시. |
| **Joint Planes** | Plane | 고정 베이스부터 플랜지까지 포지셔너의 기구학 체인을 순서대로 정의하는 평면 리스트.<br>고정 기준 좌표계(Base) - 각 회전축 좌표계(J1, J2, ...) - 워크밴치/워크피스 부착면(Flange)에 순서대로 설정.(즉, N축 포지셔너의 경우 총 N+2개 평면 입력 필요.) |
| **Mounting Plane** | Plane | 포지셔너의 플랜지 평면. 워크벤치(작업대)가 장착되는 상단 기준면. 기본값: WorldXY. |
| **Workbench** | Workbench | 포지셔너 플랜지에 장착되는 워크벤치(작업대) 정의 (선택). |

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
          <td><strong>MechUnit Name</strong></td>
          <td>String</td>
          <td>포지셔너(MechUnit) 변수명</td>
        </tr>
        <tr>
          <td><strong>Axis Type</strong></td>
          <td>String</td>
          <td>ABB 포지셔너 모델</td>
        </tr>        
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/1_ABBPositioner_30.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <input type="radio" id="tab3" name="gh-tabs-options">
  <input type="radio" id="tab4" name="gh-tabs-options">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Motion</label></li>
    <li><label for="tab3">RAPID</label></li>
    <li><label for="tab4">Preview</label></li>
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
          <td><strong>Enable Arm</strong></td>
          <td>Toggle</td>
          <td>포지셔너의 암 동작 활성화</td>
        </tr>
        <tr>
          <td><strong>Approach Dir</strong></td>
          <td>Number</td>
          <td>포지셔너 기준 TCP의 접근 방향. 포지셔너가 이 방향으로의 접근을 기준으로 회전 자세 결정.</td>
        </tr>
        <tr>
          <td><strong>TCP Dir</strong></td>
          <td>Number</td>
          <td>포지셔너가 최종적으로 정렬시킬 TCP의 방향</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_31.png" align="center" width="32%"></p>
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
          <td><strong>Arm Joint Index</strong></td>
          <td>String</td>
          <td>포지셔너 암(Arm) 축 각도를 할당할, RobTarget 내부 ExtJoint 배열의 인덱스 (1~6). 다른 외부축 인덱스와 중복 불가.<br>"- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]</td>
        </tr>
        <tr>
          <td><strong>Plate Joint Index</strong></td>
          <td>String</td>
          <td>포지셔너 플레이트(Plate) 축 각도를 할당할 RobTarget ExtJoint 배열의 인덱스 (1~6). 다른 외부축 인덱스와 중복 불가.<br>- 예: Arm = 2, Plate = 3 → ExtJoint [9E9, arm, plate, 9E9, 9E9, 9E9]</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_32.png" align="center" width="32%"></p>
  </div>

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
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>시각화 색상</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_33.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Positioner** | Positioner | 로봇과 연동할 외부축 포지셔너 (Positioner). |