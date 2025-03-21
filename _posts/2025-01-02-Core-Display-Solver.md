---
title: "Display Solver"

layout: single
header:
  teaser: "/assets/images/displaysolver.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: ko
permalink: /core/Core-Display-Solver/

translation_link: /en/core/Core-Display-Solver/
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

* DisplaySolver는  Robot 컴포넌트 및 GERTY Core 컴포넌트로부터 입력된 Input 데이터에 따라 라이노 뷰포트 상에, 로봇의 연속 동작을 프리뷰하는 컴포넌트.  

<p align="center">  <img src="/assets/images/displaysolver.png" align="center" width="32%"></p>

# Input

* **GERTY Robot [GERTY Robot/Item]** : 제어할 로봇기종에 따라 설정된, Robot 컴포넌트의 결과값을 입력한다.
* **GERTY Solver [GERTY Solver/Item]** : GERTY Core 컴포넌트가 출력하는 GERTY Solver 데이터를 입력한다. 

## Built-in Param | Basic Params

* **Simulation Pop-up** : On 설정하여 로봇의 동작 시뮬레이션을 조작할 수 있는 Popup을 실행한다. 

<p align="center">  <img src="/assets/images/popup-info.png" align="center" width="80%"></p>

* **Simulaition Pop-up interface** :
<p align="center">  <img src="/assets/images/jointmode-robot-01.png" align="center" width="80%"></p>

1) **Target Info**: 뷰포트에 Preview되는 로봇 동작의 RobTarget 정보를 보여주는 패널.<br>
* **Input [TextBox]** : 시뮬레이션 상에서 현재 로봇의 동작에 해당하는, Robtarget의 Index를 보여준다. Index를 직접 타이핑하여, 특정 RobTarget에서의  동작을 곧바로 프리뷰하는 기능을 포함한다.
* **RobTarget [TextBox]** : 시뮬레이션 상에서 현재 로봇의 동작에 해당하는, Robtarget의 변수명를 보여준다. 변수명을 직접 타이핑하여, 특정 RobTarget에서의  동작을 곧바로 프리뷰하는 기능을 포함한다.
* **Joint Mode [Button]** : 현재 로봇의 동작에서, 로봇 및 포지셔너 각 축의 각도(Angle) 값을 보여준다.
* **Linear Mode [Button]** : 설정된 Workobject를 기준으로, 현재 로봇의 동작을 정의하는, Target Plane의 위치(Coordinate)와 방향(Orient/Quaternion)값을 보여준다.

<p align="center">  <img src="/assets/images/linearmode_example.png" align="center" width="80%"></p>

2) **Simulation**: 로봇의 연속동작을 시뮬레이션하기 위한 슬라이더 인터페이스 패널.<br>
* **Simulation [Slider]** : 마우스 드래그 또는 플레이어 버튼 인터페이스로 메인 슬라이더 값을 조절하여, 계획한 로봇의 동작을 시뮬레이션 할 수 있다.
* **Step Backward/Step Forward [Button]** : 버튼을 클릭하여, 현재 RobTarget 동작으로부터 직전/직후 RobTarget의 동작을 프리뷰한다.
* **Play [Button]** : 버튼을 클릭하여, 현재 RobTarget  동작으로부터 이후의 연속 동작을 시뮬레이션 한다. 
* **Stop [Button]** : 시뮬레이션 Play가 활성화된 상태에서, 한번 클릭하면 시뮬레이션을 일시 정지한다. 더블 클릭하면 메인 슬라이더를 시작 지점으로 초기화한다. 
* **Speed [Slider]** : Play 버튼 작동시, 시뮬레이션 진행 속도를 설정한다.
* **Error Messege** : 입력된 툴패스를 움직이는 과정에서, 동작 에러가 예상되는 경우, Simulation 패널 우측 상단에 관련 메시지를 표시한다. 시뮬레이션 과정에서 확인할 수 있는 동작 에러는 `Singularity / Out of Reach / Over Angle / Configuration`의 4가지 이다. 


3) **Preview Options**: 시뮬레이션 시 RobTarget 및 TCP Tracing 등을 보일지 결정하는 옵션값을 설정한다. <br>
* **Preview All Targets [Checkbox]** : 동작 시뮬레이션 진행률에 따라서, 입력된RobTarget들을 함께 Preview한다.
* **Enable TCP Tracing [Checkbox]** : 동작 시뮬레이션 진행률에 따라서, TCP 움직임의 트레이싱 커브를 함께 Preview한다.
* **Range [Slider]** : 트레이싱 범위를 설정한다. 
* **Color [Button]** : 트레이싱 커브의 색을 설정한다.

<br>

# Output

* **Tool Center Plane [Plane/Item]** : 현재 프리뷰되는 로봇의 동작에서 TCP(Tool Center Point)를 평면 객체로 출력한다.
