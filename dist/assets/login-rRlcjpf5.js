import{r as u,j as e,a as i,l as x,P as l,L as p,G as t,H as k,n as v,F as A,m as F}from"./index-DiONe1dj.js";import{A as T,a as V}from"./jwtContext-BUMqXy6T.js";import{V as q,a as E}from"./VisibilityOff-DjtGFYsm.js";import{c as H,a as f}from"./index.esm-DJSQvWNR.js";import{u as I}from"./formik.esm-BjmLBg26.js";import{L as g}from"./Layout-DxS9HRta.js";import{L as j}from"./LoadingButton-BJRvAxbA.js";import{T as w}from"./TextField-Cz_2jxJC.js";import{C as R}from"./Checkbox-Cc0a87Ww.js";import"./CircularProgress-PL28tfjR.js";import"./Select-CngAXAlH.js";import"./Menu-CikkusLi.js";import"./SwitchBase-DuaiR9ZJ.js";function G(){const[a,b]=u.useState(!1),{login:S,logout:P,user:m,isAuthenticated:y}=u.useContext(T),W={email:"nabed420@gmail.com",password:"123456",remember:!0},C=H().shape({email:f().email("Must be a valid email").max(255).required("Email is required"),password:f().min(6,"Password should be of minimum 6 characters length").required("Password is required")}),{errors:r,values:s,touched:o,isSubmitting:d,handleBlur:c,handleChange:n,handleSubmit:B}=I({initialValues:W,validationSchema:C,onSubmit:async h=>{try{await S(h.email,h.password)}catch(z){console.log("login error -> ",z)}}}),L={endAdornment:e.jsx(F,{onClick:()=>b(!a),sx:{cursor:"pointer"},children:a?e.jsx(q,{fontSize:"small"}):e.jsx(E,{fontSize:"small"})})};return y&&m?e.jsx(g,{login:!0,children:e.jsxs(i,{maxWidth:550,p:4,width:"100%",children:[e.jsx(x,{fontSize:{sm:30,xs:25},children:"Welcome Back"}),e.jsxs(l,{mt:1,mb:6,color:"text.secondary",children:["Hello! Mr. ",m.name]}),e.jsx(j,{fullWidth:!0,color:"error",onClick:P,variant:"contained",loading:d,children:"Logout"})]})}):e.jsx(g,{login:!0,children:e.jsxs(i,{maxWidth:550,p:4,children:[e.jsx(x,{fontSize:{sm:30,xs:25},children:"Sign In"}),e.jsxs(l,{mt:1,mb:6,color:"text.secondary",children:["New user?"," ",e.jsx(i,{fontWeight:500,component:p,href:"/jwt/register",children:"Create an Account"})]}),e.jsx("form",{onSubmit:B,children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsxs(t,{size:12,children:[e.jsx(k,{fontSize:16,mb:1.5,children:"Login with your email id"}),e.jsx(w,{fullWidth:!0,placeholder:"Enter your work email",name:"email",onBlur:c,value:s.email,onChange:n,helperText:o.email&&r.email,error:!!(o.email&&r.email)})]}),e.jsxs(t,{size:12,children:[e.jsx(w,{fullWidth:!0,placeholder:"Password",type:a?"text":"password",name:"password",onBlur:c,value:s.password,onChange:n,helperText:o.password&&r.password,error:!!(o.password&&r.password),slotProps:{input:L}}),e.jsxs(v,{my:1,children:[e.jsxs(A,{alignItems:"center",gap:1,children:[e.jsx(R,{sx:{p:0},name:"remember",value:s.remember,onChange:n,checked:s.remember}),e.jsx(l,{fontWeight:500,children:"Remember me"})]}),e.jsx(i,{href:"#",fontSize:13,component:p,sx:{color:"error.500",fontWeight:500},children:"Forget Password?"})]})]}),e.jsx(t,{size:12,children:e.jsx(j,{loading:d,type:"submit",variant:"contained",fullWidth:!0,children:"Sign In"})})]})})]})})}function ee(){return e.jsx(V,{children:e.jsx(G,{})})}export{ee as default};
