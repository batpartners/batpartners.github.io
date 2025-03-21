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

translated: true
lang: en
permalink: /en/utils/Utils-TreeBranch/
translation_link: /utils/Utils-TreeBranch/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:kr: [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* Extracts specific branches from the input DataTree based on the sequence (index) of paths.

<p align="center">  <img src="/assets/images/treebranch.png" align="center" width="25%"></p>

# Input

* **Tree [Generic/DataTree]** : Input the DataTree from which specific branches will be extracted.
* **Index [Int/Item]** : Input the index of the path to be extracted.

<br>

# Output

* **Branch [Generic/DataTree]** : Outputs the branch at the specified path index.

<br>

# How To Use

As in the example below, branches are extracted based on the path index, and if the index value exceeds the total range of path indices, it wraps around.

<p align="center">  <img src="/assets/images/TreeBranch_exam-768x647.png" align="center" width="80%"></p>