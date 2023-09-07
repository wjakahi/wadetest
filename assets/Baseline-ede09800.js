import{p as A,i as ie,c as r,r as U,a as X,g as re,s as k,o as Z,b as xe,d as $e,e as ze,f as Oe,h as ne,j as R,k as De,m as ce,l as z,n as ve,u as de,q as d,t as j,v as Ve,w as Ye,x as L,y as We,z as Te,A as Xe,B as q,C as Fe,D as je,E as qe,F as Ue,T as Ze,G as Ke,H as Ge,I as Je,J as Qe,K as et,L as F,M as he,N as tt,O as at,P as nt}from"./index-99a64316.js";import{u as lt,m as K,a as O,b as le,c as Be,d as Ie,e as ke,f as se,g as _e,h as Me,i as Ce,V as ot,j as ue,k as ut,l as st,n as it,o as rt,t as ct}from"./VBtn-4d0f265f.js";const ae=Symbol.for("vuetify:layout"),Ee=Symbol.for("vuetify:layout-item"),ye=1e3,vt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Pe=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function dt(){const e=ie(ae);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){const l=ie(ae);if(!l)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${$e()}`,o=re("useLayoutItem");xe(Ee,{id:a});const n=k(!1);ze(()=>n.value=!0),Oe(()=>n.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:i}=l.register(o,{...e,active:r(()=>n.value?!1:e.active.value),id:a});return ne(()=>l.unregister(a)),{layoutItemStyles:t,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const mt=(e,l,a,o)=>{let n={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...n}}];for(const i of e){const h=l.get(i),w=a.get(i),b=o.get(i);if(!h||!w||!b)continue;const u={...n,[h.value]:parseInt(n[h.value],10)+(b.value?parseInt(w.value,10):0)};t.push({id:i,layer:u}),n=u}return t};function ft(e){const l=ie(ae,null),a=r(()=>l?l.rootZIndex.value-100:ye),o=U([]),n=X(new Map),t=X(new Map),i=X(new Map),h=X(new Map),w=X(new Map),{resizeRef:b,contentRect:u}=lt(),p=r(()=>{const s=new Map,c=e.overlaps??[];for(const v of c.filter(V=>V.includes(":"))){const[V,x]=v.split(":");if(!o.value.includes(V)||!o.value.includes(x))continue;const E=n.get(V),N=n.get(x),H=t.get(V),D=t.get(x);!E||!N||!H||!D||(s.set(x,{position:E.value,amount:parseInt(H.value,10)}),s.set(V,{position:N.value,amount:-parseInt(D.value,10)}))}return s}),m=r(()=>{const s=[...new Set([...i.values()].map(v=>v.value))].sort((v,V)=>v-V),c=[];for(const v of s){const V=o.value.filter(x=>{var E;return((E=i.get(x))==null?void 0:E.value)===v});c.push(...V)}return mt(c,n,t,h)}),f=r(()=>!Array.from(w.values()).some(s=>s.value)),y=r(()=>m.value[m.value.length-1].layer),M=r(()=>({"--v-layout-left":R(y.value.left),"--v-layout-right":R(y.value.right),"--v-layout-top":R(y.value.top),"--v-layout-bottom":R(y.value.bottom),...f.value?void 0:{transition:"none"}})),B=r(()=>m.value.slice(1).map((s,c)=>{let{id:v}=s;const{layer:V}=m.value[c],x=t.get(v),E=n.get(v);return{id:v,...V,size:Number(x.value),position:E.value}})),S=s=>B.value.find(c=>c.id===s),T=re("createLayout"),_=k(!1);Z(()=>{_.value=!0}),xe(ae,{register:(s,c)=>{let{id:v,order:V,position:x,layoutSize:E,elementSize:N,active:H,disableTransitions:D,absolute:G}=c;i.set(v,V),n.set(v,x),t.set(v,E),h.set(v,H),D&&w.set(v,D);const J=De(Ee,T==null?void 0:T.vnode).indexOf(s);J>-1?o.value.splice(J,0,v):o.value.push(v);const Q=r(()=>B.value.findIndex($=>$.id===v)),I=r(()=>a.value+m.value.length*2-Q.value*2),ee=r(()=>{const $=x.value==="left"||x.value==="right",Y=x.value==="right",He=x.value==="bottom",ge={[x.value]:0,zIndex:I.value,transform:`translate${$?"X":"Y"}(${(H.value?0:-110)*(Y||He?-1:1)}%)`,position:G.value||a.value!==ye?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!_.value)return ge;const P=B.value[Q.value];if(!P)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const oe=p.value.get(v);return oe&&(P[oe.position]+=oe.amount),{...ge,height:$?`calc(100% - ${P.top}px - ${P.bottom}px)`:N.value?`${N.value}px`:void 0,left:Y?void 0:`${P.left}px`,right:Y?`${P.right}px`:void 0,top:x.value!=="bottom"?`${P.top}px`:void 0,bottom:x.value!=="top"?`${P.bottom}px`:void 0,width:$?N.value?`${N.value}px`:void 0:`calc(100% - ${P.left}px - ${P.right}px)`}}),te=r(()=>({zIndex:I.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:I}},unregister:s=>{i.delete(s),n.delete(s),t.delete(s),h.delete(s),w.delete(s),o.value=o.value.filter(c=>c!==s)},mainRect:y,mainStyles:M,getLayoutItem:S,items:B,layoutRect:u,rootZIndex:a});const C=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),g=r(()=>({zIndex:a.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:C,layoutStyles:g,getLayoutItem:S,items:B,layoutRect:u,layoutRef:b}}const gt=A({...K(),...vt({fullHeight:!0}),...ce()},"VApp"),ht=z()({name:"VApp",props:gt(),setup(e,l){let{slots:a}=l;const o=ve(e),{layoutClasses:n,layoutStyles:t,getLayoutItem:i,items:h,layoutRef:w}=ft(e),{rtlClasses:b}=de();return O(()=>{var u;return d("div",{ref:w,class:["v-application",o.themeClasses.value,n.value,b.value,e.class],style:[t.value,e.style]},[d("div",{class:"v-application__wrap"},[(u=a.default)==null?void 0:u.call(a)])])}),{getLayoutItem:i,items:h,theme:o}}});const Ne=A({text:String,...K(),...le()},"VToolbarTitle"),Re=z()({name:"VToolbarTitle",props:Ne(),setup(e,l){let{slots:a}=l;return O(()=>{const o=!!(a.default||a.text||e.text);return d(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[o&&d("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(n=a.default)==null?void 0:n.call(a)])]}})}),{}}}),yt=[null,"prominent","default","comfortable","compact"],Le=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>yt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Be(),...K(),...Ie(),...ke(),...le({tag:"header"}),...ce()},"VToolbar"),be=z()({name:"VToolbar",props:Le(),setup(e,l){var f;let{slots:a}=l;const{backgroundColorClasses:o,backgroundColorStyles:n}=se(j(e,"color")),{borderClasses:t}=_e(e),{elevationClasses:i}=Me(e),{roundedClasses:h}=Ce(e),{themeClasses:w}=ve(e),{rtlClasses:b}=de(),u=k(!!(e.extended||(f=a.extension)!=null&&f.call(a))),p=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=r(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ve({VBtn:{variant:"text"}}),O(()=>{var S;const y=!!(e.title||a.title),M=!!(a.image||e.image),B=(S=a.extension)==null?void 0:S.call(a);return u.value=!!(e.extended||B),d(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,t.value,i.value,h.value,w.value,b.value,e.class],style:[n.value,e.style]},{default:()=>[M&&d("div",{key:"image",class:"v-toolbar__image"},[a.image?d(ue,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):d(ot,{key:"image-img",cover:!0,src:e.image},null)]),d(ue,{defaults:{VTabs:{height:R(p.value)}}},{default:()=>{var T,_,C;return[d("div",{class:"v-toolbar__content",style:{height:R(p.value)}},[a.prepend&&d("div",{class:"v-toolbar__prepend"},[(T=a.prepend)==null?void 0:T.call(a)]),y&&d(Re,{key:"title",text:e.title},{text:a.title}),(_=a.default)==null?void 0:_.call(a),a.append&&d("div",{class:"v-toolbar__append"},[(C=a.append)==null?void 0:C.call(a)])])]}}),d(ue,{defaults:{VTabs:{height:R(m.value)}}},{default:()=>[d(ut,null,{default:()=>[u.value&&d("div",{class:"v-toolbar__extension",style:{height:R(m.value)}},[B])]})]})]})}),{contentHeight:p,extensionHeight:m}}}),bt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function pt(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=l;let o=0;const n=U(null),t=k(0),i=k(0),h=k(0),w=k(!1),b=k(!1),u=r(()=>Number(e.scrollThreshold)),p=r(()=>Ye((u.value-t.value)/u.value||0)),m=()=>{const f=n.value;!f||a&&!a.value||(o=t.value,t.value="window"in f?f.pageYOffset:f.scrollTop,b.value=t.value<o,h.value=Math.abs(t.value-u.value))};return L(b,()=>{i.value=i.value||t.value}),L(w,()=>{i.value=0}),Z(()=>{L(()=>e.scrollTarget,f=>{var M;const y=f?document.querySelector(f):window;y&&y!==n.value&&((M=n.value)==null||M.removeEventListener("scroll",m),n.value=y,n.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ne(()=>{var f;(f=n.value)==null||f.removeEventListener("scroll",m)}),a&&L(a,m,{immediate:!0}),{scrollThreshold:u,currentScroll:t,currentThreshold:h,isScrollActive:w,scrollRatio:p,isScrollingUp:b,savedScroll:i}}function me(){const e=k(!1);return Z(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:r(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const wt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Le(),...Pe(),...bt(),height:{type:[Number,String],default:64}},"VAppBar"),St=z()({name:"VAppBar",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const o=U(),n=Te(e,"modelValue"),t=r(()=>{var T;const S=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),i=r(()=>{const S=t.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!n.value}),{currentScroll:h,scrollThreshold:w,isScrollingUp:b,scrollRatio:u}=pt(e,{canScroll:i}),p=r(()=>e.collapse||t.value.collapse&&(t.value.inverted?u.value>0:u.value===0)),m=r(()=>e.flat||t.value.elevate&&(t.value.inverted?h.value>0:h.value===0)),f=r(()=>t.value.fadeImage?t.value.inverted?1-u.value:u.value:void 0),y=r(()=>{var _,C;if(t.value.hide&&t.value.inverted)return 0;const S=((_=o.value)==null?void 0:_.contentHeight)??0,T=((C=o.value)==null?void 0:C.extensionHeight)??0;return S+T});Xe(r(()=>!!e.scrollBehavior),()=>{Fe(()=>{t.value.hide?t.value.inverted?n.value=h.value>w.value:n.value=b.value||h.value<w.value:n.value=!0})});const{ssrBootStyles:M}=me(),{layoutItemStyles:B}=Ae({id:e.name,order:r(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:y,elementSize:k(void 0),active:n,absolute:j(e,"absolute")});return O(()=>{const[S]=be.filterProps(e);return d(be,q({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":f.value,height:void 0,...M.value},e.style]},S,{collapse:p.value,flat:m.value}),a)}),{}}}),xt=A({...st({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Vt=z()({name:"VAppBarNavIcon",props:xt(),setup(e,l){let{slots:a}=l;return O(()=>d(it,q(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),pe=z()({name:"VAppBarTitle",props:Ne(),setup(e,l){let{slots:a}=l;return O(()=>d(Re,q(e,{class:"v-app-bar-title"}),a)),{}}});const Tt=A({scrollable:Boolean,...K(),...le({tag:"main"})},"VMain"),Bt=z()({name:"VMain",props:Tt(),setup(e,l){let{slots:a}=l;const{mainStyles:o}=dt(),{ssrBootStyles:n}=me();return O(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>{var t,i;return[e.scrollable?d("div",{class:"v-main__scroller"},[(t=a.default)==null?void 0:t.call(a)]):(i=a.default)==null?void 0:i.call(a)]}})),{}}});function It(e){let{rootEl:l,isSticky:a,layoutItemStyles:o}=e;const n=k(!1),t=k(0),i=r(()=>{const b=typeof n.value=="boolean"?"top":n.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[b]:R(t.value)}:{top:o.value.top}]});Z(()=>{L(a,b=>{b?window.addEventListener("scroll",w,{passive:!0}):window.removeEventListener("scroll",w)},{immediate:!0})}),ne(()=>{window.removeEventListener("scroll",w)});let h=0;function w(){const b=h>window.scrollY?"up":"down",u=l.value.getBoundingClientRect(),p=parseFloat(o.value.top??0),m=window.scrollY-Math.max(0,t.value-p),f=u.height+Math.max(t.value,p)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(l.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-p?(n.value="top",t.value=p):b==="up"&&n.value==="bottom"||b==="down"&&n.value==="top"?(t.value=window.scrollY+u.top-y,n.value=!0):b==="down"&&f<=0?(t.value=0,n.value="bottom"):b==="up"&&m<=0&&(y?n.value!=="top"&&(t.value=-m+y+p,n.value="top"):(t.value=u.top+m,n.value="top")),h=window.scrollY}return{isStuck:n,stickyStyles:i}}const kt=100,_t=20;function we(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function Se(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const o=we(l),n=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);l+=(n-o)*Math.abs(n),a===e.length-1&&(l*=.5)}return we(l)*1e3}function Mt(){const e={};function l(n){Array.from(n.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new je(_t))).push([n.timeStamp,t])})}function a(n){Array.from(n.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(n){var b;const t=(b=e[n])==null?void 0:b.values().reverse();if(!t)throw new Error(`No samples for touch id ${n}`);const i=t[0],h=[],w=[];for(const u of t){if(i[0]-u[0]>kt)break;h.push({t:u[0],d:u[1].clientX}),w.push({t:u[0],d:u[1].clientY})}return{x:Se(h),y:Se(w),get direction(){const{x:u,y:p}=this,[m,f]=[Math.abs(u),Math.abs(p)];return m>f&&u>=0?"right":m>f&&u<=0?"left":f>m&&p>=0?"down":f>m&&p<=0?"up":Ct()}}}return{addMovement:l,endTouch:a,getVelocity:o}}function Ct(){throw new Error}function Et(e){let{isActive:l,isTemporary:a,width:o,touchless:n,position:t}=e;Z(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})}),ne(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",_)});const i=r(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:w,getVelocity:b}=Mt();let u=!1;const p=k(!1),m=k(0),f=k(0);let y;function M(g,s){return(t.value==="left"?g:t.value==="right"?document.documentElement.clientWidth-g:t.value==="top"?g:t.value==="bottom"?document.documentElement.clientHeight-g:W())-(s?o.value:0)}function B(g){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=t.value==="left"?(g-f.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-g-f.value)/o.value:t.value==="top"?(g-f.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-g-f.value)/o.value:W();return s?Math.max(0,Math.min(1,c)):c}function S(g){if(n.value)return;const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY,v=25,V=t.value==="left"?s<v:t.value==="right"?s>document.documentElement.clientWidth-v:t.value==="top"?c<v:t.value==="bottom"?c>document.documentElement.clientHeight-v:W(),x=l.value&&(t.value==="left"?s<o.value:t.value==="right"?s>document.documentElement.clientWidth-o.value:t.value==="top"?c<o.value:t.value==="bottom"?c>document.documentElement.clientHeight-o.value:W());(V||x||l.value&&a.value)&&(u=!0,y=[s,c],f.value=M(i.value?s:c,l.value),m.value=B(i.value?s:c),w(g),h(g))}function T(g){const s=g.changedTouches[0].clientX,c=g.changedTouches[0].clientY;if(u){if(!g.cancelable){u=!1;return}const V=Math.abs(s-y[0]),x=Math.abs(c-y[1]);(i.value?V>x&&V>3:x>V&&x>3)?(p.value=!0,u=!1):(i.value?x:V)>3&&(u=!1)}if(!p.value)return;g.preventDefault(),h(g);const v=B(i.value?s:c,!1);m.value=Math.max(0,Math.min(1,v)),v>1?f.value=M(i.value?s:c,!0):v<0&&(f.value=M(i.value?s:c,!1))}function _(g){if(u=!1,!p.value)return;h(g),p.value=!1;const s=b(g.changedTouches[0].identifier),c=Math.abs(s.x),v=Math.abs(s.y);(i.value?c>v&&c>400:v>c&&v>3)?l.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||W()):l.value=m.value>.5}const C=r(()=>p.value?{transform:t.value==="left"?`translateX(calc(-100% + ${m.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${m.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${m.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${m.value*o.value}px))`:W(),transition:"none"}:void 0);return{isDragging:p,dragProgress:m,dragStyles:C}}function W(){throw new Error}function Pt(){const l=re("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}const At=["start","end","left","right","top","bottom"],Nt=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>At.includes(e)},sticky:Boolean,...Be(),...K(),...Ie(),...Pe(),...ke(),...le({tag:"nav"}),...ce()},"VNavigationDrawer"),Rt=z()({name:"VNavigationDrawer",props:Nt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,l){let{attrs:a,emit:o,slots:n}=l;const{isRtl:t}=de(),{themeClasses:i}=ve(e),{borderClasses:h}=_e(e),{backgroundColorClasses:w,backgroundColorStyles:b}=se(j(e,"color")),{elevationClasses:u}=Me(e),{mobile:p}=qe(),{roundedClasses:m}=Ce(e),f=rt(),y=Te(e,"modelValue",null,I=>!!I),{ssrBootStyles:M}=me(),{scopeId:B}=Pt(),S=U(),T=k(!1),_=r(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),C=r(()=>ct(e.location,t.value)),g=r(()=>!e.permanent&&(p.value||e.temporary)),s=r(()=>e.sticky&&!g.value&&C.value!=="bottom");e.expandOnHover&&e.rail!=null&&L(T,I=>o("update:rail",!I)),e.disableResizeWatcher||L(g,I=>!e.permanent&&Ge(()=>y.value=!I)),!e.disableRouteWatcher&&f&&L(f.currentRoute,()=>g.value&&(y.value=!1)),L(()=>e.permanent,I=>{I&&(y.value=!0)}),Ue(()=>{e.modelValue!=null||g.value||(y.value=e.permanent||!p.value)});const{isDragging:c,dragProgress:v,dragStyles:V}=Et({isActive:y,isTemporary:g,width:_,touchless:j(e,"touchless"),position:C}),x=r(()=>{const I=g.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):_.value;return c.value?I*v.value:I}),{layoutItemStyles:E,layoutItemScrimStyles:N}=Ae({id:e.name,order:r(()=>parseInt(e.order,10)),position:C,layoutSize:x,elementSize:_,active:r(()=>y.value||c.value),disableTransitions:r(()=>c.value),absolute:r(()=>e.absolute||s.value&&typeof H.value!="string")}),{isStuck:H,stickyStyles:D}=It({rootEl:S,isSticky:s,layoutItemStyles:E}),G=se(r(()=>typeof e.scrim=="string"?e.scrim:null)),fe=r(()=>({...c.value?{opacity:v.value*.2,transition:"none"}:void 0,...N.value}));Ve({VList:{bgColor:"transparent"}});function J(){T.value=!0}function Q(){T.value=!1}return O(()=>{const I=n.image||e.image;return d(Ke,null,[d(e.tag,q({ref:S,onMouseenter:J,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${C.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":g.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":s.value},i.value,w.value,h.value,u.value,m.value,e.class],style:[b.value,E.value,V.value,M.value,D.value,e.style]},B,a),{default:()=>{var ee,te,$,Y;return[I&&d("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(ee=n.image)==null?void 0:ee.call(n,{image:e.image}):d("img",{src:e.image,alt:""},null)]),n.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(te=n.prepend)==null?void 0:te.call(n)]),d("div",{class:"v-navigation-drawer__content"},[($=n.default)==null?void 0:$.call(n)]),n.append&&d("div",{class:"v-navigation-drawer__append"},[(Y=n.append)==null?void 0:Y.call(n)])]}}),d(Ze,{name:"fade-transition"},{default:()=>[g.value&&(c.value||y.value)&&!!e.scrim&&d("div",q({class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[fe.value,G.backgroundColorStyles.value],onClick:()=>y.value=!1},B),null)]})])}),{isStuck:H}}}),Lt={data:()=>({drawer:null})},zt=Object.assign(Lt,{__name:"Baseline",setup(e){const l=U(null);return(a,o)=>{const n=Je("router-view");return Qe(),et(ht,{id:"inspire"},{default:F(()=>[d(Rt,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=t=>l.value=t)},null,8,["modelValue"]),d(St,null,{default:F(()=>[d(Vt,{onClick:o[1]||(o[1]=t=>l.value=!l.value)}),d(pe,null,{default:F(()=>[he("Find A Doc Profile")]),_:1}),d(pe,{class:"text-right pr-4"},{default:F(()=>[he(tt(at(nt).name),1)]),_:1})]),_:1}),d(Bt,null,{default:F(()=>[d(n)]),_:1})]),_:1})}}});export{zt as default};
