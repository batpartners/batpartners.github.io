---
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/ArcData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType
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

용가재 조건(Weld schedule) 및 용접 모드에 따라, ArcData를 정의하는 컴포넌트이다.
ArcData는 아크 용접을 위한 ABB Arc Instruction에 활용되는, 기본적인 데이터 형식으로, SeamData 및 WeldData에 공통적으로 사용되는 조건 값을 담고 있는 서브 데이터로, 용가재별 프로그램 식별ID, 와이어 송급 속도, 전압, 전류 등의 정보를 저장한다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/ArcData.png" align="center" width="32%"></p>

# Input

* **Weld schedule [Int \ Item]** : 용접시스템의 용접 프로그램 식별 Number(ID)를 입력한다. Weld schedule에 따라 용접장비 내부에 프리셋되어있는 용접 모드가 결정된다. 사용자는 GERTY의 WeldProgram 컴포넌트를 이용하여, Weld Schedule을 선택/입력할 수 있다.
* ex) Fronius Arc Welder(TPS / TPSi 공통) 의 경우, - ABB Pendant에서 Program Mode 설정시, Synergic Number로 적용 - ABB Pendant에서 Job Mode 설정시, 용접기 내부 Job Number로 적용 GERTY에서는 기본적으로 Program모드를 사용하는 것으로 가정, WeldProgram(TPS/TPSi) 컴포넌트를 사용한다.

* **Weld mode [int \ item]** :
용접 시스템의 Weld Mode를 선택합니다. Weld Mode는 용접 장비 제조사마다 다른 파라미터로 적용될 수 있으므로, 각 용접 장비 메뉴얼을 따른다.
* Fronius TPS Arc Welder 의 경우,
  - 0 : Standard 모드 (시너직 넘버에 Standard 옵션이 있는경우)
  - 1 : Pulse 모드 (시너직 넘버에 Pulse 옵션이 있는경우)
  - 7 : CMT 모드 (시너직 넘버에 CMT 옵션이 있는경우

* Fronius TPSi Arc Welder 의 경우,
  - 0 : -
  - 1 : Arc Length Stabilizer 옵션 사용


<<<<<<< HEAD
## Built-in Param | Single Arc​
=======
## Built-in Param : Single Arc​
>>>>>>> 4807a259a11b6073cf6b56e331059845b90d5de8

용접 장비가 Single wire system인 경우, Single Arc Params만 셋팅한다.

* **Voltage [num \ Item]** : 전압(Voltage) 조건을 입력한다. ex) Fronius Arc Welder(TPS / TPSi 공통)의 경우, Voltage는 아크길이 조정(Arc Length Correction) 값(-10~10)에 해당함.
* **WireFeed [num \ Item]** : WireFeed 값을 m/min 단위 입력한다. 
* ex) Fronius Welder TPSi의 경우 WeldProgram(TPSi) 에서 선택한 Spec. 의 WireFeed 범위 내의 값이 들어가야, 실제 작성된 RAPID Program 실행중 파라미터 에러가 발생하지 않는다.

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2023/05/weldsched-arcdata-1-768x456.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/weldsched-arcdata-1-768x456.png"></a>
</figure>

* **Control [num \ Item]** : 특정 용접기에 적용되는 조정값. 용접 장비에 따라 적용되는 파라미터가 다름. 
* ex) Fronius Arc Welder(TPS / TPSi 공통)의 경우, 다이나믹/펄스 수정(Dynamic/Pulse Correction) 값(-10~10)으로 적용.
* **Current** : 용접 중 용접 전류. ex) Fronius의 경우 할당값 없음.

<br>

# Output

* **ArcData[ArcData \ Item]** : 입력된 Input 과 관련 설정값에 따라, 정의된 ArcData를 출력한다.
* **Code [Text \ Item]** : 정의된 ArcData 코드를 String으로 출력한다.
