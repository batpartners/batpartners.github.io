---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/Robtarget.png"

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

:kr: [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

<p align="center">  <img src="/assets/images/DataTypes/RobTarget/Robtarget_comp.png" align="center" width="32%"></p>


# Description

* The **RobTarget (Robot Target) of the Positioner** is a component that defines the robot's position and additional axes. It utilizes user-defined **ToolPath Plane** data to generate **RobTarget** data.<br>  
**RobTarget On Positioner** is a data format used in **ABB RAPID Program** to define the movements of the robot and auxiliary axis equipment.<br>
It includes information such as the **position (Position) and orientation (Orientation) of the robot TCP (Tool Center Point)** along the planned trajectory, as well as the **angle data of the auxiliary axis**.<br> 

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
* **Split Start** : If the generated *RobTarget* consists of *two or more* items in a *List/DataTree*, the last *RobTarget* is separated and output through a dedicated *Output node*.

<figure>
  <img src="/assets/images/DataTypes/RobTarget/split Robtargets_exam.png" alt="split_RobT">
  <figcaption>The first and last 'RobTarget' in the 'RobTarget dataset' are separated and output individually.</figcaption>
</figure>
<br>

# Output

* **RobTargets** : The *ProgramData* of the *RobTargets* in each section is output. Then, this data is connected to the *Instructions*.
