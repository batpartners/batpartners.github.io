---
title: "SetDO"

layout: single
header:
  teaser: "/assets/images/SetDO.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-SetDO/
translation_link: /instruction/Instruction-SetDO/

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

This component defines the SetDO Instruction, which controls the digital output signals of an ABB Controller. It assigns the variable name (signal data) and the corresponding DigitalOutput value from the Flex pendant.

<p align="center">  <img src="/assets/images/SetDO.png" align="center" width="32%"></p>

<br>

# Input

* **Signal [Text]** : Enter the variable name that corresponds to the Digital Output signal configured on the Controller.
* **Value [Text/Number]** : Enter a digital signal of 0 or 1.

<br>

# Output

* **Instructions** : Outputs SetDO to be placed in the Instructions.
