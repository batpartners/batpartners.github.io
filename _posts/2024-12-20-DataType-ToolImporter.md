---
title: "ToolImporter"

layout: single
header:
  teaser: "/assets/images/toolimporter.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-ToolImporter/

translation_link: /en/datatype/DataType-ToolImporter/
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

* Tool Importer 컴포넌트는 "Get Tool Data" 모드와 "Get Tool Data Input" 모드가 있으며, 전자의 경우 완전한 툴 정보값으로 Robot 컴포넌트의 Tool Data 입력값으로 사용할 수 있다. 후자의 경우 불완전한 툴 정보값으로 Tool Data 컴포넌트의 입력값으로 활용할 수 있다.

<br>

<p align="center">  <img src="/assets/images/toolimporter.png" align="center" width="72%"></p>

<br>


# Built-in Param | Basic Params​

* **Model** : GERTY 저장소에 있는 툴 정보 리스트를 확인하여 선택한 툴 정보를 불러온다.

<br>

# Output

* ToolImporter 컴포넌트는 GET TOOL DATA와 GET TOOL DATA INPUT, 두가지 옵션 모드가 있다. 
* GET TOOL DATA 모드일 경우, 로봇 컴포넌트에 다이렉트로 연결하여 사용이 가능하다.
* GET TOOL DATA INPUT 모드의 경우, 툴 상태를 수정하여 사용이 가능하다.

## 1. Get Tool Data​

* **Tool Data** : 입력된 툴 이름(Name), 툴 모델링(Mesh), 플랜지(Base Plane), TCP, Mass, Centeroid, Inerta값을 Tool Data로 내보낸다.

<figure>
<a href="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_01.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_01.png"></a>
</figure>

## 2. Get Tool Data Input​

* **Name [String]** : 입력한 툴 이름을 내보낸다.
* **Tool Geometry [Mesh]** : 입력한 툴 모델링(Mesh)을 내보낸다.
* **Base Plane [Plane]** : 로봇 6번 플랜지에 장착 되는 툴 바닥면 Plane을 내보낸다.
* **TCP [Plane]** : 툴의 Tool Center Plane 값을 내보낸다.
* **Mass [Double]** : 툴의 Mass 정보를 내보낸다.
* **Centeroid [Generic Number]** : 툴의 무게중심 값을 내보낸다. (ex | 0,0,0 값의 형태)
* **Inertia [Generic Number]** : 툴의 관성모멘트 값을 내보낸다. (ex | 0,0,0 값의 형태)

<figure>
<a href="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_02.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_02.png"></a>
</figure>