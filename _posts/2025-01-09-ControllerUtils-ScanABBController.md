---
title: "ScanABBController"
layout: single
header:
  teaser: "/assets/images/ScanABBController.png"

collection: ControllerUtils
entries_layout: grid
author_profile: true

categories:
  - ControllerUtils
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

* GERTY 구동 PC에서 유선 또는 무선의 형식으로 연결 가능한 로봇 컨트롤러를 검색하는 컴포넌트 입니다.

<br>

<p align="center">  <img src="/assets/images/ScanABBController.png" align="center" width="32%"></p>

<br>

# Input

* **Update[Boolean/Item]**: 연결 가능한 컨트롤러 정보들을 업데이트 합니다.

## Built-in Param | Basic Params
* Controller Type : 가상(Virtual), 실제(Real) 로봇 환경을 선택할 수 있다.

<div align="center">
<table style="border-collapse: collapse: width: 51 %; height: 100px;" border="0.5" data-ke-style="sytle4">
<body>
<tr style="height: 20px;" bgcolor="#F2F2F2">
<td style="width: 45%; height: 20px; text-align: center; font-weight: bolder;">Virtual</td>
<td style="width: 50%; height: 20px; text-align: center; font-weight: bolder;">Real</td>
</tr>
<tr style="height: 0px;">
<td style="width: 50%; height: 1-px; text-align: left;" rowspan="1">ABB 로봇스튜디오 프로그램의 가상 로봇 컨트롤러 연결와 연결하여 해당 데이터를 가져와 GERTY를 제어할 수 있다.</td>
<td style="width: 55%; height: 1-px; text-align: left;" rowspan="1">	
실제 로봇 컨트롤러와 연결하여 해당 로봇의 데이터를 가져와 GERTY를 제어할 수 있다</td>
</tr>
</body>
</table>
</div>

<br>

# Output

* **ControllerInfo** : 연결된 로봇 데이터를 확인할 수 있다.
* **SystemID** : 가상 혹은 실제 로봇의 축 값, 툴 데이터 값 등 시뮬레이션을 돕는 데이터를 출력한다. 