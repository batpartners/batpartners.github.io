---
title: "SlicerFill"

layout: single
header:
  teaser: "/assets/images/SlicerFill.png"

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

* 적층 모델링의 내부 Shell을 채우는 툴패스를 생성하는 컴포넌트이다.

<p align="center">  <img src="/assets/images/SlicerFill.png" align="center" width="32%"></p>

<br>

# Input

* **GertyShellData [DataTree]**: 모델링을 적층 Shell Layer로 변환한 GERTYShellData를 입력한다.

<br>

## Built-in Param | Pattern Params

* **Int-infill Pattern** : Internal infill 툴패스의 채움 패턴을 정의한다. Zigzag, Rectangle, Triangle의 옵션을 선택한다. 기본 값은 Rectangle이다.
* **Ext-infill Pattern** :  Zigzag, Rectangle, Triangle 3가지의 채움 패턴을 정의한다. 기본 값은 Rectangle이다.

<br>

## Built-in Param | Pattern Params

* **Cutting Direction Flip** : 열선 컷팅 경로의 방향을 반대로 변환합니다.
* **Tool Flip** : 열선 툴(엔드이펙터)을 180 회전하도록 합니다.
* **UV Flip** : 입력된 Surface 가 U/V방향 모두에서 Ruled Surface인 형상이라면, 생성할 열선 컷팅 방향을U방향 또는 V방향으로 전환할 수 있습니다.
* **Extension(mm)** : 열선 가공 경로의 진입 방향 및 진출 방향으로, Surface 모델링으로부터, Extension 값만큼 떨어진 거리에 타겟 평면을 추가 생성합니다.
* **Shift Seam** : 입력된 파라미터로부터 생성되는 열선 ToolPath의 시작평면의 원점과 마지막 평면의 원점이 일치하는 경우(즉, ToolPath가 닫힌 경로인 경우), 0.0-1.0사이의 값을 통해 시작위치를 닫힌 경로의 특정 위치로 재조정할수 있습니다.
* **NormalSize** : ToolPaths의 프리뷰 사이즈를 조정합니다.

<br>

# Output

* **E-Start Planes** : 적층 할 주요경로의 첫번째 plane값을 출력한다.
* **Movement Planse** : 적층 할 주요경로 Plane값을 출력한다.
* **E-Stop Planes** : 적층 할 주요경로의 마지막 plane값을 출력한다.
* **E-Stop idx** : 적층 동작 신호를 멈출 Plane index 값을 출력한다.