---
title: css实现跟随和重叠动作效果
description: 跟随和重叠动作效果是让过渡或动画的效果以不同速度来运行。
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# CSS 动画规则⑤ : 跟随和重叠动作

事情并不总在同一时间发生。当一辆车从急刹到停下，车子会向前倾、有烟从轮胎冒出来、车里的司机继续向前冲。

这些细节是跟随和重叠动作的例子。它们在网页中能被用作帮助强调什么东西被停止，并不会被遗忘。例如一个条目可能在滑动时稍滑微远了些，但它自己会纠正到正确位置。

要创造一个重叠动作的感觉，我们可以让元件以稍微不同的速度移动到每处。这是一种在 iOS 系统的视窗 过渡中被运用得很好的方法。一些按钮和元件以不同速率运动，整体效果会比全部东西以相同速率运动要更逼真，并留出时间让访客去适当理解变化。

在网页方面，这可能意味着让过渡或动画的效果以不同速度来运行。

![跟随和重叠动作](/images/tricks/css/follow-through-and-overlapping-action.gif)

## HTML

```html
<article class="principle five">
  <div class="shape-container">
    <div class="shape"></div>
  </div>
</article>
```

## CSS

```css
.five .shape {
  animation: five 4s infinite cubic-bezier(.64,-0.36,.1,1);
  position: relative;
  left: auto;
  top: auto;
}

.five .shape-container {
  animation: five-container 4s infinite cubic-bezier(.64,-0.36,.1,2);
  position: absolute;
  left: calc(50% - 4em);
  top: calc(50% - 4em);
}

@keyframes five {
  0%, 15% {
    opacity: 0;
    transform: translateX(-12em);
  }
  15%, 25% {
    transform: translateX(-12em);
    opacity: 1;
  }
  85%, 90% {
    transform: translateX(12em);
    opacity: 1;
  }
  100% {
    transform: translateX(12em);
    opacity: 0;
  }
}

@keyframes five-container {
  0%, 35% {
    transform: none;
  }
  50%, 60% {
    transform: skewX(20deg);
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