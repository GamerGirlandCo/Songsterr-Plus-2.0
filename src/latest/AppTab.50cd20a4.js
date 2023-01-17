let updateTimer, isMobileOs;
import {
	P as e,
	t as t,
	v as a,
	w as i,
	x as o,
	y as s,
	z as n,
	B as r,
	D as l,
	E as u,
	i as d,
	A as p,
	F as h,
	u as c,
	G as m,
	H as f,
	J as g,
	K as y,
	M as _,
	N as v,
	O as b,
	f as $,
	Q as x,
	R as w,
	L as T,
	j as C,
	d as S,
	U as k,
	V as M,
	T as P,
	C as L,
	W as N,
	X as E,
	_ as B,
	Y as A,
	Z as R,
	$ as D,
	a0 as I,
	a1 as O,
	a2 as F,
	a3 as H,
	a4 as z,
	b as j,
	a5 as V,
	a6 as X,
	p as U,
	a7 as q,
	a8 as G,
	a9 as Y,
	aa as W,
	ab as K,
	ac as J,
	ad as Z,
	ae as Q,
	af as ee,
	ag as et,
	ah as ea,
	ai as ei,
	aj as eo,
	ak as en,
	al as er,
	am as el,
	an as eu,
	ao as ed,
	ap as ep,
	aq as eh,
	ar as ec,
	as as em,
	at as ef,
	au as eg,
	av as ey,
	aw as e_,
	ax as ev,
	ay as eb,
	az as e$,
	aA as ex,
	aB as ew,
	aC as eT,
	aD as eC,
	aE as eS,
	aF as ek,
	aG as eM,
	aH as eP,
	aI as eL,
	aJ as eN,
	aK as eE,
	aL as eB,
	aM as eA,
	aN as eR,
	aO as eD,
	aP as eI,
	aQ as eO,
	aR as eF,
	aS as eH,
	aT as ez,
	aU as ej,
	aV as eV,
	aW as eX,
	aX as eU,
	c as eq,
} from "./index.9148933a.js";
import {
	d as eG,
	a as eY,
	T as eW,
	c as eK,
	_ as eJ,
	p as eZ,
	R as eQ,
	e as e1,
	B as e2,
	h as e0,
	F as e5,
	j as e3,
	o as e4,
} from "./preact.3d326435.js";
import {
	y as e8,
	z as e7,
	M as e6,
	A as e9,
	B as te,
	C as tt,
	d as ta,
	s as ti,
	U as to,
	w as ts,
	D as tn,
} from "./audio.1ae45449.js";
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
} from "./Capo.e7322fcb.js";
import { g as ty, a as t_ } from "./gplay.79326319.js";
import { I as tv, _ as tb } from "./Input.bee63c02.js";
import { A as t$ } from "./ActionButton.02df805a.js";
import { t as tx, a as tw } from "./UploadRevisionForm.module.39ceed63.js";
import {
	N as tT,
	a as tC,
	A as tS,
	L as tk,
	S as tM,
} from "./AppFooter.3676e584.js";
import { S as tP } from "./SWW.1ac5d8c8.js";
import "./env.1ef38fce.js";
class MixerButton extends eG {
	render() {
		let {
				onClick: t,
				pressed: a,
				title: i,
				titlePressed: o,
				name: s,
				instrumentId: n,
			} = this.props,
			r = "mixer-title-id";
		return eY(
			"button",
			{
				className: a ? tr.active : tr.button,
				onClick: t,
				id: "control-mixer",
				"aria-haspopup": !0,
				"aria-pressed": a,
			},
			eY(
				"svg",
				{
					className: tr.icon,
					width: 55,
					height: 55,
					viewBox: "-4 -4 55 55",
					role: "img",
					"aria-labelledby": r,
				},
				eY("title", { id: r }, a && o ? o : i),
				eY("circle", { className: tr.tag, cx: "7", cy: "39", r: "6" }),
				eY("circle", {
					className: tr.circle,
					cx: "22.5",
					cy: "22.5",
					r: "22.5",
					filter: "url(#svg_shadow)",
				}),
				eY(e, {
					className: tr.shape,
					instrumentId: n,
					name: s,
					transform: "translate(9 9)",
				})
			)
		);
	}
}
let speed = "tl2yt",
	pane = "tl35",
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
	__default$M = {
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
class Speed extends eG {
	constructor(e) {
		super(e);
		let t = e.player.speed,
			o = a(t, e.tempo.tempo);
		(this.state = {
			speed: t,
			tempo: o,
			position: i(t),
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
				o = a(t, e.tempo.tempo);
			return {
				speed: t,
				tempo: o,
				position: i(t),
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
			a = this.ruler;
		if (a && e && t) {
			let i = a.getBoundingClientRect(),
				o = i.left + e.scrollLeft + t.scrollLeft,
				s = i.top + e.scrollTop + t.scrollTop,
				n = i.width;
			return { rulerX: o, rulerY: s, rulerW: n };
		}
		throw Error("Wrong Usage");
	};
	onResize = e8(() => this.setState(this.getPageCoordinates), 250);
	getNewPosition(e) {
		let t = o((100 * e.x) / e.w);
		return s(t, this.props.tempo.tempo);
	}
	handleFaster = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => n(e.speed, e.tempo, e.position, this.props.tempo.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	handleSlower = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => r(e.speed, e.tempo, e.position, this.props.tempo.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	dispatchSpeed = (e) => {
		l(this.props.store, e);
	};
	getTouchPoint(e) {
		let { rulerX: t, rulerY: a, rulerW: i } = this.state;
		if (null === t || null === a || null === i) {
			let e = this.getPageCoordinates();
			this.setState(e), (t = e.rulerX), (a = e.rulerY), (i = e.rulerW);
		}
		let o = e.changedTouches ? e.changedTouches[0] : e;
		return { x: Math.max(Math.min(o.pageX - t, i), 0), w: i, y: o.pageY - a };
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
			let a = this.getNewPosition(t);
			this.setState(a), (e = a.speed);
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
			(t) => u(t.speed, t.tempo, t.position, this.props.tempo.tempo, e),
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
				100 === this.state.speed ? __default$M.buttonAlt : __default$M.button,
			t = 100 === this.state.speed ? __default$M.bpmOriginal : __default$M.bpm;
		return eY(
			"div",
			{ className: __default$M.speed, role: "dialog", "aria-label": "Speed" },
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
					{ className: __default$M.speedLabel, "aria-label": "Tempo" },
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
					className: __default$M.pane,
					title: "You can use arrow keys",
					ref: this.refWrap,
				},
				eY(
					"label",
					{ className: __default$M.caption25 },
					eY("span", null, "25%")
				),
				eY(
					"label",
					{ className: __default$M.caption50 },
					eY("span", null, "50%")
				),
				eY(
					"label",
					{ className: __default$M.caption75 },
					eY("span", null, "75%")
				),
				eY(
					"label",
					{ className: __default$M.caption100 },
					eY("span", null, "100%")
				),
				eY(
					"label",
					{ className: __default$M.caption125 },
					eY("span", null, "125%")
				),
				eY(
					"label",
					{ className: __default$M.caption150 },
					eY("span", null, "150%")
				),
				eY(
					"label",
					{ className: __default$M.caption175 },
					eY("span", null, "175%")
				),
				eY(
					"div",
					{ className: __default$M.ruler, ref: this.refRuler },
					eY(
						"div",
						{
							className: __default$M.handle,
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
	__default$L = {
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
			mobile: a,
			low: i,
			leftOffset: o,
			topOffset: s,
			horizontal: n,
			device: r,
			feature: l,
		} = e,
		u = __default$L.popupRight;
	a
		? (u = i ? __default$L.popupMobileLow : __default$L.popupMobile)
		: n && (u = __default$L.popupTop);
	let h = {};
	void 0 !== o &&
		void 0 !== s &&
		((h = { top: `${s}px`, left: `${o}px` }), (u = __default$L.popupLeftTop));
	let c = "subscribe in the app";
	d(r.os) && (c = "buy in the app");
	let m = `${t} ${c}`,
		f = d(r.os);
	return eY(
		"div",
		{ role: "dialog", className: u, style: h },
		(function (e, t, a) {
			for (
				var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
				s < i;
				s++
			)
				o[s - 3] = arguments[s];
			return eY(
				p,
				{
					source: "popup",
					attrs: { className: e, "aria-label": t },
					eventProperties: {
						Via: "feature popup",
						"App store": a ? "Google Play" : "App Store",
						Feature: l,
					},
				},
				o
			);
		})(
			__default$L.link,
			m,
			f,
			eY(
				"div",
				null,
				eY("div", { className: __default$L.title }, t),
				eY("div", { className: __default$L.text }, c)
			),
			f
				? eY("img", { src: ty, width: 160, height: 47, alt: "Google Play" })
				: eY("img", { src: t_, width: 160, height: 53, alt: "AppStore" })
		)
	);
}
function IconStubPopup() {
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
let horizontalPopup = h + " B0fs1",
	verticalPopup = h + " B0f277",
	verticalLeftPopup = h + " B0f2nd",
	link = "B0f1ah",
	basewrapper = "B0fqg",
	wrapper = "B0fqg B0f176",
	text$8 = "B0f102",
	linkText = "B0f2sz",
	__default$K = {
		horizontalPopup: h + " B0fs1",
		verticalPopup: h + " B0f277",
		verticalLeftPopup: h + " B0f2nd",
		link: "B0f1ah",
		basewrapper: "B0fqg",
		wrapper: "B0fqg B0f176",
		text: "B0f102",
		linkText: "B0f2sz",
	};
function getClassName(e, t) {
	return e
		? __default$K.horizontalPopup
		: t
		? __default$K.verticalLeftPopup
		: __default$K.verticalPopup;
}
function StubPopup(e) {
	let { title: t, left: a, horizontal: i } = e,
		{ dispatch: o } = c(),
		s = eW(() => {
			o("layer/hide");
		}, [o]);
	return eY(
		"div",
		{ className: getClassName(i, a), role: "dialog" },
		eY(
			"div",
			{
				className: __default$K.link,
				"aria-label": `${t} mode has no effect`,
				onClick: s,
			},
			eY("span", { className: __default$K.wrapper }, eY(IconStubPopup, null)),
			eY(
				"div",
				{ className: __default$K.text },
				"This song has only one",
				eY("br", null),
				`instrument track. ${t}`,
				eY("br", null),
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
	__default$J = {
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
		eY("path", {
			d: "M37 22.04v5.92a.5.5 0 0 0 .812.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.5.5 0 0 0-.812.39Z",
		}),
	ArrowRight = () =>
		eY("path", {
			d: "M10 22.04v5.92a.5.5 0 0 1-.812.39l-3.7-2.96a.5.5 0 0 1 0-.78l3.7-2.96a.5.5 0 0 1 .812.39Z",
		}),
	ArrowDown = (e) =>
		eY("path", {
			d: "M26.13 22h-5.26a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508a.5.5 0 0 0-.433-.752Z",
			...e,
		}),
	ArrowUp = (e) =>
		eY("path", {
			d: "M26.13 10h-5.26a.5.5 0 0 1-.431-.752l2.63-4.508a.5.5 0 0 1 .863 0l2.63 4.508a.5.5 0 0 1-.433.752Z",
			...e,
		}),
	EditorHelp = () =>
		eY(
			eK,
			null,
			eY(
				"div",
				{ className: __default$J.editorHelp },
				eY(
					"div",
					null,
					eY("div", { className: __default$J.title }, "Click a note to edit."),
					eY(
						"div",
						{ className: __default$J.part },
						eY("p", null, "Navigate with"),
						eY(
							"div",
							{ className: __default$J.shortcut },
							eY(
								"svg",
								{ className: __default$J.navigation, width: 47, height: 33 },
								eY("rect", { x: 16 }),
								eY("rect", { x: 16, y: 17 }),
								eY("rect", { x: 32, y: 17 }),
								eY("rect", { y: 17 }),
								eY(ArrowUp, null),
								eY(ArrowLeft, null),
								eY(ArrowRight, null),
								eY(ArrowDown, null)
							)
						)
					),
					eY("div", { className: __default$J.delimiter }),
					eY(
						"div",
						{ className: __default$J.part },
						eY("p", null, "Edit with"),
						eY(
							"div",
							{ className: __default$J.shortcut },
							eY(
								"svg",
								{ className: __default$J.digits, width: 47, height: 33 },
								eY("rect", { className: __default$J.rect, x: 32 }),
								eY("rect", { className: __default$J.rect }),
								eY("rect", { x: 20, y: 7, height: 2, width: 7 }),
								eY("rect", { className: __default$J.rect, y: 17 }),
								eY("rect", { rx: 1, x: 16, y: 17, width: 31, height: 16 }),
								eY("text", { x: 3, y: 12 }, 0),
								eY("text", { x: 35, y: 12 }, 9),
								eY("text", { x: 3, y: 29 }, "X"),
								eY("path", {
									fill: "#4B5059",
									transform: "translate(30, 20)",
									d: "M13 1.5c0-.827-.648-1.5-1.444-1.5H4.634C4.25 0 3.882.157 3.61.438L.212 3.97a.763.763 0 0 0 0 1.06l3.4 3.532c.27.281.638.438 1.022.438h6.922C12.352 9 13 8.327 13 7.5v-6ZM6.116 2.602a.525.525 0 0 1 .765 0l1.061 1.101 1.061-1.101a.525.525 0 0 1 .765 0c.21.22.212.576 0 .794l-1.06 1.102 1.06 1.101a.575.575 0 0 1 0 .795.527.527 0 0 1-.765 0l-1.06-1.102L6.88 6.394a.525.525 0 0 1-.765 0 .578.578 0 0 1 0-.795l1.061-1.101-1.06-1.102a.575.575 0 0 1 0-.794Z",
								})
							)
						)
					),
					eY(
						eK,
						null,
						eY("div", { className: __default$J.delimiter }),
						eY(
							"div",
							{ className: __default$J.part },
							eY("p", null, "Move a note by dragging or"),
							eY(
								"div",
								{ className: __default$J.shortcut },
								eY(
									"svg",
									{ className: __default$J.move, width: 67, height: 33 },
									eY("rect", { className: __default$J.rect, x: 52 }),
									eY("rect", { className: __default$J.rect, x: 52, y: 17 }),
									eY("rect", { rx: 1, y: 8, height: 17, width: 49 }),
									eY("text", { x: 3, y: 21 }, "Shift"),
									eY("text", { x: 38, y: 20 }, "+"),
									eY(ArrowDown, { transform: "translate(36,0)" }),
									eY(ArrowUp, { transform: "translate(36,0)" })
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
	__default$I = {
		hint: "J11oq",
		hint0: "J11oq J11sb",
		hint1: "J11oq J11iw",
		hint2: "J11oq J11tq",
	},
	PrivateEditsHint = (e) => {
		let { className: t = __default$I.hint } = e;
		return eY(
			"div",
			{ className: t },
			eY(
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
	__default$H = {
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
			a = "No changes yet";
		return (
			"changes" === t || "saving" === t
				? (a = "Saving...")
				: "saved" === t && (a = "All changes saved privately"),
			eY(
				"div",
				{ style: { width: "100%" } },
				eY("div", { className: __default$H.divider }),
				eY(
					"div",
					{
						className: __default$H.hintBold,
						style: { padding: "4px 0px 3px" },
					},
					a
				)
			)
		);
	},
	RevisionsLink = (e) => {
		let { dispatch: t, children: a } = e;
		return eY(
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
			a
		);
	};
var RevisionsLink$1 = t(RevisionsLink);
let form = "Cwrup",
	textarea = tx + " Cwr3f",
	actions = tw + " Cwr1dr",
	cancel = m + " Cwr1fo",
	hint$1 = "Cwr32t",
	error$1 = "Cwr2p4",
	title$1 = f + " Cwr109",
	content = g + " Cwr1pn",
	__default$G = {
		form: "Cwrup",
		textarea: tx + " Cwr3f",
		actions: tw + " Cwr1dr",
		cancel: m + " Cwr1fo",
		hint: "Cwr32t",
		error: "Cwr2p4",
		title: f + " Cwr109",
		content: g + " Cwr1pn",
	},
	RevisionForm = (e) => {
		let { onCancel: t, onSubmit: a } = e,
			i = eJ(),
			[o, s] = eZ(!1),
			[n, r] = eZ(null),
			[l, u] = eZ(null),
			d = async (e) => {
				e.preventDefault(), s(!0);
				try {
					_([{ field: i.current, validator: v }]),
						await a({ summary: i.current.value }),
						u(null);
				} catch (e) {
					e instanceof e7 ? u(e) : r(e);
				}
				s(!1);
			},
			p = !n?.reasons?.summary;
		return eY(
			"form",
			{ className: __default$G.form, onSubmit: d },
			eY(y, { styles: __default$G, error: p && n }),
			eY(tv, {
				ref: i,
				name: "summary",
				type: "textarea",
				error: n,
				placeholder: "Briefly explain your changes",
				styles: __default$G,
				errorStyles: __default$G,
				popup: !0,
			}),
			eY(
				"div",
				{ className: __default$G.actions },
				eY("a", { className: __default$G.cancel, onClick: t }, "Cancel"),
				eY(t$, {
					id: l ? "submitRevisionButtonWarning" : "submitRevisionButton",
					title: "Submit a public revision",
					processing: o,
				})
			),
			eY(
				"p",
				{ className: __default$G.hint, style: { textAlign: "justify" } },
				[
					"Once audio rendering is complete, we'll send you an email, and your revision will appear on site for other users to enjoy. You can also submit more complex changes via ",
					eY(RevisionsLink$1, null, "Guitar Pro tab"),
					".",
				]
			)
		);
	},
	SubmitRevision = (e) => {
		let { showForm: t, onToggleForm: a, onSubmitted: i } = e,
			{ dispatch: o, meta: s, part: n } = c("meta", "part"),
			r = eW(
				async (e) => {
					let t = await b({
						...e,
						songId: s.songId,
						revision: s.revisionId || n.revisionId,
					});
					o("layer/hide"), o("upload/revision:merged", t), i();
				},
				[o, s, n]
			);
		return t
			? eY(RevisionForm, { onCancel: a, onSubmit: r })
			: eY(
					"div",
					null,
					eY(
						"button",
						{
							className: $.popupButtonGreen,
							style: { marginBottom: 15 },
							onClick: a,
						},
						"Submit a public revision"
					),
					eY(PrivateEditsHint, { className: __default$H.hintNoMargin })
			  );
	};
var SubmitRevision$1 = t(SubmitRevision);
let SignInLink = (e) => {
	let { dispatch: t, children: a } = e;
	return eY(
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
		a
	);
};
var SignInLink$1 = t(SignInLink);
class EditorPopup extends eG {
	constructor() {
		super();
		let e = x("v2");
		e || w("v2"), (this.state = { helpActive: !e, showForm: !1 });
	}
	helpToggle = () => {
		let { helpActive: e } = this.state;
		this.setState({ helpActive: !e });
	};
	toggleForm = () => {
		let { dispatch: e } = this.props;
		this.setState((t) => {
			let { showForm: a } = t;
			return (
				a || e("curiosity/event", { event: "Clicked Submit editor revision" }),
				{ showForm: !a }
			);
		});
	};
	onSubmitted = () => {
		this.setState({ showForm: !1 });
	};
	render() {
		let { tabEditor: e, user: t } = this.props,
			{ helpActive: a, showForm: i } = this.state,
			o = a ? __default$H.popupExtended : __default$H.popup,
			s = i ? `${o} ${__default$H.reposition}` : o;
		return eY(
			"div",
			{ className: s },
			eY(
				"div",
				{ className: __default$H.popupInner },
				eY(
					"div",
					{
						className: a ? __default$H.helpTagActive : __default$H.helpTag,
						onClick: this.helpToggle,
					},
					eY("span", null, "?")
				),
				a && eY(EditorHelp, null),
				eY(
					"div",
					{ className: __default$H.mainContainer },
					eY(
						"div",
						null,
						eY("h3", {}, "TAB editor"),
						!t.isLoggedIn &&
							eY(
								"div",
								{ className: __default$H.hintBigger, style: { marginTop: 0 } },
								eY(SignInLink$1, null, "Sign up"),
								" for free to submit a public revision or to save changes privately."
							),
						!t.isLoggedIn &&
							eY(PrivateEditsHint, {
								className: t.isLoggedIn
									? __default$H.hint
									: __default$H.hintBigger,
							}),
						t.isLoggedIn &&
							eY(SubmitRevision$1, {
								showForm: i,
								onToggleForm: this.toggleForm,
								onSubmitted: this.onSubmitted,
							})
					),
					t.isLoggedIn && eY(EditorFooter, { status: e.status })
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
	__default$F = {
		popup: "Cjoe6",
		popupWarning: "Cjoe6 Cjo2q1",
		warning: "Cjo186",
		hint: "Cjo1a2",
		helpTag: "Cjoi2",
		beta: "Cjo1pw",
	};
function HandPopup(e) {
	let { dispatch: t } = c();
	if ("In Progress" === e.status || "Error" === e.status)
		return eY(
			"div",
			{ className: __default$F.popupWarning },
			eY(
				"p",
				{ className: __default$F.warning },
				"In Progress" === e.status &&
					"Seems like fingerings generation for this track is in progress right now. Try again later.",
				"Error" === e.status &&
					"Failed to generate fingerings. We are working on a fix."
			)
		);
	let a = eW(
		() =>
			t("curiosity/event", { event: "Clicked open Beta fingerings article" }),
		[t]
	);
	return eY(
		"div",
		{ className: __default$F.popup },
		eY(
			T,
			{ to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: a },
			eY("div", { className: __default$F.helpTag }, eY("span", null, "?"))
		),
		eY("p", { className: __default$F.hint }, "Left hand"),
		eY("img", {
			src: handIcon,
			width: 76.6,
			height: 100.1,
			alt: "Fingerging hint",
		}),
		eY("span", { className: __default$F.beta }, "beta")
	);
}
let popup = "C0w33s",
	button$3 = "C0w3a",
	path$6 = "C0w1ij",
	activeButton = "C0w3a C0w13m",
	disabledButton$1 = "C0w3a C0w2bp",
	spacer = "C0wz2",
	__default$E = {
		popup: "C0w33s",
		button: "C0w3a",
		path: "C0w1ij",
		activeButton: "C0w3a C0w13m",
		disabledButton: "C0w3a C0w2bp",
		spacer: "C0wz2",
	};
class MetronomePopup extends eG {
	render() {
		let { dispatch: e } = this.props,
			{ metronomeType: t, voiceMetronomeAvailable: a } = this.props.player,
			i = "regular" === t ? __default$E.activeButton : __default$E.button,
			o = {};
		return (
			a
				? ((o.className =
						"voice" === t ? __default$E.activeButton : __default$E.button),
				  (o.onClick = () => e("player/changeMetronome:init", "voice")))
				: ((o.className = __default$E.disabledButton),
				  (o.disabled = !0),
				  (o.title = "Voice metronome is unavailable on this song")),
			eY(
				"div",
				{ className: __default$E.popup },
				eY(
					"button",
					{
						className: i,
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
						eY("path", { d: tu })
					),
					eY("p", null, "tick tock")
				),
				eY("div", { className: __default$E.spacer }),
				eY(
					"button",
					o,
					eY(
						"svg",
						{ width: 34, height: 32, viewBox: "0 0 34 28" },
						eY("use", { xlinkHref: `${tl}#icon`, className: __default$E.path })
					),
					eY("p", null, "one two")
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
let animationProps$2 = { animationStyles: B };
class Controls extends eG {
	componentDidUpdate() {
		let { usedDrums: e, fingeringsOnActivate: t } = this.props;
		e || t();
	}
	render() {
		let { gettext: e } = C(locales),
			{
				device: t,
				plusAccess: a,
				layer: i,
				tadEditorWarning: o,
				speed: s,
				fingeringsEnabled: n,
				fingeringsActive: r,
				fingeringsStatus: l,
				usedDrums: u,
				videoIsOpened: p,
				metronomeType: h,
			} = this.props,
			c = d(t.os) || S(t.os) || k(t),
			m = "mixer" === i,
			f = "speed" === i,
			g = i === A,
			y = "tab_editor" === i,
			_ = "Loading" === l,
			v = "solo" === this.props.type && !p,
			b = "mute" === this.props.type && !p,
			$ = this.props.loop,
			x = this.props.isCountin && !p,
			w = this.props.isMetronome && !p,
			T = `${Math.round(s)}%`,
			B = !a,
			R = !a,
			D = td.panePlus2;
		return (
			u ? (D = td.panePlus2Secondary) : n && (D = td.panePlus3),
			eY(
				"aside",
				{ id: "controls", className: D, "data-controls": "tablature" },
				eY("div", { className: td.handler }),
				eY(
					"div",
					{ className: td.centerGroup },
					eY(
						"div",
						{ className: td.item },
						eY(tp, {
							shouldPlay: this.props.shouldPlay,
							canPlay: this.props.canPlay,
							onClick: this.props.handlePlay,
							title: e("Play (Space)"),
							titlePressed: e("Pause (Space)"),
						})
					),
					eY(
						"div",
						{ className: td.item, id: "mixer-button" },
						eY(MixerButton, {
							pressed: m,
							onClick: this.props.handleMixer,
							title: e("Show tracks (T)"),
							titlePressed: e("Hide tracks (T)"),
							instrumentId: this.props.track
								? this.props.track.instrumentId
								: M,
							name: this.props.track ? this.props.track.name : "",
						}),
						eY(P, null, m && eY(L, animationProps$2, eY(N, null)))
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `speed ${f}`,
							icon: "speed",
							text: T,
							pressed: f,
							onClick: this.props.handleSpeed,
							title: e(
								"Open speed panel (S). Change tempo: (Alt+1ΓÇô7) for 25%ΓÇô175%, (Alt+S/A) for 1 bpm change"
							),
							hasPopup: !0,
							lock: R,
						}),
						eY(
							P,
							null,
							"plus_speed" === i &&
								eY(
									L,
									{ ...animationProps$2, key: "popup" },
									c
										? eY(AppPopup, {
												title: e("Tempo Control"),
												device: t,
												horizontal: !0,
												feature: "slowdown",
										  })
										: eY(tc, {
												title: e("Tempo Control"),
												horizontal: !0,
												classPrefix: "speed",
										  })
								),
							f &&
								eY(L, { ...animationProps$2, key: "layer" }, eY(Speed$1, null))
						)
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `loop ${$}`,
							icon: "loop",
							pressed: $,
							onClick: this.props.handleLoop,
							title: e("Turn loop mode on (L)"),
							titlePressed: e("Turn loop mode off (L)"),
							hasPopup: B,
							lock: R,
						}),
						eY(
							P,
							null,
							"plus_loop" === i &&
								eY(
									L,
									animationProps$2,
									c
										? eY(AppPopup, {
												title: e("Loop Mode"),
												device: t,
												horizontal: !0,
												feature: "loop",
										  })
										: eY(tc, {
												title: e("Loop Mode"),
												horizontal: !0,
												classPrefix: "loop",
										  })
								)
						)
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `solo ${v}`,
							icon: "solo",
							disabled: p,
							pressed: v,
							onClick: this.props.handleSolo,
							title: e("Play current track solo (F)"),
							titlePressed: e("Play focus mix of all tracks (F)"),
							hasPopup: B,
							lock: R,
						}),
						eY(
							P,
							null,
							"plus_solo" === i &&
								!p &&
								eY(
									L,
									animationProps$2,
									c
										? eY(AppPopup, {
												title: e("Solo Mode"),
												device: t,
												horizontal: !0,
												feature: "solo",
										  })
										: eY(tc, {
												title: e("Solo Mode"),
												horizontal: !0,
												classPrefix: "solo",
										  })
								),
							"solo_single" === i &&
								!p &&
								eY(
									L,
									animationProps$2,
									eY(StubPopup, { title: e("Solo"), horizontal: !0 })
								)
						)
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `mute ${b}`,
							icon: "mute",
							disabled: p,
							pressed: b,
							onClick: this.props.handleMute,
							title: e("Mute current track (M)"),
							titlePressed: e("Unmute current track (M)"),
							hasPopup: B,
							lock: R,
						}),
						eY(
							P,
							null,
							"plus_mute" === i &&
								!p &&
								eY(
									L,
									animationProps$2,
									c
										? eY(AppPopup, {
												title: e("Mute Mode"),
												device: t,
												horizontal: !0,
												feature: "mute",
										  })
										: eY(tc, {
												title: e("Mute Mode"),
												horizontal: !0,
												classPrefix: "mute",
										  })
								)
						)
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `countin ${x}`,
							icon: "countin",
							disabled: p,
							pressed: x,
							onClick: this.props.handleCountin,
							title: e("Turn count-in mode on (C)"),
							titlePressed: e("Turn count-in mode off (C)"),
						})
					),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: `metronome ${w}`,
							icon: "voice" === h ? "voice" : "metronome",
							disabled: p,
							pressed: w,
							onClick: this.props.handleMetronome,
							title: e("Turn metronome on (N)"),
							titlePressed: e("Turn metronome off (N)"),
						}),
						eY(
							P,
							null,
							!p &&
								"metronome" === i &&
								eY(
									L,
									{ ...animationProps$2, key: "layer" },
									eY(MetronomePopup$1, null)
								)
						)
					),
					!u &&
						eY(
							"div",
							{ className: td.item },
							eY(th, {
								key: `editor ${y} ${o}`,
								icon: "editor",
								pressed: y,
								onClick: this.props.handleTabEditor,
								title: e("Turn tab editor on (E)"),
								titlePressed: e("Turn tab editor off (E)"),
								warning: o,
							}),
							y &&
								eY(
									L,
									{ ...animationProps$2, key: "tab-editor" },
									eY(EditorPopup$1, null)
								)
						),
					n &&
						!u &&
						eY(
							"div",
							{ className: td.item },
							eY(th, {
								key: `fingerings ${_} ${r}`,
								loading: _,
								icon: "fingerings",
								pressed: r,
								onClick: this.props.handleFingerings,
								title: e("Generate guitar fingerings (G)"),
								titlePressed: e("Turn fingerings off (G)"),
							}),
							eY(
								P,
								null,
								r &&
									"Loading" !== l &&
									"tab_editor" !== i &&
									eY(L, animationProps$2, eY(HandPopup, { status: l }))
							)
						),
					eY(
						"div",
						{ className: td.item },
						eY(th, {
							key: "print",
							icon: "print",
							onClick: this.props.handlePrint,
							title: "Print (P)",
							lock: R,
						}),
						eY(
							P,
							null,
							"plus_print" === i &&
								eY(
									L,
									animationProps$2,
									eY(tc, {
										title: e("Printing"),
										horizontal: !0,
										classPrefix: "print",
									})
								)
						)
					),
					eY(
						"div",
						{ className: td.secondaryControls },
						eY(
							"div",
							{ className: u ? td.itemSmall : td.itemSmallHidden },
							eY(th, {
								key: `help ${g}`,
								icon: "help",
								pressed: g,
								onClick: this.props.handleNotation,
								title: e("Show drum notation"),
								titlePressed: e("Hide drum notation"),
							}),
							u && eY(E, { usedDrums: u, horizontal: !0 })
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
	return eY(
		"svg",
		{ width: "44", height: "46", role: "img" },
		eY("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
		eY("path", {
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
		(F(e.current.instrumentId) || H(e.current.instrumentId)) &&
		e.current.tuning;
class PitchShift extends eG {
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
		let { player: e, ensureLineVisibility: t, part: a } = this.props;
		if (t && a.current) {
			let i = R(a.current, e.audio.getCursor(), "left");
			i && t(null, i.measureLayout.lineLayout, !1);
		}
	}
	tuneUp = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t < 12 && D(this.props.store, t + 1);
	};
	tuneDown = (e) => {
		e.preventDefault();
		let { pitchShift: t } = this.props.player;
		t > -12 && D(this.props.store, t - 1);
	};
	reset = (e) => {
		e.preventDefault(), D(this.props.store, 0);
	};
	renderCurrentTuning = () => {
		if (isRetunable(this.props.part)) {
			let e = this.props.part.current.tuning.map(
				(e) => e + this.props.player.pitchShift
			);
			return eY(
				"div",
				{
					className: __default$D.currentTuning,
					"aria-label": "Current tuning",
				},
				eY(
					"div",
					{ className: __default$D.currentTuningHeader },
					"CURRENT TUNING"
				),
				eY("div", { id: "tuning", className: __default$D.tuningString }, I(e))
			);
		}
		return null;
	};
	renderQuickButton = () => {
		if (0 !== this.props.player.pitchShift)
			return eY(
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
			let e = O(
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
							className: __default$D.quickButton,
							role: "button",
							"aria-label": "Quick shift pitch",
							onClick: () => {
								D(this.props.store, e.pitch);
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
			{ pitchShift: a } = this.props.player,
			{ tab: i, tuningButton: o, mobile: s } = this.props,
			n = 0,
			r = 0,
			l = __default$D.pitchshift;
		if (s) (n = -71), (r = -235), (l = __default$D.pitchshiftMobile);
		else if (((n = this.props.firstLineLayoutHeight - 58), (r = 55), i && o)) {
			let e = i.getBoundingClientRect(),
				t = o.getBoundingClientRect();
			(r = t.left - e.left + t.width + 21),
				(n = t.top + t.height - e.top - 77.5);
		}
		return eY(
			"div",
			{
				className: l,
				title: "You can use arrow keys",
				role: "dialog",
				"aria-label": "Shift Pitch",
				"data-tab-control": "pitch",
				style: { top: `${n}px`, left: `${r}px` },
			},
			t || eY("div", { className: __default$D.currentTuningFiller }),
			eY(
				"div",
				{ className: __default$D.tuneControls },
				eY(
					"button",
					{
						className: __default$D.updown,
						onClick: this.tuneDown,
						disabled: a <= -12,
						"aria-label": "Step down",
					},
					eY(PitchShiftUpDownIcon, { up: !1 })
				),
				eY(
					"span",
					{
						className: __default$D.currentPitch,
						"aria-label": "Current pitch",
					},
					(a > 0 ? "+" : "") + a
				),
				eY(
					"button",
					{
						className: __default$D.updown,
						onClick: this.tuneUp,
						disabled: a >= 12,
						"aria-label": "Step up",
					},
					eY(PitchShiftUpDownIcon, { up: !0 })
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
class MobileSpeed extends eG {
	constructor() {
		super(), (this.state = { mode: "percent" });
	}
	tuneUp = (e) => {
		let t, a;
		e.preventDefault();
		let { store: i, player: o, tempo: s } = this.props,
			{ mode: n } = this.state;
		"percent" === n
			? ((t = 10), (a = Math.floor(o.speed / t) * t + t))
			: ((t = +(100 / s.tempo.bpm).toFixed(2)), (a = o.speed + t)),
			a <= 170 && a >= 30 && l(i, a);
	};
	tuneDown = (e) => {
		let t, a;
		e.preventDefault();
		let { store: i, player: o, tempo: s } = this.props,
			{ mode: n } = this.state;
		"percent" === n
			? ((t = 10), (a = Math.floor(o.speed / t) * t - t))
			: ((t = +(100 / s.tempo.bpm).toFixed(2)), (a = o.speed - t)),
			a <= 170 && a >= 30 && l(i, a);
	};
	switchMode = () => {
		let { mode: e } = this.state;
		this.setState({ mode: "percent" === e ? "bpm" : "percent" });
	};
	render() {
		let e, t;
		let { tempo: i } = this.props,
			{ speed: o } = this.props.player,
			{ mode: s } = this.state,
			n = a(o, i.tempo),
			r = Math.round(o),
			l = __default$C.disabled,
			u =
				"percent" === s
					? 10 * Math.floor(o / 10) - 10
					: o - +(100 / i.tempo.bpm).toFixed(2);
		u >= 30 && ((l = __default$C.button), (e = this.tuneDown));
		let d = __default$C.disabled,
			p =
				"percent" === s
					? 10 * Math.floor(o / 10) + 10
					: o + +(100 / i.tempo.bpm).toFixed(2);
		return (
			p <= 170 && ((d = __default$C.button), (t = this.tuneUp)),
			eY(
				"div",
				{
					className: __default$C.mobileSpeed,
					role: "dialog",
					"aria-label": "Speed",
				},
				eY(
					"p",
					{ className: __default$C.secondary },
					"percent" === s ? `${n.bpm} bpm` : `${r}%`
				),
				eY(
					"div",
					{ className: __default$C.controls },
					eY(
						"button",
						{ className: l, onClick: e },
						eY(PitchShiftUpDownIcon, { up: !1 })
					),
					eY(
						"div",
						{ className: __default$C.value },
						eY("p", null, "percent" === s ? `${r}%` : n.bpm),
						"bpm" === s && eY("span", null, "bpm")
					),
					eY(
						"button",
						{ className: d, onClick: t },
						eY(PitchShiftUpDownIcon, { up: !0 })
					)
				),
				eY(
					"button",
					{ className: __default$C.switch, onClick: this.switchMode },
					`Switch to ${"percent" === s ? "bpm" : "%"}`
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
	animationProps$1 = { animationStyles: j };
class MobileControls extends eG {
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
				shouldPlay: a,
				canPlay: i,
				pitchShift: o,
				pitchShiftAvailable: s,
				speed: n,
				fingeringsStatus: r,
				fingeringsActive: l,
				fingeringsEnabled: u,
				usedDrums: p,
				metronomeType: h,
			} = this.props,
			{ minimized: c, overflowVisible: m } = this.state,
			f = "speed" === t,
			g = "pitchshift" === t,
			y = "Loading" === r,
			_ = u && !p,
			v = "solo" === this.props.type,
			b = "mute" === this.props.type,
			$ = this.props.speed !== z || f,
			x = this.props.loop,
			w = this.props.isCountin,
			T = this.props.isMetronome,
			C = !this.props.plusAccess,
			k = !this.props.plusAccess,
			M = d(e.os) || S(e.os),
			N = { height: `${414 + 57 * (s ? 1 : 0) + 57 * (_ ? 1 : 0)}px` },
			E = __default$B.features;
		c ? (N.height = "71px") : m && (E = __default$B.featuresActive);
		let B = `${Math.round(n)}%`;
		return eY(
			"footer",
			{ className: __default$B.controls, "data-controls": "tablature" },
			eY(
				"svg",
				{ width: 0, height: 0 },
				eY("defs", null, eY(tm, {}), eY(tf, {}))
			),
			eY(
				"div",
				{ className: __default$B.alt, id: "alt-controls" },
				eY(tp, {
					shouldPlay: a,
					canPlay: i,
					onClick: this.props.handlePlay,
					title: "Play",
					hideDefs: !0,
				})
			),
			eY(
				"div",
				{ className: __default$B.float, id: "mobile-controls" },
				eY(
					"div",
					{ className: E, style: N },
					eY(
						"div",
						{ className: __default$B.minimize },
						eY(th, {
							mobile: !0,
							icon: c ? "arrow" : "arrow-down",
							pressed: !1,
							onClick: this.minimizeClick,
							title: "Minimize",
							titlePressed: "Minimize",
						})
					),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							mobile: !0,
							icon: "speed",
							text: B,
							pressed: $,
							onClick: this.props.handleSpeed,
							title: "Change playback speed",
							hasPopup: C,
							lock: k,
						}),
						eY(
							P,
							null,
							"plus_speed" === t &&
								eY(
									L,
									animationProps$1,
									M
										? eY(AppPopup, {
												title: "Tempo Control",
												device: e,
												mobile: !0,
												low: !0,
												feature: "slowdown",
										  })
										: eY(tc, { title: "Tempo Control", classPrefix: "speed" })
								),
							f &&
								eY(
									L,
									{ ...animationProps$1, key: "layer" },
									eY(MobileSpeed$1, null)
								)
						)
					),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							mobile: !0,
							icon: "loop",
							pressed: x,
							onClick: this.props.handleLoop,
							title: "Turn loop mode on",
							titlePressed: "Turn loop mode off",
							hasPopup: C,
							lock: k,
						}),
						eY(
							P,
							null,
							"plus_loop" === t &&
								eY(
									L,
									animationProps$1,
									M
										? eY(AppPopup, {
												title: "Loop Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "loop",
										  })
										: eY(tc, { title: "Loop Mode", classPrefix: "loop" })
								)
						)
					),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							mobile: !0,
							icon: "solo",
							pressed: v,
							onClick: this.props.handleSolo,
							title: "Play the current track solo",
							titlePressed: "Play the focus mix of all tracks",
							hasPopup: C,
							lock: k,
						}),
						eY(
							P,
							null,
							"plus_solo" === t &&
								eY(
									L,
									animationProps$1,
									M
										? eY(AppPopup, {
												title: "Solo Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "solo",
										  })
										: eY(tc, { title: "Solo Mode", classPrefix: "solo" })
								),
							"solo_single" === t &&
								eY(
									L,
									animationProps$1,
									eY(StubPopup, { title: "Solo", horizontal: !0 })
								)
						)
					),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							mobile: !0,
							icon: "mute",
							pressed: b,
							onClick: this.props.handleMute,
							title: "Mute current track (M)",
							titlePressed: "Unmute current track (M)",
							hasPopup: C,
							lock: k,
						}),
						eY(
							P,
							null,
							"plus_mute" === t &&
								eY(
									L,
									animationProps$1,
									M
										? eY(AppPopup, {
												title: "Mute Mode",
												device: e,
												mobile: !0,
												feature: "mute",
										  })
										: eY(tc, { title: "Mute Mode", classPrefix: "mute" })
								)
						)
					),
					_ &&
						eY(
							"div",
							{ className: __default$B.item },
							eY(th, {
								key: `fingerings ${y} ${l}`,
								loading: y,
								icon: "fingerings",
								pressed: l,
								onClick: this.props.handleFingerings,
								title: "Generate guitar fingerings (G)",
								titlePressed: "Turn fingerings off (G)",
							}),
							eY(
								P,
								null,
								l &&
									"Loading" !== r &&
									"tab_editor" !== t &&
									eY(L, animationProps$1, eY(HandPopup, { status: r }))
							)
						),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							mobile: !0,
							icon: "countin",
							pressed: w,
							onClick: this.props.handleCountin,
							title: "Turn count-in mode on (C)",
							titlePressed: "Turn count-in mode off (C)",
						})
					),
					eY(
						"div",
						{ className: __default$B.item },
						eY(th, {
							icon: "voice" === h ? "voice" : "metronome",
							pressed: T,
							onClick: this.props.handleMetronome,
							title: "Turn metronome on (N)",
							titlePressed: "Turn metronome off (N)",
						}),
						eY(
							P,
							null,
							"metronome" === t &&
								eY(
									L,
									{ ...animationProps$1, key: "layer" },
									eY(MetronomePopup$1, null)
								)
						)
					),
					s &&
						eY(
							"div",
							{ className: __default$B.item },
							0 !== o &&
								eY(
									"div",
									{ className: __default$B.tuningValue },
									`${o > 0 ? "+" : ""}${o}`
								),
							eY(th, {
								mobile: !0,
								icon: "tuning",
								pressed: 0 !== o || g,
								onClick: this.props.handlePitchshift,
								title: "Pitch Shift on",
								titlePressed: "Pitch Shift off",
								hasPopup: C,
								lock: k,
							}),
							eY(
								P,
								null,
								"plus_pitchshift" === t &&
									eY(
										L,
										animationProps$1,
										M
											? eY(AppPopup, {
													title: "Pitch Shift",
													device: e,
													mobile: !0,
													feature: "pitch shift",
											  })
											: eY(tc, { title: "Pitch Shift", classPrefix: "pitch" })
									),
								g &&
									eY(
										L,
										{ ...animationProps$1, key: "layer" },
										eY(PitchShift$1, { mobile: !0 })
									)
							)
						)
				),
				eY(
					"div",
					{ className: __default$B.play },
					eY(tp, {
						onClick: (e) => {
							this.props.handlePlay(e), this.hide();
						},
						title: "Play",
						titlePressed: "Pause",
						shouldPlay: a,
						canPlay: i,
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
	return eY(
		"div",
		{ className: __default$A.error, role: "alert" },
		eY(
			"h1",
			{ className: __default$A.title },
			eY("span", null, "The song was successfully deleted!")
		),
		eY(
			"h2",
			{ className: __default$A.subtitle },
			"Try ",
			eY(T, { to: "/" }, "searching"),
			" for other songs."
		)
	);
}
class IconAlert extends eG {
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
function LicenseRestriction() {
	return eY(
		V,
		{
			level: "notice",
			title:
				"Sorry this content has been removed in your country at the request of the underlying music publisher.",
			action:
				"We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
			reason: "license",
		},
		eY(IconAlert, null)
	);
}
function AlertManager(e) {
	let { meta: t, user: a, cursor: i, part: o, player: s, isDeleted: n } = e;
	if (t.loading || o.loading) return;
	let r = !!t.current,
		l = t.current && !!t.current.tracks,
		u = X(t, a),
		d = r && e6.get(t.current, e9.MASTER),
		p = t.current && t.current.isBlocked;
	if (t.isNotFound || o.isNotFound) return eY(tT, null);
	if (n) return eY(DeletedSong, null);
	if (t.isNetworkFailed || o.isNetworkFailed) return eY(tC, null);
	if (t.isFailed || o.isFailed) return eY(tP, null);
	if (!t.allowedByLicense) return eY(LicenseRestriction, null);
	if (r && !u && d.audioError) {
		let e = d.audioError,
			t = "Our virtual band was unable to play it O_o";
		return (
			e === te.TOO_LONG && (t = "Its duration exceeds the 30 minutes limit"),
			eY(V, {
				level: "error",
				title: "Sorry, playback is not possible on this song",
				action: t,
				reason: "audio",
			})
		);
	}
	if (r && (!l || !u))
		return eY(V, {
			level: "info",
			title: "Tab audio is being rendered",
			action:
				"We'll send you an email within 15 minutes once your tab is ready",
			reason: "render",
		});
	else if (!s.webworkerOperational)
		return eY(V, {
			level: "info",
			title: "Sorry, playback is not possible on this song",
			action: "Probably there is not enough memory",
			reason: "webworker",
		});
	else if (!s.playbackAvailable || !tt)
		return eY(V, {
			level: "info",
			title: "Sorry, playback is not supported in your browser",
			action: "Try to use latest Google Chrome",
			reason: s.playbackAvailable ? "animate" : "audio",
		});
	else if (s.isAudioNetworkFailed)
		return eY(V, {
			level: "info",
			title: "Audio can't be loaded because of network error.",
			action: "Probably you are offline or connection was canceled",
			reason: "network",
		});
	else if (s.isAudioFailed)
		return eY(V, {
			level: "error",
			title: "Sorry, but there are some problems with playback",
			action: "Please, try to reload page",
			reason: "playback",
		});
	else if (i.isFailed)
		return eY(V, {
			level: "error",
			title: "Sorry, but there are some problems with cursor",
			action: "Please, try to reload page",
			reason: "cursor",
		});
	else if (p)
		return eY(V, {
			level: "notice",
			title: "Sorry, but that revision was blocked",
			action: "Please let us know if you disagree with this decision",
			reason: "block",
		});
}
let main = "Bvj22a",
	showroom = U + " Bvj1o9",
	banner = "Bvj1b4",
	__default$z = { main: "Bvj22a", showroom: U + " Bvj1o9", banner: "Bvj1b4" },
	ShowroomBottom = eQ(() => {
		let e = eJ(),
			{ device: t, ads: a } = c("device", "ads", "route", "consent"),
			{ alt: i, link: o, image: s } = q(t);
		return eY(
			"section",
			{
				id: "showroom_bottom",
				className: __default$z.main,
				key: "showroom-bottom",
				ref: e,
			},
			eY(
				"div",
				{ className: __default$z.showroom, id: "Redesign_BTF_tab_page_320x50" },
				a.notsyFailed &&
					eY(
						"a",
						{ className: __default$z.link, href: o, target: "_blank" },
						eY("img", { src: s, className: __default$z.banner, alt: i })
					)
			)
		);
	});
class TimeStampItem extends eG {
	inputRef = e1();
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
			{ active: a } = this.state;
		return eY(
			"li",
			{ onClick: this.onClick, key: e },
			a
				? eY("input", {
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
class YTPlayer extends eG {
	playerAPI = null;
	playTimer = null;
	listRef = e1();
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
				a = t.parentNode;
			a && a.insertBefore(e, t);
		}
	};
	componentDidUpdate(e) {
		let { songId: t, part: a, player: i } = this.props,
			o = e.songId,
			s = e.part.videoOffset,
			n = e.part.videoId;
		if (t !== o || a.videoOffset !== s || a.videoId !== n) {
			i.video.destroy();
			let e = getPlayerInstance(n, o);
			for (; e; ) e.remove(), (e = getPlayerInstance(n, o));
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
					player: { video: a, speed: i },
					part: o,
					dispatch: s,
				} = this.props,
				n = o.videoId,
				r = o.videoOffset;
			this.playerAPI = new window.YT.Player(`youtube-player-${n}-${e}`, {
				videoId: n,
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
						a.load(this.playerAPI, r, t, i);
					},
					onError: (e) => {
						console.error(e),
							s("curiosity/event", { event: "Video player error" });
					},
					onStateChange: this.onYTPlayerStateChange,
				},
			});
		} catch {}
	};
	addBarTimestamp = () => {
		let { timestamps: e } = this.state,
			t = [...e],
			a = this.playerAPI.getCurrentTime();
		t.push((a = +a.toFixed(6))),
			this.setState({ timestamps: t }, () => {
				this.listRef.current?.scrollTo({
					top: this.listRef.current?.scrollHeight,
				});
			});
	};
	editTimestamp = (e, t) => {
		let { timestamps: a } = this.state,
			i = [...a];
		(i[e] = t), this.setState({ timestamps: i });
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
		ta(played10SecStorage) ||
			(this.props.dispatch("curiosity/event", {
				event: "Played video for 10 sec first time",
			}),
			ti(played10SecStorage, !0));
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
			{ songId: t, part: a, user: i } = this.props,
			{ timestamps: o, openedEditor: s } = this.state,
			n = G(i, to.USE_VIDEO_SYNCHRONISATION);
		return [
			e
				? eY(
						"div",
						{ className: __default$y.openSection },
						eY(
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
				: eY(
						"div",
						{ className: __default$y.openSection },
						eY(
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
			eY(
				"div",
				{
					className: __default$y.container,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-container",
				},
				eY(
					"div",
					{ className: __default$y.inner },
					s &&
						n &&
						eY(
							"div",
							{ className: __default$y.settings },
							eY("input", {
								className: __default$y.videoInput,
								type: "text",
								placeholder: "videoId",
								onBlur: this.changeVideoId,
							}),
							eY(
								"div",
								{ className: __default$y.timestamps, ref: this.listRef },
								eY(
									"ul",
									null,
									o.map((e, t) =>
										eY(TimeStampItem, {
											index: t,
											value: e,
											editValue: this.editTimestamp,
										})
									)
								)
							),
							eY(
								"div",
								{ className: __default$y.buttons },
								eY("button", { onClick: this.syncClick }, "Sync"),
								eY("button", { onClick: this.saveClick }, "Save"),
								eY("button", { onClick: this.resetPoints }, "Reset")
							)
						),
					eY(
						"div",
						{ className: __default$y.video, id: "youtube-video-container" },
						eY("div", { id: `youtube-player-${a.videoId}-${t}` }),
						!s &&
							eY(
								"button",
								{
									className: __default$y.hideBtn,
									onClick: this.toggleVideo,
									tittle: "Close video",
									id: "close-video-tag",
								},
								"Γ£ò"
							),
						n &&
							eY(
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
class YTPlayerDemo extends eG {
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
				? eY(
						"div",
						{ className: __default$x.openSection },
						eY(
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
				: eY(
						"div",
						{ className: __default$x.openSection },
						eY(
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
			eY(
				"div",
				{
					className: __default$x.ad,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-ad",
				},
				eY(
					"div",
					{ className: __default$x.yellow },
					eY(
						"picture",
						{},
						eY("source", { srcSet: guitar1ImageP, type: "image/webp" }),
						eY("img", {
							height: 200,
							width: 163,
							src: guitar1Image,
							alt: "First guitarist",
						})
					)
				),
				eY(
					"div",
					{ className: __default$x.blue },
					eY(
						"picture",
						{},
						eY("source", { srcSet: guitar2ImageP, type: "image/webp" }),
						eY("img", {
							height: 266,
							width: 118,
							src: guitar2Image,
							alt: "Second guitarist",
						})
					),
					eY(
						T,
						{
							to: "/a/wa/plus",
							"aria-label": "See plans and pricing",
							onClick: this.onYTLogoClick,
						},
						eY(
							"svg",
							{
								width: 127,
								height: 97,
								viewBox: "0 0 127 97",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
							},
							eY("path", {
								d: "M109.3 19.48a12.03 12.03 0 0 0-8.48-8.43C93.29 9 63.14 9 63.14 9S33 9 25.47 10.97a12.27 12.27 0 0 0-8.49 8.51C15 26.98 15 42.5 15 42.5s0 15.6 1.98 23.02a12.03 12.03 0 0 0 8.49 8.43C33.08 76 63.14 76 63.14 76s30.14 0 37.68-1.97a12.03 12.03 0 0 0 8.49-8.43c1.98-7.5 1.98-23.02 1.98-23.02s.08-15.6-1.98-23.1Z",
								fill: "#f00",
							}),
							eY("path", {
								d: "M53.55 28.15v28.7L78.62 42.5 53.55 28.15Z",
								fill: "#fff",
							})
						)
					)
				),
				eY(
					"div",
					{ className: __default$x.background },
					eY(
						"svg",
						{
							className: __default$x.ellipse1,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						eY("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					eY(
						"svg",
						{
							className: __default$x.ellipse2,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						eY("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					eY(
						"svg",
						{
							className: __default$x.ellipse3,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						eY("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					)
				),
				eY(
					"div",
					{ className: __default$x.green },
					eY(
						"picture",
						{},
						eY("source", { srcSet: guitar3ImageP, type: "image/webp" }),
						eY("img", {
							height: 200,
							width: 163,
							src: guitar3Image,
							alt: "Third guitarist",
						})
					)
				),
				eY(
					"p",
					{ className: __default$x.plusText },
					"Play along with Official Audio on Plus plan"
				),
				eY(
					T,
					{
						to: "/a/wa/plus",
						"aria-label": "See plans and pricing",
						onClick: this.onPlusLinkClick,
					},
					eY(
						"button",
						{
							className: __default$x.plans,
							tittle: "Plans and Pricing",
							alt: "plans&pricing",
						},
						"See plans and pricing"
					)
				),
				eY(
					T,
					{
						to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
						"aria-label": "On the demo song",
						onClick: this.onDemoLinkClick,
					},
					eY(
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
			handlePitchshift: a,
			isActive: i,
			isPitchshiftToStandard: o,
			lock: s,
		} = e,
		{
			player: { pitchShift: n },
		} = c("player"),
		r = "Shift pitch (R)";
	0 !== n
		? (r = "Pitch shifted (R)")
		: o && (r = "Pitch can be shifted to match standard tuning (R)");
	let l = 5 * (Math.abs(n).toString(10).length - 1) + (n > 0 ? 2 : 0);
	return eY(
		"g",
		{
			vectorEffect: "non-scaling-stroke",
			transform: "translate(-8 -47)",
			className: i ? __default$w.active : __default$w.btn,
			onClick: a,
			"data-tab-control": "tuning-button",
		},
		eY("title", null, r),
		eY("rect", {
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
		eY("path", {
			d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
			"stroke-width": "1.3",
		}),
		eY("path", {
			d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
			"stroke-width": "1.6",
		}),
		(o || 0 !== n) &&
			eY("rect", {
				x: 18,
				y: 0,
				width: 13 + l,
				height: 13,
				rx: 6.5,
				ry: 6.5,
				className: __default$w.badge,
			}),
		0 !== n && eY("text", { x: 20, y: 9.5 }, `${n > 0 ? "+" : ""}${n}`),
		s &&
			eY(
				"g",
				{ transform: "translate(-17, -12)" },
				eY("circle", {
					className: __default$w.bg,
					cx: "16.5",
					cy: "15.5",
					r: "8.5",
					filter: "url(#svg_shadow_light)",
				}),
				eY("path", {
					className: __default$w.lock,
					d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
				}),
				eY("circle", { className: __default$w.shape, cx: 16.5, cy: 17, r: 0.8 })
			)
	);
}
let ToastContext = e2(null),
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
		let { close: t, timeout: a = 5e3, text: i, type: o } = e;
		return (
			e0(() => {
				let e = setTimeout(t, a);
				return () => clearTimeout(e);
			}, [t, a]),
			eY(
				"div",
				{ className: __default$v.toast },
				"good" === o
					? eY(
							"div",
							{ className: __default$v.goodToast },
							eY(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								eY("use", { xlinkHref: `${positiveMarker}#icon` })
							)
					  )
					: eY(
							"div",
							{ className: __default$v.badToast },
							eY(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								eY("use", { xlinkHref: `${negativeMarker}#icon` })
							)
					  ),
				eY(
					"div",
					{ className: __default$v.toast__text },
					i,
					eY(
						"button",
						{ className: __default$v.toast__closeBtn, onClick: t },
						"Γ£ò"
					)
				)
			)
		);
	},
	ToastProvider = (e) => {
		let { children: t, device: a } = e,
			[i, o] = eZ(null),
			s = (e) => {
				let { text: t, type: a } = e;
				o({ text: t, type: a });
			},
			n = () => {
				o(null);
			},
			r = e5(() => ({ open: s }), []);
		return eY(ToastContext.Provider, {
			value: r,
			children: [
				!a.isDesktop &&
					e3(
						eY(
							P,
							null,
							i &&
								eY(
									L,
									{ animationStyles: tb, timeout: 150 },
									eY(Toast, { close: n, text: i.text, type: i.type })
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
	markerPath$1 = (e, t, a) =>
		`M${e + 7} ${
			t + 13
		}l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${a}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class LearnMarker extends eG {
	static contextType = ToastContext;
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: a } = this.props;
		a(e, t),
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
		let a = [
				e4("circle", {
					className: __default$u.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				e4("circle", {
					className: __default$u.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			i = [];
		for (let a = 0; a < 7; a++) {
			let o = 0.9 * a,
				s =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(o) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				n = 14 * Math.sin(o) + t + 6,
				r =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(o + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				l = 14 * Math.sin(o + 0.45 * Math.random() - 0.225) + t + 6,
				u = e4("circle", {
					cx: s,
					cy: n,
					r: 0.75,
					className: `${__default$u.particle} ${__default$u.particle_big}`,
				}),
				d = e4("circle", {
					cx: r,
					cy: l,
					r: 0.5,
					className: `${__default$u.particle} ${__default$u.particle_small}`,
				});
			i.push(u, d);
		}
		return [a, e4("g", { className: __default$u.particles, children: i })];
	};
	componentDidUpdate(e) {
		e.isLearned !== this.props.isLearned &&
			(this.setState({ clicked: !0 }),
			setTimeout(() => {
				this.setState({ clicked: !1 });
			}, 1e3));
	}
	render() {
		let { x: e, y: t, barNumber: a, isLearned: i } = this.props,
			o = `add-${a}`,
			s = "".padEnd(1 + 2 * String(a).length, "."),
			n = MARKER_LENGTH$1[a.toString().length - 1];
		return i
			? e4("g", {
					onClick: this.onBarClick,
					className: __default$u.group,
					"data-tab-control": "marker",
					children: [
						this.props.isMobileOs &&
							e4("rect", {
								x: e - 10,
								y: t - 8,
								width: 30 + n,
								height: 30,
								fillOpacity: 0,
							}),
						this.props.showAnimation &&
							this.state.clicked &&
							this.getMarkerParticles(e, t),
						e4("g", {
							className:
								this.props.showAnimation &&
								this.state.clicked &&
								__default$u.learnedMarkerContainerWithAnime,
							children: [
								e4("path", {
									className: __default$u.learnedMarker,
									d: markerPath$1(e, t, n),
								}),
								e4("text", {
									className: __default$u.markerText,
									x: e + 2.4,
									y: t + 10,
									id: o,
									children: a,
								}),
							],
						}),
					],
			  })
			: e4("g", {
					className: __default$u.group,
					onClick: this.onBarClick,
					"data-tab-control": "marker",
					children: [
						this.props.isMobileOs &&
							e4("rect", {
								x: e - 10,
								y: t - 8,
								width: 30 + n,
								height: 30,
								fillOpacity: 0,
							}),
						e4(
							"text",
							{
								className: __default$u.number,
								x: 2 + e,
								y: t + 10,
								children: a,
							},
							"number"
						),
						e4("text", {
							className: __default$u.dots,
							x: 1 + e,
							y: t + 14,
							children: s,
						}),
						!this.props.isMobileOs &&
							e4("path", {
								className: __default$u.markerTransparent,
								d: markerPath$1(e, t, n + 107),
							}),
					],
			  });
	}
}
let MARKER_LENGTH = [5, 12, 19, 25],
	markerPath = (e, t, a) =>
		`M${e + 7} ${
			t + 14
		}l-2 3-2-3c-2 0-3-1-3-3v-9c0-2 1-3 3-3h${a}c2 0 3 1 3 3v9c0 2-1 3-3 3z`;
class LearnMarkerLabel extends eG {
	static contextType = ToastContext;
	labelRef = e1();
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: a } = this.props;
		a(e, t),
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
		let a = [
				e4("circle", {
					className: __default$u.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				e4("circle", {
					className: __default$u.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			i = [];
		for (let a = 0; a < 7; a++) {
			let o = 0.9 * a,
				s =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(o) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				n = 14 * Math.sin(o) + t + 6,
				r =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(o + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				l = 14 * Math.sin(o + 0.45 * Math.random() - 0.225) + t + 6,
				u = e4("circle", {
					cx: s,
					cy: n,
					r: 0.75,
					className: `${__default$u.particle} ${__default$u.particle_big}`,
				}),
				d = e4("circle", {
					cx: r,
					cy: l,
					r: 0.5,
					className: `${__default$u.particle} ${__default$u.particle_small}`,
				});
			i.push(u, d);
		}
		return [a, e4("g", { className: __default$u.particles, children: i })];
	};
	render() {
		let {
				x: e,
				y: t,
				barNumber: a,
				isLearned: i,
				isLoopChanging: o,
			} = this.props,
			s = `add-${a}`,
			n = MARKER_LENGTH[a.toString().length - 1];
		return e4("g", {
			className: __default$u.group,
			onClick: this.onBarClick,
			"data-tab-control": "marker",
			children: [
				!this.props.isMobileOs &&
					!o &&
					e4("g", {
						className: `${__default$u.hideGroup} ${__default$u.activeGroup}`,
						ref: this.labelRef,
						children: i
							? [
									e4("path", {
										className: __default$u.marker,
										d: markerPath(e, t, n + 107),
									}),
									e4("text", {
										className: __default$u.markerText,
										x: e + 2.4,
										y: t + 10,
										id: s,
										children: `${a} Mark as not learned`,
									}),
							  ]
							: [
									e4("path", {
										className: __default$u.marker,
										d: markerPath(e, t, n + 87),
									}),
									e4("text", {
										className: __default$u.markerText,
										x: e + 2.4,
										y: t + 10,
										id: s,
										children: `${a} Mark as learned`,
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
let LearnMarkers = eQ((e) => {
	let { line: t, partId: a, songId: i } = e,
		{
			learnMarkers: o,
			experiments: s,
			device: n,
			player: r,
			dispatch: l,
		} = c("learnMarkers", "experiments", "device", "player"),
		u = o.data.find((e) => e.songId === i && e.partId === a)?.learnedBars || [],
		p = s.marked_as_learned_animation?.segment === "on",
		h = e5(() => k(n) || d(n.os) || S(n.os), [n]),
		m = eW(
			(e, t) => {
				l("learnMarkers/markToggle", {
					songId: i,
					partId: a,
					barNumber: e,
					isLearned: t,
				}),
					s.marked_as_learned_animation?.status === "pending" &&
						l("experiments/activate", {
							experimentName: "marked_as_learned_animation",
						});
			},
			[i, a]
		),
		f = [],
		g = [];
	for (let e of t.layout.measureLayouts) {
		let t = e.measure;
		if (t.layouts[0] !== e) continue;
		let a = Y(t).x + 2,
			i = getAnnotationMarkerCoordY$1(),
			o = t.index + 1,
			s = u.includes(o);
		f.push(
			e4(LearnMarker, {
				x: a,
				y: i,
				barNumber: o,
				isLearned: s,
				showAnimation: p,
				isMobileOs: h,
				isLoopChanging: r.isLoopChanging,
				onToggle: m,
			})
		),
			g.push(
				e4(LearnMarkerLabel, {
					x: a,
					y: i,
					barNumber: o,
					isLearned: s,
					showAnimation: p,
					isMobileOs: h,
					isLoopChanging: r.isLoopChanging,
					onToggle: m,
				})
			);
	}
	return e4(eK, { children: [f, g] });
});
function getAnnotationMarkerCoordY() {
	return -18;
}
let BarNumbers = eQ((e) => {
		let { line: t } = e,
			a = [];
		for (let e of t.layout.measureLayouts) {
			let t = e.measure;
			if (t.layouts[0] !== e) continue;
			let i = Y(t).x + 2,
				o = getAnnotationMarkerCoordY(),
				s = t.index + 1;
			a.push(
				e4("g", {
					className: __default$u.group,
					children: [
						e4(
							"text",
							{
								className: __default$u.number,
								x: 2 + i,
								y: o + 10,
								children: s,
							},
							"number"
						),
					],
				})
			);
		}
		return e4(eK, { children: [a] });
	}),
	text$7 = "C351",
	__default$t = { text: "C351" };
function BeatText(e) {
	let { text: t, layout: a, xoffset: i } = e,
		o = t.layer;
	if (o) {
		let e = a ? o.x1 - a.absoluteX : o.x1,
			s = -1 * o.y;
		return e4("text", {
			className: __default$t.text,
			x: e + i,
			y: s,
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
		a = e.line.strings,
		i = (a <= 4 ? t : 0) - 2 * (t - 12),
		o = 0 !== i ? `translate(0, ${-i})` : void 0,
		s = [
			e4("ellipse", { id: "dot", cx: 10, cy: 17.5 - i, rx: 1.5, ry: 1.5 }),
			e4("rect", { id: "rest1", y: 24 - i, x: -6, width: 12, height: 6 }),
			e4("rect", { id: "rest2", y: 18 - i, x: -6, width: 12, height: 6 }),
			e4("path", {
				id: "rest4",
				transform: o,
				d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
			}),
			e4("path", { id: "rest8", transform: o, d: PATH_REST8 }),
			e4("path", { id: "rest16", transform: o, d: PATH_REST16 }),
			e4("path", { id: "rest32", transform: o, d: PATH_REST32 }),
			e4("path", { id: "rest64", transform: o, d: PATH_REST64 }),
			e4("path", { id: "rest128", transform: o, d: PATH_REST128 }),
			e4("path", {
				id: "tempo",
				d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
			}),
		],
		n = !this.props.part.usedDrums;
	return e4("defs", {
		children: n
			? s
			: [
					...s,
					e4("path", { id: "drumCross", d: DRUM_CROSS }),
					e4("path", {
						id: "drumHat",
						d: "M-2-7l6.5-4l6.5 4",
						style: "fill: none",
					}),
					e4("path", {
						id: "drumHatEdge",
						d: "M-2-7h8l5 -5",
						style: "fill: none",
					}),
					e4("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
					e4("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
					e4("path", {
						id: "drumCircleCross",
						d: DRUM_CIRCLE_CROSS,
						style: "fill: none",
					}),
					e4("path", {
						id: "drumCircleStroke",
						d: DRUM_CIRCLE_STROKE,
						style: "fill: none",
					}),
					e4("path", { id: "drum", d: DRUM_BASE }),
					e4("path", { id: "drumStroke", d: DRUM_STROKE }),
					e4("path", { id: "extraLine", d: "M-4 0l16 0" }),
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
		{ x1: a, x2: i, y: o } = t,
		s = i - a,
		n = -1 * o - 2,
		r = [
			e4(
				"text",
				{ className: __default$s.text, x: a, y: n, children: "let ring" },
				"let ring"
			),
		];
	return (
		s > 46 &&
			(r.push(
				e4(
					"line",
					{
						className: __default$s.dotted,
						x1: 46 + a,
						y1: -3 + n,
						x2: s - 2 + a,
						y2: -3 + n,
					},
					"dotted"
				)
			),
			r.push(
				e4(
					"line",
					{
						className: __default$s.line,
						x1: s + a,
						y1: 1 + n,
						x2: s + a,
						y2: -7 + n,
					},
					"line"
				)
			)),
		e4(eK, { children: r })
	);
}
let text$5 = "C4a2yy",
	line$4 = "C4a2ve",
	dotted$1 = "C4a2ve C4a1op",
	__default$r = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
	TEXT_OFFSET$2 = 35;
function PalmMute(e) {
	let { layer: t } = e,
		{ x1: a, x2: i, y: o } = t,
		s = -1 * o - 2,
		n = i - a,
		r = [
			eY(
				"text",
				{ className: __default$r.text, x: a, y: s, key: "pm" },
				"P. M."
			),
		];
	return (
		n > 35 &&
			(r.push(
				eY("line", {
					className: __default$r.dotted,
					x1: 35 + a,
					y1: -3 + s,
					x2: n - 2 + a,
					y2: -3 + s,
					key: "dotted",
				})
			),
			r.push(
				eY("line", {
					className: __default$r.line,
					x1: n + a,
					y1: 1 + s,
					x2: n + a,
					y2: -7 + s,
					key: "line",
				})
			)),
		eY(eK, null, r)
	);
}
let text$4 = "q71wu",
	line$3 = "q72a",
	dotted = "q72a q712i",
	__default$q = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
	TEXT_OFFSET$1 = 40;
function Harmonic(e) {
	let { layer: t, effectValue: a } = e,
		{ x1: i, x2: o, y: s } = t,
		n = o - i,
		r = -1 * s - 2,
		l = "Harm.";
	switch (a) {
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
		e4(
			"text",
			{ className: __default$q.text, x: i, y: r, children: l },
			"Harm."
		),
	];
	return (
		n > 40 &&
			(u.push(
				e4(
					"line",
					{
						className: __default$q.dotted,
						x1: 40 + i,
						y1: -3 + r,
						x2: n - 2 + i,
						y2: -3 + r,
					},
					"dotted"
				)
			),
			u.push(
				e4(
					"line",
					{
						className: __default$q.line,
						x1: n + i,
						y1: 1 + r,
						x2: n + i,
						y2: -7 + r,
					},
					"line"
				)
			)),
		e4(eK, { children: u })
	);
}
let path$5 = "C0x28",
	__default$p = { path: "C0x28" },
	VIBRATO_PATTERN_WIDTH = 5.5,
	VIBRATO_MIN_WIDTH = 14,
	VIBRATO_MIN_ITERATIONS = 2,
	VIBRATO_SIDES = 3;
function generatePath$2(e, t, a, i) {
	let o = `M${t} ${a + 4}l3-3.5`,
		s = `v${i ? 2 : 1}.8l-3 3.5`;
	for (let t = 0; t < e; t++)
		(o += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
			(s += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
	return o + s + "z";
}
function Vibrato(e) {
	let { layer: t, wide: a } = e,
		{ x1: i, x2: o, y: s } = t,
		n = o - i,
		r = generatePath$2(n > 14 ? Math.floor((n - 3) / 5.5) : 2, i, -(s + 6), a);
	return e4("path", { className: __default$p.path, d: r });
}
class Effects extends eG {
	renderEffect = (e, t) => {
		let a = {
			layer: e.layer,
			key: `${e.effect}-${this.props.line.index}-${t}`,
			line: this.props.line,
			effectValue: e.effectValue,
		};
		switch (e.effect) {
			case "letRing":
				return eY(LetRing, a);
			case "palmMute":
				return eY(PalmMute, a);
			case "harmonic":
				return eY(Harmonic, a);
			case "vibrato":
				return eY(Vibrato, { ...a, wide: !1 });
			case "wideVibrato":
				return eY(Vibrato, { ...a, wide: !0 });
			default:
				return null;
		}
	};
	render() {
		return eY(eK, null, this.props.line.effects.map(this.renderEffect));
	}
}
function platformVar(e, t) {
	return () => e;
}
let NOTE_TEXT_OFFSET = (e) => platformVar(0);
function Note(e) {
	let { note: t, beat: a, part: i, x: o, edited: s, platform: n } = e,
		{ intervalSize: r } = a.layout.measureLayout.lineLayout;
	if (!W(t) && (!s || (s && t.bogus))) return null;
	let l = `translate(${o}, 0)`;
	if (a.rest) {
		if (a.layout.usedStrings || (0 !== a.voice && a.layout.usedRest))
			return null;
		let e = K[`rest${a.voice}`],
			t = e4(
				"use",
				{ className: e, xlinkHref: `#rest${a.type}`, transform: l },
				"rest"
			);
		if (a.dotted) {
			let a = e4(
				"use",
				{ className: e, xlinkHref: "#dot", transform: l },
				"dot"
			);
			return e4(eK, { children: [t, a] });
		}
		return t;
	}
	if (i.usedDrums && i.isDrumStdOn) {
		let e = K[`drums${a.voice}`],
			i = `translate(${o}, ${0.5 + r * t.string})`,
			s = t.orientation ? i : i + " translate(-10, 0)";
		return e4(eK, {
			children: [
				(t.string <= -1 || t.string >= 5) &&
					e4(J, {
						noteString: t.string,
						className: Z.strings,
						noteTransform: s,
						intervalSize: r,
					}),
				1 !== a.type &&
					e4("path", {
						className: K[`stick${a.voice}`],
						transform: i,
						d: Q(t.fret, t.string, r),
					}),
				(t.tie || t.ghost) &&
					e4(
						"text",
						{ x: o - 6, y: r * t.string + NOTE_TEXT_OFFSET()(n) + 5 },
						"("
					),
				e4(ee, { fret: t.fret, className: e, transform: s }),
				(t.tie || t.ghost) &&
					e4(
						"text",
						{ x: o + 11, y: r * t.string + NOTE_TEXT_OFFSET()(n) + 5 },
						")"
					),
			],
		});
	}
	let u = "",
		d = 0,
		p = i.usedDrums;
	if (p) {
		let e = i.usedDrums.get(t.fret);
		e && ((u = e.name || "*"), (d = e.string || 0));
	} else (u = t.dead ? "X" : t.fret.toString()), (d = t.string);
	let h = K[`${p ? "vDrum" : "voice"}${a.voice}`];
	s && (h = `${h} ${K.edited}`);
	let c = {
			className: h,
			x: o,
			y: r * d + NOTE_TEXT_OFFSET()(n),
			children: t.tie || t.ghost ? `(${u})` : u,
			style: {},
		},
		m = e4("text", c, "text");
	if (t.harmonic) {
		let e = e4(
			"path",
			{
				className: K.harmonic,
				transform: `translate(${o - 17}, ${-3.5 + r * d} )`,
				d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
			},
			"harmonic"
		);
		return e4(eK, { children: [e, m] });
	}
	return m;
}
let slur = "B642k5",
	__default$o = { slur: "B642k5" };
function generatePath$1(e, t, a, i, o, s) {
	let n = t ? ei(t, eo) : 0,
		r = o - n - (a ? ei(a, eo) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		u = Math.max(s - 4, 3),
		d = u - 1;
	return `M${n + e} ${s * i - 7}c${l}-${u} ${r - l}-${u} ${r} 0c-${l}-${d}-${
		r - l
	}-${d}-${r} 0z`;
}
function Slur(e) {
	let { x: t, start: a, end: i, slicingMode: o } = e;
	if (i) {
		let e = et(i).beat,
			a = ea(i).beat,
			s = ea(i).note;
		if (a.layout && e.layout) {
			let i = o.getTieSlurPathLength(e, a, !0),
				{ intervalSize: n } = e.layout.measureLayout.lineLayout;
			return e4("path", {
				className: __default$o.slur,
				d: generatePath$1(t - i, null, s, s.string, i, n),
			});
		}
	} else if (a) {
		let e = et(a).beat,
			i = ea(a).beat,
			s = et(a).note,
			n = ea(a).note;
		if (i.layout && e.layout) {
			let a = o.areBeatsInSameSlice(e, i),
				r = o.getTieSlurPathLength(e, i, !1),
				{ intervalSize: l } = e.layout.measureLayout.lineLayout;
			return e4("path", {
				className: __default$o.slur,
				d: generatePath$1(t, s, a ? n : null, s.string, r, l),
			});
		}
	}
	return null;
}
let tie = "Bbl9p",
	__default$n = { tie: "Bbl9p" };
function generatePath(e, t, a, i, o, s) {
	let n = t ? ei(t, en) : 0,
		r = o - n - (a ? ei(a, en) : 0),
		l = Math.min(Math.floor(r / 3), 10),
		u = Math.max(s - 5, 3),
		d = u - 1;
	return `M${n + e} ${s * i + 7}c${l} ${u} ${r - l} ${u} ${r} 0c-${l} ${d}-${
		r - l
	} ${d}-${r} 0z`;
}
function Tie(e) {
	let { x: t, start: a, end: i, slicingMode: o } = e;
	if (i) {
		let e = et(i).beat,
			a = ea(i).beat,
			s = ea(i).note;
		if (a.layout && e.layout) {
			let i = o.getTieSlurPathLength(e, a, !0),
				n = s.string,
				{ intervalSize: r } = e.layout.measureLayout.lineLayout;
			return e4("path", {
				className: __default$n.tie,
				d: generatePath(t - i, null, s, n, i, r),
			});
		}
	}
	if (a) {
		let e = et(a).beat,
			i = ea(a).beat,
			s = et(a).note,
			n = ea(a).note;
		if (i.layout && e.layout) {
			let a = o.areBeatsInSameSlice(e, i),
				r = o.getTieSlurPathLength(e, i, !1),
				{ intervalSize: l } = e.layout.measureLayout.lineLayout,
				u = s.string;
			return e4("path", {
				className: __default$n.tie,
				d: generatePath(t, s, a ? n : null, u, r, l),
			});
		}
	}
	return null;
}
function intersect(e, t) {
	if ((e.x1 === e.x2 && e.y1 === e.y2) || (t.x1 === t.x2 && t.y1 === t.y2))
		return null;
	let a = (t.y2 - t.y1) * (e.x2 - e.x1) - (t.x2 - t.x1) * (e.y2 - e.y1);
	if (0 === a) return null;
	let i = ((t.x2 - t.x1) * (e.y1 - t.y1) - (t.y2 - t.y1) * (e.x1 - t.x1)) / a,
		o = ((e.x2 - e.x1) * (e.y1 - t.y1) - (e.y2 - e.y1) * (e.x1 - t.x1)) / a;
	if (i < 0 || i > 1 || o < 0 || o > 1) return null;
	let s = e.x1 + i * (e.x2 - e.x1),
		n = e.y1 + i * (e.y2 - e.y1);
	return { x: s, y: n };
}
function trimLineX(e, t, a) {
	let i = intersect(e, { x1: t, y1: 1e3, x2: t, y2: -1e3 }),
		o = intersect(e, { x1: a, y1: 1e3, x2: a, y2: -1e3 });
	return {
		x1: i ? i.x : e.x1,
		y1: i ? i.y : e.y1,
		x2: o ? o.x : e.x2,
		y2: o ? o.y : e.y2,
	};
}
let slide = "zy1tz",
	__default$m = { slide: "zy1tz" };
function Slide(e) {
	let { x: t, cfx: a, note: i } = e,
		{ intervalSize: o } = i.beat.layout.measureLayout.lineLayout,
		s = et(a).beat,
		n = ea(a).beat;
	if (!n.layout || !s.layout) return null;
	let r = et(a).note,
		l = ea(a).note,
		u = r.string,
		d = r.fret >= l.fret ? -2 : 2,
		p = er(s, i.beat),
		h = er(s, s),
		c = er(s, n),
		m = {
			x1: t + h - p + ei(r, el),
			y1: o * u + d,
			x2: t + c - p - ei(l, el),
			y2: o * u - d,
		},
		f = trimLineX(m, ed(i.beat.layout), eu(i.beat.layout));
	return e4("line", { className: __default$m.slide, ...f });
}
let arrow = "Bxm1ag",
	__default$l = { arrow: "Bxm1ag" };
function Arrow(e) {
	let { x: t, y: a, up: i } = e;
	return e4("path", {
		className: __default$l.arrow,
		d: `M ${t},${a} l 2,${i ? 5 : -5} -4,0 2,${i ? -5 : 5}`,
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
			a = Math.floor(e / 100);
		a && (t += a);
		let i = e % 100;
		return i >= 25 && (t += FRACTIONS[Math.floor(i / 25) - 1]), t;
	}
	return "";
}
function BendLevel(e) {
	let { x: t, y: a, up: i, tone: o, platform: s } = e;
	return e4("text", {
		className: i ? __default$k.up : __default$k.down,
		x: t,
		y: i ? a - TOP_OFFSET$1(s) : a + BOTTOM_OFFSET(s),
		children: getText(o),
	});
}
let prebend = "Cs020",
	path$4 = "Cs04d",
	hold = "Cs04d Cs0dp",
	__default$j = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function renderPrebend(e, t, a, i, o, s) {
	return [
		e4(
			"line",
			{ className: __default$j.prebend, x1: a, y1: i + ec, x2: a, y2: o },
			`prebend-${e}`
		),
		e4(Arrow, { x: a, y: o, up: !0 }, `arrow-${e}`),
		e4(BendLevel, { tone: t, x: a, y: o, up: !0, platform: s }, `y-${e}`),
	];
}
function renderHold(e, t, a, i, o, s) {
	return t <= 0
		? null
		: [
				e4(
					"line",
					{ className: __default$j.hold, x1: a, y1: i, x2: o, y2: s },
					`hold-${e}`
				),
		  ];
}
function doesLastBendEndAtTone(e, t) {
	if (!e) return !1;
	let a = et(e).note,
		i = a.bend;
	if (!i) return !1;
	let o = i.points,
		s = o.length;
	return !(s < 1) && o[s - 1].tone === t;
}
function isLastBendElAHold(e) {
	if (!e) return !1;
	let t = et(e).note,
		a = t.bend;
	if (!a) return !1;
	let i = a.points,
		o = i.length;
	if (o < 2) return !1;
	let s = i[o - 2].tone,
		n = i[o - 1].tone;
	return n === s;
}
function renderBendOrRelease(e, t, a, i, o, s, n, r, l, u) {
	let d = l < n,
		p = t.prevNoteOnString,
		h = p && !!p.bendEnd,
		c = p && (!!p.bendStart || !!p.bendPart || !!p.bendEnd),
		m =
			p && isLastBendElAHold(p.bendEnd) && doesLastBendEndAtTone(p.bendEnd, 0),
		f = t.tie && h && !m && doesLastBendEndAtTone(p.bendEnd, a) && 0 !== a,
		g = o !== s || 0 !== a || (f && c) ? 0 : ei(t, eh),
		y = [
			e4(
				"path",
				{
					className: __default$j.path,
					d: `M${s + g},${n}Q${r},${n} ${r},${d ? l + 4 : l - 4}`,
				},
				`bend-${e}`
			),
			e4(Arrow, { x: r, y: l, up: d }, `arrow-${e}`),
		];
	return (
		0 !== i &&
			y.push(
				e4(BendLevel, { tone: i, x: r, y: l, up: d, platform: u }, `y-${e}`)
			),
		y
	);
}
function accumulate(e, t, a, i, o) {
	return {
		elements: t ? [...e.elements, t] : e.elements,
		prevTone: a,
		prevX: i,
		prevY: o,
	};
}
function bendPointReducer(e, t, a, i, o) {
	let s = ep + i * e.string;
	return function (i, n, r) {
		let { tone: l, position: u } = n,
			d = 0 === l ? s : ep - l / em;
		if (0 === r) {
			if (!e.tie && 0 !== l) {
				let e = renderPrebend(r, l, t, s, d, o);
				return accumulate(i, e, l, t, d);
			}
			return accumulate(i, null, l, t, 0 !== l ? d : s);
		}
		let { prevTone: p, prevX: h, prevY: c } = i,
			m = (a * u) / 60 + t;
		if (l === p) {
			let e = renderHold(r, l, h, d, m, d);
			return accumulate(i, e, l, m, d);
		}
		let f = renderBendOrRelease(r, e, p, l, t, h, c, m, d, o);
		return accumulate(i, f, l, m, d);
	};
}
function Bend(e) {
	let { cfx: t, note: a, slicingMode: i, x: o, platform: s } = e,
		n = et(t).note,
		r = n.bend;
	if (!r) return null;
	let { x1: l, x2: u } = i.getBendCoordinates(t, a),
		d = a.beat.layout.measureLayout.lineLayout.intervalSize,
		{ elements: p } = r.points.reduce(bendPointReducer(n, l + o, u - l, d, s), {
			elements: [],
			prevTone: 0,
			prevX: 0,
			prevY: 0,
		});
	return e4(eK, { children: p });
}
let lyrics = "ls209",
	__default$i = { lyrics: "ls209" };
function BeatLyrics(e) {
	let { lyrics: t, x: a } = e,
		i = t.layer;
	if (i) {
		let e = ef(t) + a + i.diff;
		return e4("text", {
			className: __default$i.lyrics,
			x: e,
			y: i.y + i.height,
			children: t.text,
		});
	}
	return null;
}
let REASONABLE_SHORT_SLIDE_WIDTH = 15;
function SlideShort(e) {
	let { note: t, x: a, type: i } = e,
		{ intervalSize: o } = t.beat.layout.measureLayout.lineLayout,
		s = t.string,
		n = "left" === i ? -1 : 1,
		r = "upwards" === t.rightSlide ? 1 : -1;
	"left" === i && (r = "above" === t.leftSlide ? 1 : -1);
	let l = ei(t, el);
	return e4("line", {
		className: __default$m.slide,
		x1: n * l + a,
		y1: o * s + 2 * r,
		x2: n * (l + 15) + a,
		y2: o * s - 2 * r,
	});
}
let note$1 = "Cge206",
	correction$1 = "Cgen4",
	background$1 = "Cge2e0",
	__default$h = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function EditedNote(e) {
	let { fret: t, x: a, string: i, originalFret: o, intervalSize: s } = e;
	if ("" === o) {
		let e = t.length >= 2 ? 11.5 : 7.5;
		return e4(eK, {
			children: [
				e4("line", {
					className: __default$h.background,
					x1: a - e,
					y1: s * i,
					x2: a + e,
					y2: s * i,
				}),
				e4("text", {
					className: __default$h.note,
					x: a,
					y: s * i,
					children: t,
					"data-fret": t,
				}),
			],
		});
	}
	let n = 10;
	return (
		t.length >= 2 && (n += 3),
		o.length >= 2 && (n += 4),
		e4(eK, {
			children: [
				"" !== t &&
					e4("text", {
						className: __default$h.note,
						x: a + n,
						y: s * i - 4,
						children: t,
						"data-fret": t,
					}),
				e4("line", {
					className: __default$h.correction,
					x1: a - 4,
					y1: s * i - 7,
					x2: a + 4,
					y2: s * i + 4,
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
	let { fingerL: t, string: a, x: i, fret: o } = e,
		s = fingerStyles[t - 1] || __default$g.index,
		n = 8;
	return (
		"number" == typeof o && Math.floor(o / 10) > 0 && (n = 12),
		eY("circle", { className: s, cx: i + n, cy: eg * a + 0, r: 3 })
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
	let { up: t, min: a, max: i, xoffset: o, intervalSize: s } = e,
		n = (i - a + 1) * s,
		r = t ? 4 : n - 4,
		l = t ? 0 : n,
		u = (a - 0.5) * s,
		d = o - 15;
	return e4(eK, {
		children: [
			e4(
				"line",
				{
					className: __default$f.arrowLine,
					x1: 4 + d,
					y1: u,
					x2: 4 + d,
					y2: (i + 0.5) * s,
				},
				"line"
			),
			e4(
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
			layout: a,
			part: i,
			measure: o,
			slicingMode: s,
			measureEditorData: n,
			measureFingerings: r,
			platform: l,
			x: u,
		} = e,
		d = u + a.x;
	for (let e of a.beats)
		if (e.lyrics)
			for (let a of e.lyrics)
				t.push(e4(BeatLyrics, { lyrics: a, x: d }, `lyrics${e.index}`));
		else {
			e.text &&
				t.push(
					e4(
						BeatText,
						{ text: e.text, layout: a, xoffset: d },
						`text${e.index}`
					)
				);
			let u = e.tappingWithLayer;
			u &&
				u.layer &&
				t.push(
					e4(
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
					e4(
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
				if (i.usedDrums) {
					let t = e.notes
						.filter((e) => !e.bogus)
						.map((e) => ({ string: Math.floor(2 * e.string), note: e }));
					t.sort((e, t) => e.string - t.string);
					let a = null;
					for (let e of t)
						(e.note.orientation =
							!(a && 1 >= Math.abs(e.string - a.string)) ||
							!a.note.orientation),
							(a = e);
				}
				e.hat &&
					i.isDrumStdOn &&
					t.push(
						e4(
							"path",
							{
								className: __default$f.hat,
								d: `M${d - 2}${-e.hat.layer.y}h8l5 -5`,
							},
							`hat${e.index}`
						)
					);
				let o =
						n && n.find((t) => t.beatNum === e.index && t.voice === e.voice),
					u = o && o.editedNotes;
				for (let a of (e.staccato &&
					e.staccato.layer.visible &&
					t.push(
						e4(
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
						e4(
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
						e4(
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
						!a.tie &&
						((h = Math.min(h, a.string)), (c = Math.max(c, a.string))),
						t.push(
							e4(
								Note,
								{
									note: a,
									beat: e,
									part: i,
									x: d,
									platform: l,
									edited: u && !!u.find((e) => e.string === a.string),
								},
								`note${e.index}-${a.index}-voice${e.voice}`
							)
						),
						a.tieStart &&
							t.push(
								e4(
									Tie,
									{ start: a.tieStart, slicingMode: s, x: d },
									`tie${e.index}-${a.index}`
								)
							),
						a.tieEnd &&
							ey(a.tieEnd) &&
							t.push(
								e4(
									Tie,
									{ end: a.tieEnd, slicingMode: s, x: d },
									`tieEnd${e.index}-${a.index}`
								)
							),
						a.slurStart &&
							t.push(
								e4(
									Slur,
									{ start: a.slurStart, slicingMode: s, x: d },
									`slur${e.index}-${a.index}`
								)
							),
						a.slurEnd &&
							ey(a.slurEnd) &&
							t.push(
								e4(
									Slur,
									{ end: a.slurEnd, slicingMode: s, x: d },
									`slurEnd${e.index}-${a.index}`
								)
							),
						a.leftSlide &&
							t.push(
								e4(SlideShort, {
									note: a,
									type: "left",
									key: `slideShortLeft${e.index}-${a.index}`,
									x: d,
								})
							),
						a.rightSlide &&
							"shift" !== a.rightSlide &&
							"legato" !== a.rightSlide &&
							t.push(
								e4(SlideShort, {
									note: a,
									type: "right",
									key: `slideShortRight${e.index}-${a.index}`,
									x: d,
								})
							),
						a.slideStart &&
							t.push(
								e4(
									Slide,
									{ note: a, cfx: a.slideStart, x: d },
									`slide${e.index}-${a.index}`
								)
							),
						a.slideEnd &&
							ey(a.slideEnd) &&
							t.push(
								e4(
									Slide,
									{ note: a, cfx: a.slideEnd, x: d },
									`slideEnd${e.index}-${a.index}`
								)
							);
					let o = s.bendsForNote(a);
					for (let i = 0; i < o.length; i++) {
						let n = o[i];
						s.shouldDrawBendOnNote(n, a) &&
							t.push(
								e4(
									Bend,
									{ cfx: n, note: a, slicingMode: s, x: d, platform: l },
									`bend${e.index}-${a.index}-${i}`
								)
							);
					}
					let n = r?.find((t) => t.index === e.index),
						p = n?.fingerings.find((e) => e.string === a.string);
					p &&
						t.push(
							e4(
								Fingering,
								{ fingerL: p.fingerL, x: d, string: a.string, fret: a.fret },
								`finger${e.index}-${a.index}`
							)
						);
				}
				if (u) {
					let i = a.measureLayout.lineLayout.intervalSize;
					u.forEach((a) =>
						t.push(
							e4(
								EditedNote,
								{
									x: d,
									fret: a.fret,
									originalFret: a.originalFret,
									string: a.string,
									intervalSize: i,
								},
								`editedNote${e.index}-${a.string}`
							)
						)
					);
				}
				if (!i.usedDrums && (e.upStroke || e.downStroke) && h < c) {
					let i = a.measureLayout.lineLayout.intervalSize;
					t.push(
						e4(
							Stroke,
							{ up: !!e.upStroke, min: h, max: c, xoffset: d, intervalSize: i },
							`stroke${e.index}`
						)
					);
				}
			}
		}
	return e4(eK, { children: t });
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
		tripletFeel: { feel: t, layer: a },
		x: i,
	} = e;
	if (!a) return null;
	let { y: o } = a,
		s = "off" === t,
		n = "16th" === t;
	return eY(
		"g",
		{ transform: `translate(${i},-${o + 42})` },
		eY("path", {
			d: note,
			transform: "translate(10,10)",
			className: __default$e.path,
		}),
		eY("path", {
			d: note,
			transform: "translate(25,10)",
			className: __default$e.path,
		}),
		eY("path", {
			d: beam,
			transform: "translate(18,10)",
			className: __default$e.path,
		}),
		n &&
			eY("path", {
				d: beam,
				transform: "translate(18,15)",
				className: __default$e.path,
			}),
		eY("path", {
			d: note,
			transform: "translate(48,10)",
			className: __default$e.path,
		}),
		eY("path", {
			d: note,
			transform: "translate(63,10)",
			className: __default$e.path,
		}),
		(s || n) &&
			eY("path", {
				d: beam,
				transform: "translate(56,10)",
				className: __default$e.path,
			}),
		n &&
			eY("path", {
				d: "M8.8 0h7v3.5h-7z",
				transform: "translate(56,15)",
				className: __default$e.path,
			}),
		"8th" === t &&
			eY("path", {
				d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
				transform: "translate(63,10)",
				className: __default$e.path,
			}),
		!s && eY("text", { className: __default$e.text, x: 64, y: 0 }, 3),
		!s && eY("path", { className: __default$e.line, d: "M51 7V4h9m7 0h9v3" }),
		eY("path", {
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
	let { voice: t, beats: a, x: i, y: o, tremoloOffset: s } = e;
	if (t.hasSameRhythm) return null;
	let n = ev + s,
		r = n / 2,
		l = "",
		u = "",
		d = 0,
		p = [],
		h = [, , , ,],
		c = !1,
		m = 0;
	for (let e of a) {
		let t = e.layout.x;
		1 !== e.type &&
			(l +=
				2 === e.type
					? `M${i + t},${o + r + 2}v${r}`
					: `M${i + t},${o + 2}v${n}`);
		let s = 0,
			p = 8;
		if (
			(e.beamStart ? (c = !0) : e.beamStop && (c = !1), c && m < a.length - 1)
		) {
			let i = a[m + 1],
				o = Math.min(e.type, i.type);
			for (e.tupletStop && (o = Math.min(o, 8)); p <= o; ) {
				let a = h[s];
				a
					? (a.length += i.layout.x - e.layout.x)
					: ((a = { x: t, length: i.layout.x - e.layout.x }), (h[s] = a)),
					s++,
					(p *= 2);
			}
		}
		let f = s,
			g = s < d || e.tupletStop || e.beamStop;
		for (; s < d; s++, p *= 2) {
			let e = h[s];
			(h[s] = void 0),
				e && (l += `M${i + e.x},${o + n - e_ * s}v2h${e.length}v-2z`);
		}
		for (; p <= e.type; s++, p *= 2)
			l += `M${i + t},${o + n - e_ * s}v2h${g ? "-7" : "7"}v-2z`;
		if (
			(e.dotted &&
				1 !== e.type &&
				(l += `M${i + t + 4},${o + n - e_ * s}v2h2v-2z`),
			e.tremolo)
		)
			for (let a = 0; a < e.tremolo.type; a++)
				u += `M${i + t - 5},${o + 6 + 3 * a}l10-3z`;
		(d = f), m++;
	}
	if (l.length) {
		let e = `voice${t.index}`;
		p.push(e4("path", { className: __default$d[e], d: l }));
	}
	if (u.length) {
		let e = `voice${t.index}-tremolo`;
		p.push(e4("path", { className: __default$d[e], d: u }));
	}
	return p.length ? e4(eK, { children: p }) : null;
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
			voice: a,
			start: i,
			stop: o,
			platform: s,
			x: n,
			y: r,
			tremoloOffset: l,
		} = e,
		u = i.layout.x + n,
		d = o.layout.x - i.layout.x,
		p = Math.round(d / 2),
		h = t > 9 ? 8 : 5,
		c = `M 0,0 L 0,6 ${p - h},6 M ${p + h},6 L ${d},6 ${d},0`;
	r += eb - 2 + l;
	let m = `voice${a.index}`;
	return e4("g", {
		className: __default$c[m],
		transform: `translate(${u},${r})`,
		children: [
			e4("text", {
				className: __default$c.text,
				x: p,
				y: TEXT_OFFSET(s),
				children: t,
			}),
			e4("path", { className: __default$c.path, d: c }),
		],
	});
}
let path$1 = "Chi2a3",
	text = "Chi2up",
	__default$b = { path: "Chi2a3", text: "Chi2up" };
function AlternateEnding(e) {
	let { layer: t, alternateEnding: a } = e.alternateEnding;
	if (t) {
		let { x1: i, x2: o, y: s } = t,
			n = o - i,
			r = e.x;
		return e.isFirstLayout
			? eY(
					"g",
					{ transform: `translate(${r},${-1 * s - 14})` },
					eY(
						"text",
						{ className: __default$b.text, x: 4, y: "14" },
						a.join(",")
					),
					eY("path", {
						className: __default$b.path,
						d: `M 1,14 L 1,0 ${n - 6},0`,
					})
			  )
			: eY(
					"g",
					{ transform: `translate(${r},${-1 * s - 14})` },
					eY("path", { className: __default$b.path, d: `M 1,0 L ${n - 6},0` })
			  );
	}
	return null;
}
let marker = "kw1ty",
	__default$a = { marker: "kw1ty" };
function Marker(e) {
	let { marker: t, x: a } = e,
		i = t.layer;
	return i
		? e4("text", {
				className: __default$a.marker,
				x: a,
				y: -1 * i.y,
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
	let { line: t, x: a } = e,
		{ intervalSize: i } = t.layout,
		o = (t.strings - 1) * i;
	return eY(
		"g",
		{ className: "Rep", transform: `translate(${a},0)` },
		eY("rect", { className: __default$9.rect, width: 4, height: o }),
		eY("path", { className: __default$9.path, d: `M 8,0 L 8,${o}` }),
		eY("ellipse", {
			className: __default$9.dot,
			cx: 13,
			cy: Math.floor(o / 3),
			rx: 2,
			ry: 2,
		}),
		eY("ellipse", {
			className: __default$9.dot,
			cx: 13,
			cy: Math.floor((2 * o) / 3),
			rx: 2,
			ry: 2,
		})
	);
}
function RepriseEnd(e) {
	let { line: t, measureLayout: a, x: i } = e,
		{ intervalSize: o } = t.layout,
		s = (t.strings - 1) * o,
		n = a.measure.repeat;
	return eY(
		"g",
		{ transform: `translate(${a.width - 18 + i},0)` },
		n > 2 &&
			eY("text", { className: __default$9.number, x: 2.5, y: -2 }, n + "x"),
		eY("rect", { className: __default$9.rect, x: 14, width: 4, height: s }),
		eY("path", { className: __default$9.path, d: `M 11,0 L 11,${s}` }),
		eY("ellipse", {
			className: __default$9.dot,
			cx: 6,
			cy: Math.floor(s / 3),
			rx: 2,
			ry: 2,
		}),
		eY("ellipse", {
			className: __default$9.dot,
			cx: 6,
			cy: Math.floor((2 * s) / 3),
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
			line: a,
			part: i,
			slicingMode: o,
			measureEditorData: s,
			measureFingering: n,
			platform: r,
		} = e,
		l = t.measure,
		u = t.x,
		d = t.lineLayout.intervalSize,
		p = Y(l) === t,
		h = e$(l) === t,
		c = [];
	if (p) {
		void 0 !== e.platform &&
			c.push(
				e4(
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
				c.push(e4(RepriseStart, { line: a, x: u }, "repeatStart"));
		let t = l.tripletFeelWithLayer;
		t && c.push(e4(TripletFeel, { tripletFeel: t, x: u }, "tripletFeel"));
	}
	for (let e of (h &&
		l.repeat &&
		c.push(e4(RepriseEnd, { line: a, measureLayout: t, x: u }, "repeat")),
	t.alternateEndingWithLayer &&
		c.push(
			e4(
				AlternateEnding,
				{ alternateEnding: t.alternateEndingWithLayer, isFirstLayout: p, x: u },
				"alternateEnding"
			)
		),
	p &&
		l.markerWithLayer &&
		c.push(e4(Marker, { marker: l.markerWithLayer, x: u }, "marker")),
	t.tempoLayouts.values())) {
		let { tempo: t, layer: a } = e;
		t &&
			a &&
			c.push(
				e4(
					"g",
					{
						className: __default$8.tempo,
						transform: `translate(${a.x1},${-1 * a.y})`,
						children: [
							e4("use", { xlinkHref: "#tempo" }),
							e4("text", {
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
		let t = n?.voices[0].beats;
		c.push(
			e4(
				Beat,
				{
					layout: e,
					part: i,
					measure: l,
					slicingMode: o,
					x: u,
					measureEditorData: s,
					measureFingerings: t,
					platform: r,
				},
				`beat${m}`
			)
		),
			m++;
	}
	if (p && l.hasSignature) {
		let e = Math.floor((i.strings / 2) * d);
		c.push(
			e4(
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
				e4(
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
			i = d * a.strings;
		for (let o of l.voices)
			if (!(o.hasSameRhythm || o.rest)) {
				let s = t.beatsLayouts
						.map((e) => e.beats.find((e) => e.voice == o.index))
						.filter(Boolean),
					n = a.rhythmEffects.tremolo.get(o.index) || !1,
					l = a.rhythmEffects.tremolo.get(o.index) || !1,
					d = s.some((e) => e.type > 8),
					p = n && d ? ex : 0,
					h = l ? ew : 0,
					m = p + h,
					f = i + o.index * (eb + m);
				c.push(
					e4(
						Rhythm,
						{ voice: o, beats: s, x: u, y: f, tremoloOffset: p },
						`rhythm${o.index}`
					)
				),
					(i = f);
				let g = 0,
					y = null;
				for (let t of s)
					t &&
						(t.tupletStart && ((g = t.tuplet), (y = t)),
						g &&
							y &&
							t.tupletStop &&
							(c.push(
								e4(
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
	return e4(eK, { children: c });
}
let drawLineWithSpaces = (e, t) => e + `H${t.x}m${t.w},0`;
function Strings(e) {
	let { line: t, hasTuning: a, slicingMode: i, part: o } = e,
		{ intervalSize: s } = t.layout,
		n = t.spaces,
		r = s * (t.strings - 1),
		l = "",
		u = t.layout.measureLayouts;
	for (let e = a ? 1 : 0; e < u.length; e++) {
		let t = u[e];
		Y(t.measure) === t && (l += `M${t.x},0v${r}`);
	}
	let d = u[0].x,
		p = i.stringLineMaxX(t);
	if (o.usedDrums && o.isDrumStdOn)
		for (let e = 0; e < t.strings; e++) l += `M${d},${s * e} H${p}`;
	else
		for (let e = 0; e < t.strings; e++)
			l += `M${d},${s * e}` + n[e].reduce(drawLineWithSpaces, "") + `H${p}`;
	let h = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
	return (
		e$(h.measure) === h && (l += `M${p},0v${r}`),
		e4("path", { className: Z.strings, d: l })
	);
}
let tuning = "D38xz",
	__default$7 = { tuning: "D38xz" },
	LEFT_OFFSET$1 = platformVar(5);
function Tuning(e) {
	let { tuning: t, platform: a, intervalSize: i } = e;
	return t
		? eY(
				eK,
				null,
				eT(t, !1).map((e, t) =>
					eY(
						"text",
						{
							x: LEFT_OFFSET$1(a),
							y: 1 + t * i,
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
	Line = eQ((e) => {
		let {
				inlineDefs: t,
				line: a,
				noPadding: i,
				part: o,
				tuning: s,
				slicingMode: n,
				lazy: r,
				tabEditorData: l,
				fingerings: u,
				platform: d,
			} = e,
			p = n.expectedSliceWidth(a.layout.unscaledWidth) + (i ? 0 : eC),
			{ intervalSize: h } = a.layout,
			c = "http://www.w3.org/2000/svg",
			m = a.layout.height,
			f = i ? 0 : -eC / 2,
			g = `${f} -${a.layout.layers.height} ${p} ${m}`;
		if (!d) {
			let [e, t] = eZ(a.index < 5),
				i = e1();
			if (
				(e0(() => {
					if (r && !e)
						try {
							let e = new IntersectionObserver(
								(e) => {
									e[0].isIntersecting && t(!0);
								},
								{ rootMargin: "0px 0px 500px 0px" }
							);
							return i.current && e.observe(i.current), () => e.disconnect();
						} catch (e) {
							requestAnimationFrame(() => t(!0));
						}
				}, [e, r]),
				r && !e)
			)
				return e4(
					"svg",
					{
						xmlns: c,
						version: "1.1",
						ref: i,
						width: p,
						viewBox: g,
						className: __default$6.line,
					},
					"line-stub" + a.index
				);
		}
		let y = a.capo,
			_ = !!y && !d,
			v = !!s;
		return e4(
			"svg",
			{
				xmlns: c,
				version: "1.1",
				width: p,
				viewBox: g,
				className: __default$6.line,
				children: [
					t && e4(Defs, { part: o, line: a }),
					v && e4(Tuning, { tuning: s, platform: d, intervalSize: h }),
					_ && e4(tg, y),
					e4(Strings, { line: a, hasTuning: v, slicingMode: n, part: o }),
					...a.hangingText.map((e, t) =>
						e4(BeatText, { text: e, layout: void 0, xoffset: 0 }, t.toString())
					),
					e4(Effects, { line: a }),
					...a.layout.measureLayouts.map((e) =>
						e4(
							Measure,
							{
								measureLayout: e,
								line: a,
								part: o,
								slicingMode: n,
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
			"line" + a.index
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
		let { enabled: t, onDragStart: a, onDrag: i } = e,
			o = eJ(null),
			s = eJ(!1),
			n = (e) => {
				document.addEventListener("mousemove", l),
					document.addEventListener("mouseup", r),
					clearTimeout(o.current),
					(o.current = setTimeout(() => {
						s.current = !0;
					}, 100)),
					a(e);
			},
			r = () => {
				document.removeEventListener("mousemove", l),
					document.removeEventListener("mouseup", r),
					(s.current = !1);
			},
			l = (e) => {
				t && s.current && i(e);
			};
		return (
			e0(
				() => (
					document.addEventListener("mousedown", n),
					() => document.removeEventListener("mousedown", n)
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
class NoteEditor extends eG {
	formClick = (e) => {
		e.preventDefault();
	};
	keyHandler = (e) => {
		let { tabEditor: t, dispatch: a } = this.props;
		if (updateTimer && 1 === t.fret.length && "0" !== t.fret) {
			let i = `${t.fret}${e}`;
			if ((cancelTimer(), 24 >= +i)) {
				a("tabEditor/changeNote", { newFret: i });
				return;
			}
		}
		a("tabEditor/changeNote", { newFret: e }),
			(updateTimer = setTimeout(() => (updateTimer = null), 1e3));
	};
	moveNote = (e) => {
		let { scale: t, dispatch: a } = this.props;
		a("tabEditor/moveNote:shortcut", { scale: t, direction: e });
	};
	moveNoteViaDrag(e) {
		let { scale: t, dispatch: a } = this.props;
		a("tabEditor/moveNote:dnd", { scale: t, newString: e });
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
		let { scale: t, dispatch: a } = this.props;
		a("tabEditor/formMove", { scale: t, direction: "up" });
	};
	onDown = (e) => {
		e.preventDefault(), e.stopPropagation();
		let { scale: t, dispatch: a } = this.props;
		a("tabEditor/formMove", { scale: t, direction: "down" });
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
		return t && eS(t, e);
	};
	onDragStart = (e) => {
		let t = this.getDragY(e);
		this.setState({ dragBaseY: t, prevString: this.getStringOnY(t) });
	};
	onDrag = ts((e) => {
		if (!e.clientX || !e.clientY) return;
		let t = this.getDragY(e),
			a = this.getStringOnY(t);
		if (void 0 === a) return;
		let i = a - this.state.prevString,
			o = Math.abs(i);
		0 !== o &&
			(this.setState({ dragBaseY: t, prevString: a }), this.moveNoteViaDrag(a));
	}, 50);
	constructor(e) {
		super(e);
		let { device: t } = e;
		(isMobileOs = k(t) || d(t.os) || S(t.os)),
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
			a = {
				top: e.formY - 1,
				left: e.formX + 2.5,
				display: e.positioned ? "block" : "none",
				transform: `scale(${t})`,
				transformOrigin: "left 0px",
			};
		0 !== e.voice && (a.color = "#868686"),
			e.fret !== e.originalFret && "" !== e.fret && (a.color = "#ff3130");
		let i = {
				top: e.formY + 31 * t,
				left: e.formX - 64 * t,
				display: e.positioned ? "flex" : "none",
				transform: `scale(${t})`,
				transformOrigin: "left 0px",
			},
			o = !this.props.tabEditor.positioned;
		return eY(
			eK,
			null,
			eY(
				"div",
				{
					id: "note-editor",
					className: __default$5.editor,
					style: a,
					tabIndex: -1,
					onMouseUp: this.formClick,
				},
				"" === e.fret && "" !== e.originalFret
					? eY(
							eK,
							{},
							e.originalFret,
							eY(
								"svg",
								{ className: __default$5.correction, width: 25, height: 23 },
								eY("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
							)
					  )
					: e.fret
			),
			eY(DragPolyfill, {
				enabled: o,
				onDragStart: this.onDragStart,
				onDrag: this.onDrag,
			}),
			isMobileOs &&
				eY(
					"div",
					{ className: __default$5.keyboard, style: i },
					eY(
						"button",
						{ className: __default$5.remove, onClick: this.onBackspace },
						"<-"
					),
					["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
						eY(
							"button",
							{
								key: e,
								className: __default$5.digit,
								onClick: this.onMobileKeyboard(e),
							},
							e
						)
					),
					eY(
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
function getShapePath(e, t, a) {
	let i = e / 2,
		o = rnd(i * a),
		s = rnd(i);
	return `M 0,${o}
     Q 0,0 ${s},0 q ${s},0 ${s},${o}
     v ${rnd(t - 2 * o)}
     q 0,${o} -${s},${o} q -${s},0 -${s},-${o}
     v -${rnd(t - 2 * o)}`;
}
function getMedPath(e, t, a, i, o, s, n) {
	let r = a * i,
		l = a * o,
		u = a * s,
		d = a * n,
		p = Math.atan2(r, a / 2),
		h = Math.sin(p),
		c = Math.cos(p),
		m = u * h,
		f = u * c,
		g = d * h,
		y = d * c;
	return `M ${rnd(e + f)},${rnd(t + m)}
     Q ${rnd(e)},${rnd(t)} ${rnd(e + l)},${rnd(t)}
     L ${rnd(e + a - l)},${rnd(t)}
     Q ${rnd(e + a)},${rnd(t)} ${rnd(e + a - f)},${rnd(t + m)}
     L ${rnd(e + a / 2 + y)},${rnd(t + r - g)}
     Q ${rnd(e + a / 2)},${rnd(t + r)} ${rnd(e + a / 2 - y)},${rnd(t + r - g)}
     z`;
}
function Cursor(e) {
	let { intervalSize: t, strings: a, defs: i } = e,
		{ player: o, route: s } = c("player", "route"),
		n = !(o.canPlay || s.isPanel),
		r = 1 * ek,
		l = getMedPath((ek - r) / 2, 0.33 * ek, r, 0.95, 0.45, 0.6, 0.3),
		u = getShapePath(ek, (a - 1) * t + (eM + eP), 1.3),
		d = n ? __default$4.loading : __default$4.normal;
	return (
		e.hide && (d = __default$4.hide),
		e4("g", {
			ref: this.props.setRef,
			class: d,
			children: [
				i &&
					e4("defs", {
						children: e4("filter", {
							id: "CursorShadow",
							x: "-40%",
							width: "180%",
							children: [
								e4("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 2 }),
								e4("feOffset", { dx: 0, dy: 2 }),
							],
						}),
					}),
				e4(
					"path",
					{ class: __default$4.shadow, filter: "url(#CursorShadow)", d: u },
					"shadow"
				),
				e4("path", { class: __default$4.body, d: u }, "body"),
				e4("path", { class: __default$4.icon, d: l }, "path"),
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
	let { x: t, layout: a, handle: i } = e,
		o = a.measureLayout.lineLayout,
		s = o.layers.height - eL + eN - 10,
		n = eE(o) - 20,
		r = `translate(${"left" === i ? t - 1 : t},${-s})`,
		l = "left" === i ? "matrix(-1,0,0,1,1,0)" : "",
		u = Math.floor(n / 2);
	return e4("g", {
		className: __default$3.loop,
		transform: r,
		"data-loop-handle": i,
		children: [
			e4("path", {
				d: `M0 ${u - 12}q15 0 15 12t-15 12m1 0v${u - 12}h-2 v-${n}h2z`,
				className: __default$3.shape,
				transform: l,
			}),
			e4("path", {
				d: `M8 ${u - 4.5}l-4.5 4.5l4.5 4.5`,
				className: __default$3.icon,
				transform: l,
			}),
			e4("rect", {
				x: -10,
				y: -1,
				height: n,
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
	scroll(e, t, a) {
		if (
			(this.scrollId &&
				(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
			HAS_SMOOTH_SCROLL)
		)
			window.scrollTo({ left: 0, top: e, behavior: t ? "auto" : "smooth" });
		else {
			let i =
				a ||
				(window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY);
			if (t || 5 >= Math.abs(e - i)) window.scrollTo(0, e);
			else {
				(this.y = e), (this.startY = i), (this.startTime = tn());
				let t = window.requestAnimationFrame;
				this.scrollId = t(this.animationLoop);
			}
		}
	}
	animationLoop = () => {
		let e = ease(Math.min((tn() - this.startTime) / 100, 1)),
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
	let { tab: t, tuningButton: a } = e,
		{ device: i } = c("device"),
		o = 0,
		s = 0;
	if (t && a) {
		let e = t.getBoundingClientRect(),
			i = a.getBoundingClientRect();
		(o = i.left - e.left + i.width + 21),
			(s = i.top - e.top - (23 - i.height) - 14.5) < 2 && (s = 2);
	}
	return d(i.os) || S(i.os) || k(i)
		? eY(AppPopup, {
				title: "Pitch Shift",
				device: i,
				leftOffset: o,
				topOffset: s,
				feature: "pitch shift",
		  })
		: eY(tc, {
				title: "Pitch Shift",
				classPrefix: "pitchshift",
				leftOffset: o,
				topOffset: s,
		  });
}
async function getBoundingClientRect(e) {
	return "IntersectionObserver" in window
		? new Promise((t) => {
				let a = new IntersectionObserver((e) => {
					a.disconnect(), t(e[0].boundingClientRect);
				});
				a.observe(e);
		  })
		: e.getBoundingClientRect();
}
let tablature = "D28105",
	tablatureTest = "D28105 D28329",
	tablatureFree = "D28105 D28iz",
	tablatureFreeTest = "D28105 D28329 D282l",
	handlersLine = "D281b5",
	handlers = "D281qz",
	lineWrap = "D2820n",
	__default$2 = {
		tablature: "D28105",
		tablatureTest: "D28105 D28329",
		tablatureFree: "D28105 D28iz",
		tablatureFreeTest: "D28105 D28329 D282l",
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
	let a = e.measureLayout,
		i = t.measureLayout;
	return a !== i
		? a.lineLayout !== i.lineLayout || a.measure.index + 1 !== i.measure.index
		: e.x >= t.x;
}
let isPlaying = (e) => e.player.shouldPlay && e.player.canPlay;
class CursorProvider extends eG {
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
		let a = t.part !== e.part || t.lines !== e.lines,
			i = t.cursor.position !== e.cursor.position;
		(a || i) &&
			((this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0));
		let o =
			e.print ||
			a ||
			i ||
			t.player.speed !== e.player.speed ||
			t.player.type !== e.player.type ||
			t.player.pitchShift !== e.player.pitchShift ||
			isPlaying(t) !== isPlaying(e);
		if (o) {
			let a = this.animationSeek;
			isPlaying(e)
				? (a = isPlaying(t) ? this.animationRestart : this.animationPause)
				: isPlaying(t) && (a = this.animationPlay),
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
	applyTransform(e, t) {
		let a = `translate3d(${e - ek / 2}px, ${-eM}px, 0)`,
			i = this.props.refs.current;
		if (i) {
			let e = i[t.line.index];
			if ((e && (e.style.transform = a), this.state.lineLayout != t)) {
				if (this.state.lineLayout) {
					let e = i[this.state.lineLayout.line.index];
					e && (e.style.visibility = "hidden");
				}
				e && (e.style.visibility = "visible"), this.setState({ lineLayout: t });
			}
		}
	}
	applyCursorCoordinates(e) {
		let t;
		let { layout: a, nextLayout: i, layoutTimestamp: o } = this;
		if (i && shouldJump(a, i)) {
			let e = a.absoluteLoopRightX - a.absoluteX,
				s = i.absoluteX - i.absoluteLoopLeftX,
				n = (a.duration * e) / (e + s),
				r = a.duration - n;
			t = (t) => {
				let l = t - o;
				l < n
					? this.applyTransform(
							a.absoluteX + (e * l) / n,
							a.measureLayout.lineLayout
					  )
					: this.applyTransform(
							i.absoluteLoopLeftX + (s * (l - n)) / r,
							i.measureLayout.lineLayout
					  );
			};
		} else {
			let e = i
				? i.absoluteX - a.absoluteX
				: a.absoluteLoopRightX - a.absoluteX;
			t = (t) => {
				this.applyTransform(
					a.absoluteX + (e * (t - o)) / a.duration,
					a.measureLayout.lineLayout
				);
			};
		}
		return t(e), t;
	}
	updateCurrentTempo(e) {
		let t = this.props.part.tempos;
		if (t.length) {
			let a = (a) =>
				t[a].timestamp <= e && (a === t.length - 1 || e < t[a + 1].timestamp);
			this.tempoIndex >= t.length && (this.tempoIndex = 0),
				a(this.tempoIndex) ||
					((this.tempoIndex = t.findIndex((e, t) => a(t))),
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
			let t = eB(this.props.part, e),
				{ timeline: a, timestamps: i } = this.props.part;
			(this.layoutTimestamp = i[t]),
				(this.layout = a.get(this.layoutTimestamp));
			let o = t < i.length - 1 ? i[t + 1] : null,
				s = this.props.cursor.position.loopEnd;
			return (
				0 !== s &&
					(null === o || o >= s - 1e-15) &&
					(o = this.props.cursor.position.loopStart),
				(this.nextLayout = null !== o ? a.get(o) : null),
				!0
			);
		}
		return !1;
	}
	findLineLayoutUnderCursor(e) {
		let t =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
			a = eB(this.props.part, e, t),
			{ timeline: i, timestamps: o } = this.props.part,
			s = i.get(o[a]);
		return s.measureLayout.lineLayout;
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
		let a = this.applyCursorCoordinates(t),
			i = null,
			o = () => {
				let e = this.layout.absoluteLoopRightX - this.layout.absoluteX,
					t = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
					a = ((this.layout.duration * e) / (e + t)) * 0.8;
				return (i = (e) =>
					!!this.layout &&
					!!this.nextLayout &&
					e - this.layoutTimestamp > a &&
					(this.props.ensureLineVisibility(
						this.layout.measureLayout.lineLayout,
						this.nextLayout.measureLayout.lineLayout,
						!1
					),
					(i = null),
					!0));
			};
		(this.nextLayout && shouldJump(this.layout, this.nextLayout) && o()(t)) ||
			this.props.ensureLineVisibility(
				null,
				this.layout.measureLayout.lineLayout,
				!1
			);
		let s = window.requestAnimationFrame,
			n = () => {
				try {
					if (
						(!e && this.props.player.audio.isPositionChanged() && (e = !0), e)
					) {
						let e = this.props.player.audio.getCursor();
						a && a(e),
							i && i(e),
							this.findLayoutUnderCursor(e) &&
								((a = this.applyCursorCoordinates(e)),
								this.nextLayout &&
									shouldJump(this.layout, this.nextLayout) &&
									o(),
								!this.nextLayout &&
									e >= eA(this.layout) - 1e-15 &&
									(this.stopPlayback(), (this.pause = !0))),
							this.updateCurrentTempo(e);
					}
					this.pause || (this.animationPlayId = s(n));
				} catch (e) {
					console.error(e);
				}
			};
		(this.pause = !1), (this.animationPlayId = s(n));
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
	let { line: t, slicingMode: a } = e,
		i = t.layout.height,
		o = a.expectedSliceWidth(t.layout.unscaledWidth) + eC,
		s = `${-eC / 2} -${t.layout.layers.height} ${o} ${i}`;
	return e4("svg", {
		width: o,
		xmlns: "http://www.w3.org/2000/svg",
		version: "1.1",
		height: i,
		viewBox: s,
		className: __default.lineControls,
		children: e.children,
	});
}
function LoopBackground(e) {
	let { leftLayout: t, rightLayout: a, line: i } = e,
		o = t.measureLayout.lineLayout,
		s = a.measureLayout.lineLayout,
		n = i.layout,
		r = __default$3.background,
		l = t.absoluteLoopLeftX - 1,
		u = a.absoluteLoopRightX,
		d = -n.layers.height + eL - eN;
	return o === s && o === n
		? e4("rect", {
				className: r,
				rx: 3,
				height: eE(o),
				x: l,
				y: d,
				width: u - l + 1,
		  })
		: o === n
		? e4("rect", {
				className: r,
				rx: 3,
				height: eE(o),
				x: l,
				y: d,
				width: o.maxX - l,
		  })
		: s === n
		? e4("rect", {
				className: r,
				rx: 3,
				height: eE(s),
				x: s.minX - 1,
				y: d,
				width: u - s.minX + 2,
		  })
		: e4("rect", {
				className: r,
				rx: 3,
				height: eE(n),
				x: n.minX - 1,
				y: d,
				width: n.maxX + 2,
		  });
}
class CursorErrorBoundary extends eG {
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
let LEFT_OFFSET = eC / 2,
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
function isInLoop(e, t, a) {
	return (
		t &&
		a &&
		t.measureLayout.lineLayout.line.index <= e.index &&
		e.index <= a.measureLayout.lineLayout.line.index
	);
}
function isLoopEdge(e, t) {
	return t && t.measureLayout.lineLayout.line == e;
}
class Tab extends eG {
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
			(this.scrollToCursor = S(e.device.os)
				? () => setTimeout(this.scrollToCursorBase, 250)
				: this.scrollToCursorBase);
	}
	componentDidMount() {
		window.addEventListener("resize", this.viewportResizeDebounced),
			this.viewportResize().then(this.scrollToCursor);
	}
	scrollToCursorBase = () => {
		if (this.tab) {
			let e = R(
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
	viewportResizeDebounced = e8(this.viewportResize, 100);
	static getDerivedStateFromProps(e, t) {
		let a = t.loopStartLayout,
			i = a && !t.activeLoopHandle ? a.absoluteLoopLeftX : t.loopStartX,
			o = t.loopEndLayout,
			s = o && !t.activeLoopHandle ? o.absoluteLoopRightX : t.loopEndX,
			{ tuning: n, instrumentId: r } = e.part,
			l = n && O(r, n),
			u = !1;
		(F(r) || H(r)) && l && 0 !== l.pitch && (u = !0);
		let d = e.position;
		return (
			0 !== d.loopStart || 0 !== d.loopEnd
				? ((a &&
						-1 !== a.occurrences.findIndex(equals(e.position.loopStart))) ||
						(i = (a = R(e.part, d.loopStart, "left")).absoluteLoopLeftX),
				  (o &&
						-1 !== o.occurrences.findIndex(equals(d.loopEnd - o.duration))) ||
						(s = (o = R(e.part, d.loopEnd, "right")).absoluteLoopRightX))
				: ((a = null), (i = 0), (o = null), (s = 0)),
			{
				loopStartLayout: a,
				loopStartX: i,
				loopEndLayout: o,
				loopEndX: s,
				isPitchshiftToStandard: u,
			}
		);
	}
	ensureLineVisibility = (e, t, a) =>
		eR(() => {
			let { showPitchshiftLayer: i } = this.props;
			if (this.props.lines.print) return;
			let o = window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY,
				s = this.props.lines.scale,
				n = eD(),
				r = this.props.videoIsReady ? 200 : 0,
				l = (n ? 48 : 0) + r,
				u = n ? 48 : 0,
				{ pageY: d, clientHeight: p } = this,
				h = o - d + l,
				c = o - d + p - u,
				m = c - h,
				f = t.line.index,
				g = this.props.lines;
			if (e && (e.maxY * s < h || c < e.y * s)) return;
			let y = o,
				{ loopStartLayout: _, loopEndLayout: v } = this.state;
			if (i) y = 0;
			else if (_ && v) {
				let e = t.y * s - h;
				if (e < 0) y = o + e;
				else if (
					((e = c - t.maxY * s) < 0 && (y = o - e),
					f < v.measureLayout.lineLayout.line.index)
				) {
					let a = g.lines[f + 1];
					if (a) {
						let i = t.y,
							n = a.layout.maxY;
						(n - i) * s < m && (e = c - n * s) < 0 && (y = o - e);
					}
				}
			} else if (0 === f) y = 0;
			else if (((y = t.y * s + d - l), f < g.lines.length - 1)) {
				let e = g.lines[f - 1],
					t = g.lines[f + 1];
				if (e && t) {
					let a = e.layout.y,
						i = t.layout.maxY;
					(i - a) * s < m && (y = a * s + d - l);
				}
			}
			y !== o && this.windowScroller.scroll(y, a, o);
		});
	onTouchStart = (e) => {
		if (isTouchable && "mousedown" === e.type) return;
		if ("tab_editor" === this.props.layer) {
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
		let a =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-loop-handle"),
			i = this.getTouchPoint(e);
		if (((this.lastTouch = i), "left" === a || "right" === a)) {
			if (
				(e.preventDefault(),
				e.stopPropagation(),
				this.props.dispatch("player/changeLoop", !0),
				this.setState((e) =>
					"left" === a
						? { activeLoopHandle: a, deltaLeftX: e.loopStartX - i.x }
						: { activeLoopHandle: a, deltaRightX: e.loopEndX - i.x }
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
				let a = {
					loopStartX: e.loopStartX,
					loopStartLayout: e.loopStartLayout,
					loopEndX: e.loopEndX,
					loopEndLayout: e.loopEndLayout,
				};
				{
					let { loopStartLayout: i, loopEndLayout: o } = a;
					if (!i || !o) throw Error("Wrong loop state");
					if ("left" === e.activeLoopHandle) {
						let s = { x: this.limitX(t.x + e.deltaLeftX), y: t.y },
							n = eI(this.props.lines.lines, s, "left"),
							r = eO(n),
							l = eO(o);
						r < l || (r === l && s.x <= o.absoluteLoopLeftX)
							? ((a.loopStartLayout = n), (a.loopStartX = s.x))
							: ((a.loopStartLayout = a.loopEndLayout),
							  (a.loopStartX = i.absoluteLoopLeftX));
					} else {
						let s = { x: this.limitX(t.x + e.deltaRightX), y: t.y },
							n = eI(this.props.lines.lines, s, "right"),
							r = eO(n),
							l = eO(i);
						r > l || (r === l && s.x >= i.absoluteLoopRightX)
							? ((a.loopEndLayout = n), (a.loopEndX = s.x))
							: ((a.loopEndLayout = a.loopStartLayout),
							  (a.loopEndX = o.absoluteLoopRightX));
					}
				}
				{
					let { loopStartLayout: t, loopEndLayout: i } = a;
					t &&
						i &&
						(t !== e.loopStartLayout || i !== e.loopEndLayout) &&
						this.props.dispatch("cursor/loop", {
							loopStartLayout: t,
							loopEndLayout: i,
							side: e.activeLoopHandle,
						});
				}
				return (this.lastTouch = null), a;
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
				a = calculateMovement(this.lastTouch, t);
			a < 7 &&
				(e.preventDefault(),
				this.setState((e) => {
					let a = {
							loopStartX: e.loopStartX,
							loopStartLayout: e.loopStartLayout,
							loopEndX: e.loopEndX,
							loopEndLayout: e.loopEndLayout,
						},
						i = this.props.position,
						o = eI(this.props.lines.lines, t);
					if (0 === i.loopStart && 0 === i.loopEnd)
						i = { cursor: eF(o), loopStart: 0, loopEnd: 0 };
					else {
						let e = eF(o),
							t = eH(o);
						if (i.loopStart <= e && e < i.loopEnd)
							i = { cursor: e, loopStart: i.loopStart, loopEnd: i.loopEnd };
						else if (i.loopStart <= t && t < i.loopEnd)
							i = { cursor: t, loopStart: i.loopStart, loopEnd: i.loopEnd };
						else {
							let t = o.measureLayout.measure.layouts,
								s = t[0].beatsLayouts,
								n = t[t.length - 1].beatsLayouts;
							(a.loopStartLayout = s[0]),
								(a.loopEndLayout = n[n.length - 1]),
								(a.loopStartX = a.loopStartLayout.absoluteLoopLeftX),
								(a.loopEndX = a.loopEndLayout.absoluteLoopRightX),
								(i = {
									cursor: e,
									loopStart: ez(a.loopStartLayout),
									loopEnd: ej(a.loopEndLayout),
								});
						}
					}
					return (
						this.props.dispatch("cursor/move", i),
						this.ensureLineVisibility(null, o.measureLayout.lineLayout, !1),
						a
					);
				})),
				(this.lastTouch = null);
		}
		unsubscribeOnPointerUp(document, this.onTouchEnd);
	};
	getTouchPoint(e) {
		let t = e.changedTouches ? e.changedTouches[0] : e,
			a = (t.pageX - this.pageX) / this.props.lines.scale,
			i = (t.pageY - this.pageY) / this.props.lines.scale;
		return { x: a, y: i };
	}
	handleTabEditor(e) {
		let t = this.getTouchPoint(e),
			a = eI(this.props.lines.lines, t),
			i = eS(a.measureLayout.lineLayout, t.y);
		this.props.setTabEditor({
			beatsLayout: a,
			stringNum: i,
			scale: this.props.lines.scale,
		});
	}
	refMain = (e) => {
		(this.tab = e),
			tt &&
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
				loopStartX: a,
				loopEndX: i,
				isPitchshiftToStandard: o,
			} = this.state,
			s = this.props.lines.lines,
			n = this.props.lines.scale,
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
				layer: g,
				tabEditorData: y,
				fingerings: _,
				videoIsOpened: v,
			} = this.props,
			b = s[0].layout.layers.height,
			$ = _ && _.partId === u.partId ? _.data : void 0,
			x = "tab_editor" === g,
			w = r ? __default$2.tablature : __default$2.tablatureTest,
			T = __default$2.tablatureFreeTest,
			C = !p && u.tuning && !v,
			S = !((d && !this.props.device.isDesktop) || r),
			k = eJ([]);
		return eY(
			eK,
			null,
			eY(
				"section",
				{
					id: "tablature",
					className: d ? w : T,
					"data-id": d ? eV : eX,
					role: "application",
					key: "main",
					ref: this.refMain,
				},
				0 !== n && x && eY(NoteEditor$1, { scale: n }),
				e4(ToastProvider, {
					device: this.props.device,
					children: e4(CursorErrorBoundary$1, {
						children: e4(CursorProvider$1, {
							print: r,
							part: u,
							lines: s,
							refs: k,
							ensureLineVisibility: this.ensureLineVisibility,
							children: s.map((s, n) =>
								e4("div", {
									className: __default$2.lineWrap,
									children: [
										e4(
											Line,
											{
												line: s,
												part: u,
												tuning: 0 === s.index && f,
												inlineDefs: 0 === s.index,
												slicingMode: l,
												tabEditorData: y,
												fingerings: $,
												lazy: S,
											},
											"line-" + s.index.toString()
										),
										e4(
											LineControls,
											{
												line: s,
												slicingMode: l,
												children: [
													C &&
														!r &&
														0 === n &&
														eY(TuningButton, {
															reference: this.refTuning,
															handlePitchshift: h,
															isPitchshiftToStandard: o,
															isActive: c || m,
															lock: !d,
														}),
													tt &&
														!r &&
														isInLoop(s, e, t) &&
														eY(LoopBackground, {
															leftLayout: e,
															rightLayout: t,
															line: s,
														}),
													tt &&
														!r &&
														isLoopEdge(s, e) &&
														e4(
															LoopShape,
															{ x: a, layout: e, handle: "left" },
															"left"
														),
													tt &&
														!r &&
														isLoopEdge(s, t) &&
														e4(
															LoopShape,
															{ x: i, layout: t, handle: "right" },
															"right"
														),
													e4(x ? BarNumbers : LearnMarkers, {
														line: s,
														partId: u.partId,
														songId: u.songId,
													}),
													!r &&
														e4(
															Cursor,
															{
																strings: u.strings,
																intervalSize: s.layout.intervalSize,
																defs: 0 === n,
																hide: x,
																setRef: (e) => {
																	k.current[n] = e;
																},
															},
															"cursor"
														),
												],
											},
											"ctrls-" + s.index.toString()
										),
									],
								})
							),
						}),
					}),
				}),
				eY(
					P,
					null,
					!p &&
						c &&
						eY(
							L,
							{ ...animationProps, key: "popup" },
							eY(RetunePopup, {
								tab: this.tab,
								tuningButton: this.tuningButton,
							})
						),
					!p &&
						m &&
						eY(
							L,
							{ ...animationProps, key: "layer" },
							eY(PitchShift$1, {
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
let hasPlusAccess = (e, t) => true || t.enabled,
	onTab = { onTab: !0 };
class AppTab extends eG {
	activateFingeringsExperiment = () => {
		let { dispatch: e, user: t, experiments: a } = this.props;
		true &&
			a.paid_fingerings?.status === "pending" &&
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
				demo: a,
				player: i,
				meta: o,
				part: s,
				cursor: n,
				screen: r,
				layer: { layer: l },
				device: u,
				route: d,
				isDeleted: p,
				tabEditor: h,
				fingerings: c,
				experiments: m,
				playAlongAd: f,
			} = this.props,
			g = d.isPanel,
			y = hasPlusAccess(t, a),
			_ = r.isSmall,
			v = eU(o),
			b = "saving" === h.status || "changes" === h.status,
			{ pitchShift: $ } = i,
			x = e5(
				() =>
					!!s.current &&
					!!s.current.tuning &&
					s.current.tuning.map((e) => e + $),
				[$, s]
			),
			w = o.allowedByLicense,
			T = !o.isFailed && !s.isFailed && w,
			C = T && !p && !!s.current && !!s.lines.lines.length,
			S = T && !p && (!s.current || !s.lines.lines.length),
			M = T && !y,
			P = T && !y && u.isPhone && C,
			L = !_ && !!s.videoPart && !k(u),
			N = i.videoOpened || f.isOpened,
			E = m.paid_fingerings?.segment,
			B = true && ("ut" === E || "on" === E);
		return eY(
			"section",
			{ className: eq.tablature, role: g ? "complementary" : "main" },
			eY(AlertManager, {
				meta: o,
				user: t,
				cursor: n,
				part: s,
				player: i,
				isDeleted: p,
			}),
			L &&
				eY(y ? YTPlayer$1 : YTPlayerDemo$1, {
					songId: s.songId,
					handlePlayVideo: this.props.handlePlayVideo,
					handlePauseVideo: this.props.handlePauseVideo,
				}),
			eY(_ ? MobileControls : Controls, {
				...this.props,
				shouldPlay: i.shouldPlay,
				canPlay: i.canPlay || g,
				track: v,
				device: u,
				layer: l,
				plusAccess: y,
				fingeringsEnabled: B,
				fingeringsStatus: c.status,
				fingeringsActive: c.shown,
				loop: 0 !== n.position.loopEnd,
				type: i.type,
				speed: i.speed,
				pitchShift: i.pitchShift,
				pitchShiftAvailable: !s.current || !!s.current.tuning,
				isCountin: i.isCountin,
				isMetronome: i.isMetronome,
				metronomeType: i.metronomeType,
				tadEditorWarning: b,
				usedDrums: s.current && s.current.usedDrums,
				videoIsOpened: i.videoOpened,
				fingeringsOnActivate: this.activateFingeringsExperiment,
			}),
			M && eY(tM, { key: `tab-showroom-${o.songId}`, songId: o.songId }),
			eY(
				"section",
				{ class: eq.pane, key: `tab-${o.songId}` },
				S && eY(tk, { key: `loading-${o.songId}` }),
				C &&
					e4(
						Tab,
						{
							key: `tab-${o.songId}-${s.current.partId}`,
							dispatch: e,
							store: this.props.store,
							part: s.current,
							lines: s.lines,
							isSmallScreen: _,
							plusAccess: y,
							shouldPlay: i.shouldPlay,
							position: n.position,
							handlePitchshift: this.props.handlePitchshift,
							showPitchshiftPopup: "plus_pitchshift" === l,
							showPitchshiftLayer: "pitchshift" === l,
							tuning: x,
							layer: l,
							tabEditorData: h.data,
							setTabEditor: this.setTabEditor,
							fingerings: c.shown && c.trackFingering,
							device: u,
							isLoggedIn: t.isLoggedIn,
							videoIsReady: N,
							videoIsOpened: i.videoOpened,
						},
						s.lines.hash
					)
			),
			P &&
				eY(ShowroomBottom, {
					key: `bottom-showroom-${o.songId}-${s.current.partId}`,
				}),
			C && eY(tS, { withAds: M, device: u, copyright: !0 })
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
	"isDeleted",
	"tabEditor",
	"fingerings",
	"playAlongAd"
);
export { AppTab$1 as default };
