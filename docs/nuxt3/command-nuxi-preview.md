---
title: Nuxt3 nuxi preview预览 - Nuxt3中文文档
description: nuxi preview命令命令启动服务器，在运行build命令后预览 Nuxt 应用程序。
tags: 
  - nuxt3,nuxi preview,nuxt预览,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi preview,nuxt预览,Nuxt3命令
---

# `nuxi preview` - 预览

`nuxi preview`命令用于在运行`build`命令后启动服务来预览打包构建完成后的项目。

> `nuxi dev`命令将`process.env`的`NODE_ENV`设置为`production`。若要覆盖，请在`.env`文件中定义`NODE_ENV`或将其定义为命令行参数。

> 为了方便起见，在预览模式下，`.env`文件将加载到`process.env`中。（但是，在生产环境中，需要确保环境变量是自己设置的。）

## 语法

```sh
npx nuxi generate [rootDir]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `rootDir` | `.` | 需要预览的项目根目录 |