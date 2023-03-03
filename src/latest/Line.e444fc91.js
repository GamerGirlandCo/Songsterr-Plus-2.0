import {
  _ as e,
  v as t,
  T as i,
  d as a,
  b as s,
  p as n,
  x as l,
  o as r,
  h as o,
  c as u,
} from "./preact.294f37c2.js";
import {
  ad as p,
  s as c,
  ae as d,
  af as h,
  Y as m,
  ag as f,
  ah as y,
  ai as v,
  aj as g,
  ak as x,
  al as b,
  G as C,
  am as w,
  x as k,
  u as N,
  an as $,
  ao as M,
  ap as S,
  aq as B,
  ar as P,
  as as T,
  at as j,
  au as L,
  av as z,
  aw as q,
  ax as E,
  L as A,
  ay as D,
  H as F,
  F as I,
  az as _,
  T as R,
  C as G,
  aA as H,
  e as V,
  aB as U,
  _ as W,
  aC as O,
  X as Z,
  aD as J,
  aE as X,
  Z as K,
  $ as Y,
  a0 as Q,
  aF as ee,
  b as et,
  aG as ei,
  aH as ea,
  aI as es,
  aJ as en,
  aK as el,
  aL as er,
  aM as eo,
  aN as eu,
  aO as ep,
  aP as ec,
  aQ as ed,
  aR as eh,
  aS as em,
  aT as ef,
  aU as ey,
  aV as ev,
  aW as eg,
  aX as ex,
  aY as eb,
  aZ as eC,
  a_ as ew,
  a$ as ek,
  b0 as eN,
  b1 as e$,
  b2 as eM,
  b3 as eS,
  b4 as eB,
  S as eP,
  b5 as eT,
  b6 as ej,
  b7 as eL,
  b8 as ez,
  W as eq,
} from "./index.6eeae9f8.js";
import {
  a as eE,
  s as eA,
  b as eD,
  _ as eF,
  d as eI,
  F as e_,
  P as eR,
  S as eG,
  e as eH,
  C as eV,
} from "./Capo.a4ddb887.js";
import { I as eU } from "./Input.9e959f35.js";
import { A as eW } from "./ActionButton.5286af2f.js";
import { t as eO, a as eZ } from "./UploadRevisionForm.module.967e0aac.js";
import { g as eJ, a as eX } from "./gplay.79326319.js";
class eK extends e {
  render() {
    let {
        onClick: e,
        pressed: i,
        title: a,
        titlePressed: s,
        name: n,
        instrumentId: l,
      } = this.props,
      r = "mixer-title-id";
    return t(
      "button",
      {
        className: i ? eE.active : eE.button,
        onClick: e,
        id: "control-mixer",
        "aria-haspopup": !0,
        "aria-pressed": i,
      },
      t(
        "svg",
        {
          className: eE.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": r,
        },
        t("title", { id: r }, i && s ? s : a),
        t("circle", { className: eE.tag, cx: "7", cy: "39", r: "6" }),
        t("circle", {
          className: eE.circle,
          cx: "22.5",
          cy: "22.5",
          r: "22.5",
          filter: "url(#svg_shadow)",
        }),
        t(p, {
          className: eE.shape,
          instrumentId: l,
          name: n,
          transform: "translate(9 9)",
        })
      )
    );
  }
}
let eY = "tl2yt",
  eQ = "tl35",
  e1 = "tl276",
  e2 = "tl276 tl1lq",
  e0 = "tl1aa",
  e5 = "tl1aa tl294",
  e3 = "tl1aa tl1gg",
  e4 = "tl1aa tl1ia",
  e7 = "tl1aa tl1u0",
  e8 = "tl1aa tl2uy",
  e6 = "tl1aa tl2o2",
  e9 = "tl1aa tly0",
  te = "tl24a",
  tt = "tl2wd",
  ti = "tl2wd tlca",
  ta = "tli0",
  ts = "tl11g",
  tn = "tl1sq",
  tl = "tl2b5",
  tr = "tl34n",
  to = "tl33",
  tu = {
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
function tp(e, t) {
  e.addEventListener("touchmove", t, !!window.PASSIVE && { passive: !1 }),
    e.addEventListener("mousemove", t);
}
function tc(e, t) {
  e.removeEventListener("touchmove", t), e.removeEventListener("mousemove", t);
}
function td(e, t) {
  e.addEventListener("touchstart", t), e.addEventListener("mousedown", t);
}
function th(e, t) {
  e.removeEventListener("touchstart", t), e.removeEventListener("mousedown", t);
}
function tm(e, t) {
  e.addEventListener("touchend", t), e.addEventListener("mouseup", t);
}
function tf(e, t) {
  e.removeEventListener("touchend", t), e.removeEventListener("mouseup", t);
}
class ty extends e {
  constructor(e) {
    super(e);
    let t = e.player.speed,
      i = d(t, e.tempo.tempo);
    (this.state = {
      speed: t,
      tempo: i,
      position: h(t),
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
        i = d(t, e.tempo.tempo);
      return {
        speed: t,
        tempo: i,
        position: h(t),
        mirrorSpeed: e.player.speed,
        mirrorTempo: e.tempo.tempo,
      };
    }
    return null;
  }
  componentDidMount() {
    let e = this.wrap;
    e && td(e, this.onTouchStart),
      window.addEventListener("resize", this.onResize),
      window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
  }
  componentWillUnmount() {
    window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
    let e = this.wrap;
    e && th(e, this.onTouchStart),
      tc(document, this.onTouchMove),
      tf(document, this.onTouchEnd),
      window.removeEventListener("resize", this.onResize),
      this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId);
  }
  getPageCoordinates = () => {
    let { body: e, documentElement: t } = document,
      i = this.ruler;
    if (i && e && t) {
      let a = i.getBoundingClientRect(),
        s = a.left + e.scrollLeft + t.scrollLeft,
        n = a.top + e.scrollTop + t.scrollTop,
        l = a.width;
      return { rulerX: s, rulerY: n, rulerW: l };
    }
    throw Error("Wrong Usage");
  };
  onResize = m(() => this.setState(this.getPageCoordinates), 250);
  getNewPosition(e) {
    let t = f((100 * e.x) / e.w);
    return y(t, this.props.tempo.tempo);
  }
  handleFaster = (e) => {
    e.preventDefault(),
      this.setState(
        (e) => v(e.speed, e.tempo, e.position, this.props.tempo.tempo),
        () => {
          this.dispatchSpeed(this.state.speed);
        }
      );
  };
  handleSlower = (e) => {
    e.preventDefault(),
      this.setState(
        (e) => g(e.speed, e.tempo, e.position, this.props.tempo.tempo),
        () => {
          this.dispatchSpeed(this.state.speed);
        }
      );
  };
  dispatchSpeed = (e) => {
    x(this.props.store, e);
  };
  getTouchPoint(e) {
    let { rulerX: t, rulerY: i, rulerW: a } = this.state;
    if (null === t || null === i || null === a) {
      let e = this.getPageCoordinates();
      this.setState(e), (t = e.rulerX), (i = e.rulerY), (a = e.rulerW);
    }
    let s = e.changedTouches ? e.changedTouches[0] : e;
    return { x: Math.max(Math.min(s.pageX - t, a), 0), w: a, y: s.pageY - i };
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
    tm(document, this.onTouchEnd), tp(document, this.onTouchMove);
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
    tc(document, this.onTouchMove),
      tf(document, this.onTouchEnd),
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
      (t) => b(t.speed, t.tempo, t.position, this.props.tempo.tempo, e),
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
    let e = 100 === this.state.speed ? tu.buttonAlt : tu.button,
      i = 100 === this.state.speed ? tu.bpmOriginal : tu.bpm;
    return t(
      "div",
      { className: tu.speed, role: "dialog", "aria-label": "Speed" },
      t(
        "div",
        { className: i },
        t(
          "button",
          {
            onClick: this.bpmMinus,
            onKeyDown: this.bpmMinusPress,
            title: "Alt+A",
          },
          t(
            "svg",
            { width: 12, height: 12, viewBox: "0 0 12 2" },
            t("rect", {
              y: "2",
              width: "2",
              height: "12",
              transform: "rotate(-90 0 2)",
            })
          )
        ),
        t(
          "span",
          { className: tu.speedLabel, "aria-label": "Tempo" },
          this.state.tempo.bpm,
          " bpm"
        ),
        t(
          "button",
          {
            onClick: this.bpmPlus,
            onKeyDown: this.bpmPlusKeyPress,
            title: "Alt+S",
          },
          t(
            "svg",
            { width: 12, height: 12, viewBox: "0 0 12 12" },
            t("rect", { x: "5", width: "2", height: "12" }),
            t("rect", {
              y: "7",
              width: "2",
              height: "12",
              transform: "rotate(-90 0 7)",
            })
          )
        )
      ),
      t(
        "div",
        {
          className: tu.pane,
          title: "You can use arrow keys",
          ref: this.refWrap,
        },
        t("label", { className: tu.caption25 }, t("span", null, "25%")),
        t("label", { className: tu.caption50 }, t("span", null, "50%")),
        t("label", { className: tu.caption75 }, t("span", null, "75%")),
        t("label", { className: tu.caption100 }, t("span", null, "100%")),
        t("label", { className: tu.caption125 }, t("span", null, "125%")),
        t("label", { className: tu.caption150 }, t("span", null, "150%")),
        t("label", { className: tu.caption175 }, t("span", null, "175%")),
        t(
          "div",
          { className: tu.ruler, ref: this.refRuler },
          t(
            "div",
            {
              className: tu.handle,
              style: { left: this.state.position + "%" },
              role: "slider",
              "aria-valuenow": this.state.speed,
              "aria-valuemin": 25,
              "aria-valuemax": 175,
              "aria-valuetext": this.state.tempo.bpm + " bpm",
            },
            t("div", { className: e })
          )
        )
      )
    );
  }
}
var tv = c(ty, "player", "tempo");
let tg = "Cvj28d",
  tx = "Cvj28d Cvj2ff",
  tb = "Cvj28d Cvj2ff Cvj350",
  tC = "Cvj28d Cvj2ff Cvj248",
  tw = "Cvj28d Cvj1dp",
  tk = "Cvjo4",
  tN = "Cvj23g",
  t$ = "Cvj1mq",
  tM = "Cvj28d Cvj2k8",
  tS = {
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
function tB(e) {
  let {
      title: i,
      mobile: a,
      low: s,
      leftOffset: n,
      topOffset: l,
      horizontal: r,
      device: o,
      feature: u,
    } = e,
    p = tS.popupRight;
  a ? (p = s ? tS.popupMobileLow : tS.popupMobile) : r && (p = tS.popupTop);
  let c = {};
  void 0 !== n &&
    void 0 !== l &&
    ((c = { top: `${l}px`, left: `${n}px` }), (p = tS.popupLeftTop));
  let d = "subscribe in the app";
  C(o.os) && (d = "buy in the app");
  let h = `${i} ${d}`,
    m = C(o.os);
  return t(
    "div",
    { role: "dialog", className: p, style: c },
    (function (e, i, a) {
      for (
        var s = arguments.length, n = Array(s > 3 ? s - 3 : 0), l = 3;
        l < s;
        l++
      )
        n[l - 3] = arguments[l];
      return t(
        w,
        {
          source: "popup",
          attrs: { className: e, "aria-label": i },
          eventProperties: {
            Via: "feature popup",
            "App store": a ? "Google Play" : "App Store",
            Feature: u,
          },
        },
        n
      );
    })(
      tS.link,
      h,
      m,
      t(
        "div",
        null,
        t("div", { className: tS.title }, i),
        t("div", { className: tS.text }, d)
      ),
      m
        ? t("img", { src: eJ, width: 160, height: 47, alt: "Google Play" })
        : t("img", { src: eX, width: 160, height: 53, alt: "AppStore" })
    )
  );
}
function tP() {
  return t(
    "svg",
    { width: 54, height: 54, viewBox: "0 0 54 54" },
    t("path", {
      d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
      fill: "#F1452D",
    }),
    t("path", {
      d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
      fill: "#FDE3DF",
    })
  );
}
let tT = k + " B0fs1",
  tj = k + " B0f277",
  tL = k + " B0f2nd",
  tz = "B0f1ah",
  tq = "B0fqg",
  tE = "B0fqg B0f176",
  tA = "B0f102",
  tD = "B0f2sz",
  tF = {
    horizontalPopup: k + " B0fs1",
    verticalPopup: k + " B0f277",
    verticalLeftPopup: k + " B0f2nd",
    link: "B0f1ah",
    basewrapper: "B0fqg",
    wrapper: "B0fqg B0f176",
    text: "B0f102",
    linkText: "B0f2sz",
  };
function tI(e, t) {
  return e ? tF.horizontalPopup : t ? tF.verticalLeftPopup : tF.verticalPopup;
}
function t_(e) {
  let { title: a, left: s, horizontal: n } = e,
    { dispatch: l } = N(),
    r = i(() => {
      l("layer/hide");
    }, [l]);
  return t(
    "div",
    { className: tI(n, s), role: "dialog" },
    t(
      "div",
      {
        className: tF.link,
        "aria-label": `${a} mode has no effect`,
        onClick: r,
      },
      t("span", { className: tF.wrapper }, t(tP, null)),
      t(
        "div",
        { className: tF.text },
        "This song has only one",
        t("br", null),
        `instrument track. ${a}`,
        t("br", null),
        "mode has no effect."
      )
    )
  );
}
let tR = "uj1h8",
  tG = "uj22u",
  tH = "uj2f9",
  tV = "uj1b3",
  tU = "uj2aq",
  tW = "uj90",
  tO = "uj1j2",
  tZ = "uj2jv",
  tJ = "uj1j2 uj22n",
  tX = {
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
  tK = () =>
    t("path", {
      d: "M37 22.04v5.92a.5.5 0 0 0 .812.39l3.7-2.96a.5.5 0 0 0 0-.78l-3.7-2.96a.5.5 0 0 0-.812.39Z",
    }),
  tY = () =>
    t("path", {
      d: "M10 22.04v5.92a.5.5 0 0 1-.812.39l-3.7-2.96a.5.5 0 0 1 0-.78l3.7-2.96a.5.5 0 0 1 .812.39Z",
    }),
  tQ = (e) =>
    t("path", {
      d: "M26.13 22h-5.26a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508a.5.5 0 0 0-.433-.752Z",
      ...e,
    }),
  t1 = (e) =>
    t("path", {
      d: "M26.13 10h-5.26a.5.5 0 0 1-.431-.752l2.63-4.508a.5.5 0 0 1 .863 0l2.63 4.508a.5.5 0 0 1-.433.752Z",
      ...e,
    }),
  t2 = () =>
    t(
      a,
      null,
      t(
        "div",
        { className: tX.editorHelp },
        t(
          "div",
          null,
          t("div", { className: tX.title }, "Click a note to edit."),
          t(
            "div",
            { className: tX.part },
            t("p", null, "Navigate with"),
            t(
              "div",
              { className: tX.shortcut },
              t(
                "svg",
                { className: tX.navigation, width: 47, height: 33 },
                t("rect", { x: 16 }),
                t("rect", { x: 16, y: 17 }),
                t("rect", { x: 32, y: 17 }),
                t("rect", { y: 17 }),
                t(t1, null),
                t(tK, null),
                t(tY, null),
                t(tQ, null)
              )
            )
          ),
          t("div", { className: tX.delimiter }),
          t(
            "div",
            { className: tX.part },
            t("p", null, "Edit with"),
            t(
              "div",
              { className: tX.shortcut },
              t(
                "svg",
                { className: tX.digits, width: 47, height: 33 },
                t("rect", { className: tX.rect, x: 32 }),
                t("rect", { className: tX.rect }),
                t("rect", { x: 20, y: 7, height: 2, width: 7 }),
                t("rect", { className: tX.rect, y: 17 }),
                t("rect", { rx: 1, x: 16, y: 17, width: 31, height: 16 }),
                t("text", { x: 3, y: 12 }, 0),
                t("text", { x: 35, y: 12 }, 9),
                t("text", { x: 3, y: 29 }, "X"),
                t("path", {
                  fill: "#4B5059",
                  transform: "translate(30, 20)",
                  d: "M13 1.5c0-.827-.648-1.5-1.444-1.5H4.634C4.25 0 3.882.157 3.61.438L.212 3.97a.763.763 0 0 0 0 1.06l3.4 3.532c.27.281.638.438 1.022.438h6.922C12.352 9 13 8.327 13 7.5v-6ZM6.116 2.602a.525.525 0 0 1 .765 0l1.061 1.101 1.061-1.101a.525.525 0 0 1 .765 0c.21.22.212.576 0 .794l-1.06 1.102 1.06 1.101a.575.575 0 0 1 0 .795.527.527 0 0 1-.765 0l-1.06-1.102L6.88 6.394a.525.525 0 0 1-.765 0 .578.578 0 0 1 0-.795l1.061-1.101-1.06-1.102a.575.575 0 0 1 0-.794Z",
                })
              )
            )
          ),
          t(
            a,
            null,
            t("div", { className: tX.delimiter }),
            t(
              "div",
              { className: tX.part },
              t("p", null, "Move a note by dragging or"),
              t(
                "div",
                { className: tX.shortcut },
                t(
                  "svg",
                  { className: tX.move, width: 67, height: 33 },
                  t("rect", { className: tX.rect, x: 52 }),
                  t("rect", { className: tX.rect, x: 52, y: 17 }),
                  t("rect", { rx: 1, y: 8, height: 17, width: 49 }),
                  t("text", { x: 3, y: 21 }, "Shift"),
                  t("text", { x: 38, y: 20 }, "+"),
                  t(tQ, { transform: "translate(36,0)" }),
                  t(t1, { transform: "translate(36,0)" })
                )
              )
            )
          )
        )
      )
    ),
  t0 = "J11oq",
  t5 = "J11oq J11sb",
  t3 = "J11oq J11iw",
  t4 = "J11oq J11tq",
  t7 = {
    hint: "J11oq",
    hint0: "J11oq J11sb",
    hint1: "J11oq J11iw",
    hint2: "J11oq J11tq",
  },
  t8 = (e) => {
    let { className: i = t7.hint } = e;
    return t(
      "div",
      { className: i },
      t(
        "p",
        null,
        "Unless you submit a revision, the changes will be private and wonΓÇÖt affect the sound."
      )
    );
  },
  t6 = "Cv41lu",
  t9 = "Cv41cy",
  ie = "Cv41uh",
  it = "Cv42y1",
  ii = "Cv41lu Cv41ex",
  ia = "Cv4221",
  is = "Cv42ut",
  il = "Cv42ut Cv428v",
  ir = "Cv42e1",
  io = "Cv42e1 Cv4tk",
  iu = "Cv42e1 Cv4tk Cv41co",
  ip = "Cv42e1 Cv425",
  ic = "Cv42e1 Cv4tk Cv41co Cv42xo",
  id = {
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
  ih = (e) => {
    let { status: i } = e,
      a = "No changes yet";
    return (
      "changes" === i || "saving" === i
        ? (a = "Saving...")
        : "saved" === i && (a = "All changes saved privately"),
      t(
        "div",
        { style: { width: "100%" } },
        t("div", { className: id.divider }),
        t(
          "div",
          { className: id.hintBold, style: { padding: "4px 0px 3px" } },
          a
        )
      )
    );
  },
  im = (e) => {
    let { dispatch: i, children: a } = e;
    return t(
      "span",
      {
        onClick: (e) => {
          e.preventDefault(),
            i("curiosity/event", {
              event: "Clicked a tab editor popup link",
              action: "Revisions",
            }),
            i("layer/show", "revisions");
        },
      },
      a
    );
  };
var iy = c(im);
let iv = "Cwrup",
  ig = eO + " Cwr3f",
  ix = eZ + " Cwr1dr",
  ib = $ + " Cwr1fo",
  iC = "Cwr32t",
  iw = "Cwr2p4",
  ik = M + " Cwr109",
  iN = S + " Cwr1pn",
  i$ = {
    form: "Cwrup",
    textarea: eO + " Cwr3f",
    actions: eZ + " Cwr1dr",
    cancel: $ + " Cwr1fo",
    hint: "Cwr32t",
    error: "Cwr2p4",
    title: M + " Cwr109",
    content: S + " Cwr1pn",
  },
  iM = (e) => {
    let { onCancel: i, onSubmit: a } = e,
      l = s(),
      [r, o] = n(!1),
      [u, p] = n(null),
      [c, d] = n(null),
      h = async (e) => {
        e.preventDefault(), o(!0);
        try {
          P([{ field: l.current, validator: T }]),
            await a({ summary: l.current.value }),
            d(null);
        } catch (e) {
          e instanceof j ? d(e) : p(e);
        }
        o(!1);
      },
      m = !u?.reasons?.summary;
    return t(
      "form",
      { className: i$.form, onSubmit: h },
      t(B, { styles: i$, error: m && u }),
      t(eU, {
        ref: l,
        name: "summary",
        type: "textarea",
        error: u,
        placeholder: "Briefly explain your changes",
        styles: i$,
        errorStyles: i$,
        popup: !0,
      }),
      t(
        "div",
        { className: i$.actions },
        t("a", { className: i$.cancel, onClick: i }, "Cancel"),
        t(eW, {
          id: c ? "submitRevisionButtonWarning" : "submitRevisionButton",
          title: "Submit a public revision",
          processing: r,
        })
      ),
      t("p", { className: i$.hint, style: { textAlign: "justify" } }, [
        "Once audio rendering is complete, we'll send you an email, and your revision will appear on site for other users to enjoy. You can also submit more complex changes via ",
        t(iy, null, "Guitar Pro tab"),
        ".",
      ])
    );
  },
  iS = (e) => {
    let { showForm: a, onToggleForm: s, onSubmitted: n } = e,
      { dispatch: l, meta: r, part: o } = N("meta", "part"),
      u = i(
        async (e) => {
          let t = await L({
            ...e,
            songId: r.songId,
            revision: r.revisionId || o.revisionId,
          });
          l("layer/hide"), l("upload/revision:merged", t), n();
        },
        [l, r, o]
      );
    return a
      ? t(iM, { onCancel: s, onSubmit: u })
      : t(
          "div",
          null,
          t(
            "button",
            {
              className: z.popupButtonGreen,
              style: { marginBottom: 15 },
              onClick: s,
            },
            "Submit a public revision"
          ),
          t(t8, { className: id.hintNoMargin })
        );
  };
var iB = c(iS);
let iP = (e) => {
  let { dispatch: i, children: a } = e;
  return t(
    "a",
    {
      href: "/a/wa/signin",
      onClick: (e) => {
        e.preventDefault(),
          i("curiosity/event", {
            event: "Clicked a tab editor popup link",
            action: "Sign In",
          }),
          i("navigate", "/a/wa/signin");
      },
    },
    a
  );
};
var iT = c(iP);
class ij extends e {
  constructor() {
    super();
    let e = q("v2");
    e || E("v2"), (this.state = { helpActive: !e, showForm: !1 });
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
    let { tabEditor: e, user: i } = this.props,
      { helpActive: a, showForm: s } = this.state,
      n = a ? id.popupExtended : id.popup,
      l = s ? `${n} ${id.reposition}` : n;
    return t(
      "div",
      { className: l },
      t(
        "div",
        { className: id.popupInner },
        t(
          "div",
          {
            className: a ? id.helpTagActive : id.helpTag,
            onClick: this.helpToggle,
          },
          t("span", null, "?")
        ),
        a && t(t2, null),
        t(
          "div",
          { className: id.mainContainer },
          t(
            "div",
            null,
            t("h3", {}, "TAB editor"),
            !i.isLoggedIn &&
              t(
                "div",
                { className: id.hintBigger, style: { marginTop: 0 } },
                t(iT, null, "Sign up"),
                " for free to submit a public revision or to save changes privately."
              ),
            !i.isLoggedIn &&
              t(t8, { className: i.isLoggedIn ? id.hint : id.hintBigger }),
            i.isLoggedIn &&
              t(iB, {
                showForm: s,
                onToggleForm: this.toggleForm,
                onSubmitted: this.onSubmitted,
              })
          ),
          i.isLoggedIn && t(ih, { status: e.status })
        )
      )
    );
  }
}
var iL = c(ij, "tabEditor", "user", "experiments"),
  iz = "/static/media/hand.9a7dcf24.svg";
let iq = "Cjoe6",
  iE = "Cjoe6 Cjo2q1",
  iA = "Cjo186",
  iD = "Cjo1a2",
  iF = "Cjoi2",
  iI = "Cjo1pw",
  i_ = {
    popup: "Cjoe6",
    popupWarning: "Cjoe6 Cjo2q1",
    warning: "Cjo186",
    hint: "Cjo1a2",
    helpTag: "Cjoi2",
    beta: "Cjo1pw",
  };
function iR(e) {
  let { dispatch: a } = N();
  if ("In Progress" === e.status || "Error" === e.status)
    return t(
      "div",
      { className: i_.popupWarning },
      t(
        "p",
        { className: i_.warning },
        "In Progress" === e.status &&
          "Seems like fingerings generation for this track is in progress right now. Try again later.",
        "Error" === e.status &&
          "Failed to generate fingerings. We are working on a fix."
      )
    );
  let s = i(
    () =>
      a("curiosity/event", { event: "Clicked open Beta fingerings article" }),
    [a]
  );
  return t(
    "div",
    { className: i_.popup },
    t(
      A,
      { to: "/a/wa/help#what-is-the-guitar-fingering-beta", onClick: s },
      t("div", { className: i_.helpTag }, t("span", null, "?"))
    ),
    t("p", { className: i_.hint }, "Left hand"),
    t("img", { src: iz, width: 76.6, height: 100.1, alt: "Fingerging hint" }),
    t("span", { className: i_.beta }, "beta")
  );
}
let iG = "C0w33s",
  iH = "C0w3a",
  iV = "C0w1ij",
  iU = "C0w3a C0w13m",
  iW = "C0w3a C0w2bp",
  iO = "C0wz2",
  iZ = {
    popup: "C0w33s",
    button: "C0w3a",
    path: "C0w1ij",
    activeButton: "C0w3a C0w13m",
    disabledButton: "C0w3a C0w2bp",
    spacer: "C0wz2",
  };
class iJ extends e {
  render() {
    let { dispatch: e } = this.props,
      { metronomeType: i, voiceMetronomeAvailable: a } = this.props.player,
      s = "regular" === i ? iZ.activeButton : iZ.button,
      n = {};
    return (
      a
        ? ((n.className = "voice" === i ? iZ.activeButton : iZ.button),
          (n.onClick = () => e("player/changeMetronome:init", "voice")))
        : ((n.className = iZ.disabledButton),
          (n.disabled = !0),
          (n.title = "Voice metronome is unavailable on this song")),
      t(
        "div",
        { className: iZ.popup },
        t(
          "button",
          {
            className: s,
            onClick: () => e("player/changeMetronome:init", "regular"),
          },
          t(
            "svg",
            { width: 34, height: 32, viewBox: "-6 0 26 20" },
            t(
              "defs",
              null,
              t(
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
                t("feFlood", {
                  floodOpacity: "0",
                  result: "BackgroundImageFix",
                }),
                t("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                t("feOffset", { dy: "2" }),
                t("feGaussianBlur", { stdDeviation: "6" }),
                t("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.533333 0 0 0 0 0.901961 0 0 0 0 0 0 0 0 0.75 0",
                }),
                t("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_4343_1308",
                }),
                t("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect_shadow_metro",
                  result: "shape",
                })
              )
            ),
            t("path", { d: eD })
          ),
          t("p", null, "tick tock")
        ),
        t("div", { className: iZ.spacer }),
        t(
          "button",
          n,
          t(
            "svg",
            { width: 34, height: 32, viewBox: "0 0 34 28" },
            t("use", { xlinkHref: `${eA}#icon`, className: iZ.path })
          ),
          t("p", null, "one two")
        )
      )
    );
  }
}
var iX = c(iJ, "player"),
  iK = null,
  iY = null,
  iQ = null,
  i1 = null,
  i2 = null,
  i0 = null,
  i5 = null,
  i3 = null,
  i4 = null,
  i7 = null,
  i8 = [iK, iY, iQ, i1, i2, i0, i5, i3, i4, i7];
let i6 = "j515w",
  i9 = "j5ha",
  ae = "j5ak",
  at = "j58u",
  ai = "j5lp",
  aa = {
    print: "j515w",
    pane: "j5ha",
    zoom: "j5ak",
    printLabel: "j58u",
    actions: "j5lp",
  };
class as extends e {
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
    return t(
      "div",
      { className: aa.print, role: "dialog", "aria-label": "Print" },
      t(
        "div",
        { className: aa.zoom },
        t(
          "button",
          { onClick: this.minus, title: "Zoom Out" },
          t(
            "svg",
            { width: "22", height: "22", role: "img" },
            t("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
            t("path", { d: "M7 11 h8" })
          )
        ),
        t(
          "span",
          { className: aa.printLabel, "aria-label": "Zoom" },
          this.props.print.zoom,
          "%"
        ),
        t(
          "button",
          { onClick: this.plus, title: "Zoom In" },
          t(
            "svg",
            { width: "22", height: "22", role: "img" },
            t("rect", { width: 22, height: 22, rx: 3, ry: 3 }),
            t("path", { d: "M5 11 h12 M 11 5 v12" })
          )
        )
      ),
      t(
        "div",
        { className: aa.actions },
        t(
          "button",
          {
            className: z.popupButtonGreen,
            onClick: this.print,
            title: "Print",
          },
          "Print"
        )
      )
    );
  }
}
var an = c(as, "print");
let al = { animationStyles: W };
class ar extends e {
  componentDidUpdate() {
    let { usedDrums: e, fingeringsOnActivate: t } = this.props;
    !e && t && t();
  }
  render() {
    let { gettext: e } = D(i8),
      {
        device: i,
        plusAccess: s,
        layer: n,
        tadEditorWarning: l,
        speed: r,
        fingeringsEnabled: o,
        fingeringsActive: u,
        fingeringsStatus: p,
        usedDrums: c,
        toolsHidden: d,
        videoIsOpened: h,
        metronomeType: m,
      } = this.props,
      { print: f } = N("print"),
      y = C(i.os) || F(i.os) || I(i),
      v = "mixer" === n,
      g = "speed" === n,
      x = n === O,
      b = this.props.tabEditorActive,
      w = "Loading" === p,
      k = "solo" === this.props.type && !h,
      $ = "mute" === this.props.type && !h,
      M = this.props.loop,
      S = this.props.isCountin && !h,
      B = this.props.isMetronome && !h,
      P = `${Math.round(r)}%`,
      T = !s,
      j = !s,
      L = eF.panePlus2;
    return (
      c ? (L = eF.panePlus2Secondary) : o && (L = eF.panePlus3),
      t(
        "aside",
        { id: "controls", className: L, "data-controls": "tablature" },
        t("div", { className: eF.handler }),
        t(
          "div",
          { className: eF.centerGroup },
          t(
            "div",
            { className: eF.item },
            t(eI, {
              shouldPlay: this.props.shouldPlay,
              canPlay: this.props.canPlay,
              onClick: this.props.handlePlay,
              title: e("Play (Space)"),
              titlePressed: e("Pause (Space)"),
            })
          ),
          t(
            "div",
            { className: eF.item, id: "mixer-button" },
            t(eK, {
              pressed: v,
              onClick: this.props.handleMixer,
              title: e("Show tracks (T)"),
              titlePressed: e("Hide tracks (T)"),
              instrumentId: this.props.track
                ? this.props.track.instrumentId
                : _,
              name: this.props.track ? this.props.track.name : "",
            }),
            t(R, null, v && t(G, al, t(H, null)))
          ),
          !d &&
            t(
              a,
              {},
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `speed ${g}`,
                  icon: "speed",
                  text: P,
                  pressed: g,
                  onClick: this.props.handleSpeed,
                  title: e(
                    "Open speed panel (S). Change tempo: (Alt+1ΓÇô7) for 25%ΓÇô175%, (Alt+S/A) for 1 bpm change"
                  ),
                  hasPopup: !0,
                  lock: j,
                }),
                t(
                  R,
                  null,
                  "plus_speed" === n &&
                    t(
                      G,
                      { ...al, key: "popup" },
                      y
                        ? t(tB, {
                            title: e("Tempo Control"),
                            device: i,
                            horizontal: !0,
                            feature: "slowdown",
                          })
                        : t(eR, {
                            title: e("Tempo Control"),
                            middleText:
                              "USERS OF THIS FEATURE LEARN TABS 60% FASTER",
                            horizontal: !0,
                            classPrefix: "speed",
                          })
                    ),
                  g && t(G, { ...al, key: "layer" }, t(tv, null))
                )
              ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `loop ${M}`,
                  icon: "loop",
                  pressed: M,
                  onClick: this.props.handleLoop,
                  title: e("Turn loop mode on (L)"),
                  titlePressed: e("Turn loop mode off (L)"),
                  hasPopup: T,
                  lock: j,
                }),
                t(
                  R,
                  null,
                  "plus_loop" === n &&
                    t(
                      G,
                      al,
                      y
                        ? t(tB, {
                            title: e("Loop Mode"),
                            device: i,
                            horizontal: !0,
                            feature: "loop",
                          })
                        : t(eR, {
                            title: e("Loop Mode"),
                            horizontal: !0,
                            classPrefix: "loop",
                          })
                    )
                )
              ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `solo ${k}`,
                  icon: "solo",
                  disabled: h,
                  pressed: k,
                  onClick: this.props.handleSolo,
                  title: e("Play current track solo (F)"),
                  titlePressed: e("Play focus mix of all tracks (F)"),
                  hasPopup: T,
                  lock: j,
                }),
                t(
                  R,
                  null,
                  "plus_solo" === n &&
                    !h &&
                    t(
                      G,
                      al,
                      y
                        ? t(tB, {
                            title: e("Solo Mode"),
                            device: i,
                            horizontal: !0,
                            feature: "solo",
                          })
                        : t(eR, {
                            title: e("Solo Mode"),
                            horizontal: !0,
                            classPrefix: "solo",
                          })
                    ),
                  "solo_single" === n &&
                    !h &&
                    t(G, al, t(t_, { title: e("Solo"), horizontal: !0 }))
                )
              ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `mute ${$}`,
                  icon: "mute",
                  disabled: h,
                  pressed: $,
                  onClick: this.props.handleMute,
                  title: e("Mute current track (M)"),
                  titlePressed: e("Unmute current track (M)"),
                  hasPopup: T,
                  lock: j,
                }),
                t(
                  R,
                  null,
                  "plus_mute" === n &&
                    !h &&
                    t(
                      G,
                      al,
                      y
                        ? t(tB, {
                            title: e("Mute Mode"),
                            device: i,
                            horizontal: !0,
                            feature: "mute",
                          })
                        : t(eR, {
                            title: e("Mute Mode"),
                            horizontal: !0,
                            classPrefix: "mute",
                          })
                    )
                )
              ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `countin ${S}`,
                  icon: "countin",
                  disabled: h,
                  pressed: S,
                  onClick: this.props.handleCountin,
                  title: e("Turn count-in mode on (C)"),
                  titlePressed: e("Turn count-in mode off (C)"),
                })
              ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: `metronome ${B}`,
                  icon: "voice" === m ? "voice" : "metronome",
                  disabled: h,
                  pressed: B,
                  onClick: this.props.handleMetronome,
                  title: e("Turn metronome on (N)"),
                  titlePressed: e("Turn metronome off (N)"),
                }),
                t(
                  R,
                  null,
                  !h &&
                    "metronome" === n &&
                    t(G, { ...al, key: "layer" }, t(iX, null))
                )
              ),
              !c &&
                t(
                  "div",
                  { className: eF.item },
                  t(e_, {
                    key: `editor ${b} ${l}`,
                    icon: "editor",
                    pressed: b,
                    onClick: this.props.handleTabEditor,
                    title: e("Turn tab editor on (E)"),
                    titlePressed: e("Turn tab editor off (E)"),
                    warning: l,
                  }),
                  b && t(G, { ...al, key: "tab-editor" }, t(iL, null))
                ),
              o &&
                !c &&
                t(
                  "div",
                  { className: eF.item },
                  t(e_, {
                    key: `fingerings ${w} ${u}`,
                    loading: w,
                    icon: "fingerings",
                    pressed: u,
                    onClick: this.props.handleFingerings,
                    title: e("Generate guitar fingerings (G)"),
                    titlePressed: e("Turn fingerings off (G)"),
                  }),
                  t(
                    R,
                    null,
                    u && "Loading" !== p && !b && t(G, al, t(iR, { status: p }))
                  )
                ),
              t(
                "div",
                { className: eF.item },
                t(e_, {
                  key: "print",
                  icon: "print",
                  onClick: this.props.handlePrint,
                  title: "Print (P)",
                  pressed: V(f),
                  lock: j,
                }),
                t(
                  R,
                  null,
                  "plus_print" === n &&
                    t(
                      G,
                      al,
                      t(eR, {
                        title: e("Printing"),
                        horizontal: !0,
                        classPrefix: "print",
                      })
                    ),
                  "print" === n && t(G, { ...al, key: "layer" }, t(an, null))
                )
              ),
              t(
                "div",
                { className: eF.secondaryControls },
                t(
                  "div",
                  { className: c ? eF.itemSmall : eF.itemSmallHidden },
                  t(e_, {
                    key: `help ${x}`,
                    icon: "help",
                    pressed: x,
                    onClick: this.props.handleNotation,
                    title: e("Show drum notation"),
                    titlePressed: e("Hide drum notation"),
                  }),
                  c && t(U, { usedDrums: c, horizontal: !0 })
                )
              )
            )
        )
      )
    );
  }
}
let ao = "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z",
  au = "M7.5 12h11v-2h-11v2z";
function ap(e) {
  let { up: i } = e;
  return t(
    "svg",
    { width: "44", height: "46", role: "img" },
    t("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
    t("path", {
      d: i ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
    })
  );
}
let ac = "B7uxe",
  ad = "B7uxe B7u2i3",
  ah = "B7u2d7",
  am = "B7u1gz",
  af = "B7u2d7 B7u12o",
  ay = "B7u2d7 B7u15f",
  av = "B7u2lu",
  ag = "B7u2xf",
  ax = "B7u1a5",
  ab = "B7u1jq",
  aC = "B7u1jq B7u2yh",
  aw = "B7u1jq B7u2yh B7u6z",
  ak = "B7u1jq B7u1fq",
  aN = "B7u1b6",
  a$ = {
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
  aM = 12,
  aS = -12,
  aB = (e) =>
    e.current &&
    (Y(e.current.instrumentId) || Q(e.current.instrumentId)) &&
    e.current.tuning;
class aP extends e {
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
      let a = Z(i.current, e.instance.getCursor(), "left");
      a && t(null, a.measureLayout.lineLayout, !1);
    }
  }
  tuneUp = (e) => {
    e.preventDefault();
    let { pitchShift: t } = this.props.player;
    t < 12 && J(this.props.store, t + 1);
  };
  tuneDown = (e) => {
    e.preventDefault();
    let { pitchShift: t } = this.props.player;
    t > -12 && J(this.props.store, t - 1);
  };
  reset = (e) => {
    e.preventDefault(), J(this.props.store, 0);
  };
  renderCurrentTuning = () => {
    if (aB(this.props.part)) {
      let e = this.props.part.current.tuning.map(
        (e) => e + this.props.player.pitchShift
      );
      return t(
        "div",
        { className: a$.currentTuning, "aria-label": "Current tuning" },
        t("div", { className: a$.currentTuningHeader }, "CURRENT TUNING"),
        t("div", { id: "tuning", className: a$.tuningString }, X(e))
      );
    }
    return null;
  };
  renderQuickButton = () => {
    if (0 !== this.props.player.pitchShift)
      return t(
        "button",
        {
          className: a$.quickButton,
          onClick: this.reset,
          role: "button",
          "aria-label": "Restore original tuning",
        },
        "Restore original tuning"
      );
    if (aB(this.props.part)) {
      let e = K(
        this.props.part.current.instrumentId,
        this.props.part.current.tuning
      );
      if (e && 0 !== e.pitch) {
        let i = e.tuningName;
        return (
          "STANDARD TUNING" === i && (i = "Standard tuning"),
          t(
            "button",
            {
              className: a$.quickButton,
              role: "button",
              "aria-label": "Quick shift pitch",
              onClick: () => {
                J(this.props.store, e.pitch);
              },
            },
            `Convert to ${i}`
          )
        );
      }
    }
    return t(
      "button",
      {
        className: a$.disabledButton,
        role: "button",
        disabled: !0,
        "aria-label": "Restore original tuning",
      },
      "Restore original tuning"
    );
  };
  render() {
    let e = this.renderQuickButton(),
      i = this.renderCurrentTuning(),
      { pitchShift: a } = this.props.player,
      { tab: s, tuningButton: n, mobile: l } = this.props,
      r = 0,
      o = 0,
      u = a$.pitchshift;
    if (l) (r = -71), (o = -235), (u = a$.pitchshiftMobile);
    else if (((r = this.props.firstLineLayoutHeight - 58), (o = 55), s && n)) {
      let e = s.getBoundingClientRect(),
        t = n.getBoundingClientRect();
      (o = t.left - e.left + t.width + 21),
        (r = t.top + t.height - e.top - 77.5);
    }
    return t(
      "div",
      {
        className: u,
        title: "You can use arrow keys",
        role: "dialog",
        "aria-label": "Shift Pitch",
        "data-tab-control": "pitch",
        style: { top: `${r}px`, left: `${o}px` },
      },
      i || t("div", { className: a$.currentTuningFiller }),
      t(
        "div",
        { className: a$.tuneControls },
        t(
          "button",
          {
            className: a$.updown,
            onClick: this.tuneDown,
            disabled: a <= -12,
            "aria-label": "Step down",
          },
          t(ap, { up: !1 })
        ),
        t(
          "span",
          { className: a$.currentPitch, "aria-label": "Current pitch" },
          (a > 0 ? "+" : "") + a
        ),
        t(
          "button",
          {
            className: a$.updown,
            onClick: this.tuneUp,
            disabled: a >= 12,
            "aria-label": "Step up",
          },
          t(ap, { up: !0 })
        )
      ),
      e
    );
  }
}
var aT = c(aP, "player", "part");
let aj = "B6714x",
  aL = "B67al",
  az = "B6713d",
  aq = "B6711t",
  aE = "B6731g",
  aA = "B6731g B679r",
  aD = "B67147",
  aF = {
    mobileSpeed: "B6714x",
    secondary: "B67al",
    controls: "B6713d",
    value: "B6711t",
    button: "B6731g",
    disabled: "B6731g B679r",
    switch: "B67147",
  },
  aI = 30,
  a_ = 170,
  aR = 10;
class aG extends e {
  constructor() {
    super(), (this.state = { mode: "percent" });
  }
  tuneUp = (e) => {
    let t, i;
    e.preventDefault();
    let { store: a, player: s, tempo: n } = this.props,
      { mode: l } = this.state;
    "percent" === l
      ? ((t = 10), (i = Math.floor(s.speed / t) * t + t))
      : ((t = +(100 / n.tempo.bpm).toFixed(2)), (i = s.speed + t)),
      i <= 170 && i >= 30 && x(a, i);
  };
  tuneDown = (e) => {
    let t, i;
    e.preventDefault();
    let { store: a, player: s, tempo: n } = this.props,
      { mode: l } = this.state;
    "percent" === l
      ? ((t = 10), (i = Math.floor(s.speed / t) * t - t))
      : ((t = +(100 / n.tempo.bpm).toFixed(2)), (i = s.speed - t)),
      i <= 170 && i >= 30 && x(a, i);
  };
  switchMode = () => {
    let { mode: e } = this.state;
    this.setState({ mode: "percent" === e ? "bpm" : "percent" });
  };
  render() {
    let e, i;
    let { tempo: a } = this.props,
      { speed: s } = this.props.player,
      { mode: n } = this.state,
      l = d(s, a.tempo),
      r = Math.round(s),
      o = aF.disabled,
      u =
        "percent" === n
          ? 10 * Math.floor(s / 10) - 10
          : s - +(100 / a.tempo.bpm).toFixed(2);
    u >= 30 && ((o = aF.button), (e = this.tuneDown));
    let p = aF.disabled,
      c =
        "percent" === n
          ? 10 * Math.floor(s / 10) + 10
          : s + +(100 / a.tempo.bpm).toFixed(2);
    return (
      c <= 170 && ((p = aF.button), (i = this.tuneUp)),
      t(
        "div",
        { className: aF.mobileSpeed, role: "dialog", "aria-label": "Speed" },
        t(
          "p",
          { className: aF.secondary },
          "percent" === n ? `${l.bpm} bpm` : `${r}%`
        ),
        t(
          "div",
          { className: aF.controls },
          t("button", { className: o, onClick: e }, t(ap, { up: !1 })),
          t(
            "div",
            { className: aF.value },
            t("p", null, "percent" === n ? `${r}%` : l.bpm),
            "bpm" === n && t("span", null, "bpm")
          ),
          t("button", { className: p, onClick: i }, t(ap, { up: !0 }))
        ),
        t(
          "button",
          { className: aF.switch, onClick: this.switchMode },
          `Switch to ${"percent" === n ? "bpm" : "%"}`
        )
      )
    );
  }
}
var aH = c(aG, "player", "tempo");
let aV = "n8g5",
  aU = "n8g5 n82ku",
  aW = "n8n1",
  aO = "n885",
  aZ = "n885 n81jn",
  aJ = "n82pa",
  aX = "n835f",
  aK = "n82pa n81e8",
  aY = "n82pa n813x",
  aQ = "n81sz",
  a1 = "n81sz n8on",
  a2 = "n819i",
  a0 = "n81z",
  a5 = "n81yu",
  a3 = "n82mi",
  a4 = "n8kg",
  a7 = {
    controls: "n8g5",
    plusControls: "n8g5 n82ku",
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
  a8 = { animationStyles: et };
class a6 extends e {
  overflowTimer = null;
  minimizeClick = () => {
    let { minimized: e } = this.state,
      { dispatch: t } = this.props;
    clearTimeout(this.overflowTimer),
      e
        ? (t("curiosity/event", { event: "Toolbar opened" }),
          this.setState({ minimized: !1 }),
          (this.overflowTimer = setTimeout(() => {
            this.setState({ overflowVisible: !0 });
          }, 500)))
        : (this.props.handleMinimize(),
          t("curiosity/event", { event: "Toolbar closed" }),
          this.setState({ minimized: !0, overflowVisible: !1 }));
  };
  hide = () => {
    let { minimized: e } = this.state,
      { shouldPlay: t, dispatch: i } = this.props;
    clearTimeout(this.overflowTimer),
      e ||
        t ||
        (this.props.handleMinimize(),
        i("curiosity/event", { event: "Toolbar closed" }),
        this.setState({ minimized: !0, overflowVisible: !1 }));
  };
  playClick = (e) => {
    let { experiments: t, dispatch: i, handlePlay: a } = this.props;
    a(e),
      t.keep_srwm_toolbar_upon_play?.segment !== "on" && this.hide(),
      t.keep_srwm_toolbar_upon_play?.status === "pending" &&
        i("experiments/activate", {
          experimentName: "keep_srwm_toolbar_upon_play",
        });
  };
  componentWillUnmount() {
    clearTimeout(this.overflowTimer);
  }
  componentDidUpdate(e) {
    let {
      usedDrums: t,
      fingeringsOnActivate: i,
      playAlongAdOpened: a,
    } = this.props;
    t || this.state.minimized || i(),
      e.playAlongAdOpened || !a || this.state.minimized || this.hide();
  }
  constructor(e) {
    super(e), (this.state = { minimized: !1, overflowVisible: !0 });
  }
  render() {
    let {
        device: e,
        layer: i,
        shouldPlay: s,
        canPlay: n,
        pitchShift: l,
        pitchShiftAvailable: r,
        speed: o,
        fingeringsStatus: u,
        fingeringsActive: p,
        fingeringsEnabled: c,
        videoIsOpened: d,
        usedDrums: h,
        metronomeType: m,
        toolsHidden: f,
        print: y,
      } = this.props,
      { minimized: v, overflowVisible: g } = this.state,
      x = "speed" === i,
      b = "pitchshift" === i && !d,
      w = "Loading" === u,
      k = c && !h,
      N = "solo" === this.props.type && !d,
      $ = "mute" === this.props.type && !d,
      M = this.props.speed !== ee || x,
      S = this.props.loop,
      B = this.props.isCountin && !d,
      P = (0 !== l || b) && !d,
      T = this.props.isMetronome && !d,
      j = !this.props.plusAccess,
      L = !this.props.plusAccess,
      z = C(e.os) || F(e.os),
      q = { height: `${471 + 57 * (r ? 1 : 0) + 57 * (k ? 1 : 0)}px` },
      E = a7.features;
    v ? (q.height = "71px") : g && (E = a7.featuresActive);
    let A = `${Math.round(o)}%`,
      D = true ? a7.plusControls : a7.controls;
    return t(
      "footer",
      { className: D, "data-controls": "tablature" },
      t("svg", { width: 0, height: 0 }, t("defs", null, t(eG, {}), t(eH, {}))),
      t(
        "div",
        { className: a7.alt, id: "alt-controls" },
        t(eI, {
          shouldPlay: s,
          canPlay: n,
          onClick: this.props.handlePlay,
          title: "Play",
          hideDefs: !0,
        })
      ),
      t(
        "div",
        { className: a7.float, id: "mobile-controls" },
        !0 !== f &&
          t(
            a,
            null,
            t(
              "div",
              { className: E, style: q },
              t(
                "div",
                { className: a7.minimize },
                t(e_, {
                  mobile: !0,
                  icon: v ? "arrow" : "arrow-down",
                  pressed: !1,
                  onClick: this.minimizeClick,
                  title: "Minimize",
                  titlePressed: "Minimize",
                })
              ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  mobile: !0,
                  icon: "speed",
                  text: A,
                  pressed: M,
                  onClick: this.props.handleSpeed,
                  title: "Change playback speed",
                  hasPopup: j,
                  lock: L,
                }),
                t(
                  R,
                  null,
                  "plus_speed" === i &&
                    t(
                      G,
                      a8,
                      z
                        ? t(tB, {
                            title: "Tempo Control",
                            device: e,
                            mobile: !0,
                            low: !0,
                            feature: "slowdown",
                          })
                        : t(eR, {
                            title: "Tempo Control",
                            classPrefix: "speed",
                          })
                    ),
                  x && t(G, { ...a8, key: "layer" }, t(aH, null))
                )
              ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  mobile: !0,
                  icon: "loop",
                  pressed: S,
                  onClick: this.props.handleLoop,
                  title: "Turn loop mode on",
                  titlePressed: "Turn loop mode off",
                  hasPopup: j,
                  lock: L,
                }),
                t(
                  R,
                  null,
                  "plus_loop" === i &&
                    t(
                      G,
                      a8,
                      z
                        ? t(tB, {
                            title: "Loop Mode",
                            device: e,
                            mobile: !0,
                            low: !0,
                            feature: "loop",
                          })
                        : t(eR, { title: "Loop Mode", classPrefix: "loop" })
                    )
                )
              ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  mobile: !0,
                  icon: "solo",
                  pressed: N,
                  disabled: d,
                  onClick: this.props.handleSolo,
                  title: "Play the current track solo",
                  titlePressed: "Play the focus mix of all tracks",
                  hasPopup: j,
                  lock: L,
                }),
                t(
                  R,
                  null,
                  "plus_solo" === i &&
                    !d &&
                    t(
                      G,
                      a8,
                      z
                        ? t(tB, {
                            title: "Solo Mode",
                            device: e,
                            mobile: !0,
                            low: !0,
                            feature: "solo",
                          })
                        : t(eR, { title: "Solo Mode", classPrefix: "solo" })
                    ),
                  "solo_single" === i &&
                    !d &&
                    t(G, a8, t(t_, { title: "Solo", horizontal: !0 }))
                )
              ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  mobile: !0,
                  icon: "mute",
                  pressed: $,
                  disabled: d,
                  onClick: this.props.handleMute,
                  title: "Mute current track (M)",
                  titlePressed: "Unmute current track (M)",
                  hasPopup: j,
                  lock: L,
                }),
                t(
                  R,
                  null,
                  "plus_mute" === i &&
                    !d &&
                    t(
                      G,
                      a8,
                      z
                        ? t(tB, {
                            title: "Mute Mode",
                            device: e,
                            mobile: !0,
                            feature: "mute",
                          })
                        : t(eR, { title: "Mute Mode", classPrefix: "mute" })
                    )
                )
              ),
              k &&
                t(
                  "div",
                  { className: a7.item },
                  t(e_, {
                    key: `fingerings ${w} ${p}`,
                    loading: w,
                    icon: "fingerings",
                    pressed: p,
                    onClick: this.props.handleFingerings,
                    title: "Generate guitar fingerings (G)",
                    titlePressed: "Turn fingerings off (G)",
                  }),
                  t(
                    R,
                    null,
                    p && "Loading" !== u && t(G, a8, t(iR, { status: u }))
                  )
                ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  mobile: !0,
                  icon: "countin",
                  pressed: B,
                  disabled: d,
                  onClick: this.props.handleCountin,
                  title: "Turn count-in mode on (C)",
                  titlePressed: "Turn count-in mode off (C)",
                })
              ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  icon: "voice" === m ? "voice" : "metronome",
                  pressed: T,
                  disabled: d,
                  onClick: this.props.handleMetronome,
                  title: "Turn metronome on (N)",
                  titlePressed: "Turn metronome off (N)",
                }),
                t(
                  R,
                  null,
                  "metronome" === i &&
                    !d &&
                    t(G, { ...a8, key: "layer" }, t(iX, null))
                )
              ),
              r &&
                t(
                  "div",
                  { className: a7.item },
                  0 !== l &&
                    t(
                      "div",
                      { className: a7.tuningValue },
                      `${l > 0 ? "+" : ""}${l}`
                    ),
                  t(e_, {
                    key: `tuning ${d} ${P}`,
                    mobile: !0,
                    icon: "tuning",
                    pressed: P,
                    disabled: d,
                    onClick: this.props.handlePitchshift,
                    title: "Pitch Shift on",
                    titlePressed: "Pitch Shift off",
                    hasPopup: j,
                    lock: L,
                  }),
                  t(
                    R,
                    null,
                    "plus_pitchshift" === i &&
                      !d &&
                      t(
                        G,
                        a8,
                        z
                          ? t(tB, {
                              title: "Pitch Shift",
                              device: e,
                              mobile: !0,
                              feature: "pitch shift",
                            })
                          : t(eR, {
                              title: "Pitch Shift",
                              classPrefix: "pitch",
                            })
                      ),
                    b && t(G, { ...a8, key: "layer" }, t(aT, { mobile: !0 }))
                  )
                ),
              t(
                "div",
                { className: a7.item },
                t(e_, {
                  key: "print",
                  icon: "print",
                  disabled: d,
                  onClick: this.props.handlePrint,
                  title: "Print (P)",
                  pressed: V(y),
                  lock: L,
                }),
                t(
                  R,
                  null,
                  "plus_print" === i &&
                    t(
                      G,
                      a8,
                      t(eR, {
                        title: "Printing",
                        horizontal: !0,
                        classPrefix: "print",
                      })
                    ),
                  "print" === i && t(G, { ...a8, key: "layer" }, t(an, null))
                )
              )
            )
          ),
        t(
          "div",
          { className: a7.play },
          t(eI, {
            onClick: this.playClick,
            title: "Play",
            titlePressed: "Pause",
            shouldPlay: s,
            canPlay: n,
            hideDefs: !0,
          })
        )
      )
    );
  }
}
var a9 = c(a6, "print", "experiments");
let se = "Bvj22a",
  st = ei + " Bvj1o9",
  si = "Bvj1b4",
  sa = { main: "Bvj22a", showroom: ei + " Bvj1o9", banner: "Bvj1b4" },
  ss = l(() => {
    let e = s(),
      { device: i, ads: a } = N("device", "ads", "route", "consent"),
      { alt: n, link: l, image: r } = ea(i);
    return t(
      "section",
      {
        id: "showroom_bottom",
        className: sa.main,
        key: "showroom-bottom",
        ref: e,
      },
      t(
        "div",
        { className: sa.showroom, id: "Redesign_BTF_tab_page_320x50" },
        a.notsyFailed &&
          t(
            "a",
            { className: sa.link, href: l, target: "_blank" },
            t("img", { src: r, className: sa.banner, alt: n })
          )
      )
    );
  }),
  sn = "C351",
  sl = { text: "C351" };
function sr(e) {
  let { text: t, layout: i, xoffset: a } = e,
    s = t.layer;
  if (s) {
    let e = i ? s.x1 - i.absoluteX : s.x1,
      n = -1 * s.y;
    return r("text", {
      className: sl.text,
      x: e + a,
      y: n,
      dy: "-0.25em",
      children: t.text,
    });
  }
  return null;
}
let so =
    "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
  su =
    "M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  sp = "c1.25-.25 2.75-2.25 3-2.75h1z",
  sc =
    "c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  sd =
    "M4.15-2C3.4-.26.69-.55 1.42-2.2c.73-1.66 3.56-1.52 2.74.21ZM6.1-17H4.9v12.9c-.34-.25-.9-.36-1.48-.33C1.29-4.30-.56-2.3.1-.83.5.08 1.66.37 2.83.1A4.12 4.12 0 0 0 4.9-1.1S6-2 6-3.7L6.1-17Z",
  sh = "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
  sm =
    "M6-3.7C6-2 4.9-1.1 4.9-1.1 3.42.5.76.65.1-.83-.56-2.3 1.3-4.3 3.42-4.43c.57-.03 1.09.08 1.48.33V-17h1.2L6-3.7Zm.06-13.29c.36 2.88 1.55 3.33 3 5.2.75.94 1.18 2.1 1.22 3.3 0 1.18-.49 2.6-1.48 4.27h-.28c.85-1.82 1.33-3.14 1.22-4.28-.23-2.57-2.61-3.9-3.69-3.9L5.62-17l.44.01Z",
  sf = `${su}${sp}`,
  sy = `${su}${sc}${sp}`,
  sv = `${su}${sc}${sc}${sp}`,
  sg = `${su}${sc}${sc}${sc}${sp}`,
  sx = `${su}${sc}${sc}${sc}${sc}${sp}`,
  sb = "M0-4l9 8m0-8l-9 8",
  sC = "M-2-7l6.5-4l6.5 4",
  sw = "M-2-7h8l5 -5",
  sk = "M0 3l4.7-7 4.7 7z",
  sN = "M5-4.5l5 4-5 4-5-4 5-4z",
  s$ = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
  sM = `${s$}${sb}`,
  sS = `${s$}M9-4L0 4`,
  sB =
    "M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
  sP = `${sB}M-3-6L12 5`,
  sT = "M-4 0l16 0";
function sj(e) {
  let t = e.line.layout.intervalSize,
    i = e.line.strings,
    a = (i <= 4 ? t : 0) - 2 * (t - 12),
    s = 0 !== a ? `translate(0, ${-a})` : void 0,
    n = [
      r("ellipse", { id: "dot", cx: 10, cy: 17.5 - a, rx: 1.5, ry: 1.5 }),
      r("rect", { id: "rest1", y: 24 - a, x: -6, width: 12, height: 6 }),
      r("rect", { id: "rest2", y: 18 - a, x: -6, width: 12, height: 6 }),
      r("path", {
        id: "rest4",
        transform: s,
        d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
      }),
      r("path", { id: "rest8", transform: s, d: sf }),
      r("path", { id: "rest16", transform: s, d: sy }),
      r("path", { id: "rest32", transform: s, d: sv }),
      r("path", { id: "rest64", transform: s, d: sg }),
      r("path", { id: "rest128", transform: s, d: sx }),
      r("path", {
        id: "tempo2",
        d: "M4.15-2C3.4-.26.69-.55 1.42-2.2c.73-1.66 3.56-1.52 2.74.21ZM6.1-17H4.9v12.9c-.34-.25-.9-.36-1.48-.33C1.29-4.30-.56-2.3.1-.83.5.08 1.66.37 2.83.1A4.12 4.12 0 0 0 4.9-1.1S6-2 6-3.7L6.1-17Z",
      }),
      r("path", {
        id: "tempo4",
        d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
      }),
      r("path", {
        id: "tempo8",
        d: "M6-3.7C6-2 4.9-1.1 4.9-1.1 3.42.5.76.65.1-.83-.56-2.3 1.3-4.3 3.42-4.43c.57-.03 1.09.08 1.48.33V-17h1.2L6-3.7Zm.06-13.29c.36 2.88 1.55 3.33 3 5.2.75.94 1.18 2.1 1.22 3.3 0 1.18-.49 2.6-1.48 4.27h-.28c.85-1.82 1.33-3.14 1.22-4.28-.23-2.57-2.61-3.9-3.69-3.9L5.62-17l.44.01Z",
      }),
      r("ellipse", { id: "tempoDot", cx: 9, cy: -2 - a, rx: 1.5, ry: 1.5 }),
    ],
    l = !this.props.part.usedDrums;
  return r("defs", {
    children: l
      ? n
      : [
          ...n,
          r("path", { id: "drumCross", d: sb }),
          r("path", {
            id: "drumHat",
            d: "M-2-7l6.5-4l6.5 4",
            style: "fill: none",
          }),
          r("path", {
            id: "drumHatEdge",
            d: "M-2-7h8l5 -5",
            style: "fill: none",
          }),
          r("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
          r("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
          r("path", { id: "drumCircleCross", d: sM, style: "fill: none" }),
          r("path", { id: "drumCircleStroke", d: sS, style: "fill: none" }),
          r("path", { id: "drum", d: sB }),
          r("path", { id: "drumStroke", d: sP }),
          r("path", { id: "extraLine", d: "M-4 0l16 0" }),
        ],
  });
}
let sL = "bh1o4",
  sz = "bh162",
  sq = "bh162 bhth",
  sE = { text: "bh1o4", line: "bh162", dotted: "bh162 bhth" },
  sA = 46;
function sD(e) {
  let { layer: t } = e,
    { x1: i, x2: s, y: n } = t,
    l = s - i,
    o = -1 * n - 2,
    u = [
      r(
        "text",
        { className: sE.text, x: i, y: o, children: "let ring" },
        "let ring"
      ),
    ];
  return (
    l > 46 &&
      (u.push(
        r(
          "line",
          {
            className: sE.dotted,
            x1: 46 + i,
            y1: -3 + o,
            x2: l - 2 + i,
            y2: -3 + o,
          },
          "dotted"
        )
      ),
      u.push(
        r(
          "line",
          { className: sE.line, x1: l + i, y1: 1 + o, x2: l + i, y2: -7 + o },
          "line"
        )
      )),
    r(a, { children: u })
  );
}
let sF = "C4a2yy",
  sI = "C4a2ve",
  s_ = "C4a2ve C4a1op",
  sR = { text: "C4a2yy", line: "C4a2ve", dotted: "C4a2ve C4a1op" },
  sG = 35;
function sH(e) {
  let { layer: i } = e,
    { x1: s, x2: n, y: l } = i,
    r = -1 * l - 2,
    o = n - s,
    u = [t("text", { className: sR.text, x: s, y: r, key: "pm" }, "P. M.")];
  return (
    o > 35 &&
      (u.push(
        t("line", {
          className: sR.dotted,
          x1: 35 + s,
          y1: -3 + r,
          x2: o - 2 + s,
          y2: -3 + r,
          key: "dotted",
        })
      ),
      u.push(
        t("line", {
          className: sR.line,
          x1: o + s,
          y1: 1 + r,
          x2: o + s,
          y2: -7 + r,
          key: "line",
        })
      )),
    t(a, null, u)
  );
}
let sV = "q71wu",
  sU = "q72a",
  sW = "q72a q712i",
  sO = { text: "q71wu", line: "q72a", dotted: "q72a q712i" },
  sZ = 40;
function sJ(e) {
  let { layer: t, effectValue: i } = e,
    { x1: s, x2: n, y: l } = t,
    o = n - s,
    u = -1 * l - 2,
    p = "Harm.";
  switch (i) {
    case "artificial":
      p = "A. H.";
      break;
    case "semi":
      p = "S. H.";
      break;
    case "tapped":
      p = "T. H.";
      break;
    case "pinch":
      p = "P. H.";
  }
  let c = [r("text", { className: sO.text, x: s, y: u, children: p }, "Harm.")];
  return (
    o > 40 &&
      (c.push(
        r(
          "line",
          {
            className: sO.dotted,
            x1: 40 + s,
            y1: -3 + u,
            x2: o - 2 + s,
            y2: -3 + u,
          },
          "dotted"
        )
      ),
      c.push(
        r(
          "line",
          { className: sO.line, x1: o + s, y1: 1 + u, x2: o + s, y2: -7 + u },
          "line"
        )
      )),
    r(a, { children: c })
  );
}
let sX = "C0x28",
  sK = { path: "C0x28" },
  sY = 5.5,
  sQ = 14,
  s1 = 2,
  s2 = 3;
function s0(e, t, i, a) {
  let s = `M${t} ${i + 4}l3-3.5`,
    n = `v${a ? 2 : 1}.8l-3 3.5`;
  for (let t = 0; t < e; t++)
    (s += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
      (n += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
  return s + n + "z";
}
function s5(e) {
  let { layer: t, wide: i } = e,
    { x1: a, x2: s, y: n } = t,
    l = s - a,
    o = s0(l > 14 ? Math.floor((l - 3) / 5.5) : 2, a, -(n + 6), i);
  return r("path", { className: sK.path, d: o });
}
class s3 extends e {
  renderEffect = (e, i) => {
    let a = {
      layer: e.layer,
      key: `${e.effect}-${this.props.line.index}-${i}`,
      line: this.props.line,
      effectValue: e.effectValue,
    };
    switch (e.effect) {
      case "letRing":
        return t(sD, a);
      case "palmMute":
        return t(sH, a);
      case "harmonic":
        return t(sJ, a);
      case "vibrato":
        return t(s5, { ...a, wide: !1 });
      case "wideVibrato":
        return t(s5, { ...a, wide: !0 });
      default:
        return null;
    }
  };
  render() {
    return t(a, null, this.props.line.effects.map(this.renderEffect));
  }
}
function s4(e, t) {
  return () => e;
}
let s7 = (e) => s4(0);
function s8(e) {
  let { note: t, beat: i, part: s, x: n, edited: l, platform: o } = e,
    { intervalSize: u } = i.layout.measureLayout.lineLayout;
  if (!es(t) && (!l || (l && t.bogus))) return null;
  let p = `translate(${n}, 0)`;
  if (i.rest) {
    if (i.layout.usedStrings || (0 !== i.voice && i.layout.usedRest))
      return null;
    let e = en[`rest${i.voice}`],
      t = r(
        "use",
        { className: e, xlinkHref: `#rest${i.type}`, transform: p },
        "rest"
      );
    if (i.dotted) {
      let i = r(
        "use",
        { className: e, xlinkHref: "#dot", transform: p },
        "dot"
      );
      return r(a, { children: [t, i] });
    }
    return t;
  }
  if (s.usedDrums && s.isDrumStdOn) {
    let e = en[`drums${i.voice}`],
      s = `translate(${n}, ${0.5 + u * t.string})`,
      l = t.orientation ? s : s + " translate(-10, 0)";
    return r(a, {
      children: [
        (t.string <= -1 || t.string >= 5) &&
          r(el, {
            noteString: t.string,
            className: er.strings,
            noteTransform: l,
            intervalSize: u,
          }),
        1 !== i.type &&
          r("path", {
            className: en[`stick${i.voice}`],
            transform: s,
            d: eo(t.fret, t.string, u),
          }),
        (t.tie || t.ghost) &&
          r("text", { x: n - 6, y: u * t.string + s7()(o) + 5 }, "("),
        r(eu, { fret: t.fret, className: e, transform: l }),
        (t.tie || t.ghost) &&
          r("text", { x: n + 11, y: u * t.string + s7()(o) + 5 }, ")"),
      ],
    });
  }
  let c = "",
    d = 0,
    h = s.usedDrums;
  if (h) {
    let e = s.usedDrums.get(t.fret);
    e && ((c = e.name || "*"), (d = e.string || 0));
  } else (c = t.dead ? "X" : t.fret.toString()), (d = t.string);
  let m = en[`${h ? "vDrum" : "voice"}${i.voice}`];
  l && (m = `${m} ${en.edited}`);
  let f = {
      className: m,
      x: n,
      y: u * d + s7()(o),
      children: t.tie || t.ghost ? `(${c})` : c,
      style: {},
    },
    y = r("text", f, "text");
  if (t.harmonic) {
    let e = r(
      "path",
      {
        className: en.harmonic,
        transform: `translate(${n - 17}, ${-3.5 + u * d} )`,
        d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
      },
      "harmonic"
    );
    return r(a, { children: [e, y] });
  }
  return y;
}
let s6 = "B642k5",
  s9 = { slur: "B642k5" };
function ne(e, t, i, a, s, n) {
  let l = t ? ed(t, eh) : 0,
    r = s - l - (i ? ed(i, eh) : 0),
    o = Math.min(Math.floor(r / 3), 10),
    u = Math.max(n - 4, 3),
    p = u - 1;
  return `M${l + e} ${n * a - 7}c${o}-${u} ${r - o}-${u} ${r} 0c-${o}-${p}-${
    r - o
  }-${p}-${r} 0z`;
}
function nt(e) {
  let { x: t, start: i, end: a, slicingMode: s } = e;
  if (a) {
    let e = ep(a).beat,
      i = ec(a).beat,
      n = ec(a).note;
    if (i.layout && e.layout) {
      let a = s.getTieSlurPathLength(e, i, !0),
        { intervalSize: l } = e.layout.measureLayout.lineLayout;
      return r("path", {
        className: s9.slur,
        d: ne(t - a, null, n, n.string, a, l),
      });
    }
  } else if (i) {
    let e = ep(i).beat,
      a = ec(i).beat,
      n = ep(i).note,
      l = ec(i).note;
    if (a.layout && e.layout) {
      let i = s.areBeatsInSameSlice(e, a),
        o = s.getTieSlurPathLength(e, a, !1),
        { intervalSize: u } = e.layout.measureLayout.lineLayout;
      return r("path", {
        className: s9.slur,
        d: ne(t, n, i ? l : null, n.string, o, u),
      });
    }
  }
  return null;
}
let ni = "Bbl9p",
  na = { tie: "Bbl9p" };
function ns(e, t, i, a, s, n) {
  let l = t ? ed(t, em) : 0,
    r = s - l - (i ? ed(i, em) : 0),
    o = Math.min(Math.floor(r / 3), 10),
    u = Math.max(n - 5, 3),
    p = u - 1;
  return `M${l + e} ${n * a + 7}c${o} ${u} ${r - o} ${u} ${r} 0c-${o} ${p}-${
    r - o
  } ${p}-${r} 0z`;
}
function nn(e) {
  let { x: t, start: i, end: a, slicingMode: s } = e;
  if (a) {
    let e = ep(a).beat,
      i = ec(a).beat,
      n = ec(a).note;
    if (i.layout && e.layout) {
      let a = s.getTieSlurPathLength(e, i, !0),
        l = n.string,
        { intervalSize: o } = e.layout.measureLayout.lineLayout;
      return r("path", { className: na.tie, d: ns(t - a, null, n, l, a, o) });
    }
  }
  if (i) {
    let e = ep(i).beat,
      a = ec(i).beat,
      n = ep(i).note,
      l = ec(i).note;
    if (a.layout && e.layout) {
      let i = s.areBeatsInSameSlice(e, a),
        o = s.getTieSlurPathLength(e, a, !1),
        { intervalSize: u } = e.layout.measureLayout.lineLayout,
        p = n.string;
      return r("path", {
        className: na.tie,
        d: ns(t, n, i ? l : null, p, o, u),
      });
    }
  }
  return null;
}
function nl(e, t) {
  if ((e.x1 === e.x2 && e.y1 === e.y2) || (t.x1 === t.x2 && t.y1 === t.y2))
    return null;
  let i = (t.y2 - t.y1) * (e.x2 - e.x1) - (t.x2 - t.x1) * (e.y2 - e.y1);
  if (0 === i) return null;
  let a = ((t.x2 - t.x1) * (e.y1 - t.y1) - (t.y2 - t.y1) * (e.x1 - t.x1)) / i,
    s = ((e.x2 - e.x1) * (e.y1 - t.y1) - (e.y2 - e.y1) * (e.x1 - t.x1)) / i;
  if (a < 0 || a > 1 || s < 0 || s > 1) return null;
  let n = e.x1 + a * (e.x2 - e.x1),
    l = e.y1 + a * (e.y2 - e.y1);
  return { x: n, y: l };
}
function nr(e, t, i) {
  let a = nl(e, { x1: t, y1: 1e3, x2: t, y2: -1e3 }),
    s = nl(e, { x1: i, y1: 1e3, x2: i, y2: -1e3 });
  return {
    x1: a ? a.x : e.x1,
    y1: a ? a.y : e.y1,
    x2: s ? s.x : e.x2,
    y2: s ? s.y : e.y2,
  };
}
let no = "zy1tz",
  nu = { slide: "zy1tz" };
function np(e) {
  let { x: t, cfx: i, note: a } = e,
    { intervalSize: s } = a.beat.layout.measureLayout.lineLayout,
    n = ep(i).beat,
    l = ec(i).beat;
  if (!l.layout || !n.layout) return null;
  let o = ep(i).note,
    u = ec(i).note,
    p = o.string,
    c = o.fret >= u.fret ? -2 : 2,
    d = ef(n, a.beat),
    h = ef(n, n),
    m = ef(n, l),
    f = {
      x1: t + h - d + ed(o, ey),
      y1: s * p + c,
      x2: t + m - d - ed(u, ey),
      y2: s * p - c,
    },
    y = nr(f, eg(a.beat.layout), ev(a.beat.layout));
  return r("line", { className: nu.slide, ...y });
}
let nc = "Bxm1ag",
  nd = { arrow: "Bxm1ag" };
function nh(e) {
  let { x: t, y: i, up: a } = e;
  return r("path", {
    className: nd.arrow,
    d: `M ${t},${i} l 2,${a ? 5 : -5} -4,0 2,${a ? -5 : 5}`,
  });
}
let nm = "C9k1hh",
  nf = "C9k17",
  ny = { up: "C9k1hh", down: "C9k17" },
  nv = ["\xbc", "\xbd", "\xbe"],
  ng = s4(4),
  nx = s4(11);
function nb(e) {
  if (100 === e) return "full";
  if (e) {
    let t = "",
      i = Math.floor(e / 100);
    i && (t += i);
    let a = e % 100;
    return a >= 25 && (t += nv[Math.floor(a / 25) - 1]), t;
  }
  return "";
}
function nC(e) {
  let { x: t, y: i, up: a, tone: s, platform: n } = e;
  return r("text", {
    className: a ? ny.up : ny.down,
    x: t,
    y: a ? i - ng(n) : i + nx(n),
    children: nb(s),
  });
}
let nw = "Cs020",
  nk = "Cs04d",
  nN = "Cs04d Cs0dp",
  n$ = { prebend: "Cs020", path: "Cs04d", hold: "Cs04d Cs0dp" };
function nM(e, t, i, a, s, n) {
  return [
    r(
      "line",
      { className: n$.prebend, x1: i, y1: a + eC, x2: i, y2: s },
      `prebend-${e}`
    ),
    r(nh, { x: i, y: s, up: !0 }, `arrow-${e}`),
    r(nC, { tone: t, x: i, y: s, up: !0, platform: n }, `y-${e}`),
  ];
}
function nS(e, t, i, a, s, n) {
  return t <= 0
    ? null
    : [
        r(
          "line",
          { className: n$.hold, x1: i, y1: a, x2: s, y2: n },
          `hold-${e}`
        ),
      ];
}
function nB(e, t) {
  if (!e) return !1;
  let i = ep(e).note,
    a = i.bend;
  if (!a) return !1;
  let s = a.points,
    n = s.length;
  return !(n < 1) && s[n - 1].tone === t;
}
function nP(e) {
  if (!e) return !1;
  let t = ep(e).note,
    i = t.bend;
  if (!i) return !1;
  let a = i.points,
    s = a.length;
  if (s < 2) return !1;
  let n = a[s - 2].tone,
    l = a[s - 1].tone;
  return l === n;
}
function nT(e, t, i, a, s, n, l, o, u, p) {
  let c = u < l,
    d = t.prevNoteOnString,
    h = d && !!d.bendEnd,
    m = d && (!!d.bendStart || !!d.bendPart || !!d.bendEnd),
    f = d && nP(d.bendEnd) && nB(d.bendEnd, 0),
    y = t.tie && h && !f && nB(d.bendEnd, i) && 0 !== i,
    v = s !== n || 0 !== i || (y && m) ? 0 : ed(t, eb),
    g = [
      r(
        "path",
        {
          className: n$.path,
          d: `M${n + v},${l}Q${o},${l} ${o},${c ? u + 4 : u - 4}`,
        },
        `bend-${e}`
      ),
      r(nh, { x: o, y: u, up: c }, `arrow-${e}`),
    ];
  return (
    0 !== a &&
      g.push(r(nC, { tone: a, x: o, y: u, up: c, platform: p }, `y-${e}`)),
    g
  );
}
function nj(e, t, i, a, s) {
  return {
    elements: t ? [...e.elements, t] : e.elements,
    prevTone: i,
    prevX: a,
    prevY: s,
  };
}
function nL(e, t, i, a, s) {
  let n = ex + a * e.string;
  return function (a, l, r) {
    let { tone: o, position: u } = l,
      p = 0 === o ? n : ex - o / ew;
    if (0 === r) {
      if (!e.tie && 0 !== o) {
        let e = nM(r, o, t, n, p, s);
        return nj(a, e, o, t, p);
      }
      return nj(a, null, o, t, 0 !== o ? p : n);
    }
    let { prevTone: c, prevX: d, prevY: h } = a,
      m = (i * u) / 60 + t;
    if (o === c) {
      let e = nS(r, o, d, p, m, p);
      return nj(a, e, o, m, p);
    }
    let f = nT(r, e, c, o, t, d, h, m, p, s);
    return nj(a, f, o, m, p);
  };
}
function nz(e) {
  let { cfx: t, note: i, slicingMode: s, x: n, platform: l } = e,
    o = ep(t).note,
    u = o.bend;
  if (!u) return null;
  let { x1: p, x2: c } = s.getBendCoordinates(t, i),
    d = i.beat.layout.measureLayout.lineLayout.intervalSize,
    { elements: h } = u.points.reduce(nL(o, p + n, c - p, d, l), {
      elements: [],
      prevTone: 0,
      prevX: 0,
      prevY: 0,
    });
  return r(a, { children: h });
}
let nq = "ls209",
  nE = { lyrics: "ls209" };
function nA(e) {
  let { lyrics: t, x: i } = e,
    a = t.layer;
  if (a) {
    let e = ek(t) + i + a.diff;
    return r("text", {
      className: nE.lyrics,
      x: e,
      y: a.y + a.height,
      children: t.text,
    });
  }
  return null;
}
let nD = 15;
function nF(e) {
  let { note: t, x: i, type: a } = e,
    { intervalSize: s } = t.beat.layout.measureLayout.lineLayout,
    n = t.string,
    l = "left" === a ? -1 : 1,
    o = "upwards" === t.rightSlide ? 1 : -1;
  "left" === a && (o = "above" === t.leftSlide ? 1 : -1);
  let u = ed(t, ey);
  return r("line", {
    className: nu.slide,
    x1: l * u + i,
    y1: s * n + 2 * o,
    x2: l * (u + 15) + i,
    y2: s * n - 2 * o,
  });
}
let nI = "Cge206",
  n_ = "Cgen4",
  nR = "Cge2e0",
  nG = { note: "Cge206", correction: "Cgen4", background: "Cge2e0" };
function nH(e) {
  let { fret: t, x: i, string: s, originalFret: n, intervalSize: l } = e;
  if ("" === n) {
    let e = t.length >= 2 ? 11.5 : 7.5;
    return r(a, {
      children: [
        r("line", {
          className: nG.background,
          x1: i - e,
          y1: l * s,
          x2: i + e,
          y2: l * s,
        }),
        r("text", {
          className: nG.note,
          x: i,
          y: l * s,
          children: t,
          "data-fret": t,
        }),
      ],
    });
  }
  let o = 10;
  return (
    t.length >= 2 && (o += 3),
    n.length >= 2 && (o += 4),
    r(a, {
      children: [
        "" !== t &&
          r("text", {
            className: nG.note,
            x: i + o,
            y: l * s - 4,
            children: t,
            "data-fret": t,
          }),
        r("line", {
          className: nG.correction,
          x1: i - 4,
          y1: l * s - 7,
          x2: i + 4,
          y2: l * s + 4,
        }),
      ],
    })
  );
}
let nV = "B112ie",
  nU = "B11yc",
  nW = "B112vw",
  nO = "B11g5",
  nZ = "B112gh",
  nJ = "B111x2",
  nX = {
    index: "B112ie",
    middle: "B11yc",
    ring: "B112vw",
    pinky: "B11g5",
    thumb: "B112gh",
    text: "B111x2",
  },
  nK = 0,
  nY = 8,
  nQ = 12,
  n1 = [nX.index, nX.middle, nX.ring, nX.pinky];
function n2(e) {
  let { fingerL: i, string: a, x: s, fret: n } = e,
    l = n1[i - 1] || nX.index,
    r = 8;
  return (
    "number" == typeof n && Math.floor(n / 10) > 0 && (r = 12),
    t("circle", { className: l, cx: s + r, cy: eN * a + 0, r: 3 })
  );
}
let n0 = "ek2k6",
  n5 = "ek2wd",
  n3 = "ek188",
  n4 = "ek188 ekfs",
  n7 = "ek2i4",
  n8 = "ek2i4 ek2z7",
  n6 = "ek2zh",
  n9 = "ek2ic",
  le = "ekka",
  lt = "ek2wg",
  li = {
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
  la = 30,
  ls = 4;
function ln(e) {
  let { up: t, min: i, max: s, xoffset: n, intervalSize: l } = e,
    o = (s - i + 1) * l,
    u = t ? 4 : o - 4,
    p = t ? 0 : o,
    c = (i - 0.5) * l,
    d = n - 15;
  return r(a, {
    children: [
      r(
        "line",
        {
          className: li.arrowLine,
          x1: 4 + d,
          y1: c,
          x2: 4 + d,
          y2: (s + 0.5) * l,
        },
        "line"
      ),
      r(
        "polygon",
        {
          className: li.arrowPolygon,
          points: `${4 + d},${p + c} ${0 + d},${u + c} ${8 + d},${u + c} ${
            4 + d
          },${p + c}`,
        },
        "polygon"
      ),
    ],
  });
}
function ll(e) {
  let t = [],
    {
      layout: i,
      part: s,
      measure: n,
      slicingMode: l,
      measureEditorData: o,
      measureFingerings: u,
      platform: p,
      x: c,
    } = e,
    d = c + i.x;
  for (let e of i.beats)
    if (e.lyrics)
      for (let i of e.lyrics)
        t.push(r(nA, { lyrics: i, x: d }, `lyrics${e.index}`));
    else {
      e.text &&
        t.push(
          r(sr, { text: e.text, layout: i, xoffset: d }, `text${e.index}`)
        );
      let a = e.tappingWithLayer;
      a &&
        a.layer &&
        t.push(
          r(
            "text",
            {
              className: li.tapping,
              y: -1 * a.layer.y,
              x: Math.max(-1 * Math.floor(a.width / 2) + d, -15),
              dy: "-0.25em",
              children: a.text,
            },
            `tap${e.index}`
          )
        );
      let c = e.chord;
      c &&
        c.layer &&
        t.push(
          r(
            "text",
            {
              className: li.chord,
              y: -1 * c.layer.y,
              x: Math.max(-1 * Math.floor(c.width / 2) + d, -15),
              dy: "-0.25em",
              children: c.text,
            },
            `chord${e.index}`
          )
        );
      let h = Number.MAX_VALUE,
        m = 0;
      if (!n.rest) {
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
            r(
              "path",
              { className: li.hat, d: `M${d - 2}${-e.hat.layer.y}h8l5 -5` },
              `hat${e.index}`
            )
          );
        let a =
            o && o.find((t) => t.beatNum === e.index && t.voice === e.voice),
          c = a && a.editedNotes;
        for (let i of (e.staccato &&
          e.staccato.layer.visible &&
          t.push(
            r(
              "circle",
              {
                className: e.staccato.layer.voice
                  ? li.staccatoSecondVoice
                  : li.staccato,
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
            r(
              "path",
              {
                className: e.accentuated.layer.voice
                  ? li.accentuatedSecondVoice
                  : li.accentuated,
                d: `m${d - 5}${-e.accentuated.layer.y - 2}l9-3l-9-3`,
              },
              `acc${e.index}`
            )
          ),
        e.heavyAccentuated &&
          e.heavyAccentuated.layer.visible &&
          t.push(
            r(
              "path",
              {
                className: e.heavyAccentuated.layer.voice
                  ? li.accentuatedSecondVoice
                  : li.accentuated,
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
            ((h = Math.min(h, i.string)), (m = Math.max(m, i.string))),
            t.push(
              r(
                s8,
                {
                  note: i,
                  beat: e,
                  part: s,
                  x: d,
                  platform: p,
                  edited: c && !!c.find((e) => e.string === i.string),
                },
                `note${e.index}-${i.index}-voice${e.voice}`
              )
            ),
            i.tieStart &&
              !n.equality &&
              t.push(
                r(
                  nn,
                  { start: i.tieStart, slicingMode: l, x: d },
                  `tie${e.index}-${i.index}`
                )
              ),
            i.tieEnd &&
              e$(i.tieEnd) &&
              t.push(
                r(
                  nn,
                  { end: i.tieEnd, slicingMode: l, x: d },
                  `tieEnd${e.index}-${i.index}`
                )
              ),
            i.slurStart &&
              !n.equality &&
              t.push(
                r(
                  nt,
                  { start: i.slurStart, slicingMode: l, x: d },
                  `slur${e.index}-${i.index}`
                )
              ),
            i.slurEnd &&
              e$(i.slurEnd) &&
              t.push(
                r(
                  nt,
                  { end: i.slurEnd, slicingMode: l, x: d },
                  `slurEnd${e.index}-${i.index}`
                )
              ),
            i.leftSlide &&
              t.push(
                r(nF, {
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
                r(nF, {
                  note: i,
                  type: "right",
                  key: `slideShortRight${e.index}-${i.index}`,
                  x: d,
                })
              ),
            i.slideStart &&
              t.push(
                r(
                  np,
                  { note: i, cfx: i.slideStart, x: d },
                  `slide${e.index}-${i.index}`
                )
              ),
            i.slideEnd &&
              e$(i.slideEnd) &&
              t.push(
                r(
                  np,
                  { note: i, cfx: i.slideEnd, x: d },
                  `slideEnd${e.index}-${i.index}`
                )
              );
          let a = l.bendsForNote(i);
          for (let s = 0; s < a.length; s++) {
            let n = a[s];
            l.shouldDrawBendOnNote(n, i) &&
              t.push(
                r(
                  nz,
                  { cfx: n, note: i, slicingMode: l, x: d, platform: p },
                  `bend${e.index}-${i.index}-${s}`
                )
              );
          }
          let o = u?.find((t) => t.index === e.index),
            f = o?.fingerings.find((e) => e.string === i.string);
          f &&
            t.push(
              r(
                n2,
                { fingerL: f.fingerL, x: d, string: i.string, fret: i.fret },
                `finger${e.index}-${i.index}`
              )
            );
        }
        if (c) {
          let a = i.measureLayout.lineLayout.intervalSize;
          c.forEach((i) =>
            t.push(
              r(
                nH,
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
        if (!s.usedDrums && (e.upStroke || e.downStroke) && h < m) {
          let a = i.measureLayout.lineLayout.intervalSize;
          t.push(
            r(
              ln,
              { up: !!e.upStroke, min: h, max: m, xoffset: d, intervalSize: a },
              `stroke${e.index}`
            )
          );
        }
      }
    }
  return r(a, { children: t });
}
let lr = "rw256",
  lo = "rw2jc",
  lu = "rw33j",
  lp = { path: "rw256", text: "rw2jc", line: "rw33j" },
  lc =
    "M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
  ld =
    "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
  lh = "M37 27v-1h10v1zm0 3v-1h10v1z",
  lm = "M.8 0h15v3.5H.8z",
  lf = "M8.8 0h7v3.5h-7z",
  ly = "M51 7V4h9m7 0h9v3";
function lv(e) {
  let {
    tripletFeel: { feel: i, layer: a },
    x: s,
  } = e;
  if (!a) return null;
  let { y: n } = a,
    l = "off" === i,
    r = "16th" === i;
  return t(
    "g",
    { transform: `translate(${s},-${n + 42})` },
    t("path", { d: lc, transform: "translate(10,10)", className: lp.path }),
    t("path", { d: lc, transform: "translate(25,10)", className: lp.path }),
    t("path", { d: lm, transform: "translate(18,10)", className: lp.path }),
    r &&
      t("path", { d: lm, transform: "translate(18,15)", className: lp.path }),
    t("path", { d: lc, transform: "translate(48,10)", className: lp.path }),
    t("path", { d: lc, transform: "translate(63,10)", className: lp.path }),
    (l || r) &&
      t("path", { d: lm, transform: "translate(56,10)", className: lp.path }),
    r &&
      t("path", {
        d: "M8.8 0h7v3.5h-7z",
        transform: "translate(56,15)",
        className: lp.path,
      }),
    "8th" === i &&
      t("path", {
        d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
        transform: "translate(63,10)",
        className: lp.path,
      }),
    !l && t("text", { className: lp.text, x: 64, y: 0 }, 3),
    !l && t("path", { className: lp.line, d: "M51 7V4h9m7 0h9v3" }),
    t("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: lp.path })
  );
}
let lg = "Gy73",
  lx = "Gy2no",
  lb = "Gy8f",
  lC = "Gy1lf",
  lw = "Gy1fk",
  lk = "Gy1ax",
  lN = "Gy4w",
  l$ = "Gybj",
  lM = {
    voice0: "Gy73",
    voice1: "Gy2no",
    voice2: "Gy8f",
    voice3: "Gy1lf",
    "voice0-tremolo": "Gy1fk",
    "voice1-tremolo": "Gy1ax",
    "voice2-tremolo": "Gy4w",
    "voice3-tremolo": "Gybj",
  },
  lS = 4,
  lB = 8;
function lP(e) {
  let { voice: t, beats: i, x: s, y: n, tremoloOffset: l } = e;
  if (t.hasSameRhythm) return null;
  let o = eS + l,
    u = o / 2,
    p = "",
    c = "",
    d = 0,
    h = [],
    m = [, , , ,],
    f = !1,
    y = 0;
  for (let e of i) {
    let t = e.layout.x;
    1 !== e.type &&
      (p +=
        2 === e.type
          ? `M${s + t},${n + u + 2}v${u}`
          : `M${s + t},${n + 2}v${o}`);
    let a = 0,
      l = 8;
    if (
      (e.beamStart ? (f = !0) : e.beamStop && (f = !1), f && y < i.length - 1)
    ) {
      let s = i[y + 1],
        n = Math.min(e.type, s.type);
      for (e.tupletStop && (n = Math.min(n, 8)); l <= n; ) {
        let i = m[a];
        i
          ? (i.length += s.layout.x - e.layout.x)
          : ((i = { x: t, length: s.layout.x - e.layout.x }), (m[a] = i)),
          a++,
          (l *= 2);
      }
    }
    let r = a,
      h = a < d || e.tupletStop || e.beamStop;
    for (; a < d; a++, l *= 2) {
      let e = m[a];
      (m[a] = void 0),
        e && (p += `M${s + e.x},${n + o - eM * a}v2h${e.length}v-2z`);
    }
    for (; l <= e.type; a++, l *= 2)
      p += `M${s + t},${n + o - eM * a}v2h${h ? "-7" : "7"}v-2z`;
    if (
      (e.dotted &&
        1 !== e.type &&
        (p += `M${s + t + 4},${n + o - eM * a}v2h2v-2z`),
      e.tremolo)
    )
      for (let i = 0; i < e.tremolo.type; i++)
        c += `M${s + t - 5},${n + 6 + 3 * i}l10-3z`;
    (d = r), y++;
  }
  if (p.length) {
    let e = `voice${t.index}`;
    h.push(r("path", { className: lM[e], d: p }));
  }
  if (c.length) {
    let e = `voice${t.index}-tremolo`;
    h.push(r("path", { className: lM[e], d: c }));
  }
  return h.length ? r(a, { children: h }) : null;
}
let lT = "Bhq244",
  lj = "Bhq1lk",
  lL = "Bhq8x",
  lz = "Bhq1hy",
  lq = "Bhq13i",
  lE = "Bhq2w3",
  lA = {
    path: "Bhq244",
    text: "Bhq1lk",
    voice0: "Bhq8x",
    voice1: "Bhq1hy",
    voice2: "Bhq13i",
    voice3: "Bhq2w3",
  },
  lD = s4(9);
function lF(e) {
  let {
      tuplet: t,
      voice: i,
      start: a,
      stop: s,
      platform: n,
      x: l,
      y: o,
      tremoloOffset: u,
    } = e,
    p = a.layout.x + l,
    c = s.layout.x - a.layout.x,
    d = Math.round(c / 2),
    h = t > 9 ? 8 : 5,
    m = `M 0,0 L 0,6 ${d - h},6 M ${d + h},6 L ${c},6 ${c},0`;
  o += eB - 2 + u;
  let f = `voice${i.index}`;
  return r("g", {
    className: lA[f],
    transform: `translate(${p},${o})`,
    children: [
      r("text", { className: lA.text, x: d, y: lD(n), children: t }),
      r("path", { className: lA.path, d: m }),
    ],
  });
}
let lI = "Chi2a3",
  l_ = "Chi2up",
  lR = { path: "Chi2a3", text: "Chi2up" };
function lG(e) {
  let { layer: i, alternateEnding: a } = e.alternateEnding;
  if (i) {
    let { x1: s, x2: n, y: l } = i,
      r = n - s,
      o = e.x;
    return e.isFirstLayout
      ? t(
          "g",
          { transform: `translate(${o},${-1 * l - 14})` },
          t("text", { className: lR.text, x: 4, y: "14" }, a.join(",")),
          t("path", { className: lR.path, d: `M 1,14 L 1,0 ${r - 6},0` })
        )
      : t(
          "g",
          { transform: `translate(${o},${-1 * l - 14})` },
          t("path", { className: lR.path, d: `M 1,0 L ${r - 6},0` })
        );
  }
  return null;
}
let lH = "kw1ty",
  lV = { marker: "kw1ty" };
function lU(e) {
  let { marker: t, x: i } = e,
    a = t.layer;
  return a
    ? r("text", {
        className: lV.marker,
        x: i,
        y: -1 * a.y,
        dy: "-0.25em",
        children: t.text,
      })
    : null;
}
let lW = "Bjniz",
  lO = "Bjnch",
  lZ = "Bjn2ws",
  lJ = "Bjnzo",
  lX = { rect: "Bjniz", dot: "Bjnch", number: "Bjn2ws", path: "Bjnzo" };
function lK(e) {
  let { line: i, x: a } = e,
    { intervalSize: s } = i.layout,
    n = (i.strings - 1) * s;
  return t(
    "g",
    { className: "Rep", transform: `translate(${a},0)` },
    t("rect", { className: lX.rect, width: 4, height: n }),
    t("path", { className: lX.path, d: `M 8,0 L 8,${n}` }),
    t("ellipse", {
      className: lX.dot,
      cx: 13,
      cy: Math.floor(n / 3),
      rx: 2,
      ry: 2,
    }),
    t("ellipse", {
      className: lX.dot,
      cx: 13,
      cy: Math.floor((2 * n) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
function lY(e) {
  let { line: i, measureLayout: a, x: s } = e,
    { intervalSize: n } = i.layout,
    l = (i.strings - 1) * n,
    r = a.measure.repeat;
  return t(
    "g",
    { transform: `translate(${a.width - 18 + s},0)` },
    r > 2 && t("text", { className: lX.number, x: 2.5, y: -2 }, r + "x"),
    t("rect", { className: lX.rect, x: 14, width: 4, height: l }),
    t("path", { className: lX.path, d: `M 11,0 L 11,${l}` }),
    t("ellipse", {
      className: lX.dot,
      cx: 6,
      cy: Math.floor(l / 3),
      rx: 2,
      ry: 2,
    }),
    t("ellipse", {
      className: lX.dot,
      cx: 6,
      cy: Math.floor((2 * l) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
let lQ = "Cpu2zi",
  l1 = "Cpu351",
  l2 = "Cpu1y8",
  l0 = "Cpujn",
  l5 = "Cpu17q",
  l3 = "Cpu2jn",
  l4 = {
    number: "Cpu2zi",
    signature: "Cpu351",
    tempo: "Cpu1y8",
    tempoText: "Cpujn",
    red: "Cpu17q",
    green: "Cpu2jn",
  },
  l7 = s4(-8),
  l8 = s4(21),
  l6 = { "+": l4.green, "-": l4.red, "~": l4.green };
function l9(e) {
  let {
      measureLayout: t,
      line: i,
      part: a,
      slicingMode: s,
      measureEditorData: n,
      measureFingering: l,
      platform: o,
      isDiff: u,
    } = e,
    p = t.measure,
    c = t.x,
    d = t.lineLayout.intervalSize,
    h = eP(p) === t,
    m = eT(p) === t,
    f = [];
  if (
    (["-", "+", "~"].includes(p.equality) &&
      f.push(
        r("rect", {
          y: -i.layout.layers.height,
          x: c,
          width: t.width,
          height: i.layout.height,
        })
      ),
    h)
  ) {
    (void 0 !== e.platform || u) &&
      f.push(
        r(
          "text",
          {
            className: l4.number,
            x: 3 + c,
            y: -7.2,
            children:
              "number" == typeof p.displayIndex ? p.displayIndex : p.index + 1,
          },
          "number"
        )
      ),
      p.repeatStart && f.push(r(lK, { line: i, x: c }, "repeatStart"));
    let t = p.tripletFeelWithLayer;
    t && f.push(r(lv, { tripletFeel: t, x: c }, "tripletFeel"));
  }
  for (let e of (m &&
    p.repeat &&
    f.push(r(lY, { line: i, measureLayout: t, x: c }, "repeat")),
  t.alternateEndingWithLayer &&
    f.push(
      r(
        lG,
        { alternateEnding: t.alternateEndingWithLayer, isFirstLayout: h, x: c },
        "alternateEnding"
      )
    ),
  h &&
    p.markerWithLayer &&
    f.push(r(lU, { marker: p.markerWithLayer, x: c }, "marker")),
  t.tempoLayouts.values())) {
    let { tempo: t, layer: i } = e;
    t &&
      i &&
      f.push(
        r(
          "g",
          {
            className: l4.tempo,
            transform: `translate(${i.x1},${-1 * i.y})`,
            children: [
              t.text &&
                r("text", {
                  className: l4.tempoText,
                  y: -3,
                  x: 0,
                  children: t.text,
                }),
              r("use", { xlinkHref: `#tempo${t.type}`, x: e.textWidth }),
              t.dotted && r("use", { xlinkHref: "#tempoDot", x: e.textWidth }),
              r("text", {
                className: l4.tempoText,
                y: -3,
                x: e.textWidth + e.noteWidth,
                children: `= ${t.bpm}`,
              }),
            ],
          },
          "tempo"
        )
      );
  }
  let y = 0;
  for (let e of t.beatsLayouts) {
    let t = l?.voices[0].beats;
    f.push(
      r(
        ll,
        {
          layout: e,
          part: a,
          measure: p,
          slicingMode: s,
          x: c,
          measureEditorData: n,
          measureFingerings: t,
          platform: o,
        },
        `beat${y}`
      )
    ),
      y++;
  }
  if (h && p.hasSignature) {
    let e = Math.floor((a.strings / 2) * d);
    f.push(
      r(
        "text",
        {
          className: l4.signature,
          x: t.signatureOffset + c,
          y: e + l7(o),
          children: p.signature[0],
        },
        "t1"
      )
    ),
      f.push(
        r(
          "text",
          {
            className: l4.signature,
            x: t.signatureOffset + c,
            y: e + l8(o),
            children: p.signature[1],
          },
          "t2"
        )
      );
  }
  if (p.rhythmLines) {
    let e = 0,
      a = d * i.strings;
    for (let s of p.voices)
      if (!(s.hasSameRhythm || s.rest)) {
        let n = t.beatsLayouts
            .map((e) => e.beats.find((e) => e.voice == s.index))
            .filter(Boolean),
          l = i.rhythmEffects.tremolo.get(s.index) || !1,
          u = i.rhythmEffects.tremolo.get(s.index) || !1,
          p = n.some((e) => e.type > 8),
          d = l && p ? ej : 0,
          h = u ? eL : 0,
          m = d + h,
          y = a + s.index * (eB + m);
        f.push(
          r(
            lP,
            { voice: s, beats: n, x: c, y, tremoloOffset: d },
            `rhythm${s.index}`
          )
        ),
          (a = y);
        let v = 0,
          g = null;
        for (let t of n)
          t &&
            (t.tupletStart && ((v = t.tuplet), (g = t)),
            v &&
              g &&
              t.tupletStop &&
              (f.push(
                r(
                  lF,
                  {
                    tuplet: v,
                    start: g,
                    stop: t,
                    voice: s,
                    platform: o,
                    x: c,
                    y,
                    tremoloOffset: d,
                  },
                  `tuplet${e}`
                )
              ),
              (v = 0),
              e++));
      }
  }
  return r("g", { className: p.equality && l6[p.equality], children: f });
}
let re = (e, t) => e + `H${t.x}m${t.w},0`;
function rt(e) {
  let { line: t, hasTuning: i, slicingMode: a, part: s } = e,
    { intervalSize: n } = t.layout,
    l = t.spaces,
    o = n * (t.strings - 1),
    u = "",
    p = t.layout.measureLayouts;
  for (let e = i ? 1 : 0; e < p.length; e++) {
    let t = p[e];
    eP(t.measure) === t && (u += `M${t.x},0v${o}`);
  }
  let c = p[0].x,
    d = a.stringLineMaxX(t);
  if (s.usedDrums && s.isDrumStdOn)
    for (let e = 0; e < t.strings; e++) u += `M${c},${n * e} H${d}`;
  else
    for (let e = 0; e < t.strings; e++)
      u += `M${c},${n * e}` + l[e].reduce(re, "") + `H${d}`;
  let h = t.layout.measureLayouts[t.layout.measureLayouts.length - 1];
  return (
    eT(h.measure) === h && (u += `M${d},0v${o}`),
    r("path", { className: er.strings, d: u })
  );
}
let ri = "D38xz",
  ra = { tuning: "D38xz" },
  rs = s4(5);
function rn(e) {
  let { tuning: i, platform: s, intervalSize: n } = e;
  return i
    ? t(
        a,
        null,
        ez(i, !1).map((e, i) =>
          t("text", { x: rs(s), y: 1 + i * n, key: i, className: ra.tuning }, e)
        )
      )
    : null;
}
let rl = "Cw81bf",
  rr = "Cw82ek",
  ro = { line: "Cw81bf", unchanged: "Cw82ek" };
function ru(e) {
  return "boolean" == typeof e.hasChanges
    ? [ro.line, e.hasChanges ? ro.changed : ro.unchanged].join(" ")
    : ro.line;
}
let rp = l((e) => {
  let {
      inlineDefs: t,
      line: i,
      noPadding: a,
      part: s,
      tuning: l,
      slicingMode: p,
      lazy: c,
      tabEditorData: d,
      fingerings: h,
      platform: m,
      isDiff: f,
    } = e,
    y = p.expectedSliceWidth(i.layout.unscaledWidth) + (a ? 0 : eq),
    { intervalSize: v } = i.layout,
    g = "http://www.w3.org/2000/svg",
    x = i.layout.height,
    b = a ? 0 : -eq / 2,
    C = `${b} -${i.layout.layers.height} ${y} ${x}`;
  if (!m) {
    let [e, t] = n(i.index < 5),
      a = u();
    if (
      (o(() => {
        if (c && !e)
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
      }, [e, c]),
      c && !e)
    )
      return r(
        "svg",
        {
          xmlns: g,
          version: "1.1",
          ref: a,
          width: y,
          viewBox: C,
          className: ro.line,
        },
        "line-stub" + i.index
      );
  }
  let w = i.capo,
    k = !!w && !m,
    N = !!l;
  return r(
    "svg",
    {
      xmlns: g,
      version: "1.1",
      width: y,
      viewBox: C,
      className: ru(i),
      children: [
        t && r(sj, { part: s, line: i }),
        N && r(rn, { tuning: l, platform: m, intervalSize: v }),
        k && r(eV, w),
        r(rt, { line: i, hasTuning: N, slicingMode: p, part: s }),
        ...i.hangingText.map((e, t) =>
          r(sr, { text: e, layout: void 0, xoffset: 0 }, t.toString())
        ),
        r(s3, { line: i }),
        ...i.layout.measureLayouts.map((e) =>
          r(
            l9,
            {
              isDiff: f,
              measureLayout: e,
              line: i,
              part: s,
              slicingMode: p,
              measureFingering:
                h && h.measures.find((t) => t.index - 1 === e.measure.index),
              measureEditorData:
                d && d[e.measure.index] && d[e.measure.index].beats,
              platform: m,
            },
            e.measure.index.toString() + e.x.toString()
          )
        ),
      ],
    },
    "line" + i.index
  );
});
export {
  tB as A,
  ar as C,
  rp as L,
  a9 as M,
  aT as P,
  ss as S,
  tm as a,
  tc as b,
  tf as c,
  td as d,
  tp as s,
  th as u,
};
