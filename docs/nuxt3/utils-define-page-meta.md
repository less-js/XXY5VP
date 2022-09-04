---
title: Nuxt3 definePageMeta创建命名路由中间件 - Nuxt3中文文档
description: Nuxt3 definePageMeta是一个编译宏，可以用它来为`pages`目录下的页面组件设置元数据.
tags: 
  - Nuxt3,definePageMeta
head:
  - - meta
    - name: keywords
      content: Nuxt3,definePageMeta
---

# `definePageMeta` - 创建命名路由中间件

`definePageMeta`是一个编译宏，可以用它来为`pages`目录下的页面组件设置元数据（除非[另有设置](https://v3.nuxtjs.org/api/configuration/nuxt.config#pages)）。这样就可以为 Nuxt 应用程序的每个静态或动态路由设置自定义元数据。

> 阅读页面元数据中的[更多信息](/nuxt3/directory-pages#page-metadata-页面元数据)

```vue
<!-- ~/pages/some-page.vue -->
<script setup>
  definePageMeta({
    title: 'Articles'
  })
</script>
```

## 类型

```ts
definePageMeta(meta: PageMeta) => void

interface PageMeta {
  pageTransition?: boolean | TransitionProps
  layoutTransition?: boolean | TransitionProps
  key?: false | string | ((route: RouteLocationNormalizedLoaded) => string)
  keepalive?: boolean | KeepAliveProps
  layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  [key: string]: any
}
```

## 参数

### `meta`

- Type: PageMeta

    接受以下页面元数据的对象：

    #### `pageTransition`

    - Type: `boolean` | [`TransitionProps`](https://cn.vuejs.org/api/built-in-components.html#transition)

        设置应用于当前页面的过渡效果的名称。还可以将此值设置为`false`以禁用页面过渡效果。

    #### `layoutTransition`

    - Type: `boolean` | [`TransitionProps`](https://cn.vuejs.org/api/built-in-components.html#transition)

        设置要应用于当前布局的过渡效果的名称。也可以将此值设置为`false`以禁用布局过渡效果。

    #### `key`

    - Type: `false` | `string` | `((route: RouteLocationNormalizedLoaded) => string)`

        当需要对`<NuxtPage>`组件重新渲染的时间进行更多的控制时，设置`key`值。

    #### `keepalive`

    - Type: `boolean` | [`KeepAliveProps`](https://cn.vuejs.org/api/built-in-components.html#keepalive)

        当想在路由变化中保留页面状态时，设置为`true`，或者使用[`KeepAliveProps`](https://cn.vuejs.org/api/built-in-components.html#keepalive)进行细粒度的控制。

    #### `layout`

    - Type: `false` | `LayoutKey` | `Ref<LayoutKey>` | `ComputedRef<LayoutKey>`

        为每个路由设置一个静态或动态的布局名称。在需要禁用默认布局的情况下，可以将其设置为`false`。

    #### `middleware`

    - Type: `MiddlewareKey` | [`NavigationGuard`](https://router.vuejs.org/zh/api/#navigationguard) | `Array<MiddlewareKey | NavigationGuard>`

        直接在`definePageMeta`中定义匿名或命名中间件。了解有关[路由中间件](/nuxt3/directory-middleware)的更多信息。

    #### `[key: string]`

    - Type: any

        除了上述属性之外，还可以设置自定义元数据。可能希望通过[增加元对象的类型](/nuxt3/directory-pages#自定义元数据)，以类型安全的方式执行此操作。

## 基础用法

下面的例子展示了:

- `key`可以是一个有返回值的函数
- `keepalive`属性如何确保`<modal>`组件在多个组件之间切换时不会被缓存
- 添加`pageType`作为一个自定义属性

```vue
<!-- ~/pages/some-page.vue -->
<script setup>
  definePageMeta({
    key: (route) => route.fullPath,

    keepalive: {
      exclude: ['modal']
    },

    pageType: 'Checkout'
  })
</script>
```

## 定义中间件

下面的例子展示了如何使用函数直接在`definePageMeta`内定义中间件。或设置为一个字符串和位于`middleware`目录的中间件文件名相匹配。

```vue
<!-- ~/pages/some-page.vue -->
<script setup>
  definePageMeta({
    // define middleware as a function
    middleware: [
      function (to, from) {
        const auth = useState('auth')
        
        if (!auth.value.authenticated) {
            return navigateTo('/login')
        }
        
        return navigateTo('/checkout')
      }
    ],

    // ... or a string
    middleware: 'auth'
    
    // ... or multiple strings
    middleware: ['auth', 'another-named-middleware']
})
</script>
```

## 定义布局

设置一个和`layouts`目录下的布局文件名相匹配的字符串。或将`layout`设置为`false`来禁用默认布局。

```vue
<!-- ~/pages/some-page.vue -->
<script setup>
  definePageMeta({
    // 设置自定义布局，该 layout 的值需要和 layouts 目录下的布局文件名相同
    layout: 'admin'
    
    // 或者 禁用默认布局
    layout: false
  })
</script>
```