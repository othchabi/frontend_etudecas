import{_ as a}from"./index.fc511753.js";import{r as o,o as c,a as i,h as s,b as t,w as n,s as r}from"./vendor.63776c49.js";const h={name:"Navbar"},x={class:"fixed top-0 left-0 w-full z-10 flex justify-between items-center py-4 px-6 shadow-md bg-white"},v=s("div",{class:"font-bold text-xl"},"EquipesPedagogique",-1);function b(l,d,_,u,p,f){const e=o("router-link");return c(),i("nav",x,[v,s("div",null,[t(e,{to:"/login",class:"mr-4 px-4 py-2 rounded bg-blue-500 text-white shadow hover:bg-blue-700"},{default:n(()=>[r("Login")]),_:1}),t(e,{to:"/register",class:"px-4 py-2 rounded bg-green-500 text-white shadow hover:bg-green-700"},{default:n(()=>[r("Register")]),_:1})])])}var g=a(h,[["render",b]]);const w={components:{Navbar:g}},$={class:"flex justify-center items-center",style:{"min-height":"calc(100vh - 4rem)"}};function N(l,d,_,u,p,f){const e=o("Navbar"),m=o("router-view");return c(),i("div",null,[t(e),s("div",$,[t(m,{class:"w-full max-w-md mx-auto"})])])}var B=a(w,[["render",N]]);export{B as default};