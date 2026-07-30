---
title: "Positioner RobTarget"
layout: single
header:
  teaser: "/assets/images/positioner_dynamic_00.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-Positioner_RobTarget/
translation_link: /datatype/DataType-Positioner_RobTarget/

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

Positioner RobTarget defines a RobTarget including the positioner (external axis) rotation angle. You can switch between Dynamic and Static modes by right-clicking the component icon.

<p align="center"><img src="/assets/images/1_Positioner Robtarget.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Standardization] Fill 100% of the screen width for all markdown and tab tables in the body */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Force fixed cell width ratios */
    word-break: break-all !important;    /* Prevent cell shrinking and wrap text on long text input */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Column Ratio Standardization] Match 1st(20%), 2nd(15%), 3rd(65%) column structures identically across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab System Overall Container */
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

  /* Tab button styles (Top bar alignment) */
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

  /* Content box default settings (Hidden by default) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Activate corresponding label (red color) only when the exact matching radio button is checked */
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

  /* Control content display according to radio button check state */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }

  /* Smooth fade-in animation on tab transition */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Inputs

*Dynamic Mode*

| Name | Type | Description |
| :--- | :--- | :--- |
| Positioner | Positioner | <a href="https://batpartners.github.io/en/robottool/RobotTool-Positioner/" target="_blank">ABB Positioner</a> |
| Target Planes | Plane | Planes to be converted into RobTarget |
| Z Rotation | Angle | Rotates the RobTarget based on its own Z-axis (Unit: Degrees) |
| Target Base | Plane | Reference plane where the input Target Plane is defined. The input Target Plane defines the RobTarget oriented to the Positioner's Mounting Plane based on this plane |
| WobjData | WobjData | Redefines the Target Plane based on the <a href="https://batpartners.github.io/en/datatype/DataType-WobjData/" target="_blank">ABB Work Coordinate System</a>. (Optional) |

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

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
          <td>Defines the name of the `RobTarget` variable to be created. This variable is used as a unique identifier to store the robot's target position and orientation.</td>
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
          <td>Extracts and outputs the data corresponding to the first index in each branch of the input data `TargetPlane`.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the last index in each branch of the input data `TargetPlane`.</td>
        </tr>
      </tbody>
    </table>
    <p align="center" style="margin: 15px 0 0 0;">
      <img src="/assets/images/1_Positioner Robtarget.png" width="38%" style="margin-right: 15px;" alt="Default Mode"><img src="/assets/images/1_Positioner Robtarget_2.png" width="38%" alt="Toggled Mode">
    </p>
  </div>
</div>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Targets | RobTarget | Outputs the first branch data of ABB Rapid RobTargets |
| RobTargets | RobTarget | Outputs ABB Rapid RobTargets data |
| End Targets | RobTarget | Outputs the last branch data of ABB Rapid RobTargets |

<p align="center"> 
<video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
</p>