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
permalink: /en/datatype/DataType-WeaveData/

translation_link: /datatype/DataType-WeaveData/
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

Defines the weaving motion performed during arc welding. Specifies the weaving geometry shape, amplitude, frequency, and dwell parameters.

<p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Base Plane** | Plane | Reference plane for weaving pattern visualization. (X = travel direction, Y = horizontal, Z = vertical) |


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

  /* 💡 [수정] 정확히 일치하는 라디오 버튼이 체크되었을 때, 대응하는 라벨만 활성화(붉은색) */
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

  /* 💡 라디오 버튼 체크 상태에 따른 콘텐츠 표시 제어 */
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

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-weavedata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">WeaveData</label></li>
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>Variable name.</td>
        </tr>
        <tr>
          <td><strong>Weave Shape</strong></td>
          <td>String</td>
          <td>Weaving pattern geometry shape. [0]: None, [1]: Zigzag (horizontal), [2]: V-shape (vertical), [3]: Triangular (vertical), [4]: Circular (vertical).</td>
        </tr>
        <tr>
          <td><strong>Weave Type</strong></td>
          <td>String</td>
          <td>Axis configuration used for the weaving motion.<br>
                [0]: Geometric. Utilizes all axes (1-6) (Lower frequency / Higher accuracy)<br>
                [1]: Wrist. Primarily utilizes wrist axes (4-6) with minor main axis (1-3) compensation (Higher frequency / Lower accuracy)<br>
                [2]: Rapid1. Main axes (1-3) utilization (Legacy)<br>
                [3]: Rapid2. Wrist axes (4-6) utilization (Legacy)</td>
        </tr>        
      </tbody>
    </table>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="tab3" name="gh-tabs-arcdata">
  <input type="radio" id="tab4" name="gh-tabs-arcdata">
  <input type="radio" id="tab5" name="gh-tabs-arcdata">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Dimension</label></li>
    <li><label for="tab3">Dwell</label></li>
    <li><label for="tab4">Orient</label></li>
    <li><label for="tab5">Bias</label></li>
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
          <td><strong>Length</strong></td>
          <td>Number</td>
          <td>When Type is Geometric/Wrist: Weaving cycle length (mm).<br>
                • When Type is Rapid1/Rapid2: Weaving cycle frequency (Hz).<br>
                • When Shape is Circular: Pitch distance for the circular pattern.</td>
        </tr>
        <tr>
          <td><strong>Width</strong></td>
          <td>Number</td>
          <td>Total width amplitude of the weaving pattern (mm). (Represents radius for circular weaving).</td>
        </tr>
        <tr>
          <td><strong>Height</strong></td>
          <td>Number</td>
          <td>Vertical height of the pattern (mm). Only utilized for V-shape and Triangular patterns; ignored for Zigzag and Circular setups.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>
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
          <td><strong>Dwell Left</strong></td>
          <td>Number</td>
          <td>The travel length along the seam direction (mm) while the TCP delays or moves solely forward at the left turning point of the weaving pattern. Used to increase bead volume on one side.</td>
        </tr>
        <tr>
          <td><strong>Dwell Center</strong></td>
          <td>Number</td>
          <td>The travel length along the seam direction (mm) while the TCP passes through the center (zero point) of the weaving pattern.</td>
        </tr>
        <tr>
          <td><strong>Dwell Right</strong></td>
          <td>Number</td>
          <td>The travel length along the seam direction (mm) while the TCP delays or moves solely forward at the right turning point of the weaving pattern. Symmetric with Dwell Left.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_1.png" align="center" width="32%"></p>
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
          <td><strong>Dir Angle(°)</strong></td>
          <td>Number</td>
          <td>The direction angle (°) of the weaving pattern relative to the travel direction path.</td>
        </tr>
        <tr>
          <td><strong>Tilt Angle(°)</strong></td>
          <td>Number</td>
          <td>The tilt angle (°) of the weaving plane relative to the surface or torch orientation.</td>
        </tr>
        <tr>
          <td><strong>Orient Angle(°)</strong></td>
          <td>Number</td>
          <td>The orientation angle (°) defining the rotation of the weaving pattern matrix.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_2.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content5">
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
          <td><strong>Weave Bias</strong></td>
          <td>Number</td>
          <td>The offset distance (mm) used to bias the weaving pattern centerline to the left (+) or right (-) relative to the path direction. Exclusive to Zigzag weaving.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData_3.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab6" name="gh-tabs-preview" checked>
  <ul class="tab-buttons">
    <li><label for="tab6">Preview</label></li>
  </ul>

  <div class="tab-content" id="content6">
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
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>Size of the visualization frame matrix.</td>
        </tr>
        <tr>
          <td><strong>Preview Cycles</strong></td>
          <td>Number</td>
          <td>Number of repetitive weaving cycles rendered in the preview visualization display.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_WeaveData.png" align="center" width="32%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **WeaveData** | WeaveData | Outputs the configured ABB WeaveData configuration stream. |
| **Code** | String | Outputs the compiled RAPID instruction code. |