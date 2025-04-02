---
title: "RobTarget On Position(Static)"
layout: single
header:
  teaser: "/assets/images/positioner_static.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-RobTarget-On-Position_Static/

translation_link: /en/datatype/DataType-RobTarget-On-Position_Static/

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

* Positioner의 RobTarget(Robot Target)은 로봇의 위치와 추가 축을 정의할 수 있는 컴포넌트로 사용자가 정의한 ToolPath Plane 데이터를 이용해, RobTarget 데이터를 정의한다.
* RobTarget On Positioner은 ABB RAPID Program에서 로봇과 부가축 장비의 동작을 정의하는 데이터 형식이다.
* RobTarget On Positioner은 계획한 이동 경로 위에서, 로봇 TCP(Tool Center Point) 의 위치(Position) 와 방향(Orientation), 그리고 부가축의 각도 정보 등을 포함한다.

  * 참고자료 : ABB RAPID Instructions Documentation (Document ID: 3HAC050917-001)

<p align="center">  <img src="/assets/images/positioner_static.png" align="center" width="32%"></p>


# Input

* **Positioner** : Positioner Data를 입력한다.
* **Name [Text/Item]** : ABB RobTarget의 변수명을 String으로 기재한다.
* **Target Plane [Plane/DataTree]** : 사용자가 계획한 ToolPath Plane의 데이터를 받는다.
* **Base Plane [Plane/DataTree]** : Target plane의 기준이 되는 Base Plane의 데이터를 입력 받는다.
* **Reference Plane [Plane/DataTree]** : Target Plane의 각 브랜치 당 기준이 되는 Plane 값을 입력한다.
* **Angle [Number/Item]** : TargetPlane의 Normal의 각도를 변경하여 로봇의 자세를 수정할 수 있다.
* **WobjData [Plane]** : Work Object Data로 작업영역에 따라 기준 Plane을 재정할 수 있다.

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Static)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## Built-in Param | Basic Params​

* **Split Start** : TargetPalne의 첫번째 TargetPlane Data를 분리할 수 있다. 기본으로 False상태를 갖는다.
* **Split Start** : TargetPalne의 마지막 TargetPlane Data를 분리할 수 있다. 기본으로 False상태를 갖는다.

<br>

# Output

* **RobTargets** : 각 영역의 Robtargets의 ProgramData를 출력한다. 이후, 해당 데이터를  Instructions에 연결한다.

<p align="center"> 
<video src="/assets/images/Static_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>