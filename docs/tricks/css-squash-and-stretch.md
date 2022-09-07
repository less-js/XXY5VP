---
title: css实现挤压和拉伸效果
description: 挤压和伸缩效果可以为一个对象增加实物的感觉。甚至一些形状上的小变化就可以创造出细微但抢眼的效果。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则① : 挤压和拉伸

当一个球在弹跳时，碰击到地面会变扁，恢复的时间会越来越短。

创建对象的时候最有用的方法是参照实物，比如人、时钟和弹性球。

例如，一个按钮会变大并变成一个信息框，或者错误信息会出现和消失。

挤压和伸缩效果可以为一个对象增加实物的感觉。甚至一些形状上的小变化就可以创造出细微但抢眼的效果。

![挤压和拉伸](/images/tricks/css/Squash-and-stretch.gif)

## HTML

```html
<article class="principle one">
  <div class="shape"></div>
  <div class="surface"></div>
</article>
```

## CSS

```css
.one .shape {
  animation: one 4s infinite ease-out;
}

.one .surface {
  background: #000;
  height: 10em;
  width: 1em;
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% + 10em);
}

@keyframes one {
  0%, 15% {
    opacity: 0;
  }
  15%, 25% {
    transform: none;
    animation-timing-function: cubic-bezier(1,-1.92,.95,.89);
    width: 4em;
    height: 4em;
    top: calc(50% - 2em);
    left: calc(50% - 2em);
    opacity: 1;
  }
  35%, 45% {
    transform: translateX(8em);
    height: 6em;
    width: 2em;
    top: calc(50% - 3em);
    animation-timing-function: linear;
    opacity: 1;
  }
  70%, 100% {
    transform: translateX(8em) translateY(5em);
    height: 6em;
    width: 2em;
    top: calc(50% - 3em);
    opacity: 0;
  }
}

body {
  margin: 0;
  background: #e9b59f;
  font-family: HelveticaNeue, Arial, Sans-serif;
  color: #fff;
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