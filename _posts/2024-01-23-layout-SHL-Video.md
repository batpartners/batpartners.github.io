---
title: "Tutorial Video"
header:
  video:
    id: y1yWQu1PcPM
    provider: youtube
categories:
  - Layout
  - Uncategorized
tags:
  - video
  - layout
---

This post should display a **header with a responsive video**, if the theme supports it.

## Settings

| Parameter  | Required     | Description |
|----------  |---------     | ----------- |
| `id`       | **Required** | ID of the video |
| `provider` | **Required** | Hosting provider of the video, either `youtube` or `vimeo` |

### Tutorial

GERTY의 사용법을 알고, 관련 템플릿들을 통해 사용자의 실력을 향상시킬 수 있다.


```liquid
{% raw %}{% include video id="y1yWQu1PcPM" provider="youtube" %}{% endraw %}
```

{% include video id="y1yWQu1PcPM" provider="youtube" %}

To embed it as a video header you'd use the following YAML Front Matter

```yaml
header:
  video:
    id: y1yWQu1PcPM
    provider: youtube
```

To embed the following Vimeo video at url `https://youtu.be/y1yWQu1PcPM` into a post or page's main content you'd use: 

<!-- ```liquid
{% raw %}{% include video id="212731897" provider="vimeo" %}{% endraw %}
```

{% include video id="212731897" provider="vimeo" %}

To embed it as a video header you'd use the following YAML Front Matter

```yaml
header:
  video:
    id: 212731897
    provider: vimeo
``` -->