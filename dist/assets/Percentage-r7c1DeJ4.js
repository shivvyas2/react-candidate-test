import{s as e,S as t,i as l,j as n}from"./index-DiONe1dj.js";const c=e(t,{shouldForwardProp:r=>r!=="type"})(({theme:r,type:o})=>({fontSize:12,lineHeight:1,fontWeight:500,borderRadius:16,padding:".25rem .4rem",...o==="primary"&&{color:r.palette.primary.main,backgroundColor:r.palette.primary[25]},...o==="success"&&{color:r.palette.success[500],backgroundColor:r.palette.success[50]},...o==="error"&&{color:r.palette.error.main,backgroundColor:r.palette.error[50]},...l(r)&&{backgroundColor:`${r.palette.grey[700]} !important`}}));function p({children:r,type:o="success",ellipsis:a=!1,...s}){return n.jsx(c,{ellipsis:a,type:o,...s,children:r})}export{p as P};
