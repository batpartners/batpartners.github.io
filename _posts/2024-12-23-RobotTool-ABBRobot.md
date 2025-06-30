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

## ABB Robots | Robot Linear Control

* **Config Opt** : 로봇의 4번 6번 축의 회전값을 180도만큼 반전시킨다.
* **Align TCP** : Tool TCP의 Z-Axis를 가까운 방향으로 정렬한다.
* **Reset Pose** : 로봇의 기본 자세로 변경한다.

## ABB Robots | Robot Joint Control

* **Robot Axis 1** : 로봇 모델의 1번축을 설정(-180° to 180°)할 수 있습니다.
* **Robot Axis 2** : 로봇 모델의 2번축을 설정(-90° to 150°)할 수 있습니다.
* **Robot Axis 3** : 로봇 모델의 3번축을 설정(-180° to 75°)할 수 있습니다.
* **Robot Axis 4** : 로봇 모델의 4번축을 설정(-400° to 400°)할 수 있습니다.
* **Robot Axis 5** : 로봇 모델의 5번축을 설정(-125° to 120°)할 수 있습니다.
* **Robot Axis 6** : 로봇 모델의 6번축을 설정(-400° to 400°)할 수 있습니다.


## ABB Robots | External Joint Control

* **Robot Axis 1** : 로봇 모델의 1번축을 설정(-180° to 180°)할 수 있습니다.
* **Robot Axis 2** : 로봇 모델의 2번축을 설정(-180° to 180°)할 수 있습니다.



<p align="center">  <img src="/assets/images/ABBrobot_adative_00.png" align="center" width="85%"></p>

# Output

* **GERTY Robot** : 설정한 로봇 정보를 출력한다.
* **Current Pose** : 로봇 모델의 현재 자세에서의 각 축의 각도값을 출력한다.
* **TCP** : 로봇 모델에 장착 된 툴의 TCP정보를 출력한다.
