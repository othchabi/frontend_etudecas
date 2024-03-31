var v=Object.defineProperty,y=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))_.call(e,s)&&c(t,s,e[s]);if(f)for(var s of f(e))b.call(e,s)&&c(t,s,e[s]);return t},h=(t,e)=>y(t,U(e));import{a as g}from"./axios.9e3aeb74.js";import{o as m,a as p,h as a,z as k,x as n,y as d,A as D,F as N,B as S,t as B}from"./vendor.63776c49.js";import{_ as V}from"./index.fc511753.js";const M={data(){return{form:{id:null,nom:"",prenom:"",username:"",password:"",roles:[]},allRoles:[{id:1,name:"Enseignant"},{id:3,name:"Responsable ann\xE9e"},{id:2,name:"Responsable master"},{id:4,name:"Administrateur"}],originalData:{}}},methods:{fetchUserData(){const t=this.$route.params.userId,e=localStorage.getItem("userToken");g.get(`http://localhost:8000/api/user/${t}`,{headers:{Authorization:`Bearer ${e}`}}).then(s=>{const{id:i,nom:r,prenom:l,username:o,roles:x}=s.data[0];this.form=h(u({},this.form),{id:i,nom:r,prenom:l,username:o,roles:x.map(w=>w.pivot.role_id)}),this.originalData=JSON.parse(JSON.stringify(this.form))}).catch(s=>{console.error("Failed to fetch user data:",s)})},editUser(){const t={};for(const i in this.form)JSON.stringify(this.form[i])!==JSON.stringify(this.originalData[i])&&(t[i]=this.form[i]);if("password"in t&&!t.password&&delete t.password,console.log("Data to update:",t),Object.keys(t).length===0){alert("No changes detected.");return}const e=localStorage.getItem("userToken"),s=u({},this.form);s.password||delete s.password,console.log(s),g.post(`http://localhost:8000/api/user/edit/${this.form.id}`,s,{headers:{Authorization:`Bearer ${e}`}}).then(()=>{alert("User updated successfully!"),this.$router.push({name:"ListUsers"})}).catch(i=>{console.error("There was an error updating the user:",i.response.data),alert("Failed to update user. "+i.response.data.message)})}},created(){this.fetchUserData()}},O={class:"flex flex-col h-screen"},A=a("h1",{class:"text-center text-5xl font-bold my-4"},"Modifier l'Utilisateur",-1),F={class:"flex-1 flex flex-col items-center justify-center"},I={class:"w-full max-w-6xl px-4"},J={class:"shadow-lg rounded-lg overflow-hidden p-8"},R=["value"],T=a("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150"},"Modifier",-1);function q(t,e,s,i,r,l){return m(),p("div",O,[A,a("main",F,[a("div",I,[a("div",J,[a("form",{onSubmit:e[5]||(e[5]=k((...o)=>l.editUser&&l.editUser(...o),["prevent"])),class:"flex flex-col gap-4"},[n(a("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.form.nom=o),placeholder:"Nom",class:"input",required:""},null,512),[[d,r.form.nom]]),n(a("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.form.prenom=o),placeholder:"Pr\xE9nom",class:"input",required:""},null,512),[[d,r.form.prenom]]),n(a("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.form.username=o),placeholder:"Nom d'utilisateur",class:"input",required:""},null,512),[[d,r.form.username]]),n(a("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.form.password=o),placeholder:"Nouveau mot de passe (laisser vide si inchang\xE9)",type:"password",class:"input"},null,512),[[d,r.form.password]]),n(a("select",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.form.roles=o),multiple:"",class:"input"},[(m(!0),p(N,null,S(r.allRoles,o=>(m(),p("option",{key:o.id,value:o.id},B(o.name),9,R))),128))],512),[[D,r.form.roles]]),T],32)])])])])}var P=V(M,[["render",q]]);export{P as default};