---
title: "WeldData"

layout: single
header:
  teaser: "/assets/images/WeldData.PNG"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-WeldData/

translation_link: /en/datatype/DataType-WeldData/
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

* welddata는 아크가 형성되어 있는 용접 단계(weld phase) 동안 용접 동작을 제어하는 데 사용되는 컴포넌트이다.

<p align="center">  <img src="/assets/images/WeldData.PNG" align="center" width="40%"></p>

# Input

* **Weld Name** : WeldData 변수명을 설정한다.
* **Weld ArcData** : Weld ArcData를 연결한다.
* **WeaveData** : WeaveData를 연결한다.

## Built-in Param | Weld Phase Params

* **Weld Speed(mm/s)** : 속도를 설정한다.

<br>

# Output

* **WeldData** : 설정한 옵션 값을을 WeldData 값으로 출력한다.
* **Code** : 설정한 WeldData를 코드로 전환한 데이터로, 사용자는 실제 설정값을 사전에 확인할 수 있다.

