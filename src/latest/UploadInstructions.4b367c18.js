import{_ as e,h as a,k as t,p as r,T as o,a as n}from"./preact.3d326435.js";import{l as l,bv as s,aY as i,K as u,br as d,M as f,L as p,i as c}from"./index.9148933a.js";import{a as v}from"./Input.bee63c02.js";function useCombinedRefs(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let n=e();return a(()=>{r.forEach(e=>{e&&("function"==typeof e?e(n.current):e.current=n.current)})},[r]),n}let field="Bor2lc",popupField="Bor2lc Bor1vf",hint="Bor21p",file="Bore7",input="Bor1iu",readonly="Bor2h9",popupReadonly="Bor2h9 Bor2sy",button=l+" Bor32q",buttonBlue=s+" Borei",layer="Bor2cy",inner="Bor18n",label="Bor1xx",svgColor="Bor1je",svgStroke="Bor1n1",__default={field:"Bor2lc",popupField:"Bor2lc Bor1vf",hint:"Bor21p",file:"Bore7",input:"Bor1iu",readonly:"Bor2h9",popupReadonly:"Bor2h9 Bor2sy",button:l+" Bor32q",buttonBlue:s+" Borei",layer:"Bor2cy",inner:"Bor18n",label:"Bor1xx",svgColor:"Bor1je",svgStroke:"Bor1n1"},FileInput=t((t,l)=>{let{id:s,label:p,name:c,error:h,errorStyles:g,accept:m,popup:B,isDropFileAvailable:w,isNewFormats:_,buttonLabel:b}=t,[y,x]=r(null),k=o(e=>{let a=e.target.files.length?e.target.files[0].name:null;x(a)},[]),[N,P]=r(null),[L,S]=r(null),E=useCombinedRefs(l,e(null));w&&a(()=>{let e=0,a=e=>{e.preventDefault(),e.stopPropagation()},t=a=>{a.preventDefault(),a.stopPropagation(),e++,a.dataTransfer.items&&a.dataTransfer.items.length>0&&P(!0)},r=a=>{a.preventDefault(),a.stopPropagation(),--e>0||P(!1)},o=a=>{a.preventDefault(),a.stopPropagation(),P(!1),a.dataTransfer.files&&a.dataTransfer.files.length>0&&(n(a.dataTransfer.files),a.dataTransfer.clearData(),e=0)},n=e=>{try{E.current.files=e;let a=d(_);f([{field:E.current,validator:a}]),S(null),x(e[0].name),E.current.files=e}catch(e){S(e),x(null),E.current.files=null}};return window.addEventListener("dragenter",t),window.addEventListener("dragleave",r),window.addEventListener("dragover",a),window.addEventListener("drop",o),()=>{window.removeEventListener("dragenter",t),window.removeEventListener("dragleave",r),window.removeEventListener("dragover",a),window.removeEventListener("drop",o)}},[]);let F=i(L||h,c),G=n("span",{className:B?__default.popupReadonly:__default.readonly,"data-info":"filename"},y),H=n("span",{className:B?__default.buttonBlue:__default.button,"data-info":"button"},b);return n("label",{className:B?__default.popupField:__default.field,"data-input":c},B?n(u,{styles:g,errorMessage:F,name:c}):p&&n("div",{className:__default.hint,"data-label":c},p),n("input",{id:s,accept:m,name:c,type:"file",ref:E,onChange:k,className:__default.file}),N&&n("div",{className:__default.layer,"data-id":s},n("div",{className:__default.inner},n("svg",{width:"188",height:"100",fill:"none"},n("path",{className:__default.svgStroke,strokeWidth:"4",strokeDasharray:"8 8",d:"M2 2h104v24H82v48H2V2z"}),n("mask",{id:"a",maskUnits:"userSpaceOnUse",x:"80",y:"24",width:"108",height:"76"},n("path",{fill:"#fff",d:"M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z"})),n("g",{mask:"url(#a)"},n("path",{className:__default.svgStroke,strokeWidth:"8",d:"M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z"}),n("path",{className:__default.svgColor,d:"M132.02 77H135.98V63.74H149.06V60.2H135.98V46.94H132.02V60.2H118.94V63.74H132.02V77Z"}))),n("div",{className:__default.label},"Drop GuitarPro file here"))),!B&&n(v,{name:c,errorMessage:F}),y?G:H)});function getSoftwareLinks(e){let a=c(e.os)?"https://play.google.com/store/apps/details?id=org.herac.tuxguitar.android.activity.admob":"https://sourceforge.net/projects/tuxguitar",t={rel:"noopener noreferrer",target:"_blank"},r=n("a",{href:"https://www.guitar-pro.com",...t},"Guitar Pro"),o=n("a",{href:a,...t},"TuxGuitar");return{linkToGp:r,linkToTux:o}}let SoftwareInstructions=e=>{let{device:a,styles:t,mode:r}=e,{linkToGp:o,linkToTux:l}=getSoftwareLinks(a),s="revision"===r?"To edit a tab":"To create a tab";return n("p",{className:t.notice,"aria-label":"requirements"},`${s} you'll need to either buy `,o," software or use a free ",l," alternative.")},ConvertFileInstructions=e=>{let{isTestSegment:a,styles:t,device:r}=e,{linkToGp:o,linkToTux:l}=getSoftwareLinks(r);return a?n("p",{className:t.notice,"aria-label":"instructions"},"We support all versions of Guitar Pro. But support for Guitar Pro versions 6 and above is in beta. ","If you encounter any issues with it, please ",n(p,{to:"/a/wa/help#how-can-i-contact-songsterr"},"let us know"),"."):n("p",{className:t.notice,"aria-label":"instructions"},"We\xa0only support Guitar Pro\xa03,\xa04,\xa0and\xa05\xa0files at\xa0the moment. ","If\xa0you have a Guitar Pro 6/7+ (.gpx, .gp) file, please export\xa0it\xa0to a Guitar Pro 5 file format\xa0first.",n("br",null),o,": File → Export → GP5",n("br",null),l,": File → Save As → Guitar Pro 5")};export{ConvertFileInstructions as C,FileInput as F,SoftwareInstructions as S};