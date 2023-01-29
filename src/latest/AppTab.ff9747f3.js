let updateTimer, isMobileOs;
import {
	P as e,
	w as t,
	x as i,
	y as a,
	z as o,
	B as n,
	E as s,
	F as r,
	G as l,
	H as u,
	J as d,
	i as p,
	A as h,
	K as c,
	u as m,
	M as f,
	N as g,
	O as y,
	Q as _,
	R as v,
	U as b,
	V as $,
	W as x,
	f as w,
	X as T,
	Y as C,
	L as S,
	k as k,
	d as P,
	Z as M,
	$ as L,
	T as N,
	C as E,
	a0 as B,
	a1 as A,
	_ as R,
	a2 as I,
	a3 as D,
	a4 as O,
	a5 as F,
	a6 as z,
	a7 as H,
	a8 as j,
	a9 as V,
	b as X,
	aa as U,
	ab as q,
	ac as G,
	ad as K,
	ae as Y,
	af as W,
	p as J,
	ag as Z,
	ah as Q,
	ai as ee,
	aj as et,
	ak as ei,
	al as ea,
	am as eo,
	an as en,
	ao as er,
	ap as el,
	aq as eu,
	ar as ed,
	as as ep,
	at as eh,
	au as ec,
	av as em,
	aw as ef,
	ax as eg,
	ay as ey,
	az as e_,
	aA as ev,
	aB as eb,
	aC as e$,
	aD as ex,
	aE as ew,
	aF as eT,
	aG as eC,
	aH as eS,
	aI as ek,
	aJ as eP,
	aK as eM,
	aL as eL,
	aM as eN,
	aN as eE,
	aO as eB,
	aP as eA,
	aQ as eR,
	aR as eI,
	aS as eD,
	aT as eO,
	aU as eF,
	aV as ez,
	aW as eH,
	aX as ej,
	aY as eV,
	aZ as eX,
	a_ as eU,
	a$ as eq,
	b0 as eG,
	b1 as eK,
	b2 as eY,
	b3 as eW,
	b4 as eJ,
	b5 as eZ,
	b6 as eQ,
	b7 as e1,
	b8 as e2,
	b9 as e0,
	c as e5,
} from "./index.c64a48b4.js";
import {
	d as e3,
	a as e4,
	T as e7,
	c as e8,
	_ as e6,
	p as e9,
	R as te,
	e as tt,
	B as ti,
	h as ta,
	F as to,
	j as tn,
	o as ts,
} from "./preact.3d326435.js";
import {
	a as tr,
	s as tl,
	b as tu,
	_ as td,
	d as tp,
	F as th,
	P as tc,
	S as tm,
	e as tf,
	C as tg,
} from "./Capo.3b70ef19.js";
import { g as ty, a as t_ } from "./gplay.79326319.js";
import { I as tv, _ as tb } from "./Input.33ac2f73.js";
import { A as t$ } from "./ActionButton.3cab06c5.js";
import { t as tx, a as tw } from "./UploadRevisionForm.module.7bd6e9b7.js";
import {
	N as tT,
	a as tC,
	A as tS,
	L as tk,
	S as tP,
} from "./AppFooter.b4e298aa.js";
import { S as tM } from "./SWW.c1493299.js";
class MixerButton extends e3 {
	render() {
		let {
				onClick: t,
				pressed: i,
				title: a,
				titlePressed: o,
				name: n,
				instrumentId: s,
			} = this.props,
			r = "mixer-title-id";
		return e4(
			"button",
			{
				className: i ? tr.active : tr.button,
				onClick: t,
				id: "control-mixer",
				"aria-haspopup": !0,
				"aria-pressed": i,
			},
			e4(
				"svg",
				{
					className: tr.icon,
					width: 55,
					height: 55,
					viewBox: "-4 -4 55 55",
					role: "img",
					"aria-labelledby": r,
				},
				e4("title", { id: r }, i && o ? o : a),
				e4("circle", { className: tr.tag, cx: "7", cy: "39", r: "6" }),
				e4("circle", {
					className: tr.circle,
					cx: "22.5",
					cy: "22.5",
					r: "22.5",
					filter: "url(#svg_shadow)",
				}),
				e4(e, {
					className: tr.shape,
					instrumentId: s,
					name: n,
					transform: "translate(9 9)",
				})
			)
		);
	}
}
let speed = "tl2yt",
	pane$1 = "tl35",
	bpm = "tl276",
	bpmOriginal = "tl276 tl1lq",
	caption = "tl1aa",
	caption25 = "tl1aa tl294",
	caption50 = "tl1aa tl1gg",
	caption75 = "tl1aa tl1ia",
	caption100 = "tl1aa tl1u0",
	caption125 = "tl1aa tl2uy",
	caption150 = "tl1aa tl2o2",
	caption175 = "tl1aa tly0",
	ruler = "tl24a",
	button$4 = "tl2wd",
	buttonAlt = "tl2wd tlca",
	handle = "tli0",
	tempo$1 = "tl11g",
	exitActive$2 = "tl1sq",
	enterActive$2 = "tl2b5",
	enter$2 = "tl34n",
	exit$2 = "tl33",
	__default$N = {
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
function subscribeOnPointerMove(e, t) {
	e.addEventListener("touchmove", t, !!window.PASSIVE && { passive: !1 }),
		e.addEventListener("mousemove", t);
}
function unsubscribeOnPointerMove(e, t) {
	e.removeEventListener("touchmove", t), e.removeEventListener("mousemove", t);
}
function subscribeOnPointerDown(e, t) {
	e.addEventListener("touchstart", t), e.addEventListener("mousedown", t);
}
function unsubscribeOnPointerDown(e, t) {
	e.removeEventListener("touchstart", t), e.removeEventListener("mousedown", t);
}
function subscribeOnPointerUp(e, t) {
	e.addEventListener("touchend", t), e.addEventListener("mouseup", t);
}
function unsubscribeOnPointerUp(e, t) {
	e.removeEventListener("touchend", t), e.removeEventListener("mouseup", t);
}
class Speed extends e3 {
	constructor(e) {
		super(e);
		let t = e.player.speed,
			o = i(t, e.tempo.tempo);
		(this.state = {
			speed: t,
			tempo: o,
			position: a(t),
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
		if (t.mirrorSpeed !== e.player.speed || t.mirrorTempo !== e.tempo.tempo) {
			let t = e.player.speed,
				o = i(t, e.tempo.tempo);
			return {
				speed: t,
				tempo: o,
				position: a(t),
				mirrorSpeed: e.player.speed,
				mirrorTempo: e.tempo.tempo,
			};
		}
		return null;
	}
	componentDidMount() {
		let e = this.wrap;
		e && subscribeOnPointerDown(e, this.onTouchStart),
			window.addEventListener("resize", this.onResize),
			window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
		let e = this.wrap;
		e && unsubscribeOnPointerDown(e, this.onTouchStart),
			unsubscribeOnPointerMove(document, this.onTouchMove),
			unsubscribeOnPointerUp(document, this.onTouchEnd),
			window.removeEventListener("resize", this.onResize),
			this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
	}
	getPageCoordinates = () => {
		let { body: e, documentElement: t } = document,
			i = this.ruler;
		if (i && e && t) {
			let a = i.getBoundingClientRect(),
				o = a.left + e.scrollLeft + t.scrollLeft,
				n = a.top + e.scrollTop + t.scrollTop,
				s = a.width;
			return { rulerX: o, rulerY: n, rulerW: s };
		}
		throw Error("Wrong Usage");
	};
	onResize = o(() => this.setState(this.getPageCoordinates), 250);
	getNewPosition(e) {
		let t = n((100 * e.x) / e.w);
		return s(t, this.props.tempo.tempo);
	}
	handleFaster = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => r(e.speed, e.tempo, e.position, this.props.tempo.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	handleSlower = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => l(e.speed, e.tempo, e.position, this.props.tempo.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	dispatchSpeed = (e) => {
		u(this.props.store, e);
	};
	getTouchPoint(e) {
		let { rulerX: t, rulerY: i, rulerW: a } = this.state;
		if (null === t || null === i || null === a) {
			let e = this.getPageCoordinates();
			this.setState(e), (t = e.rulerX), (i = e.rulerY), (a = e.rulerW);
		}
		let o = e.changedTouches ? e.changedTouches[0] : e;
		return { x: Math.max(Math.min(o.pageX - t, a), 0), w: a, y: o.pageY - i };
	}
	onTouchStart = (e) => {
		let t = this.getTouchPoint(e);
		if (
			((this.lastTouch = t),
			e.preventDefault(),
			e.stopPropagation(),
			!this.onTouchMoveTickId)
		) {
			let e = window.requestAnimationFrame;
			this.onTouchMoveTickId = e(this.onTouchMoveTick);
		}
		subscribeOnPointerUp(document, this.onTouchEnd),
			subscribeOnPointerMove(document, this.onTouchMove);
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
		let t = window.requestAnimationFrame;
		this.onTouchMoveTickId = t(this.onTouchMoveTick);
	};
	onTouchEnd = () => {
		unsubscribeOnPointerMove(document, this.onTouchMove),
			unsubscribeOnPointerUp(document, this.onTouchEnd),
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
			(t) => d(t.speed, t.tempo, t.position, this.props.tempo.tempo, e),
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
		let e =
				100 === this.state.speed ? __default$N.buttonAlt : __default$N.button,
			t = 100 === this.state.speed ? __default$N.bpmOriginal : __default$N.bpm;
		return e4(
			"div",
			{ className: __default$N.speed, role: "dialog", "aria-label": "Speed" },
			e4(
				"div",
				{ className: t },
				e4(
					"button",
					{
						onClick: this.bpmMinus,
						onKeyDown: this.bpmMinusPress,
						title: "Alt+A",
					},
					e4(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 2" },
						e4("rect", {
							y: "2",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 2)",
						})
					)
				),
				e4(
					"span",
					{ className: __default$N.speedLabel, "aria-label": "Tempo" },
					this.state.tempo.bpm,
					" bpm"
				),
				e4(
					"button",
					{
						onClick: this.bpmPlus,
						onKeyDown: this.bpmPlusKeyPress,
						title: "Alt+S",
					},
					e4(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 12" },
						e4("rect", { x: "5", width: "2", height: "12" }),
						e4("rect", {
							y: "7",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 7)",
						})
					)
				)
			),
			e4(
				"div",
				{
					className: __default$N.pane,
					title: "You can use arrow keys",
					ref: this.refWrap,
				},
				e4(
					"label",
					{ className: __default$N.caption25 },
					e4("span", null, "25%")
				),
				e4(
					"label",
					{ className: __default$N.caption50 },
					e4("span", null, "50%")
				),
				e4(
					"label",
					{ className: __default$N.caption75 },
					e4("span", null, "75%")
				),
				e4(
					"label",
					{ className: __default$N.caption100 },
					e4("span", null, "100%")
				),
				e4(
					"label",
					{ className: __default$N.caption125 },
					e4("span", null, "125%")
				),
				e4(
					"label",
					{ className: __default$N.caption150 },
					e4("span", null, "150%")
				),
				e4(
					"label",
					{ className: __default$N.caption175 },
					e4("span", null, "175%")
				),
				e4(
					"div",
					{ className: __default$N.ruler, ref: this.refRuler },
					e4(
						"div",
						{
							className: __default$N.handle,
							style: { left: this.state.position + "%" },
							role: "slider",
							"aria-valuenow": this.state.speed,
							"aria-valuemin": 25,
							"aria-valuemax": 175,
							"aria-valuetext": this.state.tempo.bpm + " bpm",
						},
						e4("div", { className: e })
					)
				)
			)
		);
	}
}
var Speed$1 = t(Speed, "player", "tempo");
let popup$3 = "Cvj28d",
	popupRight = "Cvj28d Cvj2ff",
	popupMobile = "Cvj28d Cvj2ff Cvj350",
	popupMobileLow = "Cvj28d Cvj2ff Cvj248",
	popupLeftTop = "Cvj28d Cvj1dp",
	link$1 = "Cvjo4",
	title$3 = "Cvj23g",
	text$9 = "Cvj1mq",
	popupTop = "Cvj28d Cvj2k8",
	__default$M = {
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
function AppPopup(e) {
	let {
			title: t,
			mobile: i,
			low: a,
			leftOffset: o,
			topOffset: n,
			horizontal: s,
			device: r,
			feature: l,
		} = e,
		u = __default$M.popupRight;
	i
		? (u = a ? __default$M.popupMobileLow : __default$M.popupMobile)
		: s && (u = __default$M.popupTop);
	let d = {};
	void 0 !== o &&
		void 0 !== n &&
		((d = { top: `${n}px`, left: `${o}px` }), (u = __default$M.popupLeftTop));
	let c = "subscribe in the app";
	p(r.os) && (c = "buy in the app");
	let m = `${t} ${c}`,
		f = p(r.os);
	return e4(
		"div",
		{ role: "dialog", className: u, style: d },
		(function (e, t, i) {
			for (
				var a = arguments.length, o = Array(a > 3 ? a - 3 : 0), n = 3;
				n < a;
				n++
			)
				o[n - 3] = arguments[n];
			return e4(
				h,
				{
					source: "popup",
					attrs: { className: e, "aria-label": t },
					eventProperties: {
						Via: "feature popup",
						"App store": i ? "Google Play" : "App Store",
						Feature: l,
					},
				},
				o
			);
		})(
			__default$M.link,
			m,
			f,
			e4(
				"div",
				null,
				e4("div", { className: __default$M.title }, t),
				e4("div", { className: __default$M.text }, c)
			),
			f
				? e4("img", { src: ty, width: 160, height: 47, alt: "Google Play" })
				: e4("img", { src: t_, width: 160, height: 53, alt: "AppStore" })
		)
	);
}
function IconStubPopup() {
	return e4(
		"svg",
		{ width: 54, height: 54, viewBox: "0 0 54 54" },
		e4("path", {
			d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
			fill: "#F1452D",
		}),
		e4("path", {
			d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
			fill: "#FDE3DF",
		})
	);
}
let horizontalPopup = c + " B0fs1",
	verticalPopup = c + " B0f277",
	verticalLeftPopup = c + " B0f2nd",
	link = "B0f1ah",
	basewrapper = "B0fqg",
	wrapper = "B0fqg B0f176",
	text$8 = "B0f102",
	linkText = "B0f2sz",
	__default$L = {
		horizontalPopup: c + " B0fs1",
		verticalPopup: c + " B0f277",
		verticalLeftPopup: c + " B0f2nd",
		link: "B0f1ah",
		basewrapper: "B0fqg",
		wrapper: "B0fqg B0f176",
		text: "B0f102",
		linkText: "B0f2sz",
	};
function getClassName(e, t) {
	return e
		? __default$L.horizontalPopup
		: t
		? __default$L.verticalLeftPopup
		: __default$L.verticalPopup;
}
function StubPopup(e) {
	let { title: t, left: i, horizontal: a } = e,
		{ dispatch: o } = m(),
		n = e7(() => {
			o("layer/hide");
		}, [o]);
	return e4(
		"div",
		{ className: getClassName(a, i), role: "dialog" },
		e4(
			"div",
			{
				className: __default$L.link,
				"aria-label": `${t} mode has no effect`,
				onClick: n,
			},
			e4("span", { className: __default$L.wrapper }, e4(IconStubPopup, null)),
			e4(
				"div",
				{ className: __default$L.text },
				"This song has only one",
				e4("br", null),
				`instrument track. ${t}`,
				e4("br", null),
				"mode has no effect."
			)
		)
	);
}
let editorHelp = "uj1h8",
	title$2 = "uj22u",
	delimiter = "uj2f9",
	part = "uj1b3",
	shortcut = "uj2aq",
	navigation = "uj90",
	digits = "uj1j2",
	rect$1 = "uj2jv",
	move = "uj1j2 uj22n",
	__default$K = {
		editorHelp: "uj1h8",
		title: "uj22u",
		delimiter: "uj2f9",
		part: "uj1b3",
		shortcut: "uj2aq",
		navigation: "uj90",
		digits: "uj1j2",
		rect: "uj2jv",
		move: "uj1j2 uj22n",
	},
	ArrowLeft = () =>
		e4("path", {
			d: "M37 22.04v5.92a.5.5 0 0 0 .812.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.5.5 0 0 0-.812.39Z",
		}),
	ArrowRight = () =>
		e4("path", {
			d: "M10 22.04v5.92a.5.5 0 0 1-.812.39l-3.7-2.96a.5.5 0 0 1 0-.78l3.7-2.96a.5.5 0 0 1 .812.39Z",
		}),
	ArrowDown = (e) =>
		e4("path", {
			d: "M26.13 22h-5.26a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508a.5.5 0 0 0-.433-.752Z",
			...e,
		}),
	ArrowUp = (e) =>
		e4("path", {
			d: "M26.13 10h-5.26a.5.5 0 0 1-.431-.752l2.63-4.508a.5.5 0 0 1 .863 0l2.63 4.508a.5.5 0 0 1-.433.752Z",
			...e,
		}),
	EditorHelp = () =>
		e4(
			e8,
			null,
			e4(
				"div",
				{ className: __default$K.editorHelp },
				e4(
					"div",
					null,
					e4("div", { className: __default$K.title }, "Click a note to edit."),
					e4(
						"div",
						{ className: __default$K.part },
						e4("p", null, "Navigate with"),
						e4(
							"div",
							{ className: __default$K.shortcut },
							e4(
								"svg",
								{ className: __default$K.navigation, width: 47, height: 33 },
								e4("rect", { x: 16 }),
								e4("rect", { x: 16, y: 17 }),
								e4("rect", { x: 32, y: 17 }),
								e4("rect", { y: 17 }),
								e4(ArrowUp, null),
								e4(ArrowLeft, null),
								e4(ArrowRight, null),
								e4(ArrowDown, null)
							)
						)
					),
					e4("div", { className: __default$K.delimiter }),
					e4(
						"div",
						{ className: __default$K.part },
						e4("p", null, "Edit with"),
						e4(
							"div",
							{ className: __default$K.shortcut },
							e4(
								"svg",
								{ className: __default$K.digits, width: 47, height: 33 },
								e4("rect", { className: __default$K.rect, x: 32 }),
								e4("rect", { className: __default$K.rect }),
								e4("rect", { x: 20, y: 7, height: 2, width: 7 }),
								e4("rect", { className: __default$K.rect, y: 17 }),
								e4("rect", { rx: 1, x: 16, y: 17, width: 31, height: 16 }),
								e4("text", { x: 3, y: 12 }, 0),
								e4("text", { x: 35, y: 12 }, 9),
								e4("text", { x: 3, y: 29 }, "X"),
								e4("path", {
									fill: "#4B5059",
									transform: "translate(30, 20)",
									d: "M13 1.5c0-.827-.648-1.5-1.444-1.5H4.634C4.25 0 3.882.157 3.61.438L.212 3.97a.763.763 0 0 0 0 1.06l3.4 3.532c.27.281.638.438 1.022.438h6.922C12.352 9 13 8.327 13 7.5v-6ZM6.116 2.602a.525.525 0 0 1 .765 0l1.061 1.101 1.061-1.101a.525.525 0 0 1 .765 0c.21.22.212.576 0 .794l-1.06 1.102 1.06 1.101a.575.575 0 0 1 0 .795.527.527 0 0 1-.765 0l-1.06-1.102L6.88 6.394a.525.525 0 0 1-.765 0 .578.578 0 0 1 0-.795l1.061-1.101-1.06-1.102a.575.575 0 0 1 0-.794Z",
								})
							)
						)
					),
					e4(
						e8,
						null,
						e4("div", { className: __default$K.delimiter }),
						e4(
							"div",
							{ className: __default$K.part },
							e4("p", null, "Move a note by dragging or"),
							e4(
								"div",
								{ className: __default$K.shortcut },
								e4(
									"svg",
									{ className: __default$K.move, width: 67, height: 33 },
									e4("rect", { className: __default$K.rect, x: 52 }),
									e4("rect", { className: __default$K.rect, x: 52, y: 17 }),
									e4("rect", { rx: 1, y: 8, height: 17, width: 49 }),
									e4("text", { x: 3, y: 21 }, "Shift"),
									e4("text", { x: 38, y: 20 }, "+"),
									e4(ArrowDown, { transform: "translate(36,0)" }),
									e4(ArrowUp, { transform: "translate(36,0)" })
								)
							)
						)
					)
				)
			)
		),
	hint$3 = "J11oq",
	hint0 = "J11oq J11sb",
	hint1 = "J11oq J11iw",
	hint2 = "J11oq J11tq",
	__default$J = {
		hint: "J11oq",
		hint0: "J11oq J11sb",
		hint1: "J11oq J11iw",
		hint2: "J11oq J11tq",
	},
	PrivateEditsHint = (e) => {
		let { className: t = __default$J.hint } = e;
		return e4(
			"div",
			{ className: t },
			e4(
				"p",
				null,
				"Unless you submit a revision, the changes will be private and wonΓÇÖt affect the sound."
			)
		);
	},
	popup$2 = "Cv41lu",
	reposition = "Cv41cy",
	popupInner = "Cv41uh",
	mainContainer = "Cv42y1",
	popupExtended = "Cv41lu Cv41ex",
	divider = "Cv4221",
	helpTag$1 = "Cv42ut",
	helpTagActive = "Cv42ut Cv428v",
	hint$2 = "Cv42e1",
	hintBold = "Cv42e1 Cv4tk",
	hintBigger = "Cv42e1 Cv4tk Cv41co",
	hintNoMargin = "Cv42e1 Cv425",
	hintSubmitted = "Cv42e1 Cv4tk Cv41co Cv42xo",
	__default$I = {
		popup: "Cv41lu",
		reposition: "Cv41cy",
		popupInner: "Cv41uh",
		mainContainer: "Cv42y1",
		popupExtended: "Cv41lu Cv41ex",
		divider: "Cv4221",
		helpTag: "Cv42ut",
		helpTagActive: "Cv42ut Cv428v",
		hint: "Cv42e1",
		hintBold: "Cv42e1 Cv4tk",
		hintBigger: "Cv42e1 Cv4tk Cv41co",
		hintNoMargin: "Cv42e1 Cv425",
		hintSubmitted: "Cv42e1 Cv4tk Cv41co Cv42xo",
	},
	EditorFooter = (e) => {
		let { status: t } = e,
			i = "No changes yet";
		return (
			"changes" === t || "saving" === t
				? (i = "Saving...")
				: "saved" === t && (i = "All changes saved privately"),
			e4(
				"div",
				{ style: { width: "100%" } },
				e4("div", { className: __default$I.divider }),
				e4(
					"div",
					{
						className: __default$I.hintBold,
						style: { padding: "4px 0px 3px" },
					},
					i
				)
			)
		);
	},
	RevisionsLink = (e) => {
		let { dispatch: t, children: i } = e;
		return e4(
			"span",
			{
				onClick: (e) => {
					e.preventDefault(),
						t("curiosity/event", {
							event: "Clicked a tab editor popup link",
							action: "Revisions",
						}),
						t("layer/show", "revisions");
				},
			},
			i
		);
	};
var RevisionsLink$1 = t(RevisionsLink);
let form = "Cwrup",
	textarea = tx + " Cwr3f",
	actions$1 = tw + " Cwr1dr",
	cancel = f + " Cwr1fo",
	hint$1 = "Cwr32t",
	error$1 = "Cwr2p4",
	title$1 = g + " Cwr109",
	content = y + " Cwr1pn",
	__default$H = {
		form: "Cwrup",
		textarea: tx + " Cwr3f",
		actions: tw + " Cwr1dr",
		cancel: f + " Cwr1fo",
		hint: "Cwr32t",
		error: "Cwr2p4",
		title: g + " Cwr109",
		content: y + " Cwr1pn",
	},
	RevisionForm = (e) => {
		let { onCancel: t, onSubmit: i } = e,
			a = e6(),
			[o, n] = e9(!1),
			[s, r] = e9(null),
			[l, u] = e9(null),
			d = async (e) => {
				e.preventDefault(), n(!0);
				try {
					v([{ field: a.current, validator: b }]),
						await i({ summary: a.current.value }),
						u(null);
				} catch (e) {
					e instanceof $ ? u(e) : r(e);
				}
				n(!1);
			},
			p = !s?.reasons?.summary;
		return e4(
			"form",
			{ className: __default$H.form, onSubmit: d },
			e4(_, { styles: __default$H, error: p && s }),
			e4(tv, {
				ref: a,
				name: "summary",
				type: "textarea",
				error: s,
				placeholder: "Briefly explain your changes",
				styles: __default$H,
				errorStyles: __default$H,
				popup: !0,
			}),
			e4(
				"div",
				{ className: __default$H.actions },
				e4("a", { className: __default$H.cancel, onClick: t }, "Cancel"),
				e4(t$, {
					id: l ? "submitRevisionButtonWarning" : "submitRevisionButton",
					title: "Submit a public revision",
					processing: o,
				})
			),
			e4(
				"p",
				{ className: __default$H.hint, style: { textAlign: "justify" } },
				[
					"Once audio rendering is complete, we'll send you an email, and your revision will appear on site for other users to enjoy. You can also submit more complex changes via ",
					e4(RevisionsLink$1, null, "Guitar Pro tab"),
					".",
				]
			)
		);
	},
	SubmitRevision = (e) => {
		let { showForm: t, onToggleForm: i, onSubmitted: a } = e,
			{ dispatch: o, meta: n, part: s } = m("meta", "part"),
			r = e7(
				async (e) => {
					let t = await x({
						...e,
						songId: n.songId,
						revision: n.revisionId || s.revisionId,
					});
					o("layer/hide"), o("upload/revision:merged", t), a();
				},
				[o, n, s]
			);
		return t
			? e4(RevisionForm, { onCancel: i, onSubmit: r })
			: e4(
					"div",
					null,
					e4(
						"button",
						{
							className: w.popupButtonGreen,
							style: { marginBottom: 15 },
							onClick: i,
						},
						"Submit a public revision"
					),
					e4(PrivateEditsHint, { className: __default$I.hintNoMargin })
			  );
	};
var SubmitRevision$1 = t(SubmitRevision);
let SignInLink = (e) => {
	let { dispatch: t, children: i } = e;
	return e4(
		"a",
		{
			href: "/a/wa/signin",
			onClick: (e) => {
				e.preventDefault(),
					t("curiosity/event", {
						event: "Clicked a tab editor popup link",
						action: "Sign In",
					}),
					t("navigate", "/a/wa/signin");
			},
		},
		i
	);
};
var SignInLink$1 = t(SignInLink);
class EditorPopup extends e3 {
	constructor() {
		super();
		let e = T("v2");
		e || C("v2"), (this.state = { helpActive: !e, showForm: !1 });
	}
	helpToggle = () => {
		let { helpActive: e } = this.state;
		this.setState({ helpActive: !e });
	};
	toggleForm = () => {
		let { dispatch: e } = this.props;
		this.setState((t) => {
			let { showForm: i } = t;
			return (
				i || e("curiosity/event", { event: "Clicked Submit editor revision" }),
				{ showForm: !i }
			);
		});
	};
	onSubmitted = () => {
		this.setState({ showForm: !1 });
	};
	render() {
		let { tabEditor: e, user: t } = this.props,
			{ helpActive: i, showForm: a } = this.state,
			o = i ? __default$I.popupExtended : __default$I.popup,
			n = a ? `${o} ${__default$I.reposition}` : o;
		return e4(
			"div",
			{ className: n },
			e4(
				"div",
				{ className: __default$I.popupInner },
				e4(
					"div",
					{
						className: i ? __default$I.helpTagActive : __default$I.helpTag,
						onClick: this.helpToggle,
					},
					e4("span", null, "?")
				),
				i && e4(EditorHelp, null),
				e4(
					"div",
					{ className: __default$I.mainContainer },
					e4(
						"div",
						null,
						e4("h3", {}, "TAB editor"),
						!t.isLoggedIn &&
							e4(
								"div",
								{ className: __default$I.hintBigger, style: { marginTop: 0 } },
								e4(SignInLink$1, null, "Sign up"),
								" for free to submit a public revision or to save changes privately."
							),
						!t.isLoggedIn &&
							e4(PrivateEditsHint, {
								className: t.isLoggedIn
									? __default$I.hint
									: __default$I.hintBigger,
							}),
						t.isLoggedIn &&
							e4(SubmitRevision$1, {
								showForm: a,
								onToggleForm: this.toggleForm,
								onSubmitted: this.onSubmitted,
							})
					),
					t.isLoggedIn && e4(EditorFooter, { status: e.status })
				)
			)
		);
	}
}
var EditorPopup$1 = t(EditorPopup, "tabEditor", "user", "experiments"),
	handIcon = "/static/media/hand.9a7dcf24.svg";
let popup$1 = "Cjoe6",
	popupWarning = "Cjoe6 Cjo2q1",
	warning = "Cjo186",
	hint = "Cjo1a2",
	helpTag = "Cjoi2",
	beta = "Cjo1pw",
	__default$G = {
		popup: "Cjoe6",
		popupWarning: "Cjoe6 Cjo2q1",
		warning: "Cjo186",
		hint: "Cjo1a2",
		helpTag: "Cjoi2",
		beta: "Cjo1pw",
	};
function HandPopup(e) {
	let { dispatch: t } = m();
	if ("In Progress" === e.status || "Error" === e.status)
		return e4(
			"div",
			{ className: __default$G.popupWarning },
			e4(
				"p",
				{ className: __default$G.warning },
				"In Progress" === e.status &&
					"Seems like fingerings generation for this track is in progress right now. Try again later.",
				"Error" === e.status &&
					"Failed to generate fingerings. We are working on a fix."
			)
		);
	let i = e7(
		() =>
			t("curiosity/event", { event: "Clicked open Beta fingerings article" }),
		[t]
	);
	return e4(
		"div",
		{ className: __default$G.popup },
		e4(
			S,
			{ to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: i },
			e4("div", { className: __default$G.helpTag }, e4("span", null, "?"))
		),
		e4("p", { className: __default$G.hint }, "Left hand"),
		e4("img", {
			src: handIcon,
			width: 76.6,
			height: 100.1,
			alt: "Fingerging hint",
		}),
		e4("span", { className: __default$G.beta }, "beta")
	);
}
let popup = "C0w33s",
	button$3 = "C0w3a",
	path$6 = "C0w1ij",
	activeButton = "C0w3a C0w13m",
	disabledButton$1 = "C0w3a C0w2bp",
	spacer = "C0wz2",
	__default$F = {
		popup: "C0w33s",
		button: "C0w3a",
		path: "C0w1ij",
		activeButton: "C0w3a C0w13m",
		disabledButton: "C0w3a C0w2bp",
		spacer: "C0wz2",
	};
class MetronomePopup extends e3 {
	render() {
		let { dispatch: e } = this.props,
			{ metronomeType: t, voiceMetronomeAvailable: i } = this.props.player,
			a = "regular" === t ? __default$F.activeButton : __default$F.button,
			o = {};
		return (
			i
				? ((o.className =
						"voice" === t ? __default$F.activeButton : __default$F.button),
				  (o.onClick = () => e("player/changeMetronome:init", "voice")))
				: ((o.className = __default$F.disabledButton),
				  (o.disabled = !0),
				  (o.title = "Voice metronome is unavailable on this song")),
			e4(
				"div",
				{ className: __default$F.popup },
				e4(
					"button",
					{
						className: a,
						onClick: () => e("player/changeMetronome:init", "regular"),
					},
					e4(
						"svg",
						{ width: 34, height: 32, viewBox: "-6 0 26 20" },
						e4(
							"defs",
							null,
							e4(
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
								e4("feFlood", {
									floodOpacity: "0",
									result: "BackgroundImageFix",
								}),
								e4("feColorMatrix", {
									in: "SourceAlpha",
									type: "matrix",
									values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
									result: "hardAlpha",
								}),
								e4("feOffset", { dy: "2" }),
								e4("feGaussianBlur", { stdDeviation: "6" }),
								e4("feColorMatrix", {
									type: "matrix",
									values:
										"0 0 0 0 0.533333 0 0 0 0 0.901961 0 0 0 0 0 0 0 0 0.75 0",
								}),
								e4("feBlend", {
									mode: "normal",
									in2: "BackgroundImageFix",
									result: "effect1_dropShadow_4343_1308",
								}),
								e4("feBlend", {
									mode: "normal",
									in: "SourceGraphic",
									in2: "effect_shadow_metro",
									result: "shape",
								})
							)
						),
						e4("path", { d: tu })
					),
					e4("p", null, "tick tock")
				),
				e4("div", { className: __default$F.spacer }),
				e4(
					"button",
					o,
					e4(
						"svg",
						{ width: 34, height: 32, viewBox: "0 0 34 28" },
						e4("use", { xlinkHref: `${tl}#icon`, className: __default$F.path })
					),
					e4("p", null, "one two")
				)
			)
		);
	}
}
var MetronomePopup$1 = t(MetronomePopup, "player"),
	de = null,
	es = null,
	fr = null,
	it = null,
	ja = null,
	ko = null,
	pt = null,
	ru = null,
	zh = null,
	locales = [de, es, fr, it, ja, ko, pt, ru, zh];
let print = "j515w",
	pane = "j5ha",
	zoom = "j5ak",
	printLabel = "j58u",
	actions = "j5lp",
	__default$E = {
		print: "j515w",
		pane: "j5ha",
		zoom: "j5ak",
		printLabel: "j58u",
		actions: "j5lp",
	};
class Print extends e3 {
	constructor(e) {
		super(e),
			(this.keyMap = {
				enter: this.hidePopup,
				"+": this.plus,
				"-": this.minus,
			});
	}
	hidePopup = (e) => {
		e.preventDefault(), this.props.dispatch("print/disable");
	};
	componentDidMount() {
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
	}
	plus = () => {
		this.props.dispatch("print/plus");
	};
	minus = () => {
		this.props.dispatch("print/minus");
	};
	print = async () => {
		await this.props.dispatch("curiosity/event", {
			event: "Printed tab",
			Scale: this.props.print.zoom,
		}),
			window.print();
	};
	render() {
		return e4(
			"div",
			{ className: __default$E.print, role: "dialog", "aria-label": "Print" },
			e4(
				"div",
				{ className: __default$E.zoom },
				e4(
					"button",
					{ onClick: this.minus, title: "Zoom Out" },
					e4(
						"svg",
						{ width: "22", height: "22", role: "img" },
						e4("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
						e4("path", { d: "M7 11 h8" })
					)
				),
				e4(
					"span",
					{ className: __default$E.printLabel, "aria-label": "Zoom" },
					this.props.print.zoom,
					"%"
				),
				e4(
					"button",
					{ onClick: this.plus, title: "Zoom In" },
					e4(
						"svg",
						{ width: "22", height: "22", role: "img" },
						e4("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
						e4("path", { d: "M5 11 h12 M 11 5 v12" })
					)
				)
			),
			e4(
				"div",
				{ className: __default$E.actions },
				e4(
					"button",
					{
						className: w.popupButtonGreen,
						onClick: this.print,
						title: "Print",
					},
					"Print"
				)
			)
		);
	}
}
var Print$1 = t(Print, "print");
let animationProps$2 = { animationStyles: R };
class Controls extends e3 {
	componentDidUpdate() {
		let { usedDrums: e, fingeringsOnActivate: t } = this.props;
		e || t();
	}
	render() {
		let { gettext: e } = k(locales),
			{
				device: t,
				plusAccess: i,
				layer: a,
				tadEditorWarning: o,
				speed: n,
				fingeringsEnabled: s,
				fingeringsActive: r,
				fingeringsStatus: l,
				usedDrums: u,
				videoIsOpened: d,
				metronomeType: h,
			} = this.props,
			{ print: c, experiments: f } = m("print", "experiments"),
			g = p(t.os) || P(t.os) || M(t),
			y = "mixer" === a,
			_ = "speed" === a,
			v = "print" === a && "on" === f.print_scale.segment,
			b = a === I,
			$ = this.props.tabEditorActive,
			x = "Loading" === l,
			w = "solo" === this.props.type && !d,
			T = "mute" === this.props.type && !d,
			C = this.props.loop,
			S = this.props.isCountin && !d,
			R = this.props.isMetronome && !d,
			D = `${Math.round(n)}%`,
			O = !i,
			F = !i,
			z = td.panePlus2;
		return (
			u ? (z = td.panePlus2Secondary) : s && (z = td.panePlus3),
			e4(
				"aside",
				{ id: "controls", className: z, "data-controls": "tablature" },
				e4("div", { className: td.handler }),
				e4(
					"div",
					{ className: td.centerGroup },
					e4(
						"div",
						{ className: td.item },
						e4(tp, {
							shouldPlay: this.props.shouldPlay,
							canPlay: this.props.canPlay,
							onClick: this.props.handlePlay,
							title: e("Play (Space)"),
							titlePressed: e("Pause (Space)"),
						})
					),
					e4(
						"div",
						{ className: td.item, id: "mixer-button" },
						e4(MixerButton, {
							pressed: y,
							onClick: this.props.handleMixer,
							title: e("Show tracks (T)"),
							titlePressed: e("Hide tracks (T)"),
							instrumentId: this.props.track
								? this.props.track.instrumentId
								: L,
							name: this.props.track ? this.props.track.name : "",
						}),
						e4(N, null, y && e4(E, animationProps$2, e4(B, null)))
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `speed ${_}`,
							icon: "speed",
							text: D,
							pressed: _,
							onClick: this.props.handleSpeed,
							title: e(
								"Open speed panel (S). Change tempo: (Alt+1ΓÇô7) for 25%ΓÇô175%, (Alt+S/A) for 1 bpm change"
							),
							hasPopup: !0,
							lock: F,
						}),
						e4(
							N,
							null,
							"plus_speed" === a &&
								e4(
									E,
									{ ...animationProps$2, key: "popup" },
									g
										? e4(AppPopup, {
												title: e("Tempo Control"),
												device: t,
												horizontal: !0,
												feature: "slowdown",
										  })
										: e4(tc, {
												title: e("Tempo Control"),
												horizontal: !0,
												classPrefix: "speed",
										  })
								),
							_ &&
								e4(E, { ...animationProps$2, key: "layer" }, e4(Speed$1, null))
						)
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `loop ${C}`,
							icon: "loop",
							pressed: C,
							onClick: this.props.handleLoop,
							title: e("Turn loop mode on (L)"),
							titlePressed: e("Turn loop mode off (L)"),
							hasPopup: O,
							lock: F,
						}),
						e4(
							N,
							null,
							"plus_loop" === a &&
								e4(
									E,
									animationProps$2,
									g
										? e4(AppPopup, {
												title: e("Loop Mode"),
												device: t,
												horizontal: !0,
												feature: "loop",
										  })
										: e4(tc, {
												title: e("Loop Mode"),
												horizontal: !0,
												classPrefix: "loop",
										  })
								)
						)
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `solo ${w}`,
							icon: "solo",
							disabled: d,
							pressed: w,
							onClick: this.props.handleSolo,
							title: e("Play current track solo (F)"),
							titlePressed: e("Play focus mix of all tracks (F)"),
							hasPopup: O,
							lock: F,
						}),
						e4(
							N,
							null,
							"plus_solo" === a &&
								!d &&
								e4(
									E,
									animationProps$2,
									g
										? e4(AppPopup, {
												title: e("Solo Mode"),
												device: t,
												horizontal: !0,
												feature: "solo",
										  })
										: e4(tc, {
												title: e("Solo Mode"),
												horizontal: !0,
												classPrefix: "solo",
										  })
								),
							"solo_single" === a &&
								!d &&
								e4(
									E,
									animationProps$2,
									e4(StubPopup, { title: e("Solo"), horizontal: !0 })
								)
						)
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `mute ${T}`,
							icon: "mute",
							disabled: d,
							pressed: T,
							onClick: this.props.handleMute,
							title: e("Mute current track (M)"),
							titlePressed: e("Unmute current track (M)"),
							hasPopup: O,
							lock: F,
						}),
						e4(
							N,
							null,
							"plus_mute" === a &&
								!d &&
								e4(
									E,
									animationProps$2,
									g
										? e4(AppPopup, {
												title: e("Mute Mode"),
												device: t,
												horizontal: !0,
												feature: "mute",
										  })
										: e4(tc, {
												title: e("Mute Mode"),
												horizontal: !0,
												classPrefix: "mute",
										  })
								)
						)
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `countin ${S}`,
							icon: "countin",
							disabled: d,
							pressed: S,
							onClick: this.props.handleCountin,
							title: e("Turn count-in mode on (C)"),
							titlePressed: e("Turn count-in mode off (C)"),
						})
					),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: `metronome ${R}`,
							icon: "voice" === h ? "voice" : "metronome",
							disabled: d,
							pressed: R,
							onClick: this.props.handleMetronome,
							title: e("Turn metronome on (N)"),
							titlePressed: e("Turn metronome off (N)"),
						}),
						e4(
							N,
							null,
							!d &&
								"metronome" === a &&
								e4(
									E,
									{ ...animationProps$2, key: "layer" },
									e4(MetronomePopup$1, null)
								)
						)
					),
					!u &&
						e4(
							"div",
							{ className: td.item },
							e4(th, {
								key: `editor ${$} ${o}`,
								icon: "editor",
								pressed: $,
								onClick: this.props.handleTabEditor,
								title: e("Turn tab editor on (E)"),
								titlePressed: e("Turn tab editor off (E)"),
								warning: o,
							}),
							$ &&
								e4(
									E,
									{ ...animationProps$2, key: "tab-editor" },
									e4(EditorPopup$1, null)
								)
						),
					s &&
						!u &&
						e4(
							"div",
							{ className: td.item },
							e4(th, {
								key: `fingerings ${x} ${r}`,
								loading: x,
								icon: "fingerings",
								pressed: r,
								onClick: this.props.handleFingerings,
								title: e("Generate guitar fingerings (G)"),
								titlePressed: e("Turn fingerings off (G)"),
							}),
							e4(
								N,
								null,
								r &&
									"Loading" !== l &&
									!$ &&
									e4(E, animationProps$2, e4(HandPopup, { status: l }))
							)
						),
					e4(
						"div",
						{ className: td.item },
						e4(th, {
							key: "print",
							icon: "print",
							onClick: this.props.handlePrint,
							title: "Print (P)",
							pressed: c.enabled,
							lock: F,
						}),
						e4(
							N,
							null,
							"plus_print" === a &&
								e4(
									E,
									animationProps$2,
									e4(tc, {
										title: e("Printing"),
										horizontal: !0,
										classPrefix: "print",
									})
								),
							v &&
								e4(E, { ...animationProps$2, key: "layer" }, e4(Print$1, null))
						)
					),
					e4(
						"div",
						{ className: td.secondaryControls },
						e4(
							"div",
							{ className: u ? td.itemSmall : td.itemSmallHidden },
							e4(th, {
								key: `help ${b}`,
								icon: "help",
								pressed: b,
								onClick: this.props.handleNotation,
								title: e("Show drum notation"),
								titlePressed: e("Hide drum notation"),
							}),
							u && e4(A, { usedDrums: u, horizontal: !0 })
						)
					)
				)
			)
		);
	}
}
let PATH_UP = "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z",
	PATH_DOWN = "M7.5 12h11v-2h-11v2z";
function PitchShiftUpDownIcon(e) {
	let { up: t } = e;
	return e4(
		"svg",
		{ width: "44", height: "46", role: "img" },
		e4("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
		e4("path", {
			d: t ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
		})
	);
}
let pitchshift = "B7uxe",
	pitchshiftMobile = "B7uxe B7u2i3",
	pitchshiftSection = "B7u2d7",
	separator = "B7u1gz",
	tuneControls = "B7u2d7 B7u12o",
	currentTuning = "B7u2d7 B7u15f",
	currentTuningHeader = "B7u2lu",
	currentTuningFiller = "B7u2xf",
	tuningString = "B7u1a5",
	button$2 = "B7u1jq",
	quickButton = "B7u1jq B7u2yh",
	disabledButton = "B7u1jq B7u2yh B7u6z",
	updown = "B7u1jq B7u1fq",
	currentPitch = "B7u1b6",
	__default$D = {
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
	MAX_PITCH = 12,
	MIN_PITCH = -12,
	isRetunable = (e) =>
		e.current &&
		(H(e.current.instrumentId) || j(e.current.instrumentId)) &&
		e.current.tuning;
class PitchShift extends e3 {
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
			let a = D(i.current, e.audio.getCursor(), "left");
			a && t(null, a.measureLayout.lineLayout, !1);
		}
	}
	tuneUp = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t < 12 && O(this.props.store, t + 1);
	};
	tuneDown = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t > -12 && O(this.props.store, t - 1);
	};
	reset = (e) => {
		e.preventDefault(), O(this.props.store, 0);
	};
	renderCurrentTuning = () => {
		if (isRetunable(this.props.part)) {
			let e = this.props.part.current.tuning.map(
				(e) => e + this.props.player.pitchShift
			);
			return e4(
				"div",
				{
					className: __default$D.currentTuning,
					"aria-label": "Current tuning",
				},
				e4(
					"div",
					{ className: __default$D.currentTuningHeader },
					"CURRENT TUNING"
				),
				e4("div", { id: "tuning", className: __default$D.tuningString }, F(e))
			);
		}
		return null;
	};
	renderQuickButton = () => {
		if (0 !== this.props.player.pitchShift)
			return e4(
				"button",
				{
					className: __default$D.quickButton,
					onClick: this.reset,
					role: "button",
					"aria-label": "Restore original tuning",
				},
				"Restore original tuning"
			);
		if (isRetunable(this.props.part)) {
			let e = z(
				this.props.part.current.instrumentId,
				this.props.part.current.tuning
			);
			if (e && 0 !== e.pitch) {
				let t = e.tuningName;
				return (
					"STANDARD TUNING" === t && (t = "Standard tuning"),
					e4(
						"button",
						{
							className: __default$D.quickButton,
							role: "button",
							"aria-label": "Quick shift pitch",
							onClick: () => {
								O(this.props.store, e.pitch);
							},
						},
						`Convert to ${t}`
					)
				);
			}
		}
		return e4(
			"button",
			{
				className: __default$D.disabledButton,
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
			{ tab: a, tuningButton: o, mobile: n } = this.props,
			s = 0,
			r = 0,
			l = __default$D.pitchshift;
		if (n) (s = -71), (r = -235), (l = __default$D.pitchshiftMobile);
		else if (((s = this.props.firstLineLayoutHeight - 58), (r = 55), a && o)) {
			let e = a.getBoundingClientRect(),
				t = o.getBoundingClientRect();
			(r = t.left - e.left + t.width + 21),
				(s = t.top + t.height - e.top - 77.5);
		}
		return e4(
			"div",
			{
				className: l,
				title: "You can use arrow keys",
				role: "dialog",
				"aria-label": "Shift Pitch",
				"data-tab-control": "pitch",
				style: { top: `${s}px`, left: `${r}px` },
			},
			t || e4("div", { className: __default$D.currentTuningFiller }),
			e4(
				"div",
				{ className: __default$D.tuneControls },
				e4(
					"button",
					{
						className: __default$D.updown,
						onClick: this.tuneDown,
						disabled: i <= -12,
						"aria-label": "Step down",
					},
					e4(PitchShiftUpDownIcon, { up: !1 })
				),
				e4(
					"span",
					{
						className: __default$D.currentPitch,
						"aria-label": "Current pitch",
					},
					(i > 0 ? "+" : "") + i
				),
				e4(
					"button",
					{
						className: __default$D.updown,
						onClick: this.tuneUp,
						disabled: i >= 12,
						"aria-label": "Step up",
					},
					e4(PitchShiftUpDownIcon, { up: !0 })
				)
			),
			e
		);
	}
}
var PitchShift$1 = t(PitchShift, "player", "part");
let mobileSpeed = "B6714x",
	secondary = "B67al",
	controls$1 = "B6713d",
	value = "B6711t",
	button$1 = "B6731g",
	disabled = "B6731g B679r",
	_switch = "B67147",
	__default$C = {
		mobileSpeed: "B6714x",
		secondary: "B67al",
		controls: "B6713d",
		value: "B6711t",
		button: "B6731g",
		disabled: "B6731g B679r",
		switch: "B67147",
	},
	MIN_PERCENT_VALUE = 30,
	MAX_PERCENT_VALUE = 170,
	STEP_PERCENT = 10;
class MobileSpeed extends e3 {
	constructor() {
		super(), (this.state = { mode: "percent" });
	}
	tuneUp = (e) => {
		let t, i;
		e.preventDefault();
		let { store: a, player: o, tempo: n } = this.props,
			{ mode: s } = this.state;
		"percent" === s
			? ((t = 10), (i = Math.floor(o.speed / t) * t + t))
			: ((t = +(100 / n.tempo.bpm).toFixed(2)), (i = o.speed + t)),
			i <= 170 && i >= 30 && u(a, i);
	};
	tuneDown = (e) => {
		let t, i;
		e.preventDefault();
		let { store: a, player: o, tempo: n } = this.props,
			{ mode: s } = this.state;
		"percent" === s
			? ((t = 10), (i = Math.floor(o.speed / t) * t - t))
			: ((t = +(100 / n.tempo.bpm).toFixed(2)), (i = o.speed - t)),
			i <= 170 && i >= 30 && u(a, i);
	};
	switchMode = () => {
		let { mode: e } = this.state;
		this.setState({ mode: "percent" === e ? "bpm" : "percent" });
	};
	render() {
		let e, t;
		let { tempo: a } = this.props,
			{ speed: o } = this.props.player,
			{ mode: n } = this.state,
			s = i(o, a.tempo),
			r = Math.round(o),
			l = __default$C.disabled,
			u =
				"percent" === n
					? 10 * Math.floor(o / 10) - 10
					: o - +(100 / a.tempo.bpm).toFixed(2);
		u >= 30 && ((l = __default$C.button), (e = this.tuneDown));
		let d = __default$C.disabled,
			p =
				"percent" === n
					? 10 * Math.floor(o / 10) + 10
					: o + +(100 / a.tempo.bpm).toFixed(2);
		return (
			p <= 170 && ((d = __default$C.button), (t = this.tuneUp)),
			e4(
				"div",
				{
					className: __default$C.mobileSpeed,
					role: "dialog",
					"aria-label": "Speed",
				},
				e4(
					"p",
					{ className: __default$C.secondary },
					"percent" === n ? `${s.bpm} bpm` : `${r}%`
				),
				e4(
					"div",
					{ className: __default$C.controls },
					e4(
						"button",
						{ className: l, onClick: e },
						e4(PitchShiftUpDownIcon, { up: !1 })
					),
					e4(
						"div",
						{ className: __default$C.value },
						e4("p", null, "percent" === n ? `${r}%` : s.bpm),
						"bpm" === n && e4("span", null, "bpm")
					),
					e4(
						"button",
						{ className: d, onClick: t },
						e4(PitchShiftUpDownIcon, { up: !0 })
					)
				),
				e4(
					"button",
					{ className: __default$C.switch, onClick: this.switchMode },
					`Switch to ${"percent" === n ? "bpm" : "%"}`
				)
			)
		);
	}
}
var MobileSpeed$1 = t(MobileSpeed, "player", "tempo");
let controls = "n8g5",
	float = "n8n1",
	features = "n885",
	featuresActive = "n885 n81jn",
	item = "n82pa",
	tuningValue = "n835f",
	minimize = "n82pa n81e8",
	play = "n82pa n813x",
	button = "n81sz",
	active$1 = "n81sz n8on",
	exitActive$1 = "n819i",
	enterActive$1 = "n81z",
	enter$1 = "n81yu",
	exit$1 = "n82mi",
	alt = "n8kg",
	__default$B = {
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
	animationProps$1 = { animationStyles: X };
class MobileControls extends e3 {
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
	componentDidUpdate() {
		let { usedDrums: e, fingeringsOnActivate: t } = this.props;
		e || this.state.minimized || t();
	}
	constructor(e) {
		super(e), (this.state = { minimized: !1, overflowVisible: !0 });
	}
	render() {
		let {
				device: e,
				layer: t,
				shouldPlay: i,
				canPlay: a,
				pitchShift: o,
				pitchShiftAvailable: n,
				speed: s,
				fingeringsStatus: r,
				fingeringsActive: l,
				fingeringsEnabled: u,
				usedDrums: d,
				metronomeType: h,
			} = this.props,
			{ minimized: c, overflowVisible: f } = this.state,
			{ print: g, experiments: y } = m("print", "experiments"),
			_ = "speed" === t,
			v = "pitchshift" === t,
			b = "Loading" === r,
			$ = u && !d,
			x = "solo" === this.props.type,
			w = "mute" === this.props.type,
			T = this.props.speed !== V || _,
			C = this.props.loop,
			S = this.props.isCountin,
			k = this.props.isMetronome,
			M = !this.props.plusAccess,
			L = !this.props.plusAccess,
			B = p(e.os) || P(e.os),
			A = "print" === t && "on" === y.print_scale.segment,
			R = { height: `${471 + 57 * (n ? 1 : 0) + 57 * ($ ? 1 : 0)}px` },
			I = __default$B.features;
		c ? (R.height = "71px") : f && (I = __default$B.featuresActive);
		let D = `${Math.round(s)}%`;
		return e4(
			"footer",
			{ className: __default$B.controls, "data-controls": "tablature" },
			e4(
				"svg",
				{ width: 0, height: 0 },
				e4("defs", null, e4(tm, {}), e4(tf, {}))
			),
			e4(
				"div",
				{ className: __default$B.alt, id: "alt-controls" },
				e4(tp, {
					shouldPlay: i,
					canPlay: a,
					onClick: this.props.handlePlay,
					title: "Play",
					hideDefs: !0,
				})
			),
			e4(
				"div",
				{ className: __default$B.float, id: "mobile-controls" },
				e4(
					"div",
					{ className: I, style: R },
					e4(
						"div",
						{ className: __default$B.minimize },
						e4(th, {
							mobile: !0,
							icon: c ? "arrow" : "arrow-down",
							pressed: !1,
							onClick: this.minimizeClick,
							title: "Minimize",
							titlePressed: "Minimize",
						})
					),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							mobile: !0,
							icon: "speed",
							text: D,
							pressed: T,
							onClick: this.props.handleSpeed,
							title: "Change playback speed",
							hasPopup: M,
							lock: L,
						}),
						e4(
							N,
							null,
							"plus_speed" === t &&
								e4(
									E,
									animationProps$1,
									B
										? e4(AppPopup, {
												title: "Tempo Control",
												device: e,
												mobile: !0,
												low: !0,
												feature: "slowdown",
										  })
										: e4(tc, { title: "Tempo Control", classPrefix: "speed" })
								),
							_ &&
								e4(
									E,
									{ ...animationProps$1, key: "layer" },
									e4(MobileSpeed$1, null)
								)
						)
					),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							mobile: !0,
							icon: "loop",
							pressed: C,
							onClick: this.props.handleLoop,
							title: "Turn loop mode on",
							titlePressed: "Turn loop mode off",
							hasPopup: M,
							lock: L,
						}),
						e4(
							N,
							null,
							"plus_loop" === t &&
								e4(
									E,
									animationProps$1,
									B
										? e4(AppPopup, {
												title: "Loop Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "loop",
										  })
										: e4(tc, { title: "Loop Mode", classPrefix: "loop" })
								)
						)
					),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							mobile: !0,
							icon: "solo",
							pressed: x,
							onClick: this.props.handleSolo,
							title: "Play the current track solo",
							titlePressed: "Play the focus mix of all tracks",
							hasPopup: M,
							lock: L,
						}),
						e4(
							N,
							null,
							"plus_solo" === t &&
								e4(
									E,
									animationProps$1,
									B
										? e4(AppPopup, {
												title: "Solo Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "solo",
										  })
										: e4(tc, { title: "Solo Mode", classPrefix: "solo" })
								),
							"solo_single" === t &&
								e4(
									E,
									animationProps$1,
									e4(StubPopup, { title: "Solo", horizontal: !0 })
								)
						)
					),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							mobile: !0,
							icon: "mute",
							pressed: w,
							onClick: this.props.handleMute,
							title: "Mute current track (M)",
							titlePressed: "Unmute current track (M)",
							hasPopup: M,
							lock: L,
						}),
						e4(
							N,
							null,
							"plus_mute" === t &&
								e4(
									E,
									animationProps$1,
									B
										? e4(AppPopup, {
												title: "Mute Mode",
												device: e,
												mobile: !0,
												feature: "mute",
										  })
										: e4(tc, { title: "Mute Mode", classPrefix: "mute" })
								)
						)
					),
					$ &&
						e4(
							"div",
							{ className: __default$B.item },
							e4(th, {
								key: `fingerings ${b} ${l}`,
								loading: b,
								icon: "fingerings",
								pressed: l,
								onClick: this.props.handleFingerings,
								title: "Generate guitar fingerings (G)",
								titlePressed: "Turn fingerings off (G)",
							}),
							e4(
								N,
								null,
								l &&
									"Loading" !== r &&
									e4(E, animationProps$1, e4(HandPopup, { status: r }))
							)
						),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							mobile: !0,
							icon: "countin",
							pressed: S,
							onClick: this.props.handleCountin,
							title: "Turn count-in mode on (C)",
							titlePressed: "Turn count-in mode off (C)",
						})
					),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							icon: "voice" === h ? "voice" : "metronome",
							pressed: k,
							onClick: this.props.handleMetronome,
							title: "Turn metronome on (N)",
							titlePressed: "Turn metronome off (N)",
						}),
						e4(
							N,
							null,
							"metronome" === t &&
								e4(
									E,
									{ ...animationProps$1, key: "layer" },
									e4(MetronomePopup$1, null)
								)
						)
					),
					n &&
						e4(
							"div",
							{ className: __default$B.item },
							0 !== o &&
								e4(
									"div",
									{ className: __default$B.tuningValue },
									`${o > 0 ? "+" : ""}${o}`
								),
							e4(th, {
								mobile: !0,
								icon: "tuning",
								pressed: 0 !== o || v,
								onClick: this.props.handlePitchshift,
								title: "Pitch Shift on",
								titlePressed: "Pitch Shift off",
								hasPopup: M,
								lock: L,
							}),
							e4(
								N,
								null,
								"plus_pitchshift" === t &&
									e4(
										E,
										animationProps$1,
										B
											? e4(AppPopup, {
													title: "Pitch Shift",
													device: e,
													mobile: !0,
													feature: "pitch shift",
											  })
											: e4(tc, { title: "Pitch Shift", classPrefix: "pitch" })
									),
								v &&
									e4(
										E,
										{ ...animationProps$1, key: "layer" },
										e4(PitchShift$1, { mobile: !0 })
									)
							)
						),
					e4(
						"div",
						{ className: __default$B.item },
						e4(th, {
							key: "print",
							icon: "print",
							onClick: this.props.handlePrint,
							title: "Print (P)",
							pressed: g.enabled,
							lock: L,
						}),
						e4(
							N,
							null,
							"plus_print" === t &&
								e4(
									E,
									animationProps$1,
									e4(tc, {
										title: "Printing",
										horizontal: !0,
										classPrefix: "print",
									})
								),
							A &&
								e4(E, { ...animationProps$1, key: "layer" }, e4(Print$1, null))
						)
					)
				),
				e4(
					"div",
					{ className: __default$B.play },
					e4(tp, {
						onClick: (e) => {
							this.props.handlePlay(e), this.hide();
						},
						title: "Play",
						titlePressed: "Pause",
						shouldPlay: i,
						canPlay: a,
						hideDefs: !0,
					})
				)
			)
		);
	}
}
let error = "Brk2di",
	title = "Brk2yo",
	subtitle = "Brk1b7",
	__default$A = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function DeletedSong() {
	return e4(
		"div",
		{ className: __default$A.error, role: "alert" },
		e4(
			"h1",
			{ className: __default$A.title },
			e4("span", null, "The song was successfully deleted!")
		),
		e4(
			"h2",
			{ className: __default$A.subtitle },
			"Try ",
			e4(S, { to: "/" }, "searching"),
			" for other songs."
		)
	);
}
class IconAlert extends e3 {
	render() {
		return e4(
			"svg",
			{ width: 112, height: 112, viewBox: "0 0 112 112" },
			e4(
				"g",
				{
					fill: "none",
					fillRule: "evenodd",
					stroke: "#FD651A",
					"stroke-width": "11",
					transform: "translate(6 6)",
				},
				e4("circle", { cx: 50, cy: 50, r: 50 }),
				e4("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
			)
		);
	}
}
function LicenseRestriction() {
	return e4(
		U,
		{
			level: "notice",
			title:
				"Sorry this content has been removed in your country at the request of the underlying music publisher.",
			action:
				"We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
			reason: "license",
		},
		e4(IconAlert, null)
	);
}
function AlertManager(e) {
	let { meta: t, user: i, cursor: a, part: o, player: n } = e;
	if (t.loading || o.loading) return;
	let s = !!t.current,
		r = t.current && !!t.current.tracks,
		l = q(t, i),
		u = s && G.get(t.current, K.MASTER),
		d = t.current && t.current.isBlocked;
	if (t.isNotFound || o.isNotFound) return e4(tT, null);
	if (t.isDeleted) return e4(DeletedSong, null);
	if (t.isNetworkFailed || o.isNetworkFailed) return e4(tC, null);
	if (t.isFailed || o.isFailed) return e4(tM, null);
	if (!t.allowedByLicense) return e4(LicenseRestriction, null);
	if (s && !l && u.audioError) {
		let e = u.audioError,
			t = "Our virtual band was unable to play it O_o";
		return (
			e === Y.TOO_LONG && (t = "Its duration exceeds the 30 minutes limit"),
			e4(U, {
				level: "error",
				title: "Sorry, playback is not possible on this song",
				action: t,
				reason: "audio",
			})
		);
	}
	if (s && (!r || !l))
		return e4(U, {
			level: "info",
			title: "Tab audio is being rendered",
			action:
				"We'll send you an email within 15 minutes once your tab is ready",
			reason: "render",
		});
	else if (!n.webworkerOperational)
		return e4(U, {
			level: "info",
			title: "Sorry, playback is not possible on this song",
			action: "Probably there is not enough memory",
			reason: "webworker",
		});
	else if (!n.playbackAvailable || !W)
		return e4(U, {
			level: "info",
			title: "Sorry, playback is not supported in your browser",
			action: "Try to use latest Google Chrome",
			reason: n.playbackAvailable ? "animate" : "audio",
		});
	else if (n.isAudioNetworkFailed)
		return e4(U, {
			level: "info",
			title: "Audio can't be loaded because of network error.",
			action: "Probably you are offline or connection was canceled",
			reason: "network",
		});
	else if (n.isAudioFailed)
		return e4(U, {
			level: "error",
			title: "Sorry, but there are some problems with playback",
			action: "Please, try to reload page",
			reason: "playback",
		});
	else if (a.isFailed)
		return e4(U, {
			level: "error",
			title: "Sorry, but there are some problems with cursor",
			action: "Please, try to reload page",
			reason: "cursor",
		});
	else if (d)
		return e4(U, {
			level: "notice",
			title: "Sorry, but that revision was blocked",
			action: "Please let us know if you disagree with this decision",
			reason: "block",
		});
}
let main = "Bvj22a",
	showroom = J + " Bvj1o9",
	banner = "Bvj1b4",
	__default$z = { main: "Bvj22a", showroom: J + " Bvj1o9", banner: "Bvj1b4" },
	ShowroomBottom = te(() => {
		let e = e6(),
			{ device: t, ads: i } = m("device", "ads", "route", "consent"),
			{ alt: a, link: o, image: n } = Z(t);
		return e4(
			"section",
			{
				id: "showroom_bottom",
				className: __default$z.main,
				key: "showroom-bottom",
				ref: e,
			},
			e4(
				"div",
				{ className: __default$z.showroom, id: "Redesign_BTF_tab_page_320x50" },
				i.notsyFailed &&
					e4(
						"a",
						{ className: __default$z.link, href: o, target: "_blank" },
						e4("img", { src: n, className: __default$z.banner, alt: a })
					)
			)
		);
	});
class TimeStampItem extends e3 {
	inputRef = tt();
	constructor(e) {
		super(e), (this.state = { active: !1 });
	}
	onClick = () => {
		this.setState({ active: !0 });
	};
	setValue = (e) => {
		if (27 === e.keyCode) this.setState({ active: !1 });
		else if (13 === e.keyCode) {
			let e = +this.inputRef.current?.value;
			this.props.editValue(this.props.index, e), this.setState({ active: !1 });
		}
	};
	render = () => {
		let { index: e, value: t } = this.props,
			{ active: i } = this.state;
		return e4(
			"li",
			{ onClick: this.onClick, key: e },
			i
				? e4("input", {
						ref: this.inputRef,
						defaultValue: t,
						title: "Enter to edit, Esc to cancel",
						onKeyDown: this.setValue,
				  })
				: `${e + 1}. ${t},
`
		);
	};
}
let container = "Bwr2bn",
	inner = "Bwr2yk",
	video = "Bwra8",
	openSection$1 = "Bwr1rq",
	toggleButton$1 = "Bwr34e",
	toggleButtonClose$1 = "Bwr34e Bwr25b",
	hideBtn = "Bwrhb",
	editorBtn = "Bwrhb Bwr2id",
	settings = "Bwrbh",
	videoInput = "Bwrb4",
	buttons = "Bwr1g3",
	timestamps = "Bwra6",
	__default$y = {
		container: "Bwr2bn",
		inner: "Bwr2yk",
		video: "Bwra8",
		openSection: "Bwr1rq",
		toggleButton: "Bwr34e",
		toggleButtonClose: "Bwr34e Bwr25b",
		hideBtn: "Bwrhb",
		editorBtn: "Bwrhb Bwr2id",
		settings: "Bwrbh",
		videoInput: "Bwrb4",
		buttons: "Bwr1g3",
		timestamps: "Bwra6",
	},
	played10SecStorage = "playedVideoFor10Seconds",
	getPlayerInstance = (e, t) =>
		document.querySelector(`iframe#youtube-player-${e}-${t}`),
	getOrigin = () => {
		try {
			return window.location.hostname;
		} catch {
			return;
		}
	};
class YTPlayer extends e3 {
	playerAPI = null;
	playTimer = null;
	listRef = tt();
	constructor(e) {
		super(e), (this.state = { timestamps: [], openedEditor: !1 });
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
	componentDidUpdate(e) {
		let { songId: t, part: i, player: a } = this.props,
			o = e.songId,
			n = e.part.videoOffset,
			s = e.part.videoId;
		if (t !== o || i.videoOffset !== n || i.videoId !== s) {
			a.video.destroy();
			let e = getPlayerInstance(s, o);
			for (; e; ) e.remove(), (e = getPlayerInstance(s, o));
			this.loadVideo();
		}
	}
	componentWillUnmount() {
		this.props.player.video.destroy(),
			clearTimeout(this.playTimer),
			window.hotKeysManager.unbindOne("j", { global: !0 });
	}
	loadVideo = () => {
		try {
			let {
					songId: e,
					cursor: { position: t },
					player: { video: i, speed: a },
					part: o,
					dispatch: n,
				} = this.props,
				s = o.videoId,
				r = o.videoOffset;
			this.playerAPI = new window.YT.Player(`youtube-player-${s}-${e}`, {
				videoId: s,
				playerVars: {
					controls: 0,
					disablekb: 1,
					showinfo: 0,
					rel: 0,
					modestbranding: 0,
					origin: getOrigin(),
					fs: 0,
					cc_load_policy: 0,
					iv_load_policy: 3,
					enablejsapi: 1,
					start: Math.floor(r) + t.cursor / 1e3,
				},
				width: "200",
				height: "200",
				events: {
					onReady: () => {
						i.load(this.playerAPI, r, t, a);
					},
					onError: (e) => {
						console.error(e),
							n("curiosity/event", { event: "Video player error" });
					},
					onStateChange: this.onYTPlayerStateChange,
				},
			});
		} catch {}
	};
	addBarTimestamp = () => {
		let { timestamps: e } = this.state,
			t = [...e],
			i = this.playerAPI.getCurrentTime();
		t.push((i = +i.toFixed(6))),
			this.setState({ timestamps: t }, () => {
				this.listRef.current?.scrollTo({
					top: this.listRef.current?.scrollHeight,
				});
			});
	};
	editTimestamp = (e, t) => {
		let { timestamps: i } = this.state,
			a = [...i];
		(a[e] = t), this.setState({ timestamps: a });
	};
	syncClick = async () => {
		let { dispatch: e } = this.props,
			{ timestamps: t } = this.state;
		e("part/applyVideoBarPoints", { points: t });
	};
	saveClick = () => {
		let { dispatch: e } = this.props,
			{ timestamps: t } = this.state;
		e("part/saveVideoPoints", { points: t });
	};
	resetPoints = () => {
		this.setState({ timestamps: [] });
	};
	changeVideoId = (e) => {
		this.props.dispatch("part/changeVideoId", e.target.value);
	};
	played10Seconds = () => {
		Q(played10SecStorage) ||
			(this.props.dispatch("curiosity/event", {
				event: "Played video for 10 sec first time",
			}),
			ee(played10SecStorage, !0));
	};
	onYTPlayerStateChange = (e) => {
		switch (e.data) {
			case 1:
				this.props.handlePlayVideo(),
					window.focus(),
					clearTimeout(this.playTimer),
					(this.playTimer = setTimeout(this.played10Seconds, 1e4));
				break;
			case 2:
				this.props.handlePauseVideo(),
					window.focus(),
					clearTimeout(this.playTimer);
				break;
			case 3:
				this.props.dispatch("player/suspend", "buffering");
				break;
			case 0:
				this.props.handlePauseVideo(), clearTimeout(this.playTimer);
		}
	};
	toggleVideo = () => {
		this.props.dispatch("part/toggleVideo");
	};
	toggleEditor = () => {
		this.state.openedEditor
			? window.hotKeysManager.unbindOne("j", { global: !0 })
			: window.hotKeysManager.bindOne("j", this.addBarTimestamp, {
					global: !0,
			  }),
			this.setState({ openedEditor: !this.state.openedEditor });
	};
	render = () => {
		let { videoOpened: e } = this.props.player,
			{ songId: t, part: i, user: a } = this.props,
			{ timestamps: o, openedEditor: n } = this.state,
			s = et(a, ei.USE_VIDEO_SYNCHRONISATION);
		return [
			e
				? e4(
						"div",
						{ className: __default$y.openSection },
						e4(
							"button",
							{
								className: __default$y.toggleButtonClose,
								onClick: this.toggleVideo,
								id: "close-video",
								tittle: "Close video",
							},
							"Close official audio"
						)
				  )
				: e4(
						"div",
						{ className: __default$y.openSection },
						e4(
							"button",
							{
								className: __default$y.toggleButton,
								onClick: this.toggleVideo,
								id: "open-video",
								tittle: "Open video",
							},
							"Play along with official audio"
						)
				  ),
			e4(
				"div",
				{
					className: __default$y.container,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-container",
				},
				e4(
					"div",
					{ className: __default$y.inner },
					n &&
						s &&
						e4(
							"div",
							{ className: __default$y.settings },
							e4("input", {
								className: __default$y.videoInput,
								type: "text",
								placeholder: "videoId",
								onBlur: this.changeVideoId,
							}),
							e4(
								"div",
								{ className: __default$y.timestamps, ref: this.listRef },
								e4(
									"ul",
									null,
									o.map((e, t) =>
										e4(TimeStampItem, {
											index: t,
											value: e,
											editValue: this.editTimestamp,
										})
									)
								)
							),
							e4(
								"div",
								{ className: __default$y.buttons },
								e4("button", { onClick: this.syncClick }, "Sync"),
								e4("button", { onClick: this.saveClick }, "Save"),
								e4("button", { onClick: this.resetPoints }, "Reset")
							)
						),
					e4(
						"div",
						{ className: __default$y.video, id: "youtube-video-container" },
						e4("div", { id: `youtube-player-${i.videoId}-${t}` }),
						!n &&
							e4(
								"button",
								{
									className: __default$y.hideBtn,
									onClick: this.toggleVideo,
									tittle: "Close video",
									id: "close-video-tag",
								},
								"Γ£ò"
							),
						s &&
							e4(
								"button",
								{
									className: __default$y.editorBtn,
									onClick: this.toggleEditor,
									tittle: "Open editor video",
								},
								"S"
							)
					)
				)
			),
		];
	};
}
var YTPlayer$1 = t(YTPlayer, "player", "cursor", "part", "user"),
	guitar1Image = "/static/media/guitarist1.9e7bdbba.png",
	guitar1ImageP = "/static/media/guitarist1.248c82bc.webp",
	guitar2Image = "/static/media/guitarist2.a198f632.png",
	guitar2ImageP = "/static/media/guitarist2.2f1df3af.webp",
	guitar3Image = "/static/media/guitarist3.b1b8abdb.png",
	guitar3ImageP = "/static/media/guitarist3.4dba70b0.webp";
let openSection = "Cc92gg",
	toggleButton = "Cc91c2",
	toggleButtonClose = "Cc91c2 Cc91oc",
	ad = "Cc91i8",
	background$2 = "Cc96i",
	ellipse1 = "Cc911f",
	ellipse2 = "Cc91hz",
	ellipse3 = "Cc92bi",
	yellow = "Cc916i",
	blue = "Cc9yx",
	green = "Cc91g0",
	adButton = "Cc928y",
	plans = "Cc928y Cc91rf",
	demo = "Cc928y Cc9q2",
	adText = "Cc9fc",
	plusText = "Cc9fc Cc9sk",
	__default$x = {
		openSection: "Cc92gg",
		toggleButton: "Cc91c2",
		toggleButtonClose: "Cc91c2 Cc91oc",
		ad: "Cc91i8",
		background: "Cc96i",
		ellipse1: "Cc911f",
		ellipse2: "Cc91hz",
		ellipse3: "Cc92bi",
		yellow: "Cc916i",
		blue: "Cc9yx",
		green: "Cc91g0",
		adButton: "Cc928y",
		plans: "Cc928y Cc91rf",
		demo: "Cc928y Cc9q2",
		adText: "Cc9fc",
		plusText: "Cc9fc Cc9sk",
	},
	ellipsePath =
		"M306.56 175A165.5 165.5 0 0 0 329 91.5c0-33.83-10.09-65.3-27.4-91.5H27.4A165.44 165.44 0 0 0 0 91.5 165.5 165.5 0 0 0 22.44 175h284.12Z";
class YTPlayerDemo extends e3 {
	toggleAd = () => {
		this.props.dispatch("playAlongAd/toggle");
	};
	onDemoLinkClick = () => {
		this.props.dispatch("demo/activate");
	};
	onPlusLinkClick = () => {
		this.props.dispatch("curiosity/setConversionProps", {
			"Last referring link": "Play Along ad",
		});
	};
	onYTLogoClick = () => {
		this.props.dispatch("curiosity/setConversionProps", {
			"Last referring link": "YT Logo on Play Along ad",
		});
	};
	render = () => {
		let { isOpened: e } = this.props.playAlongAd;
		return [
			e
				? e4(
						"div",
						{ className: __default$x.openSection },
						e4(
							"button",
							{
								className: __default$x.toggleButtonClose,
								onClick: this.toggleAd,
								id: "close-video",
								tittle: "Close video",
							},
							"Close official audio"
						)
				  )
				: e4(
						"div",
						{ className: __default$x.openSection },
						e4(
							"button",
							{
								className: __default$x.toggleButton,
								onClick: this.toggleAd,
								id: "open-video",
								tittle: "Open video",
							},
							"Play along with official audio"
						)
				  ),
			e4(
				"div",
				{
					className: __default$x.ad,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-ad",
				},
				e4(
					"div",
					{ className: __default$x.yellow },
					e4(
						"picture",
						{},
						e4("source", { srcSet: guitar1ImageP, type: "image/webp" }),
						e4("img", {
							height: 200,
							width: 163,
							src: guitar1Image,
							alt: "First guitarist",
						})
					)
				),
				e4(
					"div",
					{ className: __default$x.blue },
					e4(
						"picture",
						{},
						e4("source", { srcSet: guitar2ImageP, type: "image/webp" }),
						e4("img", {
							height: 266,
							width: 118,
							src: guitar2Image,
							alt: "Second guitarist",
						})
					),
					e4(
						S,
						{
							to: "/a/wa/plus",
							"aria-label": "See plans and pricing",
							onClick: this.onYTLogoClick,
						},
						e4(
							"svg",
							{
								width: 127,
								height: 97,
								viewBox: "0 0 127 97",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
							},
							e4("path", {
								d: "M109.3 19.48a12.03 12.03 0 0 0-8.48-8.43C93.29 9 63.14 9 63.14 9S33 9 25.47 10.97a12.27 12.27 0 0 0-8.49 8.51C15 26.98 15 42.5 15 42.5s0 15.6 1.98 23.02a12.03 12.03 0 0 0 8.49 8.43C33.08 76 63.14 76 63.14 76s30.14 0 37.68-1.97a12.03 12.03 0 0 0 8.49-8.43c1.98-7.5 1.98-23.02 1.98-23.02s.08-15.6-1.98-23.1Z",
								fill: "#f00",
							}),
							e4("path", {
								d: "M53.55 28.15v28.7L78.62 42.5 53.55 28.15Z",
								fill: "#fff",
							})
						)
					)
				),
				e4(
					"div",
					{ className: __default$x.background },
					e4(
						"svg",
						{
							className: __default$x.ellipse1,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e4("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					e4(
						"svg",
						{
							className: __default$x.ellipse2,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e4("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					e4(
						"svg",
						{
							className: __default$x.ellipse3,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e4("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					)
				),
				e4(
					"div",
					{ className: __default$x.green },
					e4(
						"picture",
						{},
						e4("source", { srcSet: guitar3ImageP, type: "image/webp" }),
						e4("img", {
							height: 200,
							width: 163,
							src: guitar3Image,
							alt: "Third guitarist",
						})
					)
				),
				e4(
					"p",
					{ className: __default$x.plusText },
					"Play along with Official Audio on Plus plan"
				),
				e4(
					S,
					{
						to: "/a/wa/plus",
						"aria-label": "See plans and pricing",
						onClick: this.onPlusLinkClick,
					},
					e4(
						"button",
						{
							className: __default$x.plans,
							tittle: "Plans and Pricing",
							alt: "plans&pricing",
						},
						"See plans and pricing"
					)
				),
				e4(
					S,
					{
						to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
						"aria-label": "On the demo song",
						onClick: this.onDemoLinkClick,
					},
					e4(
						"button",
						{
							className: __default$x.demo,
							tittle: "On the demo song",
							alt: "demo song",
						},
						"Try on the demo song"
					)
				)
			),
		];
	};
}
var YTPlayerDemo$1 = t(YTPlayerDemo, "playAlongAd");
let btn = "Ckd11i",
	shape$1 = "Ckdzh",
	bg = "Ckd22n",
	active = "Ckd11i Ckduv",
	badge = "Ckdte",
	__default$w = {
		btn: "Ckd11i",
		shape: "Ckdzh",
		bg: "Ckd22n",
		active: "Ckd11i Ckduv",
		badge: "Ckdte",
	};
function TuningButton(e) {
	let {
			reference: t,
			handlePitchshift: i,
			isActive: a,
			isPitchshiftToStandard: o,
			lock: n,
		} = e,
		{
			player: { pitchShift: s },
		} = m("player"),
		r = "Shift pitch (R)";
	0 !== s
		? (r = "Pitch shifted (R)")
		: o && (r = "Pitch can be shifted to match standard tuning (R)");
	let l = 5 * (Math.abs(s).toString(10).length - 1) + (s > 0 ? 2 : 0);
	return e4(
		"g",
		{
			vectorEffect: "non-scaling-stroke",
			transform: "translate(-8 -47)",
			className: a ? __default$w.active : __default$w.btn,
			onClick: i,
			"data-tab-control": "tuning-button",
		},
		e4("title", null, r),
		e4("rect", {
			x: 0,
			y: 3,
			rx: 4,
			ry: 4,
			width: 25,
			height: 23,
			filter: "url(#svg_shadow)",
			className: __default$w.bg,
			ref: t,
		}),
		e4("path", {
			d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
			"stroke-width": "1.3",
		}),
		e4("path", {
			d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
			"stroke-width": "1.6",
		}),
		(o || 0 !== s) &&
			e4("rect", {
				x: 18,
				y: 0,
				width: 13 + l,
				height: 13,
				rx: 6.5,
				ry: 6.5,
				className: __default$w.badge,
			}),
		0 !== s && e4("text", { x: 20, y: 9.5 }, `${s > 0 ? "+" : ""}${s}`),
		n &&
			e4(
				"g",
				{ transform: "translate(-17, -12)" },
				e4("circle", {
					className: __default$w.bg,
					cx: "16.5",
					cy: "15.5",
					r: "8.5",
					filter: "url(#svg_shadow_light)",
				}),
				e4("path", {
					className: __default$w.lock,
					d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
				}),
				e4("circle", { className: __default$w.shape, cx: 16.5, cy: 17, r: 0.8 })
			)
	);
}
let ToastContext = ti(null),
	toast = "Bhf2w4",
	toast__text = "Bhf1e0",
	toast__closeBtn = "Bhf2h5",
	goodToast = "Bhf1on",
	badToast = "Bhf45",
	__default$v = {
		toast: "Bhf2w4",
		toast__text: "Bhf1e0",
		toast__closeBtn: "Bhf2h5",
		goodToast: "Bhf1on",
		badToast: "Bhf45",
	};
var positiveMarker = "/static/media/positiveMarker.bc247688.svg",
	negativeMarker = "/static/media/negativeMarker.50879a92.svg";
let Toast = (e) => {
		let { close: t, timeout: i = 5e3, text: a, type: o } = e;
		return (
			ta(() => {
				let e = setTimeout(t, i);
				return () => clearTimeout(e);
			}, [t, i]),
			e4(
				"div",
				{ className: __default$v.toast },
				"good" === o
					? e4(
							"div",
							{ className: __default$v.goodToast },
							e4(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								e4("use", { xlinkHref: `${positiveMarker}#icon` })
							)
					  )
					: e4(
							"div",
							{ className: __default$v.badToast },
							e4(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								e4("use", { xlinkHref: `${negativeMarker}#icon` })
							)
					  ),
				e4(
					"div",
					{ className: __default$v.toast__text },
					a,
					e4(
						"button",
						{ className: __default$v.toast__closeBtn, onClick: t },
						"Γ£ò"
					)
				)
			)
		);
	},
	ToastProvider = (e) => {
		let { children: t, device: i } = e,
			[a, o] = e9(null),
			n = (e) => {
				let { text: t, type: i } = e;
				o({ text: t, type: i });
			},
			s = () => {
				o(null);
			},
			r = to(() => ({ open: n }), []);
		return e4(ToastContext.Provider, {
			value: r,
			children: [
				!i.isDesktop &&
					tn(
						e4(
							N,
							null,
							a &&
								e4(
									E,
									{ animationStyles: tb, timeout: 150 },
									e4(Toast, { close: s, text: a.text, type: a.type })
								)
						),
						document.body
					),
				t,
			],
		});
	},
	marker$1 = "Chc1pg",
	markerTransparent = "Chc2v9",
	learnedMarker = "Chcl9",
	learnedMarkerContainerWithAnime = "Chclw",
	markerText = "Chc14h",
	group = "Chcfq",
	hideGroup = "Chctb",
	activeGroup = "Chc2va",
	decorationCircle = "Chc28t",
	decorationCircleHole = "Chc29",
	particles = "Chc31o",
	dots = "Chc1aq",
	number$2 = "Chca7",
	__default$u = {
		marker: "Chc1pg",
		markerTransparent: "Chc2v9",
		learnedMarker: "Chcl9",
		learnedMarkerContainerWithAnime: "Chclw",
		markerText: "Chc14h",
		group: "Chcfq",
		hideGroup: "Chctb",
		activeGroup: "Chc2va",
		decorationCircle: "Chc28t",
		decorationCircleHole: "Chc29",
		particles: "Chc31o",
		dots: "Chc1aq",
		number: "Chca7",
	},
	MARKER_LENGTH$1 = [5, 12, 19, 25],
	markerPath$1 = (e, t, i) =>
		`M${e + 7} ${
			t + 13
		}l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${i}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class LearnMarker extends e3 {
	static contextType = ToastContext;
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: i } = this.props;
		i(e, t),
			this.context.open(
				t
					? { text: "Marked as not learned", type: "bad" }
					: { text: "Marked as learned", type: "good" }
			),
			this.setState({ leftAfterClick: !1, clicked: !0 });
	};
	constructor(e) {
		super(e), (this.state = { clicked: !1, leftAfterClick: !0 });
	}
	getMarkerParticles = (e, t) => {
		let i = [
				ts("circle", {
					className: __default$u.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				ts("circle", {
					className: __default$u.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			a = [];
		for (let i = 0; i < 7; i++) {
			let o = 0.9 * i,
				n =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(o) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				s = 14 * Math.sin(o) + t + 6,
				r =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(o + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				l = 14 * Math.sin(o + 0.45 * Math.random() - 0.225) + t + 6,
				u = ts("circle", {
					cx: n,
					cy: s,
					r: 0.75,
					className: `${__default$u.particle} ${__default$u.particle_big}`,
				}),
				d = ts("circle", {
					cx: r,
					cy: l,
					r: 0.5,
					className: `${__default$u.particle} ${__default$u.particle_small}`,
				});
			a.push(u, d);
		}
		return [i, ts("g", { className: __default$u.particles, children: a })];
	};
	componentDidUpdate(e) {
		e.isLearned !== this.props.isLearned &&
			(this.setState({ clicked: !0 }),
			setTimeout(() => {
				this.setState({ clicked: !1 });
			}, 1e3));
	}
	render() {
		let { x: e, y: t, barNumber: i, isLearned: a } = this.props,
			o = `add-${i}`,
			n = "".padEnd(1 + 2 * String(i).length, "."),
			s = MARKER_LENGTH$1[i.toString().length - 1];
		return a
			? ts("g", {
					onClick: this.onBarClick,
					className: __default$u.group,
					"data-tab-control": "marker",
					children: [
						this.props.isMobileOs &&
							ts("rect", {
								x: e - 10,
								y: t - 8,
								width: 30 + s,
								height: 30,
								fillOpacity: 0,
							}),
						this.props.showAnimation &&
							this.state.clicked &&
							this.getMarkerParticles(e, t),
						ts("g", {
							className:
								this.props.showAnimation &&
								this.state.clicked &&
								__default$u.learnedMarkerContainerWithAnime,
							children: [
								ts("path", {
									className: __default$u.learnedMarker,
									d: markerPath$1(e, t, s),
								}),
								ts("text", {
									className: __default$u.markerText,
									x: e + 2.4,
									y: t + 10,
									id: o,
									children: i,
								}),
							],
						}),
					],
			  })
			: ts("g", {
					className: __default$u.group,
					onClick: this.onBarClick,
					"data-tab-control": "marker",
					children: [
						this.props.isMobileOs &&
							ts("rect", {
								x: e - 10,
								y: t - 8,
								width: 30 + s,
								height: 30,
								fillOpacity: 0,
							}),
						ts(
							"text",
							{
								className: __default$u.number,
								x: 2 + e,
								y: t + 10,
								children: i,
							},
							"number"
						),
						ts("text", {
							className: __default$u.dots,
							x: 1 + e,
							y: t + 14,
							children: n,
						}),
						!this.props.isMobileOs &&
							ts("path", {
								className: __default$u.markerTransparent,
								d: markerPath$1(e, t, s + 107),
							}),
					],
			  });
	}
}
let MARKER_LENGTH = [5, 12, 19, 25],
	markerPath = (e, t, i) =>
		`M${e + 7} ${
			t + 14
		}l-2 3-2-3c-2 0-3-1-3-3v-9c0-2 1-3 3-3h${i}c2 0 3 1 3 3v9c0 2-1 3-3 3z`;
class LearnMarkerLabel extends e3 {
	static contextType = ToastContext;
	labelRef = tt();
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: i } = this.props;
		i(e, t),
			this.context.open(
				t
					? { text: "Marked as not learned", type: "bad" }
					: { text: "Marked as learned", type: "good" }
			),
			this.labelRef.current.classList.remove(__default$u.activeGroup);
	};
	constructor(e) {
		super(e), (this.addActiveClass = this.addActiveClass.bind(this));
	}
	addActiveClass() {
		this.labelRef.current.classList.add(__default$u.activeGroup);
	}
	componentDidMount() {
		this.labelRef.current &&
			this.labelRef.current.addEventListener("mouseleave", this.addActiveClass);
	}
	componentWillUnmount() {
		this.labelRef.current &&
			this.labelRef.current.removeEventListener(
				"mouseleave",
				this.addActiveClass
			);
	}
	getMarkerParticles = (e, t) => {
		let i = [
				ts("circle", {
					className: __default$u.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				ts("circle", {
					className: __default$u.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			a = [];
		for (let i = 0; i < 7; i++) {
			let o = 0.9 * i,
				n =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(o) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				s = 14 * Math.sin(o) + t + 6,
				r =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(o + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				l = 14 * Math.sin(o + 0.45 * Math.random() - 0.225) + t + 6,
				u = ts("circle", {
					cx: n,
					cy: s,
					r: 0.75,
					className: `${__default$u.particle} ${__default$u.particle_big}`,
				}),
				d = ts("circle", {
					cx: r,
					cy: l,
					r: 0.5,
					className: `${__default$u.particle} ${__default$u.particle_small}`,
				});
			a.push(u, d);
		}
		return [i, ts("g", { className: __default$u.particles, children: a })];
	};
	render() {
		let {
				x: e,
				y: t,
				barNumber: i,
				isLearned: a,
				isLoopChanging: o,
			} = this.props,
			n = `add-${i}`,
			s = MARKER_LENGTH[i.toString().length - 1];
		return ts("g", {
			className: __default$u.group,
			onClick: this.onBarClick,
			"data-tab-control": "marker",
			children: [
				!this.props.isMobileOs &&
					!o &&
					ts("g", {
						className: `${__default$u.hideGroup} ${__default$u.activeGroup}`,
						ref: this.labelRef,
						children: a
							? [
									ts("path", {
										className: __default$u.marker,
										d: markerPath(e, t, s + 107),
									}),
									ts("text", {
										className: __default$u.markerText,
										x: e + 2.4,
										y: t + 10,
										id: n,
										children: `${i} Mark as not learned`,
									}),
							  ]
							: [
									ts("path", {
										className: __default$u.marker,
										d: markerPath(e, t, s + 87),
									}),
									ts("text", {
										className: __default$u.markerText,
										x: e + 2.4,
										y: t + 10,
										id: n,
										children: `${i} Mark as learned`,
									}),
							  ],
					}),
			],
		});
	}
}
function getAnnotationMarkerCoordY$1() {
	return -18;
}
let LearnMarkers = te((e) => {
	let { line: t, partId: i, songId: a } = e,
		{
			learnMarkers: o,
			experiments: n,
			device: s,
			player: r,
			dispatch: l,
		} = m("learnMarkers", "experiments", "device", "player"),
		u = o.data.find((e) => e.songId === a && e.partId === i)?.learnedBars || [],
		d = n.marked_as_learned_animation?.segment === "on",
		h = to(() => M(s) || p(s.os) || P(s.os), [s]),
		c = e7(
			(e, t) => {
				l("learnMarkers/markToggle", {
					songId: a,
					partId: i,
					barNumber: e,
					isLearned: t,
				}),
					n.marked_as_learned_animation?.status === "pending" &&
						l("experiments/activate", {
							experimentName: "marked_as_learned_animation",
						});
			},
			[a, i]
		),
		f = [],
		g = [];
	for (let e of t.layout.measureLayouts) {
		let t = e.measure;
		if (t.layouts[0] !== e) continue;
		let i = ea(t).x + 2,
			a = getAnnotationMarkerCoordY$1(),
			o = t.index + 1,
			n = u.includes(o);
		f.push(
			ts(LearnMarker, {
				x: i,
				y: a,
				barNumber: o,
				isLearned: n,
				showAnimation: d,
				isMobileOs: h,
				isLoopChanging: r.isLoopChanging,
				onToggle: c,
			})
		),
			g.push(
				ts(LearnMarkerLabel, {
					x: i,
					y: a,
					barNumber: o,
					isLearned: n,
					showAnimation: d,
					isMobileOs: h,
					isLoopChanging: r.isLoopChanging,
					onToggle: c,
				})
			);
	}
	return ts(e8, { children: [f, g] });
});
function getAnnotationMarkerCoordY() {
	return -18;
}
let BarNumbers = te((e) => {
		let { line: t } = e,
			i = [];
		for (let e of t.layout.measureLayouts) {
			let t = e.measure;
			if (t.layouts[0] !== e) continue;
			let a = ea(t).x + 2,
				o = getAnnotationMarkerCoordY(),
				n = t.index + 1;
			i.push(
				ts("g", {
					className: __default$u.group,
					children: [
						ts(
							"text",
							{
								className: __default$u.number,
								x: 2 + a,
								y: o + 10,
								children: n,
							},
							"number"
						),
					],
				})
			);
		}
		return ts(e8, { children: [i] });
	}),
	text$7 = "C351",
	__default$t = { text: "C351" };
function BeatText(e) {
	let { text: t, layout: i, xoffset: a } = e,
		o = t.layer;
	if (o) {
		let e = i ? o.x1 - i.absoluteX : o.x1,
			n = -1 * o.y;
		return ts("text", {
			className: __default$t.text,
			x: e + a,
			y: n,
			dy: "-0.25em",
			children: t.text,
		});
	}
	return null;
}
let PATH_REST4 =
		"M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
	PATH_REST_START =
		"M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	PATH_REST_END = "c1.25-.25 2.75-2.25 3-2.75h1z",
	PATH_REST_STEP =
		"c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
	PATH_TEMPO = "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
	PATH_REST8 = `${PATH_REST_START}${PATH_REST_END}`,
	PATH_REST16 = `${PATH_REST_START}${PATH_REST_STEP}${PATH_REST_END}`,
	PATH_REST32 = `${PATH_REST_START}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_END}`,
	PATH_REST64 = `${PATH_REST_START}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_END}`,
	PATH_REST128 = `${PATH_REST_START}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_STEP}${PATH_REST_END}`,
	DRUM_CROSS = "M0-4l9 8m0-8l-9 8",
	DRUM_HAT = "M-2-7l6.5-4l6.5 4",
	DRUM_HAT_EDGE = "M-2-7h8l5 -5",
	DRUM_TRIANGLE = "M0 3l4.7-7 4.7 7z",
	DRUM_RHOMB = "M5-4.5l5 4-5 4-5-4 5-4z",
	DRUM_CIRCLE = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
	DRUM_CIRCLE_CROSS = `${DRUM_CIRCLE}${DRUM_CROSS}`,
	DRUM_CIRCLE_STROKE = `${DRUM_CIRCLE}M9-4L0 4`,
	DRUM_BASE =
		"M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
	DRUM_STROKE = `${DRUM_BASE}M-3-6L12 5`,
	DRUM_EXTRA_LINE = "M-4 0l16 0";
function Defs(e) {
	let t = e.line.layout.intervalSize,
		i = e.line.strings,
		a = (i <= 4 ? t : 0) - 2 * (t - 12),
		o = 0 !== a ? `translate(0, ${-a})` : void 0,
		n = [
			ts("ellipse", { id: "dot", cx: 10, cy: 17.5 - a, rx: 1.5, ry: 1.5 }),
			ts("rect", { id: "rest1", y: 24 - a, x: -6, width: 12, height: 6 }),
			ts("rect", { id: "rest2", y: 18 - a, x: -6, width: 12, height: 6 }),
			ts("path", {
				id: "rest4",
				transform: o,
				d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
			}),
			ts("path", { id: "rest8", transform: o, d: PATH_REST8 }),
			ts("path", { id: "rest16", transform: o, d: PATH_REST16 }),
			ts("path", { id: "rest32", transform: o, d: PATH_REST32 }),
			ts("path", { id: "rest64", transform: o, d: PATH_REST64 }),
			ts("path", { id: "rest128", transform: o, d: PATH_REST128 }),
			ts("path", {
				id: "tempo",
				d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
			}),
		],
		s = !this.props.part.usedDrums;
	return ts("defs", {
		children: s
			? n
			: [
					...n,
					ts("path", { id: "drumCross", d: DRUM_CROSS }),
					ts("path", {
						id: "drumHat",
						d: "M-2-7l6.5-4l6.5 4",
						style: "fill: none",
					}),
					ts("path", {
						id: "drumHatEdge",
						d: "M-2-7h8l5 -5",
						style: "fill: none",
					}),
					ts("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
					ts("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
					ts("path", {
						id: "drumCircleCross",
						d: DRUM_CIRCLE_CROSS,
						style: "fill: none",
					}),
					ts("path", {
						id: "drumCircleStroke",
						d: DRUM_CIRCLE_STROKE,
						style: "fill: none",
					}),
					ts("path", { id: "drum", d: DRUM_BASE }),
					ts("path", { id: "drumStroke", d: DRUM_STROKE }),
					ts("path", { id: "extraLine", d: "M-4 0l16 0" }),
			  ],
	});
}
let text$6 = "bh1o4",
	line$5 = "bh162",
	dotted$2 = "bh162 bhth",
	__default$s = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
	TEXT_OFFSET$3 = 46;
function LetRing(e) {
	let { layer: t } = e,
		{ x1: i, x2: a, y: o } = t,
		n = a - i,
		s = -1 * o - 2,
		r = [
			ts(
				"text",
				{ className: __default$s.text, x: i, y: s, children: "let ring" },
				"let ring"
			),
		];
	return (
		n > 46 &&
			(r.push(
				ts(
					"line",
					{
						className: __default$s.dotted,
						x1: 46 + i,
						y1: -3 + s,
						x2: n - 2 + i,
						y2: -3 + s,
					},
					"dotted"
				)
			),
			r.push(
				ts(
					"line",
					{
						className: __default$s.line,
						x1: n + i,
						y1: 1 + s,
						x2: n + i,
						y2: -7 + s,
					},
					"line"
				)
			)),
		ts(e8, { children: r })
	);
}
let text$5 = "C4a2yy",
	line$4 = "C4a2ve",
	dotted$1 = "C4a2ve C4a1op",
	__default$r = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
	TEXT_OFFSET$2 = 35;
function PalmMute(e) {
	let { layer: t } = e,
		{ x1: i, x2: a, y: o } = t,
		n = -1 * o - 2,
		s = a - i,
		r = [
			e4(
				"text",
				{ className: __default$r.text, x: i, y: n, key: "pm" },
				"P. M."
			),
		];
	return (
		s > 35 &&
			(r.push(
				e4("line", {
					className: __default$r.dotted,
					x1: 35 + i,
					y1: -3 + n,
					x2: s - 2 + i,
					y2: -3 + n,
					key: "dotted",
				})
			),
			r.push(
				e4("line", {
					className: __default$r.line,
					x1: s + i,
					y1: 1 + n,
					x2: s + i,
					y2: -7 + n,
					key: "line",
				})
			)),
		e4(e8, null, r)
	);
}
let text$4 = "q71wu",
	line$3 = "q72a",
	dotted = "q72a q712i",
	__default$q = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
	TEXT_OFFSET$1 = 40;
function Harmonic(e) {
	let { layer: t, effectValue: i } = e,
		{ x1: a, x2: o, y: n } = t,
		s = o - a,
		r = -1 * n - 2,
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
	let u = [
		ts(
			"text",
			{ className: __default$q.text, x: a, y: r, children: l },
			"Harm."
		),
	];
	return (
		s > 40 &&
			(u.push(
				ts(
					"line",
					{
						className: __default$q.dotted,
						x1: 40 + a,
						y1: -3 + r,
						x2: s - 2 + a,
						y2: -3 + r,
					},
					"dotted"
				)
			),
			u.push(
				ts(
					"line",
					{
						className: __default$q.line,
						x1: s + a,
						y1: 1 + r,
						x2: s + a,
						y2: -7 + r,
					},
					"line"
				)
			)),
		ts(e8, { children: u })
	);
}
let path$5 = "C0x28",
	__default$p = { path: "C0x28" },
	VIBRATO_PATTERN_WIDTH = 5.5,
	VIBRATO_MIN_WIDTH = 14,
	VIBRATO_MIN_ITERATIONS = 2,
	VIBRATO_SIDES = 3;
function generatePath$2(e, t, i, a) {
	let o = `M${t} ${i + 4}l3-3.5`,
		n = `v${a ? 2 : 1}.8l-3 3.5`;
	for (let t = 0; t < e; t++)
		(o += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
			(n += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
	return o + n + "z";
}
function Vibrato(e) {
	let { layer: t, wide: i } = e,
		{ x1: a, x2: o, y: n } = t,
		s = o - a,
		r = generatePath$2(s > 14 ? Math.floor((s - 3) / 5.5) : 2, a, -(n + 6), i);
	return ts("path", { className: __default$p.path, d: r });
}
class Effects extends e3 {
	renderEffect = (e, t) => {
		let i = {
			layer: e.layer,
			key: `${e.effect}-${this.props.line.index}-${t}`,
			line: this.props.line,
			effectValue: e.effectValue,
		};
		switch (e.effect) {
			case "letRing":
				return e4(LetRing, i);
			case "palmMute":
				return e4(PalmMute, i);
			case "harmonic":
				return e4(Harmonic, i);
			case "vibrato":
				return e4(Vibrato, { ...i, wide: !1 });
			case "wideVibrato":
				return e4(Vibrato, { ...i, wide: !0 });
			default:
				return null;
		}
	};
	render() {
		return e4(e8, null, this.props.line.effects.map(this.renderEffect));
	}
}
function platformVar(e, t) {
	return () => e;
}
let NOTE_TEXT_OFFSET = (e) => platformVar(0);
function Note(e) {
	let { note: t, beat: i, part: a, x: o, edited: n, platform: s } = e,
		{ intervalSize: r } = i.layout.measureLayout.lineLayout;
	if (!eo(t) && (!n || (n && t.bogus))) return null;
	let l = `translate(${o}, 0)`;
	if (i.rest) {
		if (i.layout.usedStrings || (0 !== i.voice && i.layout.usedRest))
			return null;
		let e = en[`rest${i.voice}`],
			t = ts(
				"use",
				{ className: e, xlinkHref: `#rest${i.type}`, transform: l },
				"rest"
			);
		if (i.dotted) {
			let i = ts(
				"use",
				{ className: e, xlinkHref: "#dot", transform: l },
				"dot"
			);
			return ts(e8, { children: [t, i] });
		}
		return t;
	}
	if (a.usedDrums && a.isDrumStdOn) {
		let e = en[`drums${i.voice}`],
			a = `translate(${o}, ${0.5 + r * t.string})`,
			n = t.orientation ? a : a + " translate(-10, 0)";
		return ts(e8, {
			children: [
				(t.string <= -1 || t.string >= 5) &&
					ts(er, {
						noteString: t.string,
						className: el.strings,
						noteTransform: n,
						intervalSize: r,
					}),
				1 !== i.type &&
					ts("path", {
						className: en[`stick${i.voice}`],
						transform: a,
						d: eu(t.fret, t.string, r),
					}),
				(t.tie || t.ghost) &&
					ts(
						"text",
						{ x: o - 6, y: r * t.string + NOTE_TEXT_OFFSET()(s) + 5 },
						"("
					),
				ts(ed, { fret: t.fret, className: e, transform: n }),
				(t.tie || t.ghost) &&
					ts(
						"text",
						{ x: o + 11, y: r * t.string + NOTE_TEXT_OFFSET()(s) + 5 },
						")"
					),
			],
		});
	}
	let u = "",
		d = 0,
		p = a.usedDrums;
	if (p) {
		let e = a.usedDrums.get(t.fret);
		e && ((u = e.name || "*"), (d = e.string || 0));
	} else (u = t.dead ? "X" : t.fret.toString()), (d = t.string);
	let h = en[`${p ? "vDrum" : "voice"}${i.voice}`];
	n && (h = `${h} ${en.edited}`);
	let c = {
			className: h,
			x: o,
			y: r * d + NOTE_TEXT_OFFSET()(s),
			children: t.tie || t.ghost ? `(${u})` : u,
			style: {},
		},
		m = ts("text", c, "text");
	if (t.harmonic) {
		let e = ts(
			"path",
			{
				className: en.harmonic,
				transform: `translate(${o - 17}, ${-3.5 + r * d} )`,
				d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
			},
			"harmonic"
		);
		return ts(e8, { children: [e, m] });
	}
	return m;
}
let slur = "B642k5",
	__default$o = { slur: "B642k5" };
function generatePath$1(e, t, i, a, o, n) {
	let s = t ? ec(t, em) : 0,
		r = o - s - (i ? ec(i, em) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		u = Math.max(n - 4, 3),
		d = u - 1;
	return `M${s + e} ${n * a - 7}c${l}-${u} ${r - l}-${u} ${r} 0c-${l}-${d}-${
		r - l
	}-${d}-${r} 0z`;
}
function Slur(e) {
	let { x: t, start: i, end: a, slicingMode: o } = e;
	if (a) {
		let e = ep(a).beat,
			i = eh(a).beat,
			n = eh(a).note;
		if (i.layout && e.layout) {
			let a = o.getTieSlurPathLength(e, i, !0),
				{ intervalSize: s } = e.layout.measureLayout.lineLayout;
			return ts("path", {
				className: __default$o.slur,
				d: generatePath$1(t - a, null, n, n.string, a, s),
			});
		}
	} else if (i) {
		let e = ep(i).beat,
			a = eh(i).beat,
			n = ep(i).note,
			s = eh(i).note;
		if (a.layout && e.layout) {
			let i = o.areBeatsInSameSlice(e, a),
				r = o.getTieSlurPathLength(e, a, !1),
				{ intervalSize: l } = e.layout.measureLayout.lineLayout;
			return ts("path", {
				className: __default$o.slur,
				d: generatePath$1(t, n, i ? s : null, n.string, r, l),
			});
		}
	}
	return null;
}
let tie = "Bbl9p",
	__default$n = { tie: "Bbl9p" };
function generatePath(e, t, i, a, o, n) {
	let s = t ? ec(t, ef) : 0,
		r = o - s - (i ? ec(i, ef) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		u = Math.max(n - 5, 3),
		d = u - 1;
	return `M${s + e} ${n * a + 7}c${l} ${u} ${r - l} ${u} ${r} 0c-${l} ${d}-${
		r - l
	} ${d}-${r} 0z`;
}
function Tie(e) {
	let { x: t, start: i, end: a, slicingMode: o } = e;
	if (a) {
		let e = ep(a).beat,
			i = eh(a).beat,
			n = eh(a).note;
		if (i.layout && e.layout) {
			let a = o.getTieSlurPathLength(e, i, !0),
				s = n.string,
				{ intervalSize: r } = e.layout.measureLayout.lineLayout;
			return ts("path", {
				className: __default$n.tie,
				d: generatePath(t - a, null, n, s, a, r),
			});
		}
	}
	if (i) {
		let e = ep(i).beat,
			a = eh(i).beat,
			n = ep(i).note,
			s = eh(i).note;
		if (a.layout && e.layout) {
			let i = o.areBeatsInSameSlice(e, a),
				r = o.getTieSlurPathLength(e, a, !1),
				{ intervalSize: l } = e.layout.measureLayout.lineLayout,
				u = n.string;
			return ts("path", {
				className: __default$n.tie,
				d: generatePath(t, n, i ? s : null, u, r, l),
			});
		}
	}
	return null;
}
function intersect(e, t) {
	if ((e.x1 === e.x2 && e.y1 === e.y2) || (t.x1 === t.x2 && t.y1 === t.y2))
		return null;
	let i = (t.y2 - t.y1) * (e.x2 - e.x1) - (t.x2 - t.x1) * (e.y2 - e.y1);
	if (0 === i) return null;
	let a = ((t.x2 - t.x1) * (e.y1 - t.y1) - (t.y2 - t.y1) * (e.x1 - t.x1)) / i,
		o = ((e.x2 - e.x1) * (e.y1 - t.y1) - (e.y2 - e.y1) * (e.x1 - t.x1)) / i;
	if (a < 0 || a > 1 || o < 0 || o > 1) return null;
	let n = e.x1 + a * (e.x2 - e.x1),
		s = e.y1 + a * (e.y2 - e.y1);
	return { x: n, y: s };
}
function trimLineX(e, t, i) {
	let a = intersect(e, { x1: t, y1: 1e3, x2: t, y2: -1e3 }),
		o = intersect(e, { x1: i, y1: 1e3, x2: i, y2: -1e3 });
	return {
		x1: a ? a.x : e.x1,
		y1: a ? a.y : e.y1,
		x2: o ? o.x : e.x2,
		y2: o ? o.y : e.y2,
	};
}
let slide = "zy1tz",
	__default$m = { slide: "zy1tz" };
function Slide(e) {
	let { x: t, cfx: i, note: a } = e,
		{ intervalSize: o } = a.beat.layout.measureLayout.lineLayout,
		n = ep(i).beat,
		s = eh(i).beat;
	if (!s.layout || !n.layout) return null;
	let r = ep(i).note,
		l = eh(i).note,
		u = r.string,
		d = r.fret >= l.fret ? -2 : 2,
		p = eg(n, a.beat),
		h = eg(n, n),
		c = eg(n, s),
		m = {
			x1: t + h - p + ec(r, ey),
			y1: o * u + d,
			x2: t + c - p - ec(l, ey),
			y2: o * u - d,
		},
		f = trimLineX(m, ev(a.beat.layout), e_(a.beat.layout));
	return ts("line", { className: __default$m.slide, ...f });
}
let arrow = "Bxm1ag",
	__default$l = { arrow: "Bxm1ag" };
function Arrow(e) {
	let { x: t, y: i, up: a } = e;
	return ts("path", {
		className: __default$l.arrow,
		d: `M ${t},${i} l 2,${a ? 5 : -5} -4,0 2,${a ? -5 : 5}`,
	});
}
let up = "C9k1hh",
	down = "C9k17",
	__default$k = { up: "C9k1hh", down: "C9k17" },
	FRACTIONS = ["\xbc", "\xbd", "\xbe"],
	TOP_OFFSET$1 = platformVar(4),
	BOTTOM_OFFSET = platformVar(11);
function getText(e) {
	if (100 === e) return "full";
	if (e) {
		let t = "",
			i = Math.floor(e / 100);
		i && (t += i);
		let a = e % 100;
		return a >= 25 && (t += FRACTIONS[Math.floor(a / 25) - 1]), t;
	}
	return "";
}
function BendLevel(e) {
	let { x: t, y: i, up: a, tone: o, platform: n } = e;
	return ts("text", {
		className: a ? __default$k.up : __default$k.down,
		x: t,
		y: a ? i - TOP_OFFSET$1(n) : i + BOTTOM_OFFSET(n),
		children: getText(o),
	});
}
let prebend = "Cs020",
	path$4 = "Cs04d",
	hold = "Cs04d Cs0dp",
	__default$j = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function renderPrebend(e, t, i, a, o, n) {
	return [
		ts(
			"line",
			{ className: __default$j.prebend, x1: i, y1: a + ex, x2: i, y2: o },
			`prebend-${e}`
		),
		ts(Arrow, { x: i, y: o, up: !0 }, `arrow-${e}`),
		ts(BendLevel, { tone: t, x: i, y: o, up: !0, platform: n }, `y-${e}`),
	];
}
function renderHold(e, t, i, a, o, n) {
	return t <= 0
		? null
		: [
				ts(
					"line",
					{ className: __default$j.hold, x1: i, y1: a, x2: o, y2: n },
					`hold-${e}`
				),
		  ];
}
function doesLastBendEndAtTone(e, t) {
	if (!e) return !1;
	let i = ep(e).note,
		a = i.bend;
	if (!a) return !1;
	let o = a.points,
		n = o.length;
	return !(n < 1) && o[n - 1].tone === t;
}
function isLastBendElAHold(e) {
	if (!e) return !1;
	let t = ep(e).note,
		i = t.bend;
	if (!i) return !1;
	let a = i.points,
		o = a.length;
	if (o < 2) return !1;
	let n = a[o - 2].tone,
		s = a[o - 1].tone;
	return s === n;
}
function renderBendOrRelease(e, t, i, a, o, n, s, r, l, u) {
	let d = l < s,
		p = t.prevNoteOnString,
		h = p && !!p.bendEnd,
		c = p && (!!p.bendStart || !!p.bendPart || !!p.bendEnd),
		m =
			p && isLastBendElAHold(p.bendEnd) && doesLastBendEndAtTone(p.bendEnd, 0),
		f = t.tie && h && !m && doesLastBendEndAtTone(p.bendEnd, i) && 0 !== i,
		g = o !== n || 0 !== i || (f && c) ? 0 : ec(t, e$),
		y = [
			ts(
				"path",
				{
					className: __default$j.path,
					d: `M${n + g},${s}Q${r},${s} ${r},${d ? l + 4 : l - 4}`,
				},
				`bend-${e}`
			),
			ts(Arrow, { x: r, y: l, up: d }, `arrow-${e}`),
		];
	return (
		0 !== a &&
			y.push(
				ts(BendLevel, { tone: a, x: r, y: l, up: d, platform: u }, `y-${e}`)
			),
		y
	);
}
function accumulate(e, t, i, a, o) {
	return {
		elements: t ? [...e.elements, t] : e.elements,
		prevTone: i,
		prevX: a,
		prevY: o,
	};
}
function bendPointReducer(e, t, i, a, o) {
	let n = eb + a * e.string;
	return function (a, s, r) {
		let { tone: l, position: u } = s,
			d = 0 === l ? n : eb - l / ew;
		if (0 === r) {
			if (!e.tie && 0 !== l) {
				let e = renderPrebend(r, l, t, n, d, o);
				return accumulate(a, e, l, t, d);
			}
			return accumulate(a, null, l, t, 0 !== l ? d : n);
		}
		let { prevTone: p, prevX: h, prevY: c } = a,
			m = (i * u) / 60 + t;
		if (l === p) {
			let e = renderHold(r, l, h, d, m, d);
			return accumulate(a, e, l, m, d);
		}
		let f = renderBendOrRelease(r, e, p, l, t, h, c, m, d, o);
		return accumulate(a, f, l, m, d);
	};
}
function Bend(e) {
	let { cfx: t, note: i, slicingMode: a, x: o, platform: n } = e,
		s = ep(t).note,
		r = s.bend;
	if (!r) return null;
	let { x1: l, x2: u } = a.getBendCoordinates(t, i),
		d = i.beat.layout.measureLayout.lineLayout.intervalSize,
		{ elements: p } = r.points.reduce(bendPointReducer(s, l + o, u - l, d, n), {
			elements: [],
			prevTone: 0,
			prevX: 0,
			prevY: 0,
		});
	return ts(e8, { children: p });
}
let lyrics = "ls209",
	__default$i = { lyrics: "ls209" };
function BeatLyrics(e) {
	let { lyrics: t, x: i } = e,
		a = t.layer;
	if (a) {
		let e = eT(t) + i + a.diff;
		return ts("text", {
			className: __default$i.lyrics,
			x: e,
			y: a.y + a.height,
			children: t.text,
		});
	}
	return null;
}
let REASONABLE_SHORT_SLIDE_WIDTH = 15;
function SlideShort(e) {
	let { note: t, x: i, type: a } = e,
		{ intervalSize: o } = t.beat.layout.measureLayout.lineLayout,
		n = t.string,
		s = "left" === a ? -1 : 1,
		r = "upwards" === t.rightSlide ? 1 : -1;
	"left" === a && (r = "above" === t.leftSlide ? 1 : -1);
	let l = ec(t, ey);
	return ts("line", {
		className: __default$m.slide,
		x1: s * l + i,
		y1: o * n + 2 * r,
		x2: s * (l + 15) + i,
		y2: o * n - 2 * r,
	});
}
let note$1 = "Cge206",
	correction$1 = "Cgen4",
	background$1 = "Cge2e0",
	__default$h = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function EditedNote(e) {
	let { fret: t, x: i, string: a, originalFret: o, intervalSize: n } = e;
	if ("" === o) {
		let e = t.length >= 2 ? 11.5 : 7.5;
		return ts(e8, {
			children: [
				ts("line", {
					className: __default$h.background,
					x1: i - e,
					y1: n * a,
					x2: i + e,
					y2: n * a,
				}),
				ts("text", {
					className: __default$h.note,
					x: i,
					y: n * a,
					children: t,
					"data-fret": t,
				}),
			],
		});
	}
	let s = 10;
	return (
		t.length >= 2 && (s += 3),
		o.length >= 2 && (s += 4),
		ts(e8, {
			children: [
				"" !== t &&
					ts("text", {
						className: __default$h.note,
						x: i + s,
						y: n * a - 4,
						children: t,
						"data-fret": t,
					}),
				ts("line", {
					className: __default$h.correction,
					x1: i - 4,
					y1: n * a - 7,
					x2: i + 4,
					y2: n * a + 4,
				}),
			],
		})
	);
}
let index = "B112ie",
	middle = "B11yc",
	ring = "B112vw",
	pinky = "B11g5",
	thumb = "B112gh",
	text$3 = "B111x2",
	__default$g = {
		index: "B112ie",
		middle: "B11yc",
		ring: "B112vw",
		pinky: "B11g5",
		thumb: "B112gh",
		text: "B111x2",
	},
	CY_OFFSET = 0,
	CX_OFFSET = 8,
	CX_DOUBLE_OFFSET = 12,
	fingerStyles = [
		__default$g.index,
		__default$g.middle,
		__default$g.ring,
		__default$g.pinky,
	];
function Fingering(e) {
	let { fingerL: t, string: i, x: a, fret: o } = e,
		n = fingerStyles[t - 1] || __default$g.index,
		s = 8;
	return (
		"number" == typeof o && Math.floor(o / 10) > 0 && (s = 12),
		e4("circle", { className: n, cx: a + s, cy: eC * i + 0, r: 3 })
	);
}
let chord = "ek2k6",
	hat = "ek2wd",
	tapping = "ek188",
	tappingSecondVoice = "ek188 ekfs",
	accentuated = "ek2i4",
	accentuatedSecondVoice = "ek2i4 ek2z7",
	staccato = "ek2zh",
	staccatoSecondVoice = "ek2ic",
	arrowLine = "ekka",
	arrowPolygon = "ek2wg",
	__default$f = {
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
	PADDING = 30,
	ARROW_HALF_SIZE = 4;
function Stroke(e) {
	let { up: t, min: i, max: a, xoffset: o, intervalSize: n } = e,
		s = (a - i + 1) * n,
		r = t ? 4 : s - 4,
		l = t ? 0 : s,
		u = (i - 0.5) * n,
		d = o - 15;
	return ts(e8, {
		children: [
			ts(
				"line",
				{
					className: __default$f.arrowLine,
					x1: 4 + d,
					y1: u,
					x2: 4 + d,
					y2: (a + 0.5) * n,
				},
				"line"
			),
			ts(
				"polygon",
				{
					className: __default$f.arrowPolygon,
					points: `${4 + d},${l + u} ${0 + d},${r + u} ${8 + d},${r + u} ${
						4 + d
					},${l + u}`,
				},
				"polygon"
			),
		],
	});
}
function Beat(e) {
	let t = [],
		{
			layout: i,
			part: a,
			measure: o,
			slicingMode: n,
			measureEditorData: s,
			measureFingerings: r,
			platform: l,
			x: u,
		} = e,
		d = u + i.x;
	for (let e of i.beats)
		if (e.lyrics)
			for (let i of e.lyrics)
				t.push(ts(BeatLyrics, { lyrics: i, x: d }, `lyrics${e.index}`));
		else {
			e.text &&
				t.push(
					ts(
						BeatText,
						{ text: e.text, layout: i, xoffset: d },
						`text${e.index}`
					)
				);
			let u = e.tappingWithLayer;
			u &&
				u.layer &&
				t.push(
					ts(
						"text",
						{
							className: __default$f.tapping,
							y: -1 * u.layer.y,
							x: Math.max(-1 * Math.floor(u.width / 2) + d, -15),
							dy: "-0.25em",
							children: u.text,
						},
						`tap${e.index}`
					)
				);
			let p = e.chord;
			p &&
				p.layer &&
				t.push(
					ts(
						"text",
						{
							className: __default$f.chord,
							y: -1 * p.layer.y,
							x: Math.max(-1 * Math.floor(p.width / 2) + d, -15),
							dy: "-0.25em",
							children: p.text,
						},
						`chord${e.index}`
					)
				);
			let h = Number.MAX_VALUE,
				c = 0;
			if (!o.rest) {
				if (a.usedDrums) {
					let t = e.notes
						.filter((e) => !e.bogus)
						.map((e) => ({ string: Math.floor(2 * e.string), note: e }));
					t.sort((e, t) => e.string - t.string);
					let i = null;
					for (let e of t)
						(e.note.orientation =
							!(i && 1 >= Math.abs(e.string - i.string)) ||
							!i.note.orientation),
							(i = e);
				}
				e.hat &&
					a.isDrumStdOn &&
					t.push(
						ts(
							"path",
							{
								className: __default$f.hat,
								d: `M${d - 2}${-e.hat.layer.y}h8l5 -5`,
							},
							`hat${e.index}`
						)
					);
				let o =
						s && s.find((t) => t.beatNum === e.index && t.voice === e.voice),
					u = o && o.editedNotes;
				for (let i of (e.staccato &&
					e.staccato.layer.visible &&
					t.push(
						ts(
							"circle",
							{
								className: e.staccato.layer.voice
									? __default$f.staccatoSecondVoice
									: __default$f.staccato,
								cx: d,
								cy: -e.staccato.layer.y - 5,
								r: 2,
							},
							`st${e.index}`
						)
					),
				e.accentuated &&
					e.accentuated.layer.visible &&
					t.push(
						ts(
							"path",
							{
								className: e.accentuated.layer.voice
									? __default$f.accentuatedSecondVoice
									: __default$f.accentuated,
								d: `m${d - 5}${-e.accentuated.layer.y - 2}l9-3l-9-3`,
							},
							`acc${e.index}`
						)
					),
				e.heavyAccentuated &&
					e.heavyAccentuated.layer.visible &&
					t.push(
						ts(
							"path",
							{
								className: e.heavyAccentuated.layer.voice
									? __default$f.accentuatedSecondVoice
									: __default$f.accentuated,
								d: `m${d - 4}${
									-e.heavyAccentuated.layer.y - 2
								}l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
							},
							`hacc${e.index}`
						)
					),
				e.notes)) {
					(e.upStroke || e.downStroke) &&
						!i.tie &&
						((h = Math.min(h, i.string)), (c = Math.max(c, i.string))),
						t.push(
							ts(
								Note,
								{
									note: i,
									beat: e,
									part: a,
									x: d,
									platform: l,
									edited: u && !!u.find((e) => e.string === i.string),
								},
								`note${e.index}-${i.index}-voice${e.voice}`
							)
						),
						i.tieStart &&
							t.push(
								ts(
									Tie,
									{ start: i.tieStart, slicingMode: n, x: d },
									`tie${e.index}-${i.index}`
								)
							),
						i.tieEnd &&
							eS(i.tieEnd) &&
							t.push(
								ts(
									Tie,
									{ end: i.tieEnd, slicingMode: n, x: d },
									`tieEnd${e.index}-${i.index}`
								)
							),
						i.slurStart &&
							t.push(
								ts(
									Slur,
									{ start: i.slurStart, slicingMode: n, x: d },
									`slur${e.index}-${i.index}`
								)
							),
						i.slurEnd &&
							eS(i.slurEnd) &&
							t.push(
								ts(
									Slur,
									{ end: i.slurEnd, slicingMode: n, x: d },
									`slurEnd${e.index}-${i.index}`
								)
							),
						i.leftSlide &&
							t.push(
								ts(SlideShort, {
									note: i,
									type: "left",
									key: `slideShortLeft${e.index}-${i.index}`,
									x: d,
								})
							),
						i.rightSlide &&
							"shift" !== i.rightSlide &&
							"legato" !== i.rightSlide &&
							t.push(
								ts(SlideShort, {
									note: i,
									type: "right",
									key: `slideShortRight${e.index}-${i.index}`,
									x: d,
								})
							),
						i.slideStart &&
							t.push(
								ts(
									Slide,
									{ note: i, cfx: i.slideStart, x: d },
									`slide${e.index}-${i.index}`
								)
							),
						i.slideEnd &&
							eS(i.slideEnd) &&
							t.push(
								ts(
									Slide,
									{ note: i, cfx: i.slideEnd, x: d },
									`slideEnd${e.index}-${i.index}`
								)
							);
					let o = n.bendsForNote(i);
					for (let a = 0; a < o.length; a++) {
						let s = o[a];
						n.shouldDrawBendOnNote(s, i) &&
							t.push(
								ts(
									Bend,
									{ cfx: s, note: i, slicingMode: n, x: d, platform: l },
									`bend${e.index}-${i.index}-${a}`
								)
							);
					}
					let s = r?.find((t) => t.index === e.index),
						p = s?.fingerings.find((e) => e.string === i.string);
					p &&
						t.push(
							ts(
								Fingering,
								{ fingerL: p.fingerL, x: d, string: i.string, fret: i.fret },
								`finger${e.index}-${i.index}`
							)
						);
				}
				if (u) {
					let a = i.measureLayout.lineLayout.intervalSize;
					u.forEach((i) =>
						t.push(
							ts(
								EditedNote,
								{
									x: d,
									fret: i.fret,
									originalFret: i.originalFret,
									string: i.string,
									intervalSize: a,
								},
								`editedNote${e.index}-${i.string}`
							)
						)
					);
				}
				if (!a.usedDrums && (e.upStroke || e.downStroke) && h < c) {
					let a = i.measureLayout.lineLayout.intervalSize;
					t.push(
						ts(
							Stroke,
							{ up: !!e.upStroke, min: h, max: c, xoffset: d, intervalSize: a },
							`stroke${e.index}`
						)
					);
				}
			}
		}
	return ts(e8, { children: t });
}
let path$3 = "rw256",
	text$2 = "rw2jc",
	line$2 = "rw33j",
	__default$e = { path: "rw256", text: "rw2jc", line: "rw33j" },
	note =
		"M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
	tail =
		"M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
	equal = "M37 27v-1h10v1zm0 3v-1h10v1z",
	beam = "M.8 0h15v3.5H.8z",
	half = "M8.8 0h7v3.5h-7z",
	line$1 = "M51 7V4h9m7 0h9v3";
function TripletFeel(e) {
	let {
		tripletFeel: { feel: t, layer: i },
		x: a,
	} = e;
	if (!i) return null;
	let { y: o } = i,
		n = "off" === t,
		s = "16th" === t;
	return e4(
		"g",
		{ transform: `translate(${a},-${o + 42})` },
		e4("path", {
			d: note,
			transform: "translate(10,10)",
			className: __default$e.path,
		}),
		e4("path", {
			d: note,
			transform: "translate(25,10)",
			className: __default$e.path,
		}),
		e4("path", {
			d: beam,
			transform: "translate(18,10)",
			className: __default$e.path,
		}),
		s &&
			e4("path", {
				d: beam,
				transform: "translate(18,15)",
				className: __default$e.path,
			}),
		e4("path", {
			d: note,
			transform: "translate(48,10)",
			className: __default$e.path,
		}),
		e4("path", {
			d: note,
			transform: "translate(63,10)",
			className: __default$e.path,
		}),
		(n || s) &&
			e4("path", {
				d: beam,
				transform: "translate(56,10)",
				className: __default$e.path,
			}),
		s &&
			e4("path", {
				d: "M8.8 0h7v3.5h-7z",
				transform: "translate(56,15)",
				className: __default$e.path,
			}),
		"8th" === t &&
			e4("path", {
				d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
				transform: "translate(63,10)",
				className: __default$e.path,
			}),
		!n && e4("text", { className: __default$e.text, x: 64, y: 0 }, 3),
		!n && e4("path", { className: __default$e.line, d: "M51 7V4h9m7 0h9v3" }),
		e4("path", {
			d: "M37 27v-1h10v1zm0 3v-1h10v1z",
			className: __default$e.path,
		})
	);
}
let voice0$1 = "Gy73",
	voice1$1 = "Gy2no",
	voice2$1 = "Gy8f",
	voice3$1 = "Gy1lf",
	voice0Tremolo = "Gy1fk",
	voice1Tremolo = "Gy1ax",
	voice2Tremolo = "Gy4w",
	voice3Tremolo = "Gybj",
	__default$d = {
		voice0: "Gy73",
		voice1: "Gy2no",
		voice2: "Gy8f",
		voice3: "Gy1lf",
		"voice0-tremolo": "Gy1fk",
		"voice1-tremolo": "Gy1ax",
		"voice2-tremolo": "Gy4w",
		"voice3-tremolo": "Gybj",
	},
	MAX_BEAMS = 4,
	FIRST_BEAMING_TYPE = 8;
function Rhythm(e) {
	let { voice: t, beats: i, x: a, y: o, tremoloOffset: n } = e;
	if (t.hasSameRhythm) return null;
	let s = eP + n,
		r = s / 2,
		l = "",
		u = "",
		d = 0,
		p = [],
		h = [, , , ,],
		c = !1,
		m = 0;
	for (let e of i) {
		let t = e.layout.x;
		1 !== e.type &&
			(l +=
				2 === e.type
					? `M${a + t},${o + r + 2}v${r}`
					: `M${a + t},${o + 2}v${s}`);
		let n = 0,
			p = 8;
		if (
			(e.beamStart ? (c = !0) : e.beamStop && (c = !1), c && m < i.length - 1)
		) {
			let a = i[m + 1],
				o = Math.min(e.type, a.type);
			for (e.tupletStop && (o = Math.min(o, 8)); p <= o; ) {
				let i = h[n];
				i
					? (i.length += a.layout.x - e.layout.x)
					: ((i = { x: t, length: a.layout.x - e.layout.x }), (h[n] = i)),
					n++,
					(p *= 2);
			}
		}
		let f = n,
			g = n < d || e.tupletStop || e.beamStop;
		for (; n < d; n++, p *= 2) {
			let e = h[n];
			(h[n] = void 0),
				e && (l += `M${a + e.x},${o + s - ek * n}v2h${e.length}v-2z`);
		}
		for (; p <= e.type; n++, p *= 2)
			l += `M${a + t},${o + s - ek * n}v2h${g ? "-7" : "7"}v-2z`;
		if (
			(e.dotted &&
				1 !== e.type &&
				(l += `M${a + t + 4},${o + s - ek * n}v2h2v-2z`),
			e.tremolo)
		)
			for (let i = 0; i < e.tremolo.type; i++)
				u += `M${a + t - 5},${o + 6 + 3 * i}l10-3z`;
		(d = f), m++;
	}
	if (l.length) {
		let e = `voice${t.index}`;
		p.push(ts("path", { className: __default$d[e], d: l }));
	}
	if (u.length) {
		let e = `voice${t.index}-tremolo`;
		p.push(ts("path", { className: __default$d[e], d: u }));
	}
	return p.length ? ts(e8, { children: p }) : null;
}
let path$2 = "Bhq244",
	text$1 = "Bhq1lk",
	voice0 = "Bhq8x",
	voice1 = "Bhq1hy",
	voice2 = "Bhq13i",
	voice3 = "Bhq2w3",
	__default$c = {
		path: "Bhq244",
		text: "Bhq1lk",
		voice0: "Bhq8x",
		voice1: "Bhq1hy",
		voice2: "Bhq13i",
		voice3: "Bhq2w3",
	},
	TEXT_OFFSET = platformVar(9);
function Tuplet(e) {
	let {
			tuplet: t,
			voice: i,
			start: a,
			stop: o,
			platform: n,
			x: s,
			y: r,
			tremoloOffset: l,
		} = e,
		u = a.layout.x + s,
		d = o.layout.x - a.layout.x,
		p = Math.round(d / 2),
		h = t > 9 ? 8 : 5,
		c = `M 0,0 L 0,6 ${p - h},6 M ${p + h},6 L ${d},6 ${d},0`;
	r += eM - 2 + l;
	let m = `voice${i.index}`;
	return ts("g", {
		className: __default$c[m],
		transform: `translate(${u},${r})`,
		children: [
			ts("text", {
				className: __default$c.text,
				x: p,
				y: TEXT_OFFSET(n),
				children: t,
			}),
			ts("path", { className: __default$c.path, d: c }),
		],
	});
}
let path$1 = "Chi2a3",
	text = "Chi2up",
	__default$b = { path: "Chi2a3", text: "Chi2up" };
function AlternateEnding(e) {
	let { layer: t, alternateEnding: i } = e.alternateEnding;
	if (t) {
		let { x1: a, x2: o, y: n } = t,
			s = o - a,
			r = e.x;
		return e.isFirstLayout
			? e4(
					"g",
					{ transform: `translate(${r},${-1 * n - 14})` },
					e4(
						"text",
						{ className: __default$b.text, x: 4, y: "14" },
						i.join(",")
					),
					e4("path", {
						className: __default$b.path,
						d: `M 1,14 L 1,0 ${s - 6},0`,
					})
			  )
			: e4(
					"g",
					{ transform: `translate(${r},${-1 * n - 14})` },
					e4("path", { className: __default$b.path, d: `M 1,0 L ${s - 6},0` })
			  );
	}
	return null;
}
let marker = "kw1ty",
	__default$a = { marker: "kw1ty" };
function Marker(e) {
	let { marker: t, x: i } = e,
		a = t.layer;
	return a
		? ts("text", {
				className: __default$a.marker,
				x: i,
				y: -1 * a.y,
				dy: "-0.25em",
				children: t.text,
		  })
		: null;
}
let rect = "Bjniz",
	dot = "Bjnch",
	number$1 = "Bjn2ws",
	path = "Bjnzo",
	__default$9 = {
		rect: "Bjniz",
		dot: "Bjnch",
		number: "Bjn2ws",
		path: "Bjnzo",
	};
function RepriseStart(e) {
	let { line: t, x: i } = e,
		{ intervalSize: a } = t.layout,
		o = (t.strings - 1) * a;
	return e4(
		"g",
		{ className: "Rep", transform: `translate(${i},0)` },
		e4("rect", { className: __default$9.rect, width: 4, height: o }),
		e4("path", { className: __default$9.path, d: `M 8,0 L 8,${o}` }),
		e4("ellipse", {
			className: __default$9.dot,
			cx: 13,
			cy: Math.floor(o / 3),
			rx: 2,
			ry: 2,
		}),
		e4("ellipse", {
			className: __default$9.dot,
			cx: 13,
			cy: Math.floor((2 * o) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
function RepriseEnd(e) {
	let { line: t, measureLayout: i, x: a } = e,
		{ intervalSize: o } = t.layout,
		n = (t.strings - 1) * o,
		s = i.measure.repeat;
	return e4(
		"g",
		{ transform: `translate(${i.width - 18 + a},0)` },
		s > 2 &&
			e4("text", { className: __default$9.number, x: 2.5, y: -2 }, s + "x"),
		e4("rect", { className: __default$9.rect, x: 14, width: 4, height: n }),
		e4("path", { className: __default$9.path, d: `M 11,0 L 11,${n}` }),
		e4("ellipse", {
			className: __default$9.dot,
			cx: 6,
			cy: Math.floor(n / 3),
			rx: 2,
			ry: 2,
		}),
		e4("ellipse", {
			className: __default$9.dot,
			cx: 6,
			cy: Math.floor((2 * n) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
let number = "Cpu2zi",
	signature = "Cpu351",
	tempo = "Cpu1y8",
	tempoText = "Cpujn",
	__default$8 = {
		number: "Cpu2zi",
		signature: "Cpu351",
		tempo: "Cpu1y8",
		tempoText: "Cpujn",
	},
	SIGNATURE_NUMERATOR_SHIFT = platformVar(-8),
	SIGNATURE_DENOMINATOR_SHIFT = platformVar(21);
function Measure(e) {
	let {
			measureLayout: t,
			line: i,
			part: a,
			slicingMode: o,
			measureEditorData: n,
			measureFingering: s,
			platform: r,
		} = e,
		l = t.measure,
		u = t.x,
		d = t.lineLayout.intervalSize,
		p = ea(l) === t,
		h = eL(l) === t,
		c = [];
	if (p) {
		void 0 !== e.platform &&
			c.push(
				ts(
					"text",
					{
						className: __default$8.number,
						x: 3 + u,
						y: -7.2,
						children: l.index + 1,
					},
					"number"
				)
			),
			l.repeatStart &&
				c.push(ts(RepriseStart, { line: i, x: u }, "repeatStart"));
		let t = l.tripletFeelWithLayer;
		t && c.push(ts(TripletFeel, { tripletFeel: t, x: u }, "tripletFeel"));
	}
	for (let e of (h &&
		l.repeat &&
		c.push(ts(RepriseEnd, { line: i, measureLayout: t, x: u }, "repeat")),
	t.alternateEndingWithLayer &&
		c.push(
			ts(
				AlternateEnding,
				{ alternateEnding: t.alternateEndingWithLayer, isFirstLayout: p, x: u },
				"alternateEnding"
			)
		),
	p &&
		l.markerWithLayer &&
		c.push(ts(Marker, { marker: l.markerWithLayer, x: u }, "marker")),
	t.tempoLayouts.values())) {
		let { tempo: t, layer: i } = e;
		t &&
			i &&
			c.push(
				ts(
					"g",
					{
						className: __default$8.tempo,
						transform: `translate(${i.x1},${-1 * i.y})`,
						children: [
							ts("use", { xlinkHref: "#tempo" }),
							ts("text", {
								className: __default$8.tempoText,
								y: -3,
								x: 8,
								children: `=${t.bpm}`,
							}),
						],
					},
					"tempo"
				)
			);
	}
	let m = 0;
	for (let e of t.beatsLayouts) {
		let t = s?.voices[0].beats;
		c.push(
			ts(
				Beat,
				{
					layout: e,
					part: a,
					measure: l,
					slicingMode: o,
					x: u,
					measureEditorData: n,
					measureFingerings: t,
					platform: r,
				},
				`beat${m}`
			)
		),
			m++;
	}
	if (p && l.hasSignature) {
		let e = Math.floor((a.strings / 2) * d);
		c.push(
			ts(
				"text",
				{
					className: __default$8.signature,
					x: t.signatureOffset + u,
					y: e + SIGNATURE_NUMERATOR_SHIFT(r),
					children: l.signature[0],
				},
				"t1"
			)
		),
			c.push(
				ts(
					"text",
					{
						className: __default$8.signature,
						x: t.signatureOffset + u,
						y: e + SIGNATURE_DENOMINATOR_SHIFT(r),
						children: l.signature[1],
					},
					"t2"
				)
			);
	}
	if (l.rhythmLines) {
		let e = 0,
			a = d * i.strings;
		for (let o of l.voices)
			if (!(o.hasSameRhythm || o.rest)) {
				let n = t.beatsLayouts
						.map((e) => e.beats.find((e) => e.voice == o.index))
						.filter(Boolean),
					s = i.rhythmEffects.tremolo.get(o.index) || !1,
					l = i.rhythmEffects.tremolo.get(o.index) || !1,
					d = n.some((e) => e.type > 8),
					p = s && d ? eN : 0,
					h = l ? eE : 0,
					m = p + h,
					f = a + o.index * (eM + m);
				c.push(
					ts(
						Rhythm,
						{ voice: o, beats: n, x: u, y: f, tremoloOffset: p },
						`rhythm${o.index}`
					)
				),
					(a = f);
				let g = 0,
					y = null;
				for (let t of n)
					t &&
						(t.tupletStart && ((g = t.tuplet), (y = t)),
						g &&
							y &&
							t.tupletStop &&
							(c.push(
								ts(
									Tuplet,
									{
										tuplet: g,
										start: y,
										stop: t,
										voice: o,
										platform: r,
										x: u,
										y: f,
										tremoloOffset: p,
									},
									`tuplet${e}`
								)
							),
							(g = 0),
							e++));
			}
	}
	return ts(e8, { children: c });
}
let drawLineWithSpaces = (e, t) => e + `H${t.x}m${t.w},0`;
function Strings(e) {
	let { line: t, hasTuning: i, slicingMode: a, part: o } = e,
		{ intervalSize: n } = t.layout,
		s = t.spaces,
		r = n * (t.strings - 1),
		l = "",
		u = t.layout.measureLayouts;
	for (let e = i ? 1 : 0; e < u.length; e++) {
		let t = u[e];
		ea(t.measure) === t && (l += `M${t.x},0v${r}`);
	}
	let d = u[0].x,
		p = a.stringLineMaxX(t);
	if (o.usedDrums && o.isDrumStdOn)
		for (let e = 0; e < t.strings; e++) l += `M${d},${n * e} H${p}`;
	else
		for (let e = 0; e < t.strings; e++)
			l += `M${d},${n * e}` + s[e].reduce(drawLineWithSpaces, "") + `H${p}`;
	let h = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
	return (
		eL(h.measure) === h && (l += `M${p},0v${r}`),
		ts("path", { className: el.strings, d: l })
	);
}
let tuning = "D38xz",
	__default$7 = { tuning: "D38xz" },
	LEFT_OFFSET$1 = platformVar(5);
function Tuning(e) {
	let { tuning: t, platform: i, intervalSize: a } = e;
	return t
		? e4(
				e8,
				null,
				eB(t, !1).map((e, t) =>
					e4(
						"text",
						{
							x: LEFT_OFFSET$1(i),
							y: 1 + t * a,
							key: t,
							className: __default$7.tuning,
						},
						e
					)
				)
		  )
		: null;
}
let line = "Cw81bf",
	__default$6 = { line: "Cw81bf" },
	Line = te((e) => {
		let {
				inlineDefs: t,
				line: i,
				noPadding: a,
				part: o,
				tuning: n,
				slicingMode: s,
				lazy: r,
				tabEditorData: l,
				fingerings: u,
				platform: d,
			} = e,
			p = s.expectedSliceWidth(i.layout.unscaledWidth) + (a ? 0 : eA),
			{ intervalSize: h } = i.layout,
			c = "http://www.w3.org/2000/svg",
			m = i.layout.height,
			f = a ? 0 : -eA / 2,
			g = `${f} -${i.layout.layers.height} ${p} ${m}`;
		if (!d) {
			let [e, t] = e9(i.index < 5),
				a = tt();
			if (
				(ta(() => {
					if (r && !e)
						try {
							let e = new IntersectionObserver(
								(e) => {
									e[0].isIntersecting && t(!0);
								},
								{ rootMargin: "0px 0px 500px 0px" }
							);
							return a.current && e.observe(a.current), () => e.disconnect();
						} catch (e) {
							requestAnimationFrame(() => t(!0));
						}
				}, [e, r]),
				r && !e)
			)
				return ts(
					"svg",
					{
						xmlns: c,
						version: "1.1",
						ref: a,
						width: p,
						viewBox: g,
						className: __default$6.line,
					},
					"line-stub" + i.index
				);
		}
		let y = i.capo,
			_ = !!y && !d,
			v = !!n;
		return ts(
			"svg",
			{
				xmlns: c,
				version: "1.1",
				width: p,
				viewBox: g,
				className: __default$6.line,
				children: [
					t && ts(Defs, { part: o, line: i }),
					v && ts(Tuning, { tuning: n, platform: d, intervalSize: h }),
					_ && ts(tg, y),
					ts(Strings, { line: i, hasTuning: v, slicingMode: s, part: o }),
					...i.hangingText.map((e, t) =>
						ts(BeatText, { text: e, layout: void 0, xoffset: 0 }, t.toString())
					),
					ts(Effects, { line: i }),
					...i.layout.measureLayouts.map((e) =>
						ts(
							Measure,
							{
								measureLayout: e,
								line: i,
								part: o,
								slicingMode: s,
								measureFingering:
									u && u.measures.find((t) => t.index - 1 === e.measure.index),
								measureEditorData:
									l && l[e.measure.index] && l[e.measure.index].beats,
								platform: d,
							},
							e.measure.index.toString() + e.x.toString()
						)
					),
				],
			},
			"line" + i.index
		);
	}),
	editor = "Ceg2uy",
	correction = "Ceg2gt",
	keyboard = "Ceg9t",
	digit = "Ceghf",
	remove = "Ceg19o",
	zero = "Ceg2im",
	__default$5 = {
		editor: "Ceg2uy",
		correction: "Ceg2gt",
		keyboard: "Ceg9t",
		digit: "Ceghf",
		remove: "Ceg19o",
		zero: "Ceg2im",
	},
	DragPolyfill = (e) => {
		let { enabled: t, onDragStart: i, onDrag: a } = e,
			o = e6(null),
			n = e6(!1),
			s = (e) => {
				document.addEventListener("mousemove", l),
					document.addEventListener("mouseup", r),
					clearTimeout(o.current),
					(o.current = setTimeout(() => {
						n.current = !0;
					}, 100)),
					i(e);
			},
			r = () => {
				document.removeEventListener("mousemove", l),
					document.removeEventListener("mouseup", r),
					(n.current = !1);
			},
			l = (e) => {
				t && n.current && a(e);
			};
		return (
			ta(
				() => (
					document.addEventListener("mousedown", s),
					() => document.removeEventListener("mousedown", s)
				),
				[]
			),
			null
		);
	},
	cancelTimer = () => {
		clearTimeout(updateTimer), (updateTimer = null);
	},
	MAX_FRET = 24;
class NoteEditor extends e3 {
	formClick = (e) => {
		e.preventDefault();
	};
	keyHandler = (e) => {
		let { tabEditor: t, dispatch: i } = this.props;
		if (updateTimer && 1 === t.fret.length && "0" !== t.fret) {
			let a = `${t.fret}${e}`;
			if ((cancelTimer(), 24 >= +a)) {
				i("tabEditor/changeNote", { newFret: a });
				return;
			}
		}
		i("tabEditor/changeNote", { newFret: e }),
			(updateTimer = setTimeout(() => (updateTimer = null), 1e3));
	};
	moveNote = (e) => {
		let { scale: t, dispatch: i } = this.props;
		i("tabEditor/moveNote:shortcut", { scale: t, direction: e });
	};
	moveNoteViaDrag(e) {
		let { scale: t, dispatch: i } = this.props;
		i("tabEditor/moveNote:dnd", { scale: t, newString: e });
	}
	onDigit = (e) => {
		e.preventDefault(), e.stopPropagation(), this.keyHandler(e.key);
	};
	onDeadNote = (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			cancelTimer(),
			this.props.dispatch("tabEditor/changeNote", { newFret: "X" });
	};
	onMobileKeyboard = (e) => () => this.keyHandler(e);
	onBackspace = () => {
		this.props.dispatch("tabEditor/changeNote", { newFret: "" }), cancelTimer();
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
	onShiftUp = (e) => {
		e.preventDefault(), e.stopPropagation(), this.moveNote("up");
	};
	onShiftDown = (e) => {
		e.preventDefault(), e.stopPropagation(), this.moveNote("down");
	};
	onEscape = () => {
		this.props.dispatch("layer/hide");
	};
	getDragY = (e) => {
		let t = document.getElementById("tablature").offsetTop;
		return e.pageY - t;
	};
	getStringOnY = (e) => {
		let t = this.props.tabEditor.beat?.layout.measureLayout.lineLayout;
		return t && eR(t, e);
	};
	onDragStart = (e) => {
		let t = this.getDragY(e);
		this.setState({ dragBaseY: t, prevString: this.getStringOnY(t) });
	};
	onDrag = eI((e) => {
		if (!e.clientX || !e.clientY) return;
		let t = this.getDragY(e),
			i = this.getStringOnY(t);
		if (void 0 === i) return;
		let a = i - this.state.prevString,
			o = Math.abs(a);
		0 !== o &&
			(this.setState({ dragBaseY: t, prevString: i }), this.moveNoteViaDrag(i));
	}, 50);
	constructor(e) {
		super(e);
		let { device: t } = e;
		(isMobileOs = M(t) || p(t.os) || P(t.os)),
			(this.state = { dragBaseY: 0, prevString: null }),
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
		window.hotKeysManager.bind(this.keyMap, { onPopup: !0 }),
			window.hotKeysManager.bindMeta("shift+up", this.onShiftUp, "onPopup"),
			window.hotKeysManager.bindMeta("shift+down", this.onShiftDown, "onPopup");
	}
	componentWillUnmount() {
		window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }),
			window.hotKeysManager.unbindMeta("shift+up", "onPopup"),
			window.hotKeysManager.unbindMeta("shift+down", "onPopup"),
			cancelTimer();
	}
	componentDidUpdate(e) {
		(e.tabEditor.formX !== this.props.tabEditor.formX ||
			e.tabEditor.formY !== this.props.tabEditor.formY) &&
			cancelTimer();
	}
	render() {
		let { tabEditor: e, scale: t } = this.props,
			i = {
				top: e.formY - 1,
				left: e.formX + 2.5,
				display: e.positioned ? "block" : "none",
				transform: `scale(${t})`,
				transformOrigin: "left 0px",
			};
		0 !== e.voice && (i.color = "#868686"),
			e.fret !== e.originalFret && "" !== e.fret && (i.color = "#ff3130");
		let a = {
				top: e.formY + 31 * t,
				left: e.formX - 64 * t,
				display: e.positioned ? "flex" : "none",
				transform: `scale(${t})`,
				transformOrigin: "left 0px",
			},
			o = !this.props.tabEditor.positioned;
		return e4(
			e8,
			null,
			e4(
				"div",
				{
					id: "note-editor",
					className: __default$5.editor,
					style: i,
					tabIndex: -1,
					onMouseUp: this.formClick,
				},
				"" === e.fret && "" !== e.originalFret
					? e4(
							e8,
							{},
							e.originalFret,
							e4(
								"svg",
								{ className: __default$5.correction, width: 25, height: 23 },
								e4("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
							)
					  )
					: e.fret
			),
			e4(DragPolyfill, {
				enabled: o,
				onDragStart: this.onDragStart,
				onDrag: this.onDrag,
			}),
			isMobileOs &&
				e4(
					"div",
					{ className: __default$5.keyboard, style: a, id: "mobileKeyboard" },
					e4(
						"button",
						{ className: __default$5.remove, onClick: this.onBackspace },
						"<-"
					),
					["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
						e4(
							"button",
							{
								key: e,
								className: __default$5.digit,
								onClick: this.onMobileKeyboard(e),
							},
							e
						)
					),
					e4(
						"button",
						{
							className: __default$5.zero,
							onClick: this.onMobileKeyboard("0"),
						},
						"0"
					)
				)
		);
	}
}
var NoteEditor$1 = t(NoteEditor, "tabEditor", "device", "part", "experiments");
let loading = "Cpk19q",
	hide = "Cpk1rm",
	normal = "Cpk2dh",
	shadow = "Cpk9f",
	body = "Cpk2r",
	icon$1 = "Cpk34y",
	__default$4 = {
		loading: "Cpk19q",
		hide: "Cpk1rm",
		normal: "Cpk2dh",
		shadow: "Cpk9f",
		body: "Cpk2r",
		icon: "Cpk34y",
	};
function rnd(e) {
	return Math.round(1e4 * e) / 1e4;
}
function getShapePath(e, t, i) {
	let a = e / 2,
		o = rnd(a * i),
		n = rnd(a);
	return `M 0,${o}
     Q 0,0 ${n},0 q ${n},0 ${n},${o}
     v ${rnd(t - 2 * o)}
     q 0,${o} -${n},${o} q -${n},0 -${n},-${o}
     v -${rnd(t - 2 * o)}`;
}
function getMedPath(e, t, i, a, o, n, s) {
	let r = i * a,
		l = i * o,
		u = i * n,
		d = i * s,
		p = Math.atan2(r, i / 2),
		h = Math.sin(p),
		c = Math.cos(p),
		m = u * h,
		f = u * c,
		g = d * h,
		y = d * c;
	return `M ${rnd(e + f)},${rnd(t + m)}
     Q ${rnd(e)},${rnd(t)} ${rnd(e + l)},${rnd(t)}
     L ${rnd(e + i - l)},${rnd(t)}
     Q ${rnd(e + i)},${rnd(t)} ${rnd(e + i - f)},${rnd(t + m)}
     L ${rnd(e + i / 2 + y)},${rnd(t + r - g)}
     Q ${rnd(e + i / 2)},${rnd(t + r)} ${rnd(e + i / 2 - y)},${rnd(t + r - g)}
     z`;
}
function Cursor(e) {
	let { intervalSize: t, strings: i, defs: a } = e,
		{ player: o, route: n } = m("player", "route"),
		s = !(o.canPlay || n.isPanel),
		r = 1 * eD,
		l = getMedPath((eD - r) / 2, 0.33 * eD, r, 0.95, 0.45, 0.6, 0.3),
		u = getShapePath(eD, (i - 1) * t + (eO + eF), 1.3),
		d = s ? __default$4.loading : __default$4.normal;
	return (
		e.hide && (d = __default$4.hide),
		ts("g", {
			ref: this.props.setRef,
			class: d,
			children: [
				a &&
					ts("defs", {
						children: ts("filter", {
							id: "CursorShadow",
							x: "-40%",
							width: "180%",
							children: [
								ts("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 2 }),
								ts("feOffset", { dx: 0, dy: 2 }),
							],
						}),
					}),
				ts(
					"path",
					{ class: __default$4.shadow, filter: "url(#CursorShadow)", d: u },
					"shadow"
				),
				ts("path", { class: __default$4.body, d: u }, "body"),
				ts("path", { class: __default$4.icon, d: l }, "path"),
			],
		})
	);
}
let background = "Cgh21m",
	loop = "Cgh2b2",
	shape = "Cgh1j0",
	area = "Cgh16l",
	icon = "Cgh2v6",
	__default$3 = {
		background: "Cgh21m",
		loop: "Cgh2b2",
		shape: "Cgh1j0",
		area: "Cgh16l",
		icon: "Cgh2v6",
	},
	HANDLE_PADDING = 10,
	HANDLE_AREA_WIDTH = 27;
function LoopShape(e) {
	let { x: t, layout: i, handle: a } = e,
		o = i.measureLayout.lineLayout,
		n = o.layers.height - ez + eH - 10,
		s = ej(o) - 20,
		r = `translate(${"left" === a ? t - 1 : t},${-n})`,
		l = "left" === a ? "matrix(-1,0,0,1,1,0)" : "",
		u = Math.floor(s / 2);
	return ts("g", {
		className: __default$3.loop,
		transform: r,
		"data-loop-handle": a,
		children: [
			ts("path", {
				d: `M0 ${u - 12}q15 0 15 12t-15 12m1 0v${u - 12}h-2 v-${s}h2z`,
				className: __default$3.shape,
				transform: l,
			}),
			ts("path", {
				d: `M8 ${u - 4.5}l-4.5 4.5l4.5 4.5`,
				className: __default$3.icon,
				transform: l,
			}),
			ts("rect", {
				x: -10,
				y: -1,
				height: s,
				width: 27,
				transform: l,
				className: __default$3.area,
			}),
		],
	});
}
let ANIMATE_MIN_SCROLL_PX = 5,
	ANIMATE_DURATION = 100,
	HAS_SMOOTH_SCROLL = "scrollBehavior" in document.documentElement.style,
	ease = (e) => 0.5 * (1 - Math.cos(Math.PI * e));
class WindowScroller {
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
			HAS_SMOOTH_SCROLL)
		)
			window.scrollTo({ left: 0, top: e, behavior: t ? "auto" : "smooth" });
		else {
			let a =
				i ||
				(window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY);
			if (t || 5 >= Math.abs(e - a)) window.scrollTo(0, e);
			else {
				(this.y = e), (this.startY = a), (this.startTime = eV());
				let t = window.requestAnimationFrame;
				this.scrollId = t(this.animationLoop);
			}
		}
	}
	animationLoop = () => {
		let e = ease(Math.min((eV() - this.startTime) / 100, 1)),
			t = this.startY + (this.y - this.startY) * e;
		if ((window.scrollTo(0, t), t !== this.y)) {
			let e = window.requestAnimationFrame;
			this.scrollId = e(this.animationLoop);
		} else this.scrollId = void 0;
	};
	unmount() {
		this.scrollId &&
			(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
	}
}
function RetunePopup(e) {
	let { tab: t, tuningButton: i } = e,
		{ device: a } = m("device"),
		o = 0,
		n = 0;
	if (t && i) {
		let e = t.getBoundingClientRect(),
			a = i.getBoundingClientRect();
		(o = a.left - e.left + a.width + 21),
			(n = a.top - e.top - (23 - a.height) - 14.5) < 2 && (n = 2);
	}
	return p(a.os) || P(a.os) || M(a)
		? e4(AppPopup, {
				title: "Pitch Shift",
				device: a,
				leftOffset: o,
				topOffset: n,
				feature: "pitch shift",
		  })
		: e4(tc, {
				title: "Pitch Shift",
				classPrefix: "pitchshift",
				leftOffset: o,
				topOffset: n,
		  });
}
async function getBoundingClientRect(e) {
	return "IntersectionObserver" in window
		? new Promise((t) => {
				let i = new IntersectionObserver((e) => {
					i.disconnect(), t(e[0].boundingClientRect);
				});
				i.observe(e);
		  })
		: e.getBoundingClientRect();
}
let tablature = "D28105",
	tablaturePrint = "D28105 D286d",
	tablatureNoPrint = "D28105 D28180",
	handlersLine = "D281b5",
	handlers = "D281qz",
	lineWrap = "D2820n",
	__default$2 = {
		tablature: "D28105",
		tablaturePrint: "D28105 D286d",
		tablatureNoPrint: "D28105 D28180",
		handlersLine: "D281b5",
		handlers: "D281qz",
		lineWrap: "D2820n",
	},
	exitActive = "d418f",
	enterActive = "d41sr",
	enter = "d41bt",
	exit = "d42bj",
	__default$1 = {
		exitActive: "d418f",
		enterActive: "d41sr",
		enter: "d41bt",
		exit: "d42bj",
	};
function shouldJump(e, t) {
	let i = e.measureLayout,
		a = t.measureLayout;
	return i !== a
		? i.lineLayout !== a.lineLayout || i.measure.index + 1 !== a.measure.index
		: e.x >= t.x;
}
let isPlaying = (e) => e.player.shouldPlay && e.player.canPlay;
class CursorProvider extends e3 {
	constructor(e) {
		super(e),
			(this.state = {}),
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
			(this.nextLayoutTimestamp = 0);
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
			isPlaying(this.props) ? this.animationPlay() : this.animationSeek();
	}
	componentDidUpdate(e) {
		let t = this.props;
		if (t.print) return;
		let i = t.part !== e.part || t.lines !== e.lines,
			a = t.cursor.position !== e.cursor.position;
		(i || a) &&
			((this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0));
		let o =
			e.print ||
			i ||
			a ||
			t.player.speed !== e.player.speed ||
			t.player.type !== e.player.type ||
			t.player.pitchShift !== e.player.pitchShift ||
			isPlaying(t) !== isPlaying(e);
		if (o) {
			let i = this.animationSeek;
			isPlaying(e)
				? (i = isPlaying(t) ? this.animationRestart : this.animationPause)
				: isPlaying(t) && (i = this.animationPlay),
				i.call(this);
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
	applyTransform(e, t) {
		let i = `translate3d(${e - eD / 2}px, ${-eO}px, 0)`,
			a = this.props.refs.current;
		if (a) {
			let e = a[t.line.index];
			if ((e && (e.style.transform = i), this.state.lineLayout != t)) {
				if (this.state.lineLayout) {
					let e = a[this.state.lineLayout.line.index];
					e && (e.style.visibility = "hidden");
				}
				e && (e.style.visibility = "visible"), this.setState({ lineLayout: t });
			}
		}
	}
	applyCursorCoordinates(e) {
		let t;
		let { layout: i, nextLayout: a, layoutTimestamp: o } = this;
		if (a && shouldJump(i, a)) {
			let e = i.absoluteLoopRightX - i.absoluteX,
				n = a.absoluteX - a.absoluteLoopLeftX,
				s = (i.duration * e) / (e + n),
				r = i.duration - s;
			t = (t) => {
				let l = t - o;
				l < s
					? this.applyTransform(
							i.absoluteX + (e * l) / s,
							i.measureLayout.lineLayout
					  )
					: this.applyTransform(
							a.absoluteLoopLeftX + (n * (l - s)) / r,
							a.measureLayout.lineLayout
					  );
			};
		} else {
			let e = a
				? a.absoluteX - i.absoluteX
				: i.absoluteLoopRightX - i.absoluteX;
			t = (t) => {
				this.applyTransform(
					i.absoluteX + (e * (t - o)) / i.duration,
					i.measureLayout.lineLayout
				);
			};
		}
		return t(e), t;
	}
	updateCurrentTempo(e) {
		let t = this.props.part.tempos;
		if (t.length) {
			let i = (i) =>
				t[i].timestamp <= e && (i === t.length - 1 || e < t[i + 1].timestamp);
			this.tempoIndex >= t.length && (this.tempoIndex = 0),
				i(this.tempoIndex) ||
					((this.tempoIndex = t.findIndex((e, t) => i(t))),
					-1 === this.tempoIndex && (this.tempoIndex = 0),
					this.props.dispatch("tempo/apply", t[this.tempoIndex].tempo));
		}
	}
	findLayoutUnderCursor(e) {
		if (
			!this.layout ||
			!(
				this.layoutTimestamp <= e &&
				e < this.layoutTimestamp + this.layout.duration
			)
		) {
			let t = eX(this.props.part, e),
				{ timeline: i, timestamps: a } = this.props.part;
			(this.layoutTimestamp = a[t]),
				(this.layout = i.get(this.layoutTimestamp));
			let o = t < a.length - 1 ? a[t + 1] : null,
				n = this.props.cursor.position.loopEnd;
			return (
				0 !== n &&
					(null === o || o >= n - 1e-15) &&
					(o = this.props.cursor.position.loopStart),
				(this.nextLayout = null !== o ? i.get(o) : null),
				!0
			);
		}
		return !1;
	}
	findLineLayoutUnderCursor(e) {
		let t =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
			i = eX(this.props.part, e, t),
			{ timeline: a, timestamps: o } = this.props.part,
			n = a.get(o[i]);
		return n.measureLayout.lineLayout;
	}
	animationSeek() {
		let e = this.props.player.audio?.getCursor() || 0;
		this.findLayoutUnderCursor(e),
			this.applyCursorCoordinates(e),
			this.updateCurrentTempo(e);
	}
	animationPlay() {
		this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
		let e = !1,
			t = this.props.player.audio.getCursor();
		this.findLayoutUnderCursor(t);
		let i = this.applyCursorCoordinates(t),
			a = null,
			o = () => {
				let e = this.layout.absoluteLoopRightX - this.layout.absoluteX,
					t = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
					i = ((this.layout.duration * e) / (e + t)) * 0.8;
				return (a = (e) =>
					!!this.layout &&
					!!this.nextLayout &&
					e - this.layoutTimestamp > i &&
					(this.props.ensureLineVisibility(
						this.layout.measureLayout.lineLayout,
						this.nextLayout.measureLayout.lineLayout,
						!1
					),
					(a = null),
					!0));
			};
		(this.nextLayout && shouldJump(this.layout, this.nextLayout) && o()(t)) ||
			this.props.ensureLineVisibility(
				null,
				this.layout.measureLayout.lineLayout,
				!1
			);
		let n = window.requestAnimationFrame,
			s = () => {
				try {
					if (
						(!e && this.props.player.audio.isPositionChanged() && (e = !0), e)
					) {
						let e = this.props.player.audio.getCursor();
						i && i(e),
							a && a(e),
							this.findLayoutUnderCursor(e) &&
								((i = this.applyCursorCoordinates(e)),
								this.nextLayout &&
									shouldJump(this.layout, this.nextLayout) &&
									o(),
								!this.nextLayout &&
									e >= eU(this.layout) - 1e-15 &&
									(this.stopPlayback(), (this.pause = !0))),
							this.updateCurrentTempo(e);
					}
					this.pause || (this.animationPlayId = n(s));
				} catch (e) {
					console.error(e);
				}
			};
		(this.pause = !1), (this.animationPlayId = n(s));
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
	handleBackspace = async (e) => {
		e.preventDefault(), await this.props.dispatch("cursor/backspace");
		let t = this.findLineLayoutUnderCursor(
			this.props.store.get().cursor.position.cursor
		);
		this.props.ensureLineVisibility(null, t, !1);
	};
	handleLeft = async (e) => {
		e.preventDefault(), await this.props.dispatch("cursor/left");
		let t = this.findLineLayoutUnderCursor(
			this.props.store.get().cursor.position.cursor
		);
		this.props.ensureLineVisibility(null, t, !1);
	};
	handleRight = async (e) => {
		e.preventDefault(), await this.props.dispatch("cursor/right");
		let t = this.findLineLayoutUnderCursor(
			this.props.store.get().cursor.position.cursor
		);
		this.props.ensureLineVisibility(null, t, !1);
	};
	handleUp = (e) => {
		e.preventDefault(), this.props.dispatch("cursor/up");
		let t = this.findLineLayoutUnderCursor(
			this.props.store.get().cursor.position.cursor
		);
		this.props.ensureLineVisibility(null, t, !1);
	};
	handleDown = async (e) => {
		e.preventDefault(), await this.props.dispatch("cursor/down");
		let t = this.findLineLayoutUnderCursor(
			this.props.store.get().cursor.position.cursor
		);
		this.props.ensureLineVisibility(null, t, !1);
	};
	handleShiftLoopRight = async (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			await this.props.dispatch("cursor/shiftRight");
		let t = this.props.store.get().cursor.position;
		if (0 !== t.loopEnd) {
			let e = this.findLineLayoutUnderCursor(t.loopEnd, "right");
			this.props.ensureLineVisibility(null, e, !1);
		}
	};
	handleShiftLoopLeft = async (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			await this.props.dispatch("cursor/shiftLeft");
		let t = this.props.store.get().cursor.position;
		if (0 !== t.loopEnd) {
			let e = this.findLineLayoutUnderCursor(t.loopStart);
			this.props.ensureLineVisibility(null, e, !1);
		}
	};
	render() {
		return this.props.children;
	}
}
var CursorProvider$1 = t(CursorProvider, "player", "cursor");
let lineControls = "hlii",
	__default = { lineControls: "hlii" };
function LineControls(e) {
	let { line: t, slicingMode: i } = e,
		a = t.layout.height,
		o = i.expectedSliceWidth(t.layout.unscaledWidth) + eA,
		n = `${-eA / 2} -${t.layout.layers.height} ${o} ${a}`;
	return ts("svg", {
		width: o,
		xmlns: "http://www.w3.org/2000/svg",
		version: "1.1",
		height: a,
		viewBox: n,
		className: __default.lineControls,
		children: e.children,
	});
}
function LoopBackground(e) {
	let { leftLayout: t, rightLayout: i, line: a } = e,
		o = t.measureLayout.lineLayout,
		n = i.measureLayout.lineLayout,
		s = a.layout,
		r = __default$3.background,
		l = t.absoluteLoopLeftX - 1,
		u = i.absoluteLoopRightX,
		d = -s.layers.height + ez - eH;
	return o === n && o === s
		? ts("rect", {
				className: r,
				rx: 3,
				height: ej(o),
				x: l,
				y: d,
				width: u - l + 1,
		  })
		: o === s
		? ts("rect", {
				className: r,
				rx: 3,
				height: ej(o),
				x: l,
				y: d,
				width: o.maxX - l,
		  })
		: n === s
		? ts("rect", {
				className: r,
				rx: 3,
				height: ej(n),
				x: n.minX - 1,
				y: d,
				width: u - n.minX + 2,
		  })
		: ts("rect", {
				className: r,
				rx: 3,
				height: ej(s),
				x: s.minX - 1,
				y: d,
				width: s.maxX + 2,
		  });
}
class CursorErrorBoundary extends e3 {
	constructor() {
		super(), (this.state = { isFailed: !1 });
	}
	componentDidCatch(e) {
		this.setState({ isFailed: !0 }),
			"Sentry" in window &&
				"function" == typeof window.Sentry.captureException &&
				window.Sentry.captureException(e),
			this.props.dispatch("cursor/failed", { error: e });
	}
	render() {
		return this.state.isFailed ? null : this.props.children;
	}
}
var CursorErrorBoundary$1 = t(CursorErrorBoundary);
let LEFT_OFFSET = eA / 2,
	TOP_OFFSET = 0,
	MOVE_THRESHOLD = 7,
	MOBILE_HEADER_HEIGHT = 48,
	MOBILE_CONTROLS_HEIGHT = 48,
	animationProps = { animationStyles: __default$1 };
function calculateMovement(e, t) {
	return e ? Math.abs(t.x - e.x) + Math.abs(t.y - e.y) : 0;
}
function equals(e) {
	return (t) => t === e;
}
let isTouchable = "ontouchstart" in window;
function isInLoop(e, t, i) {
	return (
		t &&
		i &&
		t.measureLayout.lineLayout.line.index <= e.index &&
		e.index <= i.measureLayout.lineLayout.line.index
	);
}
function isLoopEdge(e, t) {
	return t && t.measureLayout.lineLayout.line == e;
}
class Tab extends e3 {
	constructor(e) {
		super(e),
			(this.lastMeasureIndex = void 0),
			(this.readyHack = !0),
			(this.state = {
				loopStartLayout: null,
				loopStartX: 0,
				loopEndLayout: null,
				loopEndX: 0,
				activeLoopHandle: void 0,
				deltaLeftX: 0,
				deltaRightX: 0,
				isPitchshiftToStandard: !1,
			}),
			(this.lastTouch = null),
			(this.onTouchMoveTickId = void 0),
			(this.windowScroller = new WindowScroller()),
			(this.scrollToCursor = P(e.device.os)
				? () => setTimeout(this.scrollToCursorBase, 250)
				: this.scrollToCursorBase);
	}
	componentDidMount() {
		window.addEventListener("resize", this.viewportResizeDebounced),
			this.viewportResize().then(this.scrollToCursor);
	}
	scrollToCursorBase = () => {
		if (this.tab) {
			let e = D(
				this.props.part,
				this.props.store.get().player.audio?.getCursor() || 0,
				"left"
			);
			e && this.ensureLineVisibility(null, e.measureLayout.lineLayout, !1);
		}
	};
	componentDidUpdate(e) {
		(e.lines.lines !== this.props.lines.lines ||
			e.lines.scale !== this.props.lines.scale ||
			e.plusAccess !== this.props.plusAccess ||
			this.props.videoIsReady !== e.videoIsReady) &&
			this.viewportResize().then(this.scrollToCursor);
	}
	componentWillUnmount() {
		let e = this.tab;
		e && unsubscribeOnPointerDown(e, this.onTouchStart),
			window.removeEventListener("resize", this.viewportResizeDebounced),
			this.windowScroller.unmount();
	}
	viewportResize = async () => {
		let e = this.tab;
		if (e) {
			let t = await getBoundingClientRect(e);
			(this.pageX =
				t.left +
				LEFT_OFFSET +
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
	viewportResizeDebounced = o(this.viewportResize, 100);
	static getDerivedStateFromProps(e, t) {
		let i = t.loopStartLayout,
			a = i && !t.activeLoopHandle ? i.absoluteLoopLeftX : t.loopStartX,
			o = t.loopEndLayout,
			n = o && !t.activeLoopHandle ? o.absoluteLoopRightX : t.loopEndX,
			{ tuning: s, instrumentId: r } = e.part,
			l = s && z(r, s),
			u = !1;
		(H(r) || j(r)) && l && 0 !== l.pitch && (u = !0);
		let d = e.position;
		return (
			0 !== d.loopStart || 0 !== d.loopEnd
				? ((i &&
						-1 !== i.occurrences.findIndex(equals(e.position.loopStart))) ||
						(a = (i = D(e.part, d.loopStart, "left")).absoluteLoopLeftX),
				  (o &&
						-1 !== o.occurrences.findIndex(equals(d.loopEnd - o.duration))) ||
						(n = (o = D(e.part, d.loopEnd, "right")).absoluteLoopRightX))
				: ((i = null), (a = 0), (o = null), (n = 0)),
			{
				loopStartLayout: i,
				loopStartX: a,
				loopEndLayout: o,
				loopEndX: n,
				isPitchshiftToStandard: u,
			}
		);
	}
	ensureLineVisibility = (e, t, i) =>
		eq(() => {
			let { showPitchshiftLayer: a } = this.props;
			if (this.props.lines.print) return;
			let o = window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY,
				n = this.props.lines.scale,
				s = eG(),
				r = this.props.videoIsReady ? 200 : 0,
				l = (s ? 48 : 0) + r,
				u = s ? 48 : 0,
				{ pageY: d, clientHeight: p } = this,
				h = o - d + l,
				c = o - d + p - u,
				m = c - h,
				f = t.line.index,
				g = this.props.lines;
			if (e && (e.maxY * n < h || c < e.y * n)) return;
			let y = o,
				{ loopStartLayout: _, loopEndLayout: v } = this.state;
			if (a) y = 0;
			else if (_ && v) {
				let e = t.y * n - h;
				if (e < 0) y = o + e;
				else if (
					((e = c - t.maxY * n) < 0 && (y = o - e),
					f < v.measureLayout.lineLayout.line.index)
				) {
					let i = g.lines[f + 1];
					if (i) {
						let a = t.y,
							s = i.layout.maxY;
						(s - a) * n < m && (e = c - s * n) < 0 && (y = o - e);
					}
				}
			} else if (0 === f) y = 0;
			else if (((y = t.y * n + d - l), f < g.lines.length - 1)) {
				let e = g.lines[f - 1],
					t = g.lines[f + 1];
				if (e && t) {
					let i = e.layout.y,
						a = t.layout.maxY;
					(a - i) * n < m && (y = i * n + d - l);
				}
			}
			y !== o && this.windowScroller.scroll(y, i, o);
		});
	onTouchStart = (e) => {
		if (isTouchable && "mousedown" === e.type) return;
		if (this.props.tabEditorActive) {
			this.handleTabEditor(e);
			return;
		}
		let t = e.target;
		for (; t && t !== this.tab; ) {
			if (
				t.getAttribute("data-tab-control") ||
				"dialog" === t.getAttribute("role")
			)
				return;
			t = t.parentNode;
		}
		if (this.props.layer) {
			this.props.dispatch("layer/hide"),
				e.preventDefault(),
				e.stopPropagation();
			return;
		}
		let i =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-loop-handle"),
			a = this.getTouchPoint(e);
		if (((this.lastTouch = a), "left" === i || "right" === i)) {
			if (
				(e.preventDefault(),
				e.stopPropagation(),
				this.props.dispatch("player/changeLoop", !0),
				this.setState((e) =>
					"left" === i
						? { activeLoopHandle: i, deltaLeftX: e.loopStartX - a.x }
						: { activeLoopHandle: i, deltaRightX: e.loopEndX - a.x }
				),
				!this.onTouchMoveTickId)
			) {
				let e = window.requestAnimationFrame;
				this.onTouchMoveTickId = e(this.onTouchMoveTick);
			}
			subscribeOnPointerMove(document, this.onTouchMove);
		}
		subscribeOnPointerUp(document, this.onTouchEnd);
	};
	onTouchMove = (e) => {
		e.preventDefault(),
			e.stopPropagation(),
			(this.lastTouch = this.getTouchPoint(e));
	};
	limitX(e) {
		return Math.min(Math.max(e, 0), this.props.lines.width - 1);
	}
	onTouchMoveTick = () => {
		this.lastTouch &&
			this.setState((e) => {
				let t = this.lastTouch;
				if (!t) throw Error("Wrong state during touch move");
				let i = {
					loopStartX: e.loopStartX,
					loopStartLayout: e.loopStartLayout,
					loopEndX: e.loopEndX,
					loopEndLayout: e.loopEndLayout,
				};
				{
					let { loopStartLayout: a, loopEndLayout: o } = i;
					if (!a || !o) throw Error("Wrong loop state");
					if ("left" === e.activeLoopHandle) {
						let n = { x: this.limitX(t.x + e.deltaLeftX), y: t.y },
							s = eK(this.props.lines.lines, n, "left"),
							r = eY(s),
							l = eY(o);
						r < l || (r === l && n.x <= o.absoluteLoopLeftX)
							? ((i.loopStartLayout = s), (i.loopStartX = n.x))
							: ((i.loopStartLayout = i.loopEndLayout),
							  (i.loopStartX = a.absoluteLoopLeftX));
					} else {
						let n = { x: this.limitX(t.x + e.deltaRightX), y: t.y },
							s = eK(this.props.lines.lines, n, "right"),
							r = eY(s),
							l = eY(a);
						r > l || (r === l && n.x >= a.absoluteLoopRightX)
							? ((i.loopEndLayout = s), (i.loopEndX = n.x))
							: ((i.loopEndLayout = i.loopStartLayout),
							  (i.loopEndX = o.absoluteLoopRightX));
					}
				}
				{
					let { loopStartLayout: t, loopEndLayout: a } = i;
					t &&
						a &&
						(t !== e.loopStartLayout || a !== e.loopEndLayout) &&
						this.props.dispatch("cursor/loop", {
							loopStartLayout: t,
							loopEndLayout: a,
							side: e.activeLoopHandle,
						});
				}
				return (this.lastTouch = null), i;
			});
		let e = window.requestAnimationFrame;
		this.onTouchMoveTickId = e(this.onTouchMoveTick);
	};
	onTouchEnd = (e) => {
		if (this.state.activeLoopHandle)
			unsubscribeOnPointerMove(document, this.onTouchMove),
				e.preventDefault(),
				this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
				(this.onTouchMoveTickId = void 0),
				this.setState(
					(e) => (
						this.props.dispatch("player/changeLoop", !1),
						{
							activeLoopHandle: void 0,
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
				i = calculateMovement(this.lastTouch, t);
			i < 7 &&
				(e.preventDefault(),
				this.setState((e) => {
					let i = {
							loopStartX: e.loopStartX,
							loopStartLayout: e.loopStartLayout,
							loopEndX: e.loopEndX,
							loopEndLayout: e.loopEndLayout,
						},
						a = this.props.position,
						o = eK(this.props.lines.lines, t);
					if (0 === a.loopStart && 0 === a.loopEnd)
						a = { cursor: eW(o), loopStart: 0, loopEnd: 0 };
					else {
						let e = eW(o),
							t = eJ(o);
						if (a.loopStart <= e && e < a.loopEnd)
							a = { cursor: e, loopStart: a.loopStart, loopEnd: a.loopEnd };
						else if (a.loopStart <= t && t < a.loopEnd)
							a = { cursor: t, loopStart: a.loopStart, loopEnd: a.loopEnd };
						else {
							let t = o.measureLayout.measure.layouts,
								n = t[0].beatsLayouts,
								s = t[t.length - 1].beatsLayouts;
							(i.loopStartLayout = n[0]),
								(i.loopEndLayout = s[s.length - 1]),
								(i.loopStartX = i.loopStartLayout.absoluteLoopLeftX),
								(i.loopEndX = i.loopEndLayout.absoluteLoopRightX),
								(a = {
									cursor: e,
									loopStart: eZ(i.loopStartLayout),
									loopEnd: eQ(i.loopEndLayout),
								});
						}
					}
					return (
						this.props.dispatch("cursor/move", a),
						this.ensureLineVisibility(null, o.measureLayout.lineLayout, !1),
						i
					);
				})),
				(this.lastTouch = null);
		}
		unsubscribeOnPointerUp(document, this.onTouchEnd);
	};
	getTouchPoint(e) {
		let t = e.changedTouches ? e.changedTouches[0] : e,
			i = (t.pageX - this.pageX) / this.props.lines.scale,
			a = (t.pageY - this.pageY) / this.props.lines.scale;
		return { x: i, y: a };
	}
	handleTabEditor(e) {
		let t = this.getTouchPoint(e),
			i = this.props.device,
			a = M(i) || p(i.os) || P(i.os);
		if (a) {
			let e = document.querySelector("#mobileKeyboard").getBoundingClientRect(),
				i =
					this.lastTouch &&
					t.y > this.lastTouch.y + 10 &&
					t.y < this.lastTouch.y + 10 + e.height,
				a =
					this.lastTouch &&
					t.x > this.lastTouch.x - e.width / 2 &&
					t.x < this.lastTouch.x + e.width / 2;
			if (i && a) return;
			this.lastTouch = t;
		}
		let o = eK(this.props.lines.lines, t),
			n = eR(o.measureLayout.lineLayout, t.y);
		this.props.setTabEditor({
			beatsLayout: o,
			stringNum: n,
			scale: this.props.lines.scale,
		});
	}
	refMain = (e) => {
		(this.tab = e),
			W &&
				e &&
				(unsubscribeOnPointerDown(e, this.onTouchStart),
				subscribeOnPointerDown(e, this.onTouchStart));
	};
	refTuning = (e) => {
		this.tuningButton = e;
	};
	render() {
		let {
				loopStartLayout: e,
				loopEndLayout: t,
				loopStartX: i,
				loopEndX: a,
				isPitchshiftToStandard: o,
			} = this.state,
			n = this.props.lines.lines,
			s = this.props.lines.scale,
			r = this.props.lines.print,
			l = this.props.lines.slicingMode,
			{
				part: u,
				plusAccess: d,
				isSmallScreen: p,
				handlePitchshift: h,
				showPitchshiftPopup: c,
				showPitchshiftLayer: m,
				tuning: f,
				tabEditorActive: g,
				tabEditorData: y,
				fingerings: _,
				videoIsOpened: v,
			} = this.props,
			b = n[0].layout.layers.height,
			$ = _ && _.partId === u.partId ? _.data : void 0,
			x = r ? __default$2.tablaturePrint : __default$2.tablatureNoPrint,
			w = !p && u.tuning && !v,
			T = !((d && !this.props.device.isDesktop) || r),
			C = e6([]);
		return e4(
			e8,
			null,
			e4(
				"section",
				{
					id: "tablature",
					className: x,
					"data-id": d ? e1 : e2,
					role: "application",
					key: "main",
					ref: this.refMain,
				},
				0 !== s && g && e4(NoteEditor$1, { scale: s }),
				ts(ToastProvider, {
					device: this.props.device,
					children: ts(CursorErrorBoundary$1, {
						children: ts(CursorProvider$1, {
							print: r,
							part: u,
							lines: n,
							refs: C,
							ensureLineVisibility: this.ensureLineVisibility,
							children: n.map((n, s) =>
								ts("div", {
									className: __default$2.lineWrap,
									children: [
										ts(
											Line,
											{
												line: n,
												part: u,
												tuning: 0 === n.index && f,
												inlineDefs: 0 === n.index,
												slicingMode: l,
												tabEditorData: y,
												fingerings: $,
												lazy: T,
											},
											"line-" + n.index.toString()
										),
										ts(
											LineControls,
											{
												line: n,
												slicingMode: l,
												children: [
													w &&
														!r &&
														0 === s &&
														e4(TuningButton, {
															reference: this.refTuning,
															handlePitchshift: h,
															isPitchshiftToStandard: o,
															isActive: c || m,
															lock: !d,
														}),
													W &&
														!r &&
														isInLoop(n, e, t) &&
														e4(LoopBackground, {
															leftLayout: e,
															rightLayout: t,
															line: n,
														}),
													W &&
														!r &&
														isLoopEdge(n, e) &&
														ts(
															LoopShape,
															{ x: i, layout: e, handle: "left" },
															"left"
														),
													W &&
														!r &&
														isLoopEdge(n, t) &&
														ts(
															LoopShape,
															{ x: a, layout: t, handle: "right" },
															"right"
														),
													ts(g ? BarNumbers : LearnMarkers, {
														line: n,
														partId: u.partId,
														songId: u.songId,
													}),
													!r &&
														ts(
															Cursor,
															{
																strings: u.strings,
																intervalSize: n.layout.intervalSize,
																defs: 0 === s,
																hide: g,
																setRef: (e) => {
																	C.current[s] = e;
																},
															},
															"cursor"
														),
												],
											},
											"ctrls-" + n.index.toString()
										),
									],
								})
							),
						}),
					}),
				}),
				e4(
					N,
					null,
					!p &&
						c &&
						e4(
							E,
							{ ...animationProps, key: "popup" },
							e4(RetunePopup, {
								tab: this.tab,
								tuningButton: this.tuningButton,
							})
						),
					!p &&
						m &&
						e4(
							E,
							{ ...animationProps, key: "layer" },
							e4(PitchShift$1, {
								firstLineLayoutHeight: b,
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
let hasPlusAccess = (e, t) => true,
	onTab = { onTab: !0 };
class AppTab extends e3 {
	activateFingeringsExperiment = () => {
		let { dispatch: e, user: t, experiments: i } = this.props;
		true &&
			i.paid_fingerings?.status === "pending" &&
			e("experiments/activate", { experimentName: "paid_fingerings" });
	};
	setTabEditor = (e) => this.props.dispatch("tabEditor/setForm", e);
	componentDidMount() {
		let e = window.hotKeysManager;
		e.bindOne("space", this.props.handlePlay, onTab),
			e.bindOne("l", this.props.handleLoop, onTab),
			e.bindOne("f", this.props.handleSolo, onTab),
			e.bindOne("m", this.props.handleMute, onTab),
			e.bindOne("r", this.props.handlePitchshift, onTab),
			e.bindOne("t", this.props.handleMixer, onTab),
			e.bindOne("s", this.props.handleSpeed, onTab),
			e.bindOne("p", this.props.handlePrint, onTab),
			e.bindOne("c", this.props.handleCountin, onTab),
			e.bindOne("n", this.props.handleMetronome, onTab),
			e.bindOne("e", this.props.handleTabEditor, onTab),
			e.bindOne("g", this.props.handleFingerings, onTab),
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
		e.unbindOne("space", onTab),
			e.unbindOne("l", onTab),
			e.unbindOne("f", onTab),
			e.unbindOne("m", onTab),
			e.unbindOne("r", onTab),
			e.unbindOne("t", onTab),
			e.unbindOne("s", onTab),
			e.unbindOne("p", onTab),
			e.unbindOne("c", onTab),
			e.unbindOne("n", onTab),
			e.unbindOne("e", onTab),
			this.resizeObserver && this.resizeObserver.disconnect();
	}
	render() {
		let {
				dispatch: e,
				user: t,
				demo: i,
				player: a,
				meta: o,
				part: n,
				cursor: s,
				screen: r,
				layer: { layer: l },
				device: u,
				route: d,
				tabEditor: p,
				fingerings: h,
				experiments: c,
				playAlongAd: m,
			} = this.props,
			f = d.isPanel,
			g = hasPlusAccess(t, i),
			y = r.isSmall,
			_ = e0(o),
			v = "saving" === p.status || "changes" === p.status,
			{ pitchShift: b } = a,
			$ = to(
				() =>
					!!n.current &&
					!!n.current.tuning &&
					n.current.tuning.map((e) => e + b),
				[b, n]
			),
			x = o.allowedByLicense,
			w = !o.isFailed && !n.isFailed && x && !o.isDeleted,
			T = w && !!n.current && !!n.lines.lines.length,
			C = w && (!n.current || !n.lines.lines.length),
			S = w && !g,
			k = w && !g && u.isPhone && T,
			P = !y && !!n.videoPart && !M(u),
			L = a.videoOpened || m.isOpened,
			N = c.paid_fingerings?.segment,
			E = true && ("ut" === N || "on" === N);
		return e4(
			"section",
			{ className: e5.tablature, role: f ? "complementary" : "main" },
			e4(AlertManager, { meta: o, user: t, cursor: s, part: n, player: a }),
			P &&
				e4(g ? YTPlayer$1 : YTPlayerDemo$1, {
					songId: n.songId,
					handlePlayVideo: this.props.handlePlayVideo,
					handlePauseVideo: this.props.handlePauseVideo,
				}),
			e4(y ? MobileControls : Controls, {
				...this.props,
				shouldPlay: a.shouldPlay,
				canPlay: a.canPlay || f,
				track: _,
				device: u,
				layer: l,
				plusAccess: g,
				fingeringsEnabled: E,
				fingeringsStatus: h.status,
				fingeringsActive: h.shown,
				loop: 0 !== s.position.loopEnd,
				type: a.type,
				speed: a.speed,
				pitchShift: a.pitchShift,
				pitchShiftAvailable: !n.current || !!n.current.tuning,
				isCountin: a.isCountin,
				isMetronome: a.isMetronome,
				metronomeType: a.metronomeType,
				tadEditorWarning: v,
				tabEditorActive: d.hasEditor,
				usedDrums: n.current && n.current.usedDrums,
				videoIsOpened: a.videoOpened,
				fingeringsOnActivate: this.activateFingeringsExperiment,
			}),
			S && e4(tP, { key: `tab-showroom-${o.songId}`, songId: o.songId }),
			e4(
				"section",
				{ class: e5.pane, key: `tab-${o.songId}` },
				C && e4(tk, { key: `loading-${o.songId}` }),
				T &&
					ts(
						Tab,
						{
							key: `tab-${o.songId}-${n.current.partId}`,
							dispatch: e,
							store: this.props.store,
							part: n.current,
							lines: n.lines,
							isSmallScreen: y,
							plusAccess: g,
							shouldPlay: a.shouldPlay,
							position: s.position,
							handlePitchshift: this.props.handlePitchshift,
							showPitchshiftPopup: "plus_pitchshift" === l,
							showPitchshiftLayer: "pitchshift" === l,
							tuning: $,
							layer: l,
							tabEditorData: p.data,
							tabEditorActive: d.hasEditor,
							setTabEditor: this.setTabEditor,
							fingerings: h.shown && h.trackFingering,
							device: u,
							isLoggedIn: t.isLoggedIn,
							videoIsReady: L,
							videoIsOpened: a.videoOpened,
						},
						n.lines.hash
					)
			),
			k &&
				e4(ShowroomBottom, {
					key: `bottom-showroom-${o.songId}-${n.current.partId}`,
				}),
			T && e4(tS, { withAds: S, device: u, copyright: !0 })
		);
	}
}
var AppTab$1 = t(
	AppTab,
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
	"tabEditor",
	"fingerings",
	"playAlongAd"
);
export { AppTab$1 as default };
