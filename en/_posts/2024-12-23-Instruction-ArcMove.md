---
title: "ArcMove"
layout: single
header:
  teaser: "/assets/images/ArcMove.png"
collection: Datatype
entries_layout: grid
author_profile: true
categories:
  - Instruction
translated: true
lang: en
permalink: /en/instruction/Instruction-ArcMove/
translation_link: /ko/instruction/Instruction-ArcMove/
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

Generates ABB arc instructions for welding (ArcLStart, ArcL, ArcLEnd).

<p align="center"><img src="/assets/images/3_ArcMove.png" align="center" width="32%"></p>

<style>
  /* 💡 [Unify Table Width] Expand all markdown tables in the body and tables inside tabs to 100% of the screen width */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* Forcefully fix cell width ratio within the table */
    word-break: break-all !important;     /* Prevent cell shrinkage and allow line breaks for long text inputs */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Absolutely prevent horizontal overflow due to padding */
  }
  
  /* 💡 [Unify Column Ratio] Match the structure of 1st column (20%), 2nd column (15%), and 3rd column (65%) identically for all tables */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab system entire container */
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

  /* 💡 Active tab label style */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **RobTargets** | RobTarget | Target motion positions. Connect to the output of a RobTarget or Positioner RobTarget component. |
| **SeamData** | SeamData| ABB Seam Data |
| **WeldData** | WeldData | ABB Weld Data |


## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-welddata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">Arc Move</label></li>
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
          <td>Select motion type, speed, and zone (blend radius)</td>
        </tr>
        <tr>
          <td><strong>Arc Start</strong></td>
          <td>Toggle</td>
          <td>• TRUE: Apply ArcLStart to the first target<br>
              • FALSE: Apply ArcL to the first target</td>
        </tr>
        <tr>
          <td><strong>Arc End</strong></td>
          <td>Toggle</td>
          <td>• TRUE: Apply ArcLEnd to the last target<br>
              • FALSE: Apply ArcL to the last target</td>
        </tr>                
      </tbody>
    </table>
<p align="center"><img src="/assets/images/3_ArcMove_1.png" align="center" width="32%"></p>
  </div>
</div>


# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Instruction** | Instruction | Generated ABB instruction. Pass to the 'Instructions' input of the Core component. |