---
title: "ToolData"
layout: single
header:
  teaser: "/assets/images/ToolData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-ToolData/
translation_link: /datatype/DataType-ToolData/

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

This component is mounted on the 6th axis of the robot and is responsible for providing and previewing information about the tool (end effector) to the robot.

<p align="center">  <img src="/assets/images/ToolData.png" align="center" width="32%"></p>

# Input

* **Name [Text \ Item]** : Enter the unique variable name of the tool as a string.
* **Base Plane[Plane]** : Set the base plane of the tool mounted on the robot.
* **TCP [Plane]** : Set the reference plane representing the TCP of the mounted tool.

> Mass, Centroid, and Inertia should be entered based on the measurement results from the LoadIdentify Routine of the ABB robot system with the tool installed.

* **Mass [double/string]** : Enter the measured tool load. The maximum weight that is not recognized as a collision varies depending on the robot model. If the unspecified weight exceeds the default maximum weight, it will be recognized as a collision object and the operation will stop.
* **Centroid [Text/String]** : Enter the measured center of mass of the tool. The format should be 0d,0d,0d.
* **Inertia [Text/String]** : Enter the measured moment of inertia of the tool according to the robot's movement. The format should be 0d,0d,0d.
* **Export [Boolean]** : The user can save the entered tool information for future use.


## Built-in Param | Basic Params​

* **Display Colour** : Changes the color of the tool model.

<br>

# Output

* **ToolData** : Outputs the entered ToolData.
<figure>
<a href="https://lh3.google.com/u/0/d/1Wo_d5VYs9iMtBXPgUYlHkjPqOg13DywU=w1912-h920-iv1"><img src="https://lh3.google.com/u/0/d/1Wo_d5VYs9iMtBXPgUYlHkjPqOg13DywU=w1912-h920-iv1"></a>
</figure>>
