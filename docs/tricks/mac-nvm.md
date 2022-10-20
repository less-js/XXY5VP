---
title: Mac 下安装 NVM
description: NVM
tags: 
  - Homebrew,nvm
head:
  - - meta
    - name: keywords
      content: Homebrew
---

# Mac 下使用 Homebrew 安装 NVM

## 前提

首先确保已经安装好了 Homebrew 了, 如果没有, 使用下述命令在对应终端运行:

```sh
/bin/bash -c "$(curl -fsSL https:/raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

详情请参考 [Homebrew](https://brew.sh/) 官方文档。

### 安装

1. 如果已经安装了 node，先卸载:

```sh
brew uninstall --ignore-dependencies node 
brew uninstall --force node 
```

2. 更新 Homebrew 软件包列表并安装 NVM

```sh
brew update 
brew install nvm
```

3. 配置`~/.zshrc` (或`~/.bash_profile`)中添加下列内容:

```sh
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

保存后在命令行工具中执行:

```sh
source ~/.zshrc
# 或
source ~/.bash_profile
```

4. 使用 nvm 安装 node

```sh
# 查看可供下载安装的版本
nvm ls-remote 

# 安装 node
nvm install node     ## 安装最后一个长期支持版本
nvm install 10

# 查看本地已安装的 node 列表
nvm ls 

# 制定使用版本
nvm use 10
```
