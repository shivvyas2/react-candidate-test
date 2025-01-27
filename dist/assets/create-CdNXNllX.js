import{r as p,j as e,b as c,G as r,F as x,H as m,Q as W,B as h}from"./index-DiONe1dj.js";import{S as v}from"./ProductReviews-C0tk_0ku.js";import{u as y}from"./formik.esm-BjmLBg26.js";import{c as B,a as s,e as P}from"./index.esm-DJSQvWNR.js";import{D as M}from"./DropZone-Lmo9UZf7.js";import{I as R}from"./IconWrapper-Csp0SQkY.js";import{T as i}from"./TextField-Cz_2jxJC.js";import"./styles-4a56YFjT.js";import"./Carousel-DZwDO9xL.js";import"./Twitter-CNiYB41q.js";import"./Facebook-CUgUt6t-.js";import"./Instagram-CXZ8Byxe.js";import"./Add-BvIq8QDp.js";import"./TableMoreMenu-CM13J2AH.js";import"./Delete-BCX2eEvJ.js";import"./MoreVert-_T8kZFQD.js";import"./Menu-CikkusLi.js";import"./DeleteOutline-kHDBPZ_Z.js";import"./ListItemIcon-Do7NaFHH.js";import"./ListItemText-BQDACRS8.js";import"./TableRow-M0a0oLEV.js";import"./TableCell-5KN61bOX.js";import"./useMuiTable-1RwRthnI.js";import"./Edit-_2M_6KV_.js";import"./RemoveRedEye-B_PywSb3.js";import"./Checkbox-Cc0a87Ww.js";import"./SwitchBase-DuaiR9ZJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Apps-DCxKVsxv.js";import"./SearchArea-BvmXFDrF.js";import"./Search-CRj7DCYO.js";import"./products-I46heUvQ.js";import"./TableContainer-Ddj8eE7V.js";import"./TablePagination-DSjidFu7.js";import"./LastPage-gfqF3dv-.js";import"./Select-CngAXAlH.js";import"./Edit-CZks6V14.js";import"./Delete-C9GBw7CI.js";import"./CardMedia-BIjRoxw9.js";import"./Stack-DcFxT2t8.js";import"./Rating-D9gkg3Fy.js";import"./currency-B65aCku1.js";import"./LinearProgress-DzlkqN9H.js";import"./index-BeWYCyJF.js";import"./index-txux6-4i.js";import"./styles-BcVcy41k.js";function S(){const[j,f]=p.useState([]),b=p.useCallback(d=>{const C=d.map(u=>Object.assign(u,{preview:URL.createObjectURL(u)}));f(C)},[]),g=B({manufacturer:s().required("Manufacturer is Required!"),model:s().required("Model is Required!"),id:s().required("ID Number is Required!"),priority:s().min(9).required("Prority is required!"),name:s().required("Name is Required!"),pro_model:s().required("Model is Required!"),meta_title:s().required("Meta Title is Required!"),meta_tags:s().required("Meta Tags is Required!"),address:s().required("Address is Required!"),zipCode:P().required("Zip Code is Required!")}),z={manufacturer:"",model:"",id:"",priority:"",name:"",pro_model:""},{values:l,errors:t,touched:o,handleBlur:a,handleChange:n,handleSubmit:q}=y({initialValues:z,validationSchema:g,onSubmit:d=>{console.log(d,j)}});return e.jsx("div",{className:"pt-2 pb-4",children:e.jsxs("form",{onSubmit:q,children:[e.jsx(c,{className:"p-3",children:e.jsxs(r,{container:!0,spacing:3,alignItems:"start",children:[e.jsx(r,{size:12,children:e.jsxs(x,{gap:.5,alignItems:"center",children:[e.jsx(R,{children:e.jsx(v,{color:"primary"})}),e.jsx(m,{fontSize:16,children:"Create New Product"})]})}),e.jsxs(r,{container:!0,spacing:2,size:{md:6,xs:12},children:[e.jsx(r,{size:12,children:e.jsx(m,{fontSize:16,children:"Main Parameters"})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,name:"manufacturer",label:"Manufacturer",onBlur:a,onChange:n,value:l.manufacturer,helperText:o.manufacturer&&t.manufacturer,error:!!(o.manufacturer&&t.manufacturer)})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,label:"Model",name:"model",onBlur:a,value:l.model,onChange:n,helperText:o.model&&t.model,error:!!(o.model&&t.model)})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,name:"id",label:"ID Number",value:l.id,onBlur:a,onChange:n,helperText:o.id&&t.id,error:!!(o.id&&t.id)})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,name:"priority",label:"Priority",onBlur:a,onChange:n,value:l.priority,helperText:o.priority&&t.priority,error:!!(o.priority&&t.priority)})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsxs(i,{select:!0,fullWidth:!0,label:"Name",slotProps:{select:{native:!0,IconComponent:W}},children:[e.jsx("option",{value:"electronics",children:"Electronics"}),e.jsx("option",{value:"gadget",children:"Gadget"}),e.jsx("option",{value:"shoes",children:"Shoes"})]})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,label:"Model",name:"pro_model",onBlur:a,onChange:n,value:l.pro_model,helperText:o.pro_model&&t.pro_model,error:!!(o.pro_model&&t.pro_model)})}),e.jsx(r,{size:12,children:e.jsx(i,{label:"Meta Title",fullWidth:!0})}),e.jsx(r,{size:12,children:e.jsx(i,{label:"Meta Tags",fullWidth:!0})}),e.jsx(r,{size:12,children:e.jsx(i,{label:"Meta Description",fullWidth:!0})})]}),e.jsxs(r,{container:!0,spacing:2,size:{md:6,xs:12},children:[e.jsx(r,{size:12,children:e.jsx(m,{fontSize:16,children:"Prices and Warehouses"})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{label:"Cost",fullWidth:!0})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{label:"Extra",fullWidth:!0})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{label:"Price",fullWidth:!0})}),e.jsx(r,{size:{sm:6,xs:12},children:e.jsx(i,{fullWidth:!0,label:"Availability"})}),e.jsx(r,{size:12,children:e.jsx(i,{fullWidth:!0,label:"Product Description",multiline:!0,rows:9})})]})]})}),e.jsx(c,{sx:{my:3},children:e.jsx(M,{onDrop:b})}),e.jsxs(x,{flexWrap:"wrap",gap:2,children:[e.jsx(h,{type:"submit",variant:"contained",children:"Create New Product"}),e.jsx(h,{variant:"outlined",color:"secondary",children:"Cancel"})]})]})})}function We(){return e.jsx(S,{})}export{We as default};
