"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="whisper-asr",o={unversionedId:"KoishiPlugins/Tool/whisper-asr",id:"KoishiPlugins/Tool/whisper-asr",title:"whisper-asr",description:"npm",source:"@site/docs/KoishiPlugins/Tool/whisper-asr.md",sourceDirName:"KoishiPlugins/Tool",slug:"/KoishiPlugins/Tool/whisper-asr",permalink:"/docs/KoishiPlugins/Tool/whisper-asr",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/Tool/whisper-asr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TTS \u670d\u52a1",permalink:"/docs/KoishiPlugins/Tool/vits"},next:{title:"\u9b54\u65b9",permalink:"/docs/NonebotPlugins/cube"}},s={},p=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u95ee\u9898\u53cd\u9988\u7fa4:",id:"\u95ee\u9898\u53cd\u9988\u7fa4",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u611f\u8c22",id:"\u611f\u8c22",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whisper-asr"},"whisper-asr"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koishi-plugin-whisper-asr"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/koishi-plugin-whisper-asr?style=flat-square",alt:"npm"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ahmetoner/whisper-asr-webservice"},"openai whisper-asr")," \u8bed\u97f3\u8bc6\u522b\u670d\u52a1,\u652f\u6301\u4e00\u767e\u591a\u79cd\u8bed\u8a00+\u7ffb\u8bd1"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,"\u81ea\u5efa\u540e\u7aef\u6559\u7a0b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ahmetoner/whisper-asr-webservice"},"whisper-asr-webservice")," "),(0,a.kt)("p",null,"\u5982\u9700\u63a5\u5165\u5fae\u4fe1\uff0c\u5219\u8981\u4f7f\u7528\u7279\u5b9a\u7248\u672c\u7684wechaty\u9002\u914d\u5668,\u5e76\u4e14\u4fee\u6539\u540e\u7aef\u6e90\u7801\uff0c\u5c06app/webservice.py\u66ff\u6362\u6210\u672c\u9879\u76ee\u63d0\u4f9b\u7684webservice.py"),(0,a.kt)("p",null,"\u63d2\u4ef6\u4ed3\u5e93",(0,a.kt)("a",{parentName:"p",href:"https://github.com/initialencounter/koishi-plugin-whisper-asr"},"\u63d2\u4ef6\u4ed3\u5e93")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u53d1\u9001\u8bed\u97f3\u5373\u53ef\u8f6c\u5316\u6216\u7ffb\u8bd1\u4e3a\u6587\u672c"),(0,a.kt)("li",{parentName:"ul"},"asr \u8981\u8f6c\u5316/\u6216\u7ffb\u8bd1\u7684\u8bed\u8a00url",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lang: \u8bed\u8a00"),(0,a.kt)("li",{parentName:"ul"},"task: \u662f\u5426\u5207\u6362\u4e3atranslate"),(0,a.kt)("li",{parentName:"ul"},"method: \u662f\u5426\u5207\u6362\u4e3afaster-whisper")))),(0,a.kt)("h2",{id:"\u95ee\u9898\u53cd\u9988\u7fa4"},"\u95ee\u9898\u53cd\u9988\u7fa4:"),(0,a.kt)("p",null,"399899914"),(0,a.kt)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1.0.2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u4f20webservice.py"))),(0,a.kt)("li",{parentName:"ul"},"v1.0.0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u5fae\u4fe1\u8bed\u97f3\u6d88\u606f")))),(0,a.kt)("h2",{id:"\u611f\u8c22"},"\u611f\u8c22"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ahmetoner"},"ahmetoner"))))}m.isMDXComponent=!0}}]);