---
title: Nuxt3 useState响应式状态管理
description: useState是一个 SSR 友好的ref替代品。它的值将会在服务端渲染（客户端渲染期间）后保留，并且使用唯一的键在所有组件之间共享。
tags: 
  - Nuxt3,useNuxtApp
head:
  - - meta
    - name: keywords
      content: Nuxt3,useNuxtApp
---

# `useState` - 响应式状态管理

Nuxt 提供可组合的`useState`来创建跨组件的并且对 SSR 友好的响应式状态。

`useState`是一个 SSR 友好的`ref`替代品。它的值将会在服务端渲染（客户端渲染期间）后保留，并且使用唯一的键在所有组件之间共享。

## 类型

```ts
useState<T>(init?: () => T | Ref<T>): Ref<T>
useState<T>(key: string, init?: () => T | Ref<T>): Ref<T>
```

key: 唯一的键确保数据请求能够正确并且不被重复

init: 在 state 还未初始化时提供初始值的函数

T: （仅用作于 typescript ）描述 state 的类型

> useState 仅在 setup() 和 生命周期钩子 中生效。

::: danger
因为`useState`中的数据将被序列化为 JSON，所以它不包含任何不能序列化的内容，如类、函数或符号，这一点很重要。
:::

::: danger
🚨 请不要在`<script setup>`或`setup()`函数以外定义 `const state = ref()` 。
这种 state 将被所有访问您网站的用户共享，并可能导致内存泄漏！
:::
::: tip
✅ 而是使用`const useX = () ⇒ useState('x')`
:::

## 基本用法

在这个例子中，使用一个组件内部的`counter`状态，任何其他使用`useState('counter')`的组件都将共享同一个响应式状态。

```vue
<!-- ~/app.vue -->
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
```

`useState`基本用法 - [在线示例](https://v3.nuxtjs.org/examples/composables/use-state/)

## 高级用法

在这个例子中，使用一个`composables`从 HTTP 请求头中获取用户默认区域设置并将其保持在`local`状态中。

`locale.ts`:

```ts
import type { Ref } from 'vue'

export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value)

export const useDefaultLocale = (fallback = 'en-US') => {
  const locale = ref(fallback)
  if (process.server) {
    const nuxtApp = useNuxtApp()
    const reqLocale = nuxtApp.ssrContext?.req.headers['accept-language']?.split(',')[0]
    if (reqLocale) {
      locale.value = reqLocale
    }
  } else if (process.client) {
    const navLang = navigator.language
    if (navLang) {
      locale.value = navLang
    }
  }
  return locale
}

export const useLocales = () => {
  const locale = useLocale()
  const locales = ref([
    'en-US',
    'en-GB',
    'ko-KR',
    'zh-CN',
    'ar-EG',
    'fa-IR',
    'ja-JP-u-ca-japanese'
  ])
  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value)
  }
  return locales
}

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'full' }).format(unref(date)))
}
```

`app.vue`:

```vue
<script setup lang="ts">
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)
</script>

<template>
  <div>
    <p> {{ date }} </p>
    <label for="locale-chooser">Preview a different locale</label>
    <select id="locale-chooser" v-model="locale">
      <option v-for="l of locales" :key="l" :value="l">
        {{ l }}
      </option>
    </select>
  </div>
</template>
```

`useState`高级用法 - [在线示例](https://v3.nuxtjs.org/examples/other/locale/)

## 共享状态

通过使用[自动导入 composables](/nuxt3/directory-composables#自动导入规则)，可以定义全局的安全类型状态，并在整个应用中导入。

`~/composables/states.ts`:

```ts
export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
```

`app.vue`:

```vue
<script setup>
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>
```
