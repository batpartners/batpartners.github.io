---
title: "RealTimeDisplay"
layout: single
header:
  teaser: "/assets/images/realtimedisplay.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: en
permalink: /en/controllerutils/ControllerUtils-RealTimeDisplay
translation_link: /controllerutils/ControllerUtils-RealTimeDisplay

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

* RealTimeDisplay is a component that connects with the actual or virtual robot ID, allowing you to observe the movements of the connected robot synchronized with the GERTY simulation movements

<p align="center">  <img src="/assets/images/realtimedisplay.png" align="center" width="42%"></p>

# Input

* **GERTY Robot**: Receive robot component data.
* **SystemID** : Receive robot controller data.
* **Unit** : Receive input of robot unit data.
* **Signals** : Collect signal information.

## Built-in Param | CurrentTCP
* **Types**: Reads data from the components installed on the actual robot. Default value is 'Tool'.
* **Options**: Choose output options for robot data.

<br>

# Output

* **Robot Angle** : Fetches and displays the angle values for each axis of the robot.
* **External Angle** : Fetches and displays the angle values of the additional axes.
* **CurrentPos**: Outputs the current pose of the robot.

<br>

# How To Use

The following examples illustrate typical usage scenarios of the `RealTimeDisplay` component.

<p align="center">  <img src="/assets/images/RealTimeDisplay_00-768x249.png" align="center" width="90%"></p>

<p align="center"> 
<video src="/assets/images/IMG_0556-2.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>

