---
title: Nuxt3 <NuxtLink>链接组件
description: Nuxt 提供＜NuxtLink＞组件来处理应用程序中的任何类型的链接。＜NuxtLink＞是 Vue Router 的＜RouterLink＞组件和 HTML 的＜a＞标签的直接替代品。

tags: 
  - nuxt3,<NuxtLink>,nuxt链接组件,Nuxt3组件
head:
  - - meta
    - name: keywords
      content: nuxt3,<NuxtLink>,nuxt链接组件,Nuxt3组件
---

# `<NuxtLink>` - 链接组件

Nuxt 提供`＜NuxtLink＞`组件来处理应用程序中的任何类型的链接。

`＜NuxtLink＞`是 Vue Router 的`＜RouterLink＞`组件和 HTML 的`＜a＞`标签的直接替代品。它智能地确定链接是内部的还是外部的，并自动优化，如外部链接会自动添加`rel`、`target`等属性。

## 外部链接

使用`＜NuxtLink＞`组件链接到外部网站：

```vue
<template>
  <!-- <a href="https://lessjs.com" rel="noopener noreferrer">...</a> -->
  <NuxtLink to="https://lessjs.com">
    Less JS
  </NuxtLink>
</template>
```

## 内部链接

使用`＜NuxtLink＞`组件链接到应用程序的另一个页面。

```vue
<template>
  <NuxtLink to="/about">
    About page
  </NuxtLink>
  <!-- <a href="/about">...</a> (+Vue Router & prefetching) -->
</template>
```

## target 和 rel 属性

`＜NuxtLink＞`与`target`、`rel`和`noRel`props一起使用。

```vue
<template>
  <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
    Nuxt Twitter
  </NuxtLink>
  <!-- <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener noreferrer">...</a> -->

  <NuxtLink to="https://discord.nuxtjs.org" target="_blank" rel="noopener">
    Nuxt Discord
  </NuxtLink>
  <!-- <a href="https://discord.nuxtjs.org" target="_blank" rel="noopener">...</a> -->

  <NuxtLink to="https://github.com/nuxt" no-rel>
    Nuxt GitHub
  </NuxtLink>
  <!-- <a href="https://github.com/nuxt">...</a> -->

  <NuxtLink to="/contact" target="_blank">
    Contact page opens in another tab
  </NuxtLink>
  <!-- <a href="/contact" target="_blank" rel="noopener noreferrer">...</a> -->
</template>
```

## Props

to：任何 URL 或来自 Vue Router 的[路由对象](https://router.vuejs.org/api/#routelocationraw)

href：`to`的一个别名。如果和`to`一起使用，`href`将被忽略

target：应用于链接的目标属性值

rel：用于链接的`rel`属性值。对于外部链接，默认为 "noopener noreferrer"。

noRel：如果设置为 "true"，则没有rel属性将被添加到链接上。

activeClass：适用于链接激活时。与 Vue Router 的[`active-class`](https://router.vuejs.org/zh/api/index.html#active-class)在内部链接上的作用相同。默认为 Vue Router 的默认值是`router-link-active`。

exactActiveClass：链接精准激活时，应用于渲染的`<a>`的 class。与Vue Router在内部链接上的`exact-active-class`的作用相同。默认为 Vue Router 的默认值是`router-link-exact-active"`。

replace：与内部链接上的 Vue Router 的[`replace`](https://router.vuejs.org/zh/api/index.html#replace)相同。

ariaCurrentValue：当链接激活时，传递给属性`aria-current`的值。与内部链接上的 Vue Router 的[`aria`](https://router.vuejs.org/zh/api/index.html#aria-current-value)相同。

external：强制将链接视为外部（true）或内部（false）。

custom：`＜NuxtLink＞`是否应将其内容包装在`＜a＞`元素中。它允许完全控制链接的呈现方式以及单击时导航的工作方式。工作原理与 Vue Router 的[`custom`](https://router.vuejs.org/zh/api/index.html#custom)相同。

> 可以覆盖默认值，如果要更改默认值，请参见覆盖默认值。

## 自定义`<NuxtLink>`

可以通过使用`defineNuxtLink`创建自己的链接组件来覆盖`＜NuxtLink＞`默认值。

```ts
// ~/components/MyNuxtLink.ts
export default defineNuxtLink({
  componentName: 'MyNuxtLink',
  /* see signature below for more */
})
```

可以像往常一样使用`＜MyNuxtLink/＞`组件和新的默认值。

[在线示例](https://stackblitz.com/github/nuxt/framework/tree/main/examples/routing/nuxt-link?file=components%2FMyNuxtLink.ts&terminal=dev)

`defineNuxtLink`类型：

```ts
defineNuxtLink({
  componentName?: string;
  externalRelAttribute?: string;
  activeClass?: string;
  exactActiveClass?: string;
}) => Component
```

componentName：定义的`＜NuxtLink＞`组件的名称。

externalRelAttribute：应用于外部链接的默认`rel`属性值。默认为`noopener-noreferrer`。将其设置为`''`以禁用。

activeClass：适用于链接激活时。与 Vue Router 的[`active-class`](https://router.vuejs.org/zh/api/index.html#active-class)在内部链接上的作用相同。默认为 Vue Router 的默认值是`router-link-active`。


exactActiveClass：链接精准激活时，应用于渲染的`<a>`的 class。与Vue Router在内部链接上的`exact-active-class`的作用相同。默认为 Vue Router 的默认值是`router-link-exact-active"`。

> 查看更多[`＜NuxtLink＞`](https://v3.nuxtjs.org/examples/routing/nuxt-link/)在线示例