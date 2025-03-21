---
title: "IOData"

layout: single
header:
  teaser: "/assets/images/05_IO_Data.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-IOData/
translation_link: /datatype/DataType-IOData/

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

* It is a component that can define IO Data (Input/Output Data), i.e., signal data.

<p align="center">  <img src="/assets/images/05_IO_Data.png" align="center" width="32%"></p>

# Input

* **Signal [Text]** : Enter the variable name of the signal data.
* **Value [double]** : Specify the data value of the signal data.


## Built-in Param | Single Arc​

* **Used [Boolean]**: Check whether the signal is used. (Default: True)
* **Start [Boolean]**: Set the start point of the signal. (Default: false = End point)
* **Distance(mm)** : Define the signal of the device in mm from the StartPoint/EndPoint.
* **Equip Lag(sec.)** : Define the signal of the device in seconds from the StartPoint/EndPoint.

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2023/05/IOData-768x250.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/IOData-768x250.png"></a>
</figure>

<br>

# Output

* **IO Data** : Outputs the defined IO Data.

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2024/07/0_flexpendant_signal_02.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/0_flexpendant_signal_02.png"></a>
</figure>