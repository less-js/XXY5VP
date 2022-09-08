---
title: Nuxt3 nuxi dev启动开发服务 - Nuxt3中文文档
description: nuxi dev是Nuxt自带的一个用于启动热更新开发服务器的命令
tags: 
  - nuxt3,nuxi dev,nuxt启动开发服务,Nuxt3命令
head:
  - - meta
    - name: keywords
      content: nuxt3,nuxi dev,nuxt启动开发服务,Nuxt3命令
---

# `nuxi dev` - 启动开发服务

`nuxi dev`命令用于启动热更新开发服务器，默认地址：`http://localhost:3000`

## 语法

```sh
npx nuxi dev [rootDir] [--clipboard] [--open, -o] [--no-clear] [--port, -p] [--host, -h] [--https] [--ssl-cert] [--ssl-key]
```

| 选项 | 默认值 | 描述 |
| :------------- |:-------------| :-----|
| `rootDir` | `.` | 需要启动的项目根目录 |
| `--clipboard` | `false` | 是否复制`URL`到剪切板 |
| `--open, -o` | `false` | 是否自动打开浏览器 |
| `--no-clear` | `false` | 是否清除控制台 |
| `--port, -p` | `3000` | 端口号 |
| `--host, -h` | `localhost` | 主机名 |
| `--https` | `false` | 默认情况下，使用具有自签名证书的`https`协议进行侦听 |
| `--ssl-cert` | `null` | 为`https`指定证书 |
| `--ssl-key` | `null` | 指定`https`证书的密钥 |

`port`和`host`也可以通过`NUXT_PORT`、`PORT`、`NUXT_HOST`或`HOST`环境变量设置。

> `nuxi dev`命令将`process.env`的`NODE_ENV`设置为`development`。