"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7066],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var i=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=i.createContext({}),p=function(t){var e=i.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return i.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(k,l(l({ref:e},c),{},{components:a})):i.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[m]="string"==typeof t?t:r,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(7462),r=(a(7294),a(3905));const n={},l="stable diffusion API",s={unversionedId:"KoishiPlugins/AI/sd-taylor",id:"KoishiPlugins/AI/sd-taylor",title:"stable diffusion API",description:"npm",source:"@site/docs/KoishiPlugins/AI/sd-taylor.md",sourceDirName:"KoishiPlugins/AI",slug:"/KoishiPlugins/AI/sd-taylor",permalink:"/doc/docs/KoishiPlugins/AI/sd-taylor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/AI/sd-taylor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u989c\u503c\u8bc4\u5206",permalink:"/doc/docs/KoishiPlugins/AI/facercg"},next:{title:"\u7fa4\u4e3b\u63d2\u4ef6",permalink:"/doc/docs/KoishiPlugins/Behavior/specialtile"}},o={},p=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u5df2\u7ecf\u505a\u597d\u4e86\u7684",id:"\u5df2\u7ecf\u505a\u597d\u4e86\u7684",level:3},{value:"\u6307\u4ee4\u5982\u4e0b\uff1a",id:"\u6307\u4ee4\u5982\u4e0b",level:3},{value:"\u5c0f\u5999\u62db",id:"\u5c0f\u5999\u62db",level:2},{value:"\u611f\u8c22",id:"\u611f\u8c22",level:2},{value:"txt2img \u6587\u5b57\u7ed8\u56fe",id:"txt2img-\u6587\u5b57\u7ed8\u56fe",level:2},{value:"img2img \u4ee5\u56fe\u7ed8\u56fe",id:"img2img-\u4ee5\u56fe\u7ed8\u56fe",level:2},{value:"interrogate \u8bc6\u56fe",id:"interrogate-\u8bc6\u56fe",level:2},{value:"extra-single-image \u8d85\u5206\u8fa8\u7387",id:"extra-single-image-\u8d85\u5206\u8fa8\u7387",level:2}],c={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stable-diffusion-api"},"stable diffusion API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koishi-plugin-sd-taylor"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/koishi-plugin-sd-taylor?style=flat-square",alt:"npm"}))),(0,r.kt)("p",null,"AI\u7ed8\u56fe\u63d2\u4ef6,\u652f\u6301controlnet,lora,AI-Tag\u589e\u5f3a"),(0,r.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("h3",{id:"\u5df2\u7ecf\u505a\u597d\u4e86\u7684"},"\u5df2\u7ecf\u505a\u597d\u4e86\u7684"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u5b57\u7ed8\u56fe"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u4ee5\u56fe\u7ed8\u56fe"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u56fe\u7247\u8d85\u5206\u8fa8\u7387"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u8bc6\u56fe"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u5207\u6362\u6a21\u578b"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Lora\u67e5\u770b"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Lora\u5feb\u6377\u8f93\u5165"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Lora\u9884\u89c8"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","controlnet")),(0,r.kt)("h3",{id:"\u6307\u4ee4\u5982\u4e0b"},"\u6307\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u7ed8\u56fe"),(0,r.kt)("td",{parentName:"tr",align:null},"tl \u63cf\u8ff0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u56fe\u7ed8\u56fe"),(0,r.kt)("td",{parentName:"tr",align:null},"tl.img \u539f\u56fe \u63cf\u8ff0\uff1f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8d85\u5206\u8fa8\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"tl.ext \u539f\u56fe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bc6\u56fe"),(0,r.kt)("td",{parentName:"tr",align:null},"tl.txt \u56fe\u7247")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u6a21\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"tl.switch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770bLora"),(0,r.kt)("td",{parentName:"tr",align:null},"tl.lora")))),(0,r.kt)("h2",{id:"\u5c0f\u5999\u62db"},"\u5c0f\u5999\u62db"),(0,r.kt)("p",null,"\u542f\u7528davinci-003\u53ef\u4ee5\u83b7\u5f97\u6700\u4f73\u7ed8\u56fe\u4f53\u9a8c"),(0,r.kt)("h2",{id:"\u611f\u8c22"},"\u611f\u8c22"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API"},"stabe_diffusion"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koishijs/novelai-bot"},"novelai-bot"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MirrorCY/rryth"},"MirrorCY-rryth")),(0,r.kt)("h2",{id:"txt2img-\u6587\u5b57\u7ed8\u56fe"},"txt2img \u6587\u5b57\u7ed8\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://c2cpicdw.qpic.cn/offpic_new/3118087750//3118087750-128802214-71B2F9EA6EE2CB7E69498F902059E572/0?term=3&is_origin=1",alt:"alt \u6587\u5b57\u8f6c\u56fe\u7247"})),(0,r.kt)("h2",{id:"img2img-\u4ee5\u56fe\u7ed8\u56fe"},"img2img \u4ee5\u56fe\u7ed8\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://c2cpicdw.qpic.cn/offpic_new/3118087750//3118087750-177231842-8B21789A92140E190FC9394094B1CEB9/0?term=3&is_origin=1",alt:"alt \u56fe\u7247\u8f6c\u56fe\u7247"})),(0,r.kt)("h2",{id:"interrogate-\u8bc6\u56fe"},"interrogate \u8bc6\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://c2cpicdw.qpic.cn/offpic_new/3118087750//3118087750-713324925-26882C0407D29DC9678681D2F965E364/0?term=3&is_origin=1",alt:"alt \u8bc6\u56fe"})),(0,r.kt)("h2",{id:"extra-single-image-\u8d85\u5206\u8fa8\u7387"},"extra-single-image \u8d85\u5206\u8fa8\u7387"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://c2cpicdw.qpic.cn/offpic_new/3118087750//3118087750-840623233-B28DB7E9250844D3F37BC82324D900AE/0?term=3&is_origin=0",alt:"alt \u8d85\u5206\u8fa8\u7387"})))}u.isMDXComponent=!0}}]);