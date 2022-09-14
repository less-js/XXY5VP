---
title: Git常用命令
description: Git常用命令
tags: 
  - git命令,git
head:
  - - meta
    - name: keywords
      content: git命令,git
---

# Git 常用命令

## Base - 基础操作

```sh
# 把当前目录变成git可管理得仓库，也就是初始化仓库
git init  

# 克隆远程仓库
git clone <远程仓库url>

# 缓存所有文件
git add 文件名
      　　      
# 提交新文件到仓库中
git commit -m "first commit"

# 把本地库的所有内容推送到远程库上
git push -u origin main 

# 强制提交
git push -u origin main -f　　
```

## Pull - 拉取

```sh
# 当使用 git fetch  从远程仓库抓取数据的时候
# 并不会修改工作目录中的内容，只会获取数据，然后需要自己进行合并
git fetch origin main

# git pull 查找当前分支所跟踪的远程仓库与分支
# 从远程仓库上抓取数据，然后尝试合并进入当前分支
git pull origin main
```

## Stash - 暂存区

```sh
# 代码放到暂存区(未 commit 的代码)，适用于当需要切换分支，但又不想 push 的时候
git stash

# 还原 stash
git stash apply

# 清除最近一次 stash
git stash drop

# 还原并清除最近一次 stash 记录
git stash pop

# 查看暂存区列表
git stash list

# 清空所有 stash 记录
git stash clear
```

## Remote - 远程
```sh
# 查看所有远程仓库
git remote -v

# 添加远程仓库
git remote add origin <远程仓库>

# 删除关联对应的远程仓库地址
git remote rm main

# 列出已经存在的远程分支 
git remote 

# 列出详细信息，在每一个名字后面列出其 url
git remote -v　　　

# 修改仓库名
git remote rename <old_name> <new_name>
```

## Rm - 删除文件

```sh
# 删除存储在本地仓库的文件
git rm <file name>        

# 强制删除
git rm <file name> -f           
```

## Rest - 回退

```sh
# 回退提交
git push origin HEAD --force  

# 回退到此 commit id  本地撤销，远程不受影响
git reset --hard 8c6ffy1   

# 远程撤销
git reset --sort 8c6ffy1  
```

## Branch - 分支

```sh
# 查看所有分支
git branch -a

# 查看所有远程分支
git branch -r

# 切换分支
git checkout <分支名>     

# 创建并切换此分支
git checkout -b dev   

# 创建分支
git branch dev             

# 从远程拉取分支并在本地创建新分支
git fetch origin <远程分支名>:<本地新建分支名>

# 把本地分支 push 到远程 dev 分支
git push origin dev           

# 从当前分支切换到指定分支
git checkout dev

# 查看所有分支，* 代表当前所在分支 
git branch　　　　　　       

# 删除本地指定分支
git branch -d dev　　

# 删除远程分支
git push origin --delete <branch_name>

# 重命名当前分支为 master
git branch -m master

# 修改指定分支名
git branch -m <old_name> <new_name>

# 合并指定分支到当前分支
git merge dev          

# 压缩成一行，将 dev 分支合并到 master 分支
git merge dev master   

# 普通模式合并，合并后的历史有分支，能看出来曾经做过合并
git merge --no-ff -m “merge” dev   

# 回滚合并前
git merge ---abort 

# 查看分支提交及文件状态
git status

# 保存不想提交的但是已经修改的内容
git stash

# 删除远程分支文件
git rm --cached <filename>
git commit -m "delete remote file filename "
git push -u origin main

# 删除远程文件夹
git rm -r --cached <directory name>
git commit -m "delete remote directory directory name "
git push -u origin main

# 删除本地文件和远程分支文件
git rm <filename>
git commit -m "delete file filename "
git push -u origin main

# 删除本地文件夹和远程分支文件夹
git rm -r <directory name>
git commit -m "delete directory directory name "
git push -u origin main
```

## Log - 日志

```sh
# 查看日志
git log

# 用于查看分支合并图
git log --graph    
```

## Tag - 标签

```sh
# 创建本地 tag   
git tag <tagName> 

# 把本地 tag 推送到远程仓库
git push origin <tagName>   

# 一次全部推送
git push origin --tags  

# 推送指定 tag
# 查看当前分支的提交历史 里面包含 commit id
git log --pretty=oneline 
git tag -a <tagName> <commitId>

# 查看本地某个 tag 的详细信息
git show <tagName>

# 查看本地所有 tag
git tag 或者 git tag -l

# 查看远程所有 tag
git ls-remote --tags origin

# 本地 tag 的删除
git tag -d <tagName>

# 远程 tag 的删除
git push origin :refs/tags/<tagName>

# 拉取远程 tag
git fetch --tags

# 查看标签
git tag

# 精确拉取指定的某个版本
git fetch origin tag <版本号>
```