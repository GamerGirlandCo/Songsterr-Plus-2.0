import{x as e,m as a,A as r,i as t,y as n,v as o}from"./preact.f8a34c73.js";import{y as s,x as l,p as i,v as d}from"./FormError.ba736668.js";import{i as p,B as f,u,m as c,p as v}from"./Input.4b13d914.js";import{a as m,bF as g}from"./index.3637aaf7.js";const h={field:f+" Bor2lc",popupField:f+" Bor2lc Bor1vf",hint:u+" Bor21p",file:"Bore7",input:c+" Bor1iu",readonly:v+" Bor2h9",popupInput:v+" Bor2h9 Bor96",button:m+" Bor32q",buttonBlue:g+" Borei",layer:"Bor2cy",inner:"Bor18n",label:"Bor1xx",svgColor:"Bor1je",svgStroke:"Bor1n1"},w=e(((e,f)=>{const{id:u,label:c,name:v,error:m,errorStyles:g,accept:w,popup:B,isDropFileAvailable:y,isNewFormats:b}=e,[N,E]=a(null),H=r((e=>{const a=e.target.files.length?e.target.files[0].name:null;E(a)}),[]),[k,V]=a(null),[D,L]=a(null),x=function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];const o=t();return n((()=>{a.forEach((e=>{e&&("function"==typeof e?e(o.current):e.current=o.current)}))}),[a]),o}(f,t(null));y&&n((()=>{let e=0;const a=e=>{e.preventDefault(),e.stopPropagation()},r=a=>{a.preventDefault(),a.stopPropagation(),e++,a.dataTransfer.items&&a.dataTransfer.items.length>0&&V(!0)},t=a=>{a.preventDefault(),a.stopPropagation(),e--,e>0||V(!1)},n=a=>{a.preventDefault(),a.stopPropagation(),V(!1),a.dataTransfer.files&&a.dataTransfer.files.length>0&&(o(a.dataTransfer.files),a.dataTransfer.clearData(),e=0)},o=e=>{try{x.current.files=e;const a=i(b);d([{field:x.current,validator:a}]),L(null),E(e[0].name),x.current.files=e}catch(e){L(e),E(null),x.current.files=null}};return window.addEventListener("dragenter",r),window.addEventListener("dragleave",t),window.addEventListener("dragover",a),window.addEventListener("drop",n),()=>{window.removeEventListener("dragenter",r),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",a),window.removeEventListener("drop",n)}}),[]);const F=s(D||m,v),M=o("span",{className:B?h.popupInput:h.readonly,"data-info":"filename"},N),T=o("span",{className:B?h.buttonBlue:h.button,"data-info":"button"},(B?"Upload":"Choose")+" your .gp5 file");return o("label",{className:B?h.popupField:h.field,"data-input":v},B?o(l,{styles:g,errorMessage:F,name:v}):c&&o("div",{className:h.hint,"data-label":v},c),o("input",{id:u,accept:w,name:v,type:"file",ref:x,onChange:H,className:h.file}),k&&o("div",{className:h.layer,"data-id":u},o("div",{className:h.inner},o("svg",{width:"188",height:"100",fill:"none"},o("path",{className:h.svgStroke,strokeWidth:"4",strokeDasharray:"8 8",d:"M2 2h104v24H82v48H2V2z"}),o("mask",{id:"a",maskUnits:"userSpaceOnUse",x:"80",y:"24",width:"108",height:"76"},o("path",{fill:"#fff",d:"M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z"})),o("g",{mask:"url(#a)"},o("path",{className:h.svgStroke,strokeWidth:"8",d:"M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z"}),o("path",{className:h.svgColor,d:"M132.02 77H135.98V63.74H149.06V60.2H135.98V46.94H132.02V60.2H118.94V63.74H132.02V77Z"}))),o("div",{className:h.label},"Drop GuitarPro file here"))),!B&&o(p,{name:v,errorMessage:F}),N?M:T)}));export{w};
//# sourceMappingURL=FileInput.6e253ba2.js.map