---
title: "Spindle Editor"

layout: single
header:
  teaser: "/assets/images/ToolPointEdit.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: ko
permalink: /robottool/RobotTool-SpindleEditor/

translation_link: /en/robottool/RobotTool-SpindleEditor/
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

* 스핀들 도구의 구성을 돕는 컴포넌트이다. 스핀들의 본체에 해당하는 모델링(Mesh)와 엔드밀의 시작점에 해당하는 지점(Plane)을 입력받는다. 이후 엔드밀의 길이와 직경 값에 따라 TCP값을 내보낸다.
엔드밀이 포함된 모델일 경우와, 포함하지 않은 경우의 모델의 상황을 고려하여 엔드밀 길이와 크기, TCP의 방향을 정할 수 있다.

<p align="center">  <img src="/assets/images/ToolPointEdit.png" align="center" width="32%"></p>

# Input

* ***ool Geometry [Mesh]** : 스핀들 본체 메쉬를 입력한다.
* **Endmill StartPl [Plane]** : 엔드밀이 장착 되는 바닥면을 TCP와 같은 Plane으로 입력한다.

## Built-in Param : Basic Params

* **Length(mm)** : 엔드밀의 길이(mm)를 결정합니다.
* **Radius(mm)** : 엔드밀의 구경 반지름의 길이(mm)를 결정합니다.

<br>

# Output

* **Tool Geometry** : 스핀들 본체 메쉬를 ToolData의 메쉬로 내보낸다.
* **TCP** : 사용자가 설정한 엔드밀의 최종 길이와 구경 끝의 Plane을 TCP로 내보낸다.

<p align="center">  <img src="/assets/images/spindleEditor_3-17-1-2048x1152.png" align="center" width="80%"></p>
