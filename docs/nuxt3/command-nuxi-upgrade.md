---
title: Nuxt3 nuxi upgrade版本升级 - Nuxt3中文文档
description: nuxi upgrade命令将nuxt升级到最新版本。
tags: 
  - nuxt3,nuxi upgrade,nuxt版本升级,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi upgrade,nuxt版本升级,Nuxt3命令
---

# `nuxi upgrade` - 版本升级

`nuxi upgrade`用于将 Nuxt3 的版本更新升级最新版本。

## 语法

```sh
npx nuxi upgrade [--force|-f]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `--force, -f` | `false` | 更新之前删除`node_modules`目录和`lock`文件 |