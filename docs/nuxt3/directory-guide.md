---
title: Nuxt3 目录 - Nuxt3中文文档
description: Nuxt 是一个约定优先的 web 开发框架，部分功能是基于目录结构的。
tags: 
  - nuxt3,nuxt3目录
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxt3目录
---

# Nuxt3 目录介绍

Nuxt 是一个约定优先的 web 开发框架，部分功能是基于目录结构的。

Nuxt 会自动扫描`~/server/api`、`~/server/routes`、`~/server/middleware`、`~/pages`目录下的文件，以注册支持 HMR 的 API 和服务器处理程序。

支持自动导入（auto import）功能，包括自动导入 Vue 组件、Composables、Layouts、Middleware。

一个完整的 Nuxt3 项目的目录结构大概是这样的：

```md
.
├─ .nuxt
├─ .output
├─ assets
├─ components
├─ composables
├─ content
├─ layouts
├─ middleware
├─ node_modules
├─ pages
├─ plugins
├─ public
├─ server
│  ├─ api
│  ├─ routes
│  └─ middleware
└─ .gitignore
└─ app.vue
└─ app.config.ts
└─ .nuxtignore
└─ nuxt.config.ts
└─ package.json
└─ tsconfig.json
```

## .nuxt

Nuxt 在开发过程中使用`.nuxt`目录来生成 Vue 应用程序。

请不要修改其中的任何内容，因为当运行`yarn dev`的时候，整个目录会被重新创建。

## .output

`.output`目录 Nuxt 构建打包后创建的目录，用于生产环境中。

## assets

`assets`目录用于构建工具（webpack或Vite）将要处理的所有静态资源。

该目录通常包含以下类型的文件：

- 样式表（CSS、SASS等）
- 字体
- 不会从`public`目录中提供的图片

## components

[`components`](/nuxt3/directory-components)目录是放置所有 Vue 组件的地方，这些组件可以会被自动导入你的页面或其他组件中。

Nuxt 会自动导入`component`目录中的任何组件（以及你可能使用的任何模块所注册的组件）。

## composables

[`composables`](/nuxt3/directory-composables)目录是存放组合 API（Hooks） 的地方，以自动导入的方式将 Vue composables 导入到你的应用程序中!

## content

[Nuxt Content 模块](https://content.nuxtjs.org/)读取项目中[`content`](/nuxt3/directory-content)目录中的内容，并解析`.md`、`.yml`、`.csv`和`.json`文件，为应用程序创建一个基于文件的 CMS。

## layouts

[`layouts`](/nuxt3/directory-layouts)目录用于存放布局组件。

## middleware

[`middleware`](/nuxt3/directory-middleware)目录主要存放全局路由中间件。非常适合在导航到特定路由之前提取要运行的代码。

## pages

[`pages`](/nuxt3/directory-pages)目录是可选的，也就是说可以只通过`app.vue`来完成项目， 但没有`pages`目录时，`vue-router`是不会被加载的。

当我们创建了`pages`目录后，Nuxt 会自动集成`vue-router`，结合`pages`目录下的文件(夹)名来构建项目.

与组件不同的是，page 页面必须有一个单一的根元素，以允许 Nuxt 在页面之间应用路由转换。

> 当我们仅仅只需要完成一个落地页或者是不需要路由的时候可以不使用`pages`目录。

## plugins

Nuxt 会自动读取你的[`plugins`](/nuxt3/directory-plugins)目录中的文件并加载它们。

可以在文件名中使用`.server`或`.client`后缀（如：`custom.server.ts`），以便只在服务器或客户端加载一个插件。

## public

`public`目录直接在服务器根部提供服务，包含必须保持其名称（如 robots.txt）或可能不会改变的公共文件（如 favicon.ico）。

> 在 Nuxt2 中被称为`static`目录

## server

[`server`](/nuxt3/directory-server)目录用于为 Nuxt 应用程序创建任何后端逻辑。它支持 HMR 和强大的功能。

该目录包含项目的 API 和服务器中间件（Middleware）。

## app.vue

[`app.vue`](/nuxt3/directory-app-vue) 文件是 Nuxt 3 应用程序中的入口组件。

## app.config.ts

可以使用[`app.config.ts`](/nuxt3/configuration-app-config) 文件轻松地提供运行时应用程序配置。它的扩展名可以是`.ts`、`.js`或`.mjs`。

```ts
// app.config.ts
export default defineAppConfig({
  foo: 'bar
})
```

不要在`app.config`文件中放置任何秘密值。它是暴露给用户客户端捆绑的。

## .nuxtignore

可以使用[.nuxtignore](/nuxt3/configuration-nuxtignore)文件，让 Nuxt 在构建阶段忽略项目根目录（rootDir）中的`layout`、`pages`、`components`、`composables`和`middleware`文件。

`.nuxtignore`文件与`.gitignore`和`.eslintignore`文件的规范相同，其中每一行都是一个`glob`模式，表明哪些文件应该被忽略。


## nuxt.config.ts

Nuxt 可以通过一个[nuxt.config.ts](/nuxt3/configuration-nuxt-config)文件轻松配置，它的扩展名可以是`.js`、`.ts`或`.mjs`。

为了确保配置是最新的，Nuxt 会在检测到`.env`、`.nuxtignore`和`.nuxtrc`文件的变化时进行全面重启。

## tsconfig.json

Nuxt会`自动生成`一个[`.nuxt/tsconfig.json`](https://v3.nuxtjs.org/guide/concepts/typescript/)文件，其中包含在 Nuxt 项目中使用的解析别名，以及其他合理的默认值。

可以通过在你的项目根部创建一个`tsconfig.json`文件来受益，其内容如下。

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

根据需要定制这个文件的内容。但请注意，如果需要定制你的`paths`，这将覆盖自动生成的路径别名。

相反，Nuxt 建议将你需要的任何路径别名添加到`nuxt.config`中的`alias`属性，它们将被拾取并添加到`自动生成的 tsconfig.json`中。