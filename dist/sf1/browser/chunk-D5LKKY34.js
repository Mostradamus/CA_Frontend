import{O as m,ha as d,ja as u}from"./chunk-B3P2FQNP.js";import{$a as s,Cb as c,Db as l,O as a,Sb as p,Ya as r,ca as o,lc as f}from"./chunk-JBQC2IQB.js";var h={api:"https://centro-america.cloud.elastika.pe/"};var g=["*"],b=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,y=(()=>{class e extends d{name="baseicon";inlineStyles=b;static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})();var M=(()=>{class e extends u{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=m(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275cmp=r({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",f],styleClass:"styleClass"},features:[p([y]),s],ngContentSelectors:g,decls:1,vars:0,template:function(i,n){i&1&&(c(),l(0))},encapsulation:2,changeDetection:0})}return e})();export{M as a,h as b};
