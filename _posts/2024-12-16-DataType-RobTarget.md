---
title: "RobTarget"
layout: single
header:
  teaser: "/assets/images/Robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: ko
permalink: /datatype/DataType-RobTarget/

translation_link: /en/datatype/DataType-RobTarget/

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

<p align="center">  <img src="/assets/images/01_robtarget.png" align="center" width="32%"></p>


# Description

외부축 없이 로봇 단독 모션을 위한 RobTarget 정의. 외부축 값은 9E9(미사용)로 자동 설정합니다.

# | 입력(Inputs)

* **Name [Text/Item]** : 생성할 RobTarget의 기본 변수명을 입력함. (기본값: “P”) <br> 컴포넌트는 입력된 Plane 데이터 개수에 따라, 생성되는 RobTarget 이름을 “변수명 0, 변수명 1, 변수명 2, …“ 과 같은 방식으로 할당.
* **Plane [Plane/DataTree]** : ABB RobTarget 형식으로 변환할 Plane을 입력.(기본값: WorldXY) 
* **Robot_Base [Plane/Item]** : ABB RobTarget 형식으로 변환할 Plane을 입력. 
* **Tilting Weight [Number/Item]** : TargetPlane의 기준을 BasePlane과 ParameterPlane 사이의 Tilting weight 값을 설정한다.
<figure>
  <img src="/assets/images/DataTypes/RobTarget/TiltingWeight_RobT.gif" alt="Tilting_RobT">
  <figcaption> Tilting</figcaption>
</figure>

* **Angle [Number/Item]** : 입력된 Plane을 일괄적으로 Angle(Degree) 값만큼 회전시켜, RobTarget에 적용.
<figure>
  <img src="/assets/images/DataTypes/RobTarget/Set_Angle_RobT.gif" alt="Set_Angle_RobT">
  <figcaption> Robtarget 데이터 셋의 가장 첫번째, 마지막 Robtarget을 분리</figcaption>
</figure>

* **WobjData [WObjData/Item]** : ABB WorkObject (작업 좌표계)객체를 입력. 변환되는 RobTarget을 입력된 WobjData의 User Frame 기준 상대 좌표로 정의함.
* **Chaining [Boolean/Item]** : True인 경우, 입력되는 WobjData와 RobTarget간의 관계를 강제로 유지. 즉, WobjData가 입력된 상태에서 Workobject를 정의하는 UserFrame을 이동/회전하는 경우, 출력되는 RobTarget도 WobjData와의 관계에 따라 이동/회전됨. 

## Built-in Param : Basic Params​
* **Split Start** : (생성된 RobTarget이 2개 이상으로 구성된 List / DataTree인 경우) 별도 Output node를 통해, 첫 번째 RobTarget을 분리하여 내보냄. 
* **Split End** : (생성된 RobTarget이 2개 이상으로 구성된 List / DataTree인 경우) 별도 Output node를 통해, 마지막 RobTarget을 분리하여 내보냄. 

<figure>
  <img src="/assets/images/DataTypes/RobTarget/split Robtargets_exam.png" alt="split_RobT">
  <figcaption> Robtarget 데이터 셋의 가장 첫번째, 마지막 Robtarget을 분리</figcaption>
</figure>
<br>

# Output

* **RobTargets** : 각 영역의 Robtargets의 ProgramData를 출력한다. 이후, 해당 데이터를  Instructions에 연결한다.
