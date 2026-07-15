---
title: "WeaveData"

layout: single
header:
  teaser: "/assets/images/weavedata.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WeaveData/

translation_link: /en/datatype/DataType-WeaveData/
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

아크 용접 중 수행되는 위빙 (Weaving) 모션 정의. 위빙 형상, 진폭, 주파수, dwell 파라미터 지정.

<p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>

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

  /* 💡 1번째 탭 그룹 제어 (WeaveData 개요) */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 2번째 탭 그룹 제어 (Dimension / Dwell / Orient / Bias 세트) - 선택자 동기화 완료 */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"],
  #arc-tab5:checked ~ .tab-buttons label[for="arc-tab5"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4,
  #arc-tab5:checked ~ #arc-content5 { display: block; }

  /* 💡 3번째 탭 그룹 제어 (Preview 세트) */
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab6:checked ~ #prm-content6 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Base Plane** | Plane | 위빙 패턴 시각화의 기준 평면. (X = 진행 방향, Y = 수평, Z = 수직) |


## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>
  <ul class="tab-buttons">
    <li><label for="sm-tab1">WeaveData</label></li>
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>변수명</td>
        </tr>
        <tr>
          <td><strong>Weave Shape</strong></td>
          <td>String</td>
          <td>위빙 패턴 모양.<br>[0]: 없음, [1]: 지그재그(수평), [2]: V형(수직), [3]: 삼각형(수직), [4]: 원형(수직)</td>
        </tr>
        <tr>
          <td><strong>Weave Type</strong></td>
          <td>String</td>
          <td>위빙 모션에 사용되는 축 설정.<br>
              [0]: Geometric. 전체 축(1-6) 활용 (주파수↓ / 정확도↑)<br>
              [1]: Wrist. 손목축(4-6) 위주 + 메인축(1-3)은 미세보정 (주파수↑ / 정확도↓)<br>
              [2]: Rapid1. 메인축(1-3) 활용(레거시)<br>
              [3]: Rapid2. 손목축(4-6) 활용(레거시)</td>
        </tr>        
      </tbody>
    </table>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab4" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab5" name="gh-tabs-arcdata">
  
  <ul class="tab-buttons">
    <li><label for="arc-tab2">Dimension</label></li>
    <li><label for="arc-tab3">Dwell</label></li>
    <li><label for="arc-tab4">Orient</label></li>
    <li><label for="arc-tab5">Bias</label></li>
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
          <td><strong>Length</strong></td>
          <td>Number</td>
          <td>• Type이 Geometric/Wrist인 경우: 위빙 사이클 길이 (mm)<br>
              • Type이 Rapid1/Rapid2인 경우: 위빙 사이클 주파수 (Hz)<br>
              • Shape이 Circular인 경우: 원형 패턴 간격</td>
        </tr>
        <tr>
          <td><strong>Width</strong></td>
          <td>Number</td>
          <td>위빙 패턴의 전체 진폭 (mm) (원형 위빙의 경우, 반지름).</td>
        </tr>
        <tr>
          <td><strong>Height</strong></td>
          <td>Number</td>
          <td>패턴의 수직 높이 (mm). V형 / 삼각형에서만 사용되며, 지그재그/원형은 무시.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="arc-content3">
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
          <td><strong>Dwell Left</strong></td>
          <td>Number</td>
          <td>TCP가 위빙패턴의 좌측 반환점에서 심 방향으로만 이동하는 길이 (mm). 한쪽 비드량을 늘릴 때 사용.</td>
        </tr>
        <tr>
          <td><strong>Dwell Center</strong></td>
          <td>Number</td>
          <td>TCP가 위빙패턴의 중앙(영점)을 지날 때 심 방향으로만 이동하는 길이 (mm).</td>
        </tr>
        <tr>
          <td><strong>Dwell Right</strong></td>
          <td>Number</td>
          <td>TCP가 위빙패턴의 우측 반환점에서 심 방향으로만 이동하는 길이 (mm). 좌측 정지와 대칭.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_1.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="arc-content4">
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
          <td><strong>Dir Angle(°)</strong></td>
          <td>Number</td>
          <td>진행 방향 경로에 대한 위빙 패턴의 방향 각도(°).</td>
        </tr>
        <tr>
          <td><strong>Tilt Angle(°)</strong></td>
          <td>Number</td>
          <td>표면 또는 토치 오리엔테이션에 대한 위빙 평면의 기울기 각도(°).</td>
        </tr>
        <tr>
          <td><strong>Orient Angle(°)</strong></td>
          <td>Number</td>
          <td>위빙 패턴 매트릭스의 회전을 정의하는 오리엔테이션 각도(°).</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_2.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="arc-content5">
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
          <td><strong>Weave Bias</strong></td>
          <td>Number</td>
          <td>위빙 패턴의 중심선을 진행방향 좌/우 (+/-)로 편향하는 거리 (mm). Zigzag 위빙 전용.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_3.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="prm-tab6" name="gh-tabs-params" checked>
  
  <ul class="tab-buttons">
    <li><label for="prm-tab6">Preview</label></li>
  </ul>

  <div class="tab-content" id="prm-content6">
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
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>프레임 크기</td>
        </tr>
        <tr>
          <td><strong>Preview Cycles</strong></td>
          <td>Number</td>
          <td>위빙 패턴 시각화 반복 사이클 수</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="45%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WeaveData** | WeaveData | 설정된 ABB WeaveData 구성 스트림을 출력합니다. |
| **Code** | String | 컴파일된 RAPID 명령 코드를 출력합니다. | 