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
lang: en
permalink: /en/utils/Utils-SimplePathRemapper/
translation_link: /utils/Utils-SimplePathRemapper/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* Redefine the DataTree path according to Sequential / Odd numbered / Even numbered options.

<p align="center">  <img src="/assets/images/simplepathremapper.png" align="center" width="21%"></p>

# Input

* **Tree [Generic/DataTree]** : Enter the DataTree for which the Path will be redefined.

## Context Menu Options

* `Sequential Path` : Redefines the DataTree path as sequential paths such as “[0], [1], [2], …
* `Odd Numbered Path` : Redefines the DataTree path as paths with odd numbers, such as “[1], [3], [5], …
* `Even Numbered Path` : Redefines the DataTree path as paths with even numbers, such as “[0], [2], [4], …

<br>

# Output

* **Tree [Generic/DataTree]** : Outputs a DataTree with new paths mapped according to the specified conditions.

<br>

# How To Use

<p align="center">  <img src="/assets/images/SimplePathRemapper_exam-768x631.png" align="center" width="72%"></p>