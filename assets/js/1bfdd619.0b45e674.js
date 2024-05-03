"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[884],{1582:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=s(4848),t=s(8453);const r={title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",authors:"initencunter",tags:["docs","\u6587\u6863"]},i=void 0,c={id:"tutorial/mysql/mysql",title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",description:"mysql",source:"@site/docs/tutorial/mysql/mysql.md",sourceDirName:"tutorial/mysql",slug:"/tutorial/mysql/",permalink:"/docs/tutorial/mysql/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/mysql/mysql.md",tags:[{label:"docs",permalink:"/docs/tags/docs"},{label:"\u6587\u6863",permalink:"/docs/tags/\u6587\u6863"}],version:"current",frontMatter:{title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",authors:"initencunter",tags:["docs","\u6587\u6863"]},sidebar:"tutorialSidebar",previous:{title:"TensorRT-LLM \u90e8\u7f72 ChatGLM3",permalink:"/docs/tutorial/TensorRT-llm/TensorRT-llm-ChatGLM3"},next:{title:"ZeroTermux \u5165\u5751\u6307\u5357",permalink:"/docs/tutorial/termux/ZeroTermux"}},d={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"docker\u90e8\u7f72",id:"docker\u90e8\u7f72",level:2},{value:"\u5b89\u88c5docker\uff0c\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\uff0c\u95eechatgpt\u4e5f\u53ef\u4ee5",id:"\u5b89\u88c5docker\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\u95eechatgpt\u4e5f\u53ef\u4ee5",level:3},{value:"\u62c9\u53d6docker\u955c\u50cf",id:"\u62c9\u53d6docker\u955c\u50cf",level:3},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8",id:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8",level:4},{value:"\u767b\u5f55mysql",id:"\u767b\u5f55mysql",level:4},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93-1",level:4},{value:"\u914d\u7f6edatabase-mysql",id:"\u914d\u7f6edatabase-mysql",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"mysql"})}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsx)(n.p,{children:"\u867d\u7136\u4e0d\u5efa\u8bae\u5c06\u9700\u8981\u6301\u4e45\u5316\u7684\u6570\u636e\u4fdd\u5b58\u5728\u5bb9\u5668\u4e2d\uff0c\u4f46\u662f\u81ea\u5df1\u5e73\u65f6\u505a\u4e2a\u5c0f\u9879\u76ee\u73a9\u73a9\u8fd8\u662f\u6ca1\u4ec0\u4e48\u95ee\u9898\u7684\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"docker\u90e8\u7f72",children:"docker\u90e8\u7f72"}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u8003\u81ea",(0,l.jsx)(n.a,{href:"https://www.cnblogs.com/hhsk/p/16746208.html",children:"Hustocking"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5b89\u88c5docker\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\u95eechatgpt\u4e5f\u53ef\u4ee5",children:"\u5b89\u88c5docker\uff0c\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\uff0c\u95eechatgpt\u4e5f\u53ef\u4ee5"}),"\n",(0,l.jsx)(n.h3,{id:"\u62c9\u53d6docker\u955c\u50cf",children:"\u62c9\u53d6docker\u955c\u50cf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\ndocker pull mysql\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u542f\u52a8\u5bb9\u5668",children:"\u542f\u52a8\u5bb9\u5668"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\ndocker run -d --name mysql01 -p 3306:3306 -v /home/hsk/box_container/mysql01/conf.d/:/etc/mysql/conf.d -v /home/hsk/box_container/mysql01/mysql/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u6570\u636e\u5e93",children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.h4,{id:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8",children:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\ndocker exec -it mysql01 /bin/bash\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u767b\u5f55mysql",children:"\u767b\u5f55mysql"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\nmysql -hlocalhost -uroot -p123456\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u521b\u5efa\u6570\u636e\u5e93-1",children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\ncreate database koishi;\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6edatabase-mysql",children:"\u914d\u7f6edatabase-mysql"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u505c\u6b62\u5176\u4ed6\u63d0\u4f9b\u6570\u636e\u5e93\u670d\u52a1\u7684\u63d2\u4ef6"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"host\u586b\u5199\u4e91\u670d\u52a1\u5668\u7684\u516c\u7f51ip"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"password\u586b\u5199\u4e3a\u6211\u4eec\u542f\u52a8\u5bb9\u5668\u65f6\u8bbe\u7f6e\u7684\u5bc6\u7801123456"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u542f\u7528database-mysql\u63d2\u4ef6"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var l=s(6540);const t={},r=l.createContext(t);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);