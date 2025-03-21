---
title: "ToolPathPartition"
layout: single
header:
  teaser: "/assets/images/toolpathpartition.png"

collection: Utils
entries_layout: grid
author_profile: true

categories:
  - Utils

translated: true
lang: en
permalink: /en/utils/Utils-ToolPathPartition/
translation_link: /utils/Utils-ToolPathPartition/

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

* The ToolPathsPartition is a component that allows different conditions to be set for the start and end points. The length of the settings for the start and end points cannot exceed the total length of the layer. If the settings exceed this length, the values for each respective point will be reset and output as percentages.

<p align="center">  <img src="/assets/images/toolpathpartition.png" align="center" width="32%"></p>

# Input

* **TargetPlanes[Plane]** : Connects the major paths of the previous results’ TargetPlanes.

## Built-in Param | Partition

* **Start(mm)** : Determines the partition distance (mm) from the start point.  
* **End(mm)** : Determines the partition distance (mm) from the end point.  
* **Substitution(%)** : If the distance value settings exceed the actual length of the distance, the partition for the respective point can be set as a percentage.

<br>

# Output

* **Targets** : Outputs the target planes divided by partitions.  
* **Index** : Outputs the indexes of the start and end points for the partitioned sections. 
* **Domain** : Outputs the domains of each layer.
