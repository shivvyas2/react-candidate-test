import{X as d,a8 as h,a5 as m,j as e,b as p,n as x,P as t,H as u,S as j,B as b}from"./index-DiONe1dj.js";import{_ as f}from"./react-apexcharts.min-CJCgssfy.js";import{M as g}from"./MoreButton-C8Sy7TnW.js";import{b as y}from"./baseChartOptions-CECNzePo.js";function B(){const s=d(),{t:a}=h(),r=[{name:"Tasks",data:[22,30,46,50,46,30,22]}],o=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],i=m(y(s),{dataLabels:{enabled:!1},stroke:{show:!1},xaxis:{categories:o},colors:[s.palette.divider,s.palette.primary.main],plotOptions:{bar:{borderRadius:7,columnWidth:"40%",distributed:!0}},tooltip:{y:{formatter:(n,{dataPointIndex:l,w:c})=>`${c.globals.labels[l]} : ${n}`}}});return e.jsxs(p,{className:"p-3 h-full",children:[e.jsxs(x,{children:[e.jsxs("div",{children:[e.jsx(t,{color:"text.secondary",children:a("Live Online User")}),e.jsx(u,{children:"348"})]}),e.jsx(g,{size:"small"})]}),e.jsxs(t,{mt:4,children:[a("Page views")," ",e.jsx(j,{color:"text.secondary",children:"/ Second"})]}),e.jsx(f,{type:"bar",options:i,series:r,height:250}),e.jsx(b,{color:"secondary",sx:{width:"100%"},children:a("View Details")})]})}export{B as L};
