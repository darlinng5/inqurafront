"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[9780],{9780:(G,v,a)=>{a.r(v),a.d(v,{EmpresaModule:()=>j});var f=a(9808),g=a(5077),Z=a(1546),e=a(5e3),i=a(3075),h=a(9783),T=a(9019);class I{}var C=a(5384),E=a(7747),N=a(845),x=a(1424),A=a(5787),b=a(7773),y=a(6198),F=a(7531),U=a(7116);function _(t,n){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}const S=function(){return{width:"500px",height:"50px"}};function P(t,n){1&t&&(e.TgZ(0,"div")(1,"h5"),e._uU(2,"Espere......"),e.qZA(),e._UZ(3,"p-progressSpinner",1),e.qZA()),2&t&&(e.xp6(3),e.Akn(e.DdM(2,S)))}function q(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar un nombre valido!!! "),e.qZA()())}function J(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar nombre comercial valido, el nombre comercial suele ser el mismo que el nombre de la empresa!!! "),e.qZA()())}function Y(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar una ciudad valida!!! "),e.qZA()())}function L(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar un correlativo inicial valido "),e.qZA()())}function B(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar una direcci\xf3n valida!!! "),e.qZA()())}function D(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar un Telefono final valido "),e.qZA()())}function O(t,n){1&t&&(e.TgZ(0,"p")(1,"FONT",17),e._uU(2,"Debe ingresar un correo valido "),e.qZA()())}function Q(t,n){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function M(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div"),e._UZ(1,"p-toast"),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){e.CHM(r);const l=e.oxw();return e.KtG(l.createEnterprise())}),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5"),e._uU(7,"Configuracion para Empresa"),e.qZA(),e.TgZ(8,"div",6)(9,"label")(10,"b"),e._uU(11,"Nombre"),e.qZA()(),e._UZ(12,"input",7),e.qZA(),e.TgZ(13,"div",6)(14,"label")(15,"b"),e._uU(16,"Nombre Comercial"),e.qZA()(),e._UZ(17,"input",8),e.qZA(),e.TgZ(18,"div",6)(19,"label")(20,"b"),e._uU(21,"Ciudad"),e.qZA()(),e._UZ(22,"input",9),e.qZA(),e.TgZ(23,"div",6)(24,"label")(25,"b"),e._uU(26,"Direcci\xf3n"),e.qZA()(),e._UZ(27,"input",10),e.qZA(),e.TgZ(28,"div",6)(29,"label")(30,"b"),e._uU(31,"RTN"),e.qZA()(),e._UZ(32,"input",11),e.qZA(),e.TgZ(33,"div",6)(34,"label")(35,"b"),e._uU(36,"Tel\xe9fono"),e.qZA()(),e._UZ(37,"input",12),e.qZA(),e.TgZ(38,"div",6)(39,"label")(40,"b"),e._uU(41,"Correo"),e.qZA()(),e._UZ(42,"input",13),e.qZA(),e.TgZ(43,"div",14)(44,"div",15),e.YNc(45,q,3,0,"p",0),e.YNc(46,J,3,0,"p",0),e.YNc(47,Y,3,0,"p",0),e.YNc(48,L,3,0,"p",0),e.YNc(49,B,3,0,"p",0),e.YNc(50,D,3,0,"p",0),e.YNc(51,O,3,0,"p",0),e.qZA()(),e._UZ(52,"button",16),e.qZA()()()(),e.YNc(53,Q,2,0,"div",0),e.qZA()}if(2&t){const r=e.oxw();e.xp6(2),e.Q6J("formGroup",r.enterpriseForm),e.xp6(43),e.Q6J("ngIf",r.validate("name")),e.xp6(1),e.Q6J("ngIf",r.validate("comercialName")),e.xp6(1),e.Q6J("ngIf",r.validate("city")),e.xp6(1),e.Q6J("ngIf",r.validate("rtn")),e.xp6(1),e.Q6J("ngIf",r.validate("address")),e.xp6(1),e.Q6J("ngIf",r.validate("phone")),e.xp6(1),e.Q6J("ngIf",r.validate("email")),e.xp6(2),e.Q6J("ngIf",r.showProgressBar)}}let k=(()=>{class t{constructor(r,o,l,p){this.fb=r,this.eventService=o,this.productService=l,this.messageService=p,this.showProgressBar=!1,this.formSend=!1,this.enterpriseCreated=!1,this.IsLoading=!1,this.enterpriseForm=this.fb.group({name:["",[i.kI.required,i.kI.minLength(3)]],comercialName:["",[i.kI.required,i.kI.minLength(3)]],city:["",[i.kI.required,i.kI.minLength(5)]],address:["",[i.kI.required,i.kI.minLength(10)]],rtn:["",[i.kI.required,i.kI.minLength(10)]],phone:["",[i.kI.required,i.kI.minLength(6)]],email:["",[i.kI.required,i.kI.email]]}),this.enterpriseCreated=o.getHasEnterprise()==T.N.SuccessResponse,this.enterpriseCreated&&(this.IsLoading=!0,this.value())}value(){this.messageService.add({severity:"error",summary:"Error",detail:"No tiene productos creados",life:3e3}),this.productService.getEnterprise(this.eventService.getToken()).subscribe(r=>{r.data?this.enterpriseForm.patchValue({name:r.data.name,comercialName:r.data.comercialName,city:r.data.city,address:r.data.address,rtn:r.data.rtn,phone:r.data.phone,email:r.data.email}):(alert(r.message),this.messageService.add({severity:"error",summary:"Error",detail:"No tiene productos creados",life:3e3})),this.IsLoading=!1},r=>{alert(r),this.messageService.add({severity:"error",summary:"Error",detail:r.message,life:3e3}),this.IsLoading=!1})}validate(r){var o;return!(!(null===(o=this.enterpriseForm.get(r))||void 0===o?void 0:o.invalid)||1!=this.formSend)}createEnterprise(){var r,o,l,p,d,c,u;if(this.enterpriseCreated)alert("Ya tiene una empresa creada");else if(this.showProgressBar=!0,this.formSend=!0,this.enterpriseForm.valid){this.showProgressBar=!0;var s=new I;s.name=null===(r=this.enterpriseForm.get("name"))||void 0===r?void 0:r.value,s.comercialName=null===(o=this.enterpriseForm.get("comercialName"))||void 0===o?void 0:o.value,s.city=null===(l=this.enterpriseForm.get("city"))||void 0===l?void 0:l.value,s.address=null===(p=this.enterpriseForm.get("address"))||void 0===p?void 0:p.value,s.rtn=null===(d=this.enterpriseForm.get("rtn"))||void 0===d?void 0:d.value,s.phone=null===(c=this.enterpriseForm.get("phone"))||void 0===c?void 0:c.value,s.email=null===(u=this.enterpriseForm.get("email"))||void 0===u?void 0:u.value,s.userId=this.eventService.getToken(),this.productService.AddEnterprise(s).subscribe(m=>{m.data?(this.eventService.setToken(m.data.token),this.eventService.setHasEnterprise(m.data.hasEnterprise),this.eventService.setHasWareHouse(m.data.hasWareHouse),this.eventService.setHasPointOfSale(m.data.hasPointOfSale),alert("Se registro de forma exitosa")):alert(m.message),this.showProgressBar=!1},m=>{})}}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(i.qu),e.Y36(C.P),e.Y36(E.M),e.Y36(h.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-enterprise"]],features:[e._Bn([h.ez])],decls:3,vars:3,consts:[[4,"ngIf"],["styleClass","custom-spinner","strokeWidth","8","fill","var(--surface-ground)","animationDuration",".5s"],[1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],[1,"grid"],[1,"col-12","md:col-6"],[1,"card","p-fluid"],[1,"field"],["matInput","","pInputText","","placeholder","Nombre","type","text","formControlName","name",1,"form-control"],["matInput","","pInputText","","placeholder","Nombre Comercial","type","text","formControlName","comercialName",1,"form-control"],["matInput","","pInputText","","placeholder","Ciudad seguido del Departamento","type","text","formControlName","city",1,"form-control"],["matInput","","pInputText","","placeholder","Direcci\xf3n completa, de esta forma aparecera en la factura","type","text","formControlName","address",1,"form-control"],["matInput","","pInputText","","placeholder","RTN","type","text","formControlName","rtn",1,"form-control"],["matInput","","pInputText","","placeholder","Tel\xe9fono","type","text","formControlName","phone",1,"form-control"],["matInput","","pInputText","","placeholder","Correo","type","email","formControlName","email",1,"form-control"],[1,"row"],[1,"col","tex-danger"],["type","submit","pButton","","pRipple","","label","Save","icon","pi pi-check"],["COLOR","red"]],template:function(r,o){1&r&&(e.YNc(0,_,2,0,"div",0),e.YNc(1,P,4,3,"div",0),e.YNc(2,M,54,9,"div",0)),2&r&&(e.Q6J("ngIf",o.showProgressBar),e.xp6(1),e.Q6J("ngIf",o.IsLoading),e.xp6(1),e.Q6J("ngIf",!o.IsLoading))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,f.O5,N.Hq,x.o,A.H,b.FN,i.sg,i.u,y.G,F.Nt,U.R],encapsulation:2}),t})(),H=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"grid"],[1,"col-12"],[1,"card"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-enterprise"),e.qZA()()())},dependencies:[k],encapsulation:2}),t})(),R=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:H,canActivate:[Z.j]}]),g.Bz]}),t})();var z=a(4891);let j=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,R,z.E]}),t})()}}]);