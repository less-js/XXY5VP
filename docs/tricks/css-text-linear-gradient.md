---
title: css实现彩色渐变文本
description: css实现彩色渐变文本
tags: 
  - CSS,渐变
head:
  - - meta
    - name: keywords
      content: CSS,渐变
---

# CSS 实现彩色渐变文本



## HTML

```html
<div class="text">
  linear-gradient
</div>
```

## CSS

```css
.text {
  line-height: 40px;
  font-size: 34px;
  color: #f4f4f5;
  background-image: linear-gradient(
    120deg,
    #adfbda 0,
    #35c3ff 30%,
    #fda399 50%,
    #76d880 70%,
    #f38b90 90%,
    #f7ba51 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(0 0 2rem #000);
}
```