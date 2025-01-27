import{e as c,j as s,r as L,G as d,aL as x,bU as n,cp as r,D as f,J as M,bc as H,A as u,I as P}from"./index-DiONe1dj.js";import{C as V,B as a,L as y}from"./tooltip-DyRfKC8c.js";import{S as v}from"./StarBorder-pkXpmmdi.js";import{L as t}from"./ListItemIcon-Do7NaFHH.js";import{L as i}from"./ListItemText-BQDACRS8.js";import{C as B}from"./Checkbox-Cc0a87Ww.js";import"./Stack-DcFxT2t8.js";import"./Add-BBdlbjMq.js";import"./DialogContent-yUPKXwbI.js";import"./DialogActions-BRWuue7J.js";import"./TextField-Cz_2jxJC.js";import"./Select-CngAXAlH.js";import"./Menu-CikkusLi.js";import"./FormControlLabel-JCHSmDSw.js";import"./Switch-ChgR3V4n.js";import"./SwitchBase-DuaiR9ZJ.js";import"./Stepper-BNy6tO8Y.js";import"./TableCell-5KN61bOX.js";import"./TableContainer-Ddj8eE7V.js";import"./TableRow-M0a0oLEV.js";import"./Delete-BCX2eEvJ.js";import"./Search-CRj7DCYO.js";const D=c(s.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),A=c(s.jsx("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work"),E=c(s.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),I=c(s.jsx("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),C=c(s.jsx("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 13 3.74 7.84 12 3l8.26 4.84z"}),"Drafts"),J=c(s.jsx("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Comment"),O=c(s.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),T=c(s.jsx("path",{d:"m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88M5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98m.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3"}),"BeachAccess");function W(){const[h,g]=L.useState(!0),k=()=>g(!h),[l,z]=L.useState(1),o=(e,j)=>z(j),[m,b]=L.useState([0]),S=e=>()=>{const j=m.indexOf(e),p=[...m];j===-1?p.push(e):p.splice(j,1),b(p)};return s.jsx(V,{title:"List",children:s.jsxs(d,{container:!0,spacing:3,children:[s.jsx(d,{size:{md:6,xs:12},children:s.jsx(a,{title:"Basic",children:s.jsxs(x,{children:[s.jsx(n,{disablePadding:!0,children:s.jsxs(r,{children:[s.jsx(t,{children:s.jsx(I,{})}),s.jsx(i,{primary:"Inbox"})]})}),s.jsx(n,{disablePadding:!0,children:s.jsxs(r,{children:[s.jsx(t,{children:s.jsx(C,{})}),s.jsx(i,{primary:"Drafts"})]})}),s.jsx(f,{sx:{my:1}}),s.jsx(n,{disablePadding:!0,children:s.jsx(r,{children:s.jsx(i,{primary:"Trash"})})}),s.jsx(n,{disablePadding:!0,children:s.jsx(r,{component:"a",href:"#simple-list",children:s.jsx(i,{primary:"Spam"})})})]})})}),s.jsx(d,{size:{md:6,xs:12},children:s.jsx(a,{title:"Nested List",children:s.jsxs(x,{component:"nav",children:[s.jsxs(r,{children:[s.jsx(t,{children:s.jsx(D,{})}),s.jsx(i,{primary:"Sent mail"})]}),s.jsxs(r,{children:[s.jsx(t,{children:s.jsx(C,{})}),s.jsx(i,{primary:"Drafts"})]}),s.jsxs(r,{onClick:k,children:[s.jsx(t,{children:s.jsx(I,{})}),s.jsx(i,{primary:"Inbox"}),h?s.jsx(O,{}):s.jsx(M,{})]}),s.jsx(H,{in:h,timeout:"auto",unmountOnExit:!0,children:s.jsx(x,{component:"div",disablePadding:!0,children:s.jsxs(r,{sx:{pl:4},children:[s.jsx(t,{children:s.jsx(v,{})}),s.jsx(i,{primary:"Starred"})]})})})]})})}),s.jsx(d,{size:{md:6,xs:12},children:s.jsx(a,{title:"Folder List",children:s.jsxs(x,{children:[s.jsxs(n,{children:[s.jsx(y,{children:s.jsx(u,{children:s.jsx(E,{})})}),s.jsx(i,{primary:"Photos",secondary:"Jan 9, 2014"})]}),s.jsxs(n,{children:[s.jsx(y,{children:s.jsx(u,{children:s.jsx(A,{})})}),s.jsx(i,{primary:"Work",secondary:"Jan 7, 2014"})]}),s.jsxs(n,{children:[s.jsx(y,{children:s.jsx(u,{children:s.jsx(T,{})})}),s.jsx(i,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),s.jsx(d,{size:{md:6,xs:12},children:s.jsx(a,{title:"Selected List",children:s.jsxs(x,{component:"nav",children:[s.jsxs(r,{selected:l===0,onClick:e=>o(e,0),children:[s.jsx(t,{children:s.jsx(I,{})}),s.jsx(i,{primary:"Inbox"})]}),s.jsxs(r,{selected:l===1,onClick:e=>o(e,1),children:[s.jsx(t,{children:s.jsx(C,{})}),s.jsx(i,{primary:"Drafts"})]}),s.jsx(f,{sx:{my:1}}),s.jsx(r,{selected:l===2,onClick:e=>o(e,2),children:s.jsx(i,{primary:"Trash"})}),s.jsx(r,{selected:l===3,onClick:e=>o(e,3),children:s.jsx(i,{primary:"Spam"})})]})})}),s.jsx(d,{size:{md:6,xs:12},children:s.jsx(a,{title:"List Controls",children:s.jsx(x,{children:[0,1,2,3].map(e=>s.jsx(n,{disablePadding:!0,secondaryAction:s.jsx(P,{edge:"end",children:s.jsx(J,{})}),children:s.jsxs(r,{role:void 0,onClick:S(e),dense:!0,children:[s.jsx(t,{children:s.jsx(B,{edge:"start",tabIndex:-1,disableRipple:!0,checked:m.indexOf(e)!==-1})}),s.jsx(i,{primary:`Line item ${e+1}`})]})},e))})})})]})})}function xs(){return s.jsx(W,{})}export{xs as default};
