---
title: "BuildUp WAAM"

layout: single
header:
  teaser: "/assets/images/BuildupWAAM.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: en
permalink: /en/toolpath/ToolPath-BuildUp-WAAM/
translation_link: /toolpath/ToolPath-BuildUp-WAAM/

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

* Analyzes layered data to assist in creating WAAM ToolPaths.

<p align="center">  <img src="/assets/images/BuildupWAAM.png" align="center" width="32%"></p>

# Input

* **Deposition ToolPaths [DepositionToolPath / List]**: Receives DepositionToolPath data.
* **Is Bottommost [Boolean]**: Checks whether the WAAM deposition toolpaths start from the bottommost layer.

<br>

# Output

* **1st Shell Layers**: Extracts the first deposition layer.
* **1st Infill Layers**: Extracts the first infill layer.
* **Other Shell Layers**: Extracts the remaining deposition layers.
* **Other Infill Layers**: Extracts the remaining infill layers.