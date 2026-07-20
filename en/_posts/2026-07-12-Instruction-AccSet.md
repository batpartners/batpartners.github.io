---
title: "AccSet"

layout: single
header:
  teaser: "/assets/images/5_AccSet.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-AccSet/
translation_link: /instruction/Instruction-AccSet/

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

Generates an AccSet instruction that reduces robot acceleration and ramp values. Used for handling fragile parts or limiting dynamic loads near workspace boundaries.

<p align="center"><img src="/assets/images/5_AccSet.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Standardization] Forces all markdown tables and tab-internal tables to 100% width of the content area */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed cell width ratios */
    word-break: break-all !important;    /* Prevents cell shrinkage and handles long text wrapping */
    margin: 20px 0 !important;
    box-sizing: border-box !important;   /* Prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Standardization] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column ratios across all tables */
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

  /* Hide radio buttons */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* Tab Button Style (Top Bar Alignment) */
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
          <td><strong>Acceleration(%)</strong></td>
          <td>Number</td>
          <td>Ratio compared to maximum acceleration/deceleration (%).<br>
              • 100% = Maximum value. Fixed to 20% if input is less than 20%.</td>
        </tr>
        <tr>
          <td><strong>Ramp(%)</strong></td>
          <td>Number</td>
          <td>Acceleration/deceleration increase rate (%). Lower values suppress jerking.<br>
              • 100% = Maximum value. Fixed to 10% if input is less than 10%.</td>
        </tr>
        <tr>
          <td><strong>FinePointRamp(%)</strong></td>
          <td>Number</td>
          <td>Deceleration ramp ratio when entering a Fine Point (target with Fine zone) (%, optional).<br>
              • Final deceleration ramp = Ramp × FinePointRamp.<br>
              • Range: > 0 to 100%. Default value is 100%.</td>
        </tr>
      </tbody>
    </table>
<p align="center"><img src="/assets/images/5_AccSet_1.png" align="center" width="45%"></p>
  </div>
</div>

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/AccSet_1-1.png" align="center" width="72%"></p>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **Instruction** | Instruction | Generated ABB instruction. Passed to the Instructions input of the Core component. |