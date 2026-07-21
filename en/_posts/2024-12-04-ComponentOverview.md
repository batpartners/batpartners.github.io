---
title: "GERTY Component"
categories:
  - About GERTY
header:
  teaser: "/assets/images/30.jpg"  
author_profile: true
sidebar:
  nav: "sidebar"

translated: true
lang: en
permalink: /en/about%20gerty/About-GERTY/ComponentOverview

translation_link: /about%20gerty/About-GERTY/ComponentOverview

toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

<style>
  /* 💡 [Table Width Standardization] Force all markdown and tab internal tables to 100% width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Force fix cell width ratios */
    word-break: break-all !important;     /* Prevent cell shrinkage and allow line breaks for long text inputs */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Strictly prevent horizontal overflow due to padding */
  }
  
  /* 💡 [Column Ratio Standardization] Match 1st(20%), 2nd(15%), 3rd(65%) column structure across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system main container */
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

  /* Tab button styles (Top bar alignment) */
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

  /* Content box default settings (Hidden by default) */
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

  /* Smooth fade-in animation on tab switch */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# Overview

The basic structure of GERTY components follows the Rhino Grasshopper architecture. They feature GERTY-specific functions and allow users to configure values for required parameters. The UI for configuring required parameters is broadly divided into 7 types, supporting data types such as String, Number, Boolean, and Color. 
Once the input and required parameter values are defined, they are processed and passed to the output.

## | Input

GERTY is a CAM software solution designed to assist in programming customized machining techniques based on robotic arms.

## (1) Data Match

* The basic value connection method is identical to standard Grasshopper components. GERTY specific parameters exist and can be connected and used according to data matching rules.

<p align="center">  <img src="/assets/images/Asset_1.png" align="center" width="45%"></p>

## (2) Mode Option

* For certain components, it is possible to switch component modes or add functions. You can check this by right-clicking on the component icon. The applicable components are as follows:

> *ToolData*, *WobjData*, *Positioner RobTarget*, *SeamData*, *WeldData*, *TPSiSynergic*, *TPSSynergic*, *ABB Positioner*, *ABB Robot*, *WorkBench*, *Code Solver*, *Solid Shell*, *Surface Shell*, *RePath Tree*


*Example*

<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_Dynamic.png" align="center" width="45%"></p>

## | Required Parameter

### (1) Category Tab

* Options are grouped into [Tab]s based on their functions to allow detailed access to specific category settings. The selected [Tab] is highlighted in a darker color, allowing users to customize the related settings. Any required parameters that are not customized will follow the default values set by GERTY.


*Example*

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked><input type="radio" id="tab3" name="gh-tabs-2">
  <ul class="tab-buttons">
    <li><label for="tab2">Orientation</label></li>
    <li><label for="tab3">Output</label></li>
  </ul>
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
          <td><strong>Align X</strong></td>
          <td>String</td>
          <td>An option that interpolates and corrects the posture so that the +X axis of the RobTarget points towards the Robot Base origin. The default value is False. It adds 'Robot Base' (Plane) and 'Align Weight' (0 = original, 1 = fully aligned) inputs.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="45%"></p>
  </div>
  <div class="tab-content" id="content3">
    <table class="spec-table" style="margin: 0 0 20px 0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Split Start</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the first index within each branch of the input `TargetPlane` data.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>Extracts and outputs the data corresponding to the last index within each branch of the input `TargetPlane` data.</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="45%"></p>
  </div>
</div>

### a. Text Field

The data type is **String**. It is primarily used to set user-defined variable values. In the case of the *Code Solver*, it is used to specify the saved file name and project name.
Users can edit or input text by double-clicking on the Text Field. Note that the input value must start with an English letter, and special characters or blank spaces are not allowed.

<p align="center">  <img src="/assets/images/0_RobTarget_4.png" align="center" width="45%"></p>

### b. Numeric Value (Slider)

The data type is **Number**, which is broadly divided into **Double** and **Integer**.
Users can change or input values by dragging the pointer on the Slider Bar left/right or by double-clicking it.

*Double*
Accepts decimal values, including integers.

<p align="center">  <img src="/assets/images/2_FlybyCustom_22.png" align="center" width="45%"></p>


*Integer*
Accepts only positive integer values.

<p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="45%"></p>

### c. DropDown

The data type is **String**. Users can select models or options provided by GERTY.
For Tool/WorkBench models, objects exported by the user can be saved and loaded into GERTY.

<p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="45%"></p>

### d. Button / Toggle Switch

The data type is **Boolean**. A button temporarily reactivates the state of a component. A toggle completely switches the state of a component.
In some components, input values and required parameters may be added or removed dynamically.

<p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="45%"></p>

### e. Color Swatch

The data type is **Color**. Allows users to customize the color of the active model or path in the simulation.

<p align="center">  <img src="/assets/images/2_Workbench_11.png" align="center" width="45%"></p>

### f. Panel

The data type is **String**. When the component is active, it displays the component's output values through a panel.

<p align="center">  <img src="/assets/images/1_ScanController_11.png" align="center" width="45%"></p>

### g. Process Gauge

For components that require a certain amount of time for data processing, this visually shares the progress with the user.
Located at the very bottom of the component, it displays the progress as a percentage (**10%** etc.).

<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="45%"></p>

# | Outputs

When input values and required parameters are successfully processed, the results are exported according to the corresponding output data values.