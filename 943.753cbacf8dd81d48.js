"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[943],{58:(b,c,s)=>{s.r(c),s.d(c,{FileDemoModule:()=>p});var t=s(6895),d=s(4006),u=s(3388),g=s(9197),m=s(805),e=s(4650);function f(o,h){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const n=h.$implicit;e.xp6(1),e.AsE("",n.name," - ",n.size," bytes")}}function v(o,h){if(1&o&&(e.TgZ(0,"ul"),e.YNc(1,f,2,2,"li",7),e.qZA()),2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.uploadedFiles)}}function i(o,h){if(1&o&&e.YNc(0,v,2,1,"ul",6),2&o){const n=e.oxw();e.Q6J("ngIf",n.uploadedFiles.length)}}let r=(()=>{class o{constructor(n){this.messageService=n,this.uploadedFiles=[]}onUpload(n){for(const l of n.files)this.uploadedFiles.push(l);this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded"})}onBasicUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}static#e=this.\u0275fac=function(l){return new(l||o)(e.Y36(m.ez))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([m.ez])],decls:10,vars:3,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["name","demo[]","url","./upload.php","accept","image/*",3,"multiple","maxFileSize","onUpload"],["pTemplate","content"],["mode","basic","name","demo[]","url","./upload.php","accept","image/*",3,"maxFileSize","onUpload"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(l,_){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Advanced"),e.qZA(),e.TgZ(5,"p-fileUpload",3),e.NdJ("onUpload",function(F){return _.onUpload(F)}),e.YNc(6,i,1,1,"ng-template",4),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Basic"),e.qZA(),e.TgZ(9,"p-fileUpload",5),e.NdJ("onUpload",function(){return _.onBasicUpload()}),e.qZA()()()()),2&l&&(e.xp6(5),e.Q6J("multiple",!0)("maxFileSize",1e6),e.xp6(4),e.Q6J("maxFileSize",1e6))},dependencies:[t.sg,t.O5,u.p,m.jx],encapsulation:2})}return o})(),a=(()=>{class o{static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:r}]),g.Bz]})}return o})(),p=(()=>{class o{static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[t.ez,d.u5,a,u.O]})}return o})()},8235:(b,c,s)=>{s.d(c,{k:()=>f,q:()=>v});var t=s(4650),d=s(6895);function u(i,r){if(1&i&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&i){const a=t.oxw(2);t.Udp("display",null!=a.value&&0!==a.value?"flex":"none"),t.xp6(1),t.AsE("",a.value,"",a.unit,"")}}function g(i,r){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,u,2,4,"div",4),t.qZA()),2&i){const a=t.oxw();t.Udp("width",a.value+"%"),t.xp6(1),t.Q6J("ngIf",a.showValue)}}function m(i,r){1&i&&(t.TgZ(0,"div",6),t._UZ(1,"div",7),t.qZA())}const e=function(i,r){return{"p-progressbar p-component":!0,"p-progressbar-determinate":i,"p-progressbar-indeterminate":r}};let f=(()=>{class i{constructor(){this.showValue=!0,this.unit="%",this.mode="determinate"}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",style:"style",styleClass:"styleClass",unit:"unit",mode:"mode"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(a,p){1&a&&(t.TgZ(0,"div",0),t.YNc(1,g,2,3,"div",1),t.YNc(2,m,2,0,"div",2),t.qZA()),2&a&&(t.Tol(p.styleClass),t.Q6J("ngStyle",p.style)("ngClass",t.WLB(7,e,"determinate"===p.mode,"indeterminate"===p.mode)),t.uIk("aria-valuenow",p.value),t.xp6(1),t.Q6J("ngIf","determinate"===p.mode),t.xp6(1),t.Q6J("ngIf","indeterminate"===p.mode))},dependencies:[d.mk,d.O5,d.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0}),i})(),v=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez]}),i})()}}]);