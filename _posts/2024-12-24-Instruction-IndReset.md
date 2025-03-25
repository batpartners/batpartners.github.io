---
title: "IndReset"

layout: single
header:
  teaser: "/assets/images/IndReset_00.png"

collection: Instruction
entries_layout: grid
author_profile: true

categories:
  - Instruction

translated: true
lang: en
permalink: /instruction/Instruction-IndReset/
translation_link: /en/instruction/Instruction-IndReset/

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

* IndReset는 포지셔너의 현재 자세를 설정한 옵션에 따라 가까운 각도값으로 재정의하는 컴포넌트이다.
옵션값은 Short, Forward, Bacward 가 있으며 RefDegree 설정 값에 따라 재정의 할 수도 있다.

<p align="center">  <img src="/assets/images/IndReset_00.png" align="center" width="32%"></p>

# Input

* **MechUnit** : 실제 포지셔너 로봇의 이름을 입력한다.(기본값은 STN1) 
* **AxisNum** : 리셋할 축의 번호를 입력한다.

## Built-in Param | Basic Params

* **RefDegree** : 리셋할 각도 값을 설정하여 현재 자세에서 가장 가까운 값으로 재정의 된다.
* **ResetType** : 옵션의 값에 따라 각도 값을 재정의 한다.(표 참고)

<p align="center">
<table style="border-collapse: collapse: width: 51 %; height: 150x;" border="0.5" data-ke-style="sytle4">
  <thead style="background-color: #F2F2F2; font-weight: bold; text-align: center;">
    <tr>
      <th style="width: 10%; height: 15px; text-align: center; font-weight: bolder;">ResetType</th>
      <th style="width: 25%; height: 15px; text-align: center; font-weight: bolder;">Short</th>
      <th style="width: 25%; height: 15x; text-align: center; font-weight: bolder;">Fwd</th>
      <th style="width: 25%; height: 15px; text-align: center; font-weight: bolder;">Bwd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Description</strong></td>
      <td style="width: 25%; height: 15px;">가장 짧은 각도 값으로 현재 축 각도 값 재정의.</td>
      <td style="width: 25%; height: 15px;">현재 축 각도 값을 360도로 나눈 나머지 각도 값 기준으로 재정의, i.e., <code>Angle % 360</code>.</td>
      <td style="width: 25%; height: 15px;">현재 축 각도 값을 360도로 나눈 나머지 각도값을 360도에서 뺸 값을을 기준으로 재정의<code>360° - (Angle % 360)</code>.</td>
    </tr>
  </tbody>
</table>
</p>
<br>

# Output

* **Instructions** : 입력된 조건에 따라 정의된 IndReset Instruction을 출력한다.
