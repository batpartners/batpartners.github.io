---
title: "FlyByTree"

layout: single
header:
  teaser: "/assets/images/FlyByTree.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-FlyByTree/
translation_link: /toolpath/ToolPath-FlyByTree/

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

* This component generates new movement paths between branches of the input Robot TCP main path (Target Plane Input) DataTree. The FlyBy component essentially uses the last Plane of each main path Branch[i] and the first Plane of the adjacent main path Branch[i+1] to define new FlyBy Target Planes at distances specified by the user.

<p align="center"><img src="/assets/images/FlyByTree.png" align="center" width="32%"></p>

# Input

* **TargetPlanes0** : Connects the first main path TargetPlanes.
* **TargetPlanes1** : Connects the second main path TargetPlanes.

## Built-in Param | Basic Params

* **Approaching Dir.** : Specifies the direction in which the last FlyBy Plane of the generated movement path enters the main path. In other words, it indicates the direction in which the position of the FlyBy Plane just before entering the main path is offset from the first Plane of each Branch in the Target Planes input.
* **Leaving Dir.** : Defines the direction of departure after completing the main path. It refers to the direction in which the first FlyBy Plane of the generated movement path exits from the main path. Specifically, it indicates the direction in which the position of the FlyBy Plane exiting from the last Plane of each Branch in the Target Planes input is offset.

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
        <td style="width: 45%; height: 20px;"> To smoothly enter in the direction of the main path, offset the FlyBy Plane just before entry. In this option, the direction of progress along the main path refers to the vector pointing from the origin of the first Plane to the origin of the second Plane in the path. If the main path consists of a single Target Plane in a Branch, the Z Axis condition applies, entering in the direction of the Z-axis of the first TargetPlane. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Z_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the Z-axis of the first Target Plane of the main path. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Y_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the Y-axis of the first Target Plane of the main path.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">X_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the X-axis of the first Target Plane of the main path. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Z_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative Z-axis of the first Target Plane of the main path. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Y_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative Y-axis of the first Target Plane of the main path. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative X_Axis</th>
        <td style="width: 45%; height: 20px;"> Offset the FlyBy Plane just before entry to enter in the direction of the negative X-axis of the first Target Plane of the main path. </td>
      </tr>
    </tbody>
  </table>
</div>

* **Approaching Dist.(mm)** : Determines the distance (in millimeters) before entering the main path. This means the distance to offset the last FlyBy Plane just before entering the main path.
* **Leaving Dist.(mm)** : Determines the distance (in millimeters) after exiting the main path. This means the distance to offset the first FlyBy Plane just after leaving the main path.
* **Target Count [int]**: Input the total number of FlyBy Planes to construct the movement paths (FlyBy ToolPath) between the main paths.

## Built-in Param | Advanced Params

  Advanced Param is an option that determines the profile of the movement path. The profile of the movement path is defined based on the conditions selected by the user in Builtin Param: Basic. This profile blends the direction vectors in which the first and last FlyBy Planes deviate from the main path.

  * **Continuity** : Depending on the selected continuity condition, ensure that the origins of the generated FlyBy Planes lie on a linear or nonlinear curve. Default: Position (G0).
  
  `Continuity Description Reference: Rhinoceros Help - Continuity Description / Rhino 3D Modeling.`

<div className="multi-headings" align="center">
  <table style="border-collapse: collapse: width: 51 %; height: 340px;">
    <thead>
      <tr>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Position(G0)</th>
        <td style="width: 45%; height: 20px;"> The profile of the movement path adopts a Blend Curve with Position (G0) continuity, aligning only the positions of the first and last Plane origins of the movement path. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Tangency(G1)</th>
        <td style="width: 45%; height: 20px;"> The profile of the movement path adopts a Blend Curve with Tangency (G1) continuity, aligning the positions of the first and last Plane origins of the movement path along with tangents in the direction vectors offset from those positions. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Curvature(G2)</th>
        <td style="width: 45%; height: 20px;"> The profile of the movement path adopts a Blend Curve with Curvature (G2) continuity, aligning the positions of the first and last Plane origins of the movement path along with tangents in the direction vectors offset from those positions and having the same radius of curvature. </td>
      </tr>
    </tbody>
  </table>
</div>

<p align="center"><img src="/assets/images/Untitled-1-2-768x223.png" align="center" width="80%"></p>
<p align="center"><img src="/assets/images/Untitled-2-1-768x457.png" align="center" width="80%"></p>
<p align="center"><img src="/assets/images/Untitled-3-1-768x418.png" align="center" width="80%"></p>

  * **Bulge Start** : (For Tangency/Curvature conditions) Enter a value between 0 and 1 to edit the shape of the starting part of the movement path profile while maintaining continuity.
  * **Bulge End** : (For Tangency/Curvature conditions) Enter a value between 0 and 1 to edit the shape of the ending part of the movement path profile while maintaining continuity.

<br>

# Output

* **Fly-by Targets**: Converts the results of the movement and evasion paths into an even-branch DataTree. Based on the input conditions, it outputs the generated movement paths in DataTree format. The FlyBy Targets Output includes FlyBy Planes corresponding to the initial entry and final exit from the main path, resulting in one more Branch than the number of Branches in the Target Planes Input. Additionally, to facilitate the merging of instructions and data for the main path after assigning movement path instructions, the DataTree will have even-numbered Paths starting with [0], [2], [4], etc.