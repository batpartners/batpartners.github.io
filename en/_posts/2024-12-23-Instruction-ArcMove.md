---
title: "ArcMove"

layout: single
header:
  teaser: "/assets/images/ArcMove.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: ko
permalink: /en/instruction/Instruction-ArcMove/

translation_link: /instruction/Instruction-ArcMove/
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

* The component used to control the robot's motion utilizes ArcData. Therefore, it must take ArcData as input.

<p align="center">  <img src="/assets/images/ArcMove.png" align="center" width="32%"></p>

# Input

* **RobTargets** : Inputs the RobTarget to which ArcMove will be applied.
* **SeamData** : Inputs the SeamData created from the DataType.
* **WeldData** : Inputs the WeldData created from the DataType.

## arc Move | Built-in Params

* **Type** : Selects the type of motion action. ArcL, ArcC.
* **Speed** : Controls the movement speed of the robot.
* **Zone** : Controls the accuracy of reaching the target point. The fine value acts as a stop position, overriding the robot's continuous motion control.

# Output

* **Instructions** : Outputs the defined ArcMove instructions based on the given inputs.