# 瓷砖

[![npm](https://img.shields.io/npm/v/koishi-plugin-gh-tile?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-gh-tile)

提醒你该贴瓷砖了

## 注意事项

- 该插件默认使用 [initialencounter](https://github.com/initialencounter) 的 SCF 服务，如果觉得速度慢可以自行[搭建 SCF 服务](https://github.com/initialencounter/node-server/blob/main/proxy-axios/src/app.ts)
- 可以在插件的模块目录下将 0.jpg 更换为你喜欢的图片

## 更新日志

    - v2.4.4
        chore: use SCF
    - v2.4.3
        fix: get tile failed cause headers
    - v2.4.2
        fix: send image failed
    - v2.4.1
        fix: \<!DOCTYPE "... is not valid JSON
    - v2.3.3
        更换默认的转发服务
        使用 cron 服务
    - v2.3.2 修复时区原因导致无法获取瓷砖
