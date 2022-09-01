---
title: Nuxt3 server 服务端目录
description: Nuxt3 server 服务端目录用于为 Nuxt 应用程序创建任何后端逻辑。它支持 HMR 和强大的功能，包含项目的 API 和服务器中间件（Middleware）。
tags: 
  - Nuxt3,Nuxt3 server,Nuxt3服务端
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3 server,Nuxt3服务端
---

# Nuxt3 server - 服务端目录

Nuxt会自动扫描`~/server/api`、`~/server/routes`和`~/server/middleware`目录下的文件，并根据这些目录里面的文件名自动创建支持 HMR 的API。

每个文件都应该导出一个用`defineEventHandler()`定义的默认函数。

处理程序可以直接返回 `JSON`、`Promise`或使用`event.res.end()`来返回数据。

> Nuxt3 在后端服务器这块引入了 Nitro 框架，移步到[官方网站](https://nitro.unjs.io/guide/introduction/routing)进行了解 Nitro Route

## 示例

创建`server/api/hello.ts`：

```ts
export default defineEventHandler((event) => {
  return {
    api: 'works'
  }
})
```

现在，可以使用`await $fetch('/api/hello')`调用此 API。

## Server Routes

`~/server/api`里面的文件会自动在路由中加上`/api`的前缀。对于不需要带`/api`前缀的服务器路由，可以把它们放到`~/server/routes`目录中。

如：

```ts
// ~/server/routes/hello.ts
export default defineEventHandler(() => 'Hello World!')
```

在上面的示例中，可以直接使用`http://localhost:3000/hello`访问。

## Server Middleware

Nuxt 会自动读入`~/server/middleware`中的任何文件，为项目创建服务器中间件。

中间件将在每一个请求上运行，且在任何其他服务器路由之前，添加或检查头信息，记录请求，或扩展事件的请求对象。

::: tip
中间件不应返回任何东西（也不关闭或响应请求），只检查或扩展请求上下文或抛出一个错误。
:::

如：

```ts
// ~/server/middleware/log.ts

export default defineEventHandler((event) => {
  console.log('New request: ' + event.req.url)
})
```

```ts
// ~/server/middleware/auth.ts

export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
})
```

## Server Utilities

服务器路由由[unjs/h3](https://github.com/unjs/h3)提供支持，它附带了一组方便的 helper。

> [Available H3 Request Helpers](https://www.jsdocs.io/package/h3#package-index-functions)

可以自己在`~/server/utils`目录中添加更多helper。

## 用法示例

### 匹配路由参数

在文件名中间使用中括号的方式处理动态参数，如`/api/hello/[name].ts`并可通过`event.context.params`访问动态路由参数。

如：

```js
export default defineEventHandler((event) => `Hello, ${event.context.params.name}!`)
```

现在，可以使用`await $fetch('/api/hello/nuxt')`调用此 API，获取到的数据为：`Hello nuxt!`。

### 匹配 HTTP 方法

可以创建以`.get`、`.post`、`.put`、`.delete`等为后缀的文件名来匹配对应的 [Http Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

如：

```ts
// ~/server/api/test.get.ts
export default defineEventHandler(() => 'Test get handler')

// ~/server/api/test.post.ts
export default defineEventHandler(() => 'Test post handler')
```

鉴于上面的例子，用以下方法获取`/test`。

- GET方法：返回`Test get handler`
- POST方法：返回`Test post handler`
- 任何其他方法：返回404错误

### Catch-all Route - 通用路由

Catch-all 路由对于后备路由处理很有帮助。例如，创建一个名为`~/server/api/foo/[...].ts`的文件将为所有不符合任何路由处理程序的请求注册一个万能路由，例如`/api/foo/bar/baz`。

如：

```ts
// ~/server/api/foo/[...].ts
export default defineEventHandler(() => `Default foo handler`)

// ~/server/api/[...].ts
export default defineEventHandler(() => `Default api handler`)
```

### 处理请求体

```ts
// ~/server/api/submit.post.ts
export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    return { body }
})
```

现在可以使用`$fetch('/api/submit', { method: 'post', body: { test: 123 } })`调用这个API。

::: danger
在文件名中使用`submit.post.ts`只是为了匹配可以接受请求体的 POST 方法的请求。当在 GET 请求中使用`useBody`时，`useBody`会抛出`405 Method Not Allowed`HTTP错误。
:::

### 使用查询参数处理请求

如：`/api/query?param1=a&param2=b`

```ts
// ~/server/api/query.get.ts
export default defineEventHandler((event) => {
  const query = useQuery(event)
  return { a: query.param1, b: query.param2 }
})
```

### 访问运行时配置

```ts
// ~/server/api/foo.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  return { key: config.KEY }
})
```

### 访问请求 Cookie

```ts
export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  return { cookies }
})
```

## 高级用例

### Nitro 配置

在`nuxt.config.ts`中使用`nitro`直接设置 Nitro。[Nitro 配置列表](https://nitro.unjs.io/config)

::: tip
这是一个高级选项。自定义配置可能会影响生产部署，因为当 Nitro 在 Nuxt 的次要版本（semver-minor）中升级时，配置界面可能会随着时间而改变。
:::

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // https://nitro.unjs.io/config
  nitro: {}
})
```

### 嵌套路由 

```ts
// ~/server/api/hello.ts
import { createRouter } from 'h3'

const router = createRouter()

router.get('/', () => 'Hello World')

export default router
```

### 发送流 Streams（实验）

> 这是一个实验性的功能，只在 Node.js 环境下可用。

```ts
// ~/server/api/foo.get.ts
import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {
  return sendStream(event, fs.createReadStream('/path/to/file'))
})
```

### 返回一个遗留的处理程序或中间件

```ts
// ~/server/api/legacy.ts
export default (req, res) => {
  res.end('Legacy handler')
}
```

> 使用`unjs/h3`可以提供遗留支持，但建议尽可能避免使用遗留处理程序。

```ts
// ~/server/middleware/legacy.ts
export default (req, res, next) => {
  console.log('Legacy middleware')
  next()
}
```

> 永远不要将`next()`回调与一个异步或返回Promise的传统中间件结合起来。

### 服务器存储

Nitro提供了一个跨平台的[存储层](https://nitro.unjs.io/guide/introduction/storage)。为了配置额外的存储挂载点，可以使用`nitro.storage`。

使用 Redis：

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  nitro: {
    storage: {
      'redis': {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        username: "", // needs Redis >= 6
        password: "",
        db: 0 // Defaults to 0
      }
    }
  }
})
```

创建`server/api/test.post.ts`：

```ts
export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  await useStorage().setItem('redis:test', body)
  return 'Data is set'
})
```

创建`server/api/test.get.ts`：

```ts
export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('redis:test')
  return data
})
```

`app.vue`中调用：

```vue
<template>
  <div>
    <div>Post state: {{ resDataSuccess }}</div>
    <div>Get Data: {{ resData.text }}</div>
  </div>
</template>

<script setup lang="ts">
  const { data: resDataSuccess } = await useFetch('/api/test', {
      method: 'post',
      body: { text: 'Nuxt is Awesome!' }
  })
  const { data: resData } = await useFetch('/api/test')
</script>
```