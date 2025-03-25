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

* **WorkBenchMesh** : 사용자가 정의한 혹은 기존 기종의 workbench 모델링 Mesh를 받는다.
* **WorkBenchBasePl** : 해당 workbench 모델링의 Base Plane을 잡는다.
* **WorkBenchFCPl** : workbench Flange Center Plane을 잡는다.
* **Export [Boolean]** : 사용자는 해당 워크벤치를 저장할 수 있다.

## Built-in Param : Basic Params

* **Display Colour** : 로봇의 모델의 색을 설정한다.
* **Objs Colour** : Object의 색을 설정한한다

<br>

# Output

* **GERTY Workbench**: 사용자 정의 된 Workbench 정보를 내보낸낸다.

