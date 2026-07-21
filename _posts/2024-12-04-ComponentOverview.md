---
title: "GERTY Component"
categories:
  - About GERTY
header:
  teaser: "/assets/images/30.jpg"  
author_profile: true
sidebar:
  nav: "sidebar"

translated: true
lang: ko
permalink: /about%20gerty/About-GERTY/ComponentOverview

translation_link: /en/about%20gerty/About-GERTY/ComponentOverview

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

# Overview

GERTY 컴포넌트의 기본적인 구조는 Rhino Grasshopper 구조를 따른다. GERTY 고유 기능이 존재하며, 필수 파라미터에 해당하는 값을 설정할 수 있다. 필수 파라미터를 설정하는 UI는 크게 7가지 종류로 나눠지며, 데이터 타입으로 **String/Number/Boolean/Color**가 있다.
입력과 필수 파라미터 값이 정의되면 출력 값으로 전달된다.

## | 입력(Input)

외부 값을 입력 받아야하는 값이며, 데이터 타입에 맞게 Rhino/GERTY 컴포넌트를 연결하여 사용할 수 있다.
반드시 입력 받아야하는 값과, 그렇지 않은 값(선택적 값)이 존재한다. 선택적 값은 비워두고 사용이 가능하며, 컴포넌트 색상이 회색이 되어야 정상이다.

### (1) 데이터 매치 (DataMatch)

기본적인 Grasshopper 컴포넌트 값 연결과 방법이 같다. GERTY 고유 파라미터가 존재하며, 데이터 매치에 따라 연결하여 사용이 가능하다.

<p align="center">  <img src="/assets/images/Asset_1.png" align="center" width="80%"></p>

### (2) 모드 전환 (Mode Option)

일부 컴포넌트에 한하여 컴포넌트 모드를 전환/기능 추가가 가능하다. 컴포넌트 아이콘에 마우스를 위치시켜 우클릭하여 확인할 수 있으며, 컴포넌트 종류는 다음과 같다.

> `ToolData`, `WobjData`, `Positioner RobTarget`, `SeamData`, `WeldData`, `TPSiSynergic`, `TPSSynergic`, `ABB Positioner`, `ABB Robot`, `WorkBench`, `Code Solver`, `Solid Shell`, `Surface Shell`, `RePath Tree`


*Example*
<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_Dynamic.png" align="center" width="45%"></p>

------------

## | 필수 파라미터(Required Parameter)

컴포넌트 값에 반드시 포함되어야하며, 위 값의 경우 사용자가 재정의가 가능하다.

### (1) 카테고리 탭 (Category Tab)

특정 카테고리 옵션을 세부적으로 접근할 수 있도록 기능에 따라 [Tab]으로 그룹하였다. 선택된 [Tab]의 경우 어두운 색으로 활성화되며, 관련 설정을 사용자화 할 수 있다. 사용자화 되지 않은 필수 파라미터 값은 GERTY에서 설정한 기본값을 따른다.


*Example*
<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Orientation</label></li>
    <li><label for="arc-tab3">Output</label></li>
  </ul>

  <div class="tab-content" id="arc-content2">
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="35%"></p>
  </div>
  <div class="tab-content" id="arc-content3">
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="35%"></p>
  </div>
</div>

### a. 변수값 (Text Field)

데이터 타입은 **String**이다. 사용자가 정의한 변수값을 설정하는데 주로 사용되며, *Code Solver*의 경우 저장되는 파일명과 프로젝트 이름으로 작성된다.
사용자는 Text Field에 마우스를 두번 연속 클릭 후 수정/작성이 가능하다. 단, 작성 값은 영문으로 시작하여야하며, 특수문자나 빈 여백은 차단한다.

<p align="center">  <img src="/assets/images/0_RobTarget_4.png" align="center" width="35%"></p>

### b. 숫자값 (Slider)

데이터 타입은 **Number**로 크게 **Double**과 **Integer**로 구분되어 사용한다.
사용자는 Slider Bar 위의 포인터를 좌/우로 드래그 또는 마우스를 두번 연속 클릭 후 값 변경/입력이 가능하다.

*Double*
정수를 포함한 소수값을 입력 받을 수 있다.

<p align="center">  <img src="/assets/images/2_FlybyCustom_22.png" align="center" width="35%"></p>


*Integer*
정수로 된 양수 값만 입력할 수 있다.

<p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="35%"></p>

### c. 드랍다운 (DropDown)

데이터 타입은 **String**이다. GERTY에서 제공하는 모델 또는 옵션을 선택할 수 있다.
Tool/WorkBench 모델의 경우 사용자가 `Export`한 객체를 GERTY에 저장해 불러올 수 있다.

<p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="35%"></p>

### d. 버튼 (Button) / 토글 스위치 (Toggle)

데이터 타입은 **Boolean**이다. 버튼의 경우 컴포넌트의 상태를 일시적으로 재활성화한다. 토글의 경우 컴포넌트 상태를 완전 전환한다.
일부 컴포넌트의 경우, 입력값과 필수 파라미터가 추가/제거 되기도 한다.

<p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="35%"></p>

### e. 색상 스와치 (Color Swatch)

데이터 타입은 **Color**이다. 시뮬레이션 상에서 활성 상태의 모델/경로의 색상을 사용자화할 수 있다.

<p align="center">  <img src="/assets/images/2_Workbench_11.png" align="center" width="35%"></p>

### f. 패널 (Panel)

데이터 타입은 **String**이다. 컴포넌트 활성시, 컴포넌트 결과 값을 패널로 노출하여 제공한다.

<p align="center">  <img src="/assets/images/1_ScanController_11.png" align="center" width="35%"></p>

### g. 프로세스 게이지 (Process Gauge)

데이터 처리에 일정 시간이 소요되는 컴포넌트에 한해, 사용자에게 시각적으로 진행 정도를 공유할 수 있도록 한다.
컴포넌트 제일 하단에 위치하며, 퍼센트(%)로 진행 정도를 노출한다.

<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="35%"></p>

------------

# | 출력(Outputs)

입력값과 필수 파라미터 값이 온전히 처리될 경우 위치하는 출력 데이터 값에 따라 내보내어진다.