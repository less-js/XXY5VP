---
title: Nuxt3 useRequestHeaders获取请求头 - Nuxt3中文文档
description: 在页面、组件和插件中，可以使用`useRequestHeaders`来获取传入的请求。
tags: 
  - Nuxt3,useRequestHeaders
head:
  - - meta
    - name: keywords
      content: Nuxt3,useRequestHeaders
---

# `useRequestHeaders` - Cookie 读写

在页面、组件和插件中，可以使用`useRequestHeaders`来获取请求头。

如：

```js
// Get all request headers
const headers = useRequestHeaders()

// Get only cookie request header
const headers = useRequestHeaders(['cookie'])
```

::: tip
`useRequestHeaders`在浏览器中将返回一个空对象`{}`
:::