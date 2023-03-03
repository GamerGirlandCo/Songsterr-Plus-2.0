import { o as a, v as e, _ as o, T as t, d as l } from "./preact.294f37c2.js";
import {
  b9 as s,
  ba as c,
  ay as r,
  u as i,
  bb as n,
  L as C,
  bc as m,
} from "./index.6eeae9f8.js";
let h = "Co02os",
  u = "Co021p",
  d = "Co0pr",
  p = "Co02n3",
  v = "Co0u4",
  f = "Co02e1",
  x = "Co0156",
  g = "Co028a",
  w = "Co01mx",
  z = "Co0156 Co0z7",
  y = "Co02os Co033q",
  M = "Co02os Co02v6",
  L = "Co02os Co033q Co01t0",
  N = "Co02f1",
  S = "Co0d2",
  b = "Co02e1 Co011p",
  _ = "Co02e1 Co0rk",
  P = "Co02e1 Co01b4",
  k = "Co0eb",
  H = "Co0u4 Co0zs",
  B = "Co0u4 Co035k",
  T = "Co01mx Co02su",
  $ = "Co0u4 Co022n",
  q = "Co01mx Co01tp",
  A = "Co01mx Co0eh",
  D = "Co0u4 Co022e",
  F = "Co01mx Co0mr",
  G = "Co0u4 Co02d3",
  E = "Co0u4 Co0va",
  V = "Co0u4 Co010",
  j = "Co028n",
  I = "Co0sc",
  O = "Co0sc Co012h",
  R = "Co024j",
  W = {
    button: "Co02os",
    circle: "Co021p",
    rect: "Co0pr",
    tag: "Co02n3",
    shape: "Co0u4",
    text: "Co02e1",
    play: "Co0156",
    lock: "Co028a",
    stroke: "Co01mx",
    playLoading: "Co0156 Co0z7",
    active: "Co02os Co033q",
    main: "Co02os Co02v6",
    mainActive: "Co02os Co033q Co01t0",
    icon: "Co02f1",
    warningCircle: "Co0d2",
    textSpeed: "Co02e1 Co011p",
    textHelp: "Co02e1 Co0rk",
    textBpm: "Co02e1 Co01b4",
    tuning: "Co0eb",
    speed: "Co0u4 Co0zs",
    editor: "Co0u4 Co035k",
    loop: "Co01mx Co02su",
    solo: "Co0u4 Co022n",
    fingerings: "Co01mx Co01tp",
    mute: "Co01mx Co0eh",
    learn: "Co0u4 Co022e",
    print: "Co01mx Co0mr",
    countin: "Co0u4 Co02d3",
    metronome: "Co0u4 Co0va",
    voice: "Co0u4 Co010",
    spinnerLoading: "Co028n",
    arrow: "Co0sc",
    "arrow-down": "Co0sc Co012h",
    new: "Co024j",
  },
  Z = () =>
    a("filter", {
      id: "svg_shadow",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%",
      "color-interpolation-filters": "sRGB",
      children: [
        a("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        a("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha",
        }),
        a("feOffset", { dy: "1" }),
        a("feGaussianBlur", { stdDeviation: "4" }),
        a("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
        }),
        a("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4297_138",
        }),
        a("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_4297_138",
          result: "shape",
        }),
      ],
    }),
  U = () =>
    a("filter", {
      id: "svg_shadow_light",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%",
      "color-interpolation-filters": "sRGB",
      children: [
        a("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        a("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha",
        }),
        a("feOffset", { dy: "1" }),
        a("feGaussianBlur", { stdDeviation: "1" }),
        a("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
        }),
        a("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4298_183",
        }),
        a("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_4298_183",
          result: "shape",
        }),
      ],
    }),
  J =
    "M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z",
  K =
    "M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z";
function Q() {
  return e("defs", null, e(Z, {}), e(U, {}));
}
class X extends o {
  componentDidUpdate(a) {
    let { canPlay: e } = this.props;
    a.canPlay && !e
      ? (this.animationTimer && clearTimeout(this.animationTimer),
        (this.animationTimer = setTimeout(
          () => this.setState({ loading: !0 }),
          600
        )))
      : !a.canPlay &&
        e &&
        (this.animationTimer && clearTimeout(this.animationTimer),
        (this.animationTimer = setTimeout(
          () => this.setState({ loading: !1 }),
          600
        )));
  }
  constructor(a) {
    super(a), (this.state = { loading: !a.canPlay });
  }
  render() {
    let {
        onClick: a,
        shouldPlay: o,
        canPlay: t,
        hideDefs: l,
        title: s,
        titlePressed: c,
      } = this.props,
      { loading: r } = this.state,
      i = o ? W.mainActive : W.main,
      n = r ? W.playLoading : W.play;
    return e(
      "button",
      { className: i, onClick: a, "aria-pressed": o, "data-can-play": t },
      e(
        "svg",
        {
          className: W.icon,
          width: 65,
          height: 65,
          viewBox: "-5 -4 65 65",
          role: "img",
          "aria-labelledby": "mainplay-title-id",
          "data-loading": r,
        },
        !l && Q(),
        e("title", {}, o && c ? c : s),
        e("circle", {
          className: W.circle,
          cx: "27.5",
          cy: "27.5",
          r: "27.5",
          filter: "url(#svg_shadow)",
        }),
        e("path", {
          className: n,
          transform: "translate(19 15)",
          d: o
            ? "M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z"
            : "M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z",
        })
      )
    );
  }
}
var Y = "/static/media/voice.eeccc28e.svg";
let aa =
    "M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6",
  ae =
    "M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z",
  ao =
    "M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6",
  at =
    "M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7",
  al =
    "M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8",
  as = "M 1 14 L 7 7.5 L 1 1",
  ac =
    "M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
  ar =
    "M0 16.03h8.93l-.49 1.6H0v-1.6zM3.8 4.6h8.4a.8.8 0 1 1 0 1.6H3.8a.8.8 0 1 1 0-1.6zm3.4 5V1.2a.8.8 0 1 1 1.6 0v8.4a.8.8 0 0 1-1.6 0zM15.8.4c.51 0 .93.42.93.94v13.12c0 .52-.81 1.45-.94.94-.12-.52-.08-1.95-.94-1.36V1.34c0-.52.42-.94.94-.94zm.6 13.27c.27.37.39.96.33 1.41-.06.42-.27.94-.55 1.37a8.88 8.88 0 0 1-2.67 2.52 9.69 9.69 0 0 1-3.5 1.4c-.55.08-1.14.08-1.59-.02a2.44 2.44 0 0 1-1.32-.8c-.28-.37-.4-.96-.33-1.41.06-.42.27-.93.54-1.37a8.88 8.88 0 0 1 2.67-2.52 9.67 9.67 0 0 1 3.5-1.4 4.6 4.6 0 0 1 1.6.02c.47.11 1.03.43 1.31.8zm-1.67.7a2.46 2.46 0 0 0-.93 0c-.86.14-1.83.5-2.86 1.16a6.96 6.96 0 0 0-2.2 2.05c-.2.33-.3.55-.33.8-.03.22-.03.22.04.32.08.1.08.1.31.15.26.06.53.06.94 0 .86-.13 1.83-.5 2.86-1.16a6.94 6.94 0 0 0 2.19-2.05c.2-.33.3-.55.33-.8.03-.21.04-.21-.04-.32-.08-.1-.08-.1-.3-.15zm.15 1.66H25v1.6H13.8l1.08-1.6z",
  ai =
    "m10.7 4.7-.4-2.2c0-.1 0-.2-.2-.2H4c-.1 0-.2 0-.2.2L2.3 14.7h3.5l9.6-12.3c.7-.8 2 .2 1.2 1L8 14.7h3.7l-.1-1.5A.8.8 0 1 1 13 13l.2 2.4.4 2.9c0 1-.8 2-1.8 2H2c-1 0-1.9-1-1.8-2l1.8-16C2.2 1.3 3 .7 4 .7h6.2c1 0 1.7.6 1.8 1.5l.4 2.2a.8.8 0 0 1-1.6.3ZM2.2 16.3l-.3 2.2.2.2H12l.2-.2-.3-2.2H2.2Z",
  an =
    "M 8.3 20.4 C 4.4 20.3 3.1 16.3 3 15.8 C 2.7 15.2 1.7 11.1 1.7 11.1 C 1.7 11.1 0.9 8.5 1 8.4 C 1.1 8.2 1.4 8.2 1.9 8.3 C 3.9 8.7 4.2 9.9 4.5 11.6 C 4.6 12.1 5 13.8 5.4 13.7 C 5.8 13.6 5.8 10.5 5.8 10.5 L 5.8 4.1 C 5.8 3.3 6.7 2.9 7.2 2.9 C 7.7 2.9 8.7 3.3 8.7 4.1 L 8.7 9.7 L 8.7 2.2 C 8.7 1.4 9.3 1 10 1 C 10.7 1 11.4 1.4 11.4 2.2 L 11.4 10.5 L 11.4 4.1 C 11.4 3.3 12.2 2.9 12.8 2.9 C 13.4 2.9 14.3 3.4 14.3 4.1 L 14.3 11.3 L 14.3 6 C 14.5 5.4 15 5.1 15.7 5.1 C 16.4 5.1 17.1 5.8 17 6.4 C 16.9 8.1 16.9 9.1 16.8 10.5 C 16.7 11.6 16.6 11.9 16.7 14.5 C 16.7 15.6 16.4 17.4 15.3 19.1 C 14.3 20.6 14.3 20.6 14.3 21.2 C 14.3 22.4 12.5 23 10.7 23 C 9.3 23 6.7 22.4 6.7 21.4 L 6.6 20.2 M 7.1 13.7 C 7.9 14 8.7 15.9 8.7 17";
function aC(a) {
  switch (a) {
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
    case "editor":
      return "M0 16.03h8.93l-.49 1.6H0v-1.6zM3.8 4.6h8.4a.8.8 0 1 1 0 1.6H3.8a.8.8 0 1 1 0-1.6zm3.4 5V1.2a.8.8 0 1 1 1.6 0v8.4a.8.8 0 0 1-1.6 0zM15.8.4c.51 0 .93.42.93.94v13.12c0 .52-.81 1.45-.94.94-.12-.52-.08-1.95-.94-1.36V1.34c0-.52.42-.94.94-.94zm.6 13.27c.27.37.39.96.33 1.41-.06.42-.27.94-.55 1.37a8.88 8.88 0 0 1-2.67 2.52 9.69 9.69 0 0 1-3.5 1.4c-.55.08-1.14.08-1.59-.02a2.44 2.44 0 0 1-1.32-.8c-.28-.37-.4-.96-.33-1.41.06-.42.27-.93.54-1.37a8.88 8.88 0 0 1 2.67-2.52 9.67 9.67 0 0 1 3.5-1.4 4.6 4.6 0 0 1 1.6.02c.47.11 1.03.43 1.31.8zm-1.67.7a2.46 2.46 0 0 0-.93 0c-.86.14-1.83.5-2.86 1.16a6.96 6.96 0 0 0-2.2 2.05c-.2.33-.3.55-.33.8-.03.22-.03.22.04.32.08.1.08.1.31.15.26.06.53.06.94 0 .86-.13 1.83-.5 2.86-1.16a6.94 6.94 0 0 0 2.19-2.05c.2-.33.3-.55.33-.8.03-.21.04-.21-.04-.32-.08-.1-.08-.1-.3-.15zm.15 1.66H25v1.6H13.8l1.08-1.6z";
    case "arrow":
    case "arrow-down":
      return "M 1 14 L 7 7.5 L 1 1";
    case "tuning":
      return "M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5";
    case "metronome":
      return ai;
    case "fingerings":
      return "M 8.3 20.4 C 4.4 20.3 3.1 16.3 3 15.8 C 2.7 15.2 1.7 11.1 1.7 11.1 C 1.7 11.1 0.9 8.5 1 8.4 C 1.1 8.2 1.4 8.2 1.9 8.3 C 3.9 8.7 4.2 9.9 4.5 11.6 C 4.6 12.1 5 13.8 5.4 13.7 C 5.8 13.6 5.8 10.5 5.8 10.5 L 5.8 4.1 C 5.8 3.3 6.7 2.9 7.2 2.9 C 7.7 2.9 8.7 3.3 8.7 4.1 L 8.7 9.7 L 8.7 2.2 C 8.7 1.4 9.3 1 10 1 C 10.7 1 11.4 1.4 11.4 2.2 L 11.4 10.5 L 11.4 4.1 C 11.4 3.3 12.2 2.9 12.8 2.9 C 13.4 2.9 14.3 3.4 14.3 4.1 L 14.3 11.3 L 14.3 6 C 14.5 5.4 15 5.1 15.7 5.1 C 16.4 5.1 17.1 5.8 17 6.4 C 16.9 8.1 16.9 9.1 16.8 10.5 C 16.7 11.6 16.6 11.9 16.7 14.5 C 16.7 15.6 16.4 17.4 15.3 19.1 C 14.3 20.6 14.3 20.6 14.3 21.2 C 14.3 22.4 12.5 23 10.7 23 C 9.3 23 6.7 22.4 6.7 21.4 L 6.6 20.2 M 7.1 13.7 C 7.9 14 8.7 15.9 8.7 17";
  }
}
function am(a) {
  switch (a) {
    case "speed":
      return e(
        "text",
        { className: W.textSpeed, "text-anchor": "middle", x: "22.5", y: "31" },
        "SPEED"
      );
    case "help":
      return e(
        "text",
        { className: W.textHelp, "text-anchor": "middle", x: "22", y: "30" },
        "?"
      );
    case "voice":
      return e("use", { className: W.voice, xlinkHref: `${Y}#icon` });
    default:
      return e("path", { className: W[a], d: aC(a) });
  }
}
class ah extends o {
  render() {
    let {
        pressed: a,
        disabled: o,
        onClick: t,
        icon: l,
        text: r,
        title: i,
        titlePressed: n,
        hasPopup: C,
        isNew: m,
        warning: h,
        lock: u,
        loading: d,
      } = this.props,
      p = a ? W.active : W.button,
      v = `${l}-title-id`,
      f =
        "arrow" === l || "arrow-down" === l
          ? "control-minimizer"
          : `control-${l}`,
      x = !a && h ? W.warningCircle : W.circle;
    return e(
      "button",
      {
        className: p,
        onClick: t,
        "aria-haspopup": C,
        "aria-pressed": a,
        "aria-warning": h,
        id: f,
        disabled: o,
      },
      e(
        "svg",
        {
          className: W.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": v,
        },
        e("title", { id: v }, a && n ? n : i),
        "arrow" === l || "arrow-down" === l
          ? e("rect", {
              className: W.rect,
              x: 2,
              y: 2,
              width: 40,
              height: 40,
              rx: 6,
              filter: "url(#svg_shadow)",
            })
          : e("circle", {
              className: x,
              cx: "22.5",
              cy: "22.5",
              r: "22.5",
              filter: "url(#svg_shadow)",
            }),
        d
          ? e(s, {
              x: 5,
              y: 5,
              width: 35,
              height: 35,
              fill: "#128df6",
              className: c.feature,
            })
          : am(l),
        r &&
          e(
            "text",
            { className: W.text, "text-anchor": "middle", x: "22.5", y: "21" },
            r
          ),
        u &&
          e(
            "g",
            { transform: "translate(22, 24)" },
            e("circle", {
              className: x,
              cx: "16.5",
              cy: "15.5",
              r: "8.5",
              filter: "url(#svg_shadow)",
            }),
            e("path", {
              className: W.lock,
              d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
            }),
            e("circle", { className: W.shape, cx: 16.5, cy: 17, r: 0.8 })
          )
      ),
      m && e("div", { className: W.new }, "NEW")
    );
  }
}
function au() {
  return e(
    "svg",
    { width: 54, height: 54, viewBox: "0 0 54 54" },
    e("path", {
      d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6zm-6.5 22.5h-10v-10h-9v10h-10v9h10v10h9v-10h10v-9z",
      fill: "#68d517",
    })
  );
}
var ad = null,
  ap = null,
  av = null,
  af = null,
  ax = null,
  ag = null,
  aw = null,
  az = null,
  ay = null,
  aM = null,
  aL = [ad, ap, av, af, ax, ag, aw, az, ay, aM];
function aN(a, e, o) {
  return o
    ? n[`${o}Popup`]
    : a
    ? n.horizontalPopup
    : e
    ? n.verticalLeftPopup
    : n.verticalPopup;
}
function aS(a) {
  let {
      title: o,
      left: l,
      horizontal: s,
      classPrefix: c,
      leftOffset: h,
      topOffset: u,
      middleText: d,
    } = a,
    { gettext: p } = r(aL),
    v = {};
  void 0 !== h && void 0 !== u && (v = { top: `${u}px`, left: `${h}px` });
  let { dispatch: f } = i(),
    x = t(() => {
      f("demo/activate");
    }, [f]),
    g = t(() => {
      f("curiosity/setConversionProps", {
        "Last referring link": `${o} Popup`,
      });
    }, [o, f]),
    w = aN(s, l, c);
  return (
    d && (w += ` ${n.longPopup}`),
    e(
      "div",
      { className: w, style: v, role: "dialog" },
      e(
        C,
        {
          className: n.link,
          to: "/a/wa/plus",
          "aria-label": p`${o} is available on the Plus plan`,
          onClick: g,
        },
        e("span", { className: n.wrapper }, e(au, null)),
        e(
          "div",
          { className: n.text },
          p`${o} is available `,
          e("br", null),
          p`on the Plus plan`,
          e("br", null),
          e("span", { className: n.linkText }, p("See plans and pricing"))
        )
      ),
      e("div", { className: n.divider }),
      d && e("p", { className: n.middleText }, d),
      d && e("div", { className: n.divider }),
      e(
        C,
        {
          className: n.link,
          to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
          "aria-label": p("Try out Demo Song (all the features enabled)"),
          onClick: x,
        },
        e("span", { className: n.demowrapper }, e(m, null)),
        e(
          "div",
          { className: n.demoText },
          p`Try out ${o}`,
          e("br", null),
          e("span", { className: n.linkText }, p("on the Demo Song"))
        )
      )
    )
  );
}
let ab = "Ctogp",
  a_ = "Cto1ei",
  aP = "Ctogp Cto2tw",
  ak = "Ctogp Cto22p",
  aH = "Ctogp Cto2qi",
  aB = "Ctogp Cto2hl",
  aT = "Ctozt",
  a$ = "Cto2qn",
  aq = "Cto2qn Cto2ih",
  aA = "Cto2qn Cto2ih Cto10u",
  aD = "Cto1nx",
  aF = {
    pane: "Ctogp",
    centerGroup: "Cto1ei",
    paneControlsChords: "Ctogp Cto2tw",
    panePlus2: "Ctogp Cto22p",
    panePlus2Secondary: "Ctogp Cto2qi",
    panePlus3: "Ctogp Cto2hl",
    secondaryControls: "Ctozt",
    item: "Cto2qn",
    itemSmall: "Cto2qn Cto2ih",
    itemSmallHidden: "Cto2qn Cto2ih Cto10u",
    handler: "Cto1nx",
  },
  aG = "gs2yb",
  aE = "gs2y2",
  aV = { capo: "gs2yb", text: "gs2y2" },
  aj =
    "M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z";
function aI(a) {
  switch (a) {
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
function aO(e) {
  let { capo: o, layer: t } = e;
  if (!t) return null;
  let { x1: s, y: c } = t;
  return a(l, {
    children: [
      a(
        "path",
        {
          id: "capo",
          transform: `translate(${s}, ${-16 - c})`,
          d: "M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z",
          className: aV.capo,
        },
        "path"
      ),
      a(
        "text",
        {
          className: aV.text,
          x: 30 + s,
          y: -3 - c,
          children: `Capo ${o}${aI(o)} fret`,
        },
        "text"
      ),
    ],
  });
}
export {
  aO as C,
  Q as D,
  ah as F,
  aS as P,
  Z as S,
  aF as _,
  W as a,
  ai as b,
  aI as c,
  X as d,
  U as e,
  Y as s,
};
