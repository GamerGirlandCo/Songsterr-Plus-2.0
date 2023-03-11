const ast = require("abstract-syntax-tree/index.js")
const browser = require("webextension-polyfill")

browser.webRequest.onBeforeRequest.addListener(
		function shruggie(details) {
			let filter = browser.webRequest.filterResponseData(details.requestId);
			let decoder = new TextDecoder("utf-8")
			let encoder = new TextEncoder();

			let source = ''

			filter.ondata = event => {
				source += decoder.decode(event.data, {stream: true})
			}
			filter.onstop = event => {
				const tree = new ast(source, {webCompat: true})
				console.log(tree)
			}
		}
	)