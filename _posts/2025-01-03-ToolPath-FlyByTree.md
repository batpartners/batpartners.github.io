---
title: "FlyByTree"

layout: single
header:
  teaser: "/assets/images/FlyByTree.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-FlyByTree/

translation_link: /en/toolpath/ToolPath-FlyByTree/
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

* 입력되는 로봇 TCP 주요 경로 (Target Plane Input) DataTree의 새로운 이동경로를 생성하는 컴포넌트이다. FlyBy 컴포넌트는 기본적으로 입력된 주요경로 Branch[i]의 마지막 Plane과 인접한 주요경로 Branch[i+1]의 첫번째 Plane을 이용하여, 사용자가 입력한 거리만큼 떨어진 위치에, 새로운 FlyBy Target Plane들을 정의한다.

<p align="center">  <img src="/assets/images/FlyByTree.png" align="center" width="32%"></p>

# Input

* **TargetPlanes0** : 첫번째 주요경로 TargetPalnes를 연결한다.
* **TargetPlanes1** : 두번째 주요경로 TargetPalnes를 연결한다.

## Built-in Param | Basic Params

* **Approaching Dir.** : 생성되는 이동경로의 마지막 Flyby Plane이 주요경로로 진입하는 방향을 의미한다. 즉, 주요경로(Target Planes input)의 각 Branch 첫번째 Plane으로부터, 진입 직전 FlyBy Plane의 위치를 이격하고자 하는 방향을 말한다.
* **Leaving Dir.** : 주요경로를 마친 후 진출 방향을 정의한다.생성되는 이동경로의 첫번째 Flyby Plane이 주요경로로부터 진출하는 방향을 의미합니다. 즉, 주요경로(Target Planes input)의 각 Branch 마지막 Plane으로부터, 진출하는 FlyBy Plane의 위치를 이격하고자 하는 방향을 말합니다.

<div className="multi-headings" align="center">
  <table style="border-collapse: collapse: width: 51 %; height: 480px;">
    <thead>
      <tr>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Motion Dir.</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 진행 방향으로 자연스럽게 진입할수 있도록, 진입 직전 Flyby Plane을 이격합니다. (해당 옵션에서, 주요경로의 진행방향은, 경로의 첫번째 Plane 원점으로부터 두번째 Plane 원점을 향하는 벡터를 의미합니다. 만약 주요 경로가 Target Plane 1개로 구성된 Branch인 경우, Z Axis 조건으로 적용되어, 첫번째 TargetPlane의 Z방향으로 진입합니다.) </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Z_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 Z 방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Y_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 Y 방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다.</td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">X_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 X 방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Z_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 -Z방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative Y_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 -Y방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Negative X_Axis</th>
        <td style="width: 45%; height: 20px;"> 주요경로의 첫번째 Target Plane의 -X방향으로 진입하도록, 진입 직전 Flyby Plane을 이격합니다 </td>
      </tr>
    </tbody>
  </table>
</div>

* **Approaching Dist.(mm)** : 주요경로 진입 전 이동거리(mm)를 결정한다. 즉, 주요 경로 진입 직전 마지막 FlyByPlane을 이격할 거리를 의미한다.
* **Leaving Dist.(mm)** : 주요경로 진출 후 이동거리(mm)를 결정한다. 즉, 주요 경로 진출 후첫번째 FlyByPlane을 이격할 거리를 의미한다.
* **Target Count [int]**: 주요경로 사이의 이동경로(FlyBy ToolPath)를 구성할 Flyby Plane의 총 개수를 입력한다.

## Built-in Param | Advanced Params

  Advanced Param은 이동 경로의 프로파일을 결정하는 옵션입니다. 이동경로의 프로파일은, Builtin Parma : Basic 에서 사용자가 선택한 조건에 따라, 이동경로 처음과 마지막 Flyby Plane이 주요경로로부터 이격되는 방향 벡터를 Blend 하는 방식으로 결정된다.

  * **Continuity** : 선택하는 연속성 조건에 따라, 생성되는 FlyBy Plane들의 원점이 선형 또는 비선형 커브 위에 있도록 한다. 기본값 : Position(G0)

`연속성 설명 참고 : Rhinoceros 도움말 – 연속성 설명 | Rhino 3D 모델링 (mcneel.com)`

<div className="multi-headings" align="center">
  <table style="border-collapse: collapse: width: 51 %; height: 280px;">
    <thead>
      <tr>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Position(G0)</th>
        <td style="width: 45%; height: 20px;"> 이동경로의 첫번째와 마지막 Plane 원점의 위치만 연속성(G0)을 갖는 Blend Curve를 이동경로의 프로파일로 취합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Tangency(G1)</th>
        <td style="width: 45%; height: 20px;"> 이동경로의 첫번째와 마지막 Plane 원점의 위치와 해당 위치에서 이격 방향벡터와 같은 방향의 접선을 갖는, G1 연속성의 Blend Curve를 이동경로의 프로파일로 취합니다. </td>
      </tr>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Curvature(G2)</th>
        <td style="width: 45%; height: 20px;"> 이동경로의 첫번째와 마지막 Plane 원점의 위치와 해당 위치에서 이격 방향벡터와 같은 방향의 접선, 같은 곡률반지름을 갖는, G2 연속성의 Blend Curve를 이동경로의 프로파일로 취합니다.</td>
      </tr>
    </tbody>
  </table>
</div>

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-1-2-768x223.png" align="center" width="72%"></p>
<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-2-1-768x457.png" align="center" width="72%"></p>
<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2023/05/Untitled-3-1-768x418.png" align="center" width="72%"></p>

  * **Bulge Start** : (Tangency/Curvature 조건인 경우,) 0-1사이의 값을 입력하여, 연속성을 유지한 상태에서 이동경로 프로파일의 시작부분 형상을 편집한다.
  * **Bulge End** : (Tangency/Curvature 조건인 경우,)0-1사이의 값을 입력하여, 연속성을 유지한 상태에서 이동경로 프로파일의 끝부분 형상을 편집한다.

<br>

# Output

* **Fly-by Targets**: 이동 및 회피 경로의 결과를 짝수 브랜치 DataTree로 변환한다. 입력된 조건에 따라, 생성된 이동경로를 DataTree 형태로 출력한다. 이때 FlyBy Targets Output은 주요경로에의 최초 진입/최후 진출에 해당하는 FlyBy Plane까지를 포함하기 때문에, Target Planes Input의 Branch 개수보다 1개 많은 Branch를 갖는다. 또, 이동경로 Instruction 할당 이후, 주요 경로에 대한 Instruction과 데이터 병합을 용이하게 하기 위해, [0]-[2]-[4]-… 로 시작하는 짝수의 Path를 갖는 DataTree가 된다.