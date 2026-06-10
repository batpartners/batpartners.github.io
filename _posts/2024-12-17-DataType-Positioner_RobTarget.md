---
title: "Positioner RobTarget"
layout: single
header:
  teaser: "/assets/images/positioner_dynamic_00.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-Positioner_RobTarget/

translation_link: /en/datatype/DataType-Positioner_RobTarget/

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

포지셔너 전용 RobTarget을 기반으로, 사용자가 정의한 포지셔너 RAPID 코드를 작성할 수 있도록 지원합니다. 우클릭 컨텍스트 메뉴로 Dynamic, Static 모드 전환이 가능합니다.

<p align="center">  <img src="/assets/images/1_Positioner_Robtarget.png" align="center" width="32%"></p>
<p align="center">  <img src="/assets/images/positioner_static.png" align="center" width="32%"></p>
<p align="center">  <img src="/assets/images/1_Positioner_Robtarget.png" align="center" width="32%"></p>
<p align="center">  <img src="/assets/images/01_robtarget.png" align="center" width="32%"></p>


# | 입력(Inputs)
## Dynamic 모드

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Positioner | Positioner | ABB Positioner |
| Target Planes | Plane | RobTarget으로 변환할 평면 |
| Z Rotation | Angle | RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도) |
| Target Base | Plane | 입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의. |
| WobjData | WobjData | ABB 작업 평면 좌표계 |


## Static 모드

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| Positioner | Positioner | ABB Positioner |
| Target Planes | Plane | RobTarget으로 변환할 평면 |
| Z Rotation | Angle | RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도) |
| Target Base | Plane | 입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의. |
| Reference Plane | Plane | Static 모드에서 포지셔너 정위(Orientation)를 위한 기준평면 |
| WobjData | WobjData | ABB 작업 평면 좌표계 |

<p align="center"> 
<video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"><figcaption>Top View</figcaption>
</video></p>

## | 필수 파라미터 (Required Parameter)

*	RobTarget
  *	Name : 생성할 RobTarget 변수의 명칭을 정의합니다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용됩니다.
*	Output
  * Split Start : 입력 데이터 TargetPlane의 각 브랜치(Branch) 내 첫 번째 인덱스(First Index)에 해당하는 데이터를 추출하여 출력합니다.
  * Split End : 입력 데이터 TargetPlane의 각 브랜치(Branch) 내 마지막 인덱스(Last Index)에 해당하는 데이터를 추출하여 출력합니다.

# | 출력(Outputs)

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| RobTargets | RobTarget | ABB Rapid RobTargets 코드 출력 |

<p align="center"> 
<video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center">
</video>
</p>