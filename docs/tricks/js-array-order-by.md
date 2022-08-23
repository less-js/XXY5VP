---
title: JavaScript 数组对象按某个字段排序
description: JavaScript 数组对象按某个字段排序
tags: 
  - 数组,排序
head:
  - - meta
    - name: keywords
      content: 数组,排序
---


# 数组对象按某个字段排序

- 需求
    
    数组对象按某个字段排序，可自定义排序方式是升序还是降序

- 代码

  ```ts
  /**
   * 数组对象按某个字段排序
   * @param data 源数组
   * @param key 排序字段
   * @param orders 排序方式：asc | desc，默认 asc
   * @returns
   */
  export const orderBy = <T>(data: Array<T>, key = 'order', orders = 'asc'): Array<T> => {
    return JSON.parse(JSON.stringify(data)).sort((a, b) => {
      if (orders === 'asc') {
        return a[key] - b[key]
      } else if (orders === 'desc') {
        // 降序
        return b[key] - a[key]
      }
    })
  }
  ```