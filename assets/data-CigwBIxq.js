import{f as X}from"./VList-B8hom3L4.js";import{p as C,m as S,b as p,g as h,H as Y,h as q,i as Q,b9 as v,ay as N,e as E,aX as w,ba as Z,E as d}from"./index-DO7DeOzD.js";const ee=C({fluid:{type:Boolean,default:!1},...S(),...p()},"VContainer"),de=h()({name:"VContainer",props:ee(),setup(e,a){let{slots:s}=a;const{rtlClasses:o}=Y();return q(()=>Q(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},s)),{}}}),I=v.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),L=v.reduce((e,a)=>{const s="offset"+N(a);return e[s]={type:[String,Number],default:null},e},{}),R=v.reduce((e,a)=>{const s="order"+N(a);return e[s]={type:[String,Number],default:null},e},{}),k={col:Object.keys(I),offset:Object.keys(L),order:Object.keys(R)};function te(e,a,s){let o=e;if(!(s==null||s===!1)){if(a){const l=a.replace(e,"");o+=`-${l}`}return e==="col"&&(o="v-"+o),e==="col"&&(s===""||s===!0)||(o+=`-${s}`),o.toLowerCase()}}const se=["auto","start","end","center","baseline","stretch"],ne=C({cols:{type:[Boolean,String,Number],default:!1},...I,offset:{type:[String,Number],default:null},...L,order:{type:[String,Number],default:null},...R,alignSelf:{type:String,default:null,validator:e=>se.includes(e)},...S(),...p()},"VCol"),ge=h()({name:"VCol",props:ne(),setup(e,a){let{slots:s}=a;const o=E(()=>{const l=[];let r;for(r in k)k[r].forEach(c=>{const g=e[c],y=te(r,c,g);y&&l.push(y)});const i=l.some(c=>c.startsWith("v-col-"));return l.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return w(e.tag,{class:[o.value,e.class],style:e.style},(l=s.default)==null?void 0:l.call(s))}}}),j=["start","end","center"],P=["space-between","space-around","space-evenly"];function V(e,a){return v.reduce((s,o)=>{const l=e+N(o);return s[l]=a(),s},{})}const ae=[...j,"baseline","stretch"],$=e=>ae.includes(e),O=V("align",()=>({type:String,default:null,validator:$})),le=[...j,...P],A=e=>le.includes(e),G=V("justify",()=>({type:String,default:null,validator:A})),oe=[...j,...P,"stretch"],M=e=>oe.includes(e),_=V("alignContent",()=>({type:String,default:null,validator:M})),B={align:Object.keys(O),justify:Object.keys(G),alignContent:Object.keys(_)},re={align:"align",justify:"justify",alignContent:"align-content"};function ce(e,a,s){let o=re[e];if(s!=null){if(a){const l=a.replace(e,"");o+=`-${l}`}return o+=`-${s}`,o.toLowerCase()}}const ue=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...O,justify:{type:String,default:null,validator:A},...G,alignContent:{type:String,default:null,validator:M},..._,...S(),...p()},"VRow"),me=h()({name:"VRow",props:ue(),setup(e,a){let{slots:s}=a;const o=E(()=>{const l=[];let r;for(r in B)B[r].forEach(i=>{const c=e[i],g=ce(r,i,c);g&&l.push(g)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return w(e.tag,{class:["v-row",o.value,e.class],style:e.style},(l=s.default)==null?void 0:l.call(s))}}}),ye=Z("data",()=>{const e=d([]),a=d([]),s=d([]),o=d([]),l=d([]),r=d(!1),i=d(!1),c=async()=>{if(!i.value){r.value=!0;try{const t=(await X.get("/satisfactory-calculator/data.json")).data;g(t.items,t.resources),y(t.buildings),T(t.recipes),U(t.resources),x(t.miners),i.value=!0}finally{r.value=!1}}},g=(n,t)=>{Object.entries(n).forEach(([,u])=>{const m=t[u.className]!==null;a.value.push({...u,isResource:m})})},y=n=>{Object.entries(n).forEach(([,t])=>{s.value.push(t)})},T=n=>{Object.entries(n).forEach(([,t])=>{const u=t.producedIn.map(f=>D(f)),m=t.ingredients.map(f=>({item:b(f.item),amount:f.amount})),W=t.products.map(f=>({item:b(f.item),amount:f.amount}));e.value.push({...t,producedInBuildings:u,ingredientItems:m,producedItems:W})})},U=n=>{Object.entries(n).forEach(([,t])=>{const u=b(t.item);o.value.push({...t,resourceItem:u})})},x=n=>{Object.entries(n).forEach(([,t])=>{const u=t.allowedResources.map(m=>J(m));l.value.push({...t,allowedResourceItems:u})})},F=n=>e.value.find(t=>t.slug===n)??null,b=n=>a.value.find(t=>t.className===n)??null,K=n=>a.value.find(t=>t.slug===n)??null,D=n=>s.value.find(t=>t.className===n)??null,z=n=>s.value.find(t=>t.slug===n)??null,H=()=>e.value.filter(n=>!n.alternate&&n.inMachine),J=n=>o.value.find(t=>t.item===n)??null;return{getData:c,getRecipeBySlug:F,getItemBySlug:K,getBuildingBySlug:z,getBaseItemRecipes:H}});export{ge as V,me as a,de as b,ye as u};
