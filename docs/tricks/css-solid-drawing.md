---
title: css实现扎实的描绘效果
description: 如今浏览器对三维变换的支持已经不错，这意味着我们可以在场景里旋转和放置三维对象，浏览器能自动控制它们的转换。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑪ : 扎实的描绘

当动画对象在三维中应该加倍注意确保它们遵循透视原则。因为人们习惯了生活在三维世界里，如果对象表现得与实际不符，会让它看起来很糟糕。

如今浏览器对三维变换的支持已经不错，这意味着可以在场景里旋转和放置三维对象，浏览器能自动控制它们的转换。

![扎实的描绘 ](/images/tricks/css/Solid-drawing.gif)

## HTML

```html
<article class="principle eleven">
  <div class="shape">
    <div class="container">
      <span class="front"></span>
      <span class="back"></span>
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
</article>
```

## CSS

```css
.eleven .shape {
  background: none;
  border: none;
  perspective: 400px;
  perspective-origin: center;
}
.eleven .shape .container {
  animation: eleven 4s infinite cubic-bezier(.6,-0.44,.37,1.44);
  transform-style: preserve-3d;
}
.eleven .shape span {
    display: block;
    position: absolute;
    opacity: 1;
    width: 4em;
    height: 4em;
    border: 1em solid #fff;
    background: #2d97db;
}
.eleven .shape span.front {
  transform: translateZ(3em);
}
.eleven .shape span.back {
  transform: translateZ(-3em);
}
.eleven .shape span.left {
  transform: rotateY(-90deg) translateZ(-3em);
}
.eleven .shape span.right {
  transform: rotateY(-90deg) translateZ(3em);
}
.eleven .shape span.top {
  transform: rotateX(-90deg) translateZ(-3em);
}
.eleven .shape span.bottom {
  transform: rotateX(-90deg) translateZ(3em);
}


@keyframes eleven {
  0% {
    opacity: 0;
  }
  10%, 40% {
    transform: none;
    opacity: 1;
  }
  60%, 75% {
    transform: rotateX(-20deg) rotateY(-45deg) translateY(4em);
    animation-timing-function: cubic-bezier(1,-0.05,.43,-0.16);
    opacity: 1;
  }
  100% {
    transform: translateZ(-180em) translateX(20em);
    opacity: 0;
  }
}

.principle {
  width: 100%;
  height: 100vh;
  position: relative;
}

.shape {
  background: #2d97db;
  border: 1em solid #fff;
  width: 4em;
  height: 4em;
  position: absolute;
  top: calc(50% - 2em);
  left: calc(50% - 2em);
}
```