---
title: "Wait Time"

layout: single
header:
  teaser: "/assets/images/WaitTime.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: ko
permalink: /instruction/Instruction-Wait-Time/

translation_link: /en/instruction/Instruction-Wait-Time/
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

* 프로그램 실행 중 로봇의 동작을 잠시동안 멈추는 시간을 초 단위로 설정할 수 있는 WaitTime Instruction을 정의하는 컴포넌트이다.

<p align="center">  <img src="/assets/images/WaitTime.png" align="center" width="32%"></p>

<br>

# Input

* **Time [Double]**: 숫자형식(Double)의 값을 입력한다.

<br>

## Built-in Param | WaitTime

* **In Position [Boolean]** : 해당 Target Point 위치에 도달 후 지연한다.
* **Time(sec.)** : 지연할 초단위를 설정한다.

<br>

# Output

* **Instructions** : Instructions에 넣을 WaitTime Data로 출력합니다