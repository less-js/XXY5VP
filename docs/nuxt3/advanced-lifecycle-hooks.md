---
title: Nuxt3 Lifecycle Hooks生命周期钩子 - Nuxt3中文文档
description: Nuxt3 提供了一个强大的`Hooks`系统，使用unjs/hookable提供的`Hooks`扩展几乎每个方面。
tags: 
  - Nuxt3,Lifecycle Hooks
head:
  - - meta
    - name: keywords
      content: Nuxt3,Lifecycle Hooks
---

# `Lifecycle Hooks` - 生命周期钩子

Nuxt提供了一个强大的`Hooks`系统，使用[`unjs/hookable`](https://github.com/unjs/hookable)提供的`Hooks`扩展几乎每个方面。


## 构建时钩子

这些钩子可用于[Nuxt 模块](/nuxt3/advanced-module-author-guide)和构建上下文。

### `nuxt.config.ts` 中使用

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  hooks: {
    'close': () => { }
  }
})
```

### Nuxt Modules 中使用

```ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('close', async () => { })
  })
})
```

## 运行时钩子

App 钩子主要被[Nuxt 插件](/nuxt3/directory-plugins)用来钩住渲染生命周期，但也可用于`Vue composables`

### 插件中使用

```ts
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', () => {
        /* your code goes here */
     })
})
```

### 所有可用 Hooks 列表

| Hook | 参数 | 环境 | 描述 |
| ------------- |:-------------:| :-----------:| :------------|
| `app:created` | `vueApp` | Server & Client | 当`vueApp`实例被创建时被调用 |
| `app:error`   | `err`    | Server & Client | 发生致命错误时调用 |
| `app:error:cleared`   | `{ redirect? }`    | Server & Client | 发生致命错误时调用 |
| `app:data:refresh`   | `keys?`    | Server & Client | （internal） |
| `vue:setup`   | `-`    | Server & Client | （internal） |
| `vue:error`   | `err, target, info`    | Server & Client | 当 vue 错误传播到根组件时调用[阅读更多](https://cn.vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured) |
| `app:rendered`   | `renderContext`    | Server | 当 SSR 渲染完成时被调用 |
| `app:redirected`   | `-`    | Server | 在 SSR 重定向之前调用 |
| `app:beforeMount`   | `vueApp`    | Client | App 挂载之前调用 |
| `app:mounted`   | `vueApp`    | Client | App 初始化和挂载完成后调用 |
| `app:suspense:resolve`   | `appComponent`    | Client | 发生在[Suspense](https://cn.vuejs.org/guide/built-ins/suspense.html) resolve 事件时 |
| `app:start`   | `pageComponent?`    | Client | 发生在[Suspense](https://cn.vuejs.org/guide/built-ins/suspense.html) pending 事件时 |
| `app:finish`   | `pageComponent?`    | Client | 发生在[Suspense](https://cn.vuejs.org/guide/built-ins/suspense.html) resolve 事件之后 |


