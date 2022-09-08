---
title: Nuxt3 nuxi generate生成静态文件 - Nuxt3中文文档
description: nuxi generate命令预先渲染应用程序的每一个路由，并将结果存储在纯HTML文件中，可以在任何静态托管服务上部署。该命令会触发nuxi build命令，并将prerender参数设置为true。
tags: 
  - nuxt3,nuxi generate,nuxt生成静态文件,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi generate,nuxt生成静态文件,Nuxt3命令
---

# `nuxi generate` - 生成静态文件

`nuxi generate`命令预先渲染应用程序的每一个路由，并将结果存储在纯`HTML`文件中(自动生成一个`dist`目录)，可以在任何静态托管服务上部署。该命令会触发`nuxi build`命令(生成`.output`目录)，并将`prerender`参数设置为`true`。


## 语法

```sh
npx nuxi generate [rootDir]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `rootDir` | `.` | 需要 generate 的项目根目录 |