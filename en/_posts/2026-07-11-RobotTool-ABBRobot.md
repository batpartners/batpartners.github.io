---
title: "ABBRobot"

layout: single
header:
  teaser: "/assets/images/ABBRobot.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool

translated: true
lang: en
permalink: /en/robottool/RobotTool-ABBRobot/
translation_link: /robottool/RobotTool-ABBRobot/

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

Defines the ABB robot to be used. Select from the predefined specifications in the ABB IRB series catalog.

<p align="center">  <img src="/assets/images/0_ABBRobot.png" align="center" width="32%"></p>

<style>
  /* 💡 [Unified Table Width] Forces all markdown tables and tab-internal tables to 100% width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Forces strict column width ratios */
    word-break: break-all !important;     /* Prevents cell shrinkage and ensures wrapping */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Unified Column Ratio] Matches the 1st column (20%), 2nd column (15%), and 3rd column (65%) structure */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab System Container */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
    width: 100% !important;
    clear: both;
  }

  /* Hide Radio Buttons */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* Tab Buttons Style (Top Alignment) */
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

  /* Tab Content Box Settings (Hidden by Default) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Activates corresponding label (Red text) when the matching radio button is checked */
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

  /* Display control based on checked radio state */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }

  /* Smooth Fade-in Animation for Tabs */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Base Plane** | Plane | Robot base coordinate system plane. Default: WorldXY. |
| **ToolData** | ToolData | ABB tool data (ToolData) to be applied to the robot. |
| **Positioner** | Positioner | External axis positioner to be synchronized with the robot. |
| **Pedestal** | Mesh | Surrounding environment meshes such as robot pedestals and workbenches (Optional). |


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-tooldata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ABB Robots</label></li>
  </ul>
  <div class="tab-content" id="content1">
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
          <td><strong>Robot Model</strong></td>
          <td>String</td>
          <td>ABB robot model.</td>
        </tr>
        <tr>
          <td><strong>Spec</strong></td>
          <td>String</td>
          <td>Selected ABB robot model specifications — payload (kg) and reach (mm).</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <input type="radio" id="tab3" name="gh-tabs-options">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Robot Linear Jog</label></li>
    <li><label for="tab3">Preview</label></li>
  </ul>
  <div class="tab-content" id="content2">
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
          <td><strong>Reset Pose</strong></td>
          <td>Button</td>
          <td>Resets the robot pose.</td>
        </tr>
        <tr>
          <td><strong>Align Gumball</strong></td>
          <td>Button</td>
          <td>Aligns the TCP parallel to the nearest World coordinate axis (±X, ±Y, ±Z) based on its current orientation. Identical to the Align function in ABB FlexPendant Jogging.</td>
        </tr>
        <tr>
          <td><strong>Config Option</strong></td>
          <td>Toggle</td>
          <td>• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6.<br>
              • FALSE: cfx = 0. Default.</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content3">
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
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>Visualization color.</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_12.png" align="center" width="32%"></p>
  </div>
</div>


# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Robot Setup** | Robot Setup | Configured robot setup. The robot definition combined with base, tool, positioner, and environment models. |
| **Current TCP** | Plane | Current TCP plane of the robot setup. |