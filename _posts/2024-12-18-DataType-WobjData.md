---
title: "WobjData"
layout: single
header:
  teaser: "/assets/images/04_WobjData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WobjData/

translation_link: /en/datatype/DataType-WobjData/

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

ABB 워크오브젝트(워크피스 좌표계) 정의. 월드 좌표계에서 작업대의 로컬 좌표계를 정의하는 사용자 프레임(uframe) 및 오브젝트 프레임(oframe) 지정. 우클릭 컨텍스트 메뉴로 Movable(외부축에 의해 움직이는 워크오브젝트), Fixed(고정된 일반 워크오브젝트) 두 모드 전환 지원.

<p align="center">  <img src="/assets/images/2_WobjData.png" align="center" width="32%"></p>


# | 입력(Input)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| *Name* | Text | UserFrame의 변수명을 입력한다. |
| *UserFrame* | Plane | Base Plane을 설정한다. |

## 옵션 변경(Felxible Option)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Target Plane이 고정된 위치의 기준 평면으로 재정의된다. |
| *Movable WobjData* | - | Target Plane이 이동 가능한 위치의 기준 평면으로 재정의된다. |

<br>
<p align="center">  <img src="/assets/images/wobj_movable.png" align="center" width="45%"></p>

# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WobjData** | WobjData | 정의된 WobjData를 출력한다. |
