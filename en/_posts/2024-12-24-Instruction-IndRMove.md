---
title: "IndRMove"

layout: single
header:
  teaser: "/assets/images/IndRMove_00.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /en/instruction/Instruction-IndRMove/
translation_link: /instruction/Instruction-IndRMove/

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

* `IndRMove` is a component that moves the positioner to a new joint angle based on the selected option and redefines its posture accordingly.
Supported options include `Short`, `Forward`, and `Backward`, each influencing the movement direction and angle resolution.
The final angle can also be redefined using a specified `ToRelDegree` value to guide the reset behavior.

<p align="center">  <img src="/assets/images/IndRMove_00.png" align="center" width="32%"></p>

# Input

* **MechUnit** : Specifies the name of the actual positioner robot. (Default is *STN1*)
* **AxisNum** : Specifies the index of the axis to be reset.

## Built-in Param | Basic Params

* **ToRelDegree** : Sets the target angle for resetting. The axis will be rotated and redefined to the nearest possible configuration relative to the current posture.
* **ResetType** : Determines how the angle is redefined based on the selected option. (Refer to the table for details)
* **RamSpeed** : Specifies the acceleration/deceleration speed (as a percentage) when moving toward the defined target angle.

<p align="center">
<table style="border-collapse: collapse: width: 51 %; height: 150x;" border="0.5" data-ke-style="sytle4">
  <thead style="background-color: #F2F2F2; font-weight: bold; text-align: center;">
    <tr>
      <th style="width: 10%; height: 15px; text-align: center; font-weight: bolder;">ResetType</th>
      <th style="width: 25%; height: 15px; text-align: center; font-weight: bolder;">Short</th>
      <th style="width: 25%; height: 15x; text-align: center; font-weight: bolder;">Fwd</th>
      <th style="width: 25%; height: 15px; text-align: center; font-weight: bolder;">Bwd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Description</strong></td>
      <td style="width: 25%; height: 15px;">Resets the joint angle to the closest value with the shortest angular distance.</td>
      <td style="width: 25%; height: 15px;">Resets the joint angle based on the remainder when divided by 360°, i.e., <code>Angle % 360</code>.</td>
      <td style="width: 25%; height: 15px;">Resets the joint angle based on <code>360° - (Angle % 360)</code>.</td>
    </tr>
  </tbody>
</table>
</p>
<br>

# Output

* **Instructions** : Outputs an IndRMove instruction defined according to the specified input conditions.