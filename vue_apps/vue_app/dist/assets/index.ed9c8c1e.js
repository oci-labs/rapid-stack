import{o as d,c as h,a as t,t as m,p as P,b as H,d as o,e as l,w as i,u as p,R as g,f as L,F as x,r as y,g as f,v as w,h as z,i as $,j as S,k as I,l as E}from"./vendor.0d529a22.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}};j();var T="/assets/logo.da9b9095.svg";var _=(s,e)=>{const c=s.__vccOpts||s;for(const[u,n]of e)c[u]=n;return c};const U=s=>(P("data-v-9949253a"),s=s(),H(),s),q={class:"greetings"},O={class:"green"},D=U(()=>t("h3",null,[o(" You\u2019ve successfully created a project with "),t("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),o(" + "),t("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),o(". ")],-1)),N={props:{msg:{type:String,required:!0}},setup(s){return(e,c)=>(d(),h("div",q,[t("h1",O,m(s.msg),1),D]))}};var R=_(N,[["__scopeId","data-v-9949253a"]]);const W=t("img",{alt:"Vue logo",class:"logo",src:T,width:"125",height:"125"},null,-1),Y={class:"wrapper"},B=o("Home"),F=o("| "),G=o("About"),K=o("| "),J=o("Login"),Q=o("| "),X=o("Create Account"),Z=o("| "),ee=o("Account Overview"),te={setup(s){return(e,c)=>(d(),h(x,null,[t("header",null,[W,t("div",Y,[l(R,{msg:"You did it!"}),t("nav",null,[l(p(g),{to:"/"},{default:i(()=>[B]),_:1}),F,l(p(g),{to:"/about"},{default:i(()=>[G]),_:1}),K,l(p(g),{to:{name:"login",params:{next:"/"}}},{default:i(()=>[J]),_:1}),Q,l(p(g),{to:"/createAccount"},{default:i(()=>[X]),_:1}),Z,l(p(g),{to:"/account"},{default:i(()=>[ee]),_:1})])])]),l(p(L))],64))}},se="modulepreload",k={},oe="/",ne=function(e,c){return!c||c.length===0?e():Promise.all(c.map(u=>{if(u=`${oe}${u}`,u in k)return;k[u]=!0;const n=u.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${r}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":se,n||(a.as="script",a.crossOrigin=""),a.href=u,document.head.appendChild(a),n)return new Promise((b,C)=>{a.addEventListener("load",b),a.addEventListener("error",C)})})).then(()=>e())};const ae={},re={class:"item"},ce={class:"details"};function ie(s,e){return d(),h("div",re,[t("i",null,[y(s.$slots,"icon",{},void 0,!0)]),t("div",ce,[t("h3",null,[y(s.$slots,"heading",{},void 0,!0)]),y(s.$slots,"default",{},void 0,!0)])])}var v=_(ae,[["render",ie],["__scopeId","data-v-977bb0b6"]]);const le={},ue={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},de=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),he=[de];function _e(s,e){return d(),h("svg",ue,he)}var me=_(le,[["render",_e]]);const pe={},ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ve=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),fe=[ve];function we(s,e){return d(),h("svg",ge,fe)}var ze=_(pe,[["render",we]]);const be={},ye={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},$e=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),ke=[$e];function xe(s,e){return d(),h("svg",ye,ke)}var Ae=_(be,[["render",xe]]);const Ve={},Me={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Ce=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Pe=[Ce];function He(s,e){return d(),h("svg",Me,Pe)}var Le=_(Ve,[["render",He]]);const Se={},Ie={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Ee=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),je=[Ee];function Te(s,e){return d(),h("svg",Ie,je)}var Ue=_(Se,[["render",Te]]);const qe=o("Documentation"),Oe=o(" Vue\u2019s "),De=t("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),Ne=o(" provides you with all information you need to get started. "),Re=o("Tooling"),We=o(" This project is served and bundled with "),Ye=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),Be=o(". The recommended IDE setup is "),Fe=t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),Ge=o(" + "),Ke=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),Je=o(". If you need to test your components and web pages, check out "),Qe=t("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),Xe=o(" and "),Ze=t("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),et=o(". "),tt=t("br",null,null,-1),st=o(" More instructions are available in "),ot=t("code",null,"README.md",-1),nt=o(". "),at=o("Ecosystem"),rt=o(" Get official tools and libraries for your project: "),ct=t("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),it=o(", "),lt=t("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),ut=o(", "),dt=t("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),ht=o(", and "),_t=t("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),mt=o(". If you need more resources, we suggest paying "),pt=t("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),gt=o(" a visit. "),vt=o("Community"),ft=o(" Got stuck? Ask your question on "),wt=t("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),zt=o(", our official Discord server, or "),bt=t("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),yt=o(". You should also subscribe to "),$t=t("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),kt=o(" and follow the official "),xt=t("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),At=o(" twitter account for latest news in the Vue world. "),Vt=o("Support Vue"),Mt=o(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Ct=t("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),Pt=o(". "),Ht={setup(s){return(e,c)=>(d(),h(x,null,[l(v,null,{icon:i(()=>[l(me)]),heading:i(()=>[qe]),default:i(()=>[Oe,De,Ne]),_:1}),l(v,null,{icon:i(()=>[l(ze)]),heading:i(()=>[Re]),default:i(()=>[We,Ye,Be,Fe,Ge,Ke,Je,Qe,Xe,Ze,et,tt,st,ot,nt]),_:1}),l(v,null,{icon:i(()=>[l(Ae)]),heading:i(()=>[at]),default:i(()=>[rt,ct,it,lt,ut,dt,ht,_t,mt,pt,gt]),_:1}),l(v,null,{icon:i(()=>[l(Le)]),heading:i(()=>[vt]),default:i(()=>[ft,wt,zt,bt,yt,$t,kt,xt,At]),_:1}),l(v,null,{icon:i(()=>[l(Ue)]),heading:i(()=>[Vt]),default:i(()=>[Mt,Ct,Pt]),_:1})],64))}},Lt={setup(s){return(e,c)=>(d(),h("main",null,[l(Ht)]))}};const St={name:"AccountEntry",data(){return{input:{username:"",password:""}}},methods:{submit(){this.$emit("accountEntrySubmit",this.input)}},props:{buttonText:String,headerText:String}},It={id:"account"};function Et(s,e,c,u,n,r){return d(),h("div",It,[t("h1",null,m(c.headerText),1),f(t("input",{type:"text",name:"username","onUpdate:modelValue":e[0]||(e[0]=a=>n.input.username=a),placeholder:"Username"},null,512),[[w,n.input.username]]),f(t("input",{type:"password",name:"password","onUpdate:modelValue":e[1]||(e[1]=a=>n.input.password=a),placeholder:"Password"},null,512),[[w,n.input.password]]),t("button",{type:"button",onClick:e[2]||(e[2]=(...a)=>r.submit&&r.submit(...a))},m(c.buttonText),1)])}var A=_(St,[["render",Et],["__scopeId","data-v-5c9fcd90"]]);const jt={props:["next"],name:"login",data(){return{message:""}},components:{AccountEntry:A},methods:{login:async function(s){if(s.username===""||s.password===""){console.log("A username and password must be present");return}try{let e=await z.post("/api/login",s);localStorage.setItem("token",e.data.token),this.next?this.$router.push(this.next):this.$router.push("/")}catch(e){e.response.data.message?this.message=e.response.data.message:this.message="Unable to log in at this time"}}}},Tt={id:"login"},Ut=o("Ceate Account");function qt(s,e,c,u,n,r){const a=$("AccountEntry"),b=$("router-link");return d(),h("div",Tt,[l(a,{headerText:"login",buttonText:"login",onAccountEntrySubmit:r.login},null,8,["onAccountEntrySubmit"]),l(b,{to:"/createAccount"},{default:i(()=>[Ut]),_:1}),t("label",null,m(n.message),1)])}var Ot=_(jt,[["render",qt]]);const Dt={name:"account",data(){return{user:{},message:""}},methods:{logout:function(s){localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/"}})},changePassword:function(s){this.$router.push({name:"changePassword"})}},mounted:async function(){try{let s=await z.get("api/user",{params:{},headers:{Authorization:"bearer "+localStorage.getItem("token")}});this.user=s.data.value}catch(s){s.response.data.message==="Login required"?(localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/account"}})):s.result.data.message?this.message=s.response.data.message:this.message="Unable to retreive user details at this time"}}},Nt={id:"account"};function Rt(s,e,c,u,n,r){return d(),h("div",Nt,[t("label",null,m(n.message),1),t("label",null,m(n.user.username),1),t("button",{onClick:e[0]||(e[0]=(...a)=>r.logout&&r.logout(...a))},"Log Out"),t("button",{onClick:e[1]||(e[1]=(...a)=>r.changePassword&&r.changePassword(...a))},"Change Password")])}var Wt=_(Dt,[["render",Rt]]);const Yt={name:"create_account",data(){return{message:""}},components:{AccountEntry:A},methods:{createAccount:async function(s){if(s.username===""||s.password===""){console.log("A username and password must be present");return}try{let e=await z.post("/api/user",s);localStorage.setItem("token",e.data.token),this.$router.push("/")}catch(e){e.response.data.message?this.message=e.response.data.message:this.message="Unable to create account at this time"}}}},Bt={id:"create_account"};function Ft(s,e,c,u,n,r){const a=$("AccountEntry");return d(),h("div",Bt,[l(a,{headerText:"create account",buttonText:"create",onAccountEntrySubmit:r.createAccount},null,8,["onAccountEntrySubmit"]),t("label",null,m(n.message),1)])}var Gt=_(Yt,[["render",Ft]]);const Kt={props:["next"],name:"account",data(){return{newPassword1:"",newPassword2:"",message:""}},methods:{submit:async function(s){try{if(!(this.newPassword1&&this.newPassword2)){this.message="You must enter all fields";return}if(this.newPassword1!==this.newPassword2){this.message="New passwords must match";return}let e=await z.post("api/changePassword",{password:this.newPassword1},{headers:{Authorization:"bearer "+localStorage.getItem("token")}});this.$router.go(-1)}catch(e){e.response.data.message?e.response.data.message==="Login required"?(localStorage.removeItem("token"),this.$router.push({name:"login",params:{next:"/changePassword"}})):this.message=e.response.data.message:this.message="Unable to update password at this time"}}}},Jt={id:"ChangePassword"};function Qt(s,e,c,u,n,r){return d(),h("div",Jt,[f(t("input",{type:"password",name:"newPassword1","onUpdate:modelValue":e[0]||(e[0]=a=>n.newPassword1=a),placeholder:"New Password"},null,512),[[w,n.newPassword1]]),f(t("input",{type:"password",name:"newPassword2","onUpdate:modelValue":e[1]||(e[1]=a=>n.newPassword2=a),placeholder:"New Password Again"},null,512),[[w,n.newPassword2]]),t("button",{type:"button",onClick:e[2]||(e[2]=(...a)=>r.submit&&r.submit(...a))},"Update Password"),t("label",null,m(n.message),1)])}var Xt=_(Kt,[["render",Qt]]);const V=S({history:I("/"),routes:[{path:"/createAccount",name:"create_account",component:Gt},{path:"/login/:next",name:"login",component:Ot,props:!0},{path:"/",name:"home",component:Lt},{path:"/about",name:"about",component:()=>ne(()=>import("./AboutView.1b5bcccb.js"),["assets/AboutView.1b5bcccb.js","assets/AboutView.ab071ea6.css","assets/vendor.0d529a22.js"])},{path:"/account",name:"account",component:Wt,meta:{requiresAuth:!0}},{path:"/changePassword",name:"changePassword",component:Xt,meta:{requiresAuth:!0}}]});V.beforeEach((s,e,c)=>{s.matched.some(u=>u.meta.requiresAuth)?localStorage.getItem("token")?c():c({name:"login",params:{next:s.fullPath}}):c()});const M=E(te);M.use(V);M.mount("#app");export{_};