---
title: css实现弧线运动效果
description: 有几种 CSS 的方式来实现弧线运动。一种是结合多个动画，比如在弹力球动画里，可以让球上下移动的同时让它右移，这时候球的显示效果就是沿弧线运动
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑦ : 弧线运动

虽然对象是更逼真了，当它们遵循[「缓入缓出」](/tricks/css-slow-in-and-slow-out)的时候它们很少沿直线运动——它们倾向于沿弧线运动。

有几种 CSS 的方式来实现弧线运动。一种是结合多个动画，比如在弹力球动画里，可以让球上下移动的同时让它右移，这时候球的显示效果就是沿弧线运动

另外一种是旋转元件，我们可以设置一个在对象之外的原点来作为它的旋转中心。当我们旋转这个对象，它看上去就是沿着弧线运动。

![弧线运动](/images/tricks/css/arc.gif)

## HTML

```html
<article class="principle seven">
  <div class="shape a"></div>
  <div class="shape b"></div>
</article>
```

## CSS

```css
.seven .shape.a {
  animation: seven 3s infinite linear;
  top: calc(50% - 2em);
  left: calc(50% - 9em);
  transform-origin: 10em 50%;
}
.seven .shape.b {
  animation: seven 6s infinite linear reverse;
  background-color: yellow;
  width: 2em;
  height: 2em;
  left: calc(50% - 1em);
  top: calc(50% - 1em);
}

@keyframes seven {
  100% {
    transform: rotateZ(360deg);
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