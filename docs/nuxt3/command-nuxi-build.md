---
title: Nuxt3 nuxi build打包构建 - Nuxt3中文文档
description: nuxi build是Nuxt命令用于打包构建.output目录，其中包含所有应用程序、服务器和依赖项，可用于生产。
tags: 
  - nuxt3,nuxi build,nuxt打包构建,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi build,nuxt打包构建,Nuxt3命令
---

# `nuxi build` - 打包构建

`nuxi build`命令用于打包构建`.output`目录，其中包含所有应用程序、服务器和依赖项，可用于生产。

## 语法

```sh
npx nuxi build [rootDir]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `rootDir` | `.` | 需要打包构建的项目根目录 |
| `prerender` | `false` | 预渲染应用程序的每个路由 (注意：这是一个实验选项，可能会改变) |


> `nuxi build`命令将`process.env`的`NODE_ENV`设置为`production`。