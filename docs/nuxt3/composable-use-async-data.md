---
title: Nuxt3 useAsyncData异步请求数据
description: 在nuxt3的`pages`、`components`和`plugins`中可以使用useAsyncData来来异步请求数据。
tags: 
  - Nuxt3,Nuxt3请求数据,useAsyncData
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3请求数据,useAsyncData
---

# `useAsyncData` 

在`pages`、`components`和`plugins`中，可以使用`useAsyncData`来异步请求数据。

## 类型

```ts
function useAsyncData(
  handler: (nuxtApp?: NuxtApp) => Promise<DataT>,
  options?: AsyncDataOptions<DataT>
): AsyncData<DataT>
function useAsyncData(
  key: string,
  handler: (nuxtApp?: NuxtApp) => Promise<DataT>,
  options?: AsyncDataOptions<DataT>
): Promise<AsyncData<DataT>>

type AsyncDataOptions<DataT> = {
  server?: boolean
  lazy?: boolean
  default?: () => DataT | Ref<DataT>
  transform?: (input: DataT) => DataT
  pick?: string[]
  watch?: WatchSource[]
  initialCache?: boolean
}

type AsyncData<DataT> = {
  data: Ref<DataT>
  pending: Ref<boolean>
  refresh: () => Promise<void>
  error: Ref<any>
}
```

## 参数

- key: 唯一键，以确保数据的获取可以在不同的请求中正确地去重。如果没有提供，那么将生成一个与文件名和`useAsyncData`实例的行号作为唯一的密钥。

- handler: 返回数值的异步请求函数

- options: 

    - lazy: 是否在加载路由后执行异步请求函数，而不是阻止导航（默认为false）

    - default: 一个工厂函数，用于在异步请求函数执行之前设置数据的默认值，在使用`lazy: true`选项时特别有用

    - server: 是否在服务端获取数据（默认为true）

    - transform: 更改`handler`返回结果的函数。比`pick`自由度更大，更个性化的修改请求结果，
    
        ::: tip 示例
        假设从服务器请求获取的数据是：

        ```js
        {
          status: 200,
          message: 'Success',
          list: [1, 2, 3],
        }
        ```
        
        `transform`修改请求结果：

        ```js
        const { data } = await useAsyncData('hello', () => $fetch('/api/hello'), {
          // 在这里修改数据
          transform: (input) => { // 这里的 input 就是从服务器请求获取的数据
            console.log(input) // { status: 200, message: 'Success', list: [ 1, 2, 3 ] }
            return input.list.map((item) => item + 10)
          },
        })
        ```

        `data`的输出结果是：`[ 11, 12, 13 ]`
        :::

    - pick: 只从`handler`返回结果中选取需要的数据。

        ::: tip 示例
        数据请求的返回结果需要是一个对象，否则会出现`500`错误。也就是说`pick`的值为对象中的某个或某几个`key`。
        
        数据请求返回结果，如：

        ```js
        {
          status: 200,
          message: 'Success',
          name: 'xxy',
        }
        ```

        然后`pick`设置为：

        ```js
        const { data } = await useAsyncData(
          'test',
          () => $fetch('/api/hello'),
          {
            pick: ['name']
          }
        )
        ```

        `data`的输出结果是：`{ "name": "xxy" }`
        :::


    - watch: 监听`reactive`或`ref`响应式数据发生变化后自动重新请求数据，适用于用户选择分页、过滤结果、搜索等情况。
    
        ```vue
        <template>
          <div>
            {{ page }}
            <!-- 当 page 的值发生变化时，就会重新发起请求 -->
            <button @click="page++">+</button>
            <button @click="page--">-</button>
          </div>
        </template>

        <script setup>
        const page = ref(1)
        const { data, refresh } = await useAsyncData(
          'hello',
          () => $fetch('/api/hello'),
          {
            watch: [page], // 监听 page 的变化
          }
        )
        </script>
        ```

    - initialCache: 设置为`false`时，将跳过有效负载缓存进行初始提取。（默认为true）

`lazy: false`使用`<Suspense>`来阻止在数据被获取之前加载路由。使用`lazy: true`实现一个加载状态，以获得更快速的用户体验。
## 返回值

- data: 异步请求函数返回的数据

- pending: 一个布尔值，表示是否在提取数据

- refresh: 用于刷新`handler`返回的数据的函数

- error: 如果数据获取失败返回一个`error`对象，否则为`null`

默认情况下，Nuxt 会等待`refresh`完成后才会再次执行。传递`true`作为参数，可以跳过这个等待。

## 示例

```js
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)
```