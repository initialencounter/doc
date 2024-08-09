# mines

多人扫雷服务器

[即刻体验](http://14.103.48.1:2330/)

## 项目架构

- 后端 golang-fiber
- 前端 Vue

## 工作原理

后端负责扫雷的逻辑以及用户的管理
玩家首次打开网页需要注册

前端负责展示游戏界面以及与后端的交互
前后端交互采用 http + websocket 的方式通信

登录，获取地图信息采用 http 请求

扫雷地图会通过服务端 websocket 来更新，玩家的操作也会通过 websocket 来传递给服务端

## 部署

前往 [GitHub Action](https://github.com/initialencounter/mines/actions/runs/9763654252) 下载编译好的二进制文件，然后运行即可

如需配置密码重置系统，则需要在 `config.yml` 在配置 smtp 服务器

```yaml
smtp:
  host: "smtp.example.com" # smtp 服务器 host
  port: "587" #smtp端口
  tls: true #是否启用 tls
  username: "your email address" #填写邮箱地址
  password: "your password" #填写密码或授权码, 一般都需要授权码，授权码可以到邮箱后台获取
```

## TODO

目前还有很多功能没有实现，例如

- 成绩计算分析
- 扫雷道具

欢迎大家来给我提 PR 呀
[开源地址](https://github.com/initialencounter/mines)
