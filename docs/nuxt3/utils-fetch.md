---
title: Nuxt3 API之$fetch获取数据
description: Nuxt使用`ohmyfetch`在全局范围内公开`$fetch`助手，用于在 Vue 应用或 API 路由中进行 HTTP 请求。
tags: 
  - Nuxt3,Nuxt3 $fetch
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3 $fetch
---

# $fetch 获取数据

Nuxt 3 使用[`ohmyfetch`](https://github.com/unjs/ohmyfetch)在全局范围内公开`$fetch`方法，用于在 Vue 应用或 API 路由中进行 HTTP 请求。

在服务器端渲染过程中，调用`$fetch`来获取内部[API 路由](/nuxt3/directory-server)将直接调用相关函数（模拟请求），节省了一个额外的 API 调用。

注意，`$fetch`是 Nuxt 3 中进行 HTTP 调用的首选方式，而不是 Nuxt 2 中的`@nuxt/http`和`@nuxtjs/axios`。
