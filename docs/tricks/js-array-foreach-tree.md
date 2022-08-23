---
title: 递归遍历树结构数组
description: 递归遍历树结构数组
tags: 
  - 递归,树结构,数组
head:
  - - meta
    - name: keywords
      content: 递归,树结构,数组
---


# 遍历树结构

- 需求
    
    遍历树结构

- 代码

    ```ts
    interface ITExtends {
      children?: []
      level?
    }

    /**
     * 遍历树结构, 调用 treeForeach(tree, node => { console.log(node.title) })
    * @param tree
    * @param func
    */
    export const treeForeach = <T extends ITExtends>(tree: Array<T>, func): void => {
      tree.forEach((data) => {
        data.children && treeForeach(data.children, func) // 遍历子树
        func(data)
      })
    }
    ```