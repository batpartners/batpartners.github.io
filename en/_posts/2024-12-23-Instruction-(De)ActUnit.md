---
title: "(De)ActUnit"

layout: single
header:
  teaser: "/assets/images/(De)ActUnit.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-(De)ActUnit/
translation_link: /instruction/Instruction-(De)ActUnit/
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

* (De)ActUnit is an instruction component that defines the activation (Activate) status of a robot unit. 
A robot unit refers to the individual control of two or more robots or additional axis equipment within a single controller.

<p align="center">  <img src="/assets/images/(De)ActUnit.png" align="center" width="32%"></p>

<br>

# Input

* **MechUnit [Text]**: Enter the name of the robot or additional axis device defined in the system. Default value: STN1

## Built-in Param | AccSet

* **Activate [Boolean]** : If True is entered, the ActUnit instruction is defined. If False is entered, the DeActUnit instruction is defined. (Default is True.)

<p align="center">  <img src="/assets/images/deactUnit_6.gif" align="center" width="72%"></p>

<br>

# Output

* **Instructions** : Outputs the defined (De)ActUnit Instruction.
