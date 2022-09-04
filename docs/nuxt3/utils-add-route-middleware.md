---
title: Nuxt3 addRouteMiddleware动态添加路由中间件 - Nuxt3中文文档
description: Nuxt3 是一个用于在 Nuxt 中实现动态添加路由中间件的辅助方法。
tags: 
  - Nuxt3,addRouteMiddleware
head:
  - - meta
    - name: keywords
      content: Nuxt3,addRouteMiddleware
---

# `addRouteMiddleware` - 动态添加路由中间件

`addRouteMiddleware()`是一个在 Nuxt 中实现动态添加路由中间件的辅助方法。

::: tip
路由中间件是存储在 Nuxt 应用程序的[`middleware`目录](/nuxt3/directory-middleware)中的导航卫士（除非[另有设置](https://v3.nuxtjs.org/api/configuration/nuxt.config#middleware)）。
:::

## 用法

```ts
addRouteMiddleware (name: string | RouteMiddleware, middleware?: RouteMiddleware, options: AddRouteMiddlewareOptions = {})
```

## 参数

- `name`

type: string | RouteMiddleware

`name`可以是字符串，也可以是`RouteMiddleware`类型的函数。 该函数将`to`(即将要进入的路由)作为第一个参数，将`from`(当前导航正要离开的路由)作为第二个参数，这两个参数都是 Vue 路由对象。

> 了解有关[路由对象](/nuxt3/composable-use-route)详细信息

- `middleware`

type: RouteMiddleware

`middleware`参数是一个`RouteMiddleware`类型的函数。和`name`参数是函数时一样，具有`to`和`from`参数。如果`addRouteMiddleware()`中的第一个参数是函数时，它就成为可选参数。


- `options`

type: AddRouteMiddlewareOptions

一个可选的`options`参数允许把`global`的值设置为`true`，以表明路由中间件是否是全局的（默认设置为`false`）。

## 匿名路由中间件

匿名路由中间件没有名称，它的第一个参数是函数。

```ts
// ~/plugins/my-plugin.ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware((to, from) => {
    if (to.path === '/forbidden') {
      return false
    }
  })
})
```

## 命名路由中间件

命名路由中间件需要一个字符串作为第一个参数，一个函数作为第二个参数。

当在一个插件中定义时，它将覆盖位于`middleware`目录下的同名中间件。

```ts
// ~/plugins/my-plugin.ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware('named-middleware', () => {
    console.log('named middleware added in Nuxt plugin')
  })
})
```

## 全局路由中间件

可以设置可选的第三个参数`{ global: true }`，表明该路由中间件是否是全局的：

```ts
// ~/plugins/my-plugin.ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-middleware', (to, from) => {
      console.log('global middleware that runs on every route change')
    },
    { global: true }
  )
})
```