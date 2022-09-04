---
title: Nuxt3 useNuxtApp运行时上下文 - Nuxt3中文文档
description: useNuxtApp是一个内置的composable，它提供了一种访问 Nuxt 的运行时上下文的方法，在客户端和服务端都可用。
tags: 
  - Nuxt3,useNuxtApp
head:
  - - meta
    - name: keywords
      content: Nuxt3,useNuxtApp
---

# `useNuxtApp` - 运行时上下文

`useNuxtApp`是一个在客户端和服务端都可用的内置的`composable`，可用于获取 Nuxt 的运行时上下文的方法。可以获取 Vue 实例、运行时钩子、运行时配置变量和内部状态，如`ssrContext`和`payload`。

可以在`composables`、`plugins`、`components`中使用`useNuxtApp()`。

```vue
<!-- ~/app.vue -->
<script setup>
  // 获取运行时 nuxtApp 实例
  const nuxtApp = useNuxtApp()
</script>
```

## Methods

### `provide (name, value)`

`nuxtApp`是一个可以使用 Nuxt 插件进行扩展的运行时上下文。可以使用`provide()`函数来创建[Nuxt 插件](/nuxt3/directory-plugins)，以便在 Nuxt 应用程序中跨所有`composable`和`component`提供值和助手方法。

`provide()`函数接受`name`和`value`参数。

如：

```js
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

// Prints "Hello name!"
console.log(nuxtApp.$hello('name'))
```

在上面的例子中，`$hello`已经成为`nuxtApp`上下文中的一部分，它可以在所有`nuxtApp`可以访问的地方使用。

### `hook(name, cb)`

可以使用`hook()`自定义 Nuxt 的运行时。可以在 Vue.js `composables`和 [Nuxt 插件](/nuxt3/directory-plugins)中使用运行时钩子来渲染生命周期。

`hook()`函数对于通过在特定的渲染生命周期钩子来添加自定义逻辑非常有用。`hook()`函数通常用于创建 Nuxt 插件。

> 请参阅[运行时钩子](/nuxt3/advanced-lifecycle-hooks#运行时钩子)，了解 Nuxt 的可用运行时钩子。

```ts
// ~/plugins/test.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    // 自定义逻辑
  })
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
})
```

### `callhook(name, ...args)`

当调用现有`hook`时，`callHook()`返回一个`promise`。

```js
await nuxtApp.callHook('my-plugin:init')
```

## 属性

可以使用以下属性扩展和自定义应用程序，并共享状态、数据和变量。

### `vueApp`

`vueApp`是 Vue.js 的实例，可以通过`useNuxtApp().vueApp.`的方式读取下列方法：

- [component()](https://vuejs.org/api/application.html#app-component): 如果同时传递名称字符串和组件定义，则注册全局组件；如果仅传递名称，则检索已注册的组件

- [directive()](https://vuejs.org/api/application.html#app-directive): 如果同时传递名称字符串和指令定义，则注册全局自定义指令；如果仅传递名称，则检索已注册的指令（[例子](/nuxt3/directory-plugins#vue-指令)）

- [use()](https://vuejs.org/api/application.html#app-use): 安装一个[Vue.js插件](https://cn.vuejs.org/guide/reusability/plugins.html)（[例子](/nuxt3/directory-plugins#vue-插件)）

### `ssrContext`

`ssrContext`在服务端渲染期间生成，仅在服务端可用。包含可用以下属性：

- url (string) - 当前请求地址.

- event ([unjs/h3](https://github.com/unjs/h3)请求事件) - 读取当前请求的`req`和`res`对象

- payload (object) - NuxtApp payload 对象

### `payload`

`payload`将数据和状态从服务端暴露给客户端，并使它们在`window.__NUXT__`对象中可用，该对象可从浏览器访问。

`payload`在客户端暴露了以下键值，这些键值被字符串化并从服务端传递过来。

- serverRendered (boolean) - 表示响应是否是服务端渲染的

- data (object) -  当你使用`useFetch`或`useAsyncData`从 API 获取数据时，产生的`payload`可以从`payload.data`中访问。这个数据是缓存的，可以防止在一个相同的请求被多次获取的情况下获取相同的数据。

    ```js
    // ~/app.vue
    export default defineComponent({
      async setup() {
        const { data } = await useAsyncData('count', () => $fetch('/api/count'))
      }
    })
    ```

    在上面的例子中使用`useAsyncData`获取`count`的值后，如果访问`payload.data`，会看到`{ count: 1 }`记录在那里。每当页面计数增加时，`count`的值就会更新。

    当从`ssrContext`访问相同的`payload.data`时，也可以在服务端访问相同的值。

- state (object) - 当在 Nuxt 中使用`useState`设置共享状态时，这个状态数据是通过`payload.state.[name-of-your-state]`形式读取的。

```ts
// ~/plugins/my-plugin.ts
export const useColor = () => useState<string>('color', () => 'pink')

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const color = useColor()
  }
})
```

### `isHydrating`

可以使用`nuxtApp.iHydrating`（返回布尔值）检查 Nuxt 应用程序是否在客户端激活。

```ts
// ~/components/nuxt-error-boundary.ts
export default defineComponent({
  setup (_props, { slots, emit }) {
    const nuxtApp = useNuxtApp()
    onErrorCaptured((err) => {
      if (process.client && !nuxtApp.isHydrating) {
        // ...
      }
    })
  }
})
```