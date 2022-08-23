---
title: 通过::first-letter伪类实现首字母大写
description: 通过::first-letter伪类实现首字母大写
tags: 
  - CSS,first-letter
head:
  - - meta
    - name: keywords
      content: CSS,first-letter
---

# 通过 ::first-letter 伪类实现首字母大写

`first-of-type`确定元素，`::first-letter`伪类去实现首字母大写的效果

## HTML

```html
<div class="content-section">
  <p>here we target the  wrapper and select the p element. then append first-of-type and target first-letter specifically. you can then reuse the same option in other parts of your design by changing the wrapper variable</p>
</div>
```

## CSS

```css
.content-section p:first-of-type::first-letter {
    color: #f3f3f3;
    float:  left;
    font-size: 4rem;
    line-height: 4vw;
    padding-right: 8px;
 /* border: 0.25em double; */
}
```