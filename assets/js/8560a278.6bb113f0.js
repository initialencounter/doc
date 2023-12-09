"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},i="loader",o={unversionedId:"KoishiPlugins/Manager/loader",id:"KoishiPlugins/Manager/loader",title:"loader",description:"npm",source:"@site/docs/KoishiPlugins/Manager/loader.md",sourceDirName:"KoishiPlugins/Manager",slug:"/KoishiPlugins/Manager/loader",permalink:"/docs/KoishiPlugins/Manager/loader",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/Manager/loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"koishi-plugin-help-pro",permalink:"/docs/KoishiPlugins/Manager/help-pro"},next:{title:"\u67e5\u4e91\u9ed1",permalink:"/docs/KoishiPlugins/News/fraud-db"}},u={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loader"},"loader"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koishi-plugin-loader"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/koishi-plugin-loader?style=flat-square",alt:"npm"}))),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u6211\u4eec\u66f4\u65b0\u63d2\u4ef6\u7684\u65f6\u5019\u7ecf\u5e38\u9700\u8981\u70b9\u51fb\u5f88\u591a\u6b21\n\u800c\u4e14\u9700\u8981\u767b\u5f55\u5230\u63a7\u5236\u53f0\n\u56e0\u6b64\u6211\u5199\u4e86\u8fd9\u4e2a\u63d2\u4ef6\u66f4\u65b0\u5668\n\u53ea\u9700\u8981\u53d1\u9001loader\n\u5373\u53ef\u5c06package.json\u7684\u63d2\u4ef6\u7248\u672c\u540c\u6b65\u81f3\u63d2\u4ef6\u5e02\u573a\u7684\u6700\u65b0\u7248\u672c\n\u518d\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u5347\u7ea7\u63d2\u4ef6"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"backend: \u81ea\u52a8\u5907\u4efdkoishi.yml\u548cpackage.json",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5907\u4efd\u7684\u6587\u4ef6\u540d\u79f0\u4e3akoishi.yml.bak\u548cpackage.json.bak"))),(0,a.kt)("li",{parentName:"ul"},"auto_install: \u81ea\u52a8\u5b89\u88c5\u6240\u6709\u63d2\u4ef6\uff0c\u9ed8\u8ba4\u5173\u95ed\uff0c\u975e\u5e38\u5b89\u5168"),(0,a.kt)("li",{parentName:"ul"},"updata_list: \u66f4\u65b0\u65f6\u4f1a\u53d1\u9001\u66f4\u65b0\u6e05\u5355"),(0,a.kt)("li",{parentName:"ul"},"just_added: \u53ea\u66f4\u65b0\u5df2\u6dfb\u52a0\u7684\u63d2\u4ef6\uff08koishi.yml\u5185\u7684\u63d2\u4ef6\uff09,\u5f00\u53d1\u73af\u5883\u53ef\u4ee5\u5173\u95ed\u6b64\u9879\uff0c\u4ee5\u514d\u5f71\u54cd\u5f00\u53d1\u73af\u5883")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d1\u9001loader\u5373\u53ef\u66f4\u65b0package.json\u5185\u7684\u63d2\u4ef6\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u5f00\u542f\u81ea\u52a8\u5b89\u88c5\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5b89\u88c5\u547d\u4ee4 npm i|yarn"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528spawn\u7684exec\u547d\u4ee4 \u793a\u4f8b exec npm i")))),(0,a.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,a.kt)("p",null,"QQ\u7fa4\uff1a399899914"),(0,a.kt)("p",null,"\u5c0f\u4f19\u4f34\u5982\u679c\u9047\u5230\u95ee\u9898\u6216\u8005\u6709\u65b0\u7684\u60f3\u6cd5\uff0c\u6b22\u8fce\u5230",(0,a.kt)("a",{parentName:"p",href:"https://github.com/initialencounter/mykoishi/issues"},"\u8fd9\u91cc"),"\u53cd\u9988\u54e6~"),(0,a.kt)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1.0.0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u66f4\u65b0\u6570\u91cf\u9519\u8bef\u7684bug"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u66f4\u65b0\u6e05\u5355"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u5199js-ymal,\u5927\u5e45\u5ea6\u7f29\u5c0f\u63d2\u4ef6\u4f53\u79ef")))))}m.isMDXComponent=!0}}]);