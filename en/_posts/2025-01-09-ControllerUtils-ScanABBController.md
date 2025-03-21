---
title: "ScanABBController"
layout: single
header:
  teaser: "/assets/images/ScanABBController.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: en
permalink: /en/controllerutils/ControllerUtils-ScanABBController
translation_link: /controllerutils/ControllerUtils-ScanABBController

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

* This is a component that searches for a robot controller compatible with wired or wireless connection on the GERTY-operated PC.

<p align="center">  <img src="/assets/images/ScanABBController.png" align="center" width="32%"></p>

# Input

* **Update[Boolean/Item]**: Updates information on available controllers that can be connected.

## Built-in Param | Controller
* **Controller Type**: Allows selection between virtual (Virtual) and physical (Real) robot environments.

<div align="center">
<table style="border-collapse: collapse: width: 51 %; height: 100px;" border="0.5" data-ke-style="sytle4">
<tbody>
<tr style="height: 20px;" bgcolor="#F2F2F2">
<td style="width: 45%; height: 20px; text-align: center; font-weight: bolder;">Virtual</td>
<td style="width: 50%; height: 20px; text-align: center; font-weight: bolder;">Real</td>
</tr>
<tr style="height: 0px;">
<td style="width: 50%; height: 1-px; text-align: left;" rowspan="1">By connecting to the virtual robot controller in ABB RobotStudio, you can retrieve the necessary data and control GERTY.</td>
<td style="width: 55%; height: 1-px; text-align: left;" rowspan="1">	
By connecting to the physical robot controller, you can retrieve the robot’s data and control GERTY.</td>
</tr>
</tbody>
</table>
</div>

<br>

# Output

* **ControllerInfo** : Allows you to check the connected robot data. 
* **SystemID** :  Outputs data such as the axis values and tool data of the virtual or real robot to assist with the simulation.