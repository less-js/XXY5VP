---
title: css实现预备动作效果
description: 悬停在一个元素上时可以在它变大前稍微缩小，在初始列表中添加额外的条目来介绍其它条目的移除方法。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则② : 预备动作

预备动作可以是一个细微的反弹，帮人们理解什么对象将在屏幕中发生变化并留下痕迹。

例如，悬停在一个元件上时可以在它变大前稍微缩小，在初始列表中添加额外的条目来介绍其它条目的移除方法。

![预备动作](/images/tricks/css/Anticipation.gif)

## HTML

```html
<article class="principle two">
  <div class="shape"></div>
  <div class="surface"></div>
</article>
```

## CSS

```css
.two .shape {
  animation: two 5s infinite ease-out;
  transform-origin: 50% 7em;
}

.two .surface {
  background: #000;
  width: 8em;
  height: 1em;
  position: absolute;
  top: calc(50% + 4em);
  left: calc(50% - 3em);
}

@keyframes two {
  0%, 15% {
    opacity: 0;
    transform: none;
  }
  15%, 25% {
    opacity: 1;
    transform: none;
    animation-timing-function: cubic-bezier(.5,.05,.91,.47);
  }
  28%, 38% {
    transform: translateX(-2em);
  }
  40%, 45% {
    transform: translateX(-4em);
  }
  50%, 52% {
    transform: translateX(-4em) rotateZ(-20deg);
  }
  70%, 75% {
    transform: translateX(-4em) rotateZ(-10deg);
  }
  78% {
    transform: translateX(-4em) rotateZ(-24deg);
    opacity: 1;
  }
  86%, 100% {
    transform: translateX(-6em) translateY(4em) rotateZ(-90deg);
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