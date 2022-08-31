---
title: Nuxt3 composables 组合API目录
description: Nuxt3 composables 组合API目录是存放组合 API（Hooks） 的地方，以自动导入的方式将 Vue composables 导入到你的应用程序中!
tags: 
  - Nuxt3,Nuxt3 composables
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3 composables
---

# Nuxt3 composables - 组合API目录

Nuxt3 可以将`Vue composables`自动导入到你的应用程序中!

Nuxt 会自动生成文件`.nuxt/auto-imports.d.ts`来声明这些类型。

请注意，必须运行`nuxi prepare`、`nuxi dev`或`nuxi build`，以便让 Nuxt 生成类型。如果你在没有运行开发服务器的情况下创建一个可组合的类型，Typescript 会抛出一个错误，如：`Cannot find name 'useBar'.`

## 用法

1. 命名导出

```ts
// ~/composables/useFoo.ts
export const useFoo = () => {
  return useState('foo', () => 'bar')
}
```

2. 默认导出

```ts
// ~/composables/useFoo.ts 或 ~/composables/use-foo.ts
// 默认导出以文件名的方式来进行默认导出使用，文件名必须遵循 pascalCase、camelCase 规范
export default function () {
  return useState('foo', () => 'bar')
}
```

接下来就可以在`.js`、`.ts`或`.vue`文件中使用了，使用时不用显示导入该方法， Nuxt3 会自动导入，下面给出在`app.vue`的示例：

```vue
<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup>
const foo = useFoo()
</script>
```

更多示例请查看：https://v3.nuxtjs.org/examples/auto-imports/composables/

## 例子

### Nested Composables - 嵌套 Composables

您可以使用自动导入在另一个组合中使用组合：

```ts
export const useFoo = () => {
  const nuxtApp = useNuxtApp()
  const bar = useBar()
}
```

### Access plugin injections - 访问插件注入

可以从`composables`访问插件注入：

```ts
export const useHello = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$hello
}
```

## 自动导入规则

Nuxt 仅扫描`composables`目录顶层的文件，例如：

```
composables
  | - index.ts // 扫描
  | - useFoo.ts // 扫描
  | - nested
  | --- utils.ts // 不扫描
```

只有`composables/index.ts`和`composables/useFoo.ts`会被自动扫描导入。

为了让被嵌套的模块也可以自动导入，可以重新导出它们（推荐）或配置扫描器：

### 重新导出（推荐）

从`composables/index.ts`文件中重新导出你需要的`composables`。

```ts
// composables/index.ts
// 在 index.ts 中导入 utils 组合方法，同时导出该方法
export { utils } from './nested/utils.ts'
```

### 配置扫描器

在`nuxt.config.ts`中配置扫描`composables`文件夹内的嵌套目录

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  imports: {
    dirs: [
      // 扫描顶层模块
      'composables',
      // 或用一个特定的名称和文件扩展名嵌套一级深度的扫描模块
      'composables/*/index.{ts,js,mjs,mts}',
      // 或扫描指定目录下的所有模块
      'composables/**'
    ]
  }
})
```