"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[464],{464:(I,v,r)=>{r.r(v),r.d(v,{InventoryModule:()=>K});var c=r(9808),m=r(5077),h=r(1546),_=r(9783);class y{}var e=r(5e3),g=r(7747),l=r(5384),u=r(5315),p=r(7010),d=r(3075),C=r(845),b=r(7116),A=r(6768),Z=r(7773),x=r(3407);function M(t,s){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function J(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div",24)(1,"label",25),e._uU(2,"Productos "),e.qZA(),e._UZ(3,"label",25),e.TgZ(4,"app-drop-down",26),e.NdJ("ValueSelectedChange",function(o){e.CHM(n);const a=e.oxw(2);return e.KtG(a.filterProduct(o))}),e.qZA()()}if(2&t){const n=e.oxw(2);e.xp6(4),e.Q6J("IsCreating",!1)("DropDownDataSource",n.products)}}function N(t,s){1&t&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Cargando los productos, espere..."),e.qZA()())}function S(t,s){if(1&t){const n=e.EpF();e.YNc(0,J,5,2,"div",16),e.YNc(1,N,3,0,"div",0),e.TgZ(2,"div",17)(3,"div",18)(4,"label",19),e._uU(5,"Precio de Compra"),e.qZA(),e.TgZ(6,"p-inputNumber",20),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.buyCost=o)}),e.qZA()(),e.TgZ(7,"div",18)(8,"label",21),e._uU(9,"Cantidad"),e.qZA(),e.TgZ(10,"p-inputNumber",22),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.quantity=o)}),e.qZA()()(),e.TgZ(11,"div",17)(12,"div",18)(13,"label",23),e._uU(14,"Precio de Venta"),e.qZA(),e.TgZ(15,"p-inputNumber",20),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.priceSale=o)}),e.qZA()()()}if(2&t){const n=e.oxw();e.Q6J("ngIf",!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.buyCost),e.xp6(4),e.Q6J("ngModel",n.inventoryTransaccion.quantity),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.priceSale)}}function D(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.hideDialog())}),e.qZA(),e.TgZ(1,"button",28),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.postTransaccion(o.inventoryTransaccion))}),e.qZA()}}function w(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div",24)(1,"label",25),e._uU(2,"Productos "),e.qZA(),e._UZ(3,"label",25),e.TgZ(4,"app-drop-down",26),e.NdJ("ValueSelectedChange",function(o){e.CHM(n);const a=e.oxw(2);return e.KtG(a.filterProduct(o))}),e.qZA()()}if(2&t){const n=e.oxw(2);e.xp6(4),e.Q6J("IsCreating",!1)("DropDownDataSource",n.products)}}function q(t,s){1&t&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Cargando los productos, espere..."),e.qZA()())}function U(t,s){if(1&t){const n=e.EpF();e.YNc(0,w,5,2,"div",16),e.YNc(1,q,3,0,"div",0),e.TgZ(2,"div",17)(3,"div",18)(4,"label",19),e._uU(5,"Costo individual"),e.qZA(),e.TgZ(6,"p-inputNumber",20),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.buyCost=o)}),e.qZA()(),e.TgZ(7,"div",18)(8,"label",21),e._uU(9,"Cantidad"),e.qZA(),e.TgZ(10,"p-inputNumber",22),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.quantity=o)}),e.qZA()()(),e.TgZ(11,"div",17)(12,"div",18)(13,"label",23),e._uU(14,"Descripci\xf3n"),e.qZA(),e.TgZ(15,"textarea",29),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.description=o)}),e.qZA()()()}if(2&t){const n=e.oxw();e.Q6J("ngIf",!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.buyCost),e.xp6(4),e.Q6J("ngModel",n.inventoryTransaccion.quantity),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.description)}}function R(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.hideDialog())}),e.qZA(),e.TgZ(1,"button",28),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.postTransaccion(o.inventoryTransaccion))}),e.qZA()}}function E(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div",24)(1,"label",25),e._uU(2,"Productos "),e.qZA(),e._UZ(3,"label",25),e.TgZ(4,"app-drop-down",26),e.NdJ("ValueSelectedChange",function(o){e.CHM(n);const a=e.oxw(2);return e.KtG(a.filterProduct(o))}),e.qZA()()}if(2&t){const n=e.oxw(2);e.xp6(4),e.Q6J("IsCreating",!1)("DropDownDataSource",n.products)}}function H(t,s){1&t&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Cargando los productos, espere..."),e.qZA()())}function B(t,s){if(1&t){const n=e.EpF();e.YNc(0,E,5,2,"div",16),e.YNc(1,H,3,0,"div",0),e.TgZ(2,"div",17)(3,"div",18)(4,"label",19),e._uU(5,"Costo individual"),e.qZA(),e.TgZ(6,"p-inputNumber",20),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.buyCost=o)}),e.qZA()(),e.TgZ(7,"div",18)(8,"label",21),e._uU(9,"Cantidad"),e.qZA(),e.TgZ(10,"p-inputNumber",22),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.quantity=o)}),e.qZA()()(),e.TgZ(11,"div",17)(12,"div",18)(13,"label",23),e._uU(14,"Descripci\xf3n"),e.qZA(),e.TgZ(15,"textarea",29),e.NdJ("ngModelChange",function(o){e.CHM(n);const a=e.oxw();return e.KtG(a.inventoryTransaccion.description=o)}),e.qZA()()()}if(2&t){const n=e.oxw();e.Q6J("ngIf",!n.isLoading),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.buyCost),e.xp6(4),e.Q6J("ngModel",n.inventoryTransaccion.quantity),e.xp6(5),e.Q6J("ngModel",n.inventoryTransaccion.description)}}function Q(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.hideDialog())}),e.qZA(),e.TgZ(1,"button",28),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.postTransaccion(o.inventoryTransaccion))}),e.qZA()}}const T=function(){return{width:"2.5rem",height:"2.5rem"}},f=function(){return{width:"650px"}};let F=(()=>{class t{constructor(n,i,o){this.productService=n,this.eventService=i,this.messageService=o,this.showBuyDialog=!1,this.showAddDialog=!1,this.showReduceDialog=!1,this.inventoryTransaccion=new y,this.isLoading=!1,this.getProductValues()}setInventaryTransaction(n){"Buy"==n?(this.transaccionInventaryType="Buy",this.showBuyDialog=!0):"AdjustmentAdd"==n?(this.transaccionInventaryType="AdjustmentAdd",this.showAddDialog=!0):"AdjustmentReduce"==n&&(this.transaccionInventaryType="AdjustmentReduce",this.showReduceDialog=!0)}hideDialog(){this.transaccionInventaryType="",this.showBuyDialog=!1,this.showAddDialog=!1,this.showReduceDialog=!1}getProductValues(){this.isLoading=!0,this.productService.GetProductsValues(this.eventService.getToken()).subscribe(n=>{n.data&&(this.products=n.data),this.isLoading=!1})}filterProduct(n){this.inventoryTransaccion.productId=n}postTransaccion(n){this.isLoading=!0,this.inventoryTransaccion.productId=null==this.inventoryTransaccion.productId?0:this.inventoryTransaccion.productId,this.inventoryTransaccion.buyCost=null==n.buyCost?0:n.buyCost,this.inventoryTransaccion.priceSale=null==n.priceSale?0:n.priceSale,this.inventoryTransaccion.quantity=null==n.quantity?0:n.quantity,this.inventoryTransaccion.transaccionType=null==this.transaccionInventaryType?"":this.transaccionInventaryType,this.inventoryTransaccion.wareHouse=0,this.inventoryTransaccion.description=null==n.description?"":n.description,this.inventoryTransaccion.userId=this.eventService.getToken(),this.hideDialog(),this.productService.AddProductTransaccion(this.inventoryTransaccion).subscribe(i=>{this.messageService.add(i.data?{severity:"success",summary:"Success",detail:"Se ha guardado de forma correcta",life:3e3}:{severity:"error",summary:"error",detail:i.message,life:3e3}),this.isLoading=!1})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.M),e.Y36(l.P),e.Y36(_.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([_.ez])],decls:45,vars:22,consts:[[4,"ngIf"],[1,"grid"],[1,"col-12","lg:col-6","xl:col-3",3,"click"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-plus-circle","text-green-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"pi","pi-minus-circle","text-red-500","text-xl"],["header","Agregar Inventario",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Ajuste de inventario: Agregar",1,"p-fluid",3,"visible","modal","visibleChange"],["header","Ajuste de inventario: Rebajar",1,"p-fluid",3,"visible","modal","visibleChange"],["class","field",4,"ngIf"],[1,"formgrid","grid"],[1,"field","col"],["for","price"],["id","price","mode","currency","currency","LPS","locale","en-US",3,"ngModel","ngModelChange"],["for","quantity"],["id","quantity",3,"ngModel","ngModelChange"],["for","productPrice"],[1,"field"],["for","status"],[3,"IsCreating","DropDownDataSource","ValueSelectedChange"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(e.YNc(0,M,2,0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1)(3,"div",2),e.NdJ("click",function(){return i.setInventaryTransaction("Buy")}),e.TgZ(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),e._uU(8,"Compras"),e.qZA()(),e.TgZ(9,"div",6),e._UZ(10,"i",7),e.qZA()(),e.TgZ(11,"span",8),e._uU(12,"Agregar"),e.qZA(),e._UZ(13,"span",9),e.qZA()(),e.TgZ(14,"div",2),e.NdJ("click",function(){return i.setInventaryTransaction("AdjustmentAdd")}),e.TgZ(15,"div",3)(16,"div",4)(17,"div")(18,"span",5),e._uU(19,"Ajuste:Agregar"),e.qZA()(),e.TgZ(20,"div",6),e._UZ(21,"i",7),e.qZA()(),e.TgZ(22,"span",8),e._uU(23,"Agregar"),e.qZA(),e._UZ(24,"span",9),e.qZA()(),e.TgZ(25,"div",2),e.NdJ("click",function(){return i.setInventaryTransaction("AdjustmentReduce")}),e.TgZ(26,"div",3)(27,"div",4)(28,"div")(29,"span",5),e._uU(30,"Ajuste:Reducir"),e.qZA()(),e.TgZ(31,"div",6),e._UZ(32,"i",10),e.qZA()(),e.TgZ(33,"span",8),e._uU(34,"Reducir"),e.qZA(),e._UZ(35,"span",9),e.qZA()()(),e.TgZ(36,"p-dialog",11),e.NdJ("visibleChange",function(a){return i.showBuyDialog=a}),e.YNc(37,S,16,5,"ng-template",12),e.YNc(38,D,2,0,"ng-template",13),e.qZA(),e.TgZ(39,"p-dialog",14),e.NdJ("visibleChange",function(a){return i.showAddDialog=a}),e.YNc(40,U,16,5,"ng-template",12),e.YNc(41,R,2,0,"ng-template",13),e.qZA(),e.TgZ(42,"p-dialog",15),e.NdJ("visibleChange",function(a){return i.showReduceDialog=a}),e.YNc(43,B,16,5,"ng-template",12),e.YNc(44,Q,2,0,"ng-template",13),e.qZA()),2&n&&(e.Q6J("ngIf",i.isLoading),e.xp6(9),e.Q6J("ngStyle",e.DdM(16,T)),e.xp6(11),e.Q6J("ngStyle",e.DdM(17,T)),e.xp6(11),e.Q6J("ngStyle",e.DdM(18,T)),e.xp6(5),e.Akn(e.DdM(19,f)),e.Q6J("visible",i.showBuyDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(20,f)),e.Q6J("visible",i.showAddDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(21,f)),e.Q6J("visible",i.showReduceDialog)("modal",!0))},dependencies:[c.O5,c.PC,u.V,_.jx,p.Rn,d.Fj,d.JJ,d.Q7,d.On,C.Hq,b.R,A.t,Z.FN,x.g],styles:["div[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}"]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:F,canActivate:[h.j]}]),m.Bz]}),t})();var z=r(4891);let K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,P,u.S,p.L$,d.u5,C.hJ,z.E,Z.EV,x.A]}),t})()},3407:(I,v,r)=>{r.d(v,{A:()=>y,g:()=>_});var c=r(5e3),m=r(9808),h=r(3075);let _=(()=>{class e{constructor(l,u,p,d){this.el=l,this.ngModel=u,this.control=p,this.cd=d,this.onResize=new c.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(l){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(l){this.autoResize&&this.resize(l)}onBlur(l){this.autoResize&&this.resize(l)}resize(l){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(l||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return e.\u0275fac=function(l){return new(l||e)(c.Y36(c.SBq),c.Y36(h.On,8),c.Y36(h.a5,8),c.Y36(c.sBO))},e.\u0275dir=c.lG2({type:e,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(l,u){1&l&&c.NdJ("input",function(d){return u.onInput(d)})("focus",function(d){return u.onFocus(d)})("blur",function(d){return u.onBlur(d)}),2&l&&c.ekj("p-filled",u.filled)("p-inputtextarea-resizable",u.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),e})(),y=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[m.ez]}),e})()}}]);