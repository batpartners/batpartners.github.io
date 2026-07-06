---
title: "ToolData"
layout: single
header:
  teaser: "/assets/images/ToolData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-ToolData/

translation_link: /en/datatype/DataType-ToolData/
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

사용자 정의 툴(엔드 이펙터) 데이터 정의. 우클릭 컨텍스트 메뉴로 Define (직접 설정), Import (미리 저장된 툴 데이터에서 가져오기) 모드 전환 가능.
<br>

<p align="center">  <img src="/assets/images/3_ToolData.png" align="center" width="32%"></p>

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
  #tab5:checked ~ .tab-buttons label[for="tab5"],
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
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
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Tool Geo** | Mesh | 툴(엔드 이펙터)의 형상 메시 |
| **Base Plane** | Plane | ABB 로봇 플랜지에 대한 툴 장착 기준면. TCP 및 지오메트리 (형상)의 기준을 정의 |
| **TCP** | Plane | 툴 끝단의 TCP (Tool Center Point) 위치. 툴 베이스 (Base Plane)를 기준으로 한 위치와 방향을 정의 |
| **Tool Load** | ToolLoad | 툴의 부하 데이터 (LoadData). 연결되지 않은 경우, 도구 지오메트리의 경계 상자 (Bounding box)에서 추정하여 작성 |

## | 필수 파라미터 (Required Parameter)
<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-tooldata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ToolData</label></li>
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
          <td><strong>Tool Name</strong></td>
          <td>String</td>
          <td>생성할 `ToolData` 변수 정의.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_10.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <input type="radio" id="tab3" name="gh-tabs-options">
  <input type="radio" id="tab4" name="gh-tabs-options">
  
  <ul class="tab-buttons">
    <li><label for="tab2">LoadData</label></li>
    <li><label for="tab3">Preview</label></li>
    <li><label for="tab4">Export</label></li>
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
          <td><strong>Reset</strong></td>
          <td>Button</td>
          <td>Reset</td>
        </tr>
        <tr>
          <td><strong>Mass(kg)</strong></td>
          <td>String</td>
          <td>무게(kg)</td>
        </tr>
        <tr>
          <td><strong>Centroid</strong></td>
          <td>String</td>
          <td>무게 중심 좌표 (x,y,z)</td>
        </tr>
        <tr>
          <td><strong>Inertia</strong></td>
          <td>String</td>
          <td>관성 모멘트 (Ix,Iy,Iz)</td>
        </tr>        
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_11.png" align="center" width="32%"></p>
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
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>시각화 색상</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_12.png" align="center" width="32%"></p>
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
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>툴데이터를 사용자 로컬 지정 경로에 파일로 저장</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_13.png" align="center" width="32%"></p>
  </div>  
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **ToolData** | ToolData | 입력한 ABB ToolData를 출력 |


<p align="center">  <img src="/assets/images/ToolData_GIF_00.mp4" align="center" width="100%"></p>