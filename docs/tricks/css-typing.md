---
title: 纯CSS实现打字效果
description: 纯CSS实现打字效果
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# 纯CSS实现打字效果

通过`@keyframes`实现文本打字效果

## HTML

```html
<div class="typing">
    <div class="typing-effect">Typing effect for text</div>
</div>
```

## CSS

```css
.typing {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing-effect {
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation: typing 2s steps(22), effect .5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  50% {
    border-color: transparent;
  }
}
```