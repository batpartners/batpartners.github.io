---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/01_robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-RobTarget/
translation_link: /datatype/DataType-RobTarget/

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

<p align="center">  <img src="/assets/images/0_RobTarget.png" align="center" width="32%"></p>


# Description

Defines a `RobTarget` for robot-only motions without external axes. External axis values are automatically initialized to `9E9` (unused).

# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Target Planes | Plane | The reference planes to be converted into `RobTarget` data. |
| Z Rotation | Number | Rotates the `RobTarget` around its local Z-axis (Unit: Degrees). |
| WobjData | WobjData | ABB Work Object coordinate system. |
| Chaining | Boolean | Locks the relationship between the Work Object (`WorkObj`) and the target (`RobTarget`). When the Work Object is modified in the viewport, the target's position and orientation update accordingly. |

<figure>
  <img src="/assets/images/DataTypes/RobTarget/TiltingWeight_RobT.gif" alt="Tilting_RobT">
  <figcaption> Tilting</figcaption>
</figure>

## | Required Parameters

<p align="center"><img src="/assets/images/0_RobTarget_2.png" align="center" width="32%"></p>

<style>
  /* Global Tab System Container */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px; /* Minimizes unnecessary bottom spacing */
  }

  /* Hide Radio Buttons */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* Tab Button Layout and Alignment */
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

  /* Default Hidden State for Content Boxes */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    animation: fadeIn 0.3s ease;
  }

  /* 💡 Tab Group 1 Style and Visibility Control */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 Tab Group 2 Style and Visibility Control */
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

  /* Smooth Fade-In Animation for Tab Switching */
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
          <td>Defines the identifier name for the generated `RobTarget` variable. This variable acts as a unique identifier to store the robot's target position and orientation.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked><input type="radio" id="tab3" name="gh-tabs-2">
  <ul class="tab-buttons">
    <li><label for="tab2">Orientation</label></li>
    <li><label for="tab3">Output</label></li>
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
          <td><strong>Align X</strong></td>
          <td>String</td>
          <td>Enables orientation interpolation adjustment so that the +X axis of the `RobTarget` faces the Robot Base origin. Activating this option introduces additional inputs: 'Robot Base' (Plane) and 'Align Weight' (0 = original, 1 = fully aligned).</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tab-content" id="content3">
    <table class="spec-table" style="margin: 0 0 20px 0;">
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
          <td>Extracts and outputs the data corresponding to the first index within each branch of the input `TargetPlane` data stream.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the last index within each branch of the input `TargetPlane` data stream.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Targets | RobTarget | Outputs the ABB RAPID `RobTargets` code corresponding to the first data branch. |
| RobTargets | RobTarget | Outputs the main ABB RAPID `RobTargets` motion code sequence. |
| End Targets | RobTarget | Outputs the ABB RAPID `RobTargets` code corresponding to the last data branch. |
