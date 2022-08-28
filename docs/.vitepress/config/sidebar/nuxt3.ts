import { DefaultTheme } from 'vitepress/dist/node'

export const nuxt3: DefaultTheme.Sidebar | undefined = {
  '/nuxt3': [
    {
      text: '入门',
      collapsible: true,
      items: [
        {
          text: '安装',
          link: '/nuxt3/introduction-install',
        },
      ],
    },
  ],
}
