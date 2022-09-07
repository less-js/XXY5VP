---
title: css实现时间节奏效果
description: 在网页上可能只要简单调整`animation-duration`或`transition-duration`值。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑨ : 时间节奏

动画的时间节奏是需要多久去完成，它可以被用来让看起来很重的对象做很重的动画，或者用在添加字符的动画中。

这在网页上可能只要简单调整`animation-duration`或`transition-duration`值。

这很容易让动画消耗更多时间，但调整时间节奏可以帮动画的内容和交互方式变得更出众。

![时间节奏](/images/tricks/css/timing.gif)

## HTML

```html
<article class="principle nine">
  <div class="shape a"></div>
  <div class="shape b"></div>
</article>
```

## CSS

```css
.nine .shape.a {
  animation: nine 4s infinite cubic-bezier(.93,0,.67,1.21);
  left: calc(50% - 12em);
  transform-origin: 100% 6em;
}
.nine .shape.b {
  animation: nine 2s infinite cubic-bezier(1,-0.97,.23,1.84);
  left: calc(50% + 2em);
  transform-origin: 100% 100%;
}

@keyframes nine {
  0%, 10% {
    transform: translateX(0);
  }
  40%, 60% {
    transform: rotateZ(90deg);
  }
  90%, 100% {
    transform: translateX(0);
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