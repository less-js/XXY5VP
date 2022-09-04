---
title: Nuxt3 navigateTo编程式导航 - Nuxt3中文文档
description: Nuxt3 navigateTo是一个路由辅助函数，通过编程式导航实现在Nuxt应用程序中导航。
tags: 
  - Nuxt3,navigateTo
head:
  - - meta
    - name: keywords
      content: Nuxt3,navigateTo
---

# `navigateTo` - 编程式导航

`navigateTo`是一个路由辅助函数，通过编程式导航实现在 Nuxt 应用程序中导航。

`navigateTo`在服务端和客户端都可用。它可以在插件、中间件中使用，也可以直接调用来实现页面导航。

## 用法

```js
navigateTo (route: string | Route, { redirectCode = 302, replace = false })
```

`route`可以是普通字符串或一个重定向的路由对象。

::: tip
确保在使用`navigateTo()`时，总是使用`await`或`return`。
:::

## 示例

### Vue Component

```vue
<script setup>
// string
return navigateTo('/search')

// route object
return navigateTo({ path: '/search' })

// route object with query parameters
return navigateTo({
  path: '/search',
  query: {
      name: name.value,
      type: type.value
  }
})
</script>
```

### 路由中间件

```js
export default defineNuxtRouteMiddleware((to, from) => {
  // 设置 redirectCode 为 301(永久重定向)
  return navigateTo('/search', { redirectCode: 301 })
})
```

```vue
<script setup>
  await navigateTo('/', { replace: true })
</script>
```

> 更多路由中间件用法参考: [Middleware](/nuxt3/directory-middleware)

## 选项

### `redirectCode`

- Type: Number

`navigateTo`会重定向到给定的路由，当重定向发生在服务端时，默认设置重定向代码为`302 Found`。

这个默认行为可以通过提供不同的`redirectCode`作为一个可选参数来修改。常见的有[`301 Moved Permanently`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301)，可用于永久重定向。

### `replace`

- Type: Boolean

默认情况下，`navigateTo`将给定的路由推送到客户端的 Vue 路由实例中。

这种行为可以通过设置`replace: true`来改变，以表明给定的路由应该被替换。