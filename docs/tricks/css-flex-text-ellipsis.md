---
title: flex布局下CSS单行文本省略号的解决方法
description: flex布局下CSS单行文本省略号的解决方法
tags: 
  - flex,CSS,省略号
head:
  - - meta
    - name: keywords
      content: flex,CSS,省略号
---

# Flex 布局实现单行文本省略号

Flex 布局下实现单行文本溢出时出现省略号和非 Flex 布局实现略有差别

## HTML

```html
<div class="flex-wrap">
  <div class="left"></div>
  <div class="right">
    <div class="right-son">flex布局下CSS设置省略号的解决方法</div>
  </div>
</div>
```

## CSS

这里主要有问题的不是`right`元素，而是`right`的子元素，但解决问题的途径是从`right`元素入手的

解决方案：在`right`类中添加`width: 0`

```css{11}
.flex-wrap {
  display: flex;
  width: 100%;
  height: 100px;
}
.left {
  flex: 0 0 60px;
}
.right {
  flex: 1;
  width: 0;
}
.right-son {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```