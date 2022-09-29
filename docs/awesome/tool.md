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
    title: 'electron-vite',
    link: 'https://cn-evite.netlify.app/',
    icon: '/images/logo/electron-vite.svg',
    info: '下一代 Electron 开发与构建工具',
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
    title: 'DeepL',
    link: 'https://www.deepl.com/translator',
    icon: '/images/logo/deepl.svg',
    info: '即时翻译文本&完整的文档文件',
  },
  {
    title: 'TinyPNG',
    link: 'https://tinify.cn/',
    icon: '/images/logo/TinyPNG.png',
    info: '智能压缩您的 WebP、JPEG 和 PNG 图片',
  },
]

const development = [
  {
    title: 'Terminal Colors for VS Code',
    link: 'https://glitchbone.github.io/vscode-base16-term/#/',
    icon: '/images/logo/vscode-base16-term.png',
    info: 'VS Code 终端界面美化主题'
  },
  {
    title: 'snippet generator',
    link: 'https://snippet-generator.app/',
    icon: '/images/logo/snippet-generator.png',
    info: 'VS Code 代码片段在线生成工具',
  },
  {
    title: 'REST client',
    link: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client',
    icon: '/images/logo/REST-client.png',
    info: 'VS Code 扩展：API 测试工具',
  },
  {
    title: 'Insomnia',
    link: 'https://insomnia.rest/',
    icon: '/images/logo/Insomnia.svg',
    info: '一款类似 Postman 的 api 测试工具',
  },
  {
    title: 'Apifox',
    link: 'https://www.apifox.cn/',
    icon: '/images/logo/apifox.png',
    info: 'API 文档、API 调试、API Mock、API 自动化测试',
  },
  {
    title: 'DevToys',
    link: 'https://www.devtoys.app/',
    icon: '/images/logo/DevToys.png',
    info: '提供格式化JSON、比较文本和测试RegExp、图片压缩等等功能',
  },
  {
    title: 'TabNine',
    link: 'https://www.tabnine.com/',
    icon: '/images/logo/tabnine.png',
    info: 'TabNine 是最好的代码补全工具，软件开发人员的 AI 助手',
  },

]
</script>
## 构建工具

<MyLink :links="generation"/>

## Development

<MyLink :links="development"/>

## 在线工具

<MyLink :links="online"/>

## 原型工具

<MyLink :links="design"/>