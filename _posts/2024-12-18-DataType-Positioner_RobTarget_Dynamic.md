---
title: "Positioner RobTarget (Dynamic)"
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
permalink: /datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Dynamic/
translation_link: /en/datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Dynamic/

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

---

# | 입력(Inputs)

## Dynamic 모드

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Positioner** | Positioner | ABB Positioner |
| **Target Planes** | Plane | RobTarget으로 변환할 평면 |
| **Z Rotation** | Angle | RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도) |
| **Target Base** | Plane | 입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의. |
| **WobjData** | WobjData | ABB 작업 평면 좌표계 |

<p align="center"> 
  <video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
  <sub style="display: block; text-align: center; color: #666;">Top View Execution</sub>
</p>

---

# | 내부 내장 파라미터 (Built-in Parameters)

컴포넌트 하단의 세부 파라미터 설정을 통해 변수 이름을 지정하거나 출력 데이터의 구조를 동적으로 제어할 수 있습니다.

<p align="center">
  <img src="/assets/images/1_Positioner_Robtarget.png" width="35%" style="margin-right: 10px;" alt="Default Mode">
  <img src="/assets/images/1_Positioner_Robtarget_2.png" width="35%" alt="Toggled Mode">
</p>
<sub style="display: block; text-align: center; color: #666; margin-top: -10px;">왼쪽: 기본 상태 (토글 비활성화) / 오른쪽: Split 토글 활성화 상태</sub>

> ### ** RobTarget 그룹**
> * **Name** : 생성할 `RobTarget` 변수의 명칭을 정의합니다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용됩니다.

***

> ### ** Output 옵션 (동적 아웃풋 스위치)**
> 하단의 토글 스위치를 켜고 끔에 따라 **`| 출력(Outputs)`** 단의 파라미터 구성이 실시간으로 변경됩니다.
> * **Split Start** (`False` / `True`) : 스위치를 활성화하면, 입력 데이터 `TargetPlane` 각 브랜치(Branch) 내 첫 번째 인덱스 데이터를 추출하는 **`Start Target`** 출력단이 생성됩니다.
> * **Split End** (`False` / `True`) : 스위치를 활성화하면, 입력 데이터 `TargetPlane` 각 브랜치(Branch) 내 마지막 인덱스 데이터를 추출하는 **`End Target`** 출력단이 생성됩니다.

---

# | 출력(Outputs)

## 1. 기본 출력 (Default)
토글 스위치가 모두 꺼져 있을 때의 기본 출력 구조입니다.

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **RobTargets** | RobTarget | 입력된 모든 평면에 매칭되어 변환된 ABB Rapid RobTargets 전체 코드 데이터 리스트를 출력합니다. |

## 2. 토글 활성화 시 확장 출력 (Conditional Outputs)
내부 파라미터 스위치 활성화 상태에 따라 아래의 출력단이 유기적으로 추가됩니다.

| 이름 | 타입 | 연결된 스위치 조건 | 설명 |
| :--- | :--- | :--- | :--- |
| **Start Target** | RobTarget | `Split Start` ON 🔵 | 입력 데이터 패스의 시작 지점(첫 번째 인덱스)에 해당하는 데이터만 분리하여 출력합니다. |
| **End Target** | RobTarget | `Split End` ON 🔵 | 입력 데이터 패스의 끝 지점(마지막 인덱스)에 해당하는 데이터만 분리하여 출력합니다. |

<p align="center"> 
  <video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
</p>