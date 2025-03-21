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
lang: en
permalink: /en/utils/Utils-InsertItems/
translation_link: /utils/Utils-InsertItems/

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

* Inserts an item or item collection into each branch of the input DataTree.
<p align="center">  <img src="/assets/images/insertTree.png" align="center" width="32%"></p>

# Input

* **Tree [Generic/DataTree]** :  Input the DataTree where items or item collections will be inserted.
* **Items [Generic/List]** : Input the items or item collections to be inserted.
* **indices [int/List]** : Input the indices within each branch where items or item collections will be inserted.

<br>

# Output

* **Tree [Generic/DataTree]** : Outputs the generated DataTree based on the input conditions.

<br>

# How To Use

* If the indices values corresponding to the positions where items or item indices will be inserted exceed the insertable index range within the branch, they will wrap around and be applied accordingly.

<p align="center">  <img src="/assets/images/Insert_Items_Exam-768x587.png" align="center" width="72%"></p>