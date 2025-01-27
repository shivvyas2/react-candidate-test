import{s,j as e,C as l,b as p,i as d,g,F as x,M as m,B as h,G as a,r as u}from"./index-DiONe1dj.js";import{S as f}from"./Switch-ChgR3V4n.js";import{S as j}from"./Stack-DcFxT2t8.js";import{H as y}from"./HeaderEffect-C63sdbBE.js";import"./SwitchBase-DuaiR9ZJ.js";const S=s("div")(({theme:r})=>({color:"white",paddingTop:"5rem",textAlign:"center",paddingBottom:"12rem",[r.breakpoints.down("sm")]:{paddingTop:"2rem"},[r.breakpoints.down(425)]:{"& br":{display:"none"}},"& .title":{fontSize:48,fontWeight:600,marginBottom:"1rem",[r.breakpoints.down("sm")]:{fontSize:36}},"& .price-navigator":{gap:"1rem",display:"flex",paddingTop:"2rem",alignItems:"center",justifyContent:"center","& > p":{fontWeight:500},[r.breakpoints.down(375)]:{flexDirection:"column",gap:".5rem"}}}));function P(){return e.jsxs(S,{children:[e.jsx("h1",{className:"title",children:"Our Flexible Price Plan"}),e.jsxs("p",{children:["Our Free Plan lets you get going right away. Switch ",e.jsx("br",{})," to a Pro plan to get more features."]}),e.jsxs("div",{className:"price-navigator",children:[e.jsx("p",{children:"MONTHLY"}),e.jsx(f,{}),e.jsx("p",{children:"YEARLY (Save 15%)"})]})]})}const b=s(l)(({theme:r})=>({zIndex:2,marginTop:"-10rem",position:"relative",paddingBottom:"5rem"})),w=s(p,{shouldForwardProp:r=>r!=="active"})(({theme:r,active:i})=>({padding:"3rem",boxShadow:r.shadows[2],border:`1px solid ${r.palette.grey[d(r)?700:100]}`,...i&&{position:"relative",border:`1px solid ${r.palette.primary.main}`},[r.breakpoints.down(425)]:{padding:"2rem"},"& .plan-title":{fontWeight:600,textTransform:"uppercase",color:r.palette.text.secondary},"& .plan-price":{fontSize:48,paddingTop:"1rem",paddingBottom:"2rem","& span":{fontSize:16,fontWeight:500,color:r.palette.text.secondary}}})),v=s(g)({top:20,right:20,position:"absolute"});function C({title:r,price:i,popular:t,icon:o,features:c}){return e.jsxs(w,{active:t?1:0,children:[t?e.jsx(v,{label:"POPULAR"}):null,e.jsx("p",{className:"plan-title",children:r}),i?e.jsxs("h1",{className:"plan-price",children:["$",i,e.jsx("span",{children:"/month"})]}):e.jsx("h1",{className:"plan-price",children:"Free"}),e.jsx("img",{src:o,alt:"shape"}),e.jsx(j,{spacing:2,mt:5,mb:6,children:c.map(n=>e.jsxs(x,{alignItems:"center",gap:1,children:[e.jsx(m,{color:"success"}),e.jsx("p",{children:n})]},n))}),e.jsx(h,{fullWidth:!0,color:t?"primary":"secondary",children:"Choose Plan"})]})}const k=[{id:1,price:0,title:"Basic",popular:!1,icon:"/static/pages/pricing-shape-1.svg",features:["3 Prototypes","3 Boards","Single User","Normal Security","Permissions & Workflows"]},{id:2,price:14,title:"Standard",popular:!0,icon:"/static/pages/pricing-shape-2.svg",features:["3 Prototypes","3 Boards","Up to 5 Team Member","Advance Security","Permissions & Workflows"]},{id:3,price:50,title:"Enterprise",popular:!1,icon:"/static/pages/pricing-shape-3.svg",features:["5 Prototypes","5 Boards","Unlimited User","Highly Advance Security","Permissions & Workflows"]}];function B(){return e.jsx(b,{maxWidth:"lg",children:e.jsx(a,{container:!0,spacing:4,children:k.map(r=>e.jsx(a,{size:{md:4,sm:6,xs:12},children:e.jsx(C,{icon:r.icon,price:r.price,title:r.title,popular:r.popular,features:r.features})},r.id))})})}function T(){return e.jsxs(u.Fragment,{children:[e.jsx(y,{children:e.jsx(P,{})}),e.jsx(B,{})]})}function E(){return e.jsx(T,{})}export{E as default};
