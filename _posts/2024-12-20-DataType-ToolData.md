---
title: "ToolData"
layout: single
header:
  teaser: "/assets/images/ToolData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-ToolData/

translation_link: /en/datatype/DataType-ToolData/
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

로봇의 6번축에 장착되는 Tool(엔드이펙터)로, Tool에 대한 정보를 기입하여 로봇에게 전달 및 프리뷰하는 역할을 하는 컴포넌트이다.
<br>

<p align="center">  <img src="/assets/images/ToolData.png" align="center" width="32%"></p>
<br>

# Input

* **Name [Text \ Item]** : Tool의 고유 변수명을 String 을 입력한다.
* **Base Plane[Plane]** : 로봇에 장착되는 Tool의 바닥면에, BasePlane을 설정한다.
* **TCP [Plane]** : 장착된 Tool의 TCP를 대표하는 기준평면을 설정한다.

* Mass , Centroid, Inertia는 먼저 툴이 장착된 ABB 로봇 시스템에서  LoadIdentify Routine을 통해 측정한 결과값으로 입력하도록 한다.

* **Mass [double/string]** : 측정된, ToolLaod를 입력한다. 로봇의 기종에 따라 충돌로 인식하지 않는 최대무게가 다르며, 입력하지 않은 무게 값이 기본 최대무게 값을 넘어갈 경우 충돌체로 인식하여 작동을 멈춘다.
* **Centroid [Text/String]** : 측정된, Tool의 무게중심을 입력한다. 기입형식은 0d,0d,0d 이다.
* **Inertia [Text/String]** : 측정된,  ****로봇의 움직임에 따른 Tool의 관성모멘트 값을 입력한다. 기입형식은 0d,0d,0d 이다.
* **Export [Boolean]** : 사용자는 입력한 툴 정보를 저장하여 사용할 수 있다.


## Built-in Param | Basic Params​

* **Display Colour** : Tool model의 색을 변경한다.

<br>

# Output

* ToolData : 입력한 ToolData를 출력합니다.
<figure>
<a href="https://lh3.google.com/u/0/d/1Wo_d5VYs9iMtBXPgUYlHkjPqOg13DywU=w1912-h920-iv1"><img src="https://lh3.google.com/u/0/d/1Wo_d5VYs9iMtBXPgUYlHkjPqOg13DywU=w1912-h920-iv1"></a>
</figure>
