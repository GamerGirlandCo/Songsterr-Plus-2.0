import{d as s,e as e,a as a}from"./preact.3d326435.js";import{t as r,M as t,bH as o,bR as n,j as i,K as l,L as p,f as c,T as d}from"./index.9148933a.js";import{A as u}from"./ActionButton.02df805a.js";import{I as h}from"./Input.bee63c02.js";import{h as w,i as m}from"./user.f5791bbf.js";import{P as f}from"./Panel.1b182ff5.js";import{S as g,C as v}from"./ContinueLink.e8f06f76.js";import{_ as P}from"./GenericPanel.module.67ac8ae5.js";import"./audio.1ae45449.js";import"./env.1ef38fce.js";var de=null,es=null,fr=null,it=null,ja=null,ko=null,pt=null,ru=null,zh=null,locales=[de,es,fr,it,ja,ko,pt,ru,zh];class ChangePassword extends s{password=e();passwordAgain=e();constructor(s){super(s),this.state={error:null,processing:!1,next:!1,errorPassword:"",errorPasswordAgain:""}}handleSubmit=async s=>{s.preventDefault();let e=this.password.current,a=this.passwordAgain.current;try{if(t([{field:e,validator:o},{field:a,validator:(s,a)=>n(s,e.value,a)}]),this.setState({processing:!0,error:null}),this.props.route.isRecover){let s=this.props.query.key||"",a=await w(s,e.value);this.props.dispatch("user/recoverPassword",a)}else{let s=await m(e.value);this.props.dispatch("user/changePassword",s)}this.setState({processing:!1,error:null,next:!0})}catch(s){this.setState({processing:!1,error:s})}};render(){let s;let{gettext:e}=i(locales);s=this.state.next?a(g,{key:"done",className:P.section,"data-section":"done"},a("h4",{className:P.title},e("Your password has been changed.")),a(v,{href:"/a/wa/account"},e("Click here to continue"))):a(g,{key:"form",className:P.section,"data-section":"recover"},a("h4",{className:P.title},e("Please enter your new password.")),a("form",{noValidate:!0,onSubmit:this.handleSubmit,action:""},a(l,{error:this.state.error}),a(h,{type:"password",label:e("New password"),name:"password",ref:this.password,error:this.state.error,autocomplete:"new-password"}),a(h,{type:"password",label:e("Once again"),name:"passwordAgain",ref:this.passwordAgain,error:this.state.error,autocomplete:"new-password"}),a("div",{className:P.actions},a(u,{title:e("Save"),processing:this.state.processing}),a(p,{to:this.props.route.isRecover?"/":"/a/wa/account",className:c.buttonLinkFloat},e("Cancel")))));let r=e(this.props.route.isRecover?"Recover Password":"Change Password"),t=this.props.route.isRecover?"recoverPassword":"account-password";return a(f,{id:t,title:r},a(d,null,s))}}var ChangePasswordPanel=r(ChangePassword,"user");export{ChangePasswordPanel as default};