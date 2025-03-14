import './polyfills.server.mjs';
import{b as Ie}from"./chunk-UWFKHRVV.mjs";import{a as Ce}from"./chunk-KVQTOGHU.mjs";import{a as _e,b as xe}from"./chunk-UC6RYBG7.mjs";import{b as we}from"./chunk-ELAHJ3P5.mjs";import"./chunk-ST7UGYUJ.mjs";import{a as te,b as Q}from"./chunk-UHIADXKS.mjs";import{D as X,H as P,J as Y,U as Z,Z as he,fa as ye,ga as ee,ia as Te,ka as R,p as fe,v as ve,w as ge,x as M}from"./chunk-VVD3XO54.mjs";import{j,k as be,n as me,p as y,s as J}from"./chunk-DAEEGSYO.mjs";import{$ as C,$a as p,Ab as h,Cc as O,Db as G,Dc as de,Eb as E,Hc as r,Ib as _,Ic as ue,Jb as b,Kb as $,Lb as L,Ma as oe,Mb as H,N as A,Nb as F,O as ne,Ob as v,P as ae,Pa as l,Pb as g,Tb as U,U as x,Ub as le,Ya as V,_b as z,aa as w,ab as se,ac as ce,bc as pe,da as I,db as B,eb as re,fb as d,ma as T,nb as m,oa as S,ob as u,qb as k,tb as D,yb as c,zb as f}from"./chunk-F3A4NT3Y.mjs";import"./chunk-S6KH3LOX.mjs";var Le=["previcon"],Fe=["nexticon"],Oe=["content"],Re=["prevButton"],Ae=["nextButton"],Me=["inkbar"],Pe=["tabs"],N=["*"],Ne=t=>({"p-tablist-viewport":t});function Se(t,o){t&1&&G(0)}function Ve(t,o){if(t&1&&d(0,Se,1,0,"ng-container",11),t&2){let e=b(2);u("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function He(t,o){t&1&&h(0,"ChevronLeftIcon")}function ze(t,o){if(t&1){let e=E();c(0,"button",10,3),_("click",function(){C(e);let i=b();return w(i.onPrevButtonClick())}),d(2,Ve,1,1,"ng-container")(3,He,1,0,"ChevronLeftIcon"),f()}if(t&2){let e=b();m("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),l(2),D(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function je(t,o){t&1&&G(0)}function Qe(t,o){if(t&1&&d(0,je,1,0,"ng-container",11),t&2){let e=b(2);u("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function Ke(t,o){t&1&&h(0,"ChevronRightIcon")}function qe(t,o){if(t&1){let e=E();c(0,"button",12,4),_("click",function(){C(e);let i=b();return w(i.onNextButtonClick())}),d(2,Qe,1,1,"ng-container")(3,Ke,1,0,"ChevronRightIcon"),f()}if(t&2){let e=b();m("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),l(2),D(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function We(t,o){t&1&&L(0)}var Ge=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${t("tabs.tab.gap")};
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Ue={root:({props:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable}]},Be=(()=>{class t extends Te{name="tabs";theme=Ge;classes=Ue;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var De=(()=>{class t extends R{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=x(A(()=>K));isPrevButtonEnabled=S(!1);isNextButtonEnabled=S(!1);resizeObserver;showNavigators=r(()=>this.pcTabs.showNavigators());tabindex=r(()=>this.pcTabs.tabindex());scrollable=r(()=>this.pcTabs.scrollable());constructor(){super(),ue(()=>{this.pcTabs.value(),J(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&J(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,n=P(e),i=Math.abs(e.scrollLeft)-n,a=i<=0?0:i;e.scrollLeft=Y(e)?-1*a:a}onNextButtonClick(){let e=this.content.nativeElement,n=P(e)-this.getVisibleButtonWidths(),i=e.scrollLeft+n,a=e.scrollWidth-n,s=i>=a?a:i;e.scrollLeft=Y(e)?-1*s:s}updateButtonState(){let e=this.content?.nativeElement,n=this.el?.nativeElement,{scrollWidth:i,offsetWidth:a}=e,s=Math.abs(e.scrollLeft),W=P(e);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(n.offsetWidth>=a&&s!==i-W)}updateInkBar(){let e=this.content.nativeElement,n=this.inkbar.nativeElement,i=this.tabs.nativeElement,a=ve(e,'[data-pc-name="tab"][data-p-active="true"]');n.style.width=fe(a)+"px",n.style.left=X(a).left-X(i).left+"px"}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,n=this.nextButton?.nativeElement;return[e,n].reduce((i,a)=>a?i+P(a):i,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["p-tablist"]],contentQueries:function(n,i,a){if(n&1&&(H(a,Le,4),H(a,Fe,4),H(a,ye,4)),n&2){let s;v(s=g())&&(i.prevIconTemplate=s.first),v(s=g())&&(i.nextIconTemplate=s.first),v(s=g())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(F(Oe,5),F(Re,5),F(Ae,5),F(Me,5),F(Pe,5)),n&2){let a;v(a=g())&&(i.content=a.first),v(a=g())&&(i.prevButton=a.first),v(a=g())&&(i.nextButton=a.first),v(a=g())&&(i.inkbar=a.first),v(a=g())&&(i.tabs=a.first)}},hostVars:5,hostBindings:function(n,i){n&2&&(m("data-pc-name","tablist"),k("p-tablist",!0)("p-component",!0))},features:[B],ngContentSelectors:N,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(n,i){if(n&1){let a=E();$(),d(0,ze,4,4,"button",5),c(1,"div",6,0),_("scroll",function(W){return C(a),w(i.onScroll(W))}),c(3,"div",7,1),L(5),h(6,"span",8,2),f()(),d(8,qe,4,4,"button",9)}n&2&&(D(i.showNavigators()&&i.isPrevButtonEnabled()?0:-1),l(),u("ngClass",ce(4,Ne,i.scrollable())),l(5),m("data-pc-section","inkbar"),l(2),D(i.showNavigators()&&i.isNextButtonEnabled()?8:-1))},dependencies:[y,j,me,_e,xe,Q,te,ee],encapsulation:2,changeDetection:0})}return t})(),Je=(()=>{class t extends R{value=V();disabled=T(!1,{transform:O});pcTabs=x(A(()=>K));pcTabList=x(A(()=>De));ripple=r(()=>this.config.ripple());id=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=r(()=>Z(this.pcTabs.value(),this.value()));tabindex=r(()=>this.active()?this.pcTabs.tabindex():-1);onFocus(e){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onArrowRightKey(e){let n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}findNextTab(e,n=!1){let i=n?e:e.nextElementSibling;return i?M(i,"data-p-disabled")||M(i,"data-pc-section")==="inkbar"?this.findNextTab(i):i:null}findPrevTab(e,n=!1){let i=n?e:e.previousElementSibling;return i?M(i,"data-p-disabled")||M(i,"data-pc-section")==="inkbar"?this.findPrevTab(i):i:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,n){ge(n),this.scrollInView(n)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tab"]],hostVars:16,hostBindings:function(n,i){n&1&&_("focus",function(s){return i.onFocus(s)})("click",function(s){return i.onClick(s)})("keydown",function(s){return i.onKeyDown(s)}),n&2&&(m("data-pc-name","tab")("id",i.id())("aria-controls",i.ariaControls())("role","tab")("aria-selected",i.active())("data-p-disabled",i.disabled())("data-p-active",i.active())("tabindex",i.tabindex()),k("p-tab",!0)("p-tab-active",i.active())("p-disabled",i.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[re([te]),B],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&($(),L(0))},dependencies:[y,ee],encapsulation:2,changeDetection:0})}return t})(),Xe=(()=>{class t extends R{pcTabs=x(A(()=>K));value=V(void 0);id=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=r(()=>Z(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(n,i){n&2&&(m("data-pc-name","tabpanel")("id",i.id())("role","tabpanel")("aria-labelledby",i.ariaLabelledby())("data-p-active",i.active()),k("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B],ngContentSelectors:N,decls:1,vars:1,template:function(n,i){n&1&&($(),d(0,We,1,0)),n&2&&D(i.active()?0:-1)},dependencies:[y],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t extends R{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(n,i){n&2&&(m("data-pc-name","tabpanels")("role","presentation"),k("p-tabpanels",!0)("p-component",!0))},features:[B],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&($(),L(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return t})(),K=(()=>{class t extends R{value=V(void 0);scrollable=T(!1,{transform:O});lazy=T(!1,{transform:O});selectOnFocus=T(!1,{transform:O});showNavigators=T(!0,{transform:O});tabindex=T(0,{transform:de});id=S(he("pn_id_"));_componentStyle=x(Be);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=p({type:t,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(n,i){n&2&&(m("data-pc-name","tabs")("id",i.id),k("p-tabs",!0)("p-tabs-scrollable",i.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[z([Be]),B],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&($(),L(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return t})(),Ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=ae({imports:[K,Ye,Xe,De,Je]})}return t})();var q=class t{content="";ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-rende-html"]],inputs:{content:"content"},decls:1,vars:1,consts:[[1,"p-3",3,"innerHTML"]],template:function(e,n){e&1&&h(0,"div",0),e&2&&u("innerHTML",n.content,oe)},encapsulation:2})};var et=(t,o)=>({"bg-primary text-white":t,"hover:surface-100 text-700":o});function tt(t,o){if(t&1){let e=E();c(0,"li",12)(1,"a",13),_("click",function(){let i=C(e).index,a=b();return w(a.selectTab(i))}),c(2,"span",14),U(3),f()()()}if(t&2){let e=o.$implicit,n=o.index,i=b();l(),u("ngClass",pe(2,et,i.selectedTab===n,i.selectedTab!==n)),l(2),le(e.label)}}var ie=class t{listaServicios=[];ngOnInit(){this.listaServicios=["MEDICINA GENERAL","OBSTETRICIA","LABORATORIO","CONTROL DE NI\xD1O","FARMACIA","TBC","DENGUE","ECOGRAFIA","ADMISION","CAJA"],this.selectTab(0)}selectedTab=0;tabs=[{label:"MEDICINA GENERAL",icon:"pi pi-home"},{label:"OBSTETRICIA",icon:"pi pi-users"},{label:"LABORATORIO",icon:"pi pi-shopping-cart"},{label:"CONTROL DE NI\xD1O",icon:"pi pi-user"},{label:"FARMACIA",icon:"pi pi-cog"},{label:"TBC",icon:"pi pi-cog"},{label:"DENGUE",icon:"pi pi-cog"},{label:"ECOGRAFIA",icon:"pi pi-cog"},{label:"ADMISION",icon:"pi pi-cog"},{label:"CAJA",icon:"pi pi-cog"}];selectedCategory="cocina";contents={medicina:`
     <p class="m-0 pt-2">
        Como establecimiento categor\xEDa I-3 no contamos con especialistas
        asignados. Las principales finalidades de la atenci\xF3n m\xE9dica son:
        
      </p>
      <ul class="px-5">
        <li>Prevenir enfermedades a trav\xE9s de medidas sanitarias que fortalezcan el sistema
          inmune de los pacientes.
        </li>
        <li>Diagnosticar a tiempo condiciones graves de salud para que las personas reciban el
          tratamiento oportuno para recuperarse.
        </li>
        <li>Mantener y promover la salud de los pacientes a trav\xE9s de informaci\xF3n m\xE9dica.
        </li>
        <li>Tratar enfermedades con medicamentos de calidad y/o procedimientos
          quir\xFArgicos realizados por personal capacitado.
        </li>
        <li>Brindarles una mejor calidad de vida a los pacientes en estado terminal.
        </li>
      </ul>
    `,obstetricia:`
       <p class="m-0 pt-2">
          Las funciones obst\xE9tricas y neonatales son actividades relacionadas con la
          identificaci\xF3n, atenci\xF3n, seguimiento y cuidado del proceso de gestaci\xF3n, parto,
          puerperio, atenci\xF3n preconcepcional, prevenci\xF3n de c\xE1ncer de cuello uterino, atenci\xF3n del
          reci\xE9n nacido, planificaci\xF3n familiar, recalcar que no contamos con especialista
          ginecoobstetra. 
        </p>
    `,laboratorio:`
      <p class="m-0 pt-2">
        Las actividades incluyen la recolecci\xF3n de las muestras, el procesamiento,
        el an\xE1lisis y la presentaci\xF3n de informes de acuerdo a necesidad de establecimiento. Los
        procesos mas complejos y por falta de insumos y aparatos biom\xE9dicos avanzados se
        env\xEDan las muestras a otro establecimiento de mayor capacidad.
      </p>
    `,"control-ni\xF1o":`
      <p class="m-0 pt-2">
        Los primeros a\xF1os de vida de los seres humanos son muy importantes
        para potenciar su crecimiento y desarrollo. El profesional de salud en este caso las
        Licenciadas de Enfermer\xEDa realiza las siguientes evaluaciones y actividades:
        
      </p>
      <ul class="px-5">
        <li>Eval\xFAa el peso y talla de tu beb\xE9, ni\xF1o o ni\xF1a.</li>
        <li>Eval\xFAa sus habilidades psicomotoras.</li>
        <li>Vacuna al beb\xE9, ni\xF1o o ni\xF1a, seg\xFAn el esquema vigente. </li>
        <li>Entrega suplementos de hierro (gotas o jarabe, seg\xFAn la edad).</li>
        <li>Brinda consejer\xEDa para el cuidado adecuado del menor.</li>
        <li>Descarta enfermedades como la anemia y la parasitosis.</li>
      </ul> 
    `,farmacia:`
      <p class="m-0 p-5">
        Colaborar en las actividades y programas dirigidos a mejorar el uso de
        medicamentos y otros productos farmac\xE9uticos: Entrega y selecci\xF3n de medicamentos y
        otros productos farmac\xE9uticos, gu\xEDas y protocolos farmacoterap\xE9uticos y revisiones
        farmacoterap\xE9uticas.
      </p>
    `,tbc:`
      <p class="m-0 pt-2">
          Contribuir en la lucha contra la tuberculosis, participando en la cobertura de la
          detecci\xF3n, el seguimiento del tratamiento y la calidad del cuidado en la atenci\xF3n de los
          pacientes. Promoci\xF3n de la salud Prevenci\xF3n de TB (vacunas, medidas de bioseguridad y
          control de infecciones, entre otras.) Cuidado integral al paciente y familia en TB, TB-MDR,
          VIH-TB, gestante, poblaciones vulnerables. Educaci\xF3n sanitaria a paciente, familia y
          comunidad. Participaci\xF3n en elaboraci\xF3n de pol\xEDticas
        </p>
    `,dengue:`
     <p class="m-0 pt-2">
        Cumplir los lineamientos de la vigilancia virol\xF3gica del dengue. Garantizar la
        confirmaci\xF3n del 100% de casos de dengue grave (suero) y fatales (tejidos y suero) con la
        toma de muestras. Implementar el monitoreo mensual de los indicadores de la vigilancia
        del dengue (bas\xE1ndose en el protocolo de vigilancia)
        
      </p>
    `,ecografia:`
      <p class="m-0 pt-2">
        La ecograf\xEDa es un procedimiento que permite obtener im\xE1genes de muchas
        de las estructuras de nuestro organismo a trav\xE9s de ondas de ultra frecuencia. Previa
        orden que realiza el medico
      </p>
    `,admision:`
      <p class="m-0 pt-2">
        Se encarga de la custodia, revisi\xF3n y disposici\xF3n de las historias cl\xEDnicas de los
        pacientes previamente ya registrados para sus atenciones posteriores
      </p>
    `,caja:`
      <p class="m-0 pt-2">
          Se encarga de la creaci\xF3n y documentaci\xF3n de las historias cl\xEDnicas de pacientes
          nuevos adem\xE1s de recaudar fondos para abastecer de insumos y materiales que necesite
          el establecimiento para cumplir con al menos los m\xEDnimos est\xE1ndares de atenci\xF3n.
      </p>
    `};selectTab(o){console.log(o),this.selectedTab=o;let e=["medicina","obstetricia","laboratorio","control-ni\xF1o","farmacia","tbc","dengue","ecografia","admision","caja"];this.selectedCategory=e[o]||"medicina"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-Home"]],features:[z([Ce])],decls:16,vars:2,consts:[[1,"surface-ground","px-4","py-5","md:px-6","lg:px-8"],[1,"grid"],[1,"col-12"],[1,"p-3","text-center","bg-blue-500",2,"border-radius","12px"],[1,"text-2xl","font-medium","text-white","mb-2","p-6"],[1,"block-content"],[1,"lg:px-2","md:px-4","px-3","py-2"],[1,"surface-card","p-2","m-0","list-none","flex","overflow-x-auto","select-none"],["class","mr-2",4,"ngFor","ngForOf"],[1,"lg:px-2","md:px-4","px-3","py-1"],[1,"surface-card","p-1","m-0","list-none","flex"],[3,"content"],[1,"mr-2"],[1,"p-ripple","p-element","cursor-pointer","px-4","py-3","flex","align-items-center","border-round","transition-colors","transition-duration-150",3,"click","ngClass"],[1,"font-medium","text-nowrap","lg:text-2lg"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),U(5,"Bienvenido a Centro America"),f()()(),c(6,"div",2)(7,"div",5)(8,"div",6)(9,"ul",7),d(10,tt,4,5,"li",8),f()()()(),c(11,"div",2)(12,"div",5)(13,"div",9)(14,"div",10),h(15,"app-rende-html",11),f()()()()()()),e&2&&(l(10),u("ngForOf",n.tabs),l(5),u("content",n.contents[n.selectedCategory]))},dependencies:[we,Q,Ie,Ee,y,j,be,q],styles:[".text-nowrap[_ngcontent-%COMP%]{white-space:nowrap}"]})};export{ie as default};
