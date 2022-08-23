import { DefaultTheme } from 'vitepress/dist/node'

export const awesome: DefaultTheme.Sidebar | undefined = {
  '/awesome': [
    {
      text: '导航分类',
      items: [
        {
          text: '社区文档平台',
          link: '/awesome/community',
        },
        {
          text: '前端框架组件库',
          link: '/awesome/library',
        },
        {
          text: '常用工具集',
          link: '/awesome/tool',
        },
        {
          text: 'NodeJS 后端',
          link: '/awesome/backend',
        },
        {
          text: 'UI 设计类',
          link: '/awesome/ui',
        },
      ],
    },
  ],
}
