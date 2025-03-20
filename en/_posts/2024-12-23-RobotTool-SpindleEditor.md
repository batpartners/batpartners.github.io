---
title: "Spindle Editor"

layout: single
header:
  teaser: "/assets/images/ToolPointEdit.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: en
permalink: /en/robottool/RobotTool-SpindleEditor/
translation_link: /robottool/RobotTool-SpindleEditor/

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

* This component assists in configuring the spindle tool. It takes the modeling (Mesh) of the spindle body and the point corresponding to the starting point of the end mill (Plane) as inputs. It then exports the TCP value based on the length and diameter of the end mill.
Considering models with and without the end mill included, it allows for setting the length, size, and direction of the TCP accordingly.

<p align="center">  <img src="/assets/images/ToolPointEdit.png" align="center" width="32%"></p>

# Input

* ***ool Geometry [Mesh]** : Input the mesh of the spindle body.
* **Endmill StartPl [Plane]** : Input the plane where the end mill attaches, similar to the TCP (Tool Center Point).

## Built-in Param : Basic Params

* **Length(mm)** : Determines the length of the end mill in millimeters (mm).
* **Radius(mm)** : Determines the radius of the end mill's diameter in millimeters (mm).

# Output

* **Tool Geometry** : Exports the spindle body mesh as the ToolData mesh.
* **TCP** : Exports the plane at the end of the end mill's final length and radius, as configured by the user, as the TCP.

<p align="center">  <img src="/assets/images/spindleEditor_3-17-1-2048x1152.png" align="center" width="80%"></p>
