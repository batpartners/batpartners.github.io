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
permalink: /about%20gerty/About-GERTY/ComponentOverview/

translation_link: /en/about%20gerty/About-GERTY/ComponentOverview/

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

# | Overview

GERTY 컴포넌트는 Rhino Grasshopper 인터페이스를 따른다. 컴포넌트 내, GERTY UI를 통해 입력 값을 설정할 수 있으며, 기본적인 컴포넌트 인터페이스로는 입력과 필수 파라미터 값이 정의되면 출력 값으로 전달된다.
GERTY UI는 [Tab]으로 기능을 구별하며, 사용자는 설정값을 변경할 수 있다.

<p align="center">  <img src="/assets/images/Component_00.png" align="center" width="40%"></p>

# | 입력(Input)

Rhino/GERTY 컴포넌트를 연결받거나, 사용자가 값을 입력하는 인터페이스다.
반드시 입력 받아야하는 값과, 그렇지 않은 값(선택적 값)이 존재한다. 선택적 값은 비워두고 사용이 가능하며, 컴포넌트 색상이 회색이 되어야 정상이다.

### (1) 노드 연결 (Connect Node)

기본적인 Grasshopper 컴포넌트 사용법과 동일하다. 노드를 연결하여 최종 결과 값을 쌓는다.

<p align="center">  <img src="/assets/images/Asset_1.png" align="center" width="80%"></p>

### (2) 모드 전환 (Mode Option)

<p align="center">  <img src="/assets/images/ContextMenu_00.png" align="center" width="40%"></p>

일부 컴포넌트에 한하여 컴포넌트 모드를 전환/기능 추가가 가능하다. 컴포넌트 아이콘을 우클릭하여 컨텍스트 메뉴(Context Menu)를 확인할 수 있으며, 컴포넌트 종류는 다음과 같다.

> <a href="https://batpartners.github.io/datatype/DataType-ToolData/" target="_blank">`ToolData`</a>, <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">`WobjData`</a>, <a href="https://batpartners.github.io/datatype/DataType-Positioner_RobTarget/" target="_blank">`Positioner RobTarget`</a>, <a href="https://batpartners.github.io/datatype/DataType-SeamData/" target="_blank">`SeamData`</a>, <a href="https://batpartners.github.io/datatype/DataType-WeldData/" target="_blank">`WeldData`</a>, `TPSiSynergic`, `TPSSynergic`, <a href="https://batpartners.github.io/robottool/RobotTool-Positioner/" target="_blank">`ABB Positioner`</a>, <a href="https://batpartners.github.io/robottool/RobotTool-ABBRobot/" target="_blank">`ABB Robot`</a>, <a href="https://batpartners.github.io/robottool/RobotTool-CreateWorkbench/" target="_blank">`WorkBench`</a>, <a href="https://batpartners.github.io/core/Core-Code-Solver/" target="_blank">`Code Solver`</a>, <a href="https://batpartners.github.io/toolpath/ToolPath-SolidShell/" target="_blank">`Solid Shell`</a>, <a href="https://batpartners.github.io/toolpath/ToolPath-SurfaceShell/" target="_blank">`Surface Shell`</a>, <a href="https://batpartners.github.io/utils/Utils-RepathTree/" target="_blank">`RePath Tree`</a>


*Example*
<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_Dynamic.png" align="center" width="45%"></p>

------------

# | GERTY UI

컴포넌트 값에 반드시 포함되어야하며, 사용자가 재정의할 수 있다. 탭(Tab)으로 공통 기능을 Grasshopper 7가지, Text, Slider, Button, Toggle, DropDown, Panel, Color값 유형으로 그룹하였다.

### A. 탭 (Tab)

특정 카테고리 옵션을 세부적으로 접근할 수 있도록 기능에 따라 [Tab]으로 그룹하였다. 선택된 [Tab]의 경우 어두운 색으로 활성화되며, 관련 설정을 사용자화 할 수 있다. 사용자화 되지 않은 필수 파라미터 값은 GERTY에서 설정한 기본값을 따른다.

[Tab]은 큰 기능과 세부 기능으로 나뉘며, 큰 기능들은 수직 탭으로 구분하고 세부기능은 수평 탭으로 구분한다. 사용자는 [Tab]을 넘나들며 입력값을 설정할 수 있다.


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

### a. Text Field

사용자는 Text Field에 마우스를 더블 클릭 후 수정/작성이 가능하다. 기본적으로 영문과 숫자만 기재가 가능하다. 작성 값에 대한 조건은 각 컴포넌트 문서를 참고. 

<p align="center">  <img src="/assets/images/0_RobTarget_4.png" align="center" width="35%"></p>

### b. Slider

사용자는 두가지 방법으로 숫자 값을 설정할 수 있다. 
- 슬라이더 옆에 기재된 레이블을 더블 클릭 후 값 변경.
- Slider Bar 위의 포인터를 좌/우로 드래그 또는 마우스를 더블 클릭 후 값 변경.

<p align="center">  <img src="/assets/images/Slider_02.png" align="center" width="70%"></p>

*Double*<br>
정수를 포함한 소수값을 입력 받을 수 있다.

<p align="center">  <img src="/assets/images/2_FlybyCustom_22.png" align="center" width="35%"></p>

*Integer*<br>
정수로 된 양수 값만 입력할 수 있다.

<p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="35%"></p>

### c. DropDown

 GERTY에서 제공하는 모델 또는 옵션을 선택할 수 있다. Tool/WorkBench 모델의 경우 사용자가 `Export`한 객체를 GERTY에 저장해 불러올 수 있다.

<p align="center">  <img src="/assets/images/DropDown_02.png" align="center" width="70%"></p>

### d. Button / Toggle

`Button`은 컴포넌트의 상태를 한시적으로 재활성화할 수 있으며, `Toggle`의 경우 컴포넌트 상태를 완전 전환이 가능하다.
일부 컴포넌트의 경우, 활성화 된 값(True/False)에 따라 입력값과 필수 파라미터가 추가/제거 되기도 한다.

<p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="35%"></p>

### e. Color Swatch

시뮬레이션 상에서 활성 상태의 모델/경로의 색상을 사용자화할 수 있다.

<p align="center">  <img src="/assets/images/Color_00.png" align="center" width="35%"></p>

### f. Panel

컴포넌트 활성시, 컴포넌트 결과 값을 패널로 노출하여 제공한다.

<p align="center">  <img src="/assets/images/1_ScanController_11.png" align="center" width="35%"></p>

### g. Process Gauge

데이터 처리에 일정 시간이 소요되는 컴포넌트에 한해, 사용자에게 퍼센트(%)로 시각적 진행 정도를 공유할 수 있다.

<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="35%"></p>

