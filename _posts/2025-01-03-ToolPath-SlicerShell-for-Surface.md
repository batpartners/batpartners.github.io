---
title: "Slicer Shell for Surface"
layout: single
header:
  teaser: "/assets/images/SlicerShellforSurface.png"

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

* 열린형 평면의 오브젝트 툴패스를 맞춤형으로 작성할 수 있도록 돕는 컴포넌트이다.
* 툴 패스 평면(Plane)의 간격, 높이, 각도를 설정할 수 있으며 사용자는 각자의 환경에 맞게 작성할 수 있다.


<p align="center">  <img src="/assets/images/SlicerShellforSurface.png" align="center" width="32%"></p>

<br>

# Input

* **Geometry [Geometry]** : Geometry 모델링을 입력한다.
* **Base Plane [Plane]** : 모델링의 기준 평면을 재정의해 입력한다. 기본 값으로 World XY을 받는다.

<br>

## Built-in Param | Basic Slicing Params

* **End Fillet Type**: Flat/Round 옵션이 있다. outlineShell의 옵션을 늘릴경우, 적층될 평면의 끝 마무리형태를 Flat/Roud로 선택한다. 기본값은 Flat.
* **Outline Shells(N)** : 주요경로 바깥쪽으로 Offset한 주요경로 Shell Layer을 추가한다. (N : 정수 값)
* **Layer Wideth(mm)** : 추가한 Outline Shell Layer 사이의 distance를 정의한다.
* **1st layer Shift(mm)** : 첫번째 주요경로 위치를 Layer를 위로 옮겨(Shift) 재정의한다.
* **Layer Height(mm)** : 주요경로 Layer사이의 높이(Height)를 재정의한다.
* **Tolerance** : 주요경로 내 TargetPlane 간격을 재정의한다.
* **Tilting Weight** : NormalVector의 기울기를 해당 layer 모델링의 normal vector와 worldXY 사이 값 사이로 재정의 한다.

<br>

## Built-in Param | Seam Params

* **Wipe Distance(mm)** : 3DP 재료의 컨디션에 맞춰 출력 길이를 기존 주요경로에 맞춰 늘린다.
* **Seam Shifting(t)** : 출력의 시작과 끝지점을 주요경로 내 위치 안에서 옮길 수 있다.

<br>

## Built-in Param | Basic Seam Params

* **Wipe Distance(mm)** : 3DP 재료의 컨디션에 맞춰 출력 길이를 기존 주요경로에 맞춰 늘린다.
* **Seam Spread(N)** : 출력의 시작과 끝지점을 Layer단위 별로 다르게 정의할 수 있다.
* **Seam Shifting(t)** : 출력의 시작과 끝지점을 주요경로 내 위치 안에서 옮길 수 있다.

<br>

## Built-in Param | Division Params

* **Partition** : 출력할 모델링의 주요경로를 정수 값으로 등분하여 보여준다.
* **Order** : 나눈 Partition의 Index값을 호출하여 보여준다.
* **Sub Partition** : 


<br>

# Output

* **Deposition ToolPaths** : 적층 ToolPath Data를 출력한다.
* **Is Bottommost** : 모델링 제일 밑바닥면이 Closed되어있는지 체크한다. (null이 아닐 경우 True)
* **Shell polylines** : 모델링의 각 Layer의 ShellData를 polyline으로 출력한다.