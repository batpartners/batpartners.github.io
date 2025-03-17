---
title: "ToolImporter"

layout: single
header:
  teaser: "/assets/images/toolimporter.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-ToolImporter/
translation_link: /datatype/DataType-ToolImporter/

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

The Tool Importer component has "Get Tool Data" mode and "Get Tool Data Input" mode. In the former, the complete tool information can be used as the Tool Data input value for the Robot component. In the latter, the incomplete tool information can be used as the input value for the Tool Data component.

<p align="center">  <img src="/assets/images/toolimporter.png" align="center" width="72%"></p>

# Built-in Param | Basic Params​

* **Model** : Checks the tool information list in the GERTY repository and loads the selected tool information.

# Output

> The ToolImporter component has two mode options: GET TOOL DATA and GET TOOL DATA INPUT.
> In GET TOOL DATA mode, it can be directly connected to the robot component for use.
> In GET TOOL DATA INPUT mode, it can be used by modifying the tool status.

## 1. Get Tool Data​

* **Tool Data** : Exports the entered tool name (Name), tool modeling (Mesh), flange (Base Plane), TCP, Mass, Centroid, and Inertia values as Tool Data.

<figure>
<a href="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_01.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_01.png"></a>
</figure>

## 2. Get Tool Data Input​

* **Name [String]** : Exports the entered tool name.
* **Tool Geometry [Mesh]** : Exports the entered tool modeling (Mesh).
* **Base Plane [Plane]** : Exports the tool base plane that is mounted on the robot's 6th flange.
* **TCP [Plane]** : Exports the Tool Center Point (TCP) value of the tool.
* **Mass [Double]** : Exports the mass information of the tool.
* **Centeroid [Generic Number]** : Exports the center of mass value of the tool (e.g., in the form of 0,0,0).
* **Inertia [Generic Number]** : Exports the moment of inertia value of the tool (e.g., in the form of 0,0,0).

<figure>
<a href="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_02.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/2_ToolImporter_02.png"></a>
</figure>