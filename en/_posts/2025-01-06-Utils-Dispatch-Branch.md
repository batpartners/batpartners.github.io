---
title: "Dispatch Branch"
layout: single
header:
  teaser: "/assets/images/dispatchbranch.png"

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

* 입력된 DataTree의 Branch를 Pattern에 따라 2개의 DataTree로 분리하는 컴포넌트. 입력되는 DataTree 개별 Path의 형식과는 관련이 없이, Path의 순번과 Pattern을 매칭하여 분리한다. 
<br>

<p align="center">  <img src="/assets/images/dispatchbranch.png" align="center" width="32%"></p>

<br>

# Input

* **Tree [Generic / DataTree]** : 패턴에 따라 분리할 DataTree를 입력한다.
* **Pattern [Bool / List]** : 분리 패턴으로 사용할 bool값을 List형식으로 입력한다. Pattern의 “True”에 매칭되는 Branch는 Tree_A, “False” 에 매칭되는 Branch는 Tree_B로 분리된다. 
  - ex) Pattern = { True, false } 입력한 경우, Input으로 입력된, DataTree의 홀수번째 Path의 Branch가 Tree A로, 짝수번째 Path의 Branch가 Tree B로 분리됨.

<br>

# Output

* **Tree A [Generic / DataTree]** : Pattern의 “True”에 매칭되는 Branch데이터로 구성된 데이터트리를 출력한다.
* **Tree B [bool / List]** : Pattern의 “False”에 매칭되는 Branch데이터로 구성된 데이터트리를 출력한다.

<br>

# How To Use

<br>

<p align="center">  <img src="/assets/images/DispatchBranch_exam-768x376.png" align="center" width="72%"></p>

<br>