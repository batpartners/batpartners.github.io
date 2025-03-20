---
title: "FlyByBranch"

layout: single
header:
  teaser: "/assets/images/FlyByPlane.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-FlyByBranch/
translation_link: /toolpath/ToolPath-FlyByBranch/

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

* It generates new movement paths (FlyBy Targets or FlyBy ToolPath) that pass between each branch of the input Robot TCP main path (Target Plane Input) DataTree. The FlyBy component essentially uses the last plane of the adjacent Branch[i] and the first plane of Branch[i+1] in the input Target Plane DataTree to define new FlyBy Target Planes at a user-specified distance.

<p align="center">  <img src="/assets/images/FlyByPlane.png" align="center" width="32%"></p>

<br>

# Input

* **TargetPlanes [Plane/DataTree]** : Input the Target Planes corresponding to the TCP main path to apply FlyBy Targets.

<p align="center"><img src="/assets/images/FlyByBranch-768x607.png" align="center" width="80%"></p>

## Built in param | Basic Params
  
  * **Approaching Dir.** : This refers to the direction in which the last FlyBy Plane of the generated movement path enters the main path. Specifically, it indicates the direction in which the position of the FlyBy Plane just before entering the main path (from the first Plane of each Branch in the Target Planes input) is displaced.
  * **Leaving Dir.** : This defines the direction of departure after completing the main path. It refers to the direction in which the first FlyBy Plane of the generated movement path exits from the main path. In other words, it indicates the direction in which the position of the FlyBy Plane exiting (from the last Plane of each Branch in the Target Planes input) is displaced.

<div className="multi-headings" align="center">
  <table style="border-collapse: collapse: width: 51 %; height: 600px;">
    <thead>
      <tr>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Motion Dir.</th>
        <td style="width: 45%; height: 20px;">To smoothly enter in the direction of the main path, the FlyBy Plane just before entry is offset. In this option, the direction of progress along the main path refers to the vector pointing from the origin of the first Plane to the origin of the second Plane in the path. If the main path consists of a single Target Plane in a Branch, the Z Axis condition applies, entering in the direction of the Z-axis of the first TargetPlane. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Z_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the Z-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Y_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the Y-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">X_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the X-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Z_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative Z-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Y_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative Y-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative X_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative X-axis of the first Target Plane of the main path.</td>
      </tr>
    </tbody>
  </table>
</div>

<br>

  * **Approaching Dist.(mm)** : Determines the distance (in millimeters) for the movement before entering the main path. This means the distance by which the last FlyBy Plane just before entering the main path is offset.
  * **Leaving Dist.(mm)** : Determines the distance (in millimeters) for the movement after leaving the main path. This means the distance by which the first FlyBy Plane just after leaving the main path is offset.
  * **Target Count [int]**: Input the total number of FlyBy Planes to construct the movement paths (FlyBy ToolPath) between the main paths.

<p align="center"><img src="/assets/images/flyby-768x398.png" align="center" width="80%"></p>
<br>

# Output

* **Fly-by Targets[Plane / DataTree]** : Converts the results of movement and evasion paths into an even-numbered Branch DataTree. Based on the input conditions, it outputs the generated movement paths in DataTree format. The FlyBy Targets Output includes FlyBy Planes corresponding to the initial entry and final exit from the main path, resulting in one more Branch than the number of Branches in the Target Planes Input. After assigning movement path instructions, the DataTree will consist of even-numbered Paths starting with [0], [2], [4], etc., facilitating easy merging of instructions and data for the main path.