import{g as t,e as a}from"./preact.89f2d999.js";import{o as i,L as e}from"./index.0e02c5ee.js";import{c as r}from"./SongsPanel.a5dde152.js";import{D as s}from"./DifficultyIndicator.6b73f35d.js";const d=t((t=>{let{song:d,isActive:c,numerated:l,difficultyNA:f=!1}=t,n=l?r.numerated:r.item;c&&(n+=" "+r.active);const{defaultTrack:m}=d,o=d.tracks&&d.tracks[m]?d.difficulty:null,u=i(d,m);return a(e,{to:u,className:n,"data-song":"",children:[a("div",{className:r.wrapper,children:[a("div",{className:r.name,"data-field":"name",children:d.title}),a("div",{className:r.artist,"data-field":"artist",children:d.artist})]}),a(s,{difficultyString:o,difficultyNA:f})]})}));export{d as S};
//# sourceMappingURL=SongsItem.0ded978c.js.map