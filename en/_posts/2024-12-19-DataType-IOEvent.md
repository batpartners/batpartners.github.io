---
title: "IOEvent"

layout: single
header:
  teaser: "/assets/images/4_IOEvent.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-IODEvent/
translation_link: /datatype/DataType-IODEvent/

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

Defines an individual I/O trigger event within the triggios array by specifying the target output signal, the trigger position on the path, and its configuration values. It configures the full triggios data by grouping multiple IOEvent instances into a single TriggIOs component.

<p align="center">  <img src="/assets/images/4_IOEvent.png" align="center" width="32%"></p>

# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Signal | String | Inputs the signal data. |
| Signal Type | String | Specifies the variable name of the signal data. |
| DO Value | Double | Specifies the data value of the signal data. |

## | Required Parameter

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px; /* 불필요한 하단 공백 최소화 */
  }

  /* 라디오 버튼 숨기기 */
  .tabs-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  /* 탭 버튼 스타일 (상단 바 정렬) */
  .tab-buttons {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin: 0;
    padding: 0;
    list-style: none;
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

  /* 콘텐츠 박스 기본 설정 (기본적으로 숨김) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    animation: fadeIn 0.3s ease;
  }

  /* 💡 1번 탭 그룹 스타일 및 노출 제어 */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2번 탭 그룹 스타일 및 노출 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-1" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">IO Event</label></li>
  </ul>
  <div class="tab-content" id="content1">
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
          <td><strong>Signal Type</strong></td>
          <td>Dropdown</td>
          <td>Output signal type (Digital / Group / Analog).</td>
        </tr>
        <tr>
          <td><strong>Value</strong></td>
          <td>Boolean</td>
          <td>Enables or disables the event (True: Enabled / False: Disabled).</td>
        </tr>        
      </tbody>
    </table>
  </div>
</div>
<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Settings</label></li>
  </ul>
  <div class="tab-content" id="content2">
    <table class="spec-table"