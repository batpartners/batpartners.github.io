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

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

아크 용접 중 수행되는 위빙 (Weaving) 모션 정의. 위빙 형상, 진폭, 주파수, dwell 파라미터 지정.

<p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Base Plane** | Plane | 위빙 패턴 시각화의 기준 평면. (X = 진행 방향, Y = 수평, Z = 수직) |


## | 필수 파라미터 (Required Parameter)

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    margin: 30px 0;
    width: 100% !important; /* 부모 너비 100% 고정 */
    display: block;
  }

  /* 라디오 버튼 숨기기 */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* 탭 버튼들을 감싸는 상단 바 */
  .tab-buttons-wrapper {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 0;
  }

  /* 일반 탭 라벨 스타일 */
  .tab-buttons-wrapper label {
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

  .tab-buttons-wrapper label:hover {
    background: #e9e9e9;
    color: #333;
  }

  /* 💡 체크된 라디오 버튼 바로 다음(+)에 오는 라벨만 정확하게 붉은색 활성화 */
  .tabs-container input[type="radio"]:checked + label {
    background: #fff !important;
    color: #e53935 !important;
    border-bottom: 1px solid #fff !important;
    padding-bottom: 13px;
    margin-bottom: -1px;
    position: relative;
    z-index: 2;
  }

  /* 콘텐츠 박스 기본 설정 (숨김) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box; /* 패딩이 너비에 영향을 주지 않도록 설정 */
  }

    /* 테이블 너비를 컨테이너에 맞춰 100%로 고정 */
  .spec-table {
    width: 100%;
    table-layout: fixed; /* 테이블 내 셀 너비 비율을 일정하게 유지 */
  }

  /* 💡 각 라디오 버튼 체크 상태에 따라 해당 콘텐츠 보여주기 */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block !important; 
  }

  /* 💡 표 너비를 컨테이너에 맞춰 100% 고정 */
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    table-layout: fixed !important;
    word-break: break-word !important;
    margin: 0 0 15px 0 !important;
  }
  
  /* 컬럼별 너비 고정 비율 강제 적용 (이름: 20%, 타입: 15%, 설명: 65%) */
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <div class="tab-buttons-wrapper">
    <input type="radio" id="tab1" name="gh-tabs-weavedata" checked>
    <label for="tab1">WeaveData</label>
  </div>
  
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>변수명.</td>
        </tr>
        <tr>
          <td><strong>Weave Shape</strong></td>
          <td>String</td>
          <td>위빙 패턴 모양. [0]: 없음, [1]: 지그재그(수평), [2]: V형(수직), [3]: 삼각형(수직), [4]: 원형(수직).</td>
        </tr>
        <tr>
          <td><strong>Weave Type</strong></td>
          <td>String</td>
          <td>위빙 모션에 사용되는 축 설정.<br>
                [0]: Geometric. 전체 축(1-6) 활용 (주파수↓ / 정확도↑)<br>
                [1]: Wrist. 손목축(4-6) 위주 + 메인축(1-3)은 미세보정 (주파수↑ / 정확도↓)<br>
                [2]: Rapid1. 메인축(1-3) 활용 (레거시)<br>
                [3]: Rapid2. 손목축(4-6) 활용 (레거시)</td>
        </tr>        
      </tbody>
    </table>
  </div>
</div>

<div class="tabs-container">
  <div class="tab-buttons-wrapper">
    <input type="radio" id="tab2" name="gh-tabs-arcdata" checked>
    <label for="tab2">Dimension</label>

    <input type="radio" id="tab3" name="gh-tabs-arcdata">
    <label for="tab3">Dwell</label>

    <input type="radio" id="tab4" name="gh-tabs-arcdata">
    <label for="tab4">Orient</label>

    <input type="radio" id="tab5" name="gh-tabs-arcdata">
    <label for="tab5">Bias</label>
  </div>

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
          <td><strong>Length</strong></td>
          <td>Number</td>
          <td>Type이 Geometric/Wrist인 경우: 위빙 사이클 길이 (mm).<br>
                • Type이 Rapid1/Rapid2인 경우: 위빙 사이클 주파수 (Hz).<br>
                • Shape이 Circular인 경우: 원형 패턴 간격.</td>
        </tr>
        <tr>
          <td><strong>Width</strong></td>
          <td>Number</td>
          <td>위빙 패턴의 전체 진폭 (mm). (원형 위빙의 경우, 반지름을 나타냄).</td>
        </tr>
        <tr>
          <td><strong>Height</strong></td>
          <td>Number</td>
          <td>패턴의 수직 높이 (mm). V형 및 삼각형 패턴에서만 사용되며, 지그재그 및 원형 설정에서는 무시됨.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>
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
          <td><strong>Dwell Left</strong></td>
          <td>Number</td>
          <td>TCP가 위빙 패턴의 좌측 반환점에서 지연되거나 심(seam) 방향으로만 전진 이동하는 길이 (mm). 한쪽 비드량을 늘릴 때 사용.</td>
        </tr>
        <tr>
          <td><strong>Dwell Center</strong></td>
          <td>Number</td>
          <td>TCP가 위빙 패턴의 중앙(영점)을 지날 때 심 방향으로만 이동하는 길이 (mm).</td>
        </tr>
        <tr>
          <td><strong>Dwell Right</strong></td>
          <td>Number</td>
          <td>TCP가 위빙 패턴의 우측 반환점에서 지연되거나 심 방향으로만 전진 이동하는 길이 (mm). Dwell Left와 대칭.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_1.png" align="center" width="32%"></p>
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
    <p align="center">  <img src="/assets/images/9_WeaveData_2.png" align="center" width="32%"></p>
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
          <td><strong>Weave Bias</strong></td>
          <td>Number</td>
          <td>위빙 패턴의 중심선을 진행 방향 기준 좌측(+) 또는 우측(-)으로 편향시키는 오프셋 거리 (mm). 지그재그 위빙 전용.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_3.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <div class="tab-buttons-wrapper">
    <input type="radio" id="tab6" name="gh-tabs-preview" checked>
    <label for="tab6">Preview</label>
  </div>

  <div class="tab-content" id="content6">
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
          <td>시각화 프레임 매트릭스의 크기.</td>
        </tr>
        <tr>
          <td><strong>Preview Cycles</strong></td>
          <td>Number</td>
          <td>미리보기 시각화 디스플레이에 렌더링되는 위빙 패턴의 반복 사이클 수.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WeaveData** | WeaveData | 설정된 ABB WeaveData 구성 스트림을 출력합니다. |
| **Code** | String | 컴파일된 RAPID 명령 코드를 출력합니다. |