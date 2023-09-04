const {parse, generate, traverse, replace} = require("abstract-syntax-tree/index.js")
const ast = require("abstract-syntax-tree")
const browser = require("webextension-polyfill")
const beautify = require('js-beautify').js

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
				source = beautify(source, {indent_size: 2, space_in_empty_paren: true})
				let asArray = source.split("\n")
				let joined = asArray.join("\n")
				const tree = parse(joined, {webcompat: true, next: true, module: true})
				console.log(tree)
				let identifier;
				traverse(tree, {
					enter(node) {
						if(node.type == "FunctionDeclaration") {
							let body0 = node.body.body[0]
							if(body0) {
								if(body0.type === "IfStatement") {
									let conseq = body0.consequent;
									if (conseq.argument) {
										console.log("conseq", conseq)
										if (
											conseq.argument.type == "ImportExpression" &&
											!!conseq.argument.source.value.match(/.*playerplus.*/i)
										) {
											if(body0.test.callee) {
												identifier = body0.test.callee.name
											}
										}
									}
									console.log("cnode", node)
									console.log("b0", body0)
								}
							}
						}
					}
				})
				console.log("iden", identifier)
				replace(tree, node => {
					let finder = a => a.id.name === identifier
					if(node.type === "VariableDeclaration" && node.kind == "var") {
						const blip = node.declarations.find(finder)
						if(!!blip) {
							console.log("refereeeee", node)
							node.declarations[node.declarations.findIndex(finder)].init.body = {
								type: "Literal",
								value: true
							}
						}
					}
					return node
				})
				filter.write(encoder.encode(generate(tree)))
				filter.close()
			}
			return {}
		},
		{
			urls: ["https://www.songsterr.com/static/latest/index.*.js"]
		},
		['blocking']
	)
function cancel(requestDetails) {
	console.log("blocking!: " + requestDetails.url);
	return {
		//redirectUrl: "https://someserver.com/index.3768f4c5_.js"
		cancel: true
	};
}
browser.webRequest.onBeforeRequest.addListener(
	cancel,
	{urls:["https://www.songsterr.com/static/latest/AppFooter*.css"]},
	["blocking"]
);