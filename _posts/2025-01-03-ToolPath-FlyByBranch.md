---
title: "FlyByBranch"

layout: single
header:
  teaser: "/assets/images/FlyByPlane.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath

translated: true
lang: ko
permalink: /toolpath/ToolPath-FlyByBranch/

translation_link: /en/toolpath/ToolPath-FlyByBranch/
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

* 입력되는 로봇 TCP 주요 경로(Target Plane Input) DataTree의 각 Branch의 사이사이를 지나는, 새로운 이동경로( FlyBy Targets 또는 FlyBy ToolPath )를 생성한다. FlyBy 컴포넌트는 기본적으로 입력된 Target Plane DataTree의 인접한 Branch[i] 의 마지막 Plane과 Branch[i+1]의 첫번째 Plane 을 이용하여, 사용자가 입력한 거리만큼 떨어진 위치에, 새로운 FlyBy Target Plane들을 정의한다. 

<p align="center"><img src="/assets/images/FlyByPlane.png" align="center" width="32%"></p>

# Input

* **TargetPlanes [Plane/DataTree]** : FlyBy Targets을 적용하기 위해, TCP 주요 경로에 해당하는 Target Plane들을 입력한다. 

<p align="center"><img src="/assets/images/FlyByBranch-768x607.png" align="center" width="80%"></p>

## Built in param | Basic Params
  
  * **Approaching Dir.** : 생성되는 이동경로의 마지막 Flyby Plane이 주요경로로 진입하는 방향을 의미한다. 즉, 주요경로(Target Planes input)의 각 Branch 첫번째 Plane으로부터, 진입 직전 FlyBy Plane의 위치를 이격하고자 하는 방향을 말한다.
  * **Leaving Dir.** : 주요경로를 마친 후 진출 방향을 정의한다.생성되는 이동경로의 첫번째 Flyby Plane이 주요경로로부터 진출하는 방향을 의미합니다. 즉, 주요경로(Target Planes input)의 각 Branch 마지막 Plane으로부터, 진출하는 FlyBy Plane의 위치를 이격하고자 하는 방향을 말합니다.

<div className="multi-headings" align="center">
  <table style="border-collapse: collapse: width: 51 %; height: 500px;">
    <thead>
      <tr>
        <th style="text-align: center;">Type</th>
        <th style="text-align: center;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="width: 45%; height: 20px; text-align: center;">Motion Dir.</th>
        <td style="width: 45%; height: 20px;">주요경로의 진행 방향으로 자연스럽게 진입할수 있도록, 진입 직전 Flyby Plane을 이격합니다. (해당 옵션에서, 주요경로의 진행방향은, 경로의 첫번째 Plane 원점으로부터 두번째 Plane 원점을 향하는 벡터를 의미합니다. 만약 주요 경로가 Target Plane 1개로 구성된 Branch인 경우, Z Axis 조건으로 적용되어, 첫번째 TargetPlane의 Z방향으로 진입합니다.) </td>
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

<p align="center"><img src="/assets/images/flyby-768x398.png" align="center" width="80%"></p>
<br>

# Output

* **Fly-by Targets[Plane/DataTree]** : 이동 및 회피 경로의 결과를 짝수 브랜치 DataTree로 변환한다. 입력된 조건에 따라, 생성된 이동경로를 DataTree 형태로 출력한다. 이때 FlyBy Targets Output은 주요경로에의 최초 진입/최후 진출에 해당하는 FlyBy Plane까지를 포함하기 때문에, Target Planes Input의 Branch 개수보다 1개 많은 Branch를 갖는다. 또, 이동경로 Instruction 할당 이후, 주요 경로에 대한 Instruction과 데이터 병합을 용이하게 하기 위해, [0]-[2]-[4]-… 로 시작하는 짝수의 Path를 갖는 DataTree가 된다.