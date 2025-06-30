---
title: "IOData"

layout: single
header:
  teaser: "/assets/images/IOData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-IOData/

translation_link: /en/datatype/DataType-IOData/
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

* IO Data(Input/Output Data) 즉, 신호데이터를 정의할 수 있는 컴포넌트이다.

<p align="center">  <img src="/assets/images/IOData.png" align="center" width="32%"></p>


# Input

* **Signal [Text]** : 신호데이터의 변수명을 입력한다.
* **DO Value [double]** : 신호데이터의 데이터 값을 지정한다.


## Built-in Param | Single Arc​

* **Type of Signal**: IO 타입(Digital Output, Group Output, Analog Output)을 선택한다. (기본값 : Digital Output)
* **Used [Boolean]**: 해당 신호의 사용여부를 확인한다. (기본값 : True)
* **Start [Boolean]**: 해당 신호의 시작 포인트를 설정한다. (기본값 : false = End point)
* **Distance(mm)** : 장치의 신호를 StartPoint/EndPoint 지점으로부터 mm거리 단위로 정의할 수 있습니다.
* **Equip Lag(sec.)** : 장치의 신호를 StartPoint/EndPoint 지점으로부터 초 단위로 정의할 수 있습니다.

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2023/05/IOData-768x250.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/IOData-768x250.png"></a>
</figure>

<br>

# Output

* **IO Data** : 정의한 IO Data를 출력한다.
