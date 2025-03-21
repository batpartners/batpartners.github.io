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

translated: true
lang: en
permalink: /en/utils/Utils-Dispatch-Branch/
translation_link: /utils/Utils-Dispatch-Branch/

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

* A component that splits the branches of an input DataTree into two DataTrees according to a pattern. Regardless of the format of individual paths in the input DataTree, the paths are separated by matching their sequence number with the pattern.

<p align="center">  <img src="/assets/images/dispatchbranch.png" align="center" width="32%"></p>

# Input

* **Tree [Generic / DataTree]** : Input the DataTree to be split according to the pattern.
* **Pattern [Bool / List]** : Input the list of boolean values to use as the split pattern. Branches matching “True” in the pattern are split into Tree_A, while branches matching “False” are split into Tree_B. For example, if the pattern is { True, False }, the branches of the odd-numbered paths in the input DataTree are split into Tree_A, and the branches of the even-numbered paths are split into Tree_B.

<br>

# Output

* **Tree A [Generic / DataTree]** : Outputs the DataTree composed of branch data matching “True” in the pattern
* **Tree B [bool / List]** : Outputs the DataTree composed of branch data matching “False” in the pattern.

<br>

# How To Use

* Here is an example you might encounter when using the Fly-By Branch component.

<p align="center">  <img src="/assets/images/DispatchBranch_exam-768x376.png" align="center" width="72%"></p>