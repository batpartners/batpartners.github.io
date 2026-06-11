---
title: "Positioner RobTarget (Test)"
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
permalink: /datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Test/
translation_link: /en/datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Test/

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

<br>

<style>
  /* 탭 시스템 전체 컨테이너 */
  .tabs-container {
    position: relative;
    margin: 40px 0;
    min-height: 600px; /* 콘텐츠가 바뀔 때 하단 내용이 출렁이는 걸 방지 */
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
  <input type="radio" id="tab3" name="gh-tabs">

  <ul class="tab-buttons">
    <li><label for="tab1">Description</label></li>
    <li><label for="tab2">Details</label></li>
    <li><label for="tab3">Reviews</label></li>
  </ul>

  <div class="tab-content" id="content1">
    <h3>| 입력(Inputs) : Dynamic 모드</h3>
    
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
          <td><strong>Positioner</strong></td>
          <td>Positioner</td>
          <td>ABB Positioner</td>
        </tr>
        <tr>
          <td><strong>Target Planes</strong></td>
          <td>Plane</td>
          <td>RobTarget으로 변환할 평면</td>
        </tr>
        <tr>
          <td><strong>Z Rotation</strong></td>
          <td>Angle</td>
          <td>RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도)</td>
        </tr>
        <tr>
          <td><strong>Target Base</strong></td>
          <td>Plane</td>
          <td>입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의.</td>
        </tr>
        <tr>
          <td><strong>WobjData</strong></td>
          <td>WobjData</td>
          <td>ABB 작업 평면 좌표계</td>
        </tr>
      </tbody>
    </table>

    <p align="center" style="margin-top: 25px;"> 
      <video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
      <sub style="display: block; text-align: center; color: #666; margin-top: 5px;">Top View Execution</sub>
    </p>
  </div>

  <div class="tab-content" id="content2">
    <h3>| 내부 내장 파라미터 (Built-in Parameters)</h3>
    <p>컴포넌트 내부 하단의 Split 스위치 조작에 따라 우측 출력단(Outputs) 레이아웃이 연동되어 실시간으로 변경됩니다.</p>

    <p align="center" style="margin: 25px 0;">
      <img src="/assets/images/1_Positioner_RobTarget.png" width="38%" style="margin-right: 15px;" alt="Default Mode">
      <img src="/assets/images/1_Positioner_RobTarget_2.png" width="38%" alt="Toggled Mode">
    </p>
    <sub style="display: block; text-align: center; color: #666; margin-top: -15px; margin-bottom: 25px;">[UI 비교] 좌: 기본 상태 (토글 OFF) / 우: Split 토글 활성화 상태</sub>

    <blockquote style="background: #fafafa; border-left: 4px solid #777; padding: 15px; margin-bottom: 15px;">
      <strong>📦 RobTarget 변수 설정</strong><br>
      • <strong>Name</strong> : 생성할 <code>RobTarget</code> 변수의 명칭을 정의합니다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용됩니다.
    </blockquote>

    <blockquote style="background: #fafafa; border-left: 4px solid #e53935; padding: 15px;">
      <strong>🔄 Output 옵션 (동적 아웃풋 스위치 감지)</strong><br>
      • <strong>Split Start</strong> (<code>False</code> ➔ <code>True</code>) : 스위치 활성화 시, 입력 패스의 첫 번째 인덱스를 출력하는 <code>Start Target</code> 노드가 우측 아웃풋단에 실시간으로 확장 오픈됩니다.<br>
      • <strong>Split End</strong> (<code>False</code> ➔ <code>True</code>) : 스위치 활성화 시, 입력 패스의 마지막 인덱스를 출력하는 <code>End Target</code> 노드가 우측 아웃풋단에 실시간으로 확장 오픈됩니다.
    </blockquote>
  </div>

  <div class="tab-content" id="content3">
    <h3>| 출력(Outputs) : 스위치 조건별 데이터 명세</h3>

    <h4>1) 기본 출력 (Default)</h4>
    <p>내부 토글 스위치가 모두 꺼져 있을 때 생성되는 메인 데이터 포트입니다.</p>
    
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>RobTargets</strong></td>
          <td>RobTarget</td>
          <td>입력 평면 전체 데이터 구조에 1:1 매칭되어 파싱된 ABB Rapid RobTargets 전체 코드 스트링 리스트를 반환합니다.</td>
        </tr>
      </tbody>
    </table>

    <h4 style="margin-top: 30px;">2) 스위치 활성화 시 조건부 확장 출력 (Conditional Outputs)</h4>
    <p>내부 스위치 컴포넌트의 토글 상태에 따라 추가 배열 형태로 활성화되는 출력 데이터 명세입니다.</p>

    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>타입</th>
          <th>활성화 트리거 스위치</th>
          <th>데이터 설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Start Target</strong></td>
          <td>RobTarget</td>
          <td><code>Split Start</code> ▶ <strong>ON</strong></td>
          <td>입력 타깃 패스의 첫 번째 인덱스(First Index) 데이터만 안전하게 슬라이싱하여 코드로 반환합니다.</td>
        </tr>
        <tr>
          <td><strong>End Target</strong></td>
          <td>RobTarget</td>
          <td><code>Split End</code> ▶ <strong>ON</strong></td>
          <td>입력 타깃 패스의 마지막 인덱스(Last Index) 데이터만 안전하게 슬라이싱하여 코드로 반환합니다.</td>
        </tr>
      </tbody>
    </table>

    <p align="center" style="margin-top: 30px;"> 
      <video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
    </p>
  </div>
</div>

<br>