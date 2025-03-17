---
title: "SeamData"

layout: single
header:
  teaser: "/assets/images/SeamData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType
  
translated: true
lang: en
permalink: /en/datatype/DataType-SeamData/
translation_link: /datatype/DataType-SeamData/

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

It is a component that defines SeamData using ArcData and related parameters. SeamData is used to control the start and end of welding. The welding process consists of four main phases: Ignition phase, Heating phase, Welding phase, and End phase. SeamData includes the ArcData for the Ignition, Heating, and End (Fill) phases, as well as the parameter values related to each phase.

<p align="center">  <img src="/assets/images/SeamData.png" align="center" width="32%"></p>

# Input

* **Name [text \ item]** : Enter the variable name for SeamData. The variable name cannot start with a number and must not duplicate any variable names currently used in other program data within the template.

* **Ign_ArcData [ArcData \ item]** : Enter the ArcData to be used in the Ignition Phase

* **Heat_ArcData [ArcData \ item]** : Enter the ArcData to be used in the Heating Phase.

* **End_ArcData [ArcData \ item]** : Enter the ArcData to be used in the End Phase (Filling).

<figure class="half">
    <a href="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"></a>
    <a href="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"></a>
</figure>

## Built-in Param | Ignition Phase Param

* **Purge Time [Num \ item]** : Purge Time is a parameter set in seconds (s) to fill the gas line and torch interior with shielding gas. The gas flow is initiated in advance by the Purge Time before reaching the welding start target, as programmed by the ArcLStart or ArcCStart instructions.
* **Preflow Time [Num \ item]** : Preflow Time is a parameter set in seconds (s) to pre-flow shielding gas over the weld material. The robot remains stationary at the welding start target for the duration of the set Preflow Time before the arc ignites.
* **Ignition move delay [Num \ item]** : Set the delay time in seconds (s) from when the arc stabilizes in the Ignition Phase to when the Heating Phase begins. During the Ignition move delay, the ignition-related reference values are valid.

## Built-in Param : Heat Phase Param​

* **Heat Speed [Num \ item]** : The welding speed during heating at the start of the Weld phase.

* **Heat Time [Num \ item]** : The duration of heating at the start of the Weld phase in seconds (sec). Heat Time is applied when Heat Distance and Heat Speed are set to 0; in other words, time-based settings can only be used if distance-based settings are not used.

* **Heat Distance [Num \ item]** : The distance from the start of the Weld phase over which the Heat data remains active.


## Built-in Param : Heat Phase Param​

* **Cool Time [Num \ item]** : The time in seconds (s) to close the Weld Phase process before other ending operations like crater-filling occur.
* **Fill Time [Num \ item]** : The crater-filling time in the Weld End Phase.
* **BBack Time [Num \ item]** : The time in seconds (s) for the wire to burn back when the wire feed stops. The BBack Time parameter is used to prevent the wire from sticking to the tip or bead when the MIG/MAG welding process shuts down.
* **RBack Time [Num \ item]** : The time in seconds (s) for the wire to roll back when the welding equipment shuts down. The RBack Time parameter is used to prevent the wire from sticking to the tip or bead when the TIG welding process shuts down.
* **Postflow Time [Num \ item]** : The time in seconds (s) for shielding gas to continue flowing after the End Phase. The Postflow Time is used to prevent oxidation of the wire and weld area during the cooling process through the use of shielding gas.

<br>

# Output

* **SeamData [SeamData \ item]** : Outputs the defined SeamData based on the input and related settings.
* **Code [Text \ Item]** : Outputs the defined SeamData code as a string.
