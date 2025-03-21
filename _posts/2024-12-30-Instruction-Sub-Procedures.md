---
title: "Sub Procedure"

layout: single
header:
  teaser: "/assets/images/SubPorcedure.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: ko
permalink: /instruction/Instruction-Sub-Procedures/

translation_link: /en/instruction/Instruction-Sub-Procedures/
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

* Sub Porcedures는 Main Procedures에 작성되는 신호 및 기타 모션이 반복적으로 수행될 경우, 해당 코드를 축약하여 호출 할 수 있도록 돕는다.

<p align="center">  <img src="/assets/images/SubPorcedure.png" align="center" width="32%"></p>

<br>

# Input

* **Name [Text]** : 호출 될 변수명을 입력한다.
* **Instructions** : 반복 수행하는 모션 코드를 입력한다.

<br>

# Output

* **Sub_Proc**. : 축약 된 코드를 Sub Procedure으로 출력한다.
