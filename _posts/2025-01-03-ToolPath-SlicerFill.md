---
title: "SlicerFill"

layout: single
header:
  teaser: "/assets/images/SlicerFill.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-SlicerFill/

translation_link: /en/toolpath/ToolPath-SlicerFill/
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:us_outlying_islands: [EN]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* 적층 모델링의 내부 Shell을 채우는 툴패스를 생성하는 컴포넌트이다.

<p align="center">  <img src="/assets/images/SlicerFill.png" align="center" width="32%"></p>

# Input

* **GertyShellData [DataTree]**: 모델링을 적층 Shell Layer로 변환한 GERTYShellData를 입력한다.

## Built-in Param | Pattern Params

* **Int-infill Pattern** : Internal infill 툴패스의 채움 패턴을 정의한다. Zigzag, Rectangle, Triangle의 옵션을 선택한다. 기본 값은 Rectangle이다.
* **Ext-infill Pattern** :  Zigzag, Rectangle, Triangle 3가지의 채움 패턴을 정의한다. 기본 값은 Rectangle이다.

## Built-in Param | Slicing Params

* **Top Layer Count** : 윗 채움 레이어 개수를 정한다.
* **Bottom Layer Count** : 아래 채움 레이어 개수를 정한다.
* **Gap** : 외곽선와 채움 사이의 간격을 설정한다.(mm)
* **Int Infill Amount** : 속채움 양을 설정한다.

<br>

# Output

* **Deposition ToolPaths** : 속 채움 적층 툴 패스를 내보낸다.
* **Infill Polylines** : 속 채움 적층 툴패스 커브를 내보낸다.