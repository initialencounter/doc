"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2497],{2265:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=r(4848),i=r(8453);const s={},t="\u5728\u624b\u673a\u4e0a\u90e8\u7f72 NapCat",a={id:"tutorial/termux/NapCat-Termux",title:"\u5728\u624b\u673a\u4e0a\u90e8\u7f72 NapCat",description:"\u672c\u9879\u76ee\u63d0\u4f9b\u4e86\u5728\u5b89\u5353\u624b\u673a\u4e0a\u5b89\u88c5 NapCat \u7684\u65b9\u6cd5",source:"@site/docs/tutorial/termux/NapCat-Termux.md",sourceDirName:"tutorial/termux",slug:"/tutorial/termux/NapCat-Termux",permalink:"/docs/tutorial/termux/NapCat-Termux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/termux/NapCat-Termux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",permalink:"/docs/tutorial/mysql/"},next:{title:"ZeroTermux \u5165\u5751\u6307\u5357",permalink:"/docs/tutorial/termux/ZeroTermux"}},o={},c=[{value:"1. \u5b89\u88c5 ZeroTermux",id:"1-\u5b89\u88c5-zerotermux",level:2},{value:"2. \u5b89\u88c5 NapCat",id:"2-\u5b89\u88c5-napcat",level:2},{value:"2.1 \u4f7f\u7528\u6062\u590d\u5305\u5b89\u88c5",id:"21-\u4f7f\u7528\u6062\u590d\u5305\u5b89\u88c5",level:3},{value:"2.1.1 \u4e0b\u8f7d\u6062\u590d\u5305",id:"211-\u4e0b\u8f7d\u6062\u590d\u5305",level:4},{value:"2.1.2 \u6062\u590d\u5bb9\u5668",id:"212-\u6062\u590d\u5bb9\u5668",level:4},{value:"2.2 \u4f7f\u7528\u4e00\u952e\u811a\u672c",id:"22-\u4f7f\u7528\u4e00\u952e\u811a\u672c",level:3},{value:"3. \u542f\u52a8",id:"3-\u542f\u52a8",level:3},{value:"4. \u4fee\u6539 NapCat \u914d\u7f6e",id:"4-\u4fee\u6539-napcat-\u914d\u7f6e",level:3},{value:"\u76f4\u63a5\u4fee\u6539",id:"\u76f4\u63a5\u4fee\u6539",level:4},{value:"WebUI \u4fee\u6539",id:"webui-\u4fee\u6539",level:4},{value:"\u53c2\u8003\u4e0e\u57fa\u7840",id:"\u53c2\u8003\u4e0e\u57fa\u7840",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u5728\u624b\u673a\u4e0a\u90e8\u7f72-napcat",children:"\u5728\u624b\u673a\u4e0a\u90e8\u7f72 NapCat"}),"\n",(0,l.jsxs)(n.p,{children:["\u672c\u9879\u76ee\u63d0\u4f9b\u4e86\u5728\u5b89\u5353\u624b\u673a\u4e0a\u5b89\u88c5 ",(0,l.jsx)(n.a,{href:"https://github.com/NapNeko/NapCatQQ",children:"NapCat"})," \u7684\u65b9\u6cd5\n\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"https://github.com/hanxinhao000/ZeroTermux",children:"ZeroTermux"})," + bookworm + linuxqq \u5236\u4f5c"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e Linux QQ"}),"\n",(0,l.jsx)(n.li,{children:"\u8fd0\u884c\u5185\u5b58\u5927\u4e8e 100M"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u6301\u4e45\u5316 QQ \u767b\u5f55\u72b6\u6001\u548c\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"\u76ee\u5f55",children:"\u76ee\u5f55\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b89\u88c5 Termux"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u5b89\u88c5 NapCat"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"2.1 \u65b9\u6cd5 1. \u4f7f\u7528\u6062\u590d\u5305\u5b89\u88c5"}),"\n",(0,l.jsx)(n.li,{children:"2.2 \u65b9\u6cd5 2. \u4f7f\u7528\u4e00\u952e\u811a\u672c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u542f\u52a8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"1-\u5b89\u88c5-zerotermux",children:"1. \u5b89\u88c5 ZeroTermux"}),"\n",(0,l.jsxs)(n.p,{children:["\u524d\u5f80",(0,l.jsx)(n.a,{href:"https://github.com/hanxinhao000/ZeroTermux/releases",children:"hanxinhao000/ZeroTermux"}),"\u4e0b\u8f7d ZeroTermux \u5b89\u88c5\u5305\u5e76\u5b89\u88c5"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6ce8\u610f\u4e8b\u9879\uff1a\n\u76f4\u63a5\u4ece GitHub \u4e0b\u8f7d ZeroTermux \u901f\u5ea6\u53ef\u80fd\u4f1a\u5f88\u6162\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"https://ghproxy.com",children:"ghproxy.com"})," \u4ee3\u7406"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2-\u5b89\u88c5-napcat",children:"2. \u5b89\u88c5 NapCat"}),"\n",(0,l.jsx)(n.h3,{id:"21-\u4f7f\u7528\u6062\u590d\u5305\u5b89\u88c5",children:"2.1 \u4f7f\u7528\u6062\u590d\u5305\u5b89\u88c5"}),"\n",(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"\u70b9\u51fb\u5c55\u5f00\u5185\u5bb9\uff01"}),(0,l.jsx)(n.h4,{id:"211-\u4e0b\u8f7d\u6062\u590d\u5305",children:"2.1.1 \u4e0b\u8f7d\u6062\u590d\u5305"}),(0,l.jsxs)(n.p,{children:["\u524d\u5f80 ",(0,l.jsx)(n.a,{href:"https://github.com/NapNeko/Termux/releases",children:"Github releases"})," \u4e0b\u8f7d ZeroTermux \u6062\u590d\u5305, \u5e76\u5c06\u6062\u590d\u5305\u653e\u5728 \u624b\u673a\u7684 ",(0,l.jsx)(n.code,{children:"\u5185\u90e8\u5b58\u50a8/xinhao/data/"})," \u76ee\u5f55"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6ce8\u610f\u4e8b\u9879\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6062\u590d\u5305\u8981\u653e\u5728 ",(0,l.jsx)(n.code,{children:"\u5185\u90e8\u5b58\u50a8/xinhao/data/"}),"\u76ee\u5f55\u6216\u8005 ",(0,l.jsx)(n.code,{children:"/sdcard/xinhao/data"}),"\u76ee\u5f55\uff0c\u5426\u5219\u5728\u6062\u590d\u5bb9\u5668\u7684\u65f6\u5019\u65e0\u6cd5\u627e\u5230\u6062\u590d\u5305"]}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.h4,{id:"212-\u6062\u590d\u5bb9\u5668",children:"2.1.2 \u6062\u590d\u5bb9\u5668"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6253\u5f00 ZeroTermux"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6062\u590d\n\u8fdb\u5165 ZeroTermux \u70b9\u51fb\u97f3\u91cf\u4e0a\u952e \u547c\u51fa\u83dc\u5355\u680f \u70b9\u51fb\u83dc\u5355\u680f\u7684 ",(0,l.jsx)(n.code,{children:"\u5907\u4efd/\u6062\u590d"})," \u9009\u62e9\u4e0b\u8f7d\u7684\u6062\u590d\u5305\n\u8f93\u5165\u4e00\u4e2a\u5bb9\u5668\u540d\u5b57\u70b9\u51fb\u6062\u590d \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u7b49\u5f85\u51e0\u5206\u949f"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5207\u6362\u5bb9\u5668\n\u518d\u6b21\u70b9\u51fb\u97f3\u91cf\u4e0a\u952e\uff0c \u547c\u51fa\u83dc\u5355\u680f\uff0c\u70b9\u51fb\u83dc\u5355\u680f\u7684 ",(0,l.jsx)(n.code,{children:"\u5bb9\u5668\u5207\u6362"})," \u9009\u62e9\u521a\u624d\u521b\u5efa\u7684\u5bb9\u5668 \u8be2\u95ee\u4f60\u662f\u5426\u9700\u8981\u91cd\u542f\u65f6\uff0c \u9009\u62e9\u7acb\u5373\u91cd\u542f\uff0c\u63a5\u4e0b\u4f60\u5c06\u8fdb\u5165\u542f\u52a8\u754c\u9762"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\u4e8b\u9879\uff1a - \u5982\u679c\u97f3\u91cf\u4e0a\u952e\u65e0\u6cd5\u547c\u51fa\u83dc\u5355\uff0c\u8bf4\u660e\u4f60\u7684 ZeroTermux \u7248\u672c\u6bd4\u8f83\u65e7\uff0c\u53ef\u4ee5\u4f7f\u7528\u53f3\u6ed1\u5de6\u4fa7\u7684\u5c4f\u5e55\u8fb9\u7f18\u6765\u547c\u51fa\u83dc\u5355\u680f"}),"\n"]}),"\n"]})]}),"\n",(0,l.jsx)(n.h3,{id:"22-\u4f7f\u7528\u4e00\u952e\u811a\u672c",children:"2.2 \u4f7f\u7528\u4e00\u952e\u811a\u672c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'bash -c "$(curl -L https://github.com/NapNeko/NapCat-Termux/raw/main/onekey.sh)"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"3-\u542f\u52a8",children:"3. \u542f\u52a8"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u8fdb\u5165\u5bb9\u5668\n\u5224\u65ad\u65b9\u6cd5\u8f93\u5165 ",(0,l.jsx)(n.code,{children:"uname -a"})," \uff0c\u5982\u679c\u8f93\u51fa\u4fe1\u606f\u4ee5 ",(0,l.jsx)(n.code,{children:"Android"})," \u7ed3\u5c3e\uff0c\u5219\u672a\u8fdb\u5165 proot \u5bb9\u5668"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8\nbash bookworm-arm64.sh\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8\ncd NapCat.linux.arm64 && ./napcat.sh\n"})}),"\n",(0,l.jsx)(n.h3,{id:"4-\u4fee\u6539-napcat-\u914d\u7f6e",children:"4. \u4fee\u6539 NapCat \u914d\u7f6e"}),"\n",(0,l.jsx)(n.h4,{id:"\u76f4\u63a5\u4fee\u6539",children:"\u76f4\u63a5\u4fee\u6539"}),"\n",(0,l.jsxs)(n.p,{children:["\u6309\u97f3\u91cf\u4e0b\u952e\uff0c\u8c03\u51fa\u76ee\u5f55\u7ba1\u7406\n\u7f16\u8f91 ",(0,l.jsx)(n.code,{children:"~/home/bookworm-arm64/root/config/oonbot11_<QQ\u53f7>.json"})," \u6587\u4ef6"]}),"\n",(0,l.jsx)(n.h4,{id:"webui-\u4fee\u6539",children:"WebUI \u4fee\u6539"}),"\n",(0,l.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.jsx)(n.code,{children:"http://localhost:6099/webui/login.html"}),"\ntoken \u4f4d\u4e8e\u5bb9\u5668\u5185 /root/NapCat.linux.arm64/config/webui.json \u76ee\u5f55"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u4e0e\u57fa\u7840",children:"\u53c2\u8003\u4e0e\u57fa\u7840"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/NapNeko/NapCatQQ",children:"NapNeko/NapCatQQ"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://gitee.com/yudezeng/yutools",children:"yudezeng/yutools"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var l=r(6540);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);