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
lang: en
permalink: /en/datatype/DataType-WobjData/
translation_link: /datatype/DataType-WobjData/

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

Defines an ABB Work Object (Workpiece Coordinate System). This component specifies the User Frame, which defines the local coordinate system of the workstation relative to the World Coordinate System, and the Object Frame. It supports toggling between two modes via a right-click context menu: `Movable` (Work Object synchronized with an external axis) and `Fixed` (Standard stationary Work Object).

<p align="center">  <img src="/assets/images/2_WobjData.png" align="center" width="32%"></p>


# | Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| *User Frame* | Plane | The plane used as the User Frame for the `WobjData`. |
| *Object Frame* | Plane | The plane used as the Object Frame for the `WobjData`. |
| *Override Wobj* | Plane | Overrides the component's output with the provided Work Object data (Optional). When connected, this data takes priority regardless of other inputs. |

## | Flexible Options

| Name | Type | Description |
| :--- | :--- | :--- |
| *Fixed WobjData* | - | Redefines the target plane as a reference plane at a fixed/stationary position. |
| *Movable WobjData* | - | Redefines the target plane as a reference plane at a movable/dynamic position. |


# | Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| **WobjData** | WobjData | Outputs the defined ABB `WobjData` structure. |