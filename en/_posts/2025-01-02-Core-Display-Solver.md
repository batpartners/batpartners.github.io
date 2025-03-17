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
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---
# Description

* DisplaySolver는  Robot 컴포넌트 및 GERTY Core 컴포넌트로부터 입력된 Input 데이터에 따라 라이노 뷰포트 상에, 로봇의 연속 동작을 프리뷰하는 컴포넌트.  

<p align="center">  <img src="/assets/images/displaysolver.png" align="center" width="32%"></p>

<br>

# Input

* **GERTY Robot [GERTY Robot / Item]** : 제어할 로봇기종에 따라 설정된, Robot 컴포넌트의 결과값을 입력한다.
* **GERTY Solver [GERTY Solver / Item]** : GERTY Core 컴포넌트가 출력하는 GERTY Solver 데이터를 입력한다. 

<br>

## Built-in Param | Basic Params

* **Simulation Pop-up** : On 설정하여 로봇의 동작 시뮬레이션을 조작할 수 있는 Popup을 실행한다. 
* **Simulaition Pop-up interface** :

  1) **Target Info**: 뷰포트에 Preview되는 로봇 동작의 RobTarget 정보를 보여주는 패널.
    - Input [TextBox] :
        시뮬레이션 상에서 현재 로봇의 동작에 해당하는, Robtarget의 Index를 보여준다. Index를 직접 타이핑하여, 특정 RobTarget에서의  동작을 곧바로 프리뷰하는 기능을 포함한다.
    - RobTarget [TextBox] :
        시뮬레이션 상에서 현재 로봇의 동작에 해당하는, Robtarget의 변수명를 보여준다. 변수명을 직접 타이핑하여, 특정 RobTarget에서의  동작을 곧바로 프리뷰하는 기능을 포함한다.
    - Joint Mode [Button] :
        현재 로봇의 동작에서, 로봇 및 포지셔너 각 축의 각도(Angle) 값을 보여준다.
    - Linear Mode [Button] :
        설정된 Workobject를 기준으로, 현재 로봇의 동작을 정의하는, Target Plane의 위치(Coordinate)와 방향(Orient/Quaternion)값을 보여준다.
  
  2) **Simulation**: 로봇의 연속동작을 시뮬레이션하기 위한 슬라이더 인터페이스 패널.
    - Simulation [Slider] :
        마우스 드래그 또는 플레이어 버튼 인터페이스로 메인 슬라이더 값을 조절하여, 계획한 로봇의 동작을 시뮬레이션 할 수 있다.
    - Step Backward / Step Forward [Button] :
        버튼을 클릭하여, 현재 RobTarget 동작으로부터 직전/직후 RobTarget의 동작을 프리뷰한다.
    - Play [Button] :
        버튼을 클릭하여, 현재 RobTarget  동작으로부터 이후의 연속 동작을 시뮬레이션 한다. 
    - Stop [Button] :
        시뮬레이션 Play가 활성화된 상태에서, 한번 클릭하면 시뮬레이션을 일시 정지한다. 더블 클릭하면 메인 슬라이더를 시작 지점으로 초기화한다. 
    - Speed [Slider] :
        Play 버튼 작동시, 시뮬레이션 진행 속도를 설정한다.
    - Error Messege : 
        입력된 툴패스를 움직이는 과정에서, 동작 에러가 예상되는 경우, Simulation 패널 우측 상단에 관련 메시지를 표시한다. 시뮬레이션 과정에서 확인할 수 있는 동작 에러는          Singularity / Out of Reach / Over Angle / Configuration의 4가지 이다. 

<br>

# Output

* **ProgramData Code** : 로봇이 동작하는 코드 프로그램 코드이며, RobtargetData이다.
* **Instruction Code** : 로봇의 모션 코드이며, 움직임의 설정값과 인덱스를 확인 할 수 있다.
* **Sub_Proc. Code** : 부가적인 호출 데이터를 확인 할 수 있다. 