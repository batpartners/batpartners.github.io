---
title: "SolidShell"
layout: single
header:
  teaser: "/assets/images/12_SolidShell.png"
collection: ToolPath
entries_layout: grid
author_profile: true
categories:
  - ToolPath
translated: true
lang: en
permalink: /en/toolpath/ToolPath-SolidShell/
translation_link: /toolpath/ToolPath-SolidShell/
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

Generates shell deposition toolpaths from closed solid geometries.

<p align="center">  <img src="/assets/images/12_SolidShell.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Sets 100% width for all markdown and tab internal tables in the main content */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed cell width ratios */
    word-break: break-all !important;     /* Prevents cell contraction and enables wrapping for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Unification] Matches 1st(20%), 2nd(15%), and 3rd(65%) column structure across all tables */
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

  /* Smooth Fade-in Animation on Tab Switch */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Geometry** | Geometry | Target geometry for slicing. Accepts Brep or Mesh. |
| **Reference Plane** | Plane | Reference plane for slicing. Set parallel to the build plate direction. Layers are generated along the Z-axis of the plane. Default: WorldXY. |
| **Seams** | Curve | Guide curve that determines the starting point (Seam) position for each layer's outer contour path. The intersection between the curve and the outer path is set as the layer starting point. |
| **Edges** | Curve | Guide curve used to tilt target planes formed around the geometry's edges along the edge's tangent direction. |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab4" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Slicing</label></li>
    <li><label for="arc-tab3">Tilting</label></li>
    <li><label for="arc-tab4">Seam</label></li>
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
          <td><strong>Setback</strong></td>
          <td>Number</td>
          <td>Inner/outer offset distance (mm) of the shell path relative to the input geometry boundary.</td>
        </tr>
        <tr>
          <td><strong>Shell Count</strong></td>
          <td>Integer</td>
          <td>Number of shell paths to generate along the outer boundary of the input geometry.</td>
        </tr>
        <tr>
          <td><strong>Layer Width</strong></td>
          <td>Number</td>
          <td>Width of a single deposition path (bead width, mm).</td>
        </tr>
        <tr>
          <td><strong>Layer Height</strong></td>
          <td>Number</td>
          <td>Height of a single deposition layer (layer thickness, mm).</td>
        </tr>
        <tr>
          <td><strong>First Layer Height</strong></td>
          <td>Number</td>
          <td>Height of the first deposition layer contacting the build plate (mm).</td>
        </tr>
        <tr>
          <td><strong>Tolerance</strong></td>
          <td>Number</td>
          <td>Approximation tolerance for the path.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/12_SolidShell_10.png" align="center" width="45%"></p>
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
          <td><strong>Tilt Weight</strong></td>
          <td>Number</td>
          <td>Weight to tilt the target Z-axis toward the surface slope (overhang) direction in overhang geometries. Used to align the torch or extruder with the surface inclination.</td>
        </tr>
        <tr>
          <td><strong>Edge Tilt Weight</strong></td>
          <td>Number</td>
          <td>Weight to tilt targets toward the tangent direction of the edge in geometries with edges. Edge reference curves utilize the component's Edges input.</td>
        </tr>
        <tr>
          <td><strong>Edge Tilt Ramp</strong></td>
          <td>Number</td>
          <td>Distance (mm) to blend the Edge Tilt effect. Gradually applies and releases Edge Tilt over this distance before and after the edge to smooth path movements caused by sudden edge tangent direction changes.</td>
        </tr>
        <tr>
          <td><strong>Incremental Tilt Steps</strong></td>
          <td>Number</td>
          <td>Number of layers (N) to gradually reach the configured Tilt Weight. Applies tilting step-by-step starting from initial layers near the build plate to prevent collisions and excessive robot motion caused by abrupt initial tilting.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/12_SolidShell_11.png" align="center" width="45%"></p>
  </div>

   <div class="tab-content" id="arc-content4">
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
          <td><strong>Wipe Distance</strong></td>
          <td>Number</td>
          <td>Nozzle wiping distance.<br>
              • Positive (+): Continues past the outer path completion point by the specified distance with an overlapping path.<br>
              • Negative (-): Terminates early before the outer path end point by the specified distance.</td>
        </tr>
        <tr>
          <td><strong>Seam Spread</strong></td>
          <td>Number</td>
          <td>Distributes seam start points across N cycles to prevent seams from concentrating at a single location. Shifts path parameters by 1/N per layer and returns to the original position every N layers.<br>
              • Example: N = 4 → Layer 1 = 0.0, Layer 2 = 0.25, Layer 3 = 0.75, Layer 4 = 0.0 (repeating).</td>
        </tr>
        <tr>
          <td><strong>Seam Offset</strong></td>
          <td>Integer</td>
          <td>Offset to collectively adjust the seam positions of all layers. Uniformly shifts the entire structure while maintaining relative positions between layers set by Seam Spread.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/12_SolidShell_12.png" align="center" width="45%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>

  <ul class="tab-buttons">
    <li><label for="sm-tab1">Partition</label></li>
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
          <td><strong>Part Count</strong></td>
          <td>Integer</td>
          <td>Number of parts to divide and slice the model into.<br>
              • 1: Slices the entire model. / • N: Divides the model into N parts for partial slicing.</td>
        </tr>
        <tr>
          <td><strong>Part Number</strong></td>
          <td>Number</td>
          <td>Part number (1 to N) to be sliced among the N divided parts.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/12_SolidShell_20.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Shell ToolPaths** | Shell ToolPaths | Generated deposition toolpath data. |
| **Shell Profile** | Shell Profile | Reference profile information of the generated outer deposition paths. |
| **First Part** | Boolean | Flag indicating whether the current Deposition ToolPath is the bottom-most (first) part. |
| **Shell Contours** | Curve | Polylines connecting the generated outer deposition paths. |