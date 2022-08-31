---
title: Nuxt3 middleware 中间件目录
description: Nuxt3 middleware中间件目录主要存放全局路由中间件。Nuxt提供了一个可定制的路由中间件框架，可以在整个应用程序中使用，非常适合在导航到特定路由之前提取要运行的代码。

tags: 
  - Nuxt3，Nuxt3 middleware,Nuxt3中间件
head:
  - - meta
    - name: keywords
      content: Nuxt3，Nuxt3 middleware,Nuxt3中间件
---

# Nuxt3 middleware - 中间件目录

Nuxt 提供了一个可定制的路由中间件框架，可以在整个应用程序中使用，非常适合在导航到某个路由之前提取要运行的代码。

> 路由中间件在 Nuxt 应用程序的 Vue 中运行。尽管名称相似，但它们与服务器中间件完全不同，后者运行在应用程序的 Nitro 服务器中。

路由中间件有三种：

1. 匿名（或内联）路由中间件，直接在使用它们的页面中定义。

2. 命名的路由中间件，它被放置在`middleware`目录中，当在一个页面上使用时，将通过异步导入自动加载。(注意：路由中间件的名称被规范化为`kebab-case,`，所以`someMiddleware`变成了`some-middleware`）。

3. 全局路由中间件，被放置在`middleware`目录中（有一个`.global`的后缀，如：`auth.global.ts`），并将在每次路由变更时自动运行。

> 前两种路由中间件可以在[`definePageMeta`](/nuxt3/directory-pages#page-metadata-页面元数据)中定义。

## 书写格式

路由中间件是导航卫士，它接收当前路由和下一个路由作为参数。

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```

Nuxt 提供了两个全局可用的辅助方法，可以直接从中间件返回。

1. navigateTo (route: string | Route, options: { redirectCode: number, replace: boolean ) - 在插件或中间件中重定向到给定的路由。也可以直接调用它来执行页面导航。

2. abortNavigation (err?: string | Error) - 终止导航，并有一个可选的错误信息。

与`vue-router`文档中的导航卫士不同，第三个`next()`参数不被传递，重定向或路由取消是通过从中间件返回一个值来处理的。可能的返回值为：

- nothing - 不阻止导航，并将移动到下一个中间件函数，如果有的话，或者完成路由导航。

- return navigateTo('/') 或 return navigateTo({ path: '/' }) - 重定向到给定的路径，如果重定向发生在服务器端，将设置重定向代码为`302 Found`。

- return navigateTo('/', { redirectCode: 301 }) - 重定向到给定的路径，如果重定向发生在服务器端，将设置重定向代码为`301 Moved Permanently`。

- return abortNavigation() - 停止当前导航。

- return abortNavigation(error) - 以错误拒绝当前导航。

> 阅读[`navigateTo()`](/nuxt3/api-navigate-to)API文档

> 阅读[`abortNavigation()`](/nuxt3/api-abort-navigation)API文档

::: tip
Nuxt 建议使用上面的辅助方法来执行重定向或停止导航。`vue router`文档中描述的其他可能的返回值可能会起作用，但将来可能会出现重大变化。
:::

## 动态添加中间件

可以使用`addRouteMiddleware()`辅助方法手动添加全局或命名的路由中间件，例如从插件中添加：

```ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
})
```

示例：

一个命名的路由中间件：

```
-| middleware/
---| auth.ts
```

在页面文件中引用此路由中间件：

```vue
<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>
```

现在，在完成对该页面的导航之前，将运行`auth路由中间件`。

> 查看在线示例：https://v3.nuxtjs.org/examples/routing/middleware/