---
title: "ABBRobot"

layout: single
header:
  teaser: "/assets/images/ABBRobot.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool

translated: true
lang: en
permalink: /en/robottool/RobotTool-ABBRobot/
translation_link: /robottool/RobotTool-ABBRobot/

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

* A component used to manage ABB industrial robots. It allows users to select a specific robot model from 25 supported ABB types and apply the selected model to the simulation environment.

<p align="center">  <img src="/assets/images/ABBRobot.png" align="center" width="32%"></p>

# Input

* **Robot Base [Optional]** : This is the OrientPlane of the robot, with the default being the World Base Plane. 
* **Tool Data** : This takes the input value of ToolData. 
* **Positioner [Optional]** : This connects the additional axis robot data.

## ABB Robots | Built-in Params

* **Model** : Select the ABB industrial robot model. 
* **Display Colour** : Change the robot color.

<p align="center">  <img src="/assets/images/ABBrobot_adative_00.png" align="center" width="85%"></p>

# Output

* **GERTY Robot** : Outputs the configured robot information.
* **Joint Planes** : Outputs the robot axis information.
* **Mounting Plane** : Outputs the position value relative to the 6th axis or the Base Plane of the tool data for the ABB robot.
* **Tool Center Plane** : Outputs the TCP information of the tool mounted on the ABB robot.
