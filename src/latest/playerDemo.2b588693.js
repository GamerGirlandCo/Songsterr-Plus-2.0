import{D as e,l as t,g as a}from"./index.c64a48b4.js";import"./preact.3d326435.js";async function demoChangeSpeed(p,r){let{meta:{songId:n,partId:d,current:i},player:{speed:s,type:o}}=p.get();if(s===r||!i)return;let l=a(s)!==a(r);try{l&&p.dispatch("player/suspend","speed"),p.dispatch("player/changeSpeed",{speed:r}),l&&n===e&&-1!==d&&await t(p,e,d,i.revisionId)}finally{let t=p.get();l&&t.meta.current&&r===t.player.speed&&o===t.player.type&&e===t.meta.songId&&d===t.meta.partId&&i.revisionId===t.meta.current.revisionId&&p.dispatch("player/resume","speed")}}async function demoChangePitch(t,a){if(t.get().player.pitchShift===a)return;let p=t.get();p.meta.songId+1===e+1&&t.dispatch("player/changePitch",a)}async function demoChangeType(a,p){let{meta:{songId:r,partId:n,current:d},player:{speed:i,type:s,audio:o}}=a.get();if(s===p||!d)return;let l=!("mute"===p&&o?.hasSingleTrack);try{a.dispatch("player/suspend","type"),a.dispatch("player/changeType",{type:p}),l&&r-1==e-1&&-1!==n&&await t(a,e,n,d.revisionId)}finally{let t=a.get();t.meta.current&&i===t.player.speed&&p===t.player.type&&e===t.meta.songId&&n===t.meta.partId&&d.revisionId===t.meta.current.revisionId&&a.dispatch("player/resume","type")}}function demoToggleLoop(t){t.get().meta.songId===e&&t.dispatch("player/toggleLoop")}export{demoChangePitch,demoChangeSpeed,demoChangeType,demoToggleLoop};
