---
title: "Positioner RobTarget (Test)"
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
permalink: /datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Test/
translation_link: /en/datatype/DataType-Positioner_RobTarget/DataType-Positioner_RobTarget_Test/

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

<br>

---

# 🗂️ COMPONENT SPECIFICATION

> 💡 아래의 **각 탭(DESCRIPTION / DETAILS / REVIEWS)**을 클릭하시면 해당 단락의 상세 컴포넌트 명세서로 바로 전환됩니다.

<details open style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; margin-bottom: 10px; background-color: #fafafa;">
<summary style="font-size: 1.15em; font-weight: bold; cursor: pointer; color: #333; padding: 5px 0;">📑 DESCRIPTION (컴포넌트 개요 및 입력단)</summary>
<div style="margin-top: 15px; background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee;">

### | 입력(Inputs) : Dynamic 모드

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **Positioner** | Positioner | ABB Positioner |
| **Target Planes** | Plane | RobTarget으로 변환할 평면 |
| **Z Rotation** | Angle | RobTarget을 자기 자신의 Z축 기준으로 회전 (단위: 도) |
| **Target Base** | Plane | 입력된 Target Plane이 정의된 기준 평면. 입력된 Target Plane은 이 평면을 기준으로, Positioner의 Mounting Plane에 오리엔트 된 RobTarget을 정의. |
| **WobjData** | WobjData | ABB 작업 평면 좌표계 |

<p align="center" style="margin-top: 20px;"> 
  <video src="/assets/images/RobtargetPosition(Dynamic)_Top.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
  <sub style="display: block; text-align: center; color: #666;">Top View Execution</sub>
</p>

</div>
</details>

<details style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; margin-bottom: 10px; background-color: #fafafa;">
<summary style="font-size: 1.15em; font-weight: bold; cursor: pointer; color: #333; padding: 5px 0;">⚙️ DETAILS (내부 파라미터 및 동적 출력 구조)</summary>
<div style="margin-top: 15px; background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee;">

### | 내부 내장 파라미터 (Built-in Parameters)
컴포넌트 내부 하단의 Split 스위치 조작에 따라 우측 출력단(Outputs) 레이아웃이 연동되어 실시간으로 변경됩니다.

<p align="center">
  <img src="/assets/images/1_Positioner_RobTarget.png" width="38%" style="margin-right: 15px;" alt="Default Mode">
  <img src="/assets/images/1_Positioner_RobTarget_2.png" width="38%" alt="Toggled Mode">
</p>
<sub style="display: block; text-align: center; color: #666; margin-top: -5px; margin-bottom: 20px;">[UI 비교] 좌: 기본 상태 (토글 OFF) / 우: Split 토글 활성화 상태 (Outputs 노드 확장)</sub>

> #### **📦 RobTarget 변수 설정**
> * **Name** : 생성할 `RobTarget` 변수의 명칭을 정의합니다. 해당 변수는 로봇의 목표 위치 및 자세를 저장하는 고유 식별자로 사용됩니다.

***

> #### **🔄 Output 옵션 (동적 아웃풋 스위치 감지)**
> * **Split Start** (`False` ➔ `True`) : 스위치 활성화 시, 입력 패스의 첫 번째 인덱스를 출력하는 **`Start Target`** 노드가 우측 아웃풋단에 실시간으로 확장 오픈됩니다.
> * **Split End** (`False` ➔ `True`) : 스위치 활성화 시, 입력 패스의 마지막 인덱스를 출력하는 **`End Target`** 노드가 우측 아웃풋단에 실시간으로 확장 오픈됩니다.

</div>
</details>

<details style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; margin-bottom: 10px; background-color: #fafafa;">
<summary style="font-size: 1.15em; font-weight: bold; cursor: pointer; color: #333; padding: 5px 0;">📊 REVIEWS (최종 출력 데이터 분석)</summary>
<div style="margin-top: 15px; background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee;">

### | 출력(Outputs) : 스위치 조건별 데이터 명세

#### 1) 기본 출력 (Default)
* 내부 토글 스위치가 모두 꺼져 있을 때 생성되는 메인 데이터 포트입니다.

| 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| **RobTargets** | RobTarget | 입력 평면 전체 데이터 구조에 1:1 매칭되어 파싱된 ABB Rapid RobTargets 전체 코드 스트링 리스트를 반환합니다. |

#### 2) 스위치 활성화 시 조건부 확장 출력 (Conditional Outputs)
* 내부 스위치 컴포넌트의 토글 상태에 따라 추가 배열 형태로 활성화되는 출력 데이터 명세입니다.

| 이름 | 타입 | 활성화 트리거 스위치 | 데이터 설명 |
| :--- | :--- | :--- | :--- |
| **Start Target** | RobTarget | `Split Start` ▶ **ON** | 입력 타깃 패스의 첫 번째 인덱스(First Index) 데이터만 안전하게 슬라이싱하여 코드로 반환합니다. |
| **End Target** | RobTarget | `Split End` ▶ **ON** | 입력 타깃 패스의 마지막 인덱스(Last Index) 데이터만 안전하게 슬라이싱하여 코드로 반환합니다. |

<p align="center" style="margin-top: 25px;"> 
  <video src="/assets/images/Dynamic_RobPosition_gif.mp4" width="576px" height="324px" autoplay=1 muted=1 loop=1 align="center"></video>
  <sub style="display: block; text-align: center; color: #666;">Dynamic Target Sequence Execution Preview</sub>
</p>

</div>
</details>

<br>