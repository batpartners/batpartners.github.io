---
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png"

collection: ToolPath
entries_layout: grid
author_profile: true

categories:
  - ToolPath
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

* 적층 모델링의 내부 Shell을 채우는 툴패스를 생성하는 컴포넌트이다.
외곽 커브 형태의 옵셋(Offset)된 방식을 채택하여 채움을 결정한다.

<p align="center">  <img src="https://b-at.kr/wp-content/uploads/2024/07/subprocedures_00.png" align="center" width="32%"></p>

<br>

# Input

* **GertyShellData [DataTree]** : 모델링을 적층 Shell Layer로 변환한 GERTYShellData를 입력한다.
* **Direction** : 채움 방향을 정방향/역방향으로 수정할 수 있다.

<br>


# Output

* **Infill ToolPaths** : 채움 툴패스(ToolPath)를 출력한다.
* **Infill Polyines** : 채움 레이어를 커브(Curve) 값으로 출력한다.