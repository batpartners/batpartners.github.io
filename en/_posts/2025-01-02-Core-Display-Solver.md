---
title: "Display Solver"

layout: single
header:
  teaser: "/assets/images/displaysolver.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: en
permalink: /en/core/Core-Display-Solver/
translation_link: /core/Core-Display-Solver/

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

* DisplaySolver is a component that previews the continuous operation of the robot on the Rhino viewport based on input data from the Robot component and GERTY Core component.

<p align="center">  <img src="/assets/images/displaysolver.png" align="center" width="32%"></p>

# Input

* **GERTY Robot [GERTY Robot / Item]** : Input the result values from the Robot component, configured according to the robot model to be controlled.
* **GERTY Solver [GERTY Solver / Item]** : Input the GERTY Solver data outputted by the GERTY Core component.

## Built-in Param | Basic Params

* **Simulation Pop-up** : Executes a popup that allows manipulation of robot operation simulation by setting it to On.

<p align="center">  <img src="/assets/images/popup-info.png" align="center" width="80%"></p>

* **Simulaition Pop-up interface** :

<p align="center">  <img src="/assets/images/jointmode-robot-01.png" align="center" width="80%"></p>

1) **Target Info**: Panel displaying RobTarget information of the robot motion previewed in the viewport.<br>
* **Input [TextBox]** :  : Displays the index of the RobTarget corresponding to the current robot operation in the simulation. Allows direct typing of the index to instantly preview the action at a specific RobTarget.
* **RobTarget [TextBox]** : Displays the variable name of the RobTarget corresponding to the current robot operation in the simulation. Allows direct typing of the variable name to instantly preview the action at a specific RobTarget.
* **Joint Mode [Button]** : Shows the angles (Angle) of each axis of the robot and positioner in the current robot operation.
* **Linear Mode [Button]** : Displays the position (Coordinate) and orientation (Orient/Quaternion) values of the Target Plane defining the current robot operation based on the configured Workobject.

<p align="center">  <img src="/assets/images/linearmode_example.png" align="center" width="80%"></p>

2) **Simulation**: Slider interface panel for simulating continuous robot motion.<br>
* **Simulation [Slider]** : Adjusts the main slider value using mouse drag or player button interface to simulate planned robot motions.
* **Step Backward / Step Forward [Button]** : Clicking these buttons previews the motion at the previous or next RobTarget relative to the current RobTarget operation.
* **Play [Button]** : Clicking this button simulates continuous motion from the current RobTarget operation onwards.
* **Stop [Button]** : When simulation Play is active, clicking once pauses the simulation. Double-clicking resets the main slider to the starting point.
* **Speed [Slider]** : Sets the simulation speed when the Play button is active.
* **Error Messege** : Displays relevant messages in the top right corner of the Simulation panel if operational errors are anticipated during the movement of the entered tool path. The four possible operational errors observable during simulation are `Singularity, Out of Reach, Over Angle, and Configuration`.
<br>

3) **Preview Options**: Sets options to determine whether to display RobTarget and TCP Tracing during simulation.<br>
* **Preview All Targets [Checkbox]** : When checked, previews all entered RobTargets based on the progress of the simulation.
* **Enable TCP Tracing [Checkbox]** : When checked, previews the tracing curve of TCP movement based on the progress of the simulation.
* **Range [Slider]** : Sets the range of the tracing.
* **Color [Button]** : Sets the color of the tracing curve.

<br>

# Output

* **Tool Center Plane [Plane / Item]** : Outputs the TCP (Tool Center Point) as a plane object in the current previewed robot operation.