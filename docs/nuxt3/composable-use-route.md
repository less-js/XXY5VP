---
title: Nuxt3 useRoute返回当前路由地址 - Nuxt3中文文档
description: useRoute返回当前路由，必须在设置函数、插件或路由中间件中调用。在 Vue 中可以使用$route访问路由。
tags: 
  - Nuxt3,useRoute
head:
  - - meta
    - name: keywords
      content: Nuxt3,useRoute
---

# `useRoute` - 返回当前路由地址

`useRoute`返回当前路由地址，必须在`setup()`、插件或路由中间件中调用。

在 Vue 中可以使用`$route`访问路由。

## `params`

下面的例子通过`useFetch`请求数据，使用动态页面参数`slug`作为 URL 的一部分。

```vue
<!-- ~/pages/[slug].vue -->
<script setup>
const route = useRoute()
const { data: mountain } = await useFetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
</script>

<template>
  <div>
    <h1>{{ mountain.title }}</h1>
    <p>{{ mountain.description }}</p>
  </div>
</template>
```

## `query`

如果要获取路由的查询参数（如: 获取`/test?example=true`中的`example`），则用`useRoute().query`。

## 其它

除了`params`和`query`，`useRoute()`还提供下列与当前路由相关的信息：

- fullPath: URL 编码与路由地址有关。包括 path、 query 和 hash

- hash: 已解码 URL 的`hash`部分。总是以`#`开头。如果 URL 中没有 hash，则为空字符串

- matched: 与给定路由地址匹配的标准化的路由记录数组

- meta: 附加到路由记录的自定义数据

- name: 路由记录的唯一名称

- path: 编码 URL 的 pathname 部分，与路由地址有关

- redirectedFrom: 在结束于当前路由位置之前尝试访问的路由位置

> 更多信息请阅读：https://router.vuejs.org/zh/api/#routelocationnormalized

