---
title: Nuxt3 plugins 插件目录 - Nuxt3中文文档
description: Nuxt3 会自动读取 plugins 插件目录中的文件并加载它们。可以在文件名中使用`.server`或`.client`后缀，以便只在服务器或客户端加载一个插件。
tags: 
  - Nuxt3,Nuxt3 plugins,Nuxt3插件
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3 plugins,Nuxt3插件
---

# Plugins - 插件目录

Nuxt 会自动读取`plugins`目录中的文件并加载它们。可以在文件名中使用`.server`或`.client`后缀（如：`focus.client.ts`），以便只在服务器或客户端加载一个插件。

> 所有在`plugins`目录中的插件都是自动注册的，不必在`nuxt.config.ts`中单独配置。

## 哪些文件被注册

只有`plugins`目录的顶层文件（或任何子目录中的`index`文件）会被注册为插件。

比如说：

```
plugins
  | - myPlugin.ts
  | - myOtherPlugin
  | --- supportingFile.ts
  | --- componentToRegister.vue
  | --- index.ts
```

只有`myPlugin.ts`和`myOtherPlugin/index.ts`会被注册。

## 创建插件

传递给插件的唯一参数是`nuxtApp`。

```ts
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
})
```

## 在插件中使用 Composables

可以在 Nuxt 插件中使用[`Composables`](/nuxt3/directory-composables)

```ts
export default defineNuxtPlugin((NuxtApp) => {
  const foo = useFoo()
})
```

但是，请记住有一些限制和差异：

1. 如果`composable`依赖于后来注册的另一个插件，它可能无法工作。

原因是：插件是依次按顺序调用的，而且是在其他东西之前。这回导致可能会使用一个依赖于另一个尚未被调用的插件的`composable`。

2. 如果`composable`依赖于`Vue.js`的生命周期，它将无法工作。

原因是：通常情况下，`Vue.js`的`composables`会绑定到当前的组件实例，而插件只绑定到`nuxtApp`实例。

## 自动提供帮助方法

如果想在`NuxtApp`实例上提供`helper`功能，只需在插件中返回一个带[`provide`](/nuxt3/composable-use-nuxt-app#provide-name-value)键值的对象即可。

例如：

```ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})
```

在另一个文件中使用：

```vue
<template>
  <div>
    <!-- 直接调用 -->
    {{ $hello('world') }}
  </div>
</template>

<script setup lang="ts">
// 也可以在此处使用
const { $hello } = useNuxtApp()
</script>
```

## 插件类型

如果从插件返回 helpers，它们将被自动加上类型；如果调用`useNuxtApp()`，会在这个返回值中发现它们的类型，在模板中也是这样自动处理。

::: danger
如果需要在另一个插件中使用提供的 helper，则可以调用`useNuxtApp()`来获取类型的版本。但一般来说应避免这种情况，除非确定插件的调用顺序。 
:::

### 进阶

对于高级用例，可以声明注入属性的类型，如下所示：

```ts
// index.d.ts

declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello (msg: string): string
  }
}

export { }
```

## Vue 插件

如果想使用 Vue 插件，比如[`vue-gtag`](https://github.com/MatteoGabriele/vue-gtag)来添加`Google Analytics`标签，可以使用 Nuxt 插件来实现。

> 有一个开放的 RFC 使这更容易！参见[nuxt/framework#1175](https://github.com/nuxt/framework/discussions/1175)

首先，安装你需要的插件：

```sh
yarn add --dev vue-gtag-next
```

然后创建一个插件文件：`plugins/vue-gtag.client.js`

```js
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  // 通过 nuxtApp.vueApp 可以获取 vue 实例
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
})
```

## Vue 指令

可以在插件中注册自定义 Vue 指令。例如，在`plugins/directive.ts`中：

```ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el) {
      el.focus()
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
```

> Vue 指令文档：https://vuejs.org/guide/reusability/custom-directives.html

> Nuxt3插件在线示例：https://v3.nuxtjs.org/examples/app/plugins/