---
title: 常用工具导航
description: 常用工具导航
tags: 
  - 工具导航
head:
  - - meta
    - name: keywords
      content: 工具导航
---

<script setup>
const generation = [
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    icon: '/images/logo/vite.svg',
    info: '下一代前端构建工具',
  },
  {
    title: 'webpack',
    link: 'https://webpack.js.org/',
    icon: '/images/logo/webpack.png',
    info: '现代 JavaScript 应用程序的静态模块打包工具',
  },
  {
    title: 'Gulp',
    link: 'https://gulpjs.com/',
    icon: '/images/logo/gulp.png',
    info: '基于流的自动化构建工具',
  },
  {
    title: 'Babel',
    link: 'https://babeljs.io/',
    icon: '/images/logo/babel.svg',
    info: 'Babel 是一个 JavaScript 编译器',
  },
]

const design = [
  {
    title: '蓝湖',
    link: 'https://lanhuapp.com/',
    icon: '/images/logo/lanhu.svg',
    info: '高效的产品设计协作平台',
  },
  {
    title: '墨刀',
    link: 'https://modao.cc/',
    icon: '/images/logo/modao.svg',
    info: '在线一体化产品设计协作平台',
  },
  {
    title: '摹客',
    link: 'https://www.mockplus.cn/',
    icon: '/images/logo/muke.png',
    info: '全能设计协作平台，产品经理用 RP，UI设计师用 DT',
  },
]

const online = [
  {
    title: 'CodePen',
    link: 'https://codepen.io/',
    icon: '/images/logo/CodePen.png',
    info: '不仅仅是一个前端代码的一个工具，还可以在上面找到各种特效案例',
  },
  {
    title: 'HttpBin',
    link: 'http://httpbin.org/',
    icon: '/images/logo/httpbin.png',
    info: 'A simple HTTP Request & Response Service',
  },
  {
    title: 'RegEx Testing',
    link: 'https://www.regextester.com/',
    icon: '/images/logo/empty.svg',
    info: '在线正则校验工具',
  },
  {
    title: 'snippet generator',
    link: 'https://snippet-generator.app/',
    icon: '/images/logo/empty.svg',
    info: '在线生成 vs code 代码片段工具',
  },
  {
    title: 'DeepL',
    link: 'https://www.deepl.com/translator',
    icon: '/images/logo/deepl.svg',
    info: '即时翻译文本&完整的文档文件',
  },
  {
    title: 'TinyPNG',
    link: 'https://tinify.cn/',
    icon: '/images/logo/TinyPNG.png',
    info: '智能压缩您的WebP、JPEG和PNG图片',
  },
]
</script>

> 本页面收集了常用的工具、框架&库、网站等的连接 


## 构建工具

<MyLink :links="generation"/>

## 在线工具

<MyLink :links="online"/>

## 原型工具

<MyLink :links="design"/>