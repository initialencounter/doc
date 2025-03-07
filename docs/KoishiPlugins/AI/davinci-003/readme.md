# davinci-003

使用前请先获取 api-key

| 平台          |        开发平台                                             | 请求地址                         |
| ------------ | ----------------------------------------------------------- | --------------------------------|
| openai       | [openai 开放平台](https://beta.openai.com/account/api-keys)  | https://api.openai.com          |
| chatanywhere | [chatanywhere 商店](https://api.chatanywhere.tech/#/shop)    | https://api.chatanywhere.com.cn |
| deepseek     | [deepseek 开放平台](https://platform.deepseek.com/api_keys)  | https://api.deepseek.com        |

对于部署者行为及所产生的任何纠纷， Koishi 及 koishi-plugin-davinci-003 概不负责。

如果有更多文本内容想要修改，可以在 本地化 中修改 zh 内容

# 使用方法

### 指令如下：

| 功能                    | 指令         |
| ----------------------- | ------------ |
| 开启对话                | dvc 或直接@机器人 |
| 重置会话                | dvc.重置会话 |
| 添加人格                | dvc.添加人格 |
| 清空所有回话            | dvc.clear    |
| 切换人格                | dvc.切换人格 |
| 切换输出模式            | dvc.output   |
| 更新人格(需要 4 级权限) | dvc.update   |
| 显示一个对话            | dvc.cat      |

## 设置多个 key 的方法

1. 直接修改
2. 在配置文件修改
   打开 koishi.yml (可以使用 explorer 插件)
   修改配置项
   ```
   davinci-003:3seyqr:
       key:
       - sk-kashdkahsjdhkashkd*
       - sk-ItGRonJPTa6sp9QYhN*
       - sk-sgadtiasyn2ouoi1n*
   ```

## 添加人格的方法

- 使用 [`explorer`](https://koishi.chat/zh-CN/plugins/console/explorer.html) 插件直接编辑， [_点我_](../files/personality.json) 跳转到编译页面
  - 编辑后记得保存哟
- 在聊天中发送“dvc.添加人格”可以添加并自动保存人格
- [添加人格教程](https://forum.koishi.xyz/t/topic/2349/4)
- 使用 `dvc.update` 指令(需要 4 级权限)，该指令会加载 [_ChatPrompts_](https://github.com/initialencounter/ChatPrompts) 里的所有人格
  - 分享你的人格！，可以到 [_ChatPrompts/Pulls_](https://github.com/initialencounter/ChatPrompts//pulls) 创建一个 Pr

# 问题反馈

QQ 群：399899914

小伙伴如果遇到问题或者有新的想法，欢迎到[这里](https://github.com/initialencounter/2022-12-24/issues)反馈哦~

# 更新日志
- v7.0.11
  - 在控制台添加人格
- v7.0.8
  - 添加是否输出 reasoning_content 的配置选项
  - 将 reasoning_content 放到 `think` 标签里面
- v7.0.7
  - 添加 reasoning_content 输出
- v7.0.6
  - 适配 deepseek-reasoner
  - 使用流式请求
- v7.0.3
  - 修复 discord 中 asr 无法触发聊天
  - 修复未开启 vits 服务时，默认输出为图片
- v7.0.2
  - 删除余额查询
  - 增加测试按钮
- v7.0.1
  - 修复引用消息
- v7.0.0
  - 删除引擎分类
  - 删除反代
  - 删除撤回全部消息
  - 删除 selfID
  - 优化唯一人格
  - 优化唯一上下文
  - 优化屏蔽用户功能
  - 优化调用频率限制
  - 优化代码格式
  - 优化配置信息
- v6.5.1
  - 修复不能输入空格
- v6.5.0
  - 新增引用触发！将引用的消息添加到会话！并支持 prompt！
  - 重构部分代码，删除部分弃用的 API
- v6.4.5
  - 修复上下文丢失
  - 修复修复 key 数组越界
- v6.4.4
  - 修复[逆天 bug](https://github.com/initialencounter/2022-12-24/issues/41)无限循环
  - 修复 key 数组越界
  - 移除删除 key
- v6.4.3
  - 修复昵称唤醒异常
  - 新增批量删除人格
- v6.4.2
  - 更新 API
  - 更新 README
- v6.4.1
  - 新增查看会话指令： dvc.cat -i \<会话 id\> -a:显示所有字数
  - 人格 JSON 缩进
- v6.4.0
  - 修复控制台组件注入
  - 改变人格菜单输出，减少刷屏
  - 新增更新预设 -d 覆盖选项
- v6.3.6
  - 新增自定义模型
- v6.3.4
  修复 undefined key
- v6.3.2
  修复 chatgptanywhere 查询余额 bug
- v6.3.1
  修复组件注入的 bug， 修复 css
- v6.3.0
  新增控制台查询余额，修复 16k
- v6.2.0
  - 新增 k-on 独立入口
- v6.1.1
  - 添加添加人格的教程
- v6.1.0
  - 新增最大重试次数，当 key 报错重试时，会记录每个 key 的重试次数，当重试次数大于最大重试次数时，会停止，并从内存中删除 key
- v6.0.1
  - 更改 key 的切换逻辑，报错后先查询余额 ，如果余额为 0，则从内存中删除 key， 如果还有余额，则暂时切换余额
- v6.0.0
  - 自动更换报错的 key
- v5.1.4-beta
  - 修复 stream 模式下的 prompt 失效
- v5.1.4-alpha
  - 新增流式输出，优化响应速度感受
- v5.1.4
  - 缩减体积
- v5.1.3
  - 菜单分段发送
- v5.1.1
  - 新增更新预设 -u 选项
- v5.1.0
  - 新增 403 个极品人格
- v5.0.2
  - 新增 gpt3.5-turbo-16k
- v4.0.7
  - 更灵活地添加人格(system||assistant||user)
- v4.0.6-beta
  - 更改超时时间为 10 分钟
- v4.0.6-alpha
  - 使用审核服务
- v4.0.6
  - 支持 GPT-4 了
  - 移除 text-davinci-003 等模型（或许早该这么做了
- v4.0.5
  - 修复 400 报错
- v4.0.4-alpha
  - 新增共用人设选项
- v4.0.4

  - 重写 sst 服务

- v4.0.3

  - 重写 vits 服务

- v4.0.2

  - 修复 400 报错

- v4.0.1

  - 语音输入做成服务，启用插件 koishi-plugin-tc-sst[![npm](https://img.shields.io/npm/v/koishi-plugin-tc-sst?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-tc-sst)即可实现

- v4.0.0

  - 新增语音输入

- v3.1.5

  - 更新 bot.selfid 的获取方式

- v3.1.4

  - 更新 bot.selfid 的获取方式

- v3.1.3

  - 新增被提及触发指令选项

- v3.1.2

  - 新增消息撤回
  - 接入 vits 语音服务

- v3.1.1

  - 修复无限触发 block

- v3.1.0

  - 新增 block 全指令屏蔽
  - 修复重置会话 400 错误

- v3.0.7

  - 修复重置会话 400 错误

- v3.0.6

  - 修复指令残留

- v3.0.5

  - 修复 400 错误
  - 优化代码结构

- v3.0.4

  - 新增删除人格

- v3.0.3

  - 更换切换人格的方式
  - 优化代码结构

- v3.0.2

  - 修复会话过长导致的 400 报错
  - 新增过滤器
  - 新增引用模式开关

- v3.0.1

  - 修复会话过长导致的 400 报错

- v3.0.0

  - 修复私聊接收消息不完整
  - 修复切换人格识别
  - 添加预设人格数量
  - 添加明日香、艾莉希雅等人格

- v2.0.0

  - 兼容配置文件，修复删除 python 后端导致炸掉 koishi 的 bug

- v1.6.0

  - 新增翻译服务

- v1.5.9

  - 新增引用回复

- v1.5.8

  - 修复无法识别空格的 bug
  - 增加了 GPT 生成图片

- v1.5.7

  - 增加了切换模式的局内开关

- v1.5.6 - 移除了 python 后端，采用 js
  添加反向代理选项

- v1.5.5

  - 更换反代地址

- v1.5.1

  - 将人格管理做成了子命令

- v1.5.1

  - 修复 js 推荐模式思考中，优化回话管理，限制 10 条回话
  - .clear 权限由 2 下调为 1
  - 修复图片模式显示异常
  - 移除图片模式背景图，加速回复

- v1.4.9

  - 删除里 lib 里面的图片
  - dvc.clear 权限由 5 下调为 2

- v1.4.8

  - 修复超级用户无法接收消息的问题。

- v1.4.7

  - 修复无法发送空格
  - 修复调用限制无效
  - 优化图片模式，加快了回复速度

- v1.4.6
  - 新增艾特触发，私聊触发
  - 新增模式选择菜单
- v1.4.5
  - 新增语音模式，仅支持原神语音（抄袭自 genshin-voice
  - 新增输出模式切换指令
- v1.4.4
  - 优化审核的逻辑，加速审核
- v1.4.3
  - 修复未填写 AK 和 SK 情况下，不合规的 bug
- v1.4.2
  - 实现了 dvc 服务，其他插件可以使用以下服务
  - chat_with_gpt: 单次对话
  - get_credit: 查询余额
  - censor_request: 百度智能云审核服务
  ```
  import {} from 'koishi-plugin-davinci-003'
  ```
  ```
  ctx.command('call').action(async ({session})=>{
      const msg:Msg = {role:'user'，content:'你好，这是一次测试，你只需回复ok'}
      console.log(await ctx.dvc.get_credit(session))
      console.log(await ctx.dvc.chat_with_gpt([msg]))
      console.log(await ctx.dvc.censor_request('脏话测试'))
  })
  ```
- v1.4.1

  - 优化代码结构
  - 新增节俭模式

- v1.4.0

  - 修复 api_key 写死的致命错误

- v1.3.9

  - 后端移植到客户端
  - 无需自建后端了

- v1.3.8

  - 新增内容审查

- v1.3.7

  - 新增 gpt 生成图片（需要自建后端）
  - 新增人格管理 发送 “dvc 切换人格”即可

- v1.3.0

  - 新增 gpt3.5-turbo（需自建后端）

- v1.2.5
  - 更换 davinci-003 的流量，可以走 koishi 代理
