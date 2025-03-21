---
title: "ReadAndWriteMOCData"
layout: single
header:
  teaser: "/assets/images/ReadAndWriteMOCData.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils

translated: true
lang: ko
permalink: /controllerutils/ControllerUtils-ReadAndWriteMOCData

translation_link: /en/controllerutils/ControllerUtils-ReadAndWriteMOCData
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

* ReadAndWriteMOCData는 현재 컨트롤러에 연결된 가상 혹은 실제 포지셔너 축의 정보를 출력하는 컴포넌트이다.
<p align="center">  <img src="/assets/images/ReadAndWriteMOCData.png" align="center" width="32%"></p>

# Input

* **SystemID** : 로봇 컨트롤러 데이터를 입력받는다.
<br>

# Output

* **ARM1&PLATE1_Info** : 포지셔너의 ARM1과 PLATE1의 축 값을 출력한다.
* **PLATE_Pl** : 포지셔너의 작업대 평면 위치값을 출력한다.
* **ARM1_Pl** : 포지셔너의 ARM1 축 평면의 위치값을 출력한다.

<p align="center">  <img src="/assets/images/ReadAndWriteMOCData_01-1-768x272.png" align="center" width="90%"></p>

<br>

# How To Use

* 다음은 ReadAndWriteMOCData 컴포넌트 사용시 마주할 수 있는 예시이다.

<p align="center">  <img src="/assets/images/ReadAndWriteMOCData_02-1-768x184.png" align="center" width="90%"></p>