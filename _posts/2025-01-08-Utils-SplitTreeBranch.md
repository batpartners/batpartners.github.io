---
title: "Split Tree Branch"
layout: single
header:
  teaser: "/assets/images/splittreebranch.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils
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

* 입력된 DataTree를 특정 Path의 순번(Index)을 기준으로 하여, 2개의 DataTree로 분리한다.

<br>

<p align="center">  <img src="/assets/images/splittreebranch.png" align="center" width="32%"></p>

<br>

# Input

* **Tree [Generic / DataTree]** : 분리할 DataTree를 입력한다.
* **Index [ Int / Item]** : 분리 기준이 되는 Index를 입력한다. 입력된 Index Path의 Branch까지 Tree A에 저장, 이후 Branch들은 Tree B에 저장된다. 

<br>

# Output

* **Tree A [Generic / DataTree]** : 분리된 앞 부분 DataTree를 출력한다.
* **Tree B [bool / List]** : 분리된 뒷 부분 DataTree를 출력한다.

<br>

# How To Use

아래와 같은 경우 입력된 DataTree의 Paths[1]까지를 Tree A에 Paths[2]~ 마지막 Path 까지의 데이터를 Tree B에 분리하는 예시이다.

<br>

<p align="center">  <img src="/assets/images/SplitTree_exam-768x374.png" align="center" width="72%"></p>

<br>