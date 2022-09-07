---
title: css实现次要动作效果
description: 当主要焦点出现的时候就可以开始执行次要动作，比如拖拽一个条目到列表中间。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑧ : 次要动作

当主动画正在发生，次要动作可以增强它的效果。这就好比某人在走路的时候摆动手臂和倾斜脑袋，或者弹性球弹起的时候扬起一些灰尘。

在网页方面，当主要焦点出现的时候就可以开始执行次要动作，比如拖拽一个条目到列表中间。

![次要动作](/images/tricks/css/secondary-action.gif)

## HTML

```html
<article class="principle eight">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
</article>
```

## CSS

```css
.eight .shape.a {
  transform: translateX(-6em);
  animation: eight-shape-a 4s cubic-bezier(.57,-0.5,.43,1.53) infinite;
}
.eight .shape.b {
  top: calc(50% + 6em);
  opacity: 0;
  animation: eight-shape-b 4s linear infinite;
}
.eight .shape.c {
  transform: translateX(6em);
  animation: eight-shape-c 4s cubic-bezier(.57,-0.5,.43,1.53) infinite;
}

@keyframes eight-shape-a {
  0%, 50% {
    transform: translateX(-5.5em);
  }
  70%, 100% {
    transform: translateX(-10em);
  }
}

@keyframes eight-shape-b {
  0% {
    transform: none;
  }
  20%, 30% {
    transform: translateY(-1.5em);
    opacity: 1;
    animation-timing-function: cubic-bezier(.57,-0.5,.43,1.53);
  }
  32% {
    transform: translateY(-1.25em);
    opacity: 1;
  }
  34% {
    transform: translateY(-1.75em);
    opacity: 1;
  }
  36%, 38% {
    transform: translateY(-1.25em);
    opacity: 1;
  }
  42%, 60% {
    transform: translateY(-1.5em);
    opacity: 1;
  }
  75%, 100% {
    transform: translateY(-8em);
    opacity: 1;
  }
}

@keyframes eight-shape-c {
  0%, 50% {
    transform: translateX(5.5em);
  }
  70%, 100% {
    transform: translateX(10em);
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