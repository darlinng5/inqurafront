"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[9866],{9866:(M,c,t)=>{t.r(c),t.d(c,{SucursalModule:()=>o});var r=t(6895),u=t(9197),v=t(1546),n=t(4650),d=t(5384);const a=["barcodeContainer"];let h=(()=>{class e{constructor(l,i){this.router=l,this.eventService=i,this.redirect=!1,this.AccessName="/pages/sucursal",this.barcodeValue="1234"}ngOnInit(){const i=this.eventService.getPermisionsException().split(",").map(p=>p.trim());this.redirect=i.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized")}static#t=this.\u0275fac=function(i){return new(i||e)(n.Y36(u.F0),n.Y36(d.P))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(i,p){if(1&i&&n.Gf(a,5),2&i){let I;n.iGM(I=n.CRH())&&(p.barcodeContainer=I.first)}},decls:1,vars:0,consts:[[1,"grid"]],template:function(i,p){1&i&&n._UZ(0,"div",0)},styles:[".container[_ngcontent-%COMP%] {\n  position: relative; \n  height: 100vh; \n}\n\n.box[_ngcontent-%COMP%] {\n  position: absolute;\n  \n}"]})}return e})(),m=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=n.oAB({type:e});static#n=this.\u0275inj=n.cJS({imports:[u.Bz.forChild([{path:"",component:h,canActivate:[v.j]}]),u.Bz]})}return e})();var s=t(9756);let o=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=n.oAB({type:e});static#n=this.\u0275inj=n.cJS({imports:[r.ez,m,s.q]})}return e})()},2384:(M,c,t)=>{t.d(c,{b:()=>r});class r{}},7083:(M,c,t)=>{t.d(c,{K:()=>a});var r=t(529),u=t(2340),v=t(2384),n=t(4650);const d=u.N.baseUrl;let a=(()=>{class h{constructor(s){this.http=s}addUser(s){return this.http.post(`${d}auth/register`,s)}login(s,o){var e=new v.b;return e.email=s,e.password=o,this.http.post(`${d}auth/login`,e)}GetUserPermisions(){const _={headers:new r.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",_)}static#t=this.\u0275fac=function(o){return new(o||h)(n.LFG(r.eN))};static#e=this.\u0275prov=n.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},1546:(M,c,t)=>{t.d(c,{j:()=>d});var r=t(4650),u=t(5384),v=t(9197),n=t(7083);let d=(()=>{class a{constructor(m,s,o){this.eventService=m,this.router=s,this._userService=o,this.isTokenValid=!1}canActivate(m,s){const o=this.eventService.getToken();return(""==o||null==o||null==o)&&this.router.navigateByUrl("/auth/login"),!0}static#t=this.\u0275fac=function(s){return new(s||a)(r.LFG(u.P),r.LFG(v.F0),r.LFG(n.K))};static#e=this.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);