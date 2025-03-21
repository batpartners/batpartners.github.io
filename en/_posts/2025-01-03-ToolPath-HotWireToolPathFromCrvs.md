---
title: "HotWireToolPathCrvs"

layout: single
header:
  teaser: "/assets/images/HotwireToolpathfromCrvs.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-HotWireToolPathFromCrvs/
translation_link: /toolpath/ToolPath-HotWireToolPathFromCrvs/

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

* This component reads the user's modeled curves and converts them into hot wire tool paths.

<p align="center">  <img src="/assets/images/HotwireToolpathfromCrvs.png" align="center" width="32%"></p>

<br>

# Input

* **CurveA [Curve]** : Connects the first Curve.
* **CurveB [Curve]** : Connects the second Curve.
* **Target Count [Number / Optional]**: Determines the number of hot wire paths.
* **Parameter [List / Optional]** : Determines the origin positions of the targets on the Ribcurve.
* **Wrist Object [Geometry / Optional]** : Allows redefining the normal direction of the hot wire path through input values such as point, curve, or line.

## Built-in Param | Hotwire Crvs

* **Cutting Direction Flip** : Reverses the direction of the hot wire cutting path.
* **Tool Flip** : Rotates the 6th axis, where the hot wire tool (end effector) is mounted, by 180 degrees in the direction of movement.
* **Extension(mm)** : Determines the distance of the straight path just before entry and exit of the hot wire.
* **Shift Seam** : Redefines the order of the hot wire cutting sequence on the read planes.

## Built-in Param | Extra
* **NormalSize** : Determines the display size of the normal (Z-axis, normal vector).

<br>

# Output

* **Target Planes** : Outputs the hot wire cutting tool paths defined according to the input conditions.
* **RibCurves** : The unit segments of the Ruled Surface that determine the hot wire path.