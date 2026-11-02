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

Defines a single I/O trigger event for a TriggIOs array. Specifies the target output signal, trigger position along the path, and configuration values. Multiple IOEvents can be grouped into the TriggIOs component to construct TriggIOs data.

<p align="center">  <img src="/assets/images/4_IOEvent.png" align="center" width="32%"></p>

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
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

  /* 💡 1번 탭 (SeamData 단독) 제어 */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2, 3, 4번 탭 (ArcData 그룹) 제어 */
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4 { display: block; }

  /* 💡 5, 6, 7번 탭 (Params 그룹) 제어 */
  #tab5:checked ~ .tab-buttons label[for="tab5"],
  #tab6:checked ~ .tab-buttons label[for="tab6"],
  #tab7:checked ~ .tab-buttons label[for="tab7"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6,
  #tab7:checked ~ #content7 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **Signal** | String | Inputs the signal data. |

## | Required Parameter
<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-1" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">IOData Signal</label></li>
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
          <td>Specifies the output signal type (Digital / Group / Analog).</td>
        </tr>
        <tr>
          <td><strong>DO Value</strong></td>
          <td>Boolean</td>
          <td>Sets whether the event is enabled (True: enabled / False: disabled).</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/4_IOEvent_1.png" align="center" width="45%"></p>
  </div>
</div>
<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Settings</label></li>
  </ul>
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
          <td><strong>Used</strong></td>
          <td>Boolean</td>
          <td>Sets whether this event is used (True: enabled / False: disabled).</td>
        </tr>
        <tr>
          <td><strong>Start</strong></td>
          <td>Boolean</td>
          <td>Sets the distance reference point.<br>• TRUE: Measured from the start point of the movement (by TriggLIOs).<br>• FALSE: Measured from the end point of the movement (by TriggLIOs).</td>
        </tr>
        <tr>
          <td><strong>Distance(mm)</strong></td>
          <td>Double</td>
          <td>Inputs the position (mm) on the TriggLIOs movement path where the I/O trigger occurs. It is the distance from the reference point set by the Start parameter.</td>
        </tr>
        <tr>
          <td><strong>EquipLag(sec.)</strong></td>
          <td>Double</td>
          <td>Sets the response delay compensation (s) of the external equipment.<br>• Positive (+): Triggers the signal before reaching the specified position.<br>• Negative (-): Triggers the signal after passing the specified position.</td>
        </tr>
      </tbody>
    </table>
<p align="center">  <img src="/assets/images/4_IOEvent_2.png" align="center" width="45%"></p>
  </div>
</div>

<br>

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **IO Data** | IOEvent | Outputs the defined IO event for ABB TriggIOs. |
| **code** | code | Outputs the generated code. |