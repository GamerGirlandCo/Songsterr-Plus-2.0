!function(e,t,o,n,r,i,a,c,l){let s=!0,d=!1;for(let e=0;e<document.scripts.length;e++)if(document.scripts[e].src.indexOf(a)>-1){s="no"!==document.scripts[e].getAttribute("data-lazy");break}let p=!1,f=[],u=function(e){(e.e||e.p||e.f&&e.f.indexOf("capture")>-1||e.f&&e.f.indexOf("showReportDialog")>-1)&&s&&_(f),u.data.push(e)};function _(a){if(p)return;p=!0;let s=t.getElementsByTagName(o)[0],d=t.createElement(o);d.src=c,d.crossorigin="anonymous",d.addEventListener("load",()=>{try{e[n]=h,e[r]=g;let t=e[i],o=t.init;t.init=function(e){let t=l;for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);o(t)},function(t,o){try{let i=u.data;for(let e=0;e<t.length;e++)"function"==typeof t[e]&&t[e]();let a=!1,c=e.__SENTRY__;void 0!==c&&c.hub&&c.hub.getClient()&&(a=!0);let l=!1;for(let e=0;e<i.length;e++)if(i[e].f){l=!0;let t=i[e];!1===a&&"init"!==t.f&&o.init(),a=!0,o[t.f].apply(o,t.a)}!1===a&&!1===l&&o.init();let s=e[n],d=e[r];for(let t=0;t<i.length;t++)i[t].e&&s?s.apply(e,i[t].e):i[t].p&&d&&d.apply(e,[i[t].p])}catch(e){console.error(e)}}(a,t)}catch(e){console.error(e)}}),s.parentNode.insertBefore(d,s)}u.data=[],e[i]=e[i]||{},e[i].onLoad=function(e){f.push(e),(!s||d)&&_(f)},e[i].forceLoad=function(){d=!0,s&&setTimeout(()=>{_(f)})},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach(t=>{e[i][t]=function(){u({f:t,a:arguments})}});let h=e[n];e[n]=function(t,o,n,r,i){u({e:[].slice.call(arguments)}),h&&h.apply(e,arguments)};let g=e[r];e[r]=function(t){u({p:t.reason}),g&&g.apply(e,arguments)},s||setTimeout(()=>{_(f)})}(window,document,"script","onerror","onunhandledrejection","Sentry",window.__SENTRY_CLIENT_KEY__||"","https://browser.sentry-cdn.com/6.2.3/bundle.min.js",{dsn:window.__SENTRY_DSN__||"",release:process.env.COMMIT||"",environment:window.__STAGE__||"",allowUrls:[/.*\.songsterr\.(com|dev)/],denyUrls:[/\/inj_js\//i,/gpt\/pubads/i,/securepubads\.g\.doubleclick\.net/,/cdn-b\.notsy\.io/],ignoreErrors:["Network request failed","NetworkError when attempting to fetch resource","The operation was aborted","Failed to fetch","Unable to decode audio data",/ResizeObserver/,/__firefox__/,/MediaDecodeAudioData/,/Blocked a frame with origin/]});