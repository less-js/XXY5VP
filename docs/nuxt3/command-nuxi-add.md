---
title: Nuxt3 nuxi add添加模板 - Nuxt3中文文档
description: nuxi add是Nuxt自带的一个用于添加模板文件的命令。执行该命令后会在项目中生成相应的目录和文件，同时文件内包含基础功能结构。
tags: 
  - nuxt3,nuxi add,nuxt添加模板,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi add,nuxt添加模板,Nuxt3命令
---

# `nuxi add` - 添加模板文件

`nuxi add`是一个在 Nuxt 项目中添加模板文件命令。

执行`nuxi add`命令后在项目中自动生成相应的目录和文件，同时文件内包含基础功能结构。

## 语法

```sh
npx nuxi add [--cwd] [--force] <TEMPLATE> <NAME>
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `TEMPLATE` | `-` | 指定要生成的文件的模板 |
| `NAME` | `-` | 指定将创建的文件的名称 |
| `--cwd` | `.` | 目标应用程序的目录 |
| `--force` | `false` | 强制覆盖文件 (如果已存在) |

> 一些模板支持额外的修改标志，以在其名称中添加一个后缀（如`.client`或`.get`）。

## 示例

自动生成`/plugins/sockets.client.ts`文件: 

```sh
npx nuxi add plugin sockets --client
```

## 添加 component

- 修改标志: `--mode client|server`或`--client`或`--server`

- 示例:

```sh
# 生成 `components/TheHeader.vue`
npx nuxi add component TheHeader
```

## 添加 composable

- 示例:

```sh
# 生成 `composables/foo.ts`
npx nuxi add composable foo
```

## 添加 layout

- 示例:

```sh
# 生成 `layouts/custom.vue`
npx nuxi add layout custom
```

## 添加 plugin

- 修改标志: `--mode client|server`或`--client`或`--server`

- 示例:

```sh
# 生成 `plugins/analytics.ts`
npx nuxi add plugin analytics
```

## 添加 page

- 示例:

```sh
# 生成 `pages/about.vue`
npx nuxi add page about

# 生成 `pages/category/[id].vue`
npx nuxi add page "category/[id]"
```

## 添加 middleware

- 修改标志: `--global`

- 示例:

```sh
# 生成 `middleware/auth.ts`
npx nuxi add middleware auth
```

## 添加 api

- 修改标志: `--method=connect|delete|get|head|options|patch|post|put|trace`或`--get`、`--post`等.

- 示例:

```sh
# 生成 `server/api/hello.ts`
npx nuxi add api hello

# 生成 `server/api/hello.get.ts`
npx nuxi add api hello --method=get

# 生成 `server/api/hello.get.ts`
npx nuxi add api hello --get        
```