"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5856],{6186:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var i=s(4848),c=s(8453);const r={},o="koishi-plugin-embedsort",d={id:"KoishiPlugins/AI/embedsort/README",title:"koishi-plugin-embedsort",description:"npm",source:"@site/docs/KoishiPlugins/AI/embedsort/README.md",sourceDirName:"KoishiPlugins/AI/embedsort",slug:"/KoishiPlugins/AI/embedsort/",permalink:"/docs/KoishiPlugins/AI/embedsort/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/AI/embedsort/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"davinci-003",permalink:"/docs/KoishiPlugins/AI/davinci-003/"},next:{title:"facercg",permalink:"/docs/KoishiPlugins/AI/facercg/"}},l={},t=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8bbe\u7f6e\u5d4c\u5165\u6587\u672c",id:"\u8bbe\u7f6e\u5d4c\u5165\u6587\u672c",level:3},{value:"\u653e\u7f6e\u6a21\u578b",id:"\u653e\u7f6e\u6a21\u578b",level:2},{value:"\u4e00\u952e\u62c9\u53d6\u6a21\u578b\uff08\u9700\u8981\u5b89\u88c5 git lfs\uff09",id:"\u4e00\u952e\u62c9\u53d6\u6a21\u578b\u9700\u8981\u5b89\u88c5-git-lfs",level:3},{value:"\u624b\u52a8\u914d\u7f6e",id:"\u624b\u52a8\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u6a21\u578b\u7f13\u5b58\u8def\u5f84",id:"\u914d\u7f6e\u6a21\u578b\u7f13\u5b58\u8def\u5f84",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"koishi-plugin-embedsort",children:"koishi-plugin-embedsort"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/koishi-plugin-embedsort",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/npm/v/koishi-plugin-embedsort?style=flat-square",alt:"npm"})})}),"\n",(0,i.jsx)(n.p,{children:"\u5d4c\u5165\u6587\u672c\u68c0\u7d22\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u5d4c\u5165\u6587\u672c\uff0c\u63d2\u4ef6\u4f1a\u6839\u636e\u8f93\u5165\u7684\u6587\u672c\u8bed\u4e49\u6765\u68c0\u7d22\u6700\u5408\u9002\u7684\u6587\u672c\u8fdb\u884c\u56de\u590d"}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u63d2\u4ef6\u4f1a\u589e\u52a0 1.4GB \u5de6\u53f3\u7684\u5185\u5b58\u5360\u7528"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u673a\u5668\u65e0\u6cd5\u8bbf\u95ee huggingface\uff0c\u8bf7\u5b89\u88c5\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u914d\u7f6e\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.h3,{id:"\u8bbe\u7f6e\u5d4c\u5165\u6587\u672c",children:"\u8bbe\u7f6e\u5d4c\u5165\u6587\u672c"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u6240\u6709\u8981\u68c0\u7d22\u7684\u6587\u672c\u7528\u6362\u884c\u5206\u5f00\u4fdd\u5b58\u5230\u4e00\u4e2a .txt \u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,i.jsx)(n.code,{children:"embedTexts"})," \u914d\u7f6e\u9879\u586b\u5165 .txt \u6587\u4ef6\u7684\u8def\u5f84"]}),"\n",(0,i.jsx)(n.h2,{id:"\u653e\u7f6e\u6a21\u578b",children:"\u653e\u7f6e\u6a21\u578b"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u5c06\u6a21\u578b\u4e0a\u4f20\u5230\u4e86\u9b54\u5854\u793e\u533a\uff0c\u5982\u679c\u8bbf\u95ee\u4e0d\u4e86\u4e0b\u9762\u7684\u94fe\u63a5\u53ef\u4ee5\u4ece\u8fd9\u91cc\u4e0b\u8f7d ",(0,i.jsx)(n.code,{children:"https://modelscope.cn/models/initialencounter/bge-large-zh-v1.5/files"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e00\u952e\u62c9\u53d6\u6a21\u578b\u9700\u8981\u5b89\u88c5-git-lfs",children:"\u4e00\u952e\u62c9\u53d6\u6a21\u578b\uff08\u9700\u8981\u5b89\u88c5 git lfs\uff09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone https://www.modelscope.cn/initialencounter/bge-base-zh-v1.5.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u62c9\u53d6\u5b8c\u6210\u540e\u76f4\u63a5\u586b\u5199\u53ea\u9700\u8981\u8fd9\u6837\u586b\u5199\u914d\u7f6e:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "model": "bge-base-zh-v1.5",\n  "cacheDir": "\u4ed3\u5e93\u6240\u5728\u8def\u5f84"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u624b\u52a8\u914d\u7f6e",children:"\u624b\u52a8\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u627e\u4e00\u4e2a\u5b58\u653e\u6a21\u578b\u7684\u76ee\u5f55\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"C:\\Users\\29115\\Desktop\\embedsort"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u76ee\u5f55\u65b0\u5efa\u6587\u4ef6\u5939 ",(0,i.jsx)(n.code,{children:"Xenova"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Xenova"})," \u65b0\u5efa\u6587\u4ef6\u5939 ",(0,i.jsx)(n.code,{children:"bge-large-zh-v1.5"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"bge-large-zh-v1.5"})," \u65b0\u5efa\u6587\u4ef6\u5939 ",(0,i.jsx)(n.code,{children:"onnx"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06 ",(0,i.jsx)(n.a,{href:"https://huggingface.co/Xenova/bge-large-zh-v1.5/tree/main/onnx",children:"https://huggingface.co/Xenova/bge-large-zh-v1.5/tree/main/onnx"})," \u4ed3\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"model_quantized.onnx"})," \u6a21\u578b\u653e\u5230 ",(0,i.jsx)(n.code,{children:"onnx"})," \u6587\u4ef6\u5939\u4e0b\u9762"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06 ",(0,i.jsx)(n.a,{href:"https://huggingface.co/Xenova/bge-large-zh-v1.5/tree/main/onnx",children:"https://huggingface.co/Xenova/bge-large-zh-v1.5/tree/main/onnx"})," \u4ed3\u5e93\u7684"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"quantize_config.json"}),"\n",(0,i.jsx)(n.code,{children:"configuration.json"}),"\n",(0,i.jsx)(n.code,{children:"special_tokens_map.json"}),"\n",(0,i.jsx)(n.code,{children:"tokenizer.json"}),"\n",(0,i.jsx)(n.code,{children:"tokenizer_config.json"}),"\n",(0,i.jsx)(n.code,{children:"vocab.txt"}),"\n",(0,i.jsx)(n.code,{children:"config.json"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u653e\u5230 ",(0,i.jsx)(n.code,{children:"bge-large-zh-v1.5"})," \u6587\u4ef6\u5939\u4e0b\u9762"]}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u6a21\u578b\u7f13\u5b58\u8def\u5f84",children:"\u914d\u7f6e\u6a21\u578b\u7f13\u5b58\u8def\u5f84"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"embedsort"})," \u63d2\u4ef6\u7684 ",(0,i.jsx)(n.code,{children:"cacheDir"})," \u9879\u586b\u5199 ",(0,i.jsx)(n.code,{children:"C:\\Users\\29115\\Desktop\\embedsort"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u542f\u7528 ",(0,i.jsx)(n.code,{children:"transformers"})," \u63d2\u4ef6\u548c ",(0,i.jsx)(n.code,{children:"embedsort"})," \u63d2\u4ef6"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const c={},r=i.createContext(c);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);