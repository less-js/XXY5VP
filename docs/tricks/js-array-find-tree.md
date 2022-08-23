---
title: 树结构数组的查询
description: 树结构数组的查询
tags: 
  - 递归,树结构,数组,查询
head:
  - - meta
    - name: keywords
      content: 递归,树结构,数组,查询
---


# 树结构数组的查询

- 需求
    
    树结构查找, 遍历到满足条件的节点则返回，遍历完成未找到则返回 null

- 代码

    ```ts
    interface ITExtends {
      children?: []
      level?
    }

    /**
    * 树结构查找, 遍历到满足条件的节点则返回，遍历完成未找到则返回 null
    * 调用 treeFind(tree, node => { console.log(node.title) })
    * @param tree
    * @param func 传入一个函数用于判断节点是否符合条件
    * @returns
    */
    export const treeFind = <T extends ITExtends>(tree: Array<T>, func) => {
      for (const data of tree) {
        if (func(data)) return data
        if (data.children) {
          const res = treeFind(data.children, func)
          if (res) return res
        }
      }
      return null
    }
    ```