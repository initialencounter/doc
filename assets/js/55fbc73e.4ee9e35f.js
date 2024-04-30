"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3543],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(8168),i=(r(6540),r(5680));const o={},a="Koimux_bot",l={unversionedId:"tutorial/termux/koimux_bot",id:"tutorial/termux/koimux_bot",title:"Koimux_bot",description:"\u4f7f\u7528\u6559\u7a0b",source:"@site/docs/tutorial/termux/koimux_bot.md",sourceDirName:"tutorial/termux",slug:"/tutorial/termux/koimux_bot",permalink:"/docs/tutorial/termux/koimux_bot",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/termux/koimux_bot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Termux \u5b89\u88c5 debian",permalink:"/docs/tutorial/termux/install_debian"},next:{title:"\u5728\u624b\u673a\u4e0a\u90e8\u7f72 LLOneBot",permalink:"/docs/tutorial/termux/llonebot-termux"}},u={},s=[{value:"\u4f7f\u7528\u6559\u7a0b",id:"\u4f7f\u7528\u6559\u7a0b",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"\u4e00\u6761\u9f99\u811a\u672c",id:"\u4e00\u6761\u9f99\u811a\u672c",level:2},{value:"\u5b89\u88c5nodejs",id:"\u5b89\u88c5nodejs",level:3},{value:"\u5b89\u88c5koishi",id:"\u5b89\u88c5koishi",level:3},{value:"\u91cd\u88c5koishi",id:"\u91cd\u88c5koishi",level:3},{value:"\u542f\u52a8koishi",id:"\u542f\u52a8koishi",level:3},{value:"\u5b89\u88c5ffmpeg",id:"\u5b89\u88c5ffmpeg",level:3},{value:"\u5b89\u88c5chromium",id:"\u5b89\u88c5chromium",level:3}],c={toc:s},m="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"koimux_bot"},"Koimux_bot"),(0,i.yg)("h2",{id:"\u4f7f\u7528\u6559\u7a0b"},"\u4f7f\u7528\u6559\u7a0b"),(0,i.yg)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Android Linux\u5bb9\u5668--",(0,i.yg)("a",{parentName:"li",href:"https://od.ixcmstudio.cn/repository/main/ZeroTermux/"},"ZeroTermux"))),(0,i.yg)("h2",{id:"\u4e00\u6761\u9f99\u811a\u672c"},"\u4e00\u6761\u9f99\u811a\u672c"),(0,i.yg)("p",null,"\u5305\u542b\u5b89\u88c5 linux\u5bb9\u5668, nodejs\u3001koishi,\u542f\u52a8 koishi\n\u6ce8\u610f\uff01\uff01\uff01 \u8be5\u811a\u672c\u8fd0\u884c\u73af\u5883\u662ftermux"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'bash -c "$(curl -L https://gitee.com/initencunter/koimux_bot/raw/master/script/install_debian.sh)"\n')),(0,i.yg)("h1",{id:"\u4e0b\u6587\u6240\u6709\u547d\u4ee4\u53ea\u9002\u7528\u4e8e\u5728-proot-\u5bb9\u5668\u4e2d\u8fd0\u884c"},"\u4e0b\u6587\u6240\u6709\u547d\u4ee4\u53ea\u9002\u7528\u4e8e\u5728 proot \u5bb9\u5668\u4e2d\u8fd0\u884c"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/tutorial/termux/install_debian"},"\u5982\u4f55\u5b89\u88c5\u5e76\u8fdb\u5165 proot \u5bb9\u5668")),(0,i.yg)("h3",{id:"\u5b89\u88c5nodejs"},"\u5b89\u88c5nodejs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl -L https://gitee.com/initencunter/koimux_bot/raw/master/script/install_nodejs.sh)"\n')),(0,i.yg)("h3",{id:"\u5b89\u88c5koishi"},"\u5b89\u88c5koishi"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl -L https://gitee.com/initencunter/koimux_bot/raw/master/script/install_koishi.sh)"\n')),(0,i.yg)("h3",{id:"\u91cd\u88c5koishi"},"\u91cd\u88c5koishi"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl -L https://gitee.com/initencunter/koimux_bot/raw/master/script/re_install_koishi.sh)"\n')),(0,i.yg)("h3",{id:"\u542f\u52a8koishi"},"\u542f\u52a8koishi"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl -L https://gitee.com/initencunter/koimux_bot/raw/master/script/start_koishi.sh)"\n')),(0,i.yg)("h1",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,i.yg)("h3",{id:"\u5b89\u88c5ffmpeg"},"\u5b89\u88c5ffmpeg"),(0,i.yg)("p",null,"\u53d1\u9001\u8bed\u8a00\u5219\u9700\u8981\u5b89\u88c5\u8be5\u8f6f\u4ef6"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install ffmpeg -y\n")),(0,i.yg)("h3",{id:"\u5b89\u88c5chromium"},"\u5b89\u88c5chromium"),(0,i.yg)("p",null,"\u90e8\u5206\u63d2\u4ef6\u8981\u4f7f\u7528chromium\u6e32\u67d3\u56fe\u7247"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"apt update\napt install chromium -y\n")))}p.isMDXComponent=!0}}]);