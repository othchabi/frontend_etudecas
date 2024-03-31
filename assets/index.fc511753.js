import{u as k,c as E,r as L,o as i,a,b,V as T,d as N,e as U,f as C,g as S,h as o,i as $,j as c,t as w,n as F,p as q,k as G,l as j,m as M,q as B}from"./vendor.63776c49.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function _(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(n){if(n.ep)return;n.ep=!0;const l=_(n);fetch(n.href,l)}};H();const W={class:"app"},z={__name:"App",setup(e){const r=k(),_=E(()=>r.getters.isAuthenticated);return console.log(_.value),(t,n)=>{const l=L("router-view");return i(),a("div",W,[b(l)])}}},K="modulepreload",I={},J="/upjv/",s=function(r,_){return!_||_.length===0?r():Promise.all(_.map(t=>{if(t=`${J}${t}`,t in I)return;I[t]=!0;const n=t.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${l}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":K,n||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),n)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",p)})})).then(()=>r())};function R(){return{isAuthenticated:!1,userRoles:[],userFirstName:"",userLastName:""}}const Q=new T({key:"my-app-store",storage:window.localStorage,reducer:e=>({isAuthenticated:e.isAuthenticated,userRoles:e.userRoles,userFirstName:e.userFirstName,userLastName:e.userLastName})}),D=N({plugins:[Q.plugin],state:R,mutations:{setAuth(e,r){e.isAuthenticated=r},setUserRoles(e,r){e.userRoles=r},setUserFirstName(e,r){e.userFirstName=r},setUserLastName(e,r){e.userLastName=r},resetState(e){Object.assign(e,R())}},actions:{login({commit:e},r){e("setAuth",!0)},logout({commit:e}){e("resetState")},register({commit:e},r){e("setAuth",!0)}},getters:{isAuthenticated(e){return e.isAuthenticated},getUserRoles(e){return e.userRoles},getUserFirstName(e){return e.userFirstName},getUserLastName(e){return e.userLastName}}});var X="/upjv/assets/logo.357d9cea.png";var P=(e,r)=>{const _=e.__vccOpts||e;for(const[t,n]of r)_[t]=n;return _};const u=e=>(q("data-v-05767a5c"),e=e(),G(),e),Y={class:"logo"},Z=["src"],ee=u(()=>o("span",{class:"material-icons"},"keyboard_double_arrow_right",-1)),te=[ee],se=u(()=>o("h3",null,"Menu",-1)),oe={class:"menu"},ne=u(()=>o("div",{class:"button",to:{name:"Attente"}},[o("span",{class:"material-icons"},"pause"),o("span",{class:"text"},"Actions En Attente")],-1)),re=u(()=>o("span",{class:"material-icons"},"school",-1)),ie=u(()=>o("span",{class:"text"},"Gestion des enseignements",-1)),ae=[re,ie],_e={key:1,class:"sub-menu"},ue=u(()=>o("span",{class:"text text-light hover:text-primary"},"Les Enseignements",-1)),ce=[ue],le={key:1,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},de=u(()=>o("span",{class:"text text-light hover:text-primary"},"Les Enseignants",-1)),me=[de],pe=u(()=>o("span",{class:"material-icons"},"hourglass_empty",-1)),he=u(()=>o("span",{class:"text"},"Attribution des heures",-1)),ve=[pe,he],Ee={key:3,class:"sub-menu"},ge={key:0,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Ae=u(()=>o("span",{class:"text text-light hover:text-primary"},"Mes Demandes",-1)),fe=[Ae],Le={key:1,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},be=u(()=>o("span",{class:"text text-light hover:text-primary"},"Demandes Re\xE7ues",-1)),ye=[be],Ie={key:2,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Re=u(()=>o("span",{class:"text text-light hover:text-primary"},"Mes Voeux",-1)),ke=[Re],De={key:3,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Pe=u(()=>o("span",{class:"text text-light hover:text-primary"},"Voeux Re\xE7ues",-1)),xe=[Pe],Ve={key:4,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Oe=u(()=>o("span",{class:"text text-light hover:text-primary"},"UEs avec heures manquantes",-1)),Te=[Oe],Ne=u(()=>o("span",{class:"material-icons"},"description",-1)),Ue=u(()=>o("span",{class:"text"},"Documentation Et Validation Des Heures",-1)),Ce=[Ne,Ue],Se={key:5,class:"sub-menu"},$e={key:0,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},we=u(()=>o("span",{class:"text"},"Mes Demandes de fiche d'intervention semestrielles",-1)),Fe=[we],qe={key:1,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Ge=u(()=>o("span",{class:"text"},"Voir les demandes de fiche d'intervention semestrielles",-1)),je=[Ge],Me={key:2,class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Be=u(()=>o("span",{class:"text"},"G\xE9n\xE9ration document de comparaison similaire \xE0 la fiche des services effectu\xE9s",-1)),He=[Be],We=u(()=>o("span",{class:"material-icons"},"admin_panel_settings",-1)),ze=u(()=>o("span",{class:"text"},"Administration",-1)),Ke=[We,ze],Je={key:7,class:"sub-menu"},Qe=u(()=>o("span",{class:"text"},"Utilisateurs En Attente",-1)),Xe=[Qe],Ye=u(()=>o("span",{class:"text"},"Tous les utilisateurs",-1)),Ze=[Ye],et={key:0,class:"user-info flex flex-col justify-end"},tt={__name:"Sidebar",setup(e){const r=U(),_=k(),t=E(()=>_.state.userRoles),n=E(()=>_.getters.getUserFirstName),l=E(()=>_.getters.getUserLastName),d=E(()=>`${n.value} ${l.value}`);console.log("mes roles :",t);const h=C(localStorage.getItem("is_expanded")==="true"),p=S({actions:!1,enseignements:!1,attribution:!1,documentation:!1,utilisateurs:!1}),V=()=>{h.value=!h.value,Object.keys(p).forEach(v=>{p[v]=!1}),localStorage.setItem("is_expanded",h.value)},g=v=>{p[v]=!p[v]},A=v=>{r.push({name:v})},O=()=>{_.commit("setAuth",!1),_.commit("setUserRoles",[]),_.commit("setUserFirstName",""),_.commit("setUserLastName",""),localStorage.removeItem("userToken"),window.location="/login"};return(v,m)=>(i(),a("aside",{class:F(`${h.value?"is-expanded":""}`)},[o("div",Y,[o("img",{src:$(X),alt:"Vue"},null,8,Z)]),o("div",{class:"menu-toggle-wrap"},[o("button",{class:"menu-toggle",onClick:V},te)]),se,o("div",oe,[ne,t.value.includes("responsable_master")?(i(),a("div",{key:0,onClick:m[0]||(m[0]=f=>g("enseignements")),class:"button"},ae)):c("",!0),p.enseignements?(i(),a("div",_e,[t.value.includes("responsable_master")?(i(),a("div",{key:0,onClick:m[1]||(m[1]=()=>A("AnneeList")),class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},ce)):c("",!0),t.value.includes("responsable_master")?(i(),a("div",le,me)):c("",!0)])):c("",!0),t.value.includes("enseignant")||t.value.includes("responsable_master")?(i(),a("div",{key:2,onClick:m[2]||(m[2]=f=>g("attribution")),class:"button"},ve)):c("",!0),p.attribution?(i(),a("div",Ee,[t.value.includes("responsable_master")?(i(),a("div",ge,fe)):c("",!0),t.value.includes("enseignant")?(i(),a("div",Le,ye)):c("",!0),t.value.includes("enseignant")?(i(),a("div",Ie,ke)):c("",!0),t.value.includes("responsable_master")?(i(),a("div",De,xe)):c("",!0),t.value.includes("responsable_master")?(i(),a("div",Ve,Te)):c("",!0)])):c("",!0),t.value.includes("enseignant")||t.value.includes("responsable_annee")||t.value.includes("admin")?(i(),a("div",{key:4,onClick:m[3]||(m[3]=f=>g("documentation")),class:"button"},Ce)):c("",!0),p.documentation?(i(),a("div",Se,[t.value.includes("enseignant")?(i(),a("div",$e,Fe)):c("",!0),t.value.includes("responsable_annee")||t.value.includes("admin")?(i(),a("div",qe,je)):c("",!0),t.value.includes("responsable_annee")||t.value.includes("admin")?(i(),a("div",Me,He)):c("",!0)])):c("",!0),t.value.includes("admin")?(i(),a("div",{key:6,onClick:m[4]||(m[4]=f=>g("utilisateurs")),class:"button"},Ke)):c("",!0),p.utilisateurs?(i(),a("div",Je,[t.value.includes("admin")?(i(),a("div",{key:0,onClick:m[5]||(m[5]=()=>A("ActivationComptes")),class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Xe)):c("",!0),t.value.includes("admin")||t.value.includes("admin")?(i(),a("div",{key:1,onClick:m[6]||(m[6]=()=>A("ListUsers")),class:"button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer"},Ze)):c("",!0)])):c("",!0)]),h.value?(i(),a("div",et,[o("p",null,w(d.value),1),o("button",{onClick:O},"Logout")])):c("",!0)],2))}};var st=P(tt,[["__scopeId","data-v-05767a5c"]]);const ot={components:{Sidebar:st}},nt={class:"flex min-h-screen"},rt={class:"flex-grow ml-4"};function it(e,r,_,t,n,l){const d=L("Sidebar"),h=L("router-view");return i(),a("div",nt,[b(d,{class:"flex-shrink-0"}),o("div",rt,[b(h)])])}var at=P(ot,[["render",it]]);const x=j({history:M(),routes:[{path:"/",name:"auth",component:()=>s(()=>import("./Authentification.5d77ffc6.js"),["assets/Authentification.5d77ffc6.js","assets/vendor.63776c49.js"]),redirect:"login",children:[{path:"login",name:"login",component:()=>s(()=>import("./LoginForm.687beb9a.js"),["assets/LoginForm.687beb9a.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:"register",name:"register",component:()=>s(()=>import("./RegisterForm.2f65a62c.js"),["assets/RegisterForm.2f65a62c.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])}]},{path:"/dashboard",name:"Dashboard",component:at,meta:{requiresAuth:!0},children:[{path:"attente",name:"Attente",component:()=>s(()=>import("./ActionsAttente.151562cc.js"),["assets/ActionsAttente.151562cc.js","assets/vendor.63776c49.js"])},{path:"users",name:"Users",component:()=>s(()=>import("./Users.a64ec8cb.js"),["assets/Users.a64ec8cb.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"ListUsers",component:()=>s(()=>import("./ListUsers.72fc7934.js"),["assets/ListUsers.72fc7934.js","assets/ListUsers.0ed21f92.css","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js","assets/axios.9e3aeb74.js"])},{path:"activation-comptes",name:"ActivationComptes",component:()=>s(()=>import("./ActivationComptes.9a8260d2.js"),["assets/ActivationComptes.9a8260d2.js","assets/ActivationComptes.1ac7c37e.css","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js","assets/axios.9e3aeb74.js"])},{path:"create",name:"CreateUser",component:()=>s(()=>import("./CreateUser.df4c5dd2.js"),["assets/CreateUser.df4c5dd2.js","assets/CreateUser.f9fcab96.css","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":userId",component:()=>s(()=>import("./User.c50bca92.js"),["assets/User.c50bca92.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"DetailsUser",component:()=>s(()=>import("./DetailsUser.15b1c4e4.js"),["assets/DetailsUser.15b1c4e4.js","assets/vendor.63776c49.js"])},{path:"edit",name:"EditUser",component:()=>s(()=>import("./EditUser.4d8c9324.js"),["assets/EditUser.4d8c9324.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])}]}]},{path:"annees-universitaire",name:"Annees",component:()=>s(()=>import("./Annees.ec9618a3.js"),["assets/Annees.ec9618a3.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"AnneeList",component:()=>s(()=>import("./AnneeList.b151048f.js"),["assets/AnneeList.b151048f.js","assets/AnneeList.ffc07c5c.css","assets/axios.9e3aeb74.js","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js"])},{path:"create",name:"CreateAnnee",component:()=>s(()=>import("./CreateAnnee.27a6aefa.js"),["assets/CreateAnnee.27a6aefa.js","assets/DetailsNiveau.483943ba.css","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":anneeId",name:"Annee",component:()=>s(()=>import("./Annee.6c6da792.js"),["assets/Annee.6c6da792.js","assets/vendor.63776c49.js"]),children:[{path:"edit",name:"EditAnnee",component:()=>s(()=>import("./EditAnnee.1982d700.js"),["assets/EditAnnee.1982d700.js","assets/vendor.63776c49.js"])},{path:"niveaux",name:"Niveaux",component:()=>s(()=>import("./Niveaux.330fa6a3.js"),["assets/Niveaux.330fa6a3.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"NiveauList",component:()=>s(()=>import("./NiveauList.a5582ff7.js"),["assets/NiveauList.a5582ff7.js","assets/NiveauList.355e6258.css","assets/axios.9e3aeb74.js","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js"])},{path:"create",name:"CreateNiveau",component:()=>s(()=>import("./CreateNiveau.712e4a88.js"),["assets/CreateNiveau.712e4a88.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":niveauId",component:()=>s(()=>import("./Niveau.c43b54c8.js"),["assets/Niveau.c43b54c8.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"DetailsNiveau",component:()=>s(()=>import("./DetailsNiveau.547c8c4a.js"),["assets/DetailsNiveau.547c8c4a.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"edit",name:"EditNiveau",component:()=>s(()=>import("./EditNiveau.0e1c609e.js"),["assets/EditNiveau.0e1c609e.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"parcours",name:"Parcours",component:()=>s(()=>import("./Parcours.6a26e6ed.js"),["assets/Parcours.6a26e6ed.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"ParcoursList",component:()=>s(()=>import("./ParcoursList.bd2b5ea2.js"),["assets/ParcoursList.bd2b5ea2.js","assets/ParcoursList.62f73141.css","assets/axios.9e3aeb74.js","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js"])},{path:"create",name:"CreateParcours",component:()=>s(()=>import("./CreateParcours.6caec10e.js"),["assets/CreateParcours.6caec10e.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":parcoursId",component:()=>s(()=>import("./Parcour.22a178be.js"),["assets/Parcour.22a178be.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"DetailsParcours",component:()=>s(()=>import("./DetailsParcours.5f99a448.js"),["assets/DetailsParcours.5f99a448.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"edit",name:"EditParcours",component:()=>s(()=>import("./EditParcours.b40e54c7.js"),["assets/EditParcours.b40e54c7.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])}]}]},{path:"ues",name:"UE",component:()=>s(()=>import("./UEs.fcee84d6.js"),["assets/UEs.fcee84d6.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"UEList",component:()=>s(()=>import("./UEList.4b7972af.js"),["assets/UEList.4b7972af.js","assets/UEList.a6397c04.css","assets/axios.9e3aeb74.js","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js"])},{path:"create",name:"CreateUE",component:()=>s(()=>import("./CreateUE.7b5ac456.js"),["assets/CreateUE.7b5ac456.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":ueId",component:()=>s(()=>import("./UE.45c2b310.js"),["assets/UE.45c2b310.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"DetailsUE",component:()=>s(()=>import("./DetailsUE.f412ca43.js"),["assets/DetailsUE.f412ca43.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"edit",name:"EditUE",component:()=>s(()=>import("./EditUE.ec8cdc9d.js"),["assets/EditUE.ec8cdc9d.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"groupes",name:"Groupes",component:()=>s(()=>import("./Groupes.b5713d57.js"),["assets/Groupes.b5713d57.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"ListGroupes",component:()=>s(()=>import("./ListGroupes.9ca4174f.js"),["assets/ListGroupes.9ca4174f.js","assets/ListGroupes.a4bc30f4.css","assets/axios.9e3aeb74.js","assets/Filter.935f265c.js","assets/Filter.85af9438.css","assets/vendor.63776c49.js"])},{path:"create",name:"CreateGroupe",component:()=>s(()=>import("./CreateGroupe.d5f9f64e.js"),["assets/CreateGroupe.d5f9f64e.js","assets/axios.9e3aeb74.js","assets/vendor.63776c49.js"])},{path:":groupeId",component:()=>s(()=>import("./Groupe.7cba3e84.js"),["assets/Groupe.7cba3e84.js","assets/vendor.63776c49.js"]),children:[{path:"",name:"DetailsGroupe",component:()=>s(()=>import("./DetailsGroupe.2ba5ac60.js"),["assets/DetailsGroupe.2ba5ac60.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])},{path:"edit",name:"EditGroupe",component:()=>s(()=>import("./EditGroupe.3e0da361.js"),["assets/EditGroupe.3e0da361.js","assets/DetailsNiveau.483943ba.css","assets/vendor.63776c49.js"])}]}]}]}]}]}]}]}]}]}]});x.beforeEach((e,r,_)=>{e.matched.some(t=>t.meta.requiresAuth)?D.getters.isAuthenticated?_():_({name:"Login",query:{redirect:e.fullPath}}):_()});const y=B(z);y.use(D);y.use(x);y.mount("#app");export{P as _};
