import{y as e,l as t,v as n}from"./preact.89f2d999.js";import{u as r,L as o}from"./index.0e02c5ee.js";function s(){if(window&&"Sentry"in window&&"function"==typeof window.Sentry.lastEventId)return window.Sentry.lastEventId()}function a(){const{dispatch:a}=r();e((()=>a("curiosity/error",{error:"Something Went Wrong"})),[]);const[c,i]=t(void 0);return e((()=>{const e=setInterval((()=>{const t=s();t&&(i(t),clearInterval(e))}),50);return()=>clearTimeout(e)}),[]),n("section",{className:"xke6"},n("h5",{className:"xk1ks"},n("span",null,"Something Went Wrong")),n("p",{className:"xk302"},"Please check your network connection and try to refresh the page."),n("p",{className:"xk302"},"If the problem persists feel free to ",n(o,{to:"/a/wa/help#contact-us"},"contact us"),"."),c&&n("p",{className:"xk302"},"Error ID: ",c))}export{a as S,s as g};
//# sourceMappingURL=SWW.065aa688.js.map
