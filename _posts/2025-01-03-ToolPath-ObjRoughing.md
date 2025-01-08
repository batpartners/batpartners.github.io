---
title: "ObjRoughing"

layout: single
header:
  teaser: "/assets/images/ObjRoughing.png"

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

* 1차 밀링 단계에서의 컷팅 툴 패스를 제공하는 컴포넌트이다.

<p align="center">  <img src="/assets/images/ObjRoughing.png" align="center" width="32%"></p>

<br>

# Input

* **Geometry**: Roughing을 통해 깎을 볼륨을 솔리드(Brep) 또는 메시(Mesh) 타입으로 입력한다.
* **Base Plane** : 엔드밀 진입 방향(= Contour 방향), Target Orientation, Toolpath 시작 위치, 가공면 충돌 회피 높이 등등을 결정하는 기준 평면을 입력한다.

<br>

## Built-in Param | Basic Params

* **Cutting Direction [Boolean]**: 상향(True)/하향(False) 절삭을 선택한다.
* **Setback** : Roughing Toolpath 최외곽을 최종 가공 형상면으로 부터 이격하는 정도로, 반드시 엔드밀 직경의 반보다 크게 입력한다. (Setback > 엔드밀 직경 *1/2) 
* **Stepover**: 수평방향으로 한번에 깎이는 정도로 엔드밀 직경의 절반 값보다 작은 값으로 산정하여 입력한다. (Stepover <= 엔드밀 직경 * 1/2)
* **Stepdown**: 수직방향으로 한번에 드릴링하는 정도로 엔드밀 날장의 절반 값보다 작은 값으로 산정하여 입력한다. ( Stepdown <= 엔드밀 날장 * 1/2 )
* **Shift**: Stepdown 레이어 전체의 수직방향 이격한다.
* **Tolerance**: Toolpath 해상도다.

<br>

# Output

* **Targets Plane** : 이동 및 회피 경로의 결과를 짝수 브랜치 DataTree로 변환한다.
* **ToolPath** : 이동 및 회피 경로의 결과를 짝수 브랜치 DataTree로 변환한다.