---
title: css实现夸张手法效果
description: 在网页中，对象可以通过上下滑动去强调和刻画吸引力，比如在填充表单的时候生动部分会比收缩和变淡的部分更突出。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑩ : 夸张手法

夸张手法在漫画中是最常用来为某些动作刻画吸引力和增加戏剧性的，比如一只狼试图把自己的喉咙张得更开地去咬东西可能会表现出更恐怖或者幽默的效果。

在网页中，对象可以通过上下滑动去强调和刻画吸引力，比如在填充表单的时候生动部分会比收缩和变淡的部分更突出。

![夸张手法 ](/images/tricks/css/Exaggeration.gif)

## HTML

```html
<article class="principle ten">
  <div class="shape"></div>
</article>
```

## CSS

```css
.ten .shape {
  animation: ten 4s infinite linear;
  transform-origin: 50% 8em;
  top: calc(50% - 6em);
}

@keyframes ten {
  0%, 10% {
    transform: none;
    animation-timing-function: cubic-bezier(.87,-1.05,.66,1.31);
  }
  40% {
    transform: rotateZ(-45deg) scale(2);
    animation-timing-function: cubic-bezier(.16,.54,0,1.38);
  }
  70%, 100% {
    transform: rotateZ(360deg) scale(1);
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