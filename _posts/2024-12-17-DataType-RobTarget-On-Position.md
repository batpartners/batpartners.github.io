---
title: "RobTarget On Position"
layout: single
header:
  teaser: "/assets/images/02_RobtargetOnPositioner.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-RobTarget-On-Position/

translation_link: /en/datatype/DataType-RobTarget-On-Position/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:us_outlying_islands: [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* Positioner의 RobTarget(Robot Target)은 로봇의 위치와 추가 축을 정의할 수 있는 컴포넌트로 사용자가 정의한 ToolPath Plane 데이터를 이용해, RobTarget 데이터를 정의한다.
* RobTarget On Positioner은 ABB RAPID Program에서 로봇과 부가축 장비의 동작을 정의하는 데이터 형식이다.
* RobTarget On Positioner은 계획한 이동 경로 위에서, 로봇 TCP(Tool Center Point) 의 위치(Position) 와 방향(Orientation), 그리고 부가축의 각도 정보 등을 포함한다.

  * 참고자료 : ABB RAPID Instructions Documentation (Document ID: 3HAC050917-001)

<p align="center">  <img src="/assets/images/02_RobtargetOnPositioner.png" align="center" width="32%"></p>


# Input

* **GERTY Positioner** : Positioner Data를 입력한다.
* **Name [Text/Item]** : ABB RobTarget의 변수명을 String으로 기재한다.
* **Plane [Plane/DataTree]** : 사용자가 계획한 ToolPath Plane의 데이터를 받는다.
* **Angle [Number/Item]** : TargetPlane의 Normal의 각도를 변경하여 로봇의 자세를 수정할 수 있다.
* **WobjData [Plane]** : Work Object Data로 작업영역에 따라 기준 Plane을 재정할 수 있다.

## Built-in Param | Basic Params​

* **Split Start** : TargetPalne의 첫번째 TargetPlane Data를 분리할 수 있다. 기본으로 False상태를 갖는다.
* **Split Start** : TargetPalne의 마지막 TargetPlane Data를 분리할 수 있다. 기본으로 False상태를 갖는다.

<br>

# Output

* **RobTargets** : 각 영역의 Robtargets의 ProgramData를 출력한다. 이후, 해당 데이터를  Instructions에 연결한다.
