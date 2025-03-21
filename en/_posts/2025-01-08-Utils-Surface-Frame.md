---
title: "Surface Frame"
layout: single
header:
  teaser: "/assets/images/surfaceframe.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: en
permalink: /en/utils/Utils-Surface-Frame/
translation_link: /utils/Utils-Surface-Frame/

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

* A component that takes an input surface and UV parameters to output the tangent plane at a specific location on the surface, with that location as the origin.

<p align="center">  <img src="/assets/images/surfaceframe.png" align="center" width="32%"></p>

# Input

* **Surface [Surface/Item]** :  Input the surface for which to compute the tangent plane.

<br>

## Built-in Param

* **U-Param [double/Item]** : Sets the U-direction parameter of the surface.
* **V-Param [double/Item]** : Sets the V-direction parameter of the surface.

<br>

# Output

* **BasePlane [Plane/item]** : Outputs the defined tangent plane based on the input conditions.
