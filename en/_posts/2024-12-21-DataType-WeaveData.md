---
title: "WeaveData"

layout: single
header:
  teaser: "/assets/images/weavedata.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-WeaveData/

translation_link: /datatype/DataType-WeaveData/
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

* weavedata is used to define all weaving operations performed during arc welding.

<p align="center"><img src="/assets/images/weavedata.png" align="center" width="32%"></p>

# Input

* **Name** : Sets the variable name for the WeaveData.

## Built-in Param | WeaveData

* **Shape** : Sets the welding pattern. Available options are: `None`, `ZigZag`, `V-Shaped`, `Triangular`, and `Circular`.
<p align="center"><img src="/assets/images/ArcShape.png" align="center" width="72%"></p>

* **Type**: Specifies the type of welding weave. Available options are `Geometric`, `Wrist`, `Rapid_1`, and `Rapid_2`.  
  - *Geometric*: Geometric weaving using all robot axes.  
  - *Wrist*: Wrist weaving using only the wrist joints.  
  - *Rapid_1*: Rapid weaving using axes 1, 2, and 3.  
  - *Rapid_2*: Rapid weaving using axes 4, 5, and 6.

* **Length(mm)** : The `weave_length` component is defined as the length of one weaving cycle during the weld phase for weaving types 0 and 1.
<p align="center"><img src="/assets/images/weave_length.PNG" align="center" width="72%"></p>

* **Width(mm)** : Width refers to the span of the weaving cycle and is used to define the amplitude of the weave.
<p align="center"><img src="/assets/images/weave_width.PNG" align="center" width="72%"></p>

* **Height(mm)** : Height refers to the lift height of the robot during weaving and is used to define the vertical displacement of the weave.
<p align="center"><img src="/assets/images/weave_height.PNG" align="center" width="72%"></p>

<br>

# Output

* **WeaveData**: Outputs the configured welding weave settings as a *WeaveData* object.  
* **Code**: Converts the configured weave data into a code representation, allowing users to preview the actual welding parameters in advance.
