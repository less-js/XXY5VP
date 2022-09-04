---
title: Nuxt3 useRequestEvent获取请求事件相关的信息
description: 在页面、组件和插件中，可以使用`useRequestEvent`来获取传入的请求。
tags: 
  - Nuxt3,useRequestEvent
head:
  - - meta
    - name: keywords
      content: Nuxt3,useRequestEvent
---

# `useRequestEvent` - 获取请求事件

在页面、组件和插件中，可以使用`useRequestEvent`来获取请求事件相关的信息。

如：

```js
// Get underlying request event
const event = useRequestEvent()

// Get the URL
const url = event.req.url
```

::: tip
`useRequestEvent`只能在服务端获取，在浏览器中将返回`undefined`
:::