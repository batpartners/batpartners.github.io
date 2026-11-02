---
title: "CreateWorkbench"

layout: single
header:
  teaser: "/assets/images/2_Workbench_2.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: en
permalink: /en/robottool/RobotTool-CreateWorkbench/RobotTool-CreateWorkbench_Option/

translation_link: /robottool/RobotTool-CreateWorkbench/RobotTool-CreateWorkbench_Option/
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

A component that allows users to define a custom workbench for a positioner. By applying the modeling of the currently used workbench to the simulation, you can smoothly monitor the positioner working process. In addition, you can work with a complete simulation including the modeling of workpieces on the workbench.

<p align="center">  <img src="/assets/images/2_Workbench.png" align="center" width="32%"></p>


<style>
  /* 💡 [Table Width Unification] Forces all markdown tables and tables inside tabs to 100% width of the screen */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed cell width ratios */
    word-break: break-all !important;    /* Prevents cell contraction and wraps text when long text is entered */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Column Ratio Unification] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column structures identically for all tables */
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

  /* Hide Radio Buttons */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* Tab Button Style (Top bar alignment) */
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

  /* Activates (red color) only the corresponding label when the exact matching radio button is checked */
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

  /* Content display control based on radio button checked state */
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
| **BenchBase** | Plane | Workbench mounting reference plane relative to the positioner flange |
| **BenchTop** | Plane | Top plane of the workbench |
| **WorkPieces** | Mesh | Workpiece geometry mesh (Optional) |

<p align="center"> 
<video src="/assets/images/WorkbenchImporter_gif.mp4" width="576px" height="230px" autoplay=1 muted=1 loop=1 align="center"></video>
</p>

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-robot" checked>
  <input type="radio" id="tab2" name="gh-tabs-robot">
  
  <ul class="tab-buttons">
    <li><label for="tab1">WorkBench</label></li>
    <li><label for="tab2">Export</label></li>
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
          <td>Workbench name</td>
        </tr>
        <tr>
          <td><strong>WorkBench Colour</strong></td>
          <td>Color</td>
          <td>Visualization color</td>
        </tr>
        <tr>
          <td><strong>WorkPiece Colour</strong></td>
          <td>Color</td>
          <td>Visualization color of the workpiece mesh</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/2_Workbench_10.png" align="center" width="45%"></p>
  </div>

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
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>Saves the workbench data as a file to a user-specified local directory.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/2_Workbench_12.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **WorkBench** | Workbench | Outputs the defined workbench. |