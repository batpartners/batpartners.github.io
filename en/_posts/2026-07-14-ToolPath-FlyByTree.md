---
title: "FlyByTree"

layout: single
header:
  teaser: "/assets/images/FlyByTree.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-FlyByTree/

translation_link: /toolpath/ToolPath-FlyByTree/
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

Generates flyby target planes that connect between DataTrees of target planes. Configures paths that depart from the workpiece when moving between toolpath DataTrees.

<p align="center">  <img src="/assets/images/3_FlybyTree.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Forces all markdown tables and tables inside tabs to 100% of the content width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed width ratios for table cells */
    word-break: break-all !important;     /* Prevents cell shrinkage and wraps long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Absolutely prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Unification] Matches 1st (20%), 2nd (15%), and 3rd (65%) column structures identically across all tables */
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

  /* Content Box Default Settings (Hidden by Default) */
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

  /* Smooth Fade-in Animation on Tab Transition */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Target Planes0** | Plane | Target plane DataTree to be used as the basis for transition path generation. |
| **Target Planes1** | Plane | Target plane DataTree to be used as the basis for transition path generation. |
| + ADD | Plane | Adds a target plane DataTree to be used as the basis for transition path generation. |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>

  <ul class="tab-buttons">
    <li><label for="sm-tab1">Flyby Targets</label></li>
  </ul>
  <div class="tab-content" id="sm-content1">
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
          <td><strong>Target Count</strong></td>
          <td>Number</td>
          <td>Number of target planes composing the transition path.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="prm-tab5" name="gh-tabs-params" checked>
  <input type="radio" id="prm-tab6" name="gh-tabs-params">
  <input type="radio" id="prm-tab7" name="gh-tabs-params">
  
  <ul class="tab-buttons">
    <li><label for="prm-tab5">Offset</label></li>
    <li><label for="prm-tab6">Blend</label></li>
    <li><label for="prm-tab7">Preview</label></li>
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
          <td><strong>Link</strong></td>
          <td>Toggle</td>
          <td>Links Approach and Departure values. TRUE: Adjusting one side automatically matches the other. FALSE: Independent adjustment (Default).</td>
        </tr>
        <tr>
          <td><strong>Approach Dir</strong></td>
          <td>String</td>
          <td>Batch specifies the approach direction of the transition path.<br>
              • Motion Dir: Inverse of the motion vector at the start of each branch.<br>
              • Z/Y/X Axis · Negative Z/Y/X Axis: Corresponding axis direction of the starting target plane.</td>
        </tr>
        <tr>
          <td><strong>Departure Dir</strong></td>
          <td>String</td>
          <td>Batch specifies the departure direction of the transition path.<br>
              • Motion Dir: Direction of the motion vector at the end of each branch.<br>
              • Z/Y/X Axis · Negative Z/Y/X Axis: Corresponding axis direction of the last target plane.</td>
        </tr>
        <tr>
          <td><strong>Approach(mm)</strong></td>
          <td>Number</td>
          <td>Offset distance (mm) of the transition path entry point from the first target plane.</td>
        </tr>
        <tr>
          <td><strong>Departure(mm)</strong></td>
          <td>Number</td>
          <td>Offset distance (mm) of the transition path exit point from the last target plane.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/1_FlybyPlane_11.png" align="center" width="45%"></p>
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
          <td><strong>Continuity</strong></td>
          <td>String</td>
          <td>Continuity type of the transition path blend.<br>
              [Position]: Position continuity (G0).<br>
              [Tangency]: Tangency continuity (G1).<br>
              [Curvature]: Curvature continuity (G2).</td>
        </tr>
        <tr>
          <td><strong>Link</strong></td>
          <td>Toggle</td>
          <td>Links 'Bulge Start' and 'Bulge End' values. TRUE: Adjusting one side automatically matches the other. FALSE: Independent adjustment (Default).</td>
        </tr>
        <tr>
          <td><strong>Bulge Start</strong></td>
          <td>Number</td>
          <td>Bulge degree at the start point of the blend.</td>
        </tr>
        <tr>
          <td><strong>Bulge End</strong></td>
          <td>Number</td>
          <td>Bulge degree at the end point of the blend.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/1_FlybyPlane_20.png" align="center" width="45%"></p>
  </div>

  <div class="tab-content" id="prm-content7">
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
          <td>Frame size.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/1_FlybyPlane_21.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Target Planes** | Plane | Transition path (Flyby) target plane DataTree |