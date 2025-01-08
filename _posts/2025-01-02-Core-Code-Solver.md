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

* Code Solver는 GERTY Core에서 출력한 Robot ProgramData를 분석하여 출력하는 컴포넌트이다. 사용자 지정 경로에 파일명과 함께 내보낸다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png" align="center" width="32%"></p>

<br>

# Input

* **GERTY Code [Data]** : 이전 결과값의 주요경로 TargetPalnes를 연결한다.
* **PC Dir [File Path]**: 사용자 PC의 로컬 파일 주소 값을 입력한다. 
* **File Name [String]** : 내보내는 GERTY Code의 파일 이름을 입력한다. 
* **Export [Button]** : Press Button. 

<br>

## Built-in Param | Basic Params

* **Transferring Mode** : 컨트롤러 연결 모드를 선택한다. 
* **Generation Mode** : 크게 일반(Normal)모드와 로드언로드((Un)Load)모드로 나뉠 수 있다. 일반 모드의 경우, 출력할 툴패스 데이터를 수동으로 넘겨 로봇을 운용하는 것이고, 로드 언로드 모드의 경우 다음 툴패스를 인식하여 오토로 출력한다.

<br>

# Output

* **ProgramData Code** : 로봇이 동작하는 코드 프로그램 코드이며, RobtargetData이다.
* **Instruction Code** : 로봇의 모션 코드이며, 움직임의 설정값과 인덱스를 확인 할 수 있다.
* **Sub_Proc. Code** : 부가적인 호출 데이터를 확인 할 수 있다. 