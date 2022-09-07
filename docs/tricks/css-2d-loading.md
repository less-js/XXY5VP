---
title: css实现2D圆周环绕动画效果
description: skewY()是一个内置函数，用于在 2D 平面的垂直方向上转换元素，参数为倾斜角度。
tags: 
  - CSS,@keyframes,skewY,
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes,skewY,
---

# 2D圆周环绕动画

<div class="outer">
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
</div>

<style>
.outer {
  margin-top: 40px;
   /**定义子元素水平居中**/
  display:flex;
  justify-content:center;
  width: 100px;
  height: 100px;
  background-color: #6a5acd8c;
  position:relative;
}
.inner {
  position:absolute;
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #6a5acdeb;
  transform-origin: 50% 50px;
  animation:an-circle 3s ease-in-out infinite;
}
.inner:nth-child(2){
  height:18px;
  width:18px;
  animation-delay:.2s;
}
.inner:nth-child(3){
  height:16px;
  width:16px;
  animation-delay:.4s;
}
.inner:nth-child(4){
  height:14px;
  width:14px;
  animation-delay:.6s;
}
@keyframes an-circle{
  to{
    transform:rotate(1turn);
  }
}
</style>

## HTML

```html
<div class="outer">
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
  <div class="inner"></div>
</div>
```

## CSS

```css
.outer {
  /**定义子元素水平居中**/
  display:flex;
  justify-content:center;
  width: 100px;
  height: 100px;
  background-color: #6a5acd8c;
  position:relative;
}
.inner {
  position:absolute;
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #6a5acdeb;
  transform-origin: 50% 50px;
  animation:an-circle 3s ease-in-out infinite;
}
.inner:nth-child(2){
  height:18px;
  width:18px;
  animation-delay:.2s;
}
.inner:nth-child(3){
  height:16px;
  width:16px;
  animation-delay:.4s;
}
.inner:nth-child(4){
  height:14px;
  width:14px;
  animation-delay:.6s;
}
@keyframes an-circle{
  to{
    transform:rotate(1turn);
  }
}
```