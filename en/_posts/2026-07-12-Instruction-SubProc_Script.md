---
title: "Sub Procedure"

layout: single
header:
  teaser: "/assets/images/SubPorcedure.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-SubProc_Composition/Instruction-SubProc_Script/
translation_link: /instruction/Instruction-SubProc_Composition/Instruction-SubProc_Script/

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

Creates a RAPID sub-procedure block from a list of instructions. The block is generated as a named PROC and can be called from the main routine.

<p align="center"><img src="/assets/images/8_SubProcedure_1.png" align="center" width="32%"></p>

<style>
  /* 💡 [Table Width Optimization] */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;
    word-break: break-all !important;
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [Column Ratio Optimization] 20% : 15% : 65% */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* Tab System Styles */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
    width: 100% !important;
    clear: both;
  }

  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .tab-buttons {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
  .tab-buttons li { margin: 0; padding: 0; }

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

  .tab-buttons label:hover { background: #e9e9e9; color: #333; }

  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }
</style>

# Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Proc Code** | String | Full RAPID procedure code including PROC header and ENDPROC.<br>Example:<br><code>PROC CustomProc(num n, robtarget t)<br>&nbsp;&nbsp;MoveJ t, v100, fine, tool0;<br>ENDPROC</code> |
| **Call** | String | Call instruction string(s). One per call site.<br>Example:<br><code>CustomProc 5, target1;</code><br>Multiple inputs produce multiple call instruction objects sharing the same procedure declaration. |

# Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **SubProc** | SubProc | Generated procedure. Connect to the Instructions input of the Core component. |