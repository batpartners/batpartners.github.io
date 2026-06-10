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

## Static Mode

| Name | Type | Description |
| :--- | :--- | :--- |
| Positioner | Positioner | ABB Positioner |
| Target Planes | Plane | Target planes to be converted into RobTargets |
| Z Rotation | Angle | Rotates the RobTarget around its own Z-axis (Unit: Degrees) |
| Target Base | Plane | The reference plane where the inputted Target Plane is defined. The inputted Target Plane defines the RobTarget oriented to the Positioner's Mounting Plane based on this plane. |
| Reference Plane | Plane | Reference plane for positioner orientation in Static mode |
| WobjData | WobjData | ABB Workobject coordinate system |

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Static)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## | Required Parameters

* RobTarget
  * Name: Defines the name of the RobTarget variable to be created. This variable serves as a unique identifier to store the robot's target position and orientation.
* Output
  * Split Start: Extracts and outputs the data corresponding to the first index within each branch of the inputted TargetPlane data.
  * Split End: Extracts and outputs the data corresponding to the last index within each branch of the inputted TargetPlane data.

# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| RobTargets | RobTarget | Outputs the ABB RAPID RobTargets code |

<p align="center"> 
<video src="/assets/images/Static_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>