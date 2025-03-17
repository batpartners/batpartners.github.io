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
lang: ko
permalink: /robottool/RobotTool-CreateWorkbench/

translation_link: /en/robottool/RobotTool-CreateWorkbench/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:us_outlying_islands: [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

This is a component that allows for user-defined modeling of the workbench.

<p align="center">  <img src="/assets/images/Workbench.png" align="center" width="32%"></p>

# Input

* **WorkBenchMesh** : Receives the user-defined or existing workbench modeling mesh.
* **WorkBenchBasePl** : Sets the base plane for the workbench modeling.
* **WorkBenchFCPl** : Sets the flange center plane for the workbench.
* **Export [Boolean]** : Allows the user to save the workbench.

## Built-in Param : Basic Params

* **Display Colour** : Sets the color of the robot model.
* **Objs Colour** : Sets the color of the objects.

# Output

* **GERTY Workbench**: Exports the information of the user-defined workbench.
