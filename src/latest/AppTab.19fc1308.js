let e, t;
import {
  P as i,
  y as s,
  z as a,
  B as o,
  E as n,
  F as r,
  G as l,
  H as p,
  J as h,
  K as d,
  M as u,
  i as c,
  A as m,
  N as g,
  u as y,
  O as f,
  Q as v,
  R as b,
  U as x,
  V as w,
  W as C,
  X as k,
  Y as N,
  j as S,
  Z as L,
  $ as M,
  L as $,
  n as B,
  d as T,
  a0 as P,
  a1 as E,
  T as D,
  C as j,
  a2 as A,
  e as z,
  a3 as I,
  _ as O,
  a4 as R,
  a5 as F,
  a6 as V,
  a7 as X,
  a8 as q,
  a9 as _,
  aa as U,
  ab as H,
  b as Y,
  ac as G,
  ad as W,
  ae as K,
  af as J,
  ag as Z,
  ah as Q,
  p as ee,
  ai as et,
  aj as ei,
  ak as es,
  al as ea,
  am as eo,
  an as en,
  ao as er,
  ap as el,
  aq as ep,
  ar as eh,
  as as ed,
  at as eu,
  au as ec,
  av as em,
  aw as eg,
  ax as ey,
  ay as ef,
  az as ev,
  aA as eb,
  aB as ex,
  aC as ew,
  aD as eC,
  aE as ek,
  aF as eN,
  aG as eS,
  aH as eL,
  aI as eM,
  aJ as e$,
  aK as eB,
  aL as eT,
  aM as eP,
  aN as eE,
  aO as eD,
  aP as ej,
  aQ as eA,
  aR as ez,
  aS as eI,
  aT as eO,
  aU as eR,
  aV as eF,
  aW as eV,
  aX as eX,
  aY as eq,
  aZ as e_,
  a_ as eU,
  a$ as eH,
  b0 as eY,
  b1 as eG,
  b2 as eW,
  b3 as eK,
  b4 as eJ,
  b5 as eZ,
  b6 as eQ,
  b7 as e1,
  b8 as e2,
  b9 as e0,
  ba as e5,
  h as e3,
  bb as e4,
  c as e7,
} from "./index.659fabbf.js";
import {
  d as e8,
  a as e6,
  T as e9,
  c as te,
  _ as tt,
  p as ti,
  R as ts,
  e as ta,
  B as to,
  h as tn,
  F as tr,
  j as tl,
  o as tp,
} from "./preact.3d326435.js";
import {
  a as th,
  s as td,
  b as tu,
  _ as tc,
  d as tm,
  F as tg,
  P as ty,
  S as tf,
  e as tv,
  C as tb,
} from "./Capo.35edac81.js";
import { g as tx, a as tw } from "./gplay.79326319.js";
import { I as tC, _ as tk } from "./Input.97539e13.js";
import { A as tN } from "./ActionButton.1cbc2cf9.js";
import { t as tS, a as tL } from "./UploadRevisionForm.module.37c9033c.js";
import {
  N as tM,
  a as t$,
  A as tB,
  L as tT,
  S as tP,
} from "./AppFooter.ff6007e1.js";
import { S as tE } from "./SWW.f49e33a7.js";
import { Y as tD } from "./YoutubeLogo.249f9c5a.js";
class tj extends e8 {
  render() {
    let {
        onClick: e,
        pressed: t,
        title: s,
        titlePressed: a,
        name: o,
        instrumentId: n,
      } = this.props,
      r = "mixer-title-id";
    return e6(
      "button",
      {
        className: t ? th.active : th.button,
        onClick: e,
        id: "control-mixer",
        "aria-haspopup": !0,
        "aria-pressed": t,
      },
      e6(
        "svg",
        {
          className: th.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": r,
        },
        e6("title", { id: r }, t && a ? a : s),
        e6("circle", { className: th.tag, cx: "7", cy: "39", r: "6" }),
        e6("circle", {
          className: th.circle,
          cx: "22.5",
          cy: "22.5",
          r: "22.5",
          filter: "url(#svg_shadow)",
        }),
        e6(i, {
          className: th.shape,
          instrumentId: n,
          name: o,
          transform: "translate(9 9)",
        })
      )
    );
  }
}
let tA = "tl2yt",
  tz = "tl35",
  tI = "tl276",
  tO = "tl276 tl1lq",
  tR = "tl1aa",
  tF = "tl1aa tl294",
  tV = "tl1aa tl1gg",
  tX = "tl1aa tl1ia",
  tq = "tl1aa tl1u0",
  t_ = "tl1aa tl2uy",
  tU = "tl1aa tl2o2",
  tH = "tl1aa tly0",
  tY = "tl24a",
  tG = "tl2wd",
  tW = "tl2wd tlca",
  tK = "tli0",
  tJ = "tl11g",
  tZ = "tl1sq",
  tQ = "tl2b5",
  t1 = "tl34n",
  t2 = "tl33",
  t0 = {
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
function t5(e, t) {
  e.addEventListener("touchmove", t, !!window.PASSIVE && { passive: !1 }),
    e.addEventListener("mousemove", t);
}
function t3(e, t) {
  e.removeEventListener("touchmove", t), e.removeEventListener("mousemove", t);
}
function t4(e, t) {
  e.addEventListener("touchstart", t), e.addEventListener("mousedown", t);
}
function t7(e, t) {
  e.removeEventListener("touchstart", t), e.removeEventListener("mousedown", t);
}
function t8(e, t) {
  e.addEventListener("touchend", t), e.addEventListener("mouseup", t);
}
function t6(e, t) {
  e.removeEventListener("touchend", t), e.removeEventListener("mouseup", t);
}
class t9 extends e8 {
  constructor(e) {
    super(e);
    let t = e.player.speed,
      i = a(t, e.tempo.tempo);
    (this.state = {
      speed: t,
      tempo: i,
      position: o(t),
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
        i = a(t, e.tempo.tempo);
      return {
        speed: t,
        tempo: i,
        position: o(t),
        mirrorSpeed: e.player.speed,
        mirrorTempo: e.tempo.tempo,
      };
    }
    return null;
  }
  componentDidMount() {
    let e = this.wrap;
    e && t4(e, this.onTouchStart),
      window.addEventListener("resize", this.onResize),
      window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
  }
  componentWillUnmount() {
    window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
    let e = this.wrap;
    e && t7(e, this.onTouchStart),
      t3(document, this.onTouchMove),
      t6(document, this.onTouchEnd),
      window.removeEventListener("resize", this.onResize),
      this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
  }
  getPageCoordinates = () => {
    let { body: e, documentElement: t } = document,
      i = this.ruler;
    if (i && e && t) {
      let s = i.getBoundingClientRect(),
        a = s.left + e.scrollLeft + t.scrollLeft,
        o = s.top + e.scrollTop + t.scrollTop,
        n = s.width;
      return { rulerX: a, rulerY: o, rulerW: n };
    }
    throw Error("Wrong Usage");
  };
  onResize = n(() => this.setState(this.getPageCoordinates), 250);
  getNewPosition(e) {
    let t = r((100 * e.x) / e.w);
    return l(t, this.props.tempo.tempo);
  }
  handleFaster = (e) => {
    e.preventDefault(),
      this.setState(
        (e) => p(e.speed, e.tempo, e.position, this.props.tempo.tempo),
        () => {
          this.dispatchSpeed(this.state.speed);
        }
      );
  };
  handleSlower = (e) => {
    e.preventDefault(),
      this.setState(
        (e) => h(e.speed, e.tempo, e.position, this.props.tempo.tempo),
        () => {
          this.dispatchSpeed(this.state.speed);
        }
      );
  };
  dispatchSpeed = (e) => {
    d(this.props.store, e);
  };
  getTouchPoint(e) {
    let { rulerX: t, rulerY: i, rulerW: s } = this.state;
    if (null === t || null === i || null === s) {
      let e = this.getPageCoordinates();
      this.setState(e), (t = e.rulerX), (i = e.rulerY), (s = e.rulerW);
    }
    let a = e.changedTouches ? e.changedTouches[0] : e;
    return { x: Math.max(Math.min(a.pageX - t, s), 0), w: s, y: a.pageY - i };
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
    t8(document, this.onTouchEnd), t5(document, this.onTouchMove);
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
    t3(document, this.onTouchMove),
      t6(document, this.onTouchEnd),
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
    let e = 100 === this.state.speed ? t0.buttonAlt : t0.button,
      t = 100 === this.state.speed ? t0.bpmOriginal : t0.bpm;
    return e6(
      "div",
      { className: t0.speed, role: "dialog", "aria-label": "Speed" },
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
          { className: t0.speedLabel, "aria-label": "Tempo" },
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
          className: t0.pane,
          title: "You can use arrow keys",
          ref: this.refWrap,
        },
        e6("label", { className: t0.caption25 }, e6("span", null, "25%")),
        e6("label", { className: t0.caption50 }, e6("span", null, "50%")),
        e6("label", { className: t0.caption75 }, e6("span", null, "75%")),
        e6("label", { className: t0.caption100 }, e6("span", null, "100%")),
        e6("label", { className: t0.caption125 }, e6("span", null, "125%")),
        e6("label", { className: t0.caption150 }, e6("span", null, "150%")),
        e6("label", { className: t0.caption175 }, e6("span", null, "175%")),
        e6(
          "div",
          { className: t0.ruler, ref: this.refRuler },
          e6(
            "div",
            {
              className: t0.handle,
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
var ie = s(t9, "player", "tempo");
let it = "Cvj28d",
  ii = "Cvj28d Cvj2ff",
  is = "Cvj28d Cvj2ff Cvj350",
  ia = "Cvj28d Cvj2ff Cvj248",
  io = "Cvj28d Cvj1dp",
  ir = "Cvjo4",
  il = "Cvj23g",
  ip = "Cvj1mq",
  ih = "Cvj28d Cvj2k8",
  id = {
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
function iu(e) {
  let {
      title: t,
      mobile: i,
      low: s,
      leftOffset: a,
      topOffset: o,
      horizontal: n,
      device: r,
      feature: l,
    } = e,
    p = id.popupRight;
  i ? (p = s ? id.popupMobileLow : id.popupMobile) : n && (p = id.popupTop);
  let h = {};
  void 0 !== a &&
    void 0 !== o &&
    ((h = { top: `${o}px`, left: `${a}px` }), (p = id.popupLeftTop));
  let d = "subscribe in the app";
  c(r.os) && (d = "buy in the app");
  let u = `${t} ${d}`,
    g = c(r.os);
  return e6(
    "div",
    { role: "dialog", className: p, style: h },
    (function (e, t, i) {
      for (
        var s = arguments.length, a = Array(s > 3 ? s - 3 : 0), o = 3;
        o < s;
        o++
      )
        a[o - 3] = arguments[o];
      return e6(
        m,
        {
          source: "popup",
          attrs: { className: e, "aria-label": t },
          eventProperties: {
            Via: "feature popup",
            "App store": i ? "Google Play" : "App Store",
            Feature: l,
          },
        },
        a
      );
    })(
      id.link,
      u,
      g,
      e6(
        "div",
        null,
        e6("div", { className: id.title }, t),
        e6("div", { className: id.text }, d)
      ),
      g
        ? e6("img", { src: tx, width: 160, height: 47, alt: "Google Play" })
        : e6("img", { src: tw, width: 160, height: 53, alt: "AppStore" })
    )
  );
}
function ic() {
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
let im = g + " B0fs1",
  ig = g + " B0f277",
  iy = g + " B0f2nd",
  iv = "B0f1ah",
  ib = "B0fqg",
  ix = "B0fqg B0f176",
  iw = "B0f102",
  iC = "B0f2sz",
  ik = {
    horizontalPopup: g + " B0fs1",
    verticalPopup: g + " B0f277",
    verticalLeftPopup: g + " B0f2nd",
    link: "B0f1ah",
    basewrapper: "B0fqg",
    wrapper: "B0fqg B0f176",
    text: "B0f102",
    linkText: "B0f2sz",
  };
function iN(e, t) {
  return e ? ik.horizontalPopup : t ? ik.verticalLeftPopup : ik.verticalPopup;
}
function iS(e) {
  let { title: t, left: i, horizontal: s } = e,
    { dispatch: a } = y(),
    o = e9(() => {
      a("layer/hide");
    }, [a]);
  return e6(
    "div",
    { className: iN(s, i), role: "dialog" },
    e6(
      "div",
      {
        className: ik.link,
        "aria-label": `${t} mode has no effect`,
        onClick: o,
      },
      e6("span", { className: ik.wrapper }, e6(ic, null)),
      e6(
        "div",
        { className: ik.text },
        "This song has only one",
        e6("br", null),
        `instrument track. ${t}`,
        e6("br", null),
        "mode has no effect."
      )
    )
  );
}
let iL = "uj1h8",
  iM = "uj22u",
  i$ = "uj2f9",
  iB = "uj1b3",
  iT = "uj2aq",
  iP = "uj90",
  iE = "uj1j2",
  iD = "uj2jv",
  ij = "uj1j2 uj22n",
  iA = {
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
  iz = () =>
    e6("path", {
      d: "M37 22.04v5.92a.5.5 0 0 0 .812.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.5.5 0 0 0-.812.39Z",
    }),
  iI = () =>
    e6("path", {
      d: "M10 22.04v5.92a.5.5 0 0 1-.812.39l-3.7-2.96a.5.5 0 0 1 0-.78l3.7-2.96a.5.5 0 0 1 .812.39Z",
    }),
  iO = (e) =>
    e6("path", {
      d: "M26.13 22h-5.26a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508a.5.5 0 0 0-.433-.752Z",
      ...e,
    }),
  iR = (e) =>
    e6("path", {
      d: "M26.13 10h-5.26a.5.5 0 0 1-.431-.752l2.63-4.508a.5.5 0 0 1 .863 0l2.63 4.508a.5.5 0 0 1-.433.752Z",
      ...e,
    }),
  iF = () =>
    e6(
      te,
      null,
      e6(
        "div",
        { className: iA.editorHelp },
        e6(
          "div",
          null,
          e6("div", { className: iA.title }, "Click a note to edit."),
          e6(
            "div",
            { className: iA.part },
            e6("p", null, "Navigate with"),
            e6(
              "div",
              { className: iA.shortcut },
              e6(
                "svg",
                { className: iA.navigation, width: 47, height: 33 },
                e6("rect", { x: 16 }),
                e6("rect", { x: 16, y: 17 }),
                e6("rect", { x: 32, y: 17 }),
                e6("rect", { y: 17 }),
                e6(iR, null),
                e6(iz, null),
                e6(iI, null),
                e6(iO, null)
              )
            )
          ),
          e6("div", { className: iA.delimiter }),
          e6(
            "div",
            { className: iA.part },
            e6("p", null, "Edit with"),
            e6(
              "div",
              { className: iA.shortcut },
              e6(
                "svg",
                { className: iA.digits, width: 47, height: 33 },
                e6("rect", { className: iA.rect, x: 32 }),
                e6("rect", { className: iA.rect }),
                e6("rect", { x: 20, y: 7, height: 2, width: 7 }),
                e6("rect", { className: iA.rect, y: 17 }),
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
          e6(
            te,
            null,
            e6("div", { className: iA.delimiter }),
            e6(
              "div",
              { className: iA.part },
              e6("p", null, "Move a note by dragging or"),
              e6(
                "div",
                { className: iA.shortcut },
                e6(
                  "svg",
                  { className: iA.move, width: 67, height: 33 },
                  e6("rect", { className: iA.rect, x: 52 }),
                  e6("rect", { className: iA.rect, x: 52, y: 17 }),
                  e6("rect", { rx: 1, y: 8, height: 17, width: 49 }),
                  e6("text", { x: 3, y: 21 }, "Shift"),
                  e6("text", { x: 38, y: 20 }, "+"),
                  e6(iO, { transform: "translate(36,0)" }),
                  e6(iR, { transform: "translate(36,0)" })
                )
              )
            )
          )
        )
      )
    ),
  iV = "J11oq",
  iX = "J11oq J11sb",
  iq = "J11oq J11iw",
  i_ = "J11oq J11tq",
  iU = {
    hint: "J11oq",
    hint0: "J11oq J11sb",
    hint1: "J11oq J11iw",
    hint2: "J11oq J11tq",
  },
  iH = (e) => {
    let { className: t = iU.hint } = e;
    return e6(
      "div",
      { className: t },
      e6(
        "p",
        null,
        "Unless you submit a revision, the changes will be private and wonΓÇÖt affect the sound."
      )
    );
  },
  iY = "Cv41lu",
  iG = "Cv41cy",
  iW = "Cv41uh",
  iK = "Cv42y1",
  iJ = "Cv41lu Cv41ex",
  iZ = "Cv4221",
  iQ = "Cv42ut",
  i1 = "Cv42ut Cv428v",
  i2 = "Cv42e1",
  i0 = "Cv42e1 Cv4tk",
  i5 = "Cv42e1 Cv4tk Cv41co",
  i3 = "Cv42e1 Cv425",
  i4 = "Cv42e1 Cv4tk Cv41co Cv42xo",
  i7 = {
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
  i8 = (e) => {
    let { status: t } = e,
      i = "No changes yet";
    return (
      "changes" === t || "saving" === t
        ? (i = "Saving...")
        : "saved" === t && (i = "All changes saved privately"),
      e6(
        "div",
        { style: { width: "100%" } },
        e6("div", { className: i7.divider }),
        e6(
          "div",
          { className: i7.hintBold, style: { padding: "4px 0px 3px" } },
          i
        )
      )
    );
  },
  i6 = (e) => {
    let { dispatch: t, children: i } = e;
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
      i
    );
  };
var i9 = s(i6);
let se = "Cwrup",
  st = tS + " Cwr3f",
  si = tL + " Cwr1dr",
  ss = f + " Cwr1fo",
  sa = "Cwr32t",
  so = "Cwr2p4",
  sn = v + " Cwr109",
  sr = b + " Cwr1pn",
  sl = {
    form: "Cwrup",
    textarea: tS + " Cwr3f",
    actions: tL + " Cwr1dr",
    cancel: f + " Cwr1fo",
    hint: "Cwr32t",
    error: "Cwr2p4",
    title: v + " Cwr109",
    content: b + " Cwr1pn",
  },
  sp = (e) => {
    let { onCancel: t, onSubmit: i } = e,
      s = tt(),
      [a, o] = ti(!1),
      [n, r] = ti(null),
      [l, p] = ti(null),
      h = async (e) => {
        e.preventDefault(), o(!0);
        try {
          w([{ field: s.current, validator: C }]),
            await i({ summary: s.current.value }),
            p(null);
        } catch (e) {
          e instanceof k ? p(e) : r(e);
        }
        o(!1);
      },
      d = !n?.reasons?.summary;
    return e6(
      "form",
      { className: sl.form, onSubmit: h },
      e6(x, { styles: sl, error: d && n }),
      e6(tC, {
        ref: s,
        name: "summary",
        type: "textarea",
        error: n,
        placeholder: "Briefly explain your changes",
        styles: sl,
        errorStyles: sl,
        popup: !0,
      }),
      e6(
        "div",
        { className: sl.actions },
        e6("a", { className: sl.cancel, onClick: t }, "Cancel"),
        e6(tN, {
          id: l ? "submitRevisionButtonWarning" : "submitRevisionButton",
          title: "Submit a public revision",
          processing: a,
        })
      ),
      e6("p", { className: sl.hint, style: { textAlign: "justify" } }, [
        "Once audio rendering is complete, we'll send you an email, and your revision will appear on site for other users to enjoy. You can also submit more complex changes via ",
        e6(i9, null, "Guitar Pro tab"),
        ".",
      ])
    );
  },
  sh = (e) => {
    let { showForm: t, onToggleForm: i, onSubmitted: s } = e,
      { dispatch: a, meta: o, part: n } = y("meta", "part"),
      r = e9(
        async (e) => {
          let t = await N({
            ...e,
            songId: o.songId,
            revision: o.revisionId || n.revisionId,
          });
          a("layer/hide"), a("upload/revision:merged", t), s();
        },
        [a, o, n]
      );
    return t
      ? e6(sp, { onCancel: i, onSubmit: r })
      : e6(
          "div",
          null,
          e6(
            "button",
            {
              className: S.popupButtonGreen,
              style: { marginBottom: 15 },
              onClick: i,
            },
            "Submit a public revision"
          ),
          e6(iH, { className: i7.hintNoMargin })
        );
  };
var sd = s(sh);
let su = (e) => {
  let { dispatch: t, children: i } = e;
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
    i
  );
};
var sc = s(su);
class sm extends e8 {
  constructor() {
    super();
    let e = L("v2");
    e || M("v2"), (this.state = { helpActive: !e, showForm: !1 });
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
      { helpActive: i, showForm: s } = this.state,
      a = i ? i7.popupExtended : i7.popup,
      o = s ? `${a} ${i7.reposition}` : a;
    return e6(
      "div",
      { className: o },
      e6(
        "div",
        { className: i7.popupInner },
        e6(
          "div",
          {
            className: i ? i7.helpTagActive : i7.helpTag,
            onClick: this.helpToggle,
          },
          e6("span", null, "?")
        ),
        i && e6(iF, null),
        e6(
          "div",
          { className: i7.mainContainer },
          e6(
            "div",
            null,
            e6("h3", {}, "TAB editor"),
            !t.isLoggedIn &&
              e6(
                "div",
                { className: i7.hintBigger, style: { marginTop: 0 } },
                e6(sc, null, "Sign up"),
                " for free to submit a public revision or to save changes privately."
              ),
            !t.isLoggedIn &&
              e6(iH, { className: t.isLoggedIn ? i7.hint : i7.hintBigger }),
            t.isLoggedIn &&
              e6(sd, {
                showForm: s,
                onToggleForm: this.toggleForm,
                onSubmitted: this.onSubmitted,
              })
          ),
          t.isLoggedIn && e6(i8, { status: e.status })
        )
      )
    );
  }
}
var sg = s(sm, "tabEditor", "user", "experiments"),
  sy = "/static/media/hand.9a7dcf24.svg";
let sf = "Cjoe6",
  sv = "Cjoe6 Cjo2q1",
  sb = "Cjo186",
  sx = "Cjo1a2",
  sw = "Cjoi2",
  sC = "Cjo1pw",
  sk = {
    popup: "Cjoe6",
    popupWarning: "Cjoe6 Cjo2q1",
    warning: "Cjo186",
    hint: "Cjo1a2",
    helpTag: "Cjoi2",
    beta: "Cjo1pw",
  };
function sN(e) {
  let { dispatch: t } = y();
  if ("In Progress" === e.status || "Error" === e.status)
    return e6(
      "div",
      { className: sk.popupWarning },
      e6(
        "p",
        { className: sk.warning },
        "In Progress" === e.status &&
          "Seems like fingerings generation for this track is in progress right now. Try again later.",
        "Error" === e.status &&
          "Failed to generate fingerings. We are working on a fix."
      )
    );
  let i = e9(
    () =>
      t("curiosity/event", { event: "Clicked open Beta fingerings article" }),
    [t]
  );
  return e6(
    "div",
    { className: sk.popup },
    e6(
      $,
      { to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: i },
      e6("div", { className: sk.helpTag }, e6("span", null, "?"))
    ),
    e6("p", { className: sk.hint }, "Left hand"),
    e6("img", { src: sy, width: 76.6, height: 100.1, alt: "Fingerging hint" }),
    e6("span", { className: sk.beta }, "beta")
  );
}
let sS = "C0w33s",
  sL = "C0w3a",
  sM = "C0w1ij",
  s$ = "C0w3a C0w13m",
  sB = "C0w3a C0w2bp",
  sT = "C0wz2",
  sP = {
    popup: "C0w33s",
    button: "C0w3a",
    path: "C0w1ij",
    activeButton: "C0w3a C0w13m",
    disabledButton: "C0w3a C0w2bp",
    spacer: "C0wz2",
  };
class sE extends e8 {
  render() {
    let { dispatch: e } = this.props,
      { metronomeType: t, voiceMetronomeAvailable: i } = this.props.player,
      s = "regular" === t ? sP.activeButton : sP.button,
      a = {};
    return (
      i
        ? ((a.className = "voice" === t ? sP.activeButton : sP.button),
          (a.onClick = () => e("player/changeMetronome:init", "voice")))
        : ((a.className = sP.disabledButton),
          (a.disabled = !0),
          (a.title = "Voice metronome is unavailable on this song")),
      e6(
        "div",
        { className: sP.popup },
        e6(
          "button",
          {
            className: s,
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
            e6("path", { d: tu })
          ),
          e6("p", null, "tick tock")
        ),
        e6("div", { className: sP.spacer }),
        e6(
          "button",
          a,
          e6(
            "svg",
            { width: 34, height: 32, viewBox: "0 0 34 28" },
            e6("use", { xlinkHref: `${td}#icon`, className: sP.path })
          ),
          e6("p", null, "one two")
        )
      )
    );
  }
}
var sD = s(sE, "player"),
  sj = null,
  sA = null,
  sz = null,
  sI = null,
  sO = null,
  sR = null,
  sF = null,
  sV = null,
  sX = null,
  sq = null,
  s_ = [sj, sA, sz, sI, sO, sR, sF, sV, sX, sq];
let sU = "j515w",
  sH = "j5ha",
  sY = "j5ak",
  sG = "j58u",
  sW = "j5lp",
  sK = {
    print: "j515w",
    pane: "j5ha",
    zoom: "j5ak",
    printLabel: "j58u",
    actions: "j5lp",
  };
class sJ extends e8 {
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
    return e6(
      "div",
      { className: sK.print, role: "dialog", "aria-label": "Print" },
      e6(
        "div",
        { className: sK.zoom },
        e6(
          "button",
          { onClick: this.minus, title: "Zoom Out" },
          e6(
            "svg",
            { width: "22", height: "22", role: "img" },
            e6("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
            e6("path", { d: "M7 11 h8" })
          )
        ),
        e6(
          "span",
          { className: sK.printLabel, "aria-label": "Zoom" },
          this.props.print.zoom,
          "%"
        ),
        e6(
          "button",
          { onClick: this.plus, title: "Zoom In" },
          e6(
            "svg",
            { width: "22", height: "22", role: "img" },
            e6("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
            e6("path", { d: "M5 11 h12 M 11 5 v12" })
          )
        )
      ),
      e6(
        "div",
        { className: sK.actions },
        e6(
          "button",
          {
            className: S.popupButtonGreen,
            onClick: this.print,
            title: "Print",
          },
          "Print"
        )
      )
    );
  }
}
var sZ = s(sJ, "print");
let sQ = { animationStyles: O };
class s1 extends e8 {
  componentDidUpdate() {
    let { usedDrums: e, fingeringsOnActivate: t } = this.props;
    e || t();
  }
  render() {
    let { gettext: e } = B(s_),
      {
        device: t,
        plusAccess: i,
        layer: s,
        tadEditorWarning: a,
        speed: o,
        fingeringsEnabled: n,
        fingeringsActive: r,
        fingeringsStatus: l,
        usedDrums: p,
        videoIsOpened: h,
        metronomeType: d,
      } = this.props,
      { print: u, experiments: m } = y("print", "experiments"),
      g = c(t.os) || T(t.os) || P(t),
      f = "mixer" === s,
      v = "speed" === s,
      b = "print" === s && "on" === m.print_scale.segment,
      x = s === R,
      w = this.props.tabEditorActive,
      C = "Loading" === l,
      k = "solo" === this.props.type && !h,
      N = "mute" === this.props.type && !h,
      S = this.props.loop,
      L = this.props.isCountin && !h,
      M = this.props.isMetronome && !h,
      $ = `${Math.round(o)}%`,
      O = !i,
      F = !i,
      V = tc.panePlus2;
    return (
      p ? (V = tc.panePlus2Secondary) : n && (V = tc.panePlus3),
      e6(
        "aside",
        { id: "controls", className: V, "data-controls": "tablature" },
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
            e6(tj, {
              pressed: f,
              onClick: this.props.handleMixer,
              title: e("Show tracks (T)"),
              titlePressed: e("Hide tracks (T)"),
              instrumentId: this.props.track
                ? this.props.track.instrumentId
                : E,
              name: this.props.track ? this.props.track.name : "",
            }),
            e6(D, null, f && e6(j, sQ, e6(A, null)))
          ),
          e6(
            "div",
            { className: tc.item },
            e6(tg, {
              key: `speed ${v}`,
              icon: "speed",
              text: $,
              pressed: v,
              onClick: this.props.handleSpeed,
              title: e(
                "Open speed panel (S). Change tempo: (Alt+1ΓÇô7) for 25%ΓÇô175%, (Alt+S/A) for 1 bpm change"
              ),
              hasPopup: !0,
              lock: F,
            }),
            e6(
              D,
              null,
              "plus_speed" === s &&
                e6(
                  j,
                  { ...sQ, key: "popup" },
                  g
                    ? e6(iu, {
                        title: e("Tempo Control"),
                        device: t,
                        horizontal: !0,
                        feature: "slowdown",
                      })
                    : e6(ty, {
                        title: e("Tempo Control"),
                        middleText:
                          "USERS OF THIS FEATURE LEARN TABS 60% FASTER",
                        horizontal: !0,
                        classPrefix: "speed",
                      })
                ),
              v && e6(j, { ...sQ, key: "layer" }, e6(ie, null))
            )
          ),
          e6(
            "div",
            { className: tc.item },
            e6(tg, {
              key: `loop ${S}`,
              icon: "loop",
              pressed: S,
              onClick: this.props.handleLoop,
              title: e("Turn loop mode on (L)"),
              titlePressed: e("Turn loop mode off (L)"),
              hasPopup: O,
              lock: F,
            }),
            e6(
              D,
              null,
              "plus_loop" === s &&
                e6(
                  j,
                  sQ,
                  g
                    ? e6(iu, {
                        title: e("Loop Mode"),
                        device: t,
                        horizontal: !0,
                        feature: "loop",
                      })
                    : e6(ty, {
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
            e6(tg, {
              key: `solo ${k}`,
              icon: "solo",
              disabled: h,
              pressed: k,
              onClick: this.props.handleSolo,
              title: e("Play current track solo (F)"),
              titlePressed: e("Play focus mix of all tracks (F)"),
              hasPopup: O,
              lock: F,
            }),
            e6(
              D,
              null,
              "plus_solo" === s &&
                !h &&
                e6(
                  j,
                  sQ,
                  g
                    ? e6(iu, {
                        title: e("Solo Mode"),
                        device: t,
                        horizontal: !0,
                        feature: "solo",
                      })
                    : e6(ty, {
                        title: e("Solo Mode"),
                        horizontal: !0,
                        classPrefix: "solo",
                      })
                ),
              "solo_single" === s &&
                !h &&
                e6(j, sQ, e6(iS, { title: e("Solo"), horizontal: !0 }))
            )
          ),
          e6(
            "div",
            { className: tc.item },
            e6(tg, {
              key: `mute ${N}`,
              icon: "mute",
              disabled: h,
              pressed: N,
              onClick: this.props.handleMute,
              title: e("Mute current track (M)"),
              titlePressed: e("Unmute current track (M)"),
              hasPopup: O,
              lock: F,
            }),
            e6(
              D,
              null,
              "plus_mute" === s &&
                !h &&
                e6(
                  j,
                  sQ,
                  g
                    ? e6(iu, {
                        title: e("Mute Mode"),
                        device: t,
                        horizontal: !0,
                        feature: "mute",
                      })
                    : e6(ty, {
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
            e6(tg, {
              key: `countin ${L}`,
              icon: "countin",
              disabled: h,
              pressed: L,
              onClick: this.props.handleCountin,
              title: e("Turn count-in mode on (C)"),
              titlePressed: e("Turn count-in mode off (C)"),
            })
          ),
          e6(
            "div",
            { className: tc.item },
            e6(tg, {
              key: `metronome ${M}`,
              icon: "voice" === d ? "voice" : "metronome",
              disabled: h,
              pressed: M,
              onClick: this.props.handleMetronome,
              title: e("Turn metronome on (N)"),
              titlePressed: e("Turn metronome off (N)"),
            }),
            e6(
              D,
              null,
              !h &&
                "metronome" === s &&
                e6(j, { ...sQ, key: "layer" }, e6(sD, null))
            )
          ),
          !p &&
            e6(
              "div",
              { className: tc.item },
              e6(tg, {
                key: `editor ${w} ${a}`,
                icon: "editor",
                pressed: w,
                onClick: this.props.handleTabEditor,
                title: e("Turn tab editor on (E)"),
                titlePressed: e("Turn tab editor off (E)"),
                warning: a,
              }),
              w && e6(j, { ...sQ, key: "tab-editor" }, e6(sg, null))
            ),
          n &&
            !p &&
            e6(
              "div",
              { className: tc.item },
              e6(tg, {
                key: `fingerings ${C} ${r}`,
                loading: C,
                icon: "fingerings",
                pressed: r,
                onClick: this.props.handleFingerings,
                title: e("Generate guitar fingerings (G)"),
                titlePressed: e("Turn fingerings off (G)"),
              }),
              e6(
                D,
                null,
                r && "Loading" !== l && !w && e6(j, sQ, e6(sN, { status: l }))
              )
            ),
          e6(
            "div",
            { className: tc.item },
            e6(tg, {
              key: "print",
              icon: "print",
              onClick: this.props.handlePrint,
              title: "Print (P)",
              pressed: z(u),
              lock: F,
            }),
            e6(
              D,
              null,
              "plus_print" === s &&
                e6(
                  j,
                  sQ,
                  e6(ty, {
                    title: e("Printing"),
                    horizontal: !0,
                    classPrefix: "print",
                  })
                ),
              b && e6(j, { ...sQ, key: "layer" }, e6(sZ, null))
            )
          ),
          e6(
            "div",
            { className: tc.secondaryControls },
            e6(
              "div",
              { className: p ? tc.itemSmall : tc.itemSmallHidden },
              e6(tg, {
                key: `help ${x}`,
                icon: "help",
                pressed: x,
                onClick: this.props.handleNotation,
                title: e("Show drum notation"),
                titlePressed: e("Hide drum notation"),
              }),
              p && e6(I, { usedDrums: p, horizontal: !0 })
            )
          )
        )
      )
    );
  }
}
let s2 = "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z",
  s0 = "M7.5 12h11v-2h-11v2z";
function s5(e) {
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
let s3 = "B7uxe",
  s4 = "B7uxe B7u2i3",
  s7 = "B7u2d7",
  s8 = "B7u1gz",
  s6 = "B7u2d7 B7u12o",
  s9 = "B7u2d7 B7u15f",
  ae = "B7u2lu",
  at = "B7u2xf",
  ai = "B7u1a5",
  as = "B7u1jq",
  aa = "B7u1jq B7u2yh",
  ao = "B7u1jq B7u2yh B7u6z",
  an = "B7u1jq B7u1fq",
  ar = "B7u1b6",
  al = {
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
  ap = 12,
  ah = -12,
  ad = (e) =>
    e.current &&
    (_(e.current.instrumentId) || U(e.current.instrumentId)) &&
    e.current.tuning;
class au extends e8 {
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
      let s = F(i.current, e.audio.getCursor(), "left");
      s && t(null, s.measureLayout.lineLayout, !1);
    }
  }
  tuneUp = (e) => {
    e.preventDefault();
    let { pitchShift: t } = this.props.player;
    t < 12 && V(this.props.store, t + 1);
  };
  tuneDown = (e) => {
    e.preventDefault();
    let { pitchShift: t } = this.props.player;
    t > -12 && V(this.props.store, t - 1);
  };
  reset = (e) => {
    e.preventDefault(), V(this.props.store, 0);
  };
  renderCurrentTuning = () => {
    if (ad(this.props.part)) {
      let e = this.props.part.current.tuning.map(
        (e) => e + this.props.player.pitchShift
      );
      return e6(
        "div",
        { className: al.currentTuning, "aria-label": "Current tuning" },
        e6("div", { className: al.currentTuningHeader }, "CURRENT TUNING"),
        e6("div", { id: "tuning", className: al.tuningString }, X(e))
      );
    }
    return null;
  };
  renderQuickButton = () => {
    if (0 !== this.props.player.pitchShift)
      return e6(
        "button",
        {
          className: al.quickButton,
          onClick: this.reset,
          role: "button",
          "aria-label": "Restore original tuning",
        },
        "Restore original tuning"
      );
    if (ad(this.props.part)) {
      let e = q(
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
              className: al.quickButton,
              role: "button",
              "aria-label": "Quick shift pitch",
              onClick: () => {
                V(this.props.store, e.pitch);
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
        className: al.disabledButton,
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
      { tab: s, tuningButton: a, mobile: o } = this.props,
      n = 0,
      r = 0,
      l = al.pitchshift;
    if (o) (n = -71), (r = -235), (l = al.pitchshiftMobile);
    else if (((n = this.props.firstLineLayoutHeight - 58), (r = 55), s && a)) {
      let e = s.getBoundingClientRect(),
        t = a.getBoundingClientRect();
      (r = t.left - e.left + t.width + 21),
        (n = t.top + t.height - e.top - 77.5);
    }
    return e6(
      "div",
      {
        className: l,
        title: "You can use arrow keys",
        role: "dialog",
        "aria-label": "Shift Pitch",
        "data-tab-control": "pitch",
        style: { top: `${n}px`, left: `${r}px` },
      },
      t || e6("div", { className: al.currentTuningFiller }),
      e6(
        "div",
        { className: al.tuneControls },
        e6(
          "button",
          {
            className: al.updown,
            onClick: this.tuneDown,
            disabled: i <= -12,
            "aria-label": "Step down",
          },
          e6(s5, { up: !1 })
        ),
        e6(
          "span",
          { className: al.currentPitch, "aria-label": "Current pitch" },
          (i > 0 ? "+" : "") + i
        ),
        e6(
          "button",
          {
            className: al.updown,
            onClick: this.tuneUp,
            disabled: i >= 12,
            "aria-label": "Step up",
          },
          e6(s5, { up: !0 })
        )
      ),
      e
    );
  }
}
var ac = s(au, "player", "part");
let am = "B6714x",
  ag = "B67al",
  ay = "B6713d",
  af = "B6711t",
  av = "B6731g",
  ab = "B6731g B679r",
  ax = "B67147",
  aw = {
    mobileSpeed: "B6714x",
    secondary: "B67al",
    controls: "B6713d",
    value: "B6711t",
    button: "B6731g",
    disabled: "B6731g B679r",
    switch: "B67147",
  },
  aC = 30,
  ak = 170,
  aN = 10;
class aS extends e8 {
  constructor() {
    super(), (this.state = { mode: "percent" });
  }
  tuneUp = (e) => {
    let t, i;
    e.preventDefault();
    let { store: s, player: a, tempo: o } = this.props,
      { mode: n } = this.state;
    "percent" === n
      ? ((t = 10), (i = Math.floor(a.speed / t) * t + t))
      : ((t = +(100 / o.tempo.bpm).toFixed(2)), (i = a.speed + t)),
      i <= 170 && i >= 30 && d(s, i);
  };
  tuneDown = (e) => {
    let t, i;
    e.preventDefault();
    let { store: s, player: a, tempo: o } = this.props,
      { mode: n } = this.state;
    "percent" === n
      ? ((t = 10), (i = Math.floor(a.speed / t) * t - t))
      : ((t = +(100 / o.tempo.bpm).toFixed(2)), (i = a.speed - t)),
      i <= 170 && i >= 30 && d(s, i);
  };
  switchMode = () => {
    let { mode: e } = this.state;
    this.setState({ mode: "percent" === e ? "bpm" : "percent" });
  };
  render() {
    let e, t;
    let { tempo: i } = this.props,
      { speed: s } = this.props.player,
      { mode: o } = this.state,
      n = a(s, i.tempo),
      r = Math.round(s),
      l = aw.disabled,
      p =
        "percent" === o
          ? 10 * Math.floor(s / 10) - 10
          : s - +(100 / i.tempo.bpm).toFixed(2);
    p >= 30 && ((l = aw.button), (e = this.tuneDown));
    let h = aw.disabled,
      d =
        "percent" === o
          ? 10 * Math.floor(s / 10) + 10
          : s + +(100 / i.tempo.bpm).toFixed(2);
    return (
      d <= 170 && ((h = aw.button), (t = this.tuneUp)),
      e6(
        "div",
        { className: aw.mobileSpeed, role: "dialog", "aria-label": "Speed" },
        e6(
          "p",
          { className: aw.secondary },
          "percent" === o ? `${n.bpm} bpm` : `${r}%`
        ),
        e6(
          "div",
          { className: aw.controls },
          e6("button", { className: l, onClick: e }, e6(s5, { up: !1 })),
          e6(
            "div",
            { className: aw.value },
            e6("p", null, "percent" === o ? `${r}%` : n.bpm),
            "bpm" === o && e6("span", null, "bpm")
          ),
          e6("button", { className: h, onClick: t }, e6(s5, { up: !0 }))
        ),
        e6(
          "button",
          { className: aw.switch, onClick: this.switchMode },
          `Switch to ${"percent" === o ? "bpm" : "%"}`
        )
      )
    );
  }
}
var aL = s(aS, "player", "tempo");
let aM = "n8g5",
  a$ = "n8n1",
  aB = "n885",
  aT = "n885 n81jn",
  aP = "n82pa",
  aE = "n835f",
  aD = "n82pa n81e8",
  aj = "n82pa n813x",
  aA = "n81sz",
  az = "n81sz n8on",
  aI = "n819i",
  aO = "n81z",
  aR = "n81yu",
  aF = "n82mi",
  aV = "n8kg",
  aX = {
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
  aq = { animationStyles: Y };
class a_ extends e8 {
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
  componentDidUpdate(e) {
    let {
      usedDrums: t,
      fingeringsOnActivate: i,
      playAlongAdOpened: s,
    } = this.props;
    t || this.state.minimized || i(),
      e.playAlongAdOpened || !s || this.state.minimized || this.hide();
  }
  constructor(e) {
    super(e), (this.state = { minimized: !1, overflowVisible: !0 });
  }
  render() {
    let {
        device: e,
        layer: t,
        shouldPlay: i,
        canPlay: s,
        pitchShift: a,
        pitchShiftAvailable: o,
        speed: n,
        fingeringsStatus: r,
        fingeringsActive: l,
        fingeringsEnabled: p,
        videoIsOpened: h,
        usedDrums: d,
        metronomeType: u,
      } = this.props,
      { minimized: m, overflowVisible: g } = this.state,
      { print: f, experiments: v } = y("print", "experiments"),
      b = "speed" === t,
      x = "pitchshift" === t && !h,
      w = "Loading" === r,
      C = p && !d,
      k = "solo" === this.props.type && !h,
      N = "mute" === this.props.type && !h,
      S = this.props.speed !== H || b,
      L = this.props.loop,
      M = this.props.isCountin && !h,
      $ = (0 !== a || x) && !h,
      B = this.props.isMetronome && !h,
      P = !this.props.plusAccess,
      E = !this.props.plusAccess,
      A = c(e.os) || T(e.os),
      I = "print" === t && "on" === v.print_scale.segment,
      O = { height: `${471 + 57 * (o ? 1 : 0) + 57 * (C ? 1 : 0)}px` },
      R = aX.features;
    m ? (O.height = "71px") : g && (R = aX.featuresActive);
    let F = `${Math.round(n)}%`;
    return e6(
      "footer",
      { className: aX.controls, "data-controls": "tablature" },
      e6(
        "svg",
        { width: 0, height: 0 },
        e6("defs", null, e6(tf, {}), e6(tv, {}))
      ),
      e6(
        "div",
        { className: aX.alt, id: "alt-controls" },
        e6(tm, {
          shouldPlay: i,
          canPlay: s,
          onClick: this.props.handlePlay,
          title: "Play",
          hideDefs: !0,
        })
      ),
      e6(
        "div",
        { className: aX.float, id: "mobile-controls" },
        e6(
          "div",
          { className: R, style: O },
          e6(
            "div",
            { className: aX.minimize },
            e6(tg, {
              mobile: !0,
              icon: m ? "arrow" : "arrow-down",
              pressed: !1,
              onClick: this.minimizeClick,
              title: "Minimize",
              titlePressed: "Minimize",
            })
          ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              mobile: !0,
              icon: "speed",
              text: F,
              pressed: S,
              onClick: this.props.handleSpeed,
              title: "Change playback speed",
              hasPopup: P,
              lock: E,
            }),
            e6(
              D,
              null,
              "plus_speed" === t &&
                e6(
                  j,
                  aq,
                  A
                    ? e6(iu, {
                        title: "Tempo Control",
                        device: e,
                        mobile: !0,
                        low: !0,
                        feature: "slowdown",
                      })
                    : e6(ty, { title: "Tempo Control", classPrefix: "speed" })
                ),
              b && e6(j, { ...aq, key: "layer" }, e6(aL, null))
            )
          ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              mobile: !0,
              icon: "loop",
              pressed: L,
              onClick: this.props.handleLoop,
              title: "Turn loop mode on",
              titlePressed: "Turn loop mode off",
              hasPopup: P,
              lock: E,
            }),
            e6(
              D,
              null,
              "plus_loop" === t &&
                e6(
                  j,
                  aq,
                  A
                    ? e6(iu, {
                        title: "Loop Mode",
                        device: e,
                        mobile: !0,
                        low: !0,
                        feature: "loop",
                      })
                    : e6(ty, { title: "Loop Mode", classPrefix: "loop" })
                )
            )
          ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              mobile: !0,
              icon: "solo",
              pressed: k,
              disabled: h,
              onClick: this.props.handleSolo,
              title: "Play the current track solo",
              titlePressed: "Play the focus mix of all tracks",
              hasPopup: P,
              lock: E,
            }),
            e6(
              D,
              null,
              "plus_solo" === t &&
                !h &&
                e6(
                  j,
                  aq,
                  A
                    ? e6(iu, {
                        title: "Solo Mode",
                        device: e,
                        mobile: !0,
                        low: !0,
                        feature: "solo",
                      })
                    : e6(ty, { title: "Solo Mode", classPrefix: "solo" })
                ),
              "solo_single" === t &&
                !h &&
                e6(j, aq, e6(iS, { title: "Solo", horizontal: !0 }))
            )
          ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              mobile: !0,
              icon: "mute",
              pressed: N,
              disabled: h,
              onClick: this.props.handleMute,
              title: "Mute current track (M)",
              titlePressed: "Unmute current track (M)",
              hasPopup: P,
              lock: E,
            }),
            e6(
              D,
              null,
              "plus_mute" === t &&
                !h &&
                e6(
                  j,
                  aq,
                  A
                    ? e6(iu, {
                        title: "Mute Mode",
                        device: e,
                        mobile: !0,
                        feature: "mute",
                      })
                    : e6(ty, { title: "Mute Mode", classPrefix: "mute" })
                )
            )
          ),
          C &&
            e6(
              "div",
              { className: aX.item },
              e6(tg, {
                key: `fingerings ${w} ${l}`,
                loading: w,
                icon: "fingerings",
                pressed: l,
                onClick: this.props.handleFingerings,
                title: "Generate guitar fingerings (G)",
                titlePressed: "Turn fingerings off (G)",
              }),
              e6(
                D,
                null,
                l && "Loading" !== r && e6(j, aq, e6(sN, { status: r }))
              )
            ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              mobile: !0,
              icon: "countin",
              pressed: M,
              disabled: h,
              onClick: this.props.handleCountin,
              title: "Turn count-in mode on (C)",
              titlePressed: "Turn count-in mode off (C)",
            })
          ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              icon: "voice" === u ? "voice" : "metronome",
              pressed: B,
              disabled: h,
              onClick: this.props.handleMetronome,
              title: "Turn metronome on (N)",
              titlePressed: "Turn metronome off (N)",
            }),
            e6(
              D,
              null,
              "metronome" === t &&
                !h &&
                e6(j, { ...aq, key: "layer" }, e6(sD, null))
            )
          ),
          o &&
            e6(
              "div",
              { className: aX.item },
              0 !== a &&
                e6(
                  "div",
                  { className: aX.tuningValue },
                  `${a > 0 ? "+" : ""}${a}`
                ),
              e6(tg, {
                key: `tuning ${h} ${$}`,
                mobile: !0,
                icon: "tuning",
                pressed: $,
                disabled: h,
                onClick: this.props.handlePitchshift,
                title: "Pitch Shift on",
                titlePressed: "Pitch Shift off",
                hasPopup: P,
                lock: E,
              }),
              e6(
                D,
                null,
                "plus_pitchshift" === t &&
                  !h &&
                  e6(
                    j,
                    aq,
                    A
                      ? e6(iu, {
                          title: "Pitch Shift",
                          device: e,
                          mobile: !0,
                          feature: "pitch shift",
                        })
                      : e6(ty, { title: "Pitch Shift", classPrefix: "pitch" })
                  ),
                x && e6(j, { ...aq, key: "layer" }, e6(ac, { mobile: !0 }))
              )
            ),
          e6(
            "div",
            { className: aX.item },
            e6(tg, {
              key: "print",
              icon: "print",
              disabled: h,
              onClick: this.props.handlePrint,
              title: "Print (P)",
              pressed: z(f),
              lock: E,
            }),
            e6(
              D,
              null,
              "plus_print" === t &&
                e6(
                  j,
                  aq,
                  e6(ty, {
                    title: "Printing",
                    horizontal: !0,
                    classPrefix: "print",
                  })
                ),
              I && e6(j, { ...aq, key: "layer" }, e6(sZ, null))
            )
          )
        ),
        e6(
          "div",
          { className: aX.play },
          e6(tm, {
            onClick: (e) => {
              this.props.handlePlay(e), this.hide();
            },
            title: "Play",
            titlePressed: "Pause",
            shouldPlay: i,
            canPlay: s,
            hideDefs: !0,
          })
        )
      )
    );
  }
}
let aU = "Brk2di",
  aH = "Brk2yo",
  aY = "Brk1b7",
  aG = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function aW() {
  return e6(
    "div",
    { className: aG.error, role: "alert" },
    e6(
      "h1",
      { className: aG.title },
      e6("span", null, "The song was successfully deleted!")
    ),
    e6(
      "h2",
      { className: aG.subtitle },
      "Try ",
      e6($, { to: "/" }, "searching"),
      " for other songs."
    )
  );
}
class aK extends e8 {
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
function aJ() {
  return e6(
    G,
    {
      level: "notice",
      title:
        "Sorry this content has been removed in your country at the request of the underlying music publisher.",
      action:
        "We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
      reason: "license",
    },
    e6(aK, null)
  );
}
function aZ(e) {
  let { meta: t, user: i, cursor: s, part: a, player: o } = e;
  if (t.loading || a.loading) return;
  let n = !!t.current,
    r = t.current && !!t.current.tracks,
    l = W(t, i),
    p = n && K.get(t.current, J.MASTER),
    h = t.current && t.current.isBlocked;
  if (t.isNotFound || a.isNotFound) return e6(tM, null);
  if (t.isDeleted) return e6(aW, null);
  if (t.isNetworkFailed || a.isNetworkFailed) return e6(t$, null);
  if (t.isFailed || a.isFailed) return e6(tE, null);
  if (!t.allowedByLicense) return e6(aJ, null);
  if (n && !l && p.audioError) {
    let e = p.audioError,
      t = "Our virtual band was unable to play it O_o";
    return (
      e === Z.TOO_LONG && (t = "Its duration exceeds the 30 minutes limit"),
      e6(G, {
        level: "error",
        title: "Sorry, playback is not possible on this song",
        action: t,
        reason: "audio",
      })
    );
  }
  if (n && (!r || !l))
    return e6(G, {
      level: "info",
      title: "Tab audio is being rendered",
      action:
        "We'll send you an email within 15 minutes once your tab is ready",
      reason: "render",
    });
  else if (!o.webworkerOperational)
    return e6(G, {
      level: "info",
      title: "Sorry, playback is not possible on this song",
      action: "Probably there is not enough memory",
      reason: "webworker",
    });
  else if (!o.playbackAvailable || !Q)
    return e6(G, {
      level: "info",
      title: "Sorry, playback is not supported in your browser",
      action: "Try to use latest Google Chrome",
      reason: o.playbackAvailable ? "animate" : "audio",
    });
  else if (o.isAudioNetworkFailed)
    return e6(G, {
      level: "info",
      title: "Audio can't be loaded because of network error.",
      action: "Probably you are offline or connection was canceled",
      reason: "network",
    });
  else if (o.isAudioFailed)
    return e6(G, {
      level: "error",
      title: "Sorry, but there are some problems with playback",
      action: "Please, try to reload page",
      reason: "playback",
    });
  else if (s.isFailed)
    return e6(G, {
      level: "error",
      title: "Sorry, but there are some problems with cursor",
      action: "Please, try to reload page",
      reason: "cursor",
    });
  else if (h)
    return e6(G, {
      level: "notice",
      title: "Sorry, but that revision was blocked",
      action: "Please let us know if you disagree with this decision",
      reason: "block",
    });
}
let aQ = "Bvj22a",
  a1 = ee + " Bvj1o9",
  a2 = "Bvj1b4",
  a0 = { main: "Bvj22a", showroom: ee + " Bvj1o9", banner: "Bvj1b4" },
  a5 = ts(() => {
    let e = tt(),
      { device: t, ads: i } = y("device", "ads", "route", "consent"),
      { alt: s, link: a, image: o } = et(t);
    return e6(
      "section",
      {
        id: "showroom_bottom",
        className: a0.main,
        key: "showroom-bottom",
        ref: e,
      },
      e6(
        "div",
        { className: a0.showroom, id: "Redesign_BTF_tab_page_320x50" },
        i.notsyFailed &&
          e6(
            "a",
            { className: a0.link, href: a, target: "_blank" },
            e6("img", { src: o, className: a0.banner, alt: s })
          )
      )
    );
  });
class a3 extends e8 {
  inputRef = ta();
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
    return e6(
      "li",
      { onClick: this.onClick, key: e },
      i
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
let a4 = "Bwr2bn",
  a7 = "Bwr2bn Bwr31x",
  a8 = "Bwr2yk",
  a6 = "Bwra8",
  a9 = "Bwr1rq",
  oe = "Bwr34e",
  ot = "Bwr34e Bwr25b",
  oi = "Bwrhb",
  os = "Bwrhb Bwr2id",
  oa = "Bwrhb Bwr1xe",
  oo = "Bwrbh",
  on = "Bwrb4",
  or = "Bwr1g3",
  ol = "Bwra6",
  op = {
    container: "Bwr2bn",
    mobileContainer: "Bwr2bn Bwr31x",
    inner: "Bwr2yk",
    video: "Bwra8",
    openSection: "Bwr1rq",
    toggleButton: "Bwr34e",
    toggleButtonClose: "Bwr34e Bwr25b",
    hideBtn: "Bwrhb",
    editorBtn: "Bwrhb Bwr2id",
    hideMobileBtn: "Bwrhb Bwr1xe",
    settings: "Bwrbh",
    videoInput: "Bwrb4",
    buttons: "Bwr1g3",
    timestamps: "Bwra6",
  },
  oh = "playedVideoFor10Seconds",
  od = (e, t) => document.querySelector(`iframe#youtube-player-${e}-${t}`),
  ou = () => {
    try {
      return window.location.hostname;
    } catch {
      return;
    }
  };
class oc extends e8 {
  playerAPI = null;
  playTimer = null;
  delayTimer = null;
  listRef = ta();
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
    let { songId: t, part: i, player: s } = this.props,
      a = e.songId,
      o = e.part.videoOffset,
      n = e.part.videoId;
    if (t !== a || i.videoOffset !== o || i.videoId !== n) {
      s.video.destroy();
      let e = od(n, a);
      for (; e; ) e.remove(), (e = od(n, a));
      this.loadVideo();
    }
  }
  componentWillUnmount() {
    this.props.player.video.destroy(),
      clearTimeout(this.playTimer),
      clearTimeout(this.delayTimer),
      window.hotKeysManager.unbindOne("j", { global: !0 });
  }
  loadVideo = () => {
    try {
      let {
          songId: e,
          cursor: { position: t },
          player: { video: i, speed: s },
          part: a,
          screen: o,
          dispatch: n,
        } = this.props,
        r = a.videoId,
        l = a.videoOffset;
      this.playerAPI = new window.YT.Player(`youtube-player-${r}-${e}`, {
        videoId: r,
        playerVars: {
          controls: 0,
          disablekb: 1,
          showinfo: 0,
          rel: 0,
          modestbranding: 0,
          origin: ou(),
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          enablejsapi: 1,
          start: Math.floor(l) + t.cursor / 1e3,
        },
        width: o.isSmall ? "200" : "355",
        height: "200",
        events: {
          onReady: () => {
            i.load(this.playerAPI, l, t, s);
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
      s = [...i];
    (s[e] = t), this.setState({ timestamps: s });
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
    ei(oh) ||
      (this.props.dispatch("curiosity/event", {
        event: "Played video for 10 sec first time",
      }),
      es(oh, !0));
  };
  reportDelay = () => {
    let {
      player: { video: e, audio: t },
      experiments: i,
    } = this.props;
    if (i.play_along_mobile) {
      let i = e.getCurrentTime() - e.toSecondsPlusOffset(t.getCursor());
      this.props.dispatch("curiosity/event", {
        event: "Delay between video and cursor",
        delay: +i.toFixed(3),
      });
    }
  };
  onYTPlayerStateChange = (e) => {
    switch (e.data) {
      case 1:
        this.props.handlePlayVideo(),
          window.focus(),
          clearTimeout(this.delayTimer),
          (this.delayTimer = setTimeout(this.reportDelay, 2e3)),
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
  openVideo = () => {
    let { dispatch: e, experiments: t } = this.props;
    e("part/toggleVideo"),
      t.play_along_mobile &&
        this.props.dispatch("curiosity/event", { event: "Opened video" });
  };
  closeVideo = () => {
    let { dispatch: e, experiments: t } = this.props;
    e("part/toggleVideo"),
      t.play_along_mobile &&
        this.props.dispatch("curiosity/event", { event: "Closed video" });
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
      { songId: t, part: i, user: s, screen: a } = this.props,
      { timestamps: o, openedEditor: n } = this.state,
      r = ea(s, eo.USE_VIDEO_SYNCHRONISATION),
      l = a.isSmall ? op.mobileContainer : op.container,
      p = a.isSmall ? op.hideMobileBtn : op.hideBtn;
    return [
      e
        ? e6(
            "div",
            { className: op.openSection },
            e6(
              "button",
              {
                className: op.toggleButtonClose,
                onClick: this.closeVideo,
                id: "close-video",
                tittle: "Close video",
              },
              "Close official audio"
            )
          )
        : e6(
            "div",
            { className: op.openSection },
            e6(
              "button",
              {
                className: op.toggleButton,
                onClick: this.openVideo,
                id: "open-video",
                tittle: "Open video",
              },
              "Play along with official audio"
            )
          ),
      e6(
        "div",
        {
          className: l,
          style: `display: ${e ? "block" : "none"}`,
          id: "youtube-container",
        },
        e6(
          "div",
          { className: op.inner },
          n &&
            r &&
            e6(
              "div",
              { className: op.settings },
              e6("input", {
                className: op.videoInput,
                type: "text",
                placeholder: "videoId",
                onBlur: this.changeVideoId,
              }),
              e6(
                "div",
                { className: op.timestamps, ref: this.listRef },
                e6(
                  "ul",
                  null,
                  o.map((e, t) =>
                    e6(a3, {
                      index: t,
                      value: e,
                      editValue: this.editTimestamp,
                    })
                  )
                )
              ),
              e6(
                "div",
                { className: op.buttons },
                e6("button", { onClick: this.syncClick }, "Sync"),
                e6("button", { onClick: this.saveClick }, "Save"),
                e6("button", { onClick: this.resetPoints }, "Reset")
              )
            ),
          e6(
            "div",
            { className: op.video, id: "youtube-video-container" },
            e6("div", { id: `youtube-player-${i.videoId}-${t}` }),
            !n &&
              e6(
                "button",
                {
                  className: p,
                  onClick: this.closeVideo,
                  tittle: "Close video",
                  id: "close-video-tag",
                },
                e6(
                  "svg",
                  { width: 14, height: 14 },
                  e6("rect", {
                    width: 1.5,
                    height: 18,
                    y: 1,
                    fill: "#fff",
                    rx: 0.75,
                    transform: "rotate(-45 0 1)",
                  }),
                  e6("rect", {
                    width: 1.5,
                    height: 18,
                    x: 12.7,
                    fill: "#fff",
                    rx: 0.75,
                    transform: "rotate(45 12.7 0)",
                  })
                )
              ),
            !a.isSmall &&
              r &&
              e6(
                "button",
                {
                  className: op.editorBtn,
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
var om = s(oc, "player", "cursor", "part", "user", "screen", "experiments");
let og = "Bmc1ad",
  oy = "Bmcp7",
  of = "Bmc18w",
  ov = "Bmc20d",
  ob = "Bmc26v",
  ox = "Bmc23j",
  ow = "Bmc1ps",
  oC = "Bmc1ps Bmcm3",
  ok = "Bmc1ps Bmc16f",
  oN = "Bmc1ll",
  oS = {
    ad: "Bmc1ad",
    yellow: "Bmcp7",
    blue: "Bmc18w",
    green: "Bmc20d",
    circles: "Bmc26v",
    plus: "Bmc23j",
    adButton: "Bmc1ps",
    plans: "Bmc1ps Bmcm3",
    demo: "Bmc1ps Bmc16f",
    plusText: "Bmc1ll",
  },
  oL = class extends e8 {
    render = () => {
      let {
        onYTLogoClick: e,
        onPlusLinkClick: t,
        onDemoLinkClick: i,
        isOpened: s,
      } = this.props;
      return e6(
        "div",
        {
          className: oS.ad,
          style: `display: ${s ? "flex" : "none"}`,
          id: "youtube-ad",
        },
        e6("div", { className: oS.yellow }),
        e6("div", { className: oS.blue }),
        e6("div", { className: oS.green }),
        e6(
          "div",
          { className: oS.circles },
          e6(
            "svg",
            {
              width: 360,
              height: 180,
              viewBox: "0 0 360 180",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e6("circle", {
              cx: 279,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            e6("circle", {
              cx: 181,
              cy: 90,
              r: 90,
              fillOpacity: 0.1,
              fill: "#fff",
            }),
            e6("circle", {
              cx: 82,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            e6("circle", {
              cx: -3,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            e6("circle", {
              cx: 367,
              cy: 90,
              r: 90,
              fillOpacity: 0.1,
              fill: "#fff",
            })
          )
        ),
        e6(
          "div",
          { className: oS.plus },
          e6(
            $,
            {
              to: "/a/wa/plus",
              "aria-label": "See plans and pricing",
              onClick: e,
            },
            e6(tD, { width: 104, height: 73 })
          ),
          e6(
            "p",
            { className: oS.plusText },
            "Play along with",
            e6("br", null),
            "Official Audio on Plus plan"
          ),
          e6(
            "div",
            { className: oS.buttons },
            e6(
              $,
              {
                to: "/a/wa/plus",
                "aria-label": "See plans and pricing",
                onClick: t,
              },
              e6(
                "button",
                {
                  className: oS.plans,
                  tittle: "Plans and Pricing",
                  alt: "plans&pricing",
                },
                "See plans and pricing"
              )
            ),
            e6(
              $,
              {
                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                "aria-label": "On the demo song",
                onClick: i,
              },
              e6(
                "button",
                {
                  className: oS.demo,
                  tittle: "On the demo song",
                  alt: "demo song",
                },
                "Try on the demo song"
              )
            )
          )
        )
      );
    };
  };
var oM = "/static/media/guitarist1.9e7bdbba.png",
  o$ = "/static/media/guitarist1.248c82bc.webp",
  oB = "/static/media/guitarist2.a198f632.png",
  oT = "/static/media/guitarist2.2f1df3af.webp",
  oP = "/static/media/guitarist3.b1b8abdb.png",
  oE = "/static/media/guitarist3.4dba70b0.webp";
let oD = "o3108",
  oj = "o31st",
  oA = "o30",
  oz = "o320m",
  oI = "o32k",
  oO = "o31fn",
  oR = "o319v",
  oF = "o32qe",
  oV = "o3a1",
  oX = "o32lz",
  oq = "o3s2",
  o_ = "o3s2 o31wv",
  oU = "o3s2 o324",
  oH = "o31rh",
  oY = {
    ad: "o3108",
    adMobile: "o31st",
    circles: "o30",
    background: "o320m",
    ellipse1: "o32k",
    ellipse2: "o31fn",
    ellipse3: "o319v",
    yellow: "o32qe",
    blue: "o3a1",
    green: "o32lz",
    adButton: "o3s2",
    plans: "o3s2 o31wv",
    demo: "o3s2 o324",
    plusText: "o31rh",
  },
  oG =
    "M306.56 175A165.5 165.5 0 0 0 329 91.5c0-33.83-10.09-65.3-27.4-91.5H27.4A165.44 165.44 0 0 0 0 91.5 165.5 165.5 0 0 0 22.44 175h284.12Z";
class oW extends e8 {
  render = () => {
    let {
      onYTLogoClick: e,
      onPlusLinkClick: t,
      onDemoLinkClick: i,
      isOpened: s,
    } = this.props;
    return e6(
      "div",
      {
        className: oY.ad,
        style: `display: ${s ? "block" : "none"}`,
        id: "youtube-ad",
      },
      e6(
        "div",
        { className: oY.yellow },
        e6(
          "picture",
          {},
          e6("source", { srcSet: o$, type: "image/webp" }),
          e6("img", {
            height: 200,
            width: 163,
            src: oM,
            alt: "First guitarist",
          })
        )
      ),
      e6(
        "div",
        { className: oY.blue },
        e6(
          "picture",
          {},
          e6("source", { srcSet: oT, type: "image/webp" }),
          e6("img", {
            height: 266,
            width: 118,
            src: oB,
            alt: "Second guitarist",
          })
        ),
        e6(
          $,
          {
            to: "/a/wa/plus",
            "aria-label": "See plans and pricing",
            onClick: e,
          },
          e6(tD, { width: 127, height: 97 })
        )
      ),
      e6(
        "div",
        { className: oY.background },
        e6(
          "svg",
          {
            className: oY.ellipse1,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e6("path", { d: oG, fillOpacity: 0.12, fill: "#fff" })
        ),
        e6(
          "svg",
          {
            className: oY.ellipse2,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e6("path", { d: oG, fillOpacity: 0.12, fill: "#fff" })
        ),
        e6(
          "svg",
          {
            className: oY.ellipse3,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e6("path", { d: oG, fillOpacity: 0.12, fill: "#fff" })
        )
      ),
      e6(
        "div",
        { className: oY.green },
        e6(
          "picture",
          {},
          e6("source", { srcSet: oE, type: "image/webp" }),
          e6("img", {
            height: 200,
            width: 163,
            src: oP,
            alt: "Third guitarist",
          })
        )
      ),
      e6(
        "p",
        { className: oY.plusText },
        "Play along with Official Audio on Plus plan"
      ),
      e6(
        $,
        { to: "/a/wa/plus", "aria-label": "See plans and pricing", onClick: t },
        e6(
          "button",
          {
            className: oY.plans,
            tittle: "Plans and Pricing",
            alt: "plans&pricing",
          },
          "See plans and pricing"
        )
      ),
      e6(
        $,
        {
          to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
          "aria-label": "On the demo song",
          onClick: i,
        },
        e6(
          "button",
          { className: oY.demo, tittle: "On the demo song", alt: "demo song" },
          "Try on the demo song"
        )
      )
    );
  };
}
let oK = "Cc92gg",
  oJ = "Cc91c2",
  oZ = "Cc91c2 Cc91oc",
  oQ = {
    openSection: "Cc92gg",
    toggleButton: "Cc91c2",
    toggleButtonClose: "Cc91c2 Cc91oc",
  };
class o1 extends e8 {
  toggleAd = () => {
    this.props.dispatch("playAlongAd/toggle");
  };
  openAd = () => {
    let { dispatch: e, experiments: t } = this.props;
    e("playAlongAd/toggle"),
      t.play_along_mobile &&
        this.props.dispatch("curiosity/event", { event: "Opened video ad" });
  };
  closeAd = () => {
    let { dispatch: e, experiments: t } = this.props;
    e("playAlongAd/toggle"),
      t.play_along_mobile &&
        this.props.dispatch("curiosity/event", { event: "Closed video ad" });
  };
  onDemoLinkClick = () => {
    this.props.dispatch("demo/activate", "play-along");
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
    let { isSmall: e } = this.props.screen,
      { isOpened: t } = this.props.playAlongAd,
      i = e ? oL : oW;
    return [
      t
        ? e6(
            "div",
            { className: oQ.openSection },
            e6(
              "button",
              {
                className: oQ.toggleButtonClose,
                onClick: this.closeAd,
                id: "close-video",
                tittle: "Close video",
              },
              "Close official audio"
            )
          )
        : e6(
            "div",
            { className: oQ.openSection },
            e6(
              "button",
              {
                className: oQ.toggleButton,
                onClick: this.openAd,
                id: "open-video",
                tittle: "Open video",
              },
              "Play along with official audio"
            )
          ),
      e6(i, {
        isOpened: t,
        onYTLogoClick: this.onYTLogoClick,
        onPlusLinkClick: this.onPlusLinkClick,
        onDemoLinkClick: this.onDemoLinkClick,
      }),
    ];
  };
}
var o2 = s(o1, "playAlongAd", "screen", "experiments");
let o0 = "Ckd11i",
  o5 = "Ckdzh",
  o3 = "Ckd22n",
  o4 = "Ckd11i Ckduv",
  o7 = "Ckdte",
  o8 = {
    btn: "Ckd11i",
    shape: "Ckdzh",
    bg: "Ckd22n",
    active: "Ckd11i Ckduv",
    badge: "Ckdte",
  };
function o6(e) {
  let {
      reference: t,
      handlePitchshift: i,
      isActive: s,
      isPitchshiftToStandard: a,
      lock: o,
    } = e,
    {
      player: { pitchShift: n },
    } = y("player"),
    r = "Shift pitch (R)";
  0 !== n
    ? (r = "Pitch shifted (R)")
    : a && (r = "Pitch can be shifted to match standard tuning (R)");
  let l = 5 * (Math.abs(n).toString(10).length - 1) + (n > 0 ? 2 : 0);
  return e6(
    "g",
    {
      vectorEffect: "non-scaling-stroke",
      transform: "translate(-8 -47)",
      className: s ? o8.active : o8.btn,
      onClick: i,
      "data-tab-control": "tuning-button",
    },
    e6("title", null, r),
    e6("rect", {
      x: 0,
      y: 3,
      rx: 4,
      ry: 4,
      width: 25,
      height: 23,
      filter: "url(#svg_shadow)",
      className: o8.bg,
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
    (a || 0 !== n) &&
      e6("rect", {
        x: 18,
        y: 0,
        width: 13 + l,
        height: 13,
        rx: 6.5,
        ry: 6.5,
        className: o8.badge,
      }),
    0 !== n && e6("text", { x: 20, y: 9.5 }, `${n > 0 ? "+" : ""}${n}`),
    o &&
      e6(
        "g",
        { transform: "translate(-17, -12)" },
        e6("circle", {
          className: o8.bg,
          cx: "16.5",
          cy: "15.5",
          r: "8.5",
          filter: "url(#svg_shadow_light)",
        }),
        e6("path", {
          className: o8.lock,
          d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
        }),
        e6("circle", { className: o8.shape, cx: 16.5, cy: 17, r: 0.8 })
      )
  );
}
let o9 = to(null),
  ne = "Bhf2w4",
  nt = "Bhf1e0",
  ni = "Bhf2h5",
  ns = "Bhf1on",
  na = "Bhf45",
  no = {
    toast: "Bhf2w4",
    toast__text: "Bhf1e0",
    toast__closeBtn: "Bhf2h5",
    goodToast: "Bhf1on",
    badToast: "Bhf45",
  };
var nn = "/static/media/positiveMarker.bc247688.svg",
  nr = "/static/media/negativeMarker.50879a92.svg";
let nl = (e) => {
    let { close: t, timeout: i = 5e3, text: s, type: a } = e;
    return (
      tn(() => {
        let e = setTimeout(t, i);
        return () => clearTimeout(e);
      }, [t, i]),
      e6(
        "div",
        { className: no.toast },
        "good" === a
          ? e6(
              "div",
              { className: no.goodToast },
              e6(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17",
                  height: "25",
                  fill: "none",
                },
                e6("use", { xlinkHref: `${nn}#icon` })
              )
            )
          : e6(
              "div",
              { className: no.badToast },
              e6(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17",
                  height: "25",
                  fill: "none",
                },
                e6("use", { xlinkHref: `${nr}#icon` })
              )
            ),
        e6(
          "div",
          { className: no.toast__text },
          s,
          e6("button", { className: no.toast__closeBtn, onClick: t }, "Γ£ò")
        )
      )
    );
  },
  np = (e) => {
    let { children: t, device: i } = e,
      [s, a] = ti(null),
      o = (e) => {
        let { text: t, type: i } = e;
        a({ text: t, type: i });
      },
      n = () => {
        a(null);
      },
      r = tr(() => ({ open: o }), []);
    return e6(o9.Provider, {
      value: r,
      children: [
        !i.isDesktop &&
          tl(
            e6(
              D,
              null,
              s &&
                e6(
                  j,
                  { animationStyles: tk, timeout: 150 },
                  e6(nl, { close: n, text: s.text, type: s.type })
                )
            ),
            document.body
          ),
        t,
      ],
    });
  },
  nh = "Chc1pg",
  nd = "Chc2v9",
  nu = "Chcl9",
  nc = "Chclw",
  nm = "Chc14h",
  ng = "Chcfq",
  ny = "Chctb",
  nf = "Chc2va",
  nv = "Chc28t",
  nb = "Chc29",
  nx = "Chc31o",
  nw = "Chc1aq",
  nC = "Chca7",
  nk = {
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
  nN = [5, 12, 19, 25],
  nS = (e, t, i) =>
    `M${e + 7} ${
      t + 13
    }l-2 3-2-3c-2 0-3-1-3-3v-8c0-2 1-3 3-3h${i}c2 0 3 1 3 3v8c0 2-1 3-3 3z`;
class nL extends e8 {
  static contextType = o9;
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
        tp("circle", {
          className: nk.decorationCircle,
          r: 3,
          cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: t + 6,
        }),
        tp("circle", {
          className: nk.decorationCircleHole,
          r: 3,
          cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: t + 6,
        }),
      ],
      s = [];
    for (let i = 0; i < 7; i++) {
      let a = 0.9 * i,
        o =
          (14 + String(this.props.barNumber + 1).length) * Math.cos(a) +
          e +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        n = 14 * Math.sin(a) + t + 6,
        r =
          (14 + String(this.props.barNumber + 1).length) *
            Math.cos(a + 0.45 * Math.random() - 0.225) +
          e +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        l = 14 * Math.sin(a + 0.45 * Math.random() - 0.225) + t + 6,
        p = tp("circle", {
          cx: o,
          cy: n,
          r: 0.75,
          className: `${nk.particle} ${nk.particle_big}`,
        }),
        h = tp("circle", {
          cx: r,
          cy: l,
          r: 0.5,
          className: `${nk.particle} ${nk.particle_small}`,
        });
      s.push(p, h);
    }
    return [i, tp("g", { className: nk.particles, children: s })];
  };
  componentDidUpdate(e) {
    e.isLearned !== this.props.isLearned &&
      (this.setState({ clicked: !0 }),
      setTimeout(() => {
        this.setState({ clicked: !1 });
      }, 1e3));
  }
  render() {
    let { x: e, y: t, barNumber: i, isLearned: s } = this.props,
      a = `add-${i}`,
      o = "".padEnd(1 + 2 * String(i).length, "."),
      n = nN[i.toString().length - 1];
    return s
      ? tp("g", {
          onClick: this.onBarClick,
          className: nk.group,
          "data-tab-control": "marker",
          children: [
            this.props.isMobileOs &&
              tp("rect", {
                x: e - 10,
                y: t - 8,
                width: 30 + n,
                height: 30,
                fillOpacity: 0,
              }),
            this.props.showAnimation &&
              this.state.clicked &&
              this.getMarkerParticles(e, t),
            tp("g", {
              className:
                this.props.showAnimation &&
                this.state.clicked &&
                nk.learnedMarkerContainerWithAnime,
              children: [
                tp("path", { className: nk.learnedMarker, d: nS(e, t, n) }),
                tp("text", {
                  className: nk.markerText,
                  x: e + 2.4,
                  y: t + 10,
                  id: a,
                  children: i,
                }),
              ],
            }),
          ],
        })
      : tp("g", {
          className: nk.group,
          onClick: this.onBarClick,
          "data-tab-control": "marker",
          children: [
            this.props.isMobileOs &&
              tp("rect", {
                x: e - 10,
                y: t - 8,
                width: 30 + n,
                height: 30,
                fillOpacity: 0,
              }),
            tp(
              "text",
              { className: nk.number, x: 2 + e, y: t + 10, children: i },
              "number"
            ),
            tp("text", {
              className: nk.dots,
              x: 1 + e,
              y: t + 14,
              children: o,
            }),
            !this.props.isMobileOs &&
              tp("path", {
                className: nk.markerTransparent,
                d: nS(e, t, n + 107),
              }),
          ],
        });
  }
}
let nM = [5, 12, 19, 25],
  n$ = (e, t, i) =>
    `M${e + 7} ${
      t + 14
    }l-2 3-2-3c-2 0-3-1-3-3v-9c0-2 1-3 3-3h${i}c2 0 3 1 3 3v9c0 2-1 3-3 3z`;
class nB extends e8 {
  static contextType = o9;
  labelRef = ta();
  onBarClick = () => {
    let { barNumber: e, isLearned: t, onToggle: i } = this.props;
    i(e, t),
      this.context.open(
        t
          ? { text: "Marked as not learned", type: "bad" }
          : { text: "Marked as learned", type: "good" }
      ),
      this.labelRef.current.classList.remove(nk.activeGroup);
  };
  constructor(e) {
    super(e), (this.addActiveClass = this.addActiveClass.bind(this));
  }
  addActiveClass() {
    this.labelRef.current.classList.add(nk.activeGroup);
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
        tp("circle", {
          className: nk.decorationCircle,
          r: 3,
          cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: t + 6,
        }),
        tp("circle", {
          className: nk.decorationCircleHole,
          r: 3,
          cx: e + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: t + 6,
        }),
      ],
      s = [];
    for (let i = 0; i < 7; i++) {
      let a = 0.9 * i,
        o =
          (14 + String(this.props.barNumber + 1).length) * Math.cos(a) +
          e +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        n = 14 * Math.sin(a) + t + 6,
        r =
          (14 + String(this.props.barNumber + 1).length) *
            Math.cos(a + 0.45 * Math.random() - 0.225) +
          e +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        l = 14 * Math.sin(a + 0.45 * Math.random() - 0.225) + t + 6,
        p = tp("circle", {
          cx: o,
          cy: n,
          r: 0.75,
          className: `${nk.particle} ${nk.particle_big}`,
        }),
        h = tp("circle", {
          cx: r,
          cy: l,
          r: 0.5,
          className: `${nk.particle} ${nk.particle_small}`,
        });
      s.push(p, h);
    }
    return [i, tp("g", { className: nk.particles, children: s })];
  };
  render() {
    let {
        x: e,
        y: t,
        barNumber: i,
        isLearned: s,
        isLoopChanging: a,
      } = this.props,
      o = `add-${i}`,
      n = nM[i.toString().length - 1];
    return tp("g", {
      className: nk.group,
      onClick: this.onBarClick,
      "data-tab-control": "marker",
      children: [
        !this.props.isMobileOs &&
          !a &&
          tp("g", {
            className: `${nk.hideGroup} ${nk.activeGroup}`,
            ref: this.labelRef,
            children: s
              ? [
                  tp("path", { className: nk.marker, d: n$(e, t, n + 107) }),
                  tp("text", {
                    className: nk.markerText,
                    x: e + 2.4,
                    y: t + 10,
                    id: o,
                    children: `${i} Mark as not learned`,
                  }),
                ]
              : [
                  tp("path", { className: nk.marker, d: n$(e, t, n + 87) }),
                  tp("text", {
                    className: nk.markerText,
                    x: e + 2.4,
                    y: t + 10,
                    id: o,
                    children: `${i} Mark as learned`,
                  }),
                ],
          }),
      ],
    });
  }
}
function nT() {
  return -18;
}
let nP = ts((e) => {
  let { line: t, partId: i, songId: s } = e,
    {
      learnMarkers: a,
      experiments: o,
      device: n,
      player: r,
      dispatch: l,
    } = y("learnMarkers", "experiments", "device", "player"),
    p = a.data.find((e) => e.songId === s && e.partId === i)?.learnedBars || [],
    h = o.marked_as_learned_animation?.segment === "on",
    d = tr(() => P(n) || c(n.os) || T(n.os), [n]),
    u = e9(
      (e, t) => {
        l("learnMarkers/markToggle", {
          songId: s,
          partId: i,
          barNumber: e,
          isLearned: t,
        }),
          o.marked_as_learned_animation?.status === "pending" &&
            l("experiments/activate", {
              experimentName: "marked_as_learned_animation",
            });
      },
      [s, i]
    ),
    m = [],
    g = [];
  for (let e of t.layout.measureLayouts) {
    let t = e.measure;
    if (t.layouts[0] !== e) continue;
    let i = en(t).x + 2,
      s = nT(),
      a = t.index + 1,
      o = p.includes(a);
    m.push(
      tp(nL, {
        x: i,
        y: s,
        barNumber: a,
        isLearned: o,
        showAnimation: h,
        isMobileOs: d,
        isLoopChanging: r.isLoopChanging,
        onToggle: u,
      })
    ),
      g.push(
        tp(nB, {
          x: i,
          y: s,
          barNumber: a,
          isLearned: o,
          showAnimation: h,
          isMobileOs: d,
          isLoopChanging: r.isLoopChanging,
          onToggle: u,
        })
      );
  }
  return tp(te, { children: [m, g] });
});
function nE() {
  return -18;
}
let nD = ts((e) => {
    let { line: t } = e,
      i = [];
    for (let e of t.layout.measureLayouts) {
      let t = e.measure;
      if (t.layouts[0] !== e) continue;
      let s = en(t).x + 2,
        a = nE(),
        o = t.index + 1;
      i.push(
        tp("g", {
          className: nk.group,
          children: [
            tp(
              "text",
              { className: nk.number, x: 2 + s, y: a + 10, children: o },
              "number"
            ),
          ],
        })
      );
    }
    return tp(te, { children: [i] });
  }),
  nj = "C351",
  nA = { text: "C351" };
function nz(e) {
  let { text: t, layout: i, xoffset: s } = e,
    a = t.layer;
  if (a) {
    let e = i ? a.x1 - i.absoluteX : a.x1,
      o = -1 * a.y;
    return tp("text", {
      className: nA.text,
      x: e + s,
      y: o,
      dy: "-0.25em",
      children: t.text,
    });
  }
  return null;
}
let nI =
    "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
  nO =
    "M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  nR = "c1.25-.25 2.75-2.25 3-2.75h1z",
  nF =
    "c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  nV = "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
  nX = `${nO}${nR}`,
  nq = `${nO}${nF}${nR}`,
  n_ = `${nO}${nF}${nF}${nR}`,
  nU = `${nO}${nF}${nF}${nF}${nR}`,
  nH = `${nO}${nF}${nF}${nF}${nF}${nR}`,
  nY = "M0-4l9 8m0-8l-9 8",
  nG = "M-2-7l6.5-4l6.5 4",
  nW = "M-2-7h8l5 -5",
  nK = "M0 3l4.7-7 4.7 7z",
  nJ = "M5-4.5l5 4-5 4-5-4 5-4z",
  nZ = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
  nQ = `${nZ}${nY}`,
  n1 = `${nZ}M9-4L0 4`,
  n2 =
    "M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
  n0 = `${n2}M-3-6L12 5`,
  n5 = "M-4 0l16 0";
function n3(e) {
  let t = e.line.layout.intervalSize,
    i = e.line.strings,
    s = (i <= 4 ? t : 0) - 2 * (t - 12),
    a = 0 !== s ? `translate(0, ${-s})` : void 0,
    o = [
      tp("ellipse", { id: "dot", cx: 10, cy: 17.5 - s, rx: 1.5, ry: 1.5 }),
      tp("rect", { id: "rest1", y: 24 - s, x: -6, width: 12, height: 6 }),
      tp("rect", { id: "rest2", y: 18 - s, x: -6, width: 12, height: 6 }),
      tp("path", {
        id: "rest4",
        transform: a,
        d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
      }),
      tp("path", { id: "rest8", transform: a, d: nX }),
      tp("path", { id: "rest16", transform: a, d: nq }),
      tp("path", { id: "rest32", transform: a, d: n_ }),
      tp("path", { id: "rest64", transform: a, d: nU }),
      tp("path", { id: "rest128", transform: a, d: nH }),
      tp("path", {
        id: "tempo",
        d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
      }),
    ],
    n = !this.props.part.usedDrums;
  return tp("defs", {
    children: n
      ? o
      : [
          ...o,
          tp("path", { id: "drumCross", d: nY }),
          tp("path", {
            id: "drumHat",
            d: "M-2-7l6.5-4l6.5 4",
            style: "fill: none",
          }),
          tp("path", {
            id: "drumHatEdge",
            d: "M-2-7h8l5 -5",
            style: "fill: none",
          }),
          tp("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
          tp("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
          tp("path", { id: "drumCircleCross", d: nQ, style: "fill: none" }),
          tp("path", { id: "drumCircleStroke", d: n1, style: "fill: none" }),
          tp("path", { id: "drum", d: n2 }),
          tp("path", { id: "drumStroke", d: n0 }),
          tp("path", { id: "extraLine", d: "M-4 0l16 0" }),
        ],
  });
}
let n4 = "bh1o4",
  n7 = "bh162",
  n8 = "bh162 bhth",
  n6 = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
  n9 = 46;
function re(e) {
  let { layer: t } = e,
    { x1: i, x2: s, y: a } = t,
    o = s - i,
    n = -1 * a - 2,
    r = [
      tp(
        "text",
        { className: n6.text, x: i, y: n, children: "let ring" },
        "let ring"
      ),
    ];
  return (
    o > 46 &&
      (r.push(
        tp(
          "line",
          {
            className: n6.dotted,
            x1: 46 + i,
            y1: -3 + n,
            x2: o - 2 + i,
            y2: -3 + n,
          },
          "dotted"
        )
      ),
      r.push(
        tp(
          "line",
          { className: n6.line, x1: o + i, y1: 1 + n, x2: o + i, y2: -7 + n },
          "line"
        )
      )),
    tp(te, { children: r })
  );
}
let rt = "C4a2yy",
  ri = "C4a2ve",
  rs = "C4a2ve C4a1op",
  ra = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
  ro = 35;
function rn(e) {
  let { layer: t } = e,
    { x1: i, x2: s, y: a } = t,
    o = -1 * a - 2,
    n = s - i,
    r = [e6("text", { className: ra.text, x: i, y: o, key: "pm" }, "P. M.")];
  return (
    n > 35 &&
      (r.push(
        e6("line", {
          className: ra.dotted,
          x1: 35 + i,
          y1: -3 + o,
          x2: n - 2 + i,
          y2: -3 + o,
          key: "dotted",
        })
      ),
      r.push(
        e6("line", {
          className: ra.line,
          x1: n + i,
          y1: 1 + o,
          x2: n + i,
          y2: -7 + o,
          key: "line",
        })
      )),
    e6(te, null, r)
  );
}
let rr = "q71wu",
  rl = "q72a",
  rp = "q72a q712i",
  rh = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
  rd = 40;
function ru(e) {
  let { layer: t, effectValue: i } = e,
    { x1: s, x2: a, y: o } = t,
    n = a - s,
    r = -1 * o - 2,
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
    tp("text", { className: rh.text, x: s, y: r, children: l }, "Harm."),
  ];
  return (
    n > 40 &&
      (p.push(
        tp(
          "line",
          {
            className: rh.dotted,
            x1: 40 + s,
            y1: -3 + r,
            x2: n - 2 + s,
            y2: -3 + r,
          },
          "dotted"
        )
      ),
      p.push(
        tp(
          "line",
          { className: rh.line, x1: n + s, y1: 1 + r, x2: n + s, y2: -7 + r },
          "line"
        )
      )),
    tp(te, { children: p })
  );
}
let rc = "C0x28",
  rm = { path: "C0x28" },
  rg = 5.5,
  ry = 14,
  rf = 2,
  rv = 3;
function rb(e, t, i, s) {
  let a = `M${t} ${i + 4}l3-3.5`,
    o = `v${s ? 2 : 1}.8l-3 3.5`;
  for (let t = 0; t < e; t++)
    (a += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
      (o += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
  return a + o + "z";
}
function rx(e) {
  let { layer: t, wide: i } = e,
    { x1: s, x2: a, y: o } = t,
    n = a - s,
    r = rb(n > 14 ? Math.floor((n - 3) / 5.5) : 2, s, -(o + 6), i);
  return tp("path", { className: rm.path, d: r });
}
class rw extends e8 {
  renderEffect = (e, t) => {
    let i = {
      layer: e.layer,
      key: `${e.effect}-${this.props.line.index}-${t}`,
      line: this.props.line,
      effectValue: e.effectValue,
    };
    switch (e.effect) {
      case "letRing":
        return e6(re, i);
      case "palmMute":
        return e6(rn, i);
      case "harmonic":
        return e6(ru, i);
      case "vibrato":
        return e6(rx, { ...i, wide: !1 });
      case "wideVibrato":
        return e6(rx, { ...i, wide: !0 });
      default:
        return null;
    }
  };
  render() {
    return e6(te, null, this.props.line.effects.map(this.renderEffect));
  }
}
function rC(e, t) {
  return () => e;
}
let rk = (e) => rC(0);
function rN(e) {
  let { note: t, beat: i, part: s, x: a, edited: o, platform: n } = e,
    { intervalSize: r } = i.layout.measureLayout.lineLayout;
  if (!er(t) && (!o || (o && t.bogus))) return null;
  let l = `translate(${a}, 0)`;
  if (i.rest) {
    if (i.layout.usedStrings || (0 !== i.voice && i.layout.usedRest))
      return null;
    let e = el[`rest${i.voice}`],
      t = tp(
        "use",
        { className: e, xlinkHref: `#rest${i.type}`, transform: l },
        "rest"
      );
    if (i.dotted) {
      let i = tp(
        "use",
        { className: e, xlinkHref: "#dot", transform: l },
        "dot"
      );
      return tp(te, { children: [t, i] });
    }
    return t;
  }
  if (s.usedDrums && s.isDrumStdOn) {
    let e = el[`drums${i.voice}`],
      s = `translate(${a}, ${0.5 + r * t.string})`,
      o = t.orientation ? s : s + " translate(-10, 0)";
    return tp(te, {
      children: [
        (t.string <= -1 || t.string >= 5) &&
          tp(ep, {
            noteString: t.string,
            className: eh.strings,
            noteTransform: o,
            intervalSize: r,
          }),
        1 !== i.type &&
          tp("path", {
            className: el[`stick${i.voice}`],
            transform: s,
            d: ed(t.fret, t.string, r),
          }),
        (t.tie || t.ghost) &&
          tp("text", { x: a - 6, y: r * t.string + rk()(n) + 5 }, "("),
        tp(eu, { fret: t.fret, className: e, transform: o }),
        (t.tie || t.ghost) &&
          tp("text", { x: a + 11, y: r * t.string + rk()(n) + 5 }, ")"),
      ],
    });
  }
  let p = "",
    h = 0,
    d = s.usedDrums;
  if (d) {
    let e = s.usedDrums.get(t.fret);
    e && ((p = e.name || "*"), (h = e.string || 0));
  } else (p = t.dead ? "X" : t.fret.toString()), (h = t.string);
  let u = el[`${d ? "vDrum" : "voice"}${i.voice}`];
  o && (u = `${u} ${el.edited}`);
  let c = {
      className: u,
      x: a,
      y: r * h + rk()(n),
      children: t.tie || t.ghost ? `(${p})` : p,
      style: {},
    },
    m = tp("text", c, "text");
  if (t.harmonic) {
    let e = tp(
      "path",
      {
        className: el.harmonic,
        transform: `translate(${a - 17}, ${-3.5 + r * h} )`,
        d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
      },
      "harmonic"
    );
    return tp(te, { children: [e, m] });
  }
  return m;
}
let rS = "B642k5",
  rL = { slur: "B642k5" };
function rM(e, t, i, s, a, o) {
  let n = t ? eg(t, ey) : 0,
    r = a - n - (i ? eg(i, ey) : 0),
    l = Math.min(Math.floor(r / 3), 10),
    p = Math.max(o - 4, 3),
    h = p - 1;
  return `M${n + e} ${o * s - 7}c${l}-${p} ${r - l}-${p} ${r} 0c-${l}-${h}-${
    r - l
  }-${h}-${r} 0z`;
}
function r$(e) {
  let { x: t, start: i, end: s, slicingMode: a } = e;
  if (s) {
    let e = ec(s).beat,
      i = em(s).beat,
      o = em(s).note;
    if (i.layout && e.layout) {
      let s = a.getTieSlurPathLength(e, i, !0),
        { intervalSize: n } = e.layout.measureLayout.lineLayout;
      return tp("path", {
        className: rL.slur,
        d: rM(t - s, null, o, o.string, s, n),
      });
    }
  } else if (i) {
    let e = ec(i).beat,
      s = em(i).beat,
      o = ec(i).note,
      n = em(i).note;
    if (s.layout && e.layout) {
      let i = a.areBeatsInSameSlice(e, s),
        r = a.getTieSlurPathLength(e, s, !1),
        { intervalSize: l } = e.layout.measureLayout.lineLayout;
      return tp("path", {
        className: rL.slur,
        d: rM(t, o, i ? n : null, o.string, r, l),
      });
    }
  }
  return null;
}
let rB = "Bbl9p",
  rT = { tie: "Bbl9p" };
function rP(e, t, i, s, a, o) {
  let n = t ? eg(t, ef) : 0,
    r = a - n - (i ? eg(i, ef) : 0),
    l = Math.min(Math.floor(r / 3), 10),
    p = Math.max(o - 5, 3),
    h = p - 1;
  return `M${n + e} ${o * s + 7}c${l} ${p} ${r - l} ${p} ${r} 0c-${l} ${h}-${
    r - l
  } ${h}-${r} 0z`;
}
function rE(e) {
  let { x: t, start: i, end: s, slicingMode: a } = e;
  if (s) {
    let e = ec(s).beat,
      i = em(s).beat,
      o = em(s).note;
    if (i.layout && e.layout) {
      let s = a.getTieSlurPathLength(e, i, !0),
        n = o.string,
        { intervalSize: r } = e.layout.measureLayout.lineLayout;
      return tp("path", { className: rT.tie, d: rP(t - s, null, o, n, s, r) });
    }
  }
  if (i) {
    let e = ec(i).beat,
      s = em(i).beat,
      o = ec(i).note,
      n = em(i).note;
    if (s.layout && e.layout) {
      let i = a.areBeatsInSameSlice(e, s),
        r = a.getTieSlurPathLength(e, s, !1),
        { intervalSize: l } = e.layout.measureLayout.lineLayout,
        p = o.string;
      return tp("path", {
        className: rT.tie,
        d: rP(t, o, i ? n : null, p, r, l),
      });
    }
  }
  return null;
}
function rD(e, t) {
  if ((e.x1 === e.x2 && e.y1 === e.y2) || (t.x1 === t.x2 && t.y1 === t.y2))
    return null;
  let i = (t.y2 - t.y1) * (e.x2 - e.x1) - (t.x2 - t.x1) * (e.y2 - e.y1);
  if (0 === i) return null;
  let s = ((t.x2 - t.x1) * (e.y1 - t.y1) - (t.y2 - t.y1) * (e.x1 - t.x1)) / i,
    a = ((e.x2 - e.x1) * (e.y1 - t.y1) - (e.y2 - e.y1) * (e.x1 - t.x1)) / i;
  if (s < 0 || s > 1 || a < 0 || a > 1) return null;
  let o = e.x1 + s * (e.x2 - e.x1),
    n = e.y1 + s * (e.y2 - e.y1);
  return { x: o, y: n };
}
function rj(e, t, i) {
  let s = rD(e, { x1: t, y1: 1e3, x2: t, y2: -1e3 }),
    a = rD(e, { x1: i, y1: 1e3, x2: i, y2: -1e3 });
  return {
    x1: s ? s.x : e.x1,
    y1: s ? s.y : e.y1,
    x2: a ? a.x : e.x2,
    y2: a ? a.y : e.y2,
  };
}
let rA = "zy1tz",
  rz = { slide: "zy1tz" };
function rI(e) {
  let { x: t, cfx: i, note: s } = e,
    { intervalSize: a } = s.beat.layout.measureLayout.lineLayout,
    o = ec(i).beat,
    n = em(i).beat;
  if (!n.layout || !o.layout) return null;
  let r = ec(i).note,
    l = em(i).note,
    p = r.string,
    h = r.fret >= l.fret ? -2 : 2,
    d = ev(o, s.beat),
    u = ev(o, o),
    c = ev(o, n),
    m = {
      x1: t + u - d + eg(r, eb),
      y1: a * p + h,
      x2: t + c - d - eg(l, eb),
      y2: a * p - h,
    },
    g = rj(m, ew(s.beat.layout), ex(s.beat.layout));
  return tp("line", { className: rz.slide, ...g });
}
let rO = "Bxm1ag",
  rR = { arrow: "Bxm1ag" };
function rF(e) {
  let { x: t, y: i, up: s } = e;
  return tp("path", {
    className: rR.arrow,
    d: `M ${t},${i} l 2,${s ? 5 : -5} -4,0 2,${s ? -5 : 5}`,
  });
}
let rV = "C9k1hh",
  rX = "C9k17",
  rq = { up: "C9k1hh", down: "C9k17" },
  r_ = ["\xbc", "\xbd", "\xbe"],
  rU = rC(4),
  rH = rC(11);
function rY(e) {
  if (100 === e) return "full";
  if (e) {
    let t = "",
      i = Math.floor(e / 100);
    i && (t += i);
    let s = e % 100;
    return s >= 25 && (t += r_[Math.floor(s / 25) - 1]), t;
  }
  return "";
}
function rG(e) {
  let { x: t, y: i, up: s, tone: a, platform: o } = e;
  return tp("text", {
    className: s ? rq.up : rq.down,
    x: t,
    y: s ? i - rU(o) : i + rH(o),
    children: rY(a),
  });
}
let rW = "Cs020",
  rK = "Cs04d",
  rJ = "Cs04d Cs0dp",
  rZ = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function rQ(e, t, i, s, a, o) {
  return [
    tp(
      "line",
      { className: rZ.prebend, x1: i, y1: s + eN, x2: i, y2: a },
      `prebend-${e}`
    ),
    tp(rF, { x: i, y: a, up: !0 }, `arrow-${e}`),
    tp(rG, { tone: t, x: i, y: a, up: !0, platform: o }, `y-${e}`),
  ];
}
function r1(e, t, i, s, a, o) {
  return t <= 0
    ? null
    : [
        tp(
          "line",
          { className: rZ.hold, x1: i, y1: s, x2: a, y2: o },
          `hold-${e}`
        ),
      ];
}
function r2(e, t) {
  if (!e) return !1;
  let i = ec(e).note,
    s = i.bend;
  if (!s) return !1;
  let a = s.points,
    o = a.length;
  return !(o < 1) && a[o - 1].tone === t;
}
function r0(e) {
  if (!e) return !1;
  let t = ec(e).note,
    i = t.bend;
  if (!i) return !1;
  let s = i.points,
    a = s.length;
  if (a < 2) return !1;
  let o = s[a - 2].tone,
    n = s[a - 1].tone;
  return n === o;
}
function r5(e, t, i, s, a, o, n, r, l, p) {
  let h = l < n,
    d = t.prevNoteOnString,
    u = d && !!d.bendEnd,
    c = d && (!!d.bendStart || !!d.bendPart || !!d.bendEnd),
    m = d && r0(d.bendEnd) && r2(d.bendEnd, 0),
    g = t.tie && u && !m && r2(d.bendEnd, i) && 0 !== i,
    y = a !== o || 0 !== i || (g && c) ? 0 : eg(t, ek),
    f = [
      tp(
        "path",
        {
          className: rZ.path,
          d: `M${o + y},${n}Q${r},${n} ${r},${h ? l + 4 : l - 4}`,
        },
        `bend-${e}`
      ),
      tp(rF, { x: r, y: l, up: h }, `arrow-${e}`),
    ];
  return (
    0 !== s &&
      f.push(tp(rG, { tone: s, x: r, y: l, up: h, platform: p }, `y-${e}`)),
    f
  );
}
function r3(e, t, i, s, a) {
  return {
    elements: t ? [...e.elements, t] : e.elements,
    prevTone: i,
    prevX: s,
    prevY: a,
  };
}
function r4(e, t, i, s, a) {
  let o = eC + s * e.string;
  return function (s, n, r) {
    let { tone: l, position: p } = n,
      h = 0 === l ? o : eC - l / eS;
    if (0 === r) {
      if (!e.tie && 0 !== l) {
        let e = rQ(r, l, t, o, h, a);
        return r3(s, e, l, t, h);
      }
      return r3(s, null, l, t, 0 !== l ? h : o);
    }
    let { prevTone: d, prevX: u, prevY: c } = s,
      m = (i * p) / 60 + t;
    if (l === d) {
      let e = r1(r, l, u, h, m, h);
      return r3(s, e, l, m, h);
    }
    let g = r5(r, e, d, l, t, u, c, m, h, a);
    return r3(s, g, l, m, h);
  };
}
function r7(e) {
  let { cfx: t, note: i, slicingMode: s, x: a, platform: o } = e,
    n = ec(t).note,
    r = n.bend;
  if (!r) return null;
  let { x1: l, x2: p } = s.getBendCoordinates(t, i),
    h = i.beat.layout.measureLayout.lineLayout.intervalSize,
    { elements: d } = r.points.reduce(r4(n, l + a, p - l, h, o), {
      elements: [],
      prevTone: 0,
      prevX: 0,
      prevY: 0,
    });
  return tp(te, { children: d });
}
let r8 = "ls209",
  r6 = { lyrics: "ls209" };
function r9(e) {
  let { lyrics: t, x: i } = e,
    s = t.layer;
  if (s) {
    let e = eL(t) + i + s.diff;
    return tp("text", {
      className: r6.lyrics,
      x: e,
      y: s.y + s.height,
      children: t.text,
    });
  }
  return null;
}
let le = 15;
function lt(e) {
  let { note: t, x: i, type: s } = e,
    { intervalSize: a } = t.beat.layout.measureLayout.lineLayout,
    o = t.string,
    n = "left" === s ? -1 : 1,
    r = "upwards" === t.rightSlide ? 1 : -1;
  "left" === s && (r = "above" === t.leftSlide ? 1 : -1);
  let l = eg(t, eb);
  return tp("line", {
    className: rz.slide,
    x1: n * l + i,
    y1: a * o + 2 * r,
    x2: n * (l + 15) + i,
    y2: a * o - 2 * r,
  });
}
let li = "Cge206",
  ls = "Cgen4",
  la = "Cge2e0",
  lo = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function ln(e) {
  let { fret: t, x: i, string: s, originalFret: a, intervalSize: o } = e;
  if ("" === a) {
    let e = t.length >= 2 ? 11.5 : 7.5;
    return tp(te, {
      children: [
        tp("line", {
          className: lo.background,
          x1: i - e,
          y1: o * s,
          x2: i + e,
          y2: o * s,
        }),
        tp("text", {
          className: lo.note,
          x: i,
          y: o * s,
          children: t,
          "data-fret": t,
        }),
      ],
    });
  }
  let n = 10;
  return (
    t.length >= 2 && (n += 3),
    a.length >= 2 && (n += 4),
    tp(te, {
      children: [
        "" !== t &&
          tp("text", {
            className: lo.note,
            x: i + n,
            y: o * s - 4,
            children: t,
            "data-fret": t,
          }),
        tp("line", {
          className: lo.correction,
          x1: i - 4,
          y1: o * s - 7,
          x2: i + 4,
          y2: o * s + 4,
        }),
      ],
    })
  );
}
let lr = "B112ie",
  ll = "B11yc",
  lp = "B112vw",
  lh = "B11g5",
  ld = "B112gh",
  lu = "B111x2",
  lc = {
    index: "B112ie",
    middle: "B11yc",
    ring: "B112vw",
    pinky: "B11g5",
    thumb: "B112gh",
    text: "B111x2",
  },
  lm = 0,
  lg = 8,
  ly = 12,
  lf = [lc.index, lc.middle, lc.ring, lc.pinky];
function lv(e) {
  let { fingerL: t, string: i, x: s, fret: a } = e,
    o = lf[t - 1] || lc.index,
    n = 8;
  return (
    "number" == typeof a && Math.floor(a / 10) > 0 && (n = 12),
    e6("circle", { className: o, cx: s + n, cy: eM * i + 0, r: 3 })
  );
}
let lb = "ek2k6",
  lx = "ek2wd",
  lw = "ek188",
  lC = "ek188 ekfs",
  lk = "ek2i4",
  lN = "ek2i4 ek2z7",
  lS = "ek2zh",
  lL = "ek2ic",
  lM = "ekka",
  l$ = "ek2wg",
  lB = {
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
  lT = 30,
  lP = 4;
function lE(e) {
  let { up: t, min: i, max: s, xoffset: a, intervalSize: o } = e,
    n = (s - i + 1) * o,
    r = t ? 4 : n - 4,
    l = t ? 0 : n,
    p = (i - 0.5) * o,
    h = a - 15;
  return tp(te, {
    children: [
      tp(
        "line",
        {
          className: lB.arrowLine,
          x1: 4 + h,
          y1: p,
          x2: 4 + h,
          y2: (s + 0.5) * o,
        },
        "line"
      ),
      tp(
        "polygon",
        {
          className: lB.arrowPolygon,
          points: `${4 + h},${l + p} ${0 + h},${r + p} ${8 + h},${r + p} ${
            4 + h
          },${l + p}`,
        },
        "polygon"
      ),
    ],
  });
}
function lD(e) {
  let t = [],
    {
      layout: i,
      part: s,
      measure: a,
      slicingMode: o,
      measureEditorData: n,
      measureFingerings: r,
      platform: l,
      x: p,
    } = e,
    h = p + i.x;
  for (let e of i.beats)
    if (e.lyrics)
      for (let i of e.lyrics)
        t.push(tp(r9, { lyrics: i, x: h }, `lyrics${e.index}`));
    else {
      e.text &&
        t.push(
          tp(nz, { text: e.text, layout: i, xoffset: h }, `text${e.index}`)
        );
      let p = e.tappingWithLayer;
      p &&
        p.layer &&
        t.push(
          tp(
            "text",
            {
              className: lB.tapping,
              y: -1 * p.layer.y,
              x: Math.max(-1 * Math.floor(p.width / 2) + h, -15),
              dy: "-0.25em",
              children: p.text,
            },
            `tap${e.index}`
          )
        );
      let d = e.chord;
      d &&
        d.layer &&
        t.push(
          tp(
            "text",
            {
              className: lB.chord,
              y: -1 * d.layer.y,
              x: Math.max(-1 * Math.floor(d.width / 2) + h, -15),
              dy: "-0.25em",
              children: d.text,
            },
            `chord${e.index}`
          )
        );
      let u = Number.MAX_VALUE,
        c = 0;
      if (!a.rest) {
        if (s.usedDrums) {
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
          s.isDrumStdOn &&
          t.push(
            tp(
              "path",
              { className: lB.hat, d: `M${h - 2}${-e.hat.layer.y}h8l5 -5` },
              `hat${e.index}`
            )
          );
        let a =
            n && n.find((t) => t.beatNum === e.index && t.voice === e.voice),
          p = a && a.editedNotes;
        for (let i of (e.staccato &&
          e.staccato.layer.visible &&
          t.push(
            tp(
              "circle",
              {
                className: e.staccato.layer.voice
                  ? lB.staccatoSecondVoice
                  : lB.staccato,
                cx: h,
                cy: -e.staccato.layer.y - 5,
                r: 2,
              },
              `st${e.index}`
            )
          ),
        e.accentuated &&
          e.accentuated.layer.visible &&
          t.push(
            tp(
              "path",
              {
                className: e.accentuated.layer.voice
                  ? lB.accentuatedSecondVoice
                  : lB.accentuated,
                d: `m${h - 5}${-e.accentuated.layer.y - 2}l9-3l-9-3`,
              },
              `acc${e.index}`
            )
          ),
        e.heavyAccentuated &&
          e.heavyAccentuated.layer.visible &&
          t.push(
            tp(
              "path",
              {
                className: e.heavyAccentuated.layer.voice
                  ? lB.accentuatedSecondVoice
                  : lB.accentuated,
                d: `m${h - 4}${
                  -e.heavyAccentuated.layer.y - 2
                }l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
              },
              `hacc${e.index}`
            )
          ),
        e.notes)) {
          (e.upStroke || e.downStroke) &&
            !i.tie &&
            ((u = Math.min(u, i.string)), (c = Math.max(c, i.string))),
            t.push(
              tp(
                rN,
                {
                  note: i,
                  beat: e,
                  part: s,
                  x: h,
                  platform: l,
                  edited: p && !!p.find((e) => e.string === i.string),
                },
                `note${e.index}-${i.index}-voice${e.voice}`
              )
            ),
            i.tieStart &&
              t.push(
                tp(
                  rE,
                  { start: i.tieStart, slicingMode: o, x: h },
                  `tie${e.index}-${i.index}`
                )
              ),
            i.tieEnd &&
              e$(i.tieEnd) &&
              t.push(
                tp(
                  rE,
                  { end: i.tieEnd, slicingMode: o, x: h },
                  `tieEnd${e.index}-${i.index}`
                )
              ),
            i.slurStart &&
              t.push(
                tp(
                  r$,
                  { start: i.slurStart, slicingMode: o, x: h },
                  `slur${e.index}-${i.index}`
                )
              ),
            i.slurEnd &&
              e$(i.slurEnd) &&
              t.push(
                tp(
                  r$,
                  { end: i.slurEnd, slicingMode: o, x: h },
                  `slurEnd${e.index}-${i.index}`
                )
              ),
            i.leftSlide &&
              t.push(
                tp(lt, {
                  note: i,
                  type: "left",
                  key: `slideShortLeft${e.index}-${i.index}`,
                  x: h,
                })
              ),
            i.rightSlide &&
              "shift" !== i.rightSlide &&
              "legato" !== i.rightSlide &&
              t.push(
                tp(lt, {
                  note: i,
                  type: "right",
                  key: `slideShortRight${e.index}-${i.index}`,
                  x: h,
                })
              ),
            i.slideStart &&
              t.push(
                tp(
                  rI,
                  { note: i, cfx: i.slideStart, x: h },
                  `slide${e.index}-${i.index}`
                )
              ),
            i.slideEnd &&
              e$(i.slideEnd) &&
              t.push(
                tp(
                  rI,
                  { note: i, cfx: i.slideEnd, x: h },
                  `slideEnd${e.index}-${i.index}`
                )
              );
          let a = o.bendsForNote(i);
          for (let s = 0; s < a.length; s++) {
            let n = a[s];
            o.shouldDrawBendOnNote(n, i) &&
              t.push(
                tp(
                  r7,
                  { cfx: n, note: i, slicingMode: o, x: h, platform: l },
                  `bend${e.index}-${i.index}-${s}`
                )
              );
          }
          let n = r?.find((t) => t.index === e.index),
            d = n?.fingerings.find((e) => e.string === i.string);
          d &&
            t.push(
              tp(
                lv,
                { fingerL: d.fingerL, x: h, string: i.string, fret: i.fret },
                `finger${e.index}-${i.index}`
              )
            );
        }
        if (p) {
          let s = i.measureLayout.lineLayout.intervalSize;
          p.forEach((i) =>
            t.push(
              tp(
                ln,
                {
                  x: h,
                  fret: i.fret,
                  originalFret: i.originalFret,
                  string: i.string,
                  intervalSize: s,
                },
                `editedNote${e.index}-${i.string}`
              )
            )
          );
        }
        if (!s.usedDrums && (e.upStroke || e.downStroke) && u < c) {
          let s = i.measureLayout.lineLayout.intervalSize;
          t.push(
            tp(
              lE,
              { up: !!e.upStroke, min: u, max: c, xoffset: h, intervalSize: s },
              `stroke${e.index}`
            )
          );
        }
      }
    }
  return tp(te, { children: t });
}
let lj = "rw256",
  lA = "rw2jc",
  lz = "rw33j",
  lI = { path: "rw256", text: "rw2jc", line: "rw33j" },
  lO =
    "M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
  lR =
    "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
  lF = "M37 27v-1h10v1zm0 3v-1h10v1z",
  lV = "M.8 0h15v3.5H.8z",
  lX = "M8.8 0h7v3.5h-7z",
  lq = "M51 7V4h9m7 0h9v3";
function l_(e) {
  let {
    tripletFeel: { feel: t, layer: i },
    x: s,
  } = e;
  if (!i) return null;
  let { y: a } = i,
    o = "off" === t,
    n = "16th" === t;
  return e6(
    "g",
    { transform: `translate(${s},-${a + 42})` },
    e6("path", { d: lO, transform: "translate(10,10)", className: lI.path }),
    e6("path", { d: lO, transform: "translate(25,10)", className: lI.path }),
    e6("path", { d: lV, transform: "translate(18,10)", className: lI.path }),
    n &&
      e6("path", { d: lV, transform: "translate(18,15)", className: lI.path }),
    e6("path", { d: lO, transform: "translate(48,10)", className: lI.path }),
    e6("path", { d: lO, transform: "translate(63,10)", className: lI.path }),
    (o || n) &&
      e6("path", { d: lV, transform: "translate(56,10)", className: lI.path }),
    n &&
      e6("path", {
        d: "M8.8 0h7v3.5h-7z",
        transform: "translate(56,15)",
        className: lI.path,
      }),
    "8th" === t &&
      e6("path", {
        d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
        transform: "translate(63,10)",
        className: lI.path,
      }),
    !o && e6("text", { className: lI.text, x: 64, y: 0 }, 3),
    !o && e6("path", { className: lI.line, d: "M51 7V4h9m7 0h9v3" }),
    e6("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: lI.path })
  );
}
let lU = "Gy73",
  lH = "Gy2no",
  lY = "Gy8f",
  lG = "Gy1lf",
  lW = "Gy1fk",
  lK = "Gy1ax",
  lJ = "Gy4w",
  lZ = "Gybj",
  lQ = {
    voice0: "Gy73",
    voice1: "Gy2no",
    voice2: "Gy8f",
    voice3: "Gy1lf",
    "voice0-tremolo": "Gy1fk",
    "voice1-tremolo": "Gy1ax",
    "voice2-tremolo": "Gy4w",
    "voice3-tremolo": "Gybj",
  },
  l1 = 4,
  l2 = 8;
function l0(e) {
  let { voice: t, beats: i, x: s, y: a, tremoloOffset: o } = e;
  if (t.hasSameRhythm) return null;
  let n = eT + o,
    r = n / 2,
    l = "",
    p = "",
    h = 0,
    d = [],
    u = [, , , ,],
    c = !1,
    m = 0;
  for (let e of i) {
    let t = e.layout.x;
    1 !== e.type &&
      (l +=
        2 === e.type
          ? `M${s + t},${a + r + 2}v${r}`
          : `M${s + t},${a + 2}v${n}`);
    let o = 0,
      d = 8;
    if (
      (e.beamStart ? (c = !0) : e.beamStop && (c = !1), c && m < i.length - 1)
    ) {
      let s = i[m + 1],
        a = Math.min(e.type, s.type);
      for (e.tupletStop && (a = Math.min(a, 8)); d <= a; ) {
        let i = u[o];
        i
          ? (i.length += s.layout.x - e.layout.x)
          : ((i = { x: t, length: s.layout.x - e.layout.x }), (u[o] = i)),
          o++,
          (d *= 2);
      }
    }
    let g = o,
      y = o < h || e.tupletStop || e.beamStop;
    for (; o < h; o++, d *= 2) {
      let e = u[o];
      (u[o] = void 0),
        e && (l += `M${s + e.x},${a + n - eB * o}v2h${e.length}v-2z`);
    }
    for (; d <= e.type; o++, d *= 2)
      l += `M${s + t},${a + n - eB * o}v2h${y ? "-7" : "7"}v-2z`;
    if (
      (e.dotted &&
        1 !== e.type &&
        (l += `M${s + t + 4},${a + n - eB * o}v2h2v-2z`),
      e.tremolo)
    )
      for (let i = 0; i < e.tremolo.type; i++)
        p += `M${s + t - 5},${a + 6 + 3 * i}l10-3z`;
    (h = g), m++;
  }
  if (l.length) {
    let e = `voice${t.index}`;
    d.push(tp("path", { className: lQ[e], d: l }));
  }
  if (p.length) {
    let e = `voice${t.index}-tremolo`;
    d.push(tp("path", { className: lQ[e], d: p }));
  }
  return d.length ? tp(te, { children: d }) : null;
}
let l5 = "Bhq244",
  l3 = "Bhq1lk",
  l4 = "Bhq8x",
  l7 = "Bhq1hy",
  l8 = "Bhq13i",
  l6 = "Bhq2w3",
  l9 = {
    path: "Bhq244",
    text: "Bhq1lk",
    voice0: "Bhq8x",
    voice1: "Bhq1hy",
    voice2: "Bhq13i",
    voice3: "Bhq2w3",
  },
  pe = rC(9);
function pt(e) {
  let {
      tuplet: t,
      voice: i,
      start: s,
      stop: a,
      platform: o,
      x: n,
      y: r,
      tremoloOffset: l,
    } = e,
    p = s.layout.x + n,
    h = a.layout.x - s.layout.x,
    d = Math.round(h / 2),
    u = t > 9 ? 8 : 5,
    c = `M 0,0 L 0,6 ${d - u},6 M ${d + u},6 L ${h},6 ${h},0`;
  r += eP - 2 + l;
  let m = `voice${i.index}`;
  return tp("g", {
    className: l9[m],
    transform: `translate(${p},${r})`,
    children: [
      tp("text", { className: l9.text, x: d, y: pe(o), children: t }),
      tp("path", { className: l9.path, d: c }),
    ],
  });
}
let pi = "Chi2a3",
  ps = "Chi2up",
  pa = { path: "Chi2a3", text: "Chi2up" };
function po(e) {
  let { layer: t, alternateEnding: i } = e.alternateEnding;
  if (t) {
    let { x1: s, x2: a, y: o } = t,
      n = a - s,
      r = e.x;
    return e.isFirstLayout
      ? e6(
          "g",
          { transform: `translate(${r},${-1 * o - 14})` },
          e6("text", { className: pa.text, x: 4, y: "14" }, i.join(",")),
          e6("path", { className: pa.path, d: `M 1,14 L 1,0 ${n - 6},0` })
        )
      : e6(
          "g",
          { transform: `translate(${r},${-1 * o - 14})` },
          e6("path", { className: pa.path, d: `M 1,0 L ${n - 6},0` })
        );
  }
  return null;
}
let pn = "kw1ty",
  pr = { marker: "kw1ty" };
function pl(e) {
  let { marker: t, x: i } = e,
    s = t.layer;
  return s
    ? tp("text", {
        className: pr.marker,
        x: i,
        y: -1 * s.y,
        dy: "-0.25em",
        children: t.text,
      })
    : null;
}
let pp = "Bjniz",
  ph = "Bjnch",
  pd = "Bjn2ws",
  pu = "Bjnzo",
  pc = { rect: "Bjniz", dot: "Bjnch", number: "Bjn2ws", path: "Bjnzo" };
function pm(e) {
  let { line: t, x: i } = e,
    { intervalSize: s } = t.layout,
    a = (t.strings - 1) * s;
  return e6(
    "g",
    { className: "Rep", transform: `translate(${i},0)` },
    e6("rect", { className: pc.rect, width: 4, height: a }),
    e6("path", { className: pc.path, d: `M 8,0 L 8,${a}` }),
    e6("ellipse", {
      className: pc.dot,
      cx: 13,
      cy: Math.floor(a / 3),
      rx: 2,
      ry: 2,
    }),
    e6("ellipse", {
      className: pc.dot,
      cx: 13,
      cy: Math.floor((2 * a) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
function pg(e) {
  let { line: t, measureLayout: i, x: s } = e,
    { intervalSize: a } = t.layout,
    o = (t.strings - 1) * a,
    n = i.measure.repeat;
  return e6(
    "g",
    { transform: `translate(${i.width - 18 + s},0)` },
    n > 2 && e6("text", { className: pc.number, x: 2.5, y: -2 }, n + "x"),
    e6("rect", { className: pc.rect, x: 14, width: 4, height: o }),
    e6("path", { className: pc.path, d: `M 11,0 L 11,${o}` }),
    e6("ellipse", {
      className: pc.dot,
      cx: 6,
      cy: Math.floor(o / 3),
      rx: 2,
      ry: 2,
    }),
    e6("ellipse", {
      className: pc.dot,
      cx: 6,
      cy: Math.floor((2 * o) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
let py = "Cpu2zi",
  pf = "Cpu351",
  pv = "Cpu1y8",
  pb = "Cpujn",
  px = {
    number: "Cpu2zi",
    signature: "Cpu351",
    tempo: "Cpu1y8",
    tempoText: "Cpujn",
  },
  pw = rC(-8),
  pC = rC(21);
function pk(e) {
  let {
      measureLayout: t,
      line: i,
      part: s,
      slicingMode: a,
      measureEditorData: o,
      measureFingering: n,
      platform: r,
    } = e,
    l = t.measure,
    p = t.x,
    h = t.lineLayout.intervalSize,
    d = en(l) === t,
    u = eE(l) === t,
    c = [];
  if (d) {
    void 0 !== e.platform &&
      c.push(
        tp(
          "text",
          { className: px.number, x: 3 + p, y: -7.2, children: l.index + 1 },
          "number"
        )
      ),
      l.repeatStart && c.push(tp(pm, { line: i, x: p }, "repeatStart"));
    let t = l.tripletFeelWithLayer;
    t && c.push(tp(l_, { tripletFeel: t, x: p }, "tripletFeel"));
  }
  for (let e of (u &&
    l.repeat &&
    c.push(tp(pg, { line: i, measureLayout: t, x: p }, "repeat")),
  t.alternateEndingWithLayer &&
    c.push(
      tp(
        po,
        { alternateEnding: t.alternateEndingWithLayer, isFirstLayout: d, x: p },
        "alternateEnding"
      )
    ),
  d &&
    l.markerWithLayer &&
    c.push(tp(pl, { marker: l.markerWithLayer, x: p }, "marker")),
  t.tempoLayouts.values())) {
    let { tempo: t, layer: i } = e;
    t &&
      i &&
      c.push(
        tp(
          "g",
          {
            className: px.tempo,
            transform: `translate(${i.x1},${-1 * i.y})`,
            children: [
              tp("use", { xlinkHref: "#tempo" }),
              tp("text", {
                className: px.tempoText,
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
      tp(
        lD,
        {
          layout: e,
          part: s,
          measure: l,
          slicingMode: a,
          x: p,
          measureEditorData: o,
          measureFingerings: t,
          platform: r,
        },
        `beat${m}`
      )
    ),
      m++;
  }
  if (d && l.hasSignature) {
    let e = Math.floor((s.strings / 2) * h);
    c.push(
      tp(
        "text",
        {
          className: px.signature,
          x: t.signatureOffset + p,
          y: e + pw(r),
          children: l.signature[0],
        },
        "t1"
      )
    ),
      c.push(
        tp(
          "text",
          {
            className: px.signature,
            x: t.signatureOffset + p,
            y: e + pC(r),
            children: l.signature[1],
          },
          "t2"
        )
      );
  }
  if (l.rhythmLines) {
    let e = 0,
      s = h * i.strings;
    for (let a of l.voices)
      if (!(a.hasSameRhythm || a.rest)) {
        let o = t.beatsLayouts
            .map((e) => e.beats.find((e) => e.voice == a.index))
            .filter(Boolean),
          n = i.rhythmEffects.tremolo.get(a.index) || !1,
          l = i.rhythmEffects.tremolo.get(a.index) || !1,
          h = o.some((e) => e.type > 8),
          d = n && h ? eD : 0,
          u = l ? ej : 0,
          m = d + u,
          g = s + a.index * (eP + m);
        c.push(
          tp(
            l0,
            { voice: a, beats: o, x: p, y: g, tremoloOffset: d },
            `rhythm${a.index}`
          )
        ),
          (s = g);
        let y = 0,
          f = null;
        for (let t of o)
          t &&
            (t.tupletStart && ((y = t.tuplet), (f = t)),
            y &&
              f &&
              t.tupletStop &&
              (c.push(
                tp(
                  pt,
                  {
                    tuplet: y,
                    start: f,
                    stop: t,
                    voice: a,
                    platform: r,
                    x: p,
                    y: g,
                    tremoloOffset: d,
                  },
                  `tuplet${e}`
                )
              ),
              (y = 0),
              e++));
      }
  }
  return tp(te, { children: c });
}
let pN = (e, t) => e + `H${t.x}m${t.w},0`;
function pS(e) {
  let { line: t, hasTuning: i, slicingMode: s, part: a } = e,
    { intervalSize: o } = t.layout,
    n = t.spaces,
    r = o * (t.strings - 1),
    l = "",
    p = t.layout.measureLayouts;
  for (let e = i ? 1 : 0; e < p.length; e++) {
    let t = p[e];
    en(t.measure) === t && (l += `M${t.x},0v${r}`);
  }
  let h = p[0].x,
    d = s.stringLineMaxX(t);
  if (a.usedDrums && a.isDrumStdOn)
    for (let e = 0; e < t.strings; e++) l += `M${h},${o * e} H${d}`;
  else
    for (let e = 0; e < t.strings; e++)
      l += `M${h},${o * e}` + n[e].reduce(pN, "") + `H${d}`;
  let u = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
  return (
    eE(u.measure) === u && (l += `M${d},0v${r}`),
    tp("path", { className: eh.strings, d: l })
  );
}
let pL = "D38xz",
  pM = { tuning: "D38xz" },
  p$ = rC(5);
function pB(e) {
  let { tuning: t, platform: i, intervalSize: s } = e;
  return t
    ? e6(
        te,
        null,
        eA(t, !1).map((e, t) =>
          e6(
            "text",
            { x: p$(i), y: 1 + t * s, key: t, className: pM.tuning },
            e
          )
        )
      )
    : null;
}
let pT = "Cw81bf",
  pP = { line: "Cw81bf" },
  pE = ts((e) => {
    let {
        inlineDefs: t,
        line: i,
        noPadding: s,
        part: a,
        tuning: o,
        slicingMode: n,
        lazy: r,
        tabEditorData: l,
        fingerings: p,
        platform: h,
      } = e,
      d = n.expectedSliceWidth(i.layout.unscaledWidth) + (s ? 0 : ez),
      { intervalSize: u } = i.layout,
      c = "http://www.w3.org/2000/svg",
      m = i.layout.height,
      g = s ? 0 : -ez / 2,
      y = `${g} -${i.layout.layers.height} ${d} ${m}`;
    if (!h) {
      let [e, t] = ti(i.index < 5),
        s = ta();
      if (
        (tn(() => {
          if (r && !e)
            try {
              let e = new IntersectionObserver(
                (e) => {
                  e[0].isIntersecting && t(!0);
                },
                { rootMargin: "0px 0px 500px 0px" }
              );
              return s.current && e.observe(s.current), () => e.disconnect();
            } catch (e) {
              requestAnimationFrame(() => t(!0));
            }
        }, [e, r]),
        r && !e)
      )
        return tp(
          "svg",
          {
            xmlns: c,
            version: "1.1",
            ref: s,
            width: d,
            viewBox: y,
            className: pP.line,
          },
          "line-stub" + i.index
        );
    }
    let f = i.capo,
      v = !!f && !h,
      b = !!o;
    return tp(
      "svg",
      {
        xmlns: c,
        version: "1.1",
        width: d,
        viewBox: y,
        className: pP.line,
        children: [
          t && tp(n3, { part: a, line: i }),
          b && tp(pB, { tuning: o, platform: h, intervalSize: u }),
          v && tp(tb, f),
          tp(pS, { line: i, hasTuning: b, slicingMode: n, part: a }),
          ...i.hangingText.map((e, t) =>
            tp(nz, { text: e, layout: void 0, xoffset: 0 }, t.toString())
          ),
          tp(rw, { line: i }),
          ...i.layout.measureLayouts.map((e) =>
            tp(
              pk,
              {
                measureLayout: e,
                line: i,
                part: a,
                slicingMode: n,
                measureFingering:
                  p && p.measures.find((t) => t.index - 1 === e.measure.index),
                measureEditorData:
                  l && l[e.measure.index] && l[e.measure.index].beats,
                platform: h,
              },
              e.measure.index.toString() + e.x.toString()
            )
          ),
        ],
      },
      "line" + i.index
    );
  }),
  pD = "Ceg2uy",
  pj = "Ceg2gt",
  pA = "Ceg9t",
  pz = "Ceghf",
  pI = "Ceg19o",
  pO = "Ceg2im",
  pR = {
    editor: "Ceg2uy",
    correction: "Ceg2gt",
    keyboard: "Ceg9t",
    digit: "Ceghf",
    remove: "Ceg19o",
    zero: "Ceg2im",
  },
  pF = (e) => {
    let { enabled: t, onDragStart: i, onDrag: s } = e,
      a = tt(null),
      o = tt(!1),
      n = (e) => {
        document.addEventListener("mousemove", l),
          document.addEventListener("mouseup", r),
          clearTimeout(a.current),
          (a.current = setTimeout(() => {
            o.current = !0;
          }, 100)),
          i(e);
      },
      r = () => {
        document.removeEventListener("mousemove", l),
          document.removeEventListener("mouseup", r),
          (o.current = !1);
      },
      l = (e) => {
        t && o.current && s(e);
      };
    return (
      tn(
        () => (
          document.addEventListener("mousedown", n),
          () => document.removeEventListener("mousedown", n)
        ),
        []
      ),
      null
    );
  },
  pV = () => {
    clearTimeout(e), (e = null);
  },
  pX = 24;
class pq extends e8 {
  formClick = (e) => {
    e.preventDefault();
  };
  keyHandler = (t) => {
    let { tabEditor: i, dispatch: s } = this.props;
    if (e && 1 === i.fret.length && "0" !== i.fret) {
      let e = `${i.fret}${t}`;
      if ((pV(), 24 >= +e)) {
        s("tabEditor/changeNote", { newFret: e });
        return;
      }
    }
    s("tabEditor/changeNote", { newFret: t }),
      (e = setTimeout(() => (e = null), 1e3));
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
      pV(),
      this.props.dispatch("tabEditor/changeNote", { newFret: "X" });
  };
  onMobileKeyboard = (e) => () => this.keyHandler(e);
  onBackspace = () => {
    this.props.dispatch("tabEditor/changeNote", { newFret: "" }), pV();
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
    return t && eI(t, e);
  };
  onDragStart = (e) => {
    let t = this.getDragY(e);
    this.setState({ dragBaseY: t, prevString: this.getStringOnY(t) });
  };
  onDrag = eO((e) => {
    if (!e.clientX || !e.clientY) return;
    let t = this.getDragY(e),
      i = this.getStringOnY(t);
    if (void 0 === i) return;
    let s = i - this.state.prevString,
      a = Math.abs(s);
    0 !== a &&
      (this.setState({ dragBaseY: t, prevString: i }), this.moveNoteViaDrag(i));
  }, 50);
  constructor(e) {
    super(e);
    let { device: i } = e;
    (t = P(i) || c(i.os) || T(i.os)),
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
      pV();
  }
  componentDidUpdate(e) {
    (e.tabEditor.formX !== this.props.tabEditor.formX ||
      e.tabEditor.formY !== this.props.tabEditor.formY) &&
      pV();
  }
  render() {
    let { tabEditor: e, scale: i } = this.props,
      s = {
        top: e.formY - 1,
        left: e.formX + 2.5,
        display: e.positioned ? "block" : "none",
        transform: `scale(${i})`,
        transformOrigin: "left 0px",
      };
    0 !== e.voice && (s.color = "#868686"),
      e.fret !== e.originalFret && "" !== e.fret && (s.color = "#ff3130");
    let a = {
        top: e.formY + 31 * i,
        left: e.formX - 64 * i,
        display: e.positioned ? "flex" : "none",
        transform: `scale(${i})`,
        transformOrigin: "left 0px",
      },
      o = !this.props.tabEditor.positioned;
    return e6(
      te,
      null,
      e6(
        "div",
        {
          id: "note-editor",
          className: pR.editor,
          style: s,
          tabIndex: -1,
          onMouseUp: this.formClick,
        },
        "" === e.fret && "" !== e.originalFret
          ? e6(
              te,
              {},
              e.originalFret,
              e6(
                "svg",
                { className: pR.correction, width: 25, height: 23 },
                e6("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
              )
            )
          : e.fret
      ),
      e6(pF, {
        enabled: o,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
      }),
      t &&
        e6(
          "div",
          { className: pR.keyboard, style: a, id: "mobileKeyboard" },
          e6(
            "button",
            { className: pR.remove, onClick: this.onBackspace },
            "<-"
          ),
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((e) =>
            e6(
              "button",
              {
                key: e,
                className: pR.digit,
                onClick: this.onMobileKeyboard(e),
              },
              e
            )
          ),
          e6(
            "button",
            { className: pR.zero, onClick: this.onMobileKeyboard("0") },
            "0"
          )
        )
    );
  }
}
var p_ = s(pq, "tabEditor", "device", "part", "experiments");
let pU = "Cpk19q",
  pH = "Cpk1rm",
  pY = "Cpk2dh",
  pG = "Cpk9f",
  pW = "Cpk2r",
  pK = "Cpk34y",
  pJ = {
    loading: "Cpk19q",
    hide: "Cpk1rm",
    normal: "Cpk2dh",
    shadow: "Cpk9f",
    body: "Cpk2r",
    icon: "Cpk34y",
  };
function pZ(e) {
  return Math.round(1e4 * e) / 1e4;
}
function pQ(e, t, i) {
  let s = e / 2,
    a = pZ(s * i),
    o = pZ(s);
  return `M 0,${a}
     Q 0,0 ${o},0 q ${o},0 ${o},${a}
     v ${pZ(t - 2 * a)}
     q 0,${a} -${o},${a} q -${o},0 -${o},-${a}
     v -${pZ(t - 2 * a)}`;
}
function p1(e, t, i, s, a, o, n) {
  let r = i * s,
    l = i * a,
    p = i * o,
    h = i * n,
    d = Math.atan2(r, i / 2),
    u = Math.sin(d),
    c = Math.cos(d),
    m = p * u,
    g = p * c,
    y = h * u,
    f = h * c;
  return `M ${pZ(e + g)},${pZ(t + m)}
     Q ${pZ(e)},${pZ(t)} ${pZ(e + l)},${pZ(t)}
     L ${pZ(e + i - l)},${pZ(t)}
     Q ${pZ(e + i)},${pZ(t)} ${pZ(e + i - g)},${pZ(t + m)}
     L ${pZ(e + i / 2 + f)},${pZ(t + r - y)}
     Q ${pZ(e + i / 2)},${pZ(t + r)} ${pZ(e + i / 2 - f)},${pZ(t + r - y)}
     z`;
}
function p2(e) {
  let { intervalSize: t, strings: i, defs: s } = e,
    { player: a, route: o } = y("player", "route"),
    n = !(a.canPlay || o.isPanel),
    r = 1 * eR,
    l = p1((eR - r) / 2, 0.33 * eR, r, 0.95, 0.45, 0.6, 0.3),
    p = pQ(eR, (i - 1) * t + (eF + eV), 1.3),
    h = n ? pJ.loading : pJ.normal;
  return (
    e.hide && (h = pJ.hide),
    tp("g", {
      ref: this.props.setRef,
      class: h,
      children: [
        s &&
          tp("defs", {
            children: tp("filter", {
              id: "CursorShadow",
              x: "-40%",
              width: "180%",
              children: [
                tp("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 2 }),
                tp("feOffset", { dx: 0, dy: 2 }),
              ],
            }),
          }),
        tp(
          "path",
          { class: pJ.shadow, filter: "url(#CursorShadow)", d: p },
          "shadow"
        ),
        tp("path", { class: pJ.body, d: p }, "body"),
        tp("path", { class: pJ.icon, d: l }, "path"),
      ],
    })
  );
}
let p0 = "Cgh21m",
  p5 = "Cgh2b2",
  p3 = "Cgh1j0",
  p4 = "Cgh16l",
  p7 = "Cgh2v6",
  p8 = {
    background: "Cgh21m",
    loop: "Cgh2b2",
    shape: "Cgh1j0",
    area: "Cgh16l",
    icon: "Cgh2v6",
  },
  p6 = 10,
  p9 = 27;
function he(e) {
  let { x: t, layout: i, handle: s } = e,
    a = i.measureLayout.lineLayout,
    o = a.layers.height - eX + eq - 10,
    n = e_(a) - 20,
    r = `translate(${"left" === s ? t - 1 : t},${-o})`,
    l = "left" === s ? "matrix(-1,0,0,1,1,0)" : "",
    p = Math.floor(n / 2);
  return tp("g", {
    className: p8.loop,
    transform: r,
    "data-loop-handle": s,
    children: [
      tp("path", {
        d: `M0 ${p - 12}q15 0 15 12t-15 12m1 0v${p - 12}h-2 v-${n}h2z`,
        className: p8.shape,
        transform: l,
      }),
      tp("path", {
        d: `M8 ${p - 4.5}l-4.5 4.5l4.5 4.5`,
        className: p8.icon,
        transform: l,
      }),
      tp("rect", {
        x: -10,
        y: -1,
        height: n,
        width: 27,
        transform: l,
        className: p8.area,
      }),
    ],
  });
}
let ht = 5,
  hi = 100,
  hs = "scrollBehavior" in document.documentElement.style,
  ha = (e) => 0.5 * (1 - Math.cos(Math.PI * e));
class ho {
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
      hs)
    )
      window.scrollTo({ left: 0, top: e, behavior: t ? "auto" : "smooth" });
    else {
      let s =
        i ||
        (window.visualViewport
          ? window.visualViewport.pageTop
          : window.scrollY);
      if (t || 5 >= Math.abs(e - s)) window.scrollTo(0, e);
      else {
        (this.y = e), (this.startY = s), (this.startTime = eU());
        let t = window.requestAnimationFrame;
        this.scrollId = t(this.animationLoop);
      }
    }
  }
  animationLoop = () => {
    let e = ha(Math.min((eU() - this.startTime) / 100, 1)),
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
function hn(e) {
  let { tab: t, tuningButton: i } = e,
    { device: s } = y("device"),
    a = 0,
    o = 0;
  if (t && i) {
    let e = t.getBoundingClientRect(),
      s = i.getBoundingClientRect();
    (a = s.left - e.left + s.width + 21),
      (o = s.top - e.top - (23 - s.height) - 14.5) < 2 && (o = 2);
  }
  return c(s.os) || T(s.os) || P(s)
    ? e6(iu, {
        title: "Pitch Shift",
        device: s,
        leftOffset: a,
        topOffset: o,
        feature: "pitch shift",
      })
    : e6(ty, {
        title: "Pitch Shift",
        classPrefix: "pitchshift",
        leftOffset: a,
        topOffset: o,
      });
}
async function hr(e) {
  return "IntersectionObserver" in window
    ? new Promise((t) => {
        let i = new IntersectionObserver((e) => {
          i.disconnect(), t(e[0].boundingClientRect);
        });
        i.observe(e);
      })
    : e.getBoundingClientRect();
}
let hl = "D28105",
  hp = "D28105 D286d",
  hh = "D28105 D28180",
  hd = "D281b5",
  hu = "D281qz",
  hc = "D2820n",
  hm = {
    tablature: "D28105",
    tablaturePrint: "D28105 D286d",
    tablatureNoPrint: "D28105 D28180",
    handlersLine: "D281b5",
    handlers: "D281qz",
    lineWrap: "D2820n",
  },
  hg = "d418f",
  hy = "d41sr",
  hf = "d41bt",
  hv = "d42bj",
  hb = {
    exitActive: "d418f",
    enterActive: "d41sr",
    enter: "d41bt",
    exit: "d42bj",
  };
function hx(e, t) {
  let i = e.measureLayout,
    s = t.measureLayout;
  return i !== s
    ? i.lineLayout !== s.lineLayout || i.measure.index + 1 !== s.measure.index
    : e.x >= t.x;
}
let hw = (e) => e.player.shouldPlay && e.player.canPlay;
class hC extends e8 {
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
      hw(this.props) ? this.animationPlay() : this.animationSeek();
  }
  componentDidUpdate(e) {
    let t = this.props;
    if (t.print) return;
    let i = t.part !== e.part || t.lines !== e.lines,
      s = t.cursor.position !== e.cursor.position;
    (i || s) &&
      ((this.layout = null),
      (this.layoutTimestamp = 0),
      (this.nextLayout = null),
      (this.nextLayoutTimestamp = 0));
    let a =
      e.print ||
      i ||
      s ||
      t.player.speed !== e.player.speed ||
      t.player.type !== e.player.type ||
      t.player.pitchShift !== e.player.pitchShift ||
      hw(t) !== hw(e);
    if (a) {
      let i = this.animationSeek;
      hw(e)
        ? (i = hw(t) ? this.animationRestart : this.animationPause)
        : hw(t) && (i = this.animationPlay),
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
    let i = `translate3d(${e - eR / 2}px, ${-eF}px, 0)`,
      s = this.props.refs.current;
    if (s) {
      let e = s[t.line.index];
      if ((e && (e.style.transform = i), this.state.lineLayout != t)) {
        if (this.state.lineLayout) {
          let e = s[this.state.lineLayout.line.index];
          e && (e.style.visibility = "hidden");
        }
        e && (e.style.visibility = "visible"), this.setState({ lineLayout: t });
      }
    }
  }
  applyCursorCoordinates(e) {
    let t;
    let { layout: i, nextLayout: s, layoutTimestamp: a } = this;
    if (s && hx(i, s)) {
      let e = i.absoluteLoopRightX - i.absoluteX,
        o = s.absoluteX - s.absoluteLoopLeftX,
        n = (i.duration * e) / (e + o),
        r = i.duration - n;
      t = (t) => {
        let l = t - a;
        l < n
          ? this.applyTransform(
              i.absoluteX + (e * l) / n,
              i.measureLayout.lineLayout
            )
          : this.applyTransform(
              s.absoluteLoopLeftX + (o * (l - n)) / r,
              s.measureLayout.lineLayout
            );
      };
    } else {
      let e = s
        ? s.absoluteX - i.absoluteX
        : i.absoluteLoopRightX - i.absoluteX;
      t = (t) => {
        this.applyTransform(
          i.absoluteX + (e * (t - a)) / i.duration,
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
      let t = eH(this.props.part, e),
        { timeline: i, timestamps: s } = this.props.part;
      (this.layoutTimestamp = s[t]),
        (this.layout = i.get(this.layoutTimestamp));
      let a = t < s.length - 1 ? s[t + 1] : null,
        o = this.props.cursor.position.loopEnd;
      return (
        0 !== o &&
          (null === a || a >= o - 1e-15) &&
          (a = this.props.cursor.position.loopStart),
        (this.nextLayout = null !== a ? i.get(a) : null),
        !0
      );
    }
    return !1;
  }
  findLineLayoutUnderCursor(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
      i = eH(this.props.part, e, t),
      { timeline: s, timestamps: a } = this.props.part,
      o = s.get(a[i]);
    return o.measureLayout.lineLayout;
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
      s = null,
      a = () => {
        let e = this.layout.absoluteLoopRightX - this.layout.absoluteX,
          t = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
          i = ((this.layout.duration * e) / (e + t)) * 0.8;
        return (s = (e) =>
          !!this.layout &&
          !!this.nextLayout &&
          e - this.layoutTimestamp > i &&
          (this.props.ensureLineVisibility(
            this.layout.measureLayout.lineLayout,
            this.nextLayout.measureLayout.lineLayout,
            !1
          ),
          (s = null),
          !0));
      };
    (this.nextLayout && hx(this.layout, this.nextLayout) && a()(t)) ||
      this.props.ensureLineVisibility(
        null,
        this.layout.measureLayout.lineLayout,
        !1
      );
    let o = window.requestAnimationFrame,
      n = () => {
        try {
          if (
            (!e && this.props.player.audio.isPositionChanged() && (e = !0), e)
          ) {
            let e = this.props.player.audio.getCursor();
            i && i(e),
              s && s(e),
              this.findLayoutUnderCursor(e) &&
                ((i = this.applyCursorCoordinates(e)),
                this.nextLayout && hx(this.layout, this.nextLayout) && a(),
                !this.nextLayout &&
                  e >= eY(this.layout) - 1e-15 &&
                  (this.stopPlayback(), (this.pause = !0))),
              this.updateCurrentTempo(e);
          }
          this.pause || (this.animationPlayId = o(n));
        } catch (e) {
          console.error(e);
        }
      };
    (this.pause = !1), (this.animationPlayId = o(n));
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
var hk = s(hC, "player", "cursor");
let hN = "hlii",
  hS = { lineControls: "hlii" };
function hL(e) {
  let { line: t, slicingMode: i } = e,
    s = t.layout.height,
    a = i.expectedSliceWidth(t.layout.unscaledWidth) + ez,
    o = `${-ez / 2} -${t.layout.layers.height} ${a} ${s}`;
  return tp("svg", {
    width: a,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: s,
    viewBox: o,
    className: hS.lineControls,
    children: e.children,
  });
}
function hM(e) {
  let { leftLayout: t, rightLayout: i, line: s } = e,
    a = t.measureLayout.lineLayout,
    o = i.measureLayout.lineLayout,
    n = s.layout,
    r = p8.background,
    l = t.absoluteLoopLeftX - 1,
    p = i.absoluteLoopRightX,
    h = -n.layers.height + eX - eq;
  return a === o && a === n
    ? tp("rect", {
        className: r,
        rx: 3,
        height: e_(a),
        x: l,
        y: h,
        width: p - l + 1,
      })
    : a === n
    ? tp("rect", {
        className: r,
        rx: 3,
        height: e_(a),
        x: l,
        y: h,
        width: a.maxX - l,
      })
    : o === n
    ? tp("rect", {
        className: r,
        rx: 3,
        height: e_(o),
        x: o.minX - 1,
        y: h,
        width: p - o.minX + 2,
      })
    : tp("rect", {
        className: r,
        rx: 3,
        height: e_(n),
        x: n.minX - 1,
        y: h,
        width: n.maxX + 2,
      });
}
class h$ extends e8 {
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
var hB = s(h$);
let hT = ez / 2,
  hP = 0,
  hE = 7,
  hD = 48,
  hj = 48,
  hA = { animationStyles: hb };
function hz(e, t) {
  return e ? Math.abs(t.x - e.x) + Math.abs(t.y - e.y) : 0;
}
function hI(e) {
  return (t) => t === e;
}
let hO = "ontouchstart" in window;
function hR(e, t, i) {
  return (
    t &&
    i &&
    t.measureLayout.lineLayout.line.index <= e.index &&
    e.index <= i.measureLayout.lineLayout.line.index
  );
}
function hF(e, t) {
  return t && t.measureLayout.lineLayout.line == e;
}
class hV extends e8 {
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
      (this.windowScroller = new ho()),
      (this.scrollToCursor = T(e.device.os)
        ? () => setTimeout(this.scrollToCursorBase, 250)
        : this.scrollToCursorBase);
  }
  componentDidMount() {
    window.addEventListener("resize", this.viewportResizeDebounced),
      this.viewportResize().then(this.scrollToCursor);
  }
  scrollToCursorBase = () => {
    if (this.tab) {
      let e = F(
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
    e && t7(e, this.onTouchStart),
      window.removeEventListener("resize", this.viewportResizeDebounced),
      this.windowScroller.unmount();
  }
  viewportResize = async () => {
    let e = this.tab;
    if (e) {
      let t = await hr(e);
      (this.pageX =
        t.left +
        hT +
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
  viewportResizeDebounced = n(this.viewportResize, 100);
  static getDerivedStateFromProps(e, t) {
    let i = t.loopStartLayout,
      s = i && !t.activeLoopHandle ? i.absoluteLoopLeftX : t.loopStartX,
      a = t.loopEndLayout,
      o = a && !t.activeLoopHandle ? a.absoluteLoopRightX : t.loopEndX,
      { tuning: n, instrumentId: r } = e.part,
      l = n && q(r, n),
      p = !1;
    (_(r) || U(r)) && l && 0 !== l.pitch && (p = !0);
    let h = e.position;
    return (
      0 !== h.loopStart || 0 !== h.loopEnd
        ? ((i && -1 !== i.occurrences.findIndex(hI(e.position.loopStart))) ||
            (s = (i = F(e.part, h.loopStart, "left")).absoluteLoopLeftX),
          (a && -1 !== a.occurrences.findIndex(hI(h.loopEnd - a.duration))) ||
            (o = (a = F(e.part, h.loopEnd, "right")).absoluteLoopRightX))
        : ((i = null), (s = 0), (a = null), (o = 0)),
      {
        loopStartLayout: i,
        loopStartX: s,
        loopEndLayout: a,
        loopEndX: o,
        isPitchshiftToStandard: p,
      }
    );
  }
  ensureLineVisibility = (e, t, i) =>
    eG(() => {
      let { showPitchshiftLayer: s } = this.props;
      if (this.props.lines.print) return;
      let a = window.visualViewport
          ? window.visualViewport.pageTop
          : window.scrollY,
        o = this.props.lines.scale,
        n = eW(),
        r = this.props.videoIsReady ? 200 : 0,
        l = (n ? 48 : 0) + r,
        p = n ? 48 : 0,
        { pageY: h, clientHeight: d } = this,
        u = a - h + l,
        c = a - h + d - p,
        m = c - u,
        g = t.line.index,
        y = this.props.lines;
      if (e && (e.maxY * o < u || c < e.y * o)) return;
      let f = a,
        { loopStartLayout: v, loopEndLayout: b } = this.state;
      if (s) f = 0;
      else if (v && b) {
        let e = t.y * o - u;
        if (e < 0) f = a + e;
        else if (
          ((e = c - t.maxY * o) < 0 && (f = a - e),
          g < b.measureLayout.lineLayout.line.index)
        ) {
          let i = y.lines[g + 1];
          if (i) {
            let s = t.y,
              n = i.layout.maxY;
            (n - s) * o < m && (e = c - n * o) < 0 && (f = a - e);
          }
        }
      } else if (0 === g) f = 0;
      else if (((f = t.y * o + h - l), g < y.lines.length - 1)) {
        let e = y.lines[g - 1],
          t = y.lines[g + 1];
        if (e && t) {
          let i = e.layout.y,
            s = t.layout.maxY;
          (s - i) * o < m && (f = i * o + h - l);
        }
      }
      f !== a && this.windowScroller.scroll(f, i, a);
    });
  onTouchStart = (e) => {
    if (hO && "mousedown" === e.type) return;
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
      s = this.getTouchPoint(e);
    if (((this.lastTouch = s), "left" === i || "right" === i)) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        this.props.dispatch("player/changeLoop", !0),
        this.setState((e) =>
          "left" === i
            ? { activeLoopHandle: i, deltaLeftX: e.loopStartX - s.x }
            : { activeLoopHandle: i, deltaRightX: e.loopEndX - s.x }
        ),
        !this.onTouchMoveTickId)
      ) {
        let e = window.requestAnimationFrame;
        this.onTouchMoveTickId = e(this.onTouchMoveTick);
      }
      t5(document, this.onTouchMove);
    }
    t8(document, this.onTouchEnd);
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
          let { loopStartLayout: s, loopEndLayout: a } = i;
          if (!s || !a) throw Error("Wrong loop state");
          if ("left" === e.activeLoopHandle) {
            let o = { x: this.limitX(t.x + e.deltaLeftX), y: t.y },
              n = eK(this.props.lines.lines, o, "left"),
              r = eJ(n),
              l = eJ(a);
            r < l || (r === l && o.x <= a.absoluteLoopLeftX)
              ? ((i.loopStartLayout = n), (i.loopStartX = o.x))
              : ((i.loopStartLayout = i.loopEndLayout),
                (i.loopStartX = s.absoluteLoopLeftX));
          } else {
            let o = { x: this.limitX(t.x + e.deltaRightX), y: t.y },
              n = eK(this.props.lines.lines, o, "right"),
              r = eJ(n),
              l = eJ(s);
            r > l || (r === l && o.x >= s.absoluteLoopRightX)
              ? ((i.loopEndLayout = n), (i.loopEndX = o.x))
              : ((i.loopEndLayout = i.loopStartLayout),
                (i.loopEndX = a.absoluteLoopRightX));
          }
        }
        {
          let { loopStartLayout: t, loopEndLayout: s } = i;
          t &&
            s &&
            (t !== e.loopStartLayout || s !== e.loopEndLayout) &&
            this.props.dispatch("cursor/loop", {
              loopStartLayout: t,
              loopEndLayout: s,
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
      t3(document, this.onTouchMove),
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
        i = hz(this.lastTouch, t);
      i < 7 &&
        (e.preventDefault(),
        this.setState((e) => {
          let i = {
              loopStartX: e.loopStartX,
              loopStartLayout: e.loopStartLayout,
              loopEndX: e.loopEndX,
              loopEndLayout: e.loopEndLayout,
            },
            s = this.props.position,
            a = eK(this.props.lines.lines, t);
          if (0 === s.loopStart && 0 === s.loopEnd)
            s = { cursor: eZ(a), loopStart: 0, loopEnd: 0 };
          else {
            let e = eZ(a),
              t = eQ(a);
            if (s.loopStart <= e && e < s.loopEnd)
              s = { cursor: e, loopStart: s.loopStart, loopEnd: s.loopEnd };
            else if (s.loopStart <= t && t < s.loopEnd)
              s = { cursor: t, loopStart: s.loopStart, loopEnd: s.loopEnd };
            else {
              let t = a.measureLayout.measure.layouts,
                o = t[0].beatsLayouts,
                n = t[t.length - 1].beatsLayouts;
              (i.loopStartLayout = o[0]),
                (i.loopEndLayout = n[n.length - 1]),
                (i.loopStartX = i.loopStartLayout.absoluteLoopLeftX),
                (i.loopEndX = i.loopEndLayout.absoluteLoopRightX),
                (s = {
                  cursor: e,
                  loopStart: e1(i.loopStartLayout),
                  loopEnd: e2(i.loopEndLayout),
                });
            }
          }
          return (
            this.props.dispatch("cursor/move", s),
            this.ensureLineVisibility(null, a.measureLayout.lineLayout, !1),
            i
          );
        })),
        (this.lastTouch = null);
    }
    t6(document, this.onTouchEnd);
  };
  getTouchPoint(e) {
    let t = e.changedTouches ? e.changedTouches[0] : e,
      i = (t.pageX - this.pageX) / this.props.lines.scale,
      s = (t.pageY - this.pageY) / this.props.lines.scale;
    return { x: i, y: s };
  }
  handleTabEditor(e) {
    let t = this.getTouchPoint(e),
      i = this.props.device,
      s = P(i) || c(i.os) || T(i.os);
    if (s) {
      let e = document.querySelector("#mobileKeyboard").getBoundingClientRect(),
        i =
          this.lastTouch &&
          t.y > this.lastTouch.y + 10 &&
          t.y < this.lastTouch.y + 10 + e.height,
        s =
          this.lastTouch &&
          t.x > this.lastTouch.x - e.width / 2 &&
          t.x < this.lastTouch.x + e.width / 2;
      if (i && s) return;
      this.lastTouch = t;
    }
    let a = eK(this.props.lines.lines, t),
      o = eI(a.measureLayout.lineLayout, t.y);
    this.props.setTabEditor({
      beatsLayout: a,
      stringNum: o,
      scale: this.props.lines.scale,
    });
  }
  refMain = (e) => {
    (this.tab = e),
      Q && e && (t7(e, this.onTouchStart), t4(e, this.onTouchStart));
  };
  refTuning = (e) => {
    this.tuningButton = e;
  };
  render() {
    let {
        loopStartLayout: e,
        loopEndLayout: t,
        loopStartX: i,
        loopEndX: s,
        isPitchshiftToStandard: a,
      } = this.state,
      o = this.props.lines.lines,
      n = this.props.lines.scale,
      r = this.props.lines.print,
      l = this.props.lines.slicingMode,
      {
        part: p,
        plusAccess: h,
        isSmallScreen: d,
        handlePitchshift: u,
        showPitchshiftPopup: c,
        showPitchshiftLayer: m,
        tuning: g,
        tabEditorActive: y,
        tabEditorData: f,
        fingerings: v,
        videoIsOpened: b,
      } = this.props,
      x = o[0].layout.layers.height,
      w = v && v.partId === p.partId ? v.data : void 0,
      C = r ? hm.tablaturePrint : hm.tablatureNoPrint,
      k = !d && p.tuning && !b,
      N = !((h && !this.props.device.isDesktop) || r),
      S = tt([]);
    return e6(
      te,
      null,
      e6(
        "section",
        {
          id: "tablature",
          className: C,
          "data-id": h ? e0 : e5,
          role: "application",
          key: "main",
          ref: this.refMain,
        },
        0 !== n && y && e6(p_, { scale: n }),
        tp(np, {
          device: this.props.device,
          children: tp(hB, {
            children: tp(hk, {
              print: r,
              part: p,
              lines: o,
              refs: S,
              ensureLineVisibility: this.ensureLineVisibility,
              children: o.map((o, n) =>
                tp("div", {
                  className: hm.lineWrap,
                  children: [
                    tp(
                      pE,
                      {
                        line: o,
                        part: p,
                        tuning: 0 === o.index && g,
                        inlineDefs: 0 === o.index,
                        slicingMode: l,
                        tabEditorData: f,
                        fingerings: w,
                        lazy: N,
                      },
                      "line-" + o.index.toString()
                    ),
                    tp(
                      hL,
                      {
                        line: o,
                        slicingMode: l,
                        children: [
                          k &&
                            !r &&
                            0 === n &&
                            e6(o6, {
                              reference: this.refTuning,
                              handlePitchshift: u,
                              isPitchshiftToStandard: a,
                              isActive: c || m,
                              lock: !h,
                            }),
                          Q &&
                            !r &&
                            hR(o, e, t) &&
                            e6(hM, { leftLayout: e, rightLayout: t, line: o }),
                          Q &&
                            !r &&
                            hF(o, e) &&
                            tp(he, { x: i, layout: e, handle: "left" }, "left"),
                          Q &&
                            !r &&
                            hF(o, t) &&
                            tp(
                              he,
                              { x: s, layout: t, handle: "right" },
                              "right"
                            ),
                          tp(y ? nD : nP, {
                            line: o,
                            partId: p.partId,
                            songId: p.songId,
                          }),
                          !r &&
                            tp(
                              p2,
                              {
                                strings: p.strings,
                                intervalSize: o.layout.intervalSize,
                                defs: 0 === n,
                                hide: y,
                                setRef: (e) => {
                                  S.current[n] = e;
                                },
                              },
                              "cursor"
                            ),
                        ],
                      },
                      "ctrls-" + o.index.toString()
                    ),
                  ],
                })
              ),
            }),
          }),
        }),
        e6(
          D,
          null,
          !d &&
            c &&
            e6(
              j,
              { ...hA, key: "popup" },
              e6(hn, { tab: this.tab, tuningButton: this.tuningButton })
            ),
          !d &&
            m &&
            e6(
              j,
              { ...hA, key: "layer" },
              e6(ac, {
                firstLineLayoutHeight: x,
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
let hX = { onTab: !0 };
class hq extends e8 {
  activateFingeringsExperiment = () => {
    let { dispatch: e, user: t, experiments: i } = this.props;
    e3(t) &&
      i.paid_fingerings?.status === "pending" &&
      e("experiments/activate", { experimentName: "paid_fingerings" });
  };
  setTabEditor = (e) => this.props.dispatch("tabEditor/setForm", e);
  componentDidMount() {
    let e = window.hotKeysManager;
    e.bindOne("space", this.props.handlePlay, hX),
      e.bindOne("l", this.props.handleLoop, hX),
      e.bindOne("f", this.props.handleSolo, hX),
      e.bindOne("m", this.props.handleMute, hX),
      e.bindOne("r", this.props.handlePitchshift, hX),
      e.bindOne("t", this.props.handleMixer, hX),
      e.bindOne("s", this.props.handleSpeed, hX),
      e.bindOne("p", this.props.handlePrint, hX),
      e.bindOne("c", this.props.handleCountin, hX),
      e.bindOne("n", this.props.handleMetronome, hX),
      e.bindOne("e", this.props.handleTabEditor, hX),
      e.bindOne("g", this.props.handleFingerings, hX),
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
    e.unbindOne("space", hX),
      e.unbindOne("l", hX),
      e.unbindOne("f", hX),
      e.unbindOne("m", hX),
      e.unbindOne("r", hX),
      e.unbindOne("t", hX),
      e.unbindOne("s", hX),
      e.unbindOne("p", hX),
      e.unbindOne("c", hX),
      e.unbindOne("n", hX),
      e.unbindOne("e", hX),
      this.resizeObserver && this.resizeObserver.disconnect();
  }
  componentDidUpdate() {
    let { dispatch: e, part: t, experiments: i } = this.props;
    i.play_along_mobile?.status === "pending" &&
      t.videoPart &&
      e("experiments/activate", { experimentName: "play_along_mobile" });
  }
  render() {
    let {
        dispatch: e,
        user: t,
        demo: i,
        player: s,
        meta: a,
        part: o,
        cursor: n,
        screen: r,
        layer: { layer: l },
        device: p,
        route: h,
        tabEditor: d,
        fingerings: u,
        experiments: c,
        playAlongAd: m,
      } = this.props,
      g = h.isPanel,
      y = r.isSmall,
      f = e4(a),
      v = "saving" === d.status || "changes" === d.status,
      { pitchShift: b } = s,
      x = tr(
        () =>
          !!o.current &&
          !!o.current.tuning &&
          o.current.tuning.map((e) => e + b),
        [b, o]
      ),
      w = a.allowedByLicense,
      C = !a.isFailed && !o.isFailed && w && !a.isDeleted,
      k = C && !!o.current && !!o.lines.lines.length,
      N = C && (!o.current || !o.lines.lines.length),
      S = C && !e3(t) && !z(i),
      L = C && !e3(t) && !z(i) && p.isPhone && k,
      M =
        !!o.videoPart && c.play_along_mobile?.segment !== "off" && !a.isDeleted,
      $ = s.videoOpened || m.isOpened,
      B = e3(t) || z(i) ? om : o2,
      T = c.paid_fingerings?.segment,
      P = e3(t) && ("ut" === T || "on" === T);
    return e6(
      "section",
      { className: e7.tablature, role: g ? "complementary" : "main" },
      e6(aZ, { meta: a, user: t, cursor: n, part: o, player: s }),
      M &&
        e6(B, {
          songId: o.songId,
          handlePlayVideo: this.props.handlePlayVideo,
          handlePauseVideo: this.props.handlePauseVideo,
        }),
      e6(y ? a_ : s1, {
        ...this.props,
        shouldPlay: s.shouldPlay,
        canPlay: s.canPlay || g,
        track: f,
        device: p,
        layer: l,
        plusAccess: e3(t) || z(i),
        fingeringsEnabled: P,
        fingeringsStatus: u.status,
        fingeringsActive: u.shown,
        loop: 0 !== n.position.loopEnd,
        type: s.type,
        speed: s.speed,
        pitchShift: s.pitchShift,
        pitchShiftAvailable: !o.current || !!o.current.tuning,
        isCountin: s.isCountin,
        isMetronome: s.isMetronome,
        metronomeType: s.metronomeType,
        tadEditorWarning: v,
        tabEditorActive: h.hasEditor,
        usedDrums: o.current && o.current.usedDrums,
        videoIsOpened: s.videoOpened,
        fingeringsOnActivate: this.activateFingeringsExperiment,
        playAlongAdOpened: m.isOpened,
      }),
      S && e6(tP, { key: `tab-showroom-${a.songId}`, songId: a.songId }),
      e6(
        "section",
        { class: e7.pane, key: `tab-${a.songId}` },
        N && e6(tT, { key: `loading-${a.songId}` }),
        k &&
          tp(
            hV,
            {
              key: `tab-${a.songId}-${o.current.partId}`,
              dispatch: e,
              store: this.props.store,
              part: o.current,
              lines: o.lines,
              isSmallScreen: y,
              plusAccess: e3(t) || z(i),
              shouldPlay: s.shouldPlay,
              position: n.position,
              handlePitchshift: this.props.handlePitchshift,
              showPitchshiftPopup: "plus_pitchshift" === l,
              showPitchshiftLayer: "pitchshift" === l,
              tuning: x,
              layer: l,
              tabEditorData: d.data,
              tabEditorActive: h.hasEditor,
              setTabEditor: this.setTabEditor,
              fingerings: u.shown && u.trackFingering,
              device: p,
              isLoggedIn: t.isLoggedIn,
              videoIsReady: $,
              videoIsOpened: s.videoOpened,
            },
            o.lines.hash
          )
      ),
      L && e6(a5, { key: `bottom-showroom-${a.songId}-${o.current.partId}` }),
      k && e6(tB, { withAds: S, device: p, copyright: !0 })
    );
  }
}
var h_ = s(
  hq,
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
export { h_ as default };
