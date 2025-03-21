---
title: "Insert Items"
layout: single
header:
  teaser: "/assets/images/insertTree.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: ko
permalink: /utils/Utils-InsertItems/

translation_link: /en/utils/Utils-InsertItems/
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

* 입력된 DataTree의 각 Branch에 Item또는 Item Collection을 삽입합니다.

<p align="center">  <img src="/assets/images/insertTree.png" align="center" width="32%"></p>


# Input

* **Tree [Generic/DataTree]** : Item또는 Item Collection을 삽입할 DataTree를 입력합니다.
* **Items [Generic/List]** : 삽입할 Item 또는 Item Collection을 입력합니다.
* **indices [int/List]** : 각 Branch 내에 Item 또는 Item Collection을 삽입할 인덱스를 입력합니다.

<br>

# Output

* **Tree [Generic/DataTree]** : 입력된 조건에 따라, 생성된 DataTree를 출력합니다. 

<br>

# How To Use

* Item 또는 Item index를 삽입할 위치에 해당하는 indices 값이 branch 내부에 삽입가능한 index 범위를 넘으면, Wrapping 된 값으로 적용됩니다.

<p align="center">  <img src="/assets/images/Insert_Items_Exam-768x587.png" align="center" width="72%"></p>
