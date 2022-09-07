---
title: css实现演出布局效果
description: 演出布局是确保对象在场景中得以聚焦，让场景中的其它对象和视觉在主动画发生的地方让位。这意味着要么把主动画放到突出的位置，要么模糊其它元件来让用户专注于看他们需要看的东西。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则③ : 演出布局

演出布局是确保对象在场景中得以聚焦，让场景中的其它对象和视觉在主动画发生的地方让位。这意味着要么把主动画放到突出的位置，要么模糊其它元件来让用户专注于看他们需要看的东西。

在网页方面，一种方法是用 model 覆盖在某些内容上。在现有页面添加一个遮罩并把那些主要关注的内容前置展示。

另一种方法是用动作。当很多对象在运动，你很难知道哪些值得关注。如果其它所有的动作停止，只留一个在运动，即使动得很微弱，这都可以让对象更容易被察觉。

还有一种方法是做一个晃动和闪烁的按钮来简单地建议用户比如他们可能要保存文档。屏幕保持静态，所以再细微的动作也会突显出来。

![演出布局](/images/tricks/css/Staging.gif)

## HTML

```html
<article class="principle three">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
</article>
```

## CSS

```css
.three .shape.a {
  transform: translateX(-12em);
}

.three .shape.c {
  transform: translateX(12em);
}

.three .shape.b {
  animation: three 5s infinite ease-out;
  transform-origin: 0 6em;
}

.three .shape.a, .three .shape.c {
  animation: threeb 5s infinite linear;
}

@keyframes three {
  0%, 10% {
    transform: none;
    animation-timing-function: cubic-bezier(.57,-0.5,.43,1.53);
  }
  26%, 30% {
    transform: rotateZ(-40deg);
  }
  32.5% {
    transform: rotateZ(-38deg);
  }
  35% {
    transform: rotateZ(-42deg);
  }
  37.5% {
    transform: rotateZ(-38deg);
  }
  40% {
    transform: rotateZ(-40deg);
  }
  42.5% {
    transform: rotateZ(-38deg);
  }
  45% {
    transform: rotateZ(-42deg);
  }
  47.5% {
    transform: rotateZ(-38deg);
    animation-timing-function: cubic-bezier(.57,-0.5,.43,1.53);
  }
  58%, 100% {
    transform: none;
  }
}

@keyframes threeb {
  0%, 20% {
    filter: none;
  }
  40%, 50% {
    filter: blur(5px);
  }
  65%, 100% {
    filter: none;
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