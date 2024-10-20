import{p as A,m as Q,a as le,b as ee,c as ne,g as D,d as oe,t as $,s as E,u as qe,e as m,f as ie,h as N,i as o,j as Y,k as se,o as z,l as q,w as k,n as Ee,F as re,r as Be,q as X,v as I,x as G,y as Ge,z as Ke,A as Je,B as Qe,C as te,D as et,E as W,G as M,H as Pe,I as He,J as tt,K as L,L as ue,M as ce,N as j,O as Ie,P as Le,Q as at,R as Me,S as lt,T as nt,U as ot,V as it,W as st,X as rt,Y as ut,Z as ct,_ as vt,$ as dt,a0 as ft,a1 as mt}from"./index-BpYl9nQJ.js";import{m as ve,a as de,b as fe,u as K,c as me,d as ge,e as he,V as Ae,f as De,g as U,h as gt,i as ht,t as yt,j as bt,k as pt,l as Vt,n as wt}from"./VGrid-B_0N1qsh.js";import{_ as Ne,a as St,V as _t,b as kt,c as ae}from"./VList-BsHD8PTL.js";import{f as Re,V as ye,m as xt,a as Ct}from"./dialog-transition-CnhQSibG.js";import{m as $e,u as be,V as J,a as Tt,b as Et}from"./VOverlay-AKq8olRU.js";const Bt=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...Q(),...de(),...le(),...fe(),...ee({tag:"footer"}),...ne()},"VFooter"),Pt=D()({name:"VFooter",props:Bt(),setup(e,i){let{slots:a}=i;const{themeClasses:v}=oe(e),{backgroundColorClasses:t,backgroundColorStyles:n}=K($(e,"color")),{borderClasses:l}=me(e),{elevationClasses:d}=ge(e),{roundedClasses:g}=he(e),y=E(32),{resizeRef:s}=qe(r=>{r.length&&(y.value=r[0].target.clientHeight)}),u=m(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:h,layoutIsReady:c}=ie({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:u,elementSize:m(()=>e.height==="auto"?void 0:u.value),active:m(()=>e.app),absolute:$(e,"absolute")});return N(()=>o(e.tag,{ref:s,class:["v-footer",v.value,t.value,l.value,d.value,g.value,e.class],style:[n.value,e.app?h.value:{height:Y(e.height)},e.style]},a)),e.app?c:{}}}),Oe=e=>(Ge("data-v-dfb8bf39"),e=e(),Ke(),e),Ht=["href","title"],It={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},Lt=Oe(()=>X("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),Mt=Oe(()=>X("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),At=se({__name:"AppFooter",setup(e){const i=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:["M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z"],href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:["M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"],href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(a,v)=>(z(),q(Pt,{height:"40",app:""},{default:k(()=>[(z(),Ee(re,null,Be(i,t=>X("a",{key:t.title,href:t.href,title:t.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[o(Ae,{icon:t.icon,size:t.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,Ht)),64)),X("div",It,[I(" © 2016-"+G(new Date().getFullYear())+" ",1),Lt,I(" — "),Mt])]),_:1}))}}),Dt=Ne(At,[["__scopeId","data-v-dfb8bf39"]]),Nt=se({setup(){return{theme:Je()}},data(){return{darkMode:!1}},computed:{isDark(){return this.theme.global.current.value.dark}},watch:{darkMode(){this.theme.global.name.value=this.theme.global.current.value.dark?"light":"dark"}}}),Rt=A({id:String,text:String,...Qe($e({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),$t=D()({name:"VTooltip",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const v=te(e,"modelValue"),{scopeId:t}=be(),n=et(),l=m(()=>e.id||`v-tooltip-${n}`),d=W(),g=m(()=>e.location.split(" ").length>1?e.location:e.location+" center"),y=m(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),s=m(()=>e.transition?e.transition:v.value?"scale-transition":"fade-transition"),u=m(()=>M({"aria-describedby":l.value},e.activatorProps));return N(()=>{const h=J.filterProps(e);return o(J,M({ref:d,class:["v-tooltip",e.class],style:e.style,id:l.value},h,{modelValue:v.value,"onUpdate:modelValue":c=>v.value=c,transition:s.value,absolute:!0,location:g.value,origin:y.value,persistent:!0,role:"tooltip",activatorProps:u.value,_disableGlobalStack:!0},t),{activator:a.activator,default:function(){var _;for(var c=arguments.length,r=new Array(c),f=0;f<c;f++)r[f]=arguments[f];return((_=a.default)==null?void 0:_.call(a,...r))??e.text}})}),Re({},d)}});function Ot(e,i,a,v,t,n){return z(),q($t,{bottom:""},{activator:k(({props:l})=>[o(ye,M(l,{icon:"",onClick:i[0]||(i[0]=d=>e.darkMode=!e.darkMode)}),{default:k(()=>[o(Ae,null,{default:k(()=>[I(G(e.isDark?"mdi-moon-waxing-crescent":"mdi-white-balance-sunny"),1)]),_:1})]),_:2},1040)]),default:k(()=>[I(" Toggle darkmode ")]),_:1})}const Ft=Ne(Nt,[["render",Ot]]);function Yt(e){return typeof e=="object"&&e!==null&&"message"in e&&typeof e.message=="string"}const zt=e=>{if(St.isAxiosError(e)&&e.response&&e.response.data){if(typeof e.response.data=="string")return e.response.data;if(typeof e.response.data=="object"){const i=e.response.data;if(typeof i.error=="string")return i.error}}return Yt(e)?e.message:"Unknown error"},Fe=A({text:String,...Q(),...ee()},"VToolbarTitle"),Ye=D()({name:"VToolbarTitle",props:Fe(),setup(e,i){let{slots:a}=i;return N(()=>{const v=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[v&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),Wt=[null,"prominent","default","comfortable","compact"],ze=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Wt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...Q(),...de(),...fe(),...ee({tag:"header"}),...ne()},"VToolbar"),xe=D()({name:"VToolbar",props:ze(),setup(e,i){var c;let{slots:a}=i;const{backgroundColorClasses:v,backgroundColorStyles:t}=K($(e,"color")),{borderClasses:n}=me(e),{elevationClasses:l}=ge(e),{roundedClasses:d}=he(e),{themeClasses:g}=oe(e),{rtlClasses:y}=Pe(),s=E(!!(e.extended||(c=a.extension)!=null&&c.call(a))),u=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=m(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return He({VBtn:{variant:"text"}}),N(()=>{var P;const r=!!(e.title||a.title),f=!!(a.image||e.image),_=(P=a.extension)==null?void 0:P.call(a);return s.value=!!(e.extended||_),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},v.value,n.value,l.value,d.value,g.value,y.value,e.class],style:[t.value,e.style]},{default:()=>[f&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(U,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(De,{key:"image-img",cover:!0,src:e.image},null)]),o(U,{defaults:{VTabs:{height:Y(u.value)}}},{default:()=>{var H,p,B;return[o("div",{class:"v-toolbar__content",style:{height:Y(u.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(H=a.prepend)==null?void 0:H.call(a)]),r&&o(Ye,{key:"title",text:e.title},{text:a.title}),(p=a.default)==null?void 0:p.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(B=a.append)==null?void 0:B.call(a)])])]}}),o(U,{defaults:{VTabs:{height:Y(h.value)}}},{default:()=>[o(_t,null,{default:()=>[s.value&&o("div",{class:"v-toolbar__extension",style:{height:Y(h.value)}},[_])]})]})]})}),{contentHeight:u,extensionHeight:h}}}),jt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ut(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=i;let v=0,t=0;const n=W(null),l=E(0),d=E(0),g=E(0),y=E(!1),s=E(!1),u=m(()=>Number(e.scrollThreshold)),h=m(()=>tt((u.value-l.value)/u.value||0)),c=()=>{const r=n.value;if(!r||a&&!a.value)return;v=l.value,l.value="window"in r?r.pageYOffset:r.scrollTop;const f=r instanceof Window?document.documentElement.scrollHeight:r.scrollHeight;if(t!==f){t=f;return}s.value=l.value<v,g.value=Math.abs(l.value-u.value)};return L(s,()=>{d.value=d.value||l.value}),L(y,()=>{d.value=0}),ue(()=>{L(()=>e.scrollTarget,r=>{var _;const f=r?document.querySelector(r):window;f&&f!==n.value&&((_=n.value)==null||_.removeEventListener("scroll",c),n.value=f,n.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),ce(()=>{var r;(r=n.value)==null||r.removeEventListener("scroll",c)}),a&&L(a,c,{immediate:!0}),{scrollThreshold:u,currentScroll:l,currentThreshold:g,isScrollActive:y,scrollRatio:h,isScrollingUp:s,savedScroll:d}}const Xt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ze(),...le(),...jt(),height:{type:[Number,String],default:64}},"VAppBar"),Zt=D()({name:"VAppBar",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const v=W(),t=te(e,"modelValue"),n=m(()=>{var B;const p=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:p.has("hide"),fullyHide:p.has("fully-hide"),inverted:p.has("inverted"),collapse:p.has("collapse"),elevate:p.has("elevate"),fadeImage:p.has("fade-image")}}),l=m(()=>{const p=n.value;return p.hide||p.fullyHide||p.inverted||p.collapse||p.elevate||p.fadeImage||!t.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:y,scrollRatio:s}=Ut(e,{canScroll:l}),u=m(()=>n.value.hide||n.value.fullyHide),h=m(()=>e.collapse||n.value.collapse&&(n.value.inverted?s.value>0:s.value===0)),c=m(()=>e.flat||n.value.fullyHide&&!t.value||n.value.elevate&&(n.value.inverted?d.value>0:d.value===0)),r=m(()=>n.value.fadeImage?n.value.inverted?1-s.value:s.value:void 0),f=m(()=>{var R,b;const p=Number(((R=v.value)==null?void 0:R.contentHeight)??e.height),B=Number(((b=v.value)==null?void 0:b.extensionHeight)??0);return u.value?d.value<g.value||n.value.fullyHide?p+B:p:p+B});j(m(()=>!!e.scrollBehavior),()=>{Le(()=>{u.value?n.value.inverted?t.value=d.value>g.value:t.value=y.value||d.value<g.value:t.value=!0})});const{ssrBootStyles:_}=Ie(),{layoutItemStyles:P,layoutIsReady:H}=ie({id:e.name,order:m(()=>parseInt(e.order,10)),position:$(e,"location"),layoutSize:f,elementSize:E(void 0),active:t,absolute:$(e,"absolute")});return N(()=>{const p=xe.filterProps(e);return o(xe,M({ref:v,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":r.value,height:void 0,..._.value},e.style]},p,{collapse:h.value,flat:c.value}),a)}),H}}),qt=A({...xt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Gt=D()({name:"VAppBarNavIcon",props:qt(),setup(e,i){let{slots:a}=i;return N(()=>o(ye,M(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),Kt=D()({name:"VAppBarTitle",props:Fe(),setup(e,i){let{slots:a}=i;return N(()=>o(Ye,M(e,{class:"v-app-bar-title"}),a)),{}}}),Jt=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...$e({origin:"center center",scrollStrategy:"block",transition:{component:Ct},zIndex:2400})},"VDialog"),Qt=D()({name:"VDialog",props:Jt(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,i){let{emit:a,slots:v}=i;const t=te(e,"modelValue"),{scopeId:n}=be(),l=W();function d(s){var c,r;const u=s.relatedTarget,h=s.target;if(u!==h&&((c=l.value)!=null&&c.contentEl)&&((r=l.value)!=null&&r.globalTop)&&![document,l.value.contentEl].includes(h)&&!l.value.contentEl.contains(h)){const f=lt(l.value.contentEl);if(!f.length)return;const _=f[0],P=f[f.length-1];u===_?P.focus():_.focus()}}at&&L(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function g(){var s;(s=l.value)!=null&&s.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function y(){a("afterLeave")}return L(t,async s=>{var u;s||(await Me(),(u=l.value.activatorEl)==null||u.focus({preventScroll:!0}))}),N(()=>{const s=J.filterProps(e),u=M({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps),h=M({tabindex:-1},e.contentProps);return o(J,M({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:t.value,"onUpdate:modelValue":c=>t.value=c,"aria-modal":"true",activatorProps:u,contentProps:h,role:"dialog",onAfterEnter:g,onAfterLeave:y},n),{activator:v.activator,default:function(){for(var c=arguments.length,r=new Array(c),f=0;f<c;f++)r[f]=arguments[f];return o(U,{root:"VDialog"},{default:()=>{var _;return[(_=v.default)==null?void 0:_.call(v,...r)]}})}})}),Re({},l)}}),ea=gt("v-spacer","div","VSpacer");function ta(e){let{rootEl:i,isSticky:a,layoutItemStyles:v}=e;const t=E(!1),n=E(0),l=m(()=>{const y=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[y]:Y(n.value)}:{top:v.value.top}]});ue(()=>{L(a,y=>{y?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),ce(()=>{window.removeEventListener("scroll",g)});let d=0;function g(){const y=d>window.scrollY?"up":"down",s=i.value.getBoundingClientRect(),u=parseFloat(v.value.top??0),h=window.scrollY-Math.max(0,n.value-u),c=s.height+Math.max(n.value,u)-window.scrollY-window.innerHeight,r=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-u?(t.value="top",n.value=u):y==="up"&&t.value==="bottom"||y==="down"&&t.value==="top"?(n.value=window.scrollY+s.top-r,t.value=!0):y==="down"&&c<=0?(n.value=0,t.value="bottom"):y==="up"&&h<=0&&(r?t.value!=="top"&&(n.value=-h+r+u,t.value="top"):(n.value=s.top+h,t.value="top")),d=window.scrollY}return{isStuck:t,stickyStyles:l}}const aa=100,la=20;function Ce(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Te(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const v=Ce(i),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(t-v)*Math.abs(t),a===e.length-1&&(i*=.5)}return Ce(i)*1e3}function na(){const e={};function i(t){Array.from(t.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new nt(la))).push([t.timeStamp,n])})}function a(t){Array.from(t.changedTouches).forEach(n=>{delete e[n.identifier]})}function v(t){var y;const n=(y=e[t])==null?void 0:y.values().reverse();if(!n)throw new Error(`No samples for touch id ${t}`);const l=n[0],d=[],g=[];for(const s of n){if(l[0]-s[0]>aa)break;d.push({t:s[0],d:s[1].clientX}),g.push({t:s[0],d:s[1].clientY})}return{x:Te(d),y:Te(g),get direction(){const{x:s,y:u}=this,[h,c]=[Math.abs(s),Math.abs(u)];return h>c&&s>=0?"right":h>c&&s<=0?"left":c>h&&u>=0?"down":c>h&&u<=0?"up":oa()}}}return{addMovement:i,endTouch:a,getVelocity:v}}function oa(){throw new Error}function ia(e){let{el:i,isActive:a,isTemporary:v,width:t,touchless:n,position:l}=e;ue(()=>{window.addEventListener("touchstart",H,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),ce(()=>{window.removeEventListener("touchstart",H),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",B)});const d=m(()=>["left","right"].includes(l.value)),{addMovement:g,endTouch:y,getVelocity:s}=na();let u=!1;const h=E(!1),c=E(0),r=E(0);let f;function _(b,V){return(l.value==="left"?b:l.value==="right"?document.documentElement.clientWidth-b:l.value==="top"?b:l.value==="bottom"?document.documentElement.clientHeight-b:F())-(V?t.value:0)}function P(b){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const w=l.value==="left"?(b-r.value)/t.value:l.value==="right"?(document.documentElement.clientWidth-b-r.value)/t.value:l.value==="top"?(b-r.value)/t.value:l.value==="bottom"?(document.documentElement.clientHeight-b-r.value)/t.value:F();return V?Math.max(0,Math.min(1,w)):w}function H(b){if(n.value)return;const V=b.changedTouches[0].clientX,w=b.changedTouches[0].clientY,S=25,C=l.value==="left"?V<S:l.value==="right"?V>document.documentElement.clientWidth-S:l.value==="top"?w<S:l.value==="bottom"?w>document.documentElement.clientHeight-S:F(),x=a.value&&(l.value==="left"?V<t.value:l.value==="right"?V>document.documentElement.clientWidth-t.value:l.value==="top"?w<t.value:l.value==="bottom"?w>document.documentElement.clientHeight-t.value:F());(C||x||a.value&&v.value)&&(f=[V,w],r.value=_(d.value?V:w,a.value),c.value=P(d.value?V:w),u=r.value>-20&&r.value<80,y(b),g(b))}function p(b){const V=b.changedTouches[0].clientX,w=b.changedTouches[0].clientY;if(u){if(!b.cancelable){u=!1;return}const C=Math.abs(V-f[0]),x=Math.abs(w-f[1]);(d.value?C>x&&C>3:x>C&&x>3)?(h.value=!0,u=!1):(d.value?x:C)>3&&(u=!1)}if(!h.value)return;b.preventDefault(),g(b);const S=P(d.value?V:w,!1);c.value=Math.max(0,Math.min(1,S)),S>1?r.value=_(d.value?V:w,!0):S<0&&(r.value=_(d.value?V:w,!1))}function B(b){if(u=!1,!h.value)return;g(b),h.value=!1;const V=s(b.changedTouches[0].identifier),w=Math.abs(V.x),S=Math.abs(V.y);(d.value?w>S&&w>400:S>w&&S>3)?a.value=V.direction===({left:"right",right:"left",top:"down",bottom:"up"}[l.value]||F()):a.value=c.value>.5}const R=m(()=>h.value?{transform:l.value==="left"?`translateX(calc(-100% + ${c.value*t.value}px))`:l.value==="right"?`translateX(calc(100% - ${c.value*t.value}px))`:l.value==="top"?`translateY(calc(-100% + ${c.value*t.value}px))`:l.value==="bottom"?`translateY(calc(100% - ${c.value*t.value}px))`:F(),transition:"none"}:void 0);return j(h,()=>{var w,S;const b=((w=i.value)==null?void 0:w.style.transform)??null,V=((S=i.value)==null?void 0:S.style.transition)??null;Le(()=>{var C,x,O,Z;(x=i.value)==null||x.style.setProperty("transform",((C=R.value)==null?void 0:C.transform)||"none"),(Z=i.value)==null||Z.style.setProperty("transition",((O=R.value)==null?void 0:O.transition)||null)}),ot(()=>{var C,x;(C=i.value)==null||C.style.setProperty("transform",b),(x=i.value)==null||x.style.setProperty("transition",V)})}),{isDragging:h,dragProgress:c,dragStyles:R}}function F(){throw new Error}const sa=["start","end","left","right","top","bottom"],ra=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>sa.includes(e)},sticky:Boolean,...ve(),...Q(),...Tt(),...it({mobile:null}),...de(),...le(),...fe(),...ee({tag:"nav"}),...ne()},"VNavigationDrawer"),ua=D()({name:"VNavigationDrawer",props:ra(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:v,slots:t}=i;const{isRtl:n}=Pe(),{themeClasses:l}=oe(e),{borderClasses:d}=me(e),{backgroundColorClasses:g,backgroundColorStyles:y}=K($(e,"color")),{elevationClasses:s}=ge(e),{displayClasses:u,mobile:h}=st(e),{roundedClasses:c}=he(e),r=ht(),f=te(e,"modelValue",null,T=>!!T),{ssrBootStyles:_}=Ie(),{scopeId:P}=be(),H=W(),p=E(!1),{runOpenDelay:B,runCloseDelay:R}=Et(e,T=>{p.value=T}),b=m(()=>e.rail&&e.expandOnHover&&p.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),V=m(()=>yt(e.location,n.value)),w=m(()=>e.persistent),S=m(()=>!e.permanent&&(h.value||e.temporary)),C=m(()=>e.sticky&&!S.value&&V.value!=="bottom");j(()=>e.expandOnHover&&e.rail!=null,()=>{L(p,T=>v("update:rail",!T))}),j(()=>!e.disableResizeWatcher,()=>{L(S,T=>!e.permanent&&Me(()=>f.value=!T))}),j(()=>!e.disableRouteWatcher&&!!r,()=>{L(r.currentRoute,()=>S.value&&(f.value=!1))}),L(()=>e.permanent,T=>{T&&(f.value=!0)}),e.modelValue==null&&!S.value&&(f.value=e.permanent||!h.value);const{isDragging:x,dragProgress:O}=ia({el:H,isActive:f,isTemporary:S,width:b,touchless:$(e,"touchless"),position:V}),Z=m(()=>{const T=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):b.value;return x.value?T*O.value:T}),We=m(()=>["top","bottom"].includes(e.location)?0:b.value),{layoutItemStyles:pe,layoutItemScrimStyles:je,layoutIsReady:Ue}=ie({id:e.name,order:m(()=>parseInt(e.order,10)),position:V,layoutSize:Z,elementSize:We,active:m(()=>f.value||x.value),disableTransitions:m(()=>x.value),absolute:m(()=>e.absolute||C.value&&typeof Ve.value!="string")}),{isStuck:Ve,stickyStyles:Xe}=ta({rootEl:H,isSticky:C,layoutItemStyles:pe}),we=K(m(()=>typeof e.scrim=="string"?e.scrim:null)),Ze=m(()=>({...x.value?{opacity:O.value*.2,transition:"none"}:void 0,...je.value}));return He({VList:{bgColor:"transparent"}}),N(()=>{const T=t.image||e.image;return o(re,null,[o(e.tag,M({ref:H,onMouseenter:B,onMouseleave:R,class:["v-navigation-drawer",`v-navigation-drawer--${V.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--persistent":w.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":C.value},l.value,g.value,d.value,u.value,s.value,c.value,e.class],style:[y.value,pe.value,_.value,Xe.value,e.style,["top","bottom"].includes(V.value)?{height:"auto"}:{}]},P,a),{default:()=>{var Se,_e,ke;return[T&&o("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?o(U,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):o(De,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(Se=t.prepend)==null?void 0:Se.call(t)]),o("div",{class:"v-navigation-drawer__content"},[(_e=t.default)==null?void 0:_e.call(t)]),t.append&&o("div",{class:"v-navigation-drawer__append"},[(ke=t.append)==null?void 0:ke.call(t)])]}}),o(rt,{name:"fade-transition"},{default:()=>[S.value&&(x.value||f.value)&&!!e.scrim&&o("div",M({class:["v-navigation-drawer__scrim",we.backgroundColorClasses.value],style:[Ze.value,we.backgroundColorStyles.value],onClick:()=>{w.value||(f.value=!1)}},P),null)]})])}),Ue.then(()=>({isStuck:Ve}))}}),ca={class:"grey--text text-caption"},ha=se({__name:"default",setup(e){const i=v=>{mt.push(v)},a=W(Array());return ut(v=>{a.value.push({id:a.value.length+1,error:v,text:zt(v),visible:!0,timestamp:new Date})}),(v,t)=>{const n=Ft,l=vt("router-view"),d=Dt;return z(),q(ct,null,{default:k(()=>[o(ua,{app:"","expand-on-hover":"",fixed:"",rail:""},{default:k(()=>[o(kt,{class:"d-flex flex-column",dense:"",nav:""},{default:k(()=>[o(ae,{"prepend-icon":"mdi-home",onClick:t[0]||(t[0]=g=>i("/"))},{default:k(()=>[I(" Home ")]),_:1}),o(ae,{"prepend-icon":"mdi-wrench-cog",onClick:t[1]||(t[1]=g=>i("/planner"))},{default:k(()=>[I(" Planner ")]),_:1}),o(ae,{"prepend-icon":"mdi-tools",onClick:t[2]||(t[2]=g=>i("/items"))},{default:k(()=>[I(" Items ")]),_:1})]),_:1})]),_:1}),o(Zt,{elevation:3},{prepend:k(()=>[o(Gt)]),default:k(()=>[o(Kt,null,{default:k(()=>[I(" Satisfactory Calculator ")]),_:1}),o(n)]),_:1}),o(dt,null,{default:k(()=>[o(l)]),_:1}),(z(!0),Ee(re,null,Be(ft(a),g=>(z(),q(Qt,{key:g.id,modelValue:g.visible,"onUpdate:modelValue":y=>g.visible=y,"max-width":"500"},{default:k(()=>[o(bt,null,{default:k(()=>[o(pt,null,{default:k(()=>[I("Error")]),_:1}),o(Vt,null,{default:k(()=>[I(G(g.text),1)]),_:2},1024),o(wt,null,{default:k(()=>[X("span",ca,G(g.timestamp.toLocaleString()),1),o(ea),o(ye,{onClick:y=>g.visible=!1},{default:k(()=>[I(" OK ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128)),o(d)]),_:1})}}});export{ha as default};
