browser.pageAction.onClicked.addListener(function(tab) {
	console.log(tab)
		browser.tabs.reload().then(() => {
		console.log("refreshed")
		browser.tabs.executeScript({
			file: "inject.js"
		});
		console.log("injected")
	})
});
async function asyncReload() {
	window.location.reload(true)
}
function cancel(requestDetails) {
	console.log("blocking!: " + requestDetails.url);
	return {
		//redirectUrl: "https://someserver.com/index.3768f4c5_.js"
		cancel: true
	};
}
browser.webRequest.onBeforeRequest.addListener(
	cancel,
	{urls:["https://www.songsterr.com/static/*index.*.js"]},
	["blocking"]
);

browser.webRequest.onBeforeRequest.addListener(
	cancel,
	{urls:["https://www.songsterr.com/static/*preact.*.js"]},
	["blocking"]
);