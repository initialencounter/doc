"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8415],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),y=r,d=s["".concat(i,".").concat(y)]||s[y]||m[y]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const l={},o="PaddleSpeech",p={unversionedId:"DockerImages/paddlespeech",id:"DockerImages/paddlespeech",title:"PaddleSpeech",description:"\u955c\u50cf\u96c6\u6210\u4e86 jupyterlab\uff0c\u8fdb\u5165\u5bb9\u5668\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f00\u542f\u670d\u52a1\u3002",source:"@site/docs/DockerImages/paddlespeech.md",sourceDirName:"DockerImages",slug:"/DockerImages/paddlespeech",permalink:"/docs/DockerImages/paddlespeech",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DockerImages/paddlespeech.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openai-whisper-api",permalink:"/docs/DockerImages/openai-whisper-api"},next:{title:"stable diffusion webui",permalink:"/docs/DockerImages/sd-webui"}},i={},c=[{value:"Finetune \u6559\u7a0b",id:"finetune-\u6559\u7a0b",level:2},{value:"\u540c\u65f6\u652f\u6301\u5c06\u5fae\u8c03\u540e\u7684\u6a21\u578b\u90e8\u7f72\u4e3a FastAPI",id:"\u540c\u65f6\u652f\u6301\u5c06\u5fae\u8c03\u540e\u7684\u6a21\u578b\u90e8\u7f72\u4e3a-fastapi",level:2},{value:"\u95ee\u9898\u53cd\u9988",id:"\u95ee\u9898\u53cd\u9988",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paddlespeech"},"PaddleSpeech"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"docker run -it -p 8880-8889:8880-8889 --gpus all initialencounter/paddlespeech:ttsfinetune-latest /bin/bash\n")),(0,r.yg)("p",null,"\u955c\u50cf\u96c6\u6210\u4e86 jupyterlab\uff0c\u8fdb\u5165\u5bb9\u5668\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f00\u542f\u670d\u52a1\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"jupyter lab --ip=0.0.0.0 --port=8880 --allow-root --notebook-dir=/home/aistudio\n")),(0,r.yg)("h2",{id:"finetune-\u6559\u7a0b"},"Finetune \u6559\u7a0b"),(0,r.yg)("p",null,"\u53c2\u8003\u81ea",(0,r.yg)("a",{parentName:"p",href:"https://aistudio.baidu.com/aistudio/projectdetail/5003396"},"\u3010\u6709\u624b\u5c31\u884c\u3011\u4f7f\u7528\u81ea\u5df1\u7684\u58f0\u97f3\u505a\u8bed\u97f3\u5408\u6210")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1.\u5c06\u4f60\u7684\u8bed\u97f3\u6587\u4ef6\u653e\u5230 work/init \u76ee\u5f55\u4e0b",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u53ef\u901a\u8fc7 docker cp \u6216\u8005 scp \u5c06\u4f60\u7684\u8bed\u97f3\u6587\u4ef6\u653e\u5230\u8fd9\u4e2a\u76ee\u5f55\n\u8bed\u97f3\u6587\u4ef6\u8981\u6c42"))),(0,r.yg)("li",{parentName:"ul"},"2.\u5f00\u59cb\u8bad\u7ec3",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e\u840c\u65b0",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u76f4\u63a5\u8fd0\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"python main.py")))),(0,r.yg)("li",{parentName:"ul"},"\u6709\u4e00\u5b9a\u6df1\u5ea6\u5b66\u4e60\u7ecf\u9a8c\u7684\u670b\u53cb",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u7f16\u8f91 main.py \u91cc\u7684\u4ee3\u7801\n\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u6765\u5fae\u8c03\u6a21\u578b")))))),(0,r.yg)("h2",{id:"\u540c\u65f6\u652f\u6301\u5c06\u5fae\u8c03\u540e\u7684\u6a21\u578b\u90e8\u7f72\u4e3a-fastapi"},"\u540c\u65f6\u652f\u6301\u5c06\u5fae\u8c03\u540e\u7684\u6a21\u578b\u90e8\u7f72\u4e3a FastAPI"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4fee\u6539app.py\u6587\u4ef6")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd /home/aistudio/initialencunter/PaddleSpeech\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'# \u5c06 model \u66ff\u6362\u4e3a\u4f60\u7684exp_name\nam_inference_dir = os.path.abspath("/home/aistudio/inferrence/init")\n# \u5982\u679c\u4f60\u7684 exp_name \u4e3a "demo"\n# \u5219\u5c06\u4ee3\u7801\u4fee\u6539\u4e3a\nam_inference_dir = os.path.abspath("/home/aistudio/inferrence/demo")\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8\u63a5\u53e3")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"python app.py\n")),(0,r.yg)("h2",{id:"\u95ee\u9898\u53cd\u9988"},"\u95ee\u9898\u53cd\u9988"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"QQ\u7fa4\uff1a399899914")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c0f\u4f19\u4f34\u5982\u679c\u9047\u5230\u95ee\u9898\u6216\u8005\u6709\u65b0\u7684\u60f3\u6cd5\uff0c\u6b22\u8fce\u5230",(0,r.yg)("a",{parentName:"p",href:"https://github.com/initialencounter/mykoishi/issues"},"\u8fd9\u91cc"),"\u53cd\u9988\u54e6~"))),(0,r.yg)("p",null,"\u8bed\u97f3\u6587\u4ef6\u8981\u6c42"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u8bed\u97f3\u5408\u6210\u4efb\u52a1\uff0c\u5bf9\u6570\u636e\u662f\u6709\u4e00\u5b9a\u8981\u6c42\u7684\uff0c\u5c3d\u53ef\u80fd\u4e0a\u4f20\u5e72\u51c0\u7684\u4eba\u58f0\u6570\u636e\uff0c\u6bd4\u5982\u50cf\u793a\u4f8b\u4e2d\u7684\u4eba\u58f0\u6570\u636e\uff0c\u5728\u5b89\u9759\u73af\u5883\u4e0b\u5f55\u5236\uff0c\u5f55\u5236\u8bbe\u5907\u65e0\u8bba\u662f\u624b\u673a\uff0c\u7535\u8111\uff0c\u8fd8\u662f\u522b\u7684\u8bbe\u5907\u90fd\u53ef\u4ee5\uff0c\u6ce8\u610f\u4e00\u5b9a\u8981\u63a7\u5236\u566a\u97f3\uff0c\u6216\u8005\u63d0\u524d\u4f7f\u7528\u97f3\u9891\u526a\u8f91\u8f6f\u4ef6\u8fdb\u884c\u964d\u566a\u3002\uff08\u4e00\u5b9a\u8981\u662f\u4e2d\u6587\u6570\u636e\uff0c\u8fd9\u4e2a\u9879\u76ee\u76ee\u524d\u53ea\u652f\u6301\u4e2d\u6587\u6570\u636e\uff01\uff01\u5176\u5b83\u8bed\u8a00\u9884\u6807\u6ce8\u73af\u8282\u4f1a\u51fa\u9519\uff01\uff09"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"1.\u97f3\u9891\u4e0d\u8981\u592a\u957f\uff0c\u4e5f\u4e0d\u8981\u592a\u77ed\uff0c2s~10s\u4e4b\u95f4\uff0c\u97f3\u9891\u592a\u957f\u4f1a\u62a5\u9519\uff01"),(0,r.yg)("li",{parentName:"ul"},"2.\u97f3\u9891\u5c3d\u91cf\u662f\u5e72\u51c0\u4eba\u58f0\uff0c\u4e0d\u8981\u6709BGM\uff0c\u4e0d\u8981\u6709\u6bd4\u8f83\u5927\u7684\u6742\u97f3\uff0c\u4e0d\u8981\u6709\u4e00\u4e9b\u5947\u5947\u602a\u602a\u7684\u58f0\u6548\uff0c\u6bd4\u5982\u56de\u58f0\u7b49"),(0,r.yg)("li",{parentName:"ul"},"3.\u58f0\u97f3\u7684\u60c5\u7eea\u5c3d\u91cf\u7a33\u5b9a,\u4ee5\u8bf4\u8bdd\u7684\u8bed\u6599\u4e3a\u4e3b\uff0c\u4e0d\u8981\u662f\u300e\u55ef\u300f\u300e\u554a\u300f\u300e\u54c8\u300f\u4e4b\u7c7b\u7684\u8bed\u6c14\u8bcd"),(0,r.yg)("li",{parentName:"ul"},"4.\u97f3\u9891\u6570\u91cf\u5927\u4e8e5 \u6761\uff01\uff01\u5426\u5219\u4f1a\u62a5\u9519\uff01\uff01\n\u5173\u4e8e\u5f55\u97f3\u5de5\u5177\u7684\u9009\u62e9\uff1a\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5728\u7ebf\u8fd0\u884c\u7684\u5f55\u97f3\u5de5\u5177\u6216\u8005 \u3010Adobe Audition\u3011\uff0c\u3010Cool Edit Pro\u3011, \u3010Audacity\u3011 \u7b49\u5f55\u97f3\u8f6f\u4ef6\u5f55\u5236\u97f3\u9891\uff0c\u4fdd\u5b58\u4e3a 24000\u91c7\u6837\u7387\u7684 Wav \u683c\u5f0f\n\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u673a\u5f55\u97f3\u540e\uff0c\u4f7f\u7528\u683c\u5f0f\u5de5\u5382\u7b49\u683c\u5f0f\u8f6c\u6362\u8f6f\u4ef6\uff0c\u5c06\u624b\u673a\u5f55\u97f3\u8f6c\u6362\u6210 Wav \u683c\u5f0f\u540e\u4e0a\u4f20\u5230\u8fd9\u4e2a\u9879\u76ee\u4e2d\u3002"))))}m.isMDXComponent=!0}}]);