---
title: "Positioner RobTarget (Dynamic)"
layout: single
header:
  teaser: "/assets/images/positioner_dynamic_00.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Dynamic/
translation_link: /en/datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Dynamic/

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

포지셔너 전용 RobTarget을 기반으로, 사용자가 정의한 포지셔너 RAPID 코드를 작성할 수 있도록 지원합니다. 우클릭 컨텍스트 메뉴로 Dynamic, Static 모드 전환이 가능합니다.

<p align="center">  <img src="/assets/images/1_Positioner_Robtarget.png" align="center" width="32%"></p>


# | 입력(Inputs)
## Dynamic 모드

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Positioner | Positioner | ABB Positioner |
| Target Planes | Plane | RobTarget으로 변환할 평면 |
| Z Rotation | Angle | RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도) |
| Target Base | Plane | 입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의. |
| WobjData | WobjData | ABB 작업 평면 좌표계 |

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## | 필수 파라미터 (Required Parameter)

<p align="center">  <img src="/assets/images/1_Positioner_Robtarget_2.png" align="center" width="32%"></p>

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 40px 0;
    min-height: 220px; /* 콘텐츠가 바뀔 때 하단 내용이 출렁이는 걸 방지 */
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
    padding: 25px 20px;
    border: 1px solid #ddd;
    border-top: none;
    background: #fff;
    animation: fadeIn 0.3s ease;
  }

  /* 💡 라디오 버튼 체크 상태에 따른 탭 버튼 스타일 동적 매칭 */
  #tab1:checked ~ .tab-buttons label[for="tab1"],
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"] {
    background: #fff;
    color: #e53935; /* 선택된 탭 텍스트 하이라이트 색상 (제공해주신 이미지 핑크/레드 계열 반영) */
    border-bottom: 1px solid #fff;
    padding-bottom: 13px; /* border-bottom을 가려 일체감 부여 */
    margin-bottom: -1px;
    z-index: 2;
  }

  /* 💡 라디오 버튼 체크 상태에 따라 해당하는 콘텐츠 박스만 노출 */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3 {
    display: block;
  }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs" checked>
  <input type="radio" id="tab2" name="gh-tabs">

  <ul class="tab-buttons">
    <li><label for="tab1">RobTarget</label></li>
    <li><label for="tab2">Output</label></li>
  </ul>

  <div class="tab-content" id="content1">
    <table class="spec-table">
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
          <td>생성할 `RobTarget` 변수의 명칭을 정의합니다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용됩니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tab-content" id="content2">
  <table class="spec-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Split Start</strong></td>
          <td>String</td>
          <td>입력 데이터 `TargetPlane`의 각 브랜치(Branch) 내 첫 번째 인덱스(First Index)에 해당하는 데이터를 추출하여 출력합니다.</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>입력 데이터 `TargetPlane`의 각 브랜치(Branch) 내 마지막 인덱스(Last Index)에 해당하는 데이터를 추출하여 출력합니다.</td>
        </tr>
      </tbody>
    </table>
    <p align="center" style="margin: 25px 0;">
      <img src="/assets/images/1_Positioner_Robtarget.png" width="38%" style="margin-right: 15px;" alt="Default Mode">
      <img src="/assets/images/1_Positioner_Robtarget_2.png" width="38%" alt="Toggled Mode">
    </p>
</div>
</div>

# | 출력(Outputs)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Start Targets | RobTarget | ABB Rapid RobTargets 첫번째 브랜치 코드 출력 |
| RobTargets | RobTarget | ABB Rapid RobTargets 코드 출력 |
| End Targets | RobTarget | ABB Rapid RobTargets 마지막 브랜치 코드 출력 |

<p align="center"> 
<video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>