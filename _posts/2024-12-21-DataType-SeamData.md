---
title: "SeamData"

layout: single
header:
  teaser: "/assets/images/SeamData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-SeamData/

translation_link: /en/datatype/DataType-SeamData/
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

---
title: "SeamData"

layout: single
header:
  teaser: "/assets/images/7_SeamData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-SeamData/

translation_link: /datatype/DataType-DataType-SeamData/
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

Defines data for the start and end phases of a weld seam. Specifies the timing and arc conditions for three phases: Ignition, Heat, and End. Generally maintains the same values across an entire seam or multiple seams.

<p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>

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


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>
  <ul class="tab-buttons">
    <li><label for="sm-tab1">SeamData</label></li>
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>Variable name.</td>
        </tr>
        <tr>
          <td><strong>Link ArcData</strong></td>
          <td>Boolean</td>
          <td>Links ArcData values across all phases (Ignition, Heat, End). TRUE: adjusting one automatically syncs the others to the same value. FALSE: independent phase adjustment (Default).</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/7_SeamData_10.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab4" name="gh-tabs-arcdata">
  
  <ul class="tab-buttons">
    <li><label for="arc-tab2">Ignition ArcData</label></li>
    <li><label for="arc-tab3">Heat ArcData</label></li>
    <li><label for="arc-tab4">End ArcData</label></li>
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). Fronius TPS/TPS-i: Arc length correction.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Right-click the icon to change unit to (mm/s). Common to both ABB / Fronius.</td>
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
<p align="center">
  <img src="/assets/images/7_SeamData_11.png" style="display: inline-block; width: 32%; margin-right: 5px;">
  <img src="/assets/images/7_SeamData_3.png" style="display: inline-block; width: 32%; margin-left: 5px;">
</p>
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). Fronius TPS/TPS-i: Arc length correction.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Right-click the icon to change unit to (mm/s). Common to both ABB / Fronius.</td>
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
<p align="center">
  <img src="/assets/images/7_SeamData_12.png" style="display: inline-block; width: 32%; margin-right: 5px;">
  <img src="/assets/images/7_SeamData_4.png" style="display: inline-block; width: 32%; margin-left: 5px;">
</p>
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). Fronius TPS/TPS-i: Arc length correction.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)<br>Wirefeed(mm/s)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Right-click the icon to change unit to (mm/s). Common to both ABB / Fronius.</td>
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
    <p align="center">
  <img src="/assets/images/7_SeamData_13.png" style="display: inline-block; width: 32%; margin-right: 5px;">
  <img src="/assets/images/7_SeamData_5.png" style="display: inline-block; width: 32%; margin-left: 5px;">
</p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="prm-tab5" name="gh-tabs-params" checked>
  <input type="radio" id="prm-tab6" name="gh-tabs-params">
  <input type="radio" id="prm-tab7" name="gh-tabs-params">
  
  <ul class="tab-buttons">
    <li><label for="prm-tab5">Ignition Params</label></li>
    <li><label for="prm-tab6">Heat Params</label></li>
    <li><label for="prm-tab7">End Params</label></li>
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
          <td><strong>Purge Time(s)</strong></td>
          <td>Number</td>
          <td>Pre-purge time (seconds) to fill the gas lines and welding torch with shielding gas. If the travel time to the weld start position is shorter than the purge time, the robot waits at the start position until the purge time expires.</td>
        </tr>
        <tr>
          <td><strong>Purgeflow Time(s)</strong></td>
          <td>Number</td>
          <td>Preflow time (seconds) to flow shielding gas onto the workpiece beforehand. During this period, the robot stays stationary at the position before the arc ignites.</td>
        </tr>
        <tr>
          <td><strong>Move Delay(s)</strong></td>
          <td>Number</td>
          <td>The delay time (seconds) from the moment the arc stabilizes at ignition until the heating phase begins.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_13_1.png" align="center" width="32%"></p>
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
          <td><strong>Heat Speed</strong></td>
          <td>Number</td>
          <td>Welding speed during heating at the beginning of the weld phase.</td>
        </tr>
        <tr>
          <td><strong>Heat Time(s)</strong></td>
          <td>Number</td>
          <td>Heating duration (seconds) at the beginning of the weld phase. Heat Time is effective only if Heat Distance or Heat Speed is set to 0.</td>
        </tr>
        <tr>
          <td><strong>Heat Distance</strong></td>
          <td>Number</td>
          <td>The travel distance over which the heating data is applied at the beginning of welding.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_14.png" align="center" width="32%"></p>
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
          <td><strong>Cool Time(s)</strong></td>
          <td>Number</td>
          <td>The time (seconds) the process is held before crater filling is executed.</td>
        </tr>
        <tr>
          <td><strong>Fill Time(s)</strong></td>
          <td>Number</td>
          <td>Crater filling time (seconds) during the welding end phase.</td>
        </tr>
        <tr>
          <td><strong>Burn-Back Time(s)</strong></td>
          <td>Number</td>
          <td>The time (seconds) used to burn back the weld electrode after the wire feed stops. This prevents the electrode from sticking to the solidifying weld pool at the end of the MIG/MAG process, applied twice during termination.<br>First: when the welding phase ends, Second: during crater filling.</td>
        </tr>
        <tr>
          <td><strong>Rollback Time(s)</strong></td>
          <td>Number</td>
          <td>The time (seconds) used to retract the cold wire after power shutdown. Prevents the wire from sticking to the solidifying weld pool at the end of the TIG process.</td>
        </tr>
        <tr>
          <td><strong>Postflow Time(s)</strong></td>
          <td>Number</td>
          <td>Post-purge time (seconds) required for shielding gas after the process terminates. Prevents oxidation of the weld electrode and the seam joint during cooling.</td>
        </tr>               
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_15.png" align="center" width="32%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **SeamData** | SeamData | Outputs the configured ABB SeamData stream. |
| **Code** | String | Outputs the compiled RAPID command code. |