---
title: "Tree Branch"
layout: single
header:
  teaser: "/assets/images/treebranch.png"

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

* 입력된 DataTree의 Path의 순번(Index)을 기준으로 특정 Branch를 추출한다.

<br>

<p align="center">  <img src="/assets/images/treebranch.png" align="center" width="32%"></p>

<br>

# Input

* **Tree [Generic / DataTree]** : 특정 Branch를 추출할 DataTree를 입력한다.
* **Index [ Int / Item]** : 추출할 Path의 Index를 입력한다. 

<br>

# Output

* **Branch [Generic / DataTree]** : 입력한 Path Index의 Branch를 출력다. 

<br>

# How To Use

아래 예시와 같이, Path Index 기준으로 Branch가 추출되며, Index값이 총 Path의 Index범위를 벗어나면, Wrapping 됩니다.

<br>

<p align="center">  <img src="/assets/images/TreeBranch_exam-768x647.png" align="center" width="72%"></p>

<br>