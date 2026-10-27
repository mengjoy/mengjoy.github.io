import{d as _,c,r as m,n as C,o as r,a as F,t as T,b as P,w as h,T as me,e as g,_ as y,u as st,i as ot,f as rt,g as pe,h as x,j as d,k as l,l as W,m as ie,p as A,q,s as te,v as z,x as he,y as ve,z as at,A as lt,F as M,B as E,C as J,D as ne,E as k,G as Ie,H as D,I as Te,J as se,K as U,L as oe,M as it,N as Me,O as ct,P as Ne,Q as Ae,R as re,S as ut,U as He,V as Be,W as dt,X as mt,Y as Ce,Z as pt,$ as ht,a0 as vt,a1 as Pe}from"./framework.CDkyNlHF.js";const ft=_({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(r(),c("span",{class:C(["VPBadge",e.type])},[m(t.$slots,"default",{},()=>[F(T(e.text),1)])],2))}}),bt={key:0,class:"VPBackdrop"},gt=_({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(r(),P(me,{name:"fade"},{default:h(()=>[e.show?(r(),c("div",bt)):g("",!0)]),_:1}))}}),_t=y(gt,[["__scopeId","data-v-54a304ca"]]),S=st;function kt(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),(s=!0)&&setTimeout(()=>s=!1,t))}}function ce(e){return e.startsWith("/")?e:`/${e}`}function fe(e){const{pathname:t,search:n,hash:s,protocol:o}=new URL(e,"http://a.com");if(ot(e)||e.startsWith("#")||!o.startsWith("http")||!rt(t))return e;const{site:a}=S(),i=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${n}${s}`);return pe(i)}function Z({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:s,theme:o,hash:a}=S(),i=x(()=>{var u,b;return{label:(u=t.value.locales[n.value])==null?void 0:u.label,link:((b=t.value.locales[n.value])==null?void 0:b.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:x(()=>Object.entries(t.value.locales).flatMap(([u,b])=>i.value.label===b.label?[]:{text:b.label,link:yt(b.link||(u==="root"?"/":`/${u}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+a.value})),currentLang:i}}function yt(e,t,n,s){return t?e.replace(/\/$/,"")+ce(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):e}const $t={class:"NotFound"},Pt={class:"code"},Lt={class:"title"},xt={class:"quote"},Vt={class:"action"},wt=["href","aria-label"],St=_({__name:"NotFound",setup(e){const{theme:t}=S(),{currentLang:n}=Z();return(s,o)=>{var a,i,p,u,b;return r(),c("div",$t,[d("p",Pt,T(((a=l(t).notFound)==null?void 0:a.code)??"404"),1),d("h1",Lt,T(((i=l(t).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=d("div",{class:"divider"},null,-1)),d("blockquote",xt,T(((p=l(t).notFound)==null?void 0:p.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",Vt,[d("a",{class:"link",href:l(pe)(l(n).link),"aria-label":((u=l(t).notFound)==null?void 0:u.linkLabel)??"go to home"},T(((b=l(t).notFound)==null?void 0:b.linkText)??"Take me home"),9,wt)])])}}}),It=y(St,[["__scopeId","data-v-6ff51ddd"]]);function Ee(e,t){if(Array.isArray(e))return X(e);if(e==null)return[];t=ce(t);const n=Object.keys(e).sort((o,a)=>a.split("/").length-o.split("/").length).find(o=>t.startsWith(ce(o))),s=n?e[n]:[];return Array.isArray(s)?X(s):X(s.items,s.base)}function Tt(e){const t=[];let n=0;for(const s in e){const o=e[s];if(o.items){n=t.push(o);continue}t[n]||t.push({items:[]}),t[n].items.push(o)}return t}function Mt(e){const t=[];function n(s){for(const o of s)o.text&&o.link&&t.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(e),t}function ue(e,t){return Array.isArray(t)?t.some(n=>ue(e,n)):W(e,t.link)?!0:t.items?ue(e,t.items):!1}function X(e,t){return[...e].map(n=>{const s={...n},o=s.base||t;return o&&s.link&&(s.link=o+s.link),s.items&&(s.items=X(s.items,o)),s})}function G(){const{frontmatter:e,page:t,theme:n}=S(),s=ie("(min-width: 960px)"),o=A(!1),a=x(()=>{const B=n.value.sidebar,w=t.value.relativePath;return B?Ee(B,w):[]}),i=A(a.value);q(a,(B,w)=>{JSON.stringify(B)!==JSON.stringify(w)&&(i.value=a.value)});const p=x(()=>e.value.sidebar!==!1&&i.value.length>0&&e.value.layout!=="home"),u=x(()=>b?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),b=x(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),f=x(()=>p.value&&s.value),v=x(()=>p.value?Tt(i.value):[]);function V(){o.value=!0}function $(){o.value=!1}function H(){o.value?$():V()}return{isOpen:o,sidebar:i,sidebarGroups:v,hasSidebar:p,hasAside:b,leftAside:u,isSidebarEnabled:f,open:V,close:$,toggle:H}}function Nt(e,t){let n;te(()=>{n=e.value?document.activeElement:void 0}),z(()=>{window.addEventListener("keyup",s)}),he(()=>{window.removeEventListener("keyup",s)});function s(o){o.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function At(e){const{page:t,hash:n}=S(),s=A(!1),o=x(()=>e.value.collapsed!=null),a=x(()=>!!e.value.link),i=A(!1),p=()=>{i.value=W(t.value.relativePath,e.value.link)};q([t,e,n],p),z(p);const u=x(()=>i.value?!0:e.value.items?ue(t.value.relativePath,e.value.items):!1),b=x(()=>!!(e.value.items&&e.value.items.length));te(()=>{s.value=!!(o.value&&e.value.collapsed)}),ve(()=>{(i.value||u.value)&&(s.value=!1)});function f(){o.value&&(s.value=!s.value)}return{collapsed:s,collapsible:o,isLink:a,isActiveLink:i,hasActiveLink:u,hasChildren:b,toggle:f}}function Ht(){const{hasSidebar:e}=G(),t=ie("(min-width: 960px)"),n=ie("(min-width: 1280px)");return{isAsideEnabled:x(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Bt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,de=[];function Fe(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function be(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{element:n,title:Ct(n),link:"#"+n.id,level:s}});return Et(t,e)}function Ct(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(Bt.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Et(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[s,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return Dt(e,s,o)}function Ft(e,t){const{isAsideEnabled:n}=Ht(),s=kt(a,100);let o=null;z(()=>{requestAnimationFrame(a),window.addEventListener("scroll",s)}),at(()=>{i(location.hash)}),he(()=>{window.removeEventListener("scroll",s)});function a(){if(!n.value)return;const p=window.scrollY,u=window.innerHeight,b=document.body.offsetHeight,f=Math.abs(p+u-b)<1,v=de.map(({element:$,link:H})=>({link:H,top:Ot($)})).filter(({top:$})=>!Number.isNaN($)).sort(($,H)=>$.top-H.top);if(!v.length){i(null);return}if(p<1){i(null);return}if(f){i(v[v.length-1].link);return}let V=null;for(const{link:$,top:H}of v){if(H>p+lt()+4)break;V=$}i(V)}function i(p){o&&o.classList.remove("active"),p==null?o=null:o=e.value.querySelector(`a[href="${decodeURIComponent(p)}"]`);const u=o;u?(u.classList.add("active"),t.value.style.top=u.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Ot(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Dt(e,t,n){de.length=0;const s=[],o=[];return e.forEach(a=>{const i={...a,children:[]};let p=o[o.length-1];for(;p&&p.level>=i.level;)o.pop(),p=o[o.length-1];if(i.element.classList.contains("ignore-header")||p&&"shouldIgnore"in p){o.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<t||(de.push({element:i.element,link:i.link}),p?p.children.push(i):s.push(i),o.push(i))}),s}const jt=["href","title"],qt=_({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const s=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(s));o==null||o.focus({preventScroll:!0})}return(n,s)=>{const o=J("VPDocOutlineItem",!0);return r(),c("ul",{class:C(["VPDocOutlineItem",e.root?"root":"nested"])},[(r(!0),c(M,null,E(e.headers,({children:a,link:i,title:p})=>(r(),c("li",null,[d("a",{class:"outline-link",href:i,onClick:t,title:p},T(p),9,jt),a!=null&&a.length?(r(),P(o,{key:0,headers:a},null,8,["headers"])):g("",!0)]))),256))],2)}}}),Oe=y(qt,[["__scopeId","data-v-53c99d69"]]),zt={class:"content"},Gt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Rt=_({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=S(),s=Ie([]);ne(()=>{s.value=be(t.value.outline??n.value.outline)});const o=A(),a=A();return Ft(o,a),(i,p)=>(r(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:o},[d("div",zt,[d("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),d("div",Gt,T(l(Fe)(l(n))),1),k(Oe,{headers:s.value,root:!0},null,8,["headers"])])],2))}}),Ut=y(Rt,[["__scopeId","data-v-f610f197"]]),Kt={class:"VPDocAsideCarbonAds"},Wt=_({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,s)=>(r(),c("div",Kt,[k(l(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Jt={class:"VPDocAside"},Yt=_({__name:"VPDocAside",setup(e){const{theme:t}=S();return(n,s)=>(r(),c("div",Jt,[m(n.$slots,"aside-top",{},void 0,!0),m(n.$slots,"aside-outline-before",{},void 0,!0),k(Ut),m(n.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=d("div",{class:"spacer"},null,-1)),m(n.$slots,"aside-ads-before",{},void 0,!0),l(t).carbonAds?(r(),P(Wt,{key:0,"carbon-ads":l(t).carbonAds},null,8,["carbon-ads"])):g("",!0),m(n.$slots,"aside-ads-after",{},void 0,!0),m(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Qt=y(Yt,[["__scopeId","data-v-cb998dce"]]);function Zt(){const{theme:e,page:t}=S();return x(()=>{const{text:n="Edit this page",pattern:s=""}=e.value.editLink||{};let o;return typeof s=="function"?o=s(t.value):o=s.replace(/:path/g,t.value.filePath),{url:o,text:n}})}function Xt(){const{page:e,theme:t,frontmatter:n}=S();return x(()=>{var b,f,v,V,$,H,B,w;const s=Ee(t.value.sidebar,e.value.relativePath),o=Mt(s),a=en(o,I=>I.link.replace(/[?#].*$/,"")),i=a.findIndex(I=>W(e.value.relativePath,I.link)),p=((b=t.value.docFooter)==null?void 0:b.prev)===!1&&!n.value.prev||n.value.prev===!1,u=((f=t.value.docFooter)==null?void 0:f.next)===!1&&!n.value.next||n.value.next===!1;return{prev:p?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((v=a[i-1])==null?void 0:v.docFooterText)??((V=a[i-1])==null?void 0:V.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??(($=a[i-1])==null?void 0:$.link)},next:u?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((H=a[i+1])==null?void 0:H.docFooterText)??((B=a[i+1])==null?void 0:B.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((w=a[i+1])==null?void 0:w.link)}}})}function en(e,t){const n=new Set;return e.filter(s=>{const o=t(s);return n.has(o)?!1:n.add(o)})}const j=_({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=x(()=>t.tag??(t.href?"a":"span")),s=x(()=>t.href&&Te.test(t.href)||t.target==="_blank");return(o,a)=>(r(),P(D(n.value),{class:C(["VPLink",{link:e.href,"vp-external-link-icon":s.value,"no-icon":e.noIcon}]),href:e.href?l(fe)(e.href):void 0,target:e.target??(s.value?"_blank":void 0),rel:e.rel??(s.value?"noreferrer":void 0)},{default:h(()=>[m(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),tn={class:"VPLastUpdated"},nn=["datetime"],sn=_({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:s}=S(),o=x(()=>new Date(n.value.lastUpdated)),a=x(()=>o.value.toISOString()),i=A("");return z(()=>{te(()=>{var p,u,b;i.value=new Intl.DateTimeFormat((u=(p=t.value.lastUpdated)==null?void 0:p.formatOptions)!=null&&u.forceLocale?s.value:void 0,((b=t.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(p,u)=>{var b;return r(),c("p",tn,[F(T(((b=l(t).lastUpdated)==null?void 0:b.text)||l(t).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:a.value},T(i.value),9,nn)])}}}),on=y(sn,[["__scopeId","data-v-1bb0c8a8"]]),rn={key:0,class:"VPDocFooter"},an={key:0,class:"edit-info"},ln={key:0,class:"edit-link"},cn={key:1,class:"last-updated"},un={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},dn={class:"pager"},mn=["innerHTML"],pn=["innerHTML"],hn={class:"pager"},vn=["innerHTML"],fn=["innerHTML"],bn=_({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:s}=S(),o=Zt(),a=Xt(),i=x(()=>t.value.editLink&&s.value.editLink!==!1),p=x(()=>n.value.lastUpdated),u=x(()=>i.value||p.value||a.value.prev||a.value.next);return(b,f)=>{var v,V,$,H;return u.value?(r(),c("footer",rn,[m(b.$slots,"doc-footer-before",{},void 0,!0),i.value||p.value?(r(),c("div",an,[i.value?(r(),c("div",ln,[k(j,{class:"edit-link-button",href:l(o).url,"no-icon":!0},{default:h(()=>[f[0]||(f[0]=d("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),F(" "+T(l(o).text),1)]),_:1},8,["href"])])):g("",!0),p.value?(r(),c("div",cn,[k(on)])):g("",!0)])):g("",!0),(v=l(a).prev)!=null&&v.link||(V=l(a).next)!=null&&V.link?(r(),c("nav",un,[f[1]||(f[1]=d("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),d("div",dn,[($=l(a).prev)!=null&&$.link?(r(),P(j,{key:0,class:"pager-link prev",href:l(a).prev.link},{default:h(()=>{var B;return[d("span",{class:"desc",innerHTML:((B=l(t).docFooter)==null?void 0:B.prev)||"Previous page"},null,8,mn),d("span",{class:"title",innerHTML:l(a).prev.text},null,8,pn)]}),_:1},8,["href"])):g("",!0)]),d("div",hn,[(H=l(a).next)!=null&&H.link?(r(),P(j,{key:0,class:"pager-link next",href:l(a).next.link},{default:h(()=>{var B;return[d("span",{class:"desc",innerHTML:((B=l(t).docFooter)==null?void 0:B.next)||"Next page"},null,8,vn),d("span",{class:"title",innerHTML:l(a).next.text},null,8,fn)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),gn=y(bn,[["__scopeId","data-v-1bcd8184"]]),_n={class:"container"},kn={class:"aside-container"},yn={class:"aside-content"},$n={class:"content"},Pn={class:"content-container"},Ln={class:"main"},xn=_({__name:"VPDoc",setup(e){const{theme:t}=S(),n=se(),{hasSidebar:s,hasAside:o,leftAside:a}=G(),i=x(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(p,u)=>{const b=J("Content");return r(),c("div",{class:C(["VPDoc",{"has-sidebar":l(s),"has-aside":l(o)}])},[m(p.$slots,"doc-top",{},void 0,!0),d("div",_n,[l(o)?(r(),c("div",{key:0,class:C(["aside",{"left-aside":l(a)}])},[u[0]||(u[0]=d("div",{class:"aside-curtain"},null,-1)),d("div",kn,[d("div",yn,[k(Qt,null,{"aside-top":h(()=>[m(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[m(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[m(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),d("div",$n,[d("div",Pn,[m(p.$slots,"doc-before",{},void 0,!0),d("main",Ln,[k(b,{class:C(["vp-doc",[i.value,l(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(gn,null,{"doc-footer-before":h(()=>[m(p.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),m(p.$slots,"doc-after",{},void 0,!0)])])]),m(p.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Vn=y(xn,[["__scopeId","data-v-e6f2a212"]]),wn=_({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=x(()=>t.href&&Te.test(t.href)),s=x(()=>t.tag||(t.href?"a":"button"));return(o,a)=>(r(),P(D(s.value),{class:C(["VPButton",[e.size,e.theme]]),href:e.href?l(fe)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[F(T(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),Sn=y(wn,[["__scopeId","data-v-93dc4167"]]),In=["src","alt"],Tn=_({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const s=J("VPImage",!0);return e.image?(r(),c(M,{key:0},[typeof e.image=="string"||"src"in e.image?(r(),c("img",U({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:l(pe)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,In)):(r(),c(M,{key:1},[k(s,U({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),k(s,U({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),ee=y(Tn,[["__scopeId","data-v-ab19afbb"]]),Mn={class:"container"},Nn={class:"main"},An={class:"heading"},Hn=["innerHTML"],Bn=["innerHTML"],Cn=["innerHTML"],En={key:0,class:"actions"},Fn={key:0,class:"image"},On={class:"image-container"},Dn=_({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=oe("hero-image-slot-exists");return(n,s)=>(r(),c("div",{class:C(["VPHero",{"has-image":e.image||l(t)}])},[d("div",Mn,[d("div",Nn,[m(n.$slots,"home-hero-info-before",{},void 0,!0),m(n.$slots,"home-hero-info",{},()=>[d("h1",An,[e.name?(r(),c("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Hn)):g("",!0),e.text?(r(),c("span",{key:1,innerHTML:e.text,class:"text"},null,8,Bn)):g("",!0)]),e.tagline?(r(),c("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Cn)):g("",!0)],!0),m(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(r(),c("div",En,[(r(!0),c(M,null,E(e.actions,o=>(r(),c("div",{key:o.link,class:"action"},[k(Sn,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),m(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||l(t)?(r(),c("div",Fn,[d("div",On,[s[0]||(s[0]=d("div",{class:"image-bg"},null,-1)),m(n.$slots,"home-hero-image",{},()=>[e.image?(r(),P(ee,{key:0,class:"image-src",image:e.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),jn=y(Dn,[["__scopeId","data-v-dd8814ff"]]),qn=_({__name:"VPHomeHero",setup(e){const{frontmatter:t}=S();return(n,s)=>l(t).hero?(r(),P(jn,{key:0,class:"VPHomeHero",name:l(t).hero.name,text:l(t).hero.text,tagline:l(t).hero.tagline,image:l(t).hero.image,actions:l(t).hero.actions},{"home-hero-info-before":h(()=>[m(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[m(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[m(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[m(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[m(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),zn={class:"box"},Gn={key:0,class:"icon"},Rn=["innerHTML"],Un=["innerHTML"],Kn=["innerHTML"],Wn={key:4,class:"link-text"},Jn={class:"link-text-value"},Yn=_({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(r(),P(j,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[d("article",zn,[typeof e.icon=="object"&&e.icon.wrap?(r(),c("div",Gn,[k(ee,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(r(),P(ee,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(r(),c("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Rn)):g("",!0),d("h2",{class:"title",innerHTML:e.title},null,8,Un),e.details?(r(),c("p",{key:3,class:"details",innerHTML:e.details},null,8,Kn)):g("",!0),e.linkText?(r(),c("div",Wn,[d("p",Jn,[F(T(e.linkText)+" ",1),n[0]||(n[0]=d("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Qn=y(Yn,[["__scopeId","data-v-bd37d1a2"]]),Zn={key:0,class:"VPFeatures"},Xn={class:"container"},es={class:"items"},ts=_({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=x(()=>{const s=t.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,o)=>e.features?(r(),c("div",Zn,[d("div",Xn,[d("div",es,[(r(!0),c(M,null,E(e.features,a=>(r(),c("div",{key:a.title,class:C(["item",[n.value]])},[k(Qn,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),ns=y(ts,[["__scopeId","data-v-b1eea84a"]]),ss=_({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=S();return(n,s)=>l(t).features?(r(),P(ns,{key:0,class:"VPHomeFeatures",features:l(t).features},null,8,["features"])):g("",!0)}}),os=_({__name:"VPHomeContent",setup(e){const{width:t}=it({initialWidth:0,includeScrollbar:!1});return(n,s)=>(r(),c("div",{class:"vp-doc container",style:Me(l(t)?{"--vp-offset":`calc(50% - ${l(t)/2}px)`}:{})},[m(n.$slots,"default",{},void 0,!0)],4))}}),rs=y(os,[["__scopeId","data-v-c141a4bd"]]),as=_({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=S();return(s,o)=>{const a=J("Content");return r(),c("div",{class:C(["VPHome",{"external-link-icon-enabled":l(n).externalLinkIcon}])},[m(s.$slots,"home-hero-before",{},void 0,!0),k(qn,null,{"home-hero-info-before":h(()=>[m(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),m(s.$slots,"home-hero-after",{},void 0,!0),m(s.$slots,"home-features-before",{},void 0,!0),k(ss),m(s.$slots,"home-features-after",{},void 0,!0),l(t).markdownStyles!==!1?(r(),P(rs,{key:0},{default:h(()=>[k(a)]),_:1})):(r(),P(a,{key:1}))],2)}}}),ls=y(as,[["__scopeId","data-v-e07eaea7"]]),is={},cs={class:"VPPage"};function us(e,t){const n=J("Content");return r(),c("div",cs,[m(e.$slots,"page-top"),k(n),m(e.$slots,"page-bottom")])}const ds=y(is,[["render",us]]),ms=_({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=S(),{hasSidebar:s}=G();return(o,a)=>(r(),c("div",{class:C(["VPContent",{"has-sidebar":l(s),"is-home":l(n).layout==="home"}]),id:"VPContent"},[l(t).isNotFound?m(o.$slots,"not-found",{},()=>[k(It)],!0,0):l(n).layout==="page"?(r(),P(ds,{key:1},{"page-top":h(()=>[m(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[m(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(n).layout==="home"?(r(),P(ls,{key:2},{"home-hero-before":h(()=>[m(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[m(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[m(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[m(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[m(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(n).layout&&l(n).layout!=="doc"?(r(),P(D(l(n).layout),{key:3})):(r(),P(Vn,{key:4},{"doc-top":h(()=>[m(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[m(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[m(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[m(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[m(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[m(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[m(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[m(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ps=y(ms,[["__scopeId","data-v-9a6c75ad"]]),hs={class:"container"},vs=["innerHTML"],fs=["innerHTML"],bs=_({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=S(),{hasSidebar:s}=G();return(o,a)=>l(t).footer&&l(n).footer!==!1?(r(),c("footer",{key:0,class:C(["VPFooter",{"has-sidebar":l(s)}])},[d("div",hs,[l(t).footer.message?(r(),c("p",{key:0,class:"message",innerHTML:l(t).footer.message},null,8,vs)):g("",!0),l(t).footer.copyright?(r(),c("p",{key:1,class:"copyright",innerHTML:l(t).footer.copyright},null,8,fs)):g("",!0)])],2)):g("",!0)}}),gs=y(bs,[["__scopeId","data-v-566314d4"]]);function _s(){const{theme:e,frontmatter:t}=S(),n=Ie([]),s=x(()=>n.value.length>0);return ne(()=>{n.value=be(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:s}}const ks={class:"menu-text"},ys={class:"header"},$s={class:"outline"},Ps=_({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=S(),s=A(!1),o=A(0),a=A(),i=A();function p(v){var V;(V=a.value)!=null&&V.contains(v.target)||(s.value=!1)}q(s,v=>{if(v){document.addEventListener("click",p);return}document.removeEventListener("click",p)}),ct("Escape",()=>{s.value=!1}),ne(()=>{s.value=!1});function u(){s.value=!s.value,o.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function b(v){v.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Ne(()=>{s.value=!1}))}function f(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,V)=>(r(),c("div",{class:"VPLocalNavOutlineDropdown",style:Me({"--vp-vh":o.value+"px"}),ref_key:"main",ref:a},[e.headers.length>0?(r(),c("button",{key:0,onClick:u,class:C({open:s.value})},[d("span",ks,T(l(Fe)(l(n))),1),V[0]||(V[0]=d("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),c("button",{key:1,onClick:f},T(l(n).returnToTopLabel||"Return to top"),1)),k(me,{name:"flyout"},{default:h(()=>[s.value?(r(),c("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:b},[d("div",ys,[d("a",{class:"top-link",href:"#",onClick:f},T(l(n).returnToTopLabel||"Return to top"),1)]),d("div",$s,[k(Oe,{headers:e.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),Ls=y(Ps,[["__scopeId","data-v-6b867909"]]),xs={class:"container"},Vs=["aria-expanded"],ws={class:"menu-text"},Ss=_({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=S(),{hasSidebar:s}=G(),{headers:o}=_s(),{y:a}=Ae(),i=A(0);z(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ne(()=>{o.value=be(n.value.outline??t.value.outline)});const p=x(()=>o.value.length===0),u=x(()=>p.value&&!s.value),b=x(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:p.value,fixed:u.value}));return(f,v)=>l(n).layout!=="home"&&(!u.value||l(a)>=i.value)?(r(),c("div",{key:0,class:C(b.value)},[d("div",xs,[l(s)?(r(),c("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=V=>f.$emit("open-menu"))},[v[1]||(v[1]=d("span",{class:"vpi-align-left menu-icon"},null,-1)),d("span",ws,T(l(t).sidebarMenuLabel||"Menu"),1)],8,Vs)):g("",!0),k(Ls,{headers:l(o),navHeight:i.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),Is=y(Ss,[["__scopeId","data-v-2488c25a"]]);function Ts(){const e=A(!1);function t(){e.value=!0,window.addEventListener("resize",o)}function n(){e.value=!1,window.removeEventListener("resize",o)}function s(){e.value?n():t()}function o(){window.outerWidth>=768&&n()}const a=se();return q(()=>a.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:s}}const Ms={},Ns={class:"VPSwitch",type:"button",role:"switch"},As={class:"check"},Hs={key:0,class:"icon"};function Bs(e,t){return r(),c("button",Ns,[d("span",As,[e.$slots.default?(r(),c("span",Hs,[m(e.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Cs=y(Ms,[["render",Bs],["__scopeId","data-v-b4ccac88"]]),Es=_({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=S(),s=oe("toggle-appearance",()=>{t.value=!t.value}),o=A("");return ve(()=>{o.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(a,i)=>(r(),P(Cs,{title:o.value,class:"VPSwitchAppearance","aria-checked":l(t),onClick:l(s)},{default:h(()=>[...i[0]||(i[0]=[d("span",{class:"vpi-sun sun"},null,-1),d("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),ge=y(Es,[["__scopeId","data-v-be9742d9"]]),Fs={key:0,class:"VPNavBarAppearance"},Os=_({__name:"VPNavBarAppearance",setup(e){const{site:t}=S();return(n,s)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(r(),c("div",Fs,[k(ge)])):g("",!0)}}),Ds=y(Os,[["__scopeId","data-v-3f90c1a5"]]),_e=A();let De=!1,le=0;function js(e){const t=A(!1);if(re){!De&&qs(),le++;const n=q(_e,s=>{var o,a,i;s===e.el.value||(o=e.el.value)!=null&&o.contains(s)?(t.value=!0,(a=e.onFocus)==null||a.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});he(()=>{n(),le--,le||zs()})}return ut(t)}function qs(){document.addEventListener("focusin",je),De=!0,_e.value=document.activeElement}function zs(){document.removeEventListener("focusin",je)}function je(){_e.value=document.activeElement}const Gs={class:"VPMenuLink"},Rs=["innerHTML"],Us=_({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=S();return(n,s)=>(r(),c("div",Gs,[k(j,{class:C({active:l(W)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,Rs)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ae=y(Us,[["__scopeId","data-v-7eeeb2dc"]]),Ks={class:"VPMenuGroup"},Ws={key:0,class:"title"},Js=_({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(r(),c("div",Ks,[e.text?(r(),c("p",Ws,T(e.text),1)):g("",!0),(r(!0),c(M,null,E(e.items,s=>(r(),c(M,null,["link"in s?(r(),P(ae,{key:0,item:s},null,8,["item"])):g("",!0)],64))),256))]))}}),Ys=y(Js,[["__scopeId","data-v-a6b0397c"]]),Qs={class:"VPMenu"},Zs={key:0,class:"items"},Xs=_({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(r(),c("div",Qs,[e.items?(r(),c("div",Zs,[(r(!0),c(M,null,E(e.items,s=>(r(),c(M,{key:JSON.stringify(s)},["link"in s?(r(),P(ae,{key:0,item:s},null,8,["item"])):"component"in s?(r(),P(D(s.component),U({key:1,ref_for:!0},s.props),null,16)):(r(),P(Ys,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0),m(t.$slots,"default",{},void 0,!0)]))}}),eo=y(Xs,[["__scopeId","data-v-20ed86d6"]]),to=["aria-expanded","aria-label"],no={key:0,class:"text"},so=["innerHTML"],oo={key:1,class:"vpi-more-horizontal icon"},ro={class:"menu"},ao=_({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=A(!1),n=A();js({el:n,onBlur:s});function s(){t.value=!1}return(o,a)=>(r(),c("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:a[1]||(a[1]=i=>t.value=!0),onMouseleave:a[2]||(a[2]=i=>t.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:a[0]||(a[0]=i=>t.value=!t.value)},[e.button||e.icon?(r(),c("span",no,[e.icon?(r(),c("span",{key:0,class:C([e.icon,"option-icon"])},null,2)):g("",!0),e.button?(r(),c("span",{key:1,innerHTML:e.button},null,8,so)):g("",!0),a[3]||(a[3]=d("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),c("span",oo))],8,to),d("div",ro,[k(eo,{items:e.items},{default:h(()=>[m(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ke=y(ao,[["__scopeId","data-v-bfe7971f"]]),lo=["href","aria-label","innerHTML"],io=_({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=A();z(async()=>{var a;await Ne();const o=(a=n.value)==null?void 0:a.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const s=x(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(o,a)=>(r(),c("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,lo))}}),co=y(io,[["__scopeId","data-v-60a9a2d3"]]),uo={class:"VPSocialLinks"},mo=_({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(r(),c("div",uo,[(r(!0),c(M,null,E(e.links,({link:s,icon:o,ariaLabel:a})=>(r(),P(co,{key:s,icon:o,link:s,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),ye=y(mo,[["__scopeId","data-v-e71e869c"]]),po={key:0,class:"group translations"},ho={class:"trans-title"},vo={key:1,class:"group"},fo={class:"item appearance"},bo={class:"label"},go={class:"appearance-action"},_o={key:2,class:"group"},ko={class:"item social-links"},yo=_({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=S(),{localeLinks:s,currentLang:o}=Z({correspondingLink:!0}),a=x(()=>s.value.length&&o.value.label||t.value.appearance||n.value.socialLinks);return(i,p)=>a.value?(r(),P(ke,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[l(s).length&&l(o).label?(r(),c("div",po,[d("p",ho,T(l(o).label),1),(r(!0),c(M,null,E(l(s),u=>(r(),P(ae,{key:u.link,item:u},null,8,["item"]))),128))])):g("",!0),l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(r(),c("div",vo,[d("div",fo,[d("p",bo,T(l(n).darkModeSwitchLabel||"Appearance"),1),d("div",go,[k(ge)])])])):g("",!0),l(n).socialLinks?(r(),c("div",_o,[d("div",ko,[k(ye,{class:"social-links-list",links:l(n).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),$o=y(yo,[["__scopeId","data-v-f953d92f"]]),Po=["aria-expanded"],Lo=_({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(r(),c("button",{type:"button",class:C(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)])],10,Po))}}),xo=y(Lo,[["__scopeId","data-v-6bee1efd"]]),Vo=["innerHTML"],wo=_({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=S();return(n,s)=>(r(),P(j,{class:C({VPNavBarMenuLink:!0,active:l(W)(l(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,Vo)]),_:1},8,["class","href","target","rel","no-icon"]))}}),So=y(wo,[["__scopeId","data-v-815115f5"]]),Io=_({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=S(),s=a=>"component"in a?!1:"link"in a?W(n.value.relativePath,a.link,!!t.item.activeMatch):a.items.some(s),o=x(()=>s(t.item));return(a,i)=>(r(),P(ke,{class:C({VPNavBarMenuGroup:!0,active:l(W)(l(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||o.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),To={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Mo=_({__name:"VPNavBarMenu",setup(e){const{theme:t}=S();return(n,s)=>l(t).nav?(r(),c("nav",To,[s[0]||(s[0]=d("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),c(M,null,E(l(t).nav,o=>(r(),c(M,{key:JSON.stringify(o)},["link"in o?(r(),P(So,{key:0,item:o},null,8,["item"])):"component"in o?(r(),P(D(o.component),U({key:1,ref_for:!0},o.props),null,16)):(r(),P(Io,{key:2,item:o},null,8,["item"]))],64))),128))])):g("",!0)}}),No=y(Mo,[["__scopeId","data-v-afb2845e"]]);function Ao(e){const{localeIndex:t,theme:n}=S();function s(o){var H,B,w;const a=o.split("."),i=(H=n.value.search)==null?void 0:H.options,p=i&&typeof i=="object",u=p&&((w=(B=i.locales)==null?void 0:B[t.value])==null?void 0:w.translations)||null,b=p&&i.translations||null;let f=u,v=b,V=e;const $=a.pop();for(const I of a){let L=null;const N=V==null?void 0:V[I];N&&(L=V=N);const O=v==null?void 0:v[I];O&&(L=v=O);const R=f==null?void 0:f[I];R&&(L=f=R),N||(V=L),O||(v=L),R||(f=L)}return(f==null?void 0:f[$])??(v==null?void 0:v[$])??(V==null?void 0:V[$])??""}return s}const Ho=["aria-label"],Bo={class:"DocSearch-Button-Container"},Co={class:"DocSearch-Button-Placeholder"},Le=_({__name:"VPNavBarSearchButton",setup(e){const n=Ao({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,o)=>(r(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(n)("button.buttonAriaLabel")},[d("span",Bo,[o[0]||(o[0]=d("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),d("span",Co,T(l(n)("button.buttonText")),1)]),o[1]||(o[1]=d("span",{class:"DocSearch-Button-Keys"},[d("kbd",{class:"DocSearch-Button-Key"}),d("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Ho))}}),Eo={class:"VPNavBarSearch"},Fo={id:"local-search"},Oo={key:1,id:"docsearch"},Do=_({__name:"VPNavBarSearch",setup(e){const t=()=>null,n=()=>null,{theme:s}=S(),o=A(!1),a=A(!1);z(()=>{});function i(){o.value||(o.value=!0,setTimeout(p,16))}function p(){const f=new Event("keydown");f.key="k",f.metaKey=!0,window.dispatchEvent(f),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||p()},16)}const u=A(!1),b="";return(f,v)=>{var V;return r(),c("div",Eo,[l(b)==="local"?(r(),c(M,{key:0},[u.value?(r(),P(l(t),{key:0,onClose:v[0]||(v[0]=$=>u.value=!1)})):g("",!0),d("div",Fo,[k(Le,{onClick:v[1]||(v[1]=$=>u.value=!0)})])],64)):l(b)==="algolia"?(r(),c(M,{key:1},[o.value?(r(),P(l(n),{key:0,algolia:((V=l(s).search)==null?void 0:V.options)??l(s).algolia,onVnodeBeforeMount:v[2]||(v[2]=$=>a.value=!0)},null,8,["algolia"])):g("",!0),a.value?g("",!0):(r(),c("div",Oo,[k(Le,{onClick:i})]))],64)):g("",!0)])}}}),jo=_({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=S();return(n,s)=>l(t).socialLinks?(r(),P(ye,{key:0,class:"VPNavBarSocialLinks",links:l(t).socialLinks},null,8,["links"])):g("",!0)}}),qo=y(jo,[["__scopeId","data-v-ef6192dc"]]),zo=["href","rel","target"],Go=["innerHTML"],Ro={key:2},Uo=_({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=S(),{hasSidebar:s}=G(),{currentLang:o}=Z(),a=x(()=>{var u;return typeof n.value.logoLink=="string"?n.value.logoLink:(u=n.value.logoLink)==null?void 0:u.link}),i=x(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.rel}),p=x(()=>{var u;return typeof n.value.logoLink=="string"||(u=n.value.logoLink)==null?void 0:u.target});return(u,b)=>(r(),c("div",{class:C(["VPNavBarTitle",{"has-sidebar":l(s)}])},[d("a",{class:"title",href:a.value??l(fe)(l(o).link),rel:i.value,target:p.value},[m(u.$slots,"nav-bar-title-before",{},void 0,!0),l(n).logo?(r(),P(ee,{key:0,class:"logo",image:l(n).logo},null,8,["image"])):g("",!0),l(n).siteTitle?(r(),c("span",{key:1,innerHTML:l(n).siteTitle},null,8,Go)):l(n).siteTitle===void 0?(r(),c("span",Ro,T(l(t).title),1)):g("",!0),m(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,zo)],2))}}),Ko=y(Uo,[["__scopeId","data-v-9f43907a"]]),Wo={class:"items"},Jo={class:"title"},Yo=_({__name:"VPNavBarTranslations",setup(e){const{theme:t}=S(),{localeLinks:n,currentLang:s}=Z({correspondingLink:!0});return(o,a)=>l(n).length&&l(s).label?(r(),P(ke,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(t).langMenuLabel||"Change language"},{default:h(()=>[d("div",Wo,[d("p",Jo,T(l(s).label),1),(r(!0),c(M,null,E(l(n),i=>(r(),P(ae,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),Qo=y(Yo,[["__scopeId","data-v-acee064b"]]),Zo={class:"wrapper"},Xo={class:"container"},er={class:"title"},tr={class:"content"},nr={class:"content-body"},sr=_({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Ae(),{hasSidebar:s}=G(),{frontmatter:o}=S(),a=A({});return ve(()=>{a.value={"has-sidebar":s.value,home:o.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(i,p)=>(r(),c("div",{class:C(["VPNavBar",a.value])},[d("div",Zo,[d("div",Xo,[d("div",er,[k(Ko,null,{"nav-bar-title-before":h(()=>[m(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",tr,[d("div",nr,[m(i.$slots,"nav-bar-content-before",{},void 0,!0),k(Do,{class:"search"}),k(No,{class:"menu"}),k(Qo,{class:"translations"}),k(Ds,{class:"appearance"}),k(qo,{class:"social-links"}),k($o,{class:"extra"}),m(i.$slots,"nav-bar-content-after",{},void 0,!0),k(xo,{class:"hamburger",active:e.isScreenOpen,onClick:p[0]||(p[0]=u=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),p[1]||(p[1]=d("div",{class:"divider"},[d("div",{class:"divider-line"})],-1))],2))}}),or=y(sr,[["__scopeId","data-v-9fd4d1dd"]]),rr={key:0,class:"VPNavScreenAppearance"},ar={class:"text"},lr=_({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=S();return(s,o)=>l(t).appearance&&l(t).appearance!=="force-dark"&&l(t).appearance!=="force-auto"?(r(),c("div",rr,[d("p",ar,T(l(n).darkModeSwitchLabel||"Appearance"),1),k(ge)])):g("",!0)}}),ir=y(lr,[["__scopeId","data-v-a3e2920d"]]),cr=["innerHTML"],ur=_({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=oe("close-screen");return(n,s)=>(r(),P(j,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,cr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),dr=y(ur,[["__scopeId","data-v-fa963d97"]]),mr=["innerHTML"],pr=_({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=oe("close-screen");return(n,s)=>(r(),P(j,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:l(t)},{default:h(()=>[d("span",{innerHTML:e.item.text},null,8,mr)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),qe=y(pr,[["__scopeId","data-v-e04f3e85"]]),hr={class:"VPNavScreenMenuGroupSection"},vr={key:0,class:"title"},fr=_({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(r(),c("div",hr,[e.text?(r(),c("p",vr,T(e.text),1)):g("",!0),(r(!0),c(M,null,E(e.items,s=>(r(),P(qe,{key:s.text,item:s},null,8,["item"]))),128))]))}}),br=y(fr,[["__scopeId","data-v-f60dbfa7"]]),gr=["aria-controls","aria-expanded"],_r=["innerHTML"],kr=["id"],yr={key:0,class:"item"},$r={key:1,class:"item"},Pr={key:2,class:"group"},Lr=_({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=A(!1),s=x(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(a,i)=>(r(),c("div",{class:C(["VPNavScreenMenuGroup",{open:n.value}])},[d("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:o},[d("span",{class:"button-text",innerHTML:e.text},null,8,_r),i[0]||(i[0]=d("span",{class:"vpi-plus button-icon"},null,-1))],8,gr),d("div",{id:s.value,class:"items"},[(r(!0),c(M,null,E(e.items,p=>(r(),c(M,{key:JSON.stringify(p)},["link"in p?(r(),c("div",yr,[k(qe,{item:p},null,8,["item"])])):"component"in p?(r(),c("div",$r,[(r(),P(D(p.component),U({ref_for:!0},p.props,{"screen-menu":""}),null,16))])):(r(),c("div",Pr,[k(br,{text:p.text,items:p.items},null,8,["text","items"])]))],64))),128))],8,kr)],2))}}),xr=y(Lr,[["__scopeId","data-v-d99bfeec"]]),Vr={key:0,class:"VPNavScreenMenu"},wr=_({__name:"VPNavScreenMenu",setup(e){const{theme:t}=S();return(n,s)=>l(t).nav?(r(),c("nav",Vr,[(r(!0),c(M,null,E(l(t).nav,o=>(r(),c(M,{key:JSON.stringify(o)},["link"in o?(r(),P(dr,{key:0,item:o},null,8,["item"])):"component"in o?(r(),P(D(o.component),U({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(r(),P(xr,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),Sr=_({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=S();return(n,s)=>l(t).socialLinks?(r(),P(ye,{key:0,class:"VPNavScreenSocialLinks",links:l(t).socialLinks},null,8,["links"])):g("",!0)}}),Ir={class:"list"},Tr=_({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Z({correspondingLink:!0}),s=A(!1);function o(){s.value=!s.value}return(a,i)=>l(t).length&&l(n).label?(r(),c("div",{key:0,class:C(["VPNavScreenTranslations",{open:s.value}])},[d("button",{class:"title",onClick:o},[i[0]||(i[0]=d("span",{class:"vpi-languages icon lang"},null,-1)),F(" "+T(l(n).label)+" ",1),i[1]||(i[1]=d("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),d("ul",Ir,[(r(!0),c(M,null,E(l(t),p=>(r(),c("li",{key:p.link,class:"item"},[k(j,{class:"link",href:p.link},{default:h(()=>[F(T(p.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),Mr=y(Tr,[["__scopeId","data-v-516e4bc3"]]),Nr={class:"container"},Ar=_({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=A(null),n=He(re?document.body:null);return(s,o)=>(r(),P(me,{name:"fade",onEnter:o[0]||(o[0]=a=>n.value=!0),onAfterLeave:o[1]||(o[1]=a=>n.value=!1)},{default:h(()=>[e.open?(r(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[d("div",Nr,[m(s.$slots,"nav-screen-content-before",{},void 0,!0),k(wr,{class:"menu"}),k(Mr,{class:"translations"}),k(ir,{class:"appearance"}),k(Sr,{class:"social-links"}),m(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),Hr=y(Ar,[["__scopeId","data-v-2dd6d0c7"]]),Br={key:0,class:"VPNav"},Cr=_({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:s}=Ts(),{frontmatter:o}=S(),a=x(()=>o.value.navbar!==!1);return Be("close-screen",n),te(()=>{re&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(i,p)=>a.value?(r(),c("header",Br,[k(or,{"is-screen-open":l(t),onToggleScreen:l(s)},{"nav-bar-title-before":h(()=>[m(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[m(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[m(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(Hr,{open:l(t)},{"nav-screen-content-before":h(()=>[m(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[m(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),Er=y(Cr,[["__scopeId","data-v-7ad780c2"]]),Fr=["role","tabindex"],Or={key:1,class:"items"},Dr=_({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:s,isLink:o,isActiveLink:a,hasActiveLink:i,hasChildren:p,toggle:u}=At(x(()=>t.item)),b=x(()=>p.value?"section":"div"),f=x(()=>o.value?"a":"div"),v=x(()=>p.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),V=x(()=>o.value?void 0:"button"),$=x(()=>[[`level-${t.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":o.value},{"is-active":a.value},{"has-active":i.value}]);function H(w){"key"in w&&w.key!=="Enter"||!t.item.link&&u()}function B(){t.item.link&&u()}return(w,I)=>{const L=J("VPSidebarItem",!0);return r(),P(D(b.value),{class:C(["VPSidebarItem",$.value])},{default:h(()=>[e.item.text?(r(),c("div",U({key:0,class:"item",role:V.value},dt(e.item.items?{click:H,keydown:H}:{},!0),{tabindex:e.item.items&&0}),[I[1]||(I[1]=d("div",{class:"indicator"},null,-1)),e.item.link?(r(),P(j,{key:0,tag:f.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:h(()=>[(r(),P(D(v.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),P(D(v.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(r(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:B,onKeydown:mt(B,["enter"]),tabindex:"0"},[...I[0]||(I[0]=[d("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,Fr)):g("",!0),e.item.items&&e.item.items.length?(r(),c("div",Or,[e.depth<5?(r(!0),c(M,{key:0},E(e.item.items,N=>(r(),P(L,{key:N.text,item:N,depth:e.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),jr=y(Dr,[["__scopeId","data-v-0009425e"]]),qr=_({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=A(!0);let n=null;return z(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),Ce(()=>{n!=null&&(clearTimeout(n),n=null)}),(s,o)=>(r(!0),c(M,null,E(e.items,a=>(r(),c("div",{key:a.text,class:C(["group",{"no-transition":t.value}])},[k(jr,{item:a,depth:0},null,8,["item"])],2))),128))}}),zr=y(qr,[["__scopeId","data-v-51288d80"]]),Gr={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Rr=_({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=G(),s=e,o=A(null),a=He(re?document.body:null);q([s,o],()=>{var p;s.open?(a.value=!0,(p=o.value)==null||p.focus()):a.value=!1},{immediate:!0,flush:"post"});const i=A(0);return q(t,()=>{i.value+=1},{deep:!0}),(p,u)=>l(n)?(r(),c("aside",{key:0,class:C(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:o,onClick:u[0]||(u[0]=pt(()=>{},["stop"]))},[u[2]||(u[2]=d("div",{class:"curtain"},null,-1)),d("nav",Gr,[u[1]||(u[1]=d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),m(p.$slots,"sidebar-nav-before",{},void 0,!0),(r(),P(zr,{items:l(t),key:i.value},null,8,["items"])),m(p.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Ur=y(Rr,[["__scopeId","data-v-42c4c606"]]),Kr=_({__name:"VPSkipLink",setup(e){const{theme:t}=S(),n=se(),s=A();q(()=>n.path,()=>s.value.focus());function o({target:a}){const i=document.getElementById(decodeURIComponent(a.hash).slice(1));if(i){const p=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",p)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",p),i.focus(),window.scrollTo(0,0)}}return(a,i)=>(r(),c(M,null,[d("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},T(l(t).skipToContentLabel||"Skip to content"),1)],64))}}),Wr=y(Kr,[["__scopeId","data-v-fcbfc0e0"]]),Jr=_({__name:"Layout",setup(e){const{isOpen:t,open:n,close:s}=G(),o=se();q(()=>o.path,s),Nt(t,s);const{frontmatter:a}=S(),i=ht(),p=x(()=>!!i["home-hero-image"]);return Be("hero-image-slot-exists",p),(u,b)=>{const f=J("Content");return l(a).layout!==!1?(r(),c("div",{key:0,class:C(["Layout",l(a).pageClass])},[m(u.$slots,"layout-top",{},void 0,!0),k(Wr),k(_t,{class:"backdrop",show:l(t),onClick:l(s)},null,8,["show","onClick"]),k(Er,null,{"nav-bar-title-before":h(()=>[m(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[m(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[m(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[m(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[m(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[m(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(Is,{open:l(t),onOpenMenu:l(n)},null,8,["open","onOpenMenu"]),k(Ur,{open:l(t)},{"sidebar-nav-before":h(()=>[m(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[m(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(ps,null,{"page-top":h(()=>[m(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[m(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[m(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[m(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[m(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[m(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[m(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[m(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[m(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[m(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[m(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[m(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[m(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[m(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[m(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[m(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[m(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[m(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[m(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[m(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[m(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[m(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[m(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(gs),m(u.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),P(f,{key:1}))}}}),Yr=y(Jr,[["__scopeId","data-v-d8b57b2d"]]),xe={Layout:Yr,enhanceApp:({app:e})=>{e.component("Badge",ft)}},ze=`---\r
title: RAG\r
date: 2026-10-14\r
categories:\r
  - RAG\r
tags:\r
  - RAG\r
description: RAG学习\r
---\r
## RAG开发（retrieval-argumented generation 检索增强生成）一个完整的流水线包含的步骤。\r
> local document -> unstruncted loader -> text -> text chunks -> embedding（将文本转为向量）-> 存入向量数据库\r
> QUERY -> embedding（将搜索关键词转为向量） -> QUERY VECTOR -> 对比向量数据库中与生成的这个query vector得相似度（返回）\r
> 根据prompt template 将检索出来的语料结合，返回一个prompt 给llm\r
> 这样就会得到一个更为准确得答案\r
\r
### 知识更新 & 知识检索\r
中间涉及到【文件解析】【文件切割】【知识检索】【知识rerank（不一定用）】\r
\r
### RAG主要解决了什么问题？\r
- 解决了幻觉问题：llm有幻觉，她通过搜索相似的内容，并拼接在prompt中会让回答更加准确一些。\r
- 解决信息不是最新的问题：她大多回答会取决于训练数据的时效性\r
- 解决了从头训练或者微调，直接为大模型接了个外机知识库\r
但其实现在很少用了，1. 上下文窗口已经很大了，幻觉和性能瓶颈有很多问题，比如对于文档的读取，切片等等处理有瓶颈。2.维护成本比较高，准确率需要引进更多的技术解决。\r
agent多了更多的新内容，比如工具调用等等又快又能减少一些额外开发。\r
但对于海量动态数据以及数据隐私的场景，rag还是核心技术。\r
\r
\r
`,Ge=`---\r
title: Agent\r
date: 2026-10-14\r
categories:\r
  - Agent\r
tags:\r
  - Agent\r
description: Agent学习\r
---\r
## agent = llm + planning + tool + memory + action`,Re=`---\r
title: Claudecodeui\r
date: 2026-10-14\r
categories:\r
  - agent\r
tags:\r
  - agent\r
description:  Claude CLI ui\r
---\r
\r
# claudecodeui\r
> 参考github链接：[claudecodeui](https://github.com/siteboon/claudecodeui)\r
\r
`,Ue=`---\r
title: 算法与数据结构\r
date: 2026-10-14\r
categories:\r
  - 算法与数据结构\r
tags:\r
  - 算法\r
description: 算法与数据结构\r
---\r
\r
# 数据结构与算法\r
> leetcode链接：[mengzhuo leetcode🔗](https://leetcode.cn/u/mengzhuo/)\r
\r
## 数据结构\r
- 数组\r
- 字符串\r
- 队列FIFO\r
 - 先进先出\r
- 栈LIFO\r
  -后进先出\r
- 链表\r
  - 双向链表： 有pre和next\r
  - 单链表：只有next\r
- 哈希表\r
- 树\r
  - 二叉树\r
  - 二叉平衡树\r
- 散列表（我没看）\r
- 堆（我也没看）\r
- 图（我也没看）\r
\r
## 算法思想（解决问题的方法论）\r
- 双指针\r
  - 滑动窗口（同向）\r
  - 对撞指针\r
  - 快慢指针\r
- 递归\r
  - 回溯\r
- 搜索遍历\r
  - bfs（广度优先搜索）\r
  - dfs（深度优先搜索）\r
- 动态规划\r
- 贪心\r
- 二分查找\r
\r
`,Ke=`---\r
title: leetcode 做过的题\r
date: 2026-10-23\r
categories:\r
  - 算法与数据结构\r
tags:\r
  - 算法\r
description: leetcode刷过的100道题\r
---\r
\r
# leetcode做过的题目\r
> 分类依据每题的 topicTags 归一化；一题可能涉及多个类别，会分别列入。\r
\r
## 分类概览（按题目数）\r
| 类别 | 个数 | 类别 | 个数 |\r
| -- | -- | -- | --- |\r
| 数组 | 39 | 贪心 | 4 |\r
| 双指针 | 24 | 模拟 | 3 |\r
| 字符串 | 22 |递归 | 3 |\r
| 数学 | 17 |矩阵 | 2 |\r
| 哈希表 | 15 |计数 | 2 |\r
| 树 | 14 |设计 | 2 |\r
| 动态规划(DP) | 13 |回溯 | 1 |\r
| 深度优先搜索(DFS) | 10 | 堆 | 1 |\r
| 链表 | 10 |字典树 | 1 |队列 | 1 |\r
| 广度优先搜索(BFS) | 9 |栈 | 4 |\r
| 排序 | 9 |前缀和 | 4 |\r
| 二分查找 | 7 |分治 | 4 |\r
| 位运算 | 6 |滑动窗口 | 5 |\r
\r
\r
\r
## 数组（39 题）\r
\r
- [合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)\r
- [最大子数组和](https://leetcode.cn/problems/maximum-subarray/)\r
- [三数之和](https://leetcode.cn/problems/3sum/)\r
- [数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)\r
- [使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)\r
- [相等行列对](https://leetcode.cn/problems/equal-row-and-column-pairs/)\r
- [咒语和药水的成功对数](https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/)\r
- [递增的三元子序列](https://leetcode.cn/problems/increasing-triplet-subsequence/)\r
- [最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)\r
- [除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)\r
- [种花问题](https://leetcode.cn/problems/can-place-flowers/)\r
- [寻找峰值](https://leetcode.cn/problems/find-peak-element/)\r
- [打家劫舍](https://leetcode.cn/problems/house-robber/)\r
- [独一无二的出现次数](https://leetcode.cn/problems/unique-number-of-occurrences/)\r
- [找出两数组的不同](https://leetcode.cn/problems/find-the-difference-of-two-arrays/)\r
- [拥有最多糖果的孩子](https://leetcode.cn/problems/kids-with-the-greatest-number-of-candies/)\r
- [删掉一个元素以后全为 1 的最长子数组](https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/)\r
- [最大连续1的个数 III](https://leetcode.cn/problems/max-consecutive-ones-iii/)\r
- [寻找数组的中心下标](https://leetcode.cn/problems/find-pivot-index/)\r
- [找到最高海拔](https://leetcode.cn/problems/find-the-highest-altitude/)\r
- [子数组最大平均数 I](https://leetcode.cn/problems/maximum-average-subarray-i/)\r
- [K 和数对的最大数目](https://leetcode.cn/problems/max-number-of-k-sum-pairs/)\r
- [盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)\r
- [移动零](https://leetcode.cn/problems/move-zeroes/)\r
- [买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)\r
- [轮转数组](https://leetcode.cn/problems/rotate-array/)\r
- [多数元素](https://leetcode.cn/problems/majority-element/)\r
- [删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/)\r
- [柠檬水找零](https://leetcode.cn/problems/lemonade-change/)\r
- [统计位数为偶数的数字](https://leetcode.cn/problems/find-numbers-with-even-number-of-digits/)\r
- [将每个元素替换为右侧最大元素](https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/)\r
- [矩阵中的幸运数](https://leetcode.cn/problems/lucky-numbers-in-a-matrix/)\r
- [只出现一次的数字](https://leetcode.cn/problems/single-number/)\r
- [加一](https://leetcode.cn/problems/plus-one/)\r
- [搜索插入位置](https://leetcode.cn/problems/search-insert-position/)\r
- [移除元素](https://leetcode.cn/problems/remove-element/)\r
- [最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)\r
- [删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)\r
- [两数之和](https://leetcode.cn/problems/two-sum/)\r
\r
## 双指针（24 题）\r
\r
- [排序链表](https://leetcode.cn/problems/7WHec2/)\r
- [快乐数](https://leetcode.cn/problems/happy-number/)\r
- [环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)\r
- [相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)\r
- [合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)\r
- [环形链表](https://leetcode.cn/problems/linked-list-cycle/)\r
- [最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)\r
- [三数之和](https://leetcode.cn/problems/3sum/)\r
- [咒语和药水的成功对数](https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/)\r
- [压缩字符串](https://leetcode.cn/problems/string-compression/)\r
- [反转字符串中的元音字母](https://leetcode.cn/problems/reverse-vowels-of-a-string/)\r
- [删除链表的中间节点](https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list/)\r
- [反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)\r
- [交替合并字符串](https://leetcode.cn/problems/merge-strings-alternately/)\r
- [K 和数对的最大数目](https://leetcode.cn/problems/max-number-of-k-sum-pairs/)\r
- [盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)\r
- [判断子序列](https://leetcode.cn/problems/is-subsequence/)\r
- [移动零](https://leetcode.cn/problems/move-zeroes/)\r
- [轮转数组](https://leetcode.cn/problems/rotate-array/)\r
- [删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/)\r
- [仅仅反转字母](https://leetcode.cn/problems/reverse-only-letters/)\r
- [找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)\r
- [移除元素](https://leetcode.cn/problems/remove-element/)\r
- [删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)\r
\r
## 字符串（22 题）\r
\r
- [复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)\r
- [字符串相加](https://leetcode.cn/problems/add-strings/)\r
- [最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)\r
- [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)\r
- [压缩字符串](https://leetcode.cn/problems/string-compression/)\r
- [反转字符串中的元音字母](https://leetcode.cn/problems/reverse-vowels-of-a-string/)\r
- [字符串的最大公因子](https://leetcode.cn/problems/greatest-common-divisor-of-strings/)\r
- [从字符串中移除星号](https://leetcode.cn/problems/removing-stars-from-a-string/)\r
- [确定两个字符串是否接近](https://leetcode.cn/problems/determine-if-two-strings-are-close/)\r
- [反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)\r
- [交替合并字符串](https://leetcode.cn/problems/merge-strings-alternately/)\r
- [定长子串中元音的最大数目](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)\r
- [判断子序列](https://leetcode.cn/problems/is-subsequence/)\r
- [仅仅反转字母](https://leetcode.cn/problems/reverse-only-letters/)\r
- [IP 地址无效化](https://leetcode.cn/problems/defanging-an-ip-address/)\r
- [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/)\r
- [最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/)\r
- [外观数列](https://leetcode.cn/problems/count-and-say/)\r
- [找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)\r
- [最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)\r
- [有效的括号](https://leetcode.cn/problems/valid-parentheses/)\r
- [罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)\r
\r
## 数学（17 题）\r
\r
- [快乐数](https://leetcode.cn/problems/happy-number/)\r
- [字符串相加](https://leetcode.cn/problems/add-strings/)\r
- [字符串的最大公因子](https://leetcode.cn/problems/greatest-common-divisor-of-strings/)\r
- [最小偶倍数](https://leetcode.cn/problems/smallest-even-multiple/)\r
- [温度转换](https://leetcode.cn/problems/convert-the-temperature/)\r
- [两整数相加](https://leetcode.cn/problems/add-two-integers/)\r
- [第 N 个泰波那契数](https://leetcode.cn/problems/n-th-tribonacci-number/)\r
- [轮转数组](https://leetcode.cn/problems/rotate-array/)\r
- [两整数之和](https://leetcode.cn/problems/sum-of-two-integers/)\r
- [统计位数为偶数的数字](https://leetcode.cn/problems/find-numbers-with-even-number-of-digits/)\r
- [加密运算](https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/)\r
- [爬楼梯](https://leetcode.cn/problems/climbing-stairs/)\r
- [x 的平方根 ](https://leetcode.cn/problems/sqrtx/)\r
- [加一](https://leetcode.cn/problems/plus-one/)\r
- [罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)\r
- [回文数](https://leetcode.cn/problems/palindrome-number/)\r
- [整数反转](https://leetcode.cn/problems/reverse-integer/)\r
\r
## 哈希表（15 题）\r
\r
- [快乐数](https://leetcode.cn/problems/happy-number/)\r
- [环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)\r
- [相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)\r
- [环形链表](https://leetcode.cn/problems/linked-list-cycle/)\r
- [LRU 缓存](https://leetcode.cn/problems/lru-cache/)\r
- [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)\r
- [相等行列对](https://leetcode.cn/problems/equal-row-and-column-pairs/)\r
- [确定两个字符串是否接近](https://leetcode.cn/problems/determine-if-two-strings-are-close/)\r
- [独一无二的出现次数](https://leetcode.cn/problems/unique-number-of-occurrences/)\r
- [找出两数组的不同](https://leetcode.cn/problems/find-the-difference-of-two-arrays/)\r
- [K 和数对的最大数目](https://leetcode.cn/problems/max-number-of-k-sum-pairs/)\r
- [多数元素](https://leetcode.cn/problems/majority-element/)\r
- [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/)\r
- [罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)\r
- [两数之和](https://leetcode.cn/problems/two-sum/)\r
\r
## 树（14 题）\r
\r
- [二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)\r
- [二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)\r
- [二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)\r
- [二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)\r
- [二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)\r
- [删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-bst/)\r
- [二叉搜索树中的搜索](https://leetcode.cn/problems/search-in-a-binary-search-tree/)\r
- [最大层内元素和](https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/)\r
- [二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)\r
- [统计二叉树中好节点的数目](https://leetcode.cn/problems/count-good-nodes-in-binary-tree/)\r
- [二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)\r
- [左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)\r
- [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)\r
- [相同的树](https://leetcode.cn/problems/same-tree/)\r
\r
## 动态规划(DP)（13 题）\r
\r
- [最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)\r
- [最大子数组和](https://leetcode.cn/problems/maximum-subarray/)\r
- [多米诺和托米诺平铺](https://leetcode.cn/problems/domino-and-tromino-tiling/)\r
- [使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)\r
- [递增的三元子序列](https://leetcode.cn/problems/increasing-triplet-subsequence/)\r
- [最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)\r
- [比特位计数](https://leetcode.cn/problems/counting-bits/)\r
- [第 N 个泰波那契数](https://leetcode.cn/problems/n-th-tribonacci-number/)\r
- [打家劫舍](https://leetcode.cn/problems/house-robber/)\r
- [删掉一个元素以后全为 1 的最长子数组](https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/)\r
- [判断子序列](https://leetcode.cn/problems/is-subsequence/)\r
- [买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)\r
- [爬楼梯](https://leetcode.cn/problems/climbing-stairs/)\r
\r
## 深度优先搜索(DFS)（10 题）\r
\r
- [二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)\r
- [二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)\r
- [二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)\r
- [最大层内元素和](https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/)\r
- [二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)\r
- [统计二叉树中好节点的数目](https://leetcode.cn/problems/count-good-nodes-in-binary-tree/)\r
- [二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)\r
- [左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)\r
- [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)\r
- [相同的树](https://leetcode.cn/problems/same-tree/)\r
\r
## 链表（10 题）\r
\r
- [排序链表](https://leetcode.cn/problems/7WHec2/)\r
- [环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)\r
- [相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)\r
- [环形链表](https://leetcode.cn/problems/linked-list-cycle/)\r
- [K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)\r
- [反转链表](https://leetcode.cn/problems/reverse-linked-list/)\r
- [LRU 缓存](https://leetcode.cn/problems/lru-cache/)\r
- [删除链表的中间节点](https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list/)\r
- [删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)\r
- [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)\r
\r
## 广度优先搜索(BFS)（9 题）\r
\r
- [二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)\r
- [二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)\r
- [最大层内元素和](https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/)\r
- [二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)\r
- [统计二叉树中好节点的数目](https://leetcode.cn/problems/count-good-nodes-in-binary-tree/)\r
- [二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)\r
- [左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)\r
- [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)\r
- [相同的树](https://leetcode.cn/problems/same-tree/)\r
\r
## 排序（9 题）\r
\r
- [排序链表](https://leetcode.cn/problems/7WHec2/)\r
- [合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)\r
- [三数之和](https://leetcode.cn/problems/3sum/)\r
- [数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)\r
- [咒语和药水的成功对数](https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/)\r
- [确定两个字符串是否接近](https://leetcode.cn/problems/determine-if-two-strings-are-close/)\r
- [K 和数对的最大数目](https://leetcode.cn/problems/max-number-of-k-sum-pairs/)\r
- [多数元素](https://leetcode.cn/problems/majority-element/)\r
- [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/)\r
\r
## 二分查找（7 题）\r
\r
- [咒语和药水的成功对数](https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/)\r
- [最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)\r
- [寻找峰值](https://leetcode.cn/problems/find-peak-element/)\r
- [猜数字大小](https://leetcode.cn/problems/guess-number-higher-or-lower/)\r
- [最大连续1的个数 III](https://leetcode.cn/problems/max-consecutive-ones-iii/)\r
- [x 的平方根 ](https://leetcode.cn/problems/sqrtx/)\r
- [搜索插入位置](https://leetcode.cn/problems/search-insert-position/)\r
\r
## 位运算（6 题）\r
\r
- [或运算的最小翻转次数](https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c/)\r
- [比特位计数](https://leetcode.cn/problems/counting-bits/)\r
- [两整数之和](https://leetcode.cn/problems/sum-of-two-integers/)\r
- [加密运算](https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/)\r
- [判定字符是否唯一](https://leetcode.cn/problems/is-unique-lcci/)\r
- [只出现一次的数字](https://leetcode.cn/problems/single-number/)\r
\r
## 滑动窗口（5 题）\r
\r
- [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)\r
- [删掉一个元素以后全为 1 的最长子数组](https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/)\r
- [最大连续1的个数 III](https://leetcode.cn/problems/max-consecutive-ones-iii/)\r
- [定长子串中元音的最大数目](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)\r
- [子数组最大平均数 I](https://leetcode.cn/problems/maximum-average-subarray-i/)\r
\r
## 分治（4 题）\r
\r
- [排序链表](https://leetcode.cn/problems/7WHec2/)\r
- [最大子数组和](https://leetcode.cn/problems/maximum-subarray/)\r
- [数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)\r
- [多数元素](https://leetcode.cn/problems/majority-element/)\r
\r
## 前缀和（4 题）\r
\r
- [除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)\r
- [最大连续1的个数 III](https://leetcode.cn/problems/max-consecutive-ones-iii/)\r
- [寻找数组的中心下标](https://leetcode.cn/problems/find-pivot-index/)\r
- [找到最高海拔](https://leetcode.cn/problems/find-the-highest-altitude/)\r
\r
## 栈（4 题）\r
\r
- [二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)\r
- [二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)\r
- [从字符串中移除星号](https://leetcode.cn/problems/removing-stars-from-a-string/)\r
- [有效的括号](https://leetcode.cn/problems/valid-parentheses/)\r
\r
## 贪心（4 题）\r
\r
- [递增的三元子序列](https://leetcode.cn/problems/increasing-triplet-subsequence/)\r
- [种花问题](https://leetcode.cn/problems/can-place-flowers/)\r
- [盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)\r
- [柠檬水找零](https://leetcode.cn/problems/lemonade-change/)\r
\r
## 模拟（3 题）\r
\r
- [字符串相加](https://leetcode.cn/problems/add-strings/)\r
- [相等行列对](https://leetcode.cn/problems/equal-row-and-column-pairs/)\r
- [从字符串中移除星号](https://leetcode.cn/problems/removing-stars-from-a-string/)\r
\r
## 递归（3 题）\r
\r
- [K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)\r
- [反转链表](https://leetcode.cn/problems/reverse-linked-list/)\r
- [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)\r
\r
## 矩阵（2 题）\r
\r
- [相等行列对](https://leetcode.cn/problems/equal-row-and-column-pairs/)\r
- [矩阵中的幸运数](https://leetcode.cn/problems/lucky-numbers-in-a-matrix/)\r
\r
## 计数（2 题）\r
\r
- [确定两个字符串是否接近](https://leetcode.cn/problems/determine-if-two-strings-are-close/)\r
- [多数元素](https://leetcode.cn/problems/majority-element/)\r
\r
## 设计（2 题）\r
\r
- [LRU 缓存](https://leetcode.cn/problems/lru-cache/)\r
- [最近的请求次数](https://leetcode.cn/problems/number-of-recent-calls/)\r
\r
## 回溯（1 题）\r
\r
- [复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)\r
\r
## 堆（1 题）\r
\r
- [数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)\r
\r
## 字典树（1 题）\r
\r
- [最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)\r
\r
## 队列（1 题）\r
\r
- [最近的请求次数](https://leetcode.cn/problems/number-of-recent-calls/)\r
`,We=`---\r
title: Deepseek Harness\r
date: 2026-10-14\r
categories:\r
  - agent\r
tags:\r
  - agent\r
description:  deepseek harness开源\r
---`,Je=`---\r
title: HMR热更新\r
date: 2026-10-14\r
categories:\r
  - vite\r
tags:\r
  - vite\r
description:  vite学习\r
---\r
\r
\r
# HMR = 增量编译 + WebSocket 推送 + 运行时就地替换\r
- 构建监听：dev server用文件监听源码的变化\r
- 增量编译：只重新编译受影响的模块\r
- 推送： 通过websocket长连接发送给浏览器-里面呆着id，hash，补丁内容\r
- 浏览器替换： hmr runtime（注入到客户端的代码）收到消息，调用模块的hot。accept回调，新模块替换旧模块，并处罚dispose做清理。\r
![hmr](./hmr.png "hmr")\r
# webpack 和 vite区别？\r
- webpack在dev也是要重新打包，项目越大依赖越深，hmr的速度就会变慢\r
- vite 开发态是esm，所以改一个文件只编译哪一个文件，ws通知浏览器，重新import modul的url即可，不管项目多大，hmr受影响较小。`,Ye=`---
title: 文章
---

# 文章

按分类归档，下面的列表会根据 \`posts/\` 目录里的 markdown 自动生成。

<PostList />
`,Qe=`---\r
title: vite一篇文章总结\r
date: 2026-10-14\r
categories:\r
  - vite\r
tags:\r
  - vite\r
description:  vite学习\r
---\r
\r
# Vite是什么？\r
> 是个打包工具，和webpack一样是个打包工具。webpack出现是解决怎么才能将代码搞成浏览器能用的，vite解决的其实更多是开发阶段如何快速启动。\r
\r
# 为什么出现？\r
- 1.没有模块系统\r
> ESmodule 在2015年才被标准化，以前node出现的commonjs浏览器无法识别，require（commonjs）和import，这种放到script里面运行不了，因为需要将代码中的模块化转成esmodule\r
\r
- 2.很多语法胎心，浏览器无法直接识别，需要转义成兼容代码\r
> es6+，ts，jsx，vue这种浏览器都是无法识别的，需要转成可识别的代码\r
\r
- 3.依赖太多，手动处理会很麻烦\r
> 很多npm包都会互相引用，比如lodash在很多包里面都有，他们的依赖关系会很复杂，浏览器不会自动解析这些依赖，靠用script引用管理加载顺序，很可能导致全局变量污染问题。\r
\r
# 做了什么？\r
- webpack\r
> 根据入口构建依赖图，loader转译任意资源（css/图片等资源），通过plugin处理（压缩优化，tree-shaking（将未使用的代码丢弃），code spliting，缓存哈希等等）最后输出bundle（将所有资源合并成一个文件/多个文件,大多为js文件，减少网络请求？？）。\r
- vite\r
> 在dev和production是不一样的处理方式,在dev是它采用esm模式，很多代码无需打包，而且会对依赖预构建，然后按需编译，根据route编译当前的页面。而在production环境下，则和webpack一样，要进行构建依赖图等过程（所以在production下，其实两个都一样）。vite在dev时采用esbuild快速编译，在production时rollup负责构建时的深度优化。\r
\r
其实不管是什么工具，他们做的事情都是将很多资源转译为浏览器可识别的代码，会对打包产物进行优化，比如压缩，根据入口进行code slitinng，还有如何让资源更小等等优化方式。\r
\r
# webpack迁移道vite做了什么？\r
`,Ze=`---\r
title: vite 源码结构分析\r
date: 2026-10-14\r
categories:\r
  - vite\r
tags:\r
  - vite\r
description:  vite学习\r
---\r
\r
`,Xe=`---\r
title: Vue学习-响应式\r
date: 2026-10-14\r
categories:\r
  - Vue\r
tags:\r
  - Vue\r
description:  Vue学习\r
---\r
# Vue2中数据绑定与Vue3中的响应式有什么区别？\r
> vue2中通过defineProperty劫持属性，vue3中通过proxy劫持整个对象来完成。\r
`,et=`---\r
title: 公路车-塔基\r
date: 2026-10-26\r
categories:\r
  - 自行车\r
tags:\r
  - 自行车\r
description: 自行车塔基介绍\r
---\r
\r
## 自行车塔基介绍\r
> \r
`,tt=`---\r
title: 10.26随谈\r
date: 2026-10-26\r
categories:\r
  - 随谈\r
tags:\r
  - 随谈\r
description: 随谈\r
---\r
\r
`,Qr={class:"cat-nav"},Zr=["href"],Xr={key:0,class:"empty"},ea=["id"],ta=["href"],na={class:"cat-count"},sa={class:"post-list"},oa=["href"],ra={class:"post-date"},aa=_({__name:"PostList",setup(e){const t=Object.assign({"/posts/RAG.md":ze,"/posts/agent.md":Ge,"/posts/claudecliui.md":Re,"/posts/dataStruct.md":Ue,"/posts/datastruct_100道.md":Ke,"/posts/deepseek_harness.md":We,"/posts/hmr.md":Je,"/posts/index.md":Ye,"/posts/vite_source.md":Qe,"/posts/vite源码结构.md":Ze,"/posts/vue3-proxy.md":Xe,"/posts/自行车_01.md":et,"/posts/随谈1_26_10_26.md":tt});function n(u){const b=u.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!b)return{};const f={};let v=null;for(const V of b[1].split(/\r?\n/)){const $=V.match(/^\s*-\s+(.*)$/);if($&&v){Array.isArray(f[v])||(f[v]=[]),f[v].push($[1].trim().replace(/^["']|["']$/g,""));continue}const H=V.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);if(H){v=H[1];const B=H[2].trim(),w=B.match(/^\[(.*)\]$/);w?(f[v]=w[1].split(",").map(I=>I.trim().replace(/^["']|["']$/g,"")).filter(Boolean),v=null):B===""?f[v]=[]:(f[v]=B.replace(/^["']|["']$/g,""),v=null)}}return f}const s=x(()=>Object.entries(t).map(([u,b])=>{const f=n(b||""),v=u.split("/").pop().replace(/\.md$/,"");return{title:f.title||v,date:f.date||"",categories:f.categories||["未分类"],tags:f.tags||[],url:`/posts/${v}/`}}).filter(u=>u.date).sort((u,b)=>u.date<b.date?1:-1)),o=x(()=>{const u=new Set,b=[];for(const f of s.value)for(const v of f.categories)u.has(v)||(u.add(v),b.push(v));return b}),a=x(()=>{const u=new Map;for(const b of s.value)for(const f of b.categories)u.has(f)||u.set(f,[]),u.get(f).push(b);return[...u.entries()]});function i(u){return`#${u}`}function p(u){return u?u.slice(0,10):""}return(u,b)=>(r(),c(M,null,[d("nav",Qr,[b[0]||(b[0]=d("a",{href:"/posts/"},"全部",-1)),(r(!0),c(M,null,E(o.value,f=>(r(),c("a",{key:f,href:i(f)},T(f),9,Zr))),128))]),s.value.length===0?(r(),c("p",Xr,[...b[1]||(b[1]=[F("还没有文章，在 ",-1),d("code",null,"posts/",-1),F(" 目录新建一个带 ",-1),d("code",null,"date",-1),F(" 的 markdown 试试。",-1)])])):g("",!0),(r(!0),c(M,null,E(a.value,([f,v])=>(r(),c("div",{key:f,class:"cat-block"},[d("h2",{id:f,class:"cat-title"},[d("a",{href:i(f),class:"cat-anchor"},T(f),9,ta),d("span",na,T(v.length),1)],8,ea),d("ul",sa,[(r(!0),c(M,null,E(v,V=>(r(),c("li",{key:V.url,class:"post-item"},[d("a",{href:V.url,class:"post-link"},T(V.title),9,oa),d("span",ra,T(p(V.date)),1)]))),128))])]))),128))],64))}}),la=y(aa,[["__scopeId","data-v-7930fcfc"]]),ia={class:"radar-wrap"},ca=["viewBox"],ua=["points"],da=["x1","y1","x2","y2"],ma=["points"],pa=["cx","cy"],ha=["x","y","text-anchor"],va=["x","y","text-anchor"],fa={key:1,class:"empty"},Ve=500,we=420,Q=140,Se=5,ba=_({__name:"SkillRadar",setup(e){const t={Vue:"前端框架",vite:"构建工具",Agent:"AI 应用",RAG:"AI 应用",算法与数据结构:"算法与数据结构"},n=Object.assign({"/posts/RAG.md":ze,"/posts/agent.md":Ge,"/posts/claudecliui.md":Re,"/posts/dataStruct.md":Ue,"/posts/datastruct_100道.md":Ke,"/posts/deepseek_harness.md":We,"/posts/hmr.md":Je,"/posts/index.md":Ye,"/posts/vite_source.md":Qe,"/posts/vite源码结构.md":Ze,"/posts/vue3-proxy.md":Xe,"/posts/自行车_01.md":et,"/posts/随谈1_26_10_26.md":tt});function s(w){const I=w.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!I)return{};const L={};let N=null;for(const O of I[1].split(/\r?\n/)){const R=O.match(/^\s*-\s+(.*)$/);if(R&&N){Array.isArray(L[N])||(L[N]=[]),L[N].push(R[1].trim().replace(/^["']|["']$/g,""));continue}const Y=O.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);if(Y){N=Y[1];const K=Y[2].trim(),$e=K.match(/^\[(.*)\]$/);$e?(L[N]=$e[1].split(",").map(nt=>nt.trim().replace(/^["']|["']$/g,"")).filter(Boolean),N=null):K===""?L[N]=[]:(L[N]=K.replace(/^["']|["']$/g,""),N=null)}}return L}const o={};for(const w of Object.values(n)){const L=s(w||"").categories;if(!Array.isArray(L)||L.length===0)continue;const N=t[L[0]]??L[0];o[N]=(o[N]??0)+1}const a=Object.entries(o).map(([w,I])=>({name:w,count:I})).sort((w,I)=>I.count-w.count).filter(w=>w.count>0),i=Math.max(...a.map(w=>w.count),1),p=Ve/2,u=we/2-5,b=Math.max(a.length,1),f=w=>(-90+360/b*w)*Math.PI/180;function v(w,I){const L=f(w);return[p+I*Math.cos(L),u+I*Math.sin(L)]}const V=Array.from({length:Se},(w,I)=>{const L=Q*(I+1)/Se;return a.map((N,O)=>v(O,L).join(",")).join(" ")}),$=a.map((w,I)=>{const[L,N]=v(I,Q);return{x1:p,y1:u,x2:L,y2:N}}),H=a.map((w,I)=>v(I,Q*w.count/i).join(",")).join(" "),B=a.map((w,I)=>{const[L,N]=v(I,Q*w.count/i),[O,R]=v(I,Q+24),Y=Math.cos(f(I));let K="middle";return Y>.3?K="start":Y<-.3&&(K="end"),{x:L,y:N,lx:O,ly:R,anchor:K,name:w.name,count:w.count}});return(w,I)=>(r(),c("div",ia,[l(a).length?(r(),c("svg",{key:0,viewBox:`0 0 ${Ve} ${we}`,class:"radar",role:"img","aria-label":"技能雷达图（按文章数自动统计）"},[(r(!0),c(M,null,E(l(V),(L,N)=>(r(),c("polygon",{key:"g"+N,points:L,class:"grid"},null,8,ua))),128)),(r(!0),c(M,null,E(l($),(L,N)=>(r(),c("line",{key:"a"+N,x1:L.x1,y1:L.y1,x2:L.x2,y2:L.y2,class:"axis"},null,8,da))),128)),d("polygon",{points:l(H),class:"data"},null,8,ma),(r(!0),c(M,null,E(l(B),(L,N)=>(r(),c("g",{key:"p"+N},[d("circle",{cx:L.x,cy:L.y,r:"3.5",class:"dot"},null,8,pa),d("text",{x:L.lx,y:L.ly,"text-anchor":L.anchor,class:"label"},T(L.name),9,ha),d("text",{x:L.lx,y:L.ly+15,"text-anchor":L.anchor,class:"value"},T(L.count)+" 篇",9,va)]))),128))],8,ca)):(r(),c("p",fa,[...I[0]||(I[0]=[F(" 还没有带分类的文章，在 ",-1),d("code",null,"posts/",-1),F(" 文章里填好 ",-1),d("code",null,"categories",-1),F(" 即可自动统计。 ",-1)])]))]))}}),ga=y(ba,[["__scopeId","data-v-e838bb42"]]),_a={class:"home"},ka={class:"features"},ya=["href"],$a={class:"more"},Pa={class:"skills"},La=_({__name:"HomePage",setup(e){const t=[{title:"分类",details:"按分类浏览全部文章",link:"/posts/",linkText:"浏览分类"},{title:"文章",details:"技术笔记与踩坑记录",link:"/posts/",linkText:"阅读文章"},{title:"简介",details:"关于我与联系方式",link:"/about/",linkText:"关于我"}];return(n,s)=>(r(),c("div",_a,[s[2]||(s[2]=vt('<header class="hero" data-v-b3751419><h1 class="name" data-v-b3751419>mengjoy个人网站</h1><br data-v-b3751419><p class="tagline" data-v-b3751419>记录技术与生活</p><div class="actions" data-v-b3751419><a class="btn brand" href="/posts/" data-v-b3751419>文章列表</a><a class="btn alt" href="/about/" data-v-b3751419>关于我</a></div></header>',1)),d("section",ka,[(r(),c(M,null,E(t,o=>d("a",{key:o.title,class:"card",href:o.link},[d("h3",null,T(o.title),1),d("p",null,T(o.details),1),d("span",$a,T(o.linkText)+" →",1)],8,ya)),64))]),d("section",Pa,[s[0]||(s[0]=d("h2",null,"技能树",-1)),s[1]||(s[1]=d("p",{class:"skills-sub"},"雷达图按各技能方向下的文章数量自动统计生成，轴越长代表该方向文章越多。",-1)),k(ga)])]))}}),xa=y(La,[["__scopeId","data-v-b3751419"]]),Va={class:"starfield"},wa=_({__name:"StarfieldBg",setup(e){const t=A(null);let n=null,s=0,o=[],a=0,i=0,p=1,u=!0;function b(){const $=t.value;$&&(p=Math.min(window.devicePixelRatio||1,2),a=window.innerWidth,i=window.innerHeight,$.width=a*p,$.height=i*p,$.style.width=a+"px",$.style.height=i+"px",n=$.getContext("2d"),n&&n.setTransform(p,0,0,p,0,0),f())}function f(){const $=Math.round(a*i/8e3),H=Math.max(90,Math.min(240,$));o=[];for(let B=0;B<H;B++){const w=Math.random()*.8+.2;o.push({x:Math.random()*a,y:Math.random()*i,z:w,r:w*1.5+.3,a:Math.random()*Math.PI*2,tw:Math.random()*.02+.006})}}function v(){if(n){n.clearRect(0,0,a,i);for(const $ of o){$.y+=$.z*.12,$.y>i+2&&($.y=-2,$.x=Math.random()*a),$.a+=$.tw;const H=.35+Math.abs(Math.sin($.a))*.65*$.z;n.beginPath(),n.arc($.x,$.y,$.r,0,Math.PI*2),n.fillStyle=`rgba(205, 222, 255, ${H.toFixed(3)})`,n.fill()}s=requestAnimationFrame(v)}}function V(){document.hidden?(cancelAnimationFrame(s),u=!1):u||(u=!0,v())}return z(()=>{b(),window.addEventListener("resize",b),document.addEventListener("visibilitychange",V),v()}),Ce(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",b),document.removeEventListener("visibilitychange",V)}),($,H)=>(r(),c("div",Va,[d("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}}),Sa=y(wa,[["__scopeId","data-v-b7d156ad"]]),Ta={extends:xe,Layout:()=>Pe(xe.Layout,{},{"layout-top":()=>Pe(Sa)}),enhanceApp({app:e}){e.component("PostList",la),e.component("HomePage",xa)}};export{Ta as R};
