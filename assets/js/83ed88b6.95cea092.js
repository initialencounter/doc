"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3451],{7139:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var s=i(4848),r=i(8453);const o={},l="koishi-plugin-florence",c={id:"KoishiPlugins/AI/florence/README",title:"koishi-plugin-florence",description:"npm",source:"@site/docs/KoishiPlugins/AI/florence/README.md",sourceDirName:"KoishiPlugins/AI/florence",slug:"/KoishiPlugins/AI/florence/",permalink:"/docs/KoishiPlugins/AI/florence/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KoishiPlugins/AI/florence/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"facercg",permalink:"/docs/KoishiPlugins/AI/facercg/"},next:{title:"sd-taylor",permalink:"/docs/KoishiPlugins/AI/sd-taylor/"}},d={},t=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u63d2\u4ef6\u529f\u80fd",id:"\u63d2\u4ef6\u529f\u80fd",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4fee\u6539 transformers.js \u6a21\u5757\u4ee3\u7801",id:"\u4fee\u6539-transformersjs-\u6a21\u5757\u4ee3\u7801",level:3},{value:"\u4e0b\u8f7d\u6a21\u578b",id:"\u4e0b\u8f7d\u6a21\u578b",level:3},{value:"\u4e0b\u8f7d\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",id:"\u4e0b\u8f7d\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u4e0b\u8f7d onnx",id:"\u4e0b\u8f7d-onnx",level:4},{value:"\u914d\u7f6e\u63d2\u4ef6",id:"\u914d\u7f6e\u63d2\u4ef6",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"koishi-plugin-florence",children:"koishi-plugin-florence"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/koishi-plugin-florence",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/npm/v/koishi-plugin-florence?style=flat-square",alt:"npm"})})}),"\n",(0,s.jsx)(n.p,{children:"Powerful vision foundation model running locally in your koishi."}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u60a8\u7684 Koishi \u4e0a\u672c\u5730\u8fd0\u884c\u5f3a\u5927\u7684\u89c6\u89c9\u57fa\u7840\u6a21\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://huggingface.co/microsoft/Florence-2-large",children:"Florence-2"})," \u662f\u4e00\u6b3e\u5148\u8fdb\u7684\u89c6\u89c9\u57fa\u7840\u6a21\u578b\uff0c\u5b83\u91c7\u7528\u57fa\u4e8e\u63d0\u793a\u7684\u65b9\u6cd5\u6765\u5904\u7406\u5404\u79cd\u89c6\u89c9\u548c\u89c6\u89c9\u8bed\u8a00\u4efb\u52a1\u3002Florence-2\u53ef\u4ee5\u89e3\u91ca\u7b80\u5355\u7684\u6587\u672c\u63d0\u793a\uff0c\u6267\u884c\u5982\u6807\u6ce8\u3001\u5bf9\u8c61\u68c0\u6d4b\u548c\u5206\u5272\u7b49\u4efb\u52a1\u3002\u5b83\u5229\u7528\u6211\u4eec\u7684FLD-5B\u6570\u636e\u96c6\uff0c\u8be5\u6570\u636e\u96c6\u5305\u542b1.26\u4ebf\u5f20\u56fe\u50cf\u4e0a\u768454\u4ebf\u4e2a\u6ce8\u91ca\uff0c\u6765\u638c\u63e1\u591a\u4efb\u52a1\u5b66\u4e60\u3002\u8be5\u6a21\u578b\u7684\u5e8f\u5217\u5230\u5e8f\u5217\u67b6\u6784\u4f7f\u5176\u5728\u96f6\u6837\u672c\u5b66\u4e60\u548c\u5fae\u8c03\u8bbe\u7f6e\u4e2d\u90fd\u8868\u73b0\u51fa\u8272\uff0c\u8bc1\u660e\u5b83\u662f\u4e00\u4e2a\u6709\u7ade\u4e89\u529b\u7684\u89c6\u89c9\u57fa\u7840\u6a21\u578b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u4ef6\u529f\u80fd",children:"\u63d2\u4ef6\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/xenova/transformers.js/issues/815#issuecomment-2184090182",children:"https://github.com/xenova/transformers.js/issues/815#issuecomment-2184090182"})}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.h3,{id:"\u4fee\u6539-transformersjs-\u6a21\u5757\u4ee3\u7801",children:["\u4fee\u6539 ",(0,s.jsx)(n.a,{href:"https://github.com/xenova/transformers.js",children:"transformers.js"})," \u6a21\u5757\u4ee3\u7801"]}),"\n",(0,s.jsxs)(n.p,{children:["transformers.js \u5b58\u5728\u65e0\u6cd5\u52a0\u8f7d florence \u7684bug\n\u4f60\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"@huggingface/transformers/dist/transformers.mjs"})," \u5220\u6389\u7b2c7471\u884c\uff0c\u5e76\u52a0\u4e0a\u8fd9\u6bb5\u4ee3\u7801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let modelName  = MODEL_CLASS_TO_NAME_MAPPING.get(this);\nif (modelName === undefined){\n  modelName = 'Florence2ForConditionalGeneration'\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0b\u8f7d\u6a21\u578b",children:"\u4e0b\u8f7d\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u673a\u5668\u53ef\u4ee5\u8bbf\u95ee huggingface\uff0c \u5219\u65e0\u9700\u505a\u6b64\u6b65\u9aa4"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:"\u70b9\u6211\u67e5\u770b\ud83d\udc48"}),"\n\u627e\u4e00\u4e2a\u5b58\u653e\u6a21\u578b\u7684\u76ee\u5f55 \u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"D:\\models\\florence"})]}),(0,s.jsxs)(n.p,{children:["\u524d\u5f80 huggingface ",(0,s.jsx)(n.a,{href:"https://huggingface.co/onnx-community/Florence-2-base-ft",children:"\u4e0b\u8f7d\u6a21\u578b"})]}),(0,s.jsx)(n.h4,{id:"\u4e0b\u8f7d\u6a21\u578b\u914d\u7f6e\u6587\u4ef6",children:"\u4e0b\u8f7d\u6a21\u578b\u914d\u7f6e\u6587\u4ef6"}),(0,s.jsx)(n.p,{children:"\u4f60\u9700\u8981\u4e0b\u8f7d\u8fd9\u4e9b\u6587\u4ef6\uff0c\u4fdd\u5b58\u5230\u5b58\u653e\u6a21\u578b\u7684\u76ee\u5f55"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"config.json"}),"\n",(0,s.jsx)(n.li,{children:"preprocessor_config.json"}),"\n",(0,s.jsx)(n.li,{children:"generation_config.json"}),"\n",(0,s.jsx)(n.li,{children:"tokenizer.json"}),"\n",(0,s.jsx)(n.li,{children:"tokenizer_config.json"}),"\n"]}),(0,s.jsx)(n.h4,{id:"\u4e0b\u8f7d-onnx",children:"\u4e0b\u8f7d onnx"}),(0,s.jsxs)(n.p,{children:["\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939 \u547d\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"onnx"}),"\uff0c \u5c06\u4ee5\u4e0b\u6a21\u578b\u653e\u5165 ",(0,s.jsx)(n.code,{children:"onnx"})," \u6587\u4ef6\u5939\n\u5982\u679c\u4f60\u9009\u62e9\u7684\u6a21\u578b dtype \u4e3a fp32 \u4f60\u9700\u8981\u4e0b\u8f7d\u8fd9\u4e9b\u6a21\u578b"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"decoder_model_merged.onnx"}),"\n",(0,s.jsx)(n.li,{children:"embed_tokens.onnx"}),"\n",(0,s.jsx)(n.li,{children:"encoder_model.onnx"}),"\n",(0,s.jsx)(n.li,{children:"vision_encoder.onnx"}),"\n"]}),(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9009\u62e9\u7684\u6a21\u578b dtype \u4e3a q8 \u4f60\u9700\u8981\u4e0b\u8f7d\u8fd9\u4e9b\u6a21\u578b"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"decoder_model_merged_quantized.onnx"}),"\n",(0,s.jsx)(n.li,{children:"embed_tokens_quantized.onnx"}),"\n",(0,s.jsx)(n.li,{children:"encoder_model_quantized.onnx"}),"\n",(0,s.jsx)(n.li,{children:"vision_encoder_quantized.onnx"}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u63d2\u4ef6",children:"\u914d\u7f6e\u63d2\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u673a\u5668\u53ef\u4ee5\u8bbf\u95ee huggingface\uff0c \u5219\u65e0\u9700\u505a\u6b64\u6b65\u9aa4"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"\u70b9\u6211\u67e5\u770b\ud83d\udc48"}),(0,s.jsxs)(n.p,{children:["\u586b\u5199\u5b58\u653e\u6a21\u578b\u7684\u8def\u5f84 \u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"D:\\models"})]}),(0,s.jsxs)(n.p,{children:["\u586b\u5199\u6a21\u578b\u540d\u79f0 ",(0,s.jsx)(n.code,{children:"florence"})]}),(0,s.jsx)(n.p,{children:"\u9009\u62e9\u4e0b\u8f7d\u7684\u6a21\u578b\u7684\u7cbe\u5ea6"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);