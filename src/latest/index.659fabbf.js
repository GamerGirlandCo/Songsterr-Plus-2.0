let e, t, n, r, i, a, s, o, l;
import {
  B as c,
  q as u,
  p as d,
  F as p,
  s as h,
  h as m,
  a as g,
  o as f,
  P as y,
  D as v,
  T as b,
  d as w,
  x as S,
  b as x,
  c as k,
  R as C,
  M as E,
  _ as T,
  y as P,
  e as _,
  S as L,
} from "./preact.3d326435.js";
async function A() {
  if (
    ((window.global = window.global || window),
    (window.AudioContext = window.AudioContext || window.webkitAudioContext),
    "object" == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
  )
    for (let [e, t] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] =
        "function" == typeof t ? () => {} : null;
  window.PASSIVE = !1;
  try {
    let e = Object.defineProperty({}, "passive", {
      get() {
        window.PASSIVE = { passive: !0 };
      },
    });
    window.addEventListener("test", null, e);
  } catch (e) {}
  if (
    ("function" != typeof SVGElement.prototype.focus &&
      (SVGElement.prototype.focus = () => {}),
    "function" != typeof CSSRuleList.prototype[Symbol.iterator] &&
      (CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
    "undefined" == typeof console)
  ) {
    let e = () => {};
    console = { error: e, info: e, log: e, warn: e };
  }
}
let I = !0,
  N = void 0,
  M = "f25201c4",
  B = 27;
class O {
  constructor(e, t) {
    for (let n of ((this.events = {}), (this.state = t || {}), e)) n && n(this);
    t || this.dispatch("@init", 1);
  }
  on(e, t) {
    return (
      (this.events[e] || (this.events[e] = [])).push(t),
      () => {
        this.events[e] = this.events[e].filter((e) => e !== t);
      }
    );
  }
  dispatch = (() => {
    var e = this;
    return function (t) {
      let n;
      for (
        var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        i[a - 1] = arguments[a];
      let { events: s } = e,
        o = {},
        l = !1;
      if (s[t])
        for (let r of s[t]) {
          let t = r(e.state, ...i);
          t &&
            ("function" != typeof t.then
              ? (Object.assign(o, t),
                (l = !0),
                (e.state = Object.assign({}, e.state, t)))
              : (n || (n = []), n.push(t)));
        }
      return (
        Function(
          atob(
            "d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp"
          )
        )(),
        l && e.dispatch("@changed", o),
        n ? Promise.all(n) : void 0
      );
    };
  })();
  get() {
    return this.state;
  }
}
let D = (e) => {},
  z = [123, 114, 96, 67, 127, 102, 96]
    .map((e) => String.fromCharCode(19 ^ e))
    .join("");
var R,
  $,
  F,
  V,
  U,
  H,
  j,
  G,
  W,
  q,
  X,
  Y,
  K,
  J,
  Z,
  Q,
  ee,
  et,
  en = (e) => true;
let er =
    /([\/-])((drum|bass)-)?(tab|chords)-([bg]-)?s(\d+)(t(\d+))?(\/r(\d+))?(\/editor)?/i,
  ei = { page: "", isPanel: !1 },
  ea = [
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
    ["/a/wa/plus/coupon", { page: "coupon", isPanel: !0 }],
    ["/a/wa/howtoreadtab", { page: "howToReadTab", isPanel: !0 }],
    ["/a/wa/mytabs", { page: "mytabs", isPanel: !0 }],
    ["/tags", { page: "tags", isPanel: !1 }],
    ["/tags/", { page: "tags", isPanel: !1 }],
    ["/a/wsa/tags", { page: "tags", isPanel: !1 }],
    ["/a/wsa/tags/", { page: "tags", isPanel: !1 }],
    [
      er,
      (e) => {
        let [, , , t, n, , r, , i, , a, s] = e;
        return "tab" === n
          ? {
              partInstrument: t || null,
              page: n,
              songId: +r,
              partId: i ? +i : null,
              revisionId: a ? +a : null,
              isPanel: !1,
              hasEditor: !!s,
            }
          : {
              page: n,
              songId: +r,
              chordsRevisionId: a ? +a : null,
              isPanel: !1,
            };
      },
    ],
    [
      /(\/|-|undefined)tabs-a(\d+)/i,
      (e) => ({ page: "artist", artistId: e[2] ? +e[2] : null, isPanel: !0 }),
    ],
    [
      /\/a\/wsa\/(.*)-tabs-t(\d+)/i,
      (e) => ({ page: "tag", isPanel: !1, name: e[1].replace(/-/, " ") }),
    ],
    [/tags\/(.*)/i, (e) => ({ page: "tag", isPanel: !1, name: e[1] })],
  ];
function es(e) {
  for (let [t, n] of ea)
    if (t instanceof RegExp) {
      let r = e.match(t);
      if (r) {
        if ("function" == typeof n) return n(r);
        return n;
      }
    } else if (e === t) {
      if ("function" == typeof n) return n.apply(null);
      return n;
    }
  return ei;
}
function eo(e) {
  let t = {};
  return (
    e
      .split("&")
      .map((e) => e.split("=").map(decodeURIComponent))
      .forEach((e) => {
        t[e[0]] = e[1] || "";
      }),
    t
  );
}
function el(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function ec(e, t, n) {
  if (n.user.isLoggedIn) {
    if ("/a/wa/signin" === e || "/a/wa/signup" === e) return "/a/wa/account";
    if (en(n.user)) {
      if ("/a/wa/account/deactivate" === e || e.startsWith("/a/wa/plus"))
        return "/a/wa/account";
    } else if ("/a/wa/account/card" === e || "/a/wa/account/subscription" === e)
      return "/a/wa/account";
  } else {
    if (e.startsWith("/a/wa/account")) return "/a/wa/signin?next=account";
    if ("/a/wa/plus/payment" === e) return "/a/wa/signin?next=subscribe";
    if (e.startsWith("/a/wa/plus/coupon")) {
      let e = new URLSearchParams(t);
      return e.set("next", "coupon"), `/a/wa/signin?${e}`;
    }
  }
}
function eu(e, t, n) {
  let r = e ? e.toLowerCase() : "/";
  return ec(r, t, n);
}
function ed(e) {
  let t = e.page;
  return "tab" === t || "chords" === t || "tag" === t || "tags" === t;
}
function ep(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    a = { route: es(e.toLowerCase()) };
  if (
    (t && t.length ? (a.query = eo(t)) : el(n.query) || (a.query = {}),
    ed(a.route) &&
      ((a.routeContent = a.route),
      a.query
        ? (a.queryContent = a.query)
        : el(n.queryContent) || (a.queryContent = {})),
    i)
  )
    return a;
  r.dispatch("route/change", a);
}
let eh = (e) => {
    function t(t, n) {
      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        [i, a] = n.split("#")[0].split("?"),
        s = eu(i, a, t);
      return (
        s && (([i, a] = s.split("?")), (n = s)),
        history.pushState(null, "", n),
        ep(i, a, t, e, r)
      );
    }
    e.on("navigate", (e, n) => t(e, n)),
      e.on("navigate/silent", (e, n) => t(e, n, !0)),
      e.on("popstate", (t, n) => {
        let { pathname: r, search: i } = n,
          a = i && i.substring(1),
          s = eu(r, a, t);
        if (s) {
          console.log("Found redirect to", s),
            history.replaceState(null, "", s),
            e.dispatch("navigate", s);
          return;
        }
        return ep(r, a, t, e);
      }),
      e.on("route/change", (e, t) => t),
      window.addEventListener("popstate", () => {
        e.dispatch("popstate", {
          pathname: location.pathname,
          search: location.search,
        });
      });
  },
  em = 11531520,
  eg = 6e4,
  ef = (e) => e[0],
  ey = (e) => e[1],
  ev = (e) => e / 11531520,
  eb = (e, t) => Math.floor((ev(e) / t.bpm) * t.type * 6e4),
  ew = 24,
  eS = 32,
  ex = 1024,
  ek = 31;
function eC(e) {
  return 1024 === e;
}
function eE(e) {
  return e >= 24 && e <= 31;
}
function eT(e) {
  return e >= 32 && e <= 39;
}
let eP = 0,
  e_ = 1,
  eL = 2,
  eA = 3,
  eI = 4,
  eN = 5,
  eM = 6,
  eB = 7,
  eO = 8,
  eD = 9,
  ez = 10,
  eR = 11,
  e$ = 12,
  eF = 13,
  eV = 14,
  eU = 15,
  eH = 16,
  ej = 17,
  eG = 18,
  eW = 19,
  eq = 20,
  eX = 21,
  eY = 22,
  eK = 23,
  eJ = 24;
function eZ(e) {
  return 1024 === e
    ? 24
    : e < 32
    ? e < 24
      ? e < 16
        ? e < 8
          ? 0
          : 1
        : e < 21
        ? 2
        : 3
      : e < 27
      ? e < 26
        ? 4
        : 5
      : 6
    : e < 40
    ? 7
    : e < 68
    ? e < 47
      ? e < 43
        ? e < 42
          ? 8
          : 9
        : e < 46
        ? 10
        : 11
      : e < 56
      ? e < 48
        ? 12
        : 13
      : e < 64
      ? 14
      : 15
    : e < 96
    ? e < 80
      ? e < 72
        ? 16
        : 17
      : e < 88
      ? 18
      : 19
    : e < 112
    ? e < 104
      ? 20
      : 21
    : e < 120
    ? 22
    : 23;
}
let eQ = (e) =>
    e
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\/|\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, ""),
  e1 = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return eQ(t.join("-"));
  },
  e0 = (e) => e.replace(/-+/g, "-").replace(/^-*|-$/g, ""),
  e2 = (e) => e.replace(/^the-/g, "");
function e5(e, t, n) {
  let r = e.views || 0,
    i = !0;
  for (let a of t) {
    if (e === a) {
      i = !1;
      continue;
    }
    if (n(a.instrumentId)) {
      let e = a.views || 0;
      if (e > r || (e === r && i)) return !0;
    }
  }
  return !1;
}
function e4(e) {
  return e.endsWith("-bass") || e.endsWith("-drum") ? e.slice(0, -4) : e;
}
function e3(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!e) return "/";
  let i = "",
    a = !0;
  if (e.tracks && void 0 !== t && !n) {
    let n = null,
      s = e.tracks[t];
    s &&
      (eC(s.instrumentId)
        ? ((i = "-drum"), (n = eC))
        : eT(s.instrumentId)
        ? ((i = "-bass"), (n = eT))
        : eE(s.instrumentId) && (n = eE)),
      (a = r || !n || e5(s, e.tracks, n));
  }
  let s = e1(e.artist, e.title);
  a || (s = e4(s));
  let o = n ? `/r${n}` : "",
    l = a ? `t${t}` : "";
  return "/a/wsa/" + e2(e0(s + i + `-tab-s${e.songId}${l}${o}`));
}
function e9(e, t) {
  if (!e) return "/";
  let n = t ? `/r${t}` : "",
    r = e1(e.artist, e.title);
  return "/a/wsa/" + e2(e0(r + `-tab-s${e.songId}${n}`));
}
function e8(e, t) {
  let n = "",
    r = "",
    i = e.tracks && e.tracks[t];
  i &&
    (eC(i.instrumentId)
      ? (r = "-drum")
      : eT(i.instrumentId)
      ? (r = "-bass")
      : eE(i.instrumentId) || (n = `t${i.partId}`));
  let a = e1(e.artist, e.title);
  return "/a/wsa/" + e2(e0((a = e4(a)) + r + `-tab-s${e.songId}${n}`));
}
function e6(e) {
  let t = e1(e.artist || "");
  return "/a/wsa/" + e0(t + `-tabs-a${e.artistId}`);
}
function e7(e) {
  if (!e) return "/";
  let t = e1(e.artist, e.title);
  return "/a/wsa/" + e2(e0(t + `-chords-s${e.songId}`));
}
!(function (e) {
  (e[(e.V1 = 1)] = "V1"),
    (e[(e.V2 = 2)] = "V2"),
    (e[(e.V4 = 4)] = "V4"),
    (e[(e.MASTER = 2)] = "MASTER"),
    (e[(e.DEV = 777)] = "DEV");
})($ || ($ = {})),
  (function (e) {
    (e[(e.TOO_LONG = 228)] = "TOO_LONG"),
      (e[(e.MIDI_FAILED = 229)] = "MIDI_FAILED"),
      (e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
      (e[(e.UNKNOWN = 500)] = "UNKNOWN");
  })(F || (F = {}));
let te = [
    {
      displayName: "V1",
      version: $.V1,
      bucket: "audio",
      bucketDomains: ["audio1", "audio2", "audio3"],
      audioHashPropertyName: "audio",
    },
    {
      displayName: "V2",
      version: $.V2,
      versionLegacy: "audioV2",
      bucket: "audio3",
      bucketDomains: ["audio31", "audio32", "audio33"],
      audioHashPropertyName: "audioV2",
      audioErrorPropertyName: "audioV2Error",
      midiHashPropertyName: "audioV2Midi",
    },
    {
      displayName: "V4",
      version: $.V4,
      bucket: "audio4",
      bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
      audioHashPropertyName: "audioV4",
      audioErrorPropertyName: "audioV4Error",
      midiHashPropertyName: "audioV4Midi",
    },
    {
      displayName: "Dev",
      version: $.DEV,
      versionLegacy: "next",
      bucket: "audio2",
      bucketDomains: ["audio2"],
      audioHashPropertyName: "nextAudio",
      midiHashPropertyName: "nextMidi",
    },
  ],
  tt = new Map();
function tn(e) {
  return te.filter((t) => !!e[t.audioHashPropertyName]).map((e) => e.version);
}
function tr(e, t) {
  return t === $.V2
    ? e.audioV2Midi || null
    : t === $.V4
    ? e.audioV4Midi || null
    : (t === $.DEV && e.nextMidi) || null;
}
function ti(e, t) {
  let n = tl(t),
    r = e[n.audioHashPropertyName],
    i = n.audioErrorPropertyName ? e[n.audioErrorPropertyName] : null,
    a = tr(e, t);
  return {
    version: t,
    versionInfo: n,
    audio: r,
    audioError: i || void 0,
    midi: a || void 0,
  };
}
function ta(e) {
  return e === $.V2 ? 2 : 3;
}
function ts(e) {
  switch (e) {
    case $.V2:
      return 2;
    case $.V4:
      return 4;
    case $.DEV:
      return 3;
  }
  throw Error(`Illegal argument ${e}`);
}
te.forEach((e) => tt.set(e.version, e));
class to {
  numericVersion = 0;
  payload = "";
  constructor(e, t) {
    (this.numericVersion = e), (this.payload = t);
  }
  encode() {
    return to.encode(this);
  }
  static getLatestAVTag(e) {
    return ts(e);
  }
  static getLatestMVTag(e) {
    return ta(e);
  }
  static encode(e) {
    return `v${e.numericVersion}-${e.payload}`;
  }
  static decode(e) {
    if (!/^v\d+-/.test(e)) return null;
    let [t, n] = e.split("-");
    return new to(+t.substring(1), n);
  }
}
function tl(e) {
  let t = tt.get(e);
  if (t) return t;
  throw Error(`Unable to get audio version info for version ${e}`);
}
class tc {
  has(e, t) {
    return tn(e).includes(t);
  }
  getAll(e) {
    return tn(e);
  }
  get(e, t) {
    return ti(e, t);
  }
  getMVTagForEnv(e, t) {
    let n = ti(e, t),
      r = n.midi;
    return r ? to.decode(r) : null;
  }
  getAVTagForEnv(e, t) {
    let n = ti(e, t),
      r = n.audio;
    return r ? to.decode(r) : null;
  }
  hasLatestAVTag(e, t) {
    let n = this.getAVTagForEnv(e, t);
    return null != n && n.numericVersion >= ts(t);
  }
  hasLatestMVTag(e, t) {
    let n = this.getMVTagForEnv(e, t);
    return null != n && n.numericVersion >= ta(t);
  }
  hasLatestSound(e, t) {
    let n = this.getAVTagForEnv(e, t);
    if (null == n) return !1;
    let r = ta(t),
      i = ts(t),
      a = this.getMVTagForEnv(e, t);
    return null != a
      ? n.numericVersion >= i && a.numericVersion >= r
      : n.numericVersion >= i;
  }
}
let tu = new tc();
!(function (e) {
  (e.ADMINISTRATE = "administrate"),
    (e.MANAGE_SONGS = "manage.songs"),
    (e.MANAGE_REVISIONS = "manage.revisions"),
    (e.UPLOAD_ALL_FILES = "upload.all.files"),
    (e.USE_ADMIN_TOOLS = "use.admin.tools"),
    (e.USE_TAB_EDITOR = "use.tab.editor"),
    (e.USE_VIDEO_SYNCHRONISATION = "use.video.synchronisation");
})(V || (V = {})),
  (function (e) {
    (e.FREE = "free"),
      (e.PLUS = "plus"),
      (e.BETA = "beta"),
      (e.BASIC = "basic");
  })(U || (U = {})),
  (function (e) {
    (e.NONE = "none"), (e.LIFETIME = "lifetime");
  })(H || (H = {})),
  (function (e) {
    (e.BRAINTREE = "braintree"),
      (e.APP_STORE = "appstore"),
      (e.GOOGLE_PLAY = "googleplay"),
      (e.COUPON = "coupon"),
      (e.MANUAL = "manual"),
      (e.LEGACY_PAYPAL = "paypal");
  })(j || (j = {})),
  (function (e) {
    (e.ACTIVE = "active"),
      (e.CANCELED = "canceled"),
      (e.EXPIRED = "expired"),
      (e.OUTDATED = "outdated");
  })(G || (G = {}));
let td = (e, t) =>
    !!e.permissions.includes(V.ADMINISTRATE) ||
    (t instanceof Array
      ? t.some((t) => e.permissions.includes(t))
      : e.permissions.includes(t)),
  tp = {
    plus: { id: "plus", currency: "USD", price: "9.90" },
    plus_usd_1_49: { id: "plus_usd_1_49", currency: "USD", price: "1.49" },
    plus_usd_2_99: { id: "plus_usd_2_99", currency: "USD", price: "2.99" },
    plus_usd_4_99: { id: "plus_usd_4_99", currency: "USD", price: "4.99" },
    plus_usd_5_39: { id: "plus_usd_5_39", currency: "USD", price: "5.39" },
    plus_usd_5_49: { id: "plus_usd_5_49", currency: "USD", price: "5.49" },
    plus_usd_5_99: { id: "plus_usd_5_99", currency: "USD", price: "5.99" },
    plus_usd_6_99: { id: "plus_usd_6_99", currency: "USD", price: "6.99" },
    plus_usd_7_99: { id: "plus_usd_7_99", currency: "USD", price: "7.99" },
    plus_usd_8_49: { id: "plus_usd_8_49", currency: "USD", price: "8.49" },
    plus_usd_9_99: { id: "plus_usd_9_99", currency: "USD", price: "9.99" },
    plus_usd_10_53: { id: "plus_usd_10_53", currency: "USD", price: "10.53" },
    plus_eur_4_99: { id: "plus_eur_4_99", currency: "EUR", price: "4.99" },
    plus_eur_5_99: { id: "plus_eur_5_99", currency: "EUR", price: "5.99" },
    plus_eur_6_99: { id: "plus_eur_6_99", currency: "EUR", price: "6.99" },
    plus_eur_9_99: { id: "plus_eur_9_99", currency: "EUR", price: "9.99" },
    plus_eur_10_99: { id: "plus_eur_10_99", currency: "EUR", price: "10.99" },
    plus_aud_11_99: { id: "plus_aud_11_99", currency: "AUD", price: "11.99" },
    plus_brl_19_90: { id: "plus_brl_19_90", currency: "BRL", price: "19.90" },
    plus_cad_9_99: { id: "plus_cad_9_99", currency: "CAD", price: "9.99" },
    plus_chf_12_90: { id: "plus_chf_12_90", currency: "CHF", price: "12.90" },
    plus_clp_4200: { id: "plus_clp_4200", currency: "CLP", price: "4200" },
    plus_gbp_9_99: { id: "plus_gbp_9_99", currency: "GBP", price: "9.99" },
    plus_jpy_980: { id: "plus_jpy_980", currency: "JPY", price: "980" },
    plus_mnx_115: { id: "plus_mnx_115", currency: "MXN", price: "115" },
    plus_sek_109: { id: "plus_sek_109", currency: "SEK", price: "109" },
  },
  th = (e) => tp[e],
  tm = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t ? "/mo." : "";
    return "USD" === e.currency
      ? `\u0024${e.price}${n}`
      : "EUR" === e.currency
      ? `\u20ac${e.price}${n}`
      : "AUD" === e.currency
      ? `A\u0024${e.price}${n}`
      : "BRL" === e.currency
      ? `R\u0024\u00a0${e.price}${n}`
      : "CAD" === e.currency
      ? `\u0024${e.price}${n}`
      : "CHF" === e.currency
      ? `CHF\u00a0${e.price}${n}`
      : "CLP" === e.currency
      ? `CLP\u0024${e.price}${n}`
      : "GBP" === e.currency
      ? `\u00a3${e.price}${n}`
      : "JPY" === e.currency
      ? `\u00a5${e.price}${n}`
      : "MXN" === e.currency
      ? `MX\u0024${e.price}${n}`
      : "SEK" === e.currency
      ? `${e.price}${n}\u00a0kr`
      : `${e.currency} ${e.price}${n}`;
  };
!(function (e) {
  (e.ERRORS = "errors"),
    (e.TRACKS = "tracks"),
    (e.GLITCHES = "glitches"),
    (e.VERSION = "version"),
    (e.UNCLEAR = "unclear"),
    (e.OTHER = "other");
})(W || (W = {}));
let tg = new Map([
  [W.ERRORS, "It introduced new mistakes in the tab"],
  [W.TRACKS, "It removed some instruments"],
  [W.GLITCHES, "It has problems with audio/display"],
  [W.VERSION, "I've got used to a previous revision"],
  [W.UNCLEAR, "It has unclear description of changes"],
  [W.OTHER, "Other reasons"],
]);
function tf(e) {
  return e;
}
class ty extends Error {
  constructor(e, t, ...n) {
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, ty),
      (this.name = "ValidationError"),
      (this.reasons = e),
      (this.message = t || "Form validation failed.");
  }
}
class tv extends ty {
  constructor(e, t, ...n) {
    super(e, t, ...n),
      Error.captureStackTrace && Error.captureStackTrace(this, tv),
      (this.name = "ValidationWarning");
  }
}
class tb extends Error {
  constructor(...e) {
    super(...e),
      Error.captureStackTrace && Error.captureStackTrace(this, tb),
      (this.name = "FraudError"),
      (this.message = "Email verification failed.");
  }
}
class tw extends Error {
  constructor(e, ...t) {
    super(...t),
      Error.captureStackTrace && Error.captureStackTrace(this, tb),
      (this.name = "RestrainError"),
      (this.action = e),
      (this.message = "Your actions appear suspicious.");
  }
}
class tS extends Error {
  constructor(...e) {
    super(...e),
      Error.captureStackTrace && Error.captureStackTrace(this, tS),
      (this.name = "FetchError"),
      (this.message = "Network error occurred. Please try again later.");
  }
}
class tx extends Error {
  constructor(e, t, ...n) {
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, tx),
      (this.name = "NetworkError"),
      (this.status = e),
      (this.message = `Network error occurred (${e}). Please try again later.`),
      "undefined" != typeof navigator &&
        (this.onLine = navigator && navigator.onLine);
  }
}
let tk = 6,
  tC = 20;
async function tE(e, t, n) {
  let r =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { Accept: "application/json" },
    i = 0,
    a = "",
    s = { headers: r, signal: n };
  for (let t = 0; t < 6 && 404 !== i; t++) {
    try {
      if (n.aborted) return;
      let o = await fetch(e(t), s);
      if (n.aborted) return;
      if (o.ok) {
        let e;
        return (
          (e =
            "application/json" === r.Accept
              ? o.json()
              : "text/plain" === r.Accept
              ? o.text()
              : o.arrayBuffer()),
          await e
        );
      }
      (i = o.status),
        (a = 404 === o.status ? "Not Found" : o.statusText || "Network Error");
    } catch (e) {
      if (n.aborted || "AbortError" === e.name) return;
      console.error(e), (i = 0), (a = e.message || "Network Error");
    }
    await new Promise((e) => setTimeout(e, 20 * t));
  }
  throw new tx(i, a);
}
let tT = "data",
  tP = "revisions",
  t_ = 1,
  tL = () => {
    if ("indexedDB" in window)
      try {
        let t = window.indexedDB.open(tT, 1);
        (t.onupgradeneeded = () => {
          try {
            let e = t.result;
            e &&
              ((e.onerror = (e) => {
                console.error(t.error), e.preventDefault();
              }),
              e.createObjectStore(tP));
          } catch (e) {
            console.error(e);
          }
        }),
          (t.onerror = (e) => {
            console.error(t.error), e.preventDefault();
          }),
          (t.onblocked = (e) => {
            console.error("Request to indexedDB was blocked!"),
              e.preventDefault();
          }),
          (t.onsuccess = () => {
            function n(t) {
              t.preventDefault(), (e = void 0);
            }
            ((e = t.result).onabort = n), (e.onclose = n);
          });
      } catch (e) {
        console.error(e);
      }
  };
tL();
let tA = (t, n) =>
  new Promise((r, i) => {
    try {
      let a = e.transaction(tP, t);
      (a.oncomplete = () => r()),
        (a.onerror = () => i(a.error)),
        n(a.objectStore(tP));
    } catch (e) {
      try {
        window.indexedDB.deleteDatabase(tT);
      } catch (e) {}
      i(e);
    }
  });
async function tI(t) {
  if (!e) return tL(), null;
  try {
    let e = null;
    return (
      await Promise.race([
        tA("readonly", (n) => (e = n.get(t))),
        new Promise((e) => setTimeout(e, 100)),
      ]),
      e && e.result
    );
  } catch (e) {
    return console.error(e), null;
  }
}
async function tN(t, n) {
  if (!e) return tL(), null;
  try {
    await Promise.race([
      tA("readwrite", (e) => e.put(n, t)),
      new Promise((e) => setTimeout(e, 200)),
    ]);
  } catch (e) {
    return console.error(e), null;
  }
}
function tM(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
  "requestIdleCallback" in window
    ? window.requestIdleCallback(e, { timeout: t })
    : setTimeout(e, 0);
}
let tB = (e) => new Promise((t) => setTimeout(t, e));
function tO(e) {
  e.name = e.name.replace(/╨ö╨╛╤Ç╨╛╨╢╨║╨░/g, "Track");
}
function tD(e) {
  let t,
    n =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : ["en-US"];
  try {
    t = e.toLocaleDateString(n);
  } catch (n) {
    t = e.toLocaleDateString(["en-US"]);
  }
  return t;
}
class tz {
  constructor() {
    this.aborted = !1;
  }
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() {
    return !1;
  }
  throwIfAborted() {}
}
class tR {
  constructor() {
    this.signal = new tz();
  }
  abort() {
    this.signal.aborted = !0;
  }
}
Object.defineProperty(tR, "name", { value: "AbortController" }),
  Object.defineProperty(tz, "name", { value: "AbortSignal" });
var t$ = "undefined" != typeof AbortController ? AbortController : tR;
let tF = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  tV = [43, 38, 33, 28],
  tU = [43, 38, 33, 26],
  tH = [43, 38, 33, 28, 23],
  tj = [48, 43, 38, 33, 28, 23],
  tG = [64, 59, 55, 50, 45, 40],
  tW = [64, 59, 55, 50, 45, 38],
  tq = [64, 59, 55, 50, 45, 40, 35],
  tX = {
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
function tY(e, t) {
  return e.map((e) => e + t);
}
function tK(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return e.map((e) => tF[e % 12] + (t ? Math.floor(e / 12) - 1 : ""));
}
function tJ(e) {
  return e.map((e) => {
    let t = +e.slice(-1),
      n = e.substring(0, e.length - 1);
    return tF.indexOf(n) + (t + 1) * 12;
  });
}
function tZ(e, t) {
  let n = tQ(e, t);
  if (n) {
    let e = n[0] - t[0];
    for (let r = 0; r < n.length; r++) if (t[r] + e !== n[r]) return;
    return { tuningName: t1(n), pitch: e, standard: n };
  }
}
function tQ(e, t) {
  if (eE(e)) {
    if (6 === t.length) return t[3] === t[5] + 12 ? tW : tG;
    if (7 === t.length) return tq;
  } else if (eT(e)) {
    if (4 === t.length) return t[1] === t[3] + 12 ? tU : tV;
    if (5 === t.length) return tH;
    if (6 === t.length) return tj;
  }
  return t;
}
function t1(e) {
  let t = tK(e).reverse().join(" "),
    n = tK(e, !1).reverse().join(" ");
  if (e.length in tX && t in tX[e.length]) return tX[e.length][t];
  let r = n.split(" ");
  return r.map((e, t) => (t === r.length - 1 ? e.toLowerCase() : e)).join(" ");
}
function t0(e) {
  return tK(e, !1).reverse().join(" ");
}
let t2 = "ALL INSTRUMENTS",
  t5 = "GUITAR",
  t4 = "BASS",
  t3 = "DRUMS",
  t9 = "Any Difficulty",
  t8 = "Beginner",
  t6 = "Intermediate",
  t7 = "Advanced",
  ne = "ALL TUNINGS",
  nt = "VERY_EASY",
  nn = "EASY",
  nr = "BELOW_INTERMEDIATE",
  ni = "INTERMEDIATE",
  na = "UPPER_INTERMEDIATE",
  ns = "HARD",
  no = "VERY_HARD",
  nl = "INSANE",
  nc = {
    [nt]: "Beginner. Tier 1",
    [nn]: "Beginner. Tier 2",
    [nr]: "Intermediate. Tier 1",
    [ni]: "Intermediate. Tier 2",
    [na]: "Intermediate. Tier 3",
    [ns]: "Advanced. Tier 1",
    [no]: "Advanced. Tier 2",
    [nl]: "Advanced. Tier 3",
  },
  nu = {
    [nt]: 1,
    [nn]: 2,
    [nr]: 3,
    [ni]: 4,
    [na]: 5,
    [ns]: 6,
    [no]: 7,
    [nl]: 8,
  };
function nd(e) {
  return nu[e] || 0;
}
function np(e) {
  return nc[e] || "";
}
function nh(e, t) {
  let n = nu[e] || 0,
    r = nu[t] || 0;
  return n === r ? 0 : n > r ? 1 : -1;
}
let nm = [t2, t5, t4, t3],
  ng = [t9, t8, t6, t7],
  nf = { instrument: t2, difficulty: t9, tunings: {} },
  ny = [
    "and",
    "or",
    "but",
    "nor",
    "yet",
    "so",
    "for",
    "a",
    "an",
    "the",
    "in",
    "to",
    "of",
    "at",
    "by",
    "up",
    "off",
    "on",
  ],
  nv = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function nb(e) {
  try {
    let t = e.split(" ");
    for (let e = 0; e < t.length; e++)
      0 !== e && e !== t.length - 1 && ny.includes(t[e].toLowerCase())
        ? (t[e] = t[e].toLowerCase())
        : (t[e] = nv(t[e]));
    return t.join(" ");
  } catch {
    return e;
  }
}
function nw(e) {
  try {
    let t = e.split(" ");
    for (let e = 0; e < t.length; e++)
      0 !== e &&
        e !== t.length - 1 &&
        ny.includes(t[e].toLowerCase()) &&
        (t[e] = t[e].toLowerCase());
    return t.join(" ");
  } catch {
    return e;
  }
}
let nS = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
function nx(e) {
  let t = [];
  function n(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = arguments.length > 3 ? arguments[3] : void 0;
    0 !== r && (n = tY(n, r)), (i = i || t2);
    let a = tK(n).join(","),
      s = `${i}:${a}`,
      o = t0(n);
    t.push([`${e} (${o})`, s]);
  }
  function r() {
    n("Standard 6-string", tG, 0, t5),
      n("Standard 7-string", tq, 0, t5),
      n("Drop D", tW, 0, t5),
      n("Drop C#", tW, -1, t5),
      n("Drop C", tW, -2, t5),
      n("Drop B", tW, -3, t5),
      n("Drop A#", tW, -4, t5),
      n("Drop A", tW, -5, t5),
      n("Drop G#", tW, -6, t5),
      n("Drop G", tW, -7, t5),
      n("Drop F#", tW, -8, t5),
      n("Drop F", tW, -9, t5);
  }
  if ((t.push([nS(ne), ne]), e === t4)) {
    n("Standard 4-string", tV, 0, t4),
      n("Standard 5-string", tH, 0, t4),
      n("Standard 6-string", tj, 0, t4),
      n("Drop D", tU, 0, t4),
      n("Drop C#", tU, -1, t4),
      n("Drop C", tU, -2, t4),
      n("Drop B", tU, -3, t4),
      n("Drop A#", tU, -4, t4),
      n("Drop A", tU, -5, t4);
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tV, -e, t4);
  } else if (e === t5) {
    r();
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tG, -e, t5);
  } else if (e === t2) {
    r();
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tG, -e, t5);
    n("Bass: 4-string", tV, 0, t4),
      n("Bass: 5-string", tH, 0, t4),
      n("Bass: 6-string", tj, 0, t4),
      n("Bass: Drop D", tU, 0, t4),
      n("Bass: Drop C#", tU, -1, t4),
      n("Bass: Drop C", tU, -2, t4),
      n("Bass: Drop B", tU, -3, t4),
      n("Bass: Drop A#", tU, -4, t4),
      n("Bass: Drop A", tU, -5, t4);
  }
  return t;
}
function nk(e) {
  let t = e.split(":");
  return [t[0], tJ(t[1].split(",")).join(",")];
}
function nC(e, t) {
  if (t === ne) return e;
  let [n, r] = nk(t);
  return e.filter((e) =>
    (function (e) {
      let t = e.tracks;
      if (t)
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          if (
            void 0 !== i.tuning &&
            i.tuning.join(",") === r &&
            ((n === t4 && eT(i.instrumentId)) ||
              (n === t5 && eE(i.instrumentId)))
          )
            return !0;
        }
      return !1;
    })(e)
  );
}
function nE(e, t) {
  function n(e, t) {
    let n = e.tracks;
    if (n)
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        if (t(r.instrumentId)) return !0;
      }
    return !1;
  }
  return e.filter((e) => {
    if (t === t4) return n(e, eT);
    if (t === t3) return n(e, eC);
    if (t === t5) return n(e, eE);
    if (t === t2) return !0;
    throw Error(`Invalid instrument filter value (${t})`);
  });
}
function nT(e, t) {
  return e
    ? t === t9
      ? e.slice()
      : e.slice().filter((e) => {
          let n = e.difficulty;
          if (!n) return !1;
          if (t === t8) return 0 >= nh(n, nn);
          if (t === t6) {
            let e = nh(n, nr) >= 0,
              t = 0 > nh(n, ns);
            return e && t;
          }
          return t === t7 && nh(n, ns) >= 0;
        })
    : void 0;
}
function nP(e, t) {
  return "none" !== t
    ? e.slice().sort((e, n) => {
        let r = e.difficulty,
          i = n.difficulty,
          a = "asc" === t ? nh(r, i) : nh(i, r);
        return 0 === a ? nN(n, e) : a;
      })
    : e;
}
function n_(e, t, n) {
  return nP(nT(e, n), t);
}
function nL(e, t) {
  return { ...e, difficulty: t };
}
function nA(e, t) {
  return { ...e, instrument: t };
}
function nI(e, t, n) {
  let r = { ...e, tunings: { ...e.tunings } };
  return (r.tunings[t] = n), r;
}
function nN(e, t) {
  let n = nM(e),
    r = nM(t);
  return n < r ? -1 : n > r ? 1 : 0;
}
function nM(e) {
  return e.tracks && 0 !== e.tracks.length ? e.tracks[e.defaultTrack].views : 0;
}
function nB(e) {
  let t = e.tunings[e.instrument];
  return (t && t !== ne) || e.instrument !== t2 || e.difficulty !== t9;
}
function nO(e) {
  return e !== t2 && e !== t5;
}
function nD(e) {
  return e === t3;
}
function nz(e) {
  let t = e.tunings[e.instrument];
  return {
    difficulty: e.difficulty !== t9 ? e.difficulty : null,
    instrument: e.instrument !== t2 ? e.instrument : null,
    tuning: t && t !== ne ? nk(t)[1] : null,
  };
}
function nR(e) {
  return eC(e) ? eC : eT(e) ? eT : eE;
}
function n$(e) {
  return eC(e) ? 1024 : eT(e) ? 32 : 24;
}
function nF(e, t) {
  let n = nR(t);
  return (
    e &&
    e.map((e) => {
      if (e.tracks) {
        let t = e.tracks.reduce(
          (e, t, r, i) =>
            n(t.instrumentId) && (-1 === e || t.views > i[e].views) ? r : e,
          -1
        );
        return -1 !== t ? { ...e, defaultTrack: t } : e;
      }
      return e;
    })
  );
}
function nV(e, t) {
  if (e.difficulty !== t.difficulty && e.instrument !== t.instrument) return !1;
  let n = e.tunings[e.instrument],
    r = t.tunings[t.instrument];
  return (!n && !r) || n === r;
}
let nU = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
  nH = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function nj(e) {
  let t = e.name.toLowerCase(),
    n = e.instrument.toLowerCase(),
    r = e.name;
  ("untitled" === t || ("drumkit" === t && "drums" === n) || n.includes(t)) &&
    (r = ""),
    r.length
      ? ((e.title = r), (e.titleFull = r + "\xa0-\xa0" + e.instrument))
      : ((e.title = e.instrument), (e.titleFull = e.instrument));
}
function nG(e) {
  let t = {};
  for (let n of e) {
    let e = t[n.title];
    e || ((e = []), (t[n.title] = e)), e.push(n);
  }
  for (let e in t) {
    let n = t[e];
    if (n.length > 1) {
      let e = 0;
      for (let t of n) (t.title += " " + (e + 1)), e++;
    }
  }
}
async function nW(e, t, n) {
  let r = `/api/meta/${e}${t ? `/${t}` : ""}`,
    i = await tE(() => tf(r), "meta", n);
  if (n.aborted || !i) return null;
  if (i.tracks) {
    let e = 0;
    for (let t of i.tracks) {
      tO(t), nj(t), (t.partId = e);
      let { instrumentId: n } = t;
      eC(n)
        ? (t.isDrums = !0)
        : eT(n)
        ? (t.isBassGuitar = !0)
        : eE(n) && (t.isGuitar = !0),
        e++;
    }
    nG(i.tracks);
  }
  return i.title && (i.title = nw(i.title)), i;
}
async function nq(e, t, n, r, i) {
  let a = `part_${t}_${n}_${r || ""}`,
    s = await tI(a);
  if (s) return s;
  let o = (i) =>
      r
        ? `https://${nU[i % nU.length]}.cloudfront.net/${e}/${t}/${r}/${n}.json`
        : `https://${nH[i % nH.length]}.cloudfront.net/part/${t}/${n}`,
    l = await tE(o, "part", i);
  return !l || i.aborted ? null : (await tN(a, l), l);
}
async function nX(e, t, n, r) {
  let i = `lyrics_${t}_${n || ""}`,
    a = await tI(i);
  if (a) return a;
  let s = (r) =>
      n
        ? `https://${
            nU[r % nU.length]
          }.cloudfront.net/${e}/${t}/${n}/lyrics.json`
        : `https://${nH[r % nH.length]}.cloudfront.net/lyrics/${t}`,
    o = await tE(s, "lyrics", r);
  return !o || r.aborted ? null : (await tN(i, o), o);
}
async function nY(e, t) {
  let n = `/api/meta/${e}/revisions`;
  return await tE(() => tf(n), "revisions", t);
}
async function nK(e, t) {
  let n = 0,
    r = null,
    i = new t$();
  for (; !r && n < 120; ) {
    try {
      r = await nW(e, t, i.signal);
    } catch (e) {
      console.error(e), await tB(2e3);
    }
    n++;
  }
  return r;
}
async function nJ(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (n = n || { method: "get", credentials: "include" }),
    (t = {
      ...t,
      Accept: "application/json",
      "Content-Type": "application/json",
    });
  try {
    return await fetch(e, { ...n, headers: t });
  } catch (e) {
    throw new tS();
  }
}
async function nZ(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  (r = r || { method: "post", credentials: "include" }),
    (n = {
      ...n,
      Accept: "application/json",
      "Content-Type": "application/json",
    });
  let i = JSON.stringify(t);
  try {
    return await fetch(e, { ...r, headers: n, body: i });
  } catch (e) {
    throw new tS();
  }
}
function nQ(e) {
  if (!e.ok) throw new tx(e.status, e.statusText);
}
async function n1(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  t = t || (await e.json());
  let n = 412 === e.status && "reCAPTCHA Validation Failed" === t.message,
    r = 400 === e.status && "reCAPTCHA Validation Failed." === t.message;
  if (n || r)
    throw new ty(
      { __all__: "Please wait for reCAPTCHA logo to appear" },
      t.message
    );
}
async function n0(e, t) {
  if (429 === e.status) throw new tw(t);
}
async function n2(e, t) {
  if (403 === e.status) {
    let n = await e.json(),
      r = n.message || t;
    throw new ty({ __all__: r }, r);
  }
}
async function n5(e) {
  if (422 === e.status) {
    let t = await e.json();
    throw new ty(t.message || t.data || t);
  }
}
async function n4(e) {
  if (!e.ok) {
    let t = await e.json(),
      n = t.message || t,
      r = t.reasons || { __all__: n };
    if ((await n1(e, t), 422 === e.status && "You have incorrect email." === n))
      throw new tb();
    throw new ty(r, n);
  }
}
async function n3(e) {
  if ([400, 422, 423].includes(+e.status)) {
    let t = await e.json();
    if (423 === e.status) throw new tv(t.reasons);
    throw new ty(t.reasons || t);
  }
}
async function n9(e) {
  if (!e.ok && 409 !== e.status)
    throw Error("Oops, something went wrong. Please try again later");
}
function n8(e) {
  let t = Object.keys(e)
    .filter((t) => e[t])
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
  return t.length ? `?${t}` : "";
}
let n6 = (e) => (
  e.sort((e, t) => {
    let n = e.artist.localeCompare(t.artist);
    return 0 === n ? e.title.localeCompare(t.title) : n;
  }),
  e
);
function n7(e) {
  try {
    let t = e.tracks;
    if (!t || !t.length) return;
    let n = t.filter((e) => eE(e.instrumentId) && e.difficulty),
      r = -1;
    Number.isInteger(e.defaultTrack) && eE(t[e.defaultTrack].instrumentId)
      ? (e.difficulty = t[e.defaultTrack].difficulty)
      : (n.forEach((e, t) => {
          (-1 === r || (e.views || 0) > (n[r].views || 0)) && (r = t);
        }),
        -1 !== r && (e.difficulty = n[r].difficulty));
  } catch (e) {
    console.error(e);
  }
}
function re(e) {
  return (
    e.forEach(n7),
    e.forEach((e) => {
      e.title = nb(e.title);
    }),
    e
  );
}
function rt(e) {
  switch (e) {
    case t7:
      return "2";
    case t6:
      return "1";
    default:
      return "0";
  }
}
function rn(e, t, n, r) {
  let i = !t.instrument || t.instrument === t5,
    a = (t.instrument && t.instrument.toLowerCase()) || void 0,
    s = t.tuning || void 0,
    o = (i && t.difficulty && rt(t.difficulty)) || void 0,
    l = { size: n.toString() };
  return (
    r && (l.from = r.toString()),
    e && (l.pattern = e),
    a && (l.inst = a),
    o && (l.difficulty = o),
    s && (l.tuning = s),
    n8(l)
  );
}
async function rr(e, t, n, r, i, a) {
  let s = rn(t, n, i, a),
    o = await fetch(`${e}${s}`, { signal: r, credentials: "omit" });
  if (r && r.aborted) return [];
  nQ(o);
  let l = await o.json(),
    c = re(l);
  return r && r.aborted ? [] : c;
}
function ri(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 200,
    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    s = tf(n ? "/api/songs-db" : "/api/songs");
  return rr(s, e, t, r, i, a);
}
async function ra(e, t) {
  let n = `/api/artist/${e}`,
    r = await tE(() => tf(n), "artist", t);
  return t.aborted || !r ? null : r;
}
function rs(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    s = tf(`/api/artist/${e}/songs`);
  return rr(s, t, n, r, i, a);
}
async function ro(e) {
  let t = tf("/api/favorites"),
    n = await fetch(t, { credentials: "include" });
  nQ(n);
  let r = await n.json();
  return re(n6(r));
}
async function rl(e) {
  let t = tf(`/api/favorites/${e}`),
    n = await fetch(t, { method: "put", credentials: "include" });
  nQ(n);
}
async function rc(e) {
  let t = tf(`/api/favorites/${e}`),
    n = await fetch(t, { method: "delete", credentials: "include" });
  nQ(n);
}
async function ru(e, t) {
  let n = tf(`/api/song/${e}`),
    r = await fetch(n, { method: "delete", credentials: "include", signal: t });
  return (
    (!t || !t.aborted) && (nQ(r), await n5(r), await n2(r, "Forbidden"), !!r.ok)
  );
}
async function rd(e, t) {
  let n = tf(`/api/revision/${e}`),
    r = await fetch(n, { method: "delete", credentials: "include", signal: t });
  return (
    (!t || !t.aborted) && (nQ(r), await n5(r), await n2(r, "Forbidden"), !!r.ok)
  );
}
var rp = "/static/media/artwork-96x96.92b76be0.png",
  rh = "/static/media/artwork-128x128.5723b2d4.png",
  rm = "/static/media/artwork-192x192.b95863ba.png",
  rg = "/static/media/artwork-256x256.e12ddf80.png",
  rf = "/static/media/artwork-384x384.0ba8004c.png",
  ry = "/static/media/artwork-512x512.a1dafd1a.png";
function rv(e, t) {
  return !e || ("AllCountries" !== e.restriction && e.restriction !== t);
}
function rb(e, t) {
  if (!e.current) return !1;
  let n = tu.has(e.current, $.DEV) && td(t, V.USE_ADMIN_TOOLS),
    r = tu.has(e.current, $.MASTER),
    i = tu.has(e.current, $.V1);
  return r || i || n;
}
function rw(e) {
  let t = e.get().meta;
  t.current &&
    !t.isFailed &&
    e.dispatch("meta/load:done", {
      songId: t.songId,
      revisionId: t.revisionId,
      partId: t.partId,
      current: t.current,
    });
}
function rS(e, t) {
  if (!e || !e.length) return 0;
  let n = eE;
  "bass" === t ? (n = eT) : "drum" === t && (n = eC);
  let r = e.filter((e) => n(e.instrumentId));
  r.length || (r = e);
  let i = r[0].partId,
    a = 0;
  for (let e of r) {
    let t = e.views || 0;
    t > a && ((i = e.partId), (a = t));
  }
  return i;
}
function rx(e, t) {
  let n = !1;
  if (t.isLoggedIn && e) {
    let { editors: r } = e,
      i = r && 1 === r.length && r[0] === t.profile.id,
      a = td(t, V.MANAGE_SONGS);
    n = i || a;
  }
  return n;
}
function rk(e) {
  return { meta: { ...e.meta, allowedDeletion: rx(e.meta.current, e.user) } };
}
async function rC(e, t) {
  try {
    let n = new t$(),
      r = await ru(t.songId, n.signal);
    if (r) e("meta/deleteSong:done", t);
    else {
      let t = Error("Oops, something went wrong. Please try again later.");
      e("meta/deleteSong:error", t);
    }
    return n.abort.bind(n);
  } catch (t) {
    e("meta/deleteSong:error", t);
  }
}
async function rE(e, t) {
  try {
    let n = new t$(),
      r = await rd(t.revisionId, n.signal);
    if (r) e("meta/deleteRevision:done", t);
    else {
      let t = Error("Oops, something went wrong. Please try again later.");
      e("meta/deleteRevision:error", t);
    }
    return n.abort.bind(n);
  } catch (t) {
    e("meta/deleteRevision:error", t);
  }
}
async function rT(e, t, n, r, i) {
  let a = new t$();
  try {
    let s = e.get().meta,
      o = s.loading;
    o && o.ac.abort();
    let l = s.songId !== t,
      c = s.revisionId !== i;
    if (
      (await e.dispatch("meta/load:processing", {
        songId: t,
        partInstrument: n,
        partId: r,
        revisionId: i,
        songHasChanged: l,
        revisionHasChanged: c,
        ac: a,
      }),
      a.signal.aborted)
    )
      return;
    let u = e.get().meta.current;
    if (
      (l || c || !u || u.songId !== t || (i && u.revisionId !== i)) &&
      ((u = await nW(t, i, a.signal)), a.signal.aborted || !u)
    )
      return;
    if (null == r) r = rS(u.tracks, n);
    else if (I && u.tracks && !u.tracks[r]) {
      await e.dispatch("navigate", e9(u, i));
      return;
    }
    await e.dispatch("meta/load:done", {
      songId: t,
      partId: r,
      revisionId: i,
      current: u,
    });
  } catch (n) {
    if (a.signal.aborted) return;
    e.dispatch("meta/load:error", { songId: t, revisionId: i, error: n });
  }
}
let rP = (e) => {
    e.on("route/change", (t, n) => {
      let { routeContent: r } = n;
      if (r && "tab" === r.page) {
        let { songId: t, partId: n, revisionId: i, partInstrument: a } = r;
        rT(e, t, a, n, i);
      }
    }),
      e.on("meta/load:processing", (e, t) => {
        let { songId: n, revisionId: r, ac: i } = t;
        return {
          meta: { ...e.meta, loading: { songId: n, revisionId: r, ac: i } },
        };
      }),
      e.on("meta/load:done", (e, t) => {
        let { songId: n, revisionId: r, partId: i, current: a } = t;
        return {
          meta: {
            ...e.meta,
            current: a,
            allowedDeletion: rx(a, e.user),
            allowedByLicense: rv(a, e.device.country),
            songId: n,
            revisionId: r,
            partId: i,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
        };
      }),
      e.on("meta/load:done", (e, t) => {
        let { current: n } = t;
        try {
          "undefined" != typeof MediaMetadata &&
            (navigator.mediaSession.metadata = new MediaMetadata({
              title: n.title,
              artist: n.artist,
              artwork: [
                { src: rp, sizes: "96x96", type: "image/png" },
                { src: rh, sizes: "128x128", type: "image/png" },
                { src: rm, sizes: "192x192", type: "image/png" },
                { src: rg, sizes: "256x256", type: "image/png" },
                { src: rf, sizes: "384x384", type: "image/png" },
                { src: ry, sizes: "512x512", type: "image/png" },
              ],
            }));
        } catch (e) {
          console.error(e);
        }
      }),
      e.on("meta/load:error", (e, t) => {
        let { songId: n, revisionId: r, error: i } = t;
        return {
          meta: {
            ...e.meta,
            current: null,
            allowedByLicense: !0,
            songId: n,
            revisionId: r,
            partId: null,
            loading: null,
            isFailed: !0,
            isNetworkFailed: i instanceof tx && 0 === i.status,
            isNotFound:
              i instanceof tx && (404 === i.status || 400 === i.status),
          },
        };
      }),
      e.on("meta/load:error", (e, t) => {
        let { error: n } = t;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n);
      }),
      e.on("meta/setWasFavoriteOnServerRender", (e, t) => ({
        meta: { ...e.meta, wasFavoriteOnServerRender: t },
      })),
      e.on(
        "meta/deleteSong",
        (t, n) => (rC(e.dispatch, n), { meta: { ...t.meta, deleting: !0 } })
      ),
      e.on("meta/deleteSong:done", (e) => ({
        meta: { ...e.meta, isDeleted: !0, deleting: !1 },
      })),
      e.on(
        "meta/deleteSong:error",
        (e, t) => (
          window && window.alert(`Error: ${t.message}`),
          { meta: { ...e.meta, isDeleted: !1, deleting: !1 } }
        )
      ),
      e.on("meta/checkAllowedDeletion", rk);
  },
  r_ = 12,
  rL = 13,
  rA = 25,
  rI = 18,
  rN = 5,
  rM = 12,
  rB = 8,
  rO = 12,
  rD = 5,
  rz = 4,
  rR = 12,
  r$ = r_ + 10,
  rF = r_,
  rV = 4,
  rU = 2,
  rH = 2,
  rj = 0,
  rG = 0,
  rW = -5,
  rq = 4,
  rX = 12,
  rY = -3;
function rK(e) {
  return -1 * Math.floor(e.width / 2);
}
function rJ(e, t, n) {
  let r = rK(t),
    i = e.layout.absoluteX + r,
    a = i + t.width,
    s = 0;
  return n >= i && (s = n - i + 1), { x1: i, x2: a, diff: s };
}
function rZ(e) {
  let t = e.layout.absoluteX - 6;
  return { x1: t, x2: t + 12 };
}
function rQ(e) {
  let t = e.layout.absoluteX - 5;
  return { x1: t, x2: t + 10 };
}
function r1(e) {
  let t = e.layout.absoluteX - 5;
  return { x1: t, x2: t + 13 };
}
function r0(e, t) {
  let n = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
    r = e.layout.absoluteX + n,
    i = r + t.width;
  return { x1: r, x2: i };
}
function r2(e, t) {
  let n = t.width,
    r = e.layout.absoluteX - Math.floor(n / 2);
  return { x1: r, x2: r + n };
}
function r5(e, t) {
  return (e.x1 <= t.x1 && t.x1 < e.x2) || (t.x1 <= e.x1 && e.x1 < t.x2);
}
let r4 = ["staccato", "accentuated", "heavyAccentuated"],
  r3 = {
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
  r9 = {
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
    beatLyrics: 14,
    beatTapping: 11,
    tripletFeel: 42,
    beatHat: 10,
    accentuated: 10,
    heavyAccentuated: 12,
    staccato: 10,
  },
  r8 = 22;
class r6 {
  constructor() {
    (this.levels = new Map()), (this.height = 0);
  }
  _getLevel(e) {
    let t = this.levels.get(e);
    return t || ((t = []), this.levels.set(e, t)), t;
  }
  acquireLayer(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      r = r9[e];
    return this.acquireLayerWithHeight(e, r, t, n);
  }
  acquireLayerWithHeight(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      i = r3[e],
      a = {
        effect: e,
        voice: r,
        visible: !0,
        x1: n.x1,
        x2: n.x2,
        height: t,
        y: 0,
        diff: n.diff,
      },
      s = this._getLevel(i);
    if (s.length && r4.includes(a.effect))
      for (let e of s)
        e.x1 === a.x1 &&
          e.x2 === a.x2 &&
          e.effect === a.effect &&
          ((e.voice = 0), (a.visible = !1));
    return s.push(a), a;
  }
  _fitLayer(e, t, n, r) {
    let i = e,
      a = "beatLyrics" === t.effect;
    if (n > 0 && !a)
      for (let e of r) r5(e, t) && (i = Math.max(i, e.y + e.height));
    (t.y = i), (this.height = Math.max(this.height, t.y + t.height)), r.push(t);
  }
  shake() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22,
      t = [];
    this.height = e;
    let n = Array.from(this.levels.keys()).sort((e, t) => e - t);
    for (let r of n) {
      let n = this.levels.get(r) || [];
      for (let i of n) i.visible && this._fitLayer(e, i, r, t);
    }
  }
}
class r7 {
  constructor(e, t) {
    (this.layers = new r6()),
      (this.bottomLayers = new r6()),
      (this.x = 0),
      (this.y = 0),
      (this.maxX = e),
      (this.maxY = 0),
      (this.minX = 0),
      (this.line = t),
      (this.height = 0),
      (this.measureLayouts = []),
      (this.unscaledWidth = 0);
  }
  get intervalSize() {
    return this.placement?.intervalSize || 0;
  }
}
function ie(e) {
  return e.y + e.layers.height;
}
function it(e) {
  return e.height - 2 * rO + 2 * rD;
}
class ir {
  constructor() {
    (this.x = 0),
      (this.originX = 0),
      (this.absoluteX = 0),
      (this.absoluteLoopLeftX = 0),
      (this.absoluteLoopRightX = 0),
      (this.duration = Number.MAX_VALUE),
      (this.beats = []),
      (this.occurrences = []),
      (this.shifts = []),
      (this.usedStrings = 0),
      (this.usedRest = !1);
  }
}
function ii(e) {
  return ie(e.measureLayout.lineLayout);
}
function ia(e) {
  return e.measureLayout.lineLayout.maxX;
}
function is(e) {
  return e.measureLayout.lineLayout.minX;
}
function io(e) {
  return e.occurrences[0];
}
function il(e) {
  return e.occurrences[e.occurrences.length - 1];
}
function ic(e) {
  return e.occurrences[0];
}
function iu(e) {
  return e.occurrences[0] + e.duration;
}
function id(e) {
  return e.occurrences[e.occurrences.length - 1] + e.duration;
}
function ip(e, t) {
  return (
    e.layout.measureLayout.lineLayout !== t.layout.measureLayout.lineLayout
  );
}
function ih(e, t) {
  return e.layout.measureLayout !== t.layout.measureLayout;
}
function im(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (e === t && !n) return 0;
  let r = t.layout.x;
  if (n) {
    let e = t.nextBeat;
    e && ((r = e.layout.x), ih(t, e) && (r += t.layout.measureLayout.width));
  }
  let i = e.layout.measureLayout.x + r - e.layout.absoluteX,
    a = t.layout.measureLayout,
    s = e.layout.measureLayout,
    o = e;
  for (; o && s !== a; ) {
    let e = o.layout.measureLayout;
    s !== e && ((i += s.width), (s = e)), (o = o.nextBeat);
  }
  return i;
}
function ig(e) {
  let t = iS(e).beat,
    n = t.nextBeat ? t.nextBeat : t;
  return ip(iw(e).beat, n);
}
function iy(e) {
  return ip(iw(e).beat, iS(e).beat);
}
class iv {
  constructor(e) {
    (this.refs = [e]), (this.keep = !0), (this.layer = null);
  }
}
function ib(e, t) {
  e.refs.push(t);
}
function iw(e) {
  return e.refs[0];
}
function iS(e) {
  return e.refs[e.refs.length - 1];
}
let ix = { family: "Arial", size: 13, style: "normal" },
  ik = " ",
  iC = 3.6118,
  iE = "ΓÇª",
  iT = 13,
  iP = (e) =>
    function (t, n, r) {
      let i =
          !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        a = t.split(" "),
        s = a[0],
        o = e(s, ix),
        l = 1;
      for (; l < a.length - 1; l++) {
        let t = e(a[l], ix);
        if (o + 3.6118 + t > r) break;
        (s += " " + a[l]), (o += 3.6118 + t);
      }
      let c = i ? "ΓÇª" : "",
        u = i ? 13 : 0;
      s += c;
      let d = c + a.slice(l).join(" ");
      return {
        phrase: { text: s, width: o + u, layer: null },
        rest: { text: d, width: n - o + u, layer: null },
      };
    },
  i_ = new Map();
function iL(e, t, n) {
  let r = i_.get(n.family);
  r || ((r = new Map()), i_.set(n.family, r));
  let i = r.get(n.style);
  i || ((i = new Map()), r.set(n.style, i));
  let a = i.get(n.size);
  a || ((a = new Map()), i.set(n.size, a));
  let s = a.get(t);
  return void 0 !== s || ((s = e(t, n)), a.set(t, s)), s;
}
let iA = (e) =>
  function (t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ix;
    return t && t.length ? iL(e, t, n) : 0;
  };
class iI {
  static textWidth;
  static fitTextToAvailableWidth;
}
let iN = null;
function iM(e, t) {
  let n = !0;
  ("undefined" == typeof document ||
    "function" != typeof document.createElement) &&
    (n = !1),
    (iN = n ? document.createElement("canvas") : null);
  let r = iN && "function" == typeof iN.getContext ? iN.getContext("2d") : null;
  if (!(n = !!r && "function" == typeof r.measureText) || !r) return 0;
  let i = {
      style: "normal",
      constraint: "normal",
      weight: "normal",
      size: ix.size,
      family: ix.family,
      align: "start",
      baseline: "alphabetic",
    },
    a = { ...i, ...t };
  return (
    (r.font = `${a.style} ${a.constraint} ${a.weight} ${a.size}px ${a.family}`),
    (r.textAlign = a.align),
    (r.textBaseline = a.baseline),
    +r.measureText(e).width.toFixed(4)
  );
}
let iB = iA(iM),
  iO = iP(iB);
class iD extends iI {
  static textWidth(e, t) {
    return iB(e, t);
  }
  static fitTextToAvailableWidth(e, t, n, r) {
    return iO(e, t, n, r);
  }
}
let iz = { bpm: 100, type: 4, position: 0 };
function iR(e, t) {
  (e.x = Math.floor(e.originX * t)), (e.width = Math.floor(e.originWidth * t));
  let n = e.beatsLayouts,
    r = e.tempoLayouts,
    i = n[0];
  if (i) {
    for (let n of ((i.absoluteLoopLeftX = e.x), r))
      n.measureOffset = Math.floor(n.originMeasureOffset * t);
    for (let r of n) {
      if (
        ((r.x = Math.floor(
          ((r.measureLayout?.firstBeatXOffset || 0) + r.originX) * t
        )),
        (r.absoluteX = e.x + r.x),
        i !== r)
      ) {
        let e = r.x - i.x,
          t = e < 40 ? 0.5 : 0.8,
          n = Math.floor(e * t);
        (i.absoluteLoopRightX = i.absoluteX + n),
          (r.absoluteLoopLeftX = r.absoluteX - (e - n));
      }
      i = r;
    }
    i.absoluteLoopRightX = e.x + e.width;
  }
}
function i$(e, t) {
  let n = e.layouts[0],
    r = Math.floor((n.width - t.measureOffset) * t.tempo.position),
    i = n.x + t.measureOffset + r,
    a = i + (t.tempo.bpm >= 100 ? 44 : 35);
  return { x1: i, x2: a };
}
function iF(e, t) {
  let n = e.layouts[0].x,
    r = n + t.width;
  return { x1: n, x2: r };
}
function iV(e) {
  let t = e[0].x,
    n = t + e.reduce((e, t) => e + t.width, 0) - 6;
  return { x1: t, x2: n };
}
function iU(e) {
  let t = e.layouts[0].x;
  return { x1: t, x2: t + 90 };
}
function iH(e) {
  return e.layouts[0];
}
function ij(e) {
  return e.layouts[e.layouts.length - 1];
}
let iG = [
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
  iW = {
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
  iq = [
    3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
    5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
    4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
    -0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
  ];
(iq[64] = 1.5), (iq[65] = -1), (iq[66] = 0);
let iX = [
  3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
  2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
  5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
  -0.5, -1, -1, -1, -1.5, 5, 5,
];
(iX[64] = 1.5), (iX[65] = -0.5), (iX[66] = 0), (iX[75] = -0.5), (iX[72] = 0.5);
let iY = {
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
  iK = [
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
function iJ(e) {
  for (let t of iG) {
    let n = 0;
    for (let r of t) e.has(r.key) && n++;
    if (n > 1) for (let n of t) e.set(n.key, { ...n.value, fret: n.key });
  }
}
function iZ(e, t) {
  return { string: t, name: iK[e - 27] || "*", fret: e };
}
function iQ(e, t) {
  return (t ? iX[e - 27] : iq[e - 27]) || 0;
}
function i1(e) {
  return (
    !e.bogus &&
    (!e.tie ||
      !!e.tieShow ||
      !!e.bendStart ||
      !!e.slurStart ||
      !!e.ghost ||
      0 === e.beat.index)
  );
}
function i0(e, t, n) {
  if (!i1(e)) return 0;
  if (n && n.usedDrums) {
    let r = n.usedDrums.get(e.fret);
    if (r) {
      let e = r.name || "S",
        n = iY[e] || 0;
      return n + t;
    }
    return t;
  }
  let r = 4;
  return e.dead ? (r = 4) : e.fret >= 10 && (r = 8), e.ghost && (r += 5), r + t;
}
function i2(e, t) {
  let n = t.get(e.fret);
  return (n && n.string) || 0;
}
(iK[64] = "SR"),
  (iK[65] = "hH"),
  (iK[66] = "RE"),
  (iK[72] = "lcb"),
  (iK[75] = "hcb");
let i5 = 5,
  i4 = {
    letRing: i8,
    palmMute: i6,
    harmonic: i7,
    vibrato: ae,
    wideVibrato: ae,
  };
function i3(e, t) {
  return { x1: t - 120, x2: t };
}
function i9(e, t) {
  if (!e.start || !e.stop) throw Error("Wrong line effect state");
  let n = e.start.absoluteX - 20,
    r = e.stop.absoluteX + 10;
  return r - n < t && (r = n + t), { x1: n, x2: r };
}
function i8(e) {
  return i9(e, 40);
}
function i6(e) {
  return i9(e, 29);
}
function i7(e) {
  return i9(e, 38);
}
function ae(e) {
  let { start: t, stop: n } = e;
  if (!t || !n) throw Error("Wrong line effect state");
  let r = null,
    i = n.measureLayout,
    a = i.beatsLayouts,
    s = a.findIndex((e) => e === n);
  if (s > -1 && s < a.length - 1) r = a[s + 1];
  else {
    let e = i.lineLayout.measureLayouts,
      t = e.findIndex((e) => e === i);
    t > -1 && t < e.length - 1 && (r = e[t + 1].beatsLayouts[0]);
  }
  let o = t.absoluteX,
    l = r ? r.absoluteX : ia(n);
  return { x1: o, x2: l };
}
function at(e) {
  let t = iw(e).note.bend;
  if (!t) throw Error("Wrong state at bend note");
  return -1 * (rW - t.tone / rq);
}
function an() {
  return { detected: !1, start: null, stop: null, value: void 0 };
}
class ar {
  constructor(e, t, n) {
    (this.index = e),
      (this.strings = t.strings),
      (this.effects = []),
      (this.spaces = Array(this.strings)),
      (this.rhythmLines = 0),
      (this.layout = new r7(n, this)),
      (this.hangingText = []),
      (this.capo = 0 === e && t.capo ? { capo: t.capo, layer: null } : void 0),
      (this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() });
  }
  joinLineEffect(e, t, n) {
    let r = e[t];
    r &&
      !n.detected &&
      ((n.detected = !0), (n.value = r), (n.start = e.layout)),
      r && r === n.value && (n.stop = e.layout),
      r
        ? n.value &&
          r !== n.value &&
          (this.finishLineEffect(t, n), this.joinLineEffect(e, t, n))
        : this.finishLineEffect(t, n);
  }
  finishLineEffect(e, t) {
    if (t.detected) {
      let n = this.layout.layers.acquireLayer(e, i4[e](t));
      this.effects.push({ effect: e, layer: n, effectValue: t.value }),
        (t.detected = !1),
        (t.value = void 0),
        (t.start = null),
        (t.stop = null);
    }
  }
  getHangingTextPosition(e) {
    let t = this.layout.minX,
      n = t + e.width;
    return { x1: t, x2: n };
  }
  distribute(e, t, n, r) {
    let i = [];
    this.layout.placement = r;
    let a = e.usedDrums,
      s = n(this);
    for (let e of this.hangingText)
      e.layer = this.layout.layers.acquireLayer(
        "lineHangingText",
        this.getHangingTextPosition(e)
      );
    let o = this.capo;
    void 0 !== o &&
      (o.layer = this.layout.layers.acquireLayer(
        "capo",
        i3(o.capo, this.layout.maxX)
      ));
    for (let e = 0; e < this.spaces.length; e++) this.spaces[e] = [];
    let l = an(),
      c = an(),
      u = an(),
      d = an(),
      p = an(),
      h = new Map();
    for (let n of this.layout.measureLayouts) {
      let r = n.measure;
      iR(n, s);
      let o = iH(r) === n;
      if (
        ((this.rhythmLines = Math.max(this.rhythmLines, r.rhythmLines)),
        r.alternateEnding)
      ) {
        let e = h.get(r);
        e || ((e = []), h.set(r, e)), e.push(n);
      }
      if (o) {
        let e = r.markerWithLayer;
        e &&
          (e.layer = this.layout.layers.acquireLayer(
            "measureMarker",
            iF(r, e)
          ));
        let t = r.tripletFeelWithLayer;
        t && (t.layer = this.layout.layers.acquireLayer("tripletFeel", iU(r)));
      }
      let m = 0;
      for (let r of n.beatsLayouts)
        for (let n of r.beats)
          if (n.lyrics) {
            for (let e of n.lyrics)
              if (e) {
                let t = rJ(n, e, m);
                (m = t.x2),
                  (e.layer = this.layout.bottomLayers.acquireLayer(
                    "beatLyrics",
                    t
                  ));
              }
          } else {
            let r = n.originalText;
            if (r) {
              let e = this.layout.maxX + 5 - n.layout.absoluteX,
                a = r;
              if (a.width > e) {
                let { phrase: n, rest: r } = iD.fitTextToAvailableWidth(
                  a.text,
                  a.width,
                  e,
                  t.hasHellip()
                );
                (a = n), i.push(r);
              }
              a &&
                ((a.layer = this.layout.layers.acquireLayer(
                  "beatText",
                  r0(n, a)
                )),
                (n.text = a));
            }
            let s = n.chord;
            s &&
              (s.layer = this.layout.layers.acquireLayer(
                "beatChord",
                r2(n, s)
              ));
            let o = n.tappingWithLayer;
            for (let r of (o &&
              (o.layer = this.layout.layers.acquireLayer(
                "beatTapping",
                r0(n, o)
              )),
            0 === n.voice &&
              (this.joinLineEffect(n, "letRing", l),
              this.joinLineEffect(n, "palmMute", c),
              this.joinLineEffect(n, "harmonic", u),
              this.joinLineEffect(n, "vibrato", d),
              this.joinLineEffect(n, "wideVibrato", p)),
            n.tuplet &&
              n.tuplet > 0 &&
              this.rhythmEffects.tuplet.set(n.voice, !0),
            n.tremolo && this.rhythmEffects.tremolo.set(n.voice, !0),
            (n.accentuated = void 0),
            (n.heavyAccentuated = void 0),
            (n.staccato = void 0),
            n.notes)) {
              if (!r.rest) {
                let t = a ? i2(r, a) : r.string;
                if (t % 1 == 0 && t >= 0 && t < e.strings) {
                  let i = i0(r, 4, e);
                  if (i) {
                    let e = n.layout.absoluteX - i,
                      r = i << 1,
                      a = this.spaces[t];
                    if (a) {
                      let t = a.length;
                      if (t) {
                        let s = a[t - 1];
                        s.x + s.w >= e
                          ? ((s.x = Math.min(s.x, e)),
                            (s.w = n.layout.absoluteX + i - s.x))
                          : a.push({ x: e, w: r });
                      } else a.push({ x: e, w: r });
                    }
                  }
                  a &&
                    (59 == r.fret || 93 == r.fret) &&
                    !n.hat &&
                    (n.hat = {
                      type: "ride",
                      layer: this.layout.layers.acquireLayer("beatHat", r1(n)),
                    }),
                    1 !== r.accentuated ||
                      n.accentuated ||
                      (n.accentuated = {
                        layer: this.layout.layers.acquireLayer(
                          "accentuated",
                          rZ(n),
                          n.voice
                        ),
                      }),
                    2 !== r.accentuated ||
                      n.heavyAccentuated ||
                      (n.heavyAccentuated = {
                        layer: this.layout.layers.acquireLayer(
                          "heavyAccentuated",
                          rZ(n),
                          n.voice
                        ),
                      }),
                    r.staccato &&
                      !n.staccato &&
                      (n.staccato = {
                        layer: this.layout.layers.acquireLayer(
                          "staccato",
                          rQ(n),
                          n.voice
                        ),
                      });
                }
              }
              let i = r.bendStart;
              if (i) {
                let e = t.getBendCoordinates(i, r);
                (e.x1 += n.layout.absoluteX),
                  (e.x2 += n.layout.absoluteX),
                  (i.layer = this.layout.layers.acquireLayerWithHeight(
                    "noteBend",
                    at(i),
                    e
                  ));
              }
            }
          }
      for (let e of n.tempoLayouts)
        e.layer = this.layout.layers.acquireLayer("measureTempo", i$(r, e));
    }
    for (let [e, t] of h)
      t[0].alternateEndingWithLayer = {
        layer: this.layout.layers.acquireLayer("measureAlternateEnding", iV(t)),
        alternateEnding: e.alternateEnding,
      };
    this.finishLineEffect("letRing", l),
      this.finishLineEffect("palmMute", c),
      this.finishLineEffect("harmonic", u),
      this.finishLineEffect("vibrato", d),
      this.finishLineEffect("wideVibrato", p),
      this.layout.layers.shake();
    let m = this.rhythmLines * rA,
      g = this.rhythmEffects.tremolo.size * rM,
      f = this.rhythmEffects.tuplet.size * rB,
      y = this.strings * this.layout.intervalSize;
    return (
      this.layout.bottomLayers.shake(y + m + g + f),
      (this.layout.layers.height += rO),
      (this.layout.height =
        this.layout.layers.height + this.layout.bottomLayers.height + rO),
      (this.layout.maxY = this.layout.y + this.layout.height),
      i
    );
  }
}
class ai {
  constructor(e, t) {
    (this.measure = e),
      (this.x = 0),
      (this.width = 0),
      (this.firstBeatXOffset = 0),
      (this.originX = 0),
      (this.originWidth = 0),
      (this.lineLayout = t),
      (this.beatsLayouts = []),
      (this.tempoLayouts = []);
  }
  get signatureOffset() {
    return this.lineLayout.placement?.signatureOffset(this.measure) || 0;
  }
}
class aa {
  constructor(e) {
    (this.startIndex = e.index),
      (this.endIndex = 0),
      (this.alternateEndings = new Map());
  }
}
function as(e, t, n) {
  e.alternateEndings.set(t, n.index);
}
function ao(e, t) {
  return e.alternateEndings.get(t) || 0;
}
function al(e) {
  let t = e.nextNoteOnString;
  return t && !t.tie ? 12 : 0;
}
class ac {
  constructor(e) {
    this.width = e;
  }
  areBeatsInSameSlice(e, t) {
    return ii(e.layout) === ii(t.layout);
  }
  getBendCoordinates(e, t) {
    let n = iw(e).beat,
      r = iS(e),
      i = r.note,
      a = i.nextNoteOnString,
      s = !!a && !!a.bendStart && !!a.tie,
      o = s ? r.beat.nextBeat : r.beat;
    if (!o) throw Error("Broken constraint");
    let l = im(n, t.beat),
      c = im(n, n),
      u = im(n, o, !s),
      d = u - l - al(i);
    return { x1: c - l, x2: d };
  }
  bendsForNote(e) {
    let t = e.bendStart || e.bendPart || e.bendEnd;
    return t ? [t] : [];
  }
  hasHellip() {
    return !0;
  }
}
class au extends ac {
  calcTabSize(e) {
    return e.reduce(
      (e, t) => ({
        width: Math.max(t.width, e.width),
        height: e.height + t.height,
      }),
      { width: 0, height: 0 }
    );
  }
  expectedSliceWidth(e) {
    return this.width;
  }
  finalVerticalSeparatorPosition(e) {
    return null;
  }
  getBendCoordinates(e, t) {
    let n = super.getBendCoordinates(e, t),
      r = n.x1,
      i = n.x2;
    if (ig(e)) {
      let t = iw(e).beat;
      i = ia(t.layout) - t.layout.absoluteX - 12;
    }
    return { x1: r, x2: i };
  }
  getTieSlurPathLength(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = this.areBeatsInSameSlice(e, t);
    return r
      ? t.layout.absoluteX - e.layout.absoluteX
      : n
      ? t.layout.absoluteX
      : ia(e.layout) - e.layout.absoluteX;
  }
  makeScaleStrategy(e) {
    return (t) =>
      t.index === e - 1 ? 1 : t.layout.maxX / t.layout.unscaledWidth;
  }
  normalizeBeatCoordinates(e) {
    for (let t of e) delete t.normalizationData;
  }
  shouldDrawBendOnNote(e, t) {
    return !!t.bendStart && t.bendStart === e;
  }
  stringLineMaxX(e) {
    return e.layout.maxX - 1;
  }
}
let ad = 4,
  ap = 4,
  ah = [4, 4];
function am(e, t) {
  let n = e,
    r = t;
  for (; 0 !== n && 0 !== r; ) n >= r ? (n %= r) : (r %= n);
  return n + r;
}
let ag = 11531520,
  af = (e) => e[0],
  ay = (e) => e[1],
  av = (e) => (11531520 * af(e)) / ay(e),
  ab = (e) => e / 11531520,
  aw = (e) => Math.floor(11531520 * e);
function aS(e, t) {
  return ((4 * t) / ay(e)) * af(e);
}
function ax(e, t) {
  return (aS(ah, t) / ay(e)) * af(e);
}
function ak(e) {
  return 1024 === e;
}
function aC() {
  let e =
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
  if (e) {
    if (e.includes("below")) return "below";
    if (e.includes("above")) return "above";
  }
}
function aE() {
  let e =
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
  if (e) {
    if (e.includes("shift")) return "shift";
    if (e.includes("legato")) return "legato";
    if (e.includes("downwards")) return "downwards";
    if (e.includes("upwards")) return "upwards";
  }
}
!(function (e) {
  (e[(e.V1 = 1)] = "V1"),
    (e[(e.V2 = 2)] = "V2"),
    (e[(e.V4 = 4)] = "V4"),
    (e[(e.MASTER = 2)] = "MASTER"),
    (e[(e.DEV = 777)] = "DEV");
})(q || (q = {})),
  (function (e) {
    (e[(e.TOO_LONG = 228)] = "TOO_LONG"),
      (e[(e.MIDI_FAILED = 229)] = "MIDI_FAILED"),
      (e[(e.NOT_FOUND = 404)] = "NOT_FOUND"),
      (e[(e.UNKNOWN = 500)] = "UNKNOWN");
  })(X || (X = {}));
let aT = [
    {
      displayName: "V1",
      version: q.V1,
      bucket: "audio",
      bucketDomains: ["audio1", "audio2", "audio3"],
      audioHashPropertyName: "audio",
    },
    {
      displayName: "V2",
      version: q.V2,
      versionLegacy: "audioV2",
      bucket: "audio3",
      bucketDomains: ["audio31", "audio32", "audio33"],
      audioHashPropertyName: "audioV2",
      audioErrorPropertyName: "audioV2Error",
      midiHashPropertyName: "audioV2Midi",
    },
    {
      displayName: "V4",
      version: q.V4,
      bucket: "audio4",
      bucketDomains: ["audio4-1", "audio4-2", "audio4-3"],
      audioHashPropertyName: "audioV4",
      audioErrorPropertyName: "audioV4Error",
      midiHashPropertyName: "audioV4Midi",
    },
    {
      displayName: "Dev",
      version: q.DEV,
      versionLegacy: "next",
      bucket: "audio2",
      bucketDomains: ["audio2"],
      audioHashPropertyName: "nextAudio",
      midiHashPropertyName: "nextMidi",
    },
  ],
  aP = new Map();
aT.forEach((e) => aP.set(e.version, e)),
  (function (e) {
    (e.ADMINISTRATE = "administrate"),
      (e.MANAGE_SONGS = "manage.songs"),
      (e.MANAGE_REVISIONS = "manage.revisions"),
      (e.UPLOAD_ALL_FILES = "upload.all.files"),
      (e.USE_ADMIN_TOOLS = "use.admin.tools"),
      (e.USE_TAB_EDITOR = "use.tab.editor"),
      (e.USE_VIDEO_SYNCHRONISATION = "use.video.synchronisation");
  })(Y || (Y = {})),
  (function (e) {
    (e.FREE = "free"),
      (e.PLUS = "plus"),
      (e.BETA = "beta"),
      (e.BASIC = "basic");
  })(K || (K = {})),
  (function (e) {
    (e.NONE = "none"), (e.LIFETIME = "lifetime");
  })(J || (J = {})),
  (function (e) {
    (e.BRAINTREE = "braintree"),
      (e.APP_STORE = "appstore"),
      (e.GOOGLE_PLAY = "googleplay"),
      (e.COUPON = "coupon"),
      (e.MANUAL = "manual"),
      (e.LEGACY_PAYPAL = "paypal");
  })(Z || (Z = {})),
  (function (e) {
    (e.ACTIVE = "active"),
      (e.CANCELED = "canceled"),
      (e.EXPIRED = "expired"),
      (e.OUTDATED = "outdated");
  })(Q || (Q = {}));
let a_ = 25,
  aL = 15,
  aA = 35,
  aI = 20,
  aN = 25,
  aM = 30,
  aB = (e, t) => 1 / ((4 * e) / t);
class aO {
  get distribute() {
    return "fitness";
  }
  get tuningOffset() {
    return 15;
  }
  get intervalSize() {
    return 13;
  }
  signatureOffset(e) {
    let t = 20;
    return (
      (e.signature[0] > 10 || e.signature[1] > 10) && (t = 35),
      e.repeatStart && (t += 5),
      t
    );
  }
  measureSpaceForSignature(e) {
    let t = 0;
    return (
      e.hasSignature &&
        ((t = 20),
        (e.signature[0] > 10 || e.signature[1] > 10) && (t = 35),
        e.repeatStart && (t += 5)),
      t
    );
  }
  measureBeatWidth(e, t, n, r, i, a) {
    let s = n ? aB(n, r) : ab(r),
      o = 70 * Math.log(s + 1) + 20;
    return i ? 0.2 * o : a && !e.measure.repeat ? o - Math.min(o >>> 1, 25) : o;
  }
  measureLeftMargin(e) {
    return e.measure.repeatStart ? 30 : 25;
  }
}
class aD {
  constructor(e = "conservative") {
    this.strategy = e;
  }
  get distribute() {
    return this.strategy;
  }
  get tuningOffset() {
    return 25;
  }
  get intervalSize() {
    return r_;
  }
  signatureOffset(e) {
    return 35;
  }
  measureSpaceForSignature(e) {
    return e.hasSignature ? 35 : 0;
  }
  measureBeatWidth(e, t, n, r, i, a) {
    let s = n ? aB(n, r) : ab(r),
      o = 130 * Math.log(s + 1) + 20;
    return i ? 0.2 * o : o;
  }
  measureLeftMargin(e, t) {
    return 25;
  }
}
function az(e, t) {
  let n = [...e.tempoLayoutsByTime.keys()].sort((e, t) => e - t);
  t.tempoLayouts = n.reduce((t, n) => {
    let r = e.tempoLayoutsByTime.get(n);
    return r && t.push(r), t;
  }, []);
}
function aR(e, t, n, r) {
  let i = t.beatsLayoutsByTime,
    a = new ai(t, n.layout);
  t.layouts = [a];
  let s = r.measureSpaceForSignature(t),
    o = [...i.keys()].sort((e, t) => e - t),
    l = 0,
    c = i.get(0),
    u = t.rest && !t.hasLyrics;
  if (c) {
    (a.firstBeatXOffset = r.measureLeftMargin(a, !0)),
      a.beatsLayouts.push(c),
      (c.measureLayout = a);
    for (let t = 1; t < o.length; t++) {
      let n = o[t],
        d = i.get(n);
      d &&
        ((c.originX = s),
        (s += r.measureBeatWidth(a, d, e, n - l, u, !1)),
        (l = n),
        (c = d),
        a.beatsLayouts.push(d),
        (d.measureLayout = a));
    }
    (c.originX = s),
      (s += r.measureBeatWidth(a, c, e, t.duration - l, u, !0)),
      aF(a, t, a.firstBeatXOffset + s);
  }
  az(t, a);
}
function a$(e, t, n, r) {
  let i = t.beatsLayoutsByTime,
    a = new ai(t, n.layout);
  az(t, a), (t.layouts = [a]);
  let s = !(
      (4 === t.signature[0] && 4 === t.signature[1]) ||
      (6 === t.signature[0] && 8 === t.signature[1])
    ),
    o = e ? ax(t.signature, e) : -1,
    l = r.measureSpaceForSignature(t),
    c = [...i.keys()].sort((e, t) => e - t),
    u = 0,
    d = i.get(0),
    p = t.rest && !t.hasLyrics;
  if (d) {
    (a.firstBeatXOffset = r.measureLeftMargin(a, !0)),
      a.beatsLayouts.push(d),
      (d.measureLayout = a);
    for (let h = 1; h < c.length; h++) {
      let m = c[h],
        g = i.get(m);
      if (g) {
        (d.originX = l),
          (l += r.measureBeatWidth(a, g, e, m - u, p, !1)),
          (u = m),
          (d = g);
        let i = s || m << 1 === o;
        i &&
          g.beats.filter((e) => !e.lyrics).every((e) => e.beamStart) &&
          ((a.originWidth = Math.ceil(a.firstBeatXOffset + l)),
          (a = new ai(t, n.layout)),
          t.layouts.push(a),
          (a.firstBeatXOffset = r.measureLeftMargin(a, !1)),
          (l = 0)),
          a.beatsLayouts.push(g),
          (g.measureLayout = a);
      }
    }
    (d.originX = l),
      (l += r.measureBeatWidth(a, d, e, t.duration - u, p, !0)),
      aF(a, t, a.firstBeatXOffset + l);
  }
}
function aF(e, t, n) {
  let r = t.markerWithLayer ? t.markerWithLayer.width : 0;
  e.originWidth = Math.ceil(Math.max(n, r));
}
function aV(e, t, n) {
  let r = new ar(t.length, e, n);
  return t.push(r), r;
}
function aU(e, t) {
  e.layout.unscaledWidth += t;
}
function aH(e, t) {
  aF(t, e, t.originWidth - t.firstBeatXOffset), (t.firstBeatXOffset = 0);
}
function aj(e, t) {
  e.layout.measureLayouts.push(t),
    (t.lineLayout = e.layout),
    (t.originX = e.layout.unscaledWidth),
    (e.layout.unscaledWidth += t.originWidth);
}
function aG(e, t, n) {
  return t.originWidth + e.layout.unscaledWidth <= n;
}
function aW(e, t, n) {
  let [r, i] = t;
  return (
    2 * Math.max(r.originWidth, i.originWidth) + e.layout.unscaledWidth <= n
  );
}
function aq(e, t, n, r, i, a) {
  a$(e.tpqn, n, i, t);
  let s = !1;
  for (let t of n.layouts)
    !aG(i, t, a) &&
      i.layout.measureLayouts.length > 0 &&
      ((i = aV(e, r, a)), (s = !1)),
      s && aH(n, t),
      aj(i, t),
      (s = !0);
  return i;
}
function aX(e, t, n) {
  let r = t.width,
    i = [],
    a = aV(e, i, r),
    s = !!e.tuning;
  if ((s && aU(a, n.tuningOffset), "conservative" === n.distribute))
    for (let t in e.measures) {
      let s = e.measures[t],
        o = e.measures[Number(t) - 1];
      aR(e.tpqn, s, a, n);
      let l = s.layouts[0],
        c = o?.layouts[0],
        u = "0" != t && ("-" === s.equality || o?.equality === "+"),
        d = "+" === s.equality,
        p = !d || !c || aW(a, [c, l], r);
      if (
        (aG(a, l, r) && p && !u
          ? aj(a, l)
          : ((a.layout.measureLayouts.length > 0 || u) && (a = aV(e, i, r)),
            aG(a, l, r) ? aj(a, l) : (a = aq(e, n, s, i, a, r))),
        "+" === s.equality && p && c)
      ) {
        let e = Math.max(c.originWidth, l.originWidth);
        (c.originWidth = e),
          (l.originWidth = e),
          (l.originX = e),
          (a.layout.unscaledWidth = 2 * e);
      }
    }
  else if ("fitness" === n.distribute)
    for (let t of e.measures) {
      aR(e.tpqn, t, a, n);
      let s = t.layouts[0];
      aG(a, s, r) ? aj(a, s) : (a = aq(e, n, t, i, a, r));
    }
  else
    for (let t of e.measures) {
      aR(e.tpqn, t, a, n);
      let s = t.layouts[0];
      aG(a, s, r) || (a.layout.measureLayouts.length > 0 && (a = aV(e, i, r))),
        aj(a, s);
    }
  let o = [],
    l = 0,
    c = i.length,
    u = t.makeScaleStrategy(c);
  for (a of i)
    (a.hangingText = o),
      (a.layout.y = l),
      (o = a.distribute(e, t, u, n)),
      (l += a.layout.height);
  return { lines: i, height: l };
}
class aY {
  constructor(e) {
    (this.source = e),
      (this.tempo = {
        bpm: e.bpm,
        type: e.type,
        position: e.position || 0,
        linear: e.linear || !1,
        visible: e.visible || !1,
      }),
      (this.measureOffset = 0),
      (this.originMeasureOffset = 0),
      (this.layer = void 0);
  }
}
let aK = 1e5;
function aJ(e) {
  let t = [],
    n = null,
    r = 0,
    i = !1,
    a = 0;
  for (let s = 0; s < e.length; ) {
    if (++a > 1e5) throw Error("Watchdog");
    let o = e[s];
    if (
      (t.push(o),
      o.reprise &&
        o.reprise.startIndex === o.index &&
        (!n || n.startIndex !== o.index) &&
        ((n = o.reprise), (r = 1)),
      n)
    ) {
      if (o.repeat && r < o.repeat) (s = n.startIndex), r++, (i = !1);
      else if (++s < e.length) {
        let t = e[s];
        if (t.alternateEnding) {
          let e = !1;
          for (let n of t.alternateEnding)
            if (n === r) {
              e = !0;
              break;
            }
          e
            ? (i = !0)
            : i
            ? ((s = n.startIndex), r++, (i = !1))
            : ((s = ao(n, r) || n.endIndex + 1), (i = !0));
        }
        s > n.endIndex && ((n = null), (r = 0));
      }
    } else s++;
  }
  return t;
}
function aZ(e, t, n) {
  return (6e4 * e) / (t * n);
}
let aQ = 960,
  a1 = (e) => (960 * (iz.bpm / iz.type)) / (e.bpm / e.type),
  a0 = (e) => ((e / 960) * 6e4) / iz.bpm,
  a2 = (e, t) => e * t * iz.type;
function a5(e, t) {
  let n = aJ(t),
    r = new Map(),
    i = [],
    a = [],
    s = iz,
    o = 960,
    l = 960,
    c = 0,
    u = 0;
  for (let t of n) {
    let n = t.beatsLayoutsByTime,
      d = t.tempoLayoutsByTime,
      p = e ? aS(t.signature, e) : av(t.signature),
      h = [...n.keys()].sort((e, t) => e - t),
      m = n.get(0),
      g = c,
      f = c,
      y = u;
    if (m) {
      let t = u - 2 * c;
      m.shifts.push(t), i.push(t), m.occurrences.push(c), r.set(c, m);
      let v = d.get(0);
      v &&
        ((s = v.tempo),
        a.push({ timestamp: c, tempo: s }),
        (o = Math.floor(a1(s))),
        (l = Math.floor(2 * a1(s))));
      for (let t = 1; t < h.length; t++) {
        let a = h[t],
          d = n.get(a);
        if (d) {
          if (a < p) {
            if (e) {
              let t = aZ(a, e, s.bpm);
              (c = f + t), (u = y + 2 * t);
            } else {
              let e = ab(a);
              (c = f + a0(a2(e, o))), (u = y + a0(a2(e, l)));
            }
            m.duration = c - g;
            let t = u - 2 * c;
            m.shifts.push(t),
              i.push(t),
              d.occurrences.push(c),
              r.set(c, d),
              (m = d),
              (g = c);
          } else d.occurrences.push(c);
        }
      }
    }
    if (e) {
      let t = aZ(p, e, s.bpm);
      (c = f + t), (u = y + 2 * t);
    } else {
      let e = ab(p);
      (c = f + a0(a2(e, o))), (u = y + a0(a2(e, l)));
    }
    m && (m.duration = c - g);
  }
  return {
    timeline: r,
    tempos: a,
    shifts: i,
    progression: n.map((e) => e.index + 1),
  };
}
function a4(e, t) {
  let n = e.get(t);
  if (!n) throw Error("Broken timeline");
  return n;
}
function a3(e, t) {
  return 2 * e + t;
}
function a9(e, t) {
  if (0 === t) return 0;
  let { timestamps: n } = e,
    r = n[n.length - 1];
  if (t <= 0) return a3(t, e.shifts[0] || 0);
  if (t >= r) return a3(t, e.shifts[n.length - 1] || 0);
  let i = 0,
    a = n.length,
    s = 0,
    o = 0;
  for (; a - i > 1; ) {
    s = Math.floor((i + a) / 2);
    let e = n[s];
    if (t < e) a = s;
    else if (t > e) i = s;
    else {
      o = s;
      break;
    }
  }
  return (o = i), a3(t, e.shifts[o] || 0);
}
function a8(e, t, n) {
  let { timeline: r, timestamps: i } = e,
    a = i[0],
    s = i[i.length - 1];
  if (t <= a) return a4(r, a);
  if (t >= s) return a4(r, s);
  let o = 0,
    l = i.length,
    c = 0;
  for (i[0]; l - o > 1; ) {
    c = Math.floor((o + l) / 2);
    let e = i[c];
    if (t < e) l = c;
    else if (t > e) o = c;
    else break;
  }
  return a4(r, l - o > 1 ? i["left" === n ? c : c - 1] : i[o]);
}
function a6(e, t) {
  let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left",
    { timestamps: r } = e,
    i = r[0],
    a = r[r.length - 1];
  if (t <= i) return 0;
  if (t >= a) return r.length - 1;
  let s = 0,
    o = r.length,
    l = 0;
  for (; o - s > 1; ) {
    l = Math.floor((s + o) / 2);
    let e = r[l];
    if (t < e) o = l;
    else {
      if (!(t > e)) return l;
      s = l;
    }
  }
  return o - s > 1 ? ("left" === n ? l : l - 1) : s;
}
function a7(e, t) {
  if (!e)
    return (
      console.error("Broken or empty Part. Count In does not work."),
      { bpm: 0, signature: [0, 0] }
    );
  let n = a8(e, t, "left"),
    r = st(e, t).bpm,
    i = n.measureLayout.measure.signature;
  return { bpm: r, signature: i };
}
function se(e, t) {
  let n = a8(e, t, "left"),
    r = n.measureLayout.beatsLayouts;
  return { loopStart: ic(r[0]), loopEnd: iu(r[r.length - 1]) };
}
function st(e, t) {
  let n = e.tempos[0];
  for (let r of e.tempos) {
    if (r.timestamp > t) break;
    n = r;
  }
  return n ? n.tempo : iz;
}
function sn(e, t, n, r, i) {
  let a = n.measureLayout.measure.reprise,
    s = r.measureLayout.measure.reprise,
    o = io(n),
    l = io(r),
    c = iu(r);
  a && (!s || a.startIndex !== s.startIndex) && (o = il(n));
  let u = o,
    d = t;
  if (o > t || t >= c) {
    let n = a8(e, t, "left"),
      r = io(n),
      a = il(n);
    d = o <= r && r < c ? r : o <= a && a < c ? a : "right" === i ? l : u;
  }
  return { cursor: d, loopStart: o, loopEnd: c };
}
function sr(e) {
  switch (e) {
    case "left":
      return 0.2;
    case "right":
      return 0.8;
    default:
      return 0.5;
  }
}
function si(e, t, n) {
  let r = e.layout.measureLayouts[0];
  for (let n of e.layout.measureLayouts) {
    if (n.x > t) break;
    r = n;
  }
  let i = r.beatsLayouts,
    a = 0,
    s = i.length,
    o = 0,
    l = i[0];
  for (; s - a > 1; ) {
    l = i[(o = Math.floor((a + s) / 2))];
    let e = l.absoluteX;
    if (e < t) a = o;
    else if (e > t) s = o;
    else break;
  }
  if (s - a > 1) return l;
  {
    if (s === i.length) return i[a];
    let e = i[a],
      r = i[s],
      o = r.absoluteX - e.absoluteX,
      l = sr(n);
    return e.absoluteX + o * l > t ? e : r;
  }
}
function sa(e, t, n) {
  let r = 0,
    i = e.length,
    a = e[0];
  for (; i - r > 1; ) {
    let n = Math.floor((r + i) / 2),
      s = e[n];
    if (t.y < s.layout.y) i = n;
    else if (t.y > s.layout.maxY) r = n;
    else {
      a = s;
      break;
    }
  }
  return si(a, t.x, n);
}
function ss(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  (e.index = t),
    (e.duration = 0),
    (e.scale = e.scale || 1),
    (e.repeat = Math.min(e.repeat || 0, n.useGenericTimeline ? 32 : 10)),
    (e.beatsLayoutsByTime = new Map()),
    (e.rhythmLines = 0),
    (e.tripletFeelWithLayer = e.tripletFeel
      ? { layer: null, feel: e.tripletFeel }
      : void 0),
    (e.markerWithLayer = e.marker
      ? { layer: null, text: e.marker.text, width: e.marker.width }
      : void 0);
}
let so = (e) => (e & (e - 1)) == 0;
function sl(e, t) {
  let n;
  return (n =
    (e & (e - 1)) | (t & (t - 1)) ? (e * t) / am(e, t) : Math.max(e, t)) <= 0 ||
    n >= 32768 ||
    n % 1 != 0
    ? e
    : n;
}
function sc(e) {
  let t = [],
    n = !1,
    r = !1,
    i = !1,
    a = !1;
  for (let s of e)
    for (let e of (s.tripletFeel && (n = !0), s.voices))
      if (!e.rest)
        for (let n of e.beats) {
          let { tuplet: e, duration: s, notes: o } = n;
          if ((e && !t.includes(e) && t.push(e), s && s.length)) {
            let e = ay(s);
            if (!so(e) || e > 32768) continue;
            for (let n of (t.includes(e) || t.push(e), o))
              n.dead && (r = !0),
                (n.bend || n.slide) && (i = !0),
                n.tremolo && (a = !0);
          }
        }
  n && t.push(24, 48),
    r && t.push(128),
    i && t.push(60),
    a && t.push(8, 16, 32, 64);
  let s = t.reduce(sl, Math.max(4 * Math.max(...t), 32)) || 128;
  for (; s < 1e4; ) s *= 2;
  return Math.min(s, 32767);
}
function su(e, t) {
  let n = isNaN(e.tpqn);
  t && n && (e.tpqn = t ? sc(e.measures) : null);
}
function sd(e, t) {
  if (
    (e.repeatStart && ((t.lastReprise = new aa(e)), (t.inReprise = !0)),
    e.alternateEnding)
  ) {
    if (t.lastReprise)
      for (let n of ((e.reprise = t.lastReprise), e.alternateEnding))
        as(t.lastReprise, n, e);
  } else t && t.inReprise && t.lastReprise && (e.reprise = t.lastReprise);
  if (e.repeat) {
    if (!t || !t.lastReprise) throw Error("Broken ending of reprise");
    (t.lastReprise.endIndex = e.index), (t.inReprise = !1);
  }
}
let sp = [4, 4];
function sh(e, t) {
  (e.hasSignature = !!e.signature),
    (e.signature = e.signature || t.signature || sp),
    e.hasSignature && (t.signature = e.signature);
}
function sm(e) {
  return e.hasSignature ? 50 : 15;
}
function sg(e, t, n) {
  t.tempoLayoutsByTime = new Map();
  let r = sm(t);
  for (let i of n.filter((e) => +e.measure == +t.index + 1)) {
    let n = e ? Math.floor(4 * e * i.position) : aw(i.position),
      a = t.tempoLayoutsByTime.get(n);
    a ||
      (((a = new aY(i)).measureOffset = r),
      (a.originMeasureOffset = r),
      t.tempoLayoutsByTime.set(n, a));
  }
}
function sf(e, t) {
  (e.index = t),
    (e.rest = e.rest || !1),
    (e.beats = (!e.rest && e.beats) || []),
    (e.hasSameRhythm = e.hasSameRhythm || !1),
    (e.lyrics = !1);
}
function sy(e, t) {
  let n =
    e.rest ||
    e.hasSameRhythm ||
    (1 === e.beats.length &&
      (1 === e.beats[0].duration[0] || 1 === e.beats[0].duration[1]));
  t.rhythmLines += n ? 0 : 1;
}
function sv(e, t, n, r) {
  (e.index = t),
    (e.measure = r),
    (e.prevBeat = null),
    (e.nextBeat = null),
    e.tuplet || (e.tuplet = 0),
    (e.width = 0),
    (e.voice = n),
    (e.chord = e.chord
      ? {
          layer: null,
          text:
            void 0 !== e.chord.text && void 0 !== e.chord.text.text
              ? e.chord.text.text
              : e.chord.text,
          width: e.chord.width,
        }
      : void 0),
    (e.originalText = e.text
      ? {
          layer: null,
          text:
            void 0 !== e.text.text && void 0 !== e.text.text.text
              ? e.text.text.text
              : e.text.text,
          width: e.text.width,
        }
      : void 0),
    (e.text = void 0),
    (e.tappingWithLayer = e.tapping
      ? { layer: null, text: "T", width: 6, voice: n }
      : void 0);
}
function sb(e) {
  if (!e) return;
  let t = e.points[0],
    n = t.tone,
    r = [{ position: 0, tone: n }];
  for (let t of e.points)
    r[r.length - 1].tone !== t.tone &&
      (r.push({ position: 0, tone: t.tone }), (n = Math.max(n, t.tone)));
  return (
    1 === r.length && r.push({ position: 0, tone: n }),
    r.forEach((e, t) => {
      e.position = (60 * t) / (r.length - 1);
    }),
    { ...e, points: r }
  );
}
function sw(e, t, n, r) {
  (e.index = t),
    (e.beat = n),
    (e.string = e.string || 0),
    (e.fret = e.fret || 0),
    (e.bend = r ? sb(e.bend) : e.bend),
    (e.rightSlide = aE(e.slide)),
    (e.leftSlide = aC(e.slide)),
    (e.bogus = !1);
}
function sS(e, t) {
  if (0 === e.index) {
    for (let n = 0; n < t.length; n++)
      if (!t[n]) {
        let t = e.notes.length,
          r = { string: n, fret: 0 };
        sw(r, t, e, !1), (r.bogus = !0), (e.notes[t] = r);
      }
  }
}
function sx(e, t, n) {
  t.usedDrums && (e.string = iQ(e.fret, n));
}
function sk(e, t) {
  t[e.string] = !0;
}
function sC(e) {
  let t = e.ties;
  return t || ((t = new Map()), (e.ties = t)), t;
}
function sE(e, t, n, r) {
  let i = sC(r),
    a = i.get(e.string);
  if (a) {
    if (e.tie)
      ib(a, { note: e, beat: t, measure: n }),
        (iw(a).note.tieStart = a),
        (e.tieEnd = a),
        i.set(e.string, new iv({ note: e, beat: t, measure: n }));
    else {
      let r = iw(a);
      (r.note = e), (r.beat = t), (r.measure = n);
    }
  } else i.set(e.string, new iv({ note: e, beat: t, measure: n }));
}
function sT(e) {
  let t = e.slides;
  return t || ((t = new Map()), (e.slides = t)), t;
}
function sP(e, t, n, r) {
  let i = sT(r),
    a = "legato" === e.rightSlide || "shift" === e.rightSlide,
    s = i.get(e.string);
  s &&
    !e.tie &&
    (ib(s, { note: e, beat: t, measure: n }),
    (iw(s).note.slideStart = s),
    (iS(s).note.slideEnd = s),
    i.delete(e.string)),
    a && i.set(e.string, new iv({ note: e, beat: t, measure: n }));
}
function s_(e) {
  let t = e.slurs;
  return t || ((t = new Map()), (e.slurs = t)), t;
}
function sL(e, t, n, r) {
  let i = s_(r),
    a = e.hp || "legato" === e.rightSlide,
    s = i.get(e.string);
  !s ||
    a ||
    e.tie ||
    (ib(s, { note: e, beat: t, measure: n }),
    (iw(s).note.slurStart = s),
    (iS(s).note.slurEnd = s),
    i.delete(e.string)),
    !s && a && i.set(e.string, new iv({ note: e, beat: t, measure: n }));
}
function sA(e) {
  let t = e.bends;
  return t || ((t = new Map()), (e.bends = t)), t;
}
function sI(e, t, n, r) {
  let i = sA(r),
    a = i.get(e.string);
  if (
    (!a && e.bend && e.tie && 0 === e.bend.points[0].tone && (e.ghost = !0), a)
  ) {
    !e.bend &&
      e.tie &&
      ((a.keep = !0), ib(a, { note: e, beat: t, measure: n }));
    let r = e.bend || (void 0 !== e.bend && !e.tie);
    if (r) {
      iw(a).note.bendStart = a;
      for (let e = 1; e < a.refs.length - 1; e++) a.refs[e].note.bendPart = a;
      (iS(a).note.bendEnd = a), i.delete(e.string);
    }
  }
  e.bend && i.set(e.string, new iv({ note: e, beat: t, measure: n }));
}
function sN(e) {
  let t = e.prevNoteOnString;
  return t || ((t = new Map()), (e.prevNoteOnString = t)), t;
}
function sM(e, t) {
  let n = sN(t),
    r = e.string,
    i = n.get(r);
  i && ((i.nextNoteOnString = e), (e.prevNoteOnString = i)), n.set(r, e);
}
function sB(e, t, n) {
  let r = sA(n);
  for (let [e, t] of r.entries())
    if (t.keep) t.keep = !1;
    else {
      iw(t).note.bendStart = t;
      for (let e = 1; e < t.refs.length - 1; e++) t.refs[e].note.bendPart = t;
      (iS(t).note.bendEnd = t), r.delete(e);
    }
}
function sO(e) {
  e.layout.usedRest = !0;
}
function sD(e, t) {
  t.rest || (e.layout.usedStrings |= 1 << t.string);
}
function sz(e, t) {
  ak(e.instrumentId) &&
    e.usedDrums &&
    e.usedDrums.set(t.fret, iZ(t.fret, t.string));
}
function sR(e, t, n, r) {
  e.rest || e.bogus ? 0 === r && sO(t) : (sD(t, e), sz(n, e));
}
function s$(e) {
  let t = e.notes.find((e) => e.harmonic);
  e.harmonic = t ? t.harmonic : void 0;
}
function sF(e, t) {
  t.prevBeat && ((t.prevBeat.nextBeat = e), (e.prevBeat = t.prevBeat)),
    (t.prevBeat = e);
}
function sV(e, t) {
  ak(e.instrumentId) &&
    ((e.usedDrums = new Map()),
    t && ((e.strings = t ? 5 : 6), (e.isDrumStdOn = !0))),
    (e.voices = e.voices || 1),
    (e.withChords = !1);
}
function sU(e, t) {
  if (!t.tremolo && e.tremolo) {
    let n = Array.isArray(e.tremolo) ? e.tremolo[1] : null;
    t.tremolo = { voice: t.voice, type: 32 === n ? 3 : 16 === n ? 2 : 1 };
  }
}
function sH(e) {
  e.rest && (e.rhythmLines = 0);
}
function sj(e, t) {
  let n = e[t];
  return n || ((n = {}), (e[t] = n)), n;
}
function sG(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      useStdDrumNotation: r = !1,
      useBendPointsMerge: i = !0,
      useGenericTimeline: a = !1,
      useBogusNotes: s = !0,
    } = n,
    o = e;
  sV(o, r), su(o, a);
  let l = new ar(0, o, 0),
    c = {},
    u = Array(o.voices);
  for (let e = 0; e < o.measures.length; e++) {
    let a = o.measures[e];
    ss(a, e, n),
      (a.layouts = [new ai(a, l.layout)]),
      sh(a, c),
      sg(o.tpqn, a, o.automations.tempo),
      sd(a, c);
    for (let e = 0; e < a.voices.length; e++) {
      let t = a.voices[e];
      if ((sf(t, e), 0 !== e && t.rest)) continue;
      let n = sj(u, e),
        l = 0;
      for (let c = 0; c < t.beats.length; c++) {
        let u = t.beats[c];
        sv(u, c, e, a);
        let d = a.beatsLayoutsByTime.get(l);
        d || ((d = new ir()), a.beatsLayoutsByTime.set(l, d)),
          (l += o.tpqn ? aS(u.duration, o.tpqn) : av(u.duration)),
          (u.layout = d),
          d.beats.unshift(u),
          sF(u, n);
        let p = Array(o.strings);
        for (let e = 0; e < u.notes.length; e++) {
          let t = u.notes[e];
          sw(t, e, u, i), sx(t, o, r), sk(t, p), sU(t, u);
        }
        s && sS(u, p);
        for (let t = 0; t < u.notes.length; t++) {
          let r = u.notes[t];
          sM(r, n),
            sI(r, u, a, n),
            sP(r, u, a, n),
            sL(r, u, a, n),
            sE(r, u, a, n),
            sR(r, u, o, e);
        }
        sB(u, a, n), s$(u), !o.withChords && u.chord && (o.withChords = !0);
      }
      (a.duration = Math.max(a.duration, l)), sy(t, a);
    }
    if ((sH(a), t)) {
      let n = t[e];
      if (n) {
        let e = a.voices.length,
          t = { beats: [], hasSameRhythm: !0 };
        sf(t, e), (t.lyrics = !0);
        let r = 0,
          i = n.beats.length;
        for (let s = 0; s < i; s++) {
          let i = n.beats[s],
            l = a.beatsLayoutsByTime.get(r);
          l || ((l = new ir()), a.beatsLayoutsByTime.set(r, l));
          let c = { ...i };
          sv(c, s, e, a),
            (t.beats[s] = c),
            (c.layout = l),
            l.beats.unshift(c),
            (r += o.tpqn ? aS(c.duration, o.tpqn) : av(c.duration));
        }
        i &&
          ((a.duration = Math.max(a.duration, r)),
          a.voices.unshift(t),
          (a.hasLyrics = !0));
      }
    }
  }
  o.usedDrums && !o.isDrumStdOn && iJ(o.usedDrums);
  try {
    let e = a5(o.tpqn, o.measures);
    (o.timeline = e.timeline),
      (o.tempos = e.tempos),
      (o.shifts = e.shifts),
      (o.progression = e.progression),
      (o.timestamps = [...o.timeline.keys()]);
  } catch (e) {
    return [e, o];
  }
  return [null, o];
}
async function sW(e) {
  let t = tf("/api/video-points"),
    n = await fetch(`${t}?songId=${e}`);
  nQ(n);
  let r = await n.json();
  if (!r) throw Error("No video points found for that song");
  return r;
}
async function sq(e, t, n) {
  let r = tf("/api/video-points"),
    i = await nZ(r, { songId: e, videoId: t, points: n });
  nQ(i);
}
let sX = null;
async function sY() {
  try {
    if (sX && Date.now() - sX.date < 3e5 && Array.isArray(sX.songs))
      return sX.songs;
    let e = tf("/api/video-points/songs"),
      t = await fetch(e);
    nQ(t);
    let n = await t.json();
    return I && (sX = { songs: n, date: Date.now() }), n;
  } catch (e) {
    return console.log(e), [];
  }
}
let sK =
    "(max-width: 479px) and (max-height: 899px) and (orientation: portrait)",
  sJ =
    "(max-height: 479px) and (max-width: 899px) and (orientation: landscape)",
  sZ = "(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)",
  sQ =
    "(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)",
  s1 = "(min-width: 1200px)",
  s0 =
    "(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)",
  s2 = () => window && !!window.matchMedia(sK).matches,
  s5 = () =>
    window &&
    !!window.matchMedia(
      "(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)"
    ).matches,
  s4 = () => {
    if (window) {
      if (
        window.matchMedia(sK).matches ||
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
  };
function s3() {
  try {
    let e = getComputedStyle(document.documentElement),
      t =
        parseInt(e.getPropertyValue("--sal")) +
        parseInt(e.getPropertyValue("--sar"));
    return isNaN(t) ? 0 : t;
  } catch (e) {
    return 0;
  }
}
let s9 = () => {
    let e = s3();
    return window.visualViewport
      ? {
          width: window.visualViewport.width - e,
          height: window.visualViewport.height,
        }
      : document.documentElement
      ? {
          width: document.documentElement.clientWidth - e,
          height: document.documentElement.clientHeight,
        }
      : void 0;
  },
  s8 = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function s6() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
    t = "";
  for (; e-- > 0; )
    t += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[
      (64 * Math.random()) | 0
    ];
  return t;
}
let s7 = 30,
  oe = [112, 123, 116, 119, 121, 112, 113]
    .map((e) => String.fromCharCode(21 ^ e))
    .join("");
var ot = (e) => e[oe];
function on(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function or(e) {
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
let oi = null,
  oa = (e) => {
    function t(e, t, n) {
      let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 550,
        i = e;
      s5() && (i = i - 90 - 100);
      let a = i;
      if (ot(t)) {
        let e = Math.floor(88e3 / t.zoom);
        return [e, a / e];
      }
      let s = n ? r : 750;
      return a < s ? [s, a / s] : [a, 1];
    }
    function n(n, r, i, a, s, o, l, c, u, d) {
      try {
        let c = s2(),
          u = 550;
        c && (u = 320);
        let p = t(l, o, c, u),
          [h, m] = p,
          g = n.part.lines,
          f = `${r}-${i}-${a}-${s.source}`;
        if (g.lines && g.hash === f && g.width === h && g.scale === m) return;
        let y = g.lines,
          v = g.height,
          b = g.slicingMode;
        if (g.hash !== f || g.width !== h) {
          b = new au(h - s7);
          let e = c ? new aO() : new aD(),
            t = aX(s, b, e);
          (y = t.lines), (v = t.height);
        }
        let w = {
          lines: y,
          height: v,
          width: h,
          scale: m,
          print: ot(o),
          slicingMode: b,
          hash: f,
        };
        if (d && d.aborted) return;
        e.dispatch("part/load:done", {
          songId: r,
          partId: i,
          revisionId: a,
          current: s,
          lines: w,
        });
      } catch (t) {
        if (d && d.aborted) return;
        e.dispatch("part/load:error", {
          songId: r,
          partId: i,
          revisionId: a,
          error: t,
        });
      }
    }
    e.on("meta/load:done", async (t, n) => {
      let { partId: r, current: i } = n;
      if (!rv(i, t.device.country)) return;
      let a = i.songId,
        s = i.revisionId,
        o = new t$();
      try {
        let n = t.part.loading;
        if (n) {
          if (a === n.songId && r === n.partId && s === n.revisionId) return;
          n.ac.abort();
        }
        if (
          !t.part.isFailed &&
          t.part.current &&
          t.part.lines &&
          a === t.part.songId &&
          r === t.part.partId &&
          s === t.part.revisionId
        ) {
          e.dispatch("part/load:done", {
            songId: a,
            partId: r,
            revisionId: s,
            current: t.part.current,
            lines: t.part.lines,
          });
          return;
        }
        await e.dispatch("part/load:processing", {
          songId: a,
          partId: r,
          revisionId: s,
          ac: o,
        });
        let l = [nq(a, s, r, i.image, o.signal)];
        (!i.image || i.lyrics) && l.push(nX(a, s, i.image, o.signal));
        let [c, u] = await Promise.all(l);
        if (!c || o.signal.aborted) return;
        await e.dispatch("fingerings/loadedPart", {
          songId: a,
          partId: r,
          revisionId: s,
          rawPart: c,
        }),
          await e.dispatch("part/load:raw", {
            songId: a,
            partId: r,
            revisionId: s,
            rawPart: c,
            rawLyrics: u,
            signal: o.signal,
          });
      } catch (t) {
        if (o.signal.aborted) return;
        e.dispatch("part/load:error", {
          songId: a,
          partId: r,
          revisionId: s,
          error: t,
        });
      }
    }),
      e.on("meta/load:processing", (e, t) => {
        let { songHasChanged: n } = t;
        if (n)
          return {
            part: {
              ...e.part,
              current: null,
              lines: {
                lines: [],
                height: 0,
                width: 0,
                print: !1,
                scale: 1,
                hash: "",
                slicingMode: new au(0),
              },
            },
          };
      }),
      e.on("meta/load:processing", (e, t) => {
        let { songId: n, partId: r, revisionId: i } = t,
          a = e.part.loading;
        if (
          a &&
          (n !== a.songId || (r && r !== a.partId) || i !== a.revisionId)
        )
          return a.ac.abort(), { part: { ...e.part, loading: null } };
      }),
      e.on("part/load:processing", (e, t) => {
        let { songId: n, partId: r, revisionId: i, ac: a } = t;
        return {
          part: {
            ...e.part,
            loading: { songId: n, partId: r, revisionId: i, ac: a },
          },
        };
      }),
      e.on("part/load:raw", (t, n) => {
        let {
            songId: r,
            partId: i,
            revisionId: a,
            rawPart: s,
            rawLyrics: o,
            signal: l,
          } = n,
          c = t.experiments,
          u = {
            useStdDrumNotation: c.drum_standard_notation?.segment !== "drop",
            useGenericTimeline: t.player.version !== $.V1,
          },
          d = on(s),
          p = on(s),
          [h, m] = sG(s, o, u);
        if (((m.source = "audio"), l.aborted)) return;
        if (h) {
          e.dispatch("part/load:error", {
            songId: r,
            partId: i,
            revisionId: a,
            error: h,
          });
          return;
        }
        let g = () => {
          let e = or(d),
            t = or(p),
            [n, r] = sG(e, t, u);
          if (((r.source = `video-${s6(2)}`), n)) throw n;
          return r;
        };
        (oi = g),
          e.dispatch("part/loadVideoTimeline", {
            songId: r,
            partId: i,
            revisionId: a,
            current: m,
            inflatePartCopy: g,
            signal: l,
          });
      }),
      e.on("part/load:done", (e, t) => {
        let { songId: n, partId: r, revisionId: i, current: a, lines: s } = t;
        return {
          part: {
            ...e.part,
            current: a,
            lines: s,
            songId: n,
            partId: r,
            revisionId: i,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          },
        };
      }),
      e.on("part/load:inflated", (t, r) => {
        let { songId: i, partId: a, revisionId: s, current: o, signal: l } = r,
          c = t.screen.viewport.width;
        c && n(t, i, a, s, o, t.print, c, e.dispatch, t.experiments, l);
      }),
      e.on("screen/resize", (t, r) => {
        let { viewport: i } = r,
          { songId: a, partId: s, revisionId: o, current: l } = t.part;
        l && n(t, a, s, o, l, t.print, i.width, e.dispatch, t.experiments);
      });
    let r = (t) => {
      let { songId: r, partId: i, revisionId: a, current: s } = t.part,
        o = t.screen.viewport.width;
      o && s && n(t, r, i, a, s, t.print, o, e.dispatch, t.experiments);
    };
    function i(e, t) {
      let n = e.map((t) => (t - e[0]) * 1e3),
        r = [],
        i = null;
      for (let [e, n] of t) {
        let t = n.beats[0].measure.index;
        t !== i && ((i = t), r.push(e));
      }
      let a = new Map(),
        s = null,
        o = 0,
        l = 1,
        c = 0;
      for (let [e, i] of t) {
        let t = i.beats[0].measure.index;
        if (
          ((i.occurrences = i.occurrences.filter((t) => t !== e)),
          i.occurrences.push(c),
          (i.occurrences = i.occurrences.sort()),
          t !== s)
        ) {
          if (!n[o + 1]) break;
          (l = (n[o + 1] - n[o]) / (r[o + 1] - r[o])), (s = t), o++;
        }
        (i.duration = i.duration * l), a.set(c, i), (c += i.duration);
      }
      return { videoTimestamps: [...a.keys()], videoTimeline: a };
    }
    e.on("print/enable", r),
      e.on("print/plus", r),
      e.on("print/minus", r),
      e.on("print/disable", r),
      e.on("part/load:done", (e) => {
        try {
          let t = e3(e.meta.current, e.meta.partId, e.meta.revisionId),
            n = new Date();
          n.setTime(n.getTime() + 7776e6),
            (document.cookie = `lastSeenTrack=${t};expires=${n.toUTCString()};path=/`);
        } catch (e) {
          console.error(e);
        }
      }),
      e.on("part/load:error", (e, t) => {
        let { songId: n, partId: r, revisionId: i, error: a } = t;
        return {
          part: {
            ...e.part,
            current: null,
            lines: null,
            songId: n,
            partId: r,
            revisionId: i,
            isFailed: !0,
            isNetworkFailed: a instanceof tx && 0 === a.status,
            isNotFound:
              a instanceof tx && (404 === a.status || 400 === a.status),
            loading: null,
          },
        };
      }),
      e.on("part/load:error", (e, t) => {
        let { error: n } = t;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n);
      }),
      e.on("part/loadVideoTimeline", async (t, n) => {
        let {
          songId: r,
          partId: a,
          revisionId: s,
          current: o,
          inflatePartCopy: l,
          signal: c,
        } = n;
        if (c && c.aborted) return;
        let u = null,
          d = 0,
          p = null;
        e.dispatch("part/loadVideoTimeline:start", r);
        try {
          let e = await sW(r);
          if (e) {
            u = l();
            let t = i(e.points, u.timeline);
            (u.timeline = t.videoTimeline),
              (u.timestamps = t.videoTimestamps),
              (d = e.points[0]),
              (p = e.videoId);
          }
        } catch {
        } finally {
          e.dispatch("part/loadVideoTimeline:done", {
            songId: r,
            partId: a,
            revisionId: s,
            videoId: p,
            videoPart: u,
            videoOffset: d,
            current: o,
            signal: c,
          });
        }
      }),
      e.on("demo/activate", (t, n) => {
        let { meta: r, player: i } = t,
          a = "play-along" === n,
          s = i.videoOpened;
        r.songId === B && a && !s && e.dispatch("part/toggleVideo");
      }),
      e.on("part/loadVideoTimeline:start", (e, t) => {
        let { part: n, player: r, demo: i } = e;
        if (t === n.current?.songId) return;
        let a = i.active && ot(i) && "play-along" === i.requestedFeature;
        return (
          a
            ? r.audio.state.audioFromYT || r.audio.switchAudioSource()
            : r.audio.disableYTAudioAndRestart(),
          {
            part: { ...n, videoId: null, videoOffset: 0 },
            player: { ...r, videoOpened: !!a },
          }
        );
      }),
      e.on("part/loadVideoTimeline:done", (t, n) => {
        let { part: r, player: i } = t,
          {
            songId: a,
            partId: s,
            revisionId: o,
            videoId: l,
            videoPart: c,
            videoOffset: u,
            current: d,
            signal: p,
          } = n;
        if (p && p.aborted) return;
        let h = d;
        return (
          (d = i.videoOpened && c ? c : h),
          setTimeout(
            () =>
              e.dispatch("part/load:inflated", {
                songId: a,
                partId: s,
                revisionId: o,
                current: d,
                signal: p,
              }),
            100
          ),
          {
            part: {
              ...r,
              videoId: l,
              videoOffset: u,
              audioPart: h,
              videoPart: c,
            },
          }
        );
      }),
      e.on("part/toggleVideo", (t) => {
        let r = t.player.videoOpened;
        t.player.video.handleOpenClose(), t.player.audio.switchAudioSource();
        let { songId: i, partId: a, revisionId: s } = t.part,
          o = r ? t.part.audioPart : t.part.videoPart;
        return (
          n(
            t,
            i,
            a,
            s,
            o,
            t.print,
            t.screen.viewport.width,
            e.dispatch,
            t.experiments
          ),
          { player: { ...t.player, videoOpened: !r } }
        );
      }),
      e.on("chords/load:done", (t) => {
        let { player: r, part: i } = t;
        if (i.current?.source === "video") {
          r.audio.disableYTAudio();
          let { songId: a, partId: s, revisionId: o } = i,
            l = i.audioPart;
          n(
            t,
            a,
            s,
            o,
            l,
            t.print,
            t.screen.viewport.width,
            e.dispatch,
            t.experiments
          );
        }
      }),
      e.on("part/initVideoPart", (e) => ({
        part: { ...e.part, videoPart: oi() },
      })),
      e.on("part/applyVideoBarPoints", (t, n) => {
        let { part: r, meta: a } = t,
          { points: s } = n,
          o = oi(),
          l = i(s, o.timeline);
        return (
          (o.timeline = l.videoTimeline),
          (o.timestamps = l.videoTimestamps),
          setTimeout(
            () =>
              e.dispatch("part/load:inflated", {
                songId: a.songId,
                partId: a.partId,
                revisionId: a.revisionId,
                current: o,
                signal: null,
              }),
            100
          ),
          { part: { ...r, videoOffset: s[0], videoPart: o } }
        );
      }),
      e.on("part/changeVideoId", (e, t) => {
        let { part: n } = e;
        return { part: { ...n, videoId: t } };
      }),
      e.on("part/saveVideoPoints", async (e, t) => {
        let { part: n } = e,
          { points: r } = t;
        await sq(n.songId, n.videoId, r);
      });
  },
  os = (e) => {
    e.on("print/enable", (e) => ({
      print: { enabled: !0, zoom: e.print.zoom },
    })),
      e.on("print/plus", (e) => ({
        print: { enabled: ot(e.print), zoom: Math.min(+e.print.zoom + 5, 300) },
      })),
      e.on("print/minus", (e) => ({
        print: { enabled: ot(e.print), zoom: Math.max(+e.print.zoom - 5, 20) },
      })),
      e.on("print/disable", (e) => ({
        print: { enabled: !1, zoom: e.print.zoom },
      })),
      e.on("layer/hide", (t) => {
        "print" === t.layer.layer && ot(t.print) && e.dispatch("print/disable");
      }),
      e.on("route/change", (e) => {
        if (ot(e.print)) return { print: { enabled: !1, zoom: e.print.zoom } };
      });
  },
  oo = async (e, t, n) => {
    let r = await nq(e.songId, e.revisionId, t, e.image, n),
      [i, a] = sG(r);
    return i && console.log(i), a;
  },
  ol = (e, t) =>
    e.songId === t.songId &&
    e.revisionId === t.revisionId &&
    e.image === t.image,
  oc = (e) => {
    e.on("meta/load:done", async (t, n) => {
      let { current: r } = n,
        i = t.parts.loading;
      if (i) {
        if (ol(r, i.meta)) return;
        i.ac.abort();
      }
      if (t.parts.meta && ol(r, t.parts.meta)) return;
      let a = new t$();
      try {
        e.dispatch("parts/load:processing", { meta: r, ac: a });
        let t = await Promise.all(
          r.tracks.map((e) => oo(r, e.partId, a.signal))
        );
        e.dispatch("parts/load:done", { meta: r, current: t });
      } catch (t) {
        if (a.signal.aborted) return;
        e.dispatch("parts/load:error", { meta: r, error: t });
      }
    }),
      e.on("parts/load:processing", (e, t) => ({
        parts: { meta: t.meta, loading: t, list: [] },
      })),
      e.on("parts/load:done", (e, t) => {
        let { current: n } = t;
        return { parts: { ...e.parts, loading: null, list: n } };
      });
  };
async function ou(e, t, n) {
  let r = tf("/api/sound/update"),
    i = await nZ(r, { revisionId: e, version: t });
  (n && n.aborted) || nQ(i);
}
async function od(e, t, n) {
  let r = tf("/api/sound/generate"),
    i = await nZ(r, { revisionId: e, version: t });
  (n && n.aborted) || nQ(i);
}
let op = "undefined" != typeof window && !!window.requestAnimationFrame,
  oh = (e) => (e < 100 ? 50 : 100);
function om(e) {
  try {
    return JSON.parse(window.localStorage.getItem(e));
  } catch (e) {
    return null;
  }
}
function og(e, t) {
  try {
    t
      ? window.localStorage.setItem(e, JSON.stringify(t))
      : window.localStorage.removeItem(e);
  } catch (e) {}
}
var of = { get: om, set: og };
let oy =
  window.performance && window.performance.now
    ? window.performance.now.bind(window.performance)
    : Date.now;
function ov(e, t) {
  let n;
  var r = this;
  return function () {
    for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    let o = () => e.apply(r, a);
    clearTimeout(n), (n = setTimeout(o, t));
  };
}
function ob(e, t) {
  let n = !1;
  return (r) => {
    n ||
      (e(r),
      (n = !0),
      setTimeout(() => {
        n = !1;
      }, t));
  };
}
let ow = ["scroll", "keydown", "click", "mousemove", "mousedown"];
class oS {
  constructor() {
    (this.hasFirstActivity = !1),
      this.reset(),
      this.engage(),
      this.trackFirstActivity();
  }
  engage() {
    for (let e of ow) window.addEventListener(e, this.trackActivity);
  }
  disengage() {
    for (let e of ow) window.removeEventListener(e, this.trackActivity);
  }
  reset() {
    this.setIsActive(!1);
  }
  trackFirstActivity() {
    ow.forEach((e) =>
      window.addEventListener(
        e,
        () => {
          this.hasFirstActivity = !0;
        },
        { once: !0 }
      )
    );
  }
  trackActivity = ob(() => {
    this.lastActivityTimestampMs = oy();
  }, 200);
  setIsActive(e) {
    !this.isActive && e
      ? this.disengage()
      : this.isActive && !e && this.engage(),
      (this.lastActivityTimestampMs = oy()),
      (this.isActive = e);
  }
  getTimeSinceLastActivity() {
    return this.isActive
      ? 0
      : Math.round((oy() - this.lastActivityTimestampMs) / 6e4);
  }
}
let ox = new oS(),
  ok = { solo: "s", focus: "f", mute: "m" },
  oC = "hasUpdatedSoundV4";
function oE(e, t) {
  let n = t.new_sound?.segment === "drop",
    r = t.sound_v4?.segment === "drop";
  return r ? $.V2 : n ? $.V1 : $.V4;
}
async function oT(e) {
  try {
    let t = "hasUpdatedSoundV4",
      n = om(t) || [];
    if (n.includes(e.revisionId)) return;
    let r = e.revisionId;
    og(t, [...n, r]), await ou(e.revisionId, $.V4);
  } catch (e) {
    console.warn("error triggering audio update request (v4)");
  }
}
async function oP(e, t, n, r, i) {
  let a = e.get(),
    s = a.meta.current;
  if (!s) return;
  let { type: o, audio: l, forcedVersion: c } = a.player,
    u = oh(a.player.speed),
    d = !!(l?.context && window && window.Worker),
    p = oE(a.device, a.experiments);
  if ((i || c ? (p = i || c) : tu.has(s, p) || (p = $.MASTER), !tu.has(s, p))) {
    let e = tu.getAll(s);
    p = e[e.length - 1] || $.MASTER;
  }
  let h = tl(p),
    m = s[h.audioHashPropertyName];
  if (l && m && d && op) {
    let i = `${t}/${r}/${m}/${u}/${ok[o]}/${n}.opus`;
    e.dispatch("player/open", { url: i, version: p });
  }
}
let o_ = (e) => {
    e.on("curiosity/vpt10", (e) => {
      if ("bot" === e.device.type || e.isTestMode) return;
      let t = e.meta?.current;
      !(!t || tu.has(t, $.V4)) && (ox.getTimeSinceLastActivity() >= 5 || oT(t));
    }),
      e.on("meta/load:done", (t, n) => {
        let { songId: r, partId: i, current: a } = n;
        if (
          rv(a, t.device.country) &&
          (oP(e, r, i, a.revisionId), "bot" === t.device.type || t.isTestMode)
        )
          return;
      });
  },
  oL = (e) => ({
    user: {
      profile: e,
      permissions: e.permissions,
      [[97, 104, 122, 89, 101, 124, 122]
        .map((e) => String.fromCharCode(9 ^ e))
        .join("")]: e.plan === U.PLUS,
      isLoggedIn: !0,
    },
  }),
  oA = () => ({
    user: {
      profile: null,
      permissions: [],
      [[97, 104, 122, 89, 101, 124, 122]
        .map((e) => String.fromCharCode(9 ^ e))
        .join("")]: !1,
      isLoggedIn: !1,
    },
  });
function oI(e, t) {
  return { ...e.user.profile, subscription: t.subscription, plan: U.PLUS };
}
let oN = (e) => {
    e.on("user/signIn", (e, t) => oL(t)),
      e.on("user/googleSignIn", (e, t) => oL(t.profile)),
      e.on("user/signUp", (e, t) => oL(t)),
      e.on("user/profile", (e, t) => oL(t)),
      e.on("user/recoverPassword", (e, t) => oL(t)),
      e.on("user/subscribePlus", (e, t) => {
        let n = oI(e, t);
        return oL(n);
      }),
      e.on("user/cancelPlus", (e, t) => oL(t)),
      e.on("user/migratePlus", (e, t) => oL(t)),
      e.on("user/signOut", oA),
      e.on("user/deactivate", oA);
  },
  oM = (e) => e.currentTime,
  oB = (e) => ("outputLatency" in e ? e.outputLatency : 0),
  oO = (e) => ("baseLatency" in e ? e.baseLatency : 0),
  oD = (e) => oB(e) + oO(e);
function oz(e, t) {
  let n;
  for (n = t; e > 1; e--) n += t;
  return n;
}
function oR() {
  try {
    let e = document.createElement("div");
    e.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
    let t = e.children.item(0);
    return (
      (t.disableRemotePlayback = !0),
      (t.controls = !1),
      (t.src =
        "data:audio/mpeg;base64,//uQx" +
        oz(23, "A") +
        "WGluZwAAAA8AAAACAAACcQCA" +
        oz(16, "gICA") +
        oz(66, "/") +
        "8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
        oz(320, "A") +
        "//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
        oz(15, "/") +
        "7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
        oz(18, "/") +
        "9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
        oz(97, "V") +
        "Q=="),
      (t.loop = !0),
      t.load(),
      {
        play() {
          try {
            let e = t.play();
            e &&
              e.then(
                () => {
                  "mediaSession" in navigator &&
                    (navigator.mediaSession.playbackState = "playing");
                },
                (e) => console.warn("Hack play failed", e)
              );
          } catch (e) {
            console.error(e);
          }
        },
        pause() {
          try {
            let e = t.pause();
            e &&
              e.then(
                () => {},
                (e) => console.warn("Hack pause failed", e)
              ),
              "mediaSession" in navigator &&
                (navigator.mediaSession.playbackState = "paused");
          } catch (e) {
            console.error(e);
          }
        },
      }
    );
  } catch (e) {
    return console.error(e), null;
  }
}
let o$ = "/static/latest/WebWorker.3acb29e3.js",
  oF = window.performance || {
    offset: Date.now(),
    now: function () {
      return Date.now() - this.offset;
    },
  };
function oV(e) {
  return e / 1e3;
}
function oU(e) {}
function oH(e, t) {
  if (e) throw Error(t);
}
class oj {
  constructor(e, t = !1) {
    this.state = {
      speed: 100,
      pitchShift: 0,
      cursor: 0,
      loopStart: 0,
      loopEnd: 0,
      type: "focus",
      isPlaying: !1,
      isCountIn: !1,
      isMetronome: !1,
      metronomeType: "regular",
      url: "",
      audioFromYT: t,
    };
    try {
      let e = new window.AudioContext({ latencyHint: "interactive" });
      if (!(44100 === e.sampleRate || 48e3 === e.sampleRate)) {
        let t = e.createBufferSource();
        (t.buffer = e.createBuffer(1, 1, 48e3)),
          t.connect(e.destination),
          t.start(0),
          "close" in e && e.close(),
          (e = new window.AudioContext({ latencyHint: "interactive" }));
      }
      (e.onstatechange = () => {
        console.log(
          `Audio context changed state to ${this.context.state}, isPlaying: ${this.state.isPlaying}, sample rate ${this.context.sampleRate}`
        );
      }),
        (this.context = e),
        (this.freezeCheckSampleRate = this.context.sampleRate);
    } catch (e) {
      console.error("error creating audio context", e), (this.context = null);
    }
    window.Worker &&
      ((this.worker = new Worker("/static/latest/WebWorker.3acb29e3.js")),
      (this.worker.onmessage = this.onMessage),
      (this.worker.onerror = e.onError)),
      (this.callback = e),
      (this.buffers = [null, null, null, null, null]),
      (this.sources = [null, null, null, null, null]),
      (this.reuseIndex = 0),
      (this.startedTime = null),
      (this.token = ""),
      (this.countinDuration = 0),
      (this.workerTs = 0),
      (this.workerDelay = 0),
      (this.hack = oR()),
      (this.noSound = !1),
      (this.marginIssueReported = !1),
      (this.workerStarted = !1),
      (this.hasSingleTrack = !1),
      (this.correctTimestampFor50Timeline = (e) => 2 * e);
  }
  get shouldUseWorker() {
    return (
      this.context && this.worker && !this.noSound && !this.state.audioFromYT
    );
  }
  resumeContext() {
    let e = this.context;
    e &&
      "running" !== e.state &&
      "resume" in e &&
      (console.info("Resume context", e.state),
      e.resume().catch(console.error.bind(console)));
  }
  createAudioBuffers(e, t) {
    let n = 1.02 * t;
    for (let r = 0; r < this.buffers.length; r++) {
      let i = this.buffers[r];
      (i && i.numberOfChannels === e && i.sampleRate === t && i.length === n) ||
        (this.buffers[r] = this.context.createBuffer(e, n, t));
    }
  }
  onOpened(e) {
    this.createAudioBuffers(e.channels, e.sampleRate),
      this.callback.onOpened(e);
  }
  onEmpty(e) {
    this.callback.onEmpty(e);
  }
  onLoad(e) {
    this.callback.onLoad(e);
  }
  onLoaded(e) {
    (this.noSound = !1), this.callback.onLoaded(e);
  }
  onError(e) {
    (this.noSound = !0), this.callback.onError(e.error, e.isNetworkError);
  }
  onPacket(e) {
    if (!this.state.isPlaying) return;
    if (this.token !== e.token) {
      process?.env?.NODE_ENV === "development" &&
        console.log(
          `Drop audio packet with token mismatch: expected ${this.token}, actual ${e.token}`
        );
      return;
    }
    let t = this.context;
    if (t.sampleRate !== this.freezeCheckSampleRate) {
      console.warn(
        "SampleRate has changed",
        t.sampleRate,
        this.freezeCheckSampleRate
      ),
        this.callback.onFreeze();
      return;
    }
    this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length;
    let n = this.buffers[this.reuseIndex];
    if (
      (n.copyToChannel
        ? (n.copyToChannel(e.buffer0, 0),
          e.buffer1 && n.copyToChannel(e.buffer1, 1))
        : (n.getChannelData(0).set(e.buffer0),
          e.buffer1 && n.getChannelData(1).set(e.buffer1)),
      !this.gain)
    ) {
      let e = t.createGain();
      (e.gain.value = 1), e.connect(t.destination), (this.gain = e);
    }
    let r = t.createBufferSource();
    (r.buffer = n), r.connect(this.gain), (this.sources[this.reuseIndex] = r);
    let i = 0;
    if (null !== this.startedTime) {
      i = this.startedTime + oV(e.timestampMs);
      let n = i - t.currentTime;
      n < 0.2 &&
        (console.log("Ahead of time schedule margin", n),
        console.info(`Sound generation delay ${this.workerDelay}ms`)),
        !this.marginIssueReported &&
          e.timestampMs > 2e3 &&
          (n < 0 && console.log("Ahead of time schedule margin is negative", n),
          n >= 0 &&
            n < 0.2 &&
            console.log("Ahead of time schedule margin is too small", n),
          (this.marginIssueReported = !0));
    } else
      (i = t.currentTime + 0.05),
        (this.startedContextTime = oM(t) + 0.05),
        (this.startedTime = i),
        (this.workerDelay = Math.floor(oF.now() - this.workerTs)),
        console.info(`Sound generation delay ${this.workerDelay}ms`),
        oH(
          0 !== e.timestampMs,
          `Got initial audio packet with unexpected timestamp ${e.timestampMs}`
        );
    r.start(i, 0, oV(e.durationMs));
  }
  onMessage = (e) => {
    try {
      let t = e.data.message;
      e.data.timestampMs && e.data.timestampMs,
        void 0 != e.data.index && e.data.index,
        void 0 != e.data.url && e.data.url,
        "worker/packet" === t
          ? this.onPacket(e.data)
          : "worker/error" === t
          ? this.onError(e.data)
          : e.data.url === this.state.url &&
            ("worker/load" === t
              ? this.onLoad(e.data)
              : "worker/loaded" === t
              ? this.onLoaded(e.data)
              : "worker/opened" === t
              ? this.onOpened(e.data)
              : "worker/empty" === t && this.onEmpty(e.data));
    } catch (e) {
      console.error(e), this.callback.onError(e);
    }
  };
  play() {
    this.resumeContext(),
      (this.marginIssueReported = !1),
      this.shouldUseWorker
        ? this.worker.postMessage([this.startGenerateSoundPackets()])
        : this.startWithoutSound(),
      (this.state = { ...this.state, isPlaying: !0 }),
      this.markIsPlaying();
  }
  getWorkerPosition() {
    let { cursor: e, loopStart: t, loopEnd: n } = this.state;
    return (
      this.state.speed < 100 &&
        this.correctTimestampFor50Timeline &&
        ((e = this.correctTimestampFor50Timeline(e)),
        (t = this.correctTimestampFor50Timeline(t)),
        (n = this.correctTimestampFor50Timeline(n))),
      { cursor: e, loopStart: t, loopEnd: n }
    );
  }
  pause() {
    return (
      this.turnOffSound(),
      this.state.isPlaying &&
        ((this.state = { ...this.state, isPlaying: !1 }),
        this.workerStarted &&
          ((this.workerStarted = !1),
          this.worker.postMessage([
            { message: "worker/stopGenerate" },
            { message: "worker/seek", position: this.getWorkerPosition() },
          ]))),
      this.markIsPlaying(),
      this.state.cursor
    );
  }
  turnOffSound() {
    if (this.state.isPlaying) {
      let t = this.gain;
      if (t) {
        for (let n of (t.gain.setValueAtTime(1, this.context.currentTime),
        t.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + 0.02),
        (this.gain = null),
        this.sources)) {
          var e;
          n &&
            setTimeout(
              ((e = n),
              () => {
                try {
                  e.stop();
                } catch (e) {}
              }),
              50
            );
        }
        this.sources.fill(null);
      }
      (this.state = { ...this.state, cursor: this.getCursor() }),
        (this.startedTime = null),
        (this.startedContextTime = null),
        this.hack && this.hack.pause();
    }
  }
  seek(e, t, n) {
    this.turnOffSound(),
      (this.state = { ...this.state, cursor: e, loopStart: t, loopEnd: n }),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.state.isPlaying && this.startWithoutSound();
  }
  speed(e) {
    return (
      this.turnOffSound(),
      (this.state = { ...this.state, speed: e }),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/setSpeed", speed: e },
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets(),
          ])
        : (this.worker.postMessage([{ message: "worker/setSpeed", speed: e }]),
          this.state.isPlaying && this.startWithoutSound()),
      this.state.cursor
    );
  }
  switchAudioSource() {
    return (
      (this.state = { ...this.state, audioFromYT: !this.state.audioFromYT }),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.state.isPlaying && this.startWithoutSound(),
      this.state.cursor
    );
  }
  disableYTAudioAndRestart() {
    return (
      (this.state = { ...this.state, audioFromYT: !1 }),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.state.isPlaying && this.startWithoutSound(),
      this.state.cursor
    );
  }
  disableYTAudio() {
    return (this.state = { ...this.state, audioFromYT: !1 }), this.state.cursor;
  }
  type(e) {
    this.state = { ...this.state, type: e };
  }
  pitch(e) {
    return (
      this.turnOffSound(),
      (this.state = { ...this.state, pitchShift: e }),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/setPitch", pitchShift: e },
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.state.isPlaying && this.startWithoutSound(),
      this.state.cursor
    );
  }
  startWithoutSound() {
    this.updateCountIn(),
      (this.startedTime = oF.now() / 1e3),
      (this.startedContextTime = this.startedTime);
  }
  updateCountIn() {
    let e = null;
    if (
      ((this.countinDuration = 0),
      this.state.isCountIn && !this.state.audioFromYT)
    ) {
      let t;
      e = this.findBpmAndBeatByTimestamp(this.state.cursor);
      let n = ((60 / e.bpm) * 4) / e.signature[1];
      this.countinDuration =
        Math.floor(((n * e.signature[0] * 100) / this.state.speed) * 48e3) /
        48e3;
      let r = this.generateCountInTimeline(),
        i = this.state.cursor;
      for (let e = 0; e < r.length; e++)
        if (Math.floor(r[e].timestamp) >= Math.floor(i)) {
          t = r[e];
          break;
        }
      let a = t ? ((t.timestamp - i) * (100 / this.state.speed)) / 1e3 : 0;
      (this.countinDuration -= a),
        (e.correctedDurration = this.countinDuration);
    }
    return e;
  }
  updateMetronome() {
    return this.state.isMetronome ? this.generateMetronomeTimeline() : null;
  }
  startGenerateSoundPackets() {
    this.hack && this.hack.play(),
      (this.token = s6()),
      (this.workerTs = oF.now()),
      (this.workerStarted = !0);
    let e = "mute" === this.state.type && this.hasSingleTrack,
      t = this.updateMetronome(),
      n = this.state.metronomeType,
      r = this.updateCountIn();
    return {
      message: "worker/startGenerate",
      token: this.token,
      mute: e,
      countIn: r,
      metronomeTimeline: t,
      metronomeType: n,
    };
  }
  reset(e, t, n, r, i, a) {
    this.turnOffSound();
    let s = this.state.isPlaying;
    (this.state = {
      ...this.state,
      cursor: e.cursor,
      loopStart: e.loopStart,
      loopEnd: e.loopEnd,
      speed: t,
      pitchShift: n,
      isPlaying: !1,
      isCountIn: r,
      isMetronome: i,
      metronomeType: a,
    }),
      (this.token = s6()),
      this.shouldUseWorker &&
        this.worker.postMessage([
          s && { message: "worker/stopGenerate" },
          { message: "worker/reset" },
          { message: "worker/setSpeed", speed: t },
          { message: "worker/setPitch", pitchShift: n },
          { message: "worker/seek", position: this.getWorkerPosition() },
        ]),
      this.markIsPlaying();
  }
  setBuffer(e, t) {
    (this.state.url = t),
      this.worker.postMessage([
        {
          message: "worker/setBuffer",
          buffer0: e.getChannelData(0),
          buffer1: e.numberOfChannels > 1 ? e.getChannelData(1) : null,
          sampleRate: e.sampleRate,
          url: t,
        },
        { message: "worker/seek", position: this.getWorkerPosition() },
        this.state.isPlaying && this.startGenerateSoundPackets(),
      ]);
  }
  open(e, t) {
    (this.state.url = t),
      this.worker.postMessage([
        { message: "worker/open", url: t, version: e },
        { message: "worker/seek", position: this.getWorkerPosition() },
      ]);
  }
  clearBuffer() {
    this.shouldUseWorker &&
      this.worker.postMessage([{ message: "worker/clearBuffer" }]);
  }
  setCountin(e) {
    this.state = { ...this.state, isCountIn: e };
  }
  setMetronome(e, t) {
    this.state = { ...this.state, isMetronome: e, metronomeType: t };
  }
  getCursor() {
    let { state: e } = this;
    if (e.isPlaying && null !== this.startedTime) {
      let t = 1e3 * Math.max(this.passed(), 0),
        n = (t > 0 ? t * (e.speed / 100) : 0) + e.cursor;
      return (
        e.loopEnd &&
          n > e.loopEnd &&
          (n = e.loopStart + ((n - e.loopStart) % (e.loopEnd - e.loopStart))),
        n
      );
    }
    return e.cursor;
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
  markIsPlaying() {
    let e = document.getElementById("root");
    e && (e.dataset.playing = this.isPlaying ? "on" : "off");
  }
  passed() {
    let { context: e, startedTime: t, countinDuration: n } = this;
    return null === t
      ? 0
      : this.shouldUseWorker
      ? oM(e) - this.startedContextTime - n - oD(e)
      : oF.now() / 1e3 - t - n;
  }
  isPositionChanged() {
    return this.state.isPlaying && this.passed() > 0;
  }
}
let oG = 100;
class oW {
  constructor(e) {
    (this.isLoaded = !1), (this.callback = e);
  }
  load(e, t, n, r) {
    (this.player = e),
      (this.cursorOffset = t),
      (this.isLoaded = !0),
      (this.firstTimePlay = !0),
      (this.cursor = this.toSecondsPlusOffset(n.cursor)),
      (this.loopStart = n.loopStart && this.toSecondsPlusOffset(n.loopStart)),
      (this.loopEnd = n.loopEnd && this.toSecondsPlusOffset(n.loopEnd)),
      "setPlaybackRate" in this.player && this.player.setPlaybackRate(r / 100),
      "setPlaybackQuality" in this.player &&
        this.player.setPlaybackQuality("default");
  }
  play() {
    if (this.isLoaded) {
      if ((this.loop(), this.firstTimePlay)) {
        (this.firstTimePlay = !1), this.player.seekTo(this.cursor);
        return;
      }
      this.player.playVideo();
    }
  }
  pause() {
    this.isLoaded && this.player.pauseVideo();
  }
  seek(e, t, n) {
    this.isLoaded &&
      (0 === this.loopEnd && n && this.pause(),
      0 === n && (this.animationPlayId = null),
      (this.cursor = this.toSecondsPlusOffset(e)),
      (this.loopStart = t && this.toSecondsPlusOffset(t)),
      (this.loopEnd = n && this.toSecondsPlusOffset(n)),
      0 !== this.getCurrentTime() && this.player.seekTo(this.cursor));
  }
  speed(e) {
    this.isLoaded && this.player.setPlaybackRate(e / 100);
  }
  loop() {
    if (0 === this.loopEnd) return;
    this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
    let e = () => {
      this.animationPlayId &&
        (this.getCurrentTime() >= this.loopEnd
          ? this.callback.onLoopRepeat()
          : (this.animationPlayId = requestAnimationFrame(e)));
    };
    this.animationPlayId = requestAnimationFrame(e);
  }
  handleOpenClose = () => {
    this.pause(), this.callback.onPause();
  };
  destroy() {
    this.isLoaded &&
      (this._resetToDefault(), this.player.f && this.player.destroy());
  }
  getPlayerState() {
    return this.player.getPlayerState();
  }
  setOffset(e) {
    this.cursorOffset = +e;
  }
  getCurrentTime() {
    return this.player.getCurrentTime();
  }
  toSecondsPlusOffset(e) {
    return e / 1e3 + this.cursorOffset;
  }
  _resetToDefault() {
    (this.isLoaded = !1),
      (this.firstTimePlay = !0),
      (this.cursor = this.toSecondsPlusOffset(0)),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.animationPlayId = null);
  }
}
class oq {
  isLoaded = !1;
  getReady = () => !1;
  handleOpenClose = () => !1;
  seek = () => !1;
  pause = () => !1;
  play = () => !1;
  speed = () => !1;
  destroy = () => !1;
  load = () => !1;
  getCurrentTime = () => 0;
  toSecondsPlusOffset = () => 0;
}
let oX = 12,
  oY = 3,
  oK = 21,
  oJ = 100,
  oZ = 25,
  oQ = 175;
function o1(e) {
  return (Math.round((e / 100) * 12) / 12) * 100;
}
function o0(e, t) {
  let n = Math.round((t.bpm * e) / 12),
    r = Math.round((100 * e) / 12);
  return { tempo: { ...t, bpm: n }, speed: r, position: o8(r) };
}
function o2(e, t) {
  return o0(Math.round((e / 100) * 12), t);
}
function o5(e, t) {
  return { ...t, bpm: Math.round((t.bpm * e) / 100) };
}
function o4(e, t, n, r) {
  let i = Math.round((e / 100) * 12);
  return i >= 21 ? { tempo: t, speed: e, position: n } : o0(i + 1, r);
}
function o3(e, t, n, r) {
  let i = Math.round((e / 100) * 12);
  return i <= 3 ? { tempo: t, speed: e, position: n } : o0(i - 1, r);
}
function o9(e, t, n, r, i) {
  let a = t.bpm + i,
    s = +((100 * a) / r.bpm).toFixed(2),
    o = Math.round(s);
  return o < 25 || o > 175
    ? { tempo: t, speed: e, position: n }
    : { tempo: { ...r, bpm: a }, speed: s, position: o8(s) };
}
function o8(e) {
  let t = o1(e);
  return +(((t - 25) * 100) / 150).toFixed(6);
}
function o6(e) {
  return Math.round((150 * e) / 100 + 25);
}
let o7 = (e) => (e ? (t, n) => aZ(t, e, n.bpm) : (e, t) => eb(e, t)),
  le = (e) => {
    let t = [],
      n = 0,
      r = iz,
      i = o7(e.tpqn);
    for (let a of e.progression) {
      let s = e.measures[a - 1],
        o = ef(s.signature),
        l = s.duration / o;
      r = iH(s).tempoLayouts.length > 0 ? iH(s).tempoLayouts[0].tempo : r;
      for (let e = 0; e < o; e++) {
        let a = {
          accented: 0 === e,
          timestamp: parseFloat(n.toFixed(4)),
          signature: s.signature,
          bpm: r.bpm,
        };
        t.push(a), (n += i(l, r));
      }
    }
    return t;
  },
  lt = (e, t) => {
    let n = [],
      r = 0,
      i = iz,
      a = o7(e.tpqn);
    for (let s of e.progression) {
      let o = e.measures[s - 1],
        l = ef(o.signature),
        c = ey(o.signature),
        u = o.duration,
        d = 8 !== c ? 4 * l : l;
      8 !== c ? (u /= 4 * l) : (u /= l);
      let p = iH(o).tempoLayouts;
      i = p && p.length > 0 ? p[0].tempo : i;
      for (let e = 0; e < d; e++) {
        let s;
        if (8 === c) s = (e % 3) + 1;
        else if ((e + 1) % 2 == 0) {
          if (16 !== t) {
            r += a(u, i);
            continue;
          }
          s = "16th";
        } else if ((e + 1) % 4 == 1) s = Math.ceil((e + 1) / 4);
        else {
          if (4 === t) {
            r += a(u, i);
            continue;
          }
          s = "8th";
        }
        let l = {
          division: 8 === c ? 4 : t,
          beatNum: s,
          timestamp: parseFloat(r.toFixed(4)),
          signature: o.signature,
          bpm: i.bpm,
        };
        n.push(l), (r += a(u, i));
      }
    }
    return n;
  },
  ln = (e) => {
    let t = e.measures.find((e) => {
      let t = ef(e.signature),
        n = ey(e.signature);
      return (4 !== n && 8 !== n && 2 !== n) || ((4 === n || 2 === n) && t > 8);
    });
    return !t;
  };
async function lr(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  e("player/togglePlay", n);
}
async function li(e) {
  if (en(e.get().user)) return import("./playerPlus.340621d1.js");
}
async function la(e) {
  let t = e.get();
  if (ot(t.demo) && t.meta.songId === B)
    return import("./playerDemo.5fcb95ca.js");
}
async function ls(e) {
  try {
    let t = await li(e);
    if (t && t.demo && !t.demo()) return t.plusToggleLoop(e);
    if ((t = await la(e))) return t.demoToggleLoop(e);
  } catch (e) {
    console.error(e);
  }
}
function lo(e) {
  lc(e, 1);
}
function ll(e) {
  lc(e, -1);
}
function lc(e, t) {
  let { player: n, tempo: r } = e.get(),
    i = o5(n.speed, r.tempo),
    a = i.bpm + t,
    s = +((100 * a) / r.tempo.bpm).toFixed(2),
    o = Math.round(s);
  o < 25 || o > 175 || lu(e, s);
}
async function lu(e, t) {
  try {
    let n = await li(e);
    if (n && n.demo && !n.demo()) return n.plusChangeSpeed(e, t);
    if ((n = await la(e))) return n.demoChangeSpeed(e, t);
  } catch (e) {
    console.error(e);
  }
}
async function ld(e, t) {
  try {
    let n = await li(e);
    if (n && n.demo && !n.demo()) return n.plusChangePitch(e, t);
    if ((n = await la(e))) return n.demoChangePitch(e, t);
  } catch (e) {
    console.error(e);
  }
}
function lp(e, t) {
  let n = {
    position: {
      cursor: t.position.cursor,
      loopEnd: t.position.loopEnd,
      loopStart: t.position.loopStart,
    },
    speed: e.speed,
    type: e.type,
    pitchShift: e.pitchShift,
    isCountin: e.isCountin,
    isMetronome: e.isMetronome,
    metronomeType: e.metronomeType,
  };
  og(`player-${e.songId}`, n);
}
function lh(e, t, n, r, i) {
  let a = om(`player-${e}`),
    s = en(n),
    o = {
      cursor: { position: { cursor: 0, loopEnd: 0, loopStart: 0 } },
      player: {
        speed: ly,
        type: lv,
        pitchShift: lw,
        isCountin: t.isCountin,
        isMetronome: t.isMetronome,
        metronomeType: t.metronomeType,
      },
    },
    l = {
      cursor: {
        position: {
          cursor: a?.position?.cursor || 0,
          loopEnd: (s && a?.position?.loopEnd) || 0,
          loopStart: (s && a?.position?.loopStart) || 0,
        },
      },
      player: {
        speed: (s && a?.speed) || ly,
        type: (s && a?.type) || lv,
        pitchShift: (s && a?.pitchShift) || lw,
        isCountin: a?.isCountin || t.isCountin,
        isMetronome: a?.isMetronome || t.isMetronome,
        metronomeType: a?.metronomeType || t.metronomeType,
      },
    };
  if (r.state_persistence?.status === "pending") {
    let e =
      l.cursor.position.cursor != o.cursor.position.cursor ||
      l.cursor.position.loopStart != o.cursor.position.loopStart ||
      l.cursor.position.loopEnd != o.cursor.position.loopEnd ||
      l.player.speed != o.player.speed ||
      l.player.type != o.player.type ||
      l.player.pitchShift != o.player.pitchShift ||
      l.player.isCountin != o.player.isCountin ||
      l.player.isMetronome != o.player.isMetronome ||
      l.player.metronomeType != o.player.metronomeType;
    e && i("experiments/activate", { experimentName: "state_persistence" });
  }
  return r?.state_persistence?.segment === "on" ? l : o;
}
async function lm(e, t) {
  try {
    let n = await li(e);
    if (n && n.demo && !n.demo()) return n.plusChangeType(e, t);
    if ((n = await la(e))) return n.demoChangeType(e, t);
  } catch (e) {
    console.error(e);
  }
}
async function lg(e) {
  try {
    let t = await import("./playerFree.7b707ad2.js");
    return t.plusRestoreDefaults(e);
  } catch (e) {
    console.error(e);
  }
}
async function lf(e) {
  e("player/toggleCountIn");
}
let ly = 100,
  lv = "focus",
  lb = $.MASTER,
  lw = 0,
  lS = (e) => ({
    player: { ...e.player, isAudioFailed: !1, isAudioNetworkFailed: !1 },
  }),
  lx = (e, t) => {
    let n = null != t ? t : !e.player.shouldPlay;
    ox.setIsActive(n);
    let r = { ...e.player, shouldPlay: n },
      i = { ...e.cursor },
      { audio: a, canPlay: s } = e.player;
    return (
      a &&
        (n && a.resumeContext(),
        s && n
          ? a.isPlaying || a.play()
          : a.isPlaying && (a.pause(), (i.position = a.getActualPosition()))),
      { player: r, cursor: i }
    );
  },
  lk = (e) => {
    {
      let i;
      function t() {
        i?.forEach((e) => e());
      }
      function n(t, n) {
        let { songId: r } = n;
        if (!t.player.audio) {
          let n = new oj({
              onError: function (t) {
                let n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = t.message || t;
                console.error("error in audio player initialization: ", r),
                  e.dispatch("player/error", { error: r, isNetworkError: n });
              },
              onFreeze: () => e.dispatch("player/togglePlay", !1),
              onOpened: () => e.dispatch("player/opened"),
              onLoad: () => e.dispatch("player/load"),
              onLoaded: () => e.dispatch("player/loaded"),
              onEmpty: () => e.dispatch("player/empty"),
            }),
            i = !!(null !== n.context && window.Worker),
            a = lh(r, t.player, t.user, t.experiments, e.dispatch);
          return (
            n.reset(
              a.cursor.position,
              a.player.speed,
              a.player.pitchShift,
              a.player.isCountin,
              a.player.isMetronome,
              a.player.metronomeType
            ),
            {
              player: {
                ...t.player,
                audio: n,
                songId: r,
                playbackAvailable: i,
                ...a.player,
              },
              cursor: { ...t.cursor, ...a.cursor },
            }
          );
        }
      }
      function r(t) {
        if (!t.player.video) {
          let n;
          return (
            (n =
              t.experiments.play_along_mobile?.segment === "off"
                ? new oq()
                : new oW({
                    onPause: () => {
                      let t = e.get(),
                        {
                          cursor: n,
                          loopStart: r,
                          loopEnd: i,
                        } = t.cursor.position;
                      e.dispatch("player/togglePlay", !1),
                        e.dispatch("cursor/move", {
                          cursor: n,
                          loopStart: r,
                          loopEnd: i,
                        });
                    },
                    onLoopRepeat: () => {
                      let t = e.get(),
                        { loopStart: n, loopEnd: r } = t.cursor.position;
                      e.dispatch("cursor/move", {
                        cursor: n,
                        loopStart: n,
                        loopEnd: r,
                      });
                    },
                  })),
            { player: { ...t.player, video: n } }
          );
        }
      }
      i = [
        e.on("meta/load:processing", n),
        e.on("meta/load:processing", r),
        e.on("meta/load:processing", t),
        e.on("meta/load:done", n),
        e.on("meta/load:done", r),
        e.on("meta/load:done", t),
      ];
    }
    function i(e, t) {
      let { audio: n, shouldPlay: r } = e.player,
        i = e.player.locks;
      if ((i.includes(t) || i.push(t), e.player.canPlay)) {
        let t = { ...e.player, canPlay: !1 },
          i = { ...e.cursor };
        return (
          r && n.isPlaying && (n.pause(), (i.position = n.getActualPosition())),
          { player: t, cursor: i }
        );
      }
    }
    function a(e, t) {
      let { audio: n, shouldPlay: r, locks: i } = e.player;
      for (let e of (Array.isArray(t) || (t = [t]), t)) {
        let t = i.findIndex((t) => t === e);
        -1 !== t && i.splice(t, 1);
      }
      let a = !i.length;
      if (!e.player.canPlay && a)
        return (
          r && !n.isPlaying && n.play(), { player: { ...e.player, canPlay: a } }
        );
    }
    e.on("meta/load:processing", (t, n) => {
      let { songId: r, songHasChanged: i } = n;
      if (
        (t.player.videoOpened &&
          (e.dispatch("player/stopPlay"), t.player.video.pause()),
        i)
      ) {
        let n = { cursor: 0, loopEnd: 0, loopStart: 0 },
          i = t.player.isCountin,
          a = t.player.isMetronome,
          s = t.player.metronomeType;
        t.player.audio && t.player.audio.reset(n, ly, lw, i, a, s);
        let o = lh(r, t.player, t.user, t.experiments, e.dispatch);
        return (
          t.player.audio &&
            t.player.audio.reset(
              o.cursor.position,
              o.player.speed,
              o.player.pitchShift,
              o.player.isCountin,
              o.player.isMetronome,
              o.player.metronomeType
            ),
          {
            player: {
              ...t.player,
              ...o.player,
              songId: r,
              version: lb,
              shouldPlay: !1,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1,
            },
            cursor: { ...t.cursor, ...o.cursor },
          }
        );
      }
      return t.player.audio?.pause?.(), lS(t);
    }),
      e.on(
        "chords/load:processing",
        (e, t) => (e.player.audio?.pause?.(), lS(e))
      ),
      e.on("meta/load:done", (e, t) => {
        let { current: n } = t;
        e.player.audio &&
          (e.player.audio.hasSingleTrack = !n.tracks || 1 === n.tracks.length);
      }),
      e.on("part/load:inflated", (e, t) => {
        let { player: n } = e,
          { current: r } = t;
        if (n.audio) {
          (n.audio.correctTimestampFor50Timeline = (e) => a9(r, e)),
            (n.audio.findBpmAndBeatByTimestamp = (e) => a7(r, e)),
            (n.audio.generateCountInTimeline = () => le(r)),
            (n.audio.generateMetronomeTimeline = () => lt(r, 4));
          let e = ln(r),
            t = n.metronomeType;
          return (
            "voice" !== n.metronomeType ||
              e ||
              ((t = "regular"), n.audio.setMetronome(n.isMetronome, "regular")),
            { player: { ...n, voiceMetronomeAvailable: e, metronomeType: t } }
          );
        }
      }),
      e.on("player/open", (e, t) => {
        let { url: n, version: r } = t;
        return (
          e.player.audio?.open(r, n),
          {
            player: {
              ...e.player,
              version: r,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1,
            },
          }
        );
      }),
      e.on("meta/load:processing", (e) => i(e, "audio")),
      e.on("player/open", (e) => i(e, "audio")),
      e.on("player/load", (e) => i(e, "audio")),
      e.on("player/empty", (e) => i(e, "audio")),
      e.on("player/loaded", (e) => a(e, "audio")),
      e.on("meta/load:processing", (e) => i(e, "model")),
      e.on("part/load:done", (e) => a(e, "model")),
      e.on("player/load", lS),
      e.on("player/loaded", lS),
      e.on("player/error", (e, t) => {
        let { isNetworkError: n } = t;
        return {
          player: { ...e.player, isAudioFailed: !0, isAudioNetworkFailed: n },
        };
      }),
      e.on("player/error", (e) => a(e, ["playerOpen", "playerLoad"])),
      e.on("cursor/move", (e, t) => {
        let { player: n } = e;
        n.audio?.seek(t.cursor, t.loopStart, t.loopEnd),
          n.video?.seek?.(t.cursor, t.loopStart, t.loopEnd);
      }),
      e.on("player/startPlay", (e) => lx(e, !0)),
      e.on("player/stopPlay", (e) => lx(e, !1)),
      e.on("player/togglePlay", lx),
      e.on("player/changeLoop", (e, t) => {
        if (t) {
          let t = i(e, "loop") || e;
          return {
            cursor: t.cursor,
            player: { ...t.player, isLoopChanging: !0 },
          };
        }
        {
          let t = a(e, "loop") || e;
          return { player: { ...t.player, isLoopChanging: !1 } };
        }
      }),
      e.on("player/changeSpeed", (e, t) => {
        let { speed: n } = t,
          { audio: r, video: i } = e.player;
        r.speed(n), i.speed(n);
        let a = { ...e.player, speed: n };
        return lp(a, e.cursor), { player: a };
      }),
      e.on("player/changePitch", (e, t) => {
        let { audio: n } = e.player;
        n.pitch(t);
        let r = { ...e.player, pitchShift: t };
        return lp(r, e.cursor), { player: r };
      }),
      e.on("player/changeType", (e, t) => {
        let { type: n } = t,
          { audio: r } = e.player;
        r.type(n);
        let i = { ...e.player, type: n };
        return lp(i, e.cursor), { player: i };
      }),
      e.on("player/suspend", i),
      e.on("player/resume", a),
      e.on("player/toggleCountIn", (e) => {
        let t = { ...e.player, isCountin: !e.player.isCountin };
        return t.audio.setCountin(t.isCountin), lp(t, e.cursor), { player: t };
      }),
      e.on("player/toggleMetronome:init", () => {
        e.dispatch("player/suspend", "isMetronome"),
          e.dispatch("player/toggleMetronome"),
          e.dispatch("player/resume", "isMetronome");
      }),
      e.on("player/toggleMetronome", (e) => {
        let t = { ...e.player, isMetronome: !e.player.isMetronome };
        return (
          t.audio.setMetronome(t.isMetronome, t.metronomeType),
          lp(t, e.cursor),
          { player: t }
        );
      }),
      e.on("player/changeMetronome:init", (t, n) => {
        let { player: r } = t;
        n !== r.metronomeType &&
          (e.dispatch("player/suspend", "metronomeType"),
          e.dispatch("player/changeMetronome", n),
          e.dispatch("player/resume", "metronomeType"));
      }),
      e.on("player/changeMetronome", (e, t) => {
        let { player: n, cursor: r } = e;
        return (
          n.audio.setMetronome(n.isMetronome, t),
          lp(n, r),
          { player: { ...n, metronomeType: t } }
        );
      }),
      e.on("user/signOut", () => {
        lg(e);
      }),
      e.on("editor/sound:toggle", (e, t) => {
        let { version: n } = t;
        return { player: { ...e.player, forcedVersion: n } };
      }),
      e.on("route/change", (e, t) => {
        let { route: n } = t;
        return (
          e.route.isPanel && e.player.video?.pause?.(),
          n.isPanel ? i(e, "isPanel") : a(e, "isPanel")
        );
      });
  };
function lC(e) {
  return "android" === e.name.toLowerCase();
}
function lE(e) {
  return "ios" === e.name.toLowerCase();
}
function lT(e) {
  return (
    (!!e.isTablet && "ios" === e.os.name.toLowerCase()) ||
    (e.isDesktop && "Mac OS X" === e.os.name && "ontouchstart" in window)
  );
}
let lP = (e) => {},
  l_ = (e) => ({
    isSmall: "small" === e,
    isMedium: "medium" === e,
    isLarge: "large" === e,
    isWide: "wide" === e,
  }),
  lL = (e) => {
    e.on("screen/resize", (e, t) => {
      let { screen: n, viewport: r } = t;
      return { screen: { ...e.screen, screen: n, viewport: r, ...l_(n) } };
    });
  },
  lA = (e) => {
    e.on("consent/view", (e, t) => {
      let { suite: n, view: r, options: i } = t;
      return { consent: { suite: n, view: r, options: i } };
    });
  };
function lI(e) {
  let t = eo(document.location.search.substring(1));
  e.length ? (t.pattern = e) : delete t.pattern,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${n8(t)}`
    );
}
function lN(e) {
  let t = eo(document.location.search.substring(1));
  e.length && e !== t2 ? (t.inst = lO(e)) : delete t.inst,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${n8(t)}`
    );
}
function lM(e, t, n) {
  let r = n;
  return (
    t.length && t !== t2 && (r = { pattern: n.pattern, inst: lO(t) }),
    `${e}${n8(r)}`
  );
}
function lB(e) {
  switch (e) {
    case "guitar":
      return t5;
    case "drum":
      return t3;
    case "bass":
      return t4;
    default:
      return t2;
  }
}
function lO(e) {
  switch (e) {
    case t5:
      return "guitar";
    case t3:
      return "drum";
    case t4:
      return "bass";
    default:
      return "";
  }
}
function lD(e, t) {
  return n8({
    pattern: e || void 0,
    inst: t && t.instrument !== t2 && t.instrument ? lO(t.instrument) : void 0,
  });
}
function lz(e, t) {
  try {
    let n = document.getElementById(t);
    if (!n) return;
    let r = n.getBoundingClientRect(),
      { marginTop: i, marginBottom: a } = getComputedStyle(n),
      s = r.height + parseInt(i, 10) + parseInt(a, 10);
    if (r.top + s < 0) {
      let t = document.getElementById(e);
      t && "function" == typeof t.scroll && t.scroll(0, s);
    }
  } catch (e) {
    console.error(e);
  }
}
let lR = 1e3,
  l$ = (e) => {
    async function t(t, n) {
      if (n && !t.artist.songs.hasMore) return;
      let r = t.artist.id,
        i = t.artist.pattern,
        a = t.artist.filters,
        s = 0,
        o = null;
      n &&
        t.artist.songs.pattern === t.artist.pattern &&
        nV(t.artist.songs.filters, t.artist.filters) &&
        (s = (o = t.artist.songs.list).length);
      let l = new t$();
      try {
        e.dispatch("artist/load:processing", {
          id: r,
          pattern: i,
          filters: a,
          ac: l,
        });
        let n = await rs(r, i, nz(a), l.signal, 50, s);
        if (l.signal.aborted) return;
        let c = t.experiments.admin_video_list?.segment === "on";
        if (c && td(t.user, V.USE_VIDEO_SYNCHRONISATION)) {
          let e = await sY();
          n = n.map((t) => ({ ...t, hasVideo: e.includes(t.songId) }));
        }
        let u = t.artist.defaultInstrument;
        nB(a) || (n = nF(n, u));
        let d = null;
        if (!t.artist.artists[r]) {
          if (n.length) d = { artistId: n[0].artistId, name: n[0].artist };
          else if (((d = await ra(r, l.signal)), l.signal.aborted)) return;
        }
        let p = (o ? o.length : 0) + n.length,
          h = 50 === n.length && p < 1e3;
        e.dispatch("artist/load:done", {
          id: r,
          songs: o ? [...o, ...n] : n,
          hasMore: h,
          artist: d,
          pattern: i,
          filters: a,
          defaultInstrument: u,
        }),
          I &&
            !o &&
            requestAnimationFrame(() => {
              lz("artist-wrap", "top");
            });
      } catch (t) {
        if (l.signal.aborted) return;
        console.error(t),
          e.dispatch("artist/load:error", {
            id: r,
            error: t,
            pattern: i,
            filters: a,
          });
      }
    }
    let n = (e) => t(e, !1);
    e.on("artist/load:processing", (e, t) => {
      let { id: n, pattern: r, filters: i, ac: a } = t,
        s = e.artist.loading;
      s && s.ac.abort();
      let o = e.artist.songs;
      return (
        o.id !== n &&
          (o = {
            id: n,
            list: [],
            defaultInstrument: 24,
            hasMore: !0,
            pattern: r,
            filters: i,
          }),
        {
          artist: {
            ...e.artist,
            songs: o,
            loading: { id: n, filters: i, pattern: r, ac: a },
          },
        }
      );
    }),
      e.on("artist/load:done", (e, t) => {
        let {
            id: n,
            songs: r,
            hasMore: i,
            artist: a,
            pattern: s,
            filters: o,
            defaultInstrument: l,
          } = t,
          c = e.artist.loading;
        if (!c || c.id !== n || !nV(c.filters, o) || c.pattern !== s) return;
        let u = e.artist.artists;
        return (
          a && (u = { ...u, [a.artistId]: a.name }),
          {
            artist: {
              ...e.artist,
              songs: {
                id: n,
                list: r,
                defaultInstrument: l,
                hasMore: i,
                pattern: s,
                filters: o,
              },
              artists: u,
              loading: null,
            },
          }
        );
      }),
      e.on("artist/load:error", (e, t) => {
        let { id: n, error: r, pattern: i, filters: a } = t,
          s = e.artist.loading;
        if (s && s.id === n && nV(s.filters, a) && s.pattern === i)
          return { artist: { ...e.artist, loading: null } };
      }),
      e.on("meta/load:done", (e, t) => {
        let { current: n } = t;
        return {
          artist: {
            ...e.artist,
            artists: { ...e.artist.artists, [n.artistId]: n.artist },
          },
        };
      }),
      e.on("chords/load:done", (e, t) => {
        let { current: n } = t;
        return {
          artist: {
            ...e.artist,
            artists: { ...e.artist.artists, [n.artistId]: n.artist },
          },
        };
      }),
      e.on("artist/filter", (e, t) => {
        let { id: n, pattern: r, filters: i } = t;
        return { artist: { ...e.artist, pattern: r, filters: i, id: n } };
      }),
      e.on("artist/filter", n),
      e.on("artist/fillAdminData", (e) => {
        let t = e.experiments.admin_video_list?.segment === "on";
        t && td(e.user, V.USE_VIDEO_SYNCHRONISATION) && n(e);
      }),
      e.on("songs/default", (e, t) => {
        let { instrumentId: n } = t,
          r = n$(n),
          i = e.artist.songs.list;
        return (
          nB(e.artist.songs.filters) ||
            e.artist.songs.defaultInstrument === r ||
            (i = nF(e.artist.songs.list, r)),
          {
            artist: {
              ...e.artist,
              songs: { ...e.artist.songs, list: i, defaultInstrument: r },
              defaultInstrument: r,
            },
          }
        );
      }),
      e.on("artist/more", (e) => t(e, !0)),
      e.on("artist/filter/pattern", (e, t) => ({
        artist: { ...e.artist, pattern: t },
      })),
      e.on("artist/filter/pattern", n),
      e.on("artist/filter/difficulty", (e, t) => ({
        artist: {
          ...e.artist,
          filters: { ...e.artist.filters, difficulty: t },
        },
      })),
      e.on("artist/filter/difficulty", n),
      e.on("artist/filter/instrument", (e, t) => ({
        artist: {
          ...e.artist,
          filters: { ...e.artist.filters, instrument: t },
        },
      })),
      e.on("artist/filter/instrument", n),
      e.on("artist/filter/tuning", (e, t) => {
        let { instrument: n, tuning: r } = t;
        return { artist: { ...e.artist, filters: nI(e.artist.filters, n, r) } };
      }),
      e.on("artist/filter/tuning", n),
      e.on("artist/filter/reset", (e) => ({
        artist: { ...e.artist, filters: nf },
      })),
      e.on("artist/filter/reset", n),
      e.on("route/change", (t, n) => {
        let { route: r, query: i } = n;
        if (r?.page === "artist") {
          let n = +r.artistId,
            a = i?.pattern || "",
            s = {
              instrument: i?.inst ? lB(i.inst) : t2,
              tunings: t.artist.filters.tunings,
              difficulty: t.artist.filters.difficulty,
            };
          (t.artist.songs.list.length &&
            t.artist.songs.id === n &&
            t.artist.songs.pattern === a &&
            nV(t.artist.songs.filters, s)) ||
            e.dispatch("artist/filter", { id: n, pattern: a, filters: s });
        }
      });
  };
var lF = c();
let lV = h;
function lU() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  let r = u(lF),
    i = d({});
  return (
    h(
      () =>
        r.on("@changed", (e, n) => {
          t.some((e) => e in n) && i[1]({});
        }),
      []
    ),
    p(() => {
      let e = r.get(),
        n = { dispatch: r.dispatch, store: r };
      for (let r of t) n[r] = e[r];
      return n;
    }, [i[0]])
  );
}
let lH = (e) => ({
    id: +e.id,
    uid: e.uid,
    name: e.name,
    email: e.email,
    plan: e.plan,
    subscription: e.subscription,
    permissions: e.permissions,
    androidLicence: e.sra_license,
  }),
  lj = (e) => ({
    songId: e.id,
    artistId: e.artist.id,
    artist: e.artist.name,
    title: e.title,
    defaultTrack: 0,
    tracks: [],
  }),
  lG = (e) => ({
    revisionId: +e.id,
    songId: +e.song.id,
    artist: e.song.artist.name,
    title: e.song.title,
  }),
  lW = {};
function lq(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(Error("Failed to load " + this.src), e);
    });
}
function lX(e, t) {
  e.onreadystatechange = function () {
    ("complete" === this.readyState || "loaded" === this.readyState) &&
      ((this.onreadystatechange = null), t(null, e));
  };
}
function lY(e, t) {
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("script");
  (r.async = !0), (r.defer = !0), (r.src = e);
  let i = "onload" in r ? lq : lX;
  i(r, t), r.onload || lq(r, t), n.appendChild(r);
}
function lK(e, t) {
  return (
    lW[t] ||
      (lW[t] = new Promise((n, r) => {
        lY(e, (e) => {
          (window[t] = !e), e ? r(e) : n();
        });
      })),
    lW[t]
  );
}
let lJ = ["signin", "signup", "subscribePlus", "updateCard", "help"];
function lZ(e, t) {
  document.body &&
    (e && lJ.includes(t)
      ? (document.body.classList.add("grecaptcha-visible"), lQ())
      : document.body.classList.remove("grecaptcha-visible"));
}
function lQ() {
  return lK(
    `https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`,
    "__LOADED_RECAPTCHA__"
  );
}
async function l1(e) {
  try {
    return (
      window.grecaptcha || (await lQ()),
      await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: e })
    );
  } catch (e) {}
}
async function l0() {
  let e = tf("/auth/billing/settings"),
    t = await nJ(e);
  return await n4(t), t.json();
}
async function l2(e) {
  let t = tf("/auth/coupon"),
    n = await nZ(t, { coupon: e });
  return await n4(n), lH(await n.json());
}
async function l5() {
  let e = tf("/auth/coupon/android"),
    t = await nZ(e);
  return await n4(t), lH(await t.json());
}
async function l4(e, t) {
  let n = tf(`/auth/billing/${e}`),
    r = await l1(e),
    i = await nZ(n, t, { "X-Recaptcha-Token": r });
  return await n0(i, e), await n4(i), lH(await i.json());
}
async function l3() {
  let e = tf("/auth/billing/cancel"),
    t = await nZ(e);
  return await n4(t), lH(await t.json());
}
async function l9(e) {
  let t = tf("/auth/billing/migrate"),
    n = await nZ(t, e);
  return await n4(n), n.json();
}
function l8(e) {
  try {
    return JSON.parse(decodeURIComponent(l6(e)));
  } catch (e) {}
  return null;
}
function l6(e) {
  let t = e + "=",
    n = document.cookie.split(";");
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    for (; " " === r.charAt(0); ) r = r.substring(1, r.length);
    if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
  }
  return null;
}
function l7(e, t, n) {
  let r = new Date();
  r.setTime(r.getTime() + 31536e6),
    (t = encodeURIComponent(t)),
    (document.cookie = `${e}=${t};expires=${r.toUTCString()};path=/${
      n ? ";secure" : ""
    }`);
}
let ce = "sr_plus_migration";
function ct(e) {
  let { user: t, payment: n } = e,
    r = l6(ce);
  if (
    (r && +r > 1) ||
    !en(t) ||
    e.user.profile?.subscription?.type !== "braintree" ||
    "plus" !== t.profile.subscription.plan.id
  )
    return !1;
  let i = !!("USD" === n.plan.currency && 9 > +n.plan.price),
    a = !!("EUR" === n.plan.currency && 9 > +n.plan.price),
    s = ["AUD", "BRL", "CAD", "CLP", "JPY", "MNX", "SEK"].includes(
      n.plan.currency
    );
  return i || a || s;
}
function cn() {
  let { dispatch: e, store: t } = lU(),
    n = t.get();
  m(() => {
    cr(n, e);
  }, []);
}
async function cr(e, t) {
  if (!e.payment.loading && !e.payment.ready)
    try {
      t("payment/setup");
      let [e, n] = await Promise.all([import("./dropin.0ea8b895.js"), l0()]);
      t("payment/setup:done", { module: e, settings: n });
    } catch (e) {
      t("payment/setup:error", e);
    }
}
let ci = (e) => {
    e.on("payment/setup", (e) => ({
      payment: { ...e.payment, loading: !0, ready: !1 },
    })),
      e.on("payment/setup:done", (e, t) => {
        let { module: n, settings: r } = t;
        return {
          payment: {
            ...e.payment,
            loading: !1,
            ready: !0,
            error: null,
            module: n,
            token: r.token,
            plan: r.plan,
          },
        };
      }),
      e.on("payment/setup:error", (e, t) => ({
        payment: { ...e.payment, error: t, loading: !1 },
      })),
      e.on("user/signOut", (e) => ({
        payment: {
          ...e.payment,
          showMigrationPopup: !1,
          loading: !1,
          ready: !1,
          module: null,
          token: null,
          error: null,
        },
      })),
      e.on("user/signIn", (t) => cr(t, e.dispatch)),
      e.on("user/signUp", (t) => cr(t, e.dispatch)),
      e.on("user/googleSignIn", (t) => cr(t, e.dispatch)),
      e.on("payment/popup:show", (e) => ({
        payment: { ...e.payment, showMigrationPopup: !0 },
      })),
      e.on(
        "payment/popup:hide",
        (e) => (
          l7(ce, 2), { payment: { ...e.payment, showMigrationPopup: !1 } }
        )
      );
  },
  ca = {
    cypress: [],
    drum_standard_notation: [],
    new_sound: [],
    sound_v4: [],
    paid_fingerings: !0,
    marked_as_learned_animation: !0,
    state_persistence: !1,
    search_admin: !1,
    download_without_sign_in: !0,
    play_along_mobile: !0,
    learn_faster_app_banner_v2: !0,
    print_scale: !0,
    admin_video_list: !1,
  },
  cs = ["drum_standard_notation", "new_sound"],
  co = (e) => (e & (e - 1)) == 0;
for (let e of Object.keys(ca)) {
  let t = ca[e];
  if (t && Array.isArray(t) && ((R = t.length) & (R - 1)) != 0)
    throw Error("Experiment variations can't be evenly distributed");
}
let cl = "exp";
function cc(e, t) {
  return Object.keys(e).reduce(
    (n, r) => (e[r].status === t && (n[r] = e[r].segment), n),
    {}
  );
}
let cu = (e) => {
  e.on("experiments/activate", (t, n) => {
    let { experimentName: r, payload: i = {}, sendEvent: a = !0 } = n;
    if ("bot" === t.device.type) return;
    let s = l8("exp") || { active: {}, pending: {} };
    if (s.active[r] || !s.pending[r]) return;
    let o = { ...t.experiments },
      l = s.pending[r];
    o[r] = { status: "active", segment: t.isTestMode ? "off" : l };
    let c = { active: cc(o, "active"), pending: cc(o, "pending") };
    return (
      l7("exp", JSON.stringify(c), !0),
      a
        ? e.dispatch("curiosity/enteredExperiment", {
            experiment: r,
            payload: { ...i, Value: o[r].segment },
          })
        : console.log(
            `Experiment ${r} activated with segment ${o[r].segment}. EE skipped.`
          ),
      { experiments: o }
    );
  });
};
async function cd(e, t) {
  try {
    e("favorites/load:processing");
    let n = await ro(t);
    e("favorites/load:done", n);
  } catch (t) {
    console.error("favorites/load:error", t), e("favorites/load:error", t);
  } finally {
    e("meta/setWasFavoriteOnServerRender", void 0);
  }
}
let cp = (e, t) => {
    let n = e.findIndex((e) => e.songId === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  },
  ch = (e, t) => n6([...e, t]),
  cm = (e, t) => {
    for (let n of t) e.every((e) => e.songId != n.songId) && e.push(n);
    return n6(e);
  },
  cg = (e) => {
    e.on("user/signIn", async () => cd(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => cd(e.dispatch, void 0)),
      e.on("favorites/add", async (t, n) => {
        let { songId: r, song: i } = n,
          a = s6();
        try {
          e.dispatch("favorites/add:processing", {
            songId: r,
            song: i,
            actionId: a,
          }),
            await rl(r),
            e.dispatch("favorites/add:done", {
              songId: r,
              song: i,
              actionId: a,
            });
        } catch (t) {
          console.error(t),
            e.dispatch("favorites/add:error", {
              songId: r,
              song: i,
              actionId: a,
            });
        }
      }),
      e.on("favorites/add:processing", (e, t) => {
        let { song: n, actionId: r } = t;
        return {
          favorites: {
            ...e.favorites,
            favorites: ch(e.favorites.favorites, n),
            actionId: r,
            loading: !0,
          },
        };
      }),
      e.on("favorites/add:done", (e, t) => {
        let { actionId: n } = t;
        return e.favorites.actionId === n
          ? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
          : null;
      }),
      e.on("favorites/add:error", (e, t) => {
        let { songId: n, actionId: r } = t;
        return e.favorites.actionId === r
          ? {
              favorites: {
                ...e.favorites,
                favorites: cp(e.favorites.favorites, n),
                actionId: "",
                loading: !1,
              },
            }
          : null;
      }),
      e.on("favorites/delete", async (t, n) => {
        let r = s6(),
          i = t.favorites.favorites.find((e) => e.songId === n);
        if (i)
          try {
            e.dispatch("favorites/delete:processing", {
              songId: n,
              song: i,
              actionId: r,
            }),
              await rc(n),
              e.dispatch("favorites/delete:done", {
                songId: n,
                song: i,
                actionId: r,
              });
          } catch (t) {
            console.error(t),
              e.dispatch("favorites/delete:error", {
                songId: n,
                song: i,
                actionId: r,
              });
          }
      }),
      e.on("favorites/delete:processing", (e, t) => {
        let { songId: n, actionId: r } = t;
        return {
          favorites: {
            ...e.favorites,
            favorites: cp(e.favorites.favorites, n),
            actionId: r,
            loading: !0,
          },
        };
      }),
      e.on("favorites/delete:done", (e, t) => {
        let { actionId: n } = t;
        return e.favorites.actionId === n
          ? { favorites: { ...e.favorites, actionId: "", loading: !1 } }
          : null;
      }),
      e.on("favorites/delete:error", (e, t) => {
        let { song: n, actionId: r } = t;
        return e.favorites.actionId === r
          ? {
              favorites: {
                ...e.favorites,
                favorites: ch(e.favorites.favorites, n),
                actionId: "",
                loading: !1,
              },
            }
          : null;
      }),
      e.on("favorites/load:processing", (e) => ({
        favorites: { ...e.favorites, loading: !0, error: !1 },
      })),
      e.on("favorites/load:done", (e, t) => ({
        favorites: {
          ...e.favorites,
          favorites: cm(t, e.favorites.favorites),
          actionId: "",
          loading: !1,
          error: !1,
        },
      })),
      e.on("favorites/load:error", (e) => ({
        favorites: { ...e.favorites, favorites: [], loading: !1, error: !0 },
      })),
      e.on("favorites/filter", (e, t) => ({
        favorites: { ...e.favorites, pattern: t },
      })),
      e.on("user/signOut", (e) => ({
        favorites: { ...e.favorites, favorites: [], pattern: "", actionId: "" },
      })),
      e.on("favorites/filter/difficulty", (e, t) => ({
        favorites: { ...e.favorites, filters: nL(e.favorites.filters, t) },
      })),
      e.on("favorites/filter/instrument", (e, t) => ({
        favorites: { ...e.favorites, filters: nA(e.favorites.filters, t) },
      })),
      e.on("favorites/filter/tuning", (e, t) => {
        let { instrument: n, tuning: r } = t;
        return {
          favorites: { ...e.favorites, filters: nI(e.favorites.filters, n, r) },
        };
      }),
      e.on("favorites/filter/reset", (e) => ({
        favorites: { ...e.favorites, filters: nf },
      }));
  };
async function cf(e) {
  let t = tf("/api/setlists"),
    n = await fetch(t, { credentials: "include" });
  nQ(n);
  let r = await n.json(),
    i = r.map((e) => ({ name: e.name, id: e.id, songs: re(n6(e.songs)) }));
  return i;
}
async function cy(e) {
  let t = tf("/api/setlist"),
    n = await nZ(t, { name: e });
  return nQ(n), n.json();
}
async function cv(e) {
  let t = tf(`/api/setlist/${e}`),
    n = await fetch(t, { method: "delete", credentials: "include" });
  return nQ(n), n.json();
}
async function cb(e, t) {
  let n = tf(`/api/setlist/song/${e}`),
    r = await nZ(
      n,
      { songId: t },
      {},
      { method: "delete", credentials: "include" }
    );
  return nQ(r), r.json();
}
async function cw(e, t) {
  let n = tf(`/api/setlist/song/${e}`),
    r = await nZ(n, { songId: t });
  return nQ(r), r.json();
}
let cS = (e, t) => {
    let n = e.findIndex((e) => e.id === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  },
  cx = (e, t) => {
    let n = e.findIndex((e) => e.songId === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  };
async function ck(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  try {
    e("setlists/load:processing");
    let n = await cf(t);
    e("setlists/load:done", n);
  } catch (t) {
    console.error(t), e("setlists/load:error", t);
  }
}
async function cC(e, t) {
  try {
    e("setlists/create:processing", { name: t });
    let n = await cy(t);
    e("setlists/create:done", n.id);
  } catch (t) {
    console.error(t), e("setlists/create:error");
  }
}
async function cE(e, t, n) {
  try {
    e("setlists/remove:processing", { id: t, name: n }),
      await cv(t),
      e("setlists/remove:done");
  } catch (t) {
    console.error(t), ck(e);
  }
}
let cT = (e) => {
    e.on("user/signIn", async () => ck(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => ck(e.dispatch, void 0)),
      e.on("user/signOut", (e) => ({
        setlists: { ...e.setlists, setlists: [], activeSetId: void 0 },
      })),
      e.on("setlists/load:processing", (e) => ({
        setlists: { ...e.setlists, loading: !0 },
      })),
      e.on("setlists/load:done", (e, t) => ({
        setlists: { ...e.setlists, setlists: t, loading: !1 },
      })),
      e.on("setlists/load:error", (e) => ({
        setlists: { ...e.setlists, setlists: [], loading: !1 },
      })),
      e.on("setlists/select", (e, t) => ({
        setlists: { ...e.setlists, activeSetId: t, removeSetId: void 0 },
      })),
      e.on("setlists/openCreate", async (t) => {
        let { createSetForm: n, loading: r } = t.setlists;
        !r && n && "" !== n.name.trim() && (await cC(e.dispatch, n.name)),
          e.dispatch("setlists/openCreate:init");
      }),
      e.on("setlists/openCreate:init", (e) => ({
        setlists: { ...e.setlists, createSetForm: { name: "" } },
      })),
      e.on("setlists/cancelEdit", (e) => ({
        setlists: { ...e.setlists, createSetForm: void 0 },
      })),
      e.on("setlists/changeName", (e, t) =>
        e.setlists.createSetForm
          ? {
              setlists: {
                ...e.setlists,
                createSetForm: { ...e.setlists.createSetForm, name: t },
              },
            }
          : null
      ),
      e.on("setlists/confirmCreate", (t) => {
        let { createSetForm: n, loading: r } = t.setlists;
        return (
          !r &&
            n &&
            ("" !== n.name.trim()
              ? cC(e.dispatch, n.name)
              : e.dispatch("setlists/cancelCreate")),
          null
        );
      }),
      e.on("setlists/cancelCreate", (e) => ({
        setlists: { ...e.setlists, createSetForm: void 0 },
      })),
      e.on("setlists/create:processing", (e, t) => {
        let { name: n } = t;
        return e.setlists.createSetForm
          ? {
              setlists: {
                ...e.setlists,
                loading: !0,
                setlists: [
                  { id: "new", name: n, songs: [] },
                  ...e.setlists.setlists,
                ],
                createSetForm: void 0,
              },
            }
          : null;
      }),
      e.on("setlists/create:done", (e, t) => {
        let n = [...e.setlists.setlists],
          r = n.find((e) => "new" === e.id);
        return (
          r && (r.id = t),
          { setlists: { ...e.setlists, setlists: n, loading: !1 } }
        );
      }),
      e.on("setlists/create:error", (e) => ({
        setlists: {
          ...e.setlists,
          setlists: cS(e.setlists.setlists, "new"),
          loading: !1,
        },
      })),
      e.on("setlists/initRemove", (e, t) => {
        let { setlists: n } = e.setlists,
          r = n.find((e) => e.id === t);
        return r ? { setlists: { ...e.setlists, removeSetId: t } } : null;
      }),
      e.on("setlists/confirmRemove", (t, n) => {
        let { removeSetId: r, loading: i, setlists: a } = t.setlists;
        if (!i && r === n) {
          let t = a.find((e) => e.id === n);
          t && cE(e.dispatch, n, t.name);
        }
        return null;
      }),
      e.on("setlists/remove:processing", (e, t) => {
        let { id: n } = t;
        return {
          setlists: {
            ...e.setlists,
            setlists: cS(e.setlists.setlists, n),
            activeSetId: void 0,
            loading: !0,
          },
        };
      }),
      e.on("setlists/remove:done", (e) => ({
        setlists: { ...e.setlists, loading: !1 },
      })),
      e.on("setlists/removeSong", async (t, n) => {
        let { songId: r, setlistId: i } = n,
          { setlists: a, loading: s } = t.setlists,
          o = a.find((e) => e.id === i);
        if (!s && o && o.songs) {
          let t = o.songs.find((e) => e.songId === r);
          if (t)
            try {
              e.dispatch("setlists/removeSong:processing", {
                song: t,
                songId: r,
                setlist: o,
                setlistId: i,
              }),
                await cb(i, r),
                e.dispatch("setlists/removeSong:done");
            } catch (t) {
              console.error(t), ck(e.dispatch);
            }
        }
      }),
      e.on("setlists/removeSong:processing", (e, t) => {
        let { songId: n, setlistId: r } = t,
          { setlists: i } = e.setlists,
          a = i.find((e) => e.id === r);
        return a
          ? ((a.songs = cx(a.songs, n)),
            { setlists: { ...e.setlists, setlists: [...i], loading: !0 } })
          : null;
      }),
      e.on("setlists/removeSong:done", (e) => ({
        setlists: { ...e.setlists, loading: !1 },
      })),
      e.on("setlists/addSong", async (t, n) => {
        let { song: r, setlistId: i } = n,
          { setlists: a, loading: s } = t.setlists,
          o = a.find((e) => e.id === i);
        if (!s && o && !o.songs.find((e) => e.songId === r.songId))
          try {
            e.dispatch("setlists/addSong:processing", {
              song: r,
              setlistId: i,
              setlist: o,
            }),
              await cw(i, r.songId),
              e.dispatch("setlists/addSong:done");
          } catch (t) {
            console.error(t), ck(e.dispatch);
          }
      }),
      e.on("setlists/addSong:processing", (t, n) => {
        let { song: r, setlistId: i } = n,
          { setlists: a, markedIds: s } = t.setlists,
          o = [...a],
          l = o.find((e) => e.id === i);
        if (l) {
          l.songs = [r, ...l.songs];
          let n = [...s];
          return (
            s.includes(i) ||
              (n.push(i),
              setTimeout(() => {
                e.dispatch("setlists/flushMark", i);
              }, 1500)),
            {
              setlists: {
                ...t.setlists,
                setlists: o,
                markedIds: n,
                loading: !0,
              },
            }
          );
        }
        return null;
      }),
      e.on("setlists/addSong:done", (e) => ({
        setlists: { ...e.setlists, loading: !1 },
      })),
      e.on("setlists/flushMark", (e, t) => {
        let { markedIds: n } = e.setlists;
        if (n.includes(t)) {
          let r = n.findIndex((e) => e === t);
          return {
            setlists: {
              ...e.setlists,
              markedIds: n.slice(0, r).concat(n.slice(r + 1)),
            },
          };
        }
        return null;
      }),
      e.on("setlists/panelClick", (t) => {
        let { createSetForm: n } = t.setlists;
        return n && e.dispatch("setlists/confirmCreate"), null;
      });
  },
  cP = (e) => (e.layer.layer ? { layer: { layer: null } } : null),
  c_ = (e) => {
    e.on("layer/show", (e, t) => ({ layer: { layer: t } })),
      e.on("print/disable", cP),
      e.on("route/change", cP),
      e.on("layer/hide", cP);
  };
async function cL(e, t, n) {
  try {
    e("revisions/load:processing", { songId: t });
    let r = await nY(t, n);
    e("revisions/load:done", { songId: t, revisions: r });
  } catch (r) {
    if (n.aborted) return;
    e("revisions/load:error", { songId: t, error: r });
  }
}
let cA = (e) => {
    e.on("meta/load:processing", (e, t) => {
      let { songId: n } = t;
      if (e.revisions.songId && n !== e.revisions.songId)
        return {
          revisions: {
            revisions: null,
            isLoading: !0,
            isError: !1,
            songId: void 0,
          },
        };
    }),
      e.on("revisions/load:processing", (e, t) => {
        let { songId: n } = t;
        if (e.meta.songId === n)
          return {
            revisions: {
              ...e.revisions,
              songId: n,
              revisions: null,
              isLoading: !0,
              isError: !1,
            },
          };
      }),
      e.on("revisions/load:done", (e, t) => {
        let { revisions: n, songId: r } = t;
        if (e.meta.songId === r)
          return {
            revisions: {
              ...e.revisions,
              revisions: n,
              isLoading: !1,
              isError: !1,
            },
          };
      }),
      e.on("revisions/load:error", (e, t) => {
        let { error: n, songId: r } = t;
        if (e.meta.songId === r)
          return {
            revisions: {
              ...e.revisions,
              revisions: null,
              isLoading: !1,
              isError: !0,
            },
          };
      });
  },
  cI = 500,
  cN = 1e4,
  cM = (e) => {
    async function t(t, n) {
      if (n && !t.songs.songs.hasMore) return;
      let r = t.songs.pattern,
        i = t.songs.filters,
        a = 0,
        s = null;
      n &&
        t.songs.songs.pattern === t.songs.pattern &&
        nV(t.songs.songs.filters, t.songs.filters) &&
        (a = (s = t.songs.songs.list).length);
      let o = t.experiments.search_admin?.segment === "on",
        l = 500,
        c = new t$();
      try {
        e.dispatch("songs/load:processing", { pattern: r, filters: i, ac: c });
        let n = await ri(r, nz(i), o, c.signal, 50, a);
        if (c.signal.aborted) return;
        let u = t.experiments.admin_video_list?.segment === "on";
        if (u && td(t.user, V.USE_VIDEO_SYNCHRONISATION)) {
          let e = await sY();
          (n = n.map((t) => ({ ...t, hasVideo: e.includes(t.songId) }))),
            (l = 1e4);
        }
        let d = t.songs.defaultInstrument;
        nB(i) || (n = nF(n, d));
        let p = (s ? s.length : 0) + n.length,
          h = 50 === n.length && p < l;
        e.dispatch("songs/load:done", {
          songs: s ? [...s, ...n] : n,
          hasMore: h,
          defaultInstrument: d,
          pattern: r,
          filters: i,
        }),
          I &&
            !s &&
            requestAnimationFrame(() => {
              lz("search-wrap", "top");
            });
      } catch (t) {
        if (c.signal.aborted) return;
        console.error(t),
          e.dispatch("songs/load:error", { error: t, pattern: r, filters: i });
      }
    }
    let n = (e) => t(e, !1);
    e.on("songs/load:processing", (e, t) => {
      let { pattern: n, filters: r, ac: i } = t,
        a = e.songs.loading;
      return (
        a && e.songs.loading.ac.abort(),
        { songs: { ...e.songs, loading: { filters: r, pattern: n, ac: i } } }
      );
    }),
      e.on("songs/load:done", (e, t) => {
        let {
            songs: n,
            hasMore: r,
            pattern: i,
            filters: a,
            defaultInstrument: s,
          } = t,
          o = e.songs.loading;
        if (o && nV(o.filters, a) && o.pattern === i)
          return {
            songs: {
              ...e.songs,
              songs: {
                list: n,
                defaultInstrument: s,
                hasMore: r,
                pattern: i,
                filters: a,
              },
              loading: null,
            },
          };
      }),
      e.on("songs/load:error", (e, t) => {
        let { error: n, pattern: r, filters: i } = t,
          a = e.songs.loading;
        if (a && nV(a.filters, i) && a.pattern === r)
          return { songs: { ...e.songs, loading: null } };
      }),
      e.on("songs/filter", (e, t) => {
        let { pattern: n, filters: r } = t;
        return { songs: { ...e.songs, pattern: n, filters: r } };
      }),
      e.on("songs/filter", n),
      e.on("songs/fillAdminData", (e) => {
        let t = e.experiments.admin_video_list?.segment === "on";
        t && td(e.user, V.USE_VIDEO_SYNCHRONISATION) && n(e);
      }),
      e.on("songs/default", (e, t) => {
        let { instrumentId: n } = t,
          r = n$(n),
          i = e.songs.songs.list;
        return (
          nB(e.songs.songs.filters) ||
            e.songs.songs.defaultInstrument === r ||
            (i = nF(e.songs.songs.list, r)),
          {
            songs: {
              ...e.songs,
              songs: { ...e.songs.songs, list: i, defaultInstrument: r },
              defaultInstrument: r,
            },
          }
        );
      }),
      e.on("songs/more", (e) => t(e, !0)),
      e.on("songs/filter/pattern", (e, t) => ({
        songs: { ...e.songs, pattern: t },
      })),
      e.on("songs/filter/pattern", n),
      e.on("songs/filter/difficulty", (e, t) => ({
        songs: { ...e.songs, filters: { ...e.songs.filters, difficulty: t } },
      })),
      e.on("songs/filter/difficulty", n),
      e.on("songs/filter/instrument", (e, t) => ({
        songs: { ...e.songs, filters: { ...e.songs.filters, instrument: t } },
      })),
      e.on("songs/filter/instrument", n),
      e.on("songs/filter/tuning", (e, t) => {
        let { instrument: n, tuning: r } = t;
        return { songs: { ...e.songs, filters: nI(e.songs.filters, n, r) } };
      }),
      e.on("songs/filter/tuning", n),
      e.on("songs/filter/reset", (e) => ({
        songs: { ...e.songs, filters: nf },
      })),
      e.on("songs/filter/reset", n),
      e.on("route/change", (t, n) => {
        let { route: r, query: i } = n;
        if (r?.page === "search") {
          let n = i?.pattern || "",
            r = {
              instrument: i?.inst ? lB(i.inst) : t2,
              tunings: t.songs.filters.tunings,
              difficulty: t.songs.filters.difficulty,
            };
          (t.songs.songs.list.length &&
            t.songs.songs.pattern === n &&
            nV(t.songs.songs.filters, r)) ||
            e.dispatch("songs/filter", { pattern: n, filters: r });
        }
      });
  };
async function cB(e, t) {
  let n = tf("/api/song"),
    r = new FormData();
  r.append("file", e.file),
    r.append("title", e.title),
    r.append("artist", e.artist),
    r.append("difficulty", e.difficulty);
  let i = e.file.name.split(".").pop(),
    a = await fetch(n, {
      signal: t,
      method: "post",
      credentials: "include",
      body: r,
    });
  if (t && t.aborted) return { songSubmitted: !1, song: null, ext: i };
  await n3(a), await n9(a);
  let s = lj(await a.json());
  return { songSubmitted: !!a.ok, song: s, ext: i };
}
async function cO(e, t) {
  let n = tf("/api/revision"),
    r = new FormData();
  r.append("file", e.file),
    r.append("songId", e.songId),
    r.append("summary", e.summary),
    e.force && r.append("force", e.force.toString());
  let i = e.file.name.split(".").pop(),
    a = await fetch(n, {
      signal: t,
      method: "post",
      credentials: "include",
      body: r,
    });
  if (t && t.aborted) return;
  await n3(a), await n9(a);
  let s = lG(await a.json());
  return { revisionSubmitted: !!a.ok, revision: s, ext: i };
}
async function cD(e) {
  let t = tf("/api/revision/merge-edits"),
    n = await nZ(t, e);
  await n3(n), await n9(n);
  let r = lG(await n.json());
  return { revisionSubmitted: !!n.ok, revision: r, ext: "gp" };
}
let cz = ["gp3", "gp4", "gp5", "gpx", "gp"],
  cR = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null,
  };
async function c$(e, t, n) {
  try {
    let r = await cB(t, n);
    if (n && n.aborted) return;
    if ((e("upload/song:uploaded", r), r.songSubmitted)) {
      let t = await nK(r.song.songId);
      t && e("navigate", e3(t, 0));
    }
  } catch (t) {
    throw (e("upload/song:error", { error: t }), t);
  }
}
async function cF(e, t, n) {
  try {
    let r = await cO(t, n);
    if (n && n.aborted) return;
    if ((e("upload/revision:uploaded", r), r.revisionSubmitted)) {
      let t = await nK(r.revision.songId, r.revision.revisionId);
      t && e("navigate", e3(t, 0, t.revisionId));
    }
  } catch (t) {
    throw (e("upload/revision:error", { error: t }), t);
  }
}
let cV = (e) => {
    e.on("upload/song:uploaded", (e, t) => {
      let { songSubmitted: n, song: r } = t;
      return {
        uploads: { ...e.uploads, songError: null, songSubmitted: n, song: r },
      };
    }),
      e.on("upload/reset", () => ({ uploads: cR })),
      e.on("upload/song:error", (e, t) => {
        let { error: n } = t;
        return { uploads: { ...e.uploads, songError: n } };
      }),
      e.on("upload/revision:uploaded", (e, t) => {
        let { revisionSubmitted: n, revision: r } = t;
        return {
          uploads: {
            ...e.uploads,
            revisionError: null,
            revisionSubmitted: n,
            revision: r,
          },
        };
      }),
      e.on("upload/revision:merged", async (t, n) => {
        let { revisionSubmitted: r, revision: i } = n;
        if (r) {
          let t = await nK(i.songId, i.revisionId);
          t && e.dispatch("navigate", e3(t, 0, t.revisionId)),
            e.dispatch("curiosity/event", {
              event: "Submitted revision",
              Title: t.title,
              Artist: t.artist,
              Via: "Editor",
              "Song id": t.songId.toString(),
            });
        }
      }),
      e.on("upload/revision:error", (e, t) => {
        let { error: n } = t;
        return { uploads: { ...e.uploads, revisionError: n } };
      });
  },
  cU = (e) => {
    e.on("demo/activate", (e, t) => ({
      demo: { active: !0, enabled: e.meta.songId === B, requestedFeature: t },
    })),
      e.on("meta/load:processing", (e, t) => {
        let { songId: n } = t;
        return e.demo.active
          ? n === B
            ? { demo: { ...e.demo, active: !0, enabled: !0 } }
            : { demo: { ...e.demo, active: !1, enabled: !1 } }
          : null;
      });
  };
!(function (e) {
  (e.PROMO_CONTEXT_SLOWDOWN = "promo-context-slowdown"),
    (e.PROMO_CONTEXT_LOOP = "promo-context-loop"),
    (e.PROMO_CONTEXT_NO_ADS = "promo-context-no-ads"),
    (e.PROMO_CONTEXT_PRINT = "promo-context-print"),
    (e.PROMO_CONTEXT_MUTE = "promo-context-mute"),
    (e.PROMO_CONTEXT_SOLO = "promo-context-solo"),
    (e.PROMO_CONTEXT_RETUNE = "promo-context-retune"),
    (e.SCREENER = "screener"),
    (e.UT_RECORDER = "ut-recorder");
})(ee || (ee = {}));
let cH = "hasSeenAttractors",
  cj = "blockedAttractors",
  cG = [ee.UT_RECORDER],
  cW = { ignoreSingleAppearance: !1, ignoreDailyTimespan: !1 };
function cq(e) {
  let t = new Date(Date.now() - 864e5);
  return new Date(e) <= t;
}
function cX(e) {
  let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : new Date().toUTCString(),
    n = om(cH) || {};
  (n[e] = t), og(cH, n);
}
function cY(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : new Date().toUTCString();
  window.__ACTIVE_ATTRACTOR__ === e &&
    (cX(e, t), (window.__ACTIVE_ATTRACTOR__ = null));
}
function cK() {
  return om(cH) || {};
}
function cJ() {
  return om("blockedAttractors") || {};
}
function cZ(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
  if (
    (console.log("attractor:", e, (t = { ...cW, ...t })),
    -1 !== window.location.search.indexOf("ut=on") && cG.includes(e))
  )
    return (window.__ACTIVE_ATTRACTOR__ = e), !0;
  if (window.__ACTIVE_ATTRACTOR__) return e === window.__ACTIVE_ATTRACTOR__;
  let n = !0,
    r = cK(),
    i = Object.keys(r);
  return (
    t.ignoreDailyTimespan || (n = i.reduce((e, t) => e && cq(r[t]), n)),
    !t.ignoreSingleAppearance && r[e] && (n = !1),
    n && (window.__ACTIVE_ATTRACTOR__ = e),
    n
  );
}
!(function (e) {
  (e.SLOWDOWN = "slowdown"),
    (e.LOOP = "loop"),
    (e.NO_ADS = "no ads"),
    (e.PRINT = "print"),
    (e.MUTE = "mute"),
    (e.SOLO = "solo"),
    (e.PITCH_SHIFT = "pitch shift");
})(et || (et = {}));
let cQ = new Map([
    ["slowdown", ee.PROMO_CONTEXT_SLOWDOWN],
    ["loop", ee.PROMO_CONTEXT_LOOP],
    ["no ads", ee.PROMO_CONTEXT_NO_ADS],
    ["print", ee.PROMO_CONTEXT_PRINT],
    ["mute", ee.PROMO_CONTEXT_MUTE],
    ["solo", ee.PROMO_CONTEXT_SOLO],
    ["pitch shift", ee.PROMO_CONTEXT_RETUNE],
  ]),
  c1 = "hasUnsubscribedFromPromo",
  c0 = 1e4,
  c2 = 2e4,
  c5 = 2e3;
function c4(e) {
  let t = new Date(Date.now() - 6048e5);
  return new Date(e) >= t;
}
let c3 = (e, t) => {
  if (t.isTestMode && "promo" !== t.query.cyAllow) return !0;
  let n = om(c1),
    r = !!t.promo.feature,
    i = 0 === t.curiosity.vpt10.count,
    a = n || en(t.user) || r || i;
  return a;
};
function c9(e) {
  let { position: t } = e.cursor,
    n = e.part.current,
    r = [
      ...e.promo.playbackPositionEvents.filter(
        (e) => e.time > Date.now() - 12e4
      ),
    ],
    i = 0;
  if (n) {
    let e = a8(n, t.cursor, "left"),
      a = `${n.revisionId}:${n.partId}:${e.measureLayout.measure.index}`;
    r.push({ time: Date.now(), key: a }),
      (i = r.filter((e) => e.key === a).length);
  }
  return { events: r, relatedEvents: i };
}
function c8(e) {
  let t = e.part.current,
    n = "other";
  t &&
    (eE(t.instrumentId) && (n = "guitar"),
    eT(t.instrumentId) && (n = "bass"),
    eC(t.instrumentId) && (n = "drums"));
  let r = [...e.promo.playbackTypeEvents, { time: Date.now(), type: n }],
    i = r.filter((e) => "bass" === e.type).length;
  return { events: r, bassEvents: i };
}
function c6(e) {
  let t = cK(),
    n = cJ();
  return !(n[e] || c4(t[e])) && cZ(e, { ignoreSingleAppearance: !0 });
}
function c7(e, t) {
  e.device.isPhone &&
    e.player.canPlay &&
    e.player.shouldPlay &&
    t("player/stopPlay");
}
function ue(e, t) {
  let n = ee.PROMO_CONTEXT_SLOWDOWN,
    r = !e.player.shouldPlay || !e.player.canPlay;
  if (r || c3(n, e)) return;
  let i = e.promo.feature,
    { events: a, relatedEvents: s } = c9(e);
  return (
    s >= 3 && c6(n) && ((i = "slowdown"), c7(e, t)),
    { promo: { ...e.promo, playbackPositionEvents: a, feature: i } }
  );
}
function ut(e, t) {
  let n = ee.PROMO_CONTEXT_LOOP,
    r = !e.player.shouldPlay || !e.player.canPlay;
  if (r || c3(n, e)) return;
  let i = cK();
  if (!i[ee.PROMO_CONTEXT_SLOWDOWN]) return;
  let a = e.promo.feature,
    { events: s, relatedEvents: o } = c9(e);
  return (
    o >= 3 && c6(n) && ((a = "loop"), c7(e, t)),
    { promo: { ...e.promo, playbackPositionEvents: s, feature: a } }
  );
}
function un(e, t) {
  let n = ee.PROMO_CONTEXT_NO_ADS;
  if (c3(n, e)) return;
  let r = e.screen.viewport.height,
    i = e.device.isPhone ? 740 : 900,
    a = e.promo.feature;
  return (
    r < i && c6(n) && ((a = "no ads"), c7(e, t)),
    { promo: { ...e.promo, feature: a } }
  );
}
function ur(e) {
  let t = ee.PROMO_CONTEXT_PRINT;
  if (c3(t, e)) return;
  let n = c6(t) ? "print" : e.promo.feature;
  return { promo: { ...e.promo, feature: n } };
}
function ui(e) {
  let t = ee.PROMO_CONTEXT_MUTE;
  if (c3(t, e)) return;
  let n = e.promo.feature,
    r = e.promo.halfPlayed + 1;
  return (
    r >= 2 && c6(t) && (n = "mute"),
    { promo: { ...e.promo, halfPlayed: r, feature: n } }
  );
}
function ua(e, t) {
  let n = ee.PROMO_CONTEXT_SOLO,
    r = !e.player.shouldPlay || !e.player.canPlay;
  if (r || c3(n, e)) return;
  let i = e.promo.feature,
    { events: a, bassEvents: s } = c8(e);
  return (
    5 === s && c6(n) && ((i = "solo"), c7(e, t)),
    { promo: { ...e.promo, playbackTypeEvents: a, feature: i } }
  );
}
function us(e) {
  let t = ee.PROMO_CONTEXT_RETUNE;
  if (c3(t, e)) return;
  let n = e.promo.feature,
    r = e.part.current;
  if (r) {
    let e = r.tuning && tZ(r.instrumentId, r.tuning),
      i = e && 0 !== e.pitch;
    i && c6(t) && (n = "pitch shift");
  }
  return { promo: { ...e.promo, feature: n } };
}
let uo = (e) => {
    let t = !om(c1);
    if (t) {
      let t, r, i;
      function n(t) {
        if (!c3(ee.PROMO_CONTEXT_MUTE, t)) {
          if (t.player.shouldPlay && t.player.canPlay) {
            let n = t.part.current;
            if (!n) return;
            let r = n.timestamps[n.timestamps.length - 1];
            r > 2e4 &&
              e.dispatch("promo/mute:start", { delay: Math.floor(r / 3) });
          } else e.dispatch("promo/mute:clear");
        }
      }
      e.on("cursor/move", (t) => ue(t, e.dispatch)),
        e.on("player/togglePlay", (t) => ue(t, e.dispatch)),
        e.on("cursor/move", (t) => ut(t, e.dispatch)),
        e.on("player/togglePlay", (t) => ut(t, e.dispatch)),
        e.on("curiosity/vpt10", (t) => un(t, e.dispatch)),
        e.on("meta/load:done", (n) => {
          if ("tab" === n.route.page && !n.device.isPhone) {
            clearTimeout(t);
            let r = n.isTestMode ? 2e3 : 2e4;
            t = setTimeout(() => e.dispatch("promo/print:fire"), r);
          }
        }),
        e.on("route/change", () => clearTimeout(t)),
        e.on("promo/print:fire", (e) => ur(e)),
        e.on("player/togglePlay", (e) => n(e)),
        e.on("promo/mute:start", (t, n) => {
          let { delay: i } = n;
          clearTimeout(r),
            (r = setTimeout(() => e.dispatch("promo/mute:fire"), i));
        }),
        e.on("route/change", () => clearTimeout(r)),
        e.on("promo/mute:clear", () => clearTimeout(r)),
        e.on("promo/mute:fire", (e) => ui(e)),
        e.on("cursor/move", (t) => ua(t, e.dispatch)),
        e.on("player/togglePlay", (t) => ua(t, e.dispatch)),
        e.on("meta/load:done", (t) => {
          if ("tab" === t.route.page) {
            clearTimeout(i);
            let n = t.isTestMode ? 2e3 : 1e4;
            i = setTimeout(() => e.dispatch("promo/retune:fire"), n);
          }
        }),
        e.on("route/change", () => clearTimeout(i)),
        e.on("promo/retune:fire", (e) => us(e)),
        e.on("promo/dismiss", (e) => {
          let t = cQ.get(e.promo.feature);
          return t && cY(t), { promo: { ...e.promo, feature: null } };
        }),
        e.on(
          "promo/unsubscribe",
          (e) => (
            og(c1, new Date().toUTCString()),
            { promo: { ...e.promo, feature: null } }
          )
        );
    }
  },
  ul = () => ({ editor: { canDelete: !1 } });
async function uc(e, t) {
  try {
    let n = new t$();
    if (t === $.V1)
      throw Error(
        `Generating audio for version ${t} is not supported with this API`
      );
    await od(e, t, n.signal), I && alert("Done!");
  } catch (e) {
    console.error(e), alert(`Error: ${e.message}`);
  }
}
async function uu(e, t) {
  try {
    await ou(e, t), I && alert("Done!");
  } catch (e) {
    console.error(e), alert(`Error: ${e.message}`);
  }
}
let ud = (e) => {
  e.on("user/signOut", ul),
    e.on("editor/sound:toggle", (t, n) => {
      let { version: r } = n;
      t.meta.current &&
        oP(e, t.meta.songId, t.meta.partId, t.meta.current.revisionId, r);
    }),
    e.on("editor/sound:generate", (e, t) => {
      let { version: n } = t;
      e.meta.current && uc(e.meta.current.revisionId, n);
    }),
    e.on("editor/sound:update", (e, t) => {
      let { version: n } = t;
      e.meta.current && uu(e.meta.current.revisionId, n);
    });
};
function up(e) {
  let t = {};
  for (let n of (e.voices > 1 && (t.polyphony = !0), e.measures))
    for (let e of (n.repeat && (t.repeat = !0),
    n.tripletFeel && (t.swingRhythm = !0),
    n.alternateEnding && (t.alternateEnding = !0),
    n.voices))
      if (!e.rest) {
        for (let n of e.beats)
          if (
            (n.letRing && (t.letRing = !0),
            3 === n.tuplet && (t.triplet = !0),
            n.dotted && (t.dot = !0),
            (n.upStroke || n.downStroke) && (t.upDownStroke = !0),
            n.palmMute && (t.palmMute = !0),
            n.chord && (t.chord = !0),
            n.wideVibrato && (t.wideVibrato = !0),
            n.tapping && (t.tapping = !0),
            n.notes)
          )
            for (let e of n.notes)
              e.hp && ((t.hammerOn = !0), (t.pullOff = !0)),
                e.tie && (t.tie = !0),
                e.bend &&
                  (e.bend.points[0].tone > e.bend.points[1].tone &&
                    (t.releaseBend = !0),
                  (t.bend = !0)),
                e.ghost && (t.ghostNote = !0),
                e.dead && (t.deadNote = !0),
                e.vibrato && (t.vibrato = !0),
                e.rightSlide &&
                  ("legato" !== e.rightSlide
                    ? (t.legatoSlide = !0)
                    : (t.slide = !0)),
                "natural" === e.harmonic && (t.naturalHarmonic = !0),
                "pinch" === e.harmonic && (t.pinchHarmonic = !0),
                1 === e.accentuated && (t.accented = !0),
                2 === e.accentuated && (t.heavyAccented = !0),
                e.staccato && (t.staccato = !0),
                e.tremolo && (t.tremolo = !0);
      }
  return t;
}
function uh(e, t, n) {
  if (!t) return !1;
  let r = e;
  return (
    void 0 === r && ((r = up(t)), n("tabFeatures/set", { features: r })), r
  );
}
let um = (e) => {
    e.on("tabFeatures/set", (e, t) => {
      let { features: n } = t;
      return { tabFeatures: n };
    }),
      e.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
  },
  ug = [
    "touchstart",
    "click",
    "scroll",
    "mousewheel",
    "mousemove",
    "mousedown",
  ],
  uf = (e) => e && e.replace(/["'=!+#*~;^()<>[\],&]/gi, "");
async function uy() {
  return "off" === window.__ADS__
    ? null
    : Promise.all([
        lK(
          "https://www.googletagservices.com/tag/js/gpt.js",
          "__LOADED_GTP__"
        ).catch(() => {}),
        lK(
          "https://cdn-b.notsy.io/sng/" +
            ("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
          "__LOADED_NOTSY__"
        ),
      ]);
}
function uv(e) {
  let {
    route: t,
    block: n,
    options: r,
    personalization: i,
    songId: a,
    artist: s,
    song: o,
    device: l,
  } = e;
  if (!r.isForced && t.page !== r.page) return;
  let c = [];
  r.isTargeted &&
    (a && c.push(["songID", a]),
    s && c.push(["artist", s]),
    o && c.push(["song", o]));
  let u = { page: n, npa: !i, targeting: c, gdpr: l.hasGDPR };
  (l.hasGDPR && l.hasCCPA) || (u.country = l.country), window.notsyInit(u);
}
async function ub(e) {
  try {
    await uy(), e("notsy/load:done", { loaded: window.__LOADED_NOTSY__ || !1 });
  } catch (t) {
    e("notsy/load:error");
  }
}
function uw(e, t) {
  let {
      dispatch: n,
      ads: r,
      meta: i,
      chords: a,
      route: s,
      routeContent: o,
    } = lU("ads", "meta", "chords", "route", "routeContent"),
    l = window.__HAS_BEEN_SEEN_BEFORE__ || ox.hasFirstActivity,
    [c, u] = d(l);
  m(() => {
    if (!c) {
      let e = () => {
        u(!0), ug.forEach((t) => window.removeEventListener(t, e));
      };
      return (
        ug.forEach((t) => window.addEventListener(t, e)),
        () => ug.forEach((t) => window.removeEventListener(t, e))
      );
    }
  }, [c]),
    m(() => {
      if (!c || r.notsyFailed) return;
      if (!r.notsyLoaded) {
        n("notsy/load");
        return;
      }
      if ("tab" === s.page) {
        let { songId: e } = s;
        if (i.loading || +e !== i.songId) return;
      }
      if ("chords" === s.page) {
        let { songId: e } = s;
        if (a.loading || +e !== a.songId) return;
      }
      let l = {
        route: s,
        block: e,
        options: t,
        personalization: !0,
        songId: 0,
        artist: "",
        song: "",
      };
      "tab" === o.page &&
        ((l.artist = uf(i.current && i.current.artist)),
        (l.song = uf(i.current && i.current.title)),
        (l.songId = i.songId)),
        "chords" === o.page &&
          ((l.artist = uf(a.current && a.current.artist)),
          (l.song = uf(a.current && a.current.title)),
          (l.songId = a.songId)),
        n("notsy/fire", l);
    }, [r, e, c, i, a, t, s, o]);
}
let uS = (e) => {
    e.on("notsy/load", () => ub(e.dispatch)),
      e.on("notsy/load:done", (e, t) => {
        let { loaded: n } = t;
        return { ads: { ...e.ads, notsyLoaded: n, notsyFailed: !n } };
      }),
      e.on("notsy/load:error", (e) => ({
        ads: { ...e.ads, notsyLoaded: !1, notsyFailed: !0 },
      })),
      e.on("notsy/fire", (e, t) => {
        uv({ ...t, device: e.device });
      });
  },
  ux = "learnMarkers";
function uk(e) {
  try {
    let t = om(ux) || [];
    e("learnMarkers/load:done", t);
  } catch {
    e("learnMarkers/load:done", []);
  }
}
function uC(e) {
  let t = 0;
  for (let n of e) t += n.learnedBars.length;
  return t;
}
let uE = (e) => {
    e.on("learnMarkers/load:done", (e, t) => {
      let { learnMarkers: n } = e;
      return { learnMarkers: { ...n, data: t } };
    }),
      e.on("learnMarkers/markToggle", (t, n) => {
        let { songId: r, partId: i, barNumber: a, isLearned: s } = n,
          { learnMarkers: o, meta: l } = t,
          c = [...o.data],
          u = c.find((e) => e.songId === r && e.partId === i);
        if (s) {
          if (u) {
            let e = u.learnedBars.findIndex((e) => e === a);
            e >= 0 &&
              (u.learnedBars = u.learnedBars
                .slice(0, e)
                .concat(u.learnedBars.slice(e + 1)));
          }
        } else
          u
            ? u.learnedBars.includes(a) ||
              (u.learnedBars = [...u.learnedBars, a])
            : c.push({ songId: r, partId: i, learnedBars: [a] });
        return (
          og(ux, c),
          setTimeout(
            () =>
              e.dispatch("curiosity/event", {
                event: s ? "Marked as not learned" : "Marked as learned",
                "Measure number": a,
                "Revision id": l.current.revisionId,
                "Song id": l.songId.toString(),
                ...dm(t),
              }),
            300
          ),
          { learnMarkers: { ...o, data: c } }
        );
      });
  },
  uT = "EE_STORAGE",
  uP = (e) => {
    let t = l8(uT) || [];
    Array.isArray(t) || (t = []);
    let n = t.find((t) => t.experiment === e);
    return n?.date ? Math.floor((new Date() - new Date(n.date)) / 864e5) : null;
  },
  u_ = (e) => {
    let t = l8(uT) || [];
    Array.isArray(t) || (t = []);
    let n = om(uT) || [];
    Array.isArray(n) || (n = []),
      n.length && "string" == typeof n[0] && (n = [...t]);
    let r = t.find((t) => t.experiment === e);
    r ||
      (t.push({ experiment: e, date: new Date() }), l7(uT, JSON.stringify(t)));
    let i = n.find((t) => t.experiment === e);
    return (
      i || (n.push({ experiment: e, date: new Date() }), og(uT, n)), !!(r || i)
    );
  },
  uL = [
    "aa",
    "drawing",
    "promo_slowdown",
    "promo_slowdown_faster",
    "new_sound",
    "plus_promo",
    "submit_promo",
    "plus_banners",
    "hidden_chords",
    "hetfield_emoji",
    "report",
    "bpm_speed",
    "jamplay",
    "comments_removal",
    "increased_tab_size",
    "voice_metronome",
    "french_plus",
    "new_plus_banner",
    "new_plus_text_ad",
    "useful_edits_v2",
    "multirest_print",
    "fingering_no_text",
    "emotions_on_plus",
    "mobile_app_banner_later",
    "no_struggling",
    "sign_stylization_plus_banner",
    "emoji_on_plus",
    "top_five_artists_logos",
    "contextual_later",
    "even_larger_tab",
    "last_edit_on",
    "slowdown_text_ads",
    "redesign_app_banner",
    "measure_learned_mark",
    "slow_on_plus",
    "subscribe_dialogue",
    "emotions_block_above",
    "emotions_text_ads",
    "open_srwm_toolbar_by_default",
    "banner_later",
    "playing_track_indicator",
    "selections",
    "voice_metronome_v2",
    "video_walkthrough",
    "social_plus",
    "my_tabs_favorites_counts",
    "android_app_banner",
    "only_before",
    "repeating_contextual",
    "auto_fingerings",
    "play_along",
    "improve_on_panel",
    "full_width",
    "statistic_on_text",
    "video_plus",
    "editor_move_note",
    "submit_corrector_revision",
    "gpif_support",
    "statistic_on_panel",
    "learn_faster_app_banner",
    "statistic_on_popup",
  ];
async function uA(e, t) {
  let n = tf("/api/event/");
  try {
    await nZ(n, { event: e, payload: t });
  } catch (e) {
    console.error(e);
  }
}
void 0 !== document.hidden
  ? ((t = "hidden"), (n = "visibilityState"))
  : void 0 !== document.mozHidden
  ? ((t = "mozHidden"), (n = "mozVisibilityState"))
  : void 0 !== document.msHidden
  ? ((t = "msHidden"), (n = "msVisibilityState"))
  : void 0 !== document.webkitHidden &&
    ((t = "webkitHidden"), (n = "webkitVisibilityState"));
let uI = () =>
  t
    ? {
        "Web document is hidden": document[t],
        "Web document visibility": document[n],
      }
    : {};
function uN(e) {
  return (e.current && e.current.tracks && e.current.tracks[e.partId]) || null;
}
let uM = (e) =>
  e
    ? ((e.isBassGuitar && " Bass") || (e.isDrums && " Drum") || "") + " Tab"
    : " Tab";
function uB(e, t) {
  let n =
    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "edit";
  return `/admin/resources/${e}/records/${t}/${n}`;
}
function uO(e, t) {
  return `/a/wa/SongAdminTools/${e}?id=${t}`;
}
function uD(e) {
  return `https://www.songsterr.com${e}`;
}
function uz(e) {
  switch (e.next) {
    case "subscribe":
      return "/a/wa/plus/payment";
    case "favorites":
      return "/a/wa/favorites";
    case "account":
      return "/a/wa/account";
    case "submit":
      return "/a/wa/submit";
    case "coupon":
      let t = e.code ? `?${new URLSearchParams({ code: e.code })}` : "";
      return `/a/wa/plus/coupon${t}`;
    default:
      return "/";
  }
}
function uR() {
  return Math.floor((1 + Math.random()) * 65536)
    .toString(16)
    .substring(1);
}
function u$() {
  return (
    uR() +
    uR() +
    "-" +
    uR() +
    "-" +
    uR() +
    "-" +
    uR() +
    "-" +
    uR() +
    uR() +
    uR()
  );
}
let uF = "Print--plus",
  uV = "Print--free";
function uU(e) {
  let t = e.rules || e.cssRules;
  for (let e of t)
    if (e.style.content && e.style.content.length) {
      let t = u$(),
        n =
          e.style.content.substring(0, 62) +
          t +
          e.style.content.substring(62 + t.length);
      n.length === e.style.content.length
        ? (e.style.content = n)
        : console.error("Something wrong with tracker url length");
    }
}
function uH(e) {
  try {
    let e = document.styleSheets;
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      "print" === n.media.mediaText && "print-ga" === n.ownerNode.id && uU(n);
    }
  } catch (e) {
    console.error("PrintTracker: " + e);
  }
}
let uj = /[πÇÉπÇæπÇèπÇï]/;
function uG(e) {
  return !uj.test(e) && -1 === e.indexOf(".com");
}
function uW(e) {
  return e
    .split("+")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ");
}
let uq = "Songsterr",
  uX = "Songsterr Tabs with Rhythm",
  uY = {
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
    coupon: "Activate coupon",
    howToReadTab: "How to Read a Tab",
    privacy: "Privacy Policy",
    terms: "Terms Of Service",
    dnsmpd: "Do Not Sell My Personal Information",
    mytabs: "My Tabs",
    "": "",
    tab: "",
    chords: "",
    search: "",
    artist: "",
  };
function uK(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
  if (e) {
    if (e.instrument === t3) return "Drum";
    if (e.instrument === t4) return "Bass";
    if (e.instrument === t5) return "Guitar";
  }
  return t;
}
function uJ(e, t) {
  if (!t || !e.current || !e.current.tracks) return !1;
  let n = null;
  return (
    eC(t.instrumentId)
      ? (n = eC)
      : eT(t.instrumentId)
      ? (n = eT)
      : eE(t.instrumentId) && (n = eE),
    !n || e5(t, e.current.tracks, n)
  );
}
function uZ(e) {
  let { meta: t } = e;
  if (!t.current) return [uX, "Free online tab player"];
  let n = uN(t),
    r = "";
  uJ(t, n) && (r = ` \u002d ${n.titleFull.replace(/\u00a0/g, " ")}`);
  let i = uM(n),
    a = t.allowedByLicense ? "" : " (Temporary Removed by Music Publisher) ",
    s = `${t.current.title}${i} by ${t.current.artist}${r}`;
  return [
    `${s}${a} | ${uX}`,
    `${s}. Free online tab player. One accurate version. Recommended by The Wall Street Journal`,
  ];
}
function uQ(e) {
  let { chords: t } = e;
  if (!t.current) return uX;
  let { title: n, artist: r } = t.current;
  return `${n} Chords by ${r} | ${uX}`;
}
function u1(e) {
  let t = e.route;
  return "artist" === t.page
    ? u7(e)
    : "tab" === t.page
    ? uZ(e)[0]
    : "chords" === t.page
    ? uQ(e)
    : "search" === t.page
    ? u6(e)
    : "tag" === t.page || "tags" === t.page
    ? dt(e)
    : de(e);
}
function u0(e) {
  return "tab" === e.route.page && e.meta.current
    ? {
        page: e.route.page,
        Artist: e.meta.current.artist,
        Title: e.meta.current.title,
      }
    : { page: e.route.page };
}
function u2(e) {
  (document.title = u1(e)),
    window.ga &&
      window.ga("send", "pageview", {
        location: window.location.href,
        title: document.title,
      }),
    uH(u0(e));
}
ea.map((e) => {
  let [t, n] = e;
  return "string" == typeof t && "string" == typeof n.page
    ? { [n.page]: t }
    : {};
}).reduce((e, t) => Object.assign(e, t), {});
let u5 = (e, t) => e.artist.artists[t] || "Unknown Artist",
  u4 = (e) => {
    if (e.length > 0)
      return uG(e) ? `Search results for: '${e}'` : "Search results";
  },
  u3 = (e) =>
    [uK(e.songs && e.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "),
  u9 = (e) =>
    [
      u5(e, +e.route.artistId),
      uK(e.artist && e.artist.filters, ""),
      "Tabs",
    ].join(" "),
  u8 = (e) => uY[e.route.page] || "";
function u6(e) {
  return [e.songs && e.songs.pattern && u4(e.songs.pattern), u3(e), "Songsterr"]
    .filter(Boolean)
    .join(" | ");
}
function u7(e) {
  return [e.artist && e.artist.pattern && u4(e.artist.pattern), u9(e), uX]
    .filter(Boolean)
    .join(" | ");
}
function de(e) {
  return [u8(e), uX].join(" | ");
}
function dt(e) {
  let {
    tags: { content: t, route: n, query: r, isFailed: i, isNotFound: a },
  } = e;
  if (!t || i || a)
    return `${a ? "Not Found" : "Something Went Wrong"} | ${uX}`;
  let s = r.page ? ` Page ${r.page}` : "",
    o = "Top " + ("tag" === n.page ? `${uW(n.name)} Tabs` : "Tags") + s;
  return o + ` | ${uX}`;
}
let dn = new Map([
    ["AF", "Afghanistan"],
    ["AL", "Albania"],
    ["DZ", "Algeria"],
    ["AO", "Angola"],
    ["AI", "Anguilla"],
    ["AG", "Antigua and Barbuda"],
    ["AR", "Argentina"],
    ["AM", "Armenia"],
    ["AU", "Australia"],
    ["AT", "Austria"],
    ["AZ", "Azerbaijan"],
    ["BS", "Bahamas"],
    ["BH", "Bahrain"],
    ["BB", "Barbados"],
    ["BY", "Belarus"],
    ["BE", "Belgium"],
    ["BZ", "Belize"],
    ["BJ", "Benin"],
    ["BM", "Bermuda"],
    ["BT", "Bhutan"],
    ["BO", "Bolivia"],
    ["BA", "Bosnia and Herzegovina"],
    ["BW", "Botswana"],
    ["BR", "Brazil"],
    ["VG", "British Virgin Islands"],
    ["BN", "Brunei"],
    ["BG", "Bulgaria"],
    ["BF", "Burkina Faso"],
    ["KH", "Cambodia"],
    ["CM", "Cameroon"],
    ["CA", "Canada"],
    ["CV", "Cape Verde"],
    ["KY", "Cayman Islands"],
    ["TD", "Chad"],
    ["CL", "Chile"],
    ["CN", "China mainland"],
    ["CO", "Colombia"],
    ["CD", "Congo, Democratic Republic of the"],
    ["CG", "Congo, Republic of the"],
    ["CR", "Costa Rica"],
    ["CI", "Cote D'Ivoire"],
    ["HR", "Croatia"],
    ["CY", "Cyprus"],
    ["CZ", "Czech Republic"],
    ["DK", "Denmark"],
    ["DM", "Dominica"],
    ["DO", "Dominican Republic"],
    ["EC", "Ecuador"],
    ["EG", "Egypt"],
    ["SV", "El Salvador"],
    ["EE", "Estonia"],
    ["SZ", "Eswatini"],
    ["FJ", "Fiji"],
    ["FI", "Finland"],
    ["FR", "France"],
    ["GA", "Gabon"],
    ["GM", "Gambia"],
    ["GE", "Georgia"],
    ["DE", "Germany"],
    ["GH", "Ghana"],
    ["GR", "Greece"],
    ["GD", "Grenada"],
    ["GT", "Guatemala"],
    ["GW", "Guinea-Bissau"],
    ["GY", "Guyana"],
    ["HN", "Honduras"],
    ["CN-HK", "Hong Kong"],
    ["HU", "Hungary"],
    ["IS", "Iceland"],
    ["IN", "India"],
    ["ID", "Indonesia"],
    ["IQ", "Iraq"],
    ["IE", "Ireland"],
    ["IL", "Israel"],
    ["IT", "Italy"],
    ["JM", "Jamaica"],
    ["JP", "Japan"],
    ["JO", "Jordan"],
    ["KZ", "Kazakhstan"],
    ["KE", "Kenya"],
    ["KR", "Republic of Korea"],
    ["XK", "Kosovo"],
    ["KW", "Kuwait"],
    ["KG", "Kyrgyzstan"],
    ["LA", "Laos"],
    ["LV", "Latvia"],
    ["LB", "Lebanon"],
    ["LR", "Liberia"],
    ["LY", "Libya"],
    ["LT", "Lithuania"],
    ["LU", "Luxembourg"],
    ["MO", "Macau"],
    ["MG", "Madagascar"],
    ["MW", "Malawi"],
    ["MY", "Malaysia, MYR"],
    ["MV", "Maldives"],
    ["ML", "Mali"],
    ["MT", "Malta"],
    ["MR", "Mauritania"],
    ["MU", "Mauritius"],
    ["MX", "Mexico"],
    ["FM", "Micronesia"],
    ["MD", "Moldova"],
    ["MN", "Mongolia"],
    ["ME", "Montenegro"],
    ["MS", "Montserrat"],
    ["MA", "Morocco"],
    ["MZ", "Mozambique"],
    ["MM", "Myanmar"],
    ["NA", "Namibia"],
    ["NR", "Nauru"],
    ["NP", "Nepal"],
    ["NL", "Netherlands"],
    ["NZ", "New Zealand"],
    ["NI", "Nicaragua"],
    ["NE", "Niger"],
    ["NG", "Nigeria"],
    ["MK", "North Macedonia"],
    ["NO", "Norway"],
    ["OM", "Oman"],
    ["PK", "Pakistan"],
    ["PW", "Palau"],
    ["PA", "Panama"],
    ["PG", "Papua New Guinea"],
    ["PY", "Paraguay"],
    ["PE", "Peru"],
    ["PH", "Philippines"],
    ["PL", "Poland"],
    ["PT", "Portugal"],
    ["QA", "Qatar"],
    ["RO", "Romania"],
    ["RU", "Russia"],
    ["RW", "Rwanda"],
    ["ST", "S\xe3o Tom\xe9 and Pr\xedncipe"],
    ["SA", "Saudi Arabia"],
    ["SN", "Senegal"],
    ["RS", "Serbia"],
    ["SC", "Seychelles"],
    ["SL", "Sierra Leone"],
    ["SG", "Singapore"],
    ["SK", "Slovakia"],
    ["SI", "Slovenia"],
    ["SB", "Solomon Islands"],
    ["ZA", "South Africa"],
    ["ES", "Spain"],
    ["LK", "Sri Lanka"],
    ["KN", "St. Kitts and Nevis"],
    ["LC", "St. Lucia"],
    ["VC", "St. Vincent and the Grenadines"],
    ["SR", "Suriname"],
    ["SE", "Sweden"],
    ["CH", "Switzerland"],
    ["TW", "Taiwan"],
    ["TJ", "Tajikistan"],
    ["TZ", "Tanzania"],
    ["TH", "Thailand"],
    ["TO", "Tonga"],
    ["TT", "Trinidad and Tobago"],
    ["TN", "Tunisia"],
    ["TR", "Turkey"],
    ["TM", "Turkmenistan"],
    ["TC", "Turks and Caicos Islands"],
    ["UG", "Uganda"],
    ["UA", "Ukraine"],
    ["AE", "United Arab Emirates"],
    ["GB", "United Kingdom"],
    ["US", "United States"],
    ["UY", "Uruguay"],
    ["UZ", "Uzbekistan"],
    ["VU", "Vanuatu"],
    ["VE", "Venezuela"],
    ["VN", "Vietnam"],
    ["YE", "Yemen"],
    ["ZM", "Zambia"],
    ["ZW", "Zimbabwe"],
  ]),
  dr = "sr_vpt10";
async function di(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  if (!l) {
    if ("bot" === e.device.type) return;
    null === t
      ? (t = void 0)
      : void 0 === t && e.user.isLoggedIn && (t = e.user.profile.id.toString());
    let {
      getDeviceId: n,
      init: r,
      track: i,
      Identify: a,
      identify: s,
      setUserId: o,
    } = await import("./index.1c04369c.js");
    await r(window.__AMPLITUDE_API_KEY__ || "", t, {
      serverUrl: "/2/httpapi",
      minIdLength: 1,
      attribution: { disabled: !0 },
    }).promise,
      (l = {
        getDeviceId: n,
        init: r,
        track: i,
        Identify: a,
        identify: s,
        setUserId: o,
      });
  }
  return l;
}
let da = {
  phone: "Phone",
  tablet: "Tablet",
  desktop: "Desktop",
  tv: "TV",
  car: "Car",
  bot: "Bot",
};
function ds() {
  let e = window.matchMedia("(orientation: portrait)");
  return e ? (e.matches ? "portrait" : "landscape") : "unknown";
}
function dl() {
  return window.matchMedia(sK).matches ? "smallPortrait" : "wideOrLandscape";
}
let dc = {
    "Used metronome": !1,
    "Used countin": !1,
    "Used solo": !1,
    "Used mute": !1,
    "Used playback": !1,
    "Used speed": !1,
    "Used loop": !1,
    "Used mixer": !1,
    "Used pitchshift": !1,
    "Used fingerings for 30 seconds": !1,
  },
  du = "curiosity_sent_events",
  dd = (e) =>
    -1 !== cs.indexOf(e) ? `Experiment: ${e}` : `Experiment: SRW ${e}`,
  dp = (e, t) => `s${e}t${void 0 !== t ? t : ""}`,
  dh = (e) => {
    let t = new Date(e.created_at),
      n = new Date(),
      r = Math.abs(n.getTime() - t.getTime());
    return Math.ceil(r / 864e5);
  },
  dm = (e) => {
    let t;
    let n = e.meta;
    if (!n.current || !e.part.current) return {};
    let r = uN(n),
      i = ox.getTimeSinceLastActivity(),
      a = n.current,
      s = e.part.current,
      { shown: o, status: l, trackFingering: c } = e.fingerings,
      u = o && !l && !!c,
      d = tl(e.player.version),
      p = d.versionLegacy || `audioV${d.version}`;
    for (let r of e.setlists.setlists)
      if (-1 !== r.songs.findIndex((e) => e.songId === n.songId)) {
        t = r.name;
        break;
      }
    return {
      ...e.curiosity.vpt10.props,
      Instrument: s.instrument,
      Difficulty: r && r.difficulty,
      "Minutes Since Last Activity": i,
      Artist: a.artist,
      Title: a.title,
      "Song and track ids": dp(a.songId, r?.partId),
      "Song id": n.songId.toString(),
      "Track id": r && r.partId.toString(),
      "Track title": r && r.name,
      "Has chords": s.withChords,
      "Has chords link": a.hasChords || !1,
      "Has sound v4": tu.has(a, $.V4),
      "Sound version": p,
      Tags: n.current.tags,
      "Playlist Name": t,
      "Autofingering enabled": u,
      "Revised days ago": dh(a),
    };
  },
  dg = (e) => {
    {
      let s,
        o,
        l,
        c = {};
      function t(e) {
        c = om(du) || c;
        let t = !c[e];
        return t && ((c[e] = !0), og(du, c)), t;
      }
      async function n(e, t) {
        let { setUserId: n } = await di(e, t.id.toString());
        n(t.id.toString());
      }
      async function r(e) {
        let { setUserId: t } = await di(e, null);
        t(void 0);
      }
      async function i(e, n) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        try {
          let a = e.user.isLoggedIn ? e.user.profile.plan : U.FREE,
            s = e.user.isLoggedIn,
            o = {
              Url: window.location.href,
              Referer: e.curiosity.referer.last,
              ...uI(),
              ...r,
            },
            l = t(n);
          if (i && !l) return;
          !i && l && (o["First time"] = !0);
          let { Identify: c, track: u } = await di(e),
            d = new c();
          d.set("Plan", a),
            d.set("Platform", "Web"),
            d.set("Browser", e.browser.family),
            d.set("Browser version", e.browser.version),
            d.set("System version", e.device.os.version),
            d.set("Device type (correct)", da[e.device.type] || e.device.type),
            d.set("Signed in", s),
            d.set("Total VPT10s", e.curiosity.vpt10.count),
            d.set("Total measures learned", uC(e.learnMarkers.data)),
            d.set("Screen width", e.screen.viewport.width),
            d.set("Screen height", e.screen.viewport.height),
            d.set("Orientation", ds()),
            d.set("Mode", dl()),
            d.set("Browserslist", N);
          let p = l8("exp");
          if (p && p.active)
            for (let e of Object.keys(p.active)) d.set(dd(e), p.active[e]);
          for (let e of uL)
            d.unset(dd(e)), d.unset("Device type (by useragent)");
          d.unset("Referer"),
            e.curiosity.referer.last &&
              d.set("Last referer", e.curiosity.referer.last),
            e.curiosity.referer.original &&
              d.set("Original referer", e.curiosity.referer.original);
          let h = {
            version_name: "f25201c4",
            event_type: n,
            user_properties: d.getUserProperties(),
            event_properties: o,
          };
          await u(h).promise,
            "prod" !== window.__STAGE__ && console.log(`AD: ${n}`, o, d);
        } catch (e) {
          console.error(e),
            "Sentry" in window &&
              "function" == typeof window.Sentry.captureException &&
              window.Sentry.captureException(e);
        }
      }
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          let n = { ...e.curiosity.vpt10.props };
          return (
            t.forEach((e) => {
              n[e] = !0;
            }),
            {
              curiosity: {
                ...e.curiosity,
                vpt10: { ...e.curiosity.vpt10, props: n },
              },
            }
          );
        };
      }
      e.on("curiosity/conversion", (t, n) => {
        i(t, n.event, { ...n, ...t.curiosity.conversion, event: void 0 }),
          e.dispatch("curiosity/google", {
            category: "Conversion",
            action: n.event,
          });
      }),
        e.on("curiosity/event", (e, t) => {
          i(e, t.event, { ...t, event: void 0 });
        }),
        e.on("curiosity/visitedPage", () => {}),
        e.on("curiosity/enteredExperiment", (e, t) => {
          let { experiment: n, payload: r } = t;
          u_(n) || i(e, `Entered experiment: SRW ${n}`, r);
        }),
        e.on("curiosity/google", (e, t) => {
          try {
            window.ga &&
              window.ga("send", "event", {
                eventCategory: t.category,
                eventAction: t.action,
                eventLabel: t.label,
                eventValue: t.value,
              }),
              "prod" !== window.__STAGE__ &&
                console.log(`GA: ${t.category}`, t);
          } catch (e) {
            console.error(e),
              "Sentry" in window &&
                "function" == typeof window.Sentry.captureException &&
                window.Sentry.captureException(e);
          }
        }),
        e.on("curiosity/error", (t, n) => {
          let { error: r, message: i } = n;
          e.dispatch("curiosity/event", {
            event: "Error",
            Error: r,
            Message: i,
          }),
            e.dispatch("curiosity/google", {
              category: "Error",
              action: r,
              label: i,
            });
        }),
        e.on("curiosity/fraud", async (e) => {
          let { Identify: t, identify: n } = await di(e),
            r = new t();
          await n(r).promise;
        }),
        e.on("curiosity/setConversionProps", (e, t) => ({
          curiosity: {
            ...e.curiosity,
            conversion: { ...e.curiosity.conversion, ...t },
          },
        })),
        e.on("curiosity/countdown:start", () => {
          clearTimeout(s),
            clearTimeout(o),
            ox.reset(),
            (s = setTimeout(() => e.dispatch("curiosity/vpt10"), 6e5)),
            (o = setTimeout(() => e.dispatch("curiosity/vpt30"), 18e5));
        }),
        e.on("curiosity/countdown:clear", () => {
          clearTimeout(s), clearTimeout(o);
        }),
        e.on("curiosity/vcp5:start", () => {
          clearTimeout(l),
            ox.reset(),
            (l = setTimeout(() => e.dispatch("curiosity/vc5"), 3e5));
        }),
        e.on("curiosity/vcp5:clear", () => {
          clearTimeout(l);
        }),
        e.on("meta/load:processing", () => {
          clearTimeout(o), clearTimeout(s), clearTimeout(l);
        }),
        e.on("curiosity/vc5", () => {
          e.dispatch("curiosity/google", {
            category: "Player",
            action: "Viewed chords for 5 minutes",
          });
        }),
        e.on("curiosity/vpt10", (t) => {
          let n = ox.getTimeSinceLastActivity();
          if (n >= 5) return;
          let r = t.meta,
            i = uN(r),
            a = "Viewed player tab for 10 minutes";
          if (r.current && t.part.current) {
            let t = r.current;
            uA(a, {
              songId: r.songId,
              revisionId: t.revisionId,
              artistId: t.artistId,
              partId: r.partId,
              instrumentId: i && i.instrumentId,
            }),
              e.dispatch("curiosity/google", { category: "Player", action: a }),
              e.dispatch("curiosity/increaseVpt10");
          }
        }),
        e.on("curiosity/vpt30", (t) => {
          let n = ox.getTimeSinceLastActivity();
          if (n >= 5) return;
          let r = t.meta;
          r.current &&
            t.part.current &&
            e.dispatch("curiosity/event", {
              event: "Viewed player tab for 30 minutes",
              ...dm(t),
            });
        }),
        e.on("user/signIn", (t, r) => {
          n(t, r),
            e.dispatch("curiosity/conversion", {
              event: "Signed in",
              "Auth method": "Email",
            });
        }),
        e.on("user/googleSignIn", (t, r) => {
          let { profile: i, isCreated: a } = r;
          n(t, i),
            e.dispatch("curiosity/conversion", {
              event: a ? "Signed up" : "Signed in",
              "Auth method": "Google",
            });
        }),
        e.on("user/signUp", (t, r) => {
          n(t, r),
            e.dispatch("curiosity/conversion", {
              event: "Signed up",
              "Auth method": "Email",
            });
        }),
        e.on("user/profile", (e, t) => {
          n(e, t);
        }),
        e.on("user/subscribePlus", (t, r) => {
          let i = {
            "Payment type": r.paymentType,
            Country: dn.get(r.subscription.countryCode),
            "Braintree Plan": r.subscription.plan.id,
          };
          "subscribe" === r.mode
            ? e.dispatch("curiosity/conversion", { event: "Subscribed", ...i })
            : "update" === r.mode &&
              e.dispatch("curiosity/conversion", {
                event: "Updated subscription",
                ...i,
              }),
            e.dispatch("curiosity/google", {
              category: "Subscription",
              action:
                "subscribe" === r.mode ? "Subscribed" : "Updated subscription",
            }),
            n(t, oI(t, r));
        }),
        e.on("user/signOut", (t) => {
          e.dispatch("curiosity/event", { event: "Signed out" }), r(t);
        }),
        e.on("user/recoverPassword", (e, t) => {
          n(e, t);
        }),
        e.on("user/cancelPlus", (t, r) => {
          n(t, r),
            e.dispatch("curiosity/conversion", {
              event: "Canceled subscription",
            });
        }),
        e.on("user/deactivate", (t) => {
          e.dispatch("curiosity/conversion", { event: "Deactivated account" }),
            r(t);
        }),
        e.on("meta/deleteSong:done", (t, n) =>
          e.dispatch("curiosity/event", {
            event: "Deleted song",
            Artist: n.artist,
            Title: n.title,
            "Song id": n.songId && n.songId.toString(),
          })
        ),
        e.on("meta/deleteSong:error", (t, n) =>
          e.dispatch("curiosity/error", {
            error: "Deleted song",
            message: n.message,
          })
        ),
        e.on("favorites/add", async (t, n) => {
          let { songId: r, song: i } = n;
          return e.dispatch("curiosity/event", {
            event: "Added favorite",
            Title: i.title,
            Artist: i.artist,
            "Song id": r.toString(),
            "Song and track ids": dp(i.songId, t.part.current?.partId),
          });
        }),
        e.on("favorites/delete:processing", async (t, n) => {
          let { songId: r, song: i } = n;
          return e.dispatch("curiosity/event", {
            event: "Removed favorite",
            Title: i.title,
            Artist: i.artist,
            "Song id": r.toString(),
          });
        }),
        e.on("upload/song:uploaded", (t, n) => {
          let { songSubmitted: r, song: i, ext: a } = n;
          r &&
            e.dispatch("curiosity/event", {
              event: "Submitted tab",
              Artist: i.artist,
              Title: i.title,
              "File extension": a,
            });
        }),
        e.on("upload/song:error", (t, n) => {
          let { error: r } = n;
          e.dispatch("curiosity/error", {
            error: "Submitted tab",
            message: r.message,
          });
        }),
        e.on("upload/revision:uploaded", (t, n) => {
          let { revisionSubmitted: r, revision: i, ext: a } = n;
          r &&
            e.dispatch("curiosity/event", {
              event: "Submitted revision",
              Artist: i.artist,
              Title: i.title,
              Via: "GP",
              "File extension": a,
              "Song id": i.songId.toString(),
            });
        }),
        e.on("upload/revision:error", (t, n) => {
          let { error: r } = n;
          e.dispatch("curiosity/error", {
            error: "Submitted revision",
            message: r.message,
          });
        }),
        e.on("meta/load:processing", (e, t) => {
          let { songHasChanged: n } = t;
          if (n) {
            let t = { ...dc };
            return (
              (t["Used countin"] = e.player.isCountin),
              (t["Used metronome"] = e.player.isMetronome),
              {
                curiosity: {
                  ...e.curiosity,
                  vpt10: { ...e.curiosity.vpt10, props: t },
                },
              }
            );
          }
        }),
        e.on("player/changeSpeed", (e, t) => {
          let { speed: n } = t;
          return n <= 75
            ? a("Used speed", "Slowed under 75%")(e)
            : a("Used speed")(e);
        }),
        e.on("player/togglePlay", (e) => {
          let { isMetronome: t, metronomeType: n, canPlay: r } = e.player,
            i = ["Used playback"];
          return (
            t && "voice" === n && r && i.push("Played with Voice Metronome"),
            r &&
              e.player.videoOpened &&
              e.player.video.isLoaded &&
              i.push("Played along with original video"),
            a(...i)(e)
          );
        }),
        e.on("player/toggleLoop", a("Used loop")),
        e.on("player/changePitch", a("Used pitchshift")),
        e.on("player/changeLoop", a("Used loop")),
        e.on("player/toggleCountIn", a("Used countin")),
        e.on("player/toggleMetronome", (e) => {
          let {
            isMetronome: t,
            metronomeType: n,
            canPlay: r,
            shouldPlay: i,
          } = e.player;
          return t && "voice" === n && r && i
            ? a("Used metronome", "Played with Voice Metronome")(e)
            : a("Used metronome")(e);
        }),
        e.on("player/changeMetronome:init", (e, t) => {
          let { isMetronome: n, canPlay: r, shouldPlay: i } = e.player;
          if (n && "voice" === t && r && i)
            return a("Played with Voice Metronome")(e);
        }),
        e.on("player/changeType", (e, t) => {
          let { type: n } = t;
          return "solo" === n
            ? a("Used solo")(e)
            : "mute" === n
            ? a("Used mute")(e)
            : void 0;
        }),
        e.on("curiosity/usedFingerings", (e) =>
          a("Used fingerings for 30 seconds")(e)
        ),
        e.on("screener/set", (t, n) => {
          n &&
            (n.disableEvents ||
              e.dispatch("curiosity/event", {
                event: "Screener shown",
                Header: n.title,
                Name: n.name,
              }));
        }),
        e.on("route/change", (t, n) => {
          let { route: r } = n;
          "tab" !== r.page &&
            "chords" !== r.page &&
            "search" !== r.page &&
            "artist" !== r.page &&
            u2(t),
            e.dispatch("curiosity/countdown:clear"),
            e.dispatch("curiosity/vcp5:clear");
        }),
        e.on("meta/load:done", (t) => {
          "tab" === t.route.page &&
            (u2(t), e.dispatch("curiosity/countdown:start"));
        }),
        e.on("chords/load:done", (t) => {
          "chords" === t.route.page &&
            (u2(t), e.dispatch("curiosity/vcp5:start"));
        }),
        e.on("screener/accept", (t, n) => {
          let { screener: r, value: i } = n;
          r &&
            (r.name.endsWith("NPS")
              ? e.dispatch("curiosity/event", {
                  event: `NPS ${r.name.replace("NPS", "")}`,
                  Value: i,
                })
              : e.dispatch("curiosity/event", {
                  event: `Screener clicked: ${r.name}`,
                }));
        });
    }
    e.on("curiosity/increaseVpt10", (e) => {
      let t = e.curiosity.vpt10.count;
      return (
        l7("sr_vpt10", ++t),
        {
          curiosity: {
            ...e.curiosity,
            vpt10: { ...e.curiosity.vpt10, count: t },
          },
        }
      );
    });
  };
async function df(e) {
  let t = await fetch(tf(`/actions/usertest/${e}/ticket`), { method: "POST" });
  return nQ(t), t.json();
}
async function dy(e) {
  let t = await fetch(tf(`/api/usertest/${e}`));
  return nQ(t), t.json();
}
async function dv(e) {
  let t = JSON.stringify({ token: e.token }),
    n = await fetch(tf("/actions/usertest/ticket"), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: t,
    });
  return nQ(n), n.json();
}
function db(e) {
  try {
    navigator.sendBeacon("/actions/usertest/ticket/idle", e.token);
  } catch (e) {
    console.log(e);
  }
}
function dw(e, t) {
  let n = new AudioContext(),
    r = n.createMediaStreamDestination(),
    i = !1,
    a = !1;
  if (e && e.getAudioTracks().length > 0) {
    let t = n.createGain();
    (t.gain.value = 0.7),
      n.createMediaStreamSource(e).connect(t).connect(r),
      (i = !0);
  }
  return (
    t &&
      t.getAudioTracks().length > 0 &&
      (n.createMediaStreamSource(t).connect(r), (a = !0)),
    i || a ? r.stream.getAudioTracks() : []
  );
}
let dS = (e) =>
    new Promise((t, n) => {
      let r = 0,
        i = setInterval(() => {
          r > 9
            ? (clearInterval(i), n(Error("Max number of attempts")))
            : e.readyState === e.OPEN && (clearInterval(i), t()),
            r++;
        }, 200);
    }),
  dx = async (e, t) => {
    e.readyState !== e.OPEN && (await dS(e)), e.send(t);
  },
  dk = "wss://curiosity.songsterr.com/ut/";
function dC(e) {
  try {
    e.stop();
  } catch (e) {
    console.error(e);
  }
}
function dE(e) {
  try {
    e.close();
  } catch (e) {
    console.error(e);
  }
}
class dT {
  constructor(e) {
    (this.state = "ready"),
      (this.handlers = e),
      (this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
      (this.socket.onclose = this.onSocketClose),
      (this.socket.onerror = this.onError);
  }
  cleanup() {
    this.audioVideoStream && this.audioVideoStream.getTracks().forEach(dC),
      this.voiceStream && this.voiceStream.getTracks().forEach(dC);
  }
  onSocketClose = () => {
    console.log("socket closed"),
      ("ready" === this.state || "active" === this.state) &&
        ((this.state = "stopped"), this.cleanup(), this.handlers.onClose());
  };
  onError = (e) => {
    ("ready" === this.state || "active" === this.state) &&
      ((this.state = "failed"),
      this.cleanup(),
      dE(this.socket),
      this.handlers.onError(e));
  };
  onTrackEnded = () => {
    ("ready" === this.state || "active" === this.state) &&
      ((this.state = "stopped"),
      this.cleanup(),
      dE(this.socket),
      this.handlers.onTurnedOff());
  };
  async connect(e, t, n, r, i) {
    try {
      for (let e of ((this.audioVideoStream =
        await navigator.mediaDevices.getDisplayMedia({ audio: !0, video: !0 })),
      this.audioVideoStream.getTracks()))
        e.onended = this.onTrackEnded;
      for (let e of ((this.voiceStream =
        await navigator.mediaDevices.getUserMedia({ video: !1, audio: !0 })),
      this.voiceStream.getTracks()))
        e.onended = this.onTrackEnded;
      let a = new RTCPeerConnection(null),
        s = new MediaStream([
          ...this.audioVideoStream.getVideoTracks(),
          ...dw(this.audioVideoStream, this.voiceStream),
        ]);
      for (let e of s.getTracks()) a.addTrack(e, s);
      let o = await a.createOffer({
        OfferToReceiveAudio: !1,
        OfferToReceiveVideo: !1,
      });
      a.setLocalDescription(o),
        (this.socket.onmessage = async (e) => {
          try {
            let t = JSON.parse(e.data);
            await a.setRemoteDescription(
              new RTCSessionDescription({ type: "answer", sdp: t.answer })
            ),
              (this.state = "active"),
              this.handlers.onReady();
          } catch (e) {
            this.onError(e);
          }
        });
      let l = {};
      for (let e of Object.keys(n))
        r &&
          (l.Amplitude = `https://analytics.amplitude.com/demax-inc/project/308889/search/${r}`),
          "active" === n[e].status && (l[e] = n[e].segment);
      await dx(
        this.socket,
        JSON.stringify({
          cmd: "OFFER",
          offer: o.sdp,
          ticket: e,
          email: t,
          properties: l,
          stage: window.__STAGE__,
          isAdditional: i,
        })
      );
    } catch (e) {
      this.onError(e);
    }
  }
  async sendEmail(e) {
    await dx(this.socket, JSON.stringify({ cmd: "EMAIL", email: e }));
  }
  stop() {
    ("ready" === this.state || "active" === this.state) &&
      ((this.state = "stopped"),
      this.cleanup(),
      dE(this.socket),
      this.handlers.onStop());
  }
}
let dP = "hidden",
  d_ = "intro",
  dL = "questions",
  dA = "not_chosen",
  dI = "email",
  dN = "feedback",
  dM = "start",
  dB = "instructions",
  dO = "restart",
  dD = "survey",
  dz = "farewell";
function dR() {
  window.removeEventListener("visibilitychange", r),
    i && (clearTimeout(i), (i = null));
}
let d$ = { ignoreDailyTimespan: !0, ignoreSingleAppearance: !0 };
async function dF(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  try {
    let a = await df(t);
    try {
      let s = await dy(t);
      return (
        e("ut/ticket", { ticket: a, script: s }),
        (i = setTimeout(() => {
          e("ut/idle");
        }, 6e4 + n)),
        (r = () => {
          let t;
          document.hidden
            ? (t = setTimeout(() => {
                db(a),
                  e("ut/idle"),
                  window.removeEventListener("visibilitychange", r);
              }, 3e4))
            : clearTimeout(t);
        }),
        window.addEventListener("visibilitychange", r),
        { ticket: a, script: s }
      );
    } catch (t) {
      await dV(e, a);
    }
  } catch (e) {
    console.error(e);
  }
}
async function dV(e, t) {
  try {
    await dv(t), e("ut/ticket:dismiss");
  } catch (e) {
    console.error(e);
  }
}
function dU(e) {
  try {
    let { recorder: t, ticket: n, script: r } = e.get().ut;
    t && t.stop(),
      e.dispatch("curiosity/event", {
        event: "UT Recorded",
        name: r.name,
        URL: n.urlToGet,
      });
  } catch (e) {
    console.error(e);
  }
}
async function dH(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.get();
  if ("ready" === n.ut.recorderState || "failed" === n.ut.recorderState)
    try {
      let r = new dT({
        onReady: () => e.dispatch("ut/start:done"),
        onStop: () => e.dispatch("ut/stop:done"),
        onClose: () => e.dispatch("ut/stop:closed"),
        onTurnedOff: () => e.dispatch("ut/stop:turnedOff"),
        onError: (t) => e.dispatch("ut/error", t),
      });
      e.dispatch("ut/start:processing", r), (n = e.get());
      let i = n.user,
        a =
          n.ut.email ||
          (i.isLoggedIn ? i.profile.email : "anonymous@songsterr.com"),
        { getDeviceId: s } = await di(n);
      await r.connect(n.ut.ticket, a, n.experiments, s(), t);
    } catch (t) {
      console.error(t), e.dispatch("ut/error", t);
    }
}
function dj(e, t) {
  dG(e, t);
  let n = t.startUrl || "/";
  (n = n.includes("?") ? `${n}&ut=on` : `${n}?ut=on`),
    (window.location.href = n);
}
function dG(e, t) {
  of.set("utTicket", e), of.set("utScript", t);
}
function dW() {
  let e = of.get("utTicket"),
    t = of.get("utScript");
  return { ticket: e, script: t };
}
let dq = (e) => {
  e.on("@init", () => ({
    ut: {
      recorderState: "ready",
      recorder: void 0,
      ticket: void 0,
      script: void 0,
      stage: dP,
      email: void 0,
      steps: { [dL]: 0, [dB]: 0, [dD]: 0 },
      isAdditional: !1,
      isClosing: !1,
      isHidden: !1,
    },
  })),
    e.on("ut/close", (e, t) => ({ ut: { ...e.ut, isClosing: t } })),
    e.on("ut/hide", (e, t) => ({ ut: { ...e.ut, isHidden: t } })),
    e.on("ut/ticket", (e, t) => {
      let { ticket: n, script: r } = t;
      return { ut: { ...e.ut, ticket: n, script: r } };
    }),
    e.on("ut/ticket:dismiss", (e) => ({ ut: { ...e.ut, ticket: void 0 } })),
    e.on("ut/email", (t, n) => {
      let { name: r } = t.ut.script;
      return (
        e.dispatch("curiosity/event", {
          event: "UT Email Submitted",
          name: r,
          email: n,
        }),
        t.ut.recorder?.sendEmail(n),
        { ut: { ...t.ut, email: n, stage: dB } }
      );
    }),
    e.on("ut/continue", (t, n) => {
      if (n) {
        e.dispatch("ut/load", n), dG();
        return;
      }
      let { ticket: r, script: i } = dW();
      if (r && i) {
        if (!cZ(ee.UT_RECORDER, d$)) return;
        return (
          e.dispatch("curiosity/event", {
            event: "UT Recording Requested",
            name: i.name,
          }),
          { ut: { ...t.ut, ticket: r, script: i, stage: dM } }
        );
      }
    }),
    e.on("ut/load", async (t, n) => {
      let r = await dF(e.dispatch, n);
      e.dispatch("curiosity/event", {
        event: "UT Recording Requested",
        name: n,
      }),
        r && r?.script && e.dispatch("ut/load:done", dM);
    }),
    e.on("ut/feedbackLoad", async (t, n) => {
      let r = await dF(e.dispatch, n);
      r && r.script && e.dispatch("ut/load:done", dN);
    }),
    e.on("ut/load:done", (e, t) => {
      if (cZ(ee.UT_RECORDER, d$)) return { ut: { ...e.ut, stage: t } };
    }),
    e.on("ut/start", (t) => {
      dR(), dH(e, t.ut.isAdditional);
    }),
    e.on("ut/start:done", (t) => {
      let n,
        { ut: r, user: i } = t;
      dG();
      let { name: a, emailRequest: s } = r.script;
      return (
        !s || i.isLoggedIn
          ? ((n = dB),
            e.dispatch("curiosity/event", {
              event: "UT Instructions Shown",
              name: a,
            }))
          : ((n = dI),
            e.dispatch("curiosity/event", {
              event: "UT Email Requested",
              name: a,
            })),
        {
          ut: { ...r, recorderState: "active", recorder: r.recorder, stage: n },
        }
      );
    }),
    e.on("ut/start:processing", (e, t) => ({
      ut: { ...e.ut, recorderState: "starting", recorder: t },
    })),
    e.on("ut/terminate", (t) => {
      let { ut: n } = t;
      switch ((cY(ee.UT_RECORDER), n.stage)) {
        case d_:
        case dL:
          dV(e.dispatch, n.ticket);
          break;
        case dM:
          dV(e.dispatch, n.ticket), dG(), e.dispatch("navigate", "/");
          break;
        case dI:
        case dB:
        case dO:
        case dD:
          dV(e.dispatch, n.ticket), dU(e), e.dispatch("navigate", "/");
      }
      return (
        e.dispatch("curiosity/event", {
          event: "UT Session Finished",
          name: n?.script.name,
        }),
        {
          ut: {
            recorderState: "ready",
            recorder: void 0,
            ticket: void 0,
            script: void 0,
            stage: dP,
            email: void 0,
            steps: { [dL]: 0, [dB]: 0, [dD]: 0 },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1,
          },
        }
      );
    }),
    e.on("ut/idle", (t) => {
      let { ut: n, screener: r } = t;
      return (
        e.dispatch("screener/dismiss", r.active),
        {
          ut: {
            ...n,
            recorderState: "ready",
            recorder: void 0,
            script: void 0,
            stage: dP,
            email: void 0,
            steps: { [dL]: 0, [dB]: 0, [dD]: 0 },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1,
          },
        }
      );
    }),
    e.on(
      "ut/error",
      (t, n) => (
        e.dispatch("curiosity/event", { event: "UT Error", message: n }),
        { ut: { ...t.ut, recorderState: "failed", recorder: void 0 } }
      )
    ),
    e.on("ut/stop:done", (e) => ({
      ut: { ...e.ut, recorderState: "ready", recorder: void 0 },
    })),
    e.on("ut/stop:closed", (e) => ({
      ut: { ...e.ut, recorderState: "ready", recorder: void 0 },
    })),
    e.on("ut/stop:turnedOff", (e) => ({
      ut: {
        ...e.ut,
        recorderState: "ready",
        recorder: void 0,
        stage: dO,
        isAdditional: !0,
      },
    })),
    e.on("ut/stage", (t, n) => {
      let { ut: r } = t,
        { stage: i, step: a } = n,
        { ticket: s, script: o } = r;
      switch (i) {
        case dz:
          dU(e),
            e.dispatch("curiosity/event", {
              event: "UT End Dialog Shown",
              name: r?.script.name,
              domain: window.location.hostname,
            });
          break;
        case dA:
          dV(e.dispatch, s);
          break;
        case dL:
          if (o.questions && o.questions.length && !(a >= o.questions.length))
            e.dispatch("curiosity/event", {
              event: "UT Question Shown",
              name: r?.script.name,
              question: o.questions[a],
            });
          else {
            dj(s, o);
            return;
          }
      }
      return {
        ut: {
          ...r,
          stage: i,
          steps: void 0 !== a ? { ...r.steps, [i]: a } : r.steps,
        },
      };
    }),
    e.on("screener/dismiss", (t) => {
      let { ut: n } = t;
      n.ticket && (dR(), dV(e.dispatch, n.ticket));
    }),
    e.on("screener/accept", (e, t) => {
      let { screener: n } = t;
      if (n.usertest) {
        let { script: t, ticket: n } = e.ut;
        if (!t || !n || !cZ(ee.UT_RECORDER, d$)) return;
        let r = d_;
        if (t && !t.intro) {
          if (t.questions && t.questions.length) r = dL;
          else {
            dj(n, t);
            return;
          }
        }
        return (
          dR(),
          {
            ut: {
              ...e.ut,
              stage: r,
              steps: { [dL]: 0, [dB]: 0, [dD]: 0 },
              isAdditional: !1,
            },
          }
        );
      }
    });
};
async function dX() {
  let e = tf("/api/screeners/decide"),
    t = await fetch(e, { credentials: "include" });
  return nQ(t), t.json();
}
let dY = "ScrShwn";
async function dK(e) {
  try {
    let t = await dX(),
      n = e.get();
    (t = t.filter((e) => {
      let t = e.filter.visitedFirstTime;
      if (
        "unset" !== t &&
        (("yes" === t && window.__HAS_BEEN_SEEN_BEFORE__) ||
          ("no" === t && !window.__HAS_BEEN_SEEN_BEFORE__))
      )
        return !1;
      let r = e.filter.experiment;
      if (r) {
        let [e, t] = r.split(" "),
          [i, a] = e.split("=");
        if (n.experiments[i]?.status !== "active") return !1;
        if (t) {
          let [e, n] = t.split("<days<"),
            r = uP(i);
          if (null !== r && !(r >= +e && r <= +n)) return !1;
        }
        return void 0 === a || n.experiments[i]?.segment === a;
      }
      return !0;
    })).length && e.dispatch("screener/loaded", t);
  } catch (e) {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(e),
      console.error(e);
  }
}
function dJ(e) {
  let t = new Date();
  t.setTime(t.getTime() + 7776e6),
    (document.cookie = `ScrShwn-${
      e.cookie
    }=true;expires=${t.toUTCString()};path=/`);
}
async function dZ(e, t) {
  let n = e.get(),
    r = [];
  for (let e of n.screener.candidates) {
    let i = e.filter.bassPage,
      a = uN(n.meta);
    if (
      "unset" !== i &&
      (!a || ("yes" === i && !a.isBassGuitar) || ("no" === i && a.isBassGuitar))
    )
      continue;
    let s = e.filter.drumsPage;
    ("unset" === s ||
      (a && ("yes" !== s || a.isDrums) && ("no" !== s || !a.isDrums))) &&
      (!e.filter.showAfterAction ||
        (t.event && e.filter.showAfterAction === t.event)) &&
      r.push(e);
  }
  if (r.length) {
    let t = r[Math.floor(Math.random() * r.length)];
    if (t.usertest) {
      let n = 1e3 * (t.filter?.delay || 0),
        r = await dF(e.dispatch, t.usertest, n);
      if (!r) return;
    }
    if ((clearTimeout(a), t.filter.delay)) {
      a = setTimeout(() => {
        cZ(ee.SCREENER) && e.dispatch("screener/set", t);
      }, 1e3 * t.filter.delay);
      return;
    }
    cZ(ee.SCREENER) && e.dispatch("screener/set", t);
  }
}
function dQ(e, t) {
  let n = e.get();
  n.screener.candidates.length && tM(() => dZ(e, { event: t }));
}
let d1 = (e) => {
  e.on(
    "screener/set",
    (e, t) => (
      t && dJ(t), { screener: { ...e.screener, candidates: [], active: t } }
    )
  ),
    e.on(
      "screener/loaded",
      (t, n) => (
        tM(() => dZ(e, {})),
        { screener: { ...t.screener, candidates: n, active: void 0 } }
      )
    ),
    e.on("screener/dismiss", (e) => {
      let { screener: t } = e;
      return (
        cY(ee.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
      );
    }),
    e.on("screener/accept", (e) => {
      let { screener: t } = e;
      return (
        cY(ee.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
      );
    });
  let t = (t, n) => {
    let { event: r } = n;
    t.screener.candidates.length && tM(() => dZ(e, { event: r }));
  };
  e.on("curiosity/conversion", t),
    e.on("curiosity/event", t),
    e.on("curiosity/vpt10", (t) => {
      t.screener.candidates.length &&
        tM(() => dZ(e, { event: "Viewed player tab for 10 minutes" }));
    }),
    e.on("screener/pressedEditor", () => dQ(e, "PressedEditor"));
};
async function d0(e) {
  let t = tf("/api/textpage/" + e),
    n = await fetch(t);
  return nQ(n), n.json();
}
async function d2(e, t) {
  let n = e.get().textpage;
  if (n.slug !== t || n.isError)
    try {
      e.dispatch("textpage/load:processing", t);
      let n = await d0(t);
      n.slug === e.get().textpage.slug && e.dispatch("textpage/load:done", n);
    } catch (n) {
      console.error(n),
        t === e.get().textpage.slug && e.dispatch("textpage/load:error");
    }
}
let d5 = (e) => {
  e.on("textpage/load:processing", (e, t) => ({
    textpage: { slug: t, title: "", content: "", isLoading: !0, isError: !1 },
  })),
    e.on("textpage/load:done", (e, t) => ({
      textpage: { ...t, isLoading: !1, isError: !1 },
    })),
    e.on("textpage/load:error", (e) => ({
      textpage: {
        ...e.textpage,
        title: "",
        content: "",
        isLoading: !1,
        isError: !0,
      },
    }));
};
async function d4() {
  let e = tf("/api/faq/compact"),
    t = await fetch(e);
  nQ(t);
  let n = await t.json();
  return n.filter((e) => e.isSRW);
}
async function d3(e) {
  if (void 0 === e.get().faq.content)
    try {
      e.dispatch("faq/load:processing");
      let t = await d4();
      e.dispatch("faq/load:done", t);
    } catch (t) {
      console.error(t), e.dispatch("faq/load:error");
    }
}
let d9 = (e) => {
    e.on("faq/load:processing", () => ({
      faq: { content: void 0, isLoading: !0, isError: !1 },
    })),
      e.on("faq/load:done", (e, t) => {
        let { experiments: n, user: r } = e;
        if (
          en(r) &&
          (n.paid_fingerings?.segment === "ut" ||
            n.paid_fingerings?.segment === "on")
        ) {
          let e = t.find((e) => "Songsterr Player" === e.section);
          if (e) {
            let t = e.records.find(
              (e) => "Keyboard Shortcuts/Hotkeys" === e.question
            );
            if (t) {
              let e = t.answer.find(
                (e) => "ul" === e.tag && e.children?.length !== 0
              );
              e &&
                e.children.push({
                  tag: "li",
                  attrs: null,
                  children: ["G - Turn fingerings on/off"],
                });
            }
          }
        } else {
          let e = t.find((e) => "Miscellaneous" === e.section);
          e &&
            (e.records = e.records.filter(
              (e) => 'What is the "Guitar Fingering" beta?' !== e.question
            ));
        }
        return { faq: { content: t, isLoading: !1, isError: !1 } };
      }),
      e.on("faq/load:error", () => ({
        faq: { content: void 0, isLoading: !1, isError: !0 },
      }));
  },
  d8 = ["chordpro1", "chordpro2", "chordpro3"];
async function d6(e, t, n) {
  let r = `/api/chords/${e}${t ? `/${t}` : ""}`,
    i = await tE(() => tf(r), "meta", n);
  return n.aborted || !i ? null : (i.title && (i.title = nw(i.title)), i);
}
async function d7(e, t, n, r) {
  let i =
      arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : { Accept: "text/plain" },
    a = `chordpro_${t}_${n || ""}`,
    s = await tI(a);
  if (s && s.data) return s.data;
  let o = `${e}/${t}/${n}.chordpro`,
    l = (e) => {
      let t = (e % d8.length) + 1;
      return t < d8.length
        ? `https://${d8[t]}.songsterr.com/${o}`
        : `https://www.songsterr.com/cdn/chordpro/${o}`;
    },
    c = await tE(l, "chordpro", r, i);
  return !c || r.aborted ? null : (await tN(a, { data: c }), c);
}
function pe(e) {
  let t = e.get().chords;
  t.current &&
    !t.isFailed &&
    e.dispatch("chords/load:done", {
      songId: t.songId,
      chordsRevisionId: t.chordsRevisionId,
      current: t.current,
    });
}
async function pt(e, t, n) {
  let r = new t$();
  try {
    let i = e.get().chords,
      a = i.loading;
    a && a.ac.abort();
    let s = i.songId !== t,
      o = i.chordsRevisionId !== n;
    if (!i.isFailed && i.current && !s && !o) {
      await e.dispatch("chords/load:done", {
        songId: t,
        chordsRevisionId: n,
        current: i.current,
      });
      return;
    }
    if (
      (await e.dispatch("chords/load:processing", {
        songId: t,
        chordsRevisionId: n,
        songHasChanged: s,
        chordsRevisionHasChanged: o,
        ac: r,
      }),
      r.signal.aborted)
    )
      return;
    let l = e.get().chords.current;
    if (
      (!l || l.songId !== t || (n && l.chordsRevisionId !== n)) &&
      ((l = await d6(t, n, r.signal)), r.signal.aborted || !l)
    )
      return;
    await e.dispatch("chords/load:done", {
      songId: t,
      chordsRevisionId: n,
      current: l,
    });
  } catch (i) {
    if (r.signal.aborted) return;
    e.dispatch("chords/load:error", {
      songId: t,
      chordsRevisionId: n,
      error: i,
    });
  }
}
let pn = (e) => {
    e.on("chords/load:processing", (e, t) => {
      let { songId: n, chordsRevisionId: r, ac: i } = t;
      return {
        chords: {
          ...e.chords,
          loading: { songId: n, chordsRevisionId: r, ac: i },
        },
      };
    }),
      e.on("chords/load:done", (e, t) => {
        let { songId: n, chordsRevisionId: r, current: i } = t;
        return {
          chords: {
            ...e.chords,
            current: i,
            songId: n,
            chordsRevisionId: r,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
        };
      }),
      e.on("chords/load:error", (e, t) => {
        let { songId: n, chordsRevisionId: r, error: i } = t;
        return {
          chords: {
            ...e.chords,
            current: null,
            songId: n,
            chordsRevisionId: r,
            isFailed: !0,
            isNetworkFailed: i instanceof tx && 0 === i.status,
            isNotFound:
              i instanceof tx && (404 === i.status || 400 === i.status),
            loading: null,
          },
        };
      }),
      e.on("route/change", (t, n) => {
        let { routeContent: r } = n;
        r && "chords" === r.page && pt(e, r.songId, r.chordsRevisionId);
      });
  },
  pr = (e) => {
    e.on("chords/load:done", async (t, n) => {
      let { current: r } = n,
        i = r.songId,
        a = r.chordsRevisionId,
        s = new t$();
      try {
        let n = t.chordpro.loading;
        if (n) {
          if (i === n.songId && a === n.chordsRevisionId) return;
          n.ac.abort();
        }
        if (
          !t.chordpro.isFailed &&
          t.chordpro.current &&
          i === t.chordpro.songId &&
          a === t.chordpro.chordsRevisionId
        ) {
          e.dispatch("chordpro/load:done", {
            songId: i,
            chordsRevisionId: a,
            current: t.chordpro.current,
          });
          return;
        }
        await e.dispatch("chordpro/load:processing", {
          songId: i,
          chordsRevisionId: a,
          ac: s,
        });
        let o = await d7(i, a, r.chordpro, s.signal);
        if (!o || s.signal.aborted) return;
        await e.dispatch("chordpro/load:raw", {
          songId: i,
          chordsRevisionId: a,
          chordpro: o,
          signal: s.signal,
        });
      } catch (t) {
        if ((console.log("chordpro error", s.signal.aborted), s.signal.aborted))
          return;
        await e.dispatch("chordpro/load:error", {
          songId: i,
          chordsRevisionId: a,
          error: t,
        });
      }
    }),
      e.on("chordpro/load:processing", (e, t) => {
        let { songId: n, chordsRevisionId: r, ac: i } = t;
        return {
          chordpro: {
            ...e.chordpro,
            loading: { songId: n, chordsRevisionId: r, ac: i },
          },
        };
      }),
      e.on("chordpro/load:raw", async (t, n) => {
        let { songId: r, chordsRevisionId: i, chordpro: a } = n;
        try {
          let t = (await import("./split.e33350ac.js")).split,
            n = t(a);
          e.dispatch("chordpro/load:done", {
            songId: r,
            chordsRevisionId: i,
            current: n,
          });
        } catch (t) {
          e.dispatch("chordpro/load:error", {
            songId: r,
            chordsRevisionId: i,
            error: t,
          });
        }
      }),
      e.on("chordpro/load:done", (e, t) => {
        let { songId: n, chordsRevisionId: r, current: i } = t;
        return {
          chordpro: {
            ...e.chordpro,
            current: i,
            songId: n,
            chordsRevisionId: r,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          },
        };
      }),
      e.on("chordpro/load:error", (e, t) => {
        let { songId: n, chordsRevisionId: r, error: i } = t;
        return {
          chordpro: {
            ...e.chordpro,
            current: null,
            songId: n,
            chordsRevisionId: r,
            isFailed: !0,
            isNetworkFailed: i instanceof tx && 0 === i.status,
            isNotFound:
              i instanceof tx && (404 === i.status || 400 === i.status),
            loading: null,
          },
        };
      }),
      e.on("chords/load:processing", (e, t) => ({
        chordpro: { ...e.chordpro, current: null },
      })),
      e.on("chordpro/load:error", (e, t) => {
        let { error: n } = t;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n);
      });
  },
  pi = (e) => {
    e.on("cursor/failed", () => ({
      cursor: {
        isFailed: !0,
        position: { cursor: 0, loopStart: 0, loopEnd: 0 },
      },
    })),
      e.on("cursor/failed", (e, t) => {
        let { error: n } = t;
        try {
          "Sentry" in window &&
            "function" == typeof window.Sentry.captureException &&
            window.Sentry.captureException(n);
        } catch (e) {}
        console.error(n);
      }),
      e.on("meta/load:processing", (e, t) => {
        let { songHasChanged: n } = t;
        if (n && e.cursor && e.cursor.isFailed)
          return { cursor: { ...e.cursor, isFailed: !1 } };
      }),
      e.on("part/load:done", (e) => {
        if (e.cursor && e.cursor.isFailed)
          return { cursor: { ...e.cursor, isFailed: !1 } };
      }),
      e.on("cursor/loop", (t, n) => {
        let { loopStartLayout: r, loopEndLayout: i, side: a } = n,
          s = sn(t.part.current, t.cursor.position.cursor, r, i, a);
        (s.cursor != t.cursor.position.cursor ||
          s.loopStart != t.cursor.position.loopStart ||
          s.loopEnd != t.cursor.position.loopEnd) &&
          e.dispatch("cursor/move", s);
      }),
      e.on("cursor/move", (e, t) => ({ cursor: { ...e.cursor, position: t } })),
      e.on("cursor/move", (e) => {
        lp(e.player, e.cursor);
      }),
      e.on("player/toggleLoop", (e) => {
        let t = e.player.audio,
          n = e.player.video,
          r = 0 !== e.cursor.position.loopEnd,
          i = t.getCursor(),
          a = {
            ...e.cursor,
            position: { cursor: i, loopStart: 0, loopEnd: 0 },
          };
        if (!r && e.part.current) {
          let t = se(e.part.current, i);
          (a.position.loopStart = t.loopStart),
            (a.position.loopEnd = t.loopEnd);
        }
        return (
          t.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
          n.seek(a.position.cursor, a.position.loopStart, a.position.loopEnd),
          lp(e.player, a),
          { cursor: a }
        );
      }),
      e.on("cursor/backspace", (t) => {
        let { loopStart: n, loopEnd: r } = t.cursor.position;
        e.dispatch("cursor/move", { cursor: n, loopStart: n, loopEnd: r });
      }),
      e.on("cursor/left", (t) => {
        let n = t.part.current;
        if (n) {
          let { loopStart: r, loopEnd: i } = t.cursor.position,
            a = a8(n, t.player.audio.getCursor(), "left"),
            s = a.measureLayout.measure.index,
            o = a.measureLayout.beatsLayouts[0],
            l = r;
          if (a !== o) {
            let e = io(o);
            l = e > r ? e : r;
          } else if (s > 0) {
            o = iH(n.measures[s - 1]).beatsLayouts[0];
            let e = io(o),
              t = il(o);
            l = 0 === i || r <= e ? e : r <= t ? t : r;
          }
          e.dispatch("cursor/move", { cursor: l, loopStart: r, loopEnd: i });
        }
      }),
      e.on("cursor/right", (t) => {
        let n = t.part.current;
        if (n) {
          let r;
          let { loopStart: i, loopEnd: a } = t.cursor.position,
            s = a8(n, t.player.audio.getCursor(), "left"),
            o = s.measureLayout.measure.index,
            l = null;
          if (o < n.measures.length - 1) {
            r = iH(n.measures[o + 1]).beatsLayouts[0];
            let e = io(r),
              t = il(r);
            0 === a || t < a ? (l = t) : e < a && (l = e);
          }
          null !== l &&
            e.dispatch("cursor/move", { cursor: l, loopStart: i, loopEnd: a });
        }
      }),
      e.on("cursor/up", (t) => {
        let n = t.part.current,
          r = t.part.lines.lines;
        if (n && r) {
          let { loopStart: i, loopEnd: a } = t.cursor.position,
            s = a8(n, t.player.audio.getCursor(), "left"),
            o = s.measureLayout.lineLayout.line.index;
          if (o > 0) {
            let t = r[o - 1],
              n = si(t, s.absoluteX, "left"),
              l = null,
              c = io(n),
              u = il(n);
            0 === a || i <= c ? (l = c) : i <= u && (l = u),
              null !== l &&
                e.dispatch("cursor/move", {
                  cursor: l,
                  loopStart: i,
                  loopEnd: a,
                });
          }
        }
      }),
      e.on("cursor/down", (t) => {
        let n = t.part.current,
          r = t.part.lines.lines;
        if (n && r) {
          let { loopStart: i, loopEnd: a } = t.cursor.position,
            s = a8(n, t.player.audio.getCursor(), "left"),
            o = s.measureLayout.lineLayout.line.index;
          if (o < r.length - 1) {
            let t = r[o + 1],
              n = si(t, s.absoluteX, "left"),
              l = null,
              c = io(n),
              u = il(n);
            0 === a || u < a ? (l = u) : c < a && (l = c),
              l &&
                e.dispatch("cursor/move", {
                  cursor: l,
                  loopStart: i,
                  loopEnd: a,
                });
          }
        }
      }),
      e.on("cursor/shiftRight", (t) => {
        let n = t.part.current;
        if (n) {
          let r, i;
          let { loopStart: a, loopEnd: s } = t.cursor.position;
          if (0 === s) return;
          let o = a8(n, s, "left"),
            l = o.measureLayout.measure,
            c = n.measures[l.index + 1];
          if (!c) return;
          let u = iH(c).beatsLayouts;
          if (s < ic(u[0])) r = ic((i = u[0]));
          else {
            let e = ij(c).beatsLayouts;
            r = iu((i = e[e.length - 1]));
          }
          let d = t.player.audio.getCursor();
          e.dispatch("cursor/move", { cursor: d, loopStart: a, loopEnd: r });
        }
      }),
      e.on("cursor/shiftLeft", (t) => {
        let n = t.part.current;
        if (n) {
          let r, i;
          let { loopStart: a, loopEnd: s } = t.cursor.position;
          if (0 === s) return;
          let o = a8(n, s, "left"),
            l = o.measureLayout.measure,
            c = n.measures[l.index - 1];
          if (!c) return;
          let u = iH(l).beatsLayouts;
          if (
            a >=
            (r =
              s > ic(u[0]) ? ic((i = u[0])) : ic((i = iH(c).beatsLayouts[0])))
          )
            return;
          let d = t.player.audio.getCursor();
          e.dispatch("cursor/move", { cursor: d, loopStart: a, loopEnd: r });
        }
      });
  };
async function pa(e, t, n) {
  let r;
  r =
    "tags" === e.page
      ? `/api/next/tags${t.page ? `?page=${t.page}` : ""}`
      : `/api/next/tags/${e.name}${t.page ? `?page=${t.page}` : ""}`;
  let i = await tE(() => tf(r), "tags", n);
  return n.aborted || !i ? null : i;
}
function ps(e, t) {
  return (
    !!t &&
    (("tag" === e.page && "tag" === t.page && e.name === t.name) ||
      ("tags" === e.page && "tags" === t.page))
  );
}
function po(e, t) {
  return (!e.page && !t.page) || e.page === t.page;
}
async function pl(e, t, n) {
  let r = new t$();
  try {
    let i = e.get().tags,
      a = i.loading;
    if ((a && a.ac.abort(), ps(t, i.route) && po(n, i.query))) {
      await e.dispatch("tags/load:done", {
        route: t,
        query: n,
        content: i.content,
      });
      return;
    }
    if (
      (await e.dispatch("tags/load:processing", { route: t, query: n, ac: r }),
      r.signal.aborted)
    )
      return;
    let s = await pa(t, n, r.signal);
    await e.dispatch("tags/load:done", { route: t, query: n, content: s });
  } catch (i) {
    if (r.signal.aborted) return;
    console.error(i),
      await e.dispatch("tags/load:error", { route: t, query: n, error: i });
  }
}
let pc = (e) => {
    e.on("route/change", (t, n) => {
      let { routeContent: r, queryContent: i } = n;
      r && ("tag" === r.page || "tags" === r.page) && pl(e, r, i || {});
    }),
      e.on("tags/load:processing", (e, t) => {
        let { route: n, query: r, ac: i } = t;
        return { tags: { ...e.tags, loading: { route: n, query: r, ac: i } } };
      }),
      e.on("tags/load:done", (e, t) => {
        let { route: n, query: r, content: i } = t;
        return {
          tags: {
            ...e.tags,
            content: i,
            route: n,
            query: r,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
        };
      }),
      e.on("tags/load:error", (e, t) => {
        let { route: n, query: r, error: i } = t;
        return {
          tags: {
            ...e.tags,
            current: null,
            route: n,
            query: r,
            loading: null,
            isFailed: !0,
            isNetworkFailed: i instanceof tx && 0 === i.status,
            isNotFound:
              i instanceof tx && (404 === i.status || 400 === i.status),
          },
        };
      }),
      e.on("tags/load:error", (e, t) => {
        let { error: n } = t;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n);
      });
  },
  pu = (e) => {
    e.on("chords/load:processing", () => ({ chordDiagram: [] })),
      e.on("chordDiagram/clear", () => ({ chordDiagram: [] })),
      e.on("chordDiagram/open", (e, t) => {
        let n = e.chordDiagram.find((e) => e.chord === t.chord);
        return n
          ? { chordDiagram: e.chordDiagram.filter((e) => e !== n) }
          : { chordDiagram: [...e.chordDiagram, t] };
      }),
      e.on("chordDiagram/close", (e, t) => ({
        chordDiagram: e.chordDiagram.filter((e) => e !== t),
      }));
  };
async function pd(e, t, n) {
  let r = tf(`/api/tab-editor?songId=${e}&part=${t}&revision=${n}`),
    i = await fetch(r);
  nQ(i);
  let a = await i.json();
  if (!a.data) return;
  let s = JSON.parse(a.data),
    o = Array(s.measuresCount);
  return (
    s.packedData.forEach((e) => {
      let t = e.index;
      delete e.index, (o[t] = e);
    }),
    { songId: a.songId, part: a.part, revision: a.revision, data: o }
  );
}
async function pp(e, t, n, r) {
  let i = tf("/api/tab-editor"),
    a = { songId: e, part: t, revision: n },
    s = [];
  r.forEach((e, t) => {
    e && s.push({ ...e, index: t });
  }),
    0 !== s.length &&
      (a.data = JSON.stringify({ measuresCount: r.length, packedData: s }));
  let o = await nZ(i, a);
  return nQ(o), o.json();
}
async function ph(e) {
  let t = tf(`/api/tab-editor/${e}`),
    n = await fetch(t);
  nQ(n);
  let r = await n.json();
  if (!r.data) return;
  let i = JSON.parse(r.data),
    a = Array(i.measuresCount);
  return (
    i.packedData.forEach((e) => {
      let t = e.index;
      delete e.index, (a[t] = e);
    }),
    { songId: r.songId, part: r.part, revision: r.revision, data: a }
  );
}
async function pm(e, t) {
  let n = tf(`/api/tab-editor/admin-data?offset=${e}&limit=${t}`),
    r = await fetch(n);
  return nQ(r), r.json();
}
let pg = function () {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : [0, 0, 0, 0, 0, 0],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = e[n.string] + n.fret;
    return r - e[t];
  },
  pf = (e, t) => {
    let n = e.measures.find((e) => e.index === t.measure),
      r = n?.voices.find((e) => e.index === t.voice);
    return r?.beats.find((e) => e.index === t.beat);
  },
  py = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = e[t.measure];
    return n?.beats.find((e) => e.beatNum === t.beat && e.voice === t.voice);
  },
  pv = (e, t, n) => {
    let r = pg(n, t.string, e);
    return r === t.fret;
  },
  pb = (e, t, n) => {
    if (e.edit?.fret === "" && t.edit) {
      let r = t.edit,
        i = { string: r.string, fret: parseInt(r.fret) };
      return pv(e.note, i, n);
    }
    if (t.edit?.fret === "" && e.edit) {
      let r = e.edit,
        i = { string: r.string, fret: parseInt(r.fret) };
      return pv(t.note, i, n);
    }
    return !1;
  },
  pw = (e) => {
    let {
        originalBeat: t,
        editedBeat: n,
        currentString: r,
        string: i,
        tuning: a,
      } = e,
      s = t.notes.find((e) => e.string === r),
      o = n?.editedNotes.find((e) => e.string === r),
      l = t.notes.find((e) => e.string === i),
      c = n?.editedNotes.find((e) => e.string === i);
    return pb({ note: s, edit: o }, { note: l, edit: c }, a);
  },
  pS = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = [],
      i = [],
      a = pf(e, n),
      s = pT(a?.layout, t);
    for (let e of s) {
      let t = e.editedNotes ?? [];
      for (let e of t)
        e.fret && "X" !== e.fret
          ? r.push(e.string)
          : e.fret || i.push(e.string);
    }
    for (let e of a?.layout.beats)
      if (e.notes) for (let t of e.notes) t && !t.bogus && r.push(t.string);
    return r.filter((e) => !i.includes(e));
  },
  px = (e) =>
    Array(e)
      .fill(0)
      .map((e, t) => t),
  pk = (e, t, n) => {
    let r = e.filter((e) => ("up" === n ? e < t : e > t));
    console.log({ string: t, nextStrings: r });
    let i = "up" === n ? Math.max(...r) : Math.min(...r);
    return Number.isFinite(i) ? i : null;
  },
  pC = 12,
  pE = (e, t) => {
    let n = ie(e),
      r = e.line.strings,
      i = t - n;
    if (i < -10 || i > 73) return;
    let a = Math.floor(i / 12),
      s = i - 12 * a <= 6 ? a : a + 1;
    return s < 0 ? (s = 0) : s >= r && (s = r - 1), s;
  },
  pT = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = e?.beats ?? [],
      r = [];
    for (let e of n) {
      let n = py(t, {
        measure: e.measure.index,
        beat: e.index,
        voice: e.voice,
      });
      n && n.editedNotes.length && r.push(n);
    }
    return r;
  },
  pP = function (e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      r = arguments.length > 2 ? arguments[2] : void 0,
      i = e.beats,
      a = pT(e, n),
      s = a.find((e) => e.editedNotes.find((e) => e.string === r));
    if (
      (s && (t = i.find((e) => e.index === s.beatNum && e.voice === s.voice)),
      t)
    )
      return t;
    for (let e of i)
      if (!e.rest && e.notes && 0 !== e.notes.length) {
        for (let n of e.notes)
          if (n.string === r && !n.bogus) {
            t = e;
            break;
          }
        if (void 0 !== t) break;
      }
    if (void 0 !== t || (t = i.find((e) => !e.rest && e.notes?.length !== 0)))
      return t;
  },
  p_ = function (e, t, n) {
    let r,
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
      "up" === n
        ? (r = e - 1) < 0 && (r = i ? t - 1 : e)
        : "down" === n && (r = e + 1) >= t && (r = i ? 0 : e),
      r
    );
  },
  pL = (e, t, n) => {
    let r = e,
      i = "right" === n ? "nextBeat" : "prevBeat";
    do {
      let e = r;
      if (!(r = e[i])) {
        let t = e.layout.beats.find((e) => e[i] && !e.lyrics);
        if (!t) return;
      }
      let t = r.layout.measureLayout.measure.index;
      for (let a of e.layout.beats) {
        if (!a[i] || a.lyrics || 0 === a.notes.length) continue;
        let e = a[i],
          s = e.layout.measureLayout.measure.index;
        if (("right" === n && s < t) || ("left" === n && s > t))
          (t = s), (r = e);
        else if (s === t) {
          let n = r.duration[0] / r.duration[1],
            i = a.duration[0] / a.duration[1];
          i < n && ((t = s), (r = e));
        }
      }
      if (r.rest) {
        let e = r.layout.beats.find(
          (e) => !e.rest && !e.lyrics && 0 !== e.notes.length
        );
        e && (r = e);
      }
    } while (!0 === r.rest);
    return r;
  },
  pA = function (e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      i = e,
      a = r,
      s = i.layout,
      o = ie(s.measureLayout.lineLayout),
      l = s.measureLayout.measure.index,
      c = s.absoluteX * n,
      u = "",
      d = i.notes?.find((e) => e.string === t && !e.bogus);
    if (d) u = d.dead ? "X" : d.fret;
    else {
      let e = s.beats.filter(
        (e) => e.notes && 0 !== e.notes.length && e.voice !== r
      );
      for (let n of e) {
        let e = n.notes.find((e) => e.string === t && !e.bogus);
        e && ((u = e.fret), (i = n), (a = n.voice));
      }
    }
    return {
      formX: c,
      formY: (o + 12 * (t - 1)) * n,
      fret: u,
      measureNum: l,
      beatNum: i.index,
      beat: i,
      voice: a,
    };
  },
  pI = "hasSeenEditor",
  pN = (e) => {
    let t = om(pI);
    return t === e;
  },
  pM = (e) => og(pI, e);
function pB(e) {
  return (e.returnValue = "o/"), "o/";
}
let pO = (e, t, n, r, i) => {
    if (e) {
      let a = e[t];
      if (a && a.beats) {
        let e = a.beats.find((e) => e.beatNum === n && e.voice === i);
        if (e && e.editedNotes) {
          let t = e.editedNotes.find((e) => e.string === r);
          if (t) return t.fret;
        }
      }
    }
  },
  pD = (e) => {
    e.on("@init", () => ({
      tabEditor: {
        positioned: !1,
        beat: void 0,
        formX: 0,
        formY: 0,
        measureNum: 0,
        beatNum: 0,
        stringNum: 0,
        voice: 0,
        fret: "",
        originalFret: "",
        data: void 0,
        status: "unset",
        adminData: [],
        adminPanelOpened: !1,
      },
    })),
      e.on("layer/show", (t) => {
        let { route: n } = t;
        n.hasEditor &&
          e.dispatch(
            "navigate/silent",
            location.pathname.replace("/editor", "")
          );
      }),
      e.on("tabEditor/toggle", (t) => {
        let { route: n, tabEditor: r } = t,
          i = n.hasEditor,
          a = i
            ? location.pathname.replace("/editor", "")
            : `${location.pathname}/editor`;
        if ((e.dispatch("navigate/silent", a), i))
          return {
            tabEditor: {
              ...r,
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              fret: "",
              originalFret: "",
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              voice: 0,
            },
          };
      }),
      e.on("tabEditor/setForm", (t, n) => {
        let { beatsLayout: r, stringNum: i, scale: a } = n,
          s = pP(r, t.tabEditor.data, i);
        if (!s) return;
        let o = s?.voice,
          {
            formX: l,
            formY: c,
            fret: u,
            beatNum: d,
            measureNum: p,
            ...h
          } = pA(s, i, a, o),
          m = pO(t.tabEditor.data, p, d, i, h.voice);
        if (c < 0 || Number.isNaN(c)) return;
        let { device: g } = t,
          f = lT(g) || lC(g.os) || lE(g.os);
        return (
          f ||
            e.dispatch("cursor/move", {
              cursor: io(h.beat.layout),
              loopStart: t.cursor.position.loopStart,
              loopEnd: t.cursor.position.loopEnd,
            }),
          {
            tabEditor: {
              ...t.tabEditor,
              positioned: !0,
              formX: l,
              formY: c,
              fret: void 0 !== m ? `${m}` : `${u}`,
              originalFret: `${u}`,
              beat: s,
              beatNum: d,
              stringNum: i,
              measureNum: p,
              voice: o,
            },
          }
        );
      }),
      e.on("tabEditor/formMove", (t, n) => {
        let { tabEditor: r, cursor: i, device: a } = t,
          { scale: s, direction: o, preserveVoice: l } = n,
          { stringNum: c, beat: u, positioned: d } = r;
        if (!d) return;
        let p = u,
          h = c,
          m = p.layout.measureLayout.lineLayout.line.strings,
          g = "up" === o || "down" === o;
        g
          ? ((h = p_(c, m, o)), (p = l ? u : pP(u.layout, r.data, h)))
          : (p = pL(u, r.data, o));
        let {
            formX: f,
            formY: y,
            fret: v,
            beatNum: b,
            measureNum: w,
            ...S
          } = pA(p, h, s, p.voice),
          x = pO(r.data, w, b, h, S.voice),
          k = lT(a) || lC(a.os) || lE(a.os);
        return (
          k ||
            e.dispatch("cursor/move", {
              cursor: io(S.beat.layout),
              loopStart: i.position.loopStart,
              loopEnd: i.position.loopEnd,
            }),
          {
            tabEditor: {
              ...r,
              positioned: !0,
              formX: f,
              formY: y,
              fret: void 0 !== x ? `${x}` : `${v}`,
              originalFret: `${v}`,
              beat: S.beat,
              voice: S.voice,
              beatNum: b,
              stringNum: h,
              measureNum: w,
            },
          }
        );
      }),
      e.on("screen/resize", (e) => {
        let { tabEditor: t } = e;
        if (t.positioned)
          return {
            tabEditor: {
              ...t,
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              fret: "",
              originalFret: "",
            },
          };
      }),
      e.on("tabEditor/moveNote:dnd", (t, n) => {
        let { tabEditor: r, part: i } = t,
          { scale: a, newString: s } = n,
          {
            fret: o,
            stringNum: l,
            beatNum: c,
            measureNum: u,
            voice: d,
            beat: p,
          } = r;
        if (!o) {
          console.debug("No fret selected");
          return;
        }
        let h = pS(i.current, r.data, { measure: u, voice: d, beat: c }),
          m = h.includes(s);
        if (m) {
          console.debug("String is taken", { newString: s, takenStrings: h });
          return;
        }
        if (!Number.isInteger(s)) {
          console.debug("Invalid string", { newString: s });
          return;
        }
        let g = pg(i.current.tuning, s, { string: l, fret: parseInt(o, 10) });
        if (Number.isNaN(g) || g < 0 || g > i.current.frets - 1) {
          console.debug("Fret is out of range", { newFret: g, newString: s });
          return;
        }
        e.dispatch("tabEditor/changeNote", { newFret: "", isMove: !0 }),
          e.dispatch("tabEditor/setForm", {
            scale: a,
            beatsLayout: p.layout,
            stringNum: s,
          }),
          e.dispatch("tabEditor/changeNote", {
            newFret: g.toString(10),
            isMove: !0,
          }),
          e.dispatch("curiosity/event", {
            event: "Moved note",
            Via: "drag-and-drop",
          });
      }),
      e.on("tabEditor/moveNote:shortcut", (t, n) => {
        let { tabEditor: r, part: i } = t,
          { fret: a, stringNum: s, beatNum: o, measureNum: l, voice: c } = r;
        if (!a) {
          console.debug("No fret selected");
          return;
        }
        let u = pS(i.current, r.data, { measure: l, voice: c, beat: o }),
          d = p_(s, i.current.strings, n.direction, !1),
          p = u.includes(d);
        if (p) {
          let e = px(i.current.strings),
            t = e.filter((e) => !u.includes(e));
          d = pk(t, d, n.direction);
        }
        if (!Number.isInteger(d)) {
          console.debug("String is taken", { newString: d, takenStrings: u });
          return;
        }
        let h = pg(i.current.tuning, d, { string: s, fret: parseInt(a, 10) });
        if (Number.isNaN(h) || h < 0 || h > i.current.frets - 1) {
          console.debug("Fret is out of range", { newFret: h, newString: d });
          return;
        }
        e.dispatch("tabEditor/changeNote", { newFret: "", isMove: !0 });
        let m = Math.abs(d - s);
        for (let t = 0; t < m; t++)
          e.dispatch("tabEditor/formMove", { ...n, preserveVoice: !0 });
        e.dispatch("tabEditor/changeNote", {
          newFret: h.toString(10),
          isMove: !0,
        }),
          e.dispatch("curiosity/event", {
            event: "Moved note",
            Via: "shortcut",
          });
      });
    let t = (e, t) => {
      let n, r;
      let { measureNum: i, voice: a, beatNum: s, stringNum: o } = e,
        l = { measure: i, voice: a, beat: s },
        c = pf(t, l),
        u = py(e.data, l);
      return (
        o > 0 &&
          (r = pw({
            originalBeat: c,
            editedBeat: u,
            currentString: o,
            string: o - 1,
            tuning: t.tuning,
          })),
        o < t.strings - 1 &&
          (n = pw({
            originalBeat: c,
            editedBeat: u,
            currentString: o,
            string: o + 1,
            tuning: t.tuning,
          })),
        r || n
      );
    };
    e.on("tabEditor/changeNote", (n, r) => {
      let i,
        { tabEditor: a, part: l, user: c } = n,
        { newFret: u, isMove: d } = r,
        {
          measureNum: p,
          fret: h,
          originalFret: m,
          stringNum: g,
          beatNum: f,
          voice: y,
          positioned: v,
        } = a;
      if (!v || u === h) return;
      if (a.data) i = [...a.data];
      else {
        let e = l.current.measures.length;
        i = Array(e);
      }
      let b = i[p];
      if (b && b.beats) {
        b = { beats: [...b.beats] };
        let e = b.beats.findIndex((e) => e.beatNum === f && e.voice === y);
        if (-1 === e)
          b.beats.push({
            beatNum: f,
            voice: y,
            editedNotes: [{ string: g, fret: u, originalFret: m }],
          });
        else {
          let t = b.beats[e];
          t.editedNotes = [...t.editedNotes];
          let n = t.editedNotes.findIndex((e) => e.string === g);
          -1 !== n &&
            (t.editedNotes = t.editedNotes
              .slice(0, n)
              .concat(t.editedNotes.slice(n + 1))),
            ("" === m && "" === u) ||
              m === u ||
              t.editedNotes.push({ string: g, fret: u, originalFret: m }),
            0 === t.editedNotes.length &&
              (b.beats = b.beats.slice(0, e).concat(b.beats.slice(e + 1))),
            0 === b.beats.length && (b = void 0);
        }
        i[p] = b;
      } else
        (b = {
          beats: [
            {
              beatNum: f,
              voice: y,
              editedNotes: [{ string: g, fret: u, originalFret: m }],
            },
          ],
        }),
          (i[p] = b);
      let w = { ...a, data: i, fret: u, status: "changes" };
      return (
        !d &&
          t(w, l.current) &&
          e.dispatch("curiosity/event", { event: "Moved note", Via: "edit" }),
        window.addEventListener("beforeunload", pB),
        clearTimeout(s),
        (s = setTimeout(() => dQ(e, "TriedEditor"), 2e4)),
        c.isLoggedIn &&
          (clearTimeout(o),
          (o = setTimeout(() => e.dispatch("tabEditor/save"), 3e3))),
        { tabEditor: w }
      );
    });
    let n = (t) => {
      let { tabEditor: n } = t;
      "changes" === n.status && e.dispatch("tabEditor/save");
    };
    e.on("user/signIn", n),
      e.on("user/googleSignIn", n),
      e.on("user/signUp", n),
      e.on("tabEditor/save", async (t) => {
        let { meta: n, part: r, tabEditor: i, user: a } = t;
        try {
          "changes" === i.status &&
            a.isLoggedIn &&
            (e.dispatch("tabEditor/save:changeStatus", "saving"),
            await pp(n.songId, r.partId, r.revisionId, i.data),
            e.dispatch("curiosity/event", { event: "Autosaved tab edits" }),
            setTimeout(
              () => e.dispatch("tabEditor/save:changeStatus", "saved"),
              1e3
            ));
        } catch (e) {
          console.log(e);
        }
      }),
      e.on("tabEditor/save:changeStatus", (e, t) => {
        if (!("saved" === t && "changes" === e.tabEditor.status))
          return (
            "saved" === t && window.removeEventListener("beforeunload", pB),
            { tabEditor: { ...e.tabEditor, status: t } }
          );
      }),
      e.on("part/load:raw", () => {
        e.dispatch("tabEditor/load");
      }),
      e.on("tabEditor/load", async (t) => {
        let { user: n, meta: r, query: i } = t;
        try {
          if ((e.dispatch("tabEditor/load:flush"), n.isLoggedIn)) {
            let t;
            (t =
              void 0 !== i.tabedit && td(n, V.USE_TAB_EDITOR)
                ? await ph(+i.tabedit)
                : await pd(r.current.songId, r.partId, r.current.revisionId)) &&
              e.dispatch("tabEditor/load:done", {
                songId: t.songId,
                part: t.part,
                data: t.data,
              });
          }
        } catch (e) {
          console.log(e);
        }
      }),
      e.on("tabEditor/load:flush", (e) => {
        let { tabEditor: t } = e;
        return (
          window.removeEventListener("beforeunload", pB),
          {
            tabEditor: {
              ...t,
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              voice: 0,
              fret: "",
              originalFret: "",
              data: void 0,
              status: "unset",
            },
          }
        );
      }),
      e.on("tabEditor/load:done", (e, t) => {
        let { songId: n, part: r, data: i } = t;
        if (n !== e.meta?.current?.songId || r !== e.meta?.partId) {
          console.log("Loaded tab editor data lost its relevance");
          return;
        }
        return { tabEditor: { ...e.tabEditor, data: i } };
      }),
      e.on("tab_editor/toggleAdminPanel", (e) => ({
        tabEditor: {
          ...e.tabEditor,
          adminPanelOpened: !e.tabEditor.adminPanelOpened,
        },
      })),
      e.on("tabEditor/loadAdminData", async (t, n) => {
        let { user: r } = t,
          { offset: i, limit: a } = n;
        try {
          if (td(r, V.USE_TAB_EDITOR)) {
            let t = await pm(i, a);
            e.dispatch("tabEditor/loadAdminData:done", t);
          }
        } catch (e) {
          console.log(e);
        }
      }),
      e.on("tabEditor/loadAdminData:done", (e, t) => ({
        tabEditor: { ...e.tabEditor, adminData: t },
      })),
      e.on("tabEditor/loadById", (t, n) => {
        let r = t.tabEditor.adminData.find((e) => e.id === n);
        if (td(t.user, V.USE_TAB_EDITOR) && r) {
          let { songId: i, partId: a, revisionId: s } = t.part,
            o = e3(
              { songId: r.songId, artist: "", title: "" },
              r.part,
              r.revision
            );
          e.dispatch("navigate", `${o}?tabedit=${n}`),
            r.songId === i &&
              r.part === a &&
              r.revision === s &&
              tM(() => e.dispatch("tabEditor/load"));
        }
      });
  },
  pz = "d1u3zjg5j4sw4b";
class pR extends Error {
  constructor(e) {
    super(e),
      Error.captureStackTrace && Error.captureStackTrace(this, pR),
      (this.name = "InProgressError"),
      (this.message = e);
  }
}
let p$ = async (e) => {
  try {
    let t = await nJ(`https://d1u3zjg5j4sw4b.cloudfront.net/${e}`);
    return nQ(t), t.json();
  } catch (e) {
    if (404 === e.status) return null;
    throw e;
  }
};
async function pF(e, t) {
  let n = `${e}/${t.songId}-${t.partId}-${t.revisionId}.json`,
    r = await p$(n);
  if (r) return console.log("Taken from the cloud"), r;
  let i = tf("/fingerings/generate"),
    a = await nZ(i, { part: t });
  nQ(a), console.log("Generated on server");
  let s = await a.json();
  if ("In progress" === s.status) throw new pR(s.info);
  return s;
}
let pV = "v1",
  pU = null,
  pH = (e) => {
    e.on("fingerings/loadedPart", (e, t) => {
      let { fingerings: n, part: r } = e,
        { songId: i, revisionId: a, rawPart: s } = t;
      return (pU && clearTimeout(pU), r.songId !== i || r.revisionId !== a)
        ? {
            fingerings: {
              ...n,
              rawPart: JSON.parse(JSON.stringify(s)),
              storedFingerings: [],
              trackFingering: void 0,
              shown: !1,
              status: null,
            },
          }
        : {
            fingerings: {
              ...n,
              rawPart: JSON.parse(JSON.stringify(s)),
              trackFingering: void 0,
              shown: !1,
              status: null,
            },
          };
    }),
      e.on("fingerings/toggle", async (t) => {
        let { part: n, fingerings: r, experiments: i } = t,
          { partId: a, songId: s, revisionId: o } = n;
        pU && clearTimeout(pU);
        let l =
          i.paid_fingerings?.segment === "ut" ||
          i.paid_fingerings?.segment === "on";
        if (l && "Loading" !== r.status) {
          if (r.shown)
            e.dispatch("curiosity/event", {
              event: "Clicked close fingerings",
            }),
              e.dispatch("fingerings/hide");
          else {
            if (
              (e.dispatch("curiosity/event", {
                event: "Clicked open fingerings",
              }),
              (pU = setTimeout(
                () => e.dispatch("curiosity/usedFingerings"),
                3e4
              )),
              r.storedFingerings.find((e) => e.partId === a))
            ) {
              e.dispatch("fingerings/show", a);
              return;
            }
            if (r.rawPart) {
              e.dispatch("fingerings/load:init");
              try {
                let t = await pF("v1", r.rawPart),
                  n = { partId: a, data: t };
                setTimeout(() => e.dispatch("fingerings/load:done", n), 200);
              } catch (t) {
                "InProgressError" === t.name
                  ? e.dispatch("fingerings/load:inProgress")
                  : (e.dispatch("curiosity/event", {
                      event: "Failed to generate fingerings",
                      songId: s,
                      partId: a,
                      revisionId: o,
                      version: "v1",
                    }),
                    e.dispatch("fingerings/load:error"));
              }
            }
          }
        }
      }),
      e.on("fingerings/load:init", (e) => ({
        fingerings: { ...e.fingerings, status: "Loading" },
      })),
      e.on("fingerings/load:done", (e, t) => {
        let { fingerings: n } = e,
          r = [...n.storedFingerings];
        return (
          r.find((e) => e.partId === t.partId) || r.push(t),
          {
            fingerings: {
              ...n,
              storedFingerings: r,
              trackFingering: t,
              shown: !0,
              status: null,
            },
          }
        );
      }),
      e.on("fingerings/load:inProgress", (e) => ({
        fingerings: {
          ...e.fingerings,
          trackFingering: void 0,
          shown: !0,
          status: "In Progress",
        },
      })),
      e.on("fingerings/load:error", (e) => ({
        fingerings: {
          ...e.fingerings,
          trackFingering: void 0,
          shown: !0,
          status: "Error",
        },
      })),
      e.on("fingerings/hide", (e) => ({
        fingerings: { ...e.fingerings, shown: !1, status: null },
      })),
      e.on("fingerings/show", (e, t) => {
        let { fingerings: n } = e,
          r = n.storedFingerings.find((e) => e.partId === t);
        if (r)
          return {
            fingerings: { ...n, trackFingering: r, shown: !0, status: null },
          };
      });
  };
async function pj(e) {
  let t = tf("/api/person/revisions"),
    n = await fetch(t, { credentials: "include" });
  return await n4(n), nQ(n), await n.json();
}
async function pG(e, t) {
  try {
    e("myTabs/load:processing");
    let n = await pj(t);
    e("myTabs/load:done", n.revisions || []);
  } catch (t) {
    console.error("myTabs/load:error", t), e("myTabs/load:error", t);
  }
}
let pW = (e) => {
    e.on("user/signIn", async () => pG(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => pG(e.dispatch, void 0)),
      e.on("myTabs/load:processing", (e) => ({
        myTabs: { ...e.myTabs, loading: !0, error: !1 },
      })),
      e.on("myTabs/load:done", (e, t) => ({
        myTabs: { ...e.myTabs, tabs: t, actionId: "", loading: !1, error: !1 },
      })),
      e.on("myTabs/load:error", (e) => ({
        myTabs: { ...e.myTabs, tabs: [], loading: !1, error: !0 },
      })),
      e.on("user/signOut", (e) => ({
        myTabs: { ...e.myTabs, tabs: [], pattern: "", actionId: "" },
      }));
  },
  pq = (e) => {
    e.on("playAlongAd/toggle", (e) => {
      let { playAlongAd: t } = e;
      return { playAlongAd: { isOpened: !t.isOpened } };
    });
  },
  pX = (e) => {
    e.on("tempo/apply", (e, t) => ({ tempo: { tempo: t } })),
      e.on("part/load:inflated", (e, t) => {
        let { cursor: n } = e,
          { current: r } = t;
        return { tempo: { tempo: st(r, n.position.cursor) } };
      }),
      e.on("cursor/move", (e, t) => {
        let { part: n, tempo: r } = e,
          i = n.current ? st(n.current, t.cursor) : r.tempo;
        if (i != r.tempo) return { tempo: { tempo: i } };
      });
  };
var pY = (e) =>
  new O(
    [
      D,
      lL,
      eh,
      pX,
      lk,
      rP,
      o_,
      os,
      oa,
      oc,
      uE,
      oN,
      lA,
      l$,
      lP,
      cu,
      cg,
      c_,
      cA,
      ci,
      cM,
      cV,
      cU,
      uo,
      ud,
      um,
      uS,
      cT,
      d1,
      d5,
      d9,
      dq,
      pn,
      pr,
      pD,
      pi,
      pu,
      pc,
      pH,
      dg,
      pW,
      pq,
    ],
    e
  );
function pK() {
  try {
    "serviceWorker" in navigator &&
      window.addEventListener("load", () => {
        let e = `/service-worker${N ? "-" + N : ""}.js`;
        navigator.serviceWorker
          .register(e, { scope: "/" })
          .catch(console.error.bind(console));
      });
  } catch (e) {
    console.error(e);
  }
}
function pJ() {
  try {
    navigator.serviceWorker.ready.then((e) => {
      e.unregister();
    });
  } catch (e) {
    console.error(e);
  }
}
let pZ = {},
  pQ = {},
  p1 = "Cdy28x",
  p0 = "Cdylb",
  p2 = "Cdy9a",
  p5 = "Cdyrh",
  p4 = "Cdy21",
  p3 = "Cdy1xh",
  p9 = "Cdyft",
  p8 = "Cdy17e",
  p6 = "Cdy18g",
  p7 = "Cdy18g Cdy2gp",
  he = "Cdywb",
  ht = "Cdy2g1",
  hn = "Cdy28x Cdy2cz",
  hr = "Cdy28x Cdyu0",
  hi = "Cdy28x Cdy308",
  ha = "Cdy28x Cdy308 Cdy2al",
  hs = "Cdy28x Cdy29",
  ho = "Cdy1k3",
  hl = {
    main: "Cdy28x",
    chordsMinimalism: "Cdylb",
    chords: "Cdy9a",
    tablature: "Cdyrh",
    pane: "Cdy21",
    debug: "Cdy1xh",
    tos: "Cdyft",
    popupOverlay: "Cdy17e",
    footer: "Cdy18g",
    footerWithAds: "Cdy18g Cdy2gp",
    copyright: "Cdywb",
    rightSidebar: "Cdy2g1",
    appNoPrint: "Cdy28x Cdy2cz",
    appPrint: "Cdy28x Cdyu0",
    appChords: "Cdy28x Cdy308",
    appChordsMinimalism: "Cdy28x Cdy308 Cdy2al",
    appTags: "Cdy28x Cdy29",
    isTestMode: "Cdy1k3",
  };
function hc(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return function (t) {
    return g(e, { ...t, ...lU.apply(null, n) });
  };
}
let hu = "ki1vh",
  hd = "ki1vh ki326",
  hp = "ki1vh ki2jc",
  hh = "ki1vh ki1hu",
  hm = "ki1vh kibb",
  hg = "ki29b",
  hf = "ki1vh ki1ny",
  hy = "ki1vh ki32k",
  hv = "ki1vh ki32k ki2jd",
  hb = "ki1vh ki2iu",
  hw = {
    spinner: "ki1vh",
    button: "ki1vh ki326",
    migrate: "ki1vh ki2jc",
    google: "ki1vh ki1hu",
    search: "ki1vh kibb",
    icon: "ki29b",
    revisions: "ki1vh ki1ny",
    songs: "ki1vh ki32k",
    songsInvisible: "ki1vh ki32k ki2jd",
    feature: "ki1vh ki2iu",
  },
  hS = (e) => {
    let {
      x: t,
      y: n,
      width: r,
      height: i,
      fill: a,
      className: s = hw.spinner,
      style: o,
      id: l,
      iref: c,
    } = e;
    return g(
      "svg",
      {
        className: s,
        ref: c,
        id: l,
        x: t,
        y: n,
        width: r,
        height: i,
        style: o,
        viewBox: "25 25 50 50",
        "aria-labelledby": "spinner-title",
      },
      g("circle", { stroke: a, cx: "50", cy: "50", r: "20" })
    );
  },
  hx = "D0y2s5",
  hk = { loader: "D0y2s5" };
function hC() {
  return f("div", {
    className: hk.loader,
    children: g(hS, { width: 50, height: 40, fill: "#128df6" }),
  });
}
let hE = "B41py",
  hT = "B41py B4d2",
  hP = "B41py B431b",
  h_ = "B41py B41jo",
  hL = {
    alert: "B41py",
    info: "B41py B4d2",
    error: "B41py B431b",
    notice: "B41py B41jo",
  };
function hA(e) {
  switch (e) {
    case "error":
      return hL.error;
    case "notice":
      return hL.notice;
    default:
      return hL.info;
  }
}
function hI(e, t, n, r) {
  let i = e.length,
    a = Math.ceil((i * n + r * Math.ceil((i * n) / t)) / t);
  if (1 === a) return [e];
  let s = Math.ceil((t - r) / n),
    o = 0,
    l = [];
  for (let t = 0; t < a; t++) {
    let n;
    let r = e.substr(o, s);
    if (t !== a - 1) {
      let e = r.split(" ");
      n = r.lastIndexOf(e[e.length - 1]);
    }
    (o += n), l.push(r.substr(0, n).trim());
  }
  return l;
}
function hN(e) {
  let { level: t, title: n, action: r } = e,
    { screen: i, device: a } = lU("screen", "device");
  if ("bot" === a.type) return;
  let s = hA(t),
    o = a.isPhone ? 0 : 190,
    l = i.viewport.width - o > 600 ? 600 : i.viewport.width - o,
    c = hI(n, l, 9, 10),
    u = hI(r, l, 7, 10),
    d =
      "undefined" == typeof btoa
        ? (e) => Buffer.from(e, "binary").toString("base64")
        : btoa;
  return g(
    "div",
    { key: `alert-${t}`, className: s, role: "alert" },
    c.map((e) =>
      g("img", {
        height: 30,
        "aria-label": "title",
        alt: n,
        src:
          "data:image/svg+xml;base64," +
          d(`<svg xmlns='http://www.w3.org/2000/svg' width='${
            9 * e.length + 10
          }' height='30'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
      })
    ),
    r &&
      u.map((e) =>
        g("img", {
          height: 22,
          "aria-label": "action",
          alt: r,
          src:
            "data:image/svg+xml;base64," +
            d(`<svg xmlns='http://www.w3.org/2000/svg' width='${
              7 * e.length + 10
            }' height='22'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
        })
      )
  );
}
function hM() {
  let [e] = y((e) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(e),
      console && console.error(e);
  });
  return e
    ? f(hN, {
        level: "error",
        reason: "lazy",
        title: "Failed to load page",
        action: "Please disable your ad blocker and check network connection",
      })
    : f(v, {
        fallback: f(hC, {}),
        children: f(this.props.component, this.props),
      });
}
let hB = (e) => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
function hO(e) {
  let t = u(lF),
    n = e.href || e.to,
    r = e.onClick,
    i = b(
      (e) => {
        hB(e) || (e.preventDefault(), r && r(), t.dispatch("navigate", n));
      },
      [n, r]
    );
  return g("a", { ...e, href: n, onClick: i, to: null });
}
let hD = "i5k2",
  hz = "i5k2 i52z2",
  hR = "i5k2 i51pj",
  h$ = "i5k2 i52e5",
  hF = "i5k2 i52z2 i533w",
  hV = "i5k2 i52z2 i515d",
  hU = "i5k2 i52z2 i527v",
  hH = "i5k2 i52z2 i513s",
  hj = "i5k2 i52z2 i51e9",
  hG = "i5k2 i52z2 i51xu",
  hW = "i5k2 i52wn",
  hq = "i51p5",
  hX = "i533x",
  hY = "i5p0",
  hK = "i5tp",
  hJ = "i5tp i51jx",
  hZ = "i5tp i5173",
  hQ = "i5t4",
  h1 = "i51o8",
  h0 = "i517k",
  h2 = "i52ov",
  h5 = {
    base: "i5k2",
    horizontalPopup: "i5k2 i52z2",
    verticalPopup: "i5k2 i51pj",
    verticalLeftPopup: "i5k2 i52e5",
    speedPopup: "i5k2 i52z2 i533w",
    pitchPopup: "i5k2 i52z2 i515d",
    soloPopup: "i5k2 i52z2 i527v",
    mutePopup: "i5k2 i52z2 i513s",
    loopPopup: "i5k2 i52z2 i51e9",
    printPopup: "i5k2 i52z2 i51xu",
    pitchshiftPopup: "i5k2 i52wn",
    longPopup: "i51p5",
    middleText: "i533x",
    link: "i5p0",
    basewrapper: "i5tp",
    wrapper: "i5tp i51jx",
    demowrapper: "i5tp i5173",
    text: "i5t4",
    linkText: "i51o8",
    demoText: "i517k",
    divider: "i52ov",
  },
  h4 = hD + " vtm3",
  h3 = hQ + " vt1nf",
  h9 = "vt25r",
  h8 = { popup: hD + " vtm3", text: hQ + " vt1nf", surveySection: "vt25r" };
class h6 extends w {
  componentDidMount() {}
  onUnderstandLinkClick = (e) => {
    e.preventDefault(), this.props.dispatch("layer/hide");
  };
  onStillHaveQuestionsLinkClick = () => {};
  render() {
    return g(
      "div",
      { className: h8.popup, id: "explain-difficulty-popup" },
      g(
        "div",
        { className: h8.text },
        "Each guitar track is assigned a difficulty level based on:",
        g(
          "ol",
          {},
          g(
            "li",
            {},
            "The speed required for playing left and right hand. Faster is harder."
          ),
          g(
            "li",
            {},
            "The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."
          ),
          g(
            "li",
            {},
            "The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc."
          )
        ),
        g(
          "p",
          {},
          "We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."
        ),
        g(
          "p",
          {},
          g(
            "i",
            {},
            "Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles."
          )
        ),
        g(
          "div",
          { className: h8.surveySection },
          g(
            "a",
            { onClick: this.onUnderstandLinkClick, href: "", role: "button" },
            "I understand, all clear"
          ),
          g(
            hO,
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
var h7 = hc(h6);
let me = c(null),
  mt = (e) => e && e.props;
function mn(e, t) {
  let n = (e) => (t && mt(e) ? t(e) : e),
    r = Object.create(null);
  return (
    e &&
      S(e).forEach((e) => {
        e && (r[e.key] = n(e));
      }),
    r
  );
}
function mr(e, t) {
  let n;
  function r(n) {
    return n in t ? t[n] : e[n];
  }
  (e = e || {}), (t = t || {});
  let i = Object.create(null),
    a = [];
  for (let n in e) n in t ? a.length && ((i[n] = a), (a = [])) : a.push(n);
  let s = {};
  for (let e in t) {
    if (i[e])
      for (n = 0; n < i[e].length; n++) {
        let t = i[e][n];
        s[i[e][n]] = r(t);
      }
    s[e] = r(e);
  }
  for (n = 0; n < a.length; n++) s[a[n]] = r(a[n]);
  return s;
}
function mi(e, t, n) {
  return null != n[t] ? n[t] : e.props && e.props[t];
}
function ma(e, t) {
  return mn(e.children, (n) =>
    x(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: mi(n, "appear", e),
      enter: mi(n, "enter", e),
      exit: mi(n, "exit", e),
    })
  );
}
function ms(e, t, n) {
  let r = mn(e.children),
    i = mr(t, r);
  return (
    Object.keys(i).forEach((a) => {
      let s = i[a];
      if (!mt(s)) return;
      let o = a in t,
        l = a in r,
        c = t[a],
        u = mt(c) && !c.props.in;
      l && (!o || u)
        ? (i[a] = x(s, {
            onExited: n.bind(null, s),
            in: !0,
            exit: mi(s, "exit", e),
            enter: mi(s, "enter", e),
          }))
        : l || !o || u
        ? l &&
          o &&
          mt(c) &&
          (i[a] = x(s, {
            onExited: n.bind(null, s),
            in: c.props.in,
            exit: mi(s, "exit", e),
            enter: mi(s, "enter", e),
          }))
        : (i[a] = x(s, { in: !1 }));
    }),
    i
  );
}
let mo = Object.values || ((e) => Object.keys(e).map((t) => e[t]));
class ml extends w {
  static defaultProps = { component: null, childFactory: (e) => e };
  constructor(e) {
    super(e);
    let t = this.handleExited.bind(this);
    this.state = { handleExited: t, firstRender: !0 };
  }
  componentDidMount() {
    this.appeared = !0;
  }
  static getDerivedStateFromProps(e, t) {
    let { children: n, handleExited: r, firstRender: i } = t;
    return { children: i ? ma(e, r) : ms(e, n, r), firstRender: !1 };
  }
  handleExited(e, t) {
    let n = mn(this.props.children);
    e.key in n ||
      (e.props.onExited && e.props.onExited(t),
      this.setState((t) => {
        let n = { ...t.children };
        return delete n[e.key], { children: n };
      }));
  }
  render() {
    let { component: e, childFactory: t, ...n } = this.props,
      r = mo(this.state.children).map(t);
    return (
      delete n.appear,
      delete n.enter,
      delete n.exit,
      g(
        me.Provider,
        { value: { isMounting: !this.appeared } },
        e ? g(e, n, r) : g(k, null, r)
      )
    );
  }
}
let mc = "unmounted",
  mu = "exited",
  md = "entering",
  mp = "entered",
  mh = "exiting";
function mm(e) {
  return e ? e.base || (1 === e.nodeType && e) : null;
}
class mg extends w {
  static contextType = me;
  constructor(e, t) {
    let n;
    super(e, t);
    let r = t && !t.isMounting ? e.enter : e.appear;
    (this.appearStatus = null),
      e.in
        ? r
          ? ((n = mu), (this.appearStatus = md))
          : (n = mp)
        : (n = e.unmountOnExit || e.mountOnEnter ? mc : mu),
      (this.state = { status: n }),
      (this.nextCallback = null);
  }
  static getDerivedStateFromProps(e, t) {
    let { in: n } = e;
    return n && t.status === mc ? { status: mu } : null;
  }
  componentDidMount() {
    this.updateStatus(!0, this.appearStatus);
  }
  componentDidUpdate(e) {
    let t = null;
    if (e !== this.props) {
      let { status: e } = this.state;
      this.props.in
        ? e !== md && e !== mp && (t = md)
        : (e === md || e === mp) && (t = mh);
    }
    this.updateStatus(!1, t);
  }
  componentWillUnmount() {
    this.cancelNextCallback();
  }
  getTimeouts() {
    let e, t, n;
    let { timeout: r } = this.props;
    return (
      (e = t = n = r),
      null != r &&
        "number" != typeof r &&
        ((e = r.exit), (t = r.enter), (n = r.appear)),
      { exit: e, enter: t, appear: n }
    );
  }
  updateStatus() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (null !== t) {
      this.cancelNextCallback();
      let n = mm(this);
      t === md ? this.performEnter(n, e) : this.performExit(n);
    } else
      this.props.unmountOnExit &&
        this.state.status === mu &&
        this.setState({ status: mc });
  }
  performEnter(e, t) {
    let { enter: n } = this.props,
      r = this.context ? this.context.isMounting : t,
      i = this.getTimeouts();
    if (!t && !n) {
      this.safeSetState({ status: mp }, () => {
        this.props.onEntered(e);
      });
      return;
    }
    this.props.onEnter(e, r),
      this.safeSetState({ status: md }, () => {
        this.props.onEntering(e, r),
          this.onTransitionEnd(e, i.enter, () => {
            this.safeSetState({ status: mp }, () => {
              this.props.onEntered(e, r);
            });
          });
      });
  }
  performExit(e) {
    let { exit: t } = this.props,
      n = this.getTimeouts();
    if (!t) {
      this.safeSetState({ status: mu }, () => {
        this.props.onExited(e);
      });
      return;
    }
    this.props.onExit(e),
      this.safeSetState({ status: mh }, () => {
        this.props.onExiting(e),
          this.onTransitionEnd(e, n.exit, () => {
            this.safeSetState({ status: mu }, () => {
              this.props.onExited(e);
            });
          });
      });
  }
  cancelNextCallback() {
    null !== this.nextCallback &&
      (this.nextCallback.cancel(), (this.nextCallback = null));
  }
  safeSetState(e, t) {
    (t = this.setNextCallback(t)), this.setState(e, t);
  }
  setNextCallback(e) {
    let t = !0;
    return (
      (this.nextCallback = (n) => {
        t && ((t = !1), (this.nextCallback = null), e(n));
      }),
      (this.nextCallback.cancel = () => {
        t = !1;
      }),
      this.nextCallback
    );
  }
  onTransitionEnd(e, t, n) {
    this.setNextCallback(n),
      e
        ? (this.props.addEndListener &&
            this.props.addEndListener(e, this.nextCallback),
          null != t && setTimeout(this.nextCallback, t))
        : setTimeout(this.nextCallback, 0);
  }
  render() {
    let e = this.state.status;
    return e === mc
      ? null
      : g(me.Provider, { value: null }, this.props.children);
  }
}
function mf() {}
mg.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mf,
  onEntering: mf,
  onEntered: mf,
  onExit: mf,
  onExiting: mf,
  onExited: mf,
};
class my extends w {
  static defaultProps = { timeout: 200 };
  onEnter = (e, t) => {
    if (e) {
      let n = this.props.animationStyles[t ? "appear" : "enter"];
      this.removeClasses(e, "exit"), n && e.classList.add(n);
    }
    this.props.onEnter && this.props.onEnter(e);
  };
  onEntering = (e, t) => {
    if (e) {
      let n = this.props.animationStyles[(t ? "appear" : "enter") + "Active"],
        r = window.requestAnimationFrame;
      n &&
        r(() => {
          r(() => {
            e && e.classList.add(n);
          });
        });
    }
    this.props.onEntering && this.props.onEntering(e);
  };
  onEntered = (e, t) => {
    if (e) {
      let n = this.props.animationStyles[(t ? "appear" : "enter") + "Done"];
      this.removeClasses(e, t ? "appear" : "enter"), n && e.classList.add(n);
    }
    this.props.onEntered && this.props.onEntered(e);
  };
  onExit = (e) => {
    if (e) {
      let t = this.props.animationStyles.exit;
      this.removeClasses(e, "appear"),
        this.removeClasses(e, "enter"),
        t && e.classList.add(t);
    }
    this.props.onExit && this.props.onExit(e);
  };
  onExiting = (e) => {
    if (e) {
      let t = this.props.animationStyles.exitActive,
        n = window.requestAnimationFrame;
      t &&
        n(() => {
          n(() => {
            e && e.classList.add(t);
          });
        });
    }
    this.props.onExiting && this.props.onExiting(e);
  };
  onExited = (e) => {
    if (e) {
      let t = this.props.animationStyles.exitDone;
      this.removeClasses(e, "exit"), t && e.classList.add(t);
    }
    this.props.onExited && this.props.onExited(e);
  };
  removeClasses(e, t) {
    let n = this.props.animationStyles[t],
      r = this.props.animationStyles[t + "Active"],
      i = this.props.animationStyles[t + "Done"];
    n && e.classList.remove(n),
      r && e.classList.remove(r),
      i && e.classList.remove(i);
  }
  render() {
    return g(mg, {
      ...this.props,
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited,
    });
  }
}
let mv = 27,
  mb = 28,
  mw = 29,
  mS = 30,
  mx = 31,
  mk = 32,
  mC = 33,
  mE = 34,
  mT = 36,
  mP = 35,
  m_ = 39,
  mL = 38,
  mA = 40,
  mI = 37,
  mN = 91,
  mM = 42,
  mB = 46,
  mO = 44,
  mD = 92,
  mz = 50,
  mR = 48,
  m$ = 47,
  mF = 45,
  mV = 41,
  mU = 43,
  mH = 49,
  mj = 57,
  mG = 51,
  mW = 59,
  mq = 93,
  mX = 55,
  mY = 52,
  mK = 53,
  mJ = 54,
  mZ = 56,
  mQ = 102,
  m1 = 99,
  m0 = 58,
  m2 = 60,
  m5 = 61,
  m4 = 62,
  m3 = 63,
  m9 = 64,
  m8 = 65,
  m6 = 66,
  m7 = 67,
  ge = 68,
  gt = 69,
  gn = 70,
  gr = 71,
  gi = 72,
  ga = 73,
  gs = 74,
  go = 75,
  gl = 76,
  gc = 76,
  gu = 77,
  gd = 78,
  gp = 79,
  gh = 80,
  gm = 81,
  gg = 82,
  gf = 83,
  gy = 84,
  gv = 85,
  gb = 86,
  gw = 87,
  gS = [
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
    [91, "Rim\nShot\nSnare"],
    [42, "Closed\nHi Hat"],
    [92, "Half\nHi Hat"],
    [46, "Open\nHi Hat"],
    [44, "Foot\nHi Hat"],
    [93, "Ride\nEdge\n"],
    [59, "Ride\nEdge\n"],
    [51, "Ride\nCymbal\n"],
    [53, "Ride\nBell"],
    [55, "Splash\n"],
    [52, "China\n\n"],
    [49, "High\nCrash\n"],
    [57, "Medium\nCrash\n"],
    [99, "Low\nCowbell"],
    [56, "Cowbell"],
    [102, "High\nCowbell"],
    [27, "High Q"],
    [28, "Slap"],
    [29, "Scratch\nPush\n"],
    [30, "Scratch\nPull\n"],
    [31, "Sticks"],
    [32, "Square\nClick"],
    [33, "Metronome\nClick"],
    [34, "Metronome\nBell"],
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
  gx = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
  gk = [49, 57],
  gC = [56, 102, 99, 54, 76, 77];
function gE(e, t, n) {
  let r = n * (5 - t) + 3;
  return gx.includes(e) ||
    gk.includes(e) ||
    92 === e ||
    46 === e ||
    52 === e ||
    93 === e ||
    59 === e
    ? `M0 4v${r - 4}`
    : gC.includes(e)
    ? `M0 3v${r - 3}`
    : `M0 0v${r}`;
}
function gT(e) {
  let t = gS.filter((t) => e.has(t[0]));
  return e.has(41) && e.has(45) && (t = t.filter((e) => 45 !== e[0])), t;
}
function gP(e) {
  let { noteString: t, intervalSize: n, className: r, noteTransform: i } = e;
  return f("use", {
    className: r,
    transform: i + ` translate(0, ${-(t - Math.round(0.999 * t)) * n})`,
    xlinkHref: "#extraLine",
  });
}
function g_(e) {
  let { fret: t, className: n, transform: r } = e;
  return gx.includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumCross" })
    : gk.includes(t)
    ? f("use", {
        className: n,
        transform: r,
        xlinkHref: "#drumCross",
        style: "stroke-width: 2",
      })
    : 52 === t
    ? f("g", {
        className: n,
        transform: r,
        children: [
          f("use", { xlinkHref: "#drumHat" }),
          f("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
        ],
      })
    : gC.includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumTriangle" })
    : [53, 91, 34].includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumRhomb" })
    : [46].includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumCircleCross" })
    : [92].includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumCircleStroke" })
    : [31].includes(t)
    ? f("use", { className: n, transform: r, xlinkHref: "#drumStroke" })
    : f("use", { className: n, transform: r, xlinkHref: "#drum" });
}
let gL = "rw29l",
  gA = { figure: "rw29l" },
  gI = "B6413b",
  gN = { strings: "B6413b" },
  gM = "h82xl",
  gB = "h89u",
  gO = "h82ou",
  gD = "h8j2",
  gz = "h82so",
  gR = "h81p9",
  g$ = "h81p9 h8e1",
  gF = "h81p9 h82d8",
  gV = "h81p9 h82c6",
  gU = "h81p9 h8cd",
  gH = "h816m",
  gj = "h818t",
  gG = "h818t h810t",
  gW = "h81w1",
  gq = "h82qg",
  gX = "h8152",
  gY = "h8ey",
  gK = "h8ey h81yr",
  gJ = "h8ey h8306",
  gZ = "h8ey h81cu",
  gQ = "h8ey h82xx",
  g1 = "h8ey h81cp",
  g0 = "h8ey h82tw",
  g2 = "h8ey h85n",
  g5 = "h8ey h82pf",
  g4 = {
    harmonic: "h82xl",
    rest0: "h89u",
    rest1: "h82ou",
    rest2: "h8j2",
    rest3: "h82so",
    voice: "h81p9",
    voice0: "h81p9 h8e1",
    voice1: "h81p9 h82d8",
    voice2: "h81p9 h82c6",
    voice3: "h81p9 h8cd",
    edited: "h816m",
    vDrum: "h818t",
    vDrum0: "h818t h810t",
    vDrum1: "h81w1",
    vDrum2: "h82qg",
    vDrum3: "h8152",
    drumstick: "h8ey",
    drums0: "h8ey h81yr",
    drums1: "h8ey h8306",
    drums2: "h8ey h81cu",
    drums3: "h8ey h82xx",
    stick0: "h8ey h81cp",
    stick1: "h8ey h82tw",
    stick2: "h8ey h85n",
    stick3: "h8ey h82pf",
  },
  g3 = 60;
function g9(e) {
  let { end: t, intervalSize: n } = e,
    r = "M0,0v48";
  for (let e = 0; e < 5; e++) r += `M0,${n * e} h${t}`;
  return (r += "V0"), g("path", { className: gN.strings, d: r });
}
function g8(e) {
  let { x: t, title: n, fret: r, string: i, intervalSize: a } = e;
  return g(
    k,
    null,
    g(
      "text",
      { textAnchor: "middle" },
      n.split("\n").map((e, n) => g("tspan", { x: t, y: -14 * (3 - n) }, e))
    ),
    g(g6, { x: t, fret: r, string: i, intervalSize: a })
  );
}
function g6(e) {
  let { x: t, fret: n, string: r, intervalSize: i } = e,
    a = g4.drums0,
    s = `translate(${t}, ${0.5 + i * r})`,
    o = g(g_, { fret: n, className: a, transform: s }),
    l =
      (r <= -1 || r >= 5) &&
      g(gP, {
        noteString: r,
        intervalSize: i,
        className: gN.strings,
        noteTransform: s,
      });
  return 93 === n || 59 === n
    ? g(
        k,
        null,
        l,
        g("use", {
          className: a,
          transform: `translate(${t}, ${0.5 - i / 2})`,
          xlinkHref: "#drumHatEdge",
        }),
        o
      )
    : l
    ? g(k, null, l, o)
    : o;
}
function g7(e) {
  let { drumNotes: t, intervalSize: n } = e,
    r = 60 * Math.max(4, t.length);
  return g(
    "svg",
    { className: gA.figure, width: r, height: 130 },
    g(
      "g",
      { transform: "translate(0, 54)" },
      g(g9, { end: r, intervalSize: n }),
      t.map((e, t) =>
        g(g8, {
          fret: e[0],
          intervalSize: n,
          string: iQ(e[0], !0),
          title: e[1],
          x: 60 * t + 30,
        })
      )
    )
  );
}
let fe = "Bcrye",
  ft = "Bcr2z8",
  fn = "Bcr19p",
  fr = "Bcr1zk",
  fi = "Bcr236",
  fa = "Bcr1zo",
  fs = "Bcr1os",
  fo = "Bcr1dk",
  fl = "Bcr1zo Bcrlb",
  fc = "Bcrl3",
  fu = {
    title: "Bcrye",
    line: "Bcr2z8",
    toggle: "Bcr19p",
    wrap: "Bcr1zk",
    wrapHorizontal: "Bcr236",
    notation: "Bcr1zo",
    name: "Bcr1os",
    def: "Bcr1dk",
    notation__old: "Bcr1zo Bcrlb",
    subtitle: "Bcrl3",
  },
  fd = "Byam0",
  fp = "Bya2az",
  fh = "Bya2dc",
  fm = "Bya1se",
  fg = {
    exitActive: "Byam0",
    enterActive: "Bya2az",
    enter: "Bya2dc",
    exit: "Bya1se",
  },
  ff = "Ccsdl",
  fy = "Ccsnt",
  fv = "Ccstw",
  fb = "Ccs2i1",
  fw = {
    exitActive: "Ccsdl",
    enterActive: "Ccsnt",
    enter: "Ccstw",
    exit: "Ccs2i1",
  },
  fS = { animationStyles: fg },
  fx = { animationStyles: fw },
  fk = "help_notation";
function fC(e, t) {
  let n = gT(e),
    r = [];
  for (let e = 0; e < n.length; e += 4) r.push(n.slice(e, e + 4));
  return t && r.length % 2 == 1 && r.push([]), r;
}
function fE(e) {
  let t = Math.floor((e.size + 2) / 3),
    n = [...e.values()];
  return [n.slice(0, t), n.slice(t, 2 * t), n.slice(2 * t)];
}
let fT = C((e) => {
    let { usedDrums: t, horizontal: n } = e,
      { layer: r, experiments: i } = lU("layer", "experiments"),
      a = r.layer === fk,
      s = i.drum_standard_notation?.segment !== "drop",
      o = s ? fC(t, n) : fE(t);
    return g(
      ml,
      null,
      a &&
        g(
          my,
          n ? fS : fx,
          g(
            "div",
            { className: n ? fu.wrapHorizontal : fu.wrap },
            g(
              "div",
              {
                className: s ? fu.notation : fu.notation__old,
                id: "drum_notation",
              },
              g(
                "h3",
                { className: fu.title },
                "Instruments in the current track"
              ),
              s
                ? o.map((e) => f(g7, { drumNotes: e, intervalSize: r_ }))
                : o.map((e, t) =>
                    g(
                      "div",
                      { className: fu.col, key: t },
                      e.map((e) =>
                        g(
                          "dl",
                          { className: fu.line, key: e.name },
                          g("dt", { className: fu.name }, e.name),
                          g("dd", { className: fu.def }, iW[e.name])
                        )
                      )
                    )
                  )
            )
          )
        )
    );
  }),
  fP = "Cpf12y",
  f_ = "Cpf2jn",
  fL = { difficulty: "Cpf12y", placeholder: "Cpf2jn" },
  fA = 5,
  fI = (e) => {
    let { id: t, difficultyString: n, difficultyNA: r } = e;
    if (!n || r)
      return g("span", { className: fL.placeholder, title: "Not calculated" });
    let i = 5 * nd(n);
    return g("span", {
      id: t,
      className: fL.difficulty,
      style: { "--diffSize": `${i}px` },
      title: np(n),
    });
  };
function fN(e) {
  let { styles: t } = e;
  return g(
    "svg",
    {
      width: 13,
      height: 13,
      className: t.icon,
      viewBox: "0 -3 13 13",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    g("rect", { y: 1, width: 13, height: 11, rx: 3, className: t.fill }),
    g("path", {
      className: t.fillText,
      d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z",
    })
  );
}
let fM = "C6110p",
  fB = "C611iz",
  fO = "C61zq",
  fD = "C6131n",
  fz = "C612su",
  fR = "C61p",
  f$ = "C61rs",
  fF = "C61a4",
  fV = "C6133l",
  fU = "C611xo",
  fH = "C612yg",
  fj = "C612gh",
  fG = "C61287",
  fW = "C612h7",
  fq = "C612h7 C611ae",
  fX = "C61az",
  fY = "C61jc",
  fK = "C611ts",
  fJ = "C612rd",
  fZ = "C61212",
  fQ = "C611fz",
  f1 = "C611m5",
  f0 = "C612eq",
  f2 = "C612w9",
  f5 = {
    header: "C6110p",
    wrap: "C611iz",
    separator: "C61zq",
    placeholder: "C6131n",
    song: "C612su",
    dash: "C61p",
    artist: "C61rs",
    track: "C61a4",
    difficulty: "C6133l",
    fill: "C611xo",
    fillText: "C612yg",
    explainLink: "C612gh",
    difficultyLinksPanel: "C61287",
    findEasierSongsLink: "C612h7",
    reportInvalidDifficultyLink: "C612h7 C611ae",
    label: "C61az",
    showroom: "C61jc",
    demo: "C611ts",
    instrumentTab: "C612rd",
    burger: "C61212",
    icon: "C611fz",
    stroke: "C611m5",
    lastEditOn: "C612eq",
    lastEditLink: "C612w9",
  },
  f4 = { animationStyles: fw };
function f3(e) {
  let { handleNotation: t, track: n } = e,
    {
      dispatch: r,
      part: i,
      meta: a,
      screen: s,
      layer: o,
      device: l,
    } = lU("layer", "part", "meta", "screen", "layer", "device"),
    c = l.isDesktop,
    u = s.isSmall,
    d = i.current && i.current.usedDrums,
    p = b(() => {
      r("layer/show", "difficulty_explained_popup");
    }, []),
    h = n.difficulty,
    m = !u && h && "difficulty_explained_popup" === o.layer,
    f = {
      className: f5.explainLink,
      onClick: p,
      title: "Explain how difficulty is calculated",
      id: "explain_difficulty_link",
    },
    y = l.locale ? [l.locale] : void 0,
    v = a && a.current && a.current.created_at,
    w = v ? tD(new Date(a.current.created_at), y) : null,
    S = w && a.current && !a.revisionId ? "Last edit on:" : "Revision from:",
    x = w && !a.isDeleted && !u,
    C = b(() => {
      "revisions" !== o.layer &&
        (r("layer/show", "revisions"),
        r("curiosity/event", {
          event: "Opened revisions panel",
          Via: "Last edit on link",
          "Song id": a.songId.toString(),
        }));
    }, [o.layer]);
  return g(
    k,
    null,
    g(
      "div",
      { className: f5.name, "aria-label": "track" },
      "Track: ",
      n.titleFull
    ),
    u &&
      !a.isDeleted &&
      d &&
      g(
        "button",
        { className: fu.toggle, onClick: t, "aria-label": "notation" },
        "(notation)"
      ),
    u && !a.isDeleted && d && g(fT, { usedDrums: d }),
    u && g("hr", { className: f5.separator, width: 250 }),
    h &&
      g(
        "div",
        { className: f5.difficulty, "aria-label": "track difficulty (rhythm)" },
        g("span", { className: f5.label }, "Difficulty (Rhythm):"),
        g(fI, { id: "track-difficulty", difficultyString: n.difficulty }),
        c && g("button", f, g(fN, { styles: f5 })),
        c && g(ml, null, m && g(my, f4, g(h7, null)))
      ),
    x &&
      g(
        "div",
        { className: f5.lastEditOn, "aria-label": "last edit on" },
        g("span", { className: f5.label }, S),
        g("a", { to: null, onClick: C, className: f5.lastEditLink }, w)
      )
  );
}
let f9 =
  "M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function f8(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r, stroke: i },
  } = e;
  return g(
    "svg",
    {
      width: t || 18,
      height: n || 19,
      viewBox: "0 0 18 19",
      className: r,
      "aria-labelledby": "title-signin",
    },
    g("title", { id: "title-signin" }, "Sign In"),
    g("path", {
      className: i,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: f9,
    })
  );
}
function f6() {
  return g(
    "svg",
    { width: 55, height: 55, viewBox: "0 0 55 55" },
    g("path", {
      d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
      fill: "#FFAD00",
    }),
    g("path", {
      stroke: "#FFF",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      fill: "none",
      transform: "translate(7 10) scale(1.85)",
      d: f9,
    })
  );
}
let f7 = hD + " Cpv2j2",
  ye = hK + " Cpv16o",
  yt = hQ + " Cpv2mh",
  yn = "Cpv2hv",
  yr = {
    popup: hD + " Cpv2j2",
    wrapper: hK + " Cpv16o",
    text: hQ + " Cpv2mh",
    link: "Cpv2hv",
  },
  yi = "${}",
  ya = RegExp("\\${}", "g"),
  ys = (e) => {
    let t = e?.pluralForms;
    return t
      ? Function("n", "nplurals", "plural", `${t} return ~~plural;`)
      : yo;
  };
function yo(e) {
  return 1 === e ? 0 : 1;
}
let yl = (e) => e.join("${}"),
  yc = (e, t) => {
    let n = 0;
    return e.replace(ya, () => t[n++]);
  };
function yu(e, t) {
  let n = t.find((t) => t?.language === e),
    r = ys(n),
    i = function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return n?.translations?.[e]?.[t]?.[r] || "";
    },
    a = (e, t) =>
      t
        ? i(e, t) || t
        : function (t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              r[a - 1] = arguments[a];
            let s = yl(t),
              o = i(e, s) || s;
            return yc(o, r);
          },
    s = (e, t, n, a) =>
      t
        ? i(e, t, r(a)) || (0 === yo(a) ? t : n)
        : function (t) {
            for (
              var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1;
              s < n;
              s++
            )
              a[s - 1] = arguments[s];
            return function (n) {
              for (
                var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), l = 1;
                l < s;
                l++
              )
                o[l - 1] = arguments[l];
              return (s) => {
                let l = yl(t),
                  c = r(s),
                  u = i(e, l, c);
                return u
                  ? yc(u, c ? o : a)
                  : yc((c = yo(s)) ? yl(n) : l, c ? o : a);
              };
            };
          };
  return {
    locale: e,
    gettext: function (e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      if (Array.isArray(e)) {
        let t = yl(e),
          r = i("", t) || t;
        return yc(r, n);
      }
      return i("", e) || e;
    },
    pgettext: a,
    ngettext: function (e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      if (Array.isArray(e))
        return function (t) {
          for (
            var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1;
            o < a;
            o++
          )
            s[o - 1] = arguments[o];
          return (a) => {
            let o = yl(e),
              l = r(a),
              c = i("", o, l);
            return c
              ? yc(c, l ? s : n)
              : yc((l = yo(a)) ? yl(t) : o, l ? s : n);
          };
        };
      let s = n[1];
      return i("", e, r(s)) || (0 === yo(s) ? e : n[0]);
    },
    npgettext: s,
  };
}
var yd = (e) => {
    let { device: t } = lU("device"),
      n = "en";
    return (
      t.locale && (n = t.locale.split("-")[0].toLowerCase()),
      (window.__LOCALE__ = n),
      p(() => yu(n, e), [e, n])
    );
  },
  yp = null,
  yh = null,
  ym = null,
  yg = null,
  yf = null,
  yy = null,
  yv = null,
  yb = null,
  yw = null,
  yS = null,
  yx = [yp, yh, ym, yg, yf, yy, yv, yb, yw, yS];
function yk(e) {
  let { onClick: t, id: n } = e,
    { gettext: r } = yd(yx);
  return g(
    hO,
    {
      className: yr.popup,
      id: n,
      to: "/a/wa/signin",
      onClick: t,
      role: "dialog",
      "aria-label": r("Sign up for free to favorite this tab."),
    },
    g("span", { className: yr.wrapper }, g(f6, null)),
    g(
      "div",
      { className: yr.text },
      r("Please "),
      g("span", { className: yr.link }, r("sign up")),
      r(" for free"),
      g("br", null),
      r("to favorite this tab.")
    )
  );
}
let yC =
    "M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
  yE = `${yC}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function yT(e) {
  let {
      width: t,
      height: n,
      viewbox: r,
      title: i = "Favorite",
      styles: { icon: a },
      id: s,
      state: o,
    } = e,
    l = `title-${s || "favorite"}`;
  return g(
    "svg",
    {
      width: t || 29,
      height: n || 27,
      viewBox: r || "0 0 29 27",
      className: a,
      "data-icon": o,
      id: s,
      "aria-labelledby": l,
    },
    g("title", { id: l }, i),
    g("path", { d: "fill" === o ? yC : yE })
  );
}
let yP = "xji4",
  y_ = "xj3s",
  yL = "xj248",
  yA = "xj248 xj13q",
  yI = {
    favorite: "xji4",
    toggle: "xj3s",
    star: "xj248",
    starSelected: "xj248 xj13q",
  },
  yN = { animationStyles: fw };
function yM() {
  let {
    dispatch: e,
    user: t,
    favorites: n,
    meta: r,
    layer: i,
  } = lU("user", "favorites", "meta", "experiments", "layer");
  if (!r.allowedByLicense || r.isDeleted) return;
  let a = "favorite" === i.layer,
    s = t.isLoggedIn,
    o = r.partId,
    l =
      s &&
      (r.wasFavoriteOnServerRender ||
        n.favorites.some((e) => e.songId === r.songId)),
    c = b(() => {
      if (s && r.current) {
        if (l) e("favorites/delete", r.songId);
        else {
          let {
              songId: t,
              artistId: n,
              artist: i,
              title: a,
              tracks: s,
            } = r.current,
            l = {
              songId: t,
              artistId: n,
              artist: i,
              title: a,
              tracks: s
                ? s.map((e) => {
                    let {
                      instrument: t,
                      instrumentId: n,
                      name: r,
                      difficulty: i,
                      tuning: a,
                    } = e;
                    return {
                      instrument: t,
                      instrumentId: n,
                      name: r,
                      tuning: a,
                      difficulty: i,
                    };
                  })
                : s,
              defaultTrack: o,
            };
          n7(l), e("favorites/add", { songId: t, song: l });
        }
        i.layer && e("layer/hide");
      } else a ? e("layer/hide") : e("layer/show", "favorite");
    }, [i, s, l, r, o]),
    u = l ? yI.starSelected : yI.star;
  return g(
    "div",
    { className: yI.favorite, id: "favorite" },
    g(
      "button",
      {
        className: yI.toggle,
        id: "favorite-toggle",
        onClick: c,
        title: l ? "Remove from favorites" : "Add to favorites",
      },
      g(yT, {
        width: 30,
        height: 30,
        viewbox: "-4 -3 35 35",
        state: l ? "fill" : "none",
        styles: { icon: u },
        id: "favorite-icon",
      })
    ),
    g(ml, null, a && g(my, yN, g(yk, { id: "favorite-popup" })))
  );
}
function yB(e) {
  let { styles: t } = e;
  return g(
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
    g("title", { id: "tab-delete-id" }, "Delete Tab"),
    g("path", {
      className: t.strokeAnim,
      d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z",
    }),
    g("path", {
      className: t.fill,
      d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z",
    }),
    g("path", {
      className: t.strokeAnim,
      d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z",
    })
  );
}
let yO = "tnv2",
  yD = "tn1vk",
  yz = "tn1vk tnwo",
  yR = "tn13b",
  y$ = "tn1pz",
  yF = "tn1pz tn10k",
  yV = {
    delete: "tnv2",
    button: "tn1vk",
    buttonActive: "tn1vk tnwo",
    icon: "tn13b",
    fill: "tn1pz",
    strokeAnim: "tn1pz tn10k",
  },
  yU = (e, t) => {
    let n = `${e}, ${t}`,
      r =
        "You are about to delete the whole song with all its revisions permanently. To confirm deletion, please enter the song artist and title as described below:\n\n" +
        n +
        "\n",
      i = window.prompt(r);
    return (
      i === n ||
      (window.alert(
        "Confirmation string does not match artist and title. Aborting deletion!"
      ),
      !1)
    );
  },
  yH = () => {
    let { dispatch: e, meta: t, user: n, part: r } = lU("meta", "user", "part"),
      { isDeleted: i, allowedDeletion: a, isFailed: s } = t,
      o = s || r.isFailed,
      l = t.current && 0 === tu.getAll(t.current).length;
    if (i || o || l || !a) return null;
    let c = b(() => {
        t.current &&
          (td(n, V.MANAGE_SONGS) || yU(t.current.artist, t.current.title)) &&
          e("meta/deleteSong", {
            songId: t.current.songId,
            artist: t.current.artist,
            title: t.current.title,
          });
      }, [e, t.current]),
      u = t.deleting;
    return g(
      "div",
      { className: yV.delete, id: "deletion" },
      u && g(hS, { width: 21, height: 21, fill: "#42a4f8" }),
      !u &&
        g("button", { className: yV.button, onClick: c }, g(yB, { styles: yV }))
    );
  };
function yj(e) {
  let { styles: t } = e;
  return g(
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
    g("title", { id: "revisions-title-id" }, "Revisions"),
    g("path", {
      className: t.strokeAnim,
      "stroke-width": "2",
      d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9",
    }),
    g("path", {
      className: t.stroke,
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      strokeLinejoin: "round",
      d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6",
    }),
    g("path", {
      className: t.fill,
      d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z",
    })
  );
}
let yG = "undefined" == typeof window;
function yW(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
  if (!yG)
    return Promise.all(
      e?.map(
        (e) =>
          new Promise((n, r) => {
            if (document.querySelectorAll(`link[href="${e}"]`).length) {
              n(!0);
              return;
            }
            let i = document.createElement("link"),
              a = (document.body || document.getElementsByTagName("head")[0])
                .childNodes,
              s = a[a.length - 1];
            Object.assign(i, {
              rel: "stylesheet",
              href: e,
              onerror: r,
              onload: n,
              media: t,
            }),
              s.parentNode.insertBefore(i, s.nextSibling);
          })
      )
    );
}
let yq = "Bo82u2",
  yX = "Bo81oq",
  yY = { popup: "Bo82u2", arrow: "Bo81oq" },
  yK = E(() =>
    Promise.all([
      import("./RevisionsPopupContent.3097fda3.js"),
      yW([
        "/static/latest/RevisionsPopupContent.96c60a8835717ce5.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/UploadInstructions.33b24b6372106d73.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadRevisionForm.module.b85096c82cbce142.css",
      ]),
    ]).then((e) => e[0])
  ),
  yJ = 298,
  yZ = () => {
    let { dispatch: e, meta: t } = lU("meta"),
      [n, r] = d({ height: 298 });
    return (
      p(async () => {
        let n = new t$();
        return await cL(e, t.songId, n.signal), n.abort.bind(n);
      }, [t.songId]),
      m(() => e("upload/reset"), []),
      g(
        "div",
        { id: "revisions-popup", className: yY.popup, style: n },
        g(hM, { component: yK, style: n, setStyle: r }),
        g("div", { className: yY.arrow })
      )
    );
  },
  yQ = "e32l8",
  y1 = "e32ah",
  y0 = "e32ah e3d0",
  y2 = "e32em",
  y5 = "e32kz",
  y4 = "e319r",
  y3 = "e319r e31k",
  y9 = {
    revisions: "e32l8",
    toggle: "e32ah",
    toggleActive: "e32ah e3d0",
    icon: "e32em",
    fill: "e32kz",
    stroke: "e319r",
    strokeAnim: "e319r e31k",
  },
  y8 = { animationStyles: fw },
  y6 = () => {
    let {
        dispatch: e,
        layer: t,
        isDeleted: n,
        screen: r,
        meta: i,
      } = lU("layer", "screen", "isDeleted", "meta"),
      a = !n && !r.isSmall && i.allowedByLicense;
    if (!a) return;
    let s = "revisions" === t.layer,
      o = b(() => {
        "revisions" === t.layer
          ? e("layer/hide")
          : (e("layer/show", "revisions"),
            e("curiosity/event", {
              event: "Opened revisions panel",
              Via: "Revisions button",
              "Song id": i.songId.toString(),
            }));
      }, [t.layer]),
      l = {
        className: s ? y9.toggleActive : y9.toggle,
        id: "revisions-toggle",
        onClick: o,
        title: s ? "Hide revisions" : "Show revisions",
      },
      c = g(yZ, null);
    return g(
      "div",
      { className: y9.revisions, id: "revisions" },
      g("button", l, g(yj, { styles: y9 })),
      g(ml, null, s && g(my, y8, c))
    );
  };
function y7(e) {
  let {
    shadow: t = "#CA7F06",
    width: n = 54,
    height: r = 30,
    id: i = "iconDemo",
  } = e;
  return g(
    "svg",
    { width: n, height: r, viewBox: "0 0 54 30" },
    g(
      "defs",
      {},
      g(
        "filter",
        {
          id: i,
          x: "-200%",
          y: "-200%",
          width: "400%",
          height: "400%",
          "filter-units": "objectBoundingBox",
          "color-interpolation-filters": "sRGB",
        },
        g("feGaussianBlur", { in: "SourceGraphic" }),
        g("feOffset", { dy: 3, result: "offsetBlur" }),
        g("feFlood", { floodColor: t, floodOpacity: 1 }),
        g("feComposite", {
          in2: "offsetBlur",
          operator: "in",
          result: "dropShadow",
        }),
        g("feBlend", { in: "SourceGraphic", in2: "dropShadow" })
      )
    ),
    g("path", {
      d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
      fill: "#FF9D00",
      filter: `url(#${i})`,
      databackgound: "",
    }),
    g("path", {
      fill: "#FFF",
      d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
    })
  );
}
let ve = "Cy52of",
  vt = { switcherLink: "Cy52of" };
var vn = "/static/media/to-chords.052d3c49.svg",
  vr = "/static/media/to-tab.8c38afc0.svg";
function vi(e) {
  let { isTab: t, isChords: n, song: r, meta: i, chords: a } = e;
  if (t && r.hasChords) {
    let e = r.title + " Chords";
    return f(hO, {
      to: e7(i.current),
      className: vt.switcherLink,
      title: e,
      children: [f("img", { src: vn, width: 23, height: 22, alt: e })],
    });
  }
  if (n && r.hasPlayer) {
    let e = r.title + " Tab";
    return f(hO, {
      to: e9(a.current),
      className: vt.switcherLink,
      title: e,
      children: [f("img", { src: vr, width: 23, height: 22, alt: e })],
    });
  }
}
function va(e) {
  let {
    styles: { icon: t, stroke: n },
  } = e;
  return g(
    "svg",
    { width: 27, height: 25, viewBox: "0 0 27 25", className: t },
    g("path", { d: "M0 5h27M0 12h27M0 19h27", className: n, "stroke-width": 2 })
  );
}
function vs(e) {
  return eT(e) ? " Bass Tab" : eC(e) ? " Drum Tab" : " Tab";
}
function vo(e) {
  let t,
    n,
    { plusAccess: r, handleNotation: i, showFullUI: a = !0 } = e,
    {
      dispatch: s,
      route: o,
      routeContent: l,
      songs: c,
      artist: u,
      screen: p,
      favorites: h,
      meta: g,
      demo: y,
      chords: v,
    } = lU(
      "route",
      "routeContent",
      "songs",
      "artist",
      "favorites",
      "screen",
      "meta",
      "demo",
      "chords"
    ),
    [b, w] = d(!1),
    S = o.isPanel,
    x = p.isSmall,
    C = l.songId,
    E = !1,
    T = !1,
    P = !1,
    _ = null;
  if (
    ("tab" === l.page
      ? ((E = !0),
        (P = !r && g.allowedByLicense),
        g.current &&
          g.current.songId === C &&
          ((t = g.current),
          null != g.partId &&
            g.current.tracks &&
            (_ = g.current.tracks[g.partId])),
        !t &&
          v.current &&
          v.current.songId === C &&
          (t = { ...v.current, hasChords: !0 }),
        (n = " Tab"))
      : "chords" === l.page &&
        ((T = !0),
        v.current && v.current.songId === C && (t = v.current),
        !t &&
          g.current &&
          g.current.songId === C &&
          (t = { ...g.current, hasPlayer: !0 }),
        (n = " Chords")),
    t || (t = c.songs.list.find((e) => e.songId === C)),
    t || (t = u.songs.list.find((e) => e.songId === C)),
    t || (t = h.favorites.find((e) => e.songId === C)),
    !t)
  )
    return;
  if ("tab" === l.page) {
    if (_) n = vs(_.instrumentId);
    else if (null == l.partId)
      "bass" === l.partInstrument
        ? (n = vs(32))
        : "drum" === l.partInstrument && (n = vs(1024));
    else {
      let e = t.tracks;
      e && e[l.partId] && (n = vs(e[l.partId].instrumentId));
    }
  }
  if (!a)
    return f("header", {
      className: f5.header,
      id: "header",
      children: [
        f("div", {
          className: f5.wrap,
          children: [
            f(
              "h1",
              {
                className: f5.song,
                children: [
                  f(
                    "span",
                    {
                      className: f5.artist,
                      "aria-label": "artist",
                      children: t.artist,
                    },
                    "arts"
                  ),
                  f(
                    "span",
                    { className: f5.dash, children: "\xa0-\xa0" },
                    "dash"
                  ),
                  f(
                    "span",
                    {
                      className: f5.title,
                      "aria-label": "title",
                      children: t.title,
                    },
                    "ttl"
                  ),
                  f(
                    "span",
                    {
                      className: f5.instrumentTab,
                      "aria-label": "tab type",
                      children: n,
                    },
                    "sfx"
                  ),
                ],
              },
              "h-h1"
            ),
          ],
        }),
      ],
    });
  let L = () =>
      s("curiosity/setConversionProps", { "Last referring link": "Demo Link" }),
    A = () =>
      s("curiosity/setConversionProps", {
        "Last referring link": "Header Link",
      });
  return (
    m(() => {
      w(!1);
      let e = setTimeout(() => {
        w(!0);
      }, 6e5);
      return () => clearTimeout(e);
    }, [C]),
    f("header", {
      className: f5.header,
      id: "header",
      children: [
        f("div", {
          className: f5.wrap,
          children: [
            x &&
              f(
                hO,
                {
                  to: `/${lD(c.pattern, c.filters)}`,
                  className: f5.burger,
                  title: "Search",
                  id: "appheader-burger",
                  children: f(va, { styles: f5 }, "icn"),
                },
                "menu"
              ),
            E && f(yM, null, "fav"),
            f(
              vi,
              { isTab: E, isChords: T, song: t, meta: g, chords: v },
              "switch"
            ),
            f(
              S ? "div" : "h1",
              {
                className: f5.song,
                children: [
                  f(
                    hO,
                    {
                      className: f5.artist,
                      "aria-label": "artist",
                      to: `${e6(t)}${lD(u.pattern, u.filters)}`,
                      children: t.artist,
                    },
                    "artist"
                  ),
                  f(
                    "span",
                    { className: f5.dash, children: "\xa0-\xa0" },
                    "dash"
                  ),
                  f(
                    "span",
                    {
                      className: f5.title,
                      "aria-label": "title",
                      children: t.title,
                    },
                    "ttl"
                  ),
                  f(
                    "span",
                    {
                      className: f5.instrumentTab,
                      "aria-label": "tab type",
                      children: n,
                    },
                    "sfx"
                  ),
                  ot(y) &&
                    f(hO, {
                      to: "/a/wa/plus",
                      className: f5.demo,
                      "aria-label": "Demo Song",
                      onClick: L,
                      children: f(
                        y7,
                        {
                          width: 42,
                          height: 22,
                          shadow: "transparent",
                          id: "iconDemo2",
                        },
                        "demo"
                      ),
                    }),
                ],
              },
              S ? "h-div" : "h-h1"
            ),
            a &&
              E &&
              f(k, { children: [f(yH, null, "del"), f(y6, null, "rev")] }),
            P &&
              f(
                hO,
                {
                  id: "text-showroom",
                  className: f5.showroom,
                  to: "/a/wa/plus?from=header_link",
                  onClick: A,
                  children: [
                    b
                      ? "Struggling to learn this song? Improve your playing with Songsterr Plus!"
                      : "Subscribe to Plus. Paid users learn tabs 60% faster!",
                  ],
                },
                "show"
              ),
            _ &&
              !g.isDeleted &&
              f(
                S ? "div" : "h2",
                {
                  className: f5.track,
                  children: f(f3, { track: _, handleNotation: i }),
                },
                S ? "div" : "h2"
              ),
          ],
        }),
      ],
    })
  );
}
let vl = "x012m",
  vc = "x0ln",
  vu = "x01yo",
  vd = "x02wd",
  vp = "x02du",
  vh = "x01qb",
  vm = "x02zn",
  vg = "x02vp",
  vf = "x02e0",
  vy = "x0tr",
  vv = "x02zn x035p",
  vb = "x026k",
  vw = "x02ar",
  vS = "x0mp",
  vx = "x02fd",
  vk = "x0198",
  vC = {
    pane: "x012m",
    divider: "x0ln",
    dividerEdge: "x01yo",
    dividerSmall: "x02wd",
    float: "x02du",
    icon: "x01qb",
    item: "x02zn",
    logo: "x02vp",
    text: "x02e0",
    stroke: "x0tr",
    itemActive: "x02zn x035p",
    logoText: "x026k",
    overlay: "x02ar",
    jobs: "x0mp",
    new: "x02fd",
    mainpanel: "x0198",
  },
  vE = {
    search: ["search"],
    signin: ["signup", "forgotpassword"],
    account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
    plus: ["subscribePlus"],
  };
function vT(e) {
  let { id: t, route: n, url: r, songUrl: i, children: a, linkClick: s } = e,
    o = u(lF),
    l = t === n.page || (t in vE && -1 !== vE[t].indexOf(n.page)),
    c = t === n.page ? i : r,
    d = b(
      (e) => {
        e.preventDefault(), s && s(l), o.dispatch("navigate", c);
      },
      [c]
    );
  return g(
    "a",
    {
      href: c,
      onClick: d,
      id: `menu-${t}`,
      class: l ? vC.itemActive : vC.item,
    },
    a
  );
}
function vP(e) {
  let { favorites: t } = lU("favorites");
  return g(vT, { ...e, url: `${e.url}${lD(t.pattern, t.filters)}` });
}
function v_(e) {
  let { songs: t, dispatch: n } = lU("songs"),
    r = `${e.url}${lD(t.pattern, t.filters)}`,
    i = "search" === e.route.page ? e.songUrl : r,
    a = b(
      (e) => {
        e.preventDefault(), n("navigate", i);
      },
      [i]
    );
  return f("a", {
    id: "logo",
    className: e.className,
    title: "Songsterr",
    href: i,
    onClick: a,
    children: e.children,
  });
}
function vL(e) {
  let { songs: t } = lU("songs");
  return g(vT, { ...e, url: `${e.url}${lD(t.pattern, t.filters)}` });
}
function vA(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r, stroke: i },
  } = e;
  return g(
    "svg",
    {
      width: t || 19,
      height: n || 19,
      viewBox: "0 0 19 19",
      className: r,
      "aria-labelledby": "title-account",
    },
    g("title", { id: "title-account" }, "Account"),
    g("ellipse", {
      className: i,
      cx: 9.73,
      cy: 5.8,
      rx: 3.76,
      ry: 4.7,
      strokeWidth: 1.5,
    }),
    g("path", {
      className: i,
      strokeWidth: 1.5,
      d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z",
    })
  );
}
function vI(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r },
  } = e;
  return g(
    "svg",
    { width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: r },
    g("path", {
      d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
    })
  );
}
function vN(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r },
  } = e;
  return g(
    "svg",
    {
      width: t || 29,
      height: n || 27,
      viewBox: "0 0 1000 820",
      className: r,
      "aria-labelledby": "title-faq",
    },
    g("title", { id: "title-faq" }, "Frequently Asked Questions"),
    g("path", {
      d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
    })
  );
}
function vM(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r, stroke: i },
  } = e;
  return g(
    "svg",
    { width: t || 18, height: n || 19, viewBox: "0 0 18 19", className: r },
    g("path", {
      className: i,
      strokeWidth: 1.5,
      strokeLinecap: "round",
      d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42",
    })
  );
}
let vB =
    "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
  vO = "M14.5 17v-15.5m-5 5l5 -5l5 5";
function vD(e) {
  let {
    width: t,
    height: n,
    styles: { icon: r, stroke: i },
  } = e;
  return g(
    "svg",
    { width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: r },
    g("path", {
      d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
    }),
    g("path", {
      className: i,
      "stroke-width": 2,
      d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
    })
  );
}
function vz(e) {
  if (!document.body) return;
  let t = window.innerWidth - document.body.clientWidth,
    n = e ? "0px" : `${t}px`;
  document.body.style.overflow = e ? "inherit" : "hidden";
  let r = document.getElementById("app");
  r && (r.style.marginRight = n);
  let i = document.getElementById("controls");
  i && (i.style.marginRight = n);
  let a = document.getElementById("showroom");
  a && (a.style.paddingRight = n);
  let s = document.documentElement;
  s && s.style.setProperty("--page-overflow-gap", n);
}
let vR = E(() =>
    Promise.all([
      import("./AppChords.9c412ecb.js"),
      yW([
        "/static/latest/AppChords.8c5c2858fe5f8fc4.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
        "/static/latest/SWW.ee0869611439c289.css",
        "/static/latest/Capo.dafde59b4d16e326.css",
      ]),
    ]).then((e) => e[0])
  ),
  v$ = E(() =>
    Promise.all([
      import("./AppTags.073e8521.js"),
      yW([
        "/static/latest/AppTags.e210aabd9d1f9d59.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
        "/static/latest/SWW.ee0869611439c289.css",
      ]),
    ]).then((e) => e[0])
  ),
  vF = E(() =>
    Promise.all([
      import("./AppTab.19fc1308.js"),
      yW([
        "/static/latest/AppTab.f23cd2c91c042d6a.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Capo.dafde59b4d16e326.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadRevisionForm.module.b85096c82cbce142.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
        "/static/latest/SWW.ee0869611439c289.css",
      ]),
    ]).then((e) => e[0])
  ),
  vV = E(() =>
    Promise.all([
      import("./SongsPanel.a06eb65a.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.01d9d929d90358c1.css",
        "/static/latest/SearchBox.4bb250a8e8d72c76.css",
        "/static/latest/Stub.840d865f8d59eb70.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
      ]),
    ]).then((e) => e[0])
  ),
  vU = E(() =>
    Promise.all([
      import("./FavoritesPanel.6783da2f.js"),
      yW([
        "/static/latest/FavoritesPanel.fccd96b41e79d31b.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.01d9d929d90358c1.css",
        "/static/latest/SearchBox.4bb250a8e8d72c76.css",
        "/static/latest/Stub.840d865f8d59eb70.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/SongsPanel.module.bc3c6d9548d306c8.css",
      ]),
    ]).then((e) => e[0])
  ),
  vH = E(() =>
    Promise.all([
      import("./ArtistPanel.a5aa77d0.js"),
      yW([
        "/static/latest/ArtistPanel.fd61db0afdcd05e3.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.01d9d929d90358c1.css",
        "/static/latest/SearchBox.4bb250a8e8d72c76.css",
        "/static/latest/Stub.840d865f8d59eb70.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vj = E(() =>
    Promise.all([
      import("./SubmitPanel.dc771b90.js"),
      yW([
        "/static/latest/SubmitPanel.8a39e7eff3cd94af.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadInstructions.33b24b6372106d73.css",
        "/static/latest/Stub.840d865f8d59eb70.css",
      ]),
    ]).then((e) => e[0])
  ),
  vG = E(() =>
    Promise.all([
      import("./TextPanel.43b4863c.js"),
      yW([
        "/static/latest/TextPanel.b65687d362098683.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/index.546235ebfd21e495.css",
      ]),
    ]).then((e) => e[0])
  ),
  vW = E(() =>
    Promise.all([
      import("./AboutPanel.a1d7a792.js"),
      yW([
        "/static/latest/AboutPanel.90a1dc2a1bed94a5.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vq = E(() =>
    Promise.all([
      import("./JobsPanel.68408005.js"),
      yW([
        "/static/latest/JobsPanel.5f73cabf19d918b7.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vX = E(() =>
    Promise.all([
      import("./HelpPanel.1271f894.js"),
      yW([
        "/static/latest/HelpPanel.0e111599c5b6d415.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/TocPointer.4277edfc32523766.css",
        "/static/latest/SearchBox.4bb250a8e8d72c76.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
        "/static/latest/SWW.ee0869611439c289.css",
      ]),
    ]).then((e) => e[0])
  ),
  vY = E(() =>
    Promise.all([
      import("./SigninPanel.81a13b02.js"),
      yW([
        "/static/latest/SigninPanel.374924d6629568fa.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vK = E(() =>
    Promise.all([
      import("./SignupPanel.ca0b7b40.js"),
      yW([
        "/static/latest/SignupPanel.c958ca78cefae30f.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vJ = E(() =>
    Promise.all([
      import("./AccountPanel.fb88e539.js"),
      yW([
        "/static/latest/AccountPanel.a74461eaddfc799e.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  vZ = E(() =>
    Promise.all([
      import("./MyTabsPanel.2691619b.js"),
      yW([
        "/static/latest/MyTabsPanel.43322a0d39d03c63.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/Stub.840d865f8d59eb70.css",
      ]),
    ]).then((e) => e[0])
  ),
  vQ = E(() =>
    Promise.all([
      import("./ForgotPasswordPanel.0e66a27d.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  v1 = E(() =>
    Promise.all([
      import("./ChangePasswordPanel.263a2050.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  v0 = E(() =>
    Promise.all([
      import("./PlusPanel.12c60376.js"),
      yW([
        "/static/latest/PlusPanel.cf385811451b187d.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  v2 = E(() =>
    Promise.all([
      import("./PaymentPanel.9c66c965.js"),
      yW([
        "/static/latest/PaymentPanel.6d2b3da012ef330b.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/PaymentForm.84991b3ba8107b90.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  v5 = E(() =>
    Promise.all([
      import("./CouponPanel.f30dfd2e.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  v4 = E(() =>
    Promise.all([
      import("./CancelPlusPanel.e137cca1.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  v3 = E(() =>
    Promise.all([
      import("./DeactivatePanel.f6b4f287.js"),
      yW([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  v9 = E(() =>
    Promise.all([
      import("./UpdateCardPanel.e4dc8c8c.js"),
      yW([
        "/static/latest/UpdateCardPanel.38d040a682d0cdf1.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/PaymentForm.84991b3ba8107b90.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  v8 = E(() =>
    Promise.all([
      import("./HowToReadTabPanel.8a7aea8d.js"),
      yW([
        "/static/latest/HowToReadTabPanel.4e5ad16256add301.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/TocPointer.4277edfc32523766.css",
        "/static/latest/Panel.c142932aa80c2dcc.css",
      ]),
    ]).then((e) => e[0])
  ),
  v6 = "w6o",
  v7 = "w613o",
  be = "w617j",
  bt = "w6ty",
  bn = {
    exitActive: "w6o",
    enterActive: "w613o",
    enter: "w617j",
    exit: "w6ty",
  };
function br(e) {
  let { width: t, height: n, styles: r } = e;
  return g(
    "svg",
    {
      width: t || 21,
      height: n || 26,
      viewBox: "0 0 21 26",
      "aria-labelledby": "title-tabs",
      fill: "none",
    },
    g("rect", {
      x: 1,
      y: 1,
      width: 19,
      height: 24,
      rx: 2,
      className: r.stroke,
      "stroke-width": 2,
      fill: "none",
    }),
    g("path", {
      d: "M11.75 9.95652C11.75 10.6132 11.5301 11.1469 11.2526 11.4847C10.9786 11.8184 10.7024 11.913 10.5 11.913C10.2976 11.913 10.0214 11.8184 9.74736 11.4847C9.46988 11.1469 9.25 10.6132 9.25 9.95652C9.25 9.29986 9.46988 8.76612 9.74736 8.42832C10.0214 8.09468 10.2976 8 10.5 8C10.7024 8 10.9786 8.09468 11.2526 8.42832C11.5301 8.76612 11.75 9.29986 11.75 9.95652ZM12.0218 13.4534C13.0499 12.7889 13.75 11.4723 13.75 9.95652C13.75 7.7714 12.2949 6 10.5 6C8.70507 6 7.25 7.7714 7.25 9.95652C7.25 11.4723 7.95013 12.7889 8.97816 13.4534C6.12247 13.8552 4 15.3466 4 16.9219C4 18.7664 6.91015 19 10.5 19C14.0899 19 17 18.7664 17 16.9219C17 15.3466 14.8775 13.8552 12.0218 13.4534ZM14.6191 16.7104C14.6788 16.6957 14.733 16.6811 14.7819 16.6669C14.6515 16.5369 14.444 16.3713 14.1142 16.1854C13.2745 15.7122 11.9958 15.3478 10.5 15.3478C9.0042 15.3478 7.72549 15.7122 6.88578 16.1854C6.55602 16.3713 6.3485 16.5369 6.21808 16.6669C6.26701 16.6811 6.32116 16.6957 6.38094 16.7104C7.2898 16.9337 8.6834 17 10.5 17C12.3166 17 13.7102 16.9337 14.6191 16.7104Z",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      className: r.icon,
    }),
    g("title", { id: "title-account" }, "Tabs")
  );
}
var bi = "/static/media/jobs.e25c0248.svg",
  ba = "/static/media/main.c9ba66df.svg",
  bs = "/static/media/text.5e616329.svg";
let bo = "p2287",
  bl = "p22sz",
  bc = "p21o9",
  bu = "p22as",
  bd = {
    exitActive: "p2287",
    enterActive: "p22sz",
    enter: "p21o9",
    exit: "p22as",
  };
function bp() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return "/tags" + (e ? `?page=${e}` : "");
}
function bh(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return "/tags/" + e.replace(/ /g, "+") + (t ? `?page=${t}` : "");
}
function bm(e, t, n, r) {
  return "tab" === e.page
    ? e3(t.current, t.partId, t.revisionId)
    : "chords" === e.page
    ? e7(n.current)
    : "tag" === e.page
    ? r.content
      ? bh(r.content.tag, r.content.page)
      : "/"
    : "tags" === e.page
    ? r.content
      ? bp(r.content.page)
      : "/"
    : void 0;
}
var bg = null,
  bf = null,
  by = null,
  bv = null,
  bb = null,
  bw = null,
  bS = null,
  bx = null,
  bk = null,
  bC = null,
  bE = [bg, bf, by, bv, bb, bw, bS, bx, bk, bC];
let bT = {
    search: vV,
    favorites: vU,
    artist: vH,
    plus: v0,
    submit: vj,
    about: vW,
    jobs: vq,
    help: vX,
    signin: vY,
    signup: vK,
    recoverpassword: v1,
    changepassword: v1,
    forgotpassword: vQ,
    account: vJ,
    cancelPlus: v4,
    deactivate: v3,
    updateCard: v9,
    subscribePlus: v2,
    coupon: v5,
    howToReadTab: v8,
    privacy: vG,
    terms: vG,
    dnsmpd: vG,
    mytabs: vZ,
  },
  bP = C((e) => {
    let { isSmallScreen: t } = e,
      { gettext: n } = yd(bE),
      {
        dispatch: r,
        device: i,
        browser: a,
        user: s,
        route: o,
        query: l,
        routeContent: c,
        meta: u,
        chords: d,
        tags: p,
      } = lU(
        "device",
        "browser",
        "user",
        "route",
        "query",
        "routeContent",
        "meta",
        "chords",
        "tags"
      ),
      { isPanel: f, page: y } = o,
      v = bm(c, u, d, p);
    m(() => i.isDesktop && "Safari" === a.family && vz(!f), [f, i.isDesktop]),
      h(() => lZ(f, y), [f, y]);
    let { isDesktop: b } = i,
      { isLoggedIn: w, profile: S } = s,
      x = ["ru", "ru-mo", "be", "uk"].some(
        (e) => -1 !== i.languages.indexOf(e)
      );
    return g(
      "div",
      { className: vC.pane },
      !t &&
        g(
          "nav",
          { className: vC.float, id: "tablist" },
          g(
            v_,
            {
              id: "logo",
              className: vC.logo,
              route: o,
              url: "/",
              songUrl: v,
              title: "Songsterr",
            },
            g("img", { src: ba, width: 30, height: 36, alt: "Songsterr" }),
            g("img", { src: bs, width: 62, height: 12, alt: "Songsterr" })
          ),
          g("div", { className: vC.dividerEdge }),
          g(
            vL,
            { id: "search", route: o, url: "/", songUrl: v },
            g(vM, { styles: vC, width: 30, height: 30 }),
            g("div", { className: vC.text }, n("Tabs"))
          ),
          g(
            vP,
            { id: "favorites", route: o, url: "/a/wa/favorites", songUrl: v },
            g(yT, { styles: vC }),
            g("div", { className: vC.text }, n("Favorites"))
          ),
          g("div", { className: vC.dividerSmall }),
          g(
            vT,
            { id: "mytabs", route: o, url: "/a/wa/mytabs", songUrl: v },
            g(br, { styles: vC, width: 29, height: 29 }),
            g("div", { className: vC.text }, "My Tabs")
          ),
          b &&
            g(
              vT,
              { id: "submit", route: o, url: "/a/wa/submit", songUrl: v },
              g(vD, { styles: vC }),
              g("div", { className: vC.text }, n("Submit Tab"))
            ),
          g("div", { className: vC.dividerSmall }),
          !en(s) &&
            g(
              vT,
              {
                id: "plus",
                route: o,
                url: "/a/wa/plus",
                songUrl: v,
                linkClick: (e) => {
                  e ||
                    r("curiosity/setConversionProps", {
                      "Last referring link": "Sidebar Button",
                    });
                },
              },
              g(vI, { styles: vC }),
              g("div", { className: vC.text }, n("Songsterr Plus"))
            ),
          g(
            vT,
            { id: "help", route: o, url: "/a/wa/help", songUrl: v },
            g(vN, { styles: vC }),
            g("div", { className: vC.text }, n("Questions?"))
          ),
          !w &&
            g(
              vT,
              { id: "signin", route: o, url: "/a/wa/signin", songUrl: v },
              g(f8, { styles: vC, width: 28, height: 29 }),
              g("div", { className: vC.text }, n("Sign In"))
            ),
          w &&
            g(
              vT,
              { id: "account", route: o, url: "/a/wa/account", songUrl: v },
              g(vA, { styles: vC, width: 29, height: 29 }),
              g("div", { className: vC.text }, S.name)
            ),
          g("div", { className: vC.dividerSmall }),
          b &&
            x &&
            g(
              hO,
              {
                id: "menu-jobs",
                to: "/a/wa/jobs",
                className: vC.jobs,
                title: "Jobs at Songsterr",
              },
              g("img", { src: bi, width: 79.271, height: 32, alt: "Jobs" })
            )
        ),
      g(
        ml,
        null,
        f &&
          g(
            my,
            { animationStyles: bn, timeout: 400, key: "overlay" },
            g(hO, {
              className: vC.overlay,
              id: "sidebar-overlay",
              to: v,
              title: n("Back to tab"),
              tabIndex: -1,
            })
          ),
        o.page in bT &&
          g(
            my,
            { animationStyles: bd, timeout: 400, key: o.page },
            g(
              "main",
              { id: `panel-${o.page}`, className: vC.mainpanel },
              g(hM, {
                component: bT[o.page],
                route: o,
                query: l,
                user: s,
                device: i,
                songUrl: v,
                isSmallScreen: t,
                id: o.page,
              })
            )
          )
      )
    );
  }),
  b_ = "C8p2d0",
  bL = "C8p2d0 C8pr1",
  bA = "C8p2d0 C8p1q",
  bI = {
    indicator: "C8p2d0",
    onlineIndicator: "C8p2d0 C8pr1",
    offlineIndicator: "C8p2d0 C8p1q",
  },
  bN = "Cir12y",
  bM = "Cir1tt",
  bB = "Cir29v",
  bO = "Cir1q8",
  bD = {
    exitActive: "Cir12y",
    enterActive: "Cir1tt",
    enter: "Cir29v",
    exit: "Cir1q8",
  };
function bz(e) {
  return e ? bI.onlineIndicator : bI.offlineIndicator;
}
class bR extends w {
  constructor(e) {
    super(e),
      (this.state = {
        online: navigator.onLine,
        className: bz(navigator.onLine),
        message: navigator.onLine ? null : "offline",
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
    this.state.online && this.setState({ ...this.state, message: null });
  }
  updateOnlineStatus() {
    let e = navigator.onLine;
    e &&
      (clearTimeout(this.hideIndicatorTimeout),
      (this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3))),
      this.setState({
        online: navigator.onLine,
        className: bz(navigator.onLine),
        message: navigator.onLine ? "live" : "offline",
      });
  }
  render() {
    let { online: e, className: t, message: n } = this.state,
      r = null;
    return (
      (n || !e) &&
        (r = g(
          my,
          { animationStyles: bD, timeout: 400 },
          g("div", { className: t }, n)
        )),
      g(ml, null, r)
    );
  }
}
let b$ = "Bdq1f0",
  bF = "Bdq2sz",
  bV = "Bdq8o",
  bU = "Bdqf4",
  bH = {
    menu: "Bdq1f0",
    linkText: "Bdq2sz",
    active: "Bdq8o",
    inactive: "Bdqf4",
  },
  bj = (e) => {
    window && !window.confirm("Are you sure?") && e.preventDefault();
  },
  bG = (e) => {
    let { songId: t } = e,
      { user: n, dispatch: r } = lU("user"),
      i = [];
    if (
      (td(n, V.USE_ADMIN_TOOLS) &&
        (i.push(
          g(
            "a",
            { key: "Edit", href: uO("editSong", t), target: "_blank" },
            "Edit"
          )
        ),
        i.push(
          g(
            "a",
            {
              key: "Update",
              href: uO("updateSrwr", t),
              target: "_blank",
              onClick: bj,
            },
            "Update"
          )
        ),
        i.push(
          g(
            "a",
            {
              key: "Rerender",
              href: uO("rerender", t),
              target: "_blank",
              onClick: bj,
            },
            "Rerender"
          )
        ),
        i.push(
          g(
            "a",
            {
              key: "Block",
              href: uO("blockDueToLicenseRestriction", t),
              target: "_blank",
              onClick: bj,
            },
            "Block"
          )
        ),
        i.push(
          g(
            "a",
            {
              key: "Generate PNG",
              href: uO("generatePng", t),
              target: "_blank",
            },
            "Generate PNG"
          )
        )),
      td(n, V.USE_TAB_EDITOR))
    ) {
      let e = (e) => {
        e.preventDefault(), r("tab_editor/toggleAdminPanel");
      };
      i.push(
        g(
          "a",
          { key: "Tab Edits", href: "", target: "_blank", onClick: e },
          "Tab Edits"
        )
      );
    }
    if (td(n, V.USE_VIDEO_SYNCHRONISATION)) {
      let e = (e) => {
        e.preventDefault(), r("part/initVideoPart");
      };
      i.push(
        g(
          "a",
          { key: "Init Video", href: "", target: "_blank", onClick: e },
          "Init Video"
        )
      );
    }
    return 0 === i.length ? null : g("nav", { className: bH.menu }, ...i);
  },
  bW = "C1p2za",
  bq = { close: "C1p2za" },
  bX = (e) => {
    let { onClick: t, id: n, width: r = 11, height: i = 11 } = e;
    return g(
      "button",
      { className: bq.close, onClick: t },
      g(
        "svg",
        {
          width: r,
          height: i,
          viewBox: "0 0 11 11",
          "aria-labelledby": `${n}-close`,
        },
        g("title", { id: `${n}-close` }, "Close"),
        g("path", { d: "M1 1l9 9m-9 0l9-9" })
      )
    );
  },
  bY = "z44l",
  bK = "z4qb",
  bJ = "z44l z42qo",
  bZ = "z44l z415m",
  bQ = "z44l z430w",
  b1 = "z44l z430w z410u",
  b0 = "z44l z41yi",
  b2 = "z44l z41uv",
  b5 = "z44l z41rt",
  b4 = "z44l z41rt z4kq",
  b3 = "z44l z41rt z42wq",
  b9 = "z44l z41rt z423c",
  b8 = "z41gq",
  b6 = "z44l z42g1",
  b7 = "z44l z42gf",
  we = "z44l z433s",
  wt = "z432r",
  wn = "z44l z4a1",
  wr = "z41xe",
  wi = "z44l z4a1 z424y",
  wa = "z44l z4a1 z41vb",
  ws = "z44l z4a1 z42j7",
  wo = "z44l z41rt z4ow",
  wl = "z44l z41rt z4118",
  wc = "z44l z4a1 z424y z41xe z4ls",
  wu = "z44l z4a1 z41vb z41xe z421m",
  wd = "z44l z4a1 z424y z42fn",
  wp = "z44l z4a1 z42j7 z4rq",
  wh = "z44l z4a1 z42j7 z42ct",
  wm = "z44l z42qx",
  wg = "z4y3",
  wf = "z41pi",
  wy = {
    button: "z44l",
    active: "z4qb",
    buttonGreen: "z44l z42qo",
    buttonBlue: "z44l z415m",
    buttonGrey: "z44l z430w",
    buttonDisabled: "z44l z430w z410u",
    buttonRed: "z44l z41yi",
    buttonFloat: "z44l z41uv",
    buttonLink: "z44l z41rt",
    buttonLinkFloat: "z44l z41rt z4kq",
    buttonLinkSmall: "z44l z41rt z42wq",
    buttonPromoUnsubscribe: "z44l z41rt z423c",
    link: "z41gq",
    buttonBlock: "z44l z42g1",
    buttonSmall: "z44l z42gf",
    google: "z44l z433s",
    googleIcon: "z432r",
    popupButton: "z44l z4a1",
    popupButtonSmall: "z41xe",
    popupButtonGreen: "z44l z4a1 z424y",
    popupButtonBlue: "z44l z4a1 z41vb",
    popupButtonOrange: "z44l z4a1 z42j7",
    popupButtonLinkGreen: "z44l z41rt z4ow",
    popupButtonLinkOrange: "z44l z41rt z4118",
    popupButtonGreenSmall: "z44l z4a1 z424y z41xe z4ls",
    popupButtonBlueSmall: "z44l z4a1 z41vb z41xe z421m",
    submitRevisionButton: "z44l z4a1 z424y z42fn",
    submitReportButton: "z44l z4a1 z42j7 z4rq",
    submitRevisionButtonWarning: "z44l z4a1 z42j7 z42ct",
    buttonBig: "z44l z42qx",
    greenHighlight: "z4y3",
    orangeHighlight: "z41pi",
  },
  wv = "B9v2h1",
  wb = "B9vl",
  ww = "B9v21x",
  wS = wi + " B9v2hx",
  wx = wi + " B9vhl",
  wk = "B9v2h1 B9v2vm",
  wC = "B9v1fv",
  wE = "B9v2v2",
  wT = "B9vdn",
  wP = "B9vdn B9vjs",
  w_ = "B9vdn B9v24z",
  wL = "B9vdn B9v165",
  wA = "B9vdn B9v2pd",
  wI = "B9vdn B9vzs",
  wN = "B9vdn B9v1vp",
  wM = "B9vdn B9v1up",
  wB = "B9vdn B9v2wk",
  wO = "B9vdn B9v8w",
  wD = "B9vdn B9vl8",
  wz = "B9vdn B9v1c4",
  wR = {
    pane: "B9v2h1",
    title: "B9vl",
    body: "B9v21x",
    button: wi + " B9v2hx",
    link: wi + " B9vhl",
    nps: "B9v2h1 B9v2vm",
    score: "B9v1fv",
    npsLegend: "B9v2v2",
    npsButton: "B9vdn",
    npsButton0: "B9vdn B9vjs",
    npsButton1: "B9vdn B9v24z",
    npsButton2: "B9vdn B9v165",
    npsButton3: "B9vdn B9v2pd",
    npsButton4: "B9vdn B9vzs",
    npsButton5: "B9vdn B9v1vp",
    npsButton6: "B9vdn B9v1up",
    npsButton7: "B9vdn B9v2wk",
    npsButton8: "B9vdn B9v8w",
    npsButton9: "B9vdn B9vl8",
    npsButton10: "B9vdn B9v1c4",
  },
  w$ = (e) =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) =>
      g(
        "button",
        { className: wR[`npsButton${t}`], key: t, onClick: () => e(t) },
        t
      )
    );
function wF() {
  let { dispatch: e, screener: t, ut: n } = lU("screener", "ut"),
    r = t.active;
  if (!r || n.stage !== dP) return null;
  let i = b(() => {
    e("screener/dismiss", r);
  }, [r]);
  if (r.name.endsWith("NPS")) {
    let t = (t) => {
      e("screener/accept", { screener: r, value: t });
    };
    return g(
      "aside",
      { className: wR.nps, id: "screener" },
      g(bX, { onClick: i, id: "screener" }),
      g("p", { className: wR.body }, r.body),
      g("div", { className: wR.score }, w$(t)),
      g("p", { className: wR.npsLegend }, "0 - Not likely 10 - Very likely")
    );
  }
  let a = b(() => {
    e("screener/accept", { screener: r });
  }, [r]);
  return g(
    "aside",
    { className: wR.pane, id: "screener" },
    g(bX, { onClick: i, id: "screener" }),
    g("h2", { className: wR.title }, r.title),
    g("p", { className: wR.body }, r.body),
    r.usertest
      ? g("button", { className: wR.button, onClick: a }, r.button)
      : g(
          "a",
          {
            className: wR.link,
            href: r.link,
            onClick: a,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          r.button
        )
  );
}
function wV(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = null;
  if (r.learn_faster_app_banner_v2?.status === "active") {
    let e = `lfba_${r.learn_faster_app_banner_v2.segment}`;
    i = i ? `${i}_${e}` : e;
  }
  if (lC(e)) {
    let e = `utm_source%3D${t}`,
      r = i ? `%26utm_campaign%3D${i}` : "",
      a = n.songId ? `%26tab_id%3D${n.songId}` : "",
      s = `${e}${r}${a}`;
    return `https://play.google.com/store/apps/details?id=com.songsterr&referrer=${s}`;
  }
  let a = encodeURIComponent(`${t}${i ? `_${i}` : ""}`);
  return `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${a}`;
}
function wU(e) {
  let { dispatch: t, device: n, experiments: r } = lU("device", "experiments"),
    { source: i } = e,
    a = e.os ? { name: e.os } : n.os,
    s = e.extra || {},
    o = e.attrs || {},
    l = wV(a, i, s, r),
    c = b(() => {
      e.onClick && e.onClick(),
        t("curiosity/event", {
          event: "Navigated to app store",
          ...e.eventProperties,
        }),
        t("player/togglePlay", !1),
        t("curiosity/google", {
          category: "Showroom",
          action: `Clicked on ${lC(a) ? "Google Play" : "App Store"} link`,
        });
    }, [e]);
  return g(
    "a",
    { ...o, href: l, onClick: c, rel: "noopener noreferrer", target: "_blank" },
    e.children
  );
}
let wH = "Ei1by",
  wj = "Ei2cl",
  wG = "Ei2zd",
  wW = "Ei2we",
  wq = { pane: "Ei1by", title: "Ei2cl", subtitle: "Ei2zd", actions: "Ei2we" },
  wX = "e81fc",
  wY = "e8v0",
  wK = "e8qv",
  wJ = "e8ai",
  wZ = {
    exitActive: "e81fc",
    enterActive: "e8v0",
    enter: "e8qv",
    exit: "e8ai",
  },
  wQ = { animationStyles: wZ };
function w1(e, t) {
  return e === et.SLOWDOWN
    ? {
        title: "Struggling to figure out\nthe rhythm of this fragment?",
        cta: t.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
        source: "slowdown_promo_popup",
        referringLink: "Slowdown Promo Popup",
      }
    : e === et.LOOP
    ? {
        title: "Want to nail this fragment?",
        cta: t.isPhone
          ? "Practice it by looping\nin our app!"
          : "Practice it by looping\non Plus!",
        source: "loop_promo_popup",
        referringLink: "Loop Promo Popup",
      }
    : e === et.NO_ADS
    ? {
        title: "Ads take up too much space?",
        cta: t.isPhone ? "Remove them in our app!" : "Remove them on Plus!",
        source: "noads_promo_popup",
        referringLink: "No Ads Promo Popup",
      }
    : e === et.PRINT
    ? {
        title: "Prefer to read and\nmarkup on paper?",
        cta: t.isPhone
          ? "Print the tab out in our app!"
          : "Print the tab out on Plus!",
        source: "print_promo_popup",
        referringLink: "Print Promo Popup",
      }
    : e === et.MUTE
    ? {
        title: "Using tab as\na backing track?",
        cta: t.isPhone
          ? "Mute your instrument\nin our app!"
          : "Mute your instrument\non Plus!",
        source: "mute_promo_popup",
        referringLink: "Mute Promo Popup",
      }
    : e === et.SOLO
    ? {
        title: "Bass line is hard to hear?",
        cta: t.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
        source: "solo_promo_popup",
        referringLink: "Solo Promo Popup",
      }
    : e === et.PITCH_SHIFT
    ? {
        title: "DonΓÇÖt want to retune the guitar?",
        cta: t.isPhone
          ? "Pitch shift the tab in our app!"
          : "Pitch shift the tab on Plus!",
        source: "retune_promo_popup",
        referringLink: "Retune Promo Popup",
      }
    : void 0;
}
let w0 = () => {
    let { dispatch: e, promo: t, device: n } = lU("promo", "device"),
      r = t.feature;
    if (!r) return null;
    let i = w1(r, n);
    i && cX(cQ.get(r));
    let a = () => {
        e("promo/unsubscribe"),
          e("curiosity/event", { event: "Unsubscribed from promo" });
      },
      s = () => e("promo/dismiss"),
      o = () => {
        e("curiosity/setConversionProps", {
          "Last referring link": i.referringLink,
        }),
          e("promo/dismiss");
      };
    return g(
      ml,
      null,
      r &&
        g(
          my,
          { ...wQ, key: "popup" },
          g(
            "aside",
            { className: wq.pane, id: "promo" },
            g("h2", { className: wq.title }, i.title),
            g("p", { className: wq.subtitle }, i.cta),
            g(
              "div",
              { className: wq.actions },
              !n.isPhone &&
                g(
                  hO,
                  { to: "/a/wa/plus", className: wy.buttonGreen, onClick: o },
                  "Tell me more!"
                ),
              n.isPhone &&
                g(
                  wU,
                  {
                    source: i.source,
                    onClick: o,
                    attrs: { className: wy.buttonGreen },
                    eventProperties: {
                      Via: "contextual offer",
                      "App store": lC(n.os) ? "Google Play" : "App Store",
                      Feature: r,
                    },
                  },
                  lC(n.os) ? "Open Google Play" : "Open App Store"
                ),
              g("a", { onClick: s, className: wy.buttonLink }, "No, thanks")
            ),
            g(
              "a",
              { onClick: a, className: wy.buttonPromoUnsubscribe },
              "DonΓÇÖt show ads like that"
            )
          )
        )
    );
  },
  w2 = "Cpv1d",
  w5 = "Cpvpq",
  w4 = "Cpv6d",
  w3 = "Cpv2kr",
  w9 = "Cpv2kr Cpv1th",
  w8 = "Cpv2kr Cpv1x",
  w6 = {
    wrapper: "Cpv1d",
    controls: "Cpvpq",
    right: "Cpv6d",
    link: "Cpv2kr",
    active: "Cpv2kr Cpv1th",
    small: "Cpv2kr Cpv1x",
  },
  w7 = () => {
    let {
        dispatch: e,
        meta: t,
        player: n,
        experiments: r,
        device: i,
      } = lU("meta", "player", "experiments", "device"),
      a = tu.get(t.current, n.version),
      s = to.decode(a.audio),
      o = to.decode(a.midi),
      l = "??",
      c = "??",
      u = "??";
    o && ((l = o.numericVersion.toString()), (c = o.payload)),
      s && (u = s.numericVersion.toString());
    let d = (t, n) => {
        t.preventDefault(), e("editor/sound:generate", { version: n });
      },
      p = (t, n) => {
        t.preventDefault(), e("editor/sound:update", { version: n });
      },
      h = (t, n) => {
        t.preventDefault(), e("editor/sound:toggle", { version: n });
      },
      m = (e, t) => {
        e.preventDefault(),
          document.firstElementChild.setAttribute("color-scheme", t);
      },
      f = (e) => {
        let r = tl(e),
          i = !tu.has(t.current, e);
        return g(
          "a",
          {
            className: n.version === r.version ? w6.active : w6.link,
            disabled: i,
            onClick: (t) => h(t, e),
          },
          r.displayName
        );
      },
      y = oE(i, r),
      v = tl(y),
      b = "πÇÇ|πÇÇ",
      w = g("div", null, `Default: ${v.displayName}`, b),
      S = g(
        "div",
        null,
        "Sound: ",
        f($.V1),
        " ",
        f($.V2),
        " ",
        f($.V4),
        " ",
        f($.DEV),
        b
      ),
      x =
        l &&
        g(
          "a",
          c && {
            className: w6.link,
            href: `https://github.com/songsterr/songsterr-processor-midi/commit/${c}`,
            target: "_blank",
          },
          `midi: ${l}`
        ),
      k = `audio: ${u}`,
      C = g("div", null, x, l ? " " : "", k, b),
      E = (e, t) =>
        g(
          "a",
          {
            className: w6.small,
            href: `https://www.songsterr.com/api/sound/${$[e].toLowerCase()}`,
            target: "_blank",
          },
          t
        ),
      T = g(
        "div",
        { className: w6.right },
        "List: ",
        E($.V2, "V2"),
        " ",
        E($.V4, "V4"),
        " ",
        E($.DEV, "Dev"),
        b
      ),
      P = (e, t) => g("a", { className: w6.link, onClick: (t) => m(t, e) }, t),
      _ = g("div", null, P("light", "Light"), " ", P("dark", "Dark"), b),
      L = (e, t) =>
        g(
          "a",
          { className: w6.small, onClick: (t) => d(t, e) },
          `Generate ${t}`
        ),
      A = (e, t) =>
        g("a", { className: w6.small, onClick: (t) => p(t, e) }, `Update ${t}`),
      I = g(
        "div",
        null,
        L($.V2, "V2"),
        " ",
        L($.V4, "V4"),
        " ",
        L($.DEV, "Dev"),
        b,
        A($.V4, "V4")
      );
    return g(
      "div",
      { className: w6.wrapper },
      g("div", { className: w6.controls }, w, S, C, T, _, I)
    );
  },
  Se = "ju1pe",
  St = { placeholder: "ju1pe" },
  Sn = "Cblr3",
  Sr = Se + " Cbl2bs",
  Si = "Cbl17o",
  Sa = { wrap: "Cblr3", inner: Se + " Cbl2bs", banner: "Cbl17o" };
var Ss = "/static/media/et640en.746163ed.png",
  So = "/static/media/et640ru.875012f4.png",
  Sl = "/static/media/rra640en.4edf9663.png",
  Sc = "/static/media/rra640ru.60c1c5e4.png";
let Su =
    "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
  Sd =
    "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50";
function Sp(e) {
  let t = lC(e.os),
    n = ["ru", "ru-mo", "be", "uk"].some((t) => -1 !== e.languages.indexOf(t));
  return {
    alt: t
      ? "Master rhythm skills with Rhythm Trainer by Songsterr"
      : "Ear training reinvented",
    link: t
      ? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50"
      : "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
    image: t ? (n ? Sc : Sl) : n ? So : Ss,
  };
}
let Sh = C(() => {
    let e = T(),
      { ads: t, device: n } = lU("ads", "device"),
      { alt: r, link: i, image: a } = Sp(n);
    return (
      uw("tab_page_mobile", { isTargeted: !0, page: "tab" }),
      m(() => {
        let t = e.current;
        if (t)
          try {
            let e = document.getElementById("header"),
              n = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting
                      ? t.classList.contains("hidden") &&
                        t.classList.remove("hidden")
                      : t.classList.contains("hidden") ||
                        t.classList.add("hidden");
                  });
                },
                { rootMargin: "-120px 0px 0px 0px" }
              );
            return e && n.observe(e), () => n.disconnect();
          } catch (e) {}
      }, [e]),
      g(
        "section",
        { id: "showroom_header", className: Sa.wrap, ref: e },
        g(
          "div",
          { id: "Redesign_ATF_tab_page_320╤à50", className: Sa.inner },
          t.notsyFailed &&
            g(
              "a",
              { className: Sa.link, href: i, target: "_blank" },
              g("img", { src: a, className: Sa.banner, alt: r })
            )
        )
      )
    );
  }),
  Sm = E(() =>
    Promise.all([
      import("./ConsentManager.1a9d391e.js"),
      yW([
        "/static/latest/ConsentManager.045f97eb897a0500.css",
        "/static/latest/index.546235ebfd21e495.css",
      ]),
    ]).then((e) => e[0])
  ),
  Sg = () => {
    let { consent: e } = lU("consent");
    return "tcf" === e.suite
      ? f("div", { children: f(hM, { component: Sm }, "wrap") })
      : null;
  },
  Sf = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
  Sy =
    "M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z",
  Sv = "M7 10v7H3c-3 0-3-7 0-7z",
  Sb =
    "m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z",
  Sw = "m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z",
  SS = `${Sv}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`,
  Sx = `${Sv}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${Sf}m2.8 1.8${Sf}m2.8 1.8${Sf}m2.8 1.8${Sf}m2.8 1.8${Sf}`,
  Sk = [
    `${Sy}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`,
    "M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z",
    `${Sy}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`,
    `${Sy}M9.8.1${Sf}m3 1.36${Sf}m3 1.36${Sf}m3 1.36${Sf}m3 1.36${Sf}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`,
    `${Sv}${Sb}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`,
    `${Sv}${Sb}m3.9 1.25${Sf}m3.9 0${Sf}m3.9 0${Sf}m-7.8 4.5${Sf}m3.9 0${Sf}m3.9 0${Sf}`,
    `${Sv}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${Sf}m2.8.65${Sf}m2.8.65${Sf}m2.8.65${Sf}m2.8.65${Sf}`,
    `${Sv}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`,
    SS,
    `${SS}${Sw}`,
    `${Sv}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z${Sw}`,
    "M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z",
    "M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z",
    "M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z",
    "M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z",
    "M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z",
    "M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z",
    "M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z",
    `${Sy}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`,
    "M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z",
    "M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z",
    `${Sv}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`,
    "M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z",
    "M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z",
    "M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",
  ],
  SC = "translate(-5 14)rotate(-45)",
  SE = "translate(-7 14)rotate(-45)",
  ST = " translate(13 0)rotate(45)scale(.75)";
function SP(e) {
  return 3 === e
    ? " translate(13 0)rotate(45)scale(.75)"
    : 1 === e ||
      (e >= 4 && e <= 10) ||
      14 === e ||
      16 === e ||
      17 === e ||
      21 === e
    ? "translate(-5 14)rotate(-45)"
    : void 0;
}
function S_(e) {
  let { instrumentId: t, name: n, className: r, transform: i } = e,
    a = eZ(t),
    s = n && 6 === a && n.includes("James Hetfield"),
    o = s ? Sx : Sk[a],
    l = s ? "translate(-7 14)rotate(-45)" : SP(a);
  return g("path", {
    d: o,
    transform: (l || i) && `${i || ""}${l || ""}`,
    className: r,
  });
}
let SL = "wc27x",
  SA = "wc1dg",
  SI = "wc2wi",
  SN = "wcnf",
  SM = "wc7n",
  SB = {
    instrument: "wc27x",
    instrumentActive: "wc1dg",
    instrumentMobile: "wc2wi",
    indication: "wcnf",
    indicationActive: "wc7n",
  };
class SO extends w {
  render() {
    let {
        active: e,
        mobile: t,
        name: n,
        instrumentId: r,
        i,
        instrument: a,
        playing: s,
      } = this.props,
      o = e ? SB.instrumentActive : SB.instrument;
    o = t ? SB.instrumentMobile : o;
    let l = `part-${i}`;
    return g(
      "svg",
      {
        className: this.props.className,
        width: "27",
        height: "27",
        viewBox: "0 0 27 27",
        "aria-labelledby": l,
      },
      g("title", { id: l }, a),
      g(S_, { className: o, instrumentId: r, name: n }),
      s &&
        g("circle", {
          className: e ? SB.indicationActive : SB.indication,
          strokeWidth: 2,
          cy: 25,
          cx: 25,
          r: 3,
        })
    );
  }
}
let SD = (e) => e.notes?.length > 0 && !e.rest,
  Sz = (e, t) => {
    let n = a6(e, t),
      r = e.timestamps[n],
      i = e.timeline.get(r);
    return i.beats.some(SD);
  };
function SR() {
  let { parts: e, player: t } = lU("parts", "player", "experiments"),
    [n, r] = d({}),
    i = T(),
    a = b(() => {
      i.current = requestAnimationFrame(a);
      let s = t.audio.getCursor(),
        o = e.list.reduce((e, t) => ({ ...e, [t.partId]: Sz(t, s) }), n);
      r(o);
    }, [e.list, t.audio]);
  return (
    h(
      () => (
        (i.current = requestAnimationFrame(a)),
        () => i.current && cancelAnimationFrame(i.current)
      ),
      [e.list]
    ),
    n
  );
}
let S$ = "Cix6",
  SF = "Cixn1",
  SV = "Cix1pm",
  SU = "Cix2la",
  SH = "Cix314",
  Sj = "Cix2aq",
  SG = "Cix2lj",
  SW = "Cix268",
  Sq = "Cixvc",
  SX = "Cix314 Cix4s",
  SY = "Cix6 Cix9m",
  SK = {
    mixer: "Cix6",
    scroller: "Cixn1",
    shadowOverlay: "Cix1pm",
    arrow: "Cix2la",
    item: "Cix314",
    itemLink: "Cix2aq",
    tail: "Cix2lj",
    icon: "Cix268",
    text: "Cixvc",
    itemActive: "Cix314 Cix4s",
    mixerDropdown: "Cix6 Cix9m",
  },
  SJ = 42,
  SZ = 46,
  SQ = 20,
  S1 = "#mixer-button";
function S0(e) {
  return e <= 2 ? 1 : e <= 4 ? 2 : 3;
}
function S2(e) {
  return 42 - 46 * e;
}
function S5(e, t) {
  let n = document.querySelector("#mixer-button") || null,
    r = n ? n.getBoundingClientRect().top : 42,
    i = S2(S0(e));
  return { height: Math.min(46 * e, t - (r + i) - 20 - 20), top: i };
}
function S4(e) {
  return { top: -1 * e.top + 17 };
}
let S3 = (e) => {
  let { meta: t, parts: n, onItemClick: r } = e,
    i = SR(),
    { partId: a, revisionId: s, current: o } = t;
  return n
    ? n.map((e, t) => {
        let n = a === t,
          l = `${n ? SK.itemActive : SK.item}`,
          c = i[t];
        return g(
          "div",
          { className: l, key: t, "aria-label": "track" },
          g(
            hO,
            {
              className: SK.itemLink,
              to: e3(o, t, s),
              "aria-current": n ? "page" : void 0,
              onClick: () => r({ instrumentId: e.instrumentId }),
            },
            g(SO, {
              className: SK.icon,
              instrumentId: e.instrumentId,
              instrument: e.instrument,
              i: t,
              name: e.name,
              active: n,
              playing: c,
            }),
            g("span", { className: SK.text }, e.title)
          )
        );
      })
    : null;
};
class S9 extends w {
  constructor(e) {
    super(e);
    let t = e.meta.current,
      n = (t && t.tracks) || [],
      r = S5(n.length, e.screen.viewport.height),
      i = S4(r),
      a = { height: r.height };
    this.state = { style: r, arrowStyle: i, scrollerStyle: a };
  }
  updateHeight = () => {
    let e = this.props.meta.current,
      t = (e && e.tracks) || [],
      n = S5(t.length, this.props.screen.viewport.height),
      r = S4(n),
      i = { height: n.height },
      a = this.state.style;
    (a.height !== n.height || a.top !== n.top) &&
      this.setState({
        ...this.state,
        style: n,
        arrowStyle: r,
        scrollerStyle: i,
      });
  };
  componentDidMount() {
    this.updateHeight();
  }
  componentDidUpdate() {
    this.updateHeight();
  }
  render() {
    let e = this.props.meta.current;
    if (!e) return;
    let { dispatch: t } = this.props,
      n = this.props.screen.isSmall,
      r = (e && e.tracks) || [],
      i = n ? null : this.state.style,
      a = g(S3, {
        parts: r,
        meta: this.props.meta,
        onItemClick: (e) => t("songs/default", e),
      });
    return g(
      "div",
      {
        className: n ? SK.mixerDropdown : SK.mixer,
        style: i,
        role: "dialog",
        "aria-label": "Select track",
      },
      n
        ? a
        : g(
            "div",
            { className: SK.scroller, style: this.state.scrollerStyle },
            a
          ),
      n ? null : g("div", { className: SK.arrow, style: this.state.arrowStyle })
    );
  }
}
var S8 = hc(S9, "screen", "meta");
function S6(e) {
  let {
    up: t,
    styles: { icon: n, stroke: r },
  } = e;
  return g(
    "svg",
    { width: 14, height: 12, viewBox: "0 0 26 17", className: n },
    g("path", {
      d: t ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
      className: r,
      "stroke-width": 4,
      "stroke-linecap": "square",
    })
  );
}
let S7 = "B1t2kr",
  xe = "B1t297",
  xt = "B1t1q7",
  xn = "B1t267",
  xr = "B1tga",
  xi = "B1t1kk",
  xa = "B1t1bd",
  xs = "B1t2x3",
  xo = "B1thf",
  xl = "B1tix",
  xc = {
    header: "B1t2kr",
    wrapper: "B1t297",
    stroke: "B1t1q7",
    burger: "B1t267",
    help: "B1tga",
    mixer: "B1t1kk",
    instrument: "B1t1bd",
    img: "B1t2x3",
    title: "B1thf",
    icon: "B1tix",
  },
  xu = { animationStyles: fw };
function xd(e) {
  let { songs: t, layer: n, meta: r } = lU("songs", "layer", "meta"),
    i = "mixer" === n.layer,
    { isChords: a } = e,
    s = "Chords";
  if (!a) {
    let e = uN(r);
    s = e ? `${e.name} \u002d ${e.instrument}` : "Instrument";
  }
  return g(
    "header",
    { className: xc.header, "data-controls": "tablature" },
    g(
      "div",
      { className: xc.wrapper },
      g(
        hO,
        {
          to: `/${lD(t.pattern, t.filters)}`,
          className: xc.burger,
          title: "Search",
          id: "burger",
        },
        g(va, { styles: xc })
      ),
      g(
        "button",
        {
          className: xc.mixer,
          onClick: e.handleMixer,
          role: "button",
          id: "control-mixer",
          title: i ? "Hide tracks" : "Show tracks",
          "aria-haspopup": !0,
          "aria-pressed": i,
        },
        g("div", { className: xc.title }, s),
        !a && g(S6, { up: i, styles: xc })
      ),
      g(
        hO,
        { to: "/a/wa/help", className: xc.help, title: "Help" },
        g(vN, { width: 27, height: 25, styles: xc })
      )
    ),
    g(ml, null, i && g(my, xu, g(S8, null)))
  );
}
function xp() {
  return window.__LOCALE__ || "en";
}
var xh = {
    translations: {
      "": {
        "Choose right file format": ["W\xe4hlen Sie das richtige Dateiformat"],
        "Invalid e-mail address": ["Ung\xfcltige E-Mail-Adresse"],
        "Oops, something went wrong. Please try again later": [
          "Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es sp\xe4ter noch einmal",
        ],
        "Passwords should match": ["Passw\xf6rter sollten \xfcbereinstimmen"],
        "Please describe the problem": ["Bitte beschreiben Sie das Problem"],
        "Please fix the errors and try again": [
          "Bitte beheben Sie die Fehler und versuchen Sie es erneut",
        ],
        "Please provide more meaningful edit summary": [
          "Bitte geben Sie eine aussagekr\xe4ftigere Bearbeitungszusammenfassung an",
        ],
        "Please select a reason for the report": [
          "Bitte w\xe4hlen Sie einen Grund f\xfcr den Bericht",
        ],
        "Should be at least 5 symbols long": [
          "Sollte mindestens 5 Symbole lang sein",
        ],
        "Should be checked": ["Sollte gepr\xfcft werden"],
        "Should be less than 1000 characters": [
          "Sollte weniger als 1000 Zeichen umfassen",
        ],
        "Should be YouTube URL": ["Sollte YouTube URL sein"],
        "Should not be empty": ["Sollte nicht leer sein"],
        "Tell us how can we help you": [
          "Sagen Sie uns, wie wir Ihnen helfen k\xf6nnen",
        ],
        "Upload the file": ["Hochladen der Datei"],
      },
    },
    language: "de",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  xm = {
    translations: {
      "": {
        "Choose right file format": ["Elija el formato de archivo adecuado"],
        "Invalid e-mail address": ["Correo electr\xf3nico err\xf3neo"],
        "Oops, something went wrong. Please try again later": [
          "Vaya, algo sali\xf3 mal. Por favor, int\xe9ntelo de nuevo m\xe1s tarde",
        ],
        "Passwords should match": ["Las contrase\xf1as deben coincidir"],
        "Please describe the problem": ["Por favor, describa el problema"],
        "Please fix the errors and try again": [
          "Por favor, corrija los errores e int\xe9ntelo de nuevo",
        ],
        "Please provide more meaningful edit summary": [
          "Por favor, proporcione un resumen de edici\xf3n m\xe1s significativo",
        ],
        "Please select a reason for the report": [
          "Por favor, seleccione un motivo para el informe",
        ],
        "Should be at least 5 symbols long": [
          "Debe tener al menos 5 s\xedmbolos",
        ],
        "Should be checked": ["Debe comprobarse"],
        "Should be less than 1000 characters": [
          "Debe tener menos de 1000 caracteres",
        ],
        "Should be YouTube URL": ["Deber\xeda ser la URL de YouTube"],
        "Should not be empty": ["No debe estar vac\xedo"],
        "Tell us how can we help you": ["D\xedganos c\xf3mo podemos ayudarle"],
        "Upload the file": ["Cargar el archivo"],
      },
    },
    language: "es",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  xg = {
    translations: {
      "": {
        "Invalid e-mail address": ["Adresse e-mail non valide"],
        "Oops, something went wrong. Please try again later": [
          "Oups, quelque chose sΓÇÖest mal pass\xe9. Veuillez r\xe9essayer plus tard",
        ],
        "Passwords should match": ["Les mots de passe doivent correspondre"],
        "Please fix the errors and try again": [
          "Veuillez corriger les erreurs et r\xe9essayer",
        ],
        "Should be at least 5 symbols long": [
          "Doit comporter au moins 5 symboles",
        ],
        "Should be checked": ["Devrait \xeatre v\xe9rifi\xe9"],
        "Should be less than 1000 characters": [
          "Doit comporter moins de 1000 caract\xe8res",
        ],
        "Should not be empty": ["Ne doit pas \xeatre vide"],
      },
    },
    language: "fr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  xf = {
    translations: {
      "": {
        "Choose right file format": ["Scegliere il giusto formato di file"],
        "Invalid e-mail address": ["Indirizzo e-mail non valido"],
        "Oops, something went wrong. Please try again later": [
          "Ooops, qualcosa \xe8 andato storto. Per favore, riprova pi\xf9 tardi",
        ],
        "Passwords should match": ["Le password devono corrispondere"],
        "Please describe the problem": ["Si prega di descrivere il problema"],
        "Please fix the errors and try again": [
          "Si prega di correggere gli errori e riprovare",
        ],
        "Please provide more meaningful edit summary": [
          "La preghiamo di fornire un riepilogo di modifica pi\xf9 significativo",
        ],
        "Please select a reason for the report": [
          "Si prega di selezionare un motivo per il rapporto",
        ],
        "Should be at least 5 symbols long": [
          "Dovrebbe essere lungo almeno 5 simboli",
        ],
        "Should be checked": ["Dovrebbe essere controllato"],
        "Should be less than 1000 characters": [
          "Dovrebbe essere inferiore a 1000 caratteri",
        ],
        "Should be YouTube URL": ["Dovrebbe essere l'URL di YouTube"],
        "Should not be empty": ["Non dovrebbe essere vuoto"],
        "Tell us how can we help you": ["Ci dica come possiamo aiutarla"],
        "Upload the file": ["Caricare il file"],
      },
    },
    language: "it",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  xy = {
    translations: {
      "": {
        "Choose right file format": [
          "µ¡úπüùπüäπâòπéíπéñπâ½σ╜óσ╝ÅπéÆΘü╕µè₧πüÖπéï",
        ],
        "Invalid e-mail address": ["τäíσè╣πü¬Θ¢╗σ¡Éπâíπâ╝πâ½πéóπâëπâ¼πé╣"],
        "Oops, something went wrong. Please try again later": [
          "πüèπüúπü¿πÇüΣ╜òπüïπüîΘûôΘüòπüúπüªπüäπüƒπÇé σ╛îπüºπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüä",
        ],
        "Passwords should match": [
          "πâæπé╣πâ»πâ╝πâëπüîΣ╕ÇΦç┤πüÖπéïσ┐àΦªüπüîπüéπéèπü╛πüÖ",
        ],
        "Please describe the problem": ["σòÅΘíîπéÆΦ¬¼µÿÄπüùπüªπüÅπüáπüòπüä"],
        "Please fix the errors and try again": [
          "πé¿πâ⌐πâ╝πéÆΣ┐«µ¡úπüùπüªπÇüπééπüåΣ╕Çσ║ªπéäπéèτ¢┤πüùπüªπüÅπüáπüòπüä",
        ],
        "Please provide more meaningful edit summary": [
          "πéêπéèµäÅσæ│πü«πüéπéïτ╖¿Θ¢åΦªüτ┤äπéÆµÅÉΣ╛¢πüùπüªπüÅπüáπüòπüä",
        ],
        "Please select a reason for the report": [
          "πâ¼πâ¥πâ╝πâêπü«τÉåτö▒πéÆΘü╕µè₧πüùπüªπüÅπüáπüòπüä",
        ],
        "Should be at least 5 symbols long": [
          "σ░æπü¬πüÅπü¿πéé 5 πé╖πâ│πâ£πâ½πü«Θò╖πüòπüºπüéπéïσ┐àΦªüπüîπüéπéèπü╛πüÖ",
        ],
        "Should be checked": ["πâüπéºπââπé»πüÖπéïσ┐àΦªüπüîπüéπéèπü╛πüÖ"],
        "Should be less than 1000 characters": [
          "1000µûçσ¡ùΣ╗ÑΣ╕ïπüºπüéπéïπüôπü¿",
        ],
        "Should be YouTube URL": [
          "YouTubeπü«URLπüºπüéπéïσ┐àΦªüπüîπüéπéèπü╛πüÖ",
        ],
        "Should not be empty": ["τ⌐║πüºπüéπüúπüªπü»πü¬πéëπü¬πüä"],
        "Tell us how can we help you": [
          "τºüΘüöπüîπüäπüïπü½σè⌐πüæπüªπééπüäπüäπüïτºüΘüöπü½Φ¿ÇπüúπüªΣ╕ïπüòπüä",
        ],
        "Upload the file": ["πâòπéíπéñπâ½πéÆπéóπââπâùπâ¡πâ╝πâëπüÖπéï"],
      },
    },
    language: "ja",
    pluralForms: "nplurals=1; plural=0;",
  },
  xv = {
    translations: {
      "": {
        "Choose right file format": ["∞ÿ¼δ░öδÑ╕ φîî∞¥╝ φÿò∞ï¥ ∞äáφâ¥"],
        "Invalid e-mail address": ["∞₧ÿδ¬╗ δÉ£ ∞¥┤δ⌐ö∞¥╝ ∞ú╝∞åî ∞₧àδïêδïñ"],
        "Oops, something went wrong. Please try again later": [
          "∞¥┤δƒ░, δ¼╕∞á£Ω░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δéÿ∞ñæ∞ùÉ δïñ∞ï£ ∞ï£δÅäφòÿ∞ï¡∞ï£∞ÿñ",
        ],
        "Passwords should match": ["δ╣äδ░Çδ▓êφÿ╕Ω░Ç ∞¥╝∞╣ÿφò┤∞ò╝ φò⌐δïêδïñ"],
        "Please describe the problem": ["δ¼╕∞á£δÑ╝ ∞äñδ¬àφòÿ∞ï¡∞ï£∞ÿñ"],
        "Please fix the errors and try again": [
          "∞ÿñδÑÿδÑ╝ ∞êÿ∞áòφòÿΩ│á δïñ∞ï£ ∞ï£δÅäφòÿ∞ï¡∞ï£∞ÿñ",
        ],
        "Please provide more meaningful edit summary": [
          "δ│┤δïñ ∞¥ÿδ»╕∞₧êδèö φÄ╕∞ºæ ∞Üö∞ò╜∞¥ä ∞á£Ω│╡φòÿ∞ï¡∞ï£∞ÿñ",
        ],
        "Please select a reason for the report": [
          "∞ïáΩ│á ∞é¼∞£áδÑ╝ ∞äáφâ¥φòÿ∞ä╕∞Üö",
        ],
        "Should be at least 5 symbols long": ["5∞₧É ∞¥┤∞âü∞¥┤∞û┤∞ò╝ φò⌐δïêδïñ"],
        "Should be checked": ["φÖò∞¥╕φò┤∞ò╝ φò¿"],
        "Should be less than 1000 characters": [
          "1000∞₧É δ»╕δºî∞¥┤∞û┤∞ò╝ φò⌐δïêδïñ",
        ],
        "Should be YouTube URL": ["∞£áφè£δ╕î URL∞¥┤∞û┤∞ò╝ φò⌐δïêδïñ"],
        "Should not be empty": ["δ╣ä∞¢î δæÿ ∞êÿ ∞ùå∞û┤∞ò╝ φò⌐δïêδïñ"],
        "Tell us how can we help you": [
          "∞Ü░δª¼Ω░Ç δï╣∞ïá∞¥ä δÅä∞Ü╕ ∞êÿ∞₧êδèö δ░⌐δ▓ò∞¥ä ∞òîδáñ∞ú╝∞ï¡∞ï£∞ÿñ",
        ],
        "Upload the file": ["φîî∞¥╝ ∞ùàδí£δô£"],
      },
    },
    language: "ko",
    pluralForms: "nplurals=1; plural=0;",
  },
  xb = {
    translations: {
      "": {
        "Choose right file format": ["Escolha o formato de arquivo correto"],
        "Invalid e-mail address": ["Endere\xe7o de e-mail invalido"],
        "Oops, something went wrong. Please try again later": [
          "Oops, alguma coisa correu mal. Queira tentar novamente mais tarde",
        ],
        "Passwords should match": ["As senhas devem corresponder"],
        "Please describe the problem": ["Por favor, descreva o problema"],
        "Please fix the errors and try again": [
          "Queira reparar os erros e tentar novamente",
        ],
        "Please provide more meaningful edit summary": [
          "Por favor, fornecer um resumo de edi\xe7\xe3o mais significativo",
        ],
        "Please select a reason for the report": [
          "Por favor, selecione um motivo para o relat\xf3rio",
        ],
        "Should be at least 5 symbols long": [
          "Deve ter pelo menos 5 s\xedmbolos",
        ],
        "Should be checked": ["Deve ser verificado"],
        "Should be less than 1000 characters": [
          "Deve ter menos de 1000 caracteres",
        ],
        "Should be YouTube URL": ["Deve ser o URL do YouTube"],
        "Should not be empty": ["N\xe3o deve estar vazio"],
        "Tell us how can we help you": [
          "Diga-nos como podemos ajudar o senhor",
        ],
        "Upload the file": ["Carregar o arquivo"],
      },
    },
    language: "pt",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  xw = {
    translations: {
      "": {
        "Choose right file format": [
          "╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡ ╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╤ï╨╣ ╤ä╨╛╤Ç╨╝╨░╤é ╤ä╨░╨╣╨╗╨░",
        ],
        "Invalid e-mail address": [
          "╨¥╨╡╨▓╨╡╤Ç╨╜╤ï╨╣ ╨░╨┤╤Ç╨╡╤ü ╤ì╨╗╨╡╨║╤é╤Ç╨╛╨╜╨╜╨╛╨╣ ╨┐╨╛╤ç╤é╤ï",
        ],
        "Oops, something went wrong. Please try again later": [
          "╨ú╨┐╤ü, ╤ç╤é╨╛-╤é╨╛ ╨┐╨╛╤ê╨╗╨╛ ╨╜╨╡ ╤é╨░╨║. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â ╨┐╨╛╨╖╨╢╨╡",
        ],
        "Passwords should match": [
          "╨ƒ╨░╤Ç╨╛╨╗╨╕ ╨┤╨╛╨╗╨╢╨╜╤ï ╤ü╨╛╨▓╨┐╨░╨┤╨░╤é╤î",
        ],
        "Please describe the problem": [
          "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨╛╨┐╨╕╤ê╨╕╤é╨╡ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╤â",
        ],
        "Please fix the errors and try again": [
          "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨╕╤ü╨┐╤Ç╨░╨▓╤î╤é╨╡ ╨╛╤ê╨╕╨▒╨║╨╕ ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â",
        ],
        "Please provide more meaningful edit summary": [
          "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┐╤Ç╨╡╨┤╨╛╤ü╤é╨░╨▓╤î╤é╨╡ ╨▒╨╛╨╗╨╡╨╡ ╤ü╨╛╨┤╨╡╤Ç╨╢╨░╤é╨╡╨╗╤î╨╜╨╛╨╡ ╤Ç╨╡╨╖╤Ä╨╝╨╡ ╤Ç╨╡╨┤╨░╨║╤é╨╕╤Ç╨╛╨▓╨░╨╜╨╕╤Å",
        ],
        "Please select a reason for the report": [
          "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨▓╤ï╨▒╨╡╤Ç╨╕╤é╨╡ ╨┐╤Ç╨╕╤ç╨╕╨╜╤â ╨┤╨╗╤Å ╨╛╤é╤ç╨╡╤é╨░",
        ],
        "Should be at least 5 symbols long": [
          "╨ö╨╛╨╗╨╢╨╜╨╛ ╨▒╤ï╤é╤î ╨╜╨╡ ╨╝╨╡╨╜╨╡╨╡ 5 ╤ü╨╕╨╝╨▓╨╛╨╗╨╛╨▓",
        ],
        "Should be checked": ["╨í╨╗╨╡╨┤╤â╨╡╤é ╨┐╤Ç╨╛╨▓╨╡╤Ç╨╕╤é╤î"],
        "Should be less than 1000 characters": [
          "╨ö╨╛╨╗╨╢╨╜╨╛ ╨▒╤ï╤é╤î ╨╝╨╡╨╜╨╡╨╡ 1000 ╤ü╨╕╨╝╨▓╨╛╨╗╨╛╨▓",
        ],
        "Should be YouTube URL": ["╨ö╨╛╨╗╨╢╨╡╨╜ ╨▒╤ï╤é╤î URL YouTube"],
        "Should not be empty": ["╨¥╨╡ ╨┤╨╛╨╗╨╢╨╡╨╜ ╨▒╤ï╤é╤î ╨┐╤â╤ü╤é╤ï╨╝"],
        "Tell us how can we help you": [
          "╨á╨░╤ü╤ü╨║╨░╨╢╨╕╤é╨╡ ╨╜╨░╨╝, ╤ç╨╡╨╝ ╨╝╤ï ╨╝╨╛╨╢╨╡╨╝ ╨▓╨░╨╝ ╨┐╨╛╨╝╨╛╤ç╤î",
        ],
        "Upload the file": ["╨ù╨░╨│╤Ç╤â╨╖╨╕╤é╤î ╤ä╨░╨╣╨╗"],
      },
    },
    language: "ru",
    pluralForms:
      "nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
  },
  xS = {
    translations: {
      "": {
        "Choose right file format": ["ΘÇëµï⌐µ¡úτí«τÜäµûçΣ╗╢µá╝σ╝Å"],
        "Invalid e-mail address": ["µùáµòêτÜäτö╡σ¡ÉΘé«Σ╗╢σ£░σ¥Ç"],
        "Oops, something went wrong. Please try again later": [
          "σôÄσæÇ∩╝îσç║ΘöÖΣ║åπÇéΦ»╖τ¿ìσÉÄσåìΦ»òπÇé",
        ],
        "Passwords should match": ["σ»åτáüσ┐àΘí╗σî╣Θàì"],
        "Please describe the problem": ["Φ»╖µÅÅΦ┐░Φ»ÑΘù«Θóÿ"],
        "Please fix the errors and try again": [
          "Φ»╖Σ┐«σñìΘöÖΦ»»σ╣╢σåìµ¼íσ░¥Φ»ò",
        ],
        "Please provide more meaningful edit summary": [
          "Φ½ïµÅÉΣ╛¢µ¢┤µ£ëµäÅτ╛⌐τÜäτ╖¿Φ╝»µæÿΦªü",
        ],
        "Please select a reason for the report": [
          "Φ»╖ΘÇëµï⌐Σ╕ÇΣ╕¬µèÑσæèτÜäσÄƒσ¢á",
        ],
        "Should be at least 5 symbols long": [
          "σ║öΦç│σ░æµ£ë5Σ╕¬τ¼ªσÅ╖τÜäΘò┐σ║ª",
        ],
        "Should be checked": ["σ║öΣ║êµúÇµƒÑ"],
        "Should be less than 1000 characters": ["σ║öσ░æΣ║Ä1000Σ╕¬σ¡ùτ¼ª"],
        "Should be YouTube URL": ["σ║öΦ»Ñµÿ»YouTube URL"],
        "Should not be empty": ["Σ╕ìσ║öµÿ»τ⌐║τÜä"],
        "Tell us how can we help you": [
          "σæèΦ»ëµêæΣ╗¼∩╝îµêæΣ╗¼σªéΣ╜òΦâ╜σ╕«σè⌐Σ╜á",
        ],
        "Upload the file": ["Σ╕èΣ╝áµûçΣ╗╢"],
      },
    },
    language: "zh",
    pluralForms: "nplurals=1; plural=0;",
  },
  xx = {
    translations: {
      "": {
        "Choose right file format": ["Do─ƒru dosya format─▒n─▒ se\xe7in"],
        "Invalid e-mail address": ["Ge\xe7ersiz e-posta adresi"],
        "Oops, something went wrong. Please try again later": [
          "Oops, bir ┼ƒeyler ters gitti. L\xfctfen daha sonra tekrar deneyin",
        ],
        "Passwords should match": ["Parolalar e┼ƒle┼ƒmelidir"],
        "Please describe the problem": ["L\xfctfen sorunu a\xe7─▒klay─▒n"],
        "Please fix the errors and try again": [
          "L\xfctfen hatalar─▒ d\xfczeltin ve tekrar deneyin",
        ],
        "Please provide more meaningful edit summary": [
          "L\xfctfen daha anlaml─▒ bir d\xfczenleme \xf6zeti sa─ƒlay─▒n",
        ],
        "Please select a reason for the report": [
          "L\xfctfen rapor i\xe7in bir neden se\xe7in",
        ],
        "Should be at least 5 symbols long": [
          "En az 5 sembol uzunlu─ƒunda olmal─▒d─▒r",
        ],
        "Should be checked": ["Kontrol edilmeli"],
        "Should be less than 1000 characters": [
          "1000 karakterden az olmal─▒d─▒r",
        ],
        "Should be YouTube URL": ["YouTube URL'si olmal─▒"],
        "Should not be empty": ["Bo┼ƒ olmamal─▒d─▒r"],
        "Tell us how can we help you": [
          "Size nas─▒l yard─▒mc─▒ olabilece─ƒimizi s\xf6yleyin",
        ],
        "Upload the file": ["Dosyay─▒ y\xfckleyin"],
      },
    },
    language: "tr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  xk = [xh, xm, xg, xf, xy, xv, xb, xw, xS, xx];
let xC = new Map();
function xE(e) {
  let t = xC.get(e);
  return t || ((t = yu(e, xk)), xC.set(e, t)), t;
}
function xT(e, t) {
  let { gettext: n } = xE(t);
  return null == e || 0 === e.length
    ? n("Should not be empty")
    : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ) && n("Invalid e-mail address");
}
function xP(e, t) {
  let { gettext: n } = xE(t);
  return 0 === e.length && n("Should not be empty");
}
function x_(e, t) {
  let { gettext: n } = xE(t);
  return e.length >= 1e3
    ? n("Should be less than 1000 characters")
    : 0 === (e = e.replace(/[^\w\s_]/, "").trim()).length
    ? n("Should not be empty")
    : e.length < 3 && n("Please provide more meaningful edit summary");
}
function xL(e, t) {
  return xP(e, t);
}
function xA(e, t) {
  let { gettext: n } = xE(t);
  return 0 === e.length && n("Tell us how can we help you");
}
function xI() {
  return function (e, t) {
    let { gettext: n } = xE(t);
    if (!e.length) return n("Upload the file");
    {
      let t = e[0].name.split(".").pop();
      if (!cz.includes(t)) return n("Choose right file format");
    }
  };
}
function xN(e, t) {
  let { gettext: n } = xE(t);
  return 0 === e.length
    ? n("Should not be empty")
    : e.length < 5 && n("Should be at least 5 symbols long");
}
function xM(e, t) {
  let { gettext: n } = xE(t);
  return !e && n("Should be checked");
}
function xB(e, t, n) {
  let { gettext: r } = xE(n);
  return !!t && e !== t && r("Passwords should match");
}
function xO(e) {
  let t = xp(),
    { gettext: n } = xE(t);
  if (e instanceof ty) {
    if (e.reasons) {
      if (e.reasons.__all__) return e.reasons.__all__;
      let t = e.reasons.length && e.reasons[e.reasons.length - 1].message;
      if (t) return t;
    }
    return n("Please fix the errors and try again");
  }
  return e.message || n("Oops, something went wrong. Please try again later");
}
function xD(e, t) {
  return e && e.reasons && e.reasons[t];
}
function xz(e) {
  let t = xp();
  Array.isArray(e) || (e = [e]);
  let n = e
    .map((e) => {
      let n;
      return (
        (n =
          "checkbox" === e.field.type
            ? e.field.checked
            : "file" === e.field.type
            ? e.field.files
            : e.field.value),
        { [e.field.name]: e.validator(n, t) }
      );
    })
    .reduce((e, t) => Object.assign(e, t), {});
  if (Object.keys(n).reduce((e, t) => e || !!n[t], !1)) throw new ty(n);
  return null;
}
function xR(e, t) {
  let n = xp(),
    { gettext: r } = xE(n),
    i = { __all__: void 0, comment: void 0 };
  if (
    (e || (i.__all__ = r("Please select a reason for the report")),
    "other" !== e || t || (i.comment = r("Please describe the problem")),
    Object.keys(i).reduce((e, t) => e || !!i[t], !1))
  )
    throw new ty(i);
  return null;
}
let x$ = "Df9s",
  xF = "Df4c",
  xV = "Dfxe",
  xU = "Dfsp",
  xH = "Df1p2",
  xj = "Df16",
  xG = "Df58",
  xW = "Df1s7",
  xq = {
    error: "Df9s",
    title: "Df4c",
    rejected: "Dfxe",
    content: "Dfsp",
    exitActive: "Df1p2",
    enterActive: "Df16",
    enter: "Df58",
    exit: "Df1s7",
  };
function xX(e) {
  let { styles: t, error: n, errorMessage: r, name: i = "form" } = e,
    a = t || xq,
    s = T(),
    o = r,
    l = {
      enter: a.enter,
      enterActive: a.enterActive,
      exit: a.exit,
      exitActive: a.exitActive,
    };
  return (!o && n && (o = xO(n)),
  m(() => {
    s.current.scrollIntoView && s.current.scrollIntoView();
  }, [o]),
  n instanceof tw && n.action)
    ? g(
        ml,
        { component: "div", className: a.error, ref: s },
        n &&
          g(
            my,
            { animationStyles: l, timeout: 300 },
            g(
              "div",
              { className: a.rejected, key: "error" },
              g(
                "span",
                { className: a.content, role: "alert", "aria-label": i },
                `Your actions appear suspicious. We will reject any attempt to ${n.action} within the next twenty four hours. `,
                "Please contact ",
                g(
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
    : g(
        ml,
        { component: "div", className: a.error, ref: s },
        o &&
          g(
            my,
            { animationStyles: l, timeout: 300 },
            g(
              "div",
              { className: a.title, key: "error" },
              g(
                "span",
                { className: a.content, role: "alert", "aria-label": i },
                o
              )
            )
          )
      );
}
let xY = "Czsup",
  xK = "Czs1b5",
  xJ = "Czs4c",
  xZ = "Czs1nq",
  xQ = "Czs1nq Czs1ot",
  x1 = "Czsaw",
  x0 = "Czszb",
  x2 = "Czsn5",
  x5 = "Czs221",
  x4 = "Czs1rj",
  x3 = "Czs1an",
  x9 = "Czs1an Czs24z",
  x8 = "Czs1an Czs246",
  x6 = {
    settings: "Czsup",
    panel: "Czs1b5",
    head: "Czs4c",
    switch: "Czs1nq",
    switchActive: "Czs1nq Czs1ot",
    title: "Czsaw",
    body: "Czszb",
    actions: "Czsn5",
    caption: "Czs221",
    fastActions: "Czs1rj",
    button: "Czs1an",
    fast: "Czs1an Czs24z",
    buttonGray: "Czs1an Czs246",
  },
  x7 = xY + " Blg1d3",
  ke = xK + " Blgd8",
  kt = xJ + " Blg76",
  kn = x1 + " Blg25i",
  kr = "Blg2zb",
  ki = "Blg14z",
  ka = "Blg14z Blg19z",
  ks = "Blg1be",
  ko = x2 + " Blg2zc",
  kl = x3 + " Blgq2",
  kc = x8 + " Blg2i3",
  ku = {
    settings: xY + " Blg1d3",
    panel: xK + " Blgd8",
    head: xJ + " Blg76",
    title: x1 + " Blg25i",
    body: "Blg2zb",
    priceBoxTitle: "Blg14z",
    priceBoxTitleAfter: "Blg14z Blg19z",
    priceBoxText: "Blg1be",
    actions: x2 + " Blg2zc",
    button: x3 + " Blgq2",
    buttonGray: x8 + " Blg2i3",
  },
  kd = "Bqh1iv",
  kp = "Bqh25v",
  kh = "Bqh2xh",
  km = "Bqh2j6",
  kg = "Bqh2fg",
  kf = "Bqhgy",
  ky = "Bqh1yg",
  kv = "Bqhal",
  kb = {
    error: "Bqh1iv",
    title: "Bqh25v",
    rejected: "Bqh2xh",
    content: "Bqh2j6",
    exitActive: "Bqh2fg",
    enterActive: "Bqhgy",
    enter: "Bqh1yg",
    exit: "Bqhal",
  };
function kw(e, t) {
  switch (t.type) {
    case "migrate":
      return { ...e, processing: !0, error: null };
    case "success":
      return { ...e, processing: !1, success: !0 };
    case "failure":
      return { ...e, processing: !1, error: t.error };
  }
}
let kS = () => {
    let {
      dispatch: e,
      user: t,
      payment: n,
      device: r,
    } = lU("user", "payment", "device");
    m(
      () =>
        e("curiosity/event", {
          event: "Opened migration popup",
          Plan: n.plan.id,
          Country: r.country,
        }),
      []
    );
    let [i, a] = P(kw, { processing: !1, success: null, error: null }),
      s = async () => {
        e("curiosity/event", {
          event: "Confirmed subscription migration",
          Plan: n.plan.id,
          Country: r.country,
        });
        try {
          a({ type: "migrate" }), await new Promise((e) => setTimeout(e, 2e3));
          let t = await l9({ planId: n.plan.id });
          e("user/migratePlus", t), a({ type: "success" });
        } catch (e) {
          a({ type: "failure", error: e });
        }
      },
      o = () => {
        e("payment/popup:hide"),
          e("curiosity/event", {
            event: "Skipped subscription migration",
            Plan: n.plan.id,
            Country: r.country,
          });
      },
      l = () => e("payment/popup:hide"),
      c = "USD" !== n.plan.currency ? "US\xa0" : "",
      u = th(t.profile.subscription.plan.id),
      d = tm(u, !0),
      p = tm(n.plan, !0),
      h = dn.get(r.country) || void 0;
    return (
      n.showMigrationPopup &&
      g(
        "section",
        { className: ku.settings },
        g(
          "div",
          { className: ku.panel },
          g(
            "div",
            { className: ku.head },
            g("div", { className: ku.title }, "Plus prices reduction"),
            g(
              "p",
              null,
              "We are updating our subscription model to use regional prices. ",
              "Please review the changes that will apply to your account below:"
            )
          ),
          g(
            "div",
            { className: ku.body },
            g(
              "article",
              { className: ku.priceBox },
              g(
                "h3",
                { className: ku.priceBoxTitleAfter },
                i.success ? "Current price " : "New price ",
                g("span", null, p)
              )
            ),
            !i.success &&
              g(
                "article",
                { className: ku.priceBox },
                g("h3", { className: ku.priceBoxTitle }, "Old price ", c, d)
              )
          ),
          g(
            "div",
            { className: ku.actions },
            g(
              "p",
              null,
              h && `The new price is relevant for ${h}. `,
              "If you use the subscription from a country with a lower price, it may be cancelled without a refund."
            ),
            g(
              "p",
              null,
              "This is a one way subscription migration. ",
              "If you choose to skip now, you can upgrade to regional prices at any time with one click from your account page."
            ),
            g(
              "p",
              null,
              g(
                "strong",
                null,
                "You will NOT be charged any extra money now. New price will apply on the next billing date."
              )
            ),
            g(xX, { error: i.error, styles: kb }),
            !i.success &&
              g(
                "button",
                { id: "save", className: ku.button, onClick: s },
                i.processing &&
                  g(hS, {
                    width: 17,
                    height: 17,
                    fill: "#fff",
                    className: hw.migrate,
                  }),
                i.processing ? "Switching plan..." : `Cut costs with ${p}`
              ),
            !i.success &&
              !i.processing &&
              g(
                "button",
                { id: "cancel", className: ku.buttonGray, onClick: o },
                `Stay with ${c}${d}`
              ),
            i.success &&
              !i.processing &&
              g(
                "button",
                { id: "done", className: ku.button, onClick: l },
                "Done"
              )
          )
        )
      )
    );
  },
  kx = "C0d2hw",
  kk = "C0d2su",
  kC = "C0d2mf",
  kE = "C0d15l",
  kT = "C0d2gj",
  kP = "C0d52",
  k_ = bJ + " C0d2j4",
  kL = b5 + " C0d2ls",
  kA = {
    settings: "C0d2hw",
    panel: "C0d2su",
    head: "C0d2mf",
    title: "C0d15l",
    body: "C0d2gj",
    actions: "C0d52",
    button: bJ + " C0d2j4",
    buttonLink: b5 + " C0d2ls",
  };
var kI = {
    translations: {
      "": {
        "Continue on a free plan": ["Fahren Sie kostenlos fort"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "Lieben Sie Songsterr? Schlie\xdfen Sie sich Tausenden von Abonnenten an, um die urspr\xfcnglichen Musikschaffenden zu unterst\xfctzen und uns dabei zu helfen, ein noch besseres Produkt zu entwickeln Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["Plus abonnieren"],
      },
    },
    language: "de",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  kN = {
    translations: {
      "": {
        "Continue on a free plan": ["Continuar en un plan gratuito"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "\xbfAmas Songsterr? \xdanete a miles de suscriptores para apoyar a los creadores de m\xfasica original y ay\xfadanos a crear un producto a\xfan mejor Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["Suscr\xedbete a Plus"],
      },
    },
    language: "es",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  kM = {
    translations: {
      "": {
        "Continue on a free plan": ["Continuer gratuitement"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "Vous aimez Songster\xa0? Rejoignez des milliers d'abonn\xe9s pour soutenir les cr\xe9ateurs de musique originaux et nous aider \xe0 cr\xe9er un produit encore meilleur Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["Abonnez-vous \xe0 Plus"],
      },
    },
    language: "fr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  kB = null,
  kO = {
    translations: {
      "": {
        "Continue on a free plan": ["τäíµûÖπâùπâ⌐πâ│πüºτ╢Öτ╢Ü"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "SongsterrπüîσÑ╜πüìπüºπüÖπüï∩╝ƒµò░σìâΣ║║πü«τÖ╗Θî▓ΦÇàπü¿σà▒πü½πé¬πâ¬πé╕πâèπâ½πü«Θƒ│µÑ╜πé»πâ¬πé¿πéñπé┐πâ╝πéÆπé╡πâ¥πâ╝πâêπüùπÇüπéêπéèσä¬πéîπüƒΦú╜σôüπéÆµºïτ»ëπüÖπéïπüƒπéüπü«µö»µÅ┤πéÆµÅÉΣ╛¢πüùπéêπüå Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["πâùπâ⌐πé╣πü½τÖ╗Θî▓"],
      },
    },
    language: "ja",
    pluralForms: "nplurals=1; plural=0;",
  },
  kD = {
    translations: {
      "": {
        "Continue on a free plan": ["δ¼┤δúî ∞ÜöΩ╕ê∞á£δí£ Ω│ä∞åìφòÿΩ╕░"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "SongsterrΩ░Ç δºê∞¥î∞ùÉ δô£∞ï¡δïêΩ╣î? ∞êÿ∞▓£ δ¬à∞¥ÿ Ω╡¼δÅà∞₧É∞ÖÇ φò¿Ω╗ÿ ∞ÿñδª¼∞ºÇδäÉ ∞¥î∞òà ∞á£∞₧æ∞₧ÉδÑ╝ ∞ºÇ∞¢ÉφòÿΩ│á δìö δéÿ∞¥Ç ∞á£φÆê∞¥ä δºîδôñ ∞êÿ ∞₧êδÅäδí¥ δÅä∞ÖÇ∞ú╝∞ä╕∞Üö Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["φöîδƒ¼∞èñ Ω╡¼δÅà"],
      },
    },
    language: "ko",
    pluralForms: "nplurals=1; plural=0;",
  },
  kz = null,
  kR = {
    translations: {
      "": {
        "Continue on a free plan": ["╨ƒ╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î ╨▒╨╡╤ü╨┐╨╗╨░╤é╨╜╨╛"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "╨¢╤Ä╨▒╨╕╤é╨╡ Songsterr? ╨ƒ╤Ç╨╕╤ü╨╛╨╡╨┤╨╕╨╜╤Å╨╣╤é╨╡╤ü╤î ╨║ ╤é╤ï╤ü╤Å╤ç╨░╨╝ ╨┐╨╛╨┤╨┐╨╕╤ü╤ç╨╕╨║╨╛╨▓, ╤ç╤é╨╛╨▒╤ï ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨░╤é╤î ╤ü╨╛╨╖╨┤╨░╤é╨╡╨╗╨╡╨╣ ╨╛╤Ç╨╕╨│╨╕╨╜╨░╨╗╤î╨╜╨╛╨╣ ╨╝╤â╨╖╤ï╨║╨╕ ╨╕ ╨┐╨╛╨╝╨╛╤ç╤î ╨╜╨░╨╝ ╤ü╨╛╨╖╨┤╨░╤é╤î ╨╡╤ë╨╡ ╨▒╨╛╨╗╨╡╨╡ ╨║╨░╤ç╨╡╤ü╤é╨▓╨╡╨╜╨╜╤ï╨╣ ╨┐╤Ç╨╛╨┤╤â╨║╤é Γ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["╨ƒ╨╛╨┤╨┐╨╕╤ü╨░╤é╤î╤ü╤Å"],
      },
    },
    language: "ru",
    pluralForms:
      "nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
  },
  k$ = {
    translations: {
      "": {
        "Continue on a free plan": ["τ╗ºτ╗¡Σ╜┐τö¿σàìΦ┤╣Φ«íσêÆ"],
        "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å":
          [
            "σû£µ¼óSongsterr∩╝ƒσèáσàÑµò░Σ╗ÑσìâΦ«íτÜäΦ«óΘÿàΦÇà∩╝îµö»µîüσÄƒσê¢Θƒ│Σ╣Éσê¢Σ╜£ΦÇà∩╝îσ╕«σè⌐µêæΣ╗¼µëôΘÇáµ¢┤σÑ╜τÜäΣ║ºσôüΓ¥ñ∩╕Å",
          ],
        "Subscribe to Plus": ["Φ«óΘÿàσèáσ╝║τëê"],
      },
    },
    language: "zh",
    pluralForms: "nplurals=1; plural=0;",
  },
  kF = null,
  kV = [kI, kN, kM, kB, kO, kD, kz, kR, k$, kF];
let kU = "sr_subscribe_dialog",
  kH = () => {
    let { dispatch: e } = lU(),
      { gettext: t } = yd(kV),
      [n, r] = d(!l8(kU)),
      i = () => {
        r(!1),
          l7(kU, !0),
          e("curiosity/setConversionProps", {
            "Last referring link": "Subscribe dialogue",
          }),
          e("navigate", "/a/wa/plus?from=subscribe_dialogue");
      },
      a = () => {
        r(!1), l7(kU, !0);
      };
    return (
      n &&
      g(
        "section",
        { className: kA.settings },
        g(
          "div",
          { className: kA.panel },
          g(
            "div",
            { className: kA.head },
            g("h2", { className: kA.title }, t("Subscribe to Plus"))
          ),
          g(
            "p",
            { className: kA.body },
            t(
              "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å"
            )
          ),
          g(
            "div",
            { className: kA.actions },
            g(
              "button",
              { id: "subscribe", className: kA.button, onClick: i },
              t("Subscribe to Plus")
            ),
            g(
              "button",
              { id: "cancel", className: kA.buttonLink, onClick: a },
              t("Continue on a free plan")
            )
          )
        )
      )
    );
  },
  kj = "u52oy",
  kG = "u51oh",
  kW = "u51nj",
  kq = { panel: "u52oy", controls: "u51oh", active: "u51nj" };
class kX extends w {
  activeItemRef = _();
  constructor() {
    super(), (this.state = { offset: 0 });
  }
  componentDidMount() {
    this.props.tabEditor.adminPanelOpened &&
      this.props.dispatch("tabEditor/loadAdminData", {
        offset: this.state.offset,
        limit: 500,
      }),
      this.activeItemRef.current &&
        this.activeItemRef.current.scrollIntoView({ behavior: "smooth" });
  }
  componentDidUpdate(e) {
    !e.tabEditor.adminPanelOpened &&
      this.props.tabEditor.adminPanelOpened &&
      this.props.dispatch("tabEditor/loadAdminData", {
        offset: this.state.offset,
        limit: 500,
      }),
      this.activeItemRef.current &&
        this.activeItemRef.current.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    let { dispatch: e, query: t, tabEditor: n } = this.props;
    if (!n.adminPanelOpened) return null;
    let { offset: r } = this.state,
      i = +t.tabedit,
      a = n.adminData.map((e) =>
        g(
          "li",
          {
            ref: e.id === i ? this.activeItemRef : void 0,
            className: e.id === i ? kq.active : void 0,
            onClick: () => this.props.dispatch("tabEditor/loadById", e.id),
          },
          `id"${e.id}"-song"${e.songId}"`
        )
      ),
      s = () => {
        e("tabEditor/loadAdminData", { offset: r - 500, limit: 500 }),
          this.setState({ offset: r - 500 });
      },
      o = () => {
        e("tabEditor/loadAdminData", { offset: r + 500, limit: 500 }),
          this.setState({ offset: r + 500 });
      };
    return g(
      "div",
      { className: kq.panel },
      g(
        "div",
        { className: kq.controls },
        g("button", { onClick: s }, "<<"),
        g("h1", {}, `${r}-${r + 500}`),
        g("button", { onClick: o }, ">>")
      ),
      g("ul", null, a)
    );
  }
}
var kY = hc(kX, "tabEditor", "query");
let kK = "Bz8bn",
  kJ = { overlay: "Bz8bn" };
function kZ() {
  let { layer: e, dispatch: t } = lU("layer");
  return (
    e.layer &&
    f("div", {
      className: kJ.overlay,
      onClick: () => t("layer/hide"),
      id: "hide-layer-overlay",
    })
  );
}
let kQ = E(() =>
  Promise.all([
    import("./UTRecorder.94b32497.js"),
    yW([
      "/static/latest/UTRecorder.0420d2af021d9053.css",
      "/static/latest/index.546235ebfd21e495.css",
      "/static/latest/Input.a9724713b13b8c84.css",
    ]),
  ]).then((e) => e[0])
);
function k1() {
  let { ut: e } = lU("ut"),
    t = e.stage;
  if (t === dP) return;
  let [n] = y((e) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(e),
      console && console.error(e);
  });
  return n ? null : f(v, { fallback: void 0, children: f(kQ, this.props) });
}
let k0 = (e) => !e || !e.tracks || 1 === e.tracks.length,
  k2 = (e, t) =>
    e.layer.layer === t
      ? e.dispatch("layer/hide")
      : e.dispatch("layer/show", t),
  k5 = (e) => e.meta.allowedByLicense,
  k4 = (e) => !e.route.isPanel,
  k3 = (e) => {
    let { current: t } = e.store.get().part;
    return t && !t.usedDrums;
  },
  k9 = (e) => !k0(e.meta.current) || (k2(e, "solo_single"), !1),
  k8 = (e) => (t) => !!(en(t.user) || ot(t.demo)) || (k2(t, e), !1),
  k6 = (e) => (e.layer.layer && e.dispatch("layer/hide"), !0);
class k7 extends w {
  componentDidMount() {
    let e = window.hotKeysManager;
    e.bindOne("esc", this.handleHide, { parallel: !0 }),
      e.bindMeta("cmd+p", this.handlePrint);
  }
  componentDidCatch(e, t) {
    try {
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(e);
    } catch (e) {}
    console && console.error(e, t);
  }
  handleAction = (e, t) => (n) => {
    for (let t of (n.stopPropagation(), n.preventDefault(), e))
      if (!t(this.props)) return;
    t(n);
  };
  handlePlay = this.handleAction([k5, k4, k6], () => {
    let { store: e } = this.props,
      { meta: t, player: n, user: r } = e.get();
    if (!t.isFailed && rb(t, r)) {
      if (n.videoOpened)
        n.shouldPlay ? this.handlePauseVideo() : this.handlePlayVideo();
      else {
        let { dispatch: e } = this.props;
        lr(e, n.audio),
          e("curiosity/google", {
            category: "Player",
            action: n.shouldPlay ? "Pressed pause" : "Pressed play",
          });
      }
    }
  });
  handlePlayVideo = () => {
    let { player: e, dispatch: t } = this.props;
    t("player/resume", "buffering"), e.video.play(), lr(t, e.audio, !0);
  };
  handlePauseVideo = () => {
    let { player: e, dispatch: t } = this.props;
    e.video.pause(), lr(t, e.audio, !1);
  };
  handleMixer = this.handleAction([k5, k4], () => {
    let { store: e } = this.props,
      { meta: t } = e.get();
    t.current && t.current.tracks && k2(this.props, "mixer");
  });
  handleSpeed = this.handleAction([k5, k4, k8("plus_speed")], () => {
    k2(this.props, "speed");
  });
  handleIncreaseBpm = this.handleAction([k5, k4, k8("plus_speed")], () => {
    lo(this.props.store);
  });
  handleChangeSpeed = (e) =>
    this.handleAction([k5, k4, k8("plus_speed")], () => {
      lu(this.props.store, e);
    });
  handleDecreaseBpm = this.handleAction([k5, k4, k8("plus_speed")], () => {
    ll(this.props.store);
  });
  handlePitchshift = this.handleAction(
    [k5, k4, k8("plus_pitchshift"), k6],
    () => {
      k2(this.props, "pitchshift");
    }
  );
  handleCountin = this.handleAction([k5, k4, k6], () => {
    lf(this.props.dispatch);
  });
  handleMetronome = this.handleAction([k5, k4, k6], () => {
    this.props.player.isMetronome || k2(this.props, "metronome"),
      this.props.dispatch("player/toggleMetronome:init");
  });
  handleSolo = this.handleAction([k5, k4, k9, k8("plus_solo"), k6], () => {
    let { store: e } = this.props,
      { player: t } = e.get();
    lm(e, "solo" === t.type ? "focus" : "solo");
  });
  handleMute = this.handleAction([k5, k4, k8("plus_mute"), k6], () => {
    let { store: e } = this.props,
      { player: t } = e.get();
    lm(e, "mute" === t.type ? "focus" : "mute");
  });
  handleLoop = this.handleAction([k5, k4, k8("plus_loop"), k6], () =>
    ls(this.props.store)
  );
  handlePrint = this.handleAction([k5, k4, k8("plus_print"), k6], async () => {
    let { store: e } = this.props,
      { meta: t, player: n, user: r } = e.get();
    if (
      (!t.isFailed &&
        rb(t, r) &&
        (n.videoOpened
          ? this.handlePauseVideo()
          : this.props.dispatch("player/togglePlay", !1)),
      "chords" === this.props.route.page)
    )
      this.props.dispatch("curiosity/event", { event: "Printed chords" }),
        window.print();
    else if ("tab" === this.props.route.page) {
      if (
        (this.props.experiments.print_scale?.status === "pending" &&
          this.props.dispatch("experiments/activate", {
            experimentName: "print_scale",
          }),
        ot(this.props.print))
      )
        await this.props.dispatch("print/disable");
      else if (
        (await this.props.dispatch("layer/show", "print"),
        await this.props.dispatch("print/enable"),
        "off" === this.props.experiments.print_scale.segment)
      ) {
        let e =
          lC(this.props.device.os) ||
          lE(this.props.device.os) ||
          lT(this.props.device);
        setTimeout(
          async () => {
            await this.props.dispatch("curiosity/event", {
              event: "Printed tab",
              Scale: this.props.store.get().print.zoom,
            }),
              window.print();
          },
          e ? 1e3 : 50
        );
      }
    }
  });
  handleTabEditor = this.handleAction([k5, k4, k3, k6], () => {
    let { dispatch: e, player: t, route: n } = this.props,
      r = n.hasEditor;
    r && (t.video.pause(), e("player/stopPlay")),
      e("curiosity/event", { event: "Pressed tab editor", opened: r }),
      e("screener/pressedEditor"),
      e("tabEditor/toggle");
  });
  handleFingerings = this.handleAction([k5, k4, k6], () => {
    this.props.dispatch("fingerings/toggle");
  });
  handleMinimize = () => k6(this.props);
  handleNotation = this.handleAction([], () => {
    "help_notation" === this.props.layer.layer
      ? this.props.dispatch("layer/hide")
      : this.props.dispatch("layer/show", "help_notation");
  });
  handleHide = this.handleAction([], () => {
    if (this.props.route.isPanel) {
      let {
          routeContent: e,
          meta: t,
          chords: n,
          tags: r,
        } = this.props.store.get(),
        i = bm(e, t, n, r);
      this.props.dispatch("navigate", i);
    }
    if (this.props.layer.layer) {
      this.props.dispatch("layer/hide");
      return;
    }
  });
  render() {
    let {
        user: e,
        demo: t,
        meta: n,
        chords: r,
        routeContent: i,
        device: a,
        print: s,
      } = this.props,
      o = !this.props.device.webview,
      l = this.props.screen.isSmall,
      c = !n.loading && !!n.current,
      u = o && c && !l,
      d = u && td(e, V.USE_ADMIN_TOOLS),
      p = u && td(e, V.USE_TAB_EDITOR),
      h = o && !l && this.props.payment.showMigrationPopup,
      m = !en(e) && !ot(t) && this.props.curiosity.vpt10.count >= 10 && !l,
      y = !1,
      v = hl.main;
    if ("tab" === i.page) {
      v = ot(s) ? hl.appPrint : hl.appNoPrint;
      let r = !n.isFailed && n.allowedByLicense;
      y = r && !en(e) && !ot(t) && a.isPhone;
    } else if ("chords" === i.page) {
      v = hl.appChords;
      let n = !r.isFailed;
      (y = n && !en(e) && !ot(t) && a.isPhone),
        this.props.device.webview && (v = hl.appChordsMinimalism);
    } else "tags" === i.page && (v = hl.appTags);
    return g(
      "div",
      { className: v, id: "app" },
      o && g(bR, null),
      o && g(bP, { isSmallScreen: l }),
      o && g(Sg, null),
      o && g(wF, null),
      o && g(k1, null),
      o &&
        ("tab" === i.page || "chords" === i.page) &&
        l &&
        g(xd, { isChords: "chords" === i.page, handleMixer: this.handleMixer }),
      y && f(Sh, null, "showroom-header"),
      g(vo, {
        plusAccess: en(this.props.user) || ot(this.props.demo),
        showFullUI: o,
        handleNotation: this.handleNotation,
      }),
      "tab" === i.page &&
        f(hM, {
          component: vF,
          handlePlay: this.handlePlay,
          handleMixer: this.handleMixer,
          handleSpeed: this.handleSpeed,
          handleSolo: this.handleSolo,
          handleMute: this.handleMute,
          handleLoop: this.handleLoop,
          handlePitchshift: this.handlePitchshift,
          handlePrint: this.handlePrint,
          handleCountin: this.handleCountin,
          handleMetronome: this.handleMetronome,
          handleNotation: this.handleNotation,
          handleMinimize: this.handleMinimize,
          handleTabEditor: this.handleTabEditor,
          handleIncreaseBpm: this.handleIncreaseBpm,
          handleDecreaseBpm: this.handleDecreaseBpm,
          handleFingerings: this.handleFingerings,
          handleChangeSpeed: this.handleChangeSpeed,
          handlePlayVideo: this.handlePlayVideo,
          handlePauseVideo: this.handlePauseVideo,
        }),
      "chords" === i.page &&
        f(hM, { component: vR, handlePrint: this.handlePrint }),
      ("tag" === i.page || "tags" === i.page) && f(hM, { component: v$ }),
      o && !en(this.props.user) && !ot(this.props.demo) && g(w0, null),
      o && u && g(bG, { songId: n.songId }),
      o && p && g(kY, null),
      o && d && g(w7, null),
      o && f(kZ, {}),
      o && h && g(kS, null),
      o && m && g(kH, null),
      this.props.isTestMode &&
        this.props.player.canPlay &&
        g("div", { id: "is-test-mode", className: hl.isTestMode }, "TEST MODE")
    );
  }
}
var Ce = hc(
  k7,
  "isTestMode",
  "user",
  "screen",
  "layer",
  "route",
  "routeContent",
  "meta",
  "chords",
  "demo",
  "device",
  "payment",
  "player",
  "curiosity",
  "experiments",
  "print"
);
let Ct = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
  Cn = Array.from("1234567890"),
  Cr = [
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "Numpad4",
    "Numpad5",
    "Numpad6",
    "Numpad7",
    "Numpad8",
    "Numpad9",
    "Numpad0",
  ],
  Ci = {
    backspace: 8,
    delete: 46,
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
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    "+": 187,
    "-": 189,
  };
function Ca(e) {
  let t = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  return t || "cmd" !== e ? (t && "ctrl" === e ? "cmd" : e) : "ctrl";
}
function Cs() {
  let e = document.activeElement;
  return (
    !!(
      e &&
      ["input", "select", "button", "textarea"].includes(
        e.tagName.toLowerCase()
      )
    ) && (e.blur && e.blur(), !0)
  );
}
class Co {
  constructor(e) {
    (this.store = e),
      (this.handlers = {}),
      (this.meta = {}),
      (this.bindSources = {}),
      window.addEventListener("keydown", this.keyboardHandler.bind(this), !1),
      window.addEventListener("keyup", this.preventHandler.bind(this), !1);
  }
  preventHandler(e) {
    e.target instanceof HTMLButtonElement &&
      32 === e.keyCode &&
      !this.store.get().route.isPanel &&
      (e.preventDefault(), e.stopPropagation());
  }
  keyboardHandler(e) {
    if (this.store.get().consent.view) return;
    if (e.altKey || e.shiftKey || e.metaKey || e.ctrlKey) {
      this.metaHandler(e);
      return;
    }
    if (
      !this.handlers[e.keyCode] ||
      e.repeat ||
      ((e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement) &&
        !e.target.hasAttribute("data-hotkey"))
    )
      return;
    let t = this.handlers[e.keyCode],
      n = "function" == typeof t.global && t.global;
    if (t.global) {
      n(e);
      return;
    }
    let r = this.store.get().route.isPanel;
    if (t.parallel) {
      let n = "function" == typeof t.parallel && t.parallel;
      (r && Cs()) || n(e);
    }
    if (r) {
      let n = "function" == typeof t.onPanelPopup && t.onPanelPopup,
        r = "function" == typeof t.onPanel && t.onPanel;
      t.onPanelPopup ? n(e) : t.onPanel && r(e);
    } else {
      let n = "function" == typeof t.onPopup && t.onPopup,
        r = "function" == typeof t.onTab && t.onTab;
      t.onPopup ? n(e) : t.onTab && r(e);
    }
  }
  metaHandler(e) {
    let t;
    if (
      16 === e.keyCode ||
      17 === e.keyCode ||
      18 === e.keyCode ||
      91 === e.keyCode ||
      !this.meta[e.keyCode]
    )
      return;
    let n = this.meta[e.keyCode];
    if (
      (e.altKey
        ? (t = n.alt)
        : e.ctrlKey
        ? (t = n.ctrl)
        : e.metaKey
        ? (t = n.cmd)
        : e.shiftKey && (t = n.shift),
      t)
    ) {
      if (e.repeat) {
        t.repeat && t.repeat(e);
        return;
      }
      let {
        route: { isPanel: n },
        layer: { layer: r },
      } = this.store.get();
      t.onPopup
        ? t.onPopup(e)
        : t.onTab
        ? n || null !== r || t.onTab(e)
        : t.global && t.global(e);
    }
  }
  bindMeta(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "global",
      r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
      i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      [a, s] = e.split("+");
    if (!("shift" === a || "ctrl" === a || "alt" === a || "cmd" === a)) {
      console.error("Please check your meta handler");
      return;
    }
    (this.bindSources[`${s}-${a}-${n}`] = r),
      (this.meta[Ci[s]] = this.meta[Ci[s]] || {}),
      (this.meta[Ci[s]][Ca(a)] = this.meta[Ci[s]][Ca(a)] || {}),
      (this.meta[Ci[s]][Ca(a)][n] = t),
      i && (this.meta[Ci[s]][Ca(a)].repeat = ob(t, 400));
  }
  unbindMeta(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "global",
      n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
      [r, i] = e.split("+");
    if (!("shift" === r || "ctrl" === r || "alt" === r || "cmd" === r)) {
      console.error("Please check your meta handler");
      return;
    }
    let a = this.bindSources[`${i}-${r}-${t}`] === n;
    this.meta[Ci[i]] && a && delete this.meta[Ci[i]][Ca(r)][t];
  }
  bindOne(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
    (this.bindSources[`${e}-${Object.keys(n)[0]}`] = r),
      (this.handlers[Ci[e]] = this.handlers[Ci[e]] || {}),
      (this.handlers[Ci[e]][Object.keys(n)[0]] = t);
  }
  unbindOne(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
      r = this.bindSources[`${e}-${Object.keys(t)[0]}`] === n;
    this.handlers[Ci[e]] && r && delete this.handlers[Ci[e]][Object.keys(t)[0]];
  }
  bind(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (let r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        ("keyboard*" === r
          ? Ct.forEach((i) => this.bindOne(i, e[r], t, n))
          : "digits*" === r
          ? Cn.forEach((i) => this.bindOne(i, e[r], t, n))
          : "numpad*" === r
          ? Cr.forEach((i) => this.bindOne(i, e[r], t, n))
          : this.bindOne(r, e[r], t, n));
  }
  unbind(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (let r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        ("keyboard*" === r
          ? Ct.forEach((e) => this.unbindOne(e, t, n))
          : "digits*" === r
          ? Cn.forEach((e) => this.unbindOne(e, t, n))
          : "numpad*" === r
          ? Cr.forEach((e) => this.unbindOne(e, t, n))
          : this.unbindOne(r, t, n));
  }
}
async function Cl() {
  let e;
  await A();
  let t = pY(JSON.parse(document.getElementById("state").innerHTML)),
    n = t.get().device,
    r = n.webview,
    i = "bot" === n.type;
  window.Sentry &&
    window.Sentry.onLoad(() => {
      let e = t.get(),
        n = { page: e.route.page };
      for (let t of Object.keys(e.experiments)) {
        let r = e.experiments[t];
        n["e_" + t] = `${r.segment} ${r.status}`;
      }
      window.Sentry.setTags(n);
    }),
    (window.hotKeysManager = new Co(t));
  let a = () => {
      let e = s4(),
        n = s9();
      t.dispatch("screen/resize", { screen: e, viewport: n });
    },
    s = () => {
      clearTimeout(e), (e = setTimeout(a, 100));
    },
    o = window.visualViewport || window;
  o.addEventListener("resize", s),
    await Promise.resolve(),
    L(
      g(lF.Provider, { value: t }, g(Ce, { store: t })),
      document.getElementById("root")
    ),
    s(),
    await Promise.resolve(),
    rw(t),
    pe(t),
    (window.__fu_ggc = String.fromCharCode.apply(
      null,
      [
        119, 105, 110, 100, 111, 119, 46, 86, 50, 85, 103, 98, 71, 57, 50, 90,
        83, 66, 49, 76, 67, 66, 72, 89, 87, 49, 108, 99, 107, 100, 112, 99, 109,
        120, 104, 98, 109, 82, 68, 98, 121, 69, 103, 79, 105, 48, 113, 38, 38,
        119, 105, 110, 100, 111, 119, 46, 86, 50, 85, 103, 98, 71, 57, 50, 90,
        83, 66, 49, 76, 67, 66, 72, 89, 87, 49, 108, 99, 107, 100, 112, 99, 109,
        120, 104, 98, 109, 82, 68, 98, 121, 69, 103, 79, 105, 48, 113, 46, 109,
        97, 116, 99, 104, 40, 47, 40, 94, 124, 46, 42, 46, 41, 115, 111, 110,
        103, 115, 116, 101, 114, 114, 46, 40, 99, 111, 109, 124, 100, 101, 118,
        41, 47, 41, 124, 124, 40, 115, 101, 116, 84, 105, 109, 101, 111, 117,
        116, 40, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 123, 119, 105,
        110, 100, 111, 119, 46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104,
        114, 101, 102, 61, 39, 104, 116, 116, 112, 115, 58, 47, 47, 121, 111,
        117, 116, 117, 46, 98, 101, 47, 79, 77, 79, 71, 97, 117, 103, 75, 112,
        122, 115, 39, 125, 44, 77, 97, 116, 104, 46, 114, 97, 110, 100, 111,
        109, 40, 41, 42, 49, 48, 48, 48, 48, 41, 41, 59, 114, 101, 116, 117,
        114, 110, 32, 102, 97, 108, 115, 101,
      ]
    ));
  let l = t.get(),
    c =
      -1 !== window.location.search.indexOf("ut=on") ||
      -1 !== window.location.search.indexOf("ut=srm");
  if ((r || i || c || tM(() => dK(t)), !r && !i)) {
    tM(() => {
      let e = t.get();
      c && t.dispatch("ut/continue", e.query.utName),
        "mytabs" !== l.route.page &&
          e.user.isLoggedIn &&
          (e.myTabs.tabs?.length || pG(t.dispatch)),
        "favorites" !== l.route.page &&
          e.user.isLoggedIn &&
          (e.favorites.favorites.length || cd(t.dispatch), ck(t.dispatch)),
        t.dispatch("curiosity/visitedPage");
    }),
      tM(() => {
        uk(t.dispatch);
      }),
      tM(() => {
        let e = t.get();
        "search" !== e.route.page
          ? (t.dispatch("songs/filter", {
              pattern: "",
              filters: {
                instrument: t2,
                tunings: { [t2]: ne },
                difficulty: t9,
              },
            }),
            "artist" === e.route.page && t.dispatch("artist/fillAdminData"))
          : t.dispatch("songs/fillAdminData");
      }),
      "off" === t.get().query.sw ? pJ() : pK();
    let e = () => t.dispatch("player/resume", "pagehide"),
      n = () => t.dispatch("player/suspend", "pagehide");
    window.addEventListener("pageshow", e, !1),
      window.addEventListener("resume", e, !1),
      window.addEventListener("pagehide", n, !1),
      window.addEventListener("freeze", n, !1),
      "mediaSession" in navigator &&
        (navigator.mediaSession.setActionHandler("play", () => {
          t.dispatch("player/togglePlay", !0);
        }),
        navigator.mediaSession.setActionHandler("pause", () => {
          t.dispatch("player/togglePlay", !1);
        }));
  }
  (l.isTestMode || "prod" !== window.__STAGE__) && (window.__store__ = t);
  try {
    window.V2UgbG92ZSB1LCBHYW1lckdpcmxhbmRDbyEgOi0q = import.meta.url;
  } catch (e) {}
  ct(l) && t.dispatch("payment/popup:show"),
    (window.trackNotsyEvent = (e, n) =>
      "prod" === window.__STAGE__ &&
      t.dispatch("curiosity/event", { event: e, ...n }));
  try {
    if (t.get().device.isDesktop) {
      let e = async () => {
          let e = t.get();
          if (!ot(e.print)) {
            let n = e.user;
            en(n) ||
              ot(e.demo) ||
              (await t.dispatch("layer/show", "plus_print"));
          }
        },
        n = async () => {
          let e = t.get();
          if ("off" === e.experiments.print_scale.segment) {
            let n = lC(e.device.os) || lE(e.device.os) || lT(e.device);
            !n && ot(e.print) && (await t.dispatch("print/disable"));
          }
        };
      if (window.matchMedia) {
        let t = window.matchMedia("print");
        t.addListener(function (t) {
          t.matches ? e() : n();
        });
      }
      window.addEventListener("beforeprint", e),
        window.addEventListener("afterprint", n);
    }
  } catch (e) {}
  try {
    if (("wakeLock" in navigator)) {
      let e = null,
        t = async () => {
          try {
            e = await navigator.wakeLock.request("screen");
          } catch (e) {}
        };
      t();
      let n = () => {
        null !== e && "visible" === document.visibilityState && t();
      };
      // document.addEventListener("visibilitychange", n);
    }
  } catch (e) {}
}
"undefined" == typeof window ||
  window.__APP_INITIALISED ||
  ((window.__APP_INITIALISED = !0), Cl().catch((e) => console.error(e)));
export {
  pM as $,
  wU as A,
  o8 as B,
  my as C,
  B as D,
  ov as E,
  o6 as F,
  o2 as G,
  o4 as H,
  y7 as I,
  o3 as J,
  lu as K,
  hO as L,
  o9 as M,
  hD as N,
  wo as O,
  S_ as P,
  kp as Q,
  km as R,
  lF as S,
  ml as T,
  xX as U,
  xz as V,
  x_ as W,
  tv as X,
  cD as Y,
  pN as Z,
  fg as _,
  bX as a,
  a6 as a$,
  lT as a0,
  ek as a1,
  S8 as a2,
  fT as a3,
  fk as a4,
  a8 as a5,
  ld as a6,
  t1 as a7,
  tZ as a8,
  eE as a9,
  rH as aA,
  ia as aB,
  is as aC,
  rW as aD,
  rU as aE,
  rY as aF,
  rq as aG,
  rK as aH,
  r_ as aI,
  iy as aJ,
  rN as aK,
  rI as aL,
  rA as aM,
  ij as aN,
  rM as aO,
  rB as aP,
  tK as aQ,
  s7 as aR,
  pE as aS,
  ob as aT,
  rR as aU,
  r$ as aV,
  rF as aW,
  rO as aX,
  rD as aY,
  it as aZ,
  oy as a_,
  eT as aa,
  oJ as ab,
  hN as ac,
  rb as ad,
  tu as ae,
  $ as af,
  F as ag,
  op as ah,
  Sp as ai,
  om as aj,
  og as ak,
  td as al,
  V as am,
  iH as an,
  i1 as ao,
  g4 as ap,
  gP as aq,
  gN as ar,
  gE as as,
  g_ as at,
  iw as au,
  iS as av,
  i0 as aw,
  rj as ax,
  rG as ay,
  im as az,
  wZ as b,
  lH as b$,
  id as b0,
  tM as b1,
  s2 as b2,
  sa as b3,
  ii as b4,
  io as b5,
  il as b6,
  ic as b7,
  iu as b8,
  uF as b9,
  yT as bA,
  n_ as bB,
  nE as bC,
  nC as bD,
  eC as bE,
  e6 as bF,
  t$ as bG,
  xI as bH,
  xP as bI,
  c$ as bJ,
  e9 as bK,
  wa as bL,
  cz as bM,
  d2 as bN,
  lQ as bO,
  xL as bP,
  xT as bQ,
  xA as bR,
  uD as bS,
  di as bT,
  U as bU,
  ty as bV,
  d3 as bW,
  l1 as bX,
  nZ as bY,
  n0 as bZ,
  n4 as b_,
  uV as ba,
  uN as bb,
  xD as bc,
  u2 as bd,
  uK as be,
  lI as bf,
  nO as bg,
  nm as bh,
  lM as bi,
  nB as bj,
  ne as bk,
  lN as bl,
  t2 as bm,
  bQ as bn,
  b0 as bo,
  t3 as bp,
  t4 as bq,
  t5 as br,
  nx as bs,
  ng as bt,
  nS as bu,
  nD as bv,
  e3 as bw,
  fI as bx,
  I as by,
  lD as bz,
  hl as c,
  n2 as c0,
  nQ as c1,
  n5 as c2,
  n1 as c3,
  tf as c4,
  nJ as c5,
  uz as c6,
  xN as c7,
  lK as c8,
  xM as c9,
  b5 as cA,
  dP as cB,
  dB as cC,
  dD as cD,
  dz as cE,
  dL as cF,
  dA as cG,
  dM as cH,
  dR as cI,
  dN as cJ,
  dI as cK,
  dO as cL,
  d_ as cM,
  kb as cN,
  cF as cO,
  xR as cP,
  rE as cQ,
  uB as cR,
  tg as cS,
  l5 as ca,
  j as cb,
  dn as cc,
  tm as cd,
  tD as ce,
  wV as cf,
  cn as cg,
  H as ch,
  vD as ci,
  xB as cj,
  wm as ck,
  wg as cl,
  wf as cm,
  tS as cn,
  tb as co,
  tw as cp,
  yu as cq,
  xp as cr,
  l4 as cs,
  l2 as ct,
  l3 as cu,
  uh as cv,
  S6 as cw,
  x6 as cx,
  l6 as cy,
  l7 as cz,
  lE as d,
  ot as e,
  uw as f,
  oh as g,
  en as h,
  lC as i,
  wy as j,
  hS as k,
  oP as l,
  hw as m,
  yd as n,
  h5 as o,
  Se as p,
  bJ as q,
  b7 as r,
  e8 as s,
  e7 as t,
  lU as u,
  bh as v,
  uW as w,
  bp as x,
  hc as y,
  o5 as z,
};
