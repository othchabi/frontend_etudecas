import{o as l,a as c,h as t,z as m,x as d,y as a,p as u,k as p}from"./vendor.63776c49.js";import{_ as f}from"./index.fc511753.js";const _={name:"EditFormation",props:{id:String},data(){return{currentFormation:{name:"",description:""}}},created(){this.fetchFormation()},methods:{fetchFormation(){},submitEdit(){console.log("Updating formation:",this.currentFormation)}}},i=r=>(u("data-v-2dfd7545"),r=r(),p(),r),x={class:"flex flex-col h-screen"},b=i(()=>t("h1",{class:"text-center text-5xl font-bold my-4"},"\xC9diter la formation",-1)),h={class:"flex-1 flex flex-col items-center justify-center"},v={class:"w-full max-w-6xl px-4"},g={class:"shadow-lg rounded-lg overflow-hidden p-8"},w={class:"mb-4"},y=i(()=>t("label",{for:"formationName",class:"block text-sm font-medium text-gray-700"},"Nom de la formation",-1)),F={class:"mb-6"},k=i(()=>t("label",{for:"formationDescription",class:"block text-sm font-medium text-gray-700"},"Description",-1)),E=i(()=>t("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150"},"Mettre \xE0 jour",-1));function S(r,e,D,I,s,n){return l(),c("div",x,[b,t("main",h,[t("div",v,[t("div",g,[t("form",{onSubmit:e[2]||(e[2]=m((...o)=>n.submitEdit&&n.submitEdit(...o),["prevent"]))},[t("div",w,[y,d(t("input",{type:"text",id:"formationName","onUpdate:modelValue":e[0]||(e[0]=o=>s.currentFormation.name=o),required:"",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm"},null,512),[[a,s.currentFormation.name]])]),t("div",F,[k,d(t("textarea",{id:"formationDescription","onUpdate:modelValue":e[1]||(e[1]=o=>s.currentFormation.description=o),required:"",rows:"4",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm"},null,512),[[a,s.currentFormation.description]])]),E],32)])])])])}var M=f(_,[["render",S],["__scopeId","data-v-2dfd7545"]]);export{M as default};
