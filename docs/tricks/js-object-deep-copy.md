---
title: JavaScript 实现对象深拷贝
description: JavaScript 实现对象深拷贝
tags: 
  - 递归,树结构,数组,查询
head:
  - - meta
    - name: keywords
      content: 递归,树结构,数组,查询
---


# 对象深拷贝

- 需求
    
    对象深拷贝

- 代码

    ```ts
    /**
     * 深拷贝
    * @param obj 源对象
    * @returns
    */
    export const deepCopy = <T>(obj: T) => {
      let newObj = null // 接受拷贝的新对象
      if (typeof obj === 'object' && typeof obj !== null) {
        // 判断是否是引用类型
        newObj = obj instanceof Array ? [] : {} // 判断是数组还是对象
        for (const i in obj) {
          newObj[i] = deepCopy(obj[i]) // 判断下一级是否还是引用类型
        }
      } else {
        newObj = obj
      }
      return newObj
    }

    // Object.assign() 实现一层深拷贝，Object.assign() 只复制属性值
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }
    const returnedTarget = Object.assign(target, source)
    console.log(target) // { a: 1, b: 4, c: 5 }
    console.log(returnedTarget) // { a: 1, b: 4, c: 5 }

    // JSON.stringify() JSON.parse()
    const deepCopy = <T>(obj: T) => {
      return JSON.parse(JSON.stringify(obj))
    }
    const a = [1, [1, 2], 3, 4]
    const b = deepCopy(a)
    b[1][0] = 2
    alert(a) // 1,1,2,3,4
    alert(b) // 2,2,2,3,4
    ```