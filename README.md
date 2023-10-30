# 网站

网站基于 **[Docusaurus 2](https://docusaurus.io/)** 搭建, Docusaurus, 一款时尚的静态网站生成器.

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。  
大多数更改都是实时反映的，而无需重新启动服务器。

### 编译

```
$ yarn build
```

此命令将静态内容生成到`build`目录中，并且可以使用任何静态内容托管服务提供服务。

### Github支持

在.github/workflows中修改你的仓库地址和分支

- 1. 在仓库的Settings -> Actions -> General -> Workflow permissions 中勾选 Read and write permissions

- 2. 在本项目的 docusaurus.config.js 中
    - 修改 url 为你的 github page 地址， 一般为 https://<你的github用户名>.github.io
    - 修改 baseurl 为你的仓库地址 一般为 /<你的仓库地址>/

- 3. push 到你的远程仓库