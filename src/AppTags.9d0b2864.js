import{aa as e,an as a,ao as s,ap as l,aq as r,Z as n,ar as c,u as t,s as o}from"./index.0e02c5ee.js";import{e as i,v as d,b as p}from"./preact.89f2d999.js";import{N as h,a as g,S as m,b as u,L as f,A as N,c as v}from"./NetworkError.9f77b982.js";import{S as A}from"./SWW.065aa688.js";import"./IconArrow.b9f82100.js";import"./ShowroomPlaceholder.48ae4617.js";var x={content:"sc2ul",tags:"sc34q",songs:"scxy",nav:"sc13l",prev:e+" "+a+" sc2ea",next:e+" "+a+" sc1io",header:"sciq",title:"sc2qt"};function y(e){let a,s=e[0],l=1;for(;l<e.length;){const r=e[l],n=e[l+1];if(l+=2,("optionalAccess"===r||"optionalCall"===r)&&null==s)return;"access"===r||"optionalAccess"===r?(a=s,s=n(s)):"call"!==r&&"optionalCall"!==r||(s=n((function(){for(var e=arguments.length,l=new Array(e),r=0;r<e;r++)l[r]=arguments[r];return s.call(a,...l)})),a=void 0)}return s}function b(e){let{content:a,route:t}=e;return"tag"===t.page?i("div",{className:x.songs,children:[i("header",{className:x.header,children:i("h1",{className:x.title,children:["Top "+(y([a,"optionalAccess",e=>e.tag])||"")+" Tabs",!!y([a,"optionalAccess",e=>e.page])&&i("span",{children:" Page "+a.page},"page")]})}),i("div",{className:x.content,children:y([a,"optionalAccess",e=>e.songs,"access",e=>e.map,"call",e=>e((e=>[e.hasPlayer&&i("a",{href:r(e,0),children:e.title+" Tab"},"player"),e.hasChords&&i("a",{href:n(e),children:e.title+" Chords"},"tags")].filter(Boolean)))])}),i("div",{className:x.nav,children:[y([a,"optionalAccess",e=>e.page])>=1&&i("a",{className:x.prev,rel:"prev",href:s(a.tag,a.page-1),children:"Prev page"}),y([a,"optionalAccess",e=>e.hasNext])&&i("a",{className:x.next,rel:"next",href:s(a.tag,a.page+1),children:"Next page"})]})]}):i("div",{className:x.tags,children:[i("header",{className:x.header,children:i("h1",{className:x.title,children:["Top Tags",!!y([a,"optionalAccess",e=>e.page])&&i("span",{children:" Page "+a.page},"page")]})}),i("div",{className:x.content,children:y([a,"optionalAccess",e=>e.tags,"access",e=>e.map,"call",e=>e((e=>i("a",{href:s(e.name),children:c(e.name)})))])}),i("div",{className:x.nav,children:[y([a,"optionalAccess",e=>e.page])>=1&&i("a",{className:x.prev,rel:"prev",href:l(a.page-1),children:"Prev page"}),y([a,"optionalAccess",e=>e.hasNext])&&i("a",{className:x.next,rel:"next",href:l(a.page+1),children:"Next page"})]})]})}function P(e){let{tags:a}=e;if(!a.loading)return a.isNotFound?d(h,null):a.isNetworkFailed||a.isNetworkFailed?d(g,null):a.isFailed||a.isFailed?d(A,null):void 0}function w(){const{layer:{layer:e},screen:a,device:s,route:l,tags:r,user:n,demo:c}=t("player","layer","screen","device","route","tags","user","demo"),i=n.hasPlus||c.enabled,h=a.isSmall,g=a.fullscreen,A=a.landscape,x=r.loading,y=!r.isFailed,w=y&&!x&&!i&&!x,F=y&&!x&&!i&&s.isPhone,j=y&&!x&&!!r.content;return d(p,null,h&&!A&&d(v,{layer:e,isChords:!0}),d("section",{className:g?o.tablatureFullscreen:o.tablature,role:l.isPanel?"complementary":"main"},F&&d(m,null),d(P,{tags:r}),w&&d("section",{className:o.showroom},d(u,{songId:27})),x&&d(f,null),j&&d(b,{content:r.content,route:r.route}),j&&d(N,{withAds:w,device:s,copyright:!1})))}export{w as default};
//# sourceMappingURL=AppTags.9d0b2864.js.map
