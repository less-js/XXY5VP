---
title: Nuxt3 defineNuxtRouteMiddleware创建命名路由中间件 - Nuxt3中文文档
description: Nuxt3 defineNuxtRouteMiddleware是一个用于创建命名路由中间件的辅助方法。
tags: 
  - Nuxt3,defineNuxtRouteMiddleware
head:
  - - meta
    - name: keywords
      content: Nuxt3,defineNuxtRouteMiddleware
---

# `defineNuxtRouteMiddleware` - 创建命名路由中间件

`defineNuxtRouteMiddleware`是一个用于创建命名路由中间件的辅助方法。

::: tip
路由中间件是存储在 Nuxt 应用程序的[`middleware`目录](/nuxt3/directory-middleware)中的导航卫士（除非[另有设置](https://v3.nuxtjs.org/api/configuration/nuxt.config#middleware)）。
:::

## 类型

```ts
defineNuxtRouteMiddleware(middleware: RouteMiddleware) => RouteMiddleware

interface RouteMiddleware {
  (to: RouteLocationNormalized, from: RouteLocationNormalized): ReturnType<NavigationGuard>
}
```

## 参数

### `middleware`

- Type: RouteMiddleware

一个接收两个 Vue Router 的路由对象作为参数的函数：第一个参数是`to`(即将要进入的路由)，第二个参数是`from`(当前导航正要离开的路由)。

> 了解有关[Vue Router 文档](https://router.vuejs.org/zh/api/#routelocationnormalized)中`RouteLocationNormalized`的更多信息。

## 示例：显示错误页面

使用路由中间件抛出错误并显示有用的错误消息

```ts
// ~/middleware/error.ts
export default defineNuxtRouteMiddleware((to) => {
  if (to.params.id === '1') {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
})
```

上述路由中间件将用户重定向到`~/error.vue`文件中定义的自定义错误页面，并公开从中间件传递的错误消息和代码。

## 示例：重定向

在路由中间件中结合使用`useState`和`navigateTo`辅助方法，根据用户的认证状态重定向到不同的路由。

```ts
// ~/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')
  
  if (!auth.value.isAuthenticated) {
    return navigateTo('/login')
  }

  return navigateTo('/dashboard')
})
```

`navigateTo`和`abortNavigation`都是全局可用的辅助f方法，可以在`defineNuxtRouteMiddleware`中使用