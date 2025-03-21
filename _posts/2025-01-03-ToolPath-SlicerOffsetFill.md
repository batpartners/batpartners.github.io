---
title: "SlicerOffsetFill"

layout: single
header:
  teaser: "/assets/images/SlicerOffsetFill.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-SlicerOffsetFill/

translation_link: /en/toolpath/ToolPath-SlicerOffsetFill/
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

* 적층 모델링의 내부 Shell을 채우는 툴패스를 생성하는 컴포넌트이다.
외곽 커브 형태의 옵셋(Offset)된 방식을 채택하여 채움을 결정한다.

<p align="center"><img src="/assets/images/SlicerOffsetFill.png" align="center" width="32%"></p>

# Input

* **GertyShellData [DataTree]** : 모델링을 적층 Shell Layer로 변환한 GERTYShellData를 입력한다.
* **Direction** : 채움 방향을 정방향/역방향으로 수정할 수 있다.

<p align="center"><img src="/assets/images/direction-1.png" align="center" width="70%"></p>

<br>

# Output

* **Infill ToolPaths** : 채움 툴패스(ToolPath)를 출력한다.
* **Infill Polyines** : 채움 레이어를 커브(Curve) 값으로 출력한다.