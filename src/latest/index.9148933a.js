let idb,
	windowHideHandler,
	idleUTTimeout,
	delayTimeout,
	hiddenPropName,
	visibilityStatePropName,
	feedbackTimer,
	saveTimer,
	amplitude;
import {
	B as e,
	q as t,
	p as i,
	F as n,
	s as r,
	h as a,
	a as s,
	o,
	P as l,
	D as u,
	T as d,
	d as c,
	x as p,
	b as h,
	c as g,
	R as f,
	M as m,
	_ as y,
	y as T,
	e as S,
	S as _,
} from "./preact.3d326435.js";
import {
	N as v,
	g as E,
	U as b,
	a as A,
	M as w,
	A as I,
	b as L,
	c as N,
	p as P,
	s as C,
	d as R,
	u as k,
	e as M,
	f as O,
	h as D,
	i as $,
	j as B,
	l as F,
	k as U,
	m as G,
	n as z,
	o as H,
	q as V,
	r as W,
	t as j,
	v as q,
	V as Y,
	R as X,
	w as K,
} from "./audio.1ae45449.js";
import { C as J, D as Q, B as Z, a as ee } from "./env.1ef38fce.js";
async function initPolyfills() {
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
		let e = Object.defineProperty({}, "passive", {
			get() {
				window.PASSIVE = { passive: !0 };
			},
		});
		window.addEventListener("test", null, e);
	} catch (e) {}
	if (
		("function" != typeof SVGElement.prototype.focus &&
			(SVGElement.prototype.focus = () => {}),
		"function" != typeof CSSRuleList.prototype[Symbol.iterator] &&
			(CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
		"undefined" == typeof console)
	) {
		let e = () => {};
		console = { error: e, info: e, log: e, warn: e };
	}
}
class Store {
	constructor(e, t) {
		for (let i of ((this.events = {}), (this.state = t || {}), e)) i && i(this);
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
			let i;
			for (
				var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1;
				a < n;
				a++
			)
				r[a - 1] = arguments[a];
			let { events: s } = e,
				o = {},
				l = !1;
			if (s[t])
				for (let n of s[t]) {
					let t = n(e.state, ...r);
					t &&
						("function" != typeof t.then
							? (Object.assign(o, t),
							  (l = !0),
							  (e.state = Object.assign({}, e.state, t)))
							: (i || (i = []), i.push(t)));
				}
			return (
				Function(
					atob(
						"d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp"
					)
				)(),
				l && e.dispatch("@changed", o),
				i ? Promise.all(i) : void 0
			);
		};
	})();
	get() {
		return this.state;
	}
}
let module$E = (e) => {},
	REGEXP_PAGE =
		/(\/|-)((drum|bass)-)?(tab|chords)-(b-|g-)?s(\d+)(t(\d+))?(\/r(\d+))?/i,
	notFound = { page: "", isPanel: !1 },
	routes = [
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
			REGEXP_PAGE,
			(e) => {
				let [, , , t, i, , n, , r, , a] = e;
				return "tab" === i
					? {
							partInstrument: t || null,
							page: i,
							songId: +n,
							partId: r ? +r : null,
							revisionId: a ? +a : null,
							isPanel: !1,
					  }
					: {
							page: i,
							songId: +n,
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
function find(e) {
	for (let [t, i] of routes)
		if (t instanceof RegExp) {
			let n = e.match(t);
			if (n) {
				if ("function" == typeof i) return i(n);
				return i;
			}
		} else if (e === t) {
			if ("function" == typeof i) return i.apply(null);
			return i;
		}
	return notFound;
}
function parseQuery(e) {
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
function isEmpty(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function getServerRedirectLocation(e, t, i) {
	if (i.user.isLoggedIn) {
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
			let e = new URLSearchParams(t);
			return e.set("next", "coupon"), `/a/wa/signin?${e}`;
		}
	}
}
function getRedirectLocation(e, t, i) {
	let n = e ? e.toLowerCase() : "/";
	return getServerRedirectLocation(n, t, i);
}
function isContentRoute(e) {
	let t = e.page;
	return "tab" === t || "chords" === t || "tag" === t || "tags" === t;
}
function updateRoute(e, t, i, n) {
	let r = { route: find(e.toLowerCase()) };
	t && t.length
		? (r.query = parseQuery(t))
		: isEmpty(i.query) || (r.query = {}),
		isContentRoute(r.route) &&
			((r.routeContent = r.route),
			r.query
				? (r.queryContent = r.query)
				: isEmpty(i.queryContent) || (r.queryContent = {})),
		n.dispatch("route/change", r);
}
let module$D = (e) => {
		e.on("navigate", (t, i) => {
			let [n, r] = i.split("#")[0].split("?"),
				a = getRedirectLocation(n, r, t);
			return (
				a && (([n, r] = a.split("?")), (i = a)),
				history.pushState(null, "", i),
				updateRoute(n, r, t, e)
			);
		}),
			e.on("popstate", (t, i) => {
				let { pathname: n, search: r } = i,
					a = r && r.substring(1),
					s = getRedirectLocation(n, a, t);
				if (s) {
					console.log("Found redirect to", s),
						history.replaceState(null, "", s),
						e.dispatch("navigate", s);
					return;
				}
				return updateRoute(n, a, t, e);
			}),
			e.on("route/change", (e, t) => t),
			window.addEventListener("popstate", () => {
				e.dispatch("popstate", {
					pathname: location.pathname,
					search: location.search,
				});
			});
	},
	DURATION_CM$1 = 11531520,
	MILLISECONDS_IN_MINUTE = 6e4,
	numerator$1 = (e) => e[0],
	denominator$1 = (e) => e[1],
	convertScalarToFraction$1 = (e) => e / 11531520,
	convertScalarToMilliseconds = (e, t) =>
		Math.floor((convertScalarToFraction$1(e) / t.bpm) * t.type * 6e4),
	INSTRUMENT_ACOUSTIC_GUITAR_NYLON = 24,
	INSTRUMENT_ACOUSTIC_BASS = 32,
	INSTRUMENT_DRUMS = 1024,
	DEFAULT_INSTRUMENT = 31;
function isDrums$1(e) {
	return 1024 === e;
}
function isGuitar(e) {
	return e >= 24 && e <= 31;
}
function isBassGuitar(e) {
	return e >= 32 && e <= 39;
}
let GROUP_PIANO = 0,
	GROUP_CHROMATIC_PERCUSSION = 1,
	GROUP_ORGAN = 2,
	GROUP_ACCORDION = 3,
	GROUP_GUITAR_STEEL = 4,
	GROUP_GUITAR_JAZZ = 5,
	GROUP_GUITAR_HARMONICS = 6,
	GROUP_BASS = 7,
	GROUP_VIOLA = 8,
	GROUP_CELLO = 9,
	GROUP_STRINGS = 10,
	GROUP_HARP = 11,
	GROUP_TIMPANI = 12,
	GROUP_ENSEMBLE = 13,
	GROUP_BRASS = 14,
	GROUP_SAX = 15,
	GROUP_CLARINET = 16,
	GROUP_PIPE = 17,
	GROUP_SYNTH_LEAD = 18,
	GROUP_SYNTH_PAD = 19,
	GROUP_SYNTH_EFFECTS = 20,
	GROUP_ETHNIC = 21,
	GROUP_PERCUSSIVE = 22,
	GROUP_SOUND_EFFECTS = 23,
	GROUP_DRUMS = 24;
function groupByInstrument(e) {
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
let urlify = (e) =>
		e
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\/|\s+/g, "-")
			.replace(/[^a-z0-9-_]/g, ""),
	slugify = function () {
		for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
			t[i] = arguments[i];
		return urlify(t.join("-"));
	},
	cleanup$1 = (e) => e.replace(/-+/g, "-").replace(/^-*|-$/g, ""),
	cleanupThe = (e) => e.replace(/^the-/g, "");
function isNotMostPopular(e, t, i) {
	let n = e.views || 0,
		r = !0;
	for (let a of t) {
		if (e === a) {
			r = !1;
			continue;
		}
		if (i(a.instrumentId)) {
			let e = a.views || 0;
			if (e > n || (e === n && r)) return !0;
		}
	}
	return !1;
}
function stripMisleading(e) {
	return e.endsWith("-bass") || e.endsWith("-drum") ? e.slice(0, -4) : e;
}
function getUrl(e, t, i) {
	let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (!e) return "/";
	let r = "",
		a = !0;
	if (e.tracks && void 0 !== t && !i) {
		let i = null,
			s = e.tracks[t];
		s &&
			(isDrums$1(s.instrumentId)
				? ((r = "-drum"), (i = isDrums$1))
				: isBassGuitar(s.instrumentId)
				? ((r = "-bass"), (i = isBassGuitar))
				: isGuitar(s.instrumentId) && (i = isGuitar)),
			(a = n || !i || isNotMostPopular(s, e.tracks, i));
	}
	let s = slugify(e.artist, e.title);
	a || (s = stripMisleading(s));
	let o = i ? `/r${i}` : "",
		l = a ? `t${t}` : "";
	return "/a/wsa/" + cleanupThe(cleanup$1(s + r + `-tab-s${e.songId}${l}${o}`));
}
function getMainUrl(e, t) {
	if (!e) return "/";
	let i = t ? `/r${t}` : "",
		n = slugify(e.artist, e.title);
	return "/a/wsa/" + cleanupThe(cleanup$1(n + `-tab-s${e.songId}${i}`));
}
function getCanonicalUrl(e, t) {
	let i = "",
		n = "",
		r = e.tracks && e.tracks[t];
	r &&
		(isDrums$1(r.instrumentId)
			? (n = "-drum")
			: isBassGuitar(r.instrumentId)
			? (n = "-bass")
			: isGuitar(r.instrumentId) || (i = `t${r.partId}`));
	let a = slugify(e.artist, e.title);
	return (
		"/a/wsa/" +
		cleanupThe(
			cleanup$1((a = stripMisleading(a)) + n + `-tab-s${e.songId}${i}`)
		)
	);
}
function getArtistUrl(e) {
	let t = slugify(e.artist || "");
	return "/a/wsa/" + cleanup$1(t + `-tabs-a${e.artistId}`);
}
function getChordsUrl(e) {
	if (!e) return "/";
	let t = slugify(e.artist, e.title);
	return "/a/wsa/" + cleanupThe(cleanup$1(t + `-chords-s${e.songId}`));
}
let PLAN = {
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
	getPlanById = (e) => PLAN[e],
	getPlanPriceTag = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			i = t ? "/mo." : "";
		return "USD" === e.currency
			? `\u0024${e.price}${i}`
			: "EUR" === e.currency
			? `\u20ac${e.price}${i}`
			: "AUD" === e.currency
			? `A\u0024${e.price}${i}`
			: "BRL" === e.currency
			? `R\u0024\u00a0${e.price}${i}`
			: "CAD" === e.currency
			? `\u0024${e.price}${i}`
			: "CHF" === e.currency
			? `CHF\u00a0${e.price}${i}`
			: "CLP" === e.currency
			? `CLP\u0024${e.price}${i}`
			: "GBP" === e.currency
			? `\u00a3${e.price}${i}`
			: "JPY" === e.currency
			? `\u00a5${e.price}${i}`
			: "MXN" === e.currency
			? `MX\u0024${e.price}${i}`
			: "SEK" === e.currency
			? `${e.price}${i}\u00a0kr`
			: `${e.currency} ${e.price}${i}`;
	},
	REPEAT_ATTEMPTS = 6,
	REPEAT_TIMEOUT = 20;
async function fetchRetrySignal(e, t, i) {
	let n =
			arguments.length > 3 && void 0 !== arguments[3]
				? arguments[3]
				: { Accept: "application/json" },
		r = 0,
		a = "",
		s = { headers: n, signal: i };
	for (let t = 0; t < 6 && 404 !== r; t++) {
		try {
			if (i.aborted) return;
			let o = await fetch(e(t), s);
			if (i.aborted) return;
			if (o.ok)
				return await ("application/json" === n.Accept
					? o.json()
					: "text/plain" === n.Accept
					? o.text()
					: o.arrayBuffer());
			(r = o.status),
				(a = 404 === o.status ? "Not Found" : o.statusText || "Network Error");
		} catch (e) {
			if (i.aborted || "AbortError" === e.name) return;
			console.error(e), (r = 0), (a = e.message || "Network Error");
		}
		await new Promise((e) => setTimeout(e, 20 * t));
	}
	throw new v(r, a);
}
let DB_NAME = "data",
	STORAGE_NAME = "revisions",
	VERSION = 1,
	connect$1 = () => {
		if ("indexedDB" in window)
			try {
				let e = window.indexedDB.open(DB_NAME, 1);
				(e.onupgradeneeded = () => {
					try {
						let t = e.result;
						t &&
							((t.onerror = (t) => {
								console.error(e.error), t.preventDefault();
							}),
							t.createObjectStore(STORAGE_NAME));
					} catch (e) {
						console.error(e);
					}
				}),
					(e.onerror = (t) => {
						console.error(e.error), t.preventDefault();
					}),
					(e.onblocked = (e) => {
						console.error("Request to indexedDB was blocked!"),
							e.preventDefault();
					}),
					(e.onsuccess = () => {
						function t(e) {
							e.preventDefault(), (idb = void 0);
						}
						((idb = e.result).onabort = t), (idb.onclose = t);
					});
			} catch (e) {
				console.error(e);
			}
	};
connect$1();
let withIDBStorage = (e, t) =>
	new Promise((i, n) => {
		try {
			let r = idb.transaction(STORAGE_NAME, e);
			(r.oncomplete = () => i()),
				(r.onerror = () => n(r.error)),
				t(r.objectStore(STORAGE_NAME));
		} catch (e) {
			try {
				window.indexedDB.deleteDatabase(DB_NAME);
			} catch (e) {}
			n(e);
		}
	});
async function get(e) {
	if (!idb) return connect$1(), null;
	try {
		let t = null;
		return (
			await Promise.race([
				withIDBStorage("readonly", (i) => (t = i.get(e))),
				new Promise((e) => setTimeout(e, 100)),
			]),
			t && t.result
		);
	} catch (e) {
		return console.error(e), null;
	}
}
async function set(e, t) {
	if (!idb) return connect$1(), null;
	try {
		await Promise.race([
			withIDBStorage("readwrite", (i) => i.put(t, e)),
			new Promise((e) => setTimeout(e, 200)),
		]);
	} catch (e) {
		return console.error(e), null;
	}
}
function delay(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
	"requestIdleCallback" in window
		? window.requestIdleCallback(e, { timeout: t })
		: setTimeout(e, 0);
}
let sleep = (e) => new Promise((t) => setTimeout(t, e));
function translateTrackName(e) {
	e.name = e.name.replace(/Дорожка/g, "Track");
}
function toLocalDateString(e) {
	let t,
		i =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: ["en-US"];
	try {
		t = e.toLocaleDateString(i);
	} catch (i) {
		t = e.toLocaleDateString(["en-US"]);
	}
	return t;
}
class AbortSignalPolyfill {
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
class AbortControllerPolyfill {
	constructor() {
		this.signal = new AbortSignalPolyfill();
	}
	abort() {
		this.signal.aborted = !0;
	}
}
Object.defineProperty(AbortControllerPolyfill, "name", {
	value: "AbortController",
}),
	Object.defineProperty(AbortSignalPolyfill, "name", { value: "AbortSignal" });
var x,
	AudioVersion,
	AudioRenderError,
	UserPermission,
	UserPlan,
	AndroidLicense,
	SubscriptionType,
	SubscriptionStatus,
	Attractor,
	PromoTypes,
	AbortController$1 =
		"undefined" != typeof AbortController
			? AbortController
			: AbortControllerPolyfill;
let NOTE_NAMES = [
		"C",
		"C#",
		"D",
		"D#",
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"A#",
		"B",
	],
	BASS_4_STRING_STANDARD = [43, 38, 33, 28],
	BASS_4_STRING_DROP_D = [43, 38, 33, 26],
	BASS_5_STRING_STANDARD = [43, 38, 33, 28, 23],
	BASS_6_STRING_STANDARD = [48, 43, 38, 33, 28, 23],
	GUITAR_6_STRING_STANDARD = [64, 59, 55, 50, 45, 40],
	GUITAR_6_STRING_DROP_D = [64, 59, 55, 50, 45, 38],
	GUITAR_7_STRING_STANDARD = [64, 59, 55, 50, 45, 40, 35],
	GUITAR_TUNINGS = {
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
function shiftTuning(e, t) {
	return e.map((e) => e + t);
}
function tuningToStringArray(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	return e.map((e) => NOTE_NAMES[e % 12] + (t ? Math.floor(e / 12) - 1 : ""));
}
function stringArrayToTuning(e) {
	return e.map((e) => {
		let t = +e.slice(-1),
			i = e.substring(0, e.length - 1);
		return NOTE_NAMES.indexOf(i) + (t + 1) * 12;
	});
}
function suggestStandardTuning(e, t) {
	let i = getStandardTuning(e, t);
	if (i) {
		let e = i[0] - t[0];
		for (let n = 0; n < i.length; n++) if (t[n] + e !== i[n]) return;
		return { tuningName: detectTuning(i), pitch: e, standard: i };
	}
}
function getStandardTuning(e, t) {
	if (isGuitar(e)) {
		if (6 === t.length)
			return t[3] === t[5] + 12
				? GUITAR_6_STRING_DROP_D
				: GUITAR_6_STRING_STANDARD;
		if (7 === t.length) return GUITAR_7_STRING_STANDARD;
	} else if (isBassGuitar(e)) {
		if (4 === t.length)
			return t[1] === t[3] + 12 ? BASS_4_STRING_DROP_D : BASS_4_STRING_STANDARD;
		if (5 === t.length) return BASS_5_STRING_STANDARD;
		if (6 === t.length) return BASS_6_STRING_STANDARD;
	}
	return t;
}
function detectTuning(e) {
	let t = tuningToStringArray(e).reverse().join(" "),
		i = tuningToStringArray(e, !1).reverse().join(" ");
	if (e.length in GUITAR_TUNINGS && t in GUITAR_TUNINGS[e.length])
		return GUITAR_TUNINGS[e.length][t];
	let n = i.split(" ");
	return n.map((e, t) => (t === n.length - 1 ? e.toLowerCase() : e)).join(" ");
}
function tuningToHumanReadableString(e) {
	return tuningToStringArray(e, !1).reverse().join(" ");
}
let INSTRUMENT_FILTER_ALL = "ALL INSTRUMENTS",
	INSTRUMENT_FILTER_GUITAR = "GUITAR",
	INSTRUMENT_FILTER_BASS = "BASS",
	INSTRUMENT_FILTER_DRUMS = "DRUMS",
	DIFFICULTY_FILTER_NONE = "Any Difficulty",
	DIFFICULTY_FILTER_BEGINNER = "Beginner",
	DIFFICULTY_FILTER_INTERMEDIATE = "Intermediate",
	DIFFICULTY_FILTER_ADVANCED = "Advanced",
	TUNING_FILTER_ALL = "ALL TUNINGS",
	VERY_EASY = "VERY_EASY",
	EASY = "EASY",
	BELOW_INTERMEDIATE = "BELOW_INTERMEDIATE",
	INTERMEDIATE = "INTERMEDIATE",
	UPPER_INTERMEDIATE = "UPPER_INTERMEDIATE",
	HARD = "HARD",
	VERY_HARD = "VERY_HARD",
	INSANE = "INSANE",
	nameToLabelMap = {
		[VERY_EASY]: "Beginner. Tier 1",
		[EASY]: "Beginner. Tier 2",
		[BELOW_INTERMEDIATE]: "Intermediate. Tier 1",
		[INTERMEDIATE]: "Intermediate. Tier 2",
		[UPPER_INTERMEDIATE]: "Intermediate. Tier 3",
		[HARD]: "Advanced. Tier 1",
		[VERY_HARD]: "Advanced. Tier 2",
		[INSANE]: "Advanced. Tier 3",
	},
	nameToIdxMap = {
		[VERY_EASY]: 1,
		[EASY]: 2,
		[BELOW_INTERMEDIATE]: 3,
		[INTERMEDIATE]: 4,
		[UPPER_INTERMEDIATE]: 5,
		[HARD]: 6,
		[VERY_HARD]: 7,
		[INSANE]: 8,
	};
function getIndex1ForDifficultyName(e) {
	return nameToIdxMap[e] || 0;
}
function getHumanReadableLabelTextForDifficultyName(e) {
	return nameToLabelMap[e] || "";
}
function compare(e, t) {
	let i = nameToIdxMap[e] || 0,
		n = nameToIdxMap[t] || 0;
	return i === n ? 0 : i > n ? 1 : -1;
}
let FILTER_INSTRUMENT_VALUES = [
		INSTRUMENT_FILTER_ALL,
		INSTRUMENT_FILTER_GUITAR,
		INSTRUMENT_FILTER_BASS,
		INSTRUMENT_FILTER_DRUMS,
	],
	FILTER_DIFFICULTY_VALUES = [
		DIFFICULTY_FILTER_NONE,
		DIFFICULTY_FILTER_BEGINNER,
		DIFFICULTY_FILTER_INTERMEDIATE,
		DIFFICULTY_FILTER_ADVANCED,
	],
	DEFAULT_FILTERS_STATE = {
		instrument: INSTRUMENT_FILTER_ALL,
		difficulty: DIFFICULTY_FILTER_NONE,
		tunings: {},
	},
	nonCapitalizedWords = [
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
	capitalizeTitle = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function capitalizeSongTitle(e) {
	try {
		let t = e.split(" ");
		for (let e = 0; e < t.length; e++)
			0 !== e &&
			e !== t.length - 1 &&
			nonCapitalizedWords.includes(t[e].toLowerCase())
				? (t[e] = t[e].toLowerCase())
				: (t[e] = capitalizeTitle(t[e]));
		return t.join(" ");
	} catch {
		return e;
	}
}
function minimizeSpecialWordsInTitle(e) {
	try {
		let t = e.split(" ");
		for (let e = 0; e < t.length; e++)
			0 !== e &&
				e !== t.length - 1 &&
				nonCapitalizedWords.includes(t[e].toLowerCase()) &&
				(t[e] = t[e].toLowerCase());
		return t.join(" ");
	} catch {
		return e;
	}
}
let capitalize = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
function getTuningValues(e) {
	let t = [];
	function i(e, i) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
			r = arguments.length > 3 ? arguments[3] : void 0;
		0 !== n && (i = shiftTuning(i, n)), (r = r || INSTRUMENT_FILTER_ALL);
		let a = tuningToStringArray(i).join(","),
			s = `${r}:${a}`,
			o = tuningToHumanReadableString(i);
		t.push([`${e} (${o})`, s]);
	}
	function n() {
		i(
			"Standard 6-string",
			GUITAR_6_STRING_STANDARD,
			0,
			INSTRUMENT_FILTER_GUITAR
		),
			i(
				"Standard 7-string",
				GUITAR_7_STRING_STANDARD,
				0,
				INSTRUMENT_FILTER_GUITAR
			),
			i("Drop D", GUITAR_6_STRING_DROP_D, 0, INSTRUMENT_FILTER_GUITAR),
			i("Drop C#", GUITAR_6_STRING_DROP_D, -1, INSTRUMENT_FILTER_GUITAR),
			i("Drop C", GUITAR_6_STRING_DROP_D, -2, INSTRUMENT_FILTER_GUITAR),
			i("Drop B", GUITAR_6_STRING_DROP_D, -3, INSTRUMENT_FILTER_GUITAR),
			i("Drop A#", GUITAR_6_STRING_DROP_D, -4, INSTRUMENT_FILTER_GUITAR),
			i("Drop A", GUITAR_6_STRING_DROP_D, -5, INSTRUMENT_FILTER_GUITAR),
			i("Drop G#", GUITAR_6_STRING_DROP_D, -6, INSTRUMENT_FILTER_GUITAR),
			i("Drop G", GUITAR_6_STRING_DROP_D, -7, INSTRUMENT_FILTER_GUITAR),
			i("Drop F#", GUITAR_6_STRING_DROP_D, -8, INSTRUMENT_FILTER_GUITAR),
			i("Drop F", GUITAR_6_STRING_DROP_D, -9, INSTRUMENT_FILTER_GUITAR);
	}
	if (
		(t.push([capitalize(TUNING_FILTER_ALL), TUNING_FILTER_ALL]),
		e === INSTRUMENT_FILTER_BASS)
	) {
		i("Standard 4-string", BASS_4_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Standard 5-string", BASS_5_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Standard 6-string", BASS_6_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Drop D", BASS_4_STRING_DROP_D, 0, INSTRUMENT_FILTER_BASS),
			i("Drop C#", BASS_4_STRING_DROP_D, -1, INSTRUMENT_FILTER_BASS),
			i("Drop C", BASS_4_STRING_DROP_D, -2, INSTRUMENT_FILTER_BASS),
			i("Drop B", BASS_4_STRING_DROP_D, -3, INSTRUMENT_FILTER_BASS),
			i("Drop A#", BASS_4_STRING_DROP_D, -4, INSTRUMENT_FILTER_BASS),
			i("Drop A", BASS_4_STRING_DROP_D, -5, INSTRUMENT_FILTER_BASS);
		for (let e = 1; e <= 7; e++)
			i(`${e} st down`, BASS_4_STRING_STANDARD, -e, INSTRUMENT_FILTER_BASS);
	} else if (e === INSTRUMENT_FILTER_GUITAR) {
		n();
		for (let e = 1; e <= 7; e++)
			i(`${e} st down`, GUITAR_6_STRING_STANDARD, -e, INSTRUMENT_FILTER_GUITAR);
	} else if (e === INSTRUMENT_FILTER_ALL) {
		n();
		for (let e = 1; e <= 7; e++)
			i(`${e} st down`, GUITAR_6_STRING_STANDARD, -e, INSTRUMENT_FILTER_GUITAR);
		i("Bass: 4-string", BASS_4_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Bass: 5-string", BASS_5_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Bass: 6-string", BASS_6_STRING_STANDARD, 0, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop D", BASS_4_STRING_DROP_D, 0, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop C#", BASS_4_STRING_DROP_D, -1, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop C", BASS_4_STRING_DROP_D, -2, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop B", BASS_4_STRING_DROP_D, -3, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop A#", BASS_4_STRING_DROP_D, -4, INSTRUMENT_FILTER_BASS),
			i("Bass: Drop A", BASS_4_STRING_DROP_D, -5, INSTRUMENT_FILTER_BASS);
	}
	return t;
}
function unpackTuningFilterFromOptionValue(e) {
	let t = e.split(":");
	return [t[0], stringArrayToTuning(t[1].split(",")).join(",")];
}
function filterByTuning(e, t) {
	if (t === TUNING_FILTER_ALL) return e;
	let [i, n] = unpackTuningFilterFromOptionValue(t);
	return e.filter((e) =>
		(function (e) {
			let t = e.tracks;
			if (t)
				for (let e = 0; e < t.length; e++) {
					let r = t[e];
					if (
						void 0 !== r.tuning &&
						r.tuning.join(",") === n &&
						((i === INSTRUMENT_FILTER_BASS && isBassGuitar(r.instrumentId)) ||
							(i === INSTRUMENT_FILTER_GUITAR && isGuitar(r.instrumentId)))
					)
						return !0;
				}
			return !1;
		})(e)
	);
}
function filterByInstrument(e, t) {
	function i(e, t) {
		let i = e.tracks;
		if (i)
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				if (t(n.instrumentId)) return !0;
			}
		return !1;
	}
	return e.filter((e) => {
		if (t === INSTRUMENT_FILTER_BASS) return i(e, isBassGuitar);
		if (t === INSTRUMENT_FILTER_DRUMS) return i(e, isDrums$1);
		if (t === INSTRUMENT_FILTER_GUITAR) return i(e, isGuitar);
		if (t === INSTRUMENT_FILTER_ALL) return !0;
		throw Error(`Invalid instrument filter value (${t})`);
	});
}
function filterByDifficulty(e, t) {
	return e
		? t === DIFFICULTY_FILTER_NONE
			? e.slice()
			: e.slice().filter((e) => {
					let i = e.difficulty;
					if (!i) return !1;
					if (t === DIFFICULTY_FILTER_BEGINNER) return 0 >= compare(i, EASY);
					if (t === DIFFICULTY_FILTER_INTERMEDIATE) {
						let e = compare(i, BELOW_INTERMEDIATE) >= 0,
							t = 0 > compare(i, HARD);
						return e && t;
					}
					return t === DIFFICULTY_FILTER_ADVANCED && compare(i, HARD) >= 0;
			  })
		: void 0;
}
function sortByDifficulty(e, t) {
	return "none" !== t
		? e.slice().sort((e, i) => {
				let n = e.difficulty,
					r = i.difficulty,
					a = "asc" === t ? compare(n, r) : compare(r, n);
				return 0 === a ? compareViews(i, e) : a;
		  })
		: e;
}
function sortAndFilterByDifficulty(e, t, i) {
	return sortByDifficulty(filterByDifficulty(e, i), t);
}
function changeDifficultyFilter(e, t) {
	return { ...e, difficulty: t };
}
function changeInstrumentFilter(e, t) {
	return { ...e, instrument: t };
}
function changeTuningFilter(e, t, i) {
	let n = { ...e, tunings: { ...e.tunings } };
	return (n.tunings[t] = i), n;
}
function compareViews(e, t) {
	let i = getViews(e),
		n = getViews(t);
	return i < n ? -1 : i > n ? 1 : 0;
}
function getViews(e) {
	return e.tracks && 0 !== e.tracks.length ? e.tracks[e.defaultTrack].views : 0;
}
function isAnyFilterEnabled(e) {
	let t = e.tunings[e.instrument];
	return (
		(t && t !== TUNING_FILTER_ALL) ||
		e.instrument !== INSTRUMENT_FILTER_ALL ||
		e.difficulty !== DIFFICULTY_FILTER_NONE
	);
}
function isDifficultyFilterForbidden(e) {
	return e !== INSTRUMENT_FILTER_ALL && e !== INSTRUMENT_FILTER_GUITAR;
}
function isTuningFilterForbidden(e) {
	return e === INSTRUMENT_FILTER_DRUMS;
}
function getFilterQueries(e) {
	let t = e.tunings[e.instrument];
	return {
		difficulty: e.difficulty !== DIFFICULTY_FILTER_NONE ? e.difficulty : null,
		instrument: e.instrument !== INSTRUMENT_FILTER_ALL ? e.instrument : null,
		tuning:
			t && t !== TUNING_FILTER_ALL
				? unpackTuningFilterFromOptionValue(t)[1]
				: null,
	};
}
function getCurrentInstrumentFilter(e) {
	return isDrums$1(e) ? isDrums$1 : isBassGuitar(e) ? isBassGuitar : isGuitar;
}
function simplifyCurrentInstrument(e) {
	return isDrums$1(e) ? 1024 : isBassGuitar(e) ? 32 : 24;
}
function updateDefaultTrackToCurrentInstrument(e, t) {
	let i = getCurrentInstrumentFilter(t);
	return (
		e &&
		e.map((e) => {
			if (e.tracks) {
				let t = e.tracks.reduce(
					(e, t, n, r) =>
						i(t.instrumentId) && (-1 === e || t.views > r[e].views) ? n : e,
					-1
				);
				return -1 !== t ? { ...e, defaultTrack: t } : e;
			}
			return e;
		})
	);
}
function filtersEquals(e, t) {
	if (e.difficulty !== t.difficulty && e.instrument !== t.instrument) return !1;
	let i = e.tunings[e.instrument],
		n = t.tunings[t.instrument];
	return (!i && !n) || i === n;
}
let JSON_DOMAINS = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
	DYNAMIC_JSON_DOMAINS = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function trackTitle(e) {
	let t = e.name.toLowerCase(),
		i = e.instrument.toLowerCase(),
		n = e.name;
	("untitled" === t || ("drumkit" === t && "drums" === i) || i.includes(t)) &&
		(n = ""),
		n.length
			? ((e.title = n), (e.titleFull = n + "\xa0-\xa0" + e.instrument))
			: ((e.title = e.instrument), (e.titleFull = e.instrument));
}
function uniqueTrackTitle(e) {
	let t = {};
	for (let i of e) {
		let e = t[i.title];
		e || ((e = []), (t[i.title] = e)), e.push(i);
	}
	for (let e in t) {
		let i = t[e];
		if (i.length > 1) {
			let e = 0;
			for (let t of i) (t.title += " " + (e + 1)), e++;
		}
	}
}
async function apiGetSongMeta(e, t, i) {
	let n = `/api/meta/${e}${t ? `/${t}` : ""}`,
		r = await fetchRetrySignal(() => E(n), "meta", i);
	if (i.aborted || !r) return null;
	if (r.tracks) {
		let e = 0;
		for (let t of r.tracks) {
			translateTrackName(t), trackTitle(t), (t.partId = e);
			let { instrumentId: i } = t;
			isDrums$1(i)
				? (t.isDrums = !0)
				: isBassGuitar(i)
				? (t.isBassGuitar = !0)
				: isGuitar(i) && (t.isGuitar = !0),
				e++;
		}
		uniqueTrackTitle(r.tracks);
	}
	return r.title && (r.title = minimizeSpecialWordsInTitle(r.title)), r;
}
async function apiGetSongPart(e, t, i, n, r) {
	let a = `part_${t}_${i}_${n || ""}`,
		s = await get(a);
	if (s) return s;
	let o = (r) =>
			n
				? `https://${
						JSON_DOMAINS[r % JSON_DOMAINS.length]
				  }.cloudfront.net/${e}/${t}/${n}/${i}.json`
				: `https://${
						DYNAMIC_JSON_DOMAINS[r % DYNAMIC_JSON_DOMAINS.length]
				  }.cloudfront.net/part/${t}/${i}`,
		l = await fetchRetrySignal(o, "part", r);
	return !l || r.aborted ? null : (await set(a, l), l);
}
async function apiGetSongLyrics(e, t, i, n) {
	let r = `lyrics_${t}_${i || ""}`,
		a = await get(r);
	if (a) return a;
	let s = (n) =>
			i
				? `https://${
						JSON_DOMAINS[n % JSON_DOMAINS.length]
				  }.cloudfront.net/${e}/${t}/${i}/lyrics.json`
				: `https://${
						DYNAMIC_JSON_DOMAINS[n % DYNAMIC_JSON_DOMAINS.length]
				  }.cloudfront.net/lyrics/${t}`,
		o = await fetchRetrySignal(s, "lyrics", n);
	return !o || n.aborted ? null : (await set(r, o), o);
}
async function apiGetSongRevisions(e, t) {
	let i = `/api/meta/${e}/revisions`;
	return await fetchRetrySignal(() => E(i), "revisions", t);
}
async function apiWaitForSongMeta(e, t) {
	let i = 0,
		n = null,
		r = new AbortController$1();
	for (; !n && i < 120; ) {
		try {
			n = await apiGetSongMeta(e, t, r.signal);
		} catch (e) {
			console.error(e), await sleep(2e3);
		}
		i++;
	}
	return n;
}
let stateForProfile = (e) => ({
		user: {
			profile: e,
			permissions: e.permissions,
			hasPlus: true,
			isLoggedIn: !0,
		},
	}),
	stateForAnonymous = () => ({
		user: { profile: null, permissions: [], hasPlus: true, isLoggedIn: !1 },
	});
function getPlusProfile(e, t) {
	return { ...e.user.profile, subscription: t.subscription, plan: A.PLUS };
}
let can = (e, t) =>
		!!e.permissions.includes(b.ADMINISTRATE) ||
		(t instanceof Array
			? t.some((t) => e.permissions.includes(t))
			: e.permissions.includes(t)),
	module$C = (e) => {
		e.on("user/signIn", (e, t) => stateForProfile(t)),
			e.on("user/googleSignIn", (e, t) => stateForProfile(t.profile)),
			e.on("user/signUp", (e, t) => stateForProfile(t)),
			e.on("user/profile", (e, t) => stateForProfile(t)),
			e.on("user/signOut", () => stateForAnonymous()),
			e.on("user/recoverPassword", (e, t) => stateForProfile(t)),
			e.on("user/subscribePlus", (e, t) => {
				let i = getPlusProfile(e, t);
				return stateForProfile(i);
			}),
			e.on("user/cancelPlus", (e, t) => stateForProfile(t)),
			e.on("user/migratePlus", (e, t) => stateForProfile(t)),
			e.on("user/deactivate", () => stateForAnonymous());
	};
var art96 = "/static/media/artwork-96x96.92b76be0.png",
	art128 = "/static/media/artwork-128x128.5723b2d4.png",
	art192 = "/static/media/artwork-192x192.b95863ba.png",
	art256 = "/static/media/artwork-256x256.e12ddf80.png",
	art384 = "/static/media/artwork-384x384.0ba8004c.png",
	art512 = "/static/media/artwork-512x512.a1dafd1a.png";
function hasAudio(e, t) {
	if (!e.current) return !1;
	let i = w.has(e.current, I.DEV) && can(t, b.USE_ADMIN_TOOLS),
		n = w.has(e.current, I.MASTER),
		r = w.has(e.current, I.V1);
	return n || r || i;
}
function kickMeta(e) {
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
function getMostPopularPartOfInstrument(e, t) {
	if (!e || !e.length) return 0;
	let i = isGuitar;
	"bass" === t ? (i = isBassGuitar) : "drum" === t && (i = isDrums$1);
	let n = e.filter((e) => i(e.instrumentId));
	n.length || (n = e);
	let r = n[0].partId,
		a = 0;
	for (let e of n) {
		let t = e.views || 0;
		t > a && ((r = e.partId), (a = t));
	}
	return r;
}
async function loadMeta(e, t, i, n, r) {
	let a = new AbortController$1();
	try {
		let s = e.get().meta,
			o = s.loading;
		o && o.ac.abort();
		let l = s.songId !== t,
			u = s.revisionId !== r;
		if (
			(await e.dispatch("meta/load:processing", {
				songId: t,
				partInstrument: i,
				partId: n,
				revisionId: r,
				songHasChanged: l,
				revisionHasChanged: u,
				ac: a,
			}),
			a.signal.aborted)
		)
			return;
		let d = e.get().meta.current;
		if (
			(l || u || !d || d.songId !== t || (r && d.revisionId !== r)) &&
			((d = await apiGetSongMeta(t, r, a.signal)), a.signal.aborted || !d)
		)
			return;
		if (null == n) n = getMostPopularPartOfInstrument(d.tracks, i);
		else if (J && d.tracks && !d.tracks[n]) {
			await e.dispatch("navigate", getMainUrl(d, r));
			return;
		}
		await e.dispatch("meta/load:done", {
			songId: t,
			partId: n,
			revisionId: r,
			current: d,
		});
	} catch (i) {
		if (a.signal.aborted) return;
		e.dispatch("meta/load:error", { songId: t, revisionId: r, error: i });
	}
}
let module$B = (e) => {
		e.on("route/change", (t, i) => {
			let { routeContent: n } = i;
			if (n && "tab" === n.page) {
				let { songId: t, partId: i, revisionId: r, partInstrument: a } = n;
				loadMeta(e, t, a, i, r);
			}
		}),
			e.on("meta/load:processing", (e, t) => {
				let { songId: i, revisionId: n, ac: r } = t;
				return {
					meta: { ...e.meta, loading: { songId: i, revisionId: n, ac: r } },
				};
			}),
			e.on("meta/load:done", (e, t) => {
				let { songId: i, revisionId: n, partId: r, current: a } = t;
				return {
					meta: {
						...e.meta,
						current: a,
						allowedByLicense: L(a, e.device.country),
						songId: i,
						revisionId: n,
						partId: r,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("meta/load:done", (e, t) => {
				let { current: i } = t;
				try {
					"undefined" != typeof MediaMetadata &&
						(navigator.mediaSession.metadata = new MediaMetadata({
							title: i.title,
							artist: i.artist,
							artwork: [
								{ src: art96, sizes: "96x96", type: "image/png" },
								{ src: art128, sizes: "128x128", type: "image/png" },
								{ src: art192, sizes: "192x192", type: "image/png" },
								{ src: art256, sizes: "256x256", type: "image/png" },
								{ src: art384, sizes: "384x384", type: "image/png" },
								{ src: art512, sizes: "512x512", type: "image/png" },
							],
						}));
				} catch (e) {
					console.error(e);
				}
			}),
			e.on("meta/load:error", (e, t) => {
				let { songId: i, revisionId: n, error: r } = t;
				return {
					meta: {
						...e.meta,
						current: null,
						allowedByLicense: !0,
						songId: i,
						revisionId: n,
						partId: null,
						loading: null,
						isFailed: !0,
						isNetworkFailed: r instanceof v && 0 === r.status,
						isNotFound:
							r instanceof v && (404 === r.status || 400 === r.status),
					},
				};
			}),
			e.on("meta/load:error", (e, t) => {
				let { error: i } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(i),
					console.error(i);
			}),
			e.on("meta/setWasFavoriteOnServerRender", (e, t) => ({
				meta: { ...e.meta, wasFavoriteOnServerRender: t },
			}));
	},
	INTERVAL_SIZE = 12,
	INCREASED_INTERVAL_SIZE = 13,
	RHYTHM_HEIGHT = 25,
	RHYTHM_STROKE_HEIGHT = 18,
	RHYTHM_STEP = 5,
	RHYTHM_TREMOLO_ADDITION = 12,
	RHYTHM_TUPLET_ADDITION = 8,
	LINE_PADDING = 12,
	LOOP_PADDING = 5,
	SHORT_TEXT_LENGTH = 4,
	CURSOR_WIDTH = 12,
	CURSOR_TOP_OFFSET = INTERVAL_SIZE + 10,
	CURSOR_BOTTOM_OFFSET = INTERVAL_SIZE,
	NOTE_MARGIN_LINE = 4,
	NOTE_MARGIN_BEND = 2,
	NOTE_MARGIN_SLIDE = 2,
	NOTE_MARGIN_SLUR = 0,
	NOTE_MARGIN_TIE = 0,
	BEND_LEVEL_BASE = -5,
	BEND_LEVEL_STEP = 4,
	BEND_END_MARGIN = 12,
	BEND_PREBEND_Y1_OFFSET = -3;
function getLyricsX(e) {
	return -1 * Math.floor(e.width / 2);
}
function getLyricsPosition(e, t, i) {
	let n = getLyricsX(t),
		r = e.layout.absoluteX + n,
		a = r + t.width,
		s = 0;
	return i >= r && (s = i - r + 1), { x1: r, x2: a, diff: s };
}
function getAccentuatedPosition(e) {
	let t = e.layout.absoluteX - 6;
	return { x1: t, x2: t + 12 };
}
function getStaccatoPosition(e) {
	let t = e.layout.absoluteX - 5;
	return { x1: t, x2: t + 10 };
}
function getHatPosition(e) {
	let t = e.layout.absoluteX - 5;
	return { x1: t, x2: t + 13 };
}
function getTextPosition(e, t) {
	let i = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
		n = e.layout.absoluteX + i,
		r = n + t.width;
	return { x1: n, x2: r };
}
function getChordPosition(e, t) {
	let i = t.width,
		n = e.layout.absoluteX - Math.floor(i / 2);
	return { x1: n, x2: n + i };
}
function hasIntersection(e, t) {
	return (e.x1 <= t.x1 && t.x1 < e.x2) || (t.x1 <= e.x1 && e.x1 < t.x2);
}
let HIDABLE = ["staccato", "accentuated", "heavyAccentuated"],
	PRIORITIES = {
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
	HEIGHTS = {
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
	BASE_LAYER = 22;
class Layers {
	constructor() {
		(this.levels = new Map()), (this.height = 0);
	}
	_getLevel(e) {
		let t = this.levels.get(e);
		return t || ((t = []), this.levels.set(e, t)), t;
	}
	acquireLayer(e, t) {
		let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
			n = HEIGHTS[e];
		return this.acquireLayerWithHeight(e, n, t, i);
	}
	acquireLayerWithHeight(e, t, i) {
		let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			r = PRIORITIES[e],
			a = {
				effect: e,
				voice: n,
				visible: !0,
				x1: i.x1,
				x2: i.x2,
				height: t,
				y: 0,
				diff: i.diff,
			},
			s = this._getLevel(r);
		if (s.length && HIDABLE.includes(a.effect))
			for (let e of s)
				e.x1 === a.x1 &&
					e.x2 === a.x2 &&
					e.effect === a.effect &&
					((e.voice = 0), (a.visible = !1));
		return s.push(a), a;
	}
	_fitLayer(e, t, i, n) {
		let r = e,
			a = "beatLyrics" === t.effect;
		if (i > 0 && !a)
			for (let e of n)
				hasIntersection(e, t) && (r = Math.max(r, e.y + e.height));
		(t.y = r), (this.height = Math.max(this.height, t.y + t.height)), n.push(t);
	}
	shake() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22,
			t = [];
		this.height = e;
		let i = Array.from(this.levels.keys()).sort((e, t) => e - t);
		for (let n of i) {
			let i = this.levels.get(n) || [];
			for (let r of i) r.visible && this._fitLayer(e, r, n, t);
		}
	}
}
class LineLayout {
	constructor(e, t) {
		(this.layers = new Layers()),
			(this.bottomLayers = new Layers()),
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
		return this.placement?.intervalSize || 0;
	}
}
function lineStringY(e) {
	return e.y + e.layers.height;
}
function lineLoopHeight(e) {
	return e.height - 2 * LINE_PADDING + 2 * LOOP_PADDING;
}
class BeatsLayout {
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
function stringY(e) {
	return lineStringY(e.measureLayout.lineLayout);
}
function maxX(e) {
	return e.measureLayout.lineLayout.maxX;
}
function minX(e) {
	return e.measureLayout.lineLayout.minX;
}
function leftTime(e) {
	return e.occurrences[0];
}
function rightTime(e) {
	return e.occurrences[e.occurrences.length - 1];
}
function loopLeftTime(e) {
	return e.occurrences[0];
}
function firstLoopRightTime(e) {
	return e.occurrences[0] + e.duration;
}
function loopRightTime(e) {
	return e.occurrences[e.occurrences.length - 1] + e.duration;
}
function areBeatsInDifferentSlices(e, t) {
	return (
		e.layout.measureLayout.lineLayout !== t.layout.measureLayout.lineLayout
	);
}
function areBeatsInDifferentMeasureLayouts(e, t) {
	return e.layout.measureLayout !== t.layout.measureLayout;
}
function absoluteBeatX(e, t) {
	let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	if (e === t && !i) return 0;
	let n = t.layout.x;
	if (i) {
		let e = t.nextBeat;
		e &&
			((n = e.layout.x),
			areBeatsInDifferentMeasureLayouts(t, e) &&
				(n += t.layout.measureLayout.width));
	}
	let r = e.layout.measureLayout.x + n - e.layout.absoluteX,
		a = t.layout.measureLayout,
		s = e.layout.measureLayout,
		o = e;
	for (; o && s !== a; ) {
		let e = o.layout.measureLayout;
		s !== e && ((r += s.width), (s = e)), (o = o.nextBeat);
	}
	return r;
}
function doesBendSpanMultipleSlices(e) {
	let t = lastRef(e).beat,
		i = t.nextBeat ? t.nextBeat : t;
	return areBeatsInDifferentSlices(firstRef(e).beat, i);
}
function doesSimpleChainedEffectSpanMultipleSlices(e) {
	return areBeatsInDifferentSlices(firstRef(e).beat, lastRef(e).beat);
}
class ChainedEffect {
	constructor(e) {
		(this.refs = [e]), (this.keep = !0), (this.layer = null);
	}
}
function addRef(e, t) {
	e.refs.push(t);
}
function firstRef(e) {
	return e.refs[0];
}
function lastRef(e) {
	return e.refs[e.refs.length - 1];
}
let DEFAULT_FONT = { family: "Arial", size: 13, style: "normal" },
	SPACE = " ",
	SPACE_WIDTH = 3.6118,
	HELLIP = "…",
	HELLIP_WIDTH = 13,
	fit = (e) =>
		function (t, i, n) {
			let r =
					!(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
				a = t.split(" "),
				s = a[0],
				o = e(s, DEFAULT_FONT),
				l = 1;
			for (; l < a.length - 1; l++) {
				let t = e(a[l], DEFAULT_FONT);
				if (o + 3.6118 + t > n) break;
				(s += " " + a[l]), (o += 3.6118 + t);
			}
			let u = r ? "…" : "",
				d = r ? 13 : 0;
			s += u;
			let c = u + a.slice(l).join(" ");
			return {
				phrase: { text: s, width: o + d, layer: null },
				rest: { text: c, width: i - o + d, layer: null },
			};
		},
	TEXT_BOUNDS_CACHE = new Map();
function cachedTextWidth(e, t, i) {
	let n = TEXT_BOUNDS_CACHE.get(i.family);
	n || ((n = new Map()), TEXT_BOUNDS_CACHE.set(i.family, n));
	let r = n.get(i.style);
	r || ((r = new Map()), n.set(i.style, r));
	let a = r.get(i.size);
	a || ((a = new Map()), r.set(i.size, a));
	let s = a.get(t);
	return void 0 !== s || ((s = e(t, i)), a.set(t, s)), s;
}
let width = (e) =>
	function (t) {
		let i =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: DEFAULT_FONT;
		return t && t.length ? cachedTextWidth(e, t, i) : 0;
	};
class TextProcessor {
	static textWidth;
	static fitTextToAvailableWidth;
}
let canvas = null;
function textWidthClient(e, t) {
	let i = !0;
	("undefined" == typeof document ||
		"function" != typeof document.createElement) &&
		(i = !1),
		(canvas = i ? document.createElement("canvas") : null);
	let n =
		canvas && "function" == typeof canvas.getContext
			? canvas.getContext("2d")
			: null;
	if (!(i = !!n && "function" == typeof n.measureText) || !n) return 0;
	let r = {
			style: "normal",
			constraint: "normal",
			weight: "normal",
			size: DEFAULT_FONT.size,
			family: DEFAULT_FONT.family,
			align: "start",
			baseline: "alphabetic",
		},
		a = { ...r, ...t };
	return (
		(n.font = `${a.style} ${a.constraint} ${a.weight} ${a.size}px ${a.family}`),
		(n.textAlign = a.align),
		(n.textBaseline = a.baseline),
		+n.measureText(e).width.toFixed(4)
	);
}
let ctw = width(textWidthClient),
	cf = fit(ctw);
class ClientProcessor extends TextProcessor {
	static textWidth(e, t) {
		return ctw(e, t);
	}
	static fitTextToAvailableWidth(e, t, i, n) {
		return cf(e, t, i, n);
	}
}
let DEFAULT_TEMPO = { bpm: 100, type: 4, position: 0 };
function scaleIt(e, t) {
	(e.x = Math.floor(e.originX * t)), (e.width = Math.floor(e.originWidth * t));
	let i = e.beatsLayouts,
		n = e.tempoLayouts,
		r = i[0];
	if (r) {
		for (let i of ((r.absoluteLoopLeftX = e.x), n))
			i.measureOffset = Math.floor(i.originMeasureOffset * t);
		for (let n of i) {
			if (
				((n.x = Math.floor(
					((n.measureLayout?.firstBeatXOffset || 0) + n.originX) * t
				)),
				(n.absoluteX = e.x + n.x),
				r !== n)
			) {
				let e = n.x - r.x,
					t = e < 40 ? 0.5 : 0.8,
					i = Math.floor(e * t);
				(r.absoluteLoopRightX = r.absoluteX + i),
					(n.absoluteLoopLeftX = n.absoluteX - (e - i));
			}
			r = n;
		}
		r.absoluteLoopRightX = e.x + e.width;
	}
}
function getTempoPosition(e, t) {
	let i = e.layouts[0],
		n = Math.floor((i.width - t.measureOffset) * t.tempo.position),
		r = i.x + t.measureOffset + n,
		a = r + (t.tempo.bpm >= 100 ? 44 : 35);
	return { x1: r, x2: a };
}
function getMarkerPosition(e, t) {
	let i = e.layouts[0].x,
		n = i + t.width;
	return { x1: i, x2: n };
}
function getAlternateEndingPosition(e) {
	let t = e[0].x,
		i = t + e.reduce((e, t) => e + t.width, 0) - 6;
	return { x1: t, x2: i };
}
function getTripletFeelPosition(e) {
	let t = e.layouts[0].x;
	return { x1: t, x2: t + 90 };
}
function firstMeasureLayout(e) {
	return e.layouts[0];
}
function lastMeasureLayout(e) {
	return e.layouts[e.layouts.length - 1];
}
let ALTERNATE_NAMES = [
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
	LONG_NAMES = {
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
	DRUM_NOTE_STRING = [
		3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
		5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
		4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
		-0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
	];
(DRUM_NOTE_STRING[64] = 1.5),
	(DRUM_NOTE_STRING[65] = -1),
	(DRUM_NOTE_STRING[66] = 0);
let DRUM_STD_NOTE_STRING = [
	3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
	2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
	5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
	-0.5, -1, -1, -1, -1.5, 5, 5,
];
(DRUM_STD_NOTE_STRING[64] = 1.5),
	(DRUM_STD_NOTE_STRING[65] = -0.5),
	(DRUM_STD_NOTE_STRING[66] = 0),
	(DRUM_STD_NOTE_STRING[75] = -0.5),
	(DRUM_STD_NOTE_STRING[72] = 0.5);
let LONG_NAMES_MARGIN = {
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
	NAMES = [
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
function resolveDrumNameConflicts(e) {
	for (let t of ALTERNATE_NAMES) {
		let i = 0;
		for (let n of t) e.has(n.key) && i++;
		if (i > 1) for (let i of t) e.set(i.key, { ...i.value, fret: i.key });
	}
}
function getDrum(e, t) {
	return { string: t, name: NAMES[e - 27] || "*", fret: e };
}
function getDrumString(e, t) {
	return (t ? DRUM_STD_NOTE_STRING[e - 27] : DRUM_NOTE_STRING[e - 27]) || 0;
}
function isVisible(e) {
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
function margin(e, t, i) {
	if (!isVisible(e)) return 0;
	if (i && i.usedDrums) {
		let n = i.usedDrums.get(e.fret);
		if (n) {
			let e = n.name || "S",
				i = LONG_NAMES_MARGIN[e] || 0;
			return i + t;
		}
		return t;
	}
	let n = 4;
	return e.dead ? (n = 4) : e.fret >= 10 && (n = 8), e.ghost && (n += 5), n + t;
}
function drumString(e, t) {
	let i = t.get(e.fret);
	return (i && i.string) || 0;
}
(NAMES[64] = "SR"),
	(NAMES[65] = "hH"),
	(NAMES[66] = "RE"),
	(NAMES[72] = "lcb"),
	(NAMES[75] = "hcb");
let TEXT_FIT_THRESHOLD = 5,
	COORDINATES = {
		letRing: getLetRingCoordinates,
		palmMute: getPalmMuteCoordinates,
		harmonic: getHarmonicCoordinates,
		vibrato: getVibratoCoordinates,
		wideVibrato: getVibratoCoordinates,
	};
function getCapoCoordinates(e, t) {
	return { x1: t - 120, x2: t };
}
function getLineEffectCoordinates(e, t) {
	if (!e.start || !e.stop) throw Error("Wrong line effect state");
	let i = e.start.absoluteX - 20,
		n = e.stop.absoluteX + 10;
	return n - i < t && (n = i + t), { x1: i, x2: n };
}
function getLetRingCoordinates(e) {
	return getLineEffectCoordinates(e, 40);
}
function getPalmMuteCoordinates(e) {
	return getLineEffectCoordinates(e, 29);
}
function getHarmonicCoordinates(e) {
	return getLineEffectCoordinates(e, 38);
}
function getVibratoCoordinates(e) {
	let { start: t, stop: i } = e;
	if (!t || !i) throw Error("Wrong line effect state");
	let n = null,
		r = i.measureLayout,
		a = r.beatsLayouts,
		s = a.findIndex((e) => e === i);
	if (s > -1 && s < a.length - 1) n = a[s + 1];
	else {
		let e = r.lineLayout.measureLayouts,
			t = e.findIndex((e) => e === r);
		t > -1 && t < e.length - 1 && (n = e[t + 1].beatsLayouts[0]);
	}
	let o = t.absoluteX,
		l = n ? n.absoluteX : maxX(i);
	return { x1: o, x2: l };
}
function getBendHeight(e) {
	let t = firstRef(e).note.bend;
	if (!t) throw Error("Wrong state at bend note");
	return -1 * (BEND_LEVEL_BASE - t.tone / BEND_LEVEL_STEP);
}
function newLineEffectContext() {
	return { detected: !1, start: null, stop: null, value: void 0 };
}
class Line {
	constructor(e, t, i) {
		(this.index = e),
			(this.strings = t.strings),
			(this.effects = []),
			(this.spaces = Array(this.strings)),
			(this.rhythmLines = 0),
			(this.layout = new LineLayout(i, this)),
			(this.hangingText = []),
			(this.capo = 0 === e && t.capo ? { capo: t.capo, layer: null } : void 0),
			(this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() });
	}
	joinLineEffect(e, t, i) {
		let n = e[t];
		n &&
			!i.detected &&
			((i.detected = !0), (i.value = n), (i.start = e.layout)),
			n && n === i.value && (i.stop = e.layout),
			n
				? i.value &&
				  n !== i.value &&
				  (this.finishLineEffect(t, i), this.joinLineEffect(e, t, i))
				: this.finishLineEffect(t, i);
	}
	finishLineEffect(e, t) {
		if (t.detected) {
			let i = this.layout.layers.acquireLayer(e, COORDINATES[e](t));
			this.effects.push({ effect: e, layer: i, effectValue: t.value }),
				(t.detected = !1),
				(t.value = void 0),
				(t.start = null),
				(t.stop = null);
		}
	}
	getHangingTextPosition(e) {
		let t = this.layout.minX,
			i = t + e.width;
		return { x1: t, x2: i };
	}
	distribute(e, t, i, n) {
		let r = [];
		this.layout.placement = n;
		let a = e.usedDrums,
			s = i(this);
		for (let e of this.hangingText)
			e.layer = this.layout.layers.acquireLayer(
				"lineHangingText",
				this.getHangingTextPosition(e)
			);
		let o = this.capo;
		void 0 !== o &&
			(o.layer = this.layout.layers.acquireLayer(
				"capo",
				getCapoCoordinates(o.capo, this.layout.maxX)
			));
		for (let e = 0; e < this.spaces.length; e++) this.spaces[e] = [];
		let l = newLineEffectContext(),
			u = newLineEffectContext(),
			d = newLineEffectContext(),
			c = newLineEffectContext(),
			p = newLineEffectContext(),
			h = new Map();
		for (let i of this.layout.measureLayouts) {
			let n = i.measure;
			scaleIt(i, s);
			let o = firstMeasureLayout(n) === i;
			if (
				((this.rhythmLines = Math.max(this.rhythmLines, n.rhythmLines)),
				n.alternateEnding)
			) {
				let e = h.get(n);
				e || ((e = []), h.set(n, e)), e.push(i);
			}
			if (o) {
				let e = n.markerWithLayer;
				e &&
					(e.layer = this.layout.layers.acquireLayer(
						"measureMarker",
						getMarkerPosition(n, e)
					));
				let t = n.tripletFeelWithLayer;
				t &&
					(t.layer = this.layout.layers.acquireLayer(
						"tripletFeel",
						getTripletFeelPosition(n)
					));
			}
			let g = 0;
			for (let n of i.beatsLayouts)
				for (let i of n.beats)
					if (i.lyrics) {
						for (let e of i.lyrics)
							if (e) {
								let t = getLyricsPosition(i, e, g);
								(g = t.x2),
									(e.layer = this.layout.bottomLayers.acquireLayer(
										"beatLyrics",
										t
									));
							}
					} else {
						let n = i.originalText;
						if (n) {
							let e = this.layout.maxX + 5 - i.layout.absoluteX,
								a = n;
							if (a.width > e) {
								let { phrase: i, rest: n } =
									ClientProcessor.fitTextToAvailableWidth(
										a.text,
										a.width,
										e,
										t.hasHellip()
									);
								(a = i), r.push(n);
							}
							a &&
								((a.layer = this.layout.layers.acquireLayer(
									"beatText",
									getTextPosition(i, a)
								)),
								(i.text = a));
						}
						let s = i.chord;
						s &&
							(s.layer = this.layout.layers.acquireLayer(
								"beatChord",
								getChordPosition(i, s)
							));
						let o = i.tappingWithLayer;
						for (let n of (o &&
							(o.layer = this.layout.layers.acquireLayer(
								"beatTapping",
								getTextPosition(i, o)
							)),
						0 === i.voice &&
							(this.joinLineEffect(i, "letRing", l),
							this.joinLineEffect(i, "palmMute", u),
							this.joinLineEffect(i, "harmonic", d),
							this.joinLineEffect(i, "vibrato", c),
							this.joinLineEffect(i, "wideVibrato", p)),
						i.tuplet &&
							i.tuplet > 0 &&
							this.rhythmEffects.tuplet.set(i.voice, !0),
						i.tremolo && this.rhythmEffects.tremolo.set(i.voice, !0),
						(i.accentuated = void 0),
						(i.heavyAccentuated = void 0),
						(i.staccato = void 0),
						i.notes)) {
							if (!n.rest) {
								let t = a ? drumString(n, a) : n.string;
								if (t % 1 == 0 && t >= 0 && t < e.strings) {
									let r = margin(n, 4, e);
									if (r) {
										let e = i.layout.absoluteX - r,
											n = r << 1,
											a = this.spaces[t];
										if (a) {
											let t = a.length;
											if (t) {
												let s = a[t - 1];
												s.x + s.w >= e
													? ((s.x = Math.min(s.x, e)),
													  (s.w = i.layout.absoluteX + r - s.x))
													: a.push({ x: e, w: n });
											} else a.push({ x: e, w: n });
										}
									}
									a &&
										(59 == n.fret || 93 == n.fret) &&
										!i.hat &&
										(i.hat = {
											type: "ride",
											layer: this.layout.layers.acquireLayer(
												"beatHat",
												getHatPosition(i)
											),
										}),
										1 !== n.accentuated ||
											i.accentuated ||
											(i.accentuated = {
												layer: this.layout.layers.acquireLayer(
													"accentuated",
													getAccentuatedPosition(i),
													i.voice
												),
											}),
										2 !== n.accentuated ||
											i.heavyAccentuated ||
											(i.heavyAccentuated = {
												layer: this.layout.layers.acquireLayer(
													"heavyAccentuated",
													getAccentuatedPosition(i),
													i.voice
												),
											}),
										n.staccato &&
											!i.staccato &&
											(i.staccato = {
												layer: this.layout.layers.acquireLayer(
													"staccato",
													getStaccatoPosition(i),
													i.voice
												),
											});
								}
							}
							let r = n.bendStart;
							if (r) {
								let e = t.getBendCoordinates(r, n);
								(e.x1 += i.layout.absoluteX),
									(e.x2 += i.layout.absoluteX),
									(r.layer = this.layout.layers.acquireLayerWithHeight(
										"noteBend",
										getBendHeight(r),
										e
									));
							}
						}
					}
			for (let e of i.tempoLayouts)
				e.layer = this.layout.layers.acquireLayer(
					"measureTempo",
					getTempoPosition(n, e)
				);
		}
		for (let [e, t] of h)
			t[0].alternateEndingWithLayer = {
				layer: this.layout.layers.acquireLayer(
					"measureAlternateEnding",
					getAlternateEndingPosition(t)
				),
				alternateEnding: e.alternateEnding,
			};
		this.finishLineEffect("letRing", l),
			this.finishLineEffect("palmMute", u),
			this.finishLineEffect("harmonic", d),
			this.finishLineEffect("vibrato", c),
			this.finishLineEffect("wideVibrato", p),
			this.layout.layers.shake();
		let g = this.rhythmLines * RHYTHM_HEIGHT,
			f = this.rhythmEffects.tremolo.size * RHYTHM_TREMOLO_ADDITION,
			m = this.rhythmEffects.tuplet.size * RHYTHM_TUPLET_ADDITION,
			y = this.strings * this.layout.intervalSize;
		return (
			this.layout.bottomLayers.shake(y + g + f + m),
			(this.layout.layers.height += LINE_PADDING),
			(this.layout.height =
				this.layout.layers.height +
				this.layout.bottomLayers.height +
				LINE_PADDING),
			(this.layout.maxY = this.layout.y + this.layout.height),
			r
		);
	}
}
class MeasureLayout {
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
		return this.lineLayout.placement?.signatureOffset(this.measure) || 0;
	}
}
class Reprise {
	constructor(e) {
		(this.startIndex = e.index),
			(this.endIndex = 0),
			(this.alternateEndings = new Map());
	}
}
function addEnding(e, t, i) {
	e.alternateEndings.set(t, i.index);
}
function getEnding(e, t) {
	return e.alternateEndings.get(t) || 0;
}
function calcBendEndMargin(e) {
	let t = e.nextNoteOnString;
	return t && !t.tie ? 12 : 0;
}
class CommonSlicingMode {
	constructor(e) {
		this.width = e;
	}
	areBeatsInSameSlice(e, t) {
		return stringY(e.layout) === stringY(t.layout);
	}
	getBendCoordinates(e, t) {
		let i = firstRef(e).beat,
			n = lastRef(e),
			r = n.note,
			a = r.nextNoteOnString,
			s = !!a && !!a.bendStart && !!a.tie,
			o = s ? n.beat.nextBeat : n.beat;
		if (!o) throw Error("Broken constraint");
		let l = absoluteBeatX(i, t.beat),
			u = absoluteBeatX(i, i),
			d = absoluteBeatX(i, o, !s),
			c = d - l - calcBendEndMargin(r);
		return { x1: u - l, x2: c };
	}
	bendsForNote(e) {
		let t = e.bendStart || e.bendPart || e.bendEnd;
		return t ? [t] : [];
	}
	hasHellip() {
		return !0;
	}
}
class MultiLineSlicingMode extends CommonSlicingMode {
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
		let i = super.getBendCoordinates(e, t),
			n = i.x1,
			r = i.x2;
		if (doesBendSpanMultipleSlices(e)) {
			let t = firstRef(e).beat;
			r = maxX(t.layout) - t.layout.absoluteX - 12;
		}
		return { x1: n, x2: r };
	}
	getTieSlurPathLength(e, t) {
		let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			n = this.areBeatsInSameSlice(e, t);
		return n
			? t.layout.absoluteX - e.layout.absoluteX
			: i
			? t.layout.absoluteX
			: maxX(e.layout) - e.layout.absoluteX;
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
let BASE_DURATION_NUMERATOR = 4,
	BASE_DURATION_DENOMINATOR = 4,
	BASE_DURATION = [4, 4];
function gcd(e, t) {
	let i = e,
		n = t;
	for (; 0 !== i && 0 !== n; ) i >= n ? (i %= n) : (n %= i);
	return i + n;
}
let DURATION_CM = 11531520,
	numerator = (e) => e[0],
	denominator = (e) => e[1],
	convertVectorToScalar = (e) => (11531520 * numerator(e)) / denominator(e),
	convertScalarToFraction = (e) => e / 11531520,
	convertFractionToScalar = (e) => Math.floor(11531520 * e);
function durationToTicks(e, t) {
	return ((4 * t) / denominator(e)) * numerator(e);
}
function signatureToTicks(e, t) {
	return (durationToTicks(BASE_DURATION, t) / denominator(e)) * numerator(e);
}
function isDrums(e) {
	return 1024 === e;
}
function getLeftSlide() {
	let e =
		arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
	if (e) {
		if (e.includes("below")) return "below";
		if (e.includes("above")) return "above";
	}
}
function getRightSlide() {
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
})(AudioVersion || (AudioVersion = {})),
	(function (e) {
		(e[(e.TOO_LONG = 228)] = "TOO_LONG"),
			(e[(e.MIDI_FAILED = 229)] = "MIDI_FAILED"),
			(e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
			(e[(e.UNKNOWN = 500)] = "UNKNOWN");
	})(AudioRenderError || (AudioRenderError = {}));
let audioVersionInfos = [
		{
			displayName: "V1",
			version: AudioVersion.V1,
			bucket: "audio",
			bucketDomains: ["audio1", "audio2", "audio3"],
			audioHashPropertyName: "audio",
		},
		{
			displayName: "V2",
			version: AudioVersion.V2,
			versionLegacy: "audioV2",
			bucket: "audio3",
			bucketDomains: ["audio31", "audio32", "audio33"],
			audioHashPropertyName: "audioV2",
			audioErrorPropertyName: "audioV2Error",
			midiHashPropertyName: "audioV2Midi",
		},
		{
			displayName: "V4",
			version: AudioVersion.V4,
			bucket: "audio4",
			bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
			audioHashPropertyName: "audioV4",
			audioErrorPropertyName: "audioV4Error",
			midiHashPropertyName: "audioV4Midi",
		},
		{
			displayName: "Dev",
			version: AudioVersion.DEV,
			versionLegacy: "next",
			bucket: "audio2",
			bucketDomains: ["audio2"],
			audioHashPropertyName: "nextAudio",
			midiHashPropertyName: "nextMidi",
		},
	],
	audioVersionInfosMap = new Map();
audioVersionInfos.forEach((e) => audioVersionInfosMap.set(e.version, e)),
	(function (e) {
		(e.ADMINISTRATE = "administrate"),
			(e.MANAGE_SONGS = "manage.songs"),
			(e.MANAGE_REVISIONS = "manage.revisions"),
			(e.UPLOAD_ALL_FILES = "upload.all.files"),
			(e.USE_ADMIN_TOOLS = "use.admin.tools"),
			(e.USE_TAB_EDITOR = "use.tab.editor"),
			(e.USE_VIDEO_SYNCHRONISATION = "use.video.synchronisation");
	})(UserPermission || (UserPermission = {})),
	(function (e) {
		(e.FREE = "free"),
			(e.PLUS = "plus"),
			(e.BETA = "beta"),
			(e.BASIC = "basic");
	})(UserPlan || (UserPlan = {})),
	(function (e) {
		(e.NONE = "none"), (e.LIFETIME = "lifetime");
	})(AndroidLicense || (AndroidLicense = {})),
	(function (e) {
		(e.BRAINTREE = "braintree"),
			(e.APP_STORE = "appstore"),
			(e.GOOGLE_PLAY = "googleplay"),
			(e.COUPON = "coupon"),
			(e.MANUAL = "manual"),
			(e.LEGACY_PAYPAL = "paypal");
	})(SubscriptionType || (SubscriptionType = {})),
	(function (e) {
		(e.ACTIVE = "active"),
			(e.CANCELED = "canceled"),
			(e.EXPIRED = "expired"),
			(e.OUTDATED = "outdated");
	})(SubscriptionStatus || (SubscriptionStatus = {}));
let TUNING_OFFSET = 25,
	TUNING_OFFSET_COMPACT = 15,
	SIGNATURE_OFFSET = 35,
	SIGNATURE_OFFSET_COMPACT = 20,
	LEFT_MARGIN_MINIMAL = 25,
	LEFT_MARGIN_REPRISE = 30,
	ticksToDuration = (e, t) => 1 / ((4 * e) / t);
class CompactPlacementMode {
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
	measureBeatWidth(e, t, i, n, r, a) {
		let s = i ? ticksToDuration(i, n) : convertScalarToFraction(n),
			o = 70 * Math.log(s + 1) + 20;
		return r ? 0.2 * o : a && !e.measure.repeat ? o - Math.min(o >>> 1, 25) : o;
	}
	measureLeftMargin(e) {
		return e.measure.repeatStart ? 30 : 25;
	}
}
class WidePlacementMode {
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
		return INTERVAL_SIZE;
	}
	signatureOffset(e) {
		return 35;
	}
	measureSpaceForSignature(e) {
		return e.hasSignature ? 35 : 0;
	}
	measureBeatWidth(e, t, i, n, r, a) {
		let s = i ? ticksToDuration(i, n) : convertScalarToFraction(n),
			o = 130 * Math.log(s + 1) + 20;
		return r ? 0.2 * o : o;
	}
	measureLeftMargin(e, t) {
		return 25;
	}
}
function fillTempoLayouts(e, t) {
	let i = [...e.tempoLayoutsByTime.keys()].sort((e, t) => e - t);
	t.tempoLayouts = i.reduce((t, i) => {
		let n = e.tempoLayoutsByTime.get(i);
		return n && t.push(n), t;
	}, []);
}
function handleMeasurePositions(e, t, i, n) {
	let r = t.beatsLayoutsByTime,
		a = new MeasureLayout(t, i.layout);
	t.layouts = [a];
	let s = n.measureSpaceForSignature(t),
		o = [...r.keys()].sort((e, t) => e - t),
		l = 0,
		u = r.get(0),
		d = t.rest && !t.hasLyrics;
	if (u) {
		(a.firstBeatXOffset = n.measureLeftMargin(a, !0)),
			a.beatsLayouts.push(u),
			(u.measureLayout = a);
		for (let t = 1; t < o.length; t++) {
			let i = o[t],
				c = r.get(i);
			c &&
				((u.originX = s),
				(s += n.measureBeatWidth(a, c, e, i - l, d, !1)),
				(l = i),
				(u = c),
				a.beatsLayouts.push(c),
				(c.measureLayout = a));
		}
		(u.originX = s),
			(s += n.measureBeatWidth(a, u, e, t.duration - l, d, !0)),
			applyMeasureLayoutWidth(a, t, a.firstBeatXOffset + s);
	}
	fillTempoLayouts(t, a);
}
function handleMeasurePositionsByBeaming(e, t, i, n) {
	let r = t.beatsLayoutsByTime,
		a = new MeasureLayout(t, i.layout);
	fillTempoLayouts(t, a), (t.layouts = [a]);
	let s = !(
			(4 === t.signature[0] && 4 === t.signature[1]) ||
			(6 === t.signature[0] && 8 === t.signature[1])
		),
		o = e ? signatureToTicks(t.signature, e) : -1,
		l = n.measureSpaceForSignature(t),
		u = [...r.keys()].sort((e, t) => e - t),
		d = 0,
		c = r.get(0),
		p = t.rest && !t.hasLyrics;
	if (c) {
		(a.firstBeatXOffset = n.measureLeftMargin(a, !0)),
			a.beatsLayouts.push(c),
			(c.measureLayout = a);
		for (let h = 1; h < u.length; h++) {
			let g = u[h],
				f = r.get(g);
			if (f) {
				(c.originX = l),
					(l += n.measureBeatWidth(a, f, e, g - d, p, !1)),
					(d = g),
					(c = f);
				let r = s || g << 1 === o;
				r &&
					f.beats.filter((e) => !e.lyrics).every((e) => e.beamStart) &&
					((a.originWidth = Math.ceil(a.firstBeatXOffset + l)),
					(a = new MeasureLayout(t, i.layout)),
					t.layouts.push(a),
					(a.firstBeatXOffset = n.measureLeftMargin(a, !1)),
					(l = 0)),
					a.beatsLayouts.push(f),
					(f.measureLayout = a);
			}
		}
		(c.originX = l),
			(l += n.measureBeatWidth(a, c, e, t.duration - d, p, !0)),
			applyMeasureLayoutWidth(a, t, a.firstBeatXOffset + l);
	}
}
function applyMeasureLayoutWidth(e, t, i) {
	let n = t.markerWithLayer ? t.markerWithLayer.width : 0;
	e.originWidth = Math.ceil(Math.max(i, n));
}
function createNewLine(e, t, i) {
	let n = new Line(t.length, e, i);
	return t.push(n), n;
}
function shiftLine(e, t) {
	e.layout.unscaledWidth += t;
}
function reduceLeftMargin(e, t) {
	applyMeasureLayoutWidth(t, e, t.originWidth - t.firstBeatXOffset),
		(t.firstBeatXOffset = 0);
}
function add(e, t) {
	e.layout.measureLayouts.push(t),
		(t.lineLayout = e.layout),
		(t.originX = e.layout.unscaledWidth),
		(e.layout.unscaledWidth += t.originWidth);
}
function isFits(e, t, i) {
	return t.originWidth + e.layout.unscaledWidth <= i;
}
function isFitsBoth(e, t, i) {
	let [n, r] = t;
	return (
		2 * Math.max(n.originWidth, r.originWidth) + e.layout.unscaledWidth <= i
	);
}
function distributeBeamedMeasureLayouts(e, t, i, n, r, a) {
	handleMeasurePositionsByBeaming(e.tpqn, i, r, t);
	let s = !1;
	for (let t of i.layouts)
		!isFits(r, t, a) &&
			r.layout.measureLayouts.length > 0 &&
			((r = createNewLine(e, n, a)), (s = !1)),
			s && reduceLeftMargin(i, t),
			add(r, t),
			(s = !0);
	return r;
}
function distribute(e, t, i) {
	let n = t.width,
		r = [],
		a = createNewLine(e, r, n),
		s = !!e.tuning;
	if ((s && shiftLine(a, i.tuningOffset), "conservative" === i.distribute))
		for (let t in e.measures) {
			let s = e.measures[t],
				o = e.measures[Number(t) - 1];
			handleMeasurePositions(e.tpqn, s, a, i);
			let l = s.layouts[0],
				u = o?.layouts[0],
				d = "0" != t && ("-" === s.equality || o?.equality === "+"),
				c = "+" === s.equality,
				p = !c || !u || isFitsBoth(a, [u, l], n);
			if (
				(isFits(a, l, n) && p && !d
					? add(a, l)
					: ((a.layout.measureLayouts.length > 0 || d) &&
							(a = createNewLine(e, r, n)),
					  isFits(a, l, n)
							? add(a, l)
							: (a = distributeBeamedMeasureLayouts(e, i, s, r, a, n))),
				"+" === s.equality && p && u)
			) {
				let e = Math.max(u.originWidth, l.originWidth);
				(u.originWidth = e),
					(l.originWidth = e),
					(l.originX = e),
					(a.layout.unscaledWidth = 2 * e);
			}
		}
	else if ("fitness" === i.distribute)
		for (let t of e.measures) {
			handleMeasurePositions(e.tpqn, t, a, i);
			let s = t.layouts[0];
			isFits(a, s, n)
				? add(a, s)
				: (a = distributeBeamedMeasureLayouts(e, i, t, r, a, n));
		}
	else
		for (let t of e.measures) {
			handleMeasurePositions(e.tpqn, t, a, i);
			let s = t.layouts[0];
			isFits(a, s, n) ||
				(a.layout.measureLayouts.length > 0 && (a = createNewLine(e, r, n))),
				add(a, s);
		}
	let o = [],
		l = 0,
		u = r.length,
		d = t.makeScaleStrategy(u);
	for (a of r)
		(a.hangingText = o),
			(a.layout.y = l),
			(o = a.distribute(e, t, d, i)),
			(l += a.layout.height);
	return { lines: r, height: l };
}
class TempoChange {
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
let WATCHDOG_ITERATIONS = 1e5;
function generateProgression(e) {
	let t = [],
		i = null,
		n = 0,
		r = !1,
		a = 0;
	for (let s = 0; s < e.length; ) {
		if (++a > 1e5) throw Error("Watchdog");
		let o = e[s];
		if (
			(t.push(o),
			o.reprise &&
				o.reprise.startIndex === o.index &&
				(!i || i.startIndex !== o.index) &&
				((i = o.reprise), (n = 1)),
			i)
		) {
			if (o.repeat && n < o.repeat) (s = i.startIndex), n++, (r = !1);
			else if (++s < e.length) {
				let t = e[s];
				if (t.alternateEnding) {
					let e = !1;
					for (let i of t.alternateEnding)
						if (i === n) {
							e = !0;
							break;
						}
					e
						? (r = !0)
						: r
						? ((s = i.startIndex), n++, (r = !1))
						: ((s = getEnding(i, n) || i.endIndex + 1), (r = !0));
				}
				s > i.endIndex && ((i = null), (n = 0));
			}
		} else s++;
	}
	return t;
}
function ticksToMs(e, t, i) {
	return (6e4 * e) / (t * i);
}
let DEFAULT_TICKS_PER_QUARTER = 960,
	tempoToTicksPerQuarter = (e) =>
		(960 * (DEFAULT_TEMPO.bpm / DEFAULT_TEMPO.type)) / (e.bpm / e.type),
	ticksToMilliseconds = (e) => ((e / 960) * 6e4) / DEFAULT_TEMPO.bpm,
	dToTicks = (e, t) => e * t * DEFAULT_TEMPO.type;
function generateTimeline(e, t) {
	let i = generateProgression(t),
		n = new Map(),
		r = [],
		a = [],
		s = DEFAULT_TEMPO,
		o = 960,
		l = 960,
		u = 0,
		d = 0;
	for (let t of i) {
		let i = t.beatsLayoutsByTime,
			c = t.tempoLayoutsByTime,
			p = e
				? durationToTicks(t.signature, e)
				: convertVectorToScalar(t.signature),
			h = [...i.keys()].sort((e, t) => e - t),
			g = i.get(0),
			f = u,
			m = u,
			y = d;
		if (g) {
			let t = d - 2 * u;
			g.shifts.push(t), r.push(t), g.occurrences.push(u), n.set(u, g);
			let T = c.get(0);
			T &&
				((s = T.tempo),
				a.push({ timestamp: u, tempo: s }),
				(o = Math.floor(tempoToTicksPerQuarter(s))),
				(l = Math.floor(2 * tempoToTicksPerQuarter(s))));
			for (let t = 1; t < h.length; t++) {
				let a = h[t],
					c = i.get(a);
				if (c) {
					if (a < p) {
						if (e) {
							let t = ticksToMs(a, e, s.bpm);
							(u = m + t), (d = y + 2 * t);
						} else {
							let e = convertScalarToFraction(a);
							(u = m + ticksToMilliseconds(dToTicks(e, o))),
								(d = y + ticksToMilliseconds(dToTicks(e, l)));
						}
						g.duration = u - f;
						let t = d - 2 * u;
						g.shifts.push(t),
							r.push(t),
							c.occurrences.push(u),
							n.set(u, c),
							(g = c),
							(f = u);
					} else c.occurrences.push(u);
				}
			}
		}
		if (e) {
			let t = ticksToMs(p, e, s.bpm);
			(u = m + t), (d = y + 2 * t);
		} else {
			let e = convertScalarToFraction(p);
			(u = m + ticksToMilliseconds(dToTicks(e, o))),
				(d = y + ticksToMilliseconds(dToTicks(e, l)));
		}
		g && (g.duration = u - f);
	}
	return {
		timeline: n,
		tempos: a,
		shifts: r,
		progression: i.map((e) => e.index + 1),
	};
}
function getLayout(e, t) {
	let i = e.get(t);
	if (!i) throw Error("Broken timeline");
	return i;
}
function timestampFor50timeline(e, t) {
	return 2 * e + t;
}
function correctTimestampFor50Timeline(e, t) {
	if (0 === t) return 0;
	let { timestamps: i } = e,
		n = i[i.length - 1];
	if (t <= 0) return timestampFor50timeline(t, e.shifts[0] || 0);
	if (t >= n) return timestampFor50timeline(t, e.shifts[i.length - 1] || 0);
	let r = 0,
		a = i.length,
		s = 0,
		o = 0;
	for (; a - r > 1; ) {
		s = Math.floor((r + a) / 2);
		let e = i[s];
		if (t < e) a = s;
		else if (t > e) r = s;
		else {
			o = s;
			break;
		}
	}
	return (o = r), timestampFor50timeline(t, e.shifts[o] || 0);
}
function findLayoutByTimestamp(e, t, i) {
	let { timeline: n, timestamps: r } = e,
		a = r[0],
		s = r[r.length - 1];
	if (t <= a) return getLayout(n, a);
	if (t >= s) return getLayout(n, s);
	let o = 0,
		l = r.length,
		u = 0;
	for (r[0]; l - o > 1; ) {
		u = Math.floor((o + l) / 2);
		let e = r[u];
		if (t < e) l = u;
		else if (t > e) o = u;
		else break;
	}
	return getLayout(n, l - o > 1 ? r["left" === i ? u : u - 1] : r[o]);
}
function findLayoutIndexByTimestamp(e, t) {
	let i =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left",
		{ timestamps: n } = e,
		r = n[0],
		a = n[n.length - 1];
	if (t <= r) return 0;
	if (t >= a) return n.length - 1;
	let s = 0,
		o = n.length,
		l = 0;
	for (; o - s > 1; ) {
		l = Math.floor((s + o) / 2);
		let e = n[l];
		if (t < e) o = l;
		else {
			if (!(t > e)) return l;
			s = l;
		}
	}
	return o - s > 1 ? ("left" === i ? l : l - 1) : s;
}
function findBpmAndBeatByTimestamp(e, t) {
	if (!e)
		return (
			console.error("Broken or empty Part. Count In does not work."),
			{ bpm: 0, signature: [0, 0] }
		);
	let i = findLayoutByTimestamp(e, t, "left"),
		n = getTempo(e, t).bpm,
		r = i.measureLayout.measure.signature;
	return { bpm: n, signature: r };
}
function getLoopTimings(e, t) {
	let i = findLayoutByTimestamp(e, t, "left"),
		n = i.measureLayout.beatsLayouts;
	return {
		loopStart: loopLeftTime(n[0]),
		loopEnd: firstLoopRightTime(n[n.length - 1]),
	};
}
function getTempo(e, t) {
	let i = e.tempos[0];
	for (let n of e.tempos) {
		if (n.timestamp > t) break;
		i = n;
	}
	return i ? i.tempo : DEFAULT_TEMPO;
}
function fixLoopTimings(e, t, i, n, r) {
	let a = i.measureLayout.measure.reprise,
		s = n.measureLayout.measure.reprise,
		o = leftTime(i),
		l = leftTime(n),
		u = firstLoopRightTime(n);
	a && (!s || a.startIndex !== s.startIndex) && (o = rightTime(i));
	let d = o,
		c = t;
	if (o > t || t >= u) {
		let i = findLayoutByTimestamp(e, t, "left"),
			n = leftTime(i),
			a = rightTime(i);
		c = o <= n && n < u ? n : o <= a && a < u ? a : "right" === r ? l : d;
	}
	return { cursor: c, loopStart: o, loopEnd: u };
}
function getMultiplier(e) {
	switch (e) {
		case "left":
			return 0.2;
		case "right":
			return 0.8;
		default:
			return 0.5;
	}
}
function findClosestBeatInLine(e, t, i) {
	let n = e.layout.measureLayouts[0];
	for (let i of e.layout.measureLayouts) {
		if (i.x > t) break;
		n = i;
	}
	let r = n.beatsLayouts,
		a = 0,
		s = r.length,
		o = 0,
		l = r[0];
	for (; s - a > 1; ) {
		l = r[(o = Math.floor((a + s) / 2))];
		let e = l.absoluteX;
		if (e < t) a = o;
		else if (e > t) s = o;
		else break;
	}
	if (s - a > 1) return l;
	{
		if (s === r.length) return r[a];
		let e = r[a],
			n = r[s],
			o = n.absoluteX - e.absoluteX,
			l = getMultiplier(i);
		return e.absoluteX + o * l > t ? e : n;
	}
}
function findClosestBeat(e, t, i) {
	let n = 0,
		r = e.length,
		a = e[0];
	for (; r - n > 1; ) {
		let i = Math.floor((n + r) / 2),
			s = e[i];
		if (t.y < s.layout.y) r = i;
		else if (t.y > s.layout.maxY) n = i;
		else {
			a = s;
			break;
		}
	}
	return findClosestBeatInLine(a, t.x, i);
}
function normalizeMeasure(e, t) {
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
	(e.index = t),
		(e.duration = 0),
		(e.scale = e.scale || 1),
		(e.repeat = Math.min(e.repeat || 0, i.useGenericTimeline ? 32 : 10)),
		(e.beatsLayoutsByTime = new Map()),
		(e.rhythmLines = 0),
		(e.tripletFeelWithLayer = e.tripletFeel
			? { layer: null, feel: e.tripletFeel }
			: void 0),
		(e.markerWithLayer = e.marker
			? { layer: null, text: e.marker.text, width: e.marker.width }
			: void 0);
}
let isPowerOfTwo$1 = (e) => (e & (e - 1)) == 0;
function lcm(e, t) {
	let i;
	return (i =
		(e & (e - 1)) | (t & (t - 1)) ? (e * t) / gcd(e, t) : Math.max(e, t)) <=
		0 ||
		i >= 32768 ||
		i % 1 != 0
		? e
		: i;
}
function calculateTPQN(e) {
	let t = [],
		i = !1,
		n = !1,
		r = !1,
		a = !1;
	for (let s of e)
		for (let e of (s.tripletFeel && (i = !0), s.voices))
			if (!e.rest)
				for (let i of e.beats) {
					let { tuplet: e, duration: s, notes: o } = i;
					if ((e && !t.includes(e) && t.push(e), s && s.length)) {
						let e = denominator(s);
						if (!isPowerOfTwo$1(e) || e > 32768) continue;
						for (let i of (t.includes(e) || t.push(e), o))
							i.dead && (n = !0),
								(i.bend || i.slide) && (r = !0),
								i.tremolo && (a = !0);
					}
				}
	i && t.push(24, 48),
		n && t.push(128),
		r && t.push(60),
		a && t.push(8, 16, 32, 64);
	let s = t.reduce(lcm, Math.max(4 * Math.max(...t), 32)) || 128;
	for (; s < 1e4; ) s *= 2;
	return Math.min(s, 32767);
}
function initTPQN(e, t) {
	let i = isNaN(e.tpqn);
	t && i && (e.tpqn = t ? calculateTPQN(e.measures) : null);
}
function handleMeasureReprises(e, t) {
	if (
		(e.repeatStart && ((t.lastReprise = new Reprise(e)), (t.inReprise = !0)),
		e.alternateEnding)
	) {
		if (t.lastReprise)
			for (let i of ((e.reprise = t.lastReprise), e.alternateEnding))
				addEnding(t.lastReprise, i, e);
	} else t && t.inReprise && t.lastReprise && (e.reprise = t.lastReprise);
	if (e.repeat) {
		if (!t || !t.lastReprise) throw Error("Broken ending of reprise");
		(t.lastReprise.endIndex = e.index), (t.inReprise = !1);
	}
}
let DEFAULT_SIGNATURE = [4, 4];
function handleMeasureSignature(e, t) {
	(e.hasSignature = !!e.signature),
		(e.signature = e.signature || t.signature || DEFAULT_SIGNATURE),
		e.hasSignature && (t.signature = e.signature);
}
function firstTempoOffset(e) {
	return e.hasSignature ? 50 : 15;
}
function handleMeasureTempoPositions(e, t, i) {
	t.tempoLayoutsByTime = new Map();
	let n = firstTempoOffset(t);
	for (let r of i.filter((e) => +e.measure == +t.index + 1)) {
		let i = e
				? Math.floor(4 * e * r.position)
				: convertFractionToScalar(r.position),
			a = t.tempoLayoutsByTime.get(i);
		a ||
			(((a = new TempoChange(r)).measureOffset = n),
			(a.originMeasureOffset = n),
			t.tempoLayoutsByTime.set(i, a));
	}
}
function normalizeVoice(e, t) {
	(e.index = t),
		(e.rest = e.rest || !1),
		(e.beats = (!e.rest && e.beats) || []),
		(e.hasSameRhythm = e.hasSameRhythm || !1),
		(e.lyrics = !1);
}
function handleVoiceRhythm(e, t) {
	let i =
		e.rest ||
		e.hasSameRhythm ||
		(1 === e.beats.length &&
			(1 === e.beats[0].duration[0] || 1 === e.beats[0].duration[1]));
	t.rhythmLines += i ? 0 : 1;
}
function normalizeBeat(e, t, i, n) {
	(e.index = t),
		(e.measure = n),
		(e.prevBeat = null),
		(e.nextBeat = null),
		e.tuplet || (e.tuplet = 0),
		(e.width = 0),
		(e.voice = i),
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
			? { layer: null, text: "T", width: 6, voice: i }
			: void 0);
}
function mergeBendPoints(e) {
	if (!e) return;
	let t = e.points[0],
		i = t.tone,
		n = [{ position: 0, tone: i }];
	for (let t of e.points)
		n[n.length - 1].tone !== t.tone &&
			(n.push({ position: 0, tone: t.tone }), (i = Math.max(i, t.tone)));
	return (
		1 === n.length && n.push({ position: 0, tone: i }),
		n.forEach((e, t) => {
			e.position = (60 * t) / (n.length - 1);
		}),
		{ ...e, points: n }
	);
}
function normalizeNote(e, t, i, n) {
	(e.index = t),
		(e.beat = i),
		(e.string = e.string || 0),
		(e.fret = e.fret || 0),
		(e.bend = n ? mergeBendPoints(e.bend) : e.bend),
		(e.rightSlide = getRightSlide(e.slide)),
		(e.leftSlide = getLeftSlide(e.slide)),
		(e.bogus = !1);
}
function handleBeatBogusNotes(e, t) {
	if (0 === e.index) {
		for (let i = 0; i < t.length; i++)
			if (!t[i]) {
				let t = e.notes.length,
					n = { string: i, fret: 0 };
				normalizeNote(n, t, e, !1), (n.bogus = !0), (e.notes[t] = n);
			}
	}
}
function handleNoteDrumString(e, t, i) {
	t.usedDrums && (e.string = getDrumString(e.fret, i));
}
function handleNoteUsedString(e, t) {
	t[e.string] = !0;
}
function getContext$4(e) {
	let t = e.ties;
	return t || ((t = new Map()), (e.ties = t)), t;
}
function handleNoteTie(e, t, i, n) {
	let r = getContext$4(n),
		a = r.get(e.string);
	if (a) {
		if (e.tie)
			addRef(a, { note: e, beat: t, measure: i }),
				(firstRef(a).note.tieStart = a),
				(e.tieEnd = a),
				r.set(e.string, new ChainedEffect({ note: e, beat: t, measure: i }));
		else {
			let n = firstRef(a);
			(n.note = e), (n.beat = t), (n.measure = i);
		}
	} else r.set(e.string, new ChainedEffect({ note: e, beat: t, measure: i }));
}
function getContext$3(e) {
	let t = e.slides;
	return t || ((t = new Map()), (e.slides = t)), t;
}
function handleNoteSlide(e, t, i, n) {
	let r = getContext$3(n),
		a = "legato" === e.rightSlide || "shift" === e.rightSlide,
		s = r.get(e.string);
	s &&
		!e.tie &&
		(addRef(s, { note: e, beat: t, measure: i }),
		(firstRef(s).note.slideStart = s),
		(lastRef(s).note.slideEnd = s),
		r.delete(e.string)),
		a && r.set(e.string, new ChainedEffect({ note: e, beat: t, measure: i }));
}
function getContext$2(e) {
	let t = e.slurs;
	return t || ((t = new Map()), (e.slurs = t)), t;
}
function handleNoteSlur(e, t, i, n) {
	let r = getContext$2(n),
		a = e.hp || "legato" === e.rightSlide,
		s = r.get(e.string);
	!s ||
		a ||
		e.tie ||
		(addRef(s, { note: e, beat: t, measure: i }),
		(firstRef(s).note.slurStart = s),
		(lastRef(s).note.slurEnd = s),
		r.delete(e.string)),
		!s &&
			a &&
			r.set(e.string, new ChainedEffect({ note: e, beat: t, measure: i }));
}
function getContext$1(e) {
	let t = e.bends;
	return t || ((t = new Map()), (e.bends = t)), t;
}
function handleNoteBend(e, t, i, n) {
	let r = getContext$1(n),
		a = r.get(e.string);
	if (
		(!a && e.bend && e.tie && 0 === e.bend.points[0].tone && (e.ghost = !0), a)
	) {
		!e.bend &&
			e.tie &&
			((a.keep = !0), addRef(a, { note: e, beat: t, measure: i }));
		let n = e.bend || (void 0 !== e.bend && !e.tie);
		if (n) {
			firstRef(a).note.bendStart = a;
			for (let e = 1; e < a.refs.length - 1; e++) a.refs[e].note.bendPart = a;
			(lastRef(a).note.bendEnd = a), r.delete(e.string);
		}
	}
	e.bend &&
		r.set(e.string, new ChainedEffect({ note: e, beat: t, measure: i }));
}
function getContext(e) {
	let t = e.prevNoteOnString;
	return t || ((t = new Map()), (e.prevNoteOnString = t)), t;
}
function handleNoteLinkSiblings(e, t) {
	let i = getContext(t),
		n = e.string,
		r = i.get(n);
	r && ((r.nextNoteOnString = e), (e.prevNoteOnString = r)), i.set(n, e);
}
function handleBeatFinishBend(e, t, i) {
	let n = getContext$1(i);
	for (let [e, t] of n.entries())
		if (t.keep) t.keep = !1;
		else {
			firstRef(t).note.bendStart = t;
			for (let e = 1; e < t.refs.length - 1; e++) t.refs[e].note.bendPart = t;
			(lastRef(t).note.bendEnd = t), n.delete(e);
		}
}
function markUsedRest(e) {
	e.layout.usedRest = !0;
}
function markUsedString(e, t) {
	t.rest || (e.layout.usedStrings |= 1 << t.string);
}
function markUsedFret(e, t) {
	isDrums(e.instrumentId) &&
		e.usedDrums &&
		e.usedDrums.set(t.fret, getDrum(t.fret, t.string));
}
function handleNoteMarks(e, t, i, n) {
	e.rest || e.bogus
		? 0 === n && markUsedRest(t)
		: (markUsedString(t, e), markUsedFret(i, e));
}
function handleBeatHarmonic(e) {
	let t = e.notes.find((e) => e.harmonic);
	e.harmonic = t ? t.harmonic : void 0;
}
function handleBeatLinkSiblings(e, t) {
	t.prevBeat && ((t.prevBeat.nextBeat = e), (e.prevBeat = t.prevBeat)),
		(t.prevBeat = e);
}
function normalizePart(e, t) {
	isDrums(e.instrumentId) &&
		((e.usedDrums = new Map()),
		t && ((e.strings = t ? 5 : 6), (e.isDrumStdOn = !0))),
		(e.voices = e.voices || 1),
		(e.withChords = !1);
}
function handleNoteTremolo(e, t) {
	if (!t.tremolo && e.tremolo) {
		let i = Array.isArray(e.tremolo) ? e.tremolo[1] : null;
		t.tremolo = { voice: t.voice, type: 32 === i ? 3 : 16 === i ? 2 : 1 };
	}
}
function handleMeasureRhythm(e) {
	e.rest && (e.rhythmLines = 0);
}
function getVoiceContext(e, t) {
	let i = e[t];
	return i || ((i = {}), (e[t] = i)), i;
}
function inflate(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
		i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		{
			useStdDrumNotation: n = !1,
			useBendPointsMerge: r = !0,
			useGenericTimeline: a = !1,
			useBogusNotes: s = !0,
		} = i,
		o = e;
	normalizePart(o, n), initTPQN(o, a);
	let l = new Line(0, o, 0),
		u = {},
		d = Array(o.voices);
	for (let e = 0; e < o.measures.length; e++) {
		let a = o.measures[e];
		normalizeMeasure(a, e, i),
			(a.layouts = [new MeasureLayout(a, l.layout)]),
			handleMeasureSignature(a, u),
			handleMeasureTempoPositions(o.tpqn, a, o.automations.tempo),
			handleMeasureReprises(a, u);
		for (let e = 0; e < a.voices.length; e++) {
			let t = a.voices[e];
			if ((normalizeVoice(t, e), 0 !== e && t.rest)) continue;
			let i = getVoiceContext(d, e),
				l = 0;
			for (let u = 0; u < t.beats.length; u++) {
				let d = t.beats[u];
				normalizeBeat(d, u, e, a);
				let c = a.beatsLayoutsByTime.get(l);
				c || ((c = new BeatsLayout()), a.beatsLayoutsByTime.set(l, c)),
					(l += o.tpqn
						? durationToTicks(d.duration, o.tpqn)
						: convertVectorToScalar(d.duration)),
					(d.layout = c),
					c.beats.unshift(d),
					handleBeatLinkSiblings(d, i);
				let p = Array(o.strings);
				for (let e = 0; e < d.notes.length; e++) {
					let t = d.notes[e];
					normalizeNote(t, e, d, r),
						handleNoteDrumString(t, o, n),
						handleNoteUsedString(t, p),
						handleNoteTremolo(t, d);
				}
				s && handleBeatBogusNotes(d, p);
				for (let t = 0; t < d.notes.length; t++) {
					let n = d.notes[t];
					handleNoteLinkSiblings(n, i),
						handleNoteBend(n, d, a, i),
						handleNoteSlide(n, d, a, i),
						handleNoteSlur(n, d, a, i),
						handleNoteTie(n, d, a, i),
						handleNoteMarks(n, d, o, e);
				}
				handleBeatFinishBend(d, a, i),
					handleBeatHarmonic(d),
					!o.withChords && d.chord && (o.withChords = !0);
			}
			(a.duration = Math.max(a.duration, l)), handleVoiceRhythm(t, a);
		}
		if ((handleMeasureRhythm(a), t)) {
			let i = t[e];
			if (i) {
				let e = a.voices.length,
					t = { beats: [], hasSameRhythm: !0 };
				normalizeVoice(t, e), (t.lyrics = !0);
				let n = 0,
					r = i.beats.length;
				for (let s = 0; s < r; s++) {
					let r = i.beats[s],
						l = a.beatsLayoutsByTime.get(n);
					l || ((l = new BeatsLayout()), a.beatsLayoutsByTime.set(n, l));
					let u = { ...r };
					normalizeBeat(u, s, e, a),
						(t.beats[s] = u),
						(u.layout = l),
						l.beats.unshift(u),
						(n += o.tpqn
							? durationToTicks(u.duration, o.tpqn)
							: convertVectorToScalar(u.duration));
				}
				r &&
					((a.duration = Math.max(a.duration, n)),
					a.voices.unshift(t),
					(a.hasLyrics = !0));
			}
		}
	}
	o.usedDrums && !o.isDrumStdOn && resolveDrumNameConflicts(o.usedDrums);
	try {
		let e = generateTimeline(o.tpqn, o.measures);
		(o.timeline = e.timeline),
			(o.tempos = e.tempos),
			(o.shifts = e.shifts),
			(o.progression = e.progression),
			(o.timestamps = [...o.timeline.keys()]);
	} catch (e) {
		return [e, o];
	}
	return [null, o];
}
async function apiGetVideoPoints(e) {
	let t = E("/api/video-points"),
		i = await fetch(`${t}?songId=${e}`);
	N(i);
	let n = await i.json();
	if (!n) throw Error("No video points found for that song");
	return n;
}
async function apiCreateVideoPoints(e, t, i) {
	let n = E("/api/video-points"),
		r = await P(n, { songId: e, videoId: t, points: i });
	N(r);
}
let SCREEN_SMALL_PORTRAIT =
		"(max-width: 479px) and (max-height: 899px) and (orientation: portrait)",
	SCREEN_SMALL_LANDSCAPE =
		"(max-height: 479px) and (max-width: 899px) and (orientation: landscape)",
	SCREEN_MEDIUM_PORTRAIT =
		"(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)",
	SCREEN_MEDIUM_LANDSCAPE =
		"(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)",
	SCREEN_WIDE = "(min-width: 1200px)",
	SCREEN_BIGGER_THEN_PHONE =
		"(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)",
	isSmallPortrait = () =>
		window && !!window.matchMedia(SCREEN_SMALL_PORTRAIT).matches,
	isBiggerThanPhone = () =>
		window &&
		!!window.matchMedia(
			"(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)"
		).matches,
	getScreen = () => {
		if (window) {
			if (
				window.matchMedia(SCREEN_SMALL_PORTRAIT).matches ||
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
function getMargin() {
	try {
		let e = getComputedStyle(document.documentElement),
			t =
				parseInt(e.getPropertyValue("--sal")) +
				parseInt(e.getPropertyValue("--sar"));
		return isNaN(t) ? 0 : t;
	} catch (e) {
		return 0;
	}
}
let getViewportDimensions = () => {
		let e = getMargin();
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
	url = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function nanoid() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
		t = "";
	for (; e-- > 0; )
		t += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[
			(64 * Math.random()) | 0
		];
	return t;
}
let PADDING = 30;
function stringify(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return "";
	}
}
function parseString(e) {
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
let partFactory = null,
	module$A = (e) => {
		function t(e, t, i) {
			let n =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 550,
				r = e;
			isBiggerThanPhone() && (r = r - 90 - 100);
			let a = r;
			if (t) return [880, a / 880];
			let s = i ? n : 750;
			return a < s ? [s, a / s] : [a, 1];
		}
		function i(i, n, r, a, s, o, l, u, d, c) {
			try {
				let u = isSmallPortrait(),
					d = 550;
				u && (d = 320);
				let p = t(l, o, u, d),
					[h, g] = p,
					f = i.part.lines,
					m = `${n}-${r}-${a}-${s.source}`;
				if (f.lines && f.hash === m && f.width === h && f.scale === g) return;
				let y = f.lines,
					T = f.height,
					S = f.slicingMode;
				if (f.hash !== m || f.width !== h) {
					S = new MultiLineSlicingMode(h - PADDING);
					let e = u ? new CompactPlacementMode() : new WidePlacementMode(),
						t = distribute(s, S, e);
					(y = t.lines), (T = t.height);
				}
				let _ = {
					lines: y,
					height: T,
					width: h,
					scale: g,
					print: o,
					slicingMode: S,
					hash: m,
				};
				if (c && c.aborted) return;
				e.dispatch("part/load:done", {
					songId: n,
					partId: r,
					revisionId: a,
					current: s,
					lines: _,
				});
			} catch (t) {
				if (c && c.aborted) return;
				e.dispatch("part/load:error", {
					songId: n,
					partId: r,
					revisionId: a,
					error: t,
				});
			}
		}
		function n(e, t) {
			let i = e.map((t) => (t - e[0]) * 1e3),
				n = [],
				r = null;
			for (let [e, i] of t) {
				let t = i.beats[0].measure.index;
				t !== r && ((r = t), n.push(e));
			}
			let a = new Map(),
				s = null,
				o = 0,
				l = 1,
				u = 0;
			for (let [e, r] of t) {
				let t = r.beats[0].measure.index;
				if (
					((r.occurrences = r.occurrences.filter((t) => t !== e)),
					r.occurrences.push(u),
					(r.occurrences = r.occurrences.sort()),
					t !== s)
				) {
					if (!i[o + 1]) break;
					(l = (i[o + 1] - i[o]) / (n[o + 1] - n[o])), (s = t), o++;
				}
				(r.duration = r.duration * l), a.set(u, r), (u += r.duration);
			}
			return { videoTimestamps: [...a.keys()], videoTimeline: a };
		}
		e.on("meta/load:done", async (t, i) => {
			let { partId: n, current: r } = i;
			if (!L(r, t.device.country)) return;
			let a = r.songId,
				s = r.revisionId,
				o = new AbortController$1();
			try {
				let i = t.part.loading;
				if (i) {
					if (a === i.songId && n === i.partId && s === i.revisionId) return;
					i.ac.abort();
				}
				if (
					!t.part.isFailed &&
					t.part.current &&
					t.part.lines &&
					a === t.part.songId &&
					n === t.part.partId &&
					s === t.part.revisionId
				) {
					e.dispatch("part/load:done", {
						songId: a,
						partId: n,
						revisionId: s,
						current: t.part.current,
						lines: t.part.lines,
					});
					return;
				}
				await e.dispatch("part/load:processing", {
					songId: a,
					partId: n,
					revisionId: s,
					ac: o,
				});
				let l = [apiGetSongPart(a, s, n, r.image, o.signal)];
				(!r.image || r.lyrics) &&
					l.push(apiGetSongLyrics(a, s, r.image, o.signal));
				let [u, d] = await Promise.all(l);
				if (!u || o.signal.aborted) return;
				await e.dispatch("fingerings/loadedPart", {
					songId: a,
					partId: n,
					revisionId: s,
					rawPart: u,
				}),
					await e.dispatch("part/load:raw", {
						songId: a,
						partId: n,
						revisionId: s,
						rawPart: u,
						rawLyrics: d,
						signal: o.signal,
					});
			} catch (t) {
				if (o.signal.aborted) return;
				e.dispatch("part/load:error", {
					songId: a,
					partId: n,
					revisionId: s,
					error: t,
				});
			}
		}),
			e.on("meta/load:processing", (e, t) => {
				let { songHasChanged: i } = t;
				if (i)
					return {
						part: {
							...e.part,
							current: null,
							lines: {
								lines: [],
								height: 0,
								width: 0,
								print: !1,
								scale: 1,
								hash: "",
								slicingMode: new MultiLineSlicingMode(0),
							},
						},
					};
			}),
			e.on("meta/load:processing", (e, t) => {
				let { songId: i, partId: n, revisionId: r } = t,
					a = e.part.loading;
				if (
					a &&
					(i !== a.songId || (n && n !== a.partId) || r !== a.revisionId)
				)
					return a.ac.abort(), { part: { ...e.part, loading: null } };
			}),
			e.on("part/load:processing", (e, t) => {
				let { songId: i, partId: n, revisionId: r, ac: a } = t;
				return {
					part: {
						...e.part,
						loading: { songId: i, partId: n, revisionId: r, ac: a },
					},
				};
			}),
			e.on("part/load:raw", (t, i) => {
				let {
						songId: n,
						partId: r,
						revisionId: a,
						rawPart: s,
						rawLyrics: o,
						signal: l,
					} = i,
					u = t.experiments,
					d = {
						useStdDrumNotation: u.drum_standard_notation?.segment !== "drop",
						useGenericTimeline: t.player.version !== I.V1,
					},
					c = stringify(s),
					p = stringify(s),
					[h, g] = inflate(s, o, d);
				if (((g.source = "audio"), l.aborted)) return;
				if (h) {
					e.dispatch("part/load:error", {
						songId: n,
						partId: r,
						revisionId: a,
						error: h,
					});
					return;
				}
				let f = () => {
					let e = parseString(c),
						t = parseString(p),
						[i, n] = inflate(e, t, d);
					if (((n.source = `video-${nanoid(2)}`), i)) throw i;
					return n;
				};
				(partFactory = f),
					e.dispatch("part/loadVideoTimeline", {
						songId: n,
						partId: r,
						revisionId: a,
						current: g,
						inflatePartCopy: f,
						signal: l,
					});
			}),
			e.on("part/load:done", (e, t) => {
				let { songId: i, partId: n, revisionId: r, current: a, lines: s } = t;
				return {
					part: {
						...e.part,
						current: a,
						lines: s,
						songId: i,
						partId: n,
						revisionId: r,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
						loading: null,
					},
				};
			}),
			e.on("part/load:inflated", (t, n) => {
				let { songId: r, partId: a, revisionId: s, current: o, signal: l } = n,
					u = t.screen.viewport.width;
				u && i(t, r, a, s, o, t.print.enabled, u, e.dispatch, t.experiments, l);
			}),
			e.on("screen/resize", (t, n) => {
				let { viewport: r } = n,
					{ songId: a, partId: s, revisionId: o, current: l } = t.part;
				l &&
					i(t, a, s, o, l, t.print.enabled, r.width, e.dispatch, t.experiments);
			}),
			e.on("print/enable", (t) => {
				let { songId: n, partId: r, revisionId: a, current: s } = t.part,
					o = t.screen.viewport.width;
				o && s && i(t, n, r, a, s, !0, o, e.dispatch, t.experiments);
			}),
			e.on("print/disable", (t) => {
				let { songId: n, partId: r, revisionId: a, current: s } = t.part,
					o = t.screen.viewport.width;
				o && s && i(t, n, r, a, s, !1, o, e.dispatch, t.experiments);
			}),
			e.on("part/load:done", (e) => {
				try {
					let t = getUrl(e.meta.current, e.meta.partId, e.meta.revisionId),
						i = new Date();
					i.setTime(i.getTime() + 7776e6),
						(document.cookie = `lastSeenTrack=${t};expires=${i.toUTCString()};path=/`);
				} catch (e) {
					console.error(e);
				}
			}),
			e.on("part/load:error", (e, t) => {
				let { songId: i, partId: n, revisionId: r, error: a } = t;
				return {
					part: {
						...e.part,
						current: null,
						lines: null,
						songId: i,
						partId: n,
						revisionId: r,
						isFailed: !0,
						isNetworkFailed: a instanceof v && 0 === a.status,
						isNotFound:
							a instanceof v && (404 === a.status || 400 === a.status),
						loading: null,
					},
				};
			}),
			e.on("part/load:error", (e, t) => {
				let { error: i } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(i),
					console.error(i);
			}),
			e.on("part/loadVideoTimeline", async (t, i) => {
				let {
					songId: r,
					partId: a,
					revisionId: s,
					current: o,
					inflatePartCopy: l,
					signal: u,
				} = i;
				if (u && u.aborted) return;
				let d = null,
					c = 0,
					p = null;
				r !== t.part.current?.songId &&
					e.dispatch("part/loadVideoTimeline:start");
				try {
					let e = await apiGetVideoPoints(r);
					if (e) {
						d = l();
						let t = n(e.points, d.timeline);
						(d.timeline = t.videoTimeline),
							(d.timestamps = t.videoTimestamps),
							(c = e.points[0]),
							(p = e.videoId);
					}
				} catch {
				} finally {
					e.dispatch("part/loadVideoTimeline:done", {
						songId: r,
						partId: a,
						revisionId: s,
						videoId: p,
						videoPart: d,
						videoOffset: c,
						current: o,
						signal: u,
					});
				}
			}),
			e.on("part/loadVideoTimeline:start", (e) => {
				let { part: t, player: i } = e;
				return (
					i.audio.disableYTAudioAndRestart(),
					{
						part: { ...t, videoId: null, videoOffset: 0 },
						player: { ...i, videoOpened: !1 },
					}
				);
			}),
			e.on("part/loadVideoTimeline:done", (t, i) => {
				let { part: n, player: r } = t,
					{
						songId: a,
						partId: s,
						revisionId: o,
						videoId: l,
						videoPart: u,
						videoOffset: d,
						current: c,
						signal: p,
					} = i;
				if (p && p.aborted) return;
				let h = c;
				return (
					(c = r.videoOpened && u ? u : h),
					setTimeout(
						() =>
							e.dispatch("part/load:inflated", {
								songId: a,
								partId: s,
								revisionId: o,
								current: c,
								signal: p,
							}),
						100
					),
					{
						part: {
							...n,
							videoId: l,
							videoOffset: d,
							audioPart: h,
							videoPart: u,
						},
					}
				);
			}),
			e.on("part/toggleVideo", (t) => {
				let n = t.player.videoOpened;
				t.player.video.handleOpenClose(), t.player.audio.switchAudioSource();
				let { songId: r, partId: a, revisionId: s } = t.part,
					o = n ? t.part.audioPart : t.part.videoPart;
				return (
					i(
						t,
						r,
						a,
						s,
						o,
						t.print.enabled,
						t.screen.viewport.width,
						e.dispatch,
						t.experiments
					),
					{ player: { ...t.player, videoOpened: !n } }
				);
			}),
			e.on("chords/load:done", (t) => {
				let { player: n, part: r } = t;
				if (r.current?.source === "video") {
					n.audio.disableYTAudio();
					let { songId: a, partId: s, revisionId: o } = r,
						l = r.audioPart;
					i(
						t,
						a,
						s,
						o,
						l,
						t.print.enabled,
						t.screen.viewport.width,
						e.dispatch,
						t.experiments
					);
				}
			}),
			e.on("part/initVideoPart", (e) => ({
				part: { ...e.part, videoPart: partFactory() },
			})),
			e.on("part/applyVideoBarPoints", (t, i) => {
				let { part: r, meta: a } = t,
					{ points: s } = i,
					o = partFactory(),
					l = n(s, o.timeline);
				return (
					(o.timeline = l.videoTimeline),
					(o.timestamps = l.videoTimestamps),
					setTimeout(
						() =>
							e.dispatch("part/load:inflated", {
								songId: a.songId,
								partId: a.partId,
								revisionId: a.revisionId,
								current: o,
								signal: null,
							}),
						100
					),
					{ part: { ...r, videoOffset: s[0], videoPart: o } }
				);
			}),
			e.on("part/changeVideoId", (e, t) => {
				let { part: i } = e;
				return { part: { ...i, videoId: t } };
			}),
			e.on("part/saveVideoPoints", async (e, t) => {
				let { part: i } = e,
					{ points: n } = t;
				await apiCreateVideoPoints(i.songId, i.videoId, n);
			});
	},
	module$z = (e) => {
		e.on("print/enable", () => ({ print: { enabled: !0 } })),
			e.on("print/disable", () => ({ print: { enabled: !1 } })),
			e.on("route/change", (e) => {
				if (e.print.enabled) return { print: { enabled: !1 } };
			});
	},
	loadPart = async (e, t, i) => {
		let n = await apiGetSongPart(e.songId, e.revisionId, t, e.image, i),
			[r, a] = inflate(n);
		return r && console.log(r), a;
	},
	isSameMeta = (e, t) =>
		e.songId === t.songId &&
		e.revisionId === t.revisionId &&
		e.image === t.image,
	module$y = (e) => {
		e.on("meta/load:done", async (t, i) => {
			let { current: n } = i,
				r = t.parts.loading;
			if (r) {
				if (isSameMeta(n, r.meta)) return;
				r.ac.abort();
			}
			if (t.parts.meta && isSameMeta(n, t.parts.meta)) return;
			let a = new AbortController$1();
			try {
				e.dispatch("parts/load:processing", { meta: n, ac: a });
				let t = await Promise.all(
					n.tracks.map((e) => loadPart(n, e.partId, a.signal))
				);
				e.dispatch("parts/load:done", { meta: n, current: t });
			} catch (t) {
				if (a.signal.aborted) return;
				e.dispatch("parts/load:error", { meta: n, error: t });
			}
		}),
			e.on("parts/load:processing", (e, t) => ({
				parts: { meta: t.meta, loading: t, list: [] },
			})),
			e.on("parts/load:done", (e, t) => {
				let { current: i } = t;
				return { parts: { ...e.parts, loading: null, list: i } };
			});
	};
function isAndroid(e) {
	return "android" === e.name.toLowerCase();
}
function isIos(e) {
	return "ios" === e.name.toLowerCase();
}
function isIpad(e) {
	return (
		(!!e.isTablet && "ios" === e.os.name.toLowerCase()) ||
		(e.isDesktop && "Mac OS X" === e.os.name && "ontouchstart" in window)
	);
}
let module$x = (e) => {},
	getContextTime = (e) => e.currentTime,
	getOutputLatency = (e) => ("outputLatency" in e ? e.outputLatency : 0),
	getBaseLatency = (e) => ("baseLatency" in e ? e.baseLatency : 0),
	getLatency = (e) => getOutputLatency(e) + getBaseLatency(e);
function poorManHuffman(e, t) {
	let i;
	for (i = t; e > 1; e--) i += t;
	return i;
}
function MuteAndSessionHack() {
	try {
		let e = document.createElement("div");
		e.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
		let t = e.children.item(0);
		return (
			(t.disableRemotePlayback = !0),
			(t.controls = !1),
			(t.src =
				"data:audio/mpeg;base64,//uQx" +
				poorManHuffman(23, "A") +
				"WGluZwAAAA8AAAACAAACcQCA" +
				poorManHuffman(16, "gICA") +
				poorManHuffman(66, "/") +
				"8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
				poorManHuffman(320, "A") +
				"//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
				poorManHuffman(15, "/") +
				"7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
				poorManHuffman(18, "/") +
				"9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
				poorManHuffman(97, "V") +
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
					} catch (e) {
						console.error(e);
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
					} catch (e) {
						console.error(e);
					}
				},
			}
		);
	} catch (e) {
		return console.error(e), null;
	}
}
let latest = "/static/latest/WebWorker.3acb29e3.js",
	performance = window.performance || {
		offset: Date.now(),
		now: function () {
			return Date.now() - this.offset;
		},
	};
function toSeconds(e) {
	return e / 1e3;
}
function debug$1(e) {}
function assert(e, t) {
	if (e) throw Error(t);
}
class AudioPlayer {
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
			let e = new window.AudioContext({ latencyHint: "interactive" });
			if (!(44100 === e.sampleRate || 48e3 === e.sampleRate)) {
				let t = e.createBufferSource();
				(t.buffer = e.createBuffer(1, 1, 48e3)),
					t.connect(e.destination),
					t.start(0),
					"close" in e && e.close(),
					(e = new window.AudioContext({ latencyHint: "interactive" }));
			}
			(e.onstatechange = () => {
				console.log(
					`Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`
				);
			}),
				(this.context = e),
				(this.freezeCheckSampleRate = this.context.sampleRate);
		} catch (e) {
			console.error("error creating audio context", e), (this.context = null);
		}
		window.Worker &&
			((this.worker = new Worker("/static/latest/WebWorker.3acb29e3.js")),
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
			(this.hack = MuteAndSessionHack()),
			(this.noSound = !1),
			(this.marginIssueReported = !1),
			(this.workerStarted = !1),
			(this.hasSingleTrack = !1),
			(this.correctTimestampFor50Timeline = (e) => 2 * e);
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
		let i = 1.02 * t;
		for (let n = 0; n < this.buffers.length; n++) {
			let r = this.buffers[n];
			(r && r.numberOfChannels === e && r.sampleRate === t && r.length === i) ||
				(this.buffers[n] = this.context.createBuffer(e, i, t));
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
			process?.env?.NODE_ENV === "development" &&
				console.log(
					`Drop audio packet with token mismatch: expected ${this.token}, actual ${e.token}`
				);
			return;
		}
		let t = this.context;
		if (t.sampleRate !== this.freezeCheckSampleRate) {
			console.warn(
				"SampleRate has changed",
				t.sampleRate,
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
			let e = t.createGain();
			(e.gain.value = 1), e.connect(t.destination), (this.gain = e);
		}
		let n = t.createBufferSource();
		(n.buffer = i), n.connect(this.gain), (this.sources[this.reuseIndex] = n);
		let r = 0;
		if (null !== this.startedTime) {
			r = this.startedTime + toSeconds(e.timestampMs);
			let i = r - t.currentTime;
			i < 0.2 &&
				(console.log("Ahead of time schedule margin", i),
				console.info(`Sound generation delay ${this.workerDelay}ms`)),
				!this.marginIssueReported &&
					e.timestampMs > 2e3 &&
					(i < 0 && console.log("Ahead of time schedule margin is negative", i),
					i >= 0 &&
						i < 0.2 &&
						console.log("Ahead of time schedule margin is too small", i),
					(this.marginIssueReported = !0));
		} else
			(r = t.currentTime + 0.05),
				(this.startedContextTime = getContextTime(t) + 0.05),
				(this.startedTime = r),
				(this.workerDelay = Math.floor(performance.now() - this.workerTs)),
				console.info(`Sound generation delay ${this.workerDelay}ms`),
				assert(
					0 !== e.timestampMs,
					`Got initial audio packet with unexpected timestamp ${e.timestampMs}`
				);
		n.start(r, 0, toSeconds(e.durationMs));
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
		} catch (e) {
			console.error(e), this.callback.onError(e);
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
		let { cursor: e, loopStart: t, loopEnd: i } = this.state;
		return (
			this.state.speed < 100 &&
				this.correctTimestampFor50Timeline &&
				((e = this.correctTimestampFor50Timeline(e)),
				(t = this.correctTimestampFor50Timeline(t)),
				(i = this.correctTimestampFor50Timeline(i))),
			{ cursor: e, loopStart: t, loopEnd: i }
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
			let t = this.gain;
			if (t) {
				for (let i of (t.gain.setValueAtTime(1, this.context.currentTime),
				t.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + 0.02),
				(this.gain = null),
				this.sources)) {
					var e;
					i &&
						setTimeout(
							((e = i),
							() => {
								try {
									e.stop();
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
	seek(e, t, i) {
		this.turnOffSound(),
			(this.state = { ...this.state, cursor: e, loopStart: t, loopEnd: i }),
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
				: (this.worker.postMessage([{ message: "worker/setSpeed", speed: e }]),
				  this.state.isPlaying && this.startWithoutSound()),
			this.state.cursor
		);
	}
	switchAudioSource() {
		return (
			(this.state = { ...this.state, audioFromYT: !this.state.audioFromYT }),
			this.shouldUseWorker
				? this.worker.postMessage([
						{ message: "worker/seek", position: this.getWorkerPosition() },
						this.state.isPlaying && this.startGenerateSoundPackets(),
				  ])
				: this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
		);
	}
	disableYTAudioAndRestart() {
		return (
			(this.state = { ...this.state, audioFromYT: !1 }),
			this.shouldUseWorker
				? this.worker.postMessage([
						{ message: "worker/seek", position: this.getWorkerPosition() },
						this.state.isPlaying && this.startGenerateSoundPackets(),
				  ])
				: this.state.isPlaying && this.startWithoutSound(),
			this.state.cursor
		);
	}
	disableYTAudio() {
		return (this.state = { ...this.state, audioFromYT: !1 }), this.state.cursor;
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
			(this.startedTime = performance.now() / 1e3),
			(this.startedContextTime = this.startedTime);
	}
	updateCountIn() {
		let e = null;
		if (
			((this.countinDuration = 0),
			this.state.isCountIn && !this.state.audioFromYT)
		) {
			let t;
			e = this.findBpmAndBeatByTimestamp(this.state.cursor);
			let i = ((60 / e.bpm) * 4) / e.signature[1];
			this.countinDuration =
				Math.floor(((i * e.signature[0] * 100) / this.state.speed) * 48e3) /
				48e3;
			let n = this.generateCountInTimeline(),
				r = this.state.cursor;
			for (let e = 0; e < n.length; e++)
				if (Math.floor(n[e].timestamp) >= Math.floor(r)) {
					t = n[e];
					break;
				}
			let a = t ? ((t.timestamp - r) * (100 / this.state.speed)) / 1e3 : 0;
			(this.countinDuration -= a),
				(e.correctedDurration = this.countinDuration);
		}
		return e;
	}
	updateMetronome() {
		return this.state.isMetronome ? this.generateMetronomeTimeline() : null;
	}
	startGenerateSoundPackets() {
		this.hack && this.hack.play(),
			(this.token = nanoid()),
			(this.workerTs = performance.now()),
			(this.workerStarted = !0);
		let e = "mute" === this.state.type && this.hasSingleTrack,
			t = this.updateMetronome(),
			i = this.state.metronomeType,
			n = this.updateCountIn();
		return {
			message: "worker/startGenerate",
			token: this.token,
			mute: e,
			countIn: n,
			metronomeTimeline: t,
			metronomeType: i,
		};
	}
	reset(e, t, i, n, r, a) {
		this.turnOffSound();
		let s = this.state.isPlaying;
		(this.state = {
			...this.state,
			cursor: e.cursor,
			loopStart: e.loopStart,
			loopEnd: e.loopEnd,
			speed: t,
			pitchShift: i,
			isPlaying: !1,
			isCountIn: n,
			isMetronome: r,
			metronomeType: a,
		}),
			(this.token = nanoid()),
			this.shouldUseWorker &&
				this.worker.postMessage([
					s && { message: "worker/stopGenerate" },
					{ message: "worker/reset" },
					{ message: "worker/setSpeed", speed: t },
					{ message: "worker/setPitch", pitchShift: i },
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
				i = (t > 0 ? t * (e.speed / 100) : 0) + e.cursor;
			return (
				e.loopEnd &&
					i > e.loopEnd &&
					(i = e.loopStart + ((i - e.loopStart) % (e.loopEnd - e.loopStart))),
				i
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
		let { context: e, startedTime: t, countinDuration: i } = this;
		return null === t
			? 0
			: this.shouldUseWorker
			? getContextTime(e) - this.startedContextTime - i - getLatency(e)
			: performance.now() / 1e3 - t - i;
	}
	isPositionChanged() {
		return this.state.isPlaying && this.passed() > 0;
	}
}
let DEFAULT_SPEED$1 = 100;
class VideoPlayer {
	constructor(e) {
		(this.isLoaded = !1), (this.callback = e);
	}
	load(e, t, i, n) {
		(this.player = e),
			(this.cursorOffset = t),
			(this.isLoaded = !0),
			(this.firstTimePlay = !0),
			(this.cursor = this.toSecondsPlusOffset(i.cursor)),
			(this.loopStart = i.loopStart && this.toSecondsPlusOffset(i.loopStart)),
			(this.loopEnd = i.loopEnd && this.toSecondsPlusOffset(i.loopEnd)),
			"setPlaybackRate" in this.player && this.player.setPlaybackRate(n / 100),
			"setPlaybackQuality" in this.player &&
				this.player.setPlaybackQuality("default");
	}
	play() {
		if (this.isLoaded) {
			if ((this.loop(), this.firstTimePlay)) {
				(this.firstTimePlay = !1), this.player.seekTo(this.cursor);
				return;
			}
			this.player.playVideo();
		}
	}
	pause() {
		this.isLoaded && this.player.pauseVideo();
	}
	seek(e, t, i) {
		this.isLoaded &&
			(0 === this.loopEnd && i && this.pause(),
			0 === i && (this.animationPlayId = null),
			(this.cursor = this.toSecondsPlusOffset(e)),
			(this.loopStart = t && this.toSecondsPlusOffset(t)),
			(this.loopEnd = i && this.toSecondsPlusOffset(i)),
			0 !== this.getCurrentTime() && this.player.seekTo(this.cursor));
	}
	speed(e) {
		this.isLoaded && this.player.setPlaybackRate(e / 100);
	}
	loop() {
		if (0 === this.loopEnd) return;
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
		let e = () => {
			this.animationPlayId &&
				(this.getCurrentTime() >= this.loopEnd
					? this.callback.onLoopRepeat()
					: (this.animationPlayId = requestAnimationFrame(e)));
		};
		this.animationPlayId = requestAnimationFrame(e);
	}
	handleOpenClose = () => {
		this.pause(), this.callback.onPause();
	};
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
	getCurrentTime() {
		return this.player.getCurrentTime();
	}
	toSecondsPlusOffset(e) {
		return e / 1e3 + this.cursorOffset;
	}
	_resetToDefault() {
		(this.isLoaded = !1),
			(this.firstTimePlay = !0),
			(this.cursor = this.toSecondsPlusOffset(0)),
			(this.loopStart = 0),
			(this.loopEnd = 0),
			(this.animationPlayId = null);
	}
}
class VideoPlayerMock {
	isLoaded = !1;
	getReady = () => !1;
	handleOpenClose = () => !1;
	seek = () => !1;
	pause = () => !1;
	play = () => !1;
	speed = () => !1;
	destroy = () => !1;
	load = () => !1;
	getCurrentTime = () => 0;
	toSecondsPlusOffset = () => 0;
}
let SPEED_STEPS = 12,
	SPEED_MIN_STEPS = 3,
	SPEED_MAX_STEPS = 21,
	SPEED_NORMAL = 100,
	SPEED_MIN = 25,
	SPEED_MAX = 175;
function roundSpeed(e) {
	return (Math.round((e / 100) * 12) / 12) * 100;
}
function _calc(e, t) {
	let i = Math.round((t.bpm * e) / 12),
		n = Math.round((100 * e) / 12);
	return { tempo: { ...t, bpm: i }, speed: n, position: speedToPosition(n) };
}
function normalizeSpeed(e, t) {
	return _calc(Math.round((e / 100) * 12), t);
}
function currentTempo(e, t) {
	return { ...t, bpm: Math.round((t.bpm * e) / 100) };
}
function faster(e, t, i, n) {
	let r = Math.round((e / 100) * 12);
	return r >= 21 ? { tempo: t, speed: e, position: i } : _calc(r + 1, n);
}
function slower(e, t, i, n) {
	let r = Math.round((e / 100) * 12);
	return r <= 3 ? { tempo: t, speed: e, position: i } : _calc(r - 1, n);
}
function changeBpm$1(e, t, i, n, r) {
	let a = t.bpm + r,
		s = +((100 * a) / n.bpm).toFixed(2),
		o = Math.round(s);
	return o < 25 || o > 175
		? { tempo: t, speed: e, position: i }
		: { tempo: { ...n, bpm: a }, speed: s, position: speedToPosition(s) };
}
function speedToPosition(e) {
	let t = roundSpeed(e);
	return +(((t - 25) * 100) / 150).toFixed(6);
}
function positionToSpeed(e) {
	return Math.round((150 * e) / 100 + 25);
}
let timestampCalculator = (e) =>
		e
			? (t, i) => ticksToMs(t, e, i.bpm)
			: (e, t) => convertScalarToMilliseconds(e, t),
	generateMetronomeTimeline = (e) => {
		let t = [],
			i = 0,
			n = DEFAULT_TEMPO,
			r = timestampCalculator(e.tpqn);
		for (let a of e.progression) {
			let s = e.measures[a - 1],
				o = numerator$1(s.signature),
				l = s.duration / o;
			n =
				firstMeasureLayout(s).tempoLayouts.length > 0
					? firstMeasureLayout(s).tempoLayouts[0].tempo
					: n;
			for (let e = 0; e < o; e++) {
				let a = {
					accented: 0 === e,
					timestamp: parseFloat(i.toFixed(4)),
					signature: s.signature,
					bpm: n.bpm,
				};
				t.push(a), (i += r(l, n));
			}
		}
		return t;
	},
	generateMetronome16thTimeline = (e, t) => {
		let i = [],
			n = 0,
			r = DEFAULT_TEMPO,
			a = timestampCalculator(e.tpqn);
		for (let s of e.progression) {
			let o = e.measures[s - 1],
				l = numerator$1(o.signature),
				u = denominator$1(o.signature),
				d = o.duration,
				c = 8 !== u ? 4 * l : l;
			8 !== u ? (d /= 4 * l) : (d /= l);
			let p = firstMeasureLayout(o).tempoLayouts;
			r = p && p.length > 0 ? p[0].tempo : r;
			for (let e = 0; e < c; e++) {
				let s;
				if (8 === u) s = (e % 3) + 1;
				else if ((e + 1) % 2 == 0) {
					if (16 !== t) {
						n += a(d, r);
						continue;
					}
					s = "16th";
				} else if ((e + 1) % 4 == 1) s = Math.ceil((e + 1) / 4);
				else {
					if (4 === t) {
						n += a(d, r);
						continue;
					}
					s = "8th";
				}
				let l = {
					division: 8 === u ? 4 : t,
					beatNum: s,
					timestamp: parseFloat(n.toFixed(4)),
					signature: o.signature,
					bpm: r.bpm,
				};
				i.push(l), (n += a(d, r));
			}
		}
		return i;
	},
	voiceMetroIsAvailable = (e) => {
		let t = e.measures.find((e) => {
			let t = numerator$1(e.signature),
				i = denominator$1(e.signature);
			return (4 !== i && 8 !== i && 2 !== i) || ((4 === i || 2 === i) && t > 8);
		});
		return !t;
	},
	tempoUsedStorage = "Used Tempo Control";
async function togglePlay(e, t) {
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
	e("player/togglePlay", i);
}
async function loadPlusActions(e) {
	if (true) return import("./playerPlus.c65da570.js");
}
async function loadDemoActions(e) {
	let t = e.get();
	if (t.demo.enabled && t.meta.songId === Q)
		return import("./playerDemo.a7328628.js");
}
async function toggleLoop(e) {
	try {
		let t = await loadPlusActions(e);
		if (t && t.demo && !t.demo()) return t.plusToggleLoop(e);
		if ((t = await loadDemoActions(e))) return t.demoToggleLoop(e);
	} catch (e) {
		console.error(e);
	}
}
function increaseBpm(e) {
	changeBpm(e, 1);
}
function decreaseBpm(e) {
	changeBpm(e, -1);
}
function changeBpm(e, t) {
	let { player: i, tempo: n } = e.get(),
		r = currentTempo(i.speed, n.tempo),
		a = r.bpm + t,
		s = +((100 * a) / n.tempo.bpm).toFixed(2),
		o = Math.round(s);
	o < 25 || o > 175 || changeSpeed(e, s);
}
async function changeSpeed(e, t) {
	try {
		let i = await loadPlusActions(e);
		if (i && i.demo && !i.demo()) return i.plusChangeSpeed(e, t);
		if ((i = await loadDemoActions(e))) return i.demoChangeSpeed(e, t);
	} catch (e) {
		console.error(e);
	}
}
async function changePitch(e, t) {
	try {
		let i = await loadPlusActions(e);
		if (i && i.demo && !i.demo()) return i.plusChangePitch(e, t);
		if ((i = await loadDemoActions(e))) return i.demoChangePitch(e, t);
	} catch (e) {
		console.error(e);
	}
}
function saveToLS(e, t) {
	let i = {
		position: {
			cursor: t.position.cursor,
			loopEnd: t.position.loopEnd,
			loopStart: t.position.loopStart,
		},
		speed: e.speed,
		type: e.type,
		pitchShift: e.pitchShift,
		isCountin: e.isCountin,
		isMetronome: e.isMetronome,
		metronomeType: e.metronomeType,
	};
	C(`player-${e.songId}`, i);
}
function loadFromLS(e, t, i, n, r) {
	let a = R(`player-${e}`),
		s = true,
		o = {
			cursor: { position: { cursor: 0, loopEnd: 0, loopStart: 0 } },
			player: {
				speed: DEFAULT_SPEED,
				type: DEFAULT_FOCUS,
				pitchShift: DEFAULT_PITCH_SHIFT,
				isCountin: t.isCountin,
				isMetronome: t.isMetronome,
				metronomeType: t.metronomeType,
			},
		},
		l = {
			cursor: {
				position: {
					cursor: a?.position?.cursor || 0,
					loopEnd: (s && a?.position?.loopEnd) || 0,
					loopStart: (s && a?.position?.loopStart) || 0,
				},
			},
			player: {
				speed: (s && a?.speed) || DEFAULT_SPEED,
				type: (s && a?.type) || DEFAULT_FOCUS,
				pitchShift: (s && a?.pitchShift) || DEFAULT_PITCH_SHIFT,
				isCountin: a?.isCountin || t.isCountin,
				isMetronome: a?.isMetronome || t.isMetronome,
				metronomeType: a?.metronomeType || t.metronomeType,
			},
		};
	if (n.state_persistence?.status === "pending") {
		let e =
			l.cursor.position.cursor != o.cursor.position.cursor ||
			l.cursor.position.loopStart != o.cursor.position.loopStart ||
			l.cursor.position.loopEnd != o.cursor.position.loopEnd ||
			l.player.speed != o.player.speed ||
			l.player.type != o.player.type ||
			l.player.pitchShift != o.player.pitchShift ||
			l.player.isCountin != o.player.isCountin ||
			l.player.isMetronome != o.player.isMetronome ||
			l.player.metronomeType != o.player.metronomeType;
		e && r("experiments/activate", { experimentName: "state_persistence" });
	}
	return n?.state_persistence?.segment === "on" ? l : o;
}
async function changeType(e, t) {
	try {
		let i = await loadPlusActions(e);
		if (i && i.demo && !i.demo()) return i.plusChangeType(e, t);
		if ((i = await loadDemoActions(e))) return i.demoChangeType(e, t);
	} catch (e) {
		console.error(e);
	}
}
async function restoreDefaults(e) {
	try {
		let t = await import("./playerFree.93bf433b.js");
		return t.plusRestoreDefaults(e);
	} catch (e) {
		console.error(e);
	}
}
async function toggleCountin(e) {
	e("player/toggleCountIn");
}
let DEFAULT_SPEED = 100,
	DEFAULT_FOCUS = "focus",
	DEFAULT_VERSION = I.MASTER,
	DEFAULT_PITCH_SHIFT = 0,
	resetAudioError = (e) => ({
		player: { ...e.player, isAudioFailed: !1, isAudioNetworkFailed: !1 },
	}),
	updatePlayState = (e, t) => {
		let i = null != t ? t : !e.player.shouldPlay;
		k.setIsActive(i);
		let n = { ...e.player, shouldPlay: i },
			r = { ...e.cursor },
			{ audio: a, canPlay: s } = e.player;
		return (
			a &&
				(i && a.resumeContext(),
				s && i
					? a.isPlaying || a.play()
					: a.isPlaying && (a.pause(), (r.position = a.getActualPosition()))),
			{ player: n, cursor: r }
		);
	},
	module$w = (e) => {
		{
			let r;
			function t() {
				r?.forEach((e) => e());
			}
			function i(t, i) {
				let { songId: n } = i;
				if (!t.player.audio) {
					let i = new AudioPlayer({
							onError: function (t) {
								let i =
										arguments.length > 1 &&
										void 0 !== arguments[1] &&
										arguments[1],
									n = t.message || t;
								console.error("error in audio player initialization: ", n),
									e.dispatch("player/error", { error: n, isNetworkError: i });
							},
							onFreeze: () => e.dispatch("player/togglePlay", !1),
							onOpened: () => e.dispatch("player/opened"),
							onLoad: () => e.dispatch("player/load"),
							onLoaded: () => e.dispatch("player/loaded"),
							onEmpty: () => e.dispatch("player/empty"),
						}),
						r = !!(null !== i.context && window.Worker),
						a = loadFromLS(n, t.player, t.user, t.experiments, e.dispatch);
					return (
						i.reset(
							a.cursor.position,
							a.player.speed,
							a.player.pitchShift,
							a.player.isCountin,
							a.player.isMetronome,
							a.player.metronomeType
						),
						{
							player: {
								...t.player,
								audio: i,
								songId: n,
								playbackAvailable: r,
								...a.player,
							},
							cursor: { ...t.cursor, ...a.cursor },
						}
					);
				}
			}
			function n(t) {
				if (!t.player.video) {
					let i;
					let { screen: n, device: r } = e.get();
					return (
						(i =
							n.isSmall || isIpad(r)
								? new VideoPlayerMock()
								: new VideoPlayer({
										onPause: () => {
											let t = e.get(),
												{
													cursor: i,
													loopStart: n,
													loopEnd: r,
												} = t.cursor.position;
											e.dispatch("player/togglePlay", !1),
												e.dispatch("cursor/move", {
													cursor: i,
													loopStart: n,
													loopEnd: r,
												});
										},
										onLoopRepeat: () => {
											let t = e.get(),
												{ loopStart: i, loopEnd: n } = t.cursor.position;
											e.dispatch("cursor/move", {
												cursor: i,
												loopStart: i,
												loopEnd: n,
											});
										},
								  })),
						{ player: { ...t.player, video: i } }
					);
				}
			}
			r = [
				e.on("meta/load:processing", i),
				e.on("meta/load:processing", n),
				e.on("meta/load:processing", t),
				e.on("meta/load:done", i),
				e.on("meta/load:done", n),
				e.on("meta/load:done", t),
			];
		}
		function r(e, t) {
			let { audio: i, shouldPlay: n } = e.player,
				r = e.player.locks;
			if ((r.includes(t) || r.push(t), e.player.canPlay)) {
				let t = { ...e.player, canPlay: !1 },
					r = { ...e.cursor };
				return (
					n && i.isPlaying && (i.pause(), (r.position = i.getActualPosition())),
					{ player: t, cursor: r }
				);
			}
		}
		function a(e, t) {
			let { audio: i, shouldPlay: n, locks: r } = e.player;
			for (let e of (Array.isArray(t) || (t = [t]), t)) {
				let t = r.findIndex((t) => t === e);
				-1 !== t && r.splice(t, 1);
			}
			let a = !r.length;
			if (!e.player.canPlay && a)
				return (
					n && !i.isPlaying && i.play(), { player: { ...e.player, canPlay: a } }
				);
		}
		e.on("meta/load:processing", (t, i) => {
			let { songId: n, songHasChanged: r } = i;
			if (
				(t.player.videoOpened &&
					(e.dispatch("player/stopPlay"), t.player.video.pause()),
				r)
			) {
				let i = { cursor: 0, loopEnd: 0, loopStart: 0 },
					r = t.player.isCountin,
					a = t.player.isMetronome,
					s = t.player.metronomeType;
				t.player.audio &&
					t.player.audio.reset(i, DEFAULT_SPEED, DEFAULT_PITCH_SHIFT, r, a, s);
				let o = loadFromLS(n, t.player, t.user, t.experiments, e.dispatch);
				return (
					t.player.audio &&
						t.player.audio.reset(
							o.cursor.position,
							o.player.speed,
							o.player.pitchShift,
							o.player.isCountin,
							o.player.isMetronome,
							o.player.metronomeType
						),
					{
						player: {
							...t.player,
							...o.player,
							songId: n,
							version: DEFAULT_VERSION,
							shouldPlay: !1,
							isAudioFailed: !1,
							isAudioNetworkFailed: !1,
						},
						cursor: { ...t.cursor, ...o.cursor },
					}
				);
			}
			return t.player.audio?.pause?.(), resetAudioError(t);
		}),
			e.on(
				"chords/load:processing",
				(e, t) => (e.player.audio?.pause?.(), resetAudioError(e))
			),
			e.on("meta/load:done", (e, t) => {
				let { current: i } = t;
				e.player.audio &&
					(e.player.audio.hasSingleTrack = !i.tracks || 1 === i.tracks.length);
			}),
			e.on("part/load:inflated", (e, t) => {
				let { player: i } = e,
					{ current: n } = t;
				if (i.audio) {
					(i.audio.correctTimestampFor50Timeline = (e) =>
						correctTimestampFor50Timeline(n, e)),
						(i.audio.findBpmAndBeatByTimestamp = (e) =>
							findBpmAndBeatByTimestamp(n, e)),
						(i.audio.generateCountInTimeline = () =>
							generateMetronomeTimeline(n)),
						(i.audio.generateMetronomeTimeline = () =>
							generateMetronome16thTimeline(n, 4));
					let e = voiceMetroIsAvailable(n),
						t = i.metronomeType;
					return (
						"voice" !== i.metronomeType ||
							e ||
							((t = "regular"), i.audio.setMetronome(i.isMetronome, "regular")),
						{ player: { ...i, voiceMetronomeAvailable: e, metronomeType: t } }
					);
				}
			}),
			e.on("player/open", (e, t) => {
				let { url: i, version: n } = t;
				return (
					e.player.audio?.open(n, i),
					{
						player: {
							...e.player,
							version: n,
							isAudioFailed: !1,
							isAudioNetworkFailed: !1,
						},
					}
				);
			}),
			e.on("meta/load:processing", (e) => r(e, "audio")),
			e.on("player/open", (e) => r(e, "audio")),
			e.on("player/load", (e) => r(e, "audio")),
			e.on("player/empty", (e) => r(e, "audio")),
			e.on("player/loaded", (e) => a(e, "audio")),
			e.on("meta/load:processing", (e) => r(e, "model")),
			e.on("part/load:done", (e) => a(e, "model")),
			e.on("player/load", resetAudioError),
			e.on("player/loaded", resetAudioError),
			e.on("player/error", (e, t) => {
				let { isNetworkError: i } = t;
				return {
					player: { ...e.player, isAudioFailed: !0, isAudioNetworkFailed: i },
				};
			}),
			e.on("player/error", (e) => a(e, ["playerOpen", "playerLoad"])),
			e.on("cursor/move", (e, t) => {
				let { player: i } = e;
				i.audio?.seek(t.cursor, t.loopStart, t.loopEnd),
					i.video?.seek?.(t.cursor, t.loopStart, t.loopEnd);
			}),
			e.on("player/startPlay", (e) => updatePlayState(e, !0)),
			e.on("player/stopPlay", (e) => updatePlayState(e, !1)),
			e.on("player/togglePlay", updatePlayState),
			e.on("player/changeLoop", (e, t) => {
				if (t) {
					let t = r(e, "loop") || e;
					return {
						cursor: t.cursor,
						player: { ...t.player, isLoopChanging: !0 },
					};
				}
				{
					let t = a(e, "loop") || e;
					return { player: { ...t.player, isLoopChanging: !1 } };
				}
			}),
			e.on("player/changeSpeed", (e, t) => {
				let { speed: i } = t,
					{ audio: n, video: r } = e.player;
				n.speed(i), r.speed(i);
				let a = { ...e.player, speed: i };
				return saveToLS(a, e.cursor), { player: a };
			}),
			e.on("player/changePitch", (e, t) => {
				let { audio: i } = e.player;
				i.pitch(t);
				let n = { ...e.player, pitchShift: t };
				return saveToLS(n, e.cursor), { player: n };
			}),
			e.on("player/changeType", (e, t) => {
				let { type: i } = t,
					{ audio: n } = e.player;
				n.type(i);
				let r = { ...e.player, type: i };
				return saveToLS(r, e.cursor), { player: r };
			}),
			e.on("player/suspend", r),
			e.on("player/resume", a),
			e.on("player/toggleCountIn", (e) => {
				let t = { ...e.player, isCountin: !e.player.isCountin };
				return (
					t.audio.setCountin(t.isCountin), saveToLS(t, e.cursor), { player: t }
				);
			}),
			e.on("player/toggleMetronome:init", () => {
				e.dispatch("player/suspend", "isMetronome"),
					e.dispatch("player/toggleMetronome"),
					e.dispatch("player/resume", "isMetronome");
			}),
			e.on("player/toggleMetronome", (e) => {
				let t = { ...e.player, isMetronome: !e.player.isMetronome };
				return (
					t.audio.setMetronome(t.isMetronome, t.metronomeType),
					saveToLS(t, e.cursor),
					{ player: t }
				);
			}),
			e.on("player/changeMetronome:init", (t, i) => {
				let { player: n } = t;
				i !== n.metronomeType &&
					(e.dispatch("player/suspend", "metronomeType"),
					e.dispatch("player/changeMetronome", i),
					e.dispatch("player/resume", "metronomeType"));
			}),
			e.on("player/changeMetronome", (e, t) => {
				let { player: i, cursor: n } = e;
				return (
					i.audio.setMetronome(i.isMetronome, t),
					saveToLS(i, n),
					{ player: { ...i, metronomeType: t } }
				);
			}),
			e.on("user/signOut", () => {
				restoreDefaults(e);
			}),
			e.on("editor/sound:toggle", (e, t) => {
				let { version: i } = t;
				return { player: { ...e.player, forcedVersion: i } };
			}),
			e.on("route/change", (e, t) => {
				let { route: i } = t;
				return (
					e.route.isPanel && e.player.video?.pause?.(),
					i.isPanel ? r(e, "isPanel") : a(e, "isPanel")
				);
			});
	},
	defineFlags = (e) => ({
		isSmall: "small" === e,
		isMedium: "medium" === e,
		isLarge: "large" === e,
		isWide: "wide" === e,
	}),
	module$v = (e) => {
		e.on("screen/resize", (e, t) => {
			let { screen: i, viewport: n } = t;
			return {
				screen: { ...e.screen, screen: i, viewport: n, ...defineFlags(i) },
			};
		});
	},
	module$u = (e) => {
		e.on("consent/view", (e, t) => {
			let { suite: i, view: n, options: r } = t;
			return { consent: { suite: i, view: n, options: r } };
		});
	};
function stringifyQuery(e) {
	let t = Object.keys(e)
		.filter((t) => e[t])
		.map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
		.join("&");
	return t.length ? `?${t}` : "";
}
let sortSongs = (e) => (
	e.sort((e, t) => {
		let i = e.artist.localeCompare(t.artist);
		return 0 === i ? e.title.localeCompare(t.title) : i;
	}),
	e
);
function addDifficultyToSong(e) {
	try {
		let t = e.tracks;
		if (!t || !t.length) return;
		let i = t.filter((e) => isGuitar(e.instrumentId) && e.difficulty),
			n = -1;
		Number.isInteger(e.defaultTrack) && isGuitar(t[e.defaultTrack].instrumentId)
			? (e.difficulty = t[e.defaultTrack].difficulty)
			: (i.forEach((e, t) => {
					(-1 === n || (e.views || 0) > (i[n].views || 0)) && (n = t);
			  }),
			  -1 !== n && (e.difficulty = i[n].difficulty));
	} catch (e) {
		console.error(e);
	}
}
function postprocess(e) {
	return (
		e.forEach(addDifficultyToSong),
		e.forEach((e) => {
			e.title = capitalizeSongTitle(e.title);
		}),
		e
	);
}
function getDifficultyValue(e) {
	switch (e) {
		case DIFFICULTY_FILTER_ADVANCED:
			return "2";
		case DIFFICULTY_FILTER_INTERMEDIATE:
			return "1";
		default:
			return "0";
	}
}
function getSearchQueryParams(e, t, i, n) {
	let r = !t.instrument || t.instrument === INSTRUMENT_FILTER_GUITAR,
		a = (t.instrument && t.instrument.toLowerCase()) || void 0,
		s = t.tuning || void 0,
		o = (r && t.difficulty && getDifficultyValue(t.difficulty)) || void 0,
		l = { size: i.toString() };
	return (
		n && (l.from = n.toString()),
		e && (l.pattern = e),
		a && (l.inst = a),
		o && (l.difficulty = o),
		s && (l.tuning = s),
		stringifyQuery(l)
	);
}
async function apiLoadSongs(e, t, i, n, r, a) {
	let s = getSearchQueryParams(t, i, r, a),
		o = await fetch(`${e}${s}`, { signal: n, credentials: "omit" });
	if (n && n.aborted) return [];
	N(o);
	let l = await o.json(),
		u = postprocess(l);
	return n && n.aborted ? [] : u;
}
function apiSongs(e, t, i, n) {
	let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 200,
		a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
		s = E(i ? "/api/songs-db" : "/api/songs");
	return apiLoadSongs(s, e, t, n, r, a);
}
async function apiArtist(e, t) {
	let i = `/api/artist/${e}`,
		n = await fetchRetrySignal(() => E(i), "artist", t);
	return t.aborted || !n ? null : n;
}
function apiArtistSongs(e, t, i, n) {
	let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
		a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
		s = E(`/api/artist/${e}/songs`);
	return apiLoadSongs(s, t, i, n, r, a);
}
async function apiSongsFavorites(e) {
	let t = E("/api/favorites"),
		i = await fetch(t, { credentials: "include" });
	N(i);
	let n = await i.json();
	return postprocess(sortSongs(n));
}
async function apiSongsAddFavorite(e) {
	let t = E(`/api/favorites/${e}`),
		i = await fetch(t, { method: "put", credentials: "include" });
	N(i);
}
async function apiSongsDeleteFavorite(e) {
	let t = E(`/api/favorites/${e}`),
		i = await fetch(t, { method: "delete", credentials: "include" });
	N(i);
}
function saveSearchPattern(e) {
	let t = parseQuery(document.location.search.substring(1));
	e.length ? (t.pattern = e) : delete t.pattern,
		history.replaceState(
			null,
			"",
			`${document.location.pathname || "/"}${stringifyQuery(t)}`
		);
}
function saveSearchInstrument(e) {
	let t = parseQuery(document.location.search.substring(1));
	e.length && e !== INSTRUMENT_FILTER_ALL
		? (t.inst = instrumentToUrl(e))
		: delete t.inst,
		history.replaceState(
			null,
			"",
			`${document.location.pathname || "/"}${stringifyQuery(t)}`
		);
}
function seoInstrumentUrl(e, t, i) {
	let n = i;
	return (
		t.length &&
			t !== INSTRUMENT_FILTER_ALL &&
			(n = { pattern: i.pattern, inst: instrumentToUrl(t) }),
		`${e}${stringifyQuery(n)}`
	);
}
function instrumentFromUrl(e) {
	switch (e) {
		case "guitar":
			return INSTRUMENT_FILTER_GUITAR;
		case "drum":
			return INSTRUMENT_FILTER_DRUMS;
		case "bass":
			return INSTRUMENT_FILTER_BASS;
		default:
			return INSTRUMENT_FILTER_ALL;
	}
}
function instrumentToUrl(e) {
	switch (e) {
		case INSTRUMENT_FILTER_GUITAR:
			return "guitar";
		case INSTRUMENT_FILTER_DRUMS:
			return "drum";
		case INSTRUMENT_FILTER_BASS:
			return "bass";
		default:
			return "";
	}
}
function formatFiltersQuery(e, t) {
	return stringifyQuery({
		pattern: e || void 0,
		inst:
			t && t.instrument !== INSTRUMENT_FILTER_ALL && t.instrument
				? instrumentToUrl(t.instrument)
				: void 0,
	});
}
function scrollIntoTop(e, t) {
	try {
		let i = document.getElementById(t);
		if (!i) return;
		let n = i.getBoundingClientRect(),
			{ marginTop: r, marginBottom: a } = getComputedStyle(i),
			s = n.height + parseInt(r, 10) + parseInt(a, 10);
		if (n.top + s < 0) {
			let t = document.getElementById(e);
			t && "function" == typeof t.scroll && t.scroll(0, s);
		}
	} catch (e) {
		console.error(e);
	}
}
let MAX_SIZE$1 = 1e3,
	module$t = (e) => {
		async function t(t, i) {
			if (i && !t.artist.songs.hasMore) return;
			let n = t.artist.id,
				r = t.artist.pattern,
				a = t.artist.filters,
				s = 0,
				o = null;
			i &&
				t.artist.songs.pattern === t.artist.pattern &&
				filtersEquals(t.artist.songs.filters, t.artist.filters) &&
				(s = (o = t.artist.songs.list).length);
			let l = new AbortController$1();
			try {
				e.dispatch("artist/load:processing", {
					id: n,
					pattern: r,
					filters: a,
					ac: l,
				});
				let i = await apiArtistSongs(
					n,
					r,
					getFilterQueries(a),
					l.signal,
					50,
					s
				);
				if (l.signal.aborted) return;
				let u = t.artist.defaultInstrument;
				isAnyFilterEnabled(a) ||
					(i = updateDefaultTrackToCurrentInstrument(i, u));
				let d = null;
				if (!t.artist.artists[n]) {
					if (i.length) d = { artistId: i[0].artistId, name: i[0].artist };
					else if (((d = await apiArtist(n, l.signal)), l.signal.aborted))
						return;
				}
				let c = (o ? o.length : 0) + i.length,
					p = 50 === i.length && c < 1e3;
				e.dispatch("artist/load:done", {
					id: n,
					songs: o ? [...o, ...i] : i,
					hasMore: p,
					artist: d,
					pattern: r,
					filters: a,
					defaultInstrument: u,
				}),
					J &&
						!o &&
						requestAnimationFrame(() => {
							scrollIntoTop("artist-wrap", "top");
						});
			} catch (t) {
				if (l.signal.aborted) return;
				console.error(t),
					e.dispatch("artist/load:error", {
						id: n,
						error: t,
						pattern: r,
						filters: a,
					});
			}
		}
		let i = (e) => t(e, !1);
		e.on("artist/load:processing", (e, t) => {
			let { id: i, pattern: n, filters: r, ac: a } = t,
				s = e.artist.loading;
			s && s.ac.abort();
			let o = e.artist.songs;
			return (
				o.id !== i &&
					(o = {
						id: i,
						list: [],
						defaultInstrument: 24,
						hasMore: !0,
						pattern: n,
						filters: r,
					}),
				{
					artist: {
						...e.artist,
						songs: o,
						loading: { id: i, filters: r, pattern: n, ac: a },
					},
				}
			);
		}),
			e.on("artist/load:done", (e, t) => {
				let {
						id: i,
						songs: n,
						hasMore: r,
						artist: a,
						pattern: s,
						filters: o,
						defaultInstrument: l,
					} = t,
					u = e.artist.loading;
				if (!u || u.id !== i || !filtersEquals(u.filters, o) || u.pattern !== s)
					return;
				let d = e.artist.artists;
				return (
					a && (d = { ...d, [a.artistId]: a.name }),
					{
						artist: {
							...e.artist,
							songs: {
								id: i,
								list: n,
								defaultInstrument: l,
								hasMore: r,
								pattern: s,
								filters: o,
							},
							artists: d,
							loading: null,
						},
					}
				);
			}),
			e.on("artist/load:error", (e, t) => {
				let { id: i, error: n, pattern: r, filters: a } = t,
					s = e.artist.loading;
				if (s && s.id === i && filtersEquals(s.filters, a) && s.pattern === r)
					return { artist: { ...e.artist, loading: null } };
			}),
			e.on("meta/load:done", (e, t) => {
				let { current: i } = t;
				return {
					artist: {
						...e.artist,
						artists: { ...e.artist.artists, [i.artistId]: i.artist },
					},
				};
			}),
			e.on("chords/load:done", (e, t) => {
				let { current: i } = t;
				return {
					artist: {
						...e.artist,
						artists: { ...e.artist.artists, [i.artistId]: i.artist },
					},
				};
			}),
			e.on("artist/filter", (e, t) => {
				let { id: i, pattern: n, filters: r } = t;
				return { artist: { ...e.artist, pattern: n, filters: r, id: i } };
			}),
			e.on("artist/filter", i),
			e.on("songs/default", (e, t) => {
				let { instrumentId: i } = t,
					n = simplifyCurrentInstrument(i),
					r = e.artist.songs.list;
				return (
					isAnyFilterEnabled(e.artist.songs.filters) ||
						e.artist.songs.defaultInstrument === n ||
						(r = updateDefaultTrackToCurrentInstrument(e.artist.songs.list, n)),
					{
						artist: {
							...e.artist,
							songs: { ...e.artist.songs, list: r, defaultInstrument: n },
							defaultInstrument: n,
						},
					}
				);
			}),
			e.on("artist/more", (e) => t(e, !0)),
			e.on("artist/filter/pattern", (e, t) => ({
				artist: { ...e.artist, pattern: t },
			})),
			e.on("artist/filter/pattern", i),
			e.on("artist/filter/difficulty", (e, t) => ({
				artist: {
					...e.artist,
					filters: { ...e.artist.filters, difficulty: t },
				},
			})),
			e.on("artist/filter/difficulty", i),
			e.on("artist/filter/instrument", (e, t) => ({
				artist: {
					...e.artist,
					filters: { ...e.artist.filters, instrument: t },
				},
			})),
			e.on("artist/filter/instrument", i),
			e.on("artist/filter/tuning", (e, t) => {
				let { instrument: i, tuning: n } = t;
				return {
					artist: {
						...e.artist,
						filters: changeTuningFilter(e.artist.filters, i, n),
					},
				};
			}),
			e.on("artist/filter/tuning", i),
			e.on("artist/filter/reset", (e) => ({
				artist: { ...e.artist, filters: DEFAULT_FILTERS_STATE },
			})),
			e.on("artist/filter/reset", i),
			e.on("route/change", (t, i) => {
				let { route: n, query: r } = i;
				if (n?.page === "artist") {
					let i = +n.artistId,
						a = r?.pattern || "",
						s = {
							instrument: r?.inst
								? instrumentFromUrl(r.inst)
								: INSTRUMENT_FILTER_ALL,
							tunings: t.artist.filters.tunings,
							difficulty: t.artist.filters.difficulty,
						};
					(t.artist.songs.list.length &&
						t.artist.songs.id === i &&
						t.artist.songs.pattern === a &&
						filtersEquals(t.artist.songs.filters, s)) ||
						e.dispatch("artist/filter", { id: i, pattern: a, filters: s });
				}
			});
	};
var StoreContext = e();
let useIsomorphicLayoutEffect = r;
function useStore() {
	for (var e = arguments.length, a = Array(e), s = 0; s < e; s++)
		a[s] = arguments[s];
	let o = t(StoreContext),
		l = i({});
	return (
		r(
			() =>
				o.on("@changed", (e, t) => {
					a.some((e) => e in t) && l[1]({});
				}),
			[]
		),
		n(() => {
			let e = o.get(),
				t = { dispatch: o.dispatch, store: o };
			for (let i of a) t[i] = e[i];
			return t;
		}, [l[0]])
	);
}
let normalizeProfile = (e) => ({
		id: +e.id,
		uid: e.uid,
		name: e.name,
		email: e.email,
		plan: e.plan,
		subscription: e.subscription,
		permissions: e.permissions,
		androidLicence: e.sra_license,
	}),
	normalizeSong = (e) => ({
		songId: e.id,
		artistId: e.artist.id,
		artist: e.artist.name,
		title: e.title,
		defaultTrack: 0,
		tracks: [],
	}),
	normalizeSongRevision = (e) => ({
		revisionId: +e.id,
		songId: +e.song.id,
		artist: e.song.artist.name,
		title: e.song.title,
	}),
	LOADING = {};
function stdOnEnd(e, t) {
	(e.onload = function () {
		(this.onerror = this.onload = null), t(null, e);
	}),
		(e.onerror = function () {
			(this.onerror = this.onload = null),
				t(Error("Failed to load " + this.src), e);
		});
}
function ieOnEnd(e, t) {
	e.onreadystatechange = function () {
		("complete" === this.readyState || "loaded" === this.readyState) &&
			((this.onreadystatechange = null), t(null, e));
	};
}
function loadScriptCb(e, t) {
	let i = document.head || document.getElementsByTagName("head")[0],
		n = document.createElement("script");
	(n.async = !0), (n.defer = !0), (n.src = e);
	let r = "onload" in n ? stdOnEnd : ieOnEnd;
	r(n, t), n.onload || stdOnEnd(n, t), i.appendChild(n);
}
function loadScript(e, t) {
	return (
		LOADING[t] ||
			(LOADING[t] = new Promise((i, n) => {
				loadScriptCb(e, (e) => {
					(window[t] = !e), e ? n(e) : i();
				});
			})),
		LOADING[t]
	);
}
let recaptchaPages = [
	"signin",
	"signup",
	"subscribePlus",
	"updateCard",
	"help",
];
function toggleRecaptchaBadge(e, t) {
	document.body &&
		(e && recaptchaPages.includes(t)
			? (document.body.classList.add("grecaptcha-visible"), useRecaptcha())
			: document.body.classList.remove("grecaptcha-visible"));
}
function useRecaptcha() {
	return loadScript(
		`https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`,
		"__LOADED_RECAPTCHA__"
	);
}
async function recaptchaTokenizeAction(e) {
	try {
		return (
			window.grecaptcha || (await useRecaptcha()),
			await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: e })
		);
	} catch (e) {}
}
async function apiGetBraintreeSettings() {
	let e = E("/auth/billing/settings"),
		t = await M(e);
	return await O(t), t.json();
}
async function apiActivateCoupon(e) {
	let t = E("/auth/coupon"),
		i = await P(t, { coupon: e });
	return await O(i), normalizeProfile(await i.json());
}
async function apiAndroidPromo() {
	let e = E("/auth/coupon/android"),
		t = await P(e);
	return await O(t), normalizeProfile(await t.json());
}
async function apiSubscribePlus(e, t) {
	let i = E(`/auth/billing/${e}`),
		n = await recaptchaTokenizeAction(e),
		r = await P(i, t, { "X-Recaptcha-Token": n });
	return await D(r, e), await O(r), normalizeProfile(await r.json());
}
async function apiCancelPlus() {
	let e = E("/auth/billing/cancel"),
		t = await P(e);
	return await O(t), normalizeProfile(await t.json());
}
async function apiMigratePlus(e) {
	let t = E("/auth/billing/migrate"),
		i = await P(t, e);
	return await O(i), i.json();
}
function readJsonCookie(e) {
	try {
		return JSON.parse(decodeURIComponent(readCookie(e)));
	} catch (e) {}
	return null;
}
function readCookie(e) {
	let t = e + "=",
		i = document.cookie.split(";");
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		for (; " " === n.charAt(0); ) n = n.substring(1, n.length);
		if (0 === n.indexOf(t)) return n.substring(t.length, n.length);
	}
	return null;
}
function setCookie(e, t, i) {
	let n = new Date();
	n.setTime(n.getTime() + 31536e6),
		(t = encodeURIComponent(t)),
		(document.cookie = `${e}=${t};expires=${n.toUTCString()};path=/${
			i ? ";secure" : ""
		}`);
}
let MIGRATION_COOKIE = "sr_plus_migration";
function checkMigrationAvailability(e) {
	let { user: t, payment: i } = e,
		n = readCookie(MIGRATION_COOKIE);
	if (
		(n && +n > 1) ||
		!t.hasPlus ||
		e.user.profile?.subscription?.type !== "braintree" ||
		"plus" !== t.profile.subscription.plan.id
	)
		return !1;
	let r = !!("USD" === i.plan.currency && 9 > +i.plan.price),
		a = !!("EUR" === i.plan.currency && 9 > +i.plan.price),
		s = ["AUD", "BRL", "CAD", "CLP", "JPY", "MNX", "SEK"].includes(
			i.plan.currency
		);
	return r || a || s;
}
function useDropinPayments() {
	let { dispatch: e, store: t } = useStore(),
		i = t.get();
	a(() => {
		initialize(i, e);
	}, []);
}
async function initialize(e, t) {
	if (!e.payment.loading && !e.payment.ready)
		try {
			t("payment/setup");
			let [e, i] = await Promise.all([
				import("./dropin.d1c7cc1b.js"),
				apiGetBraintreeSettings(),
			]);
			t("payment/setup:done", { module: e, settings: i });
		} catch (e) {
			t("payment/setup:error", e);
		}
}
let module$s = (e) => {
		e.on("payment/setup", (e) => ({
			payment: { ...e.payment, loading: !0, ready: !1 },
		})),
			e.on("payment/setup:done", (e, t) => {
				let { module: i, settings: n } = t;
				return {
					payment: {
						...e.payment,
						loading: !1,
						ready: !0,
						error: null,
						module: i,
						token: n.token,
						plan: n.plan,
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
			e.on("user/signIn", (t) => initialize(t, e.dispatch)),
			e.on("user/signUp", (t) => initialize(t, e.dispatch)),
			e.on("user/googleSignIn", (t) => initialize(t, e.dispatch)),
			e.on("payment/popup:show", (e) => ({
				payment: { ...e.payment, showMigrationPopup: !0 },
			})),
			e.on(
				"payment/popup:hide",
				(e) => (
					setCookie(MIGRATION_COOKIE, 2),
					{ payment: { ...e.payment, showMigrationPopup: !1 } }
				)
			);
	},
	currentExperiments = {
		cypress: [],
		drum_standard_notation: [],
		new_sound: [],
		sound_v4: [],
		paid_fingerings: !0,
		marked_as_learned_animation: !0,
		gpif_support: !0,
		state_persistence: !1,
		search_admin: !1,
		download_without_sign_in: !0,
		statistic_on_panel: !0,
	},
	legacyExperiments = ["drum_standard_notation", "new_sound"],
	isPowerOfTwo = (e) => (e & (e - 1)) == 0;
for (let name of Object.keys(currentExperiments)) {
	let e = currentExperiments[name];
	if (e && Array.isArray(e) && ((x = e.length) & (x - 1)) != 0)
		throw Error("Experiment variations can't be evenly distributed");
}
let EXPERIMENTS_COOKIE = "exp";
function getExperimentsByStatus(e, t) {
	return Object.keys(e).reduce(
		(i, n) => (e[n].status === t && (i[n] = e[n].segment), i),
		{}
	);
}
let module$r = (e) => {
	e.on("experiments/activate", (t, i) => {
		let { experimentName: n, payload: r = {}, sendEvent: a = !0 } = i;
		if ("bot" === t.device.type) return;
		let s = readJsonCookie("exp") || { active: {}, pending: {} };
		if (s.active[n] || !s.pending[n]) return;
		let o = { ...t.experiments },
			l = s.pending[n];
		o[n] = { status: "active", segment: t.isTestMode ? "off" : l };
		let u = {
			active: getExperimentsByStatus(o, "active"),
			pending: getExperimentsByStatus(o, "pending"),
		};
		return (
			setCookie("exp", JSON.stringify(u), !0),
			a
				? e.dispatch("curiosity/enteredExperiment", {
						experiment: n,
						payload: { ...r, Value: o[n].segment },
				  })
				: console.log(
						`Experiment ${n} activated with segment ${o[n].segment}. EE skipped.`
				  ),
			{ experiments: o }
		);
	});
};
async function loadFavorites(e, t) {
	try {
		e("favorites/load:processing");
		let i = await apiSongsFavorites(t);
		e("favorites/load:done", i);
	} catch (t) {
		console.error("favorites/load:error", t), e("favorites/load:error", t);
	} finally {
		e("meta/setWasFavoriteOnServerRender", void 0);
	}
}
let deleteFavoriteHelper = (e, t) => {
		let i = e.findIndex((e) => e.songId === t);
		return e.slice(0, i).concat(e.slice(i + 1));
	},
	addFavoriteHelper = (e, t) => sortSongs([...e, t]),
	module$q = (e) => {
		e.on("user/signIn", async () => loadFavorites(e.dispatch, void 0)),
			e.on("user/googleSignIn", async () => loadFavorites(e.dispatch, void 0)),
			e.on("favorites/add", async (t, i) => {
				let { songId: n, song: r } = i,
					a = nanoid();
				try {
					e.dispatch("favorites/add:processing", {
						songId: n,
						song: r,
						actionId: a,
					}),
						await apiSongsAddFavorite(n),
						e.dispatch("favorites/add:done", {
							songId: n,
							song: r,
							actionId: a,
						});
				} catch (t) {
					console.error(t),
						e.dispatch("favorites/add:error", {
							songId: n,
							song: r,
							actionId: a,
						});
				}
			}),
			e.on("favorites/add:processing", (e, t) => {
				let { song: i, actionId: n } = t;
				return {
					favorites: {
						...e.favorites,
						favorites: addFavoriteHelper(e.favorites.favorites, i),
						actionId: n,
						loading: !0,
					},
				};
			}),
			e.on("favorites/add:done", (e, t) => {
				let { actionId: i } = t;
				return e.favorites.actionId === i
					? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
					: null;
			}),
			e.on("favorites/add:error", (e, t) => {
				let { songId: i, actionId: n } = t;
				return e.favorites.actionId === n
					? {
							favorites: {
								...e.favorites,
								favorites: deleteFavoriteHelper(e.favorites.favorites, i),
								actionId: "",
								loading: !1,
							},
					  }
					: null;
			}),
			e.on("favorites/delete", async (t, i) => {
				let n = nanoid(),
					r = t.favorites.favorites.find((e) => e.songId === i);
				if (r)
					try {
						e.dispatch("favorites/delete:processing", {
							songId: i,
							song: r,
							actionId: n,
						}),
							await apiSongsDeleteFavorite(i),
							e.dispatch("favorites/delete:done", {
								songId: i,
								song: r,
								actionId: n,
							});
					} catch (t) {
						console.error(t),
							e.dispatch("favorites/delete:error", {
								songId: i,
								song: r,
								actionId: n,
							});
					}
			}),
			e.on("favorites/delete:processing", (e, t) => {
				let { songId: i, actionId: n } = t;
				return {
					favorites: {
						...e.favorites,
						favorites: deleteFavoriteHelper(e.favorites.favorites, i),
						actionId: n,
						loading: !0,
					},
				};
			}),
			e.on("favorites/delete:done", (e, t) => {
				let { actionId: i } = t;
				return e.favorites.actionId === i
					? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
					: null;
			}),
			e.on("favorites/delete:error", (e, t) => {
				let { song: i, actionId: n } = t;
				return e.favorites.actionId === n
					? {
							favorites: {
								...e.favorites,
								favorites: addFavoriteHelper(e.favorites.favorites, i),
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
				favorites: {
					...e.favorites,
					filters: changeDifficultyFilter(e.favorites.filters, t),
				},
			})),
			e.on("favorites/filter/instrument", (e, t) => ({
				favorites: {
					...e.favorites,
					filters: changeInstrumentFilter(e.favorites.filters, t),
				},
			})),
			e.on("favorites/filter/tuning", (e, t) => {
				let { instrument: i, tuning: n } = t;
				return {
					favorites: {
						...e.favorites,
						filters: changeTuningFilter(e.favorites.filters, i, n),
					},
				};
			}),
			e.on("favorites/filter/reset", (e) => ({
				favorites: { ...e.favorites, filters: DEFAULT_FILTERS_STATE },
			}));
	};
async function apiSetlists(e) {
	let t = E("/api/setlists"),
		i = await fetch(t, { credentials: "include" });
	N(i);
	let n = await i.json(),
		r = n.map((e) => ({
			name: e.name,
			id: e.id,
			songs: postprocess(sortSongs(e.songs)),
		}));
	return r;
}
async function apiCreateSetlist(e) {
	let t = E("/api/setlist"),
		i = await P(t, { name: e });
	return N(i), i.json();
}
async function apiRemoveSetlist(e) {
	let t = E(`/api/setlist/${e}`),
		i = await fetch(t, { method: "delete", credentials: "include" });
	return N(i), i.json();
}
async function apiRemoveSong(e, t) {
	let i = E(`/api/setlist/song/${e}`),
		n = await P(
			i,
			{ songId: t },
			{},
			{ method: "delete", credentials: "include" }
		);
	return N(n), n.json();
}
async function apiAddSong(e, t) {
	let i = E(`/api/setlist/song/${e}`),
		n = await P(i, { songId: t });
	return N(n), n.json();
}
let deleteSetlist = (e, t) => {
		let i = e.findIndex((e) => e.id === t);
		return e.slice(0, i).concat(e.slice(i + 1));
	},
	deleteSong = (e, t) => {
		let i = e.findIndex((e) => e.songId === t);
		return e.slice(0, i).concat(e.slice(i + 1));
	};
async function loadSetlists(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
	try {
		e("setlists/load:processing");
		let i = await apiSetlists(t);
		e("setlists/load:done", i);
	} catch (t) {
		console.error(t), e("setlists/load:error", t);
	}
}
async function createSetlist(e, t) {
	try {
		e("setlists/create:processing", { name: t });
		let i = await apiCreateSetlist(t);
		e("setlists/create:done", i.id);
	} catch (t) {
		console.error(t), e("setlists/create:error");
	}
}
async function removeSetlist(e, t, i) {
	try {
		e("setlists/remove:processing", { id: t, name: i }),
			await apiRemoveSetlist(t),
			e("setlists/remove:done");
	} catch (t) {
		console.error(t), loadSetlists(e);
	}
}
let module$p = (e) => {
		e.on("user/signIn", async () => loadSetlists(e.dispatch, void 0)),
			e.on("user/googleSignIn", async () => loadSetlists(e.dispatch, void 0)),
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
				let { createSetForm: i, loading: n } = t.setlists;
				!n &&
					i &&
					"" !== i.name.trim() &&
					(await createSetlist(e.dispatch, i.name)),
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
				let { createSetForm: i, loading: n } = t.setlists;
				return (
					!n &&
						i &&
						("" !== i.name.trim()
							? createSetlist(e.dispatch, i.name)
							: e.dispatch("setlists/cancelCreate")),
					null
				);
			}),
			e.on("setlists/cancelCreate", (e) => ({
				setlists: { ...e.setlists, createSetForm: void 0 },
			})),
			e.on("setlists/create:processing", (e, t) => {
				let { name: i } = t;
				return e.setlists.createSetForm
					? {
							setlists: {
								...e.setlists,
								loading: !0,
								setlists: [
									{ id: "new", name: i, songs: [] },
									...e.setlists.setlists,
								],
								createSetForm: void 0,
							},
					  }
					: null;
			}),
			e.on("setlists/create:done", (e, t) => {
				let i = [...e.setlists.setlists],
					n = i.find((e) => "new" === e.id);
				return (
					n && (n.id = t),
					{ setlists: { ...e.setlists, setlists: i, loading: !1 } }
				);
			}),
			e.on("setlists/create:error", (e) => ({
				setlists: {
					...e.setlists,
					setlists: deleteSetlist(e.setlists.setlists, "new"),
					loading: !1,
				},
			})),
			e.on("setlists/initRemove", (e, t) => {
				let { setlists: i } = e.setlists,
					n = i.find((e) => e.id === t);
				return n ? { setlists: { ...e.setlists, removeSetId: t } } : null;
			}),
			e.on("setlists/confirmRemove", (t, i) => {
				let { removeSetId: n, loading: r, setlists: a } = t.setlists;
				if (!r && n === i) {
					let t = a.find((e) => e.id === i);
					t && removeSetlist(e.dispatch, i, t.name);
				}
				return null;
			}),
			e.on("setlists/remove:processing", (e, t) => {
				let { id: i } = t;
				return {
					setlists: {
						...e.setlists,
						setlists: deleteSetlist(e.setlists.setlists, i),
						activeSetId: void 0,
						loading: !0,
					},
				};
			}),
			e.on("setlists/remove:done", (e) => ({
				setlists: { ...e.setlists, loading: !1 },
			})),
			e.on("setlists/removeSong", async (t, i) => {
				let { songId: n, setlistId: r } = i,
					{ setlists: a, loading: s } = t.setlists,
					o = a.find((e) => e.id === r);
				if (!s && o && o.songs) {
					let t = o.songs.find((e) => e.songId === n);
					if (t)
						try {
							e.dispatch("setlists/removeSong:processing", {
								song: t,
								songId: n,
								setlist: o,
								setlistId: r,
							}),
								await apiRemoveSong(r, n),
								e.dispatch("setlists/removeSong:done");
						} catch (t) {
							console.error(t), loadSetlists(e.dispatch);
						}
				}
			}),
			e.on("setlists/removeSong:processing", (e, t) => {
				let { songId: i, setlistId: n } = t,
					{ setlists: r } = e.setlists,
					a = r.find((e) => e.id === n);
				return a
					? ((a.songs = deleteSong(a.songs, i)),
					  { setlists: { ...e.setlists, setlists: [...r], loading: !0 } })
					: null;
			}),
			e.on("setlists/removeSong:done", (e) => ({
				setlists: { ...e.setlists, loading: !1 },
			})),
			e.on("setlists/addSong", async (t, i) => {
				let { song: n, setlistId: r } = i,
					{ setlists: a, loading: s } = t.setlists,
					o = a.find((e) => e.id === r);
				if (!s && o && !o.songs.find((e) => e.songId === n.songId))
					try {
						e.dispatch("setlists/addSong:processing", {
							song: n,
							setlistId: r,
							setlist: o,
						}),
							await apiAddSong(r, n.songId),
							e.dispatch("setlists/addSong:done");
					} catch (t) {
						console.error(t), loadSetlists(e.dispatch);
					}
			}),
			e.on("setlists/addSong:processing", (t, i) => {
				let { song: n, setlistId: r } = i,
					{ setlists: a, markedIds: s } = t.setlists,
					o = [...a],
					l = o.find((e) => e.id === r);
				if (l) {
					l.songs = [n, ...l.songs];
					let i = [...s];
					return (
						s.includes(r) ||
							(i.push(r),
							setTimeout(() => {
								e.dispatch("setlists/flushMark", r);
							}, 1500)),
						{
							setlists: {
								...t.setlists,
								setlists: o,
								markedIds: i,
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
				let { markedIds: i } = e.setlists;
				if (i.includes(t)) {
					let n = i.findIndex((e) => e === t);
					return {
						setlists: {
							...e.setlists,
							markedIds: i.slice(0, n).concat(i.slice(n + 1)),
						},
					};
				}
				return null;
			}),
			e.on("setlists/panelClick", (t) => {
				let { createSetForm: i } = t.setlists;
				return i && e.dispatch("setlists/confirmCreate"), null;
			});
	},
	hide = (e) => (e.layer.layer ? { layer: { layer: null } } : null),
	module$o = (e) => {
		e.on("layer/show", (e, t) => ({ layer: { layer: t } })),
			e.on("route/change", hide),
			e.on("layer/hide", hide);
	};
async function revisionsLoad(e, t, i) {
	try {
		e("revisions/load:processing", { songId: t });
		let n = await apiGetSongRevisions(t, i);
		e("revisions/load:done", { songId: t, revisions: n });
	} catch (n) {
		if (i.aborted) return;
		e("revisions/load:error", { songId: t, error: n });
	}
}
let module$n = (e) => {
		e.on("meta/load:processing", (e, t) => {
			let { songId: i } = t;
			if (e.revisions.songId && i !== e.revisions.songId)
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
				let { songId: i } = t;
				if (e.meta.songId === i)
					return {
						revisions: {
							...e.revisions,
							songId: i,
							revisions: null,
							isLoading: !0,
							isError: !1,
						},
					};
			}),
			e.on("revisions/load:done", (e, t) => {
				let { revisions: i, songId: n } = t;
				if (e.meta.songId === n)
					return {
						revisions: {
							...e.revisions,
							revisions: i,
							isLoading: !1,
							isError: !1,
						},
					};
			}),
			e.on("revisions/load:error", (e, t) => {
				let { error: i, songId: n } = t;
				if (e.meta.songId === n)
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
	MAX_SIZE = 500,
	module$m = (e) => {
		async function t(t, i) {
			if (i && !t.songs.songs.hasMore) return;
			let n = t.songs.pattern,
				r = t.songs.filters,
				a = 0,
				s = null;
			i &&
				t.songs.songs.pattern === t.songs.pattern &&
				filtersEquals(t.songs.songs.filters, t.songs.filters) &&
				(a = (s = t.songs.songs.list).length);
			let o = t.experiments.search_admin?.segment === "on",
				l = new AbortController$1();
			try {
				e.dispatch("songs/load:processing", { pattern: n, filters: r, ac: l });
				let i = await apiSongs(n, getFilterQueries(r), o, l.signal, 50, a);
				if (l.signal.aborted) return;
				let u = t.songs.defaultInstrument;
				isAnyFilterEnabled(r) ||
					(i = updateDefaultTrackToCurrentInstrument(i, u));
				let d = (s ? s.length : 0) + i.length,
					c = 50 === i.length && d < 500;
				e.dispatch("songs/load:done", {
					songs: s ? [...s, ...i] : i,
					hasMore: c,
					defaultInstrument: u,
					pattern: n,
					filters: r,
				}),
					J &&
						!s &&
						requestAnimationFrame(() => {
							scrollIntoTop("search-wrap", "top");
						});
			} catch (t) {
				if (l.signal.aborted) return;
				console.error(t),
					e.dispatch("songs/load:error", { error: t, pattern: n, filters: r });
			}
		}
		let i = (e) => t(e, !1);
		e.on("songs/load:processing", (e, t) => {
			let { pattern: i, filters: n, ac: r } = t,
				a = e.songs.loading;
			return (
				a && e.songs.loading.ac.abort(),
				{ songs: { ...e.songs, loading: { filters: n, pattern: i, ac: r } } }
			);
		}),
			e.on("songs/load:done", (e, t) => {
				let {
						songs: i,
						hasMore: n,
						pattern: r,
						filters: a,
						defaultInstrument: s,
					} = t,
					o = e.songs.loading;
				if (o && filtersEquals(o.filters, a) && o.pattern === r)
					return {
						songs: {
							...e.songs,
							songs: {
								list: i,
								defaultInstrument: s,
								hasMore: n,
								pattern: r,
								filters: a,
							},
							loading: null,
						},
					};
			}),
			e.on("songs/load:error", (e, t) => {
				let { error: i, pattern: n, filters: r } = t,
					a = e.songs.loading;
				if (a && filtersEquals(a.filters, r) && a.pattern === n)
					return { songs: { ...e.songs, loading: null } };
			}),
			e.on("songs/filter", (e, t) => {
				let { pattern: i, filters: n } = t;
				return { songs: { ...e.songs, pattern: i, filters: n } };
			}),
			e.on("songs/filter", i),
			e.on("songs/default", (e, t) => {
				let { instrumentId: i } = t,
					n = simplifyCurrentInstrument(i),
					r = e.songs.songs.list;
				return (
					isAnyFilterEnabled(e.songs.songs.filters) ||
						e.songs.songs.defaultInstrument === n ||
						(r = updateDefaultTrackToCurrentInstrument(e.songs.songs.list, n)),
					{
						songs: {
							...e.songs,
							songs: { ...e.songs.songs, list: r, defaultInstrument: n },
							defaultInstrument: n,
						},
					}
				);
			}),
			e.on("songs/more", (e) => t(e, !0)),
			e.on("songs/filter/pattern", (e, t) => ({
				songs: { ...e.songs, pattern: t },
			})),
			e.on("songs/filter/pattern", i),
			e.on("songs/filter/difficulty", (e, t) => ({
				songs: { ...e.songs, filters: { ...e.songs.filters, difficulty: t } },
			})),
			e.on("songs/filter/difficulty", i),
			e.on("songs/filter/instrument", (e, t) => ({
				songs: { ...e.songs, filters: { ...e.songs.filters, instrument: t } },
			})),
			e.on("songs/filter/instrument", i),
			e.on("songs/filter/tuning", (e, t) => {
				let { instrument: i, tuning: n } = t;
				return {
					songs: {
						...e.songs,
						filters: changeTuningFilter(e.songs.filters, i, n),
					},
				};
			}),
			e.on("songs/filter/tuning", i),
			e.on("songs/filter/reset", (e) => ({
				songs: { ...e.songs, filters: DEFAULT_FILTERS_STATE },
			})),
			e.on("songs/filter/reset", i),
			e.on("route/change", (t, i) => {
				let { route: n, query: r } = i;
				if (n?.page === "search") {
					let i = r?.pattern || "",
						n = {
							instrument: r?.inst
								? instrumentFromUrl(r.inst)
								: INSTRUMENT_FILTER_ALL,
							tunings: t.songs.filters.tunings,
							difficulty: t.songs.filters.difficulty,
						};
					(t.songs.songs.list.length &&
						t.songs.songs.pattern === i &&
						filtersEquals(t.songs.songs.filters, n)) ||
						e.dispatch("songs/filter", { pattern: i, filters: n });
				}
			});
	};
async function apiUploadSong(e, t) {
	let i = E("/api/song"),
		n = new FormData();
	n.append("file", e.file),
		n.append("title", e.title),
		n.append("artist", e.artist),
		n.append("difficulty", e.difficulty);
	let r = e.file.name.split(".").pop(),
		a = await fetch(i, {
			signal: t,
			method: "post",
			credentials: "include",
			body: n,
		});
	if (t && t.aborted) return { songSubmitted: !1, song: null, ext: r };
	await $(a), await B(a);
	let s = normalizeSong(await a.json());
	return { songSubmitted: !!a.ok, song: s, ext: r };
}
async function apiUploadRevision(e, t) {
	let i = E("/api/revision"),
		n = new FormData();
	n.append("file", e.file),
		n.append("songId", e.songId),
		n.append("summary", e.summary),
		e.force && n.append("force", e.force.toString());
	let r = e.file.name.split(".").pop(),
		a = await fetch(i, {
			signal: t,
			method: "post",
			credentials: "include",
			body: n,
		});
	if (t && t.aborted) return;
	await $(a), await B(a);
	let s = normalizeSongRevision(await a.json());
	return { revisionSubmitted: !!a.ok, revision: s, ext: r };
}
async function apiRevisionMergeEdits(e) {
	let t = E("/api/revision/merge-edits"),
		i = await P(t, e);
	await $(i), await B(i);
	let n = normalizeSongRevision(await i.json());
	return { revisionSubmitted: !!i.ok, revision: n, ext: "gp" };
}
let DEFAULT_STATE = {
	song: null,
	songSubmitted: !1,
	songError: null,
	revision: null,
	revisionSubmitted: !1,
	revisionError: null,
};
async function uploadSong(e, t, i) {
	try {
		let n = await apiUploadSong(t, i);
		if (i && i.aborted) return;
		if ((e("upload/song:uploaded", n), n.songSubmitted)) {
			let t = await apiWaitForSongMeta(n.song.songId);
			t && e("navigate", getUrl(t, 0));
		}
	} catch (t) {
		throw (e("upload/song:error", { error: t }), t);
	}
}
async function uploadRevision(e, t, i) {
	try {
		let n = await apiUploadRevision(t, i);
		if (i && i.aborted) return;
		if ((e("upload/revision:uploaded", n), n.revisionSubmitted)) {
			let t = await apiWaitForSongMeta(
				n.revision.songId,
				n.revision.revisionId
			);
			t && e("navigate", getUrl(t, 0, t.revisionId));
		}
	} catch (t) {
		throw (e("upload/revision:error", { error: t }), t);
	}
}
let module$l = (e) => {
		e.on("upload/song:uploaded", (e, t) => {
			let { songSubmitted: i, song: n } = t;
			return {
				uploads: { ...e.uploads, songError: null, songSubmitted: i, song: n },
			};
		}),
			e.on("upload/reset", () => ({ uploads: DEFAULT_STATE })),
			e.on("upload/song:error", (e, t) => {
				let { error: i } = t;
				return { uploads: { ...e.uploads, songError: i } };
			}),
			e.on("upload/revision:uploaded", (e, t) => {
				let { revisionSubmitted: i, revision: n } = t;
				return {
					uploads: {
						...e.uploads,
						revisionError: null,
						revisionSubmitted: i,
						revision: n,
					},
				};
			}),
			e.on("upload/revision:merged", async (t, i) => {
				let { revisionSubmitted: n, revision: r } = i;
				if (n) {
					let t = await apiWaitForSongMeta(r.songId, r.revisionId);
					t && e.dispatch("navigate", getUrl(t, 0, t.revisionId)),
						e.dispatch("curiosity/event", {
							event: "Submitted revision",
							Title: t.title,
							Artist: t.artist,
							Via: "Editor",
							"Song id": t.songId.toString(),
						});
				}
			}),
			e.on("upload/revision:error", (e, t) => {
				let { error: i } = t;
				return { uploads: { ...e.uploads, revisionError: i } };
			});
	},
	module$k = (e) => {
		e.on("demo/activate", (e) => ({
			demo: { active: !0, enabled: e.meta.songId === Q },
		})),
			e.on("meta/load:processing", (e, t) => {
				let { songId: i } = t;
				return e.demo.active
					? i === Q
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
})(Attractor || (Attractor = {}));
let SEEN_ATTRACTORS = "hasSeenAttractors",
	BLOCKED_ATTRACTORS = "blockedAttractors",
	ALLOWED_ON_UT = [Attractor.UT_RECORDER],
	DEFAULT_START_OPTIONS = {
		ignoreSingleAppearance: !1,
		ignoreDailyTimespan: !1,
	};
function hasNotBeenRecently(e) {
	let t = new Date(Date.now() - 864e5);
	return new Date(e) <= t;
}
function seenAttractor(e) {
	let t =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: new Date().toUTCString(),
		i = R(SEEN_ATTRACTORS) || {};
	(i[e] = t), C(SEEN_ATTRACTORS, i);
}
function stopAttractor(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1]
			? arguments[1]
			: new Date().toUTCString();
	window.__ACTIVE_ATTRACTOR__ === e &&
		(seenAttractor(e, t), (window.__ACTIVE_ATTRACTOR__ = null));
}
function getSeenAttractors() {
	return R(SEEN_ATTRACTORS) || {};
}
function getBlockedAttractors() {
	return R("blockedAttractors") || {};
}
function startAttractor(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1]
			? arguments[1]
			: DEFAULT_START_OPTIONS;
	if (
		(console.log("attractor:", e, (t = { ...DEFAULT_START_OPTIONS, ...t })),
		-1 !== window.location.search.indexOf("ut=on") && ALLOWED_ON_UT.includes(e))
	)
		return (window.__ACTIVE_ATTRACTOR__ = e), !0;
	if (window.__ACTIVE_ATTRACTOR__) return e === window.__ACTIVE_ATTRACTOR__;
	let i = !0,
		n = getSeenAttractors(),
		r = Object.keys(n);
	return (
		t.ignoreDailyTimespan ||
			(i = r.reduce((e, t) => e && hasNotBeenRecently(n[t]), i)),
		!t.ignoreSingleAppearance && n[e] && (i = !1),
		i && (window.__ACTIVE_ATTRACTOR__ = e),
		i
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
})(PromoTypes || (PromoTypes = {}));
let PROMO_ATTRACTORS_MAP = new Map([
		["slowdown", Attractor.PROMO_CONTEXT_SLOWDOWN],
		["loop", Attractor.PROMO_CONTEXT_LOOP],
		["no ads", Attractor.PROMO_CONTEXT_NO_ADS],
		["print", Attractor.PROMO_CONTEXT_PRINT],
		["mute", Attractor.PROMO_CONTEXT_MUTE],
		["solo", Attractor.PROMO_CONTEXT_SOLO],
		["pitch shift", Attractor.PROMO_CONTEXT_RETUNE],
	]),
	UNSUBSCRIBED_FROM_PROMO = "hasUnsubscribedFromPromo",
	RETUNE_TIMEOUT = 1e4,
	PRINT_TIMEOUT = 2e4,
	TESTS_TIMEOUT = 2e3;
function hasBeenShownRecently(e) {
	let t = new Date(Date.now() - 6048e5);
	return new Date(e) >= t;
}
let shouldSkipAttractor = (e, t) => {
	if (t.isTestMode && "promo" !== t.query.cyAllow) return !0;
	let i = R(UNSUBSCRIBED_FROM_PROMO),
		n = true,
		r = !!t.promo.feature,
		a = 0 === t.curiosity.vpt10.count,
		s = i || n || r || a;
	return s;
};
function filterSlowdownAndLoopTriggerEvents(e) {
	let { position: t } = e.cursor,
		i = e.part.current,
		n = [
			...e.promo.playbackPositionEvents.filter(
				(e) => e.time > Date.now() - 12e4
			),
		],
		r = 0;
	if (i) {
		let e = findLayoutByTimestamp(i, t.cursor, "left"),
			a = `${i.revisionId}:${i.partId}:${e.measureLayout.measure.index}`;
		n.push({ time: Date.now(), key: a }),
			(r = n.filter((e) => e.key === a).length);
	}
	return { events: n, relatedEvents: r };
}
function filterSoloTriggerEvents(e) {
	let t = e.part.current,
		i = "other";
	t &&
		(isGuitar(t.instrumentId) && (i = "guitar"),
		isBassGuitar(t.instrumentId) && (i = "bass"),
		isDrums$1(t.instrumentId) && (i = "drums"));
	let n = [...e.promo.playbackTypeEvents, { time: Date.now(), type: i }],
		r = n.filter((e) => "bass" === e.type).length;
	return { events: n, bassEvents: r };
}
function fireAttractor(e) {
	let t = getSeenAttractors(),
		i = getBlockedAttractors();
	return (
		!(i[e] || hasBeenShownRecently(t[e])) &&
		startAttractor(e, { ignoreSingleAppearance: !0 })
	);
}
function stopPlaybackOnMobile(e, t) {
	e.device.isPhone &&
		e.player.canPlay &&
		e.player.shouldPlay &&
		t("player/stopPlay");
}
function showSlowdownPromo(e, t) {
	let i = Attractor.PROMO_CONTEXT_SLOWDOWN,
		n = !e.player.shouldPlay || !e.player.canPlay;
	if (n || shouldSkipAttractor(i, e)) return;
	let r = e.promo.feature,
		{ events: a, relatedEvents: s } = filterSlowdownAndLoopTriggerEvents(e);
	return (
		s >= 3 &&
			fireAttractor(i) &&
			((r = "slowdown"), stopPlaybackOnMobile(e, t)),
		{ promo: { ...e.promo, playbackPositionEvents: a, feature: r } }
	);
}
function showLoopPromo(e, t) {
	let i = Attractor.PROMO_CONTEXT_LOOP,
		n = !e.player.shouldPlay || !e.player.canPlay;
	if (n || shouldSkipAttractor(i, e)) return;
	let r = getSeenAttractors();
	if (!r[Attractor.PROMO_CONTEXT_SLOWDOWN]) return;
	let a = e.promo.feature,
		{ events: s, relatedEvents: o } = filterSlowdownAndLoopTriggerEvents(e);
	return (
		o >= 3 && fireAttractor(i) && ((a = "loop"), stopPlaybackOnMobile(e, t)),
		{ promo: { ...e.promo, playbackPositionEvents: s, feature: a } }
	);
}
function showNoAdsPromo(e, t) {
	let i = Attractor.PROMO_CONTEXT_NO_ADS;
	if (shouldSkipAttractor(i, e)) return;
	let n = e.screen.viewport.height,
		r = e.device.isPhone ? 740 : 900,
		a = e.promo.feature;
	return (
		n < r && fireAttractor(i) && ((a = "no ads"), stopPlaybackOnMobile(e, t)),
		{ promo: { ...e.promo, feature: a } }
	);
}
function showPrintPromo(e) {
	let t = Attractor.PROMO_CONTEXT_PRINT;
	if (shouldSkipAttractor(t, e)) return;
	let i = fireAttractor(t) ? "print" : e.promo.feature;
	return { promo: { ...e.promo, feature: i } };
}
function showMutePromo(e) {
	let t = Attractor.PROMO_CONTEXT_MUTE;
	if (shouldSkipAttractor(t, e)) return;
	let i = e.promo.feature,
		n = e.promo.halfPlayed + 1;
	return (
		n >= 2 && fireAttractor(t) && (i = "mute"),
		{ promo: { ...e.promo, halfPlayed: n, feature: i } }
	);
}
function showSoloPromo(e, t) {
	let i = Attractor.PROMO_CONTEXT_SOLO,
		n = !e.player.shouldPlay || !e.player.canPlay;
	if (n || shouldSkipAttractor(i, e)) return;
	let r = e.promo.feature,
		{ events: a, bassEvents: s } = filterSoloTriggerEvents(e);
	return (
		5 === s && fireAttractor(i) && ((r = "solo"), stopPlaybackOnMobile(e, t)),
		{ promo: { ...e.promo, playbackTypeEvents: a, feature: r } }
	);
}
function showRetunePromo(e) {
	let t = Attractor.PROMO_CONTEXT_RETUNE;
	if (shouldSkipAttractor(t, e)) return;
	let i = e.promo.feature,
		n = e.part.current;
	if (n) {
		let e = n.tuning && suggestStandardTuning(n.instrumentId, n.tuning),
			r = e && 0 !== e.pitch;
		r && fireAttractor(t) && (i = "pitch shift");
	}
	return { promo: { ...e.promo, feature: i } };
}
let module$j = (e) => {
		let t = !R(UNSUBSCRIBED_FROM_PROMO);
		if (t) {
			let t, n, r;
			function i(t) {
				if (!shouldSkipAttractor(Attractor.PROMO_CONTEXT_MUTE, t)) {
					if (t.player.shouldPlay && t.player.canPlay) {
						let i = t.part.current;
						if (!i) return;
						let n = i.timestamps[i.timestamps.length - 1];
						n > 2e4 &&
							e.dispatch("promo/mute:start", { delay: Math.floor(n / 3) });
					} else e.dispatch("promo/mute:clear");
				}
			}
			e.on("cursor/move", (t) => showSlowdownPromo(t, e.dispatch)),
				e.on("player/togglePlay", (t) => showSlowdownPromo(t, e.dispatch)),
				e.on("cursor/move", (t) => showLoopPromo(t, e.dispatch)),
				e.on("player/togglePlay", (t) => showLoopPromo(t, e.dispatch)),
				e.on("curiosity/vpt10", (t) => showNoAdsPromo(t, e.dispatch)),
				e.on("meta/load:done", (i) => {
					if ("tab" === i.route.page && !i.device.isPhone) {
						clearTimeout(t);
						let n = i.isTestMode ? 2e3 : 2e4;
						t = setTimeout(() => e.dispatch("promo/print:fire"), n);
					}
				}),
				e.on("route/change", () => clearTimeout(t)),
				e.on("promo/print:fire", (e) => showPrintPromo(e)),
				e.on("player/togglePlay", (e) => i(e)),
				e.on("promo/mute:start", (t, i) => {
					let { delay: r } = i;
					clearTimeout(n),
						(n = setTimeout(() => e.dispatch("promo/mute:fire"), r));
				}),
				e.on("route/change", () => clearTimeout(n)),
				e.on("promo/mute:clear", () => clearTimeout(n)),
				e.on("promo/mute:fire", (e) => showMutePromo(e)),
				e.on("cursor/move", (t) => showSoloPromo(t, e.dispatch)),
				e.on("player/togglePlay", (t) => showSoloPromo(t, e.dispatch)),
				e.on("meta/load:done", (t) => {
					if ("tab" === t.route.page) {
						clearTimeout(r);
						let i = t.isTestMode ? 2e3 : 1e4;
						r = setTimeout(() => e.dispatch("promo/retune:fire"), i);
					}
				}),
				e.on("route/change", () => clearTimeout(r)),
				e.on("promo/retune:fire", (e) => showRetunePromo(e)),
				e.on("promo/dismiss", (e) => {
					let t = PROMO_ATTRACTORS_MAP.get(e.promo.feature);
					return (
						t && stopAttractor(t), { promo: { ...e.promo, feature: null } }
					);
				}),
				e.on(
					"promo/unsubscribe",
					(e) => (
						C(UNSUBSCRIBED_FROM_PROMO, new Date().toUTCString()),
						{ promo: { ...e.promo, feature: null } }
					)
				);
		}
	},
	defaultState = () => ({
		isDeleted: !1,
		editor: { canDelete: !1, processingDeletion: !1 },
	}),
	checkPermissions = (e) => {
		let { user: t } = e,
			i = !1;
		if (t.isLoggedIn && e.meta.current) {
			let { editors: n } = e.meta.current;
			i =
				can(t, b.MANAGE_SONGS) ||
				(n && 1 === n.length && n[0] === t.profile.id);
		}
		return { isDeleted: !1, editor: { ...e.editor, canDelete: i } };
	};
async function deleteTab(e, t) {
	try {
		let i = new AbortController$1(),
			n = await U(t, i.signal);
		if (n.success) e("editor/delete:done", { meta: t });
		else {
			let t = Error("Oops, something went wrong. Please try again later.");
			e("editor/delete:error", t);
		}
		return i.abort.bind(i);
	} catch (t) {
		e("editor/delete:error", t);
	}
}
async function generate(e, t) {
	try {
		let i = new AbortController$1();
		if (t === I.V1)
			throw Error(
				`Generating audio for version ${t} is not supported with this API`
			);
		await G(e, t, i.signal), J && alert("Done!");
	} catch (e) {
		console.error(e), alert(`Error: ${e.message}`);
	}
}
async function updateAudio(e, t) {
	try {
		await z(e, t), J && alert("Done!");
	} catch (e) {
		console.error(e), alert(`Error: ${e.message}`);
	}
}
let module$i = (e) => {
	e.on("meta/load:done", checkPermissions),
		e.on("user/init", checkPermissions),
		e.on("user/signIn", checkPermissions),
		e.on("user/googleSignIn", checkPermissions),
		e.on("user/signUp", checkPermissions),
		e.on("user/signOut", defaultState),
		e.on(
			"editor/delete",
			(t, i) => (
				deleteTab(e.dispatch, i),
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
			let i = t.message;
			return (
				window && window.alert(`Error: ${i}`),
				{
					isDeleted: !0 === e.isDeleted,
					editor: { ...e.editor, processingDeletion: !1 },
				}
			);
		}),
		e.on("editor/sound:toggle", (t, i) => {
			let { version: n } = i;
			t.meta.current &&
				F(e, t.meta.songId, t.meta.partId, t.meta.current.revisionId, n);
		}),
		e.on("editor/sound:generate", (e, t) => {
			let { version: i } = t;
			e.meta.current && generate(e.meta.current.revisionId, i);
		}),
		e.on("editor/sound:update", (e, t) => {
			let { version: i } = t;
			e.meta.current && updateAudio(e.meta.current.revisionId, i);
		});
};
function detectTabFeatures(e) {
	let t = {};
	for (let i of (e.voices > 1 && (t.polyphony = !0), e.measures))
		for (let e of (i.repeat && (t.repeat = !0),
		i.tripletFeel && (t.swingRhythm = !0),
		i.alternateEnding && (t.alternateEnding = !0),
		i.voices))
			if (!e.rest) {
				for (let i of e.beats)
					if (
						(i.letRing && (t.letRing = !0),
						3 === i.tuplet && (t.triplet = !0),
						i.dotted && (t.dot = !0),
						(i.upStroke || i.downStroke) && (t.upDownStroke = !0),
						i.palmMute && (t.palmMute = !0),
						i.chord && (t.chord = !0),
						i.wideVibrato && (t.wideVibrato = !0),
						i.tapping && (t.tapping = !0),
						i.notes)
					)
						for (let e of i.notes)
							e.hp && ((t.hammerOn = !0), (t.pullOff = !0)),
								e.tie && (t.tie = !0),
								e.bend &&
									(e.bend.points[0].tone > e.bend.points[1].tone &&
										(t.releaseBend = !0),
									(t.bend = !0)),
								e.ghost && (t.ghostNote = !0),
								e.dead && (t.deadNote = !0),
								e.vibrato && (t.vibrato = !0),
								e.rightSlide &&
									("legato" !== e.rightSlide
										? (t.legatoSlide = !0)
										: (t.slide = !0)),
								"natural" === e.harmonic && (t.naturalHarmonic = !0),
								"pinch" === e.harmonic && (t.pinchHarmonic = !0),
								1 === e.accentuated && (t.accented = !0),
								2 === e.accentuated && (t.heavyAccented = !0),
								e.staccato && (t.staccato = !0),
								e.tremolo && (t.tremolo = !0);
			}
	return t;
}
function detectFeatures(e, t, i) {
	if (!t) return !1;
	let n = e;
	return (
		void 0 === n &&
			((n = detectTabFeatures(t)), i("tabFeatures/set", { features: n })),
		n
	);
}
let module$h = (e) => {
		e.on("tabFeatures/set", (e, t) => {
			let { features: i } = t;
			return { tabFeatures: i };
		}),
			e.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
	},
	EVENTS = [
		"touchstart",
		"click",
		"scroll",
		"mousewheel",
		"mousemove",
		"mousedown",
	],
	cleanup = (e) => e && e.replace(/["'=!+#*~;^()<>[\],&]/gi, "");
async function loadAds() {
	return "off" === window.__ADS__
		? null
		: Promise.all([
				loadScript(
					"https://www.googletagservices.com/tag/js/gpt.js",
					"__LOADED_GTP__"
				).catch(() => {}),
				loadScript(
					"https://cdn-b.notsy.io/sng/" +
						("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
					"__LOADED_NOTSY__"
				),
		  ]);
}
function fireAds(e) {
	let {
		route: t,
		block: i,
		options: n,
		personalization: r,
		songId: a,
		artist: s,
		song: o,
		device: l,
	} = e;
	if (!n.isForced && t.page !== n.page) return;
	let u = [];
	n.isTargeted &&
		(a && u.push(["songID", a]),
		s && u.push(["artist", s]),
		o && u.push(["song", o]));
	let d = { page: i, npa: !r, targeting: u, gdpr: l.hasGDPR };
	(l.hasGDPR && l.hasCCPA) || (d.country = l.country), window.notsyInit(d);
}
async function initAds(e) {
	try {
		await loadAds(),
			e("notsy/load:done", { loaded: window.__LOADED_NOTSY__ || !1 });
	} catch (t) {
		e("notsy/load:error");
	}
}
function useNotsy(e, t) {
	let {
			dispatch: n,
			ads: r,
			meta: s,
			chords: o,
			route: l,
			routeContent: u,
		} = useStore("ads", "meta", "chords", "route", "routeContent"),
		d = window.__HAS_BEEN_SEEN_BEFORE__ || k.hasFirstActivity,
		[c, p] = i(d);
	a(() => {
		if (!c) {
			let e = () => {
				p(!0), EVENTS.forEach((t) => window.removeEventListener(t, e));
			};
			return (
				EVENTS.forEach((t) => window.addEventListener(t, e)),
				() => EVENTS.forEach((t) => window.removeEventListener(t, e))
			);
		}
	}, [c]),
		a(() => {
			if (!c || r.notsyFailed) return;
			if (!r.notsyLoaded) {
				n("notsy/load");
				return;
			}
			if ("tab" === l.page) {
				let { songId: e } = l;
				if (s.loading || +e !== s.songId) return;
			}
			if ("chords" === l.page) {
				let { songId: e } = l;
				if (o.loading || +e !== o.songId) return;
			}
			let i = {
				route: l,
				block: e,
				options: t,
				personalization: !0,
				songId: 0,
				artist: "",
				song: "",
			};
			"tab" === u.page &&
				((i.artist = cleanup(s.current && s.current.artist)),
				(i.song = cleanup(s.current && s.current.title)),
				(i.songId = s.songId)),
				"chords" === u.page &&
					((i.artist = cleanup(o.current && o.current.artist)),
					(i.song = cleanup(o.current && o.current.title)),
					(i.songId = o.songId)),
				n("notsy/fire", i);
		}, [r, e, c, s, o, t, l, u]);
}
let module$g = (e) => {
	e.on("notsy/load", () => initAds(e.dispatch)),
		e.on("notsy/load:done", (e, t) => {
			let { loaded: i } = t;
			return { ads: { ...e.ads, notsyLoaded: i, notsyFailed: !i } };
		}),
		e.on("notsy/load:error", (e) => ({
			ads: { ...e.ads, notsyLoaded: !1, notsyFailed: !0 },
		})),
		e.on("notsy/fire", (e, t) => {
			fireAds({ ...t, device: e.device });
		});
};
function mergeAudioStreams(e, t) {
	let i = new AudioContext(),
		n = i.createMediaStreamDestination(),
		r = !1,
		a = !1;
	if (e && e.getAudioTracks().length > 0) {
		let t = i.createGain();
		(t.gain.value = 0.7),
			i.createMediaStreamSource(e).connect(t).connect(n),
			(r = !0);
	}
	return (
		t &&
			t.getAudioTracks().length > 0 &&
			(i.createMediaStreamSource(t).connect(n), (a = !0)),
		r || a ? n.stream.getAudioTracks() : []
	);
}
let waitForOpenConnection = (e) =>
		new Promise((t, i) => {
			let n = 0,
				r = setInterval(() => {
					n > 9
						? (clearInterval(r), i(Error("Max number of attempts")))
						: e.readyState === e.OPEN && (clearInterval(r), t()),
						n++;
				}, 200);
		}),
	sendMessage = async (e, t) => {
		e.readyState !== e.OPEN && (await waitForOpenConnection(e)), e.send(t);
	},
	CURIOSITY_URL = "wss://curiosity.songsterr.com/ut/";
function safeStop(e) {
	try {
		e.stop();
	} catch (e) {
		console.error(e);
	}
}
function safeClose(e) {
	try {
		e.close();
	} catch (e) {
		console.error(e);
	}
}
class Recorder {
	constructor(e) {
		(this.state = "ready"),
			(this.handlers = e),
			(this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
			(this.socket.onclose = this.onSocketClose),
			(this.socket.onerror = this.onError);
	}
	cleanup() {
		this.audioVideoStream &&
			this.audioVideoStream.getTracks().forEach(safeStop),
			this.voiceStream && this.voiceStream.getTracks().forEach(safeStop);
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
			safeClose(this.socket),
			this.handlers.onError(e));
	};
	onTrackEnded = () => {
		("ready" === this.state || "active" === this.state) &&
			((this.state = "stopped"),
			this.cleanup(),
			safeClose(this.socket),
			this.handlers.onTurnedOff());
	};
	async connect(e, t, i, n) {
		try {
			for (let e of ((this.audioVideoStream =
				await navigator.mediaDevices.getDisplayMedia({ audio: !0, video: !0 })),
			this.audioVideoStream.getTracks()))
				e.onended = this.onTrackEnded;
			for (let e of ((this.voiceStream =
				await navigator.mediaDevices.getUserMedia({ video: !1, audio: !0 })),
			this.voiceStream.getTracks()))
				e.onended = this.onTrackEnded;
			let r = new RTCPeerConnection(null),
				a = new MediaStream([
					...this.audioVideoStream.getVideoTracks(),
					...mergeAudioStreams(this.audioVideoStream, this.voiceStream),
				]);
			for (let e of a.getTracks()) r.addTrack(e, a);
			let s = await r.createOffer({
				OfferToReceiveAudio: !1,
				OfferToReceiveVideo: !1,
			});
			r.setLocalDescription(s),
				(this.socket.onmessage = async (e) => {
					try {
						let t = JSON.parse(e.data);
						await r.setRemoteDescription(
							new RTCSessionDescription({ type: "answer", sdp: t.answer })
						),
							(this.state = "active"),
							this.handlers.onReady();
					} catch (e) {
						this.onError(e);
					}
				});
			let o = {};
			for (let e of Object.keys(i))
				"active" === i[e].status && (o[e] = i[e].segment);
			await sendMessage(
				this.socket,
				JSON.stringify({
					cmd: "OFFER",
					offer: s.sdp,
					ticket: e,
					email: t,
					properties: o,
					stage: window.__STAGE__,
					isAdditional: n,
				})
			);
		} catch (e) {
			this.onError(e);
		}
	}
	async sendEmail(e) {
		await sendMessage(this.socket, JSON.stringify({ cmd: "EMAIL", email: e }));
	}
	stop() {
		("ready" === this.state || "active" === this.state) &&
			((this.state = "stopped"),
			this.cleanup(),
			safeClose(this.socket),
			this.handlers.onStop());
	}
}
async function getTicket(e) {
	let t = await fetch(E(`/actions/usertest/${e}/ticket`), { method: "POST" });
	return N(t), t.json();
}
async function getUsertestScript(e) {
	let t = await fetch(E(`/api/usertest/${e}`));
	return N(t), t.json();
}
async function deleteTicket(e) {
	let t = JSON.stringify({ token: e.token }),
		i = await fetch(E("/actions/usertest/ticket"), {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: t,
		});
	return N(i), i.json();
}
function deleteIdleTicket(e) {
	try {
		navigator.sendBeacon("/actions/usertest/ticket/idle", e.token);
	} catch (e) {
		console.log(e);
	}
}
let STAGE_HIDDEN = "hidden",
	STAGE_INTRO = "intro",
	STAGE_QUESTIONS = "questions",
	STAGE_FAREWELL_NOT_CHOSEN = "not_chosen",
	STAGE_EMAIL_REQUEST = "email",
	STAGE_FEEDBACK_START = "feedback",
	STAGE_START = "start",
	STAGE_INSTRUCTIONS = "instructions",
	STAGE_RESTART = "restart",
	STAGE_SURVEY = "survey",
	STAGE_FAREWELL = "farewell";
function cancelIdleScrenerTimer() {
	window.removeEventListener("visibilitychange", windowHideHandler),
		idleUTTimeout && (clearTimeout(idleUTTimeout), (idleUTTimeout = null));
}
let UT_ATTRACTOR_OPTIONS = {
	ignoreDailyTimespan: !0,
	ignoreSingleAppearance: !0,
};
async function acquireTicket(e, t) {
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
	try {
		let n = await getTicket(t);
		try {
			let r = await getUsertestScript(t);
			return (
				e("ut/ticket", { ticket: n, script: r }),
				(idleUTTimeout = setTimeout(() => {
					e("ut/idle");
				}, 6e4 + i)),
				(windowHideHandler = () => {
					let t;
					document.hidden
						? (t = setTimeout(() => {
								deleteIdleTicket(n),
									e("ut/idle"),
									window.removeEventListener(
										"visibilitychange",
										windowHideHandler
									);
						  }, 3e4))
						: clearTimeout(t);
				}),
				window.addEventListener("visibilitychange", windowHideHandler),
				{ ticket: n, script: r }
			);
		} catch (t) {
			await dismissTicket(e, n);
		}
	} catch (e) {
		console.error(e);
	}
}
async function dismissTicket(e, t) {
	try {
		await deleteTicket(t), e("ut/ticket:dismiss");
	} catch (e) {
		console.error(e);
	}
}
function stopRecording(e) {
	try {
		let { recorder: t, ticket: i, script: n } = e.get().ut;
		t && t.stop(),
			e.dispatch("curiosity/event", {
				event: "UT Recorded",
				name: n.name,
				URL: i.urlToGet,
			});
	} catch (e) {
		console.error(e);
	}
}
async function startRecording(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		i = e.get();
	if ("ready" === i.ut.recorderState || "failed" === i.ut.recorderState)
		try {
			let n = new Recorder({
				onReady: () => e.dispatch("ut/start:done"),
				onStop: () => e.dispatch("ut/stop:done"),
				onClose: () => e.dispatch("ut/stop:closed"),
				onTurnedOff: () => e.dispatch("ut/stop:turnedOff"),
				onError: (t) => e.dispatch("ut/error", t),
			});
			e.dispatch("ut/start:processing", n), (i = e.get());
			let r = i.user,
				a =
					i.ut.email ||
					(r.isLoggedIn ? r.profile.email : "anonymous@songsterr.com");
			await n.connect(i.ut.ticket, a, i.experiments, t);
		} catch (t) {
			console.error(t), e.dispatch("ut/error", t);
		}
}
function reloadAndStart(e, t) {
	storeUT(e, t);
	let i = t.startUrl || "/";
	(i = i.includes("?") ? `${i}&ut=on` : `${i}?ut=on`),
		(window.location.href = i);
}
function storeUT(e, t) {
	H.set("utTicket", e), H.set("utScript", t);
}
function retrieveUT() {
	let e = H.get("utTicket"),
		t = H.get("utScript");
	return { ticket: e, script: t };
}
let module$f = (e) => {
		e.on("@init", () => ({
			ut: {
				recorderState: "ready",
				recorder: void 0,
				ticket: void 0,
				script: void 0,
				stage: STAGE_HIDDEN,
				email: void 0,
				steps: {
					[STAGE_QUESTIONS]: 0,
					[STAGE_INSTRUCTIONS]: 0,
					[STAGE_SURVEY]: 0,
				},
				isAdditional: !1,
				isClosing: !1,
				isHidden: !1,
			},
		})),
			e.on("ut/close", (e, t) => ({ ut: { ...e.ut, isClosing: t } })),
			e.on("ut/hide", (e, t) => ({ ut: { ...e.ut, isHidden: t } })),
			e.on("ut/ticket", (e, t) => {
				let { ticket: i, script: n } = t;
				return { ut: { ...e.ut, ticket: i, script: n } };
			}),
			e.on("ut/ticket:dismiss", (e) => ({ ut: { ...e.ut, ticket: void 0 } })),
			e.on("ut/email", (t, i) => {
				let { name: n } = t.ut.script;
				return (
					e.dispatch("curiosity/event", {
						event: "UT Email Submitted",
						name: n,
						email: i,
					}),
					t.ut.recorder?.sendEmail(i),
					{ ut: { ...t.ut, email: i, stage: STAGE_INSTRUCTIONS } }
				);
			}),
			e.on("ut/continue", (t, i) => {
				if (i) {
					e.dispatch("ut/load", i), storeUT();
					return;
				}
				let { ticket: n, script: r } = retrieveUT();
				if (n && r) {
					if (!startAttractor(Attractor.UT_RECORDER, UT_ATTRACTOR_OPTIONS))
						return;
					return (
						e.dispatch("curiosity/event", {
							event: "UT Recording Requested",
							name: r.name,
						}),
						{ ut: { ...t.ut, ticket: n, script: r, stage: STAGE_START } }
					);
				}
			}),
			e.on("ut/load", async (t, i) => {
				let n = await acquireTicket(e.dispatch, i);
				e.dispatch("curiosity/event", {
					event: "UT Recording Requested",
					name: i,
				}),
					n && n?.script && e.dispatch("ut/load:done", STAGE_START);
			}),
			e.on("ut/feedbackLoad", async (t, i) => {
				let n = await acquireTicket(e.dispatch, i);
				n && n.script && e.dispatch("ut/load:done", STAGE_FEEDBACK_START);
			}),
			e.on("ut/load:done", (e, t) => {
				if (startAttractor(Attractor.UT_RECORDER, UT_ATTRACTOR_OPTIONS))
					return { ut: { ...e.ut, stage: t } };
			}),
			e.on("ut/start", (t) => {
				cancelIdleScrenerTimer(), startRecording(e, t.ut.isAdditional);
			}),
			e.on("ut/start:done", (t) => {
				let i,
					{ ut: n, user: r } = t;
				storeUT();
				let { name: a, emailRequest: s } = n.script;
				return (
					!s || r.isLoggedIn
						? ((i = STAGE_INSTRUCTIONS),
						  e.dispatch("curiosity/event", {
								event: "UT Instructions Shown",
								name: a,
						  }))
						: ((i = STAGE_EMAIL_REQUEST),
						  e.dispatch("curiosity/event", {
								event: "UT Email Requested",
								name: a,
						  })),
					{
						ut: {
							...n,
							recorderState: "active",
							recorder: n.recorder,
							stage: i,
						},
					}
				);
			}),
			e.on("ut/start:processing", (e, t) => ({
				ut: { ...e.ut, recorderState: "starting", recorder: t },
			})),
			e.on("ut/terminate", (t) => {
				let { ut: i } = t;
				switch ((stopAttractor(Attractor.UT_RECORDER), i.stage)) {
					case STAGE_INTRO:
					case STAGE_QUESTIONS:
						dismissTicket(e.dispatch, i.ticket);
						break;
					case STAGE_START:
						dismissTicket(e.dispatch, i.ticket),
							storeUT(),
							e.dispatch("navigate", "/");
						break;
					case STAGE_EMAIL_REQUEST:
					case STAGE_INSTRUCTIONS:
					case STAGE_RESTART:
					case STAGE_SURVEY:
						dismissTicket(e.dispatch, i.ticket),
							stopRecording(e),
							e.dispatch("navigate", "/");
				}
				return (
					e.dispatch("curiosity/event", {
						event: "UT Session Finished",
						name: i?.script.name,
					}),
					{
						ut: {
							recorderState: "ready",
							recorder: void 0,
							ticket: void 0,
							script: void 0,
							stage: STAGE_HIDDEN,
							email: void 0,
							steps: {
								[STAGE_QUESTIONS]: 0,
								[STAGE_INSTRUCTIONS]: 0,
								[STAGE_SURVEY]: 0,
							},
							isAdditional: !1,
							isClosing: !1,
							isHidden: !1,
						},
					}
				);
			}),
			e.on("ut/idle", (t) => {
				let { ut: i, screener: n } = t;
				return (
					e.dispatch("screener/dismiss", n.active),
					{
						ut: {
							...i,
							recorderState: "ready",
							recorder: void 0,
							script: void 0,
							stage: STAGE_HIDDEN,
							email: void 0,
							steps: {
								[STAGE_QUESTIONS]: 0,
								[STAGE_INSTRUCTIONS]: 0,
								[STAGE_SURVEY]: 0,
							},
							isAdditional: !1,
							isClosing: !1,
							isHidden: !1,
						},
					}
				);
			}),
			e.on(
				"ut/error",
				(t, i) => (
					e.dispatch("curiosity/event", { event: "UT Error", message: i }),
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
					stage: STAGE_RESTART,
					isAdditional: !0,
				},
			})),
			e.on("ut/stage", (t, i) => {
				let { ut: n } = t,
					{ stage: r, step: a } = i,
					{ ticket: s, script: o } = n;
				switch (r) {
					case STAGE_FAREWELL:
						stopRecording(e),
							e.dispatch("curiosity/event", {
								event: "UT End Dialog Shown",
								name: n?.script.name,
								domain: window.location.hostname,
							});
						break;
					case STAGE_FAREWELL_NOT_CHOSEN:
						dismissTicket(e.dispatch, s);
						break;
					case STAGE_QUESTIONS:
						if (o.questions && o.questions.length && !(a >= o.questions.length))
							e.dispatch("curiosity/event", {
								event: "UT Question Shown",
								name: n?.script.name,
								question: o.questions[a],
							});
						else {
							reloadAndStart(s, o);
							return;
						}
				}
				return {
					ut: {
						...n,
						stage: r,
						steps: void 0 !== a ? { ...n.steps, [r]: a } : n.steps,
					},
				};
			}),
			e.on("screener/dismiss", (t) => {
				let { ut: i } = t;
				i.ticket &&
					(cancelIdleScrenerTimer(), dismissTicket(e.dispatch, i.ticket));
			}),
			e.on("screener/accept", (e, t) => {
				let { screener: i } = t;
				if (i.usertest) {
					let { script: t, ticket: i } = e.ut;
					if (
						!t ||
						!i ||
						!startAttractor(Attractor.UT_RECORDER, UT_ATTRACTOR_OPTIONS)
					)
						return;
					let n = STAGE_INTRO;
					if (t && !t.intro) {
						if (t.questions && t.questions.length) n = STAGE_QUESTIONS;
						else {
							reloadAndStart(i, t);
							return;
						}
					}
					return (
						cancelIdleScrenerTimer(),
						{
							ut: {
								...e.ut,
								stage: n,
								steps: {
									[STAGE_QUESTIONS]: 0,
									[STAGE_INSTRUCTIONS]: 0,
									[STAGE_SURVEY]: 0,
								},
								isAdditional: !1,
							},
						}
					);
				}
			});
	},
	EE_STORAGE_KEY = "EE_STORAGE",
	daysSinceEntrance = (e) => {
		let t = readJsonCookie(EE_STORAGE_KEY) || [];
		Array.isArray(t) || (t = []);
		let i = t.find((t) => t.experiment === e);
		return i?.date ? Math.floor((new Date() - new Date(i.date)) / 864e5) : null;
	},
	alreadyEntered = (e) => {
		let t = readJsonCookie(EE_STORAGE_KEY) || [];
		Array.isArray(t) || (t = []);
		let i = R(EE_STORAGE_KEY) || [];
		Array.isArray(i) || (i = []),
			i.length && "string" == typeof i[0] && (i = [...t]);
		let n = t.find((t) => t.experiment === e);
		n ||
			(t.push({ experiment: e, date: new Date() }),
			setCookie(EE_STORAGE_KEY, JSON.stringify(t)));
		let r = i.find((t) => t.experiment === e);
		return (
			r || (i.push({ experiment: e, date: new Date() }), C(EE_STORAGE_KEY, i)),
			!!(n || r)
		);
	};
async function apiGetScreeners() {
	let e = E("/api/screeners/decide"),
		t = await fetch(e, { credentials: "include" });
	return N(t), t.json();
}
function getMetaTrack(e) {
	return (e.current && e.current.tracks && e.current.tracks[e.partId]) || null;
}
let SCREENER_COOKIE_PREFIX = "ScrShwn";
async function loadScreener(e) {
	try {
		let t = await apiGetScreeners(),
			i = e.get();
		(t = t.filter((e) => {
			let t = e.filter.visitedFirstTime;
			if (
				"unset" !== t &&
				(("yes" === t && window.__HAS_BEEN_SEEN_BEFORE__) ||
					("no" === t && !window.__HAS_BEEN_SEEN_BEFORE__))
			)
				return !1;
			let n = e.filter.experiment;
			if (n) {
				let [e, t] = n.split(" "),
					[r, a] = e.split("=");
				if (i.experiments[r]?.status !== "active") return !1;
				if (t) {
					let [e, i] = t.split("<days<"),
						n = daysSinceEntrance(r);
					if (null !== n && !(n >= +e && n <= +i)) return !1;
				}
				return void 0 === a || i.experiments[r]?.segment === a;
			}
			return !0;
		})).length && e.dispatch("screener/loaded", t);
	} catch (e) {
		"Sentry" in window &&
			"function" == typeof window.Sentry.captureException &&
			window.Sentry.captureException(e),
			console.error(e);
	}
}
function setScreenerCookie(e) {
	let t = new Date();
	t.setTime(t.getTime() + 7776e6),
		(document.cookie = `ScrShwn-${
			e.cookie
		}=true;expires=${t.toUTCString()};path=/`);
}
async function activateScreener(e, t) {
	let i = e.get(),
		n = [];
	for (let e of i.screener.candidates) {
		let r = e.filter.bassPage,
			a = getMetaTrack(i.meta);
		if (
			"unset" !== r &&
			(!a || ("yes" === r && !a.isBassGuitar) || ("no" === r && a.isBassGuitar))
		)
			continue;
		let s = e.filter.drumsPage;
		("unset" === s ||
			(a && ("yes" !== s || a.isDrums) && ("no" !== s || !a.isDrums))) &&
			(!e.filter.showAfterAction ||
				(t.event && e.filter.showAfterAction === t.event)) &&
			n.push(e);
	}
	if (n.length) {
		let t = n[Math.floor(Math.random() * n.length)];
		if (t.usertest) {
			let i = 1e3 * (t.filter?.delay || 0),
				n = await acquireTicket(e.dispatch, t.usertest, i);
			if (!n) return;
		}
		if ((clearTimeout(delayTimeout), t.filter.delay)) {
			delayTimeout = setTimeout(() => {
				startAttractor(Attractor.SCREENER) && e.dispatch("screener/set", t);
			}, 1e3 * t.filter.delay);
			return;
		}
		startAttractor(Attractor.SCREENER) && e.dispatch("screener/set", t);
	}
}
function activateScreenerWithEvent(e, t) {
	let i = e.get();
	i.screener.candidates.length &&
		delay(() => activateScreener(e, { event: t }));
}
let module$e = (e) => {
	e.on(
		"screener/set",
		(e, t) => (
			t && setScreenerCookie(t),
			{ screener: { ...e.screener, candidates: [], active: t } }
		)
	),
		e.on(
			"screener/loaded",
			(t, i) => (
				delay(() => activateScreener(e, {})),
				{ screener: { ...t.screener, candidates: i, active: void 0 } }
			)
		),
		e.on("screener/dismiss", (e) => {
			let { screener: t } = e;
			return (
				stopAttractor(Attractor.SCREENER),
				{ screener: { ...t, candidates: [], active: void 0 } }
			);
		}),
		e.on("screener/accept", (e) => {
			let { screener: t } = e;
			return (
				stopAttractor(Attractor.SCREENER),
				{ screener: { ...t, candidates: [], active: void 0 } }
			);
		});
	let t = (t, i) => {
		let { event: n } = i;
		t.screener.candidates.length &&
			delay(() => activateScreener(e, { event: n }));
	};
	e.on("curiosity/conversion", t),
		e.on("curiosity/event", t),
		e.on("curiosity/vpt10", (t) => {
			t.screener.candidates.length &&
				delay(() =>
					activateScreener(e, { event: "Viewed player tab for 10 minutes" })
				);
		}),
		e.on("screener/pressedEditor", () =>
			activateScreenerWithEvent(e, "PressedEditor")
		);
};
async function apiGetText(e) {
	let t = E("/api/textpage/" + e),
		i = await fetch(t);
	return N(i), i.json();
}
async function loadTextpage(e, t) {
	let i = e.get().textpage;
	if (i.slug !== t || i.isError)
		try {
			e.dispatch("textpage/load:processing", t);
			let i = await apiGetText(t);
			i.slug === e.get().textpage.slug && e.dispatch("textpage/load:done", i);
		} catch (i) {
			console.error(i),
				t === e.get().textpage.slug && e.dispatch("textpage/load:error");
		}
}
let module$d = (e) => {
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
async function apiGetFaq() {
	let e = E("/api/faq/compact"),
		t = await fetch(e);
	N(t);
	let i = await t.json();
	return i.filter((e) => e.isSRW);
}
async function loadFaq(e) {
	if (void 0 === e.get().faq.content)
		try {
			e.dispatch("faq/load:processing");
			let t = await apiGetFaq();
			e.dispatch("faq/load:done", t);
		} catch (t) {
			console.error(t), e.dispatch("faq/load:error");
		}
}
let module$c = (e) => {
		e.on("faq/load:processing", () => ({
			faq: { content: void 0, isLoading: !0, isError: !1 },
		})),
			e.on("faq/load:done", (e, t) => {
				let { experiments: i, user: n } = e;
				if (
					true &&
					(i.paid_fingerings?.segment === "ut" ||
						i.paid_fingerings?.segment === "on")
				) {
					let e = t.find((e) => "Songsterr Player" === e.section);
					if (e) {
						let t = e.records.find(
							(e) => "Keyboard Shortcuts/Hotkeys" === e.question
						);
						if (t) {
							let e = t.answer.find(
								(e) => "ul" === e.tag && e.children?.length !== 0
							);
							e &&
								e.children.push({
									tag: "li",
									attrs: null,
									children: ["G - Turn fingerings on/off"],
								});
						}
					}
				} else {
					let e = t.find((e) => "Miscellaneous" === e.section);
					e &&
						(e.records = e.records.filter(
							(e) => 'What is the "Guitar Fingering" beta?' !== e.question
						));
				}
				return { faq: { content: t, isLoading: !1, isError: !1 } };
			}),
			e.on("faq/load:error", () => ({
				faq: { content: void 0, isLoading: !1, isError: !0 },
			}));
	},
	CHORDPRO_DOMAINS = ["chordpro1", "chordpro2", "chordpro3"];
async function apiGetChords(e, t, i) {
	let n = `/api/chords/${e}${t ? `/${t}` : ""}`,
		r = await fetchRetrySignal(() => E(n), "meta", i);
	return i.aborted || !r
		? null
		: (r.title && (r.title = minimizeSpecialWordsInTitle(r.title)), r);
}
async function apiGetSongChordPro(e, t, i, n) {
	let r =
			arguments.length > 4 && void 0 !== arguments[4]
				? arguments[4]
				: { Accept: "text/plain" },
		a = `chordpro_${t}_${i || ""}`,
		s = await get(a);
	if (s && s.data) return s.data;
	let o = `${e}/${t}/${i}.chordpro`,
		l = (e) => {
			let t = (e % CHORDPRO_DOMAINS.length) + 1;
			return t < CHORDPRO_DOMAINS.length
				? `https://${CHORDPRO_DOMAINS[t]}.songsterr.com/${o}`
				: `https://www.songsterr.com/cdn/chordpro/${o}`;
		},
		u = await fetchRetrySignal(l, "chordpro", n, r);
	return !u || n.aborted ? null : (await set(a, { data: u }), u);
}
function kickChords(e) {
	let t = e.get().chords;
	t.current &&
		!t.isFailed &&
		e.dispatch("chords/load:done", {
			songId: t.songId,
			chordsRevisionId: t.chordsRevisionId,
			current: t.current,
		});
}
async function loadChords(e, t, i) {
	let n = new AbortController$1();
	try {
		let r = e.get().chords,
			a = r.loading;
		a && a.ac.abort();
		let s = r.songId !== t,
			o = r.chordsRevisionId !== i;
		if (!r.isFailed && r.current && !s && !o) {
			await e.dispatch("chords/load:done", {
				songId: t,
				chordsRevisionId: i,
				current: r.current,
			});
			return;
		}
		if (
			(await e.dispatch("chords/load:processing", {
				songId: t,
				chordsRevisionId: i,
				songHasChanged: s,
				chordsRevisionHasChanged: o,
				ac: n,
			}),
			n.signal.aborted)
		)
			return;
		let l = e.get().chords.current;
		if (
			(!l || l.songId !== t || (i && l.chordsRevisionId !== i)) &&
			((l = await apiGetChords(t, i, n.signal)), n.signal.aborted || !l)
		)
			return;
		await e.dispatch("chords/load:done", {
			songId: t,
			chordsRevisionId: i,
			current: l,
		});
	} catch (r) {
		if (n.signal.aborted) return;
		e.dispatch("chords/load:error", {
			songId: t,
			chordsRevisionId: i,
			error: r,
		});
	}
}
let module$b = (e) => {
		e.on("chords/load:processing", (e, t) => {
			let { songId: i, chordsRevisionId: n, ac: r } = t;
			return {
				chords: {
					...e.chords,
					loading: { songId: i, chordsRevisionId: n, ac: r },
				},
			};
		}),
			e.on("chords/load:done", (e, t) => {
				let { songId: i, chordsRevisionId: n, current: r } = t;
				return {
					chords: {
						...e.chords,
						current: r,
						songId: i,
						chordsRevisionId: n,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("chords/load:error", (e, t) => {
				let { songId: i, chordsRevisionId: n, error: r } = t;
				return {
					chords: {
						...e.chords,
						current: null,
						songId: i,
						chordsRevisionId: n,
						isFailed: !0,
						isNetworkFailed: r instanceof v && 0 === r.status,
						isNotFound:
							r instanceof v && (404 === r.status || 400 === r.status),
						loading: null,
					},
				};
			}),
			e.on("route/change", (t, i) => {
				let { routeContent: n } = i;
				n && "chords" === n.page && loadChords(e, n.songId, n.chordsRevisionId);
			});
	},
	module$a = (e) => {
		e.on("chords/load:done", async (t, i) => {
			let { current: n } = i,
				r = n.songId,
				a = n.chordsRevisionId,
				s = new AbortController$1();
			try {
				let i = t.chordpro.loading;
				if (i) {
					if (r === i.songId && a === i.chordsRevisionId) return;
					i.ac.abort();
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
				let o = await apiGetSongChordPro(r, a, n.chordpro, s.signal);
				if (!o || s.signal.aborted) return;
				await e.dispatch("chordpro/load:raw", {
					songId: r,
					chordsRevisionId: a,
					chordpro: o,
					signal: s.signal,
				});
			} catch (t) {
				if ((console.log("chordpro error", s.signal.aborted), s.signal.aborted))
					return;
				await e.dispatch("chordpro/load:error", {
					songId: r,
					chordsRevisionId: a,
					error: t,
				});
			}
		}),
			e.on("chordpro/load:processing", (e, t) => {
				let { songId: i, chordsRevisionId: n, ac: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						loading: { songId: i, chordsRevisionId: n, ac: r },
					},
				};
			}),
			e.on("chordpro/load:raw", async (t, i) => {
				let { songId: n, chordsRevisionId: r, chordpro: a } = i;
				try {
					let t = (await import("./split.e33350ac.js")).split,
						i = t(a);
					e.dispatch("chordpro/load:done", {
						songId: n,
						chordsRevisionId: r,
						current: i,
					});
				} catch (t) {
					e.dispatch("chordpro/load:error", {
						songId: n,
						chordsRevisionId: r,
						error: t,
					});
				}
			}),
			e.on("chordpro/load:done", (e, t) => {
				let { songId: i, chordsRevisionId: n, current: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						current: r,
						songId: i,
						chordsRevisionId: n,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
						loading: null,
					},
				};
			}),
			e.on("chordpro/load:error", (e, t) => {
				let { songId: i, chordsRevisionId: n, error: r } = t;
				return {
					chordpro: {
						...e.chordpro,
						current: null,
						songId: i,
						chordsRevisionId: n,
						isFailed: !0,
						isNetworkFailed: r instanceof v && 0 === r.status,
						isNotFound:
							r instanceof v && (404 === r.status || 400 === r.status),
						loading: null,
					},
				};
			}),
			e.on("chords/load:processing", (e, t) => ({
				chordpro: { ...e.chordpro, current: null },
			})),
			e.on("chordpro/load:error", (e, t) => {
				let { error: i } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(i),
					console.error(i);
			});
	},
	module$9 = (e) => {
		e.on("cursor/failed", () => ({
			cursor: {
				isFailed: !0,
				position: { cursor: 0, loopStart: 0, loopEnd: 0 },
			},
		})),
			e.on("cursor/failed", (e, t) => {
				let { error: i } = t;
				try {
					"Sentry" in window &&
						"function" == typeof window.Sentry.captureException &&
						window.Sentry.captureException(i);
				} catch (e) {}
				console.error(i);
			}),
			e.on("meta/load:processing", (e, t) => {
				let { songHasChanged: i } = t;
				if (i && e.cursor && e.cursor.isFailed)
					return { cursor: { ...e.cursor, isFailed: !1 } };
			}),
			e.on("part/load:done", (e) => {
				if (e.cursor && e.cursor.isFailed)
					return { cursor: { ...e.cursor, isFailed: !1 } };
			}),
			e.on("cursor/loop", (t, i) => {
				let { loopStartLayout: n, loopEndLayout: r, side: a } = i,
					s = fixLoopTimings(t.part.current, t.cursor.position.cursor, n, r, a);
				(s.cursor != t.cursor.position.cursor ||
					s.loopStart != t.cursor.position.loopStart ||
					s.loopEnd != t.cursor.position.loopEnd) &&
					e.dispatch("cursor/move", s);
			}),
			e.on("cursor/move", (e, t) => ({ cursor: { ...e.cursor, position: t } })),
			e.on("cursor/move", (e) => {
				saveToLS(e.player, e.cursor);
			}),
			e.on("player/toggleLoop", (e) => {
				let t = e.player.audio,
					i = e.player.video,
					n = 0 !== e.cursor.position.loopEnd,
					r = t.getCursor(),
					a = {
						...e.cursor,
						position: { cursor: r, loopStart: 0, loopEnd: 0 },
					};
				if (!n && e.part.current) {
					let t = getLoopTimings(e.part.current, r);
					(a.position.loopStart = t.loopStart),
						(a.position.loopEnd = t.loopEnd);
				}
				return (
					t.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
					i.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
					saveToLS(e.player, a),
					{ cursor: a }
				);
			}),
			e.on("cursor/backspace", (t) => {
				let { loopStart: i, loopEnd: n } = t.cursor.position;
				e.dispatch("cursor/move", { cursor: i, loopStart: i, loopEnd: n });
			}),
			e.on("cursor/left", (t) => {
				let i = t.part.current;
				if (i) {
					let { loopStart: n, loopEnd: r } = t.cursor.position,
						a = findLayoutByTimestamp(i, t.player.audio.getCursor(), "left"),
						s = a.measureLayout.measure.index,
						o = a.measureLayout.beatsLayouts[0],
						l = n;
					if (a !== o) {
						let e = leftTime(o);
						l = e > n ? e : n;
					} else if (s > 0) {
						o = firstMeasureLayout(i.measures[s - 1]).beatsLayouts[0];
						let e = leftTime(o),
							t = rightTime(o);
						l = 0 === r || n <= e ? e : n <= t ? t : n;
					}
					e.dispatch("cursor/move", { cursor: l, loopStart: n, loopEnd: r });
				}
			}),
			e.on("cursor/right", (t) => {
				let i = t.part.current;
				if (i) {
					let n;
					let { loopStart: r, loopEnd: a } = t.cursor.position,
						s = findLayoutByTimestamp(i, t.player.audio.getCursor(), "left"),
						o = s.measureLayout.measure.index,
						l = null;
					if (o < i.measures.length - 1) {
						n = firstMeasureLayout(i.measures[o + 1]).beatsLayouts[0];
						let e = leftTime(n),
							t = rightTime(n);
						0 === a || t < a ? (l = t) : e < a && (l = e);
					}
					null !== l &&
						e.dispatch("cursor/move", { cursor: l, loopStart: r, loopEnd: a });
				}
			}),
			e.on("cursor/up", (t) => {
				let i = t.part.current,
					n = t.part.lines.lines;
				if (i && n) {
					let { loopStart: r, loopEnd: a } = t.cursor.position,
						s = findLayoutByTimestamp(i, t.player.audio.getCursor(), "left"),
						o = s.measureLayout.lineLayout.line.index;
					if (o > 0) {
						let t = n[o - 1],
							i = findClosestBeatInLine(t, s.absoluteX, "left"),
							l = null,
							u = leftTime(i),
							d = rightTime(i);
						0 === a || r <= u ? (l = u) : r <= d && (l = d),
							null !== l &&
								e.dispatch("cursor/move", {
									cursor: l,
									loopStart: r,
									loopEnd: a,
								});
					}
				}
			}),
			e.on("cursor/down", (t) => {
				let i = t.part.current,
					n = t.part.lines.lines;
				if (i && n) {
					let { loopStart: r, loopEnd: a } = t.cursor.position,
						s = findLayoutByTimestamp(i, t.player.audio.getCursor(), "left"),
						o = s.measureLayout.lineLayout.line.index;
					if (o < n.length - 1) {
						let t = n[o + 1],
							i = findClosestBeatInLine(t, s.absoluteX, "left"),
							l = null,
							u = leftTime(i),
							d = rightTime(i);
						0 === a || d < a ? (l = d) : u < a && (l = u),
							l &&
								e.dispatch("cursor/move", {
									cursor: l,
									loopStart: r,
									loopEnd: a,
								});
					}
				}
			}),
			e.on("cursor/shiftRight", (t) => {
				let i = t.part.current;
				if (i) {
					let n, r;
					let { loopStart: a, loopEnd: s } = t.cursor.position;
					if (0 === s) return;
					let o = findLayoutByTimestamp(i, s, "left"),
						l = o.measureLayout.measure,
						u = i.measures[l.index + 1];
					if (!u) return;
					let d = firstMeasureLayout(u).beatsLayouts;
					if (s < loopLeftTime(d[0])) n = loopLeftTime((r = d[0]));
					else {
						let e = lastMeasureLayout(u).beatsLayouts;
						n = firstLoopRightTime((r = e[e.length - 1]));
					}
					let c = t.player.audio.getCursor();
					e.dispatch("cursor/move", { cursor: c, loopStart: a, loopEnd: n });
				}
			}),
			e.on("cursor/shiftLeft", (t) => {
				let i = t.part.current;
				if (i) {
					let n, r;
					let { loopStart: a, loopEnd: s } = t.cursor.position;
					if (0 === s) return;
					let o = findLayoutByTimestamp(i, s, "left"),
						l = o.measureLayout.measure,
						u = i.measures[l.index - 1];
					if (!u) return;
					let d = firstMeasureLayout(l).beatsLayouts;
					if (
						a >=
						(n =
							s > loopLeftTime(d[0])
								? loopLeftTime((r = d[0]))
								: loopLeftTime((r = firstMeasureLayout(u).beatsLayouts[0])))
					)
						return;
					let c = t.player.audio.getCursor();
					e.dispatch("cursor/move", { cursor: c, loopStart: a, loopEnd: n });
				}
			});
	};
async function apiGetTags(e, t, i) {
	let n;
	n =
		"tags" === e.page
			? `/api/next/tags${t.page ? `?page=${t.page}` : ""}`
			: `/api/next/tags/${e.name}${t.page ? `?page=${t.page}` : ""}`;
	let r = await fetchRetrySignal(() => E(n), "tags", i);
	return i.aborted || !r ? null : r;
}
function routeEquals(e, t) {
	return (
		!!t &&
		(("tag" === e.page && "tag" === t.page && e.name === t.name) ||
			("tags" === e.page && "tags" === t.page))
	);
}
function queryEquals(e, t) {
	return (!e.page && !t.page) || e.page === t.page;
}
async function loadTag(e, t, i) {
	let n = new AbortController$1();
	try {
		let r = e.get().tags,
			a = r.loading;
		if (
			(a && a.ac.abort(), routeEquals(t, r.route) && queryEquals(i, r.query))
		) {
			await e.dispatch("tags/load:done", {
				route: t,
				query: i,
				content: r.content,
			});
			return;
		}
		if (
			(await e.dispatch("tags/load:processing", { route: t, query: i, ac: n }),
			n.signal.aborted)
		)
			return;
		let s = await apiGetTags(t, i, n.signal);
		await e.dispatch("tags/load:done", { route: t, query: i, content: s });
	} catch (r) {
		if (n.signal.aborted) return;
		console.error(r),
			await e.dispatch("tags/load:error", { route: t, query: i, error: r });
	}
}
let module$8 = (e) => {
		e.on("route/change", (t, i) => {
			let { routeContent: n, queryContent: r } = i;
			n && ("tag" === n.page || "tags" === n.page) && loadTag(e, n, r || {});
		}),
			e.on("tags/load:processing", (e, t) => {
				let { route: i, query: n, ac: r } = t;
				return { tags: { ...e.tags, loading: { route: i, query: n, ac: r } } };
			}),
			e.on("tags/load:done", (e, t) => {
				let { route: i, query: n, content: r } = t;
				return {
					tags: {
						...e.tags,
						content: r,
						route: i,
						query: n,
						loading: null,
						isFailed: !1,
						isNetworkFailed: !1,
						isNotFound: !1,
					},
				};
			}),
			e.on("tags/load:error", (e, t) => {
				let { route: i, query: n, error: r } = t;
				return {
					tags: {
						...e.tags,
						current: null,
						route: i,
						query: n,
						loading: null,
						isFailed: !0,
						isNetworkFailed: r instanceof v && 0 === r.status,
						isNotFound:
							r instanceof v && (404 === r.status || 400 === r.status),
					},
				};
			}),
			e.on("tags/load:error", (e, t) => {
				let { error: i } = t;
				"Sentry" in window &&
					"function" == typeof window.Sentry.captureException &&
					window.Sentry.captureException(i),
					console.error(i);
			});
	},
	module$7 = (e) => {
		e.on("chords/load:processing", () => ({ chordDiagram: [] })),
			e.on("chordDiagram/clear", () => ({ chordDiagram: [] })),
			e.on("chordDiagram/open", (e, t) => {
				let i = e.chordDiagram.find((e) => e.chord === t.chord);
				return i
					? { chordDiagram: e.chordDiagram.filter((e) => e !== i) }
					: { chordDiagram: [...e.chordDiagram, t] };
			}),
			e.on("chordDiagram/close", (e, t) => ({
				chordDiagram: e.chordDiagram.filter((e) => e !== t),
			}));
	},
	LEARN_MARKERS_STORAGE = "learnMarkers";
function loadLearnMarkers(e) {
	try {
		let t = R(LEARN_MARKERS_STORAGE) || [];
		e("learnMarkers/load:done", t);
	} catch {
		e("learnMarkers/load:done", []);
	}
}
function learMarkersCount(e) {
	let t = 0;
	for (let i of e) t += i.learnedBars.length;
	return t;
}
let module$6 = (e) => {
		e.on("learnMarkers/load:done", (e, t) => {
			let { learnMarkers: i } = e;
			return { learnMarkers: { ...i, data: t } };
		}),
			e.on("learnMarkers/markToggle", (t, i) => {
				let { songId: n, partId: r, barNumber: a, isLearned: s } = i,
					{ learnMarkers: o, meta: l } = t,
					u = [...o.data],
					d = u.find((e) => e.songId === n && e.partId === r);
				if (s) {
					if (d) {
						let e = d.learnedBars.findIndex((e) => e === a);
						e >= 0 &&
							(d.learnedBars = d.learnedBars
								.slice(0, e)
								.concat(d.learnedBars.slice(e + 1)));
					}
				} else
					d
						? d.learnedBars.includes(a) ||
						  (d.learnedBars = [...d.learnedBars, a])
						: u.push({ songId: n, partId: r, learnedBars: [a] });
				return (
					C(LEARN_MARKERS_STORAGE, u),
					setTimeout(
						() =>
							e.dispatch("curiosity/event", {
								event: s ? "Marked as not learned" : "Marked as learned",
								"Measure number": a,
								"Revision id": l.current.revisionId,
								"Song id": l.songId.toString(),
								...vpt10Props(t),
							}),
						300
					),
					{ learnMarkers: { ...o, data: u } }
				);
			});
	},
	removedExperiments = [
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
		"french_plus",
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
		"open_srwm_toolbar_by_default",
		"banner_later",
		"playing_track_indicator",
		"selections",
		"voice_metronome_v2",
		"video_walkthrough",
		"social_plus",
		"my_tabs_favorites_counts",
		"android_app_banner",
		"only_before",
		"repeating_contextual",
		"auto_fingerings",
		"play_along",
		"improve_on_panel",
		"full_width",
		"statistic_on_text",
		"video_plus",
		"editor_move_note",
		"submit_corrector_revision",
	];
async function apiTrackEvent(e, t) {
	let i = E("/api/event/");
	try {
		await P(i, { event: e, payload: t });
	} catch (e) {
		console.error(e);
	}
}
void 0 !== document.hidden
	? ((hiddenPropName = "hidden"), (visibilityStatePropName = "visibilityState"))
	: void 0 !== document.mozHidden
	? ((hiddenPropName = "mozHidden"),
	  (visibilityStatePropName = "mozVisibilityState"))
	: void 0 !== document.msHidden
	? ((hiddenPropName = "msHidden"),
	  (visibilityStatePropName = "msVisibilityState"))
	: void 0 !== document.webkitHidden &&
	  ((hiddenPropName = "webkitHidden"),
	  (visibilityStatePropName = "webkitVisibilityState"));
let isWebDocumentHidden = () =>
		hiddenPropName
			? {
					"Web document is hidden": document[hiddenPropName],
					"Web document visibility": document[visibilityStatePropName],
			  }
			: {},
	getInstrumentTab = (e) =>
		e
			? ((e.isBassGuitar && " Bass") || (e.isDrums && " Drum") || "") + " Tab"
			: " Tab";
function relativeAdminLink(e, t) {
	return `/admin/resources/${e}/records/${t}/show`;
}
function relativeSongAdminToolsUrl(e, t) {
	return `/a/wa/SongAdminTools/${e}?id=${t}`;
}
function absolutize(e) {
	return `https://www.songsterr.com${e}`;
}
function getNextLocationUrl(e) {
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
function s4() {
	return Math.floor((1 + Math.random()) * 65536)
		.toString(16)
		.substring(1);
}
function guid() {
	return (
		s4() +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		"-" +
		s4() +
		s4() +
		s4()
	);
}
let PLUS_ID = "Print--plus",
	FREE_ID = "Print--free";
function updateGAPrintStyles(e) {
	let t = e.rules || e.cssRules;
	for (let e of t)
		if (e.style.content && e.style.content.length) {
			let t = guid(),
				i =
					e.style.content.substring(0, 62) +
					t +
					e.style.content.substring(62 + t.length);
			i.length === e.style.content.length
				? (e.style.content = i)
				: console.error("Something wrong with tracker url length");
		}
}
function updatePrintTrackers(e) {
	try {
		let e = document.styleSheets;
		for (let t = 0; t < e.length; t++) {
			let i = e[t];
			"print" === i.media.mediaText &&
				"print-ga" === i.ownerNode.id &&
				updateGAPrintStyles(i);
		}
	} catch (e) {
		console.error("PrintTracker: " + e);
	}
}
let DENIED = /[【】《》]/;
function notSpam(e) {
	return !DENIED.test(e) && -1 === e.indexOf(".com");
}
function pretty(e) {
	return e
		.split("+")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join(" ");
}
let SHORT_TITLE_SUFFIX = "Songsterr",
	TITLE_SUFFIX = "Songsterr Tabs with Rhythm",
	titles = {
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
function getSeoInstrument(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
	if (e) {
		if (e.instrument === INSTRUMENT_FILTER_DRUMS) return "Drum";
		if (e.instrument === INSTRUMENT_FILTER_BASS) return "Bass";
		if (e.instrument === INSTRUMENT_FILTER_GUITAR) return "Guitar";
	}
	return t;
}
function shouldIncludeTrackInTitle(e, t) {
	if (!t || !e.current || !e.current.tracks) return !1;
	let i = null;
	return (
		isDrums$1(t.instrumentId)
			? (i = isDrums$1)
			: isBassGuitar(t.instrumentId)
			? (i = isBassGuitar)
			: isGuitar(t.instrumentId) && (i = isGuitar),
		!i || isNotMostPopular(t, e.current.tracks, i)
	);
}
function getTitleForTab(e) {
	let { meta: t } = e;
	if (!t.current) return [TITLE_SUFFIX, "Free online tab player"];
	let i = getMetaTrack(t),
		n = "";
	shouldIncludeTrackInTitle(t, i) &&
		(n = ` \u002d ${i.titleFull.replace(/\u00a0/g, " ")}`);
	let r = getInstrumentTab(i),
		a = t.allowedByLicense ? "" : " (Temporary Removed by Music Publisher) ",
		s = `${t.current.title}${r} by ${t.current.artist}${n}`;
	return [
		`${s}${a} | ${TITLE_SUFFIX}`,
		`${s}. Free online tab player. One accurate version. Recommended by The Wall Street Journal`,
	];
}
function getTitleForChords(e) {
	let { chords: t } = e;
	if (!t.current) return TITLE_SUFFIX;
	let { title: i, artist: n } = t.current;
	return `${i} Chords by ${n} | ${TITLE_SUFFIX}`;
}
function getTitle(e) {
	let t = e.route;
	return "artist" === t.page
		? getTitleForArtist(e)
		: "tab" === t.page
		? getTitleForTab(e)[0]
		: "chords" === t.page
		? getTitleForChords(e)
		: "search" === t.page
		? getTitleForSearch(e)
		: "tag" === t.page || "tags" === t.page
		? getTitleForTag(e)
		: getTitleForPanel(e);
}
function getPrintProps(e) {
	return "tab" === e.route.page && e.meta.current
		? {
				page: e.route.page,
				Artist: e.meta.current.artist,
				Title: e.meta.current.title,
		  }
		: { page: e.route.page };
}
function headUpdate(e) {
	(document.title = getTitle(e)),
		window.ga &&
			window.ga("send", "pageview", {
				location: window.location.href,
				title: document.title,
			}),
		updatePrintTrackers(getPrintProps(e));
}
routes
	.map((e) => {
		let [t, i] = e;
		return "string" == typeof t && "string" == typeof i.page
			? { [i.page]: t }
			: {};
	})
	.reduce((e, t) => Object.assign(e, t), {});
let getArtistName = (e, t) => e.artist.artists[t] || "Unknown Artist",
	formatSearchResults = (e) => {
		if (e.length > 0)
			return notSpam(e) ? `Search results for: '${e}'` : "Search results";
	},
	formatShortSearchTitle = (e) =>
		[
			getSeoInstrument(e.songs && e.songs.filters, "Guitar"),
			"Tabs with Rhythm",
		].join(" "),
	formatShortArtistTitle = (e) =>
		[
			getArtistName(e, +e.route.artistId),
			getSeoInstrument(e.artist && e.artist.filters, ""),
			"Tabs",
		].join(" "),
	formatShortPanelTitle = (e) => titles[e.route.page] || "";
function getTitleForSearch(e) {
	return [
		e.songs && e.songs.pattern && formatSearchResults(e.songs.pattern),
		formatShortSearchTitle(e),
		"Songsterr",
	]
		.filter(Boolean)
		.join(" | ");
}
function getTitleForArtist(e) {
	return [
		e.artist && e.artist.pattern && formatSearchResults(e.artist.pattern),
		formatShortArtistTitle(e),
		TITLE_SUFFIX,
	]
		.filter(Boolean)
		.join(" | ");
}
function getTitleForPanel(e) {
	return [formatShortPanelTitle(e), TITLE_SUFFIX].join(" | ");
}
function getTitleForTag(e) {
	let {
		tags: { content: t, route: i, query: n, isFailed: r, isNotFound: a },
	} = e;
	if (!t || r || a)
		return `${a ? "Not Found" : "Something Went Wrong"} | ${TITLE_SUFFIX}`;
	let s = n.page ? ` Page ${n.page}` : "",
		o = "Top " + ("tag" === i.page ? `${pretty(i.name)} Tabs` : "Tags") + s;
	return o + ` | ${TITLE_SUFFIX}`;
}
let countries = new Map([
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
	VPT10_COOKIE_NAME = "sr_vpt10";
async function initAmplitude(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
	if (!amplitude) {
		if ("bot" === e.device.type) return;
		null === t
			? (t = void 0)
			: void 0 === t && e.user.isLoggedIn && (t = e.user.profile.id.toString());
		let {
			getDeviceId: i,
			init: n,
			track: r,
			Identify: a,
			identify: s,
			setUserId: o,
		} = await import("./index.1c04369c.js");
		await n(window.__AMPLITUDE_API_KEY__ || "", t, {
			serverUrl: "/2/httpapi",
			minIdLength: 1,
			attribution: { disabled: !0 },
		}).promise,
			(amplitude = {
				getDeviceId: i,
				init: n,
				track: r,
				Identify: a,
				identify: s,
				setUserId: o,
			});
	}
	return amplitude;
}
let DEVICE_TYPE_MAP = {
	phone: "Phone",
	tablet: "Tablet",
	desktop: "Desktop",
	tv: "TV",
	car: "Car",
	bot: "Bot",
};
function deviceOrientation() {
	let e = window.matchMedia("(orientation: portrait)");
	return e ? (e.matches ? "portrait" : "landscape") : "unknown";
}
function screenMode() {
	return window.matchMedia(SCREEN_SMALL_PORTRAIT).matches
		? "smallPortrait"
		: "wideOrLandscape";
}
let DEFAULT_VPT10PROPS = {
		"Used metronome": !1,
		"Used countin": !1,
		"Used solo": !1,
		"Used mute": !1,
		"Used playback": !1,
		"Used speed": !1,
		"Used loop": !1,
		"Used mixer": !1,
		"Used pitchshift": !1,
		"Used fingerings for 30 seconds": !1,
	},
	FIRST_TIME_LOCAL_STORAGE_NAME = "curiosity_sent_events",
	experimentName = (e) =>
		-1 !== legacyExperiments.indexOf(e)
			? `Experiment: ${e}`
			: `Experiment: SRW ${e}`,
	songAndTrackIdsString = (e, t) => `s${e}t${void 0 !== t ? t : ""}`,
	revisedDaysAgo = (e) => {
		let t = new Date(e.created_at),
			i = new Date(),
			n = Math.abs(i.getTime() - t.getTime());
		return Math.ceil(n / 864e5);
	},
	vpt10Props = (e) => {
		let t;
		let i = e.meta;
		if (!i.current || !e.part.current) return {};
		let n = getMetaTrack(i),
			r = k.getTimeSinceLastActivity(),
			a = i.current,
			s = e.part.current,
			{ shown: o, status: l, trackFingering: u } = e.fingerings,
			d = o && !l && !!u,
			c = V(e.player.version),
			p = c.versionLegacy || `audioV${c.version}`;
		for (let n of e.setlists.setlists)
			if (-1 !== n.songs.findIndex((e) => e.songId === i.songId)) {
				t = n.name;
				break;
			}
		return {
			...e.curiosity.vpt10.props,
			Instrument: s.instrument,
			Difficulty: n && n.difficulty,
			"Minutes Since Last Activity": r,
			Artist: a.artist,
			Title: a.title,
			"Song and track ids": songAndTrackIdsString(a.songId, n?.partId),
			"Song id": i.songId.toString(),
			"Track id": n && n.partId.toString(),
			"Track title": n && n.name,
			"Has chords": s.withChords,
			"Has chords link": a.hasChords || !1,
			"Has sound v4": w.has(a, I.V4),
			"Sound version": p,
			Tags: i.current.tags,
			"Playlist Name": t,
			"Autofingering enabled": d,
			"Revised days ago": revisedDaysAgo(a),
		};
	},
	module$5 = (e) => {
		{
			let s,
				o,
				l,
				u = {};
			function t(e) {
				u = R(FIRST_TIME_LOCAL_STORAGE_NAME) || u;
				let t = !u[e];
				return t && ((u[e] = !0), C(FIRST_TIME_LOCAL_STORAGE_NAME, u)), t;
			}
			async function i(e, t) {
				let { setUserId: i } = await initAmplitude(e, t.id.toString());
				i(t.id.toString());
			}
			async function n(e) {
				let { setUserId: t } = await initAmplitude(e, null);
				t(void 0);
			}
			async function r(e, i) {
				let n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				try {
					let a = e.user.isLoggedIn ? e.user.profile.plan : A.FREE,
						s = e.user.isLoggedIn,
						o = {
							Url: window.location.href,
							Referer: e.curiosity.referer.last,
							...isWebDocumentHidden(),
							...n,
						},
						l = t(i);
					if (r && !l) return;
					!r && l && (o["First time"] = !0);
					let { Identify: u, track: d } = await initAmplitude(e),
						c = new u();
					c.set("Plan", a),
						c.set("Platform", "Web"),
						c.set("Browser", e.browser.family),
						c.set("Browser version", e.browser.version),
						c.set("System version", e.device.os.version),
						c.set(
							"Device type (correct)",
							DEVICE_TYPE_MAP[e.device.type] || e.device.type
						),
						c.set("Signed in", s),
						c.set("Total VPT10s", e.curiosity.vpt10.count),
						c.set(
							"Total measures learned",
							learMarkersCount(e.learnMarkers.data)
						),
						c.set("Screen width", e.screen.viewport.width),
						c.set("Screen height", e.screen.viewport.height),
						c.set("Orientation", deviceOrientation()),
						c.set("Mode", screenMode()),
						c.set("Browserslist", Z);
					let p = readJsonCookie("exp");
					if (p && p.active)
						for (let e of Object.keys(p.active))
							c.set(experimentName(e), p.active[e]);
					for (let e of removedExperiments)
						c.unset(experimentName(e)), c.unset("Device type (by useragent)");
					c.unset("Referer"),
						e.curiosity.referer.last &&
							c.set("Last referer", e.curiosity.referer.last),
						e.curiosity.referer.original &&
							c.set("Original referer", e.curiosity.referer.original);
					let h = {
						version_name: ee,
						event_type: i,
						user_properties: c.getUserProperties(),
						event_properties: o,
					};
					await d(h).promise,
						"prod" !== window.__STAGE__ && console.log(`AD: ${i}`, o, c);
				} catch (e) {
					console.error(e),
						"Sentry" in window &&
							"function" == typeof window.Sentry.captureException &&
							window.Sentry.captureException(e);
				}
			}
			function a() {
				for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
					t[i] = arguments[i];
				return (e) => {
					let i = { ...e.curiosity.vpt10.props };
					return (
						t.forEach((e) => {
							i[e] = !0;
						}),
						{
							curiosity: {
								...e.curiosity,
								vpt10: { ...e.curiosity.vpt10, props: i },
							},
						}
					);
				};
			}
			e.on("curiosity/conversion", (t, i) => {
				r(t, i.event, { ...i, ...t.curiosity.conversion, event: void 0 }),
					e.dispatch("curiosity/google", {
						category: "Conversion",
						action: i.event,
					});
			}),
				e.on("curiosity/event", (e, t) => {
					r(e, t.event, { ...t, event: void 0 });
				}),
				e.on("curiosity/visitedPage", () => {}),
				e.on("curiosity/enteredExperiment", (e, t) => {
					let { experiment: i, payload: n } = t;
					alreadyEntered(i) || r(e, `Entered experiment: SRW ${i}`, n);
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
					} catch (e) {
						console.error(e),
							"Sentry" in window &&
								"function" == typeof window.Sentry.captureException &&
								window.Sentry.captureException(e);
					}
				}),
				e.on("curiosity/error", (t, i) => {
					let { error: n, message: r } = i;
					e.dispatch("curiosity/event", {
						event: "Error",
						Error: n,
						Message: r,
					}),
						e.dispatch("curiosity/google", {
							category: "Error",
							action: n,
							label: r,
						});
				}),
				e.on("curiosity/fraud", async (e) => {
					let { Identify: t, identify: i } = await initAmplitude(e),
						n = new t();
					await i(n).promise;
				}),
				e.on("curiosity/setConversionProps", (e, t) => ({
					curiosity: {
						...e.curiosity,
						conversion: { ...e.curiosity.conversion, ...t },
					},
				})),
				e.on("curiosity/countdown:start", () => {
					clearTimeout(s),
						clearTimeout(o),
						k.reset(),
						(s = setTimeout(() => e.dispatch("curiosity/vpt10"), 6e5)),
						(o = setTimeout(() => e.dispatch("curiosity/vpt30"), 18e5));
				}),
				e.on("curiosity/countdown:clear", () => {
					clearTimeout(s), clearTimeout(o);
				}),
				e.on("curiosity/vcp5:start", () => {
					clearTimeout(l),
						k.reset(),
						(l = setTimeout(() => e.dispatch("curiosity/vc5"), 3e5));
				}),
				e.on("curiosity/vcp5:clear", () => {
					clearTimeout(l);
				}),
				e.on("meta/load:processing", () => {
					clearTimeout(o), clearTimeout(s), clearTimeout(l);
				}),
				e.on("curiosity/vc5", () => {
					e.dispatch("curiosity/google", {
						category: "Player",
						action: "Viewed chords for 5 minutes",
					});
				}),
				e.on("curiosity/vpt10", (t) => {
					let i = k.getTimeSinceLastActivity();
					if (i >= 5) return;
					let n = t.meta,
						r = getMetaTrack(n),
						a = "Viewed player tab for 10 minutes";
					if (n.current && t.part.current) {
						let t = n.current;
						apiTrackEvent(a, {
							songId: n.songId,
							revisionId: t.revisionId,
							artistId: t.artistId,
							partId: n.partId,
							instrumentId: r && r.instrumentId,
						}),
							e.dispatch("curiosity/google", { category: "Player", action: a }),
							e.dispatch("curiosity/increaseVpt10");
					}
				}),
				e.on("curiosity/vpt30", (t) => {
					let i = k.getTimeSinceLastActivity();
					if (i >= 5) return;
					let n = t.meta;
					n.current &&
						t.part.current &&
						e.dispatch("curiosity/event", {
							event: "Viewed player tab for 30 minutes",
							...vpt10Props(t),
						});
				}),
				e.on("user/signIn", (t, n) => {
					i(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Signed in",
							"Auth method": "Email",
						});
				}),
				e.on("user/googleSignIn", (t, n) => {
					let { profile: r, isCreated: a } = n;
					i(t, r),
						e.dispatch("curiosity/conversion", {
							event: a ? "Signed up" : "Signed in",
							"Auth method": "Google",
						});
				}),
				e.on("user/signUp", (t, n) => {
					i(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Signed up",
							"Auth method": "Email",
						});
				}),
				e.on("user/profile", (e, t) => {
					i(e, t);
				}),
				e.on("user/subscribePlus", (t, n) => {
					let r = {
						"Payment type": n.paymentType,
						Country: countries.get(n.subscription.countryCode),
						"Braintree Plan": n.subscription.plan.id,
					};
					"subscribe" === n.mode
						? e.dispatch("curiosity/conversion", { event: "Subscribed", ...r })
						: "update" === n.mode &&
						  e.dispatch("curiosity/conversion", {
								event: "Updated subscription",
								...r,
						  }),
						e.dispatch("curiosity/google", {
							category: "Subscription",
							action:
								"subscribe" === n.mode ? "Subscribed" : "Updated subscription",
						}),
						i(t, getPlusProfile(t, n));
				}),
				e.on("user/signOut", (t) => {
					e.dispatch("curiosity/event", { event: "Signed out" }), n(t);
				}),
				e.on("user/recoverPassword", (e, t) => {
					i(e, t);
				}),
				e.on("user/cancelPlus", (t, n) => {
					i(t, n),
						e.dispatch("curiosity/conversion", {
							event: "Canceled subscription",
						});
				}),
				e.on("user/deactivate", (t) => {
					e.dispatch("curiosity/conversion", { event: "Deactivated account" }),
						n(t);
				}),
				e.on("editor/delete:done", (t, i) =>
					e.dispatch("curiosity/event", {
						event: "Deleted song",
						Artist: i.artist,
						Title: i.title,
						"Song id": i.songId && i.songId.toString(),
					})
				),
				e.on("editor/delete:error", (t, i) =>
					e.dispatch("curiosity/error", {
						error: "Deleted song",
						message: i.message,
					})
				),
				e.on("favorites/add", async (t, i) => {
					let { songId: n, song: r } = i;
					return e.dispatch("curiosity/event", {
						event: "Added favorite",
						Title: r.title,
						Artist: r.artist,
						"Song id": n.toString(),
						"Song and track ids": songAndTrackIdsString(
							r.songId,
							t.part.current?.partId
						),
					});
				}),
				e.on("favorites/delete:processing", async (t, i) => {
					let { songId: n, song: r } = i;
					return e.dispatch("curiosity/event", {
						event: "Removed favorite",
						Title: r.title,
						Artist: r.artist,
						"Song id": n.toString(),
					});
				}),
				e.on("upload/song:uploaded", (t, i) => {
					let { songSubmitted: n, song: r, ext: a } = i;
					n &&
						e.dispatch("curiosity/event", {
							event: "Submitted tab",
							Artist: r.artist,
							Title: r.title,
							"File extension": a,
						});
				}),
				e.on("upload/song:error", (t, i) => {
					let { error: n } = i;
					e.dispatch("curiosity/error", {
						error: "Submitted tab",
						message: n.message,
					});
				}),
				e.on("upload/revision:uploaded", (t, i) => {
					let { revisionSubmitted: n, revision: r, ext: a } = i;
					n &&
						e.dispatch("curiosity/event", {
							event: "Submitted revision",
							Artist: r.artist,
							Title: r.title,
							Via: "GP",
							"File extension": a,
							"Song id": r.songId.toString(),
						});
				}),
				e.on("upload/revision:error", (t, i) => {
					let { error: n } = i;
					e.dispatch("curiosity/error", {
						error: "Submitted revision",
						message: n.message,
					});
				}),
				e.on("meta/load:processing", (e, t) => {
					let { songHasChanged: i } = t;
					if (i) {
						let t = { ...DEFAULT_VPT10PROPS };
						return (
							(t["Used countin"] = e.player.isCountin),
							(t["Used metronome"] = e.player.isMetronome),
							{
								curiosity: {
									...e.curiosity,
									vpt10: { ...e.curiosity.vpt10, props: t },
								},
							}
						);
					}
				}),
				e.on("player/changeSpeed", (e, t) => {
					let { speed: i } = t;
					return i <= 75
						? a("Used speed", "Slowed under 75%")(e)
						: a("Used speed")(e);
				}),
				e.on("player/togglePlay", (e) => {
					let { isMetronome: t, metronomeType: i, canPlay: n } = e.player,
						r = ["Used playback"];
					return (
						t && "voice" === i && n && r.push("Played with Voice Metronome"),
						n &&
							e.player.videoOpened &&
							e.player.video.isLoaded &&
							r.push("Played along with original video"),
						a(...r)(e)
					);
				}),
				e.on("player/toggleLoop", a("Used loop")),
				e.on("player/changePitch", a("Used pitchshift")),
				e.on("player/changeLoop", a("Used loop")),
				e.on("player/toggleCountIn", a("Used countin")),
				e.on("player/toggleMetronome", (e) => {
					let {
						isMetronome: t,
						metronomeType: i,
						canPlay: n,
						shouldPlay: r,
					} = e.player;
					return t && "voice" === i && n && r
						? a("Used metronome", "Played with Voice Metronome")(e)
						: a("Used metronome")(e);
				}),
				e.on("player/changeMetronome:init", (e, t) => {
					let { isMetronome: i, canPlay: n, shouldPlay: r } = e.player;
					if (i && "voice" === t && n && r)
						return a("Played with Voice Metronome")(e);
				}),
				e.on("player/changeType", (e, t) => {
					let { type: i } = t;
					return "solo" === i
						? a("Used solo")(e)
						: "mute" === i
						? a("Used mute")(e)
						: void 0;
				}),
				e.on("curiosity/usedFingerings", (e) =>
					a("Used fingerings for 30 seconds")(e)
				),
				e.on("screener/set", (t, i) => {
					i &&
						(i.disableEvents ||
							e.dispatch("curiosity/event", {
								event: "Screener shown",
								Header: i.title,
								Name: i.name,
							}));
				}),
				e.on("route/change", (t, i) => {
					let { route: n } = i;
					"tab" !== n.page &&
						"chords" !== n.page &&
						"search" !== n.page &&
						"artist" !== n.page &&
						headUpdate(t),
						e.dispatch("curiosity/countdown:clear"),
						e.dispatch("curiosity/vcp5:clear");
				}),
				e.on("meta/load:done", (t) => {
					"tab" === t.route.page &&
						(headUpdate(t), e.dispatch("curiosity/countdown:start"));
				}),
				e.on("chords/load:done", (t) => {
					"chords" === t.route.page &&
						(headUpdate(t), e.dispatch("curiosity/vcp5:start"));
				}),
				e.on("screener/accept", (t, i) => {
					let { screener: n, value: r } = i;
					n &&
						(n.name.endsWith("NPS")
							? e.dispatch("curiosity/event", {
									event: `NPS ${n.name.replace("NPS", "")}`,
									Value: r,
							  })
							: e.dispatch("curiosity/event", {
									event: `Screener clicked: ${n.name}`,
							  }));
				});
		}
		e.on("curiosity/increaseVpt10", (e) => {
			let t = e.curiosity.vpt10.count;
			return (
				setCookie("sr_vpt10", ++t),
				{
					curiosity: {
						...e.curiosity,
						vpt10: { ...e.curiosity.vpt10, count: t },
					},
				}
			);
		});
	};
async function apiGetEditorData(e, t, i) {
	let n = E(`/api/tab-editor?songId=${e}&part=${t}&revision=${i}`),
		r = await fetch(n);
	N(r);
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
async function apiSaveEditorData(e, t, i, n) {
	let r = E("/api/tab-editor"),
		a = { songId: e, part: t, revision: i },
		s = [];
	n.forEach((e, t) => {
		e && s.push({ ...e, index: t });
	}),
		0 !== s.length &&
			(a.data = JSON.stringify({ measuresCount: n.length, packedData: s }));
	let o = await P(r, a);
	return N(o), o.json();
}
async function apiGetEditorDataById(e) {
	let t = E(`/api/tab-editor/${e}`),
		i = await fetch(t);
	N(i);
	let n = await i.json();
	if (!n.data) return;
	let r = JSON.parse(n.data),
		a = Array(r.measuresCount);
	return (
		r.packedData.forEach((e) => {
			let t = e.index;
			delete e.index, (a[t] = e);
		}),
		{ songId: n.songId, part: n.part, revision: n.revision, data: a }
	);
}
async function apiAdminData(e, t) {
	let i = E(`/api/tab-editor/admin-data?offset=${e}&limit=${t}`),
		n = await fetch(i);
	return N(n), n.json();
}
let moveNote = function () {
		let e =
				arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: [0, 0, 0, 0, 0, 0],
			t = arguments.length > 1 ? arguments[1] : void 0,
			i = arguments.length > 2 ? arguments[2] : void 0,
			n = e[i.string] + i.fret;
		return n - e[t];
	},
	getOriginalBeat = (e, t) => {
		let i = e.measures.find((e) => e.index === t.measure),
			n = i?.voices.find((e) => e.index === t.voice);
		return n?.beats.find((e) => e.index === t.beat);
	},
	getEditedBeat = function () {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
			t = arguments.length > 1 ? arguments[1] : void 0,
			i = e[t.measure];
		return i?.beats.find((e) => e.beatNum === t.beat && e.voice === t.voice);
	},
	isSameNote = (e, t, i) => {
		let n = moveNote(i, t.string, e);
		return n === t.fret;
	},
	checkIfNoteMoved = (e, t, i) => {
		if (e.edit?.fret === "" && t.edit) {
			let n = t.edit,
				r = { string: n.string, fret: parseInt(n.fret) };
			return isSameNote(e.note, r, i);
		}
		if (t.edit?.fret === "" && e.edit) {
			let n = e.edit,
				r = { string: n.string, fret: parseInt(n.fret) };
			return isSameNote(t.note, r, i);
		}
		return !1;
	},
	checkIfMoved = (e) => {
		let {
				originalBeat: t,
				editedBeat: i,
				currentString: n,
				string: r,
				tuning: a,
			} = e,
			s = t.notes.find((e) => e.string === n),
			o = i?.editedNotes.find((e) => e.string === n),
			l = t.notes.find((e) => e.string === r),
			u = i?.editedNotes.find((e) => e.string === r);
		return checkIfNoteMoved({ note: s, edit: o }, { note: l, edit: u }, a);
	},
	getTakenStrings = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			i = arguments.length > 2 ? arguments[2] : void 0,
			n = [],
			r = [],
			a = getOriginalBeat(e, i),
			s = getEditsOnBeat(a?.layout, t);
		for (let e of s) {
			let t = e.editedNotes ?? [];
			for (let e of t)
				e.fret && "X" !== e.fret
					? n.push(e.string)
					: e.fret || r.push(e.string);
		}
		for (let e of a?.layout.beats)
			if (e.notes) for (let t of e.notes) t && !t.bogus && n.push(t.string);
		return n.filter((e) => !r.includes(e));
	},
	getStringsRange = (e) =>
		Array(e)
			.fill(0)
			.map((e, t) => t),
	getNextFreeString = (e, t, i) => {
		let n = e.filter((e) => ("up" === i ? e < t : e > t));
		console.log({ string: t, nextStrings: n });
		let r = "up" === i ? Math.max(...n) : Math.min(...n);
		return Number.isFinite(r) ? r : null;
	},
	STRINGS_GAP = 12,
	getStringOnY = (e, t) => {
		let i = lineStringY(e),
			n = e.line.strings,
			r = t - i;
		if (r < -10 || r > 73) return;
		let a = Math.floor(r / 12),
			s = r - 12 * a <= 6 ? a : a + 1;
		return s < 0 ? (s = 0) : s >= n && (s = n - 1), s;
	},
	getEditsOnBeat = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			i = e?.beats ?? [],
			n = [];
		for (let e of i) {
			let i = getEditedBeat(t, {
				measure: e.measure.index,
				beat: e.index,
				voice: e.voice,
			});
			i && i.editedNotes.length && n.push(i);
		}
		return n;
	},
	pickBeatOnString = function (e) {
		let t,
			i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			n = arguments.length > 2 ? arguments[2] : void 0,
			r = e.beats,
			a = getEditsOnBeat(e, i),
			s = a.find((e) => e.editedNotes.find((e) => e.string === n));
		if (
			(s && (t = r.find((e) => e.index === s.beatNum && e.voice === s.voice)),
			t)
		)
			return t;
		for (let e of r)
			if (!e.rest && e.notes && 0 !== e.notes.length) {
				for (let i of e.notes)
					if (i.string === n && !i.bogus) {
						t = e;
						break;
					}
				if (void 0 !== t) break;
			}
		if (void 0 !== t || (t = r.find((e) => !e.rest && e.notes?.length !== 0)))
			return t;
	},
	moveString = function (e, t, i) {
		let n,
			r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
		return (
			"up" === i
				? (n = e - 1) < 0 && (n = r ? t - 1 : e)
				: "down" === i && (n = e + 1) >= t && (n = r ? 0 : e),
			n
		);
	},
	moveBeat = (e, t, i) => {
		let n = e,
			r = "right" === i ? "nextBeat" : "prevBeat";
		do {
			let e = n;
			if (!(n = e[r])) {
				let t = e.layout.beats.find((e) => e[r] && !e.lyrics);
				if (!t) return;
			}
			let t = n.layout.measureLayout.measure.index;
			for (let a of e.layout.beats) {
				if (!a[r] || a.lyrics || 0 === a.notes.length) continue;
				let e = a[r],
					s = e.layout.measureLayout.measure.index;
				if (("right" === i && s < t) || ("left" === i && s > t))
					(t = s), (n = e);
				else if (s === t) {
					let i = n.duration[0] / n.duration[1],
						r = a.duration[0] / a.duration[1];
					r < i && ((t = s), (n = e));
				}
			}
			if (n.rest) {
				let e = n.layout.beats.find(
					(e) => !e.rest && !e.lyrics && 0 !== e.notes.length
				);
				e && (n = e);
			}
		} while (!0 === n.rest);
		return n;
	},
	formCoordinates = function (e, t, i) {
		let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			r = e,
			a = n,
			s = r.layout,
			o = lineStringY(s.measureLayout.lineLayout),
			l = s.measureLayout.measure.index,
			u = s.absoluteX * i,
			d = "",
			c = r.notes?.find((e) => e.string === t && !e.bogus);
		if (c) d = c.dead ? "X" : c.fret;
		else {
			let e = s.beats.filter(
				(e) => e.notes && 0 !== e.notes.length && e.voice !== n
			);
			for (let i of e) {
				let e = i.notes.find((e) => e.string === t && !e.bogus);
				e && ((d = e.fret), (r = i), (a = i.voice));
			}
		}
		return {
			formX: u,
			formY: (o + 12 * (t - 1)) * i,
			fret: d,
			measureNum: l,
			beatNum: r.index,
			beat: r,
			voice: a,
		};
	},
	SEEN_EDITOR = "hasSeenEditor",
	seenEditor = (e) => {
		let t = R(SEEN_EDITOR);
		return t === e;
	},
	setSeenEditor = (e) => C(SEEN_EDITOR, e);
function preventPageClosing(e) {
	return (e.returnValue = "o/"), "o/";
}
let editedFret = (e, t, i, n, r) => {
		if (e) {
			let a = e[t];
			if (a && a.beats) {
				let e = a.beats.find((e) => e.beatNum === i && e.voice === r);
				if (e && e.editedNotes) {
					let t = e.editedNotes.find((e) => e.string === n);
					if (t) return t.fret;
				}
			}
		}
	},
	module$4 = (e) => {
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
				let { tabEditor: i } = e;
				if ("tab_editor" === t)
					return {
						tabEditor: {
							...i,
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
			e.on("tabEditor/setForm", (t, i) => {
				let { beatsLayout: n, stringNum: r, scale: a } = i,
					s = pickBeatOnString(n, t.tabEditor.data, r),
					o = s?.voice,
					{
						formX: l,
						formY: u,
						fret: d,
						beatNum: c,
						measureNum: p,
						...h
					} = formCoordinates(s, r, a, o),
					g = editedFret(t.tabEditor.data, p, c, r, h.voice);
				if (u < 0 || Number.isNaN(u)) return;
				let { device: f } = t,
					m = isIpad(f) || isAndroid(f.os) || isIos(f.os);
				return (
					m ||
						e.dispatch("cursor/move", {
							cursor: leftTime(h.beat.layout),
							loopStart: t.cursor.position.loopStart,
							loopEnd: t.cursor.position.loopEnd,
						}),
					{
						tabEditor: {
							...t.tabEditor,
							positioned: !0,
							formX: l,
							formY: u,
							fret: void 0 !== g ? `${g}` : `${d}`,
							originalFret: `${d}`,
							beat: s,
							beatNum: c,
							stringNum: r,
							measureNum: p,
							voice: o,
						},
					}
				);
			}),
			e.on("tabEditor/formMove", (t, i) => {
				let { tabEditor: n, cursor: r, device: a } = t,
					{ scale: s, direction: o, preserveVoice: l } = i,
					{ stringNum: u, beat: d, positioned: c } = n;
				if (!c) return;
				let p = d,
					h = u,
					g = p.layout.measureLayout.lineLayout.line.strings,
					f = "up" === o || "down" === o;
				f
					? ((h = moveString(u, g, o)),
					  (p = l ? d : pickBeatOnString(d.layout, n.data, h)))
					: (p = moveBeat(d, n.data, o));
				let {
						formX: m,
						formY: y,
						fret: T,
						beatNum: S,
						measureNum: _,
						...v
					} = formCoordinates(p, h, s, p.voice),
					E = editedFret(n.data, _, S, h, v.voice),
					b = isIpad(a) || isAndroid(a.os) || isIos(a.os);
				return (
					b ||
						e.dispatch("cursor/move", {
							cursor: leftTime(v.beat.layout),
							loopStart: r.position.loopStart,
							loopEnd: r.position.loopEnd,
						}),
					{
						tabEditor: {
							...n,
							positioned: !0,
							formX: m,
							formY: y,
							fret: void 0 !== E ? `${E}` : `${T}`,
							originalFret: `${T}`,
							beat: v.beat,
							voice: v.voice,
							beatNum: S,
							stringNum: h,
							measureNum: _,
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
			e.on("tabEditor/moveNote:dnd", (t, i) => {
				let { tabEditor: n, part: r } = t,
					{ scale: a, newString: s } = i,
					{
						fret: o,
						stringNum: l,
						beatNum: u,
						measureNum: d,
						voice: c,
						beat: p,
					} = n;
				if (!o) {
					console.debug("No fret selected");
					return;
				}
				let h = getTakenStrings(r.current, n.data, {
						measure: d,
						voice: c,
						beat: u,
					}),
					g = h.includes(s);
				if (g) {
					console.debug("String is taken", { newString: s, takenStrings: h });
					return;
				}
				if (!Number.isInteger(s)) {
					console.debug("Invalid string", { newString: s });
					return;
				}
				let f = moveNote(r.current.tuning, s, {
					string: l,
					fret: parseInt(o, 10),
				});
				if (Number.isNaN(f) || f < 0 || f > r.current.frets - 1) {
					console.debug("Fret is out of range", { newFret: f, newString: s });
					return;
				}
				e.dispatch("tabEditor/changeNote", { newFret: "", isMove: !0 }),
					e.dispatch("tabEditor/setForm", {
						scale: a,
						beatsLayout: p.layout,
						stringNum: s,
					}),
					e.dispatch("tabEditor/changeNote", {
						newFret: f.toString(10),
						isMove: !0,
					}),
					e.dispatch("curiosity/event", {
						event: "Moved note",
						Via: "drag-and-drop",
					});
			}),
			e.on("tabEditor/moveNote:shortcut", (t, i) => {
				let { tabEditor: n, part: r } = t,
					{ fret: a, stringNum: s, beatNum: o, measureNum: l, voice: u } = n;
				if (!a) {
					console.debug("No fret selected");
					return;
				}
				let d = getTakenStrings(r.current, n.data, {
						measure: l,
						voice: u,
						beat: o,
					}),
					c = moveString(s, r.current.strings, i.direction, !1),
					p = d.includes(c);
				if (p) {
					let e = getStringsRange(r.current.strings),
						t = e.filter((e) => !d.includes(e));
					c = getNextFreeString(t, c, i.direction);
				}
				if (!Number.isInteger(c)) {
					console.debug("String is taken", { newString: c, takenStrings: d });
					return;
				}
				let h = moveNote(r.current.tuning, c, {
					string: s,
					fret: parseInt(a, 10),
				});
				if (Number.isNaN(h) || h < 0 || h > r.current.frets - 1) {
					console.debug("Fret is out of range", { newFret: h, newString: c });
					return;
				}
				e.dispatch("tabEditor/changeNote", { newFret: "", isMove: !0 });
				let g = Math.abs(c - s);
				for (let t = 0; t < g; t++)
					e.dispatch("tabEditor/formMove", { ...i, preserveVoice: !0 });
				e.dispatch("tabEditor/changeNote", {
					newFret: h.toString(10),
					isMove: !0,
				}),
					e.dispatch("curiosity/event", {
						event: "Moved note",
						Via: "shortcut",
					});
			});
		let t = (e, t) => {
			let i, n;
			let { measureNum: r, voice: a, beatNum: s, stringNum: o } = e,
				l = { measure: r, voice: a, beat: s },
				u = getOriginalBeat(t, l),
				d = getEditedBeat(e.data, l);
			return (
				o > 0 &&
					(n = checkIfMoved({
						originalBeat: u,
						editedBeat: d,
						currentString: o,
						string: o - 1,
						tuning: t.tuning,
					})),
				o < t.strings - 1 &&
					(i = checkIfMoved({
						originalBeat: u,
						editedBeat: d,
						currentString: o,
						string: o + 1,
						tuning: t.tuning,
					})),
				n || i
			);
		};
		e.on("tabEditor/changeNote", (i, n) => {
			let r,
				{ tabEditor: a, part: s, user: o } = i,
				{ newFret: l, isMove: u } = n,
				{
					measureNum: d,
					fret: c,
					originalFret: p,
					stringNum: h,
					beatNum: g,
					voice: f,
					positioned: m,
				} = a;
			if (!m || l === c) return;
			if (a.data) r = [...a.data];
			else {
				let e = s.current.measures.length;
				r = Array(e);
			}
			let y = r[d];
			if (y && y.beats) {
				y = { beats: [...y.beats] };
				let e = y.beats.findIndex((e) => e.beatNum === g && e.voice === f);
				if (-1 === e)
					y.beats.push({
						beatNum: g,
						voice: f,
						editedNotes: [{ string: h, fret: l, originalFret: p }],
					});
				else {
					let t = y.beats[e];
					t.editedNotes = [...t.editedNotes];
					let i = t.editedNotes.findIndex((e) => e.string === h);
					-1 !== i &&
						(t.editedNotes = t.editedNotes
							.slice(0, i)
							.concat(t.editedNotes.slice(i + 1))),
						("" === p && "" === l) ||
							p === l ||
							t.editedNotes.push({ string: h, fret: l, originalFret: p }),
						0 === t.editedNotes.length &&
							(y.beats = y.beats.slice(0, e).concat(y.beats.slice(e + 1))),
						0 === y.beats.length && (y = void 0);
				}
				r[d] = y;
			} else
				(y = {
					beats: [
						{
							beatNum: g,
							voice: f,
							editedNotes: [{ string: h, fret: l, originalFret: p }],
						},
					],
				}),
					(r[d] = y);
			let T = { ...a, data: r, fret: l, status: "changes" };
			return (
				!u &&
					t(T, s.current) &&
					e.dispatch("curiosity/event", { event: "Moved note", Via: "edit" }),
				window.addEventListener("beforeunload", preventPageClosing),
				clearTimeout(feedbackTimer),
				(feedbackTimer = setTimeout(
					() => activateScreenerWithEvent(e, "TriedEditor"),
					2e4
				)),
				o.isLoggedIn &&
					(clearTimeout(saveTimer),
					(saveTimer = setTimeout(() => e.dispatch("tabEditor/save"), 3e3))),
				{ tabEditor: T }
			);
		});
		let i = (t) => {
			let { tabEditor: i } = t;
			"changes" === i.status && e.dispatch("tabEditor/save");
		};
		e.on("user/signIn", i),
			e.on("user/googleSignIn", i),
			e.on("user/signUp", i),
			e.on("tabEditor/save", async (t) => {
				let { meta: i, part: n, tabEditor: r, user: a } = t;
				try {
					"changes" === r.status &&
						a.isLoggedIn &&
						(e.dispatch("tabEditor/save:changeStatus", "saving"),
						await apiSaveEditorData(i.songId, n.partId, n.revisionId, r.data),
						e.dispatch("curiosity/event", { event: "Autosaved tab edits" }),
						setTimeout(
							() => e.dispatch("tabEditor/save:changeStatus", "saved"),
							1e3
						));
				} catch (e) {
					console.log(e);
				}
			}),
			e.on("tabEditor/save:changeStatus", (e, t) => {
				if (!("saved" === t && "changes" === e.tabEditor.status))
					return (
						"saved" === t &&
							window.removeEventListener("beforeunload", preventPageClosing),
						{ tabEditor: { ...e.tabEditor, status: t } }
					);
			}),
			e.on("part/load:raw", () => {
				e.dispatch("tabEditor/load");
			}),
			e.on("tabEditor/load", async (t) => {
				let { user: i, meta: n, query: r } = t;
				try {
					if ((e.dispatch("tabEditor/load:flush"), i.isLoggedIn)) {
						let t;
						(t =
							void 0 !== r.tabedit && can(i, b.USE_TAB_EDITOR)
								? await apiGetEditorDataById(+r.tabedit)
								: await apiGetEditorData(
										n.current.songId,
										n.partId,
										n.current.revisionId
								  )) &&
							e.dispatch("tabEditor/load:done", {
								songId: t.songId,
								part: t.part,
								data: t.data,
							});
					}
				} catch (e) {
					console.log(e);
				}
			}),
			e.on("tabEditor/load:flush", (e) => {
				let { tabEditor: t } = e;
				return (
					window.removeEventListener("beforeunload", preventPageClosing),
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
				let { songId: i, part: n, data: r } = t;
				if (i !== e.meta?.current?.songId || n !== e.meta?.partId) {
					console.log("Loaded tab editor data lost its relevance");
					return;
				}
				return { tabEditor: { ...e.tabEditor, data: r } };
			}),
			e.on("tab_editor/toggleAdminPanel", (e) => ({
				tabEditor: {
					...e.tabEditor,
					adminPanelOpened: !e.tabEditor.adminPanelOpened,
				},
			})),
			e.on("tabEditor/loadAdminData", async (t, i) => {
				let { user: n } = t,
					{ offset: r, limit: a } = i;
				try {
					if (can(n, b.USE_TAB_EDITOR)) {
						let t = await apiAdminData(r, a);
						e.dispatch("tabEditor/loadAdminData:done", t);
					}
				} catch (e) {
					console.log(e);
				}
			}),
			e.on("tabEditor/loadAdminData:done", (e, t) => ({
				tabEditor: { ...e.tabEditor, adminData: t },
			})),
			e.on("tabEditor/loadById", (t, i) => {
				let n = t.tabEditor.adminData.find((e) => e.id === i);
				if (can(t.user, b.USE_TAB_EDITOR) && n) {
					let { songId: r, partId: a, revisionId: s } = t.part,
						o = getUrl(
							{ songId: n.songId, artist: "", title: "" },
							n.part,
							n.revision
						);
					e.dispatch("navigate", `${o}?tabedit=${i}`),
						n.songId === r &&
							n.part === a &&
							n.revision === s &&
							delay(() => e.dispatch("tabEditor/load"));
				}
			});
	},
	FINGERINGS_BUCKET_DOMAIN = "d1u3zjg5j4sw4b";
class InProgressError extends Error {
	constructor(e) {
		super(e),
			Error.captureStackTrace && Error.captureStackTrace(this, InProgressError),
			(this.name = "InProgressError"),
			(this.message = e);
	}
}
let loadFromCloud = async (e) => {
	try {
		let t = await M(`https://d1u3zjg5j4sw4b.cloudfront.net/${e}`);
		return N(t), t.json();
	} catch (e) {
		if (404 === e.status) return null;
		throw e;
	}
};
async function apiGetFingerings(e, t) {
	let i = `${e}/${t.songId}-${t.partId}-${t.revisionId}.json`,
		n = await loadFromCloud(i);
	if (n) return console.log("Taken from the cloud"), n;
	let r = E("/fingerings/generate"),
		a = await P(r, { part: t });
	N(a), console.log("Generated on server");
	let s = await a.json();
	if ("In progress" === s.status) throw new InProgressError(s.info);
	return s;
}
let CURRENT_FINGERINGS_VERSION = "v1",
	fingeringsUseTimer = null,
	module$3 = (e) => {
		e.on("fingerings/loadedPart", (e, t) => {
			let { fingerings: i, part: n } = e,
				{ songId: r, revisionId: a, rawPart: s } = t;
			return (fingeringsUseTimer && clearTimeout(fingeringsUseTimer),
			n.songId !== r || n.revisionId !== a)
				? {
						fingerings: {
							...i,
							rawPart: JSON.parse(JSON.stringify(s)),
							storedFingerings: [],
							trackFingering: void 0,
							shown: !1,
							status: null,
						},
				  }
				: {
						fingerings: {
							...i,
							rawPart: JSON.parse(JSON.stringify(s)),
							trackFingering: void 0,
							shown: !1,
							status: null,
						},
				  };
		}),
			e.on("fingerings/toggle", async (t) => {
				let { part: i, fingerings: n, experiments: r } = t,
					{ partId: a, songId: s, revisionId: o } = i;
				fingeringsUseTimer && clearTimeout(fingeringsUseTimer);
				let l =
					r.paid_fingerings?.segment === "ut" ||
					r.paid_fingerings?.segment === "on";
				if (l && "Loading" !== n.status) {
					if (n.shown)
						e.dispatch("curiosity/event", {
							event: "Clicked close fingerings",
						}),
							e.dispatch("fingerings/hide");
					else {
						if (
							(e.dispatch("curiosity/event", {
								event: "Clicked open fingerings",
							}),
							(fingeringsUseTimer = setTimeout(
								() => e.dispatch("curiosity/usedFingerings"),
								3e4
							)),
							n.storedFingerings.find((e) => e.partId === a))
						) {
							e.dispatch("fingerings/show", a);
							return;
						}
						if (n.rawPart) {
							e.dispatch("fingerings/load:init");
							try {
								let t = await apiGetFingerings("v1", n.rawPart),
									i = { partId: a, data: t };
								setTimeout(() => e.dispatch("fingerings/load:done", i), 200);
							} catch (t) {
								"InProgressError" === t.name
									? e.dispatch("fingerings/load:inProgress")
									: (e.dispatch("curiosity/event", {
											event: "Failed to generate fingerings",
											songId: s,
											partId: a,
											revisionId: o,
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
				let { fingerings: i } = e,
					n = [...i.storedFingerings];
				return (
					n.find((e) => e.partId === t.partId) || n.push(t),
					{
						fingerings: {
							...i,
							storedFingerings: n,
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
				let { fingerings: i } = e,
					n = i.storedFingerings.find((e) => e.partId === t);
				if (n)
					return {
						fingerings: { ...i, trackFingering: n, shown: !0, status: null },
					};
			});
	};
async function apiGetTabs(e) {
	let t = E("/api/person/revisions"),
		i = await fetch(t, { credentials: "include" });
	return await O(i), N(i), await i.json();
}
async function loadTabs(e, t) {
	try {
		e("myTabs/load:processing");
		let i = await apiGetTabs(t);
		e("myTabs/load:done", i.revisions || []);
	} catch (t) {
		console.error("myTabs/load:error", t), e("myTabs/load:error", t);
	}
}
let module$2 = (e) => {
		e.on("user/signIn", async () => loadTabs(e.dispatch, void 0)),
			e.on("user/googleSignIn", async () => loadTabs(e.dispatch, void 0)),
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
	},
	module$1 = (e) => {
		e.on("playAlongAd/toggle", (e) => {
			let { playAlongAd: t } = e;
			return { playAlongAd: { isOpened: !t.isOpened } };
		});
	},
	module = (e) => {
		e.on("tempo/apply", (e, t) => ({ tempo: { tempo: t } })),
			e.on("part/load:inflated", (e, t) => {
				let { cursor: i } = e,
					{ current: n } = t;
				return { tempo: { tempo: getTempo(n, i.position.cursor) } };
			}),
			e.on("cursor/move", (e, t) => {
				let { part: i, tempo: n } = e,
					r = i.current ? getTempo(i.current, t.cursor) : n.tempo;
				if (r != n.tempo) return { tempo: { tempo: r } };
			});
	};
var configureStore = (e) =>
	new Store(
		[
			module$E,
			module$v,
			module$D,
			module,
			module$w,
			module$B,
			W,
			module$z,
			module$A,
			module$y,
			module$6,
			module$C,
			module$u,
			module$t,
			module$x,
			module$r,
			module$q,
			module$o,
			module$n,
			module$s,
			module$m,
			module$l,
			module$k,
			module$j,
			module$i,
			module$h,
			module$g,
			module$p,
			module$e,
			module$d,
			module$c,
			module$f,
			module$b,
			module$a,
			module$4,
			module$9,
			module$7,
			module$8,
			module$3,
			module$5,
			module$2,
			module$1,
		],
		e
	);
function registerServiceWorker() {
	try {
		"serviceWorker" in navigator &&
			window.addEventListener("load", () => {
				let e = `/service-worker${Z ? "-" + Z : ""}.js`;
				navigator.serviceWorker
					.register(e, { scope: "/" })
					.catch(console.error.bind(console));
			});
	} catch (e) {
		console.error(e);
	}
}
function unregisterServiceWorker() {
	try {
		navigator.serviceWorker.ready.then((e) => {
			e.unregister();
		});
	} catch (e) {
		console.error(e);
	}
}
let __default$J = {},
	__default$I = {},
	app = "Cdy1hg",
	chordsMinimalism = "Cdylb",
	chords = "Cdy9a",
	tablature = "Cdyrh",
	pane$3 = "Cdy21",
	debug = "Cdy1xh",
	tos = "Cdyft",
	popupOverlay = "Cdy17e",
	footer = "Cdy18g",
	footerWithAds = "Cdy18g Cdy2gp",
	copyright = "Cdywb",
	rightSidebar = "Cdy2g1",
	appFree = "Cdy1hg Cdy160",
	appPlus = "Cdy1hg Cdy3h",
	appChords = "Cdy1hg Cdy308",
	appChordsMinimalism = "Cdy1hg Cdy308 Cdy2al",
	appTags = "Cdy1hg Cdy29",
	isTestMode = "Cdy1k3",
	__default$H = {
		app: "Cdy1hg",
		chordsMinimalism: "Cdylb",
		chords: "Cdy9a",
		tablature: "Cdyrh",
		pane: "Cdy21",
		debug: "Cdy1xh",
		tos: "Cdyft",
		popupOverlay: "Cdy17e",
		footer: "Cdy18g",
		footerWithAds: "Cdy18g Cdy2gp",
		copyright: "Cdywb",
		rightSidebar: "Cdy2g1",
		appFree: "Cdy1hg Cdy160",
		appPlus: "Cdy1hg Cdy3h",
		appChords: "Cdy1hg Cdy308",
		appChordsMinimalism: "Cdy1hg Cdy308 Cdy2al",
		appTags: "Cdy1hg Cdy29",
		isTestMode: "Cdy1k3",
	};
function connect(e) {
	for (
		var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
		n < t;
		n++
	)
		i[n - 1] = arguments[n];
	return function (t) {
		return s(e, { ...t, ...useStore.apply(null, i) });
	};
}
let spinner = "ki1vh",
	button$6 = "ki1vh ki326",
	migrate = "ki1vh ki2jc",
	google$1 = "ki1vh ki1hu",
	search = "ki1vh kibb",
	icon$6 = "ki29b",
	revisions$1 = "ki1vh ki1ny",
	songs = "ki1vh ki32k",
	songsInvisible = "ki1vh ki32k ki2jd",
	feature = "ki1vh ki2iu",
	__default$G = {
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
	Spinner = (e) => {
		let {
			x: t,
			y: i,
			width: n,
			height: r,
			fill: a,
			className: o = __default$G.spinner,
			style: l,
			id: u,
			iref: d,
		} = e;
		return s(
			"svg",
			{
				className: o,
				ref: d,
				id: u,
				x: t,
				y: i,
				width: n,
				height: r,
				style: l,
				viewBox: "25 25 50 50",
				"aria-labelledby": "spinner-title",
			},
			s("circle", { stroke: a, cx: "50", cy: "50", r: "20" })
		);
	},
	loader = "D0y2s5",
	__default$F = { loader: "D0y2s5" };
function SuspenseSpinner() {
	return o("div", {
		className: __default$F.loader,
		children: s(Spinner, { width: 50, height: 40, fill: "#128df6" }),
	});
}
let alert$1 = "B41py",
	info = "B41py B4d2",
	error$2 = "B41py B431b",
	notice = "B41py B41jo",
	__default$E = {
		alert: "B41py",
		info: "B41py B4d2",
		error: "B41py B431b",
		notice: "B41py B41jo",
	};
function getClassName(e) {
	switch (e) {
		case "error":
			return __default$E.error;
		case "notice":
			return __default$E.notice;
		default:
			return __default$E.info;
	}
}
function getLines(e, t, i, n) {
	let r = e.length,
		a = Math.ceil((r * i + n * Math.ceil((r * i) / t)) / t);
	if (1 === a) return [e];
	let s = Math.ceil((t - n) / i),
		o = 0,
		l = [];
	for (let t = 0; t < a; t++) {
		let i;
		let n = e.substr(o, s);
		if (t !== a - 1) {
			let e = n.split(" ");
			i = n.lastIndexOf(e[e.length - 1]);
		}
		(o += i), l.push(n.substr(0, i).trim());
	}
	return l;
}
function Alert(e) {
	let { level: t, title: i, action: n } = e,
		{ screen: r, device: a } = useStore("screen", "device");
	if ("bot" === a.type) return;
	let o = getClassName(t),
		l = a.isPhone ? 0 : 190,
		u = r.viewport.width - l > 600 ? 600 : r.viewport.width - l,
		d = getLines(i, u, 9, 10),
		c = getLines(n, u, 7, 10),
		p =
			"undefined" == typeof btoa
				? (e) => Buffer.from(e, "binary").toString("base64")
				: btoa;
	return s(
		"div",
		{ key: `alert-${t}`, className: o, role: "alert" },
		d.map((e) =>
			s("img", {
				height: 30,
				"aria-label": "title",
				alt: i,
				src:
					"data:image/svg+xml;base64," +
					p(`<svg xmlns='http://www.w3.org/2000/svg' width='${
						9 * e.length + 10
					}' height='30'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
			})
		),
		n &&
			c.map((e) =>
				s("img", {
					height: 22,
					"aria-label": "action",
					alt: n,
					src:
						"data:image/svg+xml;base64," +
						p(`<svg xmlns='http://www.w3.org/2000/svg' width='${
							7 * e.length + 10
						}' height='22'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
				})
			)
	);
}
function SuspenseWrap() {
	let [e] = l((e) => {
		"Sentry" in window &&
			"function" == typeof window.Sentry.captureException &&
			window.Sentry.captureException(e),
			console && console.error(e);
	});
	return e
		? o(Alert, {
				level: "error",
				reason: "lazy",
				title: "Failed to load page",
				action: "Please disable your ad blocker and check network connection",
		  })
		: o(u, {
				fallback: o(SuspenseSpinner, {}),
				children: o(this.props.component, this.props),
		  });
}
let isModifiedEvent = (e) =>
	!!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
function Link(e) {
	let i = t(StoreContext),
		n = e.href || e.to,
		r = e.onClick,
		a = d(
			(e) => {
				isModifiedEvent(e) ||
					(e.preventDefault(), r && r(), i.dispatch("navigate", n));
			},
			[n, r]
		);
	return s("a", { ...e, href: n, onClick: a, to: null });
}
let base = "i5k2",
	horizontalPopup = "i5k2 i52z2",
	verticalPopup = "i5k2 i51pj",
	verticalLeftPopup = "i5k2 i52e5",
	speedPopup = "i5k2 i52z2 i533w",
	pitchPopup = "i5k2 i52z2 i515d",
	soloPopup = "i5k2 i52z2 i527v",
	mutePopup = "i5k2 i52z2 i513s",
	loopPopup = "i5k2 i52z2 i51e9",
	printPopup = "i5k2 i52z2 i51xu",
	pitchshiftPopup = "i5k2 i52wn",
	link$4 = "i5p0",
	basewrapper = "i5tp",
	wrapper$3 = "i5tp i51jx",
	demowrapper = "i5tp i5173",
	text$4 = "i5t4",
	linkText$1 = "i51o8",
	demoText = "i517k",
	divider$1 = "i52ov",
	__default$D = {
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
	popup$2 = base + " vtm3",
	text$3 = text$4 + " vt1nf",
	surveySection = "vt25r",
	__default$C = {
		popup: base + " vtm3",
		text: text$4 + " vt1nf",
		surveySection: "vt25r",
	};
class ExplainDifficultyPopup extends c {
	componentDidMount() {}
	onUnderstandLinkClick = (e) => {
		e.preventDefault(), this.props.dispatch("layer/hide");
	};
	onStillHaveQuestionsLinkClick = () => {};
	render() {
		return s(
			"div",
			{ className: __default$C.popup, id: "explain-difficulty-popup" },
			s(
				"div",
				{ className: __default$C.text },
				"Each guitar track is assigned a difficulty level based on:",
				s(
					"ol",
					{},
					s(
						"li",
						{},
						"The speed required for playing left and right hand. Faster is harder."
					),
					s(
						"li",
						{},
						"The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."
					),
					s(
						"li",
						{},
						"The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc."
					)
				),
				s(
					"p",
					{},
					"We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."
				),
				s(
					"p",
					{},
					s(
						"i",
						{},
						"Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles."
					)
				),
				s(
					"div",
					{ className: __default$C.surveySection },
					s(
						"a",
						{ onClick: this.onUnderstandLinkClick, href: "", role: "button" },
						"I understand, all clear"
					),
					s(
						Link,
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
var ExplainDifficultyPopup$1 = connect(ExplainDifficultyPopup);
let TransitionGroupContext = e(null),
	isValidElement = (e) => e && e.props;
function getChildMapping(e, t) {
	let i = (e) => (t && isValidElement(e) ? t(e) : e),
		n = Object.create(null);
	return (
		e &&
			p(e).forEach((e) => {
				e && (n[e.key] = i(e));
			}),
		n
	);
}
function mergeChildMappings(e, t) {
	let i;
	function n(i) {
		return i in t ? t[i] : e[i];
	}
	(e = e || {}), (t = t || {});
	let r = Object.create(null),
		a = [];
	for (let i in e) i in t ? a.length && ((r[i] = a), (a = [])) : a.push(i);
	let s = {};
	for (let e in t) {
		if (r[e])
			for (i = 0; i < r[e].length; i++) {
				let t = r[e][i];
				s[r[e][i]] = n(t);
			}
		s[e] = n(e);
	}
	for (i = 0; i < a.length; i++) s[a[i]] = n(a[i]);
	return s;
}
function getProp(e, t, i) {
	return null != i[t] ? i[t] : e.props && e.props[t];
}
function getInitialChildMapping(e, t) {
	return getChildMapping(e.children, (i) =>
		h(i, {
			onExited: t.bind(null, i),
			in: !0,
			appear: getProp(i, "appear", e),
			enter: getProp(i, "enter", e),
			exit: getProp(i, "exit", e),
		})
	);
}
function getNextChildMapping(e, t, i) {
	let n = getChildMapping(e.children),
		r = mergeChildMappings(t, n);
	return (
		Object.keys(r).forEach((a) => {
			let s = r[a];
			if (!isValidElement(s)) return;
			let o = a in t,
				l = a in n,
				u = t[a],
				d = isValidElement(u) && !u.props.in;
			l && (!o || d)
				? (r[a] = h(s, {
						onExited: i.bind(null, s),
						in: !0,
						exit: getProp(s, "exit", e),
						enter: getProp(s, "enter", e),
				  }))
				: l || !o || d
				? l &&
				  o &&
				  isValidElement(u) &&
				  (r[a] = h(s, {
						onExited: i.bind(null, s),
						in: u.props.in,
						exit: getProp(s, "exit", e),
						enter: getProp(s, "enter", e),
				  }))
				: (r[a] = h(s, { in: !1 }));
		}),
		r
	);
}
let values = Object.values || ((e) => Object.keys(e).map((t) => e[t]));
class TransitionGroup extends c {
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
		let { children: i, handleExited: n, firstRender: r } = t;
		return {
			children: r ? getInitialChildMapping(e, n) : getNextChildMapping(e, i, n),
			firstRender: !1,
		};
	}
	handleExited(e, t) {
		let i = getChildMapping(this.props.children);
		e.key in i ||
			(e.props.onExited && e.props.onExited(t),
			this.setState((t) => {
				let i = { ...t.children };
				return delete i[e.key], { children: i };
			}));
	}
	render() {
		let { component: e, childFactory: t, ...i } = this.props,
			n = values(this.state.children).map(t);
		return (
			delete i.appear,
			delete i.enter,
			delete i.exit,
			s(
				TransitionGroupContext.Provider,
				{ value: { isMounting: !this.appeared } },
				e ? s(e, i, n) : s(g, null, n)
			)
		);
	}
}
let UNMOUNTED = "unmounted",
	EXITED = "exited",
	ENTERING = "entering",
	ENTERED = "entered",
	EXITING = "exiting";
function findDOMNode(e) {
	return e ? e.base || (1 === e.nodeType && e) : null;
}
class Transition extends c {
	static contextType = TransitionGroupContext;
	constructor(e, t) {
		let i;
		super(e, t);
		let n = t && !t.isMounting ? e.enter : e.appear;
		(this.appearStatus = null),
			e.in
				? n
					? ((i = EXITED), (this.appearStatus = ENTERING))
					: (i = ENTERED)
				: (i = e.unmountOnExit || e.mountOnEnter ? UNMOUNTED : EXITED),
			(this.state = { status: i }),
			(this.nextCallback = null);
	}
	static getDerivedStateFromProps(e, t) {
		let { in: i } = e;
		return i && t.status === UNMOUNTED ? { status: EXITED } : null;
	}
	componentDidMount() {
		this.updateStatus(!0, this.appearStatus);
	}
	componentDidUpdate(e) {
		let t = null;
		if (e !== this.props) {
			let { status: e } = this.state;
			this.props.in
				? e !== ENTERING && e !== ENTERED && (t = ENTERING)
				: (e === ENTERING || e === ENTERED) && (t = EXITING);
		}
		this.updateStatus(!1, t);
	}
	componentWillUnmount() {
		this.cancelNextCallback();
	}
	getTimeouts() {
		let e, t, i;
		let { timeout: n } = this.props;
		return (
			(e = t = i = n),
			null != n &&
				"number" != typeof n &&
				((e = n.exit), (t = n.enter), (i = n.appear)),
			{ exit: e, enter: t, appear: i }
		);
	}
	updateStatus() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			t = arguments.length > 1 ? arguments[1] : void 0;
		if (null !== t) {
			this.cancelNextCallback();
			let i = findDOMNode(this);
			t === ENTERING ? this.performEnter(i, e) : this.performExit(i);
		} else
			this.props.unmountOnExit &&
				this.state.status === EXITED &&
				this.setState({ status: UNMOUNTED });
	}
	performEnter(e, t) {
		let { enter: i } = this.props,
			n = this.context ? this.context.isMounting : t,
			r = this.getTimeouts();
		if (!t && !i) {
			this.safeSetState({ status: ENTERED }, () => {
				this.props.onEntered(e);
			});
			return;
		}
		this.props.onEnter(e, n),
			this.safeSetState({ status: ENTERING }, () => {
				this.props.onEntering(e, n),
					this.onTransitionEnd(e, r.enter, () => {
						this.safeSetState({ status: ENTERED }, () => {
							this.props.onEntered(e, n);
						});
					});
			});
	}
	performExit(e) {
		let { exit: t } = this.props,
			i = this.getTimeouts();
		if (!t) {
			this.safeSetState({ status: EXITED }, () => {
				this.props.onExited(e);
			});
			return;
		}
		this.props.onExit(e),
			this.safeSetState({ status: EXITING }, () => {
				this.props.onExiting(e),
					this.onTransitionEnd(e, i.exit, () => {
						this.safeSetState({ status: EXITED }, () => {
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
			(this.nextCallback = (i) => {
				t && ((t = !1), (this.nextCallback = null), e(i));
			}),
			(this.nextCallback.cancel = () => {
				t = !1;
			}),
			this.nextCallback
		);
	}
	onTransitionEnd(e, t, i) {
		this.setNextCallback(i),
			e
				? (this.props.addEndListener &&
						this.props.addEndListener(e, this.nextCallback),
				  null != t && setTimeout(this.nextCallback, t))
				: setTimeout(this.nextCallback, 0);
	}
	render() {
		let e = this.state.status;
		return e === UNMOUNTED
			? null
			: s(
					TransitionGroupContext.Provider,
					{ value: null },
					this.props.children
			  );
	}
}
function noop() {}
Transition.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: noop,
	onEntering: noop,
	onEntered: noop,
	onExit: noop,
	onExiting: noop,
	onExited: noop,
};
class CSSTransition extends c {
	static defaultProps = { timeout: 200 };
	onEnter = (e, t) => {
		if (e) {
			let i = this.props.animationStyles[t ? "appear" : "enter"];
			this.removeClasses(e, "exit"), i && e.classList.add(i);
		}
		this.props.onEnter && this.props.onEnter(e);
	};
	onEntering = (e, t) => {
		if (e) {
			let i = this.props.animationStyles[(t ? "appear" : "enter") + "Active"],
				n = window.requestAnimationFrame;
			i &&
				n(() => {
					n(() => {
						e && e.classList.add(i);
					});
				});
		}
		this.props.onEntering && this.props.onEntering(e);
	};
	onEntered = (e, t) => {
		if (e) {
			let i = this.props.animationStyles[(t ? "appear" : "enter") + "Done"];
			this.removeClasses(e, t ? "appear" : "enter"), i && e.classList.add(i);
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
				i = window.requestAnimationFrame;
			t &&
				i(() => {
					i(() => {
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
		let i = this.props.animationStyles[t],
			n = this.props.animationStyles[t + "Active"],
			r = this.props.animationStyles[t + "Done"];
		i && e.classList.remove(i),
			n && e.classList.remove(n),
			r && e.classList.remove(r);
	}
	render() {
		return s(Transition, {
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
let HIGH_Q = 27,
	SLAP = 28,
	SCRATCH_PUSH = 29,
	SCRATCH_PULL = 30,
	STICKS = 31,
	SQUARE_CLICK = 32,
	METRONOME_CLICK = 33,
	METRONOME_BELL = 34,
	BASS_DRUM = 36,
	ACOUSTIC_BASS_DRUM = 35,
	HAND_CLAP = 39,
	SNARE = 38,
	ELECTRIC_SNARE = 40,
	SIDE_STICK = 37,
	SNARE_RIM_SHOT = 91,
	CLOSED_HI_HAT = 42,
	OPEN_HI_HAT = 46,
	FOOT_HI_HAT = 44,
	HALF_HI_HAT = 92,
	HIGH_FLOOR_TOM = 50,
	HIGH_TOM = 48,
	MID_TOM = 47,
	LOW_TOM = 45,
	FLOOR_TOM = 41,
	VERY_LOW_TOM = 43,
	CRASH_CYMBAL = 49,
	CRASH_CYMBAL_2 = 57,
	RIDE_CYMBAL = 51,
	RIDE_CYMBAL_2 = 59,
	RIDE_EDGE = 93,
	SPLASH_CYMBAL = 55,
	CHINESE_CYMBAL = 52,
	RIDE_BELL = 53,
	TAMBOURINE = 54,
	COWBELL = 56,
	HIGH_COWBELL = 102,
	LOW_COWBELL = 99,
	VIBRASLAP = 58,
	BONGO = 60,
	LOW_BONGO = 61,
	MUTE_HI_CONGA = 62,
	OPEN_HI_CONGA = 63,
	LOW_CONGA = 64,
	HIGH_TIMBALE = 65,
	LOW_TIMBALE = 66,
	HIGH_AGOGO = 67,
	LOW_AGOGO = 68,
	CABASA = 69,
	MARACAS = 70,
	SHORT_WHISTLE = 71,
	LONG_WHISTLE = 72,
	SHORT_GUIRO = 73,
	LONG_GUIRO = 74,
	CLAVES = 75,
	WOOD_BLOCK = 76,
	HI_WOOD_BLOCK = 76,
	LOW_WOOD_BLOCK = 77,
	MUTE_CUICA = 78,
	OPEN_CUICA = 79,
	MUTE_TRIANGLE = 80,
	OPEN_TRIANGLE = 81,
	SHAKER = 82,
	JINGLE_BELL = 83,
	BELL_TREE = 84,
	CASTINETS = 85,
	MUTE_SURDO = 86,
	OPEN_SURDO = 87,
	DRUM_GROUPS = [
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
	GROUP_CROSS = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
	GROUP_WIDE_CROSS = [49, 57],
	GROUP_TRIANGLE = [56, 102, 99, 54, 76, 77];
function getDrumStick(e, t, i) {
	let n = i * (5 - t) + 3;
	return GROUP_CROSS.includes(e) ||
		GROUP_WIDE_CROSS.includes(e) ||
		92 === e ||
		46 === e ||
		52 === e ||
		93 === e ||
		59 === e
		? `M0 4v${n - 4}`
		: GROUP_TRIANGLE.includes(e)
		? `M0 3v${n - 3}`
		: `M0 0v${n}`;
}
function getUsedDrumGroups(e) {
	let t = DRUM_GROUPS.filter((t) => e.has(t[0]));
	return e.has(41) && e.has(45) && (t = t.filter((e) => 45 !== e[0])), t;
}
function ExtraLine(e) {
	let { noteString: t, intervalSize: i, className: n, noteTransform: r } = e;
	return o("use", {
		className: n,
		transform: r + ` translate(0, ${-(t - Math.round(0.999 * t)) * i})`,
		xlinkHref: "#extraLine",
	});
}
function DrumShape(e) {
	let { fret: t, className: i, transform: n } = e;
	return GROUP_CROSS.includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumCross" })
		: GROUP_WIDE_CROSS.includes(t)
		? o("use", {
				className: i,
				transform: n,
				xlinkHref: "#drumCross",
				style: "stroke-width: 2",
		  })
		: 52 === t
		? o("g", {
				className: i,
				transform: n,
				children: [
					o("use", { xlinkHref: "#drumHat" }),
					o("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
				],
		  })
		: GROUP_TRIANGLE.includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumTriangle" })
		: [53, 91, 34].includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumRhomb" })
		: [46].includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumCircleCross" })
		: [92].includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumCircleStroke" })
		: [31].includes(t)
		? o("use", { className: i, transform: n, xlinkHref: "#drumStroke" })
		: o("use", { className: i, transform: n, xlinkHref: "#drum" });
}
let figure = "rw29l",
	__default$B = { figure: "rw29l" },
	strings = "B6413b",
	__default$A = { strings: "B6413b" },
	harmonic = "h82xl",
	rest0 = "h89u",
	rest1 = "h82ou",
	rest2 = "h8j2",
	rest3 = "h82so",
	voice = "h81p9",
	voice0 = "h81p9 h8e1",
	voice1 = "h81p9 h82d8",
	voice2 = "h81p9 h82c6",
	voice3 = "h81p9 h8cd",
	edited = "h816m",
	vDrum = "h818t",
	vDrum0 = "h818t h810t",
	vDrum1 = "h81w1",
	vDrum2 = "h82qg",
	vDrum3 = "h8152",
	drumstick = "h8ey",
	drums0 = "h8ey h81yr",
	drums1 = "h8ey h8306",
	drums2 = "h8ey h81cu",
	drums3 = "h8ey h82xx",
	stick0 = "h8ey h81cp",
	stick1 = "h8ey h82tw",
	stick2 = "h8ey h85n",
	stick3 = "h8ey h82pf",
	__default$z = {
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
	NOTE_AREA_WIDTH = 60;
function Strings(e) {
	let { end: t, intervalSize: i } = e,
		n = "M0,0v48";
	for (let e = 0; e < 5; e++) n += `M0,${i * e} h${t}`;
	return (n += "V0"), s("path", { className: __default$A.strings, d: n });
}
function DrumRow(e) {
	let { x: t, title: i, fret: n, string: r, intervalSize: a } = e;
	return s(
		g,
		null,
		s(
			"text",
			{ textAnchor: "middle" },
			i.split("\n").map((e, i) => s("tspan", { x: t, y: -14 * (3 - i) }, e))
		),
		s(DrumNote, { x: t, fret: n, string: r, intervalSize: a })
	);
}
function DrumNote(e) {
	let { x: t, fret: i, string: n, intervalSize: r } = e,
		a = __default$z.drums0,
		o = `translate(${t}, ${0.5 + r * n})`,
		l = s(DrumShape, { fret: i, className: a, transform: o }),
		u =
			(n <= -1 || n >= 5) &&
			s(ExtraLine, {
				noteString: n,
				intervalSize: r,
				className: __default$A.strings,
				noteTransform: o,
			});
	return 93 === i || 59 === i
		? s(
				g,
				null,
				u,
				s("use", {
					className: a,
					transform: `translate(${t}, ${0.5 - r / 2})`,
					xlinkHref: "#drumHatEdge",
				}),
				l
		  )
		: u
		? s(g, null, u, l)
		: l;
}
function DrumNotation(e) {
	let { drumNotes: t, intervalSize: i } = e,
		n = 60 * Math.max(4, t.length);
	return s(
		"svg",
		{ className: __default$B.figure, width: n, height: 130 },
		s(
			"g",
			{ transform: "translate(0, 54)" },
			s(Strings, { end: n, intervalSize: i }),
			t.map((e, t) =>
				s(DrumRow, {
					fret: e[0],
					intervalSize: i,
					string: getDrumString(e[0], !0),
					title: e[1],
					x: 60 * t + 30,
				})
			)
		)
	);
}
let title$9 = "Bcrye",
	line = "Bcr2z8",
	toggle$2 = "Bcr19p",
	wrap$2 = "Bcr1zk",
	wrapHorizontal = "Bcr236",
	notation = "Bcr1zo",
	name = "Bcr1os",
	def = "Bcr1dk",
	notation__old = "Bcr1zo Bcrlb",
	subtitle$1 = "Bcrl3",
	__default$y = {
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
	exitActive$7 = "Byam0",
	enterActive$7 = "Bya2az",
	enter$7 = "Bya2dc",
	exit$7 = "Bya1se",
	__default$x = {
		exitActive: "Byam0",
		enterActive: "Bya2az",
		enter: "Bya2dc",
		exit: "Bya1se",
	},
	exitActive$6 = "Ccsdl",
	enterActive$6 = "Ccsnt",
	enter$6 = "Ccstw",
	exit$6 = "Ccs2i1",
	__default$w = {
		exitActive: "Ccsdl",
		enterActive: "Ccsnt",
		enter: "Ccstw",
		exit: "Ccs2i1",
	},
	animationPropsLeft = { animationStyles: __default$x },
	animationPropsDown = { animationStyles: __default$w },
	NOTATION_LAYER = "help_notation";
function getStdParts(e, t) {
	let i = getUsedDrumGroups(e),
		n = [];
	for (let e = 0; e < i.length; e += 4) n.push(i.slice(e, e + 4));
	return t && n.length % 2 == 1 && n.push([]), n;
}
function getNotStdParts(e) {
	let t = Math.floor((e.size + 2) / 3),
		i = [...e.values()];
	return [i.slice(0, t), i.slice(t, 2 * t), i.slice(2 * t)];
}
let DrumNotationHelp = f((e) => {
		let { usedDrums: t, horizontal: i } = e,
			{ layer: n, experiments: r } = useStore("layer", "experiments"),
			a = n.layer === NOTATION_LAYER,
			l = r.drum_standard_notation?.segment !== "drop",
			u = l ? getStdParts(t, i) : getNotStdParts(t);
		return s(
			TransitionGroup,
			null,
			a &&
				s(
					CSSTransition,
					i ? animationPropsLeft : animationPropsDown,
					s(
						"div",
						{ className: i ? __default$y.wrapHorizontal : __default$y.wrap },
						s(
							"div",
							{
								className: l ? __default$y.notation : __default$y.notation__old,
								id: "drum_notation",
							},
							s(
								"h3",
								{ className: __default$y.title },
								"Instruments in the current track"
							),
							l
								? u.map((e) =>
										o(DrumNotation, {
											drumNotes: e,
											intervalSize: INTERVAL_SIZE,
										})
								  )
								: u.map((e, t) =>
										s(
											"div",
											{ className: __default$y.col, key: t },
											e.map((e) =>
												s(
													"dl",
													{ className: __default$y.line, key: e.name },
													s("dt", { className: __default$y.name }, e.name),
													s(
														"dd",
														{ className: __default$y.def },
														LONG_NAMES[e.name]
													)
												)
											)
										)
								  )
						)
					)
				)
		);
	}),
	difficulty$1 = "Cpf12y",
	placeholder$2 = "Cpf2jn",
	__default$v = { difficulty: "Cpf12y", placeholder: "Cpf2jn" },
	DIFFICULTY_ITEM_SIZE = 5,
	DifficultyIndicator = (e) => {
		let { id: t, difficultyString: i, difficultyNA: n } = e;
		if (!i || n)
			return s("span", {
				className: __default$v.placeholder,
				title: "Not calculated",
			});
		let r = 5 * getIndex1ForDifficultyName(i);
		return s("span", {
			id: t,
			className: __default$v.difficulty,
			style: { "--diffSize": `${r}px` },
			title: getHumanReadableLabelTextForDifficultyName(i),
		});
	};
function IconDifficultyExplanation(e) {
	let { styles: t } = e;
	return s(
		"svg",
		{
			width: 13,
			height: 13,
			className: t.icon,
			viewBox: "0 -3 13 13",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		s("rect", { y: 1, width: 13, height: 11, rx: 3, className: t.fill }),
		s("path", {
			className: t.fillText,
			d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z",
		})
	);
}
let header$1 = "C6110p",
	wrap$1 = "C611iz",
	separator = "C61zq",
	placeholder$1 = "C6131n",
	song = "C612su",
	dash = "C61p",
	artist = "C61rs",
	title$8 = "C612ph",
	track = "C61a4",
	difficulty = "C6133l",
	fill$2 = "C611xo",
	fillText = "C612yg",
	explainLink = "C612gh",
	difficultyLinksPanel = "C61287",
	findEasierSongsLink = "C612h7",
	reportInvalidDifficultyLink = "C612h7 C611ae",
	label = "C61az",
	showroom = "C61jc",
	demo = "C611ts",
	instrumentTab = "C612rd",
	burger$1 = "C61212",
	icon$5 = "C611fz",
	stroke$3 = "C611m5",
	lastEditOn = "C612eq",
	lastEditLink = "C612w9",
	__default$u = {
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
	animationProps$4 = { animationStyles: __default$w };
function AppHeaderTrack(e) {
	let { handleNotation: t, track: i } = e,
		{
			dispatch: n,
			part: r,
			meta: a,
			screen: o,
			layer: l,
			device: u,
			isDeleted: c,
		} = useStore(
			"layer",
			"part",
			"meta",
			"screen",
			"layer",
			"device",
			"isDeleted"
		),
		p = u.isDesktop,
		h = o.isSmall,
		f = r.current && r.current.usedDrums,
		m = d(() => {
			n("layer/show", "difficulty_explained_popup");
		}, []),
		y = i.difficulty,
		T = !h && y && "difficulty_explained_popup" === l.layer,
		S = {
			className: __default$u.explainLink,
			onClick: m,
			title: "Explain how difficulty is calculated",
			id: "explain_difficulty_link",
		},
		_ = u.locale ? [u.locale] : void 0,
		v = a && a.current && a.current.created_at,
		E = v ? toLocalDateString(new Date(a.current.created_at), _) : null,
		b = E && a.current && !a.revisionId ? "Last edit on:" : "Revision from:",
		A = d(() => {
			"revisions" !== l.layer &&
				(n("layer/show", "revisions"),
				n("curiosity/event", {
					event: "Opened revisions panel",
					Via: "Last edit on link",
					"Song id": a.songId.toString(),
				}));
		}, [l.layer]);
	return s(
		g,
		null,
		s(
			"div",
			{ className: __default$u.name, "aria-label": "track" },
			"Track: ",
			i.titleFull
		),
		h &&
			!c &&
			f &&
			s(
				"button",
				{ className: __default$y.toggle, onClick: t, "aria-label": "notation" },
				"(notation)"
			),
		h && !c && f && s(DrumNotationHelp, { usedDrums: f }),
		h && s("hr", { className: __default$u.separator, width: 250 }),
		y &&
			s(
				"div",
				{
					className: __default$u.difficulty,
					"aria-label": "track difficulty (rhythm)",
				},
				s("span", { className: __default$u.label }, "Difficulty (Rhythm):"),
				s(DifficultyIndicator, {
					id: "track-difficulty",
					difficultyString: i.difficulty,
				}),
				p &&
					s("button", S, s(IconDifficultyExplanation, { styles: __default$u })),
				p &&
					s(
						TransitionGroup,
						null,
						T &&
							s(
								CSSTransition,
								animationProps$4,
								s(ExplainDifficultyPopup$1, null)
							)
					)
			),
		E &&
			!c &&
			!h &&
			s(
				"div",
				{ className: __default$u.lastEditOn, "aria-label": "last edit on" },
				s("span", { className: __default$u.label }, b),
				s("a", { to: null, onClick: A, className: __default$u.lastEditLink }, E)
			)
	);
}
let PATH$1 =
	"M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function IconSignIn(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n, stroke: r },
	} = e;
	return s(
		"svg",
		{
			width: t || 18,
			height: i || 19,
			viewBox: "0 0 18 19",
			className: n,
			"aria-labelledby": "title-signin",
		},
		s("title", { id: "title-signin" }, "Sign In"),
		s("path", {
			className: r,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: PATH$1,
		})
	);
}
function IconSignup() {
	return s(
		"svg",
		{ width: 55, height: 55, viewBox: "0 0 55 55" },
		s("path", {
			d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
			fill: "#FFAD00",
		}),
		s("path", {
			stroke: "#FFF",
			"stroke-width": 1.5,
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			fill: "none",
			transform: "translate(7 10) scale(1.85)",
			d: PATH$1,
		})
	);
}
let popup$1 = base + " Cpv2j2",
	wrapper$2 = basewrapper + " Cpv16o",
	text$2 = text$4 + " Cpv2mh",
	link$3 = "Cpv2hv",
	__default$t = {
		popup: base + " Cpv2j2",
		wrapper: basewrapper + " Cpv16o",
		text: text$4 + " Cpv2mh",
		link: "Cpv2hv",
	},
	PLACEHOLDER = "${}",
	PLACEHOLDER_REGEXP = RegExp("\\${}", "g"),
	pluralFormFn = (e) => {
		let t = e?.pluralForms;
		return t
			? Function("n", "nplurals", "plural", `${t} return ~~plural;`)
			: defaultPluralForm;
	};
function defaultPluralForm(e) {
	return 1 === e ? 0 : 1;
}
let toMsgid = (e) => e.join("${}"),
	interpolate = (e, t) => {
		let i = 0;
		return e.replace(PLACEHOLDER_REGEXP, () => t[i++]);
	};
function Gettext(e, t) {
	let i = t.find((t) => t?.language === e),
		n = pluralFormFn(i),
		r = function () {
			let e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
			return i?.translations?.[e]?.[t]?.[n] || "";
		},
		a = (e, t) =>
			t
				? r(e, t) || t
				: function (t) {
						for (
							var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1;
							a < i;
							a++
						)
							n[a - 1] = arguments[a];
						let s = toMsgid(t),
							o = r(e, s) || s;
						return interpolate(o, n);
				  },
		s = (e, t, i, a) =>
			t
				? r(e, t, n(a)) || (0 === defaultPluralForm(a) ? t : i)
				: function (t) {
						for (
							var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1;
							s < i;
							s++
						)
							a[s - 1] = arguments[s];
						return function (i) {
							for (
								var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), l = 1;
								l < s;
								l++
							)
								o[l - 1] = arguments[l];
							return (s) => {
								let l = toMsgid(t),
									u = n(s),
									d = r(e, l, u);
								return d
									? interpolate(d, u ? o : a)
									: interpolate(
											(u = defaultPluralForm(s)) ? toMsgid(i) : l,
											u ? o : a
									  );
							};
						};
				  };
	return {
		locale: e,
		gettext: function (e) {
			for (
				var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
				n < t;
				n++
			)
				i[n - 1] = arguments[n];
			if (Array.isArray(e)) {
				let t = toMsgid(e),
					n = r("", t) || t;
				return interpolate(n, i);
			}
			return r("", e) || e;
		},
		pgettext: a,
		ngettext: function (e) {
			for (
				var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), a = 1;
				a < t;
				a++
			)
				i[a - 1] = arguments[a];
			if (Array.isArray(e))
				return function (t) {
					for (
						var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1;
						o < a;
						o++
					)
						s[o - 1] = arguments[o];
					return (a) => {
						let o = toMsgid(e),
							l = n(a),
							u = r("", o, l);
						return u
							? interpolate(u, l ? s : i)
							: interpolate(
									(l = defaultPluralForm(a)) ? toMsgid(t) : o,
									l ? s : i
							  );
					};
				};
			let s = i[1];
			return r("", e, n(s)) || (0 === defaultPluralForm(s) ? e : i[0]);
		},
		npgettext: s,
	};
}
var useGettext = (e) => {
		let { device: t } = useStore("device"),
			i = "en";
		return (
			t.locale && (i = t.locale.split("-")[0].toLowerCase()),
			(window.__LOCALE__ = i),
			n(() => Gettext(i, e), [e, i])
		);
	},
	de$3 = null,
	es$3 = null,
	fr$3 = null,
	it$3 = null,
	ja$3 = null,
	ko$3 = null,
	pt$3 = null,
	ru$3 = null,
	zh$3 = null,
	locales$3 = [de$3, es$3, fr$3, it$3, ja$3, ko$3, pt$3, ru$3, zh$3];
function SignupPopup(e) {
	let { onClick: t, id: i } = e,
		{ gettext: n } = useGettext(locales$3);
	return s(
		Link,
		{
			className: __default$t.popup,
			id: i,
			to: "/a/wa/signin",
			onClick: t,
			role: "dialog",
			"aria-label": n("Sign up for free to favorite this tab."),
		},
		s("span", { className: __default$t.wrapper }, s(IconSignup, null)),
		s(
			"div",
			{ className: __default$t.text },
			n("Please "),
			s("span", { className: __default$t.link }, n("sign up")),
			n(" for free"),
			s("br", null),
			n("to favorite this tab.")
		)
	);
}
let FILL =
		"M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
	NONE = `${FILL}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function IconFavorite(e) {
	let {
			width: t,
			height: i,
			viewbox: n,
			title: r = "Favorite",
			styles: { icon: a },
			id: o,
			state: l,
		} = e,
		u = `title-${o || "favorite"}`;
	return s(
		"svg",
		{
			width: t || 29,
			height: i || 27,
			viewBox: n || "0 0 29 27",
			className: a,
			"data-icon": l,
			id: o,
			"aria-labelledby": u,
		},
		s("title", { id: u }, r),
		s("path", { d: "fill" === l ? FILL : NONE })
	);
}
let favorite = "xji4",
	toggle$1 = "xj3s",
	star = "xj248",
	starSelected = "xj248 xj13q",
	__default$s = {
		favorite: "xji4",
		toggle: "xj3s",
		star: "xj248",
		starSelected: "xj248 xj13q",
	},
	animationProps$3 = { animationStyles: __default$w };
function Favorite() {
	let {
		dispatch: e,
		user: t,
		favorites: i,
		meta: n,
		layer: r,
		isDeleted: a,
	} = useStore(
		"user",
		"favorites",
		"meta",
		"experiments",
		"layer",
		"isDeleted"
	);
	if (a || !n.allowedByLicense) return;
	let o = "favorite" === r.layer,
		l = t.isLoggedIn,
		u = n.partId,
		c =
			l &&
			(n.wasFavoriteOnServerRender ||
				i.favorites.some((e) => e.songId === n.songId)),
		p = d(() => {
			if (l && n.current) {
				if (c) e("favorites/delete", n.songId);
				else {
					let {
							songId: t,
							artistId: i,
							artist: r,
							title: a,
							tracks: s,
						} = n.current,
						o = {
							songId: t,
							artistId: i,
							artist: r,
							title: a,
							tracks: s
								? s.map((e) => {
										let {
											instrument: t,
											instrumentId: i,
											name: n,
											difficulty: r,
											tuning: a,
										} = e;
										return {
											instrument: t,
											instrumentId: i,
											name: n,
											tuning: a,
											difficulty: r,
										};
								  })
								: s,
							defaultTrack: u,
						};
					addDifficultyToSong(o), e("favorites/add", { songId: t, song: o });
				}
				r.layer && e("layer/hide");
			} else o ? e("layer/hide") : e("layer/show", "favorite");
		}, [r, l, c, n, u]),
		h = c ? __default$s.starSelected : __default$s.star;
	return s(
		"div",
		{ className: __default$s.favorite, id: "favorite" },
		s(
			"button",
			{
				className: __default$s.toggle,
				id: "favorite-toggle",
				onClick: p,
				title: c ? "Remove from favorites" : "Add to favorites",
			},
			s(IconFavorite, {
				width: 30,
				height: 30,
				viewbox: "-4 -3 35 35",
				state: c ? "fill" : "none",
				styles: { icon: h },
				id: "favorite-icon",
			})
		),
		s(
			TransitionGroup,
			null,
			o &&
				s(
					CSSTransition,
					animationProps$3,
					s(SignupPopup, { id: "favorite-popup" })
				)
		)
	);
}
function IconDeletion(e) {
	let { styles: t } = e;
	return s(
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
		s("title", { id: "tab-delete-id" }, "Delete Tab"),
		s("path", {
			className: t.strokeAnim,
			d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z",
		}),
		s("path", {
			className: t.fill,
			d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z",
		}),
		s("path", {
			className: t.strokeAnim,
			d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z",
		})
	);
}
let _delete = "tnv2",
	button$5 = "tn1vk",
	buttonActive = "tn1vk tnwo",
	icon$4 = "tn13b",
	fill$1 = "tn1pz",
	strokeAnim$1 = "tn1pz tn10k",
	__default$r = {
		delete: "tnv2",
		button: "tn1vk",
		buttonActive: "tn1vk tnwo",
		icon: "tn13b",
		fill: "tn1pz",
		strokeAnim: "tn1pz tn10k",
	},
	getConfirmation = (e, t) => {
		let i = `${e}, ${t}`,
			n =
				"You are about to delete the whole song with all its revisions permanently. To confirm deletion, please enter the song artist and title as described below:\n\n" +
				i +
				"\n",
			r = window.prompt(n);
		return (
			r === i ||
			(window.alert(
				"Confirmation string does not match artist and title. Aborting deletion!"
			),
			!1)
		);
	},
	Deletion = () => {
		let {
				dispatch: e,
				meta: t,
				part: i,
				editor: n,
				isDeleted: r,
			} = useStore("meta", "part", "editor", "isDeleted"),
			a = t.isFailed || i.isFailed,
			o = t.current && 0 === w.getAll(t.current).length;
		if (r || a || o || !n.canDelete) return;
		let l = d(() => {
				t.current &&
					getConfirmation(t.current.artist, t.current.title) &&
					e("editor/delete", t.current);
			}, [e, t.current]),
			u = n.processingDeletion;
		return s(
			"div",
			{ className: __default$r.delete, id: "deletion" },
			u && s(Spinner, { width: 21, height: 21, fill: "#42a4f8" }),
			!u &&
				s(
					"button",
					{ className: __default$r.button, onClick: l },
					s(IconDeletion, { styles: __default$r })
				)
		);
	};
function IconRevisions(e) {
	let { styles: t } = e;
	return s(
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
		s("title", { id: "revisions-title-id" }, "Revisions"),
		s("path", {
			className: t.strokeAnim,
			"stroke-width": "2",
			d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9",
		}),
		s("path", {
			className: t.stroke,
			"stroke-width": "1.8",
			"stroke-linecap": "round",
			strokeLinejoin: "round",
			d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6",
		}),
		s("path", {
			className: t.fill,
			d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z",
		})
	);
}
let isServer = "undefined" == typeof window;
function cssloader(e) {
	let t =
		arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
	if (!isServer)
		return Promise.all(
			e?.map(
				(e) =>
					new Promise((i, n) => {
						if (document.querySelectorAll(`link[href="${e}"]`).length) {
							i(!0);
							return;
						}
						let r = document.createElement("link"),
							a = (document.body || document.getElementsByTagName("head")[0])
								.childNodes,
							s = a[a.length - 1];
						Object.assign(r, {
							rel: "stylesheet",
							href: e,
							onerror: n,
							onload: i,
							media: t,
						}),
							s.parentNode.insertBefore(r, s.nextSibling);
					})
			)
		);
}
let popup = "Bo82u2",
	arrow$1 = "Bo81oq",
	__default$q = { popup: "Bo82u2", arrow: "Bo81oq" },
	RevisionsPopupContent = m(() =>
		Promise.all([
			import("./RevisionsPopupContent.9f842911.js"),
			cssloader([
				"/static/latest/RevisionsPopupContent.ee9badc8e3fca0c7.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/UploadInstructions.33b24b6372106d73.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/UploadRevisionForm.module.75d72c0838d39945.css",
			]),
		]).then((e) => e[0])
	),
	DEFAULT_POPUP_HEIGHT = 298,
	RevisionsPopup = () => {
		let { dispatch: e, meta: t } = useStore("meta"),
			[r, o] = i({ height: 298 });
		return (
			n(async () => {
				let i = new AbortController$1();
				return await revisionsLoad(e, t.songId, i.signal), i.abort.bind(i);
			}, [t.songId]),
			a(() => e("upload/reset"), []),
			s(
				"div",
				{ id: "revisions-popup", className: __default$q.popup, style: r },
				s(SuspenseWrap, {
					component: RevisionsPopupContent,
					style: r,
					setStyle: o,
				}),
				s("div", { className: __default$q.arrow })
			)
		);
	},
	revisions = "e32l8",
	toggle = "e32ah",
	toggleActive = "e32ah e3d0",
	icon$3 = "e32em",
	fill = "e32kz",
	stroke$2 = "e319r",
	strokeAnim = "e319r e31k",
	__default$p = {
		revisions: "e32l8",
		toggle: "e32ah",
		toggleActive: "e32ah e3d0",
		icon: "e32em",
		fill: "e32kz",
		stroke: "e319r",
		strokeAnim: "e319r e31k",
	},
	animationProps$2 = { animationStyles: __default$w },
	Revisions = () => {
		let {
				dispatch: e,
				layer: t,
				isDeleted: i,
				screen: n,
				meta: r,
			} = useStore("layer", "screen", "isDeleted", "meta"),
			a = !i && !n.isSmall && r.allowedByLicense;
		if (!a) return;
		let o = "revisions" === t.layer,
			l = d(() => {
				"revisions" === t.layer
					? e("layer/hide")
					: (e("layer/show", "revisions"),
					  e("curiosity/event", {
							event: "Opened revisions panel",
							Via: "Revisions button",
							"Song id": r.songId.toString(),
					  }));
			}, [t.layer]),
			u = {
				className: o ? __default$p.toggleActive : __default$p.toggle,
				id: "revisions-toggle",
				onClick: l,
				title: o ? "Hide revisions" : "Show revisions",
			},
			c = s(RevisionsPopup, null);
		return s(
			"div",
			{ className: __default$p.revisions, id: "revisions" },
			s("button", u, s(IconRevisions, { styles: __default$p })),
			s(TransitionGroup, null, o && s(CSSTransition, animationProps$2, c))
		);
	};
function IconDemoPopup(e) {
	let {
		shadow: t = "#CA7F06",
		width: i = 54,
		height: n = 30,
		id: r = "iconDemo",
	} = e;
	return s(
		"svg",
		{ width: i, height: n, viewBox: "0 0 54 30" },
		s(
			"defs",
			{},
			s(
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
				s("feGaussianBlur", { in: "SourceGraphic" }),
				s("feOffset", { dy: 3, result: "offsetBlur" }),
				s("feFlood", { floodColor: t, floodOpacity: 1 }),
				s("feComposite", {
					in2: "offsetBlur",
					operator: "in",
					result: "dropShadow",
				}),
				s("feBlend", { in: "SourceGraphic", in2: "dropShadow" })
			)
		),
		s("path", {
			d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
			fill: "#FF9D00",
			filter: `url(#${r})`,
			databackgound: "",
		}),
		s("path", {
			fill: "#FFF",
			d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
		})
	);
}
let switcherLink = "Cy52of",
	__default$o = { switcherLink: "Cy52of" };
var chordsIcon = "/static/media/to-chords.052d3c49.svg",
	tabIcon = "/static/media/to-tab.8c38afc0.svg";
function AppSwitcher(e) {
	let { isTab: t, isChords: i, song: n, meta: r, chords: a } = e;
	if (t && n.hasChords) {
		let e = n.title + " Chords";
		return o(Link, {
			to: getChordsUrl(r.current),
			className: __default$o.switcherLink,
			title: e,
			children: [o("img", { src: chordsIcon, width: 23, height: 22, alt: e })],
		});
	}
	if (i && n.hasPlayer) {
		let e = n.title + " Tab";
		return o(Link, {
			to: getMainUrl(a.current),
			className: __default$o.switcherLink,
			title: e,
			children: [o("img", { src: tabIcon, width: 23, height: 22, alt: e })],
		});
	}
}
function IconBurger(e) {
	let {
		styles: { icon: t, stroke: i },
	} = e;
	return s(
		"svg",
		{ width: 27, height: 25, viewBox: "0 0 27 25", className: t },
		s("path", { d: "M0 5h27M0 12h27M0 19h27", className: i, "stroke-width": 2 })
	);
}
function getSuffix(e) {
	return isBassGuitar(e) ? " Bass Tab" : isDrums$1(e) ? " Drum Tab" : " Tab";
}
function AppHeader(e) {
	let t,
		i,
		{ plusAccess: n, handleNotation: r, showFullUI: a = !0 } = e,
		{
			dispatch: s,
			route: l,
			routeContent: u,
			songs: d,
			artist: c,
			screen: p,
			favorites: h,
			meta: f,
			demo: m,
			chords: y,
			curiosity: T,
			isDeleted: S,
			experiments: _,
		} = useStore(
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
			"isDeleted",
			"experiments"
		),
		v = l.isPanel,
		E = p.isSmall,
		b = u.songId,
		A = !1,
		w = !1,
		I = !1,
		L = null;
	if (
		("tab" === u.page
			? ((A = !0),
			  (I = !n && f.allowedByLicense),
			  f.current &&
					f.current.songId === b &&
					((t = f.current),
					null != f.partId &&
						f.current.tracks &&
						(L = f.current.tracks[f.partId])),
			  !t &&
					y.current &&
					y.current.songId === b &&
					(t = { ...y.current, hasChords: !0 }),
			  (i = " Tab"))
			: "chords" === u.page &&
			  ((w = !0),
			  y.current && y.current.songId === b && (t = y.current),
			  !t &&
					f.current &&
					f.current.songId === b &&
					(t = { ...f.current, hasPlayer: !0 }),
			  (i = " Chords")),
		t || (t = d.songs.list.find((e) => e.songId === b)),
		t || (t = c.songs.list.find((e) => e.songId === b)),
		t || (t = h.favorites.find((e) => e.songId === b)),
		!t)
	)
		return;
	if ("tab" === u.page) {
		if (L) i = getSuffix(L.instrumentId);
		else if (null == u.partId)
			"bass" === u.partInstrument
				? (i = getSuffix(32))
				: "drum" === u.partInstrument && (i = getSuffix(1024));
		else {
			let e = t.tracks;
			e && e[u.partId] && (i = getSuffix(e[u.partId].instrumentId));
		}
	}
	if (!a)
		return o("header", {
			className: __default$u.header,
			id: "header",
			children: [
				o("div", {
					className: __default$u.wrap,
					children: [
						o(
							"h1",
							{
								className: __default$u.song,
								children: [
									o(
										"span",
										{
											className: __default$u.artist,
											"aria-label": "artist",
											children: t.artist,
										},
										"arts"
									),
									o(
										"span",
										{ className: __default$u.dash, children: "\xa0-\xa0" },
										"dash"
									),
									o(
										"span",
										{
											className: __default$u.title,
											"aria-label": "title",
											children: t.title,
										},
										"ttl"
									),
									o(
										"span",
										{
											className: __default$u.instrumentTab,
											"aria-label": "tab type",
											children: i,
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
	let N = () =>
			s("curiosity/setConversionProps", { "Last referring link": "Demo Link" }),
		P = () =>
			s("curiosity/setConversionProps", {
				"Last referring link": "Header Link",
			}),
		C =
			T.vpt10.count > 0
				? "Struggling to learn this song? Improve your playing with Songsterr Plus!"
				: "Subscribe to Plus. Paid users learn tabs 60% faster!";
	return o("header", {
		className: __default$u.header,
		id: "header",
		children: [
			o("div", {
				className: __default$u.wrap,
				children: [
					E &&
						o(
							Link,
							{
								to: `/${formatFiltersQuery(d.pattern, d.filters)}`,
								className: __default$u.burger,
								title: "Search",
								id: "appheader-burger",
								children: o(IconBurger, { styles: __default$u }, "icn"),
							},
							"menu"
						),
					A && o(Favorite, null, "fav"),
					o(
						AppSwitcher,
						{ isTab: A, isChords: w, song: t, meta: f, chords: y },
						"switch"
					),
					o(
						v ? "div" : "h1",
						{
							className: __default$u.song,
							children: [
								o(
									Link,
									{
										className: __default$u.artist,
										"aria-label": "artist",
										to: `${getArtistUrl(t)}${formatFiltersQuery(
											c.pattern,
											c.filters
										)}`,
										children: t.artist,
									},
									"artist"
								),
								o(
									"span",
									{ className: __default$u.dash, children: "\xa0-\xa0" },
									"dash"
								),
								o(
									"span",
									{
										className: __default$u.title,
										"aria-label": "title",
										children: t.title,
									},
									"ttl"
								),
								o(
									"span",
									{
										className: __default$u.instrumentTab,
										"aria-label": "tab type",
										children: i,
									},
									"sfx"
								),
								m.enabled &&
									o(Link, {
										to: "/a/wa/plus",
										className: __default$u.demo,
										"aria-label": "Demo Song",
										onClick: N,
										children: o(
											IconDemoPopup,
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
						v ? "h-div" : "h-h1"
					),
					a &&
						A &&
						o(g, {
							children: [o(Deletion, null, "del"), o(Revisions, null, "rev")],
						}),
					I &&
						o(
							Link,
							{
								id: "text-showroom",
								className: __default$u.showroom,
								to: "/a/wa/plus?from=header_link",
								onClick: P,
								children: [C],
							},
							"show"
						),
					L &&
						!S &&
						o(
							v ? "div" : "h2",
							{
								className: __default$u.track,
								children: o(AppHeaderTrack, { track: L, handleNotation: r }),
							},
							v ? "div" : "h2"
						),
				],
			}),
		],
	});
}
let pane$2 = "x012m",
	divider = "x0ln",
	dividerEdge = "x01yo",
	dividerSmall = "x02wd",
	float = "x02du",
	icon$2 = "x01qb",
	item$1 = "x02zn",
	logo = "x02vp",
	text$1 = "x02e0",
	stroke$1 = "x0tr",
	itemActive$1 = "x02zn x035p",
	logoText$1 = "x026k",
	overlay$1 = "x02ar",
	jobs = "x0mp",
	_new = "x02fd",
	mainpanel = "x0198",
	__default$n = {
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
	groups = {
		search: ["search"],
		signin: ["signup", "forgotpassword"],
		account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
		plus: ["subscribePlus"],
	};
function SidebarLink(e) {
	let { id: i, route: n, url: r, songUrl: a, children: o, linkClick: l } = e,
		u = t(StoreContext),
		c = i === n.page || (i in groups && -1 !== groups[i].indexOf(n.page)),
		p = i === n.page ? a : r,
		h = d(
			(e) => {
				e.preventDefault(), l && l(c), u.dispatch("navigate", p);
			},
			[p]
		);
	return s(
		"a",
		{
			href: p,
			onClick: h,
			id: `menu-${i}`,
			class: c ? __default$n.itemActive : __default$n.item,
		},
		o
	);
}
function FavoritesLink(e) {
	let { favorites: t } = useStore("favorites");
	return s(SidebarLink, {
		...e,
		url: `${e.url}${formatFiltersQuery(t.pattern, t.filters)}`,
	});
}
function LogoLink(e) {
	let { songs: t, dispatch: i } = useStore("songs"),
		n = `${e.url}${formatFiltersQuery(t.pattern, t.filters)}`,
		r = "search" === e.route.page ? e.songUrl : n,
		a = d(
			(e) => {
				e.preventDefault(), i("navigate", r);
			},
			[r]
		);
	return s("a", { ...e, href: r, onClick: a, to: null });
}
function SearchLink(e) {
	let { songs: t } = useStore("songs");
	return s(SidebarLink, {
		...e,
		url: `${e.url}${formatFiltersQuery(t.pattern, t.filters)}`,
	});
}
function IconAccount(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n, stroke: r },
	} = e;
	return s(
		"svg",
		{
			width: t || 19,
			height: i || 19,
			viewBox: "0 0 19 19",
			className: n,
			"aria-labelledby": "title-account",
		},
		s("title", { id: "title-account" }, "Account"),
		s("ellipse", {
			className: r,
			cx: 9.73,
			cy: 5.8,
			rx: 3.76,
			ry: 4.7,
			strokeWidth: 1.5,
		}),
		s("path", {
			className: r,
			strokeWidth: 1.5,
			d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z",
		})
	);
}
function IconPlus(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n },
	} = e;
	return s(
		"svg",
		{ width: t || 29, height: i || 27, viewBox: "0 0 29 27", className: n },
		s("path", {
			d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
		})
	);
}
function IconQuestions(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n },
	} = e;
	return s(
		"svg",
		{
			width: t || 29,
			height: i || 27,
			viewBox: "0 0 1000 820",
			className: n,
			"aria-labelledby": "title-faq",
		},
		s("title", { id: "title-faq" }, "Frequently Asked Questions"),
		s("path", {
			d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
		})
	);
}
function IconSearch(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n, stroke: r },
	} = e;
	return s(
		"svg",
		{ width: t || 18, height: i || 19, viewBox: "0 0 18 19", className: n },
		s("path", {
			className: r,
			strokeWidth: 1.5,
			strokeLinecap: "round",
			d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42",
		})
	);
}
let PATH_FRAME =
		"M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
	PATH_ARROW = "M14.5 17v-15.5m-5 5l5 -5l5 5";
function IconSubmit(e) {
	let {
		width: t,
		height: i,
		styles: { icon: n, stroke: r },
	} = e;
	return s(
		"svg",
		{ width: t || 29, height: i || 27, viewBox: "0 0 29 27", className: n },
		s("path", {
			d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
		}),
		s("path", {
			className: r,
			"stroke-width": 2,
			d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
		})
	);
}
function overflowBody(e) {
	if (!document.body) return;
	let t = window.innerWidth - document.body.clientWidth,
		i = e ? "0px" : `${t}px`;
	document.body.style.overflow = e ? "inherit" : "hidden";
	let n = document.getElementById("app");
	n && (n.style.marginRight = i);
	let r = document.getElementById("controls");
	r && (r.style.marginRight = i);
	let a = document.getElementById("showroom");
	a && (a.style.paddingRight = i);
	let s = document.documentElement;
	s && s.style.setProperty("--page-overflow-gap", i);
}
let AppChords = m(() =>
		Promise.all([
			import("./AppChords.45f56975.js"),
			cssloader([
				"/static/latest/AppChords.8c5c2858fe5f8fc4.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/AppFooter.d2ef4a102033ad6e.css",
				"/static/latest/SWW.ee0869611439c289.css",
				"/static/latest/Capo.0ff66d3227509ade.css",
			]),
		]).then((e) => e[0])
	),
	AppTags = m(() =>
		Promise.all([
			import("./AppTags.23a90a26.js"),
			cssloader([
				"/static/latest/AppTags.e210aabd9d1f9d59.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/AppFooter.d2ef4a102033ad6e.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	AppTab = m(() =>
		Promise.all([
			import("./AppTab.50cd20a4.js"),
			cssloader([
				"/static/latest/AppTab.bb17dbb4a0d0ba3b.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Capo.0ff66d3227509ade.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/UploadRevisionForm.module.75d72c0838d39945.css",
				"/static/latest/AppFooter.d2ef4a102033ad6e.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	SongsPanel = m(() =>
		Promise.all([
			import("./SongsPanel.030e7a37.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
			]),
		]).then((e) => e[0])
	),
	FavoritesPanel = m(() =>
		Promise.all([
			import("./FavoritesPanel.e7e4c575.js"),
			cssloader([
				"/static/latest/FavoritesPanel.fccd96b41e79d31b.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
			]),
		]).then((e) => e[0])
	),
	ArtistPanel = m(() =>
		Promise.all([
			import("./ArtistPanel.f082265d.js"),
			cssloader([
				"/static/latest/ArtistPanel.fd61db0afdcd05e3.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/useSongListHotkeys.6d5305012d74b003.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	SubmitPanel = m(() =>
		Promise.all([
			import("./SubmitPanel.3e0a59e6.js"),
			cssloader([
				"/static/latest/SubmitPanel.8a39e7eff3cd94af.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/UploadInstructions.33b24b6372106d73.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
			]),
		]).then((e) => e[0])
	),
	TextPanel = m(() =>
		Promise.all([
			import("./TextPanel.2e243e5e.js"),
			cssloader([
				"/static/latest/TextPanel.b65687d362098683.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/index.31bdd350cc85343e.css",
			]),
		]).then((e) => e[0])
	),
	AboutPanel = m(() =>
		Promise.all([
			import("./AboutPanel.8972d482.js"),
			cssloader([
				"/static/latest/AboutPanel.90a1dc2a1bed94a5.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	JobsPanel = m(() =>
		Promise.all([
			import("./JobsPanel.5870fccd.js"),
			cssloader([
				"/static/latest/JobsPanel.5f73cabf19d918b7.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	HelpPanel = m(() =>
		Promise.all([
			import("./HelpPanel.1618b678.js"),
			cssloader([
				"/static/latest/HelpPanel.0e111599c5b6d415.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/TocPointer.4277edfc32523766.css",
				"/static/latest/SearchBox.4bb250a8e8d72c76.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
				"/static/latest/SWW.ee0869611439c289.css",
			]),
		]).then((e) => e[0])
	),
	SigninPanel = m(() =>
		Promise.all([
			import("./SigninPanel.79e9c9ec.js"),
			cssloader([
				"/static/latest/SigninPanel.374924d6629568fa.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	SignupPanel = m(() =>
		Promise.all([
			import("./SignupPanel.7406668e.js"),
			cssloader([
				"/static/latest/SignupPanel.c958ca78cefae30f.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	AccountPanel = m(() =>
		Promise.all([
			import("./AccountPanel.b405f237.js"),
			cssloader([
				"/static/latest/AccountPanel.a74461eaddfc799e.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	MyTabsPanel = m(() =>
		Promise.all([
			import("./MyTabsPanel.fba1ee5e.js"),
			cssloader([
				"/static/latest/MyTabsPanel.43322a0d39d03c63.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/Stub.840d865f8d59eb70.css",
			]),
		]).then((e) => e[0])
	),
	ForgotPasswordPanel = m(() =>
		Promise.all([
			import("./ForgotPasswordPanel.c28cf3ae.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	ChangePasswordPanel = m(() =>
		Promise.all([
			import("./ChangePasswordPanel.81155d6d.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	PlusPanel = m(() =>
		Promise.all([
			import("./PlusPanel.136a97b6.js"),
			cssloader([
				"/static/latest/PlusPanel.df95490c07ad7e55.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	PaymentPanel = m(() =>
		Promise.all([
			import("./PaymentPanel.d99ba359.js"),
			cssloader([
				"/static/latest/PaymentPanel.6d2b3da012ef330b.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/PaymentForm.84991b3ba8107b90.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	CouponPanel = m(() =>
		Promise.all([
			import("./CouponPanel.78f77081.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Input.2762c3e20d6520b6.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	CancelPlusPanel = m(() =>
		Promise.all([
			import("./CancelPlusPanel.75fc9b9a.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
			]),
		]).then((e) => e[0])
	),
	DeactivatePanel = m(() =>
		Promise.all([
			import("./DeactivatePanel.71058052.js"),
			cssloader([
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/GenericPanel.module.938bfc65af449eaa.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	UpdateCardPanel = m(() =>
		Promise.all([
			import("./UpdateCardPanel.2d1a43d8.js"),
			cssloader([
				"/static/latest/UpdateCardPanel.38d040a682d0cdf1.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/PaymentForm.84991b3ba8107b90.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
				"/static/latest/ContinueLink.15b61efe8be39218.css",
			]),
		]).then((e) => e[0])
	),
	HowToReadTabPanel = m(() =>
		Promise.all([
			import("./HowToReadTabPanel.6c11199c.js"),
			cssloader([
				"/static/latest/HowToReadTabPanel.4e5ad16256add301.css",
				"/static/latest/index.31bdd350cc85343e.css",
				"/static/latest/TocPointer.4277edfc32523766.css",
				"/static/latest/Panel.c142932aa80c2dcc.css",
			]),
		]).then((e) => e[0])
	),
	exitActive$5 = "w6o",
	enterActive$5 = "w613o",
	enter$5 = "w617j",
	exit$5 = "w6ty",
	__default$m = {
		exitActive: "w6o",
		enterActive: "w613o",
		enter: "w617j",
		exit: "w6ty",
	};
function IconTabs(e) {
	let { width: t, height: i, styles: n } = e;
	return s(
		"svg",
		{
			width: t || 21,
			height: i || 26,
			viewBox: "0 0 21 26",
			"aria-labelledby": "title-tabs",
			fill: "none",
		},
		s("rect", {
			x: 1,
			y: 1,
			width: 19,
			height: 24,
			rx: 2,
			className: n.stroke,
			"stroke-width": 2,
			fill: "none",
		}),
		s("path", {
			d: "M11.75 9.95652C11.75 10.6132 11.5301 11.1469 11.2526 11.4847C10.9786 11.8184 10.7024 11.913 10.5 11.913C10.2976 11.913 10.0214 11.8184 9.74736 11.4847C9.46988 11.1469 9.25 10.6132 9.25 9.95652C9.25 9.29986 9.46988 8.76612 9.74736 8.42832C10.0214 8.09468 10.2976 8 10.5 8C10.7024 8 10.9786 8.09468 11.2526 8.42832C11.5301 8.76612 11.75 9.29986 11.75 9.95652ZM12.0218 13.4534C13.0499 12.7889 13.75 11.4723 13.75 9.95652C13.75 7.7714 12.2949 6 10.5 6C8.70507 6 7.25 7.7714 7.25 9.95652C7.25 11.4723 7.95013 12.7889 8.97816 13.4534C6.12247 13.8552 4 15.3466 4 16.9219C4 18.7664 6.91015 19 10.5 19C14.0899 19 17 18.7664 17 16.9219C17 15.3466 14.8775 13.8552 12.0218 13.4534ZM14.6191 16.7104C14.6788 16.6957 14.733 16.6811 14.7819 16.6669C14.6515 16.5369 14.444 16.3713 14.1142 16.1854C13.2745 15.7122 11.9958 15.3478 10.5 15.3478C9.0042 15.3478 7.72549 15.7122 6.88578 16.1854C6.55602 16.3713 6.3485 16.5369 6.21808 16.6669C6.26701 16.6811 6.32116 16.6957 6.38094 16.7104C7.2898 16.9337 8.6834 17 10.5 17C12.3166 17 13.7102 16.9337 14.6191 16.7104Z",
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			className: n.icon,
		}),
		s("title", { id: "title-account" }, "Tabs")
	);
}
var iconJobs = "/static/media/jobs.e25c0248.svg",
	logoIcon = "/static/media/main.c9ba66df.svg",
	logoText = "/static/media/text.5e616329.svg";
let exitActive$4 = "p2287",
	enterActive$4 = "p22sz",
	enter$4 = "p21o9",
	exit$4 = "p22as",
	__default$l = {
		exitActive: "p2287",
		enterActive: "p22sz",
		enter: "p21o9",
		exit: "p22as",
	};
function getTagsUrl() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
	return "/tags" + (e ? `?page=${e}` : "");
}
function getTagUrl(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
	return "/tags/" + e.replace(/ /g, "+") + (t ? `?page=${t}` : "");
}
function getContentUrl(e, t, i, n) {
	return "tab" === e.page
		? getUrl(t.current, t.partId, t.revisionId)
		: "chords" === e.page
		? getChordsUrl(i.current)
		: "tag" === e.page
		? n.content
			? getTagUrl(n.content.tag, n.content.page)
			: "/"
		: "tags" === e.page
		? n.content
			? getTagsUrl(n.content.page)
			: "/"
		: void 0;
}
var de$2 = null,
	es$2 = null,
	fr$2 = null,
	it$2 = null,
	ja$2 = null,
	ko$2 = null,
	pt$2 = null,
	ru$2 = null,
	zh$2 = null,
	locales$2 = [de$2, es$2, fr$2, it$2, ja$2, ko$2, pt$2, ru$2, zh$2];
let pages = {
		search: SongsPanel,
		favorites: FavoritesPanel,
		artist: ArtistPanel,
		plus: PlusPanel,
		submit: SubmitPanel,
		about: AboutPanel,
		jobs: JobsPanel,
		help: HelpPanel,
		signin: SigninPanel,
		signup: SignupPanel,
		recoverpassword: ChangePasswordPanel,
		changepassword: ChangePasswordPanel,
		forgotpassword: ForgotPasswordPanel,
		account: AccountPanel,
		cancelPlus: CancelPlusPanel,
		deactivate: DeactivatePanel,
		updateCard: UpdateCardPanel,
		subscribePlus: PaymentPanel,
		coupon: CouponPanel,
		howToReadTab: HowToReadTabPanel,
		privacy: TextPanel,
		terms: TextPanel,
		dnsmpd: TextPanel,
		mytabs: MyTabsPanel,
	},
	Sidebar = f((e) => {
		let { isSmallScreen: t } = e,
			{ gettext: i } = useGettext(locales$2),
			{
				dispatch: n,
				device: o,
				browser: l,
				user: u,
				route: d,
				query: c,
				routeContent: p,
				meta: h,
				chords: g,
				tags: f,
			} = useStore(
				"device",
				"browser",
				"user",
				"route",
				"query",
				"routeContent",
				"meta",
				"chords",
				"tags"
			),
			{ isPanel: m, page: y } = d,
			T = getContentUrl(p, h, g, f);
		a(
			() => o.isDesktop && "Safari" === l.family && overflowBody(!m),
			[m, o.isDesktop]
		),
			r(() => toggleRecaptchaBadge(m, y), [m, y]);
		let { isDesktop: S } = o,
			{ /* hasPlus: _, */ isLoggedIn: v, profile: E } = u,
			_ = true,
			b = ["ru", "ru-mo", "be", "uk"].some(
				(e) => -1 !== o.languages.indexOf(e)
			);
			_ = true;
		return s(
			"div",
			{ className: __default$n.pane },
			!t &&
				s(
					"nav",
					{ className: __default$n.float, id: "tablist" },
					s(
						LogoLink,
						{
							id: "logo",
							className: __default$n.logo,
							route: d,
							url: "/",
							songUrl: T,
							title: "Songsterr",
						},
						s("img", {
							src: logoIcon,
							width: 30,
							height: 36,
							alt: "Songsterr",
						}),
						s("img", { src: logoText, width: 62, height: 12, alt: "Songsterr" })
					),
					s("div", { className: __default$n.dividerEdge }),
					s(
						SearchLink,
						{ id: "search", route: d, url: "/", songUrl: T },
						s(IconSearch, { styles: __default$n, width: 30, height: 30 }),
						s("div", { className: __default$n.text }, i("Tabs"))
					),
					s(
						FavoritesLink,
						{ id: "favorites", route: d, url: "/a/wa/favorites", songUrl: T },
						s(IconFavorite, { styles: __default$n }),
						s("div", { className: __default$n.text }, i("Favorites"))
					),
					s("div", { className: __default$n.dividerSmall }),
					s(
						SidebarLink,
						{ id: "mytabs", route: d, url: "/a/wa/mytabs", songUrl: T },
						s(IconTabs, { styles: __default$n, width: 29, height: 29 }),
						s("div", { className: __default$n.text }, "My Tabs")
					),
					S &&
						s(
							SidebarLink,
							{ id: "submit", route: d, url: "/a/wa/submit", songUrl: T },
							s(IconSubmit, { styles: __default$n }),
							s("div", { className: __default$n.text }, i("Submit Tab"))
						),
					s("div", { className: __default$n.dividerSmall }),
					!_ &&
						s(
							SidebarLink,
							{
								id: "plus",
								route: d,
								url: "/a/wa/plus",
								songUrl: T,
								linkClick: (e) => {
									e ||
										n("curiosity/setConversionProps", {
											"Last referring link": "Sidebar Button",
										});
								},
							},
							s(IconPlus, { styles: __default$n }),
							s("div", { className: __default$n.text }, i("Songsterr Plus"))
						),
					s(
						SidebarLink,
						{ id: "help", route: d, url: "/a/wa/help", songUrl: T },
						s(IconQuestions, { styles: __default$n }),
						s("div", { className: __default$n.text }, i("Questions?"))
					),
					!v &&
						s(
							SidebarLink,
							{ id: "signin", route: d, url: "/a/wa/signin", songUrl: T },
							s(IconSignIn, { styles: __default$n, width: 28, height: 29 }),
							s("div", { className: __default$n.text }, i("Sign In"))
						),
					v &&
						s(
							SidebarLink,
							{ id: "account", route: d, url: "/a/wa/account", songUrl: T },
							s(IconAccount, { styles: __default$n, width: 29, height: 29 }),
							s("div", { className: __default$n.text }, E.name)
						),
					s("div", { className: __default$n.dividerSmall }),
					S &&
						b &&
						s(
							Link,
							{
								id: "menu-jobs",
								to: "/a/wa/jobs",
								className: __default$n.jobs,
								title: "Jobs at Songsterr",
							},
							s("img", {
								src: iconJobs,
								width: 79.271,
								height: 32,
								alt: "Jobs",
							})
						)
				),
			s(
				TransitionGroup,
				null,
				m &&
					s(
						CSSTransition,
						{ animationStyles: __default$m, timeout: 400, key: "overlay" },
						s(Link, {
							className: __default$n.overlay,
							id: "sidebar-overlay",
							to: T,
							title: i("Back to tab"),
							tabIndex: -1,
						})
					),
				d.page in pages &&
					s(
						CSSTransition,
						{ animationStyles: __default$l, timeout: 400, key: d.page },
						s(
							"main",
							{ id: `panel-${d.page}`, className: __default$n.mainpanel },
							s(SuspenseWrap, {
								component: pages[d.page],
								route: d,
								query: c,
								user: u,
								device: o,
								songUrl: T,
								isSmallScreen: t,
								id: d.page,
							})
						)
					)
			)
		);
	}),
	indicator = "C8p2d0",
	onlineIndicator = "C8p2d0 C8pr1",
	offlineIndicator = "C8p2d0 C8p1q",
	__default$k = {
		indicator: "C8p2d0",
		onlineIndicator: "C8p2d0 C8pr1",
		offlineIndicator: "C8p2d0 C8p1q",
	},
	exitActive$3 = "Cir12y",
	enterActive$3 = "Cir1tt",
	enter$3 = "Cir29v",
	exit$3 = "Cir1q8",
	__default$j = {
		exitActive: "Cir12y",
		enterActive: "Cir1tt",
		enter: "Cir29v",
		exit: "Cir1q8",
	};
function getIndicatorClass(e) {
	return e ? __default$k.onlineIndicator : __default$k.offlineIndicator;
}
class StatusIndicator extends c {
	constructor(e) {
		super(e),
			(this.state = {
				online: navigator.onLine,
				className: getIndicatorClass(navigator.onLine),
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
				className: getIndicatorClass(navigator.onLine),
				message: navigator.onLine ? "live" : "offline",
			});
	}
	render() {
		let { online: e, className: t, message: i } = this.state,
			n = null;
		return (
			(i || !e) &&
				(n = s(
					CSSTransition,
					{ animationStyles: __default$j, timeout: 400 },
					s("div", { className: t }, i)
				)),
			s(TransitionGroup, null, n)
		);
	}
}
let menu = "Bdq1f0",
	linkNotable = "Bdq1h0",
	linkText = "Bdq2sz",
	active$3 = "Bdq8o",
	inactive = "Bdqf4",
	__default$i = {
		menu: "Bdq1f0",
		linkNotable: "Bdq1h0",
		linkText: "Bdq2sz",
		active: "Bdq8o",
		inactive: "Bdqf4",
	},
	askConfirmation = (e) => {
		window && !window.confirm("Are you sure?") && e.preventDefault();
	},
	AdminMenu = (e) => {
		let { songId: t } = e,
			{ user: i, dispatch: n } = useStore("user"),
			r = [];
		if (
			(can(i, b.USE_ADMIN_TOOLS) &&
				(r.push(
					s(
						"a",
						{
							key: "SRWO",
							className: __default$i.linkNotable,
							href: window.location.href + "?redesign=off",
						},
						"SRWO"
					)
				),
				r.push(
					s(
						"a",
						{
							key: "Edit",
							href: relativeSongAdminToolsUrl("editSong", t),
							target: "_blank",
						},
						"Edit"
					)
				),
				r.push(
					s(
						"a",
						{
							key: "Update",
							href: relativeSongAdminToolsUrl("updateSrwr", t),
							target: "_blank",
							onClick: askConfirmation,
						},
						"Update"
					)
				),
				r.push(
					s(
						"a",
						{
							key: "Rerender",
							href: relativeSongAdminToolsUrl("rerender", t),
							target: "_blank",
							onClick: askConfirmation,
						},
						"Rerender"
					)
				),
				r.push(
					s(
						"a",
						{
							key: "Block",
							href: relativeSongAdminToolsUrl(
								"blockDueToLicenseRestriction",
								t
							),
							target: "_blank",
							onClick: askConfirmation,
						},
						"Block"
					)
				),
				r.push(
					s(
						"a",
						{
							key: "Generate PNG",
							href: relativeSongAdminToolsUrl("generatePng", t),
							target: "_blank",
						},
						"Generate PNG"
					)
				)),
			can(i, b.USE_TAB_EDITOR))
		) {
			let e = (e) => {
				e.preventDefault(), n("tab_editor/toggleAdminPanel");
			};
			r.push(
				s(
					"a",
					{ key: "Tab Edits", href: "", target: "_blank", onClick: e },
					"Tab Edits"
				)
			);
		}
		if (can(i, b.USE_VIDEO_SYNCHRONISATION)) {
			let e = (e) => {
				e.preventDefault(), n("part/initVideoPart");
			};
			r.push(
				s(
					"a",
					{ key: "Init Video", href: "", target: "_blank", onClick: e },
					"Init Video"
				)
			);
		}
		return 0 === r.length
			? null
			: s("nav", { className: __default$i.menu }, ...r);
	},
	close = "C1p2za",
	__default$h = { close: "C1p2za" },
	Close = (e) => {
		let { onClick: t, id: i, width: n = 11, height: r = 11 } = e;
		return s(
			"button",
			{ className: __default$h.close, onClick: t },
			s(
				"svg",
				{
					width: n,
					height: r,
					viewBox: "0 0 11 11",
					"aria-labelledby": `${i}-close`,
				},
				s("title", { id: `${i}-close` }, "Close"),
				s("path", { d: "M1 1l9 9m-9 0l9-9" })
			)
		);
	},
	button$4 = "z44l",
	active$2 = "z4qb",
	buttonGreen = "z44l z42qo",
	buttonBlue = "z44l z415m",
	buttonGrey = "z44l z430w",
	buttonDisabled = "z44l z430w z410u",
	buttonRed = "z44l z41yi",
	buttonFloat = "z44l z41uv",
	buttonLink$1 = "z44l z41rt",
	buttonLinkFloat = "z44l z41rt z4kq",
	buttonLinkSmall = "z44l z41rt z42wq",
	buttonPromoUnsubscribe = "z44l z41rt z423c",
	link$2 = "z41gq",
	buttonBlock = "z44l z42g1",
	buttonSmall = "z44l z42gf",
	google = "z44l z433s",
	googleIcon = "z432r",
	popupButton = "z44l z4a1",
	popupButtonSmall = "z41xe",
	popupButtonGreen = "z44l z4a1 z424y",
	popupButtonBlue = "z44l z4a1 z41vb",
	popupButtonOrange = "z44l z4a1 z42j7",
	popupButtonLinkGreen = "z44l z41rt z4ow",
	popupButtonLinkOrange = "z44l z41rt z4118",
	popupButtonGreenSmall = "z44l z4a1 z424y z41xe z4ls",
	popupButtonBlueSmall = "z44l z4a1 z41vb z41xe z421m",
	submitRevisionButton = "z44l z4a1 z424y z42fn",
	submitReportButton = "z44l z4a1 z42j7 z4rq",
	submitRevisionButtonWarning = "z44l z4a1 z42j7 z42ct",
	buttonBig = "z44l z42qx",
	greenHighlight = "z4y3",
	orangeHighlight = "z41pi",
	__default$g = {
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
	pane$1 = "B9v2h1",
	title$7 = "B9vl",
	body$3 = "B9v21x",
	button$3 = popupButtonGreen + " B9v2hx",
	link$1 = popupButtonGreen + " B9vhl",
	nps = "B9v2h1 B9v2vm",
	score = "B9v1fv",
	npsLegend = "B9v2v2",
	npsButton = "B9vdn",
	npsButton0 = "B9vdn B9vjs",
	npsButton1 = "B9vdn B9v24z",
	npsButton2 = "B9vdn B9v165",
	npsButton3 = "B9vdn B9v2pd",
	npsButton4 = "B9vdn B9vzs",
	npsButton5 = "B9vdn B9v1vp",
	npsButton6 = "B9vdn B9v1up",
	npsButton7 = "B9vdn B9v2wk",
	npsButton8 = "B9vdn B9v8w",
	npsButton9 = "B9vdn B9vl8",
	npsButton10 = "B9vdn B9v1c4",
	__default$f = {
		pane: "B9v2h1",
		title: "B9vl",
		body: "B9v21x",
		button: popupButtonGreen + " B9v2hx",
		link: popupButtonGreen + " B9vhl",
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
	npsButtons = (e) =>
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) =>
			s(
				"button",
				{
					className: __default$f[`npsButton${t}`],
					key: t,
					onClick: () => e(t),
				},
				t
			)
		);
function Screener() {
	let { dispatch: e, screener: t, ut: i } = useStore("screener", "ut"),
		n = t.active;
	if (!n || i.stage !== STAGE_HIDDEN) return null;
	let r = d(() => {
		e("screener/dismiss", n);
	}, [n]);
	if (n.name.endsWith("NPS")) {
		let t = (t) => {
			e("screener/accept", { screener: n, value: t });
		};
		return s(
			"aside",
			{ className: __default$f.nps, id: "screener" },
			s(Close, { onClick: r, id: "screener" }),
			s("p", { className: __default$f.body }, n.body),
			s("div", { className: __default$f.score }, npsButtons(t)),
			s(
				"p",
				{ className: __default$f.npsLegend },
				"0 - Not likely 10 - Very likely"
			)
		);
	}
	let a = d(() => {
		e("screener/accept", { screener: n });
	}, [n]);
	return s(
		"aside",
		{ className: __default$f.pane, id: "screener" },
		s(Close, { onClick: r, id: "screener" }),
		s("h2", { className: __default$f.title }, n.title),
		s("p", { className: __default$f.body }, n.body),
		n.usertest
			? s("button", { className: __default$f.button, onClick: a }, n.button)
			: s(
					"a",
					{
						className: __default$f.link,
						href: n.link,
						onClick: a,
						rel: "noopener noreferrer",
						target: "_blank",
					},
					n.button
			  )
	);
}
function getApplicationLink(e, t) {
	let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
	if (isAndroid(e)) {
		let e = `utm_source%3D${t}`,
			n = i.songId ? `%26tab_id%3D${i.songId}` : "",
			r = `${e}${n}`;
		return `https://play.google.com/store/apps/details?id=com.songsterr&referrer=${r}`;
	}
	let n = encodeURIComponent(`${t}`);
	return `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${n}`;
}
function ApplicationLink(e) {
	let {
			dispatch: t,
			device: i,
			experiments: n,
		} = useStore("device", "experiments"),
		{ source: r } = e,
		a = e.os ? { name: e.os } : i.os,
		o = e.extra || {},
		l = e.attrs || {},
		u = getApplicationLink(a, r, o, n),
		c = d(() => {
			e.onClick && e.onClick(),
				t("curiosity/event", {
					event: "Navigated to app store",
					...e.eventProperties,
				}),
				t("player/togglePlay", !1),
				t("curiosity/google", {
					category: "Showroom",
					action: `Clicked on ${
						isAndroid(a) ? "Google Play" : "App Store"
					} link`,
				});
		}, []);
	return s(
		"a",
		{ ...l, href: u, onClick: c, rel: "noopener noreferrer", target: "_blank" },
		e.children
	);
}
let pane = "Ei1by",
	title$6 = "Ei2cl",
	subtitle = "Ei2zd",
	actions$3 = "Ei2we",
	__default$e = {
		pane: "Ei1by",
		title: "Ei2cl",
		subtitle: "Ei2zd",
		actions: "Ei2we",
	},
	exitActive$2 = "e81fc",
	enterActive$2 = "e8v0",
	enter$2 = "e8qv",
	exit$2 = "e8ai",
	__default$d = {
		exitActive: "e81fc",
		enterActive: "e8v0",
		enter: "e8qv",
		exit: "e8ai",
	},
	animationProps$1 = { animationStyles: __default$d };
function getPromoContext(e, t) {
	return e === PromoTypes.SLOWDOWN
		? {
				title: "Struggling to figure out\nthe rhythm of this fragment?",
				cta: t.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
				source: "slowdown_promo_popup",
				referringLink: "Slowdown Promo Popup",
		  }
		: e === PromoTypes.LOOP
		? {
				title: "Want to nail this fragment?",
				cta: t.isPhone
					? "Practice it by looping\nin our app!"
					: "Practice it by looping\non Plus!",
				source: "loop_promo_popup",
				referringLink: "Loop Promo Popup",
		  }
		: e === PromoTypes.NO_ADS
		? {
				title: "Ads take up too much space?",
				cta: t.isPhone ? "Remove them in our app!" : "Remove them on Plus!",
				source: "noads_promo_popup",
				referringLink: "No Ads Promo Popup",
		  }
		: e === PromoTypes.PRINT
		? {
				title: "Prefer to read and\nmarkup on paper?",
				cta: t.isPhone
					? "Print the tab out in our app!"
					: "Print the tab out on Plus!",
				source: "print_promo_popup",
				referringLink: "Print Promo Popup",
		  }
		: e === PromoTypes.MUTE
		? {
				title: "Using tab as\na backing track?",
				cta: t.isPhone
					? "Mute your instrument\nin our app!"
					: "Mute your instrument\non Plus!",
				source: "mute_promo_popup",
				referringLink: "Mute Promo Popup",
		  }
		: e === PromoTypes.SOLO
		? {
				title: "Bass line is hard to hear?",
				cta: t.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
				source: "solo_promo_popup",
				referringLink: "Solo Promo Popup",
		  }
		: e === PromoTypes.PITCH_SHIFT
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
let Promo = () => {
		let { dispatch: e, promo: t, device: i } = useStore("promo", "device"),
			n = t.feature;
		if (!n) return null;
		let r = getPromoContext(n, i);
		r && seenAttractor(PROMO_ATTRACTORS_MAP.get(n));
		let a = () => {
				e("promo/unsubscribe"),
					e("curiosity/event", { event: "Unsubscribed from promo" });
			},
			o = () => e("promo/dismiss"),
			l = () => {
				e("curiosity/setConversionProps", {
					"Last referring link": r.referringLink,
				}),
					e("promo/dismiss");
			};
		return s(
			TransitionGroup,
			null,
			n &&
				s(
					CSSTransition,
					{ ...animationProps$1, key: "popup" },
					s(
						"aside",
						{ className: __default$e.pane, id: "promo" },
						s("h2", { className: __default$e.title }, r.title),
						s("p", { className: __default$e.subtitle }, r.cta),
						s(
							"div",
							{ className: __default$e.actions },
							!i.isPhone &&
								s(
									Link,
									{
										to: "/a/wa/plus",
										className: __default$g.buttonGreen,
										onClick: l,
									},
									"Tell me more!"
								),
							i.isPhone &&
								s(
									ApplicationLink,
									{
										source: r.source,
										onClick: l,
										attrs: { className: __default$g.buttonGreen },
										eventProperties: {
											Via: "contextual offer",
											"App store": isAndroid(i.os)
												? "Google Play"
												: "App Store",
											Feature: n,
										},
									},
									isAndroid(i.os) ? "Open Google Play" : "Open App Store"
								),
							s(
								"a",
								{ onClick: o, className: __default$g.buttonLink },
								"No, thanks"
							)
						),
						s(
							"a",
							{ onClick: a, className: __default$g.buttonPromoUnsubscribe },
							"Don’t show ads like that"
						)
					)
				)
		);
	},
	wrapper$1 = "Cpv1d",
	controls$1 = "Cpvpq",
	right = "Cpv6d",
	link = "Cpv2kr",
	active$1 = "Cpv2kr Cpv1th",
	small = "Cpv2kr Cpv1x",
	__default$c = {
		wrapper: "Cpv1d",
		controls: "Cpvpq",
		right: "Cpv6d",
		link: "Cpv2kr",
		active: "Cpv2kr Cpv1th",
		small: "Cpv2kr Cpv1x",
	},
	SoundControls = () => {
		let {
				dispatch: e,
				meta: t,
				player: i,
				experiments: n,
				device: r,
			} = useStore("meta", "player", "experiments", "device"),
			a = w.get(t.current, i.version),
			o = j.decode(a.audio),
			l = j.decode(a.midi),
			u = "??",
			d = "??",
			c = "??";
		l && ((u = l.numericVersion.toString()), (d = l.payload)),
			o && (c = o.numericVersion.toString());
		let p = (t, i) => {
				t.preventDefault(), e("editor/sound:generate", { version: i });
			},
			h = (t, i) => {
				t.preventDefault(), e("editor/sound:toggle", { version: i });
			},
			g = (e, t) => {
				e.preventDefault(),
					document.firstElementChild.setAttribute("color-scheme", t);
			},
			f = (e) => {
				let n = V(e),
					r = !w.has(t.current, e);
				return s(
					"a",
					{
						className:
							i.version === n.version ? __default$c.active : __default$c.link,
						disabled: r,
						onClick: (t) => h(t, e),
					},
					n.displayName
				);
			},
			m = q(r, n),
			y = V(m),
			T = "　|　",
			S = s("div", null, `Default: ${y.displayName}`, T),
			_ = s(
				"div",
				null,
				"Sound: ",
				f(I.V1),
				" ",
				f(I.V2),
				" ",
				f(I.V4),
				" ",
				f(I.DEV),
				T
			),
			v =
				u &&
				s(
					"a",
					d && {
						className: __default$c.link,
						href: `https://github.com/songsterr/songsterr-processor-midi/commit/${d}`,
						target: "_blank",
					},
					`midi: ${u}`
				),
			E = `audio: ${c}`,
			b = s("div", null, v, u ? " " : "", E, T),
			A = (e, t) =>
				s(
					"a",
					{
						className: __default$c.small,
						href: `https://www.songsterr.com/api/sound/${I[e].toLowerCase()}`,
						target: "_blank",
					},
					t
				),
			L = s(
				"div",
				{ className: __default$c.right },
				"List: ",
				A(I.V2, "V2"),
				" ",
				A(I.V4, "V4"),
				" ",
				A(I.DEV, "Dev"),
				T
			),
			N = (e, t) =>
				s("a", { className: __default$c.link, onClick: (t) => g(t, e) }, t),
			P = s("div", null, N("light", "Light"), " ", N("dark", "Dark"), T),
			C = (e, t) =>
				s(
					"a",
					{ className: __default$c.small, onClick: (t) => p(t, e) },
					`Generate ${t}`
				),
			R = s(
				"div",
				null,
				C(I.V2, "V2"),
				" ",
				C(I.V4, "V4"),
				" ",
				C(I.DEV, "Dev")
			);
		return s(
			"div",
			{ className: __default$c.wrapper },
			s("div", { className: __default$c.controls }, S, _, b, L, P, R)
		);
	},
	placeholder = "ju1pe",
	__default$b = { placeholder: "ju1pe" },
	wrap = "Cblr3",
	inner = placeholder + " Cbl2bs",
	banner = "Cbl17o",
	__default$a = {
		wrap: "Cblr3",
		inner: placeholder + " Cbl2bs",
		banner: "Cbl17o",
	};
var etEn = "/static/media/et640en.746163ed.png",
	etRu = "/static/media/et640ru.875012f4.png",
	rraEn = "/static/media/rra640en.4edf9663.png",
	rraRu = "/static/media/rra640ru.60c1c5e4.png";
let ET_APP_LINK =
		"https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
	RRA_APP_LINK =
		"https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50";
function getMobileShowroomStub(e) {
	let t = isAndroid(e.os),
		i = ["ru", "ru-mo", "be", "uk"].some((t) => -1 !== e.languages.indexOf(t));
	return {
		alt: t
			? "Master rhythm skills with Rhythm Trainer by Songsterr"
			: "Ear training reinvented",
		link: t
			? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50"
			: "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
		image: t ? (i ? rraRu : rraEn) : i ? etRu : etEn,
	};
}
let ShowroomHeader = f(() => {
		let e = y(),
			{ ads: t, device: i } = useStore("ads", "device"),
			{ alt: n, link: r, image: o } = getMobileShowroomStub(i);
		return (
			useNotsy("tab_page_mobile", { isTargeted: !0, page: "tab" }),
			a(() => {
				let t = e.current;
				if (t)
					try {
						let e = document.getElementById("header"),
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
						return e && i.observe(e), () => i.disconnect();
					} catch (e) {}
			}, [e]),
			s(
				"section",
				{ id: "showroom_header", className: __default$a.wrap, ref: e },
				s(
					"div",
					{ id: "Redesign_ATF_tab_page_320х50", className: __default$a.inner },
					t.notsyFailed &&
						s(
							"a",
							{ className: __default$a.link, href: r, target: "_blank" },
							s("img", { src: o, className: __default$a.banner, alt: n })
						)
				)
			)
		);
	}),
	ConsentManager = m(() =>
		Promise.all([
			import("./ConsentManager.de820027.js"),
			cssloader([
				"/static/latest/ConsentManager.045f97eb897a0500.css",
				"/static/latest/index.31bdd350cc85343e.css",
			]),
		]).then((e) => e[0])
	),
	ConsentManagerWrap = () => {
		let { consent: e } = useStore("consent");
		return "tcf" === e.suite
			? o("div", {
					children: o(SuspenseWrap, { component: ConsentManager }, "wrap"),
			  })
			: null;
	},
	HOLE = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
	COMMON_PATH_KEYS =
		"M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z",
	COMMON_PATH_HANDLE = "M7 10v7H3c-3 0-3-7 0-7z",
	COMMON_PATH_GUITAR =
		"m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z",
	COMMON_PATH_CELLO_CENTER = "m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z",
	COMMON_PATH_VIOLA = `${COMMON_PATH_HANDLE}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`,
	PATH_GUITAR_HETFIELD = `${COMMON_PATH_HANDLE}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${HOLE}m2.8 1.8${HOLE}m2.8 1.8${HOLE}m2.8 1.8${HOLE}m2.8 1.8${HOLE}`,
	PATH = [
		`${COMMON_PATH_KEYS}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`,
		"M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z",
		`${COMMON_PATH_KEYS}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`,
		`${COMMON_PATH_KEYS}M9.8.1${HOLE}m3 1.36${HOLE}m3 1.36${HOLE}m3 1.36${HOLE}m3 1.36${HOLE}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`,
		`${COMMON_PATH_HANDLE}${COMMON_PATH_GUITAR}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`,
		`${COMMON_PATH_HANDLE}${COMMON_PATH_GUITAR}m3.9 1.25${HOLE}m3.9 0${HOLE}m3.9 0${HOLE}m-7.8 4.5${HOLE}m3.9 0${HOLE}m3.9 0${HOLE}`,
		`${COMMON_PATH_HANDLE}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${HOLE}m2.8.65${HOLE}m2.8.65${HOLE}m2.8.65${HOLE}m2.8.65${HOLE}`,
		`${COMMON_PATH_HANDLE}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`,
		COMMON_PATH_VIOLA,
		`${COMMON_PATH_VIOLA}${COMMON_PATH_CELLO_CENTER}`,
		`${COMMON_PATH_HANDLE}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z${COMMON_PATH_CELLO_CENTER}`,
		"M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z",
		"M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z",
		"M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z",
		"M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z",
		"M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z",
		"M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z",
		"M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z",
		`${COMMON_PATH_KEYS}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`,
		"M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z",
		"M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z",
		`${COMMON_PATH_HANDLE}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`,
		"M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z",
		"M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z",
		"M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",
	],
	TRANSFORM = "translate(-5 14)rotate(-45)",
	TRANSFORM_HETFIELD = "translate(-7 14)rotate(-45)",
	TRANSFORM_ACCORDION = " translate(13 0)rotate(45)scale(.75)";
function getTransform(e) {
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
function PathInstrument(e) {
	let { instrumentId: t, name: i, className: n, transform: r } = e,
		a = groupByInstrument(t),
		o = i && 6 === a && i.includes("James Hetfield"),
		l = o ? PATH_GUITAR_HETFIELD : PATH[a],
		u = o ? "translate(-7 14)rotate(-45)" : getTransform(a);
	return s("path", {
		d: l,
		transform: (u || r) && `${r || ""}${u || ""}`,
		className: n,
	});
}
let instrument$1 = "wc27x",
	instrumentActive = "wc1dg",
	instrumentMobile = "wc2wi",
	indication = "wcnf",
	indicationActive = "wc7n",
	__default$9 = {
		instrument: "wc27x",
		instrumentActive: "wc1dg",
		instrumentMobile: "wc2wi",
		indication: "wcnf",
		indicationActive: "wc7n",
	};
class MixerItemIcon extends c {
	render() {
		let {
				active: e,
				mobile: t,
				name: i,
				instrumentId: n,
				i: r,
				instrument: a,
				playing: o,
			} = this.props,
			l = e ? __default$9.instrumentActive : __default$9.instrument;
		l = t ? __default$9.instrumentMobile : l;
		let u = `part-${r}`;
		return s(
			"svg",
			{
				className: this.props.className,
				width: "27",
				height: "27",
				viewBox: "0 0 27 27",
				"aria-labelledby": u,
			},
			s("title", { id: u }, a),
			s(PathInstrument, { className: l, instrumentId: n, name: i }),
			o &&
				s("circle", {
					className: e ? __default$9.indicationActive : __default$9.indication,
					strokeWidth: 2,
					cy: 25,
					cx: 25,
					r: 3,
				})
		);
	}
}
let beatIsPlaying = (e) => e.notes?.length > 0 && !e.rest,
	doesItSound = (e, t) => {
		let i = findLayoutIndexByTimestamp(e, t),
			n = e.timestamps[i],
			r = e.timeline.get(n);
		return r.beats.some(beatIsPlaying);
	};
function usePlayingInstruments() {
	let { parts: e, player: t } = useStore("parts", "player", "experiments"),
		[n, a] = i({}),
		s = y(),
		o = d(() => {
			s.current = requestAnimationFrame(o);
			let i = t.audio.getCursor(),
				r = e.list.reduce(
					(e, t) => ({ ...e, [t.partId]: doesItSound(t, i) }),
					n
				);
			a(r);
		}, [e.list, t.audio]);
	return (
		r(
			() => (
				(s.current = requestAnimationFrame(o)),
				() => s.current && cancelAnimationFrame(s.current)
			),
			[e.list]
		),
		n
	);
}
let mixer$1 = "Cix6",
	scroller = "Cixn1",
	shadowOverlay = "Cix1pm",
	arrow = "Cix2la",
	item = "Cix314",
	itemLink = "Cix2aq",
	tail = "Cix2lj",
	icon$1 = "Cix268",
	text = "Cixvc",
	itemActive = "Cix314 Cix4s",
	mixerDropdown = "Cix6 Cix9m",
	__default$8 = {
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
	MIXER_OFFSET = 42,
	ITEM_HEIGHT = 46,
	MIXER_PADDINGS = 20,
	MIXER_CONTROL_ID = "#mixer-button";
function calculateArrowOffset(e) {
	return e <= 2 ? 1 : e <= 4 ? 2 : 3;
}
function calculateTop(e) {
	return 42 - 46 * e;
}
function calculateStyle(e, t) {
	let i = document.querySelector("#mixer-button") || null,
		n = i ? i.getBoundingClientRect().top : 42,
		r = calculateTop(calculateArrowOffset(e));
	return { height: Math.min(46 * e, t - (n + r) - 20 - 20), top: r };
}
function calculateArrowStyle(e) {
	return { top: -1 * e.top + 17 };
}
let MixerItems = (e) => {
	let { meta: t, parts: i, onItemClick: n } = e,
		r = usePlayingInstruments(),
		{ partId: a, revisionId: o, current: l } = t;
	return i
		? i.map((e, t) => {
				let i = a === t,
					u = `${i ? __default$8.itemActive : __default$8.item}`,
					d = r[t];
				return s(
					"div",
					{ className: u, key: t, "aria-label": "track" },
					s(
						Link,
						{
							className: __default$8.itemLink,
							to: getUrl(l, t, o),
							"aria-current": i ? "page" : void 0,
							onClick: () => n({ instrumentId: e.instrumentId }),
						},
						s(MixerItemIcon, {
							className: __default$8.icon,
							instrumentId: e.instrumentId,
							instrument: e.instrument,
							i: t,
							name: e.name,
							active: i,
							playing: d,
						}),
						s("span", { className: __default$8.text }, e.title)
					)
				);
		  })
		: null;
};
class Mixer extends c {
	constructor(e) {
		super(e);
		let t = e.meta.current,
			i = (t && t.tracks) || [],
			n = calculateStyle(i.length, e.screen.viewport.height),
			r = calculateArrowStyle(n),
			a = { height: n.height };
		this.state = { style: n, arrowStyle: r, scrollerStyle: a };
	}
	updateHeight = () => {
		let e = this.props.meta.current,
			t = (e && e.tracks) || [],
			i = calculateStyle(t.length, this.props.screen.viewport.height),
			n = calculateArrowStyle(i),
			r = { height: i.height },
			a = this.state.style;
		(a.height !== i.height || a.top !== i.top) &&
			this.setState({
				...this.state,
				style: i,
				arrowStyle: n,
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
			i = this.props.screen.isSmall,
			n = (e && e.tracks) || [],
			r = i ? null : this.state.style,
			a = s(MixerItems, {
				parts: n,
				meta: this.props.meta,
				onItemClick: (e) => t("songs/default", e),
			});
		return s(
			"div",
			{
				className: i ? __default$8.mixerDropdown : __default$8.mixer,
				style: r,
				role: "dialog",
				"aria-label": "Select track",
			},
			i
				? a
				: s(
						"div",
						{
							className: __default$8.scroller,
							style: this.state.scrollerStyle,
						},
						a
				  ),
			i
				? null
				: s("div", {
						className: __default$8.arrow,
						style: this.state.arrowStyle,
				  })
		);
	}
}
var Mixer$1 = connect(Mixer, "screen", "meta");
function IconArrow(e) {
	let {
		up: t,
		styles: { icon: i, stroke: n },
	} = e;
	return s(
		"svg",
		{ width: 14, height: 12, viewBox: "0 0 26 17", className: i },
		s("path", {
			d: t ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
			className: n,
			"stroke-width": 4,
			"stroke-linecap": "square",
		})
	);
}
let header = "B1t2kr",
	wrapper = "B1t297",
	stroke = "B1t1q7",
	burger = "B1t267",
	help = "B1tga",
	mixer = "B1t1kk",
	instrument = "B1t1bd",
	img = "B1t2x3",
	title$5 = "B1thf",
	icon = "B1tix",
	__default$7 = {
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
	animationProps = { animationStyles: __default$w };
function SmallScreenHeader(e) {
	let { songs: t, layer: i, meta: n } = useStore("songs", "layer", "meta"),
		r = "mixer" === i.layer,
		{ isChords: a } = e,
		o = "Chords";
	if (!a) {
		let e = getMetaTrack(n);
		o = e ? `${e.name} \u002d ${e.instrument}` : "Instrument";
	}
	return s(
		"header",
		{ className: __default$7.header, "data-controls": "tablature" },
		s(
			"div",
			{ className: __default$7.wrapper },
			s(
				Link,
				{
					to: `/${formatFiltersQuery(t.pattern, t.filters)}`,
					className: __default$7.burger,
					title: "Search",
					id: "burger",
				},
				s(IconBurger, { styles: __default$7 })
			),
			s(
				"button",
				{
					className: __default$7.mixer,
					onClick: e.handleMixer,
					role: "button",
					id: "control-mixer",
					title: r ? "Hide tracks" : "Show tracks",
					"aria-haspopup": !0,
					"aria-pressed": r,
				},
				s("div", { className: __default$7.title }, o),
				!a && s(IconArrow, { up: r, styles: __default$7 })
			),
			s(
				Link,
				{ to: "/a/wa/help", className: __default$7.help, title: "Help" },
				s(IconQuestions, { width: 27, height: 25, styles: __default$7 })
			)
		),
		s(
			TransitionGroup,
			null,
			r && s(CSSTransition, animationProps, s(Mixer$1, null))
		)
	);
}
function useLocale() {
	return window.__LOCALE__ || "en";
}
var de$1 = {
		translations: {
			"": {
				"Choose right file format": ["W\xe4hlen Sie das richtige Dateiformat"],
				"Invalid e-mail address": ["Ung\xfcltige E-Mail-Adresse"],
				"Oops, something went wrong. Please try again later": [
					"Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es sp\xe4ter noch einmal",
				],
				"Passwords should match": ["Passw\xf6rter sollten \xfcbereinstimmen"],
				"Please describe the problem": ["Bitte beschreiben Sie das Problem"],
				"Please fix the errors and try again": [
					"Bitte beheben Sie die Fehler und versuchen Sie es erneut",
				],
				"Please provide more meaningful edit summary": [
					"Bitte geben Sie eine aussagekr\xe4ftigere Bearbeitungszusammenfassung an",
				],
				"Please select a reason for the report": [
					"Bitte w\xe4hlen Sie einen Grund f\xfcr den Bericht",
				],
				"Should be at least 5 symbols long": [
					"Sollte mindestens 5 Symbole lang sein",
				],
				"Should be checked": ["Sollte gepr\xfcft werden"],
				"Should be less than 1000 characters": [
					"Sollte weniger als 1000 Zeichen umfassen",
				],
				"Should be YouTube URL": ["Sollte YouTube URL sein"],
				"Should not be empty": ["Sollte nicht leer sein"],
				"Tell us how can we help you": [
					"Sagen Sie uns, wie wir Ihnen helfen k\xf6nnen",
				],
				"Upload the file": ["Hochladen der Datei"],
			},
		},
		language: "de",
		pluralForms: "nplurals=2; plural=(n != 1);",
	},
	es$1 = null,
	fr$1 = {
		translations: {
			"": {
				"Invalid e-mail address": ["Adresse e-mail non valide"],
				"Oops, something went wrong. Please try again later": [
					"Oups, quelque chose s’est mal pass\xe9. Veuillez r\xe9essayer plus tard",
				],
				"Passwords should match": ["Les mots de passe doivent correspondre"],
				"Please fix the errors and try again": [
					"Veuillez corriger les erreurs et r\xe9essayer",
				],
				"Should be at least 5 symbols long": [
					"Doit comporter au moins 5 symboles",
				],
				"Should be checked": ["Devrait \xeatre v\xe9rifi\xe9"],
				"Should be less than 1000 characters": [
					"Doit comporter moins de 1000 caract\xe8res",
				],
				"Should not be empty": ["Ne doit pas \xeatre vide"],
			},
		},
		language: "fr",
		pluralForms: "nplurals=2; plural=(n > 1);",
	},
	it$1 = null,
	ja$1 = null,
	ko$1 = null,
	pt$1 = null,
	ru$1 = null,
	zh$1 = null,
	locales$1 = [de$1, es$1, fr$1, it$1, ja$1, ko$1, pt$1, ru$1, zh$1];
let translations = new Map();
function lazyGettext(e) {
	let t = translations.get(e);
	return t || ((t = Gettext(e, locales$1)), translations.set(e, t)), t;
}
function emailValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return null == e || 0 === e.length
		? i("Should not be empty")
		: !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				e
		  ) && i("Invalid e-mail address");
}
function notEmptyValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return 0 === e.length && i("Should not be empty");
}
function revisionSummaryValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return e.length >= 1e3
		? i("Should be less than 1000 characters")
		: 0 === (e = e.replace(/[^\w\s_]/, "").trim()).length
		? i("Should not be empty")
		: e.length < 3 && i("Please provide more meaningful edit summary");
}
function nameValidation(e, t) {
	return notEmptyValidation(e, t);
}
function summaryValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return 0 === e.length && i("Tell us how can we help you");
}
function getFilesValidator(e) {
	let t = e ? ["gp3", "gp4", "gp5", "gpx", "gp"] : ["gp3", "gp4", "gp5"];
	return function (e, i) {
		let { gettext: n } = lazyGettext(i);
		if (!e.length) return n("Upload the file");
		{
			let i = e[0].name.split(".").pop();
			if (!t.includes(i)) return n("Choose right file format");
		}
	};
}
function passwordValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return 0 === e.length
		? i("Should not be empty")
		: e.length < 5 && i("Should be at least 5 symbols long");
}
function termsValidation(e, t) {
	let { gettext: i } = lazyGettext(t);
	return !e && i("Should be checked");
}
function passwordMatchValidator(e, t, i) {
	let { gettext: n } = lazyGettext(i);
	return !!t && e !== t && n("Passwords should match");
}
function getFormValidationMessage(e) {
	let t = useLocale(),
		{ gettext: i } = lazyGettext(t);
	if (e instanceof Y) {
		if (e.reasons) {
			if (e.reasons.__all__) return e.reasons.__all__;
			let t = e.reasons.length && e.reasons[e.reasons.length - 1].message;
			if (t) return t;
		}
		return i("Please fix the errors and try again");
	}
	return e.message || i("Oops, something went wrong. Please try again later");
}
function getInputValidationMessage(e, t) {
	return e && e.reasons && e.reasons[t];
}
function validate(e) {
	let t = useLocale();
	Array.isArray(e) || (e = [e]);
	let i = e
		.map((e) => {
			let i;
			return (
				(i =
					"checkbox" === e.field.type
						? e.field.checked
						: "file" === e.field.type
						? e.field.files
						: e.field.value),
				{ [e.field.name]: e.validator(i, t) }
			);
		})
		.reduce((e, t) => Object.assign(e, t), {});
	if (Object.keys(i).reduce((e, t) => e || !!i[t], !1)) throw new Y(i);
	return null;
}
function validateRevisionReport(e, t) {
	let i = useLocale(),
		{ gettext: n } = lazyGettext(i),
		r = { __all__: void 0, comment: void 0 };
	if (
		(e || (r.__all__ = n("Please select a reason for the report")),
		"other" !== e || t || (r.comment = n("Please describe the problem")),
		Object.keys(r).reduce((e, t) => e || !!r[t], !1))
	)
		throw new Y(r);
	return null;
}
let error$1 = "Df9s",
	title$4 = "Df4c",
	rejected$1 = "Dfxe",
	content$1 = "Dfsp",
	exitActive$1 = "Df1p2",
	enterActive$1 = "Df16",
	enter$1 = "Df58",
	exit$1 = "Df1s7",
	__default$6 = {
		error: "Df9s",
		title: "Df4c",
		rejected: "Dfxe",
		content: "Dfsp",
		exitActive: "Df1p2",
		enterActive: "Df16",
		enter: "Df58",
		exit: "Df1s7",
	};
function FormError(e) {
	let { styles: t, error: i, errorMessage: n, name: r = "form" } = e,
		o = t || __default$6,
		l = y(),
		u = n,
		d = {
			enter: o.enter,
			enterActive: o.enterActive,
			exit: o.exit,
			exitActive: o.exitActive,
		};
	return (!u && i && (u = getFormValidationMessage(i)),
	a(() => {
		l.current.scrollIntoView && l.current.scrollIntoView();
	}, [u]),
	i instanceof X && i.action)
		? s(
				TransitionGroup,
				{ component: "div", className: o.error, ref: l },
				i &&
					s(
						CSSTransition,
						{ animationStyles: d, timeout: 300 },
						s(
							"div",
							{ className: o.rejected, key: "error" },
							s(
								"span",
								{ className: o.content, role: "alert", "aria-label": r },
								`Your actions appear suspicious. We will reject any attempt to ${i.action} within the next twenty four hours. `,
								"Please contact ",
								s(
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
		: s(
				TransitionGroup,
				{ component: "div", className: o.error, ref: l },
				u &&
					s(
						CSSTransition,
						{ animationStyles: d, timeout: 300 },
						s(
							"div",
							{ className: o.title, key: "error" },
							s(
								"span",
								{ className: o.content, role: "alert", "aria-label": r },
								u
							)
						)
					)
		  );
}
let settings$2 = "Czsup",
	panel$3 = "Czs1b5",
	head$2 = "Czs4c",
	_switch = "Czs1nq",
	switchActive = "Czs1nq Czs1ot",
	title$3 = "Czsaw",
	body$2 = "Czszb",
	actions$2 = "Czsn5",
	caption = "Czs221",
	fastActions = "Czs1rj",
	button$2 = "Czs1an",
	fast = "Czs1an Czs24z",
	buttonGray$1 = "Czs1an Czs246",
	__default$5 = {
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
	settings$1 = settings$2 + " Blg1d3",
	panel$2 = panel$3 + " Blgd8",
	head$1 = head$2 + " Blg76",
	title$2 = title$3 + " Blg25i",
	body$1 = "Blg2zb",
	priceBoxTitle = "Blg14z",
	priceBoxTitleAfter = "Blg14z Blg19z",
	priceBoxText = "Blg1be",
	actions$1 = actions$2 + " Blg2zc",
	button$1 = button$2 + " Blgq2",
	buttonGray = buttonGray$1 + " Blg2i3",
	__default$4 = {
		settings: settings$2 + " Blg1d3",
		panel: panel$3 + " Blgd8",
		head: head$2 + " Blg76",
		title: title$3 + " Blg25i",
		body: "Blg2zb",
		priceBoxTitle: "Blg14z",
		priceBoxTitleAfter: "Blg14z Blg19z",
		priceBoxText: "Blg1be",
		actions: actions$2 + " Blg2zc",
		button: button$2 + " Blgq2",
		buttonGray: buttonGray$1 + " Blg2i3",
	},
	error = "Bqh1iv",
	title$1 = "Bqh25v",
	rejected = "Bqh2xh",
	content = "Bqh2j6",
	exitActive = "Bqh2fg",
	enterActive = "Bqhgy",
	enter = "Bqh1yg",
	exit = "Bqhal",
	__default$3 = {
		error: "Bqh1iv",
		title: "Bqh25v",
		rejected: "Bqh2xh",
		content: "Bqh2j6",
		exitActive: "Bqh2fg",
		enterActive: "Bqhgy",
		enter: "Bqh1yg",
		exit: "Bqhal",
	};
function reducer(e, t) {
	switch (t.type) {
		case "migrate":
			return { ...e, processing: !0, error: null };
		case "success":
			return { ...e, processing: !1, success: !0 };
		case "failure":
			return { ...e, processing: !1, error: t.error };
	}
}
let MigrationPopup = () => {
		let {
			dispatch: e,
			user: t,
			payment: i,
			device: n,
		} = useStore("user", "payment", "device");
		a(
			() =>
				e("curiosity/event", {
					event: "Opened migration popup",
					Plan: i.plan.id,
					Country: n.country,
				}),
			[]
		);
		let [r, o] = T(reducer, { processing: !1, success: null, error: null }),
			l = async () => {
				e("curiosity/event", {
					event: "Confirmed subscription migration",
					Plan: i.plan.id,
					Country: n.country,
				});
				try {
					o({ type: "migrate" }), await new Promise((e) => setTimeout(e, 2e3));
					let t = await apiMigratePlus({ planId: i.plan.id });
					e("user/migratePlus", t), o({ type: "success" });
				} catch (e) {
					o({ type: "failure", error: e });
				}
			},
			u = () => {
				e("payment/popup:hide"),
					e("curiosity/event", {
						event: "Skipped subscription migration",
						Plan: i.plan.id,
						Country: n.country,
					});
			},
			d = () => e("payment/popup:hide"),
			c = "USD" !== i.plan.currency ? "US\xa0" : "",
			p = getPlanById(t.profile.subscription.plan.id),
			h = getPlanPriceTag(p, !0),
			g = getPlanPriceTag(i.plan, !0),
			f = countries.get(n.country) || void 0;
		return (
			i.showMigrationPopup &&
			s(
				"section",
				{ className: __default$4.settings },
				s(
					"div",
					{ className: __default$4.panel },
					s(
						"div",
						{ className: __default$4.head },
						s("div", { className: __default$4.title }, "Plus prices reduction"),
						s(
							"p",
							null,
							"We are updating our subscription model to use regional prices. ",
							"Please review the changes that will apply to your account below:"
						)
					),
					s(
						"div",
						{ className: __default$4.body },
						s(
							"article",
							{ className: __default$4.priceBox },
							s(
								"h3",
								{ className: __default$4.priceBoxTitleAfter },
								r.success ? "Current price " : "New price ",
								s("span", null, g)
							)
						),
						!r.success &&
							s(
								"article",
								{ className: __default$4.priceBox },
								s(
									"h3",
									{ className: __default$4.priceBoxTitle },
									"Old price ",
									c,
									h
								)
							)
					),
					s(
						"div",
						{ className: __default$4.actions },
						s(
							"p",
							null,
							f && `The new price is relevant for ${f}. `,
							"If you use the subscription from a country with a lower price, it may be cancelled without a refund."
						),
						s(
							"p",
							null,
							"This is a one way subscription migration. ",
							"If you choose to skip now, you can upgrade to regional prices at any time with one click from your account page."
						),
						s(
							"p",
							null,
							s(
								"strong",
								null,
								"You will NOT be charged any extra money now. New price will apply on the next billing date."
							)
						),
						s(FormError, { error: r.error, styles: __default$3 }),
						!r.success &&
							s(
								"button",
								{ id: "save", className: __default$4.button, onClick: l },
								r.processing &&
									s(Spinner, {
										width: 17,
										height: 17,
										fill: "#fff",
										className: __default$G.migrate,
									}),
								r.processing ? "Switching plan..." : `Cut costs with ${g}`
							),
						!r.success &&
							!r.processing &&
							s(
								"button",
								{ id: "cancel", className: __default$4.buttonGray, onClick: u },
								`Stay with ${c}${h}`
							),
						r.success &&
							!r.processing &&
							s(
								"button",
								{ id: "done", className: __default$4.button, onClick: d },
								"Done"
							)
					)
				)
			)
		);
	},
	settings = "C0d2hw",
	panel$1 = "C0d2su",
	head = "C0d2mf",
	title = "C0d15l",
	body = "C0d2gj",
	actions = "C0d52",
	button = buttonGreen + " C0d2j4",
	buttonLink = buttonLink$1 + " C0d2ls",
	__default$2 = {
		settings: "C0d2hw",
		panel: "C0d2su",
		head: "C0d2mf",
		title: "C0d15l",
		body: "C0d2gj",
		actions: "C0d52",
		button: buttonGreen + " C0d2j4",
		buttonLink: buttonLink$1 + " C0d2ls",
	};
var de = {
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
	es = {
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
	fr = {
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
	it = null,
	ja = {
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
	ko = {
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
	pt = null,
	ru = {
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
	zh = {
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
	},
	locales = [de, es, fr, it, ja, ko, pt, ru, zh];
let SUBSCRIBE_DIALOG_COOKIE = "sr_subscribe_dialog",
	SubscribeDialogPopup = () => {
		let { dispatch: e } = useStore(),
			{ gettext: t } = useGettext(locales),
			[n, r] = i(!readJsonCookie(SUBSCRIBE_DIALOG_COOKIE)),
			a = () => {
				r(!1),
					setCookie(SUBSCRIBE_DIALOG_COOKIE, !0),
					e("curiosity/setConversionProps", {
						"Last referring link": "Subscribe dialogue",
					}),
					e("navigate", "/a/wa/plus?from=subscribe_dialogue");
			},
			o = () => {
				r(!1), setCookie(SUBSCRIBE_DIALOG_COOKIE, !0);
			};
		return (
			n &&
			s(
				"section",
				{ className: __default$2.settings },
				s(
					"div",
					{ className: __default$2.panel },
					s(
						"div",
						{ className: __default$2.head },
						s("h2", { className: __default$2.title }, t("Subscribe to Plus"))
					),
					s(
						"p",
						{ className: __default$2.body },
						t(
							"Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product ❤️"
						)
					),
					s(
						"div",
						{ className: __default$2.actions },
						s(
							"button",
							{ id: "subscribe", className: __default$2.button, onClick: a },
							t("Subscribe to Plus")
						),
						s(
							"button",
							{ id: "cancel", className: __default$2.buttonLink, onClick: o },
							t("Continue on a free plan")
						)
					)
				)
			)
		);
	},
	panel = "u52oy",
	controls = "u51oh",
	active = "u51nj",
	__default$1 = { panel: "u52oy", controls: "u51oh", active: "u51nj" };
class TabEditorAdminPanel extends c {
	activeItemRef = S();
	constructor() {
		super(), (this.state = { offset: 0 });
	}
	componentDidMount() {
		this.props.tabEditor.adminPanelOpened &&
			this.props.dispatch("tabEditor/loadAdminData", {
				offset: this.state.offset,
				limit: 500,
			}),
			this.activeItemRef.current &&
				this.activeItemRef.current.scrollIntoView({ behavior: "smooth" });
	}
	componentDidUpdate(e) {
		!e.tabEditor.adminPanelOpened &&
			this.props.tabEditor.adminPanelOpened &&
			this.props.dispatch("tabEditor/loadAdminData", {
				offset: this.state.offset,
				limit: 500,
			}),
			this.activeItemRef.current &&
				this.activeItemRef.current.scrollIntoView({ behavior: "smooth" });
	}
	render() {
		let { dispatch: e, query: t, tabEditor: i } = this.props;
		if (!i.adminPanelOpened) return null;
		let { offset: n } = this.state,
			r = +t.tabedit,
			a = i.adminData.map((e) =>
				s(
					"li",
					{
						ref: e.id === r ? this.activeItemRef : void 0,
						className: e.id === r ? __default$1.active : void 0,
						onClick: () => this.props.dispatch("tabEditor/loadById", e.id),
					},
					`id"${e.id}"-song"${e.songId}"`
				)
			),
			o = () => {
				e("tabEditor/loadAdminData", { offset: n - 500, limit: 500 }),
					this.setState({ offset: n - 500 });
			},
			l = () => {
				e("tabEditor/loadAdminData", { offset: n + 500, limit: 500 }),
					this.setState({ offset: n + 500 });
			};
		return s(
			"div",
			{ className: __default$1.panel },
			s(
				"div",
				{ className: __default$1.controls },
				s("button", { onClick: o }, "<<"),
				s("h1", {}, `${n}-${n + 500}`),
				s("button", { onClick: l }, ">>")
			),
			s("ul", null, a)
		);
	}
}
var TabEditorAdminPanel$1 = connect(TabEditorAdminPanel, "tabEditor", "query");
let overlay = "Bz8bn",
	__default = { overlay: "Bz8bn" };
function HideLayerOverlay() {
	let { layer: e, dispatch: t } = useStore("layer");
	return (
		e.layer &&
		o("div", {
			className: __default.overlay,
			onClick: () => t("layer/hide"),
			id: "hide-layer-overlay",
		})
	);
}
let UTRecorder = m(() =>
	Promise.all([
		import("./UTRecorder.19b9e4e6.js"),
		cssloader([
			"/static/latest/UTRecorder.0420d2af021d9053.css",
			"/static/latest/index.31bdd350cc85343e.css",
			"/static/latest/Input.2762c3e20d6520b6.css",
		]),
	]).then((e) => e[0])
);
function UTLazy() {
	let { ut: e } = useStore("ut"),
		t = e.stage;
	if (t === STAGE_HIDDEN) return;
	let [i] = l((e) => {
		"Sentry" in window &&
			"function" == typeof window.Sentry.captureException &&
			window.Sentry.captureException(e),
			console && console.error(e);
	});
	return i
		? null
		: o(u, { fallback: void 0, children: o(UTRecorder, this.props) });
}
let checkSingleTrack = (e) => !e || !e.tracks || 1 === e.tracks.length,
	hasPlusAccess = (e) => true || e.demo.enabled,
	toggleLayer = (e, t) =>
		e.layer.layer === t
			? e.dispatch("layer/hide")
			: e.dispatch("layer/show", t),
	ensureLicense = (e) => e.meta.allowedByLicense,
	ensureIsNotPanel = (e) => !e.route.isPanel,
	ensureIsNotDrums = (e) => {
		let { current: t } = e.store.get().part;
		return t && !t.usedDrums;
	},
	ensureSoloIsNotSingleTrack = (e) =>
		!checkSingleTrack(e.meta.current) || (toggleLayer(e, "solo_single"), !1),
	ensurePlusAccess = (e) => (t) =>
		!!hasPlusAccess(t) || (toggleLayer(t, e), !1),
	rememberSpeedUsage = () => (C(tempoUsedStorage, !0), !0),
	hideLayerIfAny = (e) => (e.layer.layer && e.dispatch("layer/hide"), !0);
class App extends c {
	componentDidMount() {
		let e = window.hotKeysManager;
		e.bindOne("esc", this.handleHide, { parallel: !0 }),
			e.bindMeta("cmd+p", this.handlePrint);
	}
	componentDidCatch(e, t) {
		try {
			"Sentry" in window &&
				"function" == typeof window.Sentry.captureException &&
				window.Sentry.captureException(e);
		} catch (e) {}
		console && console.error(e, t);
	}
	handleAction = (e, t) => (i) => {
		for (let t of (i.stopPropagation(), i.preventDefault(), e))
			if (!t(this.props)) return;
		t(i);
	};
	handlePlay = this.handleAction(
		[ensureLicense, ensureIsNotPanel, hideLayerIfAny],
		() => {
			let { store: e } = this.props,
				{ meta: t, player: i, user: n } = e.get();
			if (!t.isFailed && hasAudio(t, n)) {
				if (i.videoOpened)
					i.shouldPlay ? this.handlePauseVideo() : this.handlePlayVideo();
				else {
					let { dispatch: e } = this.props;
					togglePlay(e, i.audio),
						e("curiosity/google", {
							category: "Player",
							action: i.shouldPlay ? "Pressed pause" : "Pressed play",
						});
				}
			}
		}
	);
	handlePlayVideo = () => {
		let { player: e, dispatch: t } = this.props;
		t("player/resume", "buffering"), e.video.play(), togglePlay(t, e.audio, !0);
	};
	handlePauseVideo = () => {
		let { player: e, dispatch: t } = this.props;
		e.video.pause(), togglePlay(t, e.audio, !1);
	};
	handleMixer = this.handleAction([ensureLicense, ensureIsNotPanel], () => {
		let { store: e } = this.props,
			{ meta: t } = e.get();
		t.current && t.current.tracks && toggleLayer(this.props, "mixer");
	});
	handleSpeed = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			rememberSpeedUsage,
			ensurePlusAccess("plus_speed"),
		],
		() => {
			toggleLayer(this.props, "speed");
		}
	);
	handleIncreaseBpm = this.handleAction(
		[ensureLicense, ensureIsNotPanel, ensurePlusAccess("plus_speed")],
		() => {
			increaseBpm(this.props.store);
		}
	);
	handleChangeSpeed = (e) =>
		this.handleAction(
			[ensureLicense, ensureIsNotPanel, ensurePlusAccess("plus_speed")],
			() => {
				changeSpeed(this.props.store, e);
			}
		);
	handleDecreaseBpm = this.handleAction(
		[ensureLicense, ensureIsNotPanel, ensurePlusAccess("plus_speed")],
		() => {
			decreaseBpm(this.props.store);
		}
	);
	handlePitchshift = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			ensurePlusAccess("plus_pitchshift"),
			hideLayerIfAny,
		],
		() => {
			toggleLayer(this.props, "pitchshift");
		}
	);
	handleCountin = this.handleAction(
		[ensureLicense, ensureIsNotPanel, hideLayerIfAny],
		() => {
			toggleCountin(this.props.dispatch);
		}
	);
	handleMetronome = this.handleAction(
		[ensureLicense, ensureIsNotPanel, hideLayerIfAny],
		() => {
			this.props.player.isMetronome || toggleLayer(this.props, "metronome"),
				this.props.dispatch("player/toggleMetronome:init");
		}
	);
	handleSolo = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			ensureSoloIsNotSingleTrack,
			ensurePlusAccess("plus_solo"),
			hideLayerIfAny,
		],
		() => {
			let { store: e } = this.props,
				{ player: t } = e.get();
			changeType(e, "solo" === t.type ? "focus" : "solo");
		}
	);
	handleMute = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			ensurePlusAccess("plus_mute"),
			hideLayerIfAny,
		],
		() => {
			let { store: e } = this.props,
				{ player: t } = e.get();
			changeType(e, "mute" === t.type ? "focus" : "mute");
		}
	);
	handleLoop = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			ensurePlusAccess("plus_loop"),
			hideLayerIfAny,
		],
		() => toggleLoop(this.props.store)
	);
	handlePrint = this.handleAction(
		[
			ensureLicense,
			ensureIsNotPanel,
			ensurePlusAccess("plus_print"),
			hideLayerIfAny,
		],
		async () => {
			this.props.dispatch("player/togglePlay", !1),
				"chords" === this.props.route.page &&
					this.props.dispatch("curiosity/event", { event: "Printed chords" }),
				"tab" === this.props.route.page &&
					(await this.props.dispatch("print/enable")),
				setTimeout(() => {
					window.print(), this.props.dispatch("print/disable");
				}, 500);
		}
	);
	handleTabEditor = this.handleAction(
		[ensureLicense, ensureIsNotPanel, ensureIsNotDrums, hideLayerIfAny],
		() => {
			let { dispatch: e, layer: t, player: i } = this.props,
				n = "tab_editor" !== t.layer;
			n && (i.video.pause(), e("player/stopPlay")),
				0.05 > Math.random() &&
					e("curiosity/event", { event: "Pressed tab editor", opened: n }),
				e("screener/pressedEditor"),
				toggleLayer(this.props, "tab_editor");
		}
	);
	handleFingerings = this.handleAction(
		[ensureLicense, ensureIsNotPanel, hideLayerIfAny],
		() => {
			this.props.dispatch("fingerings/toggle");
		}
	);
	handleMinimize = () => hideLayerIfAny(this.props);
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
					chords: i,
					tags: n,
				} = this.props.store.get(),
				r = getContentUrl(e, t, i, n);
			this.props.dispatch("navigate", r);
		}
		if (this.props.layer.layer) {
			this.props.dispatch("layer/hide");
			return;
		}
	});
	render() {
		let {
				user: e,
				meta: t,
				chords: i,
				routeContent: n,
				device: r,
			} = this.props,
			a = !this.props.device.webview,
			l = hasPlusAccess(this.props),
			u = this.props.screen.isSmall,
			d = !t.loading && !!t.current,
			c = a && d && !u,
			p = c && can(e, b.USE_ADMIN_TOOLS),
			h = c && can(e, b.USE_TAB_EDITOR),
			g = a && !u && this.props.payment.showMigrationPopup,
			f = !l && this.props.curiosity.vpt10.count >= 10 && !u,
			m = !1,
			y = __default$H.app;
		if ("tab" === n.page) {
			y = l ? __default$H.appPlus : __default$H.appFree;
			let e = !t.isFailed && t.allowedByLicense;
			m = e && !l && r.isPhone;
		} else if ("chords" === n.page) {
			y = __default$H.appChords;
			let e = !i.isFailed;
			(m = e && !l && r.isPhone),
				this.props.device.webview && (y = __default$H.appChordsMinimalism);
		} else "tags" === n.page && (y = __default$H.appTags);
		return s(
			"div",
			{ className: y, id: "app" },
			a && s(StatusIndicator, null),
			a && s(Sidebar, { isSmallScreen: u }),
			a && s(ConsentManagerWrap, null),
			a && s(Screener, null),
			a && s(UTLazy, null),
			a &&
				("tab" === n.page || "chords" === n.page) &&
				u &&
				s(SmallScreenHeader, {
					isChords: "chords" === n.page,
					handleMixer: this.handleMixer,
				}),
			m && o(ShowroomHeader, null, "showroom-header"),
			s(AppHeader, {
				plusAccess: l,
				showFullUI: a,
				handleNotation: this.handleNotation,
			}),
			"tab" === n.page &&
				o(SuspenseWrap, {
					component: AppTab,
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
					handleIncreaseBpm: this.handleIncreaseBpm,
					handleDecreaseBpm: this.handleDecreaseBpm,
					handleFingerings: this.handleFingerings,
					handleChangeSpeed: this.handleChangeSpeed,
					handlePlayVideo: this.handlePlayVideo,
					handlePauseVideo: this.handlePauseVideo,
				}),
			"chords" === n.page &&
				o(SuspenseWrap, {
					component: AppChords,
					handlePrint: this.handlePrint,
				}),
			("tag" === n.page || "tags" === n.page) &&
				o(SuspenseWrap, { component: AppTags }),
			a && !l && s(Promo, null),
			a && c && s(AdminMenu, { songId: t.songId }),
			a && h && s(TabEditorAdminPanel$1, null),
			a && p && s(SoundControls, null),
			a && o(HideLayerOverlay, {}),
			a && g && s(MigrationPopup, null),
			a && f && s(SubscribeDialogPopup, null),
			this.props.isTestMode &&
				this.props.player.canPlay &&
				s(
					"div",
					{ id: "is-test-mode", className: __default$H.isTestMode },
					"TEST MODE"
				)
		);
	}
}
var App$1 = connect(
	App,
	"isTestMode",
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
let KEYBOARD_KEYS = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
	DIGITS_KEYS = Array.from("1234567890"),
	NUMPAD_KEYS = [
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
	KEYS = {
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
function verifyMeta(e) {
	let t = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
	return t || "cmd" !== e ? (t && "ctrl" === e ? "cmd" : e) : "ctrl";
}
function inFocus() {
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
class HotKeysManager {
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
			i = "function" == typeof t.global && t.global;
		if (t.global) {
			i(e);
			return;
		}
		let n = this.store.get().route.isPanel;
		if (t.parallel) {
			let i = "function" == typeof t.parallel && t.parallel;
			(n && inFocus()) || i(e);
		}
		if (n) {
			let i = "function" == typeof t.onPanelPopup && t.onPanelPopup,
				n = "function" == typeof t.onPanel && t.onPanel;
			t.onPanelPopup ? i(e) : t.onPanel && n(e);
		} else {
			let i = "function" == typeof t.onPopup && t.onPopup,
				n = "function" == typeof t.onTab && t.onTab;
			t.onPopup ? i(e) : t.onTab && n(e);
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
		let i = this.meta[e.keyCode];
		if (
			(e.altKey
				? (t = i.alt)
				: e.ctrlKey
				? (t = i.ctrl)
				: e.metaKey
				? (t = i.cmd)
				: e.shiftKey && (t = i.shift),
			t)
		) {
			if (e.repeat) {
				t.repeat && t.repeat(e);
				return;
			}
			let {
				route: { isPanel: i },
				layer: { layer: n },
			} = this.store.get();
			t.onPopup
				? t.onPopup(e)
				: t.onTab
				? i || null !== n || t.onTab(e)
				: t.global && t.global(e);
		}
	}
	bindMeta(e, t) {
		let i =
				arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: "global",
			n =
				arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			[a, s] = e.split("+");
		if (!("shift" === a || "ctrl" === a || "alt" === a || "cmd" === a)) {
			console.error("Please check your meta handler");
			return;
		}
		(this.bindSources[`${s}-${a}-${i}`] = n),
			(this.meta[KEYS[s]] = this.meta[KEYS[s]] || {}),
			(this.meta[KEYS[s]][verifyMeta(a)] =
				this.meta[KEYS[s]][verifyMeta(a)] || {}),
			(this.meta[KEYS[s]][verifyMeta(a)][i] = t),
			r && (this.meta[KEYS[s]][verifyMeta(a)].repeat = K(t, 400));
	}
	unbindMeta(e) {
		let t =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: "global",
			i =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
			[n, r] = e.split("+");
		if (!("shift" === n || "ctrl" === n || "alt" === n || "cmd" === n)) {
			console.error("Please check your meta handler");
			return;
		}
		let a = this.bindSources[`${r}-${n}-${t}`] === i;
		this.meta[KEYS[r]] && a && delete this.meta[KEYS[r]][verifyMeta(n)][t];
	}
	bindOne(e, t, i) {
		let n =
			arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
		(this.bindSources[`${e}-${Object.keys(i)[0]}`] = n),
			(this.handlers[KEYS[e]] = this.handlers[KEYS[e]] || {}),
			(this.handlers[KEYS[e]][Object.keys(i)[0]] = t);
	}
	unbindOne(e, t) {
		let i =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
			n = this.bindSources[`${e}-${Object.keys(t)[0]}`] === i;
		this.handlers[KEYS[e]] &&
			n &&
			delete this.handlers[KEYS[e]][Object.keys(t)[0]];
	}
	bind(e, t) {
		let i =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
		for (let n in e)
			Object.prototype.hasOwnProperty.call(e, n) &&
				("keyboard*" === n
					? KEYBOARD_KEYS.forEach((r) => this.bindOne(r, e[n], t, i))
					: "digits*" === n
					? DIGITS_KEYS.forEach((r) => this.bindOne(r, e[n], t, i))
					: "numpad*" === n
					? NUMPAD_KEYS.forEach((r) => this.bindOne(r, e[n], t, i))
					: this.bindOne(n, e[n], t, i));
	}
	unbind(e, t) {
		let i =
			arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
		for (let n in e)
			Object.prototype.hasOwnProperty.call(e, n) &&
				("keyboard*" === n
					? KEYBOARD_KEYS.forEach((e) => this.unbindOne(e, t, i))
					: "digits*" === n
					? DIGITS_KEYS.forEach((e) => this.unbindOne(e, t, i))
					: "numpad*" === n
					? NUMPAD_KEYS.forEach((e) => this.unbindOne(e, t, i))
					: this.unbindOne(n, t, i));
	}
}
async function init() {
	let e;
	await initPolyfills();
	let t = configureStore(
			JSON.parse(document.getElementById("state").innerHTML)
		),
		i = t.get().device,
		n = i.webview,
		r = "bot" === i.type;
	window.Sentry &&
		window.Sentry.onLoad(() => {
			let e = t.get(),
				i = { page: e.route.page };
			for (let t of Object.keys(e.experiments)) {
				let n = e.experiments[t];
				i["e_" + t] = `${n.segment} ${n.status}`;
			}
			window.Sentry.setTags(i);
		}),
		(window.hotKeysManager = new HotKeysManager(t));
	let a = () => {
			let e = getScreen(),
				i = getViewportDimensions();
			t.dispatch("screen/resize", { screen: e, viewport: i });
		},
		o = () => {
			clearTimeout(e), (e = setTimeout(a, 100));
		},
		l = window.visualViewport || window;
	l.addEventListener("resize", o),
		await Promise.resolve(),
		_(
			s(StoreContext.Provider, { value: t }, s(App$1, { store: t })),
			document.getElementById("root")
		),
		o(),
		await Promise.resolve(),
		kickMeta(t),
		kickChords(t);
	let u = t.get(),
		d = -1 !== window.location.search.indexOf("ut=on");
	if ((n || r || d || delay(() => loadScreener(t)), !n && !r)) {
		if (
			(delay(() => {
				let e = t.get();
				d && t.dispatch("ut/continue", e.query.utName),
					"mytabs" !== u.route.page &&
						e.user.isLoggedIn &&
						(e.myTabs.tabs?.length || loadTabs(t.dispatch)),
					"favorites" !== u.route.page &&
						e.user.isLoggedIn &&
						(e.favorites.favorites.length || loadFavorites(t.dispatch),
						loadSetlists(t.dispatch)),
					t.dispatch("curiosity/visitedPage");
			}),
			delay(() => {
				loadLearnMarkers(t.dispatch);
			}),
			delay(() => {
				"search" !== t.get().route.page &&
					t.dispatch("songs/filter", {
						pattern: "",
						filters: {
							instrument: INSTRUMENT_FILTER_ALL,
							tunings: { [INSTRUMENT_FILTER_ALL]: TUNING_FILTER_ALL },
							difficulty: DIFFICULTY_FILTER_NONE,
						},
					});
			}),
			"undefined" != typeof dataLayer &&
				-1 === String(window.location).indexOf("&ut=on"))
		) {
			let { hasPlus: e, isLoggedIn: i } = t.get().user;
			e = true;
			dataLayer.push({
				event: i ? (e ? "VISITED_PLUS" : "VISITED_FREE") : "VISITED_ANON",
			});
		}
		"off" === t.get().query.sw
			? unregisterServiceWorker()
			: registerServiceWorker();
		let e = () => t.dispatch("player/resume", "pagehide"),
			i = () => t.dispatch("player/suspend", "pagehide");
		window.addEventListener("pageshow", e, !1),
			window.addEventListener("resume", e, !1),
			window.addEventListener("pagehide", i, !1),
			window.addEventListener("freeze", i, !1),
			"mediaSession" in navigator &&
				(navigator.mediaSession.setActionHandler("play", () => {
					t.dispatch("player/togglePlay", !0);
				}),
				navigator.mediaSession.setActionHandler("pause", () => {
					t.dispatch("player/togglePlay", !1);
				}));
	}
	(u.isTestMode || "prod" !== window.__STAGE__) && (window.__store__ = t),
		checkMigrationAvailability(u) && t.dispatch("payment/popup:show"),
		(window.trackNotsyEvent = (e, i) =>
			"prod" === window.__STAGE__ &&
			t.dispatch("curiosity/event", { event: e, ...i }));
	try {
		if (t.get().device.isDesktop) {
			let e = async () => {
					let e = t.get();
					(true|| e.demo.enabled) &&
						(await t.dispatch("print/enable"));
				},
				i = async () => {
					await t.dispatch("print/disable");
				};
			if (window.matchMedia) {
				let t = window.matchMedia("print");
				t.addListener(function (t) {
					t.matches ? e() : i();
				});
			}
			window.addEventListener("beforeprint", e),
				window.addEventListener("afterprint", i);
		}
	} catch (e) {}
	try {
		if ("wakeLock" in navigator) {
			let e = null,
				t = async () => {
					try {
						e = await navigator.wakeLock.request("screen");
					} catch (e) {}
				};
			t();
			let i = () => {
				null !== e && "visible" === document.visibilityState && t();
			};
			document.addEventListener("visibilitychange", i);
		}
	} catch (e) {}
}
"undefined" == typeof window ||
	window.APP_INITIALISED ||
	((window.APP_INITIALISED = !0), init().catch((e) => console.error(e)));
export {
	changePitch as $,
	ApplicationLink as A,
	slower as B,
	CSSTransition as C,
	changeSpeed as D,
	changeBpm$1 as E,
	base as F,
	popupButtonLinkGreen as G,
	title$1 as H,
	IconDemoPopup as I,
	content as J,
	FormError as K,
	Link as L,
	validate as M,
	revisionSummaryValidation as N,
	apiRevisionMergeEdits as O,
	PathInstrument as P,
	seenEditor as Q,
	setSeenEditor as R,
	StoreContext as S,
	TransitionGroup as T,
	isIpad as U,
	DEFAULT_INSTRUMENT as V,
	Mixer$1 as W,
	DrumNotationHelp as X,
	NOTATION_LAYER as Y,
	findLayoutByTimestamp as Z,
	__default$x as _,
	Close as a,
	saveSearchPattern as a$,
	detectTuning as a0,
	suggestStandardTuning as a1,
	isGuitar as a2,
	isBassGuitar as a3,
	SPEED_NORMAL as a4,
	Alert as a5,
	hasAudio as a6,
	getMobileShowroomStub as a7,
	can as a8,
	firstMeasureLayout as a9,
	RHYTHM_TREMOLO_ADDITION as aA,
	RHYTHM_TUPLET_ADDITION as aB,
	tuningToStringArray as aC,
	PADDING as aD,
	getStringOnY as aE,
	CURSOR_WIDTH as aF,
	CURSOR_TOP_OFFSET as aG,
	CURSOR_BOTTOM_OFFSET as aH,
	LINE_PADDING as aI,
	LOOP_PADDING as aJ,
	lineLoopHeight as aK,
	findLayoutIndexByTimestamp as aL,
	loopRightTime as aM,
	delay as aN,
	isSmallPortrait as aO,
	findClosestBeat as aP,
	stringY as aQ,
	leftTime as aR,
	rightTime as aS,
	loopLeftTime as aT,
	firstLoopRightTime as aU,
	PLUS_ID as aV,
	FREE_ID as aW,
	getMetaTrack as aX,
	getInputValidationMessage as aY,
	headUpdate as aZ,
	getSeoInstrument as a_,
	isVisible as aa,
	__default$z as ab,
	ExtraLine as ac,
	__default$A as ad,
	getDrumStick as ae,
	DrumShape as af,
	firstRef as ag,
	lastRef as ah,
	margin as ai,
	NOTE_MARGIN_SLUR as aj,
	NOTE_MARGIN_TIE as ak,
	absoluteBeatX as al,
	NOTE_MARGIN_SLIDE as am,
	maxX as an,
	minX as ao,
	BEND_LEVEL_BASE as ap,
	NOTE_MARGIN_BEND as aq,
	BEND_PREBEND_Y1_OFFSET as ar,
	BEND_LEVEL_STEP as as,
	getLyricsX as at,
	INTERVAL_SIZE as au,
	doesSimpleChainedEffectSpanMultipleSlices as av,
	RHYTHM_STEP as aw,
	RHYTHM_STROKE_HEIGHT as ax,
	RHYTHM_HEIGHT as ay,
	lastMeasureLayout as az,
	__default$d as b,
	IconArrow as b$,
	isDifficultyFilterForbidden as b0,
	FILTER_INSTRUMENT_VALUES as b1,
	seoInstrumentUrl as b2,
	isAnyFilterEnabled as b3,
	TUNING_FILTER_ALL as b4,
	saveSearchInstrument as b5,
	INSTRUMENT_FILTER_ALL as b6,
	buttonGrey as b7,
	buttonRed as b8,
	tempoUsedStorage as b9,
	summaryValidation as bA,
	absolutize as bB,
	initAmplitude as bC,
	loadFaq as bD,
	recaptchaTokenizeAction as bE,
	normalizeProfile as bF,
	getNextLocationUrl as bG,
	passwordValidation as bH,
	loadScript as bI,
	termsValidation as bJ,
	apiAndroidPromo as bK,
	countries as bL,
	getPlanPriceTag as bM,
	toLocalDateString as bN,
	getApplicationLink as bO,
	useDropinPayments as bP,
	IconSubmit as bQ,
	passwordMatchValidator as bR,
	buttonBig as bS,
	greenHighlight as bT,
	orangeHighlight as bU,
	Gettext as bV,
	useLocale as bW,
	apiSubscribePlus as bX,
	apiActivateCoupon as bY,
	apiCancelPlus as bZ,
	detectFeatures as b_,
	INSTRUMENT_FILTER_DRUMS as ba,
	INSTRUMENT_FILTER_BASS as bb,
	INSTRUMENT_FILTER_GUITAR as bc,
	getTuningValues as bd,
	FILTER_DIFFICULTY_VALUES as be,
	capitalize as bf,
	isTuningFilterForbidden as bg,
	getUrl as bh,
	DifficultyIndicator as bi,
	formatFiltersQuery as bj,
	IconFavorite as bk,
	sortAndFilterByDifficulty as bl,
	filterByInstrument as bm,
	filterByTuning as bn,
	isDrums$1 as bo,
	getArtistUrl as bp,
	AbortController$1 as bq,
	getFilesValidator as br,
	notEmptyValidation as bs,
	uploadSong as bt,
	getMainUrl as bu,
	popupButtonBlue as bv,
	loadTextpage as bw,
	useRecaptcha as bx,
	nameValidation as by,
	emailValidation as bz,
	__default$H as c,
	__default$5 as c0,
	readCookie as c1,
	setCookie as c2,
	buttonLink$1 as c3,
	STAGE_HIDDEN as c4,
	STAGE_INSTRUCTIONS as c5,
	STAGE_SURVEY as c6,
	STAGE_FAREWELL as c7,
	STAGE_QUESTIONS as c8,
	STAGE_FAREWELL_NOT_CHOSEN as c9,
	STAGE_START as ca,
	cancelIdleScrenerTimer as cb,
	STAGE_FEEDBACK_START as cc,
	STAGE_EMAIL_REQUEST as cd,
	STAGE_RESTART as ce,
	STAGE_INTRO as cf,
	__default$3 as cg,
	uploadRevision as ch,
	validateRevisionReport as ci,
	relativeSongAdminToolsUrl as cj,
	relativeAdminLink as ck,
	isIos as d,
	useNotsy as e,
	__default$g as f,
	Spinner as g,
	__default$G as h,
	isAndroid as i,
	useGettext as j,
	__default$D as k,
	buttonGreen as l,
	buttonSmall as m,
	getCanonicalUrl as n,
	getChordsUrl as o,
	placeholder as p,
	getTagUrl as q,
	pretty as r,
	getTagsUrl as s,
	connect as t,
	useStore as u,
	currentTempo as v,
	speedToPosition as w,
	positionToSpeed as x,
	normalizeSpeed as y,
	faster as z,
};
