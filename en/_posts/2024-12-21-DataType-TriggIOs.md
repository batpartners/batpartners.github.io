---
title: "TriggIOs"

layout: single
header:
  teaser: "/assets/images/TriggIOs.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-TriggIOs/

translation_link: /datatype/DataType-TriggIOs/
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

* The TriggIOs component is used to replace specific IO signals with user-defined values based on its internal IOData configuration.
triggios is used to define conditions and actions for setting a digital output signal, a group of digital output signals, or an analog output signal at a fixed position along the robot’s movement path.

<p align="center">  <img src="/assets/images/TriggIOs.png" align="center" width="27%"></p>

# Input

* **Name [String]** : Specifies the name of the signal. (e.g., ExtrudeON, ExtrudeOFF)
* **IOs** : Connects the signal to a unique I/O identifier defined by the user.

<p align="center">  <img src="/assets/images/TriggIOstemplate.png" align="center" width="80%"></p>

<br>

# Output

* **TriggIOs** : Outputs the configured signal data as `TriggIOs` values, which are then connected to the `TriggIOMove` component.
