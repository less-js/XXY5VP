---
title: Nuxt3 useFetch异步请求数据
description: useLazyFetch是useFetch的封装，通过将lazy选项设置为true，也就是它不会阻塞路由导航。
tags: 
  - Nuxt3,Nuxt3数据请求,useFetch
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3数据请求,useFetch
---

# `useLazyFetch`

默认情况下，`useFetch`会阻止导航，直到解析其异步处理程序。

`useLazyFetch`是，通过将`useFetch`的`lazy`选项设置为`true`的封装，也就是它不会阻塞路由导航。

> 详情阅读：[useFetch](/nuxt3/composable-use-fetch) API 文档

## 示例

```vue
<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <div v-for="post in posts">
      <!-- do something -->
    </div>
  </div>
</template>

<script setup>
// 将在获取完数据之前导航。
// 直接在组件模板中处理 pending 状态和 error 状态
const { pending, data: posts } = useLazyFetch('/api/posts')
watch(posts, (newPosts) => {
  // 因为 count 一开始是空的，所以无法立即访问数据，但可以 watch 它。
})
</script>
```