---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/01_robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-RobTarget/
translation_link: /datatype/DataType-RobTarget/

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

<p align="center">  <img src="/assets/images/01_robtarget.png" align="center" width="32%"></p>


# Description

* RobTarget is a component used to define a robot’s position. It generates RobTarget data based on user-defined ToolPath Plane inputs.
A RobTarget contains information such as the position and orientation of the robot's TCP (Tool Center Point) along a planned motion path<br> 
Reference : ABB RAPID Instructions Documentation (Document ID: 3HAC050917-001)

# Input

* **Name [Text/Item]**: Enter the base variable name for the RobTarget to be created. *(Default: “P”)*  
  - The component assigns names to the generated RobTargets based on the number of input Plane data, following the format: `"VariableName 0, VariableName 1, VariableName 2, …"`.

* **Plane [Plane/DataTree]**: Input the *Plane* to be converted into the *ABB RobTarget* format. *(Default: WorldXY)*  

* **Robot_Base [Plane/Item]**: Input the *Plane* to be converted into the *ABB RobTarget* format.  

* **Tilting Weight [Number/Item]**: Input the *Tilting Weight* to be converted into the *ABB RobTarget* format.

<figure>
  <img src="/assets/images/DataTypes/RobTarget/TiltingWeight_RobT.gif" alt="Tilting_RobT">
  <figcaption> Tilting</figcaption>
</figure>

* **Angle [Number/Item]** : The input *Plane* is uniformly rotated by the specified *Angle (Degree)* value and then applied to the *RobTarget*.
<figure>
  <img src="/assets/images/DataTypes/RobTarget/Set_Angle_RobT.gif" alt="Set_Angle_RobT">
  <figcaption> The first and last 'RobTarget' in the 'RobTarget dataset' are separated.</figcaption>
</figure>

* **WobjData [WObjData/Item]** : Input the *ABB WorkObject (WobjData)*, which represents the work coordinate system. The converted *RobTarget* is defined in relative coordinates based on the *User Frame* of the provided *WobjData*.
* **Chaining [Boolean/Item]** : If set to *True*, the relationship between the input *WobjData* and *RobTarget* is forcibly maintained. This means that if the *User Frame* defining the *WorkObject* is moved or rotated while *WobjData* is provided, the output *RobTarget* will also move or rotate accordingly, maintaining its relationship with *WobjData*.

## Built-in Param : Basic Params​
* **Split Start** : If the generated *RobTarget* consists of *two or more* items in a *List/DataTree*, the first *RobTarget* is separated and output through a dedicated *Output node*.
* **Split End** : If the generated *RobTarget* consists of *two or more* items in a *List/DataTree*, the last *RobTarget* is separated and output through a dedicated *Output node*.

<figure>
  <img src="/assets/images/DataTypes/RobTarget/split Robtargets_exam.png" alt="split_RobT">
  <figcaption>The first and last 'RobTarget' in the 'RobTarget dataset' are separated and output individually.</figcaption>
</figure>
<br>

# Output

* **RobTargets** : The *ProgramData* of the *RobTargets* in each section is output. Then, this data is connected to the *Instructions*.
