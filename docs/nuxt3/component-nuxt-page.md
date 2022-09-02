---
title: Nuxt3 <NuxtPage>组件
description: <NuxtPage>是Nuxt自带的一个内置组件。NuxtPage组件需要用来显示位于/pages目录下的顶层或嵌套页面。
tags: 
  - nuxt3,<NuxtPage>
head:
  - - meta
    - name: keywords
      content: nuxt3,<NuxtPage>
---

# `<NuxtPage>`

`<NuxtPage>`是 Nuxt 自带的一个内置组件。`<NuxtPage>`组件需要用来显示位于`pages`目录下的顶层或嵌套页面。

## Props

`<NuxtPage>`是 Vue Router 中[`<RouterView>`](https://router.vuejs.org/zh/api/index.html#router-view-props)组件的封装。和`<RouterView>`一样接受`name`和`route`Props，额外还接受一个`pageKey`属性。

- `name`

    type:`string`

    `name`帮助`RouterView`在匹配的路由记录的组件选项中使用相应的名称渲染组件。参考[Vue Router的命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html)

- `route`

    type: `RouteLocationNormalized`

    `route`是一个路由地址的所有组件都已被解析（如果所有组件都被懒加载）。参考[`<router-view>`的route属性](https://router.vuejs.org/zh/api/index.html#route)

    > Nuxt 通过扫描和渲染`pages`目录中的所有 Vue 组件文件，自动解析`name`和`route`。

- `pageKey`

    type: 'string' | 'function'

    `pageKey`有助于控制`<NuxtPage>`组件何时被重新渲染。

    通过传递`static` key，`<NuxtPage>`组件在挂载时只呈现一次。

    如：

    ```vue
    <!-- static key -->
    <NuxtPage page-key=“static” />
    ```

    也可以在`pages`目录的 Vue 组件中使用[`definePageMeta`](/nuxt3/directory-pages#子路由-keys)方法传递。

    如：

    ```vue
    <script setup>
    definePageMeta({
      key: route => route.fullPath
    })
    </script>
    ```
    
    > [在线示例](https://stackblitz.com/github/nuxt/framework/tree/main/examples/routing/pages?file=app.vue)

## 自定义 Props

`<NuxtPage>`也接受自定义的`Props`，如需要将值传递到子组件中时。这些自定义`Props`可以通过 Nuxt 中的`attrs`访问。

```vue
<NuxtPage :foobar=“123” />
```

在上面的示例中，可以使用`attrs.foobar`获得`foobar`的值。