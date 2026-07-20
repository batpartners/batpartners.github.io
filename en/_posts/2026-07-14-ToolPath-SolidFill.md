---
title: "SolidFill"

layout: single
header:
  teaser: "/assets/images/10_SolidFill.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-SolidFill/

translation_link: /toolpath/ToolPath-SolidFill/
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

Generates deposition paths filling the inside of the shell with zigzag-based patterns, referenced from the Shell Profile.

<p align="center">  <img src="/assets/images/10_SolidFill.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Forces all Markdown and tab tables in the main content to fill 100% of the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Forces fixed column width ratios */
    word-break: break-all !important;     /* Prevents cell contraction and enables line breaks for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Absolutely prevents horizontal overflow due to padding */
  }
  
  /* 💡 [Column Ratio Unification] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column structure across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tabs System Container */
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

  /* 💡 1st Tab Group Control */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 2nd Tab Group Control */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4 { display: block; }

  /* 💡 3rd Tab Group Control */
  #prm-tab5:checked ~ .tab-buttons label[for="prm-tab5"],
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"],
  #prm-tab7:checked ~ .tab-buttons label[for="prm-tab7"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab5:checked ~ #prm-content5,
  #prm-tab6:checked ~ #prm-content6,
  #prm-tab7:checked ~ #prm-content7 { display: block; }

  /* Smooth Fade-in Animation on Tab Switch */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Shell Profile** | Shell Profile | Reference profile data for outer deposition paths. |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Pattern</label></li>
    <li><label for="arc-tab3">Infill</label></li>
  </ul>
  
  <div class="tab-content" id="arc-content2">
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
          <td><strong>Int-Infill Type</strong></td>
          <td>String</td>
          <td>Pattern applied to the internal fill area.</td>
        </tr>
        <tr>
          <td><strong>External Infill Type</strong></td>
          <td>String</td>
          <td>Pattern applied to the external fill area.</td>
        </tr>
        <tr>
          <td><strong>Rotation</strong></td>
          <td>Number</td>
          <td>Rotation angle applied to the fill pattern.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/10_SolidFill_10.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="arc-content3">
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
          <td><strong>Top Layers</strong></td>
          <td>Integer</td>
          <td>Number of solid layers to generate at the top of the part.</td>
        </tr>
        <tr>
          <td><strong>Bottom Layers</strong></td>
          <td>Integer</td>
          <td>Number of solid layers to generate at the bottom of the part.</td>
        </tr>
        <tr>
          <td><strong>Fill Gap</strong></td>
          <td>Number</td>
          <td>Gap between the shell and fill, and between internal and external fill patterns (mm).</td>
        </tr>
        <tr>
          <td><strong>Int-Infill Amount</strong></td>
          <td>Number</td>
          <td>Internal fill density (0 to 1, 0% to 100%).</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/10_SolidFill_11.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Infill ToolPaths** | Infill ToolPaths Tree | Generated deposition path data. |
| **Infill Pattern** | Curve | Polyline pattern connecting the generated fill deposition paths. |