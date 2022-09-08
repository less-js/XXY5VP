---
title: Nuxt3 nuxi init初始化项目 - Nuxt3中文文档
description: nuxi init是Nuxt自带的一个用于初始化项目的命令。
tags: 
  - nuxt3,nuxi init,nuxt初始化项目,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi init,nuxt初始化项目,Nuxt3命令
---

# `nuxi init` - 初始化项目

`nuxi init`是 Nuxt 自带的一个用于初始化项目的命令。

## 语法

```sh
npx nuxi init|create [--verbose|-v] [--template,-t] [dir]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `--verbose, -v` |	`false` | 有关安装过程的日志信息 |
| `--template, -t` | `nuxt/starter#v3` | 指定要用作模板的 Git 存储库 |
| `dir` | `nuxt-app` | 安装目录的名称 |