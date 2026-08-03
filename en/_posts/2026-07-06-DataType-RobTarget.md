---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/Robtarget.png"

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

# Description

`robtarget` is a data type that defines the target position, tool orientation, and axis configuration for the robot and auxiliary axes to move to. It defines a `RobTarget` for robot-only motion without external axes. The external axis values are automatically set to `9E9` (unused).

<p align="center">  <img src="/assets/images/0_RobTarget.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Force all markdown and tab tables in content to span 100% of screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;     /* Force fixed cell width ratios */
    word-break: break-all !important;     /* Prevent cell shrinkage and wrap text for long inputs */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Column Ratio Unification] Match the 1st (20%), 2nd (15%), and 3rd (65%) column structure across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tabs System Overall Container */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
    width: 100% !important;
    clear: both;
  }

  /* Hide radio buttons */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* Tab Buttons Style (Top bar alignment) */
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

  /* Content Box Default Settings (Hidden by default) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Highlight corresponding label when exact radio button is checked */
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

  /* Display content based on checked radio button state */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }

  /* Smooth fade-in animation on tab switch */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Inputs

*Align Disabled Mode*

| Name | Type | Description |
| :--- | :--- | :--- |
| Target Planes | Plane | Input planes to be converted into `RobTarget`. |
| Z Rotation | Number | Rotates the `RobTarget` around its own Z-axis (Unit: degrees). |
| WobjData | WobjData | Redefines the Target Plane based on the <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">ABB Work Coordinate System</a> (Optional). |
| Chaining | Boolean | Locks the relationship between the <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">Work Object (WorkObj)</a> and the target (`RobTarget`). Allows target position and orientation to change when the work object is modified in the viewport (Optional). |

*Align Enabled Mode*

<p align="center"><img src="/assets/images/0_RobTarget_2.png" align="center" width="32%"></p>

| Name | Type | Description |
| :--- | :--- | :--- |
| Target Planes | Plane | Planes to be converted into `RobTarget`. |
| Z Rotation | Number | Rotates the `RobTarget` around its own Z-axis (Unit: degrees). |
| WobjData | WobjData | Redefines the Target Plane based on the <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">ABB Work Coordinate System</a> (Optional). |
| Chaining | Boolean | Locks the relationship between the <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">Work Object (WorkObj)</a> and the target (`RobTarget`). Allows target position and orientation to change when the work object is modified in the viewport (Optional). |
| Robot Base | Plane | Sets the reference coordinate system that the +X axis of the `RobTarget` will point toward. The origin of this plane serves as the alignment target point, typically inputting the robot's base coordinate system (Optional). |
| Align Weight | Number | Interpolation ratio between the original orientation and the fully aligned orientation. `0` = retains original `RobTarget` orientation, `1` = fully aligns the +X axis toward the `Robot Base` origin. |

## | Required Parameter

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
          <td>Defines the name of the `RobTarget` variable to be created. This variable is used as a unique identifier storing the target position and orientation of the robot.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_4.png" align="center" width="45%"></p>
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
          <td>An option to interpolate and correct the orientation so that the +X axis of the `RobTarget` points toward the `Robot Base` origin. Disabled by default (`False`). Adds inputs for 'Robot Base' (Plane) and 'Align Weight' (`0` = original, `1` = fully aligned).</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="45%"></p>
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
          <td>Enables separating and outputting data corresponding to the first index within each branch of the input data `TargetPlane`.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Enables separating and outputting data corresponding to the last index within each branch of the input data `TargetPlane`.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="45%"></p>
  </div>
</div>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Targets | RobTarget | Outputs the first branch data of ABB RAPID `RobTargets`. |
| RobTargets | RobTarget | Outputs ABB RAPID `RobTargets` data. |
| End Targets | RobTarget | Outputs the last branch data of ABB RAPID `RobTargets`. |

<!-- <figure>
  <img src="/assets/images/DataTypes/RobTarget/TiltingWeight_RobT.gif" alt="Tilting_RobT">
  <figcaption> Tilting</figcaption>
</figure> -->