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

translated: true
lang: en
permalink: /en/utils/Utils-SplitTreeBranch/
translation_link: /utils/Utils-SplitTreeBranch/

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

* Splits the input DataTree into two DataTrees based on the sequence (index) of a specified path.

<p align="center">  <img src="/assets/images/splittreebranch.png" align="center" width="25%"></p>

# Input

* **Tree [Generic/DataTree]** : Input the DataTree to be split.
* **Index [Int/Item]** : Input the index that will serve as the splitting criterion. Branches up to and including the branch at the specified index path are stored in Tree A, while subsequent branches are stored in Tree B.

<br>

# Output

* **Tree A [Generic/DataTree]** : Outputs the separated front portion of the DataTree.
* **Tree B [Boolean/List]** : Outputs the separated rear portion of the DataTree.

<br>

# How To Use

Here is an example where the DataTree input splits Paths[1] up to Paths[2]~ the last Path into Tree A and Tree B, respectively.

<p align="center">  <img src="/assets/images/SplitTree_exam-768x374.png" align="center" width="72%"></p>