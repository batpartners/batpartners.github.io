---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/Robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-RobTarget/

translation_link: /en/datatype/DataType-RobTarget/

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

외부축 없이 로봇 단독 모션을 위한 RobTarget 정의한다. 외부축 값은 9E9(미사용)로 자동 설정된다.

<p align="center">  <img src="/assets/images/0_RobTarget.png" align="center" width="32%"></p>

<style>
  /* 💡 [표 너비 통일] 본문 내 모든 마크다운 표와 탭 내부 표를 화면폭에 100% 꽉 채움 */
  .page__content table,
  .page__content .spec-table,
  .tab-content table, 
  .tab-content .spec-table {
    display: table !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    table-layout: fixed !important;       /* 테이블 내 셀 너비 비율을 강제로 고정 */
    word-break: break-all !important;     /* 긴 텍스트 입력 시 셀 수축 방지 및 줄바꿈 */
    margin: 20px 0 !important;
    box-sizing: border-box !important;
  }
  
  /* 💡 [열 비율 통일] 모든 표의 1열(20%), 2열(15%), 3열(65%) 구조를 동일하게 매칭 */
  .page__content table th:nth-child(1), .page__content table td:nth-child(1),
  .tab-content table th:nth-child(1), .tab-content table td:nth-child(1) { width: 20% !important; }
  
  .page__content table th:nth-child(2), .page__content table td:nth-child(2),
  .tab-content table th:nth-child(2), .tab-content table td:nth-child(2) { width: 15% !important; }
  
  .page__content table th:nth-child(3), .page__content table td:nth-child(3),
  .tab-content table th:nth-child(3), .tab-content table td:nth-child(3) { width: 65% !important; }

  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 30px 0;
    min-height: 160px;
    width: 100% !important;
    clear: both;
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

  /* 콘텐츠 박스 기본 설정 (기본적으로 숨김) */
  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ddd;
    background: #fff;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* 정확히 일치하는 라디오 버튼이 체크되었을 때, 대응하는 라벨만 활성화(붉은색) */
  #tab1:checked ~ .tab-buttons label[for="tab1"],
  #tab2:checked ~ .tab-buttons label[for="tab2"],
  #tab3:checked ~ .tab-buttons label[for="tab3"],
  #tab4:checked ~ .tab-buttons label[for="tab4"],
  #tab5:checked ~ .tab-buttons label[for="tab5"],
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff;
    color: #e53935;
    border-bottom: 1px solid #fff;
    padding-bottom: 13px;
    margin-bottom: -1px;
    z-index: 2;
  }

  /* 라디오 버튼 체크 상태에 따른 콘텐츠 표시 제어 */
  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4,
  #tab5:checked ~ #content5,
  #tab6:checked ~ #content6 { 
    display: block; 
  }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Inputs)

*Algin 비활성화 모드*

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Target Planes | Plane | RobTarget으로 변환할 평면 |
| Z Rotation | Number | RobTarget을 자기 자신의 Z축 기준으로 회전한다. (단위 : 도) |
| WobjData | WobjData | ABB 작업 평면 좌표계 |
| Chaining | Boolean | 작업평면(WorkObj)과 타겟(RobTarget) 관계를 고정한다. 뷰포트 상에서 작업평면 변경 시 타겟 위치와 방향도 변경할 수 있다. |

*Algin 활성화 모드*
<p align="center"><img src="/assets/images/0_RobTarget_2.png" align="center" width="32%"></p>

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Target Planes | Plane | RobTarget으로 변환할 평면 |
| Z Rotation | Number | RobTarget을 자기 자신의 Z축 기준으로 회전한다. (단위 : 도) |
| WobjData | WobjData | ABB 작업 평면 좌표계 |
| Chaining | Boolean | 작업평면(WorkObj)과 타겟(RobTarget) 관계를 고정한다. 뷰포트 상에서 작업평면 변경 시 타겟 위치와 방향도 변경할 수 있다. |
| Robot Base | Plane | RobTarget의 +X축이 향할 기준 좌표계. 이 Plane의 원점이 정렬 타겟점이 되며, 일반적으로 로봇의 베이스 좌표계를 입력. |
| Align Weight | Number | 원본 자세와 완전 정렬 자세 사이의 보간 비율. 0 = 원본 RobTarget 자세 유지, 1 = +X축이 Robot Base 원점을 완전히 향하도록 정렬. |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="tab1" name="gh-tabs-1" checked>
  <ul class="tab-buttons">
    <li><label for="tab1">RobTarget</label></li>
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
          <td>생성할 `RobTarget` 변수의 명칭을 정의. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_4.png" align="center" width="32%"></p>
  </div>
</div>
<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-2" checked><input type="radio" id="tab3" name="gh-tabs-2">
  <ul class="tab-buttons">
    <li><label for="tab2">Orientation</label></li>
    <li><label for="tab3">Output</label></li>
  </ul>
    <div class="tab-content" id="content2">
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
          <td><strong>Align X</strong></td>
          <td>String</td>
          <td>RobTarget의 +X축이 Robot Base 원점을 향하도록 자세를 보간 보정하는 옵션 활성화. 'Robot Base'(Plane)와 'Align Weight'(0 = 원본, 1 = 완전 정렬) 인풋이 추가됨</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_5.png" align="center" width="32%"></p>
  </div>
  <div class="tab-content" id="content3">
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
          <td><strong>Split Start</strong></td>
          <td>String</td>
          <td>입력 데이터 `TargetPlane`의 각 브랜치(Branch) 내 첫 번째 인덱스(First Index)에 해당하는 데이터를 추출하여 출력</td>
        </tr>
        <tr>
          <td><strong>Split End</strong></td>
          <td>String</td>
          <td>입력 데이터 `TargetPlane`의 각 브랜치(Branch) 내 마지막 인덱스(Last Index)에 해당하는 데이터를 추출하여 출력</td>
        </tr>
      </tbody>
    </table>
 <p align="center"><img src="/assets/images/0_RobTarget_6.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Outputs)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Start Targets | RobTarget | ABB Rapid RobTargets 첫번째 브랜치 코드 출력 |
| RobTargets | RobTarget | ABB Rapid RobTargets 코드 출력 |
| End Targets | RobTarget | ABB Rapid RobTargets 마지막 브랜치 코드 출력 |

<figure>
  <img src="/assets/images/DataTypes/RobTarget/TiltingWeight_RobT.gif" alt="Tilting_RobT">
  <figcaption> Tilting</figcaption>
</figure>