---
title: css实现缓入缓出效果
description: css实现缓入缓出动画可以由慢加速 (ease-in)、由快减速 (ease-out)，或者用贝塞尔曲线做出更复杂的效果。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑥ : 缓入缓出

对象很少从静止状态一下子加速到最大速度，它们往往是逐步加速并在停止前变慢。没有加速和减速，动画感觉就像机器人。

在 CSS 方面，缓入缓出很容易被理解，在一个动画过程中计时功能是一种描述变化速率的方式。

使用计时功能，动画可以由慢加速 (ease-in)、由快减速 (ease-out)，或者用贝塞尔曲线做出更复杂的效果。

![缓入缓出](/images/tricks/css/slow-in-and-slow-out.gif)

## HTML

```html
<article class="principle six">
  <div class="shape a"></div>
</article>
```

## CSS

```css
.six .shape {
  animation: six 3s infinite cubic-bezier(0.5,0,0.5,1);
}

@keyframes six {
  0%, 5% {
    transform: translate(-12em);
  }
  45%, 55% {
    transform: translate(12em);
  }
  95%, 100% {
    transform: translate(-12em);
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