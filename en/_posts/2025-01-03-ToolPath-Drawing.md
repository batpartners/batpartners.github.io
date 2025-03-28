---
title: "Drawing"

layout: single
header:
  teaser: "/assets/images/Drawing.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-Drawing/
translation_link: /toolpath/ToolPath-Drawing/

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

* This component generates a drawing ToolPath based on the input curve data and related parameters. Depending on whether Geometry Input is provided, it either creates a drawing ToolPath on a plane or generates a ToolPath that follows the shape of the Geometry.

<p align="center">  <img src="/assets/images/Drawing.png" align="center" width="32%"></p>

<br>

# Input

* **Curves[Curve / List]** : Select the curves to be drawn.
* **Reference Plane [Plane]** : Input the reference plane for drawing. The Target Plane is generated as a plane in the same xy direction as the Base Plane.
* **Geometry [Brep/Mesh / Optional]**: Input the geometry for the curves to be drawn on. Either a Mesh or Brep must be provided. The curves must be on the Geometry.

## Built in param | Drawing
  
  * **Tolerance** : Set the allowable tolerance.
  * **Min Edge(mm)** : Set the minimum distance between target planes. This parameter defines the minimum gap between parameters. Values smaller than this will not be generated.
  * **Max Edge(mm)** : Set the maximum distance between target planes. This parameter defines the maximum gap between parameters. Values larger than this will not be generated.
  * **Tilting Weight** : Set the degree to which the target plane tilts on the geometry. This is a normalized value (0-1) representing the tilt between the normal of the Base Plane and the normal of the target plane on the geometry.
  * **NormalSize** : Adjust the preview size of the ToolPaths.

<br>

# Output

* **Target Planes**: Output the defined Drawing ToolPath according to the given conditions.
