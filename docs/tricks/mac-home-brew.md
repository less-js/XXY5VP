---
title: 配置 Homebrew 国内镜像
description: Homebrew镜像
tags: 
  - Homebrew
head:
  - - meta
    - name: keywords
      content: Homebrew
---

# 配置 Homebrew 镜像为阿里云源

## 配置方法

首先确保你已经安装好了 Homebrew 了, 如果没有, 请参考 OPSX 指引页的 Homebrew 文档；然后你只需要粘贴下述命令在对应终端运行。

### Bash 终端配置

```sh
# 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
# 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
# 应用生效
brew update
# 替换homebrew-bottles:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

### Zsh 终端配置

```sh
# 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
# 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
# 应用生效
brew update
# 替换homebrew-bottles:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

## 恢复默认配置

1. 执行下述命令:

```sh
# 重置 brew.git:
$ cd "$(brew --repo)"
$ git remote set-url origin https://github.com/Homebrew/brew.git

# 重置homebrew-core.git:
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```

2. 删掉`HOMEBREW_BOTTLE_DOMAIN`环境变量, 

打开终端文件: 

```sh
 ~/.bash_profile
# 或
~/.zshrc
```

找到`HOMEBREW_BOTTLE_DOMAIN`并删除

3. 执行下列命令:

```sh
source ~/.bash_profile
# 或
source ~/.zshrc
```

::: TIP
官方主页: https://brew.sh/
:::