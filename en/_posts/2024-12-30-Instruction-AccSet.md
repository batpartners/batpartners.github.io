---
title: "AccSet"

layout: single
header:
  teaser: "/assets/images/AccSet.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-AccSet/
translation_link: /instruction/Instruction-AccSet/

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

* This is a component that defines the AccSet Instruction to limit the acceleration of the robot.

<p align="center">  <img src="/assets/images/AccSet.png" align="center" width="32%"></p>

<br>

# Built-in Param | AccSet

* **Acceleration(%) [double]**: Limits the maximum acceleration (or deceleration) of the motion as a percentage.
* **Ramp(%) [double]** : Limits the rate of increase in acceleration (or deceleration).
* **FinePointRamp(%) [double]** : Further limits the rate of deceleration increase at Fine Points. The rate of deceleration increase at Fine Points is applied as Ramp * FinePointRamp.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/AccSet_1-1.png" align="center" width="72%"></p>

<br>

# Output

* **Instructions** : Outputs the defined AccSet Instructions based on the entered Input.