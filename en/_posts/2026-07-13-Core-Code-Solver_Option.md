---
title: "Code Solver"

layout: single
header:
  teaser: "/assets/images/codesolver.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: en
permalink: /en/core/Core-Code-Solver/Core-Code-Solver_Option/

translation_link: /core/Core-Code-Solver/Core-Code-Solver_Option/
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

This is a component that generates program files from defined RAPID robot motions and performs tasks to load and upload code files to an ABB controller connected via a network.

<p align="center"><img src="/assets/images/0_CodeSolver_1.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Standardization] Forces all markdown tables and tables inside tabs to 100% width of the screen */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;      /* Forces fixed cell width ratios within the table */
    word-break: break-all !important;    /* Prevents cell shrinking and wraps text when long inputs occur */
    margin: 20px 0 !important;
    box-sizing: border-box !important;    /* Absolutely prevents horizontal overflow caused by padding */
  }
  
  /* 💡 [Column Ratio Standardization] Matches the 1st (20%), 2nd (15%), and 3rd (65%) column structure across all tables */
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

  /* Tab Button Style (Top bar alignment) */
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

  /* 💡 2nd Tab Group Control */
  #tab2:checked ~ .tab-buttons label[for="tab2"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab2:checked ~ #content2 { display: block; }

  /* 💡 3rd Tab Group Control */
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab6:checked ~ #content6 { display: block; }

  /* Smooth fade-in animation on tab transition */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **GERTY Code** | GERTY Code | GERTY Code |
| **ABB Controller** | ABB Controller | <a href="https://batpartners.github.io/en/controllerutils/ControllerUtils-ScanABBController" target="_blank">ABB Controller</a> connected to this PC (Optional) |

## | Required Parameter

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-codesolver" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">Program Settings</label></li>
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
          <td><strong>Program Folder</strong></td>
          <td>String</td>
          <td>Directory path where the robot program will be saved</td>
        </tr>
        <tr>
          <td><strong>Program Name</strong></td>
          <td>String</td>
          <td>Name of the robot program to be generated</td>
        </tr>
        <tr>
          <td><strong>Enable Socket</strong></td>
          <td>Toggle</td>
          <td>Exports the program into the RAPID code as a socket communication module</td>
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_20.png" align="center" width="45%"></p>
  </div>
</div>


<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-codesolver2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Export</label></li>
  </ul>
  <div class="tab-content" id="content2">
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
          <td><strong>Auto Load</strong></td>
          <td>Toggle</td>
          <td>Automatically loads the program to the connected robot controller after code generation</td>
        </tr>
        <tr>
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>Generates RAPID code according to the configured options and saves it to the specified directory</td>
        </tr>
        <tr>
          <td><strong>Cancel</strong></td>
          <td>Button</td>
          <td>Cancels the ongoing code generation and export process</td>
        </tr>
        <tr>
          <td><strong>Export Log</strong></td>
          <td>Panel</td>
          <td>Information on the most recently saved RAPID program file. Displays file path and export results.<br>
              Local path / Controller path / Contents</td>
        <tr>
          <td><strong>Open in Editor</strong></td>
          <td>Button</td>
          <td>Opens the generated RAPID code in VSCode for editing. Automatically launches Notepad if VSCode is not installed.</td>
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_21.png" align="center" width="45%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **SocketBundle** | SocketBundle | Data bundle of socket client and instruction packet list |