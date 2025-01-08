---
title: "TriggMove"

layout: single
header:
  teaser: "/assets/images/TriggIOsMove.png"

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

Robtarget와 TriggIOs 데이터를 기반으로, Trigg”X” IOs Instruction을 정의하는 컴포넌트이다. TriggXIOs 는 로봇의 움직임과 동시에 2개 이상의 Output 신호를 설정하는 Instruction이다.

<p align="center">  <img src="/assets/images/TriggIOsMove.png" align="center" width="32%"></p>

# Input

* **RobTarget** : RobTarget Data를 받는다.
* **TriggIOs** : TriggIOs Data를 받는다.

## Built-in Param | Basic Params

<div align="center">
<table style="border-collapse: collapse: width: 51 %; height: 200px;" border="0.5" data-ke-style="sytle4">
<body>
<tr style="height: 20px;" bgcolor="#F2F2F2">
<td style="width: 45%; height: 20px; text-align: center; font-weight: bolder;">Type</td>
<td style="width: 50%; height: 20px; text-align: center; font-weight: bolder;">Speed(velocity)</td>
<td style="width: 55%; height: 20px; text-align: center; font-weight: bolder;">Zone</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1">TriggJIOs</td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V5</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Fine</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1">TriggLIOs</td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V10</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Z0</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1"> </td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">...</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">...</td>
</tr>
<tr style="height: 0px;">
<td style="width: 45%; height: 1-px; text-align: center;" rowspan="1"> </td>
<td style="width: 50%; height: 1-px; text-align: center;" rowspan="1">V7000</td>
<td style="width: 55%; height: 1-px; text-align: center;" rowspan="1">Z200</td>
</tr>
</body>
</table>
</div>
<!-- |Type|Speed(velocity)|Zone|
|:---------:|:------:|:------:|
|TriggJIOs|V5|Fine|
|TriggLIOs|V10|Z0|
||...|...|
||V7000|Z200| -->
* **TriggJIOs** : 입력된 RobTarget까지 Joint 모션으로 설정한다.
* **TriggLIOs** : 입력된 RobTarget까지 Linear 모션으로 설정한다.
* **Speed** : RobTarget에 도달하는 속도(Velocity)를 mm/s단위로 설정한다.
* **Zone** : Target Point를 중심으로 한 반경 범위로, 다음 Target Point로 이동시, zone값에 비례한 Radius크기 만큼 Filet하여 움직임을 제어한다. Fine을 정확하게 해당 포인트를 지나쳐야 하되, 로봇의 등속 움직임에 영향을 미칠 수 있다.

<br>
# Output

* **Instructions** : 입력된 조건에 따라 정의된 TriggXIOs Instruction을 출력합니다
