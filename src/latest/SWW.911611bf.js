import{h as e,p as t,a as r}from"./preact.bf58aca5.js";import{u as n,L as o}from"./index.e8b15340.js";let error="fpfc",title="fp2oj",subtitle="fpk2",store="fprr",__default={error:"fpfc",title:"fp2oj",subtitle:"fpk2",store:"fprr"};function getEventId(){if(window&&"Sentry"in window&&"function"==typeof window.Sentry.lastEventId)return window.Sentry.lastEventId()}function SWW(){let{dispatch:a}=n();e(()=>a("curiosity/error",{error:"Something Went Wrong"}),[]);let[l,s]=t(void 0);return e(()=>{let e=setInterval(()=>{let t=getEventId();t&&(s(t),clearInterval(e))},50);return()=>clearTimeout(e)},[]),r("div",{className:__default.error},r("h5",{className:__default.title},r("span",null,"Something Went Wrong")),r("p",{className:__default.subtitle},"Please check your network connection and try to refresh the page."),r("p",{className:__default.subtitle},"If the problem persists feel free to ",r(o,{to:"/a/wa/help#contact-us"},"contact us"),"."),l&&r("p",{className:__default.subtitle},"Error ID: ",l))}export{SWW as S,getEventId as g};