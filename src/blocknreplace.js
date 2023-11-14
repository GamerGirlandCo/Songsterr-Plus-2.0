const {
	parse,
	generate,
	traverse,
	replace,
} = require("abstract-syntax-tree/index.js");
const ast = require("abstract-syntax-tree");
const browser = require("webextension-polyfill");
const beautify = require("js-beautify").js;

function parSnip(source) {
	// source = beautify(source, {
	// 	indent_size: 2,
	// 	space_in_empty_paren: true,
	// });
	let asArray = source.split("\n");
	let joined = asArray.join("\n");
	const tree = parse(joined, {
		webcompat: true,
		next: true,
		module: true,
	});
	console.log(tree);
	let identifier;
	traverse(tree, {
		enter(node) {
			if (node.type == "FunctionDeclaration") {
				let body0 = node.body.body[0];
				if (body0) {
					if (body0.type === "IfStatement") {
						let conseq = body0.consequent;
						if (conseq.argument) {
							console.log("conseq", conseq);
							if (
								conseq.argument.type == "ImportExpression" &&
								!!conseq.argument.source.value.match(/.*playerplus.*/i)
							) {
								if (body0.test.callee) {
									identifier = body0.test.callee.name;
								}
							}
						}
						console.log("cnode", node);
						console.log("b0", body0);
					}
				}
			}
		},
	});
	console.log("iden", identifier);
	replace(tree, (node) => {
		let finder = (a) => a.id.name === identifier;
		if (node.type === "VariableDeclaration" && node.kind == "var") {
			const blip = node.declarations.find(finder);
			if (!!blip) {
				console.log("refereeeee", node);
				node.declarations[node.declarations.findIndex(finder)].init.body = {
					type: "Literal",
					value: true,
				};
			}
		}
		return node;
	});
	return generate(tree);
}

if (!browser.webRequest.filterResponseData) {
	async function processEvent(debuggee, tab, source, method, params) {
		let continueParams = {
			requestId: params.requestId,
		};
		if (source.tabId === debuggee.tabId) {
			if (method === "Fetch.requestPaused") {
				let request_url = new URL(params.request.url, location);
				// we determine that this is the request we need, you can do this through the pattern
				if (
					request_url.pathname &&
					/https?:\/\/static\.songsterr.com\/production-main\/static\/latest\/index..+\.js/.test(
						request_url.href
					)
				) {
					// an example of how to get the response body in order to partially change it
					let res = await chrome.debugger.sendCommand(
						debuggee,
						"Fetch.getResponseBody",
						continueParams
					);
					let body = res.body;
					if (res.base64Encoded) {
						body = decodeURIComponent(b64DecodeUnicode(body));
					}

					// create and send a new response
					continueParams.responseCode = params.responseStatusCode;
					continueParams.responseHeaders = params.responseHeaders;
					continueParams.body = (function (str) {
						// first we use encodeURIComponent to get percent-encoded Unicode,
						// then we convert the percent encodings into raw bytes which
						// can be fed into btoa.
						return btoa(
							encodeURIComponent(str).replace(
								/%([0-9A-F]{2})/g,
								function toSolidBytes(match, p1) {
									return String.fromCharCode("0x" + p1);
								}
							)
						);
					})(parSnip(body));
					chrome.debugger.sendCommand(
						debuggee,
						"Fetch.fulfillRequest",
						continueParams
					);
				} else if (/AppFooter.*\.css/i.test(request_url)) {
					continueParams.responseCode = params.responseStatusCode;
					continueParams.responseHeaders = params.responseHeaders;
					continueParams.body = "";
					chrome.debugger.sendCommand(
						debuggee,
						"Fetch.fulfillRequest",
						continueParams
					);
				} else {
					// if the request is not ours, let it go without changes
					chrome.debugger.sendCommand(
						debuggee,
						"Fetch.continueRequest",
						continueParams
					);
				}
			}
		}
	}
	function setupDebugger(tab) {
		const debuggee = { tabId: tab.id };
		// The extension calls chrome.debugger.attach() on a tab
		// to capture network events when you click the extension's action button.
		chrome.debugger.detach(debuggee, () => {
			chrome.tabs.reload(debuggee.tabId, {bypassCache: true}, () => {
				chrome.debugger.attach(debuggee, "1.0", () => {
					chrome.debugger.sendCommand(debuggee, "Fetch.enable", {
						patterns: [
							{
								urlPattern: "*",
								requestStage: "Response",
							},
						],
					});
				});
				chrome.debugger.onEvent.addListener((source, method, params) =>
					processEvent(debuggee, tab, source, method, params)
				);
			});

		});
	}

	chrome.action.onClicked.addListener(function (tab) {
		setupDebugger(tab);
	});
} else {
	browser.webRequest.onBeforeRequest.addListener(
		function shruggie(details) {
			let filter = browser.webRequest.filterResponseData(details.requestId);
			let decoder = new TextDecoder("utf-8");
			let encoder = new TextEncoder();

			let source = "";

			filter.ondata = (event) => {
				source += decoder.decode(event.data, { stream: true });
			};
			filter.onstop = (event) => {
				filter.write(encoder.encode(parSnip(source)));
				filter.close();
			};
			return {};
		},
		{
			urls: [
				"https://static.songsterr.com/production-main/static/latest/index-*.js",
			],
		},
		["blocking"]
	);
	function cancel(requestDetails) {
		console.log("blocking!: " + requestDetails.url);
		return {
			//redirectUrl: "https://someserver.com/index.3768f4c5_.js"
			cancel: true,
		};
	}
	browser.webRequest.onBeforeRequest.addListener(
		cancel,
		{
			urls: [
				"https://static.songsterr.com/production-main/static/latest/AppFooter*.css",
			],
		},
		["blocking"]
	);
}

function b64DecodeUnicode(str) {
	// Going backwards: from bytestream, to percent-encoding, to original string.
	return atob(str)
		.split("")
		.map(function (c) {
			return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
		})
		.join("");
}
