"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9648],{6497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(1504),c=a(8264),r=a(4596),s=a(6952),l=a(6016),u=a(5592),o=a(8684);const m=function(){const e=(0,u.Uz)(),t=(0,u.IT)(),{siteConfig:{baseUrl:a}}=(0,c.c)();return{searchValue:o.c.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var h=a(4352),i=a(9880),p=a(2791),d=a(4436),f=a(2164),I=a(3265),_=a(6280);function E(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const g={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var y=a(2852);function S(e){let{searchResult:{document:t,type:a,page:c,tokens:r,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:c.b).slice(),h=o?t.s:t.t;return u||m.push(c.t),n.createElement("article",{className:g.searchResultItem},n.createElement("h2",null,n.createElement(l.c,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,p.s)(h,r):(0,d.K)(h,(0,f.A)(s,"t"),r,100)}})),m.length>0&&n.createElement("p",{className:g.searchResultItemPath},(0,y._)(m)),o&&n.createElement("p",{className:g.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,d.K)(t.t,(0,f.A)(s,"t"),r,100)}}))}const R=function(){const{siteConfig:{baseUrl:e}}=(0,c.c)(),{searchValue:t,updateSearchPath:a}=m(),[l,u]=(0,n.useState)(t),[o,p]=(0,n.useState)(),[d,f]=(0,n.useState)(),y=(0,n.useMemo)((()=>l?E(_.uI.search_results_for,{keyword:l}):_.uI.search_the_documentation),[l]);(0,n.useEffect)((()=>{a(l),o&&(l?o(l,(e=>{f(e)})):f(void 0))}),[l,o]);const R=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==l&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.i)(e);p((()=>(0,i.r)(t,a,100)))}()}),[e]),n.createElement(r.c,null,n.createElement(s.c,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,y)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,y),n.createElement("input",{type:"search",name:"q",className:g.searchQueryInput,"aria-label":"Search",onChange:R,value:l,autoComplete:"off",autoFocus:!0}),!o&&l&&n.createElement("div",null,n.createElement(I.c,null)),d&&(d.length>0?n.createElement("p",null,E(1===d.length?_.uI.count_documents_found:_.uI.count_documents_found_plural,{count:d.length})):n.createElement("p",null,_.uI.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(S,{key:e.document.i,searchResult:e}))))))}}}]);