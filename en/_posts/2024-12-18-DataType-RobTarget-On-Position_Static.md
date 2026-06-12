---
title: "Positioner RobTarget"
layout: single
header:
  teaser: "/assets/images/positioner_static.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Static/
translation_link: /datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Static/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KO]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

Based on the positioner-specific RobTarget, this component assists users in generating custom positioner RAPID code. Users can toggle between Dynamic and Static modes via the right-click context menu.

<p align="center"><img src="/assets/images/1_Positioner_Robtarget.png" align="center" width="32%"></p>

# | Inputs
## Static Mode

| Name | Type | Description |
| :--- | :--- | :--- |
| Positioner | Positioner | ABB Positioner instance. |
| Target Planes | Plane | Target planes to be converted into RobTargets. |
| Z Rotation | Angle | Rotates the RobTarget around its local Z-axis (Unit: Degrees). |
| Target Base | Plane | The reference coordinate plane where the input Target Plane is defined. The input Target Plane defines the oriented RobTarget on the Positioner's Mounting Plane based on this reference plane. |
| Reference Plane | Plane | The reference coordinate plane used for orienting the positioner within Static Mode. |
| WobjData | WobjData | ABB Work Object data coordinate system. |

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Static)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## | Required Parameter

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px; /* 불필요한 하단 공백 최소화 */
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
    animation: fadeIn 0.3s ease;
  }

  /* 💡 1번 탭 그룹 스타일 및 노출 제어 */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2번 탭 그룹 스타일 및 노출 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-1" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">RobTarget</label></li>
  </ul>
  <div class="tab-content" id="content1">
    <table class="spec-table" style="margin:0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>Defines the variable name of the generated <code>RobTarget</code>. This variable serves as a unique identifier to store the target position and orientation of the robot.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Output</label></li>
  </ul>
  <div class="tab-content" id="content2">
    <table class="spec-table" style="margin:0 0 20px 0;">
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
          <td>Extracts and outputs the data corresponding to the first index within each branch of the input <code>TargetPlane</code> data structure.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the last index within each branch of the input <code>TargetPlane</code> data structure.</td>
        </tr>
      </tbody>
    </table>
    <p align="center" style="margin: 15px 0 0 0;"><img src="/assets/images/1_Positioner_Robtarget.png" width="35%" style="margin-right: 15px;" alt="Default Mode"><img src="/assets/images/1_Positioner_Robtarget_2.png" width="35%" alt="Toggled Mode"></p>
  </div>
</div>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Targets | RobTarget | Outputs the ABB Rapid RobTargets code corresponding to the first branch index. |
| RobTargets | RobTarget | Outputs the complete compiled ABB Rapid RobTargets code sequence. |
| End Targets | RobTarget | Outputs the ABB Rapid RobTargets code corresponding to the last branch index. |

<p align="center"> 
<video src="/assets/images/Static_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
</p>