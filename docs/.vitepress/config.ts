import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: '码农叉叉歪',
  description:
    '分享Vue.js全家桶、Pinia、VitePress、Nuxt.js等前端技术和VitePress主题，及以Nodejs为后端的全栈开发技术',
  head,
  lastUpdated: true,
  // ignoreDeadLinks: true,
  outDir: '../dist',
  themeConfig: {
    logo: '/images/logo.png',
    // siteTitle: '全栈小咸鱼',
    nav,
    sidebar,
    outlineTitle: '快速导航',

    // footer: {
    // message: 'Released under the MIT License.',
    // copyright: 'Copyright © 2022 xxy5.com'
    // }
    
    // 搜索
    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },
  },
})
