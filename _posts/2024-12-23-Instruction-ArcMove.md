---
title: "ArcMove"

layout: single
header:
  teaser: "/assets/images/ArcMove.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: ko
permalink: /instruction/Instruction-ArcMove/

translation_link: /en/instruction/Instruction-ArcMove/
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

* ArcData를 사용해 로봇의 모션을 제어하는 컴포넌트이다. 따라서, 반드시 ArcData의 입력값을 갖는다.

<p align="center">  <img src="/assets/images/ArcMove.png" align="center" width="32%"></p>

# Input

* **RobTargets** : ArcMove를 적용할 RobTarget을 입력한다.
* **SeamData** : DataType에서 생성한 SeamData를 입력한다.
* **WeldData** : DataType에서 생성한 WeldData를 입력한다.

## arc Move | Built-in Params

* **Type** : 모션 동작의 유형을 선택한다. ArcL, ArcC.
* **Speed** : 로봇의 이동속도를 제어한다.
* **Zone** : 타켓 지점에 도달하는 정확도를 제어한다. fine값의 경우 stop position의 역할로 로봇의 등속도에 위반한 모션제어를 한다.
<br>

# Output

* **Instructions** : 입력된 Input에 따라 정의된 ArcMove Instructions을 출력한다.
