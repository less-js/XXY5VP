---
title: Nuxt3 安装 - Nuxt3中文文档
description: Nuxt3是一个混合型 Vue 框架。使用 Vue 3 构建应用程序，体验混合渲染、强大的数据获取和新功能。
tags: 
  - nuxt3,nuxt3安装
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxt3安装
---

# Nuxt3 安装

Nuxt 3是一个混合型 Vue 框架。使用 Vue 3 构建应用程序，体验混合渲染、强大的数据获取和新功能。Nuxt 3 是一个开源的框架，使 Web 开发变得简单而强大。


## 先决条件

创建项目之前先确保已经安装了以下推荐的程序：

- Node.js 版本不小于 v14.16.0 或 16.11
- Visual Studio Code（推荐）
- Volar 扩展（推荐）
    - 启用 Take Over Mode[接管模式]（推荐）
    - TypeScript Vue Plugin (Volar) 

::: tip
如果已经启用了 Take Over Mode 或安装了 TypeScript Vue Plugin（Volar），你可以在`nuxt.config`文件中禁止为`*.vue`文件生成`shim`。

```js
export default defineNuxtConfig({
  typescript: {
    shim: false
  }
})
```
:::

## 创建项目

打开 Visual Studio Code, 打开内置终端并输入下面命令创建一个 nuxt 项目

```sh
# npx
npx nuxi init nuxt-app

# pnpm
pnpm dlx nuxi init nuxt-app
```
命令行中的`nuxt-app`就是你的项目名称

使用 Visual Studio Code 打开`nuxt-app`目录

```sh
code nuxt-app
```

## 安装依赖

```sh
# yarn
yarn i

# npm
npm i

# pnpm
pnpm install --shamefully-hoist
```

## 启动服务

### 启动开发环境服务器

```sh
# yarn
yarn dev -o

# npm 
npm run dev -- -o

# pnpm
pnpm run dev -o
```

:::tip
服务启动后的默认端口号为`3000`，为防止端口号冲突，可以通过`package.json`文件的`script`修改默认端口号，如："dev": "nuxt dev --port 9527"
:::

### 打包并启动生成环境服务器

在`package.json`文件的`script`中添加以下命令：

```json
"start": "nuxt build && PORT=5173 node .output/server/index.mjs"
```

::: tip
默认端口号为`3000`，可通过`PORT=5173`的方式修改默认端口。

注意：这里的`PORT`必须为大写，且必须放到`node`的前面！
:::

打包并生成生成环境服务器
```sh
yarn start
``` 