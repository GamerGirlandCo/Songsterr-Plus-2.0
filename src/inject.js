"use strict";
function bab() {
	let s = document.createElement("script");
	s.setAttribute("async", "");
	s.setAttribute("type", "module");
	s.setAttribute("src", browser.extension.getURL("latest/index.e8b15340.js"));
	s.setAttribute("crossorigin", "anonymous")
	document.body.appendChild(s)
	let app = document.getElementById("app");
	app.className = "Cdy1hg Cdy3h";
	// document.body.appendChild("link")
	
	console.log("!!!")
	let styes = `.Cek21w {
		bottom:30px;
		left:0;
		padding:0;
		height: unset !important;
		pointer-events:none;
		position:unset !important;
		right:0;
		height: 100% !important;
		-webkit-user-select:none;
		user-select:none;
		z-index:var(--zIndexShowroomFooter)
	}
	`
	var styleSheet = document.createElement("style")
	styleSheet.innerText = styes
	window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
			document.head.appendChild(styleSheet)
		})
	}, 5000);
	
}
bab()