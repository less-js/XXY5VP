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
  <div class="horizontal-line"></div>
  <div class="vertical-line"></div>
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
/**竖向辅助线**/
.vertical-line{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  height:100%;
  width:1px;
  background:#000;
}
/**横向辅助线**/
.horizontal-line{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:100%;
  height:1px;
  background:#000;
}
.inner {
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #6a5acdeb;
  transform-origin:50% 50px;/**50px为环绕半径*/
  animation:an-circle 3s ease-in-out infinite;
}
@keyframes an-circle  {
    to {
      transform: rotate(1turn);
    }
}
</style>

## HTML

```html
<div class="outer">
  <div class="horizontal-line"></div>
  <div class="vertical-line"></div>
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
/**竖向辅助线**/
.vertical-line{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  height:100%;
  width:1px;
  background:#000;
}
/**横向辅助线**/
.horizontal-line{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:100%;
  height:1px;
  background:#000;
}
.inner {
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #6a5acdeb;
  transform-origin:50% 50px;/**50px为环绕半径*/
  animation:an-circle 3s ease-in-out infinite;
}
@keyframes an-circle  {
    to {
      transform: rotate(1turn);
    }
}
```