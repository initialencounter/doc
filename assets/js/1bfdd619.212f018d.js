"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,k=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",authors:"initencunter",tags:["docs","\u6587\u6863"]},o=void 0,i={unversionedId:"tutorial/mysql/mysql",id:"tutorial/mysql/mysql",title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",description:"mysql",source:"@site/docs/tutorial/mysql/mysql.md",sourceDirName:"tutorial/mysql",slug:"/tutorial/mysql/",permalink:"/docs/tutorial/mysql/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/mysql/mysql.md",tags:[{label:"docs",permalink:"/docs/tags/docs"},{label:"\u6587\u6863",permalink:"/docs/tags/\u6587\u6863"}],version:"current",frontMatter:{title:"koishi\u5bf9\u63a5mysql \uff08docker\uff09",authors:"initencunter",tags:["docs","\u6587\u6863"]},sidebar:"tutorialSidebar",previous:{title:"Shamrock \u63a5\u5165 QQ",permalink:"/docs/tutorial/shamrock/"},next:{title:"ZeroTermux \u5165\u5751\u6307\u5357",permalink:"/docs/tutorial/termux/ZeroTermux"}},s={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"docker\u90e8\u7f72",id:"docker\u90e8\u7f72",level:2},{value:"\u5b89\u88c5docker\uff0c\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\uff0c\u95eechatgpt\u4e5f\u53ef\u4ee5",id:"\u5b89\u88c5docker\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\u95eechatgpt\u4e5f\u53ef\u4ee5",level:3},{value:"\u62c9\u53d6docker\u955c\u50cf",id:"\u62c9\u53d6docker\u955c\u50cf",level:3},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8",id:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8",level:4},{value:"\u767b\u5f55mysql",id:"\u767b\u5f55mysql",level:4},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93-1",level:4},{value:"\u914d\u7f6edatabase-mysql",id:"\u914d\u7f6edatabase-mysql",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"mysql"))),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u867d\u7136\u4e0d\u5efa\u8bae\u5c06\u9700\u8981\u6301\u4e45\u5316\u7684\u6570\u636e\u4fdd\u5b58\u5728\u5bb9\u5668\u4e2d\uff0c\u4f46\u662f\u81ea\u5df1\u5e73\u65f6\u505a\u4e2a\u5c0f\u9879\u76ee\u73a9\u73a9\u8fd8\u662f\u6ca1\u4ec0\u4e48\u95ee\u9898\u7684\u3002"),(0,a.kt)("h2",{id:"docker\u90e8\u7f72"},"docker\u90e8\u7f72"),(0,a.kt)("p",null,"\u53c2\u8003\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/hhsk/p/16746208.html"},"Hustocking")),(0,a.kt)("h3",{id:"\u5b89\u88c5docker\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\u95eechatgpt\u4e5f\u53ef\u4ee5"},"\u5b89\u88c5docker\uff0c\u7f51\u4e0a\u6709\u5f88\u591a\u6559\u7a0b\uff0c\u95eechatgpt\u4e5f\u53ef\u4ee5"),(0,a.kt)("h3",{id:"\u62c9\u53d6docker\u955c\u50cf"},"\u62c9\u53d6docker\u955c\u50cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ndocker pull mysql\n\n")),(0,a.kt)("h3",{id:"\u542f\u52a8\u5bb9\u5668"},"\u542f\u52a8\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ndocker run -d --name mysql01 -p 3306:3306 -v /home/hsk/box_container/mysql01/conf.d/:/etc/mysql/conf.d -v /home/hsk/box_container/mysql01/mysql/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql\n\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("h4",{id:"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8"},"\u8fdb\u5165\u5bb9\u5668\u5185\u90e8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ndocker exec -it mysql01 /bin/bash\n\n")),(0,a.kt)("h4",{id:"\u767b\u5f55mysql"},"\u767b\u5f55mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nmysql -hlocalhost -uroot -p123456\n\n")),(0,a.kt)("h4",{id:"\u521b\u5efa\u6570\u636e\u5e93-1"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ncreate database koishi;\n\n")),(0,a.kt)("h2",{id:"\u914d\u7f6edatabase-mysql"},"\u914d\u7f6edatabase-mysql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5176\u4ed6\u63d0\u4f9b\u6570\u636e\u5e93\u670d\u52a1\u7684\u63d2\u4ef6")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"host\u586b\u5199\u4e91\u670d\u52a1\u5668\u7684\u516c\u7f51ip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"password\u586b\u5199\u4e3a\u6211\u4eec\u542f\u52a8\u5bb9\u5668\u65f6\u8bbe\u7f6e\u7684\u5bc6\u7801123456"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528database-mysql\u63d2\u4ef6")))}d.isMDXComponent=!0}}]);