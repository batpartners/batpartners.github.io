---
title: "Positioner"
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/Positioner-1.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
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

ABB Positioner 기종 모델링을 사용자 정의할 수 있는 컴포넌트입니다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/Positioner-1.png" align="center" width="32%"></p>

# Input

* **Name [Text]** : Positioner 고유이름을 설정할 수 있습니다. 설정하지 않을 경우, 기본값으로 STN1으로 출력됩니다.
* **PositionerFCPL [Plane]**: Positioner Flange Center Plane의 약자로, 포지셔너 플랜지의 센터 플래인을 넣을 수 있습니다.
* **WorkBench [WorkBench Data]** : Positioner의 workbench 모델링을 넣을 수 있습니다.

## Built-in Param : Preview Params​

* **Model** : 포지셔너 모델을 지정합니다.
* **Display Colour** : 포지셔너 모델의 색을 재정의 합니다.

## Built-in Param : Vector Params​

* **Enable Arm** : 포지셔너의 자세를 고정시킬 수 있습니다. 기본설정은 포지셔너 암 고정이 해제 되어있습니다.
* **Approaching Dir.** : 포지셔너에 접근하는 경로의 방향을 재정의합니다.
* **TCP Dir.** : 포지셔너에 접근하는 TCP의 방향을 재정의 재정의 합니다.

# Output

* **GERTY Positioner** : 사용자 정의 된 포지셔너의 정보를 내보냅니다.
* **Arm** : 로봇 암 현재 자세의 좌표값을 내보냅니다.
* **Plate** :  로봇 작업대의 현재 Plane의 좌표값을 내보냅니다.
