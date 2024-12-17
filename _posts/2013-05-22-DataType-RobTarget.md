---
title: "RobTarget"
layout: single
header:
  teaser: "https://b-at.kr/wp-content/uploads/2024/07/Robtarget.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType
sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"

tags: 
  - GERTY
---

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Figures (for images or video)

#### One Up

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2024/07/Robtarget.png"><img src="https://b-at.kr/wp-content/uploads/2024/07/Robtarget.png"></a>
</figure>

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.


And you'll get something that looks like this:

<figure class="half">
	<a href="http://via.placeholder.com/1200x600.JPG"><img src="http://via.placeholder.com/1200x600.JPG"></a>
	<a href="http://via.placeholder.com/1200x600.JPG"><img src="http://via.placeholder.com/1200x600.JPG"></a>
	<figcaption>Two images.</figcaption>
</figure>

#### Three Up

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
	<img src="http://via.placeholder.com/600x300.jpg">
	<img src="http://via.placeholder.com/600x300.jpg">
	<img src="http://via.placeholder.com/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure>
