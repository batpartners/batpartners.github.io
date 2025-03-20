---
title: "HotWireToolPathCrvs"

layout: single
header:
  teaser: "/assets/images/HotwireToolpathfromCrvs.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-HotWireToolPathFromCrvs/

translation_link: /en/toolpath/ToolPath-HotWireToolPathFromCrvs/
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

* 사용자 모델링의 커브들을 읽어, 열선 툴 패스로 변환하는 컴포넌트이다.

<p align="center">  <img src="/assets/images/HotwireToolpathfromCrvs.png" align="center" width="32%"></p>

<br>

# Input

* **CurveA [Curve]** : 첫번째 Curve를 연결합니다.
* **CurveB [Curve]** : 두번째 Curve를 연결합니다.
* **Target Count [Number / Optional]**: 열선 경로 수를 결정합니다.
* **Parameter [List / Optional]** : Ribcurve 위 타겟의 원점 위치를 결정합니다.
* **Wrist Object [Geometry / Optional]** : point, curve, line의 입력값을 통해 열선의 경로의 법선의 방향을 재정의 할 수 있습니다.

## Built-in Param | Hotwire Crvs

* **Cutting Direction Flip** : 열선 컷팅 경로 방향을 역방향으로 변환합니다.
* **Tool Flip** : 열선 툴(엔드이펙터)이 장착 된 6번 축이 진행방향의 180 회전합니다.
* **Extension(mm)** : 열선의 진 입출의 직전의 직선 경로의 거리를 결정합니다.
* **Shift Seam** : 읽어들인 평면의 열선 컷팅 순서를 재정의합니다.
* **NormalSize** : 법선(Zaxis, Normal vector)의 디스플레이 사이즈를 결정합니다.

<br>

# Output

* **Target Planes** : 입력된 조건에 따라 정의된 열선 컷팅 툴패스를 출력합니다.
* **RibCurves** : 열선 경로를 결정 짓는 Ruled Surface의 단위 선분입니다.