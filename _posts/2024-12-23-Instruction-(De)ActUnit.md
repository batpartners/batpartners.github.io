---
layout: single
header:
<<<<<<< HEAD
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/DeActUnit_1.png"
=======
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/Move_2.png"
>>>>>>> 4807a259a11b6073cf6b56e331059845b90d5de8

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction
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

<<<<<<< HEAD
* (De)ActUnit은 로봇 개체(Unit)의 활성화(Activate) 여부를 정의하는 instruction 컴포넌트이다.
* 로봇 개체(Unit)는 2가지 이상의 로봇이나 부가축 장비를 하나의 컨트롤러에서 제어하는 경우, 각 장치의 단위를 의미한다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/DeActUnit_1.png" align="center" width="32%"></p>

# Input

* **MechUnit [Text]**: 시스템에 정의된 로봇 또는 부가축 장치의 이름을 입력한다. 기본값: STN1

## Built-in Param | AccSet

* **Activate [Boolean]** : True가 입력된 경우, ActUnit 인스트럭션이 정의된다. False 가 입력된 경우, DeActUnit 인스트럭션이 정의된다. (기본값 True.)

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/06/deactUnit_6.gif" align="center" width="72%"></p>

<br>

# Output

* **Instructions** : 정의된 (De)ActUnit Instruction을 출력한다.
=======
TCP 움직임을 위해, RobTarget의 데이터를 받아 Move Instruction을 정의하는 컴포넌트이다. 각 타겟들의 움직임은 Type, Speed, Zone 옵션들로 설정할 수 있다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/Move_2.png" align="center" width="32%"></p>

# Input

* **RobTargets** : RobTargets의 데이터를 받는다.

## Built-in Param : Move

* **MoveJ** : Move Joint로, 로봇이 해석한 최적의 자세인 정기구학으로 읽어 들어 Target Plane에 도달한다.
* **MoveL** : Move Leaner로, 사용자가 정의한 로봇의 자세에서 Target Plane을 역기구학으로 읽어 들어 최단거리를 찾아 도달한다.
* **Speed** : RobTarget에 도달하는 속도(Velocity)를 mm/s단위로 설정한다.
* **Zone** : Target Point를 중심으로 한 반경 범위로, 다음 Target Point로 이동시, zone값에 비례한 Radius크기 만큼 Filet하여 움직임을 제어한다. Fine을 정확하게 해당 포인트를 지나쳐야 하되, 로봇의 등속 움직임에 영향을 미칠 수 있다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/07/Move_gif_confirm-min.gif" align="center" width="72%"></p>

# Output

* **Instructions** : 입력된 Input에 따라 정의된 Move Instructions을 출력합니다
>>>>>>> 4807a259a11b6073cf6b56e331059845b90d5de8
