let e, t, i;
import {
	P as o,
	w as s,
	x as a,
	y as n,
	z as r,
	B as l,
	E as p,
	F as u,
	G as h,
	H as d,
	J as c,
	i as m,
	A as y,
	K as f,
	u as g,
	M as v,
	N as b,
	L as x,
	k as w,
	d as C,
	O as k,
	Q as L,
	T as M,
	C as S,
	R as $,
	U as T,
	_ as N,
	V as B,
	W as P,
	X as E,
	Y as z,
	Z as I,
	$ as D,
	a0 as A,
	a1 as j,
	b as F,
	a2 as R,
	a3 as X,
	a4 as V,
	a5 as O,
	a6 as q,
	a7 as _,
	p as H,
	a8 as G,
	a9 as U,
	aa as W,
	ab as Y,
	ac as K,
	ad as Q,
	ae as Z,
	af as J,
	ag as ee,
	ah as et,
	ai as ei,
	aj as eo,
	ak as es,
	al as ea,
	am as en,
	an as er,
	ao as el,
	ap as ep,
	aq as eu,
	ar as eh,
	as as ed,
	at as ec,
	au as em,
	av as ey,
	aw as ef,
	ax as eg,
	ay as ev,
	az as eb,
	aA as ex,
	aB as ew,
	aC as eC,
	aD as ek,
	aE as eL,
	aF as eM,
	aG as eS,
	aH as e$,
	aI as eT,
	aJ as eN,
	aK as eB,
	aL as eP,
	aM as eE,
	aN as ez,
	aO as eI,
	aP as eD,
	aQ as eA,
	aR as ej,
	aS as eF,
	aT as eR,
	aU as eX,
	aV as eV,
	aW as eO,
	aX as eq,
	aY as e_,
	aZ as eH,
	a_ as eG,
	c as eU,
} from "./index.9a48cd28.js";
import {
	d as eW,
	a as eY,
	T as eK,
	w as eQ,
	_ as eZ,
	f as eJ,
	o as e1,
	c as e0,
	p as e2,
	h as e5,
	F as e3,
} from "./preact.df92b1fd.js";
import {
	a as e4,
	b as e7,
	_ as e8,
	d as e6,
	F as e9,
	P as te,
	S as tt,
	e as ti,
	C as to,
} from "./Capo.c3789336.js";
import { g as ts, a as ta } from "./gplay.79326319.js";
import {
	N as tn,
	a as tr,
	A as tl,
	L as tp,
	S as tu,
} from "./AppFooter.07d15197.js";
import { S as th } from "./SWW.2d145539.js";
class td extends eW {
	render() {
		let {
				onClick: e,
				pressed: t,
				title: i,
				titlePressed: s,
				name: a,
				instrumentId: n,
			} = this.props,
			r = "mixer-title-id";
		return eY(
			"button",
			{
				className: t ? e4.active : e4.button,
				onClick: e,
				id: "control-mixer",
				"aria-haspopup": !0,
				"aria-pressed": t,
			},
			eY(
				"svg",
				{
					className: e4.icon,
					width: 55,
					height: 55,
					viewBox: "-4 -4 55 55",
					role: "img",
					"aria-labelledby": r,
				},
				eY("title", { id: r }, t && s ? s : i),
				eY("circle", { className: e4.tag, cx: "7", cy: "39", r: "6" }),
				eY("circle", {
					className: e4.circle,
					cx: "22.5",
					cy: "22.5",
					r: "22.5",
					filter: "url(#svg_shadow)",
				}),
				eY(o, {
					className: e4.shape,
					instrumentId: n,
					name: a,
					transform: "translate(9 9)",
				})
			)
		);
	}
}
let tc = "tl2yt",
	tm = "tl35",
	ty = "tl276",
	tf = "tl276 tl1lq",
	tg = "tl1aa",
	tv = "tl1aa tl294",
	tb = "tl1aa tl1gg",
	tx = "tl1aa tl1ia",
	tw = "tl1aa tl1u0",
	tC = "tl1aa tl2uy",
	tk = "tl1aa tl2o2",
	tL = "tl1aa tly0",
	tM = "tl24a",
	tS = "tl2wd",
	t$ = "tl2wd tlca",
	tT = "tli0",
	tN = "tl11g",
	tB = "tl1sq",
	tP = "tl2b5",
	tE = "tl34n",
	tz = "tl33",
	tI = {
		speed: "tl2yt",
		pane: "tl35",
		bpm: "tl276",
		bpmOriginal: "tl276 tl1lq",
		caption: "tl1aa",
		caption25: "tl1aa tl294",
		caption50: "tl1aa tl1gg",
		caption75: "tl1aa tl1ia",
		caption100: "tl1aa tl1u0",
		caption125: "tl1aa tl2uy",
		caption150: "tl1aa tl2o2",
		caption175: "tl1aa tly0",
		ruler: "tl24a",
		button: "tl2wd",
		buttonAlt: "tl2wd tlca",
		handle: "tli0",
		tempo: "tl11g",
		exitActive: "tl1sq",
		enterActive: "tl2b5",
		enter: "tl34n",
		exit: "tl33",
	};
class tD extends eW {
	constructor(e) {
		super(e);
		let t = e.player.speed,
			i = a(t, e.player.tempo);
		(this.state = {
			speed: t,
			tempo: i,
			position: n(t),
			active: !1,
			deltaLeftX: 0,
			deltaRightX: 0,
			rulerX: null,
			rulerY: null,
			rulerW: null,
			mirrorSpeed: 0,
			mirrorTempo: 0,
		}),
			(this.lastTouch = null),
			(this.keyMap = {
				enter: this.hidePopup,
				left: this.handleSlower,
				down: this.handleSlower,
				up: this.handleFaster,
				right: this.handleFaster,
				"+": this.bpmPlus,
				"-": this.bpmMinus,
			}),
			(this.onTouchMoveTickId = void 0);
	}
	hidePopup = (e) => {
		e.preventDefault(), this.props.dispatch("layer/hide");
	};
	static getDerivedStateFromProps(e, t) {
		if (t.mirrorSpeed !== e.player.speed || t.mirrorTempo !== e.player.tempo) {
			let i = e.player.speed,
				o = a(i, e.player.tempo);
			return {
				speed: i,
				tempo: o,
				position: n(i),
				mirrorSpeed: e.player.speed,
				mirrorTempo: e.player.tempo,
			};
		}
		return null;
	}
	componentDidMount() {
		let e = this.wrap;
		e &&
			(e.addEventListener("touchstart", this.onTouchStart, window.PASSIVE),
			e.addEventListener("mousedown", this.onTouchStart)),
			window.addEventListener("resize", this.onResize),
			window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
		let e = this.wrap;
		e &&
			(e.removeEventListener("touchstart", this.onTouchStart),
			e.removeEventListener("mousedown", this.onTouchStart)),
			document.removeEventListener("touchmove", this.onTouchMove),
			document.removeEventListener("mousemove", this.onTouchMove),
			document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd),
			window.removeEventListener("resize", this.onResize),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
	}
	getPageCoordinates = () => {
		let { body: e, documentElement: t } = document,
			i = this.ruler;
		if (i && e && t) {
			let o = i.getBoundingClientRect(),
				s = o.left + e.scrollLeft + t.scrollLeft,
				a = o.top + e.scrollTop + t.scrollTop,
				n = o.width;
			return { rulerX: s, rulerY: a, rulerW: n };
		}
		throw Error("Wrong Usage");
	};
	onResize = r(() => this.setState(this.getPageCoordinates), 250);
	getNewPosition(e) {
		let t = l((100 * e.x) / e.w);
		return p(t, this.props.player.tempo);
	}
	handleFaster = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => u(e.speed, e.tempo, e.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	handleSlower = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => h(e.speed, e.tempo, e.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	dispatchSpeed = (e) => {
		d(this.props.store, e);
	};
	getTouchPoint(e) {
		let { rulerX: t, rulerY: i, rulerW: o } = this.state;
		if (null === t || null === i || null === o) {
			let s = this.getPageCoordinates();
			this.setState(s), (t = s.rulerX), (i = s.rulerY), (o = s.rulerW);
		}
		let a = e.changedTouches ? e.changedTouches[0] : e;
		return { x: Math.max(Math.min(a.pageX - t, o), 0), w: o, y: a.pageY - i };
	}
	onTouchStart = (e) => {
		let t = this.getTouchPoint(e);
		if (((this.lastTouch = t), e.preventDefault(), !this.onTouchMoveTickId)) {
			let i = window.requestAnimationFrame;
			this.onTouchMoveTickId = i(this.onTouchMoveTick);
		}
		document.addEventListener("touchmove", this.onTouchMove, window.PASIVE),
			document.addEventListener("mousemove", this.onTouchMove),
			document.addEventListener("touchend", this.onTouchEnd),
			document.addEventListener("mouseup", this.onTouchEnd);
	};
	onTouchMove = (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			(this.lastTouch = this.getTouchPoint(e));
	};
	onTouchMoveTick = () => {
		let e = this.lastTouch;
		if (e) {
			let t = this.getNewPosition(e);
			(this.state.tempo.bpm !== t.tempo.bpm ||
				this.state.tempo.type !== t.tempo.type ||
				this.state.speed !== t.speed ||
				this.state.position !== t.position) &&
				this.setState(t),
				(this.lastTouch = null);
		}
		let i = window.requestAnimationFrame;
		this.onTouchMoveTickId = i(this.onTouchMoveTick);
	};
	onTouchEnd = () => {
		document.removeEventListener("touchmove", this.onTouchMove),
			document.removeEventListener("mousemove", this.onTouchMove),
			document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
			(this.onTouchMoveTickId = void 0);
		let e = this.state.speed,
			t = this.lastTouch;
		if (t) {
			let i = this.getNewPosition(t);
			this.setState(i), (e = i.speed);
		}
		this.dispatchSpeed(e);
	};
	refWrap = (e) => {
		this.wrap = e;
	};
	refRuler = (e) => {
		this.ruler = e;
	};
	changeBpmState = (e) => {
		this.setState(
			(t) => c(t.speed, t.tempo, t.position, this.props.player.tempo, e),
			() => {
				this.dispatchSpeed(this.state.speed);
			}
		);
	};
	bpmPlus = () => {
		this.changeBpmState(1);
	};
	bpmPlusKeyPress = (e) => {
		13 === e.keyCode &&
			(e.preventDefault(), e.stopPropagation(), this.changeBpmState(1));
	};
	bpmMinus = () => {
		this.changeBpmState(-1);
	};
	bpmMinusPress = (e) => {
		13 === e.keyCode &&
			(e.preventDefault(), e.stopPropagation(), this.changeBpmState(-1));
	};
	render() {
		let e = 100 === this.state.speed ? tI.buttonAlt : tI.button,
			t = 100 === this.state.speed ? tI.bpmOriginal : tI.bpm;
		return eY(
			"div",
			{ className: tI.speed, role: "dialog", "aria-label": "Speed" },
			eY(
				"div",
				{ className: t },
				eY(
					"button",
					{
						onClick: this.bpmMinus,
						onKeyDown: this.bpmMinusPress,
						title: "Alt+A",
					},
					eY(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 2" },
						eY("rect", {
							y: "2",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 2)",
						})
					)
				),
				eY(
					"span",
					{ className: tI.speedLabel, "aria-label": "Tempo" },
					this.state.tempo.bpm,
					" bpm"
				),
				eY(
					"button",
					{
						onClick: this.bpmPlus,
						onKeyDown: this.bpmPlusKeyPress,
						title: "Alt+S",
					},
					eY(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 12" },
						eY("rect", { x: "5", width: "2", height: "12" }),
						eY("rect", {
							y: "7",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 7)",
						})
					)
				)
			),
			eY(
				"div",
				{
					className: tI.pane,
					title: "You can use arrow keys",
					ref: this.refWrap,
				},
				eY("label", { className: tI.caption25 }, eY("span", null, "25%")),
				eY("label", { className: tI.caption50 }, eY("span", null, "50%")),
				eY("label", { className: tI.caption75 }, eY("span", null, "75%")),
				eY("label", { className: tI.caption100 }, eY("span", null, "100%")),
				eY("label", { className: tI.caption125 }, eY("span", null, "125%")),
				eY("label", { className: tI.caption150 }, eY("span", null, "150%")),
				eY("label", { className: tI.caption175 }, eY("span", null, "175%")),
				eY(
					"div",
					{ className: tI.ruler, ref: this.refRuler },
					eY(
						"div",
						{
							className: tI.handle,
							style: { left: this.state.position + "%" },
							role: "slider",
							"aria-valuenow": this.state.speed,
							"aria-valuemin": 25,
							"aria-valuemax": 175,
							"aria-valuetext": this.state.tempo.bpm + " bpm",
						},
						eY("div", { className: e })
					)
				)
			)
		);
	}
}
var tA = s(tD, "player");
let tj = "Cvj28d",
	tF = "Cvj28d Cvj2ff",
	tR = "Cvj28d Cvj2ff Cvj350",
	tX = "Cvj28d Cvj2ff Cvj248",
	tV = "Cvj28d Cvj1dp",
	tO = "Cvjo4",
	tq = "Cvj23g",
	t_ = "Cvj1mq",
	tH = "Cvj28d Cvj2k8",
	tG = {
		popup: "Cvj28d",
		popupRight: "Cvj28d Cvj2ff",
		popupMobile: "Cvj28d Cvj2ff Cvj350",
		popupMobileLow: "Cvj28d Cvj2ff Cvj248",
		popupLeftTop: "Cvj28d Cvj1dp",
		link: "Cvjo4",
		title: "Cvj23g",
		text: "Cvj1mq",
		popupTop: "Cvj28d Cvj2k8",
	};
function tU(e) {
	let {
			title: t,
			mobile: i,
			low: o,
			leftOffset: s,
			topOffset: a,
			horizontal: n,
			device: r,
			feature: l,
		} = e,
		p = tG.popupRight;
	i ? (p = o ? tG.popupMobileLow : tG.popupMobile) : n && (p = tG.popupTop);
	let u = {};
	void 0 !== s &&
		void 0 !== a &&
		((u = { top: `${a}px`, left: `${s}px` }), (p = tG.popupLeftTop));
	let h = "subscribe in the app";
	m(r.os) && (h = "buy in the app");
	let d = `${t} ${h}`,
		c = m(r.os);
	return eY(
		"div",
		{ role: "dialog", className: p, style: u },
		(function (e, t, i) {
			for (
				var o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3;
				a < o;
				a++
			)
				s[a - 3] = arguments[a];
			return eY(
				y,
				{
					source: "popup",
					attrs: { className: e, "aria-label": t },
					eventProperties: {
						Via: "feature popup",
						"App store": i ? "Google Play" : "App Store",
						Feature: l,
					},
				},
				s
			);
		})(
			tG.link,
			d,
			c,
			eY(
				"div",
				null,
				eY("div", { className: tG.title }, t),
				eY("div", { className: tG.text }, h)
			),
			c
				? eY("img", { src: ts, width: 160, height: 47, alt: "Google Play" })
				: eY("img", { src: ta, width: 160, height: 53, alt: "AppStore" })
		)
	);
}
function tW() {
	return eY(
		"svg",
		{ width: 54, height: 54, viewBox: "0 0 54 54" },
		eY("path", {
			d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
			fill: "#F1452D",
		}),
		eY("path", {
			d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
			fill: "#FDE3DF",
		})
	);
}
let tY = f + " B0fs1",
	tK = f + " B0f277",
	tQ = f + " B0f2nd",
	tZ = "B0f1ah",
	tJ = "B0fqg",
	t1 = "B0fqg B0f176",
	t0 = "B0f102",
	t2 = "B0f2sz",
	t5 = {
		horizontalPopup: f + " B0fs1",
		verticalPopup: f + " B0f277",
		verticalLeftPopup: f + " B0f2nd",
		link: "B0f1ah",
		basewrapper: "B0fqg",
		wrapper: "B0fqg B0f176",
		text: "B0f102",
		linkText: "B0f2sz",
	};
function t3(e, t) {
	return e ? t5.horizontalPopup : t ? t5.verticalLeftPopup : t5.verticalPopup;
}
function t4(e) {
	let { title: t, left: i, horizontal: o } = e,
		{ dispatch: s } = g(),
		a = eK(() => {
			s("layer/hide");
		}, [s]);
	return eY(
		"div",
		{ className: t3(o, i), role: "dialog" },
		eY(
			"div",
			{
				className: t5.link,
				"aria-label": `${t} mode has no effect`,
				onClick: a,
			},
			eY("span", { className: t5.wrapper }, eY(tW, null)),
			eY(
				"div",
				{ className: t5.text },
				"This song has only one",
				eY("br", null),
				`instrument track. ${t}`,
				eY("br", null),
				"mode has no effect."
			)
		)
	);
}
let t7 = "Cv41lu",
	t8 = "Cv42y1",
	t6 = "Cv4221",
	t9 = "Cv41lu Cv41ex",
	ie = "Cv416g",
	it = "Cv47k",
	ii = "Cv426b",
	io = "Cv41uq",
	is = "Cv474",
	ia = "Cv42hl",
	ir = "Cv42hl Cv42b3",
	il = "Cv42hl Cv431z",
	ip = "Cv42hl Cv422p",
	iu = "Cv42hl Cv41go",
	ih = "Cv42e1",
	id = "Cv42e1 Cv41vz",
	ic = "Cv42e1 Cv4199",
	im = "Cv42e1 Cv4oj",
	iy = "Cv42ut",
	ig = "Cv42ut Cv428v",
	iv = {
		popup: "Cv41lu",
		mainContainer: "Cv42y1",
		divider: "Cv4221",
		popupExtended: "Cv41lu Cv41ex",
		helpContainer: "Cv416g",
		part: "Cv47k",
		navigation: "Cv426b",
		digits: "Cv41uq",
		rect: "Cv474",
		save: "Cv42hl",
		notLoggedIn: "Cv42hl Cv42b3",
		unset: "Cv42hl Cv431z",
		saving: "Cv42hl Cv422p",
		saved: "Cv42hl Cv41go",
		hint: "Cv42e1",
		hint0: "Cv42e1 Cv41vz",
		hint1: "Cv42e1 Cv4199",
		hint2: "Cv42e1 Cv4oj",
		helpTag: "Cv42ut",
		helpTagActive: "Cv42ut Cv428v",
	};
class ib extends eW {
	helpToggle = () => {
		let { helpActive: e } = this.state;
		this.setState({ helpActive: !e });
	};
	getActiveHint = (e, t) => {
		let { dispatch: i } = this.props;
		switch (e) {
			case 0:
				if (t)
					return [
						"Use ",
						eY(
							"span",
							{
								onClick(e) {
									e.preventDefault(),
										i("curiosity/event", {
											event: "Clicked a tab editor popup link",
											action: "Revisions",
										}),
										i("layer/show", "revisions");
								},
							},
							"revisons"
						),
						" for complex changes",
					];
				return [
					eY(
						"a",
						{
							href: "/a/wa/signin",
							onClick(e) {
								e.preventDefault(),
									i("curiosity/event", {
										event: "Clicked a tab editor popup link",
										action: "Sign In",
									}),
									i("navigate", "/a/wa/signin");
							},
						},
						"Sign up"
					),
					" to save changes for free.",
				];
			case 1:
				return "Tab corrections are private.";
			case 2:
				return "Corrections won’t affect the sound.";
			default:
				return null;
		}
	};
	onSave = (e) => {
		let { dispatch: t } = this.props;
		e.preventDefault(),
			t("curiosity/event", {
				event: "Clicked a tab editor popup link",
				action: "SignInButton",
			}),
			t("navigate", "/a/wa/signin");
	};
	constructor() {
		super();
		let e = v();
		e || b(),
			(this.state = { helpActive: !e, hintActiveId: 0, firstHintShowed: !1 });
	}
	componentDidMount() {
		this.hintTimer = setInterval(() => {
			let { hintActiveId: e } = this.state;
			this.setState({ hintActiveId: e < 2 ? e + 1 : 0, firstHintShowed: !0 });
		}, 7e3);
	}
	componentWillUnmount() {
		clearInterval(this.hintTimer);
	}
	render() {
		let { tabEditor: e, user: t } = this.props,
			{ helpActive: i, hintActiveId: o, firstHintShowed: s } = this.state,
			a = iv.unset,
			n = "Save",
			r = iv.hint;
		return (
			s && (r = iv[`hint${o}`]),
			t.isLoggedIn
				? "changes" === e.status || "saving" === e.status
					? ((a = iv.saving), (n = "Saving"))
					: "saved" === e.status && ((a = iv.saved), (n = "Saved"))
				: ((a = iv.notLoggedIn), (n = "Sign in & Save")),
			eY(
				"div",
				{ className: i ? iv.popupExtended : iv.popup },
				eY(
					"div",
					{
						className: i ? iv.helpTagActive : iv.helpTag,
						onClick: this.helpToggle,
					},
					eY("span", null, "?")
				),
				i &&
					eY(
						"div",
						{ className: iv.helpContainer },
						eY(
							"div",
							{ className: iv.part },
							eY("p", null, "Choose a note to edit with your mouse.")
						),
						eY(
							"div",
							{ className: iv.part },
							eY("p", null, "Navigate with"),
							eY(
								"svg",
								{ className: iv.navigation, width: 41, height: 27 },
								eY("rect", { x: 14 }),
								eY("rect", { x: 14, y: 14 }),
								eY("rect", { x: 28, y: 14 }),
								eY("rect", { y: 14 }),
								eY("path", { d: "M24 19.5H17L20.5 23.5L24 19.5Z" }),
								eY("path", { d: "M33 17V24L37 20.5L33 17Z" }),
								eY("path", { d: "M8 17V24L4 20.5L8 17Z" }),
								eY("path", { d: "M24 9H17L20.5 5L24 9Z" })
							)
						),
						eY(
							"div",
							{ className: iv.part },
							eY("p", null, "Edit with"),
							eY(
								"svg",
								{ className: iv.digits, width: 37, height: 13 },
								eY("rect", { className: iv.rect, x: 24 }),
								eY("rect", { className: iv.rect }),
								eY("rect", { x: 15, y: 6, height: 1, width: 7 }),
								eY("text", { x: 4, y: 10 }, 0),
								eY("text", { x: 28, y: 10 }, 9)
							)
						)
					),
				eY(
					"div",
					{ className: iv.mainContainer },
					eY("h3", {}, "TAB corrector"),
					eY(
						"button",
						{ className: a, onClick: t.isLoggedIn ? void 0 : this.onSave },
						eY("span", null, n)
					),
					eY("div", { className: iv.divider }),
					eY(
						"p",
						{ className: r, key: `hint${o}` },
						this.getActiveHint(o, t.isLoggedIn)
					)
				)
			)
		);
	}
}
var ix = s(ib, "tabEditor", "user"),
	iw = "/static/media/hand.9a7dcf24.svg";
let iC = "Cjoe6",
	ik = "Cjoe6 Cjo2q1",
	iL = "Cjo186",
	iM = "Cjo1a2",
	iS = "Cjoi2",
	i$ = "Cjo1pw",
	iT = {
		popup: "Cjoe6",
		popupWarning: "Cjoe6 Cjo2q1",
		warning: "Cjo186",
		hint: "Cjo1a2",
		helpTag: "Cjoi2",
		beta: "Cjo1pw",
	};
function iN(e) {
	let { dispatch: t } = g();
	if ("In Progress" === e.status || "Error" === e.status)
		return eY(
			"div",
			{ className: iT.popupWarning },
			eY(
				"p",
				{ className: iT.warning },
				"In Progress" === e.status &&
					"Seems like fingerings generation for this track is in progress right now. Try again later.",
				"Error" === e.status &&
					"Failed to generate fingerings. We are working on a fix."
			)
		);
	let i = eK(
		() =>
			t("curiosity/event", { event: "Clicked open Beta fingerings article" }),
		[t]
	);
	return eY(
		"div",
		{ className: iT.popup },
		eY(
			x,
			{ to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: i },
			eY("div", { className: iT.helpTag }, eY("span", null, "?"))
		),
		eY("p", { className: iT.hint }, "Left hand"),
		eY("img", { src: iw, width: 76.6, height: 100.1, alt: "Fingerging hint" }),
		eY("span", { className: iT.beta }, "beta")
	);
}
var iB = "/static/media/voice.eeccc28e.svg";
let iP = "C0w33s",
	iE = "C0w3a",
	iz = "C0w1ij",
	iI = "C0w3a C0w13m",
	iD = "C0w3a C0w2bp",
	iA = "C0wz2",
	ij = {
		popup: "C0w33s",
		button: "C0w3a",
		path: "C0w1ij",
		activeButton: "C0w3a C0w13m",
		disabledButton: "C0w3a C0w2bp",
		spacer: "C0wz2",
	};
class iF extends eW {
	render() {
		let { dispatch: e } = this.props,
			{ metronomeType: t, voiceMetronomeAvailable: i } = this.props.player,
			o = "regular" === t ? ij.activeButton : ij.button,
			s = {};
		return (
			i
				? ((s.className = "voice" === t ? ij.activeButton : ij.button),
				  (s.onClick = () => e("player/changeMetronome:init", "voice")))
				: ((s.className = ij.disabledButton),
				  (s.disabled = !0),
				  (s.title = "Voice metronome is unavailable on this song")),
			eY(
				"div",
				{ className: ij.popup },
				eY(
					"button",
					{
						className: o,
						onClick: () => e("player/changeMetronome:init", "regular"),
					},
					eY(
						"svg",
						{ width: 34, height: 32, viewBox: "-6 0 26 20" },
						eY(
							"defs",
							null,
							eY(
								"filter",
								{
									id: "shadow_metro",
									x: "-10",
									y: "-10",
									width: "70",
									height: "80",
									filterUnits: "userSpaceOnUse",
									colorInterpolationFilters: "sRGB",
								},
								eY("feFlood", {
									floodOpacity: "0",
									result: "BackgroundImageFix",
								}),
								eY("feColorMatrix", {
									in: "SourceAlpha",
									type: "matrix",
									values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
									result: "hardAlpha",
								}),
								eY("feOffset", { dy: "2" }),
								eY("feGaussianBlur", { stdDeviation: "6" }),
								eY("feColorMatrix", {
									type: "matrix",
									values:
										"0 0 0 0 0.533333 0 0 0 0 0.901961 0 0 0 0 0 0 0 0 0.75 0",
								}),
								eY("feBlend", {
									mode: "normal",
									in2: "BackgroundImageFix",
									result: "effect1_dropShadow_4343_1308",
								}),
								eY("feBlend", {
									mode: "normal",
									in: "SourceGraphic",
									in2: "effect_shadow_metro",
									result: "shape",
								})
							)
						),
						eY("path", { d: e7 })
					),
					eY("p", null, "tick tock")
				),
				eY("div", { className: ij.spacer }),
				eY(
					"button",
					s,
					eY(
						"svg",
						{ width: 34, height: 32, viewBox: "0 0 34 28" },
						eY("use", { xlinkHref: `${iB}#icon`, className: ij.path })
					),
					eY("p", null, "one two")
				)
			)
		);
	}
}
var iR = s(iF, "player"),
	iX = {
		translations: {
			"": {
				"Generate guitar fingerings (G)": [""],
				"Hide drum notation": [""],
				"Hide tracks (T)": [""],
				"Loop Mode": [""],
				"Mute current track (M)": [""],
				"Mute Mode": [""],
				"Open speed panel (S). Change tempo: (Alt+1–7) for 25%–175%, (Alt+S/A) for 1 bpm change":
					[""],
				"Pause (Space)": [""],
				"Play (Space)": [""],
				"Play current track solo (F)": [""],
				"Play focus mix of all tracks (F)": [""],
				Printing: [""],
				"Show drum notation": [""],
				"Show tracks (T)": [""],
				Solo: [""],
				"Solo Mode": [""],
				"Tempo Control": [""],
				"Turn count-in mode off (C)": [""],
				"Turn count-in mode on (C)": [""],
				"Turn fingerings off (G)": [""],
				"Turn loop mode off (L)": [""],
				"Turn loop mode on (L)": [""],
				"Turn metronome off (N)": [""],
				"Turn metronome on (N)": [""],
				"Turn tab corrector off (E)": [""],
				"Turn tab corrector on (E)": [""],
				"Unmute current track (M)": [""],
			},
		},
		language: "fr",
		pluralForms: "nplurals=2; plural=(n > 1);",
	};
let iV = { animationStyles: N };
class iO extends eW {
	render() {
		let { gettext: e } = w(iX),
			{
				device: t,
				plusAccess: i,
				layer: o,
				tadEditorWarning: s,
				speed: a,
				fingeringsEnabled: n,
				fingeringsActive: r,
				fingeringsStatus: l,
				usedDrums: p,
			} = this.props,
			u = m(t.os) || C(t.os) || k(t),
			h = "mixer" === o,
			d = "speed" === o,
			c = o === B,
			y = "tab_editor" === o,
			f = "Loading" === l,
			g =
				this.props.isMetronome &&
				!["mixer", "plus_mute", "tab_editor", "plus_print"].includes(o),
			v = "solo" === this.props.type,
			b = "mute" === this.props.type,
			x = this.props.loop,
			N = this.props.isCountin,
			P = this.props.isMetronome,
			E = `${Math.round(a)}%`,
			z = !i,
			I = !i,
			D = e8.panePlus2;
		return (
			p ? (D = e8.panePlus2Secondary) : n && (D = e8.panePlus3),
			eY(
				"aside",
				{ id: "controls", className: D, "data-controls": "tablature" },
				eY("div", { className: e8.handler }),
				eY(
					"div",
					{ className: e8.centerGroup },
					eY(
						"div",
						{ className: e8.item },
						eY(e6, {
							shouldPlay: this.props.shouldPlay,
							canPlay: this.props.canPlay,
							onClick: this.props.handlePlay,
							title: e("Play (Space)"),
							titlePressed: e("Pause (Space)"),
						})
					),
					eY(
						"div",
						{ className: e8.item, id: "mixer-button" },
						eY(td, {
							pressed: h,
							onClick: this.props.handleMixer,
							title: e("Show tracks (T)"),
							titlePressed: e("Hide tracks (T)"),
							instrumentId: this.props.track
								? this.props.track.instrumentId
								: L,
							name: this.props.track ? this.props.track.name : "",
						}),
						eY(M, null, h && eY(S, iV, eY($, null)))
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `speed ${d}`,
							icon: "speed",
							text: E,
							pressed: d,
							onClick: this.props.handleSpeed,
							title: e(
								"Open speed panel (S). Change tempo: (Alt+1–7) for 25%–175%, (Alt+S/A) for 1 bpm change"
							),
							hasPopup: !0,
							lock: I,
						}),
						eY(
							M,
							null,
							"plus_speed" === o &&
								eY(
									S,
									{ ...iV, key: "popup" },
									u
										? eY(tU, {
												title: e("Tempo Control"),
												device: t,
												horizontal: !0,
												feature: "slowdown",
										  })
										: eY(te, {
												title: e("Tempo Control"),
												horizontal: !0,
												classPrefix: "speed",
										  })
								),
							d && eY(S, { ...iV, key: "layer" }, eY(tA, null))
						)
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `loop ${x}`,
							icon: "loop",
							pressed: x,
							onClick: this.props.handleLoop,
							title: e("Turn loop mode on (L)"),
							titlePressed: e("Turn loop mode off (L)"),
							hasPopup: z,
							lock: I,
						}),
						eY(
							M,
							null,
							"plus_loop" === o &&
								eY(
									S,
									iV,
									u
										? eY(tU, {
												title: e("Loop Mode"),
												device: t,
												horizontal: !0,
												feature: "loop",
										  })
										: eY(te, {
												title: e("Loop Mode"),
												horizontal: !0,
												classPrefix: "loop",
										  })
								)
						)
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `solo ${v}`,
							icon: "solo",
							pressed: v,
							onClick: this.props.handleSolo,
							title: e("Play current track solo (F)"),
							titlePressed: e("Play focus mix of all tracks (F)"),
							hasPopup: z,
							lock: I,
						}),
						eY(
							M,
							null,
							"plus_solo" === o &&
								eY(
									S,
									iV,
									u
										? eY(tU, {
												title: e("Solo Mode"),
												device: t,
												horizontal: !0,
												feature: "solo",
										  })
										: eY(te, {
												title: e("Solo Mode"),
												horizontal: !0,
												classPrefix: "solo",
										  })
								),
							"solo_single" === o &&
								eY(S, iV, eY(t4, { title: e("Solo"), horizontal: !0 }))
						)
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `mute ${b}`,
							icon: "mute",
							pressed: b,
							onClick: this.props.handleMute,
							title: e("Mute current track (M)"),
							titlePressed: e("Unmute current track (M)"),
							hasPopup: z,
							lock: I,
						}),
						eY(
							M,
							null,
							"plus_mute" === o &&
								eY(
									S,
									iV,
									u
										? eY(tU, {
												title: e("Mute Mode"),
												device: t,
												horizontal: !0,
												feature: "mute",
										  })
										: eY(te, {
												title: e("Mute Mode"),
												horizontal: !0,
												classPrefix: "mute",
										  })
								)
						)
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `countin ${N}`,
							icon: "countin",
							pressed: N,
							onClick: this.props.handleCountin,
							title: e("Turn count-in mode on (C)"),
							titlePressed: e("Turn count-in mode off (C)"),
						})
					),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: `metronome ${P}`,
							icon: "metronome",
							pressed: P,
							onClick: this.props.handleMetronome,
							title: e("Turn metronome on (N)"),
							titlePressed: e("Turn metronome off (N)"),
						}),
						eY(M, null, g && eY(S, { ...iV, key: "layer" }, eY(iR, null)))
					),
					!p &&
						eY(
							"div",
							{ className: e8.item },
							eY(e9, {
								key: `editor ${y} ${s}`,
								icon: "editor",
								pressed: y,
								onClick: this.props.handleTabEditor,
								title: e("Turn tab corrector on (E)"),
								titlePressed: e("Turn tab corrector off (E)"),
								warning: s,
							}),
							y && eY(S, { ...iV, key: "tab-editor" }, eY(ix, null))
						),
					n &&
						!p &&
						eY(
							"div",
							{ className: e8.item },
							eY(e9, {
								key: `fingerings ${f} ${r}`,
								loading: f,
								icon: "fingerings",
								pressed: r,
								onClick: this.props.handleFingerings,
								title: e("Generate guitar fingerings (G)"),
								titlePressed: e("Turn fingerings off (G)"),
							}),
							eY(
								M,
								null,
								r &&
									"Loading" !== l &&
									"tab_editor" !== o &&
									eY(S, iV, eY(iN, { status: l }))
							)
						),
					eY(
						"div",
						{ className: e8.item },
						eY(e9, {
							key: "print",
							icon: "print",
							onClick: this.props.handlePrint,
							title: "Print (P)",
							lock: I,
						}),
						eY(
							M,
							null,
							"plus_print" === o &&
								eY(
									S,
									iV,
									eY(te, {
										title: e("Printing"),
										horizontal: !0,
										classPrefix: "print",
									})
								)
						)
					),
					eY(
						"div",
						{ className: e8.secondaryControls },
						eY(
							"div",
							{ className: p ? e8.itemSmall : e8.itemSmallHidden },
							eY(e9, {
								key: `help ${c}`,
								icon: "help",
								pressed: c,
								onClick: this.props.handleNotation,
								title: e("Show drum notation"),
								titlePressed: e("Hide drum notation"),
							}),
							p && eY(T, { usedDrums: p, horizontal: !0 })
						)
					)
				)
			)
		);
	}
}
let iq = "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z",
	i_ = "M7.5 12h11v-2h-11v2z";
function iH(e) {
	let { up: t } = e;
	return eY(
		"svg",
		{ width: "44", height: "46", role: "img" },
		eY("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
		eY("path", {
			d: t ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
		})
	);
}
let iG = "B7uxe",
	iU = "B7uxe B7u2i3",
	iW = "B7u2d7",
	iY = "B7u1gz",
	iK = "B7u2d7 B7u12o",
	iQ = "B7u2d7 B7u15f",
	iZ = "B7u2lu",
	iJ = "B7u2xf",
	i1 = "B7u1a5",
	i0 = "B7u1jq",
	i2 = "B7u1jq B7u2yh",
	i5 = "B7u1jq B7u2yh B7u6z",
	i3 = "B7u1jq B7u1fq",
	i4 = "B7u1b6",
	i7 = {
		pitchshift: "B7uxe",
		pitchshiftMobile: "B7uxe B7u2i3",
		pitchshiftSection: "B7u2d7",
		separator: "B7u1gz",
		tuneControls: "B7u2d7 B7u12o",
		currentTuning: "B7u2d7 B7u15f",
		currentTuningHeader: "B7u2lu",
		currentTuningFiller: "B7u2xf",
		tuningString: "B7u1a5",
		button: "B7u1jq",
		quickButton: "B7u1jq B7u2yh",
		disabledButton: "B7u1jq B7u2yh B7u6z",
		updown: "B7u1jq B7u1fq",
		currentPitch: "B7u1b6",
	},
	i8 = 12,
	i6 = -12,
	i9 = (e) =>
		e.current &&
		(D(e.current.instrumentId) || A(e.current.instrumentId)) &&
		e.current.tuning;
class oe extends eW {
	constructor(e) {
		super(e),
			(this.keyMap = {
				enter: this.hidePopup,
				left: this.tuneDown,
				down: this.tuneDown,
				up: this.tuneUp,
				right: this.tuneUp,
			});
	}
	hidePopup = (e) => {
		e.preventDefault(), this.props.dispatch("layer/hide");
	};
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
		let { player: e, ensureLineVisibility: t, part: i } = this.props;
		if (t && i.current) {
			let o = P(i.current, e.audio.getCursor(), "left");
			o && t(null, o.measureLayout.lineLayout, !1);
		}
	}
	tuneUp = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t < 12 && E(this.props.store, t + 1);
	};
	tuneDown = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t > -12 && E(this.props.store, t - 1);
	};
	reset = (e) => {
		e.preventDefault(), E(this.props.store, 0);
	};
	renderCurrentTuning = () => {
		if (i9(this.props.part)) {
			let e = this.props.part.current.tuning.map(
				(e) => e + this.props.player.pitchShift
			);
			return eY(
				"div",
				{ className: i7.currentTuning, "aria-label": "Current tuning" },
				eY("div", { className: i7.currentTuningHeader }, "CURRENT TUNING"),
				eY("div", { id: "tuning", className: i7.tuningString }, z(e))
			);
		}
		return null;
	};
	renderQuickButton = () => {
		if (0 !== this.props.player.pitchShift)
			return eY(
				"button",
				{
					className: i7.quickButton,
					onClick: this.reset,
					role: "button",
					"aria-label": "Restore original tuning",
				},
				"Restore original tuning"
			);
		if (i9(this.props.part)) {
			let e = I(
				this.props.part.current.instrumentId,
				this.props.part.current.tuning
			);
			if (e && 0 !== e.pitch) {
				let t = e.tuningName;
				return (
					"STANDARD TUNING" === t && (t = "Standard tuning"),
					eY(
						"button",
						{
							className: i7.quickButton,
							role: "button",
							"aria-label": "Quick shift pitch",
							onClick: () => {
								E(this.props.store, e.pitch);
							},
						},
						`Convert to ${t}`
					)
				);
			}
		}
		return eY(
			"button",
			{
				className: i7.disabledButton,
				role: "button",
				disabled: !0,
				"aria-label": "Restore original tuning",
			},
			"Restore original tuning"
		);
	};
	render() {
		let e = this.renderQuickButton(),
			t = this.renderCurrentTuning(),
			{ pitchShift: i } = this.props.player,
			{ tab: o, tuningButton: s, mobile: a } = this.props,
			n = 0,
			r = 0,
			l = i7.pitchshift;
		if (a) (n = -71), (r = -235), (l = i7.pitchshiftMobile);
		else if (((n = this.props.firstLineLayoutHeigth - 58), (r = 55), o && s)) {
			let p = o.getBoundingClientRect(),
				u = s.getBoundingClientRect();
			(r = u.left - p.left + u.width + 21),
				(n = u.top + u.height - p.top - 77.5);
		}
		return eY(
			"div",
			{
				className: l,
				title: "You can use arrow keys",
				role: "dialog",
				"aria-label": "Shift Pitch",
				style: { top: `${n}px`, left: `${r}px` },
			},
			t || eY("div", { className: i7.currentTuningFiller }),
			eY(
				"div",
				{ className: i7.tuneControls },
				eY(
					"button",
					{
						className: i7.updown,
						onClick: this.tuneDown,
						disabled: i <= -12,
						"aria-label": "Step down",
					},
					eY(iH, { up: !1 })
				),
				eY(
					"span",
					{ className: i7.currentPitch, "aria-label": "Current pitch" },
					(i > 0 ? "+" : "") + i
				),
				eY(
					"button",
					{
						className: i7.updown,
						onClick: this.tuneUp,
						disabled: i >= 12,
						"aria-label": "Step up",
					},
					eY(iH, { up: !0 })
				)
			),
			e
		);
	}
}
var ot = s(oe, "player", "part");
let oi = "B6714x",
	oo = "B67al",
	os = "B6713d",
	oa = "B6711t",
	on = "B6731g",
	or = "B6731g B679r",
	ol = "B67147",
	op = {
		mobileSpeed: "B6714x",
		secondary: "B67al",
		controls: "B6713d",
		value: "B6711t",
		button: "B6731g",
		disabled: "B6731g B679r",
		switch: "B67147",
	},
	ou = 30,
	oh = 170,
	od = 10;
class oc extends eW {
	constructor() {
		super(), (this.state = { mode: "percent" });
	}
	tuneUp = (e) => {
		let t, i;
		e.preventDefault();
		let { store: o, player: s } = this.props,
			{ mode: a } = this.state;
		"percent" === a
			? ((t = 10), (i = Math.floor(s.speed / t) * t + t))
			: ((t = +(100 / s.tempo.bpm).toFixed(2)), (i = s.speed + t)),
			i <= 170 && i >= 30 && d(o, i);
	};
	tuneDown = (e) => {
		let t, i;
		e.preventDefault();
		let { store: o, player: s } = this.props,
			{ mode: a } = this.state;
		"percent" === a
			? ((t = 10), (i = Math.floor(s.speed / t) * t - t))
			: ((t = +(100 / s.tempo.bpm).toFixed(2)), (i = s.speed - t)),
			i <= 170 && i >= 30 && d(o, i);
	};
	switchMode = () => {
		let { mode: e } = this.state;
		this.setState({ mode: "percent" === e ? "bpm" : "percent" });
	};
	render() {
		let e, t;
		let { speed: i, tempo: o } = this.props.player,
			{ mode: s } = this.state,
			n = a(i, o),
			r = Math.round(i),
			l = op.disabled,
			p =
				"percent" === s
					? 10 * Math.floor(i / 10) - 10
					: i - +(100 / o.bpm).toFixed(2);
		p >= 30 && ((l = op.button), (e = this.tuneDown));
		let u = op.disabled,
			h =
				"percent" === s
					? 10 * Math.floor(i / 10) + 10
					: i + +(100 / o.bpm).toFixed(2);
		return (
			h <= 170 && ((u = op.button), (t = this.tuneUp)),
			eY(
				"div",
				{ className: op.mobileSpeed, role: "dialog", "aria-label": "Speed" },
				eY(
					"p",
					{ className: op.secondary },
					"percent" === s ? `${n.bpm} bpm` : `${r}%`
				),
				eY(
					"div",
					{ className: op.controls },
					eY("button", { className: l, onClick: e }, eY(iH, { up: !1 })),
					eY(
						"div",
						{ className: op.value },
						eY("p", null, "percent" === s ? `${r}%` : n.bpm),
						"bpm" === s && eY("span", null, "bpm")
					),
					eY("button", { className: u, onClick: t }, eY(iH, { up: !0 }))
				),
				eY(
					"button",
					{ className: op.switch, onClick: this.switchMode },
					`Switch to ${"percent" === s ? "bpm" : "%"}`
				)
			)
		);
	}
}
var om = s(oc, "player");
let oy = "n8g5",
	of = "n8n1",
	og = "n885",
	ov = "n885 n81jn",
	ob = "n82pa",
	ox = "n835f",
	ow = "n82pa n81e8",
	oC = "n82pa n813x",
	ok = "n81sz",
	oL = "n81sz n8on",
	oM = "n819i",
	oS = "n81z",
	o$ = "n81yu",
	oT = "n82mi",
	oN = "n8kg",
	oB = {
		controls: "n8g5",
		float: "n8n1",
		features: "n885",
		featuresActive: "n885 n81jn",
		item: "n82pa",
		tuningValue: "n835f",
		minimize: "n82pa n81e8",
		play: "n82pa n813x",
		button: "n81sz",
		active: "n81sz n8on",
		exitActive: "n819i",
		enterActive: "n81z",
		enter: "n81yu",
		exit: "n82mi",
		alt: "n8kg",
	},
	oP = { animationStyles: F };
class oE extends eW {
	overflowTimer = null;
	minimizeClick = () => {
		let { minimized: e } = this.state;
		clearTimeout(this.overflowTimer),
			e
				? (this.setState({ minimized: !1 }),
				  (this.overflowTimer = setTimeout(() => {
						this.setState({ overflowVisible: !0 });
				  }, 500)))
				: (this.props.handleMinimize(),
				  this.setState({ minimized: !0, overflowVisible: !1 }));
	};
	hide = () => {
		let { minimized: e } = this.state,
			{ shouldPlay: t } = this.props;
		clearTimeout(this.overflowTimer),
			e ||
				t ||
				(this.props.handleMinimize(),
				this.setState({ minimized: !0, overflowVisible: !1 }));
	};
	componentWillUnmount() {
		clearTimeout(this.overflowTimer);
	}
	componentWillMount() {
		let { toolbarExperiment: e, handleActivateToggleExperiment: t } =
			this.props;
		(null == e ? void 0 : e.status) === "pending" && setTimeout(t, 500);
	}
	constructor(e) {
		var t, i;
		super(e);
		let o =
			(null === (t = e.toolbarExperiment) || void 0 === t
				? void 0
				: t.segment) !== "on" &&
			(null === (i = e.toolbarExperiment) || void 0 === i
				? void 0
				: i.segment) !== "ut";
		this.state = { minimized: o, overflowVisible: !o };
	}
	render() {
		let {
				device: e,
				layer: t,
				shouldPlay: i,
				canPlay: o,
				pitchShift: s,
				pitchShiftAvailable: a,
				speed: n,
				fingeringsStatus: r,
				fingeringsActive: l,
				fingeringsEnabled: p,
				usedDrums: u,
			} = this.props,
			{ minimized: h, overflowVisible: d } = this.state,
			c = "speed" === t,
			y = "pitchshift" === t,
			f =
				this.props.isMetronome &&
				!["mixer", "plus_mute", "tab_editor", "plus_print"].includes(t),
			g = "Loading" === r,
			v = p && !u,
			b = "solo" === this.props.type,
			x = "mute" === this.props.type,
			w = this.props.speed !== j || c,
			k = this.props.loop,
			L = this.props.isCountin,
			$ = this.props.isMetronome,
			T = !this.props.plusAccess,
			N = !this.props.plusAccess,
			B = m(e.os) || C(e.os),
			P = { height: `${414 + 57 * (a ? 1 : 0) + 57 * (v ? 1 : 0)}px` },
			E = oB.features;
		h ? (P.height = "71px") : d && (E = oB.featuresActive);
		let z = `${Math.round(n)}%`;
		return eY(
			"footer",
			{ className: oB.controls, "data-controls": "tablature" },
			eY(
				"svg",
				{ width: 0, height: 0 },
				eY("defs", null, eY(tt, {}), eY(ti, {}))
			),
			eY(
				"div",
				{ className: oB.alt, id: "alt-controls" },
				eY(e6, {
					shouldPlay: i,
					canPlay: o,
					onClick: this.props.handlePlay,
					title: "Play",
					hideDefs: !0,
				})
			),
			eY(
				"div",
				{ className: oB.float, id: "mobile-controls" },
				eY(
					"div",
					{ className: E, style: P },
					eY(
						"div",
						{ className: oB.minimize },
						eY(e9, {
							mobile: !0,
							icon: h ? "arrow" : "arrow-down",
							pressed: !1,
							onClick: this.minimizeClick,
							title: "Minimize",
							titlePressed: "Minimize",
						})
					),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							mobile: !0,
							icon: "speed",
							text: z,
							pressed: w,
							onClick: this.props.handleSpeed,
							title: "Change playback speed",
							hasPopup: T,
							lock: N,
						}),
						eY(
							M,
							null,
							"plus_speed" === t &&
								eY(
									S,
									oP,
									B
										? eY(tU, {
												title: "Tempo Control",
												device: e,
												mobile: !0,
												low: !0,
												feature: "slowdown",
										  })
										: eY(te, { title: "Tempo Control", classPrefix: "speed" })
								),
							c && eY(S, { ...oP, key: "layer" }, eY(om, null))
						)
					),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							mobile: !0,
							icon: "loop",
							pressed: k,
							onClick: this.props.handleLoop,
							title: "Turn loop mode on",
							titlePressed: "Turn loop mode off",
							hasPopup: T,
							lock: N,
						}),
						eY(
							M,
							null,
							"plus_loop" === t &&
								eY(
									S,
									oP,
									B
										? eY(tU, {
												title: "Loop Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "loop",
										  })
										: eY(te, { title: "Loop Mode", classPrefix: "loop" })
								)
						)
					),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							mobile: !0,
							icon: "solo",
							pressed: b,
							onClick: this.props.handleSolo,
							title: "Play the current track solo",
							titlePressed: "Play the focus mix of all tracks",
							hasPopup: T,
							lock: N,
						}),
						eY(
							M,
							null,
							"plus_solo" === t &&
								eY(
									S,
									oP,
									B
										? eY(tU, {
												title: "Solo Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "solo",
										  })
										: eY(te, { title: "Solo Mode", classPrefix: "solo" })
								),
							"solo_single" === t &&
								eY(S, oP, eY(t4, { title: "Solo", horizontal: !0 }))
						)
					),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							mobile: !0,
							icon: "mute",
							pressed: x,
							onClick: this.props.handleMute,
							title: "Mute current track (M)",
							titlePressed: "Unmute current track (M)",
							hasPopup: T,
							lock: N,
						}),
						eY(
							M,
							null,
							"plus_mute" === t &&
								eY(
									S,
									oP,
									B
										? eY(tU, {
												title: "Mute Mode",
												device: e,
												mobile: !0,
												feature: "mute",
										  })
										: eY(te, { title: "Mute Mode", classPrefix: "mute" })
								)
						)
					),
					v &&
						eY(
							"div",
							{ className: oB.item },
							eY(e9, {
								key: `fingerings ${g} ${l}`,
								loading: g,
								icon: "fingerings",
								pressed: l,
								onClick: this.props.handleFingerings,
								title: "Generate guitar fingerings (G)",
								titlePressed: "Turn fingerings off (G)",
							}),
							eY(
								M,
								null,
								l &&
									"Loading" !== r &&
									"tab_editor" !== t &&
									eY(S, oP, eY(iN, { status: r }))
							)
						),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							mobile: !0,
							icon: "countin",
							pressed: L,
							onClick: this.props.handleCountin,
							title: "Turn count-in mode on (C)",
							titlePressed: "Turn count-in mode off (C)",
						})
					),
					eY(
						"div",
						{ className: oB.item },
						eY(e9, {
							icon: "metronome",
							pressed: $,
							onClick: this.props.handleMetronome,
							title: "Turn metronome on (N)",
							titlePressed: "Turn metronome off (N)",
						}),
						eY(M, null, f && eY(S, { ...oP, key: "layer" }, eY(iR, null)))
					),
					a &&
						eY(
							"div",
							{ className: oB.item },
							0 !== s &&
								eY(
									"div",
									{ className: oB.tuningValue },
									`${s > 0 ? "+" : ""}${s}`
								),
							eY(e9, {
								mobile: !0,
								icon: "tuning",
								pressed: 0 !== s || y,
								onClick: this.props.handlePitchshift,
								title: "Pitch Shift on",
								titlePressed: "Pitch Shift off",
								hasPopup: T,
								lock: N,
							}),
							eY(
								M,
								null,
								"plus_pitchshift" === t &&
									eY(
										S,
										oP,
										B
											? eY(tU, {
													title: "Pitch Shift",
													device: e,
													mobile: !0,
													feature: "pitch shift",
											  })
											: eY(te, { title: "Pitch Shift", classPrefix: "pitch" })
									),
								y && eY(S, { ...oP, key: "layer" }, eY(ot, { mobile: !0 }))
							)
						)
				),
				eY(
					"div",
					{ className: oB.play },
					eY(e6, {
						onClick: (e) => {
							this.props.handlePlay(e), this.hide();
						},
						title: "Play",
						titlePressed: "Pause",
						shouldPlay: i,
						canPlay: o,
						hideDefs: !0,
					})
				)
			)
		);
	}
}
let oz = "Brk2di",
	oI = "Brk2yo",
	oD = "Brk1b7",
	oA = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function oj() {
	return eY(
		"section",
		{ className: oA.error, role: "alert" },
		eY(
			"h1",
			{ className: oA.title },
			eY("span", null, "The song was successfully deleted!")
		),
		eY(
			"h2",
			{ className: oA.subtitle },
			"Try ",
			eY(x, { to: "/" }, "searching"),
			" for other songs."
		)
	);
}
class oF extends eW {
	render() {
		return eY(
			"svg",
			{ width: 112, height: 112, viewBox: "0 0 112 112" },
			eY(
				"g",
				{
					fill: "none",
					fillRule: "evenodd",
					stroke: "#FD651A",
					"stroke-width": "11",
					transform: "translate(6 6)",
				},
				eY("circle", { cx: 50, cy: 50, r: 50 }),
				eY("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
			)
		);
	}
}
function oR() {
	return eY(
		R,
		{
			level: "notice",
			title:
				"Sorry this content has been removed in your country at the request of the underlying music publisher.",
			action:
				"We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
			reason: "license",
		},
		eY(oF, null)
	);
}
function oX(e) {
	let { meta: t, user: i, cursor: o, part: s, player: a, isDeleted: n } = e;
	if (t.loading || s.loading) return;
	let r = !!t.current,
		l = t.current && !!t.current.tracks,
		p = X(t, i),
		u = r && V.get(t.current, O.MASTER),
		h = t.current && t.current.isBlocked;
	if (t.isNotFound || s.isNotFound) return eY(tn, null);
	if (n) return eY(oj, null);
	if (t.isNetworkFailed || s.isNetworkFailed) return eY(tr, null);
	if (t.isFailed || s.isFailed) return eY(th, null);
	if (!t.allowedByLicense) return eY(oR, null);
	if (r && !p && u.audioError) {
		let d = u.audioError,
			c = "Our virtual band was unable to play it O_o";
		return (
			d === q.TOO_LONG && (c = "Its duration exceeds the 30 minutes limit"),
			eY(R, {
				level: "error",
				title: "Sorry, playback is not possible on this song",
				action: c,
				reason: "audio",
			})
		);
	}
	if (r && (!l || !p))
		return eY(R, {
			level: "info",
			title: "Tab sound is being rendered",
			action: "On average it takes about 5 minutes to process a tab",
			reason: "render",
		});
	else if (!a.webworkerOperational)
		return eY(R, {
			level: "info",
			title: "Sorry, playback is not possible on this song",
			action: "Probably there is not enough memory",
			reason: "webworker",
		});
	else if (!a.playbackAvailable || !_)
		return eY(R, {
			level: "info",
			title: "Sorry, playback is not supported in your browser",
			action: "Try to use latest Google Chrome",
			reason: a.playbackAvailable ? "animate" : "audio",
		});
	else if (a.isAudioNetworkFailed)
		return eY(R, {
			level: "info",
			title: "Audio can't be loaded because of network error.",
			action: "Probably you are offline or connection was canceled",
			reason: "network",
		});
	else if (a.isAudioFailed)
		return eY(R, {
			level: "error",
			title: "Sorry, but there are some problems with playback",
			action: "Please, try to reload page",
			reason: "playback",
		});
	else if (o.isFailed)
		return eY(R, {
			level: "error",
			title: "Sorry, but there are some problems with cursor",
			action: "Please, try to reload page",
			reason: "cursor",
		});
	else if (h)
		return eY(R, {
			level: "notice",
			title: "Sorry, but that revision was blocked",
			action: "Please let us know if you disagree with this decision",
			reason: "block",
		});
}
let oV = "Bvj22a",
	oO = H + " Bvj1o9",
	oq = "Bvj1b4",
	o_ = { main: "Bvj22a", showroom: H + " Bvj1o9", banner: "Bvj1b4" },
	oH = eQ(() => {
		let e = eZ(),
			{ device: t, ads: i } = g("device", "ads", "route", "consent"),
			{ alt: o, link: s, image: a } = G(t);
		return eY(
			"section",
			{ id: "showroom_bottom", className: o_.main, ref: e },
			eY(
				"div",
				{ className: o_.showroom, id: "Redesign_BTF_tab_page_320x50" },
				i.notsyFailed &&
					eY(
						"a",
						{ className: o_.link, href: s, target: "_blank" },
						eY("img", { src: a, className: o_.banner, alt: o })
					)
			)
		);
	}),
	oG = "Bwhvt",
	oU = "Bwh1yk",
	oW = "Bwha2",
	oY = "Bwhid",
	oK = "Bwh2e7",
	oQ = "Bwh2e7 Bwh1fs",
	oZ = "Bwhv4",
	oJ = "Bwh333",
	o1 = "Bwh2ru",
	o0 = "Bwh8r",
	o2 = "Bwh17o",
	o5 = {
		container: "Bwhvt",
		inner: "Bwh1yk",
		video: "Bwha2",
		openSection: "Bwhid",
		toggleButton: "Bwh2e7",
		toggleButtonClose: "Bwh2e7 Bwh1fs",
		hideBtn: "Bwhv4",
		settings: "Bwh333",
		videoInput: "Bwh2ru",
		buttons: "Bwh8r",
		timestamps: "Bwh17o",
	};
class o3 extends eW {
	listRef = eJ();
	inputOffsetRef = eJ();
	constructor(e) {
		super(e), (this.state = { timestamps: [0] });
	}
	componentDidMount = () => {
		if (window.YT) this.loadVideo();
		else {
			let e = document.createElement("script");
			(e.src = "https://www.youtube.com/player_api"),
				(window.onYouTubeIframeAPIReady = this.loadVideo);
			let t = document.getElementsByTagName("script")[0],
				i = t.parentNode;
			i && i.insertBefore(e, t);
		}
	};
	componentDidUpdate(t) {
		let { songId: i, part: o, player: s } = this.props,
			a = t.songId,
			n = t.part.videoOffset,
			r = t.part.videoTimeline,
			l = t.part.videoId;
		if (
			i !== a ||
			o.videoOffset !== n ||
			o.videoTimeline !== r ||
			o.videoId !== l
		) {
			var p;
			console.log("Reload video"),
				s.video.destroy(),
				null ===
					(p = document.getElementById(
						`youtube-player-${l}-${t.songId}-${t.revisionId}-${t.partId}`
					)) ||
					void 0 === p ||
					p.remove(),
				this.loadVideo(),
				clearInterval(e),
				(e = null);
		}
	}
	componentWillUnmount() {
		this.props.player.video.destroy();
	}
	loadVideo = () => {
		try {
			let {
					songId: e,
					revisionId: t,
					partId: i,
					player: { video: o, position: s },
					part: a,
				} = this.props,
				n = a.videoId,
				r = a.videoOffset;
			console.log(`loadVideo: ${n} ${r}`);
			let l = new window.YT.Player(`youtube-player-${n}-${e}-${t}-${i}`, {
				videoId: n,
				playerVars: {
					controls: 0,
					disablekb: 1,
					showinfo: 0,
					rel: 0,
					modestbranding: 0,
					fs: 0,
					cc_load_policy: 0,
					iv_load_policy: 3,
					enablejsapi: 1,
					start: Math.floor(r) + s.cursor / 1e3,
				},
				width: "200",
				height: "200",
				events: {
					onReady: () => {
						window.hotKeysManager.bindOne("j", () => this.addBarTimestamp(l), {
							global: !0,
						}),
							o.load(l, r, s.cursor);
					},
					onError(e) {
						console.error(e.message || e), o.onError(e);
					},
					onStateChange: this.onYTPlayerStateChange,
				},
			});
		} catch (p) {
			console.log(p);
		}
	};
	addBarTimestamp = (e) => {
		let { timestamps: t } = this.state,
			i = [...t];
		i.push(e.getCurrentTime()),
			this.setState({ timestamps: i }, () => {
				var e, t;
				null === (e = this.listRef.current) ||
					void 0 === e ||
					e.scrollTo({
						top:
							null === (t = this.listRef.current) || void 0 === t
								? void 0
								: t.scrollHeight,
					});
			});
	};
	syncClick = async () => {
		let { dispatch: e } = this.props,
			{ timestamps: t } = this.state,
			i = [...t];
		if (t.length >= 5) {
			let o = (e) => t[e] - t[e - 1],
				s = (o(1) + o(2) + o(3) + o(4)) / 4,
				a = t[1] - s;
			a < 0 && (a = 0), (i[0] = a);
		}
		this.setState({ timestamps: i }, () =>
			e("part/applyVideoBarPoints", { points: i })
		);
	};
	saveClick = () => {
		let { dispatch: e } = this.props,
			{ timestamps: t } = this.state;
		e("part/saveVideoPoints", { points: t });
	};
	guessOffset = () => {
		var e;
		this.props.dispatch(
			"part/guessOffset",
			+(null === (e = this.inputOffsetRef.current) || void 0 === e
				? void 0
				: e.value)
		);
	};
	resetPoints = () => {
		this.setState({ timestamps: [0] });
	};
	changeVideoId = (e) => {
		this.props.dispatch("part/changeVideoId", e.target.value);
	};
	onYTPlayerStateChange = (t) => {
		switch (t.data) {
			case 1:
				this.props.handlePlayVideo();
				break;
			case 2:
				this.props.handlePauseVideo(), clearInterval(e), (e = null);
				break;
			case 3:
				this.props.dispatch("player/suspend", "buffering");
		}
	};
	handleVideo = () => {
		let { video: e } = this.props.player;
		e.handleOpenClose();
	};
	render = () => {
		let { isOpened: e } = this.props.player.video,
			{ songId: t, revisionId: i, partId: o, part: s, user: a } = this.props,
			{ timestamps: n } = this.state;
		return [
			e
				? eY(
						"div",
						{ className: o5.openSection },
						eY(
							"button",
							{
								className: o5.toggleButtonClose,
								onClick: this.handleVideo,
								id: "close-video",
								tittle: "Close video",
							},
							"CLOSE AUDIO FOR THIS TAB"
						)
				  )
				: eY(
						"div",
						{ className: o5.openSection },
						eY(
							"button",
							{
								className: o5.toggleButton,
								onClick: this.handleVideo,
								id: "open-video",
								tittle: "Open video",
							},
							"ORIGINAL AUDIO FOR THIS TAB"
						)
				  ),
			eY(
				"div",
				{
					className: o5.container,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-container",
				},
				eY(
					"div",
					{ className: o5.inner },
					a.isLoggedIn &&
						eY(
							"div",
							{ className: o5.settings },
							eY("input", {
								className: o5.videoInput,
								type: "text",
								placeholder: "videoId",
								onBlur: this.changeVideoId,
							}),
							eY(
								"div",
								{ className: o5.timestamps, ref: this.listRef },
								eY(
									"ul",
									null,
									n.map((e, t) =>
										eY(
											"li",
											null,
											`${t + 1}. ${e},
`
										)
									)
								)
							),
							eY(
								"div",
								{ className: o5.buttons },
								eY("input", {
									ref: this.inputOffsetRef,
									type: "number",
									step: "0.01",
									placeholder: "Offset",
								}),
								eY("button", { onClick: this.guessOffset }, "Guess"),
								eY("button", { onClick: this.syncClick }, "Sync"),
								eY("button", { onClick: this.saveClick }, "Save"),
								eY("button", { onClick: this.resetPoints }, "Reset")
							)
						),
					eY(
						"div",
						{ className: o5.video },
						eY("div", { id: `youtube-player-${s.videoId}-${t}-${i}-${o}` }),
						eY(
							"button",
							{
								className: o5.hideBtn,
								onClick: this.handleVideo,
								tittle: "Close video",
								id: "close-video",
							},
							"✕"
						)
					)
				)
			),
		];
	};
}
var o4 = s(o3, "player", "part", "user");
class o7 extends eW {
	constructor() {
		super(), (this.state = { isFailed: !1 });
	}
	componentDidCatch(e) {
		this.setState({ isFailed: !0 }),
			this.props.dispatch("cursor/failed", { error: e });
	}
	render() {
		return this.state.isFailed ? null : this.props.children;
	}
}
var o8 = s(o7);
let o6 = "Ckd11i",
	o9 = "Ckdzh",
	se = "Ckd22n",
	st = "Ckd11i Ckduv",
	si = "Ckdte",
	so = {
		btn: "Ckd11i",
		shape: "Ckdzh",
		bg: "Ckd22n",
		active: "Ckd11i Ckduv",
		badge: "Ckdte",
	};
function ss(e) {
	let {
			reference: t,
			firstLineLayoutHeigth: i,
			handlePitchshift: o,
			isActive: s,
			isPitchshiftToStandard: a,
			lock: n,
		} = e,
		{
			player: { pitchShift: r },
		} = g("player"),
		l = "Shift pitch (R)";
	0 !== r
		? (l = "Pitch shifted (R)")
		: a && (l = "Pitch can be shifted to match standard tuning (R)");
	let p = 5 * (Math.abs(r).toString(10).length - 1) + (r > 0 ? 2 : 0);
	return eY(
		"g",
		{
			vectorEffect: "non-scaling-stroke",
			transform: `translate(-8 ${i - 47})`,
			className: s ? so.active : so.btn,
			onClick: o,
			"data-tab-button": "tuning-button",
		},
		eY("title", null, l),
		eY("rect", {
			x: 0,
			y: 3,
			rx: 4,
			ry: 4,
			width: 25,
			height: 23,
			filter: "url(#svg_shadow)",
			className: so.bg,
			ref: t,
		}),
		eY("path", {
			d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
			"stroke-width": "1.3",
		}),
		eY("path", {
			d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
			"stroke-width": "1.6",
		}),
		(a || 0 !== r) &&
			eY("rect", {
				x: 18,
				y: 0,
				width: 13 + p,
				height: 13,
				rx: 6.5,
				ry: 6.5,
				className: so.badge,
			}),
		0 !== r && eY("text", { x: 20, y: 9.5 }, `${r > 0 ? "+" : ""}${r}`),
		n &&
			eY(
				"g",
				{ transform: "translate(-17, -12)" },
				eY("circle", {
					className: so.bg,
					cx: "16.5",
					cy: "15.5",
					r: "8.5",
					filter: "url(#svg_shadow_light)",
				}),
				eY("path", {
					className: so.lock,
					d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
				}),
				eY("circle", { className: so.shape, cx: 16.5, cy: 17, r: 0.8 })
			)
	);
}
let sa = "Chc1pg",
	sn = "Chc2v9",
	sr = "Chcl9",
	sl = "Chc14h",
	sp = "Chcfq",
	su = "Chctb",
	sh = {
		marker: "Chc1pg",
		markerTransparent: "Chc2v9",
		learnedMarker: "Chcl9",
		markerText: "Chc14h",
		group: "Chcfq",
		hideGroup: "Chctb",
	},
	sd = [5, 12, 19, 25],
	sc = (e, t, i) =>
		`M${e + 7} ${
			t + 13
		}l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${i}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class sm extends eW {
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: i } = this.props;
		i(e, t), this.setState({ leftAfterClick: !1 });
	};
	onMouseLeave = () => {
		this.setState({ leftAfterClick: !0 });
	};
	constructor(e) {
		super(e), (this.state = { leftAfterClick: !0 });
	}
	render() {
		let { x: e, y: t, barNumber: i, isLearned: o } = this.props,
			{ leftAfterClick: s } = this.state,
			a = `add-${i}`,
			n = sd[i.toString().length - 1];
		return o
			? e1("g", {
					onClick: this.onBarClick,
					onMouseLeave: this.onMouseLeave,
					className: sh.group,
					children: [
						e1("path", {
							"data-marker-num": i,
							className: sh.learnedMarker,
							d: sc(e, t, n),
						}),
						e1("text", {
							className: sh.markerText,
							x: e + 2.4,
							y: t + 10,
							id: a,
							children: i,
						}),
						s &&
							e1("g", {
								className: sh.hideGroup,
								children: [
									e1("path", {
										"data-marker-num": i,
										className: sh.marker,
										d: sc(e, t, n + 107),
									}),
									e1("text", {
										className: sh.markerText,
										x: e + 2.4,
										y: t + 10,
										id: a,
										children: `${i} Mark as not learned`,
									}),
								],
							}),
					],
			  })
			: e1("g", {
					className: sh.group,
					onClick: this.onBarClick,
					onMouseLeave: this.onMouseLeave,
					children: [
						e1("path", {
							"data-marker-num": i,
							className: sh.markerTransparent,
							d: sc(e, t, n + 107),
						}),
						s &&
							e1("g", {
								className: sh.hideGroup,
								children: [
									e1("path", {
										"data-marker-num": i,
										className: sh.marker,
										d: sc(e, t, n + 87),
									}),
									e1("text", {
										className: sh.markerText,
										x: e + 2.4,
										y: t + 10,
										id: a,
										children: `${i} Mark as learned`,
									}),
								],
							}),
					],
			  });
	}
}
function sy(e) {
	return e.layout.y + e.layout.layers.height - 18;
}
let sf = eQ((e) => {
		var t;
		let { lines: i, partId: o, songId: s } = e,
			{ learnMarkers: a, dispatch: n } = g("learnMarkers"),
			r =
				(null === (t = a.data.find((e) => e.songId === s && e.partId === o)) ||
				void 0 === t
					? void 0
					: t.learnedBars) || [],
			l = eK(
				(e, t) => {
					n("learnMarkers/markToggle", {
						songId: s,
						partId: o,
						barNumber: e,
						isLearned: t,
					});
				},
				[s, o]
			),
			p = [];
		for (let u of i)
			for (let h of u.layout.measureLayouts) {
				let d = h.measure;
				if (d.layouts[0] !== h) continue;
				let c = U(d).x + 2,
					m = sy(u),
					y = d.index + 1,
					f = r.includes(y);
				p.push(e1(sm, { x: c, y: m, barNumber: y, isLearned: f, onToggle: l }));
			}
		return e1(e0, { children: p });
	}),
	sg = "Cpkq8",
	sv = "Cpk9f",
	sb = "Cpk2r",
	sx = "Cpk19q",
	sw = "Cpk34y",
	sC = {
		wrap: "Cpkq8",
		shadow: "Cpk9f",
		body: "Cpk2r",
		loading: "Cpk19q",
		icon: "Cpk34y",
	};
function sk(e) {
	return Math.round(1e4 * e) / 1e4;
}
function sL(e, t, i) {
	let o = e / 2,
		s = sk(o * i),
		a = sk(o);
	return `M 0,${s}
     Q 0,0 ${a},0 q ${a},0 ${a},${s}
     v ${sk(t - 2 * s)}
     q 0,${s} -${a},${s} q -${a},0 -${a},-${s}
     v -${sk(t - 2 * s)}`;
}
function sM(e, t, i, o, s, a, n) {
	let r = i * o,
		l = i * s,
		p = i * a,
		u = i * n,
		h = Math.atan2(r, i / 2),
		d = Math.sin(h),
		c = Math.cos(h),
		m = p * d,
		y = p * c,
		f = u * d,
		g = u * c;
	return `M ${sk(e + y)},${sk(t + m)}
     Q ${sk(e)},${sk(t)} ${sk(e + l)},${sk(t)}
     L ${sk(e + i - l)},${sk(t)}
     Q ${sk(e + i)},${sk(t)} ${sk(e + i - y)},${sk(t + m)}
     L ${sk(e + i / 2 + g)},${sk(t + r - f)}
     Q ${sk(e + i / 2)},${sk(t + r)} ${sk(e + i / 2 - g)},${sk(t + r - f)}
     z`;
}
function sS(e) {
	let { width: t, height: i } = e,
		o = 1 * t,
		s = sM((t - o) / 2, 0.33 * t, o, 0.95, 0.45, 0.6, 0.3),
		a = sL(t, i, 1.3);
	return eY(
		e0,
		null,
		eY("path", {
			className: sC.shadow,
			filter: "url(#CursorShadow)",
			d: a,
			key: "shadow",
		}),
		eY("path", { className: sC.body, d: a, key: "body" }),
		eY("path", { className: sC.icon, d: s, key: "path" })
	);
}
function s$(e, t) {
	let i = e.measureLayout,
		o = t.measureLayout;
	return i !== o
		? i.lineLayout !== o.lineLayout || i.measure.index + 1 !== o.measure.index
		: e.x >= t.x;
}
let sT = (e) => e.player.shouldPlay && e.player.canPlay,
	sN = en / 2,
	sB = (e, t, i, o) => {
		let s = et(i);
		if (1 !== e) {
			for (let a of ((s = 0), o)) {
				if (a === i.line) break;
				s += Math.round(e * a.layout.height);
			}
			s = s / e + i.layers.height;
		}
		return sE(e, t, s);
	},
	sP = (e, t, i, o) => sE(e, t, et(i)),
	sE = (e, t, i) =>
		(1 === e ? "" : `scale(${e}) `) +
		` translate3d(${t - ei / 2 + sN}px, ${i - es}px, 0)`;
class sz extends eW {
	el = eJ();
	constructor(e) {
		super(e),
			(this.state = { scale: e.scale }),
			(this.animationPlayId = void 0),
			(this.keyMap = {
				backspace: this.handleBackspace,
				left: this.handleLeft,
				down: this.handleDown,
				up: this.handleUp,
				right: this.handleRight,
			}),
			(this.tempoIndex = 0),
			(this.pause = !0),
			(this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0),
			(this.formatTransform =
				"iOS" === this.props.browser.family ||
				"Safari" === this.props.browser.family
					? sB
					: sP);
	}
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onTab: !0 }),
			window.hotKeysManager.bindMeta(
				"shift+right",
				this.handleShiftLoopRight,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+left",
				this.handleShiftLoopLeft,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+down",
				this.handleShiftLoopRight,
				"onTab"
			),
			window.hotKeysManager.bindMeta(
				"shift+up",
				this.handleShiftLoopLeft,
				"onTab"
			),
			sT(this.props) ? this.animationPlay() : this.animationSeek();
	}
	componentDidUpdate(e) {
		let t = this.props,
			i = t.part !== e.part || t.lines !== e.lines,
			o = t.player.position.cursor !== e.player.position.cursor;
		(i || o) &&
			((this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0));
		let s =
			t.scale !== e.scale ||
			i ||
			o ||
			t.player.speed !== e.player.speed ||
			t.player.type !== e.player.type ||
			t.player.pitchShift !== e.player.pitchShift ||
			sT(t) !== sT(e);
		if (s) {
			let a = this.animationSeek;
			sT(e)
				? (a = sT(t) ? this.animationRestart : this.animationPause)
				: sT(t) && (a = this.animationPlay),
				a.call(this);
		}
	}
	componentWillUnmount() {
		(this.pause = !0),
			this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			window.hotKeysManager.unbindMeta("shift+right", "onTab"),
			window.hotKeysManager.unbindMeta("shift+left", "onTab"),
			window.hotKeysManager.unbindMeta("shift+down", "onTab"),
			window.hotKeysManager.unbindMeta("shift+up", "onTab"),
			window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
	}
	applyCursorCoordinates(e) {
		let t;
		let { el: i, layout: o, nextLayout: s, layoutTimestamp: a } = this,
			{ scale: n, lines: r } = this.props;
		if (s && s$(o, s)) {
			let l = o.absoluteLoopRightX - o.absoluteX,
				p = s.absoluteX - s.absoluteLoopLeftX,
				u = (o.duration * l) / (l + p),
				h = o.duration - u;
			t = (e) => {
				let t = e - a;
				i.current.style.transform =
					t < u
						? this.formatTransform(
								n,
								o.absoluteX + (l * t) / u,
								o.measureLayout.lineLayout,
								r
						  )
						: this.formatTransform(
								n,
								s.absoluteLoopLeftX + (p * (t - u)) / h,
								s.measureLayout.lineLayout,
								r
						  );
			};
		} else {
			let d = s
				? s.absoluteX - o.absoluteX
				: o.absoluteLoopRightX - o.absoluteX;
			t = (e) => {
				i.current.style.transform = this.formatTransform(
					n,
					o.absoluteX + (d * (e - a)) / o.duration,
					o.measureLayout.lineLayout,
					r
				);
			};
		}
		return t(e), t;
	}
	updateCurrentTempo(e) {
		let t = this.props.part.tempos,
			i = (i) =>
				t[i].timestamp <= e && (i === t.length - 1 || e < t[i + 1].timestamp);
		this.tempoIndex >= t.length && (this.tempoIndex = 0),
			i(this.tempoIndex) ||
				((this.tempoIndex = t.findIndex((e, t) => i(t))),
				-1 === this.tempoIndex && (this.tempoIndex = 0),
				this.props.dispatch("player/tempoApply", t[this.tempoIndex].tempo));
	}
	findLayoutUnderCursor(e) {
		if (
			!this.layout ||
			!(
				this.layoutTimestamp <= e &&
				e < this.layoutTimestamp + this.layout.duration
			)
		) {
			let t = W(this.props.part, e),
				{ timeline: i, timestamps: o } = this.props.part;
			(this.layoutTimestamp = o[t]),
				(this.layout = i.get(this.layoutTimestamp));
			let s = t < o.length - 1 ? o[t + 1] : null,
				a = this.props.player.position.loopEnd;
			return (
				0 !== a &&
					(null === s || s >= a - 1e-15) &&
					(s = this.props.player.position.loopStart),
				(this.nextLayout = null !== s ? i.get(s) : null),
				!0
			);
		}
		return !1;
	}
	animationSeek() {
		var e;
		let t =
			(null === (e = this.props.player.audio) || void 0 === e
				? void 0
				: e.getCursor()) || 0;
		this.findLayoutUnderCursor(t),
			this.applyCursorCoordinates(t),
			this.updateCurrentTempo(t);
	}
	animationPlay() {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
		let e = !1,
			t = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(t);
		let i = this.applyCursorCoordinates(t),
			o = null,
			s = () => {
				let e = this.layout.absoluteLoopRightX - this.layout.absoluteX,
					t = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
					i = ((this.layout.duration * e) / (e + t)) * 0.8;
				return (o = (e) =>
					!!this.layout &&
					!!this.nextLayout &&
					e - this.layoutTimestamp > i &&
					(this.props.ensureLineVisibility(
						this.layout.measureLayout.lineLayout,
						this.nextLayout.measureLayout.lineLayout,
						!1
					),
					(o = null),
					!0));
			};
		(this.nextLayout && s$(this.layout, this.nextLayout) && s()(t)) ||
			this.props.ensureLineVisibility(
				null,
				this.layout.measureLayout.lineLayout,
				!1
			);
		let a = window.requestAnimationFrame,
			n = () => {
				try {
					if (
						(!e && this.props.player.audio.isPositionChanged() && (e = !0), e)
					) {
						let t = this.props.player.audio.getCursor();
						i && i(t),
							o && o(t),
							this.findLayoutUnderCursor(t) &&
								((i = this.applyCursorCoordinates(t)),
								this.nextLayout && s$(this.layout, this.nextLayout) && s(),
								!this.nextLayout &&
									t >= eo(this.layout) - 1e-15 &&
									(this.stopPlayback(), (this.pause = !0))),
							this.updateCurrentTempo(t);
					}
					this.pause || (this.animationPlayId = a(n));
				} catch (r) {
					console.error(r);
				}
			};
		(this.pause = !1), (this.animationPlayId = a(n));
	}
	animationPause() {
		this.pause = !0;
	}
	animationRestart() {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
			(this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0),
			this.animationPlay();
	}
	stopPlayback = () => {
		this.props.dispatch("player/togglePlay", !1);
	};
	moveTo(e) {
		let t = U(e).beatsLayouts;
		this.props.dispatch("player/moveCursor", {
			cursor: Y(t[0]),
			loopStart: this.props.player.position.loopStart,
			loopEnd: this.props.player.position.loopEnd,
		});
	}
	handleBackspace = (e) => {
		e.preventDefault();
		let { loopStart: t, loopEnd: i } = this.props.player.position;
		this.props.dispatch("player/moveCursor", {
			cursor: t,
			loopStart: t,
			loopEnd: i,
		});
	};
	handleLeft = (e) => {
		e.preventDefault();
		let { part: t } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			s = P(t, this.props.player.audio.getCursor(), "left"),
			a = s.measureLayout.measure.index,
			n = s.measureLayout.beatsLayouts[0],
			r = i;
		if (s !== n) {
			let l = Y(n);
			r = l > i ? l : i;
		} else if (a > 0) {
			n = U(t.measures[a - 1]).beatsLayouts[0];
			let p = Y(n),
				u = K(n);
			r = 0 === o || i <= p ? p : i <= u ? u : i;
		}
		this.props.dispatch("player/moveCursor", {
			cursor: r,
			loopStart: i,
			loopEnd: o,
		}),
			n &&
				this.props.ensureLineVisibility(null, n.measureLayout.lineLayout, !1);
	};
	handleRight = (e) => {
		let t;
		e.preventDefault();
		let { part: i } = this.props,
			{ loopStart: o, loopEnd: s } = this.props.player.position,
			a = P(i, this.props.player.audio.getCursor(), "left"),
			n = a.measureLayout.measure.index,
			r = null;
		if (n < i.measures.length - 1) {
			t = U(i.measures[n + 1]).beatsLayouts[0];
			let l = Y(t),
				p = K(t);
			0 === s || p < s ? (r = p) : l < s && (r = l);
		}
		null !== r &&
			(this.props.dispatch("player/moveCursor", {
				cursor: r,
				loopStart: o,
				loopEnd: s,
			}),
			t &&
				this.props.ensureLineVisibility(null, t.measureLayout.lineLayout, !1));
	};
	handleUp = (e) => {
		e.preventDefault();
		let { part: t } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			s = P(t, this.props.player.audio.getCursor(), "left"),
			a = s.measureLayout.lineLayout.line.index;
		if (a > 0) {
			let n = this.props.lines[a - 1],
				r = Q(n, s.absoluteX, "left"),
				l = null,
				p = Y(r),
				u = K(r);
			0 === o || i <= p ? (l = p) : i <= u && (l = u),
				null !== l &&
					(this.props.dispatch("player/moveCursor", {
						cursor: l,
						loopStart: i,
						loopEnd: o,
					}),
					this.props.ensureLineVisibility(
						null,
						r.measureLayout.lineLayout,
						!1
					));
		}
	};
	handleDown = (e) => {
		e.preventDefault();
		let { part: t } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			s = P(t, this.props.player.audio.getCursor(), "left"),
			a = s.measureLayout.lineLayout.line.index;
		if (a < this.props.lines.length - 1) {
			let n = this.props.lines[a + 1],
				r = Q(n, s.absoluteX, "left"),
				l = null,
				p = Y(r),
				u = K(r);
			0 === o || u < o ? (l = u) : p < o && (l = p),
				l &&
					(this.props.dispatch("player/moveCursor", {
						cursor: l,
						loopStart: i,
						loopEnd: o,
					}),
					this.props.ensureLineVisibility(
						null,
						r.measureLayout.lineLayout,
						!1
					));
		}
	};
	handleShiftLoopRight = (e) => {
		let t, i;
		e.preventDefault(), e.stopPropagation();
		let { part: o } = this.props,
			{ loopStart: s, loopEnd: a } = this.props.player.position;
		if (0 === a) return;
		let n = P(o, a, "left"),
			r = n.measureLayout.measure,
			l = this.props.part.measures[r.index + 1];
		if (!l) return;
		let p = U(l).beatsLayouts;
		if (a < Z(p[0])) t = Z((i = p[0]));
		else {
			let u = J(l).beatsLayouts;
			t = ee((i = u[u.length - 1]));
		}
		let h = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: h,
			loopStart: s,
			loopEnd: t,
		}),
			this.props.ensureLineVisibility(null, i.measureLayout.lineLayout, !1);
	};
	handleShiftLoopLeft = (e) => {
		let t, i;
		e.preventDefault(), e.stopPropagation();
		let { part: o } = this.props,
			{ loopStart: s, loopEnd: a } = this.props.player.position;
		if (0 === a) return;
		let n = P(o, a, "left"),
			r = n.measureLayout.measure,
			l = this.props.part.measures[r.index - 1];
		if (!l) return;
		let p = U(r).beatsLayouts;
		if (
			(a > Z(p[0])
				? (t = Z((i = p[0])))
				: ((i = U(l).beatsLayouts[0]), (t = Z(i))),
			s >= t)
		)
			return;
		let u = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: u,
			loopStart: s,
			loopEnd: t,
		}),
			this.props.ensureLineVisibility(null, l.layouts[0].lineLayout, !1);
	};
	render() {
		let e = this.props.lines[0].layout.intervalSize,
			t = (this.props.part.strings - 1) * e + (es + ea),
			i = !(this.props.player.canPlay || this.props.route.isPanel);
		return eY(
			"div",
			{ className: sC.wrap, ref: this.el },
			!this.props.hidden &&
				eY(
					"svg",
					{ width: ei, height: t, className: i ? sC.loading : sC.normal },
					eY(
						"defs",
						{},
						eY(
							"filter",
							{ id: "CursorShadow", x: "-40%", width: "180%" },
							eY("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
							eY("feOffset", { dx: "0", dy: "2" })
						)
					),
					eY(sS, { width: ei, height: t })
				)
		);
	}
}
var sI = s(sz, "player", "route", "browser");
let sD = "Cgh21m",
	sA = "Cgh2b2",
	sj = "Cgh1j0",
	sF = "Cgh16l",
	sR = "Cgh2v6",
	sX = {
		background: "Cgh21m",
		loop: "Cgh2b2",
		shape: "Cgh1j0",
		area: "Cgh16l",
		icon: "Cgh2v6",
	},
	sV = 10,
	sO = 27;
class sq extends eW {
	render() {
		let { x: e, layout: t, handle: i } = this.props,
			o = t.measureLayout.lineLayout,
			s = er(o) + 10,
			a = el(o) - 20,
			n = `translate(${e},${s})`,
			r = "left" === i ? "matrix(-1,0,0,1,1,0)" : "",
			l = Math.floor(a / 2);
		return eY(
			"g",
			{ className: sX.loop, transform: n, "data-loop-handle": i },
			eY("path", {
				d: `M0 ${l - 12}q15 0 15 12t-15 12m1 0v${l - 12}h-2 v-${a}h2z`,
				className: sX.shape,
				transform: r,
			}),
			eY("path", {
				d: `M8 ${l - 4.5}l-4.5 4.5l4.5 4.5`,
				className: sX.icon,
				transform: r,
			}),
			eY("rect", {
				x: -10,
				y: -1,
				height: a,
				width: 27,
				transform: r,
				className: sX.area,
			})
		);
	}
}
class s_ extends eW {
	render() {
		let { leftLayout: e, rightLayout: t, lines: i } = this.props,
			o = e.absoluteLoopLeftX,
			s = t.absoluteLoopRightX,
			a = e.measureLayout.lineLayout,
			n = t.measureLayout.lineLayout,
			r = sX.background;
		if (a === n)
			return eY("rect", {
				className: r,
				rx: 3,
				height: el(a),
				x: o,
				y: er(a),
				width: s - o + 1,
			});
		let l = a.line.index,
			p = n.line.index,
			u = p - l,
			h = Array(u + 1);
		(h[0] = eY("rect", {
			className: r,
			rx: 3,
			height: el(a),
			x: o,
			y: er(a),
			width: a.maxX - o,
			key: l,
		})),
			(h[u] = eY("rect", {
				className: r,
				rx: 3,
				height: el(n),
				x: n.minX,
				y: er(n),
				width: s - n.minX,
				key: p,
			}));
		for (let d = l + 1; d < p; d++) {
			let c = i[d].layout;
			h[d - l] = eY("rect", {
				className: r,
				rx: 3,
				height: el(c),
				x: c.minX,
				y: er(c),
				width: c.maxX,
				key: d,
			});
		}
		return eY("g", null, h);
	}
}
let sH = 5,
	sG = 100,
	sU = "scrollBehavior" in document.documentElement.style,
	sW = (e) => 0.5 * (1 - Math.cos(Math.PI * e));
class sY {
	constructor() {
		(this.y = 0),
			(this.startY = 0),
			(this.startTime = 0),
			(this.scrollId = void 0);
	}
	scroll(e, t, i) {
		if (
			(this.scrollId &&
				(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
			sU)
		)
			window.scrollTo({ left: 0, top: e, behavior: t ? "auto" : "smooth" });
		else {
			let o =
				i ||
				(window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY);
			if (t || 5 >= Math.abs(e - o)) window.scrollTo(0, e);
			else {
				(this.y = e), (this.startY = o), (this.startTime = ep());
				let s = window.requestAnimationFrame;
				this.scrollId = s(this.animationLoop);
			}
		}
	}
	animationLoop = () => {
		let e = sW(Math.min((ep() - this.startTime) / 100, 1)),
			t = this.startY + (this.y - this.startY) * e;
		if ((window.scrollTo(0, t), t !== this.y)) {
			let i = window.requestAnimationFrame;
			this.scrollId = i(this.animationLoop);
		} else this.scrollId = void 0;
	};
	unmount() {
		this.scrollId &&
			(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
	}
}
function sK(e) {
	let { tab: t, tuningButton: i } = e,
		{ device: o } = g("device"),
		s = 0,
		a = 0;
	if (t && i) {
		let n = t.getBoundingClientRect(),
			r = i.getBoundingClientRect();
		(s = r.left - n.left + r.width + 21),
			(a = r.top - n.top - (23 - r.height) - 14.5) < 2 && (a = 2);
	}
	return m(o.os) || C(o.os)
		? eY(tU, {
				title: "Pitch Shift",
				device: o,
				leftOffset: s,
				topOffset: a,
				feature: "pitch shift",
		  })
		: eY(te, {
				title: "Pitch Shift",
				classPrefix: "pitchshift",
				leftOffset: s,
				topOffset: a,
		  });
}
let sQ = "Ceg2uy",
	sZ = "Ceg2gt",
	sJ = "Ceg9t",
	s1 = "Ceghf",
	s0 = "Ceg19o",
	s2 = "Ceg2im",
	s5 = {
		editor: "Ceg2uy",
		correction: "Ceg2gt",
		keyboard: "Ceg9t",
		digit: "Ceghf",
		remove: "Ceg19o",
		zero: "Ceg2im",
	},
	s3 = () => {
		clearTimeout(t), (t = null);
	},
	s4 = 24;
class s7 extends eW {
	formClick = (e) => {
		e.preventDefault(), e.stopPropagation();
	};
	keyHandler = (e) => {
		let { tabEditor: i, dispatch: o } = this.props;
		if (t && 1 === i.fret.length && "0" !== i.fret) {
			let s = `${i.fret}${e}`;
			if ((s3(), 24 >= +s)) {
				o("tabEditor/changeNote", s);
				return;
			}
		}
		o("tabEditor/changeNote", e), (t = setTimeout(() => (t = null), 1e3));
	};
	onDigit = (e) => {
		e.preventDefault(), e.stopPropagation(), this.keyHandler(e.key);
	};
	onDeadNote = (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			s3(),
			this.props.dispatch("tabEditor/changeNote", "X");
	};
	onMobileKeyboard = (e) => () => this.keyHandler(e);
	onBackspace = () => {
		this.props.dispatch("tabEditor/changeNote", ""), s3();
	};
	onRight = () => {
		let { scale: e, dispatch: t } = this.props;
		t("tabEditor/formMove", { scale: e, direction: "right" });
	};
	onLeft = () => {
		let { scale: e, dispatch: t } = this.props;
		t("tabEditor/formMove", { scale: e, direction: "left" });
	};
	onUp = (e) => {
		e.preventDefault(), e.stopPropagation();
		let { scale: t, dispatch: i } = this.props;
		i("tabEditor/formMove", { scale: t, direction: "up" });
	};
	onDown = (e) => {
		e.preventDefault(), e.stopPropagation();
		let { scale: t, dispatch: i } = this.props;
		i("tabEditor/formMove", { scale: t, direction: "down" });
	};
	onEscape = () => {
		this.props.dispatch("layer/hide");
	};
	constructor(e) {
		super(e);
		let { device: t } = e;
		(i = k(t) || m(t.os) || C(t.os)),
			(this.keyMap = {
				right: this.onRight,
				left: this.onLeft,
				up: this.onUp,
				down: this.onDown,
				enter: this.onRight,
				backspace: this.onBackspace,
				delete: this.onBackspace,
				escape: this.onEscape,
				"digits*": this.onDigit,
				"numpad*": this.onDigit,
				x: this.onDeadNote,
			});
	}
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }), s3();
	}
	componentDidUpdate(e) {
		(e.tabEditor.formX !== this.props.tabEditor.formX ||
			e.tabEditor.formY !== this.props.tabEditor.formY) &&
			s3();
	}
	render() {
		let { tabEditor: e, scale: t } = this.props,
			o = {
				top: e.formY - 1,
				left: e.formX + 2.5,
				display: e.positioned ? "block" : "none",
				transform: `scale(${t})`,
				transformOrigin: "left 0px",
			};
		0 !== e.voice && (o.color = "#868686"),
			e.fret !== e.originalFret && "" !== e.fret && (o.color = "#ff3130");
		let s = {
			top: e.formY + 31 * t,
			left: e.formX - 64 * t,
			display: e.positioned ? "flex" : "none",
			transform: `scale(${t})`,
			transformOrigin: "left 0px",
		};
		return eY(
			e0,
			null,
			eY(
				"div",
				{
					id: "note-editor",
					className: s5.editor,
					style: o,
					tabIndex: -1,
					onMouseUp: this.formClick,
				},
				"" === e.fret && "" !== e.originalFret
					? eY(
							e0,
							{},
							e.originalFret,
							eY(
								"svg",
								{ className: s5.correction, width: 25, height: 23 },
								eY("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
							)
					  )
					: e.fret
			),
			i &&
				eY(
					"div",
					{ className: s5.keyboard, style: s },
					eY(
						"button",
						{ className: s5.remove, onClick: this.onBackspace },
						"<-"
					),
					["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
						eY(
							"button",
							{
								key: e,
								className: s5.digit,
								onClick: this.onMobileKeyboard(e),
							},
							e
						)
					),
					eY(
						"button",
						{ className: s5.zero, onClick: this.onMobileKeyboard("0") },
						"0"
					)
				)
		);
	}
}
var s8 = s(s7, "tabEditor", "device");
let s6 = "D28105",
	s9 = "D28105 D2813e",
	ae = "D28105 D2813e D282yy",
	at = "D28105 D28iz",
	ai = "D281qz",
	ao = {
		tablature: "D28105",
		tablatureFullscreen: "D28105 D2813e",
		tablatureFullscreenFree: "D28105 D2813e D282yy",
		tablatureFree: "D28105 D28iz",
		handlers: "D281qz",
	},
	as = "d418f",
	aa = "d41sr",
	an = "d41bt",
	ar = "d42bj",
	al = {
		exitActive: "d418f",
		enterActive: "d41sr",
		enter: "d41bt",
		exit: "d42bj",
	};
async function ap(e) {
	return "IntersectionObserver" in window
		? new Promise((t) => {
				let i = new IntersectionObserver((e) => {
					i.disconnect(), t(e[0].boundingClientRect);
				});
				i.observe(e);
		  })
		: e.getBoundingClientRect();
}
let au = "C351",
	ah = { text: "C351" };
function ad(e) {
	let { text: t, layout: i, xoffset: o } = e,
		s = t.layer;
	if (s) {
		let a = i ? s.x1 - i.absoluteX : s.x1,
			n = -1 * s.y;
		return e1("text", {
			className: ah.text,
			x: a + o,
			y: n,
			dy: "-0.25em",
			children: t.text,
		});
	}
	return null;
}
let ac =
		"M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
	am =
		"M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	ay = "c1.25-.25 2.75-2.25 3-2.75h1z",
	af =
		"c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	ag = "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
	av = `${am}${ay}`,
	ab = `${am}${af}${ay}`,
	ax = `${am}${af}${af}${ay}`,
	aw = `${am}${af}${af}${af}${ay}`,
	aC = `${am}${af}${af}${af}${af}${ay}`,
	ak = "M0-4l9 8m0-8l-9 8",
	aL = "M-2-7l6.5-4l6.5 4",
	aM = "M-2-7h8l5 -5",
	aS = "M0 3l4.7-7 4.7 7z",
	a$ = "M5-4.5l5 4-5 4-5-4 5-4z",
	aT = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
	aN = `${aT}${ak}`,
	aB = `${aT}M9-4L0 4`,
	aP =
		"M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
	aE = `${aP}M-3-6L12 5`,
	az = "M-4 0l16 0";
function aI(e) {
	let t = e.line.layout.intervalSize,
		i = e.line.strings,
		o = (i <= 4 ? t : 0) - 2 * (t - 12),
		s = 0 !== o ? `translate(0, ${-o})` : void 0,
		a = [
			e1("ellipse", { id: "dot", cx: 10, cy: 17.5 - o, rx: 1.5, ry: 1.5 }),
			e1("rect", { id: "rest1", y: 24 - o, x: -6, width: 12, height: 6 }),
			e1("rect", { id: "rest2", y: 18 - o, x: -6, width: 12, height: 6 }),
			e1("path", {
				id: "rest4",
				transform: s,
				d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
			}),
			e1("path", { id: "rest8", transform: s, d: av }),
			e1("path", { id: "rest16", transform: s, d: ab }),
			e1("path", { id: "rest32", transform: s, d: ax }),
			e1("path", { id: "rest64", transform: s, d: aw }),
			e1("path", { id: "rest128", transform: s, d: aC }),
			e1("path", {
				id: "tempo",
				d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
			}),
		],
		n = !this.props.part.usedDrums;
	return e1("defs", {
		children: n
			? a
			: [
					...a,
					e1("path", { id: "drumCross", d: ak }),
					e1("path", {
						id: "drumHat",
						d: "M-2-7l6.5-4l6.5 4",
						style: "fill: none",
					}),
					e1("path", {
						id: "drumHatEdge",
						d: "M-2-7h8l5 -5",
						style: "fill: none",
					}),
					e1("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
					e1("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
					e1("path", { id: "drumCircleCross", d: aN, style: "fill: none" }),
					e1("path", { id: "drumCircleStroke", d: aB, style: "fill: none" }),
					e1("path", { id: "drum", d: aP }),
					e1("path", { id: "drumStroke", d: aE }),
					e1("path", { id: "extraLine", d: "M-4 0l16 0" }),
			  ],
	});
}
let aD = "bh1o4",
	aA = "bh162",
	aj = "bh162 bhth",
	aF = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
	aR = 46;
function aX(e) {
	let { layer: t } = e,
		{ x1: i, x2: o, y: s } = t,
		a = o - i,
		n = -1 * s - 2,
		r = [
			e1(
				"text",
				{ className: aF.text, x: i, y: n, children: "let ring" },
				"let ring"
			),
		];
	return (
		a > 46 &&
			(r.push(
				e1(
					"line",
					{
						className: aF.dotted,
						x1: 46 + i,
						y1: -3 + n,
						x2: a - 2 + i,
						y2: -3 + n,
					},
					"dotted"
				)
			),
			r.push(
				e1(
					"line",
					{ className: aF.line, x1: a + i, y1: 1 + n, x2: a + i, y2: -7 + n },
					"line"
				)
			)),
		e1(e0, { children: r })
	);
}
let aV = "C4a2yy",
	aO = "C4a2ve",
	aq = "C4a2ve C4a1op",
	a_ = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
	aH = 35;
function aG(e) {
	let { layer: t } = e,
		{ x1: i, x2: o, y: s } = t,
		a = -1 * s - 2,
		n = o - i,
		r = [eY("text", { className: a_.text, x: i, y: a, key: "pm" }, "P. M.")];
	return (
		n > 35 &&
			(r.push(
				eY("line", {
					className: a_.dotted,
					x1: 35 + i,
					y1: -3 + a,
					x2: n - 2 + i,
					y2: -3 + a,
					key: "dotted",
				})
			),
			r.push(
				eY("line", {
					className: a_.line,
					x1: n + i,
					y1: 1 + a,
					x2: n + i,
					y2: -7 + a,
					key: "line",
				})
			)),
		eY(e0, null, r)
	);
}
let aU = "q71wu",
	aW = "q72a",
	aY = "q72a q712i",
	aK = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
	aQ = 40;
function aZ(e) {
	let { layer: t, effectValue: i } = e,
		{ x1: o, x2: s, y: a } = t,
		n = s - o,
		r = -1 * a - 2,
		l = "Harm.";
	switch (i) {
		case "artificial":
			l = "A. H.";
			break;
		case "semi":
			l = "S. H.";
			break;
		case "tapped":
			l = "T. H.";
			break;
		case "pinch":
			l = "P. H.";
	}
	let p = [
		e1("text", { className: aK.text, x: o, y: r, children: l }, "Harm."),
	];
	return (
		n > 40 &&
			(p.push(
				e1(
					"line",
					{
						className: aK.dotted,
						x1: 40 + o,
						y1: -3 + r,
						x2: n - 2 + o,
						y2: -3 + r,
					},
					"dotted"
				)
			),
			p.push(
				e1(
					"line",
					{ className: aK.line, x1: n + o, y1: 1 + r, x2: n + o, y2: -7 + r },
					"line"
				)
			)),
		e1(e0, { children: p })
	);
}
let aJ = "C0x28",
	a1 = { path: "C0x28" },
	a0 = 5.5,
	a2 = 14,
	a5 = 2,
	a3 = 3;
function a4(e, t, i, o) {
	let s = `M${t} ${i + 4}l3-3.5`,
		a = `v${o ? 2 : 1}.8l-3 3.5`;
	for (let n = 0; n < e; n++)
		(s += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
			(a += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
	return s + a + "z";
}
function a7(e) {
	let { layer: t, wide: i } = e,
		{ x1: o, x2: s, y: a } = t,
		n = s - o,
		r = a4(n > 14 ? Math.floor((n - 3) / 5.5) : 2, o, -(a + 6), i);
	return e1("path", { className: a1.path, d: r });
}
class a8 extends eW {
	renderEffect = (e, t) => {
		let i = {
			layer: e.layer,
			key: `${e.effect}-${this.props.line.index}-${t}`,
			line: this.props.line,
			effectValue: e.effectValue,
		};
		switch (e.effect) {
			case "letRing":
				return eY(aX, i);
			case "palmMute":
				return eY(aG, i);
			case "harmonic":
				return eY(aZ, i);
			case "vibrato":
				return eY(a7, { ...i, wide: !1 });
			case "wideVibrato":
				return eY(a7, { ...i, wide: !0 });
			default:
				return null;
		}
	};
	render() {
		return eY(e0, null, this.props.line.effects.map(this.renderEffect));
	}
}
function a6(e, t) {
	return () => e;
}
let a9 = (e) => a6(0);
function ne(e) {
	let { note: t, beat: i, part: o, x: s, edited: a, platform: n } = e,
		{ intervalSize: r } = i.layout.measureLayout.lineLayout;
	if (!eu(t) && (!a || (a && t.bogus))) return null;
	let l = `translate(${s}, 0)`;
	if (i.rest) {
		if (i.layout.usedStrings || (0 !== i.voice && i.layout.usedRest))
			return null;
		let p = eh[`rest${i.voice}`],
			u = e1(
				"use",
				{ className: p, xlinkHref: `#rest${i.type}`, transform: l },
				"rest"
			);
		if (i.dotted) {
			let h = e1(
				"use",
				{ className: p, xlinkHref: "#dot", transform: l },
				"dot"
			);
			return e1(e0, { children: [u, h] });
		}
		return u;
	}
	if (o.usedDrums && o.isDrumStdOn) {
		let d = eh[`drums${i.voice}`],
			c = `translate(${s}, ${0.5 + r * t.string})`,
			m = t.orientation ? c : c + " translate(-10, 0)";
		return e1(e0, {
			children: [
				(t.string <= -1 || t.string >= 5) &&
					e1(ed, {
						noteString: t.string,
						className: ec.strings,
						noteTransform: m,
						intervalSize: r,
					}),
				1 !== i.type &&
					e1("path", {
						className: eh[`stick${i.voice}`],
						transform: c,
						d: em(t.fret, t.string, r),
					}),
				(t.tie || t.ghost) &&
					e1("text", { x: s - 6, y: r * t.string + a9()(n) + 5 }, "("),
				e1(ey, { fret: t.fret, className: d, transform: m }),
				(t.tie || t.ghost) &&
					e1("text", { x: s + 11, y: r * t.string + a9()(n) + 5 }, ")"),
			],
		});
	}
	let y = "",
		f = 0,
		g = o.usedDrums;
	if (g) {
		let v = o.usedDrums.get(t.fret);
		v && ((y = v.name || "*"), (f = v.string || 0));
	} else (y = t.dead ? "X" : t.fret.toString()), (f = t.string);
	let b = eh[`${g ? "vDrum" : "voice"}${i.voice}`];
	a && (b = `${b} ${eh.edited}`);
	let x = {
			className: b,
			x: s,
			y: r * f + a9()(n),
			children: t.tie || t.ghost ? `(${y})` : y,
			style: {},
		},
		w = e1("text", x, "text");
	if (t.harmonic) {
		let C = e1(
			"path",
			{
				className: eh.harmonic,
				transform: `translate(${s - 17}, ${-3.5 + r * f} )`,
				d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
			},
			"harmonic"
		);
		return e1(e0, { children: [C, w] });
	}
	return w;
}
let nt = "B642k5",
	ni = { slur: "B642k5" };
function no(e, t, i, o, s, a) {
	let n = t ? ev(t, eb) : 0,
		r = s - n - (i ? ev(i, eb) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		p = Math.max(a - 4, 3),
		u = p - 1;
	return `M${n + e} ${a * o - 7}c${l}-${p} ${r - l}-${p} ${r} 0c-${l}-${u}-${
		r - l
	}-${u}-${r} 0z`;
}
function ns(e) {
	let { x: t, start: i, end: o, slicingMode: s } = e;
	if (o) {
		let a = ef(o).beat,
			n = eg(o).beat,
			r = eg(o).note;
		if (n.layout && a.layout) {
			let l = s.getTieSlurPathLength(a, n, !0),
				{ intervalSize: p } = a.layout.measureLayout.lineLayout;
			return e1("path", {
				className: ni.slur,
				d: no(t - l, null, r, r.string, l, p),
			});
		}
	} else if (i) {
		let u = ef(i).beat,
			h = eg(i).beat,
			d = ef(i).note,
			c = eg(i).note;
		if (h.layout && u.layout) {
			let m = s.areBeatsInSameSlice(u, h),
				y = s.getTieSlurPathLength(u, h, !1),
				{ intervalSize: f } = u.layout.measureLayout.lineLayout;
			return e1("path", {
				className: ni.slur,
				d: no(t, d, m ? c : null, d.string, y, f),
			});
		}
	}
	return null;
}
let na = "Bbl9p",
	nn = { tie: "Bbl9p" };
function nr(e, t, i, o, s, a) {
	let n = t ? ev(t, ex) : 0,
		r = s - n - (i ? ev(i, ex) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		p = Math.max(a - 5, 3),
		u = p - 1;
	return `M${n + e} ${a * o + 7}c${l} ${p} ${r - l} ${p} ${r} 0c-${l} ${u}-${
		r - l
	} ${u}-${r} 0z`;
}
function nl(e) {
	let { x: t, start: i, end: o, slicingMode: s } = e;
	if (o) {
		let a = ef(o).beat,
			n = eg(o).beat,
			r = eg(o).note;
		if (n.layout && a.layout) {
			let l = s.getTieSlurPathLength(a, n, !0),
				p = r.string,
				{ intervalSize: u } = a.layout.measureLayout.lineLayout;
			return e1("path", { className: nn.tie, d: nr(t - l, null, r, p, l, u) });
		}
	}
	if (i) {
		let h = ef(i).beat,
			d = eg(i).beat,
			c = ef(i).note,
			m = eg(i).note;
		if (d.layout && h.layout) {
			let y = s.areBeatsInSameSlice(h, d),
				f = s.getTieSlurPathLength(h, d, !1),
				{ intervalSize: g } = h.layout.measureLayout.lineLayout,
				v = c.string;
			return e1("path", {
				className: nn.tie,
				d: nr(t, c, y ? m : null, v, f, g),
			});
		}
	}
	return null;
}
function np(e, t) {
	if ((e.x1 === e.x2 && e.y1 === e.y2) || (t.x1 === t.x2 && t.y1 === t.y2))
		return null;
	let i = (t.y2 - t.y1) * (e.x2 - e.x1) - (t.x2 - t.x1) * (e.y2 - e.y1);
	if (0 === i) return null;
	let o = ((t.x2 - t.x1) * (e.y1 - t.y1) - (t.y2 - t.y1) * (e.x1 - t.x1)) / i,
		s = ((e.x2 - e.x1) * (e.y1 - t.y1) - (e.y2 - e.y1) * (e.x1 - t.x1)) / i;
	if (o < 0 || o > 1 || s < 0 || s > 1) return null;
	let a = e.x1 + o * (e.x2 - e.x1),
		n = e.y1 + o * (e.y2 - e.y1);
	return { x: a, y: n };
}
function nu(e, t, i) {
	let o = np(e, { x1: t, y1: 1e3, x2: t, y2: -1e3 }),
		s = np(e, { x1: i, y1: 1e3, x2: i, y2: -1e3 });
	return {
		x1: o ? o.x : e.x1,
		y1: o ? o.y : e.y1,
		x2: s ? s.x : e.x2,
		y2: s ? s.y : e.y2,
	};
}
let nh = "zy1tz",
	nd = { slide: "zy1tz" };
function nc(e) {
	let { x: t, cfx: i, note: o } = e,
		{ intervalSize: s } = o.beat.layout.measureLayout.lineLayout,
		a = ef(i).beat,
		n = eg(i).beat;
	if (!n.layout || !a.layout) return null;
	let r = ef(i).note,
		l = eg(i).note,
		p = r.string,
		u = r.fret >= l.fret ? -2 : 2,
		h = ew(a, o.beat),
		d = ew(a, a),
		c = ew(a, n),
		m = {
			x1: t + d - h + ev(r, eC),
			y1: s * p + u,
			x2: t + c - h - ev(l, eC),
			y2: s * p - u,
		},
		y = nu(m, eL(o.beat.layout), ek(o.beat.layout));
	return e1("line", { className: nd.slide, ...y });
}
let nm = "Bxm1ag",
	ny = { arrow: "Bxm1ag" };
function nf(e) {
	let { x: t, y: i, up: o } = e;
	return e1("path", {
		className: ny.arrow,
		d: `M ${t},${i} l 2,${o ? 5 : -5} -4,0 2,${o ? -5 : 5}`,
	});
}
let ng = "C9k1hh",
	nv = "C9k17",
	nb = { up: "C9k1hh", down: "C9k17" },
	nx = ["\xbc", "\xbd", "\xbe"],
	nw = a6(4),
	nC = a6(11);
function nk(e) {
	if (100 === e) return "full";
	if (e) {
		let t = "",
			i = Math.floor(e / 100);
		i && (t += i);
		let o = e % 100;
		return o >= 25 && (t += nx[Math.floor(o / 25) - 1]), t;
	}
	return "";
}
function nL(e) {
	let { x: t, y: i, up: o, tone: s, platform: a } = e;
	return e1("text", {
		className: o ? nb.up : nb.down,
		x: t,
		y: o ? i - nw(a) : i + nC(a),
		children: nk(s),
	});
}
let nM = "Cs020",
	nS = "Cs04d",
	n$ = "Cs04d Cs0dp",
	nT = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function nN(e, t, i, o, s, a) {
	return [
		e1(
			"line",
			{ className: nT.prebend, x1: i, y1: o + e$, x2: i, y2: s },
			`prebend-${e}`
		),
		e1(nf, { x: i, y: s, up: !0 }, `arrow-${e}`),
		e1(nL, { tone: t, x: i, y: s, up: !0, platform: a }, `y-${e}`),
	];
}
function nB(e, t, i, o, s, a) {
	return t <= 0
		? null
		: [
				e1(
					"line",
					{ className: nT.hold, x1: i, y1: o, x2: s, y2: a },
					`hold-${e}`
				),
		  ];
}
function nP(e, t) {
	if (!e) return !1;
	let i = ef(e).note,
		o = i.bend;
	if (!o) return !1;
	let s = o.points,
		a = s.length;
	return !(a < 1) && s[a - 1].tone === t;
}
function nE(e) {
	if (!e) return !1;
	let t = ef(e).note,
		i = t.bend;
	if (!i) return !1;
	let o = i.points,
		s = o.length;
	if (s < 2) return !1;
	let a = o[s - 2].tone,
		n = o[s - 1].tone;
	return n === a;
}
function nz(e, t, i, o, s, a, n, r, l, p) {
	let u = l < n,
		h = t.prevNoteOnString,
		d = h && !!h.bendEnd,
		c = h && (!!h.bendStart || !!h.bendPart || !!h.bendEnd),
		m = h && nE(h.bendEnd) && nP(h.bendEnd, 0),
		y = t.tie && d && !m && nP(h.bendEnd, i) && 0 !== i,
		f = s !== a || 0 !== i || (y && c) ? 0 : ev(t, eS),
		g = [
			e1(
				"path",
				{
					className: nT.path,
					d: `M${a + f},${n}Q${r},${n} ${r},${u ? l + 4 : l - 4}`,
				},
				`bend-${e}`
			),
			e1(nf, { x: r, y: l, up: u }, `arrow-${e}`),
		];
	return (
		0 !== o &&
			g.push(e1(nL, { tone: o, x: r, y: l, up: u, platform: p }, `y-${e}`)),
		g
	);
}
function nI(e, t, i, o, s) {
	return {
		elements: t ? [...e.elements, t] : e.elements,
		prevTone: i,
		prevX: o,
		prevY: s,
	};
}
function nD(e, t, i, o, s) {
	let a = eM + o * e.string;
	return function (o, n, r) {
		let { tone: l, position: p } = n,
			u = 0 === l ? a : eM - l / eT;
		if (0 === r) {
			if (!e.tie && 0 !== l) {
				let h = nN(r, l, t, a, u, s);
				return nI(o, h, l, t, u);
			}
			return nI(o, null, l, t, 0 !== l ? u : a);
		}
		let { prevTone: d, prevX: c, prevY: m } = o,
			y = (i * p) / 60 + t;
		if (l === d) {
			let f = nB(r, l, c, u, y, u);
			return nI(o, f, l, y, u);
		}
		let g = nz(r, e, d, l, t, c, m, y, u, s);
		return nI(o, g, l, y, u);
	};
}
function nA(e) {
	let { cfx: t, note: i, slicingMode: o, x: s, platform: a } = e,
		n = ef(t).note,
		r = n.bend;
	if (!r) return null;
	let { x1: l, x2: p } = o.getBendCoordinates(t, i),
		u = i.beat.layout.measureLayout.lineLayout.intervalSize,
		{ elements: h } = r.points.reduce(nD(n, l + s, p - l, u, a), {
			elements: [],
			prevTone: 0,
			prevX: 0,
			prevY: 0,
		});
	return e1(e0, { children: h });
}
let nj = "ls209",
	nF = { lyrics: "ls209" };
function nR(e) {
	let { lyrics: t, x: i } = e,
		o = t.layer;
	if (o) {
		let s = eN(t) + i + o.diff;
		return e1("text", {
			className: nF.lyrics,
			x: s,
			y: o.y + o.height,
			children: t.text,
		});
	}
	return null;
}
let nX = 15;
function nV(e) {
	let { note: t, x: i, type: o } = e,
		{ intervalSize: s } = t.beat.layout.measureLayout.lineLayout,
		a = t.string,
		n = "left" === o ? -1 : 1,
		r = "upwards" === t.rightSlide ? 1 : -1;
	"left" === o && (r = "above" === t.leftSlide ? 1 : -1);
	let l = ev(t, eC);
	return e1("line", {
		className: nd.slide,
		x1: n * l + i,
		y1: s * a + 2 * r,
		x2: n * (l + 15) + i,
		y2: s * a - 2 * r,
	});
}
let nO = "Cge206",
	nq = "Cgen4",
	n_ = "Cge2e0",
	nH = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function nG(e) {
	let { fret: t, x: i, string: o, originalFret: s, intervalSize: a } = e;
	if ("" === s) {
		let n = t.length >= 2 ? 11.5 : 7.5;
		return e1(e0, {
			children: [
				e1("line", {
					className: nH.background,
					x1: i - n,
					y1: a * o,
					x2: i + n,
					y2: a * o,
				}),
				e1("text", {
					className: nH.note,
					x: i,
					y: a * o,
					children: t,
					"data-fret": t,
				}),
			],
		});
	}
	let r = 10;
	return (
		t.length >= 2 && (r += 3),
		s.length >= 2 && (r += 4),
		e1(e0, {
			children: [
				"" !== t &&
					e1("text", {
						className: nH.note,
						x: i + r,
						y: a * o - 4,
						children: t,
						"data-fret": t,
					}),
				e1("line", {
					className: nH.correction,
					x1: i - 4,
					y1: a * o - 7,
					x2: i + 4,
					y2: a * o + 4,
				}),
			],
		})
	);
}
let nU = "B112ie",
	nW = "B11yc",
	nY = "B112vw",
	nK = "B11g5",
	nQ = "B112gh",
	nZ = "B111x2",
	nJ = {
		index: "B112ie",
		middle: "B11yc",
		ring: "B112vw",
		pinky: "B11g5",
		thumb: "B112gh",
		text: "B111x2",
	},
	n1 = 0,
	n0 = 8,
	n2 = 12,
	n5 = [nJ.index, nJ.middle, nJ.ring, nJ.pinky];
function n3(e) {
	let { fingerL: t, string: i, x: o, fret: s } = e,
		a = n5[t - 1] || nJ.index,
		n = 8;
	return (
		"number" == typeof s && Math.floor(s / 10) > 0 && (n = 12),
		eY("circle", { className: a, cx: o + n, cy: eB * i + 0, r: 3 })
	);
}
let n4 = "ek2k6",
	n7 = "ek2wd",
	n8 = "ek188",
	n6 = "ek188 ekfs",
	n9 = "ek2i4",
	re = "ek2i4 ek2z7",
	rt = "ek2zh",
	ri = "ek2ic",
	ro = "ekka",
	rs = "ek2wg",
	ra = {
		chord: "ek2k6",
		hat: "ek2wd",
		tapping: "ek188",
		tappingSecondVoice: "ek188 ekfs",
		accentuated: "ek2i4",
		accentuatedSecondVoice: "ek2i4 ek2z7",
		staccato: "ek2zh",
		staccatoSecondVoice: "ek2ic",
		arrowLine: "ekka",
		arrowPolygon: "ek2wg",
	},
	rn = 30,
	rr = 4;
function rl(e) {
	let { up: t, min: i, max: o, xoffset: s, intervalSize: a } = e,
		n = (o - i + 1) * a,
		r = t ? 4 : n - 4,
		l = t ? 0 : n,
		p = (i - 0.5) * a,
		u = s - 15;
	return e1(e0, {
		children: [
			e1(
				"line",
				{
					className: ra.arrowLine,
					x1: 4 + u,
					y1: p,
					x2: 4 + u,
					y2: (o + 0.5) * a,
				},
				"line"
			),
			e1(
				"polygon",
				{
					className: ra.arrowPolygon,
					points: `${4 + u},${l + p} ${0 + u},${r + p} ${8 + u},${r + p} ${
						4 + u
					},${l + p}`,
				},
				"polygon"
			),
		],
	});
}
function rp(e) {
	let t = [],
		{
			layout: i,
			part: o,
			measure: s,
			slicingMode: a,
			measureEditorData: n,
			measureFingerings: r,
			platform: l,
			x: p,
		} = e,
		u = p + i.x;
	for (let h of i.beats)
		if (h.lyrics)
			for (let d of h.lyrics)
				t.push(e1(nR, { lyrics: d, x: u }, `lyrics${h.index}`));
		else {
			h.text &&
				t.push(
					e1(ad, { text: h.text, layout: i, xoffset: u }, `text${h.index}`)
				);
			let c = h.tappingWithLayer;
			c &&
				c.layer &&
				t.push(
					e1(
						"text",
						{
							className: ra.tapping,
							y: -1 * c.layer.y,
							x: Math.max(-1 * Math.floor(c.width / 2) + u, -15),
							dy: "-0.25em",
							children: c.text,
						},
						`tap${h.index}`
					)
				);
			let m = h.chord;
			m &&
				m.layer &&
				t.push(
					e1(
						"text",
						{
							className: ra.chord,
							y: -1 * m.layer.y,
							x: Math.max(-1 * Math.floor(m.width / 2) + u, -15),
							dy: "-0.25em",
							children: m.text,
						},
						`chord${h.index}`
					)
				);
			let y = Number.MAX_VALUE,
				f = 0;
			if (!s.rest) {
				if (o.usedDrums) {
					let g = h.notes
						.filter((e) => !e.bogus)
						.map((e) => ({ string: Math.floor(2 * e.string), note: e }));
					g.sort((e, t) => e.string - t.string);
					let v = null;
					for (let b of g)
						(b.note.orientation =
							!(v && 1 >= Math.abs(b.string - v.string)) ||
							!v.note.orientation),
							(v = b);
				}
				h.hat &&
					o.isDrumStdOn &&
					t.push(
						e1(
							"path",
							{ className: ra.hat, d: `M${u - 2}${-h.hat.layer.y}h8l5 -5` },
							`hat${h.index}`
						)
					);
				let x =
						n && n.find((e) => e.beatNum === h.index && e.voice === h.voice),
					w = x && x.editedNotes;
				for (let C of (h.staccato &&
					h.staccato.layer.visible &&
					t.push(
						e1(
							"circle",
							{
								className: h.staccato.layer.voice
									? ra.staccatoSecondVoice
									: ra.staccato,
								cx: u,
								cy: -h.staccato.layer.y - 5,
								r: 2,
							},
							`st${h.index}`
						)
					),
				h.accentuated &&
					h.accentuated.layer.visible &&
					t.push(
						e1(
							"path",
							{
								className: h.accentuated.layer.voice
									? ra.accentuatedSecondVoice
									: ra.accentuated,
								d: `m${u - 5}${-h.accentuated.layer.y - 2}l9-3l-9-3`,
							},
							`acc${h.index}`
						)
					),
				h.heavyAccentuated &&
					h.heavyAccentuated.layer.visible &&
					t.push(
						e1(
							"path",
							{
								className: h.heavyAccentuated.layer.voice
									? ra.accentuatedSecondVoice
									: ra.accentuated,
								d: `m${u - 4}${
									-h.heavyAccentuated.layer.y - 2
								}l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
							},
							`hacc${h.index}`
						)
					),
				h.notes)) {
					(h.upStroke || h.downStroke) &&
						!C.tie &&
						((y = Math.min(y, C.string)), (f = Math.max(f, C.string))),
						t.push(
							e1(
								ne,
								{
									note: C,
									beat: h,
									part: o,
									x: u,
									platform: l,
									edited: w && !!w.find((e) => e.string === C.string),
								},
								`note${h.index}-${C.index}-voice${h.voice}`
							)
						),
						C.tieStart &&
							t.push(
								e1(
									nl,
									{ start: C.tieStart, slicingMode: a, x: u },
									`tie${h.index}-${C.index}`
								)
							),
						C.tieEnd &&
							eP(C.tieEnd) &&
							t.push(
								e1(
									nl,
									{ end: C.tieEnd, slicingMode: a, x: u },
									`tieEnd${h.index}-${C.index}`
								)
							),
						C.slurStart &&
							t.push(
								e1(
									ns,
									{ start: C.slurStart, slicingMode: a, x: u },
									`slur${h.index}-${C.index}`
								)
							),
						C.slurEnd &&
							eP(C.slurEnd) &&
							t.push(
								e1(
									ns,
									{ end: C.slurEnd, slicingMode: a, x: u },
									`slurEnd${h.index}-${C.index}`
								)
							),
						C.leftSlide &&
							t.push(
								e1(nV, {
									note: C,
									type: "left",
									key: `slideShortLeft${h.index}-${C.index}`,
									x: u,
								})
							),
						C.rightSlide &&
							"shift" !== C.rightSlide &&
							"legato" !== C.rightSlide &&
							t.push(
								e1(nV, {
									note: C,
									type: "right",
									key: `slideShortRight${h.index}-${C.index}`,
									x: u,
								})
							),
						C.slideStart &&
							t.push(
								e1(
									nc,
									{ note: C, cfx: C.slideStart, x: u },
									`slide${h.index}-${C.index}`
								)
							),
						C.slideEnd &&
							eP(C.slideEnd) &&
							t.push(
								e1(
									nc,
									{ note: C, cfx: C.slideEnd, x: u },
									`slideEnd${h.index}-${C.index}`
								)
							);
					let k = a.bendsForNote(C);
					for (let L = 0; L < k.length; L++) {
						let M = k[L];
						a.shouldDrawBendOnNote(M, C) &&
							t.push(
								e1(
									nA,
									{ cfx: M, note: C, slicingMode: a, x: u, platform: l },
									`bend${h.index}-${C.index}-${L}`
								)
							);
					}
					let S = null == r ? void 0 : r.find((e) => e.index === h.index),
						$ =
							null == S
								? void 0
								: S.fingerings.find((e) => e.string === C.string);
					$ &&
						t.push(
							e1(
								n3,
								{ fingerL: $.fingerL, x: u, string: C.string, fret: C.fret },
								`finger${h.index}-${C.index}`
							)
						);
				}
				if (w) {
					let T = i.measureLayout.lineLayout.intervalSize;
					w.forEach((e) =>
						t.push(
							e1(
								nG,
								{
									x: u,
									fret: e.fret,
									originalFret: e.originalFret,
									string: e.string,
									intervalSize: T,
								},
								`editedNote${h.index}-${e.string}`
							)
						)
					);
				}
				if (!o.usedDrums && (h.upStroke || h.downStroke) && y < f) {
					let N = i.measureLayout.lineLayout.intervalSize;
					t.push(
						e1(
							rl,
							{ up: !!h.upStroke, min: y, max: f, xoffset: u, intervalSize: N },
							`stroke${h.index}`
						)
					);
				}
			}
		}
	return e1(e0, { children: t });
}
let ru = "rw256",
	rh = "rw2jc",
	rd = "rw33j",
	rc = { path: "rw256", text: "rw2jc", line: "rw33j" },
	rm =
		"M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
	ry =
		"M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
	rf = "M37 27v-1h10v1zm0 3v-1h10v1z",
	rg = "M.8 0h15v3.5H.8z",
	rv = "M8.8 0h7v3.5h-7z",
	rb = "M51 7V4h9m7 0h9v3";
function rx(e) {
	let {
		tripletFeel: { feel: t, layer: i },
		x: o,
	} = e;
	if (!i) return null;
	let { y: s } = i,
		a = "off" === t,
		n = "16th" === t;
	return eY(
		"g",
		{ transform: `translate(${o},-${s + 42})` },
		eY("path", { d: rm, transform: "translate(10,10)", className: rc.path }),
		eY("path", { d: rm, transform: "translate(25,10)", className: rc.path }),
		eY("path", { d: rg, transform: "translate(18,10)", className: rc.path }),
		n &&
			eY("path", { d: rg, transform: "translate(18,15)", className: rc.path }),
		eY("path", { d: rm, transform: "translate(48,10)", className: rc.path }),
		eY("path", { d: rm, transform: "translate(63,10)", className: rc.path }),
		(a || n) &&
			eY("path", { d: rg, transform: "translate(56,10)", className: rc.path }),
		n &&
			eY("path", {
				d: "M8.8 0h7v3.5h-7z",
				transform: "translate(56,15)",
				className: rc.path,
			}),
		"8th" === t &&
			eY("path", {
				d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
				transform: "translate(63,10)",
				className: rc.path,
			}),
		!a && eY("text", { className: rc.text, x: 64, y: 0 }, 3),
		!a && eY("path", { className: rc.line, d: "M51 7V4h9m7 0h9v3" }),
		eY("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: rc.path })
	);
}
let rw = "Gy73",
	rC = "Gy2no",
	rk = "Gy8f",
	rL = "Gy1lf",
	rM = "Gy1fk",
	rS = "Gy1ax",
	r$ = "Gy4w",
	rT = "Gybj",
	rN = {
		voice0: "Gy73",
		voice1: "Gy2no",
		voice2: "Gy8f",
		voice3: "Gy1lf",
		"voice0-tremolo": "Gy1fk",
		"voice1-tremolo": "Gy1ax",
		"voice2-tremolo": "Gy4w",
		"voice3-tremolo": "Gybj",
	},
	rB = 4,
	rP = 8;
function rE(e) {
	let { voice: t, beats: i, x: o, y: s, tremoloOffset: a } = e;
	if (t.hasSameRhythm) return null;
	let n = ez + a,
		r = n / 2,
		l = "",
		p = "",
		u = 0,
		h = [],
		d = [, , , ,],
		c = !1,
		m = 0;
	for (let y of i) {
		let f = y.layout.x;
		1 !== y.type &&
			(l +=
				2 === y.type
					? `M${o + f},${s + r + 2}v${r}`
					: `M${o + f},${s + 2}v${n}`);
		let g = 0,
			v = 8;
		if (
			(y.beamStart ? (c = !0) : y.beamStop && (c = !1), c && m < i.length - 1)
		) {
			let b = i[m + 1],
				x = Math.min(y.type, b.type);
			for (y.tupletStop && (x = Math.min(x, 8)); v <= x; ) {
				let w = d[g];
				w
					? (w.length += b.layout.x - y.layout.x)
					: ((w = { x: f, length: b.layout.x - y.layout.x }), (d[g] = w)),
					g++,
					(v *= 2);
			}
		}
		let C = g,
			k = g < u || y.tupletStop || y.beamStop;
		for (; g < u; g++, v *= 2) {
			let L = d[g];
			(d[g] = void 0),
				L && (l += `M${o + L.x},${s + n - eE * g}v2h${L.length}v-2z`);
		}
		for (; v <= y.type; g++, v *= 2)
			l += `M${o + f},${s + n - eE * g}v2h${k ? "-7" : "7"}v-2z`;
		if (
			(y.dotted &&
				1 !== y.type &&
				(l += `M${o + f + 4},${s + n - eE * g}v2h2v-2z`),
			y.tremolo)
		)
			for (let M = 0; M < y.tremolo.type; M++)
				p += `M${o + f - 5},${s + 6 + 3 * M}l10-3z`;
		(u = C), m++;
	}
	if (l.length) {
		let S = `voice${t.index}`;
		h.push(e1("path", { className: rN[S], d: l }));
	}
	if (p.length) {
		let $ = `voice${t.index}-tremolo`;
		h.push(e1("path", { className: rN[$], d: p }));
	}
	return h.length ? e1(e0, { children: h }) : null;
}
let rz = "Bhq244",
	rI = "Bhq1lk",
	rD = "Bhq8x",
	rA = "Bhq1hy",
	rj = "Bhq13i",
	rF = "Bhq2w3",
	rR = {
		path: "Bhq244",
		text: "Bhq1lk",
		voice0: "Bhq8x",
		voice1: "Bhq1hy",
		voice2: "Bhq13i",
		voice3: "Bhq2w3",
	},
	rX = a6(9);
function rV(e) {
	let {
			tuplet: t,
			voice: i,
			start: o,
			stop: s,
			platform: a,
			x: n,
			y: r,
			tremoloOffset: l,
		} = e,
		p = o.layout.x + n,
		u = s.layout.x - o.layout.x,
		h = Math.round(u / 2),
		d = t > 9 ? 8 : 5,
		c = `M 0,0 L 0,6 ${h - d},6 M ${h + d},6 L ${u},6 ${u},0`;
	r += eI - 2 + l;
	let m = `voice${i.index}`;
	return e1("g", {
		className: rR[m],
		transform: `translate(${p},${r})`,
		children: [
			e1("text", { className: rR.text, x: h, y: rX(a), children: t }),
			e1("path", { className: rR.path, d: c }),
		],
	});
}
let rO = "Chi2a3",
	rq = "Chi2up",
	r_ = { path: "Chi2a3", text: "Chi2up" };
function rH(e) {
	let { layer: t, alternateEnding: i } = e.alternateEnding;
	if (t) {
		let { x1: o, x2: s, y: a } = t,
			n = s - o,
			r = e.x;
		return e.isFirstLayout
			? eY(
					"g",
					{ transform: `translate(${r},${-1 * a - 14})` },
					eY("text", { className: r_.text, x: 4, y: "14" }, i.join(",")),
					eY("path", { className: r_.path, d: `M 1,14 L 1,0 ${n - 6},0` })
			  )
			: eY(
					"g",
					{ transform: `translate(${r},${-1 * a - 14})` },
					eY("path", { className: r_.path, d: `M 1,0 L ${n - 6},0` })
			  );
	}
	return null;
}
let rG = "kw1ty",
	rU = { marker: "kw1ty" };
function rW(e) {
	let { marker: t, x: i } = e,
		o = t.layer;
	return o
		? e1("text", {
				className: rU.marker,
				x: i,
				y: -1 * o.y,
				dy: "-0.25em",
				children: t.text,
		  })
		: null;
}
let rY = "Bjniz",
	rK = "Bjnch",
	rQ = "Bjn2ws",
	rZ = "Bjnzo",
	rJ = { rect: "Bjniz", dot: "Bjnch", number: "Bjn2ws", path: "Bjnzo" };
function r1(e) {
	let { line: t, x: i } = e,
		{ intervalSize: o } = t.layout,
		s = (t.strings - 1) * o;
	return eY(
		"g",
		{ className: "Rep", transform: `translate(${i},0)` },
		eY("rect", { className: rJ.rect, width: 4, height: s }),
		eY("path", { className: rJ.path, d: `M 8,0 L 8,${s}` }),
		eY("ellipse", {
			className: rJ.dot,
			cx: 13,
			cy: Math.floor(s / 3),
			rx: 2,
			ry: 2,
		}),
		eY("ellipse", {
			className: rJ.dot,
			cx: 13,
			cy: Math.floor((2 * s) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
function r0(e) {
	let { line: t, measureLayout: i, x: o } = e,
		{ intervalSize: s } = t.layout,
		a = (t.strings - 1) * s,
		n = i.measure.repeat;
	return eY(
		"g",
		{ transform: `translate(${i.width - 18 + o},0)` },
		n > 2 && eY("text", { className: rJ.number, x: 2.5, y: -2 }, n + "x"),
		eY("rect", { className: rJ.rect, x: 14, width: 4, height: a }),
		eY("path", { className: rJ.path, d: `M 11,0 L 11,${a}` }),
		eY("ellipse", {
			className: rJ.dot,
			cx: 6,
			cy: Math.floor(a / 3),
			rx: 2,
			ry: 2,
		}),
		eY("ellipse", {
			className: rJ.dot,
			cx: 6,
			cy: Math.floor((2 * a) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
let r2 = "Cpu2zi",
	r5 = "Cpu351",
	r3 = "Cpu1y8",
	r4 = "Cpujn",
	r7 = {
		number: "Cpu2zi",
		signature: "Cpu351",
		tempo: "Cpu1y8",
		tempoText: "Cpujn",
	},
	r8 = a6(-8),
	r6 = a6(21);
function r9(e) {
	let {
			measureLayout: t,
			line: i,
			part: o,
			slicingMode: s,
			measureEditorData: a,
			measureFingering: n,
			platform: r,
		} = e,
		l = t.measure,
		p = t.x,
		u = t.lineLayout.intervalSize,
		h = U(l) === t,
		d = J(l) === t,
		c = [];
	if (h) {
		c.push(
			e1(
				"text",
				{ className: r7.number, x: 3 + p, y: -7.2, children: l.index + 1 },
				"number"
			)
		),
			l.repeatStart && c.push(e1(r1, { line: i, x: p }, "repeatStart"));
		let m = l.tripletFeelWithLayer;
		m && c.push(e1(rx, { tripletFeel: m, x: p }, "tripletFeel"));
	}
	for (let y of (d &&
		l.repeat &&
		c.push(e1(r0, { line: i, measureLayout: t, x: p }, "repeat")),
	t.alternateEndingWithLayer &&
		c.push(
			e1(
				rH,
				{ alternateEnding: t.alternateEndingWithLayer, isFirstLayout: h, x: p },
				"alternateEnding"
			)
		),
	h &&
		l.markerWithLayer &&
		c.push(e1(rW, { marker: l.markerWithLayer, x: p }, "marker")),
	t.tempoLayouts.values())) {
		let { tempo: f, layer: g } = y;
		f &&
			g &&
			c.push(
				e1(
					"g",
					{
						className: r7.tempo,
						transform: `translate(${g.x1},${-1 * g.y})`,
						children: [
							e1("use", { xlinkHref: "#tempo" }),
							e1("text", {
								className: r7.tempoText,
								y: -3,
								x: 8,
								children: `=${f.bpm}`,
							}),
						],
					},
					"tempo"
				)
			);
	}
	let v = 0;
	for (let b of t.beatsLayouts) {
		let x = null == n ? void 0 : n.voices[0].beats;
		c.push(
			e1(
				rp,
				{
					layout: b,
					part: o,
					measure: l,
					slicingMode: s,
					x: p,
					measureEditorData: a,
					measureFingerings: x,
					platform: r,
				},
				`beat${v}`
			)
		),
			v++;
	}
	if (h && l.hasSignature) {
		let w = Math.floor((o.strings / 2) * u);
		c.push(
			e1(
				"text",
				{
					className: r7.signature,
					x: t.signatureOffset + p,
					y: w + r8(r),
					children: l.signature[0],
				},
				"t1"
			)
		),
			c.push(
				e1(
					"text",
					{
						className: r7.signature,
						x: t.signatureOffset + p,
						y: w + r6(r),
						children: l.signature[1],
					},
					"t2"
				)
			);
	}
	if (l.rhythmLines) {
		let C = 0,
			k = u * i.strings;
		for (let L of l.voices)
			if (!(L.hasSameRhythm || L.rest)) {
				let M = t.beatsLayouts
						.map((e) => e.beats.find((e) => e.voice == L.index))
						.filter(Boolean),
					S = i.rhythmEffects.tremolo.get(L.index) || !1,
					$ = i.rhythmEffects.tremolo.get(L.index) || !1,
					T = M.some((e) => e.type > 8),
					N = S && T ? eD : 0,
					B = $ ? eA : 0,
					P = N + B,
					E = k + L.index * (eI + P);
				c.push(
					e1(
						rE,
						{ voice: L, beats: M, x: p, y: E, tremoloOffset: N },
						`rhythm${L.index}`
					)
				),
					(k = E);
				let z = 0,
					I = null;
				for (let D of M)
					D &&
						(D.tupletStart && ((z = D.tuplet), (I = D)),
						z &&
							I &&
							D.tupletStop &&
							(c.push(
								e1(
									rV,
									{
										tuplet: z,
										start: I,
										stop: D,
										voice: L,
										platform: r,
										x: p,
										y: E,
										tremoloOffset: N,
									},
									`tuplet${C}`
								)
							),
							(z = 0),
							C++));
			}
	}
	return e1(e0, { children: c });
}
let le = (e, t) => e + `H${t.x}m${t.w},0`;
function lt(e) {
	let { line: t, hasTuning: i, slicingMode: o, part: s } = e,
		{ intervalSize: a } = t.layout,
		n = t.spaces,
		r = a * (t.strings - 1),
		l = "",
		p = t.layout.measureLayouts;
	for (let u = i ? 1 : 0; u < p.length; u++) {
		let h = p[u];
		U(h.measure) === h && (l += `M${h.x},0v${r}`);
	}
	let d = p[0].x,
		c = o.stringLineMaxX(t);
	if (s.usedDrums && s.isDrumStdOn)
		for (let m = 0; m < t.strings; m++) l += `M${d},${a * m} H${c}`;
	else
		for (let y = 0; y < t.strings; y++)
			l += `M${d},${a * y}` + n[y].reduce(le, "") + `H${c}`;
	let f = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
	return (
		J(f.measure) === f && (l += `M${c},0v${r}`),
		e1("path", { className: ec.strings, d: l })
	);
}
let li = "D38xz",
	lo = { tuning: "D38xz" },
	ls = a6(5);
function la(e) {
	let { tuning: t, platform: i, intervalSize: o } = e;
	return t
		? eY(
				e0,
				null,
				ej(t, !1).map((e, t) =>
					eY(
						"text",
						{ x: ls(i), y: 1 + t * o, key: t, className: lo.tuning },
						e
					)
				)
		  )
		: null;
}
let ln = "Cw81bf",
	lr = { line: "Cw81bf" };
function ll(e) {
	let {
			inlineDefs: t,
			line: i,
			noPadding: o,
			part: s,
			tuning: a,
			slicingMode: n,
			lazy: r,
			tabEditorData: l,
			fingerings: p,
			platform: u,
		} = e,
		h = n.expectedSliceWidth(i.layout.unscaledWidth) + (o ? 0 : en),
		{ intervalSize: d } = i.layout,
		c = "http://www.w3.org/2000/svg",
		m = i.layout.height,
		y = `${o ? 0 : -en / 2} -${i.layout.layers.height} ${h} ${m}`;
	if (!u) {
		let [f, g] = e2(i.index < 5),
			v = eJ();
		if (
			(e5(() => {
				if (!f) {
					if (r)
						try {
							let e = new IntersectionObserver(
								(e) => {
									e[0].isIntersecting && g(!0);
								},
								{ rootMargin: "0px 0px 500px 0px" }
							);
							return v.current && e.observe(v.current), () => e.disconnect();
						} catch (t) {
							requestAnimationFrame(() => g(!0));
						}
					else eF(() => g(!0), 50);
				}
			}, [f, r]),
			!f)
		)
			return e1(
				"svg",
				{
					xmlns: c,
					version: "1.1",
					ref: v,
					width: h,
					viewBox: y,
					className: lr.line,
				},
				"line-stub" + i.index
			);
	}
	let b = i.capo,
		x = !!a;
	return e1(
		"svg",
		{
			xmlns: c,
			version: "1.1",
			width: h,
			viewBox: y,
			className: lr.line,
			children: [
				t && e1(aI, { part: s, line: i }),
				x && e1(la, { tuning: a, platform: u, intervalSize: d }),
				!!b && !u && e1(to, b),
				e1(lt, { line: i, hasTuning: x, slicingMode: n, part: s }),
				...i.hangingText.map((e, t) =>
					e1(ad, { text: e, layout: void 0, xoffset: 0 }, t.toString())
				),
				e1(a8, { line: i }),
				...i.layout.measureLayouts.map((e) =>
					e1(
						r9,
						{
							measureLayout: e,
							line: i,
							part: s,
							slicingMode: n,
							measureFingering:
								p && p.measures.find((t) => t.index - 1 === e.measure.index),
							measureEditorData:
								l && l[e.measure.index] && l[e.measure.index].beats,
							platform: u,
						},
						e.measure.index.toString() + e.x.toString()
					)
				),
			],
		},
		"line" + i.index
	);
}
let lp = eQ((e) => {
		let {
			lines: t,
			part: i,
			tuning: o,
			slicingMode: s,
			fingerings: a,
			lazy: n,
			tabEditorData: r,
			platform: l,
		} = e;
		return e1(e0, {
			children: t.map((e) =>
				e1(
					ll,
					{
						line: e,
						part: i,
						tuning: 0 === e.index && o,
						inlineDefs: 0 === e.index,
						slicingMode: s,
						tabEditorData: r,
						fingerings: a,
						lazy: n,
						platform: l,
					},
					e.index.toString()
				)
			),
		});
	}),
	lu = en / 2,
	lh = 0,
	ld = 7,
	lc = 48,
	lm = 48,
	ly = { animationStyles: al };
function lf(e, t) {
	return e ? Math.abs(t.x - e.x) + Math.abs(t.y - e.y) : 0;
}
function lg(e) {
	return (t) => t === e;
}
let lv = "ontouchstart" in window;
function lb(e, t) {
	let { position: i } = e;
	eR(i, t.position) || t.dispatch("player/moveCursor", i);
}
class lx extends eW {
	constructor(e) {
		super(e),
			(this.lastMeasureIndex = void 0),
			(this.readyHack = !0),
			(this.state = {
				mirrorPosition: e.position,
				position: e.position,
				loopStartLayout: null,
				loopStartX: 0,
				loopEndLayout: null,
				loopEndX: 0,
				deltaLeftX: 0,
				deltaRightX: 0,
				isPitchshiftToStandard: !1,
			}),
			(this.lastTouch = null),
			(this.activeLoopHandle = void 0),
			(this.onTouchMoveTickId = void 0),
			(this.windowScroller = new sY()),
			(this.scrollToCursor = C(e.device.os)
				? () => setTimeout(this.scrollToCursorBase, 250)
				: this.scrollToCursorBase);
	}
	componentDidMount() {
		if (
			(this.props.print ||
				(0 === this.props.position.loopStart &&
					0 === this.props.position.loopEnd) ||
				lb(this.state, this.props),
			_)
		) {
			let e = this.wrap;
			e &&
				(e.addEventListener(
					"touchstart",
					this.onTouchStart,
					!!window.PASSIVE && { passive: !1 }
				),
				e.addEventListener("mousedown", this.onTouchStart));
		}
		window.addEventListener("resize", this.viewportResizeDebounced),
			this.viewportResize().then(this.scrollToCursor);
	}
	scrollToCursorBase = () => {
		if (this.wrap) {
			var e;
			let t = P(
				this.props.part,
				(null === (e = this.props.store.get().player.audio) || void 0 === e
					? void 0
					: e.getCursor()) || 0,
				"left"
			);
			t && this.ensureLineVisibility(null, t.measureLayout.lineLayout, !1);
		}
	};
	componentDidUpdate(e) {
		(0 !== this.props.position.loopStart ||
			0 !== this.props.position.loopEnd) &&
			lb(this.state, this.props),
			(e.lines !== this.props.lines ||
				e.scale !== this.props.scale ||
				e.plusAccess !== this.props.plusAccess ||
				this.props.isVideoReady !== e.isVideoReady) &&
				this.viewportResize().then(this.scrollToCursor);
	}
	componentWillUnmount() {
		let e = this.wrap;
		e &&
			(e.removeEventListener("touchstart", this.onTouchStart),
			e.removeEventListener("mousedown", this.onTouchStart)),
			window.removeEventListener("resize", this.viewportResizeDebounced),
			this.windowScroller.unmount();
	}
	viewportResize = async () => {
		let e = this.wrap;
		if (e) {
			let t = await ap(e);
			(this.pageX =
				t.left +
				lu +
				(window.visualViewport
					? window.visualViewport.pageLeft
					: document.body.scrollLeft + document.documentElement.scrollLeft)),
				(this.pageY =
					t.top +
					0 +
					(window.visualViewport
						? window.visualViewport.pageTop
						: document.body.scrollTop + document.documentElement.scrollTop)),
				(this.clientHeight = window.visualViewport
					? window.visualViewport.height
					: document.documentElement.clientHeight);
		}
	};
	viewportResizeDebounced = r(this.viewportResize, 100);
	static getDerivedStateFromProps(e, t) {
		let i = t.position;
		eR(t.mirrorPosition, e.position) || (i = e.position);
		let o = t.loopStartLayout,
			s = t.loopStartX,
			a = !1,
			n = t.loopEndLayout,
			r = t.loopEndX,
			l = !1,
			{ tuning: p, instrumentId: u } = e.part,
			h = p && I(u, p),
			d = !1;
		return (
			(D(u) || A(u)) && h && 0 !== h.pitch && (d = !0),
			0 !== i.loopStart || 0 !== i.loopEnd
				? ((o && -1 !== o.occurrences.findIndex(lg(i.loopStart))) ||
						((s = (o = P(e.part, i.loopStart, "left")).absoluteLoopLeftX),
						(a = !0)),
				  (n && -1 !== n.occurrences.findIndex(lg(i.loopEnd - n.duration))) ||
						((r = (n = P(e.part, i.loopEnd, "right")).absoluteLoopRightX),
						(l = !0)),
				  (a || l) && (i = eX(e.part, i.cursor, o, n)))
				: ((o = null), (s = 0), (n = null), (r = 0)),
			{
				mirrorPosition: e.position,
				position: i,
				loopStartLayout: o,
				loopStartX: s,
				loopEndLayout: n,
				loopEndX: r,
				isPitchshiftToStandard: d,
			}
		);
	}
	onTouchStart = (e) => {
		if (lv && "mousedown" === e.type) return;
		if ("tab_editor" === this.props.layer) {
			this.handleTabEditor(e);
			return;
		}
		let t = e.target && e.target.getAttribute("data-marker-num"),
			i =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-tab-button");
		if (null != i || null != t) return;
		if (this.props.layer) {
			this.props.dispatch("layer/hide"),
				e.preventDefault(),
				e.stopPropagation();
			return;
		}
		let o =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-loop-handle"),
			s = this.getTouchPoint(e);
		if (((this.lastTouch = s), "left" === o || "right" === o)) {
			if (
				(e.preventDefault(),
				e.stopPropagation(),
				this.props.dispatch("player/changeLoop", !0),
				(this.activeLoopHandle = o),
				"left" === this.activeLoopHandle
					? this.setState((e) => ({ deltaLeftX: e.loopStartX - s.x }))
					: this.setState((e) => ({ deltaRightX: e.loopEndX - s.x })),
				!this.onTouchMoveTickId)
			) {
				let a = window.requestAnimationFrame;
				this.onTouchMoveTickId = a(this.onTouchMoveTick);
			}
			document.addEventListener(
				"touchmove",
				this.onTouchMove,
				!!window.PASSIVE && { passive: !1 }
			),
				document.addEventListener("mousemove", this.onTouchMove);
		}
		document.addEventListener("touchend", this.onTouchEnd),
			document.addEventListener("mouseup", this.onTouchEnd);
	};
	onTouchMove = (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			(this.lastTouch = this.getTouchPoint(e));
	};
	limitX(e) {
		return Math.min(Math.max(e, 0), this.props.width - 1);
	}
	ensureLineVisibility = (e, t, i) =>
		eF(() => {
			let { showPitchshiftLayer: o } = this.props,
				s = window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY,
				a = this.props.scale,
				n = eV(),
				r = this.props.isVideoReady ? 200 : 0,
				l = (n ? 48 : 0) + r,
				p = n ? 48 : 0,
				{ pageY: u, clientHeight: h } = this,
				d = s - u + l,
				c = s - u + h - p,
				m = c - d,
				y = t.line.index,
				f = this.props.lines;
			if (e && (e.maxY * a < d || c < e.y * a)) return;
			let g = s,
				{ loopStartLayout: v, loopEndLayout: b } = this.state;
			if (o) g = 0;
			else if (v && b) {
				let x = t.y * a - d;
				if (x < 0) g = s + x;
				else if (
					((x = c - t.maxY * a) < 0 && (g = s - x),
					y < b.measureLayout.lineLayout.line.index)
				) {
					let w = f[y + 1];
					if (w) {
						let C = t.y,
							k = w.layout.maxY;
						(k - C) * a < m && (x = c - k * a) < 0 && (g = s - x);
					}
				}
			} else if (0 === y) g = 0;
			else if (((g = t.y * a + u - l), y < f.length - 1)) {
				let L = f[y - 1],
					M = f[y + 1];
				if (L && M) {
					let S = L.layout.y,
						$ = M.layout.maxY;
					($ - S) * a < m && (g = S * a + u - l);
				}
			}
			g !== s && this.windowScroller.scroll(g, i, s);
		});
	onTouchMoveTick = () => {
		this.lastTouch &&
			this.setState((e) => {
				let t = this.lastTouch;
				if (!t) throw Error("Wrong state during touch move");
				let i = {
					position: e.position,
					loopStartX: e.loopStartX,
					loopStartLayout: e.loopStartLayout,
					loopEndX: e.loopEndX,
					loopEndLayout: e.loopEndLayout,
				};
				{
					let { loopStartLayout: o, loopEndLayout: s } = i;
					if (!o || !s) throw Error("Wrong loop state");
					if ("left" === this.activeLoopHandle) {
						let a = { x: this.limitX(t.x + e.deltaLeftX), y: t.y },
							n = eO(this.props.lines, a, "left"),
							r = eq(n),
							l = eq(s);
						r < l || (r === l && a.x <= s.absoluteLoopLeftX)
							? ((i.loopStartLayout = n), (i.loopStartX = a.x))
							: ((i.loopStartLayout = i.loopEndLayout),
							  (i.loopStartX = o.absoluteLoopLeftX));
					} else {
						let p = { x: this.limitX(t.x + e.deltaRightX), y: t.y },
							u = eO(this.props.lines, p, "right"),
							h = eq(u),
							d = eq(o);
						h > d || (h === d && p.x >= o.absoluteLoopRightX)
							? ((i.loopEndLayout = u), (i.loopEndX = p.x))
							: ((i.loopEndLayout = i.loopStartLayout),
							  (i.loopEndX = s.absoluteLoopRightX));
					}
				}
				{
					let { loopStartLayout: c, loopEndLayout: m } = i;
					if (c && m && (c !== e.loopStartLayout || m !== e.loopEndLayout)) {
						let y = eX(
								this.props.part,
								i.position.cursor,
								c,
								m,
								this.activeLoopHandle
							),
							f = i.position;
						(f.cursor !== y.cursor ||
							f.loopStart !== y.loopStart ||
							f.loopEnd !== y.loopEnd) &&
							(i.position = y);
					}
				}
				return (this.lastTouch = null), i;
			});
		let e = window.requestAnimationFrame;
		this.onTouchMoveTickId = e(this.onTouchMoveTick);
	};
	onTouchEnd = (e) => {
		if (this.activeLoopHandle)
			document.removeEventListener("touchmove", this.onTouchMove),
				document.removeEventListener("mousemove", this.onTouchMove),
				e.preventDefault(),
				this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
				(this.onTouchMoveTickId = void 0),
				(this.activeLoopHandle = void 0),
				this.setState(
					(e) => (
						this.props.dispatch("player/moveCursor", this.state.position),
						this.props.dispatch("player/changeLoop", !1),
						{
							loopStartX: e.loopStartLayout
								? e.loopStartLayout.absoluteLoopLeftX
								: 0,
							loopEndX: e.loopEndLayout
								? e.loopEndLayout.absoluteLoopRightX
								: 0,
						}
					)
				);
		else {
			let t = this.getTouchPoint(e),
				i = lf(this.lastTouch, t);
			i < 7 &&
				(e.preventDefault(),
				this.setState((e) => {
					let i = {
							position: e.position,
							loopStartX: e.loopStartX,
							loopStartLayout: e.loopStartLayout,
							loopEndX: e.loopEndX,
							loopEndLayout: e.loopEndLayout,
						},
						o = eO(this.props.lines, t);
					if (
						0 === this.props.position.loopStart &&
						0 === this.props.position.loopEnd
					)
						i.position = { cursor: Y(o), loopStart: 0, loopEnd: 0 };
					else {
						let s = Y(o),
							a = K(o);
						if (i.position.loopStart <= s && s < i.position.loopEnd)
							i.position = {
								cursor: s,
								loopStart: i.position.loopStart,
								loopEnd: i.position.loopEnd,
							};
						else if (i.position.loopStart <= a && a < i.position.loopEnd)
							i.position = {
								cursor: a,
								loopStart: i.position.loopStart,
								loopEnd: i.position.loopEnd,
							};
						else {
							let n = o.measureLayout.measure.layouts,
								r = n[0].beatsLayouts,
								l = n[n.length - 1].beatsLayouts;
							(i.loopStartLayout = r[0]),
								(i.loopEndLayout = l[l.length - 1]),
								(i.loopStartX = i.loopStartLayout.absoluteLoopLeftX),
								(i.loopEndX = i.loopEndLayout.absoluteLoopRightX),
								(i.position = {
									cursor: s,
									loopStart: Z(i.loopStartLayout),
									loopEnd: ee(i.loopEndLayout),
								});
						}
					}
					return (
						this.props.dispatch("player/moveCursor", i.position),
						this.ensureLineVisibility(null, o.measureLayout.lineLayout, !1),
						i
					);
				})),
				(this.lastTouch = null);
		}
		document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd);
	};
	getTouchPoint(e) {
		let t = e.changedTouches ? e.changedTouches[0] : e,
			i = (t.pageX - this.pageX) / this.props.scale,
			o = (t.pageY - this.pageY) / this.props.scale;
		return { x: i, y: o };
	}
	handleTabEditor(e) {
		let t = this.getTouchPoint(e),
			i = eO(this.props.lines, t);
		this.props.setTabEditor({
			beatsLayout: i,
			touch: t,
			scale: this.props.scale,
		});
	}
	refWrap = (e) => {
		this.wrap = e;
	};
	refMain = (e) => {
		this.tab = e;
	};
	refTuning = (e) => {
		this.tuningButton = e;
	};
	render() {
		let {
				loopStartLayout: e,
				loopEndLayout: t,
				loopStartX: i,
				loopEndX: o,
				isPitchshiftToStandard: s,
			} = this.state,
			a = this.props.lines,
			n = this.props.scale,
			r = this.props.height,
			l = this.props.slicingMode,
			{
				part: p,
				plusAccess: u,
				isFullscreen: h,
				isSmallScreen: d,
				handlePitchshift: c,
				showPitchshiftPopup: m,
				showPitchshiftLayer: y,
				tuning: f,
				layer: g,
				tabEditorData: v,
				fingerings: b,
			} = this.props,
			x = this.props.width,
			w = `-${en / 2 - 0.5} -0.5 ${x} ${r}`,
			C = a[0].layout.layers.height,
			k = b && b.partId === p.partId ? b.data : void 0,
			L = "tab_editor" === g;
		return eY(
			e0,
			null,
			eY(
				"section",
				{
					id: "tablature",
					className: u
						? h
							? ao.tablatureFullscreen
							: ao.tablature
						: h
						? ao.tablatureFullscreenFree
						: ao.tablatureFree,
					"data-id": u ? e_ : eH,
					role: "application",
					key: "main",
					ref: this.refMain,
				},
				0 !== n && L && eY(s8, { scale: n }),
				eY(lp, {
					part: p,
					lines: a,
					tuning: f,
					slicingMode: l,
					fingerings: k,
					tabEditorData: v,
					lazy: !u,
				}),
				eY(
					o8,
					null,
					0 !== n &&
						_ &&
						eY(sI, {
							scale: n,
							part: p,
							lines: a,
							hidden: L,
							ensureLineVisibility: this.ensureLineVisibility,
						}),
					eY(
						"svg",
						{
							width: x,
							viewBox: w,
							ref: this.refWrap,
							className: ao.handlers,
							preserveAspectRatio: "xMidYMid meet",
							id: "handler",
						},
						_ && e && t && eY(s_, { leftLayout: e, rightLayout: t, lines: a }),
						_ && e && eY(sq, { x: i, layout: e, handle: "left" }),
						_ && t && eY(sq, { x: o, layout: t, handle: "right" }),
						eY(sf, { lines: a, partId: p.partId, songId: p.songId }),
						!d &&
							p.tuning &&
							eY(ss, {
								reference: this.refTuning,
								firstLineLayoutHeigth: C,
								handlePitchshift: c,
								isPitchshiftToStandard: s,
								isActive: m || y,
								lock: !u,
							})
					)
				),
				eY(
					M,
					null,
					!d &&
						m &&
						eY(
							S,
							{ ...ly, key: "popup" },
							eY(sK, { tab: this.tab, tuningButton: this.tuningButton })
						),
					!d &&
						y &&
						eY(
							S,
							{ ...ly, key: "layer" },
							eY(ot, {
								firstLineLayoutHeigth: C,
								ensureLineVisibility: this.ensureLineVisibility,
								tab: this.tab,
								tuningButton: this.tuningButton,
							})
						)
				)
			)
		);
	}
}
let lw = (e, t) => true || t.enabled,
	lC = { onTab: !0 };
class lk extends eW {
	componentDidMount() {
		let e = window.hotKeysManager;
		e.bindOne("space", this.props.handlePlay, lC),
			e.bindOne("l", this.props.handleLoop, lC),
			e.bindOne("f", this.props.handleSolo, lC),
			e.bindOne("m", this.props.handleMute, lC),
			e.bindOne("r", this.props.handlePitchshift, lC),
			e.bindOne("t", this.props.handleMixer, lC),
			e.bindOne("s", this.props.handleSpeed, lC),
			e.bindOne("p", this.props.handlePrint, lC),
			e.bindOne("c", this.props.handleCountin, lC),
			e.bindOne("n", this.props.handleMetronome, lC),
			e.bindOne("e", this.props.handleTabEditor, lC),
			e.bindOne("g", this.props.handleFingerings, lC),
			e.bindMeta("alt+s", this.props.handleIncreaseBpm, "global", "App", !0),
			e.bindMeta("alt+a", this.props.handleDecreaseBpm, "global", "App", !0),
			[
				{ key: "alt+1", speed: 25 },
				{ key: "alt+2", speed: 50 },
				{ key: "alt+3", speed: 75 },
				{ key: "alt+4", speed: 100 },
				{ key: "alt+5", speed: 125 },
				{ key: "alt+6", speed: 150 },
				{ key: "alt+7", speed: 175 },
			].forEach((t) => {
				e.bindMeta(
					t.key,
					this.props.handleChangeSpeed(t.speed),
					"global",
					"App",
					!0
				);
			});
	}
	componentWillUnmount() {
		let e = window.hotKeysManager;
		e.unbindOne("space", lC),
			e.unbindOne("l", lC),
			e.unbindOne("f", lC),
			e.unbindOne("m", lC),
			e.unbindOne("r", lC),
			e.unbindOne("t", lC),
			e.unbindOne("s", lC),
			e.unbindOne("p", lC),
			e.unbindOne("c", lC),
			e.unbindOne("n", lC),
			e.unbindOne("e", lC),
			this.resizeObserver && this.resizeObserver.disconnect();
	}
	render() {
		var e, t, i;
		let {
				dispatch: o,
				user: s,
				demo: a,
				player: n,
				meta: r,
				part: l,
				cursor: p,
				screen: u,
				layer: { layer: h },
				device: d,
				route: c,
				isDeleted: m,
				tabEditor: y,
				fingerings: f,
				experiments: g,
				ads: v,
			} = this.props,
			b = c.isPanel,
			x = lw(s, a),
			w = u.isSmall,
			C = u.fullscreen,
			k = eG(r),
			L = "saving" === y.status || "changes" === y.status,
			{ pitchShift: M } = n,
			S = e3(
				() =>
					!!l.current &&
					!!l.current.tuning &&
					l.current.tuning.map((e) => e + M),
				[M, l]
			),
			$ = r.allowedByLicense,
			T = !r.isFailed && !l.isFailed && $,
			N = T && !m && !!l.current && !!l.lines.lines.length,
			B = T && !m && (!l.current || !l.lines.lines.length),
			P = T && !x,
			E = T && !x && d.isPhone && N,
			z =
				(null === (e = g.play_along) || void 0 === e ? void 0 : e.segment) ===
				"on",
			I =
				(null === (t = g.play_along) || void 0 === t ? void 0 : t.segment) ===
					"on" && n.video.getReady(),
			D =
				(null === (i = g.auto_fingerings) || void 0 === i
					? void 0
					: i.segment) === "ut",
			A = eK((e) => o("tabEditor/setForm", e), []);
		return eY(
			"section",
			{
				className: C ? eU.tablatureFullscreen : eU.tablature,
				role: b ? "complementary" : "main",
			},
			eY(oX, { meta: r, user: s, cursor: p, part: l, player: n, isDeleted: m }),
			z &&
				eY(o4, {
					songId: l.songId,
					revisionId: r.revisionId,
					partId: l.partId,
					handlePlayVideo: this.props.handlePlayVideo,
					handlePauseVideo: this.props.handlePauseVideo,
				}),
			eY(w ? oE : iO, {
				...this.props,
				shouldPlay: n.shouldPlay,
				canPlay: n.canPlay || b,
				track: k,
				device: d,
				layer: h,
				plusAccess: x,
				fingeringsEnabled: D,
				fingeringsStatus: f.status,
				fingeringsActive: f.shown,
				loop: 0 !== n.position.loopEnd,
				type: n.type,
				speed: n.speed,
				pitchShift: n.pitchShift,
				pitchShiftAvailable: !l.current || !!l.current.tuning,
				isCountin: n.isCountin,
				isMetronome: n.isMetronome,
				tadEditorWarning: L,
				usedDrums: l.current && l.current.usedDrums,
				toolbarExperiment: g.open_srwm_toolbar_by_default,
			}),
			P &&
				eY(tu, {
					key: `tab-showroom-${r.songId}-${v.showPlusBanner ? "plus" : "ads"}`,
					songId: r.songId,
					showPlusBanner: v.showPlusBanner,
				}),
			eY(
				"section",
				{ class: eU.pane },
				B && eY(tp, null),
				N &&
					e1(
						lx,
						{
							dispatch: o,
							store: this.props.store,
							part: l.current,
							lines: l.lines.lines,
							height: l.lines.height,
							width: l.lines.width,
							scale: l.lines.scale,
							slicingMode: l.lines.slicingMode,
							isFullscreen: C,
							isSmallScreen: w,
							plusAccess: x,
							shouldPlay: n.shouldPlay,
							position: n.position,
							handlePitchshift: this.props.handlePitchshift,
							showPitchshiftPopup: "plus_pitchshift" === h,
							showPitchshiftLayer: "pitchshift" === h,
							tuning: S,
							layer: h,
							tabEditorData: y.data,
							setTabEditor: A,
							fingerings: f.shown && f.trackFingering,
							device: d,
							isLoggedIn: s.isLoggedIn,
							isVideoReady: I,
						},
						l.lines.hash
					)
			),
			E && eY(oH, { key: "showroom-bottom" }),
			N && eY(tl, { withAds: P, device: d, copyright: !0 })
		);
	}
}
var lL = s(
	lk,
	"user",
	"demo",
	"player",
	"meta",
	"part",
	"cursor",
	"screen",
	"layer",
	"device",
	"route",
	"experiments",
	"isDeleted",
	"tabEditor",
	"ads",
	"fingerings"
);
export { lL as default };
