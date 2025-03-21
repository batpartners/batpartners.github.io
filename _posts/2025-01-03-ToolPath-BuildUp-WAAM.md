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
lang: ko
permalink: /toolpath/ToolPath-BuildUp-WAAM/

translation_link: /en/toolpath/ToolPath-BuildUp-WAAM/
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

* 적층 데이터를 분석하여 WAAM 툴패스의 작성을 돕는 컴포넌트이다.

<p align="center"><img src="/assets/images/BuildupWAAM.png" align="center" width="32%"></p>

# Input

* **Deposition ToolPaths [DepositionToolPath/List]** : DepositionToolPath Data를 받는다.
* **Is Bottommost [Boolean]** : 바닥면부터 시작되는 WAAM 적층 툴패스 여부를 확인한다.

<br>

# Output

* **1st Shell Layers** : 첫 번째 적층 Layer를 추출한다.
* **1st Infill Layers** : 첫 번째 채움 Layer를 추출한다.
* **Other Shell Layers** : 다른 적층 Layer를 추출한다.
* **Other Infill Layers** : 다른 채움 Layer를 추출한다.