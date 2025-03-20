---
title: "Drawing"

layout: single
header:
  teaser: "/assets/images/Drawing.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-Drawing/

translation_link: /en/toolpath/ToolPath-Drawing/
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

* 입력되는 커브 데이터 및 관련 파라미터들을 통해, 드로잉 ToolPath를 생성하는 컴포넌트이다. Geometry Input 입력 여부에 따라, 평면 위에서의 드로잉 Toolpath를 생성하거나 Geometry의 형상을 따라 드로잉하는 ToolPath를 생성을 한다.

<p align="center">  <img src="/assets/images/Drawing.png" align="center" width="32%"></p>

<br>

# Input

* **Curves[Curve / List]** : 작성하고자 하는 curve를 선택한다.
* **Base Plane [Plane]** : 드로잉하는 평면의 기준 Plane을 입력한다. Target Plane 은 Base Plane과 같은 xy방향의 평면으로 생성된다.
* **Geometry [Brep/Mesh / Optional]**: 드로잉할 커브의 Geometry를 입력한다. Mesh 또는 Brep을 입력해야만 한다. 이때, Curve는 반드시 Geometry 위에 있어야 한다.

## Built in param | Drawing
  
  * **Tolerance** : 허용오차를 설정한다.
  * **Min Edge(mm)** : Target plane 간 최소 간격을 설정한다. 파라미터 사이 간격의 최소 값을 설정합니다. 이 이하의 파라미터 사이 값을 내뱉지 않는다.
  * **Max Edge(mm)** : Target plane 간 최대 간격을 설정한다. 파라미터 사이 간격의 최대 값을 설정합니다. 이 이상의 파라미터 사이 값을 내뱉지 않는다.
  * **Tilting Weight** : Geometry 위에서 Target Plane을 기울이는 정도를 설정한다. BasePlane의 법선과 Geometry위의 TargetPlane 법선 사이의 기울기를 정규화 한 값(0~1)으로 설정한다.
  * **NormalSize** : ToolPaths의 프리뷰 사이즈를 조정한다.

<br>

# Output

* **Target Planes**: 입력된 조건에 따라 정의된 Drawing ToolPath를 출력한다.
