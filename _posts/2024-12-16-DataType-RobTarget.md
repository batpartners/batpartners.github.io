---
title: "RobTarget"
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/Robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/Robtarget.png" align="center" width="32%"></p>


# Description

Positioner의 RobTarget(Robot Target)은 로봇의 위치와 추가 축을 정의할 수 있는 컴포넌트로 사용자가 정의한 ToolPath Plane 데이터를 이용해, RobTarget 데이터를 정의한다.

RobTarget On Positioner은 ABB RAPID Program에서 로봇과 부가축 장비의 동작을 정의하는 데이터 형식이다.

RobTarget On Positioner은 계획한 이동 경로 위에서, 로봇 TCP(Tool Center Point) 의 위치(Position) 와 방향(Orientation), 그리고 부가축의 각도 정보 등을 포함한다.

참고자료 : ABB RAPID Instructions Documentation (Document ID: 3HAC050917-001)

# Input

* **Name [Text / Item]** : 생성할 RobTarget의 기본 변수명을 입력함. (기본값: “P”) <br> 컴포넌트는 입력된 Plane 데이터 개수에 따라, 생성되는 RobTarget 이름을 “변수명 0, 변수명 1, 변수명 2, …“ 과 같은 방식으로 할당함.
* **Plane [Plane/DataTree]** : ABB RobTarget 형식으로 변환할 Plane을 입력함.(기본값: WorldXY) 
* **Robot_Base [Plane/Item]** : ABB RobTarget 형식으로 변환할 Plane을 입력함. 
* **Tilting Weight [Number/Item]** : ABB RobTarget 형식으로 변환할 Plane을 입력함
* **Angle [Number/Item]** : 입력된 Plane을 일괄적으로 Angle(Degree) 값만큼 회전시켜, RobTarget에 적용함.
* **WobjData [WObjData/Item]** : ABB WorkObject (작업 좌표계)객체를 입력. 변환되는 RobTarget을 입력된 WobjData의 User Frame 기준 상대 좌표로 정의함.
* **Chaining [Boolean/Item]** : True인 경우, 입력되는 WobjData와 RobTarget간의 관계를 강제로 유지. 즉, WobjData가 입력된 상태에서 Workobject를 정의하는 UserFrame을 이동/회전하는 경우, 출력되는 RobTarget도 WobjData와의 관계에 따라 이동/회전됨. 

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2024/07/Split-Robtargets-14-1.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/Split-Robtargets-14-1.png"></a>
</figure>

## Built-in Param : Basic Params​
* **Split Start** : (생성된 RobTarget이 2개 이상으로 구성된 List / DataTree인 경우) 별도 Output node를 통해, 첫 번째 RobTarget을 분리하여 내보냄. 
* **Split Start** : (생성된 RobTarget이 2개 이상으로 구성된 List / DataTree인 경우) 별도 Output node를 통해, 마지막 RobTarget을 분리하여 내보냄. 

<br>

# Output

* **RobTargets** : 각 영역의 Robtargets의 ProgramData를 출력한다. 이후, 해당 데이터를  Instructions에 연결한다.
