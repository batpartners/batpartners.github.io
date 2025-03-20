---
title: "TriggMove"

layout: single
header:
  teaser: "/assets/images/TriggIOsMove.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-TriggIOMove/
translation_link: /instruction/Instruction-TriggIOMove/

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

Based on Robtarget and TriggIOs data, this component defines the Trigg"X" IOs Instruction. TriggXIOs is an instruction that sets two or more output signals simultaneously while the robot is in motion.

<p align="center">  <img src="/assets/images/TriggIOsMove.png" align="center" width="32%"></p>

# Input

* **RobTarget** : Get RobTarget data.
* **TriggIOs** : Get TriggIOs data.

## Built-in Param | Basic Params

* **TriggJIOs** : Sets the Joint motion to reach the entered RobTarget.
* **TriggLIOs** : Sets the Linear motion to reach the entered RobTarget.
* **Speed** : Sets the speed (velocity) in mm/s at which the RobTarget is reached.
* **Zone** : Specifies a radius around the Target Point. When moving to the next Target Point, the movement is controlled by filleting with a size proportional to the zone value. This ensures precise passage through the point, while potentially affecting the robot's constant speed motion.

<p align="center">
<table style="border-collapse: collapse: width: 51 %; height: 200px;" border="0.5" data-ke-style="sytle4">
<tr style="height: 20px;" bgcolor="#F2F2F2">
<td style="width: 45%; height: 20px; text-align: center; font-weight: bolder;">Type</td>
<td style="width: 50%; height: 20px; text-align: center; font-weight: bolder;">Speed(velocity)</td>
<td style="width: 55%; height: 20px; text-align: center; font-weight: bolder;">Zone</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1">TriggJIOs</td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V5</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Fine</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1">TriggLIOs</td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V10</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Z0</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1"> </td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">...</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">...</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1"> </td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V7000</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Z200</td>
</tr>
</table>
</p>

# Output

* **Instructions** : Outputs the defined TriggIOsMove Instruction based on the entered conditions.