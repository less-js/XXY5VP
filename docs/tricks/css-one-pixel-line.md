---
title: 1px边框实现方法
description: 1px边框实现方法
tags: 
  - box-shadow,transform,1px
head:
  - - meta
    - name: keywords
      content: box-shadow,transform,1px
---

# 1px边框实现方法

`box-shadow` + `transform` 实现 1px 边框

## HTML

```html
<main class="main">
  <span class="one-pixel-line shadow"></span>
</main>
```

## CSS

```css
main {
  width: 100%;
  padding: 52px 29px;
  display: flex;
  justify-content: center;
}
span.one-pixel-line {
  width: 229px;
  position: relative;
}
span.one-pixel-line::after {
  content: '';
  width: 229px;
  position: absolute;
  bottom: 0; left: 0;
  box-shadow: 0 0 0 1px #b4a078;
  transform-origin: 0 bottom;
  transform: scaleY(.5) translateZ(0);
}
@media (min-resolution: 2dppx) {
  span.one-pixel-line.shadow::after {
    box-shadow: 0 0 0 .5px #b4a078;
  }
}
@media (min-resolution: 3dppx) {
  span.one-pixel-line.shadow::after {
    box-shadow: 0 0 0 .333333px #b4a078;
  }
}
```