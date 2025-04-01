---
title: "CreateWorkbench"

layout: single
header:
  teaser: "/assets/images/Workbench.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: ko
permalink: /robottool/RobotTool-CreateWorkbench/

translation_link: /en/robottool/RobotTool-CreateWorkbench/
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

* Work Bench 모델링을 사용자 정의할 수 있는 컴포넌트이다.

<p align="center">  <img src="/assets/images/Workbench.png" align="center" width="32%"></p>

# Input

* **WorkBenchMesh[Mesh]** : workbench 모델링 메쉬를 받는다.
* **WorkBenchBasePl[Plane]** : 해당 workbench 모델링의 Base Plane을 잡는다.
* **WorkBenchFCPl[Plane]** : workbench Flange Center Plane을 잡는다.
* **Export [Boolean]** : 사용자는 해당 워크벤치를 저장할 수 있다.

## Built-in Param : Basic Params

* **Display Colour** : 시뮬레이션 로봇의 색상을 선택한다.
* **Objs Colour** : Object의 색을 선정한다.

<br>

# Output

* **GERTY Workbench**: 사용자 정의 된 Workbench 정보를 내보낸낸다.