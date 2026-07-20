---
title: "CreateWorkbench"

layout: single
header:
  teaser: "/assets/images/Workbench.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
translated: true
lang: en
permalink: /en/robottool/RobotTool-CreateWorkbench/
translation_link: /robottool/RobotTool-CreateWorkbench/

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

* This is a component that allows for user-defined modeling of the workbench.

<p align="center">  <img src="/assets/images/Workbench.png" align="center" width="32%"></p>

# Input

* **WorkBenchMesh** : Receives the user-defined or existing workbench modeling mesh.
* **WorkBenchBasePl** : Sets the base plane for the workbench modeling.
* **WorkBenchFCPl** : Sets the flange center plane for the workbench.
* **Export [Boolean]** : Allows the user to save the workbench.

<p align="center"> 
<video src="/assets/images/Workbench_Export.mp4" width="576px" height="230px" autoplay=1 muted=1 loop=1 align="center"></video><figcaption>Workbench Export</figcaption>
</p>

## Built-in Param : Basic Params

* **Display Colour** : Sets the color of the robot model.
* **Objs Colour** : Sets the color of the objects.

# Output

* **GERTY Workbench**: Exports the information of the user-defined workbench.