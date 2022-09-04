---
title: Nuxt3 ＜NuxtLayout＞布局组件 - Nuxt3中文文档
description: Nuxt3可以使用`<NuxtLayout />`组件来激活`app.vue`或`error.vue`的默认布局,甚至是`pages`目录下的页面组件的默认布局。
tags: 
  - nuxt3,＜NuxtLayout>,nuxt布局组件,Nuxt3组件
head:
  - - meta
    - name: keywords
      content: nuxt3,＜NuxtLayout>,nuxt布局组件,Nuxt3组件
---

# `＜NuxtLayout＞` - 布局组件

可以使用`<NuxtLayout />`组件来激活`app.vue`或`error.vue`的默认布局。

```vue
<!-- ~/app.vue -->
<template>
  <NuxtLayout>
    some page content
  </NuxtLayout>
</template>
```

`<NuxtLayout />`可以用来覆盖`app.vue`、`error.vue`甚至是`pages`目录下的页面组件的默认布局。

## `name` prop

`<NuxtLayout />`组件接受一个`name`prop，可以通过它来使用一个非默认的布局，其中`name`可以是一个静态字符串、`reactive`或一个`computed`属性。它必须与`layouts`目录中相应的布局文件的名称相匹配。

如：

```vue
<!-- ~/pages/index.vue -->
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// layouts/custom.vue
const layout = 'custom'
</script>
```

::: tip
请注意，布局名称被规范化为`kebab-case`，所以如果布局文件被命名为`errorLayout.vue`，当作为一个名称属性传递给`<NuxtLayout />`时，它将成为`error-layout`。
:::

```vue
<!-- ~/error.vue -->
<template>
  <NuxtLayout name="error-layout">
    <NuxtPage />
  </NuxtLayout>
</template>
```

## Layout and Transition

`<NuxtLayout />`通过`<slot />`渲染传入的内容，然后将其包裹在 Vue 的`<Transition />`组件上以激活布局过渡。为了使其按预期工作，建议`<NuxtLayout />`不要成为页面组件的根元素。

```vue
<!-- ~/pages/index.vue -->
<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> Some header template content. </template>
    </NuxtLayout>
  </div>
</template>
```

> 详情参考[Layouts目录](/nuxt3/directory-layouts)










