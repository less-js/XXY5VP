---
title: Flex 实现页面底部固定
description: Flex 实现页面底部固定
tags: 
  - Flex
head:
  - - meta
    - name: keywords
      content: Flex
---

# Flex 实现页面底部固定

使用 Flex 巧妙实现当页面内容不够时，`footer`部分处于页面底部，当页面内容超过当前窗口高度时，`footer`部分自动下沉。

## HTML

```html
<div class="container">
  <div class="main">正文部分</div>
  <div class="footer">Footer</div>
</div>
```

## CSS

```css
.container{
  height: 100vh;
  /* 关键css处 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main{
  /* 关键css处 */
  flex: 1;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.footer{
  padding: 15px 0;
  text-align: center;
  color: #ff9a9e;
  font-size: 14px;
}
```