---
title: "ReadAndWriteMOCData"
layout: single
header:
  teaser: "/assets/images/ReadAndWriteMOCData.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: en
permalink: /en/controllerutils/ControllerUtils-ReadAndWriteMOCData
translation_link: /controllerutils/ControllerUtils-ReadAndWriteMOCData

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

* ReadAndWriteMOCData is a component that outputs the information of the virtual or real positioner axis connected to the current controller.

<p align="center">  <img src="/assets/images/ReadAndWriteMOCData.png" align="center" width="32%"></p>

# Input

* **SystemID** : Receives robot controller data.
<br>

# Output

* **ARM1&PLATE1_Info** : Outputs the axis values of ARM1 and PLATE1 of the positioner. 
* **PLATE_Pl** :  Outputs the table plane position value of the positioner. 
* **ARM1_Pl** : Outputs the position value of the ARM1 axis plane of the positioner.

<p align="center">  <img src="/assets/images/ReadAndWriteMOCData_01-1-768x272.png" align="center" width="90%"></p>

<br>

# How To Use

* The following is an example you may encounter when using the ReadAndWriteMOCData component.

<p align="center">  <img src="/assets/images/ReadAndWriteMOCData_02-1-768x184.png" align="center" width="90%"></p>