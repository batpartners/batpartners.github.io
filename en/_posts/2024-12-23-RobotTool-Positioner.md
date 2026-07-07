---
title: "Positioner"
layout: single
header:
  teaser: "/assets/images/Positioner.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: en
permalink: /en/robottool/RobotTool-Positioner/
translation_link: /robottool/RobotTool-Positioner/

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

Defines the kinematic configuration of the positioner device. Supports manual specification of axis geometry or selection from the pre-defined ABB IRBP series catalog.

<p align="center">  <img src="/assets/images/1_ABBPositioner.png" align="center" width="32%"></p>

<style>
  /* 💡 [Unify Table Width] Expand all markdown tables in the body and tables inside tabs to 100% of the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Forcefully fix cell width ratio within the table */
    word-break: break-all !important;     /* Prevent cell shrinkage and allow line breaks for long text inputs */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Unify Column Ratio] Match the structure of 1st column (20%), 2nd column (15%), and 3rd column (65%) identically for all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system entire container */
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

  /* 💡 Max 6 elements active label style */
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

  /* 💡 Max 6 elements content display control */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Mounting Plane** | Plane | Flange plane of the positioner. The top reference plane where the workbench is mounted. Default: WorldXY. |
| **Workbench** | Workbench | Defines the workbench mounted on the positioner flange (Optional). |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-model" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ABB Positioner</label></li>
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
          <td><strong>MechUnit Name</strong></td>
          <td>String</td>
          <td>Positioner (MechUnit) variable name</td>
        </tr>
        <tr>
          <td><strong>Positioner Model</strong></td>
          <td>String</td>
          <td>ABB positioner model</td>
        </tr>        
        <tr>
          <td><strong>Spec</strong></td>
          <td>String</td>
          <td>Selected ABB positioner model specifications — working diameter (D) and plate height (H)</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/1_ABBPositioner_10.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-options" checked>
  <input type="radio" id="tab3" name="gh-tabs-options">
  <input type="radio" id="tab4" name="gh-tabs-options">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Motion</label></li>
    <li><label for="tab3">RAPID</label></li>
    <li><label for="tab4">Preview</label></li>
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
          <td><strong>Enable Arm</strong></td>
          <td>Toggle</td>
          <td>Enable positioner arm motion</td>
        </tr>
        <tr>
          <td><strong>Approach Direction</strong></td>
          <td>Number</td>
          <td>Approach direction of the TCP relative to the positioner. The positioner determines its rotation posture based on this approach direction.</td>
        </tr>
        <tr>
          <td><strong>TCP Dir</strong></td>
          <td>Number</td>
          <td>Direction of the TCP that the positioner will ultimately align to</td>
        </tr>        
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_11.png" align="center" width="32%"></p>
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
          <td><strong>Mechanical Unit</strong></td>
          <td>String</td>
          <td>MechUnit mapping parameter in the RAPID instruction</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_12.png" align="center" width="32%"></p>
  </div>

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
          <td><strong>Color</strong></td>
          <td>Color</td>
          <td>Visualization color</td>
        </tr>
      </tbody>
    </table>
    <br>    
    <p align="center">  <img src="/assets/images/1_ABBPositioner_13.png" align="center" width="32%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Positioner** | Positioner | External axis positioner to interface with the robot. |