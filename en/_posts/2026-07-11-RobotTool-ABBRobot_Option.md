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
permalink: /en/robottool/RobotTool-ABBRobot/RobotTool-ABBRobot_Option/
translation_link: /robottool/RobotTool-ABBRobot/RobotTool-ABBRobot_Option/
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

This is a component that imports the ABB robot to be used. You can select the robot you own and then configure options. Robot models can be selected from predefined specifications in the ABB IRB series catalog. By right-clicking the component icon and selecting [Show Joint Jog Params], you can configure simulations by additionally operating each axis of the selected robot. 

<p align="center">  <img src="/assets/images/0_ABBRobot_2.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Makes all markdown tables and tables inside tabs 100% wide to fit the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces column width ratios to be fixed */
    word-break: break-all !important;    /* Prevents cell contraction and enables wrapping for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Column Ratio Unification] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column structure across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system overall container */
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

  /* Tab button style (top bar alignment) */
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

  /* Content box default settings (hidden by default) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Activates (red) only the corresponding label when the exact matching radio button is checked */
  #tab1:checked ~ .tab-buttons label[for="tab1"],
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"],
  #tab5:checked ~ .tab-buttons label[for="tab5"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }

  /* Controls content visibility based on radio button check status */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5 { 
    display: block; 
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Base Plane** | Plane | Robot base coordinate system plane. Default: WorldXY. |
| **ToolData** | ToolData | ABB <a href="https://batpartners.github.io/en/datatype/DataType-ToolData/" target="_blank">ToolData</a> to apply to the robot. |
| **Positioner** | Positioner | External axis <a href="https://batpartners.github.io/en/robottool/RobotTool-Positioner/" target="_blank">Positioner</a> to link with the robot. |
| **Pedestal** | Mesh | Surrounding environment mesh such as robot base/worktable (optional). |


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-robot" checked>
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
          <td>ABB robot model</td>
        </tr>
        <tr>
          <td><strong>Spec</strong></td>
          <td>String</td>
          <td>Selected ABB robot model specification — Payload (kg) and Reach (mm)</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-linear" checked>
  <input type="radio" id="tab3" name="gh-tabs-linear">
  
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
          <td>Reset robot pose</td>
        </tr>
        <tr>
          <td><strong>Align Gumball</strong></td>
          <td>Button</td>
          <td>Aligns the TCP parallel to the World coordinate axis (±X, ±Y, ±Z) closest to the current TCP orientation. Equivalent to the Align function of ABB FlexPendant Jogging.</td>
        </tr>
        <tr>
          <td><strong>Config Option</strong></td>
          <td>Toggle</td>
          <td>• TRUE: cfx = 1. Inverts the configuration of robot axes 4 and 6<br>• FALSE: cfx = 0 default</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="45%"></p>
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
          <td>Visualization color</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_12.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab4" name="gh-tabs-joint" checked>
  <input type="radio" id="tab5" name="gh-tabs-joint">
  
  <ul class="tab-buttons">
    <li><label for="tab4">Robot Joint Jog</label></li>
    <li><label for="tab5">External Joint Jog</label></li>
  </ul>
  <div class="tab-content" id="content4">
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
          <td><strong>RobAx 1</strong></td>
          <td>Number</td>
          <td>Robot axis 1</td>
        </tr>
        <tr>
          <td><strong>RobAx 2</strong></td>
          <td>Number</td>
          <td>Robot axis 2</td>
        </tr>
        <tr>
          <td><strong>RobAx 3</strong></td>
          <td>Number</td>
          <td>Robot axis 3</td>
        </tr>
        <tr>
          <td><strong>RobAx 4</strong></td>
          <td>Number</td>
          <td>Robot axis 4</td>
        </tr>
        <tr>
          <td><strong>RobAx 5</strong></td>
          <td>Number</td>
          <td>Robot axis 5</td>
        </tr>
        <tr>
          <td><strong>RobAx 6</strong></td>
          <td>Number</td>
          <td>Robot axis 6</td>
        </tr>                                
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_20.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="content5">
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
          <td><strong>ExtAx 1</strong></td>
          <td>Number</td>
          <td>External axis 1</td>
        </tr>
        <tr>
          <td><strong>ExtAx 2</strong></td>
          <td>Number</td>
          <td>External axis 2</td>
        </tr>
        <tr>
          <td><strong>ExtAx 3</strong></td>
          <td>Number</td>
          <td>External axis 3</td>
        </tr>
        <tr>
          <td><strong>ExtAx 4</strong></td>
          <td>Number</td>
          <td>External axis 4</td>
        </tr>
        <tr>
          <td><strong>ExtAx 5</strong></td>
          <td>Number</td>
          <td>External axis 5</td>
        </tr>
        <tr>
          <td><strong>ExtAx 6</strong></td>
          <td>Number</td>
          <td>External axis 6</td>
        </tr> 
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/0_ABBRobot_21.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Robot Setup** | Robot Setup | Configured robot setup. Robot definition bundling the base, tool, positioner, and surrounding models. |
| **Current TCP** | Plane | Current TCP plane of the robot setup. |