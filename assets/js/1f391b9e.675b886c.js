"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3085],{6416:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var n=t(7294),l=t(6010),s=t(2773),i=t(3905),c=t(4689),m=t(1575),r=t(650);const o={mdxPageWrapper:"mdxPageWrapper_zHyg"};function d(e){const{content:a}=e,{metadata:{title:t,description:d,permalink:v,frontMatter:g}}=a,{wrapperClassName:N,hide_table_of_contents:_}=g;return n.createElement(s.Z,{title:t,description:d,permalink:v,wrapperClassName:N??r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,l.Z)("row",o.mdxPageWrapper)},n.createElement("div",{className:(0,l.Z)("col",!_&&"col--8")},n.createElement(i.Zo,{components:c.Z},n.createElement(a,null))),!_&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:a.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})))))}},1575:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7462),l=t(7294),s=t(6010),i=t(5002);const c={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},m="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function o(e){let{className:a,...t}=e;return l.createElement("div",{className:(0,s.Z)(c.tableOfContents,"thin-scrollbar",a)},l.createElement(i.Z,(0,n.Z)({},t,{linkClassName:m,linkActiveClassName:r})))}},5002:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),s=t(650);function i(e){let{toc:a,className:t,linkClassName:n,isChild:s}=e;return a.length?l.createElement("ul",{className:s?void 0:t},a.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}function c(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const v=(0,s.LU)(),g=r??v.tableOfContents.minHeadingLevel,N=o??v.tableOfContents.maxHeadingLevel,_=(0,s.b9)({toc:a,minHeadingLevel:g,maxHeadingLevel:N}),f=(0,l.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:N}}),[c,m,g,N]);return(0,s.Si)(f),l.createElement(i,(0,n.Z)({toc:_,className:t,linkClassName:c},d))}}}]);