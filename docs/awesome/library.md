---
title: 前端框架组件库导航
description: 前端框架组件库导航
tags: 
  - 前端,框架,组件库,导航
head:
  - - meta
    - name: keywords
      content: 前端,框架,组件库,导航
---

<script setup>
const frame = [
  {
    title: 'Vue 3',
    link: 'https://cn.vuejs.org/',
    icon: '/images/logo/vue.png',
    info: '渐进式 JavaScript 框架',
  },
  {
    title: 'Vue Router',
    link: 'https://router.vuejs.org/zh/',
    icon: '/images/logo/vue.png',
    info: 'Vue.js 的官方路由',
  },
  {
    title: 'Pinia',
    link: 'https://pinia.vuejs.org/',
    icon: '/images/logo/pinia.svg',
    info: 'Vue.js 的官方状态管理核心库',
  },
  {
    title: 'Vuex',
    link: 'https://vuex.vuejs.org/zh/',
    icon: '/images/logo/vue.png',
    info: '专为 Vue.js 应用程序开发的状态管理模式 + 库',
  },
  {
    title: 'NuxtJS',
    link: 'https://nuxtjs.org/',
    icon: '/images/logo/nuxt.svg',
    info: '基于 Vue.js 的服务端渲染应用框架',
  },
  {
    title: 'React',
    link: 'https://reactjs.org/',
    icon: '/images/logo/react.svg',
    info: '用于构建用户界面的 JavaScript 库',
  },
  {
    title: 'React Router',
    link: 'https://reactrouter.com/',
    icon: '/images/logo/reactrouter.png',
    info: 'React Router 是完整的 React 路由解决方案',
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
    icon: '/images/logo/redux.svg',
    info: 'Redux 是 JavaScript 状态容器',
  },
  {
    title: 'React Native',
    link: 'https://reactnative.dev/',
    icon: '/images/logo/react.svg',
    info: '跨平台移动应用开发框架',
  },
  {
    title: 'NextJS',
    link: 'https://nextjs.org/',
    icon: '/images/logo/next.svg',
    info: '基于 React.js 的服务端渲染应用框架',
  },
  {
    title: 'Vitest',
    link: 'https://vitest.dev/',
    icon: '/images/logo/vitest.svg',
    info: 'Vitest 是基于 Vite 的原生快速单元测试框架',
  },
  {
    title: 'Jest',
    link: 'https://jestjs.io/',
    icon: '/images/logo/jest.png',
    info: 'JavaScript 单元测试工具',
  },
  {
    title: 'Electron',
    link: 'https://www.electronjs.org/',
    icon: '/images/logo/electron.svg',
    info: 'Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架',
  },
]

const library = [
  {
    title: 'Element Plus',
    link: 'https://element-plus.gitee.io/zh-CN/',
    icon: '/images/logo/element-plus.png',
    info: '基于 Vue 3，面向设计师和开发者的组件库',
  },
  {
    title: 'View Design',
    link: 'https://www.iviewui.com/',
    icon: '/images/logo/iview.png',
    info: '基于 Vue.js 3 的企业级 UI 组件库和前端解决方案',
  },
  {
    title: 'Ant Design',
    link: 'https://ant.design/',
    icon: '/images/logo/antd.svg',
    info: '阿里出品，包含了 React 和 Vue 的 UI 组件库',
  },
  {
    title: 'Vant',
    link: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
    icon: '/images/logo/vant.png',
    info: '轻量、可靠的移动端 Vue 组件库',
  },
  {
    title: 'ECharts',
    link: 'https://echarts.apache.org/handbook/zh/get-started/',
    icon: '/images/logo/ECharts.png',
    info: '一个基于 JavaScript 的开源可视化图表库',
  },
  {
    title: 'DataV',
    link: 'http://datav.jiaminghi.com/',
    icon: '/images/logo/DataV.png',
    info: 'Vue 大屏数据展示组件库',
  },
]

const awesome = [
  {
    title: 'Animate.css',
    link: 'https://animate.style/',
    icon: '/images/logo/empty.svg',
    info: 'CSS 动画库',
  },
  {
    title: 'UnoCSS',
    link: 'https://uno.antfu.me/',
    icon: '/images/logo/UnoCSS.svg',
    info: '具有高性能且极具灵活性的即时原子化 CSS 引擎',
  },
  {
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    icon: '/images/logo/tailwindcss.png',
    info: '一个功能类优先的 CSS 框架',
  },
  {
    title: 'Windi CSS',
    link: 'https://tailwindcss.com/',
    icon: '/images/logo/WindiCSS.svg',
    info: '下一代工具优先的 CSS 框架',
  },
  {
    title: 'Moment.js',
    link: 'https://momentjs.com/',
    icon: '/images/logo/moment.png',
    info: 'JavaScript 日期处理类库',
  },
  {
    title: 'Day.js',
    link: 'https://dayjs.gitee.io/zh-CN/',
    icon: '/images/logo/day.png',
    info: 'Moment.js 的 2kB 轻量化方案，拥有同样强大的 API',
  },
  {
    title: 'Vditor',
    link: 'https://b3log.org/vditor/',
    icon: '/images/logo/vditor.png',
    info: '易于使用的 Markdown 编辑器，支持原生 JavaScript、Vue、React、Angular，提供桌面版',
  },
  {
    title: 'Quill',
    link: 'https://github.com/quilljs/quill',
    icon: '/images/logo/Quill.png',
    info: 'Quill 是一个开源的富文本编辑器',
  },
  {
    title: 'Gitalk',
    link: 'https://gitalk.github.io/',
    icon: '/images/logo/Gitalk.png',
    info: 'Gitalk 基于 GitHub Issue 和 Preact 的评论插件',
  },  
  {
    title: 'Slidev',
    link: 'https://sli.dev/',
    icon: '/images/logo/Slidev.svg',
    info: 'Markdown 编写 PPT 内容，渲染成幻灯片（slides）',
  },
  {
    title: 'gray-matter',
    link: 'https://github.com/jonschlinkert/gray-matter',
    icon: '/images/logo/github.png',
    info: '解析 Front-Matter 的内容，支持YAML、JSON、TOML、Coffee',
  },
  {
    title: 'timeago',
    link: 'https://timeago.org/',
    icon: '/images/logo/timeago.png',
    info: '转换时间戳为“xx分钟前”格式',
  },
]
</script>




## 框架

<MyLink :links="frame"/>

## UI 组件库

<MyLink :links="library"/>

## Awesome

<MyLink :links="awesome"/>
