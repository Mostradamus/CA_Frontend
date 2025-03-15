import './polyfills.server.mjs';
import{a as R}from"./chunk-VHI2W5QF.mjs";import{a as oe,b as ne}from"./chunk-Z2JTQPJ5.mjs";import{f as ae}from"./chunk-AWTJFXI5.mjs";import{a as I}from"./chunk-TLRVD2KF.mjs";import{d as q,e as p,g as J,h as K,i as Q,j as m,l as W,m as X,n as Y,o as Z,p as ee,u as te,v as ie}from"./chunk-M5SYIO2O.mjs";import"./chunk-YZO6S6M6.mjs";import"./chunk-VXSD3OHU.mjs";import{h as V,i as L,j as P}from"./chunk-6VPZODYG.mjs";import{b as re}from"./chunk-C23CFRNB.mjs";import{k as B}from"./chunk-WWQQETNO.mjs";import"./chunk-UHIADXKS.mjs";import{b as $,ba as F,ga as G,ia as U,ka as H}from"./chunk-VVD3XO54.mjs";import{p as b}from"./chunk-DAEEGSYO.mjs";import{$a as v,$b as E,Ab as d,Ib as S,Kb as O,Lb as x,O as u,P as _,Pa as f,T as z,Tb as s,U as l,_b as y,ab as M,da as h,db as T,nb as N,ob as g,pb as A,qb as k,rb as C,sb as j,yb as n,zb as r}from"./chunk-F3A4NT3Y.mjs";import"./chunk-S6KH3LOX.mjs";var me=["*"],ce=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,ue={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},fe={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},le=(()=>{class e extends U{name="divider";theme=ce;classes=fe;inlineStyles=ue;static \u0275fac=(()=>{let i;return function(t){return(i||(i=h(e)))(t||e)}})();static \u0275prov=u({token:e,factory:e.\u0275fac})}return e})();var D=(()=>{class e extends H{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=l(le);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let i;return function(t){return(i||(i=h(e)))(t||e)}})();static \u0275cmp=v({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,t){o&2&&(N("aria-orientation",t.layout)("data-pc-name","divider")("role","separator"),j(t.hostClass),A("justify-content",t.layout==="horizontal"?t.align==="center"||t.align===void 0?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null)("align-items",t.layout==="vertical"?t.align==="center"||t.align===void 0?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null),k("p-divider",!0)("p-component",!0)("p-divider-horizontal",t.layout==="horizontal")("p-divider-vertical",t.layout==="vertical")("p-divider-solid",t.type==="solid")("p-divider-dashed",t.type==="dashed")("p-divider-dotted",t.type==="dotted")("p-divider-left",t.layout==="horizontal"&&(!t.align||t.align==="left"))("p-divider-center",t.layout==="horizontal"&&t.align==="center"||t.layout==="vertical"&&(!t.align||t.align==="center"))("p-divider-right",t.layout==="horizontal"&&t.align==="right")("p-divider-top",t.layout==="vertical"&&t.align==="top")("p-divider-bottom",t.layout==="vertical"&&t.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[y([le]),T],ngContentSelectors:me,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,t){o&1&&(O(),n(0,"div",0),x(1),r())},dependencies:[b,G],encapsulation:2,changeDetection:0})}return e})(),se=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=M({type:e});static \u0275inj=_({imports:[D]})}return e})();var c=class e{constructor(a){this.http=a;this.myAppUrl=re.api,this.myApiUrl="api/v1/turnos"}myAppUrl;myApiUrl;GetInfoTurno(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}`)}static \u0275fac=function(i){return new(i||e)(z($))};static \u0275prov=u({token:e,factory:e.\u0275fac})};var pe=()=>({padding:"6px !import"}),w=class e{areas;turnos;formulario;selectedCity;_fmt=l(I);_toast=l(F);_area=l(R);_turno=l(c);_router=l(B);ngOnInit(){this._turno.GetInfoTurno().subscribe(a=>{this.turnos=a}),this._area.GetInfoAreas().subscribe(a=>{this.areas=a}),this.formulario=new Q({nroFormato:new m("",[p.required,p.maxLength(8)]),cantidad:new m("",p.required),turno:new m("",p.required),area:new m("",p.required),descripcion:new m("",p.required)})}Registrar(){if(this.formulario.valid){let a={starting_order:this.formulario.get("nroFormato")?.value,total:this.formulario.get("cantidad")?.value,id_turn:this.formulario.get("turno")?.value,id_area:this.formulario.get("area")?.value,description:this.formulario.get("descripcion")?.value};console.log("antes de enviar"),this._fmt.createFormat(a).subscribe({next:i=>{this._toast.add({severity:"success",summary:"Registro",detail:i.msj}),this.formulario.reset()},error:i=>{this._toast.add({severity:"warn",summary:"Registro",detail:i.error.msj})}})}}Regresar(){this._router.navigate(["/Dashboard/Formatos"])}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=v({type:e,selectors:[["app-Registro"]],features:[y([I,F,R,c])],decls:33,vars:9,consts:[[1,"p-6"],[1,"surface-card","p-5","shadow-2","border-round","flex-auto"],[1,"flex","flex-row","justify-content-between","align-items-center"],[1,"text-900","font-semibold","text-lg","mt-3"],["label","Regresar","icon","pi pi-arrow-circle-left","severity","secondary",3,"onClick"],[1,"p-element"],["role","separator",1,"p-divider","p-component","p-divider-horizontal","p-divider-solid","p-divider-left"],[1,"p-divider-content"],[1,"formgrid","grid","align-items-baseline",3,"formGroup"],[1,"field","col-3","lg:col-3","md:col-6","sm:col-3"],["for","zip"],["pInputText","","id","zip","type","text","formControlName","nroFormato",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","city"],["pInputText","","id","city","type","text","formControlName","cantidad","pSize","large",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"field","col-12","lg:col-3","md:col-12","sm:col-4"],["for","state"],["optionLabel","name","optionValue","id_turn","formControlName","turno","placeholder","SELECCIONE TURNO",1,"w-full","md:w-56",3,"options"],["optionLabel","name","optionValue","id_areas","formControlName","area","placeholder","SELECCIONE LOS TRIAJES",1,"w-full","md:w-56",3,"options"],[1,"field","col-12"],["for","address"],["id","address","type","text","rows","4","formControlName","descripcion",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"field","col-4"],["pButton","","label","GUARDAR","icon","pi pi-save",3,"click"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"REGISTRO"),r(),n(5,"p-button",4),S("onClick",function(){return o.Regresar()}),r()(),n(6,"p-divider",5)(7,"div",6),d(8,"div",7),r()(),n(9,"form",8)(10,"div",9)(11,"label",10),s(12,"NRO DE FORMATO"),r(),d(13,"input",11),r(),n(14,"div",9)(15,"label",12),s(16,"CANTIDAD"),r(),d(17,"input",13),r(),n(18,"div",14)(19,"label",15),s(20,"TURNO"),r(),d(21,"p-select",16),r(),n(22,"div",14)(23,"label",15),s(24,"TRIAJES"),r(),d(25,"p-select",17),r(),n(26,"div",18)(27,"label",19),s(28,"DESCRIPCION"),r(),d(29,"textarea",20),r(),n(30,"div",21)(31,"button",22),S("click",function(){return o.Registrar()}),r()()()()(),d(32,"p-toast")),i&2&&(f(9),g("formGroup",o.formulario),f(12),C(E(7,pe)),g("options",o.turnos),f(4),C(E(8,pe)),g("options",o.areas))},dependencies:[se,D,ie,te,ee,W,q,J,K,X,Y,Z,b,ae,P,V,L,ne,oe],encapsulation:2})};export{w as default};
