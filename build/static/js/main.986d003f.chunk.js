(this["webpackJsonpadmin-ts"]=this["webpackJsonpadmin-ts"]||[]).push([[0],{506:function(e,t,n){},508:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(86),s=n.n(r),c=n(36),i=n.n(c),o=n(95),u=n(183),l=n.n(u);i.a.defaults.baseURL="http://31.220.31.43:5000/v1",i.a.defaults.headers.common.authorization=localStorage.getItem("token"),i.a.defaults.headers["Content-Type"]="application/json",i.a.interceptors.response.use((function(e){return e.data&&e.data.token&&localStorage.setItem("token",e.data.token),e}));var d=new l.a({max:10});Object(o.a)({axios:i.a,cache:d});var j=n(85),b=n(26),p=n(1),m=function(e){var t=e.children,n=Object(b.e)();return localStorage.getItem("token")?Object(p.jsx)(p.Fragment,{children:t}):["/","/pass"].includes(n.pathname)?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)(b.a,{to:"/",state:{from:n},replace:!0})},O=function(e){var t=e.children,n=Object(b.e)();return localStorage.getItem("token")?n.pathname.includes("dash")?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)(b.a,{to:"/dash",state:{from:n},replace:!0}):Object(p.jsx)(p.Fragment,{children:t})},f=n(23),x=n.n(f),h=n(35),v=n(5),g=n(30),w=n(3),y=n(8),C=n(47),E=n(670),k=n(667),I=n(687),S=n(688),N=n(681),P=n(648),F=n(649),q=n(685),A=n(310),M=n.n(A),T=n(313),L=n.n(T),R=n(312),U=n.n(R),D=n(658),z=n(650),B=n(638),V=n(308),$=n.n(V),_=n(25),G=n(684),K=n(73),J=n.n(K),X=n(187),H=n.n(X),Q=n(299),W=n.n(Q)()(H.a),Y=W,Z=function(e,t){var n=e.response,a=n?n.data.message:e.message?e.message:"";t?W.fire(Object(g.a)({text:a},t)):W.fire({title:"Error",text:a,icon:"error"})},ee=n(665),te=n(661),ne=n(633),ae=n(683),re=n(104),se=n(134),ce=n(321),ie=n(664),oe=n(660),ue=n(679),le=n(676),de=n(304),je=n.n(de),be=n(303),pe=n.n(be),me=n(654),Oe=n(655),fe=n(639),xe=n(641),he=n(640),ve=n(682),ge=n(659),we=n(653),ye=n(642),Ce=n(645),Ee=function(e){var t=e.fromInput,n=e.Action,r=e.schema,s=e.sx,c=e.conten,i=e.ButtonClass,o=e.buttonText,u=Object(re.e)(r?{resolver:Object(ce.a)(r)}:{}),l=u.control,d=u.handleSubmit,j=u.formState.errors,b=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n(t)}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){switch(e.type){case"file":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(r=e.value),Object(p.jsx)(le.a,{onChange:a,defaultValue:r,label:i,error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o,type:"file"})};case"select":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.currencies,c=e.name,i=e.label,o=e.autoFocus;e.value&&(r=e.value);return Object(p.jsxs)(ue.a,{children:[Object(p.jsx)(oe.a,{id:"demo-simple-select-label",children:i}),Object(p.jsx)(me.a,{error:!!j[c],autoFocus:null!==o&&void 0!==o&&o,defaultValue:r,label:i,onChange:function(e){return a(e)},children:s?s.map((function(e){var t=e.name;return Object(p.jsx)(ae.a,{value:t,children:t},t)})):[]})]})};case"select-multiple":return function(t){var n=t.field,r=n.onChange,s=(n.value,e.currencies),c=e.name,i=e.label,o=e.autoFocus,u=e.checkItems;e.value&&e.value;var l=Object(a.useState)(u||[]),d=Object(v.a)(l,2),b=d[0],m=d[1];return Object(p.jsxs)(ue.a,{error:!!j[c],sx:{m:1},children:[Object(p.jsx)(oe.a,{id:"label-".concat(i),children:i}),Object(p.jsx)(me.a,{labelId:"label-".concat(i),id:c,multiple:!0,value:b,onChange:function(e){var t=e.target.value;m("string"===typeof t?t.split(","):t),r(e)},input:Object(p.jsx)(ie.a,{label:i}),renderValue:function(e){return e.join(", ")},autoFocus:null!==o&&void 0!==o&&o,children:s?s.map((function(e){var t=e.name;return Object(p.jsxs)(ae.a,{value:t,children:[Object(p.jsx)(Oe.a,{checked:b.includes(t)}),Object(p.jsx)(B.a,{primary:t})]},t)})):[]}),Object(p.jsx)(ve.a,{error:!!j[c],id:c,children:j[c]&&j[c].message})]})};case"text":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(r=e.value),Object(p.jsx)(le.a,{onChange:a,defaultValue:r,label:i,error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"email":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(r=e.value),Object(p.jsx)(le.a,{onChange:a,defaultValue:r,label:i,type:"email",error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"password-see":return function(t){var n=t.field,r=n.onChange,s=n.value,c=e.name,i=e.label,o=e.autoFocus;e.value&&(s=e.value);var u,l=Object(a.useState)({password:s,showPassword:!1}),d=Object(v.a)(l,2),b=d[0],m=d[1];return Object(p.jsxs)(ue.a,{sx:{m:1},variant:"outlined",error:!!j[c],children:[Object(p.jsx)(oe.a,{htmlFor:c,children:i}),Object(p.jsx)(ie.a,{id:c,type:b.showPassword?"text":"password",defaultValue:b.password,onChange:(u="password",function(e){m(Object(g.a)(Object(g.a)({},b),{},Object(w.a)({},u,e.target.value))),r(e)}),endAdornment:Object(p.jsx)(G.a,{position:"end",children:Object(p.jsx)(q.a,{"aria-label":"toggle password visibility",onClick:function(){m(Object(g.a)(Object(g.a)({},b),{},{showPassword:!b.showPassword}))},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:b.showPassword?Object(p.jsx)(pe.a,{}):Object(p.jsx)(je.a,{})})}),label:i,autoFocus:null!==o&&void 0!==o&&o}),Object(p.jsx)(ve.a,{id:c,children:j[c]&&j[c].message})]})};case"password":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(r=e.value),Object(p.jsx)(le.a,{onChange:a,defaultValue:r,label:i,type:"password",error:!!j[s],InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"time-date":return function(t){var n=t.field,a=n.onChange,r=n.value,s=e.name,c=e.timeConfig,i=c.inputFormat,o=c.typeTime,u=e.label;e.value&&(r=e.value);var l=function(e){a({target:{name:s,value:e}})};return Object(p.jsx)(fe.b,{locale:"es",dateAdapter:he.a,children:Object(p.jsx)(xe.a,{spacing:3,children:function(){switch(o){case"Desktop":return Object(p.jsx)(ye.a,{label:u,inputFormat:null!==i&&void 0!==i?i:"MM/dd/yyyy",value:r,onChange:l,renderInput:function(e){return Object(p.jsx)(le.a,Object(g.a)({},e))}});case"Mobile":return Object(p.jsx)(Ce.a,{label:u,inputFormat:null!==i&&void 0!==i?i:"MM/dd/yyyy",value:r,onChange:l,renderInput:function(e){return Object(p.jsx)(le.a,Object(g.a)({},e))}});case"Time":return Object(p.jsx)(ge.a,{label:u,value:r,onChange:l,renderInput:function(e){return Object(p.jsx)(le.a,Object(g.a)({},e))}});case"Date":return Object(p.jsx)(we.a,{label:u,value:r,onChange:l,renderInput:function(e){return Object(p.jsx)(le.a,Object(g.a)({},e))}})}}()})})}}};return Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsxs)(E.a,{onSubmit:d(b),component:"form",sx:s||{"& > :not(style)":{m:1}},className:c||"ed-grid",noValidate:!0,autoComplete:"off",children:[t.map((function(e,t){var n=e.name,a=e.rules;return Object(p.jsx)(re.a,{name:n,control:l,rules:a,render:e.render?e.render:m(e)},t)})),Object(p.jsx)(se.a,{type:"submit",className:i||"",variant:"contained",children:o||"Submit"})]})]})},ke={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #fff",borderRadius:2,boxShadow:24,px:4,py:4},Ie=function(e){var t=e.open,n=e.onClose,a=e.form,r=e.children;return Object(p.jsx)("div",{children:Object(p.jsx)(te.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:n,closeAfterTransition:!0,BackdropComponent:ee.a,BackdropProps:{timeout:500},children:Object(p.jsx)(ne.a,{in:t,children:Object(p.jsxs)(E.a,{sx:ke,children:[" ",r||"",a?Object(p.jsx)(Ee,Object(g.a)({},a)):""]})})})})},Se=n(307),Ne=n.n(Se),Pe=n(666),Fe=n(686),qe=function(e){var t=e.children;return e.load?Object(p.jsx)(E.a,{sx:{display:"flex"},children:Object(p.jsxs)("div",{className:"s-to-center s-py-4",children:[" ",Object(p.jsx)(Fe.a,{})]})}):Object(p.jsx)(p.Fragment,{children:t})},Ae=function(e){return Object(p.jsx)(Ee,Object(g.a)({},e))};Object(_.c)({mixed:{required:"Este campo es requerido"},string:{min:"El minimo de caracteres es de ${min}",max:"El maximo de caracteres es de ${max}",email:"El correo esta mal formateado"}});var Me=_.b().shape({password:_.d().min(8).max(12).required(),confirPass:_.d().min(8).max(12).required()}).required(),Te=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(v.a)(s,2),o=c[0],u=c[1],l=function(){var e=Object(h.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,i.a.post("/auth/users/newPass",t);case 4:a=e.sent,Y.fire({title:a.data.message,icon:"success"}),setTimeout((function(){u(!1),r(!n)}),1e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u(!1),Z(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=[{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(q.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return r(!n)},color:"inherit",children:Object(p.jsx)(Pe.a,{title:"Cambiar Contrase\xf1a",children:Object(p.jsx)(Ne.a,{})})}),Object(p.jsxs)(Ie,{onClose:function(){return r(!n)},open:n,children:[Object(p.jsx)("h2",{children:"Nueva Contrase\xf1a"}),Object(p.jsx)(qe,{load:o,children:Object(p.jsx)(Ae,{buttonText:"Cambiar Contrase\xf1a",Action:l,schema:Me,fromInput:d})})]})]})},Le=n(309),Re=n.n(Le),Ue=n(311),De=n.n(Ue),ze=240,Be=function(e){return{width:ze,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},Ve=function(e){return Object(w.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},$e=Object(y.a)("div")((function(e){var t=e.theme;return Object(g.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),_e=Object(y.a)(I.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(g.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:ze,width:"calc(100% - ".concat(ze,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Ge=Object(y.a)(k.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(g.a)(Object(g.a)({width:ze,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},n&&Object(g.a)(Object(g.a)({},Be(t)),{},{"& .MuiDrawer-paper":Be(t)})),!n&&Object(g.a)(Object(g.a)({},Ve(t)),{},{"& .MuiDrawer-paper":Ve(t)}))}));function Ke(){var e=Object(C.a)(),t=Object(a.useState)(!1),n=Object(v.a)(t,2),r=n[0],s=n[1],c=Object(b.f)(),i=Object(a.useState)([{icon:Object(p.jsx)($.a,{}),url:"/dash/users",text:"Usuarios"},{icon:Object(p.jsx)(Re.a,{}),url:"/dash/elections",text:"Eleciones"}]),o=Object(v.a)(i,1)[0],u=function(){var e=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.fire({title:"\xbfEsta seguro que desea salir?",showDenyButton:!0,confirmButtonText:"Si",denyButtonText:"No",timer:2e3});case 2:e.sent.isConfirmed&&(localStorage.clear(),c("/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(E.a,{sx:{flexGrow:1},children:[Object(p.jsx)(P.a,{}),Object(p.jsx)(_e,{position:"fixed",open:r,children:Object(p.jsxs)(S.a,{children:[Object(p.jsx)(q.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",sx:Object(g.a)({marginRight:"36px"},r&&{display:"none"}),children:Object(p.jsx)(M.a,{})}),Object(p.jsx)("div",{className:"ed-grid m-grid-8 s-cross-center",children:Object(p.jsx)("div",{className:"s-ratio-16-9 img-container",children:Object(p.jsx)("img",{src:"./img/Lodo_Sabaneta_60x60.png",alt:"aa"})})}),Object(p.jsx)(Te,{}),Object(p.jsx)(q.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:u,color:"inherit",children:Object(p.jsx)(De.a,{})})]})}),Object(p.jsxs)(Ge,{className:"from-m",variant:"permanent",open:r,children:[Object(p.jsx)($e,{children:Object(p.jsx)(q.a,{onClick:function(){s(!1)},children:"rtl"===e.direction?Object(p.jsx)(U.a,{}):Object(p.jsx)(L.a,{})})}),Object(p.jsx)(F.a,{}),Object(p.jsx)(N.a,{children:o.map((function(e){var t=e.text,n=e.icon,a=e.url;return Object(p.jsx)(j.b,{to:a,children:Object(p.jsxs)(D.a,{children:[Object(p.jsx)(z.a,{children:n}),Object(p.jsx)(B.a,{primary:t})]},t)})}))}),Object(p.jsx)(F.a,{})]}),Object(p.jsx)(E.a,{component:"main",sx:{flexGrow:1,p:3},children:Object(p.jsx)($e,{})})]})}var Je=function(e){e.children;return Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsxs)("div",{className:"ed-item",children:[" ",Object(p.jsx)(Ke,{})]}),Object(p.jsx)("div",{className:"ed-item m-95 s-pb-4 s-to-right",children:Object(p.jsx)(b.b,{})})]})},Xe=n(651),He=n(93),Qe=n.n(He),We=n(228),Ye=n.n(We),Ze=n(314),et=n.n(Ze),tt=n(689),nt=n(668),at=n(533);Object(_.c)({mixed:{required:"Este campo es requerido"},string:{min:"El minimo de caracteres es de ${min}",max:"El maximo de caracteres es de ${max}",email:"El correo esta mal formateado"},array:{min:"Debe elegir minimo ${min} opci\xf3n",max:"Puede elegir maximo ${max} opciones"}});var rt=_.b().shape({name:_.d().required(),email:_.d().email().required(),password:_.d().min(8).max(12).required(),confirPass:_.d().min(8).max(12).required(),roles:_.a().min(1).max(4).required()}).required(),st=function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),(n=new FormData).append("images",t.target[0].files[0]),e.next=6,i.a.post("/auth/register/big",n);case 6:a=e.sent,Y.fire({title:"OK",text:a.data.message,icon:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),t=yt(),n=t.reFreshList,r=t.openCreateModal,s=t.CreateModal,c=t.Rols,o=Object(a.useState)("one"),u=Object(v.a)(o,2),l=u[0],d=u[1],j=Object(a.useState)(!1),b=Object(v.a)(j,2),m=b[0],O=b[1],f=function(){var e=Object(h.a)(x.a.mark((function e(t){var a,r,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O(!0),a=t.password,r=t.confirPass,a===r){e.next=5;break}throw new Error("Sus contrase\xf1as no son inguales");case 5:return t.roles=c.filter((function(e){return t.roles.includes(e.name)})),e.next=8,i.a.post("/auth/register",t);case 8:s=e.sent,Y.fire({title:"OK",icon:"success",text:s.data.message}),setTimeout((function(){O(!1)}),1e3),n(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),O(!1),console.error(e.t0),Z(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),g=[{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Xe.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Qe.a,{})})}},{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}},{type:"select-multiple",name:"roles",label:"Roles",currencies:c||[],rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}];return Object(p.jsxs)(Ie,{open:r,onClose:s,children:[Object(p.jsxs)("div",{className:"s-px-1 ed-container",children:[Object(p.jsx)("h2",{className:"s-to-left",children:"one"===l?"Crear Usuario":"carga masiva de usuarios"}),Object(p.jsx)("div",{className:"s-to-right",children:Object(p.jsxs)(nt.a,{value:l,exclusive:!0,onChange:function(e,t){d(t)},"aria-label":"text alignment",children:[Object(p.jsx)(tt.a,{value:"one","aria-label":"left aligned",children:Object(p.jsx)(Pe.a,{title:"Formulario",placement:"top-start",children:Object(p.jsx)(Ye.a,{})})}),Object(p.jsx)(tt.a,{value:"big","aria-label":"right",children:Object(p.jsx)(Pe.a,{title:"Carga Masiva",placement:"top-end",children:Object(p.jsx)(et.a,{})})})]})})]}),"one"===l?Object(p.jsx)(qe,{load:m,children:Object(p.jsx)(Ee,{Action:f,schema:rt,fromInput:g,buttonText:"Crear"})}):Object(p.jsxs)("div",{className:"ed-item s-pt-3",children:[Object(p.jsxs)("form",{className:"ed-grid m-grid-2",onSubmit:e,children:[Object(p.jsxs)(at.a,{htmlFor:"upload-photo",variant:"contained",component:"label","aria-label":"add",children:[Object(p.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file"}),Object(p.jsx)(Ye.a,{})," Archivo"]}),Object(p.jsx)(at.a,{type:"submit",variant:"contained",children:"Enviar"})]}),Object(p.jsx)(at.a,{href:"./img/big-test.xlsx",download:"planilla_carga_masiva-usuarios.xlsx",className:"ed-item",variant:"contained",children:"Planilla de Carga masiva"})]})]})},ct=_.b().shape({name:_.d(),email:_.d().email(),roles:_.a().min(1).max(4)}),it=function(){var e=yt(),t=e.reFreshList,n=e.openEditModal,r=e.EditModal,s=e.Rols,c=e.User,o=Object(a.useState)(!1),u=Object(v.a)(o,2),l=u[0],d=u[1],j=function(){var e=Object(h.a)(x.a.mark((function e(n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),a=Object.fromEntries(Object.entries(n).filter((function(e){var t=Object(v.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(v.a)(e,2),a=t[0],r=t[1];return"roles"===a?[a,s.filter((function(e){return n.roles.includes(e.name)}))]:[a,r]}))),e.next=5,i.a.put("/users/"+c.id,a);case 5:o=e.sent,Y.fire({title:"OK",text:o.data.message,icon:"success"}),setTimeout((function(){r(),d(!1)}),1e3),t(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),Y.fire({title:"Error",text:e.t0,icon:"error"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(a.useState)([{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Xe.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Qe.a,{})})}},{type:"select-multiple",name:"roles",label:"Roles",currencies:s||[],checkItems:[],rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}]),m=Object(v.a)(b,2),O=m[0],f=m[1];return Object(a.useLayoutEffect)((function(){if(c){var e=O;Object.entries(c).forEach((function(t){var n=Object(v.a)(t,2),a=n[0],r=n[1],s=e.findIndex((function(e){return e.name===a}));-1!==s&&"roles"!==a&&(e[s].value=r),"roles"===a&&(e[s].checkItems=r.map((function(e){return e.name})))})),f(e)}}),[O,c]),Object(a.useLayoutEffect)((function(){var e=O;e[2].currencies=s,f(e)}),[O,s]),Object(p.jsxs)(Ie,{open:n,onClose:r,children:[Object(p.jsx)("h2",{className:"s-center",children:"Editar Usuario"}),Object(p.jsx)(qe,{load:l,children:Object(p.jsx)(Ae,{Action:j,schema:ct,fromInput:O,buttonText:"editar"})})]})},ot=n(317),ut=n.n(ot),lt=n(316),dt=n.n(lt),jt=n(315),bt=n.n(jt),pt=n(161),mt=n(672),Ot=function(){var e=pt.c.components;if(e){var t=e.MuiDataGrid;if(t){var n=t.defaultProps;if(n){var a=n.localeText;if(a)return a}}}},ft=function(e){var t=e.rows,n=e.columns,r=e.actions,s=Object(a.useState)([]),c=Object(v.a)(s,2),i=c[0],o=c[1];return Object(a.useLayoutEffect)((function(){var e=t.map((function(e){var t=Object.entries(e).map((function(e){var t=Object(v.a)(e,2),n=t[0],a=t[1];if("object"!==typeof a)return[n,a];if(!Array.isArray(a))return[n,a.name];var r=a.map((function(e){return e.name})).join(", ");return[n,r]}));return Object.fromEntries(t)}));o(e)}),[t]),Object(p.jsx)("div",{style:{height:300,width:"100%"},children:Object(p.jsx)(pt.a,{localeText:Ot(),rows:i,columns:function(e,t){if(!t)return e;var n=function(e){var t=e.remove,n=e.print,a=e.edit;return{field:"actions",headerName:"Acciones",width:150,renderCell:function(e){var r=e.row;return Object(p.jsxs)("strong",{children:[n?Object(p.jsx)(mt.a,{size:"small",onClick:function(){return n(r)},color:"inherit",children:Object(p.jsx)(bt.a,{})}):"",a?Object(p.jsx)(mt.a,{size:"small",onClick:function(){return a(r)},color:"primary",children:Object(p.jsx)(dt.a,{})}):"",t?Object(p.jsx)(mt.a,{size:"small",onClick:function(){return t(r)},color:"secondary",children:Object(p.jsx)(ut.a,{})}):""]})}}}(t);return e.concat(n)}(n,r)})})},xt=function(){var e=yt(),t=e.NewUser,n=e.defineUser,r=e.Rols,s=e.EditModal,c=Object(o.b)({url:"/users",method:"GET",headers:{common:{authorization:localStorage.getItem("token")}}}),u=Object(v.a)(c,1)[0].data,l=Object(a.useState)([{id:"",name:"",email:"",roles:[{name:""}]}]),d=Object(v.a)(l,2),j=d[0],b=d[1];Object(a.useLayoutEffect)((function(){u&&u.info&&!t?b(u.info):i.a.get("/users").then((function(e){var t=e.data;t.info&&b(t.info)}))}),[t,u]);var m={edit:function(e){var t=r.filter((function(t){return e.roles.includes(t.name)})),a=Object(g.a)(Object(g.a)({},e),{},{roles:t});n(a),s()}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ft,{rows:j,columns:[{field:"id",headerName:"ID",width:120},{field:"name",headerName:"Nombre",width:170},{field:"email",headerName:"Email",width:170},{field:"roles",headerName:"Roles",width:170}],actions:m})})},ht=n(194),vt=n.n(ht),gt={NewUser:0,openCreateModal:!1,openEditModal:!1,UserData:{},reFreshList:function(){},CreateModal:function(){},EditModal:function(){},defineUser:function(){},Rols:[],User:{}},wt=Object(a.createContext)(gt),yt=function(){return Object(a.useContext)(wt)},Ct="ReFreshList",Et="Roles",kt="User",It=function(e,t){var n=t.payload,a=t.type;return a===Ct?(e.NewUser=e.NewUser+1,e):a===Et?(e.Rols=n,e):a===kt?(e.User=n,e):void 0},St=function(){var e=Object(o.b)("/roles"),t=Object(v.a)(e,1)[0].data,n=Object(a.useReducer)(It,gt),r=Object(v.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(0),u=Object(v.a)(i,2),l=u[0],d=u[1],j=Object(a.useState)(!1),b=Object(v.a)(j,2),m=b[0],O=b[1],f=Object(a.useState)(!1),x=Object(v.a)(f,2),h=x[0],w=x[1],y=function(){return w(!h)};return Object(a.useLayoutEffect)((function(){t&&(c({type:Et,payload:t.info}),d(l+1))}),[t]),Object(p.jsxs)(wt.Provider,{value:Object(g.a)(Object(g.a)({},s),{},{openCreateModal:h,reFreshList:function(){c({type:Ct}),d(l+1)},CreateModal:y,defineUser:function(e){c({type:kt,payload:e})},EditModal:function(){return O(!m)},openEditModal:m}),children:[Object(p.jsxs)("div",{className:"ed-container s-py-5",children:[Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsx)("h2",{children:"Lista de usuarios"}),Object(p.jsx)(xt,{})]}),Object(p.jsx)(st,{}),Object(p.jsx)(it,{})]}),Object(p.jsx)(E.a,{sx:{position:"fixed",width:60,height:60,bottom:40,right:40},children:Object(p.jsx)(mt.a,{onClick:y,color:"primary","aria-label":"add",children:Object(p.jsx)(vt.a,{})})})]})},Nt=_.b({name:_.d().required()}).required(),Pt=function(){var e=Lt(),t=e.reFreshList,n=e.openCreateModal,r=e.CreateModal,s=Object(a.useState)(!1),c=Object(v.a)(s,2),o=c[0],u=c[1],l=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,i.a.post("/elections",n);case 4:Y.fire({title:"OK",text:"Elecci\xf3n Creada",icon:"success"}),setTimeout((function(){return u(!1)}),1e3),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=[{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Xe.a,{})})}}],j={Action:l,schema:Nt,fromInput:d,buttonText:"Crear"};return Object(p.jsxs)(Ie,{open:n,onClose:r,children:[Object(p.jsx)("h2",{className:"s-center",children:"Crear Elecci\xf3n"}),Object(p.jsx)(qe,{load:o,children:Object(p.jsx)(Ae,Object(g.a)({},j))})]})},Ft=_.b().shape({name:_.d(),status:_.d()}),qt=function(){var e=Lt(),t=e.reFreshList,n=e.openEditModal,r=e.EditModal,s=e.status,c=e.Election,o=Object(a.useState)(!1),u=Object(v.a)(o,2),l=u[0],d=u[1],j=function(){var e=Object(h.a)(x.a.mark((function e(n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,d(!0),a=Object.fromEntries(Object.entries(n).filter((function(e){var t=Object(v.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(v.a)(e,2),a=t[0],r=t[1];return"status"===a?[a,s.find((function(e){return n.status===e.name})).id]:[a,r]}))),Object.keys(a).length){e.next=5;break}throw new Error("No se puede actualizar una elecci\xf3n sin cambios");case 5:return e.next=7,i.a.put("/elections/"+c.id,a);case 7:o=e.sent,Y.fire({title:"OK",text:o.data.message,icon:"success"}),setTimeout((function(){r(),d(!1)}),1e3),t(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),Z(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(a.useState)([{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Xe.a,{})})}},{type:"select",name:"status",label:"Status",currencies:s||[],rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}]),m=Object(v.a)(b,2),O=m[0],f=m[1];return Object(a.useLayoutEffect)((function(){if(c){var e=O;Object.entries(c).forEach((function(t){var n=Object(v.a)(t,2),a=n[0],r=n[1],s=e.findIndex((function(e){return e.name===a}));-1!==s&&(e[s].value=r)})),s&&(e[1].currencies=s),f(e)}}),[O,c,s]),Object(p.jsxs)(Ie,{open:n,onClose:r,children:[Object(p.jsx)("h2",{className:"s-center",children:"Editar Elecci\xf3n"}),Object(p.jsx)(qe,{load:l,children:Object(p.jsx)(Ae,{Action:j,schema:Ft,fromInput:O,buttonText:"editar"})})]})},At=function(){var e=Lt(),t=e.NewElection,n=e.defineElection,r=e.EditModal,s=Object(o.b)({url:"/elections",method:"GET",headers:{common:{authorization:localStorage.getItem("token")}}}),c=Object(v.a)(s,1)[0].data,u=Object(a.useState)([{id:"",name:"",status:{id:"",name:""}}]),l=Object(v.a)(u,2),d=l[0],j=l[1];Object(a.useLayoutEffect)((function(){c&&c.info&&!t?j(c.info):i.a.get("/elections").then((function(e){var t=e.data;t.info&&j(t.info)}))}),[t,c]);var b={edit:function(e){n(e),r()}};return Object(p.jsx)(ft,{rows:d,columns:[{field:"id",headerName:"ID",width:120},{field:"name",headerName:"Nombre",width:170},{field:"status",headerName:"Estado",width:150}],actions:b})},Mt={NewElection:0,openCreateModal:!1,openEditModal:!1,ElectionData:{},reFreshList:function(){},CreateModal:function(){},EditModal:function(){},defineElection:function(){},status:[],Election:{}},Tt=Object(a.createContext)(Mt),Lt=function(){return Object(a.useContext)(Tt)},Rt="ReFreshList",Ut="Status",Dt="Election",zt=function(e,t){var n=t.payload,a=t.type;return a===Rt?(e.NewElection=e.NewElection+1,e):a===Ut?(e.status=n,e):a===Dt?(e.Election=n,e):void 0},Bt=function(){var e=Object(o.b)("/elections/status"),t=Object(v.a)(e,1)[0].data,n=Object(a.useReducer)(zt,Mt),r=Object(v.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(0),u=Object(v.a)(i,2),l=u[0],d=u[1],j=Object(a.useState)(!1),b=Object(v.a)(j,2),m=b[0],O=b[1],f=Object(a.useState)(!1),x=Object(v.a)(f,2),h=x[0],w=x[1],y=function(){return w(!h)};return Object(a.useLayoutEffect)((function(){t&&(c({type:Ut,payload:t.info}),d(l+1))}),[t]),Object(p.jsxs)(Tt.Provider,{value:Object(g.a)(Object(g.a)({},s),{},{openCreateModal:h,reFreshList:function(){c({type:Rt}),d(l+1)},CreateModal:y,defineElection:function(e){c({type:Dt,payload:e})},EditModal:function(){return O(!m)},openEditModal:m}),children:[Object(p.jsxs)("div",{className:"ed-container s-py-5",children:[Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsx)("h2",{children:"Lista de Elecciones"}),Object(p.jsx)(At,{})]}),Object(p.jsx)(Pt,{}),Object(p.jsx)(qt,{})]}),Object(p.jsx)(E.a,{sx:{position:"fixed",width:60,height:60,bottom:40,right:40},children:Object(p.jsx)(mt.a,{onClick:y,color:"primary","aria-label":"add",children:Object(p.jsx)(vt.a,{})})})]})},Vt=function(){var e=[{path:"/dash",element:Object(p.jsx)(Je,{}),children:[{index:!0,element:Object(p.jsx)(St,{})},{path:"/dash/users",element:Object(p.jsx)(St,{})},{path:"/dash/elections",element:Object(p.jsx)(Bt,{})}]}];return Object(b.h)(e)},$t=n(152),_t=n(675),Gt=function(){var e=Object(b.e)().pathname;return Object(p.jsx)("div",{className:"m-50 s-to-center s-pt-3",children:Object(p.jsx)(E.a,{children:Object(p.jsxs)(_t.a,{className:"m-px-2",variant:"outlined",children:[Object(p.jsx)("div",{className:"ed-grid m-grid-4 s-cross-center",children:Object(p.jsx)("div",{className:"s-ratio-4-3 m-cols-2 m-x-2 img-container",children:Object(p.jsx)("img",{src:"img/Lodo_Sabaneta_60x60.png",alt:"aa"})})}),Object(p.jsx)(b.b,{}),Object(p.jsx)("div",{className:"s-right s-py-1",children:"/"===e?Object(p.jsx)(j.b,{to:"/pass",children:Object(p.jsx)($t.a,{children:"\xbfOlvido su contrase\xf1a?"})}):Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)($t.a,{children:"Iniciar Sesi\xf3n"})})})]})})})},Kt=Object(a.createContext)({auth:!1,saveAuth:{}}),Jt="AUTH",Xt=function(e,t){t.payload;if(t.type===Jt)return e.auth=!!localStorage.getItem("token"),e},Ht=function(e){var t=e.children,n={login:function(e){localStorage.setItem("token",e),o({type:Jt})},logout:function(){localStorage.removeItem("token"),o({type:Jt})}},r={auth:!!localStorage.getItem("token"),saveAuth:n},s=Object(a.useReducer)(Xt,r),c=Object(v.a)(s,2),i=c[0],o=c[1];return Object(p.jsx)(Kt.Provider,{value:Object(g.a)(Object(g.a)({},i),{},{saveAuth:n}),children:t})};Object(_.c)({mixed:{required:"Este campo es requerido"},string:{min:"El minimo de caracteres es de ${min}",max:"El maximo de caracteres es de ${max}",email:"El correo esta mal formateado"}});var Qt=_.b().shape({email:_.d().email().required(),password:_.d().required()}),Wt=function(){var e=Object(a.useContext)(Kt).saveAuth,t=Object(b.f)(),n=Object(a.useState)(!1),r=Object(v.a)(n,2),s=r[0],c=r[1],o=function(){var n=Object(h.a)(x.a.mark((function n(a){var r,s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!((r=a.password).length<8||r.length>12)){n.next=4;break}throw new Error("La contrase\xf1a es incorrecta");case 4:return c(!0),n.next=7,i.a.post("/auth/login",a);case 7:if(s=n.sent,s.data.info.roles.find((function(e){return"Admin"===e.name}))){n.next=11;break}throw new Error("No tiene permisos para acceder");case 11:localStorage.setItem("token",s.data.token),setTimeout((function(){return c(!1)}),1e3),e.login(s.data.token),t("/dash/users"),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(0),c(!1),localStorage.clear(),Z(n.t0);case 22:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e){return n.apply(this,arguments)}}(),u=[{type:"text",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Qe.a,{})})}},{type:"password",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}];return Object(p.jsx)(qe,{load:s,children:Object(p.jsx)(Ee,{buttonText:"Entrar",Action:o,schema:Qt,fromInput:u})})},Yt=_.b({name:_.d().required(),email:_.d().required(),password:_.d().required(),confirPass:_.d().required()}).required(),Zt=function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.password,a=t.confirPass,n===a){e.next=4;break}throw{title:"Error",text:"Sus contrase\xf1as no son inguales",icon:"error"};case 4:return e.next=6,i.a.post("/auth/register",t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Y.fire(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),t=[{type:"text",name:"name",label:"Nombre",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Xe.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Qe.a,{})})}},{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(J.a,{})})}}];return Object(p.jsx)(Ee,{buttonText:"crear",Action:e,schema:Yt,fromInput:t})};Object(_.c)({mixed:{required:"Este campo es requerido"}});var en=_.b().shape({email:_.d().email().required()}).required(),tn=function(){var e=Object(b.f)(),t=Object(a.useState)(!1),n=Object(v.a)(t,2),r=n[0],s=n[1],c=function(){var t=Object(h.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Y.fire({didOpen:function(){Y.showLoading()}}),t.next=4,i.a.post("/auth/newPassEmail",n);case 4:setTimeout((function(){return s(!1)}),1e3),e("/"),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),s(!1),localStorage.clear(),Z(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),o=[{type:"text",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(G.a,{position:"start",children:Object(p.jsx)(Qe.a,{})})}}];return Object(p.jsx)(qe,{load:r,children:Object(p.jsx)(Ee,{buttonText:"Enviar",Action:c,schema:en,fromInput:o})})},nn=function(e){var t=e.type;return"login"===t?Object(p.jsx)(Wt,{}):"MailPass"===t?Object(p.jsx)(tn,{}):Object(p.jsx)(Zt,{})},an=function(){var e=[{path:"/",element:Object(p.jsx)(Gt,{}),children:[{index:!0,element:Object(p.jsx)(nn,{type:"login"})},{path:"/pass",element:Object(p.jsx)(nn,{type:"MailPass"})}]}];return Object(b.h)(e)},rn=function(){return Object(p.jsxs)(Ht,{children:[" ",Object(p.jsxs)(j.a,{children:[Object(p.jsx)(O,{children:Object(p.jsx)(an,{})}),Object(p.jsxs)(m,{children:[" ",Object(p.jsx)(Vt,{})]})]})]})},sn=(n(505),n(506),n(320)),cn=n(662),on=n(319);var un=function(){var e=Object(C.a)(),t=Object(sn.a)(e,pt.b,on.a);return Object(p.jsx)("div",{className:"ed-container",children:Object(p.jsx)(cn.a,{theme:t,children:Object(p.jsx)(rn,{})})})},ln=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,690)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},dn=n(507);s.a.render(Object(p.jsx)(dn.a,{injectFirst:!0,children:Object(p.jsx)(un,{})}),document.getElementById("root")),ln()}},[[508,1,2]]]);
//# sourceMappingURL=main.986d003f.chunk.js.map