"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{8665:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(6010),n=a(2773),s=a(9960);const i={sidebar:"sidebar_a9qW",sidebarItemTitle:"sidebarItemTitle_uKok",sidebarItemList:"sidebarItemList_Kvuv",sidebarItem:"sidebarItem_CF0Q",sidebarItemLink:"sidebarItemLink_miNk",sidebarItemLinkActive:"sidebarItemLinkActive_RRTD"};var o=a(5999);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}function c(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(7294),r=a(6010),n=a(3905),s=a(5999),i=a(9960),o=a(4996),m=a(650),c=a(8780),g=a(4689),d=a(6753);const u={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"};var p=a(62);const h={image:"image_o0gy"};function b(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,o=n||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:o},l.createElement("img",{className:h.image,src:s,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const v={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?v.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?v.imageOnlyAuthorCol:v.authorCol),key:t},l.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function f(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:h,frontMatter:b,assets:E,metadata:v,truncated:f,isBlogPostPage:N=!1}=e,{date:Z,formattedDate:k,permalink:P,tags:T,readingTime:w,title:I,editUrl:y,authors:L}=v,A=E.image??b.image,C=!N&&f,R=T.length>0,M=N?"h1":"h2";return l.createElement("article",{className:N?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(M,{className:u.blogPostTitle,itemProp:"headline"},N?I:l.createElement(i.Z,{itemProp:"url",to:P},I)),l.createElement("div",{className:(0,r.Z)(u.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:Z,itemProp:"datePublished"},k),void 0!==w&&l.createElement(l.Fragment,null," \xb7 ",t(w))),l.createElement(_,{authors:L,assets:E})),A&&l.createElement("meta",{itemProp:"image",content:a(A,{absolute:!0})}),l.createElement("div",{id:N?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(n.Zo,{components:g.Z},h)),(R||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[u.blogPostDetailsFull]:N})},R&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(p.Z,{tags:T})),N&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},l.createElement(i.Z,{to:v.permalink,"aria-label":(0,s.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),r=a(9960),n=a(8665),s=a(8561),i=a(5999),o=a(650),m=a(6299);function c(e){const{metadata:t,items:a,sidebar:c,listMetadata:g}=e,{allTagsPath:d,name:u,count:p}=t,h=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),b=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:u});return l.createElement(n.Z,{title:b,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,b),l.createElement(r.Z,{href:d},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(m.Z,{metadata:g}))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(5999),n=a(7462),s=a(6010);const i={iconEdit:"iconEdit_dcUD"};function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(650);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(9960);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(6010),n=a(9960);const s={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function i(e){const{permalink:t,name:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,{[s.tagRegular]:!i,[s.tagWithCount]:i})},a,i&&l.createElement("span",null,i))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010),n=a(5999),s=a(7774);const i={tags:"tags_XVD_",tag:"tag_JSN8"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);