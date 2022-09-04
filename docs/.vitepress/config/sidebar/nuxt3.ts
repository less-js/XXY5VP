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
          text: 'App.vue',
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
    {
      text: 'Component',
      collapsed: true,
      items: [
        {
          text: '<NuxtLayout>',
          link: '/nuxt3/component-nuxt-layout',
        },
        {
          text: '<NuxtPage>',
          link: '/nuxt3/component-nuxt-page',
        },
        {
          text: '<NuxtLink>',
          link: '/nuxt3/component-nuxt-link',
        },
        {
          text: '<NuxtLoadingIndicator>',
          link: '/nuxt3/component-loading-indicator',
        },
        {
          text: '<NuxtErrorBoundary>',
          link: '/nuxt3/component-nuxt-error-boundary',
        },
      ],
    },
    {
      text: 'Composables',
      collapsible: true,
      items: [
        {
          text: 'useAsyncData',
          link: '/nuxt3/composable-use-async-data',
        },
        {
          text: 'useLazyAsyncData',
          link: '/nuxt3/composable-use-lazy-async-data',
        },
        {
          text: 'useFetch',
          link: '/nuxt3/composable-use-fetch',
        },
        {
          text: 'useLazyFetch',
          link: '/nuxt3/composable-use-lazy-fetch',
        },
        {
          text: 'useNuxtApp',
          link: '/nuxt3/composable-use-nuxt-app',
        },
        {
          text: 'useRoute',
          link: '/nuxt3/composable-use-route',
        },
        {
          text: 'useRouter',
          link: '/nuxt3/composable-use-router',
        },
        {
          text: 'useState',
          link: '/nuxt3/composable-use-state',
        },
        {
          text: 'useHead',
          link: '/nuxt3/composable-use-head',
        },
        {
          text: 'useCookie',
          link: '/nuxt3/composable-use-cookie',
        },
        {
          text: 'useRequestEvent',
          link: '/nuxt3/composable-use-request-event',
        },
        {
          text: 'useRequestHeaders',
          link: '/nuxt3/composable-use-request-headers',
        },
      ],
    },
    {
      text: 'Utils',
      collapsible: true,
      items: [
        {
          text: '$fetch',
          link: '/nuxt3/utils-fetch',
        },
        {
          text: 'navigateTo',
          link: '/nuxt3/utils-navigate-to',
        },
        {
          text: 'abortNavigation',
          link: '/nuxt3/utils-abort-navigation',
        },
        // {
        //   text: 'addRouteMiddleware',
        //   link: '/nuxt3/utils-add-route-middleware',
        // },
        // {
        //   text: 'defineNuxtRouteMiddleware',
        //   link: '/nuxt3/utils-define-nuxt-route-middleware',
        // },
        // {
        //   text: 'definePageMeta',
        //   link: '/nuxt3/utils-define-page-meta',
        // },
      ],
    },
    // {
    //   text: 'Advanced',
    //   items: [
    //     {
    //       text: 'Lifecycle Hooks',
    //       link: '/nuxt3/advanced-lifecycle-hooks'
    //     }
    //   ]
    // },
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
    //   text: 'Commands',
    //   items: [
    //     {
    //       text: 'nuxi init',
    //       link: '/nuxt3/command-nuxi-init',
    //     },
    //     {
    //       text: 'nuxi add',
    //       link: '/nuxt3/command-nuxi-add',
    //     },
    //     {
    //       text: 'nuxi preview',
    //       link: '/nuxt3/command-nuxi-preview',
    //     },
    //     {
    //       text: 'nuxi upgrade',
    //       link: '/nuxt3/command-nuxi-upgrade',
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
    //       text: 'Static Hosting',
    //       link: '/nuxt3/deploy-static-hosting',
    //     },
    //     {
    //       text: 'Deployment Presets',
    //       link: '/nuxt3/deploy-deployment-presets',
    //     },
    //   ],
    // },
  ],
}
