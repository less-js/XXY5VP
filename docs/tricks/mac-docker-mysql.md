---
title: Mac下使用Docker安装MySQL
description: Mac下使用Docker安装MySQL
tags: 
  - docker,mysql
head:
  - - meta
    - name: keywords
      content: docker,mysql
---

# Mac 下使用 Docker 安装 MySQL

1. 安装 Docker

直接到[Docker](https://www.docker.com/)官网下载对应版本，安装过程和安装其它软件一样。

安装完成后检查 Docker 版本:

```sh
docker --version
```

2. 配置阿里云加速

- 进入 Docker 的配置项
![preferences](/images/other/docker-preferences.png)

- 在 Engine 中设置代理加速
![engine](/images/other/docker-engine.png)

```json
{
  "debug": true,
  "experimental": false,
  "registry-mirrors": [
    "https://e29lwva9.mirror.aliyuncs.com"
  ]
}
```

验证是否成功:

```sh
docker info
```

在输出结果的最下面如果看到`https://e29lwva9.mirror.aliyuncs.com/`表示已经配置成功。

3. 安装 MySQL

- 创建网络

```sh
docker network create dev-network
```

- 创建 MySQL 容器

```sh
docker run --name <容器名称> --net dev-network -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=数据库密码 mysql:latest
```

::: tip
--name: 容器名称

--net dev-network: 容器与本机的网络连接类型

-p 3306:3306: 映射端口号

-d: 后台运行容器，并返回容器ID

-e MYSQL_ROOT_PASSWORD: 数据库密码

mysql:latest: 数据库版本，可以指定版本号
:::

4. 使用 Navicat 等工具连接数据库

以下信息和创建 MySQL 容器时设置的一致

::: tip
主机名：默认为 localhost

端口号：3306

用户名：默认为 root

密码：123456
:::