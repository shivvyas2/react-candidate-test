import{u as A,r as b,j as e,F as E,A as M,P as S,i as H,S as L,b as O,a as T,K as B}from"./index-DiONe1dj.js";import{T as F,a as I}from"./TableMoreMenu-CM13J2AH.js";import{T as C,D as N,a as q}from"./DeleteOutline-kHDBPZ_Z.js";import{S as z}from"./SearchArea-BvmXFDrF.js";import{U as W,H as _}from"./add-new-user-BzK7oY6i.js";import{E as K}from"./Edit-_2M_6KV_.js";import{a as P,c as V,T as G,b as J}from"./TableRow-M0a0oLEV.js";import{T as c}from"./TableCell-5KN61bOX.js";import{C as w}from"./Checkbox-Cc0a87Ww.js";import{T as Q,u as X,s as Y,g as Z}from"./useMuiTable-1RwRthnI.js";import{v as $}from"./visuallyHidden-Dan1xhjv.js";import{T as ee}from"./TableContainer-Ddj8eE7V.js";import{T as re}from"./TablePagination-DSjidFu7.js";import"./Apps-DCxKVsxv.js";import"./UserBigIcon-CChjm73L.js";import"./styles-BYXuOmOi.js";import"./index.esm-DJSQvWNR.js";import"./AvatarBadge-CliF8sRT.js";import"./Add-BvIq8QDp.js";import"./City-BgrHMfLt.js";import"./Facebook-CUgUt6t-.js";import"./Delete-BCX2eEvJ.js";import"./MoreVert-_T8kZFQD.js";import"./Menu-CikkusLi.js";import"./ListItemIcon-Do7NaFHH.js";import"./ListItemText-BQDACRS8.js";import"./Search-CRj7DCYO.js";import"./TextField-Cz_2jxJC.js";import"./Select-CngAXAlH.js";import"./IconWrapper-Csp0SQkY.js";import"./Modal-DZRzdQDA.js";import"./CameraAlt-DTB8sR4Z.js";import"./formik.esm-BjmLBg26.js";import"./Stack-DcFxT2t8.js";import"./DatePicker-0p9w1WB2.js";import"./DesktopDatePicker-CrrEzRm8.js";import"./index-txux6-4i.js";import"./DialogActions-BRWuue7J.js";import"./DialogContent-yUPKXwbI.js";import"./Edit-CZks6V14.js";import"./Switch-ChgR3V4n.js";import"./SwitchBase-DuaiR9ZJ.js";import"./LastPage-gfqF3dv-.js";function ae(h){const{user:s,isSelected:o,handleSelectRow:l,handleDeleteUser:n}=h,d=A(),[p,i]=b.useState(null),a=u=>{i(u.currentTarget)},t=()=>i(null);return e.jsxs(P,{hover:!0,children:[e.jsx(c,{padding:"checkbox",children:e.jsx(w,{size:"small",color:"primary",checked:o,onClick:u=>l(u,s.id)})}),e.jsx(c,{padding:"normal",children:e.jsxs(E,{alignItems:"center",gap:2,children:[e.jsx(M,{src:s.avatar,alt:s.name,variant:"rounded"}),e.jsxs("div",{children:[e.jsx(S,{fontWeight:500,color:"text.primary",sx:{":hover":{textDecoration:"underline",cursor:"pointer"}},children:s.name}),e.jsxs(S,{fontSize:13,children:["#",s.id.substring(0,11)]})]})]})}),e.jsx(c,{padding:"normal",children:s.email}),e.jsx(c,{padding:"normal",children:s.company}),e.jsx(c,{padding:"normal",children:s.role}),e.jsx(c,{padding:"normal",children:e.jsxs(F,{open:p,handleOpen:a,handleClose:t,children:[e.jsx(C,{Icon:K,title:"Edit",handleClick:()=>{t(),d("/dashboard/add-user")}}),e.jsx(C,{Icon:N,title:"Delete",handleClick:()=>{t(),n(s.id)}})]})})]})}const se=[{id:"name",numeric:!0,disablePadding:!1,label:"Name"},{id:"email",numeric:!1,disablePadding:!1,label:"Email"},{id:"company",numeric:!0,disablePadding:!1,label:"Company"},{id:"role",numeric:!0,disablePadding:!1,label:"Role"},{id:"actions",numeric:!0,disablePadding:!1,label:"Actions"}];function oe(h){const{onSelectAllRows:s,order:o,orderBy:l,numSelected:n,rowCount:d,onRequestSort:p}=h,i=a=>t=>{p(t,a)};return e.jsx(V,{sx:{backgroundColor:a=>H(a)?"grey.700":"grey.100"},children:e.jsxs(P,{children:[e.jsx(c,{padding:"checkbox",children:e.jsx(w,{size:"small",color:"primary",onChange:s,checked:d>0&&n===d,indeterminate:n>0&&n<d})}),se.map(a=>e.jsx(c,{padding:a.disablePadding?"none":"normal",sortDirection:l===a.id?o:!1,sx:{color:"text.primary",fontWeight:600},children:e.jsxs(Q,{active:l===a.id,onClick:i(a.id),direction:l===a.id?o:"asc",children:[a.label,l===a.id?e.jsx(L,{sx:$,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))]})})}function te(){const[h,s]=b.useState([...W]),[o,l]=b.useState({role:"",search:""}),{page:n,order:d,orderBy:p,selected:i,isSelected:a,rowsPerPage:t,handleSelectRow:u,handleChangePage:R,handleRequestSort:v,handleSelectAllRows:j,handleChangeRowsPerPage:y}=X({defaultOrderBy:"name"}),f=(r,m)=>{l(x=>({...x,[r]:m}))},U=(r,m)=>{f("role",m)},g=Y(h,Z(d,p)).filter(r=>o.role?r.role.toLowerCase()===o.role:o.search?r.name.toLowerCase().includes(o.search.toLowerCase()):!0),k=r=>{s(m=>m.filter(x=>x.id!==r))},D=()=>{s(r=>r.filter(m=>!i.includes(m.id))),j([])()};return e.jsx("div",{className:"pt-2 pb-4",children:e.jsxs(O,{children:[e.jsxs(T,{px:2,pt:2,children:[e.jsx(_,{value:o.role,changeTab:U}),e.jsx(z,{value:o.search,gridRoute:"/dashboard/user-grid",listRoute:"/dashboard/user-list",onChange:r=>f("search",r.target.value)})]}),i.length>0&&e.jsx(I,{selected:i.length,handleDeleteRows:D}),e.jsx(ee,{children:e.jsx(B,{autoHide:!1,children:e.jsxs(G,{children:[e.jsx(oe,{order:d,orderBy:p,numSelected:i.length,rowCount:g.length,onRequestSort:v,onSelectAllRows:j(g.map(r=>r.id))}),e.jsxs(J,{children:[g.slice(n*t,n*t+t).map(r=>e.jsx(ae,{user:r,isSelected:a(r.id),handleSelectRow:u,handleDeleteUser:k},r.id)),g.length===0&&e.jsx(q,{})]})]})})}),e.jsx(T,{padding:1,children:e.jsx(re,{page:n,component:"div",rowsPerPage:t,count:g.length,onPageChange:R,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:y})})]})})}function Qe(){return e.jsx(te,{})}export{Qe as default};
