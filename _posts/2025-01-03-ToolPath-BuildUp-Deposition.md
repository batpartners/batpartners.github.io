---
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath
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

* 적층 데이터를 분석하여 일반 적층 툴패스의 작성을 돕는 컴포넌트이다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png" align="center" width="32%"></p>

<br>

# Input

* **Home Pos [Plane/Optional]** : 적층 시작 전 Home position에 해당하는 Plane을 입력한다. 기본 값으로 World XY을 받는다.
* **Deposition ToolPaths [DepositionToolPath \ List]** : DepositionToolPath Data를 받는다.
* **Pre-Extrusion Curve [Curve/Optional]** : 노즐 클리닝을 위해, 미리 압출할 형상의  Curve 데이터를 받는다.
* **Is Bottommost [Boolean]** : 바닥면부터 시작되는 적층 툴패스 여부를 확인한다.

<br>

# Output

* **E-Start Planes** : 압출이 시작되는 주요경로의 첫번째 plane값을 출력한다.
* **Movement Planse** : 압출이 진행되는 주요경로 Plane값을 출력한다.
* **E-Stop Planes** : 압출이 멈추는 주요경로 위치의 plane값을 출력한다.
* **E-Stop idx** : E-Stop Plane의 index를 출력한다.