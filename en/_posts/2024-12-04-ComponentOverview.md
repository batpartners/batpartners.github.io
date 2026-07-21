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
lang: en
permalink: /en/about%20gerty/About-GERTY/ComponentOverview

translation_link: /about%20gerty/About-GERTY/ComponentOverview

toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

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

The basic structure of GERTY components follows the Rhino Grasshopper architecture. They feature GERTY-specific functions and allow users to configure values for required parameters. The UI for configuring required parameters is broadly divided into 7 types, supporting data types such as **String**, **Number**, **Boolean**, and **Color**. 
Once the input and required parameter values are defined, they are processed and passed to the output.

------------

## | Input

This parameter requires an external input and can be configured by connecting a Rhino/GERTY component with a matching data type.
Inputs consist of both required and optional values. Optional parameters can be left empty; when left unconnected, the component will turn gray, indicating normal operation.

### (1) Data Match

The basic value connection method is identical to standard Grasshopper components. GERTY specific parameters exist and can be connected and used according to data matching rules.

<p align="center">  <img src="/assets/images/Asset_1.png" align="center" width="80%"></p>

### (2) Mode Option

For certain components, it is possible to switch component modes or add functions. You can check this by right-clicking on the component icon. The applicable components are as follows:

> `ToolData`, `WobjData`, `Positioner RobTarget`, `SeamData`, `WeldData`, `TPSiSynergic`, `TPSSynergic`, `ABB Positioner`, `ABB Robot`, `WorkBench`, `Code Solver`, `Solid Shell`, `Surface Shell`, `RePath Tree`


*Example*

<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_Dynamic.png" align="center" width="45%"></p>

------------

## | Required Parameter

### (1) Category Tab

Options are grouped into [Tab]s based on their functions to allow detailed access to specific category settings. The selected [Tab] is highlighted in a darker color, allowing users to customize the related settings. Any required parameters that are not customized will follow the default values set by GERTY.


*Example*

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-2" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-2">

  <ul class="tab-buttons">
    <li><label for="tab2">Orientation</label></li>
    <li><label for="tab3">Output</label></li>
  </ul>

  <div class="tab-content" id="arc-content2">
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
          <td><strong>Align X</strong></td>
          <td>String</td>
          <td>An option that interpolates and corrects the posture so that the +X axis of the RobTarget points towards the Robot Base origin. The default value is False. It adds 'Robot Base' (Plane) and 'Align Weight' (0 = original, 1 = fully aligned) inputs.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="35%"></p>
  </div>
  <div class="tab-content" id="arc-content3">
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
          <td><strong>Split Start</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the first index within each branch of the input `TargetPlane` data.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the last index within each branch of the input `TargetPlane` data.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="35%"></p>
  </div>
</div>

### a. Text Field

The data type is **String**. It is primarily used to set user-defined variable values. In the case of the *Code Solver*, it is used to specify the saved file name and project name.
Users can edit or input text by double-clicking on the Text Field. Note that the input value must start with an English letter, and special characters or blank spaces are not allowed.

<p align="center">  <img src="/assets/images/0_RobTarget_4.png" align="center" width="35%"></p>

### b. Numeric Value (Slider)

The data type is **Number**, which is broadly divided into **Double** and **Integer**.
Users can change or input values by dragging the pointer on the Slider Bar left/right or by double-clicking it.

*Double*
Accepts decimal values, including integers.

<p align="center">  <img src="/assets/images/2_FlybyCustom_22.png" align="center" width="35%"></p>


*Integer*
Accepts only positive integer values.

<p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="35%"></p>

### c. DropDown

The data type is **String**. Users can select models or options provided by GERTY.
For Tool/WorkBench models, objects exported by the user can be saved and loaded into GERTY.

<p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="35%"></p>

### d. Button / Toggle Switch

The data type is **Boolean**. A button temporarily reactivates the state of a component. A toggle completely switches the state of a component.
In some components, input values and required parameters may be added or removed dynamically.

<p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="35%"></p>

### e. Color Swatch

The data type is **Color**. Allows users to customize the color of the active model or path in the simulation.

<p align="center">  <img src="/assets/images/2_Workbench_11.png" align="center" width="35%"></p>

### f. Panel

The data type is **String**. When the component is active, it displays the component's output values through a panel.

<p align="center">  <img src="/assets/images/1_ScanController_11.png" align="center" width="35%"></p>

### g. Process Gauge

For components that require a certain amount of time for data processing, this visually shares the progress with the user.
Located at the very bottom of the component, it displays the progress as a percentage (**10%** etc.).

<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="35%"></p>

------------

# | Outputs

When input values and required parameters are successfully processed, the results are exported according to the corresponding output data values.