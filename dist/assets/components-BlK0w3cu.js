import{ao as A,al as v,s as h,f as j,ar as k,r as x,as as y,j as i,ai as p,ak as w,X as R,u as H,b as P,i as r,C as m,c as S,P as g,D as d,a as M,l as T,L as V,G as u}from"./index-DiONe1dj.js";import{C as B,a as U}from"./CardMedia-BIjRoxw9.js";function D(t){return v("MuiCardActionArea",t)}const l=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),N=t=>{const{classes:e}=t;return w({root:["root"],focusHighlight:["focusHighlight"]},D,e)},z=h(j,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,e)=>e.root})(k(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${l.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${l.focusVisible} .${l.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}))),L=h("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,e)=>e.focusHighlight})(k(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}))),E=x.forwardRef(function(e,o){const n=y({props:e,name:"MuiCardActionArea"}),{children:s,className:b,focusVisibleClassName:f,...C}=n,a=n,c=N(a);return i.jsxs(z,{className:p(c.root,b),focusVisibleClassName:p(f,c.focusVisible),ref:o,ownerState:a,...C,children:[s,i.jsx(L,{className:c.focusHighlight,ownerState:a})]})});function F({title:t,image:e,link:o}){const n=R(),s=H();return i.jsx(P,{sx:{border:1,boxShadow:0,borderRadius:3,borderColor:r(n)?"grey.700":"grey.100"},children:i.jsxs(E,{disableRipple:!0,onClick:()=>s(o),children:[i.jsx(B,{alt:t,height:"150",image:e,component:"img",sx:{p:2,backgroundColor:r(n)?"grey.900":"grey.100",...r(n)&&{opacity:.5}}}),i.jsx(U,{sx:{textAlign:"center",fontWeight:600,fontSize:13},children:t})]})})}function G(){return i.jsxs(x.Fragment,{children:[i.jsxs(m,{sx:{py:{sm:10,xs:5}},children:[i.jsx(S,{fontSize:32,children:"Components"}),i.jsx(g,{color:"text.secondary",fontSize:18,mt:.6,maxWidth:{sm:500},children:"Vast collection of components that will cover all your needs from simple to complex UI."})]}),i.jsx(d,{}),i.jsxs(m,{sx:{py:{sm:10,xs:5}},children:[i.jsxs(M,{mb:5,children:[i.jsx(T,{fontSize:20,children:"MUI"}),i.jsxs(g,{color:"text.secondary",mt:1,children:["Customised components from"," ",i.jsx(V,{href:"https://mui.com/components",target:"_blank",children:"Material UI"}),"."]})]}),i.jsx(u,{container:!0,spacing:3,children:I.map((t,e)=>i.jsx(u,{size:{md:3,sm:4,xs:6},children:i.jsx(F,{link:t.link,title:t.title,image:t.image})},e))})]}),i.jsx(d,{})]})}const I=[{id:1,title:"Accordion",link:"/components/accordion",image:"/static/components/accordion.png"},{id:2,title:"Alert",link:"/components/alert",image:"/static/components/alert.png"},{id:3,title:"Autocomplete",link:"/components/autocomplete",image:"/static/components/autocomplete.png"},{id:4,title:"Avatar",link:"/components/avatar",image:"/static/components/avatar.png"},{id:5,title:"Badge",link:"/components/badge",image:"/static/components/badge.png"},{id:6,title:"Breadcrumbs",link:"/components/breadcrumbs",image:"/static/components/breadcrumbs.png"},{id:7,title:"Buttons",link:"/components/buttons",image:"/static/components/buttons.png"},{id:8,title:"Checkbox",link:"/components/checkbox",image:"/static/components/checkbox.png"},{id:9,title:"Chip",link:"/components/chip",image:"/static/components/chip.png"},{id:10,title:"Data Grid",link:"/components/data-grid",image:"/static/components/data-grid.png"},{id:11,title:"Dialog",link:"/components/dialog",image:"/static/components/dialog.png"},{id:12,title:"List",link:"/components/list",image:"/static/components/list.png"},{id:13,title:"Menu",link:"/components/menu",image:"/static/components/menu.png"},{id:14,title:"Pagination",link:"/components/pagination",image:"/static/components/pagination.png"},{id:15,title:"Pickers",link:"/components/pickers",image:"/static/components/pickers.png"},{id:16,title:"Popover",link:"/components/popover",image:"/static/components/popover.png"},{id:17,title:"Progress",link:"/components/progress",image:"/static/components/progress.png"},{id:18,title:"Radio Button",link:"/components/radio-button",image:"/static/components/radio-button.png"},{id:19,title:"Rating",link:"/components/rating",image:"/static/components/rating.png"},{id:20,title:"Slider",link:"/components/slider",image:"/static/components/slider.png"},{id:30,title:"Snackbar",link:"/components/snackbar",image:"/static/components/tree-view.png"},{id:21,title:"Stepper",link:"/components/stepper",image:"/static/components/stepper.png"},{id:22,title:"Switch",link:"/components/switch",image:"/static/components/switch.png"},{id:23,title:"Table",link:"/components/table",image:"/static/components/table.png"},{id:24,title:"Tabs",link:"/components/tabs",image:"/static/components/tabs.png"},{id:25,title:"Textfield",link:"/components/textfield",image:"/static/components/textfield.png"},{id:26,title:"Timeline",link:"/components/timeline",image:"/static/components/timeline.png"},{id:27,title:"Tooltip",link:"/components/tooltip",image:"/static/components/tooltip.png"},{id:28,title:"Transfer List",link:"/components/transfer-list",image:"/static/components/transfer-list.png"},{id:29,title:"Tree View",link:"/components/tree-view",image:"/static/components/tree-view.png"}];function W(){return i.jsx(G,{})}export{W as default};
