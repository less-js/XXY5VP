---
title: Nuxt3 components 组件目录 - Nuxt3中文文档
description: Nuxt3 components目录是放置所有 Vue 组件的地方，这些组件可以会被自动导入你的页面或其他组件中。
tags: 
  - Nuxt3组件,Nuxt3,Nuxt3 components
head:
  - - meta
    - name: keywords
      content: Nuxt3,Nuxt3组件,Nuxt3 components
---

# Components - 组件目录

`components`目录是放置所有 Vue 组件的地方，且可以将这些组件导入页面或其他组件。

Nuxt 会自动导入`components`目录中的任何组件（以及可能使用的任何模块注册的组件）。

```
| components/
--| TheHeader.vue
--| TheFooter.vue
```

```vue
<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
```

## 组件命名

如果有一个类似下面结构的组件目录：

```
| components/
--| base/
----| foo/
------| Button.vue
```

那么组件名称将会**基于路径和文件名连起来**，并删除重复的目录（如： foo/foo/Button.vue 注册名将会是 FooButton），当使用`Button.vue`时需要像下面这样：

```vue
<BaseFooButton />
```

Nuxt 建议组件的文件名与其名称匹配。因此，在上面的示例中，可以将`Button.vue`重命名为`BaseFooButton.vue`

## 动态组件

如果需要使用 Vue 的 `<component :is="someComputedComponent">` 语法，则需要使用 Vue 提供的`resolveComponent`方法。

如：

```vue
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>

<script setup>
const MyButton = resolveComponent('MyButton')
</script>
```

如果使用`resolveComponent`来处理动态组件，请确保除了组件的名称之外不要插入任何内容，该名称必须是字符串而不是变量。

或者可以**全局注册所有组件**（不推荐），这将为所有组件创建异步块，并使它们在整个应用程序中可用。

```js
// 全局注册所有组件
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  },
})
```

也可以通过将某些组件放在`~/components/global`目录中，选择性地全局注册它们。

> `global`选项也可以按`components`目录设置

## 动态导入

动态导入组件（也称为懒加载组件），只需在组件名称中添加`Lazy`前缀。

```vue
<template>
  <div>
    <TheHeader />
    <slot />
    <LazyTheFooter />
  </div>
</template>
```

如果不总是需要该组件，可以通过使用`Lazy`前缀（如：LazyMountainsList.vue），将组件代码的加载延迟到适当的时间，这有助于优化 JavaScript 包大小。

如：

```vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

## 手动导入

如果希望或需要绕过 Nuxt 的自动导入功能，还可以显式地从`#components`导入组件。

如：

```vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup>
  import { NuxtLink, LazyMountainsList } from '#components'
  const show = ref(false)
</script>
```

## `<ClientOnly>`

`＜ClientOnly＞`组件用于仅在客户端渲染组件。如果仅需要在客户端上导入组件，请在客户端插件中注册该组件。

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly>
      <!-- 该组件只会在客户端渲染 -->
      <Comments />
    </ClientOnly>
  </div>
</template>
```

使用一个插槽，如：`fallback`，直到`<ClientOnly>`组件在客户端挂载。

```vue
<template>
  <div>
    <Sidebar />
    <!-- 这将在服务端呈现“span”元素 -->
    <ClientOnly fallbackTag="span">
      <!-- 该组件只会在客户端渲染 -->
      <Comments />
      <template #fallback>
        <!-- 这个将在服务端渲染 -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```

## 库开发者

制作具有自动摇树优化和组件注册功能的 Vue 组件库非常简单✨

可以使用`components:dirs`钩子扩展目录列表，而无需用户在 Nuxt 模块中进行配置。

想象一下这样的目录结构：

```
| node_modules/
---| awesome-ui/
------| components/
---------| Alert.vue
---------| Button.vue
------| nuxt.js
| pages/
---| index.vue
| nuxt.config.js
```

然后在`awesome-ui/nuxt.js`中，你就可以使用`components:dirs`钩子：

```js
import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // 将`./components`目录添加到列表中
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'awesome'
      })
    }
  }
})
```

现在，在你的项目中，你可以将 UI 库作为 Nuxt 中的 Nuxt 模块导入。配置文件：

```js
export default {
  modules: ['awesome-ui/nuxt']
}
```

并在`pages/index.vue`中直接使用模块组件（前缀为`awesome-`）:

```vue
<template>
  <div>
    My <AwesomeButton>UI button</AwesomeButton>!
    <awesome-alert>Here's an alert!</awesome-alert>
  </div>
</template>
```

它仅在使用时自动导入组件，并在更新`node_modules/awesome-ui/components/`中的组件时支持 HMR。

::: tip
Nuxt3 库列表：[Explore Nuxt Modules](https://modules.nuxtjs.org/?version=3.x)
:::