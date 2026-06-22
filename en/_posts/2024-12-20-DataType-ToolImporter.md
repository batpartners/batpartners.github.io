---
title: "ToolImporter"

layout: single
header:
  teaser: "/assets/images/toolimporter.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-ToolData/DataType-ToolImporter/
translation_link: /datatype/DataType-ToolData/DataType-ToolImporter/

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

# Description

Defines custom tool (end-effector) data. Supports switching between Define mode (manual configuration) and Import mode (loading pre-saved tool data) via the right-click context menu.
<br>
<p align="center">  <img src="/assets/images/3_ToolData_3.png" align="center" width="32%"></p>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Base Plane** | Plane | The tool mounting reference plane relative to the ABB robot flange. Defines the baseline for TCP and geometry (shape). |
| **TCP** | Plane | The position of the TCP (Tool Center Point) at the end of the tool. Defines its position and orientation relative to the tool base (Base Plane). |
| **Tool Load** | ToolLoad | The load data (LoadData) of the tool. If not connected, it is estimated and generated based on the bounding box of the tool geometry. |

<p align="center"> 
<video src="/assets/images/ToolData_Export.mp4" width="576px" height="230px" autoplay=1 muted=1 loop=1 align="center"></video><figcaption>Tool Export</figcaption>
</p>

## | Required Parameter

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
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

  /* 💡 2, 3, 4번 탭 그룹 스타일 및 노출 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-tooldata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ToolData</label></li>
  </ul>
  <div class="tab-content" id="content1">
    <table class="spec-table" style="margin: 0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Tool Name</strong></td>
          <td>String</td>
          <td>Defines the variable name for the generated `ToolData`.</td>
        </tr>
        <tr>
          <td><strong>Preset</strong></td>
          <td>Dropdown</td>
          <td>List of previously saved ToolData presets.</td>
        </tr>        
      </tbody>
    </table>
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
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mass(kg)</strong></td>
          <td>String</td>
          <td>Weight (kg)</td>
        </tr>
        <tr>
          <td><strong>Centroid</strong></td>
          <td>String</td>
          <td>Center of gravity coordinates (x, y, z)</td>
        </tr>
        <tr>
          <td><strong>Inertia</strong></td>
          <td>String</td>
          <td>Moment of inertia (Ix, Iy, Iz)</td>
        </tr>        
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_3.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content3">
    <table class="spec-table" style="margin: 0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>Visualization color</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_4.png" align="center" width="32%"></p>
  </div>
  <div class="tab-content" id="content4">
    <table class="spec-table" style="margin: 0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>Saves the tool data as a file to a user-specified local directory.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/3_ToolData_5.png" align="center" width="32%"></p>
  </div>  
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **ToolData** | ToolData | Outputs the configured ABB ToolData. |


<p align="center">  <img src="/assets/images/ToolData_GIF_00-1.gif" align="center" width="100%"></p>