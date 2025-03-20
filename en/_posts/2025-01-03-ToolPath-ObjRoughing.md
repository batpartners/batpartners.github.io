---
title: "ObjRoughing"

layout: single
header:
  teaser: "/assets/images/ObjRoughing.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-ObjRoughing/
translation_link: /toolpath/ToolPath-ObjRoughing/

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

* Component providing cutting toolpaths for the first milling stage.

<p align="center">  <img src="/assets/images/ObjRoughing.png" align="center" width="32%"></p>

<br>

# Input

* **Geometry**: Input the volume to be roughed out as a solid (Brep) or mesh (Mesh) type.
* **Base Plane** : Input the reference plane that determines the end mill entry direction (Contour direction), target orientation, starting position of the toolpath, collision avoidance height for machining surfaces, etc.

## Built-in Param | Roughing

* **Cutting Direction [Boolean]**: Selects the upward (True) or downward (False) cutting direction.
* **Setback** : Determines the extent to which the roughing toolpath is offset from the final machined surface. It must be greater than half the diameter of the end mill. (Setback > End mill diameter * 1/2)
* **Stepover**: Specifies the amount of horizontal material removed in one pass, calculated as less than half the diameter of the end mill. (Stepover <= End mill diameter * 1/2)
* **Stepdown**: Sets the vertical depth of each drilling pass, calculated as less than half the flute length of the end mill. (Stepdown <= End mill flute length * 1/2)
* **Shift**: Shifts the entire vertical direction of the Stepdown layer.
* **Tolerance**: Determines the resolution of the toolpath.

<br>

# Output

* **Targets Plane** : Converts the results of movement and avoidance paths into a DataTree with even branches.
* **ToolPath** : Converts the results of movement and avoidance paths into a DataTree with even branches.