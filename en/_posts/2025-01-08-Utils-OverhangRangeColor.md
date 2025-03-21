---
title: "OverhangRangeColor"
layout: single
header:
  teaser: "/assets/images/overhangrange.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: en
permalink: /en/utils/Utils-OverhangRangeColor/
translation_link: /utils/Utils-OverhangRangeColor/

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

* The `OverhangeRangeColor` is a component that displays the output range of a workpiece using colors. If the maximum tilt angle of the workpiece exceeds 45 degrees, it is displayed in gray. The degree of tilt of the workpiece is divided into ten segments, ranging from 0 to 45 degrees, with each segment represented by a color gradient transitioning from blue to red.

<p align="center">  <img src="/assets/images/overhangrangecolor.png" align="center" width="32%"></p>

# Input

* **Mesh** : Receives the value for the mesh.
* **BasePlane** : Inputs the reference plane for the mesh. The default value is WorldXY.

<br>

# Output

* **Mesh** : Outputs the mesh values with colors corresponding to each tilt range.
* **AngleData** : Outputs the angle values of the mesh relative to the reference plane.

<br>

# How To Use

Input the mesh and analyze the degree of overhang using a color spectrum.

<p align="center">  <img src="/assets/images/overhagerangecolor_01-768x310.png" align="center" width="80%"></p>
<p align="center">  <img src="/assets/images/overhagerangecolor_02-768x284.png" align="center" width="80%"></p>