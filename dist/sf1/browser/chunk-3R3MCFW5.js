import{b as s}from"./chunk-S3T4Z7MF.js";import{b as p}from"./chunk-NHLDXA6S.js";import{O as i,T as e}from"./chunk-PNFXW432.js";var l=class r{constructor(t){this.http=t;this.myAppUrl=s.api,this.myApiUrl="api/v1/formatos"}myAppUrl;myApiUrl;getAllFormats(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}`)}createFormat(t){return this.http.post(`${this.myAppUrl}${this.myApiUrl}/crear`,t)}deleteFormat(t){return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/eliminar`,{params:{id:t}})}getAllFormatsSp(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}/Lista`)}updateFormatsDetails(t){return this.http.put(`${this.myAppUrl}${this.myApiUrl}/actualizarEstado/${t}`,{})}comprobar(t,a,o,m){let n={formatsModel:t,nrMin:a,nrMax:o,status:m};return this.http.post(`${this.myAppUrl}${this.myApiUrl}/comprobar/formatos`,n)}getTotalAreaSp(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}/total/Area`)}getTotalFormatosDetallesSp(){return this.http.get(`${this.myAppUrl}${this.myApiUrl}/total/formatos`)}insertComparison(t){return this.http.post(`${this.myAppUrl}${this.myApiUrl}/registrar/comparacion`,t)}static \u0275fac=function(a){return new(a||r)(e(p))};static \u0275prov=i({token:r,factory:r.\u0275fac})};export{l as a};
