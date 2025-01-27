import{r as S,aI as nt,bg as ce,aG as ot,aF as st,bh as Oe,aM as Se,bi as De,bj as Be,bk as we,ao as it,al as lt,ai as ae,j as I,s as J,aq as X,ar as re,b9 as Qe,as as ct,ay as ut,aP as W,aw as Ye,av as Ke,au as We,a0 as Xe,ak as pt}from"./index-DiONe1dj.js";import{v as dt}from"./visuallyHidden-Dan1xhjv.js";function ft(e,a,o=(s,p)=>s===p){return e.length===a.length&&e.every((s,p)=>o(s,a[p]))}const mt=2;function Ze(e,a){return e-a}function qe(e,a){const{index:o}=e.reduce((s,p,A)=>{const L=Math.abs(a-p);return s===null||L<s.distance||L===s.distance?{distance:L,index:A}:s},null)??{};return o}function he(e,a){if(a.current!==void 0&&e.changedTouches){const o=e;for(let s=0;s<o.changedTouches.length;s+=1){const p=o.changedTouches[s];if(p.identifier===a.current)return{x:p.clientX,y:p.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Le(e,a,o){return(e-a)*100/(o-a)}function bt(e,a,o){return(o-a)*e+a}function gt(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),s=o[0].split(".")[1];return(s?s.length:0)+parseInt(o[1],10)}const a=e.toString().split(".")[1];return a?a.length:0}function vt(e,a,o){const s=Math.round((e-o)/a)*a+o;return Number(s.toFixed(gt(a)))}function _e({values:e,newValue:a,index:o}){const s=e.slice();return s[o]=a,s.sort(Ze)}function ye({sliderRef:e,activeIndex:a,setActive:o}){var p,A,L;const s=Se(e.current);(!((p=e.current)!=null&&p.contains(s.activeElement))||Number((A=s==null?void 0:s.activeElement)==null?void 0:A.getAttribute("data-index"))!==a)&&((L=e.current)==null||L.querySelector(`[type="range"][data-index="${a}"]`).focus()),o&&o(a)}function ke(e,a){return typeof e=="number"&&typeof a=="number"?e===a:typeof e=="object"&&typeof a=="object"?ft(e,a):!1}const ht={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},yt=e=>e;let xe;function Ge(){return xe===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?xe=CSS.supports("touch-action","none"):xe=!0),xe}function kt(e){const{"aria-labelledby":a,defaultValue:o,disabled:s=!1,disableSwap:p=!1,isRtl:A=!1,marks:L=!1,max:h=100,min:d=0,name:C,onChange:z,onChangeCommitted:Q,orientation:ne="horizontal",rootRef:Ce,scale:ue=yt,step:N=1,shiftStep:oe=10,tabIndex:pe,value:Te}=e,M=S.useRef(void 0),[j,Z]=S.useState(-1),[Ue,H]=S.useState(-1),[de,fe]=S.useState(!1),ee=S.useRef(0),[F,O]=nt({controlled:Te,default:o??d,name:"Slider"}),c=z&&((t,r,n)=>{const l=t.nativeEvent||t,m=new l.constructor(l.type,l);Object.defineProperty(m,"target",{writable:!0,value:{value:r,name:C}}),z(m,r,n)}),u=Array.isArray(F);let y=u?F.slice().sort(Ze):[F];y=y.map(t=>t==null?d:ce(t,d,h));const U=L===!0&&N!==null?[...Array(Math.floor((h-d)/N)+1)].map((t,r)=>({value:d+N*r})):L||[],E=U.map(t=>t.value),[q,$]=S.useState(-1),T=S.useRef(null),k=ot(Ce,T),te=t=>r=>{var l;const n=Number(r.currentTarget.getAttribute("data-index"));Be(r.target)&&$(n),H(n),(l=t==null?void 0:t.onFocus)==null||l.call(t,r)},Re=t=>r=>{var n;Be(r.target)||$(-1),H(-1),(n=t==null?void 0:t.onBlur)==null||n.call(t,r)},me=(t,r)=>{const n=Number(t.currentTarget.getAttribute("data-index")),l=y[n],m=E.indexOf(l);let i=r;if(U&&N==null){const w=E[E.length-1];i>w?i=w:i<E[0]?i=E[0]:i=i<l?E[m-1]:E[m+1]}if(i=ce(i,d,h),u){p&&(i=ce(i,y[n-1]||-1/0,y[n+1]||1/0));const w=i;i=_e({values:y,newValue:i,index:n});let R=n;p||(R=i.indexOf(w)),ye({sliderRef:T,activeIndex:R})}O(i),$(n),c&&!ke(i,F)&&c(t,i,n),Q&&Q(t,i)},Ie=t=>r=>{var n;if(N!==null){const l=Number(r.currentTarget.getAttribute("data-index")),m=y[l];let i=null;(r.key==="ArrowLeft"||r.key==="ArrowDown")&&r.shiftKey||r.key==="PageDown"?i=Math.max(m-oe,d):((r.key==="ArrowRight"||r.key==="ArrowUp")&&r.shiftKey||r.key==="PageUp")&&(i=Math.min(m+oe,h)),i!==null&&(me(r,i),r.preventDefault())}(n=t==null?void 0:t.onKeyDown)==null||n.call(t,r)};st(()=>{var t;s&&T.current.contains(document.activeElement)&&((t=document.activeElement)==null||t.blur())},[s]),s&&j!==-1&&Z(-1),s&&q!==-1&&$(-1);const Ae=t=>r=>{var n;(n=t.onChange)==null||n.call(t,r),me(r,r.target.valueAsNumber)},se=S.useRef(void 0);let D=ne;A&&ne==="horizontal"&&(D+="-reverse");const _=({finger:t,move:r=!1})=>{const{current:n}=T,{width:l,height:m,bottom:i,left:w}=n.getBoundingClientRect();let R;D.startsWith("vertical")?R=(i-t.y)/m:R=(t.x-w)/l,D.includes("-reverse")&&(R=1-R);let g;if(g=bt(R,d,h),N)g=vt(g,N,d);else{const le=qe(E,g);g=E[le]}g=ce(g,d,h);let V=0;if(u){r?V=se.current:V=qe(y,g),p&&(g=ce(g,y[V-1]||-1/0,y[V+1]||1/0));const le=g;g=_e({values:y,newValue:g,index:V}),p&&r||(V=g.indexOf(le),se.current=V)}return{newValue:g,activeIndex:V}},B=Oe(t=>{const r=he(t,M);if(!r)return;if(ee.current+=1,t.type==="mousemove"&&t.buttons===0){K(t);return}const{newValue:n,activeIndex:l}=_({finger:r,move:!0});ye({sliderRef:T,activeIndex:l,setActive:Z}),O(n),!de&&ee.current>mt&&fe(!0),c&&!ke(n,F)&&c(t,n,l)}),K=Oe(t=>{const r=he(t,M);if(fe(!1),!r)return;const{newValue:n}=_({finger:r,move:!0});Z(-1),t.type==="touchend"&&H(-1),Q&&Q(t,n),M.current=void 0,b()}),G=Oe(t=>{if(s)return;Ge()||t.preventDefault();const r=t.changedTouches[0];r!=null&&(M.current=r.identifier);const n=he(t,M);if(n!==!1){const{newValue:m,activeIndex:i}=_({finger:n});ye({sliderRef:T,activeIndex:i,setActive:Z}),O(m),c&&!ke(m,F)&&c(t,m,i)}ee.current=0;const l=Se(T.current);l.addEventListener("touchmove",B,{passive:!0}),l.addEventListener("touchend",K,{passive:!0})}),b=S.useCallback(()=>{const t=Se(T.current);t.removeEventListener("mousemove",B),t.removeEventListener("mouseup",K),t.removeEventListener("touchmove",B),t.removeEventListener("touchend",K)},[K,B]);S.useEffect(()=>{const{current:t}=T;return t.addEventListener("touchstart",G,{passive:Ge()}),()=>{t.removeEventListener("touchstart",G),b()}},[b,G]),S.useEffect(()=>{s&&b()},[s,b]);const Pe=t=>r=>{var m;if((m=t.onMouseDown)==null||m.call(t,r),s||r.defaultPrevented||r.button!==0)return;r.preventDefault();const n=he(r,M);if(n!==!1){const{newValue:i,activeIndex:w}=_({finger:n});ye({sliderRef:T,activeIndex:w,setActive:Z}),O(i),c&&!ke(i,F)&&c(r,i,w)}ee.current=0;const l=Se(T.current);l.addEventListener("mousemove",B,{passive:!0}),l.addEventListener("mouseup",K)},be=Le(u?y[0]:d,d,h),ze=Le(y[y.length-1],d,h)-be,x=(t={})=>{const r=De(t),n={onMouseDown:Pe(r||{})},l={...r,...n};return{...t,ref:k,...l}},ie=t=>r=>{var l;(l=t.onMouseOver)==null||l.call(t,r);const n=Number(r.currentTarget.getAttribute("data-index"));H(n)},ge=t=>r=>{var n;(n=t.onMouseLeave)==null||n.call(t,r),H(-1)};return{active:j,axis:D,axisProps:ht,dragging:de,focusedThumbIndex:q,getHiddenInputProps:(t={})=>{const r=De(t),n={onChange:Ae(r||{}),onFocus:te(r||{}),onBlur:Re(r||{}),onKeyDown:Ie(r||{})},l={...r,...n};return{tabIndex:pe,"aria-labelledby":a,"aria-orientation":ne,"aria-valuemax":ue(h),"aria-valuemin":ue(d),name:C,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":e.step??void 0,disabled:s,...t,...l,style:{...dt,direction:A?"rtl":"ltr",width:"100%",height:"100%"}}},getRootProps:x,getThumbProps:(t={})=>{const r=De(t),n={onMouseOver:ie(r||{}),onMouseLeave:ge(r||{})};return{...t,...r,...n}},marks:U,open:Ue,range:u,rootRef:k,trackLeap:ze,trackOffset:be,values:y,getThumbStyle:t=>({pointerEvents:j!==-1&&j!==t?"none":void 0})}}const xt=e=>!e||!we(e);function St(e){return lt("MuiSlider",e)}const P=it("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),wt=e=>{const{open:a}=e;return{offset:ae(a&&P.valueLabelOpen),circle:P.valueLabelCircle,label:P.valueLabelLabel}};function Lt(e){const{children:a,className:o,value:s}=e,p=wt(e);return a?S.cloneElement(a,{className:ae(a.props.className)},I.jsxs(S.Fragment,{children:[a.props.children,I.jsx("span",{className:ae(p.offset,o),"aria-hidden":!0,children:I.jsx("span",{className:p.circle,children:I.jsx("span",{className:p.label,children:s})})})]})):null}function Je(e){return e}const Ct=J("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[`color${X(o.color)}`],o.size!=="medium"&&a[`size${X(o.size)}`],o.marked&&a.marked,o.orientation==="vertical"&&a.vertical,o.track==="inverted"&&a.trackInverted,o.track===!1&&a.trackFalse]}})(re(({theme:e})=>({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${P.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${P.dragging}`]:{[`& .${P.thumb}, & .${P.track}`]:{transition:"none"}},variants:[...Object.entries(e.palette).filter(Ye()).map(([a])=>({props:{color:a},style:{color:(e.vars||e).palette[a].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}))),Tt=J("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,a)=>a.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),Rt=J("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,a)=>a.track})(re(({theme:e})=>({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.entries(e.palette).filter(Ye()).map(([a])=>({props:{color:a,track:"inverted"},style:{...e.vars?{backgroundColor:e.vars.palette.Slider[`${a}Track`],borderColor:e.vars.palette.Slider[`${a}Track`]}:{backgroundColor:Ke(e.palette[a].main,.62),borderColor:Ke(e.palette[a].main,.62),...e.applyStyles("dark",{backgroundColor:We(e.palette[a].main,.5)}),...e.applyStyles("dark",{borderColor:We(e.palette[a].main,.5)})}}}))]}))),It=J("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.thumb,a[`thumbColor${X(o.color)}`],o.size!=="medium"&&a[`thumbSize${X(o.size)}`]]}})(re(({theme:e})=>({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${P.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.entries(e.palette).filter(Ye()).map(([a])=>({props:{color:a},style:{[`&:hover, &.${P.focusVisible}`]:{...e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${Xe(e.palette[a].main,.16)}`},"@media (hover: none)":{boxShadow:"none"}},[`&.${P.active}`]:{...e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${Xe(e.palette[a].main,.16)}`}}}}))]}))),At=J(Lt,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,a)=>a.valueLabel})(re(({theme:e})=>({zIndex:1,whiteSpace:"nowrap",...e.typography.body2,fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${P.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${P.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),Pt=J("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Qe(e)&&e!=="markActive",overridesResolver:(e,a)=>{const{markActive:o}=e;return[a.mark,o&&a.markActive]}})(re(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]}))),zt=J("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Qe(e)&&e!=="markLabelActive",overridesResolver:(e,a)=>a.markLabel})(re(({theme:e})=>({...e.typography.body2,color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]}))),Mt=e=>{const{disabled:a,dragging:o,marked:s,orientation:p,track:A,classes:L,color:h,size:d}=e,C={root:["root",a&&"disabled",o&&"dragging",s&&"marked",p==="vertical"&&"vertical",A==="inverted"&&"trackInverted",A===!1&&"trackFalse",h&&`color${X(h)}`,d&&`size${X(d)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",a&&"disabled",d&&`thumbSize${X(d)}`,h&&`thumbColor${X(h)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return pt(C,St,L)},Nt=({children:e})=>e,Vt=S.forwardRef(function(a,o){const s=ct({props:a,name:"MuiSlider"}),p=ut(),{"aria-label":A,"aria-valuetext":L,"aria-labelledby":h,component:d="span",components:C={},componentsProps:z={},color:Q="primary",classes:ne,className:Ce,disableSwap:ue=!1,disabled:N=!1,getAriaLabel:oe,getAriaValueText:pe,marks:Te=!1,max:M=100,min:j=0,name:Z,onChange:Ue,onChangeCommitted:H,orientation:de="horizontal",shiftStep:fe=10,size:ee="medium",step:F=1,scale:O=Je,slotProps:c,slots:u,tabIndex:y,track:U="normal",value:E,valueLabelDisplay:q="off",valueLabelFormat:$=Je,...T}=s,k={...s,isRtl:p,max:M,min:j,classes:ne,disabled:N,disableSwap:ue,orientation:de,marks:Te,color:Q,size:ee,step:F,shiftStep:fe,scale:O,track:U,valueLabelDisplay:q,valueLabelFormat:$},{axisProps:te,getRootProps:Re,getHiddenInputProps:me,getThumbProps:Ie,open:Ae,active:se,axis:D,focusedThumbIndex:_,range:B,dragging:K,marks:G,values:b,trackOffset:Pe,trackLeap:be,getThumbStyle:ze}=kt({...k,rootRef:o});k.marked=G.length>0&&G.some(f=>f.label),k.dragging=K,k.focusedThumbIndex=_;const x=Mt(k),ie=(u==null?void 0:u.root)??C.Root??Ct,ge=(u==null?void 0:u.rail)??C.Rail??Tt,Me=(u==null?void 0:u.track)??C.Track??Rt,Ne=(u==null?void 0:u.thumb)??C.Thumb??It,Ee=(u==null?void 0:u.valueLabel)??C.ValueLabel??At,t=(u==null?void 0:u.mark)??C.Mark??Pt,r=(u==null?void 0:u.markLabel)??C.MarkLabel??zt,n=(u==null?void 0:u.input)??C.Input??"input",l=(c==null?void 0:c.root)??z.root,m=(c==null?void 0:c.rail)??z.rail,i=(c==null?void 0:c.track)??z.track,w=(c==null?void 0:c.thumb)??z.thumb,R=(c==null?void 0:c.valueLabel)??z.valueLabel,g=(c==null?void 0:c.mark)??z.mark,V=(c==null?void 0:c.markLabel)??z.markLabel,le=(c==null?void 0:c.input)??z.input,He=W({elementType:ie,getSlotProps:Re,externalSlotProps:l,externalForwardedProps:T,additionalProps:{...xt(ie)&&{as:d}},ownerState:{...k,...l==null?void 0:l.ownerState},className:[x.root,Ce]}),et=W({elementType:ge,externalSlotProps:m,ownerState:k,className:x.rail}),tt=W({elementType:Me,externalSlotProps:i,additionalProps:{style:{...te[D].offset(Pe),...te[D].leap(be)}},ownerState:{...k,...i==null?void 0:i.ownerState},className:x.track}),$e=W({elementType:Ne,getSlotProps:Ie,externalSlotProps:w,ownerState:{...k,...w==null?void 0:w.ownerState},className:x.thumb}),at=W({elementType:Ee,externalSlotProps:R,ownerState:{...k,...R==null?void 0:R.ownerState},className:x.valueLabel}),Ve=W({elementType:t,externalSlotProps:g,ownerState:k,className:x.mark}),je=W({elementType:r,externalSlotProps:V,ownerState:k,className:x.markLabel}),rt=W({elementType:n,getSlotProps:me,externalSlotProps:le,ownerState:k});return I.jsxs(ie,{...He,children:[I.jsx(ge,{...et}),I.jsx(Me,{...tt}),G.filter(f=>f.value>=j&&f.value<=M).map((f,v)=>{const Fe=Le(f.value,j,M),ve=te[D].offset(Fe);let Y;return U===!1?Y=b.includes(f.value):Y=U==="normal"&&(B?f.value>=b[0]&&f.value<=b[b.length-1]:f.value<=b[0])||U==="inverted"&&(B?f.value<=b[0]||f.value>=b[b.length-1]:f.value>=b[0]),I.jsxs(S.Fragment,{children:[I.jsx(t,{"data-index":v,...Ve,...!we(t)&&{markActive:Y},style:{...ve,...Ve.style},className:ae(Ve.className,Y&&x.markActive)}),f.label!=null?I.jsx(r,{"aria-hidden":!0,"data-index":v,...je,...!we(r)&&{markLabelActive:Y},style:{...ve,...je.style},className:ae(x.markLabel,je.className,Y&&x.markLabelActive),children:f.label}):null]},v)}),b.map((f,v)=>{const Fe=Le(f,j,M),ve=te[D].offset(Fe),Y=q==="off"?Nt:Ee;return I.jsx(Y,{...!we(Y)&&{valueLabelFormat:$,valueLabelDisplay:q,value:typeof $=="function"?$(O(f),v):$,index:v,open:Ae===v||se===v||q==="on",disabled:N},...at,children:I.jsx(Ne,{"data-index":v,...$e,className:ae(x.thumb,$e.className,se===v&&x.active,_===v&&x.focusVisible),style:{...ve,...ze(v),...$e.style},children:I.jsx(n,{"data-index":v,"aria-label":oe?oe(v):A,"aria-valuenow":O(f),"aria-labelledby":h,"aria-valuetext":pe?pe(O(f),v):L,value:b[v],...rt})})},v)})]})});export{Vt as S};
