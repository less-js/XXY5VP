---
title: css实现背景倾斜效果
description: skewY()是一个内置函数，用于在 2D 平面的垂直方向上转换元素，参数为倾斜角度。
tags: 
  - CSS,@keyframes,skewY,
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes,skewY,
---

# 背景倾斜

`skewY()`: 是一个内置函数，用于在 2D 平面的垂直方向上转换元素，参数为倾斜角度。

`transform-origin`: 用于设置旋转元素的基点位置

- 语法: `transform-origin: x-axis y-axis z-axis;`

- 默认值: `transform-origin:50% 50% 0;`

- 单位: `%`、`em`、`px`等具体的值，也可以是`top`、`right`、`bottom`、`left`和`center`这样的关键词

## HTML

```html
<div class="corner"></div>
```

## CSS

```css
.corner {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #092540;
  transform: skewY(-6deg);
  transform-origin: 100% 0;
  overflow: hidden;
}
/* .corner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 220px;
  background: #fff;
  transform: skewY(-7deg);
  transform-origin: top left;
}
.corner::after {
  content: '';
  position: absolute;
  bottom: -220px;
  left: 0;
  width: 100%;
  height: 220px;
  background: #fff;
  transform: skewY(-7deg);
  transform-origin: top left;
} */
```