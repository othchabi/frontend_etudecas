var v=Object.defineProperty,A=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))b.call(e,n)&&p(t,n,e[n]);return t},m=(t,e)=>A(t,x(e));import{a as f}from"./axios.9e3aeb74.js";import{o as l,a as d,h as o,z as y,x as _,y as I,A as S,F as U,B as k,p as w,k as B,t as C}from"./vendor.63776c49.js";import{_ as N}from"./index.fc511753.js";const z={data(){return{form:{annee:"",selectedAnneeId:""},anneesUniversitaires:[]}},created(){this.fetchAnneesUniversitaires()},methods:{fetchAnneesUniversitaires(){const t=localStorage.getItem("userToken");f.get("http://localhost:8000/api/annee-universitaire",{headers:{Authorization:`Bearer ${t}`}}).then(e=>{console.log(e.data),this.anneesUniversitaires=e.data.map(n=>m(h({},n),{annee_universitaire:`${n.annee_debut}/${n.annee_fin}`}))}).catch(e=>console.error("Erreur lors de la r\xE9cup\xE9ration des formations:",e))},createAnnee(){console.log(this.form);const[t,e]=this.form.annee.split("/").map(Number),n=this.form.selectedAnneeId==""?"http://localhost:8000/api/annee-universitaire/create":"http://localhost:8000/api/annee-universitaire/copy";f.post(n,{annee_debut:t,annee_fin:e},{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}}).then(()=>{this.$router.push({name:"AnneeList"})}).catch(i=>{console.error("Erreur lors de la cr\xE9ation de l' Ann\xE9e :",i.response.data),alert("\xC9chec de la cr\xE9ation de l' Ann\xE9e. "+i.response.data.message)})},onNiveauChange(){this.form.groupe_ids=[],this.form.parcours_ids=[]}}},a=t=>(w("data-v-406aa93a"),t=t(),B(),t),E={class:"flex flex-col h-screen"},M=a(()=>o("h1",{class:"text-center text-5xl font-bold my-4"},"Cr\xE9er une Nouvelle Ann\xE9e Universitaire",-1)),T={class:"flex-1 flex flex-col items-center justify-center"},V={class:"w-full max-w-6xl px-4"},D={class:"shadow-lg rounded-lg overflow-hidden p-8"},F=a(()=>o("h2",{class:"text-lg font-semibold"},"Ann\xE9e Universitaire",-1)),L=a(()=>o("option",{disabled:"",value:""},"A partir d'une ann\xE9e universitaire",-1)),$=["value"],j=a(()=>o("button",{type:"submit",class:"btn"},"Cr\xE9er Ann\xE9e Universitaire",-1));function q(t,e,n,i,r,c){return l(),d("div",E,[M,o("main",T,[o("div",V,[o("div",D,[o("form",{onSubmit:e[3]||(e[3]=y((...s)=>c.createAnnee&&c.createAnnee(...s),["prevent"])),class:"flex flex-col gap-6"},[F,_(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>r.form.annee=s),placeholder:"N/N+1",class:"input",required:""},null,512),[[I,r.form.annee]]),_(o("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.form.selectedAnneeId=s),onChange:e[2]||(e[2]=(...s)=>t.onAnneeSelect&&t.onAnneeSelect(...s)),class:"input"},[L,(l(!0),d(U,null,k(r.anneesUniversitaires,s=>(l(),d("option",{key:s.id,value:s.id},C(s.annee_universitaire),9,$))),128))],544),[[S,r.form.selectedAnneeId]]),j],32)])])])])}var O=N(z,[["render",q],["__scopeId","data-v-406aa93a"]]);export{O as default};
