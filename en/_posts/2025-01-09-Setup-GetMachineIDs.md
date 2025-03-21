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
lang: en
permalink: /en/setup/Setup-GetMachineIDs
translation_link: /setup/Setup-GetMachineIDs

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

🌐 [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* This is a component for extracting the MAC address of the PC where GERTY will be installed and used. Currently, the GERTY license has two dependency methods: MAC address and USB ID. 
* Users can fill out the provided form with their MAC address and send it to contact@b-at.kr via the link within the component.

<p align="center">  <img src="/assets/images/GetMachineIDs.png" align="center" width="32%"></p>

# Input
## Built-in Param | GERTY License:Send MACAddress

* **Trial Request Page** : A link to the website for filling out the license form.

<br>

# Output

* **MACAddress** : Outputs the user’s unique MAC address value.

<p align="center"><img src="/assets/images/GetmachineIDs_00.png" align="center" width="65%"></p>