---
title: 纯CSS实现手风琴效果
description: 纯CSS实现手风琴效果
tags: 
  - CSS,@keyframes
head:
  - - meta
    - name: keywords
      content: CSS,@keyframes
---

# 纯CSS实现手风琴效果

通过`@keyframes`实现手风琴效果

## HTML

```html
<main>
  <details open>
    <summary>Accordion Tab #1</summary>
    <div class="tab-content">
      <p>your text goes here</p>
    </div>
  </details>

  <details>
    <summary>Accordion Tab #2</summary>
    <div class="tab-content">
      <p>your text goes here</p>
    </div>
  </details>

  <details>
    <summary>Accordion Tab #3</summary>
    <div class="tab-content">
      <p>your text goes here</p>
    </div>
  </details>
</main>
```

## CSS

```css
/* .tab-content can be styled as you like */
main {
  max-width: 400px;
  margin: 0 auto;
}
p {
    text-align: justify;
    font-family: monospace;
    font-size: 13px;
}
summary {
  font-size: 1rem;
  font-weight: 600;
  background-color: #f3f3f3;
  color: #000;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
}
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}
@keyframes sweep {
  0%    {opacity: 0; margin-top: -10px}
  100%  {opacity: 1; margin-top: 0px}
}
details > summary::after {
  position: absolute;
  content: "+";
  right: 20px;
}
details[open] > summary::after {
  position: absolute;
  content: "-";
  right: 20px;
}
details > summary::-webkit-details-marker {
  display: none;
}
```