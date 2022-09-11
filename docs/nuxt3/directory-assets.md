---
title: Nuxt3 Assets - 静态资源目录 - Nuxt3中文文档
description: Nuxt提供了一个可定制的布局框架，可以在整个应用程序中使用，是提取常见的 UI 或代码模式为可重用的布局组件的理想选择。
tags: 
  - Nuxt3 Assets,Nuxt3,Nuxt3静态资源
head:
  - - meta
    - name: keywords
      content: Nuxt3 Assets,Nuxt3,Nuxt3静态资源
---

# Assets - 静态资源目录

Nuxt使用两个目录来处理样式表、字体或图像等资源:

- `assets`: 该目录用于构建工具 (Vite 或 Webpack) 需要打包处理 (如：压缩) 后的所有资源，包括样式表、字体等。

- `public`: 原样打包，即开发环境下是什么样的，构建打包后发布到服务器后也是什么样的。直接放在服务器根目录，包含必须保留其名称 (例如: robots.txt) 或不会更改 (例如: favicon.ico) 的公共文件。

## `public`

`public`目录中的静态资源是公开可用。

可以用代码或直接通过`https://xxy5.com/images/logo.png`的方式获取`public`目录中的文件、图片等。

如: 

```vue
<template>
  <img src="/images/logo.png" alt="XXY" />
</template>
```

## `assets`

Nuxt 使用 Vite 或 Webpack 来构建和打包绑应用程序。这些构建工具的主要功能是处理 JavaScript 文件，但它们可以通过 (Vite) 或 (Webpack) 处理其他类型的资源，如样式表、字体或 SVG。这一步主要是为了性能或缓存的目的 (如样式表的最小化) 而对原始文件进行转换。

按照惯例，Nuxt 使用`assets`目录来存储这些文件，但这个目录没有自动扫描功能，可以使用任何名称。

在应用程序的代码中，通过使用`~/assets/`路径来读取位于`assets`目录下的文件。

如:

```vue
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

::: tip
Nuxt 不会以静态 URL (如: `/assets/my-file.png`) 提供`assets`目录中的文件。如果需要静态URL，请使用`public`目录。
:::

## 全局样式导入

全局样式可以在[`nuxt.config`](/nuxt3/configuration-nuxt-config)文件中使用 Vite 选项的方式导入: 

`CSS`

```css
/* ~/assets/_colors.scss */
$primary: #49240F;
$secondary: #E4A79D;

/* ~/assets/_colors.sass */
$primary: #49240F
$secondary: #E4A79D
```

`nuxt.config.ts`

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        },
        sass: {
          additionalData: '@use "@/assets/_colors.sass" as *'
        }
      }
    }
  }
})
```