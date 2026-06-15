---
title: "WobjData(Fixed)"
layout: single
header:
  teaser: "/assets/images/04_WobjData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WobjData/DataType-WobjData_Fixed

translation_link: /en/datatype/DataType-WobjData/DataType-WobjData_Fixed

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

ABB 워크오브젝트(워크피스 좌표계) 정의. 월드 좌표계에서 작업대의 로컬 좌표계를 정의하는 사용자 프레임(uframe) 및 오브젝트 프레임(oframe) 지정. 우클릭 컨텍스트 메뉴로 Movable(외부축에 의해 움직이는 워크오브젝트), Fixed(고정된 일반 워크오브젝트) 두 모드 전환 지원.

<p align="center">  <img src="/assets/images/2_WobjData.png" align="center" width="32%"></p>


# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| *User Frame* | Plane | WobjData의 사용자 프레임 (uframe)으로 사용되는 평면 |
| *Object Frame* | Plane | WobjData의 객체 프레임(oframe)으로 사용되는 평면 |
| *Override Wobj* | Plane | 입력된 워크오브젝트 데이터로 컴포넌트 출력을 덮어씀. (선택) 연결 시 다른 인풋값과 관계없이 이 데이터가 우선 적용. |

## 옵션 변경(Felxible Option)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Target Plane이 고정된 위치의 기준 평면으로 재정의 |
| *Movable WobjData* | - | Target Plane이 이동 가능한 위치의 기준 평면으로 재정의 |


## | 필수 파라미터 (Required Parameter)

<p align="center" style="margin: 15px 0 0 0;">
      <img src="/assets/images/2_WobjData.png" width="38%" style="margin-right: 15px;" alt="Default Mode"><img src="/assets/images/2_WobjData_1.png" width="38%" alt="Toggled Mode">
</p>

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
  <input type="radio" id="tab1" name="gh-tabs-wobj" checked><input type="radio" id="tab2" name="gh-tabs-wobj">
  
  <ul class="tab-buttons">
    <li><label for="tab1">WobjData</label></li>
    <li><label for="tab2">Preview</label></li>
  </ul>
  
  <div class="tab-content" id="content1">
    <table class="spec-table" style="margin: 0;">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>String</td>
          <td>생성할 `WobjData` 변수의 명칭을 정의합니다. 해당 WobjData 위치의 고유 식별자로 사용됩니다.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tab-content" id="content2">
    <table class="spec-table" style="margin: 0 0 20px 0;">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Frame Size</strong></td>
          <td>Number</td>
          <td>WobjFrame의 평면 좌표계 축 디스플레이 크기를 조절합니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WobjData** | WobjData | 정의된 ABB WobjData 출력 |
