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
| *User Frame* | Plane | WobjData의 사용자 프레임 (uframe)으로 사용되는 평면 |
| *Object Frame* | Plane | WobjData의 객체 프레임(oframe)으로 사용되는 평면 |
| *Override Wobj* | Plane | 입력된 워크오브젝트 데이터로 컴포넌트 출력을 덮어씀. (선택) 연결 시 다른 인풋값과 관계없이 이 데이터가 우선 적용. |

## 옵션 변경(Felxible Option)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Target Plane이 고정된 위치의 기준 평면으로 재정의 |
| *Movable WobjData* | - | Target Plane이 이동 가능한 위치의 기준 평면으로 재정의 |


# | 출력(Output)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **WobjData** | WobjData | 정의된 ABB WobjData 출력 |
