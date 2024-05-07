"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8512],{2891:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(4848),s=n(8453);const r={},o="@initencounter/koishi-plugin-jimp",l={id:"KoishiPlugins/Extension/jimp/readme",title:"@initencounter/koishi-plugin-jimp",description:"npm",source:"@site/docs/KoishiPlugins/Extension/jimp/readme.md",sourceDirName:"KoishiPlugins/Extension/jimp",slug:"/KoishiPlugins/Extension/jimp/",permalink:"/docs/KoishiPlugins/Extension/jimp/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/Extension/jimp/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"koishi-plugin-specialtile",permalink:"/docs/KoishiPlugins/Behavior/specialtile/"},next:{title:"@initencounter/jimp",permalink:"/docs/KoishiPlugins/Extension/jimp-abstract/"}},c={},p=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"1. \u5bfc\u5165\u7c7b\u578b",id:"1-\u5bfc\u5165\u7c7b\u578b",level:3},{value:"2. \u4f7f\u7528 Jimp \u8d34\u56fe",id:"2-\u4f7f\u7528-jimp-\u8d34\u56fe",level:3},{value:"\u4f7f\u7528\u4e86\u6b64\u670d\u52a1\u7684\u63d2\u4ef6:",id:"\u4f7f\u7528\u4e86\u6b64\u670d\u52a1\u7684\u63d2\u4ef6",level:2}];function m(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"initencounterkoishi-plugin-jimp",children:"@initencounter/koishi-plugin-jimp"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@initencounter/koishi-plugin-jimp",children:(0,t.jsx)(e.img,{src:"https://img.shields.io/npm/v/@initencounter/koishi-plugin-jimp?style=flat-square",alt:"npm"})})}),"\n",(0,t.jsx)(e.p,{children:"jimp service"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.h3,{id:"1-\u5bfc\u5165\u7c7b\u578b",children:"1. \u5bfc\u5165\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"import Jimp from '@initencounter/jimp';\n"})}),"\n",(0,t.jsx)(e.h3,{id:"2-\u4f7f\u7528-jimp-\u8d34\u56fe",children:"2. \u4f7f\u7528 Jimp \u8d34\u56fe"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"// \u5b9e\u4f8b\u5316 Jimp\nlet img1 = ctx.jimp.newJimp(x, y)\n\n// \u52a0\u8f7d\u672c\u5730\u56fe\u7247\nlet img2 = ctx.jimp.read('img2.png')\n\n// \u5728 img \u7684\uff08x, y\uff09\u4f4d\u7f6e\u5904\u8d34\u4e0a\u56fe\u7247\nimg1.blit(img2, px, py)\n\n// \u83b7\u53d6 img1 \u7684 PNG \u683c\u5f0f\u7684 Buffer \u5b57\u7b26\u4e32\nlet img1_buffer = bigImage.getBufferAsync(ctx.jimp.MIME_PNG)\n\n// \u53d1\u9001\u56fe\u7247\nsession.send(h.image(img1_buffer, 'image/png'))\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u4e86\u6b64\u670d\u52a1\u7684\u63d2\u4ef6",children:"\u4f7f\u7528\u4e86\u6b64\u670d\u52a1\u7684\u63d2\u4ef6:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/initialencounter/mykoishi/tree/master/Plugins/Recreation/minesweeper-ending#readme",children:"koishi-plugin-minesweeper-ending"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/initialencounter/mykoishi/tree/master/Plugins/Recreation/puzzle#readme.md",children:"koishi-plugin-puzzle"})}),"\n"]})]})}function u(i={}){const{wrapper:e}={...(0,s.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(m,{...i})}):m(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>o,x:()=>l});var t=n(6540);const s={},r=t.createContext(s);function o(i){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function l(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:o(i.components),t.createElement(r.Provider,{value:e},i.children)}}}]);