---
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png"

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

* 로봇 컴포넌트로부터 제어할 ABB로봇, 포지셔너 등 제원 정보를 포함하는 GERTY Core 컴포넌트이다. RobTarget과 Robot Instruction의 데이터를 읽고 ProgramData로 출력한다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png" align="center" width="32%"></p>

<br>

# Input

* **GERTY Robot [GERTY Robot \ Item]** : Robot 컴포넌트로부터 제어할 ABB 로봇, 포지셔너 등 제원 정보를 포함하는, GERTY Robot 객체를 입력한다.

* **ProgramData [ABB DataType \ List]** : 현재 템플릿에서 생성한 Instruction에 활용되는, 모든 ABB_DataType을 List 형식으로 입력한다. ProgramData는 각 Instruction 에서 호출되는 데이터로, 순서는 크게 중요하지 않다.

* **Instructions [ABB Instructions \ List]** : 템플릿에서 생성한 Motion/Action Instruction 을 List형식으로 입력한다. 이때 Instruction은 RAPID PROGRAM의 Main Procedure 부분의 코드작성과 관련된다. 실행시 PP(Program Pointer)에 의해 직접 스캔되는 명령어에 해당되기 때문에, 로봇의 동작 순서대로 입력해야 한다.

* **Sub_PROC. [ABB Procedure \ Item]** : Main Procedure에서 반복적으로 사용되는 Instruction 묶음을 Sub Procedure Module 형식으로 정의/입력할 수 있다.

* **Config Option (Cfx =1) [Switch \ Item]** : True 입력시, RobTarget Collection으로 부터 연속 동작에 대한 역기구학 연산 과정에서 도출되는 ConfigData의 Cfx 값에 1을 적용한다. 이를통해 같은 동작에서 5번 축 각도 부호를 반대로 취하도록 제어할 수 있다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/core_1.png" align="center" width="72%"></p>

* **Ignore Errors [Switch \ Item]** : True 입력시, 발생하는 동작상 에러(Config Error, Singularity, Out of reach, Over angle)를 모두 무시한다. 동작상 Error가 하나라도 발생하면, Offline Code Solver 컴포넌트에서 최종 코드 저장이 진행되지 않기 때문에, 사용자의 판단하에, 무시할수 있는 수준의 Error인 경우, Ignore Errors 를 활성화 시켜 코드를 저장할수 있다.  

<br>

# Output

* **GERTY Solver [GERTY Solver \ Item]** : 입력된 조건에 따라, 연산된 GERTY Solver 객체를 출력한다. GERTY Solver는 ToolPath를 구성하는 각 RobTarget 위치에서, 로봇 및 포지셔너 장비의 회전축 및 회전각 정보를 포함한다.

* **GERTY Code [GERTY Code \ Item]** : 입력된 조건에 따라, 연산된 GERTY Code 객체를 출력한다. GERTY Code는 입력된 ProgramData의 선언 및 할당, Instruction 코드의 순차적인 작성 정보를 포함한다.