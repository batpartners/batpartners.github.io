---
title: "WorkbenchImporter"

layout: single
header:
  teaser: "/assets/images/WorkbenchImporter.png"

collection: RobotTool
entries_layout: grid
author_profile: true

categories:
  - RobotTool
  
translated: true
lang: en
permalink: /en/robottool/RobotTool-WorkbenchImporter/
translation_link: /robottool/RobotTool-WorkbenchImporter/

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

* This component is for loading tool information extracted through the Workbench Exporter. It includes official BAT tools and can also load user-defined tool information. 
The Workbench Importer component has two modes: "Get Workbench Data" and "Get Workbench Input Data." 
In the "Get Workbench Data" mode, it provides complete Workbench information, which can be used as a substitute for the Workbench component. In the "Get Workbench Input Data" mode, it provides editable information that can be combined with the Workbench component to utilize customized data.

<p align="center">  <img src="/assets/images/WorkbenchImporter.png" align="center" width="64%"></p>


# Built-in Param | Basic Params

* **Model** : GERTY retrieves the selected tool information by checking the list of tool information stored in the repository.

<br>

# Output

## Get Tool Data - Mode

* **Tool Data** : The entered tool name (Name), tool modeling (Mesh), flange (Base Plane), TCP, Mass, Centroid, and Inertia values are exported as Tool Data.

## Get Tool Data Input - Mode

* **Name [String]** : Exports the entered tool name.
* **Tool Geometry [Mesh]** : Exports the entered tool modeling (Mesh).
* **Base Plane [Plane]** : Exports the tool base plane that attaches to the robot's sixth flange.
* **TCP [Plane]** : Exports the Tool Center Plane (TCP) value of the tool.
* **Mass [Double]** : Exports the mass information of the tool.
* **Centeroid [Generic Number]** : Exports the tool's center of mass value (e.g., in the form of 0,0,0).
* **Inertia [Generic Number]** : Exports the tool's moment of inertia value (e.g., in the form of 0,0,0).