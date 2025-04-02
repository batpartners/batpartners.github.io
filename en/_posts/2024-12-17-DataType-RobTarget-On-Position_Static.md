---
title: "RobTarget On Position(Static)"
layout: single
header:
  teaser: "/assets/images/positioner_static.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-RobTarget-On-Position_Static/
translation_link: /datatype/DataType-RobTarget-On-Position_Static/

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

* The Positioner's RobTarget (Robot Target) is a component that defines the position of the robot and additional axes using user-defined ToolPath Plane data to define the RobTarget data. 
* RobTarget On Positioner is a data format in the ABB RAPID Program that defines the movements of the robot and auxiliary equipment. 
* RobTarget On Positioner includes information such as the position and orientation of the robot's TCP (Tool Center Point) and the angle information of the additional axes along the planned movement path.
  * Reference: ABB RAPID Instructions Documentation (Document ID: 3HAC050917-001).

<p align="center">  <img src="/assets/images/positioner_static.png" align="center" width="32%"></p>

# Input

* **Positioner** : Inputs Positioner Data.
* **Name [Text/Item]** : Specify the variable name of the ABB RobTarget as a string.
* **Target Plane [Plane/DataTree]** : Receives data for the ToolPath Plane planned by the user.
* **Base Plane [Plane/DataTree]** : Receives data for the ToolPath Plane planned by the user.
* **Reference Plane [Plane/DataTree]** : Inputs the reference Plane value for each branch of the Target Plane.
* **Angle [Number/Item]** : Modifies the robot's posture by changing the angle of the TargetPlane's normal.
* **WobjData [Plane]** : Defines the reference plane according to the workspace as Work Object Data.

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Static)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## Built-in Param | Basic Params​

* **Split Start** : Can split the first TargetPlane Data of the TargetPlane. The default state is False.
* **Split Start** : Can split the last TargetPlane Data of the TargetPlane. The default state is False.

<br>

# Output

* **RobTargets** : Print ProgramData of Robtargets in each area. Then, link this data to Instructions.

<p align="center"> 
<video src="/assets/images/Static_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>