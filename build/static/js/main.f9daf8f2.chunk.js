(this["webpackJsonpadmin-ts"]=this["webpackJsonpadmin-ts"]||[]).push([[0],{504:function(e,t,r){},506:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(86),s=r.n(a),c=r(35),i=r.n(c),o=r(95),u=r(183),l=r.n(u);i.a.defaults.baseURL="http://31.220.31.43:5000/v1",i.a.defaults.headers.common.authorization=localStorage.getItem("token"),i.a.defaults.headers["Content-Type"]="application/json",i.a.interceptors.response.use((function(e){return e.data&&e.data.token&&localStorage.setItem("token",e.data.token),e}));var d=new l.a({max:10});Object(o.a)({axios:i.a,cache:d});var j=r(85),b=r(25),p=r(1),f=function(e){var t=e.children,r=Object(b.e)();return localStorage.getItem("token")?Object(p.jsx)(p.Fragment,{children:t}):["/","/pass"].includes(r.pathname)?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)(b.a,{to:"/",state:{from:r},replace:!0})},m=function(e){var t=e.children,r=Object(b.e)();return localStorage.getItem("token")?r.pathname.includes("dash")?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)(b.a,{to:"/dash",state:{from:r},replace:!0}):Object(p.jsx)(p.Fragment,{children:t})},O=r(23),x=r.n(O),h=r(36),v=r(6),g=r(31),w=r(3),y=r(8),C=r(46),E=r(669),k=r(666),I=r(683),S=r(684),N=r(679),P=r(646),q=r(151),F=r(647),A=r(682),M=r(310),L=r.n(M),R=r(313),T=r.n(R),U=r(312),D=r.n(U),z=r(656),B=r(648),V=r(636),K=r(308),G=r.n(K),_=r(26),J=r(681),X=r(73),$=r.n(X),H=r(187),W=r.n(H),Q=r(299),Y=r.n(Q)()(W.a),Z=Y,ee=function(e,t){var r=e.response,n=r?r.data.message:e.message?e.message:"";t?Y.fire(Object(g.a)(Object(g.a)({text:n},t),{},{timer:2e3})):Y.fire({title:"Error",text:n,icon:"error",timer:2e3})},te=r(664),re=r(660),ne=r(631),ae=r(680),se=r(105),ce=r(134),ie=r(321),oe=r(663),ue=r(659),le=r(677),de=r(658),je=r(304),be=r.n(je),pe=r(303),fe=r.n(pe),me=r(652),Oe=r(653),xe=r(637),he=r(639),ve=r(638),ge=r(657),we=r(651),ye=r(640),Ce=r(643),Ee=function(e){var t=e.fromInput,r=e.Action,a=e.schema,s=e.sx,c=e.conten,i=e.ButtonClass,o=e.buttonText,u=Object(se.e)(a?{resolver:Object(ie.a)(a)}:{}),l=u.control,d=u.handleSubmit,j=u.formState.errors,b=u.formState,f=u.reset,m=Object(n.useState)({}),O=Object(v.a)(m,2),x=O[0],h=O[1];Object(n.useEffect)((function(){b.isSubmitSuccessful&&f(x)}),[b,x,f]);var y=function(e){switch(e.type){case"file":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(a=e.value),Object(p.jsx)(de.a,{onChange:n,defaultValue:a,label:i,error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o,type:"file"})};case"select":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.currencies,c=e.name,i=e.label,o=e.autoFocus;e.value&&(a=e.value);return Object(p.jsxs)(le.a,{children:[Object(p.jsx)(ue.a,{id:"demo-simple-select-label",children:i}),Object(p.jsx)(me.a,{error:!!j[c],autoFocus:null!==o&&void 0!==o&&o,defaultValue:a,label:i,onChange:function(e){return n(e)},children:s?s.map((function(e){var t=e.name;return Object(p.jsx)(ae.a,{value:t,children:t},t)})):[]})]})};case"select-multiple":return function(t){var r=t.field,a=r.onChange,s=(r.value,e.currencies),c=e.name,i=e.label,o=e.autoFocus,u=e.checkItems;e.value&&e.value;var l=Object(n.useState)(u||[]),d=Object(v.a)(l,2),b=d[0],f=d[1];return Object(p.jsxs)(le.a,{sx:{m:1},children:[Object(p.jsx)(ue.a,{id:"demo-multiple-checkbox-label",children:i}),Object(p.jsx)(me.a,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:b,onChange:function(e){var t=e.target.value;f("string"===typeof t?t.split(","):t),a(e)},input:Object(p.jsx)(oe.a,{label:i}),renderValue:function(e){return e.join(", ")},error:!!j[c],autoFocus:null!==o&&void 0!==o&&o,children:s?s.map((function(e){var t=e.name;return Object(p.jsxs)(ae.a,{value:t,children:[Object(p.jsx)(Oe.a,{checked:b.includes(t)}),Object(p.jsx)(V.a,{primary:t})]},t)})):[]})]})};case"text":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(a=e.value),Object(p.jsx)(de.a,{onChange:n,defaultValue:a,label:i,error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"email":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(a=e.value),Object(p.jsx)(de.a,{onChange:n,defaultValue:a,label:i,type:"email",error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"password-see":return function(t){var r=t.field,a=r.onChange,s=r.value,c=e.name,i=e.label,o=e.autoFocus;e.value&&(s=e.value);var u,l=Object(n.useState)({password:s,showPassword:!1}),d=Object(v.a)(l,2),b=d[0],f=d[1];return Object(p.jsxs)(le.a,{sx:{m:1},variant:"outlined",error:!!j[c],children:[Object(p.jsx)(ue.a,{htmlFor:"outlined-adornment-password",children:i}),Object(p.jsx)(oe.a,{id:"outlined-adornment-password",type:b.showPassword?"text":"password",defaultValue:b.password,onChange:(u="password",function(e){f(Object(g.a)(Object(g.a)({},b),{},Object(w.a)({},u,e.target.value))),a(e)}),endAdornment:Object(p.jsx)(J.a,{position:"end",children:Object(p.jsx)(A.a,{"aria-label":"toggle password visibility",onClick:function(){f(Object(g.a)(Object(g.a)({},b),{},{showPassword:!b.showPassword}))},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:b.showPassword?Object(p.jsx)(fe.a,{}):Object(p.jsx)(be.a,{})})}),label:i,autoFocus:null!==o&&void 0!==o&&o})]})};case"password":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.name,c=e.InputProps,i=e.label,o=e.autoFocus;return e.value&&(a=e.value),Object(p.jsx)(de.a,{onChange:n,defaultValue:a,label:i,type:"password",error:!!j[s],helperText:j[s]&&j[s].message,InputProps:c||"",autoFocus:null!==o&&void 0!==o&&o})};case"time-date":return function(t){var r=t.field,n=r.onChange,a=r.value,s=e.name,c=e.timeConfig,i=c.inputFormat,o=c.typeTime,u=e.label;e.value&&(a=e.value);var l=function(e){n({target:{name:s,value:e}})};return Object(p.jsx)(xe.b,{locale:"es",dateAdapter:ve.a,children:Object(p.jsx)(he.a,{spacing:3,children:function(){switch(o){case"Desktop":return Object(p.jsx)(ye.a,{label:u,inputFormat:null!==i&&void 0!==i?i:"MM/dd/yyyy",value:a,onChange:l,renderInput:function(e){return Object(p.jsx)(de.a,Object(g.a)({},e))}});case"Mobile":return Object(p.jsx)(Ce.a,{label:u,inputFormat:null!==i&&void 0!==i?i:"MM/dd/yyyy",value:a,onChange:l,renderInput:function(e){return Object(p.jsx)(de.a,Object(g.a)({},e))}});case"Time":return Object(p.jsx)(ge.a,{label:u,value:a,onChange:l,renderInput:function(e){return Object(p.jsx)(de.a,Object(g.a)({},e))}});case"Date":return Object(p.jsx)(we.a,{label:u,value:a,onChange:l,renderInput:function(e){return Object(p.jsx)(de.a,Object(g.a)({},e))}})}}()})})}}};return Object(p.jsxs)(E.a,{onSubmit:d((function(e){try{r(e,(function(){var t=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(v.a)(e,2),r=t[0],n=t[1],a=typeof n;return"string"===a?[r,""]:"number"===a?[r,0]:"boolean"===a?[r,!1]:Array.isArray(n)?[r,[]]:"object"===a?[r,""]:[r,n]})))}(e);h(t)}))}catch(t){console.error(t)}})),component:"form",sx:s||{"& > :not(style)":{m:1}},className:c||"ed-grid",noValidate:!0,autoComplete:"off",children:[t.map((function(e,t){var r=e.name,n=e.rules;return Object(p.jsx)(se.a,{name:r,control:l,rules:n,render:e.render?e.render:y(e)},t)})),Object(p.jsx)(ce.a,{type:"submit",className:i||"",variant:"contained",children:o||"Submit"})]})},ke=function(e){return Object(p.jsx)(Ee,Object(g.a)({},e))},Ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #fff",borderRadius:2,boxShadow:24,px:4,py:4},Se=function(e){var t=e.open,r=e.onClose,n=e.form,a=e.children;return Object(p.jsx)("div",{children:Object(p.jsx)(re.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:r,closeAfterTransition:!0,BackdropComponent:te.a,BackdropProps:{timeout:500},children:Object(p.jsx)(ne.a,{in:t,children:Object(p.jsxs)(E.a,{sx:Ie,children:[" ",a||"",n?Object(p.jsx)(ke,Object(g.a)({},n)):""]})})})})},Ne=r(307),Pe=r.n(Ne),qe=r(665);Object(_.c)({mixed:{required:"Este campo es requerido"}});var Fe=_.b().shape({password:_.d().required(),confirPass:_.d().required()}).required(),Ae=function(){Object(b.f)();var e=Object(n.useState)(!1),t=Object(v.a)(e,2),r=t[0],a=t[1],s=function(){var e=Object(h.a)(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/auth/users/newPass",t);case 3:r=e.sent,Z.fire({title:r.data.message,icon:"success",text:"Revise su correo",timer:2e3}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),localStorage.clear(),ee(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c=[{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return a(!r)},color:"inherit",children:Object(p.jsx)(qe.a,{title:"Recuperar Contrase\xf1a",children:Object(p.jsx)(Pe.a,{})})}),Object(p.jsx)(Se,{onClose:function(){return a(!r)},open:r,form:{buttonText:"Cambiar Contrase\xf1a",Action:s,schema:Fe,fromInput:c},children:Object(p.jsx)("h2",{children:"Nueva Contrase\xf1a"})})]})},Me=r(309),Le=r.n(Me),Re=r(311),Te=r.n(Re),Ue=240,De=function(e){return{width:Ue,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},ze=function(e){return Object(w.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},Be=Object(y.a)("div")((function(e){var t=e.theme;return Object(g.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),Ve=Object(y.a)(I.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,r=e.open;return Object(g.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},r&&{marginLeft:Ue,width:"calc(100% - ".concat(Ue,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Ke=Object(y.a)(k.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,r=e.open;return Object(g.a)(Object(g.a)({width:Ue,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},r&&Object(g.a)(Object(g.a)({},De(t)),{},{"& .MuiDrawer-paper":De(t)})),!r&&Object(g.a)(Object(g.a)({},ze(t)),{},{"& .MuiDrawer-paper":ze(t)}))}));function Ge(){var e=Object(C.a)(),t=Object(n.useState)(!1),r=Object(v.a)(t,2),a=r[0],s=r[1],c=Object(b.f)(),i=Object(n.useState)([{icon:Object(p.jsx)(G.a,{}),url:"/dash/users",text:"Usuarios"},{icon:Object(p.jsx)(Le.a,{}),url:"/dash/elections",text:"Eleciones"}]),o=Object(v.a)(i,1)[0],u=Object(n.useState)("Inicio"),l=Object(v.a)(u,2),d=l[0],f=l[1],m=function(){var e=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.fire({title:"Esta seguro que desea salir?",showDenyButton:!0,confirmButtonText:"Si",denyButtonText:"No",timer:2e3});case 2:e.sent.isConfirmed&&(localStorage.clear(),c("/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(E.a,{sx:{flexGrow:1},children:[Object(p.jsx)(P.a,{}),Object(p.jsx)(Ve,{position:"fixed",open:a,children:Object(p.jsxs)(S.a,{children:[Object(p.jsx)(A.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",sx:Object(g.a)({marginRight:"36px"},a&&{display:"none"}),children:Object(p.jsx)(L.a,{})}),Object(p.jsx)(q.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:d}),Object(p.jsx)(Ae,{}),Object(p.jsx)(A.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:m,color:"inherit",children:Object(p.jsx)(Te.a,{})})]})}),Object(p.jsxs)(Ke,{className:"from-m",variant:"permanent",open:a,children:[Object(p.jsx)(Be,{children:Object(p.jsx)(A.a,{onClick:function(){s(!1)},children:"rtl"===e.direction?Object(p.jsx)(D.a,{}):Object(p.jsx)(T.a,{})})}),Object(p.jsx)(F.a,{}),Object(p.jsx)(N.a,{children:o.map((function(e){var t=e.text,r=e.icon,n=e.url;return Object(p.jsx)(j.b,{to:n,children:Object(p.jsxs)(z.a,{onClick:function(){return f(t)},children:[Object(p.jsx)(B.a,{children:r}),Object(p.jsx)(V.a,{primary:t})]},t)})}))}),Object(p.jsx)(F.a,{})]}),Object(p.jsx)(E.a,{component:"main",sx:{flexGrow:1,p:3},children:Object(p.jsx)(Be,{})})]})}var _e=function(e){e.children;return Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsxs)("div",{className:"ed-item",children:[" ",Object(p.jsx)(Ge,{})]}),Object(p.jsx)("div",{className:"ed-item m-95 s-pb-4 s-to-right",children:Object(p.jsx)(b.b,{})})]})},Je=r(649),Xe=r(93),$e=r.n(Xe),He=r(228),We=r.n(He),Qe=r(314),Ye=r.n(Qe),Ze=r(685),et=r(667),tt=r(531),rt=_.b({name:_.d().required(),email:_.d().email().required(),password:_.d().required(),confirPass:_.d().required(),roles:_.a().min(1).max(4).required()}).required(),nt=function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(t){var r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),(r=new FormData).append("images",t.target[0].files[0]),e.next=6,i.a.post("/auth/register/big",r);case 6:n=e.sent,Z.fire({title:"OK",text:n.data.message,icon:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),ee(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),t=gt(),r=t.reFreshList,a=t.openCreateModal,s=t.CreateModal,c=t.Rols,o=Object(n.useState)("one"),u=Object(v.a)(o,2),l=u[0],d=u[1],j=function(){var e=Object(h.a)(x.a.mark((function e(t,n){var a,s,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.password,s=t.confirPass,a===s){e.next=4;break}throw new Error("Sus contrase\xf1as no son inguales");case 4:return t.roles=c.filter((function(e){return t.roles.includes(e.name)})),e.next=7,i.a.post("/auth/register",t);case 7:o=e.sent,Z.fire({title:"OK",text:o.data.message,icon:"success"}),n(),r(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),ee(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,r){return e.apply(this,arguments)}}(),b=[{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)(Je.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($e.a,{})})}},{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}},{type:"select-multiple",name:"roles",label:"Roles",currencies:c||[],rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}];return Object(p.jsxs)(Se,{open:a,onClose:s,children:[Object(p.jsxs)("div",{className:"s-px-1 ed-container",children:[Object(p.jsx)("h2",{className:"s-to-left",children:"one"===l?"Crear Usuario":"carga masiva de usuarios"}),Object(p.jsx)("div",{className:"s-to-right",children:Object(p.jsxs)(et.a,{value:l,exclusive:!0,onChange:function(e,t){d(t)},"aria-label":"text alignment",children:[Object(p.jsx)(Ze.a,{value:"one","aria-label":"left aligned",children:Object(p.jsx)(qe.a,{title:"Formulario",placement:"top-start",children:Object(p.jsx)(We.a,{})})}),Object(p.jsx)(Ze.a,{value:"big","aria-label":"right",children:Object(p.jsx)(qe.a,{title:"Carga Masiva",placement:"top-end",children:Object(p.jsx)(Ye.a,{})})})]})})]}),"one"===l?Object(p.jsx)(ke,{Action:j,schema:rt,fromInput:b}):Object(p.jsxs)("div",{className:"ed-item s-pt-3",children:[Object(p.jsxs)("form",{className:"ed-grid m-grid-2",onSubmit:e,children:[Object(p.jsxs)(tt.a,{variant:"contained",children:[Object(p.jsx)(We.a,{})," Archivo",Object(p.jsx)("input",{type:"file",name:"picture",hidden:!0})]}),Object(p.jsxs)(tt.a,{type:"submit",variant:"contained",children:["Enviar ",Object(p.jsx)("input",{type:"file",name:"picture",hidden:!0})]})]}),Object(p.jsx)(tt.a,{href:"./img/big-test.xlsx",download:"planilla_carga_masiva-usuarios",className:"ed-item",type:"submit",variant:"contained",children:"Planilla de Carga masiva"})]})]})},at=_.b().shape({name:_.d(),email:_.d().email(),roles:_.a().min(1).max(4)}),st=function(){var e=gt(),t=e.reFreshList,r=e.openEditModal,a=e.EditModal,s=e.Rols,c=e.User,o=function(){var e=Object(h.a)(x.a.mark((function e(r,n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object.fromEntries(Object.entries(r).filter((function(e){var t=Object(v.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(v.a)(e,2),n=t[0],a=t[1];return"roles"===n?[n,s.filter((function(e){return r.roles.includes(e.name)}))]:[n,a]}))),e.next=4,i.a.put("/users/"+c.id,a);case 4:o=e.sent,Z.fire({title:"OK",text:o.data.message,icon:"success"}),t(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),Z.fire({title:"Error",text:e.t0,icon:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),u=Object(n.useState)([{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)(Je.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($e.a,{})})}},{type:"select-multiple",name:"roles",label:"Roles",currencies:s||[],checkItems:[],rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}]),l=Object(v.a)(u,2),d=l[0],j=l[1];return Object(n.useLayoutEffect)((function(){if(c){var e=d;Object.entries(c).forEach((function(t){var r=Object(v.a)(t,2),n=r[0],a=r[1],s=e.findIndex((function(e){return e.name===n}));-1!==s&&"roles"!==n&&(e[s].value=a),"roles"===n&&(e[s].checkItems=a.map((function(e){return e.name})))})),j(e)}}),[d,c]),Object(n.useLayoutEffect)((function(){var e=d;e[2].currencies=s,j(e)}),[d,s]),Object(p.jsx)(Se,{open:r,onClose:a,form:{Action:o,schema:at,fromInput:d,buttonText:"editar"},children:Object(p.jsx)("h2",{className:"s-center",children:"Editar Usuario"})})},ct=r(317),it=r.n(ct),ot=r(316),ut=r.n(ot),lt=r(315),dt=r.n(lt),jt=r(161),bt=r(671),pt=function(){var e=jt.c.components;if(e){var t=e.MuiDataGrid;if(t){var r=t.defaultProps;if(r){var n=r.localeText;if(n)return n}}}},ft=function(e){var t=e.rows,r=e.columns,a=e.actions,s=Object(n.useState)([]),c=Object(v.a)(s,2),i=c[0],o=c[1];return Object(n.useLayoutEffect)((function(){var e=t.map((function(e){var t=Object.entries(e).map((function(e){var t=Object(v.a)(e,2),r=t[0],n=t[1];if("object"!==typeof n)return[r,n];if(!Array.isArray(n))return[r,n.name];var a=n.map((function(e){return e.name})).join(", ");return[r,a]}));return Object.fromEntries(t)}));o(e)}),[t]),Object(p.jsx)("div",{style:{height:300,width:"100%"},children:Object(p.jsx)(jt.a,{localeText:pt(),rows:i,columns:function(e,t){if(!t)return e;var r=function(e){var t=e.remove,r=e.print,n=e.edit;return{field:"actions",headerName:"Acciones",width:150,renderCell:function(e){var a=e.row;return Object(p.jsxs)("strong",{children:[r?Object(p.jsx)(bt.a,{size:"small",onClick:function(){return r(a)},color:"inherit",children:Object(p.jsx)(dt.a,{})}):"",n?Object(p.jsx)(bt.a,{size:"small",onClick:function(){return n(a)},color:"primary",children:Object(p.jsx)(ut.a,{})}):"",t?Object(p.jsx)(bt.a,{size:"small",onClick:function(){return t(a)},color:"secondary",children:Object(p.jsx)(it.a,{})}):""]})}}}(t);return e.concat(r)}(r,a)})})},mt=function(){var e=gt(),t=e.NewUser,r=e.defineUser,a=e.Rols,s=e.EditModal,c=Object(o.b)("/users"),u=Object(v.a)(c,1)[0].data,l=Object(n.useState)([]),d=Object(v.a)(l,2),j=d[0],b=d[1];Object(n.useLayoutEffect)((function(){u&&!t?b(u.info):i.a.get("/users").then((function(e){var t=e.data;t.info&&b(t.info)}))}),[t,u]);var f={edit:function(e){var t=a.filter((function(t){return e.roles.includes(t.name)})),n=Object(g.a)(Object(g.a)({},e),{},{roles:t});r(n),s()}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ft,{rows:j,columns:[{field:"id",headerName:"ID",width:120},{field:"name",headerName:"Nombre",width:170},{field:"email",headerName:"Email",width:170},{field:"roles",headerName:"Roles",width:170}],actions:f})})},Ot=r(194),xt=r.n(Ot),ht={NewUser:0,openCreateModal:!1,openEditModal:!1,UserData:{},reFreshList:function(){},CreateModal:function(){},EditModal:function(){},defineUser:function(){},Rols:[],User:{}},vt=Object(n.createContext)(ht),gt=function(){return Object(n.useContext)(vt)},wt="ReFreshList",yt="Roles",Ct="User",Et=function(e,t){var r=t.payload,n=t.type;return n===wt?(e.NewUser=e.NewUser+1,e):n===yt?(e.Rols=r,e):n===Ct?(e.User=r,e):void 0},kt=function(){var e=Object(o.b)("/roles"),t=Object(v.a)(e,1)[0].data,r=Object(n.useReducer)(Et,ht),a=Object(v.a)(r,2),s=a[0],c=a[1],i=Object(n.useState)(0),u=Object(v.a)(i,2),l=u[0],d=u[1],j=Object(n.useState)(!1),b=Object(v.a)(j,2),f=b[0],m=b[1],O=Object(n.useState)(!1),x=Object(v.a)(O,2),h=x[0],w=x[1],y=function(){return w(!h)};return Object(n.useLayoutEffect)((function(){t&&(c({type:yt,payload:t.info}),d(l+1))}),[t]),Object(p.jsxs)(vt.Provider,{value:Object(g.a)(Object(g.a)({},s),{},{openCreateModal:h,reFreshList:function(){c({type:wt}),d(l+1)},CreateModal:y,defineUser:function(e){c({type:Ct,payload:e})},EditModal:function(){return m(!f)},openEditModal:f}),children:[Object(p.jsxs)("div",{className:"ed-container s-py-5",children:[Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsx)("h2",{children:"Lista de usuarios"}),Object(p.jsx)(mt,{})]}),Object(p.jsx)(nt,{}),Object(p.jsx)(st,{})]}),Object(p.jsx)(E.a,{sx:{position:"fixed",width:60,height:60,bottom:40,right:40},children:Object(p.jsx)(bt.a,{onClick:y,color:"primary","aria-label":"add",children:Object(p.jsx)(xt.a,{})})})]})},It=_.b({name:_.d().required()}).required(),St=function(){var e=Mt(),t=e.reFreshList,r=e.openCreateModal,n=e.CreateModal,a=function(){var e=Object(h.a)(x.a.mark((function e(r,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/elections",r);case 3:a=e.sent,Z.fire({title:"OK",text:a.data.info.message,icon:"success",timer:2e3}),n(),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),ee(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),s=[{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)(Je.a,{})})}}],c={Action:a,schema:It,fromInput:s,buttonText:"Crear"};return Object(p.jsx)(Se,{open:r,onClose:n,form:c,children:Object(p.jsx)("h2",{className:"s-center",children:"Crear Elecci\xf3n"})})},Nt=_.b().shape({name:_.d(),status:_.d()}),Pt=function(){var e=Mt(),t=e.reFreshList,r=e.openEditModal,a=e.EditModal,s=e.status,c=e.Election,o=function(){var e=Object(h.a)(x.a.mark((function e(r,n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=Object.fromEntries(Object.entries(r).filter((function(e){var t=Object(v.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(v.a)(e,2),n=t[0],a=t[1];return"status"===n?[n,s.find((function(e){return r.status===e.name})).id]:[n,a]}))),Object.keys(a).length){e.next=4;break}throw new Error("No se puede actualizar una elecci\xf3n sin cambios");case 4:return console.log("body",a),e.next=7,i.a.put("/elections/"+c.id,a);case 7:o=e.sent,Z.fire({title:"OK",text:o.data.message,icon:"success"}),t(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),ee(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),u=Object(n.useState)([{type:"text",name:"name",label:"Nombre",autoFocus:!0,rules:function(e){return{required:!1}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)(Je.a,{})})}},{type:"select",name:"status",label:"Status",currencies:s||[],rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}]),l=Object(v.a)(u,2),d=l[0],j=l[1];return Object(n.useLayoutEffect)((function(){if(c){var e=d;Object.entries(c).forEach((function(t){var r=Object(v.a)(t,2),n=r[0],a=r[1],s=e.findIndex((function(e){return e.name===n}));-1!==s&&(e[s].value=a)})),s&&(e[1].currencies=s),j(e)}}),[d,c,s]),Object(p.jsx)(Se,{open:r,onClose:a,form:{Action:o,schema:Nt,fromInput:d,buttonText:"editar"},children:Object(p.jsx)("h2",{className:"s-center",children:"Editar Elecci\xf3n"})})},qt=function(){var e=Mt(),t=e.NewElection,r=e.defineElection,a=e.EditModal,s=Object(o.b)("/elections"),c=Object(v.a)(s,1)[0].data,u=Object(n.useState)([]),l=Object(v.a)(u,2),d=l[0],j=l[1];Object(n.useLayoutEffect)((function(){c&&!t?j(c.info):i.a.get("/elections").then((function(e){var t=e.data;t.info&&j(t.info)}))}),[t,c]);var b={edit:function(e){r(e),a()}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(ft,{rows:d,columns:[{field:"id",headerName:"ID",width:120},{field:"name",headerName:"Nombre",width:170},{field:"status",headerName:"Status",width:150}],actions:b})})},Ft={NewElection:0,openCreateModal:!1,openEditModal:!1,ElectionData:{},reFreshList:function(){},CreateModal:function(){},EditModal:function(){},defineElection:function(){},status:[],Election:{}},At=Object(n.createContext)(Ft),Mt=function(){return Object(n.useContext)(At)},Lt="ReFreshList",Rt="Status",Tt="Election",Ut=function(e,t){var r=t.payload,n=t.type;return n===Lt?(e.NewElection=e.NewElection+1,e):n===Rt?(e.status=r,e):n===Tt?(e.Election=r,e):void 0},Dt=function(){var e=Object(o.b)("/elections/status"),t=Object(v.a)(e,1)[0].data,r=Object(n.useReducer)(Ut,Ft),a=Object(v.a)(r,2),s=a[0],c=a[1],i=Object(n.useState)(0),u=Object(v.a)(i,2),l=u[0],d=u[1],j=Object(n.useState)(!1),b=Object(v.a)(j,2),f=b[0],m=b[1],O=Object(n.useState)(!1),x=Object(v.a)(O,2),h=x[0],w=x[1],y=function(){return w(!h)};return Object(n.useLayoutEffect)((function(){t&&(c({type:Rt,payload:t.info}),d(l+1))}),[t]),Object(p.jsxs)(At.Provider,{value:Object(g.a)(Object(g.a)({},s),{},{openCreateModal:h,reFreshList:function(){c({type:Lt}),d(l+1)},CreateModal:y,defineElection:function(e){c({type:Tt,payload:e})},EditModal:function(){return m(!f)},openEditModal:f}),children:[Object(p.jsxs)("div",{className:"ed-container s-py-5",children:[Object(p.jsxs)("div",{className:"ed-item",children:[Object(p.jsx)("h2",{children:"Lista de Elecci\xf3nes"}),Object(p.jsx)(qt,{})]}),Object(p.jsx)(St,{}),Object(p.jsx)(Pt,{})]}),Object(p.jsx)(E.a,{sx:{position:"fixed",width:60,height:60,bottom:40,right:40},children:Object(p.jsx)(bt.a,{onClick:y,color:"primary","aria-label":"add",children:Object(p.jsx)(xt.a,{})})})]})},zt=function(){var e=[{path:"/dash",element:Object(p.jsx)(_e,{}),children:[{index:!0,element:Object(p.jsx)(kt,{})},{path:"/dash/users",element:Object(p.jsx)(kt,{})},{path:"/dash/elections",element:Object(p.jsx)(Dt,{})}]}];return Object(b.h)(e)},Bt=r(674),Vt=function(){var e=Object(b.e)().pathname;return Object(p.jsx)("div",{className:"m-50 s-to-center s-pt-3",children:Object(p.jsx)(E.a,{children:Object(p.jsxs)(Bt.a,{className:"m-px-2",variant:"outlined",children:[Object(p.jsx)("div",{className:"ed-grid m-grid-4 s-cross-center",children:Object(p.jsx)("div",{className:"s-ratio-4-3 m-cols-2 m-x-2 img-container",children:Object(p.jsx)("img",{src:"img/Lodo_Sabaneta_60x60.png",alt:"aa"})})}),Object(p.jsx)(b.b,{}),Object(p.jsx)("div",{className:"s-right s-py-1",children:"/"===e?Object(p.jsx)(j.b,{to:"/pass",children:Object(p.jsx)(q.a,{children:"Olvido su contrase\xf1a?"})}):Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)(q.a,{children:"Iniciar Sesi\xf3n"})})})]})})})},Kt=Object(n.createContext)({auth:!1,saveAuth:{}}),Gt="AUTH",_t=function(e,t){t.payload;if(t.type===Gt)return e.auth=!!localStorage.getItem("token"),e},Jt=function(e){var t=e.children,r={login:function(e){localStorage.setItem("token",e),o({type:Gt})},logout:function(){localStorage.removeItem("token"),o({type:Gt})}},a={auth:!!localStorage.getItem("token"),saveAuth:r},s=Object(n.useReducer)(_t,a),c=Object(v.a)(s,2),i=c[0],o=c[1];return Object(p.jsx)(Kt.Provider,{value:Object(g.a)(Object(g.a)({},i),{},{saveAuth:r}),children:t})};Object(_.c)({mixed:{required:"Este campo es requerido"},string:{min:"El minimo de caracteres es de ${min}",max:"El maximo de caracteres es de ${max}"}});var Xt=_.b().shape({email:_.d().email().required(),password:_.d().min(8).max(12).required()}).required(),$t=function(){var e=Object(n.useContext)(Kt).saveAuth,t=Object(b.f)(),r=function(){var r=Object(h.a)(x.a.mark((function r(n){var a;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.post("/auth/login",n);case 3:if(a=r.sent,a.data.info.roles.find((function(e){return"Admin"===e.name}))){r.next=7;break}throw new Error("No tiene permisos para acceder");case 7:e.login(a.data.token),t("/dash/users"),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),localStorage.clear(),ee(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}(),a=[{type:"text",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($e.a,{})})}},{type:"password",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}];return Object(p.jsx)(ke,{buttonText:"crear",Action:r,schema:Xt,fromInput:a})},Ht=_.b({name:_.d().required(),email:_.d().required(),password:_.d().required(),confirPass:_.d().required()}).required(),Wt=function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(t){var r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=t.password,n=t.confirPass,r===n){e.next=4;break}throw{title:"Error",text:"Sus contrase\xf1as no son inguales",icon:"error"};case 4:return e.next=6,i.a.post("/auth/register",t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z.fire(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),t=[{type:"text",name:"name",label:"Nombre",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)(Je.a,{})})}},{type:"email",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($e.a,{})})}},{type:"password-see",name:"password",label:"Contrase\xf1a",rules:function(e){return{required:!0}}},{type:"password",name:"confirPass",label:"Repetir Contrase\xf1a",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($.a,{})})}}];return Object(p.jsx)(ke,{buttonText:"crear",Action:e,schema:Ht,fromInput:t})};Object(_.c)({mixed:{required:"Este campo es requerido"}});var Qt=_.b().shape({email:_.d().email().required()}).required(),Yt=function(){var e=Object(b.f)(),t=function(){var t=Object(h.a)(x.a.mark((function t(r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,i.a.post("/auth/users/newPass",r);case 4:Z.fire({title:"Se ha enviado un correo",icon:"success",text:"Revise su correo",timer:2e3}),e("/"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),localStorage.clear(),ee(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),r=[{type:"text",name:"email",label:"Correo",rules:function(e){return{required:!0}},InputProps:{startAdornment:Object(p.jsx)(J.a,{position:"start",children:Object(p.jsx)($e.a,{})})}}];return Object(p.jsx)(ke,{buttonText:"crear",Action:t,schema:Qt,fromInput:r})},Zt=function(e){var t=e.type;return"login"===t?Object(p.jsx)($t,{}):"MailPass"===t?Object(p.jsx)(Yt,{}):Object(p.jsx)(Wt,{})},er=function(){var e=[{path:"/",element:Object(p.jsx)(Vt,{}),children:[{index:!0,element:Object(p.jsx)(Zt,{type:"login"})},{path:"/pass",element:Object(p.jsx)(Zt,{type:"MailPass"})}]}];return Object(b.h)(e)},tr=function(){return Object(p.jsxs)(Jt,{children:[" ",Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m,{children:Object(p.jsx)(er,{})}),Object(p.jsxs)(f,{children:[" ",Object(p.jsx)(zt,{})]})]})]})},rr=(r(504),r(320)),nr=r(661),ar=r(319);var sr=function(){var e=Object(C.a)(),t=Object(rr.a)(e,jt.b,ar.a);return Object(p.jsx)("div",{className:"ed-container",children:Object(p.jsx)(nr.a,{theme:t,children:Object(p.jsx)(tr,{})})})},cr=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,686)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},ir=r(505);s.a.render(Object(p.jsx)(ir.a,{injectFirst:!0,children:Object(p.jsx)(sr,{})}),document.getElementById("root")),cr()}},[[506,1,2]]]);
//# sourceMappingURL=main.f9daf8f2.chunk.js.map