let e, t, n, i, r, a, s, o, l;
import {
  E as c,
  q as d,
  p as u,
  F as p,
  s as h,
  h as f,
  v as g,
  o as m,
  P as y,
  D as v,
  T as b,
  _ as w,
  A as S,
  a as x,
  d as k,
  x as C,
  M as T,
  b as E,
  y as _,
  c as P,
  B as I,
} from "./preact.294f37c2.js";
async function L() {
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
let N = !0,
  A = void 0,
  M = "8171295d",
  B = 27;
class D {
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
        var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), a = 1;
        a < i;
        a++
      )
        r[a - 1] = arguments[a];
      let { events: s } = e,
        o = {},
        l = !1;
      if (s[t])
        for (let i of s[t]) {
          let t = i(e.state, ...r);
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
let O = (e) => {},
  R = [123, 114, 96, 67, 127, 102, 96]
    .map((e) => String.fromCharCode(19 ^ e))
    .join("");
var z,
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
  en,
  ei = (e) => true;
let er =
    /([\/-])((drum|bass)-)?(tab|chords)-([bg]-)?s(\d+)(t(\d+))?(\/r(\d+))?(\/editor)?/i,
  ea =
    /(?:(?:diff)|(?:a\/wsa)\/)(.*)-tab-s(\d+)(?:t(?:\d+))?\/r(\d+)(t(\d+))?...r(\d+)(t(\d+))?/i,
  es = /([\w-]*)(-(drum|bass))$/,
  eo = { page: "", isPanel: !1 },
  el = [
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
      ea,
      (e) => {
        let [, t, n, i, , r, a, , s] = e,
          [, , , o] = t.match(es) || [];
        return {
          page: "diff",
          songId: +n,
          partInstrument: o || null,
          before: { revisionId: +i, partId: r ? +r : 0 },
          after: { revisionId: +a, partId: r ? +s : 0 },
          isPanel: !1,
        };
      },
    ],
    [
      er,
      (e) => {
        let [, , , t, n, , i, , r, , a, s] = e;
        return "tab" === n
          ? {
              partInstrument: t || null,
              page: n,
              songId: +i,
              partId: r ? +r : null,
              revisionId: a ? +a : null,
              isPanel: !1,
              hasEditor: !!s,
            }
          : {
              page: n,
              songId: +i,
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
function ec(e) {
  for (let [t, n] of el)
    if (t instanceof RegExp) {
      let i = e.match(t);
      if (i) {
        if ("function" == typeof n) return n(i);
        return n;
      }
    } else if (e === t) {
      if ("function" == typeof n) return n.apply(null);
      return n;
    }
  return eo;
}
function ed(e) {
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
function eu(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function ep(e, t, n) {
  if (n.user.isLoggedIn) {
    if ("/a/wa/signin" === e || "/a/wa/signup" === e) return "/a/wa/account";
    if (ei(n.user)) {
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
function eh(e, t, n) {
  let i = e ? e.toLowerCase() : "/";
  return ep(i, t, n);
}
function ef(e) {
  let t = e.page;
  return (
    "tab" === t || "chords" === t || "tag" === t || "tags" === t || "diff" === t
  );
}
function eg(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    a = { route: ec(e.toLowerCase()) };
  if (
    (t && t.length ? (a.query = ed(t)) : eu(n.query) || (a.query = {}),
    ef(a.route) &&
      ((a.routeContent = a.route),
      a.query
        ? (a.queryContent = a.query)
        : eu(n.queryContent) || (a.queryContent = {})),
    r)
  )
    return a;
  i.dispatch("route/change", a);
}
let em = (e) => {
    function t(t, n) {
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        [r, a] = n.split("#")[0].split("?"),
        s = eh(r, a, t);
      return (
        s && (([r, a] = s.split("?")), (n = s)),
        history.pushState(null, "", n),
        eg(r, a, t, e, i)
      );
    }
    e.on("navigate", (e, n) => t(e, n)),
      e.on("navigate/silent", (e, n) => t(e, n, !0)),
      e.on("popstate", (t, n) => {
        let { pathname: i, search: r } = n,
          a = r && r.substring(1),
          s = eh(i, a, t);
        if (s) {
          console.log("Found redirect to", s),
            history.replaceState(null, "", s),
            e.dispatch("navigate", s);
          return;
        }
        return eg(i, a, t, e);
      }),
      e.on("route/change", (e, t) => t),
      window.addEventListener("popstate", () => {
        e.dispatch("popstate", {
          pathname: location.pathname,
          search: location.search,
        });
      });
  },
  ey = 11531520,
  ev = 6e4,
  eb = (e) => e[0],
  ew = (e) => e[1],
  eS = (e) => e / 11531520,
  ex = (e, t) => Math.floor((eS(e) / t.bpm) * t.type * 6e4),
  ek = 24,
  eC = 32,
  eT = 1024,
  eE = 31;
function e_(e) {
  return 1024 === e;
}
function eP(e) {
  return e >= 24 && e <= 31;
}
function eI(e) {
  return e >= 32 && e <= 39;
}
let eL = 0,
  eN = 1,
  eA = 2,
  eM = 3,
  eB = 4,
  eD = 5,
  eO = 6,
  eR = 7,
  ez = 8,
  e$ = 9,
  eF = 10,
  eV = 11,
  eU = 12,
  eH = 13,
  ej = 14,
  eG = 15,
  eW = 16,
  eq = 17,
  eX = 18,
  eY = 19,
  eK = 20,
  eJ = 21,
  eZ = 22,
  eQ = 23,
  e1 = 24;
function e0(e) {
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
let e2 = (e) =>
    e
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\/|\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, ""),
  e5 = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return e2(t.join("-"));
  },
  e4 = (e) => e.replace(/-+/g, "-").replace(/^-*|-$/g, ""),
  e3 = (e) => e.replace(/^the-/g, "");
function e9(e, t, n) {
  let i = e.views || 0,
    r = !0;
  for (let a of t) {
    if (e === a) {
      r = !1;
      continue;
    }
    if (n(a.instrumentId)) {
      let e = a.views || 0;
      if (e > i || (e === i && r)) return !0;
    }
  }
  return !1;
}
function e8(e) {
  return e.endsWith("-bass") || e.endsWith("-drum") ? e.slice(0, -4) : e;
}
function e6(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!e) return "/";
  let r = "",
    a = !0;
  if (e.tracks && void 0 !== t && !n) {
    let n = null,
      s = e.tracks[t];
    s &&
      (e_(s.instrumentId)
        ? ((r = "-drum"), (n = e_))
        : eI(s.instrumentId)
        ? ((r = "-bass"), (n = eI))
        : eP(s.instrumentId) && (n = eP)),
      (a = i || !n || e9(s, e.tracks, n));
  }
  let s = e5(e.artist, e.title);
  a || (s = e8(s));
  let o = n ? `/r${n}` : "",
    l = a ? `t${t}` : "";
  return "/a/wsa/" + e3(e4(s + r + `-tab-s${e.songId}${l}${o}`));
}
function e7(e, t) {
  if (!e) return "/";
  let n = t ? `/r${t}` : "",
    i = e5(e.artist, e.title);
  return "/a/wsa/" + e3(e4(i + `-tab-s${e.songId}${n}`));
}
function te(e, t) {
  let n = "",
    i = "",
    r = e.tracks && e.tracks[t];
  r &&
    (e_(r.instrumentId)
      ? (i = "-drum")
      : eI(r.instrumentId)
      ? (i = "-bass")
      : eP(r.instrumentId) || (n = `t${r.partId}`));
  let a = e5(e.artist, e.title);
  return "/a/wsa/" + e3(e4((a = e8(a)) + i + `-tab-s${e.songId}${n}`));
}
function tt(e) {
  let t = e5(e.artist || "");
  return "/a/wsa/" + e4(t + `-tabs-a${e.artistId}`);
}
function tn(e) {
  if (!e) return "/";
  let t = e5(e.artist, e.title);
  return "/a/wsa/" + e3(e4(t + `-chords-s${e.songId}`));
}
function ti(e, t, n) {
  let i = e5(e.artist, e.title),
    r = t.partId ? `t${t.partId}` : "",
    a = n.partId ? `t${n.partId}` : "",
    s = "";
  if (e.tracks && void 0 !== t.partId && e.tracks[t.partId]) {
    let n = e.tracks[t.partId];
    n &&
      (e_(n.instrumentId)
        ? (s = "-drum")
        : eI(n.instrumentId) && (s = "-bass"));
  }
  return (
    "/a/wsa/" +
    e3(
      e4(
        `${i}-${s}-tab-s${e.songId}/r${t.revisionId}${r}...r${n.revisionId}${a}`
      )
    )
  );
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
let tr = [
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
  ta = new Map();
function ts(e) {
  return tr.filter((t) => !!e[t.audioHashPropertyName]).map((e) => e.version);
}
function to(e, t) {
  return t === $.V2
    ? e.audioV2Midi || null
    : t === $.V4
    ? e.audioV4Midi || null
    : (t === $.DEV && e.nextMidi) || null;
}
function tl(e, t) {
  let n = tp(t),
    i = e[n.audioHashPropertyName],
    r = n.audioErrorPropertyName ? e[n.audioErrorPropertyName] : null,
    a = to(e, t);
  return {
    version: t,
    versionInfo: n,
    audio: i,
    audioError: r || void 0,
    midi: a || void 0,
  };
}
function tc(e) {
  return e === $.V2 ? 2 : 3;
}
function td(e) {
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
tr.forEach((e) => ta.set(e.version, e));
class tu {
  numericVersion = 0;
  payload = "";
  constructor(e, t) {
    (this.numericVersion = e), (this.payload = t);
  }
  encode() {
    return tu.encode(this);
  }
  static getLatestAVTag(e) {
    return td(e);
  }
  static getLatestMVTag(e) {
    return tc(e);
  }
  static encode(e) {
    return `v${e.numericVersion}-${e.payload}`;
  }
  static decode(e) {
    if (!/^v\d+-/.test(e)) return null;
    let [t, n] = e.split("-");
    return new tu(+t.substring(1), n);
  }
}
function tp(e) {
  let t = ta.get(e);
  if (t) return t;
  throw Error(`Unable to get audio version info for version ${e}`);
}
class th {
  has(e, t) {
    return ts(e).includes(t);
  }
  getAll(e) {
    return ts(e);
  }
  get(e, t) {
    return tl(e, t);
  }
  getMVTagForEnv(e, t) {
    let n = tl(e, t),
      i = n.midi;
    return i ? tu.decode(i) : null;
  }
  getAVTagForEnv(e, t) {
    let n = tl(e, t),
      i = n.audio;
    return i ? tu.decode(i) : null;
  }
  hasLatestAVTag(e, t) {
    let n = this.getAVTagForEnv(e, t);
    return null != n && n.numericVersion >= td(t);
  }
  hasLatestMVTag(e, t) {
    let n = this.getMVTagForEnv(e, t);
    return null != n && n.numericVersion >= tc(t);
  }
  hasLatestSound(e, t) {
    let n = this.getAVTagForEnv(e, t);
    if (null == n) return !1;
    let i = tc(t),
      r = td(t),
      a = this.getMVTagForEnv(e, t);
    return null != a
      ? n.numericVersion >= r && a.numericVersion >= i
      : n.numericVersion >= r;
  }
}
let tf = new th();
!(function (e) {
  (e.ADMINISTRATE = "administrate"),
    (e.MANAGE_SONGS = "manage.songs"),
    (e.MANAGE_REVISIONS = "manage.revisions"),
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
let tg = (e, t) =>
    !!(e.permissions && Array.isArray(e.permissions)) &&
    (!!e.permissions.includes(V.ADMINISTRATE) ||
      (t instanceof Array
        ? t.some((t) => e.permissions.includes(t))
        : e.permissions.includes(t))),
  tm = {
    plus: { id: "plus", currency: "USD", price: "9.90" },
    plus_usd_1_49: { id: "plus_usd_1_49", currency: "USD", price: "1.49" },
    plus_usd_2_99: { id: "plus_usd_2_99", currency: "USD", price: "2.99" },
    plus_usd_3_49: { id: "plus_usd_3_49", currency: "USD", price: "3.49" },
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
    plus_clp_4200: { id: "plus_clp_4200", currency: "CLP", price: "4200.00" },
    plus_gbp_9_99: { id: "plus_gbp_9_99", currency: "GBP", price: "9.99" },
    plus_jpy_980: { id: "plus_jpy_980", currency: "JPY", price: "980.00" },
    plus_mnx_115: { id: "plus_mnx_115", currency: "MXN", price: "115.00" },
    plus_sek_109: { id: "plus_sek_109", currency: "SEK", price: "109.00" },
    plus_czk_149: { id: "plus_czk_149", currency: "CZK", price: "149.00" },
    plus_dkk_99: { id: "plus_dkk_99", currency: "DKK", price: "99.00" },
    plus_ils_19_90: { id: "plus_ils_19_90", currency: "ILS", price: "19.90" },
    plus_krw_10500: {
      id: "plus_krw_10500",
      currency: "KRW",
      price: "10500.00",
    },
    plus_nzd_14_99: { id: "plus_nzd_14_99", currency: "NZD", price: "14.99" },
    plus_nok_119: { id: "plus_nok_119", currency: "NOK", price: "119.00" },
    plus_pln_19_99: { id: "plus_pln_19_99", currency: "PLN", price: "19.99" },
    plus_sgd_9_98: { id: "plus_sgd_9_98", currency: "SGD", price: "9.98" },
    plus_zar_59_99: { id: "plus_zar_59_99", currency: "ZAR", price: "59.99" },
    plus_try_17_99: { id: "plus_try_17_99", currency: "TRY", price: "17.99" },
  },
  ty = (e) => tm[e],
  tv = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t ? "/mo." : "";
    switch (e.currency) {
      case "USD":
        return `\u0024${e.price}${n}`;
      case "EUR":
        return `\u20ac${e.price}${n}`;
      case "AUD":
        return `A\u0024${e.price}${n}`;
      case "BRL":
        let i = Number(e.price).toLocaleString("br-PT", {
          minimumFractionDigits: 2,
        });
        return `R\u0024\u00a0${i}${n}`;
      case "CAD":
        return `CA\u0024${e.price}${n}`;
      case "CHF":
        return `Fr.\u00a0${e.price}${n}`;
      case "CLP":
        let r = Number(e.price).toLocaleString("es-CL", {
          minimumFractionDigits: 2,
        });
        return `\u0024${r}${n}`;
      case "GBP":
        return `\u00a3${e.price}${n}`;
      case "JPY":
        let a = Number(e.price).toLocaleString("ja-JP", {
          maximumFractionDigits: 0,
        });
        return `\u00a5${a}${n}`;
      case "MXN":
        let s = Number(e.price).toLocaleString("es-MX", {
          minimumFractionDigits: 2,
        });
        return `MX\u0024${s}${n}`;
      case "SEK":
        let o = Number(e.price).toLocaleString("sv-SE", {
          minimumFractionDigits: 2,
        });
        return `${o}\u00a0kr${n}`;
      case "CZK":
        let l = Number(e.price).toLocaleString("cs-CZ");
        return `${l}\u00a0K\u010d${n}`;
      case "DKK":
        let c = Number(e.price).toLocaleString("da-DK", {
          minimumFractionDigits: 2,
        });
        return `${c}\u00a0kr${n}`;
      case "ILS":
        return `\u20aa${e.price}${n}`;
      case "KRW":
        let d = Number(e.price).toLocaleString("ko-KR");
        return `\u20a9${d}${n}`;
      case "NZD":
        return `NZ\u0024${e.price}${n}`;
      case "NOK":
        let u = Number(e.price).toLocaleString("nb-NO", {
          minimumFractionDigits: 2,
        });
        return `kr${u}${n}`;
      case "PLN":
        let p = Number(e.price).toLocaleString("pl-PL", {
          minimumFractionDigits: 2,
        });
        return `${p}\u00a0z\u0142${n}`;
      case "SGD":
        return `S\u0024${e.price}${n}`;
      case "ZAR":
        return `R${e.price}${n}`;
      case "TRY":
        let h = Number(e.price).toLocaleString("tr-TR", {
          minimumFractionDigits: 2,
        });
        return `\u20ba${h}${n}`;
    }
    return `${e.currency} ${e.price}${n}`;
  };
!(function (e) {
  (e.ERRORS = "errors"),
    (e.TRACKS = "tracks"),
    (e.GLITCHES = "glitches"),
    (e.VERSION = "version"),
    (e.UNCLEAR = "unclear"),
    (e.OTHER = "other");
})(W || (W = {}));
let tb = new Map([
  [W.ERRORS, "It introduced new mistakes in the tab"],
  [W.TRACKS, "It removed some instruments"],
  [W.GLITCHES, "It has problems with audio/display"],
  [W.VERSION, "I've got used to a previous revision"],
  [W.UNCLEAR, "It has unclear description of changes"],
  [W.OTHER, "Other reasons"],
]);
function tw(e) {
  return e;
}
class tS extends Error {
  constructor(e, t, ...n) {
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, tS),
      (this.name = "ValidationError"),
      (this.reasons = e),
      (this.message = t || "Form validation failed.");
  }
}
class tx extends tS {
  constructor(e, t, ...n) {
    super(e, t, ...n),
      Error.captureStackTrace && Error.captureStackTrace(this, tx),
      (this.name = "ValidationWarning");
  }
}
class tk extends Error {
  constructor(...e) {
    super(...e),
      Error.captureStackTrace && Error.captureStackTrace(this, tk),
      (this.name = "FraudError"),
      (this.message = "Email verification failed.");
  }
}
class tC extends Error {
  constructor(e, ...t) {
    super(...t),
      Error.captureStackTrace && Error.captureStackTrace(this, tk),
      (this.name = "RestrainError"),
      (this.action = e),
      (this.message = "Your actions appear suspicious.");
  }
}
class tT extends Error {
  constructor(...e) {
    super(...e),
      Error.captureStackTrace && Error.captureStackTrace(this, tT),
      (this.name = "FetchError"),
      (this.message = "Network error occurred. Please try again later.");
  }
}
class tE extends Error {
  constructor(e, t, ...n) {
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, tE),
      (this.name = "NetworkError"),
      (this.status = e),
      (this.message = `Network error occurred (${e}). Please try again later.`),
      "undefined" != typeof navigator &&
        (this.onLine = navigator && navigator.onLine);
  }
}
let t_ = 6,
  tP = 20;
async function tI(e, t, n) {
  let i =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { Accept: "application/json" },
    r = 0,
    a = "",
    s = { headers: i, signal: n };
  for (let t = 0; t < 6 && 404 !== r; t++) {
    try {
      if (n.aborted) return;
      let o = await fetch(e(t), s);
      if (n.aborted) return;
      if (o.ok) {
        let e;
        return (
          (e =
            "application/json" === i.Accept
              ? o.json()
              : "text/plain" === i.Accept
              ? o.text()
              : o.arrayBuffer()),
          await e
        );
      }
      (r = o.status),
        (a = 404 === o.status ? "Not Found" : o.statusText || "Network Error");
    } catch (e) {
      if (n.aborted || "AbortError" === e.name) return;
      console.error(e), (r = 0), (a = e.message || "Network Error");
    }
    await new Promise((e) => setTimeout(e, 20 * t));
  }
  throw new tE(r, a);
}
let tL = "data",
  tN = "revisions",
  tA = 1,
  tM = () => {
    if ("indexedDB" in window)
      try {
        let t = window.indexedDB.open(tL, 1);
        (t.onupgradeneeded = () => {
          try {
            let e = t.result;
            e &&
              ((e.onerror = (e) => {
                console.error(t.error), e.preventDefault();
              }),
              e.createObjectStore(tN));
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
tM();
let tB = (t, n) =>
  new Promise((i, r) => {
    try {
      let a = e.transaction(tN, t);
      (a.oncomplete = () => i()),
        (a.onerror = () => r(a.error)),
        n(a.objectStore(tN));
    } catch (e) {
      try {
        window.indexedDB.deleteDatabase(tL);
      } catch (e) {}
      r(e);
    }
  });
async function tD(t) {
  if (!e) return tM(), null;
  try {
    let e = null;
    return (
      await Promise.race([
        tB("readonly", (n) => (e = n.get(t))),
        new Promise((e) => setTimeout(e, 100)),
      ]),
      e && e.result
    );
  } catch (e) {
    return console.error(e), null;
  }
}
async function tO(t, n) {
  if (!e) return tM(), null;
  try {
    await Promise.race([
      tB("readwrite", (e) => e.put(n, t)),
      new Promise((e) => setTimeout(e, 200)),
    ]);
  } catch (e) {
    return console.error(e), null;
  }
}
function tR(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
  "requestIdleCallback" in window
    ? window.requestIdleCallback(e, { timeout: t })
    : setTimeout(e, 0);
}
let tz = (e) => new Promise((t) => setTimeout(t, e));
function t$(e) {
  e.name = e.name.replace(/╨ö╨╛╤Ç╨╛╨╢╨║╨░/g, "Track");
}
function tF(e) {
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
class tV {
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
class tU {
  constructor() {
    this.signal = new tV();
  }
  abort() {
    this.signal.aborted = !0;
  }
}
Object.defineProperty(tU, "name", { value: "AbortController" }),
  Object.defineProperty(tV, "name", { value: "AbortSignal" });
var tH = "undefined" != typeof AbortController ? AbortController : tU;
let tj = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  tG = [43, 38, 33, 28],
  tW = [43, 38, 33, 26],
  tq = [43, 38, 33, 28, 23],
  tX = [48, 43, 38, 33, 28, 23],
  tY = [64, 59, 55, 50, 45, 40],
  tK = [64, 59, 55, 50, 45, 38],
  tJ = [64, 59, 55, 50, 45, 40, 35],
  tZ = {
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
function tQ(e, t) {
  return e.map((e) => e + t);
}
function t1(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return e.map((e) => tj[e % 12] + (t ? Math.floor(e / 12) - 1 : ""));
}
function t0(e) {
  return e.map((e) => {
    let t = +e.slice(-1),
      n = e.substring(0, e.length - 1);
    return tj.indexOf(n) + (t + 1) * 12;
  });
}
function t2(e, t) {
  let n = t5(e, t);
  if (n) {
    let e = n[0] - t[0];
    for (let i = 0; i < n.length; i++) if (t[i] + e !== n[i]) return;
    return { tuningName: t4(n), pitch: e, standard: n };
  }
}
function t5(e, t) {
  if (eP(e)) {
    if (6 === t.length) return t[3] === t[5] + 12 ? tK : tY;
    if (7 === t.length) return tJ;
  } else if (eI(e)) {
    if (4 === t.length) return t[1] === t[3] + 12 ? tW : tG;
    if (5 === t.length) return tq;
    if (6 === t.length) return tX;
  }
  return t;
}
function t4(e) {
  let t = t1(e).reverse().join(" "),
    n = t1(e, !1).reverse().join(" ");
  if (e.length in tZ && t in tZ[e.length]) return tZ[e.length][t];
  let i = n.split(" ");
  return i.map((e, t) => (t === i.length - 1 ? e.toLowerCase() : e)).join(" ");
}
function t3(e) {
  return t1(e, !1).reverse().join(" ");
}
let t9 = "ALL INSTRUMENTS",
  t8 = "GUITAR",
  t6 = "BASS",
  t7 = "DRUMS",
  ne = "Any Difficulty",
  nt = "Beginner",
  nn = "Intermediate",
  ni = "Advanced",
  nr = "ALL TUNINGS",
  na = "VERY_EASY",
  ns = "EASY",
  no = "BELOW_INTERMEDIATE",
  nl = "INTERMEDIATE",
  nc = "UPPER_INTERMEDIATE",
  nd = "HARD",
  nu = "VERY_HARD",
  np = "INSANE",
  nh = {
    [na]: "Beginner. Tier 1",
    [ns]: "Beginner. Tier 2",
    [no]: "Intermediate. Tier 1",
    [nl]: "Intermediate. Tier 2",
    [nc]: "Intermediate. Tier 3",
    [nd]: "Advanced. Tier 1",
    [nu]: "Advanced. Tier 2",
    [np]: "Advanced. Tier 3",
  },
  nf = {
    [na]: 1,
    [ns]: 2,
    [no]: 3,
    [nl]: 4,
    [nc]: 5,
    [nd]: 6,
    [nu]: 7,
    [np]: 8,
  };
function ng(e) {
  return nf[e] || 0;
}
function nm(e) {
  return nh[e] || "";
}
function ny(e, t) {
  let n = nf[e] || 0,
    i = nf[t] || 0;
  return n === i ? 0 : n > i ? 1 : -1;
}
let nv = [t9, t8, t6, t7],
  nb = [ne, nt, nn, ni],
  nw = { instrument: t9, difficulty: ne, tunings: {} },
  nS = [
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
  nx = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function nk(e) {
  try {
    let t = e.split(" ");
    for (let e = 0; e < t.length; e++)
      0 !== e && e !== t.length - 1 && nS.includes(t[e].toLowerCase())
        ? (t[e] = t[e].toLowerCase())
        : (t[e] = nx(t[e]));
    return t.join(" ");
  } catch {
    return e;
  }
}
function nC(e) {
  try {
    let t = e.split(" ");
    for (let e = 0; e < t.length; e++)
      0 !== e &&
        e !== t.length - 1 &&
        nS.includes(t[e].toLowerCase()) &&
        (t[e] = t[e].toLowerCase());
    return t.join(" ");
  } catch {
    return e;
  }
}
let nT = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
function nE(e) {
  let t = [];
  function n(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      r = arguments.length > 3 ? arguments[3] : void 0;
    0 !== i && (n = tQ(n, i)), (r = r || t9);
    let a = t1(n).join(","),
      s = `${r}:${a}`,
      o = t3(n);
    t.push([`${e} (${o})`, s]);
  }
  function i() {
    n("Standard 6-string", tY, 0, t8),
      n("Standard 7-string", tJ, 0, t8),
      n("Drop D", tK, 0, t8),
      n("Drop C#", tK, -1, t8),
      n("Drop C", tK, -2, t8),
      n("Drop B", tK, -3, t8),
      n("Drop A#", tK, -4, t8),
      n("Drop A", tK, -5, t8),
      n("Drop G#", tK, -6, t8),
      n("Drop G", tK, -7, t8),
      n("Drop F#", tK, -8, t8),
      n("Drop F", tK, -9, t8);
  }
  if ((t.push([nT(nr), nr]), e === t6)) {
    n("Standard 4-string", tG, 0, t6),
      n("Standard 5-string", tq, 0, t6),
      n("Standard 6-string", tX, 0, t6),
      n("Drop D", tW, 0, t6),
      n("Drop C#", tW, -1, t6),
      n("Drop C", tW, -2, t6),
      n("Drop B", tW, -3, t6),
      n("Drop A#", tW, -4, t6),
      n("Drop A", tW, -5, t6);
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tG, -e, t6);
  } else if (e === t8) {
    i();
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tY, -e, t8);
  } else if (e === t9) {
    i();
    for (let e = 1; e <= 7; e++) n(`${e} st down`, tY, -e, t8);
    n("Bass: 4-string", tG, 0, t6),
      n("Bass: 5-string", tq, 0, t6),
      n("Bass: 6-string", tX, 0, t6),
      n("Bass: Drop D", tW, 0, t6),
      n("Bass: Drop C#", tW, -1, t6),
      n("Bass: Drop C", tW, -2, t6),
      n("Bass: Drop B", tW, -3, t6),
      n("Bass: Drop A#", tW, -4, t6),
      n("Bass: Drop A", tW, -5, t6);
  }
  return t;
}
function n_(e) {
  let t = e.split(":");
  return [t[0], t0(t[1].split(",")).join(",")];
}
function nP(e, t) {
  if (t === nr) return e;
  let [n, i] = n_(t);
  return e.filter((e) =>
    (function (e) {
      let t = e.tracks;
      if (t)
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (
            void 0 !== r.tuning &&
            r.tuning.join(",") === i &&
            ((n === t6 && eI(r.instrumentId)) ||
              (n === t8 && eP(r.instrumentId)))
          )
            return !0;
        }
      return !1;
    })(e)
  );
}
function nI(e, t) {
  function n(e, t) {
    let n = e.tracks;
    if (n)
      for (let e = 0; e < n.length; e++) {
        let i = n[e];
        if (t(i.instrumentId)) return !0;
      }
    return !1;
  }
  return e.filter((e) => {
    if (t === t6) return n(e, eI);
    if (t === t7) return n(e, e_);
    if (t === t8) return n(e, eP);
    if (t === t9) return !0;
    throw Error(`Invalid instrument filter value (${t})`);
  });
}
function nL(e, t) {
  return e
    ? t === ne
      ? e.slice()
      : e.slice().filter((e) => {
          let n = e.difficulty;
          if (!n) return !1;
          if (t === nt) return 0 >= ny(n, ns);
          if (t === nn) {
            let e = ny(n, no) >= 0,
              t = 0 > ny(n, nd);
            return e && t;
          }
          return t === ni && ny(n, nd) >= 0;
        })
    : void 0;
}
function nN(e, t) {
  return "none" !== t
    ? e.slice().sort((e, n) => {
        let i = e.difficulty,
          r = n.difficulty,
          a = "asc" === t ? ny(i, r) : ny(r, i);
        return 0 === a ? nO(n, e) : a;
      })
    : e;
}
function nA(e, t, n) {
  return nN(nL(e, n), t);
}
function nM(e, t) {
  return { ...e, difficulty: t };
}
function nB(e, t) {
  return { ...e, instrument: t };
}
function nD(e, t, n) {
  let i = { ...e, tunings: { ...e.tunings } };
  return (i.tunings[t] = n), i;
}
function nO(e, t) {
  let n = nR(e),
    i = nR(t);
  return n < i ? -1 : n > i ? 1 : 0;
}
function nR(e) {
  return e.tracks && 0 !== e.tracks.length ? e.tracks[e.defaultTrack].views : 0;
}
function nz(e) {
  let t = e.tunings[e.instrument];
  return (t && t !== nr) || e.instrument !== t9 || e.difficulty !== ne;
}
function n$(e) {
  return e !== t9 && e !== t8;
}
function nF(e) {
  return e === t7;
}
function nV(e) {
  let t = e.tunings[e.instrument];
  return {
    difficulty: e.difficulty !== ne ? e.difficulty : null,
    instrument: e.instrument !== t9 ? e.instrument : null,
    tuning: t && t !== nr ? n_(t)[1] : null,
  };
}
function nU(e) {
  return e_(e) ? e_ : eI(e) ? eI : eP;
}
function nH(e) {
  return e_(e) ? 1024 : eI(e) ? 32 : 24;
}
function nj(e, t) {
  let n = nU(t);
  return (
    e &&
    e.map((e) => {
      if (e.tracks) {
        let t = e.tracks.reduce(
          (e, t, i, r) =>
            n(t.instrumentId) && (-1 === e || t.views > r[e].views) ? i : e,
          -1
        );
        return -1 !== t ? { ...e, defaultTrack: t } : e;
      }
      return e;
    })
  );
}
function nG(e, t) {
  if (e.difficulty !== t.difficulty && e.instrument !== t.instrument) return !1;
  let n = e.tunings[e.instrument],
    i = t.tunings[t.instrument];
  return (!n && !i) || n === i;
}
let nW = ["dqsljvtekg760", "d34shlm8p2ums2", "d3cqchs6g3b5ew"],
  nq = ["d3rrfvx08uyjp1", "dodkcbujl0ebx", "dj1usja78sinh"];
function nX(e) {
  let t = e.name.toLowerCase(),
    n = e.instrument.toLowerCase(),
    i = e.name;
  ("untitled" === t || ("drumkit" === t && "drums" === n) || n.includes(t)) &&
    (i = ""),
    (e.title = e.instrument),
    i.length && (e.title = i + "\xa0-\xa0" + e.title);
}
function nY(e) {
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
async function nK(e, t, n) {
  let i = `/api/meta/${e}${t ? `/${t}` : ""}`,
    r = await tI(() => tw(i), "meta", n);
  if (n.aborted || !r) return null;
  if (r.tracks) {
    let e = 0;
    for (let t of r.tracks) {
      t$(t), nX(t), (t.partId = e);
      let { instrumentId: n } = t;
      e_(n)
        ? (t.isDrums = !0)
        : eI(n)
        ? (t.isBassGuitar = !0)
        : eP(n) && (t.isGuitar = !0),
        e++;
    }
    nY(r.tracks);
  }
  return r.title && (r.title = nC(r.title)), r;
}
async function nJ(e, t, n, i, r) {
  let a = `part_${t}_${n}_${i || ""}`,
    s = await tD(a);
  if (s) return s;
  let o = (r) =>
      i
        ? `https://${nW[r % nW.length]}.cloudfront.net/${e}/${t}/${i}/${n}.json`
        : `https://${nq[r % nq.length]}.cloudfront.net/part/${t}/${n}`,
    l = await tI(o, "part", r);
  return !l || r.aborted ? null : (await tO(a, l), l);
}
async function nZ(e, t, n, i) {
  let r = `lyrics_${t}_${n || ""}`,
    a = await tD(r);
  if (a) return a;
  let s = (i) =>
      n
        ? `https://${
            nW[i % nW.length]
          }.cloudfront.net/${e}/${t}/${n}/lyrics.json`
        : `https://${nq[i % nq.length]}.cloudfront.net/lyrics/${t}`,
    o = await tI(s, "lyrics", i);
  return !o || i.aborted ? null : (await tO(r, o), o);
}
async function nQ(e, t) {
  let n = `/api/meta/${e}/revisions`;
  return await tI(() => tw(n), "revisions", t);
}
async function n1(e, t) {
  let n = 0,
    i = null,
    r = new tH();
  for (; !i && n < 120; ) {
    try {
      i = await nK(e, t, r.signal);
    } catch (e) {
      console.error(e), await tz(2e3);
    }
    n++;
  }
  return i;
}
async function n0(e, t, n) {
  let i = `/api/meta/${e}/${t}/hash`,
    r = await tI(() => tw(i), "hash", n);
  return n.aborted || !r ? null : r;
}
async function n2(e) {
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
    throw new tT();
  }
}
async function n5(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  (i = i || { method: "post", credentials: "include" }),
    (n = {
      ...n,
      Accept: "application/json",
      "Content-Type": "application/json",
    });
  let r = JSON.stringify(t);
  try {
    return await fetch(e, { ...i, headers: n, body: r });
  } catch (e) {
    throw new tT();
  }
}
function n4(e) {
  if (!e.ok) throw new tE(e.status, e.statusText);
}
async function n3(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  t = t || (await e.json());
  let n = 412 === e.status && "reCAPTCHA Validation Failed" === t.message,
    i = 400 === e.status && "reCAPTCHA Validation Failed." === t.message;
  if (n || i)
    throw new tS(
      { __all__: "Please wait for reCAPTCHA logo to appear" },
      t.message
    );
}
async function n9(e, t) {
  if (429 === e.status) throw new tC(t);
}
async function n8(e, t) {
  if (403 === e.status) {
    let n = await e.json(),
      i = n.message || t;
    throw new tS({ __all__: i }, i);
  }
}
async function n6(e) {
  if (422 === e.status) {
    let t = await e.json();
    throw new tS(t.message || t.data || t);
  }
}
async function n7(e) {
  if (!e.ok) {
    let t = await e.json(),
      n = t.message || t,
      i = t.reasons || { __all__: n };
    if ((await n3(e, t), 422 === e.status && "You have incorrect email." === n))
      throw new tk();
    throw new tS(i, n);
  }
}
async function ie(e) {
  if ([400, 422, 423].includes(+e.status)) {
    let t = await e.json();
    if (423 === e.status) throw new tx(t.reasons);
    throw new tS(t.reasons || t);
  }
}
async function it(e) {
  if (!e.ok && 409 !== e.status)
    throw Error("Oops, something went wrong. Please try again later");
}
function ii(e) {
  let t = Object.keys(e)
    .filter((t) => e[t])
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
  return t.length ? `?${t}` : "";
}
let ir = (e) => (
  e.sort((e, t) => {
    let n = e.artist.localeCompare(t.artist);
    return 0 === n ? e.title.localeCompare(t.title) : n;
  }),
  e
);
function ia(e) {
  try {
    let t = e.tracks;
    if (!t || !t.length) return;
    let n = t.filter((e) => eP(e.instrumentId) && e.difficulty),
      i = -1;
    Number.isInteger(e.defaultTrack) && eP(t[e.defaultTrack].instrumentId)
      ? (e.difficulty = t[e.defaultTrack].difficulty)
      : (n.forEach((e, t) => {
          (-1 === i || (e.views || 0) > (n[i].views || 0)) && (i = t);
        }),
        -1 !== i && (e.difficulty = n[i].difficulty));
  } catch (e) {
    console.error(e);
  }
}
function is(e) {
  return (
    e.forEach(ia),
    e.forEach((e) => {
      e.title = nk(e.title);
    }),
    e
  );
}
function io(e) {
  switch (e) {
    case ni:
      return "2";
    case nn:
      return "1";
    default:
      return "0";
  }
}
function il(e, t, n, i) {
  let r = !t.instrument || t.instrument === t8,
    a = (t.instrument && t.instrument.toLowerCase()) || void 0,
    s = t.tuning || void 0,
    o = (r && t.difficulty && io(t.difficulty)) || void 0,
    l = { size: n.toString() };
  return (
    i && (l.from = i.toString()),
    e && (l.pattern = e),
    a && (l.inst = a),
    o && (l.difficulty = o),
    s && (l.tuning = s),
    ii(l)
  );
}
async function ic(e, t, n, i, r, a) {
  let s = il(t, n, r, a),
    o = await fetch(`${e}${s}`, { signal: i, credentials: "omit" });
  if (i && i.aborted) return [];
  n4(o);
  let l = await o.json(),
    c = is(l);
  return i && i.aborted ? [] : c;
}
function id(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 200,
    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    s = tw(n ? "/api/songs-db" : "/api/songs");
  return ic(s, e, t, i, r, a);
}
async function iu(e, t) {
  let n = `/api/artist/${e}`,
    i = await tI(() => tw(n), "artist", t);
  return t.aborted || !i ? null : i;
}
function ip(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500,
    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    s = tw(`/api/artist/${e}/songs`);
  return ic(s, t, n, i, r, a);
}
async function ih(e) {
  let t = tw("/api/favorites"),
    n = await fetch(t, { credentials: "include" });
  n4(n);
  let i = await n.json();
  return is(ir(i));
}
async function ig(e) {
  let t = tw(`/api/favorites/${e}`),
    n = await fetch(t, { method: "put", credentials: "include" });
  n4(n);
}
async function im(e) {
  let t = tw(`/api/favorites/${e}`),
    n = await fetch(t, { method: "delete", credentials: "include" });
  n4(n);
}
async function iy(e, t) {
  let n = tw(`/api/song/${e}`),
    i = await fetch(n, { method: "delete", credentials: "include", signal: t });
  return (
    (!t || !t.aborted) && (n4(i), await n6(i), await n8(i, "Forbidden"), !!i.ok)
  );
}
async function iv(e, t) {
  let n = tw(`/api/revision/${e}`),
    i = await fetch(n, { method: "delete", credentials: "include", signal: t });
  return (
    (!t || !t.aborted) && (n4(i), await n6(i), await n8(i, "Forbidden"), !!i.ok)
  );
}
var ib = "/static/media/artwork-96x96.92b76be0.png",
  iw = "/static/media/artwork-128x128.5723b2d4.png",
  iS = "/static/media/artwork-192x192.b95863ba.png",
  ix = "/static/media/artwork-256x256.e12ddf80.png",
  ik = "/static/media/artwork-384x384.0ba8004c.png",
  iC = "/static/media/artwork-512x512.a1dafd1a.png";
function iT(e, t) {
  return !e || ("AllCountries" !== e.restriction && e.restriction !== t);
}
function iE(e, t) {
  if (!e.current) return !1;
  let n = tf.has(e.current, $.DEV) && tg(t, V.USE_ADMIN_TOOLS),
    i = tf.has(e.current, $.MASTER),
    r = tf.has(e.current, $.V1);
  return i || r || n;
}
function i_(e) {
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
function iP(e, t) {
  if (!e || !e.length) return 0;
  let n = eP;
  "bass" === t ? (n = eI) : "drum" === t && (n = e_);
  let i = e.filter((e) => n(e.instrumentId));
  i.length || (i = e);
  let r = i[0].partId,
    a = 0;
  for (let e of i) {
    let t = e.views || 0;
    t > a && ((r = e.partId), (a = t));
  }
  return r;
}
function iI(e, t) {
  let n = !1;
  if (t.isLoggedIn && e) {
    let { editors: i } = e,
      r = i && 1 === i.length && i[0] === t.profile.id,
      a = tg(t, V.MANAGE_SONGS);
    n = r || a;
  }
  return n;
}
function iL(e) {
  return { meta: { ...e.meta, allowedDeletion: iI(e.meta.current, e.user) } };
}
async function iN(e, t) {
  try {
    let n = new tH(),
      i = await iy(t.songId, n.signal);
    if (i) e("meta/deleteSong:done", t);
    else {
      let t = Error("Oops, something went wrong. Please try again later.");
      e("meta/deleteSong:error", t);
    }
    return n.abort.bind(n);
  } catch (t) {
    e("meta/deleteSong:error", t);
  }
}
async function iA(e, t) {
  try {
    let n = new tH(),
      i = await iv(t.revisionId, n.signal);
    if (i) e("meta/deleteRevision:done", t);
    else {
      let t = Error("Oops, something went wrong. Please try again later.");
      e("meta/deleteRevision:error", t);
    }
    return n.abort.bind(n);
  } catch (t) {
    e("meta/deleteRevision:error", t);
  }
}
async function iM(e, t, n, i, r) {
  let a = new tH();
  try {
    let s = e.get().meta,
      o = s.loading;
    o && o.ac.abort();
    let l = s.songId !== t,
      c = s.revisionId !== r;
    if (
      (await e.dispatch("meta/load:processing", {
        songId: t,
        partInstrument: n,
        partId: i,
        revisionId: r,
        songHasChanged: l,
        revisionHasChanged: c,
        ac: a,
      }),
      a.signal.aborted)
    )
      return;
    let d = e.get().meta.current;
    if (
      (l || c || !d || d.songId !== t || (r && d.revisionId !== r)) &&
      ((d = await nK(t, r, a.signal)), a.signal.aborted || !d)
    )
      return;
    if (null == i) i = iP(d.tracks, n);
    else if (N && d.tracks && !d.tracks[i]) {
      await e.dispatch("navigate", e7(d, r));
      return;
    }
    await e.dispatch("meta/load:done", {
      songId: t,
      partId: i,
      revisionId: r,
      current: d,
    });
  } catch (n) {
    if (a.signal.aborted) return;
    e.dispatch("meta/load:error", { songId: t, revisionId: r, error: n });
  }
}
let iB = (e) => {
    e.on("route/change", (t, n) => {
      let { routeContent: i } = n;
      if (i && "tab" === i.page) {
        let { songId: t, partId: n, revisionId: r, partInstrument: a } = i;
        iM(e, t, a, n, r);
      }
    }),
      e.on("meta/load:processing", (e, t) => {
        let { songId: n, revisionId: i, ac: r } = t;
        return {
          meta: { ...e.meta, loading: { songId: n, revisionId: i, ac: r } },
        };
      }),
      e.on("meta/load:done", (e, t) => {
        let { songId: n, revisionId: i, partId: r, current: a } = t;
        return {
          meta: {
            ...e.meta,
            current: a,
            allowedDeletion: iI(a, e.user),
            allowedByLicense: iT(a, e.device.country),
            songId: n,
            revisionId: i,
            partId: r,
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
                { src: ib, sizes: "96x96", type: "image/png" },
                { src: iw, sizes: "128x128", type: "image/png" },
                { src: iS, sizes: "192x192", type: "image/png" },
                { src: ix, sizes: "256x256", type: "image/png" },
                { src: ik, sizes: "384x384", type: "image/png" },
                { src: iC, sizes: "512x512", type: "image/png" },
              ],
            }));
        } catch (e) {
          console.error(e);
        }
      }),
      e.on("meta/load:error", (e, t) => {
        let { songId: n, revisionId: i, error: r } = t;
        return {
          meta: {
            ...e.meta,
            current: null,
            allowedByLicense: !0,
            songId: n,
            revisionId: i,
            partId: null,
            loading: null,
            isFailed: !0,
            isNetworkFailed: r instanceof tE && 0 === r.status,
            isNotFound:
              r instanceof tE && (404 === r.status || 400 === r.status),
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
        (t, n) => (iN(e.dispatch, n), { meta: { ...t.meta, deleting: !0 } })
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
      e.on("meta/checkAllowedDeletion", iL);
  },
  iD = 12,
  iO = 13,
  iR = 25,
  iz = 18,
  i$ = 5,
  iF = 12,
  iV = 8,
  iU = 12,
  iH = 5,
  ij = 4,
  iG = 12,
  iW = iD + 10,
  iq = iD,
  iX = 4,
  iY = 2,
  iK = 2,
  iJ = 0,
  iZ = 0,
  iQ = -5,
  i1 = 4,
  i0 = 12,
  i2 = -3;
function i5(e) {
  return -1 * Math.floor(e.width / 2);
}
function i4(e, t, n) {
  let i = i5(t),
    r = e.layout.absoluteX + i,
    a = r + t.width,
    s = 0;
  return n >= r && (s = n - r + 1), { x1: r, x2: a, diff: s };
}
function i3(e) {
  let t = e.layout.absoluteX - 6;
  return { x1: t, x2: t + 12 };
}
function i9(e) {
  let t = e.layout.absoluteX - 5;
  return { x1: t, x2: t + 10 };
}
function i8(e) {
  let t = e.layout.absoluteX - 5;
  return { x1: t, x2: t + 13 };
}
function i6(e, t) {
  let n = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
    i = e.layout.absoluteX + n,
    r = i + t.width;
  return { x1: i, x2: r };
}
function i7(e, t) {
  let n = t.width,
    i = e.layout.absoluteX - Math.floor(n / 2);
  return { x1: i, x2: i + n };
}
function re(e, t) {
  return (e.x1 <= t.x1 && t.x1 < e.x2) || (t.x1 <= e.x1 && e.x1 < t.x2);
}
let rt = ["staccato", "accentuated", "heavyAccentuated"],
  rn = {
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
  ri = {
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
  rr = 22;
class ra {
  constructor() {
    (this.levels = new Map()), (this.height = 0);
  }
  _getLevel(e) {
    let t = this.levels.get(e);
    return t || ((t = []), this.levels.set(e, t)), t;
  }
  acquireLayer(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = ri[e];
    return this.acquireLayerWithHeight(e, i, t, n);
  }
  acquireLayerWithHeight(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      r = rn[e],
      a = {
        effect: e,
        voice: i,
        visible: !0,
        x1: n.x1,
        x2: n.x2,
        height: t,
        y: 0,
        diff: n.diff,
      },
      s = this._getLevel(r);
    if (s.length && rt.includes(a.effect))
      for (let e of s)
        e.x1 === a.x1 &&
          e.x2 === a.x2 &&
          e.effect === a.effect &&
          ((e.voice = 0), (a.visible = !1));
    return s.push(a), a;
  }
  _fitLayer(e, t, n, i) {
    let r = e,
      a = "beatLyrics" === t.effect;
    if (n > 0 && !a)
      for (let e of i) re(e, t) && (r = Math.max(r, e.y + e.height));
    (t.y = r), (this.height = Math.max(this.height, t.y + t.height)), i.push(t);
  }
  shake() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22,
      t = [];
    this.height = e;
    let n = Array.from(this.levels.keys()).sort((e, t) => e - t);
    for (let i of n) {
      let n = this.levels.get(i) || [];
      for (let r of n) r.visible && this._fitLayer(e, r, i, t);
    }
  }
}
class rs {
  constructor(e, t) {
    (this.layers = new ra()),
      (this.bottomLayers = new ra()),
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
function ro(e) {
  return e.y + e.layers.height;
}
function rl(e) {
  return e.height - 2 * iU + 2 * iH;
}
class rc {
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
function rd(e) {
  return ro(e.measureLayout.lineLayout);
}
function ru(e) {
  return e.measureLayout.lineLayout.maxX;
}
function rp(e) {
  return e.measureLayout.lineLayout.minX;
}
function rh(e) {
  return e.occurrences[0];
}
function rf(e) {
  return e.occurrences[e.occurrences.length - 1];
}
function rg(e) {
  return e.occurrences[0];
}
function rm(e) {
  return e.occurrences[0] + e.duration;
}
function ry(e) {
  return e.occurrences[e.occurrences.length - 1] + e.duration;
}
function rv(e, t) {
  return (
    e.layout.measureLayout.lineLayout !== t.layout.measureLayout.lineLayout
  );
}
function rb(e, t) {
  return e.layout.measureLayout !== t.layout.measureLayout;
}
function rw(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (e === t && !n) return 0;
  let i = t.layout.x;
  if (n) {
    let e = t.nextBeat;
    e && ((i = e.layout.x), rb(t, e) && (i += t.layout.measureLayout.width));
  }
  let r = e.layout.measureLayout.x + i - e.layout.absoluteX,
    a = t.layout.measureLayout,
    s = e.layout.measureLayout,
    o = e;
  for (; o && s !== a; ) {
    let e = o.layout.measureLayout;
    s !== e && ((r += s.width), (s = e)), (o = o.nextBeat);
  }
  return r;
}
function rS(e) {
  let t = rE(e).beat,
    n = t.nextBeat ? t.nextBeat : t;
  return rv(rT(e).beat, n);
}
function rx(e) {
  return rv(rT(e).beat, rE(e).beat);
}
class rk {
  constructor(e) {
    (this.refs = [e]), (this.keep = !0), (this.layer = null);
  }
}
function rC(e, t) {
  e.refs.push(t);
}
function rT(e) {
  return e.refs[0];
}
function rE(e) {
  return e.refs[e.refs.length - 1];
}
let r_ = { family: "Arial", size: 13, style: "normal" },
  rP = " ",
  rI = 3.6118,
  rL = "ΓÇª",
  rN = 13,
  rA = (e) =>
    function (t, n, i) {
      let r =
          !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        a = t.split(" "),
        s = a[0],
        o = e(s, r_),
        l = 1;
      for (; l < a.length - 1; l++) {
        let t = e(a[l], r_);
        if (o + 3.6118 + t > i) break;
        (s += " " + a[l]), (o += 3.6118 + t);
      }
      let c = r ? "ΓÇª" : "",
        d = r ? 13 : 0;
      s += c;
      let u = c + a.slice(l).join(" ");
      return {
        phrase: { text: s, width: o + d, layer: null },
        rest: { text: u, width: n - o + d, layer: null },
      };
    },
  rM = new Map();
function rB(e, t, n) {
  let i = rM.get(n.family);
  i || ((i = new Map()), rM.set(n.family, i));
  let r = i.get(n.style);
  r || ((r = new Map()), i.set(n.style, r));
  let a = r.get(n.size);
  a || ((a = new Map()), r.set(n.size, a));
  let s = a.get(t);
  return void 0 !== s || ((s = e(t, n)), a.set(t, s)), s;
}
let rD = (e) =>
  function (t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r_;
    return t && t.length ? rB(e, t, n) : 0;
  };
class rO {
  static textWidth;
  static fitTextToAvailableWidth;
}
let rR = null;
function rz(e, t) {
  let n = !0;
  ("undefined" == typeof document ||
    "function" != typeof document.createElement) &&
    (n = !1),
    (rR = n ? document.createElement("canvas") : null);
  let i = rR && "function" == typeof rR.getContext ? rR.getContext("2d") : null;
  if (!(n = !!i && "function" == typeof i.measureText) || !i) return 0;
  let r = {
      style: "normal",
      constraint: "normal",
      weight: "normal",
      size: r_.size,
      family: r_.family,
      align: "start",
      baseline: "alphabetic",
    },
    a = { ...r, ...t };
  return (
    (i.font = `${a.style} ${a.constraint} ${a.weight} ${a.size}px ${a.family}`),
    (i.textAlign = a.align),
    (i.textBaseline = a.baseline),
    +i.measureText(e).width.toFixed(4)
  );
}
let r$ = rD(rz),
  rF = rA(r$);
class rV extends rO {
  static textWidth(e, t) {
    return r$(e, t);
  }
  static fitTextToAvailableWidth(e, t, n, i) {
    return rF(e, t, n, i);
  }
}
let rU = { bpm: 100, type: 4, position: 0 };
function rH(e, t) {
  (e.x = Math.floor(e.originX * t)), (e.width = Math.floor(e.originWidth * t));
  let n = e.beatsLayouts,
    i = e.tempoLayouts,
    r = n[0];
  if (r) {
    for (let n of ((r.absoluteLoopLeftX = e.x), i))
      n.measureOffset = Math.floor(n.originMeasureOffset * t);
    for (let i of n) {
      if (
        ((i.x = Math.floor(
          ((i.measureLayout?.firstBeatXOffset || 0) + i.originX) * t
        )),
        (i.absoluteX = e.x + i.x),
        r !== i)
      ) {
        let e = i.x - r.x,
          t = e < 40 ? 0.5 : 0.8,
          n = Math.floor(e * t);
        (r.absoluteLoopRightX = r.absoluteX + n),
          (i.absoluteLoopLeftX = i.absoluteX - (e - n));
      }
      r = i;
    }
    r.absoluteLoopRightX = e.x + e.width;
  }
}
function rj(e, t) {
  let n = e.layouts[0],
    i = Math.floor((n.width - t.measureOffset) * t.tempo.position),
    r = n.x + t.measureOffset + i,
    a = r + t.width;
  return { x1: r, x2: a };
}
function rG(e, t) {
  let n = e.layouts[0].x,
    i = n + t.width;
  return { x1: n, x2: i };
}
function rW(e) {
  let t = e[0].x,
    n = t + e.reduce((e, t) => e + t.width, 0) - 6;
  return { x1: t, x2: n };
}
function rq(e) {
  let t = e.layouts[0].x;
  return { x1: t, x2: t + 90 };
}
function rX(e) {
  return e.layouts[0];
}
function rY(e) {
  return e.layouts[e.layouts.length - 1];
}
let rK = [
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
  rJ = {
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
  rZ = [
    3, 3, 1, -1, 1.5, 1.5, 1.5, 1.5, 4.5, 4.5, 1.5, 1.5, 1.5, 1.5, 3, -0.5, 3,
    5.5, 2, -0.5, 1, 1, -1, 0, 0, -1, 0.5, 2.5, 0, 0, -1, 4.5, 0, 2.5, 2.5, 4.5,
    4.5, 5, 5, 5.5, 0.5, 1, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1, 5.5, 5.5,
    -0.5, -0.5, -1, -1, -1, -1.5, 6, 6,
  ];
(rZ[64] = 1.5), (rZ[65] = -1), (rZ[66] = 0);
let rQ = [
  3, 3, 1, -1.5, 1.5, 1.5, 2, 2, 4, 3.5, 1.5, 1.5, 1.5, 1.5, 2.5, -0.5, 3, 4.5,
  2.5, -0.5, 2, 1, -1, 0.5, 0, -1.5, 0, 1.5, -1, 0, -0.5, 5, 1, 2, 3, 4.5, 4.5,
  5, 4, 4.5, 5, 5.5, 4.5, 3.5, 5, 5.5, -1.5, -1, 2.5, 1, 1.5, 4.5, 4.5, -0.5,
  -0.5, -1, -1, -1, -1.5, 5, 5,
];
(rQ[64] = 1.5), (rQ[65] = -0.5), (rQ[66] = 0), (rQ[75] = -0.5), (rQ[72] = 0.5);
let r1 = {
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
  r0 = [
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
function r2(e) {
  for (let t of rK) {
    let n = 0;
    for (let i of t) e.has(i.key) && n++;
    if (n > 1) for (let n of t) e.set(n.key, { ...n.value, fret: n.key });
  }
}
function r5(e, t) {
  return { string: t, name: r0[e - 27] || "*", fret: e };
}
function r4(e, t) {
  return (t ? rQ[e - 27] : rZ[e - 27]) || 0;
}
function r3(e) {
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
function r9(e, t, n) {
  if (!r3(e)) return 0;
  if (n && n.usedDrums) {
    let i = n.usedDrums.get(e.fret);
    if (i) {
      let e = i.name || "S",
        n = r1[e] || 0;
      return n + t;
    }
    return t;
  }
  let i = 4;
  return e.dead ? (i = 4) : e.fret >= 10 && (i = 8), e.ghost && (i += 5), i + t;
}
function r8(e, t) {
  let n = t.get(e.fret);
  return (n && n.string) || 0;
}
(r0[64] = "SR"),
  (r0[65] = "hH"),
  (r0[66] = "RE"),
  (r0[72] = "lcb"),
  (r0[75] = "hcb");
let r6 = 5,
  r7 = {
    letRing: an,
    palmMute: ai,
    harmonic: ar,
    vibrato: aa,
    wideVibrato: aa,
  };
function ae(e, t) {
  return { x1: t - 120, x2: t };
}
function at(e, t) {
  if (!e.start || !e.stop) throw Error("Wrong line effect state");
  let n = e.start.absoluteX - 20,
    i = e.stop.absoluteX + 10;
  return i - n < t && (i = n + t), { x1: n, x2: i };
}
function an(e) {
  return at(e, 40);
}
function ai(e) {
  return at(e, 29);
}
function ar(e) {
  return at(e, 38);
}
function aa(e) {
  let { start: t, stop: n } = e;
  if (!t || !n) throw Error("Wrong line effect state");
  let i = null,
    r = n.measureLayout,
    a = r.beatsLayouts,
    s = a.findIndex((e) => e === n);
  if (s > -1 && s < a.length - 1) i = a[s + 1];
  else {
    let e = r.lineLayout.measureLayouts,
      t = e.findIndex((e) => e === r);
    t > -1 && t < e.length - 1 && (i = e[t + 1].beatsLayouts[0]);
  }
  let o = t.absoluteX,
    l = i ? i.absoluteX : ru(n);
  return { x1: o, x2: l };
}
function as(e) {
  let t = rT(e).note.bend;
  if (!t) throw Error("Wrong state at bend note");
  return -1 * (iQ - t.tone / i1);
}
function ao() {
  return { detected: !1, start: null, stop: null, value: void 0 };
}
class al {
  constructor(e, t, n) {
    (this.index = e),
      (this.strings = t.strings),
      (this.effects = []),
      (this.spaces = Array(this.strings)),
      (this.rhythmLines = 0),
      (this.layout = new rs(n, this)),
      (this.hangingText = []),
      (this.capo = 0 === e && t.capo ? { capo: t.capo, layer: null } : void 0),
      (this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() });
  }
  joinLineEffect(e, t, n) {
    let i = e[t];
    i &&
      !n.detected &&
      ((n.detected = !0), (n.value = i), (n.start = e.layout)),
      i && i === n.value && (n.stop = e.layout),
      i
        ? n.value &&
          i !== n.value &&
          (this.finishLineEffect(t, n), this.joinLineEffect(e, t, n))
        : this.finishLineEffect(t, n);
  }
  finishLineEffect(e, t) {
    if (t.detected) {
      let n = this.layout.layers.acquireLayer(e, r7[e](t));
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
  distribute(e, t, n, i) {
    let r = [];
    this.layout.placement = i;
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
        ae(o.capo, this.layout.maxX)
      ));
    for (let e = 0; e < this.spaces.length; e++) this.spaces[e] = [];
    let l = ao(),
      c = ao(),
      d = ao(),
      u = ao(),
      p = ao(),
      h = new Map();
    for (let n of this.layout.measureLayouts) {
      let i = n.measure;
      rH(n, s);
      let o = rX(i) === n;
      if (
        ((this.rhythmLines = Math.max(this.rhythmLines, i.rhythmLines)),
        i.alternateEnding)
      ) {
        let e = h.get(i);
        e || ((e = []), h.set(i, e)), e.push(n);
      }
      if (o) {
        let e = i.markerWithLayer;
        e &&
          (e.layer = this.layout.layers.acquireLayer(
            "measureMarker",
            rG(i, e)
          ));
        let t = i.tripletFeelWithLayer;
        t && (t.layer = this.layout.layers.acquireLayer("tripletFeel", rq(i)));
      }
      let f = 0;
      for (let i of n.beatsLayouts)
        for (let n of i.beats)
          if (n.lyrics) {
            for (let e of n.lyrics)
              if (e) {
                let t = i4(n, e, f);
                (f = t.x2),
                  (e.layer = this.layout.bottomLayers.acquireLayer(
                    "beatLyrics",
                    t
                  ));
              }
          } else {
            let i = n.originalText;
            if (i) {
              let e = this.layout.maxX + 5 - n.layout.absoluteX,
                a = i;
              if (a.width > e) {
                let { phrase: n, rest: i } = rV.fitTextToAvailableWidth(
                  a.text,
                  a.width,
                  e,
                  t.hasHellip()
                );
                (a = n), r.push(i);
              }
              a &&
                ((a.layer = this.layout.layers.acquireLayer(
                  "beatText",
                  i6(n, a)
                )),
                (n.text = a));
            }
            let s = n.chord;
            s &&
              (s.layer = this.layout.layers.acquireLayer(
                "beatChord",
                i7(n, s)
              ));
            let o = n.tappingWithLayer;
            for (let i of (o &&
              (o.layer = this.layout.layers.acquireLayer(
                "beatTapping",
                i6(n, o)
              )),
            0 === n.voice &&
              (this.joinLineEffect(n, "letRing", l),
              this.joinLineEffect(n, "palmMute", c),
              this.joinLineEffect(n, "harmonic", d),
              this.joinLineEffect(n, "vibrato", u),
              this.joinLineEffect(n, "wideVibrato", p)),
            n.tuplet &&
              n.tuplet > 0 &&
              this.rhythmEffects.tuplet.set(n.voice, !0),
            n.tremolo && this.rhythmEffects.tremolo.set(n.voice, !0),
            (n.accentuated = void 0),
            (n.heavyAccentuated = void 0),
            (n.staccato = void 0),
            n.notes)) {
              if (!i.rest) {
                let t = a ? r8(i, a) : i.string;
                if (t % 1 == 0 && t >= 0 && t < e.strings) {
                  let r = r9(i, 4, e);
                  if (r) {
                    let e = n.layout.absoluteX - r,
                      i = r << 1,
                      a = this.spaces[t];
                    if (a) {
                      let t = a.length;
                      if (t) {
                        let s = a[t - 1];
                        s.x + s.w >= e
                          ? ((s.x = Math.min(s.x, e)),
                            (s.w = n.layout.absoluteX + r - s.x))
                          : a.push({ x: e, w: i });
                      } else a.push({ x: e, w: i });
                    }
                  }
                  a &&
                    (59 == i.fret || 93 == i.fret) &&
                    !n.hat &&
                    (n.hat = {
                      type: "ride",
                      layer: this.layout.layers.acquireLayer("beatHat", i8(n)),
                    }),
                    1 !== i.accentuated ||
                      n.accentuated ||
                      (n.accentuated = {
                        layer: this.layout.layers.acquireLayer(
                          "accentuated",
                          i3(n),
                          n.voice
                        ),
                      }),
                    2 !== i.accentuated ||
                      n.heavyAccentuated ||
                      (n.heavyAccentuated = {
                        layer: this.layout.layers.acquireLayer(
                          "heavyAccentuated",
                          i3(n),
                          n.voice
                        ),
                      }),
                    i.staccato &&
                      !n.staccato &&
                      (n.staccato = {
                        layer: this.layout.layers.acquireLayer(
                          "staccato",
                          i9(n),
                          n.voice
                        ),
                      });
                }
              }
              let r = i.bendStart;
              if (r) {
                let e = t.getBendCoordinates(r, i);
                (e.x1 += n.layout.absoluteX),
                  (e.x2 += n.layout.absoluteX),
                  (r.layer = this.layout.layers.acquireLayerWithHeight(
                    "noteBend",
                    as(r),
                    e
                  ));
              }
            }
          }
      for (let e of n.tempoLayouts)
        e.layer = this.layout.layers.acquireLayer("measureTempo", rj(i, e));
    }
    for (let [e, t] of h)
      t[0].alternateEndingWithLayer = {
        layer: this.layout.layers.acquireLayer("measureAlternateEnding", rW(t)),
        alternateEnding: e.alternateEnding,
      };
    this.finishLineEffect("letRing", l),
      this.finishLineEffect("palmMute", c),
      this.finishLineEffect("harmonic", d),
      this.finishLineEffect("vibrato", u),
      this.finishLineEffect("wideVibrato", p),
      this.layout.layers.shake();
    let f = this.rhythmLines * iR,
      g = this.rhythmEffects.tremolo.size * iF,
      m = this.rhythmEffects.tuplet.size * iV,
      y = this.strings * this.layout.intervalSize;
    return (
      this.layout.bottomLayers.shake(y + f + g + m),
      (this.layout.layers.height += iU),
      (this.layout.height =
        this.layout.layers.height + this.layout.bottomLayers.height + iU),
      (this.layout.maxY = this.layout.y + this.layout.height),
      r
    );
  }
}
class ac {
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
class ad {
  constructor(e) {
    (this.startIndex = e.index),
      (this.endIndex = 0),
      (this.alternateEndings = new Map());
  }
}
function au(e, t, n) {
  e.alternateEndings.set(t, n.index);
}
function ap(e, t) {
  return e.alternateEndings.get(t) || 0;
}
function ah(e) {
  let t = e.nextNoteOnString;
  return t && !t.tie ? 12 : 0;
}
class af {
  constructor(e) {
    this.width = e;
  }
  areBeatsInSameSlice(e, t) {
    return rd(e.layout) === rd(t.layout);
  }
  getBendCoordinates(e, t) {
    let n = rT(e).beat,
      i = rE(e),
      r = i.note,
      a = r.nextNoteOnString,
      s = !!a && !!a.bendStart && !!a.tie,
      o = s ? i.beat.nextBeat : i.beat;
    if (!o) throw Error("Broken constraint");
    let l = rw(n, t.beat),
      c = rw(n, n),
      d = rw(n, o, !s),
      u = d - l - ah(r);
    return { x1: c - l, x2: u };
  }
  bendsForNote(e) {
    let t = e.bendStart || e.bendPart || e.bendEnd;
    return t ? [t] : [];
  }
  hasHellip() {
    return !0;
  }
}
class ag extends af {
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
      i = n.x1,
      r = n.x2;
    if (rS(e)) {
      let t = rT(e).beat;
      r = ru(t.layout) - t.layout.absoluteX - 12;
    }
    return { x1: i, x2: r };
  }
  getTieSlurPathLength(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = this.areBeatsInSameSlice(e, t);
    return i
      ? t.layout.absoluteX - e.layout.absoluteX
      : n
      ? t.layout.absoluteX
      : ru(e.layout) - e.layout.absoluteX;
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
let am = 4,
  ay = 4,
  av = [4, 4];
function ab(e, t) {
  let n = e,
    i = t;
  for (; 0 !== n && 0 !== i; ) n >= i ? (n %= i) : (i %= n);
  return n + i;
}
let aw = 11531520,
  aS = (e) => e[0],
  ax = (e) => e[1],
  ak = (e) => (11531520 * aS(e)) / ax(e),
  aC = (e) => e / 11531520,
  aT = (e) => Math.floor(11531520 * e);
function aE(e, t) {
  return ((4 * t) / ax(e)) * aS(e);
}
function a_(e, t) {
  return (aE(av, t) / ax(e)) * aS(e);
}
function aP(e) {
  return 1024 === e;
}
function aI() {
  let e =
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
  if (e) {
    if (e.includes("below")) return "below";
    if (e.includes("above")) return "above";
  }
}
function aL() {
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
let aN = [
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
  aA = new Map();
aN.forEach((e) => aA.set(e.version, e)),
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
  })(Q || (Q = {})),
  (function (e) {
    (e.ERRORS = "errors"),
      (e.TRACKS = "tracks"),
      (e.GLITCHES = "glitches"),
      (e.VERSION = "version"),
      (e.UNCLEAR = "unclear"),
      (e.OTHER = "other");
  })(ee || (ee = {})),
  ee.ERRORS,
  ee.TRACKS,
  ee.GLITCHES,
  ee.VERSION,
  ee.UNCLEAR,
  ee.OTHER;
let aM = 25,
  aB = 15,
  aD = 35,
  aO = 20,
  aR = 25,
  az = 30,
  a$ = (e, t) => 1 / ((4 * e) / t);
class aF {
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
  measureBeatWidth(e, t, n, i, r, a) {
    let s = n ? a$(n, i) : aC(i),
      o = 70 * Math.log(s + 1) + 20;
    return r ? 0.2 * o : a && !e.measure.repeat ? o - Math.min(o >>> 1, 25) : o;
  }
  measureLeftMargin(e) {
    return e.measure.repeatStart ? 30 : 25;
  }
}
class aV {
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
    return iD;
  }
  signatureOffset(e) {
    return 35;
  }
  measureSpaceForSignature(e) {
    return e.hasSignature ? 35 : 0;
  }
  measureBeatWidth(e, t, n, i, r, a) {
    let s = n ? a$(n, i) : aC(i),
      o = 130 * Math.log(s + 1) + 20;
    return r ? 0.2 * o : o;
  }
  measureLeftMargin(e, t) {
    return 25;
  }
}
function aU(e, t) {
  let n = [...e.tempoLayoutsByTime.keys()].sort((e, t) => e - t);
  t.tempoLayouts = n.reduce((t, n) => {
    let i = e.tempoLayoutsByTime.get(n);
    return i && t.push(i), t;
  }, []);
}
function aH(e, t, n, i) {
  let r = t.beatsLayoutsByTime,
    a = new ac(t, n.layout);
  t.layouts = [a];
  let s = i.measureSpaceForSignature(t),
    o = [...r.keys()].sort((e, t) => e - t),
    l = 0,
    c = r.get(0),
    d = t.rest && !t.hasLyrics;
  if (c) {
    (a.firstBeatXOffset = i.measureLeftMargin(a, !0)),
      a.beatsLayouts.push(c),
      (c.measureLayout = a);
    for (let t = 1; t < o.length; t++) {
      let n = o[t],
        u = r.get(n);
      u &&
        ((c.originX = s),
        (s += i.measureBeatWidth(a, u, e, n - l, d, !1)),
        (l = n),
        (c = u),
        a.beatsLayouts.push(u),
        (u.measureLayout = a));
    }
    (c.originX = s),
      (s += i.measureBeatWidth(a, c, e, t.duration - l, d, !0)),
      aG(a, t, a.firstBeatXOffset + s);
  }
  aU(t, a);
}
function aj(e, t, n, i) {
  let r = t.beatsLayoutsByTime,
    a = new ac(t, n.layout);
  aU(t, a), (t.layouts = [a]);
  let s = !(
      (4 === t.signature[0] && 4 === t.signature[1]) ||
      (6 === t.signature[0] && 8 === t.signature[1])
    ),
    o = e ? a_(t.signature, e) : -1,
    l = i.measureSpaceForSignature(t),
    c = [...r.keys()].sort((e, t) => e - t),
    d = 0,
    u = r.get(0),
    p = t.rest && !t.hasLyrics;
  if (u) {
    (a.firstBeatXOffset = i.measureLeftMargin(a, !0)),
      a.beatsLayouts.push(u),
      (u.measureLayout = a);
    for (let h = 1; h < c.length; h++) {
      let f = c[h],
        g = r.get(f);
      if (g) {
        (u.originX = l),
          (l += i.measureBeatWidth(a, g, e, f - d, p, !1)),
          (d = f),
          (u = g);
        let r = s || f << 1 === o;
        r &&
          g.beats.filter((e) => !e.lyrics).every((e) => e.beamStart) &&
          ((a.originWidth = Math.ceil(a.firstBeatXOffset + l)),
          (a = new ac(t, n.layout)),
          t.layouts.push(a),
          (a.firstBeatXOffset = i.measureLeftMargin(a, !1)),
          (l = 0)),
          a.beatsLayouts.push(g),
          (g.measureLayout = a);
      }
    }
    (u.originX = l),
      (l += i.measureBeatWidth(a, u, e, t.duration - d, p, !0)),
      aG(a, t, a.firstBeatXOffset + l);
  }
}
function aG(e, t, n) {
  let i = t.markerWithLayer ? t.markerWithLayer.width : 0;
  e.originWidth = Math.ceil(Math.max(n, i));
}
function aW(e, t, n) {
  let i = new al(t.length, e, n);
  return t.push(i), i;
}
function aq(e, t) {
  e.layout.unscaledWidth += t;
}
function aX(e, t) {
  aG(t, e, t.originWidth - t.firstBeatXOffset), (t.firstBeatXOffset = 0);
}
function aY(e, t) {
  e.layout.measureLayouts.push(t),
    (t.lineLayout = e.layout),
    (t.originX = e.layout.unscaledWidth),
    (e.layout.unscaledWidth += t.originWidth);
}
function aK(e, t, n) {
  return t.originWidth + e.layout.unscaledWidth <= n;
}
function aJ(e, t, n) {
  let [i, r] = t;
  return (
    2 * Math.max(i.originWidth, r.originWidth) + e.layout.unscaledWidth <= n
  );
}
function aZ(e, t, n, i, r, a) {
  aj(e.tpqn, n, r, t);
  let s = !1;
  for (let t of n.layouts)
    !aK(r, t, a) &&
      r.layout.measureLayouts.length > 0 &&
      ((r = aW(e, i, a)), (s = !1)),
      s && aX(n, t),
      aY(r, t),
      (s = !0);
  return r;
}
function aQ(e, t, n) {
  let i = t.width,
    r = [],
    a = aW(e, r, i),
    s = !!e.tuning;
  if ((s && aq(a, n.tuningOffset), "conservative" === n.distribute))
    for (let t in e.measures) {
      let s = e.measures[t],
        o = e.measures[Number(t) - 1];
      aH(e.tpqn, s, a, n);
      let l = s.layouts[0],
        c = o?.layouts[0],
        d = "0" != t && ("-" === s.equality || o?.equality === "+"),
        u = "+" === s.equality,
        p = !u || !c || aJ(a, [c, l], i);
      if (
        (aK(a, l, i) && p && !d
          ? aY(a, l)
          : ((a.layout.measureLayouts.length > 0 || d) && (a = aW(e, r, i)),
            aK(a, l, i) ? aY(a, l) : (a = aZ(e, n, s, r, a, i))),
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
      aH(e.tpqn, t, a, n);
      let s = t.layouts[0];
      aK(a, s, i) ? aY(a, s) : (a = aZ(e, n, t, r, a, i));
    }
  else
    for (let t of e.measures) {
      aH(e.tpqn, t, a, n);
      let s = t.layouts[0];
      aK(a, s, i) || (a.layout.measureLayouts.length > 0 && (a = aW(e, r, i))),
        aY(a, s);
    }
  let o = [],
    l = 0,
    c = r.length,
    d = t.makeScaleStrategy(c);
  for (a of r)
    (a.hangingText = o),
      (a.layout.y = l),
      (o = a.distribute(e, t, d, n)),
      (l += a.layout.height);
  return { lines: r, height: l };
}
class a1 {
  constructor(e) {
    (this.source = e),
      (this.tempo = {
        bpm: e.bpm,
        type: e.type,
        position: e.position || 0,
        linear: e.linear || !1,
        visible: e.visible || !1,
        dotted: e.dotted || !1,
        text: e.text,
      }),
      (this.measureOffset = 0),
      (this.originMeasureOffset = 0),
      (this.layer = void 0);
  }
  get textWidth() {
    return this.tempo.text
      ? rV.textWidth(this.tempo.text, {
          size: 14,
          family: "Arial",
          style: "normal",
        }) + 15
      : 0;
  }
  get noteWidth() {
    let e = this.tempo.type >= 8 ? 11 : 7,
      t = this.tempo.dotted ? 4 : 0;
    return e + t + 5;
  }
  get bpmWidth() {
    return this.tempo.bpm >= 100 ? 44 : 35;
  }
  get width() {
    return this.textWidth + this.bpmWidth + this.noteWidth;
  }
}
let a0 = 1e5;
function a2(e) {
  let t = [],
    n = null,
    i = 0,
    r = !1,
    a = 0;
  for (let s = 0; s < e.length; ) {
    if (++a > 1e5) throw Error("Watchdog");
    let o = e[s];
    if (
      (t.push(o),
      o.reprise &&
        o.reprise.startIndex === o.index &&
        (!n || n.startIndex !== o.index) &&
        ((n = o.reprise), (i = 1)),
      n)
    ) {
      if (o.repeat && i < o.repeat) (s = n.startIndex), i++, (r = !1);
      else if (++s < e.length) {
        let t = e[s];
        if (t.alternateEnding) {
          let e = !1;
          for (let n of t.alternateEnding)
            if (n === i) {
              e = !0;
              break;
            }
          e
            ? (r = !0)
            : r
            ? ((s = n.startIndex), i++, (r = !1))
            : ((s = ap(n, i) || n.endIndex + 1), (r = !0));
        }
        s > n.endIndex && ((n = null), (i = 0));
      }
    } else s++;
  }
  return t;
}
function a5(e, t, n) {
  return (6e4 * e) / (t * n);
}
let a4 = 960;
function a3(e) {
  let t = e.bpm;
  return (
    8 === e.type && (t = e.bpm / 2),
    2 === e.type && (t = 2 * e.bpm),
    e.dotted && (t *= 1.5),
    { ...e, type: 4, bpm: Math.floor(t) }
  );
}
let a9 = (e) => (960 * (rU.bpm / rU.type)) / (e.bpm / e.type),
  a8 = (e) => ((e / 960) * 6e4) / rU.bpm,
  a6 = (e, t) => e * t * rU.type;
function a7(e, t) {
  let n = a2(t),
    i = new Map(),
    r = [],
    a = [],
    s = rU,
    o = 960,
    l = 960,
    c = 0,
    d = 0;
  for (let t of n) {
    let n = t.beatsLayoutsByTime,
      u = t.tempoLayoutsByTime,
      p = e ? aE(t.signature, e) : ak(t.signature),
      h = [...n.keys()].sort((e, t) => e - t),
      f = n.get(0),
      g = c,
      m = c,
      y = d;
    if (f) {
      let t = d - 2 * c;
      f.shifts.push(t), r.push(t), f.occurrences.push(c), i.set(c, f);
      let v = u.get(0);
      v &&
        ((s = v.tempo),
        a.push({ timestamp: c, tempo: s }),
        (o = Math.floor(a9(s))),
        (l = Math.floor(2 * a9(s))));
      for (let t = 1; t < h.length; t++) {
        let a = h[t],
          u = n.get(a);
        if (u) {
          if (a < p) {
            if (e) {
              let t = a5(a, e, a3(s).bpm);
              (c = m + t), (d = y + 2 * t);
            } else {
              let e = aC(a);
              (c = m + a8(a6(e, o))), (d = y + a8(a6(e, l)));
            }
            f.duration = c - g;
            let t = d - 2 * c;
            f.shifts.push(t),
              r.push(t),
              u.occurrences.push(c),
              i.set(c, u),
              (f = u),
              (g = c);
          } else u.occurrences.push(c);
        }
      }
    }
    if (e) {
      let t = a5(p, e, a3(s).bpm);
      (c = m + t), (d = y + 2 * t);
    } else {
      let e = aC(p);
      (c = m + a8(a6(e, o))), (d = y + a8(a6(e, l)));
    }
    f && (f.duration = c - g);
  }
  return {
    timeline: i,
    tempos: a,
    shifts: r,
    progression: n.map((e) => e.index + 1),
  };
}
function se(e, t) {
  let n = e.get(t);
  if (!n) throw Error("Broken timeline");
  return n;
}
function st(e, t) {
  return 2 * e + t;
}
function sn(e, t) {
  if (0 === t) return 0;
  let { timestamps: n } = e,
    i = n[n.length - 1];
  if (t <= 0) return st(t, e.shifts[0] || 0);
  if (t >= i) return st(t, e.shifts[n.length - 1] || 0);
  let r = 0,
    a = n.length,
    s = 0,
    o = 0;
  for (; a - r > 1; ) {
    s = Math.floor((r + a) / 2);
    let e = n[s];
    if (t < e) a = s;
    else if (t > e) r = s;
    else {
      o = s;
      break;
    }
  }
  return (o = r), st(t, e.shifts[o] || 0);
}
function si(e, t, n) {
  let { timeline: i, timestamps: r } = e,
    a = r[0],
    s = r[r.length - 1];
  if (t <= a) return se(i, a);
  if (t >= s) return se(i, s);
  let o = 0,
    l = r.length,
    c = 0;
  for (r[0]; l - o > 1; ) {
    c = Math.floor((o + l) / 2);
    let e = r[c];
    if (t < e) l = c;
    else if (t > e) o = c;
    else break;
  }
  return se(i, l - o > 1 ? r["left" === n ? c : c - 1] : r[o]);
}
function sr(e, t) {
  let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left",
    { timestamps: i } = e,
    r = i[0],
    a = i[i.length - 1];
  if (t <= r) return 0;
  if (t >= a) return i.length - 1;
  let s = 0,
    o = i.length,
    l = 0;
  for (; o - s > 1; ) {
    l = Math.floor((s + o) / 2);
    let e = i[l];
    if (t < e) o = l;
    else {
      if (!(t > e)) return l;
      s = l;
    }
  }
  return o - s > 1 ? ("left" === n ? l : l - 1) : s;
}
function sa(e, t) {
  if (!e)
    return (
      console.error("Broken or empty Part. Count In does not work."),
      { bpm: 0, signature: [0, 0] }
    );
  let n = si(e, t, "left"),
    i = so(e, t).bpm,
    r = n.measureLayout.measure.signature;
  return { bpm: i, signature: r };
}
function ss(e, t) {
  let n = si(e, t, "left"),
    i = n.measureLayout.beatsLayouts;
  return { loopStart: rg(i[0]), loopEnd: rm(i[i.length - 1]) };
}
function so(e, t) {
  let n = e.tempos[0];
  for (let i of e.tempos) {
    if (i.timestamp > t) break;
    n = i;
  }
  return n ? n.tempo : rU;
}
function sl(e, t, n, i, r) {
  let a = n.measureLayout.measure.reprise,
    s = i.measureLayout.measure.reprise,
    o = rh(n),
    l = rh(i),
    c = rm(i);
  a && (!s || a.startIndex !== s.startIndex) && (o = rf(n));
  let d = o,
    u = t;
  if (o > t || t >= c) {
    let n = si(e, t, "left"),
      i = rh(n),
      a = rf(n);
    u = o <= i && i < c ? i : o <= a && a < c ? a : "right" === r ? l : d;
  }
  return { cursor: u, loopStart: o, loopEnd: c };
}
function sc(e) {
  switch (e) {
    case "left":
      return 0.2;
    case "right":
      return 0.8;
    default:
      return 0.5;
  }
}
function sd(e, t, n) {
  let i = e.layout.measureLayouts[0];
  for (let n of e.layout.measureLayouts) {
    if (n.x > t) break;
    i = n;
  }
  let r = i.beatsLayouts,
    a = 0,
    s = r.length,
    o = 0,
    l = r[0];
  for (; s - a > 1; ) {
    l = r[(o = Math.floor((a + s) / 2))];
    let e = l.absoluteX;
    if (e < t) a = o;
    else if (e > t) s = o;
    else break;
  }
  if (s - a > 1) return l;
  {
    if (s === r.length) return r[a];
    let e = r[a],
      i = r[s],
      o = i.absoluteX - e.absoluteX,
      l = sc(n);
    return e.absoluteX + o * l > t ? e : i;
  }
}
function su(e, t, n) {
  let i = 0,
    r = e.length,
    a = e[0];
  for (; r - i > 1; ) {
    let n = Math.floor((i + r) / 2),
      s = e[n];
    if (t.y < s.layout.y) r = n;
    else if (t.y > s.layout.maxY) i = n;
    else {
      a = s;
      break;
    }
  }
  return sd(a, t.x, n);
}
function sp(e, t) {
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
let sh = (e) => (e & (e - 1)) == 0;
function sf(e, t) {
  let n;
  return (n =
    (e & (e - 1)) | (t & (t - 1)) ? (e * t) / ab(e, t) : Math.max(e, t)) <= 0 ||
    n >= 32768 ||
    n % 1 != 0
    ? e
    : n;
}
function sg(e) {
  let t = [],
    n = !1,
    i = !1,
    r = !1,
    a = !1;
  for (let s of e)
    for (let e of (s.tripletFeel && (n = !0), s.voices))
      if (!e.rest)
        for (let n of e.beats) {
          let { tuplet: e, duration: s, notes: o } = n;
          if ((e && !t.includes(e) && t.push(e), s && s.length)) {
            let e = ax(s);
            if (!sh(e) || e > 32768) continue;
            for (let n of (t.includes(e) || t.push(e), o))
              n.dead && (i = !0),
                (n.bend || n.slide) && (r = !0),
                n.tremolo && (a = !0);
          }
        }
  n && t.push(24, 48),
    i && t.push(128),
    r && t.push(60),
    a && t.push(8, 16, 32, 64);
  let s = t.reduce(sf, Math.max(4 * Math.max(...t), 32)) || 128;
  for (; s < 1e4; ) s *= 2;
  return Math.min(s, 32767);
}
function sm(e, t) {
  let n = isNaN(e.tpqn);
  t && n && (e.tpqn = t ? sg(e.measures) : null);
}
function sy(e, t) {
  if (
    (e.repeatStart && ((t.lastReprise = new ad(e)), (t.inReprise = !0)),
    e.alternateEnding)
  ) {
    if (t.lastReprise)
      for (let n of ((e.reprise = t.lastReprise), e.alternateEnding))
        au(t.lastReprise, n, e);
  } else t && t.inReprise && t.lastReprise && (e.reprise = t.lastReprise);
  if (e.repeat) {
    if (!t || !t.lastReprise) throw Error("Broken ending of reprise");
    (t.lastReprise.endIndex = e.index), (t.inReprise = !1);
  }
}
let sv = [4, 4];
function sb(e, t) {
  (e.hasSignature = !!e.signature),
    (e.signature = e.signature || t.signature || sv),
    e.hasSignature && (t.signature = e.signature);
}
function sw(e) {
  return e.hasSignature ? 50 : 15;
}
function sS(e, t, n) {
  t.tempoLayoutsByTime = new Map();
  let i = sw(t);
  for (let r of n.filter((e) => +e.measure == +t.index + 1)) {
    let n = e ? Math.floor(4 * e * r.position) : aT(r.position),
      a = t.tempoLayoutsByTime.get(n);
    a ||
      (((a = new a1(r)).measureOffset = i),
      (a.originMeasureOffset = i),
      t.tempoLayoutsByTime.set(n, a));
  }
}
function sx(e, t) {
  (e.index = t),
    (e.rest = e.rest || !1),
    (e.beats = (!e.rest && e.beats) || []),
    (e.hasSameRhythm = e.hasSameRhythm || !1),
    (e.lyrics = !1);
}
function sk(e, t) {
  let n =
    e.rest ||
    e.hasSameRhythm ||
    (1 === e.beats.length &&
      (1 === e.beats[0].duration[0] || 1 === e.beats[0].duration[1]));
  t.rhythmLines += n ? 0 : 1;
}
function sC(e, t, n, i) {
  (e.index = t),
    (e.measure = i),
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
function sT(e) {
  if (!e) return;
  let t = e.points[0],
    n = t.tone,
    i = [{ position: 0, tone: n }];
  for (let t of e.points)
    i[i.length - 1].tone !== t.tone &&
      (i.push({ position: 0, tone: t.tone }), (n = Math.max(n, t.tone)));
  return (
    1 === i.length && i.push({ position: 0, tone: n }),
    i.forEach((e, t) => {
      e.position = (60 * t) / (i.length - 1);
    }),
    { ...e, points: i }
  );
}
function sE(e, t, n, i) {
  (e.index = t),
    (e.beat = n),
    (e.string = e.string || 0),
    (e.fret = e.fret || 0),
    (e.bend = i ? sT(e.bend) : e.bend),
    (e.rightSlide = aL(e.slide)),
    (e.leftSlide = aI(e.slide)),
    (e.bogus = !1);
}
function s_(e, t) {
  if (0 === e.index) {
    for (let n = 0; n < t.length; n++)
      if (!t[n]) {
        let t = e.notes.length,
          i = { string: n, fret: 0 };
        sE(i, t, e, !1), (i.bogus = !0), (e.notes[t] = i);
      }
  }
}
function sP(e, t, n) {
  t.usedDrums && (e.string = r4(e.fret, n));
}
function sI(e, t) {
  t[e.string] = !0;
}
function sL(e) {
  let t = e.ties;
  return t || ((t = new Map()), (e.ties = t)), t;
}
function sN(e, t, n, i) {
  let r = sL(i),
    a = r.get(e.string);
  if (a) {
    if (e.tie)
      rC(a, { note: e, beat: t, measure: n }),
        (rT(a).note.tieStart = a),
        (e.tieEnd = a),
        r.set(e.string, new rk({ note: e, beat: t, measure: n }));
    else {
      let i = rT(a);
      (i.note = e), (i.beat = t), (i.measure = n);
    }
  } else r.set(e.string, new rk({ note: e, beat: t, measure: n }));
}
function sA(e) {
  let t = e.slides;
  return t || ((t = new Map()), (e.slides = t)), t;
}
function sM(e, t, n, i) {
  let r = sA(i),
    a = "legato" === e.rightSlide || "shift" === e.rightSlide,
    s = r.get(e.string);
  s &&
    !e.tie &&
    (rC(s, { note: e, beat: t, measure: n }),
    (rT(s).note.slideStart = s),
    (rE(s).note.slideEnd = s),
    r.delete(e.string)),
    a && r.set(e.string, new rk({ note: e, beat: t, measure: n }));
}
function sB(e) {
  let t = e.slurs;
  return t || ((t = new Map()), (e.slurs = t)), t;
}
function sD(e, t, n, i) {
  let r = sB(i),
    a = e.hp || "legato" === e.rightSlide,
    s = r.get(e.string);
  !s ||
    a ||
    e.tie ||
    (rC(s, { note: e, beat: t, measure: n }),
    (rT(s).note.slurStart = s),
    (rE(s).note.slurEnd = s),
    r.delete(e.string)),
    !s && a && r.set(e.string, new rk({ note: e, beat: t, measure: n }));
}
function sO(e) {
  let t = e.bends;
  return t || ((t = new Map()), (e.bends = t)), t;
}
function sR(e, t, n, i) {
  let r = sO(i),
    a = r.get(e.string);
  if (
    (!a && e.bend && e.tie && 0 === e.bend.points[0].tone && (e.ghost = !0), a)
  ) {
    !e.bend &&
      e.tie &&
      ((a.keep = !0), rC(a, { note: e, beat: t, measure: n }));
    let i = e.bend || (void 0 !== e.bend && !e.tie);
    if (i) {
      rT(a).note.bendStart = a;
      for (let e = 1; e < a.refs.length - 1; e++) a.refs[e].note.bendPart = a;
      (rE(a).note.bendEnd = a), r.delete(e.string);
    }
  }
  e.bend && r.set(e.string, new rk({ note: e, beat: t, measure: n }));
}
function sz(e) {
  let t = e.prevNoteOnString;
  return t || ((t = new Map()), (e.prevNoteOnString = t)), t;
}
function s$(e, t) {
  let n = sz(t),
    i = e.string,
    r = n.get(i);
  r && ((r.nextNoteOnString = e), (e.prevNoteOnString = r)), n.set(i, e);
}
function sF(e, t, n) {
  let i = sO(n);
  for (let [e, t] of i.entries())
    if (t.keep) t.keep = !1;
    else {
      rT(t).note.bendStart = t;
      for (let e = 1; e < t.refs.length - 1; e++) t.refs[e].note.bendPart = t;
      (rE(t).note.bendEnd = t), i.delete(e);
    }
}
function sV(e) {
  e.layout.usedRest = !0;
}
function sU(e, t) {
  t.rest || (e.layout.usedStrings |= 1 << t.string);
}
function sH(e, t) {
  aP(e.instrumentId) &&
    e.usedDrums &&
    e.usedDrums.set(t.fret, r5(t.fret, t.string));
}
function sj(e, t, n, i) {
  e.rest || e.bogus ? 0 === i && sV(t) : (sU(t, e), sH(n, e));
}
function sG(e) {
  let t = e.notes.find((e) => e.harmonic);
  e.harmonic = t ? t.harmonic : void 0;
}
function sW(e, t) {
  t.prevBeat && ((t.prevBeat.nextBeat = e), (e.prevBeat = t.prevBeat)),
    (t.prevBeat = e);
}
function sq(e, t) {
  aP(e.instrumentId) &&
    ((e.usedDrums = new Map()),
    t && ((e.strings = t ? 5 : 6), (e.isDrumStdOn = !0))),
    (e.voices = e.voices || 1),
    (e.withChords = !1);
}
function sX(e, t) {
  if (!t.tremolo && e.tremolo) {
    let n = Array.isArray(e.tremolo) ? e.tremolo[1] : null;
    t.tremolo = { voice: t.voice, type: 32 === n ? 3 : 16 === n ? 2 : 1 };
  }
}
function sY(e) {
  e.rest && (e.rhythmLines = 0);
}
function sK(e, t) {
  let n = e[t];
  return n || ((n = {}), (e[t] = n)), n;
}
function sJ(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      useStdDrumNotation: i = !1,
      useBendPointsMerge: r = !0,
      useGenericTimeline: a = !1,
      useBogusNotes: s = !0,
    } = n,
    o = e;
  sq(o, i), sm(o, a);
  let l = new al(0, o, 0),
    c = {},
    d = Array(o.voices);
  for (let e = 0; e < o.measures.length; e++) {
    let a = o.measures[e];
    sp(a, e, n),
      (a.layouts = [new ac(a, l.layout)]),
      sb(a, c),
      sS(o.tpqn, a, o.automations.tempo),
      sy(a, c);
    for (let e = 0; e < a.voices.length; e++) {
      let t = a.voices[e];
      if ((sx(t, e), 0 !== e && t.rest)) continue;
      let n = sK(d, e),
        l = 0;
      for (let c = 0; c < t.beats.length; c++) {
        let d = t.beats[c];
        sC(d, c, e, a);
        let u = a.beatsLayoutsByTime.get(l);
        u || ((u = new rc()), a.beatsLayoutsByTime.set(l, u)),
          (l += o.tpqn ? aE(d.duration, o.tpqn) : ak(d.duration)),
          (d.layout = u),
          u.beats.unshift(d),
          sW(d, n);
        let p = Array(o.strings);
        for (let e = 0; e < d.notes.length; e++) {
          let t = d.notes[e];
          sE(t, e, d, r), sP(t, o, i), sI(t, p), sX(t, d);
        }
        s && s_(d, p);
        for (let t = 0; t < d.notes.length; t++) {
          let i = d.notes[t];
          s$(i, n),
            sR(i, d, a, n),
            sM(i, d, a, n),
            sD(i, d, a, n),
            sN(i, d, a, n),
            sj(i, d, o, e);
        }
        sF(d, a, n), sG(d), !o.withChords && d.chord && (o.withChords = !0);
      }
      (a.duration = Math.max(a.duration, l)), sk(t, a);
    }
    if ((sY(a), t)) {
      let n = t[e];
      if (n) {
        let e = a.voices.length,
          t = { beats: [], hasSameRhythm: !0 };
        sx(t, e), (t.lyrics = !0);
        let i = 0,
          r = n.beats.length;
        for (let s = 0; s < r; s++) {
          let r = n.beats[s],
            l = a.beatsLayoutsByTime.get(i);
          l || ((l = new rc()), a.beatsLayoutsByTime.set(i, l));
          let c = { ...r };
          sC(c, s, e, a),
            (t.beats[s] = c),
            (c.layout = l),
            l.beats.unshift(c),
            (i += o.tpqn ? aE(c.duration, o.tpqn) : ak(c.duration));
        }
        r &&
          ((a.duration = Math.max(a.duration, i)),
          a.voices.unshift(t),
          (a.hasLyrics = !0));
      }
    }
  }
  o.usedDrums && !o.isDrumStdOn && r2(o.usedDrums);
  try {
    let e = a7(o.tpqn, o.measures);
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
let sZ =
    "(max-width: 479px) and (max-height: 899px) and (orientation: portrait)",
  sQ =
    "(max-height: 479px) and (max-width: 899px) and (orientation: landscape)",
  s1 = "(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)",
  s0 =
    "(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)",
  s2 = "(min-width: 1200px)",
  s5 =
    "(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)",
  s4 = () => window && !!window.matchMedia(sZ).matches,
  s3 = () =>
    window &&
    !!window.matchMedia(
      "(min-width: 480px) and (orientation: portrait), (min-height: 900px) and (orientation: portrait), (min-height: 480px) and (orientation: landscape), (min-width: 900px) and (orientation: landscape)"
    ).matches,
  s9 = () => {
    if (window) {
      if (
        window.matchMedia(sZ).matches ||
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
function s8() {
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
let s6 = () => {
    let e = s8();
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
  s7 = 30,
  oe = [112, 123, 116, 119, 121, 112, 113]
    .map((e) => String.fromCharCode(21 ^ e))
    .join("");
var ot = (e) => true;
let on = (e) => {
    function t(e, t, n) {
      let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 550,
        r = arguments.length > 4 ? arguments[4] : void 0,
        a = e;
      s3() && (a = a - 90 - 100);
      let s = a;
      if (ot(t)) {
        let e = Math.floor(88e3 / t.zoom);
        return [e, s / e];
      }
      let o = n ? i : 750;
      if (r && 1 !== r) {
        let e = s;
        s < o && (e = o);
        let t = Math.floor(e / r);
        return [t, r];
      }
      return s < o ? [o, s / o] : [s, 1];
    }
    function n(n, i, r, a, s, o, l, c, d, u, p) {
      try {
        let c = s4(),
          d = 550;
        c && (d = 320);
        let h = t(l, o, c, d, p),
          [f, g] = h,
          m = n.part.lines,
          y = `${i}-${r}-${a}-${s.source}`;
        if (m.lines && m.hash === y && m.width === f && m.scale === g) return;
        let v = m.lines,
          b = m.height,
          w = m.slicingMode;
        if (m.hash !== y || m.width !== f) {
          w = new ag(f - s7);
          let e = c ? new aF() : new aV(),
            t = aQ(s, w, e);
          (v = t.lines), (b = t.height);
        }
        let S = {
          lines: v,
          height: b,
          width: f,
          scale: g,
          print: ot(o),
          slicingMode: w,
          hash: y,
        };
        if (u && u.aborted) return;
        e.dispatch("part/load:done", {
          songId: i,
          partId: r,
          revisionId: a,
          current: s,
          lines: S,
        });
      } catch (t) {
        if (u && u.aborted) return;
        e.dispatch("part/load:error", {
          songId: i,
          partId: r,
          revisionId: a,
          error: t,
        });
      }
    }
    e.on("meta/load:done", async (t, n) => {
      let { partId: i, current: r } = n;
      if (!iT(r, t.device.country)) return;
      let a = r.songId,
        s = r.revisionId,
        o = new tH();
      try {
        let n = t.part.loading;
        if (n) {
          if (a === n.songId && i === n.partId && s === n.revisionId) return;
          n.ac.abort();
        }
        if (
          !t.part.isFailed &&
          t.part.current &&
          t.part.lines &&
          a === t.part.songId &&
          i === t.part.partId &&
          s === t.part.revisionId
        ) {
          e.dispatch("part/load:done", {
            songId: a,
            partId: i,
            revisionId: s,
            current: t.part.current,
            lines: t.part.lines,
          });
          return;
        }
        await e.dispatch("part/load:processing", {
          songId: a,
          partId: i,
          revisionId: s,
          ac: o,
        });
        let l = [nJ(a, s, i, r.image, o.signal)];
        (!r.image || r.lyrics) && l.push(nZ(a, s, r.image, o.signal));
        let [c, d] = await Promise.all(l);
        if (!c || o.signal.aborted) return;
        await e.dispatch("fingerings/loadedPart", {
          songId: a,
          partId: i,
          revisionId: s,
          rawPart: c,
        }),
          await e.dispatch("part/load:raw", {
            songId: a,
            partId: i,
            revisionId: s,
            rawPart: c,
            rawLyrics: d,
            signal: o.signal,
          });
      } catch (t) {
        if (o.signal.aborted) return;
        e.dispatch("part/load:error", {
          songId: a,
          partId: i,
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
                slicingMode: new ag(0),
              },
              scale: 1,
            },
          };
      }),
      e.on("meta/load:processing", (e, t) => {
        let { songId: n, partId: i, revisionId: r } = t,
          a = e.part.loading;
        if (
          a &&
          (n !== a.songId || (i && i !== a.partId) || r !== a.revisionId)
        )
          return a.ac.abort(), { part: { ...e.part, loading: null } };
      }),
      e.on("part/load:processing", (e, t) => {
        let { songId: n, partId: i, revisionId: r, ac: a } = t;
        return {
          part: {
            ...e.part,
            loading: { songId: n, partId: i, revisionId: r, ac: a },
          },
        };
      }),
      e.on("part/load:raw", (t, n) => {
        let {
            songId: i,
            partId: r,
            revisionId: a,
            rawPart: s,
            rawLyrics: o,
            signal: l,
          } = n,
          c = t.experiments,
          d = {
            useStdDrumNotation: c.drum_standard_notation?.segment !== "drop",
            useGenericTimeline: t.audio.version !== $.V1,
          },
          [u, p] = sJ(s, o, d);
        if (((p.source = "audio"), !l.aborted)) {
          if (u) {
            e.dispatch("part/load:error", {
              songId: i,
              partId: r,
              revisionId: a,
              error: u,
            });
            return;
          }
          e.dispatch("part/load:inflated", {
            songId: i,
            partId: r,
            revisionId: a,
            current: p,
            signal: l,
          });
        }
      }),
      e.on("part/load:done", (e, t) => {
        let { songId: n, partId: i, revisionId: r, current: a, lines: s } = t;
        return {
          part: {
            ...e.part,
            current: a,
            lines: s,
            songId: n,
            partId: i,
            revisionId: r,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          },
        };
      }),
      e.on("part/load:inflated", (t, i) => {
        let { songId: r, partId: a, revisionId: s, current: o, signal: l } = i,
          c = t.screen.viewport.width;
        c &&
          n(
            t,
            r,
            a,
            s,
            o,
            t.print,
            c,
            e.dispatch,
            t.experiments,
            l,
            t.part.scale
          );
      }),
      e.on("screen/resize", (t, i) => {
        let { viewport: r } = i,
          {
            songId: a,
            partId: s,
            revisionId: o,
            current: l,
            scale: c,
          } = t.part;
        l &&
          n(
            t,
            a,
            s,
            o,
            l,
            t.print,
            r.width,
            e.dispatch,
            t.experiments,
            null,
            c
          );
      }),
      e.on("part/scale", (t, i) => {
        let { scale: r } = i,
          { songId: a, partId: s, revisionId: o, current: l } = t.part,
          c = t.screen.viewport.width;
        c &&
          l &&
          ((t.part = { ...t.part, scale: r }),
          n(t, a, s, o, l, t.print, c, e.dispatch, t.experiments, null, r));
      });
    let i = (t) => {
      let { songId: i, partId: r, revisionId: a, current: s } = t.part,
        o = t.screen.viewport.width;
      o && s && n(t, i, r, a, s, t.print, o, e.dispatch, t.experiments);
    };
    e.on("print/enable", i),
      e.on("print/plus", i),
      e.on("print/minus", i),
      e.on("print/disable", i),
      e.on("part/load:done", (e) => {
        try {
          let t = e6(e.meta.current, e.meta.partId, e.meta.revisionId),
            n = new Date();
          n.setTime(n.getTime() + 7776e6),
            (document.cookie = `lastSeenTrack=${t};expires=${n.toUTCString()};path=/`);
        } catch (e) {
          console.error(e);
        }
      }),
      e.on("part/load:error", (e, t) => {
        let { songId: n, partId: i, revisionId: r, error: a } = t;
        return {
          part: {
            ...e.part,
            current: null,
            lines: null,
            songId: n,
            partId: i,
            revisionId: r,
            isFailed: !0,
            isNetworkFailed: a instanceof tE && 0 === a.status,
            isNotFound:
              a instanceof tE && (404 === a.status || 400 === a.status),
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
      });
  },
  oi = (e) => {
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
  or = async (e, t, n) => {
    let i = await nJ(e.songId, e.revisionId, t, e.image, n),
      [r, a] = sJ(i);
    return r && console.log(r), a;
  },
  oa = (e, t) =>
    e.songId === t.songId &&
    e.revisionId === t.revisionId &&
    e.image === t.image,
  os = (e) => {
    e.on("meta/load:done", async (t, n) => {
      let { current: i } = n,
        r = t.parts.loading;
      if (r) {
        if (oa(i, r.meta)) return;
        r.ac.abort();
      }
      if (t.parts.meta && oa(i, t.parts.meta)) return;
      let a = new tH();
      try {
        e.dispatch("parts/load:processing", { meta: i, ac: a });
        let t = await Promise.all(
          i.tracks.map((e) => or(i, e.partId, a.signal))
        );
        e.dispatch("parts/load:done", { meta: i, current: t });
      } catch (t) {
        if (a.signal.aborted) return;
        e.dispatch("parts/load:error", { meta: i, error: t });
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
function oo(e) {
  let t = e.get().diff;
  t.current &&
    !t.isFailed &&
    e.dispatch("diff/load:done", {
      songId: t.songId,
      partInstrument: t.partInstrument,
      before: t.before,
      after: t.after,
      current: t.current,
    });
}
async function ol(e, t) {
  let n = new tH();
  try {
    let i = e.get().diff,
      r = i.loading;
    r && r.ac.abort();
    let { songId: a, before: s, after: o } = t,
      l = i.songId !== a,
      c =
        i.before?.revisionId !== s.revisionId ||
        i.after?.revisionId !== o.revisionId,
      d = i.before?.partId !== s.partId || i.after?.partId !== o.partId,
      u = c || d;
    if (
      (await e.dispatch("diff/load:processing", {
        ...t,
        diffHasChanged: u,
        ac: n,
      }),
      n.signal.aborted)
    )
      return;
    let p = e.get().diff.current;
    if (l || u || !p || p.songId !== t.songId) {
      let [e, i] = await Promise.all([
        nK(t.songId, t.before.revisionId, n.signal),
        nK(t.songId, t.after.revisionId, n.signal),
      ]);
      if (
        ((p = {
          songId: e.songId,
          artistId: e.artistId,
          title: e.title,
          artist: e.artist,
          before: e,
          after: i,
        }),
        n.signal.aborted || !p)
      )
        return;
    }
    await e.dispatch("diff/load:done", { ...t, current: p });
  } catch (i) {
    if (n.signal.aborted) return;
    e.dispatch("diff/load:error", { ...t, error: i });
  }
}
let oc = (e) => {
    e.on("route/change", (t, n) => {
      let { routeContent: i } = n;
      i && "diff" === i.page && ol(e, i);
    }),
      e.on("diff/load:processing", (e, t) => {
        let { ac: n, ...i } = t;
        return {
          diff: { ...e.diff, songId: i.songId, loading: { ...i, ac: n } },
        };
      }),
      e.on("diff/load:done", (e, t) => {
        let { current: n, ...i } = t;
        return {
          diff: {
            ...e.diff,
            ...i,
            current: n,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
          meta: { ...e.meta, songId: i.songId },
        };
      }),
      e.on("diff/load:error", (e, t) => {
        let { error: n, ...i } = t;
        return {
          diff: {
            ...e.diff,
            current: null,
            ...i,
            partId: null,
            loading: null,
            isFailed: !0,
            isNetworkFailed: n instanceof tE && 0 === n.status,
            isNotFound:
              n instanceof tE && (404 === n.status || 400 === n.status),
          },
        };
      }),
      e.on("diff/toggleChangesOnly", (e, t) => {
        let { enabled: n } = t;
        return { diff: { ...e.diff, changesOnly: n } };
      }),
      e.on("diff/load:error", (e, t) => {
        let { error: n } = t;
        "Sentry" in window &&
          "function" == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n);
      });
  },
  od = (e) => e instanceof Date,
  ou = (e) => 0 === Object.keys(e).length,
  op = (e) => null != e && "object" == typeof e,
  oh = function (e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    )
      n[i - 1] = arguments[i];
    return Object.prototype.hasOwnProperty.call(e, ...n);
  },
  of = (e) => op(e) && ou(e),
  og = () => Object.create(null),
  om = (e, t) =>
    e !== t && op(e) && op(t)
      ? Object.keys(t).reduce((n, i) => {
          if (oh(e, i)) {
            let r = om(e[i], t[i]);
            return (op(r) && ou(r)) || (n[i] = r), n;
          }
          return (n[i] = t[i]), n;
        }, og())
      : {},
  oy = (e, t) =>
    e !== t && op(e) && op(t)
      ? Object.keys(e).reduce((n, i) => {
          if (oh(t, i)) {
            let r = oy(e[i], t[i]);
            return (op(r) && ou(r)) || (n[i] = r), n;
          }
          return (n[i] = void 0), n;
        }, og())
      : {},
  ov = (e, t) =>
    e === t
      ? {}
      : op(e) && op(t)
      ? od(e) || od(t)
        ? e.valueOf() == t.valueOf()
          ? {}
          : t
        : Object.keys(t).reduce((n, i) => {
            if (oh(e, i)) {
              let r = ov(e[i], t[i]);
              if (of(r) && !od(r) && (of(e[i]) || !of(t[i]))) return n;
              n[i] = r;
            }
            return n;
          }, og())
      : t,
  ob = (e, t) => ({ added: om(e, t), deleted: oy(e, t), updated: ov(e, t) });
function ow(e, t) {
  let n = ob(e, t),
    i = {};
  for (let t in n.deleted) {
    let r = e[t],
      a = r || n.deleted[t];
    (a.displayIndex = r.index),
      void 0 === n.deleted[r.index] ? (a.equality = "-") : (a.equality = "~"),
      a.index && (i[a.index] = a);
  }
  for (let r in n.updated) {
    let n = e[r],
      a = n.index,
      s = n.index;
    i[s] = { ...t[r], equality: "~", displayIndex: a };
  }
  for (let r in n.added) {
    let n = (e[r] || t[r]).index;
    i[n] || (i[n] = { ...t[r], equality: e[r] ? "~" : "+", displayIndex: n });
  }
  let r = [];
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    let a = e[n] || t[n];
    a.displayIndex = a.index;
    let s = i[a.index];
    if (!s) {
      a && r.push(a);
      continue;
    }
    if ("-" === s.equality) {
      (a.equality = "-"), r.push(a);
      continue;
    }
    if ("+" === s.equality) {
      r.push(s);
      continue;
    }
    "~" === s.equality &&
      ((a.equality = "-"), (s.equality = "+"), r.push(a, s));
  }
  return r;
}
class oS extends ag {
  makeScaleStrategy() {
    return (e) =>
      0 === e.index && 1 === e.layout.measureLayouts.length
        ? 1
        : e.layout.maxX / e.layout.unscaledWidth;
  }
}
let ox = (e) => {
  function t(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 550,
      i = e;
    s3() && (i = i - 90 - 100);
    let r = Math.min(i, 880),
      a = t ? n : 750;
    return r < a ? [a, r / a] : [r, 1];
  }
  function n(n, i, r, a, s, o, l) {
    let { songId: c, before: d, after: u } = n.diff,
      p = d.partId,
      h = d.revisionId;
    try {
      let f = s4(),
        g = 550;
      f &&
        (s?.even_larger_tab?.status === "pending" &&
          a("experiments/activate", {
            experimentName: "even_larger_tab",
            payload: { "Viewport width": r },
          }),
        s?.even_larger_tab?.segment === "on" && (g = 320));
      let [m, y] = t(r, f, g),
        v = n.diffParts?.lines,
        b = `${c}-${p}-${h}`;
      if (!o && v.lines && v.hash === b && v.width === m && v.scale === y)
        return;
      let w = v.lines,
        S = v.height,
        x = v.slicingMode;
      if (o || v.hash !== b || v.width !== m) {
        x = new oS(m - s7);
        let e = f ? new aF() : new aV(),
          t = aQ(i, x, e);
        (w = t.lines), (S = t.height);
      }
      if (n.diff.changesOnly)
        for (let e of w)
          e.hasChanges = e.layout.measureLayouts.some(
            (e) => e.measure.equality
          );
      let k = {
        lines: w,
        height: S,
        width: m,
        scale: y,
        slicingMode: x,
        print: !1,
        hash: b,
      };
      if (l && l.aborted) return;
      e.dispatch("diffParts/load:done", {
        songId: c,
        before: d,
        after: u,
        current: i,
        lines: k,
      });
    } catch (t) {
      if (l && l.aborted) return;
      e.dispatch("diffParts/load:error", {
        songId: c,
        before: d,
        after: u,
        error: t,
      });
    }
  }
  e.on("diff/load:done", async (t, n) => {
    let { before: i, after: r, current: a } = n;
    if (!iT(a.before, t.device.country)) return;
    let s = a.songId,
      o = new tH();
    try {
      let n = t.diffParts.loading;
      if (n) {
        if (
          s === n.songId &&
          i.revisionId === n.before.revisionId &&
          i.partId === n.before.partId &&
          r.revisionId === n.after.revisionId &&
          r.partId === n.after.partId
        )
          return;
        n.ac.abort();
      }
      if (
        !t.diffParts.isFailed &&
        t.diffParts.current &&
        t.diffParts.lines &&
        s === t.diffParts.songId &&
        i.partId === t.diffParts.before.partId &&
        i.revisionId === t.diffParts.before.revisionId
      ) {
        e.dispatch("diffParts/load:done", {
          songId: s,
          before: i,
          after: r,
          current: t.diffParts.current,
          lines: t.part.lines,
        });
        return;
      }
      await e.dispatch("diffParts/load:processing", {
        songId: s,
        before: i,
        after: r,
        ac: o,
      });
      let l = a.before?.tracks[i.partId || 0],
        c = a.after?.tracks[r.partId || 0];
      if (c && l?.instrumentId !== c?.instrumentId) {
        let e = e5(l.name);
        if (
          !(c = a.after?.tracks.find(
            (t) => t.instrumentId === l.instrumentId && e5(t.name) === e
          ))
        ) {
          console.error("TODO: No tracks found to match", l, a.after?.tracks);
          return;
        }
      }
      let d = [
          nJ(s, i.revisionId, i.partId, a.before.image, o.signal),
          nJ(s, r.revisionId, c.partId, a.after.image, o.signal),
        ],
        [u, p] = await Promise.all(d);
      if (!u || !p || o.signal.aborted) return;
      await e.dispatch("diffParts/load:raw", {
        songId: s,
        before: i,
        after: r,
        rawBeforePart: u,
        rawAfterPart: p,
        signal: o.signal,
      });
    } catch (t) {
      if (o.signal.aborted) return;
      e.dispatch("diffParts/load:error", {
        songId: s,
        before: i,
        after: r,
        error: t,
      });
    }
  }),
    e.on("diff/load:processing", (e, t) => {
      let { songId: n, before: i } = t,
        r = e.diffParts.loading;
      if (
        r &&
        (n !== r.songId ||
          (i.partId && i.partId !== r.before.partId) ||
          i.revisionId !== r.before.revisionId)
      )
        return r.ac.abort(), { diffParts: { ...e.diffParts, loading: null } };
    }),
    e.on("diffParts/load:processing", (e, t) => {
      let { songId: n, before: i, after: r, ac: a } = t;
      return {
        diffParts: {
          ...e.diffParts,
          loading: { songId: n, before: i, after: r, ac: a },
        },
      };
    }),
    e.on("diffParts/load:raw", (t, n) => {
      let {
          songId: i,
          before: r,
          after: a,
          rawBeforePart: s,
          rawAfterPart: o,
          signal: l,
        } = n,
        c = t.experiments,
        d = {
          useStdDrumNotation: c.drum_standard_notation?.segment !== "drop",
          useGenericTimeline: t.audio.version !== $.V1,
        },
        u = ow(s.measures, o.measures);
      s.measures = u;
      let [p, h] = sJ(s, [], d);
      if (!l.aborted) {
        if (p) {
          e.dispatch("diffParts/load:error", {
            songId: i,
            before: r,
            after: a,
            error: p,
          });
          return;
        }
        e.dispatch("diffParts/load:inflated", {
          songId: i,
          before: r,
          after: a,
          current: h,
          signal: l,
        });
      }
    }),
    e.on("diffParts/load:done", (e, t) => {
      let { songId: n, before: i, after: r, current: a, lines: s } = t;
      return {
        diffParts: {
          ...e.diffParts,
          current: a,
          lines: s,
          songId: n,
          before: i,
          after: r,
          isFailed: !1,
          isNetworkFailed: !1,
          isNotFound: !1,
          loading: null,
        },
      };
    }),
    e.on("diffParts/load:inflated", (t, i) => {
      let { current: r, signal: a } = i,
        s = t.screen.viewport.width;
      s && n(t, r, s, e.dispatch, t.experiments, !1, a);
    }),
    e.on("screen/resize", (t, i) => {
      let { viewport: r } = i,
        { current: a } = t.diffParts;
      a && n(t, a, r.width, e.dispatch, t.experiments);
    }),
    e.on("diff/toggleChangesOnly", (t) => {
      let { current: i } = t.diffParts;
      i && n(t, i, t.screen.viewport.width, e.dispatch, t.experiments, !0);
    }),
    e.on("diffParts/load:done", (e) => {
      try {
        let t = e6(
            e.diff.current,
            e.diff.before.partId,
            e.diff.before.revisionId
          ),
          n = new Date();
        n.setTime(n.getTime() + 7776e6),
          (document.cookie = `lastSeenTrack=${t};expires=${n.toUTCString()};path=/`);
      } catch (e) {
        console.error(e);
      }
    }),
    e.on("diffParts/load:error", (e, t) => {
      let { songId: n, before: i, after: r, error: a } = t;
      return {
        diffParts: {
          ...e.diffParts,
          current: null,
          lines: null,
          songId: n,
          before: i,
          after: r,
          isFailed: !0,
          isNetworkFailed: a instanceof tE && 0 === a.status,
          isNotFound: a instanceof tE && (404 === a.status || 400 === a.status),
          loading: null,
        },
      };
    }),
    e.on("diffParts/load:error", (e, t) => {
      let { error: n } = t;
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(n),
        console.error(n);
    });
};
function ok(e) {
  return e.reduce(
    (e, t) => ((e[`${t.name} - ${t.instrumentId}`] = t.hash), e),
    {}
  );
}
let oC = (e) => {
  e.on("diff/load:done", async (t, n) => {
    let { before: i, after: r, current: a } = n;
    if (!iT(a.before, t.device.country)) return;
    let s = a.songId,
      o = new tH();
    try {
      let n = t.diffTracks.loading;
      if (n) {
        if (
          s === n.songId &&
          i.revisionId === n.before.revisionId &&
          r.revisionId === n.after.revisionId
        )
          return;
        n.ac.abort();
      }
      if (
        !t.diffTracks.isFailed &&
        t.diffTracks.current &&
        s === t.diffTracks.songId &&
        i.revisionId === t.diffTracks.before.revisionId
      ) {
        e.dispatch("diffTracks/load:done", {
          songId: s,
          before: i,
          after: r,
          current: t.diffTracks.current,
        });
        return;
      }
      await e.dispatch("diffTracks/load:processing", {
        songId: s,
        before: i,
        after: r,
        ac: o,
      });
      let a = [n0(s, i.revisionId, o.signal), n0(s, r.revisionId, o.signal)],
        [l, c] = await Promise.all(a);
      if (!l || !c || o.signal.aborted) return;
      await e.dispatch("diffTracks/load:raw", {
        songId: s,
        before: i,
        after: r,
        rawBefore: l,
        rawAfter: c,
        signal: o.signal,
      });
    } catch (t) {
      if (o.signal.aborted) return;
      e.dispatch("diffTracks/load:error", {
        songId: s,
        before: i,
        after: r,
        error: t,
      });
    }
  }),
    e.on("diff/load:processing", (e, t) => {
      let { songId: n, before: i } = t,
        r = e.diffTracks.loading;
      if (r && (n !== r.songId || i.revisionId !== r.before.revisionId))
        return r.ac.abort(), { diffTracks: { ...e.diffTracks, loading: null } };
    }),
    e.on("diffTracks/load:processing", (e, t) => {
      let { songId: n, before: i, after: r, ac: a } = t;
      return {
        diffTracks: {
          ...e.diffTracks,
          loading: { songId: n, before: i, after: r, ac: a },
        },
      };
    }),
    e.on("diffTracks/load:raw", (t, n) => {
      let {
          songId: i,
          before: r,
          after: a,
          rawBefore: s,
          rawAfter: o,
          signal: l,
        } = n,
        c = ok(s.hashes),
        d = ok(o.hashes),
        u = ob(c, d);
      return (
        e.dispatch("diffTracks/load:combined", {
          songId: i,
          before: r,
          after: a,
          current: u,
          signal: l,
        }),
        { diffTracks: { ...t.diffTracks, current: u } }
      );
    }),
    e.on("diffTracks/load:done", (e, t) => {
      let { songId: n, before: i, after: r, current: a } = t;
      return {
        diffTracks: {
          ...e.diffTracks,
          current: a,
          songId: n,
          before: i,
          after: r,
          isFailed: !1,
          isNetworkFailed: !1,
          isNotFound: !1,
          loading: null,
        },
      };
    }),
    e.on("diffTracks/load:error", (e, t) => {
      let { songId: n, before: i, after: r, error: a } = t;
      return {
        diffTracks: {
          ...e.diffTracks,
          current: null,
          songId: n,
          before: i,
          after: r,
          isFailed: !0,
          isNetworkFailed: a instanceof tE && 0 === a.status,
          isNotFound: a instanceof tE && (404 === a.status || 400 === a.status),
          loading: null,
        },
      };
    }),
    e.on("diffTracks/load:error", (e, t) => {
      let { error: n } = t;
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(n),
        console.error(n);
    });
};
async function oT(e, t, n) {
  let i = tw("/api/sound/update"),
    r = await n5(i, { revisionId: e, version: t });
  (n && n.aborted) || n4(r);
}
async function oE(e, t, n) {
  let i = tw("/api/sound/generate"),
    r = await n5(i, { revisionId: e, version: t });
  (n && n.aborted) || n4(r);
}
let o_ = "undefined" != typeof window && !!window.requestAnimationFrame,
  oP = (e) => (e < 100 ? 50 : 100);
function oI(e) {
  try {
    return JSON.parse(window.localStorage.getItem(e));
  } catch (e) {
    return null;
  }
}
function oL(e, t) {
  try {
    t
      ? window.localStorage.setItem(e, JSON.stringify(t))
      : window.localStorage.removeItem(e);
  } catch (e) {}
}
var oN = { get: oI, set: oL };
let oA =
  window.performance && window.performance.now
    ? window.performance.now.bind(window.performance)
    : Date.now;
function oM(e, t) {
  let n;
  var i = this;
  return function () {
    for (var r = arguments.length, a = Array(r), s = 0; s < r; s++)
      a[s] = arguments[s];
    let o = () => e.apply(i, a);
    clearTimeout(n), (n = setTimeout(o, t));
  };
}
function oB(e, t) {
  let n = !1;
  return (i) => {
    n ||
      (e(i),
      (n = !0),
      setTimeout(() => {
        n = !1;
      }, t));
  };
}
let oD = ["scroll", "keydown", "click", "mousemove", "mousedown"];
class oO {
  constructor() {
    (this.hasFirstActivity = !1),
      this.reset(),
      this.engage(),
      this.trackFirstActivity();
  }
  engage() {
    for (let e of oD) window.addEventListener(e, this.trackActivity);
  }
  disengage() {
    for (let e of oD) window.removeEventListener(e, this.trackActivity);
  }
  reset() {
    this.setIsActive(!1);
  }
  trackFirstActivity() {
    oD.forEach((e) =>
      window.addEventListener(
        e,
        () => {
          this.hasFirstActivity = !0;
        },
        { once: !0 }
      )
    );
  }
  trackActivity = oB(() => {
    this.lastActivityTimestampMs = oA();
  }, 200);
  setIsActive(e) {
    !this.isActive && e
      ? this.disengage()
      : this.isActive && !e && this.engage(),
      (this.lastActivityTimestampMs = oA()),
      (this.isActive = e);
  }
  getTimeSinceLastActivity() {
    return this.isActive
      ? 0
      : Math.round((oA() - this.lastActivityTimestampMs) / 6e4);
  }
}
let oR = new oO(),
  oz = { solo: "s", focus: "f", mute: "m" },
  o$ = "hasUpdatedSoundV4";
function oF(e, t) {
  let n = t.new_sound?.segment === "drop",
    i = t.sound_v4?.segment === "drop";
  return i ? $.V2 : n ? $.V1 : $.V4;
}
async function oV(e) {
  try {
    let t = "hasUpdatedSoundV4",
      n = oI(t) || [];
    if (n.includes(e.revisionId)) return;
    let i = e.revisionId;
    oL(t, [...n, i]), await oT(e.revisionId, $.V4);
  } catch (e) {
    console.warn("error triggering audio update request (v4)");
  }
}
async function oU(e, t, n, i, r) {
  let a = e.get(),
    s = a.meta.current;
  if (!s) return;
  let { type: o, audio: l } = a.player,
    c = oP(a.player.speed),
    d = !!(l?.context && window && window.Worker),
    u = oF(a.device, a.experiments);
  if (
    (r || a.audio.forcedVersion
      ? (u = r || a.audio.forcedVersion)
      : tf.has(s, u) || (u = $.MASTER),
    !tf.has(s, u))
  ) {
    let e = tf.getAll(s);
    u = e[e.length - 1] || $.MASTER;
  }
  let p = tp(u),
    h = s[p.audioHashPropertyName];
  if (l && h && d && o_) {
    let r = `${t}/${i}/${h}/${c}/${oz[o]}/${n}.opus`;
    e.dispatch("player/open", { url: r, version: u });
  }
}
let oH = (e) => ({
  audio: { ...e.audio, isAudioFailed: !1, isAudioNetworkFailed: !1 },
});
$.MASTER;
let oj = (e) => {
    e.on("curiosity/vpt10", (e) => {
      if ("bot" === e.device.type || e.isTestMode) return;
      let t = e.meta?.current;
      !(!t || tf.has(t, $.V4)) && (oR.getTimeSinceLastActivity() >= 5 || oV(t));
    }),
      e.on("meta/load:done", (t, n) => {
        let { songId: i, partId: r, current: a } = n;
        iT(a, t.device.country) &&
          !t.player.videoOpened &&
          oU(e, i, r, a.revisionId);
      }),
      e.on("player/toggleVideo", (t, n) => {
        if (!iT(t.meta.current, t.device.country) || n) return;
        let i = t.meta.current;
        i &&
          oU(
            e,
            t.meta.current.songId,
            t.meta.partId,
            t.meta.current.revisionId
          );
      }),
      e.on("meta/load:processing", oH),
      e.on("player/load", oH),
      e.on("player/loaded", oH),
      e.on("player/error", (e, t) => {
        let { isNetworkError: n } = t;
        return {
          audio: { ...e.audio, isAudioFailed: !0, isAudioNetworkFailed: n },
        };
      }),
      e.on("player/open", (e, t) => {
        let { url: n, version: i } = t;
        return (
          e.player.audio?.open(i, n),
          {
            audio: {
              ...e.audio,
              version: i,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1,
            },
          }
        );
      }),
      e.on("editor/sound:toggle", (e, t) => {
        let { version: n } = t;
        return { audio: { ...e.audio, forcedVersion: n } };
      });
  },
  oG = (e) => ({
    user: {
      profile: e,
      permissions: e.permissions,
      [[97, 104, 122, 89, 101, 124, 122]
        .map((e) => String.fromCharCode(9 ^ e))
        .join("")]: e.plan === U.PLUS,
      isLoggedIn: !0,
    },
  }),
  oW = () => ({
    user: {
      profile: null,
      permissions: [],
      [[97, 104, 122, 89, 101, 124, 122]
        .map((e) => String.fromCharCode(9 ^ e))
        .join("")]: !1,
      isLoggedIn: !1,
    },
  });
function oq(e, t) {
  return { ...e.user.profile, subscription: t.subscription, plan: U.PLUS };
}
let oX = (e) => {
    e.on("user/signIn", (e, t) => oG(t)),
      e.on("user/googleSignIn", (e, t) => oG(t.profile)),
      e.on("user/signUp", (e, t) => oG(t)),
      e.on("user/profile", (e, t) => oG(t)),
      e.on("user/recoverPassword", (e, t) => oG(t)),
      e.on("user/subscribePlus", (e, t) => {
        let n = oq(e, t);
        return oG(n);
      }),
      e.on("user/cancelPlus", (e, t) => oG(t)),
      e.on("user/migratePlus", (e, t) => oG(t)),
      e.on("user/signOut", oW),
      e.on("user/deactivate", oW);
  },
  oY = (e) => e.currentTime,
  oK = (e) => ("outputLatency" in e ? e.outputLatency : 0),
  oJ = (e) => ("baseLatency" in e ? e.baseLatency : 0),
  oZ = (e) => oK(e) + oJ(e);
function oQ(e, t) {
  let n;
  for (n = t; e > 1; e--) n += t;
  return n;
}
function o1() {
  try {
    let e = document.createElement("div");
    e.innerHTML = "<audio x-webkit-airplay='deny'></audio>";
    let t = e.children.item(0);
    return (
      (t.disableRemotePlayback = !0),
      (t.controls = !1),
      (t.src =
        "data:audio/mpeg;base64,//uQx" +
        oQ(23, "A") +
        "WGluZwAAAA8AAAACAAACcQCA" +
        oQ(16, "gICA") +
        oQ(66, "/") +
        "8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI" +
        oQ(320, "A") +
        "//sQxAADgnABGiAAQBCqgCRMAAgEAH" +
        oQ(15, "/") +
        "7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq" +
        oQ(18, "/") +
        "9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw" +
        oQ(97, "V") +
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
let o0 = "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz";
function o2() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
    t = "";
  for (; e-- > 0; )
    t += "bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz"[
      (64 * Math.random()) | 0
    ];
  return t;
}
let o5 = "/static/latest/WebWorker.6fc8b06d.js";
function o4(e) {
  setTimeout(() => {
    let t = document.getElementById("root");
    t && (t.dataset.playing = e ? "on" : "off");
  }, 0);
}
let o3 = window.performance || {
  offset: Date.now(),
  now: function () {
    return Date.now() - this.offset;
  },
};
function o9(e) {
  return e / 1e3;
}
function o8(e) {}
function o6(e, t) {
  if (e) throw Error(t);
}
class o7 {
  constructor(e) {
    (this._isPlaying = !1),
      (this.startedTime = 0),
      (this.startedContextTime = 0),
      (this.position = { cursor: 0, loopStart: 0, loopEnd: 0 }),
      (this.speed = 100),
      (this.pitchShift = 0),
      (this.type = "focus"),
      (this.isCountIn = !1),
      (this.isMetronome = !1),
      (this.metronomeType = "regular"),
      (this.url = "");
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
          `Audio context changed state to ${this.context.state}, isPlaying: ${this.isPlaying}, sample rate ${this.context.sampleRate}`
        );
      }),
        (this.context = e),
        (this.freezeCheckSampleRate = this.context.sampleRate);
    } catch (e) {
      console.error("error creating audio context", e), (this.context = null);
    }
    window.Worker &&
      ((this.worker = new Worker("/static/latest/WebWorker.6fc8b06d.js")),
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
      (this.hack = o1()),
      (this.noSound = !1),
      (this.marginIssueReported = !1),
      (this.workerStarted = !1),
      (this.hasSingleTrack = !1),
      (this.correctTimestampFor50Timeline = (e) => 2 * e);
  }
  get isPlaying() {
    return this._isPlaying;
  }
  set isPlaying(e) {
    this._isPlaying = e;
  }
  get shouldUseWorker() {
    return this.context && this.worker && !this.noSound;
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
    for (let i = 0; i < this.buffers.length; i++) {
      let r = this.buffers[i];
      (r && r.numberOfChannels === e && r.sampleRate === t && r.length === n) ||
        (this.buffers[i] = this.context.createBuffer(e, n, t));
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
    if (!this.isPlaying) return;
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
    let i = t.createBufferSource();
    (i.buffer = n), i.connect(this.gain), (this.sources[this.reuseIndex] = i);
    let r = 0;
    if (null !== this.startedTime) {
      r = this.startedTime + o9(e.timestampMs);
      let n = r - t.currentTime;
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
      (r = t.currentTime + 0.05),
        (this.startedContextTime = oY(t) + 0.05),
        (this.startedTime = r),
        (this.workerDelay = Math.floor(o3.now() - this.workerTs)),
        console.info(`Sound generation delay ${this.workerDelay}ms`),
        o6(
          0 !== e.timestampMs,
          `Got initial audio packet with unexpected timestamp ${e.timestampMs}`
        );
    i.start(r, 0, o9(e.durationMs));
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
          : e.data.url === this.url &&
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
      (this.isPlaying = !0),
      o4(!0);
  }
  getWorkerPosition() {
    let { cursor: e, loopStart: t, loopEnd: n } = this.position;
    return (
      this.speed < 100 &&
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
      this.isPlaying &&
        ((this.isPlaying = !1),
        this.workerStarted &&
          ((this.workerStarted = !1),
          this.worker.postMessage([
            { message: "worker/stopGenerate" },
            { message: "worker/seek", position: this.getWorkerPosition() },
          ]))),
      o4(!1),
      this.position.cursor
    );
  }
  turnOffSound() {
    if (this.isPlaying) {
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
      (this.position = this.getActualPosition()),
        (this.startedTime = null),
        (this.startedContextTime = null),
        this.hack && this.hack.pause();
    }
  }
  seek(e) {
    this.turnOffSound(),
      (this.position = e),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.isPlaying && this.startWithoutSound();
  }
  setSpeed(e) {
    return (
      this.turnOffSound(),
      (this.speed = e),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/setSpeed", speed: e },
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.isPlaying && this.startWithoutSound(),
      this.position.cursor
    );
  }
  setType(e) {
    this.type = e;
  }
  setPitch(e) {
    return (
      this.turnOffSound(),
      (this.pitchShift = e),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: "worker/setPitch", pitchShift: e },
            { message: "worker/seek", position: this.getWorkerPosition() },
            this.isPlaying && this.startGenerateSoundPackets(),
          ])
        : this.isPlaying && this.startWithoutSound(),
      this.position.cursor
    );
  }
  startWithoutSound() {
    this.updateCountIn(),
      (this.startedTime = o3.now() / 1e3),
      (this.startedContextTime = this.startedTime);
  }
  updateCountIn() {
    let e = null;
    if (((this.countinDuration = 0), this.isCountIn)) {
      let t;
      e = this.findBpmAndBeatByTimestamp(this.position.cursor);
      let n = ((60 / e.bpm) * 4) / e.signature[1];
      this.countinDuration =
        Math.floor(((n * e.signature[0] * 100) / this.speed) * 48e3) / 48e3;
      let i = this.generateCountInTimeline(),
        r = this.position.cursor;
      for (let e = 0; e < i.length; e++)
        if (Math.floor(i[e].timestamp) >= Math.floor(r)) {
          t = i[e];
          break;
        }
      let a = t ? ((t.timestamp - r) * (100 / this.speed)) / 1e3 : 0;
      (this.countinDuration -= a),
        (e.correctedDurration = this.countinDuration);
    }
    return e;
  }
  updateMetronome() {
    return this.isMetronome ? this.generateMetronomeTimeline() : null;
  }
  startGenerateSoundPackets() {
    this.hack && this.hack.play(),
      (this.token = o2()),
      (this.workerTs = o3.now()),
      (this.workerStarted = !0);
    let e = "mute" === this.type && this.hasSingleTrack,
      t = this.updateMetronome(),
      n = this.metronomeType,
      i = this.updateCountIn();
    return {
      message: "worker/startGenerate",
      token: this.token,
      mute: e,
      countIn: i,
      metronomeTimeline: t,
      metronomeType: n,
    };
  }
  getReadyForNewTab(e, t, n, i, r, a) {
    this.turnOffSound();
    let s = this.isPlaying;
    (this.position = e),
      (this.speed = t),
      (this.pitchShift = n),
      (this.isCountIn = i),
      (this.isMetronome = r),
      (this.metronomeType = a),
      (this.isPlaying = !1),
      (this.token = o2()),
      this.shouldUseWorker &&
        (this.worker.postMessage([
          s && { message: "worker/stopGenerate" },
          { message: "worker/reset" },
          { message: "worker/setSpeed", speed: t },
          { message: "worker/setPitch", pitchShift: n },
          { message: "worker/seek", position: this.getWorkerPosition() },
        ]),
        (this.workerStarted = !1)),
      o4(!1);
  }
  setBuffer(e, t) {
    (this.url = t),
      this.worker.postMessage([
        {
          message: "worker/setBuffer",
          buffer0: e.getChannelData(0),
          buffer1: e.numberOfChannels > 1 ? e.getChannelData(1) : null,
          sampleRate: e.sampleRate,
          url: t,
        },
        { message: "worker/seek", position: this.getWorkerPosition() },
        this.isPlaying && this.startGenerateSoundPackets(),
      ]);
  }
  open(e, t) {
    (this.url = t),
      this.worker.postMessage([
        { message: "worker/open", url: t, version: e },
        { message: "worker/seek", position: this.getWorkerPosition() },
      ]);
  }
  clearBuffer() {
    this.shouldUseWorker &&
      this.worker.postMessage([{ message: "worker/clearBuffer" }]);
  }
  setCountIn(e) {
    this.isCountIn = e;
  }
  setMetronome(e, t) {
    (this.isMetronome = e), (this.metronomeType = t);
  }
  getCursor() {
    if (this.isPlaying && null !== this.startedTime) {
      let {
          speed: e,
          position: { loopStart: t, loopEnd: n },
        } = this,
        i = 1e3 * Math.max(this.passed(), 0),
        r = (i > 0 ? i * (e / 100) : 0) + this.position.cursor;
      return n && r > n && (r = t + ((r - t) % (n - t))), r;
    }
    return this.position.cursor;
  }
  passed() {
    let { context: e, startedTime: t, countinDuration: n } = this;
    return null === t
      ? 0
      : this.shouldUseWorker
      ? oY(e) - this.startedContextTime - n - oZ(e)
      : o3.now() / 1e3 - t - n;
  }
  isPositionChanged() {
    return this.isPlaying && this.passed() > 0;
  }
  getActualPosition() {
    return {
      cursor: this.getCursor(),
      loopStart: this.position.loopStart,
      loopEnd: this.position.loopEnd,
    };
  }
}
let le = 12,
  lt = 3,
  ln = 21,
  li = 100,
  lr = 25,
  la = 175;
function ls(e) {
  return (Math.round((e / 100) * 12) / 12) * 100;
}
function lo(e, t) {
  let n = Math.round((t.bpm * e) / 12),
    i = Math.round((100 * e) / 12);
  return { tempo: { ...t, bpm: n }, speed: i, position: lh(i) };
}
function ll(e, t) {
  return lo(Math.round((e / 100) * 12), t);
}
function lc(e, t) {
  return { ...t, bpm: Math.round((t.bpm * e) / 100) };
}
function ld(e, t, n, i) {
  let r = Math.round((e / 100) * 12);
  return r >= 21 ? { tempo: t, speed: e, position: n } : lo(r + 1, i);
}
function lu(e, t, n, i) {
  let r = Math.round((e / 100) * 12);
  return r <= 3 ? { tempo: t, speed: e, position: n } : lo(r - 1, i);
}
function lp(e, t, n, i, r) {
  let a = t.bpm + r,
    s = +((100 * a) / i.bpm).toFixed(2),
    o = Math.round(s);
  return o < 25 || o > 175
    ? { tempo: t, speed: e, position: n }
    : { tempo: { ...i, bpm: a }, speed: s, position: lh(s) };
}
function lh(e) {
  let t = ls(e);
  return +(((t - 25) * 100) / 150).toFixed(6);
}
function lf(e) {
  return Math.round((150 * e) / 100 + 25);
}
let lg = (e) => (e ? (t, n) => a5(t, e, n.bpm) : (e, t) => ex(e, t)),
  lm = (e) => {
    let t = [],
      n = 0,
      i = rU,
      r = 0,
      a = lg(e.tpqn);
    for (let s of e.progression) {
      let o = e.measures[s - 1];
      (i = o.tempoLayoutsByTime?.get(0)?.tempo || i),
        (r = o.duration),
        t.push(n),
        (n += a(r, i));
    }
    return (n += a(r, i)), t.push(n), t;
  },
  ly = (e) => {
    let t = [],
      n = 0,
      i = rU,
      r = lg(e.tpqn);
    for (let a of e.progression) {
      let s = e.measures[a - 1],
        o = eb(s.signature),
        l = s.duration / o;
      i = rX(s).tempoLayouts.length > 0 ? rX(s).tempoLayouts[0].tempo : i;
      for (let e = 0; e < o; e++) {
        let a = {
          accented: 0 === e,
          timestamp: parseFloat(n.toFixed(4)),
          signature: s.signature,
          bpm: i.bpm,
        };
        t.push(a), (n += r(l, i));
      }
    }
    return t;
  },
  lv = (e, t) => {
    let n = [],
      i = 0,
      r = rU,
      a = lg(e.tpqn);
    for (let s of e.progression) {
      let o = e.measures[s - 1],
        l = eb(o.signature),
        c = ew(o.signature),
        d = o.duration,
        u = 8 !== c ? 4 * l : l;
      8 !== c ? (d /= 4 * l) : (d /= l);
      let p = rX(o).tempoLayouts;
      r = p && p.length > 0 ? p[0].tempo : r;
      for (let e = 0; e < u; e++) {
        let s;
        if (8 === c) s = (e % 3) + 1;
        else if ((e + 1) % 2 == 0) {
          if (16 !== t) {
            i += a(d, r);
            continue;
          }
          s = "16th";
        } else if ((e + 1) % 4 == 1) s = Math.ceil((e + 1) / 4);
        else {
          if (4 === t) {
            i += a(d, r);
            continue;
          }
          s = "8th";
        }
        let l = {
          division: 8 === c ? 4 : t,
          beatNum: s,
          timestamp: parseFloat(i.toFixed(4)),
          signature: o.signature,
          bpm: r.bpm,
        };
        n.push(l), (i += a(d, r));
      }
    }
    return n;
  },
  lb = (e) => {
    let t = e.measures.find((e) => {
      let t = eb(e.signature),
        n = ew(e.signature);
      return (4 !== n && 8 !== n && 2 !== n) || ((4 === n || 2 === n) && t > 8);
    });
    return !t;
  };
async function lw(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  e("player/togglePlay", n);
}
async function lS(e) {
  if (true) return import("./playerPlus.8f05402b.js");
}
async function lx(e) {
  let t = e.get();
  if (ot(t.demo) && t.meta.songId === B)
    return import("./playerDemo.bd0d5753.js");
}
async function lk(e) {
  try {
    let t = await lS(e);
    if (t && t.demo && !t.demo()) return t.plusToggleLoop(e);
    if ((t = await lx(e))) return t.demoToggleLoop(e);
  } catch (e) {
    console.error(e);
  }
}
function lC(e) {
  lE(e, 1);
}
function lT(e) {
  lE(e, -1);
}
function lE(e, t) {
  let { player: n, tempo: i } = e.get(),
    r = lc(n.speed, i.tempo),
    a = r.bpm + t,
    s = +((100 * a) / i.tempo.bpm).toFixed(2),
    o = Math.round(s);
  o < 25 || o > 175 || l_(e, s);
}
async function l_(e, t) {
  try {
    let n = await lS(e);
    if (n && n.demo && !n.demo()) return n.plusChangeSpeed(e, t);
    if ((n = await lx(e))) return n.demoChangeSpeed(e, t);
  } catch (e) {
    console.error(e);
  }
}
async function lP(e, t) {
  try {
    let n = await lS(e);
    if (n && n.demo && !n.demo()) return n.plusChangePitch(e, t);
    if ((n = await lx(e))) return n.demoChangePitch(e, t);
  } catch (e) {
    console.error(e);
  }
}
function lI(e, t) {
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
  oL(`player-${e.songId}`, n);
}
function lL(e, t, n, i, r) {
  let a = oI(`player-${e}`),
    s = ei(n),
    o = {
      cursor: { position: { cursor: 0, loopEnd: 0, loopStart: 0 } },
      player: {
        speed: lD,
        type: lO,
        pitchShift: lR,
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
        speed: (s && a?.speed) || lD,
        type: (s && a?.type) || lO,
        pitchShift: (s && a?.pitchShift) || lR,
        isCountin: a?.isCountin || t.isCountin,
        isMetronome: a?.isMetronome || t.isMetronome,
        metronomeType: a?.metronomeType || t.metronomeType,
      },
    };
  if (i.state_persistence?.status === "pending") {
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
    e && r("experiments/activate", { experimentName: "state_persistence" });
  }
  return i?.state_persistence?.segment === "on" ? l : o;
}
async function lN(e, t) {
  try {
    let n = await lS(e);
    if (n && n.demo && !n.demo()) return n.plusChangeType(e, t);
    if ((n = await lx(e))) return n.demoChangeType(e, t);
  } catch (e) {
    console.error(e);
  }
}
async function lA(e) {
  try {
    let t = await import("./playerFree.d0fa2b00.js");
    return t.plusRestoreDefaults(e);
  } catch (e) {
    console.error(e);
  }
}
async function lM(e) {
  e("player/toggleCountIn");
}
function lB(e, t) {
  return (
    e === t ||
    (e.cursor === t.cursor &&
      e.loopStart === t.loopStart &&
      e.loopEnd === t.loopEnd)
  );
}
let lD = 100,
  lO = "focus",
  lR = 0,
  lz = (e, t) => {
    let n = null != t ? t : !e.player.shouldPlay;
    oR.setIsActive(n);
    let i = {};
    e.player.shouldPlay !== n && (i.player = { ...e.player, shouldPlay: n });
    let { instance: r, canPlay: a } = e.player;
    return (
      r &&
        (a && n
          ? r.isPlaying || r.play()
          : r.isPlaying &&
            (r.pause(),
            (i.cursor = { ...e.cursor, position: r.getActualPosition() }),
            lI(i.player || e.player, i.cursor))),
      i
    );
  },
  l$ = (e) => {
    {
      let r;
      function t() {
        r?.forEach((e) => e());
      }
      function n(t, n) {
        let { songId: i } = n;
        if (!t.player.audio) {
          let n = new o7({
              onError: function (t) {
                let n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i = t.message || t;
                console.error("error in audio player initialization: ", i),
                  e.dispatch("player/error", { error: i, isNetworkError: n });
              },
              onFreeze: () => e.dispatch("player/togglePlay", !1),
              onOpened: () => e.dispatch("player/opened"),
              onLoad: () => e.dispatch("player/load"),
              onLoaded: () => e.dispatch("player/loaded"),
              onEmpty: () => e.dispatch("player/empty"),
            }),
            r = !!(null !== n.context && window.Worker),
            a = lL(i, t.player, t.user, t.experiments, e.dispatch);
          return (
            n.getReadyForNewTab(
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
                instance: n,
                songId: i,
                playbackAvailable: r,
                ...a.player,
              },
              cursor: { ...t.cursor, ...a.cursor },
            }
          );
        }
      }
      function i(e, t) {
        let n = lz(e, !1),
          i = t ? e.video.player : e.player.audio,
          r = n.cursor || e.cursor;
        return (
          i.seek(r.position),
          n.player || (n.player = { ...e.player }),
          i.setSpeed(n.player.speed),
          i.setPitch(n.player.pitchShift),
          i.setCountIn(n.player.isCountin),
          i.setMetronome(n.player.isMetronome, n.player.metronomeType),
          (n.player.instance = i),
          (n.player.videoOpened = t),
          n
        );
      }
      (r = [
        e.on("meta/load:processing", n),
        e.on("meta/load:processing", t),
        e.on("meta/load:done", n),
        e.on("meta/load:done", t),
      ]),
        e.on("player/toggleVideo", (e, t) => i(e, t));
    }
    function r(e) {
      setTimeout(() => {
        let t = document.getElementById("apptab");
        t && (t.dataset.canPlay = e ? "yes" : "no");
      }, 0);
    }
    function a(e, t) {
      let { instance: n, shouldPlay: i } = e.player,
        a = e.player.locks;
      if ((a.includes(t) || a.push(t), e.player.canPlay)) {
        let t = { player: { ...e.player, canPlay: !1 } };
        return (
          r(!1),
          i &&
            n.isPlaying &&
            (n.pause(),
            (t.cursor = { ...e.cursor, position: n.getActualPosition() })),
          t
        );
      }
    }
    function s(e, t) {
      let { instance: n, shouldPlay: i, locks: a } = e.player;
      for (let e of (Array.isArray(t) || (t = [t]), t)) {
        let t = a.findIndex((t) => t === e);
        -1 !== t && a.splice(t, 1);
      }
      let s = !a.length;
      if (!e.player.canPlay && s)
        return (
          r(!0),
          i && !n.isPlaying && n.play(),
          { player: { ...e.player, canPlay: s } }
        );
    }
    e.on("meta/load:processing", (t, n) => {
      let { songId: i, songHasChanged: r } = n;
      if (r) {
        let n = t.player.audio,
          r = { cursor: 0, loopEnd: 0, loopStart: 0 },
          a = t.player.isCountin,
          s = t.player.isMetronome,
          o = t.player.metronomeType;
        n && n.getReadyForNewTab(r, lD, lR, a, s, o);
        let l = lL(i, t.player, t.user, t.experiments, e.dispatch);
        return (
          n &&
            n.getReadyForNewTab(
              l.cursor.position,
              l.player.speed,
              l.player.pitchShift,
              l.player.isCountin,
              l.player.isMetronome,
              l.player.metronomeType
            ),
          {
            player: {
              ...t.player,
              ...l.player,
              songId: i,
              instance: n,
              videoOpened: !1,
              shouldPlay: !1,
            },
            cursor: { ...t.cursor, ...l.cursor },
          }
        );
      }
      return t;
    }),
      e.on("chords/load:processing", (e, t) => {
        e.player.instance?.pause?.();
      }),
      e.on("meta/load:done", (e, t) => {
        let { current: n } = t;
        e.player.audio &&
          (e.player.audio.hasSingleTrack = !n.tracks || 1 === n.tracks.length);
      }),
      e.on("part/load:inflated", (e, t) => {
        let { player: n } = e,
          { current: i } = t;
        if (n.audio) {
          (n.audio.correctTimestampFor50Timeline = (e) => sn(i, e)),
            (n.audio.findBpmAndBeatByTimestamp = (e) => sa(i, e)),
            (n.audio.generateCountInTimeline = () => ly(i)),
            (n.audio.generateMetronomeTimeline = () => lv(i, 4));
          let e = lb(i),
            t = n.metronomeType;
          return (
            "voice" !== n.metronomeType ||
              e ||
              ((t = "regular"),
              n.instance.setMetronome(n.isMetronome, "regular")),
            { player: { ...n, voiceMetronomeAvailable: e, metronomeType: t } }
          );
        }
      }),
      e.on("player/open", (e) => a(e, "audio")),
      e.on("player/load", (e) => a(e, "audio")),
      e.on("player/empty", (e) => a(e, "audio")),
      e.on("player/loaded", (e) => s(e, "audio")),
      e.on("player/toggleVideo", (e, t) => t && s(e, "audio")),
      e.on("meta/load:processing", (e) => a(e, "model")),
      e.on("part/load:done", (e) => s(e, "model")),
      e.on("player/error", (e) => s(e, ["audio", "model"])),
      e.on("cursor/move", (e, t) => {
        let { player: n } = e;
        n.instance.seek(t);
      }),
      e.on("player/startPlay", (e) => lz(e, !0)),
      e.on("player/stopPlay", (e) => lz(e, !1)),
      e.on("player/togglePlay", lz),
      e.on("player/changeLoop", (e, t) => {
        if (t) {
          let t = a(e, "loop") || e;
          return (t.player.isLoopChanging = !0), t;
        }
        {
          let t = s(e, "loop") || e;
          return (t.player.isLoopChanging = !1), t;
        }
      }),
      e.on("player/changeSpeed", (e, t) => {
        let { speed: n } = t,
          { instance: i } = e.player;
        i.setSpeed(n);
        let r = { ...e.player, speed: n };
        return lI(r, e.cursor), { player: r };
      }),
      e.on("player/changePitch", (e, t) => {
        let { instance: n } = e.player;
        n.setPitch(t);
        let i = { ...e.player, pitchShift: t };
        return lI(i, e.cursor), { player: i };
      }),
      e.on("player/changeType", (e, t) => {
        let { type: n } = t,
          { instance: i } = e.player;
        i.setType(n);
        let r = { ...e.player, type: n };
        return lI(r, e.cursor), { player: r };
      }),
      e.on("player/suspend", a),
      e.on("player/resume", s),
      e.on("player/toggleCountIn", (e) => {
        let t = { ...e.player, isCountin: !e.player.isCountin };
        return (
          t.instance.setCountIn(t.isCountin), lI(t, e.cursor), { player: t }
        );
      }),
      e.on("player/toggleMetronome:init", () => {
        e.dispatch("player/suspend", "isMetronome"),
          e.dispatch("player/toggleMetronome"),
          e.dispatch("player/resume", "isMetronome");
      }),
      e.on("player/toggleMetronome", (e) => {
        let t = { ...e.player, isMetronome: !e.player.isMetronome };
        return (
          t.instance.setMetronome(t.isMetronome, t.metronomeType),
          lI(t, e.cursor),
          { player: t }
        );
      }),
      e.on("player/changeMetronome:init", (t, n) => {
        let { player: i } = t;
        n !== i.metronomeType &&
          (e.dispatch("player/suspend", "metronomeType"),
          e.dispatch("player/changeMetronome", n),
          e.dispatch("player/resume", "metronomeType"));
      }),
      e.on("player/changeMetronome", (e, t) => {
        let { player: n, cursor: i } = e;
        return (
          n.instance.setMetronome(n.isMetronome, t),
          lI(n, i),
          { player: { ...n, metronomeType: t } }
        );
      }),
      e.on("user/signOut", () => {
        lA(e);
      }),
      e.on("route/change", (e, t) => {
        let { route: n } = t;
        return n.isPanel ? a(e, "isPanel") : s(e, "isPanel");
      }),
      e.on("demo/activate", (t, n) => {
        let { meta: i, player: r } = t,
          a = "play-along" === n,
          s = r.videoOpened;
        i.songId === B && a && !s && e.dispatch("player/toggleVideo", !0);
      });
  },
  lF = 100;
class lV {
  constructor(e) {
    (this.position = { cursor: 0, loopStart: 0, loopEnd: 0 }),
      (this.startedTime = null),
      (this.passedFreeze = null),
      (this.speed = 100),
      (this.isPlaying = !1),
      (this.isLoaded = !1),
      (this.callback = e);
  }
  get isPlaying() {
    return this._isPlaying;
  }
  set isPlaying(e) {
    this._isPlaying = e;
  }
  load(e, t, n, i) {
    (this.player = e),
      (this.cursorOffset = t),
      (this.isLoaded = !0),
      (this.firstTimePlay = !0),
      (this.position = n),
      (this.startedTime = null),
      (this.passedFreeze = null),
      "setPlaybackRate" in this.player && this.player.setPlaybackRate(i / 100),
      "setPlaybackQuality" in this.player &&
        this.player.setPlaybackQuality("default");
  }
  play() {
    if (((this.passedFreeze = null), this.isLoaded)) {
      if (
        ((this.isPlaying = !0),
        this.loop(),
        this.captureStartedTime(),
        o4(!0),
        this.firstTimePlay)
      ) {
        (this.firstTimePlay = !1),
          this.player.seekTo(this.toSecondsPlusOffset(this.position.cursor));
        return;
      }
      this.player.playVideo();
    }
  }
  pause() {
    this.isLoaded &&
      ((this.position = this.getActualPosition()),
      (this.isPlaying = !1),
      (this.startedTime = null),
      this.player.pauseVideo(),
      o4(!1),
      this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
      (this.animationPlayId = null));
  }
  seek(e) {
    if (
      this.isLoaded &&
      ((this.position = e), this.isPlaying || !this.firstTimePlay)
    ) {
      let e = this.toSecondsPlusOffset(this.position.cursor);
      this.player.seekTo(e, !0), this.captureStartedTime();
    }
  }
  setSpeed(e) {
    this.isLoaded &&
      (this.isPlaying && (this.position = this.getActualPosition()),
      (this.speed = e),
      this.isPlaying && this.captureStartedTime(),
      this.player.setPlaybackRate(e / 100));
  }
  loop() {
    this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
    let e = () => {
      if (!this.animationPlayId) return;
      let { loopStart: t, loopEnd: n } = this.position;
      n &&
        this.getCurrentTime() >= n &&
        (this.player.seekTo(this.toSecondsPlusOffset(t)),
        this.captureStartedTime(t)),
        (this.animationPlayId = requestAnimationFrame(e));
    };
    this.animationPlayId = requestAnimationFrame(e);
  }
  setBuffering(e) {
    e
      ? ((this.passedFreeze = this.externalCurrentTime()),
        (this.position = this.getActualPosition()))
      : this.isPlaying &&
        ((this.passedFreeze = null), this.captureStartedTime());
  }
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
    if (!this.isPlaying) return this.position.cursor;
    {
      let e = this.internalCurrentTime();
      return lU(this.videoPoints, this.audioPoints, e);
    }
  }
  captureStartedTime() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    null === e && (e = this.position.cursor),
      (this.startedTime =
        performance.now() -
        (lU(this.audioPoints, this.videoPoints, e) / this.speed) * 100);
  }
  internalCurrentTime() {
    return Math.max(
      (this.player.getCurrentTime() - this.cursorOffset) * 1e3,
      0
    );
  }
  externalCurrentTime() {
    let { startedTime: e, passedFreeze: t } = this;
    return null === e
      ? 0
      : null !== t
      ? t
      : Math.max((performance.now() - e) * (this.speed / 100), 0);
  }
  toSecondsPlusOffset(e) {
    let t = lU(this.audioPoints, this.videoPoints, e);
    return t / 1e3 + this.cursorOffset;
  }
  getCursor() {
    let e = this.getCurrentTime(),
      { loopEnd: t, loopStart: n } = this.position;
    return t
      ? Math.min(t - 0.001, Math.max(e, n))
      : Math.max(this.position.cursor, e);
  }
  isPositionChanged() {
    return this.isPlaying && this.externalCurrentTime() > 0;
  }
  setPitch(e) {}
  setCountIn(e) {}
  setMetronome(e, t) {}
  setType(e) {}
  getActualPosition() {
    return {
      cursor: this.getCursor(),
      loopStart: this.position.loopStart,
      loopEnd: this.position.loopEnd,
    };
  }
  _resetToDefault() {
    (this.isLoaded = !1),
      (this.firstTimePlay = !0),
      (this.animationPlayId = null);
  }
  setVideoPoints(e) {
    this.videoPoints = e;
  }
  setAudioPoints(e) {
    this.audioPoints = e;
  }
  getReadyForNewTab(e, t, n, i, r, a) {
    this.isPlaying && this.pause(), this.seek(e), this.setSpeed(t);
  }
}
function lU(e, t, n) {
  if (!e || !t) return n;
  let i = Math.min(e.length, t.length) - 1;
  if (0 === i || e[i] < n) return n - e[i] + t[i];
  let r = i,
    a = 0;
  for (; r - a > 1; ) {
    let t = (r + a) >>> 1;
    e[t] < n ? (a = t) : (r = t);
  }
  let s = e[a],
    o = t[a],
    l = e[r] - e[a],
    c = t[r] - t[a];
  return l ? o + ((n - s) * c) / l : o + (n - s);
}
async function lH(e) {
  let t = tw("/api/video-points"),
    n = await fetch(`${t}?songId=${e}`);
  n4(n);
  let i = await n.json();
  if (!i) throw new tE(404, "No video points found for that song");
  return i;
}
async function lj(e, t, n) {
  let i = tw("/api/video-points"),
    r = await n5(i, { songId: e, videoId: t, points: n });
  n4(r);
}
let lG = null;
async function lW() {
  try {
    if (lG && Date.now() - lG.date < 3e5 && Array.isArray(lG.songs))
      return lG.songs;
    let e = tw("/api/video-points/songs"),
      t = await fetch(e);
    n4(t);
    let n = await t.json();
    return N && (lG = { songs: n, date: Date.now() }), n;
  } catch (e) {
    return console.log(e), [];
  }
}
let lq = (e) => {
  {
    let i;
    function t() {
      i?.forEach((e) => e());
    }
    function n(t) {
      if (!t.video.player) {
        let n = new lV({
          onPause: () => {
            let t = e.get(),
              { cursor: n, loopStart: i, loopEnd: r } = t.cursor.position;
            e.dispatch("player/togglePlay", !1),
              e.dispatch("cursor/move", {
                cursor: n,
                loopStart: i,
                loopEnd: r,
              });
          },
        });
        return { video: { ...t.video, player: n } };
      }
    }
    i = [
      e.on("meta/load:processing", n),
      e.on("meta/load:processing", t),
      e.on("meta/load:done", n),
      e.on("meta/load:done", t),
    ];
  }
  e.on("meta/load:processing", (e, t) => {
    let { songHasChanged: n } = t;
    if (n)
      return {
        video: {
          ...e.video,
          current: null,
          songId: 0,
          isFailed: !1,
          isNetworkFailed: !1,
          isNotFound: !1,
        },
      };
  }),
    e.on("meta/load:done", async (t, n) => {
      let { current: i } = n;
      if (!iT(i, t.device.country)) return;
      let r = i.songId,
        a = new tH();
      try {
        let n = t.video.loading;
        if (n) {
          if (r === n.songId) return;
          n.ac.abort();
        }
        if (!t.video.isFailed && t.video.current && r === t.video.songId) {
          e.dispatch("video/load:done", {
            songId: r,
            current: t.video.current,
          });
          return;
        }
        await e.dispatch("video/load:processing", { songId: r, ac: a });
        let i = await lH(r, a.signal);
        if (!i || a.signal.aborted) return;
        (i.videoOffset = i.points[0]),
          await e.dispatch("video/load:done", { songId: r, current: i });
        let s =
          t.demo.active &&
          ot(t.demo) &&
          "play-along" === t.demo.requestedFeature;
        s && (await e.dispatch("player/toggleVideo", !0));
      } catch (t) {
        if (a.signal.aborted) return;
        e.dispatch("video/load:error", { songId: r, error: t });
      }
    }),
    e.on("video/load:processing", (e, t) => {
      let { songId: n, ac: i } = t;
      return { video: { ...e.video, loading: { songId: n, ac: i } } };
    }),
    e.on("video/load:done", (e, t) => {
      let { songId: n, current: i } = t;
      return {
        video: {
          ...e.video,
          current: i,
          songId: n,
          isFailed: !1,
          isNetworkFailed: !1,
          isNotFound: !1,
          loading: null,
        },
      };
    }),
    e.on("video/load:error", (e, t) => {
      let { songId: n, error: i } = t;
      return {
        video: {
          ...e.video,
          current: null,
          songId: n,
          isFailed: !0,
          isNetworkFailed: i instanceof tE && 0 === i.status,
          isNotFound: i instanceof tE && (404 === i.status || 400 === i.status),
          loading: null,
        },
      };
    }),
    e.on("video/load:done", (e, t) => {
      let { current: n } = t,
        i = n.points.map((e) => (e - n.videoOffset) * 1e3);
      if (
        e.part.current &&
        i.length <= e.part.current.progression.length &&
        i.length >= 2
      ) {
        let t = i[i.length - 1] - i[i.length - 2];
        for (; i.length <= e.part.current.progression.length; ) {
          let e = i[i.length - 1];
          i.push(e + t);
        }
      }
      e.video.player?.setVideoPoints(i);
    }),
    e.on("part/load:done", (e, t) => {
      let { current: n } = t,
        i = lm(n);
      e.video.player?.setAudioPoints(i);
    }),
    e.on("part/load:error", (e, t) => {
      let { error: n } = t;
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(n),
        console.error(n);
    }),
    e.on("route/change", (e) => {
      e.route.isPanel && e.video.player?.pause?.();
    }),
    e.on("video/init", (e) => ({
      video: {
        ...e.video,
        current: {
          songId: e.meta.current.songId,
          videoId: null,
          videoOffset: 0,
          points: [],
        },
      },
    })),
    e.on("video/changeVideoId", (e, t) => {
      let { video: n } = e;
      return { video: { ...n, current: { ...n.current, videoId: t } } };
    }),
    e.on("video/applyVideoBarPoints", (e, t) => {
      let { video: n } = e,
        { points: i } = t,
        r = i.map((e) => (e - i[0]) * 1e3);
      return (
        n.player?.setVideoPoints(r),
        {
          video: {
            ...n,
            current: { ...n.current, videoOffset: i[0], points: i },
          },
        }
      );
    }),
    e.on("video/saveVideoPoints", async (e, t) => {
      let { video: n } = e,
        { points: i } = t,
        r = n.current?.songId,
        a = n.current?.videoId;
      r && a && i && (await lj(r, a, i));
    });
};
function lX(e) {
  return "android" === e.name.toLowerCase();
}
function lY(e) {
  return "ios" === e.name.toLowerCase();
}
function lK(e) {
  return (
    (!!e.isTablet && "ios" === e.os.name.toLowerCase()) ||
    (e.isDesktop && "Mac OS X" === e.os.name && "ontouchstart" in window)
  );
}
let lJ = (e) => {},
  lZ = (e) => ({
    isSmall: "small" === e,
    isMedium: "medium" === e,
    isLarge: "large" === e,
    isWide: "wide" === e,
  }),
  lQ = (e) => {
    e.on("screen/resize", (e, t) => {
      let { screen: n, viewport: i } = t;
      return { screen: { ...e.screen, screen: n, viewport: i, ...lZ(n) } };
    });
  },
  l1 = (e) => {
    e.on("consent/view", (e, t) => {
      let { suite: n, view: i, options: r } = t;
      return { consent: { suite: n, view: i, options: r } };
    });
  };
function l0(e) {
  let t = ed(document.location.search.substring(1));
  e.length ? (t.pattern = e) : delete t.pattern,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${ii(t)}`
    );
}
function l2(e) {
  let t = ed(document.location.search.substring(1));
  e.length && e !== t9 ? (t.inst = l3(e)) : delete t.inst,
    history.replaceState(
      null,
      "",
      `${document.location.pathname || "/"}${ii(t)}`
    );
}
function l5(e, t, n) {
  let i = n;
  return (
    t.length && t !== t9 && (i = { pattern: n.pattern, inst: l3(t) }),
    `${e}${ii(i)}`
  );
}
function l4(e) {
  switch (e) {
    case "guitar":
      return t8;
    case "drum":
      return t7;
    case "bass":
      return t6;
    default:
      return t9;
  }
}
function l3(e) {
  switch (e) {
    case t8:
      return "guitar";
    case t7:
      return "drum";
    case t6:
      return "bass";
    default:
      return "";
  }
}
function l9(e, t) {
  return ii({
    pattern: e || void 0,
    inst: t && t.instrument !== t9 && t.instrument ? l3(t.instrument) : void 0,
  });
}
function l8(e, t) {
  try {
    let n = document.getElementById(t);
    if (!n) return;
    let i = n.getBoundingClientRect(),
      { marginTop: r, marginBottom: a } = getComputedStyle(n),
      s = i.height + parseInt(r, 10) + parseInt(a, 10);
    if (i.top + s < 0) {
      let t = document.getElementById(e);
      t && "function" == typeof t.scroll && t.scroll(0, s);
    }
  } catch (e) {
    console.error(e);
  }
}
let l6 = 1e3,
  l7 = (e) => {
    async function t(t, n) {
      if (n && !t.artist.songs.hasMore) return;
      let i = t.artist.id,
        r = t.artist.pattern,
        a = t.artist.filters,
        s = 0,
        o = null;
      n &&
        t.artist.songs.pattern === t.artist.pattern &&
        nG(t.artist.songs.filters, t.artist.filters) &&
        (s = (o = t.artist.songs.list).length);
      let l = new tH();
      try {
        e.dispatch("artist/load:processing", {
          id: i,
          pattern: r,
          filters: a,
          ac: l,
        });
        let n = await ip(i, r, nV(a), l.signal, 50, s);
        if (l.signal.aborted) return;
        let c = t.experiments.admin_video_list?.segment === "on";
        if (c && tg(t.user, V.USE_VIDEO_SYNCHRONISATION)) {
          let e = await lW();
          n = n.map((t) => ({ ...t, hasVideo: e.includes(t.songId) }));
        }
        let d = t.artist.defaultInstrument;
        nz(a) || (n = nj(n, d));
        let u = null;
        if (!t.artist.artists[i]) {
          if (n.length) u = { artistId: n[0].artistId, name: n[0].artist };
          else if (((u = await iu(i, l.signal)), l.signal.aborted)) return;
        }
        let p = (o ? o.length : 0) + n.length,
          h = 50 === n.length && p < 1e3;
        e.dispatch("artist/load:done", {
          id: i,
          songs: o ? [...o, ...n] : n,
          hasMore: h,
          artist: u,
          pattern: r,
          filters: a,
          defaultInstrument: d,
        }),
          N &&
            !o &&
            requestAnimationFrame(() => {
              l8("artist-wrap", "top");
            });
      } catch (t) {
        if (l.signal.aborted) return;
        console.error(t),
          e.dispatch("artist/load:error", {
            id: i,
            error: t,
            pattern: r,
            filters: a,
          });
      }
    }
    let n = (e) => t(e, !1);
    e.on("artist/load:processing", (e, t) => {
      let { id: n, pattern: i, filters: r, ac: a } = t,
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
            pattern: i,
            filters: r,
          }),
        {
          artist: {
            ...e.artist,
            songs: o,
            loading: { id: n, filters: r, pattern: i, ac: a },
          },
        }
      );
    }),
      e.on("artist/load:done", (e, t) => {
        let {
            id: n,
            songs: i,
            hasMore: r,
            artist: a,
            pattern: s,
            filters: o,
            defaultInstrument: l,
          } = t,
          c = e.artist.loading;
        if (!c || c.id !== n || !nG(c.filters, o) || c.pattern !== s) return;
        let d = e.artist.artists;
        return (
          a && (d = { ...d, [a.artistId]: a.name }),
          {
            artist: {
              ...e.artist,
              songs: {
                id: n,
                list: i,
                defaultInstrument: l,
                hasMore: r,
                pattern: s,
                filters: o,
              },
              artists: d,
              loading: null,
            },
          }
        );
      }),
      e.on("artist/load:error", (e, t) => {
        let { id: n, error: i, pattern: r, filters: a } = t,
          s = e.artist.loading;
        if (s && s.id === n && nG(s.filters, a) && s.pattern === r)
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
        let { id: n, pattern: i, filters: r } = t;
        return { artist: { ...e.artist, pattern: i, filters: r, id: n } };
      }),
      e.on("artist/filter", n),
      e.on("artist/fillAdminData", (e) => {
        let t = e.experiments.admin_video_list?.segment === "on";
        t && tg(e.user, V.USE_VIDEO_SYNCHRONISATION) && n(e);
      }),
      e.on("songs/default", (e, t) => {
        let { instrumentId: n } = t,
          i = nH(n),
          r = e.artist.songs.list;
        return (
          nz(e.artist.songs.filters) ||
            e.artist.songs.defaultInstrument === i ||
            (r = nj(e.artist.songs.list, i)),
          {
            artist: {
              ...e.artist,
              songs: { ...e.artist.songs, list: r, defaultInstrument: i },
              defaultInstrument: i,
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
        let { instrument: n, tuning: i } = t;
        return { artist: { ...e.artist, filters: nD(e.artist.filters, n, i) } };
      }),
      e.on("artist/filter/tuning", n),
      e.on("artist/filter/reset", (e) => ({
        artist: { ...e.artist, filters: nw },
      })),
      e.on("artist/filter/reset", n),
      e.on("route/change", (t, n) => {
        let { route: i, query: r } = n;
        if (i?.page === "artist") {
          let n = +i.artistId,
            a = r?.pattern || "",
            s = {
              instrument: r?.inst ? l4(r.inst) : t9,
              tunings: t.artist.filters.tunings,
              difficulty: t.artist.filters.difficulty,
            };
          (t.artist.songs.list.length &&
            t.artist.songs.id === n &&
            t.artist.songs.pattern === a &&
            nG(t.artist.songs.filters, s)) ||
            e.dispatch("artist/filter", { id: n, pattern: a, filters: s });
        }
      });
  };
var ce = c();
let ct = h;
function cn() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  let i = d(ce),
    r = u({});
  return (
    h(
      () =>
        i.on("@changed", (e, n) => {
          t.some((e) => e in n) && r[1]({});
        }),
      []
    ),
    p(() => {
      let e = i.get(),
        n = { dispatch: i.dispatch, store: i };
      for (let i of t) n[i] = e[i];
      return n;
    }, [r[0]])
  );
}
let ci = (e) => ({
    id: +e.id,
    uid: e.uid,
    name: e.name,
    email: e.email,
    plan: e.plan,
    subscription: e.subscription,
    permissions: e.permissions,
    androidLicence: e.sra_license,
  }),
  cr = (e) => ({
    songId: e.id,
    artistId: e.artist.id,
    artist: e.artist.name,
    title: e.title,
    defaultTrack: 0,
    tracks: [],
  }),
  ca = (e) => ({
    revisionId: +e.id,
    songId: +e.song.id,
    artist: e.song.artist.name,
    title: e.song.title,
  }),
  cs = {};
function co(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(Error("Failed to load " + this.src), e);
    });
}
function cl(e, t) {
  e.onreadystatechange = function () {
    ("complete" === this.readyState || "loaded" === this.readyState) &&
      ((this.onreadystatechange = null), t(null, e));
  };
}
function cc(e, t) {
  let n = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("script");
  (i.async = !0), (i.defer = !0), (i.src = e);
  let r = "onload" in i ? co : cl;
  r(i, t), i.onload || co(i, t), n.appendChild(i);
}
function cd(e, t) {
  return (
    cs[t] ||
      (cs[t] = new Promise((n, i) => {
        cc(e, (e) => {
          (window[t] = !e), e ? i(e) : n();
        });
      })),
    cs[t]
  );
}
let cu = ["signin", "signup", "subscribePlus", "updateCard", "help"];
function cp(e, t) {
  document.body &&
    (e && cu.includes(t)
      ? (document.body.classList.add("grecaptcha-visible"), ch())
      : document.body.classList.remove("grecaptcha-visible"));
}
function ch() {
  return cd(
    `https://www.google.com/recaptcha/api.js?render=${window.__RECAPTCHA_KEY__}`,
    "__LOADED_RECAPTCHA__"
  );
}
async function cf(e) {
  try {
    return (
      window.grecaptcha || (await ch()),
      await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: e })
    );
  } catch (e) {}
}
async function cg() {
  let e = tw("/auth/billing/settings"),
    t = await n2(e);
  return await n7(t), t.json();
}
async function cm(e) {
  let t = tw("/auth/coupon"),
    n = await n5(t, { coupon: e });
  return await n7(n), ci(await n.json());
}
async function cy() {
  let e = tw("/auth/coupon/android"),
    t = await n5(e);
  return await n7(t), ci(await t.json());
}
async function cv(e, t) {
  let n = tw(`/auth/billing/${e}`),
    i = await cf(e),
    r = await n5(n, t, { "X-Recaptcha-Token": i });
  return await n9(r, e), await n7(r), ci(await r.json());
}
async function cb() {
  let e = tw("/auth/billing/cancel"),
    t = await n5(e);
  return await n7(t), ci(await t.json());
}
async function cw(e) {
  let t = tw("/auth/billing/migrate"),
    n = await n5(t, e);
  return await n7(n), n.json();
}
function cS(e) {
  try {
    return JSON.parse(decodeURIComponent(cx(e)));
  } catch (e) {}
  return null;
}
function cx(e) {
  let t = e + "=",
    n = document.cookie.split(";");
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    for (; " " === i.charAt(0); ) i = i.substring(1, i.length);
    if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
  }
  return null;
}
function ck(e, t, n) {
  let i = new Date();
  i.setTime(i.getTime() + 31536e6),
    (t = encodeURIComponent(t)),
    (document.cookie = `${e}=${t};expires=${i.toUTCString()};path=/${
      n ? ";secure" : ""
    }`);
}
let cC = "sr_plus_migration",
  cT = [
    "AUD",
    "BRL",
    "CAD",
    "CLP",
    "CZK",
    "ILS",
    "JPY",
    "KRW",
    "MNX",
    "NZD",
    "PLN",
    "SEK",
    "SGD",
    "ZAR",
    "TRY",
  ];
function cE(e) {
  let { user: t, payment: n } = e,
    i = cx(cC);
  if (
    (i && +i > 1) ||
    !ei(t) ||
    e.user.profile?.subscription?.type !== "braintree" ||
    "plus" !== t.profile.subscription.plan.id
  )
    return !1;
  let r = !!("USD" === n.plan.currency && 9 > +n.plan.price),
    a = !!("EUR" === n.plan.currency && 9 > +n.plan.price),
    s = cT.includes(n.plan.currency);
  return r || a || s;
}
function c_() {
  let { dispatch: e, store: t } = cn(),
    n = t.get();
  f(() => {
    cP(n, e);
  }, []);
}
async function cP(e, t) {
  if (!e.payment.loading && !e.payment.ready)
    try {
      t("payment/setup");
      let [e, n] = await Promise.all([import("./dropin.a465bfcf.js"), cg()]);
      t("payment/setup:done", { module: e, settings: n });
    } catch (e) {
      t("payment/setup:error", e);
    }
}
let cI = (e) => {
    e.on("payment/setup", (e) => ({
      payment: { ...e.payment, loading: !0, ready: !1 },
    })),
      e.on("payment/setup:done", (e, t) => {
        let { module: n, settings: i } = t;
        return {
          payment: {
            ...e.payment,
            loading: !1,
            ready: !0,
            error: null,
            module: n,
            token: i.token,
            plan: i.plan,
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
      e.on("user/signIn", (t) => cP(t, e.dispatch)),
      e.on("user/signUp", (t) => cP(t, e.dispatch)),
      e.on("user/googleSignIn", (t) => cP(t, e.dispatch)),
      e.on("payment/popup:show", (e) => ({
        payment: { ...e.payment, showMigrationPopup: !0 },
      })),
      e.on(
        "payment/popup:hide",
        (e) => (
          ck(cC, 2), { payment: { ...e.payment, showMigrationPopup: !1 } }
        )
      );
  },
  cL = {
    cypress: [],
    drum_standard_notation: [],
    new_sound: [],
    sound_v4: [],
    paid_fingerings: !0,
    state_persistence: !0,
    search_admin: !1,
    editor_autoreplace: !0,
    admin_video_list: !1,
    zoom_shortcuts: !0,
    revisions_in_srwm: !0,
    keep_srwm_toolbar_upon_play: !0,
  },
  cN = ["drum_standard_notation", "new_sound"],
  cA = (e) => (e & (e - 1)) == 0;
for (let e of Object.keys(cL)) {
  let t = cL[e];
  if (t && Array.isArray(t) && ((z = t.length) & (z - 1)) != 0)
    throw Error("Experiment variations can't be evenly distributed");
}
let cM = "exp";
function cB(e, t) {
  return Object.keys(e).reduce(
    (n, i) => (e[i].status === t && (n[i] = e[i].segment), n),
    {}
  );
}
let cD = (e) => {
  e.on("experiments/activate", (t, n) => {
    let { experimentName: i, payload: r = {}, sendEvent: a = !0 } = n;
    if ("bot" === t.device.type) return;
    let s = cS("exp") || { active: {}, pending: {} };
    if (s.active[i] || !s.pending[i]) return;
    let o = { ...t.experiments },
      l = s.pending[i];
    o[i] = { status: "active", segment: t.isTestMode ? "off" : l };
    let c = { active: cB(o, "active"), pending: cB(o, "pending") };
    return (
      ck("exp", JSON.stringify(c), !0),
      a
        ? e.dispatch("curiosity/enteredExperiment", {
            experiment: i,
            payload: { ...r, Value: o[i].segment },
          })
        : console.log(
            `Experiment ${i} activated with segment ${o[i].segment}. EE skipped.`
          ),
      { experiments: o }
    );
  });
};
async function cO(e, t) {
  try {
    e("favorites/load:processing");
    let n = await ih(t);
    e("favorites/load:done", n);
  } catch (t) {
    console.error("favorites/load:error", t), e("favorites/load:error", t);
  } finally {
    e("meta/setWasFavoriteOnServerRender", void 0);
  }
}
let cR = (e, t) => {
    let n = e.findIndex((e) => e.songId === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  },
  cz = (e, t) => ir([...e, t]),
  c$ = (e, t) => {
    for (let n of t) e.every((e) => e.songId != n.songId) && e.push(n);
    return ir(e);
  },
  cF = (e) => {
    e.on("user/signIn", async () => cO(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => cO(e.dispatch, void 0)),
      e.on("favorites/add", async (t, n) => {
        let { songId: i, song: r } = n,
          a = o2();
        try {
          e.dispatch("favorites/add:processing", {
            songId: i,
            song: r,
            actionId: a,
          }),
            await ig(i),
            e.dispatch("favorites/add:done", {
              songId: i,
              song: r,
              actionId: a,
            });
        } catch (t) {
          console.error(t),
            e.dispatch("favorites/add:error", {
              songId: i,
              song: r,
              actionId: a,
            });
        }
      }),
      e.on("favorites/add:processing", (e, t) => {
        let { song: n, actionId: i } = t;
        return {
          favorites: {
            ...e.favorites,
            favorites: cz(e.favorites.favorites, n),
            actionId: i,
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
        let { songId: n, actionId: i } = t;
        return e.favorites.actionId === i
          ? {
              favorites: {
                ...e.favorites,
                favorites: cR(e.favorites.favorites, n),
                actionId: "",
                loading: !1,
              },
            }
          : null;
      }),
      e.on("favorites/delete", async (t, n) => {
        let i = o2(),
          r = t.favorites.favorites.find((e) => e.songId === n);
        if (r)
          try {
            e.dispatch("favorites/delete:processing", {
              songId: n,
              song: r,
              actionId: i,
            }),
              await im(n),
              e.dispatch("favorites/delete:done", {
                songId: n,
                song: r,
                actionId: i,
              });
          } catch (t) {
            console.error(t),
              e.dispatch("favorites/delete:error", {
                songId: n,
                song: r,
                actionId: i,
              });
          }
      }),
      e.on("favorites/delete:processing", (e, t) => {
        let { songId: n, actionId: i } = t;
        return {
          favorites: {
            ...e.favorites,
            favorites: cR(e.favorites.favorites, n),
            actionId: i,
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
        let { song: n, actionId: i } = t;
        return e.favorites.actionId === i
          ? {
              favorites: {
                ...e.favorites,
                favorites: cz(e.favorites.favorites, n),
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
          favorites: c$(t, e.favorites.favorites),
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
        favorites: { ...e.favorites, filters: nM(e.favorites.filters, t) },
      })),
      e.on("favorites/filter/instrument", (e, t) => ({
        favorites: { ...e.favorites, filters: nB(e.favorites.filters, t) },
      })),
      e.on("favorites/filter/tuning", (e, t) => {
        let { instrument: n, tuning: i } = t;
        return {
          favorites: { ...e.favorites, filters: nD(e.favorites.filters, n, i) },
        };
      }),
      e.on("favorites/filter/reset", (e) => ({
        favorites: { ...e.favorites, filters: nw },
      }));
  };
async function cV(e) {
  let t = tw("/api/setlists"),
    n = await fetch(t, { credentials: "include" });
  n4(n);
  let i = await n.json(),
    r = i.map((e) => ({ name: e.name, id: e.id, songs: is(ir(e.songs)) }));
  return r;
}
async function cU(e) {
  let t = tw("/api/setlist"),
    n = await n5(t, { name: e });
  return n4(n), n.json();
}
async function cH(e) {
  let t = tw(`/api/setlist/${e}`),
    n = await fetch(t, { method: "delete", credentials: "include" });
  return n4(n), n.json();
}
async function cj(e, t) {
  let n = tw(`/api/setlist/song/${e}`),
    i = await n5(
      n,
      { songId: t },
      {},
      { method: "delete", credentials: "include" }
    );
  return n4(i), i.json();
}
async function cG(e, t) {
  let n = tw(`/api/setlist/song/${e}`),
    i = await n5(n, { songId: t });
  return n4(i), i.json();
}
let cW = (e, t) => {
    let n = e.findIndex((e) => e.id === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  },
  cq = (e, t) => {
    let n = e.findIndex((e) => e.songId === t);
    return e.slice(0, n).concat(e.slice(n + 1));
  };
async function cX(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  try {
    e("setlists/load:processing");
    let n = await cV(t);
    e("setlists/load:done", n);
  } catch (t) {
    console.error(t), e("setlists/load:error", t);
  }
}
async function cY(e, t) {
  try {
    e("setlists/create:processing", { name: t });
    let n = await cU(t);
    e("setlists/create:done", n.id);
  } catch (t) {
    console.error(t), e("setlists/create:error");
  }
}
async function cK(e, t, n) {
  try {
    e("setlists/remove:processing", { id: t, name: n }),
      await cH(t),
      e("setlists/remove:done");
  } catch (t) {
    console.error(t), cX(e);
  }
}
let cJ = (e) => {
    e.on("user/signIn", async () => cX(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => cX(e.dispatch, void 0)),
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
        let { createSetForm: n, loading: i } = t.setlists;
        !i && n && "" !== n.name.trim() && (await cY(e.dispatch, n.name)),
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
        let { createSetForm: n, loading: i } = t.setlists;
        return (
          !i &&
            n &&
            ("" !== n.name.trim()
              ? cY(e.dispatch, n.name)
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
          i = n.find((e) => "new" === e.id);
        return (
          i && (i.id = t),
          { setlists: { ...e.setlists, setlists: n, loading: !1 } }
        );
      }),
      e.on("setlists/create:error", (e) => ({
        setlists: {
          ...e.setlists,
          setlists: cW(e.setlists.setlists, "new"),
          loading: !1,
        },
      })),
      e.on("setlists/initRemove", (e, t) => {
        let { setlists: n } = e.setlists,
          i = n.find((e) => e.id === t);
        return i ? { setlists: { ...e.setlists, removeSetId: t } } : null;
      }),
      e.on("setlists/confirmRemove", (t, n) => {
        let { removeSetId: i, loading: r, setlists: a } = t.setlists;
        if (!r && i === n) {
          let t = a.find((e) => e.id === n);
          t && cK(e.dispatch, n, t.name);
        }
        return null;
      }),
      e.on("setlists/remove:processing", (e, t) => {
        let { id: n } = t;
        return {
          setlists: {
            ...e.setlists,
            setlists: cW(e.setlists.setlists, n),
            activeSetId: void 0,
            loading: !0,
          },
        };
      }),
      e.on("setlists/remove:done", (e) => ({
        setlists: { ...e.setlists, loading: !1 },
      })),
      e.on("setlists/removeSong", async (t, n) => {
        let { songId: i, setlistId: r } = n,
          { setlists: a, loading: s } = t.setlists,
          o = a.find((e) => e.id === r);
        if (!s && o && o.songs) {
          let t = o.songs.find((e) => e.songId === i);
          if (t)
            try {
              e.dispatch("setlists/removeSong:processing", {
                song: t,
                songId: i,
                setlist: o,
                setlistId: r,
              }),
                await cj(r, i),
                e.dispatch("setlists/removeSong:done");
            } catch (t) {
              console.error(t), cX(e.dispatch);
            }
        }
      }),
      e.on("setlists/removeSong:processing", (e, t) => {
        let { songId: n, setlistId: i } = t,
          { setlists: r } = e.setlists,
          a = r.find((e) => e.id === i);
        return a
          ? ((a.songs = cq(a.songs, n)),
            { setlists: { ...e.setlists, setlists: [...r], loading: !0 } })
          : null;
      }),
      e.on("setlists/removeSong:done", (e) => ({
        setlists: { ...e.setlists, loading: !1 },
      })),
      e.on("setlists/addSong", async (t, n) => {
        let { song: i, setlistId: r } = n,
          { setlists: a, loading: s } = t.setlists,
          o = a.find((e) => e.id === r);
        if (!s && o && !o.songs.find((e) => e.songId === i.songId))
          try {
            e.dispatch("setlists/addSong:processing", {
              song: i,
              setlistId: r,
              setlist: o,
            }),
              await cG(r, i.songId),
              e.dispatch("setlists/addSong:done");
          } catch (t) {
            console.error(t), cX(e.dispatch);
          }
      }),
      e.on("setlists/addSong:processing", (t, n) => {
        let { song: i, setlistId: r } = n,
          { setlists: a, markedIds: s } = t.setlists,
          o = [...a],
          l = o.find((e) => e.id === r);
        if (l) {
          l.songs = [i, ...l.songs];
          let n = [...s];
          return (
            s.includes(r) ||
              (n.push(r),
              setTimeout(() => {
                e.dispatch("setlists/flushMark", r);
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
          let i = n.findIndex((e) => e === t);
          return {
            setlists: {
              ...e.setlists,
              markedIds: n.slice(0, i).concat(n.slice(i + 1)),
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
  cZ = (e) => (e.layer.layer ? { layer: { layer: null } } : null),
  cQ = (e) => {
    e.on("layer/show", (e, t) => ({ layer: { layer: t } })),
      e.on("print/disable", cZ),
      e.on("route/change", cZ),
      e.on("layer/hide", cZ);
  };
async function c1(e, t, n) {
  try {
    e("revisions/load:processing", { songId: t });
    let i = await nQ(t, n);
    e("revisions/load:done", { songId: t, revisions: i });
  } catch (i) {
    if (n.aborted) return;
    e("revisions/load:error", { songId: t, error: i });
  }
}
let c0 = (e) => {
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
        let { revisions: n, songId: i } = t;
        if (e.meta.songId === i)
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
        let { error: n, songId: i } = t;
        if (e.meta.songId === i)
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
  c2 = 500,
  c5 = 1e4,
  c4 = (e) => {
    async function t(t, n) {
      if (n && !t.songs.songs.hasMore) return;
      let i = t.songs.pattern,
        r = t.songs.filters,
        a = 0,
        s = null;
      n &&
        t.songs.songs.pattern === t.songs.pattern &&
        nG(t.songs.songs.filters, t.songs.filters) &&
        (a = (s = t.songs.songs.list).length);
      let o = t.experiments.search_admin?.segment === "on",
        l = 500,
        c = new tH();
      try {
        e.dispatch("songs/load:processing", { pattern: i, filters: r, ac: c });
        let n = await id(i, nV(r), o, c.signal, 50, a);
        if (c.signal.aborted) return;
        let d = t.experiments.admin_video_list?.segment === "on";
        if (d && tg(t.user, V.USE_VIDEO_SYNCHRONISATION)) {
          let e = await lW();
          (n = n.map((t) => ({ ...t, hasVideo: e.includes(t.songId) }))),
            (l = 1e4);
        }
        let u = t.songs.defaultInstrument;
        nz(r) || (n = nj(n, u));
        let p = (s ? s.length : 0) + n.length,
          h = 50 === n.length && p < l;
        e.dispatch("songs/load:done", {
          songs: s ? [...s, ...n] : n,
          hasMore: h,
          defaultInstrument: u,
          pattern: i,
          filters: r,
        }),
          N &&
            !s &&
            requestAnimationFrame(() => {
              l8("search-wrap", "top");
            });
      } catch (t) {
        if (c.signal.aborted) return;
        console.error(t),
          e.dispatch("songs/load:error", { error: t, pattern: i, filters: r });
      }
    }
    let n = (e) => t(e, !1);
    e.on("songs/load:processing", (e, t) => {
      let { pattern: n, filters: i, ac: r } = t,
        a = e.songs.loading;
      return (
        a && e.songs.loading.ac.abort(),
        { songs: { ...e.songs, loading: { filters: i, pattern: n, ac: r } } }
      );
    }),
      e.on("songs/load:done", (e, t) => {
        let {
            songs: n,
            hasMore: i,
            pattern: r,
            filters: a,
            defaultInstrument: s,
          } = t,
          o = e.songs.loading;
        if (o && nG(o.filters, a) && o.pattern === r)
          return {
            songs: {
              ...e.songs,
              songs: {
                list: n,
                defaultInstrument: s,
                hasMore: i,
                pattern: r,
                filters: a,
              },
              loading: null,
            },
          };
      }),
      e.on("songs/load:error", (e, t) => {
        let { error: n, pattern: i, filters: r } = t,
          a = e.songs.loading;
        if (a && nG(a.filters, r) && a.pattern === i)
          return { songs: { ...e.songs, loading: null } };
      }),
      e.on("songs/filter", (e, t) => {
        let { pattern: n, filters: i } = t;
        return { songs: { ...e.songs, pattern: n, filters: i } };
      }),
      e.on("songs/filter", n),
      e.on("songs/fillAdminData", (e) => {
        let t = e.experiments.admin_video_list?.segment === "on";
        t && tg(e.user, V.USE_VIDEO_SYNCHRONISATION) && n(e);
      }),
      e.on("songs/default", (e, t) => {
        let { instrumentId: n } = t,
          i = nH(n),
          r = e.songs.songs.list;
        return (
          nz(e.songs.songs.filters) ||
            e.songs.songs.defaultInstrument === i ||
            (r = nj(e.songs.songs.list, i)),
          {
            songs: {
              ...e.songs,
              songs: { ...e.songs.songs, list: r, defaultInstrument: i },
              defaultInstrument: i,
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
        let { instrument: n, tuning: i } = t;
        return { songs: { ...e.songs, filters: nD(e.songs.filters, n, i) } };
      }),
      e.on("songs/filter/tuning", n),
      e.on("songs/filter/reset", (e) => ({
        songs: { ...e.songs, filters: nw },
      })),
      e.on("songs/filter/reset", n),
      e.on("route/change", (t, n) => {
        let { route: i, query: r } = n;
        if (i?.page === "search") {
          let n = r?.pattern || "",
            i = {
              instrument: r?.inst ? l4(r.inst) : t9,
              tunings: t.songs.filters.tunings,
              difficulty: t.songs.filters.difficulty,
            };
          (t.songs.songs.list.length &&
            t.songs.songs.pattern === n &&
            nG(t.songs.songs.filters, i)) ||
            e.dispatch("songs/filter", { pattern: n, filters: i });
        }
      });
  };
async function c3(e, t) {
  let n = tw("/api/song"),
    i = new FormData();
  i.append("file", e.file),
    i.append("title", e.title),
    i.append("artist", e.artist),
    i.append("difficulty", e.difficulty);
  let r = e.file.name.split(".").pop(),
    a = await fetch(n, {
      signal: t,
      method: "post",
      credentials: "include",
      body: i,
    });
  if (t && t.aborted) return { songSubmitted: !1, song: null, ext: r };
  await ie(a), await it(a);
  let s = cr(await a.json());
  return { songSubmitted: !!a.ok, song: s, ext: r };
}
async function c9(e, t) {
  let n = tw("/api/revision"),
    i = new FormData();
  i.append("file", e.file),
    i.append("songId", e.songId),
    i.append("summary", e.summary),
    e.force && i.append("force", e.force.toString());
  let r = e.file.name.split(".").pop(),
    a = await fetch(n, {
      signal: t,
      method: "post",
      credentials: "include",
      body: i,
    });
  if (t && t.aborted) return;
  await ie(a), await it(a);
  let s = ca(await a.json());
  return { revisionSubmitted: !!a.ok, revision: s, ext: r };
}
async function c8(e) {
  let t = tw("/api/revision/merge-edits"),
    n = await n5(t, e);
  await ie(n), await it(n);
  let i = ca(await n.json());
  return { revisionSubmitted: !!n.ok, revision: i, ext: "gp" };
}
let c6 = ["gp3", "gp4", "gp5", "gpx", "gp"],
  c7 = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null,
  };
async function de(e, t, n) {
  try {
    let i = await c3(t, n);
    if (n && n.aborted) return;
    if ((e("upload/song:uploaded", i), i.songSubmitted)) {
      let t = await n1(i.song.songId);
      t && e("navigate", e6(t, 0));
    }
  } catch (t) {
    throw (e("upload/song:error", { error: t }), t);
  }
}
async function dt(e, t, n) {
  try {
    let i = await c9(t, n);
    if (n && n.aborted) return;
    if ((e("upload/revision:uploaded", i), i.revisionSubmitted)) {
      let t = await n1(i.revision.songId, i.revision.revisionId);
      t && e("navigate", e6(t, 0, t.revisionId));
    }
  } catch (t) {
    throw (e("upload/revision:error", { error: t }), t);
  }
}
let dn = (e) => {
    e.on("upload/song:uploaded", (e, t) => {
      let { songSubmitted: n, song: i } = t;
      return {
        uploads: { ...e.uploads, songError: null, songSubmitted: n, song: i },
      };
    }),
      e.on("upload/reset", () => ({ uploads: c7 })),
      e.on("upload/song:error", (e, t) => {
        let { error: n } = t;
        return { uploads: { ...e.uploads, songError: n } };
      }),
      e.on("upload/revision:uploaded", (e, t) => {
        let { revisionSubmitted: n, revision: i } = t;
        return {
          uploads: {
            ...e.uploads,
            revisionError: null,
            revisionSubmitted: n,
            revision: i,
          },
        };
      }),
      e.on("upload/revision:merged", async (t, n) => {
        let { revisionSubmitted: i, revision: r } = n;
        if (i) {
          let t = await n1(r.songId, r.revisionId);
          t && e.dispatch("navigate", e6(t, 0, t.revisionId)),
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
  di = (e) => {
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
})(et || (et = {}));
let dr = "hasSeenAttractors",
  da = "blockedAttractors",
  ds = [et.UT_RECORDER],
  dl = { ignoreSingleAppearance: !1, ignoreDailyTimespan: !1 };
function dc(e) {
  let t = new Date(Date.now() - 864e5);
  return new Date(e) <= t;
}
function dd(e) {
  let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : new Date().toUTCString(),
    n = oI(dr) || {};
  (n[e] = t), oL(dr, n);
}
function du(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : new Date().toUTCString();
  window.__ACTIVE_ATTRACTOR__ === e &&
    (dd(e, t), (window.__ACTIVE_ATTRACTOR__ = null));
}
function dp() {
  return oI(dr) || {};
}
function dh() {
  return oI("blockedAttractors") || {};
}
function df(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dl;
  if (
    (console.log("attractor:", e, (t = { ...dl, ...t })),
    -1 !== window.location.search.indexOf("ut=on") && ds.includes(e))
  )
    return (window.__ACTIVE_ATTRACTOR__ = e), !0;
  if (window.__ACTIVE_ATTRACTOR__) return e === window.__ACTIVE_ATTRACTOR__;
  let n = !0,
    i = dp(),
    r = Object.keys(i);
  return (
    t.ignoreDailyTimespan || (n = r.reduce((e, t) => e && dc(i[t]), n)),
    !t.ignoreSingleAppearance && i[e] && (n = !1),
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
})(en || (en = {}));
let dg = new Map([
    ["slowdown", et.PROMO_CONTEXT_SLOWDOWN],
    ["loop", et.PROMO_CONTEXT_LOOP],
    ["no ads", et.PROMO_CONTEXT_NO_ADS],
    ["print", et.PROMO_CONTEXT_PRINT],
    ["mute", et.PROMO_CONTEXT_MUTE],
    ["solo", et.PROMO_CONTEXT_SOLO],
    ["pitch shift", et.PROMO_CONTEXT_RETUNE],
  ]),
  dm = "hasUnsubscribedFromPromo",
  dy = 1e4,
  dv = 2e4,
  db = 2e3;
function dw(e) {
  let t = new Date(Date.now() - 6048e5);
  return new Date(e) >= t;
}
let dS = (e, t) => {
  if (t.isTestMode && "promo" !== t.query.cyAllow) return !0;
  let n = oI(dm),
    i = !!t.promo.feature,
    r = 0 === t.curiosity.vpt10.count,
    a = n || ei(t.user) || i || r;
  return a;
};
function dx(e) {
  let { position: t } = e.cursor,
    n = e.part.current,
    i = [
      ...e.promo.playbackPositionEvents.filter(
        (e) => e.time > Date.now() - 12e4
      ),
    ],
    r = 0;
  if (n) {
    let e = si(n, t.cursor, "left"),
      a = `${n.revisionId}:${n.partId}:${e.measureLayout.measure.index}`;
    i.push({ time: Date.now(), key: a }),
      (r = i.filter((e) => e.key === a).length);
  }
  return { events: i, relatedEvents: r };
}
function dk(e) {
  let t = e.part.current,
    n = "other";
  t &&
    (eP(t.instrumentId) && (n = "guitar"),
    eI(t.instrumentId) && (n = "bass"),
    e_(t.instrumentId) && (n = "drums"));
  let i = [...e.promo.playbackTypeEvents, { time: Date.now(), type: n }],
    r = i.filter((e) => "bass" === e.type).length;
  return { events: i, bassEvents: r };
}
function dC(e) {
  let t = dp(),
    n = dh();
  return !(n[e] || dw(t[e])) && df(e, { ignoreSingleAppearance: !0 });
}
function dT(e, t) {
  e.device.isPhone &&
    e.player.canPlay &&
    e.player.shouldPlay &&
    t("player/stopPlay");
}
function dE(e, t) {
  let n = et.PROMO_CONTEXT_SLOWDOWN,
    i = !e.player.shouldPlay || !e.player.canPlay;
  if (i || dS(n, e)) return;
  let r = e.promo.feature,
    { events: a, relatedEvents: s } = dx(e);
  return (
    s >= 3 && dC(n) && ((r = "slowdown"), dT(e, t)),
    { promo: { ...e.promo, playbackPositionEvents: a, feature: r } }
  );
}
function d_(e, t) {
  let n = et.PROMO_CONTEXT_LOOP,
    i = !e.player.shouldPlay || !e.player.canPlay;
  if (i || dS(n, e)) return;
  let r = dp();
  if (!r[et.PROMO_CONTEXT_SLOWDOWN]) return;
  let a = e.promo.feature,
    { events: s, relatedEvents: o } = dx(e);
  return (
    o >= 3 && dC(n) && ((a = "loop"), dT(e, t)),
    { promo: { ...e.promo, playbackPositionEvents: s, feature: a } }
  );
}
function dP(e, t) {
  let n = et.PROMO_CONTEXT_NO_ADS;
  if (dS(n, e)) return;
  let i = e.screen.viewport.height,
    r = e.device.isPhone ? 740 : 900,
    a = e.promo.feature;
  return (
    i < r && dC(n) && ((a = "no ads"), dT(e, t)),
    { promo: { ...e.promo, feature: a } }
  );
}
function dI(e) {
  let t = et.PROMO_CONTEXT_PRINT;
  if (dS(t, e)) return;
  let n = dC(t) ? "print" : e.promo.feature;
  return { promo: { ...e.promo, feature: n } };
}
function dL(e) {
  let t = et.PROMO_CONTEXT_MUTE;
  if (dS(t, e)) return;
  let n = e.promo.feature,
    i = e.promo.halfPlayed + 1;
  return (
    i >= 2 && dC(t) && (n = "mute"),
    { promo: { ...e.promo, halfPlayed: i, feature: n } }
  );
}
function dN(e, t) {
  let n = et.PROMO_CONTEXT_SOLO,
    i = !e.player.shouldPlay || !e.player.canPlay;
  if (i || dS(n, e)) return;
  let r = e.promo.feature,
    { events: a, bassEvents: s } = dk(e);
  return (
    5 === s && dC(n) && ((r = "solo"), dT(e, t)),
    { promo: { ...e.promo, playbackTypeEvents: a, feature: r } }
  );
}
function dA(e) {
  let t = et.PROMO_CONTEXT_RETUNE;
  if (dS(t, e)) return;
  let n = e.promo.feature,
    i = e.part.current;
  if (i) {
    let e = i.tuning && t2(i.instrumentId, i.tuning),
      r = e && 0 !== e.pitch;
    r && dC(t) && (n = "pitch shift");
  }
  return { promo: { ...e.promo, feature: n } };
}
let dM = (e) => {
    let t = !oI(dm);
    if (t) {
      let t, i, r;
      function n(t) {
        if (!dS(et.PROMO_CONTEXT_MUTE, t)) {
          if (t.player.shouldPlay && t.player.canPlay) {
            let n = t.part.current;
            if (!n) return;
            let i = n.timestamps[n.timestamps.length - 1];
            i > 2e4 &&
              e.dispatch("promo/mute:start", { delay: Math.floor(i / 3) });
          } else e.dispatch("promo/mute:clear");
        }
      }
      e.on("cursor/move", (t) => dE(t, e.dispatch)),
        e.on("player/togglePlay", (t) => dE(t, e.dispatch)),
        e.on("cursor/move", (t) => d_(t, e.dispatch)),
        e.on("player/togglePlay", (t) => d_(t, e.dispatch)),
        e.on("curiosity/vpt10", (t) => dP(t, e.dispatch)),
        e.on("meta/load:done", (n) => {
          if ("tab" === n.route.page && !n.device.isPhone) {
            clearTimeout(t);
            let i = n.isTestMode ? 2e3 : 2e4;
            t = setTimeout(() => e.dispatch("promo/print:fire"), i);
          }
        }),
        e.on("route/change", () => clearTimeout(t)),
        e.on("promo/print:fire", (e) => dI(e)),
        e.on("player/togglePlay", (e) => n(e)),
        e.on("promo/mute:start", (t, n) => {
          let { delay: r } = n;
          clearTimeout(i),
            (i = setTimeout(() => e.dispatch("promo/mute:fire"), r));
        }),
        e.on("route/change", () => clearTimeout(i)),
        e.on("promo/mute:clear", () => clearTimeout(i)),
        e.on("promo/mute:fire", (e) => dL(e)),
        e.on("cursor/move", (t) => dN(t, e.dispatch)),
        e.on("player/togglePlay", (t) => dN(t, e.dispatch)),
        e.on("meta/load:done", (t) => {
          if ("tab" === t.route.page) {
            clearTimeout(r);
            let n = t.isTestMode ? 2e3 : 1e4;
            r = setTimeout(() => e.dispatch("promo/retune:fire"), n);
          }
        }),
        e.on("route/change", () => clearTimeout(r)),
        e.on("promo/retune:fire", (e) => dA(e)),
        e.on("promo/dismiss", (e) => {
          let t = dg.get(e.promo.feature);
          return t && du(t), { promo: { ...e.promo, feature: null } };
        }),
        e.on(
          "promo/unsubscribe",
          (e) => (
            oL(dm, new Date().toUTCString()),
            { promo: { ...e.promo, feature: null } }
          )
        );
    }
  },
  dB = () => ({ editor: { canDelete: !1 } });
async function dD(e, t) {
  try {
    let n = new tH();
    if (t === $.V1)
      throw Error(
        `Generating audio for version ${t} is not supported with this API`
      );
    await oE(e, t, n.signal), N && alert("Done!");
  } catch (e) {
    console.error(e), alert(`Error: ${e.message}`);
  }
}
async function dO(e, t) {
  try {
    await oT(e, t), N && alert("Done!");
  } catch (e) {
    console.error(e), alert(`Error: ${e.message}`);
  }
}
let dR = (e) => {
  e.on("user/signOut", dB),
    e.on("editor/sound:toggle", (t, n) => {
      let { version: i } = n;
      t.meta.current &&
        oU(e, t.meta.songId, t.meta.partId, t.meta.current.revisionId, i);
    }),
    e.on("editor/sound:generate", (e, t) => {
      let { version: n } = t;
      e.meta.current && dD(e.meta.current.revisionId, n);
    }),
    e.on("editor/sound:update", (e, t) => {
      let { version: n } = t;
      e.meta.current && dO(e.meta.current.revisionId, n);
    });
};
function dz(e) {
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
function d$(e, t, n) {
  if (!t) return !1;
  let i = e;
  return void 0 === i && n("tabFeatures/set", { features: (i = dz(t)) }), i;
}
let dF = (e) => {
    e.on("tabFeatures/set", (e, t) => {
      let { features: n } = t;
      return { tabFeatures: n };
    }),
      e.on("meta/load:processing", () => ({ tabFeatures: void 0 }));
  },
  dV = [
    "touchstart",
    "click",
    "scroll",
    "mousewheel",
    "mousemove",
    "mousedown",
  ],
  dU = (e) => e && e.replace(/["'=!+#*~;^()<>[\],&]/gi, "");
async function dH() {
  return "off" === window.__ADS__
    ? null
    : Promise.all([
        cd(
          "https://www.googletagservices.com/tag/js/gpt.js",
          "__LOADED_GTP__"
        ).catch(() => {}),
        cd(
          "https://cdn-b.notsy.io/sng/" +
            ("stage" === window.__STAGE__ ? "alpha.js" : "prebid.js"),
          "__LOADED_NOTSY__"
        ),
      ]);
}
function dj(e) {
  let {
    route: t,
    block: n,
    options: i,
    personalization: r,
    songId: a,
    artist: s,
    song: o,
    device: l,
  } = e;
  if (!i.isForced && t.page !== i.page) return;
  let c = [];
  i.isTargeted &&
    (a && c.push(["songID", a]),
    s && c.push(["artist", s]),
    o && c.push(["song", o]));
  let d = { page: n, npa: !r, targeting: c, gdpr: l.hasGDPR };
  (l.hasGDPR && l.hasCCPA) || (d.country = l.country), window.notsyInit(d);
}
async function dG(e) {
  try {
    await dH(), e("notsy/load:done", { loaded: window.__LOADED_NOTSY__ || !1 });
  } catch (t) {
    e("notsy/load:error");
  }
}
function dW(e, t) {
  let {
      dispatch: n,
      ads: i,
      meta: r,
      chords: a,
      route: s,
      routeContent: o,
    } = cn("ads", "meta", "chords", "route", "routeContent"),
    l = window.__HAS_BEEN_SEEN_BEFORE__ || oR.hasFirstActivity,
    [c, d] = u(l);
  f(() => {
    if (!c) {
      let e = () => {
        d(!0), dV.forEach((t) => window.removeEventListener(t, e));
      };
      return (
        dV.forEach((t) => window.addEventListener(t, e)),
        () => dV.forEach((t) => window.removeEventListener(t, e))
      );
    }
  }, [c]),
    f(() => {
      if (!c || i.notsyFailed) return;
      if (!i.notsyLoaded) {
        n("notsy/load");
        return;
      }
      if ("tab" === s.page) {
        let { songId: e } = s;
        if (r.loading || +e !== r.songId) return;
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
        ((l.artist = dU(r.current && r.current.artist)),
        (l.song = dU(r.current && r.current.title)),
        (l.songId = r.songId)),
        "chords" === o.page &&
          ((l.artist = dU(a.current && a.current.artist)),
          (l.song = dU(a.current && a.current.title)),
          (l.songId = a.songId)),
        n("notsy/fire", l);
    }, [i, e, c, r, a, t, s, o]);
}
let dq = (e) => {
    e.on("notsy/load", () => dG(e.dispatch)),
      e.on("notsy/load:done", (e, t) => {
        let { loaded: n } = t;
        return { ads: { ...e.ads, notsyLoaded: n, notsyFailed: !n } };
      }),
      e.on("notsy/load:error", (e) => ({
        ads: { ...e.ads, notsyLoaded: !1, notsyFailed: !0 },
      })),
      e.on("notsy/fire", (e, t) => {
        dj({ ...t, device: e.device });
      });
  },
  dX = "learnMarkers";
function dY(e) {
  try {
    let t = oI(dX) || [];
    e("learnMarkers/load:done", t);
  } catch {
    e("learnMarkers/load:done", []);
  }
}
function dK(e) {
  let t = 0;
  for (let n of e) t += n.learnedBars.length;
  return t;
}
let dJ = (e) => {
    e.on("learnMarkers/load:done", (e, t) => {
      let { learnMarkers: n } = e;
      return { learnMarkers: { ...n, data: t } };
    }),
      e.on("learnMarkers/markToggle", (t, n) => {
        let { songId: i, partId: r, barNumber: a, isLearned: s } = n,
          { learnMarkers: o, meta: l } = t,
          c = [...o.data],
          d = c.find((e) => e.songId === i && e.partId === r);
        if (s) {
          if (d) {
            let e = d.learnedBars.findIndex((e) => e === a);
            e >= 0 &&
              (d.learnedBars = d.learnedBars
                .slice(0, e)
                .concat(d.learnedBars.slice(e + 1)));
          }
        } else
          d
            ? d.learnedBars.includes(a) ||
              (d.learnedBars = [...d.learnedBars, a])
            : c.push({ songId: i, partId: r, learnedBars: [a] });
        return (
          oL(dX, c),
          setTimeout(
            () =>
              e.dispatch("curiosity/event", {
                event: s ? "Marked as not learned" : "Marked as learned",
                "Measure number": a,
                "Revision id": l.current.revisionId,
                "Song id": l.songId.toString(),
                ...uF(t),
              }),
            300
          ),
          { learnMarkers: { ...o, data: c } }
        );
      });
  },
  dZ = "EE_STORAGE",
  dQ = (e) => {
    let t = cS(dZ) || [];
    Array.isArray(t) || (t = []);
    let n = t.find((t) => t.experiment === e);
    return n?.date ? Math.floor((new Date() - new Date(n.date)) / 864e5) : null;
  },
  d1 = (e) => {
    let t = cS(dZ) || [];
    Array.isArray(t) || (t = []);
    let n = oI(dZ) || [];
    Array.isArray(n) || (n = []),
      n.length && "string" == typeof n[0] && (n = [...t]);
    let i = t.find((t) => t.experiment === e);
    i ||
      (t.push({ experiment: e, date: new Date() }), ck(dZ, JSON.stringify(t)));
    let r = n.find((t) => t.experiment === e);
    return (
      r || (n.push({ experiment: e, date: new Date() }), oL(dZ, n)), !!(i || r)
    );
  },
  d0 = [
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
    "marked_as_learned_animation",
    "download_without_sign_in",
    "learn_faster_app_banner_v2",
    "print_scale",
    "revision_comments",
    "play_along_mobile",
    "video_plus_right",
    "stat_60_faster_on_panel",
  ];
async function d2(e, t) {
  let n = tw("/api/event/");
  try {
    await n5(n, { event: e, payload: t });
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
let d5 = () =>
  t
    ? {
        "Web document is hidden": document[t],
        "Web document visibility": document[n],
      }
    : {};
function d4(e) {
  return (e.current && e.current.tracks && e.current.tracks[e.partId]) || null;
}
let d3 = (e) =>
  e
    ? ((e.isBassGuitar && " Bass") || (e.isDrums && " Drum") || "") + " Tab"
    : " Tab";
function d9(e, t) {
  return `/a/wa/SongAdminTools/${e}?id=${t}`;
}
function d8(e) {
  return `https://www.songsterr.com${e}`;
}
function d6(e) {
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
function d7() {
  return Math.floor((1 + Math.random()) * 65536)
    .toString(16)
    .substring(1);
}
function ue() {
  return (
    d7() +
    d7() +
    "-" +
    d7() +
    "-" +
    d7() +
    "-" +
    d7() +
    "-" +
    d7() +
    d7() +
    d7()
  );
}
let ut = "Print--plus",
  un = "Print--free";
function ui(e) {
  let t = e.rules || e.cssRules;
  for (let e of t)
    if (e.style.content && e.style.content.length) {
      let t = ue(),
        n =
          e.style.content.substring(0, 62) +
          t +
          e.style.content.substring(62 + t.length);
      n.length === e.style.content.length
        ? (e.style.content = n)
        : console.error("Something wrong with tracker url length");
    }
}
function ur(e) {
  try {
    let e = document.styleSheets;
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      "print" === n.media.mediaText && "print-ga" === n.ownerNode.id && ui(n);
    }
  } catch (e) {
    console.error("PrintTracker: " + e);
  }
}
let ua = /[πÇÉπÇæπÇèπÇï]/;
function us(e) {
  return !ua.test(e) && -1 === e.indexOf(".com");
}
function uo(e) {
  return (
    (e.current && e.current.tracks && e.current.tracks[e.before.partId]) || null
  );
}
function ul(e) {
  return e
    .split("+")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ");
}
let uc = "Songsterr",
  ud = "Songsterr Tabs with Rhythm",
  uu = {
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
    diff: "",
  };
function up(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Guitar";
  if (e) {
    if (e.instrument === t7) return "Drum";
    if (e.instrument === t6) return "Bass";
    if (e.instrument === t8) return "Guitar";
  }
  return t;
}
function uh(e, t) {
  if (!t || !e.current || !e.current.tracks) return !1;
  let n = null;
  return (
    e_(t.instrumentId)
      ? (n = e_)
      : eI(t.instrumentId)
      ? (n = eI)
      : eP(t.instrumentId) && (n = eP),
    !n || e9(t, e.current.tracks, n)
  );
}
function uf(e) {
  let { meta: t } = e;
  if (!t.current) return [ud, "Free online tab player"];
  let n = d4(t),
    i = "";
  uh(t, n) && (i = ` \u002d ${n.title.replace(/\u00a0/g, " ")}`);
  let r = d3(n),
    a = t.allowedByLicense ? "" : " (Temporary Removed by Music Publisher) ",
    s = `${t.current.title}${r} by ${t.current.artist}${i}`;
  return [
    `${s}${a} | ${ud}`,
    `${s}. Free online tab player. One accurate version. Recommended by The Wall Street Journal`,
  ];
}
function ug(e) {
  let { chords: t } = e;
  if (!t.current) return ud;
  let { title: n, artist: i } = t.current;
  return `${n} Chords by ${i} | ${ud}`;
}
function um(e) {
  let { diff: t } = e;
  if (!t.current) return [ud, "Free online tab player"];
  let n = uo(t),
    i = d3(n),
    r = `${t.current.title}${i} by ${t.current.artist}`;
  return [
    `${r} | ${ud}`,
    `${r} with free online tab player. One accurate version. Recommended by The Wall Street Journal`,
  ];
}
function uy(e) {
  let t = e.route;
  return "artist" === t.page
    ? uE(e)
    : "tab" === t.page
    ? uf(e)[0]
    : "chords" === t.page
    ? ug(e)
    : "search" === t.page
    ? uT(e)
    : "tag" === t.page || "tags" === t.page
    ? uP(e)
    : "diff" === t.page
    ? um(e)[0]
    : u_(e);
}
function uv(e) {
  return "tab" === e.route.page && e.meta.current
    ? {
        page: e.route.page,
        Artist: e.meta.current.artist,
        Title: e.meta.current.title,
      }
    : { page: e.route.page };
}
function ub(e) {
  (document.title = uy(e)),
    window.ga &&
      window.ga("send", "pageview", {
        location: window.location.href,
        title: document.title,
      }),
    ur(uv(e));
}
el.map((e) => {
  let [t, n] = e;
  return "string" == typeof t && "string" == typeof n.page
    ? { [n.page]: t }
    : {};
}).reduce((e, t) => Object.assign(e, t), {});
let uw = (e, t) => e.artist.artists[t] || "Unknown Artist",
  uS = (e) => {
    if (e.length > 0)
      return us(e) ? `Search results for: '${e}'` : "Search results";
  },
  ux = (e) =>
    [up(e.songs && e.songs.filters, "Guitar"), "Tabs with Rhythm"].join(" "),
  uk = (e) =>
    [
      uw(e, +e.route.artistId),
      up(e.artist && e.artist.filters, ""),
      "Tabs",
    ].join(" "),
  uC = (e) => uu[e.route.page] || "";
function uT(e) {
  return [e.songs && e.songs.pattern && uS(e.songs.pattern), ux(e), "Songsterr"]
    .filter(Boolean)
    .join(" | ");
}
function uE(e) {
  return [e.artist && e.artist.pattern && uS(e.artist.pattern), uk(e), ud]
    .filter(Boolean)
    .join(" | ");
}
function u_(e) {
  return [uC(e), ud].join(" | ");
}
function uP(e) {
  let {
    tags: { content: t, route: n, query: i, isFailed: r, isNotFound: a },
  } = e;
  if (!t || r || a)
    return `${a ? "Not Found" : "Something Went Wrong"} | ${ud}`;
  let s = i.page ? ` Page ${i.page}` : "",
    o = "Top " + ("tag" === n.page ? `${ul(n.name)} Tabs` : "Tags") + s;
  return o + ` | ${ud}`;
}
let uI = new Map([
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
  uL = "sr_vpt10";
async function uN(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  if (!l) {
    if ("bot" === e.device.type) return;
    null === t
      ? (t = void 0)
      : void 0 === t && e.user.isLoggedIn && (t = e.user.profile.id.toString());
    let {
      getDeviceId: n,
      init: i,
      track: r,
      Identify: a,
      identify: s,
      setUserId: o,
    } = await import("./index.576687ab.js");
    await i(window.__AMPLITUDE_API_KEY__ || "", t, {
      serverUrl: "/2/httpapi",
      minIdLength: 1,
      attribution: { disabled: !0 },
    }).promise,
      (l = {
        getDeviceId: n,
        init: i,
        track: r,
        Identify: a,
        identify: s,
        setUserId: o,
      });
  }
  return l;
}
let uA = {
  phone: "Phone",
  tablet: "Tablet",
  desktop: "Desktop",
  tv: "TV",
  car: "Car",
  bot: "Bot",
};
function uM() {
  let e = window.matchMedia("(orientation: portrait)");
  return e ? (e.matches ? "portrait" : "landscape") : "unknown";
}
function uB() {
  return window.matchMedia(sZ).matches ? "smallPortrait" : "wideOrLandscape";
}
let uD = {
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
  uO = "curiosity_sent_events",
  uR = (e) =>
    -1 !== cN.indexOf(e) ? `Experiment: ${e}` : `Experiment: SRW ${e}`,
  uz = (e, t) => `s${e}t${void 0 !== t ? t : ""}`,
  u$ = (e) => {
    let t = new Date(e.created_at),
      n = new Date(),
      i = Math.abs(n.getTime() - t.getTime());
    return Math.ceil(i / 864e5);
  },
  uF = (e) => {
    let t;
    let n = e.meta;
    if (!n.current || !e.part.current) return {};
    let i = d4(n),
      r = oR.getTimeSinceLastActivity(),
      a = n.current,
      s = e.part.current,
      { shown: o, status: l, trackFingering: c } = e.fingerings,
      d = o && !l && !!c,
      u = tp(e.audio.version),
      p = u.versionLegacy || `audioV${u.version}`;
    for (let i of e.setlists.setlists)
      if (-1 !== i.songs.findIndex((e) => e.songId === n.songId)) {
        t = i.name;
        break;
      }
    return {
      ...e.curiosity.vpt10.props,
      Instrument: s.instrument,
      Difficulty: i && i.difficulty,
      "Minutes Since Last Activity": r,
      Artist: a.artist,
      Title: a.title,
      "Song and track ids": uz(a.songId, i?.partId),
      "Song id": n.songId.toString(),
      "Track id": i && i.partId.toString(),
      "Track title": i && i.name,
      "Has chords": s.withChords,
      "Has chords link": a.hasChords || !1,
      "Has sound v4": tf.has(a, $.V4),
      "Sound version": p,
      Tags: n.current.tags,
      "Playlist Name": t,
      "Autofingering enabled": d,
      "Revised days ago": u$(a),
    };
  },
  uV = (e) => {
    {
      let s,
        o,
        l,
        c = {};
      function t(e) {
        c = oI(uO) || c;
        let t = !c[e];
        return t && ((c[e] = !0), oL(uO, c)), t;
      }
      async function n(e, t) {
        let { setUserId: n } = await uN(e, t.id.toString());
        n(t.id.toString());
      }
      async function i(e) {
        let { setUserId: t } = await uN(e, null);
        t(void 0);
      }
      async function r(e, n) {
        let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        try {
          let a = e.user.isLoggedIn ? e.user.profile.plan : U.FREE,
            s = e.user.isLoggedIn,
            o = {
              Url: window.location.href,
              Referer: e.curiosity.referer.last,
              ...d5(),
              ...i,
            },
            l = t(n);
          if (r && !l) return;
          !r && l && (o["First time"] = !0);
          let { Identify: c, track: d } = await uN(e),
            u = new c();
          u.set("Plan", a),
            u.set("Platform", "Web"),
            u.set("Browser", e.browser.family),
            u.set("Browser version", e.browser.version),
            u.set("System version", e.device.os.version),
            u.set("Device type (correct)", uA[e.device.type] || e.device.type),
            u.set("Signed in", s),
            u.set("Total VPT10s", e.curiosity.vpt10.count),
            u.set("Total measures learned", dK(e.learnMarkers.data)),
            u.set("Screen width", e.screen.viewport.width),
            u.set("Screen height", e.screen.viewport.height),
            u.set("Orientation", uM()),
            u.set("Mode", uB()),
            u.set("Browserslist", A);
          let p = cS("exp");
          if (p && p.active)
            for (let e of Object.keys(p.active)) u.set(uR(e), p.active[e]);
          for (let e of d0)
            u.unset(uR(e)), u.unset("Device type (by useragent)");
          u.unset("Referer"),
            e.curiosity.referer.last &&
              u.set("Last referer", e.curiosity.referer.last),
            e.curiosity.referer.original &&
              u.set("Original referer", e.curiosity.referer.original);
          let h = {
            version_name: "8171295d",
            event_type: n,
            user_properties: u.getUserProperties(),
            event_properties: o,
          };
          await d(h).promise,
            "prod" !== window.__STAGE__ && console.log(`AD: ${n}`, o, u);
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
        r(t, n.event, { ...n, ...t.curiosity.conversion, event: void 0 }),
          e.dispatch("curiosity/google", {
            category: "Conversion",
            action: n.event,
          });
      }),
        e.on("curiosity/event", (e, t) => {
          r(e, t.event, { ...t, event: void 0 });
        }),
        e.on("curiosity/visitedPage", () => {}),
        e.on("curiosity/enteredExperiment", (e, t) => {
          let { experiment: n, payload: i } = t;
          d1(n) || r(e, `Entered experiment: SRW ${n}`, i);
        }),
        e.on("curiosity/google", (e, t) => {
          tR(() => {
            try {
              window.gtag &&
                window.gtag("event", t.category, {
                  eventCategory: t.category,
                  eventAction: t.action,
                  eventLabel: t.label,
                  eventValue: t.value,
                }),
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
          });
        }),
        e.on("curiosity/error", (t, n) => {
          let { error: i, message: r } = n;
          e.dispatch("curiosity/event", {
            event: "Error",
            Error: i,
            Message: r,
          }),
            e.dispatch("curiosity/google", {
              category: "Error",
              action: i,
              label: r,
            });
        }),
        e.on("curiosity/fraud", async (e) => {
          let { Identify: t, identify: n } = await uN(e),
            i = new t();
          await n(i).promise;
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
            oR.reset(),
            (s = setTimeout(() => e.dispatch("curiosity/vpt10"), 6e5)),
            (o = setTimeout(() => e.dispatch("curiosity/vpt30"), 18e5));
        }),
        e.on("curiosity/countdown:clear", () => {
          clearTimeout(s), clearTimeout(o);
        }),
        e.on("curiosity/vcp5:start", () => {
          clearTimeout(l),
            oR.reset(),
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
          let n = oR.getTimeSinceLastActivity();
          if (n >= 5) return;
          let i = t.meta,
            r = d4(i),
            a = "Viewed player tab for 10 minutes";
          if (i.current && t.part.current) {
            let t = i.current;
            d2(a, {
              songId: i.songId,
              revisionId: t.revisionId,
              artistId: t.artistId,
              partId: i.partId,
              instrumentId: r && r.instrumentId,
            }),
              e.dispatch("curiosity/google", { category: "Player", action: a }),
              e.dispatch("curiosity/increaseVpt10");
          }
        }),
        e.on("curiosity/vpt30", (t) => {
          let n = oR.getTimeSinceLastActivity();
          if (n >= 5) return;
          let i = t.meta;
          i.current &&
            t.part.current &&
            e.dispatch("curiosity/event", {
              event: "Viewed player tab for 30 minutes",
              ...uF(t),
            });
        }),
        e.on("user/signIn", (t, i) => {
          n(t, i),
            e.dispatch("curiosity/conversion", {
              event: "Signed in",
              "Auth method": "Email",
            });
        }),
        e.on("user/googleSignIn", (t, i) => {
          let { profile: r, isCreated: a } = i;
          n(t, r),
            e.dispatch("curiosity/conversion", {
              event: a ? "Signed up" : "Signed in",
              "Auth method": "Google",
            });
        }),
        e.on("user/signUp", (t, i) => {
          n(t, i),
            e.dispatch("curiosity/conversion", {
              event: "Signed up",
              "Auth method": "Email",
            });
        }),
        e.on("user/profile", (e, t) => {
          n(e, t);
        }),
        e.on("user/subscribePlus", (t, i) => {
          let r = {
            "Payment type": i.paymentType,
            Country: uI.get(i.subscription.countryCode),
            "Braintree Plan": i.subscription.plan.id,
          };
          "subscribe" === i.mode
            ? e.dispatch("curiosity/conversion", { event: "Subscribed", ...r })
            : "update" === i.mode &&
              e.dispatch("curiosity/conversion", {
                event: "Updated subscription",
                ...r,
              }),
            e.dispatch("curiosity/google", {
              category: "Subscription",
              action:
                "subscribe" === i.mode ? "Subscribed" : "Updated subscription",
            }),
            n(t, oq(t, i));
        }),
        e.on("user/signOut", (t) => {
          e.dispatch("curiosity/event", { event: "Signed out" }), i(t);
        }),
        e.on("user/recoverPassword", (e, t) => {
          n(e, t);
        }),
        e.on("user/cancelPlus", (t, i) => {
          n(t, i),
            e.dispatch("curiosity/conversion", {
              event: "Canceled subscription",
            });
        }),
        e.on("user/deactivate", (t) => {
          e.dispatch("curiosity/conversion", { event: "Deactivated account" }),
            i(t);
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
          let { songId: i, song: r } = n;
          return e.dispatch("curiosity/event", {
            event: "Added favorite",
            Title: r.title,
            Artist: r.artist,
            "Song id": i.toString(),
            "Song and track ids": uz(r.songId, t.part.current?.partId),
          });
        }),
        e.on("favorites/delete:processing", async (t, n) => {
          let { songId: i, song: r } = n;
          return e.dispatch("curiosity/event", {
            event: "Removed favorite",
            Title: r.title,
            Artist: r.artist,
            "Song id": i.toString(),
          });
        }),
        e.on("upload/song:uploaded", (t, n) => {
          let { songSubmitted: i, song: r, ext: a } = n;
          i &&
            e.dispatch("curiosity/event", {
              event: "Submitted tab",
              Artist: r.artist,
              Title: r.title,
              "File extension": a,
            });
        }),
        e.on("upload/song:error", (t, n) => {
          let { error: i } = n;
          e.dispatch("curiosity/error", {
            error: "Submitted tab",
            message: i.message,
          });
        }),
        e.on("upload/revision:uploaded", (t, n) => {
          let { revisionSubmitted: i, revision: r, ext: a } = n;
          i &&
            e.dispatch("curiosity/event", {
              event: "Submitted revision",
              Artist: r.artist,
              Title: r.title,
              Via: "GP",
              "File extension": a,
              "Song id": r.songId.toString(),
            });
        }),
        e.on("upload/revision:error", (t, n) => {
          let { error: i } = n;
          e.dispatch("curiosity/error", {
            error: "Submitted revision",
            message: i.message,
          });
        }),
        e.on("meta/load:processing", (e, t) => {
          let { songHasChanged: n } = t;
          if (n) {
            let t = { ...uD };
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
          let { isMetronome: t, metronomeType: n, canPlay: i } = e.player,
            r = ["Used playback"];
          return (
            t && "voice" === n && i && r.push("Played with Voice Metronome"),
            i &&
              e.player.videoOpened &&
              e.video.current &&
              r.push("Played along with original video"),
            a(...r)(e)
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
            canPlay: i,
            shouldPlay: r,
          } = e.player;
          return t && "voice" === n && i && r
            ? a("Used metronome", "Played with Voice Metronome")(e)
            : a("Used metronome")(e);
        }),
        e.on("player/changeMetronome:init", (e, t) => {
          let { isMetronome: n, canPlay: i, shouldPlay: r } = e.player;
          if (n && "voice" === t && i && r)
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
          let { route: i } = n;
          "tab" !== i.page &&
            "chords" !== i.page &&
            "search" !== i.page &&
            "artist" !== i.page &&
            "diff" !== i.page &&
            ub(t),
            e.dispatch("curiosity/countdown:clear"),
            e.dispatch("curiosity/vcp5:clear");
        }),
        e.on("meta/load:done", (t) => {
          "tab" === t.route.page &&
            (ub(t), e.dispatch("curiosity/countdown:start"));
        }),
        e.on("chords/load:done", (t) => {
          "chords" === t.route.page &&
            (ub(t), e.dispatch("curiosity/vcp5:start"));
        }),
        e.on("screener/accept", (t, n) => {
          let { screener: i, value: r } = n;
          i &&
            (i.name.endsWith("NPS")
              ? e.dispatch("curiosity/event", {
                  event: `NPS ${i.name.replace("NPS", "")}`,
                  Value: r,
                })
              : e.dispatch("curiosity/event", {
                  event: `Screener clicked: ${i.name}`,
                }));
        }),
        e.on("curiosity/countdown:start", (e) => {
          try {
            if ("bot" === e.device.type) return;
            let t = e.meta,
              n = d4(t),
              i = t.current,
              r = !1;
            e.user.profile && (r = e.user.profile.id === i.personId),
              i &&
                !1 === r &&
                d2("Visited revision", {
                  songId: t.songId,
                  revisionId: i.revisionId,
                  artistId: i.artistId,
                  partId: t.partId,
                  instrumentId: n && n.instrumentId,
                });
          } catch (e) {
            console.error(e);
          }
        });
    }
    e.on("curiosity/increaseVpt10", (e) => {
      let t = e.curiosity.vpt10.count;
      return (
        ck("sr_vpt10", ++t),
        {
          curiosity: {
            ...e.curiosity,
            vpt10: { ...e.curiosity.vpt10, count: t },
          },
        }
      );
    });
  };
async function uU(e) {
  let t = await fetch(tw(`/actions/usertest/${e}/ticket`), { method: "POST" });
  return n4(t), t.json();
}
async function uH(e) {
  let t = await fetch(tw(`/api/usertest/${e}`));
  return n4(t), t.json();
}
async function uj(e) {
  let t = JSON.stringify({ token: e.token }),
    n = await fetch(tw("/actions/usertest/ticket"), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: t,
    });
  return n4(n), n.json();
}
function uG(e) {
  try {
    navigator.sendBeacon("/actions/usertest/ticket/idle", e.token);
  } catch (e) {
    console.log(e);
  }
}
function uW(e, t) {
  let n = new AudioContext(),
    i = n.createMediaStreamDestination(),
    r = !1,
    a = !1;
  if (e && e.getAudioTracks().length > 0) {
    let t = n.createGain();
    (t.gain.value = 0.7),
      n.createMediaStreamSource(e).connect(t).connect(i),
      (r = !0);
  }
  return (
    t &&
      t.getAudioTracks().length > 0 &&
      (n.createMediaStreamSource(t).connect(i), (a = !0)),
    r || a ? i.stream.getAudioTracks() : []
  );
}
let uq = (e) =>
    new Promise((t, n) => {
      let i = 0,
        r = setInterval(() => {
          i > 9
            ? (clearInterval(r), n(Error("Max number of attempts")))
            : e.readyState === e.OPEN && (clearInterval(r), t()),
            i++;
        }, 200);
    }),
  uX = async (e, t) => {
    e.readyState !== e.OPEN && (await uq(e)), e.send(t);
  },
  uY = "wss://curiosity.songsterr.com/ut/";
function uK(e) {
  try {
    e.stop();
  } catch (e) {
    console.error(e);
  }
}
function uJ(e) {
  try {
    e.close();
  } catch (e) {
    console.error(e);
  }
}
class uZ {
  constructor(e) {
    (this.state = "ready"),
      (this.handlers = e),
      (this.socket = new WebSocket("wss://curiosity.songsterr.com/ut/", "rec")),
      (this.socket.onclose = this.onSocketClose),
      (this.socket.onerror = this.onError);
  }
  cleanup() {
    this.audioVideoStream && this.audioVideoStream.getTracks().forEach(uK),
      this.voiceStream && this.voiceStream.getTracks().forEach(uK);
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
      uJ(this.socket),
      this.handlers.onError(e));
  };
  onTrackEnded = () => {
    ("ready" === this.state || "active" === this.state) &&
      ((this.state = "stopped"),
      this.cleanup(),
      uJ(this.socket),
      this.handlers.onTurnedOff());
  };
  async connect(e, t, n, i, r) {
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
          ...uW(this.audioVideoStream, this.voiceStream),
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
        i &&
          (l.Amplitude = `https://analytics.amplitude.com/demax-inc/project/308889/search/${i}`),
          "active" === n[e].status && (l[e] = n[e].segment);
      await uX(
        this.socket,
        JSON.stringify({
          cmd: "OFFER",
          offer: o.sdp,
          ticket: e,
          email: t,
          properties: l,
          stage: window.__STAGE__,
          isAdditional: r,
        })
      );
    } catch (e) {
      this.onError(e);
    }
  }
  async sendEmail(e) {
    await uX(this.socket, JSON.stringify({ cmd: "EMAIL", email: e }));
  }
  stop() {
    ("ready" === this.state || "active" === this.state) &&
      ((this.state = "stopped"),
      this.cleanup(),
      uJ(this.socket),
      this.handlers.onStop());
  }
}
let uQ = "hidden",
  u1 = "intro",
  u0 = "questions",
  u2 = "not_chosen",
  u5 = "email",
  u4 = "feedback",
  u3 = "start",
  u9 = "instructions",
  u8 = "restart",
  u6 = "survey",
  u7 = "farewell";
function pe() {
  window.removeEventListener("visibilitychange", i),
    r && (clearTimeout(r), (r = null));
}
let pt = { ignoreDailyTimespan: !0, ignoreSingleAppearance: !0 };
async function pn(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  try {
    let a = await uU(t);
    try {
      let s = await uH(t);
      return (
        e("ut/ticket", { ticket: a, script: s }),
        (r = setTimeout(() => {
          e("ut/idle");
        }, 6e4 + n)),
        (i = () => {
          let t;
          document.hidden
            ? (t = setTimeout(() => {
                uG(a),
                  e("ut/idle"),
                  window.removeEventListener("visibilitychange", i);
              }, 3e4))
            : clearTimeout(t);
        }),
        window.addEventListener("visibilitychange", i),
        { ticket: a, script: s }
      );
    } catch (t) {
      await pi(e, a);
    }
  } catch (e) {
    console.error(e);
  }
}
async function pi(e, t) {
  try {
    await uj(t), e("ut/ticket:dismiss");
  } catch (e) {
    console.error(e);
  }
}
function pr(e) {
  try {
    let { recorder: t, ticket: n, script: i } = e.get().ut;
    t && t.stop(),
      e.dispatch("curiosity/event", {
        event: "UT Recorded",
        name: i.name,
        URL: n.urlToGet,
      });
  } catch (e) {
    console.error(e);
  }
}
async function pa(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.get();
  if ("ready" === n.ut.recorderState || "failed" === n.ut.recorderState)
    try {
      let i = new uZ({
        onReady: () => e.dispatch("ut/start:done"),
        onStop: () => e.dispatch("ut/stop:done"),
        onClose: () => e.dispatch("ut/stop:closed"),
        onTurnedOff: () => e.dispatch("ut/stop:turnedOff"),
        onError: (t) => e.dispatch("ut/error", t),
      });
      e.dispatch("ut/start:processing", i), (n = e.get());
      let r = n.user,
        a =
          n.ut.email ||
          (r.isLoggedIn ? r.profile.email : "anonymous@songsterr.com"),
        { getDeviceId: s } = await uN(n);
      await i.connect(n.ut.ticket, a, n.experiments, s(), t);
    } catch (t) {
      console.error(t), e.dispatch("ut/error", t);
    }
}
function ps(e, t) {
  po(e, t);
  let n = t.startUrl || "/";
  (n = n.includes("?") ? `${n}&ut=on` : `${n}?ut=on`),
    (window.location.href = n);
}
function po(e, t) {
  oN.set("utTicket", e), oN.set("utScript", t);
}
function pl() {
  let e = oN.get("utTicket"),
    t = oN.get("utScript");
  return { ticket: e, script: t };
}
let pc = (e) => {
  e.on("@init", () => ({
    ut: {
      recorderState: "ready",
      recorder: void 0,
      ticket: void 0,
      script: void 0,
      stage: uQ,
      email: void 0,
      steps: { [u0]: 0, [u9]: 0, [u6]: 0 },
      isAdditional: !1,
      isClosing: !1,
      isHidden: !1,
    },
  })),
    e.on("ut/close", (e, t) => ({ ut: { ...e.ut, isClosing: t } })),
    e.on("ut/hide", (e, t) => ({ ut: { ...e.ut, isHidden: t } })),
    e.on("ut/ticket", (e, t) => {
      let { ticket: n, script: i } = t;
      return { ut: { ...e.ut, ticket: n, script: i } };
    }),
    e.on("ut/ticket:dismiss", (e) => ({ ut: { ...e.ut, ticket: void 0 } })),
    e.on("ut/email", (t, n) => {
      let { name: i } = t.ut.script;
      return (
        e.dispatch("curiosity/event", {
          event: "UT Email Submitted",
          name: i,
          email: n,
        }),
        t.ut.recorder?.sendEmail(n),
        { ut: { ...t.ut, email: n, stage: u9 } }
      );
    }),
    e.on("ut/continue", (t, n) => {
      if (n) {
        e.dispatch("ut/load", n), po();
        return;
      }
      let { ticket: i, script: r } = pl();
      if (i && r) {
        if (!df(et.UT_RECORDER, pt)) return;
        return (
          e.dispatch("curiosity/event", {
            event: "UT Recording Requested",
            name: r.name,
          }),
          { ut: { ...t.ut, ticket: i, script: r, stage: u3 } }
        );
      }
    }),
    e.on("ut/load", async (t, n) => {
      let i = await pn(e.dispatch, n);
      e.dispatch("curiosity/event", {
        event: "UT Recording Requested",
        name: n,
      }),
        i && i?.script && e.dispatch("ut/load:done", u3);
    }),
    e.on("ut/feedbackLoad", async (t, n) => {
      let i = await pn(e.dispatch, n);
      i && i.script && e.dispatch("ut/load:done", u4);
    }),
    e.on("ut/load:done", (e, t) => {
      if (df(et.UT_RECORDER, pt)) return { ut: { ...e.ut, stage: t } };
    }),
    e.on("ut/start", (t) => {
      pe(), pa(e, t.ut.isAdditional);
    }),
    e.on("ut/start:done", (t) => {
      let n,
        { ut: i, user: r } = t;
      po();
      let { name: a, emailRequest: s } = i.script;
      return (
        !s || r.isLoggedIn
          ? ((n = u9),
            e.dispatch("curiosity/event", {
              event: "UT Instructions Shown",
              name: a,
            }))
          : ((n = u5),
            e.dispatch("curiosity/event", {
              event: "UT Email Requested",
              name: a,
            })),
        {
          ut: { ...i, recorderState: "active", recorder: i.recorder, stage: n },
        }
      );
    }),
    e.on("ut/start:processing", (e, t) => ({
      ut: { ...e.ut, recorderState: "starting", recorder: t },
    })),
    e.on("ut/terminate", (t) => {
      let { ut: n } = t;
      switch ((du(et.UT_RECORDER), n.stage)) {
        case u1:
        case u0:
          pi(e.dispatch, n.ticket);
          break;
        case u3:
          pi(e.dispatch, n.ticket), po(), e.dispatch("navigate", "/");
          break;
        case u5:
        case u9:
        case u8:
        case u6:
          pi(e.dispatch, n.ticket), pr(e), e.dispatch("navigate", "/");
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
            stage: uQ,
            email: void 0,
            steps: { [u0]: 0, [u9]: 0, [u6]: 0 },
            isAdditional: !1,
            isClosing: !1,
            isHidden: !1,
          },
        }
      );
    }),
    e.on("ut/idle", (t) => {
      let { ut: n, screener: i } = t;
      return (
        e.dispatch("screener/dismiss", i.active),
        {
          ut: {
            ...n,
            recorderState: "ready",
            recorder: void 0,
            script: void 0,
            stage: uQ,
            email: void 0,
            steps: { [u0]: 0, [u9]: 0, [u6]: 0 },
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
        stage: u8,
        isAdditional: !0,
      },
    })),
    e.on("ut/stage", (t, n) => {
      let { ut: i } = t,
        { stage: r, step: a } = n,
        { ticket: s, script: o } = i;
      switch (r) {
        case u7:
          pr(e),
            e.dispatch("curiosity/event", {
              event: "UT End Dialog Shown",
              name: i?.script.name,
              domain: window.location.hostname,
            });
          break;
        case u2:
          pi(e.dispatch, s);
          break;
        case u0:
          if (o.questions && o.questions.length && !(a >= o.questions.length))
            e.dispatch("curiosity/event", {
              event: "UT Question Shown",
              name: i?.script.name,
              question: o.questions[a],
            });
          else {
            ps(s, o);
            return;
          }
      }
      return {
        ut: {
          ...i,
          stage: r,
          steps: void 0 !== a ? { ...i.steps, [r]: a } : i.steps,
        },
      };
    }),
    e.on("screener/dismiss", (t) => {
      let { ut: n } = t;
      n.ticket && (pe(), pi(e.dispatch, n.ticket));
    }),
    e.on("screener/accept", (e, t) => {
      let { screener: n } = t;
      if (n.usertest) {
        let { script: t, ticket: n } = e.ut;
        if (!t || !n || !df(et.UT_RECORDER, pt)) return;
        let i = u1;
        if (t && !t.intro) {
          if (t.questions && t.questions.length) i = u0;
          else {
            ps(n, t);
            return;
          }
        }
        return (
          pe(),
          {
            ut: {
              ...e.ut,
              stage: i,
              steps: { [u0]: 0, [u9]: 0, [u6]: 0 },
              isAdditional: !1,
            },
          }
        );
      }
    });
};
async function pd() {
  let e = tw("/api/screeners/decide"),
    t = await fetch(e, { credentials: "include" });
  return n4(t), t.json();
}
let pu = "ScrShwn";
async function pp(e) {
  try {
    let t = await pd(),
      n = e.get();
    (t = t.filter((e) => {
      let t = e.filter.visitedFirstTime;
      if (
        "unset" !== t &&
        (("yes" === t && window.__HAS_BEEN_SEEN_BEFORE__) ||
          ("no" === t && !window.__HAS_BEEN_SEEN_BEFORE__))
      )
        return !1;
      let i = e.filter.experiment;
      if (i) {
        let [e, t] = i.split(" "),
          [r, a] = e.split("=");
        if (n.experiments[r]?.status !== "active") return !1;
        if (t) {
          let [e, n] = t.split("<days<"),
            i = dQ(r);
          if (null !== i && !(i >= +e && i <= +n)) return !1;
        }
        return void 0 === a || n.experiments[r]?.segment === a;
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
function ph(e) {
  let t = new Date();
  t.setTime(t.getTime() + 7776e6),
    (document.cookie = `ScrShwn-${
      e.cookie
    }=true;expires=${t.toUTCString()};path=/`);
}
async function pf(e, t) {
  let n = e.get(),
    i = [];
  for (let e of n.screener.candidates) {
    let r = e.filter.bassPage,
      a = d4(n.meta);
    if (
      "unset" !== r &&
      (!a || ("yes" === r && !a.isBassGuitar) || ("no" === r && a.isBassGuitar))
    )
      continue;
    let s = e.filter.drumsPage;
    ("unset" === s ||
      (a && ("yes" !== s || a.isDrums) && ("no" !== s || !a.isDrums))) &&
      (!e.filter.showAfterAction ||
        (t.event && e.filter.showAfterAction === t.event)) &&
      i.push(e);
  }
  if (i.length) {
    let t = i[Math.floor(Math.random() * i.length)];
    if (t.usertest) {
      let n = 1e3 * (t.filter?.delay || 0),
        i = await pn(e.dispatch, t.usertest, n);
      if (!i) return;
    }
    if ((clearTimeout(a), t.filter.delay)) {
      a = setTimeout(() => {
        df(et.SCREENER) && e.dispatch("screener/set", t);
      }, 1e3 * t.filter.delay);
      return;
    }
    df(et.SCREENER) && e.dispatch("screener/set", t);
  }
}
function pg(e, t) {
  let n = e.get();
  n.screener.candidates.length && tR(() => pf(e, { event: t }));
}
let pm = (e) => {
  e.on(
    "screener/set",
    (e, t) => (
      t && ph(t), { screener: { ...e.screener, candidates: [], active: t } }
    )
  ),
    e.on(
      "screener/loaded",
      (t, n) => (
        tR(() => pf(e, {})),
        { screener: { ...t.screener, candidates: n, active: void 0 } }
      )
    ),
    e.on("screener/dismiss", (e) => {
      let { screener: t } = e;
      return (
        du(et.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
      );
    }),
    e.on("screener/accept", (e) => {
      let { screener: t } = e;
      return (
        du(et.SCREENER), { screener: { ...t, candidates: [], active: void 0 } }
      );
    });
  let t = (t, n) => {
    let { event: i } = n;
    t.screener.candidates.length && tR(() => pf(e, { event: i }));
  };
  e.on("curiosity/conversion", t),
    e.on("curiosity/event", t),
    e.on("curiosity/vpt10", (t) => {
      t.screener.candidates.length &&
        tR(() => pf(e, { event: "Viewed player tab for 10 minutes" }));
    }),
    e.on("screener/pressedEditor", () => pg(e, "PressedEditor"));
};
async function py(e) {
  let t = tw("/api/textpage/" + e),
    n = await fetch(t);
  return n4(n), n.json();
}
async function pv(e, t) {
  let n = e.get().textpage;
  if (n.slug !== t || n.isError)
    try {
      e.dispatch("textpage/load:processing", t);
      let n = await py(t);
      n.slug === e.get().textpage.slug && e.dispatch("textpage/load:done", n);
    } catch (n) {
      console.error(n),
        t === e.get().textpage.slug && e.dispatch("textpage/load:error");
    }
}
let pb = (e) => {
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
async function pw() {
  let e = tw("/api/faq/compact"),
    t = await fetch(e);
  n4(t);
  let n = await t.json();
  return n.filter((e) => e.isSRW);
}
async function pS(e) {
  if (void 0 === e.get().faq.content)
    try {
      e.dispatch("faq/load:processing");
      let t = await pw();
      e.dispatch("faq/load:done", t);
    } catch (t) {
      console.error(t), e.dispatch("faq/load:error");
    }
}
let px = (e) => {
    e.on("faq/load:processing", () => ({
      faq: { content: void 0, isLoading: !0, isError: !1 },
    })),
      e.on("faq/load:done", (e, t) => {
        let { experiments: n, user: i } = e;
        if (
          ei(i) &&
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
  pk = ["chordpro1", "chordpro2", "chordpro3"];
async function pC(e, t, n) {
  let i = `/api/chords/${e}${t ? `/${t}` : ""}`,
    r = await tI(() => tw(i), "meta", n);
  return n.aborted || !r ? null : (r.title && (r.title = nC(r.title)), r);
}
async function pT(e, t, n, i) {
  let r =
      arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : { Accept: "text/plain" },
    a = `chordpro_${t}_${n || ""}`,
    s = await tD(a);
  if (s && s.data) return s.data;
  let o = `${e}/${t}/${n}.chordpro`,
    l = (e) => {
      let t = (e % pk.length) + 1;
      return t < pk.length
        ? `https://${pk[t]}.songsterr.com/${o}`
        : `https://www.songsterr.com/cdn/chordpro/${o}`;
    },
    c = await tI(l, "chordpro", i, r);
  return !c || i.aborted ? null : (await tO(a, { data: c }), c);
}
function pE(e) {
  let t = e.get().chords;
  t.current &&
    !t.isFailed &&
    e.dispatch("chords/load:done", {
      songId: t.songId,
      chordsRevisionId: t.chordsRevisionId,
      current: t.current,
    });
}
async function p_(e, t, n) {
  let i = new tH();
  try {
    let r = e.get().chords,
      a = r.loading;
    a && a.ac.abort();
    let s = r.songId !== t,
      o = r.chordsRevisionId !== n;
    if (!r.isFailed && r.current && !s && !o) {
      await e.dispatch("chords/load:done", {
        songId: t,
        chordsRevisionId: n,
        current: r.current,
      });
      return;
    }
    if (
      (await e.dispatch("chords/load:processing", {
        songId: t,
        chordsRevisionId: n,
        songHasChanged: s,
        chordsRevisionHasChanged: o,
        ac: i,
      }),
      i.signal.aborted)
    )
      return;
    let l = e.get().chords.current;
    if (
      (!l || l.songId !== t || (n && l.chordsRevisionId !== n)) &&
      ((l = await pC(t, n, i.signal)), i.signal.aborted || !l)
    )
      return;
    await e.dispatch("chords/load:done", {
      songId: t,
      chordsRevisionId: n,
      current: l,
    });
  } catch (r) {
    if (i.signal.aborted) return;
    e.dispatch("chords/load:error", {
      songId: t,
      chordsRevisionId: n,
      error: r,
    });
  }
}
let pP = (e) => {
    e.on("chords/load:processing", (e, t) => {
      let { songId: n, chordsRevisionId: i, ac: r } = t;
      return {
        chords: {
          ...e.chords,
          loading: { songId: n, chordsRevisionId: i, ac: r },
        },
      };
    }),
      e.on("chords/load:done", (e, t) => {
        let { songId: n, chordsRevisionId: i, current: r } = t;
        return {
          chords: {
            ...e.chords,
            current: r,
            songId: n,
            chordsRevisionId: i,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
        };
      }),
      e.on("chords/load:error", (e, t) => {
        let { songId: n, chordsRevisionId: i, error: r } = t;
        return {
          chords: {
            ...e.chords,
            current: null,
            songId: n,
            chordsRevisionId: i,
            isFailed: !0,
            isNetworkFailed: r instanceof tE && 0 === r.status,
            isNotFound:
              r instanceof tE && (404 === r.status || 400 === r.status),
            loading: null,
          },
        };
      }),
      e.on("route/change", (t, n) => {
        let { routeContent: i } = n;
        i && "chords" === i.page && p_(e, i.songId, i.chordsRevisionId);
      });
  },
  pI = (e) => {
    e.on("chords/load:done", async (t, n) => {
      let { current: i } = n,
        r = i.songId,
        a = i.chordsRevisionId,
        s = new tH();
      try {
        let n = t.chordpro.loading;
        if (n) {
          if (r === n.songId && a === n.chordsRevisionId) return;
          n.ac.abort();
        }
        if (
          !t.chordpro.isFailed &&
          t.chordpro.current &&
          r === t.chordpro.songId &&
          a === t.chordpro.chordsRevisionId
        ) {
          e.dispatch("chordpro/load:done", {
            songId: r,
            chordsRevisionId: a,
            current: t.chordpro.current,
          });
          return;
        }
        await e.dispatch("chordpro/load:processing", {
          songId: r,
          chordsRevisionId: a,
          ac: s,
        });
        let o = await pT(r, a, i.chordpro, s.signal);
        if (!o || s.signal.aborted) return;
        await e.dispatch("chordpro/load:raw", {
          songId: r,
          chordsRevisionId: a,
          chordpro: o,
          signal: s.signal,
        });
      } catch (t) {
        if ((console.log("chordpro error", s.signal.aborted), s.signal.aborted))
          return;
        await e.dispatch("chordpro/load:error", {
          songId: r,
          chordsRevisionId: a,
          error: t,
        });
      }
    }),
      e.on("chordpro/load:processing", (e, t) => {
        let { songId: n, chordsRevisionId: i, ac: r } = t;
        return {
          chordpro: {
            ...e.chordpro,
            loading: { songId: n, chordsRevisionId: i, ac: r },
          },
        };
      }),
      e.on("chordpro/load:raw", async (t, n) => {
        let { songId: i, chordsRevisionId: r, chordpro: a } = n;
        try {
          let t = (await import("./split.e33350ac.js")).split,
            n = t(a);
          e.dispatch("chordpro/load:done", {
            songId: i,
            chordsRevisionId: r,
            current: n,
          });
        } catch (t) {
          e.dispatch("chordpro/load:error", {
            songId: i,
            chordsRevisionId: r,
            error: t,
          });
        }
      }),
      e.on("chordpro/load:done", (e, t) => {
        let { songId: n, chordsRevisionId: i, current: r } = t;
        return {
          chordpro: {
            ...e.chordpro,
            current: r,
            songId: n,
            chordsRevisionId: i,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null,
          },
        };
      }),
      e.on("chordpro/load:error", (e, t) => {
        let { songId: n, chordsRevisionId: i, error: r } = t;
        return {
          chordpro: {
            ...e.chordpro,
            current: null,
            songId: n,
            chordsRevisionId: i,
            isFailed: !0,
            isNetworkFailed: r instanceof tE && 0 === r.status,
            isNotFound:
              r instanceof tE && (404 === r.status || 400 === r.status),
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
  pL = (e) => {
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
        let { loopStartLayout: i, loopEndLayout: r, side: a } = n,
          s = sl(t.part.current, t.cursor.position.cursor, i, r, a);
        (s.cursor != t.cursor.position.cursor ||
          s.loopStart != t.cursor.position.loopStart ||
          s.loopEnd != t.cursor.position.loopEnd) &&
          e.dispatch("cursor/move", s);
      }),
      e.on("cursor/move", (e, t) => ({ cursor: { ...e.cursor, position: t } })),
      e.on("cursor/move", (e) => {
        lI(e.player, e.cursor);
      }),
      e.on("player/toggleLoop", (e) => {
        let t = e.player.instance,
          n = 0 !== e.cursor.position.loopEnd,
          i = t.getCursor(),
          r = {
            ...e.cursor,
            position: { cursor: i, loopStart: 0, loopEnd: 0 },
          };
        if (!n && e.part.current) {
          let t = ss(e.part.current, i);
          (r.position.loopStart = t.loopStart),
            (r.position.loopEnd = t.loopEnd);
        }
        return t.seek(r.position), lI(e.player, r), { cursor: r };
      }),
      e.on("cursor/backspace", (t) => {
        let { loopStart: n, loopEnd: i } = t.cursor.position;
        e.dispatch("cursor/move", { cursor: n, loopStart: n, loopEnd: i });
      }),
      e.on("cursor/left", (t) => {
        let n = t.part.current;
        if (n) {
          let { loopStart: i, loopEnd: r } = t.cursor.position,
            a = si(n, t.player.instance.getCursor(), "left"),
            s = a.measureLayout.measure.index,
            o = a.measureLayout.beatsLayouts[0],
            l = i;
          if (a !== o) {
            let e = rh(o);
            l = e > i ? e : i;
          } else if (s > 0) {
            o = rX(n.measures[s - 1]).beatsLayouts[0];
            let e = rh(o),
              t = rf(o);
            l = 0 === r || i <= e ? e : i <= t ? t : i;
          }
          e.dispatch("cursor/move", { cursor: l, loopStart: i, loopEnd: r });
        }
      }),
      e.on("cursor/right", (t) => {
        let n = t.part.current;
        if (n) {
          let i;
          let { loopStart: r, loopEnd: a } = t.cursor.position,
            s = si(n, t.player.instance.getCursor(), "left"),
            o = s.measureLayout.measure.index,
            l = null;
          if (o < n.measures.length - 1) {
            i = rX(n.measures[o + 1]).beatsLayouts[0];
            let e = rh(i),
              t = rf(i);
            0 === a || t < a ? (l = t) : e < a && (l = e);
          }
          null !== l &&
            e.dispatch("cursor/move", { cursor: l, loopStart: r, loopEnd: a });
        }
      }),
      e.on("cursor/up", (t) => {
        let n = t.part.current,
          i = t.part.lines.lines;
        if (n && i) {
          let { loopStart: r, loopEnd: a } = t.cursor.position,
            s = si(n, t.player.instance.getCursor(), "left"),
            o = s.measureLayout.lineLayout.line.index;
          if (o > 0) {
            let t = i[o - 1],
              n = sd(t, s.absoluteX, "left"),
              l = null,
              c = rh(n),
              d = rf(n);
            0 === a || r <= c ? (l = c) : r <= d && (l = d),
              null !== l &&
                e.dispatch("cursor/move", {
                  cursor: l,
                  loopStart: r,
                  loopEnd: a,
                });
          }
        }
      }),
      e.on("cursor/down", (t) => {
        let n = t.part.current,
          i = t.part.lines.lines;
        if (n && i) {
          let { loopStart: r, loopEnd: a } = t.cursor.position,
            s = si(n, t.player.instance.getCursor(), "left"),
            o = s.measureLayout.lineLayout.line.index;
          if (o < i.length - 1) {
            let t = i[o + 1],
              n = sd(t, s.absoluteX, "left"),
              l = null,
              c = rh(n),
              d = rf(n);
            0 === a || d < a ? (l = d) : c < a && (l = c),
              l &&
                e.dispatch("cursor/move", {
                  cursor: l,
                  loopStart: r,
                  loopEnd: a,
                });
          }
        }
      }),
      e.on("cursor/shiftRight", (t) => {
        let n = t.part.current;
        if (n) {
          let i, r;
          let { loopStart: a, loopEnd: s } = t.cursor.position;
          if (0 === s) return;
          let o = si(n, s, "left"),
            l = o.measureLayout.measure,
            c = n.measures[l.index + 1];
          if (!c) return;
          let d = rX(c).beatsLayouts;
          if (s < rg(d[0])) i = rg((r = d[0]));
          else {
            let e = rY(c).beatsLayouts;
            i = rm((r = e[e.length - 1]));
          }
          let u = t.player.instance.getCursor();
          e.dispatch("cursor/move", { cursor: u, loopStart: a, loopEnd: i });
        }
      }),
      e.on("cursor/shiftLeft", (t) => {
        let n = t.part.current;
        if (n) {
          let i, r;
          let { loopStart: a, loopEnd: s } = t.cursor.position;
          if (0 === s) return;
          let o = si(n, s, "left"),
            l = o.measureLayout.measure,
            c = n.measures[l.index - 1];
          if (!c) return;
          let d = rX(l).beatsLayouts;
          if (
            a >=
            (i =
              s > rg(d[0]) ? rg((r = d[0])) : rg((r = rX(c).beatsLayouts[0])))
          )
            return;
          let u = t.player.instance.getCursor();
          e.dispatch("cursor/move", { cursor: u, loopStart: a, loopEnd: i });
        }
      });
  };
async function pN(e, t, n) {
  let i;
  i =
    "tags" === e.page
      ? `/api/next/tags${t.page ? `?page=${t.page}` : ""}`
      : `/api/next/tags/${e.name}${t.page ? `?page=${t.page}` : ""}`;
  let r = await tI(() => tw(i), "tags", n);
  return n.aborted || !r ? null : r;
}
function pA(e, t) {
  return (
    !!t &&
    (("tag" === e.page && "tag" === t.page && e.name === t.name) ||
      ("tags" === e.page && "tags" === t.page))
  );
}
function pM(e, t) {
  return (!e.page && !t.page) || e.page === t.page;
}
async function pB(e, t, n) {
  let i = new tH();
  try {
    let r = e.get().tags,
      a = r.loading;
    if ((a && a.ac.abort(), pA(t, r.route) && pM(n, r.query))) {
      await e.dispatch("tags/load:done", {
        route: t,
        query: n,
        content: r.content,
      });
      return;
    }
    if (
      (await e.dispatch("tags/load:processing", { route: t, query: n, ac: i }),
      i.signal.aborted)
    )
      return;
    let s = await pN(t, n, i.signal);
    await e.dispatch("tags/load:done", { route: t, query: n, content: s });
  } catch (r) {
    if (i.signal.aborted) return;
    console.error(r),
      await e.dispatch("tags/load:error", { route: t, query: n, error: r });
  }
}
let pD = (e) => {
    e.on("route/change", (t, n) => {
      let { routeContent: i, queryContent: r } = n;
      i && ("tag" === i.page || "tags" === i.page) && pB(e, i, r || {});
    }),
      e.on("tags/load:processing", (e, t) => {
        let { route: n, query: i, ac: r } = t;
        return { tags: { ...e.tags, loading: { route: n, query: i, ac: r } } };
      }),
      e.on("tags/load:done", (e, t) => {
        let { route: n, query: i, content: r } = t;
        return {
          tags: {
            ...e.tags,
            content: r,
            route: n,
            query: i,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
          },
        };
      }),
      e.on("tags/load:error", (e, t) => {
        let { route: n, query: i, error: r } = t;
        return {
          tags: {
            ...e.tags,
            current: null,
            route: n,
            query: i,
            loading: null,
            isFailed: !0,
            isNetworkFailed: r instanceof tE && 0 === r.status,
            isNotFound:
              r instanceof tE && (404 === r.status || 400 === r.status),
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
  pO = (e) => {
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
async function pR(e, t, n) {
  let i = tw(`/api/tab-editor?songId=${e}&part=${t}&revision=${n}`),
    r = await fetch(i);
  n4(r);
  let a = await r.json();
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
async function pz(e, t, n, i) {
  let r = tw("/api/tab-editor"),
    a = { songId: e, part: t, revision: n },
    s = [];
  i.forEach((e, t) => {
    e && s.push({ ...e, index: t });
  }),
    0 !== s.length &&
      (a.data = JSON.stringify({ measuresCount: i.length, packedData: s }));
  let o = await n5(r, a);
  return n4(o), o.json();
}
async function p$(e) {
  let t = tw(`/api/tab-editor/${e}`),
    n = await fetch(t);
  n4(n);
  let i = await n.json();
  if (!i.data) return;
  let r = JSON.parse(i.data),
    a = Array(r.measuresCount);
  return (
    r.packedData.forEach((e) => {
      let t = e.index;
      delete e.index, (a[t] = e);
    }),
    { songId: i.songId, part: i.part, revision: i.revision, data: a }
  );
}
async function pF(e, t) {
  let n = tw(`/api/tab-editor/admin-data?offset=${e}&limit=${t}`),
    i = await fetch(n);
  return n4(i), i.json();
}
let pV = function () {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : [0, 0, 0, 0, 0, 0],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = e[n.string] + n.fret;
    return i - e[t];
  },
  pU = (e, t) => {
    let n = e.measures.find((e) => e.index === t.measure),
      i = n?.voices.find((e) => e.index === t.voice);
    return i?.beats.find((e) => e.index === t.beat);
  },
  pH = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = e[t.measure];
    return n?.beats.find((e) => e.beatNum === t.beat && e.voice === t.voice);
  },
  pj = (e, t, n) => {
    let i = pV(n, t.string, e);
    return i === t.fret;
  },
  pG = (e, t, n) => {
    if (e.edit?.fret === "" && t.edit) {
      let i = t.edit,
        r = { string: i.string, fret: parseInt(i.fret) };
      return pj(e.note, r, n);
    }
    if (t.edit?.fret === "" && e.edit) {
      let i = e.edit,
        r = { string: i.string, fret: parseInt(i.fret) };
      return pj(t.note, r, n);
    }
    return !1;
  },
  pW = (e) => {
    let {
        originalBeat: t,
        editedBeat: n,
        currentString: i,
        string: r,
        tuning: a,
      } = e,
      s = t.notes.find((e) => e.string === i),
      o = n?.editedNotes.find((e) => e.string === i),
      l = t.notes.find((e) => e.string === r),
      c = n?.editedNotes.find((e) => e.string === r);
    return pG({ note: s, edit: o }, { note: l, edit: c }, a);
  },
  pq = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = [],
      r = [],
      a = pU(e, n),
      s = pQ(a?.layout, t);
    for (let e of s) {
      let t = e.editedNotes ?? [];
      for (let e of t)
        e.fret && "X" !== e.fret
          ? i.push(e.string)
          : e.fret || r.push(e.string);
    }
    for (let e of a?.layout.beats)
      if (e.notes) for (let t of e.notes) t && !t.bogus && i.push(t.string);
    return i.filter((e) => !r.includes(e));
  },
  pX = (e) =>
    Array(e)
      .fill(0)
      .map((e, t) => t),
  pY = (e, t, n) => {
    let i = e.filter((e) => ("up" === n ? e < t : e > t)),
      r = "up" === n ? Math.max(...i) : Math.min(...i);
    return Number.isFinite(r) ? r : null;
  },
  pK = (e, t) => {
    let n, i;
    let { measureNum: r, voice: a, beatNum: s, stringNum: o } = e,
      l = { measure: r, voice: a, beat: s },
      c = pU(t, l),
      d = pH(e.data, l);
    return (
      o > 0 &&
        (i = pW({
          originalBeat: c,
          editedBeat: d,
          currentString: o,
          string: o - 1,
          tuning: t.tuning,
        })),
      o < t.strings - 1 &&
        (n = pW({
          originalBeat: c,
          editedBeat: d,
          currentString: o,
          string: o + 1,
          tuning: t.tuning,
        })),
      i || n
    );
  },
  pJ = 12,
  pZ = (e, t) => {
    let n = ro(e),
      i = e.line.strings,
      r = t - n;
    if (r < -10 || r > 73) return;
    let a = Math.floor(r / 12),
      s = r - 12 * a <= 6 ? a : a + 1;
    return s < 0 ? (s = 0) : s >= i && (s = i - 1), s;
  },
  pQ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = e?.beats ?? [],
      i = [];
    for (let e of n) {
      let n = pH(t, {
        measure: e.measure.index,
        beat: e.index,
        voice: e.voice,
      });
      n && n.editedNotes.length && i.push(n);
    }
    return i;
  },
  p1 = function (e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      r = e.beats,
      a = pQ(e, n),
      s = a.find((e) => e.editedNotes.find((e) => e.string === i));
    if (
      (s && (t = r.find((e) => e.index === s.beatNum && e.voice === s.voice)),
      t)
    )
      return t;
    for (let e of r)
      if (!e.rest && e.notes && 0 !== e.notes.length) {
        for (let n of e.notes)
          if (n.string === i && !n.bogus) {
            t = e;
            break;
          }
        if (void 0 !== t) break;
      }
    if (void 0 !== t || (t = r.find((e) => !e.rest && e.notes?.length !== 0)))
      return t;
  },
  p0 = function (e, t, n) {
    let i,
      r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
      "up" === n
        ? (i = e - 1) < 0 && (i = r ? t - 1 : e)
        : "down" === n && (i = e + 1) >= t && (i = r ? 0 : e),
      i
    );
  },
  p2 = (e, t, n) => {
    let i = e,
      r = "right" === n ? "nextBeat" : "prevBeat";
    do {
      let e = i;
      if (!(i = e[r])) {
        let t = e.layout.beats.find((e) => e[r] && !e.lyrics);
        if (!t) return;
      }
      let t = i.layout.measureLayout.measure.index;
      for (let a of e.layout.beats) {
        if (!a[r] || a.lyrics || 0 === a.notes.length) continue;
        let e = a[r],
          s = e.layout.measureLayout.measure.index;
        if (("right" === n && s < t) || ("left" === n && s > t))
          (t = s), (i = e);
        else if (s === t) {
          let n = i.duration[0] / i.duration[1],
            r = a.duration[0] / a.duration[1];
          r < n && ((t = s), (i = e));
        }
      }
      if (i.rest) {
        let e = i.layout.beats.find(
          (e) => !e.rest && !e.lyrics && 0 !== e.notes.length
        );
        e && (i = e);
      }
    } while (!0 === i.rest);
    return i;
  },
  p5 = function (e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      r = e,
      a = i,
      s = r.layout,
      o = ro(s.measureLayout.lineLayout),
      l = s.measureLayout.measure.index,
      c = s.absoluteX * n,
      d = "",
      u = r.notes?.find((e) => e.string === t && !e.bogus);
    if (u) d = u.dead ? "X" : u.fret;
    else {
      let e = s.beats.filter(
        (e) => e.notes && 0 !== e.notes.length && e.voice !== i
      );
      for (let n of e) {
        let e = n.notes.find((e) => e.string === t && !e.bogus);
        e && ((d = e.fret), (r = n), (a = n.voice));
      }
    }
    return {
      formX: c,
      formY: (o + 12 * (t - 1)) * n,
      fret: d,
      measureNum: l,
      beatNum: r.index,
      beat: r,
      voice: a,
    };
  },
  p4 = (e, t) => {
    let {
        measureNum: n,
        beatNum: i,
        voice: r,
        stringNum: a,
        newFret: s,
        originalFret: o,
      } = t,
      l = [...e],
      c = l[n];
    if (c && c.beats) {
      c = { beats: [...c.beats] };
      let e = c.beats.findIndex((e) => e.beatNum === i && e.voice === r);
      if (-1 === e)
        c.beats.push({
          beatNum: i,
          voice: r,
          editedNotes: [{ string: a, fret: s, originalFret: o }],
        });
      else {
        let t = c.beats[e];
        t.editedNotes = [...t.editedNotes];
        let n = t.editedNotes.findIndex((e) => e.string === a);
        -1 !== n &&
          (t.editedNotes = t.editedNotes
            .slice(0, n)
            .concat(t.editedNotes.slice(n + 1))),
          ("" === o && "" === s) ||
            o === s ||
            t.editedNotes.push({ string: a, fret: s, originalFret: o }),
          0 === t.editedNotes.length &&
            (c.beats = c.beats.slice(0, e).concat(c.beats.slice(e + 1))),
          0 === c.beats.length && (c = void 0);
      }
      l[n] = c;
    } else
      (c = {
        beats: [
          {
            beatNum: i,
            voice: r,
            editedNotes: [{ string: a, fret: s, originalFret: o }],
          },
        ],
      }),
        (l[n] = c);
    return l;
  },
  p3 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = [...e];
    for (let e = 0; e < t.length; e++) {
      let r = t[e],
        a = r.measure.index,
        { fret: s } = p5(r, n.prevString, n.scale, r.voice);
      i = p4(i, {
        measureNum: a,
        beatNum: r.index,
        voice: r.voice,
        stringNum: n.nextString,
        originalFret: s.toString(),
        newFret: n.nextFret,
      });
    }
    return i;
  },
  p9 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 ? arguments[1] : void 0,
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (n.prevString === n.nextString) return p3(e, t, n);
    let i = [...e];
    for (let e of t) {
      let t = e.measure.index,
        r = p5(e, n.prevString, n.scale, e.voice);
      i = p4(i, {
        measureNum: t,
        beatNum: e.index,
        voice: e.voice,
        stringNum: n.prevString,
        originalFret: r.fret.toString(10),
        newFret: "",
      });
      let a = p5(e, n.nextString, n.scale, e.voice);
      i = p4(i, {
        measureNum: t,
        beatNum: e.index,
        voice: e.voice,
        stringNum: n.nextString,
        originalFret: a.fret.toString(),
        newFret: n.nextFret,
      });
    }
    return i;
  },
  p8 = (e, t, n) =>
    p9(e, t, {
      ...n,
      prevString: n.nextString,
      nextString: n.prevString,
      nextFret: n.prevFret,
      prevFret: n.nextFret,
    }),
  p6 = (e, t) => {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let i = e[n],
        r = t[n];
      if (
        i.voice !== r.voice ||
        i.beatNum !== r.beatNum ||
        i.editedNotes.length !== r.editedNotes.length
      )
        return !1;
      for (let e = 0; e < i.editedNotes.length; e++) {
        let t = i.editedNotes[e],
          n = r.editedNotes[e];
        if (
          t.string !== n.string ||
          t.fret !== n.fret ||
          t.originalFret !== n.originalFret
        )
          return !1;
      }
    }
    return !0;
  },
  p7 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let i = e[n],
        r = t[n];
      if (
        i.rest !== r.rest ||
        i.bogus !== r.bogus ||
        i.string !== r.string ||
        i.fret !== r.fret
      )
        return !1;
    }
    return !0;
  },
  he = (e) => {
    let t = [];
    for (let n of e)
      for (let e of n.voices) for (let n of e.beats) n.notes && t.push(n);
    return t;
  },
  ht = (e) => {
    let t = new Map();
    for (let n of e)
      for (let [e, i] of n.beatsLayoutsByTime.entries()) t.set(i, e);
    return t;
  },
  hn = (e, t) => e.index === t.index && p7(e.notes, t.notes),
  hi = (e, t) => {
    if (
      e.beatsLayoutsByTime.size !== t.beatsLayoutsByTime.size ||
      e.voices.length !== t.voices.length
    )
      return !1;
    for (let [n, i] of e.beatsLayoutsByTime.entries()) {
      let e = t.beatsLayoutsByTime.get(n);
      if (!e || i.beats.length !== e.beats.length) return !1;
      for (let t = 0; t < i.beats.length; t++) {
        let n = i.beats[t],
          r = e.beats[t];
        if (!hn(n, r)) return !1;
      }
    }
    return !0;
  },
  hr = (e, t) => {
    let n = e.filter((e) => hi(e, t.measure)),
      i = he(n),
      r = ht(n),
      a = r.get(t.layout);
    return i.filter(
      (e) =>
        e.index === t.index &&
        r.get(e.layout) === a &&
        !(e.index === t.index && e.measure.index === t.measure.index) &&
        p7(e.notes, t.notes)
    );
  },
  ha = (e, t, n) => {
    let i = pQ(e.layout, n),
      r = hr(t.current.measures, e),
      a = r.filter((e) => pQ(e.layout, n));
    return (
      (i.length || a.length) && (r = a.filter((e) => p6(pQ(e.layout, n), i))), r
    );
  },
  hs = "hasSeenEditor",
  ho = (e) => {
    let t = oI(hs);
    return t === e;
  },
  hl = (e) => oL(hs, e);
function hc(e) {
  return (e.returnValue = "o/"), "o/";
}
let hd = (e, t, n, i, r) => {
    if (e) {
      let a = e[t];
      if (a && a.beats) {
        let e = a.beats.find((e) => e.beatNum === n && e.voice === r);
        if (e && e.editedNotes) {
          let t = e.editedNotes.find((e) => e.string === i);
          if (t) return t.fret;
        }
      }
    }
  },
  hu = (e) => {
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
        let { route: n, tabEditor: i } = t,
          r = n.hasEditor,
          a = r
            ? location.pathname.replace("/editor", "")
            : `${location.pathname}/editor`;
        if ((e.dispatch("navigate/silent", a), r))
          return {
            tabEditor: {
              ...i,
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
        let { beatsLayout: i, stringNum: r, scale: a } = n,
          s = p1(i, t.tabEditor.data, r);
        if (!s) return;
        let o = s?.voice,
          {
            formX: l,
            formY: c,
            fret: d,
            beatNum: u,
            measureNum: p,
            ...h
          } = p5(s, r, a, o),
          f = hd(t.tabEditor.data, p, u, r, h.voice);
        if (c < 0 || Number.isNaN(c)) return;
        let { device: g, player: m } = t,
          y = lK(g) || lX(g.os) || lY(g.os),
          v = m.shouldPlay && m.canPlay;
        return (
          y ||
            v ||
            e.dispatch("cursor/move", {
              cursor: rh(h.beat.layout),
              loopStart: t.cursor.position.loopStart,
              loopEnd: t.cursor.position.loopEnd,
            }),
          {
            tabEditor: {
              ...t.tabEditor,
              positioned: !0,
              formX: l,
              formY: c,
              fret: void 0 !== f ? `${f}` : `${d}`,
              originalFret: `${d}`,
              beat: s,
              beatNum: u,
              stringNum: r,
              measureNum: p,
              voice: o,
            },
          }
        );
      });
    let t = (e, t, n, i, r) => {
      let a = e,
        s = t,
        o = a.layout.measureLayout.lineLayout.line.strings,
        l = "up" === n || "down" === n;
      return (
        l
          ? ((s = p0(t, o, n)), (a = i ? e : p1(e.layout, r, s)))
          : (a = p2(e, r, n)),
        { nextBeat: a, nextString: s }
      );
    };
    e.on("tabEditor/formMove", (n, i) => {
      let { tabEditor: r, cursor: a, device: s } = n,
        { scale: o, direction: l, preserveVoice: c } = i,
        { stringNum: d, beat: u, positioned: p } = r;
      if (!p) return;
      let { nextBeat: h, nextString: f } = t(u, d, l, c, r.data),
        {
          formX: g,
          formY: m,
          fret: y,
          beatNum: v,
          measureNum: b,
          ...w
        } = p5(h, f, o, h.voice),
        S = hd(r.data, b, v, f, w.voice),
        x = lK(s) || lX(s.os) || lY(s.os);
      return (
        x ||
          e.dispatch("cursor/move", {
            cursor: rh(w.beat.layout),
            loopStart: a.position.loopStart,
            loopEnd: a.position.loopEnd,
          }),
        {
          tabEditor: {
            ...r,
            positioned: !0,
            formX: g,
            formY: m,
            fret: void 0 !== S ? `${S}` : `${y}`,
            originalFret: `${y}`,
            beat: w.beat,
            voice: w.voice,
            beatNum: v,
            stringNum: f,
            measureNum: b,
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
        let { tabEditor: i, part: r } = t,
          { scale: a, newString: s } = n,
          {
            fret: o,
            stringNum: l,
            beatNum: c,
            measureNum: d,
            voice: u,
            beat: p,
          } = i;
        if (!o) {
          console.debug("No fret selected");
          return;
        }
        let h = pq(r.current, i.data, { measure: d, voice: u, beat: c }),
          f = h.includes(s);
        if (f) {
          console.debug("String is taken", { newString: s, takenStrings: h });
          return;
        }
        if (!Number.isInteger(s)) {
          console.debug("Invalid string", { newString: s });
          return;
        }
        let g = parseInt(o, 10),
          m = pV(r.current.tuning, s, { string: l, fret: g });
        if (Number.isNaN(m) || m < 0 || m > r.current.frets - 1) {
          console.debug("Fret is out of range", { newFret: m, newString: s });
          return;
        }
        e.dispatch("curiosity/event", {
          event: "Moved note",
          Via: "drag-and-drop",
        }),
          e.dispatch("tabEditor/autoReplace", {
            scale: a,
            measure: d,
            voice: u,
            beat: c,
            prevString: l,
            nextString: s,
            nextFret: m.toString(10),
            prevFret: o,
          }),
          e.dispatch("tabEditor/setForm", {
            scale: a,
            beatsLayout: p.layout,
            stringNum: s,
          });
      }),
      e.on("tabEditor/moveNote:shortcut", (t, n) => {
        let { tabEditor: i, part: r } = t,
          { fret: a, stringNum: s, beatNum: o, measureNum: l, voice: c } = i;
        if (!a) {
          console.debug("No fret selected");
          return;
        }
        let d = pq(r.current, i.data, { measure: l, voice: c, beat: o }),
          u = p0(s, r.current.strings, n.direction, !1),
          p = d.includes(u);
        if (p) {
          let e = pX(r.current.strings),
            t = e.filter((e) => !d.includes(e));
          u = pY(t, u, n.direction);
        }
        if (!Number.isInteger(u)) {
          console.debug("String is taken", { newString: u, takenStrings: d });
          return;
        }
        let h = pV(r.current.tuning, u, { string: s, fret: parseInt(a, 10) });
        if (Number.isNaN(h) || h < 0 || h > r.current.frets - 1) {
          console.debug("Fret is out of range", { newFret: h, newString: u });
          return;
        }
        e.dispatch("curiosity/event", { event: "Moved note", Via: "shortcut" }),
          e.dispatch("tabEditor/autoReplace", {
            scale: n.scale,
            measure: l,
            voice: c,
            beat: o,
            prevString: s,
            nextString: u,
            nextFret: h.toString(10),
            prevFret: a,
          });
        let f = Math.abs(u - s);
        for (let t = 0; t < f; t++)
          e.dispatch("tabEditor/formMove", { ...n, preserveVoice: !0 });
      }),
      e.on("tabEditor/autoReplace:reset", (e) => ({
        tabEditor: { ...e.tabEditor, autoReplaced: void 0 },
      })),
      e.on("tabEditor/autoReplace:revert", (t) => {
        let { tabEditor: n } = t,
          i = n.lastAutoReplace;
        if (i)
          return (
            e.dispatch("curiosity/event", { event: "Reverted autoreplace" }),
            {
              tabEditor: {
                ...n,
                data: p8(n.data, i.beats, i.params),
                autoReplaced: void 0,
                lastAutoReplace: void 0,
              },
            }
          );
      }),
      e.on("tabEditor/autoReplace", (t, n) => {
        let { tabEditor: i, part: r, experiments: a } = t,
          s = pU(r.current, n),
          o = a.editor_autoreplace,
          l = ha(s, r, i.data);
        e.dispatch("tabEditor/edited", n.nextFret),
          o?.status === "pending" &&
            l.length &&
            e.dispatch("experiments/activate", {
              experimentName: "editor_autoreplace",
            }),
          "on" === o.segment && l.length
            ? e.dispatch("curiosity/event", { event: "Autoreplaced note" })
            : (l = []);
        let c = [s].concat(l);
        return {
          tabEditor: {
            ...i,
            data: p9(i.data, c, n),
            fret: n.nextFret,
            status: "changes",
            autoReplaced: l.length,
            lastAutoReplace: { params: n, beats: l },
          },
        };
      }),
      e.on("tabEditor/changeNote", (t, n) => {
        let { tabEditor: i, part: r } = t,
          { newFret: a, prevFret: s } = n,
          {
            measureNum: o,
            fret: l,
            stringNum: c,
            beatNum: d,
            voice: u,
            positioned: p,
          } = i;
        p &&
          a !== l &&
          (pK(i, r.current) &&
            e.dispatch("curiosity/event", { event: "Moved note", Via: "edit" }),
          e.dispatch("tabEditor/autoReplace", {
            scale: null,
            measure: o,
            voice: u,
            beat: d,
            prevString: c,
            nextString: c,
            nextFret: a,
            prevFret: void 0 !== s ? s : l,
          }));
      });
    let n = (t) => {
      let { tabEditor: n } = t;
      "changes" === n.status && e.dispatch("tabEditor/save");
    };
    e.on("user/signIn", n),
      e.on("user/googleSignIn", n),
      e.on("user/signUp", n),
      e.on("tabEditor/edited", (t) => {
        let { user: n } = t;
        window.addEventListener("beforeunload", hc),
          clearTimeout(s),
          (s = setTimeout(() => pg(e, "TriedEditor"), 2e4)),
          n.isLoggedIn &&
            (clearTimeout(o),
            (o = setTimeout(() => e.dispatch("tabEditor/save"), 3e3)));
      }),
      e.on("tabEditor/save", async (t) => {
        let { meta: n, part: i, tabEditor: r, user: a } = t;
        try {
          "changes" === r.status &&
            a.isLoggedIn &&
            (e.dispatch("tabEditor/save:changeStatus", "saving"),
            await pz(n.songId, i.partId, i.revisionId, r.data),
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
            "saved" === t && window.removeEventListener("beforeunload", hc),
            { tabEditor: { ...e.tabEditor, status: t } }
          );
      }),
      e.on("part/load:raw", () => {
        e.dispatch("tabEditor/load");
      }),
      e.on("tabEditor/load", async (t) => {
        let { user: n, meta: i, query: r } = t;
        try {
          if ((e.dispatch("tabEditor/load:flush"), n.isLoggedIn)) {
            let t;
            (t =
              void 0 !== r.tabedit && tg(n, V.USE_TAB_EDITOR)
                ? await p$(+r.tabedit)
                : await pR(i.current.songId, i.partId, i.current.revisionId)) &&
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
          window.removeEventListener("beforeunload", hc),
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
        let { songId: n, part: i, data: r } = t;
        if (n !== e.meta?.current?.songId || i !== e.meta?.partId) {
          console.log("Loaded tab editor data lost its relevance");
          return;
        }
        return { tabEditor: { ...e.tabEditor, data: r } };
      }),
      e.on("tab_editor/toggleAdminPanel", (e) => ({
        tabEditor: {
          ...e.tabEditor,
          adminPanelOpened: !e.tabEditor.adminPanelOpened,
        },
      })),
      e.on("tabEditor/loadAdminData", async (t, n) => {
        let { user: i } = t,
          { offset: r, limit: a } = n;
        try {
          if (tg(i, V.USE_TAB_EDITOR)) {
            let t = await pF(r, a);
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
        let i = t.tabEditor.adminData.find((e) => e.id === n);
        if (tg(t.user, V.USE_TAB_EDITOR) && i) {
          let { songId: r, partId: a, revisionId: s } = t.part,
            o = e6(
              { songId: i.songId, artist: "", title: "" },
              i.part,
              i.revision
            );
          e.dispatch("navigate", `${o}?tabedit=${n}`),
            i.songId === r &&
              i.part === a &&
              i.revision === s &&
              tR(() => e.dispatch("tabEditor/load"));
        }
      });
  },
  hp = "d1u3zjg5j4sw4b";
class hh extends Error {
  constructor(e) {
    super(e),
      Error.captureStackTrace && Error.captureStackTrace(this, hh),
      (this.name = "InProgressError"),
      (this.message = e);
  }
}
let hf = async (e) => {
  try {
    let t = await n2(`https://d1u3zjg5j4sw4b.cloudfront.net/${e}`);
    return n4(t), t.json();
  } catch (e) {
    if (404 === e.status) return null;
    throw e;
  }
};
async function hg(e, t) {
  let n = `${e}/${t.songId}-${t.partId}-${t.revisionId}.json`,
    i = await hf(n);
  if (i) return console.log("Taken from the cloud"), i;
  let r = tw("/fingerings/generate"),
    a = await n5(r, { part: t });
  n4(a), console.log("Generated on server");
  let s = await a.json();
  if ("In progress" === s.status) throw new hh(s.info);
  return s;
}
let hm = "v1",
  hy = null,
  hv = (e) => {
    e.on("fingerings/loadedPart", (e, t) => {
      let { fingerings: n, part: i } = e,
        { songId: r, revisionId: a, rawPart: s } = t;
      return (hy && clearTimeout(hy), i.songId !== r || i.revisionId !== a)
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
        let { part: n, fingerings: i, experiments: r } = t,
          { partId: a, songId: s, revisionId: o } = n;
        hy && clearTimeout(hy);
        let l =
          r.paid_fingerings?.segment === "ut" ||
          r.paid_fingerings?.segment === "on";
        if (l && "Loading" !== i.status) {
          if (i.shown)
            e.dispatch("curiosity/event", {
              event: "Clicked close fingerings",
            }),
              e.dispatch("fingerings/hide");
          else {
            if (
              (e.dispatch("curiosity/event", {
                event: "Clicked open fingerings",
              }),
              (hy = setTimeout(
                () => e.dispatch("curiosity/usedFingerings"),
                3e4
              )),
              i.storedFingerings.find((e) => e.partId === a))
            ) {
              e.dispatch("fingerings/show", a);
              return;
            }
            if (i.rawPart) {
              e.dispatch("fingerings/load:init");
              try {
                let t = await hg("v1", i.rawPart),
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
          i = [...n.storedFingerings];
        return (
          i.find((e) => e.partId === t.partId) || i.push(t),
          {
            fingerings: {
              ...n,
              storedFingerings: i,
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
          i = n.storedFingerings.find((e) => e.partId === t);
        if (i)
          return {
            fingerings: { ...n, trackFingering: i, shown: !0, status: null },
          };
      });
  };
async function hb(e) {
  let t = tw("/api/person/revisions"),
    n = await fetch(t, { credentials: "include" });
  return await n7(n), n4(n), await n.json();
}
async function hw(e, t) {
  try {
    e("myTabs/load:processing");
    let n = await hb(t);
    e("myTabs/load:done", n.revisions || []);
  } catch (t) {
    console.error("myTabs/load:error", t), e("myTabs/load:error", t);
  }
}
let hS = (e) => {
    e.on("user/signIn", async () => hw(e.dispatch, void 0)),
      e.on("user/googleSignIn", async () => hw(e.dispatch, void 0)),
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
  hx = (e) => {
    e.on("playAlongAd/toggle", (e) => {
      let { playAlongAd: t } = e;
      return { playAlongAd: { isOpened: !t.isOpened } };
    });
  },
  hk = (e) => {
    e.on("tempo/apply", (e, t) => ({ tempo: { tempo: t } })),
      e.on("part/load:inflated", (e, t) => {
        let { cursor: n } = e,
          { current: i } = t;
        return { tempo: { tempo: so(i, n.position.cursor) } };
      }),
      e.on("cursor/move", (e, t) => {
        let { part: n, tempo: i } = e,
          r = n.current ? so(n.current, t.cursor) : i.tempo;
        if (r != i.tempo) return { tempo: { tempo: r } };
      });
  };
var hC = (e) =>
  new D(
    [
      O,
      lQ,
      em,
      hk,
      l$,
      lq,
      iB,
      oj,
      oi,
      on,
      oc,
      ox,
      oC,
      os,
      dJ,
      oX,
      l1,
      l7,
      lJ,
      cD,
      cF,
      cQ,
      c0,
      cI,
      c4,
      dn,
      di,
      dM,
      dR,
      dF,
      dq,
      cJ,
      pm,
      pb,
      px,
      pc,
      pP,
      pI,
      hu,
      pL,
      pO,
      pD,
      hv,
      uV,
      hS,
      hx,
    ],
    e
  );
function hT() {
  try {
    "serviceWorker" in navigator &&
      window.addEventListener("load", () => {
        let e = `/service-worker${A ? "-" + A : ""}.js`;
        navigator.serviceWorker
          .register(e, { scope: "/" })
          .catch(console.error.bind(console));
      });
  } catch (e) {
    console.error(e);
  }
}
function hE() {
  try {
    navigator.serviceWorker.ready.then((e) => {
      e.unregister();
    });
  } catch (e) {
    console.error(e);
  }
}
let h_ = {},
  hP = {},
  hI = {},
  hL = {},
  hN = "Cdy28x",
  hA = "Cdylb",
  hM = "Cdy9a",
  hB = "Cdyrh",
  hD = "Cdy21",
  hO = "Cdy21 Cdy153",
  hR = "Cdy1xh",
  hz = "Cdyft",
  h$ = "Cdy17e",
  hF = "Cdy18g",
  hV = "Cdy18g Cdy2gp",
  hU = "Cdywb",
  hH = "Cdy2g1",
  hj = "Cdy28x Cdy2cz",
  hG = "Cdy28x Cdyu0",
  hW = "Cdy28x Cdy308",
  hq = "Cdy28x Cdy308 Cdy2al",
  hX = "Cdy28x Cdy29",
  hY = "Cdy2qp",
  hK = "Cdy1k3",
  hJ = "Cdy2fc",
  hZ = {
    main: "Cdy28x",
    chordsMinimalism: "Cdylb",
    chords: "Cdy9a",
    tablature: "Cdyrh",
    pane: "Cdy21",
    paneWithEditor: "Cdy21 Cdy153",
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
    changesOnly: "Cdy2qp",
    isTestMode: "Cdy1k3",
    videoButtonPlug: "Cdy2fc",
  };
function hQ(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
    i < t;
    i++
  )
    n[i - 1] = arguments[i];
  return function (t) {
    return g(e, { ...t, ...cn.apply(null, n) });
  };
}
let h1 = "ki1vh",
  h0 = "ki1vh ki326",
  h2 = "ki1vh ki2jc",
  h5 = "ki1vh ki1hu",
  h4 = "ki1vh kibb",
  h3 = "ki29b",
  h9 = "ki1vh ki1ny",
  h8 = "ki1vh ki32k",
  h6 = "ki1vh ki32k ki2jd",
  h7 = "ki1vh ki2iu",
  fe = {
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
  ft = (e) => {
    let {
      x: t,
      y: n,
      width: i,
      height: r,
      fill: a,
      className: s = fe.spinner,
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
        width: i,
        height: r,
        style: o,
        viewBox: "25 25 50 50",
        "aria-labelledby": "spinner-title",
      },
      g("circle", { stroke: a, cx: "50", cy: "50", r: "20" })
    );
  },
  fn = "D0y2s5",
  fi = { loader: "D0y2s5" };
function fr() {
  return m("div", {
    className: fi.loader,
    children: g(ft, { width: 50, height: 40, fill: "#128df6" }),
  });
}
let fa = "B41py",
  fs = "B41py B4d2",
  fo = "B41py B431b",
  fl = "B41py B41jo",
  fc = {
    alert: "B41py",
    info: "B41py B4d2",
    error: "B41py B431b",
    notice: "B41py B41jo",
  };
function fd(e) {
  switch (e) {
    case "error":
      return fc.error;
    case "notice":
      return fc.notice;
    default:
      return fc.info;
  }
}
function fu(e, t, n, i) {
  let r = e.length,
    a = Math.ceil((r * n + i * Math.ceil((r * n) / t)) / t);
  if (1 === a) return [e];
  let s = Math.ceil((t - i) / n),
    o = 0,
    l = [];
  for (let t = 0; t < a; t++) {
    let n;
    let i = e.substr(o, s);
    if (t !== a - 1) {
      let e = i.split(" ");
      n = i.lastIndexOf(e[e.length - 1]);
    }
    (o += n), l.push(i.substr(0, n).trim());
  }
  return l;
}
function fp(e) {
  let { level: t, title: n, action: i } = e,
    { screen: r, device: a } = cn("screen", "device");
  if ("bot" === a.type) return;
  let s = fd(t),
    o = a.isPhone ? 0 : 190,
    l = r.viewport.width - o > 600 ? 600 : r.viewport.width - o,
    c = fu(n, l, 9, 10),
    d = fu(i, l, 7, 10),
    u =
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
          u(`<svg xmlns='http://www.w3.org/2000/svg' width='${
            9 * e.length + 10
          }' height='30'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='20px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
      })
    ),
    i &&
      d.map((e) =>
        g("img", {
          height: 22,
          "aria-label": "action",
          alt: i,
          src:
            "data:image/svg+xml;base64," +
            u(`<svg xmlns='http://www.w3.org/2000/svg' width='${
              7 * e.length + 10
            }' height='22'>
            <text x='50%' y='50%' font-family='"songsterr", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='central' text-anchor='middle'>${e}</text>
          </svg>`),
        })
      )
  );
}
function fh() {
  let [e] = y((e) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(e),
      console && console.error(e);
  });
  return e
    ? m(fp, {
        level: "error",
        reason: "lazy",
        title: "Failed to load page",
        action: "Please disable your ad blocker and check network connection",
      })
    : m(v, {
        fallback: m(fr, {}),
        children: m(this.props.component, this.props),
      });
}
let ff = (e) => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
function fg(e) {
  let t = d(ce),
    n = e.href || e.to,
    i = e.onClick,
    r = b(
      (e) => {
        ff(e) || (e.preventDefault(), i && i(), t.dispatch("navigate", n));
      },
      [n, i]
    );
  return m("a", { ...e, href: n, onClick: r, to: null });
}
let fm = "i5k2",
  fy = "i5k2 i52z2",
  fv = "i5k2 i51pj",
  fb = "i5k2 i52e5",
  fw = "i5k2 i52z2 i533w",
  fS = "i5k2 i52z2 i515d",
  fx = "i5k2 i52z2 i527v",
  fk = "i5k2 i52z2 i513s",
  fC = "i5k2 i52z2 i51e9",
  fT = "i5k2 i52z2 i51xu",
  fE = "i5k2 i52wn",
  f_ = "i51p5",
  fP = "i533x",
  fI = "i5p0",
  fL = "i5tp",
  fN = "i5tp i51jx",
  fA = "i5tp i5173",
  fM = "i5t4",
  fB = "i51o8",
  fD = "i517k",
  fO = "i52ov",
  fR = {
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
  fz = fm + " vtm3",
  f$ = fM + " vt1nf",
  fF = "vt25r",
  fV = { popup: fm + " vtm3", text: fM + " vt1nf", surveySection: "vt25r" };
class fU extends w {
  componentDidMount() {}
  onUnderstandLinkClick = (e) => {
    e.preventDefault(), this.props.dispatch("layer/hide");
  };
  onStillHaveQuestionsLinkClick = () => {};
  render() {
    return g(
      "div",
      { className: fV.popup, id: "explain-difficulty-popup" },
      g(
        "div",
        { className: fV.text },
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
          { className: fV.surveySection },
          g(
            "a",
            { onClick: this.onUnderstandLinkClick, href: "", role: "button" },
            "I understand, all clear"
          ),
          g(
            fg,
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
var fH = hQ(fU);
let fj = c(null),
  fG = (e) => e && e.props;
function fW(e, t) {
  let n = (e) => (t && fG(e) ? t(e) : e),
    i = Object.create(null);
  return (
    e &&
      S(e).forEach((e) => {
        e && (i[e.key] = n(e));
      }),
    i
  );
}
function fq(e, t) {
  let n;
  function i(n) {
    return n in t ? t[n] : e[n];
  }
  (e = e || {}), (t = t || {});
  let r = Object.create(null),
    a = [];
  for (let n in e) n in t ? a.length && ((r[n] = a), (a = [])) : a.push(n);
  let s = {};
  for (let e in t) {
    if (r[e])
      for (n = 0; n < r[e].length; n++) {
        let t = r[e][n];
        s[r[e][n]] = i(t);
      }
    s[e] = i(e);
  }
  for (n = 0; n < a.length; n++) s[a[n]] = i(a[n]);
  return s;
}
function fX(e, t, n) {
  return null != n[t] ? n[t] : e.props && e.props[t];
}
function fY(e, t) {
  return fW(e.children, (n) =>
    x(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: fX(n, "appear", e),
      enter: fX(n, "enter", e),
      exit: fX(n, "exit", e),
    })
  );
}
function fK(e, t, n) {
  let i = fW(e.children),
    r = fq(t, i);
  return (
    Object.keys(r).forEach((a) => {
      let s = r[a];
      if (!fG(s)) return;
      let o = a in t,
        l = a in i,
        c = t[a],
        d = fG(c) && !c.props.in;
      l && (!o || d)
        ? (r[a] = x(s, {
            onExited: n.bind(null, s),
            in: !0,
            exit: fX(s, "exit", e),
            enter: fX(s, "enter", e),
          }))
        : l || !o || d
        ? l &&
          o &&
          fG(c) &&
          (r[a] = x(s, {
            onExited: n.bind(null, s),
            in: c.props.in,
            exit: fX(s, "exit", e),
            enter: fX(s, "enter", e),
          }))
        : (r[a] = x(s, { in: !1 }));
    }),
    r
  );
}
let fJ = Object.values || ((e) => Object.keys(e).map((t) => e[t]));
class fZ extends w {
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
    let { children: n, handleExited: i, firstRender: r } = t;
    return { children: r ? fY(e, i) : fK(e, n, i), firstRender: !1 };
  }
  handleExited(e, t) {
    let n = fW(this.props.children);
    e.key in n ||
      (e.props.onExited && e.props.onExited(t),
      this.setState((t) => {
        let n = { ...t.children };
        return delete n[e.key], { children: n };
      }));
  }
  render() {
    let { component: e, childFactory: t, ...n } = this.props,
      i = fJ(this.state.children).map(t);
    return (
      delete n.appear,
      delete n.enter,
      delete n.exit,
      g(
        fj.Provider,
        { value: { isMounting: !this.appeared } },
        e ? g(e, n, i) : g(k, null, i)
      )
    );
  }
}
let fQ = "unmounted",
  f1 = "exited",
  f0 = "entering",
  f2 = "entered",
  f5 = "exiting";
function f4(e) {
  return e ? e.base || (1 === e.nodeType && e) : null;
}
class f3 extends w {
  static contextType = fj;
  constructor(e, t) {
    let n;
    super(e, t);
    let i = t && !t.isMounting ? e.enter : e.appear;
    (this.appearStatus = null),
      e.in
        ? i
          ? ((n = f1), (this.appearStatus = f0))
          : (n = f2)
        : (n = e.unmountOnExit || e.mountOnEnter ? fQ : f1),
      (this.state = { status: n }),
      (this.nextCallback = null);
  }
  static getDerivedStateFromProps(e, t) {
    let { in: n } = e;
    return n && t.status === fQ ? { status: f1 } : null;
  }
  componentDidMount() {
    this.updateStatus(!0, this.appearStatus);
  }
  componentDidUpdate(e) {
    let t = null;
    if (e !== this.props) {
      let { status: e } = this.state;
      this.props.in
        ? e !== f0 && e !== f2 && (t = f0)
        : (e === f0 || e === f2) && (t = f5);
    }
    this.updateStatus(!1, t);
  }
  componentWillUnmount() {
    this.cancelNextCallback();
  }
  getTimeouts() {
    let e, t, n;
    let { timeout: i } = this.props;
    return (
      (e = t = n = i),
      null != i &&
        "number" != typeof i &&
        ((e = i.exit), (t = i.enter), (n = i.appear)),
      { exit: e, enter: t, appear: n }
    );
  }
  updateStatus() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (null !== t) {
      this.cancelNextCallback();
      let n = f4(this);
      t === f0 ? this.performEnter(n, e) : this.performExit(n);
    } else
      this.props.unmountOnExit &&
        this.state.status === f1 &&
        this.setState({ status: fQ });
  }
  performEnter(e, t) {
    let { enter: n } = this.props,
      i = this.context ? this.context.isMounting : t,
      r = this.getTimeouts();
    if (!t && !n) {
      this.safeSetState({ status: f2 }, () => {
        this.props.onEntered(e);
      });
      return;
    }
    this.props.onEnter(e, i),
      this.safeSetState({ status: f0 }, () => {
        this.props.onEntering(e, i),
          this.onTransitionEnd(e, r.enter, () => {
            this.safeSetState({ status: f2 }, () => {
              this.props.onEntered(e, i);
            });
          });
      });
  }
  performExit(e) {
    let { exit: t } = this.props,
      n = this.getTimeouts();
    if (!t) {
      this.safeSetState({ status: f1 }, () => {
        this.props.onExited(e);
      });
      return;
    }
    this.props.onExit(e),
      this.safeSetState({ status: f5 }, () => {
        this.props.onExiting(e),
          this.onTransitionEnd(e, n.exit, () => {
            this.safeSetState({ status: f1 }, () => {
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
    return e === fQ
      ? null
      : g(fj.Provider, { value: null }, this.props.children);
  }
}
function f9() {}
f3.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: f9,
  onEntering: f9,
  onEntered: f9,
  onExit: f9,
  onExiting: f9,
  onExited: f9,
};
class f8 extends w {
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
        i = window.requestAnimationFrame;
      n &&
        i(() => {
          i(() => {
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
      i = this.props.animationStyles[t + "Active"],
      r = this.props.animationStyles[t + "Done"];
    n && e.classList.remove(n),
      i && e.classList.remove(i),
      r && e.classList.remove(r);
  }
  render() {
    return g(f3, {
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
let f6 = 27,
  f7 = 28,
  ge = 29,
  gt = 30,
  gn = 31,
  gi = 32,
  gr = 33,
  ga = 34,
  gs = 36,
  go = 35,
  gl = 39,
  gc = 38,
  gd = 40,
  gu = 37,
  gp = 91,
  gh = 42,
  gf = 46,
  gg = 44,
  gm = 92,
  gy = 50,
  gv = 48,
  gb = 47,
  gw = 45,
  gS = 41,
  gx = 43,
  gk = 49,
  gC = 57,
  gT = 51,
  gE = 59,
  g_ = 93,
  gP = 55,
  gI = 52,
  gL = 53,
  gN = 54,
  gA = 56,
  gM = 102,
  gB = 99,
  gD = 58,
  gO = 60,
  gR = 61,
  gz = 62,
  g$ = 63,
  gF = 64,
  gV = 65,
  gU = 66,
  gH = 67,
  gj = 68,
  gG = 69,
  gW = 70,
  gq = 71,
  gX = 72,
  gY = 73,
  gK = 74,
  gJ = 75,
  gZ = 76,
  gQ = 76,
  g1 = 77,
  g0 = 78,
  g2 = 79,
  g5 = 80,
  g4 = 81,
  g3 = 82,
  g9 = 83,
  g8 = 84,
  g6 = 85,
  g7 = 86,
  me = 87,
  mt = [
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
  mn = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
  mi = [49, 57],
  mr = [56, 102, 99, 54, 76, 77];
function ma(e, t, n) {
  let i = n * (5 - t) + 3;
  return mn.includes(e) ||
    mi.includes(e) ||
    92 === e ||
    46 === e ||
    52 === e ||
    93 === e ||
    59 === e
    ? `M0 4v${i - 4}`
    : mr.includes(e)
    ? `M0 3v${i - 3}`
    : `M0 0v${i}`;
}
function ms(e) {
  let t = mt.filter((t) => e.has(t[0]));
  return e.has(41) && e.has(45) && (t = t.filter((e) => 45 !== e[0])), t;
}
function mo(e) {
  let { noteString: t, intervalSize: n, className: i, noteTransform: r } = e;
  return m("use", {
    className: i,
    transform: r + ` translate(0, ${-(t - Math.round(0.999 * t)) * n})`,
    xlinkHref: "#extraLine",
  });
}
function ml(e) {
  let { fret: t, className: n, transform: i } = e;
  return mn.includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumCross" })
    : mi.includes(t)
    ? m("use", {
        className: n,
        transform: i,
        xlinkHref: "#drumCross",
        style: "stroke-width: 2",
      })
    : 52 === t
    ? m("g", {
        className: n,
        transform: i,
        children: [
          m("use", { xlinkHref: "#drumHat" }),
          m("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
        ],
      })
    : mr.includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumTriangle" })
    : [53, 91, 34].includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumRhomb" })
    : [46].includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumCircleCross" })
    : [92].includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumCircleStroke" })
    : [31].includes(t)
    ? m("use", { className: n, transform: i, xlinkHref: "#drumStroke" })
    : m("use", { className: n, transform: i, xlinkHref: "#drum" });
}
let mc = "rw29l",
  md = { figure: "rw29l" },
  mu = "B6413b",
  mp = { strings: "B6413b" },
  mh = "h82xl",
  mf = "h89u",
  mg = "h82ou",
  mm = "h8j2",
  my = "h82so",
  mv = "h81p9",
  mb = "h81p9 h8e1",
  mw = "h81p9 h82d8",
  mS = "h81p9 h82c6",
  mx = "h81p9 h8cd",
  mk = "h816m",
  mC = "h818t",
  mT = "h818t h810t",
  mE = "h81w1",
  m_ = "h82qg",
  mP = "h8152",
  mI = "h8ey",
  mL = "h8ey h81yr",
  mN = "h8ey h8306",
  mA = "h8ey h81cu",
  mM = "h8ey h82xx",
  mB = "h8ey h81cp",
  mD = "h8ey h82tw",
  mO = "h8ey h85n",
  mR = "h8ey h82pf",
  mz = {
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
  m$ = 60;
function mF(e) {
  let { end: t, intervalSize: n } = e,
    i = "M0,0v48";
  for (let e = 0; e < 5; e++) i += `M0,${n * e} h${t}`;
  return (i += "V0"), g("path", { className: mp.strings, d: i });
}
function mV(e) {
  let { x: t, title: n, fret: i, string: r, intervalSize: a } = e;
  return g(
    k,
    null,
    g(
      "text",
      { textAnchor: "middle" },
      n.split("\n").map((e, n) => g("tspan", { x: t, y: -14 * (3 - n) }, e))
    ),
    g(mU, { x: t, fret: i, string: r, intervalSize: a })
  );
}
function mU(e) {
  let { x: t, fret: n, string: i, intervalSize: r } = e,
    a = mz.drums0,
    s = `translate(${t}, ${0.5 + r * i})`,
    o = g(ml, { fret: n, className: a, transform: s }),
    l =
      (i <= -1 || i >= 5) &&
      g(mo, {
        noteString: i,
        intervalSize: r,
        className: mp.strings,
        noteTransform: s,
      });
  return 93 === n || 59 === n
    ? g(
        k,
        null,
        l,
        g("use", {
          className: a,
          transform: `translate(${t}, ${0.5 - r / 2})`,
          xlinkHref: "#drumHatEdge",
        }),
        o
      )
    : l
    ? g(k, null, l, o)
    : o;
}
function mH(e) {
  let { drumNotes: t, intervalSize: n } = e,
    i = 60 * Math.max(4, t.length);
  return g(
    "svg",
    { className: md.figure, width: i, height: 130 },
    g(
      "g",
      { transform: "translate(0, 54)" },
      g(mF, { end: i, intervalSize: n }),
      t.map((e, t) =>
        g(mV, {
          fret: e[0],
          intervalSize: n,
          string: r4(e[0], !0),
          title: e[1],
          x: 60 * t + 30,
        })
      )
    )
  );
}
let mj = "Bcrye",
  mG = "Bcr2z8",
  mW = "Bcr19p",
  mq = "Bcr1zk",
  mX = "Bcr236",
  mY = "Bcr1zo",
  mK = "Bcr1os",
  mJ = "Bcr1dk",
  mZ = "Bcr1zo Bcrlb",
  mQ = "Bcrl3",
  m1 = {
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
  m0 = "Byam0",
  m2 = "Bya2az",
  m5 = "Bya2dc",
  m4 = "Bya1se",
  m3 = {
    exitActive: "Byam0",
    enterActive: "Bya2az",
    enter: "Bya2dc",
    exit: "Bya1se",
  },
  m9 = "Ccsdl",
  m8 = "Ccsnt",
  m6 = "Ccstw",
  m7 = "Ccs2i1",
  ye = {
    exitActive: "Ccsdl",
    enterActive: "Ccsnt",
    enter: "Ccstw",
    exit: "Ccs2i1",
  },
  yt = { animationStyles: m3 },
  yn = { animationStyles: ye },
  yi = "help_notation";
function yr(e, t) {
  let n = ms(e),
    i = [];
  for (let e = 0; e < n.length; e += 4) i.push(n.slice(e, e + 4));
  return t && i.length % 2 == 1 && i.push([]), i;
}
function ya(e) {
  let t = Math.floor((e.size + 2) / 3),
    n = [...e.values()];
  return [n.slice(0, t), n.slice(t, 2 * t), n.slice(2 * t)];
}
let ys = C((e) => {
    let { usedDrums: t, horizontal: n } = e,
      { layer: i, experiments: r } = cn("layer", "experiments"),
      a = i.layer === yi,
      s = r.drum_standard_notation?.segment !== "drop",
      o = s ? yr(t, n) : ya(t);
    return g(
      fZ,
      null,
      a &&
        g(
          f8,
          n ? yt : yn,
          g(
            "div",
            { className: n ? m1.wrapHorizontal : m1.wrap },
            g(
              "div",
              {
                className: s ? m1.notation : m1.notation__old,
                id: "drum_notation",
              },
              g(
                "h3",
                { className: m1.title },
                "Instruments in the current track"
              ),
              s
                ? o.map((e) => m(mH, { drumNotes: e, intervalSize: iD }))
                : o.map((e, t) =>
                    g(
                      "div",
                      { className: m1.col, key: t },
                      e.map((e) =>
                        g(
                          "dl",
                          { className: m1.line, key: e.name },
                          g("dt", { className: m1.name }, e.name),
                          g("dd", { className: m1.def }, rJ[e.name])
                        )
                      )
                    )
                  )
            )
          )
        )
    );
  }),
  yo = "Cpf12y",
  yl = "Cpf2jn",
  yc = { difficulty: "Cpf12y", placeholder: "Cpf2jn" },
  yd = 5,
  yu = (e) => {
    let { id: t, difficultyString: n, difficultyNA: i } = e;
    if (!n || i)
      return g("span", { className: yc.placeholder, title: "Not calculated" });
    let r = 5 * ng(n);
    return g("span", {
      id: t,
      className: yc.difficulty,
      style: { "--diffSize": `${r}px` },
      title: nm(n),
    });
  };
function yp(e) {
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
let yh = "C6110p",
  yf = "C611iz",
  yg = "C61zq",
  ym = "C6131n",
  yy = "C612su",
  yv = "C61p",
  yb = "C61rs",
  yw = "C61a4",
  yS = "C6133l",
  yx = "C611xo",
  yk = "C612yg",
  yC = "C612gh",
  yT = "C61287",
  yE = "C612h7",
  y_ = "C612h7 C611ae",
  yP = "C61az",
  yI = "C61jc",
  yL = "C611ts",
  yN = "C612rd",
  yA = "C61212",
  yM = "C611fz",
  yB = "C611m5",
  yD = "C612eq",
  yO = "C612w9",
  yR = {
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
  yz = { animationStyles: ye };
function y$(e) {
  let { handleNotation: t, track: n } = e,
    {
      dispatch: i,
      part: r,
      meta: a,
      screen: s,
      layer: o,
      device: l,
      experiments: c,
    } = cn("layer", "part", "meta", "screen", "layer", "device", "experiments"),
    d = l.isDesktop,
    u = s.isSmall,
    p = r.current && r.current.usedDrums,
    h = b(() => {
      i("layer/show", "difficulty_explained_popup");
    }, []),
    m = c.revisions_in_srwm?.segment === "on",
    y = n.difficulty,
    v = !u && y && "difficulty_explained_popup" === o.layer,
    w = {
      className: yR.explainLink,
      onClick: h,
      title: "Explain how difficulty is calculated",
      id: "explain_difficulty_link",
    },
    S = l.locale ? [l.locale] : void 0,
    x = a && a.current && a.current.created_at,
    C = x ? tF(new Date(a.current.created_at), S) : null,
    T = C && a.current && !a.revisionId ? "Revised on:" : "Revision from:";
  f(() => {
    C &&
      !a.isDeleted &&
      c.revisions_in_srwm?.status === "pending" &&
      !0 === u &&
      i("experiments/activate", {
        experimentName: "revisions_in_srwm",
        sendEvent: !1,
      });
  }, [C, a, c.revisions_in_srwm, u]);
  let E = C && !a.isDeleted && (m || !1 === u),
    _ = b(() => {
      "revisions" !== o.layer &&
        (i("layer/show", "revisions"),
        i("curiosity/event", {
          event: "Opened revisions panel",
          Via: "Last edit on link",
          "Song id": a.songId.toString(),
        }));
    }, [o.layer]);
  return g(
    k,
    null,
    g("div", { className: yR.name, "aria-label": "track" }, "Track: ", n.title),
    u &&
      !a.isDeleted &&
      p &&
      g(
        "button",
        { className: m1.toggle, onClick: t, "aria-label": "notation" },
        "(notation)"
      ),
    u && !a.isDeleted && p && g(ys, { usedDrums: p }),
    u && g("hr", { className: yR.separator, width: 250 }),
    y &&
      g(
        "div",
        { className: yR.difficulty, "aria-label": "track difficulty (rhythm)" },
        g("span", { className: yR.label }, "Difficulty (Rhythm):"),
        g(yu, { id: "track-difficulty", difficultyString: n.difficulty }),
        d && g("button", w, g(yp, { styles: yR })),
        d && g(fZ, null, v && g(f8, yz, g(fH, null)))
      ),
    E &&
      g(
        "div",
        { className: yR.lastEditOn, "aria-label": "last edit on" },
        g("span", { className: yR.label }, T),
        g("a", { to: null, onClick: _, className: yR.lastEditLink }, C)
      )
  );
}
let yF =
  "M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27";
function yV(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i, stroke: r },
  } = e;
  return g(
    "svg",
    {
      width: t || 18,
      height: n || 19,
      viewBox: "0 0 18 19",
      className: i,
      "aria-labelledby": "title-signin",
    },
    g("title", { id: "title-signin" }, "Sign In"),
    g("path", {
      className: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: yF,
    })
  );
}
function yU() {
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
      d: yF,
    })
  );
}
let yH = fm + " Cpv2j2",
  yj = fL + " Cpv16o",
  yG = fM + " Cpv2mh",
  yW = "Cpv2hv",
  yq = {
    popup: fm + " Cpv2j2",
    wrapper: fL + " Cpv16o",
    text: fM + " Cpv2mh",
    link: "Cpv2hv",
  },
  yX = "${}",
  yY = RegExp("\\${}", "g"),
  yK = (e) => {
    let t = e?.pluralForms;
    return t
      ? Function("n", "nplurals", "plural", `${t} return ~~plural;`)
      : yJ;
  };
function yJ(e) {
  return 1 === e ? 0 : 1;
}
let yZ = (e) => e.join("${}"),
  yQ = (e, t) => {
    let n = 0;
    return e.replace(yY, () => t[n++]);
  };
function y1(e, t) {
  let n = t.find((t) => t?.language === e),
    i = yK(n),
    r = function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return n?.translations?.[e]?.[t]?.[i] || "";
    },
    a = (e, t) =>
      t
        ? r(e, t) || t
        : function (t) {
            for (
              var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              i[a - 1] = arguments[a];
            let s = yZ(t),
              o = r(e, s) || s;
            return yQ(o, i);
          },
    s = (e, t, n, a) =>
      t
        ? r(e, t, i(a)) || (0 === yJ(a) ? t : n)
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
                let l = yZ(t),
                  c = i(s),
                  d = r(e, l, c);
                return d
                  ? yQ(d, c ? o : a)
                  : yQ((c = yJ(s)) ? yZ(n) : l, c ? o : a);
              };
            };
          };
  return {
    locale: e,
    gettext: function (e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      if (Array.isArray(e)) {
        let t = yZ(e),
          i = r("", t) || t;
        return yQ(i, n);
      }
      return r("", e) || e;
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
            let o = yZ(e),
              l = i(a),
              c = r("", o, l);
            return c
              ? yQ(c, l ? s : n)
              : yQ((l = yJ(a)) ? yZ(t) : o, l ? s : n);
          };
        };
      let s = n[1];
      return r("", e, i(s)) || (0 === yJ(s) ? e : n[0]);
    },
    npgettext: s,
  };
}
var y0 = (e) => {
    let { device: t } = cn("device"),
      n = "en";
    return (
      t.locale && (n = t.locale.split("-")[0].toLowerCase()),
      (window.__LOCALE__ = n),
      p(() => y1(n, e), [e, n])
    );
  },
  y2 = null,
  y5 = null,
  y4 = null,
  y3 = null,
  y9 = null,
  y8 = null,
  y6 = null,
  y7 = null,
  ve = null,
  vt = null,
  vn = [y2, y5, y4, y3, y9, y8, y6, y7, ve, vt];
function vi(e) {
  let { onClick: t, id: n, variant: i } = e,
    { gettext: r } = y0(vn);
  return g(
    fg,
    {
      className: yq.popup,
      id: n,
      to: "/a/wa/signin",
      onClick: t,
      role: "dialog",
      "aria-label": r(`Sign up for free to ${i} this tab.`),
    },
    g("span", { className: yq.wrapper }, g(yU, null)),
    g(
      "div",
      { className: yq.text },
      r("Please "),
      g("span", { className: yq.link }, r("sign up")),
      r(" for free"),
      g("br", null),
      r(`to ${i} this tab.`)
    )
  );
}
let vr =
    "M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z",
  va = `${vr}m0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z`;
function vs(e) {
  let {
      width: t,
      height: n,
      viewbox: i,
      title: r = "Favorite",
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
      viewBox: i || "0 0 29 27",
      className: a,
      "data-icon": o,
      id: s,
      "aria-labelledby": l,
    },
    g("title", { id: l }, r),
    g("path", { d: "fill" === o ? vr : va })
  );
}
let vo = "xji4",
  vl = "xj3s",
  vc = "xj248",
  vd = "xj248 xj13q",
  vu = {
    favorite: "xji4",
    toggle: "xj3s",
    star: "xj248",
    starSelected: "xj248 xj13q",
  },
  vp = { animationStyles: ye };
function vh() {
  let {
    dispatch: e,
    user: t,
    favorites: n,
    meta: i,
    layer: r,
  } = cn("user", "favorites", "meta", "experiments", "layer");
  if (!i.allowedByLicense || i.isDeleted) return;
  let a = "favorite" === r.layer,
    s = t.isLoggedIn,
    o = i.partId,
    l =
      s &&
      (i.wasFavoriteOnServerRender ||
        n.favorites.some((e) => e.songId === i.songId)),
    c = b(() => {
      if (s && i.current) {
        if (l) e("favorites/delete", i.songId);
        else {
          let {
              songId: t,
              artistId: n,
              artist: r,
              title: a,
              tracks: s,
            } = i.current,
            l = {
              songId: t,
              artistId: n,
              artist: r,
              title: a,
              tracks: s
                ? s.map((e) => {
                    let {
                      instrument: t,
                      instrumentId: n,
                      name: i,
                      difficulty: r,
                      tuning: a,
                    } = e;
                    return {
                      instrument: t,
                      instrumentId: n,
                      name: i,
                      tuning: a,
                      difficulty: r,
                    };
                  })
                : s,
              defaultTrack: o,
            };
          ia(l), e("favorites/add", { songId: t, song: l });
        }
        r.layer && e("layer/hide");
      } else a ? e("layer/hide") : e("layer/show", "favorite");
    }, [r, s, l, i, o]),
    d = l ? vu.starSelected : vu.star;
  return g(
    "div",
    { className: vu.favorite, id: "favorite" },
    g(
      "button",
      {
        className: vu.toggle,
        id: "favorite-toggle",
        onClick: c,
        title: l ? "Remove from favorites" : "Add to favorites",
      },
      g(vs, {
        width: 30,
        height: 30,
        viewbox: "-4 -3 35 35",
        state: l ? "fill" : "none",
        styles: { icon: d },
        id: "favorite-icon",
      })
    ),
    g(
      fZ,
      null,
      a && g(f8, vp, g(vi, { id: "favorite-popup", variant: "favorite" }))
    )
  );
}
function vf(e) {
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
let vg = "tnv2",
  vm = "tn1vk",
  vy = "tn1vk tnwo",
  vv = "tn13b",
  vb = "tn1pz",
  vw = "tn1pz tn10k",
  vS = {
    delete: "tnv2",
    button: "tn1vk",
    buttonActive: "tn1vk tnwo",
    icon: "tn13b",
    fill: "tn1pz",
    strokeAnim: "tn1pz tn10k",
  },
  vx = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i =
        "You are about to delete the whole song with all its revisions permanently.";
    if (n) return window.confirm(`${i} Are you sure?`);
    let r = `${e}, ${t}`,
      a = `${i} To confirm deletion, please enter the song artist and title as described below:

${r}
`,
      s = window.prompt(a);
    return (
      s === r ||
      (window.alert(
        "Confirmation string does not match artist and title. Aborting deletion!"
      ),
      !1)
    );
  },
  vk = (e) => !(e.audioV2 || e.audioV2Error || e.audioV4 || e.audioV4Error),
  vC = () => {
    let { dispatch: e, meta: t, user: n, part: i } = cn("meta", "user", "part"),
      { isDeleted: r, allowedDeletion: a, isFailed: s } = t,
      o = s || i.isFailed,
      l = t.current && vk(t.current);
    if (r || o || l || !a) return null;
    let c = b(() => {
        if (t.current) {
          let i = tg(n, V.MANAGE_SONGS);
          vx(t.current.artist, t.current.title, i) &&
            e("meta/deleteSong", {
              songId: t.current.songId,
              artist: t.current.artist,
              title: t.current.title,
            });
        }
      }, [e, t.current]),
      d = t.deleting;
    return g(
      "div",
      { className: vS.delete, id: "deletion" },
      d && g(ft, { width: 21, height: 21, fill: "#42a4f8" }),
      !d &&
        g("button", { className: vS.button, onClick: c }, g(vf, { styles: vS }))
    );
  };
function vT(e) {
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
let vE = "undefined" == typeof window;
function v_(e) {
  let t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
  if (!vE)
    return Promise.all(
      e?.map(
        (e) =>
          new Promise((n, i) => {
            if (document.querySelectorAll(`link[href="${e}"]`).length) {
              n(!0);
              return;
            }
            let r = document.createElement("link"),
              a = (document.body || document.getElementsByTagName("head")[0])
                .childNodes,
              s = a[a.length - 1];
            Object.assign(r, {
              rel: "stylesheet",
              href: e,
              onerror: i,
              onload: n,
              media: t,
            }),
              s.parentNode.insertBefore(r, s.nextSibling);
          })
      )
    );
}
let vP = "Bo82u2",
  vI = "Bo81oq",
  vL = { popup: "Bo82u2", arrow: "Bo81oq" },
  vN = T(() =>
    Promise.all([
      import("./RevisionsPopupContent.477fb64e.js"),
      v_([
        "/static/latest/RevisionsPopupContent.7c07944bc0a8127e.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/UploadInstructions.44c8b9ed092761c9.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadRevisionForm.module.b85096c82cbce142.css",
      ]),
    ]).then((e) => e[0])
  ),
  vA = () => {
    let {
        dispatch: e,
        meta: t,
        diff: n,
        route: i,
      } = cn("meta", "diff", "route"),
      r = t.songId;
    return (
      "diff" === i.page && n.songId && (r = n.songId),
      p(async () => {
        let t = new tH();
        return await c1(e, r, t.signal), t.abort.bind(t);
      }, [r]),
      f(() => e("upload/reset"), []),
      g(
        "div",
        { id: "revisions-popup", className: vL.popup },
        g(fh, { component: vN }),
        g("div", { className: vL.arrow })
      )
    );
  },
  vM = "e32l8",
  vB = "e32l8 e3nm",
  vD = "e32ah",
  vO = "e32ah e3d0",
  vR = "e32em",
  vz = "e32kz",
  v$ = "e319r",
  vF = "e319r e31k",
  vV = {
    revisions: "e32l8",
    revisionsActive: "e32l8 e3nm",
    toggle: "e32ah",
    toggleActive: "e32ah e3d0",
    icon: "e32em",
    fill: "e32kz",
    stroke: "e319r",
    strokeAnim: "e319r e31k",
  },
  vU = { animationStyles: m3 },
  vH = () => {
    let {
        dispatch: e,
        layer: t,
        isDeleted: n,
        screen: i,
        meta: r,
        experiments: a,
      } = cn("layer", "screen", "isDeleted", "meta", "experiments"),
      s = a.revisions_in_srwm?.segment === "on",
      o = !n && r.allowedByLicense && (s || !1 === i.isSmall);
    if (!o) return;
    let l = b(() => {
        "revisions" === t.layer
          ? e("layer/hide")
          : (e("layer/show", "revisions"),
            e("curiosity/event", {
              event: "Opened revisions panel",
              Via: "Revisions button",
              "Song id": r.songId.toString(),
            }));
      }, [t.layer]),
      c = "revisions" === t.layer,
      d = {
        className: c ? vV.toggleActive : vV.toggle,
        id: "revisions-toggle",
        onClick: l,
        title: c ? "Hide revisions" : "Show revisions",
      },
      u = g(vA, null);
    return g(
      "div",
      { className: c ? vV.revisionsActive : vV.revisions, id: "revisions" },
      g("button", d, g(vT, { styles: vV })),
      g(fZ, null, c && g(f8, vU, u))
    );
  };
function vj(e) {
  let {
    shadow: t = "#CA7F06",
    width: n = 54,
    height: i = 30,
    id: r = "iconDemo",
  } = e;
  return g(
    "svg",
    { width: n, height: i, viewBox: "0 0 54 30" },
    g(
      "defs",
      {},
      g(
        "filter",
        {
          id: r,
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
      filter: `url(#${r})`,
      databackgound: "",
    }),
    g("path", {
      fill: "#FFF",
      d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
    })
  );
}
let vG = "Cy52of",
  vW = { switcherLink: "Cy52of" };
var vq = "/static/media/to-chords.052d3c49.svg",
  vX = "/static/media/to-tab.8c38afc0.svg";
function vY(e) {
  let { isTab: t, isChords: n, song: i, meta: r, chords: a } = e;
  if (t && i.hasChords) {
    let e = i.title + " Chords";
    return m(fg, {
      to: tn(r.current),
      className: vW.switcherLink,
      title: e,
      children: [m("img", { src: vq, width: 23, height: 22, alt: e })],
    });
  }
  if (n && i.hasPlayer) {
    let e = i.title + " Tab";
    return m(fg, {
      to: e7(a.current),
      className: vW.switcherLink,
      title: e,
      children: [m("img", { src: vX, width: 23, height: 22, alt: e })],
    });
  }
}
function vK(e) {
  let {
    styles: { icon: t, stroke: n },
  } = e;
  return g(
    "svg",
    { width: 27, height: 25, viewBox: "0 0 27 25", className: t },
    g("path", { d: "M0 5h27M0 12h27M0 19h27", className: n, "stroke-width": 2 })
  );
}
function vJ(e) {
  return eI(e) ? " Bass Tab" : e_(e) ? " Drum Tab" : " Tab";
}
let vZ = C((e) => {
    let t,
      n,
      { plusAccess: i, handleNotation: r, showFullUI: a = !0 } = e,
      {
        dispatch: s,
        route: o,
        routeContent: l,
        songs: c,
        artist: d,
        screen: p,
        favorites: h,
        meta: g,
        diff: y,
        demo: v,
        chords: b,
      } = cn(
        "route",
        "routeContent",
        "songs",
        "artist",
        "favorites",
        "screen",
        "meta",
        "demo",
        "diff",
        "chords"
      ),
      [w, S] = u(!1),
      x = o.isPanel,
      C = p.isSmall,
      T = l.songId,
      E = !1,
      _ = !1,
      P = !1,
      I = null;
    if (
      ("tab" === l.page
        ? ((E = !0),
          (P = !i && g.allowedByLicense),
          g.current &&
            g.current.songId === T &&
            ((t = g.current),
            null != g.partId &&
              g.current.tracks &&
              (I = g.current.tracks[g.partId])),
          !t &&
            b.current &&
            b.current.songId === T &&
            (t = { ...b.current, hasChords: !0 }),
          (n = " Tab"))
        : "chords" === l.page
        ? ((_ = !0),
          b.current && b.current.songId === T && (t = b.current),
          !t &&
            g.current &&
            g.current.songId === T &&
            (t = { ...g.current, hasPlayer: !0 }),
          (n = " Chords"))
        : "diff" === l.page &&
          ((E = !0),
          (P = !i && g.allowedByLicense),
          y.current &&
            ((t = { title: "test", ...y.current }),
            y.songId === T &&
              ((t = y.current.before),
              y.before?.partId != null &&
                y.current.before?.tracks &&
                (I = y.current.before.tracks[y.before.partId])))),
      t || (t = c.songs.list.find((e) => e.songId === T)),
      t || (t = d.songs.list.find((e) => e.songId === T)),
      t || (t = h.favorites.find((e) => e.songId === T)),
      !t)
    )
      return;
    if ("tab" === l.page) {
      if (I) n = vJ(I.instrumentId);
      else if (null == l.partId)
        "bass" === l.partInstrument
          ? (n = vJ(32))
          : "drum" === l.partInstrument && (n = vJ(1024));
      else {
        let e = t.tracks;
        e && e[l.partId] && (n = vJ(e[l.partId].instrumentId));
      }
    }
    if (!a)
      return m("header", {
        className: yR.header,
        id: "header",
        children: [
          m("div", {
            className: yR.wrap,
            children: [
              m(
                "h1",
                {
                  className: yR.song,
                  children: [
                    m(
                      "span",
                      {
                        className: yR.artist,
                        "aria-label": "artist",
                        children: t.artist,
                      },
                      "arts"
                    ),
                    m(
                      "span",
                      { className: yR.dash, children: "\xa0-\xa0" },
                      "dash"
                    ),
                    m(
                      "span",
                      {
                        className: yR.title,
                        "aria-label": "title",
                        children: t.title,
                      },
                      "ttl"
                    ),
                    m(
                      "span",
                      {
                        className: yR.instrumentTab,
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
        s("curiosity/setConversionProps", {
          "Last referring link": "Demo Link",
        }),
      N = () =>
        s("curiosity/setConversionProps", {
          "Last referring link": "Header Link",
        });
    f(() => {
      S(!1);
      let e = setTimeout(() => {
        S(!0);
      }, 6e5);
      return () => clearTimeout(e);
    }, [T]);
    let A = w
      ? "Struggling to learn this song? Improve your playing with Songsterr Plus!"
      : "Subscribe to Plus. Paid users learn tabs 60% faster!";
    return m("header", {
      className: yR.header,
      id: "header",
      children: [
        m("div", {
          className: yR.wrap,
          children: [
            C &&
              m(
                fg,
                {
                  to: `/${l9(c.pattern, c.filters)}`,
                  className: yR.burger,
                  title: "Search",
                  id: "appheader-burger",
                  children: m(vK, { styles: yR }, "icn"),
                },
                "menu"
              ),
            E && m(vh, null, "fav"),
            m(
              vY,
              { isTab: E, isChords: _, song: t, meta: g, chords: b },
              "switch"
            ),
            m(
              x ? "div" : "h1",
              {
                className: yR.song,
                children: [
                  m(
                    fg,
                    {
                      className: yR.artist,
                      "aria-label": "artist",
                      to: `${tt(t)}${l9(d.pattern, d.filters)}`,
                      children: t.artist,
                    },
                    "artist"
                  ),
                  m(
                    "span",
                    { className: yR.dash, children: "\xa0-\xa0" },
                    "dash"
                  ),
                  m(
                    "span",
                    {
                      className: yR.title,
                      "aria-label": "title",
                      children: t.title,
                    },
                    "ttl"
                  ),
                  m(
                    "span",
                    {
                      className: yR.instrumentTab,
                      "aria-label": "tab type",
                      children: n,
                    },
                    "sfx"
                  ),
                  ot(v) &&
                    m(fg, {
                      to: "/a/wa/plus",
                      className: yR.demo,
                      "aria-label": "Demo Song",
                      onClick: L,
                      children: m(
                        vj,
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
              x ? "h-div" : "h-h1"
            ),
            a &&
              E &&
              m(k, { children: [m(vC, null, "del"), m(vH, null, "rev")] }),
            P &&
              m(
                fg,
                {
                  id: "text-showroom",
                  className: yR.showroom,
                  to: "/a/wa/plus?from=header_link",
                  onClick: N,
                  children: [A],
                },
                "show"
              ),
            I &&
              !g.isDeleted &&
              m(
                x ? "div" : "h2",
                {
                  className: yR.track,
                  children: m(y$, { track: I, handleNotation: r }, "hdr"),
                },
                x ? "div" : "h2"
              ),
          ],
        }),
      ],
    });
  }),
  vQ = "Cwt2bj",
  v1 = "Cwt2ry",
  v0 = "Cwtm3",
  v2 = "Cwtwf",
  v5 = "Cwt32d",
  v4 = "Cwt2ia",
  v3 = "Cwt33w",
  v9 = "Cwt29n",
  v8 = "Cwta4",
  v6 = "Cwt244",
  v7 = "Cwt1r4",
  be = "Cwt29n Cwt18w",
  bt = "Cwt355",
  bn = "Cwtey",
  bi = "Cwt339",
  br = "Cwt5j",
  ba = "Cwt2e6",
  bs = {
    pane: "Cwt2bj",
    divider: "Cwt2ry",
    dividerEdge: "Cwtm3",
    dividerSmall: "Cwtwf",
    float: "Cwt32d",
    logoImg: "Cwt2ia",
    icon: "Cwt33w",
    item: "Cwt29n",
    logo: "Cwta4",
    text: "Cwt244",
    stroke: "Cwt1r4",
    itemActive: "Cwt29n Cwt18w",
    logoText: "Cwt355",
    overlay: "Cwtey",
    jobs: "Cwt339",
    new: "Cwt5j",
    mainpanel: "Cwt2e6",
  },
  bo = {
    search: ["search"],
    signin: ["signup", "forgotpassword"],
    account: ["changepassword", "cancelPlus", "deactivate", "updateCard"],
    plus: ["subscribePlus"],
  };
function bl(e) {
  let { id: t, route: n, url: i, songUrl: r, children: a, linkClick: s } = e,
    o = d(ce),
    l = t === n.page || (t in bo && -1 !== bo[t].indexOf(n.page)),
    c = t === n.page ? r : i,
    u = b(
      (e) => {
        e.preventDefault(), s && s(l), o.dispatch("navigate", c);
      },
      [c]
    );
  return m("a", {
    href: c,
    onClick: u,
    id: `menu-${t}`,
    class: l ? bs.itemActive : bs.item,
    children: a,
  });
}
function bc(e) {
  let { favorites: t } = cn("favorites");
  return g(bl, { ...e, url: `${e.url}${l9(t.pattern, t.filters)}` });
}
function bd(e) {
  let { songs: t, dispatch: n } = cn("songs"),
    i = `${e.url}${l9(t.pattern, t.filters)}`,
    r = "search" === e.route.page ? e.songUrl : i,
    a = b(
      (e) => {
        e.preventDefault(), n("navigate", r);
      },
      [r]
    );
  return m("a", {
    id: "logo",
    className: e.className,
    title: "Songsterr",
    href: r,
    onClick: a,
    children: e.children,
  });
}
function bu(e) {
  let { songs: t } = cn("songs");
  return g(bl, { ...e, url: `${e.url}${l9(t.pattern, t.filters)}` });
}
function bp(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i, stroke: r },
  } = e;
  return g(
    "svg",
    {
      width: t || 19,
      height: n || 19,
      viewBox: "0 0 19 19",
      className: i,
      "aria-labelledby": "title-account",
    },
    g("title", { id: "title-account" }, "Account"),
    g("ellipse", {
      className: r,
      cx: 9.73,
      cy: 5.8,
      rx: 3.76,
      ry: 4.7,
      strokeWidth: 1.5,
    }),
    g("path", {
      className: r,
      strokeWidth: 1.5,
      d: "M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z",
    })
  );
}
function bh(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i },
  } = e;
  return g(
    "svg",
    { width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
    g("path", {
      d: "M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z",
    })
  );
}
function bf(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i },
  } = e;
  return g(
    "svg",
    {
      width: t || 29,
      height: n || 27,
      viewBox: "0 0 1000 820",
      className: i,
      "aria-labelledby": "title-faq",
    },
    g("title", { id: "title-faq" }, "Frequently Asked Questions"),
    g("path", {
      d: "M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z",
    })
  );
}
function bg(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i, stroke: r },
  } = e;
  return g(
    "svg",
    { width: t || 18, height: n || 19, viewBox: "0 0 18 19", className: i },
    g("path", {
      className: r,
      strokeWidth: 1.5,
      strokeLinecap: "round",
      d: "M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42",
    })
  );
}
let bm =
    "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
  by = "M14.5 17v-15.5m-5 5l5 -5l5 5";
function bv(e) {
  let {
    width: t,
    height: n,
    styles: { icon: i, stroke: r },
  } = e;
  return g(
    "svg",
    { width: t || 29, height: n || 27, viewBox: "0 0 29 27", className: i },
    g("path", {
      d: "M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z",
    }),
    g("path", {
      className: r,
      "stroke-width": 2,
      d: "M14.5 17v-15.5m-5 5l5 -5l5 5",
    })
  );
}
function bb(e) {
  if (!document.body) return;
  let t = window.innerWidth - document.body.clientWidth,
    n = e ? "0px" : `${t}px`;
  document.body.style.overflow = e ? "inherit" : "hidden";
  let i = document.getElementById("app");
  i && (i.style.marginRight = n);
  let r = document.getElementById("controls");
  r && (r.style.marginRight = n);
  let a = document.getElementById("showroom");
  a && (a.style.paddingRight = n);
  let s = document.documentElement;
  s && s.style.setProperty("--page-overflow-gap", n);
}
let bw = T(() =>
    Promise.all([
      import("./AppChords.67d91686.js"),
      v_([
        "/static/latest/AppChords.658c0e0bed810271.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
        "/static/latest/NetworkError.a3a4c1c3f0b4cd27.css",
        "/static/latest/SWW.ee0869611439c289.css",
        "/static/latest/Capo.dafde59b4d16e326.css",
      ]),
    ]).then((e) => e[0])
  ),
  bS = T(() =>
    Promise.all([
      import("./AppTags.0ef9dcf1.js"),
      v_([
        "/static/latest/AppTags.4de7bc3dec82ffb5.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
        "/static/latest/NetworkError.a3a4c1c3f0b4cd27.css",
        "/static/latest/SWW.ee0869611439c289.css",
      ]),
    ]).then((e) => e[0])
  ),
  bx = T(() =>
    Promise.all([
      import("./AppTab.08379054.js"),
      v_([
        "/static/latest/AppTab.f23cd2c91c042d6a.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Line.8988ee9dd423e881.css",
        "/static/latest/Capo.dafde59b4d16e326.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadRevisionForm.module.b85096c82cbce142.css",
        "/static/latest/NetworkError.a3a4c1c3f0b4cd27.css",
        "/static/latest/SWW.ee0869611439c289.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
      ]),
    ]).then((e) => e[0])
  ),
  bk = T(() =>
    Promise.all([
      import("./AppDiff.781df5ed.js"),
      v_([
        "/static/latest/AppDiff.d90861dca157b7cd.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Line.8988ee9dd423e881.css",
        "/static/latest/Capo.dafde59b4d16e326.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadRevisionForm.module.b85096c82cbce142.css",
        "/static/latest/AppFooter.be08909eb7292e42.css",
      ]),
    ]).then((e) => e[0])
  ),
  bC = T(() =>
    Promise.all([
      import("./SongsPanel.288e4edf.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.0ae2c056c3bb5912.css",
        "/static/latest/SearchBox.a0b0bfdd39c3c046.css",
        "/static/latest/Stub.4314da00103e3721.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/SongsPanel.module.9f2ffb82ce0c5f8d.css",
      ]),
    ]).then((e) => e[0])
  ),
  bT = T(() =>
    Promise.all([
      import("./FavoritesPanel.1793ce99.js"),
      v_([
        "/static/latest/FavoritesPanel.f87323d63eb17d67.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.0ae2c056c3bb5912.css",
        "/static/latest/SearchBox.a0b0bfdd39c3c046.css",
        "/static/latest/Stub.4314da00103e3721.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/SongsPanel.module.9f2ffb82ce0c5f8d.css",
      ]),
    ]).then((e) => e[0])
  ),
  bE = T(() =>
    Promise.all([
      import("./ArtistPanel.082ab4e7.js"),
      v_([
        "/static/latest/ArtistPanel.9e606f0ce504d175.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/useSongListHotkeys.0ae2c056c3bb5912.css",
        "/static/latest/SearchBox.a0b0bfdd39c3c046.css",
        "/static/latest/Stub.4314da00103e3721.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  b_ = T(() =>
    Promise.all([
      import("./SubmitPanel.8cb9d0fa.js"),
      v_([
        "/static/latest/SubmitPanel.7b80461f372c7536.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/UploadInstructions.44c8b9ed092761c9.css",
        "/static/latest/Stub.4314da00103e3721.css",
      ]),
    ]).then((e) => e[0])
  ),
  bP = T(() =>
    Promise.all([
      import("./TextPanel.b44187e8.js"),
      v_([
        "/static/latest/TextPanel.b65687d362098683.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/index.546235ebfd21e495.css",
      ]),
    ]).then((e) => e[0])
  ),
  bI = T(() =>
    Promise.all([
      import("./AboutPanel.47cae04d.js"),
      v_([
        "/static/latest/AboutPanel.90a1dc2a1bed94a5.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  bL = T(() =>
    Promise.all([
      import("./JobsPanel.1ea781ec.js"),
      v_([
        "/static/latest/JobsPanel.5f73cabf19d918b7.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  bN = T(() =>
    Promise.all([
      import("./HelpPanel.8ecc3a96.js"),
      v_([
        "/static/latest/HelpPanel.51f86c442cb537a8.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/TocPointer.4277edfc32523766.css",
        "/static/latest/SearchBox.a0b0bfdd39c3c046.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
        "/static/latest/SWW.ee0869611439c289.css",
      ]),
    ]).then((e) => e[0])
  ),
  bA = T(() =>
    Promise.all([
      import("./SigninPanel.e6c2e01d.js"),
      v_([
        "/static/latest/SigninPanel.374924d6629568fa.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  bM = T(() =>
    Promise.all([
      import("./SignupPanel.a2fd09e9.js"),
      v_([
        "/static/latest/SignupPanel.c958ca78cefae30f.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  bB = T(() =>
    Promise.all([
      import("./AccountPanel.7ddfb07d.js"),
      v_([
        "/static/latest/AccountPanel.8f078ee2dea1ee12.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/Input.a9724713b13b8c84.css",
      ]),
    ]).then((e) => e[0])
  ),
  bD = T(() =>
    Promise.all([
      import("./MyTabsPanel.0e340b33.js"),
      v_([
        "/static/latest/MyTabsPanel.16fef48c3c4c3c5d.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/Stub.4314da00103e3721.css",
      ]),
    ]).then((e) => e[0])
  ),
  bO = T(() =>
    Promise.all([
      import("./ForgotPasswordPanel.fcc48e9a.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  bR = T(() =>
    Promise.all([
      import("./ChangePasswordPanel.ed893fd1.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  bz = T(() =>
    Promise.all([
      import("./PlusPanel.c428498e.js"),
      v_([
        "/static/latest/PlusPanel.221570463082828b.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  b$ = T(() =>
    Promise.all([
      import("./PaymentPanel.e61d6b86.js"),
      v_([
        "/static/latest/PaymentPanel.6d2b3da012ef330b.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/PaymentForm.a09e37670d697e86.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  bF = T(() =>
    Promise.all([
      import("./CouponPanel.463901df.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Input.a9724713b13b8c84.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  bV = T(() =>
    Promise.all([
      import("./CancelPlusPanel.cae9a01b.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
      ]),
    ]).then((e) => e[0])
  ),
  bU = T(() =>
    Promise.all([
      import("./DeactivatePanel.1ae7d989.js"),
      v_([
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/GenericPanel.module.938bfc65af449eaa.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  bH = T(() =>
    Promise.all([
      import("./UpdateCardPanel.35608488.js"),
      v_([
        "/static/latest/UpdateCardPanel.38d040a682d0cdf1.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/PaymentForm.a09e37670d697e86.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
        "/static/latest/ContinueLink.15b61efe8be39218.css",
      ]),
    ]).then((e) => e[0])
  ),
  bj = T(() =>
    Promise.all([
      import("./HowToReadTabPanel.9340c23e.js"),
      v_([
        "/static/latest/HowToReadTabPanel.906f2c33009dc38a.css",
        "/static/latest/index.546235ebfd21e495.css",
        "/static/latest/TocPointer.4277edfc32523766.css",
        "/static/latest/Panel.af6c4c4e35f9a28f.css",
      ]),
    ]).then((e) => e[0])
  ),
  bG = "w6o",
  bW = "w613o",
  bq = "w617j",
  bX = "w6ty",
  bY = {
    exitActive: "w6o",
    enterActive: "w613o",
    enter: "w617j",
    exit: "w6ty",
  };
function bK(e) {
  let { width: t, height: n, styles: i } = e;
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
      className: i.stroke,
      "stroke-width": 2,
      fill: "none",
    }),
    g("path", {
      d: "M11.75 9.95652C11.75 10.6132 11.5301 11.1469 11.2526 11.4847C10.9786 11.8184 10.7024 11.913 10.5 11.913C10.2976 11.913 10.0214 11.8184 9.74736 11.4847C9.46988 11.1469 9.25 10.6132 9.25 9.95652C9.25 9.29986 9.46988 8.76612 9.74736 8.42832C10.0214 8.09468 10.2976 8 10.5 8C10.7024 8 10.9786 8.09468 11.2526 8.42832C11.5301 8.76612 11.75 9.29986 11.75 9.95652ZM12.0218 13.4534C13.0499 12.7889 13.75 11.4723 13.75 9.95652C13.75 7.7714 12.2949 6 10.5 6C8.70507 6 7.25 7.7714 7.25 9.95652C7.25 11.4723 7.95013 12.7889 8.97816 13.4534C6.12247 13.8552 4 15.3466 4 16.9219C4 18.7664 6.91015 19 10.5 19C14.0899 19 17 18.7664 17 16.9219C17 15.3466 14.8775 13.8552 12.0218 13.4534ZM14.6191 16.7104C14.6788 16.6957 14.733 16.6811 14.7819 16.6669C14.6515 16.5369 14.444 16.3713 14.1142 16.1854C13.2745 15.7122 11.9958 15.3478 10.5 15.3478C9.0042 15.3478 7.72549 15.7122 6.88578 16.1854C6.55602 16.3713 6.3485 16.5369 6.21808 16.6669C6.26701 16.6811 6.32116 16.6957 6.38094 16.7104C7.2898 16.9337 8.6834 17 10.5 17C12.3166 17 13.7102 16.9337 14.6191 16.7104Z",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      className: i.icon,
    }),
    g("title", { id: "title-account" }, "Tabs")
  );
}
var bJ = "/static/media/jobs.e25c0248.svg";
let bZ = "p2287",
  bQ = "p22sz",
  b1 = "p21o9",
  b0 = "p22as",
  b2 = {
    exitActive: "p2287",
    enterActive: "p22sz",
    enter: "p21o9",
    exit: "p22as",
  };
function b5() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return "/tags" + (e ? `?page=${e}` : "");
}
function b4(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return "/tags/" + e.replace(/ /g, "+") + (t ? `?page=${t}` : "");
}
function b3(e, t, n, i, r) {
  return "tab" === e.page
    ? e6(t.current, t.partId, t.revisionId)
    : "chords" === e.page
    ? tn(n.current)
    : "tag" === e.page
    ? i.content
      ? b4(i.content.tag, i.content.page)
      : "/"
    : "tags" === e.page
    ? i.content
      ? b5(i.content.page)
      : "/"
    : "diff" === e.page
    ? r.current &&
      ti(
        { songId: r.songId, artist: r.current.artist, title: r.current.title },
        r.before,
        r.after
      )
    : void 0;
}
var b9 = null,
  b8 = null,
  b6 = null,
  b7 = null,
  we = null,
  wt = null,
  wn = null,
  wi = null,
  wr = null,
  wa = null,
  ws = [b9, b8, b6, b7, we, wt, wn, wi, wr, wa],
  wo = "/static/media/songsterr-symbol.e02d7234.svg",
  wl = "/static/media/songsterr-text-symbol.b41d2ebf.svg";
let wc = {
    search: bC,
    favorites: bT,
    artist: bE,
    plus: bz,
    submit: b_,
    about: bI,
    jobs: bL,
    help: bN,
    signin: bA,
    signup: bM,
    recoverpassword: bR,
    changepassword: bR,
    forgotpassword: bO,
    account: bB,
    cancelPlus: bV,
    deactivate: bU,
    updateCard: bH,
    subscribePlus: b$,
    coupon: bF,
    howToReadTab: bj,
    privacy: bP,
    terms: bP,
    dnsmpd: bP,
    mytabs: bD,
  },
  wd = () =>
    g(
      "svg",
      {
        width: 30,
        height: 36,
        viewBox: "0 0 3000 3600",
        className: bs.logoImg,
        "aria-labelledby": "title-songsterr",
      },
      g("title", { id: "title-songsterr" }, "Songsterr"),
      g("use", { xlinkHref: `${wo}#icon` })
    ),
  wu = () =>
    g(
      "svg",
      {
        width: 62,
        height: 12,
        viewBox: "0 0 61.39 12.111",
        className: bs.logoImg,
        "aria-labelledby": "title-songsterr-text",
      },
      g("title", { id: "title-songsterr-text" }, "Songsterr"),
      g("use", { xlinkHref: `${wl}#icon` })
    ),
  wp = C((e) => {
    let { isSmallScreen: t } = e,
      { gettext: n } = y0(ws),
      {
        dispatch: i,
        device: r,
        browser: a,
        user: s,
        route: o,
        query: l,
        routeContent: c,
        meta: d,
        chords: u,
        tags: p,
        diff: m,
      } = cn(
        "device",
        "browser",
        "user",
        "route",
        "query",
        "routeContent",
        "meta",
        "chords",
        "tags",
        "diff"
      ),
      { isPanel: y, page: v } = o,
      b = b3(c, d, u, p, m);
    f(() => r.isDesktop && "Safari" === a.family && bb(!y), [y, r.isDesktop]),
      h(() => cp(y, v), [y, v]);
    let { isDesktop: w } = r,
      { isLoggedIn: S, profile: x } = s,
      k = ["ru", "ru-mo", "be", "uk"].some(
        (e) => -1 !== r.languages.indexOf(e)
      );
    return g(
      "div",
      { className: bs.pane },
      !t &&
        g(
          "nav",
          { className: bs.float, id: "tablist" },
          g(
            bd,
            {
              id: "logo",
              className: bs.logo,
              route: o,
              url: "/",
              songUrl: b,
              title: "Songsterr",
            },
            g(wd, null),
            g(wu, null)
          ),
          g("div", { className: bs.dividerEdge }),
          g(
            bu,
            { id: "search", route: o, url: "/", songUrl: b },
            g(bg, { styles: bs, width: 30, height: 30 }),
            g("div", { className: bs.text }, n("Tabs"))
          ),
          g(
            bc,
            { id: "favorites", route: o, url: "/a/wa/favorites", songUrl: b },
            g(vs, { styles: bs }),
            g("div", { className: bs.text }, n("Favorites"))
          ),
          g("div", { className: bs.dividerSmall }),
          g(
            bl,
            { id: "mytabs", route: o, url: "/a/wa/mytabs", songUrl: b },
            g(bK, { styles: bs, width: 29, height: 29 }),
            g("div", { className: bs.text }, "My Tabs")
          ),
          w &&
            g(
              bl,
              { id: "submit", route: o, url: "/a/wa/submit", songUrl: b },
              g(bv, { styles: bs }),
              g("div", { className: bs.text }, n("Submit Tab"))
            ),
          g("div", { className: bs.dividerSmall }),
          !ei(s) &&
            g(
              bl,
              {
                id: "plus",
                route: o,
                url: "/a/wa/plus",
                songUrl: b,
                linkClick: (e) => {
                  e ||
                    i("curiosity/setConversionProps", {
                      "Last referring link": "Sidebar Button",
                    });
                },
              },
              g(bh, { styles: bs }),
              g("div", { className: bs.text }, n("Songsterr Plus"))
            ),
          g(
            bl,
            { id: "help", route: o, url: "/a/wa/help", songUrl: b },
            g(bf, { styles: bs }),
            g("div", { className: bs.text }, n("Questions?"))
          ),
          !S &&
            g(
              bl,
              { id: "signin", route: o, url: "/a/wa/signin", songUrl: b },
              g(yV, { styles: bs, width: 28, height: 29 }),
              g("div", { className: bs.text }, n("Sign In"))
            ),
          S &&
            g(
              bl,
              { id: "account", route: o, url: "/a/wa/account", songUrl: b },
              g(bp, { styles: bs, width: 29, height: 29 }),
              g("div", { className: bs.text }, x.name)
            ),
          g("div", { className: bs.dividerSmall }),
          w &&
            k &&
            g(
              fg,
              {
                id: "menu-jobs",
                to: "/a/wa/jobs",
                className: bs.jobs,
                title: "Jobs at Songsterr",
              },
              g("img", { src: bJ, width: 79.271, height: 32, alt: "Jobs" })
            )
        ),
      g(
        fZ,
        null,
        y &&
          g(
            f8,
            { animationStyles: bY, timeout: 400, key: "overlay" },
            g(fg, {
              className: bs.overlay,
              id: "sidebar-overlay",
              to: b,
              title: n("Back to tab"),
              tabIndex: -1,
            })
          ),
        o.page in wc &&
          g(
            f8,
            { animationStyles: b2, timeout: 400, key: o.page },
            g(
              "main",
              { id: `panel-${o.page}`, className: bs.mainpanel },
              g(fh, {
                component: wc[o.page],
                route: o,
                query: l,
                user: s,
                device: r,
                songUrl: b,
                isSmallScreen: t,
                id: o.page,
              })
            )
          )
      )
    );
  }),
  wh = "C8p2d0",
  wf = "C8p2d0 C8pr1",
  wg = "C8p2d0 C8p1q",
  wm = {
    indicator: "C8p2d0",
    onlineIndicator: "C8p2d0 C8pr1",
    offlineIndicator: "C8p2d0 C8p1q",
  },
  wy = "Cir12y",
  wv = "Cir1tt",
  wb = "Cir29v",
  ww = "Cir1q8",
  wS = {
    exitActive: "Cir12y",
    enterActive: "Cir1tt",
    enter: "Cir29v",
    exit: "Cir1q8",
  };
function wx(e) {
  return e ? wm.onlineIndicator : wm.offlineIndicator;
}
class wk extends w {
  constructor(e) {
    super(e),
      (this.state = {
        online: navigator.onLine,
        className: wx(navigator.onLine),
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
        className: wx(navigator.onLine),
        message: navigator.onLine ? "live" : "offline",
      });
  }
  render() {
    let { online: e, className: t, message: n } = this.state,
      i = null;
    return (
      (n || !e) &&
        (i = g(
          f8,
          { animationStyles: wS, timeout: 400 },
          g("div", { className: t }, n)
        )),
      g(fZ, null, i)
    );
  }
}
let wC = "Bdq1f0",
  wT = "Bdq2sz",
  wE = "Bdq8o",
  w_ = "Bdqf4",
  wP = {
    menu: "Bdq1f0",
    linkText: "Bdq2sz",
    active: "Bdq8o",
    inactive: "Bdqf4",
  },
  wI = (e) => {
    window && !window.confirm("Are you sure?") && e.preventDefault();
  },
  wL = (e) => {
    let { songId: t } = e,
      { user: n, dispatch: i } = cn("user"),
      r = [];
    if (
      (tg(n, V.USE_ADMIN_TOOLS) &&
        (r.push(
          g(
            "a",
            { key: "Edit", href: d9("editSong", t), target: "_blank" },
            "Edit"
          )
        ),
        r.push(
          g(
            "a",
            {
              key: "Update",
              href: d9("updateSrwr", t),
              target: "_blank",
              onClick: wI,
            },
            "Update"
          )
        ),
        r.push(
          g(
            "a",
            {
              key: "Rerender",
              href: d9("rerender", t),
              target: "_blank",
              onClick: wI,
            },
            "Rerender"
          )
        ),
        r.push(
          g(
            "a",
            {
              key: "Block",
              href: d9("blockDueToLicenseRestriction", t),
              target: "_blank",
              onClick: wI,
            },
            "Block"
          )
        ),
        r.push(
          g(
            "a",
            {
              key: "Generate PNG",
              href: d9("generatePng", t),
              target: "_blank",
            },
            "Generate PNG"
          )
        )),
      tg(n, V.USE_TAB_EDITOR))
    ) {
      let e = (e) => {
        e.preventDefault(), i("tab_editor/toggleAdminPanel");
      };
      r.push(
        g(
          "a",
          { key: "Tab Edits", href: "", target: "_blank", onClick: e },
          "Tab Edits"
        )
      );
    }
    if (tg(n, V.USE_VIDEO_SYNCHRONISATION)) {
      let e = (e) => {
        e.preventDefault(), i("video/init");
      };
      r.push(
        g(
          "a",
          { key: "Init Video", href: "", target: "_blank", onClick: e },
          "Init Video"
        )
      );
    }
    return 0 === r.length ? null : g("nav", { className: wP.menu }, ...r);
  },
  wN = "C1p2za",
  wA = { close: "C1p2za" },
  wM = (e) => {
    let { onClick: t, id: n, width: i = 11, height: r = 11 } = e;
    return g(
      "button",
      { className: wA.close, onClick: t },
      g(
        "svg",
        {
          width: i,
          height: r,
          viewBox: "0 0 11 11",
          "aria-labelledby": `${n}-close`,
        },
        g("title", { id: `${n}-close` }, "Close"),
        g("path", { d: "M1 1l9 9m-9 0l9-9" })
      )
    );
  },
  wB = "z44l",
  wD = "z4qb",
  wO = "z44l z42qo",
  wR = "z44l z415m",
  wz = "z44l z430w",
  w$ = "z44l z430w z410u",
  wF = "z44l z41yi",
  wV = "z44l z41uv",
  wU = "z44l z41rt",
  wH = "z44l z41rt z4kq",
  wj = "z44l z41rt z42wq",
  wG = "z44l z41rt z423c",
  wW = "z41gq",
  wq = "z44l z42g1",
  wX = "z44l z42gf",
  wY = "z44l z433s",
  wK = "z432r",
  wJ = "z44l z4a1",
  wZ = "z41xe",
  wQ = "z44l z4a1 z424y",
  w1 = "z44l z4a1 z41vb",
  w0 = "z44l z4a1 z42j7",
  w2 = "z44l z41rt z4ow",
  w5 = "z44l z41rt z4118",
  w4 = "z44l z4a1 z424y z41xe z4ls",
  w3 = "z44l z4a1 z41vb z41xe z421m",
  w9 = "z44l z4a1 z424y z42fn",
  w8 = "z44l z4a1 z42j7 z4rq",
  w6 = "z44l z4a1 z42j7 z42ct",
  w7 = "z44l z42qx",
  Se = "z4y3",
  St = "z41pi",
  Sn = {
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
  Si = "B9v2h1",
  Sr = "B9vl",
  Sa = "B9v21x",
  Ss = wQ + " B9v2hx",
  So = wQ + " B9vhl",
  Sl = "B9v2h1 B9v2vm",
  Sc = "B9v1fv",
  Sd = "B9v2v2",
  Su = "B9vdn",
  Sp = "B9vdn B9vjs",
  Sh = "B9vdn B9v24z",
  Sf = "B9vdn B9v165",
  Sg = "B9vdn B9v2pd",
  Sm = "B9vdn B9vzs",
  Sy = "B9vdn B9v1vp",
  Sv = "B9vdn B9v1up",
  Sb = "B9vdn B9v2wk",
  Sw = "B9vdn B9v8w",
  SS = "B9vdn B9vl8",
  Sx = "B9vdn B9v1c4",
  Sk = {
    pane: "B9v2h1",
    title: "B9vl",
    body: "B9v21x",
    button: wQ + " B9v2hx",
    link: wQ + " B9vhl",
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
  SC = (e) =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) =>
      g(
        "button",
        { className: Sk[`npsButton${t}`], key: t, onClick: () => e(t) },
        t
      )
    );
function ST() {
  let { dispatch: e, screener: t, ut: n } = cn("screener", "ut"),
    i = t.active;
  if (!i || n.stage !== uQ) return null;
  let r = b(() => {
    e("screener/dismiss", i);
  }, [i]);
  if (i.name.endsWith("NPS")) {
    let t = (t) => {
      e("screener/accept", { screener: i, value: t });
    };
    return g(
      "aside",
      { className: Sk.nps, id: "screener" },
      g(wM, { onClick: r, id: "screener" }),
      g("p", { className: Sk.body }, i.body),
      g("div", { className: Sk.score }, SC(t)),
      g("p", { className: Sk.npsLegend }, "0 - Not likely 10 - Very likely")
    );
  }
  let a = b(() => {
    e("screener/accept", { screener: i });
  }, [i]);
  return g(
    "aside",
    { className: Sk.pane, id: "screener" },
    g(wM, { onClick: r, id: "screener" }),
    g("h2", { className: Sk.title }, i.title),
    g("p", { className: Sk.body }, i.body),
    i.usertest
      ? g("button", { className: Sk.button, onClick: a }, i.button)
      : g(
          "a",
          {
            className: Sk.link,
            href: i.link,
            onClick: a,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          i.button
        )
  );
}
function SE(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    r = null;
  if (i.keep_srwm_toolbar_upon_play?.status === "active") {
    let e = `t_pl_${i.keep_srwm_toolbar_upon_play.segment}`;
    r = r ? `${r}_${e}` : e;
  }
  if (lX(e)) {
    let e = `utm_source%3D${t}`,
      i = r ? `%26utm_campaign%3D${r}` : "",
      a = n.songId ? `%26tab_id%3D${n.songId}` : "",
      s = `${e}${i}${a}`;
    return `https://play.google.com/store/apps/details?id=com.songsterr&referrer=${s}`;
  }
  let a = encodeURIComponent(`${t}${r ? `_${r}` : ""}`);
  return `https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct=${a}`;
}
function S_(e) {
  let { dispatch: t, device: n, experiments: i } = cn("device", "experiments"),
    { source: r } = e,
    a = e.os ? { name: e.os } : n.os,
    s = e.extra || {},
    o = e.attrs || {},
    l = SE(a, r, s, i),
    c = b(() => {
      e.onClick && e.onClick(),
        t("curiosity/event", {
          event: "Navigated to app store",
          ...e.eventProperties,
        }),
        t("player/togglePlay", !1),
        t("curiosity/google", {
          category: "Showroom",
          action: `Clicked on ${lX(a) ? "Google Play" : "App Store"} link`,
        });
    }, [e]);
  return g(
    "a",
    { ...o, href: l, onClick: c, rel: "noopener noreferrer", target: "_blank" },
    e.children
  );
}
let SP = "Ei1by",
  SI = "Ei2cl",
  SL = "Ei2zd",
  SN = "Ei2we",
  SA = { pane: "Ei1by", title: "Ei2cl", subtitle: "Ei2zd", actions: "Ei2we" },
  SM = "e81fc",
  SB = "e8v0",
  SD = "e8qv",
  SO = "e8ai",
  SR = {
    exitActive: "e81fc",
    enterActive: "e8v0",
    enter: "e8qv",
    exit: "e8ai",
  },
  Sz = { animationStyles: SR };
function S$(e, t) {
  return e === en.SLOWDOWN
    ? {
        title: "Struggling to figure out\nthe rhythm of this fragment?",
        cta: t.isPhone ? "Slow it down in our app!" : "Slow it down on Plus!",
        source: "slowdown_promo_popup",
        referringLink: "Slowdown Promo Popup",
      }
    : e === en.LOOP
    ? {
        title: "Want to nail this fragment?",
        cta: t.isPhone
          ? "Practice it by looping\nin our app!"
          : "Practice it by looping\non Plus!",
        source: "loop_promo_popup",
        referringLink: "Loop Promo Popup",
      }
    : e === en.NO_ADS
    ? {
        title: "Ads take up too much space?",
        cta: t.isPhone ? "Remove them in our app!" : "Remove them on Plus!",
        source: "noads_promo_popup",
        referringLink: "No Ads Promo Popup",
      }
    : e === en.PRINT
    ? {
        title: "Prefer to read and\nmarkup on paper?",
        cta: t.isPhone
          ? "Print the tab out in our app!"
          : "Print the tab out on Plus!",
        source: "print_promo_popup",
        referringLink: "Print Promo Popup",
      }
    : e === en.MUTE
    ? {
        title: "Using tab as\na backing track?",
        cta: t.isPhone
          ? "Mute your instrument\nin our app!"
          : "Mute your instrument\non Plus!",
        source: "mute_promo_popup",
        referringLink: "Mute Promo Popup",
      }
    : e === en.SOLO
    ? {
        title: "Bass line is hard to hear?",
        cta: t.isPhone ? "Solo it in our app!" : "Solo it on Plus!",
        source: "solo_promo_popup",
        referringLink: "Solo Promo Popup",
      }
    : e === en.PITCH_SHIFT
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
let SF = () => {
    let { dispatch: e, promo: t, device: n } = cn("promo", "device"),
      i = t.feature;
    if (!i) return null;
    let r = S$(i, n);
    r && dd(dg.get(i));
    let a = () => {
        e("promo/unsubscribe"),
          e("curiosity/event", { event: "Unsubscribed from promo" });
      },
      s = () => e("promo/dismiss"),
      o = () => {
        e("curiosity/setConversionProps", {
          "Last referring link": r.referringLink,
        }),
          e("promo/dismiss");
      };
    return g(
      fZ,
      null,
      i &&
        g(
          f8,
          { ...Sz, key: "popup" },
          g(
            "aside",
            { className: SA.pane, id: "promo" },
            g("h2", { className: SA.title }, r.title),
            g("p", { className: SA.subtitle }, r.cta),
            g(
              "div",
              { className: SA.actions },
              !n.isPhone &&
                g(
                  fg,
                  { to: "/a/wa/plus", className: Sn.buttonGreen, onClick: o },
                  "Tell me more!"
                ),
              n.isPhone &&
                g(
                  S_,
                  {
                    source: r.source,
                    onClick: o,
                    attrs: { className: Sn.buttonGreen },
                    eventProperties: {
                      Via: "contextual offer",
                      "App store": lX(n.os) ? "Google Play" : "App Store",
                      Feature: i,
                    },
                  },
                  lX(n.os) ? "Open Google Play" : "Open App Store"
                ),
              g("a", { onClick: s, className: Sn.buttonLink }, "No, thanks")
            ),
            g(
              "a",
              { onClick: a, className: Sn.buttonPromoUnsubscribe },
              "DonΓÇÖt show ads like that"
            )
          )
        )
    );
  },
  SV = "Cpv1d",
  SU = "Cpvpq",
  SH = "Cpv6d",
  Sj = "Cpv2kr",
  SG = "Cpv2kr Cpv1th",
  SW = "Cpv2kr Cpv1x",
  Sq = {
    wrapper: "Cpv1d",
    controls: "Cpvpq",
    right: "Cpv6d",
    link: "Cpv2kr",
    active: "Cpv2kr Cpv1th",
    small: "Cpv2kr Cpv1x",
  },
  SX = () => {
    let {
        dispatch: e,
        meta: t,
        audio: n,
        experiments: i,
        device: r,
      } = cn("meta", "audio", "experiments", "device"),
      a = tf.get(t.current, n.version),
      s = tu.decode(a.audio),
      o = tu.decode(a.midi),
      l = "??",
      c = "??",
      d = "??";
    o && ((l = o.numericVersion.toString()), (c = o.payload)),
      s && (d = s.numericVersion.toString());
    let u = (t, n) => {
        t.preventDefault(), e("editor/sound:generate", { version: n });
      },
      p = (t, n) => {
        t.preventDefault(), e("editor/sound:update", { version: n });
      },
      h = (t, n) => {
        t.preventDefault(), e("editor/sound:toggle", { version: n });
      },
      f = (e, t) => {
        e.preventDefault(),
          document.firstElementChild.setAttribute("color-scheme", t);
      },
      m = (e) => {
        let i = tp(e),
          r = !tf.has(t.current, e);
        return g(
          "a",
          {
            className: n.version === i.version ? Sq.active : Sq.link,
            disabled: r,
            onClick: (t) => h(t, e),
          },
          i.displayName
        );
      },
      y = oF(r, i),
      v = tp(y),
      b = "πÇÇ|πÇÇ",
      w = g("div", null, `Default: ${v.displayName}`, b),
      S = g(
        "div",
        null,
        "Sound: ",
        m($.V1),
        " ",
        m($.V2),
        " ",
        m($.V4),
        " ",
        m($.DEV),
        b
      ),
      x =
        l &&
        g(
          "a",
          c && {
            className: Sq.link,
            href: `https://github.com/songsterr/songsterr-processor-midi/commit/${c}`,
            target: "_blank",
          },
          `midi: ${l}`
        ),
      k = `audio: ${d}`,
      C = g("div", null, x, l ? " " : "", k, b),
      T = (e, t) =>
        g(
          "a",
          {
            className: Sq.small,
            href: `https://www.songsterr.com/api/sound/${$[e].toLowerCase()}`,
            target: "_blank",
          },
          t
        ),
      E = g(
        "div",
        { className: Sq.right },
        "List: ",
        T($.V2, "V2"),
        " ",
        T($.V4, "V4"),
        " ",
        T($.DEV, "Dev"),
        b
      ),
      _ = (e, t) => g("a", { className: Sq.link, onClick: (t) => f(t, e) }, t),
      P = g("div", null, _("light", "Light"), " ", _("dark", "Dark"), b),
      I = (e, t) =>
        g(
          "a",
          { className: Sq.small, onClick: (t) => u(t, e) },
          `Generate ${t}`
        ),
      L = (e, t) =>
        g("a", { className: Sq.small, onClick: (t) => p(t, e) }, `Update ${t}`),
      N = g(
        "div",
        null,
        I($.V2, "V2"),
        " ",
        I($.V4, "V4"),
        " ",
        I($.DEV, "Dev"),
        b,
        L($.V4, "V4")
      );
    return g(
      "div",
      { className: Sq.wrapper },
      g("div", { className: Sq.controls }, w, S, C, E, P, N)
    );
  },
  SY = "ju1pe",
  SK = { placeholder: "ju1pe" },
  SJ = "Cblr3",
  SZ = SY + " Cbl2bs",
  SQ = "Cbl17o",
  S1 = { wrap: "Cblr3", inner: SY + " Cbl2bs", banner: "Cbl17o" };
var S0 = "/static/media/et640en.746163ed.png",
  S2 = "/static/media/et640ru.875012f4.png",
  S5 = "/static/media/rra640en.4edf9663.png",
  S4 = "/static/media/rra640ru.60c1c5e4.png";
let S3 =
    "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
  S9 =
    "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50";
function S8(e) {
  let t = lX(e.os),
    n = ["ru", "ru-mo", "be", "uk"].some((t) => -1 !== e.languages.indexOf(t));
  return {
    alt: t
      ? "Master rhythm skills with Rhythm Trainer by Songsterr"
      : "Ear training reinvented",
    link: t
      ? "https://play.google.com/store/apps/details?id=ru.demax.rhythmerr&referrer=utm_source%3DSRWMbanner320x50"
      : "https://apps.apple.com/app/apple-store/id1600207375?pt=414338&ct=srwm-banner-320x50&mt=8",
    image: t ? (n ? S4 : S5) : n ? S2 : S0,
  };
}
let S6 = C(() => {
    let e = E(),
      { ads: t, device: n } = cn("ads", "device"),
      { alt: i, link: r, image: a } = S8(n);
    return (
      dW("tab_page_mobile", { isTargeted: !0, page: "tab" }),
      f(() => {
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
        { id: "showroom_header", className: S1.wrap, ref: e },
        g(
          "div",
          { id: "Redesign_ATF_tab_page_320╤à50", className: S1.inner },
          t.notsyFailed &&
            g(
              "a",
              { className: S1.link, href: r, target: "_blank" },
              g("img", { src: a, className: S1.banner, alt: i })
            )
        )
      )
    );
  }),
  S7 = T(() =>
    Promise.all([
      import("./ConsentManager.555fd8a5.js"),
      v_([
        "/static/latest/ConsentManager.68f68e5dc4bf2d2e.css",
        "/static/latest/index.546235ebfd21e495.css",
      ]),
    ]).then((e) => e[0])
  ),
  xe = () => {
    let { consent: e } = cn("consent");
    return "tcf" === e.suite
      ? m("div", { children: m(fh, { component: S7 }, "wrap") })
      : null;
  },
  xt = "a1 1 0 1 0 2 0 1 1 0 1 0-2 0",
  xn =
    "M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7z",
  xi = "M7 10v7H3c-3 0-3-7 0-7z",
  xr =
    "m1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8z",
  xa = "m4 2c-1 0-1 3 0 3l7-.5c1 0 1-2 0-2z",
  xs = `${xi}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l1.2.18s.5-1.8 1.85-1.8 1.85 2.4 1.85 2.4l1.5.2c1.5 0 1.5 4.3 0 4.3l-1.5.2s-.5 2.4-1.85 2.4-1.85-1.8-1.85-1.8l-1.2.18v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z`,
  xo = `${xi}m1 0c1 0 1.5-.5 2-1.5s.9-.9 1.5-.5l.8.52a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l1.4.9a1.3 1.3 0 1 1 1.4.9l2.7 1.9c1 .7 2.1 1.4 0 2.3-1.8.8-3.5 1.5-5.4 2.3-1 .4-1.4.2-1.4-.8 0-.8-.1-1.6-1.8-2.6-2-1-6-2.7-11-2.7zm2.8.8${xt}m2.8 1.8${xt}m2.8 1.8${xt}m2.8 1.8${xt}m2.8 1.8${xt}`,
  xl = [
    `${xn}M3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z`,
    "M17 6a1.5 1.5 0 1 1 0 1.7H3C2 7.7 2 6 3 6h14zM2 10.7c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8zm4 0c0-1 3-1 3 0v8c0 1-3 1-3 0v-8z",
    `${xn}M3 16v-2h1.2l-1-3V7h3v4l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V2h3v9l-1 3h3.65l-1-3V5h3v6l-1 3h3.65l-1-3V7h3v4l-1 3H25v2zm.7-6.5v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1zm4.65 0v1h2v-1`,
    `${xn}M9.8.1${xt}m3 1.36${xt}m3 1.36${xt}m3 1.36${xt}m3 1.36${xt}M3.43 10.52l.44-3.36 21.49 5.54-.18.88-21.75-3.06zM3 15.25l.25-2.72 21.78 2.19-.03.9-22-.37zM25.56 4.99s2.99.98.82 4.07L5.47-.23C6.6-4.34 8.2-3.05 8.61-3.06l16.95 8.05zm-21.39.15l.74-3.38 20.97 8.67-.23.83L4.17 5.14z`,
    `${xi}${xr}m12.7 2.5c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2zm0 4c1.5 0 1.5-2 0-2h-8c-1.5 0-1.5 2 0 2z`,
    `${xi}${xr}m3.9 1.25${xt}m3.9 0${xt}m3.9 0${xt}m-7.8 4.5${xt}m3.9 0${xt}m3.9 0${xt}`,
    `${xi}m1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8${xt}m2.8.65${xt}m2.8.65${xt}m2.8.65${xt}m2.8.65${xt}`,
    `${xi}m1 0h.7c1-1.75 3-1.75 3-1.75h11c2 0 2 10.5 0 10.5h-11s-2 0-3-1.75H8zm3 5.5a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1.1 1.1 0 1 0 2 0 1 1 0 1 0-2 0M13 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM19 19a1.5 1.5 0 1 1-1 2.5 1.5 1.5 0 1 1-1-2.5zM13 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 15 8zM19 8a1.5 1.5 0 1 1 1-2.5A1.5 1.5 0 1 1 21 8z`,
    xs,
    `${xs}${xa}`,
    `${xi}m1 0h2s-.1-1 .8-1l2 .3V8.08a2 2.5 45 1 1 1.6 0v1.46l3.6.54v-2a2 2.5 45 1 1 1.6 0v2.24l2 .3a3.2 4.5 0 1 1 0 5.66l-2 .3v2.24a2 2.5 45 1 1-1.6 0v-2l-3.6.54v1.46a2 2.5 45 1 1-1.6 0V17.6l-2 .3c-.9 0-.8-1-.8-1H8z${xa}`,
    "M20 8c1.5 0 3 0 3 1s-1.5 2.5-1.5 2.5l-9.5 11s1.5 0 1.5.5v1h-7v-1c0-.5 1.5-.5 1.5-.5V3c0-1.25 2.5-1.25 2.5 0C13 3 19 8 20 8zm-2.5.5l-1.5-1V14l1.5-1.5v-4zm-2.75-1.75L13.5 6v10.5l1.25-1.25v-8.5zM12 5.5L10.5 5v14.5L12 18V5.5zm9 4c-.5-.5-2 0-2.5-.5v2.5l2.5-2z",
    "M16 16h-4l1.5-7.5h1L16 16zM9 8.25l3.5.25-1.25 7.5L9 8.25zM16.75 16L15.5 8.5l3.5-.25L16.75 16zm.75.5l1 7a6.5 2 0 0 1-9 0l1-7a6.5 2 0 0 0 7 0zm-7-.5c-2 0-6-9-6-9L8 8l2.5 8zM20 8l3.5-1s-4 9-6 9L20 8zM4.5 5.5a9.5 2 0 1 1 19 0 9.5 2 0 1 1-19 0zm3-.2a6.5 1.2 0 1 0 13 0 6.5 1.2 0 1 0-13 0z",
    "M15.5 17c0 1 4 1 4 5-3 2-9 2-12 0 0-4 4-4 4-5s-1-1-1.5-3-.5-5.5 3.5-5.5 4 3.5 3.5 5.5-1.5 2-1.5 3zm7-2.5c2 .5 3 1.5 3 2.5s-2 2-5.5 2c-1.5-2.5-4.5-1-2-4 1-1 1.5-4-.5-6 0-1 2-2.5 3-2 2 0 3 1 3 4-.5 1-1 2-1 3.5zm-6-6.5c-.5-.5-.5-.5-1-.75 0-.75 0-.75-.5-1.25-.5-1.5 0-3 2.5-3 2 0 3 1 2.5 2.5-2.5 0-3 1.5-3.5 2.5zM9 15c2.5 3-1 1.5-2 4-3.5 0-5.5-1-5.5-2s1-2 3-2.5c-1 0-2-1.5-2-1.5 1.3-1.7 1-3 1-4s2-3 3-2c1-1 3 1 3 2-2 2-1.5 5-.5 6zm1.5-7c-.5-.75-.5-2.5-4-2.5 0-2.5 3.5-3 4.5-2 1.5 1 1.5 2.5 1.5 3.75 0 0-1.5.25-2 .75z",
    "M3 15c-1.5 0-5 1.5-5-1.5S1.5 12 3 12v3zm1 0v-3h3a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0h2.75a1.2 1.2 0 1 1 1 0H18v3h-1a5.5 4 0 1 1-11.5 0H7zm3 0a5.5 3 0 0 0 3.5 3v-3zm5 3a5.5 3 0 0 0 3.5-3H12zm13 1V8l-.5-.5S21 11.5 19 12v3c2 .5 5.5 4.5 5.5 4.5l.5-.5z",
    "M20.5 10.5a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-1 1a1 1.3 10 1 1-1 1l-4 4.5c-.5.5 1 1.5 2.5 0 .5-.5.5-1.5 1-1.75s1.27 0 1.5.5l1 6.25c0 .5-.5 1-1 1-1.5 0-2-2.5-5.5-1s-6-2.5-4-4.5L19.5 8c.5-.5.5-1.5 0-2l-2-2c-1 0-3-2-2-3s3 1 3 2l2 2c2.5 1 1.75 3.75.75 4.5l-.75 1z",
    "M3 14l1.5.5v-3L3 12s-5.5-.25-5.5 1S3 14 3 14zm2.5.5h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2a1.2 1.2 0 1 1 2 0h2v-3h-14zm13 1.5h-1.75l.25-1.25h-1l.25 1.25h-3.5l.25-1.25h-1l.25 1.25h-3.5L9 14.75H8L8.25 16H6.5v1h12v-1zm7.75.75v-7.5L26 9l-3.5 2.5h-2v3h2L26 17l.25-.25z",
    "M28 15h-4a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-1.5a1.6 1.6 0 1 0-3 0h-5.5a2 2 0 1 1 0-4h26z",
    `${xn}M3 7v9h22V7H3zm1.5 4a2.5 2.5 0 1 1 0 1H7v-1zm8.1-1.6a2.5 2.5 0 1 1-.7.7l1.7 1.7.7-.7zm7.9 4.6a2.5 2.5 0 1 1 1 0v-2.5h-1z`,
    "M11 4c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm-8.3 8.3c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5zm11.7-1.7c1 0 1.5.5 1.5 1.5v5.5c0 1-.5 1.5-1.5 1.5h-5.5c-1 0-1.5-.5-1.5-1.5v-5.5c0-1 .5-1.5 1.5-1.5zm-1.7 1.7h-2.1c-1 0-1.5.5-1.5 1.5v2.1c0 1 .5 1.5 1.5 1.5h2.1c1 0 1.5-.5 1.5-1.5v-2.1c0-1-.5-1.5-1.5-1.5z",
    "M8 20.4a8.5 8.5 0 1 1 11.2 0 1.25 1.25 0 1 0 1.65 1.88 11 11 0 1 0-14.5 0A1.25 1.25 0 1 0 8 20.4zM9.64 8.63a6.5 6.5 0 1 0 2.91-1.24l1.7 3.95a1.6 1.6 0 0 1-2.93 1.25z",
    `${xi}m1 0l3 .2s.8-1.5 1.8-1.5a1.8 2 45 1 1 1.6 0c2 0 3 2.2 3 2.2s1-2.2 3-2.2a1.8 2 45 1 1 1.6 0c1 0 1.5 2.2 1.5 2.2a1.7 4 0 1 1 0 5.26s-.5 2.2-1.5 2.2a1.8 2 45 1 1-1.6 0c-2 0-3-2.2-3-2.2s-1 2.2-3 2.2a1.8 2 45 1 1-1.6 0c-1 0-1.8-1.5-1.8-1.5l-3 .2z`,
    "M22.5 3c2 2-.5 4-4 8 0 0-7 11-9 13-1 1-1.5 1-3-.5S4 21 5 20C7 18 17.5 9.5 17.5 9.5c2-2.5 4.5-4 3.5-5.25S19 5 17 6.5c0 0-3 4.5-5 6.5-1.5 1.5-2 0-3.5-1.5S7 9.5 7.5 9c2-2 8.5-4.25 8.5-4.25C19 2.5 20.5 1 22.5 3z",
    "M8 5c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-8c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm8-4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1zm0 4c1 0 1 .5 1 1v1c0 1-.5 1-1 1h-5c-1 0-1-.5-1-1v-1c0-1 .5-1 1-1z",
    "M6.17 9.65a9.03 4.82 0 1 0 8.26-3.35l1.83 1.39a7.43 3.5 0 1 1-8.59 2.4l7.04 2.06.2-.46-11-4.23a.7.7 0 1 0-.48 1.39zM6.8 2.8l9.57 6.25-.37.45-3.19-1.76a7.43 3.5 0 0 0-3.02.78l-1.54-.73a9.03 4.82 0 0 1 2.74-1.05L6 4a.7.7 0 0 1 .8-1.2zm17 9.76a9.03 4.82 0 0 1-3.21 3.69v7.18a9.03 4.82 0 0 0 3.21-3.69zm-4.92 4.29a9.03 4.82 0 0 1-8.44-.06l-.04 7.17a9.03 4.82 0 0 0 8.48.07zm-10.11-.69a9.03 4.82 0 0 1-3-3.2v7.18a9.03 4.82 0 0 0 3 3.2z",
  ],
  xc = "translate(-5 14)rotate(-45)",
  xd = "translate(-7 14)rotate(-45)",
  xu = " translate(13 0)rotate(45)scale(.75)";
function xp(e) {
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
function xh(e) {
  let { instrumentId: t, name: n, className: i, transform: r } = e,
    a = e0(t),
    s = n && 6 === a && n.includes("James Hetfield"),
    o = s ? xo : xl[a],
    l = s ? "translate(-7 14)rotate(-45)" : xp(a);
  return g("path", {
    d: o,
    transform: (l || r) && `${r || ""}${l || ""}`,
    className: i,
  });
}
let xf = "wc27x",
  xg = "wc1dg",
  xm = "wc2wi",
  xy = "wcnf",
  xv = "wc7n",
  xb = {
    instrument: "wc27x",
    instrumentActive: "wc1dg",
    instrumentMobile: "wc2wi",
    indication: "wcnf",
    indicationActive: "wc7n",
  };
class xw extends w {
  render() {
    let {
        active: e,
        mobile: t,
        name: n,
        instrumentId: i,
        i: r,
        instrument: a,
        playing: s,
      } = this.props,
      o = e ? xb.instrumentActive : xb.instrument;
    o = t ? xb.instrumentMobile : o;
    let l = `part-${r}`;
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
      g(xh, { className: o, instrumentId: i, name: n }),
      s &&
        g("circle", {
          className: e ? xb.indicationActive : xb.indication,
          strokeWidth: 2,
          cy: 25,
          cx: 25,
          r: 3,
        })
    );
  }
}
let xS = (e) => e.notes?.length > 0 && !e.rest,
  xx = (e, t) => {
    let n = sr(e, t),
      i = e.timestamps[n],
      r = e.timeline.get(i);
    return r.beats.some(xS);
  };
function xk() {
  let { parts: e, player: t } = cn("parts", "player", "experiments"),
    [n, i] = u({}),
    r = E(),
    a = b(() => {
      r.current = requestAnimationFrame(a);
      let s = t.instance.getCursor(),
        o = e.list.reduce((e, t) => ({ ...e, [t.partId]: xx(t, s) }), n);
      i(o);
    }, [e.list, t.audio]);
  return (
    h(
      () => (
        (r.current = requestAnimationFrame(a)),
        () => r.current && cancelAnimationFrame(r.current)
      ),
      [e.list]
    ),
    n
  );
}
let xC = "Cix6",
  xT = "Cixn1",
  xE = "Cix1pm",
  x_ = "Cix2la",
  xP = "Cix314",
  xI = "Cix2aq",
  xL = "Cix2lj",
  xN = "Cix268",
  xA = "Cixvc",
  xM = "Cix314 Cix4s",
  xB = "Cix6 Cix9m",
  xD = "Cix127",
  xO = "Cix1dp",
  xR = "Cixfe",
  xz = {
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
    changedIcon: "Cix127",
    deletedIcon: "Cix1dp",
    removedIcon: "Cixfe",
  },
  x$ = 42,
  xF = 46,
  xV = 20,
  xU = "#mixer-button";
function xH(e) {
  return e <= 2 ? 1 : e <= 4 ? 2 : 3;
}
function xj(e) {
  return 42 - 46 * e;
}
function xG(e, t) {
  let n = document.querySelector("#mixer-button") || null,
    i = n ? n.getBoundingClientRect().top : 42,
    r = xj(xH(e));
  return { height: Math.min(46 * e, t - (i + r) - 20 - 20), top: r };
}
function xW(e) {
  return { top: -1 * e.top + 17 };
}
let xq = (e) => {
    let { meta: t, parts: n, onItemClick: i } = e,
      r = xk(),
      { current: a } = t,
      s = t.revisionId,
      o = t.partId;
    return n
      ? n.map((e, t) => {
          let n = o === t,
            l = `${n ? xz.itemActive : xz.item}`,
            c = r[t];
          return g(
            "div",
            { className: l, key: t, "aria-label": "track" },
            g(
              fg,
              {
                className: xz.itemLink,
                to: e6(a, t, s),
                "aria-current": n ? "page" : void 0,
                onClick: () => i({ instrumentId: e.instrumentId }),
              },
              g(xw, {
                className: xz.icon,
                instrumentId: e.instrumentId,
                instrument: e.instrument,
                i: t,
                name: e.name,
                active: n,
                playing: c,
              }),
              g("span", { className: xz.text }, e.title)
            )
          );
        })
      : null;
  },
  xX = (e) => {
    let { meta: t, parts: n, diff: i, diffTracks: r, onItemClick: a } = e;
    if (!n) return null;
    let s = r.current,
      o = t.partId;
    return (
      i.before?.partId != void 0 && (o = i.before?.partId),
      n.map((e, t) => {
        let n = o === t,
          r = `${n ? xz.itemActive : xz.item}`,
          l = `${e.name} - ${e.instrumentId}`,
          c = s?.added[l] || s?.updated[l],
          d = s?.deleted?.hasOwnProperty?.(l);
        return g(
          "div",
          { className: r, key: t, "aria-label": "track" },
          g(
            fg,
            {
              className: xz.itemLink,
              to: ti(
                {
                  songId: i.songId,
                  artist: i.current.artist,
                  title: i.current.title,
                },
                { partId: t, revisionId: i.before.revisionId },
                { partId: t, revisionId: i.after.revisionId }
              ),
              "aria-current": n ? "page" : void 0,
              onClick: () => a({ instrumentId: e.instrumentId }),
            },
            g(xw, {
              className: xz.icon,
              instrumentId: e.instrumentId,
              instrument: e.instrument,
              i: t,
              name: e.name,
              active: n,
              playing: !1,
            }),
            g(
              "span",
              { className: xz.text },
              c && g("span", { className: xz.changedIcon }),
              d && g("span", { className: xz.removedIcon }),
              e.title
            )
          )
        );
      })
    );
  };
class xY extends w {
  constructor(e) {
    super(e);
    let t = e.meta.current,
      n = (t && t.tracks) || [],
      i = xG(n.length, e.screen.viewport.height),
      r = xW(i),
      a = { height: i.height };
    this.state = { style: i, arrowStyle: r, scrollerStyle: a };
  }
  updateHeight = () => {
    let e = this.props.meta.current || this.props.diff.current?.before,
      t = (e && e.tracks) || [],
      n = xG(t.length, this.props.screen.viewport.height),
      i = xW(n),
      r = { height: n.height },
      a = this.state.style;
    (a.height !== n.height || a.top !== n.top) &&
      this.setState({
        ...this.state,
        style: n,
        arrowStyle: i,
        scrollerStyle: r,
      });
  };
  componentDidMount() {
    this.updateHeight();
  }
  componentDidUpdate() {
    this.updateHeight();
  }
  render() {
    let { dispatch: e, routeContent: t, meta: n, diff: i } = this.props,
      r = "diff" === t.page ? i.current?.before : n.current;
    if (!r) return;
    let a = this.props.screen.isSmall,
      s = (r && r.tracks) || [],
      o = a ? null : this.state.style,
      l = "diff" === t.page,
      c = l
        ? g(xX, {
            parts: s,
            meta: this.props.meta,
            diff: this.props.diff,
            diffTracks: this.props.diffTracks,
            onItemClick: (t) => e("songs/default", t),
          })
        : g(xq, {
            parts: s,
            meta: this.props.meta,
            onItemClick: (t) => e("songs/default", t),
          });
    return g(
      "div",
      {
        className: a ? xz.mixerDropdown : xz.mixer,
        style: o,
        role: "dialog",
        "aria-label": "Select track",
      },
      a
        ? c
        : g(
            "div",
            { className: xz.scroller, style: this.state.scrollerStyle },
            c
          ),
      a ? null : g("div", { className: xz.arrow, style: this.state.arrowStyle })
    );
  }
}
var xK = hQ(xY, "screen", "meta", "diff", "routeContent", "diffTracks");
function xJ(e) {
  let {
    up: t,
    styles: { icon: n, stroke: i },
  } = e;
  return g(
    "svg",
    { width: 14, height: 12, viewBox: "0 0 26 17", className: n },
    g("path", {
      d: t ? "M3 14L13 4l10 10" : "M3 4l10 10L23 4",
      className: i,
      "stroke-width": 4,
      "stroke-linecap": "square",
    })
  );
}
let xZ = "B1t2kr",
  xQ = "B1t297",
  x1 = "B1t1q7",
  x0 = "B1t267",
  x2 = "B1tga",
  x5 = "B1t1kk",
  x4 = "B1t1bd",
  x3 = "B1t2x3",
  x9 = "B1thf",
  x8 = "B1tix",
  x6 = {
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
  x7 = { animationStyles: ye };
function ke(e) {
  let { songs: t, layer: n, meta: i } = cn("songs", "layer", "meta"),
    r = "mixer" === n.layer,
    { isChords: a } = e,
    s = "Chords";
  if (!a) {
    let e = d4(i);
    s = e ? `${e.name} \u002d ${e.instrument}` : "Instrument";
  }
  return g(
    "header",
    { className: x6.header, "data-controls": "tablature" },
    g(
      "div",
      { className: x6.wrapper },
      g(
        fg,
        {
          to: `/${l9(t.pattern, t.filters)}`,
          className: x6.burger,
          title: "Search",
          id: "burger",
        },
        g(vK, { styles: x6 })
      ),
      g(
        "button",
        {
          className: x6.mixer,
          onClick: e.handleMixer,
          role: "button",
          id: "control-mixer",
          title: r ? "Hide tracks" : "Show tracks",
          "aria-haspopup": !0,
          "aria-pressed": r,
        },
        g("div", { className: x6.title }, s),
        !a && g(xJ, { up: r, styles: x6 })
      ),
      g(
        fg,
        { to: "/a/wa/help", className: x6.help, title: "Help" },
        g(bf, { width: 27, height: 25, styles: x6 })
      )
    ),
    g(fZ, null, r && g(f8, x7, g(xK, null)))
  );
}
function kt() {
  return window.__LOCALE__ || "en";
}
var kn = {
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
  ki = {
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
  kr = {
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
  ka = {
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
  ks = {
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
  ko = {
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
  kl = {
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
  kc = {
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
  kd = {
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
  ku = {
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
  kp = [kn, ki, kr, ka, ks, ko, kl, kc, kd, ku];
let kh = new Map();
function kf(e) {
  let t = kh.get(e);
  return t || ((t = y1(e, kp)), kh.set(e, t)), t;
}
function kg(e, t) {
  let { gettext: n } = kf(t);
  return null == e || 0 === e.length
    ? n("Should not be empty")
    : !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ) && n("Invalid e-mail address");
}
function km(e, t) {
  let { gettext: n } = kf(t);
  return 0 === e.length && n("Should not be empty");
}
function ky(e, t) {
  let { gettext: n } = kf(t);
  return e.length >= 1e3
    ? n("Should be less than 1000 characters")
    : 0 === (e = e.replace(/[^\w\s_]/, "").trim()).length
    ? n("Should not be empty")
    : e.length < 3 && n("Please provide more meaningful edit summary");
}
function kv(e, t) {
  return km(e, t);
}
function kb(e, t) {
  let { gettext: n } = kf(t);
  return 0 === e.length && n("Tell us how can we help you");
}
function kw() {
  return function (e, t) {
    let { gettext: n } = kf(t);
    if (!e.length) return n("Upload the file");
    {
      let t = e[0].name.split(".").pop();
      if (!c6.includes(t)) return n("Choose right file format");
    }
  };
}
function kS(e, t) {
  let { gettext: n } = kf(t);
  return 0 === e.length
    ? n("Should not be empty")
    : e.length < 5 && n("Should be at least 5 symbols long");
}
function kx(e, t) {
  let { gettext: n } = kf(t);
  return !e && n("Should be checked");
}
function kk(e, t, n) {
  let { gettext: i } = kf(n);
  return !!t && e !== t && i("Passwords should match");
}
function kC(e) {
  let t = kt(),
    { gettext: n } = kf(t);
  if (e instanceof tS) {
    if (e.reasons) {
      if (e.reasons.__all__) return e.reasons.__all__;
      let t = e.reasons.length && e.reasons[e.reasons.length - 1].message;
      if (t) return t;
    }
    return n("Please fix the errors and try again");
  }
  return e.message || n("Oops, something went wrong. Please try again later");
}
function kT(e, t) {
  return e && e.reasons && e.reasons[t];
}
function kE(e) {
  let t = kt();
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
  if (Object.keys(n).reduce((e, t) => e || !!n[t], !1)) throw new tS(n);
  return null;
}
function k_(e, t) {
  let n = kt(),
    { gettext: i } = kf(n),
    r = { __all__: void 0, comment: void 0 };
  if (
    (e || (r.__all__ = i("Please select a reason for the report")),
    "other" !== e || t || (r.comment = i("Please describe the problem")),
    Object.keys(r).reduce((e, t) => e || !!r[t], !1))
  )
    throw new tS(r);
  return null;
}
let kP = "Df9s",
  kI = "Df4c",
  kL = "Dfxe",
  kN = "Dfsp",
  kA = "Df1p2",
  kM = "Df16",
  kB = "Df58",
  kD = "Df1s7",
  kO = {
    error: "Df9s",
    title: "Df4c",
    rejected: "Dfxe",
    content: "Dfsp",
    exitActive: "Df1p2",
    enterActive: "Df16",
    enter: "Df58",
    exit: "Df1s7",
  };
function kR(e) {
  let { styles: t, error: n, errorMessage: i, name: r = "form" } = e,
    a = t || kO,
    s = E(),
    o = i,
    l = {
      enter: a.enter,
      enterActive: a.enterActive,
      exit: a.exit,
      exitActive: a.exitActive,
    };
  return (!o && n && (o = kC(n)),
  f(() => {
    s.current.scrollIntoView && s.current.scrollIntoView();
  }, [o]),
  n instanceof tC && n.action)
    ? g(
        fZ,
        { component: "div", className: a.error, ref: s },
        n &&
          g(
            f8,
            { animationStyles: l, timeout: 300 },
            g(
              "div",
              { className: a.rejected, key: "error" },
              g(
                "span",
                { className: a.content, role: "alert", "aria-label": r },
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
        fZ,
        { component: "div", className: a.error, ref: s },
        o &&
          g(
            f8,
            { animationStyles: l, timeout: 300 },
            g(
              "div",
              { className: a.title, key: "error" },
              g(
                "span",
                { className: a.content, role: "alert", "aria-label": r },
                o
              )
            )
          )
      );
}
let kz = "Czsup",
  k$ = "Czs1b5",
  kF = "Czs4c",
  kV = "Czs1nq",
  kU = "Czs1nq Czs1ot",
  kH = "Czsaw",
  kj = "Czszb",
  kG = "Czsn5",
  kW = "Czs221",
  kq = "Czs1rj",
  kX = "Czs1an",
  kY = "Czs1an Czs24z",
  kK = "Czs1an Czs246",
  kJ = {
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
  kZ = kz + " Blg1d3",
  kQ = k$ + " Blgd8",
  k1 = kF + " Blg76",
  k0 = kH + " Blg25i",
  k2 = "Blg2zb",
  k5 = "Blg14z",
  k4 = "Blg14z Blg19z",
  k3 = "Blg1be",
  k9 = kG + " Blg2zc",
  k8 = kX + " Blgq2",
  k6 = kK + " Blg2i3",
  k7 = {
    settings: kz + " Blg1d3",
    panel: k$ + " Blgd8",
    head: kF + " Blg76",
    title: kH + " Blg25i",
    body: "Blg2zb",
    priceBoxTitle: "Blg14z",
    priceBoxTitleAfter: "Blg14z Blg19z",
    priceBoxText: "Blg1be",
    actions: kG + " Blg2zc",
    button: kX + " Blgq2",
    buttonGray: kK + " Blg2i3",
  },
  Ce = "Bqh1iv",
  Ct = "Bqh25v",
  Cn = "Bqh2xh",
  Ci = "Bqh2j6",
  Cr = "Bqh2fg",
  Ca = "Bqhgy",
  Cs = "Bqh1yg",
  Co = "Bqhal",
  Cl = {
    error: "Bqh1iv",
    title: "Bqh25v",
    rejected: "Bqh2xh",
    content: "Bqh2j6",
    exitActive: "Bqh2fg",
    enterActive: "Bqhgy",
    enter: "Bqh1yg",
    exit: "Bqhal",
  };
function Cc(e, t) {
  switch (t.type) {
    case "migrate":
      return { ...e, processing: !0, error: null };
    case "success":
      return { ...e, processing: !1, success: !0 };
    case "failure":
      return { ...e, processing: !1, error: t.error };
  }
}
let Cd = () => {
    let {
      dispatch: e,
      user: t,
      payment: n,
      device: i,
    } = cn("user", "payment", "device");
    f(
      () =>
        e("curiosity/event", {
          event: "Opened migration popup",
          Plan: n.plan.id,
          Country: i.country,
        }),
      []
    );
    let [r, a] = _(Cc, { processing: !1, success: null, error: null }),
      s = async () => {
        e("curiosity/event", {
          event: "Confirmed subscription migration",
          Plan: n.plan.id,
          Country: i.country,
        });
        try {
          a({ type: "migrate" }), await new Promise((e) => setTimeout(e, 2e3));
          let t = await cw({ planId: n.plan.id });
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
            Country: i.country,
          });
      },
      l = () => e("payment/popup:hide"),
      c = "USD" !== n.plan.currency ? "US" : "",
      d = ty(t.profile.subscription.plan.id),
      u = tv(d, !0),
      p = tv(n.plan, !0),
      h = uI.get(i.country) || void 0;
    return (
      n.showMigrationPopup &&
      g(
        "section",
        { className: k7.settings },
        g(
          "div",
          { className: k7.panel },
          g(
            "div",
            { className: k7.head },
            g("div", { className: k7.title }, "Plus prices reduction"),
            g(
              "p",
              null,
              "We are updating our subscription model to use regional prices. ",
              "Please review the changes that will apply to your account below:"
            )
          ),
          g(
            "div",
            { className: k7.body },
            g(
              "article",
              { className: k7.priceBox },
              g(
                "h3",
                { className: k7.priceBoxTitleAfter },
                r.success ? "Current price " : "New price ",
                g("span", null, p)
              )
            ),
            !r.success &&
              g(
                "article",
                { className: k7.priceBox },
                g("h3", { className: k7.priceBoxTitle }, "Old price ", c, u)
              )
          ),
          g(
            "div",
            { className: k7.actions },
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
            g(kR, { error: r.error, styles: Cl }),
            !r.success &&
              g(
                "button",
                { id: "save", className: k7.button, onClick: s },
                r.processing &&
                  g(ft, {
                    width: 17,
                    height: 17,
                    fill: "#fff",
                    className: fe.migrate,
                  }),
                r.processing ? "Switching plan..." : `Cut costs with ${p}`
              ),
            !r.success &&
              !r.processing &&
              g(
                "button",
                { id: "cancel", className: k7.buttonGray, onClick: o },
                `Stay with ${c}${u}`
              ),
            r.success &&
              !r.processing &&
              g(
                "button",
                { id: "done", className: k7.button, onClick: l },
                "Done"
              )
          )
        )
      )
    );
  },
  Cu = "C0d2hw",
  Cp = "C0d2su",
  Ch = "C0d2mf",
  Cf = "C0d15l",
  Cg = "C0d2gj",
  Cm = "C0d52",
  Cy = wO + " C0d2j4",
  Cv = wU + " C0d2ls",
  Cb = {
    settings: "C0d2hw",
    panel: "C0d2su",
    head: "C0d2mf",
    title: "C0d15l",
    body: "C0d2gj",
    actions: "C0d52",
    button: wO + " C0d2j4",
    buttonLink: wU + " C0d2ls",
  };
var Cw = {
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
  CS = {
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
  Cx = {
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
  Ck = null,
  CC = {
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
  CT = {
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
  CE = null,
  C_ = {
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
  CP = {
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
  CI = null,
  CL = [Cw, CS, Cx, Ck, CC, CT, CE, C_, CP, CI];
let CN = "sr_subscribe_dialog",
  CA = () => {
    let { dispatch: e } = cn(),
      { gettext: t } = y0(CL),
      [n, i] = u(!cS(CN)),
      r = () => {
        i(!1),
          ck(CN, !0),
          e("curiosity/setConversionProps", {
            "Last referring link": "Subscribe dialogue",
          }),
          e("navigate", "/a/wa/plus?from=subscribe_dialogue");
      },
      a = () => {
        i(!1), ck(CN, !0);
      };
    return (
      n &&
      g(
        "section",
        { className: Cb.settings },
        g(
          "div",
          { className: Cb.panel },
          g(
            "div",
            { className: Cb.head },
            g("h2", { className: Cb.title }, t("Subscribe to Plus"))
          ),
          g(
            "p",
            { className: Cb.body },
            t(
              "Love Songsterr? Join thousands of subscribers to support original music creators and help us build an even better product Γ¥ñ∩╕Å"
            )
          ),
          g(
            "div",
            { className: Cb.actions },
            g(
              "button",
              { id: "subscribe", className: Cb.button, onClick: r },
              t("Subscribe to Plus")
            ),
            g(
              "button",
              { id: "cancel", className: Cb.buttonLink, onClick: a },
              t("Continue on a free plan")
            )
          )
        )
      )
    );
  },
  CM = "u52oy",
  CB = "u51oh",
  CD = "u51nj",
  CO = { panel: "u52oy", controls: "u51oh", active: "u51nj" };
class CR extends w {
  activeItemRef = P();
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
    let { offset: i } = this.state,
      r = +t.tabedit,
      a = n.adminData.map((e) =>
        g(
          "li",
          {
            ref: e.id === r ? this.activeItemRef : void 0,
            className: e.id === r ? CO.active : void 0,
            onClick: () => this.props.dispatch("tabEditor/loadById", e.id),
          },
          `id"${e.id}"-song"${e.songId}"`
        )
      ),
      s = () => {
        e("tabEditor/loadAdminData", { offset: i - 500, limit: 500 }),
          this.setState({ offset: i - 500 });
      },
      o = () => {
        e("tabEditor/loadAdminData", { offset: i + 500, limit: 500 }),
          this.setState({ offset: i + 500 });
      };
    return g(
      "div",
      { className: CO.panel },
      g(
        "div",
        { className: CO.controls },
        g("button", { onClick: s }, "<<"),
        g("h1", {}, `${i}-${i + 500}`),
        g("button", { onClick: o }, ">>")
      ),
      g("ul", null, a)
    );
  }
}
var Cz = hQ(CR, "tabEditor", "query");
let C$ = "Bz8bn",
  CF = { overlay: "Bz8bn" };
function CV() {
  let { layer: e, dispatch: t } = cn("layer");
  return (
    e.layer &&
    m("div", {
      className: CF.overlay,
      onClick: () => t("layer/hide"),
      id: "hide-layer-overlay",
    })
  );
}
let CU = T(() =>
  Promise.all([
    import("./UTRecorder.2e33a97e.js"),
    v_([
      "/static/latest/UTRecorder.c9e7f6120247afa8.css",
      "/static/latest/index.546235ebfd21e495.css",
      "/static/latest/Input.a9724713b13b8c84.css",
    ]),
  ]).then((e) => e[0])
);
function CH() {
  let { ut: e } = cn("ut"),
    t = e.stage;
  if (t === uQ) return;
  let [n] = y((e) => {
    "Sentry" in window &&
      "function" == typeof window.Sentry.captureException &&
      window.Sentry.captureException(e),
      console && console.error(e);
  });
  return n ? null : m(v, { fallback: void 0, children: m(CU, this.props) });
}
let Cj = (e) => !e || !e.tracks || 1 === e.tracks.length,
  CG = (e, t) =>
    e.layer.layer === t
      ? e.dispatch("layer/hide")
      : e.dispatch("layer/show", t),
  CW = (e) => e.meta.allowedByLicense,
  Cq = (e) => !e.route.isPanel,
  CX = (e) => {
    let { current: t } = e.store.get().part;
    return t && !t.usedDrums;
  },
  CY = (e) => !Cj(e.meta.current) || (CG(e, "solo_single"), !1),
  CK = (e) => (t) => !!(ei(t.user) || ot(t.demo)) || (CG(t, e), !1),
  CJ = (e) => (e.layer.layer && e.dispatch("layer/hide"), !0);
class CZ extends w {
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
      if (!t(this.props, n)) return;
    t(n);
  };
  handlePlay = this.handleAction([CW, Cq, CJ], () => {
    let { store: e } = this.props,
      { meta: t, player: n, user: i } = e.get();
    if (!t.isFailed && iE(t, i)) {
      let { dispatch: e } = this.props;
      lw(e, n.audio),
        e("curiosity/google", {
          category: "Player",
          action: n.shouldPlay ? "Pressed pause" : "Pressed play",
        });
    }
  });
  handlePlayVideo = () => {
    let { player: e, dispatch: t } = this.props;
    lw(t, e.audio, !0);
  };
  handlePauseVideo = () => {
    let { player: e, dispatch: t } = this.props;
    lw(t, e.audio, !1);
  };
  handleDiffPlay = this.handleAction([Cq, CJ], () => {
    let { store: e } = this.props,
      { diff: t } = e.get(),
      n = e6(
        { songId: t.songId, artist: t.current.artist, title: t.current.title },
        t.after.partId,
        t.after.revisionId
      );
    this.props.dispatch("navigate", n);
  });
  handleMixer = this.handleAction([CW, Cq], () => {
    let { store: e } = this.props,
      { meta: t } = e.get();
    t.current && t.current.tracks && CG(this.props, "mixer");
  });
  handleDiffMixer = this.handleAction([CW, Cq], () => {
    let { store: e } = this.props,
      { diff: t } = e.get();
    t.current?.before?.tracks && CG(this.props, "mixer");
  });
  handleSpeed = this.handleAction([CW, Cq, CK("plus_speed")], () => {
    CG(this.props, "speed");
  });
  handleIncreaseBpm = this.handleAction([CW, Cq, CK("plus_speed")], () => {
    lC(this.props.store);
  });
  handleChangeSpeed = (e) =>
    this.handleAction([CW, Cq, CK("plus_speed")], () => {
      l_(this.props.store, e);
    });
  handleDecreaseBpm = this.handleAction([CW, Cq, CK("plus_speed")], () => {
    lT(this.props.store);
  });
  handlePitchshift = this.handleAction(
    [CW, Cq, CK("plus_pitchshift"), CJ],
    () => {
      this.props.player.videoOpened || CG(this.props, "pitchshift");
    }
  );
  handleCountin = this.handleAction([CW, Cq, CJ], () => {
    this.props.player.videoOpened || lM(this.props.dispatch);
  });
  handleMetronome = this.handleAction([CW, Cq, CJ], () => {
    this.props.player.isMetronome || CG(this.props, "metronome"),
      this.props.player.videoOpened ||
        this.props.dispatch("player/toggleMetronome:init");
  });
  handleSolo = this.handleAction([CW, Cq, CY, CK("plus_solo"), CJ], () => {
    let { store: e } = this.props,
      { player: t } = e.get();
    t.videoOpened || lN(e, "solo" === t.type ? "focus" : "solo");
  });
  handleMute = this.handleAction([CW, Cq, CK("plus_mute"), CJ], () => {
    let { store: e } = this.props,
      { player: t } = e.get();
    t.videoOpened || lN(e, "mute" === t.type ? "focus" : "mute");
  });
  handleLoop = this.handleAction([CW, Cq, CK("plus_loop"), CJ], () =>
    lk(this.props.store)
  );
  handlePrint = this.handleAction([CW, Cq, CK("plus_print"), CJ], async () => {
    let { store: e } = this.props,
      { meta: t, player: n, user: i } = e.get();
    !t.isFailed &&
      iE(t, i) &&
      (n.videoOpened
        ? this.handlePauseVideo()
        : this.props.dispatch("player/togglePlay", !1)),
      "chords" === this.props.route.page
        ? (this.props.dispatch("curiosity/event", { event: "Printed chords" }),
          window.print())
        : "tab" === this.props.route.page &&
          (ot(this.props.print)
            ? await this.props.dispatch("print/disable")
            : (await this.props.dispatch("layer/show", "print"),
              await this.props.dispatch("print/enable")));
  });
  handleTabEditor = this.handleAction([CW, Cq, CX, CJ], () => {
    let { dispatch: e, video: t, route: n } = this.props,
      i = n.hasEditor;
    i && (t.player.pause(), e("player/stopPlay")),
      e("curiosity/event", { event: "Pressed tab editor", opened: i }),
      e("screener/pressedEditor"),
      e("tabEditor/toggle");
  });
  handleFingerings = this.handleAction([CW, Cq, CJ], () => {
    this.props.dispatch("fingerings/toggle");
  });
  handleMinimize = () => CJ(this.props);
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
          tags: i,
          diff: r,
        } = this.props.store.get(),
        a = b3(e, t, n, i, r);
      this.props.dispatch("navigate", a);
    }
    if (this.props.layer.layer) {
      this.props.dispatch("layer/hide");
      return;
    }
  });
  scaleTab = (e) => {
    let t;
    let { scale: n } = this.props.store.get().part;
    if ("in" === e && n < 1.875) t = 0.2 === n ? 0.25 : n + 0.125;
    else {
      if ("out" !== e || !(n > 0.2)) return;
      t = n - 0.125 <= 0.2 ? 0.2 : n - 0.125;
    }
    this.props.dispatch("part/scale", { scale: t });
  };
  handleIncreaseTabScale = this.handleAction([Cq], () => {
    this.scaleTab("in"),
      this.props.dispatch("curiosity/event", { event: "Zoomed in" });
  });
  handleDecreaseTabScale = this.handleAction([Cq], () => {
    this.scaleTab("out"),
      this.props.dispatch("curiosity/event", { event: "Zoomed out" });
  });
  handleResetTabScale = this.handleAction([Cq], () => {
    this.props.dispatch("part/scale", { scale: 1 });
  });
  render() {
    let {
        user: e,
        demo: t,
        meta: n,
        chords: i,
        routeContent: r,
        device: a,
        print: s,
      } = this.props,
      o = !this.props.device.webview,
      l = this.props.screen.isSmall,
      c = !n.loading && !!n.current,
      d = o && c && !l,
      u = d && tg(e, V.USE_ADMIN_TOOLS),
      p = d && tg(e, V.USE_TAB_EDITOR),
      h = o && !l && this.props.payment.showMigrationPopup,
      f = !ei(e) && !ot(t) && this.props.curiosity.vpt10.count >= 10 && !l,
      y = !1,
      v = hZ.main;
    if ("tab" === r.page) {
      v = ot(s) ? hZ.appPrint : hZ.appNoPrint;
      let i = !n.isFailed && n.allowedByLicense;
      y = i && !ei(e) && !ot(t) && a.isPhone;
    } else if ("chords" === r.page) {
      v = hZ.appChords;
      let n = !i.isFailed;
      (y = n && !ei(e) && !ot(t) && a.isPhone),
        this.props.device.webview && (v = hZ.appChordsMinimalism);
    } else "tags" === r.page && (v = hZ.appTags);
    return g(
      "div",
      { className: v, id: "app" },
      o && g(wk, null),
      o && g(wp, { isSmallScreen: l }),
      o && g(xe, null),
      o && g(ST, null),
      o && g(CH, null),
      o &&
        ("tab" === r.page || "chords" === r.page) &&
        l &&
        g(ke, { isChords: "chords" === r.page, handleMixer: this.handleMixer }),
      o &&
        "diff" === r.page &&
        l &&
        g(ke, { isChords: !1, handleMixer: this.handleDiffMixer }),
      y && m(S6, null, "showroom-header"),
      g(vZ, {
        plusAccess: ei(this.props.user) || ot(this.props.demo),
        showFullUI: o,
        handleNotation: this.handleNotation,
      }),
      "tab" === r.page &&
        m(fh, {
          component: bx,
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
          handleIncreaseTabScale: this.handleIncreaseTabScale,
          handleDecreaseTabScale: this.handleDecreaseTabScale,
          handleResetTabScale: this.handleResetTabScale,
        }),
      "chords" === r.page &&
        m(fh, { component: bw, handlePrint: this.handlePrint }),
      "diff" === r.page &&
        m(fh, {
          component: bk,
          handlePrint: this.handlePrint,
          handlePlay: this.handleDiffPlay,
          handleMixer: this.handleDiffMixer,
          handleSpeed: this.handleSpeed,
          handleSolo: this.handleSolo,
          handleMute: this.handleMute,
          handleLoop: this.handleLoop,
          handlePitchshift: this.handlePitchshift,
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
      ("tag" === r.page || "tags" === r.page) && m(fh, { component: bS }),
      o && !ei(this.props.user) && !ot(this.props.demo) && g(SF, null),
      o && d && g(wL, { songId: n.songId }),
      o && p && g(Cz, null),
      o && u && g(SX, null),
      o && m(CV, {}),
      o && h && g(Cd, null),
      o && f && g(CA, null),
      this.props.isTestMode &&
        this.props.player.canPlay &&
        g("div", { id: "is-test-mode", className: hZ.isTestMode }, "TEST MODE")
    );
  }
}
var CQ = hQ(
  CZ,
  "isTestMode",
  "video",
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
let C1 = Array.from("1234567890qwertyuiopasdfghjklzxcvbnm"),
  C0 = Array.from("1234567890"),
  C2 = [
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
    "NumpadPlus",
    "NumpadMinus",
  ],
  C5 = {
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
    NumpadPlus: 107,
    NumpadMinus: 109,
    "+": 187,
    "-": 189,
  };
function C4(e) {
  let t = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  return t || "cmd" !== e ? (t && "ctrl" === e ? "cmd" : e) : "ctrl";
}
function C3() {
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
class C9 {
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
    let i = this.store.get().route.isPanel;
    if (t.parallel) {
      let n = "function" == typeof t.parallel && t.parallel;
      (i && C3()) || n(e);
    }
    if (i) {
      let n = "function" == typeof t.onPanelPopup && t.onPanelPopup,
        i = "function" == typeof t.onPanel && t.onPanel;
      t.onPanelPopup ? n(e) : t.onPanel && i(e);
    } else {
      let n = "function" == typeof t.onPopup && t.onPopup,
        i = "function" == typeof t.onTab && t.onTab;
      t.onPopup ? n(e) : t.onTab && i(e);
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
        layer: { layer: i },
      } = this.store.get();
      t.onPopup
        ? t.onPopup(e)
        : t.onTab
        ? n || null !== i || t.onTab(e)
        : t.global && t.global(e);
    }
  }
  bindMeta(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "global",
      i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App",
      r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      a = e.indexOf("+"),
      [s, o] = [e.slice(0, a), e.slice(a + 1)];
    if (!("shift" === s || "ctrl" === s || "alt" === s || "cmd" === s)) {
      console.error("Please check your meta handler");
      return;
    }
    (this.bindSources[`${o}-${s}-${n}`] = i),
      (this.meta[C5[o]] = this.meta[C5[o]] || {}),
      (this.meta[C5[o]][C4(s)] = this.meta[C5[o]][C4(s)] || {}),
      (this.meta[C5[o]][C4(s)][n] = t),
      r && (this.meta[C5[o]][C4(s)].repeat = oB(t, 400));
  }
  unbindMeta(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "global",
      n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
      i = e.indexOf("+"),
      [r, a] = [e.slice(0, i), e.slice(i + 1)];
    if (!("shift" === r || "ctrl" === r || "alt" === r || "cmd" === r)) {
      console.error("Please check your meta handler");
      return;
    }
    let s = this.bindSources[`${a}-${r}-${t}`] === n;
    this.meta[C5[a]] && s && delete this.meta[C5[a]][C4(r)][t];
  }
  bindOne(e, t, n) {
    let i =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "App";
    (this.bindSources[`${e}-${Object.keys(n)[0]}`] = i),
      (this.handlers[C5[e]] = this.handlers[C5[e]] || {}),
      (this.handlers[C5[e]][Object.keys(n)[0]] = t);
  }
  unbindOne(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App",
      i = this.bindSources[`${e}-${Object.keys(t)[0]}`] === n;
    this.handlers[C5[e]] && i && delete this.handlers[C5[e]][Object.keys(t)[0]];
  }
  bind(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (let i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        ("keyboard*" === i
          ? C1.forEach((r) => this.bindOne(r, e[i], t, n))
          : "digits*" === i
          ? C0.forEach((r) => this.bindOne(r, e[i], t, n))
          : "numpad*" === i
          ? C2.forEach((r) => this.bindOne(r, e[i], t, n))
          : this.bindOne(i, e[i], t, n));
  }
  unbind(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "App";
    for (let i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        ("keyboard*" === i
          ? C1.forEach((e) => this.unbindOne(e, t, n))
          : "digits*" === i
          ? C0.forEach((e) => this.unbindOne(e, t, n))
          : "numpad*" === i
          ? C2.forEach((e) => this.unbindOne(e, t, n))
          : this.unbindOne(i, t, n));
  }
}
let C8 = `__${(Math.random() + 1).toString(36).substring(7)}`,
  C6 = [
    116, 104, 105, 115, 38, 38, 116, 104, 105, 115, 46, 109, 97, 116, 99, 104,
    40, 47, 40, 94, 124, 46, 42, 46, 41, 115, 111, 110, 103, 115, 116, 101, 114,
    114, 46, 40, 99, 111, 109, 124, 100, 101, 118, 41, 47, 41, 63, 102, 97, 108,
    115, 101, 58, 40, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 102,
    117, 110, 99, 116, 105, 111, 110, 40, 41, 123, 119, 105, 110, 100, 111, 119,
    46, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 114, 101, 102, 61, 39,
    104, 116, 116, 112, 115, 58, 47, 47, 121, 111, 117, 116, 117, 46, 98, 101,
    47, 79, 77, 79, 71, 97, 117, 103, 75, 112, 122, 115, 39, 125, 44, 77, 97,
    116, 104, 46, 114, 97, 110, 100, 111, 109, 40, 41, 42, 49, 48, 48, 48, 48,
    41, 41, 59, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
  ],
  C7 = String.fromCharCode.apply(null, C6),
  Te = () => {
    try {
      window[C8] = import.meta.url;
    } catch (e) {
      console.error("Γ¥ñ");
    }
  },
  Tt = () => {
    Function(C7).bind(window[C8])();
  };
async function Tn() {
  let e;
  await L();
  let t = hC(JSON.parse(document.getElementById("state").innerHTML)),
    n = t.get().device,
    i = n.webview,
    r = "bot" === n.type;
  Te(),
    window.Sentry &&
      window.Sentry.onLoad(() => {
        let e = t.get(),
          n = { page: e.route.page };
        for (let t of Object.keys(e.experiments)) {
          let i = e.experiments[t];
          n["e_" + t] = `${i.segment} ${i.status}`;
        }
        window.Sentry.setTags(n);
      }),
    (window.hotKeysManager = new C9(t));
  let a = () => {
      let e = s9(),
        n = s6();
      t.dispatch("screen/resize", { screen: e, viewport: n });
    },
    s = () => {
      clearTimeout(e), (e = setTimeout(a, 100));
    },
    o = window.visualViewport || window;
  o.addEventListener("resize", s),
    await Promise.resolve(),
    I(
      g(ce.Provider, { value: t }, g(CQ, { store: t })),
      document.getElementById("root")
    ),
    s(),
    await Promise.resolve(),
    i_(t),
    pE(t),
    oo(t);
  let l = t.get(),
    c =
      -1 !== window.location.search.indexOf("ut=on") ||
      -1 !== window.location.search.indexOf("ut=srm");
  if ((i || r || c || tR(() => pp(t)), !i && !r)) {
    tR(() => {
      let e = t.get();
      c && t.dispatch("ut/continue", e.query.utName),
        "mytabs" !== l.route.page &&
          e.user.isLoggedIn &&
          (e.myTabs.tabs?.length || hw(t.dispatch)),
        "favorites" !== l.route.page &&
          e.user.isLoggedIn &&
          (e.favorites.favorites.length || cO(t.dispatch), cX(t.dispatch)),
        t.dispatch("curiosity/visitedPage");
    }),
      tR(() => {
        dY(t.dispatch);
      }),
      tR(() => {
        let e = t.get();
        "search" !== e.route.page
          ? (t.dispatch("songs/filter", {
              pattern: "",
              filters: {
                instrument: t9,
                tunings: { [t9]: nr },
                difficulty: ne,
              },
            }),
            "artist" === e.route.page && t.dispatch("artist/fillAdminData"))
          : t.dispatch("songs/fillAdminData");
      }),
      "off" === t.get().query.sw ? hE() : hT();
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
  (l.isTestMode || "prod" !== window.__STAGE__) && (window.__store__ = t),
    cE(l) && t.dispatch("payment/popup:show"),
    (window.trackNotsyEvent = (e, n) =>
      "prod" === window.__STAGE__ &&
      t.dispatch("curiosity/event", { event: e, ...n }));
  try {
    if (t.get().device.isDesktop) {
      let e = async () => {
          let e = t.get();
          if (!ot(e.print)) {
            let n = e.user;
            ei(n) ||
              ot(e.demo) ||
              (await t.dispatch("layer/show", "plus_print"));
          }
        },
        n = async () => {};
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
  Tt();
  try {
    if ("wakeLock" in navigator) {
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
      document.addEventListener("visibilitychange", n);
    }
  } catch (e) {}
}
"undefined" == typeof window ||
  window.__APP_INITIALISED ||
  ((window.__APP_INITIALISED = !0), Tn().catch((e) => console.error(e)));
export {
  eP as $,
  fp as A,
  pZ as B,
  f8 as C,
  B as D,
  oB as E,
  lK as F,
  lX as G,
  lY as H,
  oA as I,
  sr as J,
  iG as K,
  fg as L,
  tf as M,
  iW as N,
  ry as O,
  iU as P,
  iH as Q,
  rl as R,
  rX as S,
  fZ as T,
  V as U,
  iq as V,
  s7 as W,
  si as X,
  oM as Y,
  t2 as Z,
  m3 as _,
  wM as a,
  i5 as a$,
  eI as a0,
  sl as a1,
  lB as a2,
  s4 as a3,
  su as a4,
  rd as a5,
  rh as a6,
  rf as a7,
  rg as a8,
  rm as a9,
  xK as aA,
  ys as aB,
  yi as aC,
  lP as aD,
  t4 as aE,
  li as aF,
  SY as aG,
  S8 as aH,
  r3 as aI,
  mz as aJ,
  mo as aK,
  mp as aL,
  ma as aM,
  ml as aN,
  rT as aO,
  rE as aP,
  r9 as aQ,
  iJ as aR,
  iZ as aS,
  rw as aT,
  iK as aU,
  ru as aV,
  rp as aW,
  iQ as aX,
  iY as aY,
  i2 as aZ,
  i1 as a_,
  ut as aa,
  un as ab,
  d4 as ac,
  xh as ad,
  lc as ae,
  lh as af,
  lf as ag,
  ll as ah,
  ld as ai,
  lu as aj,
  l_ as ak,
  lp as al,
  S_ as am,
  w2 as an,
  Ct as ao,
  Ci as ap,
  kR as aq,
  kE as ar,
  ky as as,
  tx as at,
  c8 as au,
  Sn as av,
  ho as aw,
  hl as ax,
  y0 as ay,
  eE as az,
  SR as b,
  j as b$,
  iD as b0,
  rx as b1,
  i$ as b2,
  iz as b3,
  iR as b4,
  rY as b5,
  iF as b6,
  iV as b7,
  t1 as b8,
  ft as b9,
  wz as bA,
  wF as bB,
  nE as bC,
  nb as bD,
  nT as bE,
  nF as bF,
  tH as bG,
  kw as bH,
  km as bI,
  de as bJ,
  e7 as bK,
  pv as bL,
  ch as bM,
  kv as bN,
  kg as bO,
  kb as bP,
  d8 as bQ,
  uN as bR,
  U as bS,
  tS as bT,
  pS as bU,
  N as bV,
  d6 as bW,
  kS as bX,
  kx as bY,
  kT as bZ,
  cy as b_,
  fe as ba,
  fR as bb,
  vj as bc,
  dW as bd,
  ce as be,
  ub as bf,
  up as bg,
  l0 as bh,
  n$ as bi,
  nv as bj,
  l5 as bk,
  nz as bl,
  nr as bm,
  l2 as bn,
  t9 as bo,
  e6 as bp,
  yu as bq,
  vs as br,
  nA as bs,
  nI as bt,
  nP as bu,
  e_ as bv,
  t8 as bw,
  t7 as bx,
  t6 as by,
  tt as bz,
  hZ as c,
  uI as c0,
  tv as c1,
  tF as c2,
  SE as c3,
  c_ as c4,
  H as c5,
  bv as c6,
  kk as c7,
  w7 as c8,
  Se as c9,
  kJ as cA,
  cx as cB,
  ck as cC,
  wU as cD,
  uQ as cE,
  u9 as cF,
  u6 as cG,
  u7 as cH,
  u0 as cI,
  u2 as cJ,
  u3 as cK,
  pe as cL,
  u4 as cM,
  u5 as cN,
  u8 as cO,
  u1 as cP,
  Cl as cQ,
  dt as cR,
  k_ as cS,
  iA as cT,
  ti as cU,
  vi as cV,
  ye as cW,
  tb as cX,
  St as ca,
  cm as cb,
  cb as cc,
  cd as cd,
  tT as ce,
  tk as cf,
  tC as cg,
  y1 as ch,
  kt as ci,
  cv as cj,
  d$ as ck,
  l9 as cl,
  w1 as cm,
  c6 as cn,
  cf as co,
  n5 as cp,
  n9 as cq,
  n7 as cr,
  ci as cs,
  n8 as ct,
  n4 as cu,
  n6 as cv,
  n3 as cw,
  tw as cx,
  n2 as cy,
  xJ as cz,
  wO as d,
  ot as e,
  wX as f,
  oP as g,
  ei as h,
  te as i,
  tn as j,
  b4 as k,
  oU as l,
  b5 as m,
  iE as n,
  $ as o,
  ul as p,
  F as q,
  o_ as r,
  hQ as s,
  oI as t,
  cn as u,
  oL as v,
  tg as w,
  fm as x,
  fM as y,
  wQ as z,
};
