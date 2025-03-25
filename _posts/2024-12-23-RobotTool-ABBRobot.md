---
title: "ABBRobot"

layout: single
header:
  teaser: "/assets/images/ABBRobot.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: ko
permalink: /robottool/RobotTool-ABBRobot/

translation_link: /en/robottool/RobotTool-ABBRobot/
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

* ABB 산업용 로봇을 관리하는 컴포넌트이다. 사용자는 ABB 스물다섯 기종 중, 해당되는 산업용 로봇을 선택하여 시뮬레이션에 적용할 수 있다.

<p align="center">  <img src="/assets/images/ABBRobot.png" align="center" width="32%"></p>

# Input

* **Robot Base [Optional]** : 로봇의 OrientPlane으로, 기본값으로 World Base Plane을 갖는다.
* **Tool Data** : ToolData의 입력값을 갖는다.
* **Positioner [Optional]** : 부가축 로봇 데이터를 연결한다.

## ABB Robots | Built-in Params

* **Model** : ABB 산업용 로봇 모델을 선택한다.
* **Display Colour** : 로봇 색상을 변경한다.

<p align="center">  <img src="/assets/images/ABBrobot_adative_00.png" align="center" width="85%"></p>

# Output

* **GERTY Robot** : 설정한 로봇 정보를 출력한다.
* **Joint Planes** : 로봇 축 정보를 출력한다.
* **Mounting Plane** : ABB로봇의 6번축 또는 툴 데이터의 Base Plane에 대한 위치값을 출력한다.
* **Tool Center Plane** : ABB로봇에 장착 된 툴의 TCP정보를 출력한다.
