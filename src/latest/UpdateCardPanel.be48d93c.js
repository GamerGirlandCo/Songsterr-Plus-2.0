import{d as t,a as e}from"./preact.bf58aca5.js";import{w as a,k as s,T as o}from"./index.e8b15340.js";import{P as i}from"./PaymentForm.2b254a0c.js";import{P as l}from"./Panel.98ba2c65.js";import{C as n,S as r}from"./ContinueLink.9b697552.js";import"./ActionButton.45f3bd1f.js";let title="ijvl",section="ij34h",sectionForm="ij34h ij20p",footer="ij1cj",sectionDone="ij34h iju3",__default={title:"ijvl",section:"ij34h",sectionForm:"ij34h ij20p",footer:"ij1cj",sectionDone:"ij34h iju3"};var de=null,es=null,fr=null,it=null,ja=null,ko=null,pt=null,ru=null,zh=null,locales=[de,es,fr,it,ja,ko,pt,ru,zh];class UpdateCardPanel extends t{constructor(t){super(t),this.state={next:!1}}toggleNext=()=>{this.setState({next:!0})};render(){let t;let{gettext:a}=s(locales);return t=this.state.next?e(r,{key:"paying-success",className:__default.sectionDone,"data-section":"done"},e("h4",{className:__default.title},a("Your credit card was successfully updated.")),e(n,{},a("Click here to continue"))):e(r,{key:"updateCard",className:__default.sectionForm,"data-section":"form"},e(i,{mode:"update",submitButtonId:"updateCard",submitButtonName:a("Update"),cancelLink:"/a/wa/account",toggleNext:this.toggleNext})),e(l,{title:a("Update card"),id:this.props.id},e(o,null,t))}}var UpdateCardPanel$1=a(UpdateCardPanel);export{UpdateCardPanel$1 as default};