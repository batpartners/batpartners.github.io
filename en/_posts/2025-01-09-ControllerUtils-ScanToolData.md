---
title: "ScanToolData"
layout: single
header:
  teaser: "/assets/images/ScanToolData.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: en
permalink: /en/controllerutils/ControllerUtils-ScanToolData
translation_link: /controllerutils/ControllerUtils-ScanToolData

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

* ScanToolData is a component that assists in extracting current tool data information from virtual or real robots.

<p align="center">  <img src="/assets/images/ScanToolData.png" align="center" width="32%"></p>

# Input

* **SystemID** : Enter the ID of the robot currently connected to the controller.

<br>

# Output

* **ToolName** : Outputs the name of the tool connected to the current controller.
* **TCP** : Outputs the TCP data of the robot connected to the current controller.
* **Mass** : Outputs the tool weight data of the robot connected to the current controller. 
* **Centroid** : Outputs the Centroid value of the tool connected to the current controller. 
* **Inertia** : Outputs the Inertia value of the tool connected to the current controller.

<br>

# How To Use

* Read the current robot ID using ScanABBController and connect it to ScanToolData for use. Extract the tool data of the robot to assist with precise simulation.
<p align="center">  <img src="/assets/images/RealTimeDisplay_01-768x341 (1).png" align="center" width="90%"></p>
