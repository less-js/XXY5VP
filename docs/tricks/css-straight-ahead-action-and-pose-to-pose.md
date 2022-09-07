---
title: css实现连续运动和姿态对应效果
description: 连续运动是绘制动画的每一帧，姿态对应是通常由一个`assistant`在定义一系列关键帧后填充间隔。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则④ : 连续运动和姿态对应

连续运动是绘制动画的每一帧，姿态对应是通常由一个`assistant`在定义一系列关键帧后填充间隔。

大多数网页动画用的是姿态对应：关键帧之间的过渡可以通过浏览器在每个关键帧之间的插入尽可能多的帧使动画流畅。

有一个例外是定时功能`step`。通过这个功能，浏览器`steps`可以把尽可能多的无序帧串清晰。可以用这种方式绘制一系列图片并让浏览器按顺序显示出来，这开创了一种逐帧动画的风格。

![连续运动和姿态对应](/images/tricks/css/straight-ahead-action-and-pose-to-pose.gif)

## HTML

```html
<article class="principle four">
  <div class="shape a"></div>
  <div class="shape b"></div>
</article>
```

## CSS

```css
.four .shape.a {
    left: calc(50% - 8em);
    animation: four 6s infinite cubic-bezier(.57,-0.5,.43,1.53);
}

.four .shape.b {
  left: calc(50% + 8em);
  animation: four 6s infinite steps(1);
}

@keyframes four {
  0%, 10% {
    transform: none;
  }
  26%, 30% {
    transform: rotateZ(-45deg) scale(1.25);
  }
  40% {
    transform: rotateZ(-45deg) translate(2em, -2em) scale(1.8);
  }
  50%, 75% {
    transform: rotateZ(-45deg) scale(1.1);
  }
  90%, 100% {
    transform: none;
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