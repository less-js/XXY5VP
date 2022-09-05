---
title: Nuxt3 app.config.ts APP配置文件
description: Nuxt3 app.config.ts应用程序配置文件轻松地提供运行时应用程序配置。它的扩展名可以是.ts、.js或.mjs。
tags: 
  - Nuxt3,app.config.ts,Nuxt3配置
head:
  - - meta
    - name: keywords
      content: Nuxt3,app.config.ts,Nuxt3配置
---

# Nuxt3 app.config.ts - APP 配置

Nuxt3 `app.config.ts`应用程序配置文件提供运行时应用程序配置。它的扩展名可以是`.ts`、`.js`或`.mjs`。

```ts
// app.config.ts
export default defineAppConfig({
  foo: 'bar'
})
```

::: warning
不要把任何私密数据放在`app.config`文件中。它将暴露给客户端。
:::

## 定义 App Config

在`app.config`文件中定义配置:

```ts
// app.config.ts
export default defineAppConfig({
  theme: {
    primaryColor: '#ababab'
  }
})
```

使用`useAppConfig`组合函数获取配置信息:

```ts
const appConfig = useAppConfig()

console.log(appConfig.theme)
```

## 类型接口

Nuxt 会尝试从`app.config`中自动生成一个类型接口。

也可以手动输入app config：

```ts
// index.d.ts
declare module '@nuxt/schema' {
  interface AppConfig {
    /** Theme configuration */
    theme: {
      /** Primary app color */
      primaryColor: string
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
```