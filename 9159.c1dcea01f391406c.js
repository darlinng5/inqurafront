"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[9159],{9159:(b,d,a)=>{a.r(d),a.d(d,{ChartsModule:()=>C});var g=a(9808),p=a(1822),u=a(5077),e=a(5e3),c=a(8568);const n=function(){return{width:"50%"}};let y=(()=>{class o{constructor(r){this.layoutService=r,this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const r=getComputedStyle(document.documentElement),t=r.getPropertyValue("--text-color"),s=r.getPropertyValue("--text-color-secondary"),i=r.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:r.getPropertyValue("--bluegray-700"),borderColor:r.getPropertyValue("--bluegray-700"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:r.getPropertyValue("--green-600"),borderColor:r.getPropertyValue("--green-600"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:s,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:s},grid:{color:i,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[r.getPropertyValue("--yellow-500"),r.getPropertyValue("--blue-500"),r.getPropertyValue("--pink-500")],hoverBackgroundColor:[r.getPropertyValue("--yellow-400"),r.getPropertyValue("--blue-400"),r.getPropertyValue("--red-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:t}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:r.getPropertyValue("--bluegray-700"),borderColor:r.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:r.getPropertyValue("--green-600"),borderColor:r.getPropertyValue("--green-600"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:s},grid:{color:i,drawBorder:!1}},y:{ticks:{color:s},grid:{color:i,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[r.getPropertyValue("--red-500"),r.getPropertyValue("--blue-500"),r.getPropertyValue("--yellow-500"),r.getPropertyValue("--green-500")],label:"My dataset"}],labels:["Red","Blue","Yellow","Green"]},this.polarOptions={plugins:{legend:{labels:{color:t}}},scales:{r:{grid:{color:i}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:r.getPropertyValue("--red-500"),pointBackgroundColor:r.getPropertyValue("--red-500"),pointBorderColor:r.getPropertyValue("--red-500"),pointHoverBackgroundColor:t,pointHoverBorderColor:r.getPropertyValue("--red-500"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:r.getPropertyValue("--bluegray-500"),pointBackgroundColor:r.getPropertyValue("--bluegray-500"),pointBorderColor:r.getPropertyValue("--bluegray-500"),pointHoverBackgroundColor:t,pointHoverBorderColor:r.getPropertyValue("--bluegray-500"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{color:t}}},scales:{r:{grid:{color:s}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(c.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:27,vars:27,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Linear Chart"),e.qZA(),e._UZ(5,"p-chart",3),e.qZA(),e.TgZ(6,"div",4)(7,"h5",5),e._uU(8,"Pie Chart"),e.qZA(),e._UZ(9,"p-chart",6),e.qZA(),e.TgZ(10,"div",4)(11,"h5",5),e._uU(12,"Polar Area Chart"),e.qZA(),e._UZ(13,"p-chart",7),e.qZA()(),e.TgZ(14,"div",1)(15,"div",2)(16,"h5"),e._uU(17,"Bar Chart"),e.qZA(),e._UZ(18,"p-chart",8),e.qZA(),e.TgZ(19,"div",4)(20,"h5",5),e._uU(21,"Doughnut Chart"),e.qZA(),e._UZ(22,"p-chart",9),e.qZA(),e.TgZ(23,"div",4)(24,"h5",5),e._uU(25,"Radar Chart"),e.qZA(),e._UZ(26,"p-chart",10),e.qZA()()()),2&r&&(e.xp6(5),e.Akn(e.DdM(22,n)),e.Q6J("data",t.lineData)("options",t.lineOptions),e.xp6(4),e.Akn(e.DdM(23,n)),e.Q6J("data",t.pieData)("options",t.pieOptions),e.xp6(4),e.Akn(e.DdM(24,n)),e.Q6J("data",t.polarData)("options",t.polarOptions),e.xp6(5),e.Q6J("data",t.barData)("options",t.barOptions),e.xp6(4),e.Akn(e.DdM(25,n)),e.Q6J("data",t.pieData)("options",t.pieOptions),e.xp6(4),e.Akn(e.DdM(26,n)),e.Q6J("data",t.radarData)("options",t.radarOptions))},dependencies:[p.C],encapsulation:2}),o})(),h=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:y}]),u.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,h,p.S]}),o})()}}]);