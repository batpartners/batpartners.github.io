---
title: "WeldData"

layout: single
header:
  teaser: "/assets/images/WeldData.PNG"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /en/datatype/DataType-WeldData/

translation_link: /datatype/DataType-WeldData/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

Defines the parameters for the actual welding section where the arc is stably maintained. Specifies parameters applied along the seam, such as welding speed, voltage, and wire feed conditions.

<p align="center"><img src="/assets/images/8_WeldData.png" align="center" width="32%"></p>

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
    box-sizing: border-box !important;    /* Absolute prevention of horizontal overflow due to padding */
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

  /* 💡 1st Tab Group Control (WeldData Variable Name Overview) */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2nd Tab Group Control (Weld ArcData Set) */
  #tab2:checked ~ .tab-buttons label[for="tab2"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab2:checked ~ #content2 { display: block; }

  /* 💡 3rd Tab Group Control (Weld Param Set) */
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab6:checked ~ #content6 { display: block; }

  /* Smooth Fade-in Animation for Tabs */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Weld Sched** | Weld Sched | The welding program number (schedule) and welding mode to be used. |
| **Weight** | Number | Weight factor for wirefeed1. |
| **WeaveData** | WeaveData | ABB WeaveData configuration data. |


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-welddata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">WeldData</label></li>
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>Variable name.</td>
        </tr>
      </tbody>
    </table>
<p align="center"><img src="/assets/images/8_WeldData_10.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-arcdata" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Weld ArcData</label></li>
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). Fronius TPS/TPS-i: Arc length correction.</td>
        </tr>
        <tr>
          <td><strong>WireFeed(m/min)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Common to both ABB / Fronius.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>Control parameter (ABB convention). Fronius TPS/TPS-i: Dynamic correction.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>Welding current (ABB convention). Not used in Fronius TPS/TPS-i.</td>
        </tr>        
      </tbody>
    </table>
    <br>
    <p align="center"><img src="/assets/images/8_WeldData_11.png" align="center" width="32%"></p>
  </div>
</div> 

<div class="tabs-container">
  <input type="radio" id="tab6" name="gh-tabs-preview" checked>
  <ul class="tab-buttons">
    <li><label for="tab6">Weld Param</label></li>
  </ul>

  <div class="tab-content" id="content6">
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
          <td><strong>Weld Speed(mm/s)</strong></td>
          <td>Number</td>
          <td>TCP linear speed during welding (mm/s). A key factor determining the actual bead shape and layer height.</td>
        </tr>
        <tr>
          <td><strong>Preview Cycles</strong></td>
          <td>Number</td>
          <td>The number of repetition cycles for welding trajectory visualization within the component viewport.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center"><img src="/assets/images/8_WeldData_12.png" align="center" width="32%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **WeldData** | WeldData | Outputs the configured ABB WeldData stream. |
| **Code** | String | Outputs the compiled RAPID command code. |