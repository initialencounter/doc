"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,y=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="wechaty",l={unversionedId:"DockerImages/wechaty",id:"DockerImages/wechaty",title:"wechaty",description:"\u51c6\u5907",source:"@site/docs/DockerImages/wechaty.md",sourceDirName:"DockerImages",slug:"/DockerImages/wechaty",permalink:"/doc/docs/DockerImages/wechaty",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DockerImages/wechaty.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"text-gen-webui",permalink:"/doc/docs/DockerImages/text-gen-webui"},next:{title:"\u76ee\u5f55",permalink:"/doc/docs/tutorial/SUMMARY"}},c={},u=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"\u8054\u7cfb\u6211",id:"\u8054\u7cfb\u6211",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wechaty"},"wechaty"),(0,a.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"openai apikey"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u901a\u8fc7\u5fae\u4fe1\u652f\u4ed8\u7684\u5fae\u4fe1\u8d26\u53f7\uff0c\uff08\u4e0d\u5f00\u901a\u5fae\u4fe1\u652f\u4ed8\u53ef\u80fd\u4f1a\u767b\u4e0d\u4e0a\uff09")),(0,a.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.\u542f\u52a8\u5bb9\u5668",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'docker run -p 5141:5140 initialencounter/koishi-wechaty:latest bash -c "cd /koimux_bot && yarn start"')))),(0,a.kt)("li",{parentName:"ul"},"2.\u626b\u7801",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker logs \u5bb9\u5668ID"),"\u6216\u8005\u76f4\u63a5\u767b\u5f55koishi\u63a7\u5236\u53f0"))),(0,a.kt)("li",{parentName:"ul"},"3.\u914d\u7f6edavinci-003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165key\uff0c\u542f\u7528\u63d2\u4ef6")))),(0,a.kt)("h2",{id:"\u8054\u7cfb\u6211"},"\u8054\u7cfb\u6211"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"qq\u7fa4\uff1a399899914"),(0,a.kt)("li",{parentName:"ul"},"\u54d4\u54e9\u54d4\u54e9\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://space.bilibili.com/225995995"},"https://space.bilibili.com/225995995"))))}m.isMDXComponent=!0}}]);