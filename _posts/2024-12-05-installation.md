---
title: "Installation"
layout: single
author_profile: true
categories:
  - About GERTY
header:
  teaser: "/assets/images/30.jpg"

translated: true
lang: ko
permalink: /about%20gerty/installation/

translation_link: /en/about%20gerty/installation/

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

# 1. PackageManager

Rhino `PackageManager`에서 `GERTY`를 찾아 가장 최신 버전을 설치 후, 라이노를 재실행한다.<br>
Trial License로 자동 실행되며 **15일**간 사용할 수 있다.<br>
`Automatically update packages when Rhino starts` 가 선택 되었다면 최신의 거티를 사용할 수 있다.

<figure>
	<a href="https://i.postimg.cc/hPqP5NGm/0-packagemanager-00.png"><img src="https://i.postimg.cc/hPqP5NGm/0-packagemanager-00.png"></a>
</figure>



# 2. GetMachineIDs

Trial License 기간이 만료되었을 경우, GERTY 유료 서비스를 구독할 수 있다.<br>
License 구매 시, GetMachineIDs 컴포넌트을 꺼내서 고유의 MAC주소 데이터를 출력한다.<br>
출력된 데이터를 `Copy Data Only` 한다. `Copy Data Only`는 패널에서 마우스 오른쪽 클릭시 확인할 수 있다.

<figure>
	<a href="https://i.postimg.cc/y6D9qVd0/Getmachine-IDs-00.png"><img src="https://i.postimg.cc/y6D9qVd0/Getmachine-IDs-00.png"></a>
</figure>

복사한 MAC주소는 Trial Request Page 버튼에 연결된 페이지 양식에 기재 후 제출한다.<br>
만일 해당 양식이 보이지 않을 경우, **contact@b-at.kr** 로 이메일을 보낸다.

<figure>
	<a href="https://i.postimg.cc/WbhgR9g7/1-MACAddress-01.png"><img src="https://i.postimg.cc/WbhgR9g7/1-MACAddress-01.png"></a>
</figure>



# 3. FileImportAndExport

이후 이메일을 통해 라이센스를 받을 수 있다.<br>
받은 라이센스는 FileImporterAndExporter 컴포넌트를 사용한다. <br>
FilePath 컴포넌트에서 오른쪽 마우스 클릭 후, Select one exsiting file을 선택해 라이센스 파일을 연결한다.

<figure>
	<a href="https://i.postimg.cc/1XxtLHQv/2-license-Import-1.png"><img src="https://i.postimg.cc/1XxtLHQv/2-license-Import-1.png"></a>
</figure>


GERTYLicense 컴포넌트를 통해 자신의 라이센스 정보를 확인한다.<br>
Available이 확인이 되면 GERTY 설치를 완료한다.<br>
이외의 다른 상황에 대해서는 contact@b-at.kr 로 문의할 수 있다.<br>


