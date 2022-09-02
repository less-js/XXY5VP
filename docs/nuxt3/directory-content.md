---
title: Nuxt3 content内容目录
description: Nuxt Content 模块读取项目中content目录中的内容，并解析`.md`、`.yml`、`.csv`和`.json`文件，为应用程序创建一个基于文件的 CMS。
tags: 
  - Nuxt3 content
head:
  - - meta
    - name: keywords
      content: Nuxt3 content
---

# Content - 内容目录

Nuxt Content 模块读取项目中的`content`目录，并解析`.md`、`.yml`、`.csv`和`.json`文件，为应用程序创建一个基于文件的 CMS。

- 用内置的组件渲染内容。
- 用类似 MongoDB 的 API 查询内容。
- 用 MDC 语法在 Markdown 文件中使用 Vue 组件。
- 自动生成导航。

## 安装

安装`@nuxt/content`模块到你的应用程序中：

```sh
# yarn 
yarn add --dev @nuxt/content

# npm
npm install --save-dev @nuxt/content

# pnpm
pnpm add -D @nuxt/content
```

然后在`nuxt.config.ts`的`modules`中添加`@nuxt/content`：

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
```

## 创建内容

把你的 Markdown 文件放在你项目根目录下的`content`目录内：

`content/index.md`：
```md
# Hello Content
```

`@nuxt/content`模块会自动加载并解析它们。

## 页面渲染

为了渲染内容页，使用`ContentDoc`组件添加一个[`catch-all route`通用路由](/nuxt3/directory-pages#Catch-all-Route-通用路由)：

`~/pages/[...slug].vue`

```vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

:::tip
`@nuxt/content`模块文档：https://content.nuxtjs.org
:::