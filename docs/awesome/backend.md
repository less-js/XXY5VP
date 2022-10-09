---
title: NodeJS导航
description: NodeJS导航
tags: 
  - NodeJS,导航
head:
  - - meta
    - name: keywords
      content: NodeJS,导航
---

<script setup>
const nodejs = [
  {
    title: 'NodeJS',
    link: 'https://nodejs.org/en/',
    icon: '/images/logo/NodeJS.png',
    info: 'Node.js 是运行在服务端的 JavaScript',
  },
  {
    title: 'Koa',
    link: 'https://koajs.com/',
    icon: '/images/logo/empty.svg',
    info: '更小、更富有表现力、更健壮的 Web 框架',
  },
  {
    title: 'Express',
    link: 'https://expressjs.com/',
    icon: '/images/logo/empty.svg',
    info: 'Express 是一个简洁而灵活的 Node.js Web应用框架',
  },
  {
    title: 'Midway',
    link: 'http://www.midwayjs.org/',
    icon: '/images/logo/midwayjs.svg',
    info: 'Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架，通过自研的依赖注入容器，搭配各种上层模块，组合出适用于不同场景的解决方案',
  },
  {
    title: 'NestJS',
    link: 'https://nestjs.com/',
    icon: '/images/logo/nestjs.svg',
    info: 'NestJS - 支持 TypeScript 结合了 OOP （面向对象编程）、FP （函数式编程）和 FRP （函数响应式编程）的服务器端应用程序的开发框架',
  },
  {
    title: 'Fastify',
    link: 'https://www.fastify.io/',
    icon: '/images/logo/fastify.png',
    info: 'Fastify - 快速并且低开销的 web 框架，最快的 web 框架之一',
  },
  {
    title: 'hapi',
    link: 'https://hapi.dev/',
    icon: '/images/logo/hapi.png',
    info: '适用于快速搭建 RESTFUL API 的 web 框架',
  },
]

const cms = [
  {
    title: 'COOL',
    link: 'https://www.cool-js.com/',
    icon: '/images/logo/cool.png',
    info: '基于 Midway 开发的后台管理系统',
  },
  {
    title: 'Strapi',
    link: 'https://strapi.io/',
    icon: '/images/logo/strapi.png',
    info: 'Strapi 是一种灵活的、开放源码的无头CMS',
  },
  {
    title: 'Ghost',
    link: 'https://ghost.org/',
    icon: '/images/logo/Ghost.png',
    info: 'Ghost 是基于 Node.js 的开源博客系统，可以定义为 Wordpress 的 NodeJS 版本',
  },
]

const awesome = [
  {
    title: 'Awesome Node.js',
    link: 'https://github.com/sindresorhus/awesome-nodejs',
    icon: '/images/logo/github.png',
    info: 'Awesome Node.js',
  },
  {
    title: 'TNWX',
    link: 'https://javen205.gitee.io/tnwx/',
    icon: '/images/logo/empty.svg',
    info: 'TNWX 微信公众号、小程序、支付、企业微信开发脚手架，',
  },
  {
    title: 'Zod',
    link: 'https://github.com/colinhacks/zod/blob/master/README_ZH.md',
    icon: '/images/logo/zod.png',
    info: 'Zod 为 后端 Api 接口参数校验器，全面支持 TypeScript',
  },
  {
    title: 'svg-captcha',
    link: 'https://github.com/produck/svg-captcha',
    icon: '/images/logo/github.png',
    info: '在 Node.js 中生成 svg 格式的验证码',
  },
  {
    title: 'bcrypt.js',
    link: 'https://github.com/kelektiv/node.bcrypt.js',
    icon: '/images/logo/github.png',
    info: '一款加盐(salt)加密的包',
  },
  {
    title: 'jsencrypt',
    link: 'http://travistidwell.com/jsencrypt/',
    icon: '/images/logo/github.png',
    info: '基于 rsa 加解密库',
  },
  {
    title: 'Node-RSA',
    link: 'https://www.npmjs.com/package/node-rsa',
    icon: '/images/logo/npm.png',
    info: '生成/导出秘钥,加密/解密,签名/验证',
  },
  {
    title: 'directory-tree',
    link: 'https://www.npmjs.com/package/directory-tree',
    icon: '/images/logo/npm.png',
    info: '读取目录生成目录树',
  },
  {
    title: 'node-crawler',
    link: 'https://node-crawler.readthedocs.io/zh_CN/latest/',
    icon: '/images/logo/npm.png',
    info: '一个轻量级的node.js爬虫工具',
  },
  {
    title: 'globby',
    link: 'https://github.com/sindresorhus/globby',
    icon: '/images/logo/github.png',
    info: '基于 fast-glob 的遍历文件系统和返回路径名的包',
  },
  {
    title: 'fs-extra',
    link: 'https://www.npmjs.com/package/fs-extra',
    icon: '/images/logo/npm.png',
    info: 'fs 模块的扩展，如：copy(), remove(), mkdirs()等等',
  },
  {
    title: 'class-validator',
    link: 'https://github.com/typestack/class-validator',
    icon: '/images/logo/empty.svg',
    info: '基于装饰器和非装饰器的验证',
  },
]

const sql = [
  {
    title: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    icon: '/images/logo/PostgreSQL.png',
    info: '最先进的开源关系数据库',
  },
  {
    title: 'Redis',
    link: 'https://redis.io/',
    icon: '/images/logo/redis.png',
    info: 'Redis key-value 存储数据库',
  },
  {
    title: 'MongoDB',
    link: 'https://www.mongodb.com/',
    icon: '/images/logo/mongodb.svg',
    info: 'MongoDB 是一个基于分布式文件存储的数据库',
  },
  {
    title: 'mongoose',
    link: 'https://mongoosejs.com/',
    icon: '/images/logo/mongoosejs.png',
    info: 'Mongoose 是一个对象文档模型(ODM)库',
  },
  {
    title: 'LowDB',
    link: 'https://github.com/typicode/lowdb',
    icon: '/images/logo/github.png',
    info: '本地 JSON 数据库，支持Electron、NodeJS和浏览器',
  },
  {
    title: 'SQLite',
    link: 'https://sqlite.org/',
    icon: '/images/logo/SQLite.svg',
    info: 'NodeJS 关系型数据库第一选择方案',
  },
  {
    title: 'electron-store',
    link: 'https://github.com/sindresorhus/electron-store',
    icon: '/images/logo/github.png',
    info: 'Electron 数据持久化存储',
  },
  {
    title: 'PouchDB',
    link: 'https://pouchdb.com/',
    icon: '/images/logo/PouchDB.png',
    info: 'PouchDB 是一款浏览器数据库，支持将本地数据同步到远端数据库',
  },
  {
    title: 'Prisma',
    link: 'https://prisma.yoga/',
    icon: '/images/logo/prisma.svg',
    info: '下一代 Node.js、TypeScript、Go 的数据库 ORM',
  },
  {
    title: 'Sequelize',
    link: 'https://sequelize.org/',
    icon: '/images/logo/Sequelize.svg',
    info: 'Sequelize 是一个基于 promise 的 Node.js ORM',
  },
  {
    title: 'TypeORM',
    link: 'https://typeorm.io/',
    icon: '/images/logo/typeorm.png',
    info: 'TypeORM 是 node.js 现有社区最成熟的对象关系映射器（ORM ）',
  },
  {
    title: 'TypeORM 中文',
    link: 'https://typeorm.biunav.com/zh/',
    icon: '/images/logo/typeorm.svg',
    info: 'TypeORM 中文文档',
  },
  {
    title: 'GraphQL',
    link: 'https://graphql.org/',
    icon: '/images/logo/graphql.svg',
    info: 'GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时',
  },
  {
    title: 'pgAdmin',
    link: 'https://www.pgadmin.org/',
    icon: '/images/logo/pgAdmin.svg',
    info: '开源免费的 PostgreSQL 数据库管理工具',
  },
]

const cloud = [
  {
    title: '阿里云',
    link: 'https://www.aliyun.com/',
    icon: '/images/logo/aliyun.png',
  },
  {
    title: '腾讯云',
    link: 'https://cloud.tencent.com/',
    icon: '/images/logo/tencent.png',
  },
  {
    title: '七牛云',
    link: 'https://www.qiniu.com/',
    icon: '/images/logo/qiniu.png',
  },
]
</script>

## NodeJS 框架

<MyLink :links="nodejs"/>

## 开源系统

<MyLink :links="cms"/>

## Awesome 

<MyLink :links="awesome"/>

## 数据库相关

<MyLink :links="sql"/>

## 云服务

<MyLink :links="cloud"/>
