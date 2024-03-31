var y=Object.defineProperty,I=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&p(t,o,e[o]);if(_)for(var o of _(e))k.call(e,o)&&p(t,o,e[o]);return t},v=(t,e)=>I(t,w(e));import{a as c}from"./axios.9e3aeb74.js";import{D as E,S as $,F as U}from"./Filter.935f265c.js";import{_ as S}from"./index.fc511753.js";import{r as d,o as N,a as D,h as s,s as f,t as j,b as u,w as T,p as R,k as V}from"./vendor.63776c49.js";const B={components:{Datagrid:E,Search:$,Filter:U},data(){return{headers:[{text:"Code Apog\xE9e",value:"code_apogee"},{text:"Nom",value:"nom"},{text:"Parcours",value:"parcours"},{text:"Vol.H CM",value:"volume_horaire_cm"},{text:"Nb.Gr CM",value:"groupes_cm_count"},{text:"Vol.H TD",value:"volume_horaire_td"},{text:"Nb.Gr TD",value:"groupes_td_count"}],niveau:"",anneeId:this.$route.params.anneeId,niveauId:this.$route.params.niveauId,ues:[],searchQuery:"",selectedFilter:"",filterOptions:[{text:"Code Apog\xE9e",value:"code_apogee"},{text:"Nom",value:"nom"},{text:"Parcours",value:"parcours"},{text:"Vol.H CM",value:"volume_horaire_cm"},{text:"Nb.Gr CM",value:"groupes_cm_count"},{text:"Vol.H TD",value:"volume_horaire_td"},{text:"Nb.Gr TD",value:"groupes_td_count"}]}},methods:{fetchNiveau(){const t=localStorage.getItem("userToken");c.get(`http://localhost:8000/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}`,{headers:{Authorization:`Bearer ${t}`}}).then(e=>{console.log(e.data),this.niveau=`${e.data.niveau} - ${e.data.annee_universitaire.annee_debut}/${e.data.annee_universitaire.annee_fin}`}).catch(e=>console.error("Erreur lors de la r\xE9cup\xE9ration des parcours de l'ann\xE9e",e))},fetchUEs(){const t=localStorage.getItem("userToken");c.get(`http://localhost:8000/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/ues`,{headers:{Authorization:`Bearer ${t}`}}).then(e=>{console.log(e.data),this.ues=e.data.map(o=>v(m({},o),{parcours:o.parcours.map(a=>a.nom).join(",")}))}).catch(e=>console.error("Erreur lors de la r\xE9cup\xE9ration des parcours de l'ann\xE9e",e))},createUE(){this.$router.push({name:"CreateUE",params:{anneeId:this.anneeId}})},handleClick(t){},addRow(t){this.$router.push({name:"ListGroupes",params:{ueId:t.id}})},deleteRow(t){if(confirm(`\xCAtes-vous s\xFBr de vouloir supprimer l'UE : ${t.nom}  ?`)){const o=localStorage.getItem("userToken");c.delete(`http://localhost:8000/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/ues/delete/${t.id}`,{headers:{Authorization:`Bearer ${o}`}}).then(()=>{alert("UE supprim\xE9e"),this.fetchUEs()}).catch(a=>{console.error("Erreur lors de la suppression de l'UE :",a),alert("\xC9chec de la suppression  de l'UE.")})}}},computed:{filteredRows(){return this.ues.filter(t=>{const e=this.searchQuery.toLowerCase();return Object.keys(t).some(o=>String(t[o]).toLowerCase().includes(e))})}},created(){this.fetchNiveau(),this.fetchUEs()}},l=t=>(R("data-v-6b3d4c73"),t=t(),V(),t),F={class:"flex flex-col h-screen"},L={class:"text-center text-5xl font-bold my-4"},A=l(()=>s("br",null,null,-1)),G={class:"flex-1 flex flex-col items-center justify-center"},H={class:"w-full max-w-6xl px-4"},M={class:"flex justify-between items-center mb-2"},z={class:"flex gap-2"},O={class:"shadow-lg rounded-lg overflow-hidden"},Q={class:"flex items-center justify-center space-x-2"},P=["onClick"],q=l(()=>s("span",{class:"material-symbols-outlined"}," groups ",-1)),J=[q],K=["onClick"],W=l(()=>s("span",{class:"material-icons"},"edit",-1)),X=[W],Y=["onClick"],Z=l(()=>s("span",{class:"material-icons"},"delete",-1)),ee=[Z];function te(t,e,o,a,n,i){const x=d("Search"),g=d("Filter"),b=d("Datagrid");return N(),D("div",F,[s("h1",L,[f("Les UEs du "),A,f(" "+j(this.niveau),1)]),s("main",G,[s("div",H,[s("div",M,[s("div",z,[u(x,{"onUpdate:query":e[0]||(e[0]=r=>n.searchQuery=r)}),u(g,{options:n.filterOptions,"onUpdate:filter":e[1]||(e[1]=r=>n.selectedFilter=r)},null,8,["options"])]),s("button",{onClick:e[2]||(e[2]=r=>i.createUE()),class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150"},"Nouvelle UE")]),s("div",O,[u(b,{headers:n.headers,rows:i.filteredRows,actions:""},{"row-actions":T(({row:r})=>[s("div",Q,[s("button",{onClick:h=>i.addRow(r),class:"flex items-center justify-center p-2 rounded text-gray-500 hover:text-gray-700 transition duration-150"},J,8,P),s("button",{onClick:h=>t.editRow(r),class:"flex items-center justify-center p-2 rounded text-gray-500 hover:text-gray-700 transition duration-150"},X,8,K),s("button",{onClick:h=>i.deleteRow(r),class:"flex items-center justify-center p-2 rounded text-gray-500 hover:text-red-500 transition duration-150"},ee,8,Y)])]),_:1},8,["headers","rows"])])])])])}var ie=S(B,[["render",te],["__scopeId","data-v-6b3d4c73"]]);export{ie as default};