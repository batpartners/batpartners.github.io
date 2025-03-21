---
title: "GERTYLicense"
layout: single
header:
  teaser: "/assets/images/GetMachineIDs.png"

collection: Setup
entries_layout: grid
author_profile: true

categories:
  - Setup

translated: true
lang: ko
permalink: /setup/Setup-GetMachineIDs

translation_link: /en/setup/Setup-GetMachineIDs
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

* 거티를 설치하여 사용 예정인 PC의 고유 ID를 추출하는 컴포넌트로, 현재 거티 라이센스는 맥주소, 유에스비아이디(USBID) 2가지 종속 방식을 보유하고 있다.
* 사용자는 컴포넌트 내 링크를 통해, 사용자의 GetMachineIDs와 함께 제공하는 양식의 을 채워 contact@b-at.kr로 보낼 수 있다.

<p align="center">  <img src="/assets/images/GetMachineIDs.png" align="center" width="32%"></p>

# Input
## Built-in Param | GERTY License:Send MACAddress

* **Trial Request Page** : 라이센스 정보를 기재할 수 있는 양식 작성용 웹사이트 링크이다.

<br>

# Output

* **MACAddress** : 사용자의 고유 MACAddress 주소 값을 출력한다.

<p align="center"><img src="/assets/images/GetmachineIDs_00.png" align="center" width="65%"></p>