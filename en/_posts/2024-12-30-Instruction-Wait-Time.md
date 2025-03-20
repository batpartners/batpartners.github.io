---
title: "Wait Time"

layout: single
header:
  teaser: "/assets/images/WaitTime.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-Wait-Time/
translation_link: /instruction/Instruction-Wait-Time/

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

* This component defines the WaitTime Instruction, which allows setting a pause time in seconds during the execution of a program to momentarily stop the robot's movement.

<p align="center">  <img src="/assets/images/WaitTime.png" align="center" width="32%"></p>

<br>

# Input

* **Time [Double]**: Enter a numeric value (Double) in seconds.

<br>

## Built-in Param | WaitTime

* **In Position [Boolean]** : Delays after reaching the specified Target Point position.
* **Time(sec.)** : Set the delay time in seconds.

<br>

# Output

* **Instructions** : Outputs WaitTime Data to be placed in the Instructions.