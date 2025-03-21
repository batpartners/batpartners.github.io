---
title: "SlicerFill"

layout: single
header:
  teaser: "/assets/images/SlicerFill.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-SlicerFill/
translation_link: /toolpath/ToolPath-SlicerFill/

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

* A component that generates toolpaths to fill the internal shell of an additive modeling structure.

<p align="center">  <img src="/assets/images/SlicerFill.png" align="center" width="32%"></p>

# Input

* **GertyShellData [DataTree]**: Inputs GERTYShellData, which converts the modeling into additive Shell Layers.

## Built-in Param | Pattern Params

* **Int-infill Pattern** : Defines the internal infill toolpath pattern. Options include Zigzag, Rectangle, and Triangle. The default is Rectangle.
* **Ext-infill Pattern** :  Defines the external infill pattern with three options: Zigzag, Rectangle, and Triangle. The default is Rectangle.

## Built-in Param | Slicing Params

* **Top Layer Count**: Specifies the number of top infill layers.
* **Bottom Layer Count**: Specifies the number of bottom infill layers.
* **Gap**: Sets the gap between the outline and the infill (mm).
* **Int Infill Amount**: Sets the amount of internal infill.

<br>

# Output

* **Deposition ToolPaths**: Outputs the internal infill additive toolpaths.
* **Infill Polylines**: Outputs the infill additive toolpath curves.