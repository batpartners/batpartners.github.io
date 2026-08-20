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
permalink: /en/about%20gerty/About-GERTY/ComponentOverview/

translation_link: /about%20gerty/About-GERTY/ComponentOverview/

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

<style>
  /* 💡 [Unify Table Width] Fill 100% of the screen width for all markdown tables in the body and tables inside tabs */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Forcefully fix the cell width ratio in the table */
    word-break: break-all !important;     /* Prevent cell shrinkage and force line breaks for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Absolutely prevent horizontal width protrusion due to padding */
  }
  
  /* 💡 [Unify Column Ratio] Match the 1st column (20%), 2nd column (15%), and 3rd column (65%) structure identically for all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Entire tab system container */
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

  /* Tab button style (Top bar alignment) */
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

  /* 💡 Control 1st tab group (SeamData essential parameters) */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 Control 2nd tab group (ArcData series) */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4 { display: block; }

  /* 💡 Control 3rd tab group (Params series) */
  #prm-tab5:checked ~ .tab-buttons label[for="prm-tab5"],
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"],
  #prm-tab7:checked ~ .tab-buttons label[for="prm-tab7"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab5:checked ~ #prm-content5,
  #prm-tab6:checked ~ #prm-content6,
  #prm-tab7:checked ~ #prm-content7 { display: block; }

  /* Smooth fade-in animation when switching tabs */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Overview

The basic structure of GERTY components follows the Rhino Grasshopper structure. GERTY has unique functions, and you can set values corresponding to essential parameters. The GERTY UI is broadly divided into 7 types, and once the input and essential parameter values are defined, they are delivered as output values.

<p align="center">  <img src="/assets/images/Component_00.png" align="center" width="80%"></p>

# | Input

These are values that must be received externally, and you can connect and use Rhino/GERTY components according to the data type. There are values that must be input, and values that are not (optional values). Optional values can be left blank, and it is normal for the component color to turn gray.

### (1) Connect Node

The method is the same as connecting basic Grasshopper component values.

<p align="center">  <img src="/assets/images/ContextMenu_00.png" align="center" width="80%"></p>

### (2) Mode Option

For certain components, you can switch component modes or add functions. You can check the Context Menu by right-clicking the component icon, and the types of components are as follows.

<p align="center">  <img src="/assets/images/Asset_1.png" align="center" width="80%"></p>

> <a href="https://batpartners.github.io/datatype/DataType-ToolData/" target="_blank">`ToolData`</a>, <a href="https://batpartners.github.io/datatype/DataType-WobjData/" target="_blank">`WobjData`</a>, <a href="https://batpartners.github.io/datatype/DataType-Positioner_RobTarget/" target="_blank">`Positioner RobTarget`</a>, <a href="https://batpartners.github.io/datatype/DataType-SeamData/" target="_blank">`SeamData`</a>, <a href="https://batpartners.github.io/datatype/DataType-WeldData/" target="_blank">`WeldData`</a>, `TPSiSynergic`, `TPSSynergic`, <a href="https://batpartners.github.io/robottool/RobotTool-Positioner/" target="_blank">`ABB Positioner`</a>, <a href="https://batpartners.github.io/robottool/RobotTool-ABBRobot/" target="_blank">`ABB Robot`</a>, <a href="https://batpartners.github.io/robottool/RobotTool-CreateWorkbench/" target="_blank">`WorkBench`</a>, <a href="https://batpartners.github.io/core/Core-Code-Solver/" target="_blank">`Code Solver`</a>, <a href="https://batpartners.github.io/toolpath/ToolPath-SolidShell/" target="_blank">`Solid Shell`</a>, <a href="https://batpartners.github.io/toolpath/ToolPath-SurfaceShell/" target="_blank">`Surface Shell`</a>, <a href="https://batpartners.github.io/utils/Utils-RepathTree/" target="_blank">`RePath Tree`</a>


*Example*
<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_Dynamic.png" align="center" width="45%"></p>

------------

## | GERTY UI

These must be included in the component values, and in the case of the above values, they can be redefined by the user.

### Tab

Specific category options have been grouped into [Tab]s according to their function to allow for detailed access. The selected [Tab] is activated in a dark color, and related settings can be customized. Uncustomized essential parameter values follow the default values set in GERTY.

*Example*
<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Orientation</label></li>
    <li><label for="arc-tab3">Output</label></li>
  </ul>

  <div class="tab-content" id="arc-content2">
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="35%"></p>
  </div>
  <div class="tab-content" id="arc-content3">
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="35%"></p>
  </div>
</div>

### a. Text Field

Users can edit/write in the Text Field by double-clicking the mouse. Please refer to each component document for the written values. Basically, you can enter text including English letters or numbers.

<p align="center">  <img src="/assets/images/0_RobTarget_4.png" align="center" width="35%"></p>

### b. Slider

Users can access the value settings in two ways. One is by double-clicking the label written next to the slider, and the other is by dragging the pointer on the Slider Bar left/right or double-clicking the mouse to change/input the value.

*Double*<br>
Can receive decimal values, including integers.

<p align="center">  <img src="/assets/images/2_FlybyCustom_22.png" align="center" width="35%"></p>

*Integer*<br>
Only positive integer values can be entered.

<p align="center">  <img src="/assets/images/1_FlybyPlane_10.png" align="center" width="35%"></p>

### c. DropDown

You can select the models or options provided by GERTY. For Tool/WorkBench models, objects `Export`ed by the user can be saved in GERTY and loaded.

<p align="center">  <img src="/assets/images/0_ABBRobot_10.png" align="center" width="35%"></p>

### d. Button / Toggle

In the case of a `Button`, it temporarily reactivates the state of the component. A `Toggle` completely switches the component's state. For some components, input values and essential parameters may be added/removed.

<p align="center">  <img src="/assets/images/0_ABBRobot_11.png" align="center" width="35%"></p>

### e. Color Swatch

You can customize the color of the active model/path in the simulation.

<p align="center">  <img src="/assets/images/2_Workbench_11.png" align="center" width="35%"></p>

### f. Panel

When a component is activated, the component's result values are exposed and provided in a panel.

<p align="center">  <img src="/assets/images/1_ScanController_11.png" align="center" width="35%"></p>

### g. Process Gauge

For components that take a certain amount of time to process data, the progress can be visually shared with the user. It is located at the bottom of the component and exposes the progress in percent (%).

<p align="center">  <img src="/assets/images/2_SocketSender_12.png" align="center" width="35%"></p>