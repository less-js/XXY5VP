---
title: 常用正则表达式操作符
description: 常用正则表达式操作符
tags: 
  - CSS,正则表达式,
head:
  - - meta
    - name: keywords
      content: CSS,正则表达式,
---

# 常用正则表达式操作符

| 操作符        | 说明           | 示例  |
| :-------------: |:-------------| :-----|
| `.`  | 表示任何单个字符 |  |
| `^`  | 匹配字符串开头 | `^abc` |
| `$`  | 匹配字符串结尾 | `abc$` |
| `\|` | 左右表达式任意一个  | `abc\|def` 表示 abc、def |
| `()` | 分组标记，内部只能使用 `\|` 操作符 | `(abc)`、`(abc\|def)` |
| `\d` | 数字，等价于`[0‐9]`  |  |
| `\w` | 单词字符，等价于`[A‐Za‐z0‐9_]`  |  |
| `\w` | 单词字符，等价于`[A‐Za‐z0‐9_]`  |  |
| `[]` | 字符集，对单个字符给出取值范围  | `[abc]` 表示`a,b,c`，`[a-z]`表示 a 到 z 单个字符 |
| `[^]` | 非字符集，对单个字符给出排除范围  | `[^abc]`表示 非 a 或 b 或 c 的单个字符 |
| `*` | 前一个字符0次或无限次扩展  | `abc*` 表示 ab、abc、abcc、abccc等 |
| `?` | 前一个字符0次或1次扩展  | `abc?` 表示 ab、abc |
| `{m}` |  扩展前一个字符m次   | `ab{2}c`表示 abbc |
| `{m,n}` |   扩展前一个字符m至n次    | `ab{1,2}c`表示 abc、abbc |