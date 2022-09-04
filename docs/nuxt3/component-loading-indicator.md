---
title: Nuxt3 <NuxtLoadingIndicator>页面加载进度组件 - Nuxt3中文文档
description: Nuxt 提供<NuxtLoadingIndicator>组件在页面导航上显示当前页面的加载状态进度条。
tags: 
  - nuxt3,<NuxtLoadingIndicator>,nuxt进度条,nuxt加载条,Nuxt3组件
head:
  - - meta
    - name: keywords
      content: nuxt3,<NuxtLoadingIndicator>,nuxt进度条,nuxt加载条,Nuxt3组件
---

# `<NuxtLoadingIndicator>` - 页面加载进度组件

Nuxt 提供`<NuxtLoadingIndicator>`组件在页面导航上显示当前页面的加载状态进度条。

## Basic

添加`<NuxtLoadingIndicator />`到`app.vue`或`layout`组件中。

```vue
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator /> <!-- here -->
    <NuxtPage />
  </NuxtLayout>
</template>
```

## Props

- color：加载条颜色

- height：加载条高度，单位：`px`，默认值为：3

- duration：加载条加载持续时间，单位：毫秒，默认值为：2000

- throttle：显示加载条之前等待的时间，单位：毫秒，默认值为：200

## 自定义加载条

此组件是完全可选的。可以基于[此文件](https://github.com/nuxt/framework/blob/main/packages/nuxt/src/app/components/nuxt-loading-indicator.ts)实现自定义加载条。