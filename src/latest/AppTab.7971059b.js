let updateTimer, isMobileOs;
import {
	P as e,
	w as t,
	x as a,
	y as i,
	z as o,
	B as s,
	E as n,
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
	U as $,
	V as b,
	W as x,
	f as T,
	X as w,
	Y as C,
	L as S,
	k as k,
	d as M,
	Z as L,
	$ as P,
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
	aa as q,
	ab as U,
	ac as G,
	ad as Y,
	ae as K,
	af as W,
	p as J,
	ag as Z,
	ah as Q,
	ai as ee,
	aj as et,
	ak as ea,
	al as ei,
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
	aB as e$,
	aC as eb,
	aD as ex,
	aE as eT,
	aF as ew,
	aG as eC,
	aH as eS,
	aI as ek,
	aJ as eM,
	aK as eL,
	aL as eP,
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
	a_ as eq,
	a$ as eU,
	b0 as eG,
	b1 as eY,
	b2 as eK,
	b3 as eW,
	b4 as eJ,
	b5 as eZ,
	b6 as eQ,
	b7 as e1,
	b8 as e2,
	b9 as e0,
	ba as e5,
	bb as e3,
	bc as e4,
	c as e7,
} from "./index.e8b15340.js";
import {
	d as e8,
	a as e6,
	T as e9,
	c as te,
	_ as tt,
	p as ta,
	R as ti,
	e as to,
	B as ts,
	h as tn,
	F as tr,
	j as tl,
	o as tu,
} from "./preact.bf58aca5.js";
import {
	a as td,
	s as tp,
	b as th,
	_ as tc,
	d as tm,
	F as tf,
	P as tg,
	S as ty,
	e as t_,
	C as tv,
} from "./Capo.59ab477e.js";
import { g as t$, a as tb } from "./gplay.79326319.js";
import { I as tx, _ as tT } from "./Input.bba300bf.js";
import { A as tw } from "./ActionButton.45f3bd1f.js";
import { t as tC, a as tS } from "./UploadRevisionForm.module.d3c3c9f7.js";
import {
	N as tk,
	a as tM,
	A as tL,
	L as tP,
	S as tN,
} from "./AppFooter.cae370b7.js";
import { S as tE } from "./SWW.911611bf.js";
class MixerButton extends e8 {
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
		return e6(
			"button",
			{
				className: a ? td.active : td.button,
				onClick: t,
				id: "control-mixer",
				"aria-haspopup": !0,
				"aria-pressed": a,
			},
			e6(
				"svg",
				{
					className: td.icon,
					width: 55,
					height: 55,
					viewBox: "-4 -4 55 55",
					role: "img",
					"aria-labelledby": r,
				},
				e6("title", { id: r }, a && o ? o : i),
				e6("circle", { className: td.tag, cx: "7", cy: "39", r: "6" }),
				e6("circle", {
					className: td.circle,
					cx: "22.5",
					cy: "22.5",
					r: "22.5",
					filter: "url(#svg_shadow)",
				}),
				e6(e, {
					className: td.shape,
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
class Speed extends e8 {
	constructor(e) {
		super(e);
		let t = e.player.speed,
			o = a(t, e.player.tempo);
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
		if (t.mirrorSpeed !== e.player.speed || t.mirrorTempo !== e.player.tempo) {
			let o = e.player.speed,
				s = a(o, e.player.tempo);
			return {
				speed: o,
				tempo: s,
				position: i(o),
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
	onResize = o(() => this.setState(this.getPageCoordinates), 250);
	getNewPosition(e) {
		let t = s((100 * e.x) / e.w);
		return n(t, this.props.player.tempo);
	}
	handleFaster = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => r(e.speed, e.tempo, e.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	handleSlower = (e) => {
		e.preventDefault(),
			this.setState(
				(e) => l(e.speed, e.tempo, e.position, this.props.player.tempo),
				() => {
					this.dispatchSpeed(this.state.speed);
				}
			);
	};
	dispatchSpeed = (e) => {
		u(this.props.store, e);
	};
	getTouchPoint(e) {
		let { rulerX: t, rulerY: a, rulerW: i } = this.state;
		if (null === t || null === a || null === i) {
			let o = this.getPageCoordinates();
			this.setState(o), (t = o.rulerX), (a = o.rulerY), (i = o.rulerW);
		}
		let s = e.changedTouches ? e.changedTouches[0] : e;
		return { x: Math.max(Math.min(s.pageX - t, i), 0), w: i, y: s.pageY - a };
	}
	onTouchStart = (e) => {
		let t = this.getTouchPoint(e);
		if (((this.lastTouch = t), e.preventDefault(), !this.onTouchMoveTickId)) {
			let a = window.requestAnimationFrame;
			this.onTouchMoveTickId = a(this.onTouchMoveTick);
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
		let a = window.requestAnimationFrame;
		this.onTouchMoveTickId = a(this.onTouchMoveTick);
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
			(t) => d(t.speed, t.tempo, t.position, this.props.player.tempo, e),
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
		return e6(
			"div",
			{ className: __default$M.speed, role: "dialog", "aria-label": "Speed" },
			e6(
				"div",
				{ className: t },
				e6(
					"button",
					{
						onClick: this.bpmMinus,
						onKeyDown: this.bpmMinusPress,
						title: "Alt+A",
					},
					e6(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 2" },
						e6("rect", {
							y: "2",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 2)",
						})
					)
				),
				e6(
					"span",
					{ className: __default$M.speedLabel, "aria-label": "Tempo" },
					this.state.tempo.bpm,
					" bpm"
				),
				e6(
					"button",
					{
						onClick: this.bpmPlus,
						onKeyDown: this.bpmPlusKeyPress,
						title: "Alt+S",
					},
					e6(
						"svg",
						{ width: 12, height: 12, viewBox: "0 0 12 12" },
						e6("rect", { x: "5", width: "2", height: "12" }),
						e6("rect", {
							y: "7",
							width: "2",
							height: "12",
							transform: "rotate(-90 0 7)",
						})
					)
				)
			),
			e6(
				"div",
				{
					className: __default$M.pane,
					title: "You can use arrow keys",
					ref: this.refWrap,
				},
				e6(
					"label",
					{ className: __default$M.caption25 },
					e6("span", null, "25%")
				),
				e6(
					"label",
					{ className: __default$M.caption50 },
					e6("span", null, "50%")
				),
				e6(
					"label",
					{ className: __default$M.caption75 },
					e6("span", null, "75%")
				),
				e6(
					"label",
					{ className: __default$M.caption100 },
					e6("span", null, "100%")
				),
				e6(
					"label",
					{ className: __default$M.caption125 },
					e6("span", null, "125%")
				),
				e6(
					"label",
					{ className: __default$M.caption150 },
					e6("span", null, "150%")
				),
				e6(
					"label",
					{ className: __default$M.caption175 },
					e6("span", null, "175%")
				),
				e6(
					"div",
					{ className: __default$M.ruler, ref: this.refRuler },
					e6(
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
						e6("div", { className: e })
					)
				)
			)
		);
	}
}
var Speed$1 = t(Speed, "player");
let popup$4 = "Cvj28d",
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
	let d = {};
	void 0 !== o &&
		void 0 !== s &&
		((d = { top: `${s}px`, left: `${o}px` }), (u = __default$L.popupLeftTop));
	let c = "subscribe in the app";
	p(r.os) && (c = "buy in the app");
	let m = `${t} ${c}`,
		f = p(r.os);
	return e6(
		"div",
		{ role: "dialog", className: u, style: d },
		(function (e, t, a) {
			for (
				var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
				s < i;
				s++
			)
				o[s - 3] = arguments[s];
			return e6(
				h,
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
			e6(
				"div",
				null,
				e6("div", { className: __default$L.title }, t),
				e6("div", { className: __default$L.text }, c)
			),
			f
				? e6("img", { src: t$, width: 160, height: 47, alt: "Google Play" })
				: e6("img", { src: tb, width: 160, height: 53, alt: "AppStore" })
		)
	);
}
function IconStubPopup() {
	return e6(
		"svg",
		{ width: 54, height: 54, viewBox: "0 0 54 54" },
		e6("path", {
			d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
			fill: "#F1452D",
		}),
		e6("path", {
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
	__default$K = {
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
		? __default$K.horizontalPopup
		: t
		? __default$K.verticalLeftPopup
		: __default$K.verticalPopup;
}
function StubPopup(e) {
	let { title: t, left: a, horizontal: i } = e,
		{ dispatch: o } = m(),
		s = e9(() => {
			o("layer/hide");
		}, [o]);
	return e6(
		"div",
		{ className: getClassName(i, a), role: "dialog" },
		e6(
			"div",
			{
				className: __default$K.link,
				"aria-label": `${t} mode has no effect`,
				onClick: s,
			},
			e6("span", { className: __default$K.wrapper }, e6(IconStubPopup, null)),
			e6(
				"div",
				{ className: __default$K.text },
				"This song has only one",
				e6("br", null),
				`instrument track. ${t}`,
				e6("br", null),
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
		e6("path", {
			d: "M37 22.04v5.92a.5.5 0 0 0 .812.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.5.5 0 0 0-.812.39Z",
		}),
	ArrowRight = () =>
		e6("path", {
			d: "M10 22.04v5.92a.5.5 0 0 1-.812.39l-3.7-2.96a.5.5 0 0 1 0-.78l3.7-2.96a.5.5 0 0 1 .812.39Z",
		}),
	ArrowDown = (e) =>
		e6("path", {
			d: "M26.13 22h-5.26a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508a.5.5 0 0 0-.433-.752Z",
			...e,
		}),
	ArrowUp = (e) =>
		e6("path", {
			d: "M26.13 10h-5.26a.5.5 0 0 1-.431-.752l2.63-4.508a.5.5 0 0 1 .863 0l2.63 4.508a.5.5 0 0 1-.433.752Z",
			...e,
		}),
	EditorHelp = (e) => {
		let { allowNoteMove: t } = e;
		return e6(
			te,
			null,
			e6(
				"div",
				{ className: __default$J.editorHelp },
				e6(
					"div",
					null,
					e6("div", { className: __default$J.title }, "Click a note to edit."),
					e6(
						"div",
						{ className: __default$J.part },
						e6("p", null, "Navigate with"),
						e6(
							"div",
							{ className: __default$J.shortcut },
							e6(
								"svg",
								{ className: __default$J.navigation, width: 47, height: 33 },
								e6("rect", { x: 16 }),
								e6("rect", { x: 16, y: 17 }),
								e6("rect", { x: 32, y: 17 }),
								e6("rect", { y: 17 }),
								e6(ArrowUp, null),
								e6(ArrowLeft, null),
								e6(ArrowRight, null),
								e6(ArrowDown, null)
							)
						)
					),
					e6("div", { className: __default$J.delimiter }),
					e6(
						"div",
						{ className: __default$J.part },
						e6("p", null, "Edit with"),
						e6(
							"div",
							{ className: __default$J.shortcut },
							e6(
								"svg",
								{ className: __default$J.digits, width: 47, height: 33 },
								e6("rect", { className: __default$J.rect, x: 32 }),
								e6("rect", { className: __default$J.rect }),
								e6("rect", { x: 20, y: 7, height: 2, width: 7 }),
								e6("rect", { className: __default$J.rect, y: 17 }),
								e6("rect", { rx: 1, x: 16, y: 17, width: 31, height: 16 }),
								e6("text", { x: 3, y: 12 }, 0),
								e6("text", { x: 35, y: 12 }, 9),
								e6("text", { x: 3, y: 29 }, "X"),
								e6("path", {
									fill: "#4B5059",
									transform: "translate(30, 20)",
									d: "M13 1.5c0-.827-.648-1.5-1.444-1.5H4.634C4.25 0 3.882.157 3.61.438L.212 3.97a.763.763 0 0 0 0 1.06l3.4 3.532c.27.281.638.438 1.022.438h6.922C12.352 9 13 8.327 13 7.5v-6ZM6.116 2.602a.525.525 0 0 1 .765 0l1.061 1.101 1.061-1.101a.525.525 0 0 1 .765 0c.21.22.212.576 0 .794l-1.06 1.102 1.06 1.101a.575.575 0 0 1 0 .795.527.527 0 0 1-.765 0l-1.06-1.102L6.88 6.394a.525.525 0 0 1-.765 0 .578.578 0 0 1 0-.795l1.061-1.101-1.06-1.102a.575.575 0 0 1 0-.794Z",
								})
							)
						)
					),
					t &&
						e6(
							te,
							null,
							e6("div", { className: __default$J.delimiter }),
							e6(
								"div",
								{ className: __default$J.part },
								e6("p", null, "Move a note by dragging or"),
								e6(
									"div",
									{ className: __default$J.shortcut },
									e6(
										"svg",
										{ className: __default$J.move, width: 67, height: 33 },
										e6("rect", { className: __default$J.rect, x: 52 }),
										e6("rect", { className: __default$J.rect, x: 52, y: 17 }),
										e6("rect", { rx: 1, y: 8, height: 17, width: 49 }),
										e6("text", { x: 3, y: 21 }, "Shift"),
										e6("text", { x: 38, y: 20 }, "+"),
										e6(ArrowDown, { transform: "translate(36,0)" }),
										e6(ArrowUp, { transform: "translate(36,0)" })
									)
								)
							)
						)
				)
			)
		);
	},
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
		return e6(
			"div",
			{ className: t },
			e6(
				"p",
				null,
				"Unless you submit a revision, the changes will be private and won’t affect the sound."
			)
		);
	},
	popup$3 = "Cv41lu",
	mainContainer$1 = "Cv42y1",
	divider$1 = "Cv4221",
	popupExtended$1 = "Cv41lu Cv41ex",
	save = "Cv42hl",
	notLoggedIn = "Cv42hl Cv42b3",
	unset = "Cv42hl Cv431z",
	saving = "Cv42hl Cv422p",
	saved = "Cv42hl Cv41go",
	helpTag$1 = "Cv42ut",
	helpTagActive = "Cv42ut Cv428v",
	__default$H = {
		popup: "Cv41lu",
		mainContainer: "Cv42y1",
		divider: "Cv4221",
		popupExtended: "Cv41lu Cv41ex",
		save: "Cv42hl",
		notLoggedIn: "Cv42hl Cv42b3",
		unset: "Cv42hl Cv431z",
		saving: "Cv42hl Cv422p",
		saved: "Cv42hl Cv41go",
		helpTag: "Cv42ut",
		helpTagActive: "Cv42ut Cv428v",
	},
	popup$2 = "By59n",
	reposition = "By534e",
	popupInner = "By5pa",
	mainContainer = "By5aa",
	divider = divider$1 + " By52ab",
	popupExtended = "By59n By525a",
	hint$2 = "By5am",
	hintBold = "By5am By5l9",
	hintBigger = "By5am By5l9 By5pv",
	hintNoMargin = "By5am By52lc",
	hintSubmitted = "By5am By5l9 By5pv By52e9",
	__default$G = {
		popup: "By59n",
		reposition: "By534e",
		popupInner: "By5pa",
		mainContainer: "By5aa",
		divider: divider$1 + " By52ab",
		popupExtended: "By59n By525a",
		hint: "By5am",
		hintBold: "By5am By5l9",
		hintBigger: "By5am By5l9 By5pv",
		hintNoMargin: "By5am By52lc",
		hintSubmitted: "By5am By5l9 By5pv By52e9",
	},
	EditorFooter = (e) => {
		let { status: t } = e,
			a = "No changes yet";
		return (
			"changes" === t || "saving" === t
				? (a = "Saving...")
				: "saved" === t && (a = "All changes saved privately"),
			e6(
				"div",
				{ style: { width: "100%" } },
				e6("div", { className: __default$G.divider }),
				e6(
					"div",
					{
						className: __default$G.hintBold,
						style: { padding: "4px 0px 3px" },
					},
					a
				)
			)
		);
	},
	RevisionsLink = (e) => {
		let { dispatch: t, children: a } = e;
		return e6(
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
	textarea = tC + " Cwr3f",
	actions = tS + " Cwr1dr",
	cancel = f + " Cwr1fo",
	hint$1 = "Cwr32t",
	error$1 = "Cwr2p4",
	title$1 = g + " Cwr109",
	content = y + " Cwr1pn",
	__default$F = {
		form: "Cwrup",
		textarea: tC + " Cwr3f",
		actions: tS + " Cwr1dr",
		cancel: f + " Cwr1fo",
		hint: "Cwr32t",
		error: "Cwr2p4",
		title: g + " Cwr109",
		content: y + " Cwr1pn",
	},
	RevisionForm = (e) => {
		let { onCancel: t, onSubmit: a } = e,
			i = tt(),
			[o, s] = ta(!1),
			[n, r] = ta(null),
			[l, u] = ta(null),
			d = async (e) => {
				e.preventDefault(), s(!0);
				try {
					v([{ field: i.current, validator: $ }]),
						await a({ summary: i.current.value }),
						u(null);
				} catch (t) {
					t instanceof b ? u(t) : r(t);
				}
				s(!1);
			},
			p = !n?.reasons?.summary;
		return e6(
			"form",
			{ className: __default$F.form, onSubmit: d },
			e6(_, { styles: __default$F, error: p && n }),
			e6(tx, {
				ref: i,
				name: "summary",
				type: "textarea",
				error: n,
				placeholder: "Briefly explain your changes",
				styles: __default$F,
				errorStyles: __default$F,
				popup: !0,
			}),
			e6(
				"div",
				{ className: __default$F.actions },
				e6("a", { className: __default$F.cancel, onClick: t }, "Cancel"),
				e6(tw, {
					id: l ? "submitRevisionButtonWarning" : "submitRevisionButton",
					title: "Submit a public revision",
					processing: o,
				})
			),
			e6(
				"p",
				{ className: __default$F.hint, style: { textAlign: "justify" } },
				[
					"Once audio rendering is complete, we'll send you an email, and your revision will appear on site for other users to enjoy. You can also submit more complex changes via ",
					e6(RevisionsLink$1, null, "Guitar Pro tab"),
					".",
				]
			)
		);
	},
	SubmitRevision = (e) => {
		let { showForm: t, onToggleForm: a, onSubmitted: i } = e,
			{ dispatch: o, meta: s, part: n } = m("meta", "part"),
			r = e9(
				async (e) => {
					let t = await x({
						...e,
						songId: s.songId,
						revision: s.revisionId || n.revisionId,
					});
					o("layer/hide"), o("upload/revision:merged", t), i();
				},
				[o, s, n]
			);
		return t
			? e6(RevisionForm, { onCancel: a, onSubmit: r })
			: e6(
					"div",
					null,
					e6(
						"button",
						{
							className: T.popupButtonGreen,
							style: { marginBottom: 15 },
							onClick: a,
						},
						"Submit a public revision"
					),
					e6(PrivateEditsHint, { className: __default$G.hintNoMargin })
			  );
	};
var SubmitRevision$1 = t(SubmitRevision);
let SignInLink = (e) => {
	let { dispatch: t, children: a } = e;
	return e6(
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
class EditorPopupExperiment extends e8 {
	constructor() {
		super();
		let e = w("v2");
		e || C("v2"), (this.state = { helpActive: !e, showForm: !1 });
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
		let { tabEditor: e, user: t, experiments: a } = this.props,
			{ helpActive: i, showForm: o } = this.state,
			s = a.submit_corrector_revision?.segment === "on",
			n = a.editor_move_note?.segment === "on",
			r = i ? __default$G.popupExtended : __default$G.popup,
			l = o ? `${r} ${__default$G.reposition}` : r;
		return e6(
			"div",
			{ className: l },
			e6(
				"div",
				{ className: __default$G.popupInner },
				e6(
					"div",
					{
						className: i ? __default$H.helpTagActive : __default$H.helpTag,
						onClick: this.helpToggle,
					},
					e6("span", null, "?")
				),
				i && e6(EditorHelp, { allowNoteMove: n }),
				e6(
					"div",
					{ className: __default$G.mainContainer },
					e6("h3", {}, "TAB editor"),
					!t.isLoggedIn &&
						e6(
							"div",
							{ className: __default$G.hintBigger, style: { marginTop: 0 } },
							e6(SignInLink$1, null, "Sign up"),
							s
								? " for free to submit a public revision or to save changes privately."
								: " for free to save changes."
						),
					!s &&
						e6(
							"div",
							{
								style: { marginTop: t.isLoggedIn && 0 },
								className: t.isLoggedIn
									? __default$G.hint
									: __default$G.hintBigger,
							},
							[
								"Tab corrections are private and won't affect the sound. Use ",
								e6(RevisionsLink$1, null, "revisions"),
								" for complex changes.",
							]
						),
					!t.isLoggedIn &&
						s &&
						e6(PrivateEditsHint, {
							className: t.isLoggedIn
								? __default$G.hint
								: __default$G.hintBigger,
						}),
					t.isLoggedIn &&
						s &&
						e6(SubmitRevision$1, {
							showForm: o,
							onToggleForm: this.toggleForm,
							onSubmitted: this.onSubmitted,
						}),
					t.isLoggedIn && e6(EditorFooter, { status: e.status })
				)
			)
		);
	}
}
var EditorPopupExperiment$1 = t(
		EditorPopupExperiment,
		"tabEditor",
		"user",
		"experiments"
	),
	handIcon = "/static/media/hand.9a7dcf24.svg";
let popup$1 = "Cjoe6",
	popupWarning = "Cjoe6 Cjo2q1",
	warning = "Cjo186",
	hint = "Cjo1a2",
	helpTag = "Cjoi2",
	beta = "Cjo1pw",
	__default$E = {
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
		return e6(
			"div",
			{ className: __default$E.popupWarning },
			e6(
				"p",
				{ className: __default$E.warning },
				"In Progress" === e.status &&
					"Seems like fingerings generation for this track is in progress right now. Try again later.",
				"Error" === e.status &&
					"Failed to generate fingerings. We are working on a fix."
			)
		);
	let a = e9(
		() =>
			t("curiosity/event", { event: "Clicked open Beta fingerings article" }),
		[t]
	);
	return e6(
		"div",
		{ className: __default$E.popup },
		e6(
			S,
			{ to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: a },
			e6("div", { className: __default$E.helpTag }, e6("span", null, "?"))
		),
		e6("p", { className: __default$E.hint }, "Left hand"),
		e6("img", {
			src: handIcon,
			width: 76.6,
			height: 100.1,
			alt: "Fingerging hint",
		}),
		e6("span", { className: __default$E.beta }, "beta")
	);
}
let popup = "C0w33s",
	button$3 = "C0w3a",
	path$6 = "C0w1ij",
	activeButton = "C0w3a C0w13m",
	disabledButton$1 = "C0w3a C0w2bp",
	spacer = "C0wz2",
	__default$D = {
		popup: "C0w33s",
		button: "C0w3a",
		path: "C0w1ij",
		activeButton: "C0w3a C0w13m",
		disabledButton: "C0w3a C0w2bp",
		spacer: "C0wz2",
	};
class MetronomePopup extends e8 {
	render() {
		let { dispatch: e } = this.props,
			{ metronomeType: t, voiceMetronomeAvailable: a } = this.props.player,
			i = "regular" === t ? __default$D.activeButton : __default$D.button,
			o = {};
		return (
			a
				? ((o.className =
						"voice" === t ? __default$D.activeButton : __default$D.button),
				  (o.onClick = () => e("player/changeMetronome:init", "voice")))
				: ((o.className = __default$D.disabledButton),
				  (o.disabled = !0),
				  (o.title = "Voice metronome is unavailable on this song")),
			e6(
				"div",
				{ className: __default$D.popup },
				e6(
					"button",
					{
						className: i,
						onClick: () => e("player/changeMetronome:init", "regular"),
					},
					e6(
						"svg",
						{ width: 34, height: 32, viewBox: "-6 0 26 20" },
						e6(
							"defs",
							null,
							e6(
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
								e6("feFlood", {
									floodOpacity: "0",
									result: "BackgroundImageFix",
								}),
								e6("feColorMatrix", {
									in: "SourceAlpha",
									type: "matrix",
									values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
									result: "hardAlpha",
								}),
								e6("feOffset", { dy: "2" }),
								e6("feGaussianBlur", { stdDeviation: "6" }),
								e6("feColorMatrix", {
									type: "matrix",
									values:
										"0 0 0 0 0.533333 0 0 0 0 0.901961 0 0 0 0 0 0 0 0 0.75 0",
								}),
								e6("feBlend", {
									mode: "normal",
									in2: "BackgroundImageFix",
									result: "effect1_dropShadow_4343_1308",
								}),
								e6("feBlend", {
									mode: "normal",
									in: "SourceGraphic",
									in2: "effect_shadow_metro",
									result: "shape",
								})
							)
						),
						e6("path", { d: th })
					),
					e6("p", null, "tick tock")
				),
				e6("div", { className: __default$D.spacer }),
				e6(
					"button",
					o,
					e6(
						"svg",
						{ width: 34, height: 32, viewBox: "0 0 34 28" },
						e6("use", { xlinkHref: `${tp}#icon`, className: __default$D.path })
					),
					e6("p", null, "one two")
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
let animationProps$2 = { animationStyles: R };
class Controls extends e8 {
	componentDidUpdate() {
		let { usedDrums: e, fingeringsOnActivate: t } = this.props;
		e || t();
	}
	render() {
		let { gettext: e } = k(locales),
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
				videoIsOpened: d,
				metronomeType: h,
			} = this.props,
			c = p(t.os) || M(t.os) || L(t),
			m = "mixer" === i,
			f = "speed" === i,
			g = i === I,
			y = "tab_editor" === i,
			_ = "Loading" === l,
			v = "solo" === this.props.type && !d,
			$ = "mute" === this.props.type && !d,
			b = this.props.loop,
			x = this.props.isCountin && !d,
			T = this.props.isMetronome && !d,
			w = `${Math.round(s)}%`,
			C = !a,
			S = !a,
			R = tc.panePlus2;
		return (
			u ? (R = tc.panePlus2Secondary) : n && (R = tc.panePlus3),
			e6(
				"aside",
				{ id: "controls", className: R, "data-controls": "tablature" },
				e6("div", { className: tc.handler }),
				e6(
					"div",
					{ className: tc.centerGroup },
					e6(
						"div",
						{ className: tc.item },
						e6(tm, {
							shouldPlay: this.props.shouldPlay,
							canPlay: this.props.canPlay,
							onClick: this.props.handlePlay,
							title: e("Play (Space)"),
							titlePressed: e("Pause (Space)"),
						})
					),
					e6(
						"div",
						{ className: tc.item, id: "mixer-button" },
						e6(MixerButton, {
							pressed: m,
							onClick: this.props.handleMixer,
							title: e("Show tracks (T)"),
							titlePressed: e("Hide tracks (T)"),
							instrumentId: this.props.track
								? this.props.track.instrumentId
								: P,
							name: this.props.track ? this.props.track.name : "",
						}),
						e6(N, null, m && e6(E, animationProps$2, e6(B, null)))
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `speed ${f}`,
							icon: "speed",
							text: w,
							pressed: f,
							onClick: this.props.handleSpeed,
							title: e(
								"Open speed panel (S). Change tempo: (Alt+1–7) for 25%–175%, (Alt+S/A) for 1 bpm change"
							),
							hasPopup: !0,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_speed" === i &&
								e6(
									E,
									{ ...animationProps$2, key: "popup" },
									c
										? e6(AppPopup, {
												title: e("Tempo Control"),
												device: t,
												horizontal: !0,
												feature: "slowdown",
										  })
										: e6(tg, {
												title: e("Tempo Control"),
												horizontal: !0,
												classPrefix: "speed",
										  })
								),
							f &&
								e6(E, { ...animationProps$2, key: "layer" }, e6(Speed$1, null))
						)
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `loop ${b}`,
							icon: "loop",
							pressed: b,
							onClick: this.props.handleLoop,
							title: e("Turn loop mode on (L)"),
							titlePressed: e("Turn loop mode off (L)"),
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_loop" === i &&
								e6(
									E,
									animationProps$2,
									c
										? e6(AppPopup, {
												title: e("Loop Mode"),
												device: t,
												horizontal: !0,
												feature: "loop",
										  })
										: e6(tg, {
												title: e("Loop Mode"),
												horizontal: !0,
												classPrefix: "loop",
										  })
								)
						)
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `solo ${v}`,
							icon: "solo",
							disabled: d,
							pressed: v,
							onClick: this.props.handleSolo,
							title: e("Play current track solo (F)"),
							titlePressed: e("Play focus mix of all tracks (F)"),
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_solo" === i &&
								!d &&
								e6(
									E,
									animationProps$2,
									c
										? e6(AppPopup, {
												title: e("Solo Mode"),
												device: t,
												horizontal: !0,
												feature: "solo",
										  })
										: e6(tg, {
												title: e("Solo Mode"),
												horizontal: !0,
												classPrefix: "solo",
										  })
								),
							"solo_single" === i &&
								!d &&
								e6(
									E,
									animationProps$2,
									e6(StubPopup, { title: e("Solo"), horizontal: !0 })
								)
						)
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `mute ${$}`,
							icon: "mute",
							disabled: d,
							pressed: $,
							onClick: this.props.handleMute,
							title: e("Mute current track (M)"),
							titlePressed: e("Unmute current track (M)"),
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_mute" === i &&
								!d &&
								e6(
									E,
									animationProps$2,
									c
										? e6(AppPopup, {
												title: e("Mute Mode"),
												device: t,
												horizontal: !0,
												feature: "mute",
										  })
										: e6(tg, {
												title: e("Mute Mode"),
												horizontal: !0,
												classPrefix: "mute",
										  })
								)
						)
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `countin ${x}`,
							icon: "countin",
							disabled: d,
							pressed: x,
							onClick: this.props.handleCountin,
							title: e("Turn count-in mode on (C)"),
							titlePressed: e("Turn count-in mode off (C)"),
						})
					),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: `metronome ${T}`,
							icon: "voice" === h ? "voice" : "metronome",
							disabled: d,
							pressed: T,
							onClick: this.props.handleMetronome,
							title: e("Turn metronome on (N)"),
							titlePressed: e("Turn metronome off (N)"),
						}),
						e6(
							N,
							null,
							!d &&
								"metronome" === i &&
								e6(
									E,
									{ ...animationProps$2, key: "layer" },
									e6(MetronomePopup$1, null)
								)
						)
					),
					!u &&
						e6(
							"div",
							{ className: tc.item },
							e6(tf, {
								key: `editor ${y} ${o}`,
								icon: "editor",
								pressed: y,
								onClick: this.props.handleTabEditor,
								title: e("Turn tab editor on (E)"),
								titlePressed: e("Turn tab editor off (E)"),
								warning: o,
							}),
							y &&
								e6(
									E,
									{ ...animationProps$2, key: "tab-editor" },
									e6(EditorPopupExperiment$1, null)
								)
						),
					n &&
						!u &&
						e6(
							"div",
							{ className: tc.item },
							e6(tf, {
								key: `fingerings ${_} ${r}`,
								loading: _,
								icon: "fingerings",
								pressed: r,
								onClick: this.props.handleFingerings,
								title: e("Generate guitar fingerings (G)"),
								titlePressed: e("Turn fingerings off (G)"),
							}),
							e6(
								N,
								null,
								r &&
									"Loading" !== l &&
									"tab_editor" !== i &&
									e6(E, animationProps$2, e6(HandPopup, { status: l }))
							)
						),
					e6(
						"div",
						{ className: tc.item },
						e6(tf, {
							key: "print",
							icon: "print",
							onClick: this.props.handlePrint,
							title: "Print (P)",
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_print" === i &&
								e6(
									E,
									animationProps$2,
									e6(tg, {
										title: e("Printing"),
										horizontal: !0,
										classPrefix: "print",
									})
								)
						)
					),
					e6(
						"div",
						{ className: tc.secondaryControls },
						e6(
							"div",
							{ className: u ? tc.itemSmall : tc.itemSmallHidden },
							e6(tf, {
								key: `help ${g}`,
								icon: "help",
								pressed: g,
								onClick: this.props.handleNotation,
								title: e("Show drum notation"),
								titlePressed: e("Hide drum notation"),
							}),
							u && e6(A, { usedDrums: u, horizontal: !0 })
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
	return e6(
		"svg",
		{ width: "44", height: "46", role: "img" },
		e6("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
		e6("path", {
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
	__default$C = {
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
class PitchShift extends e8 {
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
			let i = D(a.current, e.audio.getCursor(), "left");
			i && t(null, i.measureLayout.lineLayout, !1);
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
			return e6(
				"div",
				{
					className: __default$C.currentTuning,
					"aria-label": "Current tuning",
				},
				e6(
					"div",
					{ className: __default$C.currentTuningHeader },
					"CURRENT TUNING"
				),
				e6("div", { id: "tuning", className: __default$C.tuningString }, F(e))
			);
		}
		return null;
	};
	renderQuickButton = () => {
		if (0 !== this.props.player.pitchShift)
			return e6(
				"button",
				{
					className: __default$C.quickButton,
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
					e6(
						"button",
						{
							className: __default$C.quickButton,
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
		return e6(
			"button",
			{
				className: __default$C.disabledButton,
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
			l = __default$C.pitchshift;
		if (s) (n = -71), (r = -235), (l = __default$C.pitchshiftMobile);
		else if (((n = this.props.firstLineLayoutHeight - 58), (r = 55), i && o)) {
			let u = i.getBoundingClientRect(),
				d = o.getBoundingClientRect();
			(r = d.left - u.left + d.width + 21),
				(n = d.top + d.height - u.top - 77.5);
		}
		return e6(
			"div",
			{
				className: l,
				title: "You can use arrow keys",
				role: "dialog",
				"aria-label": "Shift Pitch",
				style: { top: `${n}px`, left: `${r}px` },
			},
			t || e6("div", { className: __default$C.currentTuningFiller }),
			e6(
				"div",
				{ className: __default$C.tuneControls },
				e6(
					"button",
					{
						className: __default$C.updown,
						onClick: this.tuneDown,
						disabled: a <= -12,
						"aria-label": "Step down",
					},
					e6(PitchShiftUpDownIcon, { up: !1 })
				),
				e6(
					"span",
					{
						className: __default$C.currentPitch,
						"aria-label": "Current pitch",
					},
					(a > 0 ? "+" : "") + a
				),
				e6(
					"button",
					{
						className: __default$C.updown,
						onClick: this.tuneUp,
						disabled: a >= 12,
						"aria-label": "Step up",
					},
					e6(PitchShiftUpDownIcon, { up: !0 })
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
	__default$B = {
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
class MobileSpeed extends e8 {
	constructor() {
		super(), (this.state = { mode: "percent" });
	}
	tuneUp = (e) => {
		let t, a;
		e.preventDefault();
		let { store: i, player: o } = this.props,
			{ mode: s } = this.state;
		"percent" === s
			? ((t = 10), (a = Math.floor(o.speed / t) * t + t))
			: ((t = +(100 / o.tempo.bpm).toFixed(2)), (a = o.speed + t)),
			a <= 170 && a >= 30 && u(i, a);
	};
	tuneDown = (e) => {
		let t, a;
		e.preventDefault();
		let { store: i, player: o } = this.props,
			{ mode: s } = this.state;
		"percent" === s
			? ((t = 10), (a = Math.floor(o.speed / t) * t - t))
			: ((t = +(100 / o.tempo.bpm).toFixed(2)), (a = o.speed - t)),
			a <= 170 && a >= 30 && u(i, a);
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
			l = __default$B.disabled,
			u =
				"percent" === s
					? 10 * Math.floor(i / 10) - 10
					: i - +(100 / o.bpm).toFixed(2);
		u >= 30 && ((l = __default$B.button), (e = this.tuneDown));
		let d = __default$B.disabled,
			p =
				"percent" === s
					? 10 * Math.floor(i / 10) + 10
					: i + +(100 / o.bpm).toFixed(2);
		return (
			p <= 170 && ((d = __default$B.button), (t = this.tuneUp)),
			e6(
				"div",
				{
					className: __default$B.mobileSpeed,
					role: "dialog",
					"aria-label": "Speed",
				},
				e6(
					"p",
					{ className: __default$B.secondary },
					"percent" === s ? `${n.bpm} bpm` : `${r}%`
				),
				e6(
					"div",
					{ className: __default$B.controls },
					e6(
						"button",
						{ className: l, onClick: e },
						e6(PitchShiftUpDownIcon, { up: !1 })
					),
					e6(
						"div",
						{ className: __default$B.value },
						e6("p", null, "percent" === s ? `${r}%` : n.bpm),
						"bpm" === s && e6("span", null, "bpm")
					),
					e6(
						"button",
						{ className: d, onClick: t },
						e6(PitchShiftUpDownIcon, { up: !0 })
					)
				),
				e6(
					"button",
					{ className: __default$B.switch, onClick: this.switchMode },
					`Switch to ${"percent" === s ? "bpm" : "%"}`
				)
			)
		);
	}
}
var MobileSpeed$1 = t(MobileSpeed, "player");
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
	__default$A = {
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
class MobileControls extends e8 {
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
				usedDrums: d,
				metronomeType: h,
			} = this.props,
			{ minimized: c, overflowVisible: m } = this.state,
			f = "speed" === t,
			g = "pitchshift" === t,
			y = "Loading" === r,
			_ = u && !d,
			v = "solo" === this.props.type,
			$ = "mute" === this.props.type,
			b = this.props.speed !== V || f,
			x = this.props.loop,
			T = this.props.isCountin,
			w = this.props.isMetronome,
			C = !this.props.plusAccess,
			S = !this.props.plusAccess,
			k = p(e.os) || M(e.os),
			L = { height: `${414 + 57 * (s ? 1 : 0) + 57 * (_ ? 1 : 0)}px` },
			P = __default$A.features;
		c ? (L.height = "71px") : m && (P = __default$A.featuresActive);
		let B = `${Math.round(n)}%`;
		return e6(
			"footer",
			{ className: __default$A.controls, "data-controls": "tablature" },
			e6(
				"svg",
				{ width: 0, height: 0 },
				e6("defs", null, e6(ty, {}), e6(t_, {}))
			),
			e6(
				"div",
				{ className: __default$A.alt, id: "alt-controls" },
				e6(tm, {
					shouldPlay: a,
					canPlay: i,
					onClick: this.props.handlePlay,
					title: "Play",
					hideDefs: !0,
				})
			),
			e6(
				"div",
				{ className: __default$A.float, id: "mobile-controls" },
				e6(
					"div",
					{ className: P, style: L },
					e6(
						"div",
						{ className: __default$A.minimize },
						e6(tf, {
							mobile: !0,
							icon: c ? "arrow" : "arrow-down",
							pressed: !1,
							onClick: this.minimizeClick,
							title: "Minimize",
							titlePressed: "Minimize",
						})
					),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							mobile: !0,
							icon: "speed",
							text: B,
							pressed: b,
							onClick: this.props.handleSpeed,
							title: "Change playback speed",
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_speed" === t &&
								e6(
									E,
									animationProps$1,
									k
										? e6(AppPopup, {
												title: "Tempo Control",
												device: e,
												mobile: !0,
												low: !0,
												feature: "slowdown",
										  })
										: e6(tg, { title: "Tempo Control", classPrefix: "speed" })
								),
							f &&
								e6(
									E,
									{ ...animationProps$1, key: "layer" },
									e6(MobileSpeed$1, null)
								)
						)
					),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							mobile: !0,
							icon: "loop",
							pressed: x,
							onClick: this.props.handleLoop,
							title: "Turn loop mode on",
							titlePressed: "Turn loop mode off",
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_loop" === t &&
								e6(
									E,
									animationProps$1,
									k
										? e6(AppPopup, {
												title: "Loop Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "loop",
										  })
										: e6(tg, { title: "Loop Mode", classPrefix: "loop" })
								)
						)
					),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							mobile: !0,
							icon: "solo",
							pressed: v,
							onClick: this.props.handleSolo,
							title: "Play the current track solo",
							titlePressed: "Play the focus mix of all tracks",
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_solo" === t &&
								e6(
									E,
									animationProps$1,
									k
										? e6(AppPopup, {
												title: "Solo Mode",
												device: e,
												mobile: !0,
												low: !0,
												feature: "solo",
										  })
										: e6(tg, { title: "Solo Mode", classPrefix: "solo" })
								),
							"solo_single" === t &&
								e6(
									E,
									animationProps$1,
									e6(StubPopup, { title: "Solo", horizontal: !0 })
								)
						)
					),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							mobile: !0,
							icon: "mute",
							pressed: $,
							onClick: this.props.handleMute,
							title: "Mute current track (M)",
							titlePressed: "Unmute current track (M)",
							hasPopup: C,
							lock: S,
						}),
						e6(
							N,
							null,
							"plus_mute" === t &&
								e6(
									E,
									animationProps$1,
									k
										? e6(AppPopup, {
												title: "Mute Mode",
												device: e,
												mobile: !0,
												feature: "mute",
										  })
										: e6(tg, { title: "Mute Mode", classPrefix: "mute" })
								)
						)
					),
					_ &&
						e6(
							"div",
							{ className: __default$A.item },
							e6(tf, {
								key: `fingerings ${y} ${l}`,
								loading: y,
								icon: "fingerings",
								pressed: l,
								onClick: this.props.handleFingerings,
								title: "Generate guitar fingerings (G)",
								titlePressed: "Turn fingerings off (G)",
							}),
							e6(
								N,
								null,
								l &&
									"Loading" !== r &&
									"tab_editor" !== t &&
									e6(E, animationProps$1, e6(HandPopup, { status: r }))
							)
						),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							mobile: !0,
							icon: "countin",
							pressed: T,
							onClick: this.props.handleCountin,
							title: "Turn count-in mode on (C)",
							titlePressed: "Turn count-in mode off (C)",
						})
					),
					e6(
						"div",
						{ className: __default$A.item },
						e6(tf, {
							icon: "voice" === h ? "voice" : "metronome",
							pressed: w,
							onClick: this.props.handleMetronome,
							title: "Turn metronome on (N)",
							titlePressed: "Turn metronome off (N)",
						}),
						e6(
							N,
							null,
							"metronome" === t &&
								e6(
									E,
									{ ...animationProps$1, key: "layer" },
									e6(MetronomePopup$1, null)
								)
						)
					),
					s &&
						e6(
							"div",
							{ className: __default$A.item },
							0 !== o &&
								e6(
									"div",
									{ className: __default$A.tuningValue },
									`${o > 0 ? "+" : ""}${o}`
								),
							e6(tf, {
								mobile: !0,
								icon: "tuning",
								pressed: 0 !== o || g,
								onClick: this.props.handlePitchshift,
								title: "Pitch Shift on",
								titlePressed: "Pitch Shift off",
								hasPopup: C,
								lock: S,
							}),
							e6(
								N,
								null,
								"plus_pitchshift" === t &&
									e6(
										E,
										animationProps$1,
										k
											? e6(AppPopup, {
													title: "Pitch Shift",
													device: e,
													mobile: !0,
													feature: "pitch shift",
											  })
											: e6(tg, { title: "Pitch Shift", classPrefix: "pitch" })
									),
								g &&
									e6(
										E,
										{ ...animationProps$1, key: "layer" },
										e6(PitchShift$1, { mobile: !0 })
									)
							)
						)
				),
				e6(
					"div",
					{ className: __default$A.play },
					e6(tm, {
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
	__default$z = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function DeletedSong() {
	return e6(
		"div",
		{ className: __default$z.error, role: "alert" },
		e6(
			"h1",
			{ className: __default$z.title },
			e6("span", null, "The song was successfully deleted!")
		),
		e6(
			"h2",
			{ className: __default$z.subtitle },
			"Try ",
			e6(S, { to: "/" }, "searching"),
			" for other songs."
		)
	);
}
class IconAlert extends e8 {
	render() {
		return e6(
			"svg",
			{ width: 112, height: 112, viewBox: "0 0 112 112" },
			e6(
				"g",
				{
					fill: "none",
					fillRule: "evenodd",
					stroke: "#FD651A",
					"stroke-width": "11",
					transform: "translate(6 6)",
				},
				e6("circle", { cx: 50, cy: 50, r: 50 }),
				e6("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
			)
		);
	}
}
function LicenseRestriction() {
	return e6(
		q,
		{
			level: "notice",
			title:
				"Sorry this content has been removed in your country at the request of the underlying music publisher.",
			action:
				"We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
			reason: "license",
		},
		e6(IconAlert, null)
	);
}
function AlertManager(e) {
	let { meta: t, user: a, cursor: i, part: o, player: s, isDeleted: n } = e;
	if (t.loading || o.loading) return;
	let r = !!t.current,
		l = t.current && !!t.current.tracks,
		u = U(t, a),
		d = r && G.get(t.current, Y.MASTER),
		p = t.current && t.current.isBlocked;
	if (t.isNotFound || o.isNotFound) return e6(tk, null);
	if (n) return e6(DeletedSong, null);
	if (t.isNetworkFailed || o.isNetworkFailed) return e6(tM, null);
	if (t.isFailed || o.isFailed) return e6(tE, null);
	if (!t.allowedByLicense) return e6(LicenseRestriction, null);
	if (r && !u && d.audioError) {
		let h = d.audioError,
			c = "Our virtual band was unable to play it O_o";
		return (
			h === K.TOO_LONG && (c = "Its duration exceeds the 30 minutes limit"),
			e6(q, {
				level: "error",
				title: "Sorry, playback is not possible on this song",
				action: c,
				reason: "audio",
			})
		);
	}
	if (r && (!l || !u))
		return e6(q, {
			level: "info",
			title: "Tab audio is being rendered",
			action:
				"We'll send you an email within 15 minutes once your tab is ready",
			reason: "render",
		});
	else if (!s.webworkerOperational)
		return e6(q, {
			level: "info",
			title: "Sorry, playback is not possible on this song",
			action: "Probably there is not enough memory",
			reason: "webworker",
		});
	else if (!s.playbackAvailable || !W)
		return e6(q, {
			level: "info",
			title: "Sorry, playback is not supported in your browser",
			action: "Try to use latest Google Chrome",
			reason: s.playbackAvailable ? "animate" : "audio",
		});
	else if (s.isAudioNetworkFailed)
		return e6(q, {
			level: "info",
			title: "Audio can't be loaded because of network error.",
			action: "Probably you are offline or connection was canceled",
			reason: "network",
		});
	else if (s.isAudioFailed)
		return e6(q, {
			level: "error",
			title: "Sorry, but there are some problems with playback",
			action: "Please, try to reload page",
			reason: "playback",
		});
	else if (i.isFailed)
		return e6(q, {
			level: "error",
			title: "Sorry, but there are some problems with cursor",
			action: "Please, try to reload page",
			reason: "cursor",
		});
	else if (p)
		return e6(q, {
			level: "notice",
			title: "Sorry, but that revision was blocked",
			action: "Please let us know if you disagree with this decision",
			reason: "block",
		});
}
let main = "Bvj22a",
	showroom = J + " Bvj1o9",
	banner = "Bvj1b4",
	__default$y = { main: "Bvj22a", showroom: J + " Bvj1o9", banner: "Bvj1b4" },
	ShowroomBottom = ti(() => {
		let e = tt(),
			{ device: t, ads: a } = m("device", "ads", "route", "consent"),
			{ alt: i, link: o, image: s } = Z(t);
		return e6(
			"section",
			{
				id: "showroom_bottom",
				className: __default$y.main,
				key: "showroom-bottom",
				ref: e,
			},
			e6(
				"div",
				{ className: __default$y.showroom, id: "Redesign_BTF_tab_page_320x50" },
				a.notsyFailed &&
					e6(
						"a",
						{ className: __default$y.link, href: o, target: "_blank" },
						e6("img", { src: s, className: __default$y.banner, alt: i })
					)
			)
		);
	});
class TimeStampItem extends e8 {
	inputRef = to();
	constructor(e) {
		super(e), (this.state = { active: !1 });
	}
	onClick = () => {
		this.setState({ active: !0 });
	};
	setValue = (e) => {
		if (27 === e.keyCode) this.setState({ active: !1 });
		else if (13 === e.keyCode) {
			let t = +this.inputRef.current?.value;
			this.props.editValue(this.props.index, t), this.setState({ active: !1 });
		}
	};
	render = () => {
		let { index: e, value: t } = this.props,
			{ active: a } = this.state;
		return e6(
			"li",
			{ onClick: this.onClick, key: e },
			a
				? e6("input", {
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
	__default$x = {
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
class YTPlayer extends e8 {
	playerAPI = null;
	playTimer = null;
	listRef = to();
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
			let r = getPlayerInstance(n, o);
			for (; r; ) r.remove(), (r = getPlayerInstance(n, o));
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
					player: { video: t, position: a },
					part: i,
					dispatch: o,
				} = this.props,
				s = i.videoId,
				n = i.videoOffset;
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
					start: Math.floor(n) + a.cursor / 1e3,
				},
				width: "200",
				height: "200",
				events: {
					onReady: () => {
						t.load(this.playerAPI, n, a.cursor);
					},
					onError: (e) => {
						console.error(e.message || e),
							o("curiosity/event", {
								event: "Video player error",
								error: e.message || e,
							});
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
			{ songId: t, part: a, experiments: i, user: o } = this.props,
			{ timestamps: s, openedEditor: n } = this.state,
			r = et(o, ea.USE_VIDEO_SYNCHRONISATION);
		return [
			e
				? e6(
						"div",
						{ className: __default$x.openSection },
						e6(
							"button",
							{
								className: __default$x.toggleButtonClose,
								onClick: this.toggleVideo,
								id: "close-video",
								tittle: "Close video",
							},
							"Close official audio"
						)
				  )
				: e6(
						"div",
						{ className: __default$x.openSection },
						e6(
							"button",
							{
								className: __default$x.toggleButton,
								onClick: this.toggleVideo,
								id: "open-video",
								tittle: "Open video",
							},
							"Play along with official audio"
						)
				  ),
			e6(
				"div",
				{
					className: __default$x.container,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-container",
				},
				e6(
					"div",
					{ className: __default$x.inner },
					n &&
						r &&
						e6(
							"div",
							{ className: __default$x.settings },
							e6("input", {
								className: __default$x.videoInput,
								type: "text",
								placeholder: "videoId",
								onBlur: this.changeVideoId,
							}),
							e6(
								"div",
								{ className: __default$x.timestamps, ref: this.listRef },
								e6(
									"ul",
									null,
									s.map((e, t) =>
										e6(TimeStampItem, {
											index: t,
											value: e,
											editValue: this.editTimestamp,
										})
									)
								)
							),
							e6(
								"div",
								{ className: __default$x.buttons },
								e6("button", { onClick: this.syncClick }, "Sync"),
								e6("button", { onClick: this.saveClick }, "Save"),
								e6("button", { onClick: this.resetPoints }, "Reset")
							)
						),
					e6(
						"div",
						{ className: __default$x.video, id: "youtube-video-container" },
						e6("div", { id: `youtube-player-${a.videoId}-${t}` }),
						!n &&
							e6(
								"button",
								{
									className: __default$x.hideBtn,
									onClick: this.toggleVideo,
									tittle: "Close video",
									id: "close-video-tag",
								},
								"✕"
							),
						r &&
							e6(
								"button",
								{
									className: __default$x.editorBtn,
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
var YTPlayer$1 = t(YTPlayer, "player", "part", "user", "experiments"),
	guitar1Image = "/static/media/guitarist1.35ad6d2a.png",
	guitar2Image = "/static/media/guitarist2.10705481.png",
	guitar3Image = "/static/media/guitarist3.a67b9326.png";
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
	__default$w = {
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
class YTPlayerDemo extends e8 {
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
				? e6(
						"div",
						{ className: __default$w.openSection },
						e6(
							"button",
							{
								className: __default$w.toggleButtonClose,
								onClick: this.toggleAd,
								id: "close-video",
								tittle: "Close video",
							},
							"Close official audio"
						)
				  )
				: e6(
						"div",
						{ className: __default$w.openSection },
						e6(
							"button",
							{
								className: __default$w.toggleButton,
								onClick: this.toggleAd,
								id: "open-video",
								tittle: "Open video",
							},
							"Play along with official audio"
						)
				  ),
			e6(
				"div",
				{
					className: __default$w.ad,
					style: `display: ${e ? "block" : "none"}`,
					id: "youtube-ad",
				},
				e6(
					"div",
					{ className: __default$w.yellow },
					e6("img", {
						height: 200,
						width: 163,
						src: guitar1Image,
						alt: "First guitarist",
					})
				),
				e6(
					"div",
					{ className: __default$w.blue },
					e6("img", {
						height: 266,
						width: 118,
						src: guitar2Image,
						alt: "Second guitarist",
					}),
					e6(
						S,
						{
							to: "/a/wa/plus",
							"aria-label": "See plans and pricing",
							onClick: this.onYTLogoClick,
						},
						e6(
							"svg",
							{
								width: 127,
								height: 97,
								viewBox: "0 0 127 97",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
							},
							e6("path", {
								d: "M109.3 19.48a12.03 12.03 0 0 0-8.48-8.43C93.29 9 63.14 9 63.14 9S33 9 25.47 10.97a12.27 12.27 0 0 0-8.49 8.51C15 26.98 15 42.5 15 42.5s0 15.6 1.98 23.02a12.03 12.03 0 0 0 8.49 8.43C33.08 76 63.14 76 63.14 76s30.14 0 37.68-1.97a12.03 12.03 0 0 0 8.49-8.43c1.98-7.5 1.98-23.02 1.98-23.02s.08-15.6-1.98-23.1Z",
								fill: "#f00",
							}),
							e6("path", {
								d: "M53.55 28.15v28.7L78.62 42.5 53.55 28.15Z",
								fill: "#fff",
							})
						)
					)
				),
				e6(
					"div",
					{ className: __default$w.background },
					e6(
						"svg",
						{
							className: __default$w.ellipse1,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e6("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					e6(
						"svg",
						{
							className: __default$w.ellipse2,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e6("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					),
					e6(
						"svg",
						{
							className: __default$w.ellipse3,
							width: 329,
							height: 175,
							viewBox: "0 0 329 175",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
						},
						e6("path", { d: ellipsePath, fillOpacity: 0.12, fill: "#fff" })
					)
				),
				e6(
					"div",
					{ className: __default$w.green },
					e6("img", {
						height: 200,
						width: 163,
						src: guitar3Image,
						alt: "Third guitarist",
					})
				),
				e6(
					"p",
					{ className: __default$w.plusText },
					"Play along with Official Audio on Plus plan"
				),
				e6(
					S,
					{
						to: "/a/wa/plus",
						"aria-label": "See plans and pricing",
						onClick: this.onPlusLinkClick,
					},
					e6(
						"button",
						{
							className: __default$w.plans,
							tittle: "Plans and Pricing",
							alt: "plans&pricing",
						},
						"See plans and pricing"
					)
				),
				e6(
					S,
					{
						to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
						"aria-label": "On the demo song",
						onClick: this.onDemoLinkClick,
					},
					e6(
						"button",
						{
							className: __default$w.demo,
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
class CursorErrorBoundary extends e8 {
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
var CursorErrorBoundary$1 = t(CursorErrorBoundary);
let btn = "Ckd11i",
	shape$1 = "Ckdzh",
	bg = "Ckd22n",
	active = "Ckd11i Ckduv",
	badge = "Ckdte",
	__default$v = {
		btn: "Ckd11i",
		shape: "Ckdzh",
		bg: "Ckd22n",
		active: "Ckd11i Ckduv",
		badge: "Ckdte",
	};
function TuningButton(e) {
	let {
			reference: t,
			firstLineLayoutHeight: a,
			handlePitchshift: i,
			isActive: o,
			isPitchshiftToStandard: s,
			lock: n,
		} = e,
		{
			player: { pitchShift: r },
		} = m("player"),
		l = "Shift pitch (R)";
	0 !== r
		? (l = "Pitch shifted (R)")
		: s && (l = "Pitch can be shifted to match standard tuning (R)");
	let u = 5 * (Math.abs(r).toString(10).length - 1) + (r > 0 ? 2 : 0);
	return e6(
		"g",
		{
			vectorEffect: "non-scaling-stroke",
			transform: `translate(-8 ${a - 47})`,
			className: o ? __default$v.active : __default$v.btn,
			onClick: i,
			"data-tab-button": "tuning-button",
		},
		e6("title", null, l),
		e6("rect", {
			x: 0,
			y: 3,
			rx: 4,
			ry: 4,
			width: 25,
			height: 23,
			filter: "url(#svg_shadow)",
			className: __default$v.bg,
			ref: t,
		}),
		e6("path", {
			d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
			"stroke-width": "1.3",
		}),
		e6("path", {
			d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
			"stroke-width": "1.6",
		}),
		(s || 0 !== r) &&
			e6("rect", {
				x: 18,
				y: 0,
				width: 13 + u,
				height: 13,
				rx: 6.5,
				ry: 6.5,
				className: __default$v.badge,
			}),
		0 !== r && e6("text", { x: 20, y: 9.5 }, `${r > 0 ? "+" : ""}${r}`),
		n &&
			e6(
				"g",
				{ transform: "translate(-17, -12)" },
				e6("circle", {
					className: __default$v.bg,
					cx: "16.5",
					cy: "15.5",
					r: "8.5",
					filter: "url(#svg_shadow_light)",
				}),
				e6("path", {
					className: __default$v.lock,
					d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
				}),
				e6("circle", { className: __default$v.shape, cx: 16.5, cy: 17, r: 0.8 })
			)
	);
}
let ToastContext = ts(null),
	toast = "Bhf2w4",
	toast__text = "Bhf1e0",
	toast__closeBtn = "Bhf2h5",
	goodToast = "Bhf1on",
	badToast = "Bhf45",
	__default$u = {
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
			tn(() => {
				let e = setTimeout(t, a);
				return () => clearTimeout(e);
			}, [t, a]),
			e6(
				"div",
				{ className: __default$u.toast },
				"good" === o
					? e6(
							"div",
							{ className: __default$u.goodToast },
							e6(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								e6("use", { xlinkHref: `${positiveMarker}#icon` })
							)
					  )
					: e6(
							"div",
							{ className: __default$u.badToast },
							e6(
								"svg",
								{
									xmlns: "http://www.w3.org/2000/svg",
									width: "17",
									height: "25",
									fill: "none",
								},
								e6("use", { xlinkHref: `${negativeMarker}#icon` })
							)
					  ),
				e6(
					"div",
					{ className: __default$u.toast__text },
					i,
					e6(
						"button",
						{ className: __default$u.toast__closeBtn, onClick: t },
						"✕"
					)
				)
			)
		);
	},
	ToastProvider = (e) => {
		let { children: t, device: a } = e,
			[i, o] = ta(null),
			s = (e) => {
				let { text: t, type: a } = e;
				o({ text: t, type: a });
			},
			n = () => {
				o(null);
			},
			r = tr(() => ({ open: s }), []);
		return e6(ToastContext.Provider, {
			value: r,
			children: [
				!a.isDesktop &&
					tl(
						e6(
							N,
							null,
							i &&
								e6(
									E,
									{ animationStyles: tT, timeout: 150 },
									e6(Toast, { close: n, text: i.text, type: i.type })
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
	decorationCircle = "Chc28t",
	decorationCircleHole = "Chc29",
	particles = "Chc31o",
	number$2 = "Chca7",
	__default$t = {
		marker: "Chc1pg",
		markerTransparent: "Chc2v9",
		learnedMarker: "Chcl9",
		learnedMarkerContainerWithAnime: "Chclw",
		markerText: "Chc14h",
		group: "Chcfq",
		hideGroup: "Chctb",
		decorationCircle: "Chc28t",
		decorationCircleHole: "Chc29",
		particles: "Chc31o",
		number: "Chca7",
	},
	MARKER_LENGTH$1 = [5, 12, 19, 25],
	markerPath$1 = (e, t, a) =>
		`M${e + 7} ${
			t + 13
		}l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${a}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class LearnMarker extends e8 {
	static contextType = ToastContext;
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: a } = this.props;
		a(e, t),
			this.context.open(
				t
					? { text: "Marked as not learned", type: "bad" }
					: { text: "Marked as learned", type: "good" }
			),
			this.setState({ leftAfterClick: !1 });
	};
	constructor(e) {
		super(e);
	}
	getMarkerParticles = (e, t) => {
		let a = [
				tu("circle", {
					className: __default$t.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				tu("circle", {
					className: __default$t.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			i = [];
		for (let o = 0; o < 7; o++) {
			let s = 0.9 * o,
				n =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(s) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				r = 14 * Math.sin(s) + t + 6,
				l =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(s + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				u = 14 * Math.sin(s + 0.45 * Math.random() - 0.225) + t + 6,
				d = tu("circle", {
					cx: n,
					cy: r,
					r: 0.75,
					className: `${__default$t.particle} ${__default$t.particle_big}`,
				}),
				p = tu("circle", {
					cx: l,
					cy: u,
					r: 0.5,
					className: `${__default$t.particle} ${__default$t.particle_small}`,
				});
			i.push(d, p);
		}
		return [a, tu("g", { className: __default$t.particles, children: i })];
	};
	render() {
		let { x: e, y: t, barNumber: a, isLearned: i } = this.props,
			o = `add-${a}`,
			s = "".padEnd(1 + 2 * String(a).length, "."),
			n = MARKER_LENGTH$1[a.toString().length - 1];
		return i
			? tu("g", {
					onClick: this.onBarClick,
					className: __default$t.group,
					children: [
						this.props.isMobileOs &&
							tu("rect", {
								"data-marker-num": a,
								x: e - 10,
								y: t - 8,
								width: 30 + n,
								height: 30,
								fillOpacity: 0,
							}),
						this.props.showAnimation && this.getMarkerParticles(e, t),
						tu("g", {
							className:
								this.props.showAnimation &&
								__default$t.learnedMarkerContainerWithAnime,
							children: [
								tu("path", {
									"data-marker-num": a,
									className: __default$t.learnedMarker,
									d: markerPath$1(e, t, n),
								}),
								tu("text", {
									className: __default$t.markerText,
									x: e + 2.4,
									y: t + 10,
									id: o,
									children: a,
								}),
							],
						}),
					],
			  })
			: tu("g", {
					className: __default$t.group,
					onClick: this.onBarClick,
					children: [
						this.props.isMobileOs &&
							tu("rect", {
								"data-marker-num": a,
								x: e - 10,
								y: t - 8,
								width: 30 + n,
								height: 30,
								fillOpacity: 0,
							}),
						tu(
							"text",
							{
								className: __default$t.number,
								x: 2 + e,
								y: t + 10,
								children: a,
							},
							"number"
						),
						tu("text", {
							className: __default$t.number,
							x: 1 + e,
							y: t + 14,
							children: s,
						}),
						!this.props.isMobileOs &&
							tu("path", {
								"data-marker-num": a,
								className: __default$t.markerTransparent,
								d: markerPath$1(e, t, n + 107),
							}),
					],
			  });
	}
}
let MARKER_LENGTH = [5, 12, 19, 25],
	markerPath = (e, t, a) =>
		`M${e + 7} ${
			t + 13
		}l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${a}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class LearnMarkerLabel extends e8 {
	static contextType = ToastContext;
	onBarClick = () => {
		let { barNumber: e, isLearned: t, onToggle: a } = this.props;
		a(e, t),
			this.context.open(
				t
					? { text: "Marked as not learned", type: "bad" }
					: { text: "Marked as learned", type: "good" }
			),
			this.setState({ leftAfterClick: !1 }),
			this.clearAfterClickInterval(),
			setTimeout(() => this.setState({ leftAfterClick: !0 }), 1500);
	};
	componentWillUnmount() {
		this.clearAfterClickInterval();
	}
	constructor(e) {
		super(e),
			(this.state = { leftAfterClick: !0, leftAfterClickTimeoutId: null });
	}
	clearAfterClickInterval() {
		this.state.leftAfterClickTimeoutId &&
			clearInterval(this.state.leftAfterClickTimeoutId);
	}
	getMarkerParticles = (e, t) => {
		let a = [
				tu("circle", {
					className: __default$t.decorationCircle,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
				tu("circle", {
					className: __default$t.decorationCircleHole,
					r: 3,
					cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
					cy: t + 6,
				}),
			],
			i = [];
		for (let o = 0; o < 7; o++) {
			let s = 0.9 * o,
				n =
					(14 + String(this.props.barNumber + 1).length) * Math.cos(s) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				r = 14 * Math.sin(s) + t + 6,
				l =
					(14 + String(this.props.barNumber + 1).length) *
						Math.cos(s + 0.45 * Math.random() - 0.225) +
					e +
					4.5 +
					2 * String(this.props.barNumber + 1).length,
				u = 14 * Math.sin(s + 0.45 * Math.random() - 0.225) + t + 6,
				d = tu("circle", {
					cx: n,
					cy: r,
					r: 0.75,
					className: `${__default$t.particle} ${__default$t.particle_big}`,
				}),
				p = tu("circle", {
					cx: l,
					cy: u,
					r: 0.5,
					className: `${__default$t.particle} ${__default$t.particle_small}`,
				});
			i.push(d, p);
		}
		return [a, tu("g", { className: __default$t.particles, children: i })];
	};
	render() {
		let {
				x: e,
				y: t,
				barNumber: a,
				isLearned: i,
				isLoopChanging: o,
			} = this.props,
			{ leftAfterClick: s } = this.state,
			n = `add-${a}`,
			r = MARKER_LENGTH[a.toString().length - 1];
		return i
			? tu("g", {
					onClick: this.onBarClick,
					className: __default$t.group,
					children: [
						!this.props.isMobileOs &&
							!o &&
							tu("g", {
								className: __default$t.hideGroup,
								style: { opacity: s ? "" : 0 },
								children: [
									tu("path", {
										"data-marker-num": a,
										className: __default$t.marker,
										d: markerPath(e, t, r + 107),
									}),
									tu("text", {
										className: __default$t.markerText,
										x: e + 2.4,
										y: t + 10,
										id: n,
										children: `${a} Mark as not learned`,
									}),
								],
							}),
					],
			  })
			: tu("g", {
					className: __default$t.group,
					onClick: this.onBarClick,
					children: [
						!this.props.isMobileOs &&
							!o &&
							tu("g", {
								className: __default$t.hideGroup,
								style: { opacity: s ? "" : 0 },
								children: [
									tu("path", {
										"data-marker-num": a,
										className: __default$t.marker,
										d: markerPath(e, t, r + 87),
									}),
									tu("text", {
										className: __default$t.markerText,
										x: e + 2.4,
										y: t + 10,
										id: n,
										children: `${a} Mark as learned`,
									}),
								],
							}),
					],
			  });
	}
}
function getAnnotationMarkerCoordY(e) {
	return e.layout.y + e.layout.layers.height - 18;
}
let LearnMarkers = ti((e) => {
		let { lines: t, partId: a, songId: i } = e,
			{
				learnMarkers: o,
				experiments: s,
				device: n,
				player: r,
				dispatch: l,
			} = m("learnMarkers", "experiments", "device", "player"),
			u =
				o.data.find((e) => e.songId === i && e.partId === a)?.learnedBars || [],
			d = s.marked_as_learned_animation?.segment === "on",
			h = tr(() => L(n) || p(n.os) || M(n.os), [n]),
			c = e9(
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
		for (let y of t)
			for (let _ of y.layout.measureLayouts) {
				let v = _.measure;
				if (v.layouts[0] !== _) continue;
				let $ = ei(v).x + 2,
					b = getAnnotationMarkerCoordY(y),
					x = v.index + 1,
					T = u.includes(x);
				f.push(
					tu(LearnMarker, {
						x: $,
						y: b,
						barNumber: x,
						isLearned: T,
						showAnimation: d,
						isMobileOs: h,
						isLoopChanging: r.isLoopChanging,
						onToggle: c,
					})
				),
					g.push(
						tu(LearnMarkerLabel, {
							x: $,
							y: b,
							barNumber: x,
							isLearned: T,
							showAnimation: d,
							isMobileOs: h,
							isLoopChanging: r.isLoopChanging,
							onToggle: c,
						})
					);
			}
		return tu(te, { children: [f, g] });
	}),
	text$7 = "C351",
	__default$s = { text: "C351" };
function BeatText(e) {
	let { text: t, layout: a, xoffset: i } = e,
		o = t.layer;
	if (o) {
		let s = a ? o.x1 - a.absoluteX : o.x1,
			n = -1 * o.y;
		return tu("text", {
			className: __default$s.text,
			x: s + i,
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
		a = e.line.strings,
		i = (a <= 4 ? t : 0) - 2 * (t - 12),
		o = 0 !== i ? `translate(0, ${-i})` : void 0,
		s = [
			tu("ellipse", { id: "dot", cx: 10, cy: 17.5 - i, rx: 1.5, ry: 1.5 }),
			tu("rect", { id: "rest1", y: 24 - i, x: -6, width: 12, height: 6 }),
			tu("rect", { id: "rest2", y: 18 - i, x: -6, width: 12, height: 6 }),
			tu("path", {
				id: "rest4",
				transform: o,
				d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
			}),
			tu("path", { id: "rest8", transform: o, d: PATH_REST8 }),
			tu("path", { id: "rest16", transform: o, d: PATH_REST16 }),
			tu("path", { id: "rest32", transform: o, d: PATH_REST32 }),
			tu("path", { id: "rest64", transform: o, d: PATH_REST64 }),
			tu("path", { id: "rest128", transform: o, d: PATH_REST128 }),
			tu("path", {
				id: "tempo",
				d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
			}),
		],
		n = !this.props.part.usedDrums;
	return tu("defs", {
		children: n
			? s
			: [
					...s,
					tu("path", { id: "drumCross", d: DRUM_CROSS }),
					tu("path", {
						id: "drumHat",
						d: "M-2-7l6.5-4l6.5 4",
						style: "fill: none",
					}),
					tu("path", {
						id: "drumHatEdge",
						d: "M-2-7h8l5 -5",
						style: "fill: none",
					}),
					tu("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
					tu("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
					tu("path", {
						id: "drumCircleCross",
						d: DRUM_CIRCLE_CROSS,
						style: "fill: none",
					}),
					tu("path", {
						id: "drumCircleStroke",
						d: DRUM_CIRCLE_STROKE,
						style: "fill: none",
					}),
					tu("path", { id: "drum", d: DRUM_BASE }),
					tu("path", { id: "drumStroke", d: DRUM_STROKE }),
					tu("path", { id: "extraLine", d: "M-4 0l16 0" }),
			  ],
	});
}
let text$6 = "bh1o4",
	line$5 = "bh162",
	dotted$2 = "bh162 bhth",
	__default$r = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
	TEXT_OFFSET$3 = 46;
function LetRing(e) {
	let { layer: t } = e,
		{ x1: a, x2: i, y: o } = t,
		s = i - a,
		n = -1 * o - 2,
		r = [
			tu(
				"text",
				{ className: __default$r.text, x: a, y: n, children: "let ring" },
				"let ring"
			),
		];
	return (
		s > 46 &&
			(r.push(
				tu(
					"line",
					{
						className: __default$r.dotted,
						x1: 46 + a,
						y1: -3 + n,
						x2: s - 2 + a,
						y2: -3 + n,
					},
					"dotted"
				)
			),
			r.push(
				tu(
					"line",
					{
						className: __default$r.line,
						x1: s + a,
						y1: 1 + n,
						x2: s + a,
						y2: -7 + n,
					},
					"line"
				)
			)),
		tu(te, { children: r })
	);
}
let text$5 = "C4a2yy",
	line$4 = "C4a2ve",
	dotted$1 = "C4a2ve C4a1op",
	__default$q = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
	TEXT_OFFSET$2 = 35;
function PalmMute(e) {
	let { layer: t } = e,
		{ x1: a, x2: i, y: o } = t,
		s = -1 * o - 2,
		n = i - a,
		r = [
			e6(
				"text",
				{ className: __default$q.text, x: a, y: s, key: "pm" },
				"P. M."
			),
		];
	return (
		n > 35 &&
			(r.push(
				e6("line", {
					className: __default$q.dotted,
					x1: 35 + a,
					y1: -3 + s,
					x2: n - 2 + a,
					y2: -3 + s,
					key: "dotted",
				})
			),
			r.push(
				e6("line", {
					className: __default$q.line,
					x1: n + a,
					y1: 1 + s,
					x2: n + a,
					y2: -7 + s,
					key: "line",
				})
			)),
		e6(te, null, r)
	);
}
let text$4 = "q71wu",
	line$3 = "q72a",
	dotted = "q72a q712i",
	__default$p = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
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
		tu(
			"text",
			{ className: __default$p.text, x: i, y: r, children: l },
			"Harm."
		),
	];
	return (
		n > 40 &&
			(u.push(
				tu(
					"line",
					{
						className: __default$p.dotted,
						x1: 40 + i,
						y1: -3 + r,
						x2: n - 2 + i,
						y2: -3 + r,
					},
					"dotted"
				)
			),
			u.push(
				tu(
					"line",
					{
						className: __default$p.line,
						x1: n + i,
						y1: 1 + r,
						x2: n + i,
						y2: -7 + r,
					},
					"line"
				)
			)),
		tu(te, { children: u })
	);
}
let path$5 = "C0x28",
	__default$o = { path: "C0x28" },
	VIBRATO_PATTERN_WIDTH = 5.5,
	VIBRATO_MIN_WIDTH = 14,
	VIBRATO_MIN_ITERATIONS = 2,
	VIBRATO_SIDES = 3;
function generatePath$2(e, t, a, i) {
	let o = `M${t} ${a + 4}l3-3.5`,
		s = `v${i ? 2 : 1}.8l-3 3.5`;
	for (let n = 0; n < e; n++)
		(o += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
			(s += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
	return o + s + "z";
}
function Vibrato(e) {
	let { layer: t, wide: a } = e,
		{ x1: i, x2: o, y: s } = t,
		n = o - i,
		r = generatePath$2(n > 14 ? Math.floor((n - 3) / 5.5) : 2, i, -(s + 6), a);
	return tu("path", { className: __default$o.path, d: r });
}
class Effects extends e8 {
	renderEffect = (e, t) => {
		let a = {
			layer: e.layer,
			key: `${e.effect}-${this.props.line.index}-${t}`,
			line: this.props.line,
			effectValue: e.effectValue,
		};
		switch (e.effect) {
			case "letRing":
				return e6(LetRing, a);
			case "palmMute":
				return e6(PalmMute, a);
			case "harmonic":
				return e6(Harmonic, a);
			case "vibrato":
				return e6(Vibrato, { ...a, wide: !1 });
			case "wideVibrato":
				return e6(Vibrato, { ...a, wide: !0 });
			default:
				return null;
		}
	};
	render() {
		return e6(te, null, this.props.line.effects.map(this.renderEffect));
	}
}
function platformVar(e, t) {
	return () => e;
}
let NOTE_TEXT_OFFSET = (e) => platformVar(0);
function Note(e) {
	let { note: t, beat: a, part: i, x: o, edited: s, platform: n } = e,
		{ intervalSize: r } = a.layout.measureLayout.lineLayout;
	if (!eo(t) && (!s || (s && t.bogus))) return null;
	let l = `translate(${o}, 0)`;
	if (a.rest) {
		if (a.layout.usedStrings || (0 !== a.voice && a.layout.usedRest))
			return null;
		let u = en[`rest${a.voice}`],
			d = tu(
				"use",
				{ className: u, xlinkHref: `#rest${a.type}`, transform: l },
				"rest"
			);
		if (a.dotted) {
			let p = tu(
				"use",
				{ className: u, xlinkHref: "#dot", transform: l },
				"dot"
			);
			return tu(te, { children: [d, p] });
		}
		return d;
	}
	if (i.usedDrums && i.isDrumStdOn) {
		let h = en[`drums${a.voice}`],
			c = `translate(${o}, ${0.5 + r * t.string})`,
			m = t.orientation ? c : c + " translate(-10, 0)";
		return tu(te, {
			children: [
				(t.string <= -1 || t.string >= 5) &&
					tu(er, {
						noteString: t.string,
						className: el.strings,
						noteTransform: m,
						intervalSize: r,
					}),
				1 !== a.type &&
					tu("path", {
						className: en[`stick${a.voice}`],
						transform: c,
						d: eu(t.fret, t.string, r),
					}),
				(t.tie || t.ghost) &&
					tu(
						"text",
						{ x: o - 6, y: r * t.string + NOTE_TEXT_OFFSET()(n) + 5 },
						"("
					),
				tu(ed, { fret: t.fret, className: h, transform: m }),
				(t.tie || t.ghost) &&
					tu(
						"text",
						{ x: o + 11, y: r * t.string + NOTE_TEXT_OFFSET()(n) + 5 },
						")"
					),
			],
		});
	}
	let f = "",
		g = 0,
		y = i.usedDrums;
	if (y) {
		let _ = i.usedDrums.get(t.fret);
		_ && ((f = _.name || "*"), (g = _.string || 0));
	} else (f = t.dead ? "X" : t.fret.toString()), (g = t.string);
	let v = en[`${y ? "vDrum" : "voice"}${a.voice}`];
	s && (v = `${v} ${en.edited}`);
	let $ = {
			className: v,
			x: o,
			y: r * g + NOTE_TEXT_OFFSET()(n),
			children: t.tie || t.ghost ? `(${f})` : f,
			style: {},
		},
		b = tu("text", $, "text");
	if (t.harmonic) {
		let x = tu(
			"path",
			{
				className: en.harmonic,
				transform: `translate(${o - 17}, ${-3.5 + r * g} )`,
				d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
			},
			"harmonic"
		);
		return tu(te, { children: [x, b] });
	}
	return b;
}
let slur = "B642k5",
	__default$n = { slur: "B642k5" };
function generatePath$1(e, t, a, i, o, s) {
	let n = t ? ec(t, em) : 0,
		r = o - n - (a ? ec(a, em) : 0),
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
		let s = ep(i).beat,
			n = eh(i).beat,
			r = eh(i).note;
		if (n.layout && s.layout) {
			let l = o.getTieSlurPathLength(s, n, !0),
				{ intervalSize: u } = s.layout.measureLayout.lineLayout;
			return tu("path", {
				className: __default$n.slur,
				d: generatePath$1(t - l, null, r, r.string, l, u),
			});
		}
	} else if (a) {
		let d = ep(a).beat,
			p = eh(a).beat,
			h = ep(a).note,
			c = eh(a).note;
		if (p.layout && d.layout) {
			let m = o.areBeatsInSameSlice(d, p),
				f = o.getTieSlurPathLength(d, p, !1),
				{ intervalSize: g } = d.layout.measureLayout.lineLayout;
			return tu("path", {
				className: __default$n.slur,
				d: generatePath$1(t, h, m ? c : null, h.string, f, g),
			});
		}
	}
	return null;
}
let tie = "Bbl9p",
	__default$m = { tie: "Bbl9p" };
function generatePath(e, t, a, i, o, s) {
	let n = t ? ec(t, ef) : 0,
		r = o - n - (a ? ec(a, ef) : 0),
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
		let s = ep(i).beat,
			n = eh(i).beat,
			r = eh(i).note;
		if (n.layout && s.layout) {
			let l = o.getTieSlurPathLength(s, n, !0),
				u = r.string,
				{ intervalSize: d } = s.layout.measureLayout.lineLayout;
			return tu("path", {
				className: __default$m.tie,
				d: generatePath(t - l, null, r, u, l, d),
			});
		}
	}
	if (a) {
		let p = ep(a).beat,
			h = eh(a).beat,
			c = ep(a).note,
			m = eh(a).note;
		if (h.layout && p.layout) {
			let f = o.areBeatsInSameSlice(p, h),
				g = o.getTieSlurPathLength(p, h, !1),
				{ intervalSize: y } = p.layout.measureLayout.lineLayout,
				_ = c.string;
			return tu("path", {
				className: __default$m.tie,
				d: generatePath(t, c, f ? m : null, _, g, y),
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
	__default$l = { slide: "zy1tz" };
function Slide(e) {
	let { x: t, cfx: a, note: i } = e,
		{ intervalSize: o } = i.beat.layout.measureLayout.lineLayout,
		s = ep(a).beat,
		n = eh(a).beat;
	if (!n.layout || !s.layout) return null;
	let r = ep(a).note,
		l = eh(a).note,
		u = r.string,
		d = r.fret >= l.fret ? -2 : 2,
		p = eg(s, i.beat),
		h = eg(s, s),
		c = eg(s, n),
		m = {
			x1: t + h - p + ec(r, ey),
			y1: o * u + d,
			x2: t + c - p - ec(l, ey),
			y2: o * u - d,
		},
		f = trimLineX(m, ev(i.beat.layout), e_(i.beat.layout));
	return tu("line", { className: __default$l.slide, ...f });
}
let arrow = "Bxm1ag",
	__default$k = { arrow: "Bxm1ag" };
function Arrow(e) {
	let { x: t, y: a, up: i } = e;
	return tu("path", {
		className: __default$k.arrow,
		d: `M ${t},${a} l 2,${i ? 5 : -5} -4,0 2,${i ? -5 : 5}`,
	});
}
let up = "C9k1hh",
	down = "C9k17",
	__default$j = { up: "C9k1hh", down: "C9k17" },
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
	return tu("text", {
		className: i ? __default$j.up : __default$j.down,
		x: t,
		y: i ? a - TOP_OFFSET$1(s) : a + BOTTOM_OFFSET(s),
		children: getText(o),
	});
}
let prebend = "Cs020",
	path$4 = "Cs04d",
	hold = "Cs04d Cs0dp",
	__default$i = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function renderPrebend(e, t, a, i, o, s) {
	return [
		tu(
			"line",
			{ className: __default$i.prebend, x1: a, y1: i + ex, x2: a, y2: o },
			`prebend-${e}`
		),
		tu(Arrow, { x: a, y: o, up: !0 }, `arrow-${e}`),
		tu(BendLevel, { tone: t, x: a, y: o, up: !0, platform: s }, `y-${e}`),
	];
}
function renderHold(e, t, a, i, o, s) {
	return t <= 0
		? null
		: [
				tu(
					"line",
					{ className: __default$i.hold, x1: a, y1: i, x2: o, y2: s },
					`hold-${e}`
				),
		  ];
}
function doesLastBendEndAtTone(e, t) {
	if (!e) return !1;
	let a = ep(e).note,
		i = a.bend;
	if (!i) return !1;
	let o = i.points,
		s = o.length;
	return !(s < 1) && o[s - 1].tone === t;
}
function isLastBendElAHold(e) {
	if (!e) return !1;
	let t = ep(e).note,
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
		g = o !== s || 0 !== a || (f && c) ? 0 : ec(t, eb),
		y = [
			tu(
				"path",
				{
					className: __default$i.path,
					d: `M${s + g},${n}Q${r},${n} ${r},${d ? l + 4 : l - 4}`,
				},
				`bend-${e}`
			),
			tu(Arrow, { x: r, y: l, up: d }, `arrow-${e}`),
		];
	return (
		0 !== i &&
			y.push(
				tu(BendLevel, { tone: i, x: r, y: l, up: d, platform: u }, `y-${e}`)
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
	let s = e$ + i * e.string;
	return function (i, n, r) {
		let { tone: l, position: u } = n,
			d = 0 === l ? s : e$ - l / eT;
		if (0 === r) {
			if (!e.tie && 0 !== l) {
				let p = renderPrebend(r, l, t, s, d, o);
				return accumulate(i, p, l, t, d);
			}
			return accumulate(i, null, l, t, 0 !== l ? d : s);
		}
		let { prevTone: h, prevX: c, prevY: m } = i,
			f = (a * u) / 60 + t;
		if (l === h) {
			let g = renderHold(r, l, c, d, f, d);
			return accumulate(i, g, l, f, d);
		}
		let y = renderBendOrRelease(r, e, h, l, t, c, m, f, d, o);
		return accumulate(i, y, l, f, d);
	};
}
function Bend(e) {
	let { cfx: t, note: a, slicingMode: i, x: o, platform: s } = e,
		n = ep(t).note,
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
	return tu(te, { children: p });
}
let lyrics = "ls209",
	__default$h = { lyrics: "ls209" };
function BeatLyrics(e) {
	let { lyrics: t, x: a } = e,
		i = t.layer;
	if (i) {
		let o = ew(t) + a + i.diff;
		return tu("text", {
			className: __default$h.lyrics,
			x: o,
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
	let l = ec(t, ey);
	return tu("line", {
		className: __default$l.slide,
		x1: n * l + a,
		y1: o * s + 2 * r,
		x2: n * (l + 15) + a,
		y2: o * s - 2 * r,
	});
}
let note$1 = "Cge206",
	correction$1 = "Cgen4",
	background$1 = "Cge2e0",
	__default$g = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function EditedNote(e) {
	let { fret: t, x: a, string: i, originalFret: o, intervalSize: s } = e;
	if ("" === o) {
		let n = t.length >= 2 ? 11.5 : 7.5;
		return tu(te, {
			children: [
				tu("line", {
					className: __default$g.background,
					x1: a - n,
					y1: s * i,
					x2: a + n,
					y2: s * i,
				}),
				tu("text", {
					className: __default$g.note,
					x: a,
					y: s * i,
					children: t,
					"data-fret": t,
				}),
			],
		});
	}
	let r = 10;
	return (
		t.length >= 2 && (r += 3),
		o.length >= 2 && (r += 4),
		tu(te, {
			children: [
				"" !== t &&
					tu("text", {
						className: __default$g.note,
						x: a + r,
						y: s * i - 4,
						children: t,
						"data-fret": t,
					}),
				tu("line", {
					className: __default$g.correction,
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
	__default$f = {
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
		__default$f.index,
		__default$f.middle,
		__default$f.ring,
		__default$f.pinky,
	];
function Fingering(e) {
	let { fingerL: t, string: a, x: i, fret: o } = e,
		s = fingerStyles[t - 1] || __default$f.index,
		n = 8;
	return (
		"number" == typeof o && Math.floor(o / 10) > 0 && (n = 12),
		e6("circle", { className: s, cx: i + n, cy: eC * a + 0, r: 3 })
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
	__default$e = {
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
	return tu(te, {
		children: [
			tu(
				"line",
				{
					className: __default$e.arrowLine,
					x1: 4 + d,
					y1: u,
					x2: 4 + d,
					y2: (i + 0.5) * s,
				},
				"line"
			),
			tu(
				"polygon",
				{
					className: __default$e.arrowPolygon,
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
	for (let p of a.beats)
		if (p.lyrics)
			for (let h of p.lyrics)
				t.push(tu(BeatLyrics, { lyrics: h, x: d }, `lyrics${p.index}`));
		else {
			p.text &&
				t.push(
					tu(
						BeatText,
						{ text: p.text, layout: a, xoffset: d },
						`text${p.index}`
					)
				);
			let c = p.tappingWithLayer;
			c &&
				c.layer &&
				t.push(
					tu(
						"text",
						{
							className: __default$e.tapping,
							y: -1 * c.layer.y,
							x: Math.max(-1 * Math.floor(c.width / 2) + d, -15),
							dy: "-0.25em",
							children: c.text,
						},
						`tap${p.index}`
					)
				);
			let m = p.chord;
			m &&
				m.layer &&
				t.push(
					tu(
						"text",
						{
							className: __default$e.chord,
							y: -1 * m.layer.y,
							x: Math.max(-1 * Math.floor(m.width / 2) + d, -15),
							dy: "-0.25em",
							children: m.text,
						},
						`chord${p.index}`
					)
				);
			let f = Number.MAX_VALUE,
				g = 0;
			if (!o.rest) {
				if (i.usedDrums) {
					let y = p.notes
						.filter((e) => !e.bogus)
						.map((e) => ({ string: Math.floor(2 * e.string), note: e }));
					y.sort((e, t) => e.string - t.string);
					let _ = null;
					for (let v of y)
						(v.note.orientation =
							!(_ && 1 >= Math.abs(v.string - _.string)) ||
							!_.note.orientation),
							(_ = v);
				}
				p.hat &&
					i.isDrumStdOn &&
					t.push(
						tu(
							"path",
							{
								className: __default$e.hat,
								d: `M${d - 2}${-p.hat.layer.y}h8l5 -5`,
							},
							`hat${p.index}`
						)
					);
				let $ =
						n && n.find((e) => e.beatNum === p.index && e.voice === p.voice),
					b = $ && $.editedNotes;
				for (let x of (p.staccato &&
					p.staccato.layer.visible &&
					t.push(
						tu(
							"circle",
							{
								className: p.staccato.layer.voice
									? __default$e.staccatoSecondVoice
									: __default$e.staccato,
								cx: d,
								cy: -p.staccato.layer.y - 5,
								r: 2,
							},
							`st${p.index}`
						)
					),
				p.accentuated &&
					p.accentuated.layer.visible &&
					t.push(
						tu(
							"path",
							{
								className: p.accentuated.layer.voice
									? __default$e.accentuatedSecondVoice
									: __default$e.accentuated,
								d: `m${d - 5}${-p.accentuated.layer.y - 2}l9-3l-9-3`,
							},
							`acc${p.index}`
						)
					),
				p.heavyAccentuated &&
					p.heavyAccentuated.layer.visible &&
					t.push(
						tu(
							"path",
							{
								className: p.heavyAccentuated.layer.voice
									? __default$e.accentuatedSecondVoice
									: __default$e.accentuated,
								d: `m${d - 4}${
									-p.heavyAccentuated.layer.y - 2
								}l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
							},
							`hacc${p.index}`
						)
					),
				p.notes)) {
					(p.upStroke || p.downStroke) &&
						!x.tie &&
						((f = Math.min(f, x.string)), (g = Math.max(g, x.string))),
						t.push(
							tu(
								Note,
								{
									note: x,
									beat: p,
									part: i,
									x: d,
									platform: l,
									edited: b && !!b.find((e) => e.string === x.string),
								},
								`note${p.index}-${x.index}-voice${p.voice}`
							)
						),
						x.tieStart &&
							t.push(
								tu(
									Tie,
									{ start: x.tieStart, slicingMode: s, x: d },
									`tie${p.index}-${x.index}`
								)
							),
						x.tieEnd &&
							eS(x.tieEnd) &&
							t.push(
								tu(
									Tie,
									{ end: x.tieEnd, slicingMode: s, x: d },
									`tieEnd${p.index}-${x.index}`
								)
							),
						x.slurStart &&
							t.push(
								tu(
									Slur,
									{ start: x.slurStart, slicingMode: s, x: d },
									`slur${p.index}-${x.index}`
								)
							),
						x.slurEnd &&
							eS(x.slurEnd) &&
							t.push(
								tu(
									Slur,
									{ end: x.slurEnd, slicingMode: s, x: d },
									`slurEnd${p.index}-${x.index}`
								)
							),
						x.leftSlide &&
							t.push(
								tu(SlideShort, {
									note: x,
									type: "left",
									key: `slideShortLeft${p.index}-${x.index}`,
									x: d,
								})
							),
						x.rightSlide &&
							"shift" !== x.rightSlide &&
							"legato" !== x.rightSlide &&
							t.push(
								tu(SlideShort, {
									note: x,
									type: "right",
									key: `slideShortRight${p.index}-${x.index}`,
									x: d,
								})
							),
						x.slideStart &&
							t.push(
								tu(
									Slide,
									{ note: x, cfx: x.slideStart, x: d },
									`slide${p.index}-${x.index}`
								)
							),
						x.slideEnd &&
							eS(x.slideEnd) &&
							t.push(
								tu(
									Slide,
									{ note: x, cfx: x.slideEnd, x: d },
									`slideEnd${p.index}-${x.index}`
								)
							);
					let T = s.bendsForNote(x);
					for (let w = 0; w < T.length; w++) {
						let C = T[w];
						s.shouldDrawBendOnNote(C, x) &&
							t.push(
								tu(
									Bend,
									{ cfx: C, note: x, slicingMode: s, x: d, platform: l },
									`bend${p.index}-${x.index}-${w}`
								)
							);
					}
					let S = r?.find((e) => e.index === p.index),
						k = S?.fingerings.find((e) => e.string === x.string);
					k &&
						t.push(
							tu(
								Fingering,
								{ fingerL: k.fingerL, x: d, string: x.string, fret: x.fret },
								`finger${p.index}-${x.index}`
							)
						);
				}
				if (b) {
					let M = a.measureLayout.lineLayout.intervalSize;
					b.forEach((e) =>
						t.push(
							tu(
								EditedNote,
								{
									x: d,
									fret: e.fret,
									originalFret: e.originalFret,
									string: e.string,
									intervalSize: M,
								},
								`editedNote${p.index}-${e.string}`
							)
						)
					);
				}
				if (!i.usedDrums && (p.upStroke || p.downStroke) && f < g) {
					let L = a.measureLayout.lineLayout.intervalSize;
					t.push(
						tu(
							Stroke,
							{ up: !!p.upStroke, min: f, max: g, xoffset: d, intervalSize: L },
							`stroke${p.index}`
						)
					);
				}
			}
		}
	return tu(te, { children: t });
}
let path$3 = "rw256",
	text$2 = "rw2jc",
	line$2 = "rw33j",
	__default$d = { path: "rw256", text: "rw2jc", line: "rw33j" },
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
	return e6(
		"g",
		{ transform: `translate(${i},-${o + 42})` },
		e6("path", {
			d: note,
			transform: "translate(10,10)",
			className: __default$d.path,
		}),
		e6("path", {
			d: note,
			transform: "translate(25,10)",
			className: __default$d.path,
		}),
		e6("path", {
			d: beam,
			transform: "translate(18,10)",
			className: __default$d.path,
		}),
		n &&
			e6("path", {
				d: beam,
				transform: "translate(18,15)",
				className: __default$d.path,
			}),
		e6("path", {
			d: note,
			transform: "translate(48,10)",
			className: __default$d.path,
		}),
		e6("path", {
			d: note,
			transform: "translate(63,10)",
			className: __default$d.path,
		}),
		(s || n) &&
			e6("path", {
				d: beam,
				transform: "translate(56,10)",
				className: __default$d.path,
			}),
		n &&
			e6("path", {
				d: "M8.8 0h7v3.5h-7z",
				transform: "translate(56,15)",
				className: __default$d.path,
			}),
		"8th" === t &&
			e6("path", {
				d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
				transform: "translate(63,10)",
				className: __default$d.path,
			}),
		!s && e6("text", { className: __default$d.text, x: 64, y: 0 }, 3),
		!s && e6("path", { className: __default$d.line, d: "M51 7V4h9m7 0h9v3" }),
		e6("path", {
			d: "M37 27v-1h10v1zm0 3v-1h10v1z",
			className: __default$d.path,
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
	__default$c = {
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
	let n = eM + s,
		r = n / 2,
		l = "",
		u = "",
		d = 0,
		p = [],
		h = [, , , ,],
		c = !1,
		m = 0;
	for (let f of a) {
		let g = f.layout.x;
		1 !== f.type &&
			(l +=
				2 === f.type
					? `M${i + g},${o + r + 2}v${r}`
					: `M${i + g},${o + 2}v${n}`);
		let y = 0,
			_ = 8;
		if (
			(f.beamStart ? (c = !0) : f.beamStop && (c = !1), c && m < a.length - 1)
		) {
			let v = a[m + 1],
				$ = Math.min(f.type, v.type);
			for (f.tupletStop && ($ = Math.min($, 8)); _ <= $; ) {
				let b = h[y];
				b
					? (b.length += v.layout.x - f.layout.x)
					: ((b = { x: g, length: v.layout.x - f.layout.x }), (h[y] = b)),
					y++,
					(_ *= 2);
			}
		}
		let x = y,
			T = y < d || f.tupletStop || f.beamStop;
		for (; y < d; y++, _ *= 2) {
			let w = h[y];
			(h[y] = void 0),
				w && (l += `M${i + w.x},${o + n - ek * y}v2h${w.length}v-2z`);
		}
		for (; _ <= f.type; y++, _ *= 2)
			l += `M${i + g},${o + n - ek * y}v2h${T ? "-7" : "7"}v-2z`;
		if (
			(f.dotted &&
				1 !== f.type &&
				(l += `M${i + g + 4},${o + n - ek * y}v2h2v-2z`),
			f.tremolo)
		)
			for (let C = 0; C < f.tremolo.type; C++)
				u += `M${i + g - 5},${o + 6 + 3 * C}l10-3z`;
		(d = x), m++;
	}
	if (l.length) {
		let S = `voice${t.index}`;
		p.push(tu("path", { className: __default$c[S], d: l }));
	}
	if (u.length) {
		let k = `voice${t.index}-tremolo`;
		p.push(tu("path", { className: __default$c[k], d: u }));
	}
	return p.length ? tu(te, { children: p }) : null;
}
let path$2 = "Bhq244",
	text$1 = "Bhq1lk",
	voice0 = "Bhq8x",
	voice1 = "Bhq1hy",
	voice2 = "Bhq13i",
	voice3 = "Bhq2w3",
	__default$b = {
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
	r += eL - 2 + l;
	let m = `voice${a.index}`;
	return tu("g", {
		className: __default$b[m],
		transform: `translate(${u},${r})`,
		children: [
			tu("text", {
				className: __default$b.text,
				x: p,
				y: TEXT_OFFSET(s),
				children: t,
			}),
			tu("path", { className: __default$b.path, d: c }),
		],
	});
}
let path$1 = "Chi2a3",
	text = "Chi2up",
	__default$a = { path: "Chi2a3", text: "Chi2up" };
function AlternateEnding(e) {
	let { layer: t, alternateEnding: a } = e.alternateEnding;
	if (t) {
		let { x1: i, x2: o, y: s } = t,
			n = o - i,
			r = e.x;
		return e.isFirstLayout
			? e6(
					"g",
					{ transform: `translate(${r},${-1 * s - 14})` },
					e6(
						"text",
						{ className: __default$a.text, x: 4, y: "14" },
						a.join(",")
					),
					e6("path", {
						className: __default$a.path,
						d: `M 1,14 L 1,0 ${n - 6},0`,
					})
			  )
			: e6(
					"g",
					{ transform: `translate(${r},${-1 * s - 14})` },
					e6("path", { className: __default$a.path, d: `M 1,0 L ${n - 6},0` })
			  );
	}
	return null;
}
let marker = "kw1ty",
	__default$9 = { marker: "kw1ty" };
function Marker(e) {
	let { marker: t, x: a } = e,
		i = t.layer;
	return i
		? tu("text", {
				className: __default$9.marker,
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
	__default$8 = {
		rect: "Bjniz",
		dot: "Bjnch",
		number: "Bjn2ws",
		path: "Bjnzo",
	};
function RepriseStart(e) {
	let { line: t, x: a } = e,
		{ intervalSize: i } = t.layout,
		o = (t.strings - 1) * i;
	return e6(
		"g",
		{ className: "Rep", transform: `translate(${a},0)` },
		e6("rect", { className: __default$8.rect, width: 4, height: o }),
		e6("path", { className: __default$8.path, d: `M 8,0 L 8,${o}` }),
		e6("ellipse", {
			className: __default$8.dot,
			cx: 13,
			cy: Math.floor(o / 3),
			rx: 2,
			ry: 2,
		}),
		e6("ellipse", {
			className: __default$8.dot,
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
	return e6(
		"g",
		{ transform: `translate(${a.width - 18 + i},0)` },
		n > 2 &&
			e6("text", { className: __default$8.number, x: 2.5, y: -2 }, n + "x"),
		e6("rect", { className: __default$8.rect, x: 14, width: 4, height: s }),
		e6("path", { className: __default$8.path, d: `M 11,0 L 11,${s}` }),
		e6("ellipse", {
			className: __default$8.dot,
			cx: 6,
			cy: Math.floor(s / 3),
			rx: 2,
			ry: 2,
		}),
		e6("ellipse", {
			className: __default$8.dot,
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
	__default$7 = {
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
		p = ei(l) === t,
		h = eP(l) === t,
		c = [];
	if (p) {
		void 0 !== e.platform &&
			c.push(
				tu(
					"text",
					{
						className: __default$7.number,
						x: 3 + u,
						y: -7.2,
						children: l.index + 1,
					},
					"number"
				)
			),
			l.repeatStart &&
				c.push(tu(RepriseStart, { line: a, x: u }, "repeatStart"));
		let m = l.tripletFeelWithLayer;
		m && c.push(tu(TripletFeel, { tripletFeel: m, x: u }, "tripletFeel"));
	}
	for (let f of (h &&
		l.repeat &&
		c.push(tu(RepriseEnd, { line: a, measureLayout: t, x: u }, "repeat")),
	t.alternateEndingWithLayer &&
		c.push(
			tu(
				AlternateEnding,
				{ alternateEnding: t.alternateEndingWithLayer, isFirstLayout: p, x: u },
				"alternateEnding"
			)
		),
	p &&
		l.markerWithLayer &&
		c.push(tu(Marker, { marker: l.markerWithLayer, x: u }, "marker")),
	t.tempoLayouts.values())) {
		let { tempo: g, layer: y } = f;
		g &&
			y &&
			c.push(
				tu(
					"g",
					{
						className: __default$7.tempo,
						transform: `translate(${y.x1},${-1 * y.y})`,
						children: [
							tu("use", { xlinkHref: "#tempo" }),
							tu("text", {
								className: __default$7.tempoText,
								y: -3,
								x: 8,
								children: `=${g.bpm}`,
							}),
						],
					},
					"tempo"
				)
			);
	}
	let _ = 0;
	for (let v of t.beatsLayouts) {
		let $ = n?.voices[0].beats;
		c.push(
			tu(
				Beat,
				{
					layout: v,
					part: i,
					measure: l,
					slicingMode: o,
					x: u,
					measureEditorData: s,
					measureFingerings: $,
					platform: r,
				},
				`beat${_}`
			)
		),
			_++;
	}
	if (p && l.hasSignature) {
		let b = Math.floor((i.strings / 2) * d);
		c.push(
			tu(
				"text",
				{
					className: __default$7.signature,
					x: t.signatureOffset + u,
					y: b + SIGNATURE_NUMERATOR_SHIFT(r),
					children: l.signature[0],
				},
				"t1"
			)
		),
			c.push(
				tu(
					"text",
					{
						className: __default$7.signature,
						x: t.signatureOffset + u,
						y: b + SIGNATURE_DENOMINATOR_SHIFT(r),
						children: l.signature[1],
					},
					"t2"
				)
			);
	}
	if (l.rhythmLines) {
		let x = 0,
			T = d * a.strings;
		for (let w of l.voices)
			if (!(w.hasSameRhythm || w.rest)) {
				let C = t.beatsLayouts
						.map((e) => e.beats.find((e) => e.voice == w.index))
						.filter(Boolean),
					S = a.rhythmEffects.tremolo.get(w.index) || !1,
					k = a.rhythmEffects.tremolo.get(w.index) || !1,
					M = C.some((e) => e.type > 8),
					L = S && M ? eN : 0,
					P = k ? eE : 0,
					N = L + P,
					E = T + w.index * (eL + N);
				c.push(
					tu(
						Rhythm,
						{ voice: w, beats: C, x: u, y: E, tremoloOffset: L },
						`rhythm${w.index}`
					)
				),
					(T = E);
				let B = 0,
					A = null;
				for (let R of C)
					R &&
						(R.tupletStart && ((B = R.tuplet), (A = R)),
						B &&
							A &&
							R.tupletStop &&
							(c.push(
								tu(
									Tuplet,
									{
										tuplet: B,
										start: A,
										stop: R,
										voice: w,
										platform: r,
										x: u,
										y: E,
										tremoloOffset: L,
									},
									`tuplet${x}`
								)
							),
							(B = 0),
							x++));
			}
	}
	return tu(te, { children: c });
}
let drawLineWithSpaces = (e, t) => e + `H${t.x}m${t.w},0`;
function Strings(e) {
	let { line: t, hasTuning: a, slicingMode: i, part: o } = e,
		{ intervalSize: s } = t.layout,
		n = t.spaces,
		r = s * (t.strings - 1),
		l = "",
		u = t.layout.measureLayouts;
	for (let d = a ? 1 : 0; d < u.length; d++) {
		let p = u[d];
		ei(p.measure) === p && (l += `M${p.x},0v${r}`);
	}
	let h = u[0].x,
		c = i.stringLineMaxX(t);
	if (o.usedDrums && o.isDrumStdOn)
		for (let m = 0; m < t.strings; m++) l += `M${h},${s * m} H${c}`;
	else
		for (let f = 0; f < t.strings; f++)
			l += `M${h},${s * f}` + n[f].reduce(drawLineWithSpaces, "") + `H${c}`;
	let g = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
	return (
		eP(g.measure) === g && (l += `M${c},0v${r}`),
		tu("path", { className: el.strings, d: l })
	);
}
let tuning = "D38xz",
	__default$6 = { tuning: "D38xz" },
	LEFT_OFFSET$1 = platformVar(5);
function Tuning(e) {
	let { tuning: t, platform: a, intervalSize: i } = e;
	return t
		? e6(
				te,
				null,
				eB(t, !1).map((e, t) =>
					e6(
						"text",
						{
							x: LEFT_OFFSET$1(a),
							y: 1 + t * i,
							key: t,
							className: __default$6.tuning,
						},
						e
					)
				)
		  )
		: null;
}
let line = "Cw81bf",
	__default$5 = { line: "Cw81bf" };
function Line(e) {
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
		p = n.expectedSliceWidth(a.layout.unscaledWidth) + (i ? 0 : eA),
		{ intervalSize: h } = a.layout,
		c = "http://www.w3.org/2000/svg",
		m = a.layout.height,
		f = `${i ? 0 : -eA / 2} -${a.layout.layers.height} ${p} ${m}`;
	if (!d) {
		let [g, y] = ta(a.index < 5),
			_ = to();
		if (
			(tn(() => {
				if (!g) {
					if (r)
						try {
							let e = new IntersectionObserver(
								(e) => {
									e[0].isIntersecting && y(!0);
								},
								{ rootMargin: "0px 0px 500px 0px" }
							);
							return _.current && e.observe(_.current), () => e.disconnect();
						} catch (t) {
							requestAnimationFrame(() => y(!0));
						}
					else eR(() => y(!0), 50);
				}
			}, [g, r]),
			!g)
		)
			return tu(
				"svg",
				{
					xmlns: c,
					version: "1.1",
					ref: _,
					width: p,
					viewBox: f,
					className: __default$5.line,
				},
				"line-stub" + a.index
			);
	}
	let v = a.capo,
		$ = !!s;
	return tu(
		"svg",
		{
			xmlns: c,
			version: "1.1",
			width: p,
			viewBox: f,
			className: __default$5.line,
			children: [
				t && tu(Defs, { part: o, line: a }),
				$ && tu(Tuning, { tuning: s, platform: d, intervalSize: h }),
				!!v && !d && tu(tv, v),
				tu(Strings, { line: a, hasTuning: $, slicingMode: n, part: o }),
				...a.hangingText.map((e, t) =>
					tu(BeatText, { text: e, layout: void 0, xoffset: 0 }, t.toString())
				),
				tu(Effects, { line: a }),
				...a.layout.measureLayouts.map((e) =>
					tu(
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
}
let Lines = ti((e) => {
		let {
			lines: t,
			part: a,
			tuning: i,
			slicingMode: o,
			fingerings: s,
			lazy: n,
			tabEditorData: r,
			platform: l,
		} = e;
		return tu(te, {
			children: t.map((e) =>
				tu(
					Line,
					{
						line: e,
						part: a,
						tuning: 0 === e.index && i,
						inlineDefs: 0 === e.index,
						slicingMode: o,
						tabEditorData: r,
						fingerings: s,
						lazy: n,
						platform: l,
					},
					e.index.toString()
				)
			),
		});
	}),
	editor = "Ceg2uy",
	correction = "Ceg2gt",
	editorDrag = "Ceg2uy Ceg2ph",
	keyboard = "Ceg9t",
	digit = "Ceghf",
	remove = "Ceg19o",
	zero = "Ceg2im",
	__default$4 = {
		editor: "Ceg2uy",
		correction: "Ceg2gt",
		editorDrag: "Ceg2uy Ceg2ph",
		keyboard: "Ceg9t",
		digit: "Ceghf",
		remove: "Ceg19o",
		zero: "Ceg2im",
	},
	cancelTimer = () => {
		clearTimeout(updateTimer), (updateTimer = null);
	},
	MAX_FRET = 24;
class NoteEditor extends e8 {
	refDrag = (e) => {
		this.drag = e;
	};
	noteMoveAllowed() {
		return "on" === this.props.experiments.editor_move_note.segment;
	}
	formClick = (e) => {
		e.preventDefault(), e.stopPropagation();
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
	moveNote = (() => {
		var e = this;
		return function (t) {
			let a =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: "shortcut";
			if (!e.noteMoveAllowed()) return;
			let { scale: i, dispatch: o } = e.props;
			o("tabEditor/moveNote", { scale: i, direction: t, via: a });
		};
	})();
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
		let t = e.target.offsetParent.offsetTop;
		return e.pageY - t;
	};
	getStringOnY = (e) => {
		let t = this.props.tabEditor.beat.layout.measureLayout.lineLayout;
		return eI(t, e);
	};
	onDragStart = (e) => {
		e.dataTransfer.setDragImage(this.drag, 0, 0);
		let t = this.getDragY(e);
		this.setState({ dragBaseY: t, prevString: this.getStringOnY(t) });
	};
	onDrag = eD((e) => {
		if (!e.clientX || !e.clientY) return;
		let t = this.getDragY(e),
			a = this.getStringOnY(t);
		if (void 0 === a) return;
		let i = a - this.state.prevString,
			o = Math.abs(i);
		if (0 !== o) {
			this.setState({ dragBaseY: t, prevString: a });
			for (let s = 0; s < o; s++)
				this.moveNote(i > 0 ? "down" : "up", "drag-and-drop");
		}
	}, 50);
	constructor(e) {
		super(e);
		let { device: t } = e;
		(isMobileOs = L(t) || p(t.os) || M(t.os)),
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
		};
		return e6(
			te,
			null,
			e6(
				"div",
				{
					id: "note-editor",
					className: __default$4.editor,
					style: a,
					tabIndex: -1,
					draggable: this.noteMoveAllowed(),
					onMouseUp: this.formClick,
					onDragStart: this.onDragStart,
					onDrag: this.onDrag,
				},
				"" === e.fret && "" !== e.originalFret
					? e6(
							te,
							{},
							e.originalFret,
							e6(
								"svg",
								{ className: __default$4.correction, width: 25, height: 23 },
								e6("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
							)
					  )
					: e.fret
			),
			e6("div", { className: __default$4.editorDrag, ref: this.refDrag }),
			isMobileOs &&
				e6(
					"div",
					{ className: __default$4.keyboard, style: i },
					e6(
						"button",
						{ className: __default$4.remove, onClick: this.onBackspace },
						"<-"
					),
					["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
						e6(
							"button",
							{
								key: e,
								className: __default$4.digit,
								onClick: this.onMobileKeyboard(e),
							},
							e
						)
					),
					e6(
						"button",
						{
							className: __default$4.zero,
							onClick: this.onMobileKeyboard("0"),
						},
						"0"
					)
				)
		);
	}
}
var NoteEditor$1 = t(NoteEditor, "tabEditor", "device", "part", "experiments");
let wrap = "Cpkq8",
	shadow = "Cpk9f",
	body = "Cpk2r",
	loading = "Cpk19q",
	icon$1 = "Cpk34y",
	__default$3 = {
		wrap: "Cpkq8",
		shadow: "Cpk9f",
		body: "Cpk2r",
		loading: "Cpk19q",
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
function CursorShape(e) {
	let { width: t, height: a } = e,
		i = 1 * t,
		o = getMedPath((t - i) / 2, 0.33 * t, i, 0.95, 0.45, 0.6, 0.3),
		s = getShapePath(t, a, 1.3);
	return e6(
		te,
		null,
		e6("path", {
			className: __default$3.shadow,
			filter: "url(#CursorShadow)",
			d: s,
			key: "shadow",
		}),
		e6("path", { className: __default$3.body, d: s, key: "body" }),
		e6("path", { className: __default$3.icon, d: o, key: "path" })
	);
}
function shouldJump(e, t) {
	let a = e.measureLayout,
		i = t.measureLayout;
	return a !== i
		? a.lineLayout !== i.lineLayout || a.measure.index + 1 !== i.measure.index
		: e.x >= t.x;
}
let isPlaying = (e) => e.player.shouldPlay && e.player.canPlay,
	LEFT = eA / 2,
	formatTransformSafari = (e, t, a, i) => {
		let o = eX(a);
		if (1 !== e) {
			for (let s of ((o = 0), i)) {
				if (s === a.line) break;
				o += Math.round(e * s.layout.height);
			}
			o = o / e + a.layers.height;
		}
		return ft(e, t, o);
	},
	formatTransformOther = (e, t, a, i) => ft(e, t, eX(a)),
	ft = (e, t, a) =>
		(1 === e ? "" : `scale(${e}) `) +
		` translate3d(${t - eq / 2 + LEFT}px, ${a - eG}px, 0)`;
class Cursor extends e8 {
	el = to();
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
					? formatTransformSafari
					: formatTransformOther);
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
		let t = this.props,
			a = t.part !== e.part || t.lines !== e.lines,
			i = t.player.position.cursor !== e.player.position.cursor;
		(a || i) &&
			((this.layout = null),
			(this.layoutTimestamp = 0),
			(this.nextLayout = null),
			(this.nextLayoutTimestamp = 0));
		let o =
			t.scale !== e.scale ||
			a ||
			i ||
			t.player.speed !== e.player.speed ||
			t.player.type !== e.player.type ||
			t.player.pitchShift !== e.player.pitchShift ||
			isPlaying(t) !== isPlaying(e);
		if (o) {
			let s = this.animationSeek;
			isPlaying(e)
				? (s = isPlaying(t) ? this.animationRestart : this.animationPause)
				: isPlaying(t) && (s = this.animationPlay),
				s.call(this);
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
		let { el: a, layout: i, nextLayout: o, layoutTimestamp: s } = this,
			{ scale: n, lines: r } = this.props;
		if (o && shouldJump(i, o)) {
			let l = i.absoluteLoopRightX - i.absoluteX,
				u = o.absoluteX - o.absoluteLoopLeftX,
				d = (i.duration * l) / (l + u),
				p = i.duration - d;
			t = (e) => {
				let t = e - s;
				a.current.style.transform =
					t < d
						? this.formatTransform(
								n,
								i.absoluteX + (l * t) / d,
								i.measureLayout.lineLayout,
								r
						  )
						: this.formatTransform(
								n,
								o.absoluteLoopLeftX + (u * (t - d)) / p,
								o.measureLayout.lineLayout,
								r
						  );
			};
		} else {
			let h = o
				? o.absoluteX - i.absoluteX
				: i.absoluteLoopRightX - i.absoluteX;
			t = (e) => {
				a.current.style.transform = this.formatTransform(
					n,
					i.absoluteX + (h * (e - s)) / i.duration,
					i.measureLayout.lineLayout,
					r
				);
			};
		}
		return t(e), t;
	}
	updateCurrentTempo(e) {
		let t = this.props.part.tempos,
			a = (a) =>
				t[a].timestamp <= e && (a === t.length - 1 || e < t[a + 1].timestamp);
		this.tempoIndex >= t.length && (this.tempoIndex = 0),
			a(this.tempoIndex) ||
				((this.tempoIndex = t.findIndex((e, t) => a(t))),
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
			let t = eO(this.props.part, e),
				{ timeline: a, timestamps: i } = this.props.part;
			(this.layoutTimestamp = i[t]),
				(this.layout = a.get(this.layoutTimestamp));
			let o = t < i.length - 1 ? i[t + 1] : null,
				s = this.props.player.position.loopEnd;
			return (
				0 !== s &&
					(null === o || o >= s - 1e-15) &&
					(o = this.props.player.position.loopStart),
				(this.nextLayout = null !== o ? a.get(o) : null),
				!0
			);
		}
		return !1;
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
						let t = this.props.player.audio.getCursor();
						a && a(t),
							i && i(t),
							this.findLayoutUnderCursor(t) &&
								((a = this.applyCursorCoordinates(t)),
								this.nextLayout &&
									shouldJump(this.layout, this.nextLayout) &&
									o(),
								!this.nextLayout &&
									t >= eU(this.layout) - 1e-15 &&
									(this.stopPlayback(), (this.pause = !0))),
							this.updateCurrentTempo(t);
					}
					this.pause || (this.animationPlayId = s(n));
				} catch (r) {
					console.error(r);
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
	moveTo(e) {
		let t = ei(e).beatsLayouts;
		this.props.dispatch("player/moveCursor", {
			cursor: eF(t[0]),
			loopStart: this.props.player.position.loopStart,
			loopEnd: this.props.player.position.loopEnd,
		});
	}
	handleBackspace = (e) => {
		e.preventDefault();
		let { loopStart: t, loopEnd: a } = this.props.player.position;
		this.props.dispatch("player/moveCursor", {
			cursor: t,
			loopStart: t,
			loopEnd: a,
		});
	};
	handleLeft = (e) => {
		e.preventDefault();
		let { part: t } = this.props,
			{ loopStart: a, loopEnd: i } = this.props.player.position,
			o = D(t, this.props.player.audio.getCursor(), "left"),
			s = o.measureLayout.measure.index,
			n = o.measureLayout.beatsLayouts[0],
			r = a;
		if (o !== n) {
			let l = eF(n);
			r = l > a ? l : a;
		} else if (s > 0) {
			n = ei(t.measures[s - 1]).beatsLayouts[0];
			let u = eF(n),
				d = ez(n);
			r = 0 === i || a <= u ? u : a <= d ? d : a;
		}
		this.props.dispatch("player/moveCursor", {
			cursor: r,
			loopStart: a,
			loopEnd: i,
		}),
			n &&
				this.props.ensureLineVisibility(null, n.measureLayout.lineLayout, !1);
	};
	handleRight = (e) => {
		let t;
		e.preventDefault();
		let { part: a } = this.props,
			{ loopStart: i, loopEnd: o } = this.props.player.position,
			s = D(a, this.props.player.audio.getCursor(), "left"),
			n = s.measureLayout.measure.index,
			r = null;
		if (n < a.measures.length - 1) {
			t = ei(a.measures[n + 1]).beatsLayouts[0];
			let l = eF(t),
				u = ez(t);
			0 === o || u < o ? (r = u) : l < o && (r = l);
		}
		null !== r &&
			(this.props.dispatch("player/moveCursor", {
				cursor: r,
				loopStart: i,
				loopEnd: o,
			}),
			t &&
				this.props.ensureLineVisibility(null, t.measureLayout.lineLayout, !1));
	};
	handleUp = (e) => {
		e.preventDefault();
		let { part: t } = this.props,
			{ loopStart: a, loopEnd: i } = this.props.player.position,
			o = D(t, this.props.player.audio.getCursor(), "left"),
			s = o.measureLayout.lineLayout.line.index;
		if (s > 0) {
			let n = this.props.lines[s - 1],
				r = eH(n, o.absoluteX, "left"),
				l = null,
				u = eF(r),
				d = ez(r);
			0 === i || a <= u ? (l = u) : a <= d && (l = d),
				null !== l &&
					(this.props.dispatch("player/moveCursor", {
						cursor: l,
						loopStart: a,
						loopEnd: i,
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
			{ loopStart: a, loopEnd: i } = this.props.player.position,
			o = D(t, this.props.player.audio.getCursor(), "left"),
			s = o.measureLayout.lineLayout.line.index;
		if (s < this.props.lines.length - 1) {
			let n = this.props.lines[s + 1],
				r = eH(n, o.absoluteX, "left"),
				l = null,
				u = eF(r),
				d = ez(r);
			0 === i || d < i ? (l = d) : u < i && (l = u),
				l &&
					(this.props.dispatch("player/moveCursor", {
						cursor: l,
						loopStart: a,
						loopEnd: i,
					}),
					this.props.ensureLineVisibility(
						null,
						r.measureLayout.lineLayout,
						!1
					));
		}
	};
	handleShiftLoopRight = (e) => {
		let t, a;
		e.preventDefault(), e.stopPropagation();
		let { part: i } = this.props,
			{ loopStart: o, loopEnd: s } = this.props.player.position;
		if (0 === s) return;
		let n = D(i, s, "left"),
			r = n.measureLayout.measure,
			l = this.props.part.measures[r.index + 1];
		if (!l) return;
		let u = ei(l).beatsLayouts;
		if (s < ej(u[0])) t = ej((a = u[0]));
		else {
			let d = eP(l).beatsLayouts;
			t = eV((a = d[d.length - 1]));
		}
		let p = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: p,
			loopStart: o,
			loopEnd: t,
		}),
			this.props.ensureLineVisibility(null, a.measureLayout.lineLayout, !1);
	};
	handleShiftLoopLeft = (e) => {
		let t, a;
		e.preventDefault(), e.stopPropagation();
		let { part: i } = this.props,
			{ loopStart: o, loopEnd: s } = this.props.player.position;
		if (0 === s) return;
		let n = D(i, s, "left"),
			r = n.measureLayout.measure,
			l = this.props.part.measures[r.index - 1];
		if (!l) return;
		let u = ei(r).beatsLayouts;
		if (
			(s > ej(u[0])
				? (t = ej((a = u[0])))
				: ((a = ei(l).beatsLayouts[0]), (t = ej(a))),
			o >= t)
		)
			return;
		let d = this.props.player.audio.getCursor();
		this.props.dispatch("player/moveCursor", {
			cursor: d,
			loopStart: o,
			loopEnd: t,
		}),
			this.props.ensureLineVisibility(null, l.layouts[0].lineLayout, !1);
	};
	render() {
		let e = this.props.lines[0].layout.intervalSize,
			t = (this.props.part.strings - 1) * e + (eG + eY),
			a = !(this.props.player.canPlay || this.props.route.isPanel);
		return e6(
			"div",
			{ className: __default$3.wrap, ref: this.el },
			!this.props.hidden &&
				e6(
					"svg",
					{
						width: eq,
						height: t,
						className: a ? __default$3.loading : __default$3.normal,
					},
					e6(
						"defs",
						{},
						e6(
							"filter",
							{ id: "CursorShadow", x: "-40%", width: "180%" },
							e6("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
							e6("feOffset", { dx: "0", dy: "2" })
						)
					),
					e6(CursorShape, { width: eq, height: t })
				)
		);
	}
}
var Cursor$1 = t(Cursor, "player", "route", "browser");
let background = "Cgh21m",
	loop = "Cgh2b2",
	shape = "Cgh1j0",
	area = "Cgh16l",
	icon = "Cgh2v6",
	__default$2 = {
		background: "Cgh21m",
		loop: "Cgh2b2",
		shape: "Cgh1j0",
		area: "Cgh16l",
		icon: "Cgh2v6",
	},
	HANDLE_PADDING = 10,
	HANDLE_AREA_WIDTH = 27;
class LoopShape extends e8 {
	render() {
		let { x: e, layout: t, handle: a } = this.props,
			i = t.measureLayout.lineLayout,
			o = eK(i) + 10,
			s = eW(i) - 20,
			n = `translate(${e},${o})`,
			r = "left" === a ? "matrix(-1,0,0,1,1,0)" : "",
			l = Math.floor(s / 2);
		return e6(
			"g",
			{ className: __default$2.loop, transform: n, "data-loop-handle": a },
			e6("path", {
				d: `M0 ${l - 12}q15 0 15 12t-15 12m1 0v${l - 12}h-2 v-${s}h2z`,
				className: __default$2.shape,
				transform: r,
			}),
			e6("path", {
				d: `M8 ${l - 4.5}l-4.5 4.5l4.5 4.5`,
				className: __default$2.icon,
				transform: r,
			}),
			e6("rect", {
				x: -10,
				y: -1,
				height: s,
				width: 27,
				transform: r,
				className: __default$2.area,
			})
		);
	}
}
class LoopBackground extends e8 {
	render() {
		let { leftLayout: e, rightLayout: t, lines: a } = this.props,
			i = e.absoluteLoopLeftX,
			o = t.absoluteLoopRightX,
			s = e.measureLayout.lineLayout,
			n = t.measureLayout.lineLayout,
			r = __default$2.background;
		if (s === n)
			return e6("rect", {
				className: r,
				rx: 3,
				height: eW(s),
				x: i,
				y: eK(s),
				width: o - i + 1,
			});
		let l = s.line.index,
			u = n.line.index,
			d = u - l,
			p = Array(d + 1);
		(p[0] = e6("rect", {
			className: r,
			rx: 3,
			height: eW(s),
			x: i,
			y: eK(s),
			width: s.maxX - i,
			key: l,
		})),
			(p[d] = e6("rect", {
				className: r,
				rx: 3,
				height: eW(n),
				x: n.minX,
				y: eK(n),
				width: o - n.minX,
				key: u,
			}));
		for (let h = l + 1; h < u; h++) {
			let c = a[h].layout;
			p[h - l] = e6("rect", {
				className: r,
				rx: 3,
				height: eW(c),
				x: c.minX,
				y: eK(c),
				width: c.maxX,
				key: h,
			});
		}
		return e6("g", null, p);
	}
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
				(this.y = e), (this.startY = i), (this.startTime = eJ());
				let o = window.requestAnimationFrame;
				this.scrollId = o(this.animationLoop);
			}
		}
	}
	animationLoop = () => {
		let e = ease(Math.min((eJ() - this.startTime) / 100, 1)),
			t = this.startY + (this.y - this.startY) * e;
		if ((window.scrollTo(0, t), t !== this.y)) {
			let a = window.requestAnimationFrame;
			this.scrollId = a(this.animationLoop);
		} else this.scrollId = void 0;
	};
	unmount() {
		this.scrollId &&
			(cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
	}
}
function RetunePopup(e) {
	let { tab: t, tuningButton: a } = e,
		{ device: i } = m("device"),
		o = 0,
		s = 0;
	if (t && a) {
		let n = t.getBoundingClientRect(),
			r = a.getBoundingClientRect();
		(o = r.left - n.left + r.width + 21),
			(s = r.top - n.top - (23 - r.height) - 14.5) < 2 && (s = 2);
	}
	return p(i.os) || M(i.os)
		? e6(AppPopup, {
				title: "Pitch Shift",
				device: i,
				leftOffset: o,
				topOffset: s,
				feature: "pitch shift",
		  })
		: e6(tg, {
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
	handlers = "D281qz",
	__default$1 = {
		tablature: "D28105",
		tablatureTest: "D28105 D28329",
		tablatureFree: "D28105 D28iz",
		tablatureFreeTest: "D28105 D28329 D282l",
		handlers: "D281qz",
	},
	exitActive = "d418f",
	enterActive = "d41sr",
	enter = "d41bt",
	exit = "d42bj",
	__default = {
		exitActive: "d418f",
		enterActive: "d41sr",
		enter: "d41bt",
		exit: "d42bj",
	},
	LEFT_OFFSET = eA / 2,
	TOP_OFFSET = 0,
	MOVE_THRESHOLD = 7,
	MOBILE_HEADER_HEIGHT = 48,
	MOBILE_CONTROLS_HEIGHT = 48,
	animationProps = { animationStyles: __default };
function calculateMovement(e, t) {
	return e ? Math.abs(t.x - e.x) + Math.abs(t.y - e.y) : 0;
}
function equals(e) {
	return (t) => t === e;
}
let isTouchable = "ontouchstart" in window;
function moveCursorIfChanged(e, t) {
	let { position: a } = e;
	eZ(a, t.position) || t.dispatch("player/moveCursor", a);
}
class Tab extends e8 {
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
				activeLoopHandle: void 0,
				deltaLeftX: 0,
				deltaRightX: 0,
				isPitchshiftToStandard: !1,
			}),
			(this.lastTouch = null),
			(this.onTouchMoveTickId = void 0),
			(this.windowScroller = new WindowScroller()),
			(this.scrollToCursor = M(e.device.os)
				? () => setTimeout(this.scrollToCursorBase, 250)
				: this.scrollToCursorBase);
	}
	componentDidMount() {
		this.props.print ||
			(0 === this.props.position.loopStart &&
				0 === this.props.position.loopEnd) ||
			moveCursorIfChanged(this.state, this.props),
			window.addEventListener("resize", this.viewportResizeDebounced),
			this.viewportResize().then(this.scrollToCursor);
	}
	scrollToCursorBase = () => {
		if (this.wrap) {
			let e = D(
				this.props.part,
				this.props.store.get().player.audio?.getCursor() || 0,
				"left"
			);
			e && this.ensureLineVisibility(null, e.measureLayout.lineLayout, !1);
		}
	};
	componentDidUpdate(e) {
		(0 !== this.props.position.loopStart ||
			0 !== this.props.position.loopEnd) &&
			moveCursorIfChanged(this.state, this.props),
			(e.lines !== this.props.lines ||
				e.scale !== this.props.scale ||
				e.plusAccess !== this.props.plusAccess ||
				this.props.videoIsReady !== e.videoIsReady) &&
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
		let a = t.position;
		eZ(t.mirrorPosition, e.position) || (a = e.position);
		let i = t.loopStartLayout,
			o = i && !t.activeLoopHandle ? i.absoluteLoopLeftX : t.loopStartX,
			s = !1,
			n = t.loopEndLayout,
			r = n && !t.activeLoopHandle ? n.absoluteLoopRightX : t.loopEndX,
			l = !1,
			{ tuning: u, instrumentId: d } = e.part,
			p = u && z(d, u),
			h = !1;
		return (
			(H(d) || j(d)) && p && 0 !== p.pitch && (h = !0),
			0 !== a.loopStart || 0 !== a.loopEnd
				? ((i && -1 !== i.occurrences.findIndex(equals(a.loopStart))) ||
						((o = (i = D(e.part, a.loopStart, "left")).absoluteLoopLeftX),
						(s = !0)),
				  (n &&
						-1 !== n.occurrences.findIndex(equals(a.loopEnd - n.duration))) ||
						((r = (n = D(e.part, a.loopEnd, "right")).absoluteLoopRightX),
						(l = !0)),
				  (s || l) && (a = eQ(e.part, a.cursor, i, n)))
				: ((i = null), (o = 0), (n = null), (r = 0)),
			{
				mirrorPosition: e.position,
				position: a,
				loopStartLayout: i,
				loopStartX: o,
				loopEndLayout: n,
				loopEndX: r,
				isPitchshiftToStandard: h,
			}
		);
	}
	onTouchStart = (e) => {
		if (isTouchable && "mousedown" === e.type) return;
		if ("tab_editor" === this.props.layer) {
			this.handleTabEditor(e);
			return;
		}
		let t = e.target && e.target.getAttribute("data-marker-num"),
			a =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-tab-button");
		if (null != a || null != t) return;
		if (this.props.layer) {
			this.props.dispatch("layer/hide"),
				e.preventDefault(),
				e.stopPropagation();
			return;
		}
		let i =
				e.target.parentElement &&
				e.target.parentElement.getAttribute("data-loop-handle"),
			o = this.getTouchPoint(e);
		if (((this.lastTouch = o), "left" === i || "right" === i)) {
			if (
				(e.preventDefault(),
				e.stopPropagation(),
				this.props.dispatch("player/changeLoop", !0),
				this.setState((e) =>
					"left" === i
						? { activeLoopHandle: i, deltaLeftX: e.loopStartX - o.x }
						: { activeLoopHandle: i, deltaRightX: e.loopEndX - o.x }
				),
				!this.onTouchMoveTickId)
			) {
				let s = window.requestAnimationFrame;
				this.onTouchMoveTickId = s(this.onTouchMoveTick);
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
	ensureLineVisibility = (e, t, a) =>
		eR(() => {
			let { showPitchshiftLayer: i } = this.props,
				o = window.visualViewport
					? window.visualViewport.pageTop
					: window.scrollY,
				s = this.props.scale,
				n = e1(),
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
				let $ = t.y * s - h;
				if ($ < 0) y = o + $;
				else if (
					(($ = c - t.maxY * s) < 0 && (y = o - $),
					f < v.measureLayout.lineLayout.line.index)
				) {
					let b = g[f + 1];
					if (b) {
						let x = t.y,
							T = b.layout.maxY;
						(T - x) * s < m && ($ = c - T * s) < 0 && (y = o - $);
					}
				}
			} else if (0 === f) y = 0;
			else if (((y = t.y * s + d - l), f < g.length - 1)) {
				let w = g[f - 1],
					C = g[f + 1];
				if (w && C) {
					let S = w.layout.y,
						k = C.layout.maxY;
					(k - S) * s < m && (y = S * s + d - l);
				}
			}
			y !== o && this.windowScroller.scroll(y, a, o);
		});
	onTouchMoveTick = () => {
		this.lastTouch &&
			this.setState((e) => {
				let t = this.lastTouch;
				if (!t) throw Error("Wrong state during touch move");
				let a = {
					position: e.position,
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
							n = e2(this.props.lines, s, "left"),
							r = e0(n),
							l = e0(o);
						r < l || (r === l && s.x <= o.absoluteLoopLeftX)
							? ((a.loopStartLayout = n), (a.loopStartX = s.x))
							: ((a.loopStartLayout = a.loopEndLayout),
							  (a.loopStartX = i.absoluteLoopLeftX));
					} else {
						let u = { x: this.limitX(t.x + e.deltaRightX), y: t.y },
							d = e2(this.props.lines, u, "right"),
							p = e0(d),
							h = e0(i);
						p > h || (p === h && u.x >= i.absoluteLoopRightX)
							? ((a.loopEndLayout = d), (a.loopEndX = u.x))
							: ((a.loopEndLayout = a.loopStartLayout),
							  (a.loopEndX = o.absoluteLoopRightX));
					}
				}
				{
					let { loopStartLayout: c, loopEndLayout: m } = a;
					if (c && m && (c !== e.loopStartLayout || m !== e.loopEndLayout)) {
						let f = eQ(
								this.props.part,
								a.position.cursor,
								c,
								m,
								e.activeLoopHandle
							),
							g = a.position;
						(g.cursor !== f.cursor ||
							g.loopStart !== f.loopStart ||
							g.loopEnd !== f.loopEnd) &&
							(a.position = f);
					}
				}
				return (this.lastTouch = null), a;
			});
		let e = window.requestAnimationFrame;
		this.onTouchMoveTickId = e(this.onTouchMoveTick);
	};
	onTouchEnd = (e) => {
		if (this.state.activeLoopHandle)
			document.removeEventListener("touchmove", this.onTouchMove),
				document.removeEventListener("mousemove", this.onTouchMove),
				e.preventDefault(),
				this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
				(this.onTouchMoveTickId = void 0),
				this.setState(
					(e) => (
						this.props.dispatch("player/moveCursor", this.state.position),
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
							position: e.position,
							loopStartX: e.loopStartX,
							loopStartLayout: e.loopStartLayout,
							loopEndX: e.loopEndX,
							loopEndLayout: e.loopEndLayout,
						},
						i = e2(this.props.lines, t);
					if (
						0 === this.props.position.loopStart &&
						0 === this.props.position.loopEnd
					)
						a.position = { cursor: eF(i), loopStart: 0, loopEnd: 0 };
					else {
						let o = eF(i),
							s = ez(i);
						if (a.position.loopStart <= o && o < a.position.loopEnd)
							a.position = {
								cursor: o,
								loopStart: a.position.loopStart,
								loopEnd: a.position.loopEnd,
							};
						else if (a.position.loopStart <= s && s < a.position.loopEnd)
							a.position = {
								cursor: s,
								loopStart: a.position.loopStart,
								loopEnd: a.position.loopEnd,
							};
						else {
							let n = i.measureLayout.measure.layouts,
								r = n[0].beatsLayouts,
								l = n[n.length - 1].beatsLayouts;
							(a.loopStartLayout = r[0]),
								(a.loopEndLayout = l[l.length - 1]),
								(a.loopStartX = a.loopStartLayout.absoluteLoopLeftX),
								(a.loopEndX = a.loopEndLayout.absoluteLoopRightX),
								(a.position = {
									cursor: o,
									loopStart: ej(a.loopStartLayout),
									loopEnd: eV(a.loopEndLayout),
								});
						}
					}
					return (
						this.props.dispatch("player/moveCursor", a.position),
						this.ensureLineVisibility(null, i.measureLayout.lineLayout, !1),
						a
					);
				})),
				(this.lastTouch = null);
		}
		document.removeEventListener("touchend", this.onTouchEnd),
			document.removeEventListener("mouseup", this.onTouchEnd);
	};
	getTouchPoint(e) {
		let t = e.changedTouches ? e.changedTouches[0] : e,
			a = (t.pageX - this.pageX) / this.props.scale,
			i = (t.pageY - this.pageY) / this.props.scale;
		return { x: a, y: i };
	}
	handleTabEditor(e) {
		let t = this.getTouchPoint(e),
			a = e2(this.props.lines, t);
		this.props.setTabEditor({
			beatsLayout: a,
			touch: t,
			scale: this.props.scale,
		});
	}
	refWrap = (e) => {
		(this.wrap = e),
			W &&
				e &&
				(e.removeEventListener("touchstart", this.onTouchStart),
				e.removeEventListener("mousedown", this.onTouchStart),
				e.addEventListener(
					"touchstart",
					this.onTouchStart,
					!!window.PASSIVE && { passive: !1 }
				),
				e.addEventListener("mousedown", this.onTouchStart));
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
				loopStartX: a,
				loopEndX: i,
				isPitchshiftToStandard: o,
			} = this.state,
			s = this.props.lines,
			n = this.props.scale,
			r = this.props.height,
			l = this.props.slicingMode,
			{
				part: u,
				plusAccess: d,
				isSmallScreen: p,
				handlePitchshift: h,
				isResizeNow: c,
				showPitchshiftPopup: m,
				showPitchshiftLayer: f,
				tuning: g,
				layer: y,
				tabEditorData: _,
				fingerings: v,
				videoIsOpened: $,
			} = this.props,
			b = this.props.width,
			x = `-${eA / 2 - 0.5} -0.5 ${b} ${r}`,
			T = s[0].layout.layers.height,
			w = v && v.partId === u.partId ? v.data : void 0,
			C = "tab_editor" === y,
			S = __default$1.tablatureTest,
			k = __default$1.tablatureFreeTest,
			M = !p && u.tuning && !$;
		return e6(
			te,
			null,
			e6(
				"section",
				{
					id: "tablature",
					className: d ? S : k,
					"data-id": d ? e5 : e3,
					role: "application",
					key: "main",
					ref: this.refMain,
				},
				0 !== n && C && e6(NoteEditor$1, { scale: n }),
				e6(Lines, {
					part: u,
					lines: s,
					tuning: g,
					slicingMode: l,
					fingerings: w,
					tabEditorData: _,
					lazy: !d,
				}),
				!c &&
					e6(
						CursorErrorBoundary$1,
						null,
						0 !== n &&
							W &&
							e6(Cursor$1, {
								scale: n,
								part: u,
								lines: s,
								hidden: C,
								ensureLineVisibility: this.ensureLineVisibility,
							}),
						e6(
							"svg",
							{
								width: b,
								viewBox: x,
								ref: this.refWrap,
								className: __default$1.handlers,
								preserveAspectRatio: "xMidYMid meet",
								id: "handler",
							},
							W &&
								e &&
								t &&
								e6(LoopBackground, { leftLayout: e, rightLayout: t, lines: s }),
							W && e && e6(LoopShape, { x: a, layout: e, handle: "left" }),
							W && t && e6(LoopShape, { x: i, layout: t, handle: "right" }),
							e6(ToastProvider, {
								device: this.props.device,
								children: e6(LearnMarkers, {
									lines: s,
									partId: u.partId,
									songId: u.songId,
								}),
							}),
							M &&
								e6(TuningButton, {
									reference: this.refTuning,
									firstLineLayoutHeight: T,
									handlePitchshift: h,
									isPitchshiftToStandard: o,
									isActive: m || f,
									lock: !d,
								})
						)
					),
				!c &&
					e6(
						N,
						null,
						!p &&
							m &&
							e6(
								E,
								{ ...animationProps, key: "popup" },
								e6(RetunePopup, {
									tab: this.tab,
									tuningButton: this.tuningButton,
								})
							),
						!p &&
							f &&
							e6(
								E,
								{ ...animationProps, key: "layer" },
								e6(PitchShift$1, {
									firstLineLayoutHeight: T,
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
let hasPlusAccess = (e, t) => e.hasPlus || t.enabled,
	onTab = { onTab: !0 };
class AppTab extends e8 {
	activateFingeringsExperiment = () => {
		let { dispatch: e, user: t, experiments: a } = this.props;
		t.hasPlus &&
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
			v = r.inResizeNow,
			$ = e4(o),
			b = "saving" === h.status || "changes" === h.status,
			{ pitchShift: x } = i,
			T = tr(
				() =>
					!!s.current &&
					!!s.current.tuning &&
					s.current.tuning.map((e) => e + x),
				[x, s]
			),
			w = o.allowedByLicense,
			C = !o.isFailed && !s.isFailed && w,
			S = C && !p && !!s.current && !!s.lines.lines.length,
			k = C && !p && (!s.current || !s.lines.lines.length),
			M = C && !y,
			P = C && !y && u.isPhone && S,
			N = !_ && !!s.videoPart && !L(u),
			E = i.videoOpened || f.isOpened,
			B = m.paid_fingerings?.segment,
			A = t.hasPlus && ("ut" === B || "on" === B);
		return e6(
			"section",
			{ className: e7.tablature, role: g ? "complementary" : "main" },
			e6(AlertManager, {
				meta: o,
				user: t,
				cursor: n,
				part: s,
				player: i,
				isDeleted: p,
			}),
			N &&
				e6(y ? YTPlayer$1 : YTPlayerDemo$1, {
					songId: s.songId,
					handlePlayVideo: this.props.handlePlayVideo,
					handlePauseVideo: this.props.handlePauseVideo,
				}),
			e6(_ ? MobileControls : Controls, {
				...this.props,
				shouldPlay: i.shouldPlay,
				canPlay: i.canPlay || g,
				track: $,
				device: u,
				layer: l,
				plusAccess: y,
				fingeringsEnabled: A,
				fingeringsStatus: c.status,
				fingeringsActive: c.shown,
				loop: 0 !== i.position.loopEnd,
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
			M && e6(tN, { key: `tab-showroom-${o.songId}`, songId: o.songId }),
			e6(
				"section",
				{ class: e7.pane, key: `tab-${o.songId}` },
				k && e6(tP, { key: `loading-${o.songId}` }),
				S &&
					tu(
						Tab,
						{
							key: `tab-${o.songId}-${s.current.partId}`,
							dispatch: e,
							store: this.props.store,
							part: s.current,
							lines: s.lines.lines,
							height: s.lines.height,
							width: s.lines.width,
							scale: s.lines.scale,
							slicingMode: s.lines.slicingMode,
							isSmallScreen: _,
							isResizeNow: v,
							plusAccess: y,
							shouldPlay: i.shouldPlay,
							position: i.position,
							handlePitchshift: this.props.handlePitchshift,
							showPitchshiftPopup: "plus_pitchshift" === l,
							showPitchshiftLayer: "pitchshift" === l,
							tuning: T,
							layer: l,
							tabEditorData: h.data,
							setTabEditor: this.setTabEditor,
							fingerings: c.shown && c.trackFingering,
							device: u,
							isLoggedIn: t.isLoggedIn,
							videoIsReady: E,
							videoIsOpened: i.videoOpened,
						},
						s.lines.hash
					)
			),
			P &&
				e6(ShowroomBottom, {
					key: `bottom-showroom-${o.songId}-${s.current.partId}`,
				}),
			S && e6(tL, { withAds: M, device: u, copyright: !0 })
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
