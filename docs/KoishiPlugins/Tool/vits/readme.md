# vits抽象

[![npm](https://img.shields.io/npm/v/@initencounter/vits?style=flat-square)](https://www.npmjs.com/package/@initencounter/vits)

vits 语音合成服务

## 实现该服务

```typescript
imort { Context, h } form 'koishi'
import Vits from '@initencounter/vits'
class Xxx extends Vits {
    constructor(ctx: Context) {
    super(ctx)
    }
    async say(option: BaiduTts.Result): Promise<h> {}
}
```

## 调用服务

```typescript
import { } from '@initencounter/vits'
ctx.vits.say(text)
```

## 示例插件
| NPM | REPO |
| --- | --- |
| [Baidu-TTS](https://www.npmjs.com/package/koishi-plugin-baidu-tts) | [百度智能云语音合成](https://github.com/initialencounter/2022-12-24/tree/master/baidu-tts) |
| [Tencent-TTS](https://www.npmjs.com/package/koishi-plugin-tencent-tts) | [腾讯云语音合成](https://github.com/initialencounter/2022-12-24/tree/master/tencent-tts) |
| [Open-Vits](https://www.npmjs.com/package/koishi-plugin-open-vits) | [Vits语音合成](https://github.com/initialencounter/2022-12-24/tree/master/open-vits) |