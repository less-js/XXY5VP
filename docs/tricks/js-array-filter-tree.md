---
title: 树结构数组的筛选
description: 树结构数组的筛选
tags: 
  - 递归,树结构,数组,筛选
head:
  - - meta
    - name: keywords
      content: 递归,树结构,数组,筛选
---


# 树结构数组的筛选

- 需求
    
    树结构数组的筛选

- 代码

    ```ts
    interface ITExtends {
      children?: []
      level?
    }

    /**
     * 树结构筛选, 调用 treeFilter(tree, node => { console.log(node.title) })
    * @param tree
    * @param func 传入一个函数描述符合条件的节点
    * @returns
    */
    export const treeFilter = <T>(tree, func): Array<T> => {
      // 使用 map 复制一下节点，避免修改到原树结构数据
      return tree
        .map((node) => ({ ...node }))
        .filter((node) => {
          node.children = node.children && treeFilter(node.children, func)
          return func(node) || (node.children && node.children.length)
        })
    }
    ```