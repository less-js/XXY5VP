---
title: 一维数组（列表结构）转树结构
description: 一维数组（列表结构）转树结构
tags: 
  - 树结构,列表结构,一维数组,数组
head:
  - - meta
    - name: keywords
      content: 树结构,列表结构,一维数组,数组
---


# 列表结构（一维数组）转树结构

- 需求
    
    普通列表结构数组转成树结构数组

- 代码

    ```ts
    interface ITExtends {
      children?: []
      level?
    }

    /**
     * 列表结构（一维数组）转树结构
    * @param data
    * @param pid
    * @param id
    * @returns
    */
    export const list2Tree = <T extends ITExtends>(
      data: Array<T>,
      pid = 'parentId',
      id = 'id'
    ): Array<T> => {
      const info = data.reduce((map, node) => ((map[node[id]] = node), (node.children = []), map), {})
      return data.filter((node) => {
        info[node[pid]] && info[node[pid]].children.push(node)
        return !node[pid]
      })
    }
    ```