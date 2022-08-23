---
title: 前端社区门户导航
description: 前端社区门户导航
tags: 
  - 前端社区门户导航
head:
  - - meta
    - name: keywords
      content: 前端社区门户导航
---

<script setup>
const links = [
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
    title: 'CNode',
    link: 'https://cnodejs.org/',
    icon: '/images/logo/cnode.png',
    info: 'Node.js专业中文社区',
  },
  {
    title: 'w3cplus',
    link: 'https://www.w3cplus.com/',
    icon: '/images/logo/w3cplus.png',
    info: 'w3cplus为打造优秀的前端学习教程而努力',
  },
  {
    title: 'stackOverflow',
    link: 'https://stackoverflow.com/',
    icon: '/images/logo/stackoverflow.png',
    info: '全球最大的技术问答类在线社区，几乎可以找到所有问题的答案',
  },
  {
    title: 'CSS-Tricks',
    link: 'https://css-tricks.com/',
    icon: '/images/logo/CSS-Tricks.png',
    info: 'CSS 样式的技巧，经验和教程',
  },
]

const docs = [
  {
    title: '微信开发文档',
    link: 'https://developers.weixin.qq.com/doc/',
    icon: '/images/logo/wechat.svg',
    info: '微信官方文档，包含了小程序、公众号等的开发文档',
  },
  {
    title: 'MDN Web Docs',
    link: 'https://developer.mozilla.org/zh-CN/docs/Web',
    icon: '/images/logo/mdn.png',
    info: '最权威的面向 Web 开发者的文档',
  },
  {
    title: 'ES6 入门教程',
    link: 'https://es6.ruanyifeng.com/',
    icon: '/images/logo/es6.png',
    info: '阮一峰的 ES6 入门教程',
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: '/images/logo/TypeScript.png',
    info: 'JavaScript 的超集',
  },
]

const dev = [
  {
    title: '微信公众平台',
    link: 'https://mp.weixin.qq.com/',
    icon: '/images/logo/wechat.svg',
    info: '微信官方小程序、公众号开发平台',
  },
  {
    title: '支付宝开放平台',
    link: 'https://open.alipay.com/',
    icon: '/images/logo/Alipay.svg',
    info: '支付宝开放平台，包含小程序、生活号、第三方应用、web、loT开发',
  },
  {
    title: '字节小程序',
    link: 'https://microapp.bytedance.com/',
    icon: '/images/logo/bytedance.png',
    info: '字节跳动小程序、小游戏开发平台',
  },
  {
    title: '华为开发者平台',
    link: 'https://developer.huawei.com/cn/',
    icon: '/images/logo/huawei.png',
    info: '华为开发者平台：终端开发、云计算开发',
  },
  {
    title: 'Alogolia',
    link: 'https://www.algolia.com/',
    icon: '/images/logo/algolia.png',
    info: 'Algolia 为网站与移动应用提供托管式搜索',
  },
]
</script>


## 社区门户

<MyLink :links="links"/>

## 文档资料

<MyLink :links="docs"/>

## 开发平台

<MyLink :links="dev"/>
