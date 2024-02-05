"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6424],{5788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(5072),a=(n(1504),n(5788));const i={},o="Stt \u670d\u52a1",s={unversionedId:"KoishiPlugins/Tool/sst",id:"KoishiPlugins/Tool/sst",title:"Stt \u670d\u52a1",description:"npm",source:"@site/docs/KoishiPlugins/Tool/sst.md",sourceDirName:"KoishiPlugins/Tool",slug:"/KoishiPlugins/Tool/sst",permalink:"/docs/KoishiPlugins/Tool/sst",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/Tool/sst.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u98de\u6868\u8bed\u97f3\u670d\u52a1",permalink:"/docs/KoishiPlugins/Tool/paddlespeech"},next:{title:"\u817e\u8baf stt",permalink:"/docs/KoishiPlugins/Tool/tc-sst"}},l={},p=[{value:"\u5b9e\u73b0\u8be5\u670d\u52a1",id:"\u5b9e\u73b0\u8be5\u670d\u52a1",level:2},{value:"\u8c03\u7528\u670d\u52a1",id:"\u8c03\u7528\u670d\u52a1",level:2},{value:"\u793a\u4f8b\u63d2\u4ef6",id:"\u793a\u4f8b\u63d2\u4ef6",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"stt-\u670d\u52a1"},"Stt \u670d\u52a1"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@initencounter/sst"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@initencounter/sst?style=flat-square",alt:"npm"}))),(0,a.yg)("p",null,"Sst\u8bed\u97f3\u8bc6\u522b\u670d\u52a1"),(0,a.yg)("h2",{id:"\u5b9e\u73b0\u8be5\u670d\u52a1"},"\u5b9e\u73b0\u8be5\u670d\u52a1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"imort { Context, Session, h } form 'koishi'\nimport Sst from '@initencounter/sst'\nclass Xxx extends Sst {\n    constructor(ctx: Context) {\n    super(ctx)\n    }\n    async audio2text(session: Session): Promise<string> { }\n}\n")),(0,a.yg)("h2",{id:"\u8c03\u7528\u670d\u52a1"},"\u8c03\u7528\u670d\u52a1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"imort { Context, Session } form 'koishi'\nimport { } from '@initencounter/sst'\nctx.sst.audio2text(session: Session)\n")),(0,a.yg)("h2",{id:"\u793a\u4f8b\u63d2\u4ef6"},"\u793a\u4f8b\u63d2\u4ef6"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"NPM"),(0,a.yg)("th",{parentName:"tr",align:null},"REPO"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.npmjs.com/package/koishi-plugin-baidu-sst"},"Baidu-SST")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://github.com/initialencounter/mykoishi/tree/master/baidu-sst"},"\u767e\u5ea6\u667a\u80fd\u4e91\u8bed\u97f3\u8bc6\u522b"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.npmjs.com/package/koishi-plugin-tc-sst"},"TC-SST")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://github.com/initialencounter/mykoishi/tree/master/tc-sst"},"\u817e\u8baf\u4e91\u8bed\u97f3\u8bc6\u522b"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.npmjs.com/package/koishi-plugin-whisper-asr"},"Whisper-ASR")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://github.com/initialencounter/mykoishi/tree/master/whisper-asr"},"OpenAI\u8bed\u97f3\u8bc6\u522b"))))))}m.isMDXComponent=!0}}]);