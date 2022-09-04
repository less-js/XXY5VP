---
title: Nuxt3 abortNavigation阻止导航跳转
description: Nuxt3 abortNavigation是一个辅助函数，它可以阻止导航的发生，其唯一的参数是可选的。当传入参数后会抛出一个错误。
tags: 
  - Nuxt3,abortNavigation
head:
  - - meta
    - name: keywords
      content: Nuxt3,abortNavigation
---

# `abortNavigation` - 阻止导航跳转

`abortNavigation`仅在[路由中间件](/nuxt3/directory-middleware)内可用。

`abortNavigation`是一个可以阻止导航跳转的辅助方法。其唯一的参数是可选的，当传入参数后会抛出一个错误。

## Type

```ts
abortNavigation(err?: Error | string): false
```

## 参数

-  Type: Error | string

可选的`Error`参数

## 示例

下面的示例显示了如何在路由中间件中使用`abortNavigation`来阻止未经授权的路由访问：

```ts
// ~/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')

  if (!user.value.isAuthorized) {
    return abortNavigation()
  }
 
  return navigateTo('/edit-post')
})
```

### 当参数是`String`时

可以将错误作为字符串传递:

```ts
// ~/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth')

  if (!user.value.isAuthorized) {
    abortNavigation('Insufficient permissions.')
  }
})
```
### 当参数是`Error`对象时

可以将[`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)作为错误对象传递，例如，由`catch`块捕获:

```ts
// ~/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  try {
    // 可能抛出一个错误
  } catch (err) {
    abortNavigation(err)
  }
})
```