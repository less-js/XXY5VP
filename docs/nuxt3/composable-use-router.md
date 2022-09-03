---
title: Nuxt3 useRouter返回路由实例
description: useRouter返回路由实例，必须在<script setup>、插件或路由中间件中调用。在 Vue 中使用$router访问路由实例。
tags: 
  - Nuxt3,useNuxtApp
head:
  - - meta
    - name: keywords
      content: Nuxt3,useNuxtApp
---

# `useRouter` - 返回路由实例

`useRouter`返回路由实例，必须在`setup()`、插件或路由中间件中调用。

在 Vue 中使用`$router`访问路由实例。

如果有一个`pages`目录，`useRouter`的行为与`Vue Router`一致。请随意阅读[Vue Router文档](https://router.vuejs.org/zh/api/#addroute)，了解有关方法的更多信息。

## 基础操作

- addRoute: 添加一条新的路由记录到路由。如果路由有一个 name，并且已经有一个与之名字相同的路由，它会先删除之前的路由

- removeRoute: 通过名称删除现有路由

- getRoutes: 获取所有路由记录的完整列

- hasRoute: 确认是否存在指定名称的路由


## 基于 history 的操作

- back: 通过调用 history.back() 回溯历史。相当于 router.go(-1)

- forward: 通过调用 history.forward() 在历史中前进。相当于 router.go(1)

- go: 允许你在历史中前进或后退.

- push: 通过在历史堆栈中推送一个 entry，以编程方式导航到一个新的 URL

- replace: 通过替换历史堆栈中的当前 entry，以编程方式导航到一个新的 URL

::: tip
`router.addRoute`将路由细节添加到路由数组中，这在构建 Nuxt 插件时非常有用。

`push()`会立即触发一个新的导航，它在 Nuxt 页面组件、Vue 组件和`composable`中非常有用。
:::

```js
const router = useRouter();
router.back();
router.forward();
router.go();
router.push({ path: "/home" });
router.replace({ hash: "#bio" });
```

> History文档: https://developer.mozilla.org/zh-CN/docs/Web/API/History

## 导航守卫

`useRouter`提供了`afterEach`, `beforeEach` and `beforeResolve`这些方法作为导航守卫。

然而，Nuxt 有一个[路由中间件](/nuxt3/directory-middleware)的概念，它简化了导航卫士的实现，并提供了更好的开发人员体验。

## Promise 和 Error 处理

- isReady: 当路由完成初始化导航时，返回一个 Promise

- onError: 添加一个错误处理程序，在导航期间每次发生未捕获的错误时都会调用该处理程序

- resolve: 返回路由地址的标准化版本。还包括一个包含任何现有`base`的`href`属性

## 通用路由器实例

如果没有`pages`目录，则`useRouter`将返回一个具有类似助手方法的通用路由器实例，但请注意，并非所有功能都受支持，或者其行为方式与`vue router`完全相同。