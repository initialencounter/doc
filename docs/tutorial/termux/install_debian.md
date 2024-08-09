---
title: Termux 安装 debian
authors: initencunter
tags: [docs, 教程]
---

上文提到，Termux 存在许多限制，如无法安装某些软件包，
proot 容器可以帮助我们绕过这些限制

目前有两种方法安装 proot 容器

# 1 使用自带的安装工具（推荐）

    - 1.2 打开工具
    音量上键->左侧菜单栏（第五个）->发行版本->最新版本

    - 1.2 选择版本
    proot容器(running linux in termux)

    安装arm64 Linux系统(proot容器)

    debian

    debian 10 (buster)
    - 1.3 开始安装

    - 1.4 安装完成
    打开yti tools -> 不用

    - 1.5 启动
    ```shell
    bash ~/buster-arm64.sh
    ```

# 2 使用 tmoe 安装

### 2.1 运行脚本

在 termux 终端输入

```
bash -c "$(curl -L https://gitee.com/mo2/linux/raw/2/2)"
```

### 2.2 更改镜像源

![Alt text](./assets/termux/6.png)
![Alt text](./assets/termux/7.png)
![Alt text](./assets/termux/8.png)

切换镜像源输入 y，回车

![Alt text](./assets/termux/9.png)

选择语言

![Alt text](./assets/termux/10.png)

选择 proot 容器

![克隆项目](./assets/termux/11.png)

回车

![换镜像源](./assets/termux/12.png)

输入 y，回车

![修改完成，返回](./assets/termux/13.png)

回车

![Alt text](./assets/termux/10.png)

选择 proot 容器

### 2.4 设置主题

![终端配色](./assets/termux/14.png)

选中一个配色后选择 ok，也可以选择跳过

![终端配色](./assets/termux/15.png)

选中一个字体加粗后选择 ok，也可以选择跳过

![extra-keys-style](./assets/termux/16.png)

修改虚拟键盘的布局，不建议修改

### 2.5 设置 DNS 及时区

![Alt text](./assets/termux/17.png)

设置 DNS，随便选

![回车返回](./assets/termux/18.png)

回车返回

![一言](./assets/termux/19.png)

启用一言

![时区](./assets/termux/20.png)

设置时区为上海，选择 yes

### 2.6 挂载目录

![挂载目录](./assets/termux/21.png)
![挂载目录2](./assets/termux/22.png)

挂载目录，以后下载文件什么的都很方便

![认可协议](./assets/termux/23.png)

同意协议

### 2.7 选择发行版本

![proot 容器操作](./assets/termux/24.png)

选择 arm64 容器发行版本列表

![容器列表](./assets/termux/25.png)

选择 Debian: 致力于自由

![选择一个版本](./assets/termux/26.png)

建议选择 stable 10-buster

![启动 proot ](./assets//termux/27.png)

选择启动 proot ,回车

### 2.7 开始安装 proot 容器

![Alt text](./assets//termux/28.png)

回车

![sudo](./assets/termux/29.png)

sudo 用户基本用不到，可选

![终端美化](./assets/termux/30.png)

可选

![Alt text](./assets/termux/31.png)

退出

### 2.8 退出及启动 proot 容器

![你已成功安装了debian-10-arm64](./assets/termux/32.png)

你已成功安装了 debian-10-arm64，输入 exit 即可退出 proot 容器
下次启动只需要输入 debian

![Alt text](./assets/termux/33.png)
