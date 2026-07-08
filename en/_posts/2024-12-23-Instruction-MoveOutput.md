---
title: "MoveOutput"

layout: single
header:
  teaser: "/assets/images/Move_2.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction
translated: true
lang: en
permalink: /en/instruction/Instruction-MoveOutput/
translation_link: /instruction/Instruction-MoveOutput/
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

Generates ABB Move instructions (MoveJDO, MoveLDO, MoveJGO, MoveLGO, MoveJAO, MoveLAO) with associated digital, group, or analog output signals.

<p align="center"><img src="/assets/images/1_MoveOutput.png" align="center" width="32%"></p>

<style>
  /* 💡 [Unify Table Width] Expand all markdown tables and tab-internal tables to 100% of the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Force fixed cell width ratio */
    word-break: break-all !important;     /* Prevent cell shrinkage and enable line breaks for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Prevent horizontal overflow due to padding */
  }
  
  /* 💡 [Unify Column Ratio] Consistent structure for all tables (20%, 15%, 65%) */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system container */
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

  /* Tab button style */
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

  /* Content box default settings */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Tab group control */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **RobTargets** | RobTarget | Target motion positions. Connect the output of a RobTarget or Positioner RobTarget component. |
| **Signal** | String | The name of the signal to apply the motion to |
| **DO Value** | Boolean | Digital output value |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-welddata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">ABB MoveOutput</label></li>
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
          <td><strong>Type/Speed/Zone</strong></td>
          <td>String</td>
          <td>Motion type, speed, and zone radius</td>
        </tr>
        <tr>
          <td><strong>MoveJ Start End</strong></td>
          <td>Toggle</td>
          <td>• TRUE: Apply MoveJ to the first and last targets<br>
              • FALSE: Apply the selected motion type to all targets</td>
        </tr>
        <tr>
          <td><strong>Fine Start End</strong></td>
          <td>Toggle</td>
          <td>• TRUE: Apply 'fine' Zone to the first and last targets<br>
              • FALSE: Apply the specified Zone value to all targets</td>
        </tr>                
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_Move_1.png" align="center" width="32%"></p>
  </div>
</div>


# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Instruction** | Instruction | Generated ABB instruction. Pass to the 'Instructions' input of the Core component. |

<p align="center"> 
<video src="/assets/images/Move_gif_confirm-min_SHL.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
</p>