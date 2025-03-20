---
title: "GERTY Core"

layout: single
header:
  teaser: "/assets/images/GERTYCore.png"

collection: Core
entries_layout: grid
author_profile: true

categories:
  - Core

translated: true
lang: en
permalink: /en/core/Core-GERTY-Core/
translation_link: /core/Core-GERTY-Core/

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

* This is the GERTY Core component that includes specifications information for controlling ABB robots and positioners from robot components. It reads RobTarget and Robot Instruction data and outputs it as ProgramData.

<p align="center">  <img src="/assets/images/GERTYCore.png" align="center" width="32%"></p>

<br>

# Input

* **GERTY Robot [GERTY Robot / Item]** : Input the GERTY Robot object that includes specifications for controlling ABB robots, positioners, etc., from the Robot component.

* **ProgramData [ABB DataType / List]** : Input all ABB_DataType used in the instructions generated in the current template as a list. ProgramData serves as the data called by each instruction and the order is generally not critical.

* **Instructions [ABB Instructions / List]** :  Input the Motion/Action Instructions generated in the template as a list. These instructions relate to the coding of the Main Procedure section of the RAPID PROGRAM. They are directly scanned by the PP (Program Pointer) during execution and should be input in the order of the robot's operation sequence.

* **Sub_PROC. [ABB Procedure / Item]** : Define/input sets of instructions used repetitively in the Main Procedure as Sub Procedure Modules.

* **Config Option (Cfx =1) [Switch / Item]** : When True is input, it applies a value of 1 to the ConfigData's Cfx derived from inverse kinematic calculations during continuous operation from RobTarget Collection. This allows controlling the reversal of the sign of the 5th axis angle within the same operation.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/core_1.png" align="center" width="72%"></p>

* **Ignore Errors [Switch / Item]** : When True is input, all operational errors (Config Error, Singularity, Out of reach, Over angle) that occur are ignored. If any operational error occurs, the final code saving process in the Offline Code Solver component will not proceed. Therefore, based on the user's judgment, enabling Ignore Errors allows saving the code for errors that can be disregarded to a certain extent.

<br>

# Output

* **GERTY Solver [GERTY Solver / Item]** : Outputs the computed GERTY Solver object based on the entered conditions. The GERTY Solver includes rotation axis and angle information for robot and positioner equipment at each RobTarget position that constructs the ToolPath.

* **GERTY Code [GERTY Code / Item]** : Outputs the computed GERTY Code object based on the entered conditions. The GERTY Code includes declarations and assignments of ProgramData, as well as sequential writing information of Instruction codes.