---
title: "UV Finishing"
layout: single
header:
  teaser: "/assets/images/UV_Finishing.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-UV-Finishing/
translation_link: /toolpath/ToolPath-UV-Finishing/

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

* 2nd Milling Stage Cutting Toolpath Component: Outputs values that divide curves parallel between curves of different lengths in the direction of the Cutting Direction, as shown in the figure below.

<p align="center">  <img src="/assets/images/UV_Finishing.png" align="center" width="32%"></p>

# Input

* **Brep**: Input a Brep or Surface UV object.
* **Reference Plane**: Input the reference plane for Target Orientation when Tilting weight = 0.

<p align="center"><img src="/assets/images/UVfinishing-768x238.png" align="center" width="80%"></p>

## Built-in Param | UVFinishing

* **Cutting Direction [Boolean]**: Select the direction – U (False) / V (True).
* **Stepover**: Determines the amount of material removed in the horizontal direction. The default value is less than or equal to half the end mill diameter, allowing for finer finishing. (Stepover <= End Mill Diameter * 1/2)
* **Tilting Weight**: Weight for Target Tilting, accepts values between 0.0 and 1.0. Closer to 0 means the Target Plane aligns with the normal of the Base Plane; closer to 1 means it aligns with the normal of the Surface.
* **Tolerance**: Toolpath resolution.

<br>

# Output

* **Curve**: Outputs the curves of the finishing layer.
* **Target Plane**: Outputs the indices of planes as a DataTree.