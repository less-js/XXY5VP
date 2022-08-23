---
title: 递归树结构转列表结构（一维数组）
description: 递归树结构转列表结构（一维数组）
tags: 
  - 树结构,列表结构,一维数组,数组
head:
  - - meta
    - name: keywords
      content: 树结构,列表结构,一维数组,数组
---


# 递归树结构转列表结构（一维数组）

- 需求
    
    递归树结构转列表结构（一维数组）

- 代码

    ```ts
    interface ITExtends {
      children?: []
      level?
    }

    /**
    * 递归树结构转列表结构（一维数组）
    * @param tree
    * @param result
    * @param level
    * @returns
    */
    export const tree2List = <T extends ITExtends>(
      tree: Array<T>,
      result = [],
      level = 0
    ): Array<T> => {
      tree.forEach((node) => {
        result.push(node)
        node.level = level + 1
        node.children && tree2List(node.children, result, level + 1)
      })
      return result
    }
    ```