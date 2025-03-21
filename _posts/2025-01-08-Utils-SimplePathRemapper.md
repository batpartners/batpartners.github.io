---
title: "SimplePathRemapper"
layout: single
header:
  teaser: "/assets/images/simplepathremapper.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: ko
permalink: /utils/Utils-SimplePathRemapper/

translation_link: /en/utils/Utils-SimplePathRemapper/
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
<p align="center">  <img src="/assets/images/simplepathremapper.png" align="center" width="21%"></p>

# Input

* **Tree [Generic/DataTree]** : Item또는 Item Collection을 삽입할 DataTree를 입력합니다.

## Context Menu Options

* `Sequential Path` : DataTree의 Path를 “[0],[1],[2],…” 의 순차적인 Path로 재정의합니다.
* `Odd Numbered Path` : DataTree의 Path를 “[1],[3],[5],…” 의 홀수 구성된 Path로 재정의합니다.
* `Even Numbered Path` : DataTree의 Path를 “[0],[2],[4],…” 의 짝수 구성된 Path로 재정의합니다.

<br>

# Output

* **Tree [Generic/DataTree]** : 입력된 조건에 따라, 생성된 DataTree를 출력합니다. 

<br>

# How To Use

<p align="center">  <img src="/assets/images/SimplePathRemapper_exam-768x631.png" align="center" width="72%"></p>
