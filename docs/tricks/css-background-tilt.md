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

利用上述属性加上`@keyframes`可扩展出[2D 环绕](/tricks/css-2d-surround)和[2D Loading](/tricks/css-2d-loading)动画

## 预览效果

<style>
.corner {
  margin-bottom: 120px;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: #42b883;
  transform: skewY(-6deg);
  transform-origin: 100% 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.corner .content {
  position: absolute;
  transform: skewY(6deg);
  width: 100%;
  height: 100px;  
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>

<div class="corner"><div class="content">背景倾斜</div></div>

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
  background: #42b883;
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