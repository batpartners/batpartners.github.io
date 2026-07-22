---
title: "WobjData"
layout: single
header:
  teaser: "/assets/images/04_WobjData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-WobjData/DataType-WobjData_Movable/
translation_link: /datatype/DataType-WobjData/DataType-WobjData_Movable/

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

Defines an ABB Work Object (Workpiece Coordinate System). This component specifies the User Frame (`uframe`), which defines the local coordinate system of the workstation relative to the World Coordinate System, and the Object Frame (`oframe`). It supports toggling between two modes via a right-click context menu: `Movable` (Work Object synchronized with an external axis) and `Fixed` (Standard stationary Work Object).

<p align="center">  <img src="/assets/images/2_WobjData.png" align="center" width="32%"></p>


# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| *User Frame* | Plane | The plane used as the User Frame (`uframe`) for the `WobjData`. |
| *Object Frame* | Plane | The plane used as the Object Frame (`oframe`) for the `WobjData`. |
| *Override Wobj* | Plane | Overrides the component's output with the provided Work Object data (Optional). When connected, this data takes priority regardless of other inputs. |

## | Flexible Options

| Name | Type | Description |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Redefines the target plane as a reference plane at a fixed/stationary position. |
| *Movable WobjData* | - | Redefines the target plane as a reference plane at a movable/dynamic position. |

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

    /* 테이블 너비를 컨테이너에 맞춰 100%로 고정 */
  .spec-table {
    width: 100%;
    table-layout: fixed; /* 테이블 내 셀 너비 비율을 일정하게 유지 */
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
  <input type="radio" id="tab1" name="gh-tabs-wobj" checked><input type="radio" id="tab2" name="gh-tabs-wobj">
  
  <ul class="tab-buttons">
    <li><label for="tab1">WobjData</label></li>
    <li><label for="tab2">Preview</label></li>
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
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>Defines the variable name for the generated `WobjData`. This variable serves as a unique identifier for the specific Work Object location.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tab-content" id="content2">
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
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>Adjusts the display size of the local coordinate system axes for the `WobjFrame`.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **WobjData** | WobjData | Outputs the defined ABB `WobjData` structure. |