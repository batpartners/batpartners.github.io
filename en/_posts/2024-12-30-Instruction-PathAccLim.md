---
title: "PathAccLim"

layout: single
header:
  teaser: "/assets/images/PathAccLim_1.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-PathAccLim/
translation_link: /instruction/Instruction-PathAccLim/

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

* This component defines the PathAccLim Instruction, which reduces the TCP's movement speed. It limits the robot's acceleration (AccLim) or deceleration (DecelLim) to reach the Target Point position.

<p align="center">  <img src="/assets/images/PathAccLim_1.png" align="center" width="32%"></p>

# Input
* **RobTargets** : Receives data from RobTargets.

## Built-in Param | Basic Params

* **AccLim [Boolean]** : Asks whether acceleration is enabled. Default is False.  
* **DecelLim [Boolean]** : Asks whether deceleration is enabled. Default is False.  
* **AccMax(m/s2)** : Inputs the maximum acceleration value. 
* **DecelMax(m/s2)** : Inputs the maximum deceleration value.

# Output

* **Instructions** : Outputs the defined PathAccLim Instructions based on the entered Input.

<br>

# Example

Here is an example of using the PathAccLim component:

`Example 1`

- PathAccLim TRUE \AccMax := 4, TRUE \DecelMax := 4; TCP acceleration and TCP deceleration are limited to 4 m/s2. 

`Example 2`

- PathAccLim FALSE, FALSE; The TCP acceleration and deceleration is reset to maximum (default).