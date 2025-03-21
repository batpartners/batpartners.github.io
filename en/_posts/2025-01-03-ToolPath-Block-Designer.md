---
title: "Block Designer"

layout: single
header:
  teaser: ""

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-Block-Designer/
translation_link: /toolpath/ToolPath-Block-Designer/

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

* Component for generating Target Planes used in Toolpaths for modeling Block Walls, utilizing relevant data from Unit Block and Wall-shaped surface modeling to plan the modeling of Block Walls and arrange individual Blocks.

<p align="center"><img src="/assets/images/BlockDesigner.png" align="center" width="32%"></p>

# Input

* **BasePlane [Plane]** : Sets the reference plane for the Unit Block, which determines the orientation direction for the Gripper TCP later on. 
* **Unit Block [Box]** : Inputs the Unit Block modeling to be used in Box format.
* **Wall [Brep]** : Inputs the modeling of the shape where the bricks will be stacked.

<p align="center"><img src="/assets/images/blockdesigner-1.png" align="center" width="80%"></p>

## Built-in Param | BlockDesign

* **Divide by Distance [Boolean]** : 
> **False (default)** : In this mode, the configured Horizontal Spacing serves as the minimum spacing condition, placing bricks at points that divide each layer.
> **True**: In this mode, the Horizontal Spacing for all layers is directly applied as set, without additional division.

* **Horizontal Spacing** : Adjusts the horizontal distance between adjacent blocks.
* **Vertical Spacing**: Adjusts the vertical distance between adjacent layers.

<br>

# Output

* **Block Count [int]**: Outputs the total number of blocks required for the stacking.
* **Target Planes [Plane]**: Outputs the target planes that define the positions and orientations of the placed blocks.
* **Block Wall [Mesh]**: Outputs the mesh collection of the generated block wall.
* **Layers [Curve]**: Outputs the curve collection representing the base layers of the stacked blocks.