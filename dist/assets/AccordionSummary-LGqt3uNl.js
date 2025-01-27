import{r as c,ao as w,al as N,s as x,ap as z,ar as f,as as $,aI as J,at as I,bc as K,j as n,ai as h,ak as j,f as Q}from"./index-DiONe1dj.js";const B=c.createContext({});function X(o){return N("MuiAccordion",o)}const R=w("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),Y=o=>{const{classes:s,square:t,expanded:r,disabled:e,disableGutters:i}=o;return j({root:["root",!t&&"rounded",r&&"expanded",e&&"disabled",!i&&"gutters"],heading:["heading"],region:["region"]},X,s)},Z=x(z,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[{[`& .${R.region}`]:s.region},s.root,!t.square&&s.rounded,!t.disableGutters&&s.gutters]}})(f(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),f(({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]}))),_=x("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(o,s)=>s.heading})({all:"unset"}),lo=c.forwardRef(function(s,t){const r=$({props:s,name:"MuiAccordion"}),{children:e,className:i,defaultExpanded:d=!1,disabled:l=!1,disableGutters:p=!1,expanded:S,onChange:u,square:y=!1,slots:A={},slotProps:v={},TransitionComponent:M,TransitionProps:m,...g}=r,[a,G]=J({controlled:S,default:d,name:"Accordion",state:"expanded"}),T=c.useCallback(O=>{G(!a),u&&u(O,!a)},[a,u,G]),[P,...U]=c.Children.toArray(e),V=c.useMemo(()=>({expanded:a,disabled:l,disableGutters:p,toggle:T}),[a,l,p,T]),C={...r,square:y,disabled:l,disableGutters:p,expanded:a},k=Y(C),W={transition:M,...A},E={transition:m,...v},D={slots:W,slotProps:E},[H,q]=I("heading",{elementType:_,externalForwardedProps:D,className:k.heading,ownerState:C}),[L,F]=I("transition",{elementType:K,externalForwardedProps:D,ownerState:C});return n.jsxs(Z,{className:h(k.root,i),ref:t,ownerState:C,square:y,...g,children:[n.jsx(H,{...q,children:n.jsx(B.Provider,{value:V,children:P})}),n.jsx(L,{in:a,timeout:"auto",...F,children:n.jsx("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region",className:k.region,children:U})})]})});function oo(o){return N("MuiAccordionDetails",o)}w("MuiAccordionDetails",["root"]);const so=o=>{const{classes:s}=o;return j({root:["root"]},oo,s)},to=x("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(f(({theme:o})=>({padding:o.spacing(1,2,2)}))),po=c.forwardRef(function(s,t){const r=$({props:s,name:"MuiAccordionDetails"}),{className:e,...i}=r,d=r,l=so(d);return n.jsx(to,{className:h(l.root,e),ref:t,ownerState:d,...i})});function ro(o){return N("MuiAccordionSummary",o)}const b=w("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),eo=o=>{const{classes:s,expanded:t,disabled:r,disableGutters:e}=o;return j({root:["root",t&&"expanded",r&&"disabled",!e&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!e&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},ro,s)},ao=x(Q,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(f(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${b.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${b.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${b.disabled})`]:{cursor:"pointer"},variants:[{props:t=>!t.disableGutters,style:{[`&.${b.expanded}`]:{minHeight:64}}}]}})),no=x("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(f(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{margin:"20px 0"}}}]}))),io=x("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(f(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{transform:"rotate(180deg)"}}))),uo=c.forwardRef(function(s,t){const r=$({props:s,name:"MuiAccordionSummary"}),{children:e,className:i,expandIcon:d,focusVisibleClassName:l,onClick:p,...S}=r,{disabled:u=!1,disableGutters:y,expanded:A,toggle:v}=c.useContext(B),M=a=>{v&&v(a),p&&p(a)},m={...r,expanded:A,disabled:u,disableGutters:y},g=eo(m);return n.jsxs(ao,{focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":A,className:h(g.root,i),focusVisibleClassName:h(g.focusVisible,l),onClick:M,ref:t,ownerState:m,...S,children:[n.jsx(no,{className:g.content,ownerState:m,children:e}),d&&n.jsx(io,{className:g.expandIconWrapper,ownerState:m,children:d})]})});export{uo as A,po as a,lo as b};
