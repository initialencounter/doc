"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="text-gen-webui",c={unversionedId:"DockerImages/text-gen-webui",id:"DockerImages/text-gen-webui",title:"text-gen-webui",description:"usage",source:"@site/docs/DockerImages/text-gen-webui.md",sourceDirName:"DockerImages",slug:"/DockerImages/text-gen-webui",permalink:"/docs/DockerImages/text-gen-webui",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DockerImages/text-gen-webui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stable diffusion webui",permalink:"/docs/DockerImages/sd-webui"},next:{title:"wechaty",permalink:"/docs/DockerImages/wechaty"}},u={},s=[{value:"usage",id:"usage",level:2},{value:"start",id:"start",level:2}],l={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-gen-webui"},"text-gen-webui"),(0,a.kt)("h2",{id:"usage"},"usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --gpus all -d -it -p 7860:7860 initialencounter/text-gen-webui:latest\n")),(0,a.kt)("h2",{id:"start"},"start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'conda activate textgen; \ncd /text-generation-webui; \npython server.py --api --listen --listen-host "0.0.0.0" --listen-port 7860\n')))}m.isMDXComponent=!0}}]);