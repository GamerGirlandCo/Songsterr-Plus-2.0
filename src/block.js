browser.pageAction.onClicked.addListener(function(tab) {
	console.log(tab)
	window.location.reload()
	browser.tabs.executeScript({
		file: "inject.js"
    });
});
function cancel(requestDetails) {
	console.log("blocking!: " + requestDetails.url);
	return {
	//redirectUrl: "https://gamergirlandco.github.io/index.3768f4c5_.js"
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