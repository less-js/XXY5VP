---
title: Nuxt3 .nuxtignore - Nuxt3中文文档
description: Nuxt3的.nuxtignore，让 Nuxt 在构建阶段忽略项目根目录（rootDir）中的layout、pages、components、composables和middleware文件。
tags: 
  - Nuxt3,.nuxtignore,Nuxt3配置
head:
  - - meta
    - name: keywords
      content: Nuxt3,.nuxtignore,Nuxt3配置
---

# Nuxt3 .nuxtignore - 忽略文件

可以使用一个`.nuxtignore`文件，让 Nuxt 在构建阶段忽略项目根目录（rootDir）中的`layout`、`pages`、`components`、`composables`和`middleware`文件。`.nuxtignore`文件与`.gitignore`和`.eslintignore`文件的规范相同，其中每一行都是一个`glob`模式，表明哪些文件应该被忽略。

> 也可以在`nuxt.config`文件中配置`ignoreOptions`、`ignorePrefix`和`ignore`。

`.nuxtignore`:

```sh
# ignore layout foo.vue
layouts/foo.vue
# ignore layout files whose name ends with -ignore.vue
layouts/*-ignore.vue

# ignore page bar.vue
pages/bar.vue
# ignore page inside ignore folder
pages/ignore/*.vue

# ignore route middleware files under foo folder except foo/bar.js
middleware/foo/*.js
!middleware/foo/bar.js
```