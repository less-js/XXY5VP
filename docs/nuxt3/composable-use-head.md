---
title: Nuxt3 useHead设置页面元属性
description: useHead是一个 SSR 友好的ref替代品。它的值将会在服务端渲染（客户端渲染期间）后保留，并且使用唯一的键在所有组件之间共享。
tags: 
  - Nuxt3,useHead
head:
  - - meta
    - name: keywords
      content: Nuxt3,useHead
---

# `useHead` - 设置页面元属性

Nuxt 为`charset`和`viewport`meta 标签提供了良好的默认值，但可以根据需要修改这些，以及以几种不同的方式为网站定制其他`meta`标签。

## `useHead` Composable

在`setup()`中，可以使用`meta`属性的对象调用`useHead`，该对象具有对应于元标记的键：`title`、`titleTemplate`、`base`、`script`、`style`、`meta`和`link`，以及`htmlAttrs`和`bodyAttrs`。还有两个简写属性，`charset`和`viewport`，用于设置相应的元标记。或者，可以传递一个函数，返回反应元数据的对象。

示例

```vue
<script setup>
useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>
```

## Title Templates

可以使用`titleTemplate`选项提供用于自定义站点标题的动态模板，例如，将站点名称添加到每个页面的标题中。

`titleTemplate`可以是字符串，其中`%s`被替换为标题，也可以是函数。如果要使用函数（为了完全控制），那么这不能在`nuxt.config`中设置，而是建议在`app.vue`文件中设置，它将适用于网站的所有页面:

```vue
<!-- ~/app.vue -->
<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
    }
  })
</script>
```

现在，如果在网站的另一个页面上用`useHead`将标题设置为"我的页面"，那么在浏览器标签中，标题将显示为 "我的页面-网站标题"。也可以传递`null`来默认网站标题。

## Body Meta Tags

可以在`link`和`script`元标签上使用`body: true`选项，把它们附加到`<body>`标签的末尾。

```vue
<script setup>
useHead({
  script: [
    {
      src: 'https://third-party-script.com',
      body: true
    }
  ]
})
</script>
```

这时，在页面`body`标签的最后会被添加：

```html
<body>
  <!-- ...body 中的其它内容 -->
  <script src="https://third-party-script.com" data-meta-body="true"></script>
</body>
```

## Meta Components

Nuxt s提供了`<Title>`, `<Base>`, `<Script>`, `<Style>`, `<Meta>`, `<Link>`, `<Body>`, `<Html>`和`<Head>`组件，这样就可以在组件的`template`中直接与元数据互动。

因为这些组件名称与本地 HTML 元素相同，所以在`template`中需要大写开头。

`<Head>`和`<Body>`可以嵌套元标签，但不会影响元标签在 HTML 中的位置。

```vue
<!-- ~/app.vue -->
<script setup>
const title = ref('Hello World')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>

    <h1>{{ title }}</h1>
  </div>
</template>
```

## 使用`definePageMeta`

在`pages`目录中可以用`definePageMeta`和`useHead`来设置当前路由的元数据。

可以先设置当前页面的标题（这是在构建时通过一个宏提取的，所以不能动态设置）。

如：

```vue
<script setup>
definePageMeta({
  title: 'Some Page'
})
</script>
```

然后，在布局文件中，可以使用之前设置的路由元数据：

`~/layouts/default.vue`:

```vue
<script setup>
const route = useRoute()

useHead({
  meta: [{ name: 'og:title', content: `App Name - ${route.meta.title}` }]
})
</script>
```

> 参考：[page-metadata](/nuxt3/directory-pages.html#page-metadata-页面元数据)