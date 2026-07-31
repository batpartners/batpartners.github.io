---
title: "TriggerIOMove"

layout: single
header:
  teaser: "/assets/images/TriggIOsMove.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-TriggerIOMove/

translation_link: /instruction/Instruction-TriggerIOMove/
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

This is a component that configures ABB Trigger Move instructions (TriggLIOs, TriggJIOs) to generate one or more I/O signals at specified positions along the path while performing movement.

<p align="center"><img src="/assets/images/2_TriggerMove.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Unification] Makes all markdown tables and tables inside tabs 100% wide to fit the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces column width ratios to be fixed */
    word-break: break-all !important;    /* Prevents cell contraction and enables wrapping for long text */
    margin: 20px 0 !important;
    box-sizing: border-box !important;   /* Absolutely prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Unification] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column structure across all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system overall container */
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

  /* Tab button style (top bar alignment) */
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

  /* Content box default settings (hidden by default) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* 💡 1st tab group control */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* Smooth fade-in animation on tab switch */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **RobTargets** | RobTarget | Motion target position. Connects to the output of <a href="https://batpartners.github.io/en/datatype/DataType-RobTarget/" target="_blank">RobTarget</a> or <a href="https://batpartners.github.io/en/datatype/DataType-Positioner_RobTarget/" target="_blank">Positioner RobTarget</a> component. |
| **TriggIOs** | TriggIOs | ABB TriggIOs |

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
          <td>Motion type, speed, zone radius</td>
        </tr>
      </tbody>
    </table>
<p align="center"><img src="/assets/images/2_TriggerMove_1.png" align="center" width="45%"></p>
  </div>
</div>


# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Instruction** | Instruction | Generated ABB instruction. Passes to the Instructions input of the Core component. |