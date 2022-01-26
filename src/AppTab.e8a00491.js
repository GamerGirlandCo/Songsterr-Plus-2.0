import {
  as as t,
  at as e,
  au as o,
  av as i,
  aw as s,
  ax as n,
  u as a,
  n as r,
  _ as l,
  ay as c,
  az as p,
  aA as h,
  aB as u,
  aC as d,
  aD as m,
  aE as y,
  aF as f,
  aG as g,
  aH as x,
  aI as v,
  aJ as b,
  aK as w,
  aL as S,
  aM as L,
  aN as _,
  aO as N,
  aP as M,
  aQ as T,
  aR as k,
  a2 as P,
  aS as E,
  aT as C,
  aU as B,
  aV as D,
  aW as z,
  aX as X,
  aY as A,
  aZ as I,
  r as R,
  A as F,
  t as H,
  a_ as O,
  a$ as Y,
  K as V,
  b0 as q,
  b1 as j,
  b2 as U,
  b3 as W,
  b4 as K,
  H as G,
  F as Q,
  E as Z,
  L as J,
  T as $,
  C as tt,
  v as et,
  y as ot,
  a as it,
  b5 as st,
  b6 as nt,
  b7 as at,
  b8 as rt,
  b9 as lt,
  ba as ct,
  bb as pt,
  bc as ht,
  bd as ut,
  be as dt,
  bf as mt,
  bg as yt,
  bh as ft,
  bi as gt,
  bj as xt,
  bk as vt,
  bl as bt,
  bm as wt,
  bn as St,
  bo as Lt,
  bp as _t,
  b as Nt,
  bq as Mt,
  br as Tt,
  bs as kt,
  s as Pt,
} from "./index.0e02c5ee.js";
import {
  g as Et,
  e as Ct,
  b as Bt,
  _ as Dt,
  v as zt,
  l as Xt,
  y as At,
  i as It,
  A as Rt,
  s as Ft,
  d as Ht,
} from "./preact.89f2d999.js";
import {
  b as Ot,
  E as Yt,
  d as Vt,
  g as qt,
  e as jt,
  C as Ut,
  P as Wt,
  f as Kt,
  h as Gt,
  i as Qt,
  N as Zt,
  s as Jt,
  j as $t,
  F as te,
  k as ee,
  a as oe,
  A as ie,
} from "./AppHeader.21f46296.js";
import { g as se, a as ne } from "./gplay.dc994b02.js";
import {
  j as ae,
  P as re,
  M as le,
  N as ce,
  a as pe,
  g as he,
  S as ue,
  b as de,
  L as me,
  A as ye,
  c as fe,
} from "./NetworkError.9f77b982.js";
import { S as ge } from "./SWW.065aa688.js";
import { p as xe } from "./ShowroomPlaceholder.48ae4617.js";
import "./FileInput.b862853c.js";
import "./user.151b6a3c.js";
import "./DifficultyIndicator.6b73f35d.js";
import "./IconArrow.b9f82100.js";
class ve {
  constructor(i, s) {
    o(this, "lines", void 0),
      o(this, "height", void 0),
      o(this, "slicingMode", void 0);
    const n = (function (o, i) {
      const s = i.width,
        n = [];
      let a = new t(0, o, s);
      n.push(a), o.tuning && (a.width = e);
      for (const e of o.measures)
        e.width + a.width > s &&
          a.measures.length > 0 &&
          ((a = new t(n.length, o, s)), n.push(a)),
          a.measures.push(e),
          (e.layout.lineLayout = a.layout),
          (e.layout.originX = a.width),
          (e.layout.originWidth = e.width),
          (a.width += e.width);
      let r = [],
        l = 0;
      const c = n.length,
        p = i.makeScaleStrategy(c);
      for (a of n)
        (a.hangingText = r),
          (a.layout.y = l),
          (r = a.prepare(o, i, p)),
          (l += a.layout.height);
      return { lines: n, height: l };
    })(i, s);
    (this.slicingMode = s), (this.lines = n.lines), (this.height = n.height);
  }
}
class be extends class {
  constructor(t) {
    o(this, "width", void 0), (this.width = t);
  }
  areBeatsInSameSlice(t, e) {
    return t.layout.stringY === e.layout.stringY;
  }
  getBendCoordinates(t, e) {
    const o = t.firstRef().beat,
      i = t.lastRef(),
      a = i.note,
      r = a.nextNoteOnString,
      l = !!r && !!r.bendStart && !!r.tie,
      c = l ? i.beat.nextBeat : i.beat,
      p = n(o, e.beat),
      h = n(o, o) - p,
      u =
        n(o, c, !l) -
        p -
        (function (t) {
          const e = t.nextNoteOnString;
          return e && !e.tie ? s : 0;
        })(a);
    return { x1: h, x2: u };
  }
  bendsForNote(t) {
    const e = t.bendStart || t.bendPart || t.bendEnd;
    return e ? [e] : [];
  }
  hasHellip() {
    return !0;
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
    const o = super.getBendCoordinates(t, e),
      n = o.x1;
    let a = o.x2;
    if (i(t)) {
      const e = t.firstRef().beat;
      a = e.layout.maxX - e.layout.absoluteX - s;
    }
    return { x1: n, x2: a };
  }
  getTieSlurPathLength(t, e) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return this.areBeatsInSameSlice(t, e)
      ? e.layout.absoluteX - t.layout.absoluteX
      : o
      ? e.layout.absoluteX
      : t.layout.maxX - t.layout.absoluteX;
  }
  makeScaleStrategy(t) {
    return (e) => (e.index === t - 1 ? 1 : e.layout.maxX / e.width);
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
function we(t) {
  return t.layout.y + t.layout.layers.height - 18;
}
const Se = [4, 10, 16, 21],
  Le = Et((t) => {
    let { lines: e, part: o } = t;
    const { dispatch: i, annotations: s } = a("annotations"),
      n = o ? (s.parts && s.parts[o.partId]) || [] : null;
    if (!n) return;
    const r = [];
    for (const t of e)
      for (const e of t.measures) {
        const o = e.layout.x + 2,
          s = we(t),
          a = e.index + 1,
          l = void 0 !== n[e.index + 1],
          c = Se[a.toString().length - 1],
          p = !l && c + 67 + 7 > e.layout.width,
          h = "add-".concat(a),
          u = l ? a : "".concat(a, " Add").concat(p ? "" : " comment"),
          d = l ? c : c + (p ? 22 : 67),
          m = () => {
            i("annotations/toggle", a);
          };
        r.push(
          Ct("path", {
            className: l ? "Bajee" : "Baj2uk",
            "data-annot-num": a,
            "data-has-annotation": l,
            "aria-labelledby": h,
            onClick: m,
            d: "M"
              .concat(o + 7, " ")
              .concat(s + 13, "l-2 3-2-3c-2 0-3-1-3-3v-7c0-2 1-3 3-3h")
              .concat(d, "c2 0 3 1 3 3v7c0 2-1 3-3 3z"),
          })
        ),
          r.push(
            Ct("text", {
              className: "Baj2ey",
              x: o + 2.4,
              y: s + 10,
              id: h,
              children: u,
            })
          );
      }
    return Ct(Bt, { children: r });
  });
var _e = r(
  class extends Dt {
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
const Ne =
    "M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  Me = "c1.25-.25 2.75-2.25 3-2.75h1z",
  Te =
    "c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  ke = "".concat(Ne).concat(Me),
  Pe = "".concat(Ne).concat(Te).concat(Me),
  Ee = "".concat(Ne).concat(Te).concat(Te).concat(Me),
  Ce = "".concat(Ne).concat(Te).concat(Te).concat(Te).concat(Me),
  Be = "".concat(Ne).concat(Te).concat(Te).concat(Te).concat(Te).concat(Me),
  De = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
  ze = "".concat(De).concat("M0-4l9 8m0-8l-9 8"),
  Xe = "".concat(De, "M9-4L0 4"),
  Ae =
    "M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
  Ie = "".concat(Ae, "M-3-6L12 5");
function Re(t) {
  const e = t.part.strings <= 4 ? l : 0,
    o = 0 !== e ? "translate(0, ".concat(-e, ")") : void 0,
    i = [
      Ct("ellipse", { id: "dot", cx: 10, cy: 17.5 - e, rx: 1.5, ry: 1.5 }),
      Ct("rect", { id: "rest1", y: 24 - e, x: -6, width: 12, height: 6 }),
      Ct("rect", { id: "rest2", y: 18 - e, x: -6, width: 12, height: 6 }),
      Ct("path", {
        id: "rest4",
        transform: o,
        d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
      }),
      Ct("path", { id: "rest8", transform: o, d: ke }),
      Ct("path", { id: "rest16", transform: o, d: Pe }),
      Ct("path", { id: "rest32", transform: o, d: Ee }),
      Ct("path", { id: "rest64", transform: o, d: Ce }),
      Ct("path", { id: "rest128", transform: o, d: Be }),
      Ct("path", {
        id: "tempo",
        d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
      }),
    ],
    s = !this.props.part.usedDrums;
  return Ct("defs", {
    children: s
      ? i
      : [
          ...i,
          Ct("path", { id: "drumCross", d: "M0-4l9 8m0-8l-9 8" }),
          Ct("path", {
            id: "drumHat",
            d: "M-2-7l6.5-4l6.5 4",
            style: "fill: none",
          }),
          Ct("path", {
            id: "drumHatEdge",
            d: "M-2-7h8l5 -5",
            style: "fill: none",
          }),
          Ct("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
          Ct("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
          Ct("path", { id: "drumCircleCross", d: ze, style: "fill: none" }),
          Ct("path", { id: "drumCircleStroke", d: Xe, style: "fill: none" }),
          Ct("path", { id: "drum", d: Ae }),
          Ct("path", { id: "drumStroke", d: Ie }),
          Ct("path", { id: "extraLine", d: "M-4 0l16 0" }),
        ],
  });
}
function Fe(t) {
  let { text: e, layout: o, xoffset: i } = t;
  const s = e.layer;
  if (s) {
    const t = o ? s.x1 - o.absoluteX : s.x1,
      n = -1 * s.y;
    return Ct("text", {
      className: "D191u2",
      x: t + i,
      y: n,
      dy: "-0.25em",
      children: e.text,
    });
  }
  return null;
}
function He(t) {
  let { layer: e } = t;
  const { x1: o, x2: i, y: s } = e,
    n = i - o,
    a = o,
    r = -1 * s - 2,
    l = [
      Ct(
        "text",
        { className: "Bmz29t", x: a, y: r, children: "let ring" },
        "let ring"
      ),
    ];
  return (
    n > 46 &&
      (l.push(
        Ct(
          "line",
          {
            className: "Bmzmn Bmz8a",
            x1: 46 + a,
            y1: -3 + r,
            x2: n - 2 + a,
            y2: -3 + r,
          },
          "dotted"
        )
      ),
      l.push(
        Ct(
          "line",
          { className: "Bmzmn", x1: n + a, y1: 1 + r, x2: n + a, y2: -7 + r },
          "line"
        )
      )),
    Ct(Bt, { children: l })
  );
}
function Oe(t) {
  let { layer: e } = t;
  const { x1: o, x2: i, y: s } = e,
    n = o,
    a = -1 * s - 2,
    r = i - o,
    l = [zt("text", { className: "Dv2mi", x: n, y: a, key: "pm" }, "P. M.")];
  return (
    r > 35 &&
      (l.push(
        zt("line", {
          className: "Dv1nu Dv1vp",
          x1: 35 + n,
          y1: -3 + a,
          x2: r - 2 + n,
          y2: -3 + a,
          key: "dotted",
        })
      ),
      l.push(
        zt("line", {
          className: "Dv1nu",
          x1: r + n,
          y1: 1 + a,
          x2: r + n,
          y2: -7 + a,
          key: "line",
        })
      )),
    zt(Bt, null, l)
  );
}
function Ye(t) {
  let { layer: e, effectValue: o } = t;
  const { x1: i, x2: s, y: n } = e,
    a = s - i,
    r = i,
    l = -1 * n - 2;
  let c = "Harm.";
  switch (o) {
    case "artificial":
      c = "A. H.";
      break;
    case "semi":
      c = "S. H.";
      break;
    case "tapped":
      c = "T. H.";
      break;
    case "pinch":
      c = "P. H.";
  }
  const p = [
    Ct("text", { className: "Cwh1ss", x: r, y: l, children: c }, "Harm."),
  ];
  return (
    a > 40 &&
      (p.push(
        Ct(
          "line",
          {
            className: "Cwh2nl Cwhc4",
            x1: 40 + r,
            y1: -3 + l,
            x2: a - 2 + r,
            y2: -3 + l,
          },
          "dotted"
        )
      ),
      p.push(
        Ct(
          "line",
          { className: "Cwh2nl", x1: a + r, y1: 1 + l, x2: a + r, y2: -7 + l },
          "line"
        )
      )),
    Ct(Bt, { children: p })
  );
}
function Ve(t) {
  let { layer: e, wide: o } = t;
  const { x1: i, x2: s, y: n } = e,
    a = s - i,
    r = (function (t, e, o, i) {
      let s = "M".concat(e, " ").concat(o + 4, "l3-3.5"),
        n = "v".concat(i ? 2 : 1, ".8l-3 3.5");
      for (let e = 0; e < t; e++)
        (s += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
          (n += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
      return s + n + "z";
    })(a > 14 ? Math.floor((a - 3) / 5.5) : 2, i, -(n + 6), o);
  return Ct("path", { className: "io2pf", d: r });
}
class qe extends Dt {
  constructor() {
    super(...arguments), qe.prototype.__init.call(this);
  }
  __init() {
    this.renderEffect = (t, e) => {
      const o = {
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
          return zt(He, o);
        case "palmMute":
          return zt(Oe, o);
        case "harmonic":
          return zt(Ye, o);
        case "vibrato":
          return zt(Ve, Object.assign({}, o, { wide: !1 }));
        case "wideVibrato":
          return zt(Ve, Object.assign({}, o, { wide: !0 }));
        default:
          return null;
      }
    };
  }
  render() {
    return zt(Bt, null, this.props.line.effects.map(this.renderEffect));
  }
}
function je(t, e) {
  return () => t;
}
const Ue = je(0);
function We(t) {
  const { note: e, beat: o, part: i, x: s, edited: n, platform: a } = t;
  if (!e.isVisible && (!n || (n && e.bogus))) return null;
  const r = "translate(".concat(s, ", 0)");
  if (o.rest) {
    if (o.layout.usedStrings || (0 !== o.voice && o.layout.usedRest))
      return null;
    const t = Ot["rest".concat(o.voice)],
      e = Ct(
        "use",
        { className: t, xlinkHref: "#rest".concat(o.type), transform: r },
        "rest"
      );
    if (o.dotted) {
      const o = Ct(
        "use",
        { className: t, xlinkHref: "#dot", transform: r },
        "dot"
      );
      return Ct(Bt, { children: [e, o] });
    }
    return e;
  }
  if (i.usedDrums && i.isDrumStdOn) {
    const t = Ot["drums".concat(o.voice)],
      i = "translate(".concat(s, ", ").concat(0.5 + l * e.string, ")"),
      n = e.orientation ? i : i + " translate(-10, 0)";
    return Ct(Bt, {
      children: [
        (e.string <= -1 || e.string >= 5) &&
          Ct(Yt, {
            noteString: e.string,
            className: Vt.strings,
            noteTransform: n,
          }),
        1 !== o.type &&
          Ct("path", {
            className: Ot["stick".concat(o.voice)],
            transform: i,
            d: qt(e.fret, e.string),
          }),
        (e.tie || e.ghost) &&
          Ct("text", { x: s - 6, y: l * e.string + Ue(a) + 5 }, "("),
        Ct(jt, { fret: e.fret, className: t, transform: n }),
        (e.tie || e.ghost) &&
          Ct("text", { x: s + 11, y: l * e.string + Ue(a) + 5 }, ")"),
      ],
    });
  }
  let c = "",
    p = 0;
  const h = i.usedDrums;
  if (h) {
    const t = i.usedDrums.get(e.fret);
    t && ((c = t.name || "*"), (p = t.string || 0));
  } else (c = e.dead ? "X" : e.fret.toString()), (p = e.string);
  let u = Ot["".concat(h ? "voiceDrum" : "voice").concat(o.voice)];
  n && (u = "".concat(u, " ").concat(Ot.edited));
  const d = Ct(
    "text",
    {
      className: u,
      x: s,
      y: l * p + Ue(a),
      children: e.tie || e.ghost ? "(".concat(c, ")") : c,
    },
    "text"
  );
  if (e.harmonic) {
    const t = Ct(
      "path",
      {
        className: Ot.harmonic,
        transform: "translate(".concat(s - 17, ", ").concat(l * p - 3.5, " )"),
        d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
      },
      "harmonic"
    );
    return Ct(Bt, { children: [t, d] });
  }
  return d;
}
function Ke(t, e, o, i, s) {
  const n = e ? e.margin(c) : 0,
    a = l * i - 7,
    r = s - n - (o ? o.margin(c) : 0),
    p = Math.min(Math.floor(r / 3), 10),
    h = Math.max(l - 4, 3),
    u = h - 1;
  return "M"
    .concat(n + t, " ")
    .concat(a, "c")
    .concat(p, "-")
    .concat(h, " ")
    .concat(r - p, "-")
    .concat(h, " ")
    .concat(r, " 0c-")
    .concat(p, "-")
    .concat(u, "-")
    .concat(r - p, "-")
    .concat(u, "-")
    .concat(r, " 0z");
}
function Ge(t) {
  let { x: e, start: o, end: i, slicingMode: s } = t;
  if (i) {
    const t = i.firstRef().beat,
      o = i.lastRef().beat,
      n = i.lastRef().note;
    if (o.layout && t.layout) {
      const i = s.getTieSlurPathLength(t, o, !0);
      return Ct("path", {
        className: "B5ex2",
        d: Ke(e - i, null, n, n.string, i),
      });
    }
  } else if (o) {
    const t = o.firstRef().beat,
      i = o.lastRef().beat,
      n = o.firstRef().note,
      a = o.lastRef().note;
    if (i.layout && t.layout) {
      const o = s.areBeatsInSameSlice(t, i),
        r = s.getTieSlurPathLength(t, i);
      return Ct("path", {
        className: "B5ex2",
        d: Ke(e, n, o ? a : null, n.string, r),
      });
    }
  }
  return null;
}
function Qe(t, e, o, i, s) {
  const n = e ? e.margin(p) : 0,
    a = l * i + 7,
    r = s - n - (o ? o.margin(p) : 0),
    c = Math.min(Math.floor(r / 3), 10),
    h = Math.max(l - 5, 3),
    u = h - 1;
  return "M"
    .concat(n + t, " ")
    .concat(a, "c")
    .concat(c, " ")
    .concat(h, " ")
    .concat(r - c, " ")
    .concat(h, " ")
    .concat(r, " 0c-")
    .concat(c, " ")
    .concat(u, "-")
    .concat(r - c, " ")
    .concat(u, "-")
    .concat(r, " 0z");
}
function Ze(t) {
  let { x: e, start: o, end: i, slicingMode: s } = t;
  if (i) {
    const t = i.firstRef().beat,
      o = i.lastRef().beat,
      n = i.lastRef().note;
    if (o.layout && t.layout) {
      const i = s.getTieSlurPathLength(t, o, !0),
        a = n.string;
      return Ct("path", { className: "Cug2cl", d: Qe(e - i, null, n, a, i) });
    }
  }
  if (o) {
    const t = o.firstRef().beat,
      i = o.lastRef().beat,
      n = o.firstRef().note,
      a = o.lastRef().note;
    if (i.layout && t.layout) {
      const o = s.areBeatsInSameSlice(t, i),
        r = s.getTieSlurPathLength(t, i),
        l = n.string;
      return Ct("path", {
        className: "Cug2cl",
        d: Qe(e, n, o ? a : null, l, r),
      });
    }
  }
  return null;
}
function Je(t, e) {
  if ((t.x1 === t.x2 && t.y1 === t.y2) || (e.x1 === e.x2 && e.y1 === e.y2))
    return null;
  const o = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
  if (0 === o) return null;
  const i = ((e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1)) / o,
    s = ((t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1)) / o;
  return i < 0 || i > 1 || s < 0 || s > 1
    ? null
    : { x: t.x1 + i * (t.x2 - t.x1), y: t.y1 + i * (t.y2 - t.y1) };
}
function $e(t) {
  let { x: e, cfx: o, note: i } = t;
  const s = o.firstRef().beat,
    a = o.lastRef().beat;
  if (!a.layout || !s.layout) return null;
  const r = o.firstRef().note,
    c = o.lastRef().note,
    p = r.string,
    u = r.fret >= c.fret ? -2 : 2,
    d = n(s, i.beat),
    m = n(s, s),
    y = n(s, a),
    f = (function (t, e, o) {
      const i = { x1: o, y1: 1e3, x2: o, y2: -1e3 },
        s = Je(t, { x1: e, y1: 1e3, x2: e, y2: -1e3 }),
        n = Je(t, i);
      return {
        x1: s ? s.x : t.x1,
        y1: s ? s.y : t.y1,
        x2: n ? n.x : t.x2,
        y2: n ? n.y : t.y2,
      };
    })(
      {
        x1: e + m - d + r.margin(h),
        y1: l * p + u,
        x2: e + y - d - c.margin(h),
        y2: l * p - u,
      },
      i.beat.layout.minX,
      i.beat.layout.maxX
    );
  return Ct("line", Object.assign({ className: "I32lk" }, f));
}
function to(t) {
  let { x: e, y: o, up: i } = t;
  return Ct("path", {
    className: "Ccv14l",
    d: "M "
      .concat(e, ",")
      .concat(o, " l 2,")
      .concat(i ? 5 : -5, " -4,0 2,")
      .concat(i ? -5 : 5),
  });
}
const eo = ["¼", "½", "¾"],
  oo = je(4),
  io = je(11);
function so(t) {
  if (100 === t) return "full";
  if (t) {
    let e = "";
    const o = Math.floor(t / 100);
    o && (e += o);
    const i = t % 100;
    return i >= 25 && (e += eo[Math.floor(i / 25) - 1]), e;
  }
  return "";
}
function no(t) {
  let { x: e, y: o, up: i, tone: s, platform: n } = t;
  return Ct("text", {
    className: i ? "Cqco1" : "Cqc2d5",
    x: e,
    y: i ? o - oo(n) : o + io(n),
    children: so(s),
  });
}
function ao(t, e) {
  if (!t) return !1;
  const o = t.firstRef().note.bend;
  if (!o) return !1;
  const i = o.points,
    s = i.length;
  return !(s < 1) && i[s - 1].tone === e;
}
function ro(t, e, o, i, s) {
  return {
    elements: e ? [...t.elements, e] : t.elements,
    prevTone: o,
    prevX: i,
    prevY: s,
  };
}
function lo(t) {
  const { cfx: e, note: o, slicingMode: i, x: s, platform: n } = t,
    a = e.firstRef().note,
    r = a.bend;
  if (!r) return null;
  const { x1: c, x2: p } = i.getBendCoordinates(e, o),
    h = p - c,
    f = c + s,
    { elements: g } = r.points.reduce(
      (function (t, e, o, i) {
        const s = m + l * t.string;
        return function (n, a, r) {
          const { tone: l, position: c } = a,
            p = 0 === l ? s : m - l / y;
          if (0 === r) {
            if (!t.tie && 0 !== l) {
              const t = (function (t, e, o, i, s, n) {
                return [
                  Ct(
                    "line",
                    { className: "Cni34n", x1: o, y1: i + u, x2: o, y2: s },
                    "prebend-".concat(t)
                  ),
                  Ct(to, { x: o, y: s, up: !0 }, "arrow-".concat(t)),
                  Ct(
                    no,
                    { tone: e, x: o, y: s, up: !0, platform: n },
                    "y-".concat(t)
                  ),
                ];
              })(r, l, e, s, p, i);
              return ro(n, t, l, e, p);
            }
            return ro(n, null, l, e, 0 !== l ? p : s);
          }
          const { prevTone: h, prevX: f, prevY: g } = n,
            x = (o * c) / 60 + e;
          if (l === h) {
            const t = (function (t, e, o, i, s, n) {
              return e <= 0
                ? null
                : [
                    Ct(
                      "line",
                      { className: "Cnie8 Cnix5", x1: o, y1: i, x2: s, y2: n },
                      "hold-".concat(t)
                    ),
                  ];
            })(r, l, f, p, x, p);
            return ro(n, t, l, x, p);
          }
          const v = (function (t, e, o, i, s, n, a, r, l, c) {
            const p = l < a,
              h = e.prevNoteOnString,
              u = h && !!h.bendEnd,
              m = h && (!!h.bendStart || !!h.bendPart || !!h.bendEnd),
              y =
                h &&
                (function (t) {
                  if (!t) return !1;
                  const e = t.firstRef().note.bend;
                  if (!e) return !1;
                  const o = e.points,
                    i = o.length;
                  if (i < 2) return !1;
                  const s = o[i - 2].tone;
                  return o[i - 1].tone === s;
                })(h.bendEnd) &&
                ao(h.bendEnd, 0),
              f = e.tie && u && !y && ao(h.bendEnd, o) && 0 !== o,
              g = s !== n || 0 !== o || (f && m) ? 0 : e.margin(d),
              x = [
                Ct(
                  "path",
                  {
                    className: "Cnie8",
                    d: "M "
                      .concat(n + g, ",")
                      .concat(a, " Q ")
                      .concat(r, ",")
                      .concat(a, " ")
                      .concat(r, ",")
                      .concat(p ? l + 4 : l - 4),
                  },
                  "bend-".concat(t)
                ),
                Ct(to, { x: r, y: l, up: p }, "arrow-".concat(t)),
              ];
            return (
              0 !== i &&
                x.push(
                  Ct(
                    no,
                    { tone: i, x: r, y: l, up: p, platform: c },
                    "y-".concat(t)
                  )
                ),
              x
            );
          })(r, t, h, l, e, f, g, x, p, i);
          return ro(n, v, l, x, p);
        };
      })(a, f, h, n),
      { elements: [], prevTone: 0, prevX: 0, prevY: 0 }
    );
  return Ct(Bt, { children: g });
}
function co(t) {
  let { lyrics: e, x: o } = t;
  const i = e.layer;
  if (i) {
    const t = f(e) + o + i.diff;
    return Ct("text", {
      className: "l",
      x: t,
      y: i.y + i.height,
      children: e.text,
    });
  }
  return null;
}
function po(t) {
  let { note: e, x: o, type: i } = t;
  const s = e.string,
    n = "left" === i ? -1 : 1;
  let a = "upwards" === e.slide ? 1 : -1;
  "left" === i && (a = "above" === e.leftSlide ? 1 : -1);
  const r = e.margin(h);
  return Ct("line", {
    className: "I32lk",
    x1: n * r + o,
    y1: l * s + 2 * a,
    x2: n * (r + 15) + o,
    y2: l * s - 2 * a,
  });
}
function ho(t) {
  let { fret: e, x: o, string: i, originalFret: s } = t;
  if ("" === s) {
    const t = e.length >= 2 ? 11.5 : 7.5;
    return Ct(Bt, {
      children: [
        Ct("line", {
          className: "D2w2st",
          x1: o - t,
          y1: l * i,
          x2: o + t,
          y2: l * i,
        }),
        Ct("text", {
          className: "D2w2d7",
          x: o,
          y: l * i,
          children: e,
          "data-fret": e,
        }),
      ],
    });
  }
  let n = 10;
  return (
    e.length >= 2 && (n += 3),
    s.length >= 2 && (n += 4),
    Ct(Bt, {
      children: [
        "" !== e &&
          Ct("text", {
            className: "D2w2d7",
            x: o + n,
            y: l * i - 4,
            children: e,
            "data-fret": e,
          }),
        Ct("line", {
          className: "D2w19h",
          x1: o - 4,
          y1: l * i - 7,
          x2: o + 4,
          y2: l * i + 4,
        }),
      ],
    })
  );
}
function uo(t) {
  let { up: e, min: o, max: i, xoffset: s } = t;
  const n = (i - o + 1) * l,
    a = e ? 4 : n - 4,
    r = e ? 0 : n,
    c = a,
    p = a,
    h = (o - 0.5) * l,
    u = s - 15;
  return Ct(Bt, {
    children: [
      Ct(
        "line",
        { className: "ex1kp", x1: 4 + u, y1: h, x2: 4 + u, y2: (i + 0.5) * l },
        "line"
      ),
      Ct(
        "polygon",
        {
          className: "ex105",
          points: ""
            .concat(4 + u, ",")
            .concat(r + h, " ")
            .concat(0 + u, ",")
            .concat(c + h, " ")
            .concat(8 + u, ",")
            .concat(p + h, " ")
            .concat(4 + u, ",")
            .concat(r + h),
        },
        "polygon"
      ),
    ],
  });
}
function mo(t) {
  const e = [],
    {
      layout: o,
      part: i,
      measure: s,
      slicingMode: n,
      measureEditorData: a,
      platform: r,
      x: l,
    } = t,
    c = l + o.x;
  for (const t of o.beats)
    if (t.lyrics)
      for (const o of t.lyrics)
        e.push(Ct(co, { lyrics: o, x: c }, "lyrics".concat(t.index)));
    else {
      t.text &&
        e.push(
          Ct(
            Fe,
            { text: t.text, layout: o, xoffset: c },
            "text".concat(t.index)
          )
        );
      const l = t.tapping;
      l &&
        l.layer &&
        e.push(
          Ct(
            "text",
            {
              className: "ex3",
              y: -1 * l.layer.y,
              x: Math.max(-1 * Math.floor(l.width / 2) + c, (-1 * g) / 2),
              dy: "-0.25em",
              children: l.text,
            },
            "tap".concat(t.index)
          )
        );
      const p = t.chord;
      p &&
        p.layer &&
        e.push(
          Ct(
            "text",
            {
              className: "exh6",
              y: -1 * p.layer.y,
              x: Math.max(-1 * Math.floor(p.width / 2) + c, (-1 * g) / 2),
              dy: "-0.25em",
              children: p.text,
            },
            "chord".concat(t.index)
          )
        );
      let h = Number.MAX_VALUE,
        u = 0;
      if (!s.rest) {
        if (i.usedDrums) {
          const e = t.notes
            .filter((t) => !t.bogus)
            .map((t) => ({ string: Math.floor(2 * t.string), note: t }));
          e.sort((t, e) => t.string - e.string);
          let o = null;
          for (const t of e)
            (t.note.orientation = !(
              o &&
              Math.abs(t.string - o.string) <= 1 &&
              o.note.orientation
            )),
              (o = t);
        }
        t.hat &&
          i.isDrumStdOn &&
          e.push(
            Ct(
              "path",
              {
                className: "exkb",
                d: "M".concat(c - 2).concat(-t.hat.layer.y, "h8l5 -5"),
              },
              "hat".concat(t.index)
            )
          );
        const o =
            a && a.find((e) => e.beatNum === t.index && e.voice === t.voice),
          s = o && o.editedNotes;
        t.staccato &&
          t.staccato.layer.visible &&
          e.push(
            Ct(
              "circle",
              {
                className: t.staccato.layer.voice ? "ex22w" : "ex1uy",
                cx: c,
                cy: -t.staccato.layer.y - 5,
                r: 2,
              },
              "st".concat(t.index)
            )
          ),
          t.accentuated &&
            t.accentuated.layer.visible &&
            e.push(
              Ct(
                "path",
                {
                  className: t.accentuated.layer.voice
                    ? "ex1x5 ex31z"
                    : "ex1x5",
                  d: "m"
                    .concat(c - 5)
                    .concat(-t.accentuated.layer.y - 2, "l9-3l-9-3"),
                },
                "acc".concat(t.index)
              )
            ),
          t.heavyAccentuated &&
            t.heavyAccentuated.layer.visible &&
            e.push(
              Ct(
                "path",
                {
                  className: t.heavyAccentuated.layer.voice
                    ? "ex1x5 ex31z"
                    : "ex1x5",
                  d: "m"
                    .concat(c - 4)
                    .concat(
                      -t.heavyAccentuated.layer.y - 2,
                      "l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7"
                    ),
                },
                "hacc".concat(t.index)
              )
            );
        for (const o of t.notes) {
          (!t.upStroke && !t.downStroke) ||
            o.tie ||
            ((h = Math.min(h, o.string)), (u = Math.max(u, o.string))),
            e.push(
              Ct(
                We,
                {
                  note: o,
                  beat: t,
                  part: i,
                  x: c,
                  platform: r,
                  edited: s && !!s.find((t) => t.string === o.string),
                },
                "note"
                  .concat(t.index, "-")
                  .concat(o.index, "-voice")
                  .concat(t.voice)
              )
            ),
            o.tieStart &&
              e.push(
                Ct(
                  Ze,
                  { start: o.tieStart, slicingMode: n, x: c },
                  "tie".concat(t.index, "-").concat(o.index)
                )
              ),
            o.tieEnd &&
              x(o.tieEnd) &&
              e.push(
                Ct(
                  Ze,
                  { end: o.tieEnd, slicingMode: n, x: c },
                  "tieEnd".concat(t.index, "-").concat(o.index)
                )
              ),
            o.slurStart &&
              e.push(
                Ct(
                  Ge,
                  { start: o.slurStart, slicingMode: n, x: c },
                  "slur".concat(t.index, "-").concat(o.index)
                )
              ),
            o.leftSlide &&
              e.push(
                Ct(po, {
                  note: o,
                  type: "left",
                  key: "slideShortLeft".concat(t.index, "-").concat(o.index),
                  x: c,
                })
              ),
            o.rightSlide &&
              "shift" !== o.rightSlide &&
              "legato" !== o.rightSlide &&
              e.push(
                Ct(po, {
                  note: o,
                  type: "right",
                  key: "slideShortRight".concat(t.index, "-").concat(o.index),
                  x: c,
                })
              ),
            o.slideStart &&
              e.push(
                Ct(
                  $e,
                  { note: o, cfx: o.slideStart, x: c },
                  "slide".concat(t.index, "-").concat(o.index)
                )
              ),
            o.slideEnd &&
              x(o.slideEnd) &&
              e.push(
                Ct(
                  $e,
                  { note: o, cfx: o.slideEnd, x: c },
                  "slideEnd".concat(t.index, "-").concat(o.index)
                )
              );
          const a = n.bendsForNote(o);
          for (let i = 0; i < a.length; i++) {
            const s = a[i];
            n.shouldDrawBendOnNote(s, o) &&
              e.push(
                Ct(
                  lo,
                  { cfx: s, note: o, slicingMode: n, x: c, platform: r },
                  "bend".concat(t.index, "-").concat(o.index, "-").concat(i)
                )
              );
          }
        }
        s &&
          s.forEach((o) =>
            e.push(
              Ct(
                ho,
                {
                  x: c,
                  fret: o.fret,
                  originalFret: o.originalFret,
                  string: o.string,
                },
                "editedNote".concat(t.index, "-").concat(o.string)
              )
            )
          ),
          i.usedDrums ||
            ((t.upStroke || t.downStroke) &&
              h < u &&
              e.push(
                Ct(
                  uo,
                  { up: !!t.upStroke, min: h, max: u, xoffset: c },
                  "stroke".concat(t.index)
                )
              ));
      }
    }
  return Ct(Bt, { children: e });
}
const yo =
    "M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
  fo = "M.8 0h15v3.5H.8z";
function go(t) {
  let {
    tripletFeel: { feel: e, layer: o },
    x: i,
  } = t;
  if (!o) return null;
  const { y: s } = o,
    n = "off" === e,
    a = "16th" === e,
    r = "8th" === e;
  return zt(
    "g",
    { transform: "translate(".concat(i, ",-").concat(s + 42, ")") },
    zt("path", { d: yo, transform: "translate(10,10)", className: "Bc72ex" }),
    zt("path", { d: yo, transform: "translate(25,10)", className: "Bc72ex" }),
    zt("path", { d: fo, transform: "translate(18,10)", className: "Bc72ex" }),
    a &&
      zt("path", { d: fo, transform: "translate(18,15)", className: "Bc72ex" }),
    zt("path", { d: yo, transform: "translate(48,10)", className: "Bc72ex" }),
    zt("path", { d: yo, transform: "translate(63,10)", className: "Bc72ex" }),
    (n || a) &&
      zt("path", { d: fo, transform: "translate(56,10)", className: "Bc72ex" }),
    a &&
      zt("path", {
        d: "M8.8 0h7v3.5h-7z",
        transform: "translate(56,15)",
        className: "Bc72ex",
      }),
    r &&
      zt("path", {
        d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
        transform: "translate(63,10)",
        className: "Bc72ex",
      }),
    !n && zt("text", { className: "Bc7xk", x: 64, y: 0 }, 3),
    !n && zt("path", { className: "Bc733l", d: "M51 7V4h9m7 0h9v3" }),
    zt("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: "Bc72ex" })
  );
}
var xo = {
  voice0: "h",
  voice1: "Bup2te",
  voice2: "Bupwd",
  voice3: "Bup1a0",
  "voice0-tremolo": "Bup2oc",
  "voice1-tremolo": "Bup138",
  "voice2-tremolo": "Bup2eq",
  "voice3-tremolo": "Bup1c7",
};
function vo(t) {
  const { voice: e, x: o, y: i, tremoloOffset: s } = t;
  if (e.hasSameRhythm) return null;
  const n = e.beats,
    a = b + s,
    r = a / 2;
  let l = "",
    c = "",
    p = 0;
  const h = [],
    u = new Array(4);
  let d = !1;
  for (const t of n) {
    const e = t.layout.x;
    1 !== t.type &&
      (l +=
        2 === t.type
          ? "M"
              .concat(o + e, ",")
              .concat(i + r + 2, "v")
              .concat(r)
          : "M"
              .concat(o + e, ",")
              .concat(i + 2, "v")
              .concat(a));
    let s = 0,
      h = 8;
    if ((t.beamStart ? (d = !0) : t.beamStop && (d = !1), d)) {
      if (t.index === n.length - 1)
        throw new Error("Something wrong with beaming model");
      const o = n[t.index + 1];
      let i = Math.min(t.type, o.type);
      for (t.tupletStop && (i = Math.min(i, 8)); h <= i; ) {
        let i = u[s];
        i
          ? (i.length += o.layout.x - t.layout.x)
          : ((i = { x: e, length: o.layout.x - t.layout.x }), (u[s] = i)),
          s++,
          (h *= 2);
      }
    }
    const m = s,
      y = s < p || t.tupletStop || t.beamStop;
    for (; s < p; s++, h *= 2) {
      const t = u[s];
      (u[s] = void 0),
        t &&
          (l += "M"
            .concat(o + t.x, ",")
            .concat(i + a - v * s, "v2h")
            .concat(t.length, "v-2z"));
    }
    for (; h <= t.type; s++, h *= 2)
      l += "M"
        .concat(o + e, ",")
        .concat(i + a - v * s, "v2h")
        .concat(y ? "-7" : "7", "v-2z");
    if (
      (t.dotted &&
        1 !== t.type &&
        (l += "M".concat(o + e + 4, ",").concat(i + a - v * s, "v2h2v-2z")),
      t.tremolo)
    )
      for (let s = 0; s < t.tremolo.type; s++)
        c += "M".concat(o + e - 5, ",").concat(i + 6 + 3 * s, "l10-3z");
    p = m;
  }
  if (l.length) {
    const t = "voice".concat(e.index);
    h.push(Ct("path", { className: xo[t], d: l }));
  }
  if (c.length) {
    const t = "voice".concat(e.index, "-tremolo");
    h.push(Ct("path", { className: xo[t], d: c }));
  }
  return h.length ? Ct(Bt, { children: h }) : null;
}
var bo = {
  path: "Fy3m",
  text: "Fy2jt",
  voice0: "Fy34q",
  voice1: "Fy6w",
  voice2: "Fy1xe",
  voice3: "Fy3v",
};
const wo = je(9);
function So(t) {
  let {
    tuplet: e,
    voice: o,
    start: i,
    stop: s,
    platform: n,
    x: a,
    y: r,
    tremoloOffset: l,
  } = t;
  const c = i.layout.x + a,
    p = s.layout.x - i.layout.x,
    h = Math.round(p / 2),
    u = e > 9 ? 8 : 5,
    d = "M 0,0 L 0,6 "
      .concat(h - u, ",6 M ")
      .concat(h + u, ",6 L ")
      .concat(p, ",6 ")
      .concat(p, ",0");
  r += w - 2 + l;
  const m = "voice".concat(o.index);
  return Ct("g", {
    className: bo[m],
    transform: "translate(".concat(c, ",").concat(r, ")"),
    children: [
      Ct("text", { className: bo.text, x: h, y: wo(n), children: e }),
      Ct("path", { className: bo.path, d }),
    ],
  });
}
function Lo(t) {
  const { layer: e, alternateEnding: o } = t.alternateEnding;
  if (e) {
    const { x1: i, x2: s, y: n } = e,
      a = s - i,
      r = t.x;
    return zt(
      "g",
      { transform: "translate(".concat(r, ",").concat(-1 * n - 14, ")") },
      zt("text", { className: "Bee2b8", x: 4, y: "14" }, o.join(",")),
      zt("path", {
        className: "Bee1no",
        d: "M 1,14 L 1,0 ".concat(a - 6, ",0"),
      })
    );
  }
  return null;
}
function _o(t) {
  let { marker: e, x: o } = t;
  const i = e.layer;
  return i
    ? Ct("text", {
        className: "B6i262",
        x: o,
        y: -1 * i.y,
        dy: "-0.25em",
        children: e.text,
      })
    : null;
}
function No(t) {
  let { line: e, x: o } = t;
  const i = (e.strings - 1) * l;
  return zt(
    "g",
    { className: "Rep", transform: "translate(".concat(o, ",0)") },
    zt("rect", { className: "B0i2q7", width: 4, height: i }),
    zt("path", { className: "B0imb", d: "M 8,0 L 8,".concat(i) }),
    zt("ellipse", {
      className: "B0i1ux",
      cx: 13,
      cy: Math.floor(i / 3),
      rx: 2,
      ry: 2,
    }),
    zt("ellipse", {
      className: "B0i1ux",
      cx: 13,
      cy: Math.floor((2 * i) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
function Mo(t) {
  let { line: e, measure: o, x: i } = t;
  const s = (e.strings - 1) * l;
  return zt(
    "g",
    { transform: "translate(".concat(o.layout.width - 18 + i, ",0)") },
    o.repeat > 2 &&
      zt("text", { className: "B0ija", x: 2.5, y: -2 }, o.repeat + "x"),
    zt("rect", { className: "B0i2q7", x: 14, width: 4, height: s }),
    zt("path", { className: "B0imb", d: "M 11,0 L 11,".concat(s) }),
    zt("ellipse", {
      className: "B0i1ux",
      cx: 6,
      cy: Math.floor(s / 3),
      rx: 2,
      ry: 2,
    }),
    zt("ellipse", {
      className: "B0i1ux",
      cx: 6,
      cy: Math.floor((2 * s) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
const To = je(-8),
  ko = je(21);
function Po(t) {
  const {
      measure: e,
      line: o,
      part: i,
      slicingMode: s,
      measureEditorData: n,
      platform: a,
    } = t,
    r = e.layout.x,
    c = [
      Ct(
        "text",
        { className: "m", x: 3 + r, y: -7.2, children: e.index + 1 },
        "number"
      ),
    ];
  if (0 === e.width) return;
  e.repeatStart && c.push(Ct(No, { line: o, x: r }, "repeatStart"));
  const p = e.tripletFeel;
  p && c.push(Ct(go, { tripletFeel: p, x: r }, "tripletFeel")),
    e.repeat && c.push(Ct(Mo, { line: o, measure: e, x: r }, "repeat")),
    e.alternateEnding &&
      c.push(
        Ct(Lo, { alternateEnding: e.alternateEnding, x: r }, "alternateEnding")
      ),
    e.marker && c.push(Ct(_o, { marker: e.marker, x: r }, "marker"));
  for (const t of e.tempoLayouts.values()) {
    const { tempo: e, layer: o } = t;
    e &&
      o &&
      c.push(
        Ct(
          "g",
          {
            className: "vssu",
            transform: "translate(".concat(o.x1, ",").concat(-1 * o.y, ")"),
            children: [
              Ct("use", { xlinkHref: "#tempo" }),
              Ct("text", {
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
  let h = 0;
  for (const t of e.beatsLayoutsByTime.values())
    c.push(
      Ct(
        mo,
        {
          layout: t,
          part: i,
          measure: e,
          slicingMode: s,
          x: r,
          measureEditorData: n,
          platform: a,
        },
        "beat".concat(h)
      )
    ),
      h++;
  if (e.hasSignature) {
    const t = Math.floor((i.strings / 2) * l);
    c.push(
      Ct(
        "text",
        { className: "vscf", x: S + r, y: t + To(a), children: e.signature[0] },
        "t1"
      )
    ),
      c.push(
        Ct(
          "text",
          {
            className: "vscf",
            x: S + r,
            y: t + ko(a),
            children: e.signature[1],
          },
          "t2"
        )
      );
  }
  if (e.rhythmLines) {
    let t = 0,
      i = l * o.strings;
    for (const s of e.voices)
      if (!s.hasSameRhythm && !s.rest) {
        const e = s.beats,
          n = o.rhythmEffects.tremolo.get(s.index) || !1,
          l = o.rhythmEffects.tremolo.get(s.index) || !1,
          p = e.some((t) => t.type > 8),
          h = n && p ? L : 0,
          u = h + (l ? _ : 0),
          d = i + s.index * (w + u);
        c.push(
          Ct(
            vo,
            { voice: s, x: r, y: d, tremoloOffset: h },
            "rhythm".concat(s.index)
          )
        ),
          (i = d);
        let m = 0,
          y = null;
        for (const e of s.beats)
          e &&
            (e.tupletStart && ((m = e.tuplet), (y = e)),
            m &&
              y &&
              e.tupletStop &&
              (c.push(
                Ct(
                  So,
                  {
                    tuplet: m,
                    start: y,
                    stop: e,
                    voice: s,
                    platform: a,
                    x: r,
                    y: d,
                    tremoloOffset: h,
                  },
                  "tuplet".concat(t)
                )
              ),
              (m = 0),
              t++));
      }
  }
  return Ct(Bt, { children: c });
}
const Eo = (t, e) => t + "H".concat(e.x, "m").concat(e.w, ",0");
function Co(t) {
  let { line: e, hasTuning: o, slicingMode: i, part: s } = t;
  const n = e.spaces,
    a = l * (e.strings - 1);
  let r = "";
  const c = e.measures;
  for (let t = o ? 1 : 0; t < c.length; t++) {
    const e = c[t];
    r += "M".concat(e.layout.x, ",0v").concat(a);
  }
  const p = c[0].layout.x,
    h = i.stringLineMaxX(e);
  if (s.usedDrums && s.isDrumStdOn)
    for (let t = 0; t < e.strings; t++)
      r += "M"
        .concat(p, ",")
        .concat(l * t, " H")
        .concat(h);
  else
    for (let t = 0; t < e.strings; t++)
      r +=
        "M".concat(p, ",").concat(l * t) + n[t].reduce(Eo, "") + "H".concat(h);
  const u = i.finalVerticalSeparatorPosition(e);
  return (
    u && (r += "H".concat(u)),
    (r += "V0"),
    Ct("path", { className: Vt.strings, d: r })
  );
}
function Bo(t) {
  let { tuning: e } = t;
  return e
    ? zt(
        Bt,
        null,
        N(e, !1).map((t, e) =>
          zt(
            "text",
            { x: 0, y: e * l, key: e, className: "C8nsu" },
            ((t, e) => (0 === e ? t.toLowerCase() : t))(t, e)
          )
        )
      )
    : null;
}
function Do(t) {
  const {
      inlineDefs: e,
      line: o,
      noPadding: i,
      part: s,
      tuning: n,
      slicingMode: a,
      lazy: r,
      tabEditorData: l,
      platform: c,
    } = t,
    p = a.expectedSliceWidth(o.width) + (i ? 0 : g),
    h = "http://www.w3.org/2000/svg",
    u = o.layout.height,
    d = ""
      .concat(i ? 0 : -g / 2, " -")
      .concat(o.layout.layers.height, " ")
      .concat(p, " ")
      .concat(u);
  if (!c) {
    const [t, e] = Xt(o.index < 5),
      i = It();
    if (
      (At(() => {
        if (!t && r)
          try {
            const t = new IntersectionObserver(
              (t) => {
                t[0].isIntersecting && e(!0);
              },
              { rootMargin: "0px 0px 500px 0px" }
            );
            return i.current && t.observe(i.current), () => t.disconnect();
          } catch (t) {
            requestAnimationFrame(() => e(!0));
          }
      }, [t, r]),
      !t && r)
    )
      return Ct("svg", {
        xmlns: h,
        version: "1.1",
        ref: i,
        width: p,
        viewBox: d,
        className: "n",
      });
  }
  const m = o.capo,
    y = !!m && !c,
    f = !!n;
  return Ct("svg", {
    xmlns: h,
    version: "1.1",
    width: p,
    viewBox: d,
    className: "n",
    children: [
      e && Ct(Re, { part: s }),
      f && Ct(Bo, { tuning: n }),
      y && Ct(Ut, m),
      Ct(Co, { line: o, hasTuning: f, slicingMode: a, part: s }),
      ...o.hangingText.map((t, e) =>
        Ct(Fe, { text: t, layout: void 0, xoffset: 0 }, e.toString())
      ),
      Ct(qe, { line: o }),
      ...o.measures.map((t) =>
        Ct(
          Po,
          {
            measure: t,
            line: o,
            part: s,
            slicingMode: a,
            measureEditorData: l && l[t.index] && l[t.index].beats,
            platform: c,
          },
          t.index.toString()
        )
      ),
    ],
  });
}
function zo(t) {
  let {
    lines: e,
    part: o,
    tuning: i,
    slicingMode: s,
    lazy: n,
    tabEditorData: a,
    platform: r,
  } = t;
  return Ct(Bt, {
    children: e.map((t) =>
      Ct(
        Do,
        {
          line: t,
          part: o,
          tuning: 0 === t.index && i,
          slicingMode: s,
          tabEditorData: a,
          lazy: n,
          platform: r,
        },
        t.index.toString()
      )
    ),
  });
}
var Xo = Et((t) =>
  Ct(Bt, {
    children: [
      Ct("svg", {
        width: 0,
        viewBox: "0 0 0 0",
        className: "Cxrdx",
        children: Ct(Re, { part: t.part }),
      }),
      Ct(zo, t),
    ],
  })
);
function Ao(t) {
  let {
    reference: e,
    firstLineLayoutHeigth: o,
    handlePitchshift: i,
    isActive: s,
    isPitchshiftToStandard: n,
  } = t;
  const {
      player: { pitchShift: r },
    } = a("player"),
    l = o - 47;
  let c = "Shift pitch (R)";
  0 !== r
    ? (c = "Pitch shifted (R)")
    : n && (c = "Pitch can be shifted to match standard tuning (R)");
  const p = 5 * (Math.abs(r).toString(10).length - 1) + (r > 0 ? 2 : 0);
  return zt(
    "g",
    {
      vectorEffect: "non-scaling-stroke",
      transform: "translate(-8 ".concat(l, ")"),
      className: s ? "Bls16p Bls1wi" : "Bls16p",
      onClick: i,
      "data-tab-button": "tuning-button",
    },
    zt("title", null, c),
    zt("rect", {
      x: 0,
      y: 3,
      rx: 4,
      ry: 4,
      width: 25,
      height: 23,
      filter: "url(#svg_shadow)",
      className: "Bls1ap",
      ref: e,
    }),
    zt("path", {
      d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
      "stroke-width": "1.3",
    }),
    zt("path", {
      d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
      "stroke-width": "1.6",
    }),
    (n || 0 !== r) &&
      zt("rect", {
        x: 18,
        y: 0,
        width: 13 + p,
        height: 13,
        rx: 6.5,
        ry: 6.5,
        className: "Bls178",
      }),
    0 !== r &&
      zt("text", { x: 20, y: 9.5 }, "".concat(r > 0 ? "+" : "").concat(r))
  );
}
function Io(t) {
  let { up: e } = t;
  return zt(
    "svg",
    { width: "44", height: "46", role: "img" },
    zt("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
    zt("path", {
      d: e ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
    })
  );
}
const Ro = (t) =>
  t.current &&
  (k(t.current.instrumentId) || P(t.current.instrumentId)) &&
  t.current.tuning;
class Fo extends Dt {
  constructor(t) {
    super(t),
      Fo.prototype.__init.call(this),
      Fo.prototype.__init2.call(this),
      Fo.prototype.__init3.call(this),
      Fo.prototype.__init4.call(this),
      Fo.prototype.__init5.call(this),
      Fo.prototype.__init6.call(this),
      (this.keyMap = {
        enter: this.hidePopup,
        left: this.tuneDown,
        down: this.tuneDown,
        up: this.tuneUp,
        right: this.tuneUp,
      });
  }
  __init() {
    this.hidePopup = (t) => {
      t.preventDefault(), this.props.dispatch("layer/hide");
    };
  }
  componentDidMount() {
    window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
  }
  componentWillUnmount() {
    window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
    const { player: t, ensureLineVisibility: e, part: o } = this.props;
    if (e && o.current) {
      const i = M(o.current, t.audio.getCursor(), "left");
      i && e(null, i.measureLayout.lineLayout, !1);
    }
  }
  __init2() {
    this.tuneUp = (t) => {
      t.preventDefault();
      const { pitchShift: e } = this.props.player;
      e < 12 && T(this.props.store, e + 1);
    };
  }
  __init3() {
    this.tuneDown = (t) => {
      t.preventDefault();
      const { pitchShift: e } = this.props.player;
      e > -12 && T(this.props.store, e - 1);
    };
  }
  __init4() {
    this.reset = (t) => {
      t.preventDefault(), T(this.props.store, 0);
    };
  }
  __init5() {
    this.renderCurrentTuning = () => {
      if (Ro(this.props.part)) {
        const t = this.props.part.current.tuning.map(
          (t) => t + this.props.player.pitchShift
        );
        return zt(
          "div",
          { className: "D0l11f D0lsm", "aria-label": "Current tuning" },
          zt("div", { className: "D0l124" }, "CURRENT TUNING"),
          zt("div", { id: "tuning", className: "D0l3u" }, E(t))
        );
      }
      return null;
    };
  }
  __init6() {
    this.renderQuickButton = () => {
      if (0 !== this.props.player.pitchShift)
        return zt(
          "button",
          {
            className: "D0lvz D0l1rc",
            onClick: this.reset,
            role: "button",
            "aria-label": "Restore original tuning",
          },
          "Restore original tuning"
        );
      if (Ro(this.props.part)) {
        const t = C(
          this.props.part.current.instrumentId,
          this.props.part.current.tuning
        );
        if (t && 0 !== t.pitch) {
          let e = t.tuningName;
          return (
            "STANDARD TUNING" === e && (e = "Standard tuning"),
            zt(
              "button",
              {
                className: "D0lvz D0l1rc",
                role: "button",
                "aria-label": "Quick shift pitch",
                onClick: () => {
                  T(this.props.store, t.pitch);
                },
              },
              "Convert to ".concat(e)
            )
          );
        }
      }
      return zt(
        "button",
        {
          className: "D0lvz D0l1rc D0l1gp",
          role: "button",
          disabled: !0,
          "aria-label": "Restore original tuning",
        },
        "Restore original tuning"
      );
    };
  }
  render() {
    const t = this.renderQuickButton(),
      e = this.renderCurrentTuning(),
      { pitchShift: o } = this.props.player,
      { tab: i, tuningButton: s, mobile: n } = this.props;
    let a = 0,
      r = 0,
      l = "D0l1ig";
    if (n) (a = -71), (r = -235), (l = "D0l1ig D0l16m");
    else if (((a = this.props.firstLineLayoutHeigth - 58), (r = 55), i && s)) {
      const t = i.getBoundingClientRect(),
        e = s.getBoundingClientRect();
      (r = e.left - t.left + e.width + 21),
        (a = e.top + e.height - t.top - 77.5);
    }
    return zt(
      "div",
      {
        className: l,
        title: "You can use arrow keys",
        role: "dialog",
        "aria-label": "Shift Pitch",
        style: { top: "".concat(a, "px"), left: "".concat(r, "px") },
      },
      e || zt("div", { className: "D0l1z3" }),
      zt(
        "div",
        { className: "D0l11f D0l29v" },
        zt(
          "button",
          {
            className: "D0lvz D0lvp",
            onClick: this.tuneDown,
            disabled: o <= -12,
            "aria-label": "Step down",
          },
          zt(Io, { up: !1 })
        ),
        zt(
          "span",
          { className: "D0l1by", "aria-label": "Current pitch" },
          (o > 0 ? "+" : "") + o
        ),
        zt(
          "button",
          {
            className: "D0lvz D0lvp",
            onClick: this.tuneUp,
            disabled: o >= 12,
            "aria-label": "Step up",
          },
          zt(Io, { up: !0 })
        )
      ),
      t
    );
  }
}
var Ho = r(Fo, "player", "part"),
  Oo = {
    wrap: "Cmfli",
    shadow: "Cmf35k",
    body: "Cmfed",
    loading: "Cmf8e",
    icon: "Cmf1mc",
  };
function Yo(t) {
  return Math.round(1e4 * t) / 1e4;
}
function Vo(t) {
  let { width: e, height: o } = t;
  const i = 1 * e,
    s = (function (t, e, o, i, s, n, a) {
      const r = 0.95 * o,
        l = 0.45 * o,
        c = 0.6 * o,
        p = 0.3 * o,
        h = Math.atan2(r, o / 2),
        u = Math.sin(h),
        d = Math.cos(h),
        m = c * u,
        y = c * d,
        f = p * u,
        g = p * d;
      return "M "
        .concat(Yo(t + y), ",")
        .concat(Yo(e + m), "\n     Q ")
        .concat(Yo(t), ",")
        .concat(Yo(e), " ")
        .concat(Yo(t + l), ",")
        .concat(Yo(e), "\n     L ")
        .concat(Yo(t + o - l), ",")
        .concat(Yo(e), "\n     Q ")
        .concat(Yo(t + o), ",")
        .concat(Yo(e), " ")
        .concat(Yo(t + o - y), ",")
        .concat(Yo(e + m), "\n     L ")
        .concat(Yo(t + o / 2 + g), ",")
        .concat(Yo(e + r - f), "\n     Q ")
        .concat(Yo(t + o / 2), ",")
        .concat(Yo(e + r), " ")
        .concat(Yo(t + o / 2 - g), ",")
        .concat(Yo(e + r - f), "\n     z");
    })((e - i) / 2, 0.33 * e, i),
    n = (function (t, e, o) {
      const i = t / 2,
        s = Yo(1.3 * i),
        n = Yo(i);
      return "M 0,"
        .concat(s, "\n     Q 0,0 ")
        .concat(n, ",0 q ")
        .concat(n, ",0 ")
        .concat(n, ",")
        .concat(s, "\n     v ")
        .concat(Yo(e - 2 * s), "\n     q 0,")
        .concat(s, " -")
        .concat(n, ",")
        .concat(s, " q -")
        .concat(n, ",0 -")
        .concat(n, ",-")
        .concat(s, "\n     v -")
        .concat(Yo(e - 2 * s));
    })(e, o);
  return zt(
    Bt,
    null,
    zt("path", {
      className: Oo.shadow,
      filter: "url(#CursorShadow)",
      d: n,
      key: "shadow",
    }),
    zt("path", { className: Oo.body, d: n, key: "body" }),
    zt("path", { className: Oo.icon, d: s, key: "path" })
  );
}
function qo(t, e) {
  const o = t.measureLayout,
    i = e.measureLayout;
  return o !== i
    ? o.lineLayout !== i.lineLayout || o.measure.index + 1 !== i.measure.index
    : t.x >= e.x;
}
const jo = (t) => t.player.shouldPlay && t.player.canPlay,
  Uo = g / 2,
  Wo = (t, e, o, i) => {
    let s = o.stringY;
    if (1 !== t) {
      s = 0;
      for (const e of i) {
        if (e === o.line) break;
        s += Math.round(t * e.layout.height);
      }
      s = s / t + o.layers.height;
    }
    return Go(t, e, s);
  },
  Ko = (t, e, o, i) => Go(t, e, o.stringY),
  Go = (t, e, o) =>
    (1 === t ? "" : "scale(".concat(t, ") ")) +
    " translate3d(".concat(e - A / 2 + Uo, "px, ").concat(o - z, "px, 0)");
class Qo extends Dt {
  __init() {
    this.el = It();
  }
  constructor(t) {
    super(t),
      Qo.prototype.__init.call(this),
      Qo.prototype.__init2.call(this),
      Qo.prototype.__init3.call(this),
      Qo.prototype.__init4.call(this),
      Qo.prototype.__init5.call(this),
      Qo.prototype.__init6.call(this),
      Qo.prototype.__init7.call(this),
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
          ? Wo
          : Ko);
  }
  componentDidMount() {
    this.animationSeek(!1),
      this.state.visible || this.setState({ visible: !0 }),
      window.hotKeysManager.bind(this.keyMap, { onTab: !0 });
  }
  componentDidUpdate(t) {
    const e = this.props,
      o = e.part !== t.part || e.lines !== t.lines,
      i = e.player.position.cursor !== t.player.position.cursor;
    if (
      ((o || i) &&
        ((this.layout = null),
        (this.layoutTimestamp = 0),
        (this.nextLayout = null),
        (this.nextLayoutTimestamp = 0)),
      e.scale !== t.scale ||
        o ||
        i ||
        e.player.speed !== t.player.speed ||
        e.player.type !== t.player.type ||
        e.player.pitchShift !== t.player.pitchShift ||
        jo(e) !== jo(t))
    ) {
      let o = this.animationSeek;
      jo(t)
        ? (o = jo(e) ? this.animationRestart : this.animationPause)
        : jo(e) && (o = this.animationPlay);
      const i = t.part === e.part && t.lines === e.lines;
      o.call(this, i);
    }
  }
  componentWillUnmount() {
    (this.pause = !0),
      this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
      window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
  }
  applyCursorCoordinates(t) {
    const { el: e, layout: o, nextLayout: i, layoutTimestamp: s } = this;
    let n;
    if (i && qo(o, i)) {
      const t = o.absoluteLoopRightX - o.absoluteX,
        a = i.absoluteX - i.absoluteLoopLeftX,
        r = (o.duration * t) / (t + a),
        l = o.duration - r;
      n = (n) => {
        const c = n - s;
        e.current.style.transform =
          c < r
            ? this.formatTransform(
                this.props.scale,
                o.absoluteX + (t * c) / r,
                o.measureLayout.lineLayout,
                this.props.lines
              )
            : this.formatTransform(
                this.props.scale,
                i.absoluteLoopLeftX + (a * (c - r)) / l,
                i.measureLayout.lineLayout,
                this.props.lines
              );
      };
    } else {
      const t = i
        ? i.absoluteX - o.absoluteX
        : o.absoluteLoopRightX - o.absoluteX;
      n = (i) => {
        e.current.style.transform = this.formatTransform(
          this.props.scale,
          o.absoluteX + (t * (i - s)) / o.duration,
          o.measureLayout.lineLayout,
          this.props.lines
        );
      };
    }
    return n(t), n;
  }
  updateCurrentTempo(t) {
    const e = this.props.part.tempos,
      o = (o) =>
        e[o].timestamp <= t && (o === e.length - 1 || t < e[o + 1].timestamp);
    this.tempoIndex >= e.length && (this.tempoIndex = 0),
      o(this.tempoIndex) ||
        ((this.tempoIndex = e.findIndex((t, e) => o(e))),
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
      const e = B(this.props.part, t),
        { timeline: o, timestamps: i } = this.props.part;
      (this.layoutTimestamp = i[e]),
        (this.layout = o.get(this.layoutTimestamp));
      let s = e < i.length - 1 ? i[e + 1] : null;
      const n = this.props.player.position.loopEnd;
      return (
        0 !== n &&
          (null === s || s >= n - 1e-15) &&
          (s = this.props.player.position.loopStart),
        (this.nextLayout = null !== s ? o.get(s) : null),
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
    const o = this.props.player.audio.getCursor();
    this.findLayoutUnderCursor(o);
    let i = this.applyCursorCoordinates(o),
      s = null;
    const n = () => {
      const t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
        e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
        o = ((this.layout.duration * t) / (t + e)) * 0.8;
      return (
        (s = (t) =>
          !!(this.layout && this.nextLayout && t - this.layoutTimestamp > o) &&
          (this.props.ensureLineVisibility(
            this.layout.measureLayout.lineLayout,
            this.nextLayout.measureLayout.lineLayout,
            !1
          ),
          (s = null),
          !0)),
        s
      );
    };
    (this.nextLayout && qo(this.layout, this.nextLayout) && n()(o)) ||
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
            i && i(t),
              s && s(t),
              this.findLayoutUnderCursor(t) &&
                ((i = this.applyCursorCoordinates(t)),
                this.nextLayout && qo(this.layout, this.nextLayout) && n(),
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
      this.props.dispatch("player/togglePlay", !1);
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
    this.handleBackspace = (t) => {
      t.preventDefault();
      const { loopStart: e, loopEnd: o } = this.props.player.position;
      this.props.dispatch("player/moveCursor", {
        cursor: e,
        loopStart: e,
        loopEnd: o,
      });
    };
  }
  __init4() {
    this.handleLeft = (t) => {
      t.preventDefault();
      const { part: e } = this.props,
        { loopStart: o, loopEnd: i } = this.props.player.position,
        s = M(e, this.props.player.audio.getCursor(), "left"),
        n = s.measureLayout.measure.index,
        a = s.measureLayout.measure.beatsLayouts[0];
      let r = o;
      if (s !== a) {
        const t = a.leftTime;
        r = t > o ? t : o;
      } else if (n > 0) {
        const { rightTime: t, leftTime: s } = e.measures[n - 1].beatsLayouts[0];
        r = 0 === i || o <= s ? s : o <= t ? t : o;
      }
      this.props.dispatch("player/moveCursor", {
        cursor: r,
        loopStart: o,
        loopEnd: i,
      });
    };
  }
  __init5() {
    this.handleRight = (t) => {
      t.preventDefault();
      const { part: e } = this.props,
        { loopStart: o, loopEnd: i } = this.props.player.position,
        s = M(e, this.props.player.audio.getCursor(), "left").measureLayout
          .measure.index;
      let n = null;
      if (s < e.measures.length - 1) {
        const { rightTime: t, leftTime: o } = e.measures[s + 1].beatsLayouts[0];
        0 === i || t < i ? (n = t) : o < i && (n = o);
      }
      null !== n &&
        this.props.dispatch("player/moveCursor", {
          cursor: n,
          loopStart: o,
          loopEnd: i,
        });
    };
  }
  __init6() {
    this.handleUp = (t) => {
      t.preventDefault();
      const { part: e } = this.props,
        { loopStart: o, loopEnd: i } = this.props.player.position,
        s = M(e, this.props.player.audio.getCursor(), "left"),
        n = s.measureLayout.lineLayout.line.index;
      if (n > 0) {
        const t = this.props.lines[n - 1],
          e = D(t, s.absoluteX, "left");
        let a = null;
        const { rightTime: r, leftTime: l } = e;
        0 === i || o <= l ? (a = l) : o <= r && (a = r),
          null !== a &&
            this.props.dispatch("player/moveCursor", {
              cursor: a,
              loopStart: o,
              loopEnd: i,
            });
      }
    };
  }
  __init7() {
    this.handleDown = (t) => {
      t.preventDefault();
      const { part: e } = this.props,
        { loopStart: o, loopEnd: i } = this.props.player.position,
        s = M(e, this.props.player.audio.getCursor(), "left"),
        n = s.measureLayout.lineLayout.line.index;
      if (n < this.props.lines.length - 1) {
        const t = this.props.lines[n + 1],
          e = D(t, s.absoluteX, "left");
        let a = null;
        const { rightTime: r, leftTime: l } = e;
        0 === i || r < i ? (a = r) : l < i && (a = l),
          a &&
            this.props.dispatch("player/moveCursor", {
              cursor: a,
              loopStart: o,
              loopEnd: i,
            });
      }
    };
  }
  render() {
    const t = A,
      e = (this.props.part.strings - 1) * l + z + X,
      o = !(this.props.player.canPlay || this.props.route.isPanel);
    return zt(
      "div",
      { className: Oo.wrap, ref: this.el },
      this.state.visible &&
        !this.props.hidden &&
        zt(
          "svg",
          { width: t, height: e, className: o ? Oo.loading : Oo.normal },
          zt(
            "defs",
            {},
            zt(
              "filter",
              { id: "CursorShadow", x: "-40%", width: "180%" },
              zt("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2" }),
              zt("feOffset", { dx: "0", dy: "2" })
            )
          ),
          zt(Vo, { width: t, height: e })
        )
    );
  }
}
var Zo = r(Qo, "player", "route", "browser");
class Jo extends Dt {
  render() {
    const { x: t, layout: e, handle: o } = this.props,
      i = e.measureLayout.lineLayout,
      s = i.loopY + 10,
      n = i.loopHeight - 20,
      a = "translate(".concat(t, ",").concat(s, ")"),
      r = "left" === o ? "matrix(-1,0,0,1,1,0)" : "",
      l = Math.floor(n / 2);
    return zt(
      "g",
      { className: "Cqz26s", transform: a, "data-loop-handle": o },
      zt("path", {
        d: "M0 "
          .concat(l - 12, "q15 0 15 12t-15 12m1 0v")
          .concat(l - 12, "h-2 v-")
          .concat(n, "h2z"),
        className: "Cqz2o9",
        transform: r,
      }),
      zt("path", {
        d: "M8 ".concat(l - 4.5, "l-4.5 4.5l4.5 4.5"),
        className: "Cqzp7",
        transform: r,
      }),
      zt("rect", {
        x: -10,
        y: -1,
        height: n,
        width: 27,
        transform: r,
        className: "Cqz154",
      })
    );
  }
}
class $o extends Dt {
  render() {
    const { leftLayout: t, rightLayout: e, lines: o } = this.props,
      i = t.absoluteLoopLeftX,
      s = e.absoluteLoopRightX,
      n = t.measureLayout.lineLayout,
      a = e.measureLayout.lineLayout,
      r = "Cqz1rb";
    if (n === a)
      return zt("rect", {
        className: r,
        rx: 3,
        height: n.loopHeight,
        x: i,
        y: n.loopY,
        width: s - i + 1,
      });
    const l = n.line.index,
      c = a.line.index,
      p = c - l,
      h = new Array(p + 1);
    (h[0] = zt("rect", {
      className: r,
      rx: 3,
      height: n.loopHeight,
      x: i,
      y: n.loopY,
      width: n.maxX - i,
      key: l,
    })),
      (h[p] = zt("rect", {
        className: r,
        rx: 3,
        height: a.loopHeight,
        x: a.minX,
        y: a.loopY,
        width: s - a.minX,
        key: c,
      }));
    for (let t = l + 1; t < c; t++) {
      const e = o[t].layout;
      h[t - l] = zt("rect", {
        className: r,
        rx: 3,
        height: e.loopHeight,
        x: e.minX,
        y: e.loopY,
        width: e.maxX,
        key: t,
      });
    }
    return zt("g", null, h);
  }
}
const ti = "scrollBehavior" in document.documentElement.style;
class ei {
  constructor() {
    ei.prototype.__init.call(this),
      (this.y = 0),
      (this.startY = 0),
      (this.startTime = 0),
      (this.scrollId = void 0);
  }
  scroll(t, e, o) {
    if (
      (this.scrollId &&
        (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
      ti)
    )
      window.scrollTo({ left: 0, top: t, behavior: e ? "instant" : "smooth" });
    else {
      const i =
        o ||
        (window.visualViewport
          ? window.visualViewport.pageTop
          : window.scrollY);
      if (e || Math.abs(t - i) <= 5) window.scrollTo(0, t);
      else {
        (this.y = t), (this.startY = i), (this.startTime = I());
        const e = window.requestAnimationFrame;
        this.scrollId = e(this.animationLoop);
      }
    }
  }
  __init() {
    this.animationLoop = () => {
      const t =
        ((e = Math.min((I() - this.startTime) / 100, 1)),
        0.5 * (1 - Math.cos(Math.PI * e)));
      var e;
      const o = this.startY + (this.y - this.startY) * t;
      if ((window.scrollTo(0, o), o !== this.y)) {
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
function oi(t) {
  let {
      title: e,
      mobile: o,
      leftOffset: i,
      topOffset: s,
      horizontal: n,
      device: a,
    } = t,
    r = o ? "Crg11j Crg2kf Crg25i" : n ? "Crg11j Crg2by" : "Crg11j Crg2kf",
    l = {};
  void 0 !== i &&
    void 0 !== s &&
    ((l = { top: "".concat(s, "px"), left: "".concat(i, "px") }),
    (r = "Crg11j Crg170"));
  let c = "subscribe in the app";
  return (
    R(a.os) && (c = "buy in the app"),
    zt(
      "div",
      { role: "dialog", className: r, style: l },
      zt(
        F,
        {
          source: "popup",
          attrs: {
            className: "Crg1fe",
            "aria-label": "".concat(e, " ").concat(c),
          },
        },
        zt(
          "div",
          null,
          zt("div", { className: "Crg19s" }, e),
          zt("div", { className: "Crg1tt" }, c)
        ),
        R(a.os)
          ? zt("img", { src: se, width: 160, height: 47, alt: "Google Play" })
          : zt("img", { src: ne, width: 160, height: 53, alt: "AppStore" })
      )
    )
  );
}
function ii(t) {
  let { tab: e, tuningButton: o } = t;
  const { device: i } = a("device");
  let s = 0,
    n = 0;
  if (e && o) {
    const t = e.getBoundingClientRect(),
      i = o.getBoundingClientRect();
    (s = i.left - t.left + i.width + 21),
      (n = i.top - t.top - (23 - i.height) - 14.5),
      n < 2 && (n = 2);
  }
  return R(i.os) || H(i.os)
    ? zt(oi, { title: "Pitch Shift", device: i, leftOffset: s, topOffset: n })
    : zt(Wt, {
        title: "Pitch Shift",
        classPrefix: "pitchshift",
        leftOffset: s,
        topOffset: n,
      });
}
const si = /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
function ni(t) {
  let { children: e, styles: o } = t;
  const i = e
    .replace(si, (t) => "" + t + "")
    .split("")
    .map((t, e) =>
      si.test(t)
        ? zt(
            "a",
            {
              className: o.link,
              key: "url".concat(e),
              href: t,
              rel: "noopener noreferrer ugc",
              target: "_blank",
            },
            t
          )
        : zt(Bt, { key: "text".concat(e) }, t)
    );
  return zt("p", { className: o.message }, i);
}
var ai = {
  wrapper: "B8y7s",
  header: "B8y2e0",
  loader: "B8y3",
  title: "B8y27h",
  marker: "B8y29q",
  bar: "B8y2eg",
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
  errorTitle: O + " B8y2e1",
};
const ri = () =>
    zt(
      "svg",
      { width: "10", height: "12" },
      zt("path", {
        d: "M9.4 2.3l-.7 8.3c-.1.8-.8 1.4-1.6 1.4H2.9c-.8 0-1.5-.6-1.6-1.4L.6 2.3zM3 3.8c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.4 7.1c0 .2.2.3.3.3.2 0 .4-.1.4-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l.1 7.1c0 .2.1.3.3.3.2 0 .3-.1.3-.3zm2.4 0c0-.2-.2-.4-.4-.4s-.4.2-.4.4l-.3 7.1c0 .2.2.3.4.3.1 0 .3-.1.3-.3zm2.2-2H0C0 1.3.3.9.8.9h2.4c.1-.5.4-.9.8-.9h1.8c.5 0 .9.4 1 .9h2.5c.4 0 .7.4.7.9z",
      })
    ),
  li = Object.assign({}, Y, Kt, { title: ai.errorTitle });
class ci extends Dt {
  __init() {
    this.message = It();
  }
  constructor(t) {
    super(t),
      ci.prototype.__init.call(this),
      ci.prototype.__init2.call(this),
      ci.prototype.__init3.call(this),
      ci.prototype.__init4.call(this),
      ci.prototype.__init5.call(this),
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
    this.addAnnotation = async (t) => {
      t.preventDefault();
      const e = this.message.current;
      if (!e) throw new Error("Wrong textarea value state");
      try {
        V([{ field: e, validator: q }]),
          this.setState({ processing: !0, error: null });
        const t = this.props.annotations.measure,
          { meta: o, user: i } = this.props;
        await j(this.props.dispatch, {
          meta: o,
          user: i,
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
    var t = this;
    this.toggleNotification = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      t.setState({ notificationId: e });
    };
  }
  __init4() {
    this.removeAnnotation = async (t) => {
      t.preventDefault();
      try {
        if (
          (this.setState({ notifyProcessing: !0, error: null }),
          this.state.notificationId)
        ) {
          const t = this.props.annotations.measure,
            { notificationId: e } = this.state,
            { meta: o, user: i } = this.props;
          await U(this.props.dispatch, { meta: o, user: i, id: e, measure: t });
        }
        this.setState({ notifyProcessing: !1, error: null, notificationId: 0 });
      } catch (t) {
        console.error(t), this.setState({ error: t, notifyProcessing: !1 });
      }
    };
  }
  __init5() {
    this.onClose = (t) => {
      t.preventDefault(), this.props.dispatch("layer/hide");
    };
  }
  render() {
    const { annotations: t, meta: e, experiments: o } = this.props,
      i = W(e);
    if (!i) return;
    const s = (t.parts && t.parts[i.partId]) || [];
    if (!s) return;
    const n = this.props.annotations.measure,
      { isLoggedIn: a, profile: r, isAdmin: l } = this.props.user,
      { notificationId: c } = this.state,
      p = i.name + " " + i.instrument,
      h = K({ meta: e, experiments: o }),
      u = [
        a &&
          zt(
            "section",
            { "data-section": "submit", key: "submit" },
            zt(
              "form",
              {
                noValidate: !0,
                onSubmit: this.addAnnotation,
                className: ai.addForm,
              },
              zt(G, {
                styles: li,
                error:
                  this.state.error &&
                  "ValidationError" === this.state.error.name
                    ? null
                    : this.state.error,
              }),
              zt(Q, {
                ref: this.message,
                name: "message",
                type: "textarea",
                error: this.state.error,
                placeholder:
                  "Save and share your tips, findings and resources useful for learning this bar.",
                styles: ai,
                errorStyles: li,
                popup: !0,
              }),
              zt(
                "div",
                { className: ai.addActions },
                zt(Z, {
                  id: "addAnnotation",
                  title: "Add comment",
                  processing: this.state.processing,
                  width: 10,
                  height: 10,
                })
              )
            )
          ),
        !a &&
          zt(
            "section",
            {
              className: ai.authActions,
              "data-section": "welcome",
              key: "welcome",
            },
            zt("p", { className: ai.motto }, "Have some thoughts?"),
            zt("p", { className: ai.motto }, "Share them with community!"),
            zt(
              "p",
              { className: ai.signupText },
              "Please ",
              zt(J, { to: "/a/wa/signin" }, "sign up"),
              " for free to comment on this tab."
            )
          ),
      ],
      d = zt(
        "section",
        { "data-section": "annotations" },
        s[n] &&
          s[n].map((t) =>
            zt(
              "div",
              { className: ai.annotation, key: t.id },
              zt(
                $,
                null,
                a &&
                  t.id === c &&
                  zt(
                    tt,
                    { animationStyles: ae, timeout: { enter: 1e3, exit: 300 } },
                    zt(
                      "form",
                      {
                        className: ai.notification,
                        onSubmit: this.removeAnnotation,
                      },
                      zt(
                        "div",
                        { className: ai.notificationText },
                        "Delete the comment?"
                      ),
                      zt(
                        "div",
                        { className: ai.removeActions },
                        zt(Z, {
                          id: "removeAnnotation",
                          title: "Yes",
                          processing: this.state.notifyProcessing,
                          width: 10,
                          height: 10,
                        }),
                        zt(
                          "button",
                          {
                            className: et.popupButtonBlueSmall,
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
              zt(
                "div",
                { className: ai.annotationContent },
                zt(ni, { styles: ai }, t.message),
                zt(
                  "div",
                  { className: ai.datename },
                  "".concat(t.dateAdded, " by ").concat(t.personName)
                )
              ),
              a &&
                (r.id === t.personId || l) &&
                zt("div", { className: ai.deleteSplitter }),
              a &&
                (r.id === t.personId || l) &&
                zt(
                  "button",
                  {
                    className: ai.removeBtn,
                    onClick: this.toggleNotification.bind(this, t.id),
                  },
                  zt(ri, null),
                  zt("span", null, "Delete")
                )
            )
          )
      );
    return zt(
      "div",
      { className: ai.wrapper },
      zt(
        "header",
        { className: ai.header, key: "header" },
        zt(
          "div",
          { className: ai.title },
          zt("span", { className: ai.marker }, n),
          zt("span", { className: ai.bar }, "Bar"),
          zt(it, { onClick: this.onClose, id: "annotation" })
        ),
        zt("div", { className: ai.headerTrack }, p)
      ),
      h
        ? zt(
            "div",
            { className: ai.scroller },
            zt(
              "section",
              {
                className: ai.authActions,
                "data-section": "welcome",
                key: "welcome",
              },
              zt(
                "p",
                { className: ai.motto },
                "Annotations are temporarily unavailable for this track"
              )
            )
          )
        : zt(
            "div",
            { className: ai.scroller },
            t.loading &&
              zt(
                "div",
                { className: ai.loader },
                zt(ot, { width: 30, height: 30, fill: "#fff" })
              ),
            t.isFailed &&
              zt("h4", { className: ai.alert }, "Failed to load annotations"),
            d,
            u
          )
    );
  }
}
var pi = r(ci, "user", "meta", "annotations", "experiments");
let hi;
const ui = () => {
  clearTimeout(hi), (hi = null);
};
let di;
class mi extends Dt {
  __init() {
    this.formClick = (t) => {
      t.preventDefault(), t.stopPropagation();
    };
  }
  __init2() {
    this.keyHandler = (t) => {
      const { tabEditor: e, dispatch: o } = this.props;
      if (hi && 1 === e.fret.length && "0" !== e.fret) {
        const i = "".concat(e.fret).concat(t);
        if ((ui(), +i <= 24)) return void o("tabEditor/changeNote", i);
      }
      o("tabEditor/changeNote", t), (hi = setTimeout(() => (hi = null), 1e3));
    };
  }
  __init3() {
    this.onDigit = (t) => {
      t.preventDefault(), t.stopPropagation(), this.keyHandler(t.key);
    };
  }
  __init4() {
    this.onDeadNote = (t) => {
      t.preventDefault(),
        t.stopPropagation(),
        ui(),
        this.props.dispatch("tabEditor/changeNote", "X");
    };
  }
  __init5() {
    this.onMobileKeyboard = (t) => () => this.keyHandler(t);
  }
  __init6() {
    this.onBackspace = () => {
      this.props.dispatch("tabEditor/changeNote", ""), ui();
    };
  }
  __init7() {
    this.onRight = () => {
      const { scale: t, dispatch: e } = this.props;
      e("tabEditor/formMove", { scale: t, direction: "right" });
    };
  }
  __init8() {
    this.onLeft = () => {
      const { scale: t, dispatch: e } = this.props;
      e("tabEditor/formMove", { scale: t, direction: "left" });
    };
  }
  __init9() {
    this.onUp = (t) => {
      t.preventDefault(), t.stopPropagation();
      const { scale: e, dispatch: o } = this.props;
      o("tabEditor/formMove", { scale: e, direction: "up" });
    };
  }
  __init10() {
    this.onDown = (t) => {
      t.preventDefault(), t.stopPropagation();
      const { scale: e, dispatch: o } = this.props;
      o("tabEditor/formMove", { scale: e, direction: "down" });
    };
  }
  __init11() {
    this.onEscape = () => {
      this.props.dispatch("layer/hide");
    };
  }
  constructor(t) {
    super(t),
      mi.prototype.__init.call(this),
      mi.prototype.__init2.call(this),
      mi.prototype.__init3.call(this),
      mi.prototype.__init4.call(this),
      mi.prototype.__init5.call(this),
      mi.prototype.__init6.call(this),
      mi.prototype.__init7.call(this),
      mi.prototype.__init8.call(this),
      mi.prototype.__init9.call(this),
      mi.prototype.__init10.call(this),
      mi.prototype.__init11.call(this);
    const { device: e } = t;
    (di = st(e) || R(e.os) || H(e.os)),
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
    window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }), ui();
  }
  componentDidUpdate(t) {
    (t.tabEditor.formX === this.props.tabEditor.formX &&
      t.tabEditor.formY === this.props.tabEditor.formY) ||
      ui();
  }
  render() {
    const { tabEditor: t, scale: e } = this.props,
      o = {
        top: t.formY - 1,
        left: t.formX + 2.5,
        display: t.positioned ? "block" : "none",
        transform: "scale(".concat(e, ")"),
        transformOrigin: "left 0px",
      };
    0 !== t.voice && (o.color = "#868686"),
      t.fret !== t.originalFret && "" !== t.fret && (o.color = "#ff3130");
    const i = {
      top: t.formY + 31 * e,
      left: t.formX - 64 * e,
      display: t.positioned ? "flex" : "none",
      transform: "scale(".concat(e, ")"),
      transformOrigin: "left 0px",
    };
    return zt(
      Bt,
      null,
      zt(
        "div",
        {
          id: "note-editor",
          className: "B6v2q7",
          style: o,
          tabIndex: -1,
          onMouseUp: this.formClick,
        },
        "" === t.fret && "" !== t.originalFret
          ? zt(
              Bt,
              {},
              t.originalFret,
              zt(
                "svg",
                { className: "B6v21f", width: 25, height: 23 },
                zt("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
              )
            )
          : t.fret
      ),
      di &&
        zt(
          "div",
          { className: "B6v27d", style: i },
          zt("button", { className: "B6vmm", onClick: this.onBackspace }, "<-"),
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((t) =>
            zt(
              "button",
              {
                key: t,
                className: "B6v2fw",
                onClick: this.onMobileKeyboard(t),
              },
              t
            )
          ),
          zt(
            "button",
            { className: "B6vi2", onClick: this.onMobileKeyboard("0") },
            "0"
          )
        )
    );
  }
}
var yi = r(mi, "tabEditor", "device"),
  fi = {
    exitActive: "Bqpmo",
    enterActive: "Bqpfs",
    enter: "Bqpb3",
    exit: "Bqp13z",
  };
const gi = g / 2,
  xi = {
    animationStyles: {
      exitActive: "B0d135",
      enterActive: "B0drd",
      enter: "B0d1ix",
      exit: "B0d2y8",
    },
  };
function vi(t) {
  return (e) => e === t;
}
const bi = "ontouchstart" in window;
function wi(t, e) {
  const { position: o } = t;
  rt(o, e.position) || e.dispatch("player/moveCursor", o);
}
class Si extends Dt {
  constructor(t) {
    super(t),
      Si.prototype.__init.call(this),
      Si.prototype.__init2.call(this),
      Si.prototype.__init3.call(this),
      Si.prototype.__init4.call(this),
      Si.prototype.__init5.call(this),
      Si.prototype.__init6.call(this),
      Si.prototype.__init7.call(this),
      Si.prototype.__init8.call(this),
      Si.prototype.__init9.call(this),
      Si.prototype.__init10.call(this),
      Si.prototype.__init11.call(this);
    const e = t.part,
      o = t.width,
      i = new be(o);
    (this.state = {
      model: new ve(e, i),
      mirrorWidth: o,
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
      (this.windowScroller = new ei());
  }
  componentDidMount() {
    if (
      (this.props.print ||
        (0 === this.props.position.loopStart &&
          0 === this.props.position.loopEnd) ||
        wi(this.state, this.props),
      nt)
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
    window.addEventListener("resize", at(this.onResize, 250)),
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
      wi(this.state, this.props),
      (this.props.part === t.part &&
        this.props.width === t.width &&
        this.props.isLoggedIn === t.isLoggedIn) ||
        requestAnimationFrame(() => this.onResize());
  }
  componentWillUnmount() {
    this.windowScroller.unmount(),
      window.hotKeysManager.unbindMeta("shift+right", "onTab"),
      window.hotKeysManager.unbindMeta("shift+left", "onTab"),
      window.hotKeysManager.unbindMeta("shift+down", "onTab"),
      window.hotKeysManager.unbindMeta("shift+up", "onTab");
  }
  static getDerivedStateFromProps(t, e) {
    const o = t.part,
      i = t.width,
      s = o !== e.mirrorPart || i !== e.mirrorWidth,
      n = new be(i),
      a = s ? new ve(o, n) : e.model;
    let r = e.position;
    rt(e.mirrorPosition, t.position) || (r = t.position);
    let l = e.loopStartLayout,
      c = e.loopStartX,
      p = !1,
      h = e.loopEndLayout,
      u = e.loopEndX,
      d = !1;
    const { tuning: m, instrumentId: y } = o,
      f = m && C(y, m);
    let g = !1;
    return (
      (k(y) || P(y)) && f && 0 !== f.pitch && (g = !0),
      0 !== r.loopStart || 0 !== r.loopEnd
        ? ((!s && l && -1 !== l.occurrences.findIndex(vi(r.loopStart))) ||
            ((l = M(o, r.loopStart, "left")),
            (c = l.absoluteLoopLeftX),
            (p = !0)),
          (!s &&
            h &&
            -1 !== h.occurrences.findIndex(vi(r.loopEnd - h.duration))) ||
            ((h = M(o, r.loopEnd, "right")),
            (u = h.absoluteLoopRightX),
            (d = !0)),
          (p || d) && (r = lt(o, r.cursor, l, h)))
        : ((l = null), (c = 0), (h = null), (u = 0)),
      {
        model: a,
        mirrorWidth: i,
        mirrorPart: o,
        mirrorPosition: t.position,
        position: r,
        loopStartLayout: l,
        loopStartX: c,
        loopEndLayout: h,
        loopEndX: u,
        isPitchshiftToStandard: g,
      }
    );
  }
  __init() {
    this.onResize = () =>
      this.setState((t, e) => {
        const { body: o, documentElement: i } = document,
          s = this.wrap;
        if (s && o && i) {
          const t = s.getBoundingClientRect(),
            n = t.left + gi + o.scrollLeft + i.scrollLeft,
            a =
              t.top +
              0 +
              (window.visualViewport
                ? window.visualViewport.pageTop
                : document.body.scrollTop + document.documentElement.scrollTop);
          return {
            scale: t.width / (e.width + g),
            pageX: n,
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
    this.onTouchStart = (t) => {
      if (bi && "mousedown" === t.type) return;
      if ("tab_editor" === this.props.layer)
        return void this.handleTabEditor(t);
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
          this.props.dispatch("layer/hide"),
          t.preventDefault(),
          void t.stopPropagation()
        );
      const o =
          t.target.parentElement &&
          t.target.parentElement.getAttribute("data-loop-handle"),
        i = this.getTouchPoint(t);
      if (((this.lastTouch = i), "left" === o || "right" === o)) {
        if (
          (t.preventDefault(),
          t.stopPropagation(),
          this.props.dispatch("player/changeLoop", !0),
          (this.activeLoopHandle = o),
          "left" === this.activeLoopHandle
            ? this.setState((t) => ({ deltaLeftX: t.loopStartX - i.x }))
            : this.setState((t) => ({ deltaRightX: t.loopEndX - i.x })),
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
    this.onTouchMove = (t) => {
      t.preventDefault(),
        t.stopPropagation(),
        (this.lastTouch = this.getTouchPoint(t));
    };
  }
  limitX(t) {
    return Math.min(Math.max(t, 0), this.props.width - 1);
  }
  __init4() {
    this.ensureLineVisibility = (t, e, o) =>
      ct(() => {
        const {
            showPitchshiftLayer: i,
            isSmallScreen: s,
            isLandscapeScreen: n,
          } = this.props,
          a = window.visualViewport
            ? window.visualViewport.pageTop
            : window.scrollY,
          r = this.state.scale,
          l = s && !n ? 48 : 0,
          c = s && !n ? 48 : 0,
          p = a - this.state.pageY + l,
          h = a - this.state.pageY + this.state.clientHeight - c,
          u = h - p,
          d = e.line.index,
          m = this.state.model.lines;
        if (t && (t.maxY * r < p || h < t.y * r)) return;
        let y = a;
        const { loopStartLayout: f, loopEndLayout: g } = this.state;
        if (i) y = 0;
        else if (f && g) {
          let t = e.y * r - p;
          if (t < 0) y = a + t;
          else if (
            ((t = h - e.maxY * r),
            t < 0 && (y = a - t),
            d < g.measureLayout.lineLayout.line.index)
          ) {
            const o = m[d + 1];
            if (o) {
              const i = e.y,
                s = o.layout.maxY;
              (s - i) * r < u && ((t = h - s * r), t < 0 && (y = a - t));
            }
          }
        } else if (0 === d) y = 0;
        else if (((y = e.y * r + this.state.pageY - l), d < m.length - 1)) {
          const t = m[d - 1],
            e = m[d + 1];
          if (t && e) {
            const o = t.layout.y;
            (e.layout.maxY - o) * r < u && (y = o * r + this.state.pageY - l);
          }
        }
        y !== a && this.windowScroller.scroll(y, o, a);
      });
  }
  __init5() {
    this.onTouchMoveTick = () => {
      this.lastTouch &&
        this.setState((t) => {
          const e = this.lastTouch;
          if (!e) throw new Error("Wrong state during touch move");
          const o = {
            position: t.position,
            loopStartX: t.loopStartX,
            loopStartLayout: t.loopStartLayout,
            loopEndX: t.loopEndX,
            loopEndLayout: t.loopEndLayout,
          };
          {
            const { loopStartLayout: i, loopEndLayout: s } = o;
            if (!i || !s) throw new Error("Wrong loop state");
            if ("left" === this.activeLoopHandle) {
              const n = { x: this.limitX(e.x + t.deltaLeftX), y: e.y },
                a = pt(this.state.model, n, "left");
              a.stringY < s.stringY ||
              (a.stringY === s.stringY && n.x <= s.absoluteLoopLeftX)
                ? ((o.loopStartLayout = a), (o.loopStartX = n.x))
                : ((o.loopStartLayout = o.loopEndLayout),
                  (o.loopStartX = i.absoluteLoopLeftX));
            } else {
              const n = { x: this.limitX(e.x + t.deltaRightX), y: e.y },
                a = pt(this.state.model, n, "right");
              a.stringY > i.stringY ||
              (a.stringY === i.stringY && n.x >= i.absoluteLoopRightX)
                ? ((o.loopEndLayout = a), (o.loopEndX = n.x))
                : ((o.loopEndLayout = o.loopStartLayout),
                  (o.loopEndX = s.absoluteLoopRightX));
            }
          }
          {
            const { loopStartLayout: e, loopEndLayout: i } = o;
            if (e && i && (e !== t.loopStartLayout || i !== t.loopEndLayout)) {
              const t = lt(
                  this.props.part,
                  o.position.cursor,
                  e,
                  i,
                  this.activeLoopHandle
                ),
                s = o.position;
              (s.cursor === t.cursor &&
                s.loopStart === t.loopStart &&
                s.loopEnd === t.loopEnd) ||
                (o.position = t);
            }
          }
          return (this.lastTouch = null), o;
        });
      const t = window.requestAnimationFrame;
      this.onTouchMoveTickId = t(this.onTouchMoveTick);
    };
  }
  __init6() {
    this.onTouchEnd = (t) => {
      if (this.activeLoopHandle)
        document.removeEventListener("touchmove", this.onTouchMove),
          document.removeEventListener("mousemove", this.onTouchMove),
          t.preventDefault(),
          this.onTouchMoveTickId &&
            cancelAnimationFrame(this.onTouchMoveTickId),
          (this.onTouchMoveTickId = void 0),
          (this.activeLoopHandle = void 0),
          this.setState(
            (t) => (
              this.props.dispatch("player/moveCursor", this.state.position),
              this.props.dispatch("player/changeLoop", !1),
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
        const i = this.getTouchPoint(t);
        (e = this.lastTouch),
          (o = i),
          (e ? Math.abs(o.x - e.x) + Math.abs(o.y - e.y) : 0) < 7 &&
            (t.preventDefault(),
            this.setState((t) => {
              const e = {
                  position: t.position,
                  loopStartX: t.loopStartX,
                  loopStartLayout: t.loopStartLayout,
                  loopEndX: t.loopEndX,
                  loopEndLayout: t.loopEndLayout,
                },
                o = pt(t.model, i);
              if (
                0 === this.props.position.loopStart &&
                0 === this.props.position.loopEnd
              )
                e.position = { cursor: o.leftTime, loopStart: 0, loopEnd: 0 };
              else {
                const t = o.leftTime,
                  i = o.rightTime;
                if (e.position.loopStart <= t && t < e.position.loopEnd)
                  e.position = {
                    cursor: t,
                    loopStart: e.position.loopStart,
                    loopEnd: e.position.loopEnd,
                  };
                else if (e.position.loopStart <= i && i < e.position.loopEnd)
                  e.position = {
                    cursor: i,
                    loopStart: e.position.loopStart,
                    loopEnd: e.position.loopEnd,
                  };
                else {
                  const i = o.measureLayout.measure.beatsLayouts;
                  (e.loopStartLayout = i[0]),
                    (e.loopEndLayout = i[i.length - 1]),
                    (e.loopStartX = e.loopStartLayout.absoluteLoopLeftX),
                    (e.loopEndX = e.loopEndLayout.absoluteLoopRightX),
                    (e.position = {
                      cursor: t,
                      loopStart: e.loopStartLayout.loopLeftTime,
                      loopEnd: e.loopEndLayout.firstLoopRightTime,
                    });
                }
              }
              return this.props.dispatch("player/moveCursor", e.position), e;
            })),
          (this.lastTouch = null);
      }
      var e, o;
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
  handleTabEditor(t) {
    const e = this.getTouchPoint(t),
      o = pt(this.state.model, e);
    this.props.setTabEditor({
      beatsLayout: o,
      touch: e,
      scale: this.state.scale,
    });
  }
  __init7() {
    this.handleShiftLoopRight = (t) => {
      t.preventDefault(), t.stopPropagation();
      const {
        loopEndLayout: e,
        position: { cursor: o, loopStart: i, loopEnd: s },
        model: n,
      } = this.state;
      if (0 === s) return;
      const a = e.measureLayout.measure.index,
        r = e.measureLayout.lineLayout.line,
        l = r.measures.length;
      let c, p;
      if (a === r.measures[l - 1].index) {
        if (!n.lines[r.index + 1]) return;
        const t = n.lines[r.index + 1].measures[0].beatsLayouts;
        s < t[0].loopLeftTime
          ? ((p = t[0]), (c = p.loopLeftTime))
          : ((p = t[t.length - 1]), (c = p.firstLoopRightTime));
      } else {
        let t;
        for (let e = 0; e < l; e++)
          if (r.measures[e].index === a) {
            t = r.measures[e + 1];
            break;
          }
        const e = t.beatsLayouts;
        s < e[0].loopLeftTime
          ? ((p = e[0]), (c = p.loopLeftTime))
          : ((p = e[e.length - 1]), (c = p.firstLoopRightTime));
      }
      const h = { cursor: o, loopStart: i, loopEnd: c };
      this.setState({
        position: h,
        loopEndLayout: p,
        loopEndX: p.absoluteLoopRightX,
      });
      const u = p.measureLayout.lineLayout.line.index,
        d = n.lines[u > 0 ? u - 1 : 0].layout.y;
      this.windowScroller.scroll(d, !1);
    };
  }
  __init8() {
    this.handleShiftLoopLeft = (t) => {
      t.preventDefault(), t.stopPropagation();
      const {
        loopStartLayout: e,
        loopEndLayout: o,
        position: { cursor: i, loopStart: s, loopEnd: n },
        model: a,
      } = this.state;
      if (0 === n) return;
      if (e.measureLayout.measure.index === o.measureLayout.measure.index)
        return;
      const r = o.measureLayout.measure,
        l = r.index,
        c = o.measureLayout.lineLayout.line.measures;
      let p, h, u;
      for (let t = 0; t < c.length; t++)
        if (c[t].index === l) {
          u = c[t - 1];
          break;
        }
      const d = r.beatsLayouts;
      if (
        (n > d[0].loopLeftTime
          ? ((h = d[0]), (p = d[0].loopLeftTime))
          : ((h = u.beatsLayouts[0]), (p = u.beatsLayouts[0].loopLeftTime)),
        p < i)
      )
        return;
      const m = { cursor: i, loopStart: s, loopEnd: p };
      this.setState({
        position: m,
        loopEndLayout: h,
        loopEndX: h.absoluteLoopRightX,
      });
      const y = h.measureLayout.lineLayout.line.index,
        f = a.lines[y > 0 ? y - 1 : 0].layout.y;
      this.windowScroller.scroll(f, !1);
    };
  }
  __init9() {
    this.refWrap = (t) => {
      this.wrap = t;
    };
  }
  __init10() {
    this.refMain = (t) => {
      this.tab = t;
    };
  }
  __init11() {
    this.refTuning = (t) => {
      this.tuningButton = t;
    };
  }
  render() {
    const {
        loopStartLayout: t,
        loopEndLayout: e,
        loopStartX: o,
        loopEndX: i,
        isPitchshiftToStandard: s,
        scale: n,
      } = this.state,
      { lines: a, height: r, slicingMode: l } = this.state.model,
      {
        part: c,
        plusAccess: p,
        isFullscreen: h,
        isSmallScreen: u,
        handlePitchshift: d,
        showPitchshiftPopup: m,
        showPitchshiftLayer: y,
        tuning: f,
        layer: x,
        tabEditorData: v,
      } = this.props,
      b = this.props.width + g,
      w = "-"
        .concat(g / 2 - 0.5, " -0.5 ")
        .concat(b, " ")
        .concat(r),
      S = a[0].layout.layers.height,
      L = !p,
      _ = "tab_editor" === x;
    return zt(
      Bt,
      null,
      zt(
        "section",
        {
          className: p
            ? h
              ? "Hdoi"
              : "Hdoi"
            : h
            ? "Hdoi"/* "Hdoi Hd2ur Hd1fb" */
            : "Hdoi",
          id: "tablature",
          "data-id": "Print--plus",
          role: "application",
          key: "main",
          ref: this.refMain,
        },
        _ && zt(yi, { scale: n }),
        zt(Xo, {
          part: c,
          lines: a,
          tuning: f,
          slicingMode: l,
          tabEditorData: v,
          lazy: L,
        }),
        zt(
          _e,
          null,
          nt &&
            zt(Zo, {
              scale: this.state.scale,
              part: c,
              lines: a,
              hidden: _,
              ensureLineVisibility: this.ensureLineVisibility,
            }),
          zt(
            "svg",
            {
              width: b,
              viewBox: w,
              ref: this.refWrap,
              className: "Hdq5",
              preserveAspectRatio: "xMidYMid meet",
              id: "handler",
            },
            nt && t && e && zt($o, { leftLayout: t, rightLayout: e, lines: a }),
            nt && t && zt(Jo, { x: o, layout: t, handle: "left" }),
            nt && e && zt(Jo, { x: i, layout: e, handle: "right" }),
            zt(Le, { lines: a, part: c }),
            !u &&
              c.tuning &&
              zt(Ao, {
                reference: this.refTuning,
                firstLineLayoutHeigth: S,
                handlePitchshift: d,
                isPitchshiftToStandard: s,
                isActive: m || y,
              })
          )
        ),
        zt(
          $,
          null,
          "annotation" === x &&
            zt(
              tt,
              { animationStyles: fi, timeout: 400, key: "annotation_feed" },
              zt(
                "aside",
                { className: "Hd1sk", id: "annotationFeed" },
                zt(pi, { part: c })
              )
            ),
          !u &&
            m &&
            zt(
              tt,
              Object.assign({}, xi, { key: "popup" }),
              zt(ii, { tab: this.tab, tuningButton: this.tuningButton })
            ),
          !u &&
            y &&
            zt(
              tt,
              Object.assign({}, xi, { key: "layer" }),
              zt(Ho, {
                firstLineLayoutHeigth: S,
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
var Li = Si;
class _i extends Dt {
  render() {
    const {
        onClick: t,
        pressed: e,
        title: o,
        titlePressed: i,
        name: s,
        instrumentId: n,
      } = this.props,
      a = "mixer-title-id";
    return zt(
      "button",
      {
        className: e ? Gt.active : Gt.button,
        onClick: t,
        id: "control-mixer",
        "aria-haspopup": !0,
        "aria-pressed": e,
      },
      zt(
        "svg",
        {
          className: Gt.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": a,
        },
        zt("title", { id: a }, e && i ? i : o),
        zt("circle", { className: Gt.arrow, cx: "7", cy: "39", r: "6" }),
        zt("circle", {
          className: Gt.circle,
          cx: "22.5",
          cy: "22.5",
          r: "22.5",
          filter: "url(#svg_shadow)",
        }),
        zt(re, {
          className: Gt.shape,
          instrumentId: n,
          name: s,
          transform: "translate(9 9)",
        })
      )
    );
  }
}
class Ni extends Dt {
  constructor(t) {
    super(t),
      Ni.prototype.__init.call(this),
      Ni.prototype.__init2.call(this),
      Ni.prototype.__init3.call(this),
      Ni.prototype.__init4.call(this),
      Ni.prototype.__init5.call(this),
      Ni.prototype.__init6.call(this),
      Ni.prototype.__init7.call(this),
      Ni.prototype.__init8.call(this),
      Ni.prototype.__init9.call(this),
      Ni.prototype.__init10.call(this),
      Ni.prototype.__init11.call(this),
      Ni.prototype.__init12.call(this),
      Ni.prototype.__init13.call(this),
      Ni.prototype.__init14.call(this),
      Ni.prototype.__init15.call(this),
      Ni.prototype.__init16.call(this),
      Ni.prototype.__init17.call(this);
    const e = t.player.speed,
      o = dt(e, t.player.tempo);
    (this.state = {
      speed: e,
      tempo: o,
      position: mt(e),
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
    this.hidePopup = (t) => {
      t.preventDefault(), this.props.dispatch("layer/hide");
    };
  }
  static getDerivedStateFromProps(t, e) {
    if (e.mirrorSpeed !== t.player.speed || e.mirrorTempo !== t.player.tempo) {
      const e = t.player.speed;
      return {
        speed: e,
        tempo: dt(e, t.player.tempo),
        position: mt(e),
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
        o = this.ruler;
      if (o && t && e) {
        const i = o.getBoundingClientRect();
        return {
          rulerX: i.left + t.scrollLeft + e.scrollLeft,
          rulerY: i.top + t.scrollTop + e.scrollTop,
          rulerW: i.width,
        };
      }
      throw new Error("Wrong Usage");
    };
  }
  __init3() {
    this.onResize = at(() => this.setState(this.getPageCoordinates), 250);
  }
  getNewPosition(t) {
    const e = yt((100 * t.x) / t.w);
    return ft(e, this.props.player.tempo);
  }
  __init4() {
    this.handleFaster = (t) => {
      t.preventDefault(),
        this.setState(
          (t) => gt(t.speed, t.tempo, t.position, this.props.player.tempo),
          () => {
            this.dispatchSpeed(this.state.speed);
          }
        );
    };
  }
  __init5() {
    this.handleSlower = (t) => {
      t.preventDefault(),
        this.setState(
          (t) => xt(t.speed, t.tempo, t.position, this.props.player.tempo),
          () => {
            this.dispatchSpeed(this.state.speed);
          }
        );
    };
  }
  __init6() {
    this.dispatchSpeed = (t) => {
      vt(this.props.store, t);
    };
  }
  getTouchPoint(t) {
    let { rulerX: e, rulerY: o, rulerW: i } = this.state;
    if (null === e || null === o || null === i) {
      const t = this.getPageCoordinates();
      this.setState(t), (e = t.rulerX), (o = t.rulerY), (i = t.rulerW);
    }
    const s = t.changedTouches ? t.changedTouches[0] : t;
    return { x: Math.max(Math.min(s.pageX - e, i), 0), w: i, y: s.pageY - o };
  }
  __init7() {
    this.onTouchStart = (t) => {
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
    this.onTouchMove = (t) => {
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
    this.onTouchEnd = () => {
      document.removeEventListener("touchmove", this.onTouchMove),
        document.removeEventListener("mousemove", this.onTouchMove),
        document.removeEventListener("touchend", this.onTouchEnd),
        document.removeEventListener("mouseup", this.onTouchEnd),
        this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
        (this.onTouchMoveTickId = void 0);
      let t = this.state.speed;
      const e = this.lastTouch;
      if (e) {
        const o = this.getNewPosition(e);
        this.setState(o), (t = o.speed);
      }
      this.dispatchSpeed(t);
    };
  }
  __init11() {
    this.refWrap = (t) => {
      this.wrap = t;
    };
  }
  __init12() {
    this.refRuler = (t) => {
      this.ruler = t;
    };
  }
  __init13() {
    this.changeBpmState = (t) => {
      this.setState(
        (e) => bt(e.speed, e.tempo, e.position, this.props.player.tempo, t),
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
    this.bpmPlusKeyPress = (t) => {
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
    this.bpmMinusPress = (t) => {
      13 === t.keyCode &&
        (t.preventDefault(), t.stopPropagation(), this.changeBpmState(-1));
    };
  }
  render() {
    const t = 100 === this.state.speed ? "c72sg c7pt" : "c72sg",
      e = 100 === this.state.speed ? "c71yw c71cf" : "c71yw";
    return zt(
      "div",
      { className: "c72a8", role: "dialog", "aria-label": "Speed" },
      zt(
        "div",
        { className: e },
        zt(
          "button",
          {
            onClick: this.bpmMinus,
            onKeyDown: this.bpmMinusPress,
            title: "Alt+A",
          },
          zt(
            "svg",
            { width: 12, height: 12, viewBox: "0 0 12 2" },
            zt("rect", {
              y: "2",
              width: "2",
              height: "12",
              transform: "rotate(-90 0 2)",
            })
          )
        ),
        zt("span", { "aria-label": "Tempo" }, this.state.tempo.bpm, " bpm"),
        zt(
          "button",
          {
            onClick: this.bpmPlus,
            onKeyDown: this.bpmPlusKeyPress,
            title: "Alt+S",
          },
          zt(
            "svg",
            { width: 12, height: 12, viewBox: "0 0 12 12" },
            zt("rect", { x: "5", width: "2", height: "12" }),
            zt("rect", {
              y: "7",
              width: "2",
              height: "12",
              transform: "rotate(-90 0 7)",
            })
          )
        )
      ),
      zt(
        "div",
        {
          className: "c7xa",
          title: "You can use arrow keys",
          ref: this.refWrap,
        },
        zt("label", { className: "c7295 c77r" }, zt("span", null, "25%")),
        zt("label", { className: "c7295 c72fh" }, zt("span", null, "50%")),
        zt("label", { className: "c7295 c71fc" }, zt("span", null, "75%")),
        zt("label", { className: "c7295 c7264" }, zt("span", null, "100%")),
        zt("label", { className: "c7295 c7ru" }, zt("span", null, "125%")),
        zt("label", { className: "c7295 c71cp" }, zt("span", null, "150%")),
        zt("label", { className: "c7295 c7f1" }, zt("span", null, "175%")),
        zt(
          "div",
          { className: "c7344", ref: this.refRuler },
          zt(
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
            zt("div", { className: t })
          )
        )
      )
    );
  }
}
var Mi = r(Ni, "player");
function Ti() {
  return zt(
    "svg",
    { width: 54, height: 54, viewBox: "0 0 54 54" },
    zt("path", {
      d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
      fill: "#F1452D",
    }),
    zt("path", {
      d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
      fill: "#FDE3DF",
    })
  );
}
var ki = {
  horizontalPopup: Qt + " hf8r",
  verticalPopup: Qt + " hf19b",
  verticalLeftPopup: Qt + " hf1si",
  link: "hf1j4",
  basewrapper: "hfhd",
  wrapper: "hfhd hf1qv",
  text: "hf2wq",
  linkText: "hf1f8",
};
function Pi(t, e) {
  return t ? ki.horizontalPopup : e ? ki.verticalLeftPopup : ki.verticalPopup;
}
function Ei(t) {
  let { title: e, left: o, horizontal: i } = t;
  const { dispatch: s } = a(),
    n = Rt(() => {
      s("layer/hide");
    }, [s]);
  return zt(
    "div",
    { className: Pi(i, o), role: "dialog" },
    zt(
      "div",
      {
        className: ki.link,
        "aria-label": "".concat(e, " mode has no effect"),
        onClick: n,
      },
      zt("span", { className: ki.wrapper }, zt(Ti, null)),
      zt(
        "div",
        { className: ki.text },
        "This song has only one",
        zt("br", null),
        "instrument track. ".concat(e),
        zt("br", null),
        "mode has no effect."
      )
    )
  );
}
var Ci = {
  popup: "oi1nk",
  mainContainer: "oihz",
  divider: "oi23b",
  popupExtended: "oi1nk oi14d",
  helpContainer: "oi280",
  part: "oisw",
  navigation: "oil",
  digits: "oi1un",
  rect: "oi2f8",
  save: "oiid",
  notLoggedIn: "oiid oi1cc",
  unset: "oiid oi1xb",
  saving: "oiid oi31u",
  saved: "oiid oi11i",
  hint: "oi34g",
  hint0: "oi34g oi2ch",
  hint1: "oi34g oi17t",
  hint2: "oi34g oi8t",
  helpTag: "oi8c",
};
class Bi extends Dt {
  __init() {
    this.helpToggle = () => {
      const { helpActive: t } = this.state;
      this.setState({ helpActive: !t });
    };
  }
  __init2() {
    this.getActiveHint = (t, e) => {
      const { dispatch: o } = this.props;
      switch (t) {
        case 0:
          return e
            ? [
                "Use ",
                zt(
                  "span",
                  {
                    onClick: (t) => {
                      t.preventDefault(),
                        o("curiosity/event", {
                          event: "Clicked a tab editor popup link",
                          action: "Revisions",
                        }),
                        o("layer/show", "revisions");
                    },
                  },
                  "revisons"
                ),
                " for complex changes",
              ]
            : [
                zt(
                  "a",
                  {
                    href: "/a/wa/signin",
                    onClick: (t) => {
                      t.preventDefault(),
                        o("curiosity/event", {
                          event: "Clicked a tab editor popup link",
                          action: "Sign In",
                        }),
                        o("navigate", "/a/wa/signin");
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
  }
  __init3() {
    this.onSave = (t) => {
      const { dispatch: e } = this.props;
      t.preventDefault(),
        e("curiosity/event", {
          event: "Clicked a tab editor popup link",
          action: "SignInButton",
        }),
        e("navigate", "/a/wa/signin");
    };
  }
  constructor() {
    super(),
      Bi.prototype.__init.call(this),
      Bi.prototype.__init2.call(this),
      Bi.prototype.__init3.call(this);
    const t = wt();
    !t && St(),
      (this.state = { helpActive: !t, hintActiveId: 0, firstHintShowed: !1 });
  }
  componentDidMount() {
    this.hintTimer = setInterval(() => {
      const { hintActiveId: t } = this.state,
        e = t < 2 ? t + 1 : 0;
      this.setState({ hintActiveId: e, firstHintShowed: !0 });
    }, 7e3);
  }
  componentWillUnmount() {
    clearInterval(this.hintTimer);
  }
  render() {
    const { tabEditor: t, user: e } = this.props,
      { helpActive: o, hintActiveId: i, firstHintShowed: s } = this.state;
    let n = Ci.unset,
      a = "Save",
      r = Ci.hint;
    return (
      s && (r = Ci["hint".concat(i)]),
      e.isLoggedIn
        ? "changes" === t.status || "saving" === t.status
          ? ((n = Ci.saving), (a = "Saving"))
          : "saved" === t.status && ((n = Ci.saved), (a = "Saved"))
        : ((n = Ci.notLoggedIn), (a = "Sign in & Save")),
      zt(
        "div",
        { className: o ? Ci.popupExtended : Ci.popup },
        zt(
          "div",
          { className: Ci.helpTag, onClick: this.helpToggle },
          zt("span", null, "?")
        ),
        o &&
          zt(
            "div",
            { className: Ci.helpContainer },
            zt(
              "div",
              { className: Ci.part },
              zt("p", null, "Choose a note to edit with your mouse.")
            ),
            zt(
              "div",
              { className: Ci.part },
              zt("p", null, "Navigate with"),
              zt(
                "svg",
                { className: Ci.navigation, width: 41, height: 27 },
                zt("rect", { x: 14 }),
                zt("rect", { x: 14, y: 14 }),
                zt("rect", { x: 28, y: 14 }),
                zt("rect", { y: 14 }),
                zt("path", { d: "M24 19.5H17L20.5 23.5L24 19.5Z" }),
                zt("path", { d: "M33 17V24L37 20.5L33 17Z" }),
                zt("path", { d: "M8 17V24L4 20.5L8 17Z" }),
                zt("path", { d: "M24 9H17L20.5 5L24 9Z" })
              )
            ),
            zt(
              "div",
              { className: Ci.part },
              zt("p", null, "Edit with"),
              zt(
                "svg",
                { className: Ci.digits, width: 37, height: 13 },
                zt("rect", { className: Ci.rect, x: 24 }),
                zt("rect", { className: Ci.rect }),
                zt("rect", { x: 15, y: 6, height: 1, width: 7 }),
                zt("text", { x: 4, y: 10 }, 0),
                zt("text", { x: 28, y: 10 }, 9)
              )
            )
          ),
        zt(
          "div",
          { className: Ci.mainContainer },
          zt("h3", {}, "TAB corrector"),
          zt(
            "button",
            { className: n, onClick: e.isLoggedIn ? void 0 : this.onSave },
            zt("span", null, a)
          ),
          zt("div", { className: Ci.divider }),
          zt(
            "p",
            { className: r, key: "hint".concat(i) },
            this.getActiveHint(i, e.isLoggedIn)
          )
        )
      )
    );
  }
}
var Di = r(Bi, "tabEditor", "user");
const zi = { animationStyles: oe };
class Xi extends Dt {
  render() {
    const {
        device: t,
        plusAccess: e,
        layer: o,
        tadEditorWarning: i,
        speed: s,
      } = this.props,
      n = "mixer" === o,
      a = "plus_speed" === o,
      r = "speed" === o,
      l = "plus_solo" === o,
      c = "solo_single" === o,
      p = "plus_mute" === o,
      h = "plus_loop" === o,
      u = "plus_print" === o,
      d = o === Zt,
      m = "tab_editor" === o,
      y = R(t.os) || H(t.os) || st(t),
      f = "solo" === this.props.type,
      g = "mute" === this.props.type,
      x = this.props.loop,
      v = this.props.isCountin,
      b = this.props.isMetronome,
      w = "".concat(Math.round(s), "%"),
      S = !e,
      L = this.props.usedDrums ? Jt.panePlus2Secondary : Jt.panePlus2;
    return zt(
      "aside",
      { className: L, "data-controls": "tablature", id: "controls" },
      zt("div", { className: Jt.handler }),
      zt(
        "div",
        { className: Jt.centerGroup },
        zt(
          "div",
          { className: Jt.item },
          zt($t, {
            shouldPlay: this.props.shouldPlay,
            canPlay: this.props.canPlay,
            onClick: this.props.handlePlay,
            title: "Play (Space)",
            titlePressed: "Pause (Space)",
          })
        ),
        zt(
          "div",
          { className: Jt.item, id: "mixer-button" },
          zt(_i, {
            pressed: n,
            onClick: this.props.handleMixer,
            title: "Show tracks (T)",
            titlePressed: "Hide tracks (T)",
            instrumentId: this.props.track ? this.props.track.instrumentId : Lt,
            name: this.props.track ? this.props.track.name : "",
          }),
          zt($, null, n && zt(tt, zi, zt(le, null)))
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "speed",
            text: w,
            pressed: r,
            onClick: this.props.handleSpeed,
            title:
              "Change playback speed (S). Increase (ALT+S). Decrease (ALT+A).",
            hasPopup: !0,
          }),
          zt(
            $,
            null,
            a &&
              zt(
                tt,
                Object.assign({}, zi, { key: "popup" }),
                y
                  ? zt(oi, {
                      title: "Tempo Control",
                      device: t,
                      horizontal: !0,
                    })
                  : zt(Wt, {
                      title: "Tempo Control",
                      horizontal: !0,
                      classPrefix: "speed",
                    })
              ),
            r && zt(tt, Object.assign({}, zi, { key: "layer" }), zt(Mi, null))
          )
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "solo",
            pressed: f,
            onClick: this.props.handleSolo,
            title: "Play current track solo (F)",
            titlePressed: "Play focus mix of all tracks (F)",
            hasPopup: S,
          }),
          zt(
            $,
            null,
            l &&
              zt(
                tt,
                zi,
                y
                  ? zt(oi, { title: "Solo Mode", device: t, horizontal: !0 })
                  : zt(Wt, {
                      title: "Solo Mode",
                      horizontal: !0,
                      classPrefix: "solo",
                    })
              ),
            c && zt(tt, zi, zt(Ei, { title: "Solo", horizontal: !0 }))
          )
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "mute",
            pressed: g,
            onClick: this.props.handleMute,
            title: "Mute current track (M)",
            titlePressed: "Unmute current track (M)",
            hasPopup: S,
          }),
          zt(
            $,
            null,
            p &&
              zt(
                tt,
                zi,
                y
                  ? zt(oi, { title: "Mute Mode", device: t, horizontal: !0 })
                  : zt(Wt, {
                      title: "Mute Mode",
                      horizontal: !0,
                      classPrefix: "mute",
                    })
              )
          )
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "loop",
            pressed: x,
            onClick: this.props.handleLoop,
            title: "Turn loop mode on (L)",
            titlePressed: "Turn loop mode off (L)",
            hasPopup: S,
          }),
          zt(
            $,
            null,
            h &&
              zt(
                tt,
                zi,
                y
                  ? zt(oi, { title: "Loop Mode", device: t, horizontal: !0 })
                  : zt(Wt, {
                      title: "Loop Mode",
                      horizontal: !0,
                      classPrefix: "loop",
                    })
              )
          )
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "countin",
            pressed: v,
            onClick: this.props.handleCountin,
            title: "Turn count-in mode on (C)",
            titlePressed: "Turn count-in mode off (C)",
          })
        ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "metronome",
            pressed: b,
            onClick: this.props.handleMetronome,
            title: "Turn metronome on (N)",
            titlePressed: "Turn metronome off (N)",
          })
        ),
        !this.props.usedDrums &&
          zt(
            "div",
            { className: Jt.item },
            zt(te, {
              icon: "editor",
              pressed: m,
              onClick: this.props.handleTabEditor,
              title: "Turn tab corrector on (E)",
              titlePressed: "Turn tab corrector off (E)",
              warning: i,
            }),
            m &&
              zt(tt, Object.assign({}, zi, { key: "tab-editor" }), zt(Di, null))
          ),
        zt(
          "div",
          { className: Jt.item },
          zt(te, {
            icon: "print",
            onClick: this.props.handlePrint,
            title: "Print (P)",
          }),
          zt(
            $,
            null,
            u &&
              zt(
                tt,
                zi,
                zt(Wt, {
                  title: "Printing",
                  horizontal: !0,
                  classPrefix: "print",
                })
              )
          )
        ),
        zt(
          "div",
          { className: Jt.secondaryControls },
          zt(
            "div",
            {
              className: this.props.usedDrums
                ? Jt.itemSmall
                : Jt.itemSmallHidden,
            },
            zt(te, {
              icon: "help",
              pressed: d,
              onClick: this.props.handleNotation,
              title: "Show drum notation",
              titlePressed: "Hide drum notation",
            }),
            this.props.usedDrums &&
              zt(ee, { usedDrums: this.props.usedDrums, horizontal: !0 })
          )
        )
      )
    );
  }
}
class Ai extends Dt {
  constructor() {
    super(),
      Ai.prototype.__init.call(this),
      Ai.prototype.__init2.call(this),
      Ai.prototype.__init3.call(this),
      (this.state = { mode: "percent" });
  }
  __init() {
    this.tuneUp = (t) => {
      t.preventDefault();
      const { store: e, player: o } = this.props,
        { mode: i } = this.state;
      let s, n;
      "percent" === i
        ? ((s = 10), (n = Math.floor(o.speed / s) * s + s))
        : ((s = +(100 / o.tempo.bpm).toFixed(2)), (n = o.speed + s)),
        n <= 170 && n >= 30 && vt(e, n);
    };
  }
  __init2() {
    this.tuneDown = (t) => {
      t.preventDefault();
      const { store: e, player: o } = this.props,
        { mode: i } = this.state;
      let s, n;
      "percent" === i
        ? ((s = 10), (n = Math.floor(o.speed / s) * s - s))
        : ((s = +(100 / o.tempo.bpm).toFixed(2)), (n = o.speed - s)),
        n <= 170 && n >= 30 && vt(e, n);
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
      { mode: o } = this.state,
      i = dt(t, e),
      s = Math.round(t);
    let n,
      a = "rhbs rh32c";
    ("percent" === o
      ? 10 * Math.floor(t / 10) - 10
      : t - +(100 / e.bpm).toFixed(2)) >= 30 &&
      ((a = "rhbs"), (n = this.tuneDown));
    let r,
      l = "rhbs rh32c";
    return (
      ("percent" === o
        ? 10 * Math.floor(t / 10) + 10
        : t + +(100 / e.bpm).toFixed(2)) <= 170 &&
        ((l = "rhbs"), (r = this.tuneUp)),
      zt(
        "div",
        { className: "rh2b2", role: "dialog", "aria-label": "Speed" },
        zt(
          "p",
          { className: "rhld" },
          "percent" === o ? "".concat(i.bpm, " bpm") : "".concat(s, "%")
        ),
        zt(
          "div",
          { className: "rhq4" },
          zt("button", { className: a, onClick: n }, zt(Io, { up: !1 })),
          zt(
            "div",
            { className: "rh1x8" },
            zt("p", null, "percent" === o ? "".concat(s, "%") : i.bpm),
            "bpm" === o && zt("span", null, "bpm")
          ),
          zt("button", { className: l, onClick: r }, zt(Io, { up: !0 }))
        ),
        zt(
          "button",
          { className: "rh1sw", onClick: this.switchMode },
          "Switch to ".concat("percent" === o ? "bpm" : "%")
        )
      )
    );
  }
}
var Ii = r(Ai, "player");
const Ri = { animationStyles: Nt };
class Fi extends Dt {
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
      Fi.prototype.__init.call(this),
      Fi.prototype.__init2.call(this),
      (this.state = { minimized: !0, overflowVisible: !1 });
  }
  render() {
    const {
        device: t,
        layer: e,
        shouldPlay: o,
        canPlay: i,
        pitchShift: s,
        pitchShiftAvailable: n,
        speed: a,
      } = this.props,
      { minimized: r, overflowVisible: l } = this.state,
      c = "plus_speed" === e,
      p = "speed" === e,
      h = "plus_solo" === e,
      u = "solo_single" === e,
      d = "plus_pitchshift" === e,
      m = "pitchshift" === e,
      y = "plus_loop" === e,
      f = "plus_mute" === e,
      g = "solo" === this.props.type,
      x = "mute" === this.props.type,
      v = this.props.speed !== _t || p,
      b = this.props.loop,
      w = this.props.isCountin,
      S = 0 !== s || m,
      L = this.props.isMetronome,
      _ = !this.props.plusAccess,
      N = R(t.os) || H(t.os),
      M = { height: "".concat(414 + 57 * (n ? 1 : 0), "px") };
    let T = "x7r3";
    r ? (M.height = "71px") : l && (T = "x7r3 x77p");
    const k = "".concat(Math.round(a), "%");
    return zt(
      "footer",
      { className: "x72sw", "data-controls": "tablature" },
      zt(
        "svg",
        { width: 0, height: 0 },
        zt(
          "defs",
          null,
          zt(
            "filter",
            {
              id: "svg_shadow",
              width: "200%",
              height: "200%",
              x: "-50%",
              y: "-50%",
            },
            zt("feMorphology", {
              radius: 1,
              operator: "dilate",
              in: "SourceAlpha",
              result: "a",
            }),
            zt("feOffset", { dy: 1, in: "a", result: "b" }),
            zt("feGaussianBlur", { stdDeviation: 2, in: "b", result: "c" }),
            zt("feComposite", {
              in: "c",
              in2: "SourceAlpha",
              operator: "out",
              result: "d",
            }),
            zt("feColorMatrix", {
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0",
              in: "d",
              result: "e",
            }),
            zt("feBlend", { in: "SourceGraphic", in2: "e", mode: "normal" })
          )
        )
      ),
      zt(
        "div",
        { className: "x728w", id: "alt-controls" },
        zt($t, {
          shouldPlay: o,
          canPlay: i,
          onClick: this.props.handlePlay,
          title: "Play",
          hideDefs: !0,
        })
      ),
      zt(
        "div",
        { className: "x7x", id: "mobile-controls" },
        zt(
          "div",
          { className: T, style: M },
          zt(
            "div",
            { className: "x72iz x71gg" },
            zt(te, {
              mobile: !0,
              icon: r ? "plus" : "minus",
              pressed: !1,
              onClick: this.minimizeClick,
              title: "Minimize",
              titlePressed: "Minimize",
            })
          ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              mobile: !0,
              icon: "countin",
              pressed: w,
              onClick: this.props.handleCountin,
              title: "Turn count-in mode on (C)",
              titlePressed: "Turn count-in mode off (C)",
            })
          ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              icon: "metronome",
              pressed: L,
              onClick: this.props.handleMetronome,
              title: "Turn metronome on (N)",
              titlePressed: "Turn metronome off (N)",
            })
          ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              mobile: !0,
              icon: "loop",
              pressed: b,
              onClick: this.props.handleLoop,
              title: "Turn loop mode on",
              titlePressed: "Turn loop mode off",
              hasPopup: _,
            }),
            zt(
              $,
              null,
              y &&
                zt(
                  tt,
                  Ri,
                  N
                    ? zt(oi, { title: "Loop Mode", device: t, mobile: !0 })
                    : zt(Wt, { title: "Loop Mode", classPrefix: "loop" })
                )
            )
          ),
          n &&
            zt(
              "div",
              { className: "x72iz" },
              0 !== s &&
                zt(
                  "div",
                  { className: "x7x5" },
                  "".concat(s > 0 ? "+" : "").concat(s)
                ),
              zt(te, {
                mobile: !0,
                icon: "tuning",
                pressed: S,
                onClick: this.props.handlePitchshift,
                title: "Pitch Shift on",
                titlePressed: "Pitch Shift off",
                hasPopup: _,
              }),
              zt(
                $,
                null,
                d &&
                  zt(
                    tt,
                    Ri,
                    N
                      ? zt(oi, { title: "Pitch Shift", device: t, mobile: !0 })
                      : zt(Wt, { title: "Pitch Shift", classPrefix: "pitch" })
                  ),
                m &&
                  zt(
                    tt,
                    Object.assign({}, Ri, { key: "layer" }),
                    zt(Ho, { mobile: !0 })
                  )
              )
            ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              mobile: !0,
              icon: "speed",
              text: k,
              pressed: v,
              onClick: this.props.handleSpeed,
              title: "Change playback speed",
              hasPopup: _,
            }),
            zt(
              $,
              null,
              c &&
                zt(
                  tt,
                  Ri,
                  N
                    ? zt(oi, { title: "Tempo Control", device: t, mobile: !0 })
                    : zt(Wt, { title: "Tempo Control", classPrefix: "speed" })
                ),
              p && zt(tt, Object.assign({}, Ri, { key: "layer" }), zt(Ii, null))
            )
          ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              mobile: !0,
              icon: "mute",
              pressed: x,
              onClick: this.props.handleMute,
              title: "Mute current track (M)",
              titlePressed: "Unmute current track (M)",
              hasPopup: _,
            }),
            zt(
              $,
              null,
              f &&
                zt(
                  tt,
                  Ri,
                  N
                    ? zt(oi, { title: "Mute Mode", device: t, mobile: !0 })
                    : zt(Wt, { title: "Mute Mode", classPrefix: "mute" })
                )
            )
          ),
          zt(
            "div",
            { className: "x72iz" },
            zt(te, {
              mobile: !0,
              icon: "solo",
              pressed: g,
              onClick: this.props.handleSolo,
              title: "Play the current track solo",
              titlePressed: "Play the focus mix of all tracks",
              hasPopup: _,
            }),
            zt(
              $,
              null,
              h &&
                zt(
                  tt,
                  Ri,
                  N
                    ? zt(oi, { title: "Solo Mode", device: t, mobile: !0 })
                    : zt(Wt, { title: "Solo Mode", classPrefix: "solo" })
                ),
              u && zt(tt, Ri, zt(Ei, { title: "Solo", horizontal: !0 }))
            )
          )
        ),
        zt(
          "div",
          { className: "x72iz x72ba" },
          zt($t, {
            onClick: this.props.handlePlay,
            title: "Play",
            titlePressed: "Pause",
            shouldPlay: o,
            canPlay: i,
            hideDefs: !0,
          })
        )
      )
    );
  }
}
function Hi() {
  return zt(
    "section",
    { className: "Bcaic", role: "alert" },
    zt(
      "h1",
      { className: "Bca8k" },
      zt("span", null, "The song was successfully deleted!")
    ),
    zt(
      "h2",
      { className: "Bca1ac" },
      "Try ",
      zt(J, { to: "/" }, "searching"),
      " for other songs."
    )
  );
}
class Oi extends Dt {
  render() {
    return zt(
      "svg",
      { width: 112, height: 112, viewBox: "0 0 ".concat(112, " ").concat(112) },
      zt(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          stroke: "#FD651A",
          "stroke-width": "11",
          transform: "translate(6 6)",
        },
        zt("circle", { cx: 50, cy: 50, r: 50 }),
        zt("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
      )
    );
  }
}
function Yi() {
  return zt(
    Mt,
    {
      level: "notice",
      title:
        "Sorry this content has been removed in your country at the request of the underlying music publisher.",
      action:
        "We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
      reason: "license",
    },
    zt(Oi, null)
  );
}
function Vi(t) {
  let { meta: e, user: o, cursor: i, part: s, player: n, isDeleted: a } = t;
  if (e.loading || s.loading) return;
  const r = !!e.current,
    l = e.current && !!e.current.tracks,
    c = Tt(e, o);
  if (e.isNotFound || s.isNotFound) return zt(ce, null);
  if (a) return zt(Hi, null);
  if (e.isNetworkFailed || s.isNetworkFailed) return zt(pe, null);
  if (e.isFailed || s.isFailed) return zt(ge, null);
  if (!e.allowedByLicense) return zt(Yi, null);
  if (r && !c && e.current.audioV2Error) {
    let t = "Our virtual band was unable to play it O_o";
    return (
      e.current.audioV2Error === kt.TOO_LONG &&
        (t = "Its duration exceeds the 30 minutes limit"),
      zt(Mt, {
        level: "error",
        title: "Sorry, playback is not possible on this song",
        action: t,
        reason: "audio",
      })
    );
  }
  return !r || (l && c)
    ? n.webworkerOperational
      ? n.playbackAvailable && nt
        ? n.isAudioNetworkFailed
          ? zt(Mt, {
              level: "info",
              title: "Audio can't be loaded because of network error.",
              action: "Probably you are offline or connection was canceled",
              reason: "network",
            })
          : n.isAudioFailed
          ? zt(Mt, {
              level: "error",
              title: "Sorry, but there are some problems with ".concat(
                "playback"
              ),
              action: "Please, try to reload page",
              reason: "playback",
            })
          : i.isFailed
          ? zt(Mt, {
              level: "error",
              title: "Sorry, but there are some problems with cursor",
              action: "Please, try to reload page",
              reason: "cursor",
            })
          : void 0
        : zt(Mt, {
            level: "info",
            title: "Sorry, playback is not supported in your browser",
            action: "Try to use latest Google Chrome",
            reason: n.playbackAvailable ? "animate" : "audio",
          })
      : zt(Mt, {
          level: "info",
          title: "Sorry, playback is not possible on this song",
          action: "Probably there is not enough memory",
          reason: "webworker",
        })
    : zt(Mt, {
        level: "info",
        title: "Tab sound is being rendered",
        action: "On average it takes about 5 minutes to process a tab",
        reason: "render",
      });
}
var qi = { main: "Czxoz", showroom: xe + " Czx1s", banner: "Czx1cq" };
const ji = Et(() => {
    const t = Ft(),
      {
        dispatch: e,
        device: o,
        ads: i,
      } = a("device", "ads", "route", "consent"),
      { alt: s, event: n, link: r, image: l } = he(o);
    return zt(
      "div",
      { className: qi.main, id: "showroom_bottom", ref: t },
      zt(
        "div",
        { className: qi.showroom, id: "Redesign_BTF_tab_page_320x50" },
        i.notsyFailed &&
          zt(
            "a",
            {
              className: qi.link,
              onClick: () => e("curiosity/event", { event: n }),
              href: r,
              target: "_blank",
            },
            zt("img", { src: l, className: qi.banner, alt: s })
          )
      )
    );
  }),
  Ui = { onTab: !0 };
function Wi(t) {
  At(() => {
    const e = window.hotKeysManager;
    return (
      e.bindOne("space", t.handlePlay, Ui),
      e.bindOne("l", t.handleLoop, Ui),
      e.bindOne("f", t.handleSolo, Ui),
      e.bindOne("m", t.handleMute, Ui),
      e.bindOne("r", t.handlePitchshift, Ui),
      e.bindOne("t", t.handleMixer, Ui),
      e.bindOne("s", t.handleSpeed, Ui),
      e.bindOne("p", t.handlePrint, Ui),
      e.bindOne("c", t.handleCountin, Ui),
      e.bindOne("n", t.handleMetronome, Ui),
      e.bindOne("e", t.handleTabEditor, Ui),
      e.bindMeta("alt+s", t.handleIncreaseBpm, "global", "App", !0),
      e.bindMeta("alt+a", t.handleDecreaseBpm, "global", "App", !0),
      () => {
        e.unbindOne("space", Ui),
          e.unbindOne("l", Ui),
          e.unbindOne("f", Ui),
          e.unbindOne("m", Ui),
          e.unbindOne("r", Ui),
          e.unbindOne("t", Ui),
          e.unbindOne("s", Ui),
          e.unbindOne("p", Ui),
          e.unbindOne("c", Ui),
          e.unbindOne("n", Ui),
          e.unbindOne("e", Ui);
      }
    );
  }, []);
  const {
      dispatch: e,
      user: o,
      demo: i,
      player: s,
      meta: n,
      part: r,
      cursor: l,
      screen: c,
      layer: { layer: p },
      device: h,
      route: u,
      isDeleted: d,
      browser: m,
      tabEditor: y,
    } = a(
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
      "isDeleted",
      "browser",
      "tabEditor"
    ),
    f = u.isPanel,
    g = ((t, e) => t.hasPlus || e.enabled)(o, i),
    x = c.isSmall,
    v = c.fullscreen,
    b = W(n),
    w = c.landscape,
    S = "saving" === y.status || "changes" === y.status,
    { pitchShift: L } = s,
    _ = Ht(
      () =>
        !!r.current && !!r.current.tuning && r.current.tuning.map((t) => t + L),
      [L, r]
    ),
    N = n.allowedByLicense,
    M = !n.isFailed && !r.isFailed && N,
    T = M && !d && r.current,
    k = M && !d && !r.current,
    P = M && !g,
    E = M && !g && h.isPhone,
    C = E && T,
    B = Rt((t) => e("tabEditor/setForm", t), []);
  return zt(
    "div",
    { key: "AppTab" },
    x &&
      !w &&
      zt(fe, { track: b, layer: p, isChords: !1, handleMixer: t.handleMixer }),
    zt(
      "section",
      {
        className: v ? Pt.tablatureFullscreen : Pt.tablature,
        role: f ? "complementary" : "main",
      },
      E && zt(ue, null),
      zt(ie, {
        plusAccess: g,
        handleFullscreen: t.handleFullscreen,
        handleNotation: t.handleNotation,
      }),
      zt(Vi, { meta: n, user: o, cursor: l, part: r, player: s, isDeleted: d }),
      zt(
        x ? Fi : Xi,
        Object.assign({}, t, {
          shouldPlay: s.shouldPlay,
          canPlay: s.canPlay || f,
          track: b,
          device: h,
          layer: p,
          plusAccess: g,
          loop: 0 !== s.position.loopEnd,
          type: s.type,
          speed: s.speed,
          pitchShift: s.pitchShift,
          pitchShiftAvailable: !r.current || !!r.current.tuning,
          isCountin: s.isCountin,
          isMetronome: s.isMetronome,
          tadEditorWarning: S,
          usedDrums: r.current && r.current.usedDrums,
        })
      ),
      P &&
        zt("section", { className: Pt.showroom }, zt(de, { songId: n.songId })),
      k && zt(me, null),
      T &&
        zt(Li, {
          dispatch: e,
          part: r.current,
          isFullscreen: v,
          isSmallScreen: x,
          isLandscapeScreen: w,
          plusAccess: g,
          shouldPlay: s.shouldPlay,
          width: c.available,
          position: s.position,
          handlePitchshift: t.handlePitchshift,
          showPitchshiftPopup: "plus_pitchshift" === p,
          showPitchshiftLayer: "pitchshift" === p,
          tuning: _,
          layer: p,
          tabEditorData: y.data,
          setTabEditor: B,
          isDesktop: h.isDesktop,
          browserFamily: m.family,
          isLoggedIn: o.isLoggedIn,
        }),
      C && zt(ji, null),
      T && zt(ye, { withAds: P, device: h, copyright: !0 })
    )
  );
}
export { Wi as default };
//# sourceMappingURL=AppTab.e8a00491.js.map
