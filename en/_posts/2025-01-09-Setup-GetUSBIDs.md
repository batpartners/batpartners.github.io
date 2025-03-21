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

translated: true
lang: en
permalink: /en/setup/Setup-GetUSBIDs
translation_link: /setup/Setup-GetUSBIDs

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:kr: [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* GetUSBIDs issues a license based on the MAC address associated with the USB device, rather than the MAC address of the user’s local PC. 
* Unlike licenses tied to a specific PC, this allows GERTY to be used on different PCs as long as the USB device is connected.

<p align="center">  <img src="/assets/images/GetUSBIDs.png" align="center" width="32%"></p>

# Input
## Built-in Param | GERTY License:user information

* **Refresh** : Updates the status of the license.

<br>

# Output

* **USBInfo** : Retrieves information about the USB devices connected to the PC.
* **USBID** : Fetches the unique identifier of the USB device.
