"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[6549],{6549:(O,y,r)=>{r.r(y),r.d(y,{UsersModule:()=>re});var t=r(6895),g=r(9197),U=r(1546),C=r(805);class D{}class x{}class b{}var e=r(4650),h=r(7747),_=r(5384),p=r(99),w=r(2453),m=r(1383),S=r(5593),J=r(1493),E=r(1740),A=r(4006),d=r(7116),Z=r(6768),o=r(9766);function s(l,T){1&l&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function u(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"div",47),e._UZ(1,"p-toast"),e.TgZ(2,"button",48),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.openNew())}),e.qZA()()}}function M(l,T){1&l&&(e.TgZ(0,"tr")(1,"th",49),e._uU(2,"Nombre"),e._UZ(3,"p-sortIcon",50),e.qZA(),e.TgZ(4,"th",51),e._uU(5,"Apellido "),e._UZ(6,"p-sortIcon",52),e.qZA(),e.TgZ(7,"th",53),e._uU(8,"Correo "),e._UZ(9,"p-sortIcon",54),e.qZA(),e.TgZ(10,"th",55),e._uU(11,"Celular "),e._UZ(12,"p-sortIcon",54),e.qZA(),e.TgZ(13,"th",56),e._uU(14,"Rol "),e._UZ(15,"p-sortIcon",54),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Asignar Talonario/Editar Permisos"),e.qZA()())}function P(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"p-button",57),e.NdJ("click",function(){const f=e.CHM(n).$implicit,v=e.oxw();return e.KtG(v.AsignarTalonario(f))}),e.qZA(),e.TgZ(13,"p-button",58),e.NdJ("click",function(){const f=e.CHM(n).$implicit,v=e.oxw();return e.KtG(v.ViewPermisions(f))}),e.qZA()()()}if(2&l){const n=T.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.middleName),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Oqu(n.cellphone),e.xp6(2),e.Oqu(n.role)}}function I(l,T){1&l&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function V(l,T){1&l&&(e.TgZ(0,"small",59),e._uU(1," El nombre es requerido. "),e.qZA())}function q(l,T){if(1&l&&(e.TgZ(0,"option",60),e._uU(1),e.qZA()),2&l){const n=T.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function R(l,T){1&l&&(e.TgZ(0,"small",59),e._uU(1," El rol es requerido. "),e.qZA())}function G(l,T){1&l&&(e.TgZ(0,"small",59),e._uU(1," Ingrese un correo electr\xf3nico v\xe1lido. "),e.qZA())}function Q(l,T){1&l&&(e.TgZ(0,"small",59),e._uU(1," La contrase\xf1a debe tener al menos 5 caracteres. "),e.qZA())}function Y(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.hideDialog())}),e.qZA()}}function K(l,T){1&l&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function L(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",62)(2,"div",1)(3,"div",63)(4,"label",64),e._uU(5,"Usuario:"),e.qZA(),e.TgZ(6,"strong"),e._uU(7),e.qZA()()()(),e.TgZ(8,"div",62)(9,"div",1)(10,"div",63)(11,"label",65),e._uU(12,"Punto de Venta"),e.qZA(),e.TgZ(13,"app-drop-down",66),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const f=e.oxw();return e.KtG(f.filterPointOfSale(i))}),e.qZA()(),e.TgZ(14,"div",63)(15,"label",67),e._uU(16,"Talonario"),e.qZA(),e.TgZ(17,"app-drop-down",66),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const f=e.oxw();return e.KtG(f.filterTalonario(i))}),e.qZA()()()()()}if(2&l){const n=e.oxw();e.xp6(7),e.AsE("",n.userSelectd.name," ",n.userSelectd.middleName,""),e.xp6(6),e.Q6J("IsCreating",!1)("DropDownDataSource",n.pointOfSaleValues),e.xp6(4),e.Q6J("IsCreating",!1)("DropDownDataSource",n.talonarios)}}function W(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showChangeTalonarioDialog=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.saveUserTalonario())}),e.qZA()}}function H(l,T){1&l&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function j(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"div",62)(1,"div",69)(2,"div",70)(3,"label",64),e._uU(4,"Usuario: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()()()()(),e.TgZ(7,"div",62)(8,"div",69)(9,"div",70)(10,"label",64),e._uU(11,"Permisos a denegar"),e.qZA(),e.TgZ(12,"p-chips",71),e.NdJ("ngModelChange",function(i){e.CHM(n);const f=e.oxw();return e.KtG(f.userSelectd.permisionDenied=i)}),e.qZA()()()()}if(2&l){const n=e.oxw();e.xp6(6),e.AsE(" ",n.userSelectd.name," ",n.userSelectd.middleName,""),e.xp6(6),e.Q6J("ngModel",n.userSelectd.permisionDenied)}}function z(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showChangeTalonarioDialog=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.saveUserTalonario())}),e.qZA()}}function $(l,T){1&l&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function X(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"div",43)(1,"app-drop-down",72),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const f=e.oxw();return e.KtG(f.filterPermision(i))}),e.qZA()()}if(2&l){const n=e.oxw();e.xp6(1),e.Q6J("showFilter",!0)("IsCreating",!1)("DropDownDataSource",n.permisionDeniedAllowed)}}function ee(l,T){if(1&l){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showDialogEditPermisions=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.savePermisions(i.userSelectd))}),e.qZA()}}const te=function(){return{"min-width":"50rem"}},ne=function(){return[10,25,50]},B=function(){return{width:"1200px"}},F=function(){return{width:"850px"}};let ie=(()=>{class l{constructor(n,a,i,f,v){this.router=n,this.productService=a,this.eventService=i,this.messageService=f,this.cdr=v,this.pointOfSaleId=0,this.talonarioId=0,this.pointOfSaleValues=[],this.talonarios=[],this.showDialog=!1,this.users=[],this.user=new D,this.userSelectd=new D,this.roles=["SuperAdmin","Administrador","Vendedor"],this.showProgressBar=!1,this.showChangeTalonarioDialog=!1,this.permisionDeniedList=[],this.permisionDeniedAllowed=[],this.redirect=!1,this.AccessName="/pages/users"}ngOnInit(){const a=this.eventService.getPermisionsException().split(",").map(i=>i.trim());this.redirect=a.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized"),this.GetPointOfSaleValuesByWareHouse(),this.GetTalonariosByWareHouse(),this.GetDeniedPermisionsAvailable(),this.GetSuppliers()}hideDialog(){this.showDialog=!1}openNew(){this.showDialog=!0}onSubmit(n){this.user.userId=this.eventService.getToken(),n.valid&&this.AddNewUser(this.user)}AsignarTalonario(n){this.userSelectd=n,this.showChangeTalonarioDialog=!0}AddNewUser(n){this.showProgressBar=!0,this.productService.AddNewUser(n).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Success",detail:"El usuario "+n.name+" "+n.middleName+" se ha guardado",life:3e3}),this.showDialog=!1,this.GetSuppliers()):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}GetPointOfSaleValuesByWareHouse(){this.productService.GetPoinOfSaleValues(this.eventService.getToken()).subscribe(n=>{n.data?this.pointOfSaleValues=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}GetTalonariosByWareHouse(){this.productService.GetTalonariosValues(this.eventService.getToken()).subscribe(n=>{n.data?this.talonarios=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}GetDeniedPermisionsAvailable(){this.productService.GetPermisionsDeniedAllowed(this.eventService.getToken()).subscribe(n=>{n.data?this.permisionDeniedAllowed=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}filterTalonario(n){null!=n&&(this.talonarioId=n)}filterPermision(n){console.log(n),"-1"!=n&&(this.permisionDeniedAllowed?.find(i=>i.value===n)&&(this.exceptionsByUser.includes(n)||(this.exceptionsByUser=[...this.exceptionsByUser,n])),this.cdr.detectChanges())}filterPointOfSale(n){null!=n&&(this.pointOfSaleId=n)}saveUserTalonario(){var n=new x;n.pointOfSale=this.pointOfSaleId,n.talonario=this.talonarioId,n.userEmail=null==this.userSelectd.email?"":this.userSelectd.email,n.userId=this.eventService.getToken(),this.showProgressBar=!0,this.productService.AddNewUserTalonario(n).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Success",detail:a.data,life:8e3}),this.showChangeTalonarioDialog=!1):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}GetSuppliers(){this.showProgressBar=!0,this.productService.GetUsersByWareHouse(this.eventService.getToken()).subscribe(n=>{n.data?this.users=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3}),this.showProgressBar=!1})}ViewPermisions(n){this.showDialogEditPermisions=!0,this.userSelectd=n;const i=n.permisionDenied.split(",").map(f=>f.trim());this.exceptionsByUser=[],this.exceptionsByUser=i,this.exceptionsByUser=this.exceptionsByUser.filter(f=>""!==f.trim()&&!f.includes("Permision"))}savePermisions(n){console.log(this.userSelectd),this.showDialogEditPermisions=!1,this.showProgressBar=!0,this.permisionDeniedList=this.exceptionsByUser.map(a=>{const i=new b;return i.name=a,i.id=this.userSelectd.userId,i.description=this.eventService.getToken(),i}),this.productService.AddUserPermisionDenied(this.permisionDeniedList,this.eventService.getToken()).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Exito",detail:a.data,life:3e3}),this.GetSuppliers()):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}static#e=this.\u0275fac=function(a){return new(a||l)(e.Y36(g.F0),e.Y36(h.M),e.Y36(_.P),e.Y36(C.ez),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],features:[e._Bn([C.ez])],decls:86,vars:48,consts:[[4,"ngIf"],[1,"grid"],[1,"col-12"],[1,"card"],["styleClass","mb-4"],["pTemplate","left"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["header","Nuevo Usuario",3,"visible","modal","visibleChange"],[1,"container"],[1,"card","p-fluid"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModel","ngModelChange"],["nameInput","ngModel"],["class","error-message",4,"ngIf"],["for","middleName"],["type","text","id","middleName","name","middleName",3,"ngModel","ngModelChange"],["for","role"],["id","role","name","role","required","",3,"ngModel","ngModelChange"],["roleInput","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","email","id","email","name","email","required","","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",3,"ngModel","ngModelChange"],["emailInput","ngModel"],["for","cellphone"],["type","tel","id","cellphone","name","cellphone",3,"ngModel","ngModelChange"],["for","password"],["type","password","id","password","name","password","required","","minlength","5",3,"ngModel","ngModelChange"],["passwordInput","ngModel"],["type","submit",3,"disabled"],["pTemplate","footer"],["header","Asignar Talonario",3,"visible","modal","visibleChange"],["pTemplate","content"],["header","Ver Permisos Denegados",3,"visible","modal","visibleChange"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"card","p-fluid",2,"max-height","500px","overflow-y","auto"],[1,"field","grid"],["htmlFor","email3",1,"col-12","mb-2","md:col-2","md:mb-0"],[1,"col-12","md:col-10"],["class","col-12 md:col-10",4,"ngIf"],["readonly","true","autocomplete","off","pInputText","","id","email3","type","text","placeholder","Nombre",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"my-2"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pSortableColumn","name",2,"width","20%"],["field","rtn"],["pSortableColumn","middleName",2,"width","20%"],["field","name"],["pSortableColumn","email",2,"width","20%"],["field","middleName"],["pSortableColumn","cellphone",2,"width","20%"],["pSortableColumn","role",2,"width","20%"],["icon","pi pi-box","styleClass","p-button-rounded p-button-help p-button-text",3,"click"],["icon","pi pi-pencil","styleClass","p-button-rounded p-button-success p-button-text",3,"click"],[1,"error-message"],[3,"value"],["pButton","","pRipple","","icon","pi pi-times","label","Cancelar",1,"p-button-text",3,"click"],[1,"field"],[1,"col"],["for","user"],["for","pointOfSale"],[3,"IsCreating","DropDownDataSource","ValueSelectedChange"],["for","talonario"],["pButton","","pRipple","","icon","pi pi-check","label","Guardar",1,"p-button-text",3,"click"],[1,"formgrid","grid"],[1,"field","col"],[2,"margin-left","20px",3,"ngModel","ngModelChange"],[3,"showFilter","IsCreating","DropDownDataSource","ValueSelectedChange"]],template:function(a,i){if(1&a){const f=e.EpF();e.YNc(0,s,2,0,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",3)(5,"p-toolbar",4),e.YNc(6,u,3,0,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6),e.YNc(8,M,18,0,"ng-template",7),e.YNc(9,P,14,5,"ng-template",8),e.qZA()()()()(),e.TgZ(10,"p-dialog",9),e.NdJ("visibleChange",function(c){return i.showDialog=c}),e.YNc(11,I,2,0,"div",0),e.TgZ(12,"div",10)(13,"div",11)(14,"h5"),e._uU(15,"Registro de Usuario"),e.qZA(),e.TgZ(16,"form",12,13),e.NdJ("ngSubmit",function(){e.CHM(f);const c=e.MAs(17);return e.KtG(i.onSubmit(c))}),e.TgZ(18,"div",14)(19,"label",15),e._uU(20,"Nombre:"),e.qZA(),e.TgZ(21,"input",16,17),e.NdJ("ngModelChange",function(c){return i.user.name=c}),e.qZA(),e.YNc(23,V,2,0,"small",18),e.qZA(),e.TgZ(24,"div",14)(25,"label",19),e._uU(26,"Apellido:"),e.qZA(),e.TgZ(27,"input",20),e.NdJ("ngModelChange",function(c){return i.user.middleName=c}),e.qZA()(),e.TgZ(28,"div",14)(29,"label",21),e._uU(30,"Rol:"),e.qZA(),e.TgZ(31,"select",22,23),e.NdJ("ngModelChange",function(c){return i.user.role=c}),e.TgZ(33,"option",24),e._uU(34,"Seleccione un rol"),e.qZA(),e.YNc(35,q,2,2,"option",25),e.qZA(),e.YNc(36,R,2,0,"small",18),e.qZA(),e.TgZ(37,"div",14)(38,"label",26),e._uU(39,"Correo:"),e.qZA(),e.TgZ(40,"input",27,28),e.NdJ("ngModelChange",function(c){return i.user.email=c}),e.qZA(),e.YNc(42,G,2,0,"small",18),e.qZA(),e.TgZ(43,"div",14)(44,"label",29),e._uU(45,"Celular:"),e.qZA(),e.TgZ(46,"input",30),e.NdJ("ngModelChange",function(c){return i.user.cellphone=c}),e.qZA()(),e.TgZ(47,"div",14)(48,"label",31),e._uU(49,"Contrase\xf1a:"),e.qZA(),e.TgZ(50,"input",32,33),e.NdJ("ngModelChange",function(c){return i.user.password=c}),e.qZA(),e.YNc(52,Q,2,0,"small",18),e.qZA(),e.TgZ(53,"button",34),e._uU(54,"Guardar"),e.qZA()()()(),e.YNc(55,Y,1,0,"ng-template",35),e.qZA(),e.TgZ(56,"p-dialog",36),e.NdJ("visibleChange",function(c){return i.showChangeTalonarioDialog=c}),e.YNc(57,K,2,0,"div",0),e.YNc(58,L,18,6,"ng-template",37),e.YNc(59,W,2,0,"ng-template",35),e.qZA(),e.TgZ(60,"p-dialog",38),e.NdJ("visibleChange",function(c){return i.showViewPermisionsDialot=c}),e.YNc(61,H,2,0,"div",0),e.YNc(62,j,13,3,"ng-template",37),e.YNc(63,z,2,0,"ng-template",35),e.qZA(),e.TgZ(64,"p-dialog",39),e.NdJ("visibleChange",function(c){return i.showDialogEditPermisions=c}),e.YNc(65,$,2,0,"div",0),e.TgZ(66,"div",40)(67,"div",11)(68,"div",41),e._UZ(69,"label",42)(70,"div",43),e.qZA(),e.TgZ(71,"div",41)(72,"label",42),e._uU(73,"Seleccione Permiso a Denegar"),e.qZA(),e.YNc(74,X,2,3,"div",44),e.qZA(),e.TgZ(75,"div",41)(76,"label",42),e._uU(77,"Usuario"),e.qZA(),e.TgZ(78,"div",43)(79,"input",45),e.NdJ("ngModelChange",function(c){return i.userSelectd.name=c}),e.qZA()()(),e.TgZ(80,"div",41)(81,"label",42),e._uU(82,"Permisos Denegados"),e.qZA(),e.TgZ(83,"div",43)(84,"p-chips",46),e.NdJ("ngModelChange",function(c){return i.exceptionsByUser=c}),e.qZA()()()()(),e.YNc(85,ee,2,0,"ng-template",35),e.qZA()}if(2&a){const f=e.MAs(17),v=e.MAs(22),c=e.MAs(32),N=e.MAs(41),k=e.MAs(51);e.Q6J("ngIf",i.showProgressBar),e.xp6(7),e.Q6J("value",i.users)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("tableStyle",e.DdM(42,te))("rowsPerPageOptions",e.DdM(43,ne)),e.xp6(3),e.Akn(e.DdM(44,B)),e.Q6J("visible",i.showDialog)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(10),e.Q6J("ngModel",i.user.name),e.xp6(2),e.Q6J("ngIf",v.invalid&&(v.dirty||v.touched)),e.xp6(4),e.Q6J("ngModel",i.user.middleName),e.xp6(4),e.Q6J("ngModel",i.user.role),e.xp6(4),e.Q6J("ngForOf",i.roles),e.xp6(1),e.Q6J("ngIf",c.invalid&&(c.dirty||c.touched)),e.xp6(4),e.Q6J("ngModel",i.user.email),e.xp6(2),e.Q6J("ngIf",N.invalid&&(N.dirty||N.touched)),e.xp6(4),e.Q6J("ngModel",i.user.cellphone),e.xp6(4),e.Q6J("ngModel",i.user.password),e.xp6(2),e.Q6J("ngIf",k.invalid&&(k.dirty||k.touched)),e.xp6(1),e.Q6J("disabled",f.invalid),e.xp6(3),e.Akn(e.DdM(45,F)),e.Q6J("visible",i.showChangeTalonarioDialog)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(3),e.Akn(e.DdM(46,F)),e.Q6J("visible",i.showViewPermisionsDialot)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(3),e.Akn(e.DdM(47,B)),e.Q6J("visible",i.showDialogEditPermisions)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(9),e.Q6J("ngIf",!i.showProgressBar),e.xp6(5),e.Q6J("ngModel",i.userSelectd.name),e.xp6(5),e.Q6J("ngModel",i.exceptionsByUser)}},dependencies:[t.sg,t.O5,p.iA,C.jx,p.lQ,p.fz,w.FN,m.o,S.Hq,S.zx,J.V,E.o,A._Y,A.YN,A.Kr,A.Fj,A.EJ,A.JJ,A.JL,A.Q7,A.wO,A.c5,A.On,A.F,d.R,Z.t,o.cL],styles:['[_nghost-%COMP%] {\n    --primary-color: #023b78;\n    --secondary-color: #1565bb;\n    --background-color: #f0f8ff;\n    --text-color: #333;\n    --border-color: #ccc;\n    --error-color: #dc3545;\n    --success-color: #28a745;\n    \n    font-family: \'Arial\', sans-serif;\n    color: var(--text-color);\n    background-color: var(--background-color);\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    color: var(--primary-color);\n    margin-bottom: 20px;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n\n  input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    font-size: 16px;\n  }\n\n  input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: var(--secondary-color);\n    box-shadow: 0 0 0 2px rgba(21, 101, 187, 0.25);\n  }\n\n  .error-message[_ngcontent-%COMP%] {\n    color: var(--error-color);\n    font-size: 14px;\n    margin-top: 5px;\n  }\n\n  button[type="submit"][_ngcontent-%COMP%] {\n    background-color: var(--primary-color);\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n  }\n\n  button[type="submit"][_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: var(--secondary-color);\n  }\n\n  button[type="submit"][_ngcontent-%COMP%]:disabled {\n    background-color: var(--border-color);\n    cursor: not-allowed;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n\n  .col[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px;\n    min-width: 200px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    color: var(--primary-color);\n  }\n\n  strong[_ngcontent-%COMP%] {\n    color: var(--secondary-color);\n  }\n\n  app-drop-down[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n    \nlabel[_ngcontent-%COMP%] {\n  color: #6b6d6e;\n  font-weight: bold;\n}\n\n\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-bottom: 20px;\n  width: 100%;\n}\ninput[type="text"][_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\ninput[type="password"][_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\nbutton[type="submit"][_ngcontent-%COMP%] {\n  background-color: #0077c9;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n}\n\n\nbutton[type="submit"][disabled][_ngcontent-%COMP%] {\n  background-color: #ccc;\n  cursor: not-allowed;\n}']})}return l})(),oe=(()=>{class l{static#e=this.\u0275fac=function(a){return new(a||l)};static#t=this.\u0275mod=e.oAB({type:l});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:ie,canActivate:[U.j]}]),g.Bz]})}return l})();var se=r(4891),le=r(7147);let re=(()=>{class l{static#e=this.\u0275fac=function(a){return new(a||l)};static#t=this.\u0275mod=e.oAB({type:l});static#n=this.\u0275inj=e.cJS({imports:[t.ez,oe,p.U$,w.EV,m.V,S.hJ,J.S,E.j,A.u5,se.E,le.o,o.Gg]})}return l})()},6768:(O,y,r)=>{r.d(y,{t:()=>x});var t=r(4650),g=r(7747),U=r(5384),C=r(4006),D=r(2210);let x=(()=>{class b{constructor(h,_){this.commonService=h,this.eventService=_,this.ValueSelectedChange=new t.vpe,this.categorys=[],this.Filter=!1}ngOnInit(){this.data=this.DropDownDataSource,this.Filter=this.showFilter}changeValue(){this.ValueSelected=this.selectedData?.value,this.ValueSelectedChange.emit(this.ValueSelected)}selectedValue(){this.ValueSelected=this.selectedData?.value,this.ValueSelectedChange.emit(this.ValueSelected)}static#e=this.\u0275fac=function(_){return new(_||b)(t.Y36(g.M),t.Y36(U.P))};static#t=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-drop-down"]],inputs:{ValueSelected:"ValueSelected",IsCreating:"IsCreating",showFilter:"showFilter",DropDownDataSource:"DropDownDataSource"},outputs:{ValueSelectedChange:"ValueSelectedChange"},decls:1,vars:3,consts:[["optionLabel","viewValue",3,"filter","options","ngModel","onClick","onChange","ngModelChange"]],template:function(_,p){1&_&&(t.TgZ(0,"p-dropdown",0),t.NdJ("onClick",function(){return p.selectedValue()})("onChange",function(){return p.changeValue()})("ngModelChange",function(m){return p.selectedData=m}),t.qZA()),2&_&&t.Q6J("filter",p.Filter)("options",p.data)("ngModel",p.selectedData)},dependencies:[C.JJ,C.On,D.Lt],encapsulation:2})}return b})()},2384:(O,y,r)=>{r.d(y,{b:()=>t});class t{}},7116:(O,y,r)=>{r.d(y,{R:()=>U});var t=r(4650),g=r(3162);let U=(()=>{class C{constructor(){}static#e=this.\u0275fac=function(b){return new(b||C)};static#t=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(b,e){1&b&&t._UZ(0,"mat-progress-bar",0)},dependencies:[g.pW],encapsulation:2})}return C})()},7083:(O,y,r)=>{r.d(y,{K:()=>x});var t=r(529),g=r(2340),U=r(2384),C=r(4650);const D=g.N.baseUrl;let x=(()=>{class b{constructor(h){this.http=h}addUser(h){return this.http.post(`${D}auth/register`,h)}login(h,_){var p=new U.b;return p.email=h,p.password=_,this.http.post(`${D}auth/login`,p)}GetUserPermisions(){const w={headers:new t.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",w)}static#e=this.\u0275fac=function(_){return new(_||b)(C.LFG(t.eN))};static#t=this.\u0275prov=C.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"})}return b})()},1546:(O,y,r)=>{r.d(y,{j:()=>D});var t=r(4650),g=r(5384),U=r(9197),C=r(7083);let D=(()=>{class x{constructor(e,h,_){this.eventService=e,this.router=h,this._userService=_,this.isTokenValid=!1}canActivate(e,h){const _=this.eventService.getToken();return(""==_||null==_||null==_)&&this.router.navigateByUrl("/auth/login"),!0}static#e=this.\u0275fac=function(h){return new(h||x)(t.LFG(g.P),t.LFG(U.F0),t.LFG(C.K))};static#t=this.\u0275prov=t.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"})}return x})()},9766:(O,y,r)=>{r.d(y,{Gg:()=>A,cL:()=>E});var t=r(4650),g=r(6895),U=r(805),C=r(1740),D=r(4006);const x=["inputtext"];function b(d,Z){1&d&&t.GkF(0)}function e(d,Z){if(1&d&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&d){const o=t.oxw().$implicit,s=t.oxw();t.xp6(1),t.Oqu(s.field?s.resolveFieldData(o,s.field):o)}}function h(d,Z){if(1&d){const o=t.EpF();t.TgZ(0,"span",13),t.NdJ("click",function(u){t.CHM(o);const M=t.oxw().index,P=t.oxw();return t.KtG(P.removeItem(u,M))}),t.qZA()}}const _=function(d){return{$implicit:d}};function p(d,Z){if(1&d){const o=t.EpF();t.TgZ(0,"li",7,8),t.NdJ("click",function(u){const P=t.CHM(o).$implicit,I=t.oxw();return t.KtG(I.onItemClick(u,P))}),t.YNc(2,b,1,0,"ng-container",9),t.YNc(3,e,2,1,"span",10),t.YNc(4,h,1,0,"span",11),t.qZA()}if(2&d){const o=Z.$implicit,s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.itemTemplate)("ngTemplateOutletContext",t.VKq(4,_,o)),t.xp6(1),t.Q6J("ngIf",!s.itemTemplate),t.xp6(1),t.Q6J("ngIf",!s.disabled)}}function w(d,Z){if(1&d){const o=t.EpF();t.TgZ(0,"i",14),t.NdJ("click",function(){t.CHM(o);const u=t.oxw();return t.KtG(u.clear())}),t.qZA()}}const m=function(d,Z){return{"p-inputtext p-chips-multiple-container":!0,"p-focus":d,"p-disabled":Z}},S=function(d){return{"p-chips-clearable":d}},J={provide:D.JU,useExisting:(0,t.Gpc)(()=>E),multi:!0};let E=(()=>{class d{constructor(o,s){this.el=o,this.cd=s,this.allowDuplicate=!0,this.showClear=!1,this.onAdd=new t.vpe,this.onRemove=new t.vpe,this.onFocus=new t.vpe,this.onBlur=new t.vpe,this.onChipClick=new t.vpe,this.onClear=new t.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(o=>{o.getType(),this.itemTemplate=o.template}),this.updateFilledState()}onClick(){this.inputViewChild.nativeElement.focus()}onInput(){this.updateFilledState()}onPaste(o){this.disabled||(this.separator&&((o.clipboardData||window.clipboardData).getData("Text").split(this.separator).forEach(u=>{this.addItem(o,u,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){this.filled=!(!this.value||0===this.value.length)||this.inputViewChild&&this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}onItemClick(o,s){this.onChipClick.emit({originalEvent:o,value:s})}writeValue(o){this.value=o,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}resolveFieldData(o,s){if(o&&s){if(-1==s.indexOf("."))return o[s];{let P=s.split("."),I=o;for(var u=0,M=P.length;u<M;++u)I=I[P[u]];return I}}return null}onInputFocus(o){this.focus=!0,this.onFocus.emit(o)}onInputBlur(o){this.focus=!1,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(o,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(o)}removeItem(o,s){if(this.disabled)return;let u=this.value[s];this.value=this.value.filter((M,P)=>P!=s),this.onModelChange(this.value),this.onRemove.emit({originalEvent:o,value:u}),this.updateFilledState(),this.updateMaxedOut()}addItem(o,s,u){this.value=this.value||[],s&&s.trim().length&&(this.allowDuplicate||-1===this.value.indexOf(s))&&(this.value=[...this.value,s],this.onModelChange(this.value),this.onAdd.emit({originalEvent:o,value:s})),this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",u&&o.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.onClear.emit()}onKeydown(o){switch(o.which){case 8:if(0===this.inputViewChild.nativeElement.value.length&&this.value&&this.value.length>0){this.value=[...this.value];let s=this.value.pop();this.onModelChange(this.value),this.onRemove.emit({originalEvent:o,value:s}),this.updateFilledState()}break;case 13:this.addItem(o,this.inputViewChild.nativeElement.value,!0);break;case 9:this.addOnTab&&""!==this.inputViewChild.nativeElement.value&&this.addItem(o,this.inputViewChild.nativeElement.value,!0);break;default:this.max&&this.value&&this.max===this.value.length?o.preventDefault():this.separator&&","===this.separator&&188===o.which&&this.addItem(o,this.inputViewChild.nativeElement.value,!0)}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.disabled=!(!this.max||!this.value||this.max!==this.value.length)||this.disabled||!1)}}return d.\u0275fac=function(o){return new(o||d)(t.Y36(t.SBq),t.Y36(t.sBO))},d.\u0275cmp=t.Xpm({type:d,selectors:[["p-chips"]],contentQueries:function(o,s,u){if(1&o&&t.Suo(u,U.jx,4),2&o){let M;t.iGM(M=t.CRH())&&(s.templates=M)}},viewQuery:function(o,s){if(1&o&&t.Gf(x,5),2&o){let u;t.iGM(u=t.CRH())&&(s.inputViewChild=u.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(o,s){2&o&&t.ekj("p-inputwrapper-filled",s.filled)("p-inputwrapper-focus",s.focus)("p-chips-clearable",s.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:"disabled",field:"field",placeholder:"placeholder",max:"max",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",allowDuplicate:"allowDuplicate",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",addOnTab:"addOnTab",addOnBlur:"addOnBlur",separator:"separator",showClear:"showClear"},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onClear:"onClear"},features:[t._Bn([J])],decls:8,vars:21,consts:[[3,"ngClass","ngStyle","click"],[3,"ngClass"],["class","p-chips-token",3,"click",4,"ngFor","ngForOf"],[1,"p-chips-input-token",3,"ngClass"],["type","text",3,"disabled","ngStyle","keydown","input","paste","focus","blur"],["inputtext",""],["class","p-chips-clear-icon pi pi-times",3,"click",4,"ngIf"],[1,"p-chips-token",3,"click"],["token",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-chips-token-label",4,"ngIf"],["class","p-chips-token-icon pi pi-times-circle",3,"click",4,"ngIf"],[1,"p-chips-token-label"],[1,"p-chips-token-icon","pi","pi-times-circle",3,"click"],[1,"p-chips-clear-icon","pi","pi-times",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return s.onClick()}),t.TgZ(1,"ul",1),t.YNc(2,p,5,6,"li",2),t.TgZ(3,"li",3)(4,"input",4,5),t.NdJ("keydown",function(M){return s.onKeydown(M)})("input",function(){return s.onInput()})("paste",function(M){return s.onPaste(M)})("focus",function(M){return s.onInputFocus(M)})("blur",function(M){return s.onInputBlur(M)}),t.qZA()(),t.TgZ(6,"li"),t.YNc(7,w,1,0,"i",6),t.qZA()()()),2&o&&(t.Tol(s.styleClass),t.Q6J("ngClass","p-chips p-component")("ngStyle",s.style),t.xp6(1),t.Q6J("ngClass",t.WLB(16,m,s.focus,s.disabled)),t.xp6(1),t.Q6J("ngForOf",s.value),t.xp6(1),t.Q6J("ngClass",t.VKq(19,S,s.showClear&&!s.disabled)),t.xp6(1),t.Tol(s.inputStyleClass),t.Q6J("disabled",s.disabled)("ngStyle",s.inputStyle),t.uIk("id",s.inputId)("placeholder",s.value&&s.value.length?null:s.placeholder)("tabindex",s.tabindex)("aria-labelledby",s.ariaLabelledBy),t.xp6(3),t.Q6J("ngIf",null!=s.value&&s.filled&&!s.disabled&&s.showClear))},dependencies:[g.mk,g.sg,g.O5,g.tP,g.PC],styles:[".p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}\n"],encapsulation:2,changeDetection:0}),d})(),A=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[g.ez,C.j,U.m8,C.j,U.m8]}),d})()},1383:(O,y,r)=>{r.d(y,{V:()=>_,o:()=>h});var t=r(4650),g=r(6895),U=r(805);function C(p,w){1&p&&t.GkF(0)}function D(p,w){if(1&p&&(t.TgZ(0,"div",3),t.YNc(1,C,1,0,"ng-container",4),t.qZA()),2&p){const m=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",m.leftTemplate)}}function x(p,w){1&p&&t.GkF(0)}function b(p,w){if(1&p&&(t.TgZ(0,"div",5),t.YNc(1,x,1,0,"ng-container",4),t.qZA()),2&p){const m=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",m.rightTemplate)}}const e=["*"];let h=(()=>{class p{constructor(m){this.el=m}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(m=>{switch(m.getType()){case"left":this.leftTemplate=m.template;break;case"right":this.rightTemplate=m.template}})}}return p.\u0275fac=function(m){return new(m||p)(t.Y36(t.SBq))},p.\u0275cmp=t.Xpm({type:p,selectors:[["p-toolbar"]],contentQueries:function(m,S,J){if(1&m&&t.Suo(J,U.jx,4),2&m){let E;t.iGM(E=t.CRH())&&(S.templates=E)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:e,decls:4,vars:6,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left",4,"ngIf"],["class","p-toolbar-group-right",4,"ngIf"],[1,"p-toolbar-group-left"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-right"]],template:function(m,S){1&m&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,D,2,1,"div",1),t.YNc(3,b,2,1,"div",2),t.qZA()),2&m&&(t.Tol(S.styleClass),t.Q6J("ngClass","p-toolbar p-component")("ngStyle",S.style),t.xp6(2),t.Q6J("ngIf",S.leftTemplate),t.xp6(1),t.Q6J("ngIf",S.rightTemplate))},dependencies:[g.mk,g.O5,g.tP,g.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0}),p})(),_=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[g.ez]}),p})()}}]);