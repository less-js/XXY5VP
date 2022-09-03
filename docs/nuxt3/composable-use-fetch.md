---
title: Nuxt3 useFetch异步请求数据
description: useFetch是useAsyncData和$fetch封装。它根据 URL 和 fetch 选项自动生成 key，根据服务器路由为请求 URL 提供类型提示，并推断 API 响应类型。
tags: 
  - Nuxt3,Nuxt3数据请求,useFetch
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3数据请求,useFetch
---

# `useFetch`

`useFetch`是[`useAsyncData`](/nuxt3/composable-use-async-data)和[`$fetch`](/nuxt3/utils-fetch)的封装。它根据 URL 和 fetch 选项自动生成 key，根据服务器路由为请求 URL 提供类型提示，并推断 API 响应类型。

## 类型

```ts
function useFetch(
  url: string | Request | Ref<string | Request> | () => string | Request,
  options?: UseFetchOptions<DataT>
): Promise<AsyncData<DataT>>

type UseFetchOptions = {
  key?: string
  method?: string
  params?: SearchParams
  body?: RequestInit['body'] | Record<string, any>
  headers?: { key: string, value: string }[]
  baseURL?: string
  server?: boolean
  lazy?: boolean
  default?: () => DataT
  transform?: (input: DataT) => DataT
  pick?: string[]
  watch?: WatchSource[]
  initialCache?: boolean
}

type AsyncData<DataT> = {
  data: Ref<DataT>
  pending: Ref<boolean>
  refresh: () => Promise<void>
  error: Ref<Error | boolean>
}
```

## 参数

- Url: 请求地址

- Options（扩展[`unjs/ohmyfetch`](https://github.com/unjs/ohmyfetch)和[`AsyncDataOptions`](/nuxt3/composable-use-async-data#参数)）
    - method: 请求方法
    - params: Query 参数
    - body: 请求体 - 自动字符串化（如果传递的是一个对象）
    - headers: 请求头
    - baseURL: 请求 Base URL

- Options (下列参数使用方法和[`useAsyncData`](/nuxt3/composable-use-async-data#参数)的参数一样)
    - key
    - lazy 
    - server 
    - default 
    - pick 
    - watch 
    - initialCache 
    - transform 

::: tip
如果提供一个函数或引用作为`url`参数，或者提供函数作为`options`参数的参数，那么`useFetch`调用将不会匹配项目中其他地方的`useFetch`调用，即使选项看起来是相同的。如果想强制匹配，可以在选项中提供自己的`key`。
:::


## 返回值

同[`useAsyncData`返回值](/nuxt3/composable-use-async-data#返回值)

## 示例

```vue
const { data, pending, error, refresh } = await useFetch(
  'https://api.nuxtjs.dev/mountains',
  {
    pick: ['title']
  }
)
```

> 在线示例：https://v3.nuxtjs.org/examples/composables/use-fetch/