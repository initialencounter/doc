"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6344],{6164:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(1504),n=a(4971),r=a(4596),i=a(6016);const s={sidebar:"sidebar_a9qW",sidebarItemTitle:"sidebarItemTitle_uKok",sidebarItemList:"sidebarItemList_Kvuv",sidebarItem:"sidebarItem_CF0Q",sidebarItemLink:"sidebarItemLink_miNk",sidebarItemLinkActive:"sidebarItemLinkActive_RRTD"};var o=a(4357);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.c)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.c)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.c,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}function m(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.c,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(c,{sidebar:t})),l.createElement("main",{className:(0,n.c)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},5264:(e,t,a)=>{a.d(t,{c:()=>N});var l=a(1504),n=a(4971),r=a(5788),i=a(4357),s=a(6016),o=a(964),c=a(1124),m=a(5684),g=a(1704),d=a(6060);const u={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"};var p=a(9108);const b={image:"image_o0gy"};function h(e){return e.href?l.createElement(s.c,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i,email:s}=t,o=r||s&&`mailto:${s}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(h,{href:o},l.createElement("img",{className:b.image,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(h,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const E={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.c)("margin-top--md margin-bottom--sm",r?E.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,n.c)(!r&&"col col--6",r?E.imageOnlyAuthorCol:E.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function N(e){const t=function(){const{selectMessage:e}=(0,c.Aj)();return t=>{const a=Math.ceil(t);return e(a,(0,i.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.E)(),{children:b,frontMatter:h,assets:v,metadata:E,truncated:N,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:C,tags:L,readingTime:y,title:I,editUrl:T,authors:w}=E,A=v.image??h.image,x=!f&&N,R=L.length>0,D=f?"h1":"h2";return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(D,{className:u.blogPostTitle,itemProp:"headline"},f?I:l.createElement(s.c,{itemProp:"url",to:C},I)),l.createElement("div",{className:(0,n.c)(u.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",t(y))),l.createElement(_,{authors:w,assets:v})),A&&l.createElement("meta",{itemProp:"image",content:a(A,{absolute:!0})}),l.createElement("div",{id:f?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Iu,{components:g.c},b)),(R||N)&&l.createElement("footer",{className:(0,n.c)("row docusaurus-mt-lg",{[u.blogPostDetailsFull]:f})},R&&l.createElement("div",{className:(0,n.c)("col",{"col--9":x})},l.createElement(p.c,{tags:L})),f&&T&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.c,{editUrl:T})),x&&l.createElement("div",{className:(0,n.c)("col text--right",{"col--3":R})},l.createElement(s.c,{to:E.permalink,"aria-label":(0,i.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(i.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(1504),n=a(6068),r=a(6164),i=a(5264),s=a(5072),o=a(4357),c=a(2016);function m(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.G)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(c.c,(0,s.c)({},a,{subLabel:l.createElement(o.c,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(c.c,(0,s.c)({},t,{subLabel:l.createElement(o.c,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var g=a(1124),d=a(2264);function u(e){const{content:t,sidebar:a}=e,{assets:s,metadata:o}=t,{title:c,description:u,nextItem:p,prevItem:b,date:h,tags:v,authors:E,frontMatter:_}=o,{hide_table_of_contents:N,keywords:f,toc_min_heading_level:k,toc_max_heading_level:P}=_,C=s.image??_.image;return l.createElement(r.c,{wrapperClassName:g.Wu.wrapper.blogPages,pageClassName:g.Wu.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?l.createElement(d.c,{toc:t.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.c,{title:c,description:u,keywords:f,image:C},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:h}),E.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:E.map((e=>e.url)).filter(Boolean).join(",")}),v.length>0&&l.createElement("meta",{property:"article:tag",content:v.map((e=>e.label)).join(",")})),l.createElement(i.c,{frontMatter:_,assets:s,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(p||b)&&l.createElement(m,{nextItem:p,prevItem:b}))}},6060:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(1504),n=a(4357),r=a(5072),i=a(4971);const s={iconEdit:"iconEdit_dcUD"};function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.c)(s.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var c=a(1124);function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.Wu.common.editThisPage},l.createElement(o,null),l.createElement(n.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2016:(e,t,a)=>{a.d(t,{c:()=>r});var l=a(1504),n=a(6016);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.c,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},2264:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(5072),n=a(1504),r=a(4971),i=a(6808);const s={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},o="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.c)(s.tableOfContents,"thin-scrollbar",t)},n.createElement(i.c,(0,l.c)({},a,{linkClassName:o,linkActiveClassName:c})))}},6808:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(5072),n=a(1504),r=a(1124);function i(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const d=(0,r.yw)(),u=c??d.tableOfContents.minHeadingLevel,p=m??d.tableOfContents.maxHeadingLevel,b=(0,r.yc)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),h=(0,n.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[s,o,u,p]);return(0,r.e4)(h),n.createElement(i,(0,l.c)({toc:b,className:a,linkClassName:s},g))}},9612:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(1504),n=a(4971),r=a(6016);const i={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function s(e){const{permalink:t,name:a,count:s}=e;return l.createElement(r.c,{href:t,className:(0,n.c)(i.tag,{[i.tagRegular]:!s,[i.tagWithCount]:s})},a,s&&l.createElement("span",null,s))}},9108:(e,t,a)=>{a.d(t,{c:()=>o});var l=a(1504),n=a(4971),r=a(4357),i=a(9612);const s={tags:"tags_XVD_",tag:"tag_JSN8"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.c)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(i.c,{name:t,permalink:a}))}))))}}}]);