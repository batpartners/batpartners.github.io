---
title: "WobjData"
layout: single
header:
  teaser: "/assets/images/04_WobjData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-WobjData/
translation_link: /datatype/DataType-WobjData/

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

* WobjData is a component that defines the internal work object of a robot.
It allows transforming the position of the internal work object from WobjData to a user-defined UserFrame, and can be adapted to the robot's model and additional axes by changing to Fixed WobjData and MovableData.

<p align="center">  <img src="/assets/images/04_WobjData.png" align="center" width="32%"></p>

# Input

* **Name [Text]** : Enter the variable name for the UserFrame.
* **UserFrame [Plane]** : Set the Base Plane.

## Built-in Param | Preview Params​

* **Used [Boolean]**: Indicates whether this signal is used or not. (Default: True)
* **Start [Boolean]**: Sets the starting point of this signal. (Default: false = End point)
* **Distance(mm)**: Defines the signal of the device in distance units from the StartPoint/EndPoint.
* **Equip Lag(sec.)**: Defines the signal of the device in seconds from the StartPoint/EndPoint.

<br>

# Output

* **WobjData** : Outputs the defined WobjData.
