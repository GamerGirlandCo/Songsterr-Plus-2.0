import{H as e,I as o,bT as s,L as t,_ as i,p as a,q as r}from"./index.3637aaf7.js";import{a as l,p as n,v as c,d as g}from"./preact.f8a34c73.js";import{n as d}from"./ActionButton.e7edc72b.js";import{d as h}from"./Input.4b13d914.js";import{v as p,l as u,h as m,x as f}from"./FormError.ba736668.js";import{u as w}from"./user.804c31aa.js";import{r as C,s as S,i as v}from"./google.04041246.js";import{w as b}from"./Panel.4e04b14d.js";class N extends l{render(){const e=this.props.className;return c("svg",{width:40,height:40,viewBox:"0 0 26 26",className:e},c("g",{fill:"none",fillRule:"evenodd"},c("rect",{width:"26",height:"26",fill:"#FFF",rx:"2"}),c("g",{fill:"#000"},c("path",{fill:"#EA4335",d:"M13 7.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C17.46 4.89 15.43 4 13 4 9.48 4 6.44 6.02 4.96 8.96l2.91 2.26C8.6 9.05 10.62 7.48 13 7.48z"}),c("path",{fill:"#4285F4",d:"M21.64 13.2c0-.74-.06-1.28-.19-1.84H13v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"}),c("path",{fill:"#FBBC05",d:"M7.88 14.78a5.54 5.54 0 0 1-.3-1.78c0-.62.11-1.22.29-1.78L4.96 8.96A9.008 9.008 0 0 0 4 13c0 1.45.35 2.82.96 4.04l2.92-2.26z"}),c("path",{fill:"#34A853",d:"M13 22c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74l-2.91 2.26C6.45 19.98 9.48 22 13 22z"}),c("path",{fill:"none",d:"M4 4h18v18H4z"}))))}}const y=e=>{let{onClick:o,processing:s,disabled:t,title:l,id:n}=e;return c("button",{id:n,className:i.google,onClick:o,disabled:t||s},s&&c(a,{width:25,height:20,fill:"#fff",className:r.google}),!s&&c(N,{className:i.googleIcon}),c("span",null,l))};var x=e(class extends l{constructor(){super(...arguments),o(this,"email",n()),o(this,"password",n()),o(this,"state",{error:null,processing:!1,googleError:null,googleInitialized:!1,googleProcessing:!1}),o(this,"redirect",(()=>{const{next:e}=this.props.query;e&&e.includes("/mailer/")?window.location.replace(window.location.origin+e):this.props.dispatch("navigate",s(e))})),o(this,"handleSignin",(async e=>{e.preventDefault();const o=this.email&&this.email.current,s=this.password&&this.password.current;if(o&&s)try{p([{field:o,validator:u},{field:s,validator:m}]),this.setState({processing:!0,error:null});const e=await w(o.value,s.value);this.props.dispatch("user/signIn",e),this.setState({processing:!1,error:null}),this.redirect()}catch(e){this.setState({processing:!1,error:e})}})),o(this,"handleGoogleSignin",(async e=>{e.preventDefault();try{this.setState({googleProcessing:!0,googleError:null});const e=await C();this.props.dispatch("user/googleSignIn",e),this.setState({googleProcessing:!1,googleError:null}),this.redirect()}catch(e){const o=S(e);this.setState({googleProcessing:!1,googleError:o})}}))}componentDidMount(){v().then((()=>{this.setState({googleInitialized:!0})}))}render(){const e=this.props.query.next,o=e?`?next=${encodeURIComponent(e)}`:"",{googleInitialized:s,googleError:a,googleProcessing:r}=this.state;return c(b,{title:"Sign In",id:this.props.id},c(g,null,c("section",{className:"Cou1l3 Cou2at","data-section":"google"},c("form",{noValidate:!0,onSubmit:this.handleGoogleSignin},c(f,{error:a}),c(y,{id:"google-signin",title:s?"Sign in with Google":"Loading...",onClick:this.handleGoogleSignin,processing:r,disabled:!s}))),c("section",{className:"Cou1l3 Coubs","data-section":"signin"},c("div",{className:"Cou2xu"},c("span",null,"OR")),c("form",{noValidate:!0,onSubmit:this.handleSignin,action:""},c(f,{error:this.state.error}),c(h,{ref:this.email,name:"email",type:"email",label:"Email",autocomplete:"email",error:this.state.error}),c(h,{ref:this.password,name:"password",type:"password",label:"Password",autocomplete:"current-password",error:this.state.error}),c("div",{className:"Cou1kb"},c(d,{id:"signin",title:"Sign in",processing:this.state.processing})))),c("section",{className:"Cou1l3 Couf6","data-section":"forgot"},c(t,{to:"/a/wa/forgotPassword"},"Forgot your password?")),c("section",{className:"Cou1l3 Cou2fe","data-section":"signup"},c("h3",{className:"Cou30y"},"Don't have an account?"),c(t,{to:"/a/wa/signup"+o,id:"create_acc",className:i.buttonGreen},"Sign up for a free account"))))}},"query");export{x as default};
//# sourceMappingURL=SigninPanel.adf8bdd5.js.map