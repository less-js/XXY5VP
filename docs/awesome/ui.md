---
title: UI导航
description: UI导航
tags: 
  - UI导航
head:
  - - meta
    - name: keywords
      content: UI导航
---


<script setup>
const icon = [
  {
    title: 'iconfont',
    link: 'https://www.iconfont.cn/',
    icon: '/images/logo/iconfont.png',
    info: '阿里巴巴矢量图标库',
  },
  {
    title: 'IconPark',
    link: 'https://iconpark.oceanengine.com/official',
    icon: '/images/logo/IconPark.svg',
    info: '字节跳动图标库',
  },
  {
    title: 'Font Awesome',
    link: 'https://fontawesome.com/',
    icon: '/images/logo/fontawesome.svg',
    info: '提供可缩放矢量图标',
  },
  {
    title: '100 Font',
    link: 'https://www.100font.com/',
    icon: '/images/logo/empty.svg',
    info: '免费商用字体网站',
  },
]

const material = [
  {
    title: '花瓣',
    link: 'https://huaban.com/',
    icon: '/images/logo/huaban.svg',
    info: '花瓣，图片素材领导者',
  },
  {
    title: '站酷',
    link: 'https://www.zcool.com.cn/',
    icon: '/images/logo/zhanku.svg',
    info: '中国设计师互动平台',
  },
]

const theme = [
  {
    title: 'Theme Forest',
    link: 'https://themeforest.net/',
    icon: '/images/logo/themeforest.png',
    info: 'Professional WordPress Themes & Website Templates for any project',
  },
]
</script>

## 字体图标

<MyLink :links="icon"/>

## 资源素材

<MyLink :links="material"/>

## 模板主题

<MyLink :links="theme"/>
