---
title: Git ignore忽略文件/文件夹常用规则
description: Git ignore忽略文件/文件夹常用规则
tags: 
  - Git,ignore
head:
  - - meta
    - name: keywords
      content: Git,ignore
---

# Git ignore 忽略文件/文件夹常用规则

项目根目录创建`.gitignore`，以下是一些常用规则方法：

```
// 表示过滤这个文件夹
node_modules/     

// 过滤zip后缀文件
*.zip               

// 过滤该文件
demo.html   

// 不过滤js文件
!*.js 
```