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

Defines weld seam data for start and end sequences. Specifies the timing and arc conditions across three distinct phases: Ignition, Heat, and End. Generally, these values remain consistent throughout an entire seam or across multiple seams.

<p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>

# | Input

| Name | Type | Description |
| :--- | :--- | :--- |
| **Weld Sched** | Weld Sched | The welding program number (schedule) and welding mode to be utilized. |
| **Weight** | Number | Weight factor applied to wirefeed1. |


## | Required Parameter

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

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-seamdata" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">SeamData</label></li>
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
          <td>Variable name.</td>
        </tr>
        <tr>
          <td><strong>Link ArcData</strong></td>
          <td>Boolean</td>
          <td>Links ArcData values across all sequences (Ignition, Heat, End). TRUE: Adjusting parameters in one phase automatically syncs the others. FALSE: Allows independent tracking for each phase (Default).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="tab3" name="gh-tabs-arcdata">
  <input type="radio" id="tab4" name="gh-tabs-arcdata">
  
  <ul class="tab-buttons">
    <li><label for="tab2">Ignition ArcData</label></li>
    <li><label for="tab3">Heat ArcData</label></li>
    <li><label for="tab4">End ArcData</label></li>
  </ul>

  <div class="tab-content" id="content2">
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Common to both ABB and Fronius systems.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.</td>
        </tr>        
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content3">
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Common to both ABB and Fronius systems.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.</td>
        </tr> 
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_1.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content4">
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
          <td><strong>Voltage</strong></td>
          <td>Number</td>
          <td>Welding voltage (ABB convention). For Fronius TPS/TPS-i: Adjusts the arc length.</td>
        </tr>
        <tr>
          <td><strong>Wirefeed(m/min)</strong></td>
          <td>Number</td>
          <td>Wire feed speed (m/min). Common to both ABB and Fronius systems.</td>
        </tr>
        <tr>
          <td><strong>Control</strong></td>
          <td>Number</td>
          <td>Control parameter (ABB convention). For Fronius TPS/TPS-i: Adjusts dynamic characteristics.</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Number</td>
          <td>Welding current (ABB convention). Not utilized in Fronius TPS/TPS-i setups.</td>
        </tr> 
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_2.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="tab5" name="gh-tabs-params" checked>
  <input type="radio" id="tab6" name="gh-tabs-params">
  <input type="radio" id="tab7" name="gh-tabs-params">
  
  <ul class="tab-buttons">
    <li><label for="tab5">Ignition Params</label></li>
    <li><label for="tab6">Heat Params</label></li>
    <li><label for="tab7">End Params</label></li>
  </ul>

  <div class="tab-content" id="content5">
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
          <td><strong>Purge Time</strong></td>
          <td>Number</td>
          <td>Gas pre-purge duration (s) required to fill the gas line and weld torch. If travel time to the start position is shorter than the purge time, the robot dwells at the start position until the timer expires.</td>
        </tr>
        <tr>
          <td><strong>Purgeflow Time</strong></td>
          <td>Number</td>
          <td>Shielding gas pre-flow duration (s) over the weldment. The robot remains stationary at the ignition location during this window before the arc is initiated.</td>
        </tr>
        <tr>
          <td><strong>Move Delay</strong></td>
          <td>Number</td>
          <td>Dwell time delay (s) from the point of arc stabilization at ignition until the primary heating phase begins.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content6">
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
          <td><strong>Heat Speed</strong></td>
          <td>Number</td>
          <td>Travel speed maintained during the initial heating sequence at the start of welding.</td>
        </tr>
        <tr>
          <td><strong>Heat Time</strong></td>
          <td>Number</td>
          <td>Duration (s) for the initial heating sequence. Active only when Heat Distance or Heat Speed is set to 0.</td>
        </tr>
        <tr>
          <td><strong>Heat Distance</strong></td>
          <td>Number</td>
          <td>Linear distance over which the specified heating configuration is applied at the beginning of the weld segment.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_1.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="content7">
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
          <td><strong>Crater Time</strong></td>
          <td>Number</td>
          <td>Duration (s) allocated for crater filling during the termination phase of the weld.</td>
        </tr>
        <tr>
          <td><strong>Burnback Time</strong></td>
          <td>Number</td>
          <td>Additional arc burn time (s) sustained after wire feed termination to prevent the electrode wire from sticking in the solidification matrix of the weld pool.</td>
        </tr>
        <tr>
          <td><strong>Postflow Time</strong></td>
          <td>Number</td>
          <td>Gas post-flow duration (s) supplied after arc termination to protect the cooling crater weldment from atmospheric oxidation.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/7_SeamData_2.png" align="center" width="32%"></p>
  </div>
</div>

# | Output

| Name | Type | Description |
| :--- | :--- | :--- |
| **SeamData** | SeamData | Outputs the configured ABB SeamData configuration stream. |
| **Code** | String | Outputs the compiled RAPID instruction code. |