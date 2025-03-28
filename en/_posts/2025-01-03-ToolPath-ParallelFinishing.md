---
title: "ParallelFinishing"

layout: single
header:
  teaser: "/assets/images/ParalellFinishing.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-ParallelFinishing/
translation_link: /toolpath/ToolPath-ParallelFinishing/

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

* This is a cutting toolpath component for the second milling step.
* It divides the curves between parallel curves of varying lengths into equal length segments in the cutting direction as shown below.

<p align="center"><img src="/assets/images/ParalellFinishing.png" align="center" width="32%"></p>

<br>

# Input

* **Geometry**: Input the Geometry parameter of Mesh or Surface.
* **Reference Plane** : Input the base plane for Target Orientation when Tilting weight=0.

<p align="center"><img src="/assets/images/Parallel-768x238.png" align="center" width="80%"></p>

## Built-in Param | Basic Params

* **Cutting Direction [Boolean]** : Select the direction, U(False) / V(True).
* **Stepover** : Determines the amount of material removed horizontally in a single pass. By default, it should be less than or equal to half the diameter of the end mill. A smaller value allows for finer finishing. (Stepover <= End Mill Diameter * 1/2)
* **Tilting Weight** : Weight of the Target Tilting, ranging from 0.0 to 1.0. When closer to 0, it aligns with the BasePlane's normal; when closer to 1, it aligns with the Surface's normal, tilting the Target Plane accordingly.
* **Tolerance** : Toolpath resolution.

<br>

# Output

* **Curve** : Outputs the curves of the finishing layer.
* **Target Plane**: Outputs the index values of the planes as a DataTree.