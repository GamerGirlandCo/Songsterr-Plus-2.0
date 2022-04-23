import {
  u as t,
  H as e,
  I as s,
  aG as o,
  aH as i,
  a9 as a,
  aI as n,
  aJ as r,
  aF as l,
  aK as h,
  aL as p,
  X as c,
  aM as u,
  aN as d,
  aQ as m,
  P as f,
  Q as y,
  aS as g,
  b2 as v,
  b3 as x,
  b4 as b,
  b5 as w,
  a_ as S,
  a$ as L,
  b0 as k,
  b1 as M,
  b6 as $,
  b7 as T,
  bd as N,
  t as C,
  aO as E,
  a2 as P,
  aw as B,
  aZ as D,
  aV as X,
  aU as I,
  aR as z,
  aT as A,
  aW as R,
  aX as F,
  T as O,
  C as j,
  aY as H,
  b8 as Y,
  b9 as q,
  bb as V,
  bc as U,
  ba as _,
  aj as W,
  ak as K,
  an as G,
  am as Q,
  al as Z,
  aP as J,
  U as tt,
  s as et,
  L as st,
  aB as ot,
  aA as it,
  aE as at,
  ax as nt,
  ay as rt,
  aC as lt,
  aD as ht,
  aq as pt,
  at as ct,
  ar as ut,
  as as dt,
  av as mt,
  az as ft,
  ao as yt,
  ap as gt,
  au as vt,
} from "./index.3637aaf7.js";
import {
  g as xt,
  e as bt,
  d as wt,
  a as St,
  v as Lt,
  p as kt,
  i as Mt,
  y as $t,
  _ as Tt,
  A as Nt,
  L as Ct,
  m as Et,
} from "./preact.f8a34c73.js";
import {
  Q as Pt,
  J as Bt,
  V as Dt,
  O as Xt,
  Y as It,
  z as zt,
  q as At,
  E as Rt,
  t as Ft,
  j as Ot,
  X as jt,
  H as Ht,
  g as Yt,
  a as qt,
  C as Vt,
  f as Ut,
  p as _t,
  v as Wt,
} from "./AppHeader.039e213f.js";
import { s as Kt, a as Gt } from "./gplay.42d41a30.js";
import {
  e as Qt,
  t as Zt,
  s as Jt,
  P as te,
  c as ee,
  Z as se,
  K as oe,
  o as ie,
  n as ae,
  q as ne,
} from "./NetworkError.930b5b9c.js";
import { a as re } from "./SWW.de6faff6.js";
import { o as le } from "./ShowroomPlaceholder.module.29a59946.js";
import "./DifficultyIndicator.c7b5f0f9.js";
import "./IconArrow.15aaf41a.js";
class he {
  constructor(t, e) {
    s(this, "lines", void 0),
      s(this, "height", void 0),
      s(this, "slicingMode", void 0);
    const o = (function (t, e) {
      const s = e.width,
        o = [];
      let i = new W(0, t, s);
      o.push(i), t.tuning && (i.width = K);
      for (const e of t.measures)
        e.width + i.width > s &&
          i.measures.length > 0 &&
          ((i = new W(o.length, t, s)), o.push(i)),
          i.measures.push(e),
          (e.layout.lineLayout = i.layout),
          (e.layout.originX = i.width),
          (e.layout.originWidth = e.width),
          (i.width += e.width);
      let a = [],
        n = 0;
      const r = o.length,
        l = e.makeScaleStrategy(r);
      for (i of o)
        (i.hangingText = a),
          (i.layout.y = n),
          (a = i.prepare(t, e, l)),
          (n += i.layout.height);
      return { lines: o, height: n };
    })(t, e);
    (this.slicingMode = e), (this.lines = o.lines), (this.height = o.height);
  }
}
class pe extends class {
  constructor(t) {
    s(this, "width", void 0), (this.width = t);
  }
  areBeatsInSameSlice(t, e) {
    return t.layout.stringY === e.layout.stringY;
  }
  getBendCoordinates(t, e) {
    const s = t.firstRef().beat,
      o = t.lastRef(),
      i = o.note,
      a = i.nextNoteOnString,
      n = !!a && !!a.bendStart && !!a.tie,
      r = n ? o.beat.nextBeat : o.beat,
      l = G(s, e.beat),
      h = G(s, s) - l,
      p =
        G(s, r, !n) -
        l -
        (function (t) {
          const e = t.nextNoteOnString;
          return e && !e.tie ? Q : 0;
        })(i);
    return { x1: h, x2: p };
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
    const s = super.getBendCoordinates(t, e),
      o = s.x1;
    let i = s.x2;
    if (Z(t)) {
      const e = t.firstRef().beat;
      i = e.layout.maxX - e.layout.absoluteX - Q;
    }
    return { x1: o, x2: i };
  }
  getTieSlurPathLength(t, e) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return this.areBeatsInSameSlice(t, e)
      ? e.layout.absoluteX - t.layout.absoluteX
      : s
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
function ce(t) {
  return t.layout.y + t.layout.layers.height - 18;
}
const ue = [4, 10, 16, 21],
  de = xt((e) => {
    let { lines: s, part: o } = e;
    const { dispatch: i, annotations: a } = t("annotations"),
      n = o ? (a.parts && a.parts[o.partId]) || [] : null;
    if (!n) return;
    const r = [];
    for (const t of s)
      for (const e of t.measures) {
        const s = e.layout.x + 2,
          o = ce(t),
          a = e.index + 1,
          l = void 0 !== n[e.index + 1],
          h = ue[a.toString().length - 1],
          p = !l && h + 67 + 7 > e.layout.width,
          c = `add-${a}`,
          u = l ? a : `${a} Add${p ? "" : " comment"}`,
          d = l ? h : h + (p ? 22 : 67),
          m = () => {
            i("annotations/toggle", a);
          };
        r.push(
          bt("path", {
            className: l ? "D55301" : "D552d4",
            "data-annot-num": a,
            "data-has-annotation": l,
            "aria-labelledby": c,
            onClick: m,
            d: `M${s + 7} ${
              o + 13
            }l-2 3-2-3c-2 0-3-1-3-3v-7c0-2 1-3 3-3h${d}c2 0 3 1 3 3v7c0 2-1 3-3 3z`,
          })
        ),
          r.push(
            bt("text", {
              className: "D55335",
              x: s + 2.4,
              y: o + 10,
              id: c,
              children: u,
            })
          );
      }
    return bt(wt, { children: r });
  });
var me = e(
  class extends St {
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
const fe =
    "M.5 36h-1.5l3-10.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  ye = "c1.25-.25 2.75-2.25 3-2.75h1z",
  ge =
    "c.7-.25 1.25-.5 2-1.5l1.5-5.25c-2 .75-4 1.5-5.77-.6a2.38 2.38 0 1 1 4-.4.25.25 0 0 0 .25.25",
  ve = `${fe}${ye}`,
  xe = `${fe}${ge}${ye}`,
  be = `${fe}${ge}${ge}${ye}`,
  we = `${fe}${ge}${ge}${ge}${ye}`,
  Se = `${fe}${ge}${ge}${ge}${ge}${ye}`,
  Le = "M10.8 0a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 12.4 0z",
  ke = `${Le}M0-4l9 8m0-8l-9 8`,
  Me = `${Le}M9-4L0 4`,
  $e =
    "M9.2-3c1 1.9-.4 4.1-2.9 5.4-2.4 1.3-4.9 1.2-6-.8-1-1.9.4-4.3 2.9-5.5 2.4-1.3 4.9-1 6 .9z",
  Te = `${$e}M-3-6L12 5`;
function Ne(t) {
  const e = t.part.strings <= 4 ? c : 0,
    s = 0 !== e ? `translate(0, ${-e})` : void 0,
    o = [
      bt("ellipse", { id: "dot", cx: 10, cy: 17.5 - e, rx: 1.5, ry: 1.5 }),
      bt("rect", { id: "rest1", y: 24 - e, x: -6, width: 12, height: 6 }),
      bt("rect", { id: "rest2", y: 18 - e, x: -6, width: 12, height: 6 }),
      bt("path", {
        id: "rest4",
        transform: s,
        d: "M5.5 23.5C3.25 26 2.25 28 2.25 29.25s1.25 3 3.25 5.5l-.75 1C4 35.25 2 34.25 1 35.25S.5 38.5 2.25 40l-.75 1c-2.95-2.03-5.25-5.25-3.75-7.5s4.25-.75 4.5-.5l-4.5-6.25c2-1.75 3-3.5 3-5s-.5-2.75-2-4.5H.5z",
      }),
      bt("path", { id: "rest8", transform: s, d: ve }),
      bt("path", { id: "rest16", transform: s, d: xe }),
      bt("path", { id: "rest32", transform: s, d: be }),
      bt("path", { id: "rest64", transform: s, d: we }),
      bt("path", { id: "rest128", transform: s, d: Se }),
      bt("path", {
        id: "tempo",
        d: "M6-3.7C6-2 4.9-1.1 4.9-1.1a3 2.1-27 1 1 0-3V-17h1.2z",
      }),
    ],
    i = !this.props.part.usedDrums;
  return bt("defs", {
    children: i
      ? o
      : [
          ...o,
          bt("path", { id: "drumCross", d: "M0-4l9 8m0-8l-9 8" }),
          bt("path", {
            id: "drumHat",
            d: "M-2-7l6.5-4l6.5 4",
            style: "fill: none",
          }),
          bt("path", {
            id: "drumHatEdge",
            d: "M-2-7h8l5 -5",
            style: "fill: none",
          }),
          bt("path", { id: "drumTriangle", d: "M0 3l4.7-7 4.7 7z" }),
          bt("path", { id: "drumRhomb", d: "M5-4.5l5 4-5 4-5-4 5-4z" }),
          bt("path", { id: "drumCircleCross", d: ke, style: "fill: none" }),
          bt("path", { id: "drumCircleStroke", d: Me, style: "fill: none" }),
          bt("path", { id: "drum", d: $e }),
          bt("path", { id: "drumStroke", d: Te }),
          bt("path", { id: "extraLine", d: "M-4 0l16 0" }),
        ],
  });
}
function Ce(t) {
  let { text: e, layout: s, xoffset: o } = t;
  const i = e.layer;
  if (i) {
    const t = s ? i.x1 - s.absoluteX : i.x1,
      a = -1 * i.y;
    return bt("text", {
      className: "C351",
      x: t + o,
      y: a,
      dy: "-0.25em",
      children: e.text,
    });
  }
  return null;
}
function Ee(t) {
  let { layer: e } = t;
  const { x1: s, x2: o, y: i } = e,
    a = o - s,
    n = s,
    r = -1 * i - 2,
    l = [
      bt(
        "text",
        { className: "bh1o4", x: n, y: r, children: "let ring" },
        "let ring"
      ),
    ];
  return (
    a > 46 &&
      (l.push(
        bt(
          "line",
          {
            className: "bh162 bhth",
            x1: 46 + n,
            y1: -3 + r,
            x2: a - 2 + n,
            y2: -3 + r,
          },
          "dotted"
        )
      ),
      l.push(
        bt(
          "line",
          { className: "bh162", x1: a + n, y1: 1 + r, x2: a + n, y2: -7 + r },
          "line"
        )
      )),
    bt(wt, { children: l })
  );
}
function Pe(t) {
  let { layer: e } = t;
  const { x1: s, x2: o, y: i } = e,
    a = s,
    n = -1 * i - 2,
    r = o - s,
    l = [Lt("text", { className: "C4a2yy", x: a, y: n, key: "pm" }, "P. M.")];
  return (
    r > 35 &&
      (l.push(
        Lt("line", {
          className: "C4a2ve C4a1op",
          x1: 35 + a,
          y1: -3 + n,
          x2: r - 2 + a,
          y2: -3 + n,
          key: "dotted",
        })
      ),
      l.push(
        Lt("line", {
          className: "C4a2ve",
          x1: r + a,
          y1: 1 + n,
          x2: r + a,
          y2: -7 + n,
          key: "line",
        })
      )),
    Lt(wt, null, l)
  );
}
function Be(t) {
  let { layer: e, effectValue: s } = t;
  const { x1: o, x2: i, y: a } = e,
    n = i - o,
    r = o,
    l = -1 * a - 2;
  let h = "Harm.";
  switch (s) {
    case "artificial":
      h = "A. H.";
      break;
    case "semi":
      h = "S. H.";
      break;
    case "tapped":
      h = "T. H.";
      break;
    case "pinch":
      h = "P. H.";
  }
  const p = [
    bt("text", { className: "q71wu", x: r, y: l, children: h }, "Harm."),
  ];
  return (
    n > 40 &&
      (p.push(
        bt(
          "line",
          {
            className: "q72a q712i",
            x1: 40 + r,
            y1: -3 + l,
            x2: n - 2 + r,
            y2: -3 + l,
          },
          "dotted"
        )
      ),
      p.push(
        bt(
          "line",
          { className: "q72a", x1: n + r, y1: 1 + l, x2: n + r, y2: -7 + l },
          "line"
        )
      )),
    bt(wt, { children: p })
  );
}
function De(t) {
  let { layer: e, wide: s } = t;
  const { x1: o, x2: i, y: a } = e,
    n = i - o,
    r = (function (t, e, s, o) {
      let i = `M${e} ${s + 4}l3-3.5`,
        a = `v${o ? 2 : 1}.8l-3 3.5`;
      for (let e = 0; e < t; e++)
        (i += "a.5.5 0 0 1 .7 0l2.3 2a.5.5 0 0 0 .7 0l1.8-2"),
          (a += "a.5.5 0 0 1-.7 0l-2.3-2a.5.5 0 0 0-.7 0l-1.8 2");
      return i + a + "z";
    })(n > 14 ? Math.floor((n - 3) / 5.5) : 2, o, -(a + 6), s);
  return bt("path", { className: "C0x28", d: r });
}
class Xe extends St {
  constructor() {
    super(...arguments),
      s(this, "renderEffect", (t, e) => {
        const s = {
          layer: t.layer,
          key: `${t.effect}-${this.props.line.index}-${e}`,
          line: this.props.line,
          effectValue: t.effectValue,
        };
        switch (t.effect) {
          case "letRing":
            return Lt(Ee, s);
          case "palmMute":
            return Lt(Pe, s);
          case "harmonic":
            return Lt(Be, s);
          case "vibrato":
            return Lt(De, Object.assign({}, s, { wide: !1 }));
          case "wideVibrato":
            return Lt(De, Object.assign({}, s, { wide: !0 }));
          default:
            return null;
        }
      });
  }
  render() {
    return Lt(wt, null, this.props.line.effects.map(this.renderEffect));
  }
}
function Ie(t, e) {
  return () => t;
}
const ze = Ie(0);
function Ae(t) {
  const { note: e, beat: s, part: o, x: i, edited: a, platform: n } = t;
  if (!e.isVisible && (!a || (a && e.bogus))) return null;
  const r = `translate(${i}, 0)`;
  if (s.rest) {
    if (s.layout.usedStrings || (0 !== s.voice && s.layout.usedRest))
      return null;
    const t = Vt[`rest${s.voice}`],
      e = bt(
        "use",
        { className: t, xlinkHref: `#rest${s.type}`, transform: r },
        "rest"
      );
    if (s.dotted) {
      const s = bt(
        "use",
        { className: t, xlinkHref: "#dot", transform: r },
        "dot"
      );
      return bt(wt, { children: [e, s] });
    }
    return e;
  }
  if (o.usedDrums && o.isDrumStdOn) {
    const t = Vt[`drums${s.voice}`],
      o = `translate(${i}, ${0.5 + c * e.string})`,
      a = e.orientation ? o : o + " translate(-10, 0)";
    return bt(wt, {
      children: [
        (e.string <= -1 || e.string >= 5) &&
          bt(Ut, {
            noteString: e.string,
            className: Yt.strings,
            noteTransform: a,
          }),
        1 !== s.type &&
          bt("path", {
            className: Vt[`stick${s.voice}`],
            transform: o,
            d: _t(e.fret, e.string),
          }),
        (e.tie || e.ghost) &&
          bt("text", { x: i - 6, y: c * e.string + ze(n) + 5 }, "("),
        bt(Wt, { fret: e.fret, className: t, transform: a }),
        (e.tie || e.ghost) &&
          bt("text", { x: i + 11, y: c * e.string + ze(n) + 5 }, ")"),
      ],
    });
  }
  let l = "",
    h = 0;
  const p = o.usedDrums;
  if (p) {
    const t = o.usedDrums.get(e.fret);
    t && ((l = t.name || "*"), (h = t.string || 0));
  } else (l = e.dead ? "X" : e.fret.toString()), (h = e.string);
  let u = Vt[`${p ? "vDrum" : "voice"}${s.voice}`];
  a && (u = `${u} ${Vt.edited}`);
  const d = bt(
    "text",
    {
      className: u,
      x: i,
      y: c * h + ze(n),
      children: e.tie || e.ghost ? `(${l})` : l,
    },
    "text"
  );
  if (e.harmonic) {
    const t = bt(
      "path",
      {
        className: Vt.harmonic,
        transform: `translate(${i - 17}, ${c * h - 3.5} )`,
        d: "M 0,3.5 L 3.5,0 7,3.5 3.5,7 Z",
      },
      "harmonic"
    );
    return bt(wt, { children: [t, d] });
  }
  return d;
}
function Re(t, e, s, o, i) {
  const a = e ? e.margin(yt) : 0,
    n = c * o - 7,
    r = i - a - (s ? s.margin(yt) : 0),
    l = Math.min(Math.floor(r / 3), 10),
    h = Math.max(c - 4, 3),
    p = h - 1;
  return `M${a + t} ${n}c${l}-${h} ${r - l}-${h} ${r} 0c-${l}-${p}-${
    r - l
  }-${p}-${r} 0z`;
}
function Fe(t) {
  let { x: e, start: s, end: o, slicingMode: i } = t;
  if (o) {
    const t = o.firstRef().beat,
      s = o.lastRef().beat,
      a = o.lastRef().note;
    if (s.layout && t.layout) {
      const o = i.getTieSlurPathLength(t, s, !0);
      return bt("path", {
        className: "B642k5",
        d: Re(e - o, null, a, a.string, o),
      });
    }
  } else if (s) {
    const t = s.firstRef().beat,
      o = s.lastRef().beat,
      a = s.firstRef().note,
      n = s.lastRef().note;
    if (o.layout && t.layout) {
      const s = i.areBeatsInSameSlice(t, o),
        r = i.getTieSlurPathLength(t, o);
      return bt("path", {
        className: "B642k5",
        d: Re(e, a, s ? n : null, a.string, r),
      });
    }
  }
  return null;
}
function Oe(t, e, s, o, i) {
  const a = e ? e.margin(gt) : 0,
    n = c * o + 7,
    r = i - a - (s ? s.margin(gt) : 0),
    l = Math.min(Math.floor(r / 3), 10),
    h = Math.max(c - 5, 3),
    p = h - 1;
  return `M${a + t} ${n}c${l} ${h} ${r - l} ${h} ${r} 0c-${l} ${p}-${
    r - l
  } ${p}-${r} 0z`;
}
function je(t) {
  let { x: e, start: s, end: o, slicingMode: i } = t;
  if (o) {
    const t = o.firstRef().beat,
      s = o.lastRef().beat,
      a = o.lastRef().note;
    if (s.layout && t.layout) {
      const o = i.getTieSlurPathLength(t, s, !0),
        n = a.string;
      return bt("path", { className: "Bbl9p", d: Oe(e - o, null, a, n, o) });
    }
  }
  if (s) {
    const t = s.firstRef().beat,
      o = s.lastRef().beat,
      a = s.firstRef().note,
      n = s.lastRef().note;
    if (o.layout && t.layout) {
      const s = i.areBeatsInSameSlice(t, o),
        r = i.getTieSlurPathLength(t, o),
        l = a.string;
      return bt("path", {
        className: "Bbl9p",
        d: Oe(e, a, s ? n : null, l, r),
      });
    }
  }
  return null;
}
function He(t, e) {
  if ((t.x1 === t.x2 && t.y1 === t.y2) || (e.x1 === e.x2 && e.y1 === e.y2))
    return null;
  const s = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
  if (0 === s) return null;
  const o = ((e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1)) / s,
    i = ((t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1)) / s;
  return o < 0 || o > 1 || i < 0 || i > 1
    ? null
    : { x: t.x1 + o * (t.x2 - t.x1), y: t.y1 + o * (t.y2 - t.y1) };
}
function Ye(t) {
  let { x: e, cfx: s, note: o } = t;
  const i = s.firstRef().beat,
    a = s.lastRef().beat;
  if (!a.layout || !i.layout) return null;
  const n = s.firstRef().note,
    r = s.lastRef().note,
    l = n.string,
    h = n.fret >= r.fret ? -2 : 2,
    p = G(i, o.beat),
    u = G(i, i),
    d = G(i, a),
    m = (function (t, e, s) {
      const o = { x1: s, y1: 1e3, x2: s, y2: -1e3 },
        i = He(t, { x1: e, y1: 1e3, x2: e, y2: -1e3 }),
        a = He(t, o);
      return {
        x1: i ? i.x : t.x1,
        y1: i ? i.y : t.y1,
        x2: a ? a.x : t.x2,
        y2: a ? a.y : t.y2,
      };
    })(
      {
        x1: e + u - p + n.margin(pt),
        y1: c * l + h,
        x2: e + d - p - r.margin(pt),
        y2: c * l - h,
      },
      o.beat.layout.minX,
      o.beat.layout.maxX
    );
  return bt("line", Object.assign({ className: "zy1tz" }, m));
}
function qe(t) {
  let { x: e, y: s, up: o } = t;
  return bt("path", {
    className: "Bxm1ag",
    d: `M ${e},${s} l 2,${o ? 5 : -5} -4,0 2,${o ? -5 : 5}`,
  });
}
const Ve = ["¼", "½", "¾"],
  Ue = Ie(4),
  _e = Ie(11);
function We(t) {
  if (100 === t) return "full";
  if (t) {
    let e = "";
    const s = Math.floor(t / 100);
    s && (e += s);
    const o = t % 100;
    return o >= 25 && (e += Ve[Math.floor(o / 25) - 1]), e;
  }
  return "";
}
function Ke(t) {
  let { x: e, y: s, up: o, tone: i, platform: a } = t;
  return bt("text", {
    className: o ? "C9k1hh" : "C9k17",
    x: e,
    y: o ? s - Ue(a) : s + _e(a),
    children: We(i),
  });
}
function Ge(t, e) {
  if (!t) return !1;
  const s = t.firstRef().note.bend;
  if (!s) return !1;
  const o = s.points,
    i = o.length;
  return !(i < 1) && o[i - 1].tone === e;
}
function Qe(t, e, s, o, i) {
  return {
    elements: e ? [...t.elements, e] : t.elements,
    prevTone: s,
    prevX: o,
    prevY: i,
  };
}
function Ze(t) {
  const { cfx: e, note: s, slicingMode: o, x: i, platform: a } = t,
    n = e.firstRef().note,
    r = n.bend;
  if (!r) return null;
  const { x1: l, x2: h } = o.getBendCoordinates(e, s),
    p = h - l,
    u = l + i,
    { elements: d } = r.points.reduce(
      (function (t, e, s, o) {
        const i = ct + c * t.string;
        return function (a, n, r) {
          const { tone: l, position: h } = n,
            p = 0 === l ? i : ct - l / vt;
          if (0 === r) {
            if (!t.tie && 0 !== l) {
              const t = (function (t, e, s, o, i, a) {
                return [
                  bt(
                    "line",
                    { className: "Cs020", x1: s, y1: o + ut, x2: s, y2: i },
                    `prebend-${t}`
                  ),
                  bt(qe, { x: s, y: i, up: !0 }, `arrow-${t}`),
                  bt(
                    Ke,
                    { tone: e, x: s, y: i, up: !0, platform: a },
                    `y-${t}`
                  ),
                ];
              })(r, l, e, i, p, o);
              return Qe(a, t, l, e, p);
            }
            return Qe(a, null, l, e, 0 !== l ? p : i);
          }
          const { prevTone: c, prevX: u, prevY: d } = a,
            m = (s * h) / 60 + e;
          if (l === c) {
            const t = (function (t, e, s, o, i, a) {
              return e <= 0
                ? null
                : [
                    bt(
                      "line",
                      { className: "Cs04d Cs0dp", x1: s, y1: o, x2: i, y2: a },
                      `hold-${t}`
                    ),
                  ];
            })(r, l, u, p, m, p);
            return Qe(a, t, l, m, p);
          }
          const f = (function (t, e, s, o, i, a, n, r, l, h) {
            const p = l < n,
              c = e.prevNoteOnString,
              u = c && !!c.bendEnd,
              d = c && (!!c.bendStart || !!c.bendPart || !!c.bendEnd),
              m =
                c &&
                (function (t) {
                  if (!t) return !1;
                  const e = t.firstRef().note.bend;
                  if (!e) return !1;
                  const s = e.points,
                    o = s.length;
                  if (o < 2) return !1;
                  const i = s[o - 2].tone;
                  return s[o - 1].tone === i;
                })(c.bendEnd) &&
                Ge(c.bendEnd, 0),
              f = e.tie && u && !m && Ge(c.bendEnd, s) && 0 !== s,
              y = i !== a || 0 !== s || (f && d) ? 0 : e.margin(dt),
              g = [
                bt(
                  "path",
                  {
                    className: "Cs04d",
                    d: `M ${a + y},${n} Q ${r},${n} ${r},${p ? l + 4 : l - 4}`,
                  },
                  `bend-${t}`
                ),
                bt(qe, { x: r, y: l, up: p }, `arrow-${t}`),
              ];
            return (
              0 !== o &&
                g.push(
                  bt(Ke, { tone: o, x: r, y: l, up: p, platform: h }, `y-${t}`)
                ),
              g
            );
          })(r, t, c, l, e, u, d, m, p, o);
          return Qe(a, f, l, m, p);
        };
      })(n, u, p, a),
      { elements: [], prevTone: 0, prevX: 0, prevY: 0 }
    );
  return bt(wt, { children: d });
}
function Je(t) {
  let { lyrics: e, x: s } = t;
  const o = e.layer;
  if (o) {
    const t = mt(e) + s + o.diff;
    return bt("text", {
      className: "ls209",
      x: t,
      y: o.y + o.height,
      children: e.text,
    });
  }
  return null;
}
function ts(t) {
  let { note: e, x: s, type: o } = t;
  const i = e.string,
    a = "left" === o ? -1 : 1;
  let n = "upwards" === e.rightSlide ? 1 : -1;
  "left" === o && (n = "above" === e.leftSlide ? 1 : -1);
  const r = e.margin(pt);
  return bt("line", {
    className: "zy1tz",
    x1: a * r + s,
    y1: c * i + 2 * n,
    x2: a * (r + 15) + s,
    y2: c * i - 2 * n,
  });
}
function es(t) {
  let { fret: e, x: s, string: o, originalFret: i } = t;
  if ("" === i) {
    const t = e.length >= 2 ? 11.5 : 7.5;
    return bt(wt, {
      children: [
        bt("line", {
          className: "Cge2e0",
          x1: s - t,
          y1: c * o,
          x2: s + t,
          y2: c * o,
        }),
        bt("text", {
          className: "Cge206",
          x: s,
          y: c * o,
          children: e,
          "data-fret": e,
        }),
      ],
    });
  }
  let a = 10;
  return (
    e.length >= 2 && (a += 3),
    i.length >= 2 && (a += 4),
    bt(wt, {
      children: [
        "" !== e &&
          bt("text", {
            className: "Cge206",
            x: s + a,
            y: c * o - 4,
            children: e,
            "data-fret": e,
          }),
        bt("line", {
          className: "Cgen4",
          x1: s - 4,
          y1: c * o - 7,
          x2: s + 4,
          y2: c * o + 4,
        }),
      ],
    })
  );
}
function ss(t) {
  let { up: e, min: s, max: o, xoffset: i } = t;
  const a = (o - s + 1) * c,
    n = e ? 4 : a - 4,
    r = e ? 0 : a,
    l = n,
    h = n,
    p = (s - 0.5) * c,
    u = i - 15;
  return bt(wt, {
    children: [
      bt(
        "line",
        { className: "ekka", x1: 4 + u, y1: p, x2: 4 + u, y2: (o + 0.5) * c },
        "line"
      ),
      bt(
        "polygon",
        {
          className: "ek2wg",
          points: `${4 + u},${r + p} ${0 + u},${l + p} ${8 + u},${h + p} ${
            4 + u
          },${r + p}`,
        },
        "polygon"
      ),
    ],
  });
}
function os(t) {
  const e = [],
    {
      layout: s,
      part: o,
      measure: i,
      slicingMode: a,
      measureEditorData: n,
      platform: r,
      x: l,
    } = t,
    h = l + s.x;
  for (const t of s.beats)
    if (t.lyrics)
      for (const s of t.lyrics)
        e.push(bt(Je, { lyrics: s, x: h }, `lyrics${t.index}`));
    else {
      t.text &&
        e.push(
          bt(Ce, { text: t.text, layout: s, xoffset: h }, `text${t.index}`)
        );
      const l = t.tapping;
      l &&
        l.layer &&
        e.push(
          bt(
            "text",
            {
              className: "ek188",
              y: -1 * l.layer.y,
              x: Math.max(-1 * Math.floor(l.width / 2) + h, (-1 * B) / 2),
              dy: "-0.25em",
              children: l.text,
            },
            `tap${t.index}`
          )
        );
      const p = t.chord;
      p &&
        p.layer &&
        e.push(
          bt(
            "text",
            {
              className: "ek2k6",
              y: -1 * p.layer.y,
              x: Math.max(-1 * Math.floor(p.width / 2) + h, (-1 * B) / 2),
              dy: "-0.25em",
              children: p.text,
            },
            `chord${t.index}`
          )
        );
      let c = Number.MAX_VALUE,
        u = 0;
      if (!i.rest) {
        if (o.usedDrums) {
          const e = t.notes
            .filter((t) => !t.bogus)
            .map((t) => ({ string: Math.floor(2 * t.string), note: t }));
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
          o.isDrumStdOn &&
          e.push(
            bt(
              "path",
              { className: "ek2wd", d: `M${h - 2}${-t.hat.layer.y}h8l5 -5` },
              `hat${t.index}`
            )
          );
        const s =
            n && n.find((e) => e.beatNum === t.index && e.voice === t.voice),
          i = s && s.editedNotes;
        t.staccato &&
          t.staccato.layer.visible &&
          e.push(
            bt(
              "circle",
              {
                className: t.staccato.layer.voice ? "ek2ic" : "ek2zh",
                cx: h,
                cy: -t.staccato.layer.y - 5,
                r: 2,
              },
              `st${t.index}`
            )
          ),
          t.accentuated &&
            t.accentuated.layer.visible &&
            e.push(
              bt(
                "path",
                {
                  className: t.accentuated.layer.voice
                    ? "ek2i4 ek2z7"
                    : "ek2i4",
                  d: `m${h - 5}${-t.accentuated.layer.y - 2}l9-3l-9-3`,
                },
                `acc${t.index}`
              )
            ),
          t.heavyAccentuated &&
            t.heavyAccentuated.layer.visible &&
            e.push(
              bt(
                "path",
                {
                  className: t.heavyAccentuated.layer.voice
                    ? "ek2i4 ek2z7"
                    : "ek2i4",
                  d: `m${h - 4}${
                    -t.heavyAccentuated.layer.y - 2
                  }l3-8h1l3,7.5h-1l-3-7.5m-0.5,1l3,7`,
                },
                `hacc${t.index}`
              )
            );
        for (const s of t.notes) {
          (!t.upStroke && !t.downStroke) ||
            s.tie ||
            ((c = Math.min(c, s.string)), (u = Math.max(u, s.string))),
            e.push(
              bt(
                Ae,
                {
                  note: s,
                  beat: t,
                  part: o,
                  x: h,
                  platform: r,
                  edited: i && !!i.find((t) => t.string === s.string),
                },
                `note${t.index}-${s.index}-voice${t.voice}`
              )
            ),
            s.tieStart &&
              e.push(
                bt(
                  je,
                  { start: s.tieStart, slicingMode: a, x: h },
                  `tie${t.index}-${s.index}`
                )
              ),
            s.tieEnd &&
              nt(s.tieEnd) &&
              e.push(
                bt(
                  je,
                  { end: s.tieEnd, slicingMode: a, x: h },
                  `tieEnd${t.index}-${s.index}`
                )
              ),
            s.slurStart &&
              e.push(
                bt(
                  Fe,
                  { start: s.slurStart, slicingMode: a, x: h },
                  `slur${t.index}-${s.index}`
                )
              ),
            s.slurEnd &&
              nt(s.slurEnd) &&
              e.push(
                bt(
                  Fe,
                  { end: s.slurEnd, slicingMode: a, x: h },
                  `slurEnd${t.index}-${s.index}`
                )
              ),
            s.leftSlide &&
              e.push(
                bt(ts, {
                  note: s,
                  type: "left",
                  key: `slideShortLeft${t.index}-${s.index}`,
                  x: h,
                })
              ),
            s.rightSlide &&
              "shift" !== s.rightSlide &&
              "legato" !== s.rightSlide &&
              e.push(
                bt(ts, {
                  note: s,
                  type: "right",
                  key: `slideShortRight${t.index}-${s.index}`,
                  x: h,
                })
              ),
            s.slideStart &&
              e.push(
                bt(
                  Ye,
                  { note: s, cfx: s.slideStart, x: h },
                  `slide${t.index}-${s.index}`
                )
              ),
            s.slideEnd &&
              nt(s.slideEnd) &&
              e.push(
                bt(
                  Ye,
                  { note: s, cfx: s.slideEnd, x: h },
                  `slideEnd${t.index}-${s.index}`
                )
              );
          const n = a.bendsForNote(s);
          for (let o = 0; o < n.length; o++) {
            const i = n[o];
            a.shouldDrawBendOnNote(i, s) &&
              e.push(
                bt(
                  Ze,
                  { cfx: i, note: s, slicingMode: a, x: h, platform: r },
                  `bend${t.index}-${s.index}-${o}`
                )
              );
          }
        }
        i &&
          i.forEach((s) =>
            e.push(
              bt(
                es,
                {
                  x: h,
                  fret: s.fret,
                  originalFret: s.originalFret,
                  string: s.string,
                },
                `editedNote${t.index}-${s.string}`
              )
            )
          ),
          o.usedDrums ||
            ((t.upStroke || t.downStroke) &&
              c < u &&
              e.push(
                bt(
                  ss,
                  { up: !!t.upStroke, min: c, max: u, xoffset: h },
                  `stroke${t.index}`
                )
              ));
      }
    }
  return bt(wt, { children: e });
}
const is =
    "M8.8 0v23.84c0 .88-.3 1.71-.91 2.46A5.15 5.15 0 0 1 5.66 28c-.9.4-1.8.6-2.65.6a3.03 3.03 0 0 1-2.05-.65 2.43 2.43 0 0 1-.96-1.8 4 4 0 0 1 .96-2.4 7.74 7.74 0 0 1 2.29-1.81c.8-.42 1.69-.64 2.6-.64.89 0 1.64.24 2.23.7V0z",
  as = "M.8 0h15v3.5H.8z";
function ns(t) {
  let {
    tripletFeel: { feel: e, layer: s },
    x: o,
  } = t;
  if (!s) return null;
  const { y: i } = s,
    a = "off" === e,
    n = "16th" === e,
    r = "8th" === e;
  return Lt(
    "g",
    { transform: `translate(${o},-${i + 42})` },
    Lt("path", { d: is, transform: "translate(10,10)", className: "rw256" }),
    Lt("path", { d: is, transform: "translate(25,10)", className: "rw256" }),
    Lt("path", { d: as, transform: "translate(18,10)", className: "rw256" }),
    n &&
      Lt("path", { d: as, transform: "translate(18,15)", className: "rw256" }),
    Lt("path", { d: is, transform: "translate(48,10)", className: "rw256" }),
    Lt("path", { d: is, transform: "translate(63,10)", className: "rw256" }),
    (a || n) &&
      Lt("path", { d: as, transform: "translate(56,10)", className: "rw256" }),
    n &&
      Lt("path", {
        d: "M8.8 0h7v3.5h-7z",
        transform: "translate(56,15)",
        className: "rw256",
      }),
    r &&
      Lt("path", {
        d: "M8.82.02c.61 4.89 2.63 5.65 5.08 8.82a9.48 9.48 0 0 1 2.08 5.6c0 2-.84 4.4-2.52 7.24h-.48c1.45-3.1 2.26-5.33 2.08-7.26-.4-4.36-4.43-6.63-6.26-6.61L8.07 0l.75.02z",
        transform: "translate(63,10)",
        className: "rw256",
      }),
    !a && Lt("text", { className: "rw2jc", x: 64, y: 0 }, 3),
    !a && Lt("path", { className: "rw33j", d: "M51 7V4h9m7 0h9v3" }),
    Lt("path", { d: "M37 27v-1h10v1zm0 3v-1h10v1z", className: "rw256" })
  );
}
const rs = {
  voice0: "Gy73",
  voice1: "Gy2no",
  voice2: "Gy8f",
  voice3: "Gy1lf",
  "voice0-tremolo": "Gy1fk",
  "voice1-tremolo": "Gy1ax",
  "voice2-tremolo": "Gy4w",
  "voice3-tremolo": "Gybj",
};
function ls(t) {
  const { voice: e, x: s, y: o, tremoloOffset: i } = t;
  if (e.hasSameRhythm) return null;
  const a = e.beats,
    n = ft + i,
    r = n / 2;
  let l = "",
    h = "",
    p = 0;
  const c = [],
    u = new Array(4);
  let d = !1;
  for (const t of a) {
    const e = t.layout.x;
    1 !== t.type &&
      (l +=
        2 === t.type
          ? `M${s + e},${o + r + 2}v${r}`
          : `M${s + e},${o + 2}v${n}`);
    let i = 0,
      c = 8;
    if ((t.beamStart ? (d = !0) : t.beamStop && (d = !1), d)) {
      if (t.index === a.length - 1)
        throw new Error("Something wrong with beaming model");
      const s = a[t.index + 1];
      let o = Math.min(t.type, s.type);
      for (t.tupletStop && (o = Math.min(o, 8)); c <= o; ) {
        let o = u[i];
        o
          ? (o.length += s.layout.x - t.layout.x)
          : ((o = { x: e, length: s.layout.x - t.layout.x }), (u[i] = o)),
          i++,
          (c *= 2);
      }
    }
    const m = i,
      f = i < p || t.tupletStop || t.beamStop;
    for (; i < p; i++, c *= 2) {
      const t = u[i];
      (u[i] = void 0),
        t && (l += `M${s + t.x},${o + n - rt * i}v2h${t.length}v-2z`);
    }
    for (; c <= t.type; i++, c *= 2)
      l += `M${s + e},${o + n - rt * i}v2h${f ? "-7" : "7"}v-2z`;
    if (
      (t.dotted &&
        1 !== t.type &&
        (l += `M${s + e + 4},${o + n - rt * i}v2h2v-2z`),
      t.tremolo)
    )
      for (let i = 0; i < t.tremolo.type; i++)
        h += `M${s + e - 5},${o + 6 + 3 * i}l10-3z`;
    p = m;
  }
  if (l.length) {
    const t = `voice${e.index}`;
    c.push(bt("path", { className: rs[t], d: l }));
  }
  if (h.length) {
    const t = `voice${e.index}-tremolo`;
    c.push(bt("path", { className: rs[t], d: h }));
  }
  return c.length ? bt(wt, { children: c }) : null;
}
const hs = {
    path: "Bhq244",
    text: "Bhq1lk",
    voice0: "Bhq8x",
    voice1: "Bhq1hy",
    voice2: "Bhq13i",
    voice3: "Bhq2w3",
  },
  ps = Ie(9);
function cs(t) {
  let {
    tuplet: e,
    voice: s,
    start: o,
    stop: i,
    platform: a,
    x: n,
    y: r,
    tremoloOffset: l,
  } = t;
  const h = o.layout.x + n,
    p = i.layout.x - o.layout.x,
    c = Math.round(p / 2),
    u = e > 9 ? 8 : 5,
    d = `M 0,0 L 0,6 ${c - u},6 M ${c + u},6 L ${p},6 ${p},0`;
  r += it - 2 + l;
  const m = `voice${s.index}`;
  return bt("g", {
    className: hs[m],
    transform: `translate(${h},${r})`,
    children: [
      bt("text", { className: hs.text, x: c, y: ps(a), children: e }),
      bt("path", { className: hs.path, d }),
    ],
  });
}
function us(t) {
  const { layer: e, alternateEnding: s } = t.alternateEnding;
  if (e) {
    const { x1: o, x2: i, y: a } = e,
      n = i - o,
      r = t.x;
    return Lt(
      "g",
      { transform: `translate(${r},${-1 * a - 14})` },
      Lt("text", { className: "Chi2up", x: 4, y: "14" }, s.join(",")),
      Lt("path", { className: "Chi2a3", d: `M 1,14 L 1,0 ${n - 6},0` })
    );
  }
  return null;
}
function ds(t) {
  let { marker: e, x: s } = t;
  const o = e.layer;
  return o
    ? bt("text", {
        className: "kw1ty",
        x: s,
        y: -1 * o.y,
        dy: "-0.25em",
        children: e.text,
      })
    : null;
}
function ms(t) {
  let { line: e, x: s } = t;
  const o = (e.strings - 1) * c;
  return Lt(
    "g",
    { className: "Rep", transform: `translate(${s},0)` },
    Lt("rect", { className: "Bjniz", width: 4, height: o }),
    Lt("path", { className: "Bjnzo", d: `M 8,0 L 8,${o}` }),
    Lt("ellipse", {
      className: "Bjnch",
      cx: 13,
      cy: Math.floor(o / 3),
      rx: 2,
      ry: 2,
    }),
    Lt("ellipse", {
      className: "Bjnch",
      cx: 13,
      cy: Math.floor((2 * o) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
function fs(t) {
  let { line: e, measure: s, x: o } = t;
  const i = (e.strings - 1) * c;
  return Lt(
    "g",
    { transform: `translate(${s.layout.width - 18 + o},0)` },
    s.repeat > 2 &&
      Lt("text", { className: "Bjn2ws", x: 2.5, y: -2 }, s.repeat + "x"),
    Lt("rect", { className: "Bjniz", x: 14, width: 4, height: i }),
    Lt("path", { className: "Bjnzo", d: `M 11,0 L 11,${i}` }),
    Lt("ellipse", {
      className: "Bjnch",
      cx: 6,
      cy: Math.floor(i / 3),
      rx: 2,
      ry: 2,
    }),
    Lt("ellipse", {
      className: "Bjnch",
      cx: 6,
      cy: Math.floor((2 * i) / 3),
      rx: 2,
      ry: 2,
    })
  );
}
const ys = Ie(-8),
  gs = Ie(21);
function vs(t) {
  const {
      measure: e,
      line: s,
      part: o,
      slicingMode: i,
      measureEditorData: a,
      platform: n,
    } = t,
    r = e.layout.x,
    l = [
      bt(
        "text",
        { className: "Cpu2zi", x: 3 + r, y: -7.2, children: e.index + 1 },
        "number"
      ),
    ];
  if (0 === e.width) return;
  e.repeatStart && l.push(bt(ms, { line: s, x: r }, "repeatStart"));
  const h = e.tripletFeel;
  h && l.push(bt(ns, { tripletFeel: h, x: r }, "tripletFeel")),
    e.repeat && l.push(bt(fs, { line: s, measure: e, x: r }, "repeat")),
    e.alternateEnding &&
      l.push(
        bt(us, { alternateEnding: e.alternateEnding, x: r }, "alternateEnding")
      ),
    e.marker && l.push(bt(ds, { marker: e.marker, x: r }, "marker"));
  for (const t of e.tempoLayouts.values()) {
    const { tempo: e, layer: s } = t;
    e &&
      s &&
      l.push(
        bt(
          "g",
          {
            className: "Cpu1y8",
            transform: `translate(${s.x1},${-1 * s.y})`,
            children: [
              bt("use", { xlinkHref: "#tempo" }),
              bt("text", {
                className: "Cpujn",
                y: -3,
                x: 8,
                children: `=${e.bpm}`,
              }),
            ],
          },
          "tempo"
        )
      );
  }
  let p = 0;
  for (const t of e.beatsLayoutsByTime.values())
    l.push(
      bt(
        os,
        {
          layout: t,
          part: o,
          measure: e,
          slicingMode: i,
          x: r,
          measureEditorData: a,
          platform: n,
        },
        `beat${p}`
      )
    ),
      p++;
  if (e.hasSignature) {
    const t = Math.floor((o.strings / 2) * c);
    l.push(
      bt(
        "text",
        {
          className: "Cpu351",
          x: ot + r,
          y: t + ys(n),
          children: e.signature[0],
        },
        "t1"
      )
    ),
      l.push(
        bt(
          "text",
          {
            className: "Cpu351",
            x: ot + r,
            y: t + gs(n),
            children: e.signature[1],
          },
          "t2"
        )
      );
  }
  if (e.rhythmLines) {
    let t = 0,
      o = c * s.strings;
    for (const i of e.voices)
      if (!i.hasSameRhythm && !i.rest) {
        const e = i.beats,
          a = s.rhythmEffects.tremolo.get(i.index) || !1,
          h = s.rhythmEffects.tremolo.get(i.index) || !1,
          p = e.some((t) => t.type > 8),
          c = a && p ? lt : 0,
          u = c + (h ? ht : 0),
          d = o + i.index * (it + u);
        l.push(
          bt(ls, { voice: i, x: r, y: d, tremoloOffset: c }, `rhythm${i.index}`)
        ),
          (o = d);
        let m = 0,
          f = null;
        for (const e of i.beats)
          e &&
            (e.tupletStart && ((m = e.tuplet), (f = e)),
            m &&
              f &&
              e.tupletStop &&
              (l.push(
                bt(
                  cs,
                  {
                    tuplet: m,
                    start: f,
                    stop: e,
                    voice: i,
                    platform: n,
                    x: r,
                    y: d,
                    tremoloOffset: c,
                  },
                  `tuplet${t}`
                )
              ),
              (m = 0),
              t++));
      }
  }
  return bt(wt, { children: l });
}
const xs = (t, e) => t + `H${e.x}m${e.w},0`;
function bs(t) {
  let { line: e, hasTuning: s, slicingMode: o, part: i } = t;
  const a = e.spaces,
    n = c * (e.strings - 1);
  let r = "";
  const l = e.measures;
  for (let t = s ? 1 : 0; t < l.length; t++) r += `M${l[t].layout.x},0v${n}`;
  const h = l[0].layout.x,
    p = o.stringLineMaxX(e);
  if (i.usedDrums && i.isDrumStdOn)
    for (let t = 0; t < e.strings; t++) r += `M${h},${c * t} H${p}`;
  else
    for (let t = 0; t < e.strings; t++)
      r += `M${h},${c * t}` + a[t].reduce(xs, "") + `H${p}`;
  const u = o.finalVerticalSeparatorPosition(e);
  return (
    u && (r += `H${u}`),
    (r += "V0"),
    bt("path", { className: Yt.strings, d: r })
  );
}
const ws = Ie(0),
  Ss = Ie(5);
function Ls(t) {
  let { tuning: e, platform: s } = t;
  return e
    ? Lt(
        wt,
        null,
        at(e, !1).map((t, e) =>
          Lt(
            "text",
            { x: Ss(s), y: 1 + e * c + ws(s), key: e, className: "D38xz" },
            t
          )
        )
      )
    : null;
}
function ks(t) {
  const {
      inlineDefs: e,
      line: s,
      noPadding: o,
      part: i,
      tuning: a,
      slicingMode: n,
      lazy: r,
      tabEditorData: l,
      platform: h,
    } = t,
    p = n.expectedSliceWidth(s.width) + (o ? 0 : B),
    c = "http://www.w3.org/2000/svg",
    u = s.layout.height,
    d = `${o ? 0 : -B / 2} -${s.layout.layers.height} ${p} ${u}`;
  if (!h) {
    const [t, e] = Et(s.index < 5),
      o = kt();
    if (
      ($t(() => {
        if (!t && r)
          try {
            const t = new IntersectionObserver(
              (t) => {
                t[0].isIntersecting && e(!0);
              },
              { rootMargin: "0px 0px 500px 0px" }
            );
            return o.current && t.observe(o.current), () => t.disconnect();
          } catch (t) {
            requestAnimationFrame(() => e(!0));
          }
      }, [t, r]),
      !t && r)
    )
      return bt("svg", {
        xmlns: c,
        version: "1.1",
        ref: o,
        width: p,
        viewBox: d,
        className: "Cw81bf",
      });
  }
  const m = s.capo,
    f = !!m && !h,
    y = !!a;
  return bt("svg", {
    xmlns: c,
    version: "1.1",
    width: p,
    viewBox: d,
    className: "Cw81bf",
    children: [
      e && bt(Ne, { part: i }),
      y && bt(Ls, { tuning: a, platform: h }),
      f && bt(Ft, m),
      bt(bs, { line: s, hasTuning: y, slicingMode: n, part: i }),
      ...s.hangingText.map((t, e) =>
        bt(Ce, { text: t, layout: void 0, xoffset: 0 }, e.toString())
      ),
      bt(Xe, { line: s }),
      ...s.measures.map((t) =>
        bt(
          vs,
          {
            measure: t,
            line: s,
            part: i,
            slicingMode: n,
            measureEditorData: l && l[t.index] && l[t.index].beats,
            platform: h,
          },
          t.index.toString()
        )
      ),
    ],
  });
}
function Ms(t) {
  let {
    lines: e,
    part: s,
    tuning: o,
    slicingMode: i,
    lazy: a,
    tabEditorData: n,
    platform: r,
  } = t;
  return bt(wt, {
    children: e.map((t) =>
      bt(
        ks,
        {
          line: t,
          part: s,
          tuning: 0 === t.index && o,
          slicingMode: i,
          tabEditorData: n,
          lazy: a,
          platform: r,
        },
        t.index.toString()
      )
    ),
  });
}
var $s = xt((t) =>
  bt(wt, {
    children: [
      bt("svg", {
        width: 0,
        viewBox: "0 0 0 0",
        className: "B4635p",
        children: bt(Ne, { part: t.part }),
      }),
      bt(Ms, t),
    ],
  })
);
const Ts = {
  btn: "Ckd11i",
  shape: "Ckdzh",
  bg: "Ckd22n",
  active: "Ckd11i Ckduv",
  badge: "Ckdte",
};
function Ns(e) {
  let {
    reference: s,
    firstLineLayoutHeigth: o,
    handlePitchshift: i,
    isActive: a,
    isPitchshiftToStandard: n,
    lock: r,
  } = e;
  const {
      player: { pitchShift: l },
    } = t("player"),
    h = o - 47;
  let p = "Shift pitch (R)";
  0 !== l
    ? (p = "Pitch shifted (R)")
    : n && (p = "Pitch can be shifted to match standard tuning (R)");
  const c = 5 * (Math.abs(l).toString(10).length - 1) + (l > 0 ? 2 : 0);
  return Lt(
    "g",
    {
      vectorEffect: "non-scaling-stroke",
      transform: `translate(-8 ${h})`,
      className: a ? Ts.active : Ts.btn,
      onClick: i,
      "data-tab-button": "tuning-button",
    },
    Lt("title", null, p),
    Lt("rect", {
      x: 0,
      y: 3,
      rx: 4,
      ry: 4,
      width: 25,
      height: 23,
      filter: "url(#svg_shadow)",
      className: Ts.bg,
      ref: s,
    }),
    Lt("path", {
      d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
      "stroke-width": "1.3",
    }),
    Lt("path", {
      d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
      "stroke-width": "1.6",
    }),
    (n || 0 !== l) &&
      Lt("rect", {
        x: 18,
        y: 0,
        width: 13 + c,
        height: 13,
        rx: 6.5,
        ry: 6.5,
        className: Ts.badge,
      }),
    0 !== l && Lt("text", { x: 20, y: 9.5 }, `${l > 0 ? "+" : ""}${l}`),
    r &&
      Lt(
        "g",
        { transform: "translate(-17, -12)" },
        Lt("circle", {
          className: Ts.bg,
          cx: "16.5",
          cy: "15.5",
          r: "8.5",
          filter: "url(#svg_shadow_light)",
        }),
        Lt("path", {
          className: Ts.lock,
          d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
        }),
        Lt("circle", { className: Ts.shape, cx: 16.5, cy: 17, r: 0.8 })
      )
  );
}
function Cs(t) {
  let { up: e } = t;
  return Lt(
    "svg",
    { width: "44", height: "46", role: "img" },
    Lt("rect", { width: 44, height: 46, rx: 4, ry: 4 }),
    Lt("path", {
      d: e ? "M7 12h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" : "M7.5 12h11v-2h-11v2z",
    })
  );
}
const Es = (t) =>
  t.current &&
  (i(t.current.instrumentId) || a(t.current.instrumentId)) &&
  t.current.tuning;
var Ps = e(
  class extends St {
    constructor(t) {
      super(t),
        s(this, "hidePopup", (t) => {
          t.preventDefault(), this.props.dispatch("layer/hide");
        }),
        s(this, "tuneUp", (t) => {
          t.preventDefault();
          const { pitchShift: e } = this.props.player;
          e < 12 && o(this.props.store, e + 1);
        }),
        s(this, "tuneDown", (t) => {
          t.preventDefault();
          const { pitchShift: e } = this.props.player;
          e > -12 && o(this.props.store, e - 1);
        }),
        s(this, "reset", (t) => {
          t.preventDefault(), o(this.props.store, 0);
        }),
        s(this, "renderCurrentTuning", () => {
          if (Es(this.props.part)) {
            const t = this.props.part.current.tuning.map(
              (t) => t + this.props.player.pitchShift
            );
            return Lt(
              "div",
              { className: "B7u2d7 B7u15f", "aria-label": "Current tuning" },
              Lt("div", { className: "B7u2lu" }, "CURRENT TUNING"),
              Lt("div", { id: "tuning", className: "B7u1a5" }, n(t))
            );
          }
          return null;
        }),
        s(this, "renderQuickButton", () => {
          if (0 !== this.props.player.pitchShift)
            return Lt(
              "button",
              {
                className: "B7u1jq B7u2yh",
                onClick: this.reset,
                role: "button",
                "aria-label": "Restore original tuning",
              },
              "Restore original tuning"
            );
          if (Es(this.props.part)) {
            const t = r(
              this.props.part.current.instrumentId,
              this.props.part.current.tuning
            );
            if (t && 0 !== t.pitch) {
              let e = t.tuningName;
              return (
                "STANDARD TUNING" === e && (e = "Standard tuning"),
                Lt(
                  "button",
                  {
                    className: "B7u1jq B7u2yh",
                    role: "button",
                    "aria-label": "Quick shift pitch",
                    onClick: () => {
                      o(this.props.store, t.pitch);
                    },
                  },
                  `Convert to ${e}`
                )
              );
            }
          }
          return Lt(
            "button",
            {
              className: "B7u1jq B7u2yh B7u6z",
              role: "button",
              disabled: !0,
              "aria-label": "Restore original tuning",
            },
            "Restore original tuning"
          );
        }),
        (this.keyMap = {
          enter: this.hidePopup,
          left: this.tuneDown,
          down: this.tuneDown,
          up: this.tuneUp,
          right: this.tuneUp,
        });
    }
    componentDidMount() {
      window.hotKeysManager.bind(this.keyMap, { onPopup: !0 });
    }
    componentWillUnmount() {
      window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 });
      const { player: t, ensureLineVisibility: e, part: s } = this.props;
      if (e && s.current) {
        const o = l(s.current, t.audio.getCursor(), "left");
        o && e(null, o.measureLayout.lineLayout, !1);
      }
    }
    render() {
      const t = this.renderQuickButton(),
        e = this.renderCurrentTuning(),
        { pitchShift: s } = this.props.player,
        { tab: o, tuningButton: i, mobile: a } = this.props;
      let n = 0,
        r = 0,
        l = "B7uxe";
      if (a) (n = -71), (r = -235), (l = "B7uxe B7u2i3");
      else if (
        ((n = this.props.firstLineLayoutHeigth - 58), (r = 55), o && i)
      ) {
        const t = o.getBoundingClientRect(),
          e = i.getBoundingClientRect();
        (r = e.left - t.left + e.width + 21),
          (n = e.top + e.height - t.top - 77.5);
      }
      return Lt(
        "div",
        {
          className: l,
          title: "You can use arrow keys",
          role: "dialog",
          "aria-label": "Shift Pitch",
          style: { top: `${n}px`, left: `${r}px` },
        },
        e || Lt("div", { className: "B7u2xf" }),
        Lt(
          "div",
          { className: "B7u2d7 B7u12o" },
          Lt(
            "button",
            {
              className: "B7u1jq B7u1fq",
              onClick: this.tuneDown,
              disabled: s <= -12,
              "aria-label": "Step down",
            },
            Lt(Cs, { up: !1 })
          ),
          Lt(
            "span",
            { className: "B7u1b6", "aria-label": "Current pitch" },
            (s > 0 ? "+" : "") + s
          ),
          Lt(
            "button",
            {
              className: "B7u1jq B7u1fq",
              onClick: this.tuneUp,
              disabled: s >= 12,
              "aria-label": "Step up",
            },
            Lt(Cs, { up: !0 })
          )
        ),
        t
      );
    }
  },
  "player",
  "part"
);
const Bs = {
  wrap: "Cpkq8",
  shadow: "Cpk9f",
  body: "Cpk2r",
  loading: "Cpk19q",
  icon: "Cpk34y",
};
function Ds(t) {
  return Math.round(1e4 * t) / 1e4;
}
function Xs(t) {
  let { width: e, height: s } = t;
  const o = 1 * e,
    i = (function (t, e, s, o, i, a, n) {
      const r = 0.95 * s,
        l = 0.45 * s,
        h = 0.6 * s,
        p = 0.3 * s,
        c = Math.atan2(r, s / 2),
        u = Math.sin(c),
        d = Math.cos(c),
        m = h * u,
        f = h * d,
        y = p * u,
        g = p * d;
      return `M ${Ds(t + f)},${Ds(e + m)}\n     Q ${Ds(t)},${Ds(e)} ${Ds(
        t + l
      )},${Ds(e)}\n     L ${Ds(t + s - l)},${Ds(e)}\n     Q ${Ds(t + s)},${Ds(
        e
      )} ${Ds(t + s - f)},${Ds(e + m)}\n     L ${Ds(t + s / 2 + g)},${Ds(
        e + r - y
      )}\n     Q ${Ds(t + s / 2)},${Ds(e + r)} ${Ds(t + s / 2 - g)},${Ds(
        e + r - y
      )}\n     z`;
    })((e - o) / 2, 0.33 * e, o),
    a = (function (t, e, s) {
      const o = t / 2,
        i = Ds(1.3 * o),
        a = Ds(o);
      return `M 0,${i}\n     Q 0,0 ${a},0 q ${a},0 ${a},${i}\n     v ${Ds(
        e - 2 * i
      )}\n     q 0,${i} -${a},${i} q -${a},0 -${a},-${i}\n     v -${Ds(
        e - 2 * i
      )}`;
    })(e, s);
  return Lt(
    wt,
    null,
    Lt("path", {
      className: Bs.shadow,
      filter: "url(#CursorShadow)",
      d: a,
      key: "shadow",
    }),
    Lt("path", { className: Bs.body, d: a, key: "body" }),
    Lt("path", { className: Bs.icon, d: i, key: "path" })
  );
}
function Is(t, e) {
  const s = t.measureLayout,
    o = e.measureLayout;
  return s !== o
    ? s.lineLayout !== o.lineLayout || s.measure.index + 1 !== o.measure.index
    : t.x >= e.x;
}
const zs = (t) => t.player.shouldPlay && t.player.canPlay,
  As = B / 2,
  Rs = (t, e, s, o) => {
    let i = s.stringY;
    if (1 !== t) {
      i = 0;
      for (const e of o) {
        if (e === s.line) break;
        i += Math.round(t * e.layout.height);
      }
      i = i / t + s.layers.height;
    }
    return Os(t, e, i);
  },
  Fs = (t, e, s, o) => Os(t, e, s.stringY),
  Os = (t, e, s) =>
    (1 === t ? "" : `scale(${t}) `) +
    ` translate3d(${e - E / 2 + As}px, ${s - u}px, 0)`;
var js = e(
  class extends St {
    constructor(t) {
      super(t),
        s(this, "el", kt()),
        s(this, "stopPlayback", () => {
          this.props.dispatch("player/togglePlay", !1);
        }),
        s(this, "handleBackspace", (t) => {
          t.preventDefault();
          const { loopStart: e, loopEnd: s } = this.props.player.position;
          this.props.dispatch("player/moveCursor", {
            cursor: e,
            loopStart: e,
            loopEnd: s,
          });
        }),
        s(this, "handleLeft", (t) => {
          t.preventDefault();
          const { part: e } = this.props,
            { loopStart: s, loopEnd: o } = this.props.player.position,
            i = l(e, this.props.player.audio.getCursor(), "left"),
            a = i.measureLayout.measure.index,
            n = i.measureLayout.measure.beatsLayouts[0];
          let r = s;
          if (i !== n) {
            const t = n.leftTime;
            r = t > s ? t : s;
          } else if (a > 0) {
            const { rightTime: t, leftTime: i } =
              e.measures[a - 1].beatsLayouts[0];
            r = 0 === o || s <= i ? i : s <= t ? t : s;
          }
          this.props.dispatch("player/moveCursor", {
            cursor: r,
            loopStart: s,
            loopEnd: o,
          });
        }),
        s(this, "handleRight", (t) => {
          t.preventDefault();
          const { part: e } = this.props,
            { loopStart: s, loopEnd: o } = this.props.player.position,
            i = l(e, this.props.player.audio.getCursor(), "left").measureLayout
              .measure.index;
          let a = null;
          if (i < e.measures.length - 1) {
            const { rightTime: t, leftTime: s } =
              e.measures[i + 1].beatsLayouts[0];
            0 === o || t < o ? (a = t) : s < o && (a = s);
          }
          null !== a &&
            this.props.dispatch("player/moveCursor", {
              cursor: a,
              loopStart: s,
              loopEnd: o,
            });
        }),
        s(this, "handleUp", (t) => {
          t.preventDefault();
          const { part: e } = this.props,
            { loopStart: s, loopEnd: o } = this.props.player.position,
            i = l(e, this.props.player.audio.getCursor(), "left"),
            a = i.measureLayout.lineLayout.line.index;
          if (a > 0) {
            const t = this.props.lines[a - 1],
              e = h(t, i.absoluteX, "left");
            let n = null;
            const { rightTime: r, leftTime: l } = e;
            0 === o || s <= l ? (n = l) : s <= r && (n = r),
              null !== n &&
                this.props.dispatch("player/moveCursor", {
                  cursor: n,
                  loopStart: s,
                  loopEnd: o,
                });
          }
        }),
        s(this, "handleDown", (t) => {
          t.preventDefault();
          const { part: e } = this.props,
            { loopStart: s, loopEnd: o } = this.props.player.position,
            i = l(e, this.props.player.audio.getCursor(), "left"),
            a = i.measureLayout.lineLayout.line.index;
          if (a < this.props.lines.length - 1) {
            const t = this.props.lines[a + 1],
              e = h(t, i.absoluteX, "left");
            let n = null;
            const { rightTime: r, leftTime: l } = e;
            0 === o || r < o ? (n = r) : l < o && (n = l),
              n &&
                this.props.dispatch("player/moveCursor", {
                  cursor: n,
                  loopStart: s,
                  loopEnd: o,
                });
          }
        }),
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
            ? Rs
            : Fs);
    }
    componentDidMount() {
      this.animationSeek(!1),
        this.state.visible || this.setState({ visible: !0 }),
        window.hotKeysManager.bind(this.keyMap, { onTab: !0 });
    }
    componentDidUpdate(t) {
      const e = this.props,
        s = e.part !== t.part || e.lines !== t.lines,
        o = e.player.position.cursor !== t.player.position.cursor;
      if (
        ((s || o) &&
          ((this.layout = null),
          (this.layoutTimestamp = 0),
          (this.nextLayout = null),
          (this.nextLayoutTimestamp = 0)),
        e.scale !== t.scale ||
          s ||
          o ||
          e.player.speed !== t.player.speed ||
          e.player.type !== t.player.type ||
          e.player.pitchShift !== t.player.pitchShift ||
          zs(e) !== zs(t))
      ) {
        let s = this.animationSeek;
        zs(t)
          ? (s = zs(e) ? this.animationRestart : this.animationPause)
          : zs(e) && (s = this.animationPlay);
        const o = t.part === e.part && t.lines === e.lines;
        s.call(this, o);
      }
    }
    componentWillUnmount() {
      (this.pause = !0),
        this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
        window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
    }
    applyCursorCoordinates(t) {
      const { el: e, layout: s, nextLayout: o, layoutTimestamp: i } = this;
      let a;
      if (o && Is(s, o)) {
        const t = s.absoluteLoopRightX - s.absoluteX,
          n = o.absoluteX - o.absoluteLoopLeftX,
          r = (s.duration * t) / (t + n),
          l = s.duration - r;
        a = (a) => {
          const h = a - i;
          e.current.style.transform =
            h < r
              ? this.formatTransform(
                  this.props.scale,
                  s.absoluteX + (t * h) / r,
                  s.measureLayout.lineLayout,
                  this.props.lines
                )
              : this.formatTransform(
                  this.props.scale,
                  o.absoluteLoopLeftX + (n * (h - r)) / l,
                  o.measureLayout.lineLayout,
                  this.props.lines
                );
        };
      } else {
        const t = o
          ? o.absoluteX - s.absoluteX
          : s.absoluteLoopRightX - s.absoluteX;
        a = (o) => {
          e.current.style.transform = this.formatTransform(
            this.props.scale,
            s.absoluteX + (t * (o - i)) / s.duration,
            s.measureLayout.lineLayout,
            this.props.lines
          );
        };
      }
      return a(t), a;
    }
    updateCurrentTempo(t) {
      const e = this.props.part.tempos,
        s = (s) =>
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
        const e = p(this.props.part, t),
          { timeline: s, timestamps: o } = this.props.part;
        (this.layoutTimestamp = o[e]),
          (this.layout = s.get(this.layoutTimestamp));
        let i = e < o.length - 1 ? o[e + 1] : null;
        const a = this.props.player.position.loopEnd;
        return (
          0 !== a &&
            (null === i || i >= a - 1e-15) &&
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
      let o = this.applyCursorCoordinates(s),
        i = null;
      const a = () => {
        const t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
          e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
          s = ((this.layout.duration * t) / (t + e)) * 0.8;
        return (
          (i = (t) =>
            !!(
              this.layout &&
              this.nextLayout &&
              t - this.layoutTimestamp > s
            ) &&
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
      (this.nextLayout && Is(this.layout, this.nextLayout) && a()(s)) ||
        this.props.ensureLineVisibility(
          null,
          this.layout.measureLayout.lineLayout,
          !1
        );
      const n = window.requestAnimationFrame,
        r = () => {
          try {
            if (
              (e || (this.props.player.audio.isPositionChanged() && (e = !0)),
              e)
            ) {
              const t = this.props.player.audio.getCursor();
              o && o(t),
                i && i(t),
                this.findLayoutUnderCursor(t) &&
                  ((o = this.applyCursorCoordinates(t)),
                  this.nextLayout && Is(this.layout, this.nextLayout) && a(),
                  !this.nextLayout &&
                    t >= this.layout.loopRightTime - 1e-15 &&
                    (this.stopPlayback(), (this.pause = !0))),
                this.updateCurrentTempo(t);
            }
            this.pause || (this.animationPlayId = n(r));
          } catch (t) {
            console.error(t);
          }
        };
      (this.pause = !1), (this.animationPlayId = n(r));
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
    moveTo(t) {
      const e = t.beatsLayouts;
      this.props.dispatch("player/moveCursor", {
        cursor: e[0].leftTime,
        loopStart: this.props.player.position.loopStart,
        loopEnd: this.props.player.position.loopEnd,
      });
    }
    render() {
      const t = E,
        e = (this.props.part.strings - 1) * c + u + d,
        s = !(this.props.player.canPlay || this.props.route.isPanel);
      return Lt(
        "div",
        { className: Bs.wrap, ref: this.el },
        this.state.visible &&
          !this.props.hidden &&
          Lt(
            "svg",
            { width: t, height: e, className: s ? Bs.loading : Bs.normal },
            Lt(
              "defs",
              {},
              Lt(
                "filter",
                { id: "CursorShadow", x: "-40%", width: "180%" },
                Lt("feGaussianBlur", {
                  in: "SourceGraphic",
                  stdDeviation: "2",
                }),
                Lt("feOffset", { dx: "0", dy: "2" })
              )
            ),
            Lt(Xs, { width: t, height: e })
          )
      );
    }
  },
  "player",
  "route",
  "browser"
);
class Hs extends St {
  render() {
    const { x: t, layout: e, handle: s } = this.props,
      o = e.measureLayout.lineLayout,
      i = o.loopY + 10,
      a = o.loopHeight - 20,
      n = `translate(${t},${i})`,
      r = "left" === s ? "matrix(-1,0,0,1,1,0)" : "",
      l = Math.floor(a / 2);
    return Lt(
      "g",
      { className: "Cgh2b2", transform: n, "data-loop-handle": s },
      Lt("path", {
        d: `M0 ${l - 12}q15 0 15 12t-15 12m1 0v${l - 12}h-2 v-${a}h2z`,
        className: "Cgh1j0",
        transform: r,
      }),
      Lt("path", {
        d: `M8 ${l - 4.5}l-4.5 4.5l4.5 4.5`,
        className: "Cgh2v6",
        transform: r,
      }),
      Lt("rect", {
        x: -10,
        y: -1,
        height: a,
        width: 27,
        transform: r,
        className: "Cgh16l",
      })
    );
  }
}
class Ys extends St {
  render() {
    const { leftLayout: t, rightLayout: e, lines: s } = this.props,
      o = t.absoluteLoopLeftX,
      i = e.absoluteLoopRightX,
      a = t.measureLayout.lineLayout,
      n = e.measureLayout.lineLayout,
      r = "Cgh21m";
    if (a === n)
      return Lt("rect", {
        className: r,
        rx: 3,
        height: a.loopHeight,
        x: o,
        y: a.loopY,
        width: i - o + 1,
      });
    const l = a.line.index,
      h = n.line.index,
      p = h - l,
      c = new Array(p + 1);
    (c[0] = Lt("rect", {
      className: r,
      rx: 3,
      height: a.loopHeight,
      x: o,
      y: a.loopY,
      width: a.maxX - o,
      key: l,
    })),
      (c[p] = Lt("rect", {
        className: r,
        rx: 3,
        height: n.loopHeight,
        x: n.minX,
        y: n.loopY,
        width: i - n.minX,
        key: h,
      }));
    for (let t = l + 1; t < h; t++) {
      const e = s[t].layout;
      c[t - l] = Lt("rect", {
        className: r,
        rx: 3,
        height: e.loopHeight,
        x: e.minX,
        y: e.loopY,
        width: e.maxX,
        key: t,
      });
    }
    return Lt("g", null, c);
  }
}
const qs = "scrollBehavior" in document.documentElement.style;
class Vs {
  constructor() {
    s(this, "animationLoop", () => {
      const t =
        ((e = Math.min((J() - this.startTime) / 100, 1)),
        0.5 * (1 - Math.cos(Math.PI * e)));
      var e;
      const s = this.startY + (this.y - this.startY) * t;
      if ((window.scrollTo(0, s), s !== this.y)) {
        const t = window.requestAnimationFrame;
        this.scrollId = t(this.animationLoop);
      } else this.scrollId = void 0;
    }),
      (this.y = 0),
      (this.startY = 0),
      (this.startTime = 0),
      (this.scrollId = void 0);
  }
  scroll(t, e, s) {
    if (
      (this.scrollId &&
        (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
      qs)
    )
      window.scrollTo({ left: 0, top: t, behavior: e ? "instant" : "smooth" });
    else {
      const o =
        s ||
        (window.visualViewport
          ? window.visualViewport.pageTop
          : window.scrollY);
      if (e || Math.abs(t - o) <= 5) window.scrollTo(0, t);
      else {
        (this.y = t), (this.startY = o), (this.startTime = J());
        const e = window.requestAnimationFrame;
        this.scrollId = e(this.animationLoop);
      }
    }
  }
  unmount() {
    this.scrollId &&
      (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
  }
}
function Us(t) {
  let {
      title: e,
      mobile: s,
      leftOffset: o,
      topOffset: i,
      horizontal: a,
      device: n,
    } = t,
    r = s ? "Cvj28d Cvj2ff Cvj350" : a ? "Cvj28d Cvj2k8" : "Cvj28d Cvj2ff",
    l = {};
  void 0 !== o &&
    void 0 !== i &&
    ((l = { top: `${i}px`, left: `${o}px` }), (r = "Cvj28d Cvj1dp"));
  let h = "subscribe in the app";
  return (
    f(n.os) && (h = "buy in the app"),
    Lt(
      "div",
      { role: "dialog", className: r, style: l },
      Lt(
        tt,
        {
          source: "popup",
          attrs: { className: "Cvjo4", "aria-label": `${e} ${h}` },
        },
        Lt(
          "div",
          null,
          Lt("div", { className: "Cvj23g" }, e),
          Lt("div", { className: "Cvj1mq" }, h)
        ),
        f(n.os)
          ? Lt("img", { src: Kt, width: 160, height: 47, alt: "Google Play" })
          : Lt("img", { src: Gt, width: 160, height: 53, alt: "AppStore" })
      )
    )
  );
}
function _s(e) {
  let { tab: s, tuningButton: o } = e;
  const { device: i } = t("device");
  let a = 0,
    n = 0;
  if (s && o) {
    const t = s.getBoundingClientRect(),
      e = o.getBoundingClientRect();
    (a = e.left - t.left + e.width + 21),
      (n = e.top - t.top - (23 - e.height) - 14.5),
      n < 2 && (n = 2);
  }
  return f(i.os) || y(i.os)
    ? Lt(Us, { title: "Pitch Shift", device: i, leftOffset: a, topOffset: n })
    : Lt(It, {
        title: "Pitch Shift",
        classPrefix: "pitchshift",
        leftOffset: a,
        topOffset: n,
      });
}
let Ws;
const Ks = () => {
  clearTimeout(Ws), (Ws = null);
};
let Gs;
var Qs = e(
  class extends St {
    constructor(t) {
      super(t),
        s(this, "formClick", (t) => {
          t.preventDefault(), t.stopPropagation();
        }),
        s(this, "keyHandler", (t) => {
          const { tabEditor: e, dispatch: s } = this.props;
          if (Ws && 1 === e.fret.length && "0" !== e.fret) {
            const o = `${e.fret}${t}`;
            if ((Ks(), +o <= 24)) return void s("tabEditor/changeNote", o);
          }
          s("tabEditor/changeNote", t),
            (Ws = setTimeout(() => (Ws = null), 1e3));
        }),
        s(this, "onDigit", (t) => {
          t.preventDefault(), t.stopPropagation(), this.keyHandler(t.key);
        }),
        s(this, "onDeadNote", (t) => {
          t.preventDefault(),
            t.stopPropagation(),
            Ks(),
            this.props.dispatch("tabEditor/changeNote", "X");
        }),
        s(this, "onMobileKeyboard", (t) => () => this.keyHandler(t)),
        s(this, "onBackspace", () => {
          this.props.dispatch("tabEditor/changeNote", ""), Ks();
        }),
        s(this, "onRight", () => {
          const { scale: t, dispatch: e } = this.props;
          e("tabEditor/formMove", { scale: t, direction: "right" });
        }),
        s(this, "onLeft", () => {
          const { scale: t, dispatch: e } = this.props;
          e("tabEditor/formMove", { scale: t, direction: "left" });
        }),
        s(this, "onUp", (t) => {
          t.preventDefault(), t.stopPropagation();
          const { scale: e, dispatch: s } = this.props;
          s("tabEditor/formMove", { scale: e, direction: "up" });
        }),
        s(this, "onDown", (t) => {
          t.preventDefault(), t.stopPropagation();
          const { scale: e, dispatch: s } = this.props;
          s("tabEditor/formMove", { scale: e, direction: "down" });
        }),
        s(this, "onEscape", () => {
          this.props.dispatch("layer/hide");
        });
      const { device: e } = t;
      (Gs = m(e) || f(e.os) || y(e.os)),
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
      window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }), Ks();
    }
    componentDidUpdate(t) {
      (t.tabEditor.formX === this.props.tabEditor.formX &&
        t.tabEditor.formY === this.props.tabEditor.formY) ||
        Ks();
    }
    render() {
      const { tabEditor: t, scale: e } = this.props,
        s = {
          top: t.formY - 1,
          left: t.formX + 2.5,
          display: t.positioned ? "block" : "none",
          transform: `scale(${e})`,
          transformOrigin: "left 0px",
        };
      0 !== t.voice && (s.color = "#868686"),
        t.fret !== t.originalFret && "" !== t.fret && (s.color = "#ff3130");
      const o = {
        top: t.formY + 31 * e,
        left: t.formX - 64 * e,
        display: t.positioned ? "flex" : "none",
        transform: `scale(${e})`,
        transformOrigin: "left 0px",
      };
      return Lt(
        wt,
        null,
        Lt(
          "div",
          {
            id: "note-editor",
            className: "Ceg2uy",
            style: s,
            tabIndex: -1,
            onMouseUp: this.formClick,
          },
          "" === t.fret && "" !== t.originalFret
            ? Lt(
                wt,
                {},
                t.originalFret,
                Lt(
                  "svg",
                  { className: "Ceg2gt", width: 25, height: 23 },
                  Lt("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
                )
              )
            : t.fret
        ),
        Gs &&
          Lt(
            "div",
            { className: "Ceg9t", style: o },
            Lt(
              "button",
              { className: "Ceg19o", onClick: this.onBackspace },
              "<-"
            ),
            ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((t) =>
              Lt(
                "button",
                {
                  key: t,
                  className: "Ceghf",
                  onClick: this.onMobileKeyboard(t),
                },
                t
              )
            ),
            Lt(
              "button",
              { className: "Ceg2im", onClick: this.onMobileKeyboard("0") },
              "0"
            )
          )
      );
    }
  },
  "tabEditor",
  "device"
);
const Zs = {
    exitActive: "B6e9",
    enterActive: "B6evn",
    enter: "B6e350",
    exit: "B6e14s",
  },
  Js = P(
    () => import("./AnnotationsFeed.1a5fc892.js"),
    [
      "/static/latest/AnnotationsFeed.3c76688313b6a21d.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/Linkify.1a05e390b506e6fc.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/NetworkError.dce1088169437b6e.css",
      "/static/latest/ShowroomPlaceholder.module.4ac4751f1f7c2f3e.css",
    ],
    []
  ),
  to = B / 2,
  eo = {
    animationStyles: {
      exitActive: "d418f",
      enterActive: "d41sr",
      enter: "d41bt",
      exit: "d42bj",
    },
  };
function so(t) {
  return (e) => e === t;
}
const oo = "ontouchstart" in window;
function io(t, e) {
  const { position: s } = t;
  A(s, e.position) || e.dispatch("player/moveCursor", s);
}
var ao = class extends St {
  constructor(t) {
    super(t),
      s(this, "onResize", () =>
        this.setState((t, e) => {
          const { body: s, documentElement: o } = document,
            i = this.wrap;
          if (i && s && o) {
            const t = i.getBoundingClientRect(),
              a = t.left + to + s.scrollLeft + o.scrollLeft,
              n =
                t.top +
                0 +
                (window.visualViewport
                  ? window.visualViewport.pageTop
                  : document.body.scrollTop +
                    document.documentElement.scrollTop);
            return {
              scale: t.width / (e.width + B),
              pageX: a,
              pageY: n,
              clientHeight: window.visualViewport
                ? window.visualViewport.height
                : document.documentElement.clientHeight,
            };
          }
          return null;
        })
      ),
      s(this, "onTouchStart", (t) => {
        if (oo && "mousedown" === t.type) return;
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
        const s =
            t.target.parentElement &&
            t.target.parentElement.getAttribute("data-loop-handle"),
          o = this.getTouchPoint(t);
        if (((this.lastTouch = o), "left" === s || "right" === s)) {
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            this.props.dispatch("player/changeLoop", !0),
            (this.activeLoopHandle = s),
            "left" === this.activeLoopHandle
              ? this.setState((t) => ({ deltaLeftX: t.loopStartX - o.x }))
              : this.setState((t) => ({ deltaRightX: t.loopEndX - o.x })),
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
      }),
      s(this, "onTouchMove", (t) => {
        t.preventDefault(),
          t.stopPropagation(),
          (this.lastTouch = this.getTouchPoint(t));
      }),
      s(this, "ensureLineVisibility", (t, e, s) =>
        D(() => {
          const {
              showPitchshiftLayer: o,
              isSmallScreen: i,
              isLandscapeScreen: a,
            } = this.props,
            n = window.visualViewport
              ? window.visualViewport.pageTop
              : window.scrollY,
            r = this.state.scale,
            l = i && !a ? 48 : 0,
            h = i && !a ? 48 : 0,
            p = n - this.state.pageY + l,
            c = n - this.state.pageY + this.state.clientHeight - h,
            u = c - p,
            d = e.line.index,
            m = this.state.model.lines;
          if (t && (t.maxY * r < p || c < t.y * r)) return;
          let f = n;
          const { loopStartLayout: y, loopEndLayout: g } = this.state;
          if (o) f = 0;
          else if (y && g) {
            let t = e.y * r - p;
            if (t < 0) f = n + t;
            else if (
              ((t = c - e.maxY * r),
              t < 0 && (f = n - t),
              d < g.measureLayout.lineLayout.line.index)
            ) {
              const s = m[d + 1];
              if (s) {
                const o = e.y,
                  i = s.layout.maxY;
                (i - o) * r < u && ((t = c - i * r), t < 0 && (f = n - t));
              }
            }
          } else if (0 === d) f = 0;
          else if (((f = e.y * r + this.state.pageY - l), d < m.length - 1)) {
            const t = m[d - 1],
              e = m[d + 1];
            if (t && e) {
              const s = t.layout.y;
              (e.layout.maxY - s) * r < u && (f = s * r + this.state.pageY - l);
            }
          }
          f !== n && this.windowScroller.scroll(f, s, n);
        })
      ),
      s(this, "onTouchMoveTick", () => {
        this.lastTouch &&
          this.setState((t) => {
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
              const { loopStartLayout: o, loopEndLayout: i } = s;
              if (!o || !i) throw new Error("Wrong loop state");
              if ("left" === this.activeLoopHandle) {
                const a = { x: this.limitX(e.x + t.deltaLeftX), y: e.y },
                  n = X(this.state.model, a, "left");
                n.stringY < i.stringY ||
                (n.stringY === i.stringY && a.x <= i.absoluteLoopLeftX)
                  ? ((s.loopStartLayout = n), (s.loopStartX = a.x))
                  : ((s.loopStartLayout = s.loopEndLayout),
                    (s.loopStartX = o.absoluteLoopLeftX));
              } else {
                const a = { x: this.limitX(e.x + t.deltaRightX), y: e.y },
                  n = X(this.state.model, a, "right");
                n.stringY > o.stringY ||
                (n.stringY === o.stringY && a.x >= o.absoluteLoopRightX)
                  ? ((s.loopEndLayout = n), (s.loopEndX = a.x))
                  : ((s.loopEndLayout = s.loopStartLayout),
                    (s.loopEndX = i.absoluteLoopRightX));
              }
            }
            {
              const { loopStartLayout: e, loopEndLayout: o } = s;
              if (
                e &&
                o &&
                (e !== t.loopStartLayout || o !== t.loopEndLayout)
              ) {
                const t = I(
                    this.props.part,
                    s.position.cursor,
                    e,
                    o,
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
      }),
      s(this, "onTouchEnd", (t) => {
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
          const o = this.getTouchPoint(t);
          (e = this.lastTouch),
            (s = o),
            (e ? Math.abs(s.x - e.x) + Math.abs(s.y - e.y) : 0) < 7 &&
              (t.preventDefault(),
              this.setState((t) => {
                const e = {
                    position: t.position,
                    loopStartX: t.loopStartX,
                    loopStartLayout: t.loopStartLayout,
                    loopEndX: t.loopEndX,
                    loopEndLayout: t.loopEndLayout,
                  },
                  s = X(t.model, o);
                if (
                  0 === this.props.position.loopStart &&
                  0 === this.props.position.loopEnd
                )
                  e.position = { cursor: s.leftTime, loopStart: 0, loopEnd: 0 };
                else {
                  const t = s.leftTime,
                    o = s.rightTime;
                  if (e.position.loopStart <= t && t < e.position.loopEnd)
                    e.position = {
                      cursor: t,
                      loopStart: e.position.loopStart,
                      loopEnd: e.position.loopEnd,
                    };
                  else if (e.position.loopStart <= o && o < e.position.loopEnd)
                    e.position = {
                      cursor: o,
                      loopStart: e.position.loopStart,
                      loopEnd: e.position.loopEnd,
                    };
                  else {
                    const o = s.measureLayout.measure.beatsLayouts;
                    (e.loopStartLayout = o[0]),
                      (e.loopEndLayout = o[o.length - 1]),
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
        var e, s;
        document.removeEventListener("touchend", this.onTouchEnd),
          document.removeEventListener("mouseup", this.onTouchEnd);
      }),
      s(this, "handleShiftLoopRight", (t) => {
        t.preventDefault(), t.stopPropagation();
        const {
          loopEndLayout: e,
          position: { cursor: s, loopStart: o, loopEnd: i },
          model: a,
        } = this.state;
        if (0 === i) return;
        const n = e.measureLayout.measure.index,
          r = e.measureLayout.lineLayout.line,
          l = r.measures.length;
        let h, p;
        if (n === r.measures[l - 1].index) {
          if (!a.lines[r.index + 1]) return;
          const t = a.lines[r.index + 1].measures[0].beatsLayouts;
          i < t[0].loopLeftTime
            ? ((p = t[0]), (h = p.loopLeftTime))
            : ((p = t[t.length - 1]), (h = p.firstLoopRightTime));
        } else {
          let t;
          for (let e = 0; e < l; e++)
            if (r.measures[e].index === n) {
              t = r.measures[e + 1];
              break;
            }
          const e = t.beatsLayouts;
          i < e[0].loopLeftTime
            ? ((p = e[0]), (h = p.loopLeftTime))
            : ((p = e[e.length - 1]), (h = p.firstLoopRightTime));
        }
        const c = { cursor: s, loopStart: o, loopEnd: h };
        this.setState({
          position: c,
          loopEndLayout: p,
          loopEndX: p.absoluteLoopRightX,
        });
        const u = p.measureLayout.lineLayout.line.index,
          d = a.lines[u > 0 ? u - 1 : 0].layout.y;
        this.windowScroller.scroll(d, !1);
      }),
      s(this, "handleShiftLoopLeft", (t) => {
        t.preventDefault(), t.stopPropagation();
        const {
          loopStartLayout: e,
          loopEndLayout: s,
          position: { cursor: o, loopStart: i, loopEnd: a },
          model: n,
        } = this.state;
        if (0 === a) return;
        if (e.measureLayout.measure.index === s.measureLayout.measure.index)
          return;
        const r = s.measureLayout.measure,
          l = r.index,
          h = s.measureLayout.lineLayout.line.measures;
        let p, c, u;
        for (let t = 0; t < h.length; t++)
          if (h[t].index === l) {
            u = h[t - 1];
            break;
          }
        const d = r.beatsLayouts;
        if (
          (a > d[0].loopLeftTime
            ? ((c = d[0]), (p = d[0].loopLeftTime))
            : ((c = u.beatsLayouts[0]), (p = u.beatsLayouts[0].loopLeftTime)),
          p < o)
        )
          return;
        const m = { cursor: o, loopStart: i, loopEnd: p };
        this.setState({
          position: m,
          loopEndLayout: c,
          loopEndX: c.absoluteLoopRightX,
        });
        const f = c.measureLayout.lineLayout.line.index,
          y = n.lines[f > 0 ? f - 1 : 0].layout.y;
        this.windowScroller.scroll(y, !1);
      }),
      s(this, "refWrap", (t) => {
        this.wrap = t;
      }),
      s(this, "refMain", (t) => {
        this.tab = t;
      }),
      s(this, "refTuning", (t) => {
        this.tuningButton = t;
      });
    const e = t.part,
      o = t.width,
      i = new pe(o);
    (this.state = {
      model: new he(e, i),
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
      (this.windowScroller = new Vs());
  }
  componentDidMount() {
    if (
      (this.props.print ||
        (0 === this.props.position.loopStart &&
          0 === this.props.position.loopEnd) ||
        io(this.state, this.props),
      z)
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
    window.addEventListener("resize", g(this.onResize, 250)),
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
      io(this.state, this.props),
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
    const s = t.part,
      o = t.width,
      n = s !== e.mirrorPart || o !== e.mirrorWidth,
      h = new pe(o),
      p = n ? new he(s, h) : e.model;
    let c = e.position;
    A(e.mirrorPosition, t.position) || (c = t.position);
    let u = e.loopStartLayout,
      d = e.loopStartX,
      m = !1,
      f = e.loopEndLayout,
      y = e.loopEndX,
      g = !1;
    const { tuning: v, instrumentId: x } = s,
      b = v && r(x, v);
    let w = !1;
    return (
      (i(x) || a(x)) && b && 0 !== b.pitch && (w = !0),
      0 !== c.loopStart || 0 !== c.loopEnd
        ? ((!n && u && -1 !== u.occurrences.findIndex(so(c.loopStart))) ||
            ((u = l(s, c.loopStart, "left")),
            (d = u.absoluteLoopLeftX),
            (m = !0)),
          (!n &&
            f &&
            -1 !== f.occurrences.findIndex(so(c.loopEnd - f.duration))) ||
            ((f = l(s, c.loopEnd, "right")),
            (y = f.absoluteLoopRightX),
            (g = !0)),
          (m || g) && (c = I(s, c.cursor, u, f)))
        : ((u = null), (d = 0), (f = null), (y = 0)),
      {
        model: p,
        mirrorWidth: o,
        mirrorPart: s,
        mirrorPosition: t.position,
        position: c,
        loopStartLayout: u,
        loopStartX: d,
        loopEndLayout: f,
        loopEndX: y,
        isPitchshiftToStandard: w,
      }
    );
  }
  limitX(t) {
    return Math.min(Math.max(t, 0), this.props.width - 1);
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
      s = X(this.state.model, e);
    this.props.setTabEditor({
      beatsLayout: s,
      touch: e,
      scale: this.state.scale,
    });
  }
  render() {
    const {
        loopStartLayout: t,
        loopEndLayout: e,
        loopStartX: s,
        loopEndX: o,
        isPitchshiftToStandard: i,
        scale: a,
      } = this.state,
      { lines: n, height: r, slicingMode: l } = this.state.model,
      {
        part: h,
        plusAccess: p,
        isFullscreen: c,
        isSmallScreen: u,
        handlePitchshift: d,
        showPitchshiftPopup: m,
        showPitchshiftLayer: f,
        tuning: y,
        layer: g,
        tabEditorData: v,
      } = this.props,
      x = this.props.width + B,
      b = `-${B / 2 - 0.5} -0.5 ${x} ${r}`,
      w = n[0].layout.layers.height,
      S = !p,
      L = "tab_editor" === g;
    return Lt(
      wt,
      null,
      Lt(
        "section",
        {
          id: "tablature",
          className: p
            ? c
              ? "D28105 D2813e"
              : "D28105"
            : c
            ? "D28105 D2813e D282yy"
            : "D28105 D28iz",
          "data-id": p ? R : F,
          role: "application",
          key: "main",
          ref: this.refMain,
        },
        L && Lt(Qs, { scale: a }),
        Lt($s, {
          part: h,
          lines: n,
          tuning: y,
          slicingMode: l,
          tabEditorData: v,
          lazy: S,
        }),
        Lt(
          me,
          null,
          z &&
            Lt(js, {
              scale: this.state.scale,
              part: h,
              lines: n,
              hidden: L,
              ensureLineVisibility: this.ensureLineVisibility,
            }),
          Lt(
            "svg",
            {
              width: x,
              viewBox: b,
              ref: this.refWrap,
              className: "D281qz",
              preserveAspectRatio: "xMidYMid meet",
              id: "handler",
            },
            z && t && e && Lt(Ys, { leftLayout: t, rightLayout: e, lines: n }),
            z && t && Lt(Hs, { x: s, layout: t, handle: "left" }),
            z && e && Lt(Hs, { x: o, layout: e, handle: "right" }),
            Lt(de, { lines: n, part: h }),
            !u &&
              h.tuning &&
              Lt(Ns, {
                reference: this.refTuning,
                firstLineLayoutHeigth: w,
                handlePitchshift: d,
                isPitchshiftToStandard: i,
                isActive: m || f,
                lock: !p,
              })
          )
        ),
        Lt(
          O,
          null,
          "annotation" === g &&
            Lt(
              j,
              { animationStyles: Zs, timeout: 400, key: "annotation_feed" },
              Lt(
                "aside",
                { className: "D286a", id: "annotationFeed" },
                Lt(Ct, { fallback: Lt(H, {}) }, Lt(Js, { part: h }))
              )
            ),
          !u &&
            m &&
            Lt(
              j,
              Object.assign({}, eo, { key: "popup" }),
              Lt(_s, { tab: this.tab, tuningButton: this.tuningButton })
            ),
          !u &&
            f &&
            Lt(
              j,
              Object.assign({}, eo, { key: "layer" }),
              Lt(Ps, {
                firstLineLayoutHeigth: w,
                ensureLineVisibility: this.ensureLineVisibility,
                tab: this.tab,
                tuningButton: this.tuningButton,
              })
            )
        )
      )
    );
  }
};
class no extends St {
  render() {
    const {
        onClick: t,
        pressed: e,
        title: s,
        titlePressed: o,
        name: i,
        instrumentId: a,
      } = this.props,
      n = "mixer-title-id";
    return Lt(
      "button",
      {
        className: e ? Ot.active : Ot.button,
        onClick: t,
        id: "control-mixer",
        "aria-haspopup": !0,
        "aria-pressed": e,
      },
      Lt(
        "svg",
        {
          className: Ot.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": n,
        },
        Lt("title", { id: n }, e && o ? o : s),
        Lt("circle", { className: Ot.tag, cx: "7", cy: "39", r: "6" }),
        Lt("circle", {
          className: Ot.circle,
          cx: "22.5",
          cy: "22.5",
          r: "22.5",
          filter: "url(#svg_shadow)",
        }),
        Lt(ne, {
          className: Ot.shape,
          instrumentId: a,
          name: i,
          transform: "translate(9 9)",
        })
      )
    );
  }
}
var ro = e(
  class extends St {
    constructor(t) {
      super(t),
        s(this, "hidePopup", (t) => {
          t.preventDefault(), this.props.dispatch("layer/hide");
        }),
        s(this, "getPageCoordinates", () => {
          const { body: t, documentElement: e } = document,
            s = this.ruler;
          if (s && t && e) {
            const o = s.getBoundingClientRect();
            return {
              rulerX: o.left + t.scrollLeft + e.scrollLeft,
              rulerY: o.top + t.scrollTop + e.scrollTop,
              rulerW: o.width,
            };
          }
          throw new Error("Wrong Usage");
        }),
        s(
          this,
          "onResize",
          g(() => this.setState(this.getPageCoordinates), 250)
        ),
        s(this, "handleFaster", (t) => {
          t.preventDefault(),
            this.setState(
              (t) => v(t.speed, t.tempo, t.position, this.props.player.tempo),
              () => {
                this.dispatchSpeed(this.state.speed);
              }
            );
        }),
        s(this, "handleSlower", (t) => {
          t.preventDefault(),
            this.setState(
              (t) => x(t.speed, t.tempo, t.position, this.props.player.tempo),
              () => {
                this.dispatchSpeed(this.state.speed);
              }
            );
        }),
        s(this, "dispatchSpeed", (t) => {
          b(this.props.store, t);
        }),
        s(this, "onTouchStart", (t) => {
          const e = this.getTouchPoint(t);
          if (
            ((this.lastTouch = e), t.preventDefault(), !this.onTouchMoveTickId)
          ) {
            const t = window.requestAnimationFrame;
            this.onTouchMoveTickId = t(this.onTouchMoveTick);
          }
          document.addEventListener(
            "touchmove",
            this.onTouchMove,
            window.PASIVE
          ),
            document.addEventListener("mousemove", this.onTouchMove),
            document.addEventListener("touchend", this.onTouchEnd),
            document.addEventListener("mouseup", this.onTouchEnd);
        }),
        s(this, "onTouchMove", (t) => {
          t.preventDefault(),
            t.stopPropagation(),
            (this.lastTouch = this.getTouchPoint(t));
        }),
        s(this, "onTouchMoveTick", () => {
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
        }),
        s(this, "onTouchEnd", () => {
          document.removeEventListener("touchmove", this.onTouchMove),
            document.removeEventListener("mousemove", this.onTouchMove),
            document.removeEventListener("touchend", this.onTouchEnd),
            document.removeEventListener("mouseup", this.onTouchEnd),
            this.onTouchMoveTickId &&
              cancelAnimationFrame(this.onTouchMoveTickId),
            (this.onTouchMoveTickId = void 0);
          let t = this.state.speed;
          const e = this.lastTouch;
          if (e) {
            const s = this.getNewPosition(e);
            this.setState(s), (t = s.speed);
          }
          this.dispatchSpeed(t);
        }),
        s(this, "refWrap", (t) => {
          this.wrap = t;
        }),
        s(this, "refRuler", (t) => {
          this.ruler = t;
        }),
        s(this, "changeBpmState", (t) => {
          this.setState(
            (e) => w(e.speed, e.tempo, e.position, this.props.player.tempo, t),
            () => {
              this.dispatchSpeed(this.state.speed);
            }
          );
        }),
        s(this, "bpmPlus", () => {
          this.changeBpmState(1);
        }),
        s(this, "bpmPlusKeyPress", (t) => {
          13 === t.keyCode &&
            (t.preventDefault(), t.stopPropagation(), this.changeBpmState(1));
        }),
        s(this, "bpmMinus", () => {
          this.changeBpmState(-1);
        }),
        s(this, "bpmMinusPress", (t) => {
          13 === t.keyCode &&
            (t.preventDefault(), t.stopPropagation(), this.changeBpmState(-1));
        });
      const e = t.player.speed,
        o = S(e, t.player.tempo);
      (this.state = {
        speed: e,
        tempo: o,
        position: L(e),
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
    static getDerivedStateFromProps(t, e) {
      if (
        e.mirrorSpeed !== t.player.speed ||
        e.mirrorTempo !== t.player.tempo
      ) {
        const e = t.player.speed;
        return {
          speed: e,
          tempo: S(e, t.player.tempo),
          position: L(e),
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
    getNewPosition(t) {
      const e = k((100 * t.x) / t.w);
      return M(e, this.props.player.tempo);
    }
    getTouchPoint(t) {
      let { rulerX: e, rulerY: s, rulerW: o } = this.state;
      if (null === e || null === s || null === o) {
        const t = this.getPageCoordinates();
        this.setState(t), (e = t.rulerX), (s = t.rulerY), (o = t.rulerW);
      }
      const i = t.changedTouches ? t.changedTouches[0] : t;
      return { x: Math.max(Math.min(i.pageX - e, o), 0), w: o, y: i.pageY - s };
    }
    render() {
      const t = 100 === this.state.speed ? "tl2wd tlca" : "tl2wd",
        e = 100 === this.state.speed ? "tl276 tl1lq" : "tl276";
      return Lt(
        "div",
        { className: "tl2yt", role: "dialog", "aria-label": "Speed" },
        Lt(
          "div",
          { className: e },
          Lt(
            "button",
            {
              onClick: this.bpmMinus,
              onKeyDown: this.bpmMinusPress,
              title: "Alt+A",
            },
            Lt(
              "svg",
              { width: 12, height: 12, viewBox: "0 0 12 2" },
              Lt("rect", {
                y: "2",
                width: "2",
                height: "12",
                transform: "rotate(-90 0 2)",
              })
            )
          ),
          Lt("span", { "aria-label": "Tempo" }, this.state.tempo.bpm, " bpm"),
          Lt(
            "button",
            {
              onClick: this.bpmPlus,
              onKeyDown: this.bpmPlusKeyPress,
              title: "Alt+S",
            },
            Lt(
              "svg",
              { width: 12, height: 12, viewBox: "0 0 12 12" },
              Lt("rect", { x: "5", width: "2", height: "12" }),
              Lt("rect", {
                y: "7",
                width: "2",
                height: "12",
                transform: "rotate(-90 0 7)",
              })
            )
          )
        ),
        Lt(
          "div",
          {
            className: "tl35",
            title: "You can use arrow keys",
            ref: this.refWrap,
          },
          Lt("label", { className: "tl1aa tl294" }, Lt("span", null, "25%")),
          Lt("label", { className: "tl1aa tl1gg" }, Lt("span", null, "50%")),
          Lt("label", { className: "tl1aa tl1ia" }, Lt("span", null, "75%")),
          Lt("label", { className: "tl1aa tl1u0" }, Lt("span", null, "100%")),
          Lt("label", { className: "tl1aa tl2uy" }, Lt("span", null, "125%")),
          Lt("label", { className: "tl1aa tl2o2" }, Lt("span", null, "150%")),
          Lt("label", { className: "tl1aa tly0" }, Lt("span", null, "175%")),
          Lt(
            "div",
            { className: "tl24a", ref: this.refRuler },
            Lt(
              "div",
              {
                className: "tli0",
                style: { left: this.state.position + "%" },
                role: "slider",
                "aria-valuenow": this.state.speed,
                "aria-valuemin": 25,
                "aria-valuemax": 175,
                "aria-valuetext": this.state.tempo.bpm + " bpm",
              },
              Lt("div", { className: t })
            )
          )
        )
      );
    }
  },
  "player"
);
function lo() {
  return Lt(
    "svg",
    { width: 54, height: 54, viewBox: "0 0 54 54" },
    Lt("path", {
      d: "M8 0h38a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
      fill: "#F1452D",
    }),
    Lt("path", {
      d: "M23.5 31V12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3zM23.5 42v-2a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3z",
      fill: "#FDE3DF",
    })
  );
}
const ho = {
  horizontalPopup: qt + " B0fs1",
  verticalPopup: qt + " B0f277",
  verticalLeftPopup: qt + " B0f2nd",
  link: "B0f1ah",
  basewrapper: "B0fqg",
  wrapper: "B0fqg B0f176",
  text: "B0f102",
  linkText: "B0f2sz",
};
function po(t, e) {
  return t ? ho.horizontalPopup : e ? ho.verticalLeftPopup : ho.verticalPopup;
}
function co(e) {
  let { title: s, left: o, horizontal: i } = e;
  const { dispatch: a } = t(),
    n = Nt(() => {
      a("layer/hide");
    }, [a]);
  return Lt(
    "div",
    { className: po(i, o), role: "dialog" },
    Lt(
      "div",
      {
        className: ho.link,
        "aria-label": `${s} mode has no effect`,
        onClick: n,
      },
      Lt("span", { className: ho.wrapper }, Lt(lo, null)),
      Lt(
        "div",
        { className: ho.text },
        "This song has only one",
        Lt("br", null),
        `instrument track. ${s}`,
        Lt("br", null),
        "mode has no effect."
      )
    )
  );
}
const uo = {
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
var mo = e(
  class extends St {
    constructor() {
      super(),
        s(this, "helpToggle", () => {
          const { helpActive: t } = this.state;
          this.setState({ helpActive: !t });
        }),
        s(this, "getActiveHint", (t, e) => {
          const { dispatch: s } = this.props;
          switch (t) {
            case 0:
              return e
                ? [
                    "Use ",
                    Lt(
                      "span",
                      {
                        onClick: (t) => {
                          t.preventDefault(),
                            s("curiosity/event", {
                              event: "Clicked a tab editor popup link",
                              action: "Revisions",
                            }),
                            s("layer/show", "revisions");
                        },
                      },
                      "revisons"
                    ),
                    " for complex changes",
                  ]
                : [
                    Lt(
                      "a",
                      {
                        href: "/a/wa/signin",
                        onClick: (t) => {
                          t.preventDefault(),
                            s("curiosity/event", {
                              event: "Clicked a tab editor popup link",
                              action: "Sign In",
                            }),
                            s("navigate", "/a/wa/signin");
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
        }),
        s(this, "onSave", (t) => {
          const { dispatch: e } = this.props;
          t.preventDefault(),
            e("curiosity/event", {
              event: "Clicked a tab editor popup link",
              action: "SignInButton",
            }),
            e("navigate", "/a/wa/signin");
        });
      const t = $();
      !t && T(),
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
        { helpActive: s, hintActiveId: o, firstHintShowed: i } = this.state;
      let a = uo.unset,
        n = "Save",
        r = uo.hint;
      return (
        i && (r = uo[`hint${o}`]),
        e.isLoggedIn
          ? "changes" === t.status || "saving" === t.status
            ? ((a = uo.saving), (n = "Saving"))
            : "saved" === t.status && ((a = uo.saved), (n = "Saved"))
          : ((a = uo.notLoggedIn), (n = "Sign in & Save")),
        Lt(
          "div",
          { className: s ? uo.popupExtended : uo.popup },
          Lt(
            "div",
            {
              className: s ? uo.helpTagActive : uo.helpTag,
              onClick: this.helpToggle,
            },
            Lt("span", null, "?")
          ),
          s &&
            Lt(
              "div",
              { className: uo.helpContainer },
              Lt(
                "div",
                { className: uo.part },
                Lt("p", null, "Choose a note to edit with your mouse.")
              ),
              Lt(
                "div",
                { className: uo.part },
                Lt("p", null, "Navigate with"),
                Lt(
                  "svg",
                  { className: uo.navigation, width: 41, height: 27 },
                  Lt("rect", { x: 14 }),
                  Lt("rect", { x: 14, y: 14 }),
                  Lt("rect", { x: 28, y: 14 }),
                  Lt("rect", { y: 14 }),
                  Lt("path", { d: "M24 19.5H17L20.5 23.5L24 19.5Z" }),
                  Lt("path", { d: "M33 17V24L37 20.5L33 17Z" }),
                  Lt("path", { d: "M8 17V24L4 20.5L8 17Z" }),
                  Lt("path", { d: "M24 9H17L20.5 5L24 9Z" })
                )
              ),
              Lt(
                "div",
                { className: uo.part },
                Lt("p", null, "Edit with"),
                Lt(
                  "svg",
                  { className: uo.digits, width: 37, height: 13 },
                  Lt("rect", { className: uo.rect, x: 24 }),
                  Lt("rect", { className: uo.rect }),
                  Lt("rect", { x: 15, y: 6, height: 1, width: 7 }),
                  Lt("text", { x: 4, y: 10 }, 0),
                  Lt("text", { x: 28, y: 10 }, 9)
                )
              )
            ),
          Lt(
            "div",
            { className: uo.mainContainer },
            Lt("h3", {}, "TAB corrector"),
            Lt(
              "button",
              { className: a, onClick: e.isLoggedIn ? void 0 : this.onSave },
              Lt("span", null, n)
            ),
            Lt("div", { className: uo.divider }),
            Lt(
              "p",
              { className: r, key: `hint${o}` },
              this.getActiveHint(o, e.isLoggedIn)
            )
          )
        )
      );
    }
  },
  "tabEditor",
  "user"
);
const fo = { animationStyles: jt };
class yo extends St {
  render() {
    const {
        device: t,
        plusAccess: e,
        layer: s,
        tadEditorWarning: o,
        speed: i,
      } = this.props,
      a = "mixer" === s,
      n = "plus_speed" === s,
      r = "speed" === s,
      l = "plus_solo" === s,
      h = "solo_single" === s,
      p = "plus_mute" === s,
      c = "plus_loop" === s,
      u = "plus_print" === s,
      d = s === Ht,
      g = "tab_editor" === s,
      v = f(t.os) || y(t.os) || m(t),
      x = "solo" === this.props.type,
      b = "mute" === this.props.type,
      w = this.props.loop,
      S = this.props.isCountin,
      L = this.props.isMetronome,
      k = `${Math.round(i)}%`,
      M = !e,
      $ = !e,
      T = this.props.usedDrums ? Bt.panePlus2Secondary : Bt.panePlus2;
    return Lt(
      "aside",
      { id: "controls", className: T, "data-controls": "tablature" },
      Lt("div", { className: Bt.handler }),
      Lt(
        "div",
        { className: Bt.centerGroup },
        Lt(
          "div",
          { className: Bt.item },
          Lt(Dt, {
            shouldPlay: this.props.shouldPlay,
            canPlay: this.props.canPlay,
            onClick: this.props.handlePlay,
            title: "Play (Space)",
            titlePressed: "Pause (Space)",
          })
        ),
        Lt(
          "div",
          { className: Bt.item, id: "mixer-button" },
          Lt(no, {
            pressed: a,
            onClick: this.props.handleMixer,
            title: "Show tracks (T)",
            titlePressed: "Hide tracks (T)",
            instrumentId: this.props.track ? this.props.track.instrumentId : Y,
            name: this.props.track ? this.props.track.name : "",
          }),
          Lt(O, null, a && Lt(j, fo, Lt(oe, null)))
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "speed",
            text: k,
            pressed: r,
            onClick: this.props.handleSpeed,
            title:
              "Open speed panel (S). Change tempo: (Alt+1–7) for 25%–175%, (Alt+S/A) for 1 bpm change",
            hasPopup: !0,
            lock: $,
          }),
          Lt(
            O,
            null,
            n &&
              Lt(
                j,
                Object.assign({}, fo, { key: "popup" }),
                v
                  ? Lt(Us, {
                      title: "Tempo Control",
                      device: t,
                      horizontal: !0,
                    })
                  : Lt(It, {
                      title: "Tempo Control",
                      horizontal: !0,
                      classPrefix: "speed",
                    })
              ),
            r && Lt(j, Object.assign({}, fo, { key: "layer" }), Lt(ro, null))
          )
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "loop",
            pressed: w,
            onClick: this.props.handleLoop,
            title: "Turn loop mode on (L)",
            titlePressed: "Turn loop mode off (L)",
            hasPopup: M,
            lock: $,
          }),
          Lt(
            O,
            null,
            c &&
              Lt(
                j,
                fo,
                v
                  ? Lt(Us, { title: "Loop Mode", device: t, horizontal: !0 })
                  : Lt(It, {
                      title: "Loop Mode",
                      horizontal: !0,
                      classPrefix: "loop",
                    })
              )
          )
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "solo",
            pressed: x,
            onClick: this.props.handleSolo,
            title: "Play current track solo (F)",
            titlePressed: "Play focus mix of all tracks (F)",
            hasPopup: M,
            lock: $,
          }),
          Lt(
            O,
            null,
            l &&
              Lt(
                j,
                fo,
                v
                  ? Lt(Us, { title: "Solo Mode", device: t, horizontal: !0 })
                  : Lt(It, {
                      title: "Solo Mode",
                      horizontal: !0,
                      classPrefix: "solo",
                    })
              ),
            h && Lt(j, fo, Lt(co, { title: "Solo", horizontal: !0 }))
          )
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "mute",
            pressed: b,
            onClick: this.props.handleMute,
            title: "Mute current track (M)",
            titlePressed: "Unmute current track (M)",
            hasPopup: M,
            lock: $,
          }),
          Lt(
            O,
            null,
            p &&
              Lt(
                j,
                fo,
                v
                  ? Lt(Us, { title: "Mute Mode", device: t, horizontal: !0 })
                  : Lt(It, {
                      title: "Mute Mode",
                      horizontal: !0,
                      classPrefix: "mute",
                    })
              )
          )
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "countin",
            pressed: S,
            onClick: this.props.handleCountin,
            title: "Turn count-in mode on (C)",
            titlePressed: "Turn count-in mode off (C)",
          })
        ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "metronome",
            pressed: L,
            onClick: this.props.handleMetronome,
            title: "Turn metronome on (N)",
            titlePressed: "Turn metronome off (N)",
          })
        ),
        !this.props.usedDrums &&
          Lt(
            "div",
            { className: Bt.item },
            Lt(Xt, {
              icon: "editor",
              pressed: g,
              onClick: this.props.handleTabEditor,
              title: "Turn tab corrector on (E)",
              titlePressed: "Turn tab corrector off (E)",
              warning: o,
            }),
            g &&
              Lt(j, Object.assign({}, fo, { key: "tab-editor" }), Lt(mo, null))
          ),
        Lt(
          "div",
          { className: Bt.item },
          Lt(Xt, {
            icon: "print",
            onClick: this.props.handlePrint,
            title: "Print (P)",
            lock: $,
          }),
          Lt(
            O,
            null,
            u &&
              Lt(
                j,
                fo,
                Lt(It, {
                  title: "Printing",
                  horizontal: !0,
                  classPrefix: "print",
                })
              )
          )
        ),
        Lt(
          "div",
          { className: Bt.secondaryControls },
          Lt(
            "div",
            {
              className: this.props.usedDrums
                ? Bt.itemSmall
                : Bt.itemSmallHidden,
            },
            Lt(Xt, {
              icon: "help",
              pressed: d,
              onClick: this.props.handleNotation,
              title: "Show drum notation",
              titlePressed: "Hide drum notation",
            }),
            this.props.usedDrums &&
              Lt(zt, { usedDrums: this.props.usedDrums, horizontal: !0 })
          )
        )
      )
    );
  }
}
var go = e(
  class extends St {
    constructor() {
      super(),
        s(this, "tuneUp", (t) => {
          t.preventDefault();
          const { store: e, player: s } = this.props,
            { mode: o } = this.state;
          let i, a;
          "percent" === o
            ? ((i = 10), (a = Math.floor(s.speed / i) * i + i))
            : ((i = +(100 / s.tempo.bpm).toFixed(2)), (a = s.speed + i)),
            a <= 170 && a >= 30 && b(e, a);
        }),
        s(this, "tuneDown", (t) => {
          t.preventDefault();
          const { store: e, player: s } = this.props,
            { mode: o } = this.state;
          let i, a;
          "percent" === o
            ? ((i = 10), (a = Math.floor(s.speed / i) * i - i))
            : ((i = +(100 / s.tempo.bpm).toFixed(2)), (a = s.speed - i)),
            a <= 170 && a >= 30 && b(e, a);
        }),
        s(this, "switchMode", () => {
          const { mode: t } = this.state;
          this.setState({ mode: "percent" === t ? "bpm" : "percent" });
        }),
        (this.state = { mode: "percent" });
    }
    render() {
      const { speed: t, tempo: e } = this.props.player,
        { mode: s } = this.state,
        o = S(t, e),
        i = Math.round(t);
      let a,
        n = "B6731g B679r";
      ("percent" === s
        ? 10 * Math.floor(t / 10) - 10
        : t - +(100 / e.bpm).toFixed(2)) >= 30 &&
        ((n = "B6731g"), (a = this.tuneDown));
      let r,
        l = "B6731g B679r";
      return (
        ("percent" === s
          ? 10 * Math.floor(t / 10) + 10
          : t + +(100 / e.bpm).toFixed(2)) <= 170 &&
          ((l = "B6731g"), (r = this.tuneUp)),
        Lt(
          "div",
          { className: "B6714x", role: "dialog", "aria-label": "Speed" },
          Lt(
            "p",
            { className: "B67al" },
            "percent" === s ? `${o.bpm} bpm` : `${i}%`
          ),
          Lt(
            "div",
            { className: "B6713d" },
            Lt("button", { className: n, onClick: a }, Lt(Cs, { up: !1 })),
            Lt(
              "div",
              { className: "B6711t" },
              Lt("p", null, "percent" === s ? `${i}%` : o.bpm),
              "bpm" === s && Lt("span", null, "bpm")
            ),
            Lt("button", { className: l, onClick: r }, Lt(Cs, { up: !0 }))
          ),
          Lt(
            "button",
            { className: "B67147", onClick: this.switchMode },
            "Switch to " + ("percent" === s ? "bpm" : "%")
          )
        )
      );
    }
  },
  "player"
);
const vo = { animationStyles: et };
class xo extends St {
  componentWillUnmount() {
    clearTimeout(this.overflowTimer);
  }
  constructor() {
    super(),
      s(this, "overflowTimer", null),
      s(this, "minimizeClick", () => {
        const { minimized: t } = this.state;
        clearTimeout(this.overflowTimer),
          t
            ? (this.setState({ minimized: !1 }),
              (this.overflowTimer = setTimeout(() => {
                this.setState({ overflowVisible: !0 });
              }, 500)))
            : (this.props.handleMinimize(),
              this.setState({ minimized: !0, overflowVisible: !1 }));
      }),
      (this.state = { minimized: !0, overflowVisible: !1 });
  }
  render() {
    const {
        device: t,
        layer: e,
        shouldPlay: s,
        canPlay: o,
        pitchShift: i,
        pitchShiftAvailable: a,
        speed: n,
      } = this.props,
      { minimized: r, overflowVisible: l } = this.state,
      h = "plus_speed" === e,
      p = "speed" === e,
      c = "plus_solo" === e,
      u = "solo_single" === e,
      d = "plus_pitchshift" === e,
      m = "pitchshift" === e,
      g = "plus_loop" === e,
      v = "plus_mute" === e,
      x = "solo" === this.props.type,
      b = "mute" === this.props.type,
      w = this.props.speed !== q || p,
      S = this.props.loop,
      L = this.props.isCountin,
      k = 0 !== i || m,
      M = this.props.isMetronome,
      $ = !this.props.plusAccess,
      T = !this.props.plusAccess,
      N = f(t.os) || y(t.os),
      C = { height: 414 + 57 * (a ? 1 : 0) + "px" };
    let E = "n885";
    r ? (C.height = "71px") : l && (E = "n885 n81jn");
    const P = `${Math.round(n)}%`;
    return Lt(
      "footer",
      { className: "n8g5", "data-controls": "tablature" },
      Lt(
        "svg",
        { width: 0, height: 0 },
        Lt("defs", null, Lt(At, {}), Lt(Rt, {}))
      ),
      Lt(
        "div",
        { className: "n8kg", id: "alt-controls" },
        Lt(Dt, {
          shouldPlay: s,
          canPlay: o,
          onClick: this.props.handlePlay,
          title: "Play",
          hideDefs: !0,
        })
      ),
      Lt(
        "div",
        { className: "n8n1", id: "mobile-controls" },
        Lt(
          "div",
          { className: E, style: C },
          Lt(
            "div",
            { className: "n82pa n81e8" },
            Lt(Xt, {
              mobile: !0,
              icon: r ? "arrow" : "arrow-down",
              pressed: !1,
              onClick: this.minimizeClick,
              title: "Minimize",
              titlePressed: "Minimize",
            })
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              mobile: !0,
              icon: "speed",
              text: P,
              pressed: w,
              onClick: this.props.handleSpeed,
              title: "Change playback speed",
              hasPopup: $,
              lock: T,
            }),
            Lt(
              O,
              null,
              h &&
                Lt(
                  j,
                  vo,
                  N
                    ? Lt(Us, { title: "Tempo Control", device: t, mobile: !0 })
                    : Lt(It, { title: "Tempo Control", classPrefix: "speed" })
                ),
              p && Lt(j, Object.assign({}, vo, { key: "layer" }), Lt(go, null))
            )
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              mobile: !0,
              icon: "loop",
              pressed: S,
              onClick: this.props.handleLoop,
              title: "Turn loop mode on",
              titlePressed: "Turn loop mode off",
              hasPopup: $,
              lock: T,
            }),
            Lt(
              O,
              null,
              g &&
                Lt(
                  j,
                  vo,
                  N
                    ? Lt(Us, { title: "Loop Mode", device: t, mobile: !0 })
                    : Lt(It, { title: "Loop Mode", classPrefix: "loop" })
                )
            )
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              mobile: !0,
              icon: "solo",
              pressed: x,
              onClick: this.props.handleSolo,
              title: "Play the current track solo",
              titlePressed: "Play the focus mix of all tracks",
              hasPopup: $,
              lock: T,
            }),
            Lt(
              O,
              null,
              c &&
                Lt(
                  j,
                  vo,
                  N
                    ? Lt(Us, { title: "Solo Mode", device: t, mobile: !0 })
                    : Lt(It, { title: "Solo Mode", classPrefix: "solo" })
                ),
              u && Lt(j, vo, Lt(co, { title: "Solo", horizontal: !0 }))
            )
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              mobile: !0,
              icon: "mute",
              pressed: b,
              onClick: this.props.handleMute,
              title: "Mute current track (M)",
              titlePressed: "Unmute current track (M)",
              hasPopup: $,
              lock: T,
            }),
            Lt(
              O,
              null,
              v &&
                Lt(
                  j,
                  vo,
                  N
                    ? Lt(Us, { title: "Mute Mode", device: t, mobile: !0 })
                    : Lt(It, { title: "Mute Mode", classPrefix: "mute" })
                )
            )
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              mobile: !0,
              icon: "countin",
              pressed: L,
              onClick: this.props.handleCountin,
              title: "Turn count-in mode on (C)",
              titlePressed: "Turn count-in mode off (C)",
            })
          ),
          Lt(
            "div",
            { className: "n82pa" },
            Lt(Xt, {
              icon: "metronome",
              pressed: M,
              onClick: this.props.handleMetronome,
              title: "Turn metronome on (N)",
              titlePressed: "Turn metronome off (N)",
            })
          ),
          a &&
            Lt(
              "div",
              { className: "n82pa" },
              0 !== i &&
                Lt("div", { className: "n835f" }, `${i > 0 ? "+" : ""}${i}`),
              Lt(Xt, {
                mobile: !0,
                icon: "tuning",
                pressed: k,
                onClick: this.props.handlePitchshift,
                title: "Pitch Shift on",
                titlePressed: "Pitch Shift off",
                hasPopup: $,
                lock: T,
              }),
              Lt(
                O,
                null,
                d &&
                  Lt(
                    j,
                    vo,
                    N
                      ? Lt(Us, { title: "Pitch Shift", device: t, mobile: !0 })
                      : Lt(It, { title: "Pitch Shift", classPrefix: "pitch" })
                  ),
                m &&
                  Lt(
                    j,
                    Object.assign({}, vo, { key: "layer" }),
                    Lt(Ps, { mobile: !0 })
                  )
              )
            )
        ),
        Lt(
          "div",
          { className: "n82pa n813x" },
          Lt(Dt, {
            onClick: this.props.handlePlay,
            title: "Play",
            titlePressed: "Pause",
            shouldPlay: s,
            canPlay: o,
            hideDefs: !0,
          })
        )
      )
    );
  }
}
function bo() {
  return Lt(
    "section",
    { className: "Brk2di", role: "alert" },
    Lt(
      "h1",
      { className: "Brk2yo" },
      Lt("span", null, "The song was successfully deleted!")
    ),
    Lt(
      "h2",
      { className: "Brk1b7" },
      "Try ",
      Lt(st, { to: "/" }, "searching"),
      " for other songs."
    )
  );
}
class wo extends St {
  render() {
    return Lt(
      "svg",
      { width: 112, height: 112, viewBox: "0 0 112 112" },
      Lt(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          stroke: "#FD651A",
          "stroke-width": "11",
          transform: "translate(6 6)",
        },
        Lt("circle", { cx: 50, cy: 50, r: 50 }),
        Lt("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
      )
    );
  }
}
function So() {
  return Lt(
    _,
    {
      level: "notice",
      title:
        "Sorry this content has been removed in your country at the request of the underlying music publisher.",
      action:
        "We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
      reason: "license",
    },
    Lt(wo, null)
  );
}
function Lo(t) {
  let { meta: e, user: s, cursor: o, part: i, player: a, isDeleted: n } = t;
  if (e.loading || i.loading) return;
  const r = !!e.current,
    l = e.current && !!e.current.tracks,
    h = V(e, s),
    p = e.current && e.current.isBlocked;
  if (e.isNotFound || i.isNotFound) return Lt(ie, null);
  if (n) return Lt(bo, null);
  if (e.isNetworkFailed || i.isNetworkFailed) return Lt(ae, null);
  if (e.isFailed || i.isFailed) return Lt(re, null);
  if (!e.allowedByLicense) return Lt(So, null);
  if (r && !h && e.current.audioV2Error) {
    let t = "Our virtual band was unable to play it O_o";
    return (
      e.current.audioV2Error === U.TOO_LONG &&
        (t = "Its duration exceeds the 30 minutes limit"),
      Lt(_, {
        level: "error",
        title: "Sorry, playback is not possible on this song",
        action: t,
        reason: "audio",
      })
    );
  }
  return !r || (l && h)
    ? a.webworkerOperational
      ? a.playbackAvailable && z
        ? a.isAudioNetworkFailed
          ? Lt(_, {
              level: "info",
              title: "Audio can't be loaded because of network error.",
              action: "Probably you are offline or connection was canceled",
              reason: "network",
            })
          : a.isAudioFailed
          ? Lt(_, {
              level: "error",
              title: "Sorry, but there are some problems with playback",
              action: "Please, try to reload page",
              reason: "playback",
            })
          : o.isFailed
          ? Lt(_, {
              level: "error",
              title: "Sorry, but there are some problems with cursor",
              action: "Please, try to reload page",
              reason: "cursor",
            })
          : p
          ? Lt(_, {
              level: "notice",
              title: "Sorry, but that revision was blocked",
              action: "Please let us know if you disagree with this decision",
              reason: "block",
            })
          : void 0
        : Lt(_, {
            level: "info",
            title: "Sorry, playback is not supported in your browser",
            action: "Try to use latest Google Chrome",
            reason: a.playbackAvailable ? "animate" : "audio",
          })
      : Lt(_, {
          level: "info",
          title: "Sorry, playback is not possible on this song",
          action: "Probably there is not enough memory",
          reason: "webworker",
        })
    : Lt(_, {
        level: "info",
        title: "Tab sound is being rendered",
        action: "On average it takes about 5 minutes to process a tab",
        reason: "render",
      });
}
const ko = { main: "Bh82fu", showroom: le + " Bh8w3", banner: "Bh82xt" },
  Mo = xt(() => {
    const e = Mt(),
      {
        dispatch: s,
        device: o,
        ads: i,
      } = t("device", "ads", "route", "consent"),
      { alt: a, event: n, link: r, image: l } = Qt(o);
    return Lt(
      "section",
      { id: "showroom_bottom", className: ko.main, ref: e },
      Lt(
        "div",
        { className: ko.showroom, id: "Redesign_BTF_tab_page_320x50" },
        i.notsyFailed &&
          Lt(
            "a",
            {
              className: ko.link,
              onClick: () => s("curiosity/event", { event: n }),
              href: r,
              target: "_blank",
            },
            Lt("img", { src: l, className: ko.banner, alt: a })
          )
      )
    );
  }),
  $o = { onTab: !0 };
function To(e) {
  $t(() => {
    const t = window.hotKeysManager;
    return (
      t.bindOne("space", e.handlePlay, $o),
      t.bindOne("l", e.handleLoop, $o),
      t.bindOne("f", e.handleSolo, $o),
      t.bindOne("m", e.handleMute, $o),
      t.bindOne("r", e.handlePitchshift, $o),
      t.bindOne("t", e.handleMixer, $o),
      t.bindOne("s", e.handleSpeed, $o),
      t.bindOne("p", e.handlePrint, $o),
      t.bindOne("c", e.handleCountin, $o),
      t.bindOne("n", e.handleMetronome, $o),
      t.bindOne("e", e.handleTabEditor, $o),
      t.bindMeta("alt+s", e.handleIncreaseBpm, "global", "App", !0),
      t.bindMeta("alt+a", e.handleDecreaseBpm, "global", "App", !0),
      [
        { key: "alt+1", speed: 25 },
        { key: "alt+2", speed: 50 },
        { key: "alt+3", speed: 75 },
        { key: "alt+4", speed: 100 },
        { key: "alt+5", speed: 125 },
        { key: "alt+6", speed: 150 },
        { key: "alt+7", speed: 175 },
      ].forEach((s) => {
        t.bindMeta(s.key, e.handleChangeSpeed(s.speed), "global", "App", !0);
      }),
      () => {
        t.unbindOne("space", $o),
          t.unbindOne("l", $o),
          t.unbindOne("f", $o),
          t.unbindOne("m", $o),
          t.unbindOne("r", $o),
          t.unbindOne("t", $o),
          t.unbindOne("s", $o),
          t.unbindOne("p", $o),
          t.unbindOne("c", $o),
          t.unbindOne("n", $o),
          t.unbindOne("e", $o);
      }
    );
  }, []);
  const {
      dispatch: s,
      user: o,
      demo: i,
      player: a,
      meta: n,
      part: r,
      cursor: l,
      screen: h,
      layer: { layer: p },
      device: c,
      route: u,
      isDeleted: d,
      browser: m,
      tabEditor: f,
    } = t(
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
    y = u.isPanel,
    g = ((t, e) => true)(o, i),
    v = h.isSmall,
    x = h.fullscreen,
    b = N(n),
    w = h.landscape,
    S = "saving" === f.status || "changes" === f.status,
    { pitchShift: L } = a,
    k = Tt(
      () =>
        !!r.current && !!r.current.tuning && r.current.tuning.map((t) => t + L),
      [L, r]
    ),
    M = n.allowedByLicense,
    $ = !n.isFailed && !r.isFailed && M,
    T = $ && !d && r.current,
    E = $ && !d && !r.current,
    P = $ && !g,
    B = $ && !g && c.isPhone,
    D = B && T,
    X = Nt((t) => s("tabEditor/setForm", t), []);
  return Lt(
    "div",
    { key: "AppTab" },
    v &&
      !w &&
      Lt(se, { track: b, layer: p, isChords: !1, handleMixer: e.handleMixer }),
    Lt(
      "section",
      {
        className: x ? C.tablatureFullscreen : C.tablature,
        role: y ? "complementary" : "main",
      },
      B && Lt(Zt, { key: "showroom-header" }),
      Lt(Pt, {
        plusAccess: g,
        handleFullscreen: e.handleFullscreen,
        handleNotation: e.handleNotation,
      }),
      Lt(Lo, { meta: n, user: o, cursor: l, part: r, player: a, isDeleted: d }),
      Lt(
        v ? xo : yo,
        Object.assign({}, e, {
          shouldPlay: a.shouldPlay,
          canPlay: a.canPlay || y,
          track: b,
          device: c,
          layer: p,
          plusAccess: g,
          loop: 0 !== a.position.loopEnd,
          type: a.type,
          speed: a.speed,
          pitchShift: a.pitchShift,
          pitchShiftAvailable: !r.current || !!r.current.tuning,
          isCountin: a.isCountin,
          isMetronome: a.isMetronome,
          tadEditorWarning: S,
          usedDrums: r.current && r.current.usedDrums,
        })
      ),
      P && Lt(Jt, { key: "showroom", songId: n.songId }),
      E && Lt(te, null),
      T &&
        Lt(ao, {
          dispatch: s,
          part: r.current,
          isFullscreen: x,
          isSmallScreen: v,
          isLandscapeScreen: w,
          plusAccess: g,
          shouldPlay: a.shouldPlay,
          width: h.available,
          position: a.position,
          handlePitchshift: e.handlePitchshift,
          showPitchshiftPopup: "plus_pitchshift" === p,
          showPitchshiftLayer: "pitchshift" === p,
          tuning: k,
          layer: p,
          tabEditorData: f.data,
          setTabEditor: X,
          isDesktop: c.isDesktop,
          browserFamily: m.family,
          isLoggedIn: o.isLoggedIn,
        }),
      D && Lt(Mo, { key: "showroom-bottom" }),
      T && Lt(ee, { withAds: P, device: c, copyright: !0 })
    )
  );
}
export { To as default };
//# sourceMappingURL=AppTab.c5d83a6a.js.map
