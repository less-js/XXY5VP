---
title: Nuxt3 app.vue入口组件
description: Nuxt3 app.vue文件是 Nuxt 3 应用程序中的入口组件。
tags: 
  - Nuxt3,Nuxt3 app.vue
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3 app.vue
---

# Nuxt3 app.vue - 入口组件

`app.vue`文件是 Nuxt3 应用程序的主要组件。

## 最小应用

在 Nuxt3 中，[`pages`](/nuxt3/directory-pages)目录是可选的。如果不存在，Nuxt 将不包括`vue-router`的依赖。这在处理登陆页面或不需要路由的应用程序时很有用。

```vue
<!-- app.vue -->

<template>
  <h1>Hello World!</h1>
</template>
```

## pages

如果需要使用`pages`显示相关页面的话，需要使用`<NuxtPage>`路由出口组件:

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
```

::: tip
由于 Nuxt3 的路由出口`<NuxtPage>`在内部使用了`<Suspense>`，因此只允许有一个根节点。
:::

::: danger 注意
记住`app.vue`充当 Nuxt 应用程序的主要组件。添加到其中的任何内容（JS和CSS）都将是全局的，并包含在每个页面中。
:::

如果需要自定义页面布局的话，请查看[`layouts`目录](/nuxt3/directory-layouts)。