---
title: "WobjData"
layout: single
header:
  teaser: "/assets/images/04_WobjData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WobjData/

translation_link: /en/datatype/DataType-WobjData/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description
Defines an ABB Work Object (Workpiece Coordinate System). This component specifies the User Frame (`uframe`), which defines the local coordinate system of the workstation relative to the World Coordinate System, and the Object Frame (`oframe`). It supports toggling between two modes via a right-click context menu: `Movable` (Work Object synchronized with an external axis) and `Fixed` (Standard stationary Work Object).

<p align="center">  <img src="/assets/images/2_WobjData.png" align="center" width="32%"></p>


# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| *Name* | Text | Defines the variable name for the `UserFrame`. |
| *UserFrame* | Plane | Sets the Base Plane for the coordinate system. |

## | Flexible Options

| Name | Type | Description |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Redefines the `Target Plane` as a reference plane at a fixed/stationary position. |
| *Movable WobjData* | - | Redefines the `Target Plane` as a reference plane at a movable/dynamic position. |


# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **WobjData** | WobjData | Outputs the defined `WobjData` structure. |