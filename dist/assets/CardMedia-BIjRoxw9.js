import{ao as m,al as p,s as u,r as M,as as g,j as v,ai as f,ak as y}from"./index-DiONe1dj.js";function I(t){return p("MuiCardContent",t)}m("MuiCardContent",["root"]);const S=t=>{const{classes:o}=t;return y({root:["root"]},I,o)},b=u("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:16,"&:last-child":{paddingBottom:24}}),O=M.forwardRef(function(o,e){const s=g({props:o,name:"MuiCardContent"}),{className:n,component:i="div",...r}=s,a={...s,component:i},d=S(a);return v.jsx(b,{as:i,className:f(d.root,n),ownerState:a,ref:e,...r})});function k(t){return p("MuiCardMedia",t)}m("MuiCardMedia",["root","media","img"]);const w=t=>{const{classes:o,isMediaComponent:e,isImageComponent:s}=t;return y({root:["root",e&&"media",s&&"img"]},k,o)},E=u("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t,{isMediaComponent:s,isImageComponent:n}=e;return[o.root,s&&o.media,n&&o.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),U=["video","audio","picture","iframe","img"],h=["picture","img"],P=M.forwardRef(function(o,e){const s=g({props:o,name:"MuiCardMedia"}),{children:n,className:i,component:r="div",image:a,src:d,style:l,...R}=s,c=U.includes(r),N=!c&&a?{backgroundImage:`url("${a}")`,...l}:l,C={...s,component:r,isMediaComponent:c,isImageComponent:h.includes(r)},x=w(C);return v.jsx(E,{className:f(x.root,i),as:r,role:!c&&a?"img":void 0,ref:e,style:N,ownerState:C,src:c?a||d:void 0,...R,children:n})});export{P as C,O as a};
