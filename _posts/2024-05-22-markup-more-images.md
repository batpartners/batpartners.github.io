---
title: "Installation"
excerpt: "Examples and code for displaying images in posts."
header:
  teaser: "assets/images/0_packagemanager_00.png"
tags: 
  - sample post
  - images
  - test
  - Documentation
---

Rhino에서 `PackageManager`을 실행한다.
이후, 검색창에 `GERTY`를 찾아 가장 최신 버전을 설치한다.
<!-- #### One Up -->
<figure>
	<a href="/assets/images/0_packagemanager_00.png"><img src="/assets/images/0_packagemanager_00.png"></a>
	<a href="/assets/images/GetMachineIDs-768x157.png"><img src="/assets/images/GetMachineIDs-768x157.png"></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

GetMachineIDs 컴포넌트을 꺼내서 고유의 MAC주소 데이터를 출력한다.
복사한 MAC주소는 Trial Request Page 버튼에 연결된 페이지 양식에 기재 후 제출한다.

<!-- #### Two
 ```html
<figure class="half">
    <a href="/assets/images/image-filename-1-large.jpg"><img src="/assets/images/image-filename-1.jpg"></a>
    <a href="/assets/images/image-filename-2-large.jpg"><img src="/assets/images/image-filename-2.jpg"></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure>
``` -->

<figure>
	<a href="/assets/images/1_MACAddress_01.png"><img src="/assets/images/1_MACAddress_01.png"></a>
	<a href="/assets/images/2_license_Import_1.png"><img src="/assets/images/2_license_Import_1.png"></a>
	<figcaption>Two images.</figcaption>
</figure>

이후 이메일을 통해 라이센스를 받을 수 있다.
받은 라이센스는 FileImporterAndExporter 컴포넌트를 사용한다. 
FilePath 컴포넌트에서 오른쪽 마우스 클릭 후, Select one exsiting file을 선택해 라이센스 파일을 연결한다.

<!-- #### Three -->

<figure>
	<a href="/assets/images/3_licenseReader_00.png"><img src="/assets/images/3_licenseReader_00.png"></a>
	<figcaption>Two images.</figcaption>
</figure>

GERTYLicense 컴포넌트를 통해 자신의 라이센스 정보를 확인한다.
Available이 확인이 되면 GERTY 설치를 완료한다.
이외의 다른 상황에 대해서는 contact@b-at.kr 로 문의할 수 있다.

<!-- #### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

```html
<figure class="third">
	<img src="/images/image-filename-1.jpg">
	<img src="/images/image-filename-2.jpg">
	<img src="/images/image-filename-3.jpg">
	<figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure> -->
