import{I as C,J as $,L as x,Q as F,A as r,c as z,g as X,ab as A,aw as G,ax as D,O as K,ay as Y,R as b,r as Z,S as w,$ as p,az as ee,e as te,U as N,X as ne,af as re,ah as ae,V as se}from"./entry.CUIvpTKM.js";import{x as ie,B as le,e as oe,b as ue,h as ce}from"./group.2MglmOXU.js";function de(e){return{aspectStyles:z(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const E=C({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...ie()},"VResponsive"),W=x()({name:"VResponsive",props:E(),setup(e,l){let{slots:a}=l;const{aspectStyles:n}=de(e),{dimensionStyles:c}=le(e);return F(()=>{var v;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(v=a.additional)==null?void 0:v.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),ve=C({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,l)=>{let{slots:a}=l;const{transition:n,disabled:c,...v}=e,{component:f=G,...d}=typeof n=="object"?n:{};return X(f,A(typeof n=="string"?{name:c?"":n}:d,v,{disabled:c}),a)};function ge(e,l){if(!D)return;const a=l.modifiers||{},n=l.value,{handler:c,options:v}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const s=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!s)return;const i=d.some(S=>S.isIntersecting);c&&(!a.quiet||s.init)&&(!a.once||i||s.init)&&c(i,d,h),i&&a.once?q(e,l):s.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:f},f.observe(e)}function q(e,l){var n;const a=(n=e._observe)==null?void 0:n[l.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const me={mounted:ge,unmounted:q},fe=me,Se=C({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...$(),...oe(),...ve()},"VImg"),be=x()({name:"VImg",directives:{intersect:fe},props:Se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:a,slots:n}=l;const{backgroundColorClasses:c,backgroundColorStyles:v}=ue(K(e,"color")),{roundedClasses:f}=ce(e),d=Y("VImg"),h=b(""),s=Z(),i=b(e.eager?"loading":"idle"),g=b(),S=b(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=z(()=>u.value.aspect||g.value/S.value||0);w(()=>e.src,()=>{I(i.value!=="idle")}),w(y,(t,o)=>{!t&&o&&s.value&&_(s.value)}),p(()=>I());function I(t){if(!(e.eager&&t)&&!(D&&!t&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&ee(()=>{var o;a("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var m;if(!d.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||V(),i.value==="error")return;y.value||_(s.value,null),i.value==="loading"&&T()}else y.value||_(s.value),k()})})}}function T(){var t;d.isUnmounted||(k(),_(s.value),i.value="loaded",a("load",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function V(){var t;d.isUnmounted||(i.value="error",a("error",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){const t=s.value;t&&(h.value=t.currentSrc||t.src)}let P=-1;te(()=>{clearTimeout(P)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),d.isUnmounted)return;const{naturalHeight:O,naturalWidth:U}=t;O||U?(g.value=U,S.value=O):!t.complete&&i.value==="loading"&&o!=null?P=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};m()}const B=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var m;if(!u.value.src||i.value==="idle")return null;const t=r("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:T,onError:V},null),o=(m=n.sources)==null?void 0:m.call(n);return r(R,{transition:e.transition,appear:!0},{default:()=>[N(o?r("picture",{class:"v-img__picture"},[o,t]):t,[[se,i.value==="loaded"]])]})},L=()=>r(R,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),M=()=>n.placeholder?r(R,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,J=()=>n.error?r(R,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,Q=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=b(!1);{const t=w(y,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return F(()=>{const t=W.filterProps(e);return N(r(W,A({class:["v-img",{"v-img--booting":!j.value},c.value,f.value,e.class],style:[{width:ae(e.width==="auto"?g.value:e.width)},v.value,e.style]},t,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(re,null,[r(H,null,null),r(L,null,null),r(Q,null,null),r(M,null,null),r(J,null,null)]),default:n.default}),[[ne("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:s,state:i,naturalWidth:g,naturalHeight:S}}});export{be as V};
