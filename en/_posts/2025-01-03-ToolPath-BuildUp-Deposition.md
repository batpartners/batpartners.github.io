---
title: "BuildUp Deposition"

layout: single
header:
  teaser: "/assets/images/BuildupDeposiiton.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-BuildUp-Deposition/
translation_link: /toolpath/ToolPath-BuildUp-Deposition/

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

* Component for analyzing additive manufacturing (AM) data to assist in generating general deposition toolpaths.

<p align="center">  <img src="/assets/images/BuildupDeposiiton.png" align="center" width="32%"></p>

# Input

* **Home Pos [Plane/Optional]**: Input the plane corresponding to the home position before deposition starts. Default value is World XY.
* **Deposition ToolPaths [DepositionToolPath / List]**: Receives DepositionToolPath data.
* **Pre-Extrusion Curve [Curve/Optional]**: Optional curve data for nozzle cleaning by pre-extrusion.
* **Is Bottommost [Boolean]**: Checks if the deposition toolpath starts from the bottommost layer.

<br>

# Output

* **E-Start Planes**: Outputs the first plane value of the main path where extrusion begins.
* **Movement Planes**: Outputs the plane values along the main path where extrusion is carried out.
* **E-Stop Planes**: Outputs the plane value where extrusion stops along the main path.
* **E-Stop idx**: Outputs the index of the E-Stop plane.