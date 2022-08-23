---
title: 前端导航
description: 前端常用网站、工具、插件收集
tags: 
  - 插件,工具,导航,前端
head:
  - - meta
    - name: keywords
      content: 插件,工具,导航,前端
---

<script setup>
const links = [
    {
    title: 'Vue 3',
    link: 'https://cn.vuejs.org/',
    icon: '/images/logo/vue.png',
    info: '渐进式 JavaScript 框架',
  },
  {
    title: 'Pinia',
    link: 'https://pinia.vuejs.org/',
    icon: '/images/logo/pinia.svg',
    info: 'Vue.js 的官方状态管理核心库',
  },
  {
    title: '掘金',
    link: 'https://juejin.cn/',
    icon: '/images/logo/gold.svg',
    info: '精品技术分享的中文社区',
  },
  {
    title: 'SegmentFault 思否',
    link: 'https://segmentfault.com/',
    icon: '/images/logo/sf.png',
    info: '中国领先的开发者技术社区',
  },
  {
    title: 'Github',
    link: 'https://github.com/',
    icon: '/images/logo/github.png',
  },
  {
    title: 'npm',
    link: 'https://npmjs.com/',
    icon: '/images/logo/npm.png',
  },
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    icon: '/images/logo/vite.svg',
    info: '下一代前端构建工具',
  },
  {
    title: '微信开发文档',
    link: 'https://developers.weixin.qq.com/doc/',
    icon: '/images/logo/wechat.svg',
    info: '微信官方文档，包含了小程序、公众号等的开发文档',
  },
  {
    title: '微信公众平台',
    link: 'https://mp.weixin.qq.com/',
    icon: '/images/logo/wechat.svg',
    info: '微信官方小程序、公众号开发平台',
  },
  {
    title: 'MDN Web Docs',
    link: 'https://developer.mozilla.org/zh-CN/docs/Web',
    icon: '/images/logo/mdn.png',
    info: '最权威的面向 Web 开发者的文档',
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: '/images/logo/TypeScript.png',
    info: 'JavaScript 的超集',
  },
]
</script>

# 常用集合

<MyLink :links="links"/>
