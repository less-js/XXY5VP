---
title: Nuxt3 ESlint统一代码风格 - Nuxt3中文文档
description: 使用 ESLint +  Prettier + Git Hooks 配置 Nuxt 实现风格统一与代码优化
tags: 
  - Nuxt3,ESlint,代码风格
head:
  - - meta
    - name: keywords
      content: Nuxt3,ESlint,代码风格
---

# `ESlint` - 统一代码风格

单双引号、缩进、逗号等编码风格的统一十分有必要，下面使用 ESLint +  Prettier + Husky 与 Lint Staged 配置 Nuxt 实现**风格统一与代码优化**，让代码更简洁，比如不允许未使用的变量，也可以指让代码更严谨，比如不允许未声明的全局变量，进一步提升工程的约束能力。

::: tip
项目中需要预先安装`typescript`依赖，且已经初始化 Git
:::

## 配置基本的 ESLint 

### ESLint 初始化

执行下列命令，通过 ESLint 自带的初始化功能: 

```sh
npx eslint --init

# 或
npm init @eslint/config
```

根据自己的需求回答一系列问题即可，如:

```sh
✔ How would you like to use ESLint? · problems
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser, node
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · tab
✔ What quotes do you use for strings? · single
✔ What line endings do you use? · windows
✔ Do you require semicolons? · No 
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · yarn
```

如果选择了使用 TypeScript，它会自动为你安装`@typescript-eslint`一系列工具。按上述回答问题后最终安装了这些依赖：

```json
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "^5.36.2",
  "@typescript-eslint/parser": "^5.36.2",
  "eslint": "^8.23.0",
  "eslint-plugin-vue": "^9.4.0"
}
```

### 配置`.eslintrc.js`

同时在项目根目录会自动生成`.eslintrc.js`文件，打开并修改文件，结果如下:

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error', // 防止 <script setup> 使用的变量 <template> 被标记为未使用
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': 'off',
  },
}
```

查看更多 [ESlint-plugin-vue 规则](https://eslint.vuejs.org/rules/)

### 配置`.eslintignore`

创建`.eslintignore`文件，根据习惯忽悠部分文件。这里只让 ESLint 检查核心代码文件，包括 `js`、`jsx`、`ts`、`tsx`文件：

```
*.json
*.html
*rc.js
*.svg
*.woff
*.ttf
*.css

.nuxt
.husky

.eslintrc.js
.prettierrc.js
package.json
tsconfig.ts
README.md
node_modules
*.sh
*.md
.vscode
.idea
dist
build
/public
/docs
.husky
.local
/bin
Dockerfile
```

在`package.json`中的`scripts`中添加以下命令:

```json
{
  "scripts": {
    "eslint": "eslint . --ext .vue,.js,.jsx,.ts,.tsx --cache",
    "eslint:fix": "npm run eslint -- --fix"
  },
}
```

此时，执行`npm run eslint`即是仅检查，而`eslint:fix`则是检查同时尽可能修复错误。

## 配置 Prettier

### 安装

```sh
yarn add prettier eslint-config-prettier --save-dev
```

## 配置`.prettierrc.js`

创建 Prettier 配置文件`.prettierrc.js`，常用配置项：

```js
module.exports = {
  // 单行最多 80 字符
  printWidth: 80,
  // 一个 Tab 缩进 2 个空格
  tabWidth: 2,
  // 每一行结尾不需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在对象属性中，仅在必要时才使用引号，如 "prop-foo"
  quoteProps: "as-needed",
  // 在 jsx 中使用双引号
  jsxSingleQuote: false,
  // 使用 es5 风格的尾缀逗号，即数组和对象的最后一项成员后也需要逗号
  trailingComma: "es5",
  // 大括号内首尾需要空格
  bracketSpacing: true,
  // HTML 标签（以及 JSX，Vue 模板等）的反尖括号 > 需要换行
  bracketSameLine: false,
  // 箭头函数仅有一个参数时也需要括号，如 (arg) => {}
  // 使用 crlf 作为换行符
  endOfLine: "crlf",
};
```

阅读关于更多[Prettier 配置](https://prettier.io/docs/en/options.html)。

为了避免和 ESLint 冲突，我们还需要通过`eslint-config-prettier`禁用掉部分 ESLint 规则，修改 ESLint 配置：

```js
// .eslintrc.js
module.exports = {
  extends: [
    'prettier', // 新增这一行
  ],
}
```

### 配置忽略文件`.prettierignore`:

```
node_modules
build
dist
output
.nuxt
.husky

.eslintrc.js
.prettierrc.js
tsconfig.json
package.json
tsconfig.ts
README.md


.local
**/*.svg
**/*.sh

/public/*

# 如果不希望 prettier 检查代码文件的话
*.ts
*.tsx
*.jsx
*.js
```

在`package.json`中的`scripts`中新增如下命令:

```json
{
  "scripts": {
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write .",
    "lint": "npm run eslint && npm run prettier",
    "lint:fix": "npm run eslint:fix && npm run prettier:fix"
  },
}
```

如上，`npm run prettier`是仅检查，而`prettier:fix`才是进入修改。同时增加了`lint`和`lint:fix`来一次性执行两个工具。

## Vue ESlint 配置

安装:

```sh
yarn add -D vue-eslint-parser @vue/eslint-config-typescript
```

修改`.eslintrc.js`:

```js
{
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
```

## Nuxt ESLint配置

安装:

```sh
yarn add  -D @nuxtjs/eslint-config @nuxtjs/eslint-config-typescript
```

修改`.eslintrc.js`:

```js
extends: [
  '@nuxtjs/eslint-config-typescript'
]
```

::: tip
安装了`@nuxtjs/eslint-config-typescript`后，该插件规则要求函数名称和调用它的左括号之间有空格，为防止和 ESlint 冲突，最好关闭`func-call-spacing`规则，即: `'func-call-spacing': 'off'`
:::

## 配置 Husky 与 Lint Staged

配置 Husky 与 Lint Staged 让每次提交代码时都自动执行一次格式化，就能确保所有人提交上去的代码风格一致。

### Husky

安装:

```sh
npx husky-init && yarn
```

添加 Git Hooks:

```sh
npx husky add .husky/pre-commit './node_modules/.bin/lint-staged'
```

此时根目录下自动生成`.husky`目录，其内有一个`pre-commit`文件，文件内容为:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm test
./node_modules/.bin/lint-staged
```

::: tip
根据自己喜好修改`npm test`，这里修改为`yarn lint:fix`
:::

从上述文件中可以看出，实际上要执行的就是`lint-staged`这个命令，而 Lint Staged 的作用即是找出添加到暂存区（git add）的文件，然后执行对应的`lint`，下面将它添加到项目里:

### lint-staged

安装:

```sh
yarn add -D lint-staged
```

在`package.json`中增加如下配置，实现对暂存区的核心代码文件，先使用 ESLint 格式化，再使用 Prettier 格式化，而对于其他文件，统一使用 Prettier 进行格式化。

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --cache --fix",
      "prettier --write --list-different"
    ],
    "*.{json,md,html,css,scss,sass,less,styl}": [
      "prettier --write --list-different"
    ]
  }
}
```

至此，当`git commit -m 'first commit'`时就会对代码进行统一格式化。

## `.eslintrc.js`配置示例

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error', // 防止 <script setup> 使用的变量 <template> 被标记为未使用
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names':'off', // 关闭驼峰命名规则
    
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',
    'func-call-spacing': 'off', // 关闭函数名称和调用它的左括号之间的空格
  },
}
```

## ESlint 常用规则

根据自己的需求调整

```js
rules: {
    // 运算符两侧需要有空格，并增加对枚举类型支持
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],

    // 关键字前后有一个空格，并增加了对函数调用的泛型类型参数的支持。
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',

    // 指定类型时应该正确添加空格
    '@typescript-eslint/type-annotation-spacing': 'error',

    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    // 调用函数时，函数名与括号之间没有空格，并增加了对函数调用的泛型类型参数的支持
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    // 逗号前面没空格，后面有空格
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',

    // 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
    // 增加了对函数调用的泛型类型参数的支持
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],

    // interface 和 type 里的成员统一使用分号（;）进行分割，单行类型的最后一个元素不加分号
    '@typescript-eslint/member-delimiter-style': 'error',

    // 强制使用分号
    semi: 'off',
    '@typescript-eslint/semi': 'error',

    // 字符串字面量使用单引号包裹
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    //  用逗号分割多行结构，始终加上最有一个逗号（单行不用）
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // 对于非空代码块，采用 Egyptian Brackets 风格
    // 增加对 enum、interface、namespace、module 的支持
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],

    // 禁止定义没有使用的变量
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // 禁止部分值被作为类型标注，需要对每一种被禁用的类型提供特定的说明
    // 1. 不使用大写的原始类型，应该使用小写的类型
    // 2. 对于对象类型，应使用 Record<string, unknown>，而不是 object
    // 3. 对于函数类型，应使用入参和返回值被标注的具体类型
    '@typescript-eslint/ban-types': 'warn',

    // 不允许不必要的类型标注，但允许类的属性成员进行额外标注
    '@typescript-eslint/no-inferrable-types': 'error',

    // 不允许与默认约束一致的泛型约束
    // 在 TS 3.9 版本以后，对于未指定的泛型约束，默认使用 unknown ，在这之前则是 any
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // 不允许非空断言与空值合并同时使用
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',

    // 不允许非空断言与可选链同时使用
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    // 如果索引仅用于访问正在迭代的数组，则首选 for...of 而不是 for 循环遍历数组
    '@typescript-eslint/prefer-for-of': 'warn',

    //  重载的函数写在一起
    '@typescript-eslint/adjacent-overload-signatures': 'warn',

    // 具有默认值的函数参数应该被放置到参数列表右边
    '@typescript-eslint/default-param-last': 'warn',

    // 对于枚举成员值，只允许使用普通字符串、数字、null、正则，而不允许变量复制、模板字符串等需要计算的操作
    '@typescript-eslint/prefer-literal-enum-member': 'warn',

    // 不允许对同一模块重复导入，类型可重复导入
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'warn',

    // 禁止使用 module 来定义命名空间
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // 接口中的方法使用属性的方式定义。使用属性去定义接口中的方法，可以获得更严格的检查
    '@typescript-eslint/method-signature-style': 'error',

    // 不允许定义空的接口，允许单继承下的空接口
    '@typescript-eslint/no-empty-interface': 'warn',

    // 禁止使用容易混淆的非空断言
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // 不允许额外的非空断言
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // 使用 as 进行类型断言而不是 <>。在 .tsx 文件中写组件时会存在冲突
    '@typescript-eslint/consistent-type-assertions': 'warn',

    // 禁止使用 tslint:<rule-flag> 等相关注释，tslint 已经不再维护了
    '@typescript-eslint/ban-tslint-comment': 'error',

    // 禁止使用其他 @ts 规则，除非提供必要的说明。
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      },
    ],
  },
```