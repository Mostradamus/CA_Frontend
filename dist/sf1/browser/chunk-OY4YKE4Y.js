import{b as n}from"./chunk-S3T4Z7MF.js";import{b as s}from"./chunk-NHLDXA6S.js";import{O as e,T as p}from"./chunk-PNFXW432.js";var a=class t{constructor(r){this.http=r;this.myAppUrl=n.api,this.myApiUrl="api/v1/areas"}myAppUrl;myApiUrl;GetInfoAreas(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}`)}GetInfoAreasRevision(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}/revision`)}GetInfoAreasRevisionDetalle(r,i,o,m){return this.http.get(`${this.myAppUrl}${this.myApiUrl}/detalles/${r}/estado/${i}`,{params:{fechaInicio:o,fechaFin:m}})}static \u0275fac=function(i){return new(i||t)(p(s))};static \u0275prov=e({token:t,factory:t.\u0275fac})};export{a};
