---
title: css 画三角箭头
description: css 画三角箭头
tags: 
  - CSS,箭头
head:
  - - meta
    - name: keywords
      content: CSS,箭头
---

# css 画三角箭头



## HTML

```html
<div class="box">
  <div class="box-inner">
    <div class="arrow bottom"></div>
    <div class="arrow top"></div>
    <div class="arrow right"></div>
    <div class="arrow left"></div>
  </div>
</div>
```

## CSS

```css
.arrow {
  display: inline-block;
  margin-right: 10px;
  /* 基础样式 */
  width: 0;
  height: 0;
  /* 基础样式 */
  border: 16px solid;
  border-color: transparent #CDDC39 transparent transparent;
  position: relative;
}

.arrow::after {
  content: "";
  position: absolute;
  /* 通过位移覆盖背景 */
  right: -20px;
  top: -16px;
  border: 16px solid;
  border-color: transparent #fff transparent transparent;
}

/*下*/
.arrow.bottom {
  transform: rotate(270deg);
}

/*上*/
.arrow.top {
  transform: rotate(90deg);
}

/*左*/
.arrow.left {
  transform: rotate(180deg);
}

/*右*/
.arrow.right {
  transform: rotate(0deg);
}
```