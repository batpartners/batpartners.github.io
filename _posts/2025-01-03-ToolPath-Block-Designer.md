---
title: "Block Designer"

layout: single
header:
  teaser: ""

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-Block-Designer/

translation_link: en/toolpath/ToolPath-Block-Designer/
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

* Unit Block, Wall 형상의 서피스 모델링 등 Block Laying에 필요한 관련 데이터로부터, 계획된 Block Wall의 모델링 및 개별 Block을 배치하는 툴패스로 사용되는 Target Plane을 생성하는 컴포넌트.

<p align="center"><img src="/assets/images/BlockDesigner.png" align="center" width="32%"></p>

# Input

* **Base Plane [Plane]** : Unit Block에 대한 기준 평면을 설정한다. 이는 추후 Gripper TCP가 Orient되는 방향을 특정하는 평면에 해당한다.  
* **Unit Block [Box]** : 사용할 Unit Block 모델링을 Box 형식으로 입력한다.
* **Wall [Brep]** : 벽돌을 적층할 형상의 모델링을 입력한다. 

<p align="center"><img src="/assets/images/blockdesigner-1.png" align="center" width="80%"></p>

## Built-in Param | Basic Params

* **Divide by Distance [Boolean]** : False(기본값)인 경우, 설정한 Horizontal Spacing을 최소 간격 조건으로 적용하여, 각 레이어를 등분하는 지점에 벽돌을 배치한다. True인 경우, 모든 레이어의 Horiaontal Spacing을 설정한 값 그대로 적용하여 Block을 배치한다.
* **Horizontal Spacing** : 인접한 각 Block 사이의 수평 방향 간격을 조절한다.
* **Vertical Spacing**: 인접한 레이어 사이의 수직 방향 간격을 조절한다.

<br>

# Output

* **Block Count [int]**: 적층에 필요한 Block의 총 개수를 출력한다.
* **Target Planes [Plane]** : 배치된 Block의 위치와 방향을 정의하는 Target Plane을 출력한다.  
* **Block Wall [Mesh]** : 생성된 Block Wall의 Mesh Collection을 출력한다.
* **Layers [Curve]** : 적층되는 Block의 기준 레이어 Curve Collection을 출력한다.