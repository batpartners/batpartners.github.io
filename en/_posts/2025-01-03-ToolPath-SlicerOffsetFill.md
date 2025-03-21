---
title: "SlicerOffsetFill"

layout: single
header:
  teaser: "/assets/images/SlicerOffsetFill.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-SlicerOffsetFill/
translation_link: /toolpath/ToolPath-SlicerOffsetFill/

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

* This is a component for generating toolpaths to fill the internal Shell of layered modeling. 
It determines the fill using an offset method of the outer curve shape.

<p align="center">  <img src="/assets/images/SlicerOffsetFill.png" align="center" width="32%"></p>

# Input

* **GertyShellData [DataTree]** : Input GERTYShellData, which has been converted into a layered Shell Layer for modeling.
* **Direction** : The fill direction can be adjusted to forward or reverse.

<p align="center"><img src="/assets/images/direction-1.png" align="center" width="70%"></p>

<br>

# Output

* **Infill ToolPaths** : Outputs the infill toolpaths.
* **Infill Polyines** : Outputs the infill layer as curve values.