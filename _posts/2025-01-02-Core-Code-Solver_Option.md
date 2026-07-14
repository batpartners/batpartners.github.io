---
title: "Code Solver"

layout: single
header:
  teaser: "/assets/images/codesolver.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: ko
permalink: /core/Core-Code-Solver/Core-Code-Solver_Option/

translation_link: /en/core/Core-Code-Solver/Core-Code-Solver_Option/
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

정의된 로봇 모션으로부터 RAPID 프로그램 생성 및 네트워크에 연결된 ABB 컨트롤러로 전송 및 업로드.

<p align="center"><img src="/assets/images/0_CodeSolver_1.png" align="center" width="32%"></p>

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

  /* 💡 1번째 탭 그룹 제어 (WeldData 변수명 개요) */
  #tab1:checked ~ .tab-buttons label[for="tab1"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab1:checked ~ #content1 { display: block; }

  /* 💡 2번째 탭 그룹 제어 (Weld ArcData 세트) */
  #tab2:checked ~ .tab-buttons label[for="tab2"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab2:checked ~ #content2 { display: block; }

  /* 💡 3번째 탭 그룹 제어 (Weld Param 세트) */
  #tab6:checked ~ .tab-buttons label[for="tab6"] {
    background: #fff; color: #e53935; border-bottom: 1px solid #fff; padding-bottom: 13px; margin-bottom: -1px; z-index: 2;
  }
  #tab6:checked ~ #content6 { display: block; }

  /* 탭 전환시 부드러운 페이드인 애니메이션 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **GERTY Code** | GERTY Code | GERTY Code |
| **ABB Controller** | ABB Controller | 이 PC에 연결된 ABB 컨트롤러 (선택) |

## | 필수 파라미터 (Required Parameter)

<div class="tabs-container">
  <input type="radio" id="sm-tab1" name="gh-tabs-codesolver" checked>
  <ul class="tab-buttons">
    <li><label for="sm-tab1">Program Settings</label></li>
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
          <td><strong>Program Folder</strong></td>
          <td>String</td>
          <td>로봇 프로그램이 저장될 디렉토리 경로</td>
        </tr>
        <tr>
          <td><strong>Program Name</strong></td>
          <td>String</td>
          <td>생성될 로봇 프로그램의 이름</td>
        </tr>
        <tr>
          <td><strong>Enable Socket</strong></td>
          <td>Toggle</td>
          <td>RAPID 코드 내에 소켓 통신용 모듈로 프로그램 내보내기</td>
        </tr>      
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_20.png" align="center" width="32%"></p>
  </div>
</div>


<div class="tabs-container">
  <input type="radio" id="tab2" name="gh-tabs-codesolver2" checked>
  <ul class="tab-buttons">
    <li><label for="tab2">Export</label></li>
  </ul>
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
          <td><strong>Auto Load</strong></td>
          <td>Toggle</td>
          <td>코드 생성 후 자동으로 연결된 로봇 컨트롤러에 프로그램 로드</td>
        </tr>
        <tr>
          <td><strong>Export</strong></td>
          <td>Button</td>
          <td>설정된 옵션에 따라 Rapid 코드를 생성 및 지정된 디렉토리에 저장</td>
        </tr>
        <tr>
          <td><strong>Cancel</strong></td>
          <td>Button</td>
          <td>현재 진행 중인 코드 생성 및 내보내기 작업 취소</td>
        </tr>
        <tr>
          <td><strong>Export Log</strong></td>
          <td>Panel</td>
          <td>직전에 저장된 RAPID 프로그램 파일 정보. 파일 경로 및 내보내기 결과 표시.<br>
              Local path / Controller path / Contents</td>
        </tr>        
        <tr>
          <td><strong>Open Code in Editor</strong></td>
          <td>Button</td>
          <td>생성된 RAPID 코드를 VSCode로 열어 편집. VSCode 미설치 시 메모장으로 자동 실행.</td>
        </tr>                        
      </tbody>
    </table>
<p align="center"><img src="/assets/images/0_CodeSolver_21.png" align="center" width="32%"></p>
  </div>
</div>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **SocketBundle** | SocketBundle | 소켓 클라이언트와 인스트럭션 패킷 리스트 데이터 번들 |
