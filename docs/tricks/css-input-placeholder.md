---
title: 巧用 CSS 伪类修改 input 框 placeholder 的默认样式
description: 巧用 CSS 伪类修改 input 框 placeholder 的默认样式
tags: 
  - CSS,input,placeholder,css伪类
head:
  - - meta
    - name: keywords
      content: CSS,input,placeholder,css伪类
---

# 巧用 CSS 伪类修改 input 框 placeholder 的默认样式

## HTML

```html
<input type="text" class="placeholder-custom" placeholder="请输入用户名搜索">
<input type="text" placeholder="请输入用户名搜索">
```

## CSS

```css
input{
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
  display: block;
  margin: 15px;
  border: solid 1px #dee0e9;
  padding: 0 15px;
  border-radius: 15px;
}

.placeholder-custom::-webkit-input-placeholder{
  color: #babbc1;
  font-size: 12px;
}
```