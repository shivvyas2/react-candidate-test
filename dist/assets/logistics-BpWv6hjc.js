import{X as S,a5 as y,j as e,b as p,a as c,n as h,P as s,G as o,A as x,s as C,i as A,F as m,H as R,B as O,e as $,a6 as g,m as H}from"./index-DiONe1dj.js";import{F as P}from"./Footer-B8Pmmj3C.js";import{_ as j}from"./react-apexcharts.min-CJCgssfy.js";import{P as k}from"./Percentage-r7c1DeJ4.js";import{M as w}from"./MoreButton-C8Sy7TnW.js";import{c as f,a as F,f as L}from"./currency-B65aCku1.js";import{b}from"./baseChartOptions-CECNzePo.js";import{L as D}from"./LinearProgress-DzlkqN9H.js";import{A as G}from"./AvatarGroup-DacyVvQh.js";import{T as B}from"./Title-CK0r36XQ.js";import{S as v}from"./Stack-DcFxT2t8.js";import{n as d}from"./index.browser-DP16PUbO.js";import{S as N}from"./ShipmentHistory-Do2SooM0.js";import"./LinkedIn-BB6xOq2u.js";import"./Twitter-Dks52zw_.js";import"./index-txux6-4i.js";import"./MoreVert-_T8kZFQD.js";import"./styles-CsmT8ioy.js";import"./Menu-CikkusLi.js";import"./StatusBadge-Cv5R2Ygy.js";import"./HeadTableCell-BgqDXg6M.js";import"./TableCell-5KN61bOX.js";import"./TableRow-M0a0oLEV.js";const z=C(p)(({theme:t})=>({padding:24,height:"100%",display:"flex",flexDirection:"column",boxShadow:t.shadows[0],justifyContent:"space-between",backgroundColor:t.palette.grey[A(t)?900:50]}));function I(){const t=S(),a=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],r=[{name:"Sales",data:[6,15,10,17,12,19,10]}],l=y(b(t),{colors:[t.palette.common.white],markers:{strokeColors:t.palette.common.white},grid:{show:!0,strokeDashArray:3,borderColor:t.palette.primary[400]},xaxis:{categories:a,labels:{show:!1},crosshairs:{show:!0,fill:{color:t.palette.common.white},stroke:{color:t.palette.common.white}}},yaxis:{min:0,max:20,show:!0,tickAmount:2,labels:{style:{colors:t.palette.common.white,fontWeight:500}}}}),i=y(b(t),{stroke:{show:!1},xaxis:{categories:a},colors:[t.palette.divider,t.palette.primary.main],plotOptions:{bar:{borderRadius:5,distributed:!0,columnWidth:"70%",borderRadiusApplication:"end"}},tooltip:{y:{formatter:(n,{dataPointIndex:u,w:T})=>`${T.globals.labels[u]} : ${n}`}}});return e.jsxs(p,{className:"h-full",children:[e.jsxs(c,{bgcolor:"primary.main",p:3,pb:8,children:[e.jsxs(h,{children:[e.jsx(s,{color:"white",ellipsis:!0,fontSize:18,fontWeight:500,children:"Last Month Shipment"}),e.jsx(w,{size:"small"})]}),e.jsx(j,{type:"line",height:130,options:l,series:r,width:"100%"})]}),e.jsx(c,{p:3,mt:-11,children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{size:{sm:6,xs:12},children:e.jsxs(z,{children:[e.jsx(W,{percentage:"+4.67%",title:f(5e4),subtitle:"Total Online Sales"}),e.jsxs(c,{mt:4,children:[e.jsxs(h,{mb:1,children:[e.jsx(s,{fontSize:12,fontWeight:600,children:"$100K to Goal"}),e.jsx(s,{fontSize:12,color:"text.secondary",children:"75%"})]}),e.jsx(D,{value:60,color:"primary",variant:"determinate",sx:{height:8}})]})]})}),e.jsx(o,{size:{sm:6,xs:12},children:e.jsxs(z,{children:[e.jsx(W,{percentage:"+2.19%",subtitle:"Total Shipments",title:f(12650)}),e.jsx(c,{mb:-3,mx:-1,children:e.jsx(j,{type:"bar",height:100,series:r,options:i})})]})}),e.jsx(o,{size:{sm:6,xs:12},children:e.jsxs(z,{children:[e.jsx(W,{percentage:"+3.33%",subtitle:"Monthly Earning",title:f(5e3)}),e.jsx(c,{mb:-3,mx:-1,children:e.jsx(j,{type:"bar",height:100,series:r,options:i})})]})}),e.jsx(o,{size:{sm:6,xs:12},children:e.jsxs(z,{children:[e.jsx(W,{percentage:"-1.9%",percentageType:"error",subtitle:"New Customer",title:f(568)}),e.jsxs(c,{mt:4,children:[e.jsx(s,{mb:.5,fontWeight:500,children:"Top Customers"}),e.jsxs(G,{max:4,children:[e.jsx(x,{alt:"Remy Sharp",src:"/static/user/user-11.png"}),e.jsx(x,{alt:"Travis Howard",src:"/static/user/user-10.png"}),e.jsx(x,{alt:"Cindy Baker",src:"/static/user/user-13.png"}),e.jsx(x,{alt:"Agnes Walker",src:"/static/user/user-14.png"}),e.jsx(x,{alt:"Trevor Henderson",src:"/static/user/user-15.png"})]})]})]})})]})})]})}function W({title:t,percentage:a,subtitle:r,percentageType:l="success"}){return e.jsxs("div",{children:[e.jsxs(m,{alignItems:"center",gap:1,children:[e.jsx(R,{fontSize:24,lineHeight:1,children:t}),e.jsx(k,{type:l,children:a})]}),e.jsx(s,{color:"text.secondary",children:r})]})}function E(){return e.jsx(p,{className:"p-3",children:e.jsxs(o,{container:!0,spacing:3,alignItems:"center",children:[e.jsx(o,{size:{sm:5,xs:12},children:e.jsx(c,{maxWidth:260,margin:"auto",children:e.jsx(c,{width:"100%",display:"block",component:"img",src:"/static/illustration/quick-gude.svg"})})}),e.jsx(o,{size:{sm:7,xs:12},children:e.jsxs(c,{p:2,children:[e.jsx(s,{lineHeight:1.3,fontSize:22,fontWeight:600,children:"Logistics is simple but not easy."}),e.jsx(s,{mt:1,color:"text.secondary",children:"The information about package is as important as the delivery package itself."}),e.jsxs(m,{mt:6,gap:2,children:[e.jsx(O,{children:"Start Now"}),e.jsx(O,{color:"secondary",children:"Quick Guide"})]})]})})]})})}const q=C(p)(({theme:t})=>({display:"grid",gridTemplateColumns:"repeat(2, 1fr)",[t.breakpoints.down("md")]:{gridTemplateColumns:"1fr"}})),K=C("div")(({theme:t})=>({padding:24,display:"flex",flexDirection:"column",justifyContent:"space-between",[t.breakpoints.up("md")]:{borderRight:`1px dashed ${t.palette.divider}`}})),M=[{id:1,title:"Truck",amount:2658},{id:2,title:"Ship",amount:6687},{id:3,title:"Flight",amount:4348}];function V(){const t=S(),a=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],r=[{name:"Tasks",data:[22,30,46,50,46,30,22]}],l=y(b(t),{stroke:{show:!1},xaxis:{categories:a},colors:[t.palette.divider,t.palette.primary.main],plotOptions:{bar:{borderRadius:7,distributed:!0,columnWidth:"60%",borderRadiusApplication:"end"}},tooltip:{y:{formatter:(n,{dataPointIndex:u,w:T})=>`${T.globals.labels[u]} : ${n}`}}}),i=y(b(t),{labels:["Truck","Ship","Flight"],stroke:{width:2,colors:[A(t)?t.palette.grey[800]:"#fff"]},colors:[t.palette.primary.main,t.palette.grey[600],t.palette.grey[300]],plotOptions:{pie:{expandOnClick:!1,donut:{size:"70%"}}},tooltip:{style:{fontSize:"14px"},y:{title:n=>n,formatter:n=>`${n}`}}});return e.jsxs(q,{children:[e.jsxs(K,{children:[e.jsx("div",{children:e.jsx(B,{title:51352,titlePrefix:"$",percentage:"+12.5%",subtitle:"Expected Earning of this year"})}),e.jsxs(h,{mt:6,gap:2,children:[e.jsx(c,{ml:-2,children:e.jsx(j,{width:130,height:130,type:"donut",options:i,series:M.reduce((n,u)=>[...n,u.amount],[])})}),e.jsx(v,{spacing:1,minWidth:120,children:M.map(n=>e.jsxs(h,{children:[e.jsx(s,{fontWeight:500,color:"text.secondary",children:n.title}),e.jsx(s,{fontWeight:500,children:f(n.amount)})]},n.id))})]})]}),e.jsxs(c,{sx:{p:3,mb:-3},children:[e.jsx(s,{fontSize:18,fontWeight:500,children:"Shipping orders"}),e.jsx(s,{color:"text.secondary",children:"This Month"}),e.jsx(j,{type:"bar",series:r,options:l,height:200})]})]})}const J=$([e.jsx("circle",{cx:"10",cy:"8",r:"4"},"0"),e.jsx("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"1")],"ManageAccounts"),Q=[{id:d(),title:"Material sourcing",image:"/static/role/1.png",subtitle:"Material sourcing involves"},{id:d(),title:"Transportation",image:"/static/role/2.png",subtitle:"The best carrier based cost"},{id:d(),title:"Order fulfillment",image:"/static/role/3.png",subtitle:"The process comprise order"},{id:d(),title:"Warehousing",image:"/static/role/4.png",subtitle:"Planners consider warehouse"},{id:d(),title:"Supply management",image:"/static/role/5.png",subtitle:"Logistics is an important link"}];function U(){const t=S();return e.jsxs(p,{className:"p-3 h-full",children:[e.jsxs(h,{mb:4,children:[e.jsxs("div",{children:[e.jsx(s,{ellipsis:!0,lineHeight:1.3,fontSize:18,fontWeight:500,children:"Role Management"}),e.jsx(g,{fontWeight:500,color:"text.secondary",children:"The important 5 logistics role"})]}),e.jsx(w,{size:"small"})]}),e.jsx(v,{spacing:3,children:Q.map(({id:a,image:r,title:l,subtitle:i})=>e.jsxs(h,{children:[e.jsxs(m,{gap:1.5,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",children:[e.jsx(x,{variant:"rounded",alt:l,src:r}),e.jsxs(c,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:[e.jsx(s,{ellipsis:!0,fontSize:16,lineHeight:1,fontWeight:600,children:l}),e.jsx(g,{ellipsis:!0,fontWeight:500,color:"text.secondary",children:i})]})]}),e.jsx(H,{sx:{width:25,height:25,flexShrink:0,borderRadius:1,backgroundColor:A(t)?"grey.700":"grey.100"},children:e.jsx(J,{sx:{fontSize:17,color:"grey.400"}})})]},a))})]})}function X(){const t=S(),a=[{name:"Sales",data:[8e3,4e3,4500,17e3,18e3,4e4,18e3,1e4,6e3,2e4]}],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=y(b(t),{grid:{show:!0,strokeDashArray:3,borderColor:t.palette.divider},colors:[t.palette.primary.main,t.palette.primary[300],t.palette.primary[100]],xaxis:{categories:r,crosshairs:{show:!0},labels:{show:!0,style:{colors:t.palette.text.secondary}}},yaxis:{min:0,show:!0,max:5e4,tickAmount:5,labels:{formatter:i=>i/1e3+"K",style:{colors:t.palette.text.secondary}}}});return e.jsxs(p,{sx:{pt:3,px:2,pb:1},children:[e.jsxs(h,{px:2,children:[e.jsx(s,{fontSize:18,fontWeight:500,children:"Company Progress"}),e.jsx(w,{size:"small"})]}),e.jsxs(m,{p:2,gap:2,alignItems:"center",flexWrap:"wrap",children:[e.jsxs("div",{children:[e.jsxs(m,{alignItems:"center",gap:1,children:[e.jsx(s,{fontWeight:600,fontSize:22,color:"primary.main",children:"$18,469"}),e.jsx(k,{type:"error",children:"-2.37%"})]}),e.jsx(s,{color:"text.secondary",children:"This month"})]}),e.jsxs("div",{children:[e.jsxs(m,{alignItems:"center",gap:1,children:[e.jsx(s,{fontWeight:600,fontSize:22,children:"$22,356"}),e.jsx(k,{children:"+4.67%"})]}),e.jsx(s,{color:"text.secondary",children:"Last month"})]})]}),e.jsx(j,{type:"area",height:270,series:a,options:l})]})}const _=[{id:d(),name:"USA",total:68258,percentage:4.67,subtitle:"30% visits",image:"/static/flags/usa-round.png"},{id:d(),name:"UK",total:50683,percentage:2.59,subtitle:"20% visits",image:"/static/flags/uk-round.png"},{id:d(),name:"Germany",total:62053,percentage:-1.18,subtitle:"28% visits",image:"/static/flags/germany-round.png"},{id:d(),name:"Spain",total:40369,percentage:-2.98,subtitle:"18% visits",image:"/static/flags/spain-round.png"},{id:d(),total:3258,name:"China",percentage:1.22,subtitle:"4% visits",image:"/static/flags/china-round.png"}];function Y(){return e.jsxs(p,{className:"p-3 h-full",children:[e.jsxs(h,{mb:4,children:[e.jsxs("div",{children:[e.jsx(s,{ellipsis:!0,lineHeight:1.3,fontSize:18,fontWeight:500,children:"Visits by country"}),e.jsx(g,{fontWeight:500,color:"text.secondary",children:"Total 200 countries visits"})]}),e.jsx(w,{size:"small"})]}),e.jsx(v,{spacing:2,children:_.map(({id:t,image:a,name:r,total:l,subtitle:i,percentage:n})=>e.jsxs(h,{children:[e.jsxs(m,{gap:1.5,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",children:[e.jsx(x,{variant:"rounded",alt:r,src:a}),e.jsxs(c,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:[e.jsx(s,{ellipsis:!0,fontSize:16,lineHeight:1,fontWeight:600,children:r}),e.jsx(g,{ellipsis:!0,fontWeight:500,color:"text.secondary",children:i})]})]}),e.jsxs(c,{textAlign:"end",children:[e.jsx(s,{fontWeight:500,children:F(l)}),e.jsx(g,{fontWeight:500,color:n<0?"error.main":"success.main",children:n})]})]},t))})]})}const Z=[{id:d(),title:"Ships",weight:50368258,total:"500 ships",image:"/static/transportation/1.png"},{id:d(),title:"Planes",weight:2336569,total:"25 planes",image:"/static/transportation/2.png"},{id:d(),title:"Trucks",weight:36566547,total:"2500 Trucks",image:"/static/transportation/3.png"},{id:d(),title:"Trains",weight:10236482,total:"1000 trains",image:"/static/transportation/4.png"}];function ee(){return e.jsxs(p,{className:"p-3 h-full",children:[e.jsxs(h,{mb:4,children:[e.jsxs("div",{children:[e.jsx(s,{ellipsis:!0,lineHeight:1.3,fontSize:18,fontWeight:500,children:"Our Transportation"}),e.jsx(g,{fontWeight:500,color:"text.secondary",children:"Total 5,200 vehicles"})]}),e.jsx(w,{size:"small"})]}),e.jsx(v,{spacing:3,children:Z.map(({id:t,image:a,title:r,total:l,weight:i})=>e.jsxs(h,{children:[e.jsxs(m,{gap:1.5,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",children:[e.jsx(x,{variant:"rounded",alt:r,src:a}),e.jsxs(c,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",children:[e.jsx(s,{ellipsis:!0,fontSize:16,lineHeight:1,fontWeight:600,children:r}),e.jsx(g,{ellipsis:!0,fontWeight:500,color:"text.secondary",children:l})]})]}),e.jsxs(c,{textAlign:"end",children:[e.jsx(s,{fontWeight:500,children:F(i)}),e.jsx(g,{fontWeight:500,color:"text.secondary",children:"Tons"})]})]},t))})]})}function te(){const t=S(),a=[{name:"Sales",data:[3e4,2e4,45e3,4e4,48e3,25e3,4e4]}],r=["70% ECR","FGI 50%","EOQ 80%","FMG 75%","PLG 90%","OLX 60%","FCR 70%"],l=y(b(t),{stroke:{width:0},colors:[t.palette.primary.main,t.palette.divider],grid:{show:!0,strokeDashArray:3,borderColor:t.palette.divider},xaxis:{crosshairs:{show:!0},categories:r,labels:{show:!0,style:{colors:t.palette.text.secondary}}},yaxis:{min:0,show:!0,max:5e4,tickAmount:5,labels:{formatter:i=>L(i),style:{colors:t.palette.text.secondary}}},plotOptions:{bar:{borderRadius:15,distributed:!0,columnWidth:"30",borderRadiusApplication:"end"}},tooltip:{y:{formatter:function(i,{dataPointIndex:n,w:u}){return`${u.globals.labels[n]} : ${f(i)}`}}},responsive:[{breakpoint:t.breakpoints.values.sm,options:{plotOptions:{bar:{borderRadius:10,horizontal:!0}},xaxis:{labels:{formatter:i=>i>0?`${Math.round(i/1e3)}K`:i}},yaxis:{show:!0,labels:{style:{fontWeight:500,colors:t.palette.text.secondary,fontFamily:t.typography.fontFamily}}}}}]});return e.jsxs(p,{sx:{pt:3,px:2},children:[e.jsxs(h,{px:2,children:[e.jsx(s,{fontSize:18,fontWeight:500,children:"Top Selling Categories"}),e.jsx(w,{size:"small"})]}),e.jsx(j,{type:"bar",height:310,series:a,options:l})]})}function se(){return e.jsx("div",{className:"pt-2 pb-4",children:e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{size:{lg:5,xs:12},children:e.jsx(I,{})}),e.jsx(o,{size:{lg:7,xs:12},children:e.jsxs(v,{spacing:3,children:[e.jsx(V,{}),e.jsx(E,{})]})}),e.jsx(o,{size:{md:8,xs:12},children:e.jsx(X,{})}),e.jsx(o,{size:{md:4,xs:12},children:e.jsx(U,{})}),e.jsx(o,{size:{md:4,xs:12},children:e.jsx(ee,{})}),e.jsx(o,{size:{md:8,xs:12},children:e.jsx(te,{})}),e.jsx(o,{size:{md:4,xs:12},children:e.jsx(Y,{})}),e.jsx(o,{size:{md:8,xs:12},children:e.jsx(N,{})}),e.jsx(o,{size:12,children:e.jsx(P,{})})]})})}function Te(){return e.jsx(se,{})}export{Te as default};
