"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[7370],{7370:(v,m,t)=>{t.r(m),t.d(m,{RegisterModule:()=>N});var l=t(6895),d=t(5593),c=t(1989),s=t(4006),h=t(3425),u=t(1740),a=t(9197),P=t(2384),e=t(4650),p=t(8568),g=t(7083),I=t(5384),Z=t(7116);function b(r,f){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function x(r,f){1&r&&(e.TgZ(0,"p")(1,"FONT",21),e._uU(2,"Debe ingresar un nombre valido!!! "),e.qZA()())}function C(r,f){1&r&&(e.TgZ(0,"p")(1,"FONT",21),e._uU(2,"Debe ingresar un Apellido valido!!! "),e.qZA()())}function U(r,f){1&r&&(e.TgZ(0,"p")(1,"FONT",21),e._uU(2,"Debe ingresar un correo valido!!! "),e.qZA()())}function y(r,f){if(1&r&&(e.TgZ(0,"p")(1,"FONT",21),e._uU(2),e.qZA()()),2&r){const o=e.oxw();e.xp6(2),e.hij(" Posteado",o.formPosted," ")}}function R(r,f){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}let M=(()=>{class r{constructor(o,i,n,T,O){this.layoutService=o,this.fb=i,this.userService=n,this.eventService=T,this.router=O,this.registerForm=this.fb.group({names:["",[s.kI.required,s.kI.minLength(3)]],middleName:["",[s.kI.required,s.kI.minLength(3)]],email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required]]}),this.valCheck=["remember"],this.formSend=!1,this.formPosted=!1,this.formPostedMessge="",this.isLoading=!1,this.showProgressBar=!1}validatePassword(){const o=this.registerForm.get("password")?.value,i=this.registerForm.get("password")?.value;return o!=i&&1==this.formSend}validate(o){return this.formPostedMessge="",this.formPosted=!1,!(!this.registerForm.get(o)?.invalid||1!=this.formSend)}showError(){return!!this.formPosted}test(){this.userService.GetUserPermisions().subscribe(o=>{o.data||(this.formPostedMessge=o.message)})}addUser(){if(!this.isLoading&&(this.formSend=!0,this.formPosted=!0,this.isLoading=!0,this.formPostedMessge="Posteado",this.showProgressBar=!0,this.registerForm.valid&&!this.validatePassword())){var o=new P.b;o.name=this.registerForm.get("names")?.value,o.middleName=this.registerForm.get("middleName")?.value,o.cellPhone="",o.email=this.registerForm.get("email")?.value,o.password=this.registerForm.get("password")?.value,this.userService.addUser(o).subscribe(i=>{i.data?(this.eventService.setToken(i.data.token),this.eventService.setHasEnterprise(i.data.hasEnterprise),this.eventService.setHasWareHouse(i.data.hasWareHouse),this.eventService.setHasPointOfSale(i.data.hasPointOfSale),this.eventService.setHasCorrelative(i.data.hasCorrelative),this.router.navigateByUrl("/")):(this.formPostedMessge=i.message,alert(i.message)),this.isLoading=!1,this.showProgressBar=!1},i=>{this.isLoading=!1,this.showProgressBar=!1,alert(i)})}}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(p.P),e.Y36(s.qu),e.Y36(g.K),e.Y36(I.P),e.Y36(a.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:37,vars:9,consts:[[4,"ngIf"],[1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],[1,"surface-0","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"grid","justify-content-center","p-2","lg:p-0",2,"min-width","80%"],[1,"col-12","mt-5","xl:mt-0","text-center"],["alt","Sakai logo",1,"mb-5",2,"width","81px","height","60px",3,"src"],[1,"col-12","xl:col-6",2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"h-full","w-full","m-0","py-7","px-4",2,"border-radius","53px","background","linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],["routerLink","/auth/login"],[1,"w-full","md:w-10","mx-auto"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["matInput","","pInputText","","placeholder","Nombre","type","text","formControlName","names",1,"w-full","mb-3",2,"padding","1rem"],["matInput","","pInputText","","placeholder","Apellido","type","text","formControlName","middleName",1,"w-full","mb-3",2,"padding","1rem"],["matInput","","pInputText","","placeholder","Correo","type","text","formControlName","email",1,"w-full","mb-3",2,"padding","1rem"],["id","password1","matInput","","formControlName","password","placeholder","Password","styleClass","w-full mb-3",3,"toggleMask"],[1,"row"],[1,"col","tex-danger"],["type","submit","pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl"],["routerLink","/landing"],["COLOR","red"]],template:function(i,n){1&i&&(e.YNc(0,b,2,0,"div",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return n.addUser()}),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),e._uU(10,"Registrarse"),e.qZA(),e.TgZ(11,"a",10),e._uU(12,"Tambi\xe9n puedes probar el plan gratis sin registrarte haciendo click en este enlace"),e.qZA()(),e.TgZ(13,"div",11)(14,"label",12),e._uU(15,"Nombre"),e.qZA(),e._UZ(16,"input",13),e.TgZ(17,"label",12),e._uU(18,"Apellido"),e.qZA(),e._UZ(19,"input",14),e.TgZ(20,"label",12),e._uU(21,"Correo"),e.qZA(),e._UZ(22,"input",15),e.TgZ(23,"label",12),e._uU(24,"Contrase\xf1a"),e.qZA(),e._UZ(25,"p-password",16),e.TgZ(26,"div",17)(27,"div",18),e.YNc(28,x,3,0,"p",0),e.YNc(29,C,3,0,"p",0),e.YNc(30,U,3,0,"p",0),e.qZA(),e.TgZ(31,"div"),e.YNc(32,y,3,1,"p",0),e.qZA()(),e._UZ(33,"button",19),e.YNc(34,R,2,0,"div",0),e.TgZ(35,"a",20),e._uU(36,"Regresar"),e.qZA()()()()()()()),2&i&&(e.Q6J("ngIf",n.showProgressBar),e.xp6(1),e.Q6J("formGroup",n.registerForm),e.xp6(4),e.MGl("src","assets/layout/images/","light"===n.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(20),e.Q6J("toggleMask",!0),e.xp6(3),e.Q6J("ngIf",n.validate("names")),e.xp6(1),e.Q6J("ngIf",n.validate("middleName")),e.xp6(1),e.Q6J("ngIf",n.validate("email")),e.xp6(2),e.Q6J("ngIf",n.formPosted),e.xp6(2),e.Q6J("ngIf",n.showProgressBar))},dependencies:[l.O5,a.rH,d.Hq,u.o,s._Y,s.Fj,s.JJ,s.JL,h.ro,s.sg,s.u,Z.R],styles:["[_nghost-%COMP%]     .p-password input{width:100%;padding:1rem}[_nghost-%COMP%]     .pi-eye{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}[_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return r})(),w=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:M}]),a.Bz]})}return r})();var A=t(529),F=t(4891);let N=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[l.ez,w,d.hJ,c.nD,u.j,s.u5,h.gz,s.UX,A.JF,F.E]})}return r})()},2384:(v,m,t)=>{t.d(m,{b:()=>l});class l{}},7116:(v,m,t)=>{t.d(m,{R:()=>c});var l=t(4650),d=t(3162);let c=(()=>{class s{constructor(){}static#e=this.\u0275fac=function(a){return new(a||s)};static#t=this.\u0275cmp=l.Xpm({type:s,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(a,P){1&a&&l._UZ(0,"mat-progress-bar",0)},dependencies:[d.pW],encapsulation:2})}return s})()},7083:(v,m,t)=>{t.d(m,{K:()=>u});var l=t(529),d=t(2340),c=t(2384),s=t(4650);const h=d.N.baseUrl;let u=(()=>{class a{constructor(e){this.http=e}addUser(e){return this.http.post(`${h}auth/register`,e)}login(e,p){var g=new c.b;return g.email=e,g.password=p,this.http.post(`${h}auth/login`,g)}GetUserPermisions(){const I={headers:new l.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",I)}static#e=this.\u0275fac=function(p){return new(p||a)(s.LFG(l.eN))};static#t=this.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);