---
title: Nuxt3 useCookie读写Cookie - Nuxt3中文文档
description: Nuxt 提供了一个对 SSR 友好的Composable来读写cookie。在页面、组件和插件中，可以使用useCookie来创建一个绑定到特定cookie的响应式引用。
tags: 
  - Nuxt3,useCookie
head:
  - - meta
    - name: keywords
      content: Nuxt3,useCookie
---

# `useCookie` - Cookie 读写

Nuxt 提供了一个对 SSR 友好的`Composable`来读写`cookie`。

在页面、组件和插件中，可以使用`useCookie`来创建一个绑定到特定`cookie`的响应式引用。

```js
const cookie = useCookie(name, options)
```

::: tip
👉 `useCookie`只能在`setup`或`Lifecycle`钩子中工作.

😌 `useCookie`自动将`cookie`值序列化和反序列化为 JSON。
:::

## 示例

下面的例子创建了一个名为`counter`的`cookie`。如果这个`cookie`不存在，它最初被设置为一个随机值。每当更新`counter`变量时，`cookie`也会相应地被更新。

```vue
<template>
  <div>
    <h1> Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">
      reset
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>

<script setup>
const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)
</script>
```

## Options - 选项

大部分的选项将直接传递给[`cookie`包](https://github.com/jshttp/cookie)。

`useCookie`接受下列选项来修改Cookie的行为。

### maxAge / expires

`maxAge`: 指定`Max-Age`属性的数值（单位：秒）。给定的数字将通过四舍五入转换为整数。默认情况下，没有设置最大有效期。

expires: 指定 Date 对象作为`Expires`属性的值。默认情况下，没有设置过期时间。大多数客户会认为这是一个 "非持久性的 cookie"，并会在关闭浏览器等情况下删除它。

::: tip
💡 Cookie 存储模型规范指出，如果`expires`和`maxAge`都被设置，那么`maxAge`优先，但并不是所有的客户都会遵守这一点，所以如果两者都被设置，它们应该指向相同的日期和时间!
:::

::: tip
如果`expires`和`maxAge`都没有被设置，那么这个`cookie`将是`session-only`的，并在用户关闭浏览器时被删除。
:::


### httpOnly

指定`HttpOnly`属性的布尔值。当为`true`时，则设置`HttpOnly`属性；否则，情况并非如此。默认情况下，未设置`HttpOnly`属性。

::: tip
💡 设置为`true`时要小心，因为符合要求的客户端将不允许客户端的 JavaScript 查看`document.cookie`中的`cookie`。
:::

### secure

指定`Secure`属性的布尔值。当为`true`时，安全属性被设置；否则就不设置。默认情况下，安全属性不被设置。

::: tip
💡 将此设置为`true`时要小心，因为如果浏览器没有 HTTPS 连接，符合要求的客户端将来不会将 cookie 发送回服务器。这可能导致 hydration 错误。
:::

### domain

指定`Domain`属性的值。默认情况下，没有设置`Domain`，大多数客户会考虑只将`cookie`应用于当前域。

### path

指定`Path`属性的值。

### sameSite

指定`SameSite属性的布尔值或字符串。

- true: 将把`SameSite`属性设置为`Strict`，以实现严格的同站执行。
- false: 将不设置`SameSite`属性。
- 'lax': 将把`SameSite`属性设置为`Lax`，以实现宽松的同网站执行。
- 'none': 将把`SameSite`属性设置为`None`，用于明确的跨站cookie。
- 'strict': 将把`SameSite`属性设置为`Strict`，用于严格的同站执行。

### encode

指定一个将用于对`cookie`的值进行编码的函数。由于`cookie`的值有一个有限的字符集（而且必须是一个简单的字符串），这个函数可以用来把一个值编码成适合`cookie`值的字符串。

默认的编码器是`JSON.stringify` + `encodeURIComponent.`。

### decode

指定一个将用于解码一个`cookie`的值的函数。由于`cookie`的值有一个有限的字符集（而且必须是一个简单的字符串），这个函数可以用来将先前编码的`cookie`值解码为一个 JavaScript 字符串或其他对象。

默认的解码器是`decodeURIComponent` + `destr`。

::: tip
💡 如果从这个函数中抛出一个错误，原始的未解码的值将作为`cookie`的值被返回。
:::

### default

指定返回`cookie`默认值的函数。该函数还可以返回`Ref`。

## API 路由中的 Cookie 处理

可以使用[h3](https://github.com/unjs/h3)包中的`getCookie`和`setCookie`在服务器 API 路由中设置`Cookie`。

```js
export default defineEventHandler(event => {
  // Read counter cookie
  let counter = getCookie(event, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(event, 'counter', ++counter)

  // Send JSON response
  return { counter }
})
```