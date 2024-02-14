import{_ as F}from"./_plugin-vue_export-helper.x3n3nnut.js";import{I as x,J as w,L as k,Q as P,A as l,K as j,O as p,M as z,a4 as O,R as g,c as d,N as $,ah as I,r as M,a9 as J,S as L,o as U,e as K,am as Q,an as Y,ae as Z,ao as G,ap as W,ab as X,aq as ee,ar as te,as as ae,at as le,Z as oe,B as _,v as se,C as E,au as ne}from"./entry.CUIvpTKM.js";import{V as A}from"./VBtn.ZOYiCc3e.js";import{a as R,j as re,c as ue,e as ie,b as ce,o as de,g as ve,h as me,v as N}from"./group.2MglmOXU.js";import{V as fe}from"./index.OCuj1i6g.js";import{V as ge}from"./VImg.VYhXuD9I.js";const he=x({text:String,...w(),...R()},"VToolbarTitle"),be=k()({name:"VToolbarTitle",props:he(),setup(e,u){let{slots:t}=u;return P(()=>{const r=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[r&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),ye=[null,"prominent","default","comfortable","compact"],q=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ye.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...re(),...w(),...ue(),...ie(),...R({tag:"header"}),...j()},"VToolbar"),H=k()({name:"VToolbar",props:q(),setup(e,u){var n;let{slots:t}=u;const{backgroundColorClasses:r,backgroundColorStyles:o}=ce(p(e,"color")),{borderClasses:a}=de(e),{elevationClasses:i}=ve(e),{roundedClasses:v}=me(e),{themeClasses:m}=z(e),{rtlClasses:h}=O(),c=g(!!(e.extended||(n=t.extension)!=null&&n.call(t))),b=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),f=d(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return $({VBtn:{variant:"text"}}),P(()=>{var s;const y=!!(e.title||t.title),V=!!(t.image||e.image),C=(s=t.extension)==null?void 0:s.call(t);return c.value=!!(e.extended||C),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,a.value,i.value,v.value,m.value,h.value,e.class],style:[o.value,e.style]},{default:()=>[V&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ge,{key:"image-img",cover:!0,src:e.image},null)]),l(N,{defaults:{VTabs:{height:I(b.value)}}},{default:()=>{var S,T,B;return[l("div",{class:"v-toolbar__content",style:{height:I(b.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(S=t.prepend)==null?void 0:S.call(t)]),y&&l(be,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),l(N,{defaults:{VTabs:{height:I(f.value)}}},{default:()=>[l(fe,null,{default:()=>[c.value&&l("div",{class:"v-toolbar__extension",style:{height:I(f.value)}},[C])]})]})]})}),{contentHeight:b,extensionHeight:f}}}),Se=x({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ve(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let r=0;const o=M(null),a=g(0),i=g(0),v=g(0),m=g(!1),h=g(!1),c=d(()=>Number(e.scrollThreshold)),b=d(()=>J((c.value-a.value)/c.value||0)),f=()=>{const n=o.value;!n||t&&!t.value||(r=a.value,a.value="window"in n?n.pageYOffset:n.scrollTop,h.value=a.value<r,v.value=Math.abs(a.value-c.value))};return L(h,()=>{i.value=i.value||a.value}),L(m,()=>{i.value=0}),U(()=>{L(()=>e.scrollTarget,n=>{var V;const y=n?document.querySelector(n):window;y&&y!==o.value&&((V=o.value)==null||V.removeEventListener("scroll",f),o.value=y,o.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),K(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",f)}),t&&L(t,f,{immediate:!0}),{scrollThreshold:c,currentScroll:a,currentThreshold:v,isScrollActive:m,scrollRatio:b,isScrollingUp:h,savedScroll:i}}function D(){const e=g(!1);return U(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Q(e)}}const xe=x({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...q(),...Y(),...Se(),height:{type:[Number,String],default:64}},"VAppBar"),Te=k()({name:"VAppBar",props:xe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const r=M(),o=Z(e,"modelValue"),a=d(()=>{var S;const s=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:s.has("hide"),inverted:s.has("inverted"),collapse:s.has("collapse"),elevate:s.has("elevate"),fadeImage:s.has("fade-image")}}),i=d(()=>{const s=a.value;return s.hide||s.inverted||s.collapse||s.elevate||s.fadeImage||!o.value}),{currentScroll:v,scrollThreshold:m,isScrollingUp:h,scrollRatio:c}=Ve(e,{canScroll:i}),b=d(()=>e.collapse||a.value.collapse&&(a.value.inverted?c.value>0:c.value===0)),f=d(()=>e.flat||a.value.elevate&&(a.value.inverted?v.value>0:v.value===0)),n=d(()=>a.value.fadeImage?a.value.inverted?1-c.value:c.value:void 0),y=d(()=>{var T,B;if(a.value.hide&&a.value.inverted)return 0;const s=((T=r.value)==null?void 0:T.contentHeight)??0,S=((B=r.value)==null?void 0:B.extensionHeight)??0;return s+S});G(d(()=>!!e.scrollBehavior),()=>{ee(()=>{a.value.hide?a.value.inverted?o.value=v.value>m.value:o.value=h.value||v.value<m.value:o.value=!0})});const{ssrBootStyles:V}=D(),{layoutItemStyles:C}=W({id:e.name,order:d(()=>parseInt(e.order,10)),position:p(e,"location"),layoutSize:y,elementSize:g(void 0),active:o,absolute:p(e,"absolute")});return P(()=>{const s=H.filterProps(e);return l(H,X({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":n.value,height:void 0,...V.value},e.style]},s,{collapse:b.value,flat:f.value}),t)}),{}}}),Be=x({...w(),...te()},"VLayout"),_e=k()({name:"VLayout",props:Be(),setup(e,u){let{slots:t}=u;const{layoutClasses:r,layoutStyles:o,getLayoutItem:a,items:i,layoutRef:v}=ae(e);return P(()=>{var m;return l("div",{ref:v,class:[r.value,e.class],style:[o.value,e.style]},[(m=t.default)==null?void 0:m.call(t)])}),{getLayoutItem:a,items:i}}}),ke=x({scrollable:Boolean,...w(),...R({tag:"main"})},"VMain"),Pe=k()({name:"VMain",props:ke(),setup(e,u){let{slots:t}=u;const{mainStyles:r}=le(),{ssrBootStyles:o}=D();return P(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[r.value,o.value,e.style]},{default:()=>{var a,i;return[e.scrollable?l("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Ce={};function Ie(e,u){return se(),oe(_e,null,{default:_(()=>[l(Te,{title:"포트폴리오 모음집",color:"surface-variant"},{default:_(()=>[l(A,{to:"/",nuxt:""},{default:_(()=>[E("메인페이지")]),_:1}),l(A,{to:"/projects",nuxt:""},{default:_(()=>[E("프로젝트")]),_:1})]),_:1}),l(Pe,null,{default:_(()=>[ne(e.$slots,"default")]),_:3})]),_:3})}const Ae=F(Ce,[["render",Ie]]);export{Ae as default};
