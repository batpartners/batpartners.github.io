---
title: "Move"

layout: single
header:
  teaser: "/assets/images/Move_2.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction
translated: true
lang: en
permalink: /en/instruction/Instruction-Move/
translation_link: /instruction/Instruction-Move/

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

To facilitate TCP movement, this component defines the Move Instruction by receiving RobTarget data. The movements for each target can be configured with Type, Speed, and Zone options.

<p align="center">  <img src="/assets/images/Move_2.png" align="center" width="32%"></p>

# Input

* **RobTargets** : Receives the data of RobTargets.

## Built-in Param | Move

* **MoveJ** : Move Joint, where the robot reaches the Target Plane in regular kinematics, interpreted as the optimal posture.
* **MoveL** : Move Linear, where the robot reaches the Target Plane in inverse kinematics from a user-defined posture, finding the shortest path.
* **Speed** : Sets the speed (velocity) in mm/s at which the RobTarget is reached.
* **Zone** : Specifies a radius around the Target Point. When moving to the next Target Point, the movement is controlled by filleting with a size proportional to the zone value. This ensures precise passage through the point, while potentially affecting the robot's constant speed motion.


<p align="center"> 
<video src="/assets/images/Move_gif_confirm-min_SHL.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>

# Output

* **Instructions** : Outputs the defined Move Instructions based on the entered Input.
