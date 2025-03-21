---
title: "SeamData"

layout: single
header:
  teaser: "/assets/images/SeamData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-SeamData/

translation_link: /en/datatype/DataType-SeamData/
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

* ArcData 및 관련 파라미터를 이용하여, SeamData를 정의하는 컴포넌트이다. 
SeamData는 용접의 시작과 끝을 제어하는데 사용되는 데이터이다. 용접 단계는 크게, Ignition phase - Heating phase- Welding phase- End phase의 4단계로 구성된다. SeamData는 시작 및 종료 단계에 해당하는 Ignition과 Heating , 그리고 End(Fill) 단계의 ArcData와 함께, 각 단계에 관련된 파라미터 값들을 포함하고 있다.

<p align="center">  <img src="/assets/images/SeamData.png" align="center" width="32%"></p>

# Input

* **Name [text/item]** : SeamData의 변수명을 입력한다. 변수명은 숫자로 시작할수 없으며, 현재 템플릿에서 사용중인 다른 프로그램 데이터와 중복된 변수명은 할당할 수 없다.
* **Ign_ArcData [ArcData/item]** : Ignition Phase에서 사용될 ArcData를 입력한다.
* **Heat_ArcData [ArcData/item]** : Heat Phase에서 사용될 ArcData를 입력한다.
* **End_ArcData [ArcData/item]** : End Phase (Filling)에서 사용될 ArcData를 입력한다.

<figure class="half">
    <a href="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"></a>
    <a href="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1.png"></a>
</figure>

## Built-in Param | Ignition Phase Param

* **Purge Time [Num/item]** : PurgeTime은 가스 라인과 토치 내부를 보호가스로 채우기 위한 시간을 초(s.)단위로 설정하는 파라미터. ArcLStart 또는 ArcCStart 인스트럭션에 의해 프로그램된, 특정자세에서 용접 시작 타겟에 도달하는 시점보다 PurgeTime 시간만큼 앞선 시점부터, 미리 가스 흐름을 인가시키게 된다.
* **Preflow Time [Num/item]** : PreflowTime은 용접 모재에 보호가스를 미리 흘려보내기 위한 시간을 초(s.)단위로 설정하는 파라미터. 로봇은 아크가 발화되기 전에 설정된 preflowtime 동안 용접 시작 타겟에서 정지한 상태를 유지한다.
* **Ignition move delay [Num/item]** : Ignition phase에서 Arc가 안정되는 시점부터, Heating Phase가 시작될 때까지 딜레이를 초(s)단위로 설정한다. Ignition movement delay 동안 Ignition 관련 참조값들이 유효하다.


## Built-in Param : Heat Phase Param​

* **Heat Speed [Num/item]** : Weld phase 시작점에서 Heating하는 동안 용접속도.
* **Heat Time [Num/item]** : Weld phase 시작점에서 Heating하는 시간(sec.). Heat Time은 Heat distance와 Heat speed가 0일때 적용됨, 즉, 거리 기준 설정값을 사용하지 않아야만,시간 기반 설정을 사용 가능하다.
* **Heat Distance [Num/item]** : Weld phase 시작점에서 Heat data가 활성화되어야 하는 구간 거리.


## Built-in Param : Heat Phase Param​

* **Cool Time [Num/item]** : Crater-filling 과 같은 다른 종료 작업이 일어나기 전, Weld Phase 프로세스가 닫히는 시간(초단위).
* **Fill Time [Num/item]** : 용접 End Phase에서 Crater-filling 시간.
* **BBack Time [Num/item]** : 와이어 공급이 멈출때, 와이어가 번백되는 시간(초). BBackTime 파라미터는 MIG/MAG 용접 프로세스가 꺼질때, 와이어가 팁 또는 비드에 붙는 현상을 방지하기 위해 사용.
* **RBack Time [Num/item]** : 용접장비가 꺼질때, 냉각된 와이어가 롤백되는 시간(초). RBackTime 파라미터는 TIG 용접 프로세스가 꺼질때, 와이어가 팁 또는 비드에 붙는 현상을 방지하기 위해 사용.
* **Postflow Time [Num/item]** : End Phase가 끝난 이후 보호가스를 내뿜는 시간을 초단위로 설정. Postflow Time은 보호가스를 통해, 냉각과정에서 와이어와 용접부의 산화를 방지하기 위해 사용.


<br>

# Output

* **SeamData [SeamData/item]** : Input 과 관련 설정값에 따라, 정의된 SeamData를 출력한다.
* **Code [Text/Item]** : 정의된 SeamData 코드를 String으로 출력한다.
