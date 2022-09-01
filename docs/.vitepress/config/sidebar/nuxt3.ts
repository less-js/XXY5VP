import { DefaultTheme } from 'vitepress/dist/node'

export const nuxt3: DefaultTheme.Sidebar | undefined = {
  '/nuxt3': [
    {
      text: '快速入门',
      collapsible: true,
      items: [
        {
          text: '安装',
          link: '/nuxt3/introduction-install',
        },
      ],
    },
    {
      text: '目录',
      collapsible: true,
      items: [
        {
          text: 'Guide',
          link: '/nuxt3/directory-guide',
        },
        {
          text: 'app.vue',
          link: '/nuxt3/directory-app-vue',
        },
        {
          text: 'Components',
          link: '/nuxt3/directory-components',
        },
        {
          text: 'Composables',
          link: '/nuxt3/directory-composables',
        },
        {
          text: 'Content',
          link: '/nuxt3/directory-content',
        },
        {
          text: 'Layouts',
          link: '/nuxt3/directory-layouts',
        },
        {
          text: 'Pages',
          link: '/nuxt3/directory-pages',
        },
        {
          text: 'Middleware',
          link: '/nuxt3/directory-middleware',
        },
        {
          text: 'Plugins',
          link: '/nuxt3/directory-plugins',
        },
        {
          text: 'Server',
          link: '/nuxt3/directory-server',
        },
      ],
    },
    // {
    //   text: '配置',
    //   collapsible: true,
    //   items: [
    //     {
    //       text: 'app.config.ts',
    //       link: '/nuxt3/configuration-app-config',
    //     },
    //     {
    //       text: 'nuxt.config.ts',
    //       link: '/nuxt3/configuration-nuxt-config',
    //     },
    //     {
    //       text: '.nuxtignore',
    //       link: '/nuxt3/configuration-nuxtignore',
    //     },
    //   ],
    // },
    // {
    //   text: 'API',
    //   collapsible: true,
    //   items: [
    //     {
    //       text: '<NuxtLayout>',
    //       link: '/nuxt3/api-nuxt-layout',
    //     },
    //     {
    //       text: '<NuxtPage>',
    //       link: '/nuxt3/api-nuxt-page',
    //     },
    //     {
    //       text: '<NuxtLink>',
    //       link: '/nuxt3/api-nuxt-link',
    //     },
    //     {
    //       text: '<NuxtLoadingIndicator>',
    //       link: '/nuxt3/api-loading-indicator',
    //     },
    //     {
    //       text: 'useAsyncData',
    //       link: '/nuxt3/api-use-async-data',
    //     },
    //     {
    //       text: 'useFetch',
    //       link: '/nuxt3/api-use-fetch',
    //     },
    //     {
    //       text: 'useLazyAsyncData',
    //       link: '/nuxt3/api-use-lazy-async-data',
    //     },
    //     {
    //       text: 'useLazyFetch',
    //       link: '/nuxt3/api-use-lazy-fetch',
    //     },
    //     {
    //       text: '$fetch',
    //       link: '/nuxt3/api-fetch',
    //     },
    //     {
    //       text: 'useNuxtApp',
    //       link: '/nuxt3/api-use-nuxt-app',
    //     },
    //     {
    //       text: 'useRoute',
    //       link: '/nuxt3/api-use-route',
    //     },
    //     {
    //       text: 'useRouter',
    //       link: '/nuxt3/api-use-router',
    //     },
    //     {
    //       text: 'useState',
    //       link: '/nuxt3/api-use-state',
    //     },
    //     {
    //       text: 'useHead',
    //       link: '/nuxt3/api-use-head',
    //     },
    //     {
    //       text: 'useCookie',
    //       link: '/nuxt3/api-use-cookie',
    //     },
    //     {
    //       text: 'abortNavigation',
    //       link: '/nuxt3/api-abort-navigation'
    //     },
    //     {
    //       text: 'addRouteMiddleware',
    //       link: '/nuxt3/api-add-route-middleware'
    //     },
    //     {
    //       text: 'definePageMeta',
    //       link: '/nuxt3/api-define-page-meta'
    //     },
    //     {
    //       text: 'navigateTo',
    //       link: '/nuxt3/api-navigate-to'
    //     },
    //   ],
    // },
    // {
    //   text: '部署',
    //   collapsible: true,
    //   items: [
    //     {
    //       text: 'Node.js Server',
    //       link: '/nuxt3/deploy-nodejs-server',
    //     },
    //     {
    //       text: '.nuxtignore',
    //       link: '/nuxt3/deploy-static-hosting',
    //     },
    //     {
    //       text: 'nuxt.config.ts',
    //       link: '/nuxt3/deploy-deployment-presets',
    //     },
    //   ],
    // },
  ],
}
