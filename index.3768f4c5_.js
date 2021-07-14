import {
    D as t,
    F as e,
    l as s,
    d as n,
    h as i,
    y as o,
    v as a,
    A as r,
    B as l,
    _ as c,
    a as d,
    g as u,
    e as h,
    p,
    b as m,
    s as g,
    x as f,
    q as y,
} from "./preact.9cb2fa7a.js";
var v = {
    app: "C3rr3",
    tablature: "C3r160",
    tablatureFullscreen: "C3r160 C3r34s",
    debug: "C3r16x",
    tos: "C3r1lo",
    popupOverlay: "C3rk5",
    footer: "C3r1sh",
    footerWithAds: "C3r1sh C3r2hm",
    copyright: "C3r1az",
    rightSidebar: "C3r8m",
    appFree: "C3rr3 C3ry6",
    appPlus: "C3rr3 C3r348",
};
const b = "undefined" != typeof window,
    w = 27;
var x = t();
const S = b ? i : o;
function C(...t) {
    const i = e(x),
        o = s({});
    return (
        S(function () {
            return i.on("@changed", function (e, s) {
                t.some(t => t in s) && o[1]({});
            });
        }, []),
        n(
            function () {
                const e = i.get(),
                    s = { dispatch: i.dispatch, store: i };
                for (const n of t) s[n] = e[n];
                return s;
            },
            [o[0]]
        )
    );
}
function k(t, ...e) {
    return function (s) {
        return a(t, Object.assign({}, s, C.apply(null, e)));
    };
}
function N(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (t[e] = s),
        t
    );
}
const L = t(null),
    T = t => t && t.props;
function I(t, e) {
    const s = Object.create(null);
    return (
        t &&
        r(t).forEach(t => {
            t && (s[t.key] = (t => (e && T(t) ? e(t) : t))(t));
        }),
        s
    );
}
function _(t, e, s) {
    return null != s[e] ? s[e] : t.props && t.props[e];
}
function E(t, e, s) {
    const n = I(t.children),
        i = (function (t, e) {
            function s(s) {
                return s in e ? e[s] : t[s];
            }
            (t = t || {}), (e = e || {});
            const n = Object.create(null);
            let i,
                o = [];
            for (const s in t)
                s in e ? o.length && ((n[s] = o), (o = [])) : o.push(s);
            const a = {};
            for (const t in e) {
                if (n[t])
                    for (i = 0; i < n[t].length; i++) {
                        const e = n[t][i];
                        a[n[t][i]] = s(e);
                    }
                a[t] = s(t);
            }
            for (i = 0; i < o.length; i++) a[o[i]] = s(o[i]);
            return a;
        })(e, n);
    return (
        Object.keys(i).forEach(o => {
            const a = i[o];
            if (!T(a)) return;
            const r = o in e,
                c = o in n,
                d = e[o],
                u = T(d) && !d.props.in;
            !c || (r && !u)
                ? c || !r || u
                    ? c &&
                    r &&
                    T(d) &&
                    (i[o] = l(a, {
                        onExited: s.bind(null, a),
                        in: d.props.in,
                        exit: _(a, "exit", t),
                        enter: _(a, "enter", t),
                    }))
                    : (i[o] = l(a, { in: !1 }))
                : (i[o] = l(a, {
                    onExited: s.bind(null, a),
                    in: !0,
                    exit: _(a, "exit", t),
                    enter: _(a, "enter", t),
                }));
        }),
        i
    );
}
const P = ["component", "childFactory"],
    A = Object.values || (t => Object.keys(t).map(e => t[e]));
class M extends c {
    static __initStatic() {
        this.defaultProps = { component: null, childFactory: t => t };
    }
    constructor(t) {
        super(t);
        const e = this.handleExited.bind(this);
        this.state = { handleExited: e, firstRender: !0 };
    }
    componentDidMount() {
        this.appeared = !0;
    }
    static getDerivedStateFromProps(
        t,
        { children: e, handleExited: s, firstRender: n }
    ) {
        return {
            children: n
                ? ((i = t),
                    (o = s),
                    I(i.children, t =>
                        l(t, {
                            onExited: o.bind(null, t),
                            in: !0,
                            appear: _(t, "appear", i),
                            enter: _(t, "enter", i),
                            exit: _(t, "exit", i),
                        })
                    ))
                : E(t, e, s),
            firstRender: !1,
        };
        var i, o;
    }
    handleExited(t, e) {
        const s = I(this.props.children);
        t.key in s ||
            (t.props.onExited && t.props.onExited(e),
                this.setState(e => {
                    const s = Object.assign({}, e.children);
                    return delete s[t.key], { children: s };
                }));
    }
    render() {
        const t = this.props,
            { component: e, childFactory: s } = t,
            n = (function (t, e) {
                if (null == t) return {};
                var s,
                    n,
                    i = {},
                    o = Object.keys(t);
                for (n = 0; n < o.length; n++)
                    (s = o[n]), e.indexOf(s) >= 0 || (i[s] = t[s]);
                return i;
            })(t, P),
            i = A(this.state.children).map(s);
        return (
            delete n.appear,
            delete n.enter,
            delete n.exit,
            a(
                L.Provider,
                { value: { isMounting: !this.appeared } },
                e ? a(e, n, i) : a(d, null, i)
            )
        );
    }
}
M.__initStatic();
class B extends c {
    static __initStatic() {
        this.contextType = L;
    }
    constructor(t, e) {
        super(t, e);
        const s = e && !e.isMounting ? t.enter : t.appear;
        let n;
        (this.appearStatus = null),
            t.in
                ? s
                    ? ((n = "exited"), (this.appearStatus = "entering"))
                    : (n = "entered")
                : (n = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"),
            (this.state = { status: n }),
            (this.nextCallback = null);
    }
    static getDerivedStateFromProps({ in: t }, e) {
        return t && "unmounted" === e.status ? { status: "exited" } : null;
    }
    componentDidMount() {
        this.updateStatus(!0, this.appearStatus);
    }
    componentDidUpdate(t) {
        let e = null;
        if (t !== this.props) {
            const { status: t } = this.state;
            this.props.in
                ? "entering" !== t && "entered" !== t && (e = "entering")
                : ("entering" !== t && "entered" !== t) || (e = "exiting");
        }
        this.updateStatus(!1, e);
    }
    componentWillUnmount() {
        this.cancelNextCallback();
    }
    getTimeouts() {
        const { timeout: t } = this.props;
        let e, s, n;
        return (
            (e = s = n = t),
            null != t &&
            "number" != typeof t &&
            ((e = t.exit), (s = t.enter), (n = t.appear)),
            { exit: e, enter: s, appear: n }
        );
    }
    updateStatus(t = !1, e) {
        if (null !== e) {
            this.cancelNextCallback();
            const n = (s = this) ? s.base || (1 === s.nodeType && s) : null;
            "entering" === e ? this.performEnter(n, t) : this.performExit(n);
        } else
            this.props.unmountOnExit &&
                "exited" === this.state.status &&
                this.setState({ status: "unmounted" });
        var s;
    }
    performEnter(t, e) {
        const { enter: s } = this.props,
            n = this.context ? this.context.isMounting : e,
            i = this.getTimeouts();
        e || s
            ? (this.props.onEnter(t, n),
                this.safeSetState({ status: "entering" }, () => {
                    this.props.onEntering(t, n),
                        this.onTransitionEnd(t, i.enter, () => {
                            this.safeSetState({ status: "entered" }, () => {
                                this.props.onEntered(t, n);
                            });
                        });
                }))
            : this.safeSetState({ status: "entered" }, () => {
                this.props.onEntered(t);
            });
    }
    performExit(t) {
        const { exit: e } = this.props,
            s = this.getTimeouts();
        e
            ? (this.props.onExit(t),
                this.safeSetState({ status: "exiting" }, () => {
                    this.props.onExiting(t),
                        this.onTransitionEnd(t, s.exit, () => {
                            this.safeSetState({ status: "exited" }, () => {
                                this.props.onExited(t);
                            });
                        });
                }))
            : this.safeSetState({ status: "exited" }, () => {
                this.props.onExited(t);
            });
    }
    cancelNextCallback() {
        null !== this.nextCallback &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
    }
    safeSetState(t, e) {
        (e = this.setNextCallback(e)), this.setState(t, e);
    }
    setNextCallback(t) {
        let e = !0;
        return (
            (this.nextCallback = s => {
                e && ((e = !1), (this.nextCallback = null), t(s));
            }),
            (this.nextCallback.cancel = () => {
                e = !1;
            }),
            this.nextCallback
        );
    }
    onTransitionEnd(t, e, s) {
        this.setNextCallback(s),
            t
                ? (this.props.addEndListener &&
                    this.props.addEndListener(t, this.nextCallback),
                    null != e && setTimeout(this.nextCallback, e))
                : setTimeout(this.nextCallback, 0);
    }
    render() {
        return "unmounted" === this.state.status
            ? null
            : a(L.Provider, { value: null }, this.props.children);
    }
}
function D() { }
B.__initStatic(),
    (B.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: D,
        onEntering: D,
        onEntered: D,
        onExit: D,
        onExiting: D,
        onExited: D,
    });
class O extends c {
    constructor(...t) {
        super(...t),
            O.prototype.__init.call(this),
            O.prototype.__init2.call(this),
            O.prototype.__init3.call(this),
            O.prototype.__init4.call(this),
            O.prototype.__init5.call(this),
            O.prototype.__init6.call(this);
    }
    static __initStatic() {
        this.defaultProps = { timeout: 200 };
    }
    __init() {
        this.onEnter = (t, e) => {
            if (t) {
                const s = this.props.animationStyles[e ? "appear" : "enter"];
                this.removeClasses(t, "exit"), s && t.classList.add(s);
            }
            this.props.onEnter && this.props.onEnter(t);
        };
    }
    __init2() {
        this.onEntering = (t, e) => {
            if (t) {
                const s =
                    this.props.animationStyles[(e ? "appear" : "enter") + "Active"],
                    n = window.requestAnimationFrame;
                s &&
                    n(() => {
                        n(() => {
                            t && t.classList.add(s);
                        });
                    });
            }
            this.props.onEntering && this.props.onEntering(t);
        };
    }
    __init3() {
        this.onEntered = (t, e) => {
            if (t) {
                const s = this.props.animationStyles[(e ? "appear" : "enter") + "Done"];
                this.removeClasses(t, e ? "appear" : "enter"), s && t.classList.add(s);
            }
            this.props.onEntered && this.props.onEntered(t);
        };
    }
    __init4() {
        this.onExit = t => {
            if (t) {
                const e = this.props.animationStyles.exit;
                this.removeClasses(t, "appear"),
                    this.removeClasses(t, "enter"),
                    e && t.classList.add(e);
            }
            this.props.onExit && this.props.onExit(t);
        };
    }
    __init5() {
        this.onExiting = t => {
            if (t) {
                const e = this.props.animationStyles.exitActive,
                    s = window.requestAnimationFrame;
                e &&
                    s(() => {
                        s(() => {
                            t && t.classList.add(e);
                        });
                    });
            }
            this.props.onExiting && this.props.onExiting(t);
        };
    }
    __init6() {
        this.onExited = t => {
            if (t) {
                const e = this.props.animationStyles.exitDone;
                this.removeClasses(t, "exit"), e && t.classList.add(e);
            }
            this.props.onExited && this.props.onExited(t);
        };
    }
    removeClasses(t, e) {
        const s = this.props.animationStyles[e],
            n = this.props.animationStyles[e + "Active"],
            i = this.props.animationStyles[e + "Done"];
        s && t.classList.remove(s),
            n && t.classList.remove(n),
            i && t.classList.remove(i);
    }
    render() {
        return a(
            B,
            Object.assign({}, this.props, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
            })
        );
    }
}
O.__initStatic();
var j = {
    button: "Cpb24q",
    active: "Cpb180",
    buttonGreen: "Cpb24q Cpb318",
    buttonBlue: "Cpb24q Cpb2au",
    buttonGrey: "Cpb24q Cpb2j",
    buttonDisabled: "Cpb24q Cpb2j Cpb8g",
    buttonRed: "Cpb24q Cpb2uv",
    buttonFloat: "Cpb24q Cpb2tm",
    buttonLink: "Cpb24q Cpb1oz",
    buttonLinkFloat: "Cpb24q Cpb1oz Cpb2z8",
    buttonLinkSmall: "Cpb24q Cpb1oz Cpb2g5",
    buttonPromoUnsubscribe: "Cpb24q Cpb1oz Cpbxu",
    link: "Cpbc6",
    buttonBlock: "Cpb24q Cpbza",
    buttonSmall: "Cpb24q Cpb13f",
    google: "Cpb24q Cpb1jm",
    googleIcon: "Cpb9k",
    popupButton: "Cpb24q Cpb14i",
    popupButtonSmall: "Cpbpb",
    popupButtonGreen: "Cpb24q Cpb14i Cpb1t2",
    popupButtonBlue: "Cpb24q Cpb14i Cpb1y5",
    popupButtonOrange: "Cpb24q Cpb14i Cpb2xu",
    popupButtonGreenSmall: "Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9",
    popupButtonBlueSmall: "Cpb24q Cpb14i Cpb1y5 Cpbpb Cpb2zd",
    submitRevisionButton: "Cpb24q Cpb14i Cpb1t2 Cpb1a8",
    submitRevisionButtonWarning: "Cpb24q Cpb14i Cpb2xu Cpb1xh",
    addAnnotation: "Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9 Cpb2bq",
    removeAnnotation: "Cpb24q Cpb2uv Cpbpb Cpb2z3",
    buttonBig: "Cpb24q Cpb2zn",
    greenHighlight: "Cpbjz",
    orangeHighlight: "Cpb1m5",
};
const R = {
    animationStyles: {
        exitActive: "Cp54w",
        enterActive: "Cp5pf",
        enter: "Cp5aq",
        exit: "Cp5u",
    },
};
class z extends c {
    constructor(...t) {
        super(...t), z.prototype.__init.call(this), z.prototype.__init2.call(this);
    }
    __init() {
        this.onDisagree = () => {
            this.props.dispatch("consent/toggle", !1);
        };
    }
    __init2() {
        this.onAgree = () => {
            this.props.dispatch("consent/toggle", !0);
        };
    }
    render() {
        if ("on" === this.props.experiments.googlefc) return;
        let t = null;
        return (
            void 0 === this.props.consent.profiling &&
            (t = a(
                O,
                R,
                a(
                    "section",
                    { className: "Cyocr" },
                    a(
                        "div",
                        { className: "Cyo1vs" },
                        "We use cookies and other technologies to provide you with tailored advertising and better experience.",
                        a(
                            "div",
                            { className: "Cyo166" },
                            a(
                                "button",
                                {
                                    id: "accept",
                                    className: "Cpb24q Cpb318 Cyo2ax",
                                    onClick: this.onAgree,
                                },
                                "Accept"
                            ),
                            a(
                                "button",
                                {
                                    id: "refuse",
                                    className: "Cpb24q Cpb1oz Cyo94",
                                    onClick: this.onDisagree,
                                },
                                "I don't allow this"
                            )
                        ),
                        a(
                            "div",
                            { className: "Cyoei" },
                            "Learn more on personalization data handling in our ",
                            a(
                                "a",
                                { href: "/a/wa/privacy", target: "_blank" },
                                "Privacy Policy"
                            ),
                            "."
                        )
                    )
                )
            )),
            a(M, null, t)
        );
    }
}
var F = k(z, "consent", "experiments");
function H(t) {
    return 1024 === t;
}
function q(t) {
    return t >= 24 && t <= 31;
}
function U(t) {
    return t >= 32 && t <= 39;
}
const V = [];
function G(t) {
    return t.text.length < 6 ? -1 * Math.floor(t.width / 2) : -6;
}
class X {
    constructor(t, e, s) {
        N(this, "source", void 0),
            N(this, "index", void 0),
            N(this, "prevBeat", void 0),
            N(this, "nextBeat", void 0),
            N(this, "duration", void 0),
            N(this, "type", void 0),
            N(this, "dotted", void 0),
            N(this, "tuplet", void 0),
            N(this, "rest", void 0),
            N(this, "pickStroke", void 0),
            N(this, "upStroke", void 0),
            N(this, "downStroke", void 0),
            N(this, "letRing", void 0),
            N(this, "palmMute", void 0),
            N(this, "harmonic", void 0),
            N(this, "wideVibrato", void 0),
            N(this, "vibrato", void 0),
            N(this, "width", void 0),
            N(this, "voice", void 0),
            N(this, "beamStart", void 0),
            N(this, "beamStop", void 0),
            N(this, "tupletStart", void 0),
            N(this, "tupletStop", void 0),
            N(this, "lyrics", void 0),
            N(this, "layout", void 0),
            N(this, "notes", void 0),
            N(this, "chord", void 0),
            N(this, "text", void 0),
            N(this, "tapping", void 0),
            N(this, "originalText", void 0),
            N(this, "color", void 0),
            N(this, "hat", void 0),
            N(this, "accentuated", void 0),
            N(this, "heavyAccentuated", void 0),
            N(this, "staccato", void 0),
            N(this, "tremolo", void 0),
            (this.source = t),
            (this.index = e),
            (this.prevBeat = null),
            (this.nextBeat = null),
            (this.duration = t.duration),
            (this.type = t.type),
            (this.dotted = t.dotted),
            (this.tuplet = t.tuplet || 0),
            (this.rest = t.rest),
            (this.pickStroke = t.pickStroke),
            (this.upStroke = t.upStroke),
            (this.downStroke = t.downStroke),
            (this.letRing = t.letRing),
            (this.palmMute = t.palmMute),
            (this.wideVibrato = t.wideVibrato),
            (this.vibrato = t.vibrato),
            (this.width = 0),
            (this.voice = 0),
            (this.beamStart = t.beamStart),
            (this.beamStop = t.beamStop),
            (this.tupletStart = t.tupletStart),
            (this.tupletStop = t.tupletStop),
            (this.layout = s),
            (this.notes = t.notes ? new Array(t.notes.length) : V),
            (this.chord = t.chord
                ? {
                    layer: null,
                    text:
                        void 0 !== t.chord.text && void 0 !== t.chord.text.text
                            ? t.chord.text.text
                            : t.chord.text,
                    width: t.chord.width,
                }
                : void 0),
            (this.text = void 0),
            (this.originalText = t.text
                ? {
                    layer: null,
                    text:
                        void 0 !== t.text.text && void 0 !== t.text.text.text
                            ? t.text.text.text
                            : t.text.text,
                    width: t.text.width,
                }
                : void 0),
            (this.lyrics =
                void 0 !== t.lyrics
                    ? t.lyrics.map(t => ({ layer: null, text: t.text, width: t.width }))
                    : void 0),
            (this.tapping = t.tapping
                ? { layer: null, text: "T", width: 6 }
                : void 0);
    }
    getLyricsPosition(t, e) {
        const s = G(t),
            n = this.layout.absoluteX + s;
        let i = 0;
        return e >= n && (i = e - n + 1), { x1: n, x2: n + t.width, diff: i };
    }
    getAccentuatedPosition() {
        const t = this.layout.absoluteX - 6;
        return { x1: t, x2: t + 12 };
    }
    getStaccatoPosition() {
        const t = this.layout.absoluteX - 5;
        return { x1: t, x2: t + 10 };
    }
    getTremoloPosition() {
        const t = this.layout.absoluteX - 5;
        return { x1: t, x2: t + 13 };
    }
    getHatPosition() {
        const t = this.layout.absoluteX - 5;
        return { x1: t, x2: t + 13 };
    }
    getTextPosition(t) {
        const e = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
            s = this.layout.absoluteX + e;
        return { x1: s, x2: s + t.width };
    }
    getChordPosition(t) {
        const e = t.width,
            s = this.layout.absoluteX - Math.floor(e / 2);
        return { x1: s, x2: s + e };
    }
    hasSlide() {
        return this.notes.some(t => t.rightSlide || t.leftSlide);
    }
    isSubchordOf(t) {
        return (function (t, e) {
            for (let s = 0; s < t.length; s++) {
                const n = t[s];
                let i = !1;
                for (let t = 0; t < e.length; t++) {
                    const s = e[t];
                    if (n.string === s.string && n.fret === s.fret) {
                        i = !0;
                        break;
                    }
                }
                if (!i) return !1;
            }
            return !0;
        })(this.notes, t.notes);
    }
    isDropChord() {
        let t = null;
        for (let e = 0; e < this.notes.length; e++) {
            const s = this.notes[e];
            if (s.dead) return !1;
            if ((null === t && (t = s.fret), s.fret !== t)) return !1;
        }
        return this.notes.length > 0;
    }
    isOpenChord() {
        for (let t = 0; t < this.notes.length; t++) {
            const e = this.notes[t];
            if (e.dead) return !1;
            if (0 !== e.fret) return !1;
        }
        return this.notes.length > 0;
    }
    hasOnlyDeadNotes() {
        return (function (t) {
            for (let e = 0; e < t.length; e++) if (!t[e].dead) return !1;
            return t.length > 0;
        })(this.notes);
    }
}
class W {
    constructor(t) {
        N(this, "x", void 0),
            N(this, "originX", void 0),
            N(this, "absoluteX", void 0),
            N(this, "absoluteLoopLeftX", void 0),
            N(this, "absoluteLoopRightX", void 0),
            N(this, "measureLayout", void 0),
            N(this, "duration", void 0),
            N(this, "beats", void 0),
            N(this, "occurrences", void 0),
            N(this, "usedStrings", void 0),
            N(this, "usedRest", void 0),
            N(this, "shifts", void 0),
            N(this, "durationBeforeNextPickStroke", void 0),
            (this.x = 0),
            (this.originX = 0),
            (this.absoluteX = 0),
            (this.absoluteLoopLeftX = 0),
            (this.absoluteLoopRightX = 0),
            (this.measureLayout = t),
            (this.duration = Number.MAX_VALUE),
            (this.beats = []),
            (this.occurrences = []),
            (this.shifts = []),
            (this.usedStrings = 0),
            (this.usedRest = !1),
            (this.durationBeforeNextPickStroke = null);
    }
    get stringY() {
        return this.measureLayout.lineLayout.stringY;
    }
    get maxX() {
        return this.measureLayout.lineLayout.maxX;
    }
    get minX() {
        return this.measureLayout.lineLayout.minX;
    }
    get leftTime() {
        return this.occurrences[0];
    }
    get rightTime() {
        return this.occurrences[this.occurrences.length - 1];
    }
    get loopLeftTime() {
        return this.occurrences[0];
    }
    get firstLoopRightTime() {
        return this.occurrences[0] + this.duration;
    }
    get loopRightTime() {
        return this.occurrences[this.occurrences.length - 1] + this.duration;
    }
}
function Y(t, e) {
    return (
        t.layout.measureLayout.lineLayout !== e.layout.measureLayout.lineLayout
    );
}
function Z(t, e, s = !1) {
    if (t === e && !s) return 0;
    let n = e.layout.x;
    if (s) {
        const t = e.nextBeat;
        t &&
            ((n = t.layout.x),
                (i = t),
                e.layout.measureLayout.measure.index !==
                i.layout.measureLayout.measure.index &&
                (n += e.layout.measureLayout.width));
    }
    var i;
    let o = t.layout.measureLayout.measure.layout.x + n - t.layout.absoluteX;
    const a = e.layout.measureLayout.measure.index;
    let r = -1,
        l = t;
    for (; l && r < a;) {
        const t = l.layout.measureLayout.measure;
        t.index > r && t.index < a && (o += t.layout.width),
            (r = t.index),
            (l = l.nextBeat);
    }
    return o;
}
function K(t) {
    return Y(t.firstRef().beat, t.lastRef().beat);
}
class Q {
    constructor(t) {
        N(this, "refs", void 0),
            N(this, "keep", void 0),
            N(this, "layer", void 0),
            (this.refs = [t]),
            (this.keep = !0),
            (this.layer = null);
    }
    reset(t) {
        this.refs = [t];
    }
    addRef(t) {
        this.refs.push(t);
    }
    firstRef() {
        return this.refs[0];
    }
    lastRef() {
        return this.refs[this.refs.length - 1];
    }
    indexOfNote(t) {
        for (let e = 0; e < this.refs.length; e++)
            if (this.refs[e].note === t) return e;
        return -1;
    }
    indexOfBeat(t) {
        for (let e = 0; e < this.refs.length; e++)
            if (this.refs[e].beat === t) return e;
        return -1;
    }
}
function J(t, e) {
    return (t.x1 <= e.x1 && e.x1 < t.x2) || (e.x1 <= t.x1 && t.x1 < e.x2);
}
const $ = ["staccato", "accentuated", "heavyAccentuated"],
    tt = {
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
    et = {
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
        beatLyrics: 17,
        beatTapping: 11,
        tripletFeel: 42,
        beatHat: 10,
        accentuated: 10,
        heavyAccentuated: 12,
        staccato: 10,
    };
class st {
    constructor() {
        N(this, "levels", void 0),
            N(this, "height", void 0),
            (this.levels = new Map()),
            (this.height = 0);
    }
    _getLevel(t) {
        let e = this.levels.get(t);
        return e || ((e = []), this.levels.set(t, e)), e;
    }
    acquireLayer(t, e, s = 0) {
        const n = et[t];
        return this.acquireLayerWithHeight(t, n, e, s);
    }
    acquireLayerWithHeight(t, e, s, n = 0) {
        const i = tt[t],
            o = {
                effect: t,
                voice: n,
                visible: !0,
                x1: s.x1,
                x2: s.x2,
                height: e,
                y: 0,
                diff: s.diff,
            },
            a = this._getLevel(i);
        if (a.length && $.includes(o.effect))
            for (const t of a)
                t.x1 === o.x1 &&
                    t.x2 === o.x2 &&
                    t.effect === o.effect &&
                    ((t.voice = 0), (o.visible = !1));
        return a.push(o), o;
    }
    _fitLayer(t, e, s, n) {
        let i = t;
        const o = "beatLyrics" === e.effect;
        if (s > 0 && !o)
            for (const t of n) J(t, e) && (i = Math.max(i, t.y + t.height));
        (e.y = i), (this.height = Math.max(this.height, e.y + e.height)), n.push(e);
    }
    shake(t = 22) {
        const e = [];
        this.height = t;
        const s = Array.from(this.levels.keys()).sort((t, e) => t - e);
        for (const n of s) {
            const s = this.levels.get(n) || [];
            for (const i of s) i.visible && this._fitLayer(t, i, n, e);
        }
    }
}
class nt {
    constructor(t, e) {
        N(this, "layers", void 0),
            N(this, "bottomLayers", void 0),
            N(this, "x", void 0),
            N(this, "y", void 0),
            N(this, "maxX", void 0),
            N(this, "maxY", void 0),
            N(this, "minX", void 0),
            N(this, "height", void 0),
            N(this, "line", void 0),
            (this.layers = new st()),
            (this.bottomLayers = new st()),
            (this.x = 0),
            (this.y = 0),
            (this.maxX = t),
            (this.maxY = 0),
            (this.minX = 0),
            (this.line = e),
            (this.height = 0);
    }
    get stringY() {
        return this.y + this.layers.height;
    }
    get loopY() {
        return this.y + 20 - 5;
    }
    get loopHeight() {
        return this.height - 40 + 10;
    }
}
const it = {
    letRing: function (t) {
        return ot(t);
    },
    palmMute: function (t) {
        return ot(t);
    },
    harmonic: function (t) {
        return ot(t);
    },
    vibrato: at,
    wideVibrato: at,
};
function ot(t) {
    if (!t.start || !t.stop) throw new Error("Wrong line effect state");
    return { x1: t.start.absoluteX - 20, x2: t.stop.absoluteX + 10 };
}
function at(t) {
    const { start: e, stop: s } = t;
    if (!e || !s) throw new Error("Wrong line effect state");
    let n = null;
    const i = s.measureLayout.measure,
        o = i.beatsLayouts,
        a = o.findIndex(t => t === s);
    if (a > -1 && a < o.length - 1) n = o[a + 1];
    else {
        const t = s.measureLayout.lineLayout.line.measures,
            e = t.findIndex(t => t === i);
        e > -1 && e < t.length - 1 && (n = t[e + 1].beatsLayouts[0]);
    }
    return { x1: e.absoluteX, x2: n ? n.absoluteX : s.maxX };
}
function rt(t) {
    const e = t.firstRef().note.bend;
    if (!e) throw new Error("Wrong state at bend note");
    return -1 * (-5 - e.tone / 4);
}
class lt {
    constructor(t, e, s) {
        N(this, "index", void 0),
            N(this, "strings", void 0),
            N(this, "measures", void 0),
            N(this, "effects", void 0),
            N(this, "spaces", void 0),
            N(this, "width", void 0),
            N(this, "rhythmLines", void 0),
            N(this, "layout", void 0),
            N(this, "hangingText", void 0),
            N(this, "capo", void 0),
            (this.index = t),
            (this.strings = e.strings),
            (this.measures = []),
            (this.effects = []),
            (this.spaces = new Array(this.strings)),
            (this.width = 0),
            (this.rhythmLines = 0),
            (this.layout = new nt(s, this)),
            (this.hangingText = []),
            (this.capo = 0 === t && e.capo ? { capo: e.capo, layer: null } : void 0);
    }
    joinLineEffect(t, e, s) {
        const n = t[e];
        n &&
            !s.detected &&
            ((s.detected = !0), (s.value = n), (s.start = t.layout)),
            n && n === s.value && (s.stop = t.layout),
            n
                ? s.value &&
                n !== s.value &&
                (this.finishLineEffect(e, s), this.joinLineEffect(t, e, s))
                : this.finishLineEffect(e, s);
    }
    finishLineEffect(t, e) {
        if (e.detected) {
            const s = this.layout.layers.acquireLayer(t, it[t](e));
            this.effects.push({ effect: t, layer: s, effectValue: e.value }),
                (e.detected = !1),
                (e.value = void 0),
                (e.start = null),
                (e.stop = null);
        }
    }
    getHangingTextPosition(t) {
        const e = this.layout.minX;
        return { x1: e, x2: e + t.width };
    }
    prepare(t, e, s, n) {
        const i = [],
            o = t.usedDrums,
            a = s(this);
        for (const t of this.hangingText)
            t.layer = this.layout.layers.acquireLayer(
                "lineHangingText",
                this.getHangingTextPosition(t)
            );
        const r = this.capo;
        void 0 !== r &&
            (r.layer = this.layout.layers.acquireLayer(
                "capo",
                (function (t, e) {
                    return { x1: e - 120, x2: e };
                })(r.capo, this.layout.maxX)
            ));
        for (let t = 0; t < this.spaces.length; t++) this.spaces[t] = [];
        const l = { detected: !1, start: null, stop: null, value: void 0 },
            c = { detected: !1, start: null, stop: null, value: void 0 },
            d = { detected: !1, start: null, stop: null, value: void 0 },
            u = { detected: !1, start: null, stop: null, value: void 0 },
            h = { detected: !1, start: null, stop: null, value: void 0 };
        let p = !1;
        for (const s of this.measures) {
            s.scaleIt(a),
                (this.rhythmLines = Math.max(this.rhythmLines, s.rhythmLines));
            const r = s.alternateEnding;
            r &&
                (r.layer = this.layout.layers.acquireLayer(
                    "measureAlternateEnding",
                    s.getAlternateEndingPosition()
                ));
            const m = s.marker;
            m &&
                (m.layer = this.layout.layers.acquireLayer(
                    "measureMarker",
                    s.getMarkerPosition(m)
                ));
            const g = s.tripletFeel;
            g &&
                (g.layer = this.layout.layers.acquireLayer(
                    "tripletFeel",
                    s.getTripletFeelPosition()
                ));
            let f = 0;
            for (const a of s.beatsLayouts)
                for (const s of a.beats)
                    if (s.lyrics) {
                        for (const t of s.lyrics)
                            if (t) {
                                const e = s.getLyricsPosition(t, f);
                                (f = e.x2),
                                    (t.layer = this.layout.bottomLayers.acquireLayer(
                                        "beatLyrics",
                                        e
                                    ));
                            }
                    } else {
                        const a = s.originalText;
                        if (a) {
                            const t = this.layout.maxX + 5 - s.layout.absoluteX;
                            let e = a;
                            if (n && e.width > t) {
                                const { phrase: s, rest: o } = n(e.text, e.width, t);
                                (e = s), i.push(o);
                            }
                            e &&
                                ((e.layer = this.layout.layers.acquireLayer(
                                    "beatText",
                                    s.getTextPosition(e)
                                )),
                                    (s.text = e));
                        }
                        const r = s.chord;
                        r &&
                            (r.layer = this.layout.layers.acquireLayer(
                                "beatChord",
                                s.getChordPosition(r)
                            ));
                        const m = s.tapping;
                        m &&
                            ((m.voice = s.voice),
                                (m.layer = this.layout.layers.acquireLayer(
                                    "beatTapping",
                                    s.getTextPosition(m)
                                ))),
                            0 === s.voice &&
                            (this.joinLineEffect(s, "letRing", l),
                                this.joinLineEffect(s, "palmMute", c),
                                this.joinLineEffect(s, "harmonic", d),
                                this.joinLineEffect(s, "vibrato", u),
                                this.joinLineEffect(s, "wideVibrato", h));
                        for (const n of s.notes) {
                            if (!n.rest) {
                                const e = o ? n.drumString(o) : n.string;
                                if (e % 1 == 0 && e >= 0 && e < t.strings) {
                                    const i = n.margin(4, t);
                                    if (i) {
                                        const t = s.layout.absoluteX - i,
                                            n = i << 1,
                                            o = this.spaces[e];
                                        if (o) {
                                            const e = o.length;
                                            if (e) {
                                                const a = o[e - 1];
                                                a.x + a.w >= t
                                                    ? ((a.x = Math.min(a.x, t)),
                                                        (a.w = s.layout.absoluteX + i - a.x))
                                                    : o.push({ x: t, w: n });
                                            } else o.push({ x: t, w: n });
                                        }
                                    }
                                    if (
                                        (!o ||
                                            (59 != n.fret && 93 != n.fret) ||
                                            s.hat ||
                                            (s.hat = {
                                                type: "ride",
                                                layer: this.layout.layers.acquireLayer(
                                                    "beatHat",
                                                    s.getHatPosition()
                                                ),
                                            }),
                                            1 !== n.accentuated ||
                                            s.accentuated ||
                                            (s.accentuated = {
                                                layer: this.layout.layers.acquireLayer(
                                                    "accentuated",
                                                    s.getAccentuatedPosition(),
                                                    s.voice
                                                ),
                                            }),
                                            2 !== n.accentuated ||
                                            s.heavyAccentuated ||
                                            (s.heavyAccentuated = {
                                                layer: this.layout.layers.acquireLayer(
                                                    "heavyAccentuated",
                                                    s.getAccentuatedPosition(),
                                                    s.voice
                                                ),
                                            }),
                                            n.staccato &&
                                            !s.staccato &&
                                            (s.staccato = {
                                                layer: this.layout.layers.acquireLayer(
                                                    "staccato",
                                                    s.getStaccatoPosition(),
                                                    s.voice
                                                ),
                                            }),
                                            n.tremolo && !s.tremolo)
                                    ) {
                                        const t = n.tremolo[1] || null;
                                        (p = !0),
                                            (s.tremolo = {
                                                voice: s.voice,
                                                type: 32 === t ? 3 : 16 === t ? 2 : 1,
                                            });
                                    }
                                }
                            }
                            const i = n.bendStart;
                            if (i) {
                                const t = e.getBendCoordinates(i, n);
                                (t.x1 += s.layout.absoluteX),
                                    (t.x2 += s.layout.absoluteX),
                                    (i.layer = this.layout.layers.acquireLayerWithHeight(
                                        "noteBend",
                                        rt(i),
                                        t
                                    ));
                            }
                        }
                    }
            for (const t of s.tempoLayouts)
                t.layer = this.layout.layers.acquireLayer(
                    "measureTempo",
                    s.getTempoPosition(t)
                );
        }
        this.finishLineEffect("letRing", l),
            this.finishLineEffect("palmMute", c),
            this.finishLineEffect("harmonic", d),
            this.finishLineEffect("vibrato", u),
            this.finishLineEffect("wideVibrato", h),
            this.layout.layers.shake();
        const m = 12 * this.strings + 35 * this.rhythmLines + (p ? 12 : 0);
        return (
            this.layout.bottomLayers.shake(m),
            (this.layout.layers.height += 20),
            (this.layout.height =
                this.layout.layers.height + this.layout.bottomLayers.height + 20),
            (this.layout.maxY = this.layout.y + this.layout.height),
            i
        );
    }
}
class ct {
    constructor(t, e) {
        N(this, "measure", void 0),
            N(this, "x", void 0),
            N(this, "originX", void 0),
            N(this, "width", void 0),
            N(this, "originWidth", void 0),
            N(this, "lineLayout", void 0),
            (this.measure = t),
            (this.x = 0),
            (this.originX = 0),
            (this.width = 0),
            (this.originWidth = 0),
            (this.lineLayout = e);
    }
    get maxX() {
        return this.lineLayout.maxX;
    }
    get minX() {
        return this.lineLayout.minX;
    }
}
const dt = { bpm: 100, type: 4, position: 0 };
class ut {
    constructor(t, e, s, n) {
        N(this, "source", void 0),
            N(this, "index", void 0),
            N(this, "hasSignature", void 0),
            N(this, "signature", void 0),
            N(this, "duration", void 0),
            N(this, "scale", void 0),
            N(this, "rest", void 0),
            N(this, "repeatStart", void 0),
            N(this, "repeat", void 0),
            N(this, "voices", void 0),
            N(this, "rhythmLines", void 0),
            N(this, "width", void 0),
            N(this, "layout", void 0),
            N(this, "marker", void 0),
            N(this, "alternateEnding", void 0),
            N(this, "tripletFeel", void 0),
            N(this, "beatsLayoutsByTime", void 0),
            N(this, "beatsLayoutsTimes", void 0),
            N(this, "beatsLayouts", void 0),
            N(this, "tempoLayoutsByTime", void 0),
            N(this, "tempoLayoutsTimes", void 0),
            N(this, "tempoLayouts", void 0),
            N(this, "reprise", void 0),
            (this.source = t),
            (this.index = e),
            (this.hasSignature = !!t.signature),
            (this.signature = t.signature || s),
            (this.duration = 0),
            (this.scale = t.scale || 1),
            (this.rest = t.rest),
            (this.repeatStart = t.repeatStart),
            (this.repeat = Math.min(t.repeat || 0, 10)),
            (this.voices = new Array(t.voices.length)),
            (this.beatsLayouts = []),
            (this.beatsLayoutsByTime = new Map()),
            (this.beatsLayoutsTimes = null),
            (this.tempoLayouts = []),
            (this.tempoLayoutsByTime = new Map()),
            (this.tempoLayoutsTimes = null),
            (this.rhythmLines = 0),
            (this.width = 0),
            (this.tripletFeel = t.tripletFeel
                ? { layer: null, feel: t.tripletFeel }
                : void 0),
            (this.marker = t.marker
                ? { layer: null, text: t.marker.text, width: t.marker.width }
                : void 0),
            (this.alternateEnding = t.alternateEnding
                ? { layer: null, alternateEnding: t.alternateEnding }
                : void 0),
            (this.layout = new ct(this, n));
    }
    scaleIt(t) {
        (this.layout.x = Math.floor(this.layout.originX * t)),
            (this.layout.width = Math.floor(this.layout.originWidth * t));
        const e = this.beatsLayouts,
            s = this.tempoLayouts;
        let n = e[0];
        n.absoluteLoopLeftX = this.layout.x;
        for (const e of s) e.measureOffset = Math.floor(e.originMeasureOffset * t);
        for (const s of e) {
            if (
                ((s.x = Math.floor(s.originX * t)),
                    (s.absoluteX = this.layout.x + s.x),
                    n !== s)
            ) {
                const t = s.x - n.x,
                    e = t < 40 ? 0.5 : 0.8,
                    i = Math.floor(t * e);
                (n.absoluteLoopRightX = n.absoluteX + i),
                    (s.absoluteLoopLeftX = s.absoluteX - (t - i));
            }
            n = s;
        }
        n.absoluteLoopRightX = this.layout.x + this.layout.width;
    }
    getTempoPosition(t) {
        const e = Math.floor(
            (this.layout.width - t.measureOffset) * t.tempo.position
        ),
            s = this.layout.x + t.measureOffset + e;
        return { x1: s, x2: s + (t.tempo.bpm >= 100 ? 44 : 35) };
    }
    getMarkerPosition(t) {
        const e = this.layout.x;
        return { x1: e, x2: e + t.width };
    }
    getNumberPosition() {
        const t = this.layout.x;
        return { x1: t, x2: t + (this.index < 99 ? 17 : 22) };
    }
    getAlternateEndingPosition() {
        const t = this.layout.x;
        return { x1: t, x2: t + this.layout.width - 6 };
    }
    getTripletFeelPosition() {
        const t = this.layout.x;
        return { x1: t, x2: t + 90 };
    }
}
const ht = t => t[0],
    pt = t => t[1],
    mt = t => (11531520 * ht(t)) / pt(t),
    gt = t => t / 11531520;
function ft(t, e) {
    return ((4 * e) / pt(t)) * ht(t);
}
function yt(t) {
    return 1024 === t;
}
const vt = [
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
    bt = {
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
    wt = [
        3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
        5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
        4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
        -0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
    ];
(wt[64] = 1.5), (wt[65] = -1), (wt[66] = 0);
const xt = [
    3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
    2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
    5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
    -0.5, -1, -1, -1, -1.5, 5, 5,
];
(xt[64] = 1.5), (xt[65] = -0.5), (xt[66] = 0), (xt[75] = -0.5), (xt[72] = 0.5);
const St = {
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
    Ct = [
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
function kt(t, e) {
    return (e ? xt[t - 27] : wt[t - 27]) || 0;
}
(Ct[64] = "SR"),
    (Ct[65] = "hH"),
    (Ct[66] = "RE"),
    (Ct[72] = "lcb"),
    (Ct[75] = "hcb");
class Nt {
    constructor(t, e, s, n) {
        N(this, "source", void 0),
            N(this, "index", void 0),
            N(this, "string", void 0),
            N(this, "fret", void 0),
            N(this, "beat", void 0),
            N(this, "hp", void 0),
            N(this, "rest", void 0),
            N(this, "tie", void 0),
            N(this, "bend", void 0),
            N(this, "vibrato", void 0),
            N(this, "harmonic", void 0),
            N(this, "accentuated", void 0),
            N(this, "staccato", void 0),
            N(this, "rightSlide", void 0),
            N(this, "leftSlide", void 0),
            N(this, "dead", void 0),
            N(this, "ghost", void 0),
            N(this, "tremolo", void 0),
            N(this, "slideStart", void 0),
            N(this, "slideEnd", void 0),
            N(this, "slurStart", void 0),
            N(this, "slurEnd", void 0),
            N(this, "tieStart", void 0),
            N(this, "tieEnd", void 0),
            N(this, "bendStart", void 0),
            N(this, "bendPart", void 0),
            N(this, "bendEnd", void 0),
            N(this, "prevNoteOnString", void 0),
            N(this, "nextNoteOnString", void 0),
            N(this, "bogus", void 0),
            (this.source = t),
            (this.beat = e),
            (this.index = s),
            (this.rest = t.rest),
            (this.tie = t.tie),
            (this.string = t.string || 0),
            (this.fret = t.fret || 0),
            (this.bend = n ? this.mergeBendPoints(t.bend) : t.bend),
            (this.vibrato = t.vibrato),
            (this.harmonic = t.harmonic),
            (this.hp = t.hp),
            (this.rightSlide = (function (t = "unknown") {
                if (t) {
                    if (t.includes("shift")) return "shift";
                    if (t.includes("legato")) return "legato";
                    if (t.includes("downwards")) return "downwards";
                    if (t.includes("upwards")) return "upwards";
                }
            })(t.slide)),
            (this.leftSlide = (function (t = "unknown") {
                if (t) {
                    if (t.includes("below")) return "below";
                    if (t.includes("above")) return "above";
                }
            })(t.slide)),
            (this.ghost = t.ghost),
            (this.dead = t.dead),
            (this.accentuated = t.accentuated),
            (this.staccato = t.staccato),
            (this.tremolo = t.tremolo),
            (this.slideStart = null),
            (this.slideEnd = null),
            (this.slurStart = null),
            (this.slurEnd = null),
            (this.tieStart = null),
            (this.tieEnd = null),
            (this.bendStart = null),
            (this.bendPart = null),
            (this.bendEnd = null),
            (this.prevNoteOnString = null),
            (this.nextNoteOnString = null),
            (this.bogus = !1);
    }
    get isVisible() {
        return !(
            this.bogus ||
            (!this.bendStart && !this.slurStart && this.tie && !this.ghost)
        );
    }
    margin(t, e) {
        if (!this.isVisible) return 0;
        if (e && e.usedDrums) {
            const s = e.usedDrums.get(this.fret);
            if (s) {
                const e = s.name || "S";
                return (St[e] || 0) + t;
            }
            return t;
        }
        let s = 4;
        return (
            this.dead ? (s = 4) : this.fret >= 10 && (s = 8),
            this.ghost && (s += 5),
            s + t
        );
    }
    drumString(t) {
        const e = t.get(this.fret);
        return (e && e.string) || 0;
    }
    mergeBendPoints(t) {
        if (!t) return;
        let e = t.points[0].tone;
        const s = [{ position: 0, tone: e }];
        for (const n of t.points)
            s[s.length - 1].tone !== n.tone &&
                (s.push({ position: 0, tone: n.tone }), (e = Math.max(e, n.tone)));
        return (
            1 === s.length && s.push({ position: 0, tone: e }),
            s.forEach((t, e) => {
                t.position = (60 * e) / (s.length - 1);
            }),
            Object.assign({}, t, { points: s })
        );
    }
}
const Lt = new Map(),
    Tt = [],
    It = [];
class _t {
    constructor(t, e, s, n) {
        N(this, "source", void 0),
            N(this, "index", void 0),
            N(this, "strings", void 0),
            N(this, "frets", void 0),
            N(this, "tuning", void 0),
            N(this, "voices", void 0),
            N(this, "name", void 0),
            N(this, "instrument", void 0),
            N(this, "instrumentId", void 0),
            N(this, "artist", void 0),
            N(this, "title", void 0),
            N(this, "capo", void 0),
            N(this, "withChords", void 0),
            N(this, "withLyrics", void 0),
            N(this, "automations", void 0),
            N(this, "measures", void 0),
            N(this, "tpqn", void 0),
            N(this, "progression", void 0),
            N(this, "tempos", void 0),
            N(this, "timeline", void 0),
            N(this, "timestamps", void 0),
            N(this, "revisionId", void 0),
            N(this, "songId", void 0),
            N(this, "partId", void 0),
            N(this, "shifts", void 0),
            N(this, "sourceLyrics", void 0),
            N(this, "difficulty", void 0),
            N(this, "usedDrums", void 0),
            N(this, "isDrumStdOn", void 0),
            (this.source = t),
            (this.index = e),
            (this.strings = yt(t.instrumentId) ? (n ? 5 : 6) : t.strings),
            (this.frets = t.frets),
            (this.tuning = t.tuning),
            (this.voices = t.voices),
            (this.name = t.name),
            (this.automations = t.automations),
            (this.measures = new Array(t.measures.length)),
            (this.instrument = t.instrument),
            (this.instrumentId = t.instrumentId),
            (this.name = t.name),
            (this.artist = t.artist),
            (this.title = t.title),
            (this.capo = t.capo),
            (this.tempos = It),
            (this.timeline = Lt),
            (this.shifts = Tt),
            (this.timestamps = Tt),
            (this.songId = t.songId),
            (this.partId = t.partId),
            (this.revisionId = t.revisionId),
            (this.difficulty = null),
            (this.sourceLyrics = s),
            (this.withLyrics = t.withLyrics),
            (this.usedDrums = yt(t.instrumentId) ? new Map() : null),
            (this.isDrumStdOn = n),
            (this.withChords = !1);
    }
    hasTimeline() {
        return this.timeline !== Lt;
    }
}
class Et {
    constructor(t) {
        N(this, "startIndex", void 0),
            N(this, "endIndex", void 0),
            N(this, "alternateEndings", void 0),
            (this.startIndex = t.index),
            (this.endIndex = 0),
            (this.alternateEndings = new Map());
    }
    addEnding(t, e) {
        this.alternateEndings.set(t, e.index);
    }
    getEnding(t) {
        return this.alternateEndings.get(t);
    }
}
class Pt {
    constructor(t, e, s) {
        N(this, "lines", void 0),
            N(this, "height", void 0),
            N(this, "slicingMode", void 0);
        const n = (function (t, e, s) {
            const n = e.width,
                i = [];
            let o = new lt(0, t, n);
            i.push(o), t.tuning && (o.width = 25);
            for (const e of t.measures)
                e.width + o.width > n &&
                    o.measures.length > 0 &&
                    ((o = new lt(i.length, t, n)), i.push(o)),
                    o.measures.push(e),
                    (e.layout.lineLayout = o.layout),
                    (e.layout.originX = o.width),
                    (e.layout.originWidth = e.width),
                    (o.width += e.width);
            let a = [],
                r = 0;
            const l = i.length,
                c = e.makeScaleStrategy(l);
            for (o of i)
                (o.hangingText = a),
                    (o.layout.y = r),
                    (a = o.prepare(t, e, c, s)),
                    (r += o.layout.height);
            return { lines: i, height: r };
        })(t, e, s);
        (this.slicingMode = e), (this.lines = n.lines), (this.height = n.height);
    }
}
class At {
    constructor(t) {
        N(this, "source", void 0),
            N(this, "measureOffset", void 0),
            N(this, "originMeasureOffset", void 0),
            N(this, "tempo", void 0),
            N(this, "layer", void 0),
            (this.source = t),
            (this.tempo = {
                bpm: t.bpm,
                type: t.type,
                position: t.position || 0,
                linear: t.linear || !1,
                visible: t.visible || !1,
            }),
            (this.measureOffset = 0),
            (this.originMeasureOffset = 0);
    }
}
class Mt {
    constructor(t, e) {
        N(this, "source", void 0),
            N(this, "index", void 0),
            N(this, "beats", void 0),
            N(this, "hasSameRhythm", void 0),
            N(this, "lyrics", !1),
            N(this, "rest", void 0),
            (this.source = t),
            (this.index = e),
            (this.rest = (t && t.rest) || !1),
            (this.beats = t && !this.rest ? new Array(t.beats.length) : []),
            (this.hasSameRhythm = !t || t.hasSameRhythm || !1);
    }
}
class Bt extends class {
    constructor(t) {
        N(this, "width", void 0), (this.width = t);
    }
    areBeatsInSameSlice(t, e) {
        return t.layout.stringY === e.layout.stringY;
    }
    getBendCoordinates(t, e) {
        const s = t.firstRef().beat,
            n = t.lastRef(),
            i = n.note,
            o = i.nextNoteOnString,
            a = !!o && !!o.bendStart && !!o.tie,
            r = a ? n.beat.nextBeat : n.beat,
            l = Z(s, e.beat);
        return {
            x1: Z(s, s) - l,
            x2:
                Z(s, r, !a) -
                l -
                (function (t) {
                    const e = t.nextNoteOnString;
                    return e && !e.tie ? 12 : 0;
                })(i),
        };
    }
    bendsForNote(t) {
        const e = t.bendStart || t.bendPart || t.bendEnd;
        return e ? [e] : [];
    }
} {
    calcTabSize(t) {
        return t.reduce(
            (t, e) => ({
                width: Math.max(e.width, t.width),
                height: t.height + e.height,
            }),
            { width: 0, height: 0 }
        );
    }
    expectedSliceWidth(t) {
        return this.width;
    }
    finalVerticalSeparatorPosition(t) {
        return null;
    }
    getBendCoordinates(t, e) {
        const s = super.getBendCoordinates(t, e),
            n = s.x1;
        let i = s.x2;
        if (
            (function (t) {
                const e = t.lastRef().beat,
                    s = e.nextBeat ? e.nextBeat : e;
                return Y(t.firstRef().beat, s);
            })(t)
        ) {
            const e = t.firstRef().beat;
            i = e.layout.maxX - e.layout.absoluteX - 12;
        }
        return { x1: n, x2: i };
    }
    getTieSlurPathLength(t, e, s = !1) {
        return this.areBeatsInSameSlice(t, e)
            ? e.layout.absoluteX - t.layout.absoluteX
            : s
                ? e.layout.absoluteX
                : t.layout.maxX - t.layout.absoluteX;
    }
    makeScaleStrategy(t) {
        return e => (e.index === t - 1 ? 1 : e.layout.maxX / e.width);
    }
    normalizeBeatCoordinates(t) {
        for (const e of t) delete e.normalizationData;
    }
    shouldDrawBendOnNote(t, e) {
        return !!e.bendStart && e.bendStart === t;
    }
    stringLineMaxX(t) {
        return t.layout.maxX - 1;
    }
}
const Dt = t => 0 == (t & (t - 1));
function Ot(t, e) {
    let s;
    return (
        (s =
            (t & (t - 1)) | (e & (e - 1))
                ? (t * e) /
                (function (t, e) {
                    let s = t,
                        n = e;
                    for (; 0 !== s && 0 !== n;) s >= n ? (s %= n) : (n %= s);
                    return s + n;
                })(t, e)
                : Math.max(t, e)),
        s <= 0 || s >= 32768 || s % 1 != 0 ? t : s
    );
}
function jt(t, e, s) {
    return t * (6e4 / s / e);
}
const Rt = t => ((dt.bpm / dt.type) * 960) / (t.bpm / t.type),
    zt = t => ((t / 960) * 6e4) / dt.bpm,
    Ft = (t, e) => t * e * dt.type;
function Ht(t, e) {
    const s = t.get(e);
    if (!s) throw new Error("Broken timeline");
    return s;
}
function qt(t, e) {
    return 2 * t + e;
}
function Ut(t, e, s) {
    const { timeline: n, timestamps: i } = t,
        o = i[0],
        a = i[i.length - 1];
    if (e <= o) return Ht(n, o);
    if (e >= a) return Ht(n, a);
    let r = 0,
        l = i.length,
        c = 0,
        d = i[0];
    for (; l - r > 1;) {
        c = Math.floor((r + l) / 2);
        const t = i[c];
        if (e < t) l = c;
        else {
            if (!(e > t)) {
                d = t;
                break;
            }
            r = c;
        }
    }
    return (d = l - r > 1 ? i["left" === s ? c : c - 1] : i[r]), Ht(n, d);
}
function Vt(t, e) {
    let s = t.tempos[0];
    for (const n of t.tempos) {
        if (n.timestamp > e) break;
        s = n;
    }
    return s ? s.tempo : dt;
}
function Gt(t, e, s, n, i) {
    const o = s.measureLayout.measure.reprise,
        a = n.measureLayout.measure.reprise;
    let r = s.leftTime;
    const l = n.leftTime,
        c = n.firstLoopRightTime;
    !o || (a && o.startIndex === a.startIndex) || (r = s.rightTime);
    const d = r;
    let u = e;
    if (r > e || e >= c) {
        const s = Ut(t, e, "left"),
            n = s.leftTime,
            o = s.rightTime;
        u = r <= n && n < c ? n : r <= o && o < c ? o : "right" === i ? l : d;
    }
    return { cursor: u, loopStart: r, loopEnd: c };
}
function Xt(t, e, s) {
    let n = t.measures[0];
    for (const s of t.measures) {
        if (s.layout.x > e) break;
        n = s;
    }
    const i = n.beatsLayouts;
    let o = 0,
        a = i.length,
        r = 0,
        l = i[0];
    for (; a - o > 1;) {
        (r = Math.floor((o + a) / 2)), (l = i[r]);
        const t = l.absoluteX;
        if (t < e) o = r;
        else {
            if (!(t > e)) break;
            a = r;
        }
    }
    if (a - o > 1) return l;
    {
        if (a === i.length) return i[o];
        const t = i[o],
            n = i[a],
            r = n.absoluteX - t.absoluteX,
            l = (function (t) {
                switch (t) {
                    case "left":
                        return 0.2;
                    case "right":
                        return 0.8;
                    default:
                        return 0.5;
                }
            })(s);
        return t.absoluteX + r * l > e ? t : n;
    }
}
function Wt(t, e, s) {
    let n = 0,
        i = t.lines.length,
        o = t.lines[0];
    for (; i - n > 1;) {
        const s = Math.floor((n + i) / 2),
            a = t.lines[s];
        if (e.y < a.layout.y) i = s;
        else {
            if (!(e.y > a.layout.maxY)) {
                o = a;
                break;
            }
            n = s;
        }
    }
    return Xt(o, e.x, s);
}
const Yt = new Map();
function Zt(t, e, s) {
    let n = Yt.get(e);
    if (!n) {
        const s = t ? ((t, e) => 1 / ((4 * t) / e))(t, e) : gt(e);
        (n = 130 * Math.log(s + 1) + 20), Yt.set(e, n);
    }
    return s ? 0.2 * n : n;
}
function Kt(t) {
    t.layout.usedRest = !0;
}
function Qt(t, e) {
    e.rest || (t.layout.usedStrings |= 1 << e.string);
}
function Jt(t, e) {
    var s;
    yt(t.instrumentId) &&
        t.usedDrums &&
        t.usedDrums.set(
            e.fret,
            ((s = e.fret), { string: e.string, name: Ct[s - 27] || "*", fret: s })
        );
}
function $t(t, e, s, n) {
    const i = t.hp || "legato" === t.rightSlide,
        o = n[t.string];
    !o ||
        i ||
        t.tie ||
        (o.addRef({ note: t, beat: e, measure: s }),
            (o.firstRef().note.slurStart = o),
            (o.lastRef().note.slurEnd = o),
            (n[t.string] = void 0)),
        !o && i && (n[t.string] = new Q({ note: t, beat: e, measure: s }));
}
function te(t, e, s, n) {
    const i = "legato" === t.rightSlide || "shift" === t.rightSlide,
        o = n[t.string];
    o &&
        !t.tie &&
        (o.addRef({ note: t, beat: e, measure: s }),
            (o.firstRef().note.slideStart = o),
            (o.lastRef().note.slideEnd = o),
            (n[t.string] = void 0)),
        i && (n[t.string] = new Q({ note: t, beat: e, measure: s }));
}
function ee(t, e, s, n) {
    const i = n.get(t.string);
    if (
        (!i && t.bend && t.tie && 0 === t.bend.points[0].tone && (t.ghost = !0),
            i &&
            !t.bend &&
            t.tie &&
            ((i.keep = !0), i.addRef({ note: t, beat: e, measure: s })),
            i && (t.bend || (!t.bend && !t.tie)))
    ) {
        i.firstRef().note.bendStart = i;
        for (let t = 1; t < i.refs.length - 1; t++) i.refs[t].note.bendPart = i;
        (i.lastRef().note.bendEnd = i), n.delete(t.string);
    }
    t.bend && n.set(t.string, new Q({ note: t, beat: e, measure: s }));
}
function se(t, e, s) {
    for (const [t, e] of s.entries())
        if (e.keep) e.keep = !1;
        else {
            e.firstRef().note.bendStart = e;
            for (let t = 1; t < e.refs.length - 1; t++) e.refs[t].note.bendPart = e;
            (e.lastRef().note.bendEnd = e), s.delete(t);
        }
}
function ne(t, e, s, n) {
    const i = n[t.string];
    i
        ? t.tie
            ? (i.addRef({ note: t, beat: e, measure: s }),
                (i.firstRef().note.tieStart = i),
                (i.lastRef().note.tieEnd = i),
                (n[t.string] = new Q({ note: t, beat: e, measure: s })))
            : i.reset({ note: t, beat: e, measure: s })
        : (n[t.string] = new Q({ note: t, beat: e, measure: s }));
}
function ie(t, e) {
    const s = t.string,
        n = e[s];
    n && ((n.nextNoteOnString = t), (t.prevNoteOnString = n)), (e[s] = t);
}
function oe(t, e) {
    if (
        (t.repeatStart && (e = { lastReprise: new Et(t), inReprise: !0 }),
            t.alternateEnding)
    ) {
        if (e && e.lastReprise) {
            t.reprise = e.lastReprise;
            for (const s of t.alternateEnding.alternateEnding)
                e.lastReprise.addEnding(s, t);
        }
    } else e && e.inReprise && (t.reprise = e.lastReprise);
    if (t.repeat) {
        if (!e || !e.lastReprise) throw Error("Broken ending of reprise");
        (e.lastReprise.endIndex = t.index), (e.inReprise = !1);
    }
    return e;
}
const ae = [{ duration: [1, 1], type: 1, rest: !0, notes: [{ rest: !0 }] }],
    re = {
        string: void 0,
        fret: void 0,
        hp: void 0,
        rest: void 0,
        tie: void 0,
        bend: void 0,
        vibrato: void 0,
        staccato: void 0,
        accentuated: void 0,
        harmonic: void 0,
        dead: void 0,
        ghost: void 0,
        slide: void 0,
    };
function le(t, e, s) {
    const n = (function (t) {
        return t.hasSignature ? 50 : 15;
    })(e);
    for (const o of s.filter(t => +t.measure == +e.index + 1)) {
        const s = t
            ? Math.floor(4 * t * o.position)
            : ((i = o.position), Math.floor(11531520 * i));
        let a = e.tempoLayoutsByTime.get(s);
        a ||
            ((a = new At(o)),
                (a.measureOffset = n),
                (a.originMeasureOffset = n),
                e.tempoLayoutsByTime.set(s, a));
    }
    var i;
    (e.tempoLayoutsTimes = [...e.tempoLayoutsByTime.keys()].sort(
        (t, e) => t - e
    )),
        (e.tempoLayouts = e.tempoLayoutsTimes.reduce((t, s) => {
            const n = e.tempoLayoutsByTime.get(s);
            return n && t.push(n), t;
        }, []));
}
function ce(t, e, s) {
    const n = e.beatsLayoutsByTime;
    let i = (function (t) {
        return t.hasSignature ? 60 : 25;
    })(e);
    const o = [...n.keys()].sort((t, e) => t - e);
    e.beatsLayoutsTimes = o;
    let a = 0,
        r = n.get(0);
    const l = e.rest && !(s && s[e.index] && s[e.index].beats.length > 0);
    if (r) {
        e.beatsLayouts[0] = r;
        for (let s = 1; s < o.length; s++) {
            const c = o[s],
                d = n.get(c);
            d &&
                ((r.x = i),
                    (r.originX = i),
                    (i += Zt(t, c - a, l)),
                    (e.beatsLayouts[s] = d),
                    (a = c),
                    (r = d));
        }
        (r.x = i), (r.originX = i), (i += Zt(t, e.duration - a, l));
        const s = e.marker ? e.marker.width : 0;
        e.width = Math.ceil(Math.max(e.width, i, s));
    }
}
const de = {
    useStdDrumNotation: !1,
    useBendPointsMerge: !0,
    useGenericTimeline: !1,
};
const ue =
    b && window.performance && window.performance.now
        ? window.performance.now.bind(window.performance)
        : Date.now;
function he(t, e) {
    let s;
    return () => {
        clearTimeout(s), (s = setTimeout(() => t.apply(this, arguments), e));
    };
}
function pe(t, e) {
    let s = !1;
    return () => {
        s ||
            (t.call(),
                (s = !0),
                setTimeout(function () {
                    s = !1;
                }, e));
    };
}
const me = ["scroll", "keydown", "click", "mousemove", "mousedown"];
class ge {
    constructor() {
        ge.prototype.__init.call(this), b && (this.reset(), this.engage());
    }
    engage() {
        for (const t of me) window.addEventListener(t, this.trackActivity);
    }
    disengage() {
        for (const t of me) window.removeEventListener(t, this.trackActivity);
    }
    reset() {
        this.setIsActive(!1);
    }
    __init() {
        this.trackActivity = pe(() => {
            this.lastActivityTimestampMs = ue();
        }, 200);
    }
    setIsActive(t) {
        !this.isActive && t
            ? this.disengage()
            : this.isActive && !t && this.engage(),
            (this.lastActivityTimestampMs = ue()),
            (this.isActive = t);
    }
    getTimeSinceLastActivity() {
        return this.isActive
            ? 0
            : Math.round((ue() - this.lastActivityTimestampMs) / 6e4);
    }
}
const fe = new ge(),
    ye = t => t.currentTime;
function ve(t = 21) {
    let e = "";
    for (; t-- > 0;)
        e += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[
            (64 * Math.random()) | 0
        ];
    return e;
}
function be(t, e) {
    let s;
    for (s = e; t > 1; t--) s += e;
    return s;
}
const we = (b && window.performance) || {
    offset: Date.now(),
    now: function () {
        return Date.now() - this.offset;
    },
};
function xe(t) {
    return t / 1e3;
}
class Se {
    constructor(t) {
        Se.prototype.__init.call(this),
            (this.state = {
                speed: 100,
                pitchShift: 0,
                cursor: 0,
                loopStart: 0,
                loopEnd: 0,
                type: "focus",
                isPlaying: !1,
                isCountIn: !1,
                url: "",
            });
        try {
            let t = new window.AudioContext({ latencyHint: "interactive" });
            if (44100 !== t.sampleRate && 48e3 !== t.sampleRate) {
                const e = t.createBufferSource();
                (e.buffer = t.createBuffer(1, 1, 48e3)),
                    e.connect(t.destination),
                    e.start(0),
                    "close" in t && t.close(),
                    (t = new window.AudioContext({ latencyHint: "interactive" }));
            }
            (t.onstatechange = () => {
                console.log(
                    "Audio context changed state to "
                        .concat(this.context.state, ", isPlaying: ")
                        .concat(this.state.isPlaying, ", sample rate ")
                        .concat(this.context.sampleRate)
                );
            }),
                (this.context = t),
                (this.freezeCheckSampleRate = this.context.sampleRate);
        } catch (t) {
            console.error(t),
                console.log("There is no audio context"),
                (this.context = null);
        }
        window.Worker &&
            ((this.worker = new Worker("/static/WebWorker.801c17ed.js")),
                (this.worker.onmessage = this.onMessage),
                (this.worker.onerror = t.onError)),
            (this.callback = t),
            (this.buffers = [null, null, null, null, null]),
            (this.sources = [null, null, null, null, null]),
            (this.reuseIndex = 0),
            (this.startedTime = null),
            (this.token = ""),
            (this.countinDuration = 0),
            (this.workerTs = 0),
            (this.workerDelay = 0),
            (this.hack = (function () {
                try {
                    const t = document.createElement("div");
                    t.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
                    const e = t.children.item(0);
                    return (
                        (e.disableRemotePlayback = !0),
                        (e.controls = !1),
                        (e.src =
                            "data:audio/mpeg;base64,//uQx" +
                            be(23, "A") +
                            "WGluZwAAAA8AAAACAAACcQCA" +
                            be(16, "gICA") +
                            be(66, "/") +
                            "8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
                            be(320, "A") +
                            "//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
                            be(15, "/") +
                            "7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
                            be(18, "/") +
                            "9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
                            be(97, "V") +
                            "Q=="),
                        (e.loop = !0),
                        e.load(),
                        {
                            play() {
                                try {
                                    const t = e.play();
                                    t &&
                                        t.then(
                                            () => {
                                                "mediaSession" in navigator &&
                                                    (navigator.mediaSession.playbackState = "playing");
                                            },
                                            t => console.warn("Hack play failed", t)
                                        );
                                } catch (t) {
                                    console.error(t);
                                }
                            },
                            pause() {
                                try {
                                    const t = e.pause();
                                    t &&
                                        t.then(
                                            () => { },
                                            t => console.warn("Hack pause failed", t)
                                        ),
                                        "mediaSession" in navigator &&
                                        (navigator.mediaSession.playbackState = "paused");
                                } catch (t) {
                                    console.error(t);
                                }
                            },
                        }
                    );
                } catch (t) {
                    return console.error(t), null;
                }
            })()),
            (this.noSound = !1),
            (this.marginIssueReported = !1),
            (this.workerStarted = !1),
            (this.hasSingleTrack = !1);
    }
    get shouldUseWorker() {
        return (
            this.context &&
            this.worker &&
            !this.noSound &&
            !("mute" === this.state.type && this.hasSingleTrack)
        );
    }
    resumeContext() {
        const t = this.context;
        t &&
            "running" !== t.state &&
            "resume" in t &&
            (console.info("Resume context", t.state),
                t.resume().catch(console.error.bind(console)));
    }
    createAudioBuffers(t, e) {
        const s = 1.02 * e;
        for (let n = 0; n < this.buffers.length; n++) {
            const i = this.buffers[n];
            (i && i.numberOfChannels === t && i.sampleRate === e && i.length === s) ||
                (this.buffers[n] = this.context.createBuffer(t, s, e));
        }
    }
    onOpened(t) {
        this.createAudioBuffers(t.channels, t.sampleRate),
            this.callback.onOpened(t);
    }
    onEmpty(t) {
        this.callback.onEmpty(t);
    }
    onLoad(t) {
        this.callback.onLoad(t);
    }
    onLoaded(t) {
        (this.noSound = !1), this.callback.onLoaded(t);
    }
    onError(t) {
        (this.noSound = !0), this.callback.onError(t.error, t.isNetworkError);
    }
    onPacket(t) {
        if (!this.state.isPlaying) return;
        if (this.token !== t.token) return;
        const e = this.context;
        if (e.sampleRate !== this.freezeCheckSampleRate)
            return (
                console.warn(
                    "SampleRate has changed",
                    e.sampleRate,
                    this.freezeCheckSampleRate
                ),
                void this.callback.onFreeze()
            );
        this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
        const s = this.buffers[this.reuseIndex];
        if (
            (s.copyToChannel
                ? (s.copyToChannel(t.buffer0, 0),
                    t.buffer1 && s.copyToChannel(t.buffer1, 1))
                : (s.getChannelData(0).set(t.buffer0),
                    t.buffer1 && s.getChannelData(1).set(t.buffer1)),
                !this.gain)
        ) {
            const t = e.createGain();
            (t.gain.value = 1), t.connect(e.destination), (this.gain = t);
        }
        const n = e.createBufferSource();
        (n.buffer = s), n.connect(this.gain), (this.sources[this.reuseIndex] = n);
        let i = 0;
        if (null !== this.startedTime) {
            i = this.startedTime + xe(t.timestampMs);
            const s = i - e.currentTime;
            s < 0.2 &&
                (console.log("Ahead of time schedule margin", s),
                    console.info("Sound generation delay ".concat(this.workerDelay, "ms"))),
                !this.marginIssueReported &&
                t.timestampMs > 2e3 &&
                (s < 0 && console.log("Ahead of time schedule margin is negative", s),
                    s >= 0 &&
                    s < 0.2 &&
                    console.log("Ahead of time schedule margin is too small", s),
                    (this.marginIssueReported = !0));
        } else
            (i = e.currentTime + 0.05),
                (this.startedContextTime = ye(e) + 0.05),
                (this.startedTime = i),
                (this.workerDelay = Math.floor(we.now() - this.workerTs)),
                console.info("Sound generation delay ".concat(this.workerDelay, "ms")),
                (function (t, e) {
                    if (t) throw new Error(e);
                })(
                    0 !== t.timestampMs,
                    "Got initial audio packet with unexpected timestamp ".concat(
                        t.timestampMs
                    )
                );
        n.start(i, 0, xe(t.durationMs));
    }
    __init() {
        this.onMessage = t => {
            try {
                const e = t.data.message;
                t.data.timestampMs && t.data.timestampMs,
                    null != t.data.index && t.data.index,
                    null != t.data.url && t.data.url,
                    "worker/packet" === e
                        ? this.onPacket(t.data)
                        : "worker/error" === e
                            ? this.onError(t.data)
                            : t.data.url === this.state.url &&
                            ("worker/load" === e
                                ? this.onLoad(t.data)
                                : "worker/loaded" === e
                                    ? this.onLoaded(t.data)
                                    : "worker/opened" === e
                                        ? this.onOpened(t.data)
                                        : "worker/empty" === e && this.onEmpty(t.data));
            } catch (t) {
                console.error(t), this.callback.onError(t);
            }
        };
    }
    play() {
        this.resumeContext(),
            (this.marginIssueReported = !1),
            this.shouldUseWorker
                ? this.worker.postMessage([this.startGenerateSoundPackets()])
                : this.startWithoutSound(),
            (this.state = Object.assign({}, this.state, { isPlaying: !0 }));
    }
    getWorkerPosition() {
        let { cursor: t, loopStart: e, loopEnd: s } = this.state;
        return (
            this.state.speed < 100 &&
            this.correctTimestampFor50Timeline &&
            ((t = this.correctTimestampFor50Timeline(t)),
                (e = this.correctTimestampFor50Timeline(e)),
                (s = this.correctTimestampFor50Timeline(s))),
            { cursor: t, loopStart: e, loopEnd: s }
        );
    }
    pause() {
        return (
            this.turnOffSound(),
            this.state.isPlaying &&
            ((this.state = Object.assign({}, this.state, { isPlaying: !1 })),
                this.workerStarted &&
                ((this.workerStarted = !1),
                    this.worker.postMessage([
                        { message: "worker/stopGenerate" },
                        { message: "worker/seek", position: this.getWorkerPosition() },
                    ]))),
            this.state.cursor
        );
    }
    turnOffSound() {
        if (this.state.isPlaying) {
            const t = this.gain;
            if (t) {
                t.gain.setValueAtTime(1, this.context.currentTime),
                    t.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + 0.02),
                    (this.gain = null);
                for (const t of this.sources)
                    t &&
                        setTimeout(
                            (t => () => {
                                try {
                                    t.stop();
                                } catch (t) { }
                            })(t),
                            50
                        );
                this.sources.fill(null);
            }
            (this.state = Object.assign({}, this.state, {
                cursor: this.getCursor(),
            })),
                (this.startedTime = null),
                (this.startedContextTime = null),
                this.hack && this.hack.pause();
        }
    }
    seek(t, e, s) {
        this.turnOffSound(),
            (this.state = Object.assign({}, this.state, {
                cursor: t,
                loopStart: e,
                loopEnd: s,
            })),
            this.shouldUseWorker
                ? this.worker.postMessage([
                    { message: "worker/seek", position: this.getWorkerPosition() },
                    this.state.isPlaying && this.startGenerateSoundPackets(),
                ])
                : this.state.isPlaying && this.startWithoutSound();
    }
    speed(t) {
        return (
            this.turnOffSound(),
            (this.state = Object.assign({}, this.state, { speed: t })),
            this.shouldUseWorker
                ? this.worker.postMessage([
                    { message: "worker/setSpeed", speed: t },
                    { message: "worker/seek", position: this.getWorkerPosition() },
                    this.state.isPlaying && this.startGenerateSoundPackets(),
                ])
                : this.state.isPlaying && this.startWithoutSound(),
            this.state.cursor
        );
    }
    type(t) {
        this.state = Object.assign({}, this.state, { type: t });
    }
    pitch(t) {
        return (
            this.turnOffSound(),
            (this.state = Object.assign({}, this.state, { pitchShift: t })),
            this.shouldUseWorker
                ? this.worker.postMessage([
                    { message: "worker/setPitch", pitchShift: t },
                    { message: "worker/seek", position: this.getWorkerPosition() },
                    this.state.isPlaying && this.startGenerateSoundPackets(),
                ])
                : this.state.isPlaying && this.startWithoutSound(),
            this.state.cursor
        );
    }
    startWithoutSound() {
        this.updateCountIn(),
            (this.startedTime = we.now() / 1e3),
            (this.startedContextTime = this.startedTime);
    }
    updateCountIn() {
        let t = null;
        if (((this.countinDuration = 0), this.state.isCountIn)) {
            t = this.findBpmAndBeatByTimestamp(this.state.cursor);
            const e = 48e3;
            this.countinDuration =
                Math.floor((((60 / t.bpm) * t.beat * 100) / this.state.speed) * e) / e;
        }
        return t;
    }
    startGenerateSoundPackets() {
        return (
            this.hack && this.hack.play(),
            (this.token = ve()),
            (this.workerTs = we.now()),
            (this.workerStarted = !0),
            {
                message: "worker/startGenerate",
                token: this.token,
                countIn: this.updateCountIn(),
            }
        );
    }
    reset(t, e, s, n) {
        this.turnOffSound();
        const i = this.state.isPlaying;
        (this.state = Object.assign({}, this.state, {
            cursor: t.cursor,
            loopStart: t.loopStart,
            loopEnd: t.loopEnd,
            speed: e,
            pitchShift: s,
            isPlaying: !1,
            isCountIn: n,
        })),
            (this.token = ve()),
            this.shouldUseWorker &&
            this.worker.postMessage([
                i && { message: "worker/stopGenerate" },
                { message: "worker/reset" },
                { message: "worker/setSpeed", speed: e },
                { message: "worker/setPitch", pitchShift: s },
                { message: "worker/seek", position: this.getWorkerPosition() },
            ]);
    }
    setBuffer(t, e) {
        (this.state.url = e),
            this.worker.postMessage([
                {
                    message: "worker/setBuffer",
                    buffer0: t.getChannelData(0),
                    buffer1: t.numberOfChannels > 1 ? t.getChannelData(1) : null,
                    sampleRate: t.sampleRate,
                    url: e,
                },
                { message: "worker/seek", position: this.getWorkerPosition() },
                this.state.isPlaying && this.startGenerateSoundPackets(),
            ]);
    }
    open(t) {
        (this.state.url = t),
            this.worker.postMessage([
                { message: "worker/open", url: t },
                { message: "worker/seek", position: this.getWorkerPosition() },
            ]);
    }
    clearBuffer() {
        this.shouldUseWorker &&
            this.worker.postMessage([{ message: "worker/clearBuffer" }]);
    }
    setCountin(t) {
        this.state = Object.assign({}, this.state, { isCountIn: t });
    }
    getCursor() {
        const { state: t } = this;
        if (t.isPlaying && null !== this.startedTime) {
            const e = 1e3 * Math.max(this.passed(), 0);
            let s = (e > 0 ? e * (t.speed / 100) : 0) + t.cursor;
            return (
                t.loopEnd &&
                s > t.loopEnd &&
                (s = t.loopStart + ((s - t.loopStart) % (t.loopEnd - t.loopStart))),
                s
            );
        }
        return t.cursor;
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
    passed() {
        const { context: t, startedTime: e, countinDuration: s } = this;
        return null === e
            ? 0
            : this.shouldUseWorker
                ? ye(t) -
                this.startedContextTime -
                s -
                (t =>
                    ("outputLatency" in t ? t.outputLatency : 0) +
                    ("baseLatency" in t ? t.baseLatency : 0))(t)
                : we.now() / 1e3 - e - s;
    }
    isPositionChanged() {
        return this.state.isPlaying && this.passed() > 0;
    }
}
async function Ce(t) {
    if (true) return import("./playerPlus.3bcb41a5.js");
}
async function ke(t) {
    const e = t.get();
    if (e.demo.enabled && 27 === e.meta.songId)
        return import("./playerDemo.3f806a4f.js");
}
function Ne(t, e) {
    t("player/changeLoop", e);
}
async function Le(t, e) {
    try {
        let s = await Ce(t);
        if (s && s.demo && !s.demo()) return s.plusChangeSpeed(t, e);
        if (((s = await ke(t)), s)) return s.demoChangeSpeed(t, e);
    } catch (t) {
        console.error(t);
    }
}
async function Te(t, e) {
    try {
        let s = await Ce(t);
        if (s && s.demo && !s.demo()) return s.plusChangePitch(t, e);
        if (((s = await ke(t)), s)) return s.demoChangePitch(t, e);
    } catch (t) {
        console.error(t);
    }
}
function Ie(t, { enabled: e = !1 }) {
    t("player/suspend", "fullscreen"),
        t("screen/toggleFullscreen", { enabled: e }),
        t("player/resume", "fullscreen");
}
async function _e(t, e) {
    try {
        let s = await Ce(t);
        if (s && s.demo && !s.demo()) return s.plusChangeType(t, e);
        if (((s = await ke(t)), s)) return s.demoChangeType(t, e);
    } catch (t) {
        console.error(t);
    }
}
function Ee(t, e) {
    return (
        t === e ||
        (t.cursor === e.cursor &&
            t.loopStart === e.loopStart &&
            t.loopEnd === e.loopEnd)
    );
}
const Pe = { bpm: 72, type: 4, position: 0 },
    Ae = t => ({
        player: Object.assign({}, t.player, {
            isAudioFailed: !1,
            isAudioNetworkFailed: !1,
        }),
    }),
    Me = (t, e) => {
        const s = null != e ? e : !t.player.shouldPlay;
        b && fe.setIsActive(s);
        const n = Object.assign({}, t.player, { shouldPlay: s }),
            { audio: i, canPlay: o } = t.player;
        return (
            s && i.resumeContext(),
            o && s
                ? !i.isPlaying && i.play()
                : i.isPlaying && (i.pause(), (n.position = i.getActualPosition())),
            { player: n }
        );
    },
    Be = t => {
        function e(t, e) {
            const { audio: s, shouldPlay: n } = t.player,
                i = t.player.locks;
            if ((i.includes(e) || i.push(e), t.player.canPlay)) {
                const e = Object.assign({}, t.player, { canPlay: !1 });
                return (
                    n && s.isPlaying && (s.pause(), (e.position = s.getActualPosition())),
                    { player: e }
                );
            }
        }
        function s(t, e) {
            const { audio: s, shouldPlay: n, locks: i } = t.player;
            Array.isArray(e) || (e = [e]);
            for (const t of e) {
                const e = i.findIndex(e => e === t);
                -1 !== e && i.splice(e, 1);
            }
            const o = !i.length;
            if (!t.player.canPlay && o)
                return (
                    n && !s.isPlaying && s.play(),
                    { player: Object.assign({}, t.player, { canPlay: o }) }
                );
        }
        !b &&
            t.on("@init", () => ({
                player: {
                    audio: null,
                    shouldPlay: !1,
                    canPlay: !1,
                    isLoopChanging: !1,
                    isCountin: !1,
                    position: { cursor: 0, loopStart: 0, loopEnd: 0 },
                    type: "focus",
                    pitchShift: 0,
                    speed: 100,
                    tempo: Pe,
                    locks: [],
                    playbackAvailable: !0,
                    webworkerOperational: !0,
                    isAudioFailed: !1,
                    isAudioNetworkFailed: !1,
                },
            })),
            b &&
            t.on("meta/load:processing", (t, { songHasChanged: e }) => {
                if (e) {
                    const e = { cursor: 0, loopEnd: 0, loopStart: 0 },
                        s = t.player.isCountin;
                    return (
                        t.player.audio && t.player.audio.reset(e, 100, 0, s),
                        {
                            player: Object.assign({}, t.player, {
                                shouldPlay: !1,
                                isCountin: s,
                                position: e,
                                type: "focus",
                                pitchShift: 0,
                                speed: 100,
                                isAudioFailed: !1,
                                isAudioNetworkFailed: !1,
                            }),
                        }
                    );
                }
                return t.player.audio.pause(), Ae(t);
            }),
            b &&
            t.on("meta/load:done", (t, { current: e }) => {
                t.player.audio.hasSingleTrack = !e.tracks || 1 === e.tracks.length;
            }),
            t.on("part/load:done", (t, { current: e }) => {
                (t.player.audio.correctTimestampFor50Timeline = t =>
                    (function (t, e) {
                        if (0 === e) return 0;
                        const { timestamps: s } = t,
                            n = s[s.length - 1];
                        if (e <= 0) return qt(e, t.shifts[0] || 0);
                        if (e >= n) return qt(e, t.shifts[s.length - 1] || 0);
                        let i = 0,
                            o = s.length,
                            a = 0,
                            r = 0;
                        for (; o - i > 1;) {
                            a = Math.floor((i + o) / 2);
                            const t = s[a];
                            if (e < t) o = a;
                            else {
                                if (!(e > t)) {
                                    r = a;
                                    break;
                                }
                                i = a;
                            }
                        }
                        return (r = i), qt(e, t.shifts[r] || 0);
                    })(e, t)),
                    (t.player.audio.findBpmAndBeatByTimestamp = t =>
                        (function (t, e) {
                            if (!t)
                                return (
                                    console.error("Broken or empty Part. Count In doest't work."),
                                    { bpm: 0, beat: 0 }
                                );
                            const s = Ut(t, e, "left");
                            return {
                                bpm: t.tempos[0].tempo.bpm,
                                beat: s.measureLayout.measure.signature[0],
                            };
                        })(e, t));
                const s = Vt(e, t.player.position.cursor);
                return { player: Object.assign({}, t.player, { tempo: s }) };
            }),
            t.on("player/open", (t, { url: e }) => (t.player.audio.open(e), Ae(t))),
            t.on("meta/load:processing", t => e(t, "audio")),
            b && t.on("player/open", t => e(t, "audio")),
            b && t.on("player/load", t => e(t, "audio")),
            b && t.on("player/empty", t => e(t, "audio")),
            b && t.on("player/loaded", t => s(t, "audio")),
            t.on("meta/load:processing", t => e(t, "model")),
            b && t.on("part/load:done", t => s(t, "model")),
            t.on("player/load", Ae),
            t.on("player/loaded", Ae),
            t.on("player/error", (t, { isNetworkError: e }) => ({
                player: Object.assign({}, t.player, {
                    isAudioFailed: !0,
                    isAudioNetworkFailed: e,
                }),
            })),
            t.on("player/error", t => s(t, ["playerOpen", "playerLoad"])),
            t.on("player/init", (t, { audio: e, playbackAvailable: s }) => ({
                player: Object.assign({}, t.player, { audio: e, playbackAvailable: s }),
            })),
            t.on("player/moveCursor", (t, e) => {
                t.player.audio.seek(e.cursor, e.loopStart, e.loopEnd);
                const s = t.part.current
                    ? Vt(t.part.current, e.cursor)
                    : t.player.tempo;
                return {
                    player: Object.assign({}, t.player, { position: e, tempo: s }),
                };
            }),
            t.on("player/startPlay", t => Me(t, !0)),
            t.on("player/stopPlay", t => Me(t, !1)),
            t.on("player/togglePlay", Me),
            t.on("player/changeLoop", (t, e) => ({
                player: Object.assign({}, t.player, { isLoopChanging: e }),
            })),
            t.on("player/toggleLoop", t => {
                const e = t.player.audio,
                    s = 0 !== t.player.position.loopEnd,
                    n = e.getCursor(),
                    i = Object.assign({}, t.player, {
                        position: { cursor: n, loopStart: 0, loopEnd: 0 },
                    });
                if (!s && t.part.current) {
                    const e = (function (t, e) {
                        const s = Ut(t, e, "left").measureLayout.measure.beatsLayouts;
                        return {
                            loopStart: s[0].loopLeftTime,
                            loopEnd: s[s.length - 1].firstLoopRightTime,
                        };
                    })(t.part.current, n);
                    (i.position.loopStart = e.loopStart),
                        (i.position.loopEnd = e.loopEnd);
                }
                return (
                    e.seek(i.position.cursor, i.position.loopStart, i.position.loopEnd),
                    { player: i }
                );
            }),
            t.on("player/changeSpeed", (t, { speed: e }) => {
                const { audio: s } = t.player;
                return (
                    s.speed(e), { player: Object.assign({}, t.player, { speed: e }) }
                );
            }),
            t.on("player/changePitch", (t, e) => {
                const { audio: s } = t.player;
                return (
                    s.pitch(e), { player: Object.assign({}, t.player, { pitchShift: e }) }
                );
            }),
            t.on("player/changeType", (t, { type: e }) => {
                const { audio: s } = t.player;
                return s.type(e), { player: Object.assign({}, t.player, { type: e }) };
            }),
            t.on("player/suspend", e),
            t.on("player/resume", s),
            t.on("player/tempoApply", (t, e) => ({
                player: Object.assign({}, t.player, { tempo: e }),
            })),
            t.on("player/toggleCountIn", t => {
                const e = Object.assign({}, t.player, {
                    isCountin: !t.player.isCountin,
                });
                return e.audio.setCountin(e.isCountin), { player: e };
            }),
            t.on("user/signOut", e => {
                !(async function (t) {
                    try {
                        (await import("./playerFree.bbd40593.js")).plusRestoreDefaults(t);
                    } catch (t) {
                        console.error(t);
                    }
                })(t);
            }),
            b &&
            t.on("route/change", (t, { route: n }) =>
                n.isPanel ? e(t, "isPanel") : s(t, "isPanel")
            );
    };
function De(t) {
    return t.layout.y + t.layout.layers.height - 18;
}
const Oe = [4, 10, 16, 21],
    je = u(({ lines: t, part: e }) => {
        const { dispatch: s, annotations: n } = C("annotations"),
            i = e ? (n.parts && n.parts[e.partId]) || [] : null;
        if (!i) return;
        const o = [];
        for (const e of t)
            for (const t of e.measures) {
                const n = t.layout.x + 2,
                    a = De(e),
                    r = t.index + 1,
                    l = void 0 !== i[t.index + 1],
                    c = Oe[r.toString().length - 1],
                    d = !l && c + 67 + 7 > t.layout.width,
                    u = "add-".concat(r),
                    p = l ? r : "".concat(r, " Add").concat(d ? "" : " comment"),
                    m = l ? c : c + (d ? 22 : 67),
                    g = t => {
                        s("annotations/toggle", r);
                    };
                o.push(
                    h("path", {
                        className: l ? "Bajee" : "Baj2uk",
                        "data-annot-num": r,
                        "data-has-annotation": l,
                        "aria-labelledby": u,
                        onClick: g,
                        d: "M"
                            .concat(n + 7, " ")
                            .concat(a + 13, "l-2 3-2-3c-2 0-3-1-3-3v-7c0-2 1-3 3-3h")
                            .concat(m, "c2 0 3 1 3 3v7c0 2-1 3-3 3z"),
                    })
                ),
                    o.push(
                        h("text", {
                            className: "Baj2ey",
                            x: n + 2.4,
                            y: a + 10,
                            id: u,
                            children: p,
                        })
                    );
            }
        return h(d, { children: o });
    });
var Re = k(
    class extends c {
        constructor() {
            super(), (this.state = { isFailed: !1 });
        }
        componentDidCatch(t) {
            this.setState({ isFailed: !0 }),
                this.props.dispatch("cursor/failed", { error: t });
        }
        render() {
            return this.state.isFailed ? null : this.props.children;
        }
    }
);
const ze =
    "M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
    Fe = "c1.25-.25 2.75-2.25 3-2.75h1z",
    He =
        "c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
    qe = "".concat(ze).concat(Fe),
    Ue = "".concat(ze).concat(He).concat(Fe),
    Ve = "".concat(ze).concat(He).concat(He).concat(Fe),
    Ge = "".concat(ze).concat(He).concat(He).concat(He).concat(Fe),
    Xe = "".concat(ze).concat(He).concat(He).concat(He).concat(He).concat(Fe),
    We = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
    Ye = "".concat(We).concat("M0-4l9 8m0-8l-9 8"),
    Ze = "".concat(We, "M9-4L0 4"),
    Ke =
        "M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
    Qe = "".concat(Ke, "M-3-6L12 5");
function Je(t) {
    const e = t.part.strings <= 4 ? 12 : 0,
        s = 0 !== e ? "translate(0, ".concat(-e, ")") : void 0,
        n = [
            h("ellipse", { id: "dot", cx: 10, cy: 17.5 - e, rx: 1.5, ry: 1.5 }),
            h("rect", { id: "rest1", y: 24 - e, x: -6, width: 12, height: 6 }),
            h("rect", { id: "rest2", y: 18 - e, x: -6, width: 12, height: 6 }),
            h("path", {
                id: "rest4",
                transform: s,
                d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
            }),
            h("path", { id: "rest8", transform: s, d: qe }),
            h("path", { id: "rest16", transform: s, d: Ue }),
            h("path", { id: "rest32", transform: s, d: Ve }),
            h("path", { id: "rest64", transform: s, d: Ge }),
            h("path", { id: "rest128", transform: s, d: Xe }),
            h("path", {
                id: "tempo",
                d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
            }),
        ],
        i = !this.props.part.usedDrums;
    return h("defs", {
        children: i
            ? n
            : [
                ...n,
                h("path", { id: "drumCross", d: "M0-4l9 8m0-8l-9 8" }),
                h("path", {
                    id: "drumHat",
                    d: "M-2-7l6.5-4l6.5 4",
                    style: "fill: none",
                }),
                h("path", {
                    id: "drumHatEdge",
                    d: "M-2-7h8l5 -5",
                    style: "fill: none",
                }),
                h("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
                h("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
                h("path", { id: "drumCircleCross", d: Ye, style: "fill: none" }),
                h("path", { id: "drumCircleStroke", d: Ze, style: "fill: none" }),
                h("path", { id: "drum", d: Ke }),
                h("path", { id: "drumStroke", d: Qe }),
            ],
    });
}
const $e = (t, e, s = !1) => {
    if (!b || !document.body)
        switch (t) {
            case "small":
            case "medium":
                return 720;
            default:
                return 850;
        }
    if (s) return e.width - 30;
    const n = Math.max(e.width - 100 - 90, 750);
    return Math.min(n, 880) - 30;
},
    ts = t => {
        if (b) {
            if (window.visualViewport)
                return {
                    width: window.visualViewport.width,
                    height: window.visualViewport.height,
                };
            if (document.documentElement)
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                };
        }
        switch (t) {
            case "small":
                return { width: 414, height: 736 };
            case "medium":
                return { width: 768, height: 1024 };
            case "large":
                return { width: 1070, height: 900 };
            default:
                return { width: 1280, height: 900 };
        }
    };
function es({ text: t, layout: e, xoffset: s }) {
    const n = t.layer;
    if (n) {
        const i = e ? n.x1 - e.absoluteX : n.x1,
            o = -1 * n.y;
        return h("text", {
            className: "D191u2",
            x: i + s,
            y: o,
            dy: "-0.25em",
            children: t.text,
        });
    }
    return null;
}
function ss(t) {
    switch (t) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
function ns({ capo: t, layer: e }) {
    if (!e) return null;
    const { x1: s, y: n } = e;
    return h(d, {
        children: [
            h(
                "path",
                {
                    id: "capo",
                    transform: "translate(".concat(s, ", ").concat(-16 - n, ")"),
                    d: "M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z",
                    className: "ol2ld",
                },
                "path"
            ),
            h(
                "text",
                {
                    className: "ol20f",
                    x: 30 + s,
                    y: -3 - n,
                    children: "Capo ".concat(t).concat(ss(t), " fret"),
                },
                "text"
            ),
        ],
    });
}
function is({ layer: t }) {
    const { x1: e, x2: s, y: n } = t,
        i = s - e,
        o = e,
        a = -1 * n - 2,
        r = [
            h(
                "text",
                { className: "Bmz29t", x: o, y: a, children: "let ring" },
                "let ring"
            ),
        ];
    return (
        i > 46 &&
        (r.push(
            h(
                "line",
                {
                    className: "Bmzmn Bmz8a",
                    x1: 46 + o,
                    y1: -3 + a,
                    x2: i - 2 + o,
                    y2: -3 + a,
                },
                "dotted"
            )
        ),
            r.push(
                h(
                    "line",
                    { className: "Bmzmn", x1: i + o, y1: 1 + a, x2: i + o, y2: -7 + a },
                    "line"
                )
            )),
        h(d, { children: r })
    );
}
function os({ layer: t }) {
    const { x1: e, x2: s, y: n } = t,
        i = e,
        o = -1 * n - 2,
        r = s - e,
        l = [a("text", { className: "Dv2mi", x: i, y: o, key: "pm" }, "P. M.")];
    return (
        r > 35 &&
        (l.push(
            a("line", {
                className: "Dv1nu Dv1vp",
                x1: 35 + i,
                y1: -3 + o,
                x2: r - 2 + i,
                y2: -3 + o,
                key: "dotted",
            })
        ),
            l.push(
                a("line", {
                    className: "Dv1nu",
                    x1: r + i,
                    y1: 1 + o,
                    x2: r + i,
                    y2: -7 + o,
                    key: "line",
                })
            )),
        a(d, null, l)
    );
}
function as({ layer: t, effectValue: e }) {
    const { x1: s, x2: n, y: i } = t,
        o = n - s,
        a = s,
        r = -1 * i - 2;
    let l = "Harm.";
    switch (e) {
        case "artificial":
            l = "A.H.";
            break;
        case "semi":
            l = "S.H.";
            break;
        case "tapped":
            l = "T.H.";
            break;
        case "pinch":
            l = "P.H.";
    }
    const c = [
        h("text", { className: "Cwh1ss", x: a, y: r, children: l }, "Harm."),
    ];
    return (
        o > 40 &&
        (c.push(
            h(
                "line",
                {
                    className: "Cwh2nl Cwhc4",
                    x1: 40 + a,
                    y1: -3 + r,
                    x2: o - 2 + a,
                    y2: -3 + r,
                },
                "dotted"
            )
        ),
            c.push(
                h(
                    "line",
                    { className: "Cwh2nl", x1: o + a, y1: 1 + r, x2: o + a, y2: -7 + r },
                    "line"
                )
            )),
        h(d, { children: c })
    );
}
function rs({ layer: t, wide: e }) {
    const { x1: s, x2: n, y: i } = t,
        o = n - s,
        a = (function (t, e, s, n) {
            let i = "M".concat(e, " ").concat(s + 4, "l3-3.5"),
                o = "v".concat(n ? 2 : 1, ".8l-3 3.5");
            for (let e = 0; e < t; e++)
                (i += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
                    (o += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
            return i + o + "z";
        })(o > 14 ? Math.floor((o - 3) / 5.5) : 2, s, -(i + 6), e);
    return h("path", { className: "io2pf", d: a });
}
class ls extends c {
    constructor(...t) {
        super(...t), ls.prototype.__init.call(this);
    }
    __init() {
        this.renderEffect = (t, e) => {
            const s = {
                layer: t.layer,
                key: ""
                    .concat(t.effect, "-")
                    .concat(this.props.line.index, "-")
                    .concat(e),
                line: this.props.line,
                effectValue: t.effectValue,
            };
            switch (t.effect) {
                case "letRing":
                    return a(is, s);
                case "palmMute":
                    return a(os, s);
                case "harmonic":
                    return a(as, s);
                case "vibrato":
                    return a(rs, Object.assign({}, s, { wide: !1 }));
                case "wideVibrato":
                    return a(rs, Object.assign({}, s, { wide: !0 }));
                default:
                    return null;
            }
        };
    }
    render() {
        return a(d, null, this.props.line.effects.map(this.renderEffect));
    }
}
var cs = {
    harmonic: "Chqw4",
    rest0: "r",
    rest1: "Chq1kc",
    rest2: "Chq13a",
    rest3: "Chqb3",
    voice0: "v",
    voice1: "Chqcb",
    voice2: "Chqvm",
    voice3: "Chq2sx",
    drums0: "Chq1dx",
    drums1: "Chq6l",
    drums2: "Chqs4",
    drums3: "Chq1yg",
    stick0: "Chq2du",
    stick1: "Chq2ba",
    stick2: "Chq23u",
    stick3: "Chq22j",
    voiceDrum0: "Chq2i1",
    voiceDrum1: "Chq2ud",
    voiceDrum2: "Chqrz",
    voiceDrum3: "Chq23d",
    note: "Chq1fz",
    noteDrum: "Chq11j",
};
const ds = 31,
    us = 34,
    hs = 91,
    ps = 46,
    ms = 92,
    gs = 53,
    fs = [
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
        [hs, "Rim\nShot\nSnare"],
        [42, "Closed\nHi Hat"],
        [ms, "Half\nHi Hat"],
        [ps, "Open\nHi Hat"],
        [44, "Foot\nHi Hat"],
        [93, "Ride\nEdge\n"],
        [59, "Ride\nEdge\n"],
        [51, "Ride\nCymbal\n"],
        [gs, "Ride\nBell"],
        [55, "Splash\n"],
        [52, "China\n\n"],
        [49, "High\nCrash\n"],
        [57, "Medium\nCrash\n"],
        [99, "Low\nCowbell"],
        [56, "Cowbell"],
        [102, "High\nCowbell"],
        [27, "High Q"],
        [28, "Slap"],
        [29, "Scratch\nPush"],
        [30, "Scratch\nPull"],
        [ds, "Sticks"],
        [32, "Square\nClick"],
        [33, "Metronome\nClick"],
        [us, "Metronome\nBell"],
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
    ys = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
    vs = [49, 57],
    bs = [56, 102, 99, 54, 76, 77];
function ws(t, e) {
    const s = 12 * (5 - e) + 3;
    return ys.includes(t) ||
        vs.includes(t) ||
        t === ms ||
        t === ps ||
        52 === t ||
        93 === t ||
        59 === t
        ? "M0 4v".concat(s - 4)
        : bs.includes(t)
            ? "M0 3v".concat(s - 3)
            : "M0 0v".concat(s);
}
function xs({ fret: t, className: e, transform: s }) {
    return ys.includes(t)
        ? h("use", { className: e, transform: s, xlinkHref: "#drumCross" })
        : vs.includes(t)
            ? h("use", {
                className: e,
                transform: s,
                xlinkHref: "#drumCross",
                style: "stroke-width: 2",
            })
            : 52 === t
                ? h("g", {
                    className: e,
                    transform: s,
                    children: [
                        h("use", { xlinkHref: "#drumHat" }),
                        h("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
                    ],
                })
                : bs.includes(t)
                    ? h("use", { className: e, transform: s, xlinkHref: "#drumTriangle" })
                    : [gs, hs, us].includes(t)
                        ? h("use", { className: e, transform: s, xlinkHref: "#drumRhomb" })
                        : [ps].includes(t)
                            ? h("use", { className: e, transform: s, xlinkHref: "#drumCircleCross" })
                            : [ms].includes(t)
                                ? h("use", { className: e, transform: s, xlinkHref: "#drumCircleStroke" })
                                : [ds].includes(t)
                                    ? h("use", { className: e, transform: s, xlinkHref: "#drumStroke" })
                                    : h("use", { className: e, transform: s, xlinkHref: "#drum" });
}
function Ss(t = !1) {
    return t ? 7 : 0;
}
function Cs(t) {
    const { note: e, beat: s, part: n, x: i } = this.props;
    if (!e.isVisible) return null;
    const o = "translate(".concat(i, ", 0)");
    if (s.rest) {
        if (s.layout.usedStrings || (0 !== s.voice && s.layout.usedRest))
            return null;
        const t = cs["rest".concat(s.voice)],
            e = h(
                "use",
                { className: t, xlinkHref: "#rest".concat(s.type), transform: o },
                "rest"
            );
        if (s.dotted) {
            const s = h(
                "use",
                { className: t, xlinkHref: "#dot", transform: o },
                "dot"
            );
            return h(d, { children: [e, s] });
        }
        return e;
    }
    if (n.usedDrums && n.isDrumStdOn) {
        const t = cs["drums".concat(s.voice)],
            n = "translate(".concat(i, ", ").concat(0.5 + 12 * e.string, ")"),
            o = e.orientation ? n : n + " translate(-10, 0)";
        return h(d, {
            children: [
                1 !== s.type &&
                h("path", {
                    className: cs["stick".concat(s.voice)],
                    transform: n,
                    d: ws(e.fret, e.string),
                }),
                (e.tie || e.ghost) &&
                h("text", { x: i - 6, y: 12 * e.string + Ss(!1) + 5 }, "("),
                h(xs, { fret: e.fret, className: t, transform: o }),
                (e.tie || e.ghost) &&
                h("text", { x: i + 11, y: 12 * e.string + Ss(!1) + 5 }, ")"),
            ],
        });
    }
    let a = "",
        r = 0;
    const l = n.usedDrums;
    if (l) {
        const t = n.usedDrums.get(e.fret);
        t && ((a = t.name || "*"), (r = t.string || 0));
    } else (a = e.dead ? "X" : e.fret.toString()), (r = e.string);
    const c = "".concat(l ? "voiceDrum" : "voice").concat(s.voice),
        u = h(
            "text",
            {
                className: cs[c],
                x: i,
                y: 12 * r + Ss(!1),
                style: { fill: s.color },
                children: e.tie || e.ghost ? "(".concat(a, ")") : a,
            },
            "text"
        );
    if (e.harmonic) {
        const t = h(
            "path",
            {
                className: cs.harmonic,
                transform: "translate(".concat(i - 17, ", ").concat(12 * r - 3.5, " )"),
                d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
            },
            "harmonic"
        );
        return h(d, { children: [t, u] });
    }
    return u;
}
function ks(t, e, s, n, i) {
    const o = e ? e.margin(0) : 0,
        a = 12 * n - 7,
        r = i - o - (s ? s.margin(0) : 0),
        l = Math.min(Math.floor(r / 3), 10),
        c = Math.max(8, 3),
        d = c - 1;
    return "M"
        .concat(o + t, " ")
        .concat(a, "c")
        .concat(l, "-")
        .concat(c, " ")
        .concat(r - l, "-")
        .concat(c, " ")
        .concat(r, " 0c-")
        .concat(l, "-")
        .concat(d, "-")
        .concat(r - l, "-")
        .concat(d, "-")
        .concat(r, " 0z");
}
function Ns({ x: t, start: e, end: s, slicingMode: n }) {
    if (s) {
        const e = s.firstRef().beat,
            i = s.lastRef().beat,
            o = s.lastRef().note;
        if (i.layout && e.layout) {
            const s = n.getTieSlurPathLength(e, i, !0);
            return h("path", {
                className: "B5ex2",
                d: ks(t - s, null, o, o.string, s),
            });
        }
    } else if (e) {
        const s = e.firstRef().beat,
            i = e.lastRef().beat,
            o = e.firstRef().note,
            a = e.lastRef().note;
        if (i.layout && s.layout) {
            const e = n.areBeatsInSameSlice(s, i),
                r = n.getTieSlurPathLength(s, i);
            return h("path", {
                className: "B5ex2",
                d: ks(t, o, e ? a : null, o.string, r),
            });
        }
    }
    return null;
}
function Ls(t, e, s, n, i) {
    const o = e ? e.margin(0) : 0,
        a = 12 * n + 7,
        r = i - o - (s ? s.margin(0) : 0),
        l = Math.min(Math.floor(r / 3), 10),
        c = Math.max(7, 3),
        d = c - 1;
    return "M"
        .concat(o + t, " ")
        .concat(a, "c")
        .concat(l, " ")
        .concat(c, " ")
        .concat(r - l, " ")
        .concat(c, " ")
        .concat(r, " 0c-")
        .concat(l, " ")
        .concat(d, "-")
        .concat(r - l, " ")
        .concat(d, "-")
        .concat(r, " 0z");
}
function Ts({ x: t, start: e, end: s, slicingMode: n }) {
    if (s) {
        const e = s.firstRef().beat,
            i = s.lastRef().beat,
            o = s.lastRef().note;
        if (i.layout && e.layout) {
            const s = n.getTieSlurPathLength(e, i, !0),
                a = o.string;
            return h("path", { className: "Cug2cl", d: Ls(t - s, null, o, a, s) });
        }
    }
    if (e) {
        const s = e.firstRef().beat,
            i = e.lastRef().beat,
            o = e.firstRef().note,
            a = e.lastRef().note;
        if (i.layout && s.layout) {
            const e = n.areBeatsInSameSlice(s, i),
                r = n.getTieSlurPathLength(s, i),
                l = o.string;
            return h("path", {
                className: "Cug2cl",
                d: Ls(t, o, e ? a : null, l, r),
            });
        }
    }
    return null;
}
function Is(t, e) {
    if ((t.x1 === t.x2 && t.y1 === t.y2) || (e.x1 === e.x2 && e.y1 === e.y2))
        return null;
    const s = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
    if (0 === s) return null;
    const n = ((e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1)) / s,
        i = ((t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1)) / s;
    return n < 0 || n > 1 || i < 0 || i > 1
        ? null
        : { x: t.x1 + n * (t.x2 - t.x1), y: t.y1 + n * (t.y2 - t.y1) };
}
function _s({ x: t, cfx: e, note: s }) {
    const n = e.firstRef().beat,
        i = e.lastRef().beat;
    if (!i.layout || !n.layout) return null;
    const o = e.firstRef().note,
        a = e.lastRef().note,
        r = o.string,
        l = o.fret >= a.fret ? -2 : 2,
        c = Z(n, s.beat),
        d = Z(n, n),
        u = Z(n, i),
        p = (function (t, e, s) {
            const n = { x1: s, y1: 1e3, x2: s, y2: -1e3 },
                i = Is(t, { x1: e, y1: 1e3, x2: e, y2: -1e3 }),
                o = Is(t, n);
            return {
                x1: i ? i.x : t.x1,
                y1: i ? i.y : t.y1,
                x2: o ? o.x : t.x2,
                y2: o ? o.y : t.y2,
            };
        })(
            {
                x1: t + d - c + o.margin(2),
                y1: 12 * r + l,
                x2: t + u - c - a.margin(2),
                y2: 12 * r - l,
            },
            s.beat.layout.minX,
            s.beat.layout.maxX
        );
    return h("line", Object.assign({ className: "I32lk" }, p));
}
function Es({ x: t, y: e, up: s }) {
    return h("path", {
        className: "Ccv14l",
        d: "M "
            .concat(t, ",")
            .concat(e, " l 2,")
            .concat(s ? 5 : -5, " -4,0 2,")
            .concat(s ? -5 : 5),
    });
}
const Ps = ["¼", "½", "¾"];
function As(t) {
    if (100 === t) return "full";
    if (t) {
        let e = "";
        const s = Math.floor(t / 100);
        s && (e += s);
        const n = t % 100;
        return n >= 25 && (e += Ps[Math.floor(n / 25) - 1]), e;
    }
    return "";
}
function Ms({ x: t, y: e, up: s, tone: n }) {
    return h("text", {
        className: s ? "Cqco1" : "Cqc2d5",
        x: t,
        y: s ? e - 4 : e + 11,
        children: As(n),
    });
}
function Bs(t, e) {
    if (!t) return !1;
    const s = t.firstRef().note.bend;
    if (!s) return !1;
    const n = s.points,
        i = n.length;
    return !(i < 1) && n[i - 1].tone === e;
}
function Ds(t, e, s, n, i) {
    return {
        elements: e ? [...t.elements, e] : t.elements,
        prevTone: s,
        prevX: n,
        prevY: i,
    };
}
function Os(t) {
    const e = t.cfx,
        s = t.note,
        n = e.firstRef().note,
        i = n.bend;
    if (!i) return null;
    const { x1: o, x2: a } = t.slicingMode.getBendCoordinates(e, s),
        r = a - o,
        l = o + t.x,
        { elements: c } = i.points.reduce(
            (function (t, e, s) {
                const n = 12 * t.string - 5;
                return function (i, o, a) {
                    const { tone: r, position: l } = o,
                        c = 0 === r ? n : -5 - r / 4;
                    if (0 === a)
                        return t.tie || 0 === r
                            ? Ds(i, null, r, e, 0 !== r ? c : n)
                            : Ds(
                                i,
                                (function (t, e, s, n, i) {
                                    return [
                                        h(
                                            "line",
                                            {
                                                className: "Cni34n",
                                                x1: s,
                                                y1: n + -3,
                                                x2: s,
                                                y2: i,
                                            },
                                            "prebend-".concat(t)
                                        ),
                                        h(Es, { x: s, y: i, up: !0 }, "arrow-".concat(t)),
                                        h(Ms, { tone: e, x: s, y: i, up: !0 }, "y-".concat(t)),
                                    ];
                                })(a, r, e, n, c),
                                r,
                                e,
                                c
                            );
                    const { prevTone: d, prevX: u, prevY: p } = i,
                        m = (s * l) / 60 + e;
                    return Ds(
                        i,
                        r === d
                            ? (function (t, e, s, n, i, o) {
                                return e <= 0
                                    ? null
                                    : [
                                        h(
                                            "line",
                                            {
                                                className: "Cnie8 Cnix5",
                                                x1: s,
                                                y1: n,
                                                x2: i,
                                                y2: o,
                                            },
                                            "hold-".concat(t)
                                        ),
                                    ];
                            })(a, r, u, c, m, c)
                            : (function (t, e, s, n, i, o, a, r, l) {
                                const c = l < a,
                                    d = e.prevNoteOnString,
                                    u = d && !!d.bendEnd,
                                    p = d && (!!d.bendStart || !!d.bendPart || !!d.bendEnd),
                                    m =
                                        d &&
                                        (function (t) {
                                            if (!t) return !1;
                                            const e = t.firstRef().note.bend;
                                            if (!e) return !1;
                                            const s = e.points,
                                                n = s.length;
                                            if (n < 2) return !1;
                                            const i = s[n - 2].tone;
                                            return s[n - 1].tone === i;
                                        })(d.bendEnd) &&
                                        Bs(d.bendEnd, 0),
                                    g = e.tie && u && !m && Bs(d.bendEnd, s) && 0 !== s,
                                    f = i !== o || 0 !== s || (g && p) ? 0 : e.margin(2),
                                    y = [
                                        h(
                                            "path",
                                            {
                                                className: "Cnie8",
                                                d: "M "
                                                    .concat(o + f, ",")
                                                    .concat(a, " Q ")
                                                    .concat(r, ",")
                                                    .concat(a, " ")
                                                    .concat(r, ",")
                                                    .concat(c ? l + 4 : l - 4),
                                            },
                                            "bend-".concat(t)
                                        ),
                                        h(Es, { x: r, y: l, up: c }, "arrow-".concat(t)),
                                    ];
                                return (
                                    0 !== n &&
                                    y.push(
                                        h(Ms, { tone: n, x: r, y: l, up: c }, "y-".concat(t))
                                    ),
                                    y
                                );
                            })(a, t, d, r, e, u, p, m, c),
                        r,
                        m,
                        c
                    );
                };
            })(n, l, r),
            { elements: [], prevTone: 0, prevX: 0, prevY: 0 }
        );
    return h(d, { children: c });
}
function js({ lyrics: t, x: e }) {
    const s = t.layer;
    if (s) {
        const n = G(t) + e + s.diff;
        return h("text", {
            className: "l",
            x: n,
            y: s.y + s.height,
            children: t.text,
        });
    }
    return null;
}
function Rs({ note: t, x: e, type: s }) {
    const n = t.string,
        i = "left" === s ? -1 : 1;
    let o = "upwards" === t.slide ? 1 : -1;
    "left" === s && (o = "above" === t.leftSlide ? 1 : -1);
    const a = t.margin(2);
    return h("line", {
        className: "I32lk",
        x1: i * a + e,
        y1: 12 * n + 2 * o,
        x2: i * (a + 15) + e,
        y2: 12 * n - 2 * o,
    });
}
function zs({ up: t, min: e, max: s, xoffset: n }) {
    const i = 12 * (s - e + 1),
        o = t ? 4 : i - 4,
        a = t ? 0 : i,
        r = o,
        l = o,
        c = 12 * (e - 0.5),
        u = n - 15;
    return h(d, {
        children: [
            h(
                "line",
                { className: "ex1kp", x1: 4 + u, y1: c, x2: 4 + u, y2: 12 * (s + 0.5) },
                "line"
            ),
            h(
                "polygon",
                {
                    className: "ex105",
                    points: ""
                        .concat(4 + u, ",")
                        .concat(a + c, " ")
                        .concat(0 + u, ",")
                        .concat(r + c, " ")
                        .concat(8 + u, ",")
                        .concat(l + c, " ")
                        .concat(4 + u, ",")
                        .concat(a + c),
                },
                "polygon"
            ),
        ],
    });
}
function Fs(t) {
    const e = [],
        { layout: s, part: n, measure: i, slicingMode: o } = t,
        a = this.props.x + s.x;
    for (const t of s.beats)
        if (t.lyrics)
            for (const s of t.lyrics)
                e.push(h(js, { lyrics: s, x: a }, "lyrics".concat(t.index)));
        else {
            t.text &&
                e.push(
                    h(es, { text: t.text, layout: s, xoffset: a }, "text".concat(t.index))
                );
            const r = t.tapping;
            r &&
                r.layer &&
                e.push(
                    h(
                        "text",
                        {
                            className: "ex3",
                            y: -1 * r.layer.y,
                            x: Math.max(-1 * Math.floor(r.width / 2) + a, -15),
                            dy: "-0.25em",
                            children: r.text,
                        },
                        "tap".concat(t.index)
                    )
                );
            const l = t.chord;
            l &&
                l.layer &&
                e.push(
                    h(
                        "text",
                        {
                            className: "exh6",
                            y: -1 * l.layer.y,
                            x: Math.max(-1 * Math.floor(l.width / 2) + a, -15),
                            dy: "-0.25em",
                            children: l.text,
                        },
                        "chord".concat(t.index)
                    )
                );
            let c = Number.MAX_VALUE,
                d = 0;
            if (!i.rest) {
                if (n.usedDrums) {
                    const e = t.notes.map(t => ({
                        string: Math.floor(2 * t.string),
                        note: t,
                    }));
                    e.sort((t, e) => t.string - e.string);
                    let s = null;
                    for (const t of e)
                        (t.note.orientation = !(
                            s &&
                            Math.abs(t.string - s.string) <= 1 &&
                            s.note.orientation
                        )),
                            (s = t);
                }
                t.hat &&
                    n.isDrumStdOn &&
                    e.push(
                        h(
                            "path",
                            {
                                className: "exkb",
                                d: "M".concat(a - 2).concat(-t.hat.layer.y, "h8l5 -5"),
                            },
                            "hat".concat(t.index)
                        )
                    ),
                    t.staccato &&
                    t.staccato.layer.visible &&
                    e.push(
                        h(
                            "circle",
                            {
                                className: t.staccato.layer.voice ? "ex22w" : "ex1uy",
                                cx: a,
                                cy: -t.staccato.layer.y - 5,
                                r: 2,
                            },
                            "st".concat(t.index)
                        )
                    ),
                    t.accentuated &&
                    t.accentuated.layer.visible &&
                    e.push(
                        h(
                            "path",
                            {
                                className: t.accentuated.layer.voice
                                    ? "ex1x5 ex31z"
                                    : "ex1x5",
                                d: "m"
                                    .concat(a - 5)
                                    .concat(-t.accentuated.layer.y - 2, "l9-3l-9-3"),
                            },
                            "acc".concat(t.index)
                        )
                    ),
                    t.heavyAccentuated &&
                    t.heavyAccentuated.layer.visible &&
                    e.push(
                        h(
                            "path",
                            {
                                className: t.heavyAccentuated.layer.voice
                                    ? "ex1x5 ex31z"
                                    : "ex1x5",
                                d: "m"
                                    .concat(a - 4)
                                    .concat(
                                        -t.heavyAccentuated.layer.y - 2,
                                        "l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7"
                                    ),
                            },
                            "hacc".concat(t.index)
                        )
                    );
                for (const s of t.notes) {
                    (!t.upStroke && !t.downStroke) ||
                        s.tie ||
                        ((c = Math.min(c, s.string)), (d = Math.max(d, s.string))),
                        e.push(
                            h(
                                Cs,
                                { note: s, beat: t, part: n, x: a },
                                "note".concat(t.index, "-").concat(s.index)
                            )
                        ),
                        s.tieStart &&
                        e.push(
                            h(
                                Ts,
                                { start: s.tieStart, slicingMode: o, x: a },
                                "tie".concat(t.index, "-").concat(s.index)
                            )
                        ),
                        s.tieEnd &&
                        K(s.tieEnd) &&
                        e.push(
                            h(
                                Ts,
                                { end: s.tieEnd, slicingMode: o, x: a },
                                "tieEnd".concat(t.index, "-").concat(s.index)
                            )
                        ),
                        s.slurStart &&
                        e.push(
                            h(
                                Ns,
                                { start: s.slurStart, slicingMode: o, x: a },
                                "slur".concat(t.index, "-").concat(s.index)
                            )
                        ),
                        s.leftSlide &&
                        e.push(
                            h(Rs, {
                                note: s,
                                type: "left",
                                key: "slideShortLeft".concat(t.index, "-").concat(s.index),
                                x: a,
                            })
                        ),
                        s.rightSlide &&
                        "shift" !== s.rightSlide &&
                        "legato" !== s.rightSlide &&
                        e.push(
                            h(Rs, {
                                note: s,
                                type: "right",
                                key: "slideShortRight".concat(t.index, "-").concat(s.index),
                                x: a,
                            })
                        ),
                        s.slideStart &&
                        e.push(
                            h(
                                _s,
                                { note: s, cfx: s.slideStart, x: a },
                                "slide".concat(t.index, "-").concat(s.index)
                            )
                        ),
                        s.slideEnd &&
                        K(s.slideEnd) &&
                        e.push(
                            h(
                                _s,
                                { note: s, cfx: s.slideEnd, x: a },
                                "slideEnd".concat(t.index, "-").concat(s.index)
                            )
                        );
                    const i = o.bendsForNote(s);
                    for (let n = 0; n < i.length; n++) {
                        const r = i[n];
                        o.shouldDrawBendOnNote(r, s) &&
                            e.push(
                                h(
                                    Os,
                                    { cfx: r, note: s, slicingMode: o, x: a },
                                    "bend".concat(t.index, "-").concat(s.index, "-").concat(n)
                                )
                            );
                    }
                }
                n.usedDrums ||
                    ((t.upStroke || t.downStroke) &&
                        c < d &&
                        e.push(
                            h(
                                zs,
                                { up: !!t.upStroke, min: c, max: d, xoffset: a },
                                "stroke".concat(t.index)
                            )
                        ));
            }
        }
    return h(d, { children: e });
}
const Hs =
    "M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
    qs = "M.8 0h15v3.5H.8z";
function Us({ tripletFeel: { feel: t, layer: e }, x: s }) {
    if (!e) return null;
    const { y: n } = e,
        i = "off" === t,
        o = "16th" === t,
        r = "8th" === t;
    return a(
        "g",
        { transform: "translate(".concat(s, ",-").concat(n + 42, ")") },
        a("path", { d: Hs, transform: "translate(10,10)", className: "Bc72ex" }),
        a("path", { d: Hs, transform: "translate(25,10)", className: "Bc72ex" }),
        a("path", { d: qs, transform: "translate(18,10)", className: "Bc72ex" }),
        o &&
        a("path", { d: qs, transform: "translate(18,15)", className: "Bc72ex" }),
        a("path", { d: Hs, transform: "translate(48,10)", className: "Bc72ex" }),
        a("path", { d: Hs, transform: "translate(63,10)", className: "Bc72ex" }),
        (i || o) &&
        a("path", { d: qs, transform: "translate(56,10)", className: "Bc72ex" }),
        o &&
        a("path", {
            d: "M8.8 0h7v3.5h-7z",
            transform: "translate(56,15)",
            className: "Bc72ex",
        }),
        r &&
        a("path", {
            d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
            transform: "translate(63,10)",
            className: "Bc72ex",
        }),
        !i && a("text", { className: "Bc7xk", x: 64, y: 0 }, 3),
        !i && a("path", { className: "Bc733l", d: "M51 7V4h9m7 0h9v3" }),
        a("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: "Bc72ex" })
    );
}
var Vs = {
    voice0: "h",
    voice1: "Bup2te",
    voice2: "Bupwd",
    voice3: "Bup1a0",
    "voice0-tremolo": "Bup2oc",
    "voice1-tremolo": "Bup138",
    "voice2-tremolo": "Bup2eq",
    "voice3-tremolo": "Bup1c7",
};
function Gs(t) {
    const { voice: e, x: s, y: n, tremoloOffset: i } = t;
    if (e.hasSameRhythm) return null;
    const o = e.beats,
        a = 18 + i,
        r = a / 2;
    let l = "",
        c = "",
        u = 0;
    const p = [],
        m = new Array(4);
    let g = !1;
    for (const t of o) {
        const e = t.layout.x;
        1 !== t.type &&
            (l +=
                2 === t.type
                    ? "M"
                        .concat(s + e, ",")
                        .concat(n + r + 2, "v")
                        .concat(r)
                    : "M"
                        .concat(s + e, ",")
                        .concat(n + 2, "v")
                        .concat(a));
        let i = 0,
            d = 8;
        if ((t.beamStart ? (g = !0) : t.beamStop && (g = !1), g)) {
            if (t.index === o.length - 1)
                throw new Error("Something wrong with beaming model");
            const s = o[t.index + 1];
            let n = Math.min(t.type, s.type);
            for (t.tupletStop && (n = Math.min(n, 8)); d <= n;) {
                let n = m[i];
                n
                    ? (n.length += s.layout.x - t.layout.x)
                    : ((n = { x: e, length: s.layout.x - t.layout.x }), (m[i] = n)),
                    i++,
                    (d *= 2);
            }
        }
        const h = i,
            p = i < u || t.tupletStop || t.beamStop;
        for (; i < u; i++, d *= 2) {
            const t = m[i];
            (m[i] = void 0),
                t &&
                (l += "M"
                    .concat(s + t.x, ",")
                    .concat(n + a - 5 * i, "v2h")
                    .concat(t.length, "v-2z"));
        }
        for (; d <= t.type; i++, d *= 2)
            l += "M"
                .concat(s + e, ",")
                .concat(n + a - 5 * i, "v2h")
                .concat(p ? "-7" : "7", "v-2z");
        if (
            (t.dotted &&
                1 !== t.type &&
                (l += "M".concat(s + e + 4, ",").concat(n + a - 5 * i, "v2h2v-2z")),
                t.tremolo)
        )
            for (let i = 0; i < t.tremolo.type; i++)
                c += "M".concat(s + e - 5, ",").concat(n + 6 + 3 * i, "l10-3z");
        u = h;
    }
    if (l.length) {
        const t = "voice".concat(e.index);
        p.push(h("path", { className: Vs[t], d: l }));
    }
    if (c.length) {
        const t = "voice".concat(e.index, "-tremolo");
        p.push(h("path", { className: Vs[t], d: c }));
    }
    return p.length ? h(d, { children: p }) : null;
}
var Xs = {
    path: "Fy3m",
    text: "Fy2jt",
    voice0: "Fy34q",
    voice1: "Fy6w",
    voice2: "Fy1xe",
    voice3: "Fy3v",
};
function Ws(t = !1) {
    return t ? 3 : 0;
}
function Ys({
    tuplet: t,
    voice: e,
    start: s,
    stop: n,
    x: i,
    y: o,
    tremoloOffset: a,
}) {
    const r = s.layout.x + i,
        l = n.layout.x - s.layout.x,
        c = Math.round(l / 2),
        d = t > 9 ? 8 : 5,
        u = "M 0,0 L 0,6 "
            .concat(c - d, ",6 M ")
            .concat(c + d, ",6 L ")
            .concat(l, ",6 ")
            .concat(l, ",0");
    o += 23 + a;
    const p = "voice".concat(e.index);
    return h("g", {
        className: Xs[p],
        transform: "translate(".concat(r, ",").concat(o, ")"),
        children: [
            h("text", { className: Xs.text, x: c, y: 9 + Ws(!1), children: t }),
            h("path", { className: Xs.path, d: u }),
        ],
    });
}
function Zs(t) {
    const { layer: e, alternateEnding: s } = t.alternateEnding;
    if (e) {
        const { x1: n, x2: i, y: o } = e,
            r = i - n,
            l = t.x;
        return a(
            "g",
            { transform: "translate(".concat(l, ",").concat(-1 * o - 14, ")") },
            a("text", { className: "Bee2b8", x: 4, y: "14" }, s.join(",")),
            a("path", { className: "Bee1no", d: "M 1,14 L 1,0 ".concat(r - 6, ",0") })
        );
    }
    return null;
}
function Ks({ marker: t, x: e }) {
    const s = t.layer;
    return s
        ? h("text", {
            className: "B6i262",
            x: e,
            y: -1 * s.y,
            dy: "-0.25em",
            children: t.text,
        })
        : null;
}
function Qs({ line: t, x: e }) {
    const s = 12 * (t.strings - 1);
    return a(
        "g",
        { className: "Rep", transform: "translate(".concat(e, ",0)") },
        a("rect", { className: "B0i2q7", width: 4, height: s }),
        a("path", { className: "B0imb", d: "M 8,0 L 8,".concat(s) }),
        a("ellipse", {
            className: "B0i1ux",
            cx: 13,
            cy: Math.floor(s / 3),
            rx: 2,
            ry: 2,
        }),
        a("ellipse", {
            className: "B0i1ux",
            cx: 13,
            cy: Math.floor((2 * s) / 3),
            rx: 2,
            ry: 2,
        })
    );
}
function Js({ line: t, measure: e, x: s }) {
    const n = 12 * (t.strings - 1);
    return a(
        "g",
        { transform: "translate(".concat(e.layout.width - 18 + s, ",0)") },
        e.repeat > 2 &&
        a("text", { className: "B0ija", x: 2.5, y: -2 }, e.repeat + "x"),
        a("rect", { className: "B0i2q7", x: 14, width: 4, height: n }),
        a("path", { className: "B0imb", d: "M 11,0 L 11,".concat(n) }),
        a("ellipse", {
            className: "B0i1ux",
            cx: 6,
            cy: Math.floor(n / 3),
            rx: 2,
            ry: 2,
        }),
        a("ellipse", {
            className: "B0i1ux",
            cx: 6,
            cy: Math.floor((2 * n) / 3),
            rx: 2,
            ry: 2,
        })
    );
}
function $s(t = !1) {
    return t ? 7 : 0;
}
function tn(t) {
    const { measure: e, line: s, part: n, slicingMode: i } = this.props,
        o = e.layout.x,
        a = [
            h(
                "text",
                { className: "m", x: 3 + o, y: -7.2, children: e.index + 1 },
                "number"
            ),
        ];
    if (0 === e.width) return;
    e.repeatStart && a.push(h(Qs, { line: s, x: o }, "repeatStart"));
    const r = e.tripletFeel;
    r && a.push(h(Us, { tripletFeel: r, x: o }, "tripletFeel")),
        e.repeat && a.push(h(Js, { line: s, measure: e, x: o }, "repeat")),
        e.alternateEnding &&
        a.push(
            h(Zs, { alternateEnding: e.alternateEnding, x: o }, "alternateEnding")
        ),
        e.marker && a.push(h(Ks, { marker: e.marker, x: o }, "marker"));
    for (const t of e.tempoLayouts.values()) {
        const { tempo: e, layer: s } = t;
        e &&
            s &&
            a.push(
                h(
                    "g",
                    {
                        className: "vssu",
                        transform: "translate(".concat(s.x1, ",").concat(-1 * s.y, ")"),
                        children: [
                            h("use", { xlinkHref: "#tempo" }),
                            h("text", {
                                className: "vs1qc",
                                y: -3,
                                x: 8,
                                children: "=".concat(e.bpm),
                            }),
                        ],
                    },
                    "tempo"
                )
            );
    }
    let l = 0;
    for (const t of e.beatsLayoutsByTime.values())
        a.push(
            h(
                Fs,
                { layout: t, key: l, part: n, measure: e, slicingMode: i, x: o },
                "beat".concat(l)
            )
        ),
            l++;
    if (e.hasSignature) {
        const t = Math.floor((n.strings / 2) * 12);
        a.push(
            h(
                "text",
                {
                    className: "vscf",
                    x: 35 + o,
                    y: t + -8 + $s(!1),
                    children: e.signature[0],
                },
                "t1"
            )
        ),
            a.push(
                h(
                    "text",
                    {
                        className: "vscf",
                        x: 35 + o,
                        y: t + 21 + $s(!1),
                        children: e.signature[1],
                    },
                    "t2"
                )
            );
    }
    if (e.rhythmLines) {
        let t = 0,
            n = 0;
        for (const i of e.voices)
            if (!i.hasSameRhythm && !i.rest) {
                const e = i.beats,
                    r = e.some(t => !!t.tremolo),
                    l = e.some(t => t.type > 8),
                    c = r && l ? 12 : 0;
                (n = 35 * i.index + c * i.index + 12 * s.strings),
                    a.push(
                        h(
                            Gs,
                            { voice: i, x: o, y: n, tremoloOffset: c },
                            "rhythm".concat(i.index)
                        )
                    );
                let d = 0,
                    u = null;
                for (const e of i.beats)
                    e &&
                        (e.tupletStart && ((d = e.tuplet), (u = e)),
                            d &&
                            u &&
                            e.tupletStop &&
                            (a.push(
                                h(
                                    Ys,
                                    {
                                        tuplet: d,
                                        start: u,
                                        stop: e,
                                        voice: i,
                                        x: o,
                                        y: n,
                                        tremoloOffset: c,
                                    },
                                    "tuplet".concat(t)
                                )
                            ),
                                (d = 0),
                                t++));
            }
    }
    return h(d, { children: a });
}
const en = (t, e) => t + "H".concat(e.x, "m").concat(e.w, ",0");
function sn({ line: t, hasTuning: e, slicingMode: s, part: n }) {
    const i = t.spaces,
        o = 12 * (t.strings - 1);
    let a = "";
    const r = t.measures;
    for (let t = e ? 1 : 0; t < r.length; t++) {
        const e = r[t];
        a += "M".concat(e.layout.x, ",0v").concat(o);
    }
    const l = r[0].layout.x,
        c = s.stringLineMaxX(t);
    if (n.usedDrums && n.isDrumStdOn)
        for (let e = 0; e < t.strings; e++)
            a += "M"
                .concat(l, ",")
                .concat(12 * e, " H")
                .concat(c);
    else
        for (let e = 0; e < t.strings; e++)
            a +=
                "M".concat(l, ",").concat(12 * e) + i[e].reduce(en, "") + "H".concat(c);
    const d = s.finalVerticalSeparatorPosition(t);
    return (
        d && (a += "H".concat(d)),
        (a += "V0"),
        h("path", { className: "Eh1jo", d: a })
    );
}
const nn = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    on = [43, 38, 33, 28],
    an = [43, 38, 33, 26],
    rn = [43, 38, 33, 28, 23],
    ln = [48, 43, 38, 33, 28, 23],
    cn = [64, 59, 55, 50, 45, 40],
    dn = [64, 59, 55, 50, 45, 38],
    un = [64, 59, 55, 50, 45, 40, 35],
    hn = {
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
function pn(t, e = !0) {
    return t.map(t => {
        const s = Math.floor(t / 12) - 1;
        return nn[t % 12] + (e ? s : "");
    });
}
function mn(t, e) {
    const s = (function (t, e) {
        if (q(t)) {
            if (6 === e.length) return e[3] === e[5] + 12 ? dn : cn;
            if (7 === e.length) return un;
        } else if (U(t)) {
            if (4 === e.length) return e[1] === e[3] + 12 ? an : on;
            if (5 === e.length) return rn;
            if (6 === e.length) return ln;
        }
        return e;
    })(t, e);
    if (s) {
        const t = s[0] - e[0];
        for (let n = 0; n < s.length; n++) if (e[n] + t !== s[n]) return;
        return { tuningName: gn(s), pitch: t, standard: s };
    }
}
function gn(t) {
    const e = pn(t).reverse().join(" "),
        s = pn(t, !1).reverse().join(" ");
    if (t.length in hn && e in hn[t.length]) return hn[t.length][e];
    const n = s.split(" ");
    return n.map((t, e) => (e === n.length - 1 ? t.toLowerCase() : t)).join(" ");
}
function fn({ tuning: t }) {
    return t
        ? a(
            d,
            null,
            pn(t, !1).map((t, e) =>
                a(
                    "text",
                    { x: 0, y: 12 * e, key: e, className: "C8nsu" },
                    ((t, e) => (0 === e ? t.toLowerCase() : t))(t, e)
                )
            )
        )
        : null;
}
function yn(t) {
    const {
        inlineDefs: e,
        line: n,
        noPadding: i,
        part: a,
        tuning: r,
        slicingMode: l,
        lazy: c,
    } = t,
        d = l.expectedSliceWidth(n.width) + (i ? 0 : 30),
        u = "http://www.w3.org/2000/svg",
        m = n.layout.height,
        g = ""
            .concat(i ? 0 : -15, " -")
            .concat(n.layout.layers.height, " ")
            .concat(d, " ")
            .concat(m);
    {
        const [t, e] = s(n.index < 5),
            i = p();
        if (
            (o(() => {
                if (!t && c)
                    try {
                        const t = new IntersectionObserver(
                            t => {
                                t[0].isIntersecting && e(!0);
                            },
                            { rootMargin: "0px 0px 500px 0px" }
                        );
                        return i.current && t.observe(i.current), () => t.disconnect();
                    } catch (t) {
                        requestAnimationFrame(() => e(!0));
                    }
            }, [t, c]),
                !t && c)
        )
            return h("svg", {
                xmlns: u,
                version: "1.1",
                ref: i,
                width: d,
                viewBox: g,
                className: "n",
            });
    }
    const f = n.capo,
        y = !!f && !0,
        v = !!r;
    return h("svg", {
        xmlns: u,
        version: "1.1",
        width: d,
        viewBox: g,
        className: "n",
        children: [
            e && h(Je, { part: a }),
            v && h(fn, { tuning: r }),
            y && h(ns, f),
            h(sn, { line: n, hasTuning: v, slicingMode: l, part: a }),
            ...n.hangingText.map((t, e) =>
                h(es, { text: t, layout: void 0, xoffset: 0 }, e.toString())
            ),
            h(ls, { line: n }),
            ...n.measures.map(t =>
                h(
                    tn,
                    { measure: t, line: n, part: a, slicingMode: l },
                    t.index.toString()
                )
            ),
        ],
    });
}
function vn({ lines: t, part: e, tuning: s, slicingMode: n, lazy: i }) {
    return h(d, {
        children: t.map(t =>
            h(
                yn,
                {
                    line: t,
                    part: e,
                    tuning: 0 === t.index && s,
                    slicingMode: n,
                    lazy: i,
                },
                t.index.toString()
            )
        ),
    });
}
var bn = u(t =>
    h(d, {
        children: [
            h("svg", {
                width: 0,
                viewBox: "0 0 0 0",
                className: "Cxrdx",
                children: h(Je, { part: t.part }),
            }),
            h(vn, t),
        ],
    })
);
function wn({
    reference: t,
    firstLineLayoutHeigth: e,
    handlePitchshift: s,
    isActive: n,
    isPitchshiftToStandard: i,
}) {
    const {
        player: { pitchShift: o },
    } = C("player"),
        r = e - 47;
    let l = "Shift pitch (R)";
    0 !== o
        ? (l = "Pitch shifted (R)")
        : i && (l = "Pitch can be shifted to match standard tuning (R)");
    const c = 5 * (Math.abs(o).toString(10).length - 1) + (o > 0 ? 2 : 0);
    return a(
        "g",
        {
            vectorEffect: "non-scaling-stroke",
            transform: "translate(-8 ".concat(r, ")"),
            className: n ? "Bls16p Bls1wi" : "Bls16p",
            onClick: s,
            "data-tab-button": "tuning-button",
        },
        a("title", null, l),
        a("rect", {
            x: 0,
            y: 3,
            rx: 4,
            ry: 4,
            width: 25,
            height: 23,
            filter: "url(#svg_shadow)",
            className: "Bls1ap",
            ref: t,
        }),
        a("path", {
            d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
            "stroke-width": "1.3",
        }),
        a("path", {
            d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
            "stroke-width": "1.6",
        }),
        (i || 0 !== o) &&
        a("rect", {
            x: 18,
            y: 0,
            width: 13 + c,
            height: 13,
            rx: 6.5,
            ry: 6.5,
            className: "Bls178",
        }),
        0 !== o &&
        a("text", { x: 20, y: 9.5 }, "".concat(o > 0 ? "+" : "").concat(o))
    );
}
function xn({ layer: t, hideLayer: e }) {
    return (
        t &&
        "markup" !== t &&
        a("div", { className: "Cg820h", onClick: e, id: "hide-layer-overlay" })
    );
}
function Sn({ up: t }) {
    return a(
        "svg",
        { width: "44", height: "46", role: "img" },
        a("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
        a("path", {
            d: t ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
        })
    );
}
const Cn = t =>
    t.current &&
    (q(t.current.instrumentId) || U(t.current.instrumentId)) &&
    t.current.tuning;
class kn extends c {
    constructor(t) {
        super(t),
            kn.prototype.__init.call(this),
            kn.prototype.__init2.call(this),
            kn.prototype.__init3.call(this),
            kn.prototype.__init4.call(this),
            kn.prototype.__init5.call(this),
            kn.prototype.__init6.call(this),
            (this.keyMap = {
                enter: this.hidePopup,
                left: this.tuneDown,
                down: this.tuneDown,
                up: this.tuneUp,
                right: this.tuneUp,
            });
    }
    __init() {
        this.hidePopup = t => {
            t.preventDefault(), this.props.dispatch("layer/hide");
        };
    }
    componentDidMount() {
        window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
    }
    componentWillUnmount() {
        window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
        const { player: t, ensureLineVisibility: e, part: s } = this.props;
        if (e && s.current) {
            const n = Ut(s.current, t.audio.getCursor(), "left");
            n && e(null, n.measureLayout.lineLayout, !1);
        }
    }
    __init2() {
        this.tuneUp = t => {
            t.preventDefault();
            const { pitchShift: e } = this.props.player;
            e < 12 && Te(this.props.store, e + 1);
        };
    }
    __init3() {
        this.tuneDown = t => {
            t.preventDefault();
            const { pitchShift: e } = this.props.player;
            e > -12 && Te(this.props.store, e - 1);
        };
    }
    __init4() {
        this.reset = t => {
            t.preventDefault(), Te(this.props.store, 0);
        };
    }
    __init5() {
        this.renderCurrentTuning = () => {
            if (Cn(this.props.part)) {
                const t = this.props.part.current.tuning.map(
                    t => t + this.props.player.pitchShift
                );
                return a(
                    "div",
                    { className: "D0l11f D0lsm", "aria-label": "Current tuning" },
                    a("div", { className: "D0l124" }, "CURRENT TUNING"),
                    a("div", { id: "tuning", className: "D0l3u" }, gn(t))
                );
            }
            return null;
        };
    }
    __init6() {
        this.renderQuickButton = () => {
            if (0 !== this.props.player.pitchShift)
                return a(
                    "button",
                    {
                        className: "D0lvz D0l1rc",
                        onClick: this.reset,
                        role: "button",
                        "aria-label": "Restore original tuning",
                    },
                    "Restore original tuning"
                );
            if (Cn(this.props.part)) {
                const t = mn(
                    this.props.part.current.instrumentId,
                    this.props.part.current.tuning
                );
                if (t && 0 !== t.pitch) {
                    let e = t.tuningName;
                    return (
                        "STANDARD TUNING" === e && (e = "Standard tuning"),
                        a(
                            "button",
                            {
                                className: "D0lvz D0l1rc",
                                role: "button",
                                "aria-label": "Quick shift pitch",
                                onClick: () => {
                                    Te(this.props.store, t.pitch);
                                },
                            },
                            "Convert to ".concat(e)
                        )
                    );
                }
            }
            return null;
        };
    }
    render() {
        const t = this.renderQuickButton(),
            e = this.renderCurrentTuning(),
            { pitchShift: s } = this.props.player,
            { tab: n, tuningButton: i, mobile: o } = this.props;
        let r = 0,
            l = 0,
            c = "D0l1ig";
        if (o) (r = -71), (l = -235), (c = "D0l1ig D0l16m");
        else if (((r = this.props.firstLineLayoutHeigth - 58), (l = 55), n && i)) {
            const t = n.getBoundingClientRect(),
                e = i.getBoundingClientRect();
            (l = e.left - t.left + e.width + 21),
                (r = e.top + e.height - t.top - 77.5);
        }
        return a(
            "div",
            {
                className: c,
                title: "You can use arrow keys",
                role: "dialog",
                "aria-label": "Shift Pitch",
                style: { top: "".concat(r, "px"), left: "".concat(l, "px") },
            },
            e || a("div", { className: "D0l1z3" }),
            a(
                "div",
                { className: "D0l11f D0l29v" },
                a(
                    "button",
                    {
                        className: "D0lvz D0lvp",
                        onClick: this.tuneDown,
                        disabled: s <= -12,
                        "aria-label": "Step down",
                    },
                    a(Sn, { up: !1 })
                ),
                a(
                    "span",
                    { className: "D0l1by", "aria-label": "Current pitch" },
                    (s > 0 ? "+" : "") + s
                ),
                a(
                    "button",
                    {
                        className: "D0lvz D0lvp",
                        onClick: this.tuneUp,
                        disabled: s >= 12,
                        "aria-label": "Step up",
                    },
                    a(Sn, { up: !0 })
                )
            ),
            t || a("div", { className: "D0l1xo" })
        );
    }
}
var Nn = k(kn, "player", "part"),
    Ln = {
        wrap: "Cmfli",
        shadow: "Cmf35k",
        body: "Cmfed",
        loading: "Cmf8e",
        icon: "Cmf1mc",
    };
function Tn(t) {
    return Math.round(1e4 * t) / 1e4;
}
function In({ width: t, height: e }) {
    const s = 1 * t,
        n = (function (t, e, s, n, i, o, a) {
            const r = 0.95 * s,
                l = 0.45 * s,
                c = 0.6 * s,
                d = 0.3 * s,
                u = Math.atan2(r, s / 2),
                h = Math.sin(u),
                p = Math.cos(u),
                m = c * h,
                g = c * p,
                f = d * h,
                y = d * p;
            return "M "
                .concat(Tn(t + g), ",")
                .concat(Tn(e + m), "\n     Q ")
                .concat(Tn(t), ",")
                .concat(Tn(e), " ")
                .concat(Tn(t + l), ",")
                .concat(Tn(e), "\n     L ")
                .concat(Tn(t + s - l), ",")
                .concat(Tn(e), "\n     Q ")
                .concat(Tn(t + s), ",")
                .concat(Tn(e), " ")
                .concat(Tn(t + s - g), ",")
                .concat(Tn(e + m), "\n     L ")
                .concat(Tn(t + s / 2 + y), ",")
                .concat(Tn(e + r - f), "\n     Q ")
                .concat(Tn(t + s / 2), ",")
                .concat(Tn(e + r), " ")
                .concat(Tn(t + s / 2 - y), ",")
                .concat(Tn(e + r - f), "\n     z");
        })((t - s) / 2, 0.33 * t, s),
        i = (function (t, e, s) {
            const n = t / 2,
                i = Tn(1.3 * n),
                o = Tn(n);
            return "M 0,"
                .concat(i, "\n     Q 0,0 ")
                .concat(o, ",0 q ")
                .concat(o, ",0 ")
                .concat(o, ",")
                .concat(i, "\n     v ")
                .concat(Tn(e - 2 * i), "\n     q 0,")
                .concat(i, " -")
                .concat(o, ",")
                .concat(i, " q -")
                .concat(o, ",0 -")
                .concat(o, ",-")
                .concat(i, "\n     v -")
                .concat(Tn(e - 2 * i));
        })(t, e);
    return a(
        d,
        null,
        a("path", {
            className: Ln.shadow,
            filter: "url(#CursorShadow)",
            d: i,
            key: "shadow",
        }),
        a("path", { className: Ln.body, d: i, key: "body" }),
        a("path", { className: Ln.icon, d: n, key: "path" })
    );
}
function _n(t, e) {
    const s = t.measureLayout,
        n = e.measureLayout;
    return s !== n
        ? s.lineLayout !== n.lineLayout || s.measure.index + 1 !== n.measure.index
        : t.x >= e.x;
}
const En = t => t.player.shouldPlay && t.player.canPlay,
    Pn = (t, e, s, n) => {
        let i = s.stringY;
        if (1 !== t) {
            i = 0;
            for (const e of n) {
                if (e === s.line) break;
                i += Math.round(t * e.layout.height);
            }
            i = i / t + s.layers.height;
        }
        return Mn(t, e, i);
    },
    An = (t, e, s, n) => Mn(t, e, s.stringY),
    Mn = (t, e, s) =>
        (1 === t ? "" : "scale(".concat(t, ") ")) +
        " translate3d(".concat(e - 6 + 15, "px, ").concat(s - 22, "px, 0)");
class Bn extends c {
    __init() {
        this.el = p();
    }
    constructor(t) {
        super(t),
            Bn.prototype.__init.call(this),
            Bn.prototype.__init2.call(this),
            Bn.prototype.__init3.call(this),
            Bn.prototype.__init4.call(this),
            Bn.prototype.__init5.call(this),
            Bn.prototype.__init6.call(this),
            Bn.prototype.__init7.call(this),
            (this.state = { scale: t.scale, visible: !1 }),
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
                    ? Pn
                    : An);
    }
    componentDidMount() {
        this.animationSeek(!1),
            this.state.visible || this.setState({ visible: !0 }),
            window.hotKeysManager.bind(this.keyMap, { onTab: !0 });
    }
    componentDidUpdate(t, e, s) {
        const n = this.props,
            i = n.part !== t.part || n.lines !== t.lines,
            o = n.player.position.cursor !== t.player.position.cursor;
        if (
            ((i || o) &&
                ((this.layout = null),
                    (this.layoutTimestamp = 0),
                    (this.nextLayout = null),
                    (this.nextLayoutTimestamp = 0)),
                n.scale !== t.scale ||
                i ||
                o ||
                n.player.speed !== t.player.speed ||
                n.player.type !== t.player.type ||
                n.player.pitchShift !== t.player.pitchShift ||
                En(n) !== En(t))
        ) {
            let e = this.animationSeek;
            En(t)
                ? (e = En(n) ? this.animationRestart : this.animationPause)
                : En(n) && (e = this.animationPlay);
            const s = t.part === n.part && t.lines === n.lines;
            e.call(this, s);
        }
    }
    componentWillUnmount() {
        (this.pause = !0),
            this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
            window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
    }
    applyCursorCoordinates(t) {
        const { el: e, layout: s, nextLayout: n, layoutTimestamp: i } = this;
        let o;
        if (n && _n(s, n)) {
            const t = s.absoluteLoopRightX - s.absoluteX,
                a = n.absoluteX - n.absoluteLoopLeftX,
                r = (s.duration * t) / (t + a),
                l = s.duration - r;
            o = o => {
                const c = o - i;
                e.current.style.transform =
                    c < r
                        ? this.formatTransform(
                            this.props.scale,
                            s.absoluteX + (t * c) / r,
                            s.measureLayout.lineLayout,
                            this.props.lines
                        )
                        : this.formatTransform(
                            this.props.scale,
                            n.absoluteLoopLeftX + (a * (c - r)) / l,
                            n.measureLayout.lineLayout,
                            this.props.lines
                        );
            };
        } else {
            const t = n
                ? n.absoluteX - s.absoluteX
                : s.absoluteLoopRightX - s.absoluteX;
            o = n => {
                e.current.style.transform = this.formatTransform(
                    this.props.scale,
                    s.absoluteX + (t * (n - i)) / s.duration,
                    s.measureLayout.lineLayout,
                    this.props.lines
                );
            };
        }
        return o(t), o;
    }
    updateCurrentTempo(t) {
        const e = this.props.part.tempos,
            s = s =>
                e[s].timestamp <= t && (s === e.length - 1 || t < e[s + 1].timestamp);
        this.tempoIndex >= e.length && (this.tempoIndex = 0),
            s(this.tempoIndex) ||
            ((this.tempoIndex = e.findIndex((t, e) => s(e))),
                -1 === this.tempoIndex && (this.tempoIndex = 0),
                this.props.dispatch("player/tempoApply", e[this.tempoIndex].tempo));
    }
    findLayoutUnderCursor(t) {
        if (
            !this.layout ||
            !(
                this.layoutTimestamp <= t &&
                t < this.layoutTimestamp + this.layout.duration
            )
        ) {
            const e = (function (t, e, s = "left") {
                const { timestamps: n } = t,
                    i = n[0],
                    o = n[n.length - 1];
                if (e <= i) return 0;
                if (e >= o) return n.length - 1;
                let a = 0,
                    r = n.length,
                    l = 0;
                for (; r - a > 1;) {
                    l = Math.floor((a + r) / 2);
                    const t = n[l];
                    if (e < t) r = l;
                    else {
                        if (!(e > t)) return l;
                        a = l;
                    }
                }
                return r - a > 1 ? ("left" === s ? l : l - 1) : a;
            })(this.props.part, t),
                { timeline: s, timestamps: n } = this.props.part;
            (this.layoutTimestamp = n[e]),
                (this.layout = s.get(this.layoutTimestamp));
            let i = e < n.length - 1 ? n[e + 1] : null;
            const o = this.props.player.position.loopEnd;
            return (
                0 !== o &&
                (null === i || i >= o - 1e-15) &&
                (i = this.props.player.position.loopStart),
                (this.nextLayout = null !== i ? s.get(i) : null),
                !0
            );
        }
        return !1;
    }
    animationSeek(t) {
        const e = this.props.player.audio.getCursor();
        this.findLayoutUnderCursor(e),
            this.applyCursorCoordinates(e),
            this.props.player.isLoopChanging ||
            this.props.ensureLineVisibility(
                null,
                this.layout.measureLayout.lineLayout,
                !t
            ),
            this.updateCurrentTempo(e);
    }
    animationPlay(t) {
        this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
        let e = !1;
        const s = this.props.player.audio.getCursor();
        this.findLayoutUnderCursor(s);
        let n = this.applyCursorCoordinates(s),
            i = null;
        const o = () => {
            const t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
                e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
                s = ((this.layout.duration * t) / (t + e)) * 0.8;
            return (
                (i = t =>
                    !!(this.layout && this.nextLayout && t - this.layoutTimestamp > s) &&
                    (this.props.ensureLineVisibility(
                        this.layout.measureLayout.lineLayout,
                        this.nextLayout.measureLayout.lineLayout,
                        !1
                    ),
                        (i = null),
                        !0)),
                i
            );
        };
        (this.nextLayout && _n(this.layout, this.nextLayout) && o()(s)) ||
            this.props.ensureLineVisibility(
                null,
                this.layout.measureLayout.lineLayout,
                !1
            );
        const a = window.requestAnimationFrame,
            r = () => {
                try {
                    if (
                        (e || (this.props.player.audio.isPositionChanged() && (e = !0)), e)
                    ) {
                        const t = this.props.player.audio.getCursor();
                        n && n(t),
                            i && i(t),
                            this.findLayoutUnderCursor(t) &&
                            ((n = this.applyCursorCoordinates(t)),
                                this.nextLayout && _n(this.layout, this.nextLayout) && o(),
                                !this.nextLayout &&
                                t >= this.layout.loopRightTime - 1e-15 &&
                                (this.stopPlayback(), (this.pause = !0))),
                            this.updateCurrentTempo(t);
                    }
                    this.pause || (this.animationPlayId = a(r));
                } catch (t) {
                    console.error(t);
                }
            };
        (this.pause = !1), (this.animationPlayId = a(r));
    }
    animationPause(t) {
        this.pause = !0;
    }
    animationRestart(t) {
        this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
            (this.layout = null),
            (this.layoutTimestamp = 0),
            (this.nextLayout = null),
            (this.nextLayoutTimestamp = 0),
            this.animationPlay(t);
    }
    __init2() {
        this.stopPlayback = () => {
            this.props.dispatch("player/togglePlay", !1),
                requestAnimationFrame(() =>
                    this.props.dispatch("player/moveCursor", {
                        cursor: 0,
                        loopStart: 0,
                        loopEnd: 0,
                    })
                );
        };
    }
    moveTo(t) {
        const e = t.beatsLayouts;
        this.props.dispatch("player/moveCursor", {
            cursor: e[0].leftTime,
            loopStart: this.props.player.position.loopStart,
            loopEnd: this.props.player.position.loopEnd,
        });
    }
    __init3() {
        this.handleBackspace = t => {
            t.preventDefault();
            const { loopStart: e, loopEnd: s } = this.props.player.position;
            this.props.dispatch("player/moveCursor", {
                cursor: e,
                loopStart: e,
                loopEnd: s,
            });
        };
    }
    __init4() {
        this.handleLeft = t => {
            t.preventDefault();
            const { part: e } = this.props,
                { loopStart: s, loopEnd: n } = this.props.player.position,
                i = Ut(e, this.props.player.audio.getCursor(), "left"),
                o = i.measureLayout.measure.index,
                a = i.measureLayout.measure.beatsLayouts[0];
            let r = s;
            if (i !== a) {
                const t = a.leftTime;
                r = t > s ? t : s;
            } else if (o > 0) {
                const { rightTime: t, leftTime: i } = e.measures[o - 1].beatsLayouts[0];
                r = 0 === n || s <= i ? i : s <= t ? t : s;
            }
            this.props.dispatch("player/moveCursor", {
                cursor: r,
                loopStart: s,
                loopEnd: n,
            });
        };
    }
    __init5() {
        this.handleRight = t => {
            t.preventDefault();
            const { part: e } = this.props,
                { loopStart: s, loopEnd: n } = this.props.player.position,
                i = Ut(e, this.props.player.audio.getCursor(), "left").measureLayout
                    .measure.index;
            let o = null;
            if (i < e.measures.length - 1) {
                const { rightTime: t, leftTime: s } = e.measures[i + 1].beatsLayouts[0];
                0 === n || t < n ? (o = t) : s < n && (o = s);
            }
            null !== o &&
                this.props.dispatch("player/moveCursor", {
                    cursor: o,
                    loopStart: s,
                    loopEnd: n,
                });
        };
    }
    __init6() {
        this.handleUp = t => {
            t.preventDefault();
            const { part: e } = this.props,
                { loopStart: s, loopEnd: n } = this.props.player.position,
                i = Ut(e, this.props.player.audio.getCursor(), "left"),
                o = i.measureLayout.lineLayout.line.index;
            if (o > 0) {
                const t = Xt(this.props.lines[o - 1], i.absoluteX, "left");
                let e = null;
                const { rightTime: a, leftTime: r } = t;
                0 === n || s <= r ? (e = r) : s <= a && (e = a),
                    null !== e &&
                    this.props.dispatch("player/moveCursor", {
                        cursor: e,
                        loopStart: s,
                        loopEnd: n,
                    });
            }
        };
    }
    __init7() {
        this.handleDown = t => {
            t.preventDefault();
            const { part: e } = this.props,
                { loopStart: s, loopEnd: n } = this.props.player.position,
                i = Ut(e, this.props.player.audio.getCursor(), "left"),
                o = i.measureLayout.lineLayout.line.index;
            if (o < this.props.lines.length - 1) {
                const t = Xt(this.props.lines[o + 1], i.absoluteX, "left");
                let e = null;
                const { rightTime: a, leftTime: r } = t;
                0 === n || a < n ? (e = a) : r < n && (e = r),
                    e &&
                    this.props.dispatch("player/moveCursor", {
                        cursor: e,
                        loopStart: s,
                        loopEnd: n,
                    });
            }
        };
    }
    render() {
        const t = 12 * (this.props.part.strings - 1) + 22 + 12,
            e = !(this.props.player.canPlay || this.props.route.isPanel);
        return a(
            "div",
            { className: Ln.wrap, ref: this.el },
            this.state.visible &&
            a(
                "svg",
                { width: 12, height: t, className: e ? Ln.loading : Ln.normal },
                a(
                    "defs",
                    {},
                    a(
                        "filter",
                        { id: "CursorShadow", x: "-40%", width: "180%" },
                        a("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
                        a("feOffset", { dx: "0", dy: "2" })
                    )
                ),
                a(In, { width: 12, height: t })
            )
        );
    }
}
var Dn = k(Bn, "player", "route", "browser");
class On extends c {
    render() {
        const { x: t, layout: e, handle: s } = this.props,
            n = e.measureLayout.lineLayout,
            i = n.loopY + 10,
            o = n.loopHeight - 20,
            r = "translate(".concat(t, ",").concat(i, ")"),
            l = "left" === s ? "matrix(-1,0,0,1,1,0)" : "",
            c = Math.floor(o / 2);
        return a(
            "g",
            { className: "Cqz26s", transform: r, "data-loop-handle": s },
            a("path", {
                d: "M0 "
                    .concat(c - 12, "q15 0 15 12t-15 12m1 0v")
                    .concat(c - 12, "h-2 v-")
                    .concat(o, "h2z"),
                className: "Cqz2o9",
                transform: l,
            }),
            a("path", {
                d: "M8 ".concat(c - 4.5, "l-4.5 4.5l4.5 4.5"),
                className: "Cqzp7",
                transform: l,
            }),
            a("rect", {
                x: -10,
                y: -1,
                height: o,
                width: 27,
                transform: l,
                className: "Cqz154",
            })
        );
    }
}
class jn extends c {
    render() {
        const { leftLayout: t, rightLayout: e, lines: s } = this.props,
            n = t.absoluteLoopLeftX,
            i = e.absoluteLoopRightX,
            o = t.measureLayout.lineLayout,
            r = e.measureLayout.lineLayout,
            l = "Cqz1rb";
        if (o === r)
            return a("rect", {
                className: l,
                rx: 3,
                height: o.loopHeight,
                x: n,
                y: o.loopY,
                width: i - n + 1,
            });
        {
            const t = o.line.index,
                e = r.line.index,
                c = e - t,
                d = new Array(c + 1);
            (d[0] = a("rect", {
                className: l,
                rx: 3,
                height: o.loopHeight,
                x: n,
                y: o.loopY,
                width: o.maxX - n,
                key: t,
            })),
                (d[c] = a("rect", {
                    className: l,
                    rx: 3,
                    height: r.loopHeight,
                    x: r.minX,
                    y: r.loopY,
                    width: i - r.minX,
                    key: e,
                }));
            for (let n = t + 1; n < e; n++) {
                const e = s[n].layout;
                d[n - t] = a("rect", {
                    className: l,
                    rx: 3,
                    height: e.loopHeight,
                    x: e.minX,
                    y: e.loopY,
                    width: e.maxX,
                    key: n,
                });
            }
            return a("g", null, d);
        }
    }
}
const Rn = b && "scrollBehavior" in document.documentElement.style;
class zn {
    constructor() {
        zn.prototype.__init.call(this),
            (this.y = 0),
            (this.startY = 0),
            (this.startTime = 0),
            (this.scrollId = void 0);
    }
    scroll(t, e, s) {
        if (
            (this.scrollId &&
                (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
                Rn)
        )
            window.scrollTo({ left: 0, top: t, behavior: e ? "instant" : "smooth" });
        else {
            const n =
                s ||
                (window.visualViewport
                    ? window.visualViewport.pageTop
                    : window.scrollY);
            if (e || Math.abs(t - n) <= 5) window.scrollTo(0, t);
            else {
                (this.y = t), (this.startY = n), (this.startTime = ue());
                const e = window.requestAnimationFrame;
                this.scrollId = e(this.animationLoop);
            }
        }
    }
    __init() {
        this.animationLoop = () => {
            const t =
                ((e = Math.min((ue() - this.startTime) / 100, 1)),
                    0.5 * (1 - Math.cos(Math.PI * e)));
            var e;
            const s = this.startY + (this.y - this.startY) * t;
            if ((window.scrollTo(0, s), s !== this.y)) {
                const t = window.requestAnimationFrame;
                this.scrollId = t(this.animationLoop);
            } else this.scrollId = void 0;
        };
    }
    unmount() {
        this.scrollId &&
            (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
    }
}
function Fn(t) {
    return "android" === t.toLowerCase();
}
function Hn(t) {
    return "ios" === t.toLowerCase();
}
const qn = t => {
    !b &&
        t.on("device/init", (t, { device: e, browser: s }) => ({
            device: e,
            browser: s,
        }));
};
function Un(t) {
    const s = e(x),
        n = t.href || t.to,
        i = t.onClick,
        o = m(
            t => {
                (t => !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey))(t) ||
                    (t.preventDefault(), i && i(), s.dispatch("navigate", n));
            },
            [n, i]
        );
    return a("a", Object.assign({}, t, { href: n, onClick: o, to: null }));
}
function Vn() {
    return a(
        "svg",
        { width: 54, height: 54, viewBox: "0 0 54 54" },
        a("path", {
            d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6zm-6.5 22.5h-10v-10h-9v10h-10v9h10v10h9v-10h10v-9z",
            fill: "#68d517",
        })
    );
}
function Gn({
    shadow: t = "#CA7F06",
    width: e = 54,
    height: s = 30,
    id: n = "iconDemo",
}) {
    return a(
        "svg",
        { width: e, height: s, viewBox: "0 0 54 30" },
        a(
            "defs",
            {},
            a(
                "filter",
                {
                    id: n,
                    x: "-200%",
                    y: "-200%",
                    width: "400%",
                    height: "400%",
                    "filter-units": "objectBoundingBox",
                    "color-interpolation-filters": "sRGB",
                },
                a("feGaussianBlur", { in: "SourceGraphic" }),
                a("feOffset", { dy: 3, result: "offsetBlur" }),
                a("feFlood", { "flood-color": t, "flood-opacity": 1 }),
                a("feComposite", {
                    in2: "offsetBlur",
                    operator: "in",
                    result: "dropShadow",
                }),
                a("feBlend", { in: "SourceGraphic", in2: "dropShadow" })
            )
        ),
        a("path", {
            d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
            fill: "#FF9D00",
            filter: "url(#".concat(n, ")"),
            databackgound: "",
        }),
        a("path", {
            fill: "#FFF",
            d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
        })
    );
}
var Xn = {
    base: "oo2w1",
    horizontalPopup: "oo2w1 oo18g",
    verticalPopup: "oo2w1 oo1bv",
    verticalLeftPopup: "oo2w1 ookx",
    speedPopup: "oo2w1 oo18g oo2yd",
    soloPopup: "oo2w1 oo18g oo2dw",
    mutePopup: "oo2w1 oo18g ool",
    loopPopup: "oo2w1 oo18g ootw",
    printPopup: "oo2w1 oo18g oo2wr",
    pitchshiftPopup: "oo2w1 oo1r5",
    link: "oonk",
    basewrapper: "oo1og",
    wrapper: "oo1og oo1tk",
    demowrapper: "oo1og oo2f9",
    text: "oo1jh",
    linkText: "oom9",
    demoText: "oo2fi",
    divider: "oo1pt",
};
function Wn(t, e, s) {
    return s
        ? Xn["".concat(s, "Popup")]
        : t
            ? Xn.horizontalPopup
            : e
                ? Xn.verticalLeftPopup
                : Xn.verticalPopup;
}
function Yn({
    title: t,
    left: e,
    horizontal: s,
    classPrefix: n,
    leftOffset: i,
    topOffset: o,
}) {
    let r = {};
    void 0 !== i &&
        void 0 !== o &&
        (r = { top: "".concat(o, "px"), left: "".concat(i, "px") });
    const { dispatch: l } = C(),
        c = m(() => {
            l("demo/activate");
        }, [l]),
        d = m(() => {
            l("curiosity/setConversionProps", {
                "Last referring link": "".concat(t, " Popup"),
            });
        }, [t, l]);
    return a(
        "div",
        { className: Wn(s, e, n), style: r, role: "dialog" },
        a(
            Un,
            {
                className: Xn.link,
                to: "/a/wa/plus",
                "aria-label": "".concat(t, " is available on the Plus plan"),
                onClick: d,
            },
            a("span", { className: Xn.wrapper }, a(Vn, null)),
            a(
                "div",
                { className: Xn.text },
                "".concat(t, " is available"),
                a("br", null),
                "on the Plus plan",
                a("br", null),
                a("span", { className: Xn.linkText }, "See plans and pricing")
            )
        ),
        a("div", { className: Xn.divider }),
        a(
            Un,
            {
                className: Xn.link,
                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                "aria-label": "Try out Demo Song (all the features enabled)",
                onClick: c,
            },
            a("span", { className: Xn.demowrapper }, a(Gn, null)),
            a(
                "div",
                { className: Xn.demoText },
                "Try out ".concat(t),
                a("br", null),
                a("span", { className: Xn.linkText }, "on the Demo Song")
            )
        )
    );
}
function Zn(t) {
    try {
        return JSON.parse(window.localStorage.getItem(t));
    } catch (t) {
        return null;
    }
}
function Kn(t, e) {
    try {
        e
            ? window.localStorage.setItem(t, JSON.stringify(e))
            : window.localStorage.removeItem(t);
    } catch (t) { }
}
var Qn = { get: Zn, set: Kn };
const Jn = (t, e = new Date().toUTCString()) => {
    const s = Zn("hasSeenPromos") || {};
    (s[t] = e), Kn("hasSeenPromos", s);
},
    $n = (t, e) => {
        if (Zn("hasUnsubscribedFromPromo")) return !0;
        if (t.user.hasPlus) return !0;
        if (t.promo.active) return !0;
        let s = !1;
        const n = Zn("hasSeenPromos") || {},
            i = new Date(Date.now() - 864e5);
        return (
            Object.entries(n).map(([, t]) => {
                new Date(t) >= i && (s = !0);
            }),
            s || !!n[e]
        );
    };
function ti(t) {
    const { position: e } = t.player,
        s = t.part.current,
        n = [
            ...t.promo.playbackPositionEvents.filter(t => t.time > Date.now() - 12e4),
        ];
    let i = 0;
    if (s) {
        const t = Ut(s, e.cursor, "left"),
            o = ""
                .concat(s.revisionId, ":")
                .concat(s.partId, ":")
                .concat(t.measureLayout.measure.index);
        n.push({ time: Date.now(), key: o }),
            (i = n.filter(t => t.key === o).length);
    }
    return { events: n, relatedEvents: i };
}
function ei(t, e) {
    if ($n(t, "slowdown") || !t.player.shouldPlay || !t.player.canPlay) return;
    let s = t.promo.active;
    const { events: n, relatedEvents: i } = ti(t);
    return (
        i >= 3 &&
        (Jn("slowdown"),
            (s = "slowdown"),
            e("curiosity/event", {
                event: "Got into promo context",
                Context: "Slowdown",
            }),
            t.device.isPhone && e("player/stopPlay")),
        {
            promo: Object.assign({}, t.promo, {
                playbackPositionEvents: n,
                active: s,
            }),
        }
    );
}
function si(t, e) {
    if ($n(t, "loop") || !t.player.shouldPlay || !t.player.canPlay) return;
    if (!(Zn("hasSeenPromos") || {}).slowdown) return;
    let s = t.promo.active;
    const { events: n, relatedEvents: i } = ti(t);
    return (
        i >= 3 &&
        (Jn("loop"),
            (s = "loop"),
            e("curiosity/event", {
                event: "Got into promo context",
                Context: "Loop",
            }),
            t.device.isPhone && e("player/stopPlay")),
        {
            promo: Object.assign({}, t.promo, {
                playbackPositionEvents: n,
                active: s,
            }),
        }
    );
}
function ni(t, e) {
    if ($n(t, "solo") || !t.player.shouldPlay || !t.player.canPlay) return;
    let s = t.promo.active;
    const { events: n, relatedEvents: i } = (function (t) {
        const e = t.part.current;
        let s = "other";
        e &&
            (q(e.instrumentId) && (s = "guitar"),
                U(e.instrumentId) && (s = "bass"),
                H(e.instrumentId) && (s = "drums"));
        const n = [...t.promo.playbackTypeEvents, { time: Date.now(), type: s }],
            i = n.filter(t => "bass" === t.type).length;
        return { events: n, relatedEvents: i };
    })(t);
    return (
        5 === i &&
        (Jn("solo"),
            (s = "solo"),
            e("curiosity/event", {
                event: "Got into promo context",
                Context: "Solo",
            }),
            t.device.isPhone && e("player/stopPlay")),
        { promo: Object.assign({}, t.promo, { playbackTypeEvents: n, active: s }) }
    );
}
const ii = t => {
    if (
        (!b &&
            t.on("@init", () => ({
                promo: {
                    active: !1,
                    seen: {},
                    playbackPositionEvents: [],
                    playbackTypeEvents: [],
                    playedToHalf: 0,
                },
            })),
            b &&
            Kn(
                "hasPlusPromoSegment",
                (function (t) {
                    let e,
                        s = t[0],
                        n = 1;
                    for (; n < t.length;) {
                        const i = t[n],
                            o = t[n + 1];
                        if (
                            ((n += 2),
                                ("optionalAccess" === i || "optionalCall" === i) && null == s)
                        )
                            return;
                        "access" === i || "optionalAccess" === i
                            ? ((e = s), (s = o(s)))
                            : ("call" !== i && "optionalCall" !== i) ||
                            ((s = o((...t) => s.call(e, ...t))), (e = void 0));
                    }
                    return s;
                })([
                    t,
                    "access",
                    t => t.get,
                    "call",
                    t => t(),
                    "access",
                    t => t.experiments,
                    "optionalAccess",
                    t => t.plus_promo,
                ]) || "off"
            ),
            b && !Zn("hasUnsubscribedFromPromo"))
    ) {
        const e = Zn("hasSeenPromos") || {};
        if (
            (e.slowdown ||
                Zn("hasSeenSlowdownPromo") ||
                (t.on("player/moveCursor", e => ei(e, t.dispatch)),
                    t.on("player/togglePlay", e => ei(e, t.dispatch))),
                e.loop ||
                (t.on("player/moveCursor", e => si(e, t.dispatch)),
                    t.on("player/togglePlay", e => si(e, t.dispatch))),
                e.noads ||
                t.on("curiosity/vpt10", e =>
                    (function (t, e) {
                        if ($n(t, "noads")) return;
                        let s = t.promo.active;
                        return (
                            t.screen.viewport.height < (t.device.isPhone ? 740 : 900) &&
                            (Jn("noads"),
                                (s = "noads"),
                                e("curiosity/event", {
                                    event: "Got into promo context",
                                    Context: "No Ads",
                                }),
                                t.device.isPhone &&
                                t.player.shouldPlay &&
                                t.player.canPlay &&
                                e("player/stopPlay")),
                            { promo: Object.assign({}, t.promo, { active: s }) }
                        );
                    })(e, t.dispatch)
                ),
                !e.mute)
        ) {
            let e;
            t.on("player/togglePlay", e =>
                (function (e) {
                    if (!$n(e, "mute"))
                        if (e.player.shouldPlay && e.player.canPlay) {
                            const s = e.part.current;
                            if (!s) return;
                            const n = s.timestamps[s.timestamps.length - 1];
                            if (n > 2e4) {
                                const e = Math.floor(n / 3);
                                t.dispatch("promo/mute:start", { delay: e });
                            }
                        } else t.dispatch("promo/mute:clear");
                })(e)
            ),
                t.on("promo/mute:start", (s, { delay: n }) => {
                    clearTimeout(e),
                        (e = setTimeout(() => t.dispatch("promo/mute:fire"), n));
                }),
                t.on("promo/mute:clear", () => clearTimeout(e)),
                t.on("promo/mute:fire", e =>
                    (function (t, e) {
                        if ($n(t, "mute")) return;
                        let s = t.promo.active;
                        const n = t.promo.playedToHalf + 1;
                        return (
                            n >= 2 &&
                            (Jn("mute"),
                                (s = "mute"),
                                e("curiosity/event", {
                                    event: "Got into promo context",
                                    Context: "Mute",
                                })),
                            {
                                promo: Object.assign({}, t.promo, {
                                    playedToHalf: n,
                                    active: s,
                                }),
                            }
                        );
                    })(e, t.dispatch)
                );
        }
        if (
            (e.solo ||
                (t.on("player/moveCursor", e => ni(e, t.dispatch)),
                    t.on("player/togglePlay", e => ni(e, t.dispatch))),
                !e.retune)
        ) {
            let e;
            t.on("promo/retune:start", () => {
                clearTimeout(e),
                    (e = setTimeout(() => t.dispatch("promo/retune:fire"), 1e4));
            }),
                t.on("promo/retune:clear", () => clearTimeout(e)),
                t.on("promo/retune:fire", e =>
                    (function (t, e) {
                        if ($n(t, "retune")) return;
                        const s = t.part.current;
                        if (!s) return;
                        let n = t.promo.active;
                        const i = s.tuning && mn(s.instrumentId, s.tuning);
                        return (
                            i &&
                            0 !== i.pitch &&
                            (Jn("retune"),
                                (n = "retune"),
                                e("curiosity/event", {
                                    event: "Got into promo context",
                                    Context: "Retune",
                                })),
                            { promo: Object.assign({}, t.promo, { active: n }) }
                        );
                    })(e, t.dispatch)
                );
        }
        t.on("promo/dismiss", t => ({
            promo: Object.assign({}, t.promo, { active: !1 }),
        })),
            t.on(
                "promo/unsubscribe",
                e => (
                    Kn("hasUnsubscribedFromPromo", new Date().toUTCString()),
                    t.dispatch("curiosity/event", { event: "Unsubscribed from promo" }),
                    { promo: Object.assign({}, e.promo, { active: !1 }) }
                )
            );
    }
};
function oi(t, e, s, n = {}) {
    let i = null;
    try {
        const t = Zn("hasSeenPromos") || {};
        Object.keys(t).length &&
            e.plus_promo &&
            (i = "plus_promo_".concat(e.plus_promo));
    } catch (t) { }
    if (Fn(t)) {
        const t = i ? "%26utm_campaign%3D".concat(i) : "",
            e = n.songId ? "%26tab_id%3D".concat(n.songId) : "";
        return "https://play.google.com/store/apps/details?id=com.songsterr&referrer=utm_source%3D"
            .concat(s)
            .concat(t)
            .concat(e);
    }
    return "https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct="
        .concat(s)
        .concat(i ? "_".concat(i) : "");
}
function ai(t) {
    const { dispatch: e, device: s, experiments: n } = C("device", "experiments"),
        { source: i } = t,
        o = t.os || s.os,
        r = t.extra || {},
        l = t.attrs || {},
        c = oi(o, n, i, r),
        d = m(() => {
            t.onClick && t.onClick(),
                e("player/togglePlay", !1),
                e("curiosity/google", {
                    category: "Showroom",
                    action: "Clicked on ".concat(
                        Fn(o) ? "Google Play" : "App Store",
                        " link"
                    ),
                });
        }, []);
    return a(
        "a",
        Object.assign({}, l, {
            href: c,
            onClick: d,
            rel: "noopener noreferrer",
            target: "_blank",
        }),
        t.children
    );
}
var ri = "/static/media/appstore.dd39ee94.svg",
    li = "/static/media/gplay.c1996475.svg";
function ci({
    title: t,
    mobile: e,
    leftOffset: s,
    topOffset: n,
    horizontal: i,
    device: o,
}) {
    let r = e ? "Crg11j Crg2kf Crg25i" : i ? "Crg11j Crg2by" : "Crg11j Crg2kf",
        l = {};
    void 0 !== s &&
        void 0 !== n &&
        ((l = { top: "".concat(n, "px"), left: "".concat(s, "px") }),
            (r = "Crg11j Crg170"));
    let c = "subscribe in the app";
    return (
        Fn(o.os) && (c = "buy in the app"),
        a(
            "div",
            { role: "dialog", className: r, style: l },
            a(
                ai,
                {
                    source: "popup",
                    attrs: {
                        className: "Crg1fe",
                        "aria-label": "".concat(t, " ").concat(c),
                    },
                },
                a(
                    "div",
                    null,
                    a("div", { className: "Crg19s" }, t),
                    a("div", { className: "Crg1tt" }, c)
                ),
                Fn(o.os)
                    ? a("img", { src: li, width: 160, height: 47, alt: "Google Play" })
                    : a("img", { src: ri, width: 160, height: 53, alt: "AppStore" })
            )
        )
    );
}
function di({ tab: t, tuningButton: e }) {
    const { device: s } = C("device");
    let n = 0,
        i = 0;
    if (t && e) {
        const s = t.getBoundingClientRect(),
            o = e.getBoundingClientRect();
        (n = o.left - s.left + o.width + 21),
            (i = o.top - s.top - (23 - o.height) - 14.5),
            i < 2 && (i = 2);
    }
    return Fn(s.os) || Hn(s.os)
        ? a(ci, { title: "Pitch Shift", device: s, leftOffset: n, topOffset: i })
        : a(Yn, {
            title: "Pitch Shift",
            classPrefix: "pitchshift",
            leftOffset: n,
            topOffset: i,
        });
}
let ui = !0;
("undefined" != typeof document &&
    "function" == typeof document.createElement) ||
    (ui = !1);
const hi = ui ? document.createElement("canvas") : null;
(hi && "function" == typeof hi.getContext) || (ui = !1);
const pi =
    hi && "function" == typeof hi.getContext ? hi.getContext("2d") : null;
function mi(t, e) {
    if (!ui || !pi) return 0;
    const s = Object.assign(
        {},
        {
            style: "normal",
            constiant: "normal",
            weight: "normal",
            size: 13,
            family: "Helvetica Neue",
            align: "start",
            baseline: "alphabetic",
        },
        e
    ),
        n = "number" == typeof s.size ? s.size + "px" : s.size;
    return (
        (pi.font = ""
            .concat(s.style, " ")
            .concat(s.constiant, " ")
            .concat(s.weight, " ")
            .concat(n, " ")
            .concat(s.family)),
        (pi.textAlign = s.align),
        (pi.textBaseline = s.baseline),
        pi.measureText(t).width
    );
}
ui = !!pi && "function" == typeof pi.measureText;
const gi = { family: "Helvetica Neue", size: 13 };
function fi(t, e, s) {
    const n = t.split(" ");
    let i = n[0],
        o = mi(i, gi),
        a = 1;
    for (; a < n.length - 1; a++) {
        const t = mi(n[a], gi);
        if (o + 3.6139 + t > s) break;
        (i += " " + n[a]), (o += 3.6139 + t);
    }
    return (
        (i += "…"),
        {
            phrase: { text: i, width: o + 13, layer: null },
            rest: {
                text: "…" + n.slice(a).join(" "),
                width: e - o + 13,
                layer: null,
            },
        }
    );
}
const yi = t =>
    t
        .toLowerCase()
        .replace(/\//g, "-")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-_]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-*/g, "");
function vi(t, e = 0, s, n) {
    return t
        ? (function (t, e, s) {
            return "/a/wsa/"
                .concat(t)
                .concat(
                    (function (t) {
                        if (void 0 !== t) {
                            if (H(t)) return "drum-tab-s";
                            if (U(t)) return "bass-tab-s";
                        }
                        return "tab-s";
                    })(s)
                )
                .concat(e);
        })(
            ((i = t.artist), (o = t.title), yi("".concat(i, "-").concat(o, "-"))),
            (function (t, e, s) {
                return s
                    ? "".concat(t, "t").concat(e, "/r").concat(s)
                    : "".concat(t, "t").concat(e);
            })(t.songId, e, s),
            n
        )
        : "/";
    var i, o;
}
function bi(t, e) {
    return "/a/wa/SongAdminTools/".concat(t, "?id=").concat(e);
}
function wi(t) {
    return "https://www.songsterr.com".concat(t);
}
function xi(t) {
    switch (t) {
        case "subscribe":
            return "/a/wa/plus/payment";
        case "favorites":
            return "/a/wa/favorites";
        case "account":
            return "/a/wa/account";
        case "submit":
            return "/a/wa/submit";
        default:
            return "/";
    }
}
function Si() {
    return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
}
function Ci(t) {
    const e = t.rules || t.cssRules;
    for (const t of e)
        if (t.style.content && t.style.content.length) {
            const e =
                Si() +
                Si() +
                "-" +
                Si() +
                "-" +
                Si() +
                "-" +
                Si() +
                "-" +
                Si() +
                Si() +
                Si(),
                s =
                    t.style.content.substring(0, 62) +
                    e +
                    t.style.content.substring(62 + e.length);
            s.length === t.style.content.length
                ? (t.style.content = s)
                : console.error("Something wrong with tracker url length");
        }
}
function ki(t, e) {
    if ("prod" !== window.__STAGE__) return;
    const s = t.rules || t.cssRules;
    for (const t of s) {
        const s = JSON.stringify({ name: "Printed tab", props: e }),
            n = window.btoa(s);
        t.style.content = "url(".concat(
            wi("/actions/events/track?data=".concat(n)),
            ")"
        );
    }
}
const Ni = !b || !!window.requestAnimationFrame,
    Li = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
function Ti({ children: t, styles: e }) {
    const s = ((n = t), n.replace(Li, t => "" + t + "").split("")).map((t, s) =>
        Li.test(t)
            ? a(
                "a",
                {
                    className: e.link,
                    key: "url".concat(s),
                    href: t,
                    rel: "noopener noreferrer ugc",
                    target: "_blank",
                },
                t
            )
            : a(d, { key: "text".concat(s) }, t)
    );
    var n;
    return a("p", { className: e.message }, s);
}
class Ii extends Error {
    constructor(t, e, ...s) {
        super(...s),
            Error.captureStackTrace && Error.captureStackTrace(this, Ii),
            (this.name = "ValidationError"),
            (this.reasons = t),
            (this.message = e || "Form validation failed");
    }
}
class _i extends Ii {
    constructor(t, e, ...s) {
        super(t, e, ...s),
            Error.captureStackTrace && Error.captureStackTrace(this, _i),
            (this.name = "ValidationWarning");
    }
}
class Ei extends Error {
    constructor(...t) {
        super(...t),
            Error.captureStackTrace && Error.captureStackTrace(this, Ei),
            (this.name = "FraudError"),
            (this.message = "Email verification failed");
    }
}
class Pi extends Error {
    constructor(t, ...e) {
        super(...e),
            Error.captureStackTrace && Error.captureStackTrace(this, Ei),
            (this.name = "RestrainError"),
            (this.action = t),
            (this.message = "Your actions appear suspicious.");
    }
}
class Ai extends Error {
    constructor(t, e, ...s) {
        super(...s),
            Error.captureStackTrace && Error.captureStackTrace(this, Ai),
            (this.name = "NetworkError"),
            (this.status = t),
            (this.message = "".concat(t, " ").concat(e)),
            b && (this.onLine = navigator && navigator.onLine);
    }
}
async function Mi(t, e = {}, s = {}, n = null) {
    (n = n || { method: "post", credentials: "include" }),
        (s = Object.assign({}, s, {
            Accept: "application/json",
            "Content-Type": "application/json",
        }));
    const i = JSON.stringify(e);
    return fetch(t, Object.assign({}, n, { headers: s, body: i }));
}
function Bi(t) {
    if (!t.ok) throw new Ai(t.status, t.statusText);
}
async function Di(t, e) {
    if (406 === t.status) throw new Pi(e);
}
function Oi(t, e) {
    if (403 === t.status) throw new Ii({ __all__: e }, e);
}
async function ji(t) {
    if (406 === t.status) {
        const e = await t.json();
        throw new Ii(e, e.message);
    }
}
async function Ri(t) {
    if (412 === t.status) {
        const e =
            "Please wait for reCAPTCHA logo to appear in the lower right corner",
            s = await t.json();
        throw new Ii({ __all__: e }, s.message);
    }
}
async function zi(t) {
    if (422 === t.status) {
        const e = await t.json();
        throw new Ii(e.message || e.data || e);
    }
}
async function Fi(t) {
    if (422 === t.status || 423 === t.status) {
        const e = await t.json();
        throw 423 === t.status ? new _i(e.reasons) : new Ii(e.reasons || e);
    }
}
async function Hi(t) {
    if (!t.ok && 409 !== t.status)
        throw new Error("Oops, something went wrong. Please try again later");
}
const qi = b ? 6 : 3;
async function Ui(t, e, s, n = { Accept: "application/json" }) {
    let i = 0,
        o = "";
    const a = { headers: n, signal: s };
    for (let e = 0; e < qi && 404 !== i; e++) {
        try {
            if (s.aborted) return;
            const r = await fetch(t(e), a);
            if (s.aborted) return;
            if (r.ok)
                return await ("application/json" === n.Accept
                    ? r.json()
                    : r.arrayBuffer());
            (i = r.status),
                (o = 404 === r.status ? "Not Found" : r.statusText || "Network Error");
        } catch (t) {
            if ((console.error(t), s.aborted || "AbortError" === t.name)) return;
            (i = 0), (o = t.message || "Network Error");
        }
        await new Promise(t => setTimeout(t, 20 * e));
    }
    throw new Ai(i, o);
}
function Vi(t, e) {
    return !t || ("AllCountries" !== t.restriction && t.restriction !== e);
}
class Gi {
    constructor() {
        this.aborted = !1;
    }
    addEventListener() { }
    removeEventListener() { }
    dispatchEvent() {
        return !1;
    }
}
class Xi {
    constructor() {
        this.signal = new Gi();
    }
    abort() {
        this.signal.aborted = !0;
    }
}
Object.defineProperty(Xi, "name", { value: "AbortController" }),
    Object.defineProperty(Gi, "name", { value: "AbortSignal" });
var Wi = "undefined" != typeof AbortController ? AbortController : Xi;
const Yi = t => {
    !b &&
        t.on("@init", () => ({
            annotations: {
                parts: {},
                loading: null,
                isFailed: !1,
                songId: 0,
                revisionId: 0,
                measure: 0,
            },
        })),
        b &&
        t.on("meta/load:done", async (e, { current: s }) => {
            if (e.device.isPhone) return;
            if (!Vi(s, e.device.country)) return;
            const n = new Wi(),
                i = s.songId,
                o = s.revisionId;
            try {
                const s = e.annotations.loading;
                if (s) {
                    if (i === s.songId && o === s.revisionId) return;
                    s.ac.abort();
                }
                if (
                    !e.annotations.isFailed &&
                    i === e.annotations.songId &&
                    o === e.annotations.revisionId
                )
                    return;
                await t.dispatch("annotations/load:processing", {
                    songId: i,
                    revisionId: o,
                    ac: n,
                });
                const a = await (async function (t, e) {
                    const s = "/api/revision/".concat(t, "/annotations");
                    return Ui(() => s, 0, e);
                })(o, n.signal);
                if (!a || n.signal.aborted) return;
                await t.dispatch("annotations/load:done", {
                    songId: i,
                    revisionId: o,
                    annotations: a,
                });
            } catch (e) {
                if (n.signal.aborted) return;
                t.dispatch("annotations/load:error", {
                    songId: i,
                    revisionId: o,
                    error: e,
                });
            }
        }),
        t.on("meta/load:processing", (t, { songId: e, revisionId: s }) => {
            const n = t.annotations.loading;
            if (n && (e !== n.songId || s !== n.revisionId))
                return (
                    n.ac.abort(),
                    { annotations: Object.assign({}, t.annotations, { loading: null }) }
                );
        }),
        t.on(
            "annotations/load:processing",
            (t, { songId: e, revisionId: s, ac: n }) => ({
                annotations: Object.assign({}, t.annotations, {
                    parts: {},
                    loading: { songId: e, revisionId: s, ac: n },
                }),
            })
        ),
        t.on(
            "annotations/load:done",
            (t, { songId: e, revisionId: s, annotations: n }) => ({
                annotations: Object.assign({}, t.annotations, {
                    parts: n,
                    songId: e,
                    revisionId: s,
                    loading: null,
                    isFailed: !1,
                }),
            })
        ),
        t.on("annotations/load:error", (t, { songId: e, revisionId: s }) => ({
            annotations: Object.assign({}, t.annotations, {
                parts: {},
                songId: e,
                revisionId: s,
                isFailed: !0,
                loading: null,
            }),
        })),
        b &&
        t.on("annotations/load:error", (t, { error: e }) => {
            "Sentry" in window &&
                "function" == typeof window.Sentry.captureException &&
                window.Sentry.captureException(e),
                console.error(e);
        }),
        t.on("annotations/toggle", (t, e) =>
            "annotation" === t.layer.layer
                ? t.annotations.measure === e
                    ? { layer: { layer: null } }
                    : { annotations: Object.assign({}, t.annotations, { measure: e }) }
                : {
                    annotations: Object.assign({}, t.annotations, { measure: e }),
                    layer: { layer: "annotation" },
                }
        ),
        t.on("annotations/submit", (t, { annotation: e }) => {
            const { partId: s, measure: n } = e;
            delete e.partId, delete e.measure, delete e.revisionId;
            const i = t.annotations.parts;
            return (
                (i[s] = i[s] || {}),
                (i[s][n] = i[s][n] || []),
                i[s][n].push(e),
                { annotations: Object.assign({}, t.annotations, { parts: i }) }
            );
        }),
        t.on("annotations/remove", (t, { form: e }) => {
            const { partId: s, id: n, measure: i } = e,
                o = t.annotations.parts,
                a = o[s][i];
            return (
                a.splice(
                    a.findIndex(t => t.id === n),
                    1
                ),
                a || delete o[s][i],
                { annotations: Object.assign({}, t.annotations, { parts: o }) }
            );
        });
};
function Zi(t, e = "En") {
    if (null == t || 0 === t.length)
        switch (e) {
            case "Ru":
                return "Обязательно для заполнения";
            default:
                return "Should not be empty";
        }
    if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            t
        )
    )
        switch (e) {
            case "Ru":
                return "Неверный e-mail адрес";
            default:
                return "Invalid e-mail address";
        }
    return !1;
}
function Ki(t, e = "En") {
    if (0 === t.length)
        switch (e) {
            case "Ru":
                return "Обязательно для заполнения";
            default:
                return "Should not be empty";
        }
    return !1;
}
function Qi(t) {
    return t.length >= 1e3
        ? "Should be less than 1000 characters"
        : 0 === (t = t.replace(/[^\w\s_]/, "").trim()).length
            ? "Should not be empty"
            : t.length < 3 && "Please provide more meaningful edit summary";
}
function Ji(t) {
    return 0 === (t = t.replace(/[^\w\s_]/, "").trim()).length
        ? "Should not be empty"
        : t.length < 3 && "Please provide more meaningful annotation";
}
function $i(t) {
    return Ki(t);
}
function to(t) {
    return 0 === t.length && "Tell us how can we help you";
}
function eo(t) {
    return t.length
        ? [".gp3", ".gp4", ".gp5"].includes(t[0].name.substr(-4))
            ? void 0
            : "Choose right file format"
        : "Upload the file";
}
function so(t) {
    return 0 === t.length
        ? "Should not be empty"
        : t.length < 5 && "Should be at least 5 symbols long";
}
function no(t) {
    return !t && "Should be checked";
}
function io(t, e) {
    return t && t.reasons && t.reasons[e];
}
function oo(t, e = "En") {
    const s = t
        .map(t => {
            let s;
            return (
                (s =
                    "checkbox" === t.field.type
                        ? t.field.checked
                        : "file" === t.field.type
                            ? t.field.files
                            : t.field.value),
                { [t.field.name]: t.validator(s, e) }
            );
        })
        .reduce((t, e) => Object.assign(t, e), {});
    if (Object.keys(s).reduce((t, e) => t || !!s[e], !1)) throw new Ii(s);
    return null;
}
const ao = ({
    width: t,
    height: e,
    fill: s,
    className: n = "Csr2lv",
    style: i,
    id: o,
    iref: r,
}) =>
    a(
        "svg",
        {
            className: n,
            ref: r,
            id: o,
            width: t,
            height: e,
            style: i,
            viewBox: "25 25 50 50",
            "aria-labelledby": "spinner-title",
        },
        a("circle", { stroke: s, cx: "50", cy: "50", r: "20" })
    );
function ro({
    processing: t,
    title: e,
    id: s,
    width: n = 17,
    height: i = 17,
    isDisabled: o = !1,
    onClick: r,
}) {
    return a(
        "button",
        {
            id: s,
            className: o ? j.buttonDisabled : j[s] || j.buttonGreen,
            disabled: o || t,
            onClick: r,
        },
        t &&
        a(ao, { width: n, height: i, fill: "#fff", className: "Csr2lv Csr8e" }),
        a("span", null, e)
    );
}
var lo = {
    exitActive: "Bpm1i8",
    enterActive: "Bpm2vu",
    enter: "Bpmf",
    exit: "Bpm1rd",
};
function co({ errorMessage: t, name: e }) {
    return a(
        M,
        null,
        t &&
        a(
            O,
            { animationStyles: lo, timeout: 150 },
            a("span", { className: "Cc1124", role: "alert", "aria-label": e }, t)
        )
    );
}
var uo = {
    base: "fal3",
    input: "fal3 fa2hs",
    textarea: "fal3 fa2hs fad6",
    readonly: "fal3 fa2hs fa323",
    field: "fa1vk",
    fieldError: "fa1vk fa1du",
    hint: "faiw",
},
    ho = {
        error: "Bmph8",
        title: "Bmp16t",
        rejected: "Bmp1fm",
        content: "Bmp2pa",
        exitActive: "Bmp102",
        enterActive: "Bmp64",
        enter: "Bmp25l",
        exit: "Bmpc0",
    };
function po({ styles: t, error: e, errorMessage: s, name: n = "form" }) {
    const i = t || ho,
        r = g();
    let l = s;
    const c = {
        enter: i.enter,
        enterActive: i.enterActive,
        exit: i.exit,
        exitActive: i.exitActive,
    };
    return (
        !l &&
        e &&
        (l = (function (t) {
            if (t instanceof Ii) {
                if (t.reasons) {
                    if (t.reasons.__all__) return t.reasons.__all__;
                    const e =
                        t.reasons.length && t.reasons[t.reasons.length - 1].message;
                    if (e) return e;
                }
                return "Please fix the errors and try again";
            }
            return (
                t.message || "Oops, something went wrong. Please try again later"
            );
        })(e)),
        o(() => {
            r.current.scrollIntoView && r.current.scrollIntoView();
        }, [l]),
        e instanceof Pi && e.action
            ? a(
                M,
                { component: "div", className: i.error, ref: r },
                e &&
                a(
                    O,
                    { animationStyles: c, timeout: 300 },
                    a(
                        "div",
                        { className: i.rejected, key: "error" },
                        a(
                            "span",
                            { className: i.content, role: "alert", "aria-label": n },
                            "Your actions appear suspicious. We will reject any attempt to ".concat(
                                e.action,
                                " within the next twenty four hours. "
                            ),
                            "Please contact ",
                            a(
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
            : a(
                M,
                { component: "div", className: i.error, ref: r },
                l &&
                a(
                    O,
                    { animationStyles: c, timeout: 300 },
                    a(
                        "div",
                        { className: i.title, key: "error" },
                        a(
                            "span",
                            { className: i.content, role: "alert", "aria-label": n },
                            l
                        )
                    )
                )
            )
    );
}
const mo = f((t, e) => {
    const n = t.styles || uo,
        {
            type: i,
            name: o,
            error: r,
            defaultValue: l,
            label: c,
            placeholder: d,
            readonly: u,
            autocomplete: h,
        } = t,
        { popup: p, errorStyles: m, onChange: g } = t,
        [f, y] = s(l),
        v = t.error && io(r, o);
    return a(
        "label",
        { className: v ? n.fieldError : n.field },
        p
            ? a(po, { styles: m, errorMessage: v, name: o })
            : a("div", { className: n.hint }, c),
        !p && a(co, { name: o, errorMessage: v }),
        u && a("div", { className: n.readonly, name: o }, l),
        !u &&
        "textarea" === i &&
        a("textarea", {
            name: o,
            placeholder: d,
            onChange: t => {
                y(t.target.value), g && g(t);
            },
            className: n.textarea,
            autoComplete: h || "on",
            ref: e,
        }),
        !u &&
        "textarea" !== i &&
        a("input", {
            type: i,
            name: o,
            value: f,
            placeholder: d,
            onChange: t => {
                y(t.target.value), g && g(t);
            },
            autoComplete: h || "on",
            className: n.input,
            ref: e,
        })
    );
});
var go = {
    wrapper: "B8y7s",
    header: "B8y2e0",
    loader: "B8y3",
    title: "B8y27h",
    headerTrack: "B8yek",
    annotation: "B8yzm",
    annotationContent: "B8y2sx",
    message: "B8y1ey",
    datename: "B8y1e8",
    deleteSplitter: "B8y2ql",
    removeBtn: "B8ywq",
    notification: "B8y2r",
    notificationText: "B8y16p",
    removeActions: "B8y1mu",
    link: "B8y1kn",
    addForm: "B8y1zg",
    textarea: "B8y3e",
    addActions: "B8ys5",
    authActions: "B8yd5",
    motto: "B8y2t3",
    signupText: "B8y8h",
    scroller: "B8y32t",
    alert: "B8y1wg",
    errorTitle: "Bmp16t B8y2e1",
},
    fo = {
        error: "B482tq",
        title: "B481im",
        rejected: "B482xk",
        content: "B482oe",
        exitActive: "B48fa",
        enterActive: "B481ms",
        enter: "B4831f",
        exit: "B481h7",
    },
    yo = {
        exitActive: "fyhd",
        enterActive: "fy100",
        enter: "fycc",
        exit: "fy2ir",
    };
const vo = () =>
    a(
        "svg",
        { width: "10", height: "12" },
        a("path", {
            d: "M9.4 2.3l-.7 8.3c-.1.8-.8 1.4-1.6 1.4H2.9c-.8 0-1.5-.6-1.6-1.4L.6 2.3zM3 3.8c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.4 7.1c0 .2.2.3.3.3.2 0 .4-.1.4-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.1 7.1c0 .2.1.3.3.3.2 0 .3-.1.3-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l-.3 7.1c0 .2.2.3.4.3.1 0 .3-.1.3-.3zm2.2-2H0C0 1.3.3.9.8.9h2.4c.1-.5.4-.9.8-.9h1.8c.5 0 .9.4 1 .9h2.5c.4 0 .7.4.7.9z",
        })
    ),
    bo = ({ onClick: t, id: e, width: s = 11, height: n = 11 }) =>
        a(
            "button",
            { className: "u2o7", onClick: t },
            a(
                "svg",
                {
                    width: s,
                    height: n,
                    viewBox: "0 0 11 11",
                    "aria-labelledby": "".concat(e, "-close"),
                },
                a("title", { id: "".concat(e, "-close") }, "Close"),
                a("path", { d: "M1 1l9 9m-9 0l9-9" })
            )
        );
function wo(t) {
    return (t.current && t.current.tracks && t.current.tracks[t.partId]) || null;
}
const xo = Object.assign({}, ho, fo, { title: go.errorTitle });
class So extends c {
    __init() {
        this.message = p();
    }
    constructor(t) {
        super(t),
            So.prototype.__init.call(this),
            So.prototype.__init2.call(this),
            So.prototype.__init3.call(this),
            So.prototype.__init4.call(this),
            So.prototype.__init5.call(this),
            (this.state = {
                error: null,
                processing: !1,
                notifyProcessing: !1,
                notificationId: 0,
            }),
            (this.keyMap = { space: this.onClose });
    }
    componentDidMount() {
        window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
    }
    componentWillUnmount() {
        this.setState({ notificationId: 0, error: null }),
            window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
    }
    __init2() {
        this.addAnnotation = async t => {
            t.preventDefault();
            const e = this.message.current;
            if (!e) throw new Error("Wrong textarea value state");
            try {
                oo([{ field: e, validator: Ji }]),
                    this.setState({ processing: !0, error: null });
                const t = this.props.annotations.measure,
                    { meta: s, user: n } = this.props;
                await (async function (
                    t,
                    { meta: e, user: s, message: n, measure: i }
                ) {
                    const o = {
                        revisionId: e.current ? e.current.revisionId : 0,
                        partId: e.partId,
                        personId: s.profile.id,
                        personName: s.profile.name,
                        measure: i,
                        message: n,
                    };
                    t("annotations/submit", {
                        annotation: await (async function (t) {
                            const e = new FormData();
                            e.append("revisionId", t.revisionId.toString()),
                                e.append("partId", t.partId.toString()),
                                e.append("measure", t.measure.toString()),
                                e.append("message", t.message);
                            const s = await fetch("/api/annotation", {
                                method: "post",
                                credentials: "include",
                                body: e,
                            });
                            await zi(s), Bi(s);
                            const n = await s.json();
                            return Object.assign({}, t, n);
                        })(o),
                    });
                })(this.props.dispatch, {
                    meta: s,
                    user: n,
                    message: e.value,
                    measure: t,
                }),
                    this.setState({ processing: !1, error: null }),
                    (e.value = "");
            } catch (t) {
                console.error(t), this.setState({ error: t, processing: !1 });
            }
        };
    }
    __init3() {
        this.toggleNotification = (t = 0) => {
            this.setState({ notificationId: t });
        };
    }
    __init4() {
        this.removeAnnotation = async t => {
            t.preventDefault();
            try {
                if (
                    (this.setState({ notifyProcessing: !0, error: null }),
                        this.state.notificationId)
                ) {
                    const t = this.props.annotations.measure,
                        { notificationId: e } = this.state,
                        { meta: s, user: n } = this.props;
                    await (async function (t, { meta: e, user: s, id: n, measure: i }) {
                        const o = {
                            partId: e.partId,
                            revisionId: e.current ? e.current.revisionId : 0,
                            personId: s.profile.id,
                            id: n,
                            measure: i,
                        };
                        await (async function (t) {
                            const e = "/api/annotation/".concat(t),
                                s = await fetch(e, {
                                    method: "delete",
                                    credentials: "include",
                                });
                            return await zi(s), { annotationRemoved: !!s.ok };
                        })(n),
                            t("annotations/remove", { form: o });
                    })(this.props.dispatch, { meta: s, user: n, id: e, measure: t });
                }
                this.setState({ notifyProcessing: !1, error: null, notificationId: 0 });
            } catch (t) {
                console.error(t), this.setState({ error: t, notifyProcessing: !1 });
            }
        };
    }
    __init5() {
        this.onClose = t => {
            t.preventDefault(), this.props.dispatch("layer/hide");
        };
    }
    render() {
        const { annotations: t, meta: e } = this.props,
            s = wo(e);
        if (!s) return;
        const n = (t.parts && t.parts[s.partId]) || [];
        if (!n) return;
        const i = this.props.annotations.measure,
            { isLoggedIn: o, profile: r, isAdmin: l } = this.props.user,
            { notificationId: c } = this.state,
            d = s.name + " " + s.instrument,
            u = [
                o &&
                a(
                    "section",
                    { "data-section": "submit", key: "submit" },
                    a(
                        "form",
                        {
                            noValidate: !0,
                            onSubmit: this.addAnnotation,
                            className: go.addForm,
                        },
                        a(po, {
                            styles: xo,
                            error:
                                this.state.error &&
                                    "ValidationError" === this.state.error.name
                                    ? null
                                    : this.state.error,
                        }),
                        a(mo, {
                            ref: this.message,
                            name: "message",
                            type: "textarea",
                            error: this.state.error,
                            placeholder:
                                "Save and share your tips, findings and resources useful for learning this bar.",
                            styles: go,
                            errorStyles: xo,
                            popup: !0,
                        }),
                        a(
                            "div",
                            { className: go.addActions },
                            a(ro, {
                                id: "addAnnotation",
                                title: "Add comment",
                                processing: this.state.processing,
                                width: 10,
                                height: 10,
                            })
                        )
                    )
                ),
                !o &&
                a(
                    "section",
                    {
                        className: go.authActions,
                        "data-section": "welcome",
                        key: "welcome",
                    },
                    a("p", { className: go.motto }, "Have some thoughts?"),
                    a("p", { className: go.motto }, "Share them with community!"),
                    a(
                        "p",
                        { className: go.signupText },
                        "Please ",
                        a(Un, { to: "/a/wa/signin" }, "sign up"),
                        " to comment on this tab."
                    )
                ),
            ],
            h = a(
                "section",
                { "data-section": "annotations" },
                n[i] &&
                n[i].map(t =>
                    a(
                        "div",
                        { className: go.annotation, key: t.id },
                        a(
                            M,
                            null,
                            o &&
                            t.id === c &&
                            a(
                                O,
                                { animationStyles: yo, timeout: { enter: 1e3, exit: 300 } },
                                a(
                                    "form",
                                    {
                                        className: go.notification,
                                        onSubmit: this.removeAnnotation,
                                    },
                                    a(
                                        "div",
                                        { className: go.notificationText },
                                        "Delete the comment?"
                                    ),
                                    a(
                                        "div",
                                        { className: go.removeActions },
                                        a(ro, {
                                            id: "removeAnnotation",
                                            title: "Yes",
                                            processing: this.state.notifyProcessing,
                                            width: 10,
                                            height: 10,
                                        }),
                                        a(
                                            "button",
                                            {
                                                className: j.popupButtonBlueSmall,
                                                onClick: this.toggleNotification,
                                                disabled: this.state.notifyProcessing,
                                                type: "button",
                                            },
                                            "No"
                                        )
                                    )
                                )
                            )
                        ),
                        a(
                            "div",
                            { className: go.annotationContent },
                            a(Ti, { styles: go }, t.message),
                            a(
                                "div",
                                { className: go.datename },
                                "".concat(t.dateAdded, " by ").concat(t.personName)
                            )
                        ),
                        o &&
                        (r.id === t.personId || l) &&
                        a("div", { className: go.deleteSplitter }),
                        o &&
                        (r.id === t.personId || l) &&
                        a(
                            "button",
                            {
                                className: go.removeBtn,
                                onClick: this.toggleNotification.bind(this, t.id),
                            },
                            a(vo, null),
                            a("span", null, "Delete")
                        )
                    )
                )
            );
        return a(
            "div",
            { className: go.wrapper },
            a(
                "header",
                { className: go.header, key: "header" },
                a(
                    "div",
                    { className: go.title },
                    a("strong", { className: go.marker }, i),
                    a("span", { className: go.headerBar }, "Bar"),
                    a(bo, { onClick: this.onClose, id: "annotation" })
                ),
                a("div", { className: go.headerTrack }, d)
            ),
            a(
                "div",
                { className: go.scroller },
                t.loading &&
                a(
                    "div",
                    { className: go.loader },
                    a(ao, { width: 30, height: 30, fill: "#fff" })
                ),
                t.isFailed &&
                a("h4", { className: go.alert }, "Failed to load annotations"),
                h,
                u
            )
        );
    }
}
var Co = k(So, "user", "meta", "annotations"),
    ko = {
        exitActive: "Bqpmo",
        enterActive: "Bqpfs",
        enter: "Bqpb3",
        exit: "Bqp13z",
    };
function No(t) {
    "requestIdleCallback" in window
        ? window.requestIdleCallback(t, { timeout: 500 })
        : setTimeout(t, 0);
}
const Lo = t => new Promise(e => setTimeout(e, t)),
    To = {
        animationStyles: {
            exitActive: "B0d135",
            enterActive: "B0drd",
            enter: "B0d1ix",
            exit: "B0d2y8",
        },
    };
function Io(t) {
    return e => e === t;
}
const _o = b && "ontouchstart" in window;
function Eo(t, e) {
    const { position: s } = t;
    Ee(s, e.position) || e.moveCursor(s);
}
class Po extends c {
    constructor(t) {
        super(t),
            Po.prototype.__init.call(this),
            Po.prototype.__init2.call(this),
            Po.prototype.__init3.call(this),
            Po.prototype.__init4.call(this),
            Po.prototype.__init5.call(this),
            Po.prototype.__init6.call(this),
            Po.prototype.__init7.call(this),
            Po.prototype.__init8.call(this),
            Po.prototype.__init9.call(this),
            Po.prototype.__init10.call(this),
            Po.prototype.__init11.call(this);
        const e = t.part,
            s = t.width,
            n = new Bt(s);
        (this.state = {
            model: new Pt(e, n, fi),
            mirrorWidth: s,
            mirrorPart: e,
            mirrorPosition: t.position,
            position: t.position,
            loopStartLayout: null,
            loopStartX: 0,
            loopEndLayout: null,
            loopEndX: 0,
            deltaLeftX: 0,
            deltaRightX: 0,
            pageX: 0,
            pageY: 0,
            clientHeight: 0,
            scale: 1,
            isPitchshiftToStandard: !1,
        }),
            (this.lastTouch = null),
            (this.activeLoopHandle = void 0),
            (this.onTouchMoveTickId = void 0),
            (this.windowScroller = new zn());
    }
    componentDidMount() {
        if (
            (this.props.print ||
                (0 === this.props.position.loopStart &&
                    0 === this.props.position.loopEnd) ||
                Eo(this.state, this.props),
                Ni)
        ) {
            const t = this.wrap;
            t &&
                (t.addEventListener(
                    "touchstart",
                    this.onTouchStart,
                    !!window.PASSIVE && { passive: !1 }
                ),
                    t.addEventListener("mousedown", this.onTouchStart));
        }
        window.addEventListener("resize", he(this.onResize, 250)),
            requestAnimationFrame(() => this.onResize()),
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
            );
    }
    componentDidUpdate(t) {
        (0 === this.props.position.loopStart &&
            0 === this.props.position.loopEnd) ||
            Eo(this.state, this.props),
            (this.props.part === t.part && this.props.width === t.width) ||
            requestAnimationFrame(() => this.onResize());
    }
    componentWillUnmount() {
        this.windowScroller.unmount(),
            window.hotKeysManager.unbindMeta(
                "shift+right",
                this.handleShiftLoopRight,
                "onTab"
            ),
            window.hotKeysManager.unbindMeta(
                "shift+left",
                this.handleShiftLoopLeft,
                "onTab"
            ),
            window.hotKeysManager.unbindMeta(
                "shift+down",
                this.handleShiftLoopRight,
                "onTab"
            ),
            window.hotKeysManager.unbindMeta(
                "shift+up",
                this.handleShiftLoopLeft,
                "onTab"
            );
    }
    static getDerivedStateFromProps(t, e) {
        const s = t.part,
            n = t.width,
            i = s !== e.mirrorPart || n !== e.mirrorWidth,
            o = new Bt(n),
            a = i ? new Pt(s, o, fi) : e.model;
        let r = e.position;
        Ee(e.mirrorPosition, t.position) || (r = t.position);
        let l = e.loopStartLayout,
            c = e.loopStartX,
            d = !1,
            u = e.loopEndLayout,
            h = e.loopEndX,
            p = !1;
        const { tuning: m, instrumentId: g } = s,
            f = m && mn(g, m);
        let y = !1;
        return (
            (q(g) || U(g)) && f && 0 !== f.pitch && (y = !0),
            0 !== r.loopStart || 0 !== r.loopEnd
                ? ((!i && l && -1 !== l.occurrences.findIndex(Io(r.loopStart))) ||
                    ((l = Ut(s, r.loopStart, "left")),
                        (c = l.absoluteLoopLeftX),
                        (d = !0)),
                    (!i &&
                        u &&
                        -1 !== u.occurrences.findIndex(Io(r.loopEnd - u.duration))) ||
                    ((u = Ut(s, r.loopEnd, "right")),
                        (h = u.absoluteLoopRightX),
                        (p = !0)),
                    (d || p) && (r = Gt(s, r.cursor, l, u)))
                : ((l = null), (c = 0), (u = null), (h = 0)),
            {
                model: a,
                mirrorWidth: n,
                mirrorPart: s,
                mirrorPosition: t.position,
                position: r,
                loopStartLayout: l,
                loopStartX: c,
                loopEndLayout: u,
                loopEndX: h,
                isPitchshiftToStandard: y,
            }
        );
    }
    __init() {
        this.onResize = () =>
            this.setState((t, e) => {
                const { body: s, documentElement: n } = document,
                    i = this.wrap;
                if (i && s && n) {
                    const t = i.getBoundingClientRect(),
                        o = t.left + 15 + s.scrollLeft + n.scrollLeft,
                        a =
                            t.top +
                            0 +
                            (window.visualViewport
                                ? window.visualViewport.pageTop
                                : document.body.scrollTop + document.documentElement.scrollTop);
                    return {
                        scale: t.width / (e.width + 30),
                        pageX: o,
                        pageY: a,
                        clientHeight: window.visualViewport
                            ? window.visualViewport.height
                            : document.documentElement.clientHeight,
                    };
                }
                return null;
            });
    }
    __init2() {
        this.onTouchStart = t => {
            if (_o && "mousedown" === t.type) return;
            const e = t.target && t.target.getAttribute("data-annot-num");
            if (
                null !=
                (t.target.parentElement &&
                    t.target.parentElement.getAttribute("data-tab-button")) ||
                null != e
            )
                return;
            if (this.props.layer)
                return (
                    this.props.hideLayer(), t.preventDefault(), void t.stopPropagation()
                );
            const s =
                t.target.parentElement &&
                t.target.parentElement.getAttribute("data-loop-handle"),
                n = this.getTouchPoint(t);
            if (((this.lastTouch = n), "left" === s || "right" === s)) {
                if (
                    (t.preventDefault(),
                        t.stopPropagation(),
                        this.props.startLoopChange(),
                        (this.activeLoopHandle = s),
                        "left" === this.activeLoopHandle
                            ? this.setState(t => ({ deltaLeftX: t.loopStartX - n.x }))
                            : this.setState(t => ({ deltaRightX: t.loopEndX - n.x })),
                        !this.onTouchMoveTickId)
                ) {
                    const t = window.requestAnimationFrame;
                    this.onTouchMoveTickId = t(this.onTouchMoveTick);
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
    }
    __init3() {
        this.onTouchMove = t => {
            t.preventDefault(),
                t.stopPropagation(),
                (this.lastTouch = this.getTouchPoint(t));
        };
    }
    limitX(t) {
        return Math.min(Math.max(t, 0), this.props.width - 1);
    }
    __init4() {
        this.ensureLineVisibility = (t, e, s) =>
            No(() => {
                const {
                    showPitchshiftLayer: n,
                    isSmallScreen: i,
                    isLandscapeScreen: o,
                } = this.props,
                    a = window.visualViewport
                        ? window.visualViewport.pageTop
                        : window.scrollY,
                    r = this.state.scale,
                    l = i && !o ? 48 : 0,
                    c = i && !o ? 48 : 0,
                    d = a - this.state.pageY + l,
                    u = a - this.state.pageY + this.state.clientHeight - c,
                    h = u - d,
                    p = e.line.index,
                    m = this.state.model.lines;
                if (t && (t.maxY * r < d || u < t.y * r)) return;
                let g = a;
                const { loopStartLayout: f, loopEndLayout: y } = this.state;
                if (n) g = 0;
                else if (f && y) {
                    let t = e.y * r - d;
                    if (t < 0) g = a + t;
                    else if (
                        ((t = u - e.maxY * r),
                            t < 0 && (g = a - t),
                            p < y.measureLayout.lineLayout.line.index)
                    ) {
                        const s = m[p + 1];
                        if (s) {
                            const n = e.y,
                                i = s.layout.maxY;
                            (i - n) * r < h && ((t = u - i * r), t < 0 && (g = a - t));
                        }
                    }
                } else if (0 === p) g = 0;
                else if (((g = e.y * r + this.state.pageY - l), p < m.length - 1)) {
                    const t = m[p - 1],
                        e = m[p + 1];
                    if (t && e) {
                        const s = t.layout.y;
                        (e.layout.maxY - s) * r < h && (g = s * r + this.state.pageY - l);
                    }
                }
                g !== a && this.windowScroller.scroll(g, s, a);
            });
    }
    __init5() {
        this.onTouchMoveTick = () => {
            this.lastTouch &&
                this.setState(t => {
                    const e = this.lastTouch;
                    if (!e) throw new Error("Wrong state during touch move");
                    const s = {
                        position: t.position,
                        loopStartX: t.loopStartX,
                        loopStartLayout: t.loopStartLayout,
                        loopEndX: t.loopEndX,
                        loopEndLayout: t.loopEndLayout,
                    };
                    {
                        const { loopStartLayout: n, loopEndLayout: i } = s;
                        if (!n || !i) throw new Error("Wrong loop state");
                        if ("left" === this.activeLoopHandle) {
                            const o = { x: this.limitX(e.x + t.deltaLeftX), y: e.y },
                                a = Wt(this.state.model, o, "left");
                            a.stringY < i.stringY ||
                                (a.stringY === i.stringY && o.x <= i.absoluteLoopLeftX)
                                ? ((s.loopStartLayout = a), (s.loopStartX = o.x))
                                : ((s.loopStartLayout = s.loopEndLayout),
                                    (s.loopStartX = n.absoluteLoopLeftX));
                        } else {
                            const o = { x: this.limitX(e.x + t.deltaRightX), y: e.y },
                                a = Wt(this.state.model, o, "right");
                            a.stringY > n.stringY ||
                                (a.stringY === n.stringY && o.x >= n.absoluteLoopRightX)
                                ? ((s.loopEndLayout = a), (s.loopEndX = o.x))
                                : ((s.loopEndLayout = s.loopStartLayout),
                                    (s.loopEndX = i.absoluteLoopRightX));
                        }
                    }
                    {
                        const { loopStartLayout: e, loopEndLayout: n } = s;
                        if (e && n && (e !== t.loopStartLayout || n !== t.loopEndLayout)) {
                            const t = Gt(
                                this.props.part,
                                s.position.cursor,
                                e,
                                n,
                                this.activeLoopHandle
                            ),
                                i = s.position;
                            (i.cursor === t.cursor &&
                                i.loopStart === t.loopStart &&
                                i.loopEnd === t.loopEnd) ||
                                (s.position = t);
                        }
                    }
                    return (this.lastTouch = null), s;
                });
            const t = window.requestAnimationFrame;
            this.onTouchMoveTickId = t(this.onTouchMoveTick);
        };
    }
    __init6() {
        this.onTouchEnd = t => {
            if (this.activeLoopHandle)
                document.removeEventListener("touchmove", this.onTouchMove),
                    document.removeEventListener("mousemove", this.onTouchMove),
                    t.preventDefault(),
                    this.onTouchMoveTickId &&
                    cancelAnimationFrame(this.onTouchMoveTickId),
                    (this.onTouchMoveTickId = void 0),
                    (this.activeLoopHandle = void 0),
                    this.setState(
                        t => (
                            this.props.moveCursor(this.state.position),
                            this.props.finishLoopChange(),
                            {
                                loopStartX: t.loopStartLayout
                                    ? t.loopStartLayout.absoluteLoopLeftX
                                    : 0,
                                loopEndX: t.loopEndLayout
                                    ? t.loopEndLayout.absoluteLoopRightX
                                    : 0,
                            }
                        )
                    );
            else {
                const n = this.getTouchPoint(t);
                (e = this.lastTouch),
                    (s = n),
                    (e ? Math.abs(s.x - e.x) + Math.abs(s.y - e.y) : 0) < 7 &&
                    (t.preventDefault(),
                        this.setState(t => {
                            const e = {
                                position: t.position,
                                loopStartX: t.loopStartX,
                                loopStartLayout: t.loopStartLayout,
                                loopEndX: t.loopEndX,
                                loopEndLayout: t.loopEndLayout,
                            },
                                s = Wt(t.model, n);
                            if (
                                0 === this.props.position.loopStart &&
                                0 === this.props.position.loopEnd
                            )
                                e.position = { cursor: s.leftTime, loopStart: 0, loopEnd: 0 };
                            else {
                                const t = s.leftTime,
                                    n = s.rightTime;
                                if (e.position.loopStart <= t && t < e.position.loopEnd)
                                    e.position = {
                                        cursor: t,
                                        loopStart: e.position.loopStart,
                                        loopEnd: e.position.loopEnd,
                                    };
                                else if (e.position.loopStart <= n && n < e.position.loopEnd)
                                    e.position = {
                                        cursor: n,
                                        loopStart: e.position.loopStart,
                                        loopEnd: e.position.loopEnd,
                                    };
                                else {
                                    const n = s.measureLayout.measure.beatsLayouts;
                                    (e.loopStartLayout = n[0]),
                                        (e.loopEndLayout = n[n.length - 1]),
                                        (e.loopStartX = e.loopStartLayout.absoluteLoopLeftX),
                                        (e.loopEndX = e.loopEndLayout.absoluteLoopRightX),
                                        (e.position = {
                                            cursor: t,
                                            loopStart: e.loopStartLayout.loopLeftTime,
                                            loopEnd: e.loopEndLayout.firstLoopRightTime,
                                        });
                                }
                            }
                            return this.props.moveCursor(e.position), e;
                        })),
                    (this.lastTouch = null);
            }
            var e, s;
            document.removeEventListener("touchend", this.onTouchEnd),
                document.removeEventListener("mouseup", this.onTouchEnd);
        };
    }
    getTouchPoint(t) {
        const e = t.changedTouches ? t.changedTouches[0] : t;
        return {
            x: (e.pageX - this.state.pageX) / this.state.scale,
            y: (e.pageY - this.state.pageY) / this.state.scale,
        };
    }
    __init7() {
        this.handleShiftLoopRight = t => {
            t.preventDefault(), t.stopPropagation();
            const {
                loopEndLayout: e,
                position: { cursor: s, loopStart: n, loopEnd: i },
                model: o,
            } = this.state;
            if (0 === i) return;
            const a = e.measureLayout.measure.index,
                r = e.measureLayout.lineLayout.line,
                l = r.measures.length;
            let c, d;
            if (a === r.measures[l - 1].index) {
                if (!o.lines[r.index + 1]) return;
                const t = o.lines[r.index + 1].measures[0].beatsLayouts;
                i < t[0].loopLeftTime
                    ? ((d = t[0]), (c = d.loopLeftTime))
                    : ((d = t[t.length - 1]), (c = d.firstLoopRightTime));
            } else {
                let t;
                for (let e = 0; e < l; e++)
                    if (r.measures[e].index === a) {
                        t = r.measures[e + 1];
                        break;
                    }
                const e = t.beatsLayouts;
                i < e[0].loopLeftTime
                    ? ((d = e[0]), (c = d.loopLeftTime))
                    : ((d = e[e.length - 1]), (c = d.firstLoopRightTime));
            }
            const u = { cursor: s, loopStart: n, loopEnd: c };
            this.setState({
                position: u,
                loopEndLayout: d,
                loopEndX: d.absoluteLoopRightX,
            });
            const h = d.measureLayout.lineLayout.line.index,
                p = o.lines[h > 0 ? h - 1 : 0].layout.y;
            this.windowScroller.scroll(p, !1);
        };
    }
    __init8() {
        this.handleShiftLoopLeft = t => {
            t.preventDefault(), t.stopPropagation();
            const {
                loopStartLayout: e,
                loopEndLayout: s,
                position: { cursor: n, loopStart: i, loopEnd: o },
                model: a,
            } = this.state;
            if (0 === o) return;
            if (e.measureLayout.measure.index === s.measureLayout.measure.index)
                return;
            const r = s.measureLayout.measure,
                l = r.index,
                c = s.measureLayout.lineLayout.line.measures;
            let d, u, h;
            for (let t = 0; t < c.length; t++)
                if (c[t].index === l) {
                    h = c[t - 1];
                    break;
                }
            const p = r.beatsLayouts;
            if (
                (o > p[0].loopLeftTime
                    ? ((u = p[0]), (d = p[0].loopLeftTime))
                    : ((u = h.beatsLayouts[0]), (d = h.beatsLayouts[0].loopLeftTime)),
                    d < n)
            )
                return;
            const m = { cursor: n, loopStart: i, loopEnd: d };
            this.setState({
                position: m,
                loopEndLayout: u,
                loopEndX: u.absoluteLoopRightX,
            });
            const g = u.measureLayout.lineLayout.line.index,
                f = a.lines[g > 0 ? g - 1 : 0].layout.y;
            this.windowScroller.scroll(f, !1);
        };
    }
    __init9() {
        this.refWrap = t => {
            this.wrap = t;
        };
    }
    __init10() {
        this.refMain = t => {
            this.tab = t;
        };
    }
    __init11() {
        this.refTuning = t => {
            this.tuningButton = t;
        };
    }
    render() {
        const {
            loopStartLayout: t,
            loopEndLayout: e,
            loopStartX: s,
            loopEndX: n,
            isPitchshiftToStandard: i,
        } = this.state,
            { lines: o, height: r, slicingMode: l } = this.state.model,
            {
                part: c,
                plusAccess: u,
                isFullscreen: h,
                isSmallScreen: p,
                handlePitchshift: m,
                showPitchshiftPopup: g,
                showPitchshiftLayer: f,
                tuning: y,
                layer: v,
                hideLayer: w,
            } = this.props,
            x = this.props.width + 30,
            S = "-".concat(14.5, " -0.5 ").concat(x, " ").concat(r),
            C = o[0].layout.layers.height,
            k = !u;
        return a(
            d,
            null,
            a(
                "section",
                {
                    className: u
                        ? h
                            ? "Hdoi Hd2ur"
                            : "Hdoi"
                        : h
                            ? "Hdoi Hd2ur Hd1fb"
                            : "Hdoi Hd2n2",
                    id: "tablature",
                    "data-id": u ? "Print--plus" : "Print--free",
                    role: "application",
                    key: "main",
                    ref: this.refMain,
                },
                a(xn, { layer: v, hideLayer: w }),
                a(bn, { part: c, lines: o, tuning: y, slicingMode: l, lazy: k }),
                a(
                    Re,
                    null,
                    Ni &&
                    a(Dn, {
                        scale: this.state.scale,
                        part: c,
                        lines: o,
                        ensureLineVisibility: this.ensureLineVisibility,
                    }),
                    a(
                        "svg",
                        {
                            width: x,
                            viewBox: S,
                            ref: this.refWrap,
                            className: "Hdq5",
                            preserveAspectRatio: "xMidYMid meet",
                            id: "handler",
                        },
                        Ni && t && e && a(jn, { leftLayout: t, rightLayout: e, lines: o }),
                        Ni && t && a(On, { x: s, layout: t, handle: "left" }),
                        Ni && e && a(On, { x: n, layout: e, handle: "right" }),
                        b && this.props.showAnnotations && a(je, { lines: o, part: c }),
                        !p &&
                        c.tuning &&
                        a(wn, {
                            reference: this.refTuning,
                            firstLineLayoutHeigth: C,
                            handlePitchshift: m,
                            isPitchshiftToStandard: i,
                            isActive: g || f,
                        })
                    )
                ),
                a(
                    M,
                    null,
                    "annotation" === v &&
                    a(
                        O,
                        { animationStyles: ko, timeout: 400, key: "annotation_feed" },
                        a(
                            "aside",
                            { className: "Hd1sk", id: "annotationFeed" },
                            a(Co, { part: c })
                        )
                    ),
                    !p &&
                    g &&
                    a(
                        O,
                        Object.assign({}, To, { key: "popup" }),
                        a(di, { tab: this.tab, tuningButton: this.tuningButton })
                    ),
                    !p &&
                    f &&
                    a(
                        O,
                        Object.assign({}, To, { key: "layer" }),
                        a(Nn, {
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
class Ao extends c {
    render() {
        const t = new Array(7);
        for (let e = 0; e < 7; e++) {
            const s = new Array(5);
            for (let t = 0; t < 5; t++)
                s[t] = a("div", { className: "Bx1gp", key: t + 1 });
            t[e] = a("div", { className: "Bx1ry", key: e + 1 }, s);
        }
        return a("div", { className: "Bx2bg", role: "main" }, t);
    }
}
const Mo =
    "M9 25a2 2 0 0 1-2-2v-5h2v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v3h-2v-5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2z",
    Bo = "M1.5 12.5h15m-4.5 4.5l4.5 -4.5l-4.5-4.5";
function Do({ width: t, height: e, styles: { icon: s, stroke: n } }) {
    return a(
        "svg",
        {
            width: t || 29,
            height: e || 27,
            viewBox: "0 0 29 27",
            className: s,
            "aria-labelledby": "title-signin",
        },
        a("title", { id: "title-signin" }, "Sign In"),
        a("path", { d: Mo }),
        a("path", { className: n, "stroke-width": 2, d: Bo })
    );
}
function Oo() {
    const t = "translate(7 10) scale(1.3)";
    return a(
        "svg",
        { width: 55, height: 55, viewBox: "0 0 55 55" },
        a("path", {
            d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
            fill: "#FFAD00",
        }),
        a("path", { d: Mo, fill: "#FFF", transform: t }),
        a("path", {
            d: Bo,
            stroke: "#FFF",
            "stroke-width": "2",
            fill: "none",
            transform: t,
        })
    );
}
function jo({ onClick: t, id: e }) {
    return a(
        Un,
        {
            className: "oo2w1 I01ls",
            id: e,
            to: "/a/wa/signin",
            onClick: t,
            role: "dialog",
            "aria-label": "Sign up for free to favorite this tab.",
        },
        a("span", { className: "oo1og I02x6" }, a(Oo, null)),
        a(
            "div",
            { className: "oo1jh I01l8" },
            "Please ",
            a("span", { className: "I0155" }, "sign up"),
            " for free",
            a("br", null),
            "to favorite this tab."
        )
    );
}
const Ro =
    "M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
    zo = "".concat(
        Ro,
        "m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z"
    );
function Fo({
    width: t,
    height: e,
    viewbox: s,
    title: n = "Favorite",
    styles: { icon: i },
    id: o,
    state: r,
}) {
    const l = "title-".concat(o || "favorite");
    return a(
        "svg",
        {
            width: t || 29,
            height: e || 27,
            viewBox: s || "0 0 29 27",
            className: i,
            "data-icon": r,
            id: o,
            "aria-labelledby": l,
        },
        a("title", { id: l }, n),
        a("path", { d: "fill" === r ? Ro : zo })
    );
}
function Ho(t) {
    const e = Object.keys(t)
        .filter(e => t[e])
        .map(e =>
            "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
        )
        .join("&");
    return e.length ? "?".concat(e) : "";
}
const qo = t => (
    t.sort((t, e) => {
        const s = t.artist.localeCompare(e.artist);
        return 0 === s ? t.title.localeCompare(e.title) : s;
    }),
    t
);
function Uo(t) {
    try {
        const e = t.tracks;
        if (void 0 === e) return;
        const s = e.filter(t => q(t.instrumentId) && void 0 !== t.difficulty);
        let n = -1;
        void 0 !== t.defaultTrack && q(e[t.defaultTrack].instrumentId)
            ? (t.difficulty = e[t.defaultTrack].difficulty)
            : (s.forEach((t, e) => {
                (-1 === n || (t.views || 0) > (s[n].views || 0)) && (n = e);
            }),
                -1 !== n && (t.difficulty = s[n].difficulty));
    } catch (e) {
        console.error(e), console.log(t);
    }
}
function Vo(t) {
    return t.forEach(Uo), t;
}
async function Go(t, e, s, n, i, o) {
    const a = (function (t, e, s, n) {
        const i = !e.instrument || "GUITAR" === e.instrument,
            o = (e.instrument && e.instrument.toLowerCase()) || void 0,
            a = e.tuning || void 0,
            r =
                (i &&
                    e.difficulty &&
                    (function (t) {
                        switch (t) {
                            case "Advanced":
                                return "2";
                            case "Intermediate":
                                return "1";
                            default:
                                return "0";
                        }
                    })(e.difficulty)) ||
                void 0,
            l = { size: s.toString() };
        return (
            n && (l.from = n.toString()),
            t && (l.pattern = t),
            o && (l.inst = o),
            r && (l.difficulty = r),
            a && (l.tuning = a),
            Ho(l)
        );
    })(e, s, i, o),
        r = await fetch("".concat(t).concat(a), { signal: n, credentials: "omit" });
    if (n && n.aborted) return [];
    Bi(r);
    const l = Vo(await r.json());
    return n && n.aborted ? [] : l;
}
const Xo = { animationStyles: yo };
function Wo() {
    const {
        dispatch: t,
        user: e,
        favorites: s,
        meta: n,
        layer: i,
    } = C("user", "favorites", "meta", "experiments", "layer"),
        o = "favorite" === i.layer,
        r = e.isLoggedIn,
        l = n.partId,
        c =
            r &&
            (n.wasFavoriteOnServerRender ||
                s.favorites.some(t => t.songId === n.songId)),
        d = m(() => {
            if (r && n.current) {
                if (c) t("favorites/delete", n.songId);
                else {
                    const { songId: e, artist: s, title: i, tracks: o } = n.current,
                        a = {
                            songId: e,
                            artist: s,
                            title: i,
                            tracks: o
                                ? o.map(
                                    ({
                                        instrument: t,
                                        instrumentId: e,
                                        name: s,
                                        difficulty: n,
                                        tuning: i,
                                    }) => ({
                                        instrument: t,
                                        instrumentId: e,
                                        name: s,
                                        tuning: i,
                                        difficulty: n,
                                    })
                                )
                                : o,
                            defaultTrack: l,
                        };
                    Uo(a), t("favorites/add", { songId: e, song: a });
                }
                i.layer && t("layer/hide");
            } else o ? t("layer/hide") : t("layer/show", "favorite");
        }, [i, r, c, n, l]);
    return a(
        "div",
        { className: "Bt91tp", id: "favorite" },
        a(
            "button",
            {
                className: "Bt92ck",
                id: "favorite-toggle",
                onClick: d,
                title: c ? "Remove from favorites" : "Add to favorites",
            },
            a(Fo, {
                width: 30,
                height: 30,
                viewbox: "-4 -3 35 35",
                state: c ? "fill" : "none",
                styles: { icon: c ? "Bt9vx Bt91pv" : "Bt9vx" },
                id: "favorite-icon",
            })
        ),
        a(M, null, o && a(O, Xo, a(jo, { id: "favorite-popup" })))
    );
}
function Yo({ styles: t }) {
    return a(
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
        a("title", { id: "revisions-title-id" }, "Revisions"),
        a("path", {
            className: t.strokeAnim,
            "stroke-width": "2",
            d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9",
        }),
        a("path", {
            className: t.stroke,
            "stroke-width": "1.8",
            "stroke-linecap": "round",
            strokeLinejoin: "round",
            d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6",
        }),
        a("path", {
            className: t.fill,
            d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z",
        })
    );
}
const Zo = f((t, e) => {
    const {
        id: n,
        label: i,
        name: r,
        error: l,
        errorStyles: c,
        accept: d,
        popup: u,
        isDropFileAvailable: h,
    } = t,
        [p, f] = s(null),
        y = m(t => {
            const e = t.target.files.length ? t.target.files[0].name : null;
            f(e);
        }, []),
        [v, b] = s(null),
        [w, x] = s(null),
        S = (function (...t) {
            const e = g();
            return (
                o(() => {
                    t.forEach(t => {
                        t &&
                            ("function" == typeof t ? t(e.current) : (t.current = e.current));
                    });
                }, [t]),
                e
            );
        })(e, g(null));
    h &&
        o(() => {
            let t = 0;
            const e = t => {
                t.preventDefault(), t.stopPropagation();
            },
                s = e => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        t++,
                        e.dataTransfer.items && e.dataTransfer.items.length > 0 && b(!0);
                },
                n = e => {
                    e.preventDefault(), e.stopPropagation(), t--, t > 0 || b(!1);
                },
                i = e => {
                    e.preventDefault(),
                        e.stopPropagation(),
                        b(!1),
                        e.dataTransfer.files &&
                        e.dataTransfer.files.length > 0 &&
                        (o(e.dataTransfer.files), e.dataTransfer.clearData(), (t = 0));
                },
                o = t => {
                    try {
                        (S.current.files = t),
                            oo([{ field: S.current, validator: eo }]),
                            x(null),
                            f(t[0].name),
                            (S.current.files = t);
                    } catch (t) {
                        x(t), f(null), (S.current.files = null);
                    }
                };
            return (
                window.addEventListener("dragenter", s),
                window.addEventListener("dragleave", n),
                window.addEventListener("dragover", e),
                window.addEventListener("drop", i),
                () => {
                    window.removeEventListener("dragenter", s),
                        window.removeEventListener("dragleave", n),
                        window.removeEventListener("dragover", e),
                        window.removeEventListener("drop", i);
                }
            );
        }, []);
    const C = io(w || l, r),
        k = a(
            "span",
            {
                className: u
                    ? "fal3 fa2hs fa323 Bxa1r9 Bxamx"
                    : "fal3 fa2hs fa323 Bxa1r9",
                "data-info": "filename",
            },
            p
        ),
        N = a(
            "span",
            {
                className: u ? "Cpb24q Cpb14i Cpb1y5 Bxa1i9" : "Cpb24q Cpb318 Bxa2gt",
                "data-info": "button",
            },
            "".concat(u ? "Upload" : "Choose", " your .gp5 file")
        );
    return a(
        "label",
        { className: u ? "fa1vk Bxa2cr Bxa2sv" : "fa1vk Bxa2cr", "data-input": r },
        u
            ? a(po, { styles: c, errorMessage: C, name: r })
            : i && a("div", { className: "faiw Bxa1r3", "data-label": r }, i),
        a("input", {
            id: n,
            accept: d,
            name: r,
            type: "file",
            ref: S,
            onChange: y,
            className: "Bxa1sh",
        }),
        v &&
        a(
            "div",
            { className: "Bxa29k", "data-id": n },
            a(
                "div",
                { className: "Bxa1bo" },
                a(
                    "svg",
                    { width: "188", height: "100", fill: "none" },
                    a("path", {
                        className: "Bxa1m8",
                        strokeWidth: "4",
                        strokeDasharray: "8 8",
                        d: "M2 2h104v24H82v48H2V2z",
                    }),
                    a(
                        "mask",
                        {
                            id: "a",
                            maskUnits: "userSpaceOnUse",
                            x: "80",
                            y: "24",
                            width: "108",
                            height: "76",
                        },
                        a("path", {
                            fill: "#fff",
                            d: "M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z",
                        })
                    ),
                    a(
                        "g",
                        { mask: "url(#a)" },
                        a("path", {
                            className: "Bxa1m8",
                            strokeWidth: "8",
                            d: "M186 24H82a2 2 0 00-2 2v72c0 1.1.9 2 2 2h104a2 2 0 002-2V26a2 2 0 00-2-2z",
                        }),
                        a("path", {
                            className: "Bxa2j3",
                            d: "M132.02 77H135.98V63.74H149.06V60.2H135.98V46.94H132.02V60.2H118.94V63.74H132.02V77Z",
                        })
                    )
                ),
                a("div", { className: "Bxa6e" }, "Drop GuitarPro file here")
            )
        ),
        !u && a(co, { name: r, errorMessage: C }),
        p ? k : N
    );
});
function Ko(t) {
    const e = true,
        s = t.subscription || null,
        n = "lifetime" === t.sra_license,
        i = !!s && s.isPayPal,
        o = s ? s.startDate : null,
        a = s ? s.cancellationDate : null,
        r =
            o && a
                ? (function (t) {
                    const e = new Date(t);
                    return e.setDate(e.getDate() + 30), new Date(e).toISOString();
                })(a)
                : null;
    return {
        id: +t.id,
        uid: t.uid,
        name: t.name,
        email: t.email,
        admin: t.admin,
        plan: e,
        subscription: s,
        isLegacyPayPal: i,
        isAndroidLifetime: n,
        planStartDate: o,
        planCancelDate: a,
        planEndDate: r,
    };
}
const Qo = "indexedDB" in window;
let Jo;
const $o = (t, e) =>
    (Jo ||
        (Jo = new Promise(function (t, e) {
            const s = window.indexedDB.open("data", 1);
            (s.onerror = t => {
                t.preventDefault(), e(s.error);
            }),
                (s.onupgradeneeded = () => {
                    const t = s.result;
                    (t.onerror = s => {
                        s.preventDefault(), e(t.error);
                    }),
                        t.createObjectStore("revisions");
                }),
                (s.onsuccess = () => t(s.result));
        })),
        Jo)
        .then(
            s =>
                new Promise((n, i) => {
                    const o = s.transaction("revisions", t);
                    (o.oncomplete = () => n()),
                        (o.onerror = () => i(o.error)),
                        e(o.objectStore("revisions"));
                })
        )
        .catch(t => {
            console.log(t);
        });
async function ta(t) {
    if (Qo)
        try {
            let e = null;
            return (
                await $o("readonly", s => {
                    e = s.get(t);
                }),
                e && e.result
            );
        } catch (t) {
            return console.log(t), null;
        }
}
async function ea(t, e) {
    if (Qo)
        try {
            return $o("readwrite", s => {
                s.put(e, t);
            });
        } catch (t) {
            return console.log(t), null;
        }
}
function sa(t) {
    t.name = t.name.replace(/Дорожка/g, "Track");
}
const na = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
    ia = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
async function oa(t, e, s) {
    const n = "/api/meta/".concat(t).concat(e ? "/".concat(e) : ""),
        i = await Ui(() => n, 0, s);
    if (s.aborted || !i) return null;
    if (i.tracks) {
        let t = 0;
        for (const e of i.tracks) {
            sa(e), (e.partId = t);
            const { instrumentId: s } = e;
            H(s)
                ? (e.isDrums = !0)
                : U(s)
                    ? (e.isBassGuitar = !0)
                    : q(s) && (e.isGuitar = !0),
                t++;
        }
    }
    return i;
}
async function aa(t, e, s, n, i) {
    const o = "part_"
        .concat(e, "_")
        .concat(s, "_")
        .concat(n || ""),
        a = await ta(o);
    if (a) return a;
    const r = await Ui(
        i =>
            n
                ? "https://"
                    .concat(na[i % na.length], ".cloudfront.net/")
                    .concat(t, "/")
                    .concat(e, "/")
                    .concat(n, "/")
                    .concat(s, ".json")
                : "https://"
                    .concat(ia[i % ia.length], ".cloudfront.net/part/")
                    .concat(e, "/")
                    .concat(s),
        0,
        i
    );
    return !r || i.aborted ? null : (await ea(o, r), r);
}
async function ra(t, e) {
    let s = 0,
        n = null;
    const i = new Wi();
    for (; !n || s > 120;) {
        try {
            n = await oa(t, e, i.signal);
        } catch (t) {
            console.error(t), await Lo(1e3);
        }
        s++;
    }
    return n;
}
const la = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null,
},
    ca = t => {
        !b && t.on("@init", () => ({ uploads: la })),
            t.on("upload/song:uploaded", (t, { songSubmitted: e, song: s }) => ({
                uploads: Object.assign({}, t.uploads, {
                    songError: null,
                    songSubmitted: e,
                    song: s,
                }),
            })),
            t.on("upload/reset", () => ({ uploads: la })),
            t.on("upload/song:error", (t, { error: e }) => ({
                uploads: Object.assign({}, t.uploads, { songError: e }),
            })),
            t.on(
                "upload/revision:uploaded",
                (t, { revisionSubmitted: e, revision: s }) => ({
                    uploads: Object.assign({}, t.uploads, {
                        revisionError: null,
                        revisionSubmitted: e,
                        revision: s,
                    }),
                })
            ),
            t.on("upload/revision:error", (t, { error: e }) => ({
                uploads: Object.assign({}, t.uploads, { revisionError: e }),
            }));
    };
var da = {
    motto: "pb1bh",
    actions: "ol10l pb9p",
    notes: "pbfy",
    notesWarning: "pbfy pbdr",
    field: "fa1vk pb1on",
    textarea: "pb2nl",
};
const ua = Object.assign({}, fo, { content: "B482oe Cjk2mi" }),
    ha = ({ meta: t }) => {
        const { dispatch: e } = C(),
            n = g(),
            i = g(),
            [o, r] = s(!1),
            [l, c] = s(null),
            [d, u] = s(null),
            [h, p] = s(null),
            f = m(
                s => {
                    s.preventDefault();
                    const o = new Wi();
                    return (
                        (async (s, n, i, o) => {
                            r(!0), c(null);
                            try {
                                oo([
                                    { field: s, validator: Qi },
                                    { field: n, validator: eo },
                                ]);
                                const a = {
                                    file: n.files[0],
                                    summary: s.value,
                                    songId: t.songId.toString(),
                                    force: i,
                                };
                                await (async function (t, e, s) {
                                    try {
                                        const n = await (async function (t, e) {
                                            const s = new FormData();
                                            s.append("file", t.file),
                                                s.append("songId", t.songId),
                                                s.append("summary", t.summary),
                                                t.force && s.append("force", t.force.toString());
                                            const n = await fetch("/api/revision", {
                                                signal: e,
                                                method: "post",
                                                credentials: "include",
                                                body: s,
                                            });
                                            if (e && e.aborted) return;
                                            await Fi(n), await Hi(n);
                                            const i = {
                                                revisionId: +(o = await n.json()).id,
                                                songId: +o.song.id,
                                                artist: o.song.artist.name,
                                                title: o.song.title,
                                            };
                                            var o;
                                            return { revisionSubmitted: !!n.ok, revision: i };
                                        })(e, s);
                                        if (s && s.aborted) return;
                                        if (
                                            (t("upload/revision:uploaded", n), n.revisionSubmitted)
                                        ) {
                                            const e = await ra(
                                                n.revision.songId,
                                                n.revision.revisionId
                                            );
                                            e && t("navigate", vi(e, 0, e.revisionId));
                                        }
                                    } catch (e) {
                                        throw (t("upload/revision:error", { error: e }), e);
                                    }
                                })(e, a, o),
                                    p(null);
                            } catch (t) {
                                t instanceof _i ? (u(!0), p(t)) : (u(!1), c(t));
                            }
                            r(!1);
                        })(i.current, n.current, d, o.signal),
                        o.abort.bind(o)
                    );
                },
                [i, n, d]
            ),
            y = t.tracks && t.tracks.length > 2;
        return a(
            "form",
            { noValidate: !0, className: da.form, onSubmit: f, action: "" },
            a(po, { styles: fo, error: l }),
            a(
                "p",
                { className: da.motto, "aria-label": "motto" },
                "Download the latest revision from the list below, make your edits,",
                a("br", null),
                "save the result and upload it using the form below.",
                y &&
                a(
                    "span",
                    { role: "warning" },
                    a("br", null),
                    "Please make sure to keep all the tracks in the resulting file."
                )
            ),
            a(Zo, {
                id: "revisionFile",
                accept: ".gp3, .gp4, .gp5",
                label: "Upload your .gp5 file",
                ref: n,
                name: "file",
                error: h || l,
                popup: !0,
                errorStyles: h ? ua : fo,
                isDropFileAvailable: !0,
            }),
            a(
                "p",
                { className: da.notes, role: "instructions" },
                "We support only Guitar Pro 3, 4, and 5 files at the moment.",
                a("br", null),
                "If you have GP6/7 (.gpx, .gp) tab, please export it to GP5 version first.",
                a("br", null),
                a(
                    "a",
                    {
                        href: "https://www.guitar-pro.com/en/index.php",
                        rel: "noopener noreferrer",
                        target: "_blank",
                    },
                    "Guitar Pro"
                ),
                ": File → Export → GP5",
                a("br", null),
                a(
                    "a",
                    {
                        href: "https://sourceforge.net/projects/tuxguitar",
                        rel: "noopener noreferrer",
                        target: "_blank",
                    },
                    "TuxGuitar"
                ),
                ": File → Save As → Guitar Pro 5"
            ),
            a(mo, {
                ref: i,
                name: "summary",
                type: "textarea",
                error: l,
                placeholder:
                    "Briefly explain your changes (fixed errors, replaces with whole new version, corrected tempo, etc)",
                styles: da,
                errorStyles: fo,
                popup: !0,
            }),
            a(
                "div",
                { className: da.actions },
                a(ro, {
                    id: h ? "submitRevisionButtonWarning" : "submitRevisionButton",
                    title: d ? "Upload anyway" : "Submit a new revision",
                    processing: o,
                })
            ),
            a(
                "p",
                { className: da.notes },
                "Once processing is complete, we'll send you an email notification,",
                a("br", null),
                "and the site will display the new revision."
            )
        );
    };
function pa() {
    return a(
        "svg",
        { width: 15, height: 8, viewBox: "0 0 15 8" },
        a("path", {
            d: "M8 2.9a1.1 1.1 0 0 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm0 4a2.9 2.9 0 0 1 0-5.8 2.9 2.9 0 0 1 0 5.8zM14.5 3C13.2 2 10.9.3 8 .3S2.8 2 1.5 3c-.9.6-.9 1.4 0 2C2.8 6 5.1 7.7 8 7.7S13.2 6 14.5 5c.9-.6.9-1.4 0-2z",
        })
    );
}
function ma() {
    return a(
        "svg",
        { width: 8, height: 8, viewBox: "0 0 8 8" },
        a("path", { d: "M6 0H2v4H0l4 4L8 4H6V0z" })
    );
}
const ga = ({ revision: t, meta: e, user: s, partId: n }) => {
    const i = !t.tracks,
        o = t.revisionId === e.revisionId,
        r = vi(e, t.tracks ? Math.min(t.tracks - 1, n) : 0, t.revisionId),
        l = new Date(t.date).toLocaleDateString(),
        c = bi("deleteRevision", t.revisionId),
        d = bi("editRevision", t.revisionId),
        u =
            s.isAdmin &&
            a(
                "span",
                { className: "Bo62u2" },
                a("a", { className: "Bo62f2", href: d, target: "_blank" }, "edit"),
                a("a", { className: "Bo62f2", href: c, target: "_blank" }, "delete")
            ),
        h = { className: "Bo62l4", to: r, "aria-label": "action" },
        p = {
            className: "Bo634b",
            href: t.source,
            "aria-label": "download",
            download: !0,
            target: "_blank",
        },
        m = a(
            "span",
            { className: "Bo6wu" },
            !o && a(Un, h, a(pa, null), " view"),
            o && s.isLoggedIn && a("a", p, a(ma, null), " download")
        );
    let g;
    return (
        (g = i ? "Bo629f Bo61lm" : o ? "Bo629f Bo6qu" : "Bo629f"),
        a(
            "li",
            { key: t.revisionId, className: g },
            a("p", { className: "Bo6v9" }, t.summary),
            a(
                "p",
                { className: "Bo6300" },
                "".concat(l, " – by "),
                a("span", { className: "Bo62t7" }, t.person),
                u,
                !i && m
            )
        )
    );
},
    fa = t => {
        !b &&
            t.on("@init", () => ({
                revisions: {
                    revisions: null,
                    isLoading: !0,
                    isError: !1,
                    songId: void 0,
                },
            })),
            t.on("meta/load:processing", (t, { songId: e }) => {
                if (t.revisions.songId && e !== t.revisions.songId)
                    return {
                        revisions: {
                            revisions: null,
                            isLoading: !0,
                            isError: !1,
                            songId: void 0,
                        },
                    };
            }),
            t.on("revisions/load:processing", (t, { songId: e }) => {
                if (t.meta.songId === e)
                    return {
                        revisions: Object.assign({}, t.revisions, {
                            songId: e,
                            revisions: null,
                            isLoading: !0,
                            isError: !1,
                        }),
                    };
            }),
            t.on("revisions/load:done", (t, { revisions: e, songId: s }) => {
                if (t.meta.songId === s)
                    return {
                        revisions: Object.assign({}, t.revisions, {
                            revisions: e,
                            isLoading: !1,
                            isError: !1,
                        }),
                    };
            }),
            t.on("revisions/load:error", (t, { error: e, songId: s }) => {
                if (t.meta.songId === s)
                    return {
                        revisions: Object.assign({}, t.revisions, {
                            revisions: null,
                            isLoading: !1,
                            isError: !0,
                        }),
                    };
            });
    };
const ya = t => ({ height: t - 76 }),
    va = () => {
        const {
            dispatch: t,
            user: e,
            revisions: r,
            uploads: l,
            meta: c,
            screen: d,
        } = C("user", "revisions", "uploads", "meta", "screen"),
            { isLoggedIn: u, isAdmin: h } = e,
            { isLoading: p } = r,
            { revision: m, revisionError: f, revisionSubmitted: y } = l,
            [v, b] = s(ya(d.viewport.height)),
            w = g();
        n(async () => {
            const e = new Wi();
            return (
                await (async function (t, e, s) {
                    try {
                        t("revisions/load:processing", { songId: e }),
                            t("revisions/load:done", {
                                songId: e,
                                revisions: await (async function (t, e) {
                                    const s = "/api/meta/".concat(t, "/revisions");
                                    return await Ui(() => s, 0, e);
                                })(e, s),
                            });
                    } catch (n) {
                        if (s.aborted) return;
                        t("revisions/load:error", { songId: e, error: n });
                    }
                })(t, c.songId, e.signal),
                e.abort.bind(e)
            );
        }, [c.songId]),
            i(() => {
                const t = w.current.scrollHeight,
                    e = ya(d.viewport.height).height,
                    s = Object.assign({}, v, { height: Math.min(t + 107, e) });
                v.height !== s.height && b(s);
            }, [d, w, r, m, l]),
            o(() => t("upload/reset"), []);
        const x = u ? "Submit a new revision" : "Revisions",
            S = u && m && !f,
            k = u && m && m.songId !== c.songId,
            N = k ? "".concat(m.artist, " – ").concat(m.title) : "",
            L = a(
                "section",
                { className: "B7d2cx", "data-section": "welcome" },
                a("p", { className: "B7d26j" }, "Have a better tab for this song?"),
                a("p", { className: "B7d26j" }, "Care to fix the current tab?"),
                a(
                    "p",
                    { className: "B7d26j B7d1sn" },
                    "Submit your corrections for everyone to enjoy!"
                ),
                a(
                    "div",
                    { className: "B7dnt", "aria-label": "auth" },
                    "Please ",
                    a(Un, { "data-link": "signin", to: "/a/wa/signin" }, "sign up"),
                    " to submit a new revision."
                )
            ),
            T = a(
                "section",
                { className: "B7dq0", "data-section": "submit" },
                a(ha, { meta: c.current })
            ),
            I = a(
                "section",
                { className: "B7d2cx", "data-section": "duplicate" },
                a(
                    "p",
                    { className: "B7d26j", "aria-label": "motto" },
                    "Submitted version already exists on Songsterr."
                ),
                !k &&
                a(
                    "p",
                    { className: "B7d26j B7dkb", "aria-label": "info" },
                    "Uploaded file looks exactly like the latest version of this song."
                ),
                k &&
                a(
                    "div",
                    null,
                    a(
                        "p",
                        { className: "B7d26j B7dkb", "aria-label": "info" },
                        "Uploaded file looks like duplicate of ",
                        a("br", null),
                        a(Un, { to: vi(m), "data-link": "duplicate" }, N)
                    )
                )
            ),
            _ = a(
                "section",
                { className: "B7d2cx", "data-section": "success" },
                a(
                    "div",
                    null,
                    a(
                        "p",
                        { className: "B7d26j" },
                        "Thanks for contributing to Songsterr!"
                    ),
                    a(
                        "p",
                        { className: "B7d26j B7dkb" },
                        "We are processing the file and will redirect to a new revision as soon as possible."
                    ),
                    a("div", null, a(ao, { fill: "#fefefe", width: 30, height: 30 }))
                )
            ),
            E = c.current,
            P = a(
                "section",
                { "data-section": "revisions" },
                a(
                    "ul",
                    { className: "B7d12e" },
                    r.revisions &&
                    E &&
                    r.revisions.map(t =>
                        a(ga, {
                            revision: t,
                            meta: E,
                            user: { isLoggedIn: u, isAdmin: h },
                            partId: c.partId,
                            key: t.revisionId,
                        })
                    )
                )
            );
        return a(
            "div",
            { id: "revisions-popup", className: "B7d7m", style: v },
            a("h3", { className: "B7d2ae" }, x),
            a(
                "div",
                { className: "B7dep" },
                a(
                    "div",
                    { className: "B7d1bt", ref: w },
                    !u && L,
                    u && !S && T,
                    S && !y && I,
                    S && y && _,
                    p &&
                    a(
                        "div",
                        { className: "B7d70" },
                        a(ao, {
                            className: "Csr2lv Csr1bt",
                            width: 25,
                            height: 24,
                            fill: "#f7f6ee",
                        })
                    ),
                    !p && P
                )
            ),
            a("div", { className: "B7d345" })
        );
    };
var ba = {
    revisions: "Cqx2uq",
    toggle: "Cqx2e",
    toggleActive: "Cqx2e Cqx33y",
    icon: "Cqx1lw",
    fill: "Cqxq9",
    stroke: "Cqx8s",
    strokeAnim: "Cqx8s Cqx1zx",
};
const wa = { animationStyles: yo },
    xa = () => {
        const { dispatch: t, layer: e } = C("layer"),
            s = "revisions" === e.layer,
            n = m(() => {
                "revisions" === e.layer
                    ? t("layer/hide")
                    : t("layer/show", "revisions");
            }, [e.layer]),
            i = {
                className: s ? ba.toggleActive : ba.toggle,
                id: "revisions-toggle",
                onClick: n,
                title: s ? "Hide revisions" : "Show revisions",
            },
            o = a(va, null);
        return a(
            "div",
            { className: ba.revisions, id: "revisions" },
            a("button", i, a(Yo, { styles: ba })),
            a(M, null, s && a(O, wa, o))
        );
    };
function Sa({ styles: t }) {
    return a(
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
        a("title", { id: "tab-delete-id" }, "Delete Tab"),
        a("path", {
            className: t.strokeAnim,
            d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z",
        }),
        a("path", {
            className: t.fill,
            d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z",
        }),
        a("path", {
            className: t.strokeAnim,
            d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z",
        })
    );
}
var Ca = {
    delete: "Clg1x0",
    button: "Clg2gl",
    buttonActive: "Clg2gl Clg9",
    icon: "Clg1p2",
    fill: "Clg1cq",
    strokeAnim: "Clg1cq Clg2dv",
};
const ka = ({ meta: t }) => {
    const { dispatch: e, user: s, editor: n } = C("user", "editor"),
        i = n.processingDeletion,
        o = m(() => {
            ((t, e) => {
                let s =
                    "You are about to delete the whole song with all its revisions permanently.";
                if (t) return window.confirm(s);
                s += " Please enter the song title to confirm deletion: ".concat(e);
                const n = window.prompt(s);
                return (
                    n === e ||
                    (n && window.alert("Song title does not match. Aborting deletion."),
                        !1)
                );
            })(s.isAdmin, t.title) && e("editor/delete", t);
        }, [e, s, t]);
    return a(
        "div",
        { className: Ca.delete, id: "deletion" },
        i && a(ao, { width: 21, height: 21, fill: "#42a4f8" }),
        !i &&
        a("button", { className: Ca.button, onClick: o }, a(Sa, { styles: Ca }))
    );
};
var Na = {
    title: "Cni2u8",
    line: "Cni1wm",
    toggle: "Cni2ar",
    wrap: "Cni1z1",
    wrapHorizontal: "Cni7i",
    notation: "Cni1hf",
    name: "Cni13m",
    def: "Cni2ul",
    notation__old: "Cni1hf Cni2fb",
    subtitle: "Cni29f",
    figure: "Cnijf",
},
    La = {
        exitActive: "Bvp2xa",
        enterActive: "Bvp2w2",
        enter: "Bvpwa",
        exit: "Bvp1pc",
    };
const Ta = { animationStyles: La },
    Ia = { animationStyles: yo };
function _a({ x: t, fret: e, string: s }) {
    const n = cs.drums0,
        i = "translate(".concat(t, ", ").concat(0.5 + 12 * s, ")"),
        o = a(xs, { fret: e, className: n, transform: i });
    return 93 === e || 59 === e
        ? a(
            d,
            null,
            a("use", {
                className: n,
                transform: "translate(".concat(t, ", ").concat(-5.5, ")"),
                xlinkHref: "#drumHatEdge",
            }),
            o
        )
        : o;
}
function Ea({ x: t, title: e, fret: s, string: n }) {
    return a(
        d,
        null,
        a(
            "text",
            { "text-anchor": "middle" },
            e
                .split("\n")
                .reverse()
                .map((e, s) => a("tspan", { x: t, y: -14 * (s + 1) }, e))
        ),
        a(_a, { x: t, fret: s, string: n })
    );
}
function Pa({ end: t }) {
    let e = "M0,0v48";
    for (let s = 0; s < 5; s++)
        e += "M"
            .concat(0, ",")
            .concat(12 * s, " h")
            .concat(t);
    return (e += "V0"), a("path", { className: "Eh1jo", d: e });
}
const Aa = u(({ usedDrums: t, horizontal: e }) => {
    const { layer: s, experiments: n } = C("layer", "experiments"),
        i = "help_notation" === s.layer,
        o = "drop" !== n.drum_standard_notation,
        r = o
            ? (function (t, e) {
                let s = fs.filter(e => t.has(e[0]));
                t.has(41) && t.has(45) && (s = s.filter(t => 45 !== t[0]));
                const n = [];
                for (let t = 0; t < s.length; t += 4) n.push(s.slice(t, t + 4));
                return e && n.length % 2 == 1 && n.push([]), n;
            })(t, e)
            : (function (t) {
                const e = Math.floor((t.size + 2) / 3),
                    s = [...t.values()];
                return [s.slice(0, e), s.slice(e, 2 * e), s.slice(2 * e)];
            })(t);
    return a(
        M,
        null,
        i &&
        a(
            O,
            e ? Ta : Ia,
            a(
                "div",
                { className: e ? Na.wrapHorizontal : Na.wrap },
                a(
                    "div",
                    {
                        className: o ? Na.notation : Na.notation__old,
                        id: "drum_notation",
                    },
                    a(
                        "h3",
                        { className: Na.title },
                        "Instruments in the current track"
                    ),
                    o
                        ? r.map(t =>
                            a(
                                "svg",
                                { className: Na.figure, width: 240, height: 130 },
                                a(
                                    "g",
                                    { transform: "translate(0, 54)" },
                                    a(Pa, { end: 240 }),
                                    t.map((t, e) =>
                                        a(Ea, {
                                            fret: t[0],
                                            string: kt(t[0], !0),
                                            title: t[1],
                                            x: 60 * e + 30,
                                        })
                                    )
                                )
                            )
                        )
                        : r.map((t, e) =>
                            a(
                                "div",
                                { className: Na.col, key: e },
                                t.map(t =>
                                    a(
                                        "dl",
                                        { className: Na.line, key: t.name },
                                        a("dt", { className: Na.name }, t.name),
                                        a("dd", { className: Na.def }, bt[t.name])
                                    )
                                )
                            )
                        )
                )
            )
        )
    );
});
var Ma = {
    header: "Clxc",
    headerNonSelectable: "Clxc Cl5x",
    song: "Clwh",
    dash: "Cl1r4",
    artist: "Cl2pm",
    part: "Cl2eu",
    partDifficulty: "Cl2eu Clme",
    difficulty: "Cl4v",
    fill: "Cl14r",
    fillText: "Cl2z8",
    explainDifficultyLink: "Cl1vp",
    difficultyLinksPanel: "Clkv",
    findEasierSongsLink: "Cl2ah",
    reportInvalidDifficultyLink: "Cl2ah Cl1mf",
    label: "Cled",
    showroom: "Clly",
    demo: "Cl2yo",
    instrumentTab: "Clpi",
    separator: "Cl30y",
    desktopNoBorder: "Cl30y Clpp",
    tabletNoBorder: "Cl30y Cl1sb",
};
const Ba = { animationStyles: yo, timeout: 500 };
class Da extends c {
    __init() {
        this.pendingHideHint = null;
    }
    constructor() {
        super(),
            Da.prototype.__init.call(this),
            Da.prototype.__init2.call(this),
            (this.state = { showHint: !1 });
    }
    componentWillReceiveProps(t) {
        const e = this.props;
        t.isFullscreen !== e.isFullscreen &&
            (this.cancelPendingHideHint(),
                t.isFullscreen &&
                (this.setState({ showHint: !0 }),
                    (this.pendingHideHint = setTimeout(() => {
                        this.setState({ showHint: !1 });
                    }, 3500)))),
            t.isFullscreen || this.setState({ showHint: !1 });
    }
    componentWillUnmount() {
        this.cancelPendingHideHint();
    }
    render() {
        const t = this.props.isFullscreen,
            e = "fullscreen-title-id";
        return a(
            "div",
            { id: "fullscreen" },
            a(
                M,
                null,
                this.state.showHint &&
                a(
                    O,
                    Ba,
                    a(
                        "div",
                        { className: "B9qd6", onClick: this.onEscHintClick },
                        "Press ESC to exit fullscreen mode"
                    )
                )
            ),
            a(
                "div",
                { className: "B9q2mp", id: "fullscreen-controls" },
                a(
                    "button",
                    {
                        className: t ? "B9q17r B9qvh" : "B9q17r",
                        onClick: this.props.handleFullscreen,
                        "aria-label": "fullscreen",
                    },
                    a(
                        "svg",
                        { width: 24, height: 17, role: "img", "aria-labelledby": e },
                        a(
                            "title",
                            { id: e },
                            t
                                ? "Turn off fullscreen mode (ESC)"
                                : "Turn on fullscreen mode (Alt + Enter)"
                        ),
                        a("path", {
                            className: "B9q1gg",
                            d: t
                                ? "M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z"
                                : "M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z",
                        })
                    )
                )
            )
        );
    }
    __init2() {
        this.onEscHintClick = () => {
            this.cancelPendingHideHint(), this.setState({ showHint: !1 });
        };
    }
    cancelPendingHideHint() {
        null != this.pendingHideHint &&
            (clearTimeout(this.pendingHideHint), (this.pendingHideHint = null));
    }
}
function Oa(t) {
    return 6e4 / t / 4;
}
class ja {
    static forSkillTestResults(t, e, s) {
        function n(t) {
            return 6e4 / t / 4;
        }
        const i = n(t),
            o = n(e),
            a = n(s);
        return new ja({
            VERY_EASY: { name: "VERY_EASY", rh: 4 * i, lh: 4 * o, legato: 4 * a },
            EASY: { name: "EASY", rh: 2 * i, lh: 2 * o, legato: 2 * a },
            BELOW_INTERMEDIATE: {
                name: "BELOW_INTERMEDIATE",
                rh: 1.5 * i,
                lh: 1.5 * o,
                legato: 1.5 * a,
            },
            INTERMEDIATE: {
                name: "INTERMEDIATE",
                rh: 1.25 * i,
                lh: 1.25 * o,
                legato: 1.25 * a,
            },
            UPPER_INTERMEDIATE: {
                name: "UPPER_INTERMEDIATE",
                rh: 1.1 * i,
                lh: 1.1 * o,
                legato: 1.1 * a,
            },
            HARD: { name: "HARD", rh: i, lh: o, legato: a },
            VERY_HARD: {
                name: "VERY_HARD",
                rh: 0.9 * i,
                lh: 0.9 * o,
                legato: 0.9 * a,
            },
            INSANE: { name: "INSANE", rh: 0.8 * i, lh: 0.7 * o, legato: 0.7 * a },
        });
    }
    constructor(t) {
        Object.keys(t).forEach(e => {
            this[e] = t[e];
        }),
            (this.VALUES = [
                this.VERY_EASY,
                this.EASY,
                this.BELOW_INTERMEDIATE,
                this.INTERMEDIATE,
                this.UPPER_INTERMEDIATE,
                this.HARD,
                this.VERY_HARD,
                this.INSANE,
            ]),
            (this.nameToEntryMap = new Map()),
            (this.nameToIndexMap = new Map());
        for (let t = 0; t < this.VALUES.length; t++) {
            const e = this.VALUES[t];
            this.nameToIndexMap.set(e.name, t), this.nameToEntryMap.set(e.name, e);
        }
    }
    increment(t, e = 1) {
        const s = this.indexOf(t);
        if (-1 === s) throw new Error("Unable to find complexity ".concat(t));
        const n = this.VALUES,
            i = n.length - 1;
        return n[Math.min(Math.max(0, s + e), i)];
    }
    forName(t) {
        return this.nameToEntryMap.get(t);
    }
    indexOf(t) {
        if (null === t) return -1;
        const e = t.name,
            s = this.nameToIndexMap.get(e);
        return void 0 === s ? -1 : s;
    }
    max(t, e) {
        return 1 === this.compare(t, e) ? t : e;
    }
    min(t, e) {
        return 1 === this.compare(t, e) ? e : t;
    }
    compare(t, e) {
        const s = this.indexOf(t),
            n = this.indexOf(e);
        return s === n ? 0 : s > n ? 1 : -1;
    }
    forLHOnly(t) {
        return this.forDuration("legato", t);
    }
    forLH(t) {
        return this.forDuration("lh", t);
    }
    forRH(t) {
        return this.forDuration("rh", t);
    }
    forDuration(t, e) {
        const s = this.VALUES;
        for (let n = s.length - 1; n >= 0; n--) {
            const i = s[n],
                o = i[t];
            if (void 0 === o)
                throw new Error(
                    "Unable to find complexity for lookup property ".concat(t)
                );
            if (0 === n) {
                if (e >= o) return i;
            } else if (n === s.length - 1) {
                if (e <= o) return i;
            } else if (e <= o) return i;
        }
        return s[0];
    }
}
const Ra = new ja({
    VERY_EASY: { name: "VERY_EASY", rh: Oa(60), lh: Oa(41), legato: Oa(20) },
    EASY: { name: "EASY", rh: Oa(90), lh: Oa(50), legato: Oa(45) },
    BELOW_INTERMEDIATE: {
        name: "BELOW_INTERMEDIATE",
        rh: Oa(120),
        lh: Oa(65),
        legato: Oa(70),
    },
    INTERMEDIATE: {
        name: "INTERMEDIATE",
        rh: Oa(160),
        lh: Oa(80),
        legato: Oa(95),
    },
    UPPER_INTERMEDIATE: {
        name: "UPPER_INTERMEDIATE",
        rh: Oa(210),
        lh: Oa(110),
        legato: Oa(125),
    },
    HARD: { name: "HARD", rh: Oa(250), lh: Oa(136), legato: Oa(143) },
    VERY_HARD: { name: "VERY_HARD", rh: Oa(281), lh: Oa(140), legato: Oa(150) },
    INSANE: { name: "INSANE", rh: Oa(290), lh: Oa(150), legato: Oa(160) },
});
var za = {
    difficulty: "Cae2ew",
    field: "Cae1y3",
    placeholder: "Cae1r7",
    difficulty1: "Cae2ew Cae1nm",
    difficulty2: "Cae2ew Cae2c",
    difficulty3: "Cae2ew Cae1kv",
    difficulty4: "Cae2ew Cae2t8",
    difficulty5: "Cae2ew Cae1eb",
    difficulty6: "Cae2ew Cae10m",
    difficulty7: "Cae2ew Cae5k",
    difficulty8: "Cae2ew Caey",
};
const Fa = {};
(Fa[Ra.VERY_EASY.name] = "Beginner. Tier 1"),
    (Fa[Ra.EASY.name] = "Beginner. Tier 2"),
    (Fa[Ra.BELOW_INTERMEDIATE.name] = "Intermediate. Tier 1"),
    (Fa[Ra.INTERMEDIATE.name] = "Intermediate. Tier 2"),
    (Fa[Ra.UPPER_INTERMEDIATE.name] = "Intermediate. Tier 3"),
    (Fa[Ra.HARD.name] = "Advanced. Tier 1"),
    (Fa[Ra.VERY_HARD.name] = "Advanced. Tier 2"),
    (Fa[Ra.INSANE.name] = "Advanced. Tier 3");
const Ha = {};
(Ha[Ra.VERY_EASY.name] = "Very Easy"),
    (Ha[Ra.EASY.name] = "Easy"),
    (Ha[Ra.BELOW_INTERMEDIATE.name] = "Below Intermediate"),
    (Ha[Ra.INTERMEDIATE.name] = "Intermediate"),
    (Ha[Ra.UPPER_INTERMEDIATE.name] = "Upper Intermediate"),
    (Ha[Ra.HARD.name] = "Hard"),
    (Ha[Ra.VERY_HARD.name] = "Very Hard"),
    (Ha[Ra.INSANE.name] = "Master");
const qa = a("i", null),
    Ua = t => {
        const { id: e, difficultyString: s, difficultyNA: n, isNumerated: i } = t;
        if (!s || n)
            return a("span", { className: za.placeholder, title: "Not calculated" });
        const o = Ra.forName(s),
            r = Ra.indexOf(o) + 1,
            l = t["data-field"];
        let c = za["difficulty".concat(r)];
        return (
            l &&
            ((c = "".concat(za.difficulty, " ").concat(c, " ").concat(za.field)),
                i || (c += " ".concat(za.difficultyNonNumerated))),
            a(
                "span",
                { id: e, className: c, "data-field": l, title: ((d = s), Fa[d] || "") },
                qa,
                qa,
                qa,
                qa,
                qa,
                qa,
                qa,
                qa
            )
        );
        var d;
    };
class Va extends c {
    constructor(...t) {
        super(...t),
            Va.prototype.__init.call(this),
            Va.prototype.__init2.call(this);
    }
    componentDidMount() { }
    __init() {
        this.onUnderstandLinkClick = t => {
            t.preventDefault(), this.props.dispatch("layer/hide");
        };
    }
    __init2() {
        this.onStillHaveQuestionsLinkClick = t => { };
    }
    render() {
        return a(
            "div",
            { className: "oo2w1 Im2gu", id: "explain-difficulty-popup" },
            a(
                "span",
                { className: "oo1jh Im2lf" },
                "Each guitar track is assigned a difficulty level based on:",
                a(
                    "ol",
                    {},
                    a(
                        "li",
                        {},
                        "The speed required for playing left and right hand. Faster is harder."
                    ),
                    a(
                        "li",
                        {},
                        "The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."
                    ),
                    a(
                        "li",
                        {},
                        "The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc."
                    )
                ),
                a(
                    "p",
                    {},
                    "We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."
                ),
                a(
                    "p",
                    {},
                    a(
                        "i",
                        {},
                        "Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles."
                    )
                ),
                a(
                    "div",
                    { className: "Im1h4" },
                    a(
                        "a",
                        { onClick: this.onUnderstandLinkClick, href: "", role: "button" },
                        "I understand, all clear"
                    ),
                    a(
                        Un,
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
var Ga = k(Va);
const Xa = { page: "", isPanel: !1 },
    Wa = [
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
        ["/lessons", { page: "lessons", isPanel: !0 }],
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
        ["/a/wa/howtoreadtab", { page: "howToReadTab", isPanel: !0 }],
        [
            /^\/a\/wsa\/(.*)tab-s(\d+)t(\d+)\/r(\d+)/i,
            (t, e, s, n) => ({
                page: "tab",
                name: t,
                songId: e,
                partId: s,
                revisionId: n,
                isPanel: !1,
            }),
        ],
        [
            /^\/a\/wsa\/(.*)tab-s(\d+)t(\d+)/i,
            (t, e, s) => ({
                page: "tab",
                name: t,
                songId: e,
                partId: s,
                revisionId: null,
                isPanel: !1,
            }),
        ],
        [
            /^\/a\/wsa\/(.*)tab-s(\d+)/i,
            (t, e) => ({
                page: "tab",
                name: t,
                songId: e,
                partId: "0",
                revisionId: null,
                isPanel: !1,
            }),
        ],
        [
            /^\/a\/wsa\/(.*)tabs-a(\d+)/i,
            (t, e) => ({ page: "artist", name: t, artistId: e, isPanel: !0 }),
        ],
    ];
function Ya(t) {
    for (const [e, s] of Wa)
        if (e instanceof RegExp) {
            const n = t.match(e);
            if (n)
                return "function" == typeof s
                    ? s.apply(null, [].concat(n).slice(1))
                    : s;
        } else if (t === e) return "function" == typeof s ? s.apply(null) : s;
    return Xa;
}
function Za(t) {
    const e = {};
    return (
        t
            .split("&")
            .map(t => t.split("=").map(decodeURIComponent))
            .forEach(t => {
                e[t[0]] = t[1] || "";
            }),
        e
    );
}
function Ka(t, e, s) {
    return (function (t, e) {
        if (e.user.isLoggedIn) {
            if ("/a/wa/signin" === t || "/a/wa/signup" === t) return "/a/wa/account";
            if (e.user.hasPlus) {
                if ("/a/wa/account/deactivate" === t) return "/a/wa/account";
                if (t.startsWith("/a/wa/plus")) return "/a/wa/account";
            } else if ("/a/wa/account/card" === t) return "/a/wa/account";
        } else {
            if (t.startsWith("/a/wa/account")) return "/a/wa/signin?next=account";
            if ("/a/wa/plus/payment" === t) return "/a/wa/signin?next=subscribe";
        }
    })(t ? t.toLowerCase() : "/", s);
}
function Qa(t, e, s, n) {
    const i = { route: Ya(t.toLowerCase()) };
    e && e.length
        ? (i.query = Za(e))
        : (function (t) {
            for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
            return !0;
        })(s.query) || (i.query = {}),
        n.dispatch("route/change", i);
}
const Ja = t => {
    !b &&
        t.on("@init", () => ({ route: { page: "", isPanel: !1 }, query: {} })),
        !b &&
        t.on("route/init", (t, { pathname: e, query: s }) => ({
            route: Ya(e.toLowerCase()),
            query: s,
        })),
        t.on("navigate", (e, s) => {
            let [n, i] = s.split("#")[0].split("?");
            const o = Ka(n, 0, e);
            return (
                o && (([n, i] = o.split("?")), (s = o)),
                b && history.pushState(null, "", s),
                Qa(n, i, e, t)
            );
        }),
        t.on("popstate", (e, { pathname: s, search: n }) => {
            const i = n && n.substring(1),
                o = Ka(s, 0, e);
            return o
                ? (console.log("Found redirect to", o),
                    history.replaceState(null, "", o),
                    void t.dispatch("navigate", o))
                : Qa(s, i, e, t);
        }),
        t.on("route/change", (t, e) => e),
        b &&
        window.addEventListener("popstate", function () {
            t.dispatch("popstate", {
                pathname: location.pathname,
                search: location.search,
            });
        });
},
    $a = t =>
        t
            ? ((t.isBassGuitar ? " Bass" : t.isDrums && " Drum") || "") + " Tab"
            : " Tab";
function tr(t) {
    const e = Za(document.location.search.substring(1));
    t.length ? (e.pattern = t) : delete e.pattern,
        history.replaceState(
            null,
            "",
            "".concat(document.location.pathname || "/").concat(Ho(e))
        );
}
function er(t) {
    const e = Za(document.location.search.substring(1));
    t.length && "ALL INSTRUMENTS" !== t ? (e.inst = ir(t)) : delete e.inst,
        history.replaceState(
            null,
            "",
            "".concat(document.location.pathname || "/").concat(Ho(e))
        );
}
function sr(t, e, s) {
    const n = b
        ? Za(document.location.search.substring(1))
        : Object.assign({}, s);
    t.length && "ALL INSTRUMENTS" !== t ? (n.inst = ir(t)) : delete n.inst;
    let i = "/";
    switch (e.page) {
        case "search":
            i = "/";
            break;
        case "favorites":
            i = "/a/wa/favorites";
            break;
        case "artist":
            i = "/a/wsa/".concat(e.name, "tabs-a").concat(e.artistId);
    }
    return "".concat(i).concat(Ho(n));
}
function nr(t) {
    switch (t) {
        case "guitar":
            return "GUITAR";
        case "drum":
            return "DRUMS";
        case "bass":
            return "BASS";
        default:
            return "ALL INSTRUMENTS";
    }
}
function ir(t) {
    switch (t) {
        case "GUITAR":
            return "guitar";
        case "DRUMS":
            return "drum";
        case "BASS":
            return "bass";
        default:
            return "";
    }
}
function or(t, e) {
    return Ho({
        pattern: t || void 0,
        inst:
            e && "ALL INSTRUMENTS" !== e.instrument && e.instrument
                ? ir(e.instrument)
                : void 0,
    });
}
const ar = "Songsterr",
    rr = "Songsterr Tabs with Rhythm",
    lr = {
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
        howToReadTab: "How to Read a Tab",
        privacy: "Privacy Policy",
        terms: "Terms Of Service",
        dnsmpd: "Do Not Sell My Personal Information",
        "": "",
        tab: "",
        search: "",
        artist: "",
    };
function cr(t, e = "Guitar") {
    if (t) {
        if ("DRUMS" === t.instrument) return "Drum";
        if ("BASS" === t.instrument) return "Bass";
        if ("GUITAR" === t.instrument) return "Guitar";
    }
    return e;
}
function dr(t) {
    o(() => ur(t), []);
}
function ur(t) {
    (document.title = (function (t) {
        const e = t.route;
        return "artist" === e.page
            ? (function (t) {
                return [
                    t.artist && t.artist.pattern && pr(t.artist.pattern),
                    gr(t),
                    rr,
                ]
                    .filter(Boolean)
                    .join(" | ");
            })(t)
            : "tab" === e.page
                ? (function (t) {
                    const { meta: e } = t;
                    if (!e.current) return "";
                    const s = wo(e),
                        n =
                            s &&
                                e.current.tracks &&
                                !(function (t, e) {
                                    return t.isBassGuitar
                                        ? 1 === e.filter(t => t.isBassGuitar).length
                                        : t.isDrums
                                            ? 1 === e.filter(t => t.isDrums).length
                                            : !!t.isGuitar && 1 === e.filter(t => t.isGuitar).length;
                                })(s, e.current.tracks)
                                ? " - ".concat(s.name, " - ").concat(s.instrument)
                                : "",
                        i = e.allowedByLicense
                            ? ""
                            : " (Temporary Removed by Music Publisher) ";
                    return ""
                        .concat(e.current.title)
                        .concat($a(s), " by ")
                        .concat(e.current.artist)
                        .concat(n)
                        .concat(i, " | ")
                        .concat(rr);
                })(t)
                : "search" === e.page
                    ? (function (t) {
                        return [t.songs && t.songs.pattern && pr(t.songs.pattern), mr(t), ar]
                            .filter(Boolean)
                            .join(" | ");
                    })(t)
                    : (function (t) {
                        return [fr(t), rr].join(" | ");
                    })(t);
    })(t)),
        window.ga &&
        window.ga("send", "pageview", {
            location: window.location.href,
            title: document.title,
        }),
        (function (t) {
            try {
                const e = document.styleSheets;
                for (let s = 0; s < e.length; s++) {
                    const n = e[s];
                    "print" === n.media.mediaText &&
                        "print-ga" === n.ownerNode.id &&
                        Ci(n),
                        "print" === n.media.mediaText &&
                        "print-mp" === n.ownerNode.id &&
                        ki(n, t);
                }
            } catch (t) {
                console.error("PrintTracker: " + t);
            }
        })(
            (function (t) {
                return "tab" === t.route.page && t.meta.current
                    ? {
                        page: t.route.page,
                        Artist: t.meta.current.artist,
                        Title: t.meta.current.title,
                    }
                    : { page: t.route.page };
            })(t)
        );
}
Wa.map(([t, e]) =>
    "string" == typeof t && "string" == typeof e.page ? { [e.page]: t } : {}
).reduce((t, e) => Object.assign(t, e), {});
const hr = (t, e) => t.artist.artists[e] || "Unknown Artist",
    pr = t => (t.length > 0 ? "Search results for: '".concat(t, "'") : void 0),
    mr = t =>
        [cr(t.songs && t.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "),
    gr = t =>
        [
            hr(t, +t.route.artistId),
            cr(t.artist && t.artist.filters, ""),
            "Tabs",
        ].join(" "),
    fr = t => lr[t.route.page] || "";
function yr({ styles: t }) {
    return a(
        "svg",
        {
            width: 13,
            height: 13,
            className: t.icon,
            viewBox: "0 -3 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        },
        a("rect", { y: 1, width: 13, height: 11, rx: 3, className: t.fill }),
        a("path", {
            className: t.fillText,
            d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z",
        })
    );
}
const vr = { animationStyles: yo },
    br = u(function ({
        plusAccess: t,
        isSmallScreen: e,
        isFullscreen: s,
        handleFullscreen: n,
        handleNotation: i,
    }) {
        const {
            dispatch: r,
            route: l,
            layer: c,
            meta: d,
            part: u,
            demo: h,
            artist: p,
            editor: m,
            device: g,
            isDeleted: f,
        } = C(
            "route",
            "layer",
            "meta",
            "part",
            "demo",
            "artist",
            "editor",
            "device",
            "isDeleted"
        ),
            y = l.isPanel,
            v = g.isDesktop,
            w = u.current && u.current.partId === d.partId && u.current.difficulty,
            x = u.current && u.current.usedDrums;
        if (!d.current) return;
        const S = wo(d);
        o(() => {
            if (
                "tab" === l.page &&
                !d.loading &&
                (function (t, e, s) {
                    return (
                        +t.songId === e.songId &&
                        +t.partId === (s && s.partId) &&
                        (!t.revisionId || +t.revisionId === e.revisionId)
                    );
                })(l, d, S)
            )
                return (
                    ur({ route: l, meta: d, device: g }),
                    r("curiosity/countdown:start"),
                    void r("promo/retune:start")
                );
            r("curiosity/countdown:clear"),
                r("promo/mute:clear"),
                r("promo/retune:clear");
        }, [l, d.loading, d.current, d.songId, d.revisionId, d.partId, S]);
        const k = $a(S),
            N = !t && d.allowedByLicense;
        let L = w;
        L || (S && S.difficulty && (L = S.difficulty));
        const T = !f && !s && d.allowedByLicense,
            I = !f && !e && !s && d.allowedByLicense,
            _ =
                !d.isFailed &&
                !u.isFailed &&
                d.current &&
                !!d.current.tracks &&
                !!d.current.audio &&
                I &&
                m.canDelete,
            E = L && !s && !h.enabled,
            P = !e && E && "difficulty_explained_popup" === c.layer;
        if (b && "mediaSession" in navigator && d.current)
            try {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: d.current.title + k,
                    artist: d.current.artist,
                    artwork: [
                        {
                            src: "/static/media/artwork-96x96.7f1b5856.png",
                            sizes: "96x96",
                            type: "image/png",
                        },
                        {
                            src: "/static/media/artwork-128x128.8a4c15a5.png",
                            sizes: "128x128",
                            type: "image/png",
                        },
                        {
                            src: "/static/media/artwork-192x192.ef4ca073.png",
                            sizes: "192x192",
                            type: "image/png",
                        },
                        {
                            src: "/static/media/artwork-256x256.89e212c5.png",
                            sizes: "256x256",
                            type: "image/png",
                        },
                        {
                            src: "/static/media/artwork-384x384.e3f936a7.png",
                            sizes: "384x384",
                            type: "image/png",
                        },
                        {
                            src: "/static/media/artwork-512x512.cab80a9e.png",
                            sizes: "512x512",
                            type: "image/png",
                        },
                    ],
                });
            } catch (t) {
                console.error(t);
            }
        const A = Ma.separator;
        return a(
            "header",
            { className: Ma.header, id: "header" },
            T && a(Wo, null),
            a(
                y ? "div" : "h1",
                { className: Ma.song },
                a(
                    Un,
                    {
                        className: Ma.artist,
                        "aria-label": "artist",
                        to: ""
                            .concat(
                                ((B = d.current),
                                    B
                                        ? "/a/wsa/"
                                            .concat(yi("".concat(B.artist || "", "-")), "tabs-a")
                                            .concat(B.artistId)
                                        : "/")
                            )
                            .concat(or(p.pattern, p.filters)),
                    },
                    d.current.artist
                ),
                a("span", { className: Ma.dash }, " - "),
                a(
                    "span",
                    { className: Ma.title, "aria-label": "title" },
                    d.current.title
                ),
                a("span", { className: Ma.instrumentTab, "aria-label": "tab type" }, k),
                !s &&
                h.enabled &&
                a(
                    Un,
                    {
                        to: "/a/wa/plus",
                        className: Ma.demo,
                        "aria-label": "Demo Song",
                        onClick: () => {
                            r("curiosity/setConversionProps", {
                                "Last referring link": "Demo Link",
                            });
                        },
                    },
                    a(Gn, {
                        width: 42,
                        height: 22,
                        shadow: "transparent",
                        id: "iconDemo2",
                    })
                )
            ),
            _ && a(ka, { meta: d.current }),
            I && a(xa, null),
            !e && a(Da, { isFullscreen: s, handleFullscreen: n }),
            N &&
            a(
                Un,
                {
                    id: "text-showroom",
                    className: Ma.showroom,
                    to: "/a/wa/plus?from=header_link",
                    onClick: () => {
                        r("curiosity/setConversionProps", {
                            "Last referring link": "Header Link",
                        });
                    },
                },
                'Learn "'.concat(
                    d.current.title,
                    '" faster with Songsterr Plus plan!'
                )
            ),
            !f &&
            S &&
            a(
                y ? "div" : "h2",
                { className: E ? Ma.partDifficulty : Ma.part },
                a("span", { className: Ma.name, "aria-label": "name" }, S.name),
                " - ",
                a(
                    "span",
                    { className: Ma.instrument, "aria-label": "instrument" },
                    S.instrument
                ),
                e &&
                !f &&
                x &&
                a("button", { className: Na.toggle, onClick: i }, "(notation)"),
                e && !f && x && a(Aa, { usedDrums: x }),
                e && a("hr", { className: Ma.separator, width: 250 }),
                E &&
                a(
                    "span",
                    {
                        className: Ma.difficulty,
                        "aria-label": "track difficulty (rhythm)",
                    },
                    a("span", { className: Ma.label }, "Track difficulty (Rhythm)"),
                    a(Ua, { id: "track-difficulty", difficultyString: L }),
                    v &&
                    a(
                        "button",
                        {
                            className: Ma.explainDifficultyLink,
                            onClick: () => {
                                r("layer/show", "difficulty_explained_popup");
                            },
                            title: "Explain how difficulty is calculated",
                            id: "explain_difficulty_link",
                        },
                        a(yr, { styles: Ma })
                    ),
                    v && a(M, null, P && a(O, vr, a(Ga, null)))
                )
            ),
            !e && a("hr", { className: A, width: 410 })
        );
        var B;
    });
const wr = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
    xr =
        "M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z",
    Sr = "M7 10v7H3c-3 0-3-7 0-7z",
    Cr =
        "m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z",
    kr = "".concat(
        Sr,
        "m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z"
    ),
    Nr = ""
        .concat(
            Sr,
            "m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8"
        )
        .concat(wr, "m2.8 1.8")
        .concat(wr, "m2.8 1.8")
        .concat(wr, "m2.8 1.8")
        .concat(wr, "m2.8 1.8")
        .concat(wr),
    Lr = [
        "".concat(xr, "M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z"),
        "M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z",
        "".concat(
            xr,
            "M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1"
        ),
        ""
            .concat(xr, "M9.8.1")
            .concat(wr, "m3 1.36")
            .concat(wr, "m3 1.36")
            .concat(wr, "m3 1.36")
            .concat(wr, "m3 1.36")
            .concat(
                wr,
                "M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z"
            ),
        ""
            .concat(Sr)
            .concat(
                Cr,
                "m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z"
            ),
        ""
            .concat(Sr)
            .concat(Cr, "m3.9 1.25")
            .concat(wr, "m3.9 0")
            .concat(wr, "m3.9 0")
            .concat(wr, "m-7.8 4.5")
            .concat(wr, "m3.9 0")
            .concat(wr, "m3.9 0")
            .concat(wr),
        ""
            .concat(
                Sr,
                "m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8"
            )
            .concat(wr, "m2.8.65")
            .concat(wr, "m2.8.65")
            .concat(wr, "m2.8.65")
            .concat(wr, "m2.8.65")
            .concat(wr),
        "".concat(
            Sr,
            "m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z"
        ),
        kr,
        "".concat(kr).concat("m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z"),
        ""
            .concat(
                Sr,
                "m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z"
            )
            .concat("m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z"),
        "M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z",
        "M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z",
        "M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z",
        "M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z",
        "M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z",
        "M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z",
        "M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z",
        "".concat(
            xr,
            "M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z"
        ),
        "M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z",
        "M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z",
        "".concat(
            Sr,
            "m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z"
        ),
        "M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z",
        "M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z",
        "M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",
    ];
function Tr({ instrumentId: t, name: e, className: s, transform: n }) {
    const i = (function (t) {
        return 1024 === t
            ? 24
            : t < 32
                ? t < 24
                    ? t < 16
                        ? t < 8
                            ? 0
                            : 1
                        : t < 21
                            ? 2
                            : 3
                    : t < 27
                        ? t < 26
                            ? 4
                            : 5
                        : 6
                : t < 40
                    ? 7
                    : t < 68
                        ? t < 47
                            ? t < 43
                                ? t < 42
                                    ? 8
                                    : 9
                                : t < 46
                                    ? 10
                                    : 11
                            : t < 56
                                ? t < 48
                                    ? 12
                                    : 13
                                : t < 64
                                    ? 14
                                    : 15
                        : t < 96
                            ? t < 80
                                ? t < 72
                                    ? 16
                                    : 17
                                : t < 88
                                    ? 18
                                    : 19
                            : t < 112
                                ? t < 104
                                    ? 20
                                    : 21
                                : t < 120
                                    ? 22
                                    : 23;
    })(t),
        o = e && 6 === i && e.includes("James Hetfield"),
        r = o ? Nr : Lr[i],
        l = o
            ? "translate(-7 14)rotate(-45)"
            : (function (t) {
                return 3 === t
                    ? " translate(13 0)rotate(45)scale(.75)"
                    : 1 === t ||
                        (t >= 4 && t <= 10) ||
                        14 === t ||
                        16 === t ||
                        17 === t ||
                        21 === t
                        ? "translate(-5 14)rotate(-45)"
                        : void 0;
            })(i);
    return a("path", {
        d: r,
        transform: (l || n) && "".concat(n || "").concat(l || ""),
        className: s,
    });
}
class Ir extends c {
    render() {
        let t = this.props.active ? "C1031w" : "C101oh";
        return (
            (t = this.props.mobile ? "C102z2" : t),
            a(
                "svg",
                {
                    className: this.props.className,
                    width: "27",
                    height: "27",
                    viewBox: "0 0 27 27",
                },
                a(Tr, {
                    className: t,
                    instrumentId: this.props.instrumentId,
                    name: this.props.name,
                })
            )
        );
    }
}
function _r(t, e) {
    const s = document.querySelector("#mixer-button") || null,
        n = s ? s.offsetTop : 42,
        i = (function (t) {
            return 42 - 47 * t;
        })(
            (function (t) {
                if (t < 2) return 1;
                if (2 === t) return 2;
                const e = document.querySelector("#mixer-button") || null,
                    s = e ? Math.floor((e.offsetTop + 42) / 47) : 3,
                    n = Math.floor(t / 2);
                return s < n ? s : n;
            })(t)
        );
    return { height: Math.min(47 * t, e - 2 * (n + i) - 20), top: i };
}
function Er(t) {
    return { top: -1 * t.top + 15 };
}
class Pr extends c {
    constructor(t) {
        super(t), Pr.prototype.__init.call(this);
        const e = this.props.meta.current,
            s = _r(((e && e.tracks) || []).length, this.props.screen.viewport.height),
            n = Er(s),
            i = { height: s.height };
        this.state = { style: s, arrowStyle: n, scrollerStyle: i };
    }
    __init() {
        this.updateHeight = () => {
            const t = this.props.meta.current,
                e = _r(
                    ((t && t.tracks) || []).length,
                    this.props.screen.viewport.height
                ),
                s = Er(e),
                n = { height: e.height },
                i = this.state.style;
            (i.height === e.height && i.top === e.top) ||
                this.setState(
                    Object.assign({}, this.state, {
                        style: e,
                        arrowStyle: s,
                        scrollerStyle: n,
                    })
                );
        };
    }
    componentDidMount() {
        this.updateHeight();
    }
    componentDidUpdate() {
        this.updateHeight();
    }
    render() {
        const t = this.props.meta.current;
        if (!t) return;
        const { dispatch: e } = this.props,
            s = this.props.screen.isSmall,
            { partId: n, revisionId: i } = this.props.meta,
            o = (t && t.tracks) || [],
            r = s ? null : this.state.style,
            l =
                o &&
                o.map((s, o) => {
                    const r = n === o,
                        l = "".concat(r ? "Cv3137 Cv31y7" : "Cv3137");
                    return a(
                        "div",
                        { className: l, key: o, "aria-label": "track" },
                        a(
                            Un,
                            {
                                className: "Cv3p6",
                                to: vi(t, o, i, s.instrumentId),
                                "aria-current": r ? "page" : void 0,
                                onClick: () =>
                                    e("songs/default", { instrumentId: s.instrumentId }),
                            },
                            a(Ir, {
                                className: "Cv3tw",
                                instrumentId: s.instrumentId,
                                name: s.name,
                                active: r,
                            }),
                            a(
                                "span",
                                { className: "Cv32cz" },
                                "".concat(s.name, " - ").concat(s.instrument)
                            )
                        )
                    );
                });
        return a(
            "div",
            {
                className: s ? "Cv3x8 Cv35z" : "Cv3x8",
                style: r,
                role: "dialog",
                "aria-label": "Select track",
            },
            s
                ? l
                : a("div", { className: "Cv31yt", style: this.state.scrollerStyle }, l),
            s ? null : a("div", { className: "Cv34h", style: this.state.arrowStyle })
        );
    }
}
var Ar = k(Pr, "screen", "meta"),
    Mr = {
        button: "B2917c",
        circle: "B291u8",
        arrow: "B2928q",
        shape: "B29122",
        text: "B2925c",
        minimizer: "B29yx",
        play: "B291nj",
        stroke: "B292i6",
        playLoading: "B291nj B29dz",
        active: "B2917c B292bk",
        main: "B2917c B299c",
        mainActive: "B2917c B292bk B292tv",
        icon: "B291uh",
        textHelp: "B2925c B29cg",
        tuning: "B2930o",
        speed: "B29122 B2917y",
        loop: "B292i6 B292ed",
        solo: "B29122 B292zv",
        mute: "B292i6 B291ph",
        learn: "B29122 B293c",
        print: "B292i6 B291hj",
        countin: "B29122 B29x7",
    };
class Br extends c {
    componentDidUpdate(t) {
        const { canPlay: e } = this.props;
        t.canPlay && !e
            ? (this.animationTimer && clearTimeout(this.animationTimer),
                (this.animationTimer = setTimeout(
                    () => this.setState({ loading: !0 }),
                    600
                )))
            : !t.canPlay &&
            e &&
            (this.animationTimer && clearTimeout(this.animationTimer),
                (this.animationTimer = setTimeout(
                    () => this.setState({ loading: !1 }),
                    600
                )));
    }
    constructor(t) {
        super(t), (this.state = { loading: !t.canPlay });
    }
    render() {
        const {
            onClick: t,
            shouldPlay: e,
            canPlay: s,
            hideDefs: n,
            title: i,
            titlePressed: o,
        } = this.props,
            { loading: r } = this.state,
            l = r ? Mr.playLoading : Mr.play,
            c = "mainplay-title-id";
        return a(
            "button",
            {
                className: e ? Mr.mainActive : Mr.main,
                onClick: t,
                "aria-pressed": e,
                "data-can-play": s,
            },
            a(
                "svg",
                {
                    className: Mr.icon,
                    width: 65,
                    height: 65,
                    viewBox: "-5 -4 65 65",
                    role: "img",
                    "aria-labelledby": c,
                    "data-loading": r,
                },
                !n &&
                a(
                    "defs",
                    null,
                    a(
                        "filter",
                        {
                            id: "svg_shadow",
                            width: "200%",
                            height: "200%",
                            x: "-50%",
                            y: "-50%",
                        },
                        a("feMorphology", {
                            radius: 1,
                            operator: "dilate",
                            in: "SourceAlpha",
                            result: "a",
                        }),
                        a("feOffset", { dy: 1, in: "a", result: "b" }),
                        a("feGaussianBlur", { stdDeviation: 2, in: "b", result: "c" }),
                        a("feComposite", {
                            in: "c",
                            in2: "SourceAlpha",
                            operator: "out",
                            result: "d",
                        }),
                        a("feColorMatrix", {
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0",
                            in: "d",
                            result: "e",
                        }),
                        a("feBlend", { in: "SourceGraphic", in2: "e", mode: "normal" })
                    )
                ),
                a("title", { id: c }, e && o ? o : i),
                a("circle", {
                    className: Mr.circle,
                    cx: "27.5",
                    cy: "27.5",
                    r: "27.5",
                    filter: "url(#svg_shadow)",
                }),
                a("path", {
                    className: l,
                    transform: "translate(19 15)",
                    d: e
                        ? "M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z"
                        : "M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z",
                })
            )
        );
    }
}
function Dr(t) {
    switch (t) {
        case "speed":
            return "M13 26c0-.5 0-1.1-.8-1.1s-1.3 1.2 0 1.8c1.5.6 2.4 1 2.4 2.3 0 1.4-.8 2.1-2.4 2.1s-2.3-.5-2.3-2.3h1.4s-.2 1.3.9 1.3 1.3-1.4 0-2-2.2-.8-2.2-2.1c0-1.4.8-2.1 2.2-2.1 1.5 0 2.2.65 2.2 2.1zm4.9-2a1.9 2.1 0 1 1 0 4.2h-1.1v2.8h-1.4v-7zm-1.12 1v2.2h.62a1 1.1 0 1 0 0-2.2zm5.12 4.9h2.6v1.1h-4v-7h4v1.1h-2.6v1.7h2.4v1.1h-2.4zm4.9 0h2.6v1.1h-4v-7h4v1.1h-2.6v1.7h2.4v1.1h-2.4zm6.1-5.9a1.8 3.1 0 1 1 0 7h-2.6v-7zm-.5 5.9a.9 2 0 1 0 0-4.8h-.7v4.8h.7z";
        case "loop":
            return "M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6";
        case "solo":
            return "M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z";
        case "mute":
            return "M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6";
        case "print":
            return "M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7";
        case "countin":
            return "M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8";
        case "minimizer":
            return "M8.67 2a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 8.67 2zm0 5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 8.67 7zm0 5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 8.67 12zM.494 15.237a1 1 0 0 1 1.352-1.474L.494 15.237zM7.17 20l.676.737a1 1 0 0 1-1.352 0L7.17 20zm5.324-6.237a1 1 0 0 1 1.352 1.474l-1.352-1.474zm-10.648 0 6 5.5-1.352 1.474-6-5.5 1.352-1.474zm4.648 5.5 6-5.5 1.352 1.474-6 5.5-1.352-1.474z";
        case "tuning":
            return "M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5";
    }
}
class Or extends c {
    render() {
        const {
            pressed: t,
            disabled: e,
            onClick: s,
            icon: n,
            text: i,
            title: o,
            titlePressed: r,
            hasPopup: l,
        } = this.props,
            c = t ? Mr.active : Mr.button,
            d = "".concat(n, "-title-id");
        return a(
            "button",
            {
                className: c,
                onClick: s,
                "aria-haspopup": l,
                "aria-pressed": t,
                id: "control-".concat(n),
                disabled: e,
            },
            a(
                "svg",
                {
                    className: Mr.icon,
                    width: 55,
                    height: 55,
                    viewBox: "-4 -4 55 55",
                    role: "img",
                    "aria-labelledby": d,
                },
                a("title", { id: d }, t && r ? r : o),
                "minimizer" === n
                    ? a("rect", {
                        className: Mr.circle,
                        x: 2,
                        y: 2,
                        width: 40,
                        height: 40,
                        rx: 6,
                        filter: "url(#svg_shadow)",
                    })
                    : a("circle", {
                        className: Mr.circle,
                        cx: "22.5",
                        cy: "22.5",
                        r: "22.5",
                        filter: "url(#svg_shadow)",
                    }),
                "help" !== n
                    ? a("path", { className: Mr[n], d: Dr(n) })
                    : a(
                        "text",
                        {
                            className: Mr.textHelp,
                            "text-anchor": "middle",
                            x: "22",
                            y: "30",
                        },
                        "?"
                    ),
                i &&
                a(
                    "text",
                    { className: Mr.text, "text-anchor": "middle", x: "22", y: "21" },
                    i
                )
            )
        );
    }
}
class jr extends c {
    render() {
        const {
            onClick: t,
            pressed: e,
            title: s,
            titlePressed: n,
            name: i,
            instrumentId: o,
        } = this.props,
            r = "mixer-title-id";
        return a(
            "button",
            {
                className: e ? Mr.active : Mr.button,
                onClick: t,
                id: "control-mixer",
                "aria-haspopup": !0,
                "aria-pressed": e,
            },
            a(
                "svg",
                {
                    className: Mr.icon,
                    width: 55,
                    height: 55,
                    viewBox: "-4 -4 55 55",
                    role: "img",
                    "aria-labelledby": r,
                },
                a("title", { id: r }, e && n ? n : s),
                a("circle", { className: Mr.arrow, cx: "7", cy: "39", r: "6" }),
                a("circle", {
                    className: Mr.circle,
                    cx: "22.5",
                    cy: "22.5",
                    r: "22.5",
                    filter: "url(#svg_shadow)",
                }),
                a(Tr, {
                    className: Mr.shape,
                    instrumentId: o,
                    name: i,
                    transform: "translate(9 9)",
                })
            )
        );
    }
}
function Rr() {
    return a(
        "svg",
        { width: 54, height: 54, viewBox: "0 0 54 54" },
        a("path", {
            d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
            fill: "#F1452D",
        }),
        a("path", {
            d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
            fill: "#FDE3DF",
        })
    );
}
function zr(t, e) {
    return t ? "oo2w1 hfxd hf8r" : e ? "oo2w1 hfxd hf1si" : "oo2w1 hfxd hf19b";
}
function Fr({ title: t, left: e, horizontal: s }) {
    const { dispatch: n } = C(),
        i = m(() => {
            n("layer/hide");
        }, [n]);
    return a(
        "div",
        { className: zr(s, e), role: "dialog" },
        a(
            "div",
            {
                className: "hf1j4",
                "aria-label": "".concat(t, " mode has no effect"),
                onClick: i,
            },
            a("span", { className: "hfhd hf1qv" }, a(Rr, null)),
            a(
                "div",
                { className: "hf2wq" },
                "This song has only one",
                a("br", null),
                "instrument track. ".concat(t),
                a("br", null),
                "mode has no effect."
            )
        )
    );
}
function Hr(t, e) {
    const s = Math.round((e.bpm * t) / 12),
        n = Math.round((100 * t) / 12);
    return { tempo: Object.assign({}, e, { bpm: s }), speed: n, position: Ur(n) };
}
function qr(t, e) {
    return Object.assign({}, e, { bpm: Math.round((e.bpm * t) / 100) });
}
function Ur(t) {
    return +(
        (100 *
            ((function (t) {
                return (Math.round((t / 100) * 12) / 12) * 100;
            })(t) -
                25)) /
        150
    ).toFixed(6);
}
class Vr extends c {
    constructor(t) {
        super(t),
            Vr.prototype.__init.call(this),
            Vr.prototype.__init2.call(this),
            Vr.prototype.__init3.call(this),
            Vr.prototype.__init4.call(this),
            Vr.prototype.__init5.call(this),
            Vr.prototype.__init6.call(this),
            Vr.prototype.__init7.call(this),
            Vr.prototype.__init8.call(this),
            Vr.prototype.__init9.call(this),
            Vr.prototype.__init10.call(this),
            Vr.prototype.__init11.call(this),
            Vr.prototype.__init12.call(this),
            Vr.prototype.__init13.call(this),
            Vr.prototype.__init14.call(this),
            Vr.prototype.__init15.call(this),
            Vr.prototype.__init16.call(this),
            Vr.prototype.__init17.call(this);
        const e = t.player.speed,
            s = qr(e, t.player.tempo);
        (this.state = {
            speed: e,
            tempo: s,
            position: Ur(e),
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
    __init() {
        this.hidePopup = t => {
            t.preventDefault(), this.props.dispatch("layer/hide");
        };
    }
    static getDerivedStateFromProps(t, e) {
        if (e.mirrorSpeed !== t.player.speed || e.mirrorTempo !== t.player.tempo) {
            const e = t.player.speed;
            return {
                speed: e,
                tempo: qr(e, t.player.tempo),
                position: Ur(e),
                mirrorSpeed: t.player.speed,
                mirrorTempo: t.player.tempo,
            };
        }
        return null;
    }
    componentDidMount() {
        const t = this.wrap;
        t &&
            (t.addEventListener("touchstart", this.onTouchStart, window.PASSIVE),
                t.addEventListener("mousedown", this.onTouchStart)),
            window.addEventListener("resize", this.onResize),
            window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
    }
    componentWillUnmount() {
        window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
        const t = this.wrap;
        t &&
            (t.removeEventListener("touchstart", this.onTouchStart),
                t.removeEventListener("mousedown", this.onTouchStart)),
            document.removeEventListener("touchmove", this.onTouchMove),
            document.removeEventListener("mousemove", this.onTouchMove),
            document.removeEventListener("touchend", this.onTouchEnd),
            document.removeEventListener("mouseup", this.onTouchEnd),
            window.removeEventListener("resize", this.onResize),
            this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
    }
    __init2() {
        this.getPageCoordinates = () => {
            const { body: t, documentElement: e } = document,
                s = this.ruler;
            if (s && t && e) {
                const n = s.getBoundingClientRect();
                return {
                    rulerX: n.left + t.scrollLeft + e.scrollLeft,
                    rulerY: n.top + t.scrollTop + e.scrollTop,
                    rulerW: n.width,
                };
            }
            throw new Error("Wrong Usage");
        };
    }
    __init3() {
        this.onResize = he(() => this.setState(this.getPageCoordinates), 250);
    }
    getNewPosition(t) {
        var e, s, n;
        return (
            (e = (100 * t.x) / t.w),
            (s = Math.round((150 * e) / 100 + 25)),
            (n = this.props.player.tempo),
            Hr(Math.round((s / 100) * 12), n)
        );
    }
    __init4() {
        this.handleFaster = t => {
            t.preventDefault(),
                this.setState(
                    t =>
                        (function (t, e, s, n) {
                            const i = Math.round((t / 100) * 12);
                            return i >= 21
                                ? { tempo: e, speed: t, position: s }
                                : Hr(i + 1, n);
                        })(t.speed, t.tempo, t.position, this.props.player.tempo),
                    () => {
                        this.dispatchSpeed(this.state.speed);
                    }
                );
        };
    }
    __init5() {
        this.handleSlower = t => {
            t.preventDefault(),
                this.setState(
                    t =>
                        (function (t, e, s, n) {
                            const i = Math.round((t / 100) * 12);
                            return i <= 3
                                ? { tempo: e, speed: t, position: s }
                                : Hr(i - 1, n);
                        })(t.speed, t.tempo, t.position, this.props.player.tempo),
                    () => {
                        this.dispatchSpeed(this.state.speed);
                    }
                );
        };
    }
    __init6() {
        this.dispatchSpeed = t => {
            Le(this.props.store, t);
        };
    }
    getTouchPoint(t) {
        let { rulerX: e, rulerY: s, rulerW: n } = this.state;
        if (null === e || null === s || null === n) {
            const t = this.getPageCoordinates();
            this.setState(t), (e = t.rulerX), (s = t.rulerY), (n = t.rulerW);
        }
        const i = t.changedTouches ? t.changedTouches[0] : t;
        return { x: Math.max(Math.min(i.pageX - e, n), 0), w: n, y: i.pageY - s };
    }
    __init7() {
        this.onTouchStart = t => {
            const e = this.getTouchPoint(t);
            if (((this.lastTouch = e), t.preventDefault(), !this.onTouchMoveTickId)) {
                const t = window.requestAnimationFrame;
                this.onTouchMoveTickId = t(this.onTouchMoveTick);
            }
            document.addEventListener("touchmove", this.onTouchMove, window.PASIVE),
                document.addEventListener("mousemove", this.onTouchMove),
                document.addEventListener("touchend", this.onTouchEnd),
                document.addEventListener("mouseup", this.onTouchEnd);
        };
    }
    __init8() {
        this.onTouchMove = t => {
            t.preventDefault(),
                t.stopPropagation(),
                (this.lastTouch = this.getTouchPoint(t));
        };
    }
    __init9() {
        this.onTouchMoveTick = () => {
            const t = this.lastTouch;
            if (t) {
                const e = this.getNewPosition(t);
                (this.state.tempo.bpm === e.tempo.bpm &&
                    this.state.tempo.type === e.tempo.type &&
                    this.state.speed === e.speed &&
                    this.state.position === e.position) ||
                    this.setState(e),
                    (this.lastTouch = null);
            }
            const e = window.requestAnimationFrame;
            this.onTouchMoveTickId = e(this.onTouchMoveTick);
        };
    }
    __init10() {
        this.onTouchEnd = t => {
            document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("mousemove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd),
                document.removeEventListener("mouseup", this.onTouchEnd),
                this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
                (this.onTouchMoveTickId = void 0);
            let e = this.state.speed;
            const s = this.lastTouch;
            if (s) {
                const t = this.getNewPosition(s);
                this.setState(t), (e = t.speed);
            }
            this.dispatchSpeed(e);
        };
    }
    __init11() {
        this.refWrap = t => {
            this.wrap = t;
        };
    }
    __init12() {
        this.refRuler = t => {
            this.ruler = t;
        };
    }
    __init13() {
        this.changeBpmState = t => {
            this.setState(
                e =>
                    (function (t, e, s, n, i) {
                        const o = e.bpm + i,
                            a = +((100 * o) / n.bpm).toFixed(2),
                            r = Math.round(a);
                        return r < 25 || r > 175
                            ? { tempo: e, speed: t, position: s }
                            : {
                                tempo: Object.assign({}, n, { bpm: o }),
                                speed: a,
                                position: Ur(a),
                            };
                    })(e.speed, e.tempo, e.position, this.props.player.tempo, t),
                () => {
                    this.dispatchSpeed(this.state.speed);
                }
            );
        };
    }
    __init14() {
        this.bpmPlus = () => {
            this.changeBpmState(1);
        };
    }
    __init15() {
        this.bpmPlusKeyPress = t => {
            13 === t.keyCode &&
                (t.preventDefault(), t.stopPropagation(), this.changeBpmState(1));
        };
    }
    __init16() {
        this.bpmMinus = () => {
            this.changeBpmState(-1);
        };
    }
    __init17() {
        this.bpmMinusPress = t => {
            13 === t.keyCode &&
                (t.preventDefault(), t.stopPropagation(), this.changeBpmState(-1));
        };
    }
    render() {
        const t = 100 === this.state.speed ? "c72sg c7pt" : "c72sg",
            e = 100 === this.state.speed ? "c71yw c71cf" : "c71yw";
        return a(
            "div",
            { className: "c72a8", role: "dialog", "aria-label": "Speed" },
            a(
                "div",
                { className: e },
                a(
                    "button",
                    { onClick: this.bpmMinus, onKeyDown: this.bpmMinusPress },
                    a(
                        "svg",
                        { width: 12, height: 12, viewBox: "0 0 12 2" },
                        a("rect", {
                            y: "2",
                            width: "2",
                            height: "12",
                            transform: "rotate(-90 0 2)",
                        })
                    )
                ),
                a("span", { "aria-label": "Tempo" }, this.state.tempo.bpm, " bpm"),
                a(
                    "button",
                    { onClick: this.bpmPlus, onKeyDown: this.bpmPlusKeyPress },
                    a(
                        "svg",
                        { width: 12, height: 12, viewBox: "0 0 12 12" },
                        a("rect", { x: "5", width: "2", height: "12" }),
                        a("rect", {
                            y: "7",
                            width: "2",
                            height: "12",
                            transform: "rotate(-90 0 7)",
                        })
                    )
                )
            ),
            a(
                "div",
                {
                    className: "c7xa",
                    title: "You can use arrow keys",
                    ref: this.refWrap,
                },
                a("label", { className: "c7295 c77r" }, a("span", null, "25%")),
                a("label", { className: "c7295 c72fh" }, a("span", null, "50%")),
                a("label", { className: "c7295 c71fc" }, a("span", null, "75%")),
                a("label", { className: "c7295 c7264" }, a("span", null, "100%")),
                a("label", { className: "c7295 c7ru" }, a("span", null, "125%")),
                a("label", { className: "c7295 c71cp" }, a("span", null, "150%")),
                a("label", { className: "c7295 c7f1" }, a("span", null, "175%")),
                a(
                    "div",
                    { className: "c7344", ref: this.refRuler },
                    a(
                        "div",
                        {
                            className: "c7268",
                            style: { left: this.state.position + "%" },
                            role: "slider",
                            "aria-valuenow": this.state.speed,
                            "aria-valuemin": 25,
                            "aria-valuemax": 175,
                            "aria-valuetext": this.state.tempo.bpm + " bpm",
                        },
                        a("div", { className: t })
                    )
                )
            )
        );
    }
}
var Gr = k(Vr, "player");
const Xr = () => {
    const {
        dispatch: t,
        editor: e,
        meta: n,
        isNextSound: i,
    } = C("editor", "meta", "isNextSound");
    if (!n.current) return null;
    if (!e.canUseNextSound) return null;
    const o = !!n.current.midi,
        r = !!n.current.nextAudio,
        [l, c] = s(i),
        d = m(e => {
            e.preventDefault(), console.log("generate!"), t("editor/next:generate");
        }, []),
        u = m(
            e => {
                e.preventDefault(), t("editor/next:toggle"), c(!l);
            },
            [l]
        ),
        h = r
            ? [
                a(
                    "div",
                    null,
                    a("a", { className: "rrmz", onClick: d }, "Regenerate")
                ),
                a("div", { className: "rr1xu" }, "MIDI Version"),
                a(
                    "div",
                    null,
                    a(
                        "a",
                        {
                            className: "rrmz",
                            href: "https://github.com/songsterr/songsterr-processor-midi/commit/".concat(
                                n.current.nextAudio
                            ),
                            rel: "noopener noreferrer",
                            target: "_blank",
                        },
                        n.current.nextAudio.toUpperCase()
                    )
                ),
            ]
            : [
                a("div", null, "New Sound"),
                a("div", null, "Not Ready"),
                a(
                    "div",
                    null,
                    a("a", { className: "rrmz", onClick: d }, "Generate")
                ),
            ],
        p = o && [
            a("div", { className: "rr1xu" }, "New Sound"),
            a(
                "div",
                null,
                r &&
                a(
                    "a",
                    { onClick: u, className: l ? "rrmz rr1sk" : "rrmz rr11r" },
                    l ? "ON" : "OFF"
                ),
                !r && "In Progress"
            ),
        ];
    return a("div", { className: "rrs3" }, h, p);
},
    Wr = { animationStyles: La };
class Yr extends c {
    render() {
        const { device: t, plusAccess: e } = this.props,
            s = "mixer" === this.props.layer,
            n = "plus_speed" === this.props.layer,
            i = "speed" === this.props.layer,
            o = "plus_solo" === this.props.layer,
            r = "solo_single" === this.props.layer,
            l = "plus_mute" === this.props.layer,
            c = "plus_loop" === this.props.layer,
            d = "plus_print" === this.props.layer,
            u = "help_notation" === this.props.layer,
            h =
                Fn(t.os) ||
                Hn(t.os) ||
                (function (t) {
                    return (
                        !(!t.isTablet || "iOS" !== t.os) ||
                        (b &&
                            t.isDesktop &&
                            "Mac OS X" === t.os &&
                            "ontouchstart" in window)
                    );
                })(t),
            p = "solo" === this.props.type,
            m = "mute" === this.props.type,
            g = this.props.loop,
            f = this.props.isCountin,
            y = !e,
            v = this.props.usedDrums ? "Cs717g Cs71q1" : "Cs717g Cs71f3";
        return a(
            "aside",
            { className: v, "aria-controls": "tablature", id: "controls" },
            a("div", { className: "Cs71cc" }),
            a(
                "div",
                { className: "Cs72lw" },
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Xr, null),
                    a(Br, {
                        shouldPlay: this.props.shouldPlay,
                        canPlay: this.props.canPlay,
                        onClick: this.props.handlePlay,
                        title: "Play (Space)",
                        titlePressed: "Pause (Space)",
                    })
                ),
                a(
                    "div",
                    { className: "Cs7sn", id: "mixer-button" },
                    a(jr, {
                        pressed: s,
                        onClick: this.props.handleMixer,
                        title: "Show tracks (T)",
                        titlePressed: "Hide tracks (T)",
                        instrumentId: this.props.track ? this.props.track.instrumentId : 31,
                        name: this.props.track ? this.props.track.name : "",
                    }),
                    a(M, null, s && a(O, Wr, a(Ar, null)))
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "speed",
                        text: "".concat(Math.round(this.props.speed), "%"),
                        pressed: i,
                        onClick: this.props.handleSpeed,
                        title: "Change playback speed (S)",
                        hasPopup: !0,
                    }),
                    a(
                        M,
                        null,
                        n &&
                        a(
                            O,
                            Object.assign({}, Wr, { key: "popup" }),
                            h
                                ? a(ci, { title: "Tempo Control", device: t, horizontal: !0 })
                                : a(Yn, {
                                    title: "Tempo Control",
                                    horizontal: !0,
                                    classPrefix: "speed",
                                })
                        ),
                        i && a(O, Object.assign({}, Wr, { key: "layer" }), a(Gr, null))
                    )
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "solo",
                        pressed: p,
                        onClick: this.props.handleSolo,
                        title: "Play current track solo (F)",
                        titlePressed: "Play focus mix of all tracks (F)",
                        hasPopup: y,
                    }),
                    a(
                        M,
                        null,
                        o &&
                        a(
                            O,
                            Wr,
                            h
                                ? a(ci, { title: "Solo Mode", device: t, horizontal: !0 })
                                : a(Yn, {
                                    title: "Solo Mode",
                                    horizontal: !0,
                                    classPrefix: "solo",
                                })
                        ),
                        r && a(O, Wr, a(Fr, { title: "Solo", horizontal: !0 }))
                    )
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "mute",
                        pressed: m,
                        onClick: this.props.handleMute,
                        title: "Mute current track (M)",
                        titlePressed: "Unmute current track (M)",
                        hasPopup: y,
                    }),
                    a(
                        M,
                        null,
                        l &&
                        a(
                            O,
                            Wr,
                            h
                                ? a(ci, { title: "Mute Mode", device: t, horizontal: !0 })
                                : a(Yn, {
                                    title: "Mute Mode",
                                    horizontal: !0,
                                    classPrefix: "mute",
                                })
                        )
                    )
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "loop",
                        pressed: g,
                        onClick: this.props.handleLoop,
                        title: "Turn loop mode on (L)",
                        titlePressed: "Turn loop mode off (L)",
                        hasPopup: y,
                    }),
                    a(
                        M,
                        null,
                        c &&
                        a(
                            O,
                            Wr,
                            h
                                ? a(ci, { title: "Loop Mode", device: t, horizontal: !0 })
                                : a(Yn, {
                                    title: "Loop Mode",
                                    horizontal: !0,
                                    classPrefix: "loop",
                                })
                        )
                    )
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "countin",
                        pressed: f,
                        onClick: this.props.handleCountin,
                        title: "Turn count-in mode on (C)",
                        titlePressed: "Turn count-in mode off (C)",
                    })
                ),
                a(
                    "div",
                    { className: "Cs7sn" },
                    a(Or, {
                        icon: "print",
                        onClick: this.props.handlePrint,
                        title: "Print (P)",
                    }),
                    a(
                        M,
                        null,
                        d &&
                        a(
                            O,
                            Wr,
                            a(Yn, {
                                title: "Printing",
                                horizontal: !0,
                                classPrefix: "print",
                            })
                        )
                    )
                ),
                a(
                    "div",
                    { className: "Cs715d" },
                    a(
                        "div",
                        {
                            className: this.props.usedDrums
                                ? "Cs7sn Cs72iy"
                                : "Cs7sn Cs72iy Cs714e",
                        },
                        a(Or, {
                            icon: "help",
                            pressed: u,
                            onClick: this.props.handleNotation,
                            title: "Show drum notation",
                            titlePressed: "Hide drum notation",
                        }),
                        this.props.usedDrums &&
                        a(Aa, { usedDrums: this.props.usedDrums, horizontal: !0 })
                    )
                )
            )
        );
    }
}
class Zr extends c {
    constructor() {
        super(),
            Zr.prototype.__init.call(this),
            Zr.prototype.__init2.call(this),
            Zr.prototype.__init3.call(this),
            (this.state = { mode: "percent" });
    }
    __init() {
        this.tuneUp = t => {
            t.preventDefault();
            const { store: e, player: s } = this.props,
                { mode: n } = this.state;
            let i, o;
            "percent" === n
                ? ((i = 10), (o = Math.floor(s.speed / i) * i + i))
                : ((i = +(100 / s.tempo.bpm).toFixed(2)), (o = s.speed + i)),
                o <= 170 && o >= 30 && Le(e, o);
        };
    }
    __init2() {
        this.tuneDown = t => {
            t.preventDefault();
            const { store: e, player: s } = this.props,
                { mode: n } = this.state;
            let i, o;
            "percent" === n
                ? ((i = 10), (o = Math.floor(s.speed / i) * i - i))
                : ((i = +(100 / s.tempo.bpm).toFixed(2)), (o = s.speed - i)),
                o <= 170 && o >= 30 && Le(e, o);
        };
    }
    __init3() {
        this.switchMode = () => {
            const { mode: t } = this.state;
            this.setState({ mode: "percent" === t ? "bpm" : "percent" });
        };
    }
    render() {
        const { speed: t, tempo: e } = this.props.player,
            { mode: s } = this.state,
            n = qr(t, e),
            i = Math.round(t);
        let o,
            r = "rhbs rh32c";
        ("percent" === s
            ? 10 * Math.floor(t / 10) - 10
            : t - +(100 / e.bpm).toFixed(2)) >= 30 &&
            ((r = "rhbs"), (o = this.tuneDown));
        let l,
            c = "rhbs rh32c";
        return (
            ("percent" === s
                ? 10 * Math.floor(t / 10) + 10
                : t + +(100 / e.bpm).toFixed(2)) <= 170 &&
            ((c = "rhbs"), (l = this.tuneUp)),
            a(
                "div",
                { className: "rh2b2", role: "dialog", "aria-label": "Speed" },
                a(
                    "p",
                    { className: "rhld" },
                    "percent" === s ? "".concat(n.bpm, " bpm") : "".concat(i, "%")
                ),
                a(
                    "div",
                    { className: "rhq4" },
                    a("button", { className: r, onClick: o }, a(Sn, { up: !1 })),
                    a(
                        "div",
                        { className: "rh1x8" },
                        a("p", null, "percent" === s ? "".concat(i, "%") : n.bpm),
                        "bpm" === s && a("span", null, "bpm")
                    ),
                    a("button", { className: c, onClick: l }, a(Sn, { up: !0 }))
                ),
                a(
                    "button",
                    { className: "rh1sw", onClick: this.switchMode },
                    "Switch to ".concat("percent" === s ? "bpm" : "%")
                )
            )
        );
    }
}
var Kr = k(Zr, "player"),
    Qr = {
        exitActive: "hd33v",
        enterActive: "hd10c",
        enter: "hd1ve",
        exit: "hd138",
    };
const Jr = { animationStyles: Qr };
class $r extends c {
    __init() {
        this.overflowTimer = null;
    }
    __init2() {
        this.minimizeClick = () => {
            const { minimized: t } = this.state;
            clearTimeout(this.overflowTimer),
                t
                    ? (this.setState({ minimized: !1 }),
                        (this.overflowTimer = setTimeout(() => {
                            this.setState({ overflowVisible: !0 });
                        }, 500)))
                    : (this.props.handleMinimize(),
                        this.setState({ minimized: !0, overflowVisible: !1 }));
        };
    }
    componentWillUnmount() {
        clearTimeout(this.overflowTimer);
    }
    constructor() {
        super(),
            $r.prototype.__init.call(this),
            $r.prototype.__init2.call(this),
            (this.state = { minimized: !0, overflowVisible: !1 });
    }
    render() {
        const {
            device: t,
            layer: e,
            shouldPlay: s,
            canPlay: n,
            pitchShift: i,
            pitchShiftAvailable: o,
        } = this.props,
            { minimized: r, overflowVisible: l } = this.state,
            c = "plus_speed" === e,
            d = "speed" === e,
            u = "plus_solo" === e,
            h = "solo_single" === e,
            p = "plus_pitchshift" === e,
            m = "pitchshift" === e,
            g = "plus_loop" === e,
            f = "solo" === this.props.type,
            y = 100 !== this.props.speed || d,
            v = this.props.loop,
            b = this.props.isCountin,
            w = 0 !== i || m,
            x = !this.props.plusAccess,
            S = Fn(t.os) || Hn(t.os),
            C = { height: "".concat(300 + 57 * (o ? 1 : 0) + 0, "px") };
        let k = "x7r3";
        return (
            r ? ((C.height = "71px"), (k = "x7r3 x7pu")) : l && (k = "x7r3 x77p"),
            a(
                "footer",
                { className: "x72sw", "aria-controls": "tablature" },
                a(
                    "svg",
                    { width: 0, height: 0 },
                    a(
                        "defs",
                        null,
                        a(
                            "filter",
                            {
                                id: "svg_shadow",
                                width: "200%",
                                height: "200%",
                                x: "-50%",
                                y: "-50%",
                            },
                            a("feMorphology", {
                                radius: 1,
                                operator: "dilate",
                                in: "SourceAlpha",
                                result: "a",
                            }),
                            a("feOffset", { dy: 1, in: "a", result: "b" }),
                            a("feGaussianBlur", { stdDeviation: 2, in: "b", result: "c" }),
                            a("feComposite", {
                                in: "c",
                                in2: "SourceAlpha",
                                operator: "out",
                                result: "d",
                            }),
                            a("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0",
                                in: "d",
                                result: "e",
                            }),
                            a("feBlend", { in: "SourceGraphic", in2: "e", mode: "normal" })
                        )
                    )
                ),
                a(
                    "div",
                    { className: "x728w", id: "alt-controls" },
                    a(Br, {
                        shouldPlay: s,
                        canPlay: n,
                        onClick: this.props.handlePlay,
                        title: "Play",
                        hideDefs: !0,
                    })
                ),
                a(
                    "div",
                    { className: "x7x", id: "mobile-controls" },
                    a(
                        "div",
                        { className: k, style: C },
                        a(
                            "div",
                            { className: "x72iz x71gg" },
                            a(Or, {
                                mobile: !0,
                                icon: "minimizer",
                                pressed: !1,
                                onClick: this.minimizeClick,
                                title: "Minimize",
                                titlePressed: "Minimize",
                            })
                        ),
                        a(
                            "div",
                            { className: "x72iz" },
                            a(Or, {
                                mobile: !0,
                                icon: "countin",
                                pressed: b,
                                onClick: this.props.handleCountin,
                                title: "Turn count-in mode on (C)",
                                titlePressed: "Turn count-in mode off (C)",
                            })
                        ),
                        a(
                            "div",
                            { className: "x72iz" },
                            a(Or, {
                                mobile: !0,
                                icon: "loop",
                                pressed: v,
                                onClick: this.props.handleLoop,
                                title: "Turn loop mode on",
                                titlePressed: "Turn loop mode off",
                                hasPopup: x,
                            }),
                            a(
                                M,
                                null,
                                g &&
                                a(
                                    O,
                                    Jr,
                                    S
                                        ? a(ci, { title: "Loop Mode", device: t, mobile: !0 })
                                        : a(Yn, { title: "Loop Mode", left: !0 })
                                )
                            )
                        ),
                        o &&
                        a(
                            "div",
                            { className: "x72iz" },
                            0 !== i &&
                            a(
                                "div",
                                { className: "x7x5" },
                                "".concat(i > 0 ? "+" : "").concat(i)
                            ),
                            a(Or, {
                                mobile: !0,
                                icon: "tuning",
                                pressed: w,
                                onClick: this.props.handlePitchshift,
                                title: "Pitch Shift on",
                                titlePressed: "Pitch Shift off",
                                hasPopup: x,
                            }),
                            a(
                                M,
                                null,
                                p &&
                                a(
                                    O,
                                    Jr,
                                    S
                                        ? a(ci, { title: "Pitch Shift", device: t, mobile: !0 })
                                        : a(Yn, { title: "Pitch Shift", left: !0 })
                                ),
                                m &&
                                a(
                                    O,
                                    Object.assign({}, Jr, { key: "layer" }),
                                    a(Nn, { mobile: !0 })
                                )
                            )
                        ),
                        a(
                            "div",
                            { className: "x72iz" },
                            a(Or, {
                                mobile: !0,
                                icon: "speed",
                                text: "".concat(Math.round(this.props.speed), "%"),
                                pressed: y,
                                onClick: this.props.handleSpeed,
                                title: "Change playback speed",
                                hasPopup: x,
                            }),
                            a(
                                M,
                                null,
                                c &&
                                a(
                                    O,
                                    Jr,
                                    S
                                        ? a(ci, { title: "Tempo Control", device: t, mobile: !0 })
                                        : a(Yn, { title: "Tempo Control" })
                                ),
                                d && a(O, Object.assign({}, Jr, { key: "layer" }), a(Kr, null))
                            )
                        ),
                        a(
                            "div",
                            { className: "x72iz" },
                            a(Or, {
                                mobile: !0,
                                icon: "solo",
                                pressed: f,
                                onClick: this.props.handleSolo,
                                title: "Play the current track solo",
                                titlePressed: "Play the focus mix of all tracks",
                                hasPopup: x,
                            }),
                            a(
                                M,
                                null,
                                u &&
                                a(
                                    O,
                                    Jr,
                                    S
                                        ? a(ci, { title: "Solo Mode", device: t, mobile: !0 })
                                        : a(Yn, { title: "Solo Mode" })
                                ),
                                h && a(O, Jr, a(Fr, { title: "Solo", horizontal: !0 }))
                            )
                        )
                    ),
                    a(
                        "div",
                        { className: "x72iz x72ba" },
                        a(Br, {
                            onClick: this.props.handlePlay,
                            title: "Play",
                            titlePressed: "Pause",
                            shouldPlay: s,
                            canPlay: n,
                            hideDefs: !0,
                        })
                    )
                )
            )
        );
    }
}
function tl({ styles: { icon: t, stroke: e } }) {
    return a(
        "svg",
        { width: 27, height: 25, viewBox: "0 0 27 25", className: t },
        a("path", { d: "M0 5h27M0 12h27M0 19h27", className: e, "stroke-width": 2 })
    );
}
function el({ up: t, styles: { icon: e, stroke: s } }) {
    return a(
        "svg",
        { width: 14, height: 12, viewBox: "0 0 26 17", className: e },
        a("path", {
            d: t ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
            className: s,
            "stroke-width": 4,
            "stroke-linecap": "square",
        })
    );
}
function sl({ width: t, height: e, styles: { icon: s, stroke: n } }) {
    return a(
        "svg",
        {
            width: t || 29,
            height: e || 27,
            viewBox: "0 0 1000 820",
            className: s,
            "aria-labelledby": "title-faq",
        },
        a("title", { id: "title-faq" }, "Frequently Asked Questions"),
        a("path", {
            d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
        })
    );
}
var nl = {
    header: "C363k",
    wrapper: "C361vt",
    stroke: "C3624f",
    burger: "C3634",
    help: "C361w0",
    mixer: "C36ua",
    instrument: "C3633g",
    img: "C36o6",
    title: "C36102",
    icon: "C362np",
};
const il = { animationStyles: yo };
function ol(t) {
    const { songs: e } = C("songs"),
        s = "mixer" === t.layer,
        { track: n } = t,
        i = n ? "".concat(n.name, " - ").concat(n.instrument) : "Instrument";
    return a(
        "header",
        { className: nl.header, "aria-controls": "tablature" },
        a(
            "div",
            { className: nl.wrapper },
            a(
                Un,
                {
                    to: "/".concat(or(e.pattern, e.filters)),
                    className: nl.burger,
                    title: "Search",
                    id: "burger",
                },
                a(tl, { styles: nl })
            ),
            a(
                "button",
                {
                    className: nl.mixer,
                    onClick: t.handleMixer,
                    role: "button",
                    id: "control-mixer",
                    title: s ? "Hide tracks" : "Show tracks",
                    "aria-haspopup": !0,
                    "aria-pressed": s,
                },
                a("div", { className: nl.title }, i),
                a(el, { up: s, styles: nl })
            ),
            a(
                Un,
                { to: "/a/wa/help", className: nl.help, title: "Help" },
                a(sl, { width: 27, height: 25, styles: nl })
            )
        ),
        a(M, null, s && a(O, il, a(Ar, null)))
    );
}
const al = ["ALL INSTRUMENTS", "GUITAR", "BASS", "DRUMS"],
    rl = ["Any Difficulty", "Beginner", "Intermediate", "Advanced"],
    ll = {
        instrument: "ALL INSTRUMENTS",
        difficulty: "Any Difficulty",
        tunings: {},
    },
    cl = t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
function dl(t) {
    const e = t.split(":");
    return [
        e[0],
        ((s = e[1].split(",")),
            s.map(t => {
                const e = +t.slice(-1),
                    s = t.substring(0, t.length - 1);
                return nn.indexOf(s) + 12 * (e + 1);
            })).join(","),
    ];
    var s;
}
const ul = t => (t.difficulty ? t.difficulty : null);
function hl(t, e) {
    return Object.assign({}, t, { difficulty: e });
}
function pl(t, e) {
    return Object.assign({}, t, { instrument: e });
}
function ml(t, e, s) {
    const n = Object.assign({}, t, { tunings: Object.assign({}, t.tunings) });
    return (n.tunings[e] = s), n;
}
function gl(t) {
    return t.tracks
        ? 0 === t.tracks.length
            ? 0
            : t.tracks[t.defaultTrack].views
        : 0;
}
function fl(t) {
    const e = t.tunings[t.instrument];
    return (
        (e && "ALL TUNINGS" !== e) ||
        "ALL INSTRUMENTS" !== t.instrument ||
        "Any Difficulty" !== t.difficulty
    );
}
function yl(t) {
    return "ALL INSTRUMENTS" !== t && "GUITAR" !== t;
}
function vl(t) {
    const e = t.tunings[t.instrument];
    return {
        difficulty: "Any Difficulty" !== t.difficulty ? t.difficulty : null,
        instrument: "ALL INSTRUMENTS" !== t.instrument ? t.instrument : null,
        tuning: e && "ALL TUNINGS" !== e ? dl(e)[1] : null,
    };
}
function bl(t) {
    return H(t) ? 1024 : U(t) ? 32 : 24;
}
function wl(t, e) {
    const s = (function (t) {
        return H(t) ? H : U(t) ? U : q;
    })(e);
    return (
        t &&
        t.map(t => {
            if (t.tracks) {
                const e = t.tracks.reduce(
                    (t, e, n, i) =>
                        s(e.instrumentId) && (-1 === t || e.views > i[t].views) ? n : t,
                    -1
                );
                return -1 !== e ? Object.assign({}, t, { defaultTrack: e }) : t;
            }
            return t;
        })
    );
}
function xl(t, e) {
    if (t.difficulty !== e.difficulty && t.instrument !== e.instrument) return !1;
    const s = t.tunings[t.instrument],
        n = e.tunings[e.instrument];
    return (!s && !n) || s === n;
}
function Sl({ noObserver: t, children: e }) {
    return a(
        "div",
        { className: t ? "D1n1ps" : "D1n1ps D1n29v", id: "sticky-list-header" },
        e
    );
}
var Cl = {
    item: "Beifj",
    wrapper: "Bei2e1",
    numerated: "Beifj Bei2fq",
    name: "Beiqi",
    artist: "Bei15k",
    favorite: "Beifj Bei2e9",
    active: "Bei168",
    removal: "Bei2ts",
    controls: "Bei5d",
    buttons: "Bei20c",
    cancel: "Cpb24q Cpb2j Cpb24q Cpb13f Bei2zx",
    remove: "Cpb24q Cpb2uv Cpb24q Cpb13f Bei2du",
    fav: "Bei275",
    icon: "Bei1yt",
};
const kl = u(({ song: t, isActive: e, numerated: s, difficultyNA: n = !1 }) => {
    let i = s ? Cl.numerated : Cl.item;
    e && (i += " " + Cl.active);
    const { defaultTrack: o } = t,
        a = t.tracks && t.tracks[o],
        r = a ? t.difficulty : null,
        l = vi(t, o, void 0, (a && a.instrumentId) || void 0);
    return h(Un, {
        to: l,
        className: i,
        "data-song": "",
        children: [
            h("div", {
                className: Cl.wrapper,
                children: [
                    h("div", {
                        className: Cl.name,
                        "data-field": "name",
                        children: t.title,
                    }),
                    h("div", {
                        className: Cl.artist,
                        "data-field": "artist",
                        children: t.artist,
                    }),
                ],
            }),
            h(Ua, {
                "data-field": "difficulty",
                difficultyString: r,
                difficultyNA: n,
                isNumerated: s || !1,
            }),
        ],
    });
});
function Nl({ width: t, height: e, styles: s, fill: n, onClick: i, role: o }) {
    return a(
        "svg",
        {
            width: t || 18,
            height: e || 18,
            viewBox: "0 0 18 18",
            fill: n,
            onClick: i,
            role: o,
            className: s.iconReset,
        },
        a("circle", { cx: 9, cy: 9, r: 8.15 }),
        a("path", { d: "M11.7 6.3l-5.4 5.4m5.4 0L6.3 6.3" })
    );
}
function Ll({ width: t, height: e, styles: { icon: s } }) {
    return a(
        "svg",
        { width: t || 20, height: e || 20, viewBox: "0 0 20 20", className: s },
        a("path", {
            d: "M14.84 13.485a8.276 8.276 0 001.804-5.168C16.644 3.727 12.915 0 8.322 0 3.729 0 0 3.727 0 8.317s3.729 8.317 8.322 8.317a8.286 8.286 0 005.177-1.807l4.691 4.854a1.04 1.04 0 001.486.014l.018-.017a1.042 1.042 0 00-.012-1.488l-4.841-4.705zM1.85 8.317a6.473 6.473 0 0112.944 0 6.473 6.473 0 01-12.944 0z",
        })
    );
}
var Tl = {
    search: "Cgl1ut",
    staticSearch: "Cgl1ut Cgl2mk",
    field: "Cgl126",
    iconReset: "Cgl2ed",
    icon: "Cgl35m",
};
function Il({
    loading: t,
    className: e,
    placeholder: s,
    value: n,
    setValue: i,
    isDesktop: r,
    inputRef: l,
}) {
    const c =
        r &&
        b &&
        -1 === window.location.search.indexOf("l11_tracking=") &&
        -1 === window.location.href.indexOf("#");
    c && o(() => l.current.focus(), []);
    const d = t
        ? a(ao, { fill: "#777", width: 20, height: 20, className: "Csr2lv Csr28t" })
        : a(Ll, { width: 20, height: 20, styles: Tl });
    return a(
        "div",
        { className: e || Tl.search },
        d,
        a("input", {
            autofocus: c,
            className: Tl.field,
            "data-hotkey": !0,
            type: "text",
            placeholder: s,
            value: n,
            ref: l,
            enterkeyhint: "search",
            onInput: t => i(t.currentTarget.value),
            onKeyDown: t => 27 === t.keyCode && i(""),
        }),
        n &&
        a(Nl, {
            styles: Tl,
            onClick: () => {
                i(""), l.current.focus();
            },
            role: "button",
        })
    );
}
const _l = {};
function El(t, e) {
    (t.onload = function () {
        (this.onerror = this.onload = null), e(null, t);
    }),
        (t.onerror = function () {
            (this.onerror = this.onload = null),
                e(new Error("Failed to load " + this.src), t);
        });
}
function Pl(t, e) {
    t.onreadystatechange = function () {
        ("complete" !== this.readyState && "loaded" !== this.readyState) ||
            ((this.onreadystatechange = null), e(null, t));
    };
}
function Al(t, e) {
    return (
        _l[e] ||
        (_l[e] = new Promise((s, n) => {
            !(function (t, e) {
                const s = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("script");
                (n.async = !0),
                    (n.defer = !0),
                    (n.src = t),
                    ("onload" in n ? El : Pl)(n, e),
                    n.onload || El(n, e),
                    s.appendChild(n);
            })(t, (t, i) => {
                t ? ((window[e] = !1), n(t)) : ((window[e] = !0), s());
            });
        })),
        _l[e]
    );
}
const Ml = [
    "touchstart",
    "click",
    "scroll",
    "mousewheel",
    "mousemove",
    "mousedown",
],
    Bl = t => t.replace(/["'=!+#*~;^()<>[\],&]/, "");
function Dl(
    {
        route: t,
        block: e,
        options: s,
        personalization: n,
        songId: i,
        artist: o,
        song: a,
    },
    r
) {
    if (t.page !== s.page)
        return void (
            console && console.log("notsy fire blocked", { block: e, songId: i })
        );
    const l = !n,
        c = [];
    s.isTargeted &&
        (i && c.push(["songID", i]),
            o && c.push(["artist", o]),
            a && c.push(["song", a])),
        r.plus_banners && c.push(["plus_banners", r.plus_banners]),
        console &&
        console.log("notsy fire success", { block: e, npa: l, targeting: c }),
        window.notsyInit({ page: e, npa: l, targeting: c });
}
function Ol(t, e) {
    if (!b) return;
    console && console.log("notsy use", t, e);
    const {
        dispatch: s,
        ads: n,
        consent: i,
        meta: a,
        route: r,
    } = C("ads", "consent", "meta", "route");
    if (n.notsyFailed) return;
    if (void 0 === i.profiling) return;
    if ("tab" === r.page) {
        if (a.loading) return;
        const { songId: t } = r;
        if (+t !== a.songId) return;
    }
    window.googlefc = void 0;
    const l = !!i.profiling,
        { songId: c, partId: d, revisionId: u } = a,
        h = Bl(a.current && a.current.artist),
        p = Bl(a.current && a.current.title),
        g = [c, d, u, h, p, l, r.page, e.instrumentFilter];
    if (n.notsyLoaded)
        o(
            () =>
                s("notsy/fire", {
                    route: r,
                    block: t,
                    songId: c,
                    artist: h,
                    song: p,
                    options: e,
                    personalization: l,
                }),
            g
        );
    else {
        let n;
        const i = m(async () => {
            clearTimeout(n),
                Ml.forEach(t => document.removeEventListener(t, i)),
                s("notsy/load", {
                    route: r,
                    block: t,
                    songId: c,
                    artist: h,
                    song: p,
                    options: e,
                    personalization: l,
                });
        }, g);
        o(
            () => (
                Ml.forEach(t => document.addEventListener(t, i)),
                (n = setTimeout(async () => {
                    Ml.forEach(t => document.removeEventListener(t, i)),
                        s("notsy/load", {
                            route: r,
                            block: t,
                            songId: c,
                            artist: h,
                            song: p,
                            options: e,
                            personalization: l,
                        });
                }, 0)),
                () => clearTimeout(n)
            ),
            g
        );
    }
}
const jl = t => {
    !b &&
        t.on("@init", () => ({
            ads: { notsyLoaded: null, notsyFailed: null, shouldShowPlus: !1 },
        })),
        t.on("notsy/fire", (t, e) => Dl(e, t.experiments)),
        t.on("notsy/load", (e, s) =>
            (async function (t, e, s) {
                try {
                    await (async function () {
                        return "dev" === window.__STAGE__
                            ? null
                            : Promise.all([
                                Al(
                                    "https://www.googletagservices.com/tag/js/gpt.js",
                                    "__LOADED_GTP__"
                                ),
                                Al(
                                    "https://cdn-b.notsy.io/sng/" +
                                    ("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
                                    "__LOADED_NOTSY__"
                                ),
                            ]);
                    })(),
                        Dl(t, s),
                        e("notsy/load:done", { loaded: window.__LOADED_NOTSY__ });
                } catch (t) {
                    e("notsy/load:error");
                }
            })(s, t.dispatch, e.experiments)
        ),
        t.on("notsy/load:done", (t, { loaded: e }) => ({
            ads: Object.assign({}, t.ads, { notsyLoaded: e, notsyFailed: !e }),
        })),
        t.on("notsy/load:error", t => ({
            ads: Object.assign({}, t.ads, { notsyLoaded: !1, notsyFailed: !0 }),
        })),
        b &&
        t.on("route/change", e => {
            "on" === e.experiments.plus_banners &&
                "tab" === e.route.page &&
                t.dispatch("ads/plus");
        }),
        t.on("ads/plus", e => {
            if ("on" !== e.experiments.plus_banners) return;
            if ("tab" !== e.route.page) return;
            const { shouldShowPlus: s, timeout: n } = (() => {
                const t = Date.now(),
                    e = (Zn("hasSeenPlusBanners") || []).filter(
                        t => t > Date.now() - 864e5
                    ),
                    s = e[e.length - 1];
                if (!s)
                    return (
                        e.push(t),
                        Kn("hasSeenPlusBanners", e),
                        { shouldShowPlus: !0, timeout: 3e4 }
                    );
                const n = +new Date(s) + 3e4,
                    i = n + 12e4;
                return n > t
                    ? { shouldShowPlus: !0, timeout: n - t }
                    : n < t && i > t
                        ? { shouldShowPlus: !1, timeout: i - t }
                        : e.length >= 3
                            ? { shouldShowPlus: !1, timeout: 12e4 }
                            : (e.push(t),
                                Kn("hasSeenPlusBanners", e),
                                { shouldShowPlus: !0, timeout: 3e4 });
            })();
            return (
                console &&
                console.warn(
                    "Time for "
                        .concat(s ? "Plus" : "Ads", " for next ")
                        .concat(n, "ms!")
                ),
                setTimeout(() => t.dispatch("ads/plus"), n),
                { ads: Object.assign({}, e.ads, { shouldShowPlus: s }) }
            );
        });
};
const Rl = u(({ page: t, instrumentFilter: e }) => {
    const { dispatch: s, ads: n } = C("ads"),
        i = m(() => {
            s("curiosity/setConversionProps", {
                "Last referring link": "Panel Banner",
            });
        }, []);
    return (
        Ol("search_panel", { isTargeted: !1, page: t, instrumentFilter: e }),
        a(
            "div",
            { className: "am1mp", id: "showroom_sidebar" },
            a(
                "div",
                { className: "B641uo am1rz", id: "Redesign_ATF_tab_page_468x60" },
                n.notsyFailed &&
                a(
                    Un,
                    { className: "am1s2", to: "/a/wa/plus", onClick: i },
                    a("img", {
                        src: "/static/media/plus-banner-sidebar.ec2eb1fd.svg",
                        alt: "Get Plus",
                    })
                )
            )
        )
    );
});
class zl extends c {
    render() {
        return a(
            "svg",
            {
                width: 189,
                height: 100,
                viewBox: "0 0 ".concat(189, " ").concat(100),
                fill: "#E03A3A",
            },
            a("rect", { x: "90", width: "98", height: "4.1" }),
            a("rect", { x: "90", y: "24", width: "98", height: "4.1" }),
            a("rect", { x: "91", y: "48", width: "98", height: "4.1" }),
            a("rect", {
                x: "54.12",
                y: "47.15",
                width: "38.82",
                height: "4.1",
                transform: "rotate(40.52 54.12 47.15)",
            }),
            a("rect", { x: "91", y: "72", width: "97", height: "4.1" }),
            a("rect", { y: "96", width: "188", height: "4.1" }),
            a("circle", {
                cx: "31",
                cy: "31",
                r: "29",
                stroke: "#E03A3A",
                "stroke-width": "4.1",
                fill: "none",
            })
        );
    }
}
function Fl({
    id: t,
    icon: e,
    header: s,
    headerColor: n,
    hint: i,
    children: o,
}) {
    const r = "red" === n ? "Cjv34i Cjvnv" : "Cjv34i";
    return a(
        "div",
        { className: "Cjvnd", "data-stub": t },
        e(),
        a(
            "div",
            { className: "Cjv33n" },
            a("div", { className: r }, s),
            i && a("div", { className: "Cjv1ie", "aria-label": "hint" }, i())
        ),
        o
    );
}
function Hl({ styles: { icon: t, stroke: e } }) {
    return a(
        "svg",
        { width: 10, height: 6, viewBox: "0 1 10 6", className: t },
        a("path", { d: "M1 1l4 4 4-4", className: e })
    );
}
const ql =
    "15v-9c0-1.037-.429-3.811-.429-3.811.286-.214.286-1.138.286-1.32 0-.229-.25-.869-.857-.869s-.857.64-.857.869c0 .182 0 1.147.286 1.32 0 0-.429 2.819-.429 3.811v9s0 1 1 1 1-1 1-1z";
function Ul({ className: t, instrument: e }) {
    switch (e) {
        case "ALL INSTRUMENTS":
            return a(
                "svg",
                { width: 19, height: 16, viewBox: "0 0 19 16", className: t },
                a("path", { d: "M15 ".concat(ql) }),
                a("path", { d: "M19 ".concat(ql) }),
                a("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M1.818 1.28a.97.97 0 01.801-.948c.757-.145 1.917-.332 2.88-.332.965 0 2.125.187 2.881.332a.97.97 0 01.802.949v1.476c.192-.193.464-.314.766-.314.581 0 1.052.447 1.052 1 0 .552-.471 1-1.052 1-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v1.437c.192-.194.464-.315.766-.315.581 0 1.052.448 1.052 1s-.471 1-1.052 1c-.302 0-.574-.121-.766-.315v.809c0 .552-.445 1.449-1.052 1.449v.5h-5.26v-.5c-.581 0-1.052-.897-1.052-1.45v-.807a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.435a1.075 1.075 0 01-.766.314c-.581 0-1.052-.448-1.052-1s.471-1 1.052-1c.302 0 .574.12.766.314v-1.436a1.075 1.075 0 01-.766.315c-.581 0-1.052-.448-1.052-1 0-.553.471-1 1.052-1 .302 0 .574.12.766.314v-1.476zm1.277 2.126a.75.75 0 01.75-.75h.078a.75.75 0 01.75.75v5.706a.75.75 0 01-.75.75h-.078a.75.75 0 01-.75-.75v-5.706zm4.207-.75a.75.75 0 00-.75.75v5.706c0 .414.336.75.75.75h.078a.75.75 0 00.75-.75v-5.706a.75.75 0 00-.75-.75h-.078zm.828 12.344v-2h-5.26v2s0 1 2.63 1 2.63-1 2.63-1z",
                })
            );
        case "GUITAR":
            return a(
                "svg",
                { width: 19, height: 18, viewBox: "0 0 14 18", className: t },
                a("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.314 1.44c0-.515.417-.965 1.02-1.067.963-.163 2.44-.373 3.666-.373s2.703.21 3.666.373c.602.102 1.02.552 1.02 1.068v1.661c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125 0 .622-.6 1.125-1.339 1.125-.384 0-.73-.136-.975-.354v1.616c.244-.218.59-.354.975-.354.74 0 1.339.504 1.339 1.125s-.6 1.125-1.339 1.125c-.384 0-.73-.136-.975-.354v.91c0 .62-.566 1.63-1.339 1.63v.563h-6.694v-.563c-.74 0-1.34-1.01-1.34-1.63v-.91c-.244.218-.59.354-.974.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.615c-.245.217-.59.353-.975.353-.74 0-1.339-.503-1.339-1.125 0-.621.6-1.125 1.339-1.125.384 0 .73.136.975.354v-1.616c-.245.218-.59.354-.975.354-.74 0-1.339-.504-1.339-1.125s.6-1.125 1.339-1.125c.384 0 .73.136.975.354v-1.661zm1.625 2.298a.75.75 0 01.75-.75h.508a.75.75 0 01.75.75v6.607a.75.75 0 01-.75.75h-.508a.75.75 0 01-.75-.75v-6.607zm5.15-.75a.75.75 0 00-.75.75v6.607c0 .414.335.75.75.75h.508a.75.75 0 00.75-.75v-6.607a.75.75 0 00-.75-.75h-.508zm1.258 11.637h-6.694v2.25s0 1.125 3.347 1.125 3.347-1.125 3.347-1.125v-2.25z",
                })
            );
        case "BASS":
            return a(
                "svg",
                { width: 19, height: 18, viewBox: "0 0 16 18", className: t },
                a("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M4.39.373c-.602.102-1.02.552-1.02 1.068l.086 1.31h-.46a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.615l.257 3.948h-.58a1.313 1.313 0 10-2.301.732 1.313 1.313 0 102.245.806h.736l.145 2.225c0 .621 0 1 .652 1.5v.563h6.695v-.563c.653-.5.653-.879.653-1.5l.049-.758h.683a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.527l.258-3.978h.596a1.313 1.313 0 102.245-.806 1.313 1.313 0 10-2.301-.732h-.44l.179-2.747c0-.516-.418-.966-1.02-1.068-.964-.163-2.44-.373-3.666-.373-1.227 0-2.703.21-3.667.373zm7.014 14.252h-6.695v2.25s0 1.125 3.348 1.125c3.347 0 3.347-1.125 3.347-1.125v-2.25z",
                }),
                a("circle", { fill: "#fff", r: 1, cx: 6, cy: 4 }),
                a("circle", { fill: "#fff", r: 1, cx: 10, cy: 5 }),
                a("circle", { fill: "#fff", r: 1, cx: 10, cy: 10 }),
                a("circle", { fill: "#fff", r: 1, cx: 6, cy: 9 })
            );
        case "DRUMS":
            return a(
                "svg",
                { width: 19, height: 19, viewBox: "0 0 18 19", className: t },
                a("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M18 14.847a1.918 1.918 0 01-.085.537 2.888 2.888 0 01-.232.55 3.705 3.705 0 01-.816 1.026 5.618 5.618 0 01-.707.53 7.124 7.124 0 01-.943.507c-.014-.09-.012-4.747-.012-4.747 0-.53.004-1.098.012-1.703a6.735 6.735 0 001.309-.773c.173-.133.34-.276.497-.428.163-.158.312-.33.446-.514.134-.185.248-.386.339-.598.094-.216.156-.446.185-.682l.006 6.295h.001zm-11.175-2.668c.177.04 1.112.19 1.112.19.332.049.706.091 1.123.127.417.037.837.055 1.262.055.422 0 .843-.024 1.262-.072a14.308 14.308 0 002.2-.422v6.448c-.324.097-.671.181-1.042.254-.324.064-.692.12-1.106.168-.436.05-.875.075-1.314.073-.463 0-.903-.018-1.32-.055a18.009 18.009 0 01-1.112-.127l-.55-.088a7.536 7.536 0 01-.514-.103l-.001-6.448zm-4.169-3.357c.05.415.197.812.429 1.16.229.347.506.656.822.917.45.363.955.64 1.494.822v6.448a3.985 3.985 0 01-1.239-.604 3.976 3.976 0 01-.48-.398 3.41 3.41 0 01-.44-.526 3.804 3.804 0 01-.36-.664 3.39 3.39 0 01-.226-.803v-6.352zm15.343-1.632a2.175 2.175 0 01-.17.795c-.13.312-.308.6-.526.852-.272.316-.58.598-.915.839-.416.3-.863.55-1.332.747a8.69 8.69 0 01-.84.32c-.327.108-.69.207-1.087.296-.396.088-.826.16-1.291.217-.478.059-.959.089-1.44.089-.502 0-1.029-.02-1.58-.06-.546-.04-1.09-.11-1.627-.212a11.28 11.28 0 01-1.525-.398 4.947 4.947 0 01-1.262-.618 5.496 5.496 0 01-.88-.73 3.675 3.675 0 01-.532-.708 2.356 2.356 0 01-.266-.712 4.05 4.05 0 01-.07-.761c-.022-.474.118-.94.394-1.316l-2.582-.79a.744.744 0 01-.278-.169.85.85 0 01-.156-.236.522.522 0 01-.006-.353.424.424 0 01.22-.314.745.745 0 01.339-.066c.105.003.211.021.312.055.05.019.545.193.545.193l8.729 3.245.105.097a.308.308 0 01.023.29.287.287 0 01-.133.163.218.218 0 01-.17-.006c-.015 0-.2-.052-.555-.157a549.208 549.208 0 01-5.176-1.579c-.1.14-.187.287-.26.442-.087.169-.125.36-.11.55.015.221.059.44.126.651.077.23.198.44.354.619.197.222.427.41.683.555.357.201.736.353 1.129.454a13.61 13.61 0 002.415.483c.698.064 1.271.096 1.719.096a15.048 15.048 0 002.13-.187c.437-.069.869-.162 1.296-.278a5.084 5.084 0 001.147-.453c.332-.176.614-.342.847-.495.206-.132.396-.287.567-.465.139-.143.246-.313.319-.5.07-.199.103-.409.098-.62a1.153 1.153 0 00-.231-.668 2.76 2.76 0 00-.602-.604 5.515 5.515 0 00-.874-.53 10.19 10.19 0 00-2.434-.837 4.178 4.178 0 00-.863-.102c-.031-.016-1.55-1.376-1.55-1.376.309-.009.614-.005.915.012.3.016.605.04.914.072.57.056 1.134.153 1.69.29.294.073.584.16.869.265.277.102.549.222.81.362.452.239.883.52 1.286.84.301.238.572.516.804.827a2.66 2.66 0 01.539 1.582v.002h-.001zm-15.1-6.075a1.449 1.449 0 01-.231-.232.62.62 0 01-.11-.26.6.6 0 01.064-.353.412.412 0 01.277-.254.75.75 0 01.34.006c.102.024.2.065.289.121.042.03 7.315 4.599 8.056 5.069.031.033.06.07.084.108a.467.467 0 01.03.133.248.248 0 01-.053.157c-.062.088-.118.134-.17.138-.059.002-.395-.163-.395-.163-.184-.099-2.367-1.293-2.367-1.293-.2.04-.525.116-.973.23-.55.146-1.091.327-1.62.543-.079-.026-1.24-.705-1.356-.782.128-.063 1.25-.599 1.499-.689a5.15 5.15 0 01.77-.217c-.532-.282-1.04-.56-1.524-.833-.437-.248-2.61-1.429-2.61-1.429z",
                })
            );
        case "ALL TUNINGS":
            return a(
                "svg",
                { width: 14, height: 16, viewBox: "0 0 14 16", className: t },
                a("path", {
                    fill: "none",
                    "data-style": "stroke",
                    "stroke-width": 2,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M5 1v7.3c0 .522.4 2.7 2 2.7s2-2.178 2-2.7v-7.3",
                }),
                a("rect", { x: 6, y: 10, width: 2, height: 6, rx: 1 }),
                a("rect", { y: 2, width: 2, height: 6, rx: 1 }),
                a("rect", { x: 12, y: 2, width: 2, height: 6, rx: 1 })
            );
        default:
            return null;
    }
}
var Vl = {
    outer: "Bj1jq",
    stroke: "Bjq9",
    filterIcon: "Bj41",
    title: "Bj1jq Bj1x4",
    active: "Bj1jq Bj1",
    icon: "Bj1r8",
    customSelect: "Bj1ss",
    chosenValue: "Bj15n",
    opened: "Bj170",
    left: "Bj1g5",
};
const Gl = [...al, "ALL TUNINGS"],
    Xl = ({
        id: t,
        onChange: e,
        opened: s,
        onClick: n,
        selectedValue: i,
        disabled: r,
        values: l,
        labels: c,
        left: u,
        linkUrls: h,
        title: p,
    }) => {
        const m = g();
        o(() => {
            const e = {
                up: t => {
                    t.preventDefault(), t.stopPropagation();
                    const e =
                        document.activeElement && document.activeElement.previousSibling;
                    e && e.hasAttribute && e.hasAttribute("data-filter")
                        ? e.focus()
                        : m.current && m.current.children && m.current.children[0].focus();
                },
                down: t => {
                    t.preventDefault(), t.stopPropagation();
                    const e =
                        document.activeElement && document.activeElement.nextSibling;
                    e && e.hasAttribute && e.hasAttribute("data-filter")
                        ? e.focus()
                        : m.current && m.current.children && m.current.children[0].focus();
                },
                space: t => {
                    t.preventDefault(), t.stopPropagation();
                },
                tab: () => {
                    if (
                        document.activeElement &&
                        document.activeElement.hasAttribute("data-filter")
                    ) {
                        const t = document.activeElement.nextSibling;
                        (t && t.hasAttribute && t.hasAttribute("data-filter")) || n();
                    }
                },
                esc: t => {
                    t.preventDefault(), t.stopPropagation(), n();
                },
            };
            return (
                s &&
                (window.hotKeysManager.bind(e, { onPanelPopup: !0 }, t),
                    window.hotKeysManager.bindMeta(
                        "shift+tab",
                        () => {
                            if (
                                document.activeElement &&
                                document.activeElement.hasAttribute("data-filter")
                            ) {
                                const t = document.activeElement.previousSibling;
                                (t && t.hasAttribute && t.hasAttribute("data-filter")) || n();
                            } else n();
                        },
                        t
                    )),
                () => {
                    s &&
                        (window.hotKeysManager.unbind(e, { onPanelPopup: !0 }, t),
                            window.hotKeysManager.unbindMeta("shift+tab", t));
                }
            );
        }, [t, s]);
        const f = 0 !== l.indexOf(i) || s ? Vl.active : "",
            y = ""
                .concat(Vl.customSelect, " ")
                .concat(s ? Vl.opened : "", " ")
                .concat(u ? Vl.left : "");
        let v = r ? c[0] : c[l.indexOf(i)] || i;
        Gl.includes(v.toUpperCase()) &&
            (v = a(Ul, { className: Vl.filterIcon, instrument: v.toUpperCase() }));
        const b = t => {
            t.preventDefault(), t.stopPropagation(), n(), t.target.focus();
        };
        return a(
            d,
            {},
            a(
                "button",
                {
                    id: "".concat(t, "Button"),
                    className: "".concat(f, " ").concat(Vl.title),
                    onClick: b,
                    onKeyPress: t => 13 === t.keyCode && b(t),
                    disabled: r,
                    title: "Filter by ".concat(p),
                },
                u && a(Hl, { styles: Vl }),
                v,
                !u && a(Hl, { styles: Vl })
            ),
            a(
                "div",
                { id: t, className: y, ref: m, role: "list" },
                l.map((t, s) => {
                    const o = (c && void 0 !== c[s] && c[s]) || t,
                        r = void 0 !== i && i === t,
                        l = r ? Vl.chosenValue : void 0,
                        d = s => {
                            s.preventDefault(), e(t), n();
                        },
                        u = h ? h[s] : ".";
                    return a(
                        "a",
                        {
                            className: l,
                            onClick: d,
                            onKeyPress: t => 13 === t.keyCode && d(t),
                            href: u,
                            "data-filter": !0,
                            "data-value": o,
                            "data-selected": r.toString(),
                            role: "listitem",
                            title: o,
                        },
                        o
                    );
                })
            )
        );
    };
function Wl(t) {
    const {
        tuningFilter: e,
        instrumentFilter: s,
        difficultyFilter: n,
        setTuningFilter: i,
        setInstrumentFilter: o,
        setDifficultyFilter: r,
        isSmallScreen: l,
        spacerSize: c,
        numberSpacer: d,
        instrumentSEOLinks: u,
        activeFilter: h,
        onFilterClick: p,
    } = t;
    let { difficultyFilterNA: m } = t;
    void 0 === m && (m = !1);
    const g = "DRUMS" === s,
        f = (function (t) {
            const e = [];
            function s(t, s, n = 0, i) {
                0 !== n &&
                    (s = (function (t, e) {
                        return t.map(t => t + e);
                    })(s, n)),
                    (i = i || "ALL INSTRUMENTS");
                const o = pn(s).join(","),
                    a = "".concat(i, ":").concat(o),
                    r = (function (t) {
                        return pn(t, !1).reverse().join(" ");
                    })(s);
                e.push(["".concat(t, " (").concat(r, ")"), a]);
            }
            function n() {
                s("Standard 6-string", cn, 0, "GUITAR"),
                    s("Standard 7-string", un, 0, "GUITAR"),
                    s("Drop D", dn, 0, "GUITAR"),
                    s("Drop C#", dn, -1, "GUITAR"),
                    s("Drop C", dn, -2, "GUITAR"),
                    s("Drop B", dn, -3, "GUITAR"),
                    s("Drop A#", dn, -4, "GUITAR"),
                    s("Drop A", dn, -5, "GUITAR"),
                    s("Drop G#", dn, -6, "GUITAR"),
                    s("Drop G", dn, -7, "GUITAR"),
                    s("Drop F#", dn, -8, "GUITAR"),
                    s("Drop F", dn, -9, "GUITAR");
            }
            if ((e.push([cl("ALL TUNINGS"), "ALL TUNINGS"]), "BASS" === t)) {
                s("Standard 4-string", on, 0, "BASS"),
                    s("Standard 5-string", rn, 0, "BASS"),
                    s("Standard 6-string", ln, 0, "BASS"),
                    s("Drop D", an, 0, "BASS"),
                    s("Drop C#", an, -1, "BASS"),
                    s("Drop C", an, -2, "BASS"),
                    s("Drop B", an, -3, "BASS"),
                    s("Drop A#", an, -4, "BASS"),
                    s("Drop A", an, -5, "BASS");
                for (let t = 1; t <= 7; t++)
                    s("".concat(t, " st down"), on, -t, "BASS");
            } else if ("GUITAR" === t) {
                n();
                for (let t = 1; t <= 7; t++)
                    s("".concat(t, " st down"), cn, -t, "GUITAR");
            } else if ("ALL INSTRUMENTS" === t) {
                n();
                for (let t = 1; t <= 7; t++)
                    s("".concat(t, " st down"), cn, -t, "GUITAR");
                s("Bass: 4-string", on, 0, "BASS"),
                    s("Bass: 5-string", rn, 0, "BASS"),
                    s("Bass: 6-string", ln, 0, "BASS"),
                    s("Bass: Drop D", an, 0, "BASS"),
                    s("Bass: Drop C#", an, -1, "BASS"),
                    s("Bass: Drop C", an, -2, "BASS"),
                    s("Bass: Drop B", an, -3, "BASS"),
                    s("Bass: Drop A#", an, -4, "BASS"),
                    s("Bass: Drop A", an, -5, "BASS");
            }
            return e;
        })(s);
    let y = "Cw9206 Cw920x";
    return (
        "big" === c
            ? (y = "Cw9206 Cw91r4")
            : "small" === c && (y = "Cw9206 Cw920x Cw95a"),
        a(
            "div",
            { className: "Cw92oa" },
            a("div", { className: y }, d && a("span", { className: "Cw91la" }, "#")),
            a(
                "div",
                { className: "Cw9206 Cw91u4" },
                a(Xl, {
                    id: "filterByInstrumentSelect",
                    onChange: o,
                    selectedValue: s,
                    opened: "instrument" === h,
                    onClick: () => {
                        p("instrument");
                    },
                    values: al,
                    labels: al.map(cl),
                    linkUrls: u,
                    title: "instrument",
                })
            ),
            !l &&
            a(
                "div",
                { className: "Cw9206" },
                a(Xl, {
                    id: "filterByTuningSelect",
                    onChange: i,
                    selectedValue: e,
                    opened: "tunning" === h,
                    onClick: () => {
                        p("tunning");
                    },
                    disabled: g,
                    values: f.map(t => t[1]),
                    labels: f.map(t => t[0]),
                    title: "tuning",
                })
            ),
            a(
                "div",
                { className: "Cw9206" },
                a(Xl, {
                    id: "filterByDifficultySelect",
                    onChange: t => r(t),
                    opened: "difficulty" === h,
                    onClick: () => {
                        p("difficulty");
                    },
                    left: !0,
                    disabled: m,
                    selectedValue: n,
                    values: rl,
                    labels: rl,
                    title: "difficulty",
                })
            )
        )
    );
}
const Yl = ({ usesFilters: t = !1, numResults: e = 0, resetFilter: s }) => {
    const n = t => {
        t.preventDefault(), s();
    };
    if (e > 0 || t) {
        const s = t
            ? " to see more tabs"
            : " to see "
                .concat(e, " ")
                .concat(0 === (i = e) || i > 1 ? "tabs" : "tab");
        return a(
            "div",
            { className: "Cjj2ub" },
            a(
                "a",
                { onClick: n, "data-action": "resetFilters", tabIndex: 0 },
                "Reset filter"
            ),
            s
        );
    }
    var i;
    return a(
        "div",
        { className: "Cjj2ub" },
        "Start a ",
        a(
            "a",
            { onClick: n, "data-action": "resetFilters", tabIndex: 0 },
            "new search"
        )
    );
};
var Zl = {
    basepanel: "Cdy7e",
    content: "Cdy21j",
    panel: "Cdy7e Cdydg",
    spacer: "Cdyqt",
    title: "Cdy1u3",
    subtitle: "Cdy3t",
    section: "Cdy2w8",
    form: "Cdy2xy",
    actions: "ol10l Cdypn",
},
    Kl = {
        menu: "oo22s",
        item: "oocf",
        logo: "oo24k",
        title: "oo27r",
        icon: "ooq4",
        stroke: "ooe2",
    };
function Ql({ width: t, height: e, styles: { icon: s } }) {
    return a(
        "svg",
        { width: t || 29, height: e || 27, viewBox: "0 0 20 20", className: s },
        a("path", {
            d: "M14.84 13.48a8.32 8.32 0 10-1.34 1.34l4.69 4.86c.4.42 1.07.43 1.49.02l.01-.02c.42-.41.41-1.08 0-1.49l-4.85-4.7zM1.85 8.32a6.47 6.47 0 1112.95 0 6.47 6.47 0 01-12.95 0z",
        })
    );
}
function Jl({ width: t, height: e, styles: { icon: s } }) {
    return a(
        "svg",
        {
            width: t || 28,
            height: e || 27,
            viewBox: "0 0 21 20",
            className: s,
            "aria-labelledby": "title-account",
        },
        a("title", { id: "title-account" }, "Account"),
        a("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.9 6.09c0 2.78-1.8 4.48-3.4 4.48-1.6 0-3.4-1.7-3.4-4.48 0-2.79 1.8-4.49 3.4-4.49 1.6 0 3.4 1.7 3.4 4.49zm-1.06 5.38a6.36 6.36 0 002.66-5.38c0-3.36-2.24-6.09-5-6.09s-5 2.73-5 6.09a6.36 6.36 0 002.66 5.38C3.76 12.09.5 14.37.5 16.8c0 2.84 4.48 3.2 10 3.2s10-.36 10-3.2c0-2.42-3.27-4.71-7.66-5.33zm6.06 5.33c0 .22-.06.34-.23.48-.23.2-.68.44-1.48.63-1.6.4-3.91.49-6.69.49-2.78 0-5.1-.1-6.69-.49a3.7 3.7 0 01-1.48-.63c-.17-.14-.23-.26-.23-.48 0-.55.49-1.5 2.11-2.42a13.1 13.1 0 016.29-1.48c2.52 0 4.75.62 6.29 1.48 1.62.92 2.11 1.87 2.11 2.42z",
        }),
        a("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.9 6.09c0 2.78-1.8 4.48-3.4 4.48-1.6 0-3.4-1.7-3.4-4.48 0-2.79 1.8-4.49 3.4-4.49 1.6 0 3.4 1.7 3.4 4.49zm-1.06 5.38a6.36 6.36 0 002.66-5.38c0-3.36-2.24-6.09-5-6.09s-5 2.73-5 6.09a6.36 6.36 0 002.66 5.38C3.76 12.09.5 14.37.5 16.8c0 2.84 4.48 3.2 10 3.2s10-.36 10-3.2c0-2.42-3.27-4.71-7.66-5.33zm6.06 5.33c0 .22-.06.34-.23.48-.23.2-.68.44-1.48.63-1.6.4-3.91.49-6.69.49-2.78 0-5.1-.1-6.69-.49a3.7 3.7 0 01-1.48-.63c-.17-.14-.23-.26-.23-.48 0-.55.49-1.5 2.11-2.42a13.1 13.1 0 016.29-1.48c2.52 0 4.75.62 6.29 1.48 1.62.92 2.11 1.87 2.11 2.42z",
        })
    );
}
function $l({ id: t, title: e, isLoggedIn: s }) {
    const { songs: n, favorites: i } = C("songs", "favorites");
    return a(
        d,
        null,
        a(
            "nav",
            { className: Kl.menu, id: "top" },
            a(
                "span",
                { className: Kl.logo },
                a("img", {
                    src: "/static/media/logo_small.4ef28918.svg",
                    width: 26,
                    height: 30,
                    alt: "Songsterr",
                })
            ),
            s &&
            "account" !== t &&
            a(
                Un,
                { className: Kl.item, href: "/a/wa/account" },
                a(Jl, { width: 21, height: 20, styles: Kl })
            ),
            !s &&
            "signin" !== t &&
            a(
                Un,
                { className: Kl.item, href: "/a/wa/signin?next=account" },
                a(Do, { width: 20, height: 20, styles: Kl })
            ),
            "favorites" !== t &&
            a(
                Un,
                {
                    id: "menu-favorites",
                    className: Kl.item,
                    href: "/a/wa/favorites".concat(or(i.pattern, i.filters)),
                },
                a(Fo, { width: 20, height: 20, styles: Kl })
            ),
            "search" !== t &&
            a(
                Un,
                {
                    id: "menu-search",
                    className: Kl.item,
                    href: "/".concat(or(n.pattern, n.filters)),
                },
                a(Ql, { width: 20, height: 20, styles: Kl })
            )
        ),
        a("h1", { className: Kl.title }, e)
    );
}
const tc = new Map();
class ec extends c {
    constructor(...t) {
        super(...t), ec.prototype.__init.call(this);
    }
    __init() {
        this.ref = p();
    }
    getListId() {
        const { id: t, panel: e, listId: s } = this.props;
        return "list-".concat(e || t, "-").concat(s || "-");
    }
    componentDidMount() {
        const t = this.ref.current;
        if (t && "function" == typeof t.scroll) {
            const e = tc.get(this.getListId());
            void 0 !== e && t.scroll(0, e || 0);
        }
    }
    componentWillUnmount() {
        const t = (this.ref.current && this.ref.current.scrollTop) || 0;
        tc.set(this.getListId(), t);
    }
    render() {
        const { screen: t, user: e } = C("screen", "user"),
            { id: s, panel: n, title: i, onClick: o } = this.props,
            r = this.props.styles ? Object.assign({}, Zl, this.props.styles) : Zl,
            l = "panel-".concat(n || s);
        return a(
            "main",
            { className: r.panel, id: l, onClick: o, ref: this.ref },
            a(
                "div",
                { className: r.content },
                t.isSmall
                    ? a($l, { id: s, title: i, isLoggedIn: e.isLoggedIn })
                    : a("h1", { className: r.title, id: "top" }, i),
                a(d, null, this.props.children)
            )
        );
    }
}
const sc = (t, e, s) => {
    o(() => {
        const n = () => {
            e.current && e.current.focus();
        },
            i = {
                up: s => {
                    s.preventDefault(), s.stopPropagation();
                    const n = document.activeElement;
                    if (n && n.hasAttribute && n.hasAttribute("data-song")) {
                        const t = n.previousSibling;
                        t && t.hasAttribute && t.hasAttribute("data-song")
                            ? t.focus()
                            : e.current && e.current.focus();
                    } else
                        t.current && t.current.children && t.current.children[0].focus();
                },
                down: e => {
                    e.preventDefault(), e.stopPropagation();
                    const s =
                        document.activeElement && document.activeElement.nextSibling;
                    s && s.hasAttribute && s.hasAttribute("data-song")
                        ? s.focus()
                        : t.current && t.current.children && t.current.children[0].focus();
                },
                space: n,
                "keyboard*": n,
            };
        return (
            window.hotKeysManager.bind(i, { onPanel: !0 }, s),
            () => {
                window.hotKeysManager.unbind(i, { onPanel: !0 }, s);
            }
        );
    }, []);
};
var nc = {
    title: "Cdy1u3 C052eq",
    difficultyFilteringHintText: "Cdy1u3 C052eq C052q7",
    list: "C052ub",
    songs: "C052ub C051mn",
    header: "C0533g",
    showroom: "C05p1",
    button: "C05198",
    stubWrapper: "C05186",
};
const ic = !b || "IntersectionObserver" in window,
    oc = u(({ route: t, query: e, user: i, device: a, isSmallScreen: r }) => {
        const { songs: l, meta: c, dispatch: d } = C("songs", "meta");
        o(() => ur({ route: t, songs: l, device: a }), [l.pattern, l.filters]);
        const u = g(),
            p = g();
        sc(u, p, "SongsPanel");
        let { isDesktop: m } = a,
            { hasPlus: f } = i,
            y = l.songs.pattern.length > 0,
            v = cr(l.filters, ""),
            b = "" !== v ? " ".concat(v) : "",
            w = l.pattern.length
                ? "Search".concat(b, " Tabs")
                : "Popular".concat(b, " Tabs"),
            [x, S] = s(l.pattern),
            k = g(),
            N = n(
                () => t => {
                    clearTimeout(k.current), S(t);
                    const e = t.replace(/\s+/g, " ").trim();
                    tr(e);
                    const s = () => d("songs/filter/pattern", e);
                    "" === e ? s() : (k.current = setTimeout(s, 500));
                },
                [S]
            ),
            L = () => {
                er("ALL INSTRUMENTS"), d("songs/filter/reset");
            },
            [T, I] = s(null),
            _ = l.songs.list || [],
            E = 0 === l.pattern.length && 0 === _.length,
            P = yl(l.filters.instrument),
            A = yl(l.songs.filters.instrument),
            M = al.map(s => sr(s, t, e)),
            B = fl(l.songs.filters),
            D = l.songs.hasMore && !E,
            O = g();
            f = true;
        o(() => {
            try {
                if (O.current && ic) {
                    const t = new IntersectionObserver(
                        t => {
                            t[0].isIntersecting && d("songs/more");
                        },
                        {
                            rootMargin: "0px 0px 300px 0px",
                            threshold: 1,
                            root: document.getElementById("panel-search"),
                        }
                    );
                    return t.observe(O.current), () => t.disconnect();
                }
            } catch (t) {
                console.error(t);
            }
        }, []);
        const j = {
            tuningFilter: l.filters.tunings[l.filters.instrument] || "ALL TUNINGS",
            instrumentFilter: l.filters.instrument,
            difficultyFilter: l.filters.difficulty,
            setTuningFilter: t =>
                d("songs/filter/tuning", {
                    instrument: l.filters.instrument,
                    tuning: t,
                }),
            setInstrumentFilter: t => {
                er(t), d("songs/filter/instrument", t);
            },
            setDifficultyFilter: t => d("songs/filter/difficulty", t),
            difficultyFilterNA: P,
            spacerSize: y ? "normal" : "big",
            numberSpacer: !y,
            isSmallScreen: r,
            instrumentSEOLinks: M,
            activeFilter: T,
            onFilterClick: t => I(t === T ? null : t),
        };
        return h(ec, {
            title: w,
            id: "search",
            styles: nc,
            onClick: () => I(null),
            children: [
                h(Sl, {
                    children: [
                        h(Il, {
                            value: x,
                            setValue: N,
                            isDesktop: m,
                            loading: !!l.loading,
                            inputRef: p,
                            placeholder: "Search over 500,000 tabs",
                        }),
                        h(Wl, j),
                        m &&
                        !f &&
                        h(Rl, { page: t.page, instrumentFilter: l.filters.instrument }),
                    ],
                }),
                !E &&
                _.length > 0 &&
                h("div", {
                    className: nc.songs,
                    "data-list": "songs",
                    ref: u,
                    children: _.map(t =>
                        h(
                            kl,
                            {
                                song: t,
                                isActive: c && c.songId === t.songId,
                                numerated: !y,
                                difficultyNA: A,
                            },
                            t.songId.toString()
                        )
                    ),
                }),
                !ic &&
                l.songs.hasMore &&
                h("div", {
                    className: nc.button,
                    children: h(ro, {
                        onClick: () => d("songs/more"),
                        title: "Show more",
                        processing: !!l.loading,
                    }),
                }),
                ic &&
                h("div", {
                    ref: O,
                    children: [
                        D &&
                        !!l.loading &&
                        h(ao, {
                            fill: "#777",
                            width: 35,
                            height: 35,
                            className: "Csr2lv Csr1xa",
                        }),
                    ],
                }),
                !E &&
                0 === _.length &&
                h("div", {
                    className: nc.stubWrapper,
                    children: [
                        h(Fl, {
                            id: "notfound",
                            header: "No tabs found",
                            headerColor: "red",
                            icon: () => h(zl, {}),
                            children: h(Yl, {
                                usesFilters: B,
                                numResults: 0,
                                resetFilter: B
                                    ? L
                                    : () => {
                                        L(), N("");
                                    },
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
class ac extends c {
    render() {
        const { width: t, height: e, className: s } = this.props;
        return a(
            "svg",
            { className: s, height: e, width: t, viewBox: "0 0 16 4" },
            a("circle", { cx: "2", cy: "2", r: "2" }),
            a("circle", { cx: "8", cy: "2", r: "2" }),
            a("circle", { cx: "14", cy: "2", r: "2" })
        );
    }
}
let rc;
const lc = u(
    ({
        song: t,
        addOptions: e,
        removeCaption: s,
        onAdd: n,
        onClose: i,
        onRemove: r,
    }) => {
        const l = { current: [] },
            c = m(t => {
                t.preventDefault(), t.stopPropagation();
            }, []),
            d = m(t => {
                t.preventDefault(),
                    t.stopPropagation(),
                    void 0 === rc || rc >= l.current.length - 1 ? (rc = 0) : (rc += 1),
                    l.current && l.current[rc].focus();
            }, []),
            u = m(t => {
                t.preventDefault(),
                    t.stopPropagation(),
                    void 0 === rc || rc <= 0 ? (rc = l.current.length - 1) : (rc -= 1),
                    l.current && l.current[rc].focus();
            }, []);
        return (
            o(() => {
                const t = { up: u, down: d, tab: i, esc: i, space: c };
                return (
                    window.hotKeysManager.bind(t, { onPanelPopup: !0 }),
                    (rc = void 0),
                    () => {
                        window.hotKeysManager.unbind(t, { onPanelPopup: !0 }),
                            (rc = void 0);
                    }
                );
            }, [e]),
            a(
                "div",
                { className: "C8mr5", "data-dropdown": "" },
                e &&
                0 !== e.length &&
                a(
                    "div",
                    { className: "C8mn2" },
                    a("p", {}, "Add to playlist:"),
                    e.map(e =>
                        e.active
                            ? a(
                                "button",
                                {
                                    ref: t => {
                                        l.current.push(t);
                                    },
                                    onClick: () => {
                                        n(t, e.id);
                                    },
                                },
                                e.name
                            )
                            : a(
                                "button",
                                { onClick: c, className: "C8m2jh", tabIndex: -1 },
                                e.name
                            )
                    )
                ),
                a(
                    "button",
                    {
                        ref: t => {
                            l.current.push(t);
                        },
                        className: "C8m1k",
                        onClick: r,
                        "data-feature": "remove",
                    },
                    s
                )
            )
        );
    }
);
const cc = u(
    ({
        song: t,
        addOptions: e,
        dropdownShown: s,
        optionsAlwaysOn: n,
        removeCaption: i,
        onAdd: o,
        onOptionsClick: r,
        onRemove: l,
    }) => {
        const c = s || n ? "Cht32a Chtog" : "Cht32a",
            d = m(
                e => {
                    e.preventDefault(), e.stopPropagation(), s ? r() : r(t.songId);
                },
                [t, s]
            ),
            u = m(() => r(), []);
        return a(
            "div",
            { className: c, onClick: d },
            a(
                "button",
                { className: "Cht9n", title: "Options" },
                a(ac, { width: 16, height: 4 })
            ),
            s &&
            a(lc, {
                addOptions: e,
                song: t,
                onRemove: l,
                removeCaption: i,
                onAdd: o,
                onClose: u,
            })
        );
    }
),
    dc = {
        animationStyles: {
            exitActive: "Br024a",
            enterActive: "Br02a8",
            enter: "Br02l9",
            exit: "Br01vc",
        },
    },
    uc = u(
        ({
            song: t,
            isActive: e,
            addOptions: n,
            dropdownShown: i,
            optionsAlwaysOn: o,
            isPhone: r,
            inSetlist: l,
            onAdd: c,
            onClick: d,
            onOptionsClick: u,
            onRemove: h,
            difficultyNA: p,
        }) => {
            void 0 === p && (p = !1);
            const [g, f] = s(!1);
            let y = Cl.favorite;
            e && (y += " " + Cl.active), g && (y += " " + Cl.removal);
            const v = t.tracks && t.tracks[t.defaultTrack],
                b = v && t.difficulty,
                w = vi(t, t.defaultTrack, void 0, (v && v.instrumentId) || void 0),
                x = m(
                    t => {
                        t.preventDefault(), t.stopPropagation(), f(!g);
                    },
                    [g]
                ),
                S = m(
                    t => {
                        t.preventDefault(), t.stopPropagation(), f(!1), h();
                    },
                    [h]
                );
            return a(
                Un,
                { className: y, "data-song": "", to: w, onClick: d },
                r &&
                a(
                    "div",
                    {
                        role: "button",
                        className: Cl.fav,
                        onClick: x,
                        title: "Remove from favorites",
                    },
                    a(Fo, {
                        width: 17,
                        height: 17,
                        state: "fill",
                        title: "Remove from favorites",
                        styles: Cl,
                    })
                ),
                a(
                    "div",
                    { className: Cl.wrapper },
                    a("div", { className: Cl.name, "data-field": "name" }, t.title),
                    a("div", { className: Cl.artist, "data-field": "artist" }, t.artist)
                ),
                !r &&
                a(cc, {
                    song: t,
                    addOptions: n,
                    dropdownShown: i,
                    optionsAlwaysOn: o,
                    removeCaption: l
                        ? "Remove from this playlist"
                        : "Remove from favorites",
                    onAdd: c,
                    onOptionsClick: u,
                    onRemove: h,
                }),
                a(Ua, {
                    "data-field": "difficulty",
                    difficultyNA: p,
                    difficultyString: b,
                    isNumerated: !0,
                }),
                r &&
                a(
                    M,
                    { component: "div", className: Cl.controls },
                    g &&
                    a(
                        O,
                        dc,
                        a(
                            "div",
                            { className: Cl.buttons },
                            a(
                                "button",
                                {
                                    className: Cl.cancel,
                                    onClick: x,
                                    "data-action": "cancel",
                                },
                                "Cancel"
                            ),
                            a(
                                "button",
                                {
                                    className: Cl.remove,
                                    onClick: S,
                                    "data-action": "remove",
                                },
                                "Remove"
                            )
                        )
                    )
                )
            );
        }
    );
class hc extends c {
    render() {
        return a(
            "svg",
            {
                width: 189,
                height: 101,
                viewBox: "0 0 ".concat(189, " ").concat(101),
                fill: "none",
            },
            a("rect", {
                x: "139",
                y: "60",
                width: "50",
                height: "4",
                rx: "1",
                fill: "#3A3A3A",
            }),
            a("rect", {
                y: "60",
                width: "50",
                height: "4",
                rx: "1",
                fill: "#3A3A3A",
            }),
            a("path", {
                fill: "#3A3A3A",
                d: "M94 78L95.1452 76.3603L94.009 75.5668L92.8669 76.3519L94 78ZM115 61L113.879 59.3438L112.698 60.1431L113.069 61.5199L115 61ZM107.5 36.5L105.631 37.2109L106.089 38.4157L107.375 38.4961L107.5 36.5ZM82 36.5L82.1217 38.4963L83.464 38.4144L83.8947 37.1405L82 36.5ZM73 61L74.9249 61.5429L75.3139 60.1637L74.1331 59.3519L73 61ZM43.899 38.8232L43.7773 36.8269L43.899 38.8232ZM43.3933 40.6454L44.5264 38.9973L43.3933 40.6454ZM94.9901 3.60352L96.8595 2.89262L94.9901 3.60352ZM93.108 3.63874L91.2134 2.99828L93.108 3.63874ZM145.072 40.6433L143.951 38.9871L145.072 40.6433ZM123.248 98.4268L122.102 100.067L123.248 98.4268ZM124.786 97.347L126.717 96.8271L124.786 97.347ZM64.2801 98.4324L65.4132 100.081L64.2801 98.4324ZM62.7511 97.3369L60.8262 96.794L62.7511 97.3369ZM65.4132 100.081L95.1331 79.6481L92.8669 76.3519L63.147 96.7843L65.4132 100.081ZM92.8548 79.6397L122.102 100.067L124.393 96.7872L95.1452 76.3603L92.8548 79.6397ZM126.717 96.8271L116.931 60.4801L113.069 61.5199L122.855 97.867L126.717 96.8271ZM116.121 62.6562L146.194 42.2995L143.951 38.9871L113.879 59.3438L116.121 62.6562ZM144.699 36.821L107.625 34.5039L107.375 38.4961L144.449 40.8132L144.699 36.821ZM109.369 35.7891L96.8595 2.89262L93.1207 4.31441L105.631 37.2109L109.369 35.7891ZM91.2134 2.99828L80.1053 35.8595L83.8947 37.1405L95.0027 4.27919L91.2134 2.99828ZM81.8783 34.5037L43.7773 36.8269L44.0207 40.8195L82.1217 38.4963L81.8783 34.5037ZM42.2603 42.2935L71.8669 62.6481L74.1331 59.3519L44.5264 38.9973L42.2603 42.2935ZM71.0751 60.4571L60.8262 96.794L64.676 97.8799L74.9249 61.5429L71.0751 60.4571ZM43.7773 36.8269C40.9293 37.0006 39.9091 40.6771 42.2603 42.2935L44.5264 38.9973C45.3101 39.5361 44.97 40.7616 44.0207 40.8195L43.7773 36.8269ZM96.8595 2.89262C95.8593 0.26248 92.1145 0.332526 91.2134 2.99828L95.0027 4.27919C94.7023 5.16779 93.4541 5.19112 93.1207 4.31441L96.8595 2.89262ZM146.194 42.2995C148.563 40.6953 147.555 36.9995 144.699 36.821L144.449 40.8132C143.497 40.7537 143.161 39.5218 143.951 38.9871L146.194 42.2995ZM122.102 100.067C124.399 101.67 127.445 99.5316 126.717 96.8271L122.855 97.867C122.612 96.9655 123.627 96.2526 124.393 96.7872L122.102 100.067ZM63.147 96.7843C63.9182 96.2542 64.9301 96.9791 64.676 97.8799L60.8262 96.794C60.0641 99.4962 63.0996 101.671 65.4132 100.081L63.147 96.7843Z",
            })
        );
    }
}
const pc = ({ name: t, onConfirm: e, onCancel: s, setName: n }) => {
    const i = g(null);
    o(() => {
        i.current && i.current.focus();
    }, []),
        i.current && i.current.focus();
    const r = t.length > 15 ? 2 : 1;
    return a(
        "form",
        {
            className: "Ga1e5",
            noValidate: !0,
            onClick: t => {
                t.stopPropagation();
            },
        },
        a("textarea", {
            spellcheck: !1,
            className: "Ga1e5",
            placeholder: "New playlist",
            maxlength: 30,
            rows: r,
            value: t,
            ref: i,
            autoComplete: "off",
            onKeyDown: t => {
                13 === t.keyCode && (t.preventDefault(), e()),
                    27 === t.keyCode && (t.preventDefault(), s());
            },
            onChange: t => {
                n(t.target.value);
            },
        })
    );
};
class mc extends c {
    render() {
        const { width: t, height: e, className: s } = this.props;
        return a(
            "svg",
            { className: s, height: e, width: t, viewBox: "0 0 9 9" },
            a("rect", {
                y: "1.17",
                width: "1.65",
                height: "10",
                transform: "rotate(-45 0 1.17)",
            }),
            a("rect", {
                x: "7.07",
                width: "1.65",
                height: "10",
                transform: "rotate(45 7.07 0)",
            })
        );
    }
}
const gc = u(
    ({
        name: t,
        id: e,
        removable: s,
        confirmRemove: n,
        active: i,
        shaking: o,
        onClick: r,
        onRemoveClick: l,
    }) => {
        let c = i ? "Bdjzv Bdj101" : "Bdjzv";
        return (
            (c = n ? "Bdjzv Bdjs6" : c),
            (c = "".concat(c, " ").concat(o ? "Bdj2c2" : "")),
            a(
                "li",
                {
                    className: c,
                    onClick: () => {
                        r(e);
                    },
                    "data-playlist": t,
                },
                a("button", { className: "Bdj7m", title: t }, t),
                s &&
                a(
                    "button",
                    {
                        className: "Bdj2r3",
                        onClick: t => {
                            t.stopPropagation(), l(e);
                        },
                        "data-feature": "remove",
                    },
                    a(mc, { width: 9, height: 9 })
                )
            )
        );
    }
),
    fc = () => {
        const { setlists: t, dispatch: e } = C("setlists"),
            { activeSetId: n, createSetForm: i, removeSetId: o, markedIds: r } = t,
            [l, c] = s("unset");
        m(
            t => {
                t.preventDefault(), c("hide" === l ? "show" : "hide");
            },
            [l]
        );
        let d = null;
        return (
            "show" === l ? (d = "Cdq2sr") : "hide" === l && (d = "Cdq2h8"),
            a(
                "aside",
                { id: "playlist-menu", className: "Cdq1f7" },
                a(
                    "div",
                    { className: "Cdqqa" },
                    a(
                        "ul",
                        { className: d },
                        a(gc, {
                            name: "Favorites",
                            active: !n,
                            onClick: () => e("setlists/select", void 0),
                        }),
                        a(
                            "li",
                            {},
                            a(
                                "button",
                                {
                                    id: "create-playlist",
                                    className: "Cdqyl",
                                    onClick: t => {
                                        t.stopPropagation(), e("setlists/openCreate");
                                    },
                                },
                                "Create playlist"
                            )
                        ),
                        i &&
                        a(
                            "li",
                            { className: "Cdqmm" },
                            a(pc, {
                                name: i.name,
                                onConfirm: () => e("setlists/confirmCreate"),
                                onCancel: () => e("setlists/cancelCreate"),
                                setName: t => e("setlists/changeName", t),
                            })
                        ),
                        t.setlists.map(t =>
                            a(gc, {
                                id: t.id,
                                name: t.name,
                                active: t.id === n,
                                shaking: r.includes(t.id),
                                removable: !0,
                                confirmRemove: o === t.id,
                                onRemoveClick: s =>
                                    e(
                                        o === t.id
                                            ? "setlists/confirmRemove"
                                            : "setlists/initRemove",
                                        s
                                    ),
                                onClick: t => e("setlists/select", t),
                            })
                        )
                    )
                )
            )
        );
    };
class yc extends c {
    render() {
        return a(
            "svg",
            { height: 100, width: 188, viewBox: "0 0 188 100", fill: "#3A3A3A" },
            a("rect", { x: "53", width: "135", height: "4.1" }),
            a("rect", { x: "53", y: "24", width: "135", height: "4.1" }),
            a("rect", { x: "89", y: "48", width: "99", height: "4.1" }),
            a("rect", { y: "48", width: "70", height: "4.1" }),
            a("rect", {
                x: "33",
                y: "85",
                width: "70",
                height: "4.1",
                transform: "rotate(-90 33 85)",
            }),
            a("rect", { x: "53", y: "72", width: "135", height: "4.1" }),
            a("rect", { y: "96", width: "188", height: "4.1" })
        );
    }
}
const vc = u(({ route: t, query: e, user: i, device: o, isSmallScreen: r }) => {
    const {
        favorites: l,
        setlists: c,
        meta: d,
        dispatch: u,
    } = C("favorites", "setlists", "meta");
    dr({ route: t });
    const h = g(),
        p = g();
    sc(h, p, "FavoritesPanel");
    const { hasPlus: f, isLoggedIn: y } = i,
        { isDesktop: v, isPhone: b, isTablet: w } = o,
        { pattern: x, loading: S } = l,
        { activeSetId: k } = c,
        N = v && !f,
        [L] = s("none"),
        [T, I] = s(void 0),
        [_, E] = s(null),
        P = l.filters.instrument,
        A = () => {
            er("ALL INSTRUMENTS"), u("favorites/filter/reset");
        },
        M = l.filters.difficulty,
        B = l.filters.tunings[P] || "ALL TUNINGS";
    let D = (O = wo(d)) && O.isDrums ? H : O && O.isBassGuitar ? U : q;
    var O;
    "ALL INSTRUMENTS" !== P &&
        (D = (t => {
            switch (t) {
                case "BASS":
                    return U;
                case "DRUMS":
                    return H;
                case "GUITAR":
                    return q;
                default:
                    return () => !1;
            }
        })(P));
    const j = (t, e, s, n) =>
        D(e.instrumentId) && (-1 === t || e.views > n[t].views) ? s : t,
        R = n(
            () =>
                ((t, e) =>
                    t &&
                    t.map(t => {
                        const s = t.tracks;
                        if (s) {
                            const n = s.reduce(e, -1);
                            return -1 !== n ? Object.assign({}, t, { defaultTrack: n }) : t;
                        }
                        return t;
                    }))(k ? c.setlists.find(t => t.id === k).songs : l.favorites, j),
            [l.favorites, k, c.setlists, D]
        ),
        z = n(
            () =>
                (function (t, e) {
                    if (e && "" !== e) {
                        const s = e
                            .toLowerCase()
                            .trim()
                            .split(" ")
                            .filter(t => t);
                        return t.filter(t => {
                            const e = t.title.toLowerCase(),
                                n = t.artist.toLowerCase();
                            return s.every(t => -1 !== e.indexOf(t) || -1 !== n.indexOf(t));
                        });
                    }
                    return t;
                })(R, x),
            [R, x]
        ),
        F = yl(P),
        V = n(
            () =>
                (function (t, e) {
                    if ("ALL TUNINGS" === e) return t;
                    const [s, n] = dl(e);
                    return t.filter(t =>
                        (function (t) {
                            const e = t.tracks;
                            if (e)
                                for (let t = 0; t < e.length; t++) {
                                    const i = e[t];
                                    if (void 0 !== i.tuning && i.tuning.join(",") === n) {
                                        if ("BASS" === s && U(i.instrumentId)) return !0;
                                        if ("GUITAR" === s && q(i.instrumentId)) return !0;
                                    }
                                }
                            return !1;
                        })(t)
                    );
                })(
                    (function (t, e) {
                        function s(t, e) {
                            const s = t.tracks;
                            if (s)
                                for (let t = 0; t < s.length; t++)
                                    if (e(s[t].instrumentId)) return !0;
                            return !1;
                        }
                        return t.filter(t => {
                            if ("BASS" === e) return s(t, U);
                            if ("DRUMS" === e) return s(t, H);
                            if ("GUITAR" === e) return s(t, q);
                            if ("ALL INSTRUMENTS" === e) return !0;
                            throw new Error(
                                "Invalid instrument filter value (".concat(e, ")")
                            );
                        });
                    })(
                        F
                            ? z
                            : (function (t, e, s) {
                                return (function (t, e) {
                                    return "none" !== e
                                        ? t.slice().sort((t, s) => {
                                            const n = ul(t),
                                                i = ul(s);
                                            let o = Ra.VERY_EASY,
                                                a = Ra.VERY_EASY;
                                            null !== n && (o = Ra.forName(n)),
                                                null !== i && (a = Ra.forName(i));
                                            const r =
                                                "asc" === e ? Ra.compare(o, a) : Ra.compare(a, o);
                                            return 0 === r
                                                ? (function (t, e) {
                                                    const s = gl(t),
                                                        n = gl(e);
                                                    return s < n ? -1 : s > n ? 1 : 0;
                                                })(s, t)
                                                : r;
                                        })
                                        : t;
                                })(
                                    (function (t, e) {
                                        if (t)
                                            return "Any Difficulty" === e
                                                ? t.slice()
                                                : t.slice().filter(t => {
                                                    if (!t.difficulty) return !1;
                                                    const s = Ra.forName(t.difficulty);
                                                    if (null === s) return !1;
                                                    if ("Beginner" === e)
                                                        return Ra.compare(s, Ra.EASY) <= 0;
                                                    if ("Intermediate" === e) {
                                                        const t =
                                                            Ra.compare(s, Ra.BELOW_INTERMEDIATE) >= 0,
                                                            e = Ra.compare(s, Ra.HARD) < 0;
                                                        return t && e;
                                                    }
                                                    return (
                                                        "Advanced" === e && Ra.compare(s, Ra.HARD) >= 0
                                                    );
                                                });
                                    })(t, s),
                                    e
                                );
                            })(z, L, M),
                        P
                    ),
                    B
                ),
            [z, L, M, P, B]
        ),
        G = !b && c.setlists && c.setlists.length > 0,
        X = l.favorites && l.favorites.length > 0,
        W = R && R.length > 0,
        Y = V && V.length > 0,
        Z = al.map(s => sr(s, t, e)),
        K = {
            tuningFilter: B,
            instrumentFilter: P,
            difficultyFilter: M,
            setTuningFilter: t =>
                u("favorites/filter/tuning", { instrument: P, tuning: t }),
            setInstrumentFilter: t => {
                er(t), u("favorites/filter/instrument", t);
            },
            setDifficultyFilter: t => u("favorites/filter/difficulty", t),
            difficultyFilterNA: F,
            isSmallScreen: r,
            spacerSize: b ? "big" : "small",
            instrumentSEOLinks: Z,
            activeFilter: _,
            onFilterClick: t => {
                E(t === _ ? null : t), I(void 0);
            },
        },
        Q = m(t => {
            u("favorites/filter", t), tr(t);
        }, []),
        J = m(t => {
            t.preventDefault(), u("setlists/select", void 0);
        }, []),
        $ = t => {
            I(t), E(null), u("setlists/panelClick");
        },
        tt = m(() => {
            I(void 0), E(null), u("setlists/panelClick");
        }, []),
        et = m(() => {
            A(), Q("");
        }, []),
        st = k
            ? "Filter ".concat(c.setlists.find(t => t.id === k).name)
            : "Filter favorites";
    return a(
        ec,
        {
            title: "Favorites",
            id: "favorites",
            styles: {
                panel: b || (!G && !X) ? "Cdy7e Cdydg Cma2ey" : "Cdy7e Cdydg Cma58",
            },
            onClick: tt,
        },
        (X || G) &&
        a(
            Sl,
            { noObserver: !0 },
            a(Il, {
                inputRef: p,
                value: x,
                isDesktop: v,
                loading: S,
                placeholder: st,
                setValue: Q,
            })
        ),
        (X || G) &&
        a(
            "div",
            { className: "Cma2io" },
            !b && a(fc, null),
            W &&
            Y &&
            a(
                "div",
                { className: b ? "Cma2tv" : "Cma18o" },
                a(
                    Sl,
                    {},
                    a(Wl, K),
                    y && N && a(Rl, { page: t.page, instrumentFilter: P })
                ),
                a(
                    "div",
                    { ref: h, className: "Cma24g", "data-list": "favorites" },
                    V.map(t => {
                        const e = [];
                        c.setlists.forEach(s => {
                            const n = !s.songs.find(e => e.songId === t.songId);
                            e.push({ name: s.name, id: s.id, active: n });
                        });
                        const s = k
                            ? () =>
                                u("setlists/removeSong", {
                                    setlistId: k,
                                    songId: t.songId,
                                })
                            : () => u("favorites/delete", t.songId);
                        return a(uc, {
                            key: "".concat(k).concat(t.songId),
                            isPhone: b,
                            song: t,
                            addOptions: e,
                            dropdownShown: T === t.songId,
                            isActive: d && d.songId === t.songId,
                            optionsAlwaysOn: w,
                            inSetlist: !!k,
                            onAdd: (t, e) =>
                                u("setlists/addSong", { song: t, setlistId: e }),
                            onClick: () => {
                                u("setlists/panelClick");
                            },
                            onOptionsClick: $,
                            onRemove: s,
                            difficultyNA: F,
                        });
                    })
                )
            ),
            W &&
            !Y &&
            a(
                "div",
                { className: "Cma26m" },
                a(
                    "div",
                    { className: nc.stubWrapper },
                    a(Wl, K),
                    a(
                        Fl,
                        {
                            id: "notfound",
                            header: "No tabs found",
                            headerColor: "red",
                            icon: () => a(zl, null),
                        },
                        Yl({
                            usesFilters: !1,
                            numResults: z.length,
                            resetFilter: z.length > 0 ? A : et,
                        })
                    )
                )
            ),
            !W &&
            a(
                "div",
                { className: "Cma26m" },
                a(
                    "div",
                    { className: nc.stubWrapper },
                    k
                        ? a(
                            Fl,
                            {
                                id: "notfound",
                                header: "Playlist is empty",
                                icon: () => a(yc, null),
                            },
                            a(
                                "div",
                                { className: "Cmar5" },
                                a("a", { onClick: J, tabIndex: 0 }, "Go to Favorites"),
                                " to fill it with songs"
                            )
                        )
                        : a(Fl, {
                            id: "nofavorites",
                            header: "You have no favorites",
                            icon: () => a(hc, null),
                            hint: () =>
                                "To create a favorite, open a song and click on the star.",
                        })
                )
            )
        ),
        !G &&
        !X &&
        a(Fl, {
            id: "nofavorites",
            header: "You have no favorites",
            icon: () => a(hc, null),
            hint: () => "To create a favorite, open a song and click on the star.",
        })
    );
});
var bc = { actions: "ol10l B3f2vs", notice: "olqe B3f353" };
const wc = () => {
    const { dispatch: t } = C(),
        e = g(),
        n = g(),
        i = g(),
        [o, r] = s(!1),
        [l, c] = s(null),
        d = m(
            s => {
                s.preventDefault();
                const o = new Wi();
                return (
                    (async (e, s, n, i) => {
                        r(!0), c(null);
                        try {
                            oo([
                                { field: e, validator: Ki },
                                { field: s, validator: Ki },
                                { field: n, validator: eo },
                            ]);
                            const o = {
                                file: n.files[0],
                                title: s.value,
                                artist: e.value,
                                difficulty: "Intermediate",
                            };
                            await (async function (t, e, s) {
                                try {
                                    const n = await (async function (t, e) {
                                        const s = new FormData();
                                        s.append("file", t.file),
                                            s.append("title", t.title),
                                            s.append("artist", t.artist),
                                            s.append("difficulty", t.difficulty);
                                        const n = await fetch("/api/song", {
                                            signal: e,
                                            method: "post",
                                            credentials: "include",
                                            body: s,
                                        });
                                        if (e && e.aborted)
                                            return { songSubmitted: !1, song: null };
                                        await Fi(n), await Hi(n);
                                        const i = {
                                            songId: (o = await n.json()).id,
                                            artist: o.artist.name,
                                            title: o.title,
                                            defaultTrack: 0,
                                            tracks: [],
                                        };
                                        var o;
                                        return { songSubmitted: !!n.ok, song: i };
                                    })(e, s);
                                    if (s && s.aborted) return;
                                    if ((t("upload/song:uploaded", n), n.songSubmitted)) {
                                        const e = await ra(n.song.songId);
                                        e && t("navigate", vi(e));
                                    }
                                } catch (e) {
                                    throw (t("upload/song:error", { error: e }), e);
                                }
                            })(t, o, i);
                        } catch (t) {
                            console.error(t), c(t);
                        }
                        r(!1);
                    })(e.current, n.current, i.current, o.signal),
                    o.abort.bind(o)
                );
            },
            [e, n, i]
        );
    return a(
        "form",
        { noValidate: !0, className: bc.form, onSubmit: d, action: "" },
        a(po, { error: l }),
        a(mo, { type: "text", label: "Artist", ref: e, name: "artist", error: l }),
        a(mo, { type: "text", label: "Title", ref: n, name: "title", error: l }),
        a(
            "p",
            { className: bc.notice, "aria-label": "hint" },
            "We support only Guitar Pro 3, 4, and 5 files at the moment. If you have GP6/7 (.gpx, .gp) tab, please export it to GP5 version first."
        ),
        a(
            "p",
            { className: bc.notice, "aria-label": "instructions" },
            a(
                "a",
                {
                    href: "https://www.guitar-pro.com/en/index.php",
                    rel: "noopener noreferrer",
                    target: "_blank",
                },
                "Guitar Pro"
            ),
            ": File → Export → GP5",
            a("br", null),
            a(
                "a",
                {
                    href: "https://sourceforge.net/projects/tuxguitar",
                    rel: "noopener noreferrer",
                    target: "_blank",
                },
                "TuxGuitar"
            ),
            ": File → Save As → Guitar Pro 5"
        ),
        a(Zo, {
            id: "tabFile",
            accept: ".gp3, .gp4, .gp5",
            label: "Guitar Pro Tab",
            ref: i,
            name: "file",
            error: l,
            isDropFileAvailable: !0,
        }),
        a(
            "div",
            { className: bc.actions },
            a(ro, { id: "submitTab", title: "Submit", processing: o })
        )
    );
};
function xc() {
    return a(
        "svg",
        { width: 189, height: 105, viewBox: "0 0 189 105" },
        a("path", {
            d: "M62 39C63.1046 39 64 38.1046 64 37C64 35.8954 63.1046 35 62 35V39ZM127 35C125.895 35 125 35.8954 125 37C125 38.1046 125.895 39 127 39V35ZM185 38V102H189V38H185ZM186 101H3V105H186V101ZM4 102V38H0V102H4ZM3 39H62V35H3V39ZM127 39H186V35H127V39ZM3 101C3.55228 101 4 101.448 4 102H0C0 103.657 1.34316 105 3 105V101ZM185 102C185 101.448 185.448 101 186 101V105C187.657 105 189 103.657 189 102H185ZM189 38C189 36.3431 187.657 35 186 35V39C185.448 39 185 38.5523 185 38H189ZM4 38C4 38.5523 3.55228 39 3 39V35C1.34315 35 0 36.3431 0 38H4Z",
            fill: "#3A3A3A",
        }),
        a("path", {
            d: "M92.5 68C92.5 69.1046 93.3954 70 94.5 70C95.6046 70 96.5 69.1046 96.5 68H92.5ZM95.9142 1.08579C95.1332 0.304738 93.8668 0.304738 93.0858 1.08579L80.3579 13.8137C79.5768 14.5948 79.5768 15.8611 80.3579 16.6421C81.1389 17.4232 82.4052 17.4232 83.1863 16.6421L94.5 5.32843L105.814 16.6421C106.595 17.4232 107.861 17.4232 108.642 16.6421C109.423 15.8611 109.423 14.5948 108.642 13.8137L95.9142 1.08579ZM96.5 68V2.5H92.5V68H96.5Z",
            fill: "#3A3A3A",
        })
    );
}
const Sc = u(() => {
    const {
        dispatch: t,
        uploads: e,
        user: s,
        route: n,
    } = C("uploads", "user", "route");
    dr({ route: n });
    const { song: i, songSubmitted: r, songError: l } = e,
        { isLoggedIn: c } = s,
        d = !c,
        u = c && !i,
        h = c && i && !l,
        p = h && !r,
        m = h && r;
    return (
        o(() => t("upload/reset"), []),
        a(
            ec,
            { title: "Submit Tab", id: "submit" },
            d &&
            a(Fl, {
                id: "submit",
                header: "Have a tab to share?",
                icon: () => a(xc, null),
                hint: () =>
                    a(
                        "span",
                        {},
                        "Please ",
                        a(
                            Un,
                            { to: "/a/wa/signin?next=submit", "data-link": "signin" },
                            "sign up"
                        ),
                        " to submit your tab."
                    ),
            }),
            u &&
            a(
                "section",
                { className: "ol1u6 Jx31q", "data-section": "submit" },
                a(
                    "h4",
                    { className: "ol1gf Jx2bq" },
                    "Have a tab to share?",
                    a("br", null),
                    "Upload it in Guitar Pro format and fill in the fields below."
                ),
                a(
                    "div",
                    null,
                    a(
                        "p",
                        { className: "olqe Jx2om" },
                        "Your tab will appear on the site in a few minutes, and we'll send you an email with a link to it."
                    ),
                    a(wc, null)
                )
            ),
            p &&
            a(
                "section",
                { className: "ol1u6 Jx31q", "data-section": "duplicate" },
                a(
                    "h4",
                    { className: "ol1gf Jx2bq" },
                    "Submitted song already exists on Songsterr."
                ),
                a(
                    "div",
                    null,
                    a(
                        "p",
                        { className: "olqe Jx2om" },
                        "If you feel that you have a better version, please submit it via Upload New Revision button on existing song's page."
                    ),
                    a(
                        Un,
                        { className: j.buttonGreen, to: vi(i) },
                        "View existing song"
                    )
                )
            ),
            m &&
            a(
                "section",
                { className: "ol1u6 Jx31q", "data-section": "success" },
                a(
                    "h4",
                    { className: "ol1gf Jx2bq" },
                    "Thanks for contributing to Songsterr!"
                ),
                a(
                    "div",
                    null,
                    a(
                        "p",
                        { className: "olqe Jx2om" },
                        "We are processing your tab and will redirect to it as soon as possible."
                    ),
                    a("div", null, a(ao, { fill: "#777", width: 25, height: 20 }))
                )
            )
        )
    );
}),
    Cc = !b || "IntersectionObserver" in window,
    kc = u(({ route: t, query: e, user: i, device: a, isSmallScreen: r }) => {
        const { artist: l, meta: c, dispatch: d } = C("artist", "meta");
        o(() => ur({ route: t, artist: l, device: a }), [l.pattern, l.filters]);
        const u = g(),
            p = g();
        sc(u, p, "ArtistPanel");
        const { isDesktop: m } = a,
            { hasPlus: f } = i,
            y = +t.artistId,
            v = l.artists[y] || "Unknown Artist",
            b = cr(l.filters, ""),
            w = "" !== b ? " ".concat(b) : "",
            x = "".concat(v).concat(w, " Tabs"),
            [S, k] = s(l.pattern),
            N = g(),
            L = n(
                () => t => {
                    clearTimeout(N.current), k(t);
                    const e = t.replace(/\s+/g, " ").trim();
                    tr(e);
                    const s = () => d("artist/filter/pattern", e);
                    "" === e ? s() : (N.current = setTimeout(s, 500));
                },
                [k]
            ),
            T = () => {
                er("ALL INSTRUMENTS"), d("artist/filter/reset");
            },
            [I, _] = s(null),
            E = l.songs.list || [],
            P = !!l.loading,
            A = yl(l.filters.instrument),
            M = yl(l.songs.filters.instrument),
            B = al.map(s => sr(s, t, e)),
            D = fl(l.filters),
            O = l.songs.hasMore,
            j = g();
        o(() => {
            try {
                if (j.current && Cc) {
                    const t = new IntersectionObserver(
                        t => {
                            t[0].isIntersecting && d("artist/more");
                        },
                        {
                            rootMargin: "0px 0px 300px 0px",
                            threshold: 1,
                            root: document.getElementById("panel-artist"),
                        }
                    );
                    return t.observe(j.current), () => t.disconnect();
                }
            } catch (t) {
                console.error(t);
            }
        }, []);
        const R = {
            tuningFilter: l.filters.tunings[l.filters.instrument] || "ALL TUNINGS",
            instrumentFilter: l.filters.instrument,
            difficultyFilter: l.filters.difficulty,
            setTuningFilter: t =>
                d("artist/filter/tuning", {
                    instrument: l.filters.instrument,
                    tuning: t,
                }),
            setInstrumentFilter: t => {
                er(t), d("artist/filter/instrument", t);
            },
            setDifficultyFilter: t => d("artist/filter/difficulty", t),
            difficultyFilterNA: A,
            isSmallScreen: r,
            instrumentSEOLinks: B,
            activeFilter: I,
            onFilterClick: t => _(t === I ? null : t),
        };
        return h(ec, {
            title: x,
            id: "artist",
            listId: y,
            styles: nc,
            onClick: () => _(null),
            children: [
                h(Sl, {
                    children: [
                        h(Il, {
                            value: S,
                            setValue: L,
                            isDesktop: m,
                            loading: P,
                            inputRef: p,
                            placeholder: r ? "Filter tabs" : "Filter ".concat(v, " tabs"),
                        }),
                        h(Wl, R),
                        m &&
                        !f &&
                        h(Rl, { page: t.page, instrumentFilter: l.filters.instrument }),
                    ],
                }),
                E.length > 0 &&
                h("div", {
                    className: nc.songs,
                    "data-list": "artist",
                    ref: u,
                    children: E.map(t =>
                        h(
                            kl,
                            {
                                song: t,
                                isActive: c && c.songId === t.songId,
                                numerated: !1,
                                difficultyNA: M,
                            },
                            t.songId.toString()
                        )
                    ),
                }),
                !Cc &&
                l.songs.hasMore &&
                h("div", {
                    className: nc.button,
                    children: h(ro, {
                        onClick: () => d("artist/more"),
                        title: "Show more",
                        processing: !!l.loading,
                    }),
                }),
                Cc &&
                h("div", {
                    ref: j,
                    children: [
                        O &&
                        !!l.loading &&
                        h(ao, {
                            fill: "#777",
                            width: 35,
                            height: 35,
                            className: "Csr2lv Csr1xa",
                        }),
                    ],
                }),
                !P &&
                0 === E.length &&
                h("div", {
                    className: nc.stubWrapper,
                    children: [
                        h(Fl, {
                            id: "notfound",
                            header: "No tabs found",
                            headerColor: "red",
                            icon: () => h(zl, {}),
                            children: h(Yl, {
                                usesFilters: D,
                                numResults: 0,
                                resetFilter: D
                                    ? T
                                    : () => {
                                        T(), L("");
                                    },
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
var Nc = { panel: "Cdy7e Cdydg vfvk", content: "Cdy21j vf38" };
const Lc = t => {
    !b &&
        t.on("@init", () => ({
            textpage: {
                slug: "",
                title: "",
                content: "",
                isLoading: !1,
                isError: !1,
            },
        })),
        t.on("textpage/load:processing", (t, e) => ({
            textpage: { slug: e, title: "", content: "", isLoading: !0, isError: !1 },
        })),
        t.on("textpage/load:done", (t, e) => ({
            textpage: Object.assign({}, e, { isLoading: !1, isError: !1 }),
        })),
        t.on("textpage/load:error", t => ({
            textpage: Object.assign({}, t.textpage, {
                title: "",
                content: "",
                isLoading: !1,
                isError: !0,
            }),
        }));
};
function Tc(t, e, s, n) {
    const i = t.length,
        o = Math.ceil((i * s) / e),
        a = Math.ceil((i * s + n * o) / e);
    if (1 === a) return [t];
    const r = Math.ceil((e - n) / s);
    let l = 0;
    const c = [];
    for (let e = 0; e < a; e++) {
        const s = t.substr(l, r);
        let n;
        if (e !== a - 1) {
            const t = s.split(" ");
            n = s.lastIndexOf(t[t.length - 1]);
        }
        (l += n), c.push(s.substr(0, n).trim());
    }
    return c;
}
function Ic({ level: t, title: e, action: s, reason: n }) {
    const { screen: i, device: r } = C("screen", "device");
    if (b) {
        const { dispatch: t } = C();
        o(() => t("curiosity/event", { event: "Alert", Reason: n }), []);
    }
    const l = (function (t) {
        switch (t) {
            case "error":
                return "Ce123t Ce11ar";
            case "notice":
                return "Ce123t Ce1285";
            default:
                return "Ce123t Ce128";
        }
    })(t),
        c = r.isPhone ? 0 : 190,
        d = i.viewport.width - c > 600 ? 600 : i.viewport.width - c,
        u = Tc(e, d, 9, 10),
        h = Tc(s, d, 7, 10),
        p =
            "undefined" == typeof btoa
                ? t => Buffer.from(t, "binary").toString("base64")
                : btoa;
    return a(
        "section",
        { className: l, role: "alert" },
        u.map(t =>
            a("img", {
                height: 31,
                "aria-label": "title",
                alt: e,
                src:
                    "data:image/svg+xml;base64," +
                    p(
                        "<svg xmlns='http://www.w3.org/2000/svg' width='"
                            .concat(
                                9 * t.length + 10,
                                "' height='31'>\n            <text x='50%' y='50%' font-family='\"songsterr-condensed\", sans-serif-condensed, Arial, sans-serif' font-weight='400' letter-spacing='-0.6px' font-size='20px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>"
                            )
                            .concat(t, "</text>\n          </svg>")
                    ),
            })
        ),
        s &&
        h.map(t =>
            a("img", {
                height: 22,
                "aria-label": "action",
                alt: s,
                src:
                    "data:image/svg+xml;base64," +
                    p(
                        "<svg xmlns='http://www.w3.org/2000/svg' width='"
                            .concat(
                                7 * t.length + 10,
                                "' height='22'>\n            <text x='50%' y='50%' font-family='\"songsterr\", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>"
                            )
                            .concat(t, "</text>\n          </svg>")
                    ),
            })
        )
    );
}
const _c = {
    privacy: "Privacy Policy",
    terms: "Terms Of Service",
    dnsmpd: "Do Not Sell My Personal Information",
};
class Ec extends c {
    render() {
        dr(this.props);
        const { textpage: t, experiments: s } = C("textpage", "experiments");
        if (b) {
            const t = e(x);
            o(() => {
                !(async function (t, e) {
                    const s = t.get().textpage;
                    if (s.slug !== e || s.isError)
                        try {
                            t.dispatch("textpage/load:processing", e);
                            const s = await (async function (t) {
                                const e = "/api/textpage/" + t,
                                    s = await fetch(e);
                                return Bi(s), s.json();
                            })(e);
                            s.slug === t.get().textpage.slug &&
                                t.dispatch("textpage/load:done", s);
                        } catch (s) {
                            console.log(e, t.get().textpage.slug),
                                e === t.get().textpage.slug &&
                                t.dispatch("textpage/load:error", s);
                        }
                })(t, this.props.route.page);
            }, [this.props.route.page]),
                o(() => {
                    const e = document.getElementById("manage-consent");
                    e &&
                        e.addEventListener("click", function () {
                            "on" === s.googlefc
                                ? window &&
                                    window.googlefc &&
                                    window.googlefc.showRevocationMessage
                                    ? window.googlefc.showRevocationMessage()
                                    : alert("Something Went Wrong. Please refresh page.")
                                : t.dispatch("consent/toggle", void 0);
                        });
                }, []);
        }
        return a(
            ec,
            { title: t.title || _c[t.slug] || "Placeholder", id: t.slug, styles: Nc },
            a(
                "div",
                { className: "ol1u6 vw2mu" },
                t.isLoading &&
                a(Ic, {
                    level: "info",
                    title: "Loading...",
                    reason: "textpage_loading",
                }),
                t.isError &&
                a(Ic, {
                    level: "info",
                    title: "Something went wrong",
                    action: "Please, try to reload page.",
                    reason: "textpage_error",
                }),
                !t.isLoading &&
                !t.isError &&
                a("div", {
                    className: "vwrb",
                    dangerouslySetInnerHTML: { __html: t.content },
                })
            )
        );
    }
}
var Pc = "/static/media/signature.3ede03cb.svg",
    Ac = {
        hidden: "Cjj2pa",
        top: "Cjjjv",
        up: "Cjj2o4",
        HowToReadTabPanel: "Cjjax",
        HelpPanel: "Cjj1ei",
        tocArrow: "Cjj16h",
    };
const Mc = (t = "top") => a("a", { id: t, className: Ac.hidden }),
    Bc = (t, e = "#top") =>
        a(
            "div",
            { className: Ac.top },
            a(
                "a",
                { href: e, className: "".concat(Ac.up, " ").concat(Ac[t]) },
                a(
                    "svg",
                    {
                        width: 54,
                        height: 54,
                        viewBox: "0 0 54 54",
                        "aria-labelledby": "help-toc",
                    },
                    a(
                        "defs",
                        null,
                        a(
                            "filter",
                            {
                                id: "toc_shadow",
                                width: "200%",
                                height: "200%",
                                x: "-50%",
                                y: "-50%",
                            },
                            a("feGaussianBlur", {
                                stdDeviation: 2.1468,
                                in: "SourceGraphic",
                            }),
                            a("feOffset", { dy: 2, result: "toca" }),
                            a("feFlood", { "flood-color": "#000000", "flood-opacity": 0.15 }),
                            a("feComposite", { in2: "toca", operator: "in", result: "tocb" }),
                            a("feBlend", { in: "SourceGraphic", in2: "tocb", mode: "normal" })
                        )
                    ),
                    a("title", { id: "help-toc" }, "Table of Content"),
                    a("circle", { cx: 27, cy: 27, r: 20, filter: "url(#toc_shadow)" }),
                    a("path", {
                        className: Ac.tocArrow,
                        d: "M27 20v14m-7-7l7-7 7 7",
                        "stroke-width": 2,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                    })
                )
            )
        );
var Dc = {
    exitActive: "mc1iw",
    enterActive: "mc30d",
    enter: "mc1lp",
    exit: "mc291",
};
function Oc(t) {
    return a(
        O,
        Object.assign({}, t, {
            timeout: { enter: 300, exit: 0 },
            animationStyles: Dc,
        }),
        a(
            "section",
            { className: t.className, "data-section": t["data-section"] },
            t.children
        )
    );
}
function jc({ id: t, className: e, children: s, href: n }) {
    let i = n;
    if (!i) {
        const { meta: t } = C("meta");
        i = vi(t.current, t.partId, t.revisionId);
    }
    return a(
        Un,
        { id: t, to: i, className: e || j.buttonGreen },
        s || "Click here to continue"
    );
}
const Rc = ["signin", "signup", "subscribePlus", "updateCard", "help"];
function zc() {
    if (b)
        return Al(
            "https://www.google.com/recaptcha/api.js?render=".concat(
                window.__RECAPTCHA_KEY__
            ),
            "__LOADED_RECAPTCHA__"
        );
}
async function Fc(t) {
    if (b)
        try {
            return (
                window.grecaptcha || (await zc()),
                await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: t })
            );
        } catch (t) { }
}
function Hc() {
    if (
        window &&
        "Sentry" in window &&
        "function" == typeof window.Sentry.lastEventId
    )
        return window.Sentry.lastEventId();
}
function qc() {
    const { dispatch: t } = C();
    b && o(() => t("curiosity/error", { error: "Something Went Wrong" }), []);
    const [e, n] = s(void 0);
    return (
        b &&
        o(() => {
            const t = setInterval(() => {
                const e = Hc();
                e && (n(e), clearInterval(t));
            }, 50);
            return () => clearTimeout(t);
        }, []),
        a(
            "section",
            { className: "xke6" },
            a("h5", { className: "xk1ks" }, a("span", null, "Something Went Wrong")),
            a(
                "p",
                { className: "xk302" },
                "We track these errors automatically, but if the problem persists feel free to ",
                a(Un, { to: "/a/wa/help#contact-us" }, "contact us"),
                ". In the meantime, try refreshing."
            ),
            e && a("p", { className: "xk302" }, "Error ID: ", e)
        )
    );
}
function Uc() {
    zc();
    const {
        meta: t,
        user: e,
        experiments: n,
        device: i,
    } = C("meta", "user", "experiments", "device"),
        { isLoggedIn: o, profile: r } = e,
        l = vi(t.current, t.partId, t.revisionId),
        [c, d] = s({ error: null, next: !1, processing: !1 }),
        u = g(),
        h = g(),
        p = g(),
        f = c.error,
        y = m(
            async t => {
                t.preventDefault();
                let e = "",
                    s = "",
                    a = "";
                try {
                    const c = [];
                    if (o) (s = r.name), (e = r.email);
                    else {
                        const t = u.current;
                        t && (c.push({ field: t, validator: $i }), (s = t.value));
                        const n = h.current;
                        n && (c.push({ field: n, validator: Zi }), (e = n.value));
                    }
                    const m = p.current;
                    m && (c.push({ field: m, validator: to }), (a = m.value)),
                        oo(c),
                        d({ error: null, processing: !0, next: !1 });
                    const g = {
                        page: wi(l),
                        productName: "SRW",
                        "Operating System": i.os,
                        DeviceType: i.type,
                        Useragent: window.navigator && window.navigator.userAgent,
                        "Sentry Last Event Id": Hc(),
                    };
                    try {
                        const t = window.amplitude.getInstance().options.deviceId;
                        g.Amplitude =
                            "https://analytics.amplitude.com/demax-inc/project/308889/search/".concat(
                                t
                            );
                    } catch (t) { }
                    g.Plan = o ? r.plan : "FREE";
                    for (const t in n)
                        Object.prototype.hasOwnProperty.call(n, t) &&
                            (g["Experiment: ".concat(t)] = n[t]);
                    if (
                        !(
                            await (async function (t) {
                                const e = { "X-Recaptcha-Token": await Fc("feedback") },
                                    s = await Mi("/feedback/web", t, e);
                                return await Ri(s), Bi(s), s;
                            })({
                                name: s,
                                subject: "message from website",
                                email: e,
                                message: a,
                                properties: g,
                            })
                        ).ok
                    )
                        return void d({
                            error: new Ii({
                                summary: "Something Went Wrong, please try again later",
                            }),
                            processing: !1,
                            next: !1,
                        });
                    d({ processing: !1, error: null, next: !0 });
                } catch (t) {
                    d({ error: t, processing: !1, next: !1 });
                }
            },
            [o, r, l]
        ),
        v = c.next
            ? a(
                Oc,
                { key: "done", className: "ol1u6 Cv02g0", "data-section": "done" },
                a("h4", { className: "ol1gf Cxq1pl" }, "Thanks for reaching out!"),
                a(
                    "h5",
                    { className: "ol1gf Cxq1pl Cxq211" },
                    "We will get back to you soon"
                ),
                a(jc, null)
            )
            : a(
                Oc,
                { key: "help", className: "ol1u6 Cv01j7", "data-section": "form" },
                a(
                    "h2",
                    { className: "Cv020y", id: "contact-us" },
                    "Have not found the answer? Write to us!"
                ),
                a(
                    "form",
                    { noValidate: !0, onSubmit: y },
                    a(po, { error: f }),
                    a(mo, {
                        ref: u,
                        name: "name",
                        type: "name",
                        label: "Name",
                        placeholder: "Name",
                        defaultValue: o ? r.name : "",
                        autocomplete: "name",
                        readonly: o,
                        error: f,
                    }),
                    a(mo, {
                        ref: h,
                        name: "email",
                        type: "email",
                        label: "Email",
                        defaultValue: o ? r.email : "",
                        placeholder: "Email",
                        autocomplete: "email",
                        readonly: o,
                        error: f,
                    }),
                    a(mo, {
                        ref: p,
                        type: "textarea",
                        name: "summary",
                        label: "Questions",
                        placeholder: "How can we help you?",
                        error: f,
                    }),
                    a(
                        "div",
                        { className: "ol10l Cv0jn" },
                        a(ro, { title: "Send", processing: c.processing }),
                        a(jc, { className: j.buttonLinkFloat }, "Cancel")
                    )
                )
            );
    return a(M, null, v);
}
const Vc = t => {
    !b &&
        t.on("@init", () => ({
            faq: { content: void 0, isLoading: !1, isError: !1 },
        })),
        t.on("faq/load:processing", t => ({
            faq: { content: void 0, isLoading: !0, isError: !1 },
        })),
        t.on("faq/load:done", (t, e) => ({
            faq: { content: e, isLoading: !1, isError: !1 },
        })),
        t.on("faq/load:error", t => ({
            faq: { content: void 0, isLoading: !1, isError: !0 },
        }));
},
    Gc = (t, e) =>
        "string" == typeof t
            ? e.test(t)
            : Array.isArray(t)
                ? t.some(t => Gc(t, e))
                : !(!t.props || !t.props.children) && Gc(t.props.children, e);
function Xc(t, e) {
    if (void 0 === t) return [];
    function s(t) {
        if (null === t) return "";
        if (Array.isArray(t)) return t.map(t => s(t));
        if ("string" == typeof t) return t;
        if (t.tag) {
            let e = {};
            if ("a" === t.tag) {
                if (t.attrs.href && t.attrs.href.startsWith("/"))
                    return a(Un, Object.assign({}, t.attrs), s(t.children));
                e = { rel: "noopener noreferrer", target: "_blank" };
            }
            return a("".concat(t.tag), Object.assign({}, t.attrs, e), s(t.children));
        }
    }
    return (
        t &&
        t.map(t =>
            Object.assign({}, t, {
                records: t.records.map(t =>
                    Object.assign({}, t, { answer: t.answer.map(t => s(t)) })
                ),
            })
        )
    );
}
var Wc = u(t => {
    dr(t);
    const {
        device: { isPhone: i },
    } = t,
        {
            faq: { content: r, isLoading: l, isError: c },
        } = C("faq"),
        d = e(x);
    b &&
        o(() => {
            !(async function (t) {
                if (void 0 === t.get().faq.content)
                    try {
                        t.dispatch("faq/load:processing");
                        const e = await (async function () {
                            const t = await fetch("/api/faq/compact");
                            return Bi(t), (await t.json()).filter(t => t.isSRW);
                        })();
                        t.dispatch("faq/load:done", e);
                    } catch (e) {
                        t.dispatch("faq/load:error", e);
                    }
            })(d);
        }, []);
    const u = n(() => Xc(r, d.dispatch), [r]),
        h = g(),
        p = g(),
        [m, f] = s(u[0] && u[0].id),
        [y, v] = s(""),
        w = n(() => {
            if (y.length) {
                const t = new RegExp(
                    y
                        .replace(/[^\w\d ]/gi, "")
                        .split(" ")
                        .filter(t => t)
                        .map(t => t.trim())
                        .join("|"),
                    "i"
                );
                return u
                    .map(e => {
                        const s = e.records.filter(
                            e => t.test(e.question) || Gc(e.answer, t)
                        );
                        return s.length > 0 ? Object.assign({}, e, { records: s }) : null;
                    })
                    .filter(Boolean);
            }
            return u;
        }, [u, y]),
        S = n(() => (w.length && w.every(t => t.id !== m) ? w[0].id : m), [w, m]),
        k = t => ((i && y) || S === t.id ? "k82y9 k82a8" : "k82y9"),
        N = w.length && w.find(t => t.id === S).records.length - w.length,
        L = !i && N > 0 && "margin-bottom:".concat(25 * N, "px");
    return a(
        ec,
        { title: "FAQ", id: "help", styles: Nc },
        Mc("toc"),
        !c &&
        a(
            "div",
            { className: "k8pi" },
            a(Il, {
                className: Tl.staticSearch,
                value: y,
                setValue: v,
                isDesktop: !0,
                loading: l,
                inputRef: p,
                placeholder: "How can we help?",
            })
        ),
        l &&
        a(ao, {
            id: "faq-loader",
            fill: "#777",
            width: 35,
            height: 35,
            style: { margin: "30px auto" },
        }),
        Bc("HelpPanel", "#toc"),
        ((t = "#contact-us") =>
            a(
                "div",
                { className: "B632le" },
                a(
                    "a",
                    { href: t, className: "B632ms" },
                    a(
                        "svg",
                        {
                            width: 54,
                            height: 54,
                            viewBox: "0 0 54 54",
                            "aria-labelledby": "help-contact-us",
                        },
                        a(
                            "defs",
                            null,
                            a(
                                "filter",
                                {
                                    id: "contact_shadow",
                                    width: "200%",
                                    height: "200%",
                                    x: "-50%",
                                    y: "-50%",
                                },
                                a("feGaussianBlur", {
                                    stdDeviation: 2.1468,
                                    in: "SourceGraphic",
                                }),
                                a("feOffset", { dy: 2, result: "contacta" }),
                                a("feFlood", {
                                    "flood-color": "#000000",
                                    "flood-opacity": 0.15,
                                }),
                                a("feComposite", {
                                    in2: "contacta",
                                    operator: "in",
                                    result: "contactb",
                                }),
                                a("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "contactb",
                                    mode: "normal",
                                })
                            )
                        ),
                        a("title", { id: "help-contact-us" }, "Contact Us"),
                        a("circle", {
                            cx: 27,
                            cy: 27,
                            r: 20,
                            filter: "url(#contact_shadow)",
                        }),
                        a("path", {
                            className: "B63134",
                            d: "M36.1 18.5H17.8c-1.2 0-2 .8-2 2v13.1c0 1.1.8 1.9 2 1.9h18.3c1.2 0 2.1-.8 2.1-1.9V20.5c0-1.2-.9-2-2.1-2zm-.1 1.3l-9 8.9-9-8.9h18zM17.1 33.3V20.7l6.3 6.3-6.3 6.3zm.9.9l6.3-6.3 2.2 2.2c.3.3.8.3 1 0l2.1-2.2 6.4 6.3H18zm18.8-.9L30.6 27l6.2-6.3v12.6z",
                            "fill-width": 2,
                        })
                    )
                )
            ))("#contact-us"),
        w.length > 0 &&
        a(
            "nav",
            { className: "k81ms", id: "faq-toc" },
            a(
                "ul",
                { className: "k826a", ref: h, style: L },
                a(
                    "li",
                    { className: "k82y9" },
                    a(
                        Un,
                        {
                            to: "/a/wa/howtoreadtab",
                            "data-link": "how to read tab",
                            className: "k81s2",
                        },
                        "How to Read a Tab"
                    )
                ),
                w.map(t =>
                    a(
                        "li",
                        { className: k(t), id: t.id },
                        a(
                            "button",
                            {
                                onClick: () => {
                                    f(t.id);
                                },
                            },
                            t.section
                        ),
                        a(
                            "ul",
                            {
                                className: "k82dz",
                                style: "".concat(L ? "display:block; padding: 0;" : ""),
                            },
                            t.records.map(t =>
                                a(
                                    "li",
                                    { className: "k8oc" },
                                    a("a", { href: "#" + t.id }, t.question)
                                )
                            )
                        )
                    )
                )
            )
        ),
        a(
            "section",
            {
                "data-section": "qa",
                className: "k81gq",
                itemscope: !0,
                itemtype: "https://schema.org/FAQPage",
            },
            w.map(t =>
                a(
                    "article",
                    { className: "k84s" },
                    a("h2", { className: "k8286" }, a("span", null, t.section)),
                    a(
                        "ul",
                        null,
                        t.records.map(t =>
                            a(
                                "li",
                                {
                                    className: "k8327",
                                    itemscope: !0,
                                    itemprop: "mainEntity",
                                    itemtype: "https://schema.org/Question",
                                },
                                a("a", { className: "k824x", id: t.id }, t.id),
                                a("h3", { className: "k81ai", itemprop: "name" }, t.question),
                                a(
                                    "div",
                                    {
                                        className: "k81ch",
                                        itemscope: !0,
                                        itemprop: "acceptedAnswer",
                                        itemtype: "https://schema.org/Answer",
                                    },
                                    a("div", { itemprop: "text" }, t.answer)
                                )
                            )
                        )
                    )
                )
            ),
            !c &&
            !l &&
            !w.length &&
            a(
                "div",
                { className: "k8j5", id: "faq-noanswers" },
                "No answers found"
            ),
            c &&
            a(
                "div",
                { id: "faq-network-error", className: "k8j5" },
                "Sorry, but there are some problems with network.",
                a("br", {}),
                "Please, try to reload page"
            )
        ),
        a(Uc, null)
    );
});
class Yc extends c {
    render() {
        const t = this.props.className;
        return a(
            "svg",
            { width: 40, height: 40, viewBox: "0 0 26 26", className: t },
            a(
                "g",
                { fill: "none", fillRule: "evenodd" },
                a("rect", { width: "26", height: "26", fill: "#FFF", rx: "2" }),
                a(
                    "g",
                    { fill: "#000" },
                    a("path", {
                        fill: "#EA4335",
                        d: "M13 7.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C17.46 4.89 15.43 4 13 4 9.48 4 6.44 6.02 4.96 8.96l2.91 2.26C8.6 9.05 10.62 7.48 13 7.48z",
                    }),
                    a("path", {
                        fill: "#4285F4",
                        d: "M21.64 13.2c0-.74-.06-1.28-.19-1.84H13v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
                    }),
                    a("path", {
                        fill: "#FBBC05",
                        d: "M7.88 14.78a5.54 5.54 0 0 1-.3-1.78c0-.62.11-1.22.29-1.78L4.96 8.96A9.008 9.008 0 0 0 4 13c0 1.45.35 2.82.96 4.04l2.92-2.26z",
                    }),
                    a("path", {
                        fill: "#34A853",
                        d: "M13 22c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74l-2.91 2.26C6.45 19.98 9.48 22 13 22z",
                    }),
                    a("path", { fill: "none", d: "M4 4h18v18H4z" })
                )
            )
        );
    }
}
const Zc = ({ onClick: t, processing: e, disabled: s, title: n, id: i }) =>
    a(
        "button",
        { id: i, className: j.google, onClick: t, disabled: s || e },
        e &&
        a(ao, { width: 25, height: 20, fill: "#fff", className: "Csr2lv Csrjl" }),
        !e && a(Yc, { className: j.googleIcon }),
        a("span", null, n)
    );
async function Kc() {
    window.__INITIALIZED_GAPI__ ||
        (await Al("https://apis.google.com/js/client.js", "__LOADED_GAPI__"),
            await new Promise((t, e) => {
                if (!window.gapi) return e(new Error("No window.gapi"));
                window.gapi.load("client:auth2", {
                    callback: function () {
                        setTimeout(function () {
                            if (!window.gapi || !window.gapi.client)
                                return e(new Error("No window.gapi.client"));
                            (window.__INITIALIZED_GAPI__ = !0),
                                window.gapi.client
                                    .init({
                                        clientId: window.__GOOGLE_CLIENT_ID__,
                                        scope: "profile email",
                                    })
                                    .then(t, e);
                        }, 1);
                    },
                    onerror: e,
                });
            }));
}
const Qc = "Oops, something went wrong. Please try again later";
function Jc(t) {
    if (!(t instanceof Error) && t.error)
        switch (t.error.toLowerCase()) {
            case "popup_closed_by_user":
                return null;
            case "idpiframe_initialization_failed":
                return t.details ? new Error(t.details) : new Error(Qc);
            case "popup_blocked_by_browser":
                return new Error("Pop-up blocked by browser. Please try again");
            case "access_denied":
                return new Error("Access was not granted. Please try again");
            default:
                return new Error(Qc);
        }
    return new Error(Qc);
}
class $c extends c {
    constructor(...t) {
        super(...t),
            $c.prototype.__init.call(this),
            $c.prototype.__init2.call(this),
            $c.prototype.__init3.call(this),
            $c.prototype.__init4.call(this),
            $c.prototype.__init5.call(this),
            $c.prototype.__init6.call(this);
    }
    __init() {
        this.email = p();
    }
    __init2() {
        this.password = p();
    }
    __init3() {
        this.state = {
            error: null,
            processing: !1,
            googleError: null,
            googleInitialized: !1,
            googleProcessing: !1,
        };
    }
    componentDidMount() {
        (async function () {
            try {
                await Kc();
            } catch (t) {
                "idpiframe_initialization_failed" !== t.error && console.error(t);
            }
        })().then(() => {
            this.setState({ googleInitialized: !0 });
        });
    }
    __init4() {
        this.redirect = () => {
            const { next: t } = this.props.query;
            t && t.includes("/mailer/")
                ? window.location.replace(window.location.origin + t)
                : this.props.dispatch("navigate", xi(t));
        };
    }
    __init5() {
        this.handleSignin = async t => {
            t.preventDefault();
            const e = this.email && this.email.current,
                s = this.password && this.password.current;
            if (e && s)
                try {
                    oo([
                        { field: e, validator: Zi },
                        { field: s, validator: so },
                    ]),
                        this.setState({ processing: !0, error: null });
                    const t = await (async function (t, e) {
                        const s = { "X-Recaptcha-Token": await Fc("signin") },
                            n = { email: t, password: e },
                            i = await Mi("/auth/signin", n, s);
                        return (
                            await Ri(i),
                            Oi(i, "Invalid email or password"),
                            await Di(i, "signin"),
                            Bi(i),
                            Ko(await i.json())
                        );
                    })(e.value, s.value);
                    this.props.dispatch("user/signIn", t),
                        this.setState({ processing: !1, error: null }),
                        this.redirect();
                } catch (t) {
                    this.setState({ processing: !1, error: t });
                }
        };
    }
    __init6() {
        this.handleGoogleSignin = async t => {
            t.preventDefault();
            try {
                this.setState({ googleProcessing: !0, googleError: null });
                const t = await (async function (t) {
                    await Kc();
                    const e = window.gapi;
                    return (
                        await e.auth2.getAuthInstance().signIn(),
                        (async function (t, e) {
                            const s = "/auth/google-token?id_token=".concat(t),
                                n = await fetch(s, { credentials: "include", method: "get" });
                            return (
                                Oi(n, "Invalid email or password"),
                                Bi(n),
                                { profile: Ko(await n.json()), isCreated: 201 === n.status }
                            );
                        })(
                            e.auth2.getAuthInstance().currentUser.get().getAuthResponse()
                                .id_token
                        )
                    );
                })(this.props.consent.profiling);
                this.props.dispatch("user/googleSignIn", t),
                    this.setState({ googleProcessing: !1, googleError: null }),
                    this.redirect();
            } catch (t) {
                const e = Jc(t);
                this.setState({ googleProcessing: !1, googleError: e });
            }
        };
    }
    render() {
        dr(this.props);
        const t = this.props.query.next,
            e = t ? "?next=".concat(encodeURIComponent(t)) : "",
            {
                googleInitialized: s,
                googleError: n,
                googleProcessing: i,
            } = this.state;
        return a(
            ec,
            { title: "Sign In", id: "signin" },
            a(
                d,
                null,
                a(
                    "section",
                    { className: "ol1u6 z9263", "data-section": "google" },
                    a(
                        "form",
                        { noValidate: !0, onSubmit: this.handleGoogleSignin },
                        a(po, { error: n }),
                        a(Zc, {
                            id: "google-signin",
                            title: s ? "Sign in with Google" : "Loading...",
                            onClick: this.handleGoogleSignin,
                            processing: i,
                            disabled: !s,
                        })
                    )
                ),
                a(
                    "section",
                    { className: "ol1u6 z925t", "data-section": "signin" },
                    a("div", { className: "z910q" }, a("span", null, "OR")),
                    a(
                        "form",
                        { noValidate: !0, onSubmit: this.handleSignin, action: "" },
                        a(po, { error: this.state.error }),
                        a(mo, {
                            ref: this.email,
                            name: "email",
                            type: "email",
                            label: "Email",
                            autocomplete: "email",
                            error: this.state.error,
                        }),
                        a(mo, {
                            ref: this.password,
                            name: "password",
                            type: "password",
                            label: "Password",
                            autocomplete: "current-password",
                            error: this.state.error,
                        }),
                        a(
                            "div",
                            { className: "ol10l z9310" },
                            a(ro, {
                                id: "signin",
                                title: "Sign in",
                                processing: this.state.processing,
                            })
                        )
                    )
                ),
                a(
                    "section",
                    { className: "ol1u6 z91o2", "data-section": "forgot" },
                    a(Un, { to: "/a/wa/forgotPassword" }, "Forgot your password?")
                ),
                a(
                    "section",
                    { className: "ol1u6 z915g", "data-section": "signup" },
                    a("h3", { className: "ol1gf z912" }, "Don't have an account?"),
                    a(
                        Un,
                        {
                            to: "/a/wa/signup" + e,
                            id: "create_acc",
                            className: j.buttonGreen,
                        },
                        "Sign up"
                    )
                )
            )
        );
    }
}
var td = k($c, "consent");
class ed extends c {
    __init() {
        this.name = p();
    }
    __init2() {
        this.email = p();
    }
    __init3() {
        this.password = p();
    }
    __init4() {
        this.terms = p();
    }
    constructor(t) {
        super(t),
            ed.prototype.__init.call(this),
            ed.prototype.__init2.call(this),
            ed.prototype.__init3.call(this),
            ed.prototype.__init4.call(this),
            ed.prototype.__init5.call(this),
            ed.prototype.__init6.call(this),
            (this.state = { error: null, processing: !1 });
    }
    __init5() {
        this.handleCreate = async t => {
            t.preventDefault();
            const e = this.name.current,
                s = this.email.current,
                n = this.password.current,
                i = this.terms.current;
            try {
                oo([
                    { field: e, validator: $i },
                    { field: s, validator: Zi },
                    { field: n, validator: so },
                    { field: i, validator: no },
                ]),
                    this.setState({ processing: !0, error: null });
                const t = await (async function (t, e, s, n) {
                    const i = { "X-Recaptcha-Token": await Fc("signup") },
                        o = { name: t, email: e, password: s },
                        a = await Mi("/auth/signup", o, i);
                    return (
                        await Ri(a),
                        await zi(a),
                        await Di(a, "signup"),
                        Oi(
                            a,
                            "Disposable email domain detected. Please, use different email."
                        ),
                        Bi(a),
                        Ko(await a.json())
                    );
                })(e.value, s.value, n.value, this.props.consent.profiling);
                this.props.dispatch("user/signUp", t),
                    this.setState({ processing: !1, error: null }),
                    this.props.dispatch("navigate", xi(this.props.query.next));
            } catch (t) {
                this.setState({ processing: !1, error: t });
            }
        };
    }
    __init6() {
        this.loadContent = () => {
            this.setState(this.state);
        };
    }
    render() {
        dr(this.props), zc();
        const t = this.props.query.next,
            e = t ? "?next=".concat(encodeURIComponent(t)) : "",
            { error: s, processing: n } = this.state;
        return a(
            ec,
            { title: "Sign Up", id: "signup" },
            a(
                "section",
                { className: "ol1u6 zgqj", "data-section": "signup" },
                a(
                    "h2",
                    { className: "ol1gf zg1xo" },
                    "Sign up for a free Songsterr Account"
                ),
                a(
                    "form",
                    { noValidate: !0, onSubmit: this.handleCreate, action: "" },
                    a(po, { error: s }),
                    a(mo, {
                        ref: this.name,
                        name: "name",
                        type: "text",
                        label: "Name",
                        error: s,
                        autocomplete: "name",
                    }),
                    a(mo, {
                        ref: this.email,
                        name: "email",
                        type: "email",
                        label: "Email",
                        error: s,
                        autocomplete: "email",
                    }),
                    a(mo, {
                        ref: this.password,
                        name: "password",
                        type: "password",
                        label: "Password",
                        error: s,
                        autocomplete: "new-password",
                    }),
                    a(co, { name: "terms", errorMessage: s && io(s, "terms") }),
                    a(
                        "label",
                        { className: "fa1vk zg2vm" },
                        a("input", { ref: this.terms, name: "terms", type: "checkbox" }),
                        " I agree to the ",
                        a(
                            "a",
                            { href: "/a/wa/terms", target: "_blank", rel: "license" },
                            "Terms"
                        ),
                        " and ",
                        a(
                            "a",
                            { href: "/a/wa/privacy", target: "_blank", rel: "privacy" },
                            "Privacy policy"
                        ),
                        "."
                    ),
                    a(
                        "div",
                        { className: "ol10l zg244" },
                        a(ro, { id: "signup", title: "Create an account", processing: n }),
                        a(
                            Un,
                            {
                                to: "/a/wa/signin" + e,
                                className: j.buttonLinkFloat,
                                rel: "prev",
                            },
                            "Cancel"
                        )
                    )
                )
            )
        );
    }
}
var sd = k(ed, "user", "consent");
function nd() {
    const { dispatch: t, store: e } = C(),
        { payment: s } = e.get();
    o(() => {
        id(s, t);
    }, []);
}
async function id(t, e) {
    if (!t.dropin.loading && !t.dropin.ready)
        try {
            e("dropin/init:processing");
            const t = (async function () {
                const t = await fetch("/auth/billing/token", {
                    method: "get",
                    credentials: "include",
                });
                return await zi(t), Bi(t), t.json();
            })(),
                s = import("./dropin.9ce8a50b.js"),
                [n, i] = await Promise.all([s, t]);
            e("dropin/init:done", { module: n, token: i });
        } catch (t) {
            e("dropin/init:error", t);
        }
}
const od = t => {
    !b &&
        t.on("@init", () => ({
            payment: {
                dropin: {
                    loading: !1,
                    ready: !1,
                    error: null,
                    module: null,
                    token: null,
                },
            },
        })),
        t.on("dropin/init:processing", t => ({
            payment: {
                dropin: Object.assign({}, t.payment.dropin, { loading: !0, ready: !1 }),
            },
        })),
        t.on("dropin/init:done", (t, { module: e, token: s }) => ({
            payment: {
                dropin: Object.assign({}, t.payment.dropin, {
                    loading: !1,
                    ready: !0,
                    error: null,
                    module: e,
                    token: s,
                }),
            },
        })),
        t.on("dropin/init:error", (t, e) => ({
            payment: {
                dropin: Object.assign({}, t.payment.dropin, { error: e, loading: !1 }),
            },
        })),
        t.on("user/signOut", t => ({
            payment: {
                dropin: {
                    loading: !1,
                    ready: !1,
                    module: null,
                    token: null,
                    error: null,
                },
            },
        })),
        t.on("user/signIn", e => id(e.payment, t.dispatch)),
        t.on("user/signUp", e => id(e.payment, t.dispatch)),
        t.on("user/googleSignIn", e => id(e.payment, t.dispatch));
};
function ad() {
    const { dispatch: t } = C(),
        [e, n] = s(!1),
        [i, o] = s(null),
        r = m(async e => {
            o(null), n(!0), e.preventDefault();
            try {
                t(
                    "user/profile",
                    await (async function () {
                        const t = await Mi("/auth/promo/sra");
                        return (
                            Oi(t, "Cannot be applied. Please contact support"),
                            await (async function (t) {
                                if (409 === t.status) {
                                    const e = await t.json();
                                    throw new Ii({ __all__: e.message }, e.message);
                                }
                            })(t),
                            await zi(t),
                            await ji(t),
                            Bi(t),
                            Ko(await t.json())
                        );
                    })()
                ),
                    t("curiosity/conversion", { event: "Activated android promo" });
            } catch (e) {
                o(e),
                    t("curiosity/error", { error: "Android Promo", message: e.message });
            }
            n(!1);
        }, []);
    return a(
        "form",
        { noValidate: !0, onSubmit: r, action: "" },
        a(po, { error: i }),
        a(
            "div",
            { className: "ol10l Bg42w6" },
            a(ro, {
                id: "startAndroidPromo",
                title: "Start free trial",
                processing: e,
            })
        )
    );
}
function rd({ onClick: t }) {
    return a(
        "div",
        { className: "Cnodm Cno2i7" },
        a(
            "div",
            { className: "Cnoj4" },
            a("img", {
                src: "/static/media/devices.a3e3d850.svg",
                className: "Cno31l",
                width: 149,
                height: 66,
            }),
            a(
                "div",
                { className: "Cno2ru", id: "account-type" },
                a("span", { className: "Cno1fv" }, "ACCOUNT TYPE"),
                a("span", { className: "Cnooj" }, "FREE")
            )
        ),
        a(
            "div",
            { className: "Cnort", id: "account-meta" },
            a(
                Un,
                { to: "/a/wa/plus", className: "Cpb24q Cpb318 Cnold", onClick: t },
                "Upgrade to PLUS"
            )
        )
    );
}
function ld({ isCanceled: t, isMonthTrial: e }) {
    const s = t || e;
    return a(
        "div",
        { className: s ? "Cnodm Cno9s" : "Cnodm Cno1h8" },
        a(
            "div",
            { className: "Cnoj4" },
            a(
                "div",
                { className: "Cnoj4" },
                a("img", {
                    src: "/static/media/plus.57c4d40a.svg",
                    className: "Cno31l",
                    width: 144,
                    height: 73,
                }),
                a(
                    "div",
                    { className: "Cno2ru", id: "account-type" },
                    a("span", { className: "Cno1fv" }, "ACCOUNT TYPE"),
                    a("span", { className: "Cnooj" }, "PLUS")
                )
            ),
            s &&
            a(
                "div",
                { className: "Cnort", id: "account-meta" },
                t &&
                a(
                    "span",
                    null,
                    a("strong", null, "Canceled."),
                    " Active till the end of the last paid month."
                ),
                !t && e && a("span", null, "This is a one month free trial.")
            )
        )
    );
}
function cd() {
    const { experiments: t } = C("experiments");
    return a(
        "div",
        { className: "Cnodm Cnotc" },
        a(
            "div",
            { className: "Cnoj4" },
            a("img", {
                src: "/static/media/android.181a8323.svg",
                className: "Cno31l",
                width: 86,
                height: 65,
            }),
            a(
                "div",
                { className: "Cno2ru", id: "account-type" },
                a("span", { className: "Cno1fv" }, "ACCOUNT TYPE"),
                a("span", { className: "Cnooj" }, "Android"),
                a("span", { className: "Cnooj" }, "Lifetime")
            )
        ),
        a(
            "div",
            { className: "Cnort", id: "account-meta" },
            a(
                "span",
                null,
                "You have all the features unlocked for the ",
                a(
                    "a",
                    { href: oi("android", t, "android_lifetime") },
                    "Songsterr Android"
                ),
                " app."
            )
        )
    );
}
class dd extends c {
    __init() {
        this.name = p();
    }
    __init2() {
        this.email = p();
    }
    constructor(t) {
        super(t),
            dd.prototype.__init.call(this),
            dd.prototype.__init2.call(this),
            dd.prototype.__init3.call(this),
            dd.prototype.__init4.call(this),
            dd.prototype.__init5.call(this),
            (this.state = {
                error: null,
                processing: !1,
                signoutError: null,
                signoutProcessing: !1,
            });
    }
    __init3() {
        this.onUpgradeClick = () => {
            this.props.dispatch("curiosity/setConversionProps", {
                "Last referring link": "AccountPanel Upgrade Link",
            });
        };
    }
    __init4() {
        this.handleSignOut = async t => {
            t.preventDefault();
            try {
                this.setState({ signoutProcessing: !0, signoutError: null }),
                    await (async function () {
                        const t = await fetch("/auth/signout", {
                            method: "post",
                            credentials: "include",
                        });
                        if (403 === t.status)
                            throw new Error("You already signed out. Please refresh page");
                        return Bi(t), t.json();
                    })(),
                    this.props.dispatch("user/signOut"),
                    (async function () {
                        try {
                            await Kc();
                            const t = window.gapi;
                            t.auth2.getAuthInstance().isSignedIn.get() &&
                                (await t.auth2.getAuthInstance().signOut());
                        } catch (t) { }
                    })(),
                    this.setState({ signoutProcessing: !1, signoutError: null }),
                    this.props.dispatch("navigate", "/a/wa/signin");
            } catch (t) {
                this.setState({ signoutProcessing: !1, signoutError: t });
            }
        };
    }
    __init5() {
        this.handleSave = async t => {
            t.preventDefault();
            const e = this.name.current,
                s = this.email.current;
            try {
                oo([
                    { field: e, validator: $i },
                    { field: s, validator: Zi },
                ]),
                    this.setState({ processing: !0, error: null });
                const t = await (async function (t, e) {
                    const s = { name: t, email: e },
                        n = await Mi("/auth/change", s);
                    return await zi(n), Bi(n), Ko(await n.json());
                })(e.value, s.value);
                this.props.dispatch("user/profile", t),
                    this.setState({ processing: !1, error: null });
            } catch (t) {
                this.setState({ processing: !1, error: t });
            }
        };
    }
    render() {
        dr(this.props), nd();
        const {
            hasPlus: t,
            hasSubscription: e,
            isLoggedIn: s,
            profile: n,
        } = this.props.user;
        if (!s)
            return a(
                ec,
                { title: "Account", id: "account" },
                a("div", { className: "Panel-inner" })
            );
        const {
            planCancelDate: i,
            planEndDate: o,
            name: r,
            email: l,
            isLegacyPayPal: c,
            isAndroidLifetime: d,
            plan: u,
        } = n,
            h = d && !t ? "Android Lifetime" : u,
            p = d && !t,
            m = d && t && !n.subscription,
            g = e && !i,
            f = t && o;
        return a(
            ec,
            { title: "Account", id: "account" },
            a(
                "div",
                { className: "Panel-inner" },
                a(
                    "section",
                    { className: "ol1u6 C2d1r2 C2d7m", "data-section": "update" },
                    a(
                        "form",
                        { noValidate: !0, onSubmit: this.handleSave, action: "" },
                        a(po, { error: this.state.error }),
                        a(mo, {
                            type: "text",
                            label: "Name",
                            ref: this.name,
                            name: "name",
                            defaultValue: r,
                            error: this.state.error,
                            autocomplete: "name",
                        }),
                        a(mo, {
                            type: "email",
                            label: "Email",
                            ref: this.email,
                            name: "email",
                            defaultValue: l,
                            error: this.state.error,
                            autocomplete: "email",
                        }),
                        a(
                            "div",
                            { className: "ol10l C2d1zt" },
                            a(ro, { title: "Save", processing: this.state.processing })
                        )
                    ),
                    a(
                        Un,
                        {
                            to: "/a/wa/account/password",
                            className: "C2d1q5",
                            "data-link": "password",
                        },
                        "Change password"
                    )
                ),
                a(
                    "section",
                    { className: "ol1u6 C2d1r2 C2dm0", "data-section": "profile" },
                    "Android Lifetime" === h && a(cd, null),
                    "FREE" === h && a(rd, { onClick: this.onUpgradeClick }),
                    "PLUS" === h && a(ld, { isCanceled: f, isMonthTrial: m }),
                    p &&
                    a(
                        "div",
                        { className: "olqe C2d2g5 C2d1x6", id: "account-android-notice" },
                        a(
                            Un,
                            {
                                id: "upgradeFromAndroid",
                                to: "/a/wa/plus",
                                onClick: this.onUpgradeClick,
                            },
                            "Upgrade to PLUS"
                        ),
                        " to get all the features across all the platforms, or start a one month free trial.",
                        a(ad, null)
                    ),
                    g &&
                    a(
                        Un,
                        {
                            id: "cancelSubscription",
                            to: "/a/wa/account/subscription",
                            className: "C2d1q5",
                            "data-link": "cancel",
                        },
                        "Cancel subscription"
                    )
                ),
                e &&
                !i &&
                !c &&
                a(
                    "section",
                    { className: "ol1u6 C2d1r2 C2d2sf", "data-section": "card" },
                    a(
                        "div",
                        { className: "C2d2q6" },
                        a(
                            "div",
                            { className: "C2d1ue" },
                            a(
                                "div",
                                { className: "C2d1r5", "data-value": "card" },
                                "XXXX-XXXX-XXXX-XXXX"
                            ),
                            a(
                                "div",
                                { className: "C2d12k" },
                                a(
                                    Un,
                                    {
                                        id: "updateCardLink",
                                        to: "/a/wa/account/card",
                                        "data-link": "card",
                                    },
                                    "Update card"
                                )
                            )
                        )
                    )
                ),
                a(
                    "section",
                    { className: "ol1u6 C2d1r2 C2d2gw", "data-section": "privacy" },
                    a("p", { className: "C2d1g5" }, "EXPORT"),
                    a(
                        "p",
                        { className: "olqe C2d2g5", "data-label": "privacy-notice" },
                        "You are in control of the content in your Songsterr account, even if you stop using Songsterr or decide to delete your account altogether."
                    ),
                    a(
                        "a",
                        {
                            id: "exportPersonalData",
                            className: "C2d1q5",
                            target: "_blank",
                            href: "/api/privacy/data",
                            "data-link": "export",
                        },
                        "Download my data (JSON)"
                    ),
                    !t &&
                    a(
                        Un,
                        {
                            to: "/a/wa/account/deactivate",
                            className: "C2d1q5",
                            "data-link": "deactivate",
                        },
                        "Deactivate my account"
                    )
                ),
                a(
                    "section",
                    { className: "ol1u6 C2dnj", "data-section": "signout" },
                    a(
                        "form",
                        { noValidate: !0, onSubmit: this.handleSignOut },
                        a(ro, {
                            id: "signout",
                            title: "Sign out",
                            processing: this.state.signoutProcessing,
                        })
                    )
                )
            )
        );
    }
}
var ud = k(dd, "user", "experiments");
class hd extends c {
    __init() {
        this.email = p();
    }
    constructor(t) {
        super(t),
            hd.prototype.__init.call(this),
            hd.prototype.__init2.call(this),
            (this.state = { error: null, email: "", processing: !1, next: !1 });
    }
    __init2() {
        this.handleSubmit = async t => {
            t.preventDefault();
            const e = this.email.current;
            try {
                oo([{ field: e, validator: Zi }]),
                    this.setState({ processing: !0, error: null }),
                    await (async function (t) {
                        const e = new FormData();
                        e.append("email", t);
                        const s = await fetch("/a/ra/person/forgotPassword.json", {
                            method: "post",
                            credentials: "include",
                            body: e,
                        });
                        return await zi(s), Bi(s), s.json();
                    })(e.value),
                    this.props.dispatch("user/forgotPassword"),
                    this.setState({
                        processing: !1,
                        error: null,
                        next: !0,
                        email: e.value,
                    });
            } catch (t) {
                this.setState({ processing: !1, error: t });
            }
        };
    }
    render() {
        const t = a(
            Oc,
            { key: "form", className: "ol1u6 Cxq2a7", "data-section": "form" },
            a(
                "h4",
                { className: "ol1gf Cxq1pl" },
                "Please enter the email address you use to sign in to your account."
            ),
            a(
                "form",
                { noValidate: !0, onSubmit: this.handleSubmit, action: "" },
                a(po, { error: this.state.error }),
                a(mo, {
                    ref: this.email,
                    type: "email",
                    name: "email",
                    label: "Email",
                    autocomplete: "email",
                    error: this.state.error,
                }),
                a(
                    "div",
                    { className: "ol10l Cxq18v" },
                    a(ro, { title: "Submit", processing: this.state.processing }),
                    a(
                        jc,
                        { href: "/a/wa/signin", className: j.buttonLinkFloat },
                        "Cancel"
                    )
                )
            )
        ),
            e = a(
                Oc,
                { key: "done", className: "ol1u6 Cxq2a7", "data-section": "done" },
                a(
                    "h4",
                    { className: "ol1gf Cxq1pl" },
                    "We've sent instructions to ",
                    this.state.email
                ),
                a(jc, { href: "/a/wa/signin" })
            ),
            s = this.state.next ? e : t;
        return a(
            ec,
            { title: "Forgot your password?", id: "forgotPassword" },
            a(M, null, s)
        );
    }
}
var pd = k(hd);
class md extends c {
    __init() {
        this.password = p();
    }
    __init2() {
        this.passwordAgain = p();
    }
    constructor(t) {
        super(t),
            md.prototype.__init.call(this),
            md.prototype.__init2.call(this),
            md.prototype.__init3.call(this),
            (this.state = {
                error: null,
                processing: !1,
                next: !1,
                errorPassword: "",
                errorPasswordAgain: "",
            });
    }
    __init3() {
        this.handleSubmit = async t => {
            t.preventDefault();
            const e = this.password.current,
                s = this.passwordAgain.current;
            try {
                if (
                    (oo([
                        { field: e, validator: so },
                        {
                            field: s,
                            validator: t =>
                                (function (t, e) {
                                    return !(!e || t === e) && "Passwords should match";
                                })(t, e.value),
                        },
                    ]),
                        this.setState({ processing: !0, error: null }),
                        this.props.route.isRecover)
                ) {
                    const t = this.props.query.key || "",
                        s = await (async function (t, e) {
                            const s = new FormData();
                            s.append("key", t), s.append("password", e);
                            const n = await fetch("/a/ra/person/recoverPassword.json", {
                                method: "post",
                                credentials: "include",
                                body: s,
                            });
                            return await zi(n), Bi(n), n.json();
                        })(t, e.value);
                    this.props.dispatch("user/recoverPassword", s);
                } else {
                    const t = await (async function (t) {
                        const e = { password: t },
                            s = await Mi("/auth/change", e);
                        return await zi(s), Bi(s), Ko(await s.json());
                    })(e.value);
                    this.props.dispatch("user/changePassword", t);
                }
                this.setState({ processing: !1, error: null, next: !0 });
            } catch (t) {
                this.setState({ processing: !1, error: t });
            }
        };
    }
    render() {
        dr(this.props);
        const t = a(
            Oc,
            { key: "form", className: "ol1u6 Cxq2a7" },
            a(
                "h4",
                { className: "ol1gf Cxq1pl" },
                "Please enter your new password."
            ),
            a(
                "form",
                { noValidate: !0, onSubmit: this.handleSubmit, action: "" },
                a(po, { error: this.state.error }),
                a(mo, {
                    type: "password",
                    label: "New password",
                    name: "password",
                    ref: this.password,
                    error: this.state.error,
                    autocomplete: "new-password",
                }),
                a(mo, {
                    type: "password",
                    label: "Once again",
                    name: "passwordAgain",
                    ref: this.passwordAgain,
                    error: this.state.error,
                    autocomplete: "new-password",
                }),
                a(
                    "div",
                    { className: "ol10l Cxq18v" },
                    a(ro, { title: "Save", processing: this.state.processing }),
                    a(
                        Un,
                        {
                            to: this.props.route.isRecover ? "/" : "/a/wa/account",
                            className: j.buttonLinkFloat,
                        },
                        "Cancel"
                    )
                )
            )
        ),
            e = a(
                Oc,
                { key: "done", className: "ol1u6 Cxq2a7" },
                a(
                    "h4",
                    { className: "ol1gf Cxq1pl" },
                    "Your password has been changed."
                ),
                a(jc, { href: "/a/wa/account" })
            ),
            s = this.state.next ? e : t,
            n = this.props.route.isRecover ? "Recover Password" : "Change Password",
            i = this.props.route.isRecover ? "recoverPassword" : "account-password";
        return a(ec, { id: i, title: n }, a(M, null, s));
    }
}
var gd = k(md, "user"),
    fd = {
        exitActive: "Bhege",
        enterActive: "Bhe1s1",
        exit: "Bhe1rx",
        enter: "Bhe2lk",
    };
const yd = [
    {
        w: "I would definitely recommend Songsterr Plus to everybody who learn playing guitar. It’s simple and user-friendly way to play songs you like, no matter what is your level.",
        a: "Kevin Wimer",
        s: "jamplay.com",
    },
    {
        w: "Songsterr Plus ROCKS. Great features and great sound, and totally web-based. I love the looping feature. Plenty of songs available, too: I did a random search for several songs and found accurate versions of all of them.",
        a: "Rob Hampton",
        s: "heartwoodguitar.com",
    },
    {
        w: "With Songsterr Plus our students learn songs faster and practice more frequently. Thank you, on the behalf of our in-home lesson community. You guys are Teriffic!",
        a: "Winston McFarlane",
        s: "VisionMusicLive.com",
    },
    {
        w: "With Songsterr Plus learning to play guitar has never been so simple, or so enjoyable.",
        a: "Anze Sustar",
        s: "YourChords.com",
    },
    {
        w: "Most people start learning guitar for the only reason – to play their favorite songs. Songsterr Plus is a great way to learn a lot of new songs both for beginners and skilled guitarists.",
        a: "Paul Hackett",
        s: "guitarnoise.com",
    },
],
    vd = (t, e, s) =>
        a(
            "tr",
            null,
            a("td", null),
            a(
                "td",
                { className: "B022o" },
                a("em", { className: "B02e1" }, t),
                a("img", {
                    src: "/static/media/i-sign.4cd70bd5.svg",
                    className: "B098",
                }),
                a("div", { className: "B011h" }, e)
            ),
            a("td", { className: s ? "" : "B01j5" }, s ? "YES" : "NO"),
            a("td", null, "YES")
        );
class bd extends c {
    constructor(t) {
        super(t),
            bd.prototype.__init.call(this),
            bd.prototype.__init2.call(this),
            (this.state = { counter: 0, transition: "left" });
    }
    __init() {
        this.handlePrevNote = pe(
            () =>
                this.setState(t => ({
                    counter: 0 === t.counter ? yd.length - 1 : t.counter - 1,
                    transition: "left",
                })),
            400
        );
    }
    __init2() {
        this.handleNextNote = pe(
            () =>
                this.setState(t => ({
                    counter: t.counter === yd.length - 1 ? 0 : t.counter + 1,
                    transition: "right",
                })),
            400
        );
    }
    render() {
        dr(this.props),
            this.props.user.isLoggedIn && nd(),
            o(() => {
                i("curiosity/conversion", { event: "Opened Plus panel" });
                const t = setTimeout(() => {
                    i("curiosity/event", {
                        event: "Stayed 10 seconds on the Plus panel",
                    });
                }, 1e4);
                return () => clearTimeout(t);
            }, []);
        const t = yd[this.state.counter],
            e = this.props.user.isLoggedIn
                ? "/a/wa/account"
                : "/a/wa/signin?next=account",
            { isTablet: s, os: n } = this.props.device,
            { dispatch: i } = C(),
            r = m(() => {
                i("demo/activate");
            }, [i]),
            l = m(() => {
                i("curiosity/conversion", {
                    event: "Clicked subscribe link on the Plus panel",
                });
            }, [i]);
        return a(
            ec,
            { title: "Songsterr Plus", id: "plus", styles: Nc },
            a(
                "section",
                { className: "ol1u6 B02mx", "data-section": "plus" },
                a(
                    "h4",
                    { className: "ol1gf B01s8" },
                    "Sign-up takes less than a minute. Safe & Secure."
                ),
                a(
                    "div",
                    { className: "B0221" },
                    a(
                        "table",
                        { className: "B034j" },
                        a(
                            "thead",
                            null,
                            a(
                                "tr",
                                null,
                                a("th", null),
                                a("th", null),
                                a("th", null, "FREE"),
                                a("th", null, "PLUS")
                            )
                        ),
                        a(
                            "tbody",
                            null,
                            vd(
                                "Playback",
                                "A key feature of Songsterr Tab Player. Allows you to playback tabs with a realistic guitar engine.",
                                !0
                            ),
                            vd(
                                "Print",
                                a(
                                    "span",
                                    null,
                                    "High quality, high contrast printing of tabs. You can print either the whole tab or just the selected page. Here is a ",
                                    a(
                                        "a",
                                        {
                                            href: "/static/media/printoutSample.d7437358.pdf",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        },
                                        "sample printout"
                                    ),
                                    "."
                                )
                            ),
                            vd(
                                "Tempo Control",
                                "Adjust playback speed without changing pitch. Indispensable feature for learning complicated parts of the song."
                            ),
                            vd(
                                "Loop",
                                "Allows you to playback the selected measures over and over again. Looping can be very helpful for training when you're learning a particular part of the song."
                            ),
                            vd(
                                "Mute",
                                "Silences the current track. Mute your instrument and play along with the rest of the band."
                            ),
                            vd(
                                "Solo",
                                "Makes the selected track audible, and silences all the other tracks. Use this to learn your part of the song."
                            ),
                            vd(
                                "Pitch Shift",
                                "Allows you to change the sound pitch to match your guitar tuning."
                            ),
                            vd(
                                "Ad Free",
                                "Removes all the ads from the site. Gives more screen real estate for the player on the song page."
                            ),
                            vd(
                                "Mobile App",
                                "Get our mobile apps free of charge. Simply sign in to your Songsterr Account."
                            )
                        ),
                        a(
                            "tfoot",
                            null,
                            a(
                                "tr",
                                null,
                                a("td", null),
                                a("td", null, "PRICE"),
                                a("td", null, "FREE"),
                                a("td", null, "$9.90/month")
                            )
                        )
                    ),
                    a(
                        "aside",
                        { className: "B073" },
                        a(
                            Un,
                            {
                                to: this.props.user.isLoggedIn
                                    ? "/a/wa/plus/payment"
                                    : "/a/wa/signin?next=subscribe",
                                onClick: l,
                                id: "CTA-side",
                                className: "Cpb24q Cpb2zn Cpbjz B01ob",
                            },
                            "Subscribe to Plus",
                            a("span", null, " for $9.90/month")
                        ),
                        a(
                            Un,
                            {
                                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                                onClick: r,
                                id: "demo",
                                "data-action": "demosong",
                                className: "Cpb24q Cpb2zn Cpb1m5 B0oh",
                            },
                            "Demo Song",
                            a("span", null, "all features enabled")
                        ),
                        s &&
                        a(
                            ai,
                            {
                                source: "plus",
                                attrs: { id: "Plus-store", className: "B01yc" },
                            },
                            Fn(n)
                                ? a("img", {
                                    src: li,
                                    width: 145,
                                    height: 42.59375,
                                    alt: "Google Play",
                                })
                                : a("img", {
                                    src: ri,
                                    width: 145,
                                    height: 48.03125,
                                    alt: "AppStore",
                                })
                        )
                    )
                )
            ),
            a(
                "section",
                { className: "ol1u6 B0136", "data-section": "words" },
                a(
                    "div",
                    { className: "B01p9" },
                    a("img", {
                        src: "/static/media/plus-guitars.83a60d47.svg",
                        width: 175,
                        height: 261,
                        alt: "Guitars",
                    })
                ),
                a(
                    "div",
                    { className: "B01j2" },
                    a("span", { className: "B01h6" }, "Hundreds of thousands"),
                    " of guitarists worldwide have used Songsterr Plus to learn over 100,000 songs & 500,000 tabs by 40,000 artists!"
                ),
                a(
                    "div",
                    { className: "B01q9" },
                    a(
                        "div",
                        { className: "B02ng" },
                        a(
                            "div",
                            { className: "B0el" },
                            "Check out what guitar experts say about Songsterr Plus."
                        ),
                        a(
                            M,
                            { component: "div", className: "B01v" },
                            a(
                                O,
                                { animationStyles: fd, key: t.a },
                                a(
                                    "div",
                                    { className: "B0a2" },
                                    t.w,
                                    a("br", null),
                                    t.a,
                                    " ",
                                    a("a", { className: "B02d8", href: "http://" + t.s }, t.s)
                                )
                            )
                        )
                    ),
                    a("div", { className: "B02l6" }),
                    a(
                        "div",
                        { className: "B01pm" },
                        a(
                            "button",
                            {
                                className: "Cpb24q Cpb2j Cpb24q Cpb13f B0295",
                                onClick: this.handlePrevNote,
                            },
                            "Prev"
                        ),
                        a(
                            "button",
                            {
                                className: "Cpb24q Cpb2j Cpb24q Cpb13f B0295",
                                onClick: this.handleNextNote,
                            },
                            "Next"
                        )
                    )
                )
            ),
            a(
                "section",
                { className: "ol1u6 B01q3", "data-section": "info" },
                a(
                    "div",
                    { className: "B01fd" },
                    a(
                        "article",
                        { className: "B02kp" },
                        a("h3", { className: "B01o4" }, "Is this a long-term commitment?"),
                        a(
                            "p",
                            { className: "B017w" },
                            "No. It's a pay-as-you-go service. You can cancel any time with one click on your ",
                            a(Un, { to: e, "data-action": "account" }, "account page"),
                            ". If you cancel, you'll be able to use paid features until the end of the paid month (30 days since your last payment)."
                        )
                    ),
                    a(
                        "article",
                        { className: "B02kp B02bl" },
                        a(
                            "h3",
                            { className: "B01o4" },
                            "What payment types do you accept?"
                        ),
                        a(
                            "p",
                            { className: "B017w" },
                            "Currently, we accept PayPal, Visa, MasterCard, Discover, American Express and JCB. At this time we only accept payments online so we will not be able to accept a P.O., invoice you, or take an order over the phone."
                        )
                    ),
                    a(
                        "article",
                        { className: "B02kp" },
                        a("h3", { className: "B01o4" }, "Are there any hidden charges?"),
                        a(
                            "p",
                            { className: "B017w" },
                            "There are no hidden charges. Monthly price gives you access to paid features of all the tabs on Songsterr. We are confident that you'll enjoy your subscription and we'll give you a 100% \"no questions asked\" refund otherwise."
                        )
                    )
                )
            ),
            a(
                "section",
                { className: "ol1u6 B0lt", "data-section": "footer" },
                a(
                    Un,
                    {
                        to: this.props.user.isLoggedIn
                            ? "/a/wa/plus/payment"
                            : "/a/wa/signin?next=subscribe",
                        onClick: l,
                        id: "CTA-footer",
                        className: "Cpb24q Cpb318 B0lr",
                    },
                    "Subscribe to Plus",
                    a("span", null, " for $9.90/month")
                )
            )
        );
    }
}
var wd = k(bd, "user", "device", "experiments");
const xd = () =>
    a(
        "div",
        { className: "o21v0", "data-section": "secured" },
        a("img", { src: "/static/media/ssllock.c5d6947c.svg", alt: "Secured" }),
        a("span", { className: "o22e4" }, "HTTPS/SSL"),
        a(
            "div",
            { className: "o216d" },
            "Secured by ",
            a(
                "a",
                {
                    className: "o235l",
                    href: "https://www.braintreegateway.com/merchants/xdmf4zdb54vjr7hj/verified",
                    rel: "noopener noreferrer",
                    target: "_blank",
                },
                "Braintree"
            )
        )
    ),
    Sd = {
        enter: "B7i20k",
        enterActive: "B7i80",
        exit: "B7i17n",
        exitActive: "B7i8e",
    },
    Cd = a(
        "div",
        null,
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ",
        "Please contact ",
        a(
            "a",
            { href: "mailto:support@songsterr.com", "data-action": "support" },
            "support@songsterr.com"
        ),
        " if you think we made a mistake."
    ),
    kd = a(
        "div",
        null,
        "Verification of your Songsterr Account email failed. Please double check it, ",
        a(Un, { to: "/a/wa/account", "data-action": "account" }, "change it"),
        " if necessary and then try to pay again. If this doesn't help, please contact ",
        a(
            "a",
            { href: "mailto:support@songsterr.com", "data-action": "support" },
            "support@songsterr.com"
        ),
        " using your mail, website or app."
    ),
    Nd = a(
        "div",
        null,
        "reCAPTCHA validation failed. If you are not a robot, please contact ",
        a(
            "a",
            {
                href: "mailto:support@songsterr.com?subject=reCAPTCHA Validation Failed",
                "data-action": "support",
            },
            "support@songsterr.com"
        ),
        " using your mail, website or app."
    );
function Ld({ error: t }) {
    return a(
        M,
        null,
        t &&
        a(
            O,
            { animationStyles: Sd, timeout: 300 },
            a(
                "div",
                {
                    className: "Ced10e",
                    key: "error",
                    role: "alert",
                    "aria-label": "form",
                },
                !t.isFraud && !t.isRejected && !t.isRecaptcha && t.message,
                t.isFraud && kd,
                t.isRejected && Cd,
                t.isRecaptcha && Nd
            )
        )
    );
}
const Td = t => {
    nd();
    const { mode: e, submitButton: n, cancelLink: i } = t,
        { dispatch: r, payment: l } = C("payment"),
        [c, d] = s(null),
        [u, h] = s(null),
        [p, f] = s(!1),
        y = g(),
        v = m(async () => {
            try {
                f(!0), h(null);
                const {
                    type: s,
                    nonce: n,
                    deviceData: i,
                } = await c.requestPaymentMethod(),
                    { subscription: o } = await (async function (t, e, s) {
                        const n = "/auth/billing/".concat(s),
                            i = { "X-Recaptcha-Token": await Fc(s) },
                            o = { nonce: t, deviceData: e },
                            a = await Mi(n, o, i);
                        return (
                            (function (t) {
                                if (403 === t.status) throw new Ei();
                            })(a),
                            await Ri(a),
                            await zi(a),
                            await ji(a),
                            Bi(a),
                            Ko(await a.json())
                        );
                    })(n, i, e);
                r("user/subscribePlus", {
                    mode: e,
                    subscription: o,
                    paymentType: "PayPalAccount" === s ? "PayPal" : "Card",
                }),
                    t.toggleNext();
            } catch (t) {
                await c.clearSelectedPaymentMethod(),
                    r("curiosity/error", { error: "Subscription", message: t.message });
                const s = ((t, e) => {
                    const { name: s, message: n } = t,
                        i = "FraudError" === s,
                        o = n.toLowerCase().includes("recaptcha"),
                        a =
                            n.includes("risk_threshold") ||
                            n.includes("fraud") ||
                            n.includes("suspicious");
                    if ("DropinError" === s) {
                        let e = "Please fix the errors and try again.";
                        const s = (t._braintreeWebError && t._braintreeWebError.code) || !1;
                        return (
                            "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED" === s &&
                            (e = "CVV did not pass verification."),
                            "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR" === s &&
                            (e = "Network error occurred. Please try again later."),
                            { message: e, isFraud: i, isRejected: a, isRecaptcha: o }
                        );
                    }
                    return "ValidationError" === s && n.includes("cvv")
                        ? {
                            message: "CVV did not pass verification.",
                            isFraud: i,
                            isRejected: a,
                            isRecaptcha: o,
                        }
                        : "SubscriptionError" === s
                            ? { message: n, isFraud: i, isRejected: a, isRecaptcha: o }
                            : i
                                ? {
                                    message: "Email verification failed.",
                                    isFraud: i,
                                    isRejected: a,
                                    isRecaptcha: o,
                                }
                                : {
                                    message:
                                        "subscribe" === e
                                            ? "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction."
                                            : 'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.',
                                    isFraud: i,
                                    isRejected: a,
                                    isRecaptcha: o,
                                };
                })(t, e);
                (s.isRejected || s.isFraud) && r("curiosity/fraud"), h(s), f(!1);
            }
        }, [c]);
    o(async () => {
        const { ready: t, token: e, module: s } = l.dropin;
        if (!c && t)
            try {
                const t = await s.getInstance({
                    authorization: e,
                    container: y.current,
                });
                d(t);
            } catch (t) {
                h(t);
            }
        return (
            c &&
            c.on("paymentMethodRequestable", async t => {
                t.paymentMethodIsSelected &&
                    "PayPalAccount" === t.type &&
                    (await v());
            }),
            () => {
                c && c.teardown();
            }
        );
    }, [l, c, v]);
    const b = m(
        async t => {
            t.preventDefault(), await v();
        },
        [c, v]
    ),
        w = a(
            "div",
            { className: "D4i1bb" },
            a(ro, { id: n.id, title: n.name, isDisabled: !c || p, processing: p }),
            i &&
            a(
                Un,
                { to: i.link, className: j.buttonLink, "data-action": "cancel" },
                "Cancel"
            )
        );
    return a(
        "form",
        { noValidate: !0, onSubmit: b },
        a(Ld, { error: u }),
        a("div", { className: "D4i202", ref: y }),
        a("div", { className: "D4ih8" }, w, a(xd, null))
    );
};
var Id = { panel: "Cdy7e Bebfs" };
class _d extends c {
    constructor(t) {
        super(t),
            _d.prototype.__init.call(this),
            _d.prototype.__init2.call(this),
            (this.state = { next: !1 });
    }
    __init() {
        this.componentDidMount = () => {
            this.props.dispatch("curiosity/conversion", {
                event: "Opened payment page",
            });
        };
    }
    __init2() {
        this.toggleNext = () => {
            this.setState({ next: !0 });
        };
    }
    render() {
        dr(this.props), zc();
        const t = a(
            Oc,
            { key: "payment", className: "ol1u6 C0z2s0", "data-section": "form" },
            a(
                "h4",
                { className: "ol1gf C0z35c" },
                "Thanks for subscribing. Your hard earned money goes towards making Songsterr an even better product."
            ),
            a(Td, {
                mode: "subscribe",
                toggleNext: this.toggleNext,
                submitButton: { name: "Pay", id: "pay" },
                cancelLink: { link: "/a/wa/plus" },
            }),
            a(
                "div",
                { className: "C0z26n", "data-section": "footer" },
                "Click Pay to sign up for a recurring monthly subscription. You will be immediately charged for its first month. You can cancel any time with 1 click from your ",
                a(Un, { to: "/a/wa/account" }, "account page"),
                ". After cancellation, you will stay on the paid plan until the end of your last paid month."
            )
        ),
            e = a(
                Oc,
                {
                    key: "paying-success",
                    className: "ol1u6 C0zkv",
                    "data-section": "done",
                },
                a("h4", { className: "ol1gf C0z35c" }, "Thanks for subscribing!"),
                a(jc, null)
            ),
            s = this.state.next ? e : t;
        return a(
            ec,
            { title: "Paying", id: "plus-payment", styles: Id },
            a(M, null, s)
        );
    }
}
var Ed = k(_d);
const Pd = "I'm sure, cancel my subscription";
class Ad extends c {
    constructor(t) {
        super(t),
            Ad.prototype.__init.call(this),
            Ad.prototype.__init2.call(this),
            (this.state = { error: null, processing: !1, next: !1 });
    }
    __init() {
        this.cancelSubscription = async t => {
            t.preventDefault();
            try {
                this.setState({ processing: !0, error: null });
                let t = this.props.user.profile;
                (t && t.isLegacyPayPal) ||
                    (t = await (async function () {
                        const t = await fetch("/auth/billing/cancel", {
                            method: "post",
                            credentials: "include",
                        });
                        if (500 === t.status || 403 === t.status)
                            throw new Error("You have no subscription");
                        return await zi(t), await ji(t), Bi(t), Ko(await t.json());
                    })()),
                    this.props.dispatch("user/cancelPlus", t),
                    this.setState({ processing: !1, error: null, next: !0 });
            } catch (t) {
                this.props.dispatch("curiosity/error", {
                    error: "Subscription",
                    message: t.message,
                }),
                    this.setState({ processing: !1, error: t });
            }
        };
    }
    __init2() {
        this.cancelPayPal = () => {
            this.setState({ next: !0 });
        };
    }
    render() {
        dr(this.props);
        const t = a(
            Oc,
            { key: "cancel", className: "ol1u6 Cxq2a7", "data-section": "form" },
            a(
                "h4",
                { className: "ol1gf Cxq1pl" },
                "Are you sure you want to cancel your subscription?"
            ),
            a(
                "form",
                { noValidate: !0, onSubmit: this.cancelSubscription },
                a(po, { error: this.state.error }),
                a(
                    "div",
                    { className: "ol10l Cxq18v" },
                    this.props.user.profile.isLegacyPayPal
                        ? a(
                            "a",
                            {
                                target: "_blank",
                                onClick: this.cancelPayPal,
                                href: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",
                                className: j.buttonGreen,
                                "data-action": "cancelPayPal",
                            },
                            Pd
                        )
                        : a(ro, {
                            id: "confirmCancelation",
                            title: Pd,
                            processing: this.state.processing,
                        }),
                    a(
                        Un,
                        {
                            to: "/a/wa/account",
                            className: j.buttonLink,
                            "data-action": "cancel",
                        },
                        "No, keep it"
                    )
                )
            )
        ),
            e = a(
                Oc,
                { key: "done", className: "ol1u6 Cxq2a7", "data-section": "done" },
                a(
                    "h4",
                    { className: "ol1gf Cxq1pl" },
                    this.props.user.profile.isLegacyPayPal
                        ? "Your Sonsgterr Plus subscription will remain active until you cancel it on PayPal."
                        : "Canceled, Songsterr plus will be active till the end of the last paid month."
                ),
                a(jc, { id: "doneCancelation", href: "/a/wa/account" })
            ),
            s = this.state.next ? e : t;
        return a(
            ec,
            { title: "Cancel Subscription", id: "account-subscription" },
            a(M, null, s)
        );
    }
}
var Md = k(Ad);
class Bd extends c {
    constructor(t) {
        super(t),
            Bd.prototype.__init.call(this),
            (this.state = { error: null, processing: !1, next: !1 });
    }
    __init() {
        this.deactivate = async t => {
            t.preventDefault();
            try {
                this.setState({ error: null, processing: !0 }),
                    await (async function () {
                        await (async function () {
                            const t = await fetch("/auth/deactivate", {
                                method: "post",
                                credentials: "include",
                            });
                            if (403 === t.status)
                                throw new Error("You already signed out. Please refresh page");
                            return Bi(t), t.text();
                        })();
                        try {
                            await Kc();
                            const t = window.gapi;
                            t.auth2.getAuthInstance().isSignedIn.get() &&
                                t.auth2.getAuthInstance().currentUser.get().disconnect();
                        } catch (t) { }
                    })(),
                    this.props.dispatch("user/deactivate"),
                    this.setState({ processing: !1, error: null, next: !0 });
            } catch (t) {
                this.setState({ processing: !1, error: Jc(t) });
            }
        };
    }
    render() {
        dr(this.props);
        const t = a(
            Oc,
            {
                key: "deactivate",
                className: "ol1u6 Cxq2a7",
                "data-section": "form",
            },
            a(
                "h4",
                { className: "ol1gf Cxq1pl" },
                "Are you sure you want to permanently deactivate you account? You will loose all your user data."
            ),
            a(
                "form",
                { noValidate: !0, onSubmit: this.deactivate },
                a(po, { error: this.state.error }),
                a(
                    "div",
                    { className: "ol10l Cxq18v" },
                    a(ro, {
                        title: "I'm sure, deactivate my account",
                        processing: this.state.processing,
                    }),
                    a(Un, { to: "/a/wa/account", className: j.buttonLink }, "Cancel")
                )
            )
        ),
            e = a(
                Oc,
                { key: "done", className: "ol1u6 Cxq2a7", "data-section": "done" },
                a(
                    "h4",
                    { className: "ol1gf Cxq1pl" },
                    "Your account was successfully deactivated."
                ),
                a(jc, null)
            ),
            s = this.state.next ? e : t;
        return a(
            ec,
            { title: "Deactivate account", id: "account-deactivate" },
            a(M, null, s)
        );
    }
}
var Dd = k(Bd, "user");
class Od extends c {
    constructor(t) {
        super(t), Od.prototype.__init.call(this), (this.state = { next: !1 });
    }
    __init() {
        this.toggleNext = () => {
            this.setState({ next: !0 });
        };
    }
    render() {
        dr(this.props);
        const t = a(
            Oc,
            { key: "updateCard", className: "ol1u6 Bj2v1", "data-section": "form" },
            a(Td, {
                mode: "update",
                toggleNext: this.toggleNext,
                submitButton: { name: "Update", id: "updateCard" },
                cancelLink: { link: "/a/wa/account" },
            })
        ),
            e = a(
                Oc,
                {
                    key: "paying-success",
                    className: "ol1u6 Bj2wu",
                    "data-section": "done",
                },
                a(
                    "h4",
                    { className: "ol1gf Bj210f" },
                    "Your credit card was successfully updated."
                ),
                a(jc, null)
            ),
            s = this.state.next ? e : t;
        return a(
            ec,
            { title: "Update card", id: "account-card", styles: Id },
            a(M, null, s)
        );
    }
}
var jd = k(Od);
const Rd = "/static/media/mock.09613161.svg",
    zd = {
        understandingTab: {
            icon: "/static/media/01-understanding-tab.f7b2338e.svg",
            name: "Understanding Tab",
            content: [
                [
                    {
                        text: "Guitar tab or tablature is a very popular method of notating guitar music. What makes tab so popular is that, once you get the hang of it, it is very easy to read.\n\nIn order to understand tab, you need to visualize a guitar neck as if you are playing the guitar and looking down on the neck. Tab consists of 6 horizontal lines that represent the strings of the guitar. The thickest string being the bottom most line and the thinnest string being the topmost.",
                    },
                    {
                        img: "/static/media/htrgt-1.9fe2699f.svg",
                        style: { margin: "auto" },
                    },
                    {
                        text: "Numbers are then placed on these lines to represent finger positions on the guitar fret board. If you read the diagram below you would play this on a guitar by putting your finger just behind the 2nd fret on the 5th string, then you would play the note at the 4th fret, then again on the 2nd fret. The ‘zero’ represents playing an open string. As musical notes this would read as follows B C# B A.",
                    },
                    {
                        img: "/static/media/htrgt-2.f494b03e.svg",
                        style: { margin: "auto 0 auto auto" },
                    },
                ],
            ],
        },
        chord: {
            icon: "/static/media/02-guitar-tab-chords.64c31c75.svg",
            name: "Guitar Tab Chords",
            content: [
                [
                    {
                        text: "To tab a chord the notes would be placed in a vertical line upon the horizontal ones. This diagram represents a C Chord. You would strum the bottom 5 strings of the guitar in one motion if you were to read this tab properly:",
                    },
                    {
                        img: "/static/media/guitar-chords-1.8ad933d3.svg",
                        style: { padding: 0 },
                    },
                    {
                        text: "And in this case you would strum the ‘C Chord’ three times:",
                    },
                    {
                        img: "/static/media/guitar-chords-2.5e0e6238.svg",
                        style: { padding: 0 },
                    },
                ],
            ],
        },
        hammerOn: {
            icon: "/static/media/03-hammer-on.c0ed6c3d.svg",
            name: "Hammer-On",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Hammer-on is executed by picking a note and then hammering done with the fretting hand on the second note. The second note isn’t actually picked but kind of echos the first one. Song example with this technique: ",
                    },
                    {
                        text: "Black Sabbath – Paranoid",
                        url: "/a/wsa/black-sabbath-paranoid-tab-s296t1",
                    },
                    { text: ". Hammer-ons are written in a tab like this:" },
                ],
                [{ img: "/static/media/hammer-on.61aaa908.svg" }],
            ],
        },
        pullOff: {
            icon: "/static/media/04-pull-off.bc5ba841.svg",
            name: "Pull-Off",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Pull-off is the opposite of a hammer-on, so the first note is played again then the fretting hand pulls the finger off and lets the one fretted behind it play. Song example with this technique: ",
                    },
                    {
                        text: "Metallica – Nothing Else Matters",
                        url: "/a/wsa/metallica-nothing-else-matters-tab-s439171t1",
                    },
                    { text: " (bar 5)." },
                ],
                [{ img: "/static/media/pull-off.0707e82f.svg" }],
            ],
        },
        bend: {
            icon: "/static/media/05-bends.0634c11d.svg",
            name: "Bends",
            isSmall: !0,
            content: [
                [
                    {
                        text: "This is where the fretting hand actually bends the string to give a wobbly effect. It's often used in solos. Song example with this technique: ",
                    },
                    {
                        text: "AC/DC - You Shook Me All Night Long",
                        url: "/a/wsa/ac-dc-you-shook-me-all-night-long-tab-s63275t0",
                    },
                    { text: " (bar 17)." },
                ],
                [{ img: "/static/media/bend.bb209bc8.svg" }],
            ],
        },
        releaseBend: {
            icon: "/static/media/06-release-band.81327208.svg",
            name: "Release Bend",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Release bend is just like a bend, but it tells you when to release the bend and go to the next note. Song example with this technique: ",
                    },
                    {
                        text: "Guns N’ Roses – Don’t Cry (Slash guitar solo)",
                        url: "/a/wsa/guns-n-roses-don-t-cry-tab-s125t3",
                    },
                    { text: " (bar 41)." },
                ],
                [{ img: "/static/media/release-bend.34031a53.svg" }],
            ],
        },
        slide: {
            icon: "/static/media/07-slide.b9f445d3.svg",
            name: "Slide",
            isSmall: !0,
            content: [
                [
                    {
                        text: "For a slide you start off plucking the first note and slide on the string up or down to the second. Song example with this technique: ",
                    },
                    {
                        text: "Dire Straits – Sultans of Swing",
                        url: "/a/wsa/dire-straits-sultans-of-swing-tab-s30084t1",
                    },
                    {
                        text: " (bar 5). In the tab below you would play the first note on the 10th fret then slide the finger that is holding that note up to the 8th fret (a slide-down):",
                    },
                ],
                [
                    { img: "/static/media/slide_a.08590532.svg" },
                    {
                        text: "Or here you slide your finger from the 3rd fret to the 5th without lifting your finger (a slide-up):",
                    },
                    { img: "/static/media/slide_b.965fe962.svg" },
                ],
            ],
        },
        legatoSlide: {
            icon: "/static/media/08-legato-slide.f0ce8c32.svg",
            name: "Legato Slide",
            isSmall: !0,
            content: [
                [
                    {
                        text: "The same as usual slide except the second note is not struck. Song example with this technique: ",
                    },
                    {
                        text: "Black Sabbath – Iron Man",
                        url: "/a/wsa/black-sabbath-iron-man-tab-s8t1",
                    },
                    { text: " (bar 10)." },
                ],
                [{ img: "/static/media/legato-slide.e7e2d800.svg" }],
            ],
        },
        vibrato: {
            icon: "/static/media/09-vibrato.9dd4ab03.svg",
            name: "Vibrato",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Vibrato is like a constant rhythmic bending of the string. You do a bend up and bend down quickly to create a moving sound. Song example with this technique: ",
                    },
                    {
                        text: "Jimi Hendrix – Purple Haze",
                        url: "/a/wsa/jimi-hendrix-purple-haze-tab-s310t0",
                    },
                    { text: " (bar 3)." },
                ],
                [{ img: "/static/media/vibrato.ee3998f4.svg" }],
            ],
        },
        wideVibrato: {
            icon: "/static/media/010-wide-vibrato.74e73ae1.svg",
            name: "Wide Vibrato",
            isSmall: !0,
            content: [
                [
                    {
                        text: "The pitch is varied to a greater degree by vibrating with the fretting hand. Song example with this technique: ",
                    },
                    {
                        text: "Black Label Society - In This River",
                        url: "/a/wsa/black-label-society-in-this-river-tab-s21536t3",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/wide-vibrato.f0ad4435.svg" }],
            ],
        },
        letRing: {
            icon: "/static/media/011-let-ring.753e521e.svg",
            name: "Let ring",
            isSmall: !0,
            content: [
                [
                    {
                        text: '"Let ring" marker tells you to let that note ring until the end of the dashed line. Song example with this technique: ',
                    },
                    {
                        text: "Metallica – Enter Sandman",
                        url: "/a/wsa/metallica-enter-sandman-tab-s19t1",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/let-ring.714e6589.svg" }],
            ],
        },
        palmMute: {
            icon: "/static/media/012-palm-mute.aea43c8f.svg",
            name: "Palm Mute",
            isSmall: !0,
            content: [
                [
                    {
                        text: "A palm mute effect is achieved when you take the side of your right hand (4th finger side) and lightly touch the string at the edge of the bridge. This will give the notes that you are playing a muffled sound. Song example with this technique: ",
                    },
                    {
                        text: "Green Day – Basket Case",
                        url: "/a/wsa/green-day-basket-case-tab-s1401t2",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/palm-mute.4084f271.svg" }],
            ],
        },
        ghostNote: {
            icon: "/static/media/013-gost-note.ae26f566.svg",
            name: "Ghost Note",
            isSmall: !0,
            content: [
                [
                    {
                        text: "The best description of a ghost note, is a note that is felt but not heard. You will play the note softer, and without emphasis. A ghost note can be played by fretting a note, but not picking it. Ghost notes are barely audible, but they do a lot to the feel of the music. The notation for the ghost note is round brackets. Song example with this technique: ",
                    },
                    {
                        text: "Rush – La Villa Strangiato",
                        url: "/a/wsa/rush-la-villa-strangiato-tab-s16588t3",
                    },
                    { text: " (bar 194)." },
                ],
                [{ img: "/static/media/ghost-note.1985c0f8.svg" }],
            ],
        },
        deadNote: {
            icon: "/static/media/014-dead-note.404e4602.svg",
            name: "Dead Note",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Dead note refers to muting the strings with your left hand. A dead note effect is achieved by lightly resting your left hand across the strings without actually pressing the strings against the fret. Song example with this technique: ",
                    },
                    {
                        text: "Nirvana - Smells Like Teen Spirit",
                        url: "/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t1",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/dead-note.5913848a.svg" }],
            ],
        },
        upDownStroke: {
            icon: "/static/media/015-up-down-strokes.a283b571.svg",
            name: "Up/Down Strokes",
            isSmall: !0,
            content: [
                [
                    {
                        text: "The first chord is to be played with a down stroke, the second chord is to be played with an up stroke and the third is to be played with a down stroke again. Song example with this technique: ",
                    },
                    {
                        text: "Nirvana – Where Did You Sleep Last Night",
                        url: "/a/wsa/nirvana-where-did-you-sleep-last-night-tab-s234t0",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/up-down-stroke.d0490779.svg" }],
            ],
        },
        naturalHarmonic: {
            icon: "/static/media/016-natural-harmonics.f8d2dc8d.svg",
            name: "Natural Harmonics",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Natural harmonics are notes that produce a bell like sound when you touch a string over a particular fret bar. The notation that is most commonly used is the fret that you will touch with romb sign before. Song example with this technique: ",
                    },
                    {
                        text: "Metallica - Welcome Home (Sanitarium)",
                        url: "/a/wsa/metallica-welcome-home-sanitarium-tab-s585t0",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/natural-harmonics.2b556f8f.svg" }],
            ],
        },
        polyphony: {
            icon: "/static/media/028-polyphony.f27e60a3.svg",
            name: "Polyphony",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Polyphony is a type of musical texture consisting of two or more simultaneous lines of independent melody. In the tabs, one of these lines is shown in gray with the number of the fret, the other in black. Song example: ",
                    },
                    {
                        text: "Stairway To Heaven",
                        url: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                    },
                    { text: "." },
                ],
                [{ img: "/static/media/polyphony.9f623662.svg" }],
            ],
        },
        pinchHarmonic: {
            icon: "/static/media/030-pinch-harmonic.23b276b6.svg",
            name: "Pinch Harmonic",
            isSmall: !0,
            content: [
                [
                    {
                        text: "A pinch harmonic is a guitar technique to achieve artificial harmonics in which the player’s thumb or index finger on the picking hand slightly catches the string which the player picked, silencing the fundamental frequency of the string, and letting one of the harmonics dominate. Song example with this technique: ",
                    },
                    {
                        text: "Slipknot - Duality",
                        url: "/a/wsa/slipknot-duality-tab-s18211t0",
                    },
                    { text: " (bar 23)." },
                ],
                [{ img: "/static/media/pinchHarmonic.2f90a55a.svg" }],
            ],
        },
        rhythmNotation: {
            icon: "/static/media/017-rhythm-notation.ca37e0cd.svg",
            name: "Rhythm Notation",
            content: [
                [
                    {
                        text: "Tabs do not have information on the rhythm or lengths of the notes – only on their pitch. This means you can play the same tab in different ways. Although with Songsterr you can see and hear the tab as it is being played, rhythm notation will tell you exactly when to play note and how long to hold it. We use rhythm notation which is very similar to sheet music notation (scores). The basics of rhythm notation are explained below.",
                    },
                ],
            ],
        },
        beat: {
            icon: "/static/media/027-the-beat.b3d0fe61.svg",
            name: "The Beat",
            content: [
                [
                    {
                        text: "Music is based in time. Most music has a steady, recurring pulse called the beat. It’s the steady rhythm to which you want to tap your foot or dance. Think of any music you’ve heard in a dance club and you can quickly imagine the beat of the music. The element of time in a piece of music revolves around the beat.",
                    },
                ],
            ],
        },
        bar: {
            icon: "/static/media/018-bars.463a4589.svg",
            name: "Bars",
            content: [
                [
                    {
                        text: "To help keep our place in music, beats are grouped into bars, or measures as they are also called. Bars are delineated by bar lines. In many songs four beats make up one bar. The steady pulse would be counted 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, … and so on. Beat one always marks the beginning of the bar.",
                    },
                    { img: "/static/media/bars.5eed40e5.svg", style: { padding: 0 } },
                ],
            ],
        },
        timeSignature: {
            icon: "/static/media/019-time-signature.cd0b09c6.svg",
            name: "Time Signature",
            content: [
                [
                    {
                        text: "When reading tab, we can look at the time signature. This is that fraction that happens at the beginning of each tab. The top number in the fraction stands for the number of beats in a bar (in most cases it is 4). The bottom number stands for the note value that is equal to the beat of the music. In most cases the bottom number is also 4, which indicates that the 1/4 note is the pulse of the music. In other words, 4/4 time means each bar is equal to 4 1/4 notes.",
                    },
                    {
                        img: "/static/media/time-signature.107dfc00.svg",
                        style: { padding: 0, margin: "auto" },
                    },
                ],
            ],
        },
        notesAndRests: {
            icon: "/static/media/020-notes-and-rests.c89e09ce.svg",
            name: "Notes and Rests",
            content: [
                [
                    {
                        text: "Rhythm notation is created by altering the appearance of notes to indicate the relative duration that these notes occupy within a tab. Conversely, rests describe the relative length of silence. The names of the different notes and rests are derived from their fractional value of what is considered a beat:",
                    },
                    { img: "/static/media/notesRest-1.688cf2bf.svg" },
                ],
                [
                    {
                        text: "All the basic rhythmic values are just simple fractions of the 4-beat whole note. Let's look at the rhythm notation of the tab below:",
                    },
                    {
                        img: "/static/media/notesRest-2.5661e5af.svg",
                        style: { "padding-top": 0 },
                    },
                    {
                        text: "We can see that each note has the value of quarter. Quarter notes last one beat each. You can play this tab fast or slow, but the relative duration stays the same (one note for one beat). Another example:",
                    },
                    { img: "/static/media/notesRest-3.c71fe703.svg" },
                    {
                        text: "Here you can see the pause with duration of half (two beats) and then chord D5 is played four times with duration of eighth (half of a beat)",
                    },
                ],
                [
                    {
                        text: "All rhythm values can be constructed from two rhythm values of half the duration:",
                    },
                    { img: "/static/media/notesRest-4.876fa146.svg" },
                ],
            ],
        },
        dot: {
            icon: "/static/media/021-dots.31f934b1.svg",
            name: "Dots",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Notes and rests can be attended by a small dot, appearing just to the right of the rhythmic element. This increases the duration of the note or rest by one half:",
                    },
                ],
                [{ img: "/static/media/dots.24f8ffd3.svg" }],
            ],
        },
        tie: {
            icon: "/static/media/022-ties.58e79b31.svg",
            name: "Ties",
            isSmall: !0,
            content: [
                [
                    {
                        text: "The duration of notes can also be increased by the use of ties. When tied together, the following notes are held for the duration of the second note as well. Rests are never tied together.",
                    },
                ],
                [{ img: "/static/media/ties.aa8cb53c.svg" }],
            ],
        },
        beam: {
            icon: "/static/media/023-beams.d7a856ca.svg",
            name: "Beams",
            isSmall: !0,
            content: [
                [
                    {
                        text: "It is common for smaller valued notes to be grouped together via beams. Grouped notes usually have the length of one beat. Rests are never beamed:",
                    },
                ],
                [{ img: "/static/media/beams.a6ed9567.svg" }],
            ],
        },
        triplet: {
            icon: "/static/media/024-triplets.41bcb169.svg",
            name: "Triplets",
            content: [
                [
                    {
                        text: "Generally triplet consists of three notes that will have duration of two notes of the same length when playing. In the example below notes are grouped in three's because the duration of 3 of this triplet's 1/8 notes equal the duration of only one 1/4 note (not 3/8). So basically instead of dividing the 1/4 note by 2 to get 1/8th notes, we have divided by three. In standard music notation these usually have a 3 written underneath the group.",
                    },
                    {
                        img: "/static/media/triplets.0476992f.svg",
                        style: { padding: "8px 0" },
                    },
                ],
            ],
        },
        swingRhythm: {
            icon: "/static/media/029-swing-rhythm.92e5f4be.svg",
            name: "Swing Rhythm",
            content: [
                [
                    {
                        text: "In swing rhythm the pulse is divided unequally, such that certain subdivisions (typically either eighth note or sixteenth note subdivisions) alternate between long and short durations. Check out ",
                    },
                    {
                        text: "this example",
                        url: "/a/wsa/swing-and-straight-demonstration-tab-s475779t0",
                    },
                    {
                        text: " to discover the difference between swing eighths and straight ones.",
                    },
                ],
                [
                    {
                        img: "/static/media/swingRhythm.947dca91.svg",
                        style: { padding: "8px 0" },
                    },
                ],
            ],
        },
        repeat: {
            icon: "/static/media/025-repeats.62f9d46a.svg",
            name: "Repeats",
            content: [
                [
                    {
                        text: "Repeat is one of the most confusing parts of a tab notation. When a pair of dots accompanies a double bar, it signifies that you must repeat music either from the very front of the piece or front the previous repeat symbol as follows:",
                    },
                    {
                        img: "/static/media/repeats.74bd695e.svg",
                        style: { margin: "0 auto" },
                    },
                    {
                        text: 'You should ignore repeat symbols with the dots on the right side the first time you encounter them; when you come to a repeat symbol with dots on the left side, jump back to the previous repeat symbol facing the opposite direction (if there is no previous symbol, go to the beginning of the piece). The next time you come to the repeat symbol, ignore it and keep going unless it includes instructions such as "3x" (repeat three times). See ',
                    },
                    {
                        text: "Nirvana - Smells Like Teen Spirit",
                        url: "/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t2",
                    },
                    { text: " song for example (bar 5)." },
                ],
            ],
        },
        alternateEnding: {
            icon: "/static/media/026-alternate-endings.25ed73fc.svg",
            name: "Alternate Endings",
            content: [
                [
                    {
                        text: "A section will often have a different ending after each repeat. The example below includes a first and a second ending. Play until you hit the repeat symbol, jump back to the previous repeat symbol (not shown on the picture) and play until you reach the bracketed first ending, skip the measures under the bracket and jump immediately to the second ending, and then continue. See ",
                    },
                    {
                        text: "Eric Clapton - Tears In Heaven",
                        url: "/a/wsa/eric-clapton-tears-in-heaven-tab-s4t2",
                    },
                    { text: " for example (bar 45)." },
                    {
                        img: "/static/media/alternate-endings.245eefed.svg",
                        style: { margin: "0 auto" },
                    },
                ],
            ],
        },
        accented: {
            icon: "/static/media/031-accented.e0d666d0.svg",
            name: "Accented",
            isSmall: !0,
            content: [
                [
                    {
                        text: "An accented note is an emphasis, a stronger attack placed on a particular note. Play this note louder than the others. See ",
                    },
                    {
                        text: "Metallica - Nothing Else Matters",
                        url: "/a/wsa/metallica-nothing-else-matters-tab-s439171t1",
                    },
                    { text: " for example (bars 16 – 18)." },
                ],
                [{ img: "/static/media/accented.00af3629.svg" }],
            ],
        },
        heavyAccented: {
            icon: "/static/media/032-heavily-accented.fb92c580.svg",
            name: "Heavily accented",
            isSmall: !0,
            content: [
                [
                    {
                        text: "A heavily accented note is a maximum emphasis, an even stronger attack placed on a particular note. Play this note much louder than the others. See ",
                    },
                    {
                        text: "The Rolling Stones - Paint It Black",
                        url: "/a/wsa/the-rolling-stones-paint-it-black-tab-s5t1",
                    },
                    { text: " for example (bar 20)." },
                ],
                [{ img: "/static/media/heavilyAccented.45a9cd67.svg" }],
            ],
        },
        staccato: {
            icon: "/static/media/033-staccato.6c95c03d.svg",
            name: "Staccato",
            isSmall: !0,
            content: [
                [
                    {
                        text: "Staccato indicates a very short note, independently of the note’s duration on the score. See ",
                    },
                    {
                        text: "AC/DC - Back In Black",
                        url: "/a/wsa/ac-dc-back-in-black-tab-s1024t2",
                    },
                    { text: " for example (bar 3, 4)." },
                ],
                [{ img: "/static/media/staccato.14322d11.svg" }],
            ],
        },
        tapping: {
            icon: "/static/media/034-tapping.67b1cad5.svg",
            name: "Tapping",
            isMedium: !0,
            content: [
                [
                    {
                        text: "Tapping is hitting a fret with your fingers with no previous attack on the note. See ",
                    },
                    {
                        text: "Van Halen - Eruption",
                        url: "/a/wsa/van-halen-eruption-tab-s92811t0",
                    },
                    { text: " for example (bar 33)." },
                ],
                [{ img: "/static/media/tapping.166050f4.svg" }],
            ],
        },
        tremolo: {
            icon: "/static/media/035-tremolo.384a5876.svg",
            name: "Tremolo",
            isMedium: !0,
            content: [
                [
                    {
                        text: "Tremolo occurs with quick short picks up and down. In this case, the pick pulls the string with the same force both when moving down and when moving up, the hand is as relaxed as possible to achieve high speed.",
                    },
                ],
                [{ img: "/static/media/tremolo.7ff34de1.svg" }],
            ],
        },
    };
Object.keys(zd)
    .map(t => zd[t].name)
    .join(" ");
const Fd = t => {
    !b && t.on("@init", () => ({ tabFeatures: void 0 })),
        t.on("tabFeatures/set", (t, { features: e }) => ({ tabFeatures: e })),
        t.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
};
function Hd(t, e, s) {
    return [
        a(
            "header",
            { className: "C6vnt", "data-id": e },
            a("h3", { className: "C6vbn" }, t.name),
            s && a("a", { id: e, className: "C6vnn" }, t.name)
        ),
        qd(t),
    ];
}
function qd(t) {
    const e = [];
    return (
        t.content.forEach(s => {
            const n = [];
            s.forEach(e => {
                e.img
                    ? n.push(
                        a("img", {
                            src: e.img,
                            className: "C6v1yr",
                            style: e.style,
                            alt: t.name,
                        })
                    )
                    : e.url
                        ? n.push(a(Un, { className: "C6v10s", to: e.url }, e.text))
                        : n.push(a("p", { className: "C6vmb" }, e.text));
            }),
                e.push(a("div", { className: "C6v12c" }, n));
        }),
        e
    );
}
function Ud(t, { hasIndex: e, hasPlus: s }) {
    const n = [];
    let i = 0,
        o = [],
        r = 1;
    const l = (t = 3) => {
        i &&
            (i < t &&
                (s
                    ? o.push(
                        a("img", { src: Rd, className: 2 === i ? "C6v1a8" : "C6v1xw" })
                    )
                    : o.push(
                        a(
                            Un,
                            { to: "/a/wa/plus", className: 2 === i ? "C6v1a8" : "C6v30v" },
                            a("img", {
                                src:
                                    2 === i
                                        ? "/static/media/plusSmallMock.315595c2.svg"
                                        : "/static/media/plusBigMock.828e7a22.svg",
                            })
                        )
                    )),
                n.push(
                    a("div", { className: "C6v22m", "data-section": "group-".concat(r) }, o)
                ),
                (o = []),
                (i = 0),
                r++);
    };
    let c = null;
    for (const s in t) {
        const r = t[s],
            d = r.isSmall ? 3 : r.isMedium ? 2 : 1;
        d > 1
            ? ((i >= d || d != c) && l(d), (c = d), i++, o.push(Hd(r, s, e)))
            : (l(c),
                n.push(
                    a("article", { className: "C6v1tq", "data-section": s }, Hd(r, s, e))
                ));
    }
    return l(c), n;
}
var Vd = k(
    u(function (t) {
        dr(t);
        const { isSmallScreen: e, meta: s, part: n } = t,
            { hasPlus: i } = t.user,
            o = wo(s),
            r =
                !e &&
                n.current &&
                (function (t, e) {
                    if (!t) return;
                    const s = [],
                        n = [],
                        i = [];
                    for (const o of Object.keys(e))
                        t[o] &&
                            (e[o].isSmall
                                ? i.push(o)
                                : e[o].isMedium
                                    ? n.push(o)
                                    : s.push(o));
                    return [...s, ...n, ...i].reduce((t, s) => ((t[s] = e[s]), t), {});
                })(
                    (function (t, e, s) {
                        if (!e) return !1;
                        let n = t;
                        return (
                            void 0 === n &&
                            ((n = (function (t) {
                                const e = {};
                                t.voices > 1 && (e.polyphony = !0);
                                for (const s of t.measures) {
                                    s.repeat && (e.repeat = !0),
                                        s.tripletFeel && (e.swingRhythm = !0),
                                        s.alternateEnding && (e.alternateEnding = !0);
                                    for (const t of s.voices)
                                        if (!t.rest)
                                            for (const s of t.beats) {
                                                s.letRing && (e.letRing = !0),
                                                    3 === s.tuplet && (e.triplet = !0),
                                                    s.dotted && (e.dot = !0),
                                                    (s.upStroke || s.downStroke) &&
                                                    (e.upDownStroke = !0),
                                                    s.palmMute && (e.palmMute = !0),
                                                    s.chord && (e.chord = !0),
                                                    s.wideVibrato && (e.wideVibrato = !0),
                                                    s.tapping && (e.tapping = !0);
                                                for (const t of s.notes)
                                                    t.hp && ((e.hammerOn = !0), (e.pullOff = !0)),
                                                        t.tie && (e.tie = !0),
                                                        t.bend &&
                                                        (t.bend.points[0].tone >
                                                            t.bend.points[1].tone && (e.releaseBend = !0),
                                                            (e.bend = !0)),
                                                        t.ghost && (e.ghostNote = !0),
                                                        t.dead && (e.deadNote = !0),
                                                        t.vibrato && (e.vibrato = !0),
                                                        t.rightSlide &&
                                                        ("legato" !== t.rightSlide
                                                            ? (e.legatoSlide = !0)
                                                            : (e.slide = !0)),
                                                        "natural" === t.harmonic &&
                                                        (e.naturalHarmonic = !0),
                                                        "pinch" === t.harmonic && (e.pinchHarmonic = !0),
                                                        1 === t.accentuated && (e.accented = !0),
                                                        2 === t.accentuated && (e.heavyAccented = !0),
                                                        t.staccato && (e.staccato = !0),
                                                        t.tremolo && (e.tremolo = !0);
                                            }
                                }
                                return e;
                            })(e)),
                                s("tabFeatures/set", { features: n })),
                            n
                        );
                    })(t.tabFeatures, n.current, t.dispatch),
                    zd
                );
        return a(
            ec,
            { title: "How to Read a Tab", id: "howToReadTab", styles: Nc },
            a(
                "div",
                { className: "C6v34k" },
                !e &&
                r &&
                o &&
                a(
                    "section",
                    { className: "C6v1oz" },
                    a(
                        "header",
                        { className: "C6v18r" },
                        a(
                            "h2",
                            { className: "C6v1a" },
                            "Symbols and icons in the current track:"
                        ),
                        a(
                            "span",
                            { className: "C6vsm" },
                            "".concat(o.name, " - ").concat(o.instrument)
                        )
                    ),
                    Ud(r, { hasIndex: !1, hasPlus: i })
                ),
                Mc("toc"),
                a(
                    "section",
                    { className: "C6vgk", "data-section": "toc" },
                    a("h2", { className: "C6v2ep" }, "Table of Contents"),
                    a(
                        "div",
                        { className: "C6v2eu" },
                        (function (t) {
                            const e = [];
                            for (const s in t)
                                e.push(
                                    a(
                                        "a",
                                        { className: "C6vwb", href: "#".concat(s) },
                                        a("img", { src: t[s].icon, className: "C6v2jn" }),
                                        a("span", { className: "C6v2j2" }, t[s].name)
                                    )
                                );
                            return e;
                        })(zd)
                    )
                ),
                Bc("HowToReadTabPanel", "#toc"),
                a(
                    "section",
                    { className: "C6vbz" },
                    Ud(zd, { hasIndex: !0, hasPlus: i })
                ),
                a(
                    "script",
                    { type: "application/ld+json" },
                    (function (t) {
                        let e = "";
                        return (
                            Object.keys(t).forEach(s => {
                                let n = "",
                                    i = "";
                                t[s].content
                                    .flat()
                                    .some(
                                        t => (
                                            t.text && (n += t.text), t.img && (i = wi(t.img)), t.img
                                        )
                                    ),
                                    (e += '{\n      "@type": "HowToStep",\n      "url": "'
                                        .concat(
                                            wi("/a/wa/howtoreadtab#".concat(s)),
                                            '",\n      "name": "'
                                        )
                                        .concat(
                                            t[s].name,
                                            '",\n      "image": {\n        "@type": "ImageObject",\n        "url": "'
                                        )
                                        .concat(
                                            i || wi(Rd),
                                            '"\n      },\n      "itemListElement": [{\n        "@type": "HowToDirection",\n        "text": "'
                                        )
                                        .concat(n.replace(/"/g, '\\"'), '"\n      }]\n    },'));
                            }),
                            '{\n    "@context": "http://schema.org",\n    "@type": "HowTo",\n    "name": "How to Read a Tab",\n    "description": "A complete list of musical techniques for reading tablature",\n    "totalTime": "PT15M",\n        "tool": [\n      {\n        "@type": "HowToTool",\n        "name": "music instrument"\n      }, {\n        "@type": "HowToTool",\n        "name": "tabulature"\n      }\n    ],\n    "step": ['.concat(
                                e.slice(0, -1),
                                "]\n  }"
                            )
                        );
                    })(zd)
                )
            )
        );
    }),
    "part",
    "meta",
    "user"
);
function Gd({ width: t, height: e, styles: { icon: s, stroke: n } }) {
    return a(
        "svg",
        { width: t || 29, height: e || 27, viewBox: "0 0 29 27", className: s },
        a("path", {
            d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
        }),
        a("path", {
            className: n,
            "stroke-width": 2,
            d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
        })
    );
}
function Xd({ width: t, height: e, styles: { icon: s } }) {
    return a(
        "svg",
        { width: t || 29, height: e || 27, viewBox: "0 0 29 27", className: s },
        a("path", {
            d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
        })
    );
}
var Wd = {
    pane: "Beb2d7",
    divider: "Beb2lf",
    dividerTop: "Beb3q",
    float: "Beb1b1",
    icon: "Beb10p",
    item: "Beb2qb",
    logo: "Beb1do",
    text: "Beb1j5",
    stroke: "Beb33b",
    itemActive: "Beb2qb Beb1cn",
    logoText: "Beb11f",
    overlay: "Beb27t",
    sidebar: "Beb24i",
    jobs: "Beb27l",
    new: "Beb21q",
    strokeTeachers: "Beb33b Beb2k4",
},
    Yd = {
        exitActive: "ixbp",
        enterActive: "ix299",
        enter: "ix159",
        exit: "ix2qb",
    },
    Zd = {
        exitActive: "Btos5",
        enterActive: "Bto2jw",
        enter: "Bto2az",
        exit: "Bto32v",
    };
const Kd = {
    signin: ["signup", "forgotpassword"],
    account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
    plus: ["subscribePlus"],
};
function Qd({
    id: t,
    route: s,
    url: n,
    songUrl: i,
    children: o,
    linkClick: r,
}) {
    const l = e(x),
        c = t === s.page || (t in Kd && -1 !== Kd[t].indexOf(s.page)),
        d = t === s.page ? i : n,
        u = m(
            t => {
                t.preventDefault(), r && r(c), l.dispatch("navigate", d);
            },
            [d]
        );
    return a(
        "a",
        {
            href: d,
            onClick: u,
            id: "menu-".concat(t),
            class: c ? Wd.itemActive : Wd.item,
        },
        o
    );
}
function Jd(t) {
    const { songs: e } = C("songs");
    return a(
        Qd,
        Object.assign({}, t, {
            url: "".concat(t.url).concat(or(e.pattern, e.filters)),
        })
    );
}
function $d(t) {
    const { favorites: e } = C("favorites");
    return a(
        Qd,
        Object.assign({}, t, {
            url: "".concat(t.url).concat(or(e.pattern, e.filters)),
        })
    );
}
function tu(t) {
    t.preventDefault();
}
const eu = {
    search: oc,
    favorites: vc,
    artist: kc,
    plus: wd,
    submit: Sc,
    about: class extends c {
        render() {
            return (
                dr(this.props),
                a(
                    ec,
                    { title: "About", id: "about", styles: Nc },
                    a(
                        "div",
                        { className: "B2r2uc" },
                        a(
                            "div",
                            { className: "B2r322" },
                            a(
                                "p",
                                null,
                                "Songsterr is an ",
                                a("strong", null, "archive of guitar, bass and drum tabs"),
                                ". It is collaboratively built and maintained by your fellow music lovers. Anyone with Internet access can contribute new tabs and make changes to existing ones. Much like ",
                                a(
                                    "a",
                                    {
                                        href: "http://www.wikipedia.org/",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                    },
                                    "Wikipedia"
                                ),
                                ", contributions cannot damage Songsterr because the software allows easy reversal of mistakes and experienced editors are watching to help and ensure that edits are cumulative improvements."
                            ),
                            a(
                                "p",
                                null,
                                "Songsterr is also an ",
                                a("strong", null, "online tab player"),
                                " which makes learning tabs easier. It accompanies each tab with a song audio and automatically scrolls through each tab, indicating exactly which note is being played."
                            )
                        ),
                        a(
                            "div",
                            { className: "B2r2nh" },
                            a(
                                "p",
                                null,
                                a(Un, { to: "/a/wa/plus" }, "Paid plan"),
                                " unlocks advanced player features, including Print, Tempo Control, Loop and more."
                            ),
                            a(
                                "p",
                                null,
                                "Finally, Songsterr has a ",
                                a(
                                    "strong",
                                    null,
                                    "mobile app for ",
                                    a(ai, { source: "about", os: "iOS" }, "iOS"),
                                    " and ",
                                    a(ai, { source: "about", os: "Android" }, "Android")
                                ),
                                " with instant access to realistic playback of 100,000 songs (500,000 tab tracks) from Songsterr.com. With the Songsterr app you no longer need to download tabs from third-party sites or upload them from your computer to your device."
                            ),
                            a(
                                "p",
                                null,
                                "Songsterr is ",
                                a("strong", null, "100% legal"),
                                ". Support by paid users is the only thing that keeps the site alive by allowing us to pay royalties to music creators."
                            ),
                            a(
                                "p",
                                null,
                                a(Un, { to: "/a/wa/help#contact-us" }, "Contact us"),
                                " if you have any questions."
                            ),
                            a(
                                "div",
                                { className: "B2r1xp" },
                                a("img", {
                                    src: Pc,
                                    width: 182,
                                    height: 53,
                                    alt: "Songsterr",
                                })
                            )
                        ),
                        a(
                            "div",
                            { className: "B2rf3" },
                            a(
                                "div",
                                { className: "B2r110" },
                                a(
                                    ai,
                                    { source: "about", os: "iOS" },
                                    a("img", {
                                        src: ri,
                                        width: 160,
                                        height: 53,
                                        alt: "AppStore",
                                    })
                                ),
                                a(
                                    ai,
                                    { source: "about", os: "Android" },
                                    a("img", {
                                        src: li,
                                        width: 180.425532,
                                        height: 53,
                                        alt: "Google Play",
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    },
    jobs: function (t) {
        return (
            dr(t),
            a(
                ec,
                { title: "Работа в Songsterr", id: "jobs", styles: Nc },
                a(
                    "div",
                    { className: "ry96" },
                    a(
                        "div",
                        { className: "ry2am" },
                        a(
                            "p",
                            null,
                            "Одиннадцать лет назад мы поставили цель — дать людям действительно эффективный способ разучивания любимых песен. Мы с нуля создали ",
                            a(Un, { to: "/a/wa/about" }, "продукт"),
                            ", которым сегодня пользуются миллионы людей по всему миру. Наши ",
                            a(ai, { source: "jobs", os: "iOS" }, "iOS"),
                            " и ",
                            a(ai, { source: "jobs", os: "Android" }, "Android"),
                            " приложения стабильно держатся в топе лучших приложений App Store и Google Play. О нас писали Techcrunch, Mashable, Lifehacker и The Wall Street Journal."
                        ),
                        a(
                            "p",
                            null,
                            "Если вы хотите работать в нашей команде, то пишите на ",
                            a("a", { href: "mailto:hq@songsterr.com" }, "hq@songsterr.com"),
                            ". Нам нужны ",
                            a(
                                "b",
                                {},
                                "iOS, Android и JavaScript разработчики уровня Senior"
                            ),
                            ". Ждем резюме и примеры кода. Также ищем ",
                            a("b", {}, "тестировщиков и SEO-специалистов"),
                            " для проектов с частичной занятостью."
                        )
                    ),
                    a(
                        "div",
                        { className: "ry1re" },
                        a("h3", { className: "ry1rc" }, "Причины работать с нами"),
                        a(
                            "ul",
                            { className: "ry1fq" },
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a("strong", null, "Удаленная работа с гибким графиком."),
                                    " Нам важен только результат."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a(
                                        "strong",
                                        null,
                                        "Оплачиваемый испытательный срок с частичной занятостью."
                                    ),
                                    " Вы меняете работу, только если вам действительно у нас понравится. Никаких рисков."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a(
                                        "strong",
                                        null,
                                        "Маленькая команда с плоской структурой."
                                    ),
                                    " Ваш вклад будет огромным."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a(
                                        "strong",
                                        null,
                                        "Ставка на рискованные инновационные идеи."
                                    ),
                                    " Мы пытаемся в корне изменить подходы к обучению музыке."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a("strong", null, "Стабильность."),
                                    " Мы уже одиннадцать лет на рынке, уверенно прибыльны и растем."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a("strong", null, "Уникальная атмосфера."),
                                    " Культурная совместимость для нас важна не меньше, чем продуктивность."
                                )
                            ),
                            a(
                                "li",
                                null,
                                a(
                                    "span",
                                    null,
                                    a("strong", null, "Достойная компенсация."),
                                    " Мы предлагаем опцион, оплачиваем технику, поездки на конференции и занятия спортом."
                                )
                            )
                        )
                    ),
                    a(
                        "div",
                        { className: "ry1u6" },
                        a("img", { src: Pc, width: 182, height: 53, alt: "Songsterr" })
                    )
                )
            )
        );
    },
    help: Wc,
    signin: td,
    signup: sd,
    recoverpassword: gd,
    changepassword: gd,
    forgotpassword: pd,
    account: ud,
    cancelPlus: Md,
    deactivate: Dd,
    updateCard: jd,
    subscribePlus: Ed,
    howToReadTab: Vd,
    privacy: Ec,
    terms: Ec,
    dnsmpd: Ec,
},
    su = u(({ isSmallScreen: t, songUrl: e }) => {
        const {
            device: s,
            user: n,
            route: r,
            query: l,
            dispatch: c,
        } = C("device", "user", "route", "query"),
            { isPanel: d, page: u } = r;
        s.isDesktop &&
            o(
                () =>
                    (function (t) {
                        if (!document.body) return;
                        const e = window.innerWidth - document.body.clientWidth,
                            s = t ? "0px" : "".concat(e, "px");
                        document.body.style.overflow = t ? "inherit" : "hidden";
                        const n = document.getElementById("app");
                        n && (n.style.marginRight = s);
                        const i = document.getElementById("controls");
                        i && (i.style.marginRight = s);
                        const o = document.getElementById("fullscreen-controls");
                        o && (o.style.marginRight = s);
                        const a = document.getElementById("showroom");
                        a && (a.style.paddingRight = s);
                        const r = document.documentElement;
                        r && r.style.setProperty("--page-overflow-gap", s);
                    })(!d),
                [d]
            ),
            b &&
            i(
                () =>
                    (function (t, e) {
                        document.body &&
                            (t && Rc.includes(e)
                                ? (document.body.classList.add("grecaptcha-visible"), zc())
                                : document.body.classList.remove("grecaptcha-visible"));
                    })(d, u),
                [d, u]
            );
        const { isDesktop: h } = s,
            p = ["ru", "ru-mo", "be", "uk"].some(t => -1 !== s.languages.indexOf(t)),
            { hasPlus: m, isLoggedIn: g, profile: f } = n;
        return a(
            "div",
            { className: Wd.pane },
            !t &&
            a(
                "nav",
                { className: Wd.float, id: "tablist" },
                a(
                    Un,
                    { to: "/", id: "logo", className: Wd.logo, title: "Songsterr" },
                    a("img", {
                        src: "/static/media/main.866931f6.svg",
                        width: 30,
                        height: 36,
                        alt: "Songsterr",
                    }),
                    a("img", {
                        src: "/static/media/text.9cfe6bcf.svg",
                        width: 62,
                        height: 12,
                        alt: "Songsterr",
                    })
                ),
                a("div", { className: Wd.dividerTop }),
                a(
                    Jd,
                    { id: "search", route: r, url: "/", songUrl: e },
                    a(Ql, { styles: Wd }),
                    a("div", { className: Wd.text }, "Songs")
                ),
                a(
                    $d,
                    { id: "favorites", route: r, url: "/a/wa/favorites", songUrl: e },
                    a(Fo, { styles: Wd }),
                    a("div", { className: Wd.text }, "Favorites")
                ),
                h &&
                a(
                    Qd,
                    { id: "submit", route: r, url: "/a/wa/submit", songUrl: e },
                    a(Gd, { styles: Wd }),
                    a("div", { className: Wd.text }, "Submit Tab")
                ),
                a("div", { className: Wd.divider }),
                !m &&
                a(
                    Qd,
                    {
                        id: "plus",
                        route: r,
                        url: "/a/wa/plus",
                        songUrl: e,
                        linkClick: t => {
                            !t &&
                                c("curiosity/setConversionProps", {
                                    "Last referring link": "Sidebar Button",
                                });
                        },
                    },
                    a(Xd, { styles: Wd }),
                    a("div", { className: Wd.text }, "Songsterr Plus")
                ),
                a(
                    Qd,
                    { id: "help", route: r, url: "/a/wa/help", songUrl: e },
                    a(sl, { styles: Wd }),
                    a("div", { className: Wd.text }, "Questions?")
                ),
                a("div", { className: Wd.divider }),
                !g &&
                a(
                    Qd,
                    { id: "signin", route: r, url: "/a/wa/signin", songUrl: e },
                    a(Do, { styles: Wd }),
                    a("div", { className: Wd.text }, "Sign In")
                ),
                g &&
                a(
                    Qd,
                    { id: "account", route: r, url: "/a/wa/account", songUrl: e },
                    a(Jl, { styles: Wd }),
                    a("div", { className: Wd.text }, f.name)
                ),
                a("div", { className: Wd.divider }),
                h &&
                p &&
                a(
                    Un,
                    {
                        id: "menu-jobs",
                        to: "/a/wa/jobs",
                        className: Wd.jobs,
                        title: "Jobs at Songsterr",
                    },
                    a("img", {
                        src: "/static/media/jobs.9ce7bc25.svg",
                        width: 79.271,
                        height: 32,
                        alt: "Jobs",
                    })
                )
            ),
            a(
                M,
                null,
                d &&
                a(
                    O,
                    { animationStyles: Zd, timeout: 400, key: "overlay" },
                    a(Un, {
                        onTouchMove: tu,
                        className: Wd.overlay,
                        id: "sidebar-overlay",
                        to: e,
                        title: "Back to tab",
                        tabIndex: -1,
                    })
                ),
                r.page in eu &&
                a(
                    O,
                    { animationStyles: Yd, timeout: 400, key: r.page },
                    a(eu[r.page], {
                        route: r,
                        query: l,
                        user: n,
                        device: s,
                        isSmallScreen: t,
                    })
                )
            )
        );
    });
var nu = { wrap: "Calmr", inner: "B641uo Cals", banner: "Cal2xs" };
const iu = u(() => {
    const t = g(),
        {
            dispatch: e,
            consent: s,
            ads: n,
            device: i,
        } = C("consent", "ads", "device");
    if (void 0 === s.profiling) return;
    const r = Fn(i.os),
        l = ["ru", "ru-mo", "be", "uk"].some(t => -1 !== i.languages.indexOf(t)),
        c = r
            ? "Master rhytm skills with Rhythm Trainer by Songsterr"
            : "Pento. Learn to improvise.",
        d = r ? "Clicked on RRA banner" : "Clicked on Pento banner",
        u = r
            ? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50"
            : "https://apps.apple.com/app/apple-store/id1339653031?pt=88060802&ct=SRWM_banner_320x50&mt=8",
        h = r
            ? l
                ? "/static/media/rra640ru.3dfded89.png"
                : "/static/media/rra640en.2ff86105.png"
            : l
                ? "/static/media/pento640ru.3bc567b2.png"
                : "/static/media/pento640en.051b67cf.png";
    return (
        b &&
        (Ol("tab_page_mobile", { isTargeted: !0, page: "tab" }),
            o(() => {
                const e = t.current;
                if (e)
                    try {
                        const t = document.getElementById("header"),
                            s = new IntersectionObserver(
                                t => {
                                    t.forEach(t => {
                                        t.isIntersecting
                                            ? e.classList.contains("hidden") &&
                                            e.classList.remove("hidden")
                                            : !e.classList.contains("hidden") &&
                                            e.classList.add("hidden");
                                    });
                                },
                                { rootMargin: "-120px 0px 0px 0px" }
                            );
                        return t && s.observe(t), () => s.disconnect();
                    } catch (t) { }
            }, [t])),
        a(
            "div",
            { id: "showroom_header", className: nu.wrap, ref: t },
            a(
                "div",
                { id: "Redesign_ATF_tab_page_320х50", className: nu.inner },
                n.notsyFailed &&
                a(
                    "a",
                    {
                        className: nu.link,
                        onClick: () => {
                            e("curiosity/event", { event: d });
                        },
                        href: u,
                        target: "_blank",
                    },
                    a("img", { src: h, className: nu.banner, alt: c })
                )
            )
        )
    );
});
function ou(t) {
    switch (Number(t)) {
        case 1:
            return "/static/media/rri414.3c0c62dc.svg";
        case 2:
            return "/static/media/rri414_2.58402ce1.svg";
        case 3:
        default:
            return "/static/media/rri414_3.a7f92705.svg";
    }
}
const au = u(({ songId: t }) => {
    const {
        dispatch: e,
        device: s,
        user: n,
        ads: i,
    } = C("device", "user", "ads"),
        o = t => {
            e("curiosity/setConversionProps", { "Last referring link": t }),
                e("curiosity/google", {
                    category: "Showroom",
                    action: "Clicked on ".concat(t),
                });
        },
        r = Fn(s.os),
        l = Hn(s.os),
        c = !r && !l;
    if (l) {
        let t = Math.random() < 0.5,
            e = Math.floor(3 * Math.random());
        if (b && !window.__SHOWROOM_INITIALIZED__) {
            try {
                const s = document
                    .querySelector("#showroom img")
                    .src.match(/rri414_?(\d)?/);
                s ? ((t = !0), (e = +(s[1] || 1))) : (t = !1);
            } catch (t) {
                console.error(t);
            }
            window.__SHOWROOM_INITIALIZED__ = !0;
        }
        if (t && n.isLoggedIn && !n.hasPlus)
            return a(
                "div",
                { className: "Cqsav", id: "showroom" },
                a(
                    "a",
                    {
                        className: "Cqs2sm",
                        href: "https://apps.apple.com/app/apple-store/id1319997438?pt=414338&mt=8",
                        target: "_blank",
                    },
                    a("img", {
                        src: ou(e),
                        className: "Cqspx",
                        alt: "Master rhytm skills with Rhythm Trainer by Songsterr",
                    })
                )
            );
    }
    return c
        ? i.shouldShowPlus
            ? a(
                "div",
                { className: "Cqsav", id: "showroom" },
                a(
                    "div",
                    {
                        className: "B641uo Cqsg0",
                        id: "Redesign_ATF_tab_page_728x90_plus",
                    },
                    a(
                        Un,
                        {
                            className: "Cqs27c",
                            to: "/a/wa/plus",
                            onClick: () => o("Footer Plus Banner"),
                        },
                        a("img", {
                            src: "/static/media/plus-banner-footer.4228cdfb.svg",
                            alt: "Get Plus",
                        })
                    )
                )
            )
            : (Ol("tab_page", { isTargeted: !0, page: "tab" }),
                a(
                    "div",
                    { className: "Cqsav", id: "showroom" },
                    a(
                        "div",
                        { className: "B641uo Cqsg0", id: "Redesign_ATF_tab_page_728x90" },
                        i.notsyFailed &&
                        a(
                            Un,
                            {
                                className: "Cqs27c",
                                to: "/a/wa/plus",
                                onClick: () => o("Footer Banner"),
                            },
                            a("img", {
                                src: "/static/media/plus-banner-footer.4228cdfb.svg",
                                alt: "Get Plus",
                            })
                        )
                    )
                ))
        : a(
            "div",
            { className: "Cqsav", id: "showroom" },
            a(
                ai,
                {
                    source: "bottom_banner",
                    attrs: { className: "Cqs2sm" },
                    extra: { songId: t },
                },
                a("img", {
                    src: "/static/media/download414.e04f7a20.svg",
                    className: "Cqspx",
                    alt: "Download the App",
                })
            )
        );
});
var ru = {
    exitActive: "Cx8aa",
    enterActive: "Cx82ez",
    enter: "Cx821x",
    exit: "Cx81x3",
};
function lu(t) {
    return t ? "B1vxv B1v1g1" : "B1vxv B1v3s";
}
class cu extends c {
    constructor(t) {
        super(t),
            (this.state = {
                online: !b || navigator.onLine,
                className: b ? lu(navigator.onLine) : "B1vxv B1v1g1",
                message: b ? (navigator.onLine ? null : "offline") : null,
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
        this.state.online &&
            this.setState(Object.assign({}, this.state, { message: null }));
    }
    updateOnlineStatus() {
        navigator.onLine &&
            (clearTimeout(this.hideIndicatorTimeout),
                (this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3))),
            this.setState({
                online: navigator.onLine,
                className: lu(navigator.onLine),
                message: navigator.onLine ? "live" : "offline",
            });
    }
    render() {
        const { online: t, className: e, message: s } = this.state;
        let n = null;
        return (
            (!s && t) ||
            (n = a(
                O,
                { animationStyles: ru, timeout: 400 },
                a("div", { className: e }, s)
            )),
            a(M, null, n)
        );
    }
}
const du = t => {
    window && !window.confirm("Are you sure?") && t.preventDefault();
};
function uu({ meta: { songId: t }, isAdmin: e, children: s }) {
    if (!e) return a("nav", { className: "Bkv1ys" }, s);
    const n = bi("deleteSong", t),
        i = bi("editSong", t),
        o = bi("updateSrwr", t),
        r = bi("rerender", t),
        l = bi("generatePng", t),
        c = bi("blockDueToLicenseRestriction", t);
    return a(
        "nav",
        { className: "Bkv1ys" },
        a(
            "a",
            {
                className: "Bkv35b",
                href: b && window.location.href + "?redesign=off",
            },
            "SRWO"
        ),
        a("a", { href: n, target: "_blank" }, "Delete"),
        a("a", { href: i, target: "_blank" }, "Edit"),
        a("a", { href: o, target: "_blank", onClick: du }, "Update"),
        a("a", { href: r, target: "_blank", onClick: du }, "Rerender"),
        a("a", { href: c, target: "_blank", onClick: du }, "Block"),
        a("a", { href: l, target: "_blank" }, "Generate PNG"),
        s
    );
}
function hu(t, e) {
    const s = new AudioContext(),
        n = s.createMediaStreamDestination();
    let i = !1,
        o = !1;
    if (t && t.getAudioTracks().length > 0) {
        const e = s.createGain();
        (e.gain.value = 0.7),
            s.createMediaStreamSource(t).connect(e).connect(n),
            (i = !0);
    }
    return (
        e &&
        e.getAudioTracks().length > 0 &&
        (s.createMediaStreamSource(e).connect(n), (o = !0)),
        i || o ? n.stream.getAudioTracks() : []
    );
}
function pu(t) {
    try {
        t.stop();
    } catch (t) {
        console.error(t);
    }
}
function mu(t) {
    try {
        t.close();
    } catch (t) {
        console.error(t);
    }
}
class gu {
    constructor(t) {
        gu.prototype.__init.call(this),
            gu.prototype.__init2.call(this),
            gu.prototype.__init3.call(this),
            (this.state = "ready"),
            (this.handlers = t),
            (this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
            (this.socket.onclose = this.onSocketClose),
            (this.socket.onerror = this.onError);
    }
    cleanup() {
        this.audioVideoStream && this.audioVideoStream.getTracks().forEach(pu),
            this.voiceStream && this.voiceStream.getTracks().forEach(pu);
    }
    __init() {
        this.onSocketClose = () => {
            console.log("socket closed"),
                ("ready" !== this.state && "active" !== this.state) ||
                ((this.state = "stopped"), this.cleanup(), this.handlers.onClose());
        };
    }
    __init2() {
        this.onError = t => {
            ("ready" !== this.state && "active" !== this.state) ||
                ((this.state = "failed"),
                    this.cleanup(),
                    mu(this.socket),
                    this.handlers.onError(t));
        };
    }
    __init3() {
        this.onTrackEnded = () => {
            ("ready" !== this.state && "active" !== this.state) ||
                ((this.state = "stopped"),
                    this.cleanup(),
                    mu(this.socket),
                    this.handlers.onTurnedOff());
        };
    }
    async connect(t, e, s, n) {
        try {
            this.audioVideoStream = await navigator.mediaDevices.getDisplayMedia({
                audio: !0,
                video: !0,
            });
            for (const t of this.audioVideoStream.getTracks())
                t.onended = this.onTrackEnded;
            this.voiceStream = await navigator.mediaDevices.getUserMedia({
                video: !1,
                audio: !0,
            });
            for (const t of this.voiceStream.getTracks())
                t.onended = this.onTrackEnded;
            const i = new RTCPeerConnection(null),
                o = new MediaStream([
                    ...this.audioVideoStream.getVideoTracks(),
                    ...hu(this.audioVideoStream, this.voiceStream),
                ]);
            for (const t of o.getTracks()) i.addTrack(t, o);
            const a = await i.createOffer({
                OfferToReceiveAudio: !1,
                OfferToReceiveVideo: !1,
            });
            i.setLocalDescription(a),
                (this.socket.onmessage = async t => {
                    try {
                        const e = JSON.parse(t.data);
                        await i.setRemoteDescription(
                            new RTCSessionDescription({ type: "answer", sdp: e.answer })
                        ),
                            (this.state = "active"),
                            this.handlers.onReady();
                    } catch (t) {
                        this.onError(t);
                    }
                }),
                await (async (t, e) => {
                    t.readyState !== t.OPEN &&
                        (await (t =>
                            new Promise((e, s) => {
                                let n = 0;
                                const i = setInterval(() => {
                                    n > 9
                                        ? (clearInterval(i), s(new Error("Max number of attempts")))
                                        : t.readyState === t.OPEN && (clearInterval(i), e()),
                                        n++;
                                }, 200);
                            }))(t)),
                        t.send(e);
                })(
                    this.socket,
                    JSON.stringify({
                        cmd: "OFFER",
                        offer: a.sdp,
                        ticket: t,
                        email: e,
                        properties: s,
                        stage: window.__STAGE__,
                        isAdditional: n,
                    })
                );
        } catch (t) {
            this.onError(t);
        }
    }
    stop() {
        ("ready" !== this.state && "active" !== this.state) ||
            ((this.state = "stopped"),
                this.cleanup(),
                mu(this.socket),
                this.handlers.onStop());
    }
}
async function fu(t, e) {
    try {
        const s = await (async function (t) {
            const e = await fetch("/actions/usertest/".concat(t, "/ticket"), {
                method: "POST",
            });
            return Bi(e), e.json();
        })(e);
        try {
            const n = await (async function (t) {
                const e = await fetch("/api/usertest/".concat(t));
                return Bi(e), e.json();
            })(e);
            return t("ut/ticket", { ticket: s, script: n }), { ticket: s, script: n };
        } catch (e) {
            await yu(t, s);
        }
    } catch (t) {
        console.error(t);
    }
}
async function yu(t, e) {
    try {
        await (async function (t) {
            const e = JSON.stringify({ token: t.token }),
                s = await fetch("/actions/usertest/ticket", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: e,
                });
            return Bi(s), s.json();
        })(e),
            t("ut/ticket:dismiss");
    } catch (t) {
        console.error(t);
    }
}
function vu(t) {
    try {
        const e = t.get().ut.recorder;
        e && e.stop();
    } catch (t) {
        console.error(t);
    }
}
function bu(t, e) {
    wu(t, e);
    let s = e.startUrl || "/";
    (s = s.includes("?") ? "".concat(s, "&ut=on") : "".concat(s, "?ut=on")),
        (window.location.href = s);
}
function wu(t, e) {
    Qn.set("utTicket", t), Qn.set("utScript", e);
}
const xu = t => {
    t.on("@init", t => ({
        ut: {
            recorderState: "ready",
            recorder: void 0,
            ticket: void 0,
            script: void 0,
            stage: "hidden",
            email: void 0,
            steps: { questions: 0, instructions: 0, survey: 0 },
            isAdditional: !1,
        },
    })),
        t.on("ut/ticket", (t, { ticket: e, script: s }) => ({
            ut: Object.assign({}, t.ut, { ticket: e, script: s }),
        })),
        t.on("ut/ticket:dismiss", (t, e) => ({
            ut: Object.assign({}, t.ut, { ticket: void 0 }),
        })),
        t.on("ut/email", (t, e) => ({
            ut: Object.assign({}, t.ut, { email: e, stage: "start" }),
        })),
        t.on("ut/continue", (e, s) => {
            if (s) return t.dispatch("ut/load", s), void wu();
            const { ticket: n, script: i } = {
                ticket: Qn.get("utTicket"),
                script: Qn.get("utScript"),
            };
            if (n && i) {
                const t = !i.emailRequest || e.user.isLoggedIn ? "start" : "email";
                return {
                    ut: Object.assign({}, e.ut, { ticket: n, script: i, stage: t }),
                };
            }
        }),
        t.on("ut/load", async (e, s) => {
            const n = await fu(t.dispatch, s);
            n && n.script && t.dispatch("ut/load:done", n.script);
        }),
        t.on("ut/load:done", (t, e) => ({
            ut: Object.assign({}, t.ut, {
                stage: !e.emailRequest || t.user.isLoggedIn ? "start" : "email",
            }),
        })),
        t.on("ut/start", e => {
            !(async function (t, e = !1) {
                let s = t.get();
                if ("ready" === s.ut.recorderState || "failed" === s.ut.recorderState)
                    try {
                        const n = new gu({
                            onReady: () => t.dispatch("ut/start:done"),
                            onStop: () => t.dispatch("ut/stop:done"),
                            onClose: () => t.dispatch("ut/stop:closed"),
                            onTurnedOff: () => t.dispatch("ut/stop:turnedOff"),
                            onError: e => t.dispatch("ut/error", e),
                        });
                        t.dispatch("ut/start:processing", n), (s = t.get());
                        const i = s.user;
                        await n.connect(
                            s.ut.ticket,
                            s.ut.email ||
                            (i.isLoggedIn ? i.profile.email : "anonymous@songsterr.com"),
                            s.experiments,
                            e
                        );
                    } catch (e) {
                        console.error(e), t.dispatch("ut/error", e);
                    }
            })(t, e.ut.isAdditional);
        }),
        t.on(
            "ut/start:done",
            t => (
                wu(),
                {
                    ut: Object.assign({}, t.ut, {
                        recorderState: "active",
                        recorder: t.ut.recorder,
                        stage: "instructions",
                    }),
                }
            )
        ),
        t.on("ut/start:processing", (t, e) => ({
            ut: Object.assign({}, t.ut, { recorderState: "starting", recorder: e }),
        })),
        t.on("ut/terminate", ({ ut: e }) => {
            switch (e.stage) {
                case "intro":
                case "questions":
                case "email":
                    yu(t.dispatch, e.ticket);
                    break;
                case "start":
                    yu(t.dispatch, e.ticket), wu(), t.dispatch("navigate", "/");
                    break;
                case "instructions":
                case "restart":
                case "survey":
                    yu(t.dispatch, e.ticket), vu(t), t.dispatch("navigate", "/");
            }
            return {
                ut: {
                    recorderState: "ready",
                    recorder: void 0,
                    ticket: void 0,
                    script: void 0,
                    stage: "hidden",
                    email: void 0,
                    steps: { questions: 0, instructions: 0, survey: 0 },
                    isAdditional: !1,
                },
            };
        }),
        t.on(
            "ut/error",
            (e, s) => (
                t.dispatch("curiosity/event", { event: "UT Error", Message: s }),
                {
                    ut: Object.assign({}, e.ut, {
                        recorderState: "failed",
                        recorder: void 0,
                    }),
                }
            )
        ),
        t.on("ut/stop:done", t => ({
            ut: Object.assign({}, t.ut, { recorderState: "ready", recorder: void 0 }),
        })),
        t.on("ut/stop:closed", t => ({
            ut: Object.assign({}, t.ut, { recorderState: "ready", recorder: void 0 }),
        })),
        t.on("ut/stop:turnedOff", t => ({
            ut: Object.assign({}, t.ut, {
                recorderState: "ready",
                recorder: void 0,
                stage: "restart",
                isAdditional: !0,
            }),
        })),
        t.on("ut/stage", ({ ut: e }, { stage: s, step: n }) => {
            const { ticket: i, script: o } = e;
            switch (s) {
                case "farewell":
                    vu(t),
                        t.dispatch("curiosity/event", {
                            event: "User study completed",
                            Name: e.script && e.script.name,
                            Domain: window.location.hostname,
                        });
                    break;
                case "not_chosen":
                    yu(t.dispatch, i);
                    break;
                case "questions":
                    if (!o.questions || !o.questions.length || n >= o.questions.length)
                        return void bu(i, o);
            }
            return {
                ut: Object.assign({}, e, {
                    stage: s,
                    steps:
                        void 0 !== n ? Object.assign({}, e.steps, { [s]: n }) : e.steps,
                }),
            };
        }),
        t.on("screener/dismiss", (e, s) => {
            s.usertest && yu(t.dispatch, e.ut.ticket);
        }),
        t.on("screener/accept", (t, e) => {
            if (e.usertest) {
                const { script: e, ticket: s } = t.ut;
                if (!e || !s) return;
                let n = "intro";
                if (e && !e.intro) {
                    if (!e.questions || !e.questions.length) return void bu(s, e);
                    n = "questions";
                }
                return {
                    ut: Object.assign({}, t.ut, {
                        stage: n,
                        steps: { questions: 0, instructions: 0, survey: 0 },
                        isAdditional: !1,
                    }),
                };
            }
        });
};
function Su() {
    const {
        dispatch: t,
        screener: e,
        ut: s,
        promo: n,
    } = C("screener", "ut", "promo"),
        i = e.active;
    if (!i || "hidden" !== s.stage || n.active) return null;
    const o = m(() => {
        t("screener/dismiss", i);
    }, [i]),
        r = m(() => {
            t("screener/accept", i);
        }, [i]);
    return a(
        "aside",
        { className: "A1lj", id: "screener" },
        a(bo, { onClick: o, id: "screener" }),
        a("h2", { className: "A179" }, i.title),
        a("p", { className: "A1eo" }, i.body),
        i.usertest
            ? a(
                "button",
                { className: "Cpb24q Cpb14i Cpb1t2 Ahd", onClick: r },
                i.button
            )
            : a(
                "a",
                {
                    className: "Cpb24q Cpb14i Cpb1t2 Ahd",
                    href: i.link,
                    onClick: r,
                    rel: "noopener noreferrer",
                    target: "_blank",
                },
                i.button
            )
    );
}
const Cu = { animationStyles: Qr },
    ku = () => {
        const {
            dispatch: t,
            promo: e,
            device: s,
            experiments: n,
        } = C("promo", "device", "experiments"),
            i = e.active && ("slowdown" === e.active || "on" === n.plus_promo);
        let o = {
            title: "Struggling to figure out\nthe rhythm of this fragment?",
            cta: s.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
            source: "slowdown_promo_popup",
            link: "Slowdown Promo Popup",
            context: void 0,
        };
        switch (e.active) {
            case "loop":
                o = {
                    title: "Want to nail this fragment?",
                    cta: s.isPhone
                        ? "Practice it by looping\nin our app!"
                        : "Practice it by looping\non Plus!",
                    source: "loop_promo_popup",
                    link: "Loop Promo Popup",
                    context: "Loop",
                };
                break;
            case "noads":
                o = {
                    title: "Bottom banner takes up\ntoo much space?",
                    cta: s.isPhone ? "Remove it in our app!" : "Remove it on Plus!",
                    source: "noads_promo_popup",
                    link: "No Ads Promo Popup",
                    context: "No Ads",
                };
                break;
            case "print":
                o = {
                    title: "Struggling with markups\nusing the mouse?",
                    cta: s.isPhone
                        ? "Print the tab out in our app!"
                        : "Print the tab out on Plus!",
                    source: "print_promo_popup",
                    link: "Print Promo Popup",
                    context: "Print",
                };
                break;
            case "mute":
                o = {
                    title: "Using tab as\na backing track?",
                    cta: s.isPhone
                        ? "Mute your instrument\nin our app!"
                        : "Mute your instrument\non Plus!",
                    source: "mute_promo_popup",
                    link: "Mute Promo Popup",
                    context: "Mute",
                };
                break;
            case "solo":
                o = {
                    title: "Bass line is hard to hear?",
                    cta: s.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
                    source: "solo_promo_popup",
                    link: "Solo Promo Popup",
                    context: "Solo",
                };
                break;
            case "retune":
                o = {
                    title: "Don’t want to retune the guitar?",
                    cta: s.isPhone
                        ? "Pitch shift the tab in our app!"
                        : "Pitch shift the tab on Plus!",
                    source: "retune_promo_popup",
                    link: "Retune Promo Popup",
                    context: "Retune",
                };
        }
        const r = () => {
            t("curiosity/setConversionProps", { "Last referring link": o.link }),
                t("curiosity/event", {
                    event: "Clicked on promo context",
                    Context: o.context,
                }),
                t("promo/dismiss");
        };
        return a(
            M,
            null,
            i &&
            a(
                O,
                Object.assign({}, Cu, { key: "popup" }),
                a(
                    "aside",
                    { className: "Cu1358", id: "promo" },
                    a("h2", { className: "Cu11gf" }, o.title),
                    a("p", { className: "Cu11fb" }, o.cta),
                    a(
                        "div",
                        { className: "Cu1p" },
                        !s.isPhone &&
                        a(
                            Un,
                            { to: "/a/wa/plus", className: j.buttonGreen, onClick: r },
                            "Tell me more!"
                        ),
                        s.isPhone &&
                        a(
                            ai,
                            {
                                source: o.source,
                                onClick: r,
                                attrs: { className: j.buttonGreen },
                            },
                            Fn(s.os) ? "Open Google Play" : "Open App Store"
                        ),
                        a(
                            "a",
                            { onClick: () => t("promo/dismiss"), className: j.buttonLink },
                            "No, thanks"
                        )
                    ),
                    a(
                        "a",
                        {
                            onClick: () => t("promo/unsubscribe"),
                            className: j.buttonPromoUnsubscribe,
                        },
                        "Don’t show ads like that"
                    )
                )
            )
        );
    };
var Nu = {
    pane: "vj205",
    close: "vjnm",
    hide: "vj21s",
    show: "Cpb24q Cpb1oz vj1fb",
    stroke: "vj325",
    paneHidden: "vj205 vj2c5",
    step: "vj8n",
    reminder: "vj2hl",
    center: "vjtd",
    button: "Cpb24q Cpb318 vj1pa",
    taskComplete: "Cpb24q Cpb318 vj1pa vj2oc",
    optional: "Cpb24q Cpb318 vj1pa vj2bc",
    confirmCompletion: "vj289",
    icon: "vjmg",
};
const Lu = {
    close: "Закрыть",
    farewell: "Спасибо!##Спасибо вам за помощь в улучшении нашего сайта.",
},
    Tu = {
        close: "Close",
        farewell:
            "Thank you!##Thank you for helping us in the improvement of our site.",
    };
function Iu() {
    const { dispatch: t, ut: e } = C("ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return Lu;
                default:
                    return Tu;
            }
        })(e.script.locale),
        n = e.script.farewell || s.farewell,
        [i, o] = n.split("##");
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-farewell" },
        i && a("h1", null, i),
        o && a("p", null, o),
        a(
            "button",
            {
                className: Nu.button,
                onClick: () => t("ut/stage", { stage: "hidden" }),
            },
            s.close
        )
    );
}
const _u = {
    close: "Закрыть",
    farewell:
        "Спасибо!##К сожалению для участия в исследовании нам нужны только те пользователи которые ответили на все вопросы положительно.",
},
    Eu = {
        close: "Close",
        farewell:
            "Thank you!##For testing we need the users who answered positively to all the questions.",
    };
function Pu() {
    const { dispatch: t, ut: e } = C("ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return _u;
                default:
                    return Eu;
            }
        })(e.script.locale),
        n = e.script.farewellNotChosen || s.farewell,
        [i, o] = n.split("##");
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-not-chosen" },
        i && a("h1", null, i),
        o && a("p", null, o),
        a(
            "button",
            {
                className: Nu.button,
                onClick: () => t("ut/stage", { stage: "hidden" }),
            },
            s.close
        )
    );
}
function Au({ styles: { icon: t, stroke: e } }) {
    return a(
        "svg",
        { width: 10, height: 10, viewBox: "0 -3 10 10", className: t },
        a("path", { d: "M1 -2l4 4 4-4M1 2l4 4 4-4", className: e })
    );
}
const Mu = {
    basicInstruction:
        "Задание##Пробегитесь по сайту, поделитесь своими впечатлениями.",
    aloud: "Думайте вслух! Микрофон запишет ваши мысли.",
    maximize: "Открыть задание",
    minimize: "Свернуть",
    finishTask: "Завершить задание",
    didComplete: "Вы выполнили задание?",
    yes: "Да",
    no: "Нет",
},
    Bu = {
        basicInstruction:
            "Instructions##Please take a look around and tell us what you think.",
        aloud: "Think aloud! User study is recording",
        maximize: "Click here to see your task",
        minimize: "Minimize",
        finishTask: "Finish the task",
        didComplete: "Did you complete the task?",
        yes: "Yes",
        no: "No",
    };
function Du({ toggle: t, isHidden: e }) {
    const { dispatch: n, ut: i } = C("ut"),
        [o, r] = s(!1),
        l = (t => {
            switch (t) {
                case "ru":
                    return Mu;
                default:
                    return Bu;
            }
        })(i.script.locale),
        c = i.steps.instructions || 0,
        d =
            c < i.script.instructions.length - 1
                ? { stage: "instructions", step: c + 1 }
                : {
                    stage:
                        i.script.survey && i.script.survey.length > 0
                            ? "survey"
                            : "farewell",
                },
        u = i.script.instructions[c] || l.basicInstruction,
        [h, p] = u.split("##");
    return e
        ? a(
            "div",
            { className: Nu.step, id: "usertests-step-instructions" },
            a("h1", { className: Nu.reminder }, l.aloud),
            a(
                "button",
                { className: Nu.show, onClick: t },
                l.maximize,
                a(Au, { styles: Nu })
            )
        )
        : a(
            "div",
            { className: Nu.step, id: "usertests-step-instructions" },
            a(
                "button",
                { className: Nu.hide, onClick: t },
                a(Au, { styles: Nu }),
                l.minimize
            ),
            h && a("h1", null, h),
            p && a("p", null, p),
            o
                ? a(
                    "div",
                    { className: Nu.confirmCompletion },
                    a("p", null, l.didComplete),
                    a(
                        "button",
                        {
                            className: Nu.optional,
                            onClick: () => {
                                r(!1), n("ut/stage", d);
                            },
                        },
                        l.yes
                    ),
                    a(
                        "button",
                        { className: Nu.optional, onClick: () => r(!1) },
                        l.no
                    )
                )
                : a(
                    "div",
                    null,
                    a(
                        "button",
                        { className: Nu.taskComplete, onClick: () => r(!0) },
                        l.finishTask
                    )
                )
        );
}
const Ou = { yes: "Да", no: "Нет" },
    ju = { yes: "Yes", no: "No" };
function Ru() {
    const { dispatch: t, ut: e } = C("user", "ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return Ou;
                default:
                    return ju;
            }
        })(e.script.locale),
        n = e.steps.questions,
        i = { stage: "questions", step: n + 1 },
        o = { stage: "not_chosen" },
        [r, l] = e.script.questions[n].split("##");
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-questions" },
        r && a("h1", null, r),
        l && a("p", null, l),
        a(
            "button",
            { className: Nu.button, onClick: () => t("ut/stage", i) },
            s.yes
        ),
        a("button", { className: Nu.button, onClick: () => t("ut/stage", o) }, s.no)
    );
}
const zu = { start: "Начать" },
    Fu = { start: "Start" };
function Hu() {
    const { dispatch: t, ut: e } = C("user", "ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return zu;
                default:
                    return Fu;
            }
        })(e.script.locale),
        n = e.script.intro,
        [i, o] = n.split("##");
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-intro" },
        i && a("h1", null, i),
        o && a("p", null, o),
        a(
            "button",
            {
                className: Nu.button,
                onClick: () => t("ut/stage", { stage: "questions", step: 0 }),
            },
            s.start
        )
    );
}
const qu = { submit: "Далее" },
    Uu = { submit: "Submit" };
function Vu() {
    const { dispatch: t, ut: e } = C("ut"),
        n = g(),
        [i, o] = s(null),
        r = e.script.emailRequest,
        [l, c] = r.split("##"),
        d = (t => {
            switch (t) {
                case "ru":
                    return qu;
                default:
                    return Uu;
            }
        })(e.script.locale);
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-email" },
        l && a("h1", null, l),
        c && a("p", null, c),
        a(
            "form",
            {
                noValidate: !0,
                className: Nu.form,
                onSubmit: async e => {
                    e.preventDefault();
                    const s = n.current;
                    try {
                        oo([{ field: s, validator: Zi }]),
                            this.setState(null),
                            t("ut/email", s.value);
                    } catch (t) {
                        o(t);
                    }
                },
                action: "",
            },
            a(po, { error: i, errorMessage: i && i.reasons && i.reasons.email }),
            a(mo, { type: "email", ref: n, name: "email", error: null }),
            a("button", { className: Nu.button }, d.submit)
        )
    );
}
const Gu = {
    needApproval: "Нам нужно ваше подтверждение",
    recording1:
        "Запись начнется только после начала исследования и закончится сразу после. Запись за рамками исследования не ведется.",
    recording2:
        'Нажмите кнопку внизу для того чтобы разрешить доступ к микрофону и экрану. После этого появится уведомление о доступе. Выберите "Поделится всем экраном". После этого кликните "Поделиться" чтобы продолжить.',
    failed:
        "Не удалось получить доступ к экрану или записи звука. Проверьте настройки браузера и попробуйте ее раз.",
    screenAccess: "Дать доступ к экрану и микрофону",
},
    Xu = {
        needApproval: "We need your approval",
        recording1:
            "Recording will start when the study begins & stop as soon as you complete the study. No recording will occur outside of these times.",
        recording2:
            "Click the below button to allow this study to record your device's screen and microphone. A message directing you to select your screen will appear. Please choose to share Your Entire Screen. Once selected click 'share' to proceed.",
        failed:
            "Failed to start screen or audio recording. Please, check browser permissions and try again",
        screenAccess: "Yes, access my Screen and Voice",
    };
function Wu() {
    const { ut: t, dispatch: e } = C("ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return Gu;
                default:
                    return Xu;
            }
        })(t.script.locale);
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-start" },
        a("h1", null, s.needApproval),
        a("p", null, s.recording1),
        a("p", null, s.recording2),
        "failed" === t.recorderState && a("p", null, a("strong", {}, s.failed)),
        a(ro, {
            title: s.screenAccess,
            processing: "starting" === t.recorderState,
            onClick: () => e("ut/start"),
        })
    );
}
const Yu = {
    recordingStopped: "It appears that the recording has stopped.",
    recording1: "Ваше участие в исследовании не было записано.",
    recording2:
        'Если это произошло по ошибке и вы хотите продолжить ваше участие нажмите кнопку "Начать заново".',
    failed:
        "Не удалось получить доступ к экрану или записи звука. Проверьте настройки браузера и попробуйте ее раз.",
    restart: "Начать заново",
},
    Zu = {
        recordingStopped: "It appears that the recording has stopped.",
        recording1: "Your participation has not been recorded.",
        recording2:
            "If this was a mistake and you wish to participate, click the restart button to start the study again.",
        failed:
            "Failed to start screen or audio recording. Please, check browser permissions and try again",
        restart: "Restart",
    };
function Ku() {
    const { ut: t, dispatch: e } = C("ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return Yu;
                default:
                    return Zu;
            }
        })(t.script.locale);
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-restart" },
        a("h1", null, s.recordingStopped),
        a("p", null, s.recording1),
        a("p", null, s.recording2),
        "failed" === t.recorderState && a("p", null, a("strong", {}, s.failed)),
        a(ro, {
            title: s.restart,
            processing: "starting" === t.recorderState,
            onClick: () => e("ut/start"),
        })
    );
}
const Qu = {
    answerFinal: "Пожалуйста ответьте на последние вопросы",
    impove: "Как сайт может стать еще лучше?",
    proceed: "Продолжить",
    answeredAloud: "Я ответил вслух",
},
    Ju = {
        answerFinal: "Please answer final questions",
        impove: "How can we improve?",
        proceed: "Proceed",
        answeredAloud: "I answered aloud",
    };
function $u() {
    const { dispatch: t, ut: e } = C("ut"),
        s = (t => {
            switch (t) {
                case "ru":
                    return Qu;
                default:
                    return Ju;
            }
        })(e.script.locale),
        n = e.steps.survey || 0,
        i =
            n < e.script.survey.length
                ? { stage: "survey", step: n + 1 }
                : { stage: "farewell" },
        o =
            0 === n
                ? e.script.surveyIntro || s.answerFinal
                : e.script.survey[n - 1] || s.impove,
        [r, l] = o.split("##");
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-survey" },
        r && a("h1", null, r),
        l && a("p", null, l),
        a(
            "button",
            { className: Nu.button, onClick: () => t("ut/stage", i) },
            0 === n ? s.proceed : s.answeredAloud
        )
    );
}
const th = {
    youSure: "Вы уверены?",
    cancelStudy: "Вы действительно хотите прервать исследование?",
    no: "Нет, продолжить",
    yes: "Да",
},
    eh = {
        youSure: "Are you sure?",
        cancelStudy: "Do you want to cancel the study?",
        no: "No, continue",
        yes: "Yes",
    };
function sh({ locale: t, onCancel: e, onConfirm: s }) {
    const n = (t => {
        switch (t) {
            case "ru":
                return th;
            default:
                return eh;
        }
    })(t);
    return a(
        "div",
        { className: Nu.step, id: "usertests-step-terminate" },
        a("h1", null, n.youSure),
        a("p", { className: Nu.center }, n.cancelStudy),
        a("button", { className: Nu.optional, onClick: s }, n.yes),
        a("button", { className: Nu.button, onClick: e }, n.no)
    );
}
const nh = { cancel: "Закончить исследование" },
    ih = { cancel: "Cancel the study" };
function oh() {
    const { ut: t, dispatch: e } = C("ut");
    if ("hidden" === t.stage) return;
    const n = (function (t) {
        switch (t) {
            case "hidden":
                return null;
            case "intro":
                return Hu;
            case "questions":
                return Ru;
            case "start":
                return Wu;
            case "restart":
                return Ku;
            case "not_chosen":
                return Pu;
            case "email":
                return Vu;
            case "instructions":
                return Du;
            case "survey":
                return $u;
            case "farewell":
                return Iu;
            default:
                return null;
        }
    })(t.stage),
        [i, o] = s(!1),
        [r, l] = s(!1),
        c = t.script ? t.script.locale : "en",
        d = (t => {
            switch (t) {
                case "ru":
                    return nh;
                default:
                    return ih;
            }
        })(c);
    return a(
        "div",
        {
            className: i ? Nu.paneHidden : Nu.pane,
            id: "usertest-recorder",
            onClick: i ? () => o(!1) : void 0,
        },
        !r &&
        !i &&
        (function (t) {
            switch (t) {
                case "not_chosen":
                case "farewell":
                    return !1;
                default:
                    return !0;
            }
        })(t.stage) &&
        a(
            "button",
            { className: Nu.close, id: "ut-close", onClick: () => l(!0) },
            d.cancel
        ),
        r
            ? a(sh, {
                locale: c,
                onCancel: () => l(!1),
                onConfirm: () => e("ut/terminate"),
            })
            : n &&
            a(n, {
                toggle: t => {
                    t.stopPropagation(), t.preventDefault(), o(!i);
                },
                isHidden: i,
            })
    );
}
const ah = ({ user: t, isNewSound: e }) =>
    (t.isAdmin || 2233818 === t.profile.id) &&
    a(
        "span",
        { className: "Bkvci" },
        "New Sound Timeline:",
        a(
            "a",
            {
                href:
                    b &&
                    window.location.origin +
                    window.location.pathname +
                    "?experiment_new_sound=".concat(e ? "off" : "on"),
                className: e ? "Bkv1z4" : "Bkvjm",
            },
            e ? "ON" : "OFF"
        )
    );
function rh() {
    return a(
        "section",
        { className: "C6x20e" },
        a("h1", { className: "C6xhc" }, a("span", null, "Page Not Found!")),
        a(
            "h2",
            { className: "C6xy8" },
            "Please try ",
            a(Un, { to: "/" }, "searching"),
            " for the song you need."
        )
    );
}
function lh() {
    return a(
        "section",
        { className: "Bcaic", role: "alert" },
        a(
            "h1",
            { className: "Bca8k" },
            a("span", null, "The song was successfully deleted!")
        ),
        a(
            "h2",
            { className: "Bca1ac" },
            "Try ",
            a(Un, { to: "/" }, "searching"),
            " for other songs."
        )
    );
}
function ch() {
    if (b) {
        const { dispatch: t } = C();
        o(() => t("curiosity/error", { error: "Network" }), []);
    }
    return a(
        "section",
        { className: "C6x20e" },
        a("h1", { className: "C6xhc" }, a("span", null, "Network Error")),
        a(
            "h2",
            { className: "C6xy8" },
            "Please, check your network connection and try again."
        )
    );
}
class dh extends c {
    render() {
        return a(
            "svg",
            { width: 112, height: 112, viewBox: "0 0 ".concat(112, " ").concat(112) },
            a(
                "g",
                {
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "#FD651A",
                    "stroke-width": "11",
                    transform: "translate(6 6)",
                },
                a("circle", { cx: 50, cy: 50, r: 50 }),
                a("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
            )
        );
    }
}
function uh() {
    return a(
        Ic,
        {
            level: "notice",
            title:
                "Sorry this content has been removed in your country at the request of the underlying music publisher.",
            action:
                "We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
            reason: "license",
        },
        a(dh, null)
    );
}
function hh({ meta: t, cursor: e, part: s, player: n, isDeleted: i }) {
    const o = !t.loading && !!t.current,
        r = t.current && !!t.current.tracks,
        l = t.current && !!t.current.audio;
    return t.isNotFound || s.isNotFound
        ? a(rh, null)
        : i
            ? a(lh, null)
            : t.isNetworkFailed || s.isNetworkFailed
                ? a(ch, null)
                : t.isFailed || s.isFailed
                    ? a(qc, null)
                    : t.allowedByLicense
                        ? !o || (r && l)
                            ? n.webworkerOperational
                                ? n.playbackAvailable && Ni
                                    ? n.isAudioNetworkFailed
                                        ? a(Ic, {
                                            level: "info",
                                            title: "Audio can't be loaded because of network error.",
                                            action: "Probably you are offline or connection was canceled",
                                            reason: "network",
                                        })
                                        : n.isAudioFailed
                                            ? a(Ic, {
                                                level: "error",
                                                title: "Sorry, but there are some problems with ".concat(
                                                    "playback"
                                                ),
                                                action: "Please, try to reload page",
                                                reason: "playback",
                                            })
                                            : e.isFailed
                                                ? a(Ic, {
                                                    level: "error",
                                                    title: "Sorry, but there are some problems with cursor",
                                                    action: "Please, try to reload page",
                                                    reason: "cursor",
                                                })
                                                : void 0
                                    : a(Ic, {
                                        level: "info",
                                        title: "Sorry, playback is not supported in your browser",
                                        action: "Try to use latest Google Chrome",
                                        reason: n.playbackAvailable ? "animate" : "audio",
                                    })
                                : a(Ic, {
                                    level: "info",
                                    title: "Sorry, playback is not possible on this song",
                                    action: "Probably there is not enough memory",
                                    reason: "webworker",
                                })
                            : a(Ic, {
                                level: "info",
                                title: "Tab sound is being rendered",
                                action: "On average it takes about 20 minutes to process a tab",
                                reason: "render",
                            })
                        : a(uh, null);
}
const ph = t => true,
    mh = (t, e) =>
        t.layer.layer === e
            ? t.dispatch("layer/hide")
            : t.dispatch("layer/show", e),
    gh = t => t.meta.allowedByLicense,
    fh = t => !t.route.isPanel,
    yh = t => {
        return !(
            (!(e = t.meta.current) || !e.tracks || 1 === e.tracks.length) &&
            (mh(t, "solo_single"), 1)
        );
        var e;
    },
    vh = t => e => !!ph(e) || (mh(e, t), !1),
    bh = t => (t.layer.layer && t.dispatch("layer/hide"), !0);
class wh extends c {
    constructor(...t) {
        super(...t),
            wh.prototype.__init.call(this),
            wh.prototype.__init2.call(this),
            wh.prototype.__init3.call(this),
            wh.prototype.__init4.call(this),
            wh.prototype.__init5.call(this),
            wh.prototype.__init6.call(this),
            wh.prototype.__init7.call(this),
            wh.prototype.__init8.call(this),
            wh.prototype.__init9.call(this),
            wh.prototype.__init10.call(this),
            wh.prototype.__init11.call(this),
            wh.prototype.__init12.call(this),
            wh.prototype.__init13.call(this),
            wh.prototype.__init14.call(this),
            wh.prototype.__init15.call(this),
            wh.prototype.__init16.call(this),
            wh.prototype.__init17.call(this),
            wh.prototype.__init18.call(this),
            wh.prototype.__init19.call(this);
    }
    componentDidMount() {
        const t = window.hotKeysManager;
        t.bindOne("esc", this.handleHide, { parallel: !0 }),
            b &&
            -1 === window.location.search.indexOf("l11_tracking=") &&
            (t.bindOne("space", this.handlePlay, { onTab: !0 }),
                t.bindOne("l", this.handleLoop, { onTab: !0 }),
                t.bindOne("f", this.handleSolo, { onTab: !0 }),
                t.bindOne("m", this.handleMute, { onTab: !0 }),
                t.bindOne("r", this.handlePitchshift, { onTab: !0 }),
                t.bindOne("t", this.handleMixer, { onTab: !0 }),
                t.bindOne("s", this.handleSpeed, { onTab: !0 }),
                t.bindOne("p", this.handlePrint, { onTab: !0 }),
                t.bindOne("c", this.handleCountin, { onTab: !0 })),
            t.bindMeta("alt+enter", this.handleFullscreen),
            t.bindMeta("cmd+p", this.handlePrint);
    }
    componentDidCatch(t, e) {
        try {
            "Sentry" in window &&
                "function" == typeof window.Sentry.captureException &&
                window.Sentry.captureException(t);
        } catch (t) { }
        console && console.error(t, e);
    }
    __init() {
        this.showLayer = t => this.props.dispatch("layer/show", t);
    }
    __init2() {
        this.hideLayer = () => this.props.dispatch("layer/hide");
    }
    __init3() {
        this.moveCursor = t =>
            (function (t, e) {
                t("player/moveCursor", e);
            })(this.props.dispatch, t);
    }
    __init4() {
        this.startLoopChange = () => {
            this.props.dispatch("player/suspend", "loop"),
                Ne(this.props.dispatch, !0);
        };
    }
    __init5() {
        this.finishLoopChange = () => {
            Ne(this.props.dispatch, !1), this.props.dispatch("player/resume", "loop");
        };
    }
    __init6() {
        this.handleAction = (t, e) => s => {
            s.stopPropagation(), s.preventDefault();
            for (const e of t) if (!e(this.props)) return;
            e(s);
        };
    }
    __init7() {
        this.handleFullscreen = this.handleAction([gh, fh], () => {
            const t = !this.props.screen.fullscreen,
                { dispatch: e } = this.props;
            Ie(e, { enabled: t }),
                e("curiosity/google", {
                    category: "Player",
                    action: t ? "Entered fullscreen" : "Exited fullscreen",
                    label: "draw",
                    value: "0",
                });
        });
    }
    __init8() {
        this.handlePlay = this.handleAction([gh, fh, bh], () => {
            const { meta: t, player: e } = this.props;
            if (!t.isFailed && t.current && t.current.audio) {
                const { dispatch: t } = this.props;
                !(async function (t, e, s = null) {
                    t("player/togglePlay", s);
                })(t, e.audio),
                    t("curiosity/google", {
                        category: "Player",
                        action: e.shouldPlay ? "Pressed pause" : "Pressed play",
                    });
            }
        });
    }
    __init9() {
        this.handleMixer = this.handleAction([gh, fh], () => {
            const { meta: t } = this.props;
            t.current && t.current.tracks && mh(this.props, "mixer");
        });
    }
    __init10() {
        this.handleSpeed = this.handleAction([gh, fh, vh("plus_speed")], () => {
            mh(this.props, "speed");
        });
    }
    __init11() {
        this.handlePitchshift = this.handleAction(
            [gh, fh, vh("plus_pitchshift"), bh],
            () => {
                mh(this.props, "pitchshift");
            }
        );
    }
    __init12() {
        this.handleCountin = this.handleAction([gh, fh, bh], () => {
            !(async function (t) {
                t("player/toggleCountIn");
            })(this.props.dispatch);
        });
    }
    __init13() {
        this.handleSolo = this.handleAction([gh, fh, yh, vh("plus_solo"), bh], () =>
            _e(this.props.store, "solo" === this.props.player.type ? "focus" : "solo")
        );
    }
    __init14() {
        this.handleMute = this.handleAction([gh, fh, vh("plus_mute"), bh], () =>
            _e(this.props.store, "mute" === this.props.player.type ? "focus" : "mute")
        );
    }
    __init15() {
        this.handleLoop = this.handleAction([gh, fh, vh("plus_loop"), bh], () =>
            (async function (t) {
                try {
                    let e = await Ce(t);
                    if (e && e.demo && !e.demo()) return e.plusToggleLoop(t);
                    if (((e = await ke(t)), e)) return e.demoToggleLoop(t);
                } catch (t) {
                    console.error(t);
                }
            })(this.props.store)
        );
    }
    __init16() {
        this.handlePrint = this.handleAction([gh, fh, vh("plus_print"), bh], () => {
            this.props.dispatch("player/togglePlay", !1),
                setTimeout(() => {
                    window.print();
                });
        });
    }
    __init17() {
        this.handleMinimize = () => bh(this.props);
    }
    __init18() {
        this.handleNotation = this.handleAction([], () => {
            "help_notation" === this.props.layer.layer
                ? this.props.dispatch("layer/hide")
                : this.props.dispatch("layer/show", "help_notation");
        });
    }
    __init19() {
        this.handleHide = this.handleAction([], () => {
            if (this.props.route.isPanel) {
                const { meta: t } = this.props,
                    e = vi(t.current, t.partId, t.revisionId);
                this.props.dispatch("navigate", e);
            }
            this.props.layer.layer
                ? this.props.dispatch("layer/hide")
                : this.props.screen.fullscreen &&
                Ie(this.props.dispatch, { enabled: !1 });
        });
    }
    showAttractors() {
        if (!window.__HAS_BEEN_SEEN_BEFORE__) return !1;
        const t = [];
        if (!this.props.route.isPanel && !this.props.layer.layer)
            for (const e of t) if (this.showAttractorOnce(e)) return !0;
        return !1;
    }
    showAttractorOnce({ layer: t, segment: e, storageKey: s }) {
        const { experiments: n } = this.props;
        if (void 0 !== e && "on" !== n[e]) return !1;
        const i = s || t;
        return !Zn(i) && (this.props.dispatch("layer/show", t), Kn(i, !0), !0);
    }
    render() {
        const {
            user: t,
            player: e,
            meta: i,
            part: r,
            cursor: l,
            screen: c,
            layer: { layer: d },
            device: u,
            route: h,
            isDeleted: p,
            experiments: m,
            browser: g,
        } = this.props,
            f = wo(i),
            y = i.allowedByLicense,
            b = "tab" === h.page,
            [w, x] = s(b);
        o(() => b && x(!0), [b]);
        const S = this.props.screen.fullscreen,
            C = this.props.screen.isSmall,
            k = this.props.screen.landscape,
            N = true,
            L = vi(i.current, i.partId, i.revisionId),
            T = h.isPanel,
            { pitchShift: I } = e,
            _ = n(
                () =>
                    !!r.current && !!r.current.tuning && r.current.tuning.map(t => t + I),
                [I, r]
            ),
            E = !i.isFailed && !r.isFailed && y,
            P = E && !p && !r.current,
            A = E && !p && r.current,
            M = E && !N && !P,
            B = E && !N && u.isPhone,
            D =
                !i.loading &&
                !!i.current &&
                t.isLoggedIn &&
                (t.isAdmin || 2233818 === t.profile.id);
        return a(
            "div",
            {
                className: N ? v.appPlus : v.appFree,
                id: "app",
                "data-isplaying": e.shouldPlay && e.canPlay,
            },
            a(cu, null),
            !S && a(su, { songUrl: L, isSmallScreen: C }),
            C && !k && a(ol, { track: f, layer: d, handleMixer: this.handleMixer }),
            a(
                "section",
                {
                    className: S ? v.tablatureFullscreen : v.tablature,
                    role: T ? "complementary" : "main",
                },
                B && a(iu, null),
                a(br, {
                    plusAccess: N,
                    isSmallScreen: C,
                    isFullscreen: S,
                    handleFullscreen: this.handleFullscreen,
                    handleNotation: this.handleNotation,
                }),
                a(hh, { meta: i, cursor: l, part: r, player: e, isDeleted: p }),
                a(C ? $r : Yr, {
                    shouldPlay: e.shouldPlay,
                    canPlay: e.canPlay || T,
                    partId: i.partId,
                    track: f,
                    device: u,
                    layer: d,
                    plusAccess: N,
                    loop: 0 !== e.position.loopEnd,
                    type: e.type,
                    speed: e.speed,
                    pitchShift: e.pitchShift,
                    pitchShiftAvailable: !r.current || !!r.current.tuning,
                    isCountin: e.isCountin,
                    handlePlay: this.handlePlay,
                    handleMixer: this.handleMixer,
                    handleSpeed: this.handleSpeed,
                    handleSolo: this.handleSolo,
                    handleMute: this.handleMute,
                    handleLoop: this.handleLoop,
                    handlePitchshift: this.handlePitchshift,
                    handlePrint: this.handlePrint,
                    handleCountin: this.handleCountin,
                    handleNotation: this.handleNotation,
                    handleMinimize: this.handleMinimize,
                    usedDrums: r.current && r.current.usedDrums,
                }),
                M &&
                a("section", { className: v.showroom }, a(au, { songId: i.songId })),
                a(F, null),
                a(Su, null),
                a(oh, null),
                P && a(Ao, null),
                A &&
                a(Po, {
                    part: r.current,
                    experiments: m,
                    isFullscreen: S,
                    isSmallScreen: C,
                    isLandscapeScreen: k,
                    plusAccess: N,
                    shouldPlay: e.shouldPlay,
                    showLayer: this.showLayer,
                    hideLayer: this.hideLayer,
                    width: c.available,
                    position: e.position,
                    moveCursor: this.moveCursor,
                    startLoopChange: this.startLoopChange,
                    finishLoopChange: this.finishLoopChange,
                    handlePitchshift: this.handlePitchshift,
                    showAnnotations: w,
                    showPitchshiftPopup: "plus_pitchshift" === d,
                    showPitchshiftLayer: "pitchshift" === d,
                    tuning: _,
                    layer: d,
                    isDesktop: u.isDesktop,
                    browserFamily: g.family,
                }),
                A &&
                a(
                    "footer",
                    { className: M ? v.footerWithAds : v.footer },
                    a(
                        "div",
                        { className: v.copyright, "aria-label": "copyright" },
                        "All content on this page is the property of the copyright owner of the original composition"
                    ),
                    a(
                        "div",
                        { className: v.tos, "aria-label": "terms of service" },
                        a(Un, { href: "/a/wa/about" }, "About"),
                        " | ",
                        a("a", { href: "/a/wa/privacy" }, "Privacy Policy"),
                        " | ",
                        a("a", { href: "/a/wa/terms" }, "Terms Of Service"),
                        " | ",
                        a("a", { href: "https://www.songsterr.com/blog/" }, "Blog"),
                        " | ",
                        a("a", { href: "/a/wa/tags" }, "Top Tags "),
                        this.props.device.hasCCPA && " | ",
                        this.props.device.hasCCPA &&
                        a(
                            "a",
                            {
                                href: "/a/wa/do-not-sell-my-personal-information",
                                rel: "nofollow",
                            },
                            "Do Not Sell My Personal Information"
                        )
                    )
                )
            ),
            !C &&
            D &&
            a(
                uu,
                { meta: i, isAdmin: t.isAdmin },
                a(ah, { user: t, isNewSound: "on" === m.new_sound })
            ),
            a(ku, null)
        );
    }
}
var xh = k(
    wh,
    "user",
    "player",
    "screen",
    "experiments",
    "device",
    "layer",
    "route",
    "cursor",
    "query",
    "meta",
    "part",
    "demo",
    "isDeleted",
    "browser"
);
class Sh {
    constructor(t, e) {
        Sh.prototype.__init.call(this), (this.events = {}), (this.state = e || {});
        for (const e of t) e && e(this);
        e || this.dispatch("@init", 1);
    }
    on(t, e) {
        return (
            (this.events[t] || (this.events[t] = [])).push(e),
            () => {
                this.events[t] = this.events[t].filter(t => t !== e);
            }
        );
    }
    __init() {
        this.dispatch = (t, ...e) => {
            const { events: s } = this,
                n = {};
            let i,
                o = !1;
            if (s[t])
                for (const a of s[t]) {
                    const t = a(this.state, ...e);
                    t &&
                        ("function" != typeof t.then
                            ? (Object.assign(n, t),
                                (o = !0),
                                (this.state = Object.assign({}, this.state, t)))
                            : (i || (i = []), i.push(t)));
                }
            return o && this.dispatch("@changed", n), i ? Promise.all(i) : void 0;
        };
    }
    get() {
        return this.state;
    }
}
const Ch = t => {
    !b &&
        t.on("@init", () => ({
            meta: {
                current: null,
                allowedByLicense: !0,
                songId: 0,
                partId: 0,
                revisionId: 0,
                isFailed: !1,
                isNotFound: !1,
                isNetworkFailed: !1,
                loading: null,
                wasFavoriteOnServerRender: !1,
            },
        })),
        t.on("route/change", (e, { route: s }) => {
            if (s && "tab" === s.page) {
                const e = +s.songId,
                    n = +s.partId,
                    i = s.revisionId ? +s.revisionId : null;
                !(async function (t, e, s, n) {
                    const i = new Wi();
                    try {
                        const o = t.get().meta,
                            a = o.loading;
                        if (a) {
                            if (e === a.songId && s === a.partId && n === a.revisionId)
                                return;
                            a.ac.abort();
                        }
                        const r = o.songId !== e,
                            l = o.partId !== s,
                            c = o.revisionId !== n;
                        if (!o.isFailed && o.current && !r && !l && !c)
                            return void (await t.dispatch("meta/load:done", {
                                songId: e,
                                revisionId: n,
                                partId: s,
                                current: o.current,
                            }));
                        if (
                            (await t.dispatch("meta/load:processing", {
                                songId: e,
                                partId: s,
                                revisionId: n,
                                songHasChanged: r,
                                partHasChanged: l,
                                revisionHasChanged: c,
                                ac: i,
                            }),
                                i.signal.aborted)
                        )
                            return;
                        let d = t.get().meta.current;
                        if (
                            (!d || d.songId !== e || (n && d.revisionId !== n)) &&
                            ((d = await oa(e, n, i.signal)), i.signal.aborted || !d)
                        )
                            return;
                        if (b && d.tracks && !d.tracks[s])
                            return void (await t.dispatch("navigate", vi(d)));
                        await t.dispatch("meta/load:done", {
                            songId: e,
                            revisionId: n,
                            partId: s,
                            current: d,
                        });
                    } catch (o) {
                        if (i.signal.aborted) return;
                        t.dispatch("meta/load:error", {
                            songId: e,
                            revisionId: n,
                            partId: s,
                            error: o,
                        });
                    }
                })(t, e, n, i);
            }
        }),
        t.on(
            "meta/load:processing",
            (t, { songId: e, partId: s, revisionId: n, ac: i }) => ({
                meta: Object.assign({}, t.meta, {
                    loading: { songId: e, partId: s, revisionId: n, ac: i },
                }),
            })
        ),
        t.on(
            "meta/load:done",
            (t, { songId: e, partId: s, revisionId: n, current: i }) => ({
                meta: Object.assign({}, t.meta, {
                    current: i,
                    allowedByLicense: Vi(i, t.device.country),
                    songId: e,
                    partId: s,
                    revisionId: n,
                    loading: null,
                    isFailed: !1,
                    isNetworkFailed: !1,
                    isNotFound: !1,
                }),
            })
        ),
        t.on(
            "meta/load:error",
            (t, { songId: e, partId: s, revisionId: n, error: i }) => ({
                meta: Object.assign({}, t.meta, {
                    current: null,
                    allowedByLicense: !0,
                    songId: e,
                    partId: s,
                    revisionId: n,
                    isFailed: !0,
                    isNetworkFailed: i instanceof Ai && 0 === i.status,
                    isNotFound:
                        i instanceof Ai && (404 === i.status || 400 === i.status),
                    loading: null,
                }),
            })
        ),
        b &&
        t.on("meta/load:error", (t, { error: e }) => {
            "Sentry" in window &&
                "function" == typeof window.Sentry.captureException &&
                window.Sentry.captureException(e),
                console.error(e);
        }),
        t.on("meta/setWasFavoriteOnServerRender", (t, e) => ({
            meta: Object.assign({}, t.meta, { wasFavoriteOnServerRender: e }),
        }));
},
    kh = t => {
        !b &&
            t.on("@init", () => ({
                part: {
                    current: null,
                    songId: 0,
                    partId: 0,
                    revisionId: 0,
                    isFailed: !1,
                    isNotFound: !1,
                    isNetworkFailed: !1,
                    loading: null,
                },
            })),
            b &&
            t.on("meta/load:done", async (e, { partId: s, current: n }) => {
                if (!Vi(n, e.device.country)) return;
                const i = n.songId,
                    o = n.revisionId,
                    a = new Wi();
                try {
                    const r = e.part.loading;
                    if (r) {
                        if (i === r.songId && s === r.partId && o === r.revisionId)
                            return;
                        r.ac.abort();
                    }
                    if (
                        !e.part.isFailed &&
                        e.part.current &&
                        i === e.part.songId &&
                        s === e.part.partId &&
                        o === e.part.revisionId
                    )
                        return void t.dispatch("part/load:done", {
                            songId: i,
                            partId: s,
                            revisionId: o,
                            current: e.part.current,
                        });
                    await t.dispatch("part/load:processing", {
                        songId: i,
                        partId: s,
                        revisionId: o,
                        ac: a,
                    });
                    const l = [aa(i, o, s, n.image, a.signal)];
                    (n.image && !n.lyrics) ||
                        l.push(
                            (async function (t, e, s, n) {
                                const i = "lyrics_".concat(e, "_").concat(s || ""),
                                    o = await ta(i);
                                if (o) return o;
                                const a = await Ui(
                                    n =>
                                        s
                                            ? "https://"
                                                .concat(na[n % na.length], ".cloudfront.net/")
                                                .concat(t, "/")
                                                .concat(e, "/")
                                                .concat(s, "/lyrics.json")
                                            : "https://"
                                                .concat(
                                                    ia[n % ia.length],
                                                    ".cloudfront.net/lyrics/"
                                                )
                                                .concat(e),
                                    0,
                                    n
                                );
                                return !a || n.aborted ? null : (await ea(i, a), a);
                            })(i, o, n.image, a.signal)
                        );
                    const [c, d] = await Promise.all(l);
                    if (!c || a.signal.aborted) return;
                    await t.dispatch("part/load:raw", {
                        songId: i,
                        partId: s,
                        revisionId: o,
                        rawPart: c,
                        rawLyrics: d,
                        signal: a.signal,
                    });
                } catch (e) {
                    if (a.signal.aborted) return;
                    t.dispatch("part/load:error", {
                        songId: i,
                        partId: s,
                        revisionId: o,
                        error: e,
                    });
                }
            }),
            t.on("meta/load:processing", (t, { songHasChanged: e }) => {
                if (e) return { part: Object.assign({}, t.part, { current: null }) };
            }),
            t.on(
                "meta/load:processing",
                (t, { songId: e, partId: s, revisionId: n }) => {
                    const i = t.part.loading;
                    if (i && (e !== i.songId || s !== i.partId || n !== i.revisionId))
                        return (
                            i.ac.abort(),
                            { part: Object.assign({}, t.part, { loading: null }) }
                        );
                }
            ),
            t.on(
                "part/load:processing",
                (t, { songId: e, partId: s, revisionId: n, ac: i }) => ({
                    part: Object.assign({}, t.part, {
                        loading: { songId: e, partId: s, revisionId: n, ac: i },
                    }),
                })
            ),
            t.on(
                "part/load:raw",
                (
                    e,
                    {
                        songId: s,
                        partId: n,
                        revisionId: i,
                        rawPart: o,
                        rawLyrics: a,
                        signal: r,
                    }
                ) => {
                    const l = e.experiments,
                        c = {
                            useStdDrumNotation: "drop" !== l.drum_standard_notation,
                            useGenericTimeline: "on" === l.new_sound,
                        },
                        [d, u] = (function (t, e = [], s = de) {
                            const n = Object.assign({}, de, s),
                                i = n.useStdDrumNotation,
                                o = n.useBendPointsMerge,
                                a = n.useGenericTimeline;
                            console.log(
                                "Inflate: using ".concat(
                                    a ? "generic" : "original",
                                    " timeline and timings!"
                                )
                            );
                            const r = new _t(t, 0, e, i),
                                l = new lt(0, r, 0),
                                c = a
                                    ? (function (t) {
                                        const e = [];
                                        let s = !1,
                                            n = !1,
                                            i = !1,
                                            o = !1;
                                        for (const a of t) {
                                            a.tripletFeel && (s = !0);
                                            for (const t of a.voices)
                                                if (!t.rest)
                                                    for (const s of t.beats) {
                                                        const { tuplet: t, duration: a, notes: r } = s;
                                                        if (
                                                            (t && (e.includes(t) || e.push(t)),
                                                                a && a.length)
                                                        ) {
                                                            const t = pt(a);
                                                            if (!Dt(t) || t > 32768) continue;
                                                            e.includes(t) || e.push(t);
                                                            for (const t of r)
                                                                t.dead && (n = !0),
                                                                    (t.bend || t.slide) && (i = !0),
                                                                    t.tremolo && (o = !0);
                                                        }
                                                    }
                                        }
                                        s && e.push(24, 48),
                                            n && e.push(128),
                                            i && e.push(60),
                                            o && e.push(8, 16, 32, 64);
                                        const a = Math.max(4 * Math.max(...e), 32);
                                        let r = e.reduce(Ot, a) || 128;
                                        for (; r < 1e4;) r *= 2;
                                        return r;
                                    })(r.source.measures)
                                    : null,
                                d = r.voices || 1,
                                u = new Array(d);
                            for (let t = 0; t < d; t++)
                                u[t] = {
                                    ties: new Array(r.strings),
                                    slides: new Array(r.strings),
                                    slurs: new Array(r.strings),
                                    bends: new Map(),
                                    prevBeat: null,
                                    prevNoteOnString: new Map(),
                                };
                            let h = [4, 4],
                                p = null;
                            const m = t.measures.length;
                            for (let s = 0; s < m; s++) {
                                const n = t.measures[s],
                                    i = new ut(n, s, h, l.layout);
                                (r.measures[s] = i),
                                    i.hasSignature && (h = i.signature),
                                    le(c, i, r.automations.tempo),
                                    (p = oe(i, p));
                                const a = n.voices.length;
                                for (let t = 0; t < a; t++) {
                                    const e = n.voices[t],
                                        s = new Mt(e, t);
                                    if (((i.voices[t] = s), 0 !== t && e.rest)) continue;
                                    i.rhythmLines += i.rest || s.hasSameRhythm ? 0 : 1;
                                    const a = u[t];
                                    let l = 0;
                                    const d = e.beats && e.beats.length ? e.beats : ae;
                                    for (let e = 0; e < d.length; e++) {
                                        const n = d[e];
                                        let u = i.beatsLayoutsByTime.get(l);
                                        u ||
                                            ((u = new W(i.layout)), i.beatsLayoutsByTime.set(l, u));
                                        const h = new X(n, e, u);
                                        a.prevBeat &&
                                            ((a.prevBeat.nextBeat = h), (h.prevBeat = a.prevBeat)),
                                            (a.prevBeat = h),
                                            (s.beats[e] = h),
                                            (h.voice = t),
                                            u.beats.unshift(h),
                                            (l += c ? ft(n.duration, c) : mt(n.duration));
                                        const p = [];
                                        for (let t = 0; t < r.strings; t++) p[t] = !1;
                                        const m = n.notes.length;
                                        for (let t = 0; t < m; t++) {
                                            const e = n.notes[t],
                                                s = new Nt(e, h, t, o);
                                            r.usedDrums && (s.string = kt(s.fret, r.isDrumStdOn)),
                                                (h.notes[t] = s),
                                                (p[s.string] = !0);
                                        }
                                        if (0 === h.index)
                                            for (let t = 0; t < r.strings; t++)
                                                if (!1 === p[t]) {
                                                    const e = h.notes.length,
                                                        s = new Nt(
                                                            Object.assign({}, re, { string: t }),
                                                            h,
                                                            e,
                                                            o
                                                        );
                                                    (s.bogus = !0), (h.notes[e] = s);
                                                }
                                        for (let e = 0; e < h.notes.length; e++) {
                                            const s = h.notes[e];
                                            ie(s, a.prevNoteOnString),
                                                ee(s, h, i, a.bends),
                                                te(s, h, i, a.slides),
                                                $t(s, h, i, a.slurs),
                                                ne(s, h, i, a.ties),
                                                s.rest || s.bogus
                                                    ? 0 === t && Kt(h)
                                                    : (Qt(h, s), Jt(r, s));
                                        }
                                        se(0, 0, a.bends);
                                        const g = h.notes.find(t => t.harmonic);
                                        (h.harmonic = g ? g.harmonic : void 0),
                                            !r.withChords && h.chord && (r.withChords = !0);
                                    }
                                    i.duration = Math.max(i.duration, l);
                                }
                                if (e) {
                                    const t = e[s];
                                    if (t) {
                                        const e = new Mt(null, i.voices.length);
                                        e.lyrics = !0;
                                        let s = 0;
                                        const n = t.beats.length;
                                        for (let o = 0; o < n; o++) {
                                            const n = t.beats[o];
                                            let a = i.beatsLayoutsByTime.get(s);
                                            a ||
                                                ((a = new W(i.layout)), i.beatsLayoutsByTime.set(s, a));
                                            const r = new X(n, o, a);
                                            (e.beats[o] = r),
                                                a.beats.unshift(r),
                                                (s += c ? ft(r.duration, c) : mt(r.duration));
                                        }
                                        n &&
                                            ((i.duration = Math.max(i.duration, s)),
                                                i.voices.unshift(e));
                                    }
                                }
                                ce(c, i, e);
                            }
                            r.usedDrums &&
                                !r.isDrumStdOn &&
                                (function (t) {
                                    for (const e of vt) {
                                        let s = 0;
                                        for (const n of e) t.has(n.key) && s++;
                                        if (s > 1)
                                            for (const s of e)
                                                t.set(
                                                    s.key,
                                                    Object.assign({}, s.value, { fret: s.key })
                                                );
                                    }
                                })(r.usedDrums);
                            try {
                                const t = (function (t, e) {
                                    const s = (function (t) {
                                        const e = [];
                                        let s = null,
                                            n = 0,
                                            i = !1,
                                            o = 0;
                                        for (let a = 0; a < t.length;) {
                                            if ((o++, o > 1e5)) throw new Error("Watchdog");
                                            const r = t[a];
                                            if (
                                                (e.push(r),
                                                    !r.reprise ||
                                                    r.reprise.startIndex !== r.index ||
                                                    (s && s.startIndex === r.index) ||
                                                    ((s = r.reprise), (n = 1)),
                                                    s)
                                            ) {
                                                if (r.repeat && n < r.repeat)
                                                    (a = s.startIndex), n++, (i = !1);
                                                else if ((a++, a < t.length)) {
                                                    const e = t[a];
                                                    if (e.alternateEnding) {
                                                        let t = !1;
                                                        for (const s of e.alternateEnding.alternateEnding)
                                                            if (s === n) {
                                                                t = !0;
                                                                break;
                                                            }
                                                        t
                                                            ? (i = !0)
                                                            : i
                                                                ? ((a = s.startIndex), n++, (i = !1))
                                                                : ((a = s.getEnding(n) || s.endIndex + 1),
                                                                    (i = !0));
                                                    }
                                                    a > s.endIndex && ((s = !1), (n = 0));
                                                }
                                            } else a++;
                                        }
                                        return e;
                                    })(e),
                                        n = new Map(),
                                        i = [],
                                        o = [];
                                    let a = dt,
                                        r = 960,
                                        l = 960,
                                        c = 0,
                                        d = 0;
                                    for (const e of s) {
                                        const s = e.beatsLayoutsByTime,
                                            u = e.tempoLayoutsByTime,
                                            h = t ? ft(e.signature, t) : mt(e.signature),
                                            p = e.beatsLayoutsTimes || [];
                                        let m = s.get(0),
                                            g = c;
                                        const f = c,
                                            y = d;
                                        if (m) {
                                            const e = d - 2 * c;
                                            m.shifts.push(e),
                                                i.push(e),
                                                m.occurrences.push(c),
                                                n.set(c, m);
                                            const v = u.get(0);
                                            v &&
                                                ((a = v.tempo),
                                                    o.push({ timestamp: c, tempo: a }),
                                                    (r = Math.floor(Rt(a))),
                                                    (l = Math.floor(2 * Rt(a))));
                                            for (let e = 1; e < p.length; e++) {
                                                const o = p[e],
                                                    u = s.get(o);
                                                if (u)
                                                    if (o < h) {
                                                        if (t) {
                                                            const e = jt(o, t, a.bpm);
                                                            (c = f + e), (d = y + 2 * e);
                                                        } else {
                                                            const t = gt(o);
                                                            (c = f + zt(Ft(t, r))), (d = y + zt(Ft(t, l)));
                                                        }
                                                        m.duration = c - g;
                                                        const e = d - 2 * c;
                                                        m.shifts.push(e),
                                                            i.push(e),
                                                            u.occurrences.push(c),
                                                            n.set(c, u),
                                                            (m = u),
                                                            (g = c);
                                                    } else u.occurrences.push(c);
                                            }
                                        }
                                        if (t) {
                                            const e = jt(h, t, a.bpm);
                                            (c = f + e), (d = y + 2 * e);
                                        } else {
                                            const t = gt(h);
                                            (c = f + zt(Ft(t, r))), (d = y + zt(Ft(t, l)));
                                        }
                                        m && (m.duration = c - g);
                                    }
                                    return {
                                        timeline: n,
                                        tempos: o,
                                        shifts: i,
                                        progression: s.map(t => t.source.index),
                                    };
                                })(c, r.measures);
                                (r.timeline = t.timeline),
                                    (r.tempos = t.tempos),
                                    (r.shifts = t.shifts),
                                    (r.tpqn = c),
                                    (r.progression = t.progression),
                                    (r.timestamps = [...r.timeline.keys()]);
                            } catch (t) {
                                return [t, r];
                            }
                            return [null, r];
                        })(o, a, c);
                    r.aborted ||
                        (d
                            ? t.dispatch("part/load:error", {
                                songId: s,
                                partId: n,
                                revisionId: i,
                                error: d,
                            })
                            : t.dispatch("part/load:done", {
                                songId: s,
                                partId: n,
                                revisionId: i,
                                current: u,
                            }));
                }
            ),
            t.on(
                "part/load:done",
                (t, { songId: e, partId: s, revisionId: n, current: i }) => ({
                    part: Object.assign({}, t.part, {
                        current: i,
                        songId: e,
                        partId: s,
                        revisionId: n,
                        isFailed: !1,
                        isNetworkFailed: !1,
                        isNotFound: !1,
                        loading: null,
                    }),
                })
            ),
            b &&
            t.on("part/load:done", t => {
                try {
                    const e = new Date(),
                        s = vi(t.meta.current, t.meta.partId, t.meta.revisionId);
                    e.setTime(e.getTime() + 7776e6),
                        (document.cookie = "lastSeenTrack="
                            .concat(s, ";expires=")
                            .concat(e.toUTCString(), ";path=/"));
                } catch (t) {
                    console.error(t);
                }
            }),
            t.on(
                "part/load:error",
                (t, { songId: e, partId: s, revisionId: n, error: i }) => ({
                    part: Object.assign({}, t.part, {
                        current: null,
                        songId: e,
                        partId: s,
                        revisionId: n,
                        isFailed: !0,
                        isNetworkFailed: i instanceof Ai && 0 === i.status,
                        isNotFound:
                            i instanceof Ai && (404 === i.status || 400 === i.status),
                        loading: null,
                    }),
                })
            ),
            b &&
            t.on("part/load:error", (t, { error: e }) => {
                "Sentry" in window &&
                    "function" == typeof window.Sentry.captureException &&
                    window.Sentry.captureException(e),
                    console.error(e);
            });
    },
    Nh = t => (t < 100 ? 50 : 100),
    Lh = { solo: "s", focus: "f", mute: "m" };
async function Th(t, e, s, n, i) {
    const o = t.get(),
        a = o.meta.current;
    if (!a) return;
    const r = Nh(o.player.speed),
        l = o.player.type,
        c = o.player.audio,
        d = !(null === c.context || !window.Worker);
    let u = a.audio;
    if (
        (("on" === i || (!i && o.isNextSound && a.nextAudio)) &&
            (u = "next/".concat(a.nextAudio)),
            c && u && d && Ni)
    ) {
        const i = "opus",
            o = ""
                .concat(e, "/")
                .concat(n, "/")
                .concat(u, "/")
                .concat(r, "/")
                .concat(Lh[l], "/")
                .concat(s, ".")
                .concat(i);
        t.dispatch("player/open", { url: o });
    }
}
const Ih = t => {
    b &&
        t.on("meta/load:done", (e, { songId: s, partId: n, current: i }) => {
            Vi(i, e.device.country) && Th(t, s, n, i.revisionId);
        });
},
    _h = t => ({
        user: {
            profile: t,
            hasPlus: true,
            isAdmin: t.admin,
            hasSubscription: true,
            isLoggedIn: !0,
        },
    }),
    Eh = () => ({
        user: {
            profile: null,
            hasPlus: true,
            hasSubscription: !1,
            isAdmin: true,
            isModerator: !1,
            isLoggedIn: false,
        },
    });
function Ph(t, e) {
    return Object.assign({}, t.user.profile, {
        subscription: e.subscription,
        plan: "PLUS",
    });
}
const Ah = t => {
    !b && t.on("@init", Eh),
        !b && t.on("user/init", (t, e) => _h(e)),
        t.on("user/signIn", (t, e) => _h(e)),
        t.on("user/googleSignIn", (t, e) => _h(e.profile)),
        t.on("user/signUp", (t, e) => _h(e)),
        t.on("user/profile", (t, e) => _h(e)),
        t.on("user/signOut", t => ({
            user: {
                profile: null,
                hasPlus: !1,
                hasSubscription: !1,
                isAdmin: !1,
                isModerator: !1,
                isLoggedIn: !1,
            },
        })),
        t.on("user/recoverPassword", (t, e) => _h(e)),
        t.on("user/subscribePlus", (t, e) => {
            const s = Ph(t, e);
            return _h(s);
        }),
        t.on("user/cancelPlus", (t, e) => _h(e)),
        t.on("user/deactivate", () => ({
            user: {
                profile: null,
                hasPlus: 1,
                hasSubscription: !1,
                isAdmin: !1,
                isModerator: !1,
                isLoggedIn: 1,
            },
        }));
},
    Mh = t => ({
        isSmall: "small" === t,
        isMedium: "medium" === t,
        isLarge: "large" === t,
        isWide: "wide" === t,
    }),
    Bh = ts("large");
function Dh(t, e) {
    return {
        screen: Object.assign(
            {},
            t.screen,
            {
                fullscreen: e || !1,
                available: $e(t.screen.screen, t.screen.viewport, e || !1),
            },
            Mh(t.screen.screen)
        ),
    };
}
const Oh = t => {
    !b &&
        t.on("@init", () => ({
            screen: {
                screen: "large",
                viewport: Bh,
                available: $e("large", Bh),
                isSmall: !1,
                isMedium: !1,
                isLarge: !1,
                isWide: !1,
                fullscreen: !1,
                landscape: !1,
            },
        })),
        t.on(
            "screen/resize",
            (t, { screen: e, landscape: s, available: n, viewport: i }) => ({
                screen: Object.assign(
                    {},
                    t.screen,
                    { screen: e, landscape: s, viewport: i, available: n },
                    Mh(e)
                ),
            })
        ),
        t.on("screen/toggleFullscreen", (t, { enabled: e }) => Dh(t, e)),
        b && t.on("route/change", t => Dh(t)),
        !b &&
        t.on("device/init", (t, { device: e }) => {
            const s = (t => {
                switch (t) {
                    case "phone":
                        return "small";
                    case "tablet":
                        return "medium";
                    default:
                        return "large";
                }
            })(e.type),
                n = ts(s);
            return {
                screen: Object.assign(
                    {},
                    t.screen,
                    {
                        screen: s,
                        landscape: n.width / n.height > 13 / 9,
                        viewport: n,
                        available: $e(s, n),
                    },
                    Mh(s)
                ),
            };
        });
},
    jh = t => {
        !b && t.on("@init", () => ({ consent: { profiling: void 0, dnt: !1 } })),
            !b &&
            t.on(
                "consent/init",
                (t, { dntHeader: e, profilingCookie: s, isGDPRCountry: n }) => {
                    let i;
                    return (
                        n ? ("yes" === s ? (i = !0) : "no" === s && (i = !1)) : (i = !0),
                        { consent: { profiling: i, dnt: "1" === e } }
                    );
                }
            ),
            t.on("consent/toggle", (t, e) => {
                const s = new Date();
                return (
                    s.setTime(s.getTime() + 63072e6),
                    (document.cookie = "consent="
                        .concat(e ? "yes" : "no", ";expires=")
                        .concat(s.toUTCString(), ";path=/")),
                    "on" !== t.experiments.googlefc &&
                    ((window.adsbygoogle.pauseAdRequests = 0),
                        (window.adsbygoogle.requestNonPersonalizedAds = e ? 0 : 1)),
                    { consent: { profiling: e, dnt: t.consent.dnt } }
                );
            });
    };
function Rh(t, e) {
    const s = document.getElementById(e);
    if (!s) return;
    const n = s.getBoundingClientRect(),
        { marginTop: i, marginBottom: o } = getComputedStyle(s),
        a = n.height + parseInt(i) + parseInt(o);
    if (n.top + a < 0) {
        const e = document.getElementById(t);
        e && e.scroll(0, a);
    }
}
function zh(t) {
    let e,
        s = t[0],
        n = 1;
    for (; n < t.length;) {
        const i = t[n],
            o = t[n + 1];
        if (
            ((n += 2), ("optionalAccess" === i || "optionalCall" === i) && null == s)
        )
            return;
        "access" === i || "optionalAccess" === i
            ? ((e = s), (s = o(s)))
            : ("call" !== i && "optionalCall" !== i) ||
            ((s = o((...t) => s.call(e, ...t))), (e = void 0));
    }
    return s;
}
const Fh = t => {
    async function e(e, s) {
        if (s && !e.artist.songs.hasMore) return;
        const n = e.artist.id,
            i = e.artist.pattern,
            o = e.artist.filters;
        let a = 0,
            r = null;
        s &&
            e.artist.songs.pattern === e.artist.pattern &&
            xl(e.artist.songs.filters, e.artist.filters) &&
            ((r = e.artist.songs.list), (a = r.length));
        const l = new Wi();
        try {
            t.dispatch("artist/load:processing", {
                id: n,
                pattern: i,
                filters: o,
                ac: l,
            });
            let s = await (function (t, e, s, n, i = 500, o = 0) {
                return Go("/api/artist/".concat(t, "/songs"), e, s, n, i, o);
            })(n, i, vl(o), l.signal, 50, a);
            if (l.signal.aborted) return;
            const c = e.artist.defaultInstrument;
            fl(o) || (s = wl(s, c));
            const d = (r ? r.length : 0) + s.length,
                u = 50 === s.length && d < 1e3;
            t.dispatch("artist/load:done", {
                id: n,
                songs: r ? [...r, ...s] : s,
                hasMore: u,
                pattern: i,
                filters: o,
                defaultInstrument: c,
            }),
                b &&
                !r &&
                requestAnimationFrame(() => {
                    Rh("panel-artist", "top");
                });
        } catch (e) {
            if (l.signal.aborted) return;
            console.error(e),
                t.dispatch("artist/load:error", {
                    id: n,
                    error: e,
                    pattern: i,
                    filters: o,
                });
        }
    }
    !b &&
        t.on("@init", () => ({
            artist: {
                id: 0,
                artists: {},
                pattern: "",
                defaultInstrument: 24,
                songs: {
                    id: 0,
                    list: [],
                    hasMore: !1,
                    pattern: "",
                    defaultInstrument: 24,
                    filters: ll,
                },
                filters: ll,
                loading: null,
            },
        }));
    const s = t => e(t, !1);
    t.on(
        "artist/load:processing",
        (t, { id: e, pattern: s, filters: n, ac: i }) => {
            const o = t.artist.loading;
            o && o.ac.abort();
            let a = t.artist.songs;
            return (
                a.id !== e &&
                (a = {
                    id: e,
                    list: [],
                    defaultInstrument: 24,
                    hasMore: !0,
                    pattern: s,
                    filters: n,
                }),
                {
                    artist: Object.assign({}, t.artist, {
                        songs: a,
                        loading: { id: e, filters: n, pattern: s, ac: i },
                    }),
                }
            );
        }
    ),
        t.on(
            "artist/load:done",
            (
                t,
                {
                    id: e,
                    songs: s,
                    hasMore: n,
                    pattern: i,
                    filters: o,
                    defaultInstrument: a,
                }
            ) => {
                const r = t.artist.loading;
                if (r && r.id === e && xl(r.filters, o) && r.pattern === i)
                    return {
                        artist: Object.assign({}, t.artist, {
                            songs: {
                                id: e,
                                list: s,
                                defaultInstrument: a,
                                hasMore: n,
                                pattern: i,
                                filters: o,
                            },
                            artists: Object.assign({}, t.artist.artists, {
                                [e]: s.length ? s[0].artist : t.artist.artists[e],
                            }),
                            loading: null,
                        }),
                    };
            }
        ),
        t.on(
            "artist/load:error",
            (t, { id: e, error: s, pattern: n, filters: i }) => {
                const o = t.artist.loading;
                if (o && o.id === e && xl(o.filters, i) && o.pattern === n)
                    return { artist: Object.assign({}, t.artist, { loading: null }) };
            }
        ),
        t.on("meta/load:done", (t, { current: e }) => ({
            artist: Object.assign({}, t.artist, {
                artists: Object.assign({}, t.artist.artists, {
                    [e.artistId]: e.artist,
                }),
            }),
        })),
        t.on("artist/filter", (t, { id: e, pattern: s, filters: n }) => ({
            artist: Object.assign({}, t.artist, { pattern: s, filters: n, id: e }),
        })),
        t.on("artist/filter", s),
        t.on("songs/default", (t, { instrumentId: e }) => {
            const s = bl(e);
            let n = t.artist.songs.list;
            return (
                fl(t.artist.songs.filters) ||
                t.artist.songs.defaultInstrument === s ||
                (n = wl(t.artist.songs.list, s)),
                {
                    artist: Object.assign({}, t.artist, {
                        songs: Object.assign({}, t.artist.songs, {
                            list: n,
                            defaultInstrument: s,
                        }),
                        defaultInstrument: s,
                    }),
                }
            );
        }),
        b &&
        (t.on("artist/more", t => e(t, !0)),
            t.on("artist/filter/pattern", (t, e) => ({
                artist: Object.assign({}, t.artist, { pattern: e }),
            })),
            t.on("artist/filter/pattern", s),
            t.on("artist/filter/difficulty", (t, e) => ({
                artist: Object.assign({}, t.artist, {
                    filters: Object.assign({}, t.artist.filters, { difficulty: e }),
                }),
            })),
            t.on("artist/filter/difficulty", s),
            t.on("artist/filter/instrument", (t, e) => ({
                artist: Object.assign({}, t.artist, {
                    filters: Object.assign({}, t.artist.filters, { instrument: e }),
                }),
            })),
            t.on("artist/filter/instrument", s),
            t.on("artist/filter/tuning", (t, { instrument: e, tuning: s }) => ({
                artist: Object.assign({}, t.artist, {
                    filters: ml(t.artist.filters, e, s),
                }),
            })),
            t.on("artist/filter/tuning", s),
            t.on("artist/filter/reset", t => ({
                artist: Object.assign({}, t.artist, { filters: ll }),
            })),
            t.on("artist/filter/reset", s),
            t.on("route/change", (e, { route: s, query: n }) => {
                if ("artist" === zh([s, "optionalAccess", t => t.page])) {
                    const i = +s.artistId,
                        o = zh([n, "optionalAccess", t => t.pattern]) || "",
                        a = {
                            instrument: zh([n, "optionalAccess", t => t.inst])
                                ? nr(n.inst)
                                : "ALL INSTRUMENTS",
                            tunings: e.artist.filters.tunings,
                            difficulty: e.artist.filters.difficulty,
                        };
                    (e.artist.songs.list.length &&
                        e.artist.songs.id === i &&
                        e.artist.songs.pattern === o &&
                        xl(e.artist.songs.filters, a)) ||
                        t.dispatch("artist/filter", { id: i, pattern: o, filters: a });
                }
            }));
},
    Hh = t => {
        !b && t.on("experiments/init", (t, e) => ({ experiments: e }));
    };
async function qh(t, e) {
    try {
        t("favorites/load:processing"),
            t(
                "favorites/load:done",
                await (async function (t) {
                    const e =
                        !b && t ? { headers: { Cookie: t } } : { credentials: "include" },
                        s = await fetch("/api/favorites", e);
                    Bi(s);
                    const n = await s.json();
                    return Vo(qo(n));
                })(e)
            );
    } catch (e) {
        console.error(e), t("favorites/load:error", e);
    } finally {
        t("meta/setWasFavoriteOnServerRender", void 0);
    }
}
const Uh = (t, e) => {
    const s = t.findIndex(t => t.songId === e);
    return t.slice(0, s).concat(t.slice(s + 1));
},
    Vh = (t, e) => qo([...t, e]),
    Gh = t => {
        !b &&
            t.on("@init", () => ({
                favorites: {
                    loading: !1,
                    pattern: "",
                    favorites: [],
                    actionId: "",
                    filters: ll,
                },
            })),
            t.on("user/signIn", async e => qh(t.dispatch, void 0)),
            t.on("user/googleSignIn", async e => qh(t.dispatch, void 0)),
            t.on("favorites/add", async (e, { songId: s, song: n }) => {
                const i = ve();
                try {
                    t.dispatch("favorites/add:processing", {
                        songId: s,
                        song: n,
                        actionId: i,
                    }),
                        await (async function (t) {
                            const e = "/api/favorites/".concat(t);
                            Bi(await fetch(e, { method: "put", credentials: "include" }));
                        })(s),
                        t.dispatch("favorites/add:done", {
                            songId: s,
                            song: n,
                            actionId: i,
                        });
                } catch (e) {
                    console.error(e),
                        t.dispatch("favorites/add:error", {
                            songId: s,
                            song: n,
                            actionId: i,
                        });
                }
            }),
            t.on("favorites/add:processing", (t, { song: e, actionId: s }) => ({
                favorites: Object.assign({}, t.favorites, {
                    favorites: Vh(t.favorites.favorites, e),
                    actionId: s,
                    loading: !0,
                }),
            })),
            t.on("favorites/add:done", (t, { actionId: e }) =>
                t.favorites.actionId === e
                    ? {
                        favorites: Object.assign({}, t.favorites, {
                            actionId: "",
                            loading: !1,
                        }),
                    }
                    : null
            ),
            t.on("favorites/add:error", (t, { songId: e, actionId: s }) =>
                t.favorites.actionId === s
                    ? {
                        favorites: Object.assign({}, t.favorites, {
                            favorites: Uh(t.favorites.favorites, e),
                            actionId: "",
                            loading: !1,
                        }),
                    }
                    : null
            ),
            t.on("favorites/delete", async (e, s) => {
                const n = ve(),
                    i = e.favorites.favorites.find(t => t.songId === s);
                if (i)
                    try {
                        t.dispatch("favorites/delete:processing", {
                            songId: s,
                            song: i,
                            actionId: n,
                        }),
                            await (async function (t) {
                                const e = "/api/favorites/".concat(t);
                                Bi(
                                    await fetch(e, { method: "delete", credentials: "include" })
                                );
                            })(s),
                            t.dispatch("favorites/delete:done", {
                                songId: s,
                                song: i,
                                actionId: n,
                            });
                    } catch (e) {
                        console.error(e),
                            t.dispatch("favorites/delete:error", {
                                songId: s,
                                song: i,
                                actionId: n,
                            });
                    }
            }),
            t.on("favorites/delete:processing", (t, { songId: e, actionId: s }) => ({
                favorites: Object.assign({}, t.favorites, {
                    favorites: Uh(t.favorites.favorites, e),
                    actionId: s,
                    loading: !0,
                }),
            })),
            t.on("favorites/delete:done", (t, { actionId: e }) =>
                t.favorites.actionId === e
                    ? {
                        favorites: Object.assign({}, t.favorites, {
                            actionId: "",
                            loading: !1,
                        }),
                    }
                    : null
            ),
            t.on("favorites/delete:error", (t, { song: e, actionId: s }) =>
                t.favorites.actionId === s
                    ? {
                        favorites: Object.assign({}, t.favorites, {
                            favorites: Vh(t.favorites.favorites, e),
                            actionId: "",
                            loading: !1,
                        }),
                    }
                    : null
            ),
            t.on("favorites/load:processing", t => ({
                favorites: Object.assign({}, t.favorites, { loading: !0 }),
            })),
            t.on("favorites/load:done", (t, e) => ({
                favorites: Object.assign({}, t.favorites, {
                    favorites: e,
                    actionId: "",
                    loading: !1,
                }),
            })),
            t.on("favorites/load:error", t => ({
                favorites: Object.assign({}, t.favorites, {
                    favorites: [],
                    loading: !1,
                }),
            })),
            t.on("favorites/filter", (t, e) => ({
                favorites: Object.assign({}, t.favorites, { pattern: e }),
            })),
            t.on("user/signOut", t => ({
                favorites: Object.assign({}, t.favorites, {
                    favorites: [],
                    pattern: "",
                    actionId: "",
                }),
            })),
            t.on("favorites/filter/difficulty", (t, e) => ({
                favorites: Object.assign({}, t.favorites, {
                    filters: hl(t.favorites.filters, e),
                }),
            })),
            t.on("favorites/filter/instrument", (t, e) => ({
                favorites: Object.assign({}, t.favorites, {
                    filters: pl(t.favorites.filters, e),
                }),
            })),
            t.on("favorites/filter/tuning", (t, { instrument: e, tuning: s }) => ({
                favorites: Object.assign({}, t.favorites, {
                    filters: ml(t.favorites.filters, e, s),
                }),
            })),
            t.on("favorites/filter/reset", t => ({
                favorites: Object.assign({}, t.favorites, { filters: ll }),
            }));
    },
    Xh = (t, e) => {
        const s = t.findIndex(t => t.id === e);
        return t.slice(0, s).concat(t.slice(s + 1));
    };
async function Wh(t, e) {
    try {
        t("setlists/load:processing"),
            t(
                "setlists/load:done",
                await (async function (t) {
                    const e =
                        !b && t ? { headers: { Cookie: t } } : { credentials: "include" },
                        s = await fetch("/api/setlists", e);
                    return (
                        Bi(s),
                        (await s.json()).map(t => ({
                            name: t.name,
                            id: t.id,
                            songs: Vo(qo(t.songs)),
                        }))
                    );
                })(e)
            );
    } catch (e) {
        console.error(e), t("setlists/load:error", e);
    }
}
async function Yh(t, e) {
    try {
        t("setlists/create:processing", { name: e }),
            t(
                "setlists/create:done",
                (
                    await (async function (t) {
                        const e = { name: t },
                            s = await Mi("/api/setlist", e);
                        return Bi(s), s.json();
                    })(e)
                ).id
            );
    } catch (e) {
        console.error(e), t("setlists/create:error");
    }
}
const Zh = t => {
    !b &&
        t.on("@init", () => ({
            setlists: {
                loading: !1,
                activeSetId: void 0,
                setlists: [],
                markedIds: [],
                createSetForm: void 0,
            },
        })),
        t.on("user/signIn", async e => Wh(t.dispatch, void 0)),
        t.on("user/googleSignIn", async e => Wh(t.dispatch, void 0)),
        t.on("user/signOut", t => ({
            setlists: Object.assign({}, t.setlists, {
                setlists: [],
                activeSetId: void 0,
            }),
        })),
        t.on("setlists/load:processing", t => ({
            setlists: Object.assign({}, t.setlists, { loading: !0 }),
        })),
        t.on("setlists/load:done", (t, e) => ({
            setlists: Object.assign({}, t.setlists, { setlists: e, loading: !1 }),
        })),
        t.on("setlists/load:error", t => ({
            setlists: Object.assign({}, t.setlists, { setlists: [], loading: !1 }),
        })),
        t.on("setlists/select", (t, e) => ({
            setlists: Object.assign({}, t.setlists, {
                activeSetId: e,
                removeSetId: void 0,
            }),
        })),
        t.on("setlists/openCreate", async e => {
            const { createSetForm: s, loading: n } = e.setlists;
            !n && s && "" !== s.name.trim() && (await Yh(t.dispatch, s.name)),
                t.dispatch("setlists/openCreate:init");
        }),
        t.on("setlists/openCreate:init", t => ({
            setlists: Object.assign({}, t.setlists, {
                createSetForm: { name: "" },
            }),
        })),
        t.on("setlists/cancelEdit", t => ({
            setlists: Object.assign({}, t.setlists, { createSetForm: void 0 }),
        })),
        t.on("setlists/changeName", (t, e) =>
            t.setlists.createSetForm
                ? {
                    setlists: Object.assign({}, t.setlists, {
                        createSetForm: Object.assign({}, t.setlists.createSetForm, {
                            name: e,
                        }),
                    }),
                }
                : null
        ),
        t.on("setlists/confirmCreate", e => {
            const { createSetForm: s, loading: n } = e.setlists;
            return (
                !n &&
                s &&
                ("" !== s.name.trim()
                    ? Yh(t.dispatch, s.name)
                    : t.dispatch("setlists/cancelCreate")),
                null
            );
        }),
        t.on("setlists/cancelCreate", t => ({
            setlists: Object.assign({}, t.setlists, { createSetForm: void 0 }),
        })),
        t.on("setlists/create:processing", (t, { name: e }) =>
            t.setlists.createSetForm
                ? {
                    setlists: Object.assign({}, t.setlists, {
                        loading: !0,
                        setlists: [
                            { id: "new", name: e, songs: [] },
                            ...t.setlists.setlists,
                        ],
                        createSetForm: void 0,
                    }),
                }
                : null
        ),
        t.on("setlists/create:done", (t, e) => {
            const s = [...t.setlists.setlists],
                n = s.find(t => "new" === t.id);
            return (
                n && (n.id = e),
                {
                    setlists: Object.assign({}, t.setlists, {
                        setlists: s,
                        loading: !1,
                    }),
                }
            );
        }),
        t.on("setlists/create:error", t => ({
            setlists: Object.assign({}, t.setlists, {
                setlists: Xh(t.setlists.setlists, "new"),
                loading: !1,
            }),
        })),
        t.on("setlists/initRemove", (t, e) => {
            const { setlists: s } = t.setlists;
            return s.find(t => t.id === e)
                ? { setlists: Object.assign({}, t.setlists, { removeSetId: e }) }
                : null;
        }),
        t.on("setlists/confirmRemove", (e, s) => {
            const { removeSetId: n, loading: i, setlists: o } = e.setlists;
            if (!i && n === s) {
                const e = o.find(t => t.id === s);
                e &&
                    (async function (t, e, s) {
                        try {
                            t("setlists/remove:processing", { id: e, name: s }),
                                await (async function (t) {
                                    const e = "/api/setlist/".concat(t),
                                        s = await fetch(e, {
                                            method: "delete",
                                            credentials: "include",
                                        });
                                    return Bi(s), s.json();
                                })(e),
                                t("setlists/remove:done");
                        } catch (e) {
                            console.error(e), Wh(t);
                        }
                    })(t.dispatch, s, e.name);
            }
            return null;
        }),
        t.on("setlists/remove:processing", (t, { id: e }) => ({
            setlists: Object.assign({}, t.setlists, {
                setlists: Xh(t.setlists.setlists, e),
                activeSetId: void 0,
                loading: !0,
            }),
        })),
        t.on("setlists/remove:done", t => ({
            setlists: Object.assign({}, t.setlists, { loading: !1 }),
        })),
        t.on("setlists/removeSong", async (e, { songId: s, setlistId: n }) => {
            const { setlists: i, loading: o } = e.setlists,
                a = i.find(t => t.id === n);
            if (!o && a && a.songs) {
                const e = a.songs.find(t => t.songId === s);
                if (e)
                    try {
                        t.dispatch("setlists/removeSong:processing", {
                            song: e,
                            songId: s,
                            setlist: a,
                            setlistId: n,
                        }),
                            await (async function (t, e) {
                                const s = "/api/setlist/song/".concat(t),
                                    n = await Mi(
                                        s,
                                        { songId: e },
                                        {},
                                        { method: "delete", credentials: "include" }
                                    );
                                return Bi(n), n.json();
                            })(n, s),
                            t.dispatch("setlists/removeSong:done");
                    } catch (e) {
                        console.error(e), Wh(t.dispatch);
                    }
            }
        }),
        t.on(
            "setlists/removeSong:processing",
            (t, { songId: e, setlistId: s }) => {
                const { setlists: n } = t.setlists,
                    i = n.find(t => t.id === s);
                return i
                    ? ((i.songs = ((t, e) => {
                        const s = t.findIndex(t => t.songId === e);
                        return t.slice(0, s).concat(t.slice(s + 1));
                    })(i.songs, e)),
                    {
                        setlists: Object.assign({}, t.setlists, {
                            setlists: [...n],
                            loading: !0,
                        }),
                    })
                    : null;
            }
        ),
        t.on("setlists/removeSong:done", t => ({
            setlists: Object.assign({}, t.setlists, { loading: !1 }),
        })),
        t.on("setlists/addSong", async (e, { song: s, setlistId: n }) => {
            const { setlists: i, loading: o } = e.setlists,
                a = i.find(t => t.id === n);
            if (!o && a && !a.songs.find(t => t.songId === s.songId))
                try {
                    t.dispatch("setlists/addSong:processing", {
                        song: s,
                        setlistId: n,
                        setlist: a,
                    }),
                        await (async function (t, e) {
                            const s = "/api/setlist/song/".concat(t),
                                n = { songId: e },
                                i = await Mi(s, n);
                            return Bi(i), i.json();
                        })(n, s.songId),
                        t.dispatch("setlists/addSong:done");
                } catch (e) {
                    console.error(e), Wh(t.dispatch);
                }
        }),
        t.on("setlists/addSong:processing", (e, { song: s, setlistId: n }) => {
            const { setlists: i, markedIds: o } = e.setlists,
                a = [...i],
                r = a.find(t => t.id === n);
            if (r) {
                r.songs = [s, ...r.songs];
                const i = [...o];
                return (
                    o.includes(n) ||
                    (i.push(n),
                        setTimeout(() => {
                            t.dispatch("setlists/flushMark", n);
                        }, 1500)),
                    {
                        setlists: Object.assign({}, e.setlists, {
                            setlists: a,
                            markedIds: i,
                            loading: !0,
                        }),
                    }
                );
            }
            return null;
        }),
        t.on("setlists/addSong:done", t => ({
            setlists: Object.assign({}, t.setlists, { loading: !1 }),
        })),
        t.on("setlists/flushMark", (t, e) => {
            const { markedIds: s } = t.setlists;
            if (s.includes(e)) {
                const n = s.findIndex(t => t === e);
                return {
                    setlists: Object.assign({}, t.setlists, {
                        markedIds: s.slice(0, n).concat(s.slice(n + 1)),
                    }),
                };
            }
            return null;
        }),
        t.on("setlists/panelClick", e => {
            const { createSetForm: s } = e.setlists;
            return s && t.dispatch("setlists/confirmCreate"), null;
        });
},
    Kh = () => ({ layer: { layer: null } }),
    Qh = t => (t.layer.layer ? { layer: { layer: null } } : null),
    Jh = t => {
        !b && t.on("@init", Kh),
            t.on("layer/show", (t, e) => ({ layer: { layer: e } })),
            t.on("route/change", Qh),
            t.on("layer/hide", Qh),
            t.on("screen/toggleFullscreen", Qh);
    };
function $h(t) {
    let e,
        s = t[0],
        n = 1;
    for (; n < t.length;) {
        const i = t[n],
            o = t[n + 1];
        if (
            ((n += 2), ("optionalAccess" === i || "optionalCall" === i) && null == s)
        )
            return;
        "access" === i || "optionalAccess" === i
            ? ((e = s), (s = o(s)))
            : ("call" !== i && "optionalCall" !== i) ||
            ((s = o((...t) => s.call(e, ...t))), (e = void 0));
    }
    return s;
}
const tp = () => ({
    songs: {
        pattern: "",
        defaultInstrument: 24,
        songs: {
            list: [],
            hasMore: !0,
            pattern: "",
            defaultInstrument: 24,
            filters: ll,
        },
        filters: ll,
        loading: null,
    },
}),
    ep = t => {
        async function e(e, s) {
            if (s && !e.songs.songs.hasMore) return;
            const n = e.songs.pattern,
                i = e.songs.filters;
            let o = 0,
                a = null;
            s &&
                e.songs.songs.pattern === e.songs.pattern &&
                xl(e.songs.songs.filters, e.songs.filters) &&
                ((a = e.songs.songs.list), (o = a.length));
            const r = new Wi();
            try {
                t.dispatch("songs/load:processing", { pattern: n, filters: i, ac: r });
                let s = await (function (t, e, s, n = 200, i = 0) {
                    return Go("/api/songs", t, e, s, n, i);
                })(n, vl(i), r.signal, 50, o);
                if (r.signal.aborted) return;
                const l = e.songs.defaultInstrument;
                fl(i) || (s = wl(s, l));
                const c = (a ? a.length : 0) + s.length,
                    d = 50 === s.length && c < 500;
                t.dispatch("songs/load:done", {
                    songs: a ? [...a, ...s] : s,
                    hasMore: d,
                    defaultInstrument: l,
                    pattern: n,
                    filters: i,
                }),
                    b &&
                    !a &&
                    requestAnimationFrame(() => {
                        Rh("panel-search", "top");
                    });
            } catch (e) {
                if (r.signal.aborted) return;
                console.error(e),
                    t.dispatch("songs/load:error", { error: e, pattern: n, filters: i });
            }
        }
        !b && t.on("@init", tp);
        const s = t => e(t, !1);
        t.on(
            "songs/load:processing",
            (t, { pattern: e, filters: s, ac: n }) => (
                t.songs.loading && t.songs.loading.ac.abort(),
                {
                    songs: Object.assign({}, t.songs, {
                        loading: { filters: s, pattern: e, ac: n },
                    }),
                }
            )
        ),
            t.on(
                "songs/load:done",
                (
                    t,
                    { songs: e, hasMore: s, pattern: n, filters: i, defaultInstrument: o }
                ) => {
                    const a = t.songs.loading;
                    if (a && xl(a.filters, i) && a.pattern === n)
                        return {
                            songs: Object.assign({}, t.songs, {
                                songs: {
                                    list: e,
                                    defaultInstrument: o,
                                    hasMore: s,
                                    pattern: n,
                                    filters: i,
                                },
                                loading: null,
                            }),
                        };
                }
            ),
            t.on("songs/load:error", (t, { error: e, pattern: s, filters: n }) => {
                const i = t.songs.loading;
                if (i && xl(i.filters, n) && i.pattern === s)
                    return { songs: Object.assign({}, t.songs, { loading: null }) };
            }),
            t.on("songs/filter", (t, { pattern: e, filters: s }) => ({
                songs: Object.assign({}, t.songs, { pattern: e, filters: s }),
            })),
            t.on("songs/filter", s),
            t.on("songs/default", (t, { instrumentId: e }) => {
                const s = bl(e);
                let n = t.songs.songs.list;
                return (
                    fl(t.songs.songs.filters) ||
                    t.songs.songs.defaultInstrument === s ||
                    (n = wl(t.songs.songs.list, s)),
                    {
                        songs: Object.assign({}, t.songs, {
                            songs: Object.assign({}, t.songs.songs, {
                                list: n,
                                defaultInstrument: s,
                            }),
                            defaultInstrument: s,
                        }),
                    }
                );
            }),
            b &&
            (t.on("songs/more", t => e(t, !0)),
                t.on("songs/filter/pattern", (t, e) => ({
                    songs: Object.assign({}, t.songs, { pattern: e }),
                })),
                t.on("songs/filter/pattern", s),
                t.on("songs/filter/difficulty", (t, e) => ({
                    songs: Object.assign({}, t.songs, {
                        filters: Object.assign({}, t.songs.filters, { difficulty: e }),
                    }),
                })),
                t.on("songs/filter/difficulty", s),
                t.on("songs/filter/instrument", (t, e) => ({
                    songs: Object.assign({}, t.songs, {
                        filters: Object.assign({}, t.songs.filters, { instrument: e }),
                    }),
                })),
                t.on("songs/filter/instrument", s),
                t.on("songs/filter/tuning", (t, { instrument: e, tuning: s }) => ({
                    songs: Object.assign({}, t.songs, {
                        filters: ml(t.songs.filters, e, s),
                    }),
                })),
                t.on("songs/filter/tuning", s),
                t.on("songs/filter/reset", t => ({
                    songs: Object.assign({}, t.songs, { filters: ll }),
                })),
                t.on("songs/filter/reset", s),
                t.on("route/change", (e, { route: s, query: n }) => {
                    if ("search" === $h([s, "optionalAccess", t => t.page])) {
                        const s = $h([n, "optionalAccess", t => t.pattern]) || "",
                            i = {
                                instrument: $h([n, "optionalAccess", t => t.inst])
                                    ? nr(n.inst)
                                    : "ALL INSTRUMENTS",
                                tunings: e.songs.filters.tunings,
                                difficulty: e.songs.filters.difficulty,
                            };
                        (e.songs.songs.list.length &&
                            e.songs.songs.pattern === s &&
                            xl(e.songs.songs.filters, i)) ||
                            t.dispatch("songs/filter", { pattern: s, filters: i });
                    }
                }));
    },
    sp = t => {
        !b && t.on("@init", () => ({ demo: { active: !1, enabled: !1 } })),
            t.on("demo/activate", t => ({
                demo: { active: !0, enabled: 27 === t.meta.songId },
            })),
            t.on("meta/load:processing", (t, { songId: e }) =>
                t.demo.active
                    ? 27 === e
                        ? { demo: { active: !0, enabled: !0 } }
                        : { demo: { active: !1, enabled: !1 } }
                    : null
            );
    },
    np = () => ({
        isDeleted: !1,
        isNextSound: !1,
        editor: { canUseNextSound: !1, canDelete: !1, processingDeletion: !1 },
    }),
    ip = t => {
        const { user: e } = t;
        let s = !1,
            n = !1,
            i = !0 === t.isNextSound;
        if (e.isLoggedIn && t.meta.current) {
            const { editors: o } = t.meta.current,
                a = e.isAdmin || 2233818 === e.profile.id;
            (s = e.isAdmin || (o && 1 === o.length && o[0] === e.profile.id)),
                (n = a),
                (i = (a && "on" === t.experiments.new_sound) || i);
        }
        return {
            isDeleted: !1,
            isNextSound: i,
            editor: Object.assign({}, t.editor, { canDelete: s, canUseNextSound: n }),
        };
    },
    op = t => {
        !b &&
            t.on("@init", () => ({
                isDeleted: !1,
                isNextSound: !1,
                editor: { canUseNextSound: !1, processingDeletion: !1, canDelete: !1 },
            })),
            t.on("meta/load:done", ip),
            t.on("user/init", ip),
            t.on("user/signIn", ip),
            t.on("user/googleSignIn", ip),
            t.on("user/signUp", ip),
            t.on("user/signOut", np),
            t.on(
                "editor/delete",
                (e, s) => (
                    (async function (t, e) {
                        try {
                            const s = new Wi();
                            (
                                await (async function (t, e) {
                                    const s = "/api/song/".concat(t.songId),
                                        n = await fetch(s, {
                                            method: "delete",
                                            credentials: "include",
                                            signal: e,
                                        });
                                    return e && e.aborted
                                        ? { success: !1 }
                                        : (Bi(n),
                                            await zi(n),
                                            Oi(n, "Forbidden"),
                                            { success: !!n.ok });
                                })(e, s.signal)
                            ).success
                                ? t("editor/delete:done", { meta: e })
                                : t(
                                    "editor/delete:error",
                                    new Error(
                                        "Oops, something went wrong. Please try again later."
                                    )
                                ),
                                s.abort.bind(s);
                        } catch (e) {
                            t("editor/delete:error", e);
                        }
                    })(t.dispatch, s),
                    {
                        isDeleted: !0 === e.isDeleted,
                        isNextSound: !0 === e.isNextSound,
                        editor: Object.assign({}, e.editor, { processingDeletion: !0 }),
                    }
                )
            ),
            t.on("editor/delete:done", t => ({
                isDeleted: !0,
                isNextSound: !1,
                editor: Object.assign({}, t.editor, { processingDeletion: !1 }),
            })),
            t.on("editor/delete:error", (t, e) => {
                const s = e.reason || e.message;
                return (
                    window && window.alert("Error: ".concat(s)),
                    {
                        isDeleted: !0 === t.isDeleted,
                        isNextSound: !0 === t.isNextSound,
                        editor: Object.assign({}, t.editor, { processingDeletion: !1 }),
                    }
                );
            }),
            t.on(
                "editor/next:toggle",
                e => (
                    new Wi(),
                    e.meta.current &&
                    Th(
                        t,
                        e.meta.songId,
                        e.meta.partId,
                        e.meta.current.revisionId,
                        e.isNextSound ? "off" : "on"
                    ),
                    {
                        isDeleted: !0 === e.isDeleted,
                        isNextSound: !e.isNextSound,
                        editor: Object.assign({}, e.editor),
                    }
                )
            ),
            t.on(
                "editor/next:generate",
                t => (
                    (async function (t) {
                        try {
                            const e = new Wi();
                            await (async function (t, e) {
                                const s = await Mi("/api/next/generate", { revisionId: t });
                                (e && e.aborted) || Bi(s);
                            })(t, e.signal),
                                b && alert("Done!");
                        } catch (t) {
                            console.error(t), b && alert("Error: ".concat(t.message));
                        }
                    })(t.meta.revisionId),
                    {
                        isDeleted: !0 === t.isDeleted,
                        isNextSound: !0 === t.isNextSound,
                        editor: Object.assign({}, t.editor),
                    }
                )
            );
    };
async function ap(t, e) {
    const s = t.get(),
        n = [];
    for (const t of s.screener.candidates) {
        const i = t.filter.bassPage,
            o = wo(s.meta);
        if (
            "unset" !== i &&
            (!o || ("yes" === i && !o.isBassGuitar) || ("no" === i && o.isBassGuitar))
        )
            continue;
        const a = t.filter.drumsPage;
        if (
            "unset" !== a &&
            (!o || ("yes" === a && !o.isDrums) || ("no" === a && o.isDrums))
        )
            continue;
        const r = t.filter.showAfterAction;
        (r && r !== e.event) || n.push(t);
    }
    if (n.length) {
        const e = n[Math.floor(Math.random() * n.length)];
        if (e.usertest && !(await fu(t.dispatch, e.usertest))) return;
        t.dispatch("screener/set", e);
    }
}
const rp = t => {
    !b &&
        t.on("@init", () => ({ screener: { active: void 0, candidates: [] } })),
        t.on(
            "screener/set",
            (t, e) => (
                e &&
                (function (t) {
                    const e = new Date();
                    e.setTime(e.getTime() + 7776e6),
                        (document.cookie = ""
                            .concat("ScrShwn", "-")
                            .concat(t.cookie, "=true;expires=")
                            .concat(e.toUTCString(), ";path=/"));
                })(e),
                {
                    screener: Object.assign({}, t.screener, {
                        candidates: [],
                        active: e,
                    }),
                }
            )
        ),
        t.on(
            "screener/loaded",
            (e, s) => (
                No(() => ap(t, {})),
                {
                    screener: Object.assign({}, e.screener, {
                        candidates: s,
                        active: void 0,
                    }),
                }
            )
        ),
        t.on("screener/dismiss", t => ({
            screener: Object.assign({}, t.screener, {
                candidates: [],
                active: void 0,
            }),
        })),
        t.on("screener/accept", t => ({
            screener: Object.assign({}, t.screener, {
                candidates: [],
                active: void 0,
            }),
        })),
        t.on("curiosity/event", (e, s) => {
            const { event: n } = s;
            e.screener.candidates.length && No(() => ap(t, { event: n }));
        }),
        t.on("curiosity/vpt10", e => {
            e.screener.candidates.length &&
                (No(() => ap(t, { event: "vpt10" })),
                    (function (t) {
                        let e,
                            s = t[0],
                            n = 1;
                        for (; n < t.length;) {
                            const i = t[n],
                                o = t[n + 1];
                            if (
                                ((n += 2),
                                    ("optionalAccess" === i || "optionalCall" === i) && null == s)
                            )
                                return;
                            "access" === i || "optionalAccess" === i
                                ? ((e = s), (s = o(s)))
                                : ("call" !== i && "optionalCall" !== i) ||
                                ((s = o((...t) => s.call(e, ...t))), (e = void 0));
                        }
                        return s;
                    })([
                        e,
                        "access",
                        t => t.part,
                        "access",
                        t => t.current,
                        "optionalAccess",
                        t => t.withChords,
                    ]) && No(() => ap(t, { event: "vpt10-chords" })));
        }),
        t.on("screener/lessonLeft", e => {
            e.screener.candidates.length &&
                No(() => ap(t, { event: "LessonLeft" }));
        }),
        t.on("screener/minuteSpent", e => {
            e.screener.candidates.length &&
                No(() => ap(t, { event: "MinuteSpent" }));
        });
},
    lp = t => {
        t.on("cursor/failed", () => ({ cursor: { isFailed: !0 } })),
            b &&
            t.on("cursor/failed", (t, { error: e }) => {
                try {
                    "Sentry" in window &&
                        "function" == typeof window.Sentry.captureException &&
                        window.Sentry.captureException(e);
                } catch (t) { }
                console.error(e);
            }),
            t.on("meta/load:processing", (t, { songHasChanged: e }) => {
                if (e) return { cursor: { isFailed: !1 } };
            }),
            t.on("part/load:done", () => ({ cursor: { isFailed: !1 } }));
    };
let cp, dp;
b &&
    (void 0 !== document.hidden
        ? ((cp = "hidden"), (dp = "visibilityState"))
        : void 0 !== document.mozHidden
            ? ((cp = "mozHidden"), (dp = "mozVisibilityState"))
            : void 0 !== document.msHidden
                ? ((cp = "msHidden"), (dp = "msVisibilityState"))
                : void 0 !== document.webkitHidden &&
                ((cp = "webkitHidden"), (dp = "webkitVisibilityState")));
const up = [
    "aa (array)",
    "drawing",
    "drawing (array)",
    "googlefc (array)",
    "promo_slowdown",
    "promo_slowdown (array)",
    "promo_slowdown_faster",
    "promo_slowdown_faster (array)",
    "nossr",
];
function hp(t) {
    let e,
        s = t[0],
        n = 1;
    for (; n < t.length;) {
        const i = t[n],
            o = t[n + 1];
        if (
            ((n += 2), ("optionalAccess" === i || "optionalCall" === i) && null == s)
        )
            return;
        "access" === i || "optionalAccess" === i
            ? ((e = s), (s = o(s)))
            : ("call" !== i && "optionalCall" !== i) ||
            ((s = o((...t) => s.call(e, ...t))), (e = void 0));
    }
    return s;
}
const pp = {
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
    mp = () => ({
        curiosity: { conversion: {}, referer: "none", VPT10Props: pp },
    }),
    gp = t => {
        if (
            (!b && t.on("@init", mp),
                !b &&
                t.on("curiosity/referer", (t, { referer: e }) => ({
                    curiosity: Object.assign({}, t.curiosity, { referer: e }),
                })),
                b)
        ) {
            let o,
                a = {};
            function e(t) {
                window.amplitude.getInstance().setUserId(t.id);
            }
            function s() {
                window.amplitude.getInstance().setUserId(null);
            }
            {
                function n(t, e, s = {}) {
                    try {
                        const n = t.user.isLoggedIn ? t.user.profile.plan : "PLUS",
                            i = t.user.isLoggedIn,
                            o = Object.assign(
                                {
                                    Plan: n,
                                    "Signed in": i,
                                    Legacy: !1,
                                    Url: window.location.href,
                                    Referer: t.curiosity.referer,
                                },
                                s
                            );
                        (function (t) {
                            a = Zn("curiosity_sent_events") || a;
                            const e = !a[t];
                            return e && ((a[t] = !0), Kn("curiosity_sent_events", a)), e;
                        })(e) && (o["First time"] = !0);
                        const r = new window.amplitude.Identify();
                        r.set("Plan", n), r.set("Signed in", i);
                        for (const e in t.experiments)
                            Object.prototype.hasOwnProperty.call(t.experiments, e) &&
                                r.set("Experiment: ".concat(e), t.experiments[e]);
                        for (const t in up) r.unset("Experiment: ".concat(t));
                        const l = window.amplitude.getInstance();
                        l.identify(r),
                            l.logEvent(e, o),
                            l.setUserProperties({ Referer: t.curiosity.referer }),
                            !1 === window.__HAS_BEEN_SEEN_BEFORE__ &&
                            l.setUserProperties({
                                "Original referer": t.curiosity.referer,
                            }),
                            "prod" !== window.__STAGE__ &&
                            console.log("AD: ".concat(e), o, r);
                    } catch (t) {
                        console.error(t), window.Sentry.captureException(t);
                    }
                }
                t.on("curiosity/conversion", (e, s) => {
                    n(
                        e,
                        s.event,
                        Object.assign({}, s, e.curiosity.conversion, { event: void 0 })
                    ),
                        t.dispatch("curiosity/google", {
                            category: "Conversion",
                            action: s.event,
                        });
                }),
                    t.on("curiosity/event", (t, e) => {
                        n(t, e.event, Object.assign({}, e, { event: void 0 }));
                    });
            }
            t.on("curiosity/google", (t, e) => {
                try {
                    window.ga &&
                        window.ga("send", "event", {
                            eventCategory: e.category,
                            eventAction: e.action,
                            eventLabel: e.label,
                            eventValue: e.value,
                        }),
                        "prod" !== window.__STAGE__ &&
                        console.log("GA: ".concat(e.category), e);
                } catch (t) {
                    console.error(t), window.Sentry.captureException(t);
                }
            }),
                t.on("curiosity/error", (e, { error: s, message: n }) => {
                    t.dispatch("curiosity/event", {
                        event: "Error",
                        Error: s,
                        Message: n,
                    }),
                        t.dispatch("curiosity/google", {
                            category: "Error",
                            action: s,
                            label: n,
                        });
                }),
                t.on("curiosity/fraud", () => {
                    window.amplitude
                        .getInstance()
                        .setUserProperties({ "Auto-detected fraud": !0 });
                }),
                t.on("curiosity/setConversionProps", (t, e) => ({
                    curiosity: Object.assign({}, t.curiosity, {
                        conversion: Object.assign({}, t.curiosity.conversion, e),
                    }),
                })),
                t.on("curiosity/countdown:start", () => {
                    clearTimeout(o),
                        fe.reset(),
                        (o = setTimeout(() => t.dispatch("curiosity/vpt10"), 6e5));
                }),
                t.on("curiosity/countdown:clear", () => {
                    clearTimeout(o);
                }),
                t.on("meta/load:processing", () => {
                    clearTimeout(o);
                }),
                t.on("curiosity/vpt10", e => {
                    !(function (e, s) {
                        const n = e.meta,
                            i = wo(n);
                        if (!n || !i) return;
                        const o = fe.getTimeSinceLastActivity();
                        o >= 5 ||
                            (t.dispatch(
                                "curiosity/event",
                                Object.assign(
                                    { event: "Viewed player tab for 10 minutes" },
                                    e.curiosity.VPT10Props,
                                    cp
                                        ? {
                                            "Web document is hidden": document[cp],
                                            "Web document visibility": document[dp],
                                        }
                                        : {},
                                    {
                                        Orientation: window.matchMedia("(orientation: portrait)")
                                            .matches
                                            ? "portrait"
                                            : "landscape",
                                        Fullscreen: e.screen.fullscreen,
                                        Instrument: e.part.current
                                            ? e.part.current.instrument
                                            : void 0,
                                        Difficulty: i.difficulty,
                                        "Minutes Since Last Activity": o,
                                        Artist: n.current ? n.current.artist : void 0,
                                        Title: n.current ? n.current.title : void 0,
                                        "Song id": n.songId.toString(),
                                        "Track id": i.partId.toString(),
                                        "Has chords":
                                            hp([
                                                e,
                                                "access",
                                                t => t.part,
                                                "access",
                                                t => t.current,
                                                "optionalAccess",
                                                t => t.withChords,
                                            ]) || !1,
                                    }
                                )
                            ),
                                t.dispatch("curiosity/google", {
                                    category: "Player",
                                    action: "Viewed player tab for 10 minutes",
                                }));
                    })(e);
                    const s = wo(e.meta);
                    e.meta.current &&
                        (async function (t, e) {
                            const s = JSON.stringify({
                                event: "Viewed player tab for 10 minutes",
                                payload: e,
                            });
                            try {
                                (
                                    await fetch("/api/event/", {
                                        method: "post",
                                        headers: { "Content-Type": "application/json" },
                                        body: s,
                                    })
                                ).ok;
                            } catch (t) {
                                console.error(t);
                            }
                        })(0, {
                            songId: e.meta.songId,
                            revisionId: e.meta.current.revisionId,
                            artistId: e.meta.current.artistId,
                            partId: e.meta.partId,
                            instrumentId: s && s.instrumentId,
                        });
                }),
                t.on("curiosity/vft", t => {
                    window.__HAS_BEEN_SEEN_BEFORE__;
                }),
                t.on("curiosity/shownLessons", e => {
                    const { isDesktop: s, languages: n } = e.device;
                    !Zn("ShownLessonsSent") &&
                        s &&
                        -1 !== n.indexOf("ru") &&
                        (t.dispatch("curiosity/event", {
                            event: "Shown Lessons button",
                            "Has been seen before": window.__HAS_BEEN_SEEN_BEFORE__,
                        }),
                            Kn("ShownLessonsSent", !0));
                });
            const r = {};
            function i(t) {
                return e => ({
                    curiosity: Object.assign({}, e.curiosity, {
                        VPT10Props: Object.assign({}, e.curiosity.VPT10Props, { [t]: !0 }),
                    }),
                });
            }
            t.on("curiosity/trigerHJ", (t, e) => {
                r[e] ||
                    !t.consent.profiling ||
                    t.screener.active ||
                    (console && console.info("hotjar event", e),
                        window &&
                        "function" == typeof window.hj &&
                        (window.hj("trigger", e), (r[e] = !0)));
            }),
                t.on("user/signIn", (s, n) => {
                    e(n),
                        t.dispatch("curiosity/conversion", {
                            event: "Signed in",
                            "Auth method": "Email",
                        });
                }),
                t.on("user/googleSignIn", (s, n) => {
                    const { profile: i, isCreated: o } = n;
                    e(i),
                        t.dispatch("curiosity/conversion", {
                            event: o ? "Signed up" : "Signed in",
                            "Auth method": "Google",
                        });
                }),
                t.on("user/signUp", (s, n) => {
                    e(n),
                        t.dispatch("curiosity/conversion", {
                            event: "Signed up",
                            "Auth method": "Email",
                        });
                }),
                t.on("user/profile", (t, s) => {
                    e(s);
                }),
                t.on("user/subscribePlus", (s, n) => {
                    "subscribe" === n.mode
                        ? t.dispatch("curiosity/conversion", {
                            event: "Subscribed",
                            "Payment type": n.paymentType,
                        })
                        : "update" === n.mode &&
                        t.dispatch("curiosity/conversion", {
                            event: "Updated subscription",
                            "Payment type": n.paymentType,
                        }),
                        t.dispatch("curiosity/google", {
                            category: "Subscription",
                            action:
                                "subscribe" === n.mode ? "Subscribed" : "Updated subscription",
                        }),
                        e(Ph(s, n));
                }),
                t.on("user/signOut", () => {
                    t.dispatch("curiosity/event", { event: "Signed out" }), s();
                }),
                t.on("user/recoverPassword", (t, s) => {
                    e(s);
                }),
                t.on("user/cancelPlus", (s, n) => {
                    e(n),
                        t.dispatch("curiosity/conversion", {
                            event: "Canceled subscription",
                        });
                }),
                t.on("user/deactivate", () => {
                    t.dispatch("curiosity/conversion", { event: "Deactivated account" }),
                        s();
                }),
                t.on("editor/delete:done", (e, s) =>
                    t.dispatch("curiosity/event", {
                        event: "Deleted song",
                        Artist: s.artist,
                        Title: s.title,
                        "Song id": s.songId && s.songId.toString(),
                    })
                ),
                t.on("editor/delete:error", (e, s) =>
                    t.dispatch("curiosity/error", {
                        error: "Deleted song",
                        message: s.reason || s.message,
                    })
                ),
                t.on("favorites/add", async (e, { songId: s, song: n }) =>
                    t.dispatch("curiosity/event", {
                        event: "Added favorite",
                        Title: n.title,
                        Artist: n.artist,
                        "Song id": s.toString(),
                    })
                ),
                t.on("favorites/delete:processing", async (e, { songId: s, song: n }) =>
                    t.dispatch("curiosity/event", {
                        event: "Removed favorite",
                        Title: n.title,
                        Artist: n.artist,
                        "Song id": s.toString(),
                    })
                ),
                t.on("upload/song:uploaded", (e, { songSubmitted: s, song: n }) => {
                    s &&
                        t.dispatch("curiosity/event", {
                            event: "Submitted tab",
                            Artist: n.artist,
                            Title: n.title,
                        });
                }),
                t.on("upload/song:error", (e, { error: s }) => {
                    t.dispatch("curiosity/error", {
                        error: "Submitted tab",
                        message: s.message,
                    });
                }),
                t.on(
                    "upload/revision:uploaded",
                    (e, { revisionSubmitted: s, revision: n }) => {
                        s &&
                            t.dispatch("curiosity/event", {
                                event: "Submitted revision",
                                Artist: n.artist,
                                Title: n.title,
                            });
                    }
                ),
                t.on("upload/revision:error", (e, { error: s }) => {
                    t.dispatch("curiosity/error", {
                        error: "Submitted revision",
                        message: s.message,
                    });
                }),
                t.on("meta/load:processing", (t, { songHasChanged: e }) => {
                    if (e)
                        return {
                            curiosity: Object.assign({}, t.curiosity, { VPT10Props: pp }),
                        };
                }),
                t.on("player/changeSpeed", i("Used speed")),
                t.on("player/togglePlay", i("Used playback")),
                t.on("player/toggleLoop", i("Used loop")),
                t.on("player/changePitch", i("Used pitchshift")),
                t.on("player/changeLoop", i("Used loop")),
                t.on("player/toggleCountIn", i("Used countin")),
                t.on("player/changeType", (t, { type: e }) =>
                    "solo" === e
                        ? i("Used solo")(t)
                        : "mute" === e
                            ? i("Used mute")(t)
                            : void 0
                ),
                t.on(
                    "screen/toggleFullscreen",
                    (t, { enabled: e }) => e && i("Used Fullscreen")(t)
                ),
                t.on("screener/set", (e, s) => {
                    s &&
                        !s.disableEvents &&
                        t.dispatch("curiosity/event", {
                            event: "Custom survey shown",
                            Header: s.title,
                            Name: s.name,
                        });
                });
        }
    },
    fp = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
    yp = {
        backspace: 8,
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
        "+": 187,
        "-": 189,
    };
function vp(t) {
    const e = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    return e || "cmd" !== t ? (e && "ctrl" === t ? "cmd" : t) : "ctrl";
}
class bp {
    constructor(t) {
        (this.store = t),
            (this.handlers = {}),
            (this.meta = {}),
            (this.bindSources = {}),
            window.addEventListener("keydown", this.keyboardHandler.bind(this), !1),
            window.addEventListener("keyup", this.preventHandler.bind(this), !1);
    }
    preventHandler(t) {
        t.target instanceof HTMLButtonElement &&
            32 === t.keyCode &&
            (this.store.get().route.isPanel ||
                (t.preventDefault(), t.stopPropagation()));
    }
    keyboardHandler(t) {
        if (t.altKey || t.shiftKey || t.metaKey || t.ctrlKey)
            return void this.metaHandler(t);
        if (!this.handlers[t.keyCode] || t.repeat) return;
        if (
            (t.target instanceof HTMLInputElement ||
                t.target instanceof HTMLTextAreaElement) &&
            !t.target.hasAttribute("data-hotkey")
        )
            return;
        const e = this.handlers[t.keyCode];
        if (e.global) return void e.global(t);
        const s = this.store.get().route.isPanel;
        e.parallel &&
            ((s &&
                (function () {
                    const t = document.activeElement;
                    return !(
                        !t ||
                        !["input", "select", "button", "textarea"].includes(
                            t.tagName.toLowerCase()
                        ) ||
                        (t.blur && t.blur(), 0)
                    );
                })()) ||
                e.parallel(t)),
            s
                ? e.onPanelPopup
                    ? e.onPanelPopup(t)
                    : e.onPanel && e.onPanel(t)
                : e.onPopup
                    ? e.onPopup(t)
                    : e.onTab && e.onTab(t);
    }
    metaHandler(t) {
        if (
            16 === t.keyCode ||
            17 === t.keyCode ||
            18 === t.keyCode ||
            91 === t.keyCode
        )
            return;
        if (!this.meta[t.keyCode] || t.repeat) return;
        const e = this.meta[t.keyCode];
        let s;
        if (
            (t.altKey
                ? (s = e.alt)
                : t.ctrlKey
                    ? (s = e.ctrl)
                    : t.metaKey
                        ? (s = e.cmd)
                        : t.shiftKey && (s = e.shift),
                s)
        ) {
            const {
                route: { isPanel: e },
                layer: { layer: n },
            } = this.store.get();
            s.onTab ? e || null !== n || s.onTab(t) : s.global && s.global(t);
        }
    }
    bindMeta(t, e, s = "global", n = "App") {
        const [i, o] = t.split("+");
        "shift" === i || "ctrl" === i || "alt" === i || "cmd" === i
            ? ((this.bindSources["".concat(o, "-").concat(i, "-").concat(s)] = n),
                (this.meta[yp[o]] = this.meta[yp[o]] || {}),
                (this.meta[yp[o]][vp(i)] = this.meta[yp[o]][vp(i)] || {}),
                (this.meta[yp[o]][vp(i)][s] = e))
            : console.error("Please check your meta handler");
    }
    unbindMeta(t, e = "global", s = "App") {
        const [n, i] = t.split("+");
        if ("shift" !== n && "ctrl" !== n && "alt" !== n && "cmd" !== n)
            return void console.error("Please check your meta handler");
        const o =
            this.bindSources["".concat(i, "-").concat(n, "-").concat(e)] === s;
        this.meta[yp[i]] && o && delete this.meta[yp[i]][vp(n)][e];
    }
    bindOne(t, e, s, n = "App") {
        (this.bindSources["".concat(t, "-").concat(Object.keys(s)[0])] = n),
            (this.handlers[yp[t]] = this.handlers[yp[t]] || {}),
            (this.handlers[yp[t]][Object.keys(s)[0]] = e);
    }
    unbindOne(t, e, s = "App") {
        const n =
            this.bindSources["".concat(t, "-").concat(Object.keys(e)[0])] === s;
        this.handlers[yp[t]] && n && delete this.handlers[yp[t]][Object.keys(e)[0]];
    }
    bind(t, e, s = "App") {
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
                ("keyboard*" === n
                    ? fp.forEach(i => this.bindOne(i, t[n], e, s))
                    : this.bindOne(n, t[n], e, s));
    }
    unbind(t, e, s = "App") {
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
                ("keyboard*" === n
                    ? fp.forEach(t => this.unbindOne(t, e, s))
                    : this.unbindOne(n, e, s));
    }
}
const wp = window.__AMPLITUDE_API_KEY__ || "",
    xp = wp.slice(0, 6),
    Sp = "ampc_".concat(xp);
window.APP_INITED ||
    ((window.APP_INITED = !0),
        (async function () {
            await (async function () {
                if (
                    ((window.AudioContext =
                        window.AudioContext || window.webkitAudioContext),
                        "object" == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
                )
                    for (const [t, e] of Object.entries(
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__
                    ))
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t] =
                            "function" == typeof e ? () => { } : null;
                window.PASSIVE = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get: function () {
                            window.PASSIVE = { passive: !0 };
                        },
                    });
                    window.addEventListener("test", null, t);
                } catch (t) { }
                if (
                    ("function" != typeof SVGElement.prototype.focus &&
                        (SVGElement.prototype.focus = () => { }),
                        "function" != typeof CSSRuleList.prototype[Symbol.iterator] &&
                        (CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
                        "undefined" == typeof console)
                ) {
                    const t = () => { };
                    console = { error: t, info: t, log: t, warn: t };
                }
                const t = [];
                window.fetch || t.push(import("./fetch.625498f8.js")),
                    await Promise.all(t);
            })();
            const t = (t =>
                new Sh(
                    [
                        Ja,
                        Be,
                        Ch,
                        Ih,
                        kh,
                        Ah,
                        Oh,
                        jh,
                        Yi,
                        Fh,
                        qn,
                        Hh,
                        Gh,
                        Jh,
                        fa,
                        od,
                        ep,
                        ca,
                        sp,
                        op,
                        Fd,
                        jl,
                        Zh,
                        rp,
                        Lc,
                        Vc,
                        xu,
                        ii,
                        lp,
                        gp,
                    ],
                    t
                ))(JSON.parse(document.getElementById("state").innerHTML));
            window.Sentry &&
                window.Sentry.onLoad(function () {
                    const e = t.get(),
                        s = { page: e.route.page };
                    for (const t in e.experiments)
                        Object.prototype.hasOwnProperty.call(e.experiments, t) &&
                            (s["e_" + t] = e.experiments[t]);
                    window.Sentry.setTags(s);
                }),
                (window.hotKeysManager = new bp(t)),
                (function (t) {
                    const e = new Se({
                        onError: (e, s = !1) => {
                            const n = e.message || e;
                            console.error(n),
                                t.dispatch("player/error", { error: n, isNetworkError: s });
                        },
                        onFreeze: () => t.dispatch("player/togglePlay", !1),
                        onOpened: () => t.dispatch("player/opened"),
                        onLoad: () => t.dispatch("player/load"),
                        onLoaded: () => t.dispatch("player/loaded"),
                        onEmpty: () => t.dispatch("player/empty"),
                    }),
                        s = !(null === e.context || !window.Worker);
                    t.dispatch("player/init", { audio: e, playbackAvailable: s });
                })(t);
            const e = () => {
                const e = (() => {
                    if (b && window) {
                        if (
                            window.matchMedia(
                                "(max-width: 479px) and (max-height: 899px) and (orientation: portrait)"
                            ).matches ||
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
                })(),
                    s = !!window.matchMedia(
                        "(orientation: landscape) and (min-aspect-ratio: 13/9)"
                    ).matches,
                    n = ts(e),
                    i = $e(e, n, t.get().screen.fullscreen);
                t.dispatch("screen/resize", {
                    screen: e,
                    landscape: s,
                    available: i,
                    viewport: n,
                });
            };
            window.addEventListener("resize", he(e, 100)), e();
            {
                await Promise.resolve();
                const e = document.getElementById("root");
                y(a(x.Provider, { value: t }, a(xh, { store: t })), e),
                    (function (t) {
                        const e = t.get().meta;
                        e.current &&
                            !e.isFailed &&
                            t.dispatch("meta/load:done", {
                                songId: e.songId,
                                revisionId: e.revisionId,
                                partId: e.partId,
                                current: e.current,
                            });
                    })(t),
                    setTimeout(() => {
                        {
                            const { meta: e } = t.get();
                            e.isFailed ||
                                "on" !== s.experiments.plus_banners ||
                                s.user.hasPlus ||
                                t.dispatch("ads/plus");
                        }
                    }, 0);
            }
            const s = t.get(),
                n = s,
                i = "bot" === s.device.type,
                o = -1 !== window.location.search.indexOf("ut=on");
            if (
                (i ||
                    o ||
                    setTimeout(() => {
                        No(() => {
                            !(async function (t) {
                                try {
                                    let e = await (async function () {
                                        if (!b) throw new Error("Not Implemented");
                                        const t = await fetch("/api/screeners/decide", {
                                            credentials: "include",
                                        });
                                        return Bi(t), t.json();
                                    })();
                                    const s = t.get();
                                    (e = e.filter(t => {
                                        const e = t.filter.visitedFirstTime;
                                        if (
                                            "unset" !== e &&
                                            (("yes" === e && window.__HAS_BEEN_SEEN_BEFORE__) ||
                                                ("no" === e && !window.__HAS_BEEN_SEEN_BEFORE__))
                                        )
                                            return !1;
                                        const n = t.filter.experiment;
                                        if (n) {
                                            let [t, e] = n.split("-");
                                            if ((void 0 === e && (e = "on"), s.experiments[t] !== e))
                                                return !1;
                                        }
                                        return !0;
                                    })),
                                        e.length && t.dispatch("screener/loaded", e);
                                } catch (t) {
                                    console.error(t);
                                }
                            })(t);
                        });
                    }, 0),
                    No(() => {
                        !(function (t) {
                            try {
                                if ("bot" === t.device.type) return;
                                const e = { apiEndpoint: "curiosity.songsterr.com/amplitude" },
                                    s = (function (t) {
                                        const e = Sp + "=",
                                            s = document.cookie.split(";");
                                        for (let t = 0; t < s.length; t++) {
                                            let n = s[t];
                                            for (; " " === n.charAt(0);) n = n.substring(1, n.length);
                                            if (0 === n.indexOf(e))
                                                return n.substring(e.length, n.length);
                                        }
                                        return null;
                                    })();
                                s && (e.deviceId = s);
                                const n = t.user.isLoggedIn ? t.user.profile.id : null;
                                window.amplitude.getInstance().init(wp, n, e),
                                    window.amplitude.getInstance().setVersionName("ea37f5b0");
                            } catch (t) {
                                window.Sentry.captureException(t);
                            }
                        })(t.get());
                    }),
                    No(() => {
                        const e = t.get();
                        if (
                            (o && t.dispatch("ut/continue", e.query.utName),
                                "favorites" !== n.route.page &&
                                e.user.isLoggedIn &&
                                (!e.favorites.favorites.length && qh(t.dispatch), Wh(t.dispatch)),
                                t.dispatch("curiosity/vft"),
                                setTimeout(() => t.dispatch("screener/minuteSpent"), 6e4),
                                "on" === e.experiments.googlefc && void 0 === e.consent.profiling)
                        )
                            try {
                                (window.googlefc = window.googlefc || {}),
                                    (window.googlefc.callbackQueue =
                                        window.googlefc.callbackQueue || []),
                                    window.googlefc.callbackQueue.push({
                                        CONSENT_DATA_READY: function () {
                                            "function" == typeof __tcfapi &&
                                                __tcfapi("getTCData", 0, (e, s) => {
                                                    s &&
                                                        (e.gdprApplies
                                                            ? e.purpose &&
                                                            t.dispatch("consent/toggle", e.purpose.consents[1])
                                                            : t.dispatch("consent/toggle", !0));
                                                });
                                        },
                                    });
                            } catch (t) {
                                console.error(t);
                            }
                    }),
                    "undefined" != typeof dataLayer &&
                    -1 === String(window.location).indexOf("&ut=on"))
            ) {
                let { hasPlus: e, isLoggedIn: s } = t.get().user;
                e = true
                dataLayer.push({
                    event: s ? (e ? "VISITED_PLUS" : "VISITED_FREE") : "VISITED_ANON",
                });
            }
            "off" === t.get().query.sw
                ? (function () {
                    try {
                        navigator.serviceWorker.ready.then(t => {
                            t.unregister();
                        });
                    } catch (t) {
                        console.error(t);
                    }
                })()
                : "serviceWorker" in navigator &&
                window.addEventListener("load", () => {
                    navigator.serviceWorker
                        .register("/service-worker.js", { scope: "/" })
                        .catch(t => {
                            console.error("Error during service worker registration:", t);
                        });
                }),
                (window.Cypress || "prod" !== window.__STAGE__) && (window.__store__ = t),
                (window.trackNotsyEvent = (e, s) =>
                    "prod" === window.__STAGE__ &&
                    t.dispatch("curiosity/event", Object.assign({ event: e }, s)));
            const r = () => t.dispatch("player/resume", "pagehide"),
                l = () => t.dispatch("player/suspend", "pagehide");
            window.addEventListener("pageshow", r, !1),
                window.addEventListener("resume", r, !1),
                window.addEventListener("pagehide", l, !1),
                window.addEventListener("freeze", l, !1),
                "mediaSession" in navigator &&
                (navigator.mediaSession.setActionHandler("play", function () {
                    t.dispatch("curiosity/event", { event: "Used media session: play" }),
                        t.dispatch("player/togglePlay", !0);
                }),
                    navigator.mediaSession.setActionHandler("pause", function () {
                        t.dispatch("curiosity/event", { event: "Used media session: pause" }),
                            t.dispatch("player/togglePlay", !1);
                    }));
        })().catch(t => {
            console.error(t);
        }));
export { w as D, Nh as g, Th as l };
//# sourceMappingURL=index.3768f4c5.js.map
