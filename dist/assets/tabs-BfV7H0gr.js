import{e as b,j as e,r as p,G as n,c1 as o,bx as s,a as d,P as I}from"./index-DiONe1dj.js";import{C as T,B as t}from"./tooltip-DyRfKC8c.js";import{P as c}from"./Phone-BDf9DBkS.js";import{F as j}from"./Favorite-0lWKgfcr.js";import"./Stack-DcFxT2t8.js";import"./Add-BBdlbjMq.js";import"./DialogContent-yUPKXwbI.js";import"./ListItemText-BQDACRS8.js";import"./DialogActions-BRWuue7J.js";import"./TextField-Cz_2jxJC.js";import"./Select-CngAXAlH.js";import"./Menu-CikkusLi.js";import"./FormControlLabel-JCHSmDSw.js";import"./Switch-ChgR3V4n.js";import"./SwitchBase-DuaiR9ZJ.js";import"./Stepper-BNy6tO8Y.js";import"./TableCell-5KN61bOX.js";import"./TableContainer-Ddj8eE7V.js";import"./TableRow-M0a0oLEV.js";import"./Delete-BCX2eEvJ.js";import"./Search-CRj7DCYO.js";const h=b(e.jsx("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9m0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22"}),"PersonPin"),g=b(e.jsx("path",{d:"M6.5 5.5 12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5zm17.21 11.17C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7"}),"PhoneMissed");function a({children:i,value:r,index:l,...m}){return e.jsx(d,{mt:2,role:"tabpanel",hidden:r!==l,...m,children:r===l&&e.jsx(d,{p:3,boxShadow:1,borderRadius:2,bgcolor:({palette:{mode:x}})=>x==="dark"?"grey.700":"white",children:e.jsx(I,{children:i})})})}function u(){const[i,r]=p.useState(0),l=(m,x)=>r(x);return e.jsx(T,{title:"Tabs",children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{size:{lg:6,xs:12},children:e.jsxs(t,{title:"Basic",children:[e.jsxs(o,{value:i,onChange:l,children:[e.jsx(s,{label:"Item One"}),e.jsx(s,{label:"Item Two"}),e.jsx(s,{label:"Item Three"})]}),e.jsx(a,{value:i,index:0,children:"Item One"}),e.jsx(a,{value:i,index:1,children:"Item Two"}),e.jsx(a,{value:i,index:2,children:"Item Three"})]})}),e.jsx(n,{size:{lg:6,xs:12},children:e.jsxs(t,{title:"Secondary Color",children:[e.jsxs(o,{value:i,onChange:l,textColor:"secondary",indicatorColor:"secondary",children:[e.jsx(s,{label:"Item One"}),e.jsx(s,{label:"Item Two"}),e.jsx(s,{label:"Item Three"})]}),e.jsx(a,{value:i,index:0,children:"Item One"}),e.jsx(a,{value:i,index:1,children:"Item Two"}),e.jsx(a,{value:i,index:2,children:"Item Three"})]})}),e.jsx(n,{size:{lg:6,xs:12},children:e.jsx(t,{title:"Scrollable",children:e.jsxs(o,{value:i,onChange:l,variant:"scrollable",scrollButtons:"auto",children:[e.jsx(s,{label:"Item One"}),e.jsx(s,{label:"Item Two"}),e.jsx(s,{label:"Item Three"}),e.jsx(s,{label:"Item Four"}),e.jsx(s,{label:"Item Five"}),e.jsx(s,{label:"Item Six"}),e.jsx(s,{label:"Item Seven"})]})})}),e.jsx(n,{size:{lg:6,xs:12},children:e.jsx(t,{title:"Icon",children:e.jsxs(o,{value:i,onChange:l,children:[e.jsx(s,{icon:e.jsx(c,{}),"aria-label":"phone"}),e.jsx(s,{icon:e.jsx(j,{}),"aria-label":"favorite"}),e.jsx(s,{icon:e.jsx(h,{}),"aria-label":"person"})]})})}),e.jsx(n,{size:{lg:6,xs:12},children:e.jsx(t,{title:"Icon With Label",children:e.jsxs(o,{value:i,onChange:l,"aria-label":"icon label tabs example",children:[e.jsx(s,{icon:e.jsx(c,{}),label:"RECENT"}),e.jsx(s,{icon:e.jsx(j,{}),label:"FAVORITES"}),e.jsx(s,{icon:e.jsx(h,{}),label:"NEARBY"})]})})}),e.jsx(n,{size:{lg:6,xs:12},children:e.jsx(t,{title:"Icon position",children:e.jsxs(o,{value:i,onChange:l,"aria-label":"icon position tabs example",children:[e.jsx(s,{icon:e.jsx(c,{}),label:"TOP"}),e.jsx(s,{icon:e.jsx(g,{}),iconPosition:"start",label:"START"}),e.jsx(s,{icon:e.jsx(j,{}),iconPosition:"end",label:"END"}),e.jsx(s,{icon:e.jsx(h,{}),iconPosition:"bottom",label:"BOTTOM"})]})})})]})})}function D(){return e.jsx(u,{})}export{D as default};
