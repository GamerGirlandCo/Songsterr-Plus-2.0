import{a as e}from"./preact.3d0be470.js";let a="Bx22t6",t="Bx22u6",s="Bx2306",r="Bx2306 Bx21yv",l="Bx22bi",d={stub:"Bx22t6",text:"Bx22u6",header:"Bx2306",headerRed:"Bx2306 Bx21yv",hint:"Bx22bi"};function h(a){let{id:t,icon:s,header:r,headerColor:l,hint:h,children:m}=a,u="red"===l?d.headerRed:d.header;return e("div",{className:d.stub,"data-stub":t},s(),e("div",{className:d.text},e("div",{className:u},r),h&&e("div",{className:d.hint,"aria-label":"hint"},h())),m)}export{h as S}