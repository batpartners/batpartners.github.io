---
title: "Surface Frame"
layout: single
header:
  teaser: "/assets/images/surfaceframe.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: ko
permalink: /utils/Utils-Surface-Frame/

translation_link: /en/utils/Utils-Surface-Frame/
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

* 입력된 Surface와 UV파라미터 값을 통해, Surface위의 특정 위치를 원점으로 하고, 해당 지점에서 접평면(Tangent Plane)을 출력하는 컴포넌트. 

<p align="center">  <img src="/assets/images/surfaceframe.png" align="center" width="32%"></p>

# Input

* **Surface [Surface/Item]** : 접평면을 구할 Surface를 입력한다.

## Built-in Param

* **U-Param [double/Item]** : Surface의 U방향 파라미터를 설정한다.
* **V-Param [double/Item]** : Surface의 V방향 파라미터를 설정한다.

<br>

# Output

* **BasePlane [Plane / item]** : 입력한 조건에 따라, 정의된 접평면(Tangent Plane)을 출력한다. 
