var SubmitFormStates,ReportFormStates;import{_ as e,p as t,T as a,a as s,R as i,y as o,c as n,s as r,h as l}from"./preact.3d326435.js";import{J as c,cg as u,u as d,a8 as m,bq as p,f as f,K as _,br as v,M as k,N as g,ch as h,ci as b,bh as w,bN as C,cj as N,ck as R,L as S,bu as y,g as I,h as $}from"./index.9148933a.js";import{U as E,z as L,d as x,s as D}from"./audio.1ae45449.js";import{C as F,S as A,F as O}from"./UploadInstructions.4b367c18.js";import{I as B}from"./Input.bee63c02.js";import{A as H}from"./ActionButton.02df805a.js";import{_ as j}from"./UploadRevisionForm.module.39ceed63.js";import{R as T,j as U}from"./user.f5791bbf.js";import"./env.1ef38fce.js";let content$1=c+" B9j34t",__default$3={content:c+" B9j34t"},warningStyles={...u,...__default$3},UploadRevisionForm=i=>{let{meta:o,actions:n}=i,{dispatch:r,user:l,device:c,experiments:b}=d("user","device","experiments"),w=e(),C=e();b.gpif_support?.status==="pending"&&r("experiments/activate",{experimentName:"gpif_support"});let N=b.gpif_support?.segment==="on",R=m(l,E.UPLOAD_ALL_FILES)||N,S=R?".gp3, .gp4, .gp5, .gpx, .gp":".gp3, .gp4, .gp5",y=N?"Choose your Guitar Pro file":"Choose your .gp5 file",[I,$]=t(!1),[x,D]=t(null),[T,U]=t(null),[M,P]=t(null),V=async(e,t,a,s)=>{$(!0),D(null);try{let i=v(R);k([{field:e,validator:g},{field:t,validator:i}]);let n={file:t.files[0],summary:e.value,songId:o.songId.toString(),force:a};await h(r,n,s),P(null)}catch(e){e instanceof L?(U(!0),P(e)):(U(!1),D(e))}$(!1)},G=a(e=>{e.preventDefault();let t=new p;return V(C.current,w.current,T,t.signal),t.abort.bind(t)},[C,w,T]),W=o.tracks&&o.tracks.length>2;return s("form",{noValidate:!0,className:j.form,onSubmit:G,action:""},s(_,{styles:u,error:x}),s("p",{className:j.motto,"aria-label":"motto"},"Download the latest revision from the list below, make your edits,",s("br",null),"save the result and upload it using the form below.",W&&s("span",{role:"warning"},s("br",null),"Please make sure to keep all the tracks in the resulting file.")),s(O,{id:"revisionFile",accept:S,label:"Upload your .gp5 file",ref:w,name:"file",error:M||x,buttonLabel:y,popup:!0,errorStyles:M?warningStyles:u,isDropFileAvailable:!0,isNewFormats:R}),s(A,{device:c,styles:j,mode:"revision"}),s(F,{device:c,styles:j,mode:"revision",isTestSegment:N}),s(B,{ref:C,name:"summary",type:"textarea",error:x,placeholder:"Briefly explain your changes (fixed errors, replaces with whole new version, corrected tempo, etc)",styles:j,errorStyles:u,popup:!0}),s("div",{className:j.actions},s("a",{className:f.popupButtonLinkGreen,onClick:n.back},"Cancel"),s(H,{id:M?"submitRevisionButtonWarning":"submitRevisionButton",title:T?"Submit anyway":"Submit revision",processing:I})),s("p",{className:j.notice},"Once processing is complete, we'll send you an email notification,",s("br",null),"and the site will display the new revision."))},section$1="w31p8",current="w3261",currentText="w3dp",options="w3a5",reason="w31q",text="w3n5",textarea="w32aw",title$1="w3s9",notice="w3e7",actions$1="w31fb",__default$2={section:"w31p8",current:"w3261",currentText:"w3dp",options:"w3a5",reason:"w31q",text:"w3n5",textarea:"w32aw",title:"w3s9",notice:"w3e7",actions:"w31fb"},REVISION_REPORTS_STORAGE="revisionReports";function reducer(e,t){switch(t.type){case"enable":return{...e,form:!0};case"toggle":return{...e,reason:t.kind};case"submit":return{...e,processing:!0,error:null};case"success":return{...e,processing:!1,success:!0};case"failure":return{...e,processing:!1,error:t.error}}}function hasBeenReported(e){return(x(REVISION_REPORTS_STORAGE)||[]).includes(e)}function updateReportedCache(e){let t=x(REVISION_REPORTS_STORAGE)||[];t.push(e),D(REVISION_REPORTS_STORAGE,t)}let RevisionReportForm=i(t=>{let{meta:i,actions:n}=t,r=e(),{dispatch:l}=d(),[c,m]=o(reducer,{form:!1,processing:!1,error:null,reason:null,message:null,success:!1}),v=async(e,t,a,s)=>{m({type:"submit"});try{b(t,a);let i={songId:e.songId,revisionId:e.revisionId,kind:t,summary:a};await U(i,s),updateReportedCache(e.revisionId),m({type:"success"}),setTimeout(n.success,0),l("curiosity/event",{event:"Reported revision",Reason:T[t],Summary:a,"Song id":e.songId.toString()})}catch(e){m({type:"failure",error:e})}},k=a(e=>{e.preventDefault();let t=new p;return v(i,c.reason,r.current.value,t.signal),t.abort.bind(t)},[c,i]);return c.success?s("section",{className:__default$2.section,"data-section":"report"},s("p",null,"Your report has been sent."),s("p",{className:__default$2.notice},"We'll review your report as soon as possible. ",s("br",null),"And will roll back the revision in case of a problem."),s("div",{className:__default$2.actions},s("a",{className:f.popupButtonOrange,onClick:n.back},"OK"))):s("section",{className:__default$2.section,"data-section":"report"},s("form",{noValidate:!0,className:__default$2.form,onSubmit:k,action:""},s(_,{styles:u,error:c.error}),s("p",{className:__default$2.title},"Do you think that the new revision made the tab worse?",s("br",null),"If so, please tell us why:"),s("ul",{className:__default$2.options},Object.keys(T).map(e=>{let t={key:e,className:__default$2.reason,onClick:()=>m({type:"toggle",kind:e})};return s("li",t,s("input",{type:"radio",name:"reason",checked:c.reason===e,value:e}),s("label",{className:__default$2.text},T[e]))})),s(B,{ref:r,name:"comment",type:"textarea",error:c.error,placeholder:"Provide additional details on problematic tracks, measures, notes, etc.",styles:__default$2,errorStyles:u,popup:!0}),s("p",{className:__default$2.notice},"Note! Your remarks will be sent to the author of the revision."),s("div",{className:__default$2.actions},s("a",{className:f.popupButtonLinkOrange,onClick:n.back},"Cancel"),s(H,{id:"submitReportButton",title:"Report",processing:c.processing})),s("p",{className:__default$2.notice},"We'll review your report as soon as possible. ",s("br",null),"And will roll back the revision in case of a problem.")))}),DELIMITER="\x01",REGEX_URL=/(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,splitByURL=e=>e.replace(REGEX_URL,e=>"\x01"+e+"\x01").split("\x01");function Linkify(e){let{children:t,styles:a}=e,i=splitByURL(t),o=i.map((e,t)=>{let i=REGEX_URL.test(e);return i?s("a",{className:a.link,key:`url${t}`,href:e,rel:"noopener noreferrer ugc",target:"_blank"},e):s(n,{key:`text${t}`},e)});return s("p",{className:a.message},o)}function IconRevisionView(){return s("svg",{width:15,height:8,viewBox:"0 0 15 8"},s("path",{d:"M8 2.9a1.1 1.1 0 0 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm0 4a2.9 2.9 0 0 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM14.5 3C13.2 2 10.9.3 8 .3S2.8 2 1.5 3c-.9.6-.9 1.4 0 2C2.8 6 5.1 7.7 8 7.7S13.2 6 14.5 5c.9-.6.9-1.4 0-2z"}))}function IconRevisionReport(){return s("svg",{width:8,height:8,viewBox:"0 0 8 8"},s("path",{d:"M7.45 4.71 6.17 2.67 7.46.61c.02-.04.03-.1 0-.14A.139.139 0 0 0 7.34.4H1.88V.13c0-.07-.31-.13-.39-.13-.07 0-.41.06-.41.13v7.73c0 .08.36.13.43.13.08 0 .46-.04.46-.12V4.93h5.38c.07 0 .13-.06.13-.13 0-.03-.02-.06-.03-.09z"}))}function IconRevisionDownload(){return s("svg",{width:8,height:8,viewBox:"0 0 8 8"},s("path",{d:"M6 0H2v4H0l4 4L8 4H6V0z"}))}let item="C7k1rh",itemActive="C7k1rh C7kks",itemInvalid="C7k1rh C7k2yw",message="C7k2fj",itemInvalidActive="C7k1rh C7k2yw C7k22w",meta="C7krn",person="C7k23d",adminLinks="C7kl6",adminLink="C7k7o",metaLinks="C7k2a1",link="C7kwj",actionLink="C7k7t",disabledLink="C7k29n",linkActive="C7kv8",__default$1={item:"C7k1rh",itemActive:"C7k1rh C7kks",itemInvalid:"C7k1rh C7k2yw",message:"C7k2fj",itemInvalidActive:"C7k1rh C7k2yw C7k22w",meta:"C7krn",person:"C7k23d",adminLinks:"C7kl6",adminLink:"C7k7o",metaLinks:"C7k2a1",link:"C7kwj",actionLink:"C7k7t",disabledLink:"C7k29n",linkActive:"C7kv8"},RevisionItem=e=>{let t;let{revision:a,meta:i,partId:o,processing:n,locales:r,reportAction:l}=e,{dispatch:c}=d(),u=!a.tracks,m=a.revisionId===i.revisionId,p=a.tracks?Math.min(a.tracks-1,o):0,f=w(i,p,a.revisionId),_=C(new Date(a.date),r),v=hasBeenReported(a.revisionId),k=N("deleteRevision",a.revisionId),g=N("editRevision",a.revisionId),h=R("Revision",a.revisionId),b=e.canManageRevisions&&s("span",{className:__default$1.adminLinks},s("a",{className:__default$1.adminLink,href:g,target:"_blank"},"edit"),s("a",{className:__default$1.adminLink,href:k,target:"_blank"},"delete"),a.isBlocked&&s("a",{className:__default$1.adminLink,href:h},"unblock")),y={className:__default$1.actionLink,to:f,"aria-label":"action",onClick:()=>c("curiosity/event",{event:"Clicked on View revision link","Song id":i.songId.toString()})},I={className:__default$1.linkActive,href:a.source,"aria-label":"download",download:!0,target:"_blank",onClick:()=>c("curiosity/event",{event:"Downloaded revision","Song id":i.songId.toString()})},$=s("span",{className:__default$1.metaLinks},!m&&s(S,y,s(IconRevisionView,null)," view"),m&&l&&s("a",{className:v?__default$1.disabledLink:__default$1.linkActive,onClick:v?null:l},s(IconRevisionReport,null),v?" reported":" report"),e.canDownloadRevisions&&s("a",I,s(IconRevisionDownload,null)," download"));return t=u||a.isBlocked?m?__default$1.itemInvalidActive:__default$1.itemInvalid:m?__default$1.itemActive:__default$1.item,s("li",{key:a.revisionId,className:t},s(Linkify,{styles:__default$1},`${a.isBlocked?"Blocked: ":""}${a.summary}`),s("p",{className:__default$1.meta},`${_} \u2013 by `,s("span",{className:__default$1.person},a.person),b,!n&&$))},scroller="Cca1wi",spinner="Cca13w",title="Ccahc",content="Cca1mk",section="Cca34p",sectionForm="Cca1z3",actions="Ccame",motto="Cca1lf",subMotto="Cca1lf Cca1gp",auth="Cca2yf",authReport="Cca2yf Cca2uj",list="Cca1p3",__default={scroller:"Cca1wi",spinner:"Cca13w",title:"Ccahc",content:"Cca1mk",section:"Cca34p",sectionForm:"Cca1z3",actions:"Ccame",motto:"Cca1lf",subMotto:"Cca1lf Cca1gp",auth:"Cca2yf",authReport:"Cca2yf Cca2uj",list:"Cca1p3"},DEFAULT_POPUP_OFFSET=38,TITLE_HEIGHT=107;!function(e){e[e.HIDDEN=0]="HIDDEN",e[e.SHOWN=1]="SHOWN"}(SubmitFormStates||(SubmitFormStates={})),function(e){e[e.HIDDEN=0]="HIDDEN",e[e.SHOWN=1]="SHOWN",e[e.SUCCESS=2]="SUCCESS"}(ReportFormStates||(ReportFormStates={}));let calculateBaseHeight=e=>({height:e-76}),RevisionsPopupContent=i=>{let{style:o,setStyle:c}=i,{dispatch:u,user:p,revisions:_,uploads:v,meta:k,device:g,screen:h,experiments:b}=d("user","revisions","uploads","meta","device","screen","experiments"),{isLoggedIn:w}=p,{isLoading:C}=_,{revision:N,revisionError:R,revisionSubmitted:L}=v,[x,D]=t(SubmitFormStates.HIDDEN),[F,A]=t(ReportFormStates.HIDDEN),O=e(),B=e(),H=F?"Report revision":"Revisions",j=b.download_without_sign_in?.segment==="on";r(()=>{let e=B.current.scrollHeight,t=calculateBaseHeight(h.viewport.height).height,a={...o,height:Math.min(e+107,t)};o.height!==a.height&&c(a)},[h,B,_,N,v,F,x]),l(()=>{!1===p.isLoggedIn&&b.download_without_sign_in?.status==="pending"&&u("experiments/activate",{experimentName:"download_without_sign_in",payload:{"Song id":k.songId.toString()}})},[]);let T=w&&N&&!R,U=w&&N&&N.songId!==k.songId,M=U?`${N.artist} ΓÇô ${N.title}`:"",P={success:()=>A(ReportFormStates.SUCCESS),back:()=>A(ReportFormStates.HIDDEN)},V={back:()=>D(SubmitFormStates.HIDDEN)},G=s("section",{className:__default.section,"data-section":"welcome"},s("p",{className:__default.motto},"Have a better tab for this song?"),s("p",{className:__default.motto},"Care to fix the current tab?"),s("p",{className:__default.subMotto},"Submit your corrections for everyone to enjoy!"),s("div",{className:__default.auth,"aria-label":"auth"},"Please ",s(S,{"data-link":"signin",to:"/a/wa/signin"},"sign up")," for free to submit a new revision.")),W=s("section",{className:__default.sectionForm,"data-section":"submit"},s("p",{className:__default.motto},"Have a better tab for this song?"),s("p",{className:__default.motto},"Care to fix the current tab?"),s("p",{className:__default.subMotto},"Submit your corrections for everyone to enjoy!"),s("div",{className:__default.actions},s("a",{id:"submit-revision-button",className:f.popupButtonGreen,onClick:()=>D(SubmitFormStates.SHOWN)},"Submit a new revision"))),z=s("section",{className:__default.sectionForm,"data-section":"submit"},s(UploadRevisionForm,{meta:k.current,actions:V})),q=s("section",{className:__default.section,"data-section":"duplicate"},s("p",{className:__default.motto,"aria-label":"motto"},"Submitted version already exists on Songsterr."),!U&&s("p",{className:__default.subMotto,"aria-label":"info"},"Uploaded file looks exactly like the latest version of this song."),U&&s("div",null,s("p",{className:__default.subMotto,"aria-label":"info"},"Uploaded file looks like a duplicate of ",s("br",null),s(S,{to:y(N),"data-link":"duplicate"},M)))),X=s("section",{className:__default.section,"data-section":"success"},s("div",null,s("p",{className:__default.motto},"Thanks for contributing to Songsterr!"),s("p",{className:__default.subMotto},"We are processing the file and will redirect",s("br",null),"to a new revision as soon as possible."),s("div",null,s(I,{fill:"#fefefe",width:30,height:30})))),K=a((e,t)=>1===e.length||0!==t?{reportAction:null}:{reportAction:()=>{O.current&&(O.current.scrollTop=0),F||A(ReportFormStates.SHOWN),u("curiosity/event",{event:"Clicked on Report link"})}},[O,F]),Y=s("section",{className:__default.sectionContent,"data-section":"revisions"},s("ul",{className:__default.list},_.revisions&&k.current&&_.revisions.map((e,t)=>s(RevisionItem,{revision:e,meta:k.current,partId:k.partId,key:e.revisionId,canDownloadRevisions:j||p.isLoggedIn,canManageRevisions:m(p,E.MANAGE_REVISIONS),locales:g.locale?[g.locale]:void 0,processing:L,...K(_.revisions,t)})))),Z=!w&&!F,J=w&&!T&&!F&&!x,Q=w&&!T&&!F&&!!x,ee=T&&!F&&!L,et=T&&!F&&L;return s(n,{},s("h3",{className:__default.title},H),s("div",{className:__default.scroller,ref:O},s("div",{className:__default.content,ref:B},Z&&G,J&&W,Q&&z,ee&&q,et&&X,w&&!!F&&s(RevisionReportForm,{meta:k.current,actions:P}),!w&&!!F&&s("section",{className:__default.section,"data-section":"welcome"},s("div",{className:__default.authReport,"aria-label":"auth"},"Please ",s(S,{"data-link":"signin",to:"/a/wa/signin"},"sign up")," for free to report issues."),s("a",{className:f.popupButtonLinkOrange,onClick:()=>A(0)},"Back to revisions")),C&&!F&&s("div",{className:__default.spinner},s(I,{className:$.revisions,width:25,height:24,fill:"#f7f6ee"})),!C&&!F&&Y)))};export{RevisionsPopupContent as default};