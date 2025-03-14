import './polyfills.server.mjs';
import{a as E}from"./chunk-KVQTOGHU.mjs";import{i as X,j as Y}from"./chunk-U522EO7K.mjs";import"./chunk-ST7UGYUJ.mjs";import{i as V,k as H,l as q,m as G}from"./chunk-WWQQETNO.mjs";import{a as Q,b as W}from"./chunk-UHIADXKS.mjs";import{ga as b,ia as J,ka as K}from"./chunk-VVD3XO54.mjs";import{j as U,l as O,p as P}from"./chunk-DAEEGSYO.mjs";import{$ as L,$a as f,Ab as n,Eb as T,Ib as u,Jb as c,Kb as B,Lb as N,Na as j,O as S,P as z,Pa as m,Sb as k,Tb as l,U as d,Ub as g,_b as v,aa as $,ab as D,da as y,db as M,fb as x,ja as R,lc as w,nb as _,ob as s,qb as A,rb as F,sb as C,yb as a,zb as r}from"./chunk-F3A4NT3Y.mjs";import"./chunk-S6KH3LOX.mjs";var re=["*"];function ae(e,p){if(e&1&&(a(0,"span",3),l(1),r()),e&2){let t=c();m(),g(t.label)}}function ne(e,p){if(e&1&&n(0,"span",5),e&2){let t=c(2);C(t.icon),s("ngClass","p-avatar-icon")}}function ie(e,p){if(e&1&&x(0,ne,1,3,"span",4),e&2){let t=c(),i=k(5);s("ngIf",t.icon)("ngIfElse",i)}}function oe(e,p){if(e&1){let t=T();a(0,"img",7),u("error",function(o){L(t);let h=c(2);return $(h.imageError(o))}),r()}if(e&2){let t=c(2);s("src",t.image,j),_("aria-label",t.ariaLabel)}}function le(e,p){if(e&1&&x(0,oe,1,2,"img",6),e&2){let t=c();s("ngIf",t.image)}}var se=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,pe={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},Z=(()=>{class e extends J{name="avatar";theme=se;classes=pe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var me=(()=>{class e extends K{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new R;_componentStyle=d(Z);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(i,o){i&2&&(_("data-pc-name","avatar")("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy),F(o.style),C(o.hostClass),A("p-avatar",!0)("p-component",!0)("p-avatar-circle",o.shape==="circle")("p-avatar-lg",o.size==="large")("p-avatar-xl",o.size==="xlarge")("p-avatar-image",o.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[v([Z]),M],ngContentSelectors:re,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,o){if(i&1&&(B(),N(0),x(1,ae,2,1,"span",2)(2,ie,1,2,"ng-template",null,0,w)(4,le,1,1,"ng-template",null,1,w)),i&2){let h=k(3);m(),s("ngIf",o.label)("ngIfElse",h)}},dependencies:[P,U,O,b],encapsulation:2,changeDetection:0})}return e})(),ee=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=z({imports:[me,b,b]})}return e})();var I=class e{info={};infos=d(E);_R=d(H);ngOnInit(){this.infos.GetInfoUsuario(localStorage.getItem("id")).subscribe(p=>{this.info=p})}CerrarSession(){localStorage.removeItem("id"),localStorage.removeItem("token"),this._R.navigate(["/Login"])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-navbar"]],features:[v([E])],decls:73,vars:4,consts:[[1,"container"],[1,"min-h-screen","flex","relative","lg:static","surface-ground"],[1,"h-screen","surface-section","hidden","lg:block","flex-shrink-0","absolute","lg:static","left-0","top-0","z-1","border-right-1","surface-border","w-18rem","lg:w-6rem"],[1,"flex","flex-column","h-full"],[1,"mt-3","flex","flex-column","justify-content-around","h-full","flex-wrap"],[1,"list-none","px-2","m-0"],["pRipple","","routerLink","/Dashboard/Home","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-1","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"pi","pi-home","mr-2","lg:mr-0","mb-0","lg:mb-2","text-base","lg:text-2xl"],[1,"font-medium","inline","text-base","lg:text-xs","lg:block"],[1,"p-ink","px-2"],["pRipple","","routerLink","/Dashboard/Formatos","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"pi","pi-check-square","mr-2","lg:mr-0","mb-0","lg:mb-2","text-base","lg:text-2xl"],[1,"p-ink",2,"height","111px","width","111px","top","-15.5px","left","7.5px"],["pRipple","","routerLink","/Dashboard/Control","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","px-2","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"pi","pi-calendar","mr-2","lg:mr-0","mb-0","lg:mb-2","text-base","lg:text-2xl"],[1,"font-medium","inline","text-center","text-base","lg:text-xs","lg:block"],["pRipple","","routerLink","/Dashboard/Reportes","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"p-element","pi","pi-chart-line","mr-2","lg:mr-0","mb-0","lg:mb-2","text-base","lg:text-2xl","p-overlay-badge"],[1,"list-none","p-0","m-0"],[1,"flex","justify-content-center","flex-wrap"],[1,"flex","flex-column","align-items-center"],[1,"font-medium","inline","text-800","text-base","lg:block","border-top-1","border-bottom-1","my-2","shadow-2"],["label","","icon"," pi pi-power-off","severity","danger",3,"onClick","rounded"],[1,"router-container"],[1,"w-full","surface-section","lg:hidden"],[1,"p-3","flex","justify-content-around","align-items-center","flex-wrap"],[1,"list-none","flex","flex-wrap","px-2","m-0"],["pRipple","","routerLink","/Dashboard/Home","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","px-2","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"pi","pi-home","mr-2","lg:mr-0","mb-0","lg:mb-2","text-3xl","lg:text-2xl"],[1,"font-medium","text-base","lg:text-xs","hidden","md:block"],["pRipple","","routerLink","/Dashboard/Formatos","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","px-2","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"pi","pi-check-square","mr-2","lg:mr-0","mb-0","lg:mb-2","text-3xl","lg:text-2xl"],[1,"font-medium","text-base","lg:text-xs","lg:block","hidden","md:block"],[1,"pi","pi-calendar","mr-2","lg:mr-0","mb-0","lg:mb-2","text-3xl","lg:text-2xl"],[1,"font-medium","text-center","text-base","lg:text-xs","lg:block","hidden","md:block"],["pRipple","","routerLink","/Dashboard/Reportes","routerLinkActive","text-cyan-600 border-left-2 border-cyan-600",1,"p-ripple","p-element","no-underline","flex","flex-row","lg:flex-column","align-items-center","cursor-pointer","py-3","px-2","lg:justify-content-center","text-800","border-transparent","hover:border-300","transition-duration-150","transition-colors"],[1,"p-element","pi","pi-chart-line","mr-2","lg:mr-0","mb-0","lg:mb-2","text-3xl","lg:text-2xl","p-overlay-badge"],[1,"flex","justify-content-center","align-content-center","flex-wrap"],[1,"font-medium","text-800","text-base","lg:block","border-top-1","border-bottom-1","my-2","shadow-2","hidden","md:block"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"a",6),n(8,"i",7),a(9,"span",8),l(10,"Inicio"),r(),n(11,"span",9),r()(),a(12,"li")(13,"a",10),n(14,"i",11),a(15,"span",8),l(16,"Formatos"),r(),n(17,"span",12),r()(),a(18,"li")(19,"a",13),n(20,"i",14),a(21,"span",15),l(22,"Control de formatos"),r(),n(23,"span",12),r()(),a(24,"li")(25,"a",16),n(26,"i",17),a(27,"span",8),l(28,"Reportes"),r(),n(29,"span",12),r()()(),a(30,"ul",18)(31,"li")(32,"div",19)(33,"div",20)(34,"div",21),l(35),r(),a(36,"p-button",22),u("onClick",function(){return i.CerrarSession()}),r()()()()()()()(),a(37,"div",23)(38,"div",24)(39,"div",25)(40,"ul",26)(41,"li")(42,"a",27),n(43,"i",28),a(44,"span",29),l(45,"Inicio"),r(),n(46,"span",9),r()(),a(47,"li")(48,"a",30),n(49,"i",31),a(50,"span",32),l(51,"Formatos"),r(),n(52,"span",12),r()(),a(53,"li")(54,"a",13),n(55,"i",33),a(56,"span",34),l(57,"Control de formatos"),r(),n(58,"span",12),r()(),a(59,"li")(60,"a",35),n(61,"i",36),a(62,"span",32),l(63,"Reportes"),r(),n(64,"span",12),r()()(),a(65,"ul",18)(66,"li")(67,"div",37)(68,"div",20)(69,"div",38),l(70),r(),a(71,"p-button",22),u("onClick",function(){return i.CerrarSession()}),r()()()()()()(),n(72,"router-outlet"),r()()()),t&2&&(m(35),g(i.info.username==null?null:i.info.username.toUpperCase()),m(),s("rounded",!0),m(34),g(i.info.username==null?null:i.info.username.toUpperCase()),m(),s("rounded",!0))},dependencies:[ee,W,Q,Y,X,V,q,G],styles:[".router-container[_ngcontent-%COMP%]{flex-grow:1;height:100vh;overflow-y:auto}"]})};export{I as default};
