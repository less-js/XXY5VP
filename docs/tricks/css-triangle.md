---
title: css 画三角形
description: css 画三角形
tags: 
  - CSS,三角形
head:
  - - meta
    - name: keywords
      content: CSS,三角形
---

# css 画三角形



## HTML

```html
<div class="box">
  <div class="box-inner">
    <div class="triangle bottom"></div>
    <div class="triangle right"></div>
    <div class="triangle top"></div>
    <div class="triangle left"></div>
  </div>
</div>
```

## CSS

```css
.triangle {
  display: inline-block;
  margin-right: 10px;
  /* 基础样式 */
  border: solid 10px transparent;
}
  /*下*/
.triangle.bottom {
  border-top-color: #0097a7;
}
  /*上*/
.triangle.top {
  border-bottom-color: #b2ebf2;
}
/*左*/
.triangle.left {
  border-right-color: #00bcd4;
}
/*右*/
.triangle.right {
  border-left-color: #009688;
}
```