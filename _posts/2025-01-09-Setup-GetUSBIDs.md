---
title: "GERTYLicense"
layout: single
header:
  teaser: "/assets/images/GetUSBIDs.png"

collection: Setup
entries_layout: grid
author_profile: true

categories:
  - Setup
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---
# Description

* GetUSBIDs는 사용자의 로컬 PC에 귀속된 MAC주소가 아닌 USB에 귀속된 MAC주소를 사용하여 라이센스를 발급한다.
* PC에 귀속된 라이센스와 달리 PC가 달라져도 USB를 연결하여 GERTY를 사용할 수 있다.

<p align="center">  <img src="/assets/images/GetUSBIDs.png" align="center" width="32%"></p>

# Built-in Param | user information

* **Refresh** : 해당 라이센스 상태를 업데이트 한다.

<br>

# Output

* **USBInfo** : PC에 연결된 USB의 정보를 가져온다. 
* **USBID** : USB의 고유 주소를 불러온다. 
