---
title: Nuxt3 layouts - 布局目录 - Nuxt3中文文档
description: Nuxt提供了一个可定制的布局框架，可以在整个应用程序中使用，是提取常见的 UI 或代码模式为可重用的布局组件的理想选择。
tags: 
  - Nuxt3 layouts,Nuxt3,Nuxt3布局
head:
  - - meta
    - name: keywords
      content: Nuxt3 layouts,Nuxt3,Nuxt3布局
---

# Layouts - 布局目录

Nuxt提供了一个可定制的布局框架，可以在整个应用程序中使用，是提取常见的 UI 或代码模式为可重用的布局组件的理想选择。

布局被放置在`layouts`目录下，使用时将通过异步导入自动加载。布局的使用方法是将`<NuxtLayout>`添加到`app.vue`中，并将布局属性设置为页面元数据的一部分（如果你使用`~/pages`集成），或者通过手动将其指定为`<NuxtLayout>`的一个`prop`。(注意：布局名称被规范化为`kebab-case`，所以`someLayout`变成了`some-layout`）。

如果你的应用程序中只有一个单一的布局，我们建议使用`app.vue`代替。

::: tip
与其他组件不同，`layout`必须有一个单一的根元素，以允许 Nuxt 在布局变化之间应用过渡，这个根元素不能是一个`<slot />`。
:::

## Default Layout

添加一个`~/layouts/default.vue`：

```vue
<template>
  <div>
    所有页面共享一些默认布局
    <slot />
  </div>
</template>
```

在一个`layout`文件中，`layout`的内容将在`<slot />`中加载，而不是使用一个特殊的组件。

如果是使用`app.vue`，需要添加`<NuxtLayout>`：

```vue
<template>
  <NuxtLayout>
    some page content
  </NuxtLayout>
</template>
```

## 自定义 Layout

```
-| layouts/
---| default.vue
---| custom.vue
```

1. 直接覆盖默认布局，如下：

`app.vue`

```vue
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// 根据需求来设置 layout
const layout = "custom";
</script>
```

2. 设置不同的布局：

`~/pages/index.vue`

```vue
<script>
// 在`<script setup>`和`<script>`中都可以使用
definePageMeta({
  layout: "custom",
});
</script>
```
> 查看[definePageMeta](/nuxt3/directory-pages#page-metadata-页面元数据)详细说明

`~/app.vue`

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

`~/layouts/custom.vue`应用到`~/pages/index.vue`

```vue
<template>
  <div>
    自定义布局
    <slot />
  </div>
</template>
```

`~/layouts/default.vue`：应用到`app.vue`

```vue
<template>
  <div>
    默认布局
    <slot />
  </div>
</template>
```

如上实现了`app.vue`和`~/pages/index.vue`有各自有不同的布局方式

## 重写布局

如果使用`~/pages`集成，可以通过设置`layout: false`，然后<strong style="font-weight: 700">在`~/pages`页面中使用`<NuxtLayout>`组件结合`slot`</strong>来实现完全控制。

`~/pages/index.vue`

```vue
<template>
  <div> <!-- 这里必须有一个根元素 -->
    <NuxtLayout name="custom">
      <template #header> Some header template content. </template>

      The rest of the page
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false, // 禁用 layout
});
</script>
```

`~/layouts/custom.vue`

```vue
<template>
  <div>
    <header>
      <slot name="header">
        Default header content
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
```

::: tip
如果页面中使用`<NuxtLayout>`，确保它不是根元素（或者禁用layout/page transitions）。
:::

## 动态布局

布局中使用`ref`和`computed`属性：

```vue
<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup>
const route = useRoute()
function enableCustomLayout () {
  route.meta.layout = "custom"
}
definePageMeta({
  layout: false, // 需要设置组件选项 layout: false
});
</script>
```

> 阅读在线示例：https://v3.nuxtjs.org/examples/routing/layouts/