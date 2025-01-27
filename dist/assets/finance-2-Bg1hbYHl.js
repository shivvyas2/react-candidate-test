import{X as h,j as e,b as m,n as l,P as r,i as g,a as y,a5 as x,G as t}from"./index-DiONe1dj.js";import{F as S}from"./Footer-B8Pmmj3C.js";import{_ as p}from"./react-apexcharts.min-CJCgssfy.js";import"./styles-CsmT8ioy.js";import{L as k,E as w,C as v,B as C,T as W,D as T,a as A,M as B,c as O}from"./ExpenseHistory-CMnhb3Yu.js";import"./HeadTableCell-BgqDXg6M.js";import{M as f}from"./MoreButton-C8Sy7TnW.js";import{b as u}from"./baseChartOptions-CECNzePo.js";import{S as b}from"./Stack-DcFxT2t8.js";import{A as I}from"./AttachMoney-DvOyY473.js";import"./LinkedIn-BB6xOq2u.js";import"./Twitter-Dks52zw_.js";import"./index-txux6-4i.js";import"./South-CDjPL3lI.js";import"./currency-B65aCku1.js";import"./Add-BBdlbjMq.js";import"./MoreVert-_T8kZFQD.js";import"./index.browser-DP16PUbO.js";import"./Tune-Dbb4UHeJ.js";import"./TableRow-M0a0oLEV.js";import"./TableCell-5KN61bOX.js";import"./Menu-CikkusLi.js";function R(){const s=h(),o=(i,c)=>x(u(s),{labels:["Audits"],colors:[i],plotOptions:{radialBar:{track:{background:c},dataLabels:{name:{show:!1},value:{color:i,fontWeight:500,offsetY:6}},hollow:{size:"50%",dropShadow:{enabled:!0,opacity:.2}}}}});return e.jsxs(m,{className:"p-3 h-full",children:[e.jsxs(l,{mb:4,children:[e.jsxs("div",{children:[e.jsx(r,{fontSize:18,fontWeight:500,children:"Wallet Summery"}),e.jsx(r,{color:"text.secondary",children:"Last 7 days reports"})]}),e.jsx(f,{size:"small"})]}),e.jsxs(b,{spacing:3,children:[e.jsxs(l,{sx:{borderRadius:3,backgroundColor:g(s)?"grey.700":"primary.25"},children:[e.jsxs(y,{pl:3,children:[e.jsx(r,{fontSize:16,fontWeight:600,children:"$2,160.36"}),e.jsx(r,{color:"text.secondary",fontWeight:500,children:"Income"})]}),e.jsx(p,{width:140,height:120,series:[70],type:"radialBar",options:o(s.palette.primary.main,s.palette.primary[100])})]}),e.jsxs(l,{sx:{borderRadius:3,backgroundColor:g(s)?"grey.700":"primary.25"},children:[e.jsxs(y,{pl:3,children:[e.jsx(r,{fontSize:16,fontWeight:600,children:"$850.65"}),e.jsx(r,{color:"text.secondary",fontWeight:500,children:"Outcome"})]}),e.jsx(p,{width:140,height:120,series:[30],type:"radialBar",options:o(s.palette.grey[500],s.palette.grey[200])})]})]})]})}function D(){const s=h(),o=["SAT","SUN","MON","TUE","WED","THU","FRI"],i=[{name:"Sales",data:[28e3,13e3,18e3,22e3,11e3,3e4,2e4]}],c=x(u(s),{stroke:{width:0},grid:{show:!0,strokeDashArray:3,borderColor:s.palette.divider},colors:[s.palette.primary.main,s.palette.primary[300],s.palette.primary[100]],xaxis:{categories:o,labels:{show:!0,style:{colors:s.palette.text.secondary}}},yaxis:{min:0,show:!0,max:5e4,tickAmount:5,labels:{formatter:a=>a/1e3+"K",style:{colors:s.palette.text.secondary}}},plotOptions:{bar:{borderRadius:9,columnWidth:"17%",borderRadiusApplication:"end",colors:{backgroundBarRadius:9,backgroundBarOpacity:.4,backgroundBarColors:[s.palette.grey[200]]}}},tooltip:{y:{formatter:function(a,{dataPointIndex:d,w:n}){return`${n.globals.labels[d]} : ${a}`}}}});return e.jsxs(m,{sx:{pt:3,px:2,pb:1},children:[e.jsxs(l,{px:2,children:[e.jsx(r,{fontSize:18,fontWeight:500,children:"Investment"}),e.jsx(f,{size:"small"})]}),e.jsx(p,{type:"bar",height:300,series:i,options:c})]})}function E(){const s=h(),o=x(u(s),{labels:["Asia","Europe","Africa"],colors:[s.palette.primary.main,s.palette.grey[400],s.palette.grey[300]],stroke:{width:0},legend:{show:!0,fontSize:"14px",position:"bottom",itemMargin:{horizontal:12},onItemClick:{toggleDataSeries:!1},onItemHover:{highlightDataSeries:!1},markers:{strokeWidth:0,size:6,offsetX:-2}},tooltip:{style:{fontSize:"14px"},y:{title:i=>i,formatter:i=>`${i}`}}});return e.jsxs(m,{className:"p-3 h-full",children:[e.jsxs(l,{mb:4,children:[e.jsx(r,{fontSize:18,fontWeight:500,children:"Top Activity"}),e.jsx(f,{size:"small"})]}),e.jsx("div",{children:e.jsx(p,{type:"pie",height:265,series:[55,45,33],options:o})})]})}const M=[{id:1,title:"USD",Icon:I,value1:94.65,value2:2.5},{id:2,title:"EURO",Icon:w,value1:26.37,value2:-1.56},{id:3,title:"GBP",Icon:v,value1:55.24,value2:3.23}];function F(){const s=h(),o=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],i=[{name:"Tasks",data:[22,30,46,50,46,30,22]}],c=x(u(s),{stroke:{show:!1},xaxis:{categories:o},colors:[s.palette.divider,s.palette.primary.main],plotOptions:{bar:{borderRadius:5,distributed:!0,columnWidth:"40%",borderRadiusApplication:"end"}},tooltip:{y:{formatter:(a,{dataPointIndex:d,w:n})=>`${n.globals.labels[d]} : ${a}`}}});return e.jsx(m,{className:"p-3 h-full",children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsxs(t,{size:{sm:6,xs:12},children:[e.jsx(r,{mb:2,fontSize:18,fontWeight:500,children:"Current Currency"}),e.jsx(b,{spacing:2,children:M.map(({Icon:a,id:d,title:n,value1:z,value2:j})=>e.jsxs(l,{children:[e.jsx(k,{title:n,Icon:e.jsx(a,{fontSize:"small",color:n==="EURO"?"success":n==="GBP"?"warning":"primary"})}),e.jsxs("div",{children:[e.jsxs(r,{fontWeight:500,children:[z,"%"]}),e.jsxs(r,{textAlign:"end",color:j>0?"success.500":"error.main",children:[j>0&&"+",j,"%"]})]})]},d))})]}),e.jsx(t,{size:{sm:6,xs:12},children:e.jsx(p,{type:"bar",series:i,options:c,height:180})})]})})}function P(){return e.jsx("div",{className:"pt-2 pb-4",children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{size:{md:6,xs:12},children:e.jsx(C,{})}),e.jsx(t,{size:{md:6,xs:12},children:e.jsx(F,{})}),e.jsx(t,{size:{md:8,xs:12},children:e.jsx(W,{type:"line"})}),e.jsx(t,{size:{md:4,xs:12},children:e.jsx(T,{})}),e.jsx(t,{size:{md:4,xs:12},children:e.jsx(R,{})}),e.jsx(t,{size:{md:8,xs:12},children:e.jsx(A,{})}),e.jsx(t,{size:{md:8,xs:12},children:e.jsx(D,{})}),e.jsx(t,{size:{md:4,xs:12},children:e.jsx(E,{})}),e.jsx(t,{size:{md:4,xs:12},children:e.jsx(B,{})}),e.jsx(t,{size:{md:8,xs:12},children:e.jsx(O,{})}),e.jsx(t,{size:12,children:e.jsx(S,{})})]})})}function ne(){return e.jsx(P,{})}export{ne as default};
