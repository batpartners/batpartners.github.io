---
title: "WAAM Builder"
layout: single
header:
  teaser: "/assets/images/14_WAAMBuilder.png"
collection: ToolPath
entries_layout: grid
author_profile: true
categories:
  - ToolPath
translated: true
lang: en
permalink: /en/toolpath/ToolPath-WAAMBuilder/
translation_link: /toolpath/ToolPath-WAAMBuilder/
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

Interprets and integrates WAAM (Wire Arc Additive Manufacturing) deposition toolpaths generated from the slicer. Classifies each target into five categories: First Layer (Shell / Infill), Subsequent Layers (Shell / Infill), and Tween Shell.

<p align="center">  <img src="/assets/images/14_WAAMBuilder.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Uniformly set all markdown and tab internal tables to 100% of the content width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed column width ratios */
    word-break: break-all !important;    /* Prevents cell shrinkage and handles wrapping for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Unification] Matches column widths: 1st column (20%), 2nd column (15%), 3rd column (65%) */
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

  /* Tab Button Styles (Top Bar Alignment) */
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
| **Deposition ToolPaths** | Data | Deposition toolpath data generated from the slicer component. |
| **First Part** | Boolean | Flag indicating whether the current Deposition ToolPath is the lowest (first) part. |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Settings</label></li>
    <li><label for="arc-tab3">Preview</label></li>
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
          <td><strong>Infill First</strong></td>
          <td>Toggle</td>
          <td>• TRUE: Applies deposition sequence from Infill → Shell<br>
              • FALSE: Applies deposition sequence from Shell → Infill</td>
        </tr>
        <tr>
          <td><strong>Layer by Layer</strong></td>
          <td>Toggle</td>
          <td>Sets the processing sequence for Deposition ToolPaths of multiple objects.<br>
              • TRUE: Layer-by-layer deposition (sequentially processes the same layer across all objects).<br>
              • FALSE: Object-by-object deposition (sequentially processes all layers per object).</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/9_DepositionBuilder_10.png" align="center" width="45%"></p>
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
          <td><strong>Preview Color</strong></td>
          <td>Color</td>
          <td>Visualization color.</td>
        </tr>
        <tr>
          <td><strong>Layer Number</strong></td>
          <td>Number</td>
          <td>Layer to preview.</td>
        </tr>
        <tr>
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>Frame size.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/9_DepositionBuilder_11.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **First Shells** | Plane | Target planes for the shell of the first layer. No output when First Part = FALSE. |
| **First Infills** | Plane | Target planes for the infill of the first layer. No output when First Part = FALSE. |
| **Upper Shells** | Plane | Target planes for the shells of layers subsequent to the first layer. |
| **Upper Infills** | Plane | Target planes for the infills of layers subsequent to the first layer. |
| **Tween Shells** | Plane | Target planes for partial shell paths inserted between base shell layers in overhang sections. |