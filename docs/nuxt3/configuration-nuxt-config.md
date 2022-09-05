---
title: Nuxt3 nuxt.config.ts配置文件 - Nuxt3中文文档
description: Nuxt 可以通过一个nuxt.config.ts文件轻松配置，它的扩展名可以是.js、.ts或.mjs。
tags: 
  - Nuxt3,nuxt.config.ts,Nuxt3配置
head:
  - - meta
    - name: keywords
      content: Nuxt3,nuxt.config.ts,Nuxt3配置
---

# Nuxt3 nuxt.config.ts -  Nuxt 配置文件

使用`nuxt.config`文件轻松配置 Nuxt，扩展名可以是`.js`、`.ts`或`.mjs`。

```
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // My Nuxt config
})
```

为了确保配置是最新的，当检测到主配置文件、`.env`、`.nuxtignore`和`.nuxtrc`文件中的更改时，Nuxt 将完全重新启动。

> `nuxt.config`配置参数列表：https://v3.nuxtjs.org/api/configuration/nuxt.config