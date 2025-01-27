import{bq as Z,bm as U,br as k,bs as T,bt as F,c5 as B,bu as J,c6 as W,j as e,t as q,e as D,s as c,A as y,n as h,P as g,S as w,a6 as P,F as m,a as f,K as R,i as O,I as A,b as Y,H as V,c7 as K,D as v,b8 as Q,B as X,r as ee,bH as se,G as I,a1 as ne}from"./index-DiONe1dj.js";import{A as E}from"./Add-BBdlbjMq.js";import{c as te,g as ae,a as ie}from"./getRoundingMethod-H0CHM3-u.js";import{n as o}from"./index.browser-DP16PUbO.js";import{C as re}from"./CameraAlt-DTB8sR4Z.js";import{M as oe}from"./MoreHoriz-CQIwmz7Y.js";import{C as le}from"./ChevronRight-RyCUgdTc.js";import{u as ce}from"./index-BeWYCyJF.js";import{S as de}from"./Stack-DcFxT2t8.js";import{S as ge}from"./SearchInput-CNFH43Cj.js";import"./index-txux6-4i.js";function me(s,t,n){const u=J(),a=(n==null?void 0:n.locale)??u.locale??Z,d=te(s,t);if(isNaN(d))throw new RangeError("Invalid time value");const l=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:d}),[M,H]=U(n==null?void 0:n.in,...d>0?[t,s]:[s,t]),x=ae((n==null?void 0:n.roundingMethod)??"round"),b=H.getTime()-M.getTime(),p=b/W,G=k(H)-k(M),j=(b-G)/W,C=n==null?void 0:n.unit;let i;if(C?i=C:p<1?i="second":p<60?i="minute":p<T?i="hour":j<F?i="day":j<B?i="month":i="year",i==="second"){const r=x(b/1e3);return a.formatDistance("xSeconds",r,l)}else if(i==="minute"){const r=x(p);return a.formatDistance("xMinutes",r,l)}else if(i==="hour"){const r=x(p/60);return a.formatDistance("xHours",r,l)}else if(i==="day"){const r=x(j/T);return a.formatDistance("xDays",r,l)}else if(i==="month"){const r=x(j/F);return r===12&&C!=="month"?a.formatDistance("xYears",1,l):a.formatDistance("xMonths",r,l)}else{const r=x(j/B);return a.formatDistance("xYears",r,l)}}function ue(s,t){return me(s,ie(s),t)}const $=s=>e.jsxs(q,{viewBox:"0 0 14 15",fill:"none",...s,children:[e.jsx("path",{d:"M9.26198 9.76149L4.73859 5.2381C4.44124 4.94075 3.95913 4.94078 3.66178 5.23812L3.33894 5.56097C3.04159 5.85831 3.04157 6.34043 3.33891 6.63777L7.86231 11.1612C8.15965 11.4585 8.64177 11.4585 8.93911 11.1611L9.26196 10.8383C9.5593 10.541 9.55933 10.0588 9.26198 9.76149Z",fill:"currentColor"}),e.jsx("path",{d:"M11.981 5.39022L9.10938 2.51855L5.51961 6.10832L8.39127 8.97999L11.981 5.39022Z",fill:"currentColor"}),e.jsx("path",{d:"M13.2997 3.99991L10.4996 1.19982C10.1131 0.813318 9.48652 0.813283 9.10002 1.19979C8.71351 1.5863 8.71345 2.21299 9.09996 2.5995L11.9 5.39958C12.2866 5.78609 12.9133 5.78604 13.2998 5.39954C13.6863 5.01303 13.6862 4.38642 13.2997 3.99991Z",fill:"currentColor"}),e.jsx("path",{opacity:"0.4",d:"M4.90008 8.19971L6.30009 9.59979L1.40001 14.4998H0V13.0999L4.90008 8.19971Z",fill:"currentColor"})]}),xe=D(e.jsx("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll"),he=c("div")(({theme:s})=>({gap:12,display:"flex",padding:"1rem",cursor:"pointer","&:hover":{backgroundColor:s.palette.action.selected},".chat-info":{flexGrow:1}})),fe=c("div")(({theme:s})=>({width:18,height:18,color:"white",display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",backgroundColor:s.palette.primary.main}));function _(s){const{name:t,time:n,image:u,lastMsg:a,unseenMsg:d,lastMsgSeen:l,isLastMsgIncoming:M}=s;return e.jsxs(he,{children:[e.jsx(y,{src:u}),e.jsxs("div",{className:"chat-info",children:[e.jsxs(h,{children:[e.jsx(g,{fontWeight:500,children:t}),e.jsxs(g,{fontSize:12,color:"text.secondary",children:[ue(new Date(n))," ago"]})]}),e.jsxs(h,{mt:.5,children:[e.jsxs(g,{fontSize:12,color:"text.secondary",children:[M?null:e.jsx(w,{color:"text.primary",children:"You: "}),a]}),d?e.jsx(fe,{children:e.jsx(P,{fontWeight:500,children:d})}):e.jsx(xe,{sx:{fontSize:18,color:l?"primary.main":"grey.400"}})]})]})]})}const pe=[{id:o(),unseenMsg:0,lastMsgSeen:!1,name:"Aiony Haust",isLastMsgIncoming:!1,image:"/static/user/user-19.png",lastMsg:"Tell me about somthing?",time:Date.parse("Feb 14, 2023, 17:00")},{id:o(),unseenMsg:0,lastMsgSeen:!0,name:"Yev Ledenov",isLastMsgIncoming:!1,lastMsg:"Can you send some demo?",image:"/static/user/user-11.png",time:Date.parse("Feb 14, 2023, 19:15")}],je=[{id:o(),unseenMsg:0,lastMsgSeen:!1,name:"Aiony Haust",isLastMsgIncoming:!1,image:"/static/user/user-19.png",lastMsg:"Tell me about somthing?",time:Date.parse("Feb 14, 2023, 17:00")},{id:o(),unseenMsg:0,lastMsgSeen:!0,name:"Yev Ledenov",isLastMsgIncoming:!1,lastMsg:"Can you send some demo?",image:"/static/user/user-11.png",time:Date.parse("Feb 14, 2023, 19:15")},{id:o(),unseenMsg:5,lastMsgSeen:!1,name:"Vicky Hladynets",isLastMsgIncoming:!0,image:"/static/user/user-16.png",lastMsg:"Can you send some demo?",time:Date.parse("Feb 14, 2023, 17:00")},{id:o(),unseenMsg:0,lastMsgSeen:!1,name:"Julian Wan",isLastMsgIncoming:!1,lastMsg:"Thank You",image:"/static/user/user-11.png",time:Date.parse("Feb 14, 2023, 19:15")},{id:o(),unseenMsg:0,lastMsgSeen:!1,name:"Aiony Haust",isLastMsgIncoming:!1,image:"/static/user/user-18.png",lastMsg:"Tell me about somthing?",time:Date.parse("Feb 14, 2023, 17:00")},{id:o(),unseenMsg:0,lastMsgSeen:!0,name:"Yev Ledenov",isLastMsgIncoming:!1,lastMsg:"Can you send some demo?",image:"/static/user/user-11.png",time:Date.parse("Feb 14, 2023, 19:15")},{id:o(),unseenMsg:5,lastMsgSeen:!1,name:"Vicky Hladynets",isLastMsgIncoming:!0,image:"/static/user/user-16.png",lastMsg:"Can you send some demo?",time:Date.parse("Feb 14, 2023, 17:00")},{id:o(),unseenMsg:0,lastMsgSeen:!1,name:"Julian Wan",isLastMsgIncoming:!1,lastMsg:"Thank You",image:"/static/user/user-11.png",time:Date.parse("Feb 14, 2023, 19:15")}];function Me(){return e.jsxs("div",{children:[e.jsxs(m,{alignItems:"center",gap:1,px:3,mb:1,children:[e.jsx($,{sx:{fontSize:19,color:"grey.500"}}),e.jsx(g,{fontSize:16,color:"text.secondary",children:"Pinned"})]}),pe.map(s=>e.jsx(_,{id:s.id,name:s.name,time:s.time,image:s.image,lastMsg:s.lastMsg,unseenMsg:s.unseenMsg,lastMsgSeen:s.lastMsgSeen,isLastMsgIncoming:s.isLastMsgIncoming},s.id))]})}function Se(){return e.jsxs(f,{mt:3,children:[e.jsxs(m,{alignItems:"center",gap:1,px:3,mb:1,children:[e.jsx($,{sx:{fontSize:19,color:"grey.500"}}),e.jsx(g,{fontSize:16,color:"text.secondary",children:"All Messages"})]}),e.jsx(R,{style:{maxHeight:400},children:je.map(s=>e.jsx(_,{id:s.id,name:s.name,time:s.time,image:s.image,lastMsg:s.lastMsg,unseenMsg:s.unseenMsg,lastMsgSeen:s.lastMsgSeen,isLastMsgIncoming:s.isLastMsgIncoming},s.id))})]})}const ye=D(e.jsx("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"}),"Mic"),be=D(e.jsx("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile"),Ce=c("div")(({theme:s})=>({fontSize:14,marginLeft:"2.5rem",padding:"1rem 1.5rem",borderRadius:"0px 1rem 1rem 1rem",backgroundColor:s.palette.grey[O(s)?700:100]}));function z(){return e.jsxs(f,{maxWidth:{md:"60%",sm:"70%",xs:"80%"},children:[e.jsxs(m,{alignItems:"center",mb:1,gap:1.5,children:[e.jsx(y,{src:"/static/user/user-19.png",sx:{width:27,height:27}}),e.jsxs(g,{fontWeight:600,lineHeight:1,children:["Aiony Haust"," ",e.jsx(w,{ml:.5,fontSize:12,fontWeight:400,color:"text.secondary",children:"11:29 AM"})]})]}),e.jsx(Ce,{children:"Apple Business Chat, or Business Chat, allows customers to interact with a business."})]})}const Ie=c("div")(({theme:s})=>({fontSize:14,color:"white",textAlign:"right",marginLeft:"2.5rem",padding:"1rem 1.5rem",borderRadius:"0px 1rem 1rem 1rem",backgroundColor:s.palette.primary.main}));function S(){return e.jsxs(f,{alignSelf:"end",maxWidth:{md:"60%",sm:"70%",xs:"80%"},children:[e.jsxs(m,{justifyContent:"end",alignItems:"center",mb:1,gap:1.5,children:[e.jsxs(g,{fontWeight:600,lineHeight:1,children:[e.jsx(w,{ml:.5,fontSize:12,fontWeight:400,color:"text.secondary",children:"11:29 AM"})," ","You"]}),e.jsx(y,{src:"/static/user/user-11.png",sx:{width:27,height:27}})]}),e.jsx(Ie,{children:"Sure! Ready to help."})]})}const ze=c("div",{shouldForwardProp:s=>s!=="screen"})(({theme:s,screen:t="md"})=>({left:0,top:20,zIndex:1,padding:5,display:"flex",cursor:"pointer",alignItems:"center",position:"absolute",justifyContent:"center",borderRadius:"0 8px 8px 0",backgroundColor:s.palette.primary.main,[s.breakpoints.up(t)]:{display:"none"}})),L=c(A)(({theme:s})=>({color:s.palette.grey[400],backgroundColor:s.palette.grey[50],border:`1px solid ${s.palette.grey[200]}`})),N=c("div")(({theme:s})=>({width:36,height:36,fontSize:18,display:"flex",cursor:"pointer",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:s.palette.grey[400],backgroundColor:s.palette.grey[50],border:`1px solid ${s.palette.grey[200]}`}));function Le({handleOpen:s}){const{getRootProps:t,getInputProps:n}=ce({onDrop:u=>{}});return e.jsxs(Y,{className:"h-full",children:[e.jsxs(h,{padding:3,children:[e.jsxs(m,{alignItems:"center",gap:1.5,children:[e.jsx(y,{src:"/static/user/user-19.png",alt:""}),e.jsxs("div",{children:[e.jsx(V,{lineHeight:1,fontSize:16,children:"Aiony Haust"}),e.jsx(P,{color:"text.secondary",children:"Online"})]})]}),e.jsxs(m,{alignItems:"center",gap:1,children:[e.jsx(A,{size:"small",children:e.jsx(K,{fontSize:"small"})}),e.jsx(L,{size:"small",children:e.jsx(oe,{fontSize:"inherit"})})]})]}),e.jsx(v,{}),e.jsxs(f,{position:"relative",children:[e.jsx(ze,{screen:"md",onClick:s,children:e.jsx(le,{sx:{fontSize:16,color:"white"}})}),e.jsx(R,{style:{maxHeight:580},children:e.jsxs(de,{spacing:4,px:3,py:2,children:[e.jsx(S,{}),e.jsx(z,{}),e.jsx(S,{}),e.jsx(z,{}),e.jsx(S,{}),e.jsx(z,{}),e.jsx(S,{})]})})]}),e.jsx(v,{}),e.jsxs(f,{px:3,py:2,children:[e.jsxs(h,{mb:2,gap:2,children:[e.jsx(Q,{fullWidth:!0,multiline:!0,placeholder:"Type Something.....",sx:{fontSize:14,fontWeight:500,flex:1}}),e.jsx(L,{size:"small",children:e.jsx(ye,{})})]}),e.jsxs(h,{gap:2,children:[e.jsxs(m,{gap:1.5,children:[e.jsxs(N,{...t(),children:[e.jsx("input",{...n()}),e.jsx(re,{fontSize:"inherit"})]}),e.jsxs(N,{...t(),children:[e.jsx("input",{...n()}),e.jsx(be,{fontSize:"inherit"})]}),e.jsx(L,{size:"small",children:e.jsx(E,{fontSize:"small"})})]}),e.jsx(X,{size:"small",children:"Send"})]})]})]})}const ve=c(ge)(({theme:s})=>({backgroundColor:s.palette.action.selected,border:`1px solid ${s.palette.grey[O(s)?600:200]}`})),De=c(A)(({theme:s})=>({backgroundColor:s.palette.action.selected,border:`1px solid ${s.palette.divider}`}));function we(){const[s,t]=ee.useState(!1),n=se(d=>d.breakpoints.down("md")),u=()=>t(!0),a=e.jsxs(Y,{sx:{height:"100%",pb:1},children:[e.jsxs("div",{className:"p-3",children:[e.jsxs(h,{mb:3,children:[e.jsx(V,{fontSize:18,children:"Messages"}),e.jsx(De,{size:"small",children:e.jsx(E,{})})]}),e.jsx(ve,{placeholder:"Search..."})]}),e.jsx(Me,{}),e.jsx(v,{}),e.jsx(Se,{})]});return e.jsx("div",{className:"pt-2 pb-4",children:e.jsxs(I,{container:!0,spacing:3,children:[n?e.jsx(ne,{anchor:"left",open:s,onClose:()=>t(!1),children:e.jsx(f,{width:300,padding:1,children:a})}):e.jsx(I,{size:{md:4,xs:12},children:a}),e.jsx(I,{size:{md:8,xs:12},children:e.jsx(Le,{handleOpen:u})})]})})}function Ye(){return e.jsx(we,{})}export{Ye as default};
