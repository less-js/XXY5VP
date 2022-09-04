---
title: Nuxt3 pages 页面目录 - Nuxt3中文文档
description: Nuxt3 pages 页面目录是可选的，也就是说可以只通过`app.vue`来完成项目， 但没有`pages`目录时，`vue-router`是不会被加载的。
tags: 
  - Nuxt3，Nuxt3 pages,Nuxt3页面
head:
  - - meta
    - name: keywords
      content: Nuxt3，Nuxt3 pages,Nuxt3页面
---

# Pages - 页面目录

Nuxt 提供了一种基于文件的路由，可以使用[Vue Router](https://router.vuejs.org/)在 web 应用程序中创建路由。

`pages`目录是可选的，这意味着如果只使用`app.vue`就不会包含`vue-router`，从而减少你的应用程序的包的大小。

## 使用

页面是Vue组件，可以具有`.vue`、`.js`、`.jsx`、`.ts`或`.tsx`扩展名：

`~/pages/index.vue`

```vue
<template>
  <h1>Index page</h1>
</template>
```

`~/pages/index.ts`

```ts
// https://vuejs.org/guide/extras/render-function.html
export default defineComponent({
  render () {
    return h('h1', 'Index page')
  }
})
```

`~/pages/index.tsx`

```tsx
// https://v3.nuxtjs.org/examples/advanced/jsx
// https://vuejs.org/guide/extras/render-function.html#jsx-tsx
export default defineComponent({
  render () {
    return <h1>Index page</h1>
  }
})
```

`pages/index.vue`文件映射应用程序的路由是：`/`。

如果使用`app.vue`，确保使用`＜NuxtPage/＞`组件显示当前页面：

`app.vue`

```vue
<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>
```

页面必须具有单个根元素，以允许页面之间的路由转换。（HTML注释也被视为元素。）

这意味着，当路由被服务器渲染或静态生成时，将能够正确地看到它的内容，但当在客户端导航时向该路由导航时，路由之间的转换将失败，将看到该路由不会被渲染。

下面是一些例子，说明一个有单一根元素的页面是什么样子：

`~/pages/working.vue`

```vue
<template>
  <div>
    <!-- 这个页面只有一个单一的根元素 -->
    Page content
  </div>
</template>
```

`~/pages/bad-1.vue`

```vue
<template>
  <!-- 由于本注释，当客户端导航期间路由更改时，将不会呈现此页面，因为注释也是被视为元素 -->
  <div>Page content</div>
</template>
```

`~/pages/bad-2.vue`

```vue
<template>
  <div>This page</div>
  <div>有多个跟元素</div>
  <div>在客户端导航期间路线更改时不会被渲染</div>
</template>
```

## 动态路由

如果把任何东西放在`[]`内，它将变成一个[动态路径](https://router.vuejs.org/guide/essentials/dynamic-matching.html)参数。可以混合和匹配多个参数，甚至在一个文件名或目录内的非动态文本。

如果想让一个参数是可选的，必须用`[[]]`把它括起来，例如：`~/pages/[[slug]]/index.vue`或`~/pages/[[slug]].vue`将同时匹配`/`和`/test`。

示例：

```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

鉴于上面的例子，你可以通过`$route`对象在你的组件中访问`group/id`。

`~/pages/users-[group]/[id].vue`

```vue
<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>
```

导航到`/users-admins/123`后呈现的效果：

```html
<p>admins - 123</p>
```

如果想使用`Composition API`访问路由，有一个全局的`useRoute`函数，它将允许访问路由，就像选项 API 中的`this.$route`一样。

```vue
<script setup>
const route = useRoute()

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>
```

## Catch-all Route 通用路由

如果需要一个 Catch-all Route 通用路由，你可以用一个名为`[...slug].vue`的文件来创建它。这将匹配该路径下的所有路由。

`~/pages/[...slug].vue`

```vue
<template>
  <p>{{ $route.params.slug }}</p>
</template>
```

导航到`/hello/world`后呈现的效果：

```html
<p>["hello", "world"]</p>
```

> Nuxt 还支持自定义`~/pages/404.vue`文件，该文件将处理所有不匹配的路由（并设置 404 错误代码）。

## Nested Routes 嵌套路由

可以使用`<NuxtPage>`显示[嵌套路由](https://router.vuejs.org/guide/essentials/nested-routes.html)。

示例：

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

上述文件结构将呈现如下路由：

```js
[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

为了显示`child.vue`组件，必须在`~/pages/parent.vue`里面插入`<NuxtPage>`组件。

`~/pages/parent.vue`

```vue
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtPage :foobar="123" />
  </div>
</template>
```

### 子路由 Keys

如果希望对`<NuxtPage>`组件重新渲染的时候有更多的控制（例如，transitions），你可以通过`pageKey`属性传递一个字符串或函数，或者可以通过`definePageMeta`定义键值：

`~/pages/parent.vue`

```vue
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtPage :page-key="someKey" />
  </div>
</template>
```

或

`~/pages/child.vue`

```vue
<script setup>
definePageMeta({
  key: route => route.fullPath
})
</script>
```

> 详细示例参考：https://v3.nuxtjs.org/examples/routing/pages

## Page Metadata 页面元数据

想为应用程序中的每个路由定义元数据。可以使用`definePageMeta`宏来做到这一点，它在`<script>`或`<script setup>`中都可以使用：

```vue
<script setup>
definePageMeta({
  title: 'My home page'
})
</script>
```

然后，可以通过路由在应用程序的其它地方访问`route.meta`对象。

```vue
<script setup>
const route = useRoute()

console.log(route.meta.title) // My home page
</script>
```

如果使用嵌套路由，所有这些路由的页面元数据将被合并到一个对象中。有关路由元的更多信息，请参阅[vue router文档](https://router.vuejs.org/guide/advanced/meta.html)。

和`defineEmits`或`defineProps`（见[Vue文档](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)）非常类似，`definePageMeta`是一个编译器宏。它会将被编译掉，所以你不能在组件中引用它。相反，传递给它的元数据将被从组件中提升出来。因此，页面元对象不能引用组件（或组件上定义的值）。然而，它可以引用导入的绑定。

```vue
<script setup>
import { someData } from '~/utils/example'

const title = ref('')

definePageMeta({
  title,  // 这里不能引用组件定义的值，这将产生一个错误
  someData
})
</script>
```

### 特殊的元数据

当然，可以自定义元数据，供自己在整个应用程序中使用。但是用`definePageMeta`定义的一些元数据有一个特殊的目的。

`keepalive`

如果在`definePageMeta`中设置了`keepalive: true`，Nuxt 会自动将页面包装成[Vue `<KeepAlive>`](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive)组件。例如，在一个拥有动态子路由的父路由中，如果想在路由变化中保留页面状态。也可以设置传递给`<KeepAlive>`的 props（见这里的[完整列表](https://v3.nuxtjs.org/api/configuration/nuxt.config#keepalive)）。

可以在你的nuxt.config中为这个属性设置一个默认值。

`key`

[见上文](#子路由-keys)

`layout`

可以定义用于渲染路由的布局。这可以是`false`（禁用任何布局），也可以是一个字符串或一个`ref/computed`。[更多关于布局的信息](/nuxt3/directory-layouts)。


`middleware`

可以定义中间件，在加载这个页面之前应用。它将与任何匹配的父/子路由中使用的所有其他中间件合并。它可以是一个字符串，一个函数（一个匿名/精简的中间件函数，遵循全局的`before guard`模式），或一个字符串/函数的数组。[更多关于命名的中间件](/nuxt3/directory-middleware).

`layoutTransition` 和 `pageTransition`

你可以为包裹页面和布局的`<transition>`组件定义过渡属性，或者通过`false`来禁用该路由的`<transition>`包装器。你可以在[这里](https://vuejs.org/api/built-in-components.html#transition)看到一个可以传递的选项列表，或者阅读更多[关于过渡如何工作](https://vuejs.org/guide/built-ins/transition.html#transition)的信息。

你可以在[`nuxt.config`](https://v3.nuxtjs.org/api/configuration/nuxt.config#layouttransition)中为这些属性设置默认值。

`alias`

可以定义页面别名。它们允许从不同的路径访问同一页面。它可以是字符串，也可以是[`vue router`文档](https://router.vuejs.org/guide/essentials/redirect-and-alias.html#alias)中定义的字符串数组。

### 自定义元数据

如果为页面添加自定义元数据，可能希望以类型安全的方式添加。可以增加`definePageMeta`接受的对象类型：

```ts
// index.d.ts

declare module '#app' {
  interface PageMeta {
    pageType?: string
  }
}

// 在扩展类型时，确保导入/导出某些内容总是很重要的
export {}
```

## Navigation 导航

要在应用程序的页面之间导航，应使用`＜NuxtLink＞`组件。此组件包含在 Nuxt 中，因此不必像导入其他组件那样导入它。

一个导航到`pages`目录中`index.vue`页面的示例：

```vue
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

了解更多关于[`<NuxtLink>`](/nuxt3/component-nuxt-link)使用。

## 路由选项

可以设置默认的[vue路由](https://router.vuejs.org/api/interfaces/routeroptions.html)选项。

`history`和`routes选项`将始终被 Nuxt 覆盖。

### 使用`app/router.options`

这是指定`router.options`的推荐方式。

`~/app/router.options.ts`

```ts
import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
}
```

### 使用`nuxt.config`

只有 JSON 可序列化的选项是可配置的：

- linkActiveClass
- linkExactActiveClass
- end
- sensitive
- strict

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {}
  }
})
```

## 编程式导航

Nuxt3 允许通过`navigateTo()`方法进行编程式导航。该方法将能够在应用程序中以编程方式为用户导航。这对于接受用户的输入并在应用程序中动态地导航他们是非常好的。

::: tip
确保`navigateTo`是通过`await`或者在函数中`return`其结果。
:::

如：

```vue
<script setup>
const router = useRouter();
const name = ref('');
const type = ref(1);

function navigate(){
  return navigateTo({
    path: '/search',
    query: {
      name: name.value,
      type: type.value
    }
  })
}
</script>
```