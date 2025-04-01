---
title: "WeldData"

layout: single
header:
  teaser: "/assets/images/WeldData.PNG"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /en/datatype/DataType-WeldData/

translation_link: /datatype/DataType-WeldData/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* *welddata* is a component used to control welding operations during the *weld phase*, when the arc is active.

<p align="center">  <img src="/assets/images/WeldData.PNG" align="center" width="40%"></p>

# Input

* **Weld Name** : Sets the variable name for the WeldData.
* **Weld ArcData** : Connects the Weld ArcData to the component.
* **WeaveData** : Connects the WeaveData to the component.

## Built-in Param | Weld Phase Params

* **Weld Speed(mm/s)** : The original weld speed during the weld phase.(original weld speed)

<br>

# Output

* **WeldData** : Outputs the configured option values as a WeldData object.
* **Code** : Converts the configured WeldData into a code representation, allowing users to preview the actual settings in advance.
