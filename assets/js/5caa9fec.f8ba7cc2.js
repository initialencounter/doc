"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3396],{5788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>m});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(5072),o=(r(1504),r(5788));const a={},c="Audiocraft",i={unversionedId:"DockerImages/Audiocraft",id:"DockerImages/Audiocraft",title:"Audiocraft",description:"Audiocraft\u662f\u4e00\u4e2a\u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684\u97f3\u9891\u5904\u7406\u548c\u751f\u6210\u5e93\u3002\u5b83\u5177\u6709\u6700\u5148\u8fdb\u7684\u7f16\u7801\u5668\u97f3\u9891\u538b\u7f29\u5668/\u6807\u8bb0\u5668\uff0c\u4ee5\u53caMusicGen\uff0c\u4e00\u4e2a\u7b80\u5355\u800c\u53ef\u63a7\u7684\u97f3\u4e50\u751f\u6210LM\uff0c\u5177\u6709\u6587\u672c\u548c\u65cb\u5f8b\u8c03\u8282\u3002",source:"@site/docs/DockerImages/Audiocraft.md",sourceDirName:"DockerImages",slug:"/DockerImages/Audiocraft",permalink:"/docs/DockerImages/Audiocraft",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DockerImages/Audiocraft.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker \u955c\u50cf\u7684\u6587\u6863",permalink:"/docs/DockerImages/"},next:{title:"ChatRWKV",permalink:"/docs/DockerImages/ChatRWKV"}},u={},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"audiocraft"},"Audiocraft"),(0,o.yg)("p",null,"Audiocraft\u662f\u4e00\u4e2a\u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684\u97f3\u9891\u5904\u7406\u548c\u751f\u6210\u5e93\u3002\u5b83\u5177\u6709\u6700\u5148\u8fdb\u7684\u7f16\u7801\u5668\u97f3\u9891\u538b\u7f29\u5668/\u6807\u8bb0\u5668\uff0c\u4ee5\u53caMusicGen\uff0c\u4e00\u4e2a\u7b80\u5355\u800c\u53ef\u63a7\u7684\u97f3\u4e50\u751f\u6210LM\uff0c\u5177\u6709\u6587\u672c\u548c\u65cb\u5f8b\u8c03\u8282\u3002"),(0,o.yg)("p",null,"Audiocraft is a library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning."),(0,o.yg)("h1",{id:"usage"},"usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker run -it -d -p 7862:7860 --gpus all initialencounter/audiocraft:latest bash -c "bash .start.sh"\n')))}d.isMDXComponent=!0}}]);