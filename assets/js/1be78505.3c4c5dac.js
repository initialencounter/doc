"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9514,4608],{6756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(7294),o=a(3905),l=a(8790),c=a(2773),r=a(6010),i=a(650),s=a(5537),d=a(7462);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(5999),b=a(9960),p=a(3919),h=a(541);const E={menuHtmlItem:"menuHtmlItem_fVIQ"};var f=a(2389);function g(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(_,(0,d.Z)({item:t},a));case"html":return n.createElement(v,(0,d.Z)({item:t},a));default:return n.createElement(k,(0,d.Z)({item:t},a))}}function _(e){let{item:t,onItemClick:a,activePath:o,level:l,index:c,...s}=e;const{items:m,label:p,collapsible:h,className:E,href:g}=t,_=function(e){const t=(0,f.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,o),k=(0,i.Mg)(g,o),{collapsed:S,setCollapsed:I}=(0,i.uR)({initialState:()=>!!h&&(!v&&t.collapsed)});!function(e){let{isActive:t,collapsed:a,setCollapsed:o}=e;const l=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:v,collapsed:S,setCollapsed:I});const{expandedItem:N,setExpandedItem:T}=(0,i.fP)();function Z(e){void 0===e&&(e=!S),T(e?null:c),I(e)}const{autoCollapseSidebarCategories:M}=(0,i.LU)();return(0,n.useEffect)((()=>{h&&N&&N!==c&&M&&I(!0)}),[h,N,c,I,M]),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},E)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(b.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":v}),onClick:h?e=>{a?.(t),g?Z(!1):(e.preventDefault(),Z())}:()=>{a?.(t)},"aria-current":k?"page":void 0,href:h?_??"#":_},s),p),g&&h&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:p}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),Z()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},n.createElement(C,{items:m,tabIndex:S?-1:0,onItemClick:a,activePath:o,level:l+1})))}function v(e){let{item:t,level:a,index:o}=e;const{value:l,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(a),c&&`${E.menuHtmlItem} menu__list-item`,s),key:o,dangerouslySetInnerHTML:{__html:l}})}function k(e){let{item:t,onItemClick:a,activePath:o,level:l,index:c,...s}=e;const{href:m,label:u,className:E}=t,f=(0,i._F)(t,o);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",E),key:u},n.createElement(b.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:m},(0,p.Z)(m)&&{onClick:a?()=>a(t):void 0},s),(0,p.Z)(m)?u:n.createElement("span",null,u,n.createElement(h.Z,null))))}function S(e){let{items:t,...a}=e;return n.createElement(i.D_,null,t.map(((e,t)=>n.createElement(g,(0,d.Z)({key:t,item:e,index:t},a)))))}const C=(0,n.memo)(S),I={sidebar:"sidebar_CW9Y",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_FoYL",sidebarHidden:"sidebarHidden_D64r",sidebarLogo:"sidebarLogo_FJUI",menu:"menu_SkdO",menuWithAnnouncementBar:"menuWithAnnouncementBar_x19h",collapseSidebarButton:"collapseSidebarButton_cwdi",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_xORG",sidebarMenuIcon:"sidebarMenuIcon_LfgG",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_uo5v"};function N(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},n.createElement(m,{className:I.collapseSidebarButtonIcon}))}function T(e){let{path:t,sidebar:a,onCollapse:o,isHidden:l}=e;const c=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:d},hideableSidebar:m}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(I.sidebar,{[I.sidebarWithHideableNavbar]:d,[I.sidebarHidden]:l})},d&&n.createElement(s.Z,{tabIndex:-1,className:I.sidebarLogo}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",I.menu,{[I.menuWithAnnouncementBar]:c})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(C,{items:a,activePath:t,level:1}))),m&&n.createElement(N,{onClick:o}))}const Z=e=>{let{toggleSidebar:t,sidebar:a,path:o}=e;return n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(C,{items:a,activePath:o,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function M(e){return n.createElement(i.Cv,{component:Z,props:e})}const y=n.memo(T),L=n.memo(M);function B(e){const t=(0,i.iP)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(y,e),o&&n.createElement(L,e))}var w=a(4689),A=a(4608);const x={backToTopButton:"backToTopButton_RiI4",backToTopButtonShow:"backToTopButtonShow_ssHd"},H=300,F=!1;function P(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=F?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}function W(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=P();return(0,i.RF)(((e,n)=>{let{scrollY:o}=e;const c=n?.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=o<c;if(r||l(),o<H)t(!1);else if(r){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,x.backToTopButton,{[x.backToTopButtonShow]:e}),type:"button",onClick:()=>o()})}var D=a(6550);const R={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};var Y=a(5742);function q(e){let{currentDocRoute:t,versionMetadata:a,children:l,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:b,version:p}=a,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),_=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:p,tag:(0,i.os)(b,p)}},n.createElement("div",{className:R.docPage},n.createElement(W,null),d&&n.createElement("aside",{className:(0,r.Z)(i.kM.docs.docSidebarContainer,R.docSidebarContainer,{[R.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(R.docSidebarContainer)&&h&&g(!0)}},n.createElement(B,{key:s,sidebar:d,path:t.path,onCollapse:_,isHidden:f}),f&&n.createElement("div",{className:R.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(m,{className:R.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(R.docMainContainer,{[R.docMainContainerEnhanced]:h||!d})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",R.docItemWrapper,{[R.docItemWrapperEnhanced]:h})},n.createElement(o.Zo,{components:w.Z},l)))))}function z(e){const{route:{routes:t},versionMetadata:a,location:o}=e,c=t.find((e=>(0,D.LX)(o.pathname,e)));if(!c)return n.createElement(A.default,null);const r=c.sidebar,s=r?a.docsSidebars[r]:null;return n.createElement(n.Fragment,null,n.createElement(Y.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement(q,{currentDocRoute:c,versionMetadata:a,sidebarName:r},(0,l.H)(t,{versionMetadata:a})))))}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),o=a(2773),l=a(5999);function c(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);