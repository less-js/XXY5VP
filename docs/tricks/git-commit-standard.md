---
title: Git commit 规范约定
description: Git commit 规范
tags: 
  - git,git commit
head:
  - - meta
    - name: keywords
      content: git,git commit
---

# Git commit 规范约定

## Git commit 格式

```sh
<type>(<scope>): <subject>
<!-- 空行 -->
<body>
<!-- 空行 -->
<footer>
```

## 标识 - type（必填）

- feat：添加新特性

- fix：产生 diff 并自动修复此问题。适合于一次提交直接修复问题

- to：只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix

- docs：仅仅修改了文档

- style：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑

- refactor：代码重构，没有加新功能或者修复 bug

- perf：优化相关，比如提升性能、体验

- test：增加测试用例

- chore：改变构建流程、或者增加依赖库、工具等

- build：影响项目构建或依赖项修改

- release：发布新版本

- revert：回滚到上一个版本

- merge：代码合并

- sync：同步主线或分支的Bug

## 影响范围 - scope（可选）

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。如果修改影响了不止一个 scope，你可以使用 * 代替。

## 简短描述 - subject（必填）

subject 是 commit 目的的简短描述

- 不超过50个字符；
- 以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes；
- 第一个字母小写；
- 结尾不加句号或其他标点符号

## 详细信息 - body（可选）

描述当前修改的行为详细信息或修改的目的。

## 其他信息 - footer（可选）

一般用于描述 BREAKING CHANGE，在项目开发中一般不需要填写，组件研发的工程需要填写。

**格式：**以BREAKING CHANGE开头，后面是对变动的描述，以及变动理由和迁移方法。

## 例子

```sh
# 示例1
fix(global):修复checkbox不能复选的问题

# 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px

# 示例3
fix: value.length -> values.length

# 示例4
feat: 添加网站主页静态页面

# 示例5
chore: 将表格中的查看详情改为详情
```