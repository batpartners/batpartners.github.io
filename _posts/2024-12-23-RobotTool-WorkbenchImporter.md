---
title: "WorkbenchImporter"

layout: single
header:
  teaser: "/assets/images/WorkbenchImporter.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
  
translated: true
lang: ko
permalink: /robottool/RobotTool-WorkbenchImporter/
translation_link: /en/robottool/RobotTool-WorkbenchImporter/
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

* Workbench Exporter를 통해 추출한 툴 정보를 불러오는 컴포넌트이다. BAT 공식 툴을 포함하고 있으며, 사용자가 정의한 툴 정보 또한 불러올 수 있다.
* Workbench Importer 컴포넌트는 “Get Workbench Data” 모드와 “Get Workbench Input Data ” 모드가 있다.
* 전자의 경우 완전한 워크벤치 정보값으로, Workbench컴포넌트를 대신해 사용할 수 있다. 후자의 경우 수정할 수 있는 정보값으로 Workbench 컴포넌트와 결합하여 사용자화 된 데이터로 사용할 수 있다.

<p align="center">  <img src="/assets/images/WorkbenchImporter.png" align="center" width="64%"></p>


# Built-in Param | Basic Params

* **Model** : GERTY 저장소에 있는 툴 정보 리스트를 확인하여 선택한 툴 정보를 불러온다.

# Output

## Get Tool Data - Mode

* **Tool Data** : 입력된 툴 이름(Name), 툴 모델링(Mesh), 플랜지(Base Plane), TCP, Mass, Centeroid, Inerta값을 Tool Data로 내보낸다.

## Get Tool Data Input - Mode

* **Name [String]** : 입력한 툴 이름을 내보낸다.
* **Tool Geometry [Mesh]** : 입력한 툴 모델링(Mesh)을 내보낸다.
* **Base Plane [Plane]** : 로봇 6번 플랜지에 장착 되는 툴 바닥면 Plane을 내보낸다.
* **TCP [Plane]** : 툴의 Tool Center Plane 값을 내보낸다.
* **Mass [Double]** : 툴의 Mass 정보를 내보낸다.
* **Centeroid [Generic Number]** : 툴의 무게중심 값을 내보낸다. (e.g., 0,0,0 값의 형태)
* **Inertia [Generic Number]** : 툴의 관성모멘트 값을 내보낸다. (e.g., 0,0,0 값의 형태)