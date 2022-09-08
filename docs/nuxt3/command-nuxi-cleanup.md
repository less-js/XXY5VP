---
title: Nuxt3 nuxi cleanup删除文件缓存 - Nuxt3中文文档
description: nuxi cleanup是Nuxt自带的一个用于删除文件缓存文件的命令
tags: 
  - nuxt3,nuxi cleanup,nuxt删除文件缓存,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi cleanup,nuxt删除文件缓存,Nuxt3命令
---

# `nuxi cleanup` - 删除文件缓存

`nuxi cleanup`是一个在 Nuxt 项目中删除文件缓存文件命令。

`nuxi cleanup`命令删除了生成的 Nuxt 文件和缓存，包括: 

- `.nuxt`
- `.output`
- `node_modules/.vite`
- `node_modules/.cache`

## 语法

```sh
npx nuxi clean|cleanup [rootDir]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `rootDir` | `.` | 项目的根目录 |

