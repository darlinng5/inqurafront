"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[4106],{4106:(M,Z,r)=>{r.r(Z),r.d(Z,{LandingModule:()=>n});var t=r(9808),p=r(5077),c=r(9783);class m{}var e=r(5e3),g=r(8568),T=r(7747),U=r(5384),_=r(7376),b=r(3986),v=r(845),f=r(3787),h=r(3075),y=r(1424),A=r(7773);const w=function(){return{borderRadius:"1rem",background:"linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)"}};let q=(()=>{class i{constructor(o,d,u,x,E){this.layoutService=o,this.router=d,this.productService=u,this.eventService=x,this.messageService=E,this.loading=!1}MaterializeNewLester(){if(null!=this.contact&&""!=this.contact){var o=new m;o.name=this.name,o.contact=this.contact,this.AddNewLester(o)}else this.messageService.add({severity:"info",summary:"Info",detail:"Correo y/o Cel. No puede estar vacio",life:3e3})}AddNewLester(o){this.loading=!0,this.productService.AddNewLester(o).subscribe(d=>{this.messageService.add(d.data?{severity:"success",summary:"Success",detail:"Gracias por suscribirte",life:3e3}:{severity:"error",summary:"Error",detail:d.message,life:3e3}),this.loading=!1},d=>{this.messageService.add({severity:"error",summary:"Error",detail:d,life:3e3}),this.loading=!1})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(g.P),e.Y36(p.F0),e.Y36(T.M),e.Y36(U.P),e.Y36(c.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-landing"]],features:[e._Bn([c.ez])],decls:345,vars:8,consts:[[1,"surface-0","flex","justify-content-center"],["id","home",1,"landing-wrapper","overflow-hidden"],[1,"py-4","px-4","mx-0","md:mx-6","lg:mx-8","lg:px-8","flex","align-items-center","justify-content-between","relative","lg:static","mb-3"],["href","#/landing",1,"flex","align-items-center"],["alt","Sakai Logo","height","50",1,"mr-0","lg:mr-2",3,"src"],[1,"text-900","font-medium","text-2xl","line-height-3","mr-8"],["pRipple","","pStyleClass","@next","enterClass","hidden","leaveToClass","hidden",1,"cursor-pointer","block","lg:hidden","text-700",3,"hideOnOutsideClick"],[1,"pi","pi-bars","text-4xl"],[1,"align-items-center","surface-0","flex-grow-1","justify-content-between","hidden","lg:flex","absolute","lg:static","w-full","left-0","px-6","lg:px-0","z-2",2,"top","85%"],[1,"list-none","p-0","m-0","flex","lg:align-items-center","select-none","flex-column","lg:flex-row","cursor-pointer"],["pRipple","",1,"flex","m-0","md:ml-5","px-0","py-3","text-900","font-medium","line-height-3",3,"click"],[1,"flex","justify-content-between","lg:block","border-top-1","lg:border-top-none","surface-border","py-3","lg:py-0","mt-3","lg:mt-0"],["routerLink","/auth/login"],["pButton","","pRipple","","label","Entrar",1,"p-button-text","p-button-rounded","border-none","font-light","line-height-2","text-blue-500"],["routerLink","/auth/register"],["pButton","","pRipple","","label","Registrarse",1,"p-button-rounded","border-none","ml-5","font-light","line-height-2","bg-blue-500","text-white"],["id","hero",1,"grid","py-4","px-4","lg:px-8","relative"],[1,"mx-4","md:mx-8","mt-0","md:mt-4"],[1,"text-6xl","font-bold","text-gray-900","line-height-2"],[1,"font-light","block"],[1,"font-normal","text-2xl","line-height-3","md:mt-3","text-gray-700"],["pButton","","pRipple","","type","button","label","Empezar Gratis",1,"p-button-rounded","text-xl","border-none","mt-3","bg-blue-500","font-normal","line-height-3","px-3","text-white"],["src","assets/demo/images/landing/screen-1.png","alt","",1,"sm:mt-5","md:mt-0",2,"right","10%"],["id","features",1,"py-4","px-4","lg:px-8","mt-5","mx-0","lg:mx-8"],[1,"grid","justify-content-center"],[1,"col-12","text-center","mt-8","mb-4"],[1,"text-900","font-normal","mb-2"],[1,"col-12","md:col-12","lg:col-4","p-0","lg:pr-5","lg:pb-5","mt-4","lg:mt-0"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(253, 228, 165, 0.2),\n                                    rgba(187, 199, 205, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(253, 228, 165, 0.2),\n                                    rgba(187, 199, 205, 0.2)\n                                )"],[1,"p-3","surface-card","h-full",2,"border-radius","8px"],[1,"flex","align-items-center","justify-content-center","bg-yellow-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-users","text-2xl","text-yellow-700"],[1,"mb-2","text-900"],[1,"text-600"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(145, 226, 237, 0.2),\n                                    rgba(251, 199, 145, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(253, 228, 165, 0.2),\n                                    rgba(172, 180, 223, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-cyan-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-palette","text-2xl","text-cyan-700"],[1,"col-12","md:col-12","lg:col-4","p-0","lg:pb-5","mt-4","lg:mt-0"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(145, 226, 237, 0.2),\n                                    rgba(172, 180, 223, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(172, 180, 223, 0.2),\n                                    rgba(246, 158, 188, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-indigo-200",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-map","text-2xl","text-indigo-700"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(187, 199, 205, 0.2),\n                                    rgba(251, 199, 145, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(253, 228, 165, 0.2),\n                                    rgba(145, 210, 204, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-bluegray-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-id-card","text-2xl","text-bluegray-700"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(187, 199, 205, 0.2),\n                                    rgba(246, 158, 188, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(145, 226, 237, 0.2),\n                                    rgba(160, 210, 250, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-orange-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-star","text-2xl","text-orange-700"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(251, 199, 145, 0.2),\n                                    rgba(246, 158, 188, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(172, 180, 223, 0.2),\n                                    rgba(212, 162, 221, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-pink-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-moon","text-2xl","text-pink-700"],[1,"col-12","md:col-12","lg:col-4","p-0","lg:pr-5","mt-4","lg:mt-0"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(145, 210, 204, 0.2),\n                                    rgba(160, 210, 250, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(187, 199, 205, 0.2),\n                                    rgba(145, 210, 204, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-teal-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-shopping-cart","text-2xl","text-teal-700"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(145, 210, 204, 0.2),\n                                    rgba(212, 162, 221, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(251, 199, 145, 0.2),\n                                    rgba(160, 210, 250, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-blue-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-globe","text-2xl","text-blue-700"],[1,"col-12","md:col-12","lg:col-4","p-0","lg-4","mt-4","lg:mt-0"],[2,"height","160px","padding","2px","border-radius","10px","background","linear-gradient(\n                                    90deg,\n                                    rgba(160, 210, 250, 0.2),\n                                    rgba(212, 162, 221, 0.2)\n                                ),\n                                linear-gradient(\n                                    180deg,\n                                    rgba(246, 158, 188, 0.2),\n                                    rgba(212, 162, 221, 0.2)\n                                )"],[1,"flex","align-items-center","justify-content-center","bg-purple-200","mb-3",2,"width","3.5rem","height","3.5rem","border-radius","10px"],[1,"pi","pi-fw","pi-eye","text-2xl","text-purple-700"],[1,"col-12","mt-8","mb-8","p-2","md:p-8",2,"border-radius","20px","background","linear-gradient(\n                                0deg,\n                                rgba(255, 255, 255, 0.6),\n                                rgba(255, 255, 255, 0.6)\n                            ),\n                            radial-gradient(\n                                77.36% 256.97% at 77.36% 57.52%,\n                                #efe1af 0%,\n                                #c3dcfa 100%\n                            )"],[1,"flex","flex-column","justify-content-center","align-items-center","text-center","px-3","py-3","md:py-0"],[1,"px-4","py-5","shadow-2","flex","flex-column","md:flex-row","md:align-items-center","justify-content-between","mb-3",3,"ngStyle"],[1,"text-blue-100","font-medium","text-xl","mt-2","mb-3"],[1,"text-white","font-medium","text-5xl"],[1,"mt-4","mr-auto","md:mt-0","md:mr-0"],["target","_blank","href","https://wa.me/50489183351",1,"p-button","font-bold","px-5","py-3","p-button-warning","p-button-rounded","p-button-raised"],["id","highlights",1,"py-4","px-4","lg:px-8","mx-0","my-6","lg:mx-8"],[1,"text-center"],[1,"text-600","text-2xl"],[1,"grid","mt-8","pb-2","md:pb-8"],[1,"flex","justify-content-center","col-12","lg:col-6","bg-purple-100","p-0","flex-order-1","lg:flex-order-0",2,"border-radius","8px"],["src","assets/demo/images/landing/movilsar.png","alt","mockup mobile",1,"w-11"],[1,"col-12","lg:col-6","my-auto","flex","flex-column","lg:align-items-end","text-center","lg:text-right"],[1,"flex","align-items-center","justify-content-center","bg-purple-200","align-self-center","lg:align-self-end",2,"width","4.2rem","height","4.2rem","border-radius","10px"],[1,"pi","pi-fw","pi-mobile","text-5xl","text-purple-700"],[1,"line-height-1","text-900","text-4xl","font-normal"],[1,"text-700","text-2xl","line-height-3","ml-0","md:ml-2",2,"max-width","650px"],[1,"grid","my-8","pt-2","md:pt-8"],[1,"col-12","lg:col-6","my-auto","flex","flex-column","text-center","lg:text-left","lg:align-items-start"],[1,"flex","align-items-center","justify-content-center","bg-yellow-200","align-self-center","lg:align-self-start",2,"width","4.2rem","height","4.2rem","border-radius","10px"],[1,"pi","pi-fw","pi-desktop","text-5xl","text-yellow-700"],[1,"text-700","text-2xl","line-height-3","mr-0","md:mr-2",2,"max-width","650px"],[1,"flex","justify-content-end","flex-order-1","sm:flex-order-2","col-12","lg:col-6","bg-yellow-100","p-0",2,"border-radius","8px"],["src","assets/demo/images/landing/mockup-desktop.svg","alt","mockup",1,"w-11"],["id","pricing",1,"py-4","px-4","lg:px-8","my-2","md:my-4"],[1,"grid","justify-content-between","mt-8","md:mt-0"],[1,"col-12","lg:col-4","p-0","md:p-3"],[1,"p-3","flex","flex-column","border-200","pricing-card","cursor-pointer",2,"border","2px solid","border-radius","10px"],[1,"text-900","text-center","my-5"],["src","assets/demo/images/landing/free.svg","alt","free",1,"w-10","h-10","mx-auto"],[1,"my-5","text-center"],[1,"text-5xl","font-bold","mr-2","text-900"],["pButton","","pRipple","","label","Iniciar",1,"block","mx-auto","mt-4","p-button-rounded","border-none","ml-3","font-light","line-height-2","bg-blue-500","text-white"],[1,"w-full","bg-surface-200"],[1,"my-5","list-none","p-0","flex","text-900","flex-column"],[1,"py-2"],[1,"pi","pi-fw","pi-check","text-xl","text-cyan-500","mr-2"],[1,"text-xl","line-height-3"],[1,"col-12","lg:col-4","p-0","md:p-3","mt-4","md:mt-0"],["src","assets/demo/images/landing/startup.svg","alt","startup",1,"w-10","h-10","mx-auto"],["src","assets/demo/images/landing/enterprise.svg","alt","enterprise",1,"w-10","h-10","mx-auto"],[1,"flex","flex-column","px-3","py-3","md:py-0"],["header","\xbfQu\xe9 tipo de facturas puedo emitir?"],["header","El plan gratis, \xbfSiempre ser\xe1 gratis?"],["header","\xbfCu\xe1l es la diferencia entre el plan gratis con el plan de $11?"],["header","\xbfQu\xe9 tipo de impresoras puedo usar?"],["header","\xbfQu\xe9 pasa si no estoy constituido y necesito asesor\xeda en cuanto a permisos y tramites?"],[1,"card","p-fluid"],[1,"p-formgrid","grid"],[1,"field","col-4"],["htmlFor","name2"],["pInputText","","id","name2","type","text",3,"ngModel","ngModelChange"],["htmlFor","email2"],["pInputText","","id","email2","type","text",3,"ngModel","ngModelChange"],[1,"field","col-2"],["pButton","","pRipple","","type","button","label","Suscribirme",1,"p-button-rounded","text-xl","border-none","mt-3","bg-blue-500","font-normal","line-height-3","px-3","text-white",3,"loading","click"],[1,"py-4","px-4","mx-0","mt-8","lg:mx-8"],[1,"grid","justify-content-between"],[1,"col-12","md:col-2",2,"margin-top","-1.5rem"],[1,"flex","flex-wrap","align-items-center","justify-content-center","md:justify-content-start","md:mb-0","mb-3","cursor-pointer",3,"click"],["alt","footer sections","width","50","height","50",1,"mr-2",3,"src"],[1,"font-medium","text-3xl","text-900"],[1,"col-12","md:col-10","lg:col-7"],[1,"grid","text-center","md:text-left"],[1,"col-12","md:col-3"],[1,"font-medium","text-2xl","line-height-3","mb-3","text-900"],[1,"line-height-3","text-xl","block","cursor-pointer","mb-2","text-700"],[1,"line-height-3","text-xl","block","cursor-pointer","text-700"],[1,"col-12","md:col-3","mt-4","md:mt-0"],["src","assets/demo/images/landing/new-badge.svg",1,"ml-2"]],template:function(o,d){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-toast"),e.TgZ(4,"a",3),e._UZ(5,"img",4),e.TgZ(6,"span",5),e._uU(7,"inQura"),e.qZA()(),e.TgZ(8,"a",6),e._UZ(9,"i",7),e.qZA(),e.TgZ(10,"div",8)(11,"ul",9)(12,"li")(13,"a",10),e.NdJ("click",function(){return d.router.navigate(["/landing"],{fragment:"home"})}),e.TgZ(14,"span"),e._uU(15,"Inicio"),e.qZA()()(),e.TgZ(16,"li")(17,"a",10),e.NdJ("click",function(){return d.router.navigate(["/landing"],{fragment:"features"})}),e.TgZ(18,"span"),e._uU(19,"Caracteristicas"),e.qZA()()(),e.TgZ(20,"li")(21,"a",10),e.NdJ("click",function(){return d.router.navigate(["/landing"],{fragment:"highlights"})}),e.TgZ(22,"span"),e._uU(23,"Highlights"),e.qZA()()(),e.TgZ(24,"li")(25,"a",10),e.NdJ("click",function(){return d.router.navigate(["/landing"],{fragment:"pricing"})}),e.TgZ(26,"span"),e._uU(27,"Precio"),e.qZA()()()(),e.TgZ(28,"div",11)(29,"a",12),e._UZ(30,"button",13),e.qZA(),e.TgZ(31,"a",14),e._UZ(32,"button",15),e.qZA()()()(),e.TgZ(33,"div",16)(34,"div",17)(35,"h1",18)(36,"span",19),e._uU(37,"inQura Cloud"),e.qZA(),e._uU(38,"Facturaci\xf3n Facil "),e.qZA(),e.TgZ(39,"p",20),e._uU(40," Empieza a generar facturas de forma gratis "),e.qZA(),e.TgZ(41,"a",14),e._UZ(42,"button",21),e.qZA()(),e._UZ(43,"img",22),e.qZA(),e.TgZ(44,"div",23)(45,"div",24)(46,"div",25)(47,"h2",26),e._uU(48,"Caracteristicas"),e.qZA()(),e.TgZ(49,"div",27)(50,"div",28)(51,"div",29)(52,"div",30),e._UZ(53,"i",31),e.qZA(),e.TgZ(54,"h5",32),e._uU(55,"Multi-Usuario"),e.qZA(),e.TgZ(56,"span",33),e._uU(57,"Crea y administra multiples usuarios"),e.qZA()()()(),e.TgZ(58,"div",27)(59,"div",34)(60,"div",29)(61,"div",35),e._UZ(62,"i",36),e.qZA(),e.TgZ(63,"h5",32),e._uU(64,"Dise\xf1o Personalizado"),e.qZA(),e.TgZ(65,"span",33),e._uU(66,"En reportes y Facturas"),e.qZA()()()(),e.TgZ(67,"div",37)(68,"div",38)(69,"div",29)(70,"div",39),e._UZ(71,"i",40),e.qZA(),e.TgZ(72,"h5",32),e._uU(73,"Dise\xf1o Limpio"),e.qZA(),e.TgZ(74,"span",33),e._uU(75,"Facil de Usar"),e.qZA()()()(),e.TgZ(76,"div",27)(77,"div",41)(78,"div",29)(79,"div",42),e._UZ(80,"i",43),e.qZA(),e.TgZ(81,"h5",32),e._uU(82,"Sucursales"),e.qZA(),e.TgZ(83,"span",33),e._uU(84,"Multiples sucursales."),e.qZA()()()(),e.TgZ(85,"div",27)(86,"div",44)(87,"div",29)(88,"div",45),e._UZ(89,"i",46),e.qZA(),e.TgZ(90,"h5",32),e._uU(91,"Facturaci\xf3n"),e.qZA(),e.TgZ(92,"span",33),e._uU(93,"Facturas r\xe1pidas"),e.qZA()()()(),e.TgZ(94,"div",37)(95,"div",47)(96,"div",29)(97,"div",48),e._UZ(98,"i",49),e.qZA(),e.TgZ(99,"h5",32),e._uU(100,"Contabilidad"),e.qZA(),e.TgZ(101,"span",33),e._uU(102,"Contabilidad autom\xe1tica "),e.qZA()()()(),e.TgZ(103,"div",50)(104,"div",51)(105,"div",29)(106,"div",52),e._UZ(107,"i",53),e.qZA(),e.TgZ(108,"h5",32),e._uU(109,"Listo para su uso"),e.qZA(),e.TgZ(110,"span",33),e._uU(111,"Listo desde el registro"),e.qZA()()()(),e.TgZ(112,"div",50)(113,"div",54)(114,"div",29)(115,"div",55),e._UZ(116,"i",56),e.qZA(),e.TgZ(117,"h5",32),e._uU(118,"En la nube"),e.qZA(),e.TgZ(119,"span",33),e._uU(120,"Accede al sistema desde cualquier lugar"),e.qZA()()()(),e.TgZ(121,"div",57)(122,"div",58)(123,"div",29)(124,"div",59),e._UZ(125,"i",60),e.qZA(),e.TgZ(126,"h5",32),e._uU(127,"Reportes"),e.qZA(),e.TgZ(128,"span",33),e._uU(129,"Multiples reportes"),e.qZA()()()(),e.TgZ(130,"div",61)(131,"div",62)(132,"div",63)(133,"div")(134,"div",64),e._uU(135," Necesitas asesoria con el SAR? "),e.qZA(),e.TgZ(136,"div",65),e._uU(137," Accede aqu\xed "),e.qZA()(),e.TgZ(138,"div",66)(139,"a",67),e._uU(140," Iniciar "),e.qZA()()()()()()(),e.TgZ(141,"div",68)(142,"div",69)(143,"h2",26),e._uU(144,"Regulaci\xf3n del SAR"),e.qZA(),e._UZ(145,"span",70),e.qZA(),e.TgZ(146,"div",71)(147,"div",72),e._UZ(148,"img",73),e.qZA(),e.TgZ(149,"div",74)(150,"div",75),e._UZ(151,"i",76),e.qZA(),e._UZ(152,"h2",77),e.TgZ(153,"span",78),e._uU(154,"Nuestro sistema cumple con las exigencias del SAR para poder emitir facturas con todos sus requisitos y si en alg\xfan momento cambian no tienes que preocuparte ya que haremos todos los cambios de forma inmediata "),e.qZA()()(),e.TgZ(155,"div",79)(156,"div",80)(157,"div",81),e._UZ(158,"i",82),e.qZA(),e.TgZ(159,"h2",77),e._uU(160," En Linea "),e.qZA(),e.TgZ(161,"span",83),e._uU(162,"Accede desde cualquier lugar desde donde te encuentres, solo necesitas conexi\xf3n a internet. *Si ocupas instalar el sistema en forma local o en red interna comun\xedcate a parte con nosotros*"),e.qZA()(),e.TgZ(163,"div",84),e._UZ(164,"img",85),e.qZA()()(),e.TgZ(165,"div",86)(166,"div",69)(167,"h2",26),e._uU(168,"Tabla de Precios"),e.qZA(),e.TgZ(169,"span",70),e._uU(170,"Elije el plan que mejor te convenga"),e.qZA()(),e.TgZ(171,"div",87)(172,"div",88)(173,"div",89)(174,"h3",90),e._uU(175,"Gratis"),e.qZA(),e._UZ(176,"img",91),e.TgZ(177,"div",92)(178,"span",93),e._uU(179,"$0.00"),e.qZA(),e.TgZ(180,"span",33),e._uU(181,"Mensual"),e.qZA(),e.TgZ(182,"a",14),e._UZ(183,"button",94),e.qZA()(),e._UZ(184,"p-divider",95),e.TgZ(185,"ul",96)(186,"li",97),e._UZ(187,"i",98),e.TgZ(188,"span",99),e._uU(189,"Facturaci\xf3n SAR o de control"),e.qZA()(),e.TgZ(190,"li",97),e._UZ(191,"i",98),e.TgZ(192,"span",99),e._uU(193,"Clientes y Proveedores"),e.qZA()(),e.TgZ(194,"li",97),e._UZ(195,"i",98),e.TgZ(196,"span",99),e._uU(197,"Productos"),e.qZA()(),e.TgZ(198,"li",97),e._UZ(199,"i",98),e.TgZ(200,"span",99),e._uU(201,"Stock"),e.qZA()()()()(),e.TgZ(202,"div",100)(203,"div",89)(204,"h3",90),e._uU(205,"Inicio"),e.qZA(),e._UZ(206,"img",101),e.TgZ(207,"div",92)(208,"span",93),e._uU(209,"$11"),e.qZA(),e.TgZ(210,"span",33),e._uU(211,"Mensual"),e.qZA(),e.TgZ(212,"a",14),e._UZ(213,"button",94),e.qZA()(),e._UZ(214,"p-divider",95),e.TgZ(215,"ul",96)(216,"li",97),e._UZ(217,"i",98),e.TgZ(218,"span",99),e._uU(219,"Todo lo del plan anterior"),e.qZA()(),e.TgZ(220,"li",97),e._UZ(221,"i",98),e.TgZ(222,"span",99),e._uU(223,"Copias de Seguridad"),e.qZA()(),e.TgZ(224,"li",97),e._UZ(225,"i",98),e.TgZ(226,"span",99),e._uU(227,"Garantia"),e.qZA()(),e.TgZ(228,"li",97),e._UZ(229,"i",98),e.TgZ(230,"span",99),e._uU(231,"Soporte T\xe9cnico"),e.qZA()()()()(),e.TgZ(232,"div",100)(233,"div",89)(234,"h3",90),e._uU(235,"Facturaci\xf3n"),e.qZA(),e._UZ(236,"img",102),e.TgZ(237,"div",92)(238,"span",93),e._uU(239,"$15"),e.qZA(),e.TgZ(240,"span",33),e._uU(241,"Mensual"),e.qZA(),e.TgZ(242,"a",14),e._UZ(243,"button",94),e.qZA()(),e._UZ(244,"p-divider",95),e.TgZ(245,"ul",96)(246,"li",97),e._UZ(247,"i",98),e.TgZ(248,"span",99),e._uU(249,"Todo lo del plan anterior"),e.qZA()(),e.TgZ(250,"li",97),e._UZ(251,"i",98),e.TgZ(252,"span",99),e._uU(253,"Multiples Usuarios"),e.qZA()(),e.TgZ(254,"li",97),e._UZ(255,"i",98),e.TgZ(256,"span",99),e._uU(257,"Control de Inventario"),e.qZA()(),e.TgZ(258,"li",97),e._UZ(259,"i",98),e.TgZ(260,"span",99),e._uU(261,"Contabilidad*"),e.qZA()()()()()(),e.TgZ(262,"div")(263,"div",61)(264,"div",103)(265,"p-accordion")(266,"p-accordionTab",104),e._uU(267," Nuestro sistema esta optimizado para que puedas emitir facturas legales del SAR o facturas de solo control interno "),e.qZA(),e.TgZ(268,"p-accordionTab",105),e._uU(269," Si, con el plan gratis tienes acceso ilimitado a la mayor\xeda de las funcionalidades, con estas funciones puedes perfectamente emitir facturas legales y llevar el control de tu negocio. "),e.qZA(),e.TgZ(270,"p-accordionTab",106),e._uU(271," Si bien es cierto el plan gratis con el plan de pago tienes las mismas funcionalidades; El plan de pago te da acceso a recibir soporte en caso que tengas alguna dificultad, tambi\xe9n tendr\xe1s toda la garant\xeda que en caso de una perdida de datos los podr\xe1s recuperar gracias a nuestras copias de seguridad autom\xe1ticas y por ultimo en el plan gratis dependiendo del horario podr\xedas sentir que va un poco lento esto es ya que esta siendo usado por muchos usuarios al mismo tipo, esto no pasa con el plan de pago ya que se cuenta con muchas mas capacidades para la mejor experiencia. "),e.qZA(),e.TgZ(272,"p-accordionTab",107),e._uU(273," Puedes usar cualquier tipo de impresora que no sea T\xe9rmica. Si deseas utilizar una impresora t\xe9rmica debes ponerte en contacto ya que para configurarla necesitaras soporte nuestro. "),e.qZA(),e.TgZ(274,"p-accordionTab",108),e._uU(275," Nuestro equipo cuenta con profesionales del rubro contable, puedes agendar una reuni\xf3n para asesoramiento por solo $12.00 para ello debes escribirnos directamente al numero 8918-3351 "),e.qZA()()()()()(),e.TgZ(276,"div",109)(277,"h5")(278,"p"),e._uU(279,"Te gustar\xeda recibir consejos para una mejor gesti\xf3n de tu negocio "),e.qZA(),e.TgZ(280,"p"),e._uU(281," adem\xe1s de informaci\xf3n importante relacionada con el SAR"),e.qZA()(),e.TgZ(282,"div",110)(283,"div",111)(284,"label",112),e._uU(285,"Nombre"),e.qZA(),e.TgZ(286,"input",113),e.NdJ("ngModelChange",function(x){return d.name=x}),e.qZA()(),e.TgZ(287,"div",111)(288,"label",114),e._uU(289,"Correo y/o Cel."),e.qZA(),e.TgZ(290,"input",115),e.NdJ("ngModelChange",function(x){return d.contact=x}),e.qZA()(),e.TgZ(291,"div",116)(292,"button",117),e.NdJ("click",function(){return d.MaterializeNewLester()}),e.qZA()()()(),e.TgZ(293,"div",118)(294,"div",119)(295,"div",120)(296,"a",121),e.NdJ("click",function(){return d.router.navigate(["/pages/landing"],{fragment:"home"})}),e._UZ(297,"img",122),e.TgZ(298,"h4",123),e._uU(299,"inQura"),e.qZA()()(),e.TgZ(300,"div",124)(301,"div",125)(302,"div",126)(303,"h4",127),e._uU(304," Company "),e.qZA(),e.TgZ(305,"a",128),e._uU(306,"About Us"),e.qZA(),e.TgZ(307,"a",128),e._uU(308,"News"),e.qZA(),e.TgZ(309,"a",128),e._uU(310,"Investor Relations"),e.qZA(),e.TgZ(311,"a",128),e._uU(312,"Careers"),e.qZA(),e.TgZ(313,"a",129),e._uU(314,"Media Kit"),e.qZA()(),e.TgZ(315,"div",130)(316,"h4",127),e._uU(317," Resources "),e.qZA(),e.TgZ(318,"a",128),e._uU(319,"Get Started"),e.qZA(),e.TgZ(320,"a",128),e._uU(321,"Learn"),e.qZA(),e.TgZ(322,"a",129),e._uU(323,"Case Studies"),e.qZA()(),e.TgZ(324,"div",130)(325,"h4",127),e._uU(326," Community "),e.qZA(),e.TgZ(327,"a",128),e._uU(328,"Discord"),e.qZA(),e.TgZ(329,"a",128),e._uU(330,"Events"),e._UZ(331,"img",131),e.qZA(),e.TgZ(332,"a",128),e._uU(333,"FAQ"),e.qZA(),e.TgZ(334,"a",129),e._uU(335,"Blog"),e.qZA()(),e.TgZ(336,"div",130)(337,"h4",127),e._uU(338," Legal "),e.qZA(),e.TgZ(339,"a",128),e._uU(340,"Brand Policy"),e.qZA(),e.TgZ(341,"a",128),e._uU(342,"Privacy Policy"),e.qZA(),e.TgZ(343,"a",129),e._uU(344,"Terms of Service"),e.qZA()()()()()()()()),2&o&&(e.xp6(5),e.MGl("src","assets/layout/images/","light"===d.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(3),e.Q6J("hideOnOutsideClick",!0),e.xp6(124),e.Q6J("ngStyle",e.DdM(7,w)),e.xp6(154),e.Q6J("ngModel",d.name),e.xp6(4),e.Q6J("ngModel",d.contact),e.xp6(2),e.Q6J("loading",d.loading),e.xp6(5),e.MGl("src","assets/layout/images/","light"===d.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH))},dependencies:[t.PC,p.yS,_.i,b.h,v.Hq,f.UQ,f.US,h.Fj,h.JJ,h.On,y.o,A.FN],styles:["#hero[_ngcontent-%COMP%]{background:linear-gradient(0deg,rgba(255,255,255,.2),rgba(255,255,255,.2)),radial-gradient(77.36% 256.97% at 77.36% 57.52%,#EEEFAF 0%,#C3E3FA 100%);height:700px;overflow:hidden}.pricing-card[_ngcontent-%COMP%]:hover{border:2px solid var(--cyan-200)!important}@media screen and (min-width: 768px){#hero[_ngcontent-%COMP%]{clip-path:ellipse(150% 87% at 93% 13%);height:530px}}@media screen and (min-width: 1300px){#hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;transform:scale(1.2);top:15%}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:450px}}@media screen and (max-width: 1300px){#hero[_ngcontent-%COMP%]{height:600px}#hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:static;transform:scale(1);margin-left:auto}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}#hero[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:100%;max-width:100%}}"]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:q}]),p.Bz]}),i})();var s=r(1822),l=r(8061);let n=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[t.ez,O,_.x,b.l,s.S,l.Q,v.hJ,f.fx,h.u5,y.j,A.EV]}),i})()},7773:(M,Z,r)=>{r.d(Z,{EV:()=>O,FN:()=>q});var t=r(5e3),p=r(9808),c=r(9783),m=r(5921),e=r(5787),g=r(1777);const T=["container"],U=function(s,l,n,i){return{"pi-info-circle":s,"pi-exclamation-triangle":l,"pi-times-circle":n,"pi-check":i}};function _(s,l){if(1&s&&(t.ynx(0),t._UZ(1,"span",6),t.TgZ(2,"div",7)(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9),t._uU(6),t.qZA()(),t.BQk()),2&s){const n=t.oxw();t.xp6(1),t.Tol("p-toast-message-icon pi"+(n.message.icon?" "+n.message.icon:"")),t.Q6J("ngClass",t.l5B(5,U,"info"==n.message.severity,"warn"==n.message.severity,"error"==n.message.severity,"success"==n.message.severity)),t.xp6(3),t.Oqu(n.message.summary),t.xp6(2),t.Oqu(n.message.detail)}}function b(s,l){1&s&&t.GkF(0)}function v(s,l){if(1&s){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.onCloseIconClick(a))})("keydown.enter",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.onCloseIconClick(a))}),t._UZ(1,"span",11),t.qZA()}}const f=function(s){return[s,"p-toast-message"]},h=function(s,l,n,i){return{showTransformParams:s,hideTransformParams:l,showTransitionParams:n,hideTransitionParams:i}},y=function(s){return{value:"visible",params:s}},A=function(s){return{$implicit:s}};function C(s,l){if(1&s){const n=t.EpF();t.TgZ(0,"p-toastItem",3),t.NdJ("onClose",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.onMessageClose(a))})("@toastAnimation.start",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.onAnimationStart(a))})("@toastAnimation.done",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.onAnimationEnd(a))}),t.qZA()}if(2&s){const n=l.$implicit,i=l.index,a=t.oxw();t.Q6J("message",n)("index",i)("template",a.template)("@toastAnimation",void 0)("showTransformOptions",a.showTransformOptions)("hideTransformOptions",a.hideTransformOptions)("showTransitionOptions",a.showTransitionOptions)("hideTransitionOptions",a.hideTransitionOptions)}}let w=(()=>{class s{constructor(n){this.zone=n,this.onClose=new t.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(n){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),n.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t.R0b))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-toastItem"]],viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let a;t.iGM(a=t.CRH())&&(i.containerViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0,1),t.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()}),t.TgZ(2,"div",2),t.YNc(3,_,7,10,"ng-container",3),t.YNc(4,b,1,0,"ng-container",4),t.YNc(5,v,2,0,"button",5),t.qZA()()),2&n&&(t.Tol(i.message.styleClass),t.Q6J("ngClass",t.VKq(10,f,"p-toast-message-"+i.message.severity))("@messageState",t.VKq(17,y,t.l5B(12,h,i.showTransformOptions,i.hideTransformOptions,i.showTransitionOptions,i.hideTransitionOptions))),t.uIk("id",i.message.id),t.xp6(2),t.Q6J("ngClass",i.message.contentStyleClass),t.xp6(1),t.Q6J("ngIf",!i.template),t.xp6(1),t.Q6J("ngTemplateOutlet",i.template)("ngTemplateOutletContext",t.VKq(19,A,i.message)),t.xp6(1),t.Q6J("ngIf",!1!==i.message.closable))},dependencies:[p.mk,p.O5,p.tP,e.H],encapsulation:2,data:{animation:[(0,g.X$)("messageState",[(0,g.SB)("visible",(0,g.oB)({transform:"translateY(0)",opacity:1})),(0,g.eR)("void => *",[(0,g.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,g.jt)("{{showTransitionParams}}")]),(0,g.eR)("* => void",[(0,g.jt)("{{hideTransitionParams}}",(0,g.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),s})(),q=(()=>{class s{constructor(n,i,a){this.messageService=n,this.cd=i,this.config=a,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new t.vpe,this.id=(0,m.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(n=>{if(n)if(n instanceof Array){const i=n.filter(a=>this.canAdd(a));this.add(i)}else this.canAdd(n)&&this.add([n])}),this.clearSubscription=this.messageService.clearObserver.subscribe(n=>{n?this.key===n&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(n){this.messages=this.messages?[...this.messages,...n]:[...n],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...n]:[...n]),this.cd.markForCheck()}canAdd(n){let i=this.key===n.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,n)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,n)),i}containsMessage(n,i){return!!n&&null!=n.find(a=>a.summary===i.summary&&a.detail==i.detail&&a.severity===i.severity)}ngAfterContentInit(){this.templates.forEach(n=>{n.getType(),this.template=n.template})}onMessageClose(n){this.messages.splice(n.index,1),this.onClose.emit({message:n.message}),this.cd.detectChanges()}onAnimationStart(n){"void"===n.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&""===this.containerViewChild.nativeElement.style.zIndex&&m.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(n){"void"===n.toState&&this.autoZIndex&&m.gb.isEmpty(this.messages)&&m.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let n="";for(let i in this.breakpoints){let a="";for(let o in this.breakpoints[i])a+=o+":"+this.breakpoints[i][o]+" !important;";n+=`\n                    @media screen and (max-width: ${i}) {\n                        .p-toast[${this.id}] {\n                           ${a}\n                        }\n                    }\n                `}this.styleElement.innerHTML=n}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&m.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(c.ez),t.Y36(t.sBO),t.Y36(c.b4))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-toast"]],contentQueries:function(n,i,a){if(1&n&&t.Suo(a,c.jx,4),2&n){let o;t.iGM(o=t.CRH())&&(i.templates=o)}},viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let a;t.iGM(a=t.CRH())&&(i.containerViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0,1),t.YNc(2,C,1,8,"p-toastItem",2),t.qZA()),2&n&&(t.Tol(i.styleClass),t.Q6J("ngClass","p-toast p-component p-toast-"+i.position)("ngStyle",i.style),t.xp6(2),t.Q6J("ngForOf",i.messages))},dependencies:[p.mk,p.sg,p.PC,w],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,g.X$)("toastAnimation",[(0,g.eR)(":enter, :leave",[(0,g.IO)("@*",(0,g.pV)())])])]},changeDetection:0}),s})(),O=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,e.T,c.m8]}),s})()}}]);