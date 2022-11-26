let e, t, n, i, r, a, s, o, l;
import {
	B as c,
	q as u,
	p as d,
	F as p,
	s as h,
	h as f,
	a as g,
	o as m,
	P as y,
	U as v,
	T as b,
	d as w,
	x as S,
	b as C,
	c as k,
	w as x,
	e as E,
	_ as T,
	y as _,
	S as P,
} from "./preact.df92b1fd.js";
async function L() {
	if (
		((window.global = window.global || window),
		(window.AudioContext = window.AudioContext || window.webkitAudioContext),
		"object" == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
	)
		for (let [e, t] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))
			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] =
				"function" == typeof t ? () => {} : null;
	window.PASSIVE = !1;
	try {
		let n = Object.defineProperty({}, "passive", {
			get() {
				window.PASSIVE = { passive: !0 };
			},
		});
		window.addEventListener("test", null, n);
	} catch (i) {}
	if (
		("function" != typeof SVGElement.prototype.focus &&
			(SVGElement.prototype.focus = () => {}),
		"function" != typeof CSSRuleList.prototype[Symbol.iterator] &&
			(CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
		"undefined" == typeof console)
	) {
		let r = () => {};
		console = { error: r, info: r, log: r, warn: r };
	}
}
let A = !0,
	N = void 0,
	I = "06aed19e",
	M = 27;
class B {
	constructor(e, t) {
		for (let n of ((this.events = {}), (this.state = t || {}), e)) n && n(this);
		t || this.dispatch("@init", 1);
	}
	on(e, t) {
		return (
			(this.events[e] || (this.events[e] = [])).push(t),
			() => {
				this.events[e] = this.events[e].filter((e) => e !== t);
			}
		);
	}
	dispatch = (() => {
		var e = this;
		return function (t) {
			let n;
			for (
				var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), a = 1;
				a < i;
				a++
			)
				r[a - 1] = arguments[a];
			let { events: s } = e,
				o = {},
				l = !1;
			if (s[t])
				for (let c of s[t]) {
					let u = c(e.state, ...r);
					u &&
						("function" != typeof u.then
							? (Object.assign(o, u),
							  (l = !0),
							  (e.state = Object.assign({}, e.state, u)))
							: (n || (n = []), n.push(u)));
				}
			return (
				Function(
					atob(
						"d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp"
					)
				)(),
				l && e.dispatch("@changed", o),
				n ? Promise.all(n) : void 0
			);
		};
	})();
	get() {
		return this.state;
	}
}
let D = (e) => {},
	z = /(\/|-)((drum|bass)-)?(tab|chords)-(b-|g-)?s(\d+)(t(\d+))?(\/r(\d+))?/i,
	O = { page: "", isPanel: !1 },
	R = [
		["/", { page: "search", isPanel: !0 }],
		["/a/wa/favorites", { page: "favorites", isPanel: !0 }],
		["/a/wa/plus", { page: "plus", isPanel: !0 }],
		["/a/wa/privacy", { page: "privacy", isPanel: !0 }],
		["/a/wa/terms", { page: "terms", isPanel: !0 }],
		[
			"/a/wa/do-not-sell-my-personal-information",
			{ page: "dnsmpd", isPanel: !0 },
		],
		["/a/wa/submit", { page: "submit", isPanel: !0 }],
		["/a/wa/about", { page: "about", isPanel: !0 }],
		["/a/wa/jobs", { page: "jobs", isPanel: !0 }],
		["/a/wa/help", { page: "help", isPanel: !0 }],
		["/a/wa/signin", { page: "signin", isPanel: !0 }],
		["/a/wa/signup", { page: "signup", isPanel: !0 }],
		[
			"/a/wa/recoverpassword",
			{ page: "recoverpassword", isPanel: !0, isRecover: !0 },
		],
		["/a/wa/account/password", { page: "changepassword", isPanel: !0 }],
		["/a/wa/forgotpassword", { page: "forgotpassword", isPanel: !0 }],
		["/a/wa/account", { page: "account", isPanel: !0 }],
		["/a/wa/account/subscription", { page: "cancelPlus", isPanel: !0 }],
		["/a/wa/account/deactivate", { page: "deactivate", isPanel: !0 }],
		["/a/wa/account/card", { page: "updateCard", isPanel: !0 }],
		["/a/wa/plus/payment", { page: "subscribePlus", isPanel: !0 }],
		["/a/wa/plus/coupon", { page: "coupon", isPanel: !0 }],
		["/a/wa/howtoreadtab", { page: "howToReadTab", isPanel: !0 }],
		["/a/wa/mytabs", { page: "mytabs", isPanel: !0 }],
		["/tags", { page: "tags", isPanel: !1 }],
		["/tags/", { page: "tags", isPanel: !1 }],
		["/a/wsa/tags", { page: "tags", isPanel: !1 }],
		["/a/wsa/tags/", { page: "tags", isPanel: !1 }],
		[
			z,
			(e) => {
				let [, , , t, n, , i, , r, , a] = e;
				return "tab" === n
					? {
							partInstrument: t || null,
							page: n,
							songId: +i,
							partId: r ? +r : null,
							revisionId: a ? +a : null,
							isPanel: !1,
					  }
					: {
							page: n,
							songId: +i,
							chordsRevisionId: a ? +a : null,
							isPanel: !1,
					  };
			},
		],
		[
			/(\/|-|undefined)tabs-a(\d+)/i,
			(e) => ({ page: "artist", artistId: e[2] ? +e[2] : null, isPanel: !0 }),
		],
		[
			/\/a\/wsa\/(.*)-tabs-t(\d+)/i,
			(e) => ({ page: "tag", isPanel: !1, name: e[1].replace(/-/, " ") }),
		],
		[/tags\/(.*)/i, (e) => ({ page: "tag", isPanel: !1, name: e[1] })],
	];
function $(e) {
	for (let [t, n] of R)
		if (t instanceof RegExp) {
			let i = e.match(t);
			if (i) {
				if ("function" == typeof n) return n(i);
				return n;
			}
		} else if (e === t) {
			if ("function" == typeof n) return n.apply(null);
			return n;
		}
	return O;
}
function F(e) {
	let t = {};
	return (
		e
			.split("&")
			.map((e) => e.split("=").map(decodeURIComponent))
			.forEach((e) => {
				t[e[0]] = e[1] || "";
			}),
		t
	);
}
function H(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function V(e, t, n) {
	if (n.user.isLoggedIn) {
		if ("/a/wa/signin" === e || "/a/wa/signup" === e) return "/a/wa/account";
		if (true) {
			if ("/a/wa/account/deactivate" === e || e.startsWith("/a/wa/plus"))
				return "/a/wa/account";
		} else if ("/a/wa/account/card" === e || "/a/wa/account/subscription" === e)
			return "/a/wa/account";
	} else {
		if (e.startsWith("/a/wa/account")) return "/a/wa/signin?next=account";
		if ("/a/wa/plus/payment" === e) return "/a/wa/signin?next=subscribe";
		if (e.startsWith("/a/wa/plus/coupon")) {
			let i = new URLSearchParams(t);
			return i.set("next", "coupon"), `/a/wa/signin?${i}`;
		}
	}
}
function j(e, t, n) {
	let i = e ? e.toLowerCase() : "/";
	return V(i, t, n);
}
function U(e) {
	let t = e.page;
	return "tab" === t || "chords" === t || "tag" === t || "tags" === t;
}
function G(e, t, n, i) {
	let r = { route: $(e.toLowerCase()) };
	t && t.length ? (r.query = F(t)) : H(n.query) || (r.query = {}),
		U(r.route) &&
			((r.routeContent = r.route),
			r.query
				? (r.queryContent = r.query)
				: H(n.queryContent) || (r.queryContent = {})),
		i.dispatch("route/change", r);
}
let W = (e) => {
		e.on("navigate", (t, n) => {
			let [i, r] = n.split("#")[0].split("?"),
				a = j(i, r, t);
			return (
				a && (([i, r] = a.split("?")), (n = a)),
				history.pushState(null, "", n),
				G(i, r, t, e)
			);
		}),
			e.on("popstate", (t, n) => {
				let { pathname: i, search: r } = n,
					a = r && r.substring(1),
					s = j(i, a, t);
				if (s) {
					console.log("Found redirect to", s),
						history.replaceState(null, "", s),
						e.dispatch("navigate", s);
					return;
				}
				return G(i, a, t, e);
			}),
			e.on("route/change", (e, t) => t),
			window.addEventListener("popstate", () => {
				e.dispatch("popstate", {
					pathname: location.pathname,
					search: location.search,
				});
			});
	},
	q = 11531520,
	X = 6e4,
	Y = (e) => e[0],
	K = (e) => e[1],
	J = (e) => e / 11531520,
	Z = (e, t) => Math.floor((J(e) / t.bpm) * t.type * 6e4),
	Q = 24,
	ee = 32,
	et = 1024,
	en = 31;
function ei(e) {
	return 1024 === e;
}
function er(e) {
	return e >= 24 && e <= 31;
}
function ea(e) {
	return e >= 32 && e <= 39;
}
let es = 0,
	eo = 1,
	el = 2,
	ec = 3,
	eu = 4,
	ed = 5,
	ep = 6,
	eh = 7,
	ef = 8,
	eg = 9,
	em = 10,
	ey = 11,
	ev = 12,
	eb = 13,
	ew = 14,
	eS = 15,
	eC = 16,
	ek = 17,
	ex = 18,
	eE = 19,
	eT = 20,
	e_ = 21,
	eP = 22,
	eL = 23,
	eA = 24;
function eN(e) {
	return 1024 === e
		? 24
		: e < 32
		? e < 24
			? e < 16
				? e < 8
					? 0
					: 1
				: e < 21
				? 2
				: 3
			: e < 27
			? e < 26
				? 4
				: 5
			: 6
		: e < 40
		? 7
		: e < 68
		? e < 47
			? e < 43
				? e < 42
					? 8
					: 9
				: e < 46
				? 10
				: 11
			: e < 56
			? e < 48
				? 12
				: 13
			: e < 64
			? 14
			: 15
		: e < 96
		? e < 80
			? e < 72
				? 16
				: 17
			: e < 88
			? 18
			: 19
		: e < 112
		? e < 104
			? 20
			: 21
		: e < 120
		? 22
		: 23;
}
let eI = (e) =>
		e
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\/|\s+/g, "-")
			.replace(/[^a-z0-9-_]/g, ""),
	eM = function () {
		for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
			t[n] = arguments[n];
		return eI(t.join("-"));
	},
	eB = (e) => e.replace(/-+/g, "-").replace(/^-*|-$/g, ""),
	eD = (e) => e.replace(/^the-/g, "");
function ez(e, t, n) {
	let i = e.views || 0,
		r = !0;
	for (let a of t) {
		if (e === a) {
			r = !1;
			continue;
		}
		if (n(a.instrumentId)) {
			let s = a.views || 0;
			if (s > i || (s === i && r)) return !0;
		}
	}
	return !1;
}
function eO(e) {
	return e.endsWith("-bass") || e.endsWith("-drum") ? e.slice(0, -4) : e;
}
function eR(e, t, n) {
	let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (!e) return "/";
	let r = "",
		a = !0;
	if (e.tracks && void 0 !== t && !n) {
		let s = null,
			o = e.tracks[t];
		o &&
			(ei(o.instrumentId)
				? ((r = "-drum"), (s = ei))
				: ea(o.instrumentId)
				? ((r = "-bass"), (s = ea))
				: er(o.instrumentId) && (s = er)),
			(a = i || !s || ez(o, e.tracks, s));
	}
	let l = eM(e.artist, e.title);
	a || (l = eO(l));
	let c = n ? `/r${n}` : "",
		u = a ? `t${t}` : "";
	return "/a/wsa/" + eD(eB(l + r + `-tab-s${e.songId}${u}${c}`));
}
function e$(e, t) {
	if (!e) return "/";
	let n = t ? `/r${t}` : "",
		i = eM(e.artist, e.title);
	return "/a/wsa/" + eD(eB(i + `-tab-s${e.songId}${n}`));
}
function eF(e, t) {
	let n = "",
		i = "",
		r = e.tracks && e.tracks[t];
	r &&
		(ei(r.instrumentId)
			? (i = "-drum")
			: ea(r.instrumentId)
			? (i = "-bass")
			: er(r.instrumentId) || (n = `t${r.partId}`));
	let a = eM(e.artist, e.title);
	return "/a/wsa/" + eD(eB((a = eO(a)) + i + `-tab-s${e.songId}${n}`));
}
function eH(e) {
	let t = eM(e.artist || "");
	return "/a/wsa/" + eB(t + `-tabs-a${e.artistId}`);
}
function eV(e) {
	if (!e) return "/";
	let t = eM(e.artist, e.title);
	return "/a/wsa/" + eD(eB(t + `-chords-s${e.songId}`));
}
!(function (e) {
	(e[(e.V1 = 1)] = "V1"),
		(e[(e.V2 = 2)] = "V2"),
		(e[(e.V4 = 4)] = "V4"),
		(e[(e.MASTER = 2)] = "MASTER"),
		(e[(e.DEV = 777)] = "DEV");
})(ty || (ty = {})),
	(function (e) {
		(e[(e.TOO_LONG = 228)] = "TOO_LONG"),
			(e[(e.MIDI_FAILED = 229)] = "MIDI_FAILED"),
			(e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
			(e[(e.UNKNOWN = 500)] = "UNKNOWN");
	})(tv || (tv = {}));
let ej = [
		{
			displayName: "V1",
			version: ty.V1,
			bucket: "audio",
			bucketDomains: ["audio1", "audio2", "audio3"],
			audioHashPropertyName: "audio",
		},
		{
			displayName: "V2",
			version: ty.V2,
			versionLegacy: "audioV2",
			bucket: "audio3",
			bucketDomains: ["audio31", "audio32", "audio33"],
			audioHashPropertyName: "audioV2",
			audioErrorPropertyName: "audioV2Error",
			midiHashPropertyName: "audioV2Midi",
		},
		{
			displayName: "V4",
			version: ty.V4,
			bucket: "audio4",
			bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
			audioHashPropertyName: "audioV4",
			audioErrorPropertyName: "audioV4Error",
			midiHashPropertyName: "audioV4Midi",
		},
		{
			displayName: "Dev",
			version: ty.DEV,
			versionLegacy: "next",
			bucket: "audio2",
			bucketDomains: ["audio2"],
			audioHashPropertyName: "nextAudio",
			midiHashPropertyName: "nextMidi",
		},
	],
	eU = new Map();
function eG(e) {
	return ej.filter((t) => !!e[t.audioHashPropertyName]).map((e) => e.version);
}
function eW(e, t) {
	return t === ty.V2
		? e.audioV2Midi || null
		: t === ty.V4
		? e.audioV4Midi || null
		: (t === ty.DEV && e.nextMidi) || null;
}
function eq(e, t) {
	let n = eJ(t),
		i = e[n.audioHashPropertyName],
		r = n.audioErrorPropertyName ? e[n.audioErrorPropertyName] : null,
		a = eW(e, t);
	return {
		version: t,
		versionInfo: n,
		audio: i,
		audioError: r || void 0,
		midi: a || void 0,
	};
}
function eX(e) {
	return e === ty.V2 ? 2 : 3;
}
function eY(e) {
	switch (e) {
		case ty.V2:
			return 2;
		case ty.V4:
			return 4;
		case ty.DEV:
			return 3;
	}
	throw Error(`Illegal argument ${e}`);
}
ej.forEach((e) => eU.set(e.version, e));
class eK {
	numericVersion = 0;
	payload = "";
	constructor(e, t) {
		(this.numericVersion = e), (this.payload = t);
	}
	encode() {
		return eK.encode(this);
	}
	static getLatestAVTag(e) {
		return eY(e);
	}
	static getLatestMVTag(e) {
		return eX(e);
	}
	static encode(e) {
		return `v${e.numericVersion}-${e.payload}`;
	}
	static decode(e) {
		if (!/^v\d+-/.test(e)) return null;
		let [t, n] = e.split("-");
		return new eK(+t.substring(1), n);
	}
}
function eJ(e) {
	let t = eU.get(e);
	if (t) return t;
	throw Error(`Unable to get audio version info for version ${e}`);
}
class eZ {
	has(e, t) {
		return eG(e).includes(t);
	}
	getAll(e) {
		return eG(e);
	}
	get(e, t) {
		return eq(e, t);
	}
	getMVTagForEnv(e, t) {
		let n = eq(e, t),
			i = n.midi;
		return i ? eK.decode(i) : null;
	}
	getAVTagForEnv(e, t) {
		let n = eq(e, t),
			i = n.audio;
		return i ? eK.decode(i) : null;
	}
	hasLatestAVTag(e, t) {
		let n = this.getAVTagForEnv(e, t);
		return null != n && n.numericVersion >= eY(t);
	}
	hasLatestMVTag(e, t) {
		let n = this.getMVTagForEnv(e, t);
		return null != n && n.numericVersion >= eX(t);
	}
	hasLatestSound(e, t) {
		let n = this.getAVTagForEnv(e, t);
		if (null == n) return !1;
		let i = eX(t),
			r = eY(t),
			a = this.getMVTagForEnv(e, t);
		return null != a
			? n.numericVersion >= r && a.numericVersion >= i
			: n.numericVersion >= r;
	}
}
let eQ = new eZ();
!(function (e) {
	(e.ADMINISTRATE = "administrate"),
		(e.MANAGE_SONGS = "manage.songs"),
		(e.MANAGE_REVISIONS = "manage.revisions"),
		(e.UPLOAD_ALL_FILES = "upload.all.files"),
		(e.USE_ADMIN_TOOLS = "use.admin.tools"),
		(e.USE_TAB_EDITOR = "use.tab.editor"),
		(e.USE_VIDEO_SYNCHRONISATION = "use.video.synchronisation");
})(tb || (tb = {})),
	(function (e) {
		(e.FREE = "free"),
			(e.PLUS = "plus"),
			(e.BETA = "beta"),
			(e.BASIC = "basic");
	})(tw || (tw = {})),
	(function (e) {
		(e.NONE = "none"), (e.LIFETIME = "lifetime");
	})(tS || (tS = {})),
	(function (e) {
		(e.BRAINTREE = "braintree"),
			(e.APP_STORE = "appstore"),
			(e.GOOGLE_PLAY = "googleplay"),
			(e.COUPON = "coupon"),
			(e.MANUAL = "manual"),
			(e.LEGACY_PAYPAL = "paypal");
	})(tC || (tC = {})),
	(function (e) {
		(e.ACTIVE = "active"),
			(e.CANCELED = "canceled"),
			(e.EXPIRED = "expired"),
			(e.OUTDATED = "outdated");
	})(tk || (tk = {}));
let e1 = {
		plus: { id: "plus", currency: "USD", price: "9.90" },
		plus_usd_1_49: { id: "plus_usd_1_49", currency: "USD", price: "1.49" },
		plus_usd_2_99: { id: "plus_usd_2_99", currency: "USD", price: "2.99" },
		plus_usd_4_99: { id: "plus_usd_4_99", currency: "USD", price: "4.99" },
		plus_usd_5_39: { id: "plus_usd_5_39", currency: "USD", price: "5.39" },
		plus_usd_5_49: { id: "plus_usd_5_49", currency: "USD", price: "5.49" },
		plus_usd_5_99: { id: "plus_usd_5_99", currency: "USD", price: "5.99" },
		plus_usd_6_99: { id: "plus_usd_6_99", currency: "USD", price: "6.99" },
		plus_usd_7_99: { id: "plus_usd_7_99", currency: "USD", price: "7.99" },
		plus_usd_8_49: { id: "plus_usd_8_49", currency: "USD", price: "8.49" },
		plus_usd_9_99: { id: "plus_usd_9_99", currency: "USD", price: "9.99" },
		plus_usd_10_53: { id: "plus_usd_10_53", currency: "USD", price: "10.53" },
		plus_eur_4_99: { id: "plus_eur_4_99", currency: "EUR", price: "4.99" },
		plus_eur_5_99: { id: "plus_eur_5_99", currency: "EUR", price: "5.99" },
		plus_eur_6_99: { id: "plus_eur_6_99", currency: "EUR", price: "6.99" },
		plus_eur_9_99: { id: "plus_eur_9_99", currency: "EUR", price: "9.99" },
		plus_eur_10_99: { id: "plus_eur_10_99", currency: "EUR", price: "10.99" },
		plus_aud_11_99: { id: "plus_aud_11_99", currency: "AUD", price: "11.99" },
		plus_brl_19_90: { id: "plus_brl_19_90", currency: "BRL", price: "19.90" },
		plus_cad_9_99: { id: "plus_cad_9_99", currency: "CAD", price: "9.99" },
		plus_chf_12_90: { id: "plus_chf_12_90", currency: "CHF", price: "12.90" },
		plus_clp_4200: { id: "plus_clp_4200", currency: "CLP", price: "4200" },
		plus_gbp_9_99: { id: "plus_gbp_9_99", currency: "GBP", price: "9.99" },
		plus_jpy_980: { id: "plus_jpy_980", currency: "JPY", price: "980" },
		plus_mnx_115: { id: "plus_mnx_115", currency: "MXN", price: "115" },
		plus_sek_109: { id: "plus_sek_109", currency: "SEK", price: "109" },
	},
	e0 = (e) => e1[e],
	e2 = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = t ? "/mo." : "";
		return "USD" === e.currency
			? `\u0024${e.price}${n}`
			: "EUR" === e.currency
			? `\u20ac${e.price}${n}`
			: "AUD" === e.currency
			? `A\u0024${e.price}${n}`
			: "BRL" === e.currency
			? `R\u0024\u00a0${e.price}${n}`
			: "CAD" === e.currency
			? `\u0024${e.price}${n}`
			: "CHF" === e.currency
			? `CHF\u00a0${e.price}${n}`
			: "CLP" === e.currency
			? `CLP\u0024${e.price}${n}`
			: "GBP" === e.currency
			? `\u00a3${e.price}${n}`
			: "JPY" === e.currency
			? `\u00a5${e.price}${n}`
			: "MXN" === e.currency
			? `MX\u0024${e.price}${n}`
			: "SEK" === e.currency
			? `${e.price}${n}\u00a0kr`
			: `${e.currency} ${e.price}${n}`;
	};
function e5(e) {
	return e;
}
class e4 extends Error {
	constructor(e, t, ...n) {
		super(...n),
			Error.captureStackTrace && Error.captureStackTrace(this, e4),
			(this.name = "ValidationError"),
			(this.reasons = e),
			(this.message = t || "Form validation failed.");
	}
}
class e3 extends e4 {
	constructor(e, t, ...n) {
		super(e, t, ...n),
			Error.captureStackTrace && Error.captureStackTrace(this, e3),
			(this.name = "ValidationWarning");
	}
}
class e8 extends Error {
	constructor(...e) {
		super(...e),
			Error.captureStackTrace && Error.captureStackTrace(this, e8),
			(this.name = "FraudError"),
			(this.message = "Email verification failed.");
	}
}
class e6 extends Error {
	constructor(e, ...t) {
		super(...t),
			Error.captureStackTrace && Error.captureStackTrace(this, e8),
			(this.name = "RestrainError"),
			(this.action = e),
			(this.message = "Your actions appear suspicious.");
	}
}
class e9 extends Error {
	constructor(...e) {
		super(...e),
			Error.captureStackTrace && Error.captureStackTrace(this, e9),
			(this.name = "FetchError"),
			(this.message = "Network error occurred. Please try again later.");
	}
}
class e7 extends Error {
	constructor(e, t, ...n) {
		super(...n),
			Error.captureStackTrace && Error.captureStackTrace(this, e7),
			(this.name = "NetworkError"),
			(this.status = e),
			(this.message = `Network error occurred (${e}). Please try again later.`),
			"undefined" != typeof navigator &&
				(this.onLine = navigator && navigator.onLine);
	}
}
let te = 6,
	tt = 20;
async function tn(e, t, n) {
	let i =
			arguments.length > 3 && void 0 !== arguments[3]
				? arguments[3]
				: { Accept: "application/json" },
		r = 0,
		a = "",
		s = { headers: i, signal: n };
	for (let o = 0; o < 6 && 404 !== r; o++) {
		try {
			if (n.aborted) return;
			let l = await fetch(e(o), s);
			if (n.aborted) return;
			if (l.ok)
				return await ("application/json" === i.Accept
					? l.json()
					: "text/plain" === i.Accept
					? l.text()
					: l.arrayBuffer());
			(r = l.status),
				(a = 404 === l.status ? "Not Found" : l.statusText || "Network Error");
		} catch (c) {
			if (n.aborted || "AbortError" === c.name) return;
			console.error(c), (r = 0), (a = c.message || "Network Error");
		}
		await new Promise((e) => setTimeout(e, 20 * o));
	}
	throw new e7(r, a);
}
let ti = "data",
	tr = "revisions",
	ta = 1,
	ts = () => {
		if ("indexedDB" in window)
			try {
				let t = window.indexedDB.open(ti, 1);
				(t.onupgradeneeded = () => {
					try {
						let e = t.result;
						e &&
							((e.onerror = (e) => {
								console.error(t.error), e.preventDefault();
							}),
							e.createObjectStore(tr));
					} catch (n) {
						console.error(n);
					}
				}),
					(t.onerror = (e) => {
						console.error(t.error), e.preventDefault();
					}),
					(t.onblocked = (e) => {
						console.error("Request to indexedDB was blocked!"),
							e.preventDefault();
					}),
					(t.onsuccess = () => {
						function n(t) {
							t.preventDefault(), (e = void 0);
						}
						((e = t.result).onabort = n), (e.onclose = n);
					});
			} catch (n) {
				console.error(n);
			}
	};
ts();
let to = (t, n) =>
	new Promise((i, r) => {
		try {
			let a = e.transaction(tr, t);
			(a.oncomplete = () => i()),
				(a.onerror = () => r(a.error)),
				n(a.objectStore(tr));
		} catch (o) {
			try {
				window.indexedDB.deleteDatabase(ti);
			} catch (s) {}
			r(o);
		}
	});
async function tl(t) {
	if (!e) return ts(), null;
	try {
		let n = null;
		return (
			await Promise.race([
				to("readonly", (e) => (n = e.get(t))),
				new Promise((e) => setTimeout(e, 100)),
			]),
			n && n.result
		);
	} catch (i) {
		return console.error(i), null;
	}
}
async function tc(t, n) {
	if (!e) return ts(), null;
	try {
		await Promise.race([
			to("readwrite", (e) => e.put(n, t)),
			new Promise((e) => setTimeout(e, 200)),
		]);
	} catch (i) {
		return console.error(i), null;
	}
}
function tu(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
	"requestIdleCallback" in window
		? window.requestIdleCallback(e, { timeout: t })
		: setTimeout(e, 0);
}
let td = (e) => new Promise((t) => setTimeout(t, e));
function tp(e) {
	e.name = e.name.replace(/Дорожка/g, "Track");
}
function th(e) {
	let t,
		n =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: ["en-US"];
	try {
		t = e.toLocaleDateString(n);
	} catch (i) {
		t = e.toLocaleDateString(["en-US"]);
	}
	return t;
}
class tf {
	constructor() {
		this.aborted = !1;
	}
	addEventListener() {}
	removeEventListener() {}
	dispatchEvent() {
		return !1;
	}
	throwIfAborted() {}
}
class tg {
	constructor() {
		this.signal = new tf();
	}
	abort() {
		this.signal.aborted = !0;
	}
}
Object.defineProperty(tg, "name", { value: "AbortController" }),
	Object.defineProperty(tf, "name", { value: "AbortSignal" });
var tm,
	ty,
	tv,
	tb,
	tw,
	tS,
	tC,
	tk,
	tx,
	tE,
	tT,
	t_,
	tP,
	tL,
	tA,
	tN,
	tI = "undefined" != typeof AbortController ? AbortController : tg;
let tM = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
	tB = [43, 38, 33, 28],
	tD = [43, 38, 33, 26],
	tz = [43, 38, 33, 28, 23],
	tO = [48, 43, 38, 33, 28, 23],
	tR = [64, 59, 55, 50, 45, 40],
	t$ = [64, 59, 55, 50, 45, 38],
	tF = [64, 59, 55, 50, 45, 40, 35],
	tH = {
		4: {
			"E1 A1 D2 G2": "Standard 4-string bass",
			"D#1 G#1 C#2 F#3": "Down 1/2 step",
			"D1 G1 C2 F2": "Down 1 step",
			"C1 F1 A#1 D#2": "Down 2 step",
			"D1 A1 D2 G2": "Drop D",
		},
		5: { "B0 E1 A1 D2 G2": "Standard 5-string bass" },
		6: {
			"E2 A2 D3 G3 B3 E4": "STANDARD TUNING",
			"D2 A2 D3 G3 A3 D4": "DADGAD Dsus4",
			"D2 A2 D3 G3 B3 D4": "Double drop D",
			"D2 A2 D3 G3 B3 E4": "Drop D",
			"E2 A2 E3 A3 C#3 E4": "Open A major",
			"C2 G2 C3 G3 C3 E4": "Open C major",
			"D2 A2 D3 F#3 A3 D4": "Open D major",
			"E2 B2 E3 G#3 B3 E4": "Open E major",
			"E2 B2 E3 G3 B3 E4": "Open E minor",
			"D2 G2 D3 G3 B3 D4": "Open G major",
			"D2 G2 D3 G3 A#3 D4": "Open G minor",
			"E3 A3 D4 G4 B3 E5": "Nashville guitar",
			"B0 E1 A1 D2 G2 C3": "Standard 6-string bass",
		},
		7: { "B1 E2 A2 D3 G3 B3 E4": "7-string guitar" },
	};
function tV(e, t) {
	return e.map((e) => e + t);
}
function tj(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	return e.map((e) => tM[e % 12] + (t ? Math.floor(e / 12) - 1 : ""));
}
function tU(e) {
	return e.map((e) => {
		let t = +e.slice(-1),
			n = e.substring(0, e.length - 1);
		return tM.indexOf(n) + (t + 1) * 12;
	});
}
function tG(e, t) {
	let n = tW(e, t);
	if (n) {
		let i = n[0] - t[0];
		for (let r = 0; r < n.length; r++) if (t[r] + i !== n[r]) return;
		return { tuningName: tq(n), pitch: i, standard: n };
	}
}
function tW(e, t) {
	if (er(e)) {
		if (6 === t.length) return t[3] === t[5] + 12 ? t$ : tR;
		if (7 === t.length) return tF;
	} else if (ea(e)) {
		if (4 === t.length) return t[1] === t[3] + 12 ? tD : tB;
		if (5 === t.length) return tz;
		if (6 === t.length) return tO;
	}
	return t;
}
function tq(e) {
	let t = tj(e).reverse().join(" "),
		n = tj(e, !1).reverse().join(" ");
	if (e.length in tH && t in tH[e.length]) return tH[e.length][t];
	let i = n.split(" ");
	return i.map((e, t) => (t === i.length - 1 ? e.toLowerCase() : e)).join(" ");
}
function tX(e) {
	return tj(e, !1).reverse().join(" ");
}
let tY = "ALL INSTRUMENTS",
	tK = "GUITAR",
	tJ = "BASS",
	tZ = "DRUMS",
	tQ = "Any Difficulty",
	t1 = "Beginner",
	t0 = "Intermediate",
	t2 = "Advanced",
	t5 = "ALL TUNINGS",
	t4 = "VERY_EASY",
	t3 = "EASY",
	t8 = "BELOW_INTERMEDIATE",
	t6 = "INTERMEDIATE",
	t9 = "UPPER_INTERMEDIATE",
	t7 = "HARD",
	ne = "VERY_HARD",
	nt = "INSANE",
	nn = {
		[t4]: "Beginner. Tier 1",
		[t3]: "Beginner. Tier 2",
		[t8]: "Intermediate. Tier 1",
		[t6]: "Intermediate. Tier 2",
		[t9]: "Intermediate. Tier 3",
		[t7]: "Advanced. Tier 1",
		[ne]: "Advanced. Tier 2",
		[nt]: "Advanced. Tier 3",
	},
	ni = {
		[t4]: 1,
		[t3]: 2,
		[t8]: 3,
		[t6]: 4,
		[t9]: 5,
		[t7]: 6,
		[ne]: 7,
		[nt]: 8,
	};
function nr(e) {
	return ni[e] || 0;
}
function na(e) {
	return nn[e] || "";
}
function ns(e, t) {
	let n = ni[e] || 0,
		i = ni[t] || 0;
	return n === i ? 0 : n > i ? 1 : -1;
}
let no = [tY, tK, tJ, tZ],
	nl = [tQ, t1, t0, t2],
	nc = { instrument: tY, difficulty: tQ, tunings: {} },
	nu = [
		"and",
		"or",
		"but",
		"nor",
		"yet",
		"so",
		"for",
		"a",
		"an",
		"the",
		"in",
		"to",
		"of",
		"at",
		"by",
		"up",
		"off",
		"on",
	],
	nd = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function np(e) {
	try {
		let t = e.split(" ");
		for (let n = 0; n < t.length; n++)
			0 !== n && n !== t.length - 1 && nu.includes(t[n].toLowerCase())
				? (t[n] = t[n].toLowerCase())
				: (t[n] = nd(t[n]));
		return t.join(" ");
	} catch {
		return e;
	}
}
function nh(e) {
	try {
		let t = e.split(" ");
		for (let n = 0; n < t.length; n++)
			0 !== n &&
				n !== t.length - 1 &&
				nu.includes(t[n].toLowerCase()) &&
				(t[n] = t[n].toLowerCase());
		return t.join(" ");
	} catch {
		return e;
	}
}
let nf = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
function ng(e) {
	let t = [];
	function n(e, n) {
		let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
			r = arguments.length > 3 ? arguments[3] : void 0;
		0 !== i && (n = tV(n, i)), (r = r || tY);
		let a = tj(n).join(","),
			s = `${r}:${a}`,
			o = tX(n);
		t.push([`${e} (${o})`, s]);
	}
	function i() {
		n("Standard 6-string", tR, 0, tK),
			n("Standard 7-string", tF, 0, tK),
			n("Drop D", t$, 0, tK),
			n("Drop C#", t$, -1, tK),
			n("Drop C", t$, -2, tK),
			n("Drop B", t$, -3, tK),
			n("Drop A#", t$, -4, tK),
			n("Drop A", t$, -5, tK),
			n("Drop G#", t$, -6, tK),
			n("Drop G", t$, -7, tK),
			n("Drop F#", t$, -8, tK),
			n("Drop F", t$, -9, tK);
	}
	if ((t.push([nf(t5), t5]), e === tJ)) {
		n("Standard 4-string", tB, 0, tJ),
			n("Standard 5-string", tz, 0, tJ),
			n("Standard 6-string", tO, 0, tJ),
			n("Drop D", tD, 0, tJ),
			n("Drop C#", tD, -1, tJ),
			n("Drop C", tD, -2, tJ),
			n("Drop B", tD, -3, tJ),
			n("Drop A#", tD, -4, tJ),
			n("Drop A", tD, -5, tJ);
		for (let r = 1; r <= 7; r++) n(`${r} st down`, tB, -r, tJ);
	} else if (e === tK) {
		i();
		for (let a = 1; a <= 7; a++) n(`${a} st down`, tR, -a, tK);
	} else if (e === tY) {
		i();
		for (let s = 1; s <= 7; s++) n(`${s} st down`, tR, -s, tK);
		n("Bass: 4-string", tB, 0, tJ),
			n("Bass: 5-string", tz, 0, tJ),
			n("Bass: 6-string", tO, 0, tJ),
			n("Bass: Drop D", tD, 0, tJ),
			n("Bass: Drop C#", tD, -1, tJ),
			n("Bass: Drop C", tD, -2, tJ),
			n("Bass: Drop B", tD, -3, tJ),
			n("Bass: Drop A#", tD, -4, tJ),
			n("Bass: Drop A", tD, -5, tJ);
	}
	return t;
}
function nm(e) {
	let t = e.split(":");
	return [t[0], tU(t[1].split(",")).join(",")];
}
function ny(e, t) {
	if (t === t5) return e;
	let [n, i] = nm(t);
	return e.filter((e) =>
		(function (e) {
			let t = e.tracks;
			if (t)
				for (let r = 0; r < t.length; r++) {
					let a = t[r];
					if (
						void 0 !== a.tuning &&
						a.tuning.join(",") === i &&
						((n === tJ && ea(a.instrumentId)) ||
							(n === tK && er(a.instrumentId)))
					)
						return !0;
				}
			return !1;
		})(e)
	);
}
function nv(e, t) {
	function n(e, t) {
		let n = e.tracks;
		if (n)
			for (let i = 0; i < n.length; i++) {
				let r = n[i];
				if (t(r.instrumentId)) return !0;
			}
		return !1;
	}
	return e.filter((e) => {
		if (t === tJ) return n(e, ea);
		if (t === tZ) return n(e, ei);
		if (t === tK) return n(e, er);
		if (t === tY) return !0;
		throw Error(`Invalid instrument filter value (${t})`);
	});
}
function nb(e, t) {
	return e
		? t === tQ
			? e.slice()
			: e.slice().filter((e) => {
					let n = e.difficulty;
					if (!n) return !1;
					if (t === t1) return 0 >= ns(n, t3);
					if (t === t0) {
						let i = ns(n, t8) >= 0,
							r = 0 > ns(n, t7);
						return i && r;
					}
					return t === t2 && ns(n, t7) >= 0;
			  })
		: void 0;
}
function nw(e, t) {
	return "none" !== t
		? e.slice().sort((e, n) => {
				let i = e.difficulty,
					r = n.difficulty,
					a = "asc" === t ? ns(i, r) : ns(r, i);
				return 0 === a ? nE(n, e) : a;
		  })
		: e;
}
function nS(e, t, n) {
	return nw(nb(e, n), t);
}
function nC(e, t) {
	return { ...e, difficulty: t };
}
function nk(e, t) {
	return { ...e, instrument: t };
}
function nx(e, t, n) {
	let i = { ...e, tunings: { ...e.tunings } };
	return (i.tunings[t] = n), i;
}
function nE(e, t) {
	let n = nT(e),
		i = nT(t);
	return n < i ? -1 : n > i ? 1 : 0;
}
function nT(e) {
	return e.tracks && 0 !== e.tracks.length ? e.tracks[e.defaultTrack].views : 0;
}
function n_(e) {
	let t = e.tunings[e.instrument];
	return (t && t !== t5) || e.instrument !== tY || e.difficulty !== tQ;
}
function nP(e) {
	return e !== tY && e !== tK;
}
function nL(e) {
	return e === tZ;
}
function nA(e) {
	let t = e.tunings[e.instrument];
	return {
		difficulty: e.difficulty !== tQ ? e.difficulty : null,
		instrument: e.instrument !== tY ? e.instrument : null,
		tuning: t && t !== t5 ? nm(t)[1] : null,
	};
}
function nN(e) {
	return ei(e) ? ei : ea(e) ? ea : er;
}
function nI(e) {
	return ei(e) ? 1024 : ea(e) ? 32 : 24;
}
function nM(e, t) {
	let n = nN(t);
	return (
		e &&
		e.map((e) => {
			if (e.tracks) {
				let t = e.tracks.reduce(
					(e, t, i, r) =>
						n(t.instrumentId) && (-1 === e || t.views > r[e].views) ? i : e,
					-1
				);
				return -1 !== t ? { ...e, defaultTrack: t } : e;
			}
			return e;
		})
	);
}
function nB(e, t) {
	if (e.difficulty !== t.difficulty && e.instrument !== t.instrument) return !1;
	let n = e.tunings[e.instrument],
		i = t.tunings[t.instrument];
	return (!n && !i) || n === i;
}
let nD = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
	nz = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function nO(e) {
	let t = e.name.toLowerCase(),
		n = e.instrument.toLowerCase(),
		i = e.name;
	("untitled" === t || ("drumkit" === t && "drums" === n) || n.includes(t)) &&
		(i = ""),
		(e.title = e.instrument),
		i.length && (e.title = i + "\xa0-\xa0" + e.title);
}
function nR(e) {
	let t = {};
	for (let n of e) {
		let i = t[n.title];
		i || ((i = []), (t[n.title] = i)), i.push(n);
	}
	for (let r in t) {
		let a = t[r];
		if (a.length > 1) {
			let s = 0;
			for (let o of a) (o.title += " " + (s + 1)), s++;
		}
	}
}
async function n$(e, t, n) {
	let i = `/api/meta/${e}${t ? `/${t}` : ""}`,
		r = await tn(() => e5(i), "meta", n);
	if (n.aborted || !r) return null;
	if (r.tracks) {
		let a = 0;
		for (let s of r.tracks) {
			tp(s), nO(s), (s.partId = a);
			let { instrumentId: o } = s;
			ei(o)
				? (s.isDrums = !0)
				: ea(o)
				? (s.isBassGuitar = !0)
				: er(o) && (s.isGuitar = !0),
				a++;
		}
		nR(r.tracks);
	}
	return r.title && (r.title = nh(r.title)), r;
}
async function nF(e, t, n, i, r) {
	let a = `part_${t}_${n}_${i || ""}`,
		s = await tl(a);
	if (s) return s;
	let o = (r) =>
			i
				? `https://${nD[r % nD.length]}.cloudfront.net/${e}/${t}/${i}/${n}.json`
				: `https://${nz[r % nz.length]}.cloudfront.net/part/${t}/${n}`,
		l = await tn(o, "part", r);
	return !l || r.aborted ? null : (await tc(a, l), l);
}
async function nH(e, t, n, i) {
	let r = `lyrics_${t}_${n || ""}`,
		a = await tl(r);
	if (a) return a;
	let s = (i) =>
			n
				? `https://${
						nD[i % nD.length]
				  }.cloudfront.net/${e}/${t}/${n}/lyrics.json`
				: `https://${nz[i % nz.length]}.cloudfront.net/lyrics/${t}`,
		o = await tn(s, "lyrics", i);
	return !o || i.aborted ? null : (await tc(r, o), o);
}
async function nV(e, t) {
	let n = `/api/meta/${e}/revisions`;
	return await tn(() => e5(n), "revisions", t);
}
async function nj(e, t) {
	let n = 0,
		i = null,
		r = new tI();
	for (; !i && n < 120; ) {
		try {
			i = await n$(e, t, r.signal);
		} catch (a) {
			console.error(a), await td(2e3);
		}
		n++;
	}
	return i;
}
let nU = (e) => ({
		user: {
			profile: e,
			permissions: e.permissions,
			hasPlus: true,
			isLoggedIn: !0,
		},
	}),
	nG = () => ({
		user: { profile: null, permissions: [], hasPlus: true, isLoggedIn: !1 },
	});
function nW(e, t) {
	return { ...e.user.profile, subscription: t.subscription, plan: tw.PLUS };
}
let nq = (e, t) =>
		!!e.permissions.includes(tb.ADMINISTRATE) ||
		(t instanceof Array
			? t.some((t) => e.permissions.includes(t))
			: e.permissions.includes(t)),
	nX = (e) => {
		e.on("user/signIn", (e, t) => nU(t)),
			e.on("user/googleSignIn", (e, t) => nU(t.profile)),
			e.on("user/signUp", (e, t) => nU(t)),
			e.on("user/profile", (e, t) => nU(t)),
			e.on("user/signOut", () => nG()),
			e.on("user/recoverPassword", (e, t) => nU(t)),
			e.on("user/subscribePlus", (e, t) => {
				let n = nW(e, t);
				return nU(n);
			}),
			e.on("user/cancelPlus", (e, t) => nU(t)),
			e.on("user/migratePlus", (e, t) => nU(t)),
			e.on("user/deactivate", () => nG());
	};
var nY = "/static/media/artwork-96x96.92b76be0.png",
	nK = "/static/media/artwork-128x128.5723b2d4.png",
	nJ = "/static/media/artwork-192x192.b95863ba.png",
	nZ = "/static/media/artwork-256x256.e12ddf80.png",
	nQ = "/static/media/artwork-384x384.0ba8004c.png",
	n1 = "/static/media/artwork-512x512.a1dafd1a.png";
function n0(e, t) {
	return !e || ("AllCountries" !== e.restriction && e.restriction !== t);
}
function n2(e, t) {
	if (!e.current) return !1;
	let n = eQ.has(e.current, ty.DEV) && nq(t, tb.USE_ADMIN_TOOLS),
		i = eQ.has(e.current, ty.MASTER),
		r = eQ.has(e.current, ty.V1);
	return i || r || n;
}
function n5(e) {
	let t = e.get().meta;
	t.current &&
		!t.isFailed &&
		e.dispatch("meta/load:done", {
			songId: t.songId,
			revisionId: t.revisionId,
			partId: t.partId,
			current: t.current,
		});
}
function n4(e, t) {
	if (!e && !e.length) return 0;
	let n = er;
	"bass" === t ? (n = ea) : "drum" === t && (n = ei);
	let i = e.filter((e) => n(e.instrumentId));
	i.length || (i = e);
	let r = i[0].partId,
		a = 0;
	for (let s of i) {
		let o = s.views || 0;
		o > a && ((r = s.partId), (a = o));
	}
	return r;
}
async function n3(e, t, n, i, r) {
	let a = new tI();
	try {
		let s = e.get().meta,
			o = s.loading;
		o && o.ac.abort();
		let l = s.songId !== t,
			c = s.revisionId !== r;
		if (
			(await e.dispatch("meta/load:processing", {
				songId: t,
				partInstrument: n,
				partId: i,
				revisionId: r,
				songHasChanged: l,
				revisionHasChanged: c,
				ac: a,
			}),
			a.signal.aborted)
		)
			return;
		let u = e.get().meta.current;
		if (
			(l || c || !u || u.songId !== t || (r && u.revisionId !== r)) &&
			((u = await n$(t, r, a.signal)), a.signal.aborted || !u)
		)
			return;
		if (null == i) i = n4(u.tracks, n);
		else if (A && u.tracks && !u.tracks[i]) {
			await e.dispatch("navigate", e$(u, r));
			return;
		}
		await e.dispatch("meta/load:done", {
			songId: t,
			partId: i,
			revisionId: r,
			current: u,
		});
	} catch (d) {
		if (a.signal.aborted) return;
		e.dispatch("meta/load:error", { songId: t, revisionId: r, error: d });
	}
}
let n8 = (e) => {
		e.on("route/change", (t, n) => {
			let { routeContent: i } = n;
			if (i && "tab" === i.page) {
				let { songId: r, partId: a, revisionId: s, partInstrument: o } = i;
				n3(e, r, o, a, s);
			}
		}),
			e.on("meta/load:processing", (e, t) => {
				let { songId: n, revisionId: i, ac: r } = t;
				return {
					meta: { ...e.meta, loading: { songId: n, revisionId: i, ac: r } },
				};
			}),
			e.on("meta/load:done", (e, t) => {
				let { songId: n, revisionId: i, partId: r, current: a } = t;
				return {
					meta: {
						...e.meta,
						current: a,
						allowedByLicense: n0(a, e.device.country),
						songId: n,
						revisionId: i,
						partId: r,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("meta/load:done", (e, t) => {
				let { current: n } = t;
				try {
					"undefined" != typeof MediaMetadata &&
						(navigator.mediaSession.metadata = new MediaMetadata({
							title: n.title,
							artist: n.artist,
							artwork: [
								{ src: nY, sizes: "96x96", type: "image/png" },
								{ src: nK, sizes: "128x128", type: "image/png" },
								{ src: nJ, sizes: "192x192", type: "image/png" },
								{ src: nZ, sizes: "256x256", type: "image/png" },
								{ src: nQ, sizes: "384x384", type: "image/png" },
								{ src: n1, sizes: "512x512", type: "image/png" },
							],
						}));
				} catch (i) {
					console.error(i);
				}
			}),
			e.on("meta/load:error", (e, t) => {
				let { songId: n, revisionId: i, error: r } = t;
				return {
					meta: {
						...e.meta,
						current: null,
						allowedByLicense: !0,
						songId: n,
						revisionId: i,
						partId: null,
						loading: null,
						isFailed: !0,
						isNetworkFailed: r instanceof e7 && 0 === r.status,
						isNotFound:
							r instanceof e7 && (404 === r.status || 400 === r.status),
					},
				};
			}),
			e.on("meta/load:error", (e, t) => {
				let { error: n } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(n),
					console.error(n);
			}),
			e.on("meta/setWasFavoriteOnServerRender", (e, t) => ({
				meta: { ...e.meta, wasFavoriteOnServerRender: t },
			}));
	},
	n6 = 12,
	n9 = 13,
	n7 = 25,
	ie = 18,
	it = 5,
	ii = 12,
	ir = 8,
	ia = 12,
	is = 5,
	io = 4,
	il = 12,
	ic = n6 + 10,
	iu = n6,
	id = 4,
	ip = 2,
	ih = 2,
	ig = 0,
	im = 0,
	iy = -5,
	iv = 4,
	ib = 12,
	iw = -3;
function iS(e) {
	return -1 * Math.floor(e.width / 2);
}
function iC(e, t, n) {
	let i = iS(t),
		r = e.layout.absoluteX + i,
		a = r + t.width,
		s = 0;
	return n >= r && (s = n - r + 1), { x1: r, x2: a, diff: s };
}
function ik(e) {
	let t = e.layout.absoluteX - 6;
	return { x1: t, x2: t + 12 };
}
function ix(e) {
	let t = e.layout.absoluteX - 5;
	return { x1: t, x2: t + 10 };
}
function iE(e) {
	let t = e.layout.absoluteX - 5;
	return { x1: t, x2: t + 13 };
}
function iT(e, t) {
	let n = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
		i = e.layout.absoluteX + n,
		r = i + t.width;
	return { x1: i, x2: r };
}
function i_(e, t) {
	let n = t.width,
		i = e.layout.absoluteX - Math.floor(n / 2);
	return { x1: i, x2: i + n };
}
function iP(e, t) {
	return (e.x1 <= t.x1 && t.x1 < e.x2) || (t.x1 <= e.x1 && e.x1 < t.x2);
}
let iL = ["staccato", "accentuated", "heavyAccentuated"],
	iA = {
		tripletFeel: 1e3,
		capo: 100,
		measureMarker: 90,
		measureTempo: 80,
		lineHangingText: 70,
		beatText: 70,
		measureAlternateEnding: 70,
		letRing: 60,
		palmMute: 60,
		harmonic: 60,
		vibrato: 60,
		wideVibrato: 60,
		beatChord: 50,
		beatLyrics: 50,
		staccato: 40,
		beatTapping: 30,
		accentuated: 20,
		heavyAccentuated: 20,
		measureNumber: 0,
		beatHat: 0,
		noteBend: 0,
	},
	iN = {
		capo: 18,
		letRing: 14,
		palmMute: 14,
		harmonic: 14,
		vibrato: 7,
		wideVibrato: 8,
		lineHangingText: 18,
		measureNumber: 5,
		measureAlternateEnding: 14,
		measureMarker: 18,
		measureTempo: 16,
		beatText: 18,
		beatChord: 17,
		beatLyrics: 14,
		beatTapping: 11,
		tripletFeel: 42,
		beatHat: 10,
		accentuated: 10,
		heavyAccentuated: 12,
		staccato: 10,
	},
	iI = 22;
class iM {
	constructor() {
		(this.levels = new Map()), (this.height = 0);
	}
	_getLevel(e) {
		let t = this.levels.get(e);
		return t || ((t = []), this.levels.set(e, t)), t;
	}
	acquireLayer(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
			i = iN[e];
		return this.acquireLayerWithHeight(e, i, t, n);
	}
	acquireLayerWithHeight(e, t, n) {
		let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			r = iA[e],
			a = {
				effect: e,
				voice: i,
				visible: !0,
				x1: n.x1,
				x2: n.x2,
				height: t,
				y: 0,
				diff: n.diff,
			},
			s = this._getLevel(r);
		if (s.length && iL.includes(a.effect))
			for (let o of s)
				o.x1 === a.x1 &&
					o.x2 === a.x2 &&
					o.effect === a.effect &&
					((o.voice = 0), (a.visible = !1));
		return s.push(a), a;
	}
	_fitLayer(e, t, n, i) {
		let r = e,
			a = "beatLyrics" === t.effect;
		if (n > 0 && !a)
			for (let s of i) iP(s, t) && (r = Math.max(r, s.y + s.height));
		(t.y = r), (this.height = Math.max(this.height, t.y + t.height)), i.push(t);
	}
	shake() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22,
			t = [];
		this.height = e;
		let n = Array.from(this.levels.keys()).sort((e, t) => e - t);
		for (let i of n) {
			let r = this.levels.get(i) || [];
			for (let a of r) a.visible && this._fitLayer(e, a, i, t);
		}
	}
}
class iB {
	constructor(e, t) {
		(this.layers = new iM()),
			(this.bottomLayers = new iM()),
			(this.x = 0),
			(this.y = 0),
			(this.maxX = e),
			(this.maxY = 0),
			(this.minX = 0),
			(this.line = t),
			(this.height = 0),
			(this.measureLayouts = []),
			(this.unscaledWidth = 0);
	}
	get intervalSize() {
		var e;
		return (
			(null === (e = this.placement) || void 0 === e
				? void 0
				: e.intervalSize) || 0
		);
	}
}
function iD(e) {
	return e.y + e.layers.height;
}
function iz(e) {
	return e.y + 12 - 5;
}
function iO(e) {
	return e.height - 24 + 10;
}
class iR {
	constructor() {
		(this.x = 0),
			(this.originX = 0),
			(this.absoluteX = 0),
			(this.absoluteLoopLeftX = 0),
			(this.absoluteLoopRightX = 0),
			(this.duration = Number.MAX_VALUE),
			(this.beats = []),
			(this.occurrences = []),
			(this.shifts = []),
			(this.usedStrings = 0),
			(this.usedRest = !1);
	}
}
function i$(e) {
	return iD(e.measureLayout.lineLayout);
}
function iF(e) {
	return e.measureLayout.lineLayout.maxX;
}
function iH(e) {
	return e.measureLayout.lineLayout.minX;
}
function iV(e) {
	return e.occurrences[0];
}
function ij(e) {
	return e.occurrences[e.occurrences.length - 1];
}
function iU(e) {
	return e.occurrences[0];
}
function iG(e) {
	return e.occurrences[0] + e.duration;
}
function iW(e) {
	return e.occurrences[e.occurrences.length - 1] + e.duration;
}
function iq(e, t) {
	return (
		e.layout.measureLayout.lineLayout !== t.layout.measureLayout.lineLayout
	);
}
function iX(e, t) {
	return e.layout.measureLayout !== t.layout.measureLayout;
}
function iY(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	if (e === t && !n) return 0;
	let i = t.layout.x;
	if (n) {
		let r = t.nextBeat;
		r && ((i = r.layout.x), iX(t, r) && (i += t.layout.measureLayout.width));
	}
	let a = e.layout.measureLayout.x + i - e.layout.absoluteX,
		s = t.layout.measureLayout,
		o = e.layout.measureLayout,
		l = e;
	for (; l && o !== s; ) {
		let c = l.layout.measureLayout;
		o !== c && ((a += o.width), (o = c)), (l = l.nextBeat);
	}
	return a;
}
function iK(e) {
	let t = i0(e).beat,
		n = t.nextBeat ? t.nextBeat : t;
	return iq(i1(e).beat, n);
}
function iJ(e) {
	return iq(i1(e).beat, i0(e).beat);
}
class iZ {
	constructor(e) {
		(this.refs = [e]), (this.keep = !0), (this.layer = null);
	}
}
function iQ(e, t) {
	e.refs.push(t);
}
function i1(e) {
	return e.refs[0];
}
function i0(e) {
	return e.refs[e.refs.length - 1];
}
let i2 = { family: "Arial", size: 13, style: "normal" },
	i5 = " ",
	i4 = 3.6118,
	i3 = "…",
	i8 = 13,
	i6 = (e) =>
		function (t, n, i) {
			let r =
					!(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
				a = t.split(" "),
				s = a[0],
				o = e(s, i2),
				l = 1;
			for (; l < a.length - 1; l++) {
				let c = e(a[l], i2);
				if (o + 3.6118 + c > i) break;
				(s += " " + a[l]), (o += 3.6118 + c);
			}
			let u = r ? "…" : "",
				d = r ? 13 : 0;
			s += u;
			let p = u + a.slice(l).join(" ");
			return {
				phrase: { text: s, width: o + d, layer: null },
				rest: { text: p, width: n - o + d, layer: null },
			};
		},
	i9 = new Map();
function i7(e, t, n) {
	let i = i9.get(n.family);
	i || ((i = new Map()), i9.set(n.family, i));
	let r = i.get(n.style);
	r || ((r = new Map()), i.set(n.style, r));
	let a = r.get(n.size);
	a || ((a = new Map()), r.set(n.size, a));
	let s = a.get(t);
	return void 0 !== s || ((s = e(t, n)), a.set(t, s)), s;
}
let re = (e) =>
	function (t) {
		let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i2;
		return t && t.length ? i7(e, t, n) : 0;
	};
class rt {
	static textWidth;
	static fitTextToAvailableWidth;
}
let rn = null;
function ri(e, t) {
	let n = !0;
	("undefined" == typeof document ||
		"function" != typeof document.createElement) &&
		(n = !1),
		(rn = n ? document.createElement("canvas") : null);
	let i = rn && "function" == typeof rn.getContext ? rn.getContext("2d") : null;
	if (!(n = !!i && "function" == typeof i.measureText) || !i) return 0;
	let r = {
			style: "normal",
			constraint: "normal",
			weight: "normal",
			size: i2.size,
			family: i2.family,
			align: "start",
			baseline: "alphabetic",
		},
		a = { ...r, ...t };
	return (
		(i.font = `${a.style} ${a.constraint} ${a.weight} ${a.size}px ${a.family}`),
		(i.textAlign = a.align),
		(i.textBaseline = a.baseline),
		+i.measureText(e).width.toFixed(4)
	);
}
let rr = re(ri),
	ra = i6(rr);
class rs extends rt {
	static textWidth(e, t) {
		return rr(e, t);
	}
	static fitTextToAvailableWidth(e, t, n, i) {
		return ra(e, t, n, i);
	}
}
let ro = { bpm: 100, type: 4, position: 0 };
function rl(e, t) {
	(e.x = Math.floor(e.originX * t)), (e.width = Math.floor(e.originWidth * t));
	let n = e.beatsLayouts,
		i = e.tempoLayouts,
		r = n[0];
	if (r) {
		for (let a of ((r.absoluteLoopLeftX = e.x), i))
			a.measureOffset = Math.floor(a.originMeasureOffset * t);
		for (let s of n) {
			var o;
			if (
				((s.x = Math.floor(
					(((null === (o = s.measureLayout) || void 0 === o
						? void 0
						: o.firstBeatXOffset) || 0) +
						s.originX) *
						t
				)),
				(s.absoluteX = e.x + s.x),
				r !== s)
			) {
				let l = s.x - r.x,
					c = l < 40 ? 0.5 : 0.8,
					u = Math.floor(l * c);
				(r.absoluteLoopRightX = r.absoluteX + u),
					(s.absoluteLoopLeftX = s.absoluteX - (l - u));
			}
			r = s;
		}
		r.absoluteLoopRightX = e.x + e.width;
	}
}
function rc(e, t) {
	let n = e.layouts[0],
		i = Math.floor((n.width - t.measureOffset) * t.tempo.position),
		r = n.x + t.measureOffset + i,
		a = r + (t.tempo.bpm >= 100 ? 44 : 35);
	return { x1: r, x2: a };
}
function ru(e, t) {
	let n = e.layouts[0].x,
		i = n + t.width;
	return { x1: n, x2: i };
}
function rd(e) {
	let t = e[0].x,
		n = t + e.reduce((e, t) => e + t.width, 0) - 6;
	return { x1: t, x2: n };
}
function rp(e) {
	let t = e.layouts[0].x;
	return { x1: t, x2: t + 90 };
}
function rh(e) {
	return e.layouts[0];
}
function rf(e) {
	return e.layouts[e.layouts.length - 1];
}
let rg = [
		[
			{ key: 38, value: { name: "AS", string: 1.5 } },
			{ key: 40, value: { name: "ES", string: 2.5 } },
		],
		[
			{ key: 35, value: { name: "ABD", string: 3.5 } },
			{ key: 36, value: { name: "BD", string: 4.5 } },
		],
		[
			{ key: 41, value: { name: "LFT", string: 3.5 } },
			{ key: 43, value: { name: "HFT", string: 2.5 } },
		],
		[
			{ key: 47, value: { name: "LMT", string: 1 } },
			{ key: 48, value: { name: "HMT", string: 0.5 } },
		],
		[
			{ key: 51, value: { name: "RC1", string: 0 } },
			{ key: 59, value: { name: "RC2", string: 0 } },
		],
		[
			{ key: 49, value: { name: "CC1", string: -1 } },
			{ key: 57, value: { name: "CC2", string: 0 } },
		],
		[
			{ key: 60, value: { name: "HBG", string: 2.5 } },
			{ key: 61, value: { name: "LBG", string: 3 } },
		],
		[
			{ key: 76, value: { name: "HWB", string: 1 } },
			{ key: 77, value: { name: "LWB", string: 1.5 } },
		],
	],
	rm = {
		hq: "High Q",
		sl: "Slap",
		Ssh: "Scratch Push",
		Sll: "Scratch Pull",
		Stx: "Sticks",
		sc: "Square Click",
		mc: "Metronome Click",
		mb: "Metronome Bell",
		BD: "Bass Drum",
		ABD: "Acoustic Bass Drum",
		HC: "Hand Clap",
		S: "Snare",
		AS: "Acoustic Snare",
		ES: "Electric Snare",
		SS: "Snare Side Stick",
		SR: "Snare Rim Shot",
		xH: "Closed Hi Hat",
		oH: "Open Hi Hat",
		fH: "Foot Hi Hat",
		hH: "Half Hi Hat",
		HT: "High Tom",
		LT: "Low Tom",
		FT: "Floor Tom",
		LFT: "Low Floor Tom",
		HFT: "High Floor Tom",
		MT: "Mid Tom",
		LMT: "Low-Mid Tom",
		HMT: "Hi-Mid Tom",
		CC: "Crash Cymbal",
		CC1: "Crash Cymbal 1",
		CC2: "Crash Cymbal 2",
		RC: "Ride Cymbal",
		RC1: "Ride Cymbal 1",
		RC2: "Ride Cymbal 2",
		RE: "Ride Edge",
		SC: "Splash Cymbal",
		cC: "Chinese Cymbal",
		rb: "Ride Bell",
		ta: "Tambourine",
		cb: "Cowbell",
		hcb: "High Cowbell",
		lcb: "Low Cowbell",
		vs: "Vibraslap",
		BG: "Bongo",
		HBG: "Hi Bongo",
		LBG: "Low Bongo",
		xC: "Mute Hi Conga",
		oC: "Open Hi Conga",
		LC: "Low Conga",
		ht: "High Timbale",
		lt: "Low Timbale",
		ha: "High Agogo",
		la: "Low Agogo",
		ca: "Cabasa",
		ma: "Maracas",
		SW: "Short Whistle",
		LW: "Long Whistle",
		SG: "Short Guiro",
		LG: "Long Guiro",
		cl: "Claves",
		WB: "Wood Block",
		HWB: "Hi Wood Block",
		LWB: "Low Wood Block",
		xU: "Mute Cuica",
		oU: "Open Cuica",
		xT: "Mute Triangle",
		oT: "Open Triangle",
		Sh: "Shaker",
		JB: "Jingle Bell",
		BT: "Bell Tree",
		Cs: "Castinets",
		xS: "Mute Surdo",
		oS: "Open Surdo",
	},
	ry = [
		3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
		5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
		4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
		-0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
	];
(ry[64] = 1.5), (ry[65] = -1), (ry[66] = 0);
let rv = [
	3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
	2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
	5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
	-0.5, -1, -1, -1, -1.5, 5, 5,
];
(rv[64] = 1.5), (rv[65] = -0.5), (rv[66] = 0), (rv[75] = -0.5), (rv[72] = 0.5);
let rb = {
		hq: 9,
		sl: 6,
		Ssh: 13,
		Sll: 9,
		Stx: 11,
		sc: 8,
		mc: 10,
		mb: 10,
		ABD: 15,
		BD: 10,
		SS: 9,
		S: 5,
		AS: 10,
		HC: 10,
		ES: 9,
		FT: 9,
		LFT: 13,
		xH: 9,
		fH: 7,
		LT: 8,
		LMT: 14,
		oH: 9,
		MT: 10,
		CC: 10,
		CC1: 14,
		HT: 9,
		RC: 10,
		RE: 10,
		RC1: 14,
		cC: 9,
		rb: 7,
		ta: 6,
		SC: 10,
		cb: 8,
		hcb: 10,
		lcb: 10,
		CC2: 14,
		vs: 9,
		RC2: 14,
		BG: 10,
		HBG: 16,
		LBG: 15,
		xC: 9,
		oC: 9,
		LC: 9,
		ht: 7,
		lt: 4,
		ha: 8,
		la: 6,
		ca: 8,
		ma: 10,
		SW: 11,
		LW: 10,
		SG: 10,
		LG: 10,
		cl: 6,
		WB: 14,
		HWB: 17,
		LWB: 16,
		xU: 9,
		oU: 9,
		xT: 8,
		oT: 9,
		Sh: 9,
		JB: 9,
		BT: 9,
		Cs: 9,
		xS: 9,
		oS: 9,
	},
	rw = [
		"hq",
		"sl",
		"Ssh",
		"Sll",
		"Stx",
		"sc",
		"mc",
		"mb",
		"BD",
		"BD",
		"SS",
		"S",
		"HC",
		"S",
		"FT",
		"xH",
		"FT",
		"fH",
		"LT",
		"oH",
		"MT",
		"MT",
		"CC",
		"HT",
		"RC",
		"cC",
		"rb",
		"ta",
		"SC",
		"cb",
		"CC",
		"vs",
		"RC",
		"BG",
		"BG",
		"xC",
		"oC",
		"LC",
		"ht",
		"lt",
		"ha",
		"la",
		"ca",
		"ma",
		"SW",
		"LW",
		"SG",
		"LG",
		"cl",
		"WB",
		"WB",
		"xU",
		"oU",
		"xT",
		"oT",
		"Sh",
		"JB",
		"BT",
		"Cs",
		"xS",
		"oS",
	];
function rS(e) {
	for (let t of rg) {
		let n = 0;
		for (let i of t) e.has(i.key) && n++;
		if (n > 1) for (let r of t) e.set(r.key, { ...r.value, fret: r.key });
	}
}
function rC(e, t) {
	return { string: t, name: rw[e - 27] || "*", fret: e };
}
function rk(e, t) {
	return (t ? rv[e - 27] : ry[e - 27]) || 0;
}
function rx(e) {
	return (
		!e.bogus &&
		(!e.tie ||
			!!e.tieShow ||
			!!e.bendStart ||
			!!e.slurStart ||
			!!e.ghost ||
			0 === e.beat.index)
	);
}
function rE(e, t, n) {
	if (!rx(e)) return 0;
	if (n && n.usedDrums) {
		let i = n.usedDrums.get(e.fret);
		if (i) {
			let r = i.name || "S",
				a = rb[r] || 0;
			return a + t;
		}
		return t;
	}
	let s = 4;
	return e.dead ? (s = 4) : e.fret >= 10 && (s = 8), e.ghost && (s += 5), s + t;
}
function rT(e, t) {
	let n = t.get(e.fret);
	return (n && n.string) || 0;
}
(rw[64] = "SR"),
	(rw[65] = "hH"),
	(rw[66] = "RE"),
	(rw[72] = "lcb"),
	(rw[75] = "hcb");
let r_ = 5,
	rP = {
		letRing: rN,
		palmMute: rI,
		harmonic: rM,
		vibrato: rB,
		wideVibrato: rB,
	};
function rL(e, t) {
	return { x1: t - 120, x2: t };
}
function rA(e, t) {
	if (!e.start || !e.stop) throw Error("Wrong line effect state");
	let n = e.start.absoluteX - 20,
		i = e.stop.absoluteX + 10;
	return i - n < t && (i = n + t), { x1: n, x2: i };
}
function rN(e) {
	return rA(e, 40);
}
function rI(e) {
	return rA(e, 29);
}
function rM(e) {
	return rA(e, 38);
}
function rB(e) {
	let { start: t, stop: n } = e;
	if (!t || !n) throw Error("Wrong line effect state");
	let i = null,
		r = n.measureLayout,
		a = r.beatsLayouts,
		s = a.findIndex((e) => e === n);
	if (s > -1 && s < a.length - 1) i = a[s + 1];
	else {
		let o = r.lineLayout.measureLayouts,
			l = o.findIndex((e) => e === r);
		l > -1 && l < o.length - 1 && (i = o[l + 1].beatsLayouts[0]);
	}
	let c = t.absoluteX,
		u = i ? i.absoluteX : iF(n);
	return { x1: c, x2: u };
}
function rD(e) {
	let t = i1(e).note.bend;
	if (!t) throw Error("Wrong state at bend note");
	return -1 * (iy - t.tone / iv);
}
function rz() {
	return { detected: !1, start: null, stop: null, value: void 0 };
}
class rO {
	constructor(e, t, n) {
		(this.index = e),
			(this.strings = t.strings),
			(this.effects = []),
			(this.spaces = Array(this.strings)),
			(this.rhythmLines = 0),
			(this.layout = new iB(n, this)),
			(this.hangingText = []),
			(this.capo = 0 === e && t.capo ? { capo: t.capo, layer: null } : void 0),
			(this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() });
	}
	joinLineEffect(e, t, n) {
		let i = e[t];
		i &&
			!n.detected &&
			((n.detected = !0), (n.value = i), (n.start = e.layout)),
			i && i === n.value && (n.stop = e.layout),
			i
				? n.value &&
				  i !== n.value &&
				  (this.finishLineEffect(t, n), this.joinLineEffect(e, t, n))
				: this.finishLineEffect(t, n);
	}
	finishLineEffect(e, t) {
		if (t.detected) {
			let n = this.layout.layers.acquireLayer(e, rP[e](t));
			this.effects.push({ effect: e, layer: n, effectValue: t.value }),
				(t.detected = !1),
				(t.value = void 0),
				(t.start = null),
				(t.stop = null);
		}
	}
	getHangingTextPosition(e) {
		let t = this.layout.minX,
			n = t + e.width;
		return { x1: t, x2: n };
	}
	distribute(e, t, n, i) {
		let r = [];
		this.layout.placement = i;
		let a = e.usedDrums,
			s = n(this);
		for (let o of this.hangingText)
			o.layer = this.layout.layers.acquireLayer(
				"lineHangingText",
				this.getHangingTextPosition(o)
			);
		let l = this.capo;
		void 0 !== l &&
			(l.layer = this.layout.layers.acquireLayer(
				"capo",
				rL(l.capo, this.layout.maxX)
			));
		for (let c = 0; c < this.spaces.length; c++) this.spaces[c] = [];
		let u = rz(),
			d = rz(),
			p = rz(),
			h = rz(),
			f = rz(),
			g = new Map();
		for (let m of this.layout.measureLayouts) {
			let y = m.measure;
			rl(m, s);
			let v = rh(y) === m;
			if (
				((this.rhythmLines = Math.max(this.rhythmLines, y.rhythmLines)),
				y.alternateEnding)
			) {
				let b = g.get(y);
				b || ((b = []), g.set(y, b)), b.push(m);
			}
			if (v) {
				let w = y.markerWithLayer;
				w &&
					(w.layer = this.layout.layers.acquireLayer(
						"measureMarker",
						ru(y, w)
					));
				let S = y.tripletFeelWithLayer;
				S && (S.layer = this.layout.layers.acquireLayer("tripletFeel", rp(y)));
			}
			let C = 0;
			for (let k of m.beatsLayouts)
				for (let x of k.beats)
					if (x.lyrics) {
						for (let E of x.lyrics)
							if (E) {
								let T = iC(x, E, C);
								(C = T.x2),
									(E.layer = this.layout.bottomLayers.acquireLayer(
										"beatLyrics",
										T
									));
							}
					} else {
						let _ = x.originalText;
						if (_) {
							let P = this.layout.maxX + 5 - x.layout.absoluteX,
								L = _;
							if (L.width > P) {
								let { phrase: A, rest: N } = rs.fitTextToAvailableWidth(
									L.text,
									L.width,
									P,
									t.hasHellip()
								);
								(L = A), r.push(N);
							}
							L &&
								((L.layer = this.layout.layers.acquireLayer(
									"beatText",
									iT(x, L)
								)),
								(x.text = L));
						}
						let I = x.chord;
						I &&
							(I.layer = this.layout.layers.acquireLayer(
								"beatChord",
								i_(x, I)
							));
						let M = x.tappingWithLayer;
						for (let B of (M &&
							(M.layer = this.layout.layers.acquireLayer(
								"beatTapping",
								iT(x, M)
							)),
						0 === x.voice &&
							(this.joinLineEffect(x, "letRing", u),
							this.joinLineEffect(x, "palmMute", d),
							this.joinLineEffect(x, "harmonic", p),
							this.joinLineEffect(x, "vibrato", h),
							this.joinLineEffect(x, "wideVibrato", f)),
						x.tuplet &&
							x.tuplet > 0 &&
							this.rhythmEffects.tuplet.set(x.voice, !0),
						x.tremolo && this.rhythmEffects.tremolo.set(x.voice, !0),
						(x.accentuated = void 0),
						(x.heavyAccentuated = void 0),
						(x.staccato = void 0),
						x.notes)) {
							if (!B.rest) {
								let D = a ? rT(B, a) : B.string;
								if (D % 1 == 0 && D >= 0 && D < e.strings) {
									let z = rE(B, 4, e);
									if (z) {
										let O = x.layout.absoluteX - z,
											R = z << 1,
											$ = this.spaces[D];
										if ($) {
											let F = $.length;
											if (F) {
												let H = $[F - 1];
												H.x + H.w >= O
													? ((H.x = Math.min(H.x, O)),
													  (H.w = x.layout.absoluteX + z - H.x))
													: $.push({ x: O, w: R });
											} else $.push({ x: O, w: R });
										}
									}
									a &&
										(59 == B.fret || 93 == B.fret) &&
										!x.hat &&
										(x.hat = {
											type: "ride",
											layer: this.layout.layers.acquireLayer("beatHat", iE(x)),
										}),
										1 !== B.accentuated ||
											x.accentuated ||
											(x.accentuated = {
												layer: this.layout.layers.acquireLayer(
													"accentuated",
													ik(x),
													x.voice
												),
											}),
										2 !== B.accentuated ||
											x.heavyAccentuated ||
											(x.heavyAccentuated = {
												layer: this.layout.layers.acquireLayer(
													"heavyAccentuated",
													ik(x),
													x.voice
												),
											}),
										B.staccato &&
											!x.staccato &&
											(x.staccato = {
												layer: this.layout.layers.acquireLayer(
													"staccato",
													ix(x),
													x.voice
												),
											});
								}
							}
							let V = B.bendStart;
							if (V) {
								let j = t.getBendCoordinates(V, B);
								(j.x1 += x.layout.absoluteX),
									(j.x2 += x.layout.absoluteX),
									(V.layer = this.layout.layers.acquireLayerWithHeight(
										"noteBend",
										rD(V),
										j
									));
							}
						}
					}
			for (let U of m.tempoLayouts)
				U.layer = this.layout.layers.acquireLayer("measureTempo", rc(y, U));
		}
		for (let [G, W] of g)
			W[0].alternateEndingWithLayer = {
				layer: this.layout.layers.acquireLayer("measureAlternateEnding", rd(W)),
				alternateEnding: G.alternateEnding,
			};
		this.finishLineEffect("letRing", u),
			this.finishLineEffect("palmMute", d),
			this.finishLineEffect("harmonic", p),
			this.finishLineEffect("vibrato", h),
			this.finishLineEffect("wideVibrato", f),
			this.layout.layers.shake();
		let q = this.rhythmLines * n7,
			X = this.rhythmEffects.tremolo.size * ii,
			Y = this.rhythmEffects.tuplet.size * ir,
			K = this.strings * this.layout.intervalSize;
		return (
			this.layout.bottomLayers.shake(K + q + X + Y),
			(this.layout.layers.height += 12),
			(this.layout.height =
				this.layout.layers.height + this.layout.bottomLayers.height + 12),
			(this.layout.maxY = this.layout.y + this.layout.height),
			r
		);
	}
}
class rR {
	constructor(e, t) {
		(this.measure = e),
			(this.x = 0),
			(this.width = 0),
			(this.firstBeatXOffset = 0),
			(this.originX = 0),
			(this.originWidth = 0),
			(this.lineLayout = t),
			(this.beatsLayouts = []),
			(this.tempoLayouts = []);
	}
	get signatureOffset() {
		var e;
		return (
			(null === (e = this.lineLayout.placement) || void 0 === e
				? void 0
				: e.signatureOffset(this.measure)) || 0
		);
	}
}
class r$ {
	constructor(e) {
		(this.startIndex = e.index),
			(this.endIndex = 0),
			(this.alternateEndings = new Map());
	}
}
function rF(e, t, n) {
	e.alternateEndings.set(t, n.index);
}
function rH(e, t) {
	return e.alternateEndings.get(t) || 0;
}
function rV(e) {
	let t = e.nextNoteOnString;
	return t && !t.tie ? 12 : 0;
}
class rj {
	constructor(e) {
		this.width = e;
	}
	areBeatsInSameSlice(e, t) {
		return i$(e.layout) === i$(t.layout);
	}
	getBendCoordinates(e, t) {
		let n = i1(e).beat,
			i = i0(e),
			r = i.note,
			a = r.nextNoteOnString,
			s = !!a && !!a.bendStart && !!a.tie,
			o = s ? i.beat.nextBeat : i.beat;
		if (!o) throw Error("Broken constraint");
		let l = iY(n, t.beat),
			c = iY(n, n),
			u = iY(n, o, !s),
			d = u - l - rV(r);
		return { x1: c - l, x2: d };
	}
	bendsForNote(e) {
		let t = e.bendStart || e.bendPart || e.bendEnd;
		return t ? [t] : [];
	}
	hasHellip() {
		return !0;
	}
}
class rU extends rj {
	calcTabSize(e) {
		return e.reduce(
			(e, t) => ({
				width: Math.max(t.width, e.width),
				height: e.height + t.height,
			}),
			{ width: 0, height: 0 }
		);
	}
	expectedSliceWidth(e) {
		return this.width;
	}
	finalVerticalSeparatorPosition(e) {
		return null;
	}
	getBendCoordinates(e, t) {
		let n = super.getBendCoordinates(e, t),
			i = n.x1,
			r = n.x2;
		if (iK(e)) {
			let a = i1(e).beat;
			r = iF(a.layout) - a.layout.absoluteX - 12;
		}
		return { x1: i, x2: r };
	}
	getTieSlurPathLength(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = this.areBeatsInSameSlice(e, t);
		return i
			? t.layout.absoluteX - e.layout.absoluteX
			: n
			? t.layout.absoluteX
			: iF(e.layout) - e.layout.absoluteX;
	}
	makeScaleStrategy(e) {
		return (t) =>
			t.index === e - 1 ? 1 : t.layout.maxX / t.layout.unscaledWidth;
	}
	normalizeBeatCoordinates(e) {
		for (let t of e) delete t.normalizationData;
	}
	shouldDrawBendOnNote(e, t) {
		return !!t.bendStart && t.bendStart === e;
	}
	stringLineMaxX(e) {
		return e.layout.maxX - 1;
	}
}
let rG = 4,
	rW = 4,
	rq = [4, 4];
function rX(e, t) {
	let n = e,
		i = t;
	for (; 0 !== n && 0 !== i; ) n >= i ? (n %= i) : (i %= n);
	return n + i;
}
let rY = 11531520,
	rK = (e) => e[0],
	rJ = (e) => e[1],
	rZ = (e) => (11531520 * rK(e)) / rJ(e),
	rQ = (e) => e / 11531520,
	r1 = (e) => Math.floor(11531520 * e);
function r0(e, t) {
	return ((4 * t) / rJ(e)) * rK(e);
}
function r2(e, t) {
	return (r0(rq, t) / rJ(e)) * rK(e);
}
function r5(e) {
	return 1024 === e;
}
function r4() {
	let e =
		arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
	if (e) {
		if (e.includes("below")) return "below";
		if (e.includes("above")) return "above";
	}
}
function r3() {
	let e =
		arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
	if (e) {
		if (e.includes("shift")) return "shift";
		if (e.includes("legato")) return "legato";
		if (e.includes("downwards")) return "downwards";
		if (e.includes("upwards")) return "upwards";
	}
}
!(function (e) {
	(e[(e.V1 = 1)] = "V1"),
		(e[(e.V2 = 2)] = "V2"),
		(e[(e.V4 = 4)] = "V4"),
		(e[(e.MASTER = 2)] = "MASTER"),
		(e[(e.DEV = 777)] = "DEV");
})(tx || (tx = {})),
	(function (e) {
		(e[(e.TOO_LONG = 228)] = "TOO_LONG"),
			(e[(e.MIDI_FAILED = 229)] = "MIDI_FAILED"),
			(e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
			(e[(e.UNKNOWN = 500)] = "UNKNOWN");
	})(tE || (tE = {}));
let r8 = [
		{
			displayName: "V1",
			version: tx.V1,
			bucket: "audio",
			bucketDomains: ["audio1", "audio2", "audio3"],
			audioHashPropertyName: "audio",
		},
		{
			displayName: "V2",
			version: tx.V2,
			versionLegacy: "audioV2",
			bucket: "audio3",
			bucketDomains: ["audio31", "audio32", "audio33"],
			audioHashPropertyName: "audioV2",
			audioErrorPropertyName: "audioV2Error",
			midiHashPropertyName: "audioV2Midi",
		},
		{
			displayName: "V4",
			version: tx.V4,
			bucket: "audio4",
			bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
			audioHashPropertyName: "audioV4",
			audioErrorPropertyName: "audioV4Error",
			midiHashPropertyName: "audioV4Midi",
		},
		{
			displayName: "Dev",
			version: tx.DEV,
			versionLegacy: "next",
			bucket: "audio2",
			bucketDomains: ["audio2"],
			audioHashPropertyName: "nextAudio",
			midiHashPropertyName: "nextMidi",
		},
	],
	r6 = new Map();
r8.forEach((e) => r6.set(e.version, e)),
	(function (e) {
		(e.FREE = "free"),
			(e.PLUS = "plus"),
			(e.BETA = "beta"),
			(e.BASIC = "basic");
	})(tT || (tT = {})),
	(function (e) {
		(e.NONE = "none"), (e.LIFETIME = "lifetime");
	})(t_ || (t_ = {})),
	(function (e) {
		(e.BRAINTREE = "braintree"),
			(e.APP_STORE = "appstore"),
			(e.GOOGLE_PLAY = "googleplay"),
			(e.COUPON = "coupon"),
			(e.MANUAL = "manual"),
			(e.LEGACY_PAYPAL = "paypal");
	})(tP || (tP = {})),
	(function (e) {
		(e.ACTIVE = "active"),
			(e.CANCELED = "canceled"),
			(e.EXPIRED = "expired"),
			(e.OUTDATED = "outdated");
	})(tL || (tL = {}));
let r9 = 25,
	r7 = 15,
	ae = 35,
	at = 20,
	an = 25,
	ai = 30,
	ar = (e, t) => 1 / ((4 * e) / t);
class aa {
	get distribute() {
		return "fitness";
	}
	get tuningOffset() {
		return 15;
	}
	get intervalSize() {
		return 13;
	}
	signatureOffset(e) {
		let t = 20;
		return (
			(e.signature[0] > 10 || e.signature[1] > 10) && (t = 35),
			e.repeatStart && (t += 5),
			t
		);
	}
	measureSpaceForSignature(e) {
		let t = 0;
		return (
			e.hasSignature &&
				((t = 20),
				(e.signature[0] > 10 || e.signature[1] > 10) && (t = 35),
				e.repeatStart && (t += 5)),
			t
		);
	}
	measureBeatWidth(e, t, n, i, r, a) {
		let s = n ? ar(n, i) : rQ(i),
			o = 70 * Math.log(s + 1) + 20;
		return r ? 0.2 * o : a && !e.measure.repeat ? o - Math.min(o >>> 1, 25) : o;
	}
	measureLeftMargin(e) {
		return e.measure.repeatStart ? 30 : 25;
	}
}
class as {
	constructor(e = "conservative") {
		this.strategy = e;
	}
	get distribute() {
		return this.strategy;
	}
	get tuningOffset() {
		return 25;
	}
	get intervalSize() {
		return n6;
	}
	signatureOffset(e) {
		return 35;
	}
	measureSpaceForSignature(e) {
		return e.hasSignature ? 35 : 0;
	}
	measureBeatWidth(e, t, n, i, r, a) {
		let s = n ? ar(n, i) : rQ(i),
			o = 130 * Math.log(s + 1) + 20;
		return r ? 0.2 * o : o;
	}
	measureLeftMargin(e, t) {
		return 25;
	}
}
function ao(e, t) {
	let n = [...e.tempoLayoutsByTime.keys()].sort((e, t) => e - t);
	t.tempoLayouts = n.reduce((t, n) => {
		let i = e.tempoLayoutsByTime.get(n);
		return i && t.push(i), t;
	}, []);
}
function al(e, t, n, i) {
	let r = t.beatsLayoutsByTime,
		a = new rR(t, n.layout);
	t.layouts = [a];
	let s = i.measureSpaceForSignature(t),
		o = [...r.keys()].sort((e, t) => e - t),
		l = 0,
		c = r.get(0),
		u = t.rest && !t.hasLyrics;
	if (c) {
		(a.firstBeatXOffset = i.measureLeftMargin(a, !0)),
			a.beatsLayouts.push(c),
			(c.measureLayout = a);
		for (let d = 1; d < o.length; d++) {
			let p = o[d],
				h = r.get(p);
			h &&
				((c.originX = s),
				(s += i.measureBeatWidth(a, h, e, p - l, u, !1)),
				(l = p),
				(c = h),
				a.beatsLayouts.push(h),
				(h.measureLayout = a));
		}
		(c.originX = s),
			(s += i.measureBeatWidth(a, c, e, t.duration - l, u, !0)),
			au(a, t, a.firstBeatXOffset + s);
	}
	ao(t, a);
}
function ac(e, t, n, i) {
	let r = t.beatsLayoutsByTime,
		a = new rR(t, n.layout);
	ao(t, a), (t.layouts = [a]);
	let s = !(
			(4 === t.signature[0] && 4 === t.signature[1]) ||
			(6 === t.signature[0] && 8 === t.signature[1])
		),
		o = e ? r2(t.signature, e) : -1,
		l = i.measureSpaceForSignature(t),
		c = [...r.keys()].sort((e, t) => e - t),
		u = 0,
		d = r.get(0),
		p = t.rest && !t.hasLyrics;
	if (d) {
		(a.firstBeatXOffset = i.measureLeftMargin(a, !0)),
			a.beatsLayouts.push(d),
			(d.measureLayout = a);
		for (let h = 1; h < c.length; h++) {
			let f = c[h],
				g = r.get(f);
			if (g) {
				(d.originX = l),
					(l += i.measureBeatWidth(a, g, e, f - u, p, !1)),
					(u = f),
					(d = g);
				let m = s || f << 1 === o;
				m &&
					g.beats.filter((e) => !e.lyrics).every((e) => e.beamStart) &&
					((a.originWidth = Math.ceil(a.firstBeatXOffset + l)),
					(a = new rR(t, n.layout)),
					t.layouts.push(a),
					(a.firstBeatXOffset = i.measureLeftMargin(a, !1)),
					(l = 0)),
					a.beatsLayouts.push(g),
					(g.measureLayout = a);
			}
		}
		(d.originX = l),
			(l += i.measureBeatWidth(a, d, e, t.duration - u, p, !0)),
			au(a, t, a.firstBeatXOffset + l);
	}
}
function au(e, t, n) {
	let i = t.markerWithLayer ? t.markerWithLayer.width : 0;
	e.originWidth = Math.ceil(Math.max(n, i));
}
function ad(e, t, n) {
	let i = new rO(t.length, e, n);
	return t.push(i), i;
}
function ap(e, t) {
	e.layout.unscaledWidth += t;
}
function ah(e, t) {
	au(t, e, t.originWidth - t.firstBeatXOffset), (t.firstBeatXOffset = 0);
}
function af(e, t) {
	e.layout.measureLayouts.push(t),
		(t.lineLayout = e.layout),
		(t.originX = e.layout.unscaledWidth),
		(e.layout.unscaledWidth += t.originWidth);
}
function ag(e, t, n) {
	return t.originWidth + e.layout.unscaledWidth <= n;
}
function am(e, t, n, i, r, a) {
	ac(e.tpqn, n, r, t);
	let s = !1;
	for (let o of n.layouts)
		!ag(r, o, a) &&
			r.layout.measureLayouts.length > 0 &&
			((r = ad(e, i, a)), (s = !1)),
			s && ah(n, o),
			af(r, o),
			(s = !0);
	return r;
}
function ay(e, t, n) {
	let i = t.width,
		r = [],
		a = ad(e, r, i),
		s = !!e.tuning;
	if ((s && ap(a, n.tuningOffset), "conservative" === n.distribute))
		for (let o of e.measures) {
			al(e.tpqn, o, a, n);
			let l = o.layouts[0];
			ag(a, l, i)
				? af(a, l)
				: (a.layout.measureLayouts.length > 0 && (a = ad(e, r, i)),
				  ag(a, l, i) ? af(a, l) : (a = am(e, n, o, r, a, i)));
		}
	else if ("fitness" === n.distribute)
		for (let c of e.measures) {
			al(e.tpqn, c, a, n);
			let u = c.layouts[0];
			ag(a, u, i) ? af(a, u) : (a = am(e, n, c, r, a, i));
		}
	else
		for (let d of e.measures) {
			al(e.tpqn, d, a, n);
			let p = d.layouts[0];
			ag(a, p, i) || (a.layout.measureLayouts.length > 0 && (a = ad(e, r, i))),
				af(a, p);
		}
	let h = [],
		f = 0,
		g = r.length,
		m = t.makeScaleStrategy(g);
	for (a of r)
		(a.hangingText = h),
			(a.layout.y = f),
			(h = a.distribute(e, t, m, n)),
			(f += a.layout.height);
	return { lines: r, height: f };
}
class av {
	constructor(e) {
		(this.source = e),
			(this.tempo = {
				bpm: e.bpm,
				type: e.type,
				position: e.position || 0,
				linear: e.linear || !1,
				visible: e.visible || !1,
			}),
			(this.measureOffset = 0),
			(this.originMeasureOffset = 0),
			(this.layer = void 0);
	}
}
let ab = 1e5;
function aw(e) {
	let t = [],
		n = null,
		i = 0,
		r = !1,
		a = 0;
	for (let s = 0; s < e.length; ) {
		if (++a > 1e5) throw Error("Watchdog");
		let o = e[s];
		if (
			(t.push(o),
			o.reprise &&
				o.reprise.startIndex === o.index &&
				(!n || n.startIndex !== o.index) &&
				((n = o.reprise), (i = 1)),
			n)
		) {
			if (o.repeat && i < o.repeat) (s = n.startIndex), i++, (r = !1);
			else if (++s < e.length) {
				let l = e[s];
				if (l.alternateEnding) {
					let c = !1;
					for (let u of l.alternateEnding)
						if (u === i) {
							c = !0;
							break;
						}
					c
						? (r = !0)
						: r
						? ((s = n.startIndex), i++, (r = !1))
						: ((s = rH(n, i) || n.endIndex + 1), (r = !0));
				}
				s > n.endIndex && ((n = null), (i = 0));
			}
		} else s++;
	}
	return t;
}
function aS(e, t, n) {
	return e * (6e4 / n / t);
}
let aC = 960,
	ak = (e) => (960 * (ro.bpm / ro.type)) / (e.bpm / e.type),
	ax = (e) => ((e / 960) * 6e4) / ro.bpm,
	aE = (e, t) => e * t * ro.type;
function aT(e, t) {
	let n = aw(t),
		i = new Map(),
		r = [],
		a = [],
		s = ro,
		o = 960,
		l = 960,
		c = 0,
		u = 0;
	for (let d of n) {
		let p = d.beatsLayoutsByTime,
			h = d.tempoLayoutsByTime,
			f = e ? r0(d.signature, e) : rZ(d.signature),
			g = [...p.keys()].sort((e, t) => e - t),
			m = p.get(0),
			y = c,
			v = c,
			b = u;
		if (m) {
			let w = u - 2 * c;
			m.shifts.push(w), r.push(w), m.occurrences.push(c), i.set(c, m);
			let S = h.get(0);
			S &&
				((s = S.tempo),
				a.push({ timestamp: c, tempo: s }),
				(o = Math.floor(ak(s))),
				(l = Math.floor(2 * ak(s))));
			for (let C = 1; C < g.length; C++) {
				let k = g[C],
					x = p.get(k);
				if (x) {
					if (k < f) {
						if (e) {
							let E = aS(k, e, s.bpm);
							(c = v + E), (u = b + 2 * E);
						} else {
							let T = rQ(k);
							(c = v + ax(aE(T, o))), (u = b + ax(aE(T, l)));
						}
						m.duration = c - y;
						let _ = u - 2 * c;
						m.shifts.push(_),
							r.push(_),
							x.occurrences.push(c),
							i.set(c, x),
							(m = x),
							(y = c);
					} else x.occurrences.push(c);
				}
			}
		}
		if (e) {
			let P = aS(f, e, s.bpm);
			(c = v + P), (u = b + 2 * P);
		} else {
			let L = rQ(f);
			(c = v + ax(aE(L, o))), (u = b + ax(aE(L, l)));
		}
		m && (m.duration = c - y);
	}
	return {
		timeline: i,
		tempos: a,
		shifts: r,
		progression: n.map((e) => e.index + 1),
	};
}
function a_(e, t) {
	let n = e.get(t);
	if (!n) throw Error("Broken timeline");
	return n;
}
function aP(e, t) {
	return 2 * e + t;
}
function aL(e, t) {
	if (0 === t) return 0;
	let { timestamps: n } = e,
		i = n[n.length - 1];
	if (t <= 0) return aP(t, e.shifts[0] || 0);
	if (t >= i) return aP(t, e.shifts[n.length - 1] || 0);
	let r = 0,
		a = n.length,
		s = 0,
		o = 0;
	for (; a - r > 1; ) {
		s = Math.floor((r + a) / 2);
		let l = n[s];
		if (t < l) a = s;
		else if (t > l) r = s;
		else {
			o = s;
			break;
		}
	}
	return (o = r), aP(t, e.shifts[o] || 0);
}
function aA(e, t, n) {
	let { timeline: i, timestamps: r } = e,
		a = r[0],
		s = r[r.length - 1];
	if (t <= a) return a_(i, a);
	if (t >= s) return a_(i, s);
	let o = 0,
		l = r.length,
		c = 0;
	for (r[0]; l - o > 1; ) {
		c = Math.floor((o + l) / 2);
		let u = r[c];
		if (t < u) l = c;
		else if (t > u) o = c;
		else break;
	}
	return a_(i, l - o > 1 ? r["left" === n ? c : c - 1] : r[o]);
}
function aN(e, t) {
	let n =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left",
		{ timestamps: i } = e,
		r = i[0],
		a = i[i.length - 1];
	if (t <= r) return 0;
	if (t >= a) return i.length - 1;
	let s = 0,
		o = i.length,
		l = 0;
	for (; o - s > 1; ) {
		l = Math.floor((s + o) / 2);
		let c = i[l];
		if (t < c) o = l;
		else {
			if (!(t > c)) return l;
			s = l;
		}
	}
	return o - s > 1 ? ("left" === n ? l : l - 1) : s;
}
function aI(e, t) {
	if (!e)
		return (
			console.error("Broken or empty Part. Count In does not work."),
			{ bpm: 0, signature: [0, 0] }
		);
	let n = aA(e, t, "left"),
		i = aB(e, t).bpm,
		r = n.measureLayout.measure.signature;
	return { bpm: i, signature: r };
}
function aM(e, t) {
	let n = aA(e, t, "left"),
		i = n.measureLayout.beatsLayouts;
	return { loopStart: iU(i[0]), loopEnd: iG(i[i.length - 1]) };
}
function aB(e, t) {
	let n = e.tempos[0];
	for (let i of e.tempos) {
		if (i.timestamp > t) break;
		n = i;
	}
	return n ? n.tempo : ro;
}
function aD(e, t, n, i, r) {
	let a = n.measureLayout.measure.reprise,
		s = i.measureLayout.measure.reprise,
		o = iV(n),
		l = iV(i),
		c = iG(i);
	a && (!s || a.startIndex !== s.startIndex) && (o = ij(n));
	let u = o,
		d = t;
	if (o > t || t >= c) {
		let p = aA(e, t, "left"),
			h = iV(p),
			f = ij(p);
		d = o <= h && h < c ? h : o <= f && f < c ? f : "right" === r ? l : u;
	}
	return { cursor: d, loopStart: o, loopEnd: c };
}
function az(e) {
	switch (e) {
		case "left":
			return 0.2;
		case "right":
			return 0.8;
		default:
			return 0.5;
	}
}
function aO(e, t, n) {
	let i = e.layout.measureLayouts[0];
	for (let r of e.layout.measureLayouts) {
		if (r.x > t) break;
		i = r;
	}
	let a = i.beatsLayouts,
		s = 0,
		o = a.length,
		l = 0,
		c = a[0];
	for (; o - s > 1; ) {
		c = a[(l = Math.floor((s + o) / 2))];
		let u = c.absoluteX;
		if (u < t) s = l;
		else if (u > t) o = l;
		else break;
	}
	if (o - s > 1) return c;
	{
		if (o === a.length) return a[s];
		let d = a[s],
			p = a[o],
			h = p.absoluteX - d.absoluteX,
			f = az(n);
		return d.absoluteX + h * f > t ? d : p;
	}
}
function aR(e, t, n) {
	let i = 0,
		r = e.length,
		a = e[0];
	for (; r - i > 1; ) {
		let s = Math.floor((i + r) / 2),
			o = e[s];
		if (t.y < o.layout.y) r = s;
		else if (t.y > o.layout.maxY) i = s;
		else {
			a = o;
			break;
		}
	}
	return aO(a, t.x, n);
}
function a$(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
	(e.index = t),
		(e.duration = 0),
		(e.scale = e.scale || 1),
		(e.repeat = Math.min(e.repeat || 0, n.useGenericTimeline ? 32 : 10)),
		(e.beatsLayoutsByTime = new Map()),
		(e.rhythmLines = 0),
		(e.tripletFeelWithLayer = e.tripletFeel
			? { layer: null, feel: e.tripletFeel }
			: void 0),
		(e.markerWithLayer = e.marker
			? { layer: null, text: e.marker.text, width: e.marker.width }
			: void 0);
}
let aF = (e) => (e & (e - 1)) == 0;
function aH(e, t) {
	let n;
	return (n =
		(e & (e - 1)) | (t & (t - 1)) ? (e * t) / rX(e, t) : Math.max(e, t)) <= 0 ||
		n >= 32768 ||
		n % 1 != 0
		? e
		: n;
}
function aV(e) {
	let t = [],
		n = !1,
		i = !1,
		r = !1,
		a = !1;
	for (let s of e)
		for (let o of (s.tripletFeel && (n = !0), s.voices))
			if (!o.rest)
				for (let l of o.beats) {
					let { tuplet: c, duration: u, notes: d } = l;
					if ((c && !t.includes(c) && t.push(c), u && u.length)) {
						let p = rJ(u);
						if (!aF(p) || p > 32768) continue;
						for (let h of (t.includes(p) || t.push(p), d))
							h.dead && (i = !0),
								(h.bend || h.slide) && (r = !0),
								h.tremolo && (a = !0);
					}
				}
	n && t.push(24, 48),
		i && t.push(128),
		r && t.push(60),
		a && t.push(8, 16, 32, 64);
	let f = t.reduce(aH, Math.max(4 * Math.max(...t), 32)) || 128;
	for (; f < 1e4; ) f *= 2;
	return Math.min(f, 32767);
}
function aj(e, t) {
	let n = isNaN(e.tpqn);
	t && n && (e.tpqn = t ? aV(e.measures) : null);
}
function aU(e, t) {
	if (
		(e.repeatStart && ((t.lastReprise = new r$(e)), (t.inReprise = !0)),
		e.alternateEnding)
	) {
		if (t.lastReprise)
			for (let n of ((e.reprise = t.lastReprise), e.alternateEnding))
				rF(t.lastReprise, n, e);
	} else t && t.inReprise && t.lastReprise && (e.reprise = t.lastReprise);
	if (e.repeat) {
		if (!t || !t.lastReprise) throw Error("Broken ending of reprise");
		(t.lastReprise.endIndex = e.index), (t.inReprise = !1);
	}
}
let aG = [4, 4];
function aW(e, t) {
	(e.hasSignature = !!e.signature),
		(e.signature = e.signature || t.signature || aG),
		e.hasSignature && (t.signature = e.signature);
}
function aq(e) {
	return e.hasSignature ? 50 : 15;
}
function aX(e, t, n) {
	t.tempoLayoutsByTime = new Map();
	let i = aq(t);
	for (let r of n.filter((e) => +e.measure == +t.index + 1)) {
		let a = e ? Math.floor(4 * e * r.position) : r1(r.position),
			s = t.tempoLayoutsByTime.get(a);
		s ||
			(((s = new av(r)).measureOffset = i),
			(s.originMeasureOffset = i),
			t.tempoLayoutsByTime.set(a, s));
	}
}
function aY(e, t) {
	(e.index = t),
		(e.rest = e.rest || !1),
		(e.beats = (!e.rest && e.beats) || []),
		(e.hasSameRhythm = e.hasSameRhythm || !1),
		(e.lyrics = !1);
}
function aK(e, t) {
	let n =
		e.rest ||
		e.hasSameRhythm ||
		(1 === e.beats.length &&
			(1 === e.beats[0].duration[0] || 1 === e.beats[0].duration[1]));
	t.rhythmLines += n ? 0 : 1;
}
function aJ(e, t, n, i) {
	(e.index = t),
		(e.measure = i),
		(e.prevBeat = null),
		(e.nextBeat = null),
		e.tuplet || (e.tuplet = 0),
		(e.width = 0),
		(e.voice = n),
		(e.chord = e.chord
			? {
					layer: null,
					text:
						void 0 !== e.chord.text && void 0 !== e.chord.text.text
							? e.chord.text.text
							: e.chord.text,
					width: e.chord.width,
			  }
			: void 0),
		(e.originalText = e.text
			? {
					layer: null,
					text:
						void 0 !== e.text.text && void 0 !== e.text.text.text
							? e.text.text.text
							: e.text.text,
					width: e.text.width,
			  }
			: void 0),
		(e.text = void 0),
		(e.tappingWithLayer = e.tapping
			? { layer: null, text: "T", width: 6, voice: n }
			: void 0);
}
function aZ(e) {
	if (!e) return;
	let t = e.points[0],
		n = t.tone,
		i = [{ position: 0, tone: n }];
	for (let r of e.points)
		i[i.length - 1].tone !== r.tone &&
			(i.push({ position: 0, tone: r.tone }), (n = Math.max(n, r.tone)));
	return (
		1 === i.length && i.push({ position: 0, tone: n }),
		i.forEach((e, t) => {
			e.position = (60 * t) / (i.length - 1);
		}),
		{ ...e, points: i }
	);
}
function aQ(e, t, n, i) {
	(e.index = t),
		(e.beat = n),
		(e.string = e.string || 0),
		(e.fret = e.fret || 0),
		(e.bend = i ? aZ(e.bend) : e.bend),
		(e.rightSlide = r3(e.slide)),
		(e.leftSlide = r4(e.slide)),
		(e.bogus = !1);
}
function a1(e, t) {
	if (0 === e.index) {
		for (let n = 0; n < t.length; n++)
			if (!t[n]) {
				let i = e.notes.length,
					r = { string: n, fret: 0 };
				aQ(r, i, e, !1), (r.bogus = !0), (e.notes[i] = r);
			}
	}
}
function a0(e, t, n) {
	t.usedDrums && (e.string = rk(e.fret, n));
}
function a2(e, t) {
	t[e.string] = !0;
}
function a5(e) {
	let t = e.ties;
	return t || ((t = new Map()), (e.ties = t)), t;
}
function a4(e, t, n, i) {
	let r = a5(i),
		a = r.get(e.string);
	if (a) {
		if (e.tie)
			iQ(a, { note: e, beat: t, measure: n }),
				(i1(a).note.tieStart = a),
				(e.tieEnd = a),
				r.set(e.string, new iZ({ note: e, beat: t, measure: n }));
		else {
			let s = i1(a);
			(s.note = e), (s.beat = t), (s.measure = n);
		}
	} else r.set(e.string, new iZ({ note: e, beat: t, measure: n }));
}
function a3(e) {
	let t = e.slides;
	return t || ((t = new Map()), (e.slides = t)), t;
}
function a8(e, t, n, i) {
	let r = a3(i),
		a = "legato" === e.rightSlide || "shift" === e.rightSlide,
		s = r.get(e.string);
	s &&
		!e.tie &&
		(iQ(s, { note: e, beat: t, measure: n }),
		(i1(s).note.slideStart = s),
		(i0(s).note.slideEnd = s),
		r.delete(e.string)),
		a && r.set(e.string, new iZ({ note: e, beat: t, measure: n }));
}
function a6(e) {
	let t = e.slurs;
	return t || ((t = new Map()), (e.slurs = t)), t;
}
function a9(e, t, n, i) {
	let r = a6(i),
		a = e.hp || "legato" === e.rightSlide,
		s = r.get(e.string);
	!s ||
		a ||
		e.tie ||
		(iQ(s, { note: e, beat: t, measure: n }),
		(i1(s).note.slurStart = s),
		(i0(s).note.slurEnd = s),
		r.delete(e.string)),
		!s && a && r.set(e.string, new iZ({ note: e, beat: t, measure: n }));
}
function a7(e) {
	let t = e.bends;
	return t || ((t = new Map()), (e.bends = t)), t;
}
function se(e, t, n, i) {
	let r = a7(i),
		a = r.get(e.string);
	if (
		(!a && e.bend && e.tie && 0 === e.bend.points[0].tone && (e.ghost = !0), a)
	) {
		!e.bend &&
			e.tie &&
			((a.keep = !0), iQ(a, { note: e, beat: t, measure: n }));
		let s = e.bend || (void 0 !== e.bend && !e.tie);
		if (s) {
			i1(a).note.bendStart = a;
			for (let o = 1; o < a.refs.length - 1; o++) a.refs[o].note.bendPart = a;
			(i0(a).note.bendEnd = a), r.delete(e.string);
		}
	}
	e.bend && r.set(e.string, new iZ({ note: e, beat: t, measure: n }));
}
function st(e) {
	let t = e.prevNoteOnString;
	return t || ((t = new Map()), (e.prevNoteOnString = t)), t;
}
function sn(e, t) {
	let n = st(t),
		i = e.string,
		r = n.get(i);
	r && ((r.nextNoteOnString = e), (e.prevNoteOnString = r)), n.set(i, e);
}
function si(e, t, n) {
	let i = a7(n);
	for (let [r, a] of i.entries())
		if (a.keep) a.keep = !1;
		else {
			i1(a).note.bendStart = a;
			for (let s = 1; s < a.refs.length - 1; s++) a.refs[s].note.bendPart = a;
			(i0(a).note.bendEnd = a), i.delete(r);
		}
}
function sr(e) {
	e.layout.usedRest = !0;
}
function sa(e, t) {
	t.rest || (e.layout.usedStrings |= 1 << t.string);
}
function ss(e, t) {
	r5(e.instrumentId) &&
		e.usedDrums &&
		e.usedDrums.set(t.fret, rC(t.fret, t.string));
}
function so(e, t, n, i) {
	e.rest || e.bogus ? 0 === i && sr(t) : (sa(t, e), ss(n, e));
}
function sl(e) {
	let t = e.notes.find((e) => e.harmonic);
	e.harmonic = t ? t.harmonic : void 0;
}
function sc(e, t) {
	t.prevBeat && ((t.prevBeat.nextBeat = e), (e.prevBeat = t.prevBeat)),
		(t.prevBeat = e);
}
function su(e, t) {
	r5(e.instrumentId) &&
		((e.usedDrums = new Map()),
		t && ((e.strings = t ? 5 : 6), (e.isDrumStdOn = !0))),
		(e.voices = e.voices || 1),
		(e.withChords = !1);
}
function sd(e, t) {
	if (!t.tremolo && e.tremolo) {
		let n = Array.isArray(e.tremolo) ? e.tremolo[1] : null;
		t.tremolo = { voice: t.voice, type: 32 === n ? 3 : 16 === n ? 2 : 1 };
	}
}
function sp(e) {
	e.rest && (e.rhythmLines = 0);
}
function sh(e, t) {
	let n = e[t];
	return n || ((n = {}), (e[t] = n)), n;
}
function sf(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
		n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		{
			useStdDrumNotation: i = !1,
			useBendPointsMerge: r = !0,
			useGenericTimeline: a = !1,
		} = n,
		s = e;
	su(s, i), aj(s, a);
	let o = new rO(0, s, 0),
		l = {},
		c = Array(s.voices);
	for (let u = 0; u < s.measures.length; u++) {
		let d = s.measures[u];
		a$(d, u, n),
			(d.layouts = [new rR(d, o.layout)]),
			aW(d, l),
			aX(s.tpqn, d, s.automations.tempo),
			aU(d, l);
		for (let p = 0; p < d.voices.length; p++) {
			let h = d.voices[p];
			if ((aY(h, p), 0 !== p && h.rest)) continue;
			let f = sh(c, p),
				g = 0;
			for (let m = 0; m < h.beats.length; m++) {
				let y = h.beats[m];
				aJ(y, m, p, d);
				let v = d.beatsLayoutsByTime.get(g);
				v || ((v = new iR()), d.beatsLayoutsByTime.set(g, v)),
					(g += s.tpqn ? r0(y.duration, s.tpqn) : rZ(y.duration)),
					(y.layout = v),
					v.beats.unshift(y),
					sc(y, f);
				let b = Array(s.strings);
				for (let w = 0; w < y.notes.length; w++) {
					let S = y.notes[w];
					aQ(S, w, y, r), a0(S, s, i), a2(S, b), sd(S, y);
				}
				a1(y, b);
				for (let C = 0; C < y.notes.length; C++) {
					let k = y.notes[C];
					sn(k, f),
						se(k, y, d, f),
						a8(k, y, d, f),
						a9(k, y, d, f),
						a4(k, y, d, f),
						so(k, y, s, p);
				}
				si(y, d, f), sl(y), !s.withChords && y.chord && (s.withChords = !0);
			}
			(d.duration = Math.max(d.duration, g)), aK(h, d);
		}
		if ((sp(d), t)) {
			let x = t[u];
			if (x) {
				let E = d.voices.length,
					T = { beats: [], hasSameRhythm: !0 };
				aY(T, E), (T.lyrics = !0);
				let _ = 0,
					P = x.beats.length;
				for (let L = 0; L < P; L++) {
					let A = x.beats[L],
						N = d.beatsLayoutsByTime.get(_);
					N || ((N = new iR()), d.beatsLayoutsByTime.set(_, N));
					let I = { ...A };
					aJ(I, L, E, d),
						(T.beats[L] = I),
						(I.layout = N),
						N.beats.unshift(I),
						(_ += s.tpqn ? r0(I.duration, s.tpqn) : rZ(I.duration));
				}
				P &&
					((d.duration = Math.max(d.duration, _)),
					d.voices.unshift(T),
					(d.hasLyrics = !0));
			}
		}
	}
	s.usedDrums && !s.isDrumStdOn && rS(s.usedDrums);
	try {
		let M = aT(s.tpqn, s.measures);
		(s.timeline = M.timeline),
			(s.tempos = M.tempos),
			(s.shifts = M.shifts),
			(s.progression = M.progression),
			(s.timestamps = [...s.timeline.keys()]);
	} catch (B) {
		return [B, s];
	}
	return [null, s];
}
async function sg(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
	(n = n || { method: "get", credentials: "include" }),
		(t = {
			...t,
			Accept: "application/json",
			"Content-Type": "application/json",
		});
	try {
		return await fetch(e, { ...n, headers: t });
	} catch (i) {
		throw new e9();
	}
}
async function sm(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
	(i = i || { method: "post", credentials: "include" }),
		(n = {
			...n,
			Accept: "application/json",
			"Content-Type": "application/json",
		});
	let r = JSON.stringify(t);
	try {
		return await fetch(e, { ...i, headers: n, body: r });
	} catch (a) {
		throw new e9();
	}
}
function sy(e) {
	if (!e.ok) throw new e7(e.status, e.statusText);
}
async function sv(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
	t = t || (await e.json());
	let n = 412 === e.status && "reCAPTCHA Validation Failed" === t.message,
		i = 400 === e.status && "reCAPTCHA Validation Failed." === t.message;
	if (n || i)
		throw new e4(
			{ __all__: "Please wait for reCAPTCHA logo to appear" },
			t.message
		);
}
async function sb(e, t) {
	if (429 === e.status) throw new e6(t);
}
async function sw(e, t) {
	if (403 === e.status) {
		let n = await e.json(),
			i = n.message || t;
		throw new e4({ __all__: i }, i);
	}
}
async function sS(e) {
	if (422 === e.status) {
		let t = await e.json();
		throw new e4(t.message || t.data || t);
	}
}
async function sC(e) {
	if (!e.ok) {
		let t = await e.json(),
			n = t.message || t,
			i = t.reasons || { __all__: n };
		if ((await sv(e, t), 422 === e.status && "You have incorrect email." === n))
			throw new e8();
		throw new e4(i, n);
	}
}
async function sk(e) {
	if ([400, 422, 423].includes(+e.status)) {
		let t = await e.json();
		if (423 === e.status) throw new e3(t.reasons);
		throw new e4(t.reasons || t);
	}
}
async function sx(e) {
	if (!e.ok && 409 !== e.status)
		throw Error("Oops, something went wrong. Please try again later");
}
async function sE(e) {
	let t = e5("/api/video-points"),
		n = await fetch(`${t}?songId=${e}`);
	return sy(n), n.json();
}
async function sT(e, t, n) {
	let i = e5("/api/video-points"),
		r = await sm(i, { songId: e, videoId: t, points: n });
	sy(r);
}
let s_ =
		"(max-width: 479px) and (max-height: 899px) and (orientation: portrait)",
	sP =
		"(max-height: 479px) and (max-width: 899px) and (orientation: landscape)",
	sL = "(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)",
	sA =
		"(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)",
	sN = "(min-width: 1200px)",
	sI =
		"(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)",
	sM = () => window && !!window.matchMedia(s_).matches,
	sB = () =>
		window &&
		!!window.matchMedia(
			"(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)"
		).matches,
	sD = () => {
		if (window) {
			if (
				window.matchMedia(s_).matches ||
				window.matchMedia(
					"(max-height: 479px) and (max-width: 899px) and (orientation: landscape)"
				).matches
			)
				return "small";
			if (
				window.matchMedia(
					"(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)"
				).matches ||
				window.matchMedia(
					"(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)"
				).matches
			)
				return "medium";
			if (window.matchMedia("(min-width: 1200px)").matches) return "wide";
		}
		return "large";
	};
function sz() {
	try {
		let e = getComputedStyle(document.documentElement),
			t =
				parseInt(e.getPropertyValue("--sal")) +
				parseInt(e.getPropertyValue("--sar"));
		return isNaN(t) ? 0 : t;
	} catch (n) {
		return 0;
	}
}
let sO = () => {
		let e = sz();
		return window.visualViewport
			? {
					width: window.visualViewport.width - e,
					height: window.visualViewport.height,
			  }
			: document.documentElement
			? {
					width: document.documentElement.clientWidth - e,
					height: document.documentElement.clientHeight,
			  }
			: void 0;
	},
	sR = 30,
	s$ = "dQw4w9WgXcQ",
	sF = (e) => {
		function t(e, t, n) {
			let i,
				r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 550;
			if (t) i = e;
			else {
				let a = e;
				sB() && (a = a - 90 - 100), (i = Math.min(a, 880));
			}
			let s = n ? r : 750;
			return i < s ? [s, i / s] : [i, 1];
		}
		function n(n, i, r, a, s, o, l, c, u, d) {
			try {
				let p = sM(),
					h = 550;
				p && (h = 320);
				let [f, g] = t(o, l, p, h),
					m = n.part.lines,
					y = `${i}-${r}-${a}`;
				if (m.lines && m.hash === y && m.width === f && m.scale === g) return;
				let v = m.lines,
					b = m.height,
					w = m.slicingMode;
				if (m.hash !== y || m.width !== f) {
					console.log("distributeLines", o, f, m.scale, g),
						(w = new rU(f - sR));
					let S = p ? new aa() : new as(),
						C = ay(s, w, S);
					(v = C.lines), (b = C.height);
				}
				let k = {
					lines: v,
					height: b,
					width: f,
					scale: g,
					slicingMode: w,
					hash: y,
				};
				if (d && d.aborted) return;
				e.dispatch("part/load:done", {
					songId: i,
					partId: r,
					revisionId: a,
					current: s,
					lines: k,
				});
			} catch (x) {
				if (d && d.aborted) return;
				e.dispatch("part/load:error", {
					songId: i,
					partId: r,
					revisionId: a,
					error: x,
				});
			}
		}
		function i(e, t) {
			let n = e.map((t) => (t - e[0]) * 1e3),
				i = [],
				r = null;
			for (let [a, s] of t) {
				let o = s.beats[0].measure.index;
				o !== r && ((r = o), i.push(a));
			}
			let l = new Map(),
				c = null,
				u = 0,
				d = 1,
				p = 0;
			for (let [h, f] of t) {
				let g = f.beats[0].measure.index;
				if (g === c) {
					(f.duration = f.duration * d),
						(f.occurrences = f.occurrences.filter((e) => e !== h)),
						f.occurrences.push(p),
						(f.occurrences = f.occurrences.sort()),
						l.set(p, f),
						(p += f.duration);
					continue;
				}
				if (!n[u + 1]) break;
				(f.occurrences = f.occurrences.filter((e) => e !== h)),
					f.occurrences.push(n[u]),
					(f.occurrences = f.occurrences.sort()),
					(d = (n[u + 1] - n[u]) / (i[u + 1] - i[u])),
					(f.duration = f.duration * d),
					l.set(n[u], f),
					(p = n[u] + f.duration),
					(c = g),
					u++;
			}
			return { videoTimestamps: [...l.keys()], videoTimeline: l };
		}
		e.on("meta/load:done", async (t, n) => {
			let { partId: i, current: r } = n;
			if (!n0(r, t.device.country)) return;
			let a = r.songId,
				s = r.revisionId,
				o = new tI();
			try {
				let l = t.part.loading;
				if (l) {
					if (a === l.songId && i === l.partId && s === l.revisionId) return;
					l.ac.abort();
				}
				if (
					!t.part.isFailed &&
					t.part.current &&
					t.part.lines &&
					a === t.part.songId &&
					i === t.part.partId &&
					s === t.part.revisionId
				) {
					e.dispatch("part/load:done", {
						songId: a,
						partId: i,
						revisionId: s,
						current: t.part.current,
						lines: t.part.lines,
					});
					return;
				}
				await e.dispatch("part/load:processing", {
					songId: a,
					partId: i,
					revisionId: s,
					ac: o,
				});
				let c = [nF(a, s, i, r.image, o.signal)];
				(!r.image || r.lyrics) && c.push(nH(a, s, r.image, o.signal));
				let [u, d] = await Promise.all(c);
				if (!u || o.signal.aborted) return;
				await e.dispatch("part/load:raw", {
					songId: a,
					partId: i,
					revisionId: s,
					rawPart: u,
					rawLyrics: d,
					signal: o.signal,
				});
			} catch (p) {
				if (o.signal.aborted) return;
				e.dispatch("part/load:error", {
					songId: a,
					partId: i,
					revisionId: s,
					error: p,
				});
			}
		}),
			e.on("meta/load:processing", (e, t) => {
				let { songHasChanged: n } = t;
				if (n)
					return {
						part: {
							...e.part,
							current: null,
							lines: {
								lines: [],
								height: 0,
								width: 0,
								scale: 1,
								hash: "",
								slicingMode: new rU(0),
							},
						},
					};
			}),
			e.on("meta/load:processing", (e, t) => {
				let { songId: n, partId: i, revisionId: r } = t,
					a = e.part.loading;
				if (
					a &&
					(n !== a.songId || (i && i !== a.partId) || r !== a.revisionId)
				)
					return a.ac.abort(), { part: { ...e.part, loading: null } };
			}),
			e.on("part/load:processing", (e, t) => {
				let { songId: n, partId: i, revisionId: r, ac: a } = t;
				return {
					part: {
						...e.part,
						loading: { songId: n, partId: i, revisionId: r, ac: a },
					},
				};
			}),
			e.on("part/load:raw", (t, n) => {
				var i, r;
				let {
						songId: a,
						partId: s,
						revisionId: o,
						rawPart: l,
						rawLyrics: c,
						signal: u,
					} = n,
					d = t.experiments,
					p = {
						useStdDrumNotation:
							(null === (i = d.drum_standard_notation) || void 0 === i
								? void 0
								: i.segment) !== "drop",
						useGenericTimeline: t.player.version !== ty.V1,
					},
					[h, f] = sf(l, c, p);
				if (!u.aborted) {
					if (h) {
						e.dispatch("part/load:error", {
							songId: a,
							partId: s,
							revisionId: o,
							error: h,
						});
						return;
					}
					(null === (r = d.play_along) || void 0 === r ? void 0 : r.segment) ===
						"on" &&
						e.dispatch("part/loadVideoTimeline", { songId: a, current: f }),
						e.dispatch("part/load:inflated", {
							songId: a,
							partId: s,
							revisionId: o,
							current: f,
							signal: u,
						});
				}
			}),
			e.on("part/load:done", (e, t) => {
				let { songId: n, partId: i, revisionId: r, current: a, lines: s } = t;
				return {
					part: {
						...e.part,
						current: a,
						lines: s,
						songId: n,
						partId: i,
						revisionId: r,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
						loading: null,
					},
				};
			}),
			e.on("part/load:inflated", (t, i) => {
				let { songId: r, partId: a, revisionId: s, current: o, signal: l } = i,
					c = t.screen.viewport.width;
				c &&
					n(
						t,
						r,
						a,
						s,
						o,
						c,
						t.screen.fullscreen,
						e.dispatch,
						t.experiments,
						l
					);
			}),
			e.on("screen/resize", (t, i) => {
				let { viewport: r } = i,
					{ songId: a, partId: s, revisionId: o, current: l } = t.part;
				l &&
					n(
						t,
						a,
						s,
						o,
						l,
						r.width,
						t.screen.fullscreen,
						e.dispatch,
						t.experiments
					);
			}),
			e.on("screen/toggleFullscreen", (t, i) => {
				let { enabled: r } = i,
					{ songId: a, partId: s, revisionId: o, current: l } = t.part;
				if (!l) return;
				let c = t.screen.viewport.width;
				c && n(t, a, s, o, l, c, r, e.dispatch, t.experiments);
			}),
			e.on("part/load:done", (e) => {
				try {
					let t = eR(e.meta.current, e.meta.partId, e.meta.revisionId),
						n = new Date();
					n.setTime(n.getTime() + 7776e6),
						(document.cookie = `lastSeenTrack=${t};expires=${n.toUTCString()};path=/`);
				} catch (i) {
					console.error(i);
				}
			}),
			e.on("part/load:error", (e, t) => {
				let { songId: n, partId: i, revisionId: r, error: a } = t;
				return {
					part: {
						...e.part,
						current: null,
						lines: null,
						songId: n,
						partId: i,
						revisionId: r,
						isFailed: !0,
						isNetworkFailed: a instanceof e7 && 0 === a.status,
						isNotFound:
							a instanceof e7 && (404 === a.status || 400 === a.status),
						loading: null,
					},
				};
			}),
			e.on("part/load:error", (e, t) => {
				let { error: n } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(n),
					console.error(n);
			}),
			e.on("part/loadVideoTimeline", async (t, n) => {
				let { songId: r, current: a } = n,
					s = null,
					o = null,
					l = 0,
					c = "dQw4w9WgXcQ";
				try {
					let u = await sE(r);
					if (u) {
						let d = i(u.points, a.timeline);
						(s = d.videoTimeline),
							(o = d.videoTimestamps),
							(l = u.points[0]),
							(c = u.videoId);
					}
				} catch (p) {
					console.log(p);
				} finally {
					e.dispatch("part/loadVideoTimeline:done", {
						videoId: c,
						videoTimeline: s,
						videoTimestamps: o,
						videoOffset: l,
						current: a,
					});
				}
			}),
			e.on("part/loadVideoTimeline:done", (e, t) => {
				let { part: n } = e,
					{
						videoId: i,
						videoTimeline: r,
						videoTimestamps: a,
						videoOffset: s,
						current: o,
					} = t,
					l = o.timeline,
					c = o.timestamps,
					u = r || o.timeline,
					d = a || o.timestamps;
				return {
					part: {
						...n,
						current: { ...n.current, timeline: u, timestamps: d },
						videoId: i,
						videoOffset: s,
						videoTimeline: r,
						videoTimestamps: a,
						audioTimeline: l,
						audioTimestamps: c,
					},
				};
			}),
			e.on("part/applyVideoBarPoints", (e, t) => {
				let { part: n } = e,
					{ points: r } = t,
					a = i(r, n.current.timeline),
					s = a.videoTimeline,
					o = a.videoTimestamps,
					l = r[0];
				return {
					part: {
						...n,
						current: { ...n.current, timeline: s, timestamps: o },
						videoOffset: l,
						videoTimeline: s,
						videoTimestamps: o,
					},
				};
			}),
			e.on("part/guessOffset", (e, t) => {
				let { part: n } = e;
				return { part: { ...n, videoOffset: t } };
			}),
			e.on("part/changeVideoId", (e, t) => {
				let { part: n } = e;
				return { part: { ...n, videoId: t } };
			}),
			e.on("part/saveVideoPoints", async (e, t) => {
				let { part: n } = e,
					{ points: i } = t;
				await sT(n.songId, n.videoId, i);
			});
	};
async function sH(e, t) {
	let n = e5(`/api/song/${e.songId}`),
		i = await fetch(n, { method: "delete", credentials: "include", signal: t });
	return t && t.aborted
		? { success: !1 }
		: (sy(i), await sS(i), sw(i, "Forbidden"), { success: !!i.ok });
}
async function sV(e, t, n) {
	let i = e5("/api/sound/update"),
		r = await sm(i, { revisionId: e, version: t });
	(n && n.aborted) || sy(r);
}
async function sj(e, t, n) {
	let i = e5("/api/sound/generate"),
		r = await sm(i, { revisionId: e, version: t });
	(n && n.aborted) || sy(r);
}
let sU = "undefined" != typeof window && !!window.requestAnimationFrame,
	sG = (e) => (e < 100 ? 50 : 100);
function sW(e) {
	try {
		return JSON.parse(window.localStorage.getItem(e));
	} catch (t) {
		return null;
	}
}
function sq(e, t) {
	try {
		t
			? window.localStorage.setItem(e, JSON.stringify(t))
			: window.localStorage.removeItem(e);
	} catch (n) {}
}
var sX = { get: sW, set: sq };
let sY =
	window.performance && window.performance.now
		? window.performance.now.bind(window.performance)
		: Date.now;
function sK(e, t) {
	let n;
	var i = this;
	return function () {
		for (var r = arguments.length, a = Array(r), s = 0; s < r; s++)
			a[s] = arguments[s];
		let o = () => e.apply(i, a);
		clearTimeout(n), (n = setTimeout(o, t));
	};
}
function sJ(e, t) {
	let n = !1;
	return (i) => {
		n ||
			(e(i),
			(n = !0),
			setTimeout(() => {
				n = !1;
			}, t));
	};
}
let sZ = ["scroll", "keydown", "click", "mousemove", "mousedown"];
class sQ {
	constructor() {
		(this.hasFirstActivity = !1),
			this.reset(),
			this.engage(),
			this.trackFirstActivity();
	}
	engage() {
		for (let e of sZ) window.addEventListener(e, this.trackActivity);
	}
	disengage() {
		for (let e of sZ) window.removeEventListener(e, this.trackActivity);
	}
	reset() {
		this.setIsActive(!1);
	}
	trackFirstActivity() {
		sZ.forEach((e) =>
			window.addEventListener(
				e,
				() => {
					this.hasFirstActivity = !0;
				},
				{ once: !0 }
			)
		);
	}
	trackActivity = sJ(() => {
		this.lastActivityTimestampMs = sY();
	}, 200);
	setIsActive(e) {
		!this.isActive && e
			? this.disengage()
			: this.isActive && !e && this.engage(),
			(this.lastActivityTimestampMs = sY()),
			(this.isActive = e);
	}
	getTimeSinceLastActivity() {
		return this.isActive
			? 0
			: Math.round((sY() - this.lastActivityTimestampMs) / 6e4);
	}
}
let s1 = new sQ(),
	s0 = { solo: "s", focus: "f", mute: "m" },
	s2 = "hasUpdatedSoundV4";
function s5(e, t) {
	var n, i;
	let r =
			(null === (n = t.new_sound) || void 0 === n ? void 0 : n.segment) ===
			"drop",
		a =
			(null === (i = t.sound_v4) || void 0 === i ? void 0 : i.segment) ===
			"drop";
	return a ? ty.V2 : r ? ty.V1 : ty.V4;
}
async function s4(e) {
	try {
		let t = "hasUpdatedSoundV4",
			n = sW(t) || [];
		if (n.includes(e.revisionId)) return;
		let i = e.revisionId;
		sq(t, [...n, i]), await sV(e.revisionId, ty.V4);
	} catch (r) {
		console.warn("error triggering audio update request (v4)");
	}
}
async function s3(e, t, n, i, r) {
	let a = e.get(),
		s = a.meta.current;
	if (!s) return;
	let { type: o, audio: l, forcedVersion: c } = a.player,
		u = sG(a.player.speed),
		d = !!((null == l ? void 0 : l.context) && window && window.Worker),
		p = s5(a.device, a.experiments);
	if (
		(r || c ? (p = r || c) : eQ.has(s, p) || (p = ty.MASTER), !eQ.has(s, p))
	) {
		let h = eQ.getAll(s);
		p = h[h.length - 1] || ty.MASTER;
	}
	let f = eJ(p),
		g = s[f.audioHashPropertyName];
	if (l && g && d && sU) {
		let m = `${t}/${i}/${g}/${u}/${s0[o]}/${n}.opus`;
		e.dispatch("player/open", { url: m, version: p });
	}
}
let s8 = (e) => {
		e.on("curiosity/vpt10", (e) => {
			var t;
			if ("bot" === e.device.type || e.isTestMode) return;
			let n = null === (t = e.meta) || void 0 === t ? void 0 : t.current;
			!(!n || eQ.has(n, ty.V4)) &&
				(s1.getTimeSinceLastActivity() >= 5 || s4(n));
		}),
			e.on("meta/load:done", (t, n) => {
				let { songId: i, partId: r, current: a } = n;
				if (
					n0(a, t.device.country) &&
					(s3(e, i, r, a.revisionId), "bot" === t.device.type || t.isTestMode)
				)
					return;
			});
	},
	s6 = (e) => e.currentTime,
	s9 = (e) => ("outputLatency" in e ? e.outputLatency : 0),
	s7 = (e) => ("baseLatency" in e ? e.baseLatency : 0),
	oe = (e) => s9(e) + s7(e);
function ot(e, t) {
	let n;
	for (n = t; e > 1; e--) n += t;
	return n;
}
function on() {
	try {
		let e = document.createElement("div");
		e.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
		let t = e.children.item(0);
		return (
			(t.disableRemotePlayback = !0),
			(t.controls = !1),
			(t.src =
				"data:audio/mpeg;base64,//uQx" +
				ot(23, "A") +
				"WGluZwAAAA8AAAACAAACcQCA" +
				ot(16, "gICA") +
				ot(66, "/") +
				"8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
				ot(320, "A") +
				"//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
				ot(15, "/") +
				"7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
				ot(18, "/") +
				"9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
				ot(97, "V") +
				"Q=="),
			(t.loop = !0),
			t.load(),
			{
				play() {
					try {
						let e = t.play();
						e &&
							e.then(
								() => {
									"mediaSession" in navigator &&
										(navigator.mediaSession.playbackState = "playing");
								},
								(e) => console.warn("Hack play failed", e)
							);
					} catch (n) {
						console.error(n);
					}
				},
				pause() {
					try {
						let e = t.pause();
						e &&
							e.then(
								() => {},
								(e) => console.warn("Hack pause failed", e)
							),
							"mediaSession" in navigator &&
								(navigator.mediaSession.playbackState = "paused");
					} catch (n) {
						console.error(n);
					}
				},
			}
		);
	} catch (n) {
		return console.error(n), null;
	}
}
let oi = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function or() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
		t = "";
	for (; e-- > 0; )
		t += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[
			(64 * Math.random()) | 0
		];
	return t;
}
let oa = "/static/latest/WebWorker.f475489b.js",
	os = window.performance || {
		offset: Date.now(),
		now: function () {
			return Date.now() - this.offset;
		},
	};
function oo(e) {
	return e / 1e3;
}
function ol(e) {}
function oc(e, t) {
	if (e) throw Error(t);
}
class ou {
	constructor(e, t = !1) {
		this.state = {
			speed: 100,
			pitchShift: 0,
			cursor: 0,
			loopStart: 0,
			loopEnd: 0,
			type: "focus",
			isPlaying: !1,
			isCountIn: !1,
			isMetronome: !1,
			metronomeType: "regular",
			url: "",
			audioFromYT: t,
		};
		try {
			let n = new window.AudioContext({ latencyHint: "interactive" });
			if (!(44100 === n.sampleRate || 48e3 === n.sampleRate)) {
				let i = n.createBufferSource();
				(i.buffer = n.createBuffer(1, 1, 48e3)),
					i.connect(n.destination),
					i.start(0),
					"close" in n && n.close(),
					(n = new window.AudioContext({ latencyHint: "interactive" }));
			}
			(n.onstatechange = () => {
				console.log(
					`Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`
				);
			}),
				(this.context = n),
				(this.freezeCheckSampleRate = this.context.sampleRate);
		} catch (r) {
			console.error("error creating audio context", r), (this.context = null);
		}
		window.Worker &&
			((this.worker = new Worker("/static/latest/WebWorker.f475489b.js")),
			(this.worker.onmessage = this.onMessage),
			(this.worker.onerror = e.onError)),
			(this.callback = e),
			(this.buffers = [null, null, null, null, null]),
			(this.sources = [null, null, null, null, null]),
			(this.reuseIndex = 0),
			(this.startedTime = null),
			(this.token = ""),
			(this.countinDuration = 0),
			(this.workerTs = 0),
			(this.workerDelay = 0),
			(this.hack = on()),
			(this.noSound = !1),
			(this.marginIssueReported = !1),
			(this.workerStarted = !1),
			(this.hasSingleTrack = !1);
	}
	get shouldUseWorker() {
		return (
			this.context && this.worker && !this.noSound && !this.state.audioFromYT
		);
	}
	resumeContext() {
		let e = this.context;
		e &&
			"running" !== e.state &&
			"resume" in e &&
			(console.info("Resume context", e.state),
			e.resume().catch(console.error.bind(console)));
	}
	createAudioBuffers(e, t) {
		let n = 1.02 * t;
		for (let i = 0; i < this.buffers.length; i++) {
			let r = this.buffers[i];
			(r && r.numberOfChannels === e && r.sampleRate === t && r.length === n) ||
				(this.buffers[i] = this.context.createBuffer(e, n, t));
		}
	}
	onOpened(e) {
		this.createAudioBuffers(e.channels, e.sampleRate),
			this.callback.onOpened(e);
	}
	onEmpty(e) {
		this.callback.onEmpty(e);
	}
	onLoad(e) {
		this.callback.onLoad(e);
	}
	onLoaded(e) {
		(this.noSound = !1), this.callback.onLoaded(e);
	}
	onError(e) {
		(this.noSound = !0), this.callback.onError(e.error, e.isNetworkError);
	}
	onPacket(e) {
		if (!this.state.isPlaying) return;
		if (this.token !== e.token) {
			var t;
			(null == process
				? void 0
				: null === (t = process.env) || void 0 === t
				? void 0
				: t.NODE_ENV) === "development" &&
				console.log(
					`Drop audio packet with token mismatch: expected ${this.token}, actual ${e.token}`
				);
			return;
		}
		let n = this.context;
		if (n.sampleRate !== this.freezeCheckSampleRate) {
			console.warn(
				"SampleRate has changed",
				n.sampleRate,
				this.freezeCheckSampleRate
			),
				this.callback.onFreeze();
			return;
		}
		this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
		let i = this.buffers[this.reuseIndex];
		if (
			(i.copyToChannel
				? (i.copyToChannel(e.buffer0, 0),
				  e.buffer1 && i.copyToChannel(e.buffer1, 1))
				: (i.getChannelData(0).set(e.buffer0),
				  e.buffer1 && i.getChannelData(1).set(e.buffer1)),
			!this.gain)
		) {
			let r = n.createGain();
			(r.gain.value = 1), r.connect(n.destination), (this.gain = r);
		}
		let a = n.createBufferSource();
		(a.buffer = i), a.connect(this.gain), (this.sources[this.reuseIndex] = a);
		let s = 0;
		if (null !== this.startedTime) {
			s = this.startedTime + oo(e.timestampMs);
			let o = s - n.currentTime;
			o < 0.2 &&
				(console.log("Ahead of time schedule margin", o),
				console.info(`Sound generation delay ${this.workerDelay}ms`)),
				!this.marginIssueReported &&
					e.timestampMs > 2e3 &&
					(o < 0 && console.log("Ahead of time schedule margin is negative", o),
					o >= 0 &&
						o < 0.2 &&
						console.log("Ahead of time schedule margin is too small", o),
					(this.marginIssueReported = !0));
		} else
			(s = n.currentTime + 0.05),
				(this.startedContextTime = s6(n) + 0.05),
				(this.startedTime = s),
				(this.workerDelay = Math.floor(os.now() - this.workerTs)),
				console.info(`Sound generation delay ${this.workerDelay}ms`),
				oc(
					0 !== e.timestampMs,
					`Got initial audio packet with unexpected timestamp ${e.timestampMs}`
				);
		a.start(s, 0, oo(e.durationMs));
	}
	onMessage = (e) => {
		try {
			let t = e.data.message;
			e.data.timestampMs && e.data.timestampMs,
				void 0 != e.data.index && e.data.index,
				void 0 != e.data.url && e.data.url,
				"worker/packet" === t
					? this.onPacket(e.data)
					: "worker/error" === t
					? this.onError(e.data)
					: e.data.url === this.state.url &&
					  ("worker/load" === t
							? this.onLoad(e.data)
							: "worker/loaded" === t
							? this.onLoaded(e.data)
							: "worker/opened" === t
							? this.onOpened(e.data)
							: "worker/empty" === t && this.onEmpty(e.data));
		} catch (n) {
			console.error(n), this.callback.onError(n);
		}
	};
	play() {
		this.resumeContext(),
			(this.marginIssueReported = !1),
			this.shouldUseWorker
				? this.worker.postMessage([this.startGenerateSoundPackets()])
				: this.startWithoutSound(),
			(this.state = { ...this.state, isPlaying: !0 }),
			this.markIsPlaying();
	}
	getWorkerPosition() {
		let { cursor: e, loopStart: t, loopEnd: n } = this.state;
		return (
			this.state.speed < 100 &&
				this.correctTimestampFor50Timeline &&
				((e = this.correctTimestampFor50Timeline(e)),
				(t = this.correctTimestampFor50Timeline(t)),
				(n = this.correctTimestampFor50Timeline(n))),
			{ cursor: e, loopStart: t, loopEnd: n }
		);
	}
	pause() {
		return (
			this.turnOffSound(),
			this.state.isPlaying &&
				((this.state = { ...this.state, isPlaying: !1 }),
				this.workerStarted &&
					((this.workerStarted = !1),
					this.worker.postMessage([
						{ message: "worker/stopGenerate" },
						{ message: "worker/seek", position: this.getWorkerPosition() },
					]))),
			this.markIsPlaying(),
			this.state.cursor
		);
	}
	turnOffSound() {
		if (this.state.isPlaying) {
			let e = this.gain;
			if (e) {
				for (let t of (e.gain.setValueAtTime(1, this.context.currentTime),
				e.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + 0.02),
				(this.gain = null),
				this.sources)) {
					var n;
					t &&
						setTimeout(
							((n = t),
							() => {
								try {
									n.stop();
								} catch (e) {}
							}),
							50
						);
				}
				this.sources.fill(null);
			}
			(this.state = { ...this.state, cursor: this.getCursor() }),
				(this.startedTime = null),
				(this.startedContextTime = null),
				this.hack && this.hack.pause();
		}
	}
	seek(e, t, n) {
		this.turnOffSound(),
			(this.state = { ...this.state, cursor: e, loopStart: t, loopEnd: n }),
			this.shouldUseWorker
				? this.worker.postMessage([
						{ message: "worker/seek", position: this.getWorkerPosition() },
						this.state.isPlaying && this.startGenerateSoundPackets(),
				  ])
				: this.state.isPlaying && this.startWithoutSound();
	}
	speed(e) {
		return (
			this.turnOffSound(),
			(this.state = { ...this.state, speed: e }),
			this.shouldUseWorker
				? this.worker.postMessage([
						{ message: "worker/setSpeed", speed: e },
						{ message: "worker/seek", position: this.getWorkerPosition() },
						this.state.isPlaying && this.startGenerateSoundPackets(),
				  ])
				: this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
		);
	}
	type(e) {
		this.state = { ...this.state, type: e };
	}
	pitch(e) {
		return (
			this.turnOffSound(),
			(this.state = { ...this.state, pitchShift: e }),
			this.shouldUseWorker
				? this.worker.postMessage([
						{ message: "worker/setPitch", pitchShift: e },
						{ message: "worker/seek", position: this.getWorkerPosition() },
						this.state.isPlaying && this.startGenerateSoundPackets(),
				  ])
				: this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
		);
	}
	startWithoutSound() {
		this.updateCountIn(),
			(this.startedTime = os.now() / 1e3),
			(this.startedContextTime = this.startedTime);
	}
	updateCountIn() {
		let e = null;
		if (((this.countinDuration = 0), this.state.isCountIn)) {
			let t;
			e = this.findBpmAndBeatByTimestamp(this.state.cursor);
			let n = ((60 / e.bpm) * 4) / e.signature[1];
			this.countinDuration =
				Math.floor(((n * e.signature[0] * 100) / this.state.speed) * 48e3) /
				48e3;
			let i = this.generateCountInTimeline(),
				r = this.state.cursor;
			for (let a = 0; a < i.length; a++)
				if (Math.floor(i[a].timestamp) >= Math.floor(r)) {
					t = i[a];
					break;
				}
			let s = t ? ((t.timestamp - r) * (100 / this.state.speed)) / 1e3 : 0;
			(this.countinDuration -= s),
				(e.correctedDurration = this.countinDuration);
		}
		return e;
	}
	updateMetronome() {
		return this.state.isMetronome ? this.generateMetronomeTimeline() : null;
	}
	startGenerateSoundPackets() {
		this.hack && this.hack.play(),
			(this.token = or()),
			(this.workerTs = os.now()),
			(this.workerStarted = !0);
		let e = "mute" === this.state.type && this.hasSingleTrack,
			t = this.updateMetronome(),
			n = this.state.metronomeType,
			i = this.updateCountIn();
		return {
			message: "worker/startGenerate",
			token: this.token,
			mute: e,
			countIn: i,
			metronomeTimeline: t,
			metronomeType: n,
		};
	}
	reset(e, t, n, i, r, a) {
		this.turnOffSound();
		let s = this.state.isPlaying;
		(this.state = {
			...this.state,
			cursor: e.cursor,
			loopStart: e.loopStart,
			loopEnd: e.loopEnd,
			speed: t,
			pitchShift: n,
			isPlaying: !1,
			isCountIn: i,
			isMetronome: r,
			metronomeType: a,
		}),
			(this.token = or()),
			this.shouldUseWorker &&
				this.worker.postMessage([
					s && { message: "worker/stopGenerate" },
					{ message: "worker/reset" },
					{ message: "worker/setSpeed", speed: t },
					{ message: "worker/setPitch", pitchShift: n },
					{ message: "worker/seek", position: this.getWorkerPosition() },
				]),
			this.markIsPlaying();
	}
	setBuffer(e, t) {
		(this.state.url = t),
			this.worker.postMessage([
				{
					message: "worker/setBuffer",
					buffer0: e.getChannelData(0),
					buffer1: e.numberOfChannels > 1 ? e.getChannelData(1) : null,
					sampleRate: e.sampleRate,
					url: t,
				},
				{ message: "worker/seek", position: this.getWorkerPosition() },
				this.state.isPlaying && this.startGenerateSoundPackets(),
			]);
	}
	open(e, t) {
		(this.state.url = t),
			this.worker.postMessage([
				{ message: "worker/open", url: t, version: e },
				{ message: "worker/seek", position: this.getWorkerPosition() },
			]);
	}
	clearBuffer() {
		this.shouldUseWorker &&
			this.worker.postMessage([{ message: "worker/clearBuffer" }]);
	}
	setCountin(e) {
		this.state = { ...this.state, isCountIn: e };
	}
	setMetronome(e, t) {
		this.state = { ...this.state, isMetronome: e, metronomeType: t };
	}
	getCursor() {
		let { state: e } = this;
		if (e.isPlaying && null !== this.startedTime) {
			let t = 1e3 * Math.max(this.passed(), 0),
				n = (t > 0 ? t * (e.speed / 100) : 0) + e.cursor;
			return (
				e.loopEnd &&
					n > e.loopEnd &&
					(n = e.loopStart + ((n - e.loopStart) % (e.loopEnd - e.loopStart))),
				n
			);
		}
		return e.cursor;
	}
	getActualPosition() {
		return {
			cursor: this.getCursor(),
			loopStart: this.state.loopStart,
			loopEnd: this.state.loopEnd,
		};
	}
	get isPlaying() {
		return this.state.isPlaying;
	}
	markIsPlaying() {
		let e = document.getElementById("root");
		e && (e.dataset.playing = this.isPlaying ? "on" : "off");
	}
	passed() {
		let { context: e, startedTime: t, countinDuration: n } = this;
		return null === t
			? 0
			: this.shouldUseWorker
			? s6(e) - this.startedContextTime - n - oe(e)
			: os.now() / 1e3 - t - n;
	}
	isPositionChanged() {
		return this.state.isPlaying && this.passed() > 0;
	}
}
let od = 100;
class op {
	constructor(e) {
		(this.isLoaded = !1), (this.isOpened = !0), (this.callback = e);
	}
	load(e, t, n) {
		(this.player = e),
			(this.cursorOffset = t),
			(this.isLoaded = !0),
			(this.firstTimePlay = !0),
			(this.cursor = this._toSecondsPlusOffset(n)),
			(this.loopStart = 0),
			(this.loopEnd = 0),
			this.callback.onUpdate(),
			this.player.setPlaybackQuality("hd1080");
	}
	play() {
		if (this.getReady()) {
			if ((this.loop(), this.firstTimePlay)) {
				(this.firstTimePlay = !1), this.player.seekTo(this.cursor);
				return;
			}
			this.player.playVideo();
		}
	}
	pause() {
		this.getReady() && this.player.pauseVideo();
	}
	seek(e, t, n) {
		this.isLoaded &&
			(0 === this.loopEnd && n && this.pause(),
			0 === n && (this.animationPlayId = null),
			(this.cursor = this._toSecondsPlusOffset(e)),
			(this.loopStart = t && this._toSecondsPlusOffset(t)),
			(this.loopEnd = n && this._toSecondsPlusOffset(n)),
			0 !== this._getCurrentTime() && this.player.seekTo(this.cursor));
	}
	speed(e) {
		this.isLoaded && this.player.setPlaybackRate(e / 100);
	}
	loop() {
		if (0 === this.loopEnd) return;
		let e = () => {
			this.animationPlayId &&
				(this._getCurrentTime() >= this.loopEnd && this.callback.onLoopRepeat(),
				requestAnimationFrame(e));
		};
		this.animationPlayId = requestAnimationFrame(e);
	}
	handleOpenClose = (e) => {
		this.pause(),
			this.callback.onPause(),
			(this.isOpened = e || !this.isOpened);
	};
	getReady() {
		return this.isLoaded && this.isOpened;
	}
	destroy() {
		this.isLoaded &&
			(this._resetToDefault(), this.player.f && this.player.destroy());
	}
	getPlayerState() {
		return this.player.getPlayerState();
	}
	setOffset(e) {
		this.cursorOffset = +e;
	}
	_getCurrentTime() {
		return this.player.getCurrentTime();
	}
	_toSecondsPlusOffset(e) {
		return e / 1e3 + this.cursorOffset;
	}
	_resetToDefault() {
		(this.isLoaded = !1),
			(this.firstTimePlay = !0),
			(this.cursor = this._toSecondsPlusOffset(0)),
			(this.loopStart = 0),
			(this.loopEnd = 0),
			(this.animationPlayId = null),
			this.callback.onUpdate();
	}
}
let oh = 12,
	of = 3,
	og = 21,
	om = 100,
	oy = 25,
	ov = 175;
function ob(e) {
	return (Math.round((e / 100) * 12) / 12) * 100;
}
function ow(e, t) {
	let n = Math.round((t.bpm * e) / 12),
		i = Math.round((100 * e) / 12);
	return { tempo: { ...t, bpm: n }, speed: i, position: oT(i) };
}
function oS(e, t) {
	return ow(Math.round((e / 100) * 12), t);
}
function oC(e, t) {
	return { ...t, bpm: Math.round((t.bpm * e) / 100) };
}
function ok(e, t, n, i) {
	let r = Math.round((e / 100) * 12);
	return r >= 21 ? { tempo: t, speed: e, position: n } : ow(r + 1, i);
}
function ox(e, t, n, i) {
	let r = Math.round((e / 100) * 12);
	return r <= 3 ? { tempo: t, speed: e, position: n } : ow(r - 1, i);
}
function oE(e, t, n, i, r) {
	let a = t.bpm + r,
		s = +((100 * a) / i.bpm).toFixed(2),
		o = Math.round(s);
	return o < 25 || o > 175
		? { tempo: t, speed: e, position: n }
		: { tempo: { ...i, bpm: a }, speed: s, position: oT(s) };
}
function oT(e) {
	let t = ob(e);
	return +(((t - 25) * 100) / 150).toFixed(6);
}
function o_(e) {
	return Math.round((150 * e) / 100 + 25);
}
let oP = (e) => (e ? (t, n) => aS(t, e, n.bpm) : (e, t) => Z(e, t)),
	oL = (e) => {
		let t = [],
			n = 0,
			i = ro,
			r = oP(e.tpqn);
		for (let a of e.progression) {
			let s = e.measures[a - 1],
				o = Y(s.signature),
				l = s.duration / o;
			i = rh(s).tempoLayouts.length > 0 ? rh(s).tempoLayouts[0].tempo : i;
			for (let c = 0; c < o; c++) {
				let u = {
					accented: 0 === c,
					timestamp: parseFloat(n.toFixed(4)),
					signature: s.signature,
					bpm: i.bpm,
				};
				t.push(u), (n += r(l, i));
			}
		}
		return t;
	},
	oA = (e, t) => {
		let n = [],
			i = 0,
			r = ro,
			a = oP(e.tpqn);
		for (let s of e.progression) {
			let o = e.measures[s - 1],
				l = Y(o.signature),
				c = K(o.signature),
				u = o.duration,
				d = 8 !== c ? 4 * l : l;
			8 !== c ? (u /= 4 * l) : (u /= l);
			let p = rh(o).tempoLayouts;
			r = p && p.length > 0 ? p[0].tempo : r;
			for (let h = 0; h < d; h++) {
				let f;
				if (8 === c) f = (h % 3) + 1;
				else if ((h + 1) % 2 == 0) {
					if (16 !== t) {
						i += a(u, r);
						continue;
					}
					f = "16th";
				} else if ((h + 1) % 4 == 1) f = Math.ceil((h + 1) / 4);
				else {
					if (4 === t) {
						i += a(u, r);
						continue;
					}
					f = "8th";
				}
				let g = {
					division: 8 === c ? 4 : t,
					beatNum: f,
					timestamp: parseFloat(i.toFixed(4)),
					signature: o.signature,
					bpm: r.bpm,
				};
				n.push(g), (i += a(u, r));
			}
		}
		return n;
	},
	oN = (e) => {
		let t = e.measures.find((e) => {
			let t = Y(e.signature),
				n = K(e.signature);
			return (4 !== n && 8 !== n && 2 !== n) || ((4 === n || 2 === n) && t > 8);
		});
		return !t;
	};
function oI(e) {
	var t;
	let { experiments: n } = e.get(),
		i =
			(null === (t = n.play_along) || void 0 === t ? void 0 : t.segment) ===
			"on",
		r = new ou(
			{
				onError: function (t) {
					let n =
							arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						i = t.message || t;
					console.error("error in audio player initialization: ", i),
						e.dispatch("player/error", { error: i, isNetworkError: n });
				},
				onFreeze: () => e.dispatch("player/togglePlay", !1),
				onOpened: () => e.dispatch("player/opened"),
				onLoad: () => e.dispatch("player/load"),
				onLoaded: () => e.dispatch("player/loaded"),
				onEmpty: () => e.dispatch("player/empty"),
			},
			i
		),
		a = !!(null !== r.context && window.Worker);
	e.dispatch("player/init", { audio: r, playbackAvailable: a });
}
function oM(e) {
	var t;
	let n;
	let { experiments: i } = e.get(),
		r =
			(null === (t = i.play_along) || void 0 === t ? void 0 : t.segment) ===
			"on";
	(n = r
		? new op({
				onUpdate: () => e.dispatch("player/updateVideo"),
				onError: () => e.dispatch("player/errorVideo"),
				onPause() {
					let { cursor: t, loopStart: n, loopEnd: i } = e.state.player.position;
					e.dispatch("player/togglePlay", !1),
						e.dispatch("player/moveCursor", {
							cursor: t,
							loopStart: n,
							loopEnd: i,
						});
				},
				onLoopRepeat() {
					let { loopStart: t, loopEnd: n } = e.state.player.position;
					e.dispatch("player/moveCursor", {
						cursor: t,
						loopStart: t,
						loopEnd: n,
					});
				},
		  })
		: {
				isLoaded: !1,
				getReady: () => !1,
				handleOpenClose: () => !1,
				seek: () => !1,
				pause: () => !1,
				play: () => !1,
				speed: () => !1,
		  }),
		e.dispatch("player/initVideo", { video: n });
}
async function oB(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
	e("player/togglePlay", n);
}
async function oD(e) {
	if (true) return import("./playerPlus.7523f5e1.js");
}
async function oz(e) {
	let t = e.get();
	if (t.demo.enabled && t.meta.songId === M)
		return import("./playerDemo.264fe6c5.js");
}
async function oO(e) {
	try {
		let t = await oD(e);
		if (t && t.demo && !t.demo()) return t.plusToggleLoop(e);
		if ((t = await oz(e))) return t.demoToggleLoop(e);
	} catch (n) {
		console.error(n);
	}
}
function oR(e) {
	oF(e, 1);
}
function o$(e) {
	oF(e, -1);
}
function oF(e, t) {
	let { player: n } = e.get(),
		i = oC(n.speed, n.tempo),
		r = i.bpm + t,
		a = +((100 * r) / n.tempo.bpm).toFixed(2),
		s = Math.round(a);
	s < 25 || s > 175 || oH(e, a);
}
async function oH(e, t) {
	try {
		let n = await oD(e);
		if (n && n.demo && !n.demo()) return n.plusChangeSpeed(e, t);
		if ((n = await oz(e))) return n.demoChangeSpeed(e, t);
	} catch (i) {
		console.error(i);
	}
}
async function oV(e, t) {
	try {
		let n = await oD(e);
		if (n && n.demo && !n.demo()) return n.plusChangePitch(e, t);
		if ((n = await oz(e))) return n.demoChangePitch(e, t);
	} catch (i) {
		console.error(i);
	}
}
function oj(e, t) {
	let { enabled: n = !1 } = t;
	e("player/suspend", "fullscreen"),
		e("screen/toggleFullscreen", { enabled: n }),
		e("player/resume", "fullscreen");
}
async function oU(e, t) {
	try {
		let n = await oD(e);
		if (n && n.demo && !n.demo()) return n.plusChangeType(e, t);
		if ((n = await oz(e))) return n.demoChangeType(e, t);
	} catch (i) {
		console.error(i);
	}
}
async function oG(e) {
	try {
		let t = await import("./playerFree.b196f2b5.js");
		return t.plusRestoreDefaults(e);
	} catch (n) {
		console.error(n);
	}
}
async function oW(e) {
	e("player/toggleCountIn");
}
function oq(e, t) {
	return (
		e === t ||
		(e.cursor === t.cursor &&
			e.loopStart === t.loopStart &&
			e.loopEnd === t.loopEnd)
	);
}
let oX = 100,
	oY = "focus",
	oK = ty.MASTER,
	oJ = 0,
	oZ = (e) => ({
		player: { ...e.player, isAudioFailed: !1, isAudioNetworkFailed: !1 },
	}),
	oQ = (e, t) => {
		let n = null != t ? t : !e.player.shouldPlay;
		s1.setIsActive(n);
		let i = { ...e.player, shouldPlay: n },
			{ audio: r, canPlay: a } = e.player;
		return (
			n && r.resumeContext(),
			a && n
				? r.isPlaying || r.play()
				: r.isPlaying && (r.pause(), (i.position = r.getActualPosition())),
			{ player: i }
		);
	},
	o1 = (e) => {
		e.on("meta/load:processing", (e, t) => {
			var n;
			let { songHasChanged: i } = t;
			if (i) {
				let r = { cursor: 0, loopEnd: 0, loopStart: 0 },
					a = e.player.isCountin,
					s = e.player.isMetronome,
					o = e.player.metronomeType;
				return (
					e.player.audio && e.player.audio.reset(r, 100, 0, a, s, o),
					{
						player: {
							...e.player,
							shouldPlay: !1,
							isCountin: a,
							position: r,
							type: "focus",
							version: oK,
							pitchShift: 0,
							speed: 100,
							isAudioFailed: !1,
							isAudioNetworkFailed: !1,
						},
					}
				);
			}
			return null === (n = e.player.audio) || void 0 === n || n.pause(), oZ(e);
		}),
			e.on("chords/load:processing", (e, t) => {
				var n;
				return (
					null === (n = e.player.audio) || void 0 === n || n.pause(), oZ(e)
				);
			});
		let t = (e, t) => {
			let { current: n } = t;
			e.player.audio &&
				(e.player.audio.hasSingleTrack = !n.tracks || 1 === n.tracks.length);
		};
		function n(e, t) {
			let { audio: n, shouldPlay: i } = e.player,
				r = e.player.locks;
			if ((r.includes(t) || r.push(t), e.player.canPlay)) {
				let a = { ...e.player, canPlay: !1 };
				return (
					i && n.isPlaying && (n.pause(), (a.position = n.getActualPosition())),
					{ player: a }
				);
			}
		}
		function i(e, t) {
			let { audio: n, shouldPlay: i, locks: r } = e.player;
			for (let a of (Array.isArray(t) || (t = [t]), t)) {
				let s = r.findIndex((e) => e === a);
				-1 !== s && r.splice(s, 1);
			}
			let o = !r.length;
			if (!e.player.canPlay && o)
				return (
					i && !n.isPlaying && n.play(), { player: { ...e.player, canPlay: o } }
				);
		}
		e.on("meta/load:done", t),
			e.on("part/load:inflated", (e, t) => {
				let { player: n } = e,
					{ current: i } = t;
				if (n.audio) {
					(n.audio.correctTimestampFor50Timeline = (e) => aL(i, e)),
						(n.audio.findBpmAndBeatByTimestamp = (e) => aI(i, e)),
						(n.audio.generateCountInTimeline = () => oL(i)),
						(n.audio.generateMetronomeTimeline = () => oA(i, 4));
					let r = oN(i),
						a = n.metronomeType;
					"voice" !== n.metronomeType ||
						r ||
						((a = "regular"), n.audio.setMetronome(n.isMetronome, "regular"));
					let s = aB(i, n.position.cursor);
					return {
						player: {
							...n,
							tempo: s,
							voiceMetronomeAvailable: r,
							metronomeType: a,
						},
					};
				}
			}),
			e.on("player/open", (e, t) => {
				var n;
				let { url: i, version: r } = t;
				return (
					null === (n = e.player.audio) || void 0 === n || n.open(r, i),
					{
						player: {
							...e.player,
							version: r,
							isAudioFailed: !1,
							isAudioNetworkFailed: !1,
						},
					}
				);
			}),
			e.on("meta/load:processing", (e) => n(e, "audio")),
			e.on("player/open", (e) => n(e, "audio")),
			e.on("player/load", (e) => n(e, "audio")),
			e.on("player/empty", (e) => n(e, "audio")),
			e.on("player/loaded", (e) => i(e, "audio")),
			e.on("meta/load:processing", (e) => n(e, "model")),
			e.on("part/load:done", (e) => i(e, "model")),
			e.on("player/load", oZ),
			e.on("player/loaded", oZ),
			e.on("player/error", (e, t) => {
				let { isNetworkError: n } = t;
				return {
					player: { ...e.player, isAudioFailed: !0, isAudioNetworkFailed: n },
				};
			}),
			e.on("player/error", (e) => i(e, ["playerOpen", "playerLoad"])),
			e.on("player/init", (e, t) => {
				let { player: n } = e,
					{ audio: i, playbackAvailable: r } = t;
				return (
					i.setMetronome(n.isMetronome, "regular"),
					{
						player: {
							...n,
							audio: i,
							playbackAvailable: r,
							metronomeType: "regular",
						},
					}
				);
			}),
			e.on("player/initVideo", (e, t) => {
				let { video: n } = t;
				return { player: { ...e.player, video: n } };
			}),
			e.on(
				"player/updateVideo",
				(e) => (
					e.player.audio.setCountin(!1),
					{ player: { ...e.player, isCountin: !1 } }
				)
			),
			e.on("player/moveCursor", (e, t) => {
				let { part: n, player: i } = e;
				i.audio.seek(t.cursor, t.loopStart, t.loopEnd),
					i.video.seek(t.cursor, t.loopStart, t.loopEnd);
				let r = n.current ? aB(n.current, t.cursor) : i.tempo;
				return { player: { ...i, position: t, tempo: r } };
			}),
			e.on("player/startPlay", (e) => oQ(e, !0)),
			e.on("player/stopPlay", (e) => oQ(e, !1)),
			e.on("player/togglePlay", oQ),
			e.on("player/changeLoop", (e, t) => {
				let r = t ? n : i,
					a = r(e, "loop") || e;
				return { player: { ...a.player, isLoopChanging: t } };
			}),
			e.on("player/toggleLoop", (e) => {
				let t = e.player.audio,
					n = e.player.video,
					i = 0 !== e.player.position.loopEnd,
					r = t.getCursor(),
					a = {
						...e.player,
						position: { cursor: r, loopStart: 0, loopEnd: 0 },
					};
				if (!i && e.part.current) {
					let s = aM(e.part.current, r);
					(a.position.loopStart = s.loopStart),
						(a.position.loopEnd = s.loopEnd);
				}
				return (
					t.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
					n.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
					{ player: a }
				);
			}),
			e.on("player/changeSpeed", (e, t) => {
				let { speed: n } = t,
					{ audio: i, video: r } = e.player;
				i.speed(n), r.speed(n);
				let a = { ...e.player, speed: n };
				return { player: a };
			}),
			e.on("player/changePitch", (e, t) => {
				let { audio: n } = e.player;
				n.pitch(t);
				let i = { ...e.player, pitchShift: t };
				return { player: i };
			}),
			e.on("player/changeType", (e, t) => {
				let { type: n } = t,
					{ audio: i } = e.player;
				i.type(n);
				let r = { ...e.player, type: n };
				return { player: r };
			}),
			e.on("player/suspend", n),
			e.on("player/resume", i),
			e.on("player/tempoApply", (e, t) => ({
				player: { ...e.player, tempo: t },
			})),
			e.on("player/toggleCountIn", (e) => {
				let t = { ...e.player, isCountin: !e.player.isCountin };
				return t.audio.setCountin(t.isCountin), { player: t };
			}),
			e.on("player/toggleMetronome:init", () => {
				e.dispatch("player/suspend", "isMetronome"),
					e.dispatch("player/toggleMetronome"),
					e.dispatch("player/resume", "isMetronome");
			}),
			e.on("player/toggleMetronome", (e) => {
				let t = { ...e.player, isMetronome: !e.player.isMetronome };
				return (
					t.audio.setMetronome(t.isMetronome, t.metronomeType), { player: t }
				);
			}),
			e.on("player/changeMetronome:init", (t, n) => {
				let { player: i } = t;
				n !== i.metronomeType &&
					(e.dispatch("player/suspend", "metronomeType"),
					e.dispatch("player/changeMetronome", n),
					e.dispatch("player/resume", "metronomeType"));
			}),
			e.on("player/changeMetronome", (e, t) => {
				let { player: n } = e;
				return (
					n.audio.setMetronome(n.isMetronome, t),
					{ player: { ...n, metronomeType: t } }
				);
			}),
			e.on("user/signOut", () => {
				oG(e);
			}),
			e.on("editor/sound:toggle", (e, t) => {
				let { version: n } = t;
				return { player: { ...e.player, forcedVersion: n } };
			}),
			e.on("route/change", (e, t) => {
				let { route: r } = t;
				return (
					e.route.isPanel && e.player.video.pause(),
					r.isPanel ? n(e, "isPanel") : i(e, "isPanel")
				);
			});
	};
function o0(e) {
	return "android" === e.name.toLowerCase();
}
function o2(e) {
	return "ios" === e.name.toLowerCase();
}
function o5(e) {
	return (
		(!!e.isTablet && "ios" === e.os.name.toLowerCase()) ||
		(e.isDesktop && "Mac OS X" === e.os.name && "ontouchstart" in window)
	);
}
let o4 = (e) => {},
	o3 = (e) => ({
		isSmall: "small" === e,
		isMedium: "medium" === e,
		isLarge: "large" === e,
		isWide: "wide" === e,
	});
function o8(e, t) {
	return {
		screen: { ...e.screen, fullscreen: t || !1, ...o3(e.screen.screen) },
	};
}
let o6 = (e) => {
		e.on("screen/resize", (e, t) => {
			let { screen: n, viewport: i } = t;
			return { screen: { ...e.screen, screen: n, viewport: i, ...o3(n) } };
		}),
			e.on("screen/toggleFullscreen", (e, t) => {
				let { enabled: n } = t;
				return o8(e, n);
			}),
			e.on("route/change", (e) => o8(e));
	},
	o9 = (e) => {
		e.on("consent/view", (e, t) => {
			let { suite: n, view: i, options: r } = t;
			return { consent: { suite: n, view: i, options: r } };
		});
	};
function o7(e) {
	let t = Object.keys(e)
		.filter((t) => e[t])
		.map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
		.join("&");
	return t.length ? `?${t}` : "";
}
let le = (e) => (
	e.sort((e, t) => {
		let n = e.artist.localeCompare(t.artist);
		return 0 === n ? e.title.localeCompare(t.title) : n;
	}),
	e
);
function lt(e) {
	try {
		let t = e.tracks;
		if (!t || !t.length) return;
		let n = t.filter((e) => er(e.instrumentId) && e.difficulty),
			i = -1;
		Number.isInteger(e.defaultTrack) && er(t[e.defaultTrack].instrumentId)
			? (e.difficulty = t[e.defaultTrack].difficulty)
			: (n.forEach((e, t) => {
					(-1 === i || (e.views || 0) > (n[i].views || 0)) && (i = t);
			  }),
			  -1 !== i && (e.difficulty = n[i].difficulty));
	} catch (r) {
		console.error(r);
	}
}
function ln(e) {
	return (
		e.forEach(lt),
		e.forEach((e) => {
			e.title = np(e.title);
		}),
		e
	);
}
function li(e) {
	switch (e) {
		case t2:
			return "2";
		case t0:
			return "1";
		default:
			return "0";
	}
}
function lr(e, t, n, i) {
	let r = !t.instrument || t.instrument === tK,
		a = (t.instrument && t.instrument.toLowerCase()) || void 0,
		s = t.tuning || void 0,
		o = (r && t.difficulty && li(t.difficulty)) || void 0,
		l = { size: n.toString() };
	return (
		i && (l.from = i.toString()),
		e && (l.pattern = e),
		a && (l.inst = a),
		o && (l.difficulty = o),
		s && (l.tuning = s),
		o7(l)
	);
}
async function la(e, t, n, i, r, a) {
	let s = lr(t, n, r, a),
		o = await fetch(`${e}${s}`, { signal: i, credentials: "omit" });
	if (i && i.aborted) return [];
	sy(o);
	let l = await o.json(),
		c = ln(l);
	return i && i.aborted ? [] : c;
}
function ls(e, t, n) {
	let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
		r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
		a = e5("/api/songs");
	return la(a, e, t, n, i, r);
}
async function lo(e, t) {
	let n = `/api/artist/${e}`,
		i = await tn(() => e5(n), "artist", t);
	return t.aborted || !i ? null : i;
}
function ll(e, t, n, i) {
	let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
		a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
		s = e5(`/api/artist/${e}/songs`);
	return la(s, t, n, i, r, a);
}
async function lc(e) {
	let t = e5("/api/favorites"),
		n = await fetch(t, { credentials: "include" });
	sy(n);
	let i = await n.json();
	return ln(le(i));
}
async function lu(e) {
	let t = e5(`/api/favorites/${e}`),
		n = await fetch(t, { method: "put", credentials: "include" });
	sy(n);
}
async function ld(e) {
	let t = e5(`/api/favorites/${e}`),
		n = await fetch(t, { method: "delete", credentials: "include" });
	sy(n);
}
function lp(e) {
	let t = F(document.location.search.substring(1));
	e.length ? (t.pattern = e) : delete t.pattern,
		history.replaceState(
			null,
			"",
			`${document.location.pathname || "/"}${o7(t)}`
		);
}
function lh(e) {
	let t = F(document.location.search.substring(1));
	e.length && e !== tY ? (t.inst = lm(e)) : delete t.inst,
		history.replaceState(
			null,
			"",
			`${document.location.pathname || "/"}${o7(t)}`
		);
}
function lf(e, t, n) {
	let i = n;
	return (
		t.length && t !== tY && (i = { pattern: n.pattern, inst: lm(t) }),
		`${e}${o7(i)}`
	);
}
function lg(e) {
	switch (e) {
		case "guitar":
			return tK;
		case "drum":
			return tZ;
		case "bass":
			return tJ;
		default:
			return tY;
	}
}
function lm(e) {
	switch (e) {
		case tK:
			return "guitar";
		case tZ:
			return "drum";
		case tJ:
			return "bass";
		default:
			return "";
	}
}
function ly(e, t) {
	return o7({
		pattern: e || void 0,
		inst: t && t.instrument !== tY && t.instrument ? lm(t.instrument) : void 0,
	});
}
function lv(e, t) {
	try {
		let n = document.getElementById(t);
		if (!n) return;
		let i = n.getBoundingClientRect(),
			{ marginTop: r, marginBottom: a } = getComputedStyle(n),
			s = i.height + parseInt(r, 10) + parseInt(a, 10);
		if (i.top + s < 0) {
			let o = document.getElementById(e);
			o && "function" == typeof o.scroll && o.scroll(0, s);
		}
	} catch (l) {
		console.error(l);
	}
}
let lb = 1e3,
	lw = (e) => {
		async function t(t, n) {
			if (n && !t.artist.songs.hasMore) return;
			let i = t.artist.id,
				r = t.artist.pattern,
				a = t.artist.filters,
				s = 0,
				o = null;
			n &&
				t.artist.songs.pattern === t.artist.pattern &&
				nB(t.artist.songs.filters, t.artist.filters) &&
				(s = (o = t.artist.songs.list).length);
			let l = new tI();
			try {
				e.dispatch("artist/load:processing", {
					id: i,
					pattern: r,
					filters: a,
					ac: l,
				});
				let c = await ll(i, r, nA(a), l.signal, 50, s);
				if (l.signal.aborted) return;
				let u = t.artist.defaultInstrument;
				n_(a) || (c = nM(c, u));
				let d = null;
				if (!t.artist.artists[i]) {
					if (c.length) d = { artistId: c[0].artistId, name: c[0].artist };
					else if (((d = await lo(i, l.signal)), l.signal.aborted)) return;
				}
				let p = (o ? o.length : 0) + c.length,
					h = 50 === c.length && p < 1e3;
				e.dispatch("artist/load:done", {
					id: i,
					songs: o ? [...o, ...c] : c,
					hasMore: h,
					artist: d,
					pattern: r,
					filters: a,
					defaultInstrument: u,
				}),
					A &&
						!o &&
						requestAnimationFrame(() => {
							lv("artist-wrap", "top");
						});
			} catch (f) {
				if (l.signal.aborted) return;
				console.error(f),
					e.dispatch("artist/load:error", {
						id: i,
						error: f,
						pattern: r,
						filters: a,
					});
			}
		}
		let n = (e) => t(e, !1);
		e.on("artist/load:processing", (e, t) => {
			let { id: n, pattern: i, filters: r, ac: a } = t,
				s = e.artist.loading;
			s && s.ac.abort();
			let o = e.artist.songs;
			return (
				o.id !== n &&
					(o = {
						id: n,
						list: [],
						defaultInstrument: 24,
						hasMore: !0,
						pattern: i,
						filters: r,
					}),
				{
					artist: {
						...e.artist,
						songs: o,
						loading: { id: n, filters: r, pattern: i, ac: a },
					},
				}
			);
		}),
			e.on("artist/load:done", (e, t) => {
				let {
						id: n,
						songs: i,
						hasMore: r,
						artist: a,
						pattern: s,
						filters: o,
						defaultInstrument: l,
					} = t,
					c = e.artist.loading;
				if (!c || c.id !== n || !nB(c.filters, o) || c.pattern !== s) return;
				let u = e.artist.artists;
				return (
					a && (u = { ...u, [a.artistId]: a.name }),
					{
						artist: {
							...e.artist,
							songs: {
								id: n,
								list: i,
								defaultInstrument: l,
								hasMore: r,
								pattern: s,
								filters: o,
							},
							artists: u,
							loading: null,
						},
					}
				);
			}),
			e.on("artist/load:error", (e, t) => {
				let { id: n, error: i, pattern: r, filters: a } = t,
					s = e.artist.loading;
				if (s && s.id === n && nB(s.filters, a) && s.pattern === r)
					return { artist: { ...e.artist, loading: null } };
			}),
			e.on("meta/load:done", (e, t) => {
				let { current: n } = t;
				return {
					artist: {
						...e.artist,
						artists: { ...e.artist.artists, [n.artistId]: n.artist },
					},
				};
			}),
			e.on("chords/load:done", (e, t) => {
				let { current: n } = t;
				return {
					artist: {
						...e.artist,
						artists: { ...e.artist.artists, [n.artistId]: n.artist },
					},
				};
			}),
			e.on("artist/filter", (e, t) => {
				let { id: n, pattern: i, filters: r } = t;
				return { artist: { ...e.artist, pattern: i, filters: r, id: n } };
			}),
			e.on("artist/filter", n),
			e.on("songs/default", (e, t) => {
				let { instrumentId: n } = t,
					i = nI(n),
					r = e.artist.songs.list;
				return (
					n_(e.artist.songs.filters) ||
						e.artist.songs.defaultInstrument === i ||
						(r = nM(e.artist.songs.list, i)),
					{
						artist: {
							...e.artist,
							songs: { ...e.artist.songs, list: r, defaultInstrument: i },
							defaultInstrument: i,
						},
					}
				);
			}),
			e.on("artist/more", (e) => t(e, !0)),
			e.on("artist/filter/pattern", (e, t) => ({
				artist: { ...e.artist, pattern: t },
			})),
			e.on("artist/filter/pattern", n),
			e.on("artist/filter/difficulty", (e, t) => ({
				artist: {
					...e.artist,
					filters: { ...e.artist.filters, difficulty: t },
				},
			})),
			e.on("artist/filter/difficulty", n),
			e.on("artist/filter/instrument", (e, t) => ({
				artist: {
					...e.artist,
					filters: { ...e.artist.filters, instrument: t },
				},
			})),
			e.on("artist/filter/instrument", n),
			e.on("artist/filter/tuning", (e, t) => {
				let { instrument: n, tuning: i } = t;
				return { artist: { ...e.artist, filters: nx(e.artist.filters, n, i) } };
			}),
			e.on("artist/filter/tuning", n),
			e.on("artist/filter/reset", (e) => ({
				artist: { ...e.artist, filters: nc },
			})),
			e.on("artist/filter/reset", n),
			e.on("route/change", (t, n) => {
				let { route: i, query: r } = n;
				if ((null == i ? void 0 : i.page) === "artist") {
					let a = +i.artistId,
						s = (null == r ? void 0 : r.pattern) || "",
						o = {
							instrument: (null == r ? void 0 : r.inst) ? lg(r.inst) : tY,
							tunings: t.artist.filters.tunings,
							difficulty: t.artist.filters.difficulty,
						};
					(t.artist.songs.list.length &&
						t.artist.songs.id === a &&
						t.artist.songs.pattern === s &&
						nB(t.artist.songs.filters, o)) ||
						e.dispatch("artist/filter", { id: a, pattern: s, filters: o });
				}
			});
	};
var lS = c();
let lC = h;
function lk() {
	for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	let i = u(lS),
		r = d({});
	return (
		h(
			() =>
				i.on("@changed", (e, n) => {
					t.some((e) => e in n) && r[1]({});
				}),
			[]
		),
		p(() => {
			let e = i.get(),
				n = { dispatch: i.dispatch, store: i };
			for (let r of t) n[r] = e[r];
			return n;
		}, [r[0]])
	);
}
let lx = (e) => ({
		id: +e.id,
		uid: e.uid,
		name: e.name,
		email: e.email,
		plan: e.plan,
		subscription: e.subscription,
		permissions: e.permissions,
		androidLicence: e.sra_license,
	}),
	lE = (e) => ({
		songId: e.id,
		artistId: e.artist.id,
		artist: e.artist.name,
		title: e.title,
		defaultTrack: 0,
		tracks: [],
	}),
	lT = (e) => ({
		revisionId: +e.id,
		songId: +e.song.id,
		artist: e.song.artist.name,
		title: e.song.title,
	}),
	l_ = {};
function lP(e, t) {
	(e.onload = function () {
		(this.onerror = this.onload = null), t(null, e);
	}),
		(e.onerror = function () {
			(this.onerror = this.onload = null),
				t(Error("Failed to load " + this.src), e);
		});
}
function lL(e, t) {
	e.onreadystatechange = function () {
		("complete" === this.readyState || "loaded" === this.readyState) &&
			((this.onreadystatechange = null), t(null, e));
	};
}
function lA(e, t) {
	let n = document.head || document.getElementsByTagName("head")[0],
		i = document.createElement("script");
	(i.async = !0), (i.defer = !0), (i.src = e);
	let r = "onload" in i ? lP : lL;
	r(i, t), i.onload || lP(i, t), n.appendChild(i);
}
function lN(e, t) {
	return (
		l_[t] ||
			(l_[t] = new Promise((n, i) => {
				lA(e, (e) => {
					(window[t] = !e), e ? i(e) : n();
				});
			})),
		l_[t]
	);
}
let lI = ["signin", "signup", "subscribePlus", "updateCard", "help"];
function lM(e, t) {
	document.body &&
		(e && lI.includes(t)
			? (document.body.classList.add("grecaptcha-visible"), lB())
			: document.body.classList.remove("grecaptcha-visible"));
}
function lB() {
	return lN(
		`https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`,
		"__LOADED_RECAPTCHA__"
	);
}
async function lD(e) {
	try {
		return (
			window.grecaptcha || (await lB()),
			await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: e })
		);
	} catch (t) {}
}
async function lz() {
	let e = e5("/auth/billing/settings"),
		t = await sg(e);
	return await sC(t), t.json();
}
async function lO(e) {
	let t = e5("/auth/coupon"),
		n = await sm(t, { coupon: e });
	return await sC(n), lx(await n.json());
}
async function lR() {
	let e = e5("/auth/coupon/android"),
		t = await sm(e);
	return await sC(t), lx(await t.json());
}
async function l$(e, t) {
	let n = e5(`/auth/billing/${e}`),
		i = await lD(e),
		r = await sm(n, t, { "X-Recaptcha-Token": i });
	return await sb(r, e), await sC(r), lx(await r.json());
}
async function lF() {
	let e = e5("/auth/billing/cancel"),
		t = await sm(e);
	return await sC(t), lx(await t.json());
}
async function lH(e) {
	let t = e5("/auth/billing/migrate"),
		n = await sm(t, e);
	return await sC(n), n.json();
}
function lV(e) {
	try {
		return JSON.parse(decodeURIComponent(lj(e)));
	} catch (t) {}
	return null;
}
function lj(e) {
	let t = e + "=",
		n = document.cookie.split(";");
	for (let i = 0; i < n.length; i++) {
		let r = n[i];
		for (; " " === r.charAt(0); ) r = r.substring(1, r.length);
		if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
	}
	return null;
}
function lU(e, t, n) {
	let i = new Date();
	i.setTime(i.getTime() + 31536e6),
		(t = encodeURIComponent(t)),
		(document.cookie = `${e}=${t};expires=${i.toUTCString()};path=/${
			n ? ";secure" : ""
		}`);
}
let lG = "sr_plus_migration";
function lW(e) {
	var t, n;
	let { user: i, payment: r } = e,
		a = lj(lG);
	if (
		(a && +a > 1) ||
		true ||
		(null === (t = e.user.profile) || void 0 === t
			? void 0
			: null === (n = t.subscription) || void 0 === n
			? void 0
			: n.type) !== "braintree" ||
		"plus" !== i.profile.subscription.plan.id
	)
		return !1;
	let s = !!("USD" === r.plan.currency && 9 > +r.plan.price),
		o = !!("EUR" === r.plan.currency && 9 > +r.plan.price),
		l = ["AUD", "BRL", "CAD", "CLP", "JPY", "MNX", "SEK"].includes(
			r.plan.currency
		);
	return s || o || l;
}
function lq() {
	let { dispatch: e, store: t } = lk(),
		n = t.get();
	f(() => {
		lX(n, e);
	}, []);
}
async function lX(e, t) {
	if (!e.payment.loading && !e.payment.ready)
		try {
			t("payment/setup");
			let [n, i] = await Promise.all([import("./dropin.8ae4ad09.js"), lz()]);
			t("payment/setup:done", { module: n, settings: i });
		} catch (r) {
			t("payment/setup:error", r);
		}
}
let lY = (e) => {
		e.on("payment/setup", (e) => ({
			payment: { ...e.payment, loading: !0, ready: !1 },
		})),
			e.on("payment/setup:done", (e, t) => {
				let { module: n, settings: i } = t;
				return {
					payment: {
						...e.payment,
						loading: !1,
						ready: !0,
						error: null,
						module: n,
						token: i.token,
						plan: i.plan,
					},
				};
			}),
			e.on("payment/setup:error", (e, t) => ({
				payment: { ...e.payment, error: t, loading: !1 },
			})),
			e.on("user/signOut", (e) => ({
				payment: {
					...e.payment,
					showMigrationPopup: !1,
					loading: !1,
					ready: !1,
					module: null,
					token: null,
					error: null,
				},
			})),
			e.on("user/signIn", (t) => lX(t, e.dispatch)),
			e.on("user/signUp", (t) => lX(t, e.dispatch)),
			e.on("user/googleSignIn", (t) => lX(t, e.dispatch)),
			e.on("payment/popup:show", (e) => ({
				payment: { ...e.payment, showMigrationPopup: !0 },
			})),
			e.on(
				"payment/popup:hide",
				(e) => (
					lU(lG, 2), { payment: { ...e.payment, showMigrationPopup: !1 } }
				)
			);
	},
	lK = {
		cypress: [],
		drum_standard_notation: [],
		new_sound: [],
		new_sound_control: [],
		sound_v4: [],
		auto_fingerings: !1,
		play_along: !1,
		french_plus: !0,
		repeating_contextual: !0,
		banner_later: !0,
		my_tabs_favorites_counts: !0,
		open_srwm_toolbar_by_default: !0,
	},
	lJ = [
		"aa",
		"drawing",
		"promo_slowdown",
		"promo_slowdown_faster",
		"new_sound",
		"plus_promo",
		"submit_promo",
		"plus_banners",
		"hidden_chords",
		"hetfield_emoji",
		"report",
		"bpm_speed",
		"jamplay",
		"comments_removal",
		"increased_tab_size",
		"voice_metronome",
		"new_plus_banner",
		"new_plus_text_ad",
		"useful_edits_v2",
		"multirest_print",
		"fingering_no_text",
		"emotions_on_plus",
		"mobile_app_banner_later",
		"no_struggling",
		"sign_stylization_plus_banner",
		"emoji_on_plus",
		"top_five_artists_logos",
		"contextual_later",
		"even_larger_tab",
		"last_edit_on",
		"slowdown_text_ads",
		"redesign_app_banner",
		"measure_learned_mark",
		"slow_on_plus",
		"subscribe_dialogue",
		"emotions_block_above",
		"emotions_text_ads",
	],
	lZ = [
		"drum_standard_notation",
		"new_sound",
		"new_sound_control",
		"aa",
		"fingering_no_text",
		"multirest_print",
		"useful_edits_v2",
	],
	lQ = (e) => (e & (e - 1)) == 0;
for (let l1 of Object.keys(lK)) {
	let l0 = lK[l1];
	if (l0 && Array.isArray(l0) && ((tm = l0.length) & (tm - 1)) != 0)
		throw Error("Experiment variations can't be evenly distributed");
}
let l2 = "exp";
function l5(e, t) {
	return Object.keys(e).reduce(
		(n, i) => (e[i].status === t && (n[i] = e[i].segment), n),
		{}
	);
}
let l4 = (e) => {
	e.on("experiments/activate", (t, n) => {
		let { experimentName: i, payload: r = {}, sendEvent: a = !0 } = n,
			s = lV("exp") || { active: {}, pending: {} };
		if (s.active[i] || !s.pending[i]) return;
		let o = { ...t.experiments },
			l = s.pending[i];
		o[i] = { status: "active", segment: t.isTestMode ? "off" : l };
		let c = { active: l5(o, "active"), pending: l5(o, "pending") };
		return (
			lU("exp", JSON.stringify(c), !0),
			a
				? e.dispatch("curiosity/enteredExperiment", {
						experiment: i,
						payload: { ...r, Value: o[i].segment },
				  })
				: console.log(
						`Experiment ${i} activated with segment ${o[i].segment}. EE skipped.`
				  ),
			{ experiments: o }
		);
	});
};
async function l3(e, t) {
	try {
		e("favorites/load:processing");
		let n = await lc(t);
		e("favorites/load:done", n);
	} catch (i) {
		console.error("favorites/load:error", i), e("favorites/load:error", i);
	} finally {
		e("meta/setWasFavoriteOnServerRender", void 0);
	}
}
let l8 = (e, t) => {
		let n = e.findIndex((e) => e.songId === t);
		return e.slice(0, n).concat(e.slice(n + 1));
	},
	l6 = (e, t) => le([...e, t]),
	l9 = (e) => {
		e.on("user/signIn", async () => l3(e.dispatch, void 0)),
			e.on("user/googleSignIn", async () => l3(e.dispatch, void 0)),
			e.on("favorites/add", async (t, n) => {
				let { songId: i, song: r } = n,
					a = or();
				try {
					e.dispatch("favorites/add:processing", {
						songId: i,
						song: r,
						actionId: a,
					}),
						await lu(i),
						e.dispatch("favorites/add:done", {
							songId: i,
							song: r,
							actionId: a,
						});
				} catch (s) {
					console.error(s),
						e.dispatch("favorites/add:error", {
							songId: i,
							song: r,
							actionId: a,
						});
				}
			}),
			e.on("favorites/add:processing", (e, t) => {
				let { song: n, actionId: i } = t;
				return {
					favorites: {
						...e.favorites,
						favorites: l6(e.favorites.favorites, n),
						actionId: i,
						loading: !0,
					},
				};
			}),
			e.on("favorites/add:done", (e, t) => {
				let { actionId: n } = t;
				return e.favorites.actionId === n
					? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
					: null;
			}),
			e.on("favorites/add:error", (e, t) => {
				let { songId: n, actionId: i } = t;
				return e.favorites.actionId === i
					? {
							favorites: {
								...e.favorites,
								favorites: l8(e.favorites.favorites, n),
								actionId: "",
								loading: !1,
							},
					  }
					: null;
			}),
			e.on("favorites/delete", async (t, n) => {
				let i = or(),
					r = t.favorites.favorites.find((e) => e.songId === n);
				if (r)
					try {
						e.dispatch("favorites/delete:processing", {
							songId: n,
							song: r,
							actionId: i,
						}),
							await ld(n),
							e.dispatch("favorites/delete:done", {
								songId: n,
								song: r,
								actionId: i,
							});
					} catch (a) {
						console.error(a),
							e.dispatch("favorites/delete:error", {
								songId: n,
								song: r,
								actionId: i,
							});
					}
			}),
			e.on("favorites/delete:processing", (e, t) => {
				let { songId: n, actionId: i } = t;
				return {
					favorites: {
						...e.favorites,
						favorites: l8(e.favorites.favorites, n),
						actionId: i,
						loading: !0,
					},
				};
			}),
			e.on("favorites/delete:done", (e, t) => {
				let { actionId: n } = t;
				return e.favorites.actionId === n
					? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
					: null;
			}),
			e.on("favorites/delete:error", (e, t) => {
				let { song: n, actionId: i } = t;
				return e.favorites.actionId === i
					? {
							favorites: {
								...e.favorites,
								favorites: l6(e.favorites.favorites, n),
								actionId: "",
								loading: !1,
							},
					  }
					: null;
			}),
			e.on("favorites/load:processing", (e) => ({
				favorites: { ...e.favorites, loading: !0, error: !1 },
			})),
			e.on("favorites/load:done", (e, t) => ({
				favorites: {
					...e.favorites,
					favorites: t,
					actionId: "",
					loading: !1,
					error: !1,
				},
			})),
			e.on("favorites/load:error", (e) => ({
				favorites: { ...e.favorites, favorites: [], loading: !1, error: !0 },
			})),
			e.on("favorites/filter", (e, t) => ({
				favorites: { ...e.favorites, pattern: t },
			})),
			e.on("user/signOut", (e) => ({
				favorites: { ...e.favorites, favorites: [], pattern: "", actionId: "" },
			})),
			e.on("favorites/filter/difficulty", (e, t) => ({
				favorites: { ...e.favorites, filters: nC(e.favorites.filters, t) },
			})),
			e.on("favorites/filter/instrument", (e, t) => ({
				favorites: { ...e.favorites, filters: nk(e.favorites.filters, t) },
			})),
			e.on("favorites/filter/tuning", (e, t) => {
				let { instrument: n, tuning: i } = t;
				return {
					favorites: { ...e.favorites, filters: nx(e.favorites.filters, n, i) },
				};
			}),
			e.on("favorites/filter/reset", (e) => ({
				favorites: { ...e.favorites, filters: nc },
			}));
	};
async function l7(e) {
	let t = e5("/api/setlists"),
		n = await fetch(t, { credentials: "include" });
	sy(n);
	let i = await n.json(),
		r = i.map((e) => ({ name: e.name, id: e.id, songs: ln(le(e.songs)) }));
	return r;
}
async function ce(e) {
	let t = e5("/api/setlist"),
		n = await sm(t, { name: e });
	return sy(n), n.json();
}
async function ct(e) {
	let t = e5(`/api/setlist/${e}`),
		n = await fetch(t, { method: "delete", credentials: "include" });
	return sy(n), n.json();
}
async function cn(e, t) {
	let n = e5(`/api/setlist/song/${e}`),
		i = await sm(
			n,
			{ songId: t },
			{},
			{ method: "delete", credentials: "include" }
		);
	return sy(i), i.json();
}
async function ci(e, t) {
	let n = e5(`/api/setlist/song/${e}`),
		i = await sm(n, { songId: t });
	return sy(i), i.json();
}
let cr = (e, t) => {
		let n = e.findIndex((e) => e.id === t);
		return e.slice(0, n).concat(e.slice(n + 1));
	},
	ca = (e, t) => {
		let n = e.findIndex((e) => e.songId === t);
		return e.slice(0, n).concat(e.slice(n + 1));
	};
async function cs(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
	try {
		e("setlists/load:processing");
		let n = await l7(t);
		e("setlists/load:done", n);
	} catch (i) {
		console.error(i), e("setlists/load:error", i);
	}
}
async function co(e, t) {
	try {
		e("setlists/create:processing", { name: t });
		let n = await ce(t);
		e("setlists/create:done", n.id);
	} catch (i) {
		console.error(i), e("setlists/create:error");
	}
}
async function cl(e, t, n) {
	try {
		e("setlists/remove:processing", { id: t, name: n }),
			await ct(t),
			e("setlists/remove:done");
	} catch (i) {
		console.error(i), cs(e);
	}
}
let cc = (e) => {
		e.on("user/signIn", async () => cs(e.dispatch, void 0)),
			e.on("user/googleSignIn", async () => cs(e.dispatch, void 0)),
			e.on("user/signOut", (e) => ({
				setlists: { ...e.setlists, setlists: [], activeSetId: void 0 },
			})),
			e.on("setlists/load:processing", (e) => ({
				setlists: { ...e.setlists, loading: !0 },
			})),
			e.on("setlists/load:done", (e, t) => ({
				setlists: { ...e.setlists, setlists: t, loading: !1 },
			})),
			e.on("setlists/load:error", (e) => ({
				setlists: { ...e.setlists, setlists: [], loading: !1 },
			})),
			e.on("setlists/select", (e, t) => ({
				setlists: { ...e.setlists, activeSetId: t, removeSetId: void 0 },
			})),
			e.on("setlists/openCreate", async (t) => {
				let { createSetForm: n, loading: i } = t.setlists;
				!i && n && "" !== n.name.trim() && (await co(e.dispatch, n.name)),
					e.dispatch("setlists/openCreate:init");
			}),
			e.on("setlists/openCreate:init", (e) => ({
				setlists: { ...e.setlists, createSetForm: { name: "" } },
			})),
			e.on("setlists/cancelEdit", (e) => ({
				setlists: { ...e.setlists, createSetForm: void 0 },
			})),
			e.on("setlists/changeName", (e, t) =>
				e.setlists.createSetForm
					? {
							setlists: {
								...e.setlists,
								createSetForm: { ...e.setlists.createSetForm, name: t },
							},
					  }
					: null
			),
			e.on("setlists/confirmCreate", (t) => {
				let { createSetForm: n, loading: i } = t.setlists;
				return (
					!i &&
						n &&
						("" !== n.name.trim()
							? co(e.dispatch, n.name)
							: e.dispatch("setlists/cancelCreate")),
					null
				);
			}),
			e.on("setlists/cancelCreate", (e) => ({
				setlists: { ...e.setlists, createSetForm: void 0 },
			})),
			e.on("setlists/create:processing", (e, t) => {
				let { name: n } = t;
				return e.setlists.createSetForm
					? {
							setlists: {
								...e.setlists,
								loading: !0,
								setlists: [
									{ id: "new", name: n, songs: [] },
									...e.setlists.setlists,
								],
								createSetForm: void 0,
							},
					  }
					: null;
			}),
			e.on("setlists/create:done", (e, t) => {
				let n = [...e.setlists.setlists],
					i = n.find((e) => "new" === e.id);
				return (
					i && (i.id = t),
					{ setlists: { ...e.setlists, setlists: n, loading: !1 } }
				);
			}),
			e.on("setlists/create:error", (e) => ({
				setlists: {
					...e.setlists,
					setlists: cr(e.setlists.setlists, "new"),
					loading: !1,
				},
			})),
			e.on("setlists/initRemove", (e, t) => {
				let { setlists: n } = e.setlists,
					i = n.find((e) => e.id === t);
				return i ? { setlists: { ...e.setlists, removeSetId: t } } : null;
			}),
			e.on("setlists/confirmRemove", (t, n) => {
				let { removeSetId: i, loading: r, setlists: a } = t.setlists;
				if (!r && i === n) {
					let s = a.find((e) => e.id === n);
					s && cl(e.dispatch, n, s.name);
				}
				return null;
			}),
			e.on("setlists/remove:processing", (e, t) => {
				let { id: n } = t;
				return {
					setlists: {
						...e.setlists,
						setlists: cr(e.setlists.setlists, n),
						activeSetId: void 0,
						loading: !0,
					},
				};
			}),
			e.on("setlists/remove:done", (e) => ({
				setlists: { ...e.setlists, loading: !1 },
			})),
			e.on("setlists/removeSong", async (t, n) => {
				let { songId: i, setlistId: r } = n,
					{ setlists: a, loading: s } = t.setlists,
					o = a.find((e) => e.id === r);
				if (!s && o && o.songs) {
					let l = o.songs.find((e) => e.songId === i);
					if (l)
						try {
							e.dispatch("setlists/removeSong:processing", {
								song: l,
								songId: i,
								setlist: o,
								setlistId: r,
							}),
								await cn(r, i),
								e.dispatch("setlists/removeSong:done");
						} catch (c) {
							console.error(c), cs(e.dispatch);
						}
				}
			}),
			e.on("setlists/removeSong:processing", (e, t) => {
				let { songId: n, setlistId: i } = t,
					{ setlists: r } = e.setlists,
					a = r.find((e) => e.id === i);
				return a
					? ((a.songs = ca(a.songs, n)),
					  { setlists: { ...e.setlists, setlists: [...r], loading: !0 } })
					: null;
			}),
			e.on("setlists/removeSong:done", (e) => ({
				setlists: { ...e.setlists, loading: !1 },
			})),
			e.on("setlists/addSong", async (t, n) => {
				let { song: i, setlistId: r } = n,
					{ setlists: a, loading: s } = t.setlists,
					o = a.find((e) => e.id === r);
				if (!s && o && !o.songs.find((e) => e.songId === i.songId))
					try {
						e.dispatch("setlists/addSong:processing", {
							song: i,
							setlistId: r,
							setlist: o,
						}),
							await ci(r, i.songId),
							e.dispatch("setlists/addSong:done");
					} catch (l) {
						console.error(l), cs(e.dispatch);
					}
			}),
			e.on("setlists/addSong:processing", (t, n) => {
				let { song: i, setlistId: r } = n,
					{ setlists: a, markedIds: s } = t.setlists,
					o = [...a],
					l = o.find((e) => e.id === r);
				if (l) {
					l.songs = [i, ...l.songs];
					let c = [...s];
					return (
						s.includes(r) ||
							(c.push(r),
							setTimeout(() => {
								e.dispatch("setlists/flushMark", r);
							}, 1500)),
						{
							setlists: {
								...t.setlists,
								setlists: o,
								markedIds: c,
								loading: !0,
							},
						}
					);
				}
				return null;
			}),
			e.on("setlists/addSong:done", (e) => ({
				setlists: { ...e.setlists, loading: !1 },
			})),
			e.on("setlists/flushMark", (e, t) => {
				let { markedIds: n } = e.setlists;
				if (n.includes(t)) {
					let i = n.findIndex((e) => e === t);
					return {
						setlists: {
							...e.setlists,
							markedIds: n.slice(0, i).concat(n.slice(i + 1)),
						},
					};
				}
				return null;
			}),
			e.on("setlists/panelClick", (t) => {
				let { createSetForm: n } = t.setlists;
				return n && e.dispatch("setlists/confirmCreate"), null;
			});
	},
	cu = (e) => (e.layer.layer ? { layer: { layer: null } } : null),
	cd = (e) => {
		e.on("layer/show", (e, t) => ({ layer: { layer: t } })),
			e.on("route/change", cu),
			e.on("layer/hide", cu),
			e.on("screen/toggleFullscreen", cu);
	};
async function cp(e, t, n) {
	try {
		e("revisions/load:processing", { songId: t });
		let i = await nV(t, n);
		e("revisions/load:done", { songId: t, revisions: i });
	} catch (r) {
		if (n.aborted) return;
		e("revisions/load:error", { songId: t, error: r });
	}
}
let ch = (e) => {
		e.on("meta/load:processing", (e, t) => {
			let { songId: n } = t;
			if (e.revisions.songId && n !== e.revisions.songId)
				return {
					revisions: {
						revisions: null,
						isLoading: !0,
						isError: !1,
						songId: void 0,
					},
				};
		}),
			e.on("revisions/load:processing", (e, t) => {
				let { songId: n } = t;
				if (e.meta.songId === n)
					return {
						revisions: {
							...e.revisions,
							songId: n,
							revisions: null,
							isLoading: !0,
							isError: !1,
						},
					};
			}),
			e.on("revisions/load:done", (e, t) => {
				let { revisions: n, songId: i } = t;
				if (e.meta.songId === i)
					return {
						revisions: {
							...e.revisions,
							revisions: n,
							isLoading: !1,
							isError: !1,
						},
					};
			}),
			e.on("revisions/load:error", (e, t) => {
				let { error: n, songId: i } = t;
				if (e.meta.songId === i)
					return {
						revisions: {
							...e.revisions,
							revisions: null,
							isLoading: !1,
							isError: !0,
						},
					};
			});
	},
	cf = 500,
	cg = (e) => {
		async function t(t, n) {
			if (n && !t.songs.songs.hasMore) return;
			let i = t.songs.pattern,
				r = t.songs.filters,
				a = 0,
				s = null;
			n &&
				t.songs.songs.pattern === t.songs.pattern &&
				nB(t.songs.songs.filters, t.songs.filters) &&
				(a = (s = t.songs.songs.list).length);
			let o = new tI();
			try {
				e.dispatch("songs/load:processing", { pattern: i, filters: r, ac: o });
				let l = await ls(i, nA(r), o.signal, 50, a);
				if (o.signal.aborted) return;
				let c = t.songs.defaultInstrument;
				n_(r) || (l = nM(l, c));
				let u = (s ? s.length : 0) + l.length,
					d = 50 === l.length && u < 500;
				e.dispatch("songs/load:done", {
					songs: s ? [...s, ...l] : l,
					hasMore: d,
					defaultInstrument: c,
					pattern: i,
					filters: r,
				}),
					A &&
						!s &&
						requestAnimationFrame(() => {
							lv("search-wrap", "top");
						});
			} catch (p) {
				if (o.signal.aborted) return;
				console.error(p),
					e.dispatch("songs/load:error", { error: p, pattern: i, filters: r });
			}
		}
		let n = (e) => t(e, !1);
		e.on("songs/load:processing", (e, t) => {
			let { pattern: n, filters: i, ac: r } = t,
				a = e.songs.loading;
			return (
				a && e.songs.loading.ac.abort(),
				{ songs: { ...e.songs, loading: { filters: i, pattern: n, ac: r } } }
			);
		}),
			e.on("songs/load:done", (e, t) => {
				let {
						songs: n,
						hasMore: i,
						pattern: r,
						filters: a,
						defaultInstrument: s,
					} = t,
					o = e.songs.loading;
				if (o && nB(o.filters, a) && o.pattern === r)
					return {
						songs: {
							...e.songs,
							songs: {
								list: n,
								defaultInstrument: s,
								hasMore: i,
								pattern: r,
								filters: a,
							},
							loading: null,
						},
					};
			}),
			e.on("songs/load:error", (e, t) => {
				let { error: n, pattern: i, filters: r } = t,
					a = e.songs.loading;
				if (a && nB(a.filters, r) && a.pattern === i)
					return { songs: { ...e.songs, loading: null } };
			}),
			e.on("songs/filter", (e, t) => {
				let { pattern: n, filters: i } = t;
				return { songs: { ...e.songs, pattern: n, filters: i } };
			}),
			e.on("songs/filter", n),
			e.on("songs/default", (e, t) => {
				let { instrumentId: n } = t,
					i = nI(n),
					r = e.songs.songs.list;
				return (
					n_(e.songs.songs.filters) ||
						e.songs.songs.defaultInstrument === i ||
						(r = nM(e.songs.songs.list, i)),
					{
						songs: {
							...e.songs,
							songs: { ...e.songs.songs, list: r, defaultInstrument: i },
							defaultInstrument: i,
						},
					}
				);
			}),
			e.on("songs/more", (e) => t(e, !0)),
			e.on("songs/filter/pattern", (e, t) => ({
				songs: { ...e.songs, pattern: t },
			})),
			e.on("songs/filter/pattern", n),
			e.on("songs/filter/difficulty", (e, t) => ({
				songs: { ...e.songs, filters: { ...e.songs.filters, difficulty: t } },
			})),
			e.on("songs/filter/difficulty", n),
			e.on("songs/filter/instrument", (e, t) => ({
				songs: { ...e.songs, filters: { ...e.songs.filters, instrument: t } },
			})),
			e.on("songs/filter/instrument", n),
			e.on("songs/filter/tuning", (e, t) => {
				let { instrument: n, tuning: i } = t;
				return { songs: { ...e.songs, filters: nx(e.songs.filters, n, i) } };
			}),
			e.on("songs/filter/tuning", n),
			e.on("songs/filter/reset", (e) => ({
				songs: { ...e.songs, filters: nc },
			})),
			e.on("songs/filter/reset", n),
			e.on("route/change", (t, n) => {
				let { route: i, query: r } = n;
				if ((null == i ? void 0 : i.page) === "search") {
					let a = (null == r ? void 0 : r.pattern) || "",
						s = {
							instrument: (null == r ? void 0 : r.inst) ? lg(r.inst) : tY,
							tunings: t.songs.filters.tunings,
							difficulty: t.songs.filters.difficulty,
						};
					(t.songs.songs.list.length &&
						t.songs.songs.pattern === a &&
						nB(t.songs.songs.filters, s)) ||
						e.dispatch("songs/filter", { pattern: a, filters: s });
				}
			});
	};
async function cm(e, t) {
	let n = e5("/api/song"),
		i = new FormData();
	i.append("file", e.file),
		i.append("title", e.title),
		i.append("artist", e.artist),
		i.append("difficulty", e.difficulty);
	let r = await fetch(n, {
		signal: t,
		method: "post",
		credentials: "include",
		body: i,
	});
	if (t && t.aborted) return { songSubmitted: !1, song: null };
	await sk(r), await sx(r);
	let a = lE(await r.json());
	return { songSubmitted: !!r.ok, song: a };
}
async function cy(e, t) {
	let n = e5("/api/revision"),
		i = new FormData();
	i.append("file", e.file),
		i.append("songId", e.songId),
		i.append("summary", e.summary),
		e.force && i.append("force", e.force.toString());
	let r = await fetch(n, {
		signal: t,
		method: "post",
		credentials: "include",
		body: i,
	});
	if (t && t.aborted) return;
	await sk(r), await sx(r);
	let a = lT(await r.json());
	return { revisionSubmitted: !!r.ok, revision: a };
}
let cv = {
	song: null,
	songSubmitted: !1,
	songError: null,
	revision: null,
	revisionSubmitted: !1,
	revisionError: null,
};
async function cb(e, t, n) {
	try {
		let i = await cm(t, n);
		if (n && n.aborted) return;
		if ((e("upload/song:uploaded", i), i.songSubmitted)) {
			let r = await nj(i.song.songId);
			r && e("navigate", eR(r, 0));
		}
	} catch (a) {
		throw (e("upload/song:error", { error: a }), a);
	}
}
async function cw(e, t, n) {
	try {
		let i = await cy(t, n);
		if (n && n.aborted) return;
		if ((e("upload/revision:uploaded", i), i.revisionSubmitted)) {
			let r = await nj(i.revision.songId, i.revision.revisionId);
			r && e("navigate", eR(r, 0, r.revisionId));
		}
	} catch (a) {
		throw (e("upload/revision:error", { error: a }), a);
	}
}
let cS = (e) => {
		e.on("upload/song:uploaded", (e, t) => {
			let { songSubmitted: n, song: i } = t;
			return {
				uploads: { ...e.uploads, songError: null, songSubmitted: n, song: i },
			};
		}),
			e.on("upload/reset", () => ({ uploads: cv })),
			e.on("upload/song:error", (e, t) => {
				let { error: n } = t;
				return { uploads: { ...e.uploads, songError: n } };
			}),
			e.on("upload/revision:uploaded", (e, t) => {
				let { revisionSubmitted: n, revision: i } = t;
				return {
					uploads: {
						...e.uploads,
						revisionError: null,
						revisionSubmitted: n,
						revision: i,
					},
				};
			}),
			e.on("upload/revision:error", (e, t) => {
				let { error: n } = t;
				return { uploads: { ...e.uploads, revisionError: n } };
			});
	},
	cC = (e) => {
		e.on("demo/activate", (e) => ({
			demo: { active: !0, enabled: e.meta.songId === M },
		})),
			e.on("meta/load:processing", (e, t) => {
				let { songId: n } = t;
				return e.demo.active
					? n === M
						? { demo: { active: !0, enabled: !0 } }
						: { demo: { active: !1, enabled: !1 } }
					: null;
			});
	};
!(function (e) {
	(e.PROMO_CONTEXT_SLOWDOWN = "promo-context-slowdown"),
		(e.PROMO_CONTEXT_LOOP = "promo-context-loop"),
		(e.PROMO_CONTEXT_NO_ADS = "promo-context-no-ads"),
		(e.PROMO_CONTEXT_PRINT = "promo-context-print"),
		(e.PROMO_CONTEXT_MUTE = "promo-context-mute"),
		(e.PROMO_CONTEXT_SOLO = "promo-context-solo"),
		(e.PROMO_CONTEXT_RETUNE = "promo-context-retune"),
		(e.SCREENER = "screener"),
		(e.UT_RECORDER = "ut-recorder");
})(tA || (tA = {}));
let ck = "hasSeenAttractors",
	cx = "blockedAttractors",
	cE = [tA.UT_RECORDER],
	cT = { ignoreSingleAppearance: !1, ignoreDailyTimespan: !1 };
function c_(e) {
	let t = new Date(Date.now() - 864e5);
	return new Date(e) <= t;
}
function cP(e) {
	let t =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: new Date().toUTCString(),
		n = sW(ck) || {};
	(n[e] = t), sq(ck, n);
}
function cL(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1]
			? arguments[1]
			: new Date().toUTCString();
	window.__ACTIVE_ATTRACTOR__ === e &&
		(cP(e, t), (window.__ACTIVE_ATTRACTOR__ = null));
}
function cA(e) {
	let t = sW(cx) || {};
	(t[e] = new Date().toUTCString()), sq(cx, t);
}
function cN() {
	return sW(ck) || {};
}
function cI() {
	return sW(cx) || {};
}
function cM(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cT;
	if (
		(console.log("attractor:", e, (t = { ...cT, ...t })),
		-1 !== window.location.search.indexOf("ut=on") && cE.includes(e))
	)
		return (window.__ACTIVE_ATTRACTOR__ = e), !0;
	if (window.__ACTIVE_ATTRACTOR__) return e === window.__ACTIVE_ATTRACTOR__;
	let n = !0,
		i = cN(),
		r = Object.keys(i);
	return (
		t.ignoreDailyTimespan || (n = r.reduce((e, t) => e && c_(i[t]), n)),
		!t.ignoreSingleAppearance && i[e] && (n = !1),
		n && (window.__ACTIVE_ATTRACTOR__ = e),
		n
	);
}
!(function (e) {
	(e.SLOWDOWN = "slowdown"),
		(e.LOOP = "loop"),
		(e.NO_ADS = "no ads"),
		(e.PRINT = "print"),
		(e.MUTE = "mute"),
		(e.SOLO = "solo"),
		(e.PITCH_SHIFT = "pitch shift");
})(tN || (tN = {}));
let cB = new Map([
		["slowdown", tA.PROMO_CONTEXT_SLOWDOWN],
		["loop", tA.PROMO_CONTEXT_LOOP],
		["no ads", tA.PROMO_CONTEXT_NO_ADS],
		["print", tA.PROMO_CONTEXT_PRINT],
		["mute", tA.PROMO_CONTEXT_MUTE],
		["solo", tA.PROMO_CONTEXT_SOLO],
		["pitch shift", tA.PROMO_CONTEXT_RETUNE],
	]),
	cD = "hasUnsubscribedFromPromo",
	cz = 1e4,
	cO = 2e4,
	cR = 2e3;
function c$(e) {
	let t = new Date(Date.now() - 6048e5);
	return new Date(e) >= t;
}
let cF = (e, t) => {
	if (t.isTestMode && "promo" !== t.query.cyAllow) return !0;
	let n = sW(cD),
		i = true,
		r = !!t.promo.feature,
		a = 0 === t.curiosity.vpt10.count,
		s = n || i || r || a;
	return s;
};
function cH(e) {
	let { position: t } = e.player,
		n = e.part.current,
		i = [
			...e.promo.playbackPositionEvents.filter(
				(e) => e.time > Date.now() - 12e4
			),
		],
		r = 0;
	if (n) {
		let a = aA(n, t.cursor, "left"),
			s = `${n.revisionId}:${n.partId}:${a.measureLayout.measure.index}`;
		i.push({ time: Date.now(), key: s }),
			(r = i.filter((e) => e.key === s).length);
	}
	return { events: i, relatedEvents: r };
}
function cV(e) {
	let t = e.part.current,
		n = "other";
	t &&
		(er(t.instrumentId) && (n = "guitar"),
		ea(t.instrumentId) && (n = "bass"),
		ei(t.instrumentId) && (n = "drums"));
	let i = [...e.promo.playbackTypeEvents, { time: Date.now(), type: n }],
		r = i.filter((e) => "bass" === e.type).length;
	return { events: i, bassEvents: r };
}
function cj(e, t, n) {
	let i = cN(),
		r = cI();
	if (i[e] && !r[e]) {
		var a;
		(null === (a = t.experiments.repeating_contextual) || void 0 === a
			? void 0
			: a.status) === "pending" &&
			n("experiments/activate", { experimentName: "repeating_contextual" }),
			cA(e);
	}
}
function cU(e, t, n) {
	let i = cN(),
		r = cI(),
		a = i[e];
	if (!a) return !0;
	if (t.experiments.repeating_contextual) {
		if (c$(a)) return !1;
		if ("off" === t.experiments.repeating_contextual.segment)
			return cj(e, t, n), !1;
		if (r[e]) return !1;
	}
	return !0;
}
function cG(e, t) {
	let n = tA.PROMO_CONTEXT_SLOWDOWN,
		i = !e.player.shouldPlay || !e.player.canPlay;
	if (i || cF(n, e)) return;
	let r = e.promo.feature,
		{ events: a, relatedEvents: s } = cH(e);
	if (s >= 3) {
		let o = cU(n, e, t);
		o &&
			cM(n, { ignoreSingleAppearance: !0 }) &&
			(cj(n, e, t), (r = "slowdown"), e.device.isPhone && t("player/stopPlay"));
	}
	return { promo: { ...e.promo, playbackPositionEvents: a, feature: r } };
}
function cW(e, t) {
	let n = tA.PROMO_CONTEXT_LOOP,
		i = !e.player.shouldPlay || !e.player.canPlay;
	if (i || cF(n, e)) return;
	let r = cN();
	if (!r[tA.PROMO_CONTEXT_SLOWDOWN]) return;
	let a = e.promo.feature,
		{ events: s, relatedEvents: o } = cH(e);
	if (o >= 3) {
		let l = cU(n, e, t);
		l &&
			cM(n, { ignoreSingleAppearance: !0 }) &&
			(cj(n, e, t), (a = "loop"), e.device.isPhone && t("player/stopPlay"));
	}
	return { promo: { ...e.promo, playbackPositionEvents: s, feature: a } };
}
function cq(e, t) {
	let n = tA.PROMO_CONTEXT_NO_ADS;
	if (cF(n, e)) return;
	let i = e.promo.feature,
		{ isPhone: r } = e.device,
		{ canPlay: a, shouldPlay: s } = e.player,
		o = e.screen.viewport.height;
	if (o < (r ? 740 : 900)) {
		let l = cU(n, e, t);
		l &&
			cM(n, { ignoreSingleAppearance: !0 }) &&
			(cj(n, e, t), (i = "no ads"), r && a && s && t("player/stopPlay"));
	}
	return { promo: { ...e.promo, feature: i } };
}
function cX(e, t) {
	let n = tA.PROMO_CONTEXT_PRINT;
	if (cF(n, e)) return;
	let i = e.promo.feature,
		r = cU(n, e, t);
	return (
		r && cM(n, { ignoreSingleAppearance: !0 }) && (cj(n, e, t), (i = "print")),
		{ promo: { ...e.promo, feature: i } }
	);
}
function cY(e, t) {
	let n = tA.PROMO_CONTEXT_MUTE;
	if (cF(n, e)) return;
	let i = e.promo.feature,
		r = e.promo.halfPlayed + 1;
	if (r >= 2) {
		let a = cU(n, e, t);
		a && cM(n, { ignoreSingleAppearance: !0 }) && (cj(n, e, t), (i = "mute"));
	}
	return { promo: { ...e.promo, halfPlayed: r, feature: i } };
}
function cK(e, t) {
	let n = tA.PROMO_CONTEXT_SOLO,
		i = !e.player.shouldPlay || !e.player.canPlay;
	if (i || cF(n, e)) return;
	let r = e.promo.feature,
		{ events: a, bassEvents: s } = cV(e);
	if (5 === s) {
		let o = cU(n, e, t);
		o &&
			cM(n, { ignoreSingleAppearance: !0 }) &&
			(cj(n, e, t), (r = "solo"), e.device.isPhone && t("player/stopPlay"));
	}
	return { promo: { ...e.promo, playbackTypeEvents: a, feature: r } };
}
function cJ(e, t) {
	let n = tA.PROMO_CONTEXT_RETUNE;
	if (cF(n, e)) return;
	let i = e.promo.feature,
		r = e.part.current;
	if (r) {
		let a = r.tuning && tG(r.instrumentId, r.tuning);
		if (a && 0 !== a.pitch) {
			let s = cU(n, e, t);
			s &&
				cM(n, { ignoreSingleAppearance: !0 }) &&
				(cj(n, e, t), (i = "pitch shift"));
		}
	}
	return { promo: { ...e.promo, feature: i } };
}
let cZ = (e) => {
		let t = !sW(cD);
		if (t) {
			let n, i, r;
			function a(t) {
				if (!cF(tA.PROMO_CONTEXT_MUTE, t)) {
					if (t.player.shouldPlay && t.player.canPlay) {
						let n = t.part.current;
						if (!n) return;
						let i = n.timestamps[n.timestamps.length - 1];
						i > 2e4 &&
							e.dispatch("promo/mute:start", { delay: Math.floor(i / 3) });
					} else e.dispatch("promo/mute:clear");
				}
			}
			e.on("player/moveCursor", (t) => cG(t, e.dispatch)),
				e.on("player/togglePlay", (t) => cG(t, e.dispatch)),
				e.on("player/moveCursor", (t) => cW(t, e.dispatch)),
				e.on("player/togglePlay", (t) => cW(t, e.dispatch)),
				e.on("curiosity/vpt10", (t) => cq(t, e.dispatch)),
				e.on("meta/load:done", (t) => {
					if ("tab" === t.route.page && !t.device.isPhone) {
						clearTimeout(n);
						let i = t.isTestMode ? 2e3 : 2e4;
						n = setTimeout(() => e.dispatch("promo/print:fire"), i);
					}
				}),
				e.on("route/change", () => clearTimeout(n)),
				e.on("promo/print:fire", (t) => cX(t, e.dispatch)),
				e.on("player/togglePlay", (e) => a(e)),
				e.on("promo/mute:start", (t, n) => {
					let { delay: r } = n;
					clearTimeout(i),
						(i = setTimeout(() => e.dispatch("promo/mute:fire"), r));
				}),
				e.on("route/change", () => clearTimeout(i)),
				e.on("promo/mute:clear", () => clearTimeout(i)),
				e.on("promo/mute:fire", (t) => cY(t, e.dispatch)),
				e.on("player/moveCursor", (t) => cK(t, e.dispatch)),
				e.on("player/togglePlay", (t) => cK(t, e.dispatch)),
				e.on("meta/load:done", (t) => {
					if ("tab" === t.route.page) {
						clearTimeout(r);
						let n = t.isTestMode ? 2e3 : 1e4;
						r = setTimeout(() => e.dispatch("promo/retune:fire"), n);
					}
				}),
				e.on("route/change", () => clearTimeout(r)),
				e.on("promo/retune:fire", (t) => cJ(t, e.dispatch)),
				e.on("promo/dismiss", (e) => {
					let t = cB.get(e.promo.feature);
					return t && cL(t), { promo: { ...e.promo, feature: null } };
				}),
				e.on(
					"promo/unsubscribe",
					(e) => (
						sq(cD, new Date().toUTCString()),
						{ promo: { ...e.promo, feature: null } }
					)
				);
		}
	},
	cQ = () => ({
		isDeleted: !1,
		editor: { canDelete: !1, processingDeletion: !1 },
	}),
	c1 = (e) => {
		let { user: t } = e,
			n = !1;
		if (t.isLoggedIn && e.meta.current) {
			let { editors: i } = e.meta.current;
			n =
				nq(t, tb.MANAGE_SONGS) ||
				(i && 1 === i.length && i[0] === t.profile.id);
		}
		return { isDeleted: !1, editor: { ...e.editor, canDelete: n } };
	};
async function c0(e, t) {
	try {
		let n = new tI(),
			i = await sH(t, n.signal);
		if (i.success) e("editor/delete:done", { meta: t });
		else {
			let r = Error("Oops, something went wrong. Please try again later.");
			e("editor/delete:error", r);
		}
		return n.abort.bind(n);
	} catch (a) {
		e("editor/delete:error", a);
	}
}
async function c2(e, t) {
	try {
		let n = new tI();
		if (t === ty.V1)
			throw Error(
				`Generating audio for version ${t} is not supported with this API`
			);
		await sj(e, t, n.signal), A && alert("Done!");
	} catch (i) {
		console.error(i), alert(`Error: ${i.message}`);
	}
}
async function c5(e, t) {
	try {
		await sV(e, t), A && alert("Done!");
	} catch (n) {
		console.error(n), alert(`Error: ${n.message}`);
	}
}
let c4 = (e) => {
	e.on("meta/load:done", c1),
		e.on("user/init", c1),
		e.on("user/signIn", c1),
		e.on("user/googleSignIn", c1),
		e.on("user/signUp", c1),
		e.on("user/signOut", cQ),
		e.on(
			"editor/delete",
			(t, n) => (
				c0(e.dispatch, n),
				{
					isDeleted: !0 === t.isDeleted,
					editor: { ...t.editor, processingDeletion: !0 },
				}
			)
		),
		e.on("editor/delete:done", (e) => ({
			isDeleted: !0,
			editor: { ...e.editor, processingDeletion: !1 },
		})),
		e.on("editor/delete:error", (e, t) => {
			let n = t.message;
			return (
				window && window.alert(`Error: ${n}`),
				{
					isDeleted: !0 === e.isDeleted,
					editor: { ...e.editor, processingDeletion: !1 },
				}
			);
		}),
		e.on("editor/sound:toggle", (t, n) => {
			let { version: i } = n;
			t.meta.current &&
				s3(e, t.meta.songId, t.meta.partId, t.meta.current.revisionId, i);
		}),
		e.on("editor/sound:generate", (e, t) => {
			let { version: n } = t;
			e.meta.current && c2(e.meta.current.revisionId, n);
		}),
		e.on("editor/sound:update", (e, t) => {
			let { version: n } = t;
			e.meta.current && c5(e.meta.current.revisionId, n);
		});
};
function c3(e) {
	let t = {};
	for (let n of (e.voices > 1 && (t.polyphony = !0), e.measures))
		for (let i of (n.repeat && (t.repeat = !0),
		n.tripletFeel && (t.swingRhythm = !0),
		n.alternateEnding && (t.alternateEnding = !0),
		n.voices))
			if (!i.rest) {
				for (let r of i.beats)
					if (
						(r.letRing && (t.letRing = !0),
						3 === r.tuplet && (t.triplet = !0),
						r.dotted && (t.dot = !0),
						(r.upStroke || r.downStroke) && (t.upDownStroke = !0),
						r.palmMute && (t.palmMute = !0),
						r.chord && (t.chord = !0),
						r.wideVibrato && (t.wideVibrato = !0),
						r.tapping && (t.tapping = !0),
						r.notes)
					)
						for (let a of r.notes)
							a.hp && ((t.hammerOn = !0), (t.pullOff = !0)),
								a.tie && (t.tie = !0),
								a.bend &&
									(a.bend.points[0].tone > a.bend.points[1].tone &&
										(t.releaseBend = !0),
									(t.bend = !0)),
								a.ghost && (t.ghostNote = !0),
								a.dead && (t.deadNote = !0),
								a.vibrato && (t.vibrato = !0),
								a.rightSlide &&
									("legato" !== a.rightSlide
										? (t.legatoSlide = !0)
										: (t.slide = !0)),
								"natural" === a.harmonic && (t.naturalHarmonic = !0),
								"pinch" === a.harmonic && (t.pinchHarmonic = !0),
								1 === a.accentuated && (t.accented = !0),
								2 === a.accentuated && (t.heavyAccented = !0),
								a.staccato && (t.staccato = !0),
								a.tremolo && (t.tremolo = !0);
			}
	return t;
}
function c8(e, t, n) {
	if (!t) return !1;
	let i = e;
	return (
		void 0 === i && ((i = c3(t)), n("tabFeatures/set", { features: i })), i
	);
}
let c6 = (e) => {
		e.on("tabFeatures/set", (e, t) => {
			let { features: n } = t;
			return { tabFeatures: n };
		}),
			e.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
	},
	c9 = [
		"touchstart",
		"click",
		"scroll",
		"mousewheel",
		"mousemove",
		"mousedown",
	],
	c7 = (e) => e && e.replace(/["'=!+#*~;^()<>[\],&]/gi, "");
async function ue() {
	return "off" === window.__ADS__
		? null
		: Promise.all([
				lN(
					"https://www.googletagservices.com/tag/js/gpt.js",
					"__LOADED_GTP__"
				).catch(() => {}),
				lN(
					"https://cdn-b.notsy.io/sng/" +
						("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
					"__LOADED_NOTSY__"
				),
		  ]);
}
function ut(e) {
	let {
		route: t,
		block: n,
		options: i,
		personalization: r,
		songId: a,
		artist: s,
		song: o,
		device: l,
		experiments: c,
	} = e;
	if (!i.isForced && t.page !== i.page) return;
	let u = [];
	if (i.isTargeted) {
		var d, p;
		a && u.push(["songID", a]),
			s && u.push(["artist", s]),
			o && u.push(["song", o]),
			(null === (d = c.banner_later) || void 0 === d ? void 0 : d.status) ===
				"active" &&
				u.push([
					"banner_later",
					null === (p = c.banner_later) || void 0 === p ? void 0 : p.segment,
				]);
	}
	let h = { page: n, npa: !r, targeting: u, gdpr: l.hasGDPR };
	(l.hasGDPR && l.hasCCPA) || (h.country = l.country), window.notsyInit(h);
}
async function un(e) {
	try {
		await ue(), e("notsy/load:done", { loaded: window.__LOADED_NOTSY__ });
	} catch (t) {
		e("notsy/load:error");
	}
}
function ui(e, t) {
	let {
			dispatch: n,
			ads: i,
			meta: r,
			chords: a,
			route: s,
			routeContent: o,
		} = lk("ads", "meta", "chords", "route", "routeContent"),
		l = window.__HAS_BEEN_SEEN_BEFORE__ || s1.hasFirstActivity,
		[c, u] = d(l);
	f(() => {
		if (!c) {
			let e = () => {
				u(!0), c9.forEach((t) => window.removeEventListener(t, e));
			};
			return (
				c9.forEach((t) => window.addEventListener(t, e)),
				() => c9.forEach((t) => window.removeEventListener(t, e))
			);
		}
	}, [c]),
		f(() => {
			if (!c || i.notsyFailed) return;
			if (!i.notsyLoaded) {
				n("notsy/load");
				return;
			}
			if ("tab" === s.page) {
				let { songId: l } = s;
				if (r.loading || +l !== r.songId) return;
			}
			if ("chords" === s.page) {
				let { songId: u } = s;
				if (a.loading || +u !== a.songId) return;
			}
			let d = {
				route: s,
				block: e,
				options: t,
				personalization: !0,
				songId: 0,
				artist: "",
				song: "",
			};
			"tab" === o.page &&
				((d.artist = c7(r.current && r.current.artist)),
				(d.song = c7(r.current && r.current.title)),
				(d.songId = r.songId)),
				"chords" === o.page &&
					((d.artist = c7(a.current && a.current.artist)),
					(d.song = c7(a.current && a.current.title)),
					(d.songId = a.songId)),
				n("notsy/fire", d);
		}, [i, e, c, r, a, t, s, o]);
}
let ur = "plusBannerState",
	ua = 3e4,
	us = 12e4,
	uo = 2e4,
	ul = null;
function uc(e, t) {
	var n, i;
	let r = Date.now(),
		a =
			(null === (n = t.banner_later) || void 0 === n ? void 0 : n.segment) ===
			"on",
		s = a ? 2e4 : 12e4,
		o = sW(ur) || { type: "ads", activated: null, activations: [] },
		l = o.activations.filter((e) => e > r - 864e5),
		c = (e) => sq(ur, e);
	if (!o.activated)
		return (
			setTimeout(() => {
				var n;
				(null === (n = t.banner_later) || void 0 === n ? void 0 : n.status) ===
					"pending" &&
					e("experiments/activate", { experimentName: "banner_later" });
			}, 2e4),
			c({ type: "ads", activated: r, activations: [] }),
			{ type: "ads", timeout: s }
		);
	if (l.length < 3) {
		(null === (i = t.banner_later) || void 0 === i ? void 0 : i.status) ===
			"pending" &&
			o.activated + 2e4 > r &&
			e("experiments/activate", { experimentName: "banner_later" });
		let u = l[l.length - 1] || o.activated,
			d = r - u,
			p = 0 === o.activations.length && "ads" === o.type,
			h = "plus" === o.type ? 3e4 : 12e4,
			f = p ? s : h;
		if (f > d) return { type: o.type, timeout: f - d };
		let g = 12e4,
			m = "ads" === o.type ? "plus" : "ads";
		return (
			"plus" === m && ((g = 3e4), l.push(r)),
			c({ ...o, type: m, activations: l }),
			{ type: m, timeout: g }
		);
	}
	return (
		c({ ...o, type: "ads", activations: l }), { type: "ads", timeout: 12e4 }
	);
}
function uu(e, t) {
	let n = "tab" !== t.route.page && "chords" !== t.route.page,
		i = !t.experiments.banner_later,
		r = t.ads.notsyFailed;
	if (n || i || r) {
		ul && clearTimeout(ul);
		return;
	}
	let a = uc(e, t.experiments);
	a.timeout && (ul = setTimeout(() => e("ads/plus"), a.timeout));
	let s = !t.ads.notsyFailed && "plus" === a.type;
	if (s !== t.ads.showPlusBanner)
		return { ads: { ...t.ads, showPlusBanner: s } };
}
let ud = (e) => {
	e.on("notsy/load", () => un(e.dispatch)),
		e.on("notsy/load:done", (e, t) => {
			let { loaded: n } = t;
			return { ads: { ...e.ads, notsyLoaded: n, notsyFailed: !n } };
		}),
		e.on("notsy/load:error", (e) => ({
			ads: { ...e.ads, notsyLoaded: !1, notsyFailed: !0 },
		})),
		e.on("notsy/fire", (e, t) => {
			ut({ ...t, device: e.device, experiments: e.experiments });
		}),
		e.on("consent/view", (t) => uu(e.dispatch, t)),
		e.on("navigate", (t) => uu(e.dispatch, t)),
		e.on("user/signOut", (t) => uu(e.dispatch, t)),
		e.on("ads/plus", (t) => uu(e.dispatch, t));
};
function up(e, t) {
	let n = new AudioContext(),
		i = n.createMediaStreamDestination(),
		r = !1,
		a = !1;
	if (e && e.getAudioTracks().length > 0) {
		let s = n.createGain();
		(s.gain.value = 0.7),
			n.createMediaStreamSource(e).connect(s).connect(i),
			(r = !0);
	}
	return (
		t &&
			t.getAudioTracks().length > 0 &&
			(n.createMediaStreamSource(t).connect(i), (a = !0)),
		r || a ? i.stream.getAudioTracks() : []
	);
}
let uh = (e) =>
		new Promise((t, n) => {
			let i = 0,
				r = setInterval(() => {
					i > 9
						? (clearInterval(r), n(Error("Max number of attempts")))
						: e.readyState === e.OPEN && (clearInterval(r), t()),
						i++;
				}, 200);
		}),
	uf = async (e, t) => {
		e.readyState !== e.OPEN && (await uh(e)), e.send(t);
	},
	ug = "wss://curiosity.songsterr.com/ut/";
function um(e) {
	try {
		e.stop();
	} catch (t) {
		console.error(t);
	}
}
function uy(e) {
	try {
		e.close();
	} catch (t) {
		console.error(t);
	}
}
class uv {
	constructor(e) {
		(this.state = "ready"),
			(this.handlers = e),
			(this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
			(this.socket.onclose = this.onSocketClose),
			(this.socket.onerror = this.onError);
	}
	cleanup() {
		this.audioVideoStream && this.audioVideoStream.getTracks().forEach(um),
			this.voiceStream && this.voiceStream.getTracks().forEach(um);
	}
	onSocketClose = () => {
		console.log("socket closed"),
			("ready" === this.state || "active" === this.state) &&
				((this.state = "stopped"), this.cleanup(), this.handlers.onClose());
	};
	onError = (e) => {
		("ready" === this.state || "active" === this.state) &&
			((this.state = "failed"),
			this.cleanup(),
			uy(this.socket),
			this.handlers.onError(e));
	};
	onTrackEnded = () => {
		("ready" === this.state || "active" === this.state) &&
			((this.state = "stopped"),
			this.cleanup(),
			uy(this.socket),
			this.handlers.onTurnedOff());
	};
	async connect(e, t, n, i) {
		try {
			for (let r of ((this.audioVideoStream =
				await navigator.mediaDevices.getDisplayMedia({ audio: !0, video: !0 })),
			this.audioVideoStream.getTracks()))
				r.onended = this.onTrackEnded;
			for (let a of ((this.voiceStream =
				await navigator.mediaDevices.getUserMedia({ video: !1, audio: !0 })),
			this.voiceStream.getTracks()))
				a.onended = this.onTrackEnded;
			let s = new RTCPeerConnection(null),
				o = new MediaStream([
					...this.audioVideoStream.getVideoTracks(),
					...up(this.audioVideoStream, this.voiceStream),
				]);
			for (let l of o.getTracks()) s.addTrack(l, o);
			let c = await s.createOffer({
				OfferToReceiveAudio: !1,
				OfferToReceiveVideo: !1,
			});
			s.setLocalDescription(c),
				(this.socket.onmessage = async (e) => {
					try {
						let t = JSON.parse(e.data);
						await s.setRemoteDescription(
							new RTCSessionDescription({ type: "answer", sdp: t.answer })
						),
							(this.state = "active"),
							this.handlers.onReady();
					} catch (n) {
						this.onError(n);
					}
				});
			let u = {};
			for (let d of Object.keys(n))
				"active" === n[d].status && (u[d] = n[d].segment);
			await uf(
				this.socket,
				JSON.stringify({
					cmd: "OFFER",
					offer: c.sdp,
					ticket: e,
					email: t,
					properties: u,
					stage: window.__STAGE__,
					isAdditional: i,
				})
			);
		} catch (p) {
			this.onError(p);
		}
	}
	async sendEmail(e) {
		await uf(this.socket, JSON.stringify({ cmd: "EMAIL", email: e }));
	}
	stop() {
		("ready" === this.state || "active" === this.state) &&
			((this.state = "stopped"),
			this.cleanup(),
			uy(this.socket),
			this.handlers.onStop());
	}
}
async function ub(e) {
	let t = await fetch(e5(`/actions/usertest/${e}/ticket`), { method: "POST" });
	return sy(t), t.json();
}
async function uw(e) {
	let t = await fetch(e5(`/api/usertest/${e}`));
	return sy(t), t.json();
}
async function uS(e) {
	let t = JSON.stringify({ token: e.token }),
		n = await fetch(e5("/actions/usertest/ticket"), {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: t,
		});
	return sy(n), n.json();
}
function uC(e) {
	try {
		navigator.sendBeacon("/actions/usertest/ticket/idle", e.token);
	} catch (t) {
		console.log(t);
	}
}
let uk = "hidden",
	ux = "intro",
	uE = "questions",
	uT = "not_chosen",
	u_ = "email",
	uP = "feedback",
	uL = "start",
	uA = "instructions",
	uN = "restart",
	uI = "survey",
	uM = "farewell";
function uB() {
	window.removeEventListener("visibilitychange", t),
		n && (clearTimeout(n), (n = null));
}
let uD = { ignoreDailyTimespan: !0, ignoreSingleAppearance: !0 };
async function uz(e, i) {
	let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
	try {
		let a = await ub(i);
		try {
			let s = await uw(i);
			return (
				e("ut/ticket", { ticket: a, script: s }),
				(n = setTimeout(() => {
					e("ut/idle");
				}, 6e4 + r)),
				(t = () => {
					let n;
					document.hidden
						? (n = setTimeout(() => {
								uC(a),
									e("ut/idle"),
									window.removeEventListener("visibilitychange", t);
						  }, 3e4))
						: clearTimeout(n);
				}),
				window.addEventListener("visibilitychange", t),
				{ ticket: a, script: s }
			);
		} catch (o) {
			await uO(e, a);
		}
	} catch (l) {
		console.error(l);
	}
}
async function uO(e, t) {
	try {
		await uS(t), e("ut/ticket:dismiss");
	} catch (n) {
		console.error(n);
	}
}
function uR(e) {
	try {
		let { recorder: t, ticket: n, script: i } = e.get().ut;
		t && t.stop(),
			e.dispatch("curiosity/event", {
				event: "UT Recorded",
				name: i.name,
				URL: n.urlToGet,
			});
	} catch (r) {
		console.error(r);
	}
}
async function u$(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = e.get();
	if ("ready" === n.ut.recorderState || "failed" === n.ut.recorderState)
		try {
			let i = new uv({
				onReady: () => e.dispatch("ut/start:done"),
				onStop: () => e.dispatch("ut/stop:done"),
				onClose: () => e.dispatch("ut/stop:closed"),
				onTurnedOff: () => e.dispatch("ut/stop:turnedOff"),
				onError: (t) => e.dispatch("ut/error", t),
			});
			e.dispatch("ut/start:processing", i), (n = e.get());
			let r = n.user,
				a =
					n.ut.email ||
					(r.isLoggedIn ? r.profile.email : "anonymous@songsterr.com");
			await i.connect(n.ut.ticket, a, n.experiments, t);
		} catch (s) {
			console.error(s), e.dispatch("ut/error", s);
		}
}
function uF(e, t) {
	uH(e, t);
	let n = t.startUrl || "/";
	(n = n.includes("?") ? `${n}&ut=on` : `${n}?ut=on`),
		(window.location.href = n);
}
function uH(e, t) {
	sX.set("utTicket", e), sX.set("utScript", t);
}
function uV() {
	let e = sX.get("utTicket"),
		t = sX.get("utScript");
	return { ticket: e, script: t };
}
let uj = (e) => {
		e.on("@init", () => ({
			ut: {
				recorderState: "ready",
				recorder: void 0,
				ticket: void 0,
				script: void 0,
				stage: uk,
				email: void 0,
				steps: { [uE]: 0, [uA]: 0, [uI]: 0 },
				isAdditional: !1,
				isClosing: !1,
				isHidden: !1,
			},
		})),
			e.on("ut/close", (e, t) => ({ ut: { ...e.ut, isClosing: t } })),
			e.on("ut/hide", (e, t) => ({ ut: { ...e.ut, isHidden: t } })),
			e.on("ut/ticket", (e, t) => {
				let { ticket: n, script: i } = t;
				return { ut: { ...e.ut, ticket: n, script: i } };
			}),
			e.on("ut/ticket:dismiss", (e) => ({ ut: { ...e.ut, ticket: void 0 } })),
			e.on("ut/email", (t, n) => {
				var i;
				let { name: r } = t.ut.script;
				return (
					e.dispatch("curiosity/event", {
						event: "UT Email Submitted",
						name: r,
						email: n,
					}),
					null === (i = t.ut.recorder) || void 0 === i || i.sendEmail(n),
					{ ut: { ...t.ut, email: n, stage: uA } }
				);
			}),
			e.on("ut/continue", (t, n) => {
				if (n) {
					e.dispatch("ut/load", n), uH();
					return;
				}
				let { ticket: i, script: r } = uV();
				if (i && r) {
					if (!cM(tA.UT_RECORDER, uD)) return;
					return (
						e.dispatch("curiosity/event", {
							event: "UT Recording Requested",
							name: r.name,
						}),
						{ ut: { ...t.ut, ticket: i, script: r, stage: uL } }
					);
				}
			}),
			e.on("ut/load", async (t, n) => {
				let i = await uz(e.dispatch, n);
				e.dispatch("curiosity/event", {
					event: "UT Recording Requested",
					name: n,
				}),
					i &&
						(null == i ? void 0 : i.script) &&
						e.dispatch("ut/load:done", uL);
			}),
			e.on("ut/feedbackLoad", async (t, n) => {
				let i = await uz(e.dispatch, n);
				i && i.script && e.dispatch("ut/load:done", uP);
			}),
			e.on("ut/load:done", (e, t) => {
				if (cM(tA.UT_RECORDER, uD)) return { ut: { ...e.ut, stage: t } };
			}),
			e.on("ut/start", (t) => {
				uB(), u$(e, t.ut.isAdditional);
			}),
			e.on("ut/start:done", (t) => {
				let n,
					{ ut: i, user: r } = t;
				uH();
				let { name: a, emailRequest: s } = i.script;
				return (
					!s || r.isLoggedIn
						? ((n = uA),
						  e.dispatch("curiosity/event", {
								event: "UT Instructions Shown",
								name: a,
						  }))
						: ((n = u_),
						  e.dispatch("curiosity/event", {
								event: "UT Email Requested",
								name: a,
						  })),
					{
						ut: {
							...i,
							recorderState: "active",
							recorder: i.recorder,
							stage: n,
						},
					}
				);
			}),
			e.on("ut/start:processing", (e, t) => ({
				ut: { ...e.ut, recorderState: "starting", recorder: t },
			})),
			e.on("ut/terminate", (t) => {
				let { ut: n } = t;
				switch ((cL(tA.UT_RECORDER), n.stage)) {
					case ux:
					case uE:
						uO(e.dispatch, n.ticket);
						break;
					case uL:
						uO(e.dispatch, n.ticket), uH(), e.dispatch("navigate", "/");
						break;
					case u_:
					case uA:
					case uN:
					case uI:
						uO(e.dispatch, n.ticket), uR(e), e.dispatch("navigate", "/");
				}
				return (
					e.dispatch("curiosity/event", {
						event: "UT Session Finished",
						name: null == n ? void 0 : n.script.name,
					}),
					{
						ut: {
							recorderState: "ready",
							recorder: void 0,
							ticket: void 0,
							script: void 0,
							stage: uk,
							email: void 0,
							steps: { [uE]: 0, [uA]: 0, [uI]: 0 },
							isAdditional: !1,
							isClosing: !1,
							isHidden: !1,
						},
					}
				);
			}),
			e.on("ut/idle", (t) => {
				let { ut: n, screener: i } = t;
				return (
					e.dispatch("screener/dismiss", i.active),
					{
						ut: {
							...n,
							recorderState: "ready",
							recorder: void 0,
							script: void 0,
							stage: uk,
							email: void 0,
							steps: { [uE]: 0, [uA]: 0, [uI]: 0 },
							isAdditional: !1,
							isClosing: !1,
							isHidden: !1,
						},
					}
				);
			}),
			e.on(
				"ut/error",
				(t, n) => (
					e.dispatch("curiosity/event", { event: "UT Error", message: n }),
					{ ut: { ...t.ut, recorderState: "failed", recorder: void 0 } }
				)
			),
			e.on("ut/stop:done", (e) => ({
				ut: { ...e.ut, recorderState: "ready", recorder: void 0 },
			})),
			e.on("ut/stop:closed", (e) => ({
				ut: { ...e.ut, recorderState: "ready", recorder: void 0 },
			})),
			e.on("ut/stop:turnedOff", (e) => ({
				ut: {
					...e.ut,
					recorderState: "ready",
					recorder: void 0,
					stage: uN,
					isAdditional: !0,
				},
			})),
			e.on("ut/stage", (t, n) => {
				let { ut: i } = t,
					{ stage: r, step: a } = n,
					{ ticket: s, script: o } = i;
				switch (r) {
					case uM:
						uR(e),
							e.dispatch("curiosity/event", {
								event: "UT End Dialog Shown",
								name: null == i ? void 0 : i.script.name,
								domain: window.location.hostname,
							});
						break;
					case uT:
						uO(e.dispatch, s);
						break;
					case uE:
						if (o.questions && o.questions.length && !(a >= o.questions.length))
							e.dispatch("curiosity/event", {
								event: "UT Question Shown",
								name: null == i ? void 0 : i.script.name,
								question: o.questions[a],
							});
						else {
							uF(s, o);
							return;
						}
				}
				return {
					ut: {
						...i,
						stage: r,
						steps: void 0 !== a ? { ...i.steps, [r]: a } : i.steps,
					},
				};
			}),
			e.on("screener/dismiss", (t) => {
				let { ut: n } = t;
				n.ticket && (uB(), uO(e.dispatch, n.ticket));
			}),
			e.on("screener/accept", (e, t) => {
				let { screener: n } = t;
				if (n.usertest) {
					let { script: i, ticket: r } = e.ut;
					if (!i || !r || !cM(tA.UT_RECORDER, uD)) return;
					let a = ux;
					if (i && !i.intro) {
						if (i.questions && i.questions.length) a = uE;
						else {
							uF(r, i);
							return;
						}
					}
					return (
						uB(),
						{
							ut: {
								...e.ut,
								stage: a,
								steps: { [uE]: 0, [uA]: 0, [uI]: 0 },
								isAdditional: !1,
							},
						}
					);
				}
			});
	},
	uU = "EE_STORAGE",
	uG = (e) => {
		let t = lV(uU) || [];
		Array.isArray(t) || (t = []);
		let n = t.find((t) => t.experiment === e);
		return (null == n ? void 0 : n.date)
			? Math.floor((new Date() - new Date(n.date)) / 864e5)
			: null;
	},
	uW = (e) => {
		let t = lV(uU) || [];
		Array.isArray(t) || (t = []);
		let n = sW(uU) || [];
		Array.isArray(n) || (n = []),
			n.length && "string" == typeof n[0] && (n = [...t]);
		let i = t.find((t) => t.experiment === e);
		i ||
			(t.push({ experiment: e, date: new Date() }), lU(uU, JSON.stringify(t)));
		let r = n.find((t) => t.experiment === e);
		return (
			r || (n.push({ experiment: e, date: new Date() }), sq(uU, n)), !!(i || r)
		);
	};
async function uq() {
	let e = e5("/api/screeners/decide"),
		t = await fetch(e, { credentials: "include" });
	return sy(t), t.json();
}
function uX(e) {
	return (e.current && e.current.tracks && e.current.tracks[e.partId]) || null;
}
let uY = "ScrShwn";
async function uK(e) {
	try {
		let t = await uq(),
			n = e.get();
		(t = t.filter((e) => {
			let t = e.filter.visitedFirstTime;
			if (
				"unset" !== t &&
				(("yes" === t && window.__HAS_BEEN_SEEN_BEFORE__) ||
					("no" === t && !window.__HAS_BEEN_SEEN_BEFORE__))
			)
				return !1;
			let i = e.filter.experiment;
			if (i) {
				var r, a;
				let [s, o] = i.split(" "),
					[l, c] = s.split("=");
				if (
					(null === (r = n.experiments[l]) || void 0 === r
						? void 0
						: r.status) !== "active"
				)
					return !1;
				if (o) {
					let [u, d] = o.split("<days<"),
						p = uG(l);
					if (null !== p && !(p >= +u && p <= +d)) return !1;
				}
				return (
					void 0 === c ||
					(null === (a = n.experiments[l]) || void 0 === a
						? void 0
						: a.segment) === c
				);
			}
			return !0;
		})).length && e.dispatch("screener/loaded", t);
	} catch (i) {
		window.Sentry.captureException(i), console.error(i);
	}
}
function uJ(e) {
	let t = new Date();
	t.setTime(t.getTime() + 7776e6),
		(document.cookie = `ScrShwn-${
			e.cookie
		}=true;expires=${t.toUTCString()};path=/`);
}
async function uZ(e, t) {
	let n = e.get(),
		r = [];
	for (let a of n.screener.candidates) {
		let s = a.filter.bassPage,
			o = uX(n.meta);
		if (
			"unset" !== s &&
			(!o || ("yes" === s && !o.isBassGuitar) || ("no" === s && o.isBassGuitar))
		)
			continue;
		let l = a.filter.drumsPage;
		("unset" === l ||
			(o && ("yes" !== l || o.isDrums) && ("no" !== l || !o.isDrums))) &&
			(!a.filter.showAfterAction ||
				(t.event && a.filter.showAfterAction === t.event)) &&
			r.push(a);
	}
	if (r.length) {
		let c = r[Math.floor(Math.random() * r.length)];
		if (c.usertest) {
			var u;
			let d =
					1e3 *
					((null === (u = c.filter) || void 0 === u ? void 0 : u.delay) || 0),
				p = await uz(e.dispatch, c.usertest, d);
			if (!p) return;
		}
		if ((clearTimeout(i), c.filter.delay)) {
			i = setTimeout(() => {
				cM(tA.SCREENER) && e.dispatch("screener/set", c);
			}, 1e3 * c.filter.delay);
			return;
		}
		cM(tA.SCREENER) && e.dispatch("screener/set", c);
	}
}
function uQ(e, t) {
	let n = e.get();
	n.screener.candidates.length && tu(() => uZ(e, { event: t }));
}
let u1 = (e) => {
	e.on(
		"screener/set",
		(e, t) => (
			t && uJ(t), { screener: { ...e.screener, candidates: [], active: t } }
		)
	),
		e.on(
			"screener/loaded",
			(t, n) => (
				tu(() => uZ(e, {})),
				{ screener: { ...t.screener, candidates: n, active: void 0 } }
			)
		),
		e.on("screener/dismiss", (e) => {
			let { screener: t } = e;
			return (
				cL(tA.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
			);
		}),
		e.on("screener/accept", (e) => {
			let { screener: t } = e;
			return (
				cL(tA.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
			);
		});
	let t = (t, n) => {
		let { event: i } = n;
		t.screener.candidates.length && tu(() => uZ(e, { event: i }));
	};
	e.on("curiosity/conversion", t),
		e.on("curiosity/event", t),
		e.on("curiosity/vpt10", (t) => {
			t.screener.candidates.length &&
				tu(() => uZ(e, { event: "Viewed player tab for 10 minutes" }));
		}),
		e.on("screener/pressedEditor", () => uQ(e, "PressedEditor"));
};
async function u0(e) {
	let t = e5("/api/textpage/" + e),
		n = await fetch(t);
	return sy(n), n.json();
}
async function u2(e, t) {
	let n = e.get().textpage;
	if (n.slug !== t || n.isError)
		try {
			e.dispatch("textpage/load:processing", t);
			let i = await u0(t);
			i.slug === e.get().textpage.slug && e.dispatch("textpage/load:done", i);
		} catch (r) {
			console.error(r),
				t === e.get().textpage.slug && e.dispatch("textpage/load:error");
		}
}
let u5 = (e) => {
	e.on("textpage/load:processing", (e, t) => ({
		textpage: { slug: t, title: "", content: "", isLoading: !0, isError: !1 },
	})),
		e.on("textpage/load:done", (e, t) => ({
			textpage: { ...t, isLoading: !1, isError: !1 },
		})),
		e.on("textpage/load:error", (e) => ({
			textpage: {
				...e.textpage,
				title: "",
				content: "",
				isLoading: !1,
				isError: !0,
			},
		}));
};
async function u4() {
	let e = e5("/api/faq/compact"),
		t = await fetch(e);
	sy(t);
	let n = await t.json();
	return n.filter((e) => e.isSRW);
}
async function u3(e) {
	if (void 0 === e.get().faq.content)
		try {
			e.dispatch("faq/load:processing");
			let t = await u4();
			e.dispatch("faq/load:done", t);
		} catch (n) {
			console.error(n), e.dispatch("faq/load:error");
		}
}
let u8 = (e) => {
		e.on("faq/load:processing", () => ({
			faq: { content: void 0, isLoading: !0, isError: !1 },
		})),
			e.on("faq/load:done", (e, t) => {
				var n;
				let { experiments: i } = e;
				if (
					(null === (n = i.auto_fingerings) || void 0 === n
						? void 0
						: n.segment) !== "ut"
				) {
					let r = t.find((e) => "Miscellaneous" === e.section);
					r &&
						(r.records = r.records.filter(
							(e) => 'What is the "Guitar Fingering" beta?' !== e.question
						));
				}
				return { faq: { content: t, isLoading: !1, isError: !1 } };
			}),
			e.on("faq/load:error", () => ({
				faq: { content: void 0, isLoading: !1, isError: !0 },
			}));
	},
	u6 = ["chordpro1", "chordpro2", "chordpro3"];
async function u9(e, t, n) {
	let i = `/api/chords/${e}${t ? `/${t}` : ""}`,
		r = await tn(() => e5(i), "meta", n);
	return n.aborted || !r ? null : (r.title && (r.title = nh(r.title)), r);
}
async function u7(e, t, n, i) {
	let r =
			arguments.length > 4 && void 0 !== arguments[4]
				? arguments[4]
				: { Accept: "text/plain" },
		a = `chordpro_${t}_${n || ""}`,
		s = await tl(a);
	if (s && s.data) return s.data;
	let o = `${e}/${t}/${n}.chordpro`,
		l = (e) => {
			let t = (e % u6.length) + 1;
			return t < u6.length
				? `https://${u6[t]}.songsterr.com/${o}`
				: `https://www.songsterr.com/cdn/chordpro/${o}`;
		},
		c = await tn(l, "chordpro", i, r);
	return !c || i.aborted ? null : (await tc(a, { data: c }), c);
}
function de(e) {
	let t = e.get().chords;
	t.current &&
		!t.isFailed &&
		e.dispatch("chords/load:done", {
			songId: t.songId,
			chordsRevisionId: t.chordsRevisionId,
			current: t.current,
		});
}
async function dt(e, t, n) {
	let i = new tI();
	try {
		let r = e.get().chords,
			a = r.loading;
		a && a.ac.abort();
		let s = r.songId !== t,
			o = r.chordsRevisionId !== n;
		if (!r.isFailed && r.current && !s && !o) {
			await e.dispatch("chords/load:done", {
				songId: t,
				chordsRevisionId: n,
				current: r.current,
			});
			return;
		}
		if (
			(await e.dispatch("chords/load:processing", {
				songId: t,
				chordsRevisionId: n,
				songHasChanged: s,
				chordsRevisionHasChanged: o,
				ac: i,
			}),
			i.signal.aborted)
		)
			return;
		let l = e.get().chords.current;
		if (
			(!l || l.songId !== t || (n && l.chordsRevisionId !== n)) &&
			((l = await u9(t, n, i.signal)), i.signal.aborted || !l)
		)
			return;
		await e.dispatch("chords/load:done", {
			songId: t,
			chordsRevisionId: n,
			current: l,
		});
	} catch (c) {
		if (i.signal.aborted) return;
		e.dispatch("chords/load:error", {
			songId: t,
			chordsRevisionId: n,
			error: c,
		});
	}
}
let dn = (e) => {
		e.on("chords/load:processing", (e, t) => {
			let { songId: n, chordsRevisionId: i, ac: r } = t;
			return {
				chords: {
					...e.chords,
					loading: { songId: n, chordsRevisionId: i, ac: r },
				},
			};
		}),
			e.on("chords/load:done", (e, t) => {
				let { songId: n, chordsRevisionId: i, current: r } = t;
				return {
					chords: {
						...e.chords,
						current: r,
						songId: n,
						chordsRevisionId: i,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("chords/load:error", (e, t) => {
				let { songId: n, chordsRevisionId: i, error: r } = t;
				return {
					chords: {
						...e.chords,
						current: null,
						songId: n,
						chordsRevisionId: i,
						isFailed: !0,
						isNetworkFailed: r instanceof e7 && 0 === r.status,
						isNotFound:
							r instanceof e7 && (404 === r.status || 400 === r.status),
						loading: null,
					},
				};
			}),
			e.on("route/change", (t, n) => {
				let { routeContent: i } = n;
				i && "chords" === i.page && dt(e, i.songId, i.chordsRevisionId);
			});
	},
	di = (e) => {
		e.on("chords/load:done", async (t, n) => {
			let { current: i } = n,
				r = i.songId,
				a = i.chordsRevisionId,
				s = new tI();
			try {
				let o = t.chordpro.loading;
				if (o) {
					if (r === o.songId && a === o.chordsRevisionId) return;
					o.ac.abort();
				}
				if (
					!t.chordpro.isFailed &&
					t.chordpro.current &&
					r === t.chordpro.songId &&
					a === t.chordpro.chordsRevisionId
				) {
					e.dispatch("chordpro/load:done", {
						songId: r,
						chordsRevisionId: a,
						current: t.chordpro.current,
					});
					return;
				}
				await e.dispatch("chordpro/load:processing", {
					songId: r,
					chordsRevisionId: a,
					ac: s,
				});
				let l = await u7(r, a, i.chordpro, s.signal);
				if (!l || s.signal.aborted) return;
				await e.dispatch("chordpro/load:raw", {
					songId: r,
					chordsRevisionId: a,
					chordpro: l,
					signal: s.signal,
				});
			} catch (c) {
				if ((console.log("chordpro error", s.signal.aborted), s.signal.aborted))
					return;
				await e.dispatch("chordpro/load:error", {
					songId: r,
					chordsRevisionId: a,
					error: c,
				});
			}
		}),
			e.on("chordpro/load:processing", (e, t) => {
				let { songId: n, chordsRevisionId: i, ac: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						loading: { songId: n, chordsRevisionId: i, ac: r },
					},
				};
			}),
			e.on("chordpro/load:raw", async (t, n) => {
				let { songId: i, chordsRevisionId: r, chordpro: a } = n;
				try {
					let s = (await import("./split.31888747.js")).split,
						o = s(a);
					e.dispatch("chordpro/load:done", {
						songId: i,
						chordsRevisionId: r,
						current: o,
					});
				} catch (l) {
					e.dispatch("chordpro/load:error", {
						songId: i,
						chordsRevisionId: r,
						error: l,
					});
				}
			}),
			e.on("chordpro/load:done", (e, t) => {
				let { songId: n, chordsRevisionId: i, current: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						current: r,
						songId: n,
						chordsRevisionId: i,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
						loading: null,
					},
				};
			}),
			e.on("chordpro/load:error", (e, t) => {
				let { songId: n, chordsRevisionId: i, error: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						current: null,
						songId: n,
						chordsRevisionId: i,
						isFailed: !0,
						isNetworkFailed: r instanceof e7 && 0 === r.status,
						isNotFound:
							r instanceof e7 && (404 === r.status || 400 === r.status),
						loading: null,
					},
				};
			}),
			e.on("chords/load:processing", (e, t) => ({
				chordpro: { ...e.chordpro, current: null },
			})),
			e.on("chordpro/load:error", (e, t) => {
				let { error: n } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(n),
					console.error(n);
			});
	},
	dr = (e) => {
		e.on("cursor/failed", () => ({ cursor: { isFailed: !0 } })),
			e.on("cursor/failed", (e, t) => {
				let { error: n } = t;
				try {
					"Sentry" in window &&
						"function" == typeof window.Sentry.captureException &&
						window.Sentry.captureException(n);
				} catch (i) {}
				console.error(n);
			}),
			e.on("meta/load:processing", (e, t) => {
				let { songHasChanged: n } = t;
				if (n && e.cursor && e.cursor.isFailed)
					return { cursor: { isFailed: !1 } };
			}),
			e.on("part/load:done", (e) => {
				if (e.cursor && e.cursor.isFailed) return { cursor: { isFailed: !1 } };
			});
	};
async function da(e, t, n) {
	let i;
	i =
		"tags" === e.page
			? `/api/next/tags${t.page ? `?page=${t.page}` : ""}`
			: `/api/next/tags/${e.name}${t.page ? `?page=${t.page}` : ""}`;
	let r = await tn(() => e5(i), "tags", n);
	return n.aborted || !r ? null : r;
}
function ds(e, t) {
	return (
		!!t &&
		(("tag" === e.page && "tag" === t.page && e.name === t.name) ||
			("tags" === e.page && "tags" === t.page))
	);
}
function dl(e, t) {
	return (!e.page && !t.page) || e.page === t.page;
}
async function dc(e, t, n) {
	let i = new tI();
	try {
		let r = e.get().tags,
			a = r.loading;
		if ((a && a.ac.abort(), ds(t, r.route) && dl(n, r.query))) {
			await e.dispatch("tags/load:done", {
				route: t,
				query: n,
				content: r.content,
			});
			return;
		}
		if (
			(await e.dispatch("tags/load:processing", { route: t, query: n, ac: i }),
			i.signal.aborted)
		)
			return;
		let s = await da(t, n, i.signal);
		await e.dispatch("tags/load:done", { route: t, query: n, content: s });
	} catch (o) {
		if (i.signal.aborted) return;
		console.error(o),
			await e.dispatch("tags/load:error", { route: t, query: n, error: o });
	}
}
let du = (e) => {
		e.on("route/change", (t, n) => {
			let { routeContent: i, queryContent: r } = n;
			i && ("tag" === i.page || "tags" === i.page) && dc(e, i, r || {});
		}),
			e.on("tags/load:processing", (e, t) => {
				let { route: n, query: i, ac: r } = t;
				return { tags: { ...e.tags, loading: { route: n, query: i, ac: r } } };
			}),
			e.on("tags/load:done", (e, t) => {
				let { route: n, query: i, content: r } = t;
				return {
					tags: {
						...e.tags,
						content: r,
						route: n,
						query: i,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("tags/load:error", (e, t) => {
				let { route: n, query: i, error: r } = t;
				return {
					tags: {
						...e.tags,
						current: null,
						route: n,
						query: i,
						loading: null,
						isFailed: !0,
						isNetworkFailed: r instanceof e7 && 0 === r.status,
						isNotFound:
							r instanceof e7 && (404 === r.status || 400 === r.status),
					},
				};
			}),
			e.on("tags/load:error", (e, t) => {
				let { error: n } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(n),
					console.error(n);
			});
	},
	dd = (e) => {
		e.on("chords/load:processing", () => ({ chordDiagram: [] })),
			e.on("chordDiagram/clear", () => ({ chordDiagram: [] })),
			e.on("chordDiagram/open", (e, t) => {
				let n = e.chordDiagram.find((e) => e.chord === t.chord);
				return n
					? { chordDiagram: e.chordDiagram.filter((e) => e !== n) }
					: { chordDiagram: [...e.chordDiagram, t] };
			}),
			e.on("chordDiagram/close", (e, t) => ({
				chordDiagram: e.chordDiagram.filter((e) => e !== t),
			}));
	},
	dp = "learnMarkers";
function dh(e) {
	try {
		let t = sW(dp) || [];
		e("learnMarkers/load:done", t);
	} catch {
		e("learnMarkers/load:done", []);
	}
}
function df(e) {
	let t = 0;
	for (let n of e) t += n.learnedBars.length;
	return t;
}
let dg = (e) => {
	e.on("learnMarkers/load:done", (e, t) => {
		let { learnMarkers: n } = e;
		return { learnMarkers: { ...n, data: t } };
	}),
		e.on("learnMarkers/markToggle", (t, n) => {
			let { learnMarkers: i, meta: r, part: a } = t,
				{ songId: s, partId: o, barNumber: l, isLearned: c } = n,
				u = [...i.data],
				d = u.find((e) => e.songId === s && e.partId === o);
			if (c) {
				if (d) {
					let p = d.learnedBars.findIndex((e) => e === l);
					p >= 0 &&
						(d.learnedBars = d.learnedBars
							.slice(0, p)
							.concat(d.learnedBars.slice(p + 1)));
				}
			} else
				d
					? d.learnedBars.includes(l) || (d.learnedBars = [...d.learnedBars, l])
					: u.push({ songId: s, partId: o, learnedBars: [l] });
			return (
				sq(dp, u),
				setTimeout(
					() =>
						e.dispatch("curiosity/event", {
							event: c ? "Marked as not learned" : "Marked as learned",
							"Measure number": l,
							"Song Id": s,
							"Part Id": o,
							"Revision Id": r.current.revisionId,
							"Track title": a.current.name,
							"Song title": r.current.title,
							"Artist name": r.current.artist,
						}),
					300
				),
				{ learnMarkers: { ...i, data: u } }
			);
		});
};
async function dm(e, t) {
	let n = e5("/api/event/");
	try {
		await sm(n, { event: e, payload: t });
	} catch (i) {
		console.error(i);
	}
}
void 0 !== document.hidden
	? ((r = "hidden"), (a = "visibilityState"))
	: void 0 !== document.mozHidden
	? ((r = "mozHidden"), (a = "mozVisibilityState"))
	: void 0 !== document.msHidden
	? ((r = "msHidden"), (a = "msVisibilityState"))
	: void 0 !== document.webkitHidden &&
	  ((r = "webkitHidden"), (a = "webkitVisibilityState"));
let dy = () =>
		r
			? {
					"Web document is hidden": document[r],
					"Web document visibility": document[a],
			  }
			: {},
	dv = (e) =>
		e
			? ((e.isBassGuitar && " Bass") || (e.isDrums && " Drum") || "") + " Tab"
			: " Tab";
function db(e, t) {
	return `/admin/resources/${e}/records/${t}/show`;
}
function dw(e, t) {
	return `/a/wa/SongAdminTools/${e}?id=${t}`;
}
function dS(e) {
	return `https://www.songsterr.com${e}`;
}
function dC(e) {
	switch (e.next) {
		case "subscribe":
			return "/a/wa/plus/payment";
		case "favorites":
			return "/a/wa/favorites";
		case "account":
			return "/a/wa/account";
		case "submit":
			return "/a/wa/submit";
		case "coupon":
			let t = e.code ? `?${new URLSearchParams({ code: e.code })}` : "";
			return `/a/wa/plus/coupon${t}`;
		default:
			return "/";
	}
}
function dk() {
	return Math.floor((1 + Math.random()) * 65536)
		.toString(16)
		.substring(1);
}
function dx() {
	return (
		dk() +
		dk() +
		"-" +
		dk() +
		"-" +
		dk() +
		"-" +
		dk() +
		"-" +
		dk() +
		dk() +
		dk()
	);
}
let dE = "Print--plus",
	dT = "Print--free";
function d_(e) {
	let t = e.rules || e.cssRules;
	for (let n of t)
		if (n.style.content && n.style.content.length) {
			let i = dx(),
				r =
					n.style.content.substring(0, 62) +
					i +
					n.style.content.substring(62 + i.length);
			r.length === n.style.content.length
				? (n.style.content = r)
				: console.error("Something wrong with tracker url length");
		}
}
function dP(e) {
	try {
		let t = document.styleSheets;
		for (let n = 0; n < t.length; n++) {
			let i = t[n];
			"print" === i.media.mediaText && "print-ga" === i.ownerNode.id && d_(i);
		}
	} catch (r) {
		console.error("PrintTracker: " + r);
	}
}
let dL = /[【】《》]/;
function dA(e) {
	return !dL.test(e) && -1 === e.indexOf(".com");
}
function dN(e) {
	return e
		.split("+")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join(" ");
}
let dI = "Songsterr",
	dM = "Songsterr Tabs with Rhythm",
	dB = {
		favorites: "Favorites",
		plus: "Songsterr Plus",
		submit: "Submit Tab",
		about: "About",
		jobs: "Jobs",
		help: "Questions",
		signin: "Sign In",
		signup: "Sign Up",
		recoverpassword: "Recover Password",
		changepassword: "Change Password",
		forgotpassword: "Forgot your password?",
		account: "Account",
		cancelPlus: "Cancel Subscription",
		deactivate: "Deactivate account",
		updateCard: "Update card",
		subscribePlus: "Paying",
		coupon: "Activate coupon",
		howToReadTab: "How to Read a Tab",
		privacy: "Privacy Policy",
		terms: "Terms Of Service",
		dnsmpd: "Do Not Sell My Personal Information",
		mytabs: "My Tabs",
		"": "",
		tab: "",
		chords: "",
		search: "",
		artist: "",
	};
function dD(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
	if (e) {
		if (e.instrument === tZ) return "Drum";
		if (e.instrument === tJ) return "Bass";
		if (e.instrument === tK) return "Guitar";
	}
	return t;
}
function dz(e, t) {
	if (!t || !e.current || !e.current.tracks) return !1;
	let n = null;
	return (
		ei(t.instrumentId)
			? (n = ei)
			: ea(t.instrumentId)
			? (n = ea)
			: er(t.instrumentId) && (n = er),
		!n || ez(t, e.current.tracks, n)
	);
}
function dO(e) {
	let { meta: t } = e;
	if (!t.current) return [dM, "Free online tab player"];
	let n = uX(t),
		i = "";
	dz(t, n) && (i = ` \u002d ${n.title.replace(/\u00a0/g, " ")}`);
	let r = dv(n),
		a = t.allowedByLicense ? "" : " (Temporary Removed by Music Publisher) ",
		s = `${t.current.title}${r} by ${t.current.artist}${i}`;
	return [
		`${s}${a} | ${dM}`,
		`${s}. Free online tab player. One accurate version. Recommended by The Wall Street Journal`,
	];
}
function dR(e) {
	let { chords: t } = e;
	if (!t.current) return dM;
	let { title: n, artist: i } = t.current;
	return `${n} Chords by ${i} | ${dM}`;
}
function d$(e) {
	let t = e.route;
	return "artist" === t.page
		? dX(e)
		: "tab" === t.page
		? dO(e)[0]
		: "chords" === t.page
		? dR(e)
		: "search" === t.page
		? dq(e)
		: "tag" === t.page || "tags" === t.page
		? dK(e)
		: dY(e);
}
function dF(e) {
	return "tab" === e.route.page && e.meta.current
		? {
				page: e.route.page,
				Artist: e.meta.current.artist,
				Title: e.meta.current.title,
		  }
		: { page: e.route.page };
}
function dH(e) {
	(document.title = d$(e)),
		window.ga &&
			window.ga("send", "pageview", {
				location: window.location.href,
				title: document.title,
			}),
		dP(dF(e));
}
R.map((e) => {
	let [t, n] = e;
	return "string" == typeof t && "string" == typeof n.page
		? { [n.page]: t }
		: {};
}).reduce((e, t) => Object.assign(e, t), {});
let dV = (e, t) => e.artist.artists[t] || "Unknown Artist",
	dj = (e) => {
		if (e.length > 0)
			return dA(e) ? `Search results for: '${e}'` : "Search results";
	},
	dU = (e) =>
		[dD(e.songs && e.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "),
	dG = (e) =>
		[
			dV(e, +e.route.artistId),
			dD(e.artist && e.artist.filters, ""),
			"Tabs",
		].join(" "),
	dW = (e) => dB[e.route.page] || "";
function dq(e) {
	return [e.songs && e.songs.pattern && dj(e.songs.pattern), dU(e), "Songsterr"]
		.filter(Boolean)
		.join(" | ");
}
function dX(e) {
	return [e.artist && e.artist.pattern && dj(e.artist.pattern), dG(e), dM]
		.filter(Boolean)
		.join(" | ");
}
function dY(e) {
	return [dW(e), dM].join(" | ");
}
function dK(e) {
	let {
		tags: { content: t, route: n, query: i, isFailed: r, isNotFound: a },
	} = e;
	if (!t || r || a)
		return `${a ? "Not Found" : "Something Went Wrong"} | ${dM}`;
	let s = i.page ? ` Page ${i.page}` : "",
		o = "Top " + ("tag" === n.page ? `${dN(n.name)} Tabs` : "Tags") + s;
	return o + ` | ${dM}`;
}
let dJ = new Map([
		["AF", "Afghanistan"],
		["AL", "Albania"],
		["DZ", "Algeria"],
		["AO", "Angola"],
		["AI", "Anguilla"],
		["AG", "Antigua and Barbuda"],
		["AR", "Argentina"],
		["AM", "Armenia"],
		["AU", "Australia"],
		["AT", "Austria"],
		["AZ", "Azerbaijan"],
		["BS", "Bahamas"],
		["BH", "Bahrain"],
		["BB", "Barbados"],
		["BY", "Belarus"],
		["BE", "Belgium"],
		["BZ", "Belize"],
		["BJ", "Benin"],
		["BM", "Bermuda"],
		["BT", "Bhutan"],
		["BO", "Bolivia"],
		["BA", "Bosnia and Herzegovina"],
		["BW", "Botswana"],
		["BR", "Brazil"],
		["VG", "British Virgin Islands"],
		["BN", "Brunei"],
		["BG", "Bulgaria"],
		["BF", "Burkina Faso"],
		["KH", "Cambodia"],
		["CM", "Cameroon"],
		["CA", "Canada"],
		["CV", "Cape Verde"],
		["KY", "Cayman Islands"],
		["TD", "Chad"],
		["CL", "Chile"],
		["CN", "China mainland"],
		["CO", "Colombia"],
		["CD", "Congo, Democratic Republic of the"],
		["CG", "Congo, Republic of the"],
		["CR", "Costa Rica"],
		["CI", "Cote D'Ivoire"],
		["HR", "Croatia"],
		["CY", "Cyprus"],
		["CZ", "Czech Republic"],
		["DK", "Denmark"],
		["DM", "Dominica"],
		["DO", "Dominican Republic"],
		["EC", "Ecuador"],
		["EG", "Egypt"],
		["SV", "El Salvador"],
		["EE", "Estonia"],
		["SZ", "Eswatini"],
		["FJ", "Fiji"],
		["FI", "Finland"],
		["FR", "France"],
		["GA", "Gabon"],
		["GM", "Gambia"],
		["GE", "Georgia"],
		["DE", "Germany"],
		["GH", "Ghana"],
		["GR", "Greece"],
		["GD", "Grenada"],
		["GT", "Guatemala"],
		["GW", "Guinea-Bissau"],
		["GY", "Guyana"],
		["HN", "Honduras"],
		["CN-HK", "Hong Kong"],
		["HU", "Hungary"],
		["IS", "Iceland"],
		["IN", "India"],
		["ID", "Indonesia"],
		["IQ", "Iraq"],
		["IE", "Ireland"],
		["IL", "Israel"],
		["IT", "Italy"],
		["JM", "Jamaica"],
		["JP", "Japan"],
		["JO", "Jordan"],
		["KZ", "Kazakhstan"],
		["KE", "Kenya"],
		["KR", "Republic of Korea"],
		["XK", "Kosovo"],
		["KW", "Kuwait"],
		["KG", "Kyrgyzstan"],
		["LA", "Laos"],
		["LV", "Latvia"],
		["LB", "Lebanon"],
		["LR", "Liberia"],
		["LY", "Libya"],
		["LT", "Lithuania"],
		["LU", "Luxembourg"],
		["MO", "Macau"],
		["MG", "Madagascar"],
		["MW", "Malawi"],
		["MY", "Malaysia, MYR"],
		["MV", "Maldives"],
		["ML", "Mali"],
		["MT", "Malta"],
		["MR", "Mauritania"],
		["MU", "Mauritius"],
		["MX", "Mexico"],
		["FM", "Micronesia"],
		["MD", "Moldova"],
		["MN", "Mongolia"],
		["ME", "Montenegro"],
		["MS", "Montserrat"],
		["MA", "Morocco"],
		["MZ", "Mozambique"],
		["MM", "Myanmar"],
		["NA", "Namibia"],
		["NR", "Nauru"],
		["NP", "Nepal"],
		["NL", "Netherlands"],
		["NZ", "New Zealand"],
		["NI", "Nicaragua"],
		["NE", "Niger"],
		["NG", "Nigeria"],
		["MK", "North Macedonia"],
		["NO", "Norway"],
		["OM", "Oman"],
		["PK", "Pakistan"],
		["PW", "Palau"],
		["PA", "Panama"],
		["PG", "Papua New Guinea"],
		["PY", "Paraguay"],
		["PE", "Peru"],
		["PH", "Philippines"],
		["PL", "Poland"],
		["PT", "Portugal"],
		["QA", "Qatar"],
		["RO", "Romania"],
		["RU", "Russia"],
		["RW", "Rwanda"],
		["ST", "S\xe3o Tom\xe9 and Pr\xedncipe"],
		["SA", "Saudi Arabia"],
		["SN", "Senegal"],
		["RS", "Serbia"],
		["SC", "Seychelles"],
		["SL", "Sierra Leone"],
		["SG", "Singapore"],
		["SK", "Slovakia"],
		["SI", "Slovenia"],
		["SB", "Solomon Islands"],
		["ZA", "South Africa"],
		["ES", "Spain"],
		["LK", "Sri Lanka"],
		["KN", "St. Kitts and Nevis"],
		["LC", "St. Lucia"],
		["VC", "St. Vincent and the Grenadines"],
		["SR", "Suriname"],
		["SE", "Sweden"],
		["CH", "Switzerland"],
		["TW", "Taiwan"],
		["TJ", "Tajikistan"],
		["TZ", "Tanzania"],
		["TH", "Thailand"],
		["TO", "Tonga"],
		["TT", "Trinidad and Tobago"],
		["TN", "Tunisia"],
		["TR", "Turkey"],
		["TM", "Turkmenistan"],
		["TC", "Turks and Caicos Islands"],
		["UG", "Uganda"],
		["UA", "Ukraine"],
		["AE", "United Arab Emirates"],
		["GB", "United Kingdom"],
		["US", "United States"],
		["UY", "Uruguay"],
		["UZ", "Uzbekistan"],
		["VU", "Vanuatu"],
		["VE", "Venezuela"],
		["VN", "Vietnam"],
		["YE", "Yemen"],
		["ZM", "Zambia"],
		["ZW", "Zimbabwe"],
	]),
	dZ = "sr_vpt10";
async function dQ(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
	if (!l) {
		if ("bot" === e.device.type) return;
		null === t
			? (t = void 0)
			: void 0 === t && e.user.isLoggedIn && (t = e.user.profile.id.toString());
		let {
			getDeviceId: n,
			init: i,
			track: r,
			Identify: a,
			identify: s,
			setUserId: o,
		} = await import("./index.09aecf53.js");
		await i(window.__AMPLITUDE_API_KEY__ || "", t, {
			serverUrl: "/2/httpapi",
			minIdLength: 1,
			attribution: { disabled: !0 },
		}).promise,
			(l = {
				getDeviceId: n,
				init: i,
				track: r,
				Identify: a,
				identify: s,
				setUserId: o,
			});
	}
	return l;
}
let d1 = {
	phone: "Phone",
	tablet: "Tablet",
	desktop: "Desktop",
	tv: "TV",
	car: "Car",
	bot: "Bot",
};
function d0() {
	let e = window.matchMedia("(orientation: portrait)");
	return e ? (e.matches ? "portrait" : "landscape") : "unknown";
}
function d2() {
	return window.matchMedia(s_).matches ? "smallPortrait" : "wideOrLandscape";
}
let d5 = {
		"Used metronome": !1,
		"Used countin": !1,
		"Used solo": !1,
		"Used mute": !1,
		"Used playback": !1,
		"Used speed": !1,
		"Used loop": !1,
		"Used mixer": !1,
		"Used pitchshift": !1,
		"Used fullscreen": !1,
	},
	d4 = "curiosity_sent_events",
	d3 = (e) =>
		-1 !== lZ.indexOf(e) ? `Experiment: ${e}` : `Experiment: SRW ${e}`,
	d8 = (e) => {
		let t = new Date(e.created_at),
			n = new Date(),
			i = Math.abs(n.getTime() - t.getTime());
		return Math.ceil(i / 864e5);
	},
	d6 = (e) => {
		{
			let t,
				n,
				i = {};
			function r(e) {
				i = sW(d4) || i;
				let t = !i[e];
				return t && ((i[e] = !0), sq(d4, i)), t;
			}
			async function a(e, t) {
				let { setUserId: n } = await dQ(e, t.id.toString());
				n(t.id.toString());
			}
			async function s(e) {
				let { setUserId: t } = await dQ(e, null);
				t(void 0);
			}
			async function o(e, t) {
				let n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				try {
					let a = e.user.isLoggedIn ? e.user.profile.plan : tw.FREE,
						s = e.user.isLoggedIn,
						o = {
							Url: window.location.href,
							Referer: e.curiosity.referer.last,
							...dy(),
							...n,
						},
						l = r(t);
					if (i && !l) return;
					!i && l && (o["First time"] = !0);
					let { Identify: c, track: u } = await dQ(e),
						d = new c();
					d.set("Plan", a),
						d.set("Platform", "Web"),
						d.set("Browser", e.browser.family),
						d.set("Browser version", e.browser.version),
						d.set("System version", e.device.os.version),
						d.set("Device type (correct)", d1[e.device.type] || e.device.type),
						d.set("Signed in", s),
						d.set("Total VPT10s", e.curiosity.vpt10.count),
						d.set("Total measures learned", df(e.learnMarkers.data)),
						d.set("Orientation", d0()),
						d.set("Mode", d2()),
						d.set("Fullscreen", e.screen.fullscreen),
						d.set("Browserslist", N);
					let p = lV("exp");
					if (p && p.active)
						for (let h of Object.keys(p.active)) d.set(d3(h), p.active[h]);
					for (let f of lJ)
						d.unset(d3(f)), d.unset("Device type (by useragent)");
					d.unset("Referer"),
						e.curiosity.referer.last &&
							d.set("Last referer", e.curiosity.referer.last),
						e.curiosity.referer.original &&
							d.set("Original referer", e.curiosity.referer.original);
					let g = {
						version_name: "06aed19e",
						event_type: t,
						user_properties: d.getUserProperties(),
						event_properties: o,
					};
					await u(g).promise,
						"prod" !== window.__STAGE__ && console.log(`AD: ${t}`, o, d);
				} catch (m) {
					console.error(m), window.Sentry.captureException(m);
				}
			}
			function l() {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
					t[n] = arguments[n];
				return (e) => {
					let n = { ...e.curiosity.vpt10.props };
					return (
						t.forEach((e) => {
							n[e] = !0;
						}),
						{ curiosity: { ...e.curiosity, VPT10Props: n } }
					);
				};
			}
			e.on("curiosity/conversion", (t, n) => {
				o(t, n.event, { ...n, ...t.curiosity.conversion, event: void 0 }),
					e.dispatch("curiosity/google", {
						category: "Conversion",
						action: n.event,
					});
			}),
				e.on("curiosity/event", (e, t) => {
					o(e, t.event, { ...t, event: void 0 });
				}),
				e.on("curiosity/visitedPage", () => {}),
				e.on("curiosity/enteredExperiment", (e, t) => {
					let { experiment: n, payload: i } = t;
					uW(n) || o(e, `Entered experiment: SRW ${n}`, i);
				}),
				e.on("curiosity/google", (e, t) => {
					try {
						window.ga &&
							window.ga("send", "event", {
								eventCategory: t.category,
								eventAction: t.action,
								eventLabel: t.label,
								eventValue: t.value,
							}),
							"prod" !== window.__STAGE__ &&
								console.log(`GA: ${t.category}`, t);
					} catch (n) {
						console.error(n), window.Sentry.captureException(n);
					}
				}),
				e.on("curiosity/error", (t, n) => {
					let { error: i, message: r } = n;
					e.dispatch("curiosity/event", {
						event: "Error",
						Error: i,
						Message: r,
					}),
						e.dispatch("curiosity/google", {
							category: "Error",
							action: i,
							label: r,
						});
				}),
				e.on("curiosity/fraud", async (e) => {
					let { Identify: t, identify: n } = await dQ(e),
						i = new t();
					await n(i).promise;
				}),
				e.on("curiosity/setConversionProps", (e, t) => ({
					curiosity: {
						...e.curiosity,
						conversion: { ...e.curiosity.conversion, ...t },
					},
				})),
				e.on("curiosity/countdown:start", () => {
					clearTimeout(t),
						s1.reset(),
						(t = setTimeout(() => e.dispatch("curiosity/vpt10"), 6e5));
				}),
				e.on("curiosity/countdown:clear", () => {
					clearTimeout(t);
				}),
				e.on("curiosity/vcp5:start", () => {
					clearTimeout(n),
						s1.reset(),
						(n = setTimeout(() => e.dispatch("curiosity/vc5"), 3e5));
				}),
				e.on("curiosity/vcp5:clear", () => {
					clearTimeout(n);
				}),
				e.on("meta/load:processing", () => {
					clearTimeout(t), clearTimeout(n);
				}),
				e.on("curiosity/vc5", () => {
					e.dispatch("curiosity/google", {
						category: "Player",
						action: "Viewed chords for 5 minutes",
					});
				}),
				e.on("curiosity/vpt10", (t) => {
					let n = s1.getTimeSinceLastActivity();
					if (n >= 5) return;
					let i = t.meta,
						r = uX(i),
						a = "Viewed player tab for 10 minutes";
					if (i.current && t.part.current) {
						let s;
						let o = i.current,
							l = t.part.current,
							{ shown: c, status: u, trackFingering: d } = t.fingerings,
							p = c && !u && !!d;
						dm(a, {
							songId: i.songId,
							revisionId: o.revisionId,
							artistId: o.artistId,
							partId: i.partId,
							instrumentId: r && r.instrumentId,
						});
						let h = eJ(t.player.version),
							f = h.versionLegacy || `audioV${h.version}`;
						for (let g of t.setlists.setlists)
							if (-1 !== g.songs.findIndex((e) => e.songId === i.songId)) {
								s = g.name;
								break;
							}
						e.dispatch("curiosity/event", {
							event: a,
							...t.curiosity.vpt10.props,
							Instrument: l.instrument,
							Difficulty: r && r.difficulty,
							"Minutes Since Last Activity": n,
							Artist: o.artist,
							Title: o.title,
							"Song id": i.songId.toString(),
							"Track id": r && r.partId.toString(),
							"Track title": r && r.name,
							"Has chords": l.withChords,
							"Has chords link": o.hasChords || !1,
							"Has sound v4": eQ.has(o, ty.V4),
							"Sound version": f,
							Tags: i.current.tags,
							"Playlist Name": s,
							"Autofingering enabled": p,
							"Revised days ago": d8(o),
						}),
							e.dispatch("curiosity/google", { category: "Player", action: a }),
							e.dispatch("curiosity/increaseVpt10");
					}
				}),
				e.on("user/signIn", (t, n) => {
					a(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Signed in",
							"Auth method": "Email",
						});
				}),
				e.on("user/googleSignIn", (t, n) => {
					let { profile: i, isCreated: r } = n;
					a(t, i),
						e.dispatch("curiosity/conversion", {
							event: r ? "Signed up" : "Signed in",
							"Auth method": "Google",
						});
				}),
				e.on("user/signUp", (t, n) => {
					a(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Signed up",
							"Auth method": "Email",
						});
				}),
				e.on("user/profile", (e, t) => {
					a(e, t);
				}),
				e.on("user/subscribePlus", (t, n) => {
					let i = {
						"Payment type": n.paymentType,
						Country: dJ.get(n.subscription.countryCode),
						"Braintree Plan": n.subscription.plan.id,
					};
					"subscribe" === n.mode
						? e.dispatch("curiosity/conversion", { event: "Subscribed", ...i })
						: "update" === n.mode &&
						  e.dispatch("curiosity/conversion", {
								event: "Updated subscription",
								...i,
						  }),
						e.dispatch("curiosity/google", {
							category: "Subscription",
							action:
								"subscribe" === n.mode ? "Subscribed" : "Updated subscription",
						}),
						a(t, nW(t, n));
				}),
				e.on("user/signOut", (t) => {
					e.dispatch("curiosity/event", { event: "Signed out" }), s(t);
				}),
				e.on("user/recoverPassword", (e, t) => {
					a(e, t);
				}),
				e.on("user/cancelPlus", (t, n) => {
					a(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Canceled subscription",
						});
				}),
				e.on("user/deactivate", (t) => {
					e.dispatch("curiosity/conversion", { event: "Deactivated account" }),
						s(t);
				}),
				e.on("editor/delete:done", (t, n) =>
					e.dispatch("curiosity/event", {
						event: "Deleted song",
						Artist: n.artist,
						Title: n.title,
						"Song id": n.songId && n.songId.toString(),
					})
				),
				e.on("editor/delete:error", (t, n) =>
					e.dispatch("curiosity/error", {
						error: "Deleted song",
						message: n.message,
					})
				),
				e.on("favorites/add", async (t, n) => {
					let { songId: i, song: r } = n;
					return e.dispatch("curiosity/event", {
						event: "Added favorite",
						Title: r.title,
						Artist: r.artist,
						"Song id": i.toString(),
					});
				}),
				e.on("favorites/delete:processing", async (t, n) => {
					let { songId: i, song: r } = n;
					return e.dispatch("curiosity/event", {
						event: "Removed favorite",
						Title: r.title,
						Artist: r.artist,
						"Song id": i.toString(),
					});
				}),
				e.on("upload/song:uploaded", (t, n) => {
					let { songSubmitted: i, song: r } = n;
					i &&
						e.dispatch("curiosity/event", {
							event: "Submitted tab",
							Artist: r.artist,
							Title: r.title,
						});
				}),
				e.on("upload/song:error", (t, n) => {
					let { error: i } = n;
					e.dispatch("curiosity/error", {
						error: "Submitted tab",
						message: i.message,
					});
				}),
				e.on("upload/revision:uploaded", (t, n) => {
					let { revisionSubmitted: i, revision: r } = n;
					i &&
						e.dispatch("curiosity/event", {
							event: "Submitted revision",
							Artist: r.artist,
							Title: r.title,
						});
				}),
				e.on("upload/revision:error", (t, n) => {
					let { error: i } = n;
					e.dispatch("curiosity/error", {
						error: "Submitted revision",
						message: i.message,
					});
				}),
				e.on("meta/load:processing", (e, t) => {
					let { songHasChanged: n } = t;
					if (n) {
						let i = { ...d5 };
						return (
							(i["Used countin"] = e.player.isCountin),
							(i["Used metronome"] = e.player.isMetronome),
							{ curiosity: { ...e.curiosity, VPT10Props: i } }
						);
					}
				}),
				e.on("player/changeSpeed", (e, t) => {
					let { speed: n } = t;
					return n <= 75
						? l("Used speed", "Slowed under 75%")(e)
						: l("Used speed")(e);
				}),
				e.on("player/togglePlay", (e) => {
					let { isMetronome: t, metronomeType: n, canPlay: i } = e.player;
					return t && "voice" === n && i
						? l("Used playback", "Played with Voice Metronome")(e)
						: l("Used playback")(e);
				}),
				e.on("player/toggleLoop", l("Used loop")),
				e.on("player/changePitch", l("Used pitchshift")),
				e.on("player/changeLoop", l("Used loop")),
				e.on("player/toggleCountIn", l("Used countin")),
				e.on("player/toggleMetronome", (e) => {
					let {
						isMetronome: t,
						metronomeType: n,
						canPlay: i,
						shouldPlay: r,
					} = e.player;
					return t && "voice" === n && i && r
						? l("Used metronome", "Played with Voice Metronome")(e)
						: l("Used metronome")(e);
				}),
				e.on("player/changeMetronome:init", (e, t) => {
					let { isMetronome: n, canPlay: i, shouldPlay: r } = e.player;
					if (n && "voice" === t && i && r)
						return l("Played with Voice Metronome")(e);
				}),
				e.on("player/changeType", (e, t) => {
					let { type: n } = t;
					return "solo" === n
						? l("Used solo")(e)
						: "mute" === n
						? l("Used mute")(e)
						: void 0;
				}),
				e.on("screen/toggleFullscreen", (e, t) => {
					let { enabled: n } = t;
					return n && l("Used Fullscreen")(e);
				}),
				e.on("screener/set", (t, n) => {
					n &&
						(n.disableEvents ||
							e.dispatch("curiosity/event", {
								event: "Screener shown",
								Header: n.title,
								Name: n.name,
							}));
				}),
				e.on("route/change", (t, n) => {
					let { route: i } = n;
					"tab" !== i.page &&
						"chords" !== i.page &&
						"search" !== i.page &&
						"artist" !== i.page &&
						dH(t),
						e.dispatch("curiosity/countdown:clear"),
						e.dispatch("curiosity/vcp5:clear");
				}),
				e.on("meta/load:done", (t) => {
					"tab" === t.route.page &&
						(dH(t), e.dispatch("curiosity/countdown:start"));
				}),
				e.on("chords/load:done", (t) => {
					"chords" === t.route.page &&
						(dH(t), e.dispatch("curiosity/vcp5:start"));
				}),
				e.on("screener/accept", (t, n) => {
					let { screener: i, value: r } = n;
					i &&
						(i.name.endsWith("NPS")
							? e.dispatch("curiosity/event", {
									event: `NPS ${i.name.replace("NPS", "")}`,
									Value: r,
							  })
							: e.dispatch("curiosity/event", {
									event: `Screener clicked: ${i.name}`,
							  }));
				});
		}
		e.on("curiosity/increaseVpt10", (e) => {
			let t = e.curiosity.vpt10.count;
			return (
				lU("sr_vpt10", ++t),
				{
					curiosity: {
						...e.curiosity,
						vpt10: { ...e.curiosity.vpt10, count: t },
					},
				}
			);
		});
	};
async function d9(e, t, n) {
	let i = e5(`/api/tab-editor?songId=${e}&part=${t}&revision=${n}`),
		r = await fetch(i);
	sy(r);
	let a = await r.json();
	if (!a.data) return;
	let s = JSON.parse(a.data),
		o = Array(s.measuresCount);
	return (
		s.packedData.forEach((e) => {
			let t = e.index;
			delete e.index, (o[t] = e);
		}),
		{ songId: a.songId, part: a.part, revision: a.revision, data: o }
	);
}
async function d7(e, t, n, i) {
	let r = e5("/api/tab-editor"),
		a = { songId: e, part: t, revision: n },
		s = [];
	i.forEach((e, t) => {
		e && s.push({ ...e, index: t });
	}),
		0 !== s.length &&
			(a.data = JSON.stringify({ measuresCount: i.length, packedData: s }));
	let o = await sm(r, a);
	return sy(o), o.json();
}
async function pe(e) {
	let t = e5(`/api/tab-editor/${e}`),
		n = await fetch(t);
	sy(n);
	let i = await n.json();
	if (!i.data) return;
	let r = JSON.parse(i.data),
		a = Array(r.measuresCount);
	return (
		r.packedData.forEach((e) => {
			let t = e.index;
			delete e.index, (a[t] = e);
		}),
		{ songId: i.songId, part: i.part, revision: i.revision, data: a }
	);
}
async function pt(e, t) {
	let n = e5(`/api/tab-editor/admin-data?offset=${e}&limit=${t}`),
		i = await fetch(n);
	return sy(i), i.json();
}
let pn = "hasSeenEditor",
	pi = () => sW(pn) || !1,
	pr = () => sq(pn, !0);
function pa(e) {
	return (e.returnValue = "o/"), "o/";
}
let ps = 12,
	po = function (e, t, n) {
		let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			r = e,
			a = i,
			s = r.layout,
			o = iD(s.measureLayout.lineLayout),
			l = s.measureLayout.measure.index,
			c = s.absoluteX * n,
			u = "",
			d = r.notes.find((e) => e.string === t && !e.bogus);
		if (d) u = d.dead ? "X" : d.fret;
		else {
			let p = s.beats.filter((e) => 0 !== e.notes.length && e.voice !== i);
			for (let h of p) {
				let f = h.notes.find((e) => e.string === t && !e.bogus);
				f && ((u = f.fret), (r = h), (a = h.voice));
			}
		}
		return {
			formX: c,
			formY: (o + 12 * (t - 1)) * n,
			fret: u,
			measureNum: l,
			beatNum: r.index,
			beat: r,
			voice: a,
		};
	},
	pl = (e, t, n, i, r) => {
		if (e) {
			let a = e[t];
			if (a && a.beats) {
				let s = a.beats.find((e) => e.beatNum === n && e.voice === r);
				if (s && s.editedNotes) {
					let o = s.editedNotes.find((e) => e.string === i);
					if (o) return o.fret;
				}
			}
		}
	},
	pc = (e) => {
		e.on("@init", () => ({
			tabEditor: {
				positioned: !1,
				beat: void 0,
				formX: 0,
				formY: 0,
				measureNum: 0,
				beatNum: 0,
				stringNum: 0,
				voice: 0,
				fret: "",
				originalFret: "",
				data: void 0,
				status: "unset",
				adminData: [],
				adminPanelOpened: !1,
			},
		})),
			e.on("layer/show", (e, t) => {
				let { tabEditor: n } = e;
				if ("tab_editor" === t)
					return {
						tabEditor: {
							...n,
							positioned: !1,
							beat: void 0,
							formX: 0,
							formY: 0,
							fret: "",
							originalFret: "",
							measureNum: 0,
							beatNum: 0,
							stringNum: 0,
							voice: 0,
						},
					};
			}),
			e.on("tabEditor/setForm", (t, n) => {
				let i,
					r,
					{ beatsLayout: a, touch: s, scale: o } = n,
					l = iD(a.measureLayout.lineLayout),
					c = a.measureLayout.lineLayout.line.strings,
					u = s.y - l;
				if (u < -10 || u > 73) return;
				let d = Math.floor(u / 12),
					p = u - 12 * d <= 6 ? d : d + 1;
				for (let h of (p < 0 ? (p = 0) : p >= c && (p = c - 1), a.beats))
					if (!h.rest && 0 !== h.notes.length) {
						for (let f of h.notes)
							if (f.string === p && !f.bogus) {
								(i = h.voice), (r = h);
								break;
							}
						if (void 0 !== i) break;
					}
				if (void 0 === i) {
					if (!(r = a.beats.find((e) => !e.rest && 0 !== e.notes.length)))
						return;
					i = r.voice;
				}
				let {
						formX: g,
						formY: m,
						fret: y,
						beatNum: v,
						measureNum: b,
						...w
					} = po(r, p, o, i),
					S = pl(t.tabEditor.data, b, v, p, w.voice),
					{ device: C } = t,
					k = o5(C) || o0(C.os) || o2(C.os);
				return (
					k ||
						e.dispatch("player/moveCursor", {
							cursor: iV(w.beat.layout),
							loopStart: t.player.position.loopStart,
							loopEnd: t.player.position.loopEnd,
						}),
					{
						tabEditor: {
							...t.tabEditor,
							positioned: !0,
							formX: g,
							formY: m,
							fret: void 0 !== S ? `${S}` : `${y}`,
							originalFret: `${y}`,
							beat: r,
							beatNum: v,
							stringNum: p,
							measureNum: b,
							voice: i,
						},
					}
				);
			}),
			e.on("tabEditor/formMove", (t, n) => {
				let { tabEditor: i, player: r, device: a } = t,
					{ scale: s, direction: o } = n,
					{ stringNum: l, beat: c, positioned: u } = i;
				if (!u) return;
				let d = c,
					p = l,
					h = d.layout.measureLayout.lineLayout.line.strings;
				if ("up" === o) (p = l - 1) < 0 && (p = h - 1);
				else if ("down" === o) (p = l + 1) >= h && (p = 0);
				else if ("right" === o || "left" === o) {
					let f = "right" === o ? "nextBeat" : "prevBeat";
					do {
						let g = d;
						if (!(d = g[f])) {
							let m = g.layout.beats.find((e) => e[f] && !e.lyrics);
							if (!m) return;
						}
						let y = d.layout.measureLayout.measure.index;
						for (let v of g.layout.beats) {
							if (!v[f] || v.lyrics || 0 === v.notes.length) continue;
							let b = v[f],
								w = b.layout.measureLayout.measure.index;
							if (("right" === o && w < y) || ("left" === o && w > y))
								(y = w), (d = b);
							else if (w === y) {
								let S = d.duration[0] / d.duration[1],
									C = v.duration[0] / v.duration[1];
								C < S && ((y = w), (d = b));
							}
						}
						if (d.rest) {
							let k = d.layout.beats.find(
								(e) => !e.rest && !e.lyrics && 0 !== e.notes.length
							);
							k && (d = k);
						}
					} while (!0 === d.rest);
				}
				let {
						formX: x,
						formY: E,
						fret: T,
						beatNum: _,
						measureNum: P,
						...L
					} = po(d, p, s, d.voice),
					A = pl(i.data, P, _, p, L.voice),
					N = o5(a) || o0(a.os) || o2(a.os);
				return (
					N ||
						e.dispatch("player/moveCursor", {
							cursor: iV(L.beat.layout),
							loopStart: r.position.loopStart,
							loopEnd: r.position.loopEnd,
						}),
					{
						tabEditor: {
							...i,
							positioned: !0,
							formX: x,
							formY: E,
							fret: void 0 !== A ? `${A}` : `${T}`,
							originalFret: `${T}`,
							beat: L.beat,
							voice: L.voice,
							beatNum: _,
							stringNum: p,
							measureNum: P,
						},
					}
				);
			}),
			e.on("screen/resize", (e) => {
				let { tabEditor: t } = e;
				if (t.positioned)
					return {
						tabEditor: {
							...t,
							positioned: !1,
							beat: void 0,
							formX: 0,
							formY: 0,
							measureNum: 0,
							beatNum: 0,
							stringNum: 0,
							fret: "",
							originalFret: "",
						},
					};
			}),
			e.on("tabEditor/changeNote", (t, n) => {
				let i,
					{ tabEditor: r, part: a, user: l } = t,
					{
						measureNum: c,
						fret: u,
						originalFret: d,
						stringNum: p,
						beatNum: h,
						voice: f,
						positioned: g,
					} = r;
				if (!g || n === u) return;
				if (r.data) i = [...r.data];
				else {
					let m = a.current.measures.length;
					i = Array(m);
				}
				let y = i[c];
				if (y && y.beats) {
					y = { beats: [...y.beats] };
					let v = y.beats.findIndex((e) => e.beatNum === h && e.voice === f);
					if (-1 === v)
						y.beats.push({
							beatNum: h,
							voice: f,
							editedNotes: [{ string: p, fret: n, originalFret: d }],
						});
					else {
						let b = y.beats[v];
						b.editedNotes = [...b.editedNotes];
						let w = b.editedNotes.findIndex((e) => e.string === p);
						-1 !== w &&
							(b.editedNotes = b.editedNotes
								.slice(0, w)
								.concat(b.editedNotes.slice(w + 1))),
							("" === d && "" === n) ||
								d === n ||
								b.editedNotes.push({ string: p, fret: n, originalFret: d }),
							0 === b.editedNotes.length &&
								(y.beats = y.beats.slice(0, v).concat(y.beats.slice(v + 1))),
							0 === y.beats.length && (y = void 0);
					}
					i[c] = y;
				} else
					(y = {
						beats: [
							{
								beatNum: h,
								voice: f,
								editedNotes: [{ string: p, fret: n, originalFret: d }],
							},
						],
					}),
						(i[c] = y);
				return (
					window.addEventListener("beforeunload", pa),
					clearTimeout(s),
					(s = setTimeout(() => uQ(e, "TriedEditor"), 2e4)),
					l.isLoggedIn &&
						(clearTimeout(o),
						(o = setTimeout(() => e.dispatch("tabEditor/save"), 3e3))),
					{ tabEditor: { ...r, data: i, fret: n, status: "changes" } }
				);
			});
		let t = (t) => {
			let { tabEditor: n } = t;
			"changes" === n.status && e.dispatch("tabEditor/save");
		};
		e.on("user/signIn", t),
			e.on("user/googleSignIn", t),
			e.on("user/signUp", t),
			e.on("tabEditor/save", async (t) => {
				let { meta: n, part: i, tabEditor: r, user: a } = t;
				try {
					"changes" === r.status &&
						a.isLoggedIn &&
						(e.dispatch("tabEditor/save:changeStatus", "saving"),
						await d7(n.songId, i.partId, i.revisionId, r.data),
						0.1 > Math.random() &&
							e.dispatch("curiosity/event", {
								event: "Autosaved tab edit 10% sampling",
							}),
						setTimeout(
							() => e.dispatch("tabEditor/save:changeStatus", "saved"),
							1e3
						));
				} catch (s) {
					console.log(s);
				}
			}),
			e.on("tabEditor/save:changeStatus", (e, t) => {
				if (!("saved" === t && "changes" === e.tabEditor.status))
					return (
						"saved" === t && window.removeEventListener("beforeunload", pa),
						{ tabEditor: { ...e.tabEditor, status: t } }
					);
			}),
			e.on("part/load:raw", () => {
				e.dispatch("tabEditor/load");
			}),
			e.on("tabEditor/load", async (t) => {
				let { user: n, part: i, query: r } = t;
				try {
					if ((e.dispatch("tabEditor/load:flush"), n.isLoggedIn)) {
						let a;
						let { songId: s, partId: o, revisionId: l } = i;
						(a =
							void 0 !== r.tabedit && nq(n, tb.USE_TAB_EDITOR)
								? await pe(+r.tabedit)
								: await d9(s, o, l)) &&
							e.dispatch("tabEditor/load:done", {
								songId: a.songId,
								part: a.part,
								data: a.data,
							});
					}
				} catch (c) {
					console.log(c);
				}
			}),
			e.on("tabEditor/load:flush", (e) => {
				let { tabEditor: t } = e;
				return (
					window.removeEventListener("beforeunload", pa),
					{
						tabEditor: {
							...t,
							positioned: !1,
							beat: void 0,
							formX: 0,
							formY: 0,
							measureNum: 0,
							beatNum: 0,
							stringNum: 0,
							voice: 0,
							fret: "",
							originalFret: "",
							data: void 0,
							status: "unset",
						},
					}
				);
			}),
			e.on("tabEditor/load:done", (e, t) => {
				let { songId: n, part: i, data: r } = t;
				if (n !== e.part.songId || i !== e.part.partId) {
					console.log("Loaded tab editor data lost its relevance");
					return;
				}
				return { tabEditor: { ...e.tabEditor, data: r } };
			}),
			e.on("tabEditor/loadAdminData", async (t, n) => {
				let { user: i } = t,
					{ offset: r, limit: a } = n;
				try {
					if (nq(i, tb.USE_TAB_EDITOR)) {
						let s = await pt(r, a);
						e.dispatch("tabEditor/loadAdminData:done", s);
					}
				} catch (o) {
					console.log(o);
				}
			}),
			e.on("tabEditor/loadAdminData:done", (e, t) => ({
				tabEditor: { ...e.tabEditor, adminData: t },
			})),
			e.on("tabEditor/loadById", (t, n) => {
				let i = t.tabEditor.adminData.find((e) => e.id === n);
				if (nq(t.user, tb.USE_TAB_EDITOR) && i) {
					let { songId: r, partId: a, revisionId: s } = t.part,
						o = eR(
							{ songId: i.songId, artist: "", title: "" },
							i.part,
							i.revision
						);
					e.dispatch("navigate", `${o}?tabedit=${n}`),
						i.songId === r &&
							i.part === a &&
							i.revision === s &&
							tu(() => e.dispatch("tabEditor/load"));
				}
			});
	},
	pu = "d1u3zjg5j4sw4b";
class pd extends Error {
	constructor(e) {
		super(e),
			Error.captureStackTrace && Error.captureStackTrace(this, pd),
			(this.name = "InProgressError"),
			(this.message = e);
	}
}
let pp = async (e) => {
	try {
		let t = await sg(`https://d1u3zjg5j4sw4b.cloudfront.net/${e}`);
		return sy(t), t.json();
	} catch (n) {
		if (404 === n.status) return null;
		throw n;
	}
};
async function ph(e, t) {
	let n = `${e}/${t.songId}-${t.partId}-${t.revisionId}.json`,
		i = await pp(n);
	if (i) return console.log("Taken from the cloud"), i;
	let r = e5("/fingerings/generate"),
		a = await sm(r, { part: t });
	sy(a), console.log("Generated on server");
	let s = await a.json();
	if ("In progress" === s.status) throw new pd(s.info);
	return s;
}
let pf = "v1",
	pg = (e) => {
		e.on("fingerings/loadedPart", (e, t) => {
			let { fingerings: n, part: i } = e,
				{ songId: r, revisionId: a, rawPart: s } = t;
			return i.songId !== r || i.revisionId !== a
				? {
						fingerings: {
							...n,
							rawPart: JSON.parse(JSON.stringify(s)),
							storedFingerings: [],
							trackFingering: void 0,
							shown: !1,
							status: null,
						},
				  }
				: {
						fingerings: {
							...n,
							rawPart: JSON.parse(JSON.stringify(s)),
							trackFingering: void 0,
							shown: !1,
							status: null,
						},
				  };
		}),
			e.on("fingerings/toggle", async (t) => {
				var n;
				let { part: i, fingerings: r, experiments: a } = t,
					{ partId: s, songId: o, revisionId: l } = i,
					c =
						(null === (n = a.auto_fingerings) || void 0 === n
							? void 0
							: n.segment) === "ut";
				if (c && "Loading" !== r.status) {
					if (r.shown)
						e.dispatch("curiosity/event", {
							event: "Clicked close fingerings",
						}),
							e.dispatch("fingerings/hide");
					else {
						if (
							(e.dispatch("curiosity/event", {
								event: "Clicked open fingerings",
							}),
							r.storedFingerings.find((e) => e.partId === s))
						) {
							e.dispatch("fingerings/show", s);
							return;
						}
						if (r.rawPart) {
							e.dispatch("fingerings/load:init");
							try {
								let u = await ph("v1", r.rawPart),
									d = { partId: s, data: u };
								setTimeout(() => e.dispatch("fingerings/load:done", d), 200);
							} catch (p) {
								"InProgressError" === p.name
									? e.dispatch("fingerings/load:inProgress")
									: (e.dispatch("curiosity/event", {
											event: "Failed to generate fingerings",
											songId: o,
											partId: s,
											revisionId: l,
											version: "v1",
									  }),
									  e.dispatch("fingerings/load:error"));
							}
						}
					}
				}
			}),
			e.on("fingerings/load:init", (e) => ({
				fingerings: { ...e.fingerings, status: "Loading" },
			})),
			e.on("fingerings/load:done", (e, t) => {
				let { fingerings: n } = e,
					i = [...n.storedFingerings];
				return (
					i.find((e) => e.partId === t.partId) || i.push(t),
					{
						fingerings: {
							...n,
							storedFingerings: i,
							trackFingering: t,
							shown: !0,
							status: null,
						},
					}
				);
			}),
			e.on("fingerings/load:inProgress", (e) => ({
				fingerings: {
					...e.fingerings,
					trackFingering: void 0,
					shown: !0,
					status: "In Progress",
				},
			})),
			e.on("fingerings/load:error", (e) => ({
				fingerings: {
					...e.fingerings,
					trackFingering: void 0,
					shown: !0,
					status: "Error",
				},
			})),
			e.on("fingerings/hide", (e) => ({
				fingerings: { ...e.fingerings, shown: !1, status: null },
			})),
			e.on("fingerings/show", (e, t) => {
				let { fingerings: n } = e,
					i = n.storedFingerings.find((e) => e.partId === t);
				if (i)
					return {
						fingerings: { ...n, trackFingering: i, shown: !0, status: null },
					};
			});
	};
async function pm(e) {
	let t = e5("/api/person/revisions"),
		n = await fetch(t, { credentials: "include" });
	return await sC(n), sy(n), await n.json();
}
async function py(e, t) {
	try {
		e("myTabs/load:processing");
		let n = await pm(t);
		e("myTabs/load:done", n.revisions ?? []);
	} catch (i) {
		console.error("myTabs/load:error", i), e("myTabs/load:error", i);
	}
}
let pv = (e) => {
	e.on("user/signIn", async () => py(e.dispatch, void 0)),
		e.on("user/googleSignIn", async () => py(e.dispatch, void 0)),
		e.on("myTabs/load:processing", (e) => ({
			myTabs: { ...e.myTabs, loading: !0, error: !1 },
		})),
		e.on("myTabs/load:done", (e, t) => ({
			myTabs: { ...e.myTabs, tabs: t, actionId: "", loading: !1, error: !1 },
		})),
		e.on("myTabs/load:error", (e) => ({
			myTabs: { ...e.myTabs, tabs: [], loading: !1, error: !0 },
		})),
		e.on("user/signOut", (e) => ({
			myTabs: { ...e.myTabs, tabs: [], pattern: "", actionId: "" },
		}));
};
var pb = (e) =>
	new B(
		[
			D,
			W,
			o1,
			n8,
			s8,
			sF,
			dg,
			nX,
			o6,
			o9,
			lw,
			o4,
			l4,
			l9,
			cd,
			ch,
			lY,
			cg,
			cS,
			cC,
			cZ,
			c4,
			c6,
			ud,
			cc,
			u1,
			u5,
			u8,
			uj,
			dn,
			di,
			pc,
			dr,
			dd,
			du,
			pg,
			d6,
			pv,
		],
		e
	);
function pw() {
	"serviceWorker" in navigator &&
		window.addEventListener("load", () => {
			navigator.serviceWorker
				.register("/service-worker.js", { scope: "/" })
				.catch(console.error.bind(console));
		});
}
function pS() {
	try {
		navigator.serviceWorker.ready.then((e) => {
			e.unregister();
		});
	} catch (e) {
		console.error(e);
	}
}
let pC = {},
	pk = {},
	px = "Cdy1hg",
	pE = "Cdylb",
	pT = "Cdy9a",
	p_ = "Cdyrh",
	pP = "Cdyrh Cdy1j2",
	pL = "Cdy21",
	pA = "Cdy1xh",
	pN = "Cdyft",
	pI = "Cdy17e",
	pM = "Cdy18g",
	pB = "Cdy18g Cdy2gp",
	pD = "Cdywb",
	pz = "Cdy2g1",
	pO = "Cdy1hg Cdy160",
	pR = "Cdy1hg Cdy3h",
	p$ = "Cdy1hg Cdy308",
	pF = "Cdy1hg Cdy308 Cdy2al",
	pH = "Cdy1hg Cdy29",
	pV = {
		app: "Cdy1hg",
		chordsMinimalism: "Cdylb",
		chords: "Cdy9a",
		tablature: "Cdyrh",
		tablatureFullscreen: "Cdyrh Cdy1j2",
		pane: "Cdy21",
		debug: "Cdy1xh",
		tos: "Cdyft",
		popupOverlay: "Cdy17e",
		footer: "Cdy18g",
		footerWithAds: "Cdy18g Cdy2gp",
		copyright: "Cdywb",
		rightSidebar: "Cdy2g1",
		appFree: "Cdy1hg Cdy3h",
		appPlus: "Cdy1hg Cdy3h",
		appChords: "Cdy1hg Cdy308",
		appChordsMinimalism: "Cdy1hg Cdy308 Cdy2al",
		appTags: "Cdy1hg Cdy29",
	};
function pj(e) {
	for (
		var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
		i < t;
		i++
	)
		n[i - 1] = arguments[i];
	return function (t) {
		return g(e, { ...t, ...lk.apply(null, n) });
	};
}
let pU = "ki1vh",
	pG = "ki1vh ki326",
	pW = "ki1vh ki2jc",
	pq = "ki1vh ki1hu",
	pX = "ki1vh kibb",
	pY = "ki29b",
	pK = "ki1vh ki1ny",
	pJ = "ki1vh ki32k",
	pZ = "ki1vh ki32k ki2jd",
	pQ = "ki1vh ki2iu",
	p1 = {
		spinner: "ki1vh",
		button: "ki1vh ki326",
		migrate: "ki1vh ki2jc",
		google: "ki1vh ki1hu",
		search: "ki1vh kibb",
		icon: "ki29b",
		revisions: "ki1vh ki1ny",
		songs: "ki1vh ki32k",
		songsInvisible: "ki1vh ki32k ki2jd",
		feature: "ki1vh ki2iu",
	},
	p0 = (e) => {
		let {
			x: t,
			y: n,
			width: i,
			height: r,
			fill: a,
			className: s = p1.spinner,
			style: o,
			id: l,
			iref: c,
		} = e;
		return g(
			"svg",
			{
				className: s,
				ref: c,
				id: l,
				x: t,
				y: n,
				width: i,
				height: r,
				style: o,
				viewBox: "25 25 50 50",
				"aria-labelledby": "spinner-title",
			},
			g("circle", { stroke: a, cx: "50", cy: "50", r: "20" })
		);
	},
	p2 = "D0y2s5",
	p5 = { loader: "D0y2s5" };
function p4() {
	return m("div", {
		className: p5.loader,
		children: g(p0, { width: 50, height: 40, fill: "#128df6" }),
	});
}
let p3 = "B41py",
	p8 = "B41py B4d2",
	p6 = "B41py B431b",
	p9 = "B41py B41jo",
	p7 = {
		alert: "B41py",
		info: "B41py B4d2",
		error: "B41py B431b",
		notice: "B41py B41jo",
	};
function he(e) {
	switch (e) {
		case "error":
			return p7.error;
		case "notice":
			return p7.notice;
		default:
			return p7.info;
	}
}
function ht(e, t, n, i) {
	let r = e.length,
		a = Math.ceil((r * n + i * Math.ceil((r * n) / t)) / t);
	if (1 === a) return [e];
	let s = Math.ceil((t - i) / n),
		o = 0,
		l = [];
	for (let c = 0; c < a; c++) {
		let u;
		let d = e.substr(o, s);
		if (c !== a - 1) {
			let p = d.split(" ");
			u = d.lastIndexOf(p[p.length - 1]);
		}
		(o += u), l.push(d.substr(0, u).trim());
	}
	return l;
}
function hn(e) {
	let { level: t, title: n, action: i, reason: r } = e,
		{ dispatch: a, screen: s, device: o } = lk("screen", "device");
	if ("bot" === o.type) return;
	let l = he(t),
		c = o.isPhone ? 0 : 190,
		u = s.viewport.width - c > 600 ? 600 : s.viewport.width - c,
		d = ht(n, u, 9, 10),
		p = ht(i, u, 7, 10),
		h =
			"undefined" == typeof btoa
				? (e) => Buffer.from(e, "binary").toString("base64")
				: btoa;
	return g(
		"section",
		{ className: l, role: "alert" },
		d.map((e) =>
			g("img", {
				height: 30,
				"aria-label": "title",
				alt: n,
				src:
					"data:image/svg+xml;base64," +
					h(`<svg xmlns='http://www.w3.org/2000/svg' width='${
						9 * e.length + 10
					}' height='30'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
			})
		),
		i &&
			p.map((e) =>
				g("img", {
					height: 22,
					"aria-label": "action",
					alt: i,
					src:
						"data:image/svg+xml;base64," +
						h(`<svg xmlns='http://www.w3.org/2000/svg' width='${
							7 * e.length + 10
						}' height='22'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
				})
			)
	);
}
function hi() {
	let [e] = y((e) => {
		"Sentry" in window &&
			"function" == typeof window.Sentry.captureException &&
			window.Sentry.captureException(e),
			console && console.error(e);
	});
	return e
		? m(hn, {
				level: "error",
				reason: "lazy",
				title: "Failed to load page",
				action: "Please disable your ad blocker and check network connection",
		  })
		: m(v, {
				fallback: m(p4, {}),
				children: m(this.props.component, this.props),
		  });
}
let hr = (e) => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
function ha(e) {
	let t = u(lS),
		n = e.href || e.to,
		i = e.onClick,
		r = b(
			(e) => {
				hr(e) || (e.preventDefault(), i && i(), t.dispatch("navigate", n));
			},
			[n, i]
		);
	return g("a", { ...e, href: n, onClick: r, to: null });
}
let hs = "i5k2",
	ho = "i5k2 i52z2",
	hl = "i5k2 i51pj",
	hc = "i5k2 i52e5",
	hu = "i5k2 i52z2 i533w",
	hd = "i5k2 i52z2 i515d",
	hp = "i5k2 i52z2 i527v",
	hh = "i5k2 i52z2 i513s",
	hf = "i5k2 i52z2 i51e9",
	hg = "i5k2 i52z2 i51xu",
	hm = "i5k2 i52wn",
	hy = "i5p0",
	hv = "i5tp",
	hb = "i5tp i51jx",
	hw = "i5tp i5173",
	hS = "i5t4",
	hC = "i51o8",
	hk = "i517k",
	hx = "i52ov",
	hE = {
		base: "i5k2",
		horizontalPopup: "i5k2 i52z2",
		verticalPopup: "i5k2 i51pj",
		verticalLeftPopup: "i5k2 i52e5",
		speedPopup: "i5k2 i52z2 i533w",
		pitchPopup: "i5k2 i52z2 i515d",
		soloPopup: "i5k2 i52z2 i527v",
		mutePopup: "i5k2 i52z2 i513s",
		loopPopup: "i5k2 i52z2 i51e9",
		printPopup: "i5k2 i52z2 i51xu",
		pitchshiftPopup: "i5k2 i52wn",
		link: "i5p0",
		basewrapper: "i5tp",
		wrapper: "i5tp i51jx",
		demowrapper: "i5tp i5173",
		text: "i5t4",
		linkText: "i51o8",
		demoText: "i517k",
		divider: "i52ov",
	},
	hT = hs + " vtm3",
	h_ = hS + " vt1nf",
	hP = "vt25r",
	hL = { popup: hs + " vtm3", text: hS + " vt1nf", surveySection: "vt25r" };
class hA extends w {
	componentDidMount() {}
	onUnderstandLinkClick = (e) => {
		e.preventDefault(), this.props.dispatch("layer/hide");
	};
	onStillHaveQuestionsLinkClick = () => {};
	render() {
		return g(
			"div",
			{ className: hL.popup, id: "explain-difficulty-popup" },
			g(
				"div",
				{ className: hL.text },
				"Each guitar track is assigned a difficulty level based on:",
				g(
					"ol",
					{},
					g(
						"li",
						{},
						"The speed required for playing left and right hand. Faster is harder."
					),
					g(
						"li",
						{},
						"The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."
					),
					g(
						"li",
						{},
						"The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc."
					)
				),
				g(
					"p",
					{},
					"We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."
				),
				g(
					"p",
					{},
					g(
						"i",
						{},
						"Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles."
					)
				),
				g(
					"div",
					{ className: hL.surveySection },
					g(
						"a",
						{ onClick: this.onUnderstandLinkClick, href: "", role: "button" },
						"I understand, all clear"
					),
					g(
						ha,
						{
							to: "/a/wa/help#contact-us",
							onClick: this.onStillHaveQuestionsLinkClick,
						},
						"I still have questions"
					)
				)
			)
		);
	}
}
var hN = pj(hA);
let hI = c(null),
	hM = (e) => e && e.props;
function hB(e, t) {
	let n = (e) => (t && hM(e) ? t(e) : e),
		i = Object.create(null);
	return (
		e &&
			S(e).forEach((e) => {
				e && (i[e.key] = n(e));
			}),
		i
	);
}
function hD(e, t) {
	let n;
	function i(n) {
		return n in t ? t[n] : e[n];
	}
	(e = e || {}), (t = t || {});
	let r = Object.create(null),
		a = [];
	for (let s in e) s in t ? a.length && ((r[s] = a), (a = [])) : a.push(s);
	let o = {};
	for (let l in t) {
		if (r[l])
			for (n = 0; n < r[l].length; n++) {
				let c = r[l][n];
				o[r[l][n]] = i(c);
			}
		o[l] = i(l);
	}
	for (n = 0; n < a.length; n++) o[a[n]] = i(a[n]);
	return o;
}
function hz(e, t, n) {
	return null != n[t] ? n[t] : e.props && e.props[t];
}
function hO(e, t) {
	return hB(e.children, (n) =>
		C(n, {
			onExited: t.bind(null, n),
			in: !0,
			appear: hz(n, "appear", e),
			enter: hz(n, "enter", e),
			exit: hz(n, "exit", e),
		})
	);
}
function hR(e, t, n) {
	let i = hB(e.children),
		r = hD(t, i);
	return (
		Object.keys(r).forEach((a) => {
			let s = r[a];
			if (!hM(s)) return;
			let o = a in t,
				l = a in i,
				c = t[a],
				u = hM(c) && !c.props.in;
			l && (!o || u)
				? (r[a] = C(s, {
						onExited: n.bind(null, s),
						in: !0,
						exit: hz(s, "exit", e),
						enter: hz(s, "enter", e),
				  }))
				: l || !o || u
				? l &&
				  o &&
				  hM(c) &&
				  (r[a] = C(s, {
						onExited: n.bind(null, s),
						in: c.props.in,
						exit: hz(s, "exit", e),
						enter: hz(s, "enter", e),
				  }))
				: (r[a] = C(s, { in: !1 }));
		}),
		r
	);
}
let h$ = Object.values || ((e) => Object.keys(e).map((t) => e[t]));
class hF extends w {
	static defaultProps = { component: null, childFactory: (e) => e };
	constructor(e) {
		super(e);
		let t = this.handleExited.bind(this);
		this.state = { handleExited: t, firstRender: !0 };
	}
	componentDidMount() {
		this.appeared = !0;
	}
	static getDerivedStateFromProps(e, t) {
		let { children: n, handleExited: i, firstRender: r } = t;
		return { children: r ? hO(e, i) : hR(e, n, i), firstRender: !1 };
	}
	handleExited(e, t) {
		let n = hB(this.props.children);
		e.key in n ||
			(e.props.onExited && e.props.onExited(t),
			this.setState((t) => {
				let n = { ...t.children };
				return delete n[e.key], { children: n };
			}));
	}
	render() {
		let { component: e, childFactory: t, ...n } = this.props,
			i = h$(this.state.children).map(t);
		return (
			delete n.appear,
			delete n.enter,
			delete n.exit,
			g(
				hI.Provider,
				{ value: { isMounting: !this.appeared } },
				e ? g(e, n, i) : g(k, null, i)
			)
		);
	}
}
let hH = "unmounted",
	hV = "exited",
	hj = "entering",
	hU = "entered",
	hG = "exiting";
function hW(e) {
	return e ? e.base || (1 === e.nodeType && e) : null;
}
class hq extends w {
	static contextType = hI;
	constructor(e, t) {
		let n;
		super(e, t);
		let i = t && !t.isMounting ? e.enter : e.appear;
		(this.appearStatus = null),
			e.in
				? i
					? ((n = hV), (this.appearStatus = hj))
					: (n = hU)
				: (n = e.unmountOnExit || e.mountOnEnter ? hH : hV),
			(this.state = { status: n }),
			(this.nextCallback = null);
	}
	static getDerivedStateFromProps(e, t) {
		let { in: n } = e;
		return n && t.status === hH ? { status: hV } : null;
	}
	componentDidMount() {
		this.updateStatus(!0, this.appearStatus);
	}
	componentDidUpdate(e) {
		let t = null;
		if (e !== this.props) {
			let { status: n } = this.state;
			this.props.in
				? n !== hj && n !== hU && (t = hj)
				: (n === hj || n === hU) && (t = hG);
		}
		this.updateStatus(!1, t);
	}
	componentWillUnmount() {
		this.cancelNextCallback();
	}
	getTimeouts() {
		let e, t, n;
		let { timeout: i } = this.props;
		return (
			(e = t = n = i),
			null != i &&
				"number" != typeof i &&
				((e = i.exit), (t = i.enter), (n = i.appear)),
			{ exit: e, enter: t, appear: n }
		);
	}
	updateStatus() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			t = arguments.length > 1 ? arguments[1] : void 0;
		if (null !== t) {
			this.cancelNextCallback();
			let n = hW(this);
			t === hj ? this.performEnter(n, e) : this.performExit(n);
		} else
			this.props.unmountOnExit &&
				this.state.status === hV &&
				this.setState({ status: hH });
	}
	performEnter(e, t) {
		let { enter: n } = this.props,
			i = this.context ? this.context.isMounting : t,
			r = this.getTimeouts();
		if (!t && !n) {
			this.safeSetState({ status: hU }, () => {
				this.props.onEntered(e);
			});
			return;
		}
		this.props.onEnter(e, i),
			this.safeSetState({ status: hj }, () => {
				this.props.onEntering(e, i),
					this.onTransitionEnd(e, r.enter, () => {
						this.safeSetState({ status: hU }, () => {
							this.props.onEntered(e, i);
						});
					});
			});
	}
	performExit(e) {
		let { exit: t } = this.props,
			n = this.getTimeouts();
		if (!t) {
			this.safeSetState({ status: hV }, () => {
				this.props.onExited(e);
			});
			return;
		}
		this.props.onExit(e),
			this.safeSetState({ status: hG }, () => {
				this.props.onExiting(e),
					this.onTransitionEnd(e, n.exit, () => {
						this.safeSetState({ status: hV }, () => {
							this.props.onExited(e);
						});
					});
			});
	}
	cancelNextCallback() {
		null !== this.nextCallback &&
			(this.nextCallback.cancel(), (this.nextCallback = null));
	}
	safeSetState(e, t) {
		(t = this.setNextCallback(t)), this.setState(e, t);
	}
	setNextCallback(e) {
		let t = !0;
		return (
			(this.nextCallback = (n) => {
				t && ((t = !1), (this.nextCallback = null), e(n));
			}),
			(this.nextCallback.cancel = () => {
				t = !1;
			}),
			this.nextCallback
		);
	}
	onTransitionEnd(e, t, n) {
		this.setNextCallback(n),
			e
				? (this.props.addEndListener &&
						this.props.addEndListener(e, this.nextCallback),
				  null != t && setTimeout(this.nextCallback, t))
				: setTimeout(this.nextCallback, 0);
	}
	render() {
		let e = this.state.status;
		return e === hH
			? null
			: g(hI.Provider, { value: null }, this.props.children);
	}
}
function hX() {}
hq.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: hX,
	onEntering: hX,
	onEntered: hX,
	onExit: hX,
	onExiting: hX,
	onExited: hX,
};
class hY extends w {
	static defaultProps = { timeout: 200 };
	onEnter = (e, t) => {
		if (e) {
			let n = this.props.animationStyles[t ? "appear" : "enter"];
			this.removeClasses(e, "exit"), n && e.classList.add(n);
		}
		this.props.onEnter && this.props.onEnter(e);
	};
	onEntering = (e, t) => {
		if (e) {
			let n = this.props.animationStyles[(t ? "appear" : "enter") + "Active"],
				i = window.requestAnimationFrame;
			n &&
				i(() => {
					i(() => {
						e && e.classList.add(n);
					});
				});
		}
		this.props.onEntering && this.props.onEntering(e);
	};
	onEntered = (e, t) => {
		if (e) {
			let n = this.props.animationStyles[(t ? "appear" : "enter") + "Done"];
			this.removeClasses(e, t ? "appear" : "enter"), n && e.classList.add(n);
		}
		this.props.onEntered && this.props.onEntered(e);
	};
	onExit = (e) => {
		if (e) {
			let t = this.props.animationStyles.exit;
			this.removeClasses(e, "appear"),
				this.removeClasses(e, "enter"),
				t && e.classList.add(t);
		}
		this.props.onExit && this.props.onExit(e);
	};
	onExiting = (e) => {
		if (e) {
			let t = this.props.animationStyles.exitActive,
				n = window.requestAnimationFrame;
			t &&
				n(() => {
					n(() => {
						e && e.classList.add(t);
					});
				});
		}
		this.props.onExiting && this.props.onExiting(e);
	};
	onExited = (e) => {
		if (e) {
			let t = this.props.animationStyles.exitDone;
			this.removeClasses(e, "exit"), t && e.classList.add(t);
		}
		this.props.onExited && this.props.onExited(e);
	};
	removeClasses(e, t) {
		let n = this.props.animationStyles[t],
			i = this.props.animationStyles[t + "Active"],
			r = this.props.animationStyles[t + "Done"];
		n && e.classList.remove(n),
			i && e.classList.remove(i),
			r && e.classList.remove(r);
	}
	render() {
		return g(hq, {
			...this.props,
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited,
		});
	}
}
let hK = 27,
	hJ = 28,
	hZ = 29,
	hQ = 30,
	h1 = 31,
	h0 = 32,
	h2 = 33,
	h5 = 34,
	h4 = 36,
	h3 = 35,
	h8 = 39,
	h6 = 38,
	h9 = 40,
	h7 = 37,
	fe = 91,
	ft = 42,
	fn = 46,
	fi = 44,
	fr = 92,
	fa = 50,
	fs = 48,
	fo = 47,
	fl = 45,
	fc = 41,
	fu = 43,
	fd = 49,
	fp = 57,
	fh = 51,
	ff = 59,
	fg = 93,
	fm = 55,
	fy = 52,
	fv = 53,
	fb = 54,
	fw = 56,
	fS = 102,
	fC = 99,
	fk = 58,
	fx = 60,
	fE = 61,
	fT = 62,
	f_ = 63,
	fP = 64,
	fL = 65,
	fA = 66,
	fN = 67,
	fI = 68,
	fM = 69,
	fB = 70,
	fD = 71,
	fz = 72,
	fO = 73,
	fR = 74,
	f$ = 75,
	fF = 76,
	fH = 76,
	fV = 77,
	fj = 78,
	fU = 79,
	fG = 80,
	fW = 81,
	fq = 82,
	fX = 83,
	fY = 84,
	fK = 85,
	fJ = 86,
	fZ = 87,
	fQ = [
		[36, "Kick/Bass\nDrum"],
		[35, "Acoustic\nBass\nDrum"],
		[50, "High\nFloor\nTom"],
		[48, "High\nTom"],
		[47, "Mid\nTom"],
		[45, "Low\n(Floor)\nTom"],
		[41, "Low\n(Floor)\nTom"],
		[43, "Very\nLow\nTom"],
		[38, "Snare"],
		[40, "Electric\nSnare"],
		[37, "Side\nStick\nSnare"],
		[91, "Rim\nShot\nSnare"],
		[42, "Closed\nHi Hat"],
		[92, "Half\nHi Hat"],
		[46, "Open\nHi Hat"],
		[44, "Foot\nHi Hat"],
		[93, "Ride\nEdge\n"],
		[59, "Ride\nEdge\n"],
		[51, "Ride\nCymbal\n"],
		[53, "Ride\nBell"],
		[55, "Splash\n"],
		[52, "China\n\n"],
		[49, "High\nCrash\n"],
		[57, "Medium\nCrash\n"],
		[99, "Low\nCowbell"],
		[56, "Cowbell"],
		[102, "High\nCowbell"],
		[27, "High Q"],
		[28, "Slap"],
		[29, "Scratch\nPush\n"],
		[30, "Scratch\nPull\n"],
		[31, "Sticks"],
		[32, "Square\nClick"],
		[33, "Metronome\nClick"],
		[34, "Metronome\nBell"],
		[39, "Hand\nClap"],
		[54, "Tambourine\n"],
		[58, "Vibraslap"],
		[60, "High\nBongo"],
		[61, "Low\nBongo"],
		[62, "Mute\nHigh\nConga"],
		[63, "Open\nHigh\nConga"],
		[64, "Low\nConga"],
		[65, "High\nTimbale"],
		[66, "Low\nTimbale"],
		[67, "High\nAgogo"],
		[68, "Low\nAgogo"],
		[69, "Cabasa"],
		[70, "Maracas"],
		[71, "Short\nWhistle"],
		[72, "Long\nWhistle"],
		[73, "Short\nGuiro\n"],
		[74, "Long\nGuiro\n"],
		[75, "Claves"],
		[76, "High\nWood\nBlock"],
		[77, "Low\nWood\nBlock"],
		[78, "Mute\nCuica"],
		[79, "Open\nCuica"],
		[80, "Mute\nTriangle"],
		[81, "Open\nTriangle"],
		[82, "Shaker\n"],
		[83, "Jingle\nBell\n"],
		[84, "Bell\nTree\n"],
		[85, "Castinets\n"],
		[86, "Mute\nSurdo\n"],
		[87, "Open\nSurdo\n"],
	],
	f1 = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
	f0 = [49, 57],
	f2 = [56, 102, 99, 54, 76, 77];
function f5(e, t, n) {
	let i = n * (5 - t) + 3;
	return f1.includes(e) ||
		f0.includes(e) ||
		92 === e ||
		46 === e ||
		52 === e ||
		93 === e ||
		59 === e
		? `M0 4v${i - 4}`
		: f2.includes(e)
		? `M0 3v${i - 3}`
		: `M0 0v${i}`;
}
function f4(e) {
	let t = fQ.filter((t) => e.has(t[0]));
	return e.has(41) && e.has(45) && (t = t.filter((e) => 45 !== e[0])), t;
}
function f3(e) {
	let { noteString: t, intervalSize: n, className: i, noteTransform: r } = e;
	return m("use", {
		className: i,
		transform: r + ` translate(0, ${-(t - Math.round(0.999 * t)) * n})`,
		xlinkHref: "#extraLine",
	});
}
function f8(e) {
	let { fret: t, className: n, transform: i } = e;
	return f1.includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumCross" })
		: f0.includes(t)
		? m("use", {
				className: n,
				transform: i,
				xlinkHref: "#drumCross",
				style: "stroke-width: 2",
		  })
		: 52 === t
		? m("g", {
				className: n,
				transform: i,
				children: [
					m("use", { xlinkHref: "#drumHat" }),
					m("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
				],
		  })
		: f2.includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumTriangle" })
		: [53, 91, 34].includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumRhomb" })
		: [46].includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumCircleCross" })
		: [92].includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumCircleStroke" })
		: [31].includes(t)
		? m("use", { className: n, transform: i, xlinkHref: "#drumStroke" })
		: m("use", { className: n, transform: i, xlinkHref: "#drum" });
}
let f6 = "rw29l",
	f9 = { figure: "rw29l" },
	f7 = "B6413b",
	ge = { strings: "B6413b" },
	gt = "h82xl",
	gn = "h89u",
	gi = "h82ou",
	gr = "h8j2",
	ga = "h82so",
	gs = "h81p9",
	go = "h81p9 h8e1",
	gl = "h81p9 h82d8",
	gc = "h81p9 h82c6",
	gu = "h81p9 h8cd",
	gd = "h816m",
	gp = "h818t",
	gh = "h818t h810t",
	gf = "h81w1",
	gg = "h82qg",
	gm = "h8152",
	gy = "h8ey",
	gv = "h8ey h81yr",
	gb = "h8ey h8306",
	gw = "h8ey h81cu",
	gS = "h8ey h82xx",
	gC = "h8ey h81cp",
	gk = "h8ey h82tw",
	gx = "h8ey h85n",
	gE = "h8ey h82pf",
	gT = {
		harmonic: "h82xl",
		rest0: "h89u",
		rest1: "h82ou",
		rest2: "h8j2",
		rest3: "h82so",
		voice: "h81p9",
		voice0: "h81p9 h8e1",
		voice1: "h81p9 h82d8",
		voice2: "h81p9 h82c6",
		voice3: "h81p9 h8cd",
		edited: "h816m",
		vDrum: "h818t",
		vDrum0: "h818t h810t",
		vDrum1: "h81w1",
		vDrum2: "h82qg",
		vDrum3: "h8152",
		drumstick: "h8ey",
		drums0: "h8ey h81yr",
		drums1: "h8ey h8306",
		drums2: "h8ey h81cu",
		drums3: "h8ey h82xx",
		stick0: "h8ey h81cp",
		stick1: "h8ey h82tw",
		stick2: "h8ey h85n",
		stick3: "h8ey h82pf",
	},
	g_ = 60;
function gP(e) {
	let { end: t, intervalSize: n } = e,
		i = "M0,0v48";
	for (let r = 0; r < 5; r++) i += `M0,${n * r} h${t}`;
	return (i += "V0"), g("path", { className: ge.strings, d: i });
}
function gL(e) {
	let { x: t, title: n, fret: i, string: r, intervalSize: a } = e;
	return g(
		k,
		null,
		g(
			"text",
			{ textAnchor: "middle" },
			n.split("\n").map((e, n) => g("tspan", { x: t, y: -14 * (3 - n) }, e))
		),
		g(gA, { x: t, fret: i, string: r, intervalSize: a })
	);
}
function gA(e) {
	let { x: t, fret: n, string: i, intervalSize: r } = e,
		a = gT.drums0,
		s = `translate(${t}, ${0.5 + r * i})`,
		o = g(f8, { fret: n, className: a, transform: s }),
		l =
			(i <= -1 || i >= 5) &&
			g(f3, {
				noteString: i,
				intervalSize: r,
				className: ge.strings,
				noteTransform: s,
			});
	return 93 === n || 59 === n
		? g(
				k,
				null,
				l,
				g("use", {
					className: a,
					transform: `translate(${t}, ${0.5 - r / 2})`,
					xlinkHref: "#drumHatEdge",
				}),
				o
		  )
		: l
		? g(k, null, l, o)
		: o;
}
function gN(e) {
	let { drumNotes: t, intervalSize: n } = e,
		i = 60 * Math.max(4, t.length);
	return g(
		"svg",
		{ className: f9.figure, width: i, height: 130 },
		g(
			"g",
			{ transform: "translate(0, 54)" },
			g(gP, { end: i, intervalSize: n }),
			t.map((e, t) =>
				g(gL, {
					fret: e[0],
					intervalSize: n,
					string: rk(e[0], !0),
					title: e[1],
					x: 60 * t + 30,
				})
			)
		)
	);
}
let gI = "Bcrye",
	gM = "Bcr2z8",
	gB = "Bcr19p",
	gD = "Bcr1zk",
	gz = "Bcr236",
	gO = "Bcr1zo",
	gR = "Bcr1os",
	g$ = "Bcr1dk",
	gF = "Bcr1zo Bcrlb",
	gH = "Bcrl3",
	gV = {
		title: "Bcrye",
		line: "Bcr2z8",
		toggle: "Bcr19p",
		wrap: "Bcr1zk",
		wrapHorizontal: "Bcr236",
		notation: "Bcr1zo",
		name: "Bcr1os",
		def: "Bcr1dk",
		notation__old: "Bcr1zo Bcrlb",
		subtitle: "Bcrl3",
	},
	gj = "Byam0",
	gU = "Bya2az",
	gG = "Bya2dc",
	gW = "Bya1se",
	gq = {
		exitActive: "Byam0",
		enterActive: "Bya2az",
		enter: "Bya2dc",
		exit: "Bya1se",
	},
	gX = "Ccsdl",
	gY = "Ccsnt",
	gK = "Ccstw",
	gJ = "Ccs2i1",
	gZ = {
		exitActive: "Ccsdl",
		enterActive: "Ccsnt",
		enter: "Ccstw",
		exit: "Ccs2i1",
	},
	gQ = { animationStyles: gq },
	g1 = { animationStyles: gZ },
	g0 = "help_notation";
function g2(e, t) {
	let n = f4(e),
		i = [];
	for (let r = 0; r < n.length; r += 4) i.push(n.slice(r, r + 4));
	return t && i.length % 2 == 1 && i.push([]), i;
}
function g5(e) {
	let t = Math.floor((e.size + 2) / 3),
		n = [...e.values()];
	return [n.slice(0, t), n.slice(t, 2 * t), n.slice(2 * t)];
}
let g4 = x((e) => {
		var t;
		let { usedDrums: n, horizontal: i } = e,
			{ layer: r, experiments: a } = lk("layer", "experiments"),
			s = r.layer === g0,
			o =
				(null === (t = a.drum_standard_notation) || void 0 === t
					? void 0
					: t.segment) !== "drop",
			l = o ? g2(n, i) : g5(n);
		return g(
			hF,
			null,
			s &&
				g(
					hY,
					i ? gQ : g1,
					g(
						"div",
						{ className: i ? gV.wrapHorizontal : gV.wrap },
						g(
							"div",
							{
								className: o ? gV.notation : gV.notation__old,
								id: "drum_notation",
							},
							g(
								"h3",
								{ className: gV.title },
								"Instruments in the current track"
							),
							o
								? l.map((e) => m(gN, { drumNotes: e, intervalSize: n6 }))
								: l.map((e, t) =>
										g(
											"div",
											{ className: gV.col, key: t },
											e.map((e) =>
												g(
													"dl",
													{ className: gV.line, key: e.name },
													g("dt", { className: gV.name }, e.name),
													g("dd", { className: gV.def }, rm[e.name])
												)
											)
										)
								  )
						)
					)
				)
		);
	}),
	g3 = "Cpf12y",
	g8 = "Cpf2jn",
	g6 = { difficulty: "Cpf12y", placeholder: "Cpf2jn" },
	g9 = 5,
	g7 = (e) => {
		let { id: t, difficultyString: n, difficultyNA: i } = e;
		if (!n || i)
			return g("span", { className: g6.placeholder, title: "Not calculated" });
		let r = 5 * nr(n);
		return g("span", {
			id: t,
			className: g6.difficulty,
			style: { "--diffSize": `${r}px` },
			title: na(n),
		});
	};
function me(e) {
	let { styles: t } = e;
	return g(
		"svg",
		{
			width: 13,
			height: 13,
			className: t.icon,
			viewBox: "0 -3 13 13",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		g("rect", { y: 1, width: 13, height: 11, rx: 3, className: t.fill }),
		g("path", {
			className: t.fillText,
			d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z",
		})
	);
}
let mt = "C6110p",
	mn = "C611iz",
	mi = "C61zq",
	mr = "C6131n",
	ma = "C612su",
	ms = "C61p",
	mo = "C61rs",
	ml = "C612ph",
	mc = "C61a4",
	mu = "C6133l",
	md = "C611xo",
	mp = "C612yg",
	mh = "C612gh",
	mf = "C61287",
	mg = "C612h7",
	mm = "C612h7 C611ae",
	my = "C61az",
	mv = "C61jc",
	mb = "C611ts",
	mw = "C612rd",
	mS = "C61212",
	mC = "C611fz",
	mk = "C611m5",
	mx = "C612eq",
	mE = "C612w9",
	mT = {
		header: "C6110p",
		wrap: "C611iz",
		separator: "C61zq",
		placeholder: "C6131n",
		song: "C612su",
		dash: "C61p",
		artist: "C61rs",
		title: "C612ph",
		track: "C61a4",
		difficulty: "C6133l",
		fill: "C611xo",
		fillText: "C612yg",
		explainLink: "C612gh",
		difficultyLinksPanel: "C61287",
		findEasierSongsLink: "C612h7",
		reportInvalidDifficultyLink: "C612h7 C611ae",
		label: "C61az",
		showroom: "C61jc",
		demo: "C611ts",
		instrumentTab: "C612rd",
		burger: "C61212",
		icon: "C611fz",
		stroke: "C611m5",
		lastEditOn: "C612eq",
		lastEditLink: "C612w9",
	},
	m_ = { animationStyles: gZ };
function mP(e) {
	let { handleNotation: t, track: n } = e,
		{
			dispatch: i,
			part: r,
			meta: a,
			screen: s,
			layer: o,
			device: l,
			isDeleted: c,
		} = lk("layer", "part", "meta", "screen", "layer", "device", "isDeleted"),
		u = l.isDesktop,
		d = s.isSmall,
		p = r.current && r.current.usedDrums,
		h = b(() => {
			i("layer/show", "difficulty_explained_popup");
		}, []),
		f = n.difficulty,
		m = !d && f && "difficulty_explained_popup" === o.layer,
		y = {
			className: mT.explainLink,
			onClick: h,
			title: "Explain how difficulty is calculated",
			id: "explain_difficulty_link",
		},
		v = l.locale ? [l.locale] : void 0,
		w = a && a.current && a.current.created_at,
		S = w ? th(new Date(a.current.created_at), v) : null,
		C = S && a.current && !a.revisionId ? "Last edit on:" : "Revision from:",
		x = b(() => {
			"revisions" !== o.layer &&
				(i("layer/show", "revisions"),
				i("curiosity/event", {
					event: "Opened revisions panel",
					Via: "Last edit on link",
				}));
		}, [o.layer]);
	return g(
		k,
		null,
		g("div", { className: mT.name, "aria-label": "track" }, "Track: ", n.title),
		d &&
			!c &&
			p &&
			g(
				"button",
				{ className: gV.toggle, onClick: t, "aria-label": "notation" },
				"(notation)"
			),
		d && !c && p && g(g4, { usedDrums: p }),
		d && g("hr", { className: mT.separator, width: 250 }),
		f &&
			g(
				"div",
				{ className: mT.difficulty, "aria-label": "track difficulty (rhythm)" },
				g("span", { className: mT.label }, "Difficulty (Rhythm):"),
				g(g7, { id: "track-difficulty", difficultyString: n.difficulty }),
				u && g("button", y, g(me, { styles: mT })),
				u && g(hF, null, m && g(hY, m_, g(hN, null)))
			),
		S &&
			!c &&
			!d &&
			g(
				"div",
				{ className: mT.lastEditOn, "aria-label": "last edit on" },
				g("span", { className: mT.label }, C),
				g("a", { to: null, onClick: x, className: mT.lastEditLink }, S)
			)
	);
}
let mL =
	"M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function mA(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i, stroke: r },
	} = e;
	return g(
		"svg",
		{
			width: t || 18,
			height: n || 19,
			viewBox: "0 0 18 19",
			className: i,
			"aria-labelledby": "title-signin",
		},
		g("title", { id: "title-signin" }, "Sign In"),
		g("path", {
			className: r,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: mL,
		})
	);
}
function mN() {
	return g(
		"svg",
		{ width: 55, height: 55, viewBox: "0 0 55 55" },
		g("path", {
			d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
			fill: "#FFAD00",
		}),
		g("path", {
			stroke: "#FFF",
			"stroke-width": 1.5,
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			fill: "none",
			transform: "translate(7 10) scale(1.85)",
			d: mL,
		})
	);
}
let mI = hs + " Cpv2j2",
	mM = hv + " Cpv16o",
	mB = hS + " Cpv2mh",
	mD = "Cpv2hv",
	mz = {
		popup: hs + " Cpv2j2",
		wrapper: hv + " Cpv16o",
		text: hS + " Cpv2mh",
		link: "Cpv2hv",
	},
	mO = "${}",
	mR = RegExp("\\${}", "g"),
	m$ = (e) => {
		let t = null == e ? void 0 : e.pluralForms;
		return t
			? Function("n", "nplurals", "plural", `${t} return ~~plural;`)
			: mF;
	};
function mF(e) {
	return 1 === e ? 0 : 1;
}
let mH = (e) => e.join("${}"),
	mV = (e, t) => {
		let n = 0;
		return e.replace(mR, () => t[n++]);
	};
function mj(e) {
	for (
		var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
		i < t;
		i++
	)
		n[i - 1] = arguments[i];
	let r = n.find((t) => t.language === e),
		a = m$(r),
		s = function () {
			var e, t, n;
			let i =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
				s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
			return (
				(null == r
					? void 0
					: null === (e = r.translations) || void 0 === e
					? void 0
					: null === (t = e[i]) || void 0 === t
					? void 0
					: null === (n = t[a]) || void 0 === n
					? void 0
					: n[s]) || ""
			);
		},
		o = function (e) {
			for (
				var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
				i < t;
				i++
			)
				n[i - 1] = arguments[i];
			if (Array.isArray(e)) {
				let r = mH(e),
					a = s("", r) || r;
				return mV(a, n);
			}
			return s("", e) || e;
		},
		l = (e, t) =>
			t
				? s(e, t) || t
				: function (t) {
						for (
							var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1;
							r < n;
							r++
						)
							i[r - 1] = arguments[r];
						let a = mH(t),
							o = s(e, a) || a;
						return mV(o, i);
				  },
		c = function (e) {
			for (
				var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
				i < t;
				i++
			)
				n[i - 1] = arguments[i];
			if (Array.isArray(e))
				return function (t) {
					for (
						var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1;
						o < i;
						o++
					)
						r[o - 1] = arguments[o];
					return (i) => {
						let o = mH(e),
							l = a(i),
							c = s("", o, l);
						return c
							? mV(c, l ? r : n)
							: mV((l = mF(i)) ? mH(t) : o, l ? r : n);
					};
				};
			let r = n[1];
			return s("", e, a(r)) || (0 === mF(r) ? e : n[0]);
		},
		u = (e, t, n, i) =>
			t
				? s(e, t, a(i)) || (0 === mF(i) ? t : n)
				: function (t) {
						for (
							var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1;
							r < n;
							r++
						)
							i[r - 1] = arguments[r];
						return function (n) {
							for (
								var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), l = 1;
								l < r;
								l++
							)
								o[l - 1] = arguments[l];
							return (r) => {
								let l = mH(t),
									c = a(r),
									u = s(e, l, c);
								return u
									? mV(u, c ? o : i)
									: mV((c = mF(r)) ? mH(n) : l, c ? o : i);
							};
						};
				  };
	return { locale: e, gettext: o, pgettext: l, ngettext: c, npgettext: u };
}
function mU(e) {
	return Object.keys(e).some((t) =>
		Object.keys(e[t]).some((n) => "" != e[t][n][0])
	);
}
function mG() {
	for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++)
		i[r] = arguments[r];
	let { dispatch: a, device: s, experiments: o } = lk("device", "experiments"),
		l = "en";
	if ((s.locale && (l = s.locale.split("-")[0].toLowerCase()), "fr" === l)) {
		if (
			(null === (e = o.french_plus) || void 0 === e ? void 0 : e.status) ===
			"pending"
		) {
			let c = mU(i[0].translations);
			c && a("experiments/activate", { experimentName: "french_plus" });
		}
		(null === (t = o.french_plus) || void 0 === t ? void 0 : t.segment) ===
			"off" && (l = "en");
	}
	return (window.__LOCALE__ = l), p(() => mj(l, ...i), [...i, l]);
}
var mW = {
	translations: {
		"": {
			" for free": [""],
			"Please ": [""],
			"sign up": [""],
			"Sign up for free to favorite this tab.": [""],
			"to favorite this tab.": [""],
		},
	},
	language: "fr",
	pluralForms: "nplurals=2; plural=(n > 1);",
};
function mq(e) {
	let { onClick: t, id: n } = e,
		{ gettext: i } = mG(mW);
	return g(
		ha,
		{
			className: mz.popup,
			id: n,
			to: "/a/wa/signin",
			onClick: t,
			role: "dialog",
			"aria-label": i("Sign up for free to favorite this tab."),
		},
		g("span", { className: mz.wrapper }, g(mN, null)),
		g(
			"div",
			{ className: mz.text },
			i("Please "),
			g("span", { className: mz.link }, i("sign up")),
			i(" for free"),
			g("br", null),
			i("to favorite this tab.")
		)
	);
}
let mX =
		"M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
	mY = `${mX}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function mK(e) {
	let {
			width: t,
			height: n,
			viewbox: i,
			title: r = "Favorite",
			styles: { icon: a },
			id: s,
			state: o,
		} = e,
		l = `title-${s || "favorite"}`;
	return g(
		"svg",
		{
			width: t || 29,
			height: n || 27,
			viewBox: i || "0 0 29 27",
			className: a,
			"data-icon": o,
			id: s,
			"aria-labelledby": l,
		},
		g("title", { id: l }, r),
		g("path", { d: "fill" === o ? mX : mY })
	);
}
let mJ = "xji4",
	mZ = "xj3s",
	mQ = "xj248",
	m1 = "xj248 xj13q",
	m0 = {
		favorite: "xji4",
		toggle: "xj3s",
		star: "xj248",
		starSelected: "xj248 xj13q",
	},
	m2 = { animationStyles: gZ };
function m5() {
	let {
		dispatch: e,
		user: t,
		favorites: n,
		meta: i,
		layer: r,
		isDeleted: a,
	} = lk("user", "favorites", "meta", "experiments", "layer", "isDeleted");
	if (a || !i.allowedByLicense) return;
	let s = "favorite" === r.layer,
		o = t.isLoggedIn,
		l = i.partId,
		c =
			o &&
			(i.wasFavoriteOnServerRender ||
				n.favorites.some((e) => e.songId === i.songId)),
		u = b(() => {
			if (o && i.current) {
				if (c) e("favorites/delete", i.songId);
				else {
					let {
							songId: t,
							artistId: n,
							artist: a,
							title: u,
							tracks: d,
						} = i.current,
						p = {
							songId: t,
							artistId: n,
							artist: a,
							title: u,
							tracks: d
								? d.map((e) => {
										let {
											instrument: t,
											instrumentId: n,
											name: i,
											difficulty: r,
											tuning: a,
										} = e;
										return {
											instrument: t,
											instrumentId: n,
											name: i,
											tuning: a,
											difficulty: r,
										};
								  })
								: d,
							defaultTrack: l,
						};
					lt(p), e("favorites/add", { songId: t, song: p });
				}
				r.layer && e("layer/hide");
			} else s ? e("layer/hide") : e("layer/show", "favorite");
		}, [r, o, c, i, l]),
		d = c ? m0.starSelected : m0.star;
	return g(
		"div",
		{ className: m0.favorite, id: "favorite" },
		g(
			"button",
			{
				className: m0.toggle,
				id: "favorite-toggle",
				onClick: u,
				title: c ? "Remove from favorites" : "Add to favorites",
			},
			g(mK, {
				width: 30,
				height: 30,
				viewbox: "-4 -3 35 35",
				state: c ? "fill" : "none",
				styles: { icon: d },
				id: "favorite-icon",
			})
		),
		g(hF, null, s && g(hY, m2, g(mq, { id: "favorite-popup" })))
	);
}
function m4(e) {
	let { styles: t } = e;
	return g(
		"svg",
		{
			width: 21,
			height: 21,
			viewBox: "1050 24.198 18 20.996",
			className: t.icon,
			id: "tab-delete-icon",
			role: "img",
			"aria-labelledby": "tab-delete-id",
		},
		g("title", { id: "tab-delete-id" }, "Delete Tab"),
		g("path", {
			className: t.strokeAnim,
			d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z",
		}),
		g("path", {
			className: t.fill,
			d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z",
		}),
		g("path", {
			className: t.strokeAnim,
			d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z",
		})
	);
}
let m3 = "tnv2",
	m8 = "tn1vk",
	m6 = "tn1vk tnwo",
	m9 = "tn13b",
	m7 = "tn1pz",
	ye = "tn1pz tn10k",
	yt = {
		delete: "tnv2",
		button: "tn1vk",
		buttonActive: "tn1vk tnwo",
		icon: "tn13b",
		fill: "tn1pz",
		strokeAnim: "tn1pz tn10k",
	},
	yn = (e, t) => {
		let n = `${e}, ${t}`,
			i =
				"You are about to delete the whole song with all its revisions permanently. To confirm deletion, please enter the song artist and title as described below:\n\n" +
				n +
				"\n",
			r = window.prompt(i);
		return (
			r === n ||
			(window.alert(
				"Confirmation string does not match artist and title. Aborting deletion!"
			),
			!1)
		);
	},
	yi = () => {
		let {
				dispatch: e,
				meta: t,
				part: n,
				editor: i,
				isDeleted: r,
			} = lk("meta", "part", "editor", "isDeleted"),
			a =
				!r &&
				!t.isFailed &&
				!n.isFailed &&
				t.current &&
				!!t.current.tracks &&
				!!t.current.audio &&
				i.canDelete;
		if (!a) return;
		let s = b(() => {
				t.current &&
					yn(t.current.artist, t.current.title) &&
					e("editor/delete", t.current);
			}, [e, t.current]),
			o = i.processingDeletion;
		return g(
			"div",
			{ className: yt.delete, id: "deletion" },
			o && g(p0, { width: 21, height: 21, fill: "#42a4f8" }),
			!o &&
				g("button", { className: yt.button, onClick: s }, g(m4, { styles: yt }))
		);
	};
function yr(e) {
	let { styles: t } = e;
	return g(
		"svg",
		{
			width: 25,
			height: 24,
			viewBox: "0 0 25 24",
			className: t.icon,
			id: "revisions-icon",
			role: "img",
			"aria-labelledby": "revisions-title-id",
		},
		g("title", { id: "revisions-title-id" }, "Revisions"),
		g("path", {
			className: t.strokeAnim,
			"stroke-width": "2",
			d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9",
		}),
		g("path", {
			className: t.stroke,
			"stroke-width": "1.8",
			"stroke-linecap": "round",
			strokeLinejoin: "round",
			d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6",
		}),
		g("path", {
			className: t.fill,
			d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z",
		})
	);
}
let ya = "undefined" == typeof window;
function ys(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
	if (!ya)
		return Promise.all(
			null == e
				? void 0
				: e.map(
						(e) =>
							new Promise((n, i) => {
								if (document.querySelectorAll(`link[href="${e}"]`).length) {
									n(!0);
									return;
								}
								let r = document.createElement("link"),
									a = (
										document.body || document.getElementsByTagName("head")[0]
									).childNodes,
									s = a[a.length - 1];
								Object.assign(r, {
									rel: "stylesheet",
									href: e,
									onerror: i,
									onload: n,
									media: t,
								}),
									s.parentNode.insertBefore(r, s.nextSibling);
							})
				  )
		);
}
let yo = "Bo82u2",
	yl = "Bo81oq",
	yc = { popup: "Bo82u2", arrow: "Bo81oq" },
	yu = E(() =>
		Promise.all([
			import("./RevisionsPopupContent.92f71268.js"),
			ys([
				"/static/latest/RevisionsPopupContent.ccf5072bac49492e.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/FileInput.7c805333bfa0e181.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
			]),
		]).then((e) => e[0])
	),
	yd = 298,
	yp = () => {
		let { dispatch: e, meta: t } = lk("meta"),
			[n, i] = d({ height: 298 });
		return (
			p(async () => {
				let n = new tI();
				return await cp(e, t.songId, n.signal), n.abort.bind(n);
			}, [t.songId]),
			f(() => e("upload/reset"), []),
			g(
				"div",
				{ id: "revisions-popup", className: yc.popup, style: n },
				g(hi, { component: yu, style: n, setStyle: i }),
				g("div", { className: yc.arrow })
			)
		);
	},
	yh = "e32l8",
	yf = "e32ah",
	yg = "e32ah e3d0",
	ym = "e32em",
	yy = "e32kz",
	yv = "e319r",
	yb = "e319r e31k",
	yw = {
		revisions: "e32l8",
		toggle: "e32ah",
		toggleActive: "e32ah e3d0",
		icon: "e32em",
		fill: "e32kz",
		stroke: "e319r",
		strokeAnim: "e319r e31k",
	},
	yS = { animationStyles: gZ },
	yC = () => {
		let {
				dispatch: e,
				layer: t,
				isDeleted: n,
				screen: i,
				meta: r,
			} = lk("layer", "screen", "isDeleted", "meta"),
			a = !n && !i.isSmall && r.allowedByLicense;
		if (!a) return;
		let s = "revisions" === t.layer,
			o = b(() => {
				"revisions" === t.layer
					? e("layer/hide")
					: (e("layer/show", "revisions"),
					  e("curiosity/event", {
							event: "Opened revisions panel",
							Via: "Revisions button",
					  }));
			}, [t.layer]),
			l = {
				className: s ? yw.toggleActive : yw.toggle,
				id: "revisions-toggle",
				onClick: o,
				title: s ? "Hide revisions" : "Show revisions",
			},
			c = g(yp, null);
		return g(
			"div",
			{ className: yw.revisions, id: "revisions" },
			g("button", l, g(yr, { styles: yw })),
			g(hF, null, s && g(hY, yS, c))
		);
	},
	yk = "Cye1em",
	yx = "Cye35a",
	yE = "Cye35a Cye1tx",
	yT = "Cye1ja",
	y_ = "Cye2aa",
	yP = "Cye2dx",
	yL = "Cye2b7",
	yA = {
		buttonWrapper: "Cye1em",
		button: "Cye35a",
		active: "Cye35a Cye1tx",
		shape: "Cye1ja",
		popup: "Cye2aa",
		escPopup: "Cye2dx",
		clickOverlay: "Cye2b7",
	},
	yN = { animationStyles: gZ, timeout: 500 },
	yI = 3500,
	yM =
		"M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z",
	yB =
		"M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z";
class yD extends w {
	pendingHideHint = null;
	constructor() {
		super(), (this.state = { showHint: !1 });
	}
	componentWillReceiveProps(e) {
		let t = this.props;
		e.isFullscreen !== t.isFullscreen &&
			(this.cancelPendingHideHint(),
			e.isFullscreen &&
				(this.setState({ showHint: !0 }),
				(this.pendingHideHint = setTimeout(() => {
					this.setState({ showHint: !1 });
				}, 3500)))),
			e.isFullscreen || this.setState({ showHint: !1 });
	}
	componentWillUnmount() {
		this.cancelPendingHideHint();
	}
	render() {
		let e = this.props.isFullscreen,
			t = "fullscreen-title-id";
		return g(
			"div",
			{ id: "fullscreen" },
			g(
				hF,
				null,
				this.state.showHint &&
					g(
						hY,
						yN,
						g(
							"div",
							{ className: yA.escPopup, onClick: this.onEscHintClick },
							"Press ESC to exit fullscreen mode"
						)
					)
			),
			g(
				"div",
				{ className: yA.buttonWrapper, id: "fullscreen-controls" },
				g(
					"button",
					{
						className: e ? yA.active : yA.button,
						onClick: this.props.handleFullscreen,
						"aria-label": "fullscreen",
					},
					g(
						"svg",
						{ width: 24, height: 17, role: "img", "aria-labelledby": t },
						g(
							"title",
							{ id: t },
							e
								? "Turn off fullscreen mode (ESC)"
								: "Turn on fullscreen mode (Alt + Enter)"
						),
						g("path", {
							className: yA.shape,
							d: e
								? "M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z"
								: "M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z",
						})
					)
				)
			)
		);
	}
	onEscHintClick = () => {
		this.cancelPendingHideHint(), this.setState({ showHint: !1 });
	};
	cancelPendingHideHint() {
		null != this.pendingHideHint &&
			(clearTimeout(this.pendingHideHint), (this.pendingHideHint = null));
	}
}
function yz(e) {
	let {
		shadow: t = "#CA7F06",
		width: n = 54,
		height: i = 30,
		id: r = "iconDemo",
	} = e;
	return g(
		"svg",
		{ width: n, height: i, viewBox: "0 0 54 30" },
		g(
			"defs",
			{},
			g(
				"filter",
				{
					id: r,
					x: "-200%",
					y: "-200%",
					width: "400%",
					height: "400%",
					"filter-units": "objectBoundingBox",
					"color-interpolation-filters": "sRGB",
				},
				g("feGaussianBlur", { in: "SourceGraphic" }),
				g("feOffset", { dy: 3, result: "offsetBlur" }),
				g("feFlood", { floodColor: t, floodOpacity: 1 }),
				g("feComposite", {
					in2: "offsetBlur",
					operator: "in",
					result: "dropShadow",
				}),
				g("feBlend", { in: "SourceGraphic", in2: "dropShadow" })
			)
		),
		g("path", {
			d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
			fill: "#FF9D00",
			filter: `url(#${r})`,
			databackgound: "",
		}),
		g("path", {
			fill: "#FFF",
			d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
		})
	);
}
let yO = "Cy52of",
	yR = { switcherLink: "Cy52of" };
var y$ = "/static/media/to-chords.052d3c49.svg",
	yF = "/static/media/to-tab.8c38afc0.svg";
function yH(e) {
	let { isTab: t, isChords: n, song: i, meta: r, chords: a } = e;
	if (t && i.hasChords) {
		let s = i.title + " Chords";
		return m(ha, {
			to: eV(r.current),
			className: yR.switcherLink,
			title: s,
			children: [m("img", { src: y$, width: 23, height: 22, alt: s })],
		});
	}
	if (n && i.hasPlayer) {
		let o = i.title + " Tab";
		return m(ha, {
			to: e$(a.current),
			className: yR.switcherLink,
			title: o,
			children: [m("img", { src: yF, width: 23, height: 22, alt: o })],
		});
	}
}
function yV(e) {
	let {
		styles: { icon: t, stroke: n },
	} = e;
	return g(
		"svg",
		{ width: 27, height: 25, viewBox: "0 0 27 25", className: t },
		g("path", { d: "M0 5h27M0 12h27M0 19h27", className: n, "stroke-width": 2 })
	);
}
function yj(e) {
	return ea(e) ? " Bass Tab" : ei(e) ? " Drum Tab" : " Tab";
}
function yU(e) {
	let t,
		n,
		{
			plusAccess: i,
			handleFullscreen: r,
			handleNotation: a,
			showFullUI: s = !0,
		} = e,
		{
			dispatch: o,
			route: l,
			routeContent: c,
			songs: u,
			artist: d,
			screen: p,
			favorites: h,
			meta: f,
			demo: g,
			chords: y,
			curiosity: v,
			isDeleted: b,
		} = lk(
			"route",
			"routeContent",
			"songs",
			"artist",
			"favorites",
			"screen",
			"meta",
			"demo",
			"chords",
			"curiosity",
			"isDeleted"
		),
		w = l.isPanel,
		S = p.isSmall,
		C = c.songId,
		x = !1,
		E = !1,
		T = !1,
		_ = null;
	if (
		("tab" === c.page
			? ((x = !0),
			  (T = !i && f.allowedByLicense),
			  f.current &&
					f.current.songId === C &&
					((t = f.current),
					null != f.partId &&
						f.current.tracks &&
						(_ = f.current.tracks[f.partId])),
			  !t &&
					y.current &&
					y.current.songId === C &&
					(t = { ...y.current, hasChords: !0 }),
			  (n = " Tab"))
			: "chords" === c.page &&
			  ((E = !0),
			  y.current && y.current.songId === C && (t = y.current),
			  !t &&
					f.current &&
					f.current.songId === C &&
					(t = { ...f.current, hasPlayer: !0 }),
			  (n = " Chords")),
		t || (t = u.songs.list.find((e) => e.songId === C)),
		t || (t = d.songs.list.find((e) => e.songId === C)),
		t || (t = h.favorites.find((e) => e.songId === C)),
		!t)
	)
		return;
	if ("tab" === c.page) {
		if (_) n = yj(_.instrumentId);
		else if (null == c.partId)
			"bass" === c.partInstrument
				? (n = yj(32))
				: "drum" === c.partInstrument && (n = yj(1024));
		else {
			let P = t.tracks;
			P && P[c.partId] && (n = yj(P[c.partId].instrumentId));
		}
	}
	if (!s)
		return m("header", {
			className: mT.header,
			id: "header",
			children: [
				m("div", {
					className: mT.wrap,
					children: [
						m(
							"h1",
							{
								className: mT.song,
								children: [
									m(
										"span",
										{
											className: mT.artist,
											"aria-label": "artist",
											children: t.artist,
										},
										"arts"
									),
									m(
										"span",
										{ className: mT.dash, children: "\xa0-\xa0" },
										"dash"
									),
									m(
										"span",
										{
											className: mT.title,
											"aria-label": "title",
											children: t.title,
										},
										"ttl"
									),
									m(
										"span",
										{
											className: mT.instrumentTab,
											"aria-label": "tab type",
											children: n,
										},
										"sfx"
									),
								],
							},
							"h-h1"
						),
					],
				}),
			],
		});
	let L = () =>
			o("curiosity/setConversionProps", { "Last referring link": "Demo Link" }),
		A = () =>
			o("curiosity/setConversionProps", {
				"Last referring link": "Header Link",
			}),
		N = (null == _ ? void 0 : _.isDrums)
			? "drummer"
			: (null == _ ? void 0 : _.isBassGuitar)
			? "bassist"
			: "guitar player",
		I =
			v.vpt10.count > 0
				? "Struggling to learn this song? Improve your playing with Songsterr Plus!"
				: `Become a badass ${N} with Songsterr Plus!`;
	return m("header", {
		className: mT.header,
		id: "header",
		children: [
			m("div", {
				className: mT.wrap,
				children: [
					S &&
						m(
							ha,
							{
								to: `/${ly(u.pattern, u.filters)}`,
								className: mT.burger,
								title: "Search",
								id: "appheader-burger",
								children: m(yV, { styles: mT }, "icn"),
							},
							"menu"
						),
					!p.fullscreen && x && m(m5, null, "fav"),
					!p.fullscreen &&
						m(
							yH,
							{ isTab: x, isChords: E, song: t, meta: f, chords: y },
							"switch"
						),
					m(
						w ? "div" : "h1",
						{
							className: mT.song,
							children: [
								m(
									ha,
									{
										className: mT.artist,
										"aria-label": "artist",
										to: `${eH(t)}${ly(d.pattern, d.filters)}`,
										children: t.artist,
									},
									"artist"
								),
								m(
									"span",
									{ className: mT.dash, children: "\xa0-\xa0" },
									"dash"
								),
								m(
									"span",
									{
										className: mT.title,
										"aria-label": "title",
										children: t.title,
									},
									"ttl"
								),
								m(
									"span",
									{
										className: mT.instrumentTab,
										"aria-label": "tab type",
										children: n,
									},
									"sfx"
								),
								!p.fullscreen &&
									g.enabled &&
									m(ha, {
										to: "/a/wa/plus",
										className: mT.demo,
										"aria-label": "Demo Song",
										onClick: L,
										children: m(
											yz,
											{
												width: 42,
												height: 22,
												shadow: "transparent",
												id: "iconDemo2",
											},
											"demo"
										),
									}),
							],
						},
						w ? "h-div" : "h-h1"
					),
					s &&
						!p.fullscreen &&
						x &&
						m(k, { children: [m(yi, null, "del"), m(yC, null, "rev")] }),
					!p.isSmall &&
						m(yD, { isFullscreen: p.fullscreen, handleFullscreen: r }, "ctl"),
					T &&
						m(
							ha,
							{
								id: "text-showroom",
								className: mT.showroom,
								to: "/a/wa/plus?from=header_link",
								onClick: A,
								children: [I],
							},
							"show"
						),
					_ &&
						!b &&
						m(
							w ? "div" : "h2",
							{
								className: mT.track,
								children: m(mP, { track: _, handleNotation: a }),
							},
							w ? "div" : "h2"
						),
				],
			}),
		],
	});
}
let yG = "x012m",
	yW = "x0ln",
	yq = "x01yo",
	yX = "x02wd",
	yY = "x02du",
	yK = "x01qb",
	yJ = "x02zn",
	yZ = "x02vp",
	yQ = "x02e0",
	y1 = "x0tr",
	y0 = "x02zn x035p",
	y2 = "x026k",
	y5 = "x02ar",
	y4 = "x0mp",
	y3 = "x02fd",
	y8 = "x0198",
	y6 = {
		pane: "x012m",
		divider: "x0ln",
		dividerEdge: "x01yo",
		dividerSmall: "x02wd",
		float: "x02du",
		icon: "x01qb",
		item: "x02zn",
		logo: "x02vp",
		text: "x02e0",
		stroke: "x0tr",
		itemActive: "x02zn x035p",
		logoText: "x026k",
		overlay: "x02ar",
		jobs: "x0mp",
		new: "x02fd",
		mainpanel: "x0198",
	},
	y9 = {
		search: ["search"],
		signin: ["signup", "forgotpassword"],
		account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
		plus: ["subscribePlus"],
	};
function y7(e) {
	let { id: t, route: n, url: i, songUrl: r, children: a, linkClick: s } = e,
		o = u(lS),
		l = t === n.page || (t in y9 && -1 !== y9[t].indexOf(n.page)),
		c = t === n.page ? r : i,
		d = b(
			(e) => {
				e.preventDefault(), s && s(l), o.dispatch("navigate", c);
			},
			[c]
		);
	return g(
		"a",
		{
			href: c,
			onClick: d,
			id: `menu-${t}`,
			class: l ? y6.itemActive : y6.item,
		},
		a
	);
}
function ve(e) {
	let { favorites: t } = lk("favorites");
	return g(y7, { ...e, url: `${e.url}${ly(t.pattern, t.filters)}` });
}
function vt(e) {
	let { songs: t, dispatch: n } = lk("songs"),
		i = `${e.url}${ly(t.pattern, t.filters)}`,
		r = "search" === e.route.page ? e.songUrl : i,
		a = b(
			(e) => {
				e.preventDefault(), n("navigate", r);
			},
			[r]
		);
	return g("a", { ...e, href: r, onClick: a, to: null });
}
function vn(e) {
	let { songs: t } = lk("songs");
	return g(y7, { ...e, url: `${e.url}${ly(t.pattern, t.filters)}` });
}
function vi(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i, stroke: r },
	} = e;
	return g(
		"svg",
		{
			width: t || 19,
			height: n || 19,
			viewBox: "0 0 19 19",
			className: i,
			"aria-labelledby": "title-account",
		},
		g("title", { id: "title-account" }, "Account"),
		g("ellipse", {
			className: r,
			cx: 9.73,
			cy: 5.8,
			rx: 3.76,
			ry: 4.7,
			strokeWidth: 1.5,
		}),
		g("path", {
			className: r,
			strokeWidth: 1.5,
			d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z",
		})
	);
}
function vr(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i },
	} = e;
	return g(
		"svg",
		{ width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
		g("path", {
			d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
		})
	);
}
function va(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i },
	} = e;
	return g(
		"svg",
		{
			width: t || 29,
			height: n || 27,
			viewBox: "0 0 1000 820",
			className: i,
			"aria-labelledby": "title-faq",
		},
		g("title", { id: "title-faq" }, "Frequently Asked Questions"),
		g("path", {
			d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
		})
	);
}
function vs(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i, stroke: r },
	} = e;
	return g(
		"svg",
		{ width: t || 18, height: n || 19, viewBox: "0 0 18 19", className: i },
		g("path", {
			className: r,
			strokeWidth: 1.5,
			strokeLinecap: "round",
			d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42",
		})
	);
}
let vo =
		"M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
	vl = "M14.5 17v-15.5m-5 5l5 -5l5 5";
function vc(e) {
	let {
		width: t,
		height: n,
		styles: { icon: i, stroke: r },
	} = e;
	return g(
		"svg",
		{ width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
		g("path", {
			d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
		}),
		g("path", {
			className: r,
			"stroke-width": 2,
			d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
		})
	);
}
function vu(e) {
	if (!document.body) return;
	let t = window.innerWidth - document.body.clientWidth,
		n = e ? "0px" : `${t}px`;
	document.body.style.overflow = e ? "inherit" : "hidden";
	let i = document.getElementById("app");
	i && (i.style.marginRight = n);
	let r = document.getElementById("controls");
	r && (r.style.marginRight = n);
	let a = document.getElementById("fullscreen-controls");
	a && (a.style.marginRight = n);
	let s = document.getElementById("showroom");
	s && (s.style.paddingRight = n);
	let o = document.documentElement;
	o && o.style.setProperty("--page-overflow-gap", n);
}
let vd = E(() =>
		Promise.all([
			import("./AppChords.86b01901.js"),
			ys([
				"/static/latest/AppChords.8c5c2858fe5f8fc4.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/AppFooter.a2b8f49ab63d4c4d.css",
				"/static/latest/SWW.ee0869611439c289.css",
				"/static/latest/Capo.b5d5a63b5db6069f.css",
			]),
		]).then((e) => e[0])
	),
	vp = E(() =>
		Promise.all([
			import("./AppTags.8137f65d.js"),
			ys([
				"/static/latest/AppTags.e210aabd9d1f9d59.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/AppFooter.a2b8f49ab63d4c4d.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	vh = E(() =>
		Promise.all([
			import("./AppTab.14675376.js"),
			ys([
				"/static/latest/AppTab.34e295470788e9cf.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Capo.b5d5a63b5db6069f.css",
				"/static/latest/AppFooter.a2b8f49ab63d4c4d.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	vf = E(() =>
		Promise.all([
			import("./SongsPanel.43a73d88.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
			]),
		]).then((e) => e[0])
	),
	vg = E(() =>
		Promise.all([
			import("./FavoritesPanel.217c5544.js"),
			ys([
				"/static/latest/FavoritesPanel.fccd96b41e79d31b.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
			]),
		]).then((e) => e[0])
	),
	vm = E(() =>
		Promise.all([
			import("./ArtistPanel.80a113d1.js"),
			ys([
				"/static/latest/ArtistPanel.fd61db0afdcd05e3.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vy = E(() =>
		Promise.all([
			import("./SubmitPanel.6ecd6152.js"),
			ys([
				"/static/latest/SubmitPanel.8a39e7eff3cd94af.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/FileInput.7c805333bfa0e181.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
			]),
		]).then((e) => e[0])
	),
	vv = E(() =>
		Promise.all([
			import("./TextPanel.81e943ab.js"),
			ys([
				"/static/latest/TextPanel.b65687d362098683.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/index.b12afd8487ff4de1.css",
			]),
		]).then((e) => e[0])
	),
	vb = E(() =>
		Promise.all([
			import("./AboutPanel.b74516f2.js"),
			ys([
				"/static/latest/AboutPanel.90a1dc2a1bed94a5.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vw = E(() =>
		Promise.all([
			import("./JobsPanel.452de532.js"),
			ys([
				"/static/latest/JobsPanel.5f73cabf19d918b7.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vS = E(() =>
		Promise.all([
			import("./HelpPanel.8fdaab5d.js"),
			ys([
				"/static/latest/HelpPanel.0e111599c5b6d415.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/TocPointer.4277edfc32523766.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	vC = E(() =>
		Promise.all([
			import("./SigninPanel.e654add8.js"),
			ys([
				"/static/latest/SigninPanel.374924d6629568fa.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vk = E(() =>
		Promise.all([
			import("./SignupPanel.da405c4e.js"),
			ys([
				"/static/latest/SignupPanel.c958ca78cefae30f.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vx = E(() =>
		Promise.all([
			import("./AccountPanel.4192f7dd.js"),
			ys([
				"/static/latest/AccountPanel.a74461eaddfc799e.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vE = E(() =>
		Promise.all([
			import("./MyTabsPanel.ef46fa39.js"),
			ys([
				"/static/latest/MyTabsPanel.8b277fe0b599560e.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
			]),
		]).then((e) => e[0])
	),
	vT = E(() =>
		Promise.all([
			import("./ForgotPasswordPanel.72b105dc.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	v_ = E(() =>
		Promise.all([
			import("./ChangePasswordPanel.ca4f8969.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	vP = E(() =>
		Promise.all([
			import("./PlusPanel.7bd77796.js"),
			ys([
				"/static/latest/PlusPanel.8b940a3ca76394ce.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vL = E(() =>
		Promise.all([
			import("./PaymentPanel.aa3e96fa.js"),
			ys([
				"/static/latest/PaymentPanel.6d2b3da012ef330b.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/PaymentForm.84991b3ba8107b90.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	vA = E(() =>
		Promise.all([
			import("./CouponPanel.a2670f42.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	vN = E(() =>
		Promise.all([
			import("./CancelPlusPanel.17803735.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	vI = E(() =>
		Promise.all([
			import("./DeactivatePanel.ab019fd8.js"),
			ys([
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	vM = E(() =>
		Promise.all([
			import("./UpdateCardPanel.2090cdb6.js"),
			ys([
				"/static/latest/UpdateCardPanel.38d040a682d0cdf1.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/PaymentForm.84991b3ba8107b90.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	vB = E(() =>
		Promise.all([
			import("./HowToReadTabPanel.5973453d.js"),
			ys([
				"/static/latest/HowToReadTabPanel.4e5ad16256add301.css",
				"/static/latest/index.b12afd8487ff4de1.css",
				"/static/latest/TocPointer.4277edfc32523766.css",
				"/static/latest/Panel.e73a15f0883258f2.css",
			]),
		]).then((e) => e[0])
	),
	vD = "w6o",
	vz = "w613o",
	vO = "w617j",
	vR = "w6ty",
	v$ = {
		exitActive: "w6o",
		enterActive: "w613o",
		enter: "w617j",
		exit: "w6ty",
	};
function vF(e) {
	let { width: t, height: n, styles: i } = e;
	return g(
		"svg",
		{
			width: t || 21,
			height: n || 26,
			viewBox: "0 0 21 26",
			"aria-labelledby": "title-tabs",
			fill: "none",
		},
		g("rect", {
			x: 1,
			y: 1,
			width: 19,
			height: 24,
			rx: 2,
			className: i.stroke,
			"stroke-width": 2,
			fill: "none",
		}),
		g("path", {
			d: "M11.75 9.95652C11.75 10.6132 11.5301 11.1469 11.2526 11.4847C10.9786 11.8184 10.7024 11.913 10.5 11.913C10.2976 11.913 10.0214 11.8184 9.74736 11.4847C9.46988 11.1469 9.25 10.6132 9.25 9.95652C9.25 9.29986 9.46988 8.76612 9.74736 8.42832C10.0214 8.09468 10.2976 8 10.5 8C10.7024 8 10.9786 8.09468 11.2526 8.42832C11.5301 8.76612 11.75 9.29986 11.75 9.95652ZM12.0218 13.4534C13.0499 12.7889 13.75 11.4723 13.75 9.95652C13.75 7.7714 12.2949 6 10.5 6C8.70507 6 7.25 7.7714 7.25 9.95652C7.25 11.4723 7.95013 12.7889 8.97816 13.4534C6.12247 13.8552 4 15.3466 4 16.9219C4 18.7664 6.91015 19 10.5 19C14.0899 19 17 18.7664 17 16.9219C17 15.3466 14.8775 13.8552 12.0218 13.4534ZM14.6191 16.7104C14.6788 16.6957 14.733 16.6811 14.7819 16.6669C14.6515 16.5369 14.444 16.3713 14.1142 16.1854C13.2745 15.7122 11.9958 15.3478 10.5 15.3478C9.0042 15.3478 7.72549 15.7122 6.88578 16.1854C6.55602 16.3713 6.3485 16.5369 6.21808 16.6669C6.26701 16.6811 6.32116 16.6957 6.38094 16.7104C7.2898 16.9337 8.6834 17 10.5 17C12.3166 17 13.7102 16.9337 14.6191 16.7104Z",
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			className: i.icon,
		}),
		g("title", { id: "title-account" }, "Tabs")
	);
}
var vH = "/static/media/jobs.e25c0248.svg",
	vV = "/static/media/main.c9ba66df.svg",
	vj = "/static/media/text.5e616329.svg";
let vU = "p2287",
	vG = "p22sz",
	vW = "p21o9",
	vq = "p22as",
	vX = {
		exitActive: "p2287",
		enterActive: "p22sz",
		enter: "p21o9",
		exit: "p22as",
	};
function vY() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
	return "/tags" + (e ? `?page=${e}` : "");
}
function vK(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
	return "/tags/" + e.replace(/ /g, "+") + (t ? `?page=${t}` : "");
}
function vJ(e, t, n, i) {
	return "tab" === e.page
		? eR(t.current, t.partId, t.revisionId)
		: "chords" === e.page
		? eV(n.current)
		: "tag" === e.page
		? i.content
			? vK(i.content.tag, i.content.page)
			: "/"
		: "tags" === e.page
		? i.content
			? vY(i.content.page)
			: "/"
		: void 0;
}
var vZ = {
	translations: {
		"": {
			"Back to tab": [""],
			Favorites: [""],
			"Questions?": [""],
			"Sign In": [""],
			"Songsterr Plus": [""],
			"Submit Tab": [""],
			Tabs: [""],
		},
	},
	language: "fr",
	pluralForms: "nplurals=2; plural=(n > 1);",
};
let vQ = {
	search: vf,
	favorites: vg,
	artist: vm,
	plus: vP,
	submit: vy,
	about: vb,
	jobs: vw,
	help: vS,
	signin: vC,
	signup: vk,
	recoverpassword: v_,
	changepassword: v_,
	forgotpassword: vT,
	account: vx,
	cancelPlus: vN,
	deactivate: vI,
	updateCard: vM,
	subscribePlus: vL,
	coupon: vA,
	howToReadTab: vB,
	privacy: vv,
	terms: vv,
	dnsmpd: vv,
	mytabs: vE,
};
function v1(e) {
	e.preventDefault();
}
let v0 = x((e) => {
		let { isSmallScreen: t } = e,
			{ gettext: n } = mG(vZ),
			{
				dispatch: i,
				device: r,
				user: a,
				route: s,
				query: o,
				routeContent: l,
				meta: c,
				chords: u,
				tags: d,
			} = lk(
				"device",
				"user",
				"route",
				"query",
				"routeContent",
				"meta",
				"chords",
				"tags"
			),
			{ isPanel: p, page: m } = s,
			y = vJ(l, c, u, d);
		f(() => r.isDesktop && vu(!p), [p, r.isDesktop]), h(() => lM(p, m), [p, m]);
		let { isDesktop: v } = r,
			{ hasPlus: b, isLoggedIn: w, profile: S } = a,
			C = ["ru", "ru-mo", "be", "uk"].some(
				(e) => -1 !== r.languages.indexOf(e)
			);
      b = true
		return g(
			"div",
			{ className: y6.pane },
			!t &&
				g(
					"nav",
					{ className: y6.float, id: "tablist" },
					g(
						vt,
						{
							id: "logo",
							className: y6.logo,
							route: s,
							url: "/",
							songUrl: y,
							title: "Songsterr",
						},
						g("img", { src: vV, width: 30, height: 36, alt: "Songsterr" }),
						g("img", { src: vj, width: 62, height: 12, alt: "Songsterr" })
					),
					g("div", { className: y6.dividerEdge }),
					g(
						vn,
						{ id: "search", route: s, url: "/", songUrl: y },
						g(vs, { styles: y6, width: 30, height: 30 }),
						g("div", { className: y6.text }, n("Tabs"))
					),
					g(
						ve,
						{ id: "favorites", route: s, url: "/a/wa/favorites", songUrl: y },
						g(mK, { styles: y6 }),
						g("div", { className: y6.text }, n("Favorites"))
					),
					g(
						y7,
						{ id: "mytabs", route: s, url: "/a/wa/mytabs", songUrl: y },
						g(vF, { styles: y6, width: 29, height: 29 }),
						g("div", { className: y6.text }, "My Tabs")
					),
					v &&
						g(
							y7,
							{ id: "submit", route: s, url: "/a/wa/submit", songUrl: y },
							g(vc, { styles: y6 }),
							g("div", { className: y6.text }, n("Submit Tab"))
						),
					g("div", { className: y6.dividerSmall }),
					!b &&
						g(
							y7,
							{
								id: "plus",
								route: s,
								url: "/a/wa/plus",
								songUrl: y,
								linkClick(e) {
									e ||
										i("curiosity/setConversionProps", {
											"Last referring link": "Sidebar Button",
										});
								},
							},
							g(vr, { styles: y6 }),
							g("div", { className: y6.text }, n("Songsterr Plus"))
						),
					g(
						y7,
						{ id: "help", route: s, url: "/a/wa/help", songUrl: y },
						g(va, { styles: y6 }),
						g("div", { className: y6.text }, n("Questions?"))
					),
					!w &&
						g(
							y7,
							{ id: "signin", route: s, url: "/a/wa/signin", songUrl: y },
							g(mA, { styles: y6, width: 28, height: 29 }),
							g("div", { className: y6.text }, n("Sign In"))
						),
					w &&
						g(
							y7,
							{ id: "account", route: s, url: "/a/wa/account", songUrl: y },
							g(vi, { styles: y6, width: 29, height: 29 }),
							g("div", { className: y6.text }, S.name)
						),
					g("div", { className: y6.dividerSmall }),
					v &&
						C &&
						g(
							ha,
							{
								id: "menu-jobs",
								to: "/a/wa/jobs",
								className: y6.jobs,
								title: "Jobs at Songsterr",
							},
							g("img", { src: vH, width: 79.271, height: 32, alt: "Jobs" })
						)
				),
			g(
				hF,
				null,
				p &&
					g(
						hY,
						{ animationStyles: v$, timeout: 400, key: "overlay" },
						g(ha, {
							onTouchMove: v1,
							className: y6.overlay,
							id: "sidebar-overlay",
							to: y,
							title: n("Back to tab"),
							tabIndex: -1,
						})
					),
				s.page in vQ &&
					g(
						hY,
						{ animationStyles: vX, timeout: 400, key: s.page },
						g(
							"main",
							{ id: `panel-${s.page}`, className: y6.mainpanel },
							g(hi, {
								component: vQ[s.page],
								route: s,
								query: o,
								user: a,
								device: r,
								songUrl: y,
								isSmallScreen: t,
								id: s.page,
							})
						)
					)
			)
		);
	}),
	v2 = "C8p2d0",
	v5 = "C8p2d0 C8pr1",
	v4 = "C8p2d0 C8p1q",
	v3 = {
		indicator: "C8p2d0",
		onlineIndicator: "C8p2d0 C8pr1",
		offlineIndicator: "C8p2d0 C8p1q",
	},
	v8 = "Cir12y",
	v6 = "Cir1tt",
	v9 = "Cir29v",
	v7 = "Cir1q8",
	be = {
		exitActive: "Cir12y",
		enterActive: "Cir1tt",
		enter: "Cir29v",
		exit: "Cir1q8",
	};
function bt(e) {
	return e ? v3.onlineIndicator : v3.offlineIndicator;
}
class bn extends w {
	constructor(e) {
		super(e),
			(this.state = {
				online: navigator.onLine,
				className: bt(navigator.onLine),
				message: navigator.onLine ? null : "offline",
			}),
			(this.updateOnlineStatus = this.updateOnlineStatus.bind(this)),
			(this.hideIndicator = this.hideIndicator.bind(this));
	}
	componentDidMount() {
		window.addEventListener("online", this.updateOnlineStatus),
			window.addEventListener("offline", this.updateOnlineStatus);
	}
	componentWillUnmount() {
		window.removeEventListener("online", this.updateOnlineStatus, !0),
			window.removeEventListener("offline", this.updateOnlineStatus, !0);
	}
	hideIndicator() {
		this.state.online && this.setState({ ...this.state, message: null });
	}
	updateOnlineStatus() {
		let e = navigator.onLine;
		e &&
			(clearTimeout(this.hideIndicatorTimeout),
			(this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3))),
			this.setState({
				online: navigator.onLine,
				className: bt(navigator.onLine),
				message: navigator.onLine ? "live" : "offline",
			});
	}
	render() {
		let { online: e, className: t, message: n } = this.state,
			i = null;
		return (
			(n || !e) &&
				(i = g(
					hY,
					{ animationStyles: be, timeout: 400 },
					g("div", { className: t }, n)
				)),
			g(hF, null, i)
		);
	}
}
let bi = "Bdq1f0",
	br = "Bdq1h0",
	ba = "Bdq2sz",
	bs = "Bdq8o",
	bo = "Bdqf4",
	bl = {
		menu: "Bdq1f0",
		linkNotable: "Bdq1h0",
		linkText: "Bdq2sz",
		active: "Bdq8o",
		inactive: "Bdqf4",
	},
	bc = (e) => {
		window && !window.confirm("Are you sure?") && e.preventDefault();
	},
	bu = (e) => {
		let {
				meta: { songId: t },
			} = e,
			n = dw("editSong", t),
			i = dw("updateSrwr", t),
			r = dw("rerender", t),
			a = dw("generatePng", t),
			s = dw("blockDueToLicenseRestriction", t);
		return g(
			"nav",
			{ className: bl.menu },
			g(
				"a",
				{
					className: bl.linkNotable,
					href: window.location.href + "?redesign=off",
				},
				"SRWO"
			),
			g("a", { href: n, target: "_blank" }, "Edit"),
			g("a", { href: i, target: "_blank", onClick: bc }, "Update"),
			g("a", { href: r, target: "_blank", onClick: bc }, "Rerender"),
			g("a", { href: s, target: "_blank", onClick: bc }, "Block"),
			g("a", { href: a, target: "_blank" }, "Generate PNG")
		);
	},
	bd = "C1p2za",
	bp = { close: "C1p2za" },
	bh = (e) => {
		let { onClick: t, id: n, width: i = 11, height: r = 11 } = e;
		return g(
			"button",
			{ className: bp.close, onClick: t },
			g(
				"svg",
				{
					width: i,
					height: r,
					viewBox: "0 0 11 11",
					"aria-labelledby": `${n}-close`,
				},
				g("title", { id: `${n}-close` }, "Close"),
				g("path", { d: "M1 1l9 9m-9 0l9-9" })
			)
		);
	},
	bf = "z44l",
	bg = "z4qb",
	bm = "z44l z42qo",
	by = "z44l z415m",
	bv = "z44l z430w",
	bb = "z44l z430w z410u",
	bw = "z44l z41yi",
	bS = "z44l z41uv",
	bC = "z44l z41rt",
	bk = "z44l z41rt z4kq",
	bx = "z44l z41rt z42wq",
	bE = "z44l z41rt z423c",
	bT = "z41gq",
	b_ = "z44l z42g1",
	bP = "z44l z42gf",
	bL = "z44l z433s",
	bA = "z432r",
	bN = "z44l z4a1",
	bI = "z41xe",
	bM = "z44l z4a1 z424y",
	bB = "z44l z4a1 z41vb",
	bD = "z44l z4a1 z42j7",
	bz = "z44l z41rt z4ow",
	bO = "z44l z41rt z4118",
	bR = "z44l z4a1 z424y z41xe z4ls",
	b$ = "z44l z4a1 z41vb z41xe z421m",
	bF = "z44l z4a1 z424y z42fn",
	bH = "z44l z4a1 z42j7 z4rq",
	bV = "z44l z4a1 z42j7 z42ct",
	bj = "z44l z42qx",
	bU = "z4y3",
	bG = "z41pi",
	bW = {
		button: "z44l",
		active: "z4qb",
		buttonGreen: "z44l z42qo",
		buttonBlue: "z44l z415m",
		buttonGrey: "z44l z430w",
		buttonDisabled: "z44l z430w z410u",
		buttonRed: "z44l z41yi",
		buttonFloat: "z44l z41uv",
		buttonLink: "z44l z41rt",
		buttonLinkFloat: "z44l z41rt z4kq",
		buttonLinkSmall: "z44l z41rt z42wq",
		buttonPromoUnsubscribe: "z44l z41rt z423c",
		link: "z41gq",
		buttonBlock: "z44l z42g1",
		buttonSmall: "z44l z42gf",
		google: "z44l z433s",
		googleIcon: "z432r",
		popupButton: "z44l z4a1",
		popupButtonSmall: "z41xe",
		popupButtonGreen: "z44l z4a1 z424y",
		popupButtonBlue: "z44l z4a1 z41vb",
		popupButtonOrange: "z44l z4a1 z42j7",
		popupButtonLinkGreen: "z44l z41rt z4ow",
		popupButtonLinkOrange: "z44l z41rt z4118",
		popupButtonGreenSmall: "z44l z4a1 z424y z41xe z4ls",
		popupButtonBlueSmall: "z44l z4a1 z41vb z41xe z421m",
		submitRevisionButton: "z44l z4a1 z424y z42fn",
		submitReportButton: "z44l z4a1 z42j7 z4rq",
		submitRevisionButtonWarning: "z44l z4a1 z42j7 z42ct",
		buttonBig: "z44l z42qx",
		greenHighlight: "z4y3",
		orangeHighlight: "z41pi",
	},
	bq = "B9v2h1",
	bX = "B9vl",
	bY = "B9v21x",
	bK = bM + " B9v2hx",
	bJ = bM + " B9vhl",
	bZ = "B9v2h1 B9v2vm",
	bQ = "B9v1fv",
	b1 = "B9v2v2",
	b0 = "B9vdn",
	b2 = "B9vdn B9vjs",
	b5 = "B9vdn B9v24z",
	b4 = "B9vdn B9v165",
	b3 = "B9vdn B9v2pd",
	b8 = "B9vdn B9vzs",
	b6 = "B9vdn B9v1vp",
	b9 = "B9vdn B9v1up",
	b7 = "B9vdn B9v2wk",
	we = "B9vdn B9v8w",
	wt = "B9vdn B9vl8",
	wn = "B9vdn B9v1c4",
	wi = {
		pane: "B9v2h1",
		title: "B9vl",
		body: "B9v21x",
		button: bM + " B9v2hx",
		link: bM + " B9vhl",
		nps: "B9v2h1 B9v2vm",
		score: "B9v1fv",
		npsLegend: "B9v2v2",
		npsButton: "B9vdn",
		npsButton0: "B9vdn B9vjs",
		npsButton1: "B9vdn B9v24z",
		npsButton2: "B9vdn B9v165",
		npsButton3: "B9vdn B9v2pd",
		npsButton4: "B9vdn B9vzs",
		npsButton5: "B9vdn B9v1vp",
		npsButton6: "B9vdn B9v1up",
		npsButton7: "B9vdn B9v2wk",
		npsButton8: "B9vdn B9v8w",
		npsButton9: "B9vdn B9vl8",
		npsButton10: "B9vdn B9v1c4",
	},
	wr = (e) =>
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) =>
			g(
				"button",
				{ className: wi[`npsButton${t}`], key: t, onClick: () => e(t) },
				t
			)
		);
function wa() {
	let { dispatch: e, screener: t, ut: n } = lk("screener", "ut"),
		i = t.active;
	if (!i || n.stage !== uk) return null;
	let r = b(() => {
		e("screener/dismiss", i);
	}, [i]);
	if (i.name.endsWith("NPS")) {
		let a = (t) => {
			e("screener/accept", { screener: i, value: t });
		};
		return g(
			"aside",
			{ className: wi.nps, id: "screener" },
			g(bh, { onClick: r, id: "screener" }),
			g("p", { className: wi.body }, i.body),
			g("div", { className: wi.score }, wr(a)),
			g("p", { className: wi.npsLegend }, "0 - Not likely 10 - Very likely")
		);
	}
	let s = b(() => {
		e("screener/accept", { screener: i });
	}, [i]);
	return g(
		"aside",
		{ className: wi.pane, id: "screener" },
		g(bh, { onClick: r, id: "screener" }),
		g("h2", { className: wi.title }, i.title),
		g("p", { className: wi.body }, i.body),
		i.usertest
			? g("button", { className: wi.button, onClick: s }, i.button)
			: g(
					"a",
					{
						className: wi.link,
						href: i.link,
						onClick: s,
						rel: "noopener noreferrer",
						target: "_blank",
					},
					i.button
			  )
	);
}
function ws(e, t) {
	var n, i;
	let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
		s = null,
		o = null;
	if (
		((null === (n = a.repeating_contextual) || void 0 === n
			? void 0
			: n.status) === "active" &&
			((s = "rc"), (o = a.repeating_contextual.segment)),
		(null === (i = a.open_srwm_toolbar_by_default) || void 0 === i
			? void 0
			: i.status) === "active")
	) {
		let l = a.open_srwm_toolbar_by_default.segment;
		(s = s ? `${s}_tooldef` : "tooldef"), (o = o ? `${o}_${l}` : l);
	}
	if (o0(e)) {
		let c = `utm_source%3D${t}`,
			u = s ? `%26utm_campaign%3D${s}_${o}` : "",
			d = r.songId ? `%26tab_id%3D${r.songId}` : "",
			p = `${c}${u}${d}`;
		return `https://play.google.com/store/apps/details?id=com.songsterr&referrer=${p}`;
	}
	let h = `${t}${s ? `_${s}` : ""}${o ? `_${o}` : ""}`;
	return `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${h}`;
}
function wo(e) {
	let { dispatch: t, device: n, experiments: i } = lk("device", "experiments"),
		{ source: r } = e,
		a = e.os ? { name: e.os } : n.os,
		s = e.extra || {},
		o = e.attrs || {},
		l = ws(a, r, s, i),
		c = b(() => {
			e.onClick && e.onClick(),
				t("curiosity/event", {
					event: "Navigated to app store",
					...e.eventProperties,
				}),
				t("player/togglePlay", !1),
				t("curiosity/google", {
					category: "Showroom",
					action: `Clicked on ${o0(a) ? "Google Play" : "App Store"} link`,
				});
		}, []);
	return g(
		"a",
		{ ...o, href: l, onClick: c, rel: "noopener noreferrer", target: "_blank" },
		e.children
	);
}
let wl = "Ei1by",
	wc = "Ei2cl",
	wu = "Ei2zd",
	wd = "Ei2we",
	wp = { pane: "Ei1by", title: "Ei2cl", subtitle: "Ei2zd", actions: "Ei2we" },
	wh = "e81fc",
	wf = "e8v0",
	wg = "e8qv",
	wm = "e8ai",
	wy = {
		exitActive: "e81fc",
		enterActive: "e8v0",
		enter: "e8qv",
		exit: "e8ai",
	},
	wv = { animationStyles: wy };
function wb(e, t) {
	return e === tN.SLOWDOWN
		? {
				title: "Struggling to figure out\nthe rhythm of this fragment?",
				cta: t.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
				source: "slowdown_promo_popup",
				referringLink: "Slowdown Promo Popup",
		  }
		: e === tN.LOOP
		? {
				title: "Want to nail this fragment?",
				cta: t.isPhone
					? "Practice it by looping\nin our app!"
					: "Practice it by looping\non Plus!",
				source: "loop_promo_popup",
				referringLink: "Loop Promo Popup",
		  }
		: e === tN.NO_ADS
		? {
				title: "Ads take up too much space?",
				cta: t.isPhone ? "Remove them in our app!" : "Remove them on Plus!",
				source: "noads_promo_popup",
				referringLink: "No Ads Promo Popup",
		  }
		: e === tN.PRINT
		? {
				title: "Prefer to read and\nmarkup on paper?",
				cta: t.isPhone
					? "Print the tab out in our app!"
					: "Print the tab out on Plus!",
				source: "print_promo_popup",
				referringLink: "Print Promo Popup",
		  }
		: e === tN.MUTE
		? {
				title: "Using tab as\na backing track?",
				cta: t.isPhone
					? "Mute your instrument\nin our app!"
					: "Mute your instrument\non Plus!",
				source: "mute_promo_popup",
				referringLink: "Mute Promo Popup",
		  }
		: e === tN.SOLO
		? {
				title: "Bass line is hard to hear?",
				cta: t.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
				source: "solo_promo_popup",
				referringLink: "Solo Promo Popup",
		  }
		: e === tN.PITCH_SHIFT
		? {
				title: "Don’t want to retune the guitar?",
				cta: t.isPhone
					? "Pitch shift the tab in our app!"
					: "Pitch shift the tab on Plus!",
				source: "retune_promo_popup",
				referringLink: "Retune Promo Popup",
		  }
		: void 0;
}
let ww = () => {
		let { dispatch: e, promo: t, device: n } = lk("promo", "device"),
			i = t.feature;
		if (!i) return null;
		let r = wb(i, n);
		r && cP(cB.get(i));
		let a = () => {
				e("promo/unsubscribe"),
					e("curiosity/event", { event: "Unsubscribed from promo" });
			},
			s = () => e("promo/dismiss"),
			o = () => {
				e("curiosity/setConversionProps", {
					"Last referring link": r.referringLink,
				}),
					e("promo/dismiss");
			};
		return g(
			hF,
			null,
			i &&
				g(
					hY,
					{ ...wv, key: "popup" },
					g(
						"aside",
						{ className: wp.pane, id: "promo" },
						g("h2", { className: wp.title }, r.title),
						g("p", { className: wp.subtitle }, r.cta),
						g(
							"div",
							{ className: wp.actions },
							!n.isPhone &&
								g(
									ha,
									{ to: "/a/wa/plus", className: bW.buttonGreen, onClick: o },
									"Tell me more!"
								),
							n.isPhone &&
								g(
									wo,
									{
										source: r.source,
										onClick: o,
										attrs: { className: bW.buttonGreen },
										eventProperties: {
											Via: "contextual offer",
											"App store": o0(n.os) ? "Google Play" : "App Store",
											Feature: i,
										},
									},
									o0(n.os) ? "Open Google Play" : "Open App Store"
								),
							g("a", { onClick: s, className: bW.buttonLink }, "No, thanks")
						),
						g(
							"a",
							{ onClick: a, className: bW.buttonPromoUnsubscribe },
							"Don’t show ads like that"
						)
					)
				)
		);
	},
	wS = "Cpv1d",
	wC = "Cpvpq",
	wk = "Cpv6d",
	wx = "Cpv2kr",
	wE = "Cpv2kr Cpv1th",
	wT = "Cpv2kr Cpv1x",
	w_ = {
		wrapper: "Cpv1d",
		controls: "Cpvpq",
		right: "Cpv6d",
		link: "Cpv2kr",
		active: "Cpv2kr Cpv1th",
		small: "Cpv2kr Cpv1x",
	},
	wP = () => {
		let {
				dispatch: e,
				meta: t,
				player: n,
				experiments: i,
				device: r,
			} = lk("meta", "player", "experiments", "device"),
			a = eQ.get(t.current, n.version),
			s = eK.decode(a.audio),
			o = eK.decode(a.midi),
			l = "??",
			c = "??",
			u = "??";
		o && ((l = o.numericVersion.toString()), (c = o.payload)),
			s && (u = s.numericVersion.toString());
		let d = (t, n) => {
				t.preventDefault(), e("editor/sound:generate", { version: n });
			},
			p = (t, n) => {
				t.preventDefault(), e("editor/sound:toggle", { version: n });
			},
			h = (e, t) => {
				e.preventDefault(),
					document.firstElementChild.setAttribute("color-scheme", t);
			},
			f = (e) => {
				let i = eJ(e),
					r = !eQ.has(t.current, e);
				return g(
					"a",
					{
						className: n.version === i.version ? w_.active : w_.link,
						disabled: r,
						onClick: (t) => p(t, e),
					},
					i.displayName
				);
			},
			m = s5(r, i),
			y = eJ(m),
			v = "　|　",
			b = g("div", null, `Default: ${y.displayName}`, v),
			w = g(
				"div",
				null,
				"Sound: ",
				f(ty.V1),
				" ",
				f(ty.V2),
				" ",
				f(ty.V4),
				" ",
				f(ty.DEV),
				v
			),
			S =
				l &&
				g(
					"a",
					c && {
						className: w_.link,
						href: `https://github.com/songsterr/songsterr-processor-midi/commit/${c}`,
						target: "_blank",
					},
					`midi: ${l}`
				),
			C = `audio: ${u}`,
			k = g("div", null, S, l ? " " : "", C, v),
			x = (e, t) =>
				g(
					"a",
					{
						className: w_.small,
						href: `https://www.songsterr.com/api/sound/${ty[e].toLowerCase()}`,
						target: "_blank",
					},
					t
				),
			E = g(
				"div",
				{ className: w_.right },
				"List: ",
				x(ty.V2, "V2"),
				" ",
				x(ty.V4, "V4"),
				" ",
				x(ty.DEV, "Dev"),
				v
			),
			T = (e, t) => g("a", { className: w_.link, onClick: (t) => h(t, e) }, t),
			_ = g("div", null, T("light", "Light"), " ", T("dark", "Dark"), v),
			P = (e, t) =>
				g(
					"a",
					{ className: w_.small, onClick: (t) => d(t, e) },
					`Generate ${t}`
				),
			L = g(
				"div",
				null,
				P(ty.V2, "V2"),
				" ",
				P(ty.V4, "V4"),
				" ",
				P(ty.DEV, "Dev")
			);
		return g(
			"div",
			{ className: w_.wrapper },
			g("div", { className: w_.controls }, b, w, k, E, _, L)
		);
	},
	wL = "ju1pe",
	wA = { placeholder: "ju1pe" },
	wN = "Cblr3",
	wI = wL + " Cbl2bs",
	wM = "Cbl17o",
	wB = { wrap: "Cblr3", inner: wL + " Cbl2bs", banner: "Cbl17o" };
var wD = "/static/media/et640en.746163ed.png",
	wz = "/static/media/et640ru.875012f4.png",
	wO = "/static/media/rra640en.4edf9663.png",
	wR = "/static/media/rra640ru.60c1c5e4.png";
let w$ =
		"https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
	wF =
		"https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50";
function wH(e) {
	let t = o0(e.os),
		n = ["ru", "ru-mo", "be", "uk"].some((t) => -1 !== e.languages.indexOf(t));
	return {
		alt: t
			? "Master rhythm skills with Rhythm Trainer by Songsterr"
			: "Ear training reinvented",
		link: t
			? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50"
			: "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
		image: t ? (n ? wR : wO) : n ? wz : wD,
	};
}
let wV = x(() => {
		let e = T(),
			{ ads: t, device: n } = lk("ads", "device"),
			{ alt: i, link: r, image: a } = wH(n);
		return (
			ui("tab_page_mobile", { isTargeted: !0, page: "tab" }),
			f(() => {
				let t = e.current;
				if (t)
					try {
						let n = document.getElementById("header"),
							i = new IntersectionObserver(
								(e) => {
									e.forEach((e) => {
										e.isIntersecting
											? t.classList.contains("hidden") &&
											  t.classList.remove("hidden")
											: t.classList.contains("hidden") ||
											  t.classList.add("hidden");
									});
								},
								{ rootMargin: "-120px 0px 0px 0px" }
							);
						return n && i.observe(n), () => i.disconnect();
					} catch (r) {}
			}, [e]),
			g(
				"section",
				{ id: "showroom_header", className: wB.wrap, ref: e },
				g(
					"div",
					{ id: "Redesign_ATF_tab_page_320х50", className: wB.inner },
					t.notsyFailed &&
						g(
							"a",
							{ className: wB.link, href: r, target: "_blank" },
							g("img", { src: a, className: wB.banner, alt: i })
						)
				)
			)
		);
	}),
	wj = E(() =>
		Promise.all([
			import("./ConsentManager.41ee49ff.js"),
			ys([
				"/static/latest/ConsentManager.045f97eb897a0500.css",
				"/static/latest/index.b12afd8487ff4de1.css",
			]),
		]).then((e) => e[0])
	),
	wU = () => {
		let { consent: e } = lk("consent");
		return "tcf" === e.suite
			? m("div", { children: m(hi, { component: wj }, "wrap") })
			: null;
	},
	wG = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
	wW =
		"M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z",
	wq = "M7 10v7H3c-3 0-3-7 0-7z",
	wX =
		"m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z",
	wY = "m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z",
	wK = `${wq}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`,
	wJ = `${wq}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${wG}m2.8 1.8${wG}m2.8 1.8${wG}m2.8 1.8${wG}m2.8 1.8${wG}`,
	wZ = [
		`${wW}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`,
		"M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z",
		`${wW}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`,
		`${wW}M9.8.1${wG}m3 1.36${wG}m3 1.36${wG}m3 1.36${wG}m3 1.36${wG}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`,
		`${wq}${wX}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`,
		`${wq}${wX}m3.9 1.25${wG}m3.9 0${wG}m3.9 0${wG}m-7.8 4.5${wG}m3.9 0${wG}m3.9 0${wG}`,
		`${wq}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${wG}m2.8.65${wG}m2.8.65${wG}m2.8.65${wG}m2.8.65${wG}`,
		`${wq}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`,
		wK,
		`${wK}${wY}`,
		`${wq}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z${wY}`,
		"M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z",
		"M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z",
		"M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z",
		"M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z",
		"M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z",
		"M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z",
		"M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z",
		`${wW}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`,
		"M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z",
		"M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z",
		`${wq}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`,
		"M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z",
		"M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z",
		"M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",
	],
	wQ = "translate(-5 14)rotate(-45)",
	w1 = "translate(-7 14)rotate(-45)",
	w0 = " translate(13 0)rotate(45)scale(.75)";
function w2(e) {
	return 3 === e
		? " translate(13 0)rotate(45)scale(.75)"
		: 1 === e ||
		  (e >= 4 && e <= 10) ||
		  14 === e ||
		  16 === e ||
		  17 === e ||
		  21 === e
		? "translate(-5 14)rotate(-45)"
		: void 0;
}
function w5(e) {
	let { instrumentId: t, name: n, className: i, transform: r } = e,
		a = eN(t),
		s = n && 6 === a && n.includes("James Hetfield"),
		o = s ? wJ : wZ[a],
		l = s ? "translate(-7 14)rotate(-45)" : w2(a);
	return g("path", {
		d: o,
		transform: (l || r) && `${r || ""}${l || ""}`,
		className: i,
	});
}
let w4 = "wc27x",
	w3 = "wc1dg",
	w8 = "wc2wi",
	w6 = {
		instrument: "wc27x",
		instrumentActive: "wc1dg",
		instrumentMobile: "wc2wi",
	};
class w9 extends w {
	render() {
		let { active: e, mobile: t, name: n, instrumentId: i } = this.props,
			r = e ? w6.instrumentActive : w6.instrument;
		return (
			(r = t ? w6.instrumentMobile : r),
			g(
				"svg",
				{
					className: this.props.className,
					width: "27",
					height: "27",
					viewBox: "0 0 27 27",
				},
				g(w5, { className: r, instrumentId: i, name: n })
			)
		);
	}
}
let w7 = "Cix6",
	Se = "Cixn1",
	St = "Cix1pm",
	Sn = "Cix2la",
	Si = "Cix314",
	Sr = "Cix2aq",
	Sa = "Cix2lj",
	Ss = "Cix268",
	So = "Cixvc",
	Sl = "Cix314 Cix4s",
	Sc = "Cix6 Cix9m",
	Su = {
		mixer: "Cix6",
		scroller: "Cixn1",
		shadowOverlay: "Cix1pm",
		arrow: "Cix2la",
		item: "Cix314",
		itemLink: "Cix2aq",
		tail: "Cix2lj",
		icon: "Cix268",
		text: "Cixvc",
		itemActive: "Cix314 Cix4s",
		mixerDropdown: "Cix6 Cix9m",
	},
	Sd = 42,
	Sp = 46,
	Sh = 20,
	Sf = "#mixer-button";
function Sg(e) {
	return e <= 2 ? 1 : e <= 4 ? 2 : 3;
}
function Sm(e) {
	return 42 - 46 * e;
}
function Sy(e, t) {
	let n = document.querySelector("#mixer-button") || null,
		i = n ? n.getBoundingClientRect().top : 42,
		r = Sm(Sg(e));
	return { height: Math.min(46 * e, t - (i + r) - 20 - 20), top: r };
}
function Sv(e) {
	return { top: -1 * e.top + 17 };
}
class Sb extends w {
	constructor(e) {
		super(e);
		let t = e.meta.current,
			n = (t && t.tracks) || [],
			i = Sy(n.length, e.screen.viewport.height),
			r = Sv(i),
			a = { height: i.height };
		this.state = { style: i, arrowStyle: r, scrollerStyle: a };
	}
	updateHeight = () => {
		let e = this.props.meta.current,
			t = (e && e.tracks) || [],
			n = Sy(t.length, this.props.screen.viewport.height),
			i = Sv(n),
			r = { height: n.height },
			a = this.state.style;
		(a.height !== n.height || a.top !== n.top) &&
			this.setState({
				...this.state,
				style: n,
				arrowStyle: i,
				scrollerStyle: r,
			});
	};
	componentDidMount() {
		this.updateHeight();
	}
	componentDidUpdate() {
		this.updateHeight();
	}
	render() {
		let e = this.props.meta.current;
		if (!e) return;
		let { dispatch: t } = this.props,
			n = this.props.screen.isSmall,
			{ partId: i, revisionId: r } = this.props.meta,
			a = (e && e.tracks) || [],
			s = n ? null : this.state.style,
			o =
				a &&
				a.map((n, a) => {
					let s = i === a,
						o = `${s ? Su.itemActive : Su.item}`;
					return g(
						"div",
						{ className: o, key: a, "aria-label": "track" },
						g(
							ha,
							{
								className: Su.itemLink,
								to: eR(e, a, r),
								"aria-current": s ? "page" : void 0,
								onClick: () =>
									t("songs/default", { instrumentId: n.instrumentId }),
							},
							g(w9, {
								className: Su.icon,
								instrumentId: n.instrumentId,
								name: n.name,
								active: s,
							}),
							g("span", { className: Su.text }, n.title)
						)
					);
				});
		return g(
			"div",
			{
				className: n ? Su.mixerDropdown : Su.mixer,
				style: s,
				role: "dialog",
				"aria-label": "Select track",
			},
			n
				? o
				: g(
						"div",
						{ className: Su.scroller, style: this.state.scrollerStyle },
						o
				  ),
			n ? null : g("div", { className: Su.arrow, style: this.state.arrowStyle })
		);
	}
}
var Sw = pj(Sb, "screen", "meta");
function SS(e) {
	let {
		up: t,
		styles: { icon: n, stroke: i },
	} = e;
	return g(
		"svg",
		{ width: 14, height: 12, viewBox: "0 0 26 17", className: n },
		g("path", {
			d: t ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
			className: i,
			"stroke-width": 4,
			"stroke-linecap": "square",
		})
	);
}
let SC = "B1t2kr",
	Sk = "B1t297",
	Sx = "B1t1q7",
	SE = "B1t267",
	ST = "B1tga",
	S_ = "B1t1kk",
	SP = "B1t1bd",
	SL = "B1t2x3",
	SA = "B1thf",
	SN = "B1tix",
	SI = {
		header: "B1t2kr",
		wrapper: "B1t297",
		stroke: "B1t1q7",
		burger: "B1t267",
		help: "B1tga",
		mixer: "B1t1kk",
		instrument: "B1t1bd",
		img: "B1t2x3",
		title: "B1thf",
		icon: "B1tix",
	},
	SM = { animationStyles: gZ };
function SB(e) {
	let { songs: t, layer: n, meta: i } = lk("songs", "layer", "meta"),
		r = "mixer" === n.layer,
		{ isChords: a } = e,
		s = "Chords";
	if (!a) {
		let o = uX(i);
		s = o ? `${o.name} \u002d ${o.instrument}` : "Instrument";
	}
	return g(
		"header",
		{ className: SI.header, "data-controls": "tablature" },
		g(
			"div",
			{ className: SI.wrapper },
			g(
				ha,
				{
					to: `/${ly(t.pattern, t.filters)}`,
					className: SI.burger,
					title: "Search",
					id: "burger",
				},
				g(yV, { styles: SI })
			),
			g(
				"button",
				{
					className: SI.mixer,
					onClick: e.handleMixer,
					role: "button",
					id: "control-mixer",
					title: r ? "Hide tracks" : "Show tracks",
					"aria-haspopup": !0,
					"aria-pressed": r,
				},
				g("div", { className: SI.title }, s),
				!a && g(SS, { up: r, styles: SI })
			),
			g(
				ha,
				{ to: "/a/wa/help", className: SI.help, title: "Help" },
				g(va, { width: 27, height: 25, styles: SI })
			)
		),
		g(hF, null, r && g(hY, SM, g(Sw, null)))
	);
}
function SD() {
	return window.__LOCALE__ || "en";
}
var Sz = {
	translations: {
		"": {
			"Choose right file format": [""],
			"Invalid e-mail address": ["Adresse e-mail non valide"],
			"Oops, something went wrong. Please try again later": [
				"Oups, quelque chose s’est mal pass\xe9. Veuillez r\xe9essayer plus tard",
			],
			"Passwords should match": ["Les mots de passe doivent correspondre"],
			"Please describe the problem": [""],
			"Please fix the errors and try again": [
				"Veuillez corriger les erreurs et r\xe9essayer",
			],
			"Please provide more meaningful edit summary": [""],
			"Please select a reason for the report": [""],
			"Should be at least 5 symbols long": [
				"Doit comporter au moins 5 symboles",
			],
			"Should be checked": ["Devrait \xeatre v\xe9rifi\xe9"],
			"Should be less than 1000 characters": [
				"Doit comporter moins de 1000 caract\xe8res",
			],
			"Should be YouTube URL": [""],
			"Should not be empty": ["Ne doit pas \xeatre vide"],
			"Tell us how can we help you": [""],
			"Upload the file": [""],
		},
	},
	language: "fr",
	pluralForms: "nplurals=2; plural=(n > 1);",
};
let SO = new Map();
function SR(e) {
	let t = SO.get(e);
	return t || ((t = mj(e, Sz)), SO.set(e, t)), t;
}
function S$(e, t) {
	let { gettext: n } = SR(t);
	return null == e || 0 === e.length
		? n("Should not be empty")
		: !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				e
		  ) && n("Invalid e-mail address");
}
function SF(e, t) {
	let { gettext: n } = SR(t);
	return 0 === e.length && n("Should not be empty");
}
function SH(e, t) {
	let { gettext: n } = SR(t);
	return e.length >= 1e3
		? n("Should be less than 1000 characters")
		: 0 === (e = e.replace(/[^\w\s_]/, "").trim()).length
		? n("Should not be empty")
		: e.length < 3 && n("Please provide more meaningful edit summary");
}
function SV(e, t) {
	return SF(e, t);
}
function Sj(e, t) {
	let { gettext: n } = SR(t);
	return 0 === e.length && n("Tell us how can we help you");
}
function SU(e) {
	let t = e ? ["gp3", "gp4", "gp5", "gpx", "gp"] : ["gp3", "gp4", "gp5"];
	return function (e, n) {
		let { gettext: i } = SR(n);
		if (!e.length) return i("Upload the file");
		{
			let r = e[0].name.split(".").pop();
			if (!t.includes(r)) return i("Choose right file format");
		}
	};
}
function SG(e, t) {
	let { gettext: n } = SR(t);
	return 0 === e.length
		? n("Should not be empty")
		: e.length < 5 && n("Should be at least 5 symbols long");
}
function SW(e, t) {
	let { gettext: n } = SR(t);
	return !e && n("Should be checked");
}
function Sq(e, t, n) {
	let { gettext: i } = SR(n);
	return !!t && e !== t && i("Passwords should match");
}
function SX(e) {
	let t = SD(),
		{ gettext: n } = SR(t);
	if (e instanceof e4) {
		if (e.reasons) {
			if (e.reasons.__all__) return e.reasons.__all__;
			let i = e.reasons.length && e.reasons[e.reasons.length - 1].message;
			if (i) return i;
		}
		return n("Please fix the errors and try again");
	}
	return e.message || n("Oops, something went wrong. Please try again later");
}
function SY(e, t) {
	return e && e.reasons && e.reasons[t];
}
function SK(e) {
	let t = SD();
	Array.isArray(e) || (e = [e]);
	let n = e
		.map((e) => {
			let n;
			return (
				(n =
					"checkbox" === e.field.type
						? e.field.checked
						: "file" === e.field.type
						? e.field.files
						: e.field.value),
				{ [e.field.name]: e.validator(n, t) }
			);
		})
		.reduce((e, t) => Object.assign(e, t), {});
	if (Object.keys(n).reduce((e, t) => e || !!n[t], !1)) throw new e4(n);
	return null;
}
function SJ(e, t) {
	let n = SD(),
		{ gettext: i } = SR(n),
		r = { __all__: void 0, comment: void 0 };
	if (
		(e || (r.__all__ = i("Please select a reason for the report")),
		"other" !== e || t || (r.comment = i("Please describe the problem")),
		Object.keys(r).reduce((e, t) => e || !!r[t], !1))
	)
		throw new e4(r);
	return null;
}
let SZ = "Df9s",
	SQ = "Df4c",
	S1 = "Dfxe",
	S0 = "Dfsp",
	S2 = "Df1p2",
	S5 = "Df16",
	S4 = "Df58",
	S3 = "Df1s7",
	S8 = {
		error: "Df9s",
		title: "Df4c",
		rejected: "Dfxe",
		content: "Dfsp",
		exitActive: "Df1p2",
		enterActive: "Df16",
		enter: "Df58",
		exit: "Df1s7",
	};
function S6(e) {
	let { styles: t, error: n, errorMessage: i, name: r = "form" } = e,
		a = t || S8,
		s = T(),
		o = i,
		l = {
			enter: a.enter,
			enterActive: a.enterActive,
			exit: a.exit,
			exitActive: a.exitActive,
		};
	return (!o && n && (o = SX(n)),
	f(() => {
		s.current.scrollIntoView && s.current.scrollIntoView();
	}, [o]),
	n instanceof e6 && n.action)
		? g(
				hF,
				{ component: "div", className: a.error, ref: s },
				n &&
					g(
						hY,
						{ animationStyles: l, timeout: 300 },
						g(
							"div",
							{ className: a.rejected, key: "error" },
							g(
								"span",
								{ className: a.content, role: "alert", "aria-label": r },
								`Your actions appear suspicious. We will reject any attempt to ${n.action} within the next twenty four hours. `,
								"Please contact ",
								g(
									"a",
									{
										href: "mailto:support@songsterr.com",
										"data-action": "support",
									},
									"support@songsterr.com"
								),
								" if you think we made a mistake."
							)
						)
					)
		  )
		: g(
				hF,
				{ component: "div", className: a.error, ref: s },
				o &&
					g(
						hY,
						{ animationStyles: l, timeout: 300 },
						g(
							"div",
							{ className: a.title, key: "error" },
							g(
								"span",
								{ className: a.content, role: "alert", "aria-label": r },
								o
							)
						)
					)
		  );
}
let S9 = "Czsup",
	S7 = "Czs1b5",
	Ce = "Czs4c",
	Ct = "Czs1nq",
	Cn = "Czs1nq Czs1ot",
	Ci = "Czsaw",
	Cr = "Czszb",
	Ca = "Czsn5",
	Cs = "Czs221",
	Co = "Czs1rj",
	Cl = "Czs1an",
	Cc = "Czs1an Czs24z",
	Cu = "Czs1an Czs246",
	Cd = {
		settings: "Czsup",
		panel: "Czs1b5",
		head: "Czs4c",
		switch: "Czs1nq",
		switchActive: "Czs1nq Czs1ot",
		title: "Czsaw",
		body: "Czszb",
		actions: "Czsn5",
		caption: "Czs221",
		fastActions: "Czs1rj",
		button: "Czs1an",
		fast: "Czs1an Czs24z",
		buttonGray: "Czs1an Czs246",
	},
	Cp = S9 + " Blg1d3",
	Ch = S7 + " Blgd8",
	Cf = Ce + " Blg76",
	Cg = Ci + " Blg25i",
	Cm = "Blg2zb",
	Cy = "Blg14z",
	Cv = "Blg14z Blg19z",
	Cb = "Blg1be",
	Cw = Ca + " Blg2zc",
	CS = Cl + " Blgq2",
	CC = Cu + " Blg2i3",
	Ck = {
		settings: S9 + " Blg1d3",
		panel: S7 + " Blgd8",
		head: Ce + " Blg76",
		title: Ci + " Blg25i",
		body: "Blg2zb",
		priceBoxTitle: "Blg14z",
		priceBoxTitleAfter: "Blg14z Blg19z",
		priceBoxText: "Blg1be",
		actions: Ca + " Blg2zc",
		button: Cl + " Blgq2",
		buttonGray: Cu + " Blg2i3",
	},
	Cx = "Bqh1iv",
	CE = "Bqh25v",
	CT = "Bqh2xh",
	C_ = "Bqh2j6",
	CP = "Bqh2fg",
	CL = "Bqhgy",
	CA = "Bqh1yg",
	CN = "Bqhal",
	CI = {
		error: "Bqh1iv",
		title: "Bqh25v",
		rejected: "Bqh2xh",
		content: "Bqh2j6",
		exitActive: "Bqh2fg",
		enterActive: "Bqhgy",
		enter: "Bqh1yg",
		exit: "Bqhal",
	};
function CM(e, t) {
	switch (t.type) {
		case "migrate":
			return { ...e, processing: !0, error: null };
		case "success":
			return { ...e, processing: !1, success: !0 };
		case "failure":
			return { ...e, processing: !1, error: t.error };
	}
}
let CB = () => {
		let {
			dispatch: e,
			user: t,
			payment: n,
			device: i,
		} = lk("user", "payment", "device");
		f(
			() =>
				e("curiosity/event", {
					event: "Opened migration popup",
					Plan: n.plan.id,
					Country: i.country,
				}),
			[]
		);
		let [r, a] = _(CM, { processing: !1, success: null, error: null }),
			s = async () => {
				e("curiosity/event", {
					event: "Confirmed subscription migration",
					Plan: n.plan.id,
					Country: i.country,
				});
				try {
					a({ type: "migrate" }), await new Promise((e) => setTimeout(e, 2e3));
					let t = await lH({ planId: n.plan.id });
					e("user/migratePlus", t), a({ type: "success" });
				} catch (r) {
					a({ type: "failure", error: r });
				}
			},
			o = () => {
				e("payment/popup:hide"),
					e("curiosity/event", {
						event: "Skipped subscription migration",
						Plan: n.plan.id,
						Country: i.country,
					});
			},
			l = () => e("payment/popup:hide"),
			c = "USD" !== n.plan.currency ? "US\xa0" : "",
			u = e0(t.profile.subscription.plan.id),
			d = e2(u, !0),
			p = e2(n.plan, !0),
			h = dJ.get(i.country) || void 0;
		return (
			n.showMigrationPopup &&
			g(
				"section",
				{ className: Ck.settings },
				g(
					"div",
					{ className: Ck.panel },
					g(
						"div",
						{ className: Ck.head },
						g("div", { className: Ck.title }, "Plus prices reduction"),
						g(
							"p",
							null,
							"We are updating our subscription model to use regional prices. ",
							"Please review the changes that will apply to your account below:"
						)
					),
					g(
						"div",
						{ className: Ck.body },
						g(
							"article",
							{ className: Ck.priceBox },
							g(
								"h3",
								{ className: Ck.priceBoxTitleAfter },
								r.success ? "Current price " : "New price ",
								g("span", null, p)
							)
						),
						!r.success &&
							g(
								"article",
								{ className: Ck.priceBox },
								g("h3", { className: Ck.priceBoxTitle }, "Old price ", c, d)
							)
					),
					g(
						"div",
						{ className: Ck.actions },
						g(
							"p",
							null,
							h && `The new price is relevant for ${h}. `,
							"If you use the subscription from a country with a lower price, it may be cancelled without a refund."
						),
						g(
							"p",
							null,
							"This is a one way subscription migration. ",
							"If you choose to skip now, you can upgrade to regional prices at any time with one click from your account page."
						),
						g(
							"p",
							null,
							g(
								"strong",
								null,
								"You will NOT be charged any extra money now. New price will apply on the next billing date."
							)
						),
						g(S6, { error: r.error, styles: CI }),
						!r.success &&
							g(
								"button",
								{ id: "save", className: Ck.button, onClick: s },
								r.processing &&
									g(p0, {
										width: 17,
										height: 17,
										fill: "#fff",
										className: p1.migrate,
									}),
								r.processing ? "Switching plan..." : `Cut costs with ${p}`
							),
						!r.success &&
							!r.processing &&
							g(
								"button",
								{ id: "cancel", className: Ck.buttonGray, onClick: o },
								`Stay with ${c}${d}`
							),
						r.success &&
							!r.processing &&
							g(
								"button",
								{ id: "done", className: Ck.button, onClick: l },
								"Done"
							)
					)
				)
			)
		);
	},
	CD = "C0d2hw",
	Cz = "C0d2su",
	CO = "C0d2mf",
	CR = "C0d15l",
	C$ = "C0d2gj",
	CF = "C0d52",
	CH = bm + " C0d2j4",
	CV = bC + " C0d2ls",
	Cj = {
		settings: "C0d2hw",
		panel: "C0d2su",
		head: "C0d2mf",
		title: "C0d15l",
		body: "C0d2gj",
		actions: "C0d52",
		button: bm + " C0d2j4",
		buttonLink: bC + " C0d2ls",
	};
var CU = {
		translations: {
			"": {
				"Continue on a free plan": ["Fahren Sie kostenlos fort"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"Lieben Sie Songsterr? Schlie\xdfen Sie sich Tausenden von Abonnenten an, um die urspr\xfcnglichen Musikschaffenden zu unterst\xfctzen und uns dabei zu helfen, ein noch besseres Produkt zu entwickeln ❤️",
					],
				"Subscribe to Plus": ["Plus abonnieren"],
			},
		},
		language: "de",
		pluralForms: "nplurals=2; plural=(n != 1);",
	},
	CG = {
		translations: {
			"": {
				"Continue on a free plan": ["Continuar en un plan gratuito"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"\xbfAmas Songsterr? \xdanete a miles de suscriptores para apoyar a los creadores de m\xfasica original y ay\xfadanos a crear un producto a\xfan mejor ❤️",
					],
				"Subscribe to Plus": ["Suscr\xedbete a Plus"],
			},
		},
		language: "es",
		pluralForms: "nplurals=2; plural=(n != 1);",
	},
	CW = {
		translations: {
			"": {
				"Continue on a free plan": ["Continuer gratuitement"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"Vous aimez Songster\xa0? Rejoignez des milliers d'abonn\xe9s pour soutenir les cr\xe9ateurs de musique originaux et nous aider \xe0 cr\xe9er un produit encore meilleur ❤️",
					],
				"Subscribe to Plus": ["Abonnez-vous \xe0 Plus"],
			},
		},
		language: "fr",
		pluralForms: "nplurals=2; plural=(n > 1);",
	},
	Cq = {
		translations: {
			"": {
				"Continue on a free plan": ["무료 요금제로 계속하기"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"Songsterr가 마음에 드십니까? 수천 명의 구독자와 함께 오리지널 음악 제작자를 지원하고 더 나은 제품을 만들 수 있도록 도와주세요 ❤️",
					],
				"Subscribe to Plus": ["플러스 구독"],
			},
		},
		language: "ko",
		pluralForms: "nplurals=1; plural=0;",
	},
	CX = {
		translations: {
			"": {
				"Continue on a free plan": ["無料プランで継続"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"Songsterrが好きですか？数千人の登録者と共にオリジナルの音楽クリエイターをサポートし、より優れた製品を構築するための支援を提供しよう ❤️",
					],
				"Subscribe to Plus": ["プラスに登録"],
			},
		},
		language: "ja",
		pluralForms: "nplurals=1; plural=0;",
	},
	CY = {
		translations: {
			"": {
				"Continue on a free plan": ["Продолжить бесплатно"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"Любите Songsterr? Присоединяйтесь к тысячам подписчиков, чтобы поддержать создателей оригинальной музыки и помочь нам создать еще более качественный продукт ❤️",
					],
				"Subscribe to Plus": ["Подписаться"],
			},
		},
		language: "ru",
		pluralForms:
			"nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
	},
	CK = {
		translations: {
			"": {
				"Continue on a free plan": ["继续使用免费计划"],
				"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️":
					[
						"喜欢Songsterr？加入数以千计的订阅者，支持原创音乐创作者，帮助我们打造更好的产品❤️",
					],
				"Subscribe to Plus": ["订阅加强版"],
			},
		},
		language: "zh",
		pluralForms: "nplurals=1; plural=0;",
	};
let CJ = "sr_subscribe_dialog",
	CZ = () => {
		let { dispatch: e } = lk(),
			{ gettext: t } = mG(CU, CG, CW, CX, Cq, CY, CK),
			[n, i] = d(!lV(CJ)),
			r = () => {
				i(!1),
					lU(CJ, !0),
					e("curiosity/setConversionProps", {
						"Last referring link": "Subscribe dialogue",
					}),
					e("navigate", "/a/wa/plus?from=subscribe_dialogue");
			},
			a = () => {
				i(!1), lU(CJ, !0);
			};
		return (
			n &&
			g(
				"section",
				{ className: Cj.settings },
				g(
					"div",
					{ className: Cj.panel },
					g(
						"div",
						{ className: Cj.head },
						g("h2", { className: Cj.title }, t("Subscribe to Plus"))
					),
					g(
						"p",
						{ className: Cj.body },
						t(
							"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️"
						)
					),
					g(
						"div",
						{ className: Cj.actions },
						g(
							"button",
							{ id: "subscribe", className: Cj.button, onClick: r },
							t("Subscribe to Plus")
						),
						g(
							"button",
							{ id: "cancel", className: Cj.buttonLink, onClick: a },
							t("Continue on a free plan")
						)
					)
				)
			)
		);
	},
	CQ = "Bz8bn",
	C1 = { overlay: "Bz8bn" };
function C0() {
	let { layer: e, dispatch: t } = lk("layer");
	return (
		e.layer &&
		m("div", {
			className: C1.overlay,
			onClick: () => t("layer/hide"),
			id: "hide-layer-overlay",
		})
	);
}
let C2 = E(() =>
	Promise.all([
		import("./UTRecorder.bbf7dcf4.js"),
		ys([
			"/static/latest/UTRecorder.0420d2af021d9053.css",
			"/static/latest/index.b12afd8487ff4de1.css",
			"/static/latest/Input.2762c3e20d6520b6.css",
		]),
	]).then((e) => e[0])
);
function C5() {
	let { ut: e } = lk("ut"),
		t = e.stage;
	if (t === uk) return;
	let [n] = y((e) => {
		"Sentry" in window &&
			"function" == typeof window.Sentry.captureException &&
			window.Sentry.captureException(e),
			console && console.error(e);
	});
	return n ? null : m(v, { fallback: void 0, children: m(C2, this.props) });
}
let C4 = (e) => !e || !e.tracks || 1 === e.tracks.length,
	C3 = (e) => true || e.demo.enabled,
	C8 = (e, t) =>
		e.layer.layer === t
			? e.dispatch("layer/hide")
			: e.dispatch("layer/show", t),
	C6 = (e) => e.meta.allowedByLicense,
	C9 = (e) => !e.route.isPanel,
	C7 = (e) => {
		var t;
		return (
			(null === (t = e.experiments.play_along) || void 0 === t
				? void 0
				: t.segment) !== "on" ||
			!A ||
			e.player.video.isLoaded
		);
	},
	ke = (e) => {
		let { current: t } = e.store.get().part;
		return t && !t.usedDrums;
	},
	kt = (e) => !C4(e.meta.current) || (C8(e, "solo_single"), !1),
	kn = (e) => (t) => !!C3(t) || (C8(t, e), !1),
	ki = (e) => (e.layer.layer && e.dispatch("layer/hide"), !0);
class kr extends w {
	componentDidMount() {
		let e = window.hotKeysManager;
		e.bindOne("esc", this.handleHide, { parallel: !0 }),
			e.bindMeta("alt+enter", this.handleFullscreen),
			e.bindMeta("cmd+p", this.handlePrint);
	}
	componentDidCatch(e, t) {
		try {
			"Sentry" in window &&
				"function" == typeof window.Sentry.captureException &&
				window.Sentry.captureException(e);
		} catch (n) {}
		console && console.error(e, t);
	}
	handleAction = (e, t) => (n) => {
		for (let i of (n.stopPropagation(), n.preventDefault(), e))
			if (!i(this.props)) return;
		t(n);
	};
	handleFullscreen = this.handleAction([C6, C9], () => {
		let e = !this.props.screen.fullscreen,
			{ dispatch: t } = this.props;
		oj(t, { enabled: e }),
			t("curiosity/google", {
				category: "Player",
				action: e ? "Entered fullscreen" : "Exited fullscreen",
				label: "draw",
				value: "0",
			});
	});
	handlePlay = this.handleAction([C6, C9, ki, C7], () => {
		let { store: e } = this.props,
			{ meta: t, player: n, experiments: i, user: r } = e.get();
		if (!t.isFailed && n2(t, r)) {
			var a;
			if (
				(null === (a = i.play_along) || void 0 === a ? void 0 : a.segment) ===
					"on" &&
				n.video.getReady()
			)
				n.shouldPlay ? this.handlePauseVideo() : this.handlePlayVideo();
			else {
				let { dispatch: s } = this.props;
				oB(s, n.audio),
					s("curiosity/google", {
						category: "Player",
						action: n.shouldPlay ? "Pressed pause" : "Pressed play",
					});
			}
		}
	});
	handlePlayVideo = () => {
		let { player: e, dispatch: t } = this.props;
		t("player/resume", "buffering"), e.video.play(), oB(t, e.audio, !0);
	};
	handlePauseVideo = () => {
		let { player: e, dispatch: t } = this.props;
		e.video.pause(), oB(t, e.audio, !1);
	};
	handleMixer = this.handleAction([C6, C9], () => {
		let { store: e } = this.props,
			{ meta: t } = e.get();
		t.current && t.current.tracks && C8(this.props, "mixer");
	});
	handleSpeed = this.handleAction([C6, C9, kn("plus_speed")], () => {
		C8(this.props, "speed");
	});
	handleIncreaseBpm = this.handleAction([C6, C9, kn("plus_speed")], () => {
		oR(this.props.store);
	});
	handleChangeSpeed = (e) =>
		this.handleAction([C6, C9, kn("plus_speed")], () => {
			oH(this.props.store, e);
		});
	handleDecreaseBpm = this.handleAction([C6, C9, kn("plus_speed")], () => {
		o$(this.props.store);
	});
	handlePitchshift = this.handleAction(
		[C6, C9, kn("plus_pitchshift"), ki],
		() => {
			C8(this.props, "pitchshift");
		}
	);
	handleCountin = this.handleAction([C6, C9, ki], () => {
		oW(this.props.dispatch);
	});
	handleMetronome = this.handleAction([C6, C9, ki], () => {
		this.props.dispatch("player/toggleMetronome:init");
	});
	handleSolo = this.handleAction([C6, C9, kt, kn("plus_solo"), ki], () => {
		let { store: e } = this.props,
			{ player: t } = e.get();
		oU(e, "solo" === t.type ? "focus" : "solo");
	});
	handleMute = this.handleAction([C6, C9, kn("plus_mute"), ki], () => {
		let { store: e } = this.props,
			{ player: t } = e.get();
		oU(e, "mute" === t.type ? "focus" : "mute");
	});
	handleLoop = this.handleAction([C6, C9, kn("plus_loop"), ki], () =>
		oO(this.props.store)
	);
	handlePrint = this.handleAction([C6, C9, kn("plus_print"), ki], () => {
		this.props.dispatch("player/togglePlay", !1),
			"chords" === this.props.route.page &&
				this.props.dispatch("curiosity/event", { event: "Printed chords" }),
			setTimeout(() => {
				window.print();
			});
	});
	handleTabEditor = this.handleAction([C6, C9, ke, ki], () => {
		let { dispatch: e, layer: t } = this.props,
			n = "tab_editor" !== t.layer;
		n && e("player/stopPlay"),
			0.05 > Math.random() &&
				e("curiosity/event", { event: "Pressed tab editor", opened: n }),
			e("screener/pressedEditor"),
			C8(this.props, "tab_editor");
	});
	handleFingerings = this.handleAction([C6, C9, ki], () => {
		this.props.dispatch("fingerings/toggle");
	});
	handleMinimize = () => ki(this.props);
	handleActivateToggleExperiment = () => {
		let { dispatch: e } = this.props;
		e("experiments/activate", {
			experimentName: "open_srwm_toolbar_by_default",
		});
	};
	handleNotation = this.handleAction([], () => {
		"help_notation" === this.props.layer.layer
			? this.props.dispatch("layer/hide")
			: this.props.dispatch("layer/show", "help_notation");
	});
	handleHide = this.handleAction([], () => {
		if (this.props.route.isPanel) {
			let {
					routeContent: e,
					meta: t,
					chords: n,
					tags: i,
				} = this.props.store.get(),
				r = vJ(e, t, n, i);
			this.props.dispatch("navigate", r);
		}
		if (this.props.layer.layer) {
			this.props.dispatch("layer/hide");
			return;
		}
		this.props.screen.fullscreen && oj(this.props.dispatch, { enabled: !1 });
	});
	render() {
		let {
				user: e,
				meta: t,
				chords: n,
				routeContent: i,
				device: r,
			} = this.props,
			a = !this.props.device.webview,
			s = C3(this.props),
			o = this.props.screen.isSmall,
			l = this.props.screen.fullscreen,
			c = !t.loading && !!t.current,
			u = a && c && !o && nq(e, tb.USE_ADMIN_TOOLS),
			d = a && !o && this.props.payment.showMigrationPopup,
			p = !s && this.props.curiosity.vpt10.count >= 10 && !o,
			h = !1,
			f = pV.app;
		if ("tab" === i.page) {
			f = s ? pV.appPlus : pV.appFree;
			let y = !t.isFailed && t.allowedByLicense;
			h = y && !s && r.isPhone;
		} else if ("chords" === i.page) {
			f = pV.appChords;
			let v = !n.isFailed;
			(h = v && !s && r.isPhone),
				this.props.device.webview && (f = pV.appChordsMinimalism);
		} else "tags" === i.page && (f = pV.appTags);
		return g(
			"div",
			{ className: f, id: "app" },
			a && g(bn, null),
			a && !l && g(v0, { isSmallScreen: o }),
			a && g(wU, null),
			a && g(wa, null),
			a && g(C5, null),
			a &&
				("tab" === i.page || "chords" === i.page) &&
				o &&
				g(SB, { isChords: "chords" === i.page, handleMixer: this.handleMixer }),
			h && m(wV, null, "showroom-header"),
			g(yU, {
				plusAccess: s,
				showFullUI: a,
				handleFullscreen: this.handleFullscreen,
				handleNotation: this.handleNotation,
			}),
			"tab" === i.page &&
				m(hi, {
					component: vh,
					handlePlay: this.handlePlay,
					handleMixer: this.handleMixer,
					handleSpeed: this.handleSpeed,
					handleSolo: this.handleSolo,
					handleMute: this.handleMute,
					handleLoop: this.handleLoop,
					handlePitchshift: this.handlePitchshift,
					handlePrint: this.handlePrint,
					handleCountin: this.handleCountin,
					handleMetronome: this.handleMetronome,
					handleNotation: this.handleNotation,
					handleMinimize: this.handleMinimize,
					handleTabEditor: this.handleTabEditor,
					handleFullscreen: this.handleFullscreen,
					handleIncreaseBpm: this.handleIncreaseBpm,
					handleDecreaseBpm: this.handleDecreaseBpm,
					handleFingerings: this.handleFingerings,
					handleChangeSpeed: this.handleChangeSpeed,
					handlePlayVideo: this.handlePlayVideo,
					handlePauseVideo: this.handlePauseVideo,
					handleActivateToggleExperiment: this.handleActivateToggleExperiment,
				}),
			"chords" === i.page &&
				m(hi, {
					component: vd,
					handlePrint: this.handlePrint,
					handleFullscreen: this.handleFullscreen,
				}),
			("tag" === i.page || "tags" === i.page) && m(hi, { component: vp }),
			a && !s && g(ww, null),
			a && u && g(bu, { meta: t }),
			a && u && g(wP, null),
			a && m(C0, {}),
			a && d && g(CB, null),
			a && p && g(CZ, null)
		);
	}
}
var ka = pj(
	kr,
	"user",
	"screen",
	"layer",
	"route",
	"routeContent",
	"meta",
	"chords",
	"demo",
	"device",
	"payment",
	"player",
	"curiosity",
	"experiments"
);
let ks = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
	ko = Array.from("1234567890"),
	kl = [
		"Numpad1",
		"Numpad2",
		"Numpad3",
		"Numpad4",
		"Numpad5",
		"Numpad6",
		"Numpad7",
		"Numpad8",
		"Numpad9",
		"Numpad0",
	],
	kc = {
		backspace: 8,
		delete: 46,
		tab: 9,
		enter: 13,
		esc: 27,
		space: 32,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		0: 48,
		1: 49,
		2: 50,
		3: 51,
		4: 52,
		5: 53,
		6: 54,
		7: 55,
		8: 56,
		9: 57,
		a: 65,
		b: 66,
		c: 67,
		d: 68,
		e: 69,
		f: 70,
		g: 71,
		h: 72,
		i: 73,
		j: 74,
		k: 75,
		l: 76,
		m: 77,
		n: 78,
		o: 79,
		p: 80,
		q: 81,
		r: 82,
		s: 83,
		t: 84,
		u: 85,
		v: 86,
		w: 87,
		x: 88,
		y: 89,
		z: 90,
		Numpad0: 96,
		Numpad1: 97,
		Numpad2: 98,
		Numpad3: 99,
		Numpad4: 100,
		Numpad5: 101,
		Numpad6: 102,
		Numpad7: 103,
		Numpad8: 104,
		Numpad9: 105,
		"+": 187,
		"-": 189,
	};
function ku(e) {
	let t = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
	return t || "cmd" !== e ? (t && "ctrl" === e ? "cmd" : e) : "ctrl";
}
function kd() {
	let e = document.activeElement;
	return (
		!!(
			e &&
			["input", "select", "button", "textarea"].includes(
				e.tagName.toLowerCase()
			)
		) && (e.blur && e.blur(), !0)
	);
}
class kp {
	constructor(e) {
		(this.store = e),
			(this.handlers = {}),
			(this.meta = {}),
			(this.bindSources = {}),
			window.addEventListener("keydown", this.keyboardHandler.bind(this), !1),
			window.addEventListener("keyup", this.preventHandler.bind(this), !1);
	}
	preventHandler(e) {
		e.target instanceof HTMLButtonElement &&
			32 === e.keyCode &&
			!this.store.get().route.isPanel &&
			(e.preventDefault(), e.stopPropagation());
	}
	keyboardHandler(e) {
		if (this.store.get().consent.view) return;
		if (e.altKey || e.shiftKey || e.metaKey || e.ctrlKey) {
			this.metaHandler(e);
			return;
		}
		if (
			!this.handlers[e.keyCode] ||
			e.repeat ||
			((e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement) &&
				!e.target.hasAttribute("data-hotkey"))
		)
			return;
		let t = this.handlers[e.keyCode],
			n = "function" == typeof t.global && t.global;
		if (t.global) {
			n(e);
			return;
		}
		let i = this.store.get().route.isPanel;
		if (t.parallel) {
			let r = "function" == typeof t.parallel && t.parallel;
			(i && kd()) || r(e);
		}
		if (i) {
			let a = "function" == typeof t.onPanelPopup && t.onPanelPopup,
				s = "function" == typeof t.onPanel && t.onPanel;
			t.onPanelPopup ? a(e) : t.onPanel && s(e);
		} else {
			let o = "function" == typeof t.onPopup && t.onPopup,
				l = "function" == typeof t.onTab && t.onTab;
			t.onPopup ? o(e) : t.onTab && l(e);
		}
	}
	metaHandler(e) {
		let t;
		if (
			16 === e.keyCode ||
			17 === e.keyCode ||
			18 === e.keyCode ||
			91 === e.keyCode ||
			!this.meta[e.keyCode]
		)
			return;
		let n = this.meta[e.keyCode];
		if (
			(e.altKey
				? (t = n.alt)
				: e.ctrlKey
				? (t = n.ctrl)
				: e.metaKey
				? (t = n.cmd)
				: e.shiftKey && (t = n.shift),
			t)
		) {
			if (e.repeat) {
				t.repeat && t.repeat(e);
				return;
			}
			let {
				route: { isPanel: i },
				layer: { layer: r },
			} = this.store.get();
			t.onTab ? i || null !== r || t.onTab(e) : t.global && t.global(e);
		}
	}
	bindMeta(e, t) {
		let n =
				arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: "global",
			i =
				arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			[a, s] = e.split("+");
		if (!("shift" === a || "ctrl" === a || "alt" === a || "cmd" === a)) {
			console.error("Please check your meta handler");
			return;
		}
		(this.bindSources[`${s}-${a}-${n}`] = i),
			(this.meta[kc[s]] = this.meta[kc[s]] || {}),
			(this.meta[kc[s]][ku(a)] = this.meta[kc[s]][ku(a)] || {}),
			(this.meta[kc[s]][ku(a)][n] = t),
			r && (this.meta[kc[s]][ku(a)].repeat = sJ(t, 400));
	}
	unbindMeta(e) {
		let t =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: "global",
			n =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
			[i, r] = e.split("+");
		if (!("shift" === i || "ctrl" === i || "alt" === i || "cmd" === i)) {
			console.error("Please check your meta handler");
			return;
		}
		let a = this.bindSources[`${r}-${i}-${t}`] === n;
		this.meta[kc[r]] && a && delete this.meta[kc[r]][ku(i)][t];
	}
	bindOne(e, t, n) {
		let i =
			arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
		(this.bindSources[`${e}-${Object.keys(n)[0]}`] = i),
			(this.handlers[kc[e]] = this.handlers[kc[e]] || {}),
			(this.handlers[kc[e]][Object.keys(n)[0]] = t);
	}
	unbindOne(e, t) {
		let n =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
			i = this.bindSources[`${e}-${Object.keys(t)[0]}`] === n;
		this.handlers[kc[e]] && i && delete this.handlers[kc[e]][Object.keys(t)[0]];
	}
	bind(e, t) {
		let n =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
		for (let i in e)
			Object.prototype.hasOwnProperty.call(e, i) &&
				("keyboard*" === i
					? ks.forEach((r) => this.bindOne(r, e[i], t, n))
					: "digits*" === i
					? ko.forEach((r) => this.bindOne(r, e[i], t, n))
					: "numpad*" === i
					? kl.forEach((r) => this.bindOne(r, e[i], t, n))
					: this.bindOne(i, e[i], t, n));
	}
	unbind(e, t) {
		let n =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
		for (let i in e)
			Object.prototype.hasOwnProperty.call(e, i) &&
				("keyboard*" === i
					? ks.forEach((e) => this.unbindOne(e, t, n))
					: "digits*" === i
					? ko.forEach((e) => this.unbindOne(e, t, n))
					: "numpad*" === i
					? kl.forEach((e) => this.unbindOne(e, t, n))
					: this.unbindOne(i, t, n));
	}
}
async function kh() {
	await L();
	let e = pb(JSON.parse(document.getElementById("state").innerHTML)),
		t = e.get().device,
		n = t.webview,
		i = "bot" === t.type;
	window.Sentry &&
		window.Sentry.onLoad(() => {
			let t = e.get(),
				n = { page: t.route.page };
			for (let i of Object.keys(t.experiments)) {
				let r = t.experiments[i];
				n["e_" + i] = `${r.segment} ${r.status}`;
			}
			window.Sentry.setTags(n);
		}),
		(window.hotKeysManager = new kp(e)),
		n || i || (oI(e), oM(e));
	let r = () => {
		let t = sD(),
			n = sO();
		e.dispatch("screen/resize", { screen: t, viewport: n });
	};
	window.visualViewport
		? window.visualViewport.addEventListener("resize", sK(r, 100))
		: window.addEventListener("resize", sK(r, 100)),
		await Promise.resolve(),
		P(
			g(lS.Provider, { value: e }, g(ka, { store: e })),
			document.getElementById("root")
		),
		r(),
		n5(e),
		de(e);
	let a = e.get(),
		s = -1 !== window.location.search.indexOf("ut=on");
	if (
		(a.experiments.banner_later && e.dispatch("ads/plus"),
		n || i || s || tu(() => uK(e)),
		!n && !i)
	) {
		if (
			(tu(() => {
				var t, n;
				let i = e.get();
				s && e.dispatch("ut/continue", i.query.utName),
					"mytabs" !== a.route.page &&
						i.user.isLoggedIn &&
						((null === (t = i.myTabs.tabs) || void 0 === t
							? void 0
							: t.length) ||
							py(e.dispatch)),
					"favorites" !== a.route.page &&
						i.user.isLoggedIn &&
						((null === (n = i.myTabs.tabs) || void 0 === n
							? void 0
							: n.length) || py(e.dispatch),
						i.favorites.favorites.length || l3(e.dispatch),
						cs(e.dispatch)),
					e.dispatch("curiosity/visitedPage");
			}),
			tu(() => {
				dh(e.dispatch);
			}),
			tu(() => {
				"search" !== e.get().route.page &&
					e.dispatch("songs/filter", {
						pattern: "",
						filters: { instrument: tY, tunings: { [tY]: t5 }, difficulty: tQ },
					});
			}),
			"undefined" != typeof dataLayer &&
				-1 === String(window.location).indexOf("&ut=on"))
		) {
			let { hasPlus: o, isLoggedIn: l } = e.get().user;
      o = true
			dataLayer.push({
				event: l ? (o ? "VISITED_PLUS" : "VISITED_FREE") : "VISITED_ANON",
			});
		}
		"off" === e.get().query.sw ? pS() : pw();
		let c = () => e.dispatch("player/resume", "pagehide"),
			u = () => e.dispatch("player/suspend", "pagehide");
		window.addEventListener("pageshow", c, !1),
			window.addEventListener("resume", c, !1),
			window.addEventListener("pagehide", u, !1),
			window.addEventListener("freeze", u, !1),
			"mediaSession" in navigator &&
				(navigator.mediaSession.setActionHandler("play", () => {
					e.dispatch("player/togglePlay", !0);
				}),
				navigator.mediaSession.setActionHandler("pause", () => {
					e.dispatch("player/togglePlay", !1);
				}));
	}
	(a.isTestMode || "prod" !== window.__STAGE__) && (window.__store__ = e),
		lW(a) && e.dispatch("payment/popup:show"),
		(window.trackNotsyEvent = (t, n) =>
			"prod" === window.__STAGE__ &&
			e.dispatch("curiosity/event", { event: t, ...n }));
}
"undefined" == typeof window ||
	window.APP_INITED ||
	((window.APP_INITED = !0),
	kh().catch((e) => {
		console.error(e);
	}));
export {
	er as $,
	wo as A,
	o_ as B,
	hY as C,
	M as D,
	oS as E,
	ok as F,
	ox as G,
	oH as H,
	yz as I,
	oE as J,
	hs as K,
	ha as L,
	pi as M,
	pr as N,
	o5 as O,
	w5 as P,
	en as Q,
	Sw as R,
	lS as S,
	hF as T,
	g4 as U,
	g0 as V,
	aA as W,
	oV as X,
	tq as Y,
	tG as Z,
	gq as _,
	bh as a,
	dH as a$,
	ea as a0,
	om as a1,
	hn as a2,
	n2 as a3,
	eQ as a4,
	ty as a5,
	tv as a6,
	sU as a7,
	wH as a8,
	rh as a9,
	im as aA,
	iY as aB,
	ih as aC,
	iF as aD,
	iH as aE,
	iy as aF,
	ip as aG,
	iw as aH,
	iv as aI,
	iS as aJ,
	n6 as aK,
	iJ as aL,
	it as aM,
	ie as aN,
	n7 as aO,
	ii as aP,
	ir as aQ,
	tj as aR,
	tu as aS,
	oq as aT,
	aD as aU,
	sM as aV,
	aR as aW,
	i$ as aX,
	dE as aY,
	dT as aZ,
	uX as a_,
	aN as aa,
	iV as ab,
	ij as ac,
	aO as ad,
	iU as ae,
	rf as af,
	iG as ag,
	iD as ah,
	il as ai,
	iW as aj,
	ic as ak,
	iu as al,
	sR as am,
	iz as an,
	iO as ao,
	sY as ap,
	rx as aq,
	gT as ar,
	f3 as as,
	ge as at,
	f5 as au,
	f8 as av,
	i1 as aw,
	i0 as ax,
	rE as ay,
	ig as az,
	wy as b,
	SW as b$,
	dD as b0,
	lp as b1,
	nP as b2,
	no as b3,
	lf as b4,
	n_ as b5,
	t5 as b6,
	lh as b7,
	tY as b8,
	bv as b9,
	e$ as bA,
	SY as bB,
	bB as bC,
	u2 as bD,
	lB as bE,
	SV as bF,
	S$ as bG,
	Sj as bH,
	dS as bI,
	dQ as bJ,
	tw as bK,
	e4 as bL,
	u3 as bM,
	lD as bN,
	sm as bO,
	sb as bP,
	sC as bQ,
	lx as bR,
	sw as bS,
	sy as bT,
	sS as bU,
	sv as bV,
	e5 as bW,
	sg as bX,
	dC as bY,
	SG as bZ,
	lN as b_,
	bw as ba,
	tZ as bb,
	tJ as bc,
	tK as bd,
	ng as be,
	nl as bf,
	nf as bg,
	nL as bh,
	eR as bi,
	g7 as bj,
	A as bk,
	ly as bl,
	mK as bm,
	nS as bn,
	nv as bo,
	ny as bp,
	ei as bq,
	eH as br,
	nq as bs,
	tb as bt,
	tI as bu,
	S6 as bv,
	SU as bw,
	SK as bx,
	SF as by,
	cb as bz,
	pV as c,
	lR as c0,
	tC as c1,
	dJ as c2,
	e2 as c3,
	th as c4,
	ws as c5,
	lq as c6,
	tS as c7,
	vc as c8,
	Sq as c9,
	u_ as cA,
	uN as cB,
	ux as cC,
	C_ as cD,
	CI as cE,
	SH as cF,
	cw as cG,
	e3 as cH,
	SJ as cI,
	sW as cJ,
	sq as cK,
	dw as cL,
	db as cM,
	bj as ca,
	bU as cb,
	bG as cc,
	e9 as cd,
	e8 as ce,
	e6 as cf,
	mj as cg,
	SD as ch,
	l$ as ci,
	lO as cj,
	lF as ck,
	c8 as cl,
	SS as cm,
	Cd as cn,
	lj as co,
	lU as cp,
	bC as cq,
	uk as cr,
	uA as cs,
	uI as ct,
	uM as cu,
	uE as cv,
	uT as cw,
	uL as cx,
	uB as cy,
	uP as cz,
	o2 as d,
	ui as e,
	bW as f,
	sG as g,
	p0 as h,
	o0 as i,
	p1 as j,
	mG as k,
	s3 as l,
	hE as m,
	bm as n,
	bP as o,
	wL as p,
	eF as q,
	eV as r,
	vK as s,
	dN as t,
	lk as u,
	vY as v,
	pj as w,
	oC as x,
	oT as y,
	sK as z,
};
