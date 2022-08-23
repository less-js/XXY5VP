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

# git 常用命令

1. 仓库
    ```sh
    # 把当前目录变成git可管理得仓库，也就是初始化仓库
    git init  
     　　　　　　　　
    # 缓存所有文件
    git add 文件名
          　　      
    # 提交新文件到仓库中
    git commit -m "first commit"    

    # 添加远程仓库
    git remote add origin 远程仓库　
    　
    # 列出已经存在的远程分支 
    git remote 

    # 列出详细信息，在每一个名字后面列出其 url
    git remote -v　　　　　

    # 删除关联对应的远程仓库地址
    git remote rm main

    # 把本地库的所有内容推送到远程库上
    git push -u origin main 　　

    # 强制提交
    git push -u origin main -f

    # 克隆git仓库
    git clone 远程仓库url                 
    ```

2. 分支

    ```sh
    # 创建并切换此分支
    git checkout -b dev        

    # 创建分支
    git branch dev             

    # 把本地分支 push 到远程 dev 分支
    git push origin dev           

    # 从当前分支切换到指定分支
    git checkout dev            

    # 查看所有分支，* 代表当前所在分支 
    git branch　　　　　　       

    # 删除本地指定分支
    git branch -d dev　　

    # 重命名当前分支为 master
    git branch -m master　　 

    # 合并指定分支到当前分支
    git merge dev          

    # 压缩成一行，将 dev 分支合并到 master 分支
    git merge dev master   

    # 普通模式合并，合并后的历史有分支，能看出来曾经做过合并
    git merge --no-ff -m “merge” dev    

    # 查看分支提交及文件状态
    git status              

    # 查看日志
    git log　　　　　　　　　 

    # 用于查看分支合并图
    git log --graph       

    # 删除远程分支
    git push origin:dev　　　
    　
    # 回退提交
    git  push origin  HEAD --force  

    # 回退到此 commit id  本地撤销  远程不受影响
    git reset --hard 8c6ffy1   

    # 远程撤销
    git reset --sort 8c6ffy1  
    ```

3. 标签

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
    ```