---
title: Nuxt3 useLazyAsyncData异步请求数据
description: useLazyAsyncData它不会阻塞路由导航，这意味着我们需要处理data为null的情况（或者通过default选项给data设置一个默认值）。
tags: 
  - Nuxt3,Nuxt3请求数据,useLazyAsyncData
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3请求数据,useLazyAsyncData
---

# `useLazyAsyncData`

默认情况下，`useAsyncData`会阻止导航，直到解析其异步处理程序。

`useLazyAsyncData`是通过将`useAsyncData`的`lazy`选项设置为`true`的封装，也就是它不会阻塞路由导航。

这意味着需要处理`data`为`null`的情况（或者通过`default`选项给`data`设置一个默认值）。

> 详情阅读：[useAsyncData](/nuxt3/api-use-async-data)

示例：

```vue
<template>
  <div>
    {{ pending ? 'Loading' : count }}
  </div>
</template>

<script setup>
// 将在获取完数据之前导航。
// 直接在组件模板中处理 pending 状态和 error 状态
const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))

watch(count, (newCount) => {
  // 因为 count 一开始是空的，所以无法立即访问数据，但可以 watch 它。
})
</script>
```