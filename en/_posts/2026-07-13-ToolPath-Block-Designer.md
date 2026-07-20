---
title: "Block Designer"

layout: single
header:
  teaser: ""

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-Block-Designer/
translation_link: /toolpath/ToolPath-Block-Designer/

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

Generates Place targets for positioning blocks in standard stacking patterns based on block units and wall geometry.

<p align="center">  <img src="/assets/images/15_BlockDesign.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Standardization] Forces all Markdown and tab tables within the content to 100% width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed column width ratios */
    word-break: break-all !important;     /* Prevents cell shrinkage and wraps long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Width Ratio Standardization] Matches 1st (20%), 2nd (15%), and 3rd (65%) columns across all tables */
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

  /* Tab Button Styles (Top bar alignment) */
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

  /* 💡 1st Tab Group Control (SeamData Required Parameters) */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 2nd Tab Group Control (ArcData Series) */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4 { display: block; }

  /* 💡 3rd Tab Group Control (Params Series) */
  #prm-tab5:checked ~ .tab-buttons label[for="prm-tab5"],
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"],
  #prm-tab7:checked ~ .tab-buttons label[for="prm-tab7"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab5:checked ~ #prm-content5,
  #prm-tab6:checked ~ #prm-content6,
  #prm-tab7:checked ~ #prm-content7 { display: block; }

  /* Smooth fade-in animation during tab switching */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Unit Block** | Box | Unit block geometry to be stacked. |
| **Wall** | Brep | Target wall geometry where blocks will be placed. |
| **Wall Base** | Plane | Base plane for slicing the wall into layers. Generates layers along the Z-axis direction. Default: WorldXY. |


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="prm-tab5" name="gh-tabs-params" checked>
  <input type="radio" id="prm-tab6" name="gh-tabs-params">
  
  <ul class="tab-buttons">
    <li><label for="prm-tab5">Settings</label></li>
    <li><label for="prm-tab6">Preview</label></li>
  </ul>

  <div class="tab-content" id="prm-content5">
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
          <td><strong>Divide Distance</strong></td>
          <td>Toggle</td>
          <td>Method for calculating block spacing.<br>
              • TRUE: Fixed interval division (Unit width + Horizontal spacing).<br>
              • FALSE: Uniform count division (Layer length ÷ (Unit width + Spacing) rounded to integer) (Default).</td>
        </tr>
        <tr>
          <td><strong>Horizontal Spacing</strong></td>
          <td>Number</td>
          <td>Horizontal spacing between blocks (mm)</td>
        </tr>
        <tr>
          <td><strong>Vertical Spacing</strong></td>
          <td>Number</td>
          <td>Vertical spacing between blocks (mm)</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/15_BlockDesign_10.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="prm-content6">
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
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>Frame size</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/15_BlockDesign_11.png" align="center" width="45%"></p>
  </div>

</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Place Targets** | Plane | Generated tracing path target planes |
| **Block Count** | Integer | Total number of blocks. |
| **Layer Curves** | Curve | Stacking outline curves for each layer. |
| **Block Wall** | Plane | Resulting wall mesh composed of placed blocks. |