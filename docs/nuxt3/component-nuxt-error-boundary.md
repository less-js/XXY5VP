---
title: Nuxt3 <NuxtErrorBoundary>错误处理组件 - Nuxt3中文文档
description: Nuxt提供了＜NuxtErrorBoundary＞组件，使用Vue的onErrorCaptured钩子处理默认插槽中发生的客户端错误。
tags: 
  - nuxt3,<NuxtErrorBoundary>,Nuxt3组件,Nuxt3错误处理
head:
  - - meta
    - name: keywords
      content: nuxt3,<NuxtErrorBoundary>,Nuxt3错误处理,Nuxt3组件
---

# `<NuxtErrorBoundary>` - 错误处理组件

Nuxt提供了`＜NuxtErrorBoundary＞`组件，使用 Vue 的[`onErrorCaptured`](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured)钩子处理默认插槽中发生的客户端错误。

## Events

`@error`：组件的默认插槽抛出错误时发出的事件。

```vue
<template>
  <NuxtErrorBoundary @error="logSomeError">
    <!-- ... -->
  </NuxtErrorBoundary>
</template>
```

## Slots

`#error`：指定发生错误时要显示的回退内容。

```vue
<template>
  <NuxtErrorBoundary>
    <!-- ... -->
    <template #error="{ error }">
      <p>An error occurred: {{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>
```

> 参考[Nuxt 错误处理](https://v3.nuxtjs.org/guide/features/error-handling/)相关文档