---
title: "Surface Shell"
layout: single
header:
  teaser: "/assets/images/13_SurfaceShell.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-SurfaceShell/

translation_link: /en/toolpath/ToolPath-SurfaceShell/
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

닫힌 솔리드 형상에서 외곽(Shell) 적층 경로를 생성

<p align="center">  <img src="/assets/images/13_SurfaceShell.png" align="center" width="32%"></p>

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
    box-sizing: border-box !important;    /* 패딩으로 인한 가로 폭 삐져나옴 절대 방지 */
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

  /* 💡 1번째 탭 그룹 제어 (SeamData 필수 파라미터) */
  #sm-tab1:checked ~ .tab-buttons label[for="sm-tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #sm-tab1:checked ~ #sm-content1 { display: block; }

  /* 💡 2번째 탭 그룹 제어 (ArcData 시리즈) */
  #arc-tab2:checked ~ .tab-buttons label[for="arc-tab2"],
  #arc-tab3:checked ~ .tab-buttons label[for="arc-tab3"],
  #arc-tab4:checked ~ .tab-buttons label[for="arc-tab4"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #arc-tab2:checked ~ #arc-content2,
  #arc-tab3:checked ~ #arc-content3,
  #arc-tab4:checked ~ #arc-content4 { display: block; }

  /* 💡 3번째 탭 그룹 제어 (Params 시리즈) */
  #prm-tab5:checked ~ .tab-buttons label[for="prm-tab5"],
  #prm-tab6:checked ~ .tab-buttons label[for="prm-tab6"],
  #prm-tab7:checked ~ .tab-buttons label[for="prm-tab7"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #prm-tab5:checked ~ #prm-content5,
  #prm-tab6:checked ~ #prm-content6,
  #prm-tab7:checked ~ #prm-content7 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Geometry** | Geometry | 슬라이싱 대상 형상. Brep 또는 Mesh 입력. |
| **Reference Plane** | Plane | 슬라이싱 기준 평면. 빌드 플레이트 방향과 동일하게 설정. 평면의 Z축 방향으로 레이어가 생성됨. 기본값: WorldXY. |
| **Edges** | Curve | 형상의 Edge 주변에 형성된 타겟 평면을 Edge의 접선(Tangent) 방향으로 기울이는 데 사용되는 가이드 커브. |
| **Dir Pattern** | Boolean | 레이어별 적층경로 진행 방향의 반전 여부를 정의하는 불리언 패턴.입력된 패턴은 레이어 순서에 따라 순환 반복됨. |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="arc-tab2" name="gh-tabs-arcdata" checked>
  <input type="radio" id="arc-tab3" name="gh-tabs-arcdata">
  <input type="radio" id="arc-tab4" name="gh-tabs-arcdata">

  <ul class="tab-buttons">
    <li><label for="arc-tab2">Slicing</label></li>
    <li><label for="arc-tab3">Tilting</label></li>
    <li><label for="arc-tab4">Seam</label></li>
  </ul>
  
  <div class="tab-content" id="arc-content2">
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
          <td><strong>End Fillet Type</strong></td>
          <td>String</td>
          <td>이격된 외곽 적층 경로 끝단의 마감 유형. ('Outline Shells'가 2 이상일 때 유효)</td>
        </tr>
        <tr>
          <td><strong>Outline Shells</strong></td>
          <td>Integer</td>
          <td>입력 형상의 외곽선을 따라 생성할 외곽 경로(Shell)의 개수.</td>
        </tr>
        <tr>
          <td><strong>Layer Width</strong></td>
          <td>Number</td>
          <td>단일 적층 경로의 폭(비드 폭, mm).</td>
        </tr>
        <tr>
          <td><strong>Layer Height</strong></td>
          <td>Number</td>
          <td>단일 적층 레이어의 높이(층 두께, mm).</td>
        </tr>
        <tr>
          <td><strong>First Layer Height</strong></td>
          <td>Number</td>
          <td>빌드 플레이트에 접하는 첫 번째 적층 레이어의 높이 (mm).</td>
        </tr>
        <tr>
          <td><strong>Tolerance</strong></td>
          <td>Number</td>
          <td>경로의 근사 허용 오차.</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/13_SurfaceShell_10.png" align="center" width="32%"></p>
  </div>

  <div class="tab-content" id="arc-content3">
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
          <td><strong>Tilt Weight</strong></td>
          <td>Number</td>
          <td>오버행 형상에서 타겟 Z축을 표면 기울기(오버행) 방향으로 기울이는 가중치. 토치·익스트루더를 형상 기울기에 맞춰 정렬할 때 사용.</td>
        </tr>
        <tr>
          <td><strong>Edge Tilt Weight</strong></td>
          <td>Number</td>
          <td>Edge가 있는 형상에서, 타겟을 Edget의 접선(Tangent) 방향으로 기울이는 가중치. 엣지 참조 커브는 컴포넌트의 Edges 인풋을 이용.</td>
        </tr>
        <tr>
          <td><strong>Edge Tilt Ramp</strong></td>
          <td>Number</td>
          <td>Edge Tilt 효과를 블렌딩하는 거리 (mm). 엣지로부터 이 거리만큼 전후로 Edge Tilt를 점진적으로 적용·해제.급격한 엣지 접선 방향 전환으로 인한 경로 움직임 완화.</td>
        </tr>
        <tr>
          <td><strong>Incremental Tilt Steps</strong></td>
          <td>Number</td>
          <td>설정된 Tilt Weight까지 점진적으로 도달하는 레이어 수(N). 빌드 플레이트 인근 초기 레이어부터 단계적으로 기울임 적용. 초기 레이어의 급격한 기울임으로 인한 충돌·과도한 로봇 움직임 방지.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/12_SolidShell_11.png" align="center" width="32%"></p>
  </div>

   <div class="tab-content" id="arc-content4">
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
          <td><strong>Wipe Distance</strong></td>
          <td>Number</td>
          <td>노즐 와이핑 거리.<br>
              •  양수(+): 외곽 경로 완주 후 시작점부터 추가로 해당 거리만큼 중첩된 경로를 진행.<br>
              •  음수(-): 외곽 경로 종점 전 해당 거리에서 조기 종료.</td>
        </tr>
        <tr>
          <td><strong>Seam Spread</strong></td>
          <td>Number</td>
          <td>Seam이 한 위치에 집중되지 않도록, 전체 레이어의 Seam 시작점을 N 주기로 분산. 레이어마다 경로 파라미터를 1/N씩 이동하며 N 레이어마다 원래 위치로 복귀.<br>
              •  예: N = 4 → 레이어1 = 0.0, 레이어2 = 0.25, 레이어3 = 0.75, 레이어4 = 0.0 반복.</td>
        </tr>
        <tr>
          <td><strong>Seam Offset</strong></td>
          <td>Integer</td>
          <td>모든 레이어의 Seam 위치를 일괄 조정하는 오프셋. Seam Spread로 설정된 레이어 간 위치 관계는 유지한 채 전체를 균일하게 시프팅.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p align="center">  <img src="/assets/images/12_SolidShell_12.png" align="center" width="32%"></p>
  </div>
</div>

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-seamdata" checked>

  <ul class="tab-buttons">
    <li><label for="sm-tab1">Partition</label></li>
  </ul>
  <div class="tab-content" id="sm-content1">
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
          <td><strong>Part Count</strong></td>
          <td>Integer</td>
          <td>모델을 등분하여 분할 슬라이싱하는 파트 수.<br>
              • 1: 모델 전체 슬라이싱. / • N: 모델을 N등분하여 부분 슬라이싱.</td>
        </tr>
        <tr>
          <td><strong>Part Number</strong></td>
          <td>Number</td>
          <td>N등분된 파트 중 슬라이싱할 파트 번호(1~N).</td>
        </tr>
      </tbody>
    </table>
    <p align="center">  <img src="/assets/images/12_SolidShell_20.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Shell ToolPaths** | Shell ToolPaths | 생성된 적층 경로 데이터. |
| **First Part** | Boolean | 현재 Deposition ToolPath가 최하단(첫 번째) 파트인지 여부를 나타내는 플래그. |
| **Shell Contours** | Curve | 생성된 외곽 적층 경로를 연결하는 폴리라인. |